/**
 * Professional (employment/freelance) work history — distinct from
 * `projects.js`, which covers personal flagship projects.
 *
 * All entries below are traceable to VERIFIED evidence gathered under
 * explicit user authorization (Career Audit, Phase 10 — work-project
 * analysis). No proprietary business logic, internal ticket references,
 * or client-confidential details are included — only architecture,
 * technology, and contribution-volume evidence, per the audit's
 * confidentiality rules.
 *
 * Source: D:\KAI\proyectos\career-analysis\09-master-career-profile\EXPERIENCE.md
 *         D:\KAI\proyectos\career-analysis\10-cv\CV_EN.md
 */

/**
 * @typedef {Object} WorkExperience
 * @property {string} id
 * @property {string} role
 * @property {string} organization
 * @property {string} period
 * @property {string[]} technologies
 * @property {string[]} highlights
 */

/** @type {WorkExperience[]} */
export const experience = [
  {
    id: "utp",
    role: "Senior Software Engineer",
    organization: "UTP (Universidad Tecnológica del Perú)",
    period: "June 2023 – Present",
    technologies: ["React", "Apollo GraphQL", "NestJS", "TypeScript", "AWS"],
    highlights: [
      "Founded and built a NestJS microservice for production facial-recognition and photo-quality evaluation (face-api.js / TensorFlow.js), deployed on AWS S3/CloudFront for a university portal serving real students.",
      "3+ years on the main student portal (React, Apollo GraphQL, Keycloak): scholarship registration, payment features, and error handling, across 389 substantive commits.",
      "Built and maintained a GraphQL BFF (TypeGraphQL + TypeDI) bridging legacy SOAP systems to a modern TypeScript stack, instrumented with distributed tracing (AWS X-Ray, Datadog, Zipkin).",
    ],
  },
  {
    id: "sigobras",
    role: "Full Stack Developer",
    organization: "sigobras (client engagement)",
    period: "2019 – 2021",
    technologies: ["Express", "MySQL", "React", "Socket.io"],
    highlights: [
      "Sole/primary developer of a construction-site management platform for 2+ years: Express/MySQL backend and two React frontends (1000+ backend commits).",
      "Built real-time progress tracking (Socket.io), site-photo processing (Sharp), and PDF/chart reporting (Highcharts, jsPDF/pdfmake) for construction quantity ('metrado') tracking.",
    ],
  },
];
