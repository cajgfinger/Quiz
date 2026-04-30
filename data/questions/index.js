import { mathsQuestions } from "./fr/maths.js";
import { frenchQuestions } from "./fr/french.js";
import { historyQuestions } from "./fr/history.js";
import { geographyQuestions } from "./fr/geography.js";
import { languageQuestions } from "./fr/languages.js";
import { physicsQuestions } from "./fr/physics.js";
import { astronomyQuestions } from "./fr/astronomy.js";
import { svtQuestions } from "./fr/svt.js";
import { chemistryQuestions } from "./fr/chemistry.js";
import { technologyQuestions } from "./fr/technology.js";
import { emcQuestions } from "./fr/emc.js";
import { progressionQuestions } from "./fr/progression.js";
import { topicExtensionQuestions } from "./fr/topicExtensions.js";
import { themeBoosterQuestions } from "./fr/themeBoosters.js";

// Each question: { id, q, choices, answer, explanation, difficulty, tags: string[] }
let _id = 1;
const q = (question, choices, answer, explanation, difficulty, tags) => ({
  id: _id++, q: question, choices, answer, explanation, difficulty, tags,
});

const BASE_QUESTIONS = [
  ...mathsQuestions(q),
  ...frenchQuestions(q),
  ...historyQuestions(q),
  ...geographyQuestions(q),
  ...languageQuestions(q),
  ...physicsQuestions(q),
  ...astronomyQuestions(q),
  ...svtQuestions(q),
  ...chemistryQuestions(q),
  ...technologyQuestions(q),
  ...emcQuestions(q),
  ...progressionQuestions(q),
  ...topicExtensionQuestions(q),
];

export const ALL_QUESTIONS = [
  ...BASE_QUESTIONS,
  ...themeBoosterQuestions(q, BASE_QUESTIONS),
];

// Returns questions that have ALL the selected tags (AND logic)
export function filterQuestions(selectedTags) {
  if (!selectedTags || selectedTags.length === 0) return ALL_QUESTIONS;
  return ALL_QUESTIONS.filter(q =>
    selectedTags.every(tag => q.tags.includes(tag))
  );
}

