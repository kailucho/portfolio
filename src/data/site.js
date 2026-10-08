export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#profile" },
];

export const proofPoints = [
  { value: "7+", label: "years engineering software" },
  { value: "03", label: "trained ML models" },
  { value: "24", label: "documented ADRs" },
  { value: "01", label: "production CV system" },
];

export const capabilityDomains = [
  {
    number: "01",
    title: "Production Software Engineering",
    description:
      "Systems designed for change: explicit boundaries, documented trade-offs, automated verification, and observable runtime behavior.",
    technologies: ["Clean Architecture", "ADRs", "CI/CD", "Architecture tests", "Distributed tracing"],
  },
  {
    number: "02",
    title: "Applied AI / ML",
    description:
      "Models and AI features taken beyond the notebook—from training and calibration to parity-tested inference and tool-calling integrations.",
    technologies: ["Python", "ONNX", "TensorFlow.js", "Model calibration", "LLM function-calling"],
  },
  {
    number: "03",
    title: "Backend & Systems Architecture",
    description:
      "Service layers that bridge product requirements, durable data rules, modern APIs, and legacy integrations without hiding the hard parts.",
    technologies: [".NET 8", "NestJS", "GraphQL", "Express", "PostgreSQL", "MySQL"],
  },
  {
    number: "04",
    title: "Cloud & Integration",
    description:
      "Focused cloud infrastructure and integration work across serverless delivery, storage, CDNs, tracing, and multi-system data flows.",
    technologies: ["AWS Lambda", "S3", "CloudFront", "X-Ray", "Datadog", "SOAP integration"],
  },
  {
    number: "05",
    title: "Product Engineering",
    description:
      "Frontends and product workflows grounded in access control, database-level integrity, explicit scope, and real operator needs.",
    technologies: ["React", "TypeScript", "Apollo", "Supabase RLS", "Product scoping"],
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Evidence over theater",
    text: "I would rather show a tested constraint, a documented trade-off, or a production integration than inflate a claim that cannot be verified.",
  },
  {
    number: "02",
    title: "AI becomes software when it ships",
    text: "The model is one part of the system. Reliability also lives in data contracts, failure states, parity checks, observability, and product decisions.",
  },
  {
    number: "03",
    title: "Architecture is decision history",
    text: "Good structure is not ceremony. It preserves why boundaries exist and makes the cost of future change visible before it becomes expensive.",
  },
];
