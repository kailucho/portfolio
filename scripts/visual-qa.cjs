const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const WebSocket = require("ws");

const phase = process.argv[2] || "after";
const widths = (process.argv[3] || "375,430,768,1024,1440,1920")
  .split(",")
  .map(Number)
  .filter(Boolean);
const pageUrl = process.argv[4] || "http://127.0.0.1:3000";
const outputRoot = path.join(os.tmpdir(), "portfolio-qa", phase);
const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];
const chromePath = chromeCandidates.find(fs.existsSync);

if (!chromePath) {
  throw new Error("Chrome/Edge executable not found");
}

fs.mkdirSync(outputRoot, { recursive: true });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDebugger(port) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const pages = await response.json();
      const page = pages.find((entry) => entry.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch (error) {
      // Chrome is still starting.
    }
    await delay(125);
  }
  throw new Error("Chrome DevTools endpoint did not become ready");
}

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }

  async connect() {
    await new Promise((resolve, reject) => {
      this.socket.once("open", resolve);
      this.socket.once("error", reject);
    });
    this.socket.on("message", (raw) => {
      const message = JSON.parse(raw.toString());
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }
      const callbacks = this.listeners.get(message.method) || [];
      callbacks.forEach((callback) => callback(message.params));
    });
  }

  on(method, callback) {
    const callbacks = this.listeners.get(method) || [];
    callbacks.push(callback);
    this.listeners.set(method, callbacks);
  }

  once(method, timeout = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`${method} timed out`)), timeout);
      const callback = (params) => {
        clearTimeout(timer);
        const callbacks = this.listeners.get(method) || [];
        this.listeners.set(
          method,
          callbacks.filter((item) => item !== callback)
        );
        resolve(params);
      };
      this.on(method, callback);
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.nextId;
      this.nextId += 1;
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.socket.close();
  }
}

function safeName(value, index) {
  const cleaned = (value || `section-${index + 1}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${String(index + 1).padStart(2, "0")}-${cleaned || "section"}`;
}

async function run() {
  const port = 9300 + Math.floor(Math.random() * 500);
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-chrome-"));
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profileDir}`,
      "--disable-gpu",
      "--disable-extensions",
      "--disable-background-networking",
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true }
  );

  const report = { phase, pageUrl, outputRoot, browser: chromePath, viewports: [] };

  try {
    const debuggerUrl = await waitForDebugger(port);
    const cdp = new CdpClient(debuggerUrl);
    await cdp.connect();
    await Promise.all([
      cdp.send("Page.enable"),
      cdp.send("Runtime.enable"),
      cdp.send("Log.enable"),
      cdp.send("Network.enable"),
    ]);

    let activeLog = null;
    cdp.on("Runtime.consoleAPICalled", (event) => {
      if (!activeLog) return;
      activeLog.console.push({
        type: event.type,
        text: event.args.map((arg) => arg.value ?? arg.description ?? "").join(" "),
      });
    });
    cdp.on("Runtime.exceptionThrown", (event) => {
      if (!activeLog) return;
      activeLog.exceptions.push(event.exceptionDetails.text);
    });
    cdp.on("Log.entryAdded", ({ entry }) => {
      if (!activeLog) return;
      activeLog.browserLog.push({ level: entry.level, source: entry.source, text: entry.text });
    });
    cdp.on("Network.loadingFailed", (event) => {
      if (!activeLog || event.canceled) return;
      activeLog.networkFailures.push({ errorText: event.errorText, type: event.type });
    });

    for (const width of widths) {
      const height = width <= 430 ? 812 : width <= 768 ? 900 : 960;
      activeLog = {
        width,
        height,
        console: [],
        exceptions: [],
        browserLog: [],
        networkFailures: [],
        screenshots: [],
      };

      await cdp.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width <= 430,
        screenWidth: width,
        screenHeight: height,
      });
      await cdp.send("Emulation.setTouchEmulationEnabled", {
        enabled: width <= 430,
        maxTouchPoints: width <= 430 ? 5 : 1,
      });

      const loaded = cdp.once("Page.loadEventFired");
      await cdp.send("Page.navigate", { url: pageUrl });
      await loaded;
      await cdp.send("Runtime.evaluate", {
        expression: "document.fonts ? document.fonts.ready : Promise.resolve()",
        awaitPromise: true,
      });
      await delay(500);
      const metrics = await cdp.send("Runtime.evaluate", {
        expression: `(() => ({
          title: document.title,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollHeight: document.documentElement.scrollHeight,
          clientHeight: document.documentElement.clientHeight,
          h1Count: document.querySelectorAll('h1').length,
          sectionCount: document.querySelectorAll('section').length,
          activeElement: document.activeElement?.tagName,
          scrollY,
          smallTouchTargets: innerWidth <= 430
            ? Array.from(document.querySelectorAll('a, button, summary, input, textarea'))
                .filter((node) => {
                  const rect = node.getBoundingClientRect();
                  const style = getComputedStyle(node);
                  return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44);
                })
                .map((node) => ({ tag: node.tagName, text: (node.innerText || node.getAttribute('aria-label') || '').trim().slice(0, 60), width: Math.round(node.getBoundingClientRect().width), height: Math.round(node.getBoundingClientRect().height) }))
            : []
        }))()`,
        returnByValue: true,
      });
      activeLog.metrics = metrics.result.value;
      activeLog.horizontalOverflow =
        activeLog.metrics.scrollWidth > activeLog.metrics.clientWidth;

      const viewportPath = path.join(outputRoot, `${width}-viewport.png`);
      const viewportShot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        fromSurface: true,
      });
      fs.writeFileSync(viewportPath, Buffer.from(viewportShot.data, "base64"));
      activeLog.screenshots.push(viewportPath);

      if (width <= 430) {
        await cdp.send("Runtime.evaluate", {
          expression: "document.querySelector('.site-nav__toggle')?.click()",
        });
        await delay(320);
        const menuState = await cdp.send("Runtime.evaluate", {
          expression: `(() => ({
            expanded: document.querySelector('.site-nav__toggle')?.getAttribute('aria-expanded'),
            bodyLocked: document.body.classList.contains('menu-open')
          }))()`,
          returnByValue: true,
        });
        const menuPath = path.join(outputRoot, `${width}-mobile-menu.png`);
        const menuShot = await cdp.send("Page.captureScreenshot", {
          format: "png",
          fromSurface: true,
        });
        fs.writeFileSync(menuPath, Buffer.from(menuShot.data, "base64"));
        activeLog.screenshots.push(menuPath);
        activeLog.mobileMenu = menuState.result.value;
        await cdp.send("Runtime.evaluate", {
          expression: "document.querySelector('.site-nav__toggle')?.click()",
        });
        await delay(100);
      }

      await cdp.send("Runtime.evaluate", {
        expression: `(async () => {
          document.documentElement.style.scrollBehavior = 'auto';
          const step = Math.max(420, Math.floor(innerHeight * 0.72));
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            scrollTo(0, y);
            await new Promise((resolve) => setTimeout(resolve, 90));
          }
          scrollTo(0, 0);
          await new Promise((resolve) => setTimeout(resolve, 150));
        })()`,
        awaitPromise: true,
      });

      const layout = await cdp.send("Page.getLayoutMetrics");

      const fullPath = path.join(outputRoot, `${width}-full.png`);
      const fullShot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
        fromSurface: true,
        clip: {
          x: 0,
          y: 0,
          width: Math.ceil(layout.cssContentSize.width),
          height: Math.ceil(layout.cssContentSize.height),
          scale: 1,
        },
      });
      fs.writeFileSync(fullPath, Buffer.from(fullShot.data, "base64"));
      activeLog.screenshots.push(fullPath);

      const sectionResult = await cdp.send("Runtime.evaluate", {
        expression: `(() => Array.from(document.querySelectorAll('#root > main > header, #root > main > section, #root > footer'))
          .filter((node, index, list) => list.indexOf(node) === index)
          .map((node) => {
            const rect = node.getBoundingClientRect();
            return {
              name: node.id || node.getAttribute('aria-label') || node.tagName,
              y: Math.max(0, rect.top + scrollY),
              height: rect.height
            };
          }))()`,
        returnByValue: true,
      });

      for (const [index, section] of sectionResult.result.value.entries()) {
        if (!section.height) continue;
        const sectionPath = path.join(
          outputRoot,
          `${width}-${safeName(section.name, index)}.png`
        );
        const shot = await cdp.send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true,
          fromSurface: true,
          clip: {
            x: 0,
            y: Math.floor(section.y),
            width: Math.ceil(layout.cssContentSize.width),
            height: Math.min(Math.ceil(section.height), 12000),
            scale: 1,
          },
        });
        fs.writeFileSync(sectionPath, Buffer.from(shot.data, "base64"));
        activeLog.screenshots.push(sectionPath);
      }

      report.viewports.push(activeLog);
      activeLog = null;
    }

    cdp.close();
    fs.writeFileSync(
      path.join(outputRoot, "report.json"),
      JSON.stringify(report, null, 2),
      "utf8"
    );
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } finally {
    chrome.kill();
    await Promise.race([
      new Promise((resolve) => chrome.once("exit", resolve)),
      delay(2000),
    ]);
    try {
      fs.rmSync(profileDir, { recursive: true, force: true, maxRetries: 4, retryDelay: 250 });
    } catch (error) {
      process.stderr.write(`Chrome profile cleanup skipped: ${error.message}\n`);
    }
  }
}

run().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
