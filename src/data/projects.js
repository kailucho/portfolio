/**
 * Portfolio project data — replaces the previous Contentful "portfolio"
 * content type. Each project can optionally carry a full case study
 * (problem/context/role/architecture/... /learnings); UI components should
 * render whichever fields are present and gracefully omit the rest — never
 * fabricate missing sections.
 *
 * All case-study content below is copied verbatim (only reformatted for
 * JS strings) from the Career Audit's approved case studies:
 * D:\KAI\proyectos\career-analysis\12-portfolio\case-study-*.md
 *
 * No real screenshots of these projects exist yet in this repo. Rather than
 * reusing generic unrelated stock images (a COVID dashboard, an Amazon
 * clone, a recipe app) that would misrepresent what these projects actually
 * are, each project instead carries a `category` label rendered as a
 * typographic badge in the UI — honest about not having a screenshot yet,
 * without fabricating a fake one. Replace with real screenshots when
 * available (see TODO in Portfolio.jsx).
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} summary               // short 1-2 line description for the card
 * @property {string} category               // short label for the visual badge, e.g. "AI / ML"
 * @property {string[]} technologies
 * @property {string=} githubUrl
 * @property {string=} demoUrl
 * @property {boolean} featured
 * @property {string=} problem
 * @property {string=} context
 * @property {string=} myRole
 * @property {string=} architecture
 * @property {string=} technicalChallenges
 * @property {string=} decisions
 * @property {string=} implementation
 * @property {string=} results
 * @property {string[]=} metrics
 * @property {string=} learnings
 * @property {string=} confidentialityNote
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "dota-ai-coach",
    slug: "dota-ai-coach",
    title: "Dota AI Coach",
    summary:
      "Real-time AI coaching desktop app for Dota 2 — trained ML models (win probability, draft, item ranking), an LLM advisor, and a Clean Architecture .NET solution documented through 24 ADRs.",
    category: "AI / ML Engineering",
    technologies: [".NET 8", "Clean Architecture", "Python", "ONNX", "WPF"],
    githubUrl: "https://github.com/kailucho/dota-ai-coach",
    featured: true,

    problem:
      "Dota 2 players make suboptimal real-time decisions — build orders, item timings, draft picks — because they lack instant, contextual analysis of their own match state while playing.",
    context:
      "A personal project built to explore whether a desktop coaching tool could meaningfully improve decision-making using only information a player could legitimately see on their own screen — a deliberate constraint to avoid any competitive-integrity concerns.",
    myRole:
      "Solo project: research, architecture, implementation, ML training, and testing — full ownership end to end.",
    architecture:
      "A 12-module .NET 8 Clean Architecture solution with a dedicated architectural seam (FeatureEngine) decoupling real-time data ingestion (Dota's Game State Integration feed) from recommendation logic — verified automatically by a dedicated Architecture.Tests project. Pipeline: Dota GSI feed → MatchState → FeatureEngine → RecommendationEngine → Overlay.",
    technicalChallenges:
      "Real-time, unreliable data: the GSI feed can send partial or stale payloads, solved with an explicit merge strategy and a FeedHealth mechanism that degrades to an explicit 'Unknown' state instead of showing incorrect data. ML that has to run inside a desktop app, not a server: trained models in Python, exported to ONNX, and verified with parity fixtures confirming the .NET inference reproduces the Python model exactly. A validation-AUC regression appeared while iterating on the Win Probability classifier — diagnosed and fixed via a hyperparameter search on the regularization term.",
    decisions:
      "24 Architecture Decision Records document the reasoning behind every major choice. Two worth highlighting: an ethical constraint encoded as code, not just policy — a FairPlayClassification system explicitly categorizes what data is legitimate to use, backed by a structural test; and choosing a JSON cache over SQLite for player profile data, a deliberate trade-off favoring simplicity for a single-user desktop app.",
    implementation:
      "Three ML models trained and shipped: a calibrated Win Probability classifier (isotonic calibration), a Draft baseline (hero winrate + matchup matrix), and an Item Recommendation ranker — plus an LLM-based advisor using function-calling for contextual item suggestions.",
    results:
      "A working vertical slice: live GSI ingestion → feature extraction → rule and ML-based recommendations → a transparent, click-through-capable WPF overlay — plus a Player Profile dashboard (Hero Comfort Score, 'Dota DNA') sourced from public OpenDota match history.",
    metrics: [
      "24 documented ADRs",
      "9 dedicated test projects (including an architecture-conformance suite)",
      "3 trained ML models with train/serve parity verification",
      "Published on GitHub with CI (build + test on windows-latest)",
    ],
    learnings:
      "Documenting trade-offs as you make them (ADRs) turns 'why did I do this?' from a memory problem into a lookup. The fair-play constraint also proved that an ethical/product principle can be made testable, not just aspirational.",
  },
  {
    id: "supervisa-360",
    slug: "supervisa-360",
    title: "Supervisa 360",
    summary:
      "Field-supervision coordination platform deployed to production — built for 2 field supervisors and a manager to coordinate visits across ~330 partner associations.",
    category: "Full-Stack Product",
    technologies: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    demoUrl: "https://supervisa-360-cej1o04vi-kailuchos-projects.vercel.app",
    featured: true,

    problem:
      "Two field supervisors at a nonprofit coordinate supervision visits to roughly 330 partner associations across two cities — with no dedicated tool, just manual coordination and the risk of double-booking or losing track of monthly goals.",
    context:
      "A real product built for a real, named audience: two supervisors and a supervision manager who needed a shared, reliable way to schedule, track, and report on field visits.",
    myRole:
      "Solo project: product scoping, database design, full-stack implementation, and deployment.",
    architecture:
      "A React 19 + TypeScript SPA on top of Supabase (Auth, PostgreSQL with Row Level Security, PostgREST) — no custom backend server. Feature-based frontend structure (auth / advisors / associations / visits / schedule / goals), with a typed Supabase client layer and a centralized error translator.",
    technicalChallenges:
      "Preventing double-booking without trusting the frontend alone — the 'no duplicate active visit' rule had to hold even under a client bug or a future integration bypassing frontend validation. A two-role permission model (supervisor vs. supervision manager) needed to be enforced at the data layer, not just hidden in the UI.",
    decisions:
      "Business-integrity triggers in PostgreSQL, not application code: a single-active-visit enforcement trigger, a responsible-advisor snapshot trigger, and a result-completeness trigger. Row Level Security by role, enforced by Postgres rather than by hiding UI elements. Explicit, applied security discipline: the documentation repeatedly warns against ever exposing the Supabase service_role key in the frontend bundle — a mistake this project actively avoided.",
    implementation:
      "4 incremental database migrations (initial schema → supervision-manager role + RLS → monthly plans → visit evidence), numbered business rules, and tracked user stories with an explicit out-of-scope document defining MVP boundaries.",
    results:
      "A complete MVP: authentication, a shared dashboard, a read-only advisor catalog, association management with full visit history, a shared agenda with filters, visit scheduling/rescheduling/cancellation with duplicate/annual-repeat guards, and visit-result recording — deployed to production on Vercel.",
    metrics: [
      "~330 partner associations covered by the system's data model",
      "2 named field supervisors + 1 supervision manager as real users",
      "~400 test files (Vitest + React Testing Library)",
      "4 incremental schema migrations",
      "Live in production on Vercel",
    ],
    learnings:
      "Putting integrity rules in the database rather than only in the frontend meant correctness didn't depend on remembering to re-validate everywhere the data could change. Documenting explicit out-of-scope decisions made it much easier to say 'yes, that's intentionally not built yet.'",
  },
  {
    id: "dota-plus-free",
    slug: "dota-plus-free",
    title: "Dota Build Assistant",
    summary:
      "LLM-powered item recommendation service with real function-calling — not a prompt wrapper — deployed serverless on AWS Lambda.",
    category: "LLM Integration",
    technologies: ["TypeScript", "Node.js", "Express", "OpenAI", "AWS Lambda"],
    githubUrl: "https://github.com/kailucho/dota-plus-free",
    featured: true,

    problem:
      "Dota 2 players want quick, contextual item purchase suggestions without manually cross-referencing build guides mid-game.",
    context:
      "A personal project exploring LLM-powered recommendations with real tool-calling logic, deployed as a lightweight, cost-effective serverless service.",
    myRole: "Primary developer (1 of 2 contributors on the repository).",
    architecture:
      "An npm-workspaces monorepo with three packages: @dba/server (Express + TypeScript API), @dba/web (React + Vite frontend), and @dba/shared (shared types/Zod schemas) — deployed as an AWS Lambda serverless function.",
    technicalChallenges:
      "Making LLM output actually actionable, not just conversational: the server implements real function-calling, where the model invokes defined tools to generate a structured purchase order rather than free-form text. Request/response timeout handling for an LLM-backed endpoint inside a Lambda's execution constraints.",
    decisions:
      "Chose function-calling over a plain prompt-and-parse approach specifically so the LLM's output maps directly to a structured, type-safe purchase order — reducing the risk of unparseable or inconsistent responses.",
    implementation:
      "'suggest' and 'tick' endpoints unified into a single flow with an enhanced payload structure; error handling improved in the tool-calling layer.",
    results:
      "A working LLM-integrated recommendation API, deployed serverless with a CI/CD pipeline.",
    metrics: ["39 commits, 2 contributors", "Deployed via GitHub Actions to AWS Lambda"],
    learnings:
      "Function-calling turned out to matter more for reliability than prompt engineering alone — once the model's output had to conform to a defined tool schema, the failure mode shifted from 'unparseable text' to 'well-typed but occasionally wrong,' a much easier problem to debug.",
  },
  {
    id: "simulador-credito-telegram",
    slug: "simulador-credito-telegram",
    title: "Simulador de Crédito (Telegram Bot + Mini App)",
    summary:
      "Deterministic financial-schedule simulator with E2E test coverage, and a transparently documented, honest disclaimer about its reverse-engineered methodology.",
    category: "Fintech",
    technologies: ["TypeScript", "Telegram Bot API", "Playwright"],
    featured: true,

    problem:
      "People considering a group credit product need to understand their 28-day payment schedule before committing — without waiting for a loan officer.",
    context:
      "A personal project simulating a real group-credit payment schedule via a Telegram bot and Mini App, with an unusually strong emphasis on transparency about the calculation methodology's limitations.",
    myRole: "Sole developer.",
    architecture:
      "A deterministic financial calculation engine — chosen deliberately for a domain where predictability matters more than flexibility — exposed through a Telegram bot and a Telegram Mini App frontend, with a dedicated API layer and E2E test coverage via Playwright.",
    technicalChallenges:
      "Reverse-engineering a real payment formula: the methodology wasn't publicly documented, so two rate-calibration factors were derived by calibrating against validated real-world examples until the schedule matched digit-for-digit.",
    decisions:
      "The single most important decision isn't technical — it's the explicit, prominent disclaimer stating this is not an official tool of any institution, and that results should always be verified against the official methodology. A product-integrity call, not just a legal one.",
    implementation:
      "A deterministic engine calculating capital, interest, scheduled contributions, and microinsurance for a 28-day group credit product, wrapped in a Telegram bot and Mini App, with E2E tests validating the full user flow.",
    results:
      "A working simulator accurate enough to match validated real examples digit-for-digit, with the reverse-engineering methodology and its limits documented transparently.",
    metrics: ["E2E test suite (Playwright)", "Deterministic engine validated against real cronogram examples"],
    learnings:
      "Reverse-engineering a formula is a legitimate technique when you don't control the source system — but shipping it without disclosing that fact would have been a product-integrity failure, not just a technical shortcut.",
  },
  {
    id: "utp-facial-recognition",
    slug: "utp-facial-recognition",
    title: "Facial Recognition Microservice (UTP)",
    summary:
      "Production Computer Vision microservice — facial recognition and photo-quality evaluation serving a university's student portal.",
    category: "Computer Vision",
    technologies: ["NestJS", "TypeScript", "face-api.js", "TensorFlow.js", "AWS"],
    featured: true,
    confidentialityNote:
      "This describes a real production system at UTP. Content is sanitized — no business logic, internal ticket references, or data-handling specifics beyond what's stated here.",

    problem:
      "The university's student portal needed a way to verify photo/identity quality without a manual review bottleneck.",
    context:
      "Part of a broader student-portal ecosystem at UTP (Universidad Tecnológica del Perú), serving the university's students. This was a new capability, not an extension of an existing one.",
    myRole:
      "Founded the microservice — wrote the initial project structure and led the core facial-recognition and photo-evaluation implementation, within a small team.",
    architecture:
      "A NestJS microservice with two modules — facial recognition and photo quality evaluation — using a pretrained deep learning model (face-api.js running on TensorFlow.js), with images stored/served via AWS S3 and CloudFront, and AWS X-Ray for distributed tracing.",
    technicalChallenges:
      "Running a Node.js-based deep learning model reliably in a production NestJS service, including native binding concerns for the tfjs-node addon. Validating image quality/consistency for facial recognition to work reliably.",
    decisions:
      "Chose a pretrained, well-established face-detection library over training a custom model from scratch — the right trade-off for a well-understood problem where a mature, tested model reduces risk for a first production Computer Vision feature.",
    implementation:
      "Two NestJS modules (facial-recognition, photo-evaluation), with dedicated unit tests including private-method coverage, Swagger API documentation, and X-Ray tracing integration.",
    results:
      "A production Computer Vision capability serving the university's student portal — the only such capability across this entire portfolio, personal projects included.",
    metrics: [
      "Refactoring history shows iterative improvement, not a one-shot implementation",
    ],
    learnings:
      "Shipping a first Computer Vision feature in production taught more about operational concerns (native module builds, image validation edge cases) than about the ML itself — the model was 'solved' by choosing a mature library; the engineering work was in making it reliable.",
  },
];
