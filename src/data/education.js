/**
 * Education / ongoing coursework. Deliberately kept short per the Career
 * Audit's own guidance: the evidence weight is in the projects, not in
 * listing courses. Only the diploma and its two most substantial module
 * projects are included.
 *
 * Source: D:\KAI\proyectos\career-analysis\09-master-career-profile\EDUCATION.md
 */

/**
 * @typedef {Object} EducationEntry
 * @property {string} id
 * @property {string} title
 * @property {string} status
 * @property {string[]} highlights
 */

/** @type {EducationEntry[]} */
export const education = [
  {
    id: "ai-engineer-diploma",
    title: "AI Engineer diploma",
    status: "In progress",
    highlights: [
      "Trained a Rasa NLU intent-classification chatbot (multiple trained model versions).",
      "Built a hybrid recommendation system (popularity baseline, content-based TF-IDF, item-based collaborative filtering, and SVD matrix factorization) evaluated with Precision/Recall/NDCG@K and a Leave-One-Out train/test methodology.",
    ],
  },
];
