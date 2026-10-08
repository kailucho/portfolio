/**
 * Central profile data — single source of truth for name, headline, bio,
 * contact info, and social links. Consumed by Header, About, Footer, and
 * (eventually) SEO metadata, instead of hardcoding the same strings in
 * multiple components.
 *
 * Source of truth for this content:
 * D:\KAI\proyectos\career-analysis\09-master-career-profile\PROFILE.md
 * D:\KAI\proyectos\career-analysis\09-master-career-profile\CAREER_POSITIONING.md
 * D:\KAI\proyectos\career-analysis\10-cv\CV_EN.md
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} AboutCard
 * @property {string} icon    // key used by About.jsx to pick the react-icon
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} headline
 * @property {string} shortBio
 * @property {string} bio
 * @property {string} location
 * @property {string} email
 * @property {string} github
 * @property {string} linkedin
 * @property {SocialLink[]} socialLinks
 * @property {AboutCard[]} aboutCards
 * @property {string} seoTitle
 * @property {string} seoDescription
 */

/** @type {Profile} */
export const profile = {
  name: "Luijhy Guerra",
  headline: "Senior Software Engineer — AI Systems",

  shortBio:
    "I build AI/ML systems with the same engineering discipline I apply to any production software.",

  bio: "I'm a Senior Software Engineer with hands-on, verifiable AI/ML engineering experience — not just API consumption. I design layered architectures (Clean Architecture, documented via ADRs), build and calibrate ML models end-to-end (training, calibration, ONNX export, parity-tested inference), and integrate LLMs with real tool-calling logic. I apply the same rigor to product engineering: database-level data integrity, role-based access control, and disciplined scoping — the kind of work that shipped a tool two field supervisors actually use to coordinate ~330 site visits.",

  location: "Arequipa, Perú (open to remote)",
  email: "luijhy9234@gmail.com",
  github: "https://github.com/kailucho",
  linkedin: "https://www.linkedin.com/in/luijhy-michael-guerra-flores/",

  socialLinks: [
    { label: "GitHub", url: "https://github.com/kailucho" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/luijhy-michael-guerra-flores/",
    },
    { label: "Email", url: "mailto:luijhy9234@gmail.com" },
  ],

  // Replaces the previous "5+ Years / 15+ Clients Worldwide / 25+ Completed
  // Projects" cards. The user confirmed the clients/projects figures were
  // inflated with no real backing and asked for them to be removed; years
  // of experience was corrected to the real figure (working since Jan 2019).
  aboutCards: [
    { icon: "award", label: "Experience", value: "7+ Years in the Industry" },
    {
      icon: "cpu",
      label: "AI in Production",
      value: "Computer Vision microservice serving real users",
    },
    {
      icon: "folder",
      label: "Flagship Projects",
      value: "4 personal + 1 production AI system",
    },
  ],

  seoTitle: "Luijhy Guerra — Senior Software Engineer, AI Systems",
  seoDescription:
    "Senior Software Engineer with verifiable AI/ML engineering experience: trained ML models, LLM integration, and a production Computer Vision system — not just API consumption.",
};
