/**
 * Skills grid, grouped the way the Experience section already displays
 * them (Frontend / Backend). Each skill carries an `evidenceSource` flag:
 *
 * - "audit-verified": backed by VERIFIED evidence in the Career Audit
 *   (02-career-evidence/*.yaml) — trained models, deployed services,
 *   documented architecture decisions, etc.
 * - "work-experience-unaudited": confirmed by the user as real prior
 *   work experience, but not independently verified against a specific
 *   analyzed repository in this audit pass. Kept because the user
 *   confirmed it's accurate — not removed, not silently promoted to
 *   "verified" either.
 *
 * Source: D:\KAI\proyectos\career-analysis\09-master-career-profile\SKILLS.md
 *         D:\KAI\proyectos\career-analysis\12-portfolio\portfolio-redesign.md
 */

/**
 * @typedef {Object} Skill
 * @property {string} title
 * @property {string} level
 * @property {"audit-verified"|"work-experience-unaudited"} evidenceSource
 */

/** @type {Skill[]} */
export const frontendSkills = [
  { title: "React", level: "Expert", evidenceSource: "audit-verified" },
  { title: "TypeScript", level: "Advanced", evidenceSource: "audit-verified" },
  { title: "JavaScript", level: "Expert", evidenceSource: "audit-verified" },
  {
    title: "Apollo GraphQL",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  { title: "HTML5", level: "Expert", evidenceSource: "audit-verified" },
  { title: "CSS3", level: "Expert", evidenceSource: "audit-verified" },
  {
    title: "Next.js",
    level: "Advanced",
    evidenceSource: "work-experience-unaudited",
  },
  {
    title: "Redux",
    level: "Advanced",
    evidenceSource: "work-experience-unaudited",
  },
  {
    title: "Tailwind CSS",
    level: "Advanced",
    evidenceSource: "work-experience-unaudited",
  },
];

/** @type {Skill[]} */
export const backendSkills = [
  { title: "C# / .NET 8", level: "Expert", evidenceSource: "audit-verified" },
  { title: "Node.js", level: "Expert", evidenceSource: "audit-verified" },
  { title: "NestJS", level: "Advanced", evidenceSource: "audit-verified" },
  { title: "Express.js", level: "Advanced", evidenceSource: "audit-verified" },
  {
    title: "PostgreSQL (Supabase, RLS)",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  { title: "MySQL", level: "Expert", evidenceSource: "audit-verified" },
  {
    title: "AWS (S3, CloudFront, Lambda, X-Ray)",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  {
    title: "MongoDB",
    level: "Advanced",
    evidenceSource: "work-experience-unaudited",
  },
];

/** @type {Skill[]} */
export const aiMlSkills = [
  {
    title: "ML model training & calibration",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  {
    title: "MLOps (ONNX export, train/serve parity)",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  {
    title: "LLM integration (function-calling)",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  {
    title: "Computer Vision (production deployment)",
    level: "Advanced",
    evidenceSource: "audit-verified",
  },
  {
    title: "Recommendation systems (SVD, collaborative filtering)",
    level: "Intermediate",
    evidenceSource: "audit-verified",
  },
];
