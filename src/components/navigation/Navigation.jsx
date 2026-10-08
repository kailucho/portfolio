import React, { useEffect, useState } from "react";
import { navigationItems } from "../../data/site";
import { profile } from "../../data/profile";
import "./navigation.css";

const trackedIds = ["home", ...navigationItems.map(({ href }) => href.slice(1)), "contact"];

const Navigation = () => {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-22% 0px -62%", threshold: [0, 0.15, 0.4] }
    );

    trackedIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#home" onClick={closeMenu} aria-label="Luijhy Guerra, home">
          <span>LG</span>
          <span className="site-nav__brand-coordinate">16.4°S / 71.5°W</span>
        </a>

        <div className="site-nav__links" aria-label="Portfolio sections">
          {navigationItems.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <a key={href} href={href} className={activeId === id ? "is-active" : ""}>
                {label}
              </a>
            );
          })}
        </div>

        <a className="site-nav__contact" href="#contact">
          <span className="status-dot" aria-hidden="true" />
          Let&apos;s talk
        </a>

        <button
          className="site-nav__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
        <div className="mobile-nav__links">
          {navigationItems.map(({ label, href }, index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>
            <span>05</span>
            Contact
          </a>
        </div>
        <div className="mobile-nav__meta">
          <span>{profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
