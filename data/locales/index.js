import { fr } from "./fr";
import { en } from "./en";

export const DEFAULT_LOCALE = "fr";

export const SUPPORTED_LOCALES = [
  { id: "fr", label: fr.app.languageName },
  { id: "en", label: en.app.languageName },
];

export const UI_TEXT = { fr, en };

export function getUiText(locale = DEFAULT_LOCALE) {
  return UI_TEXT[locale] || UI_TEXT[DEFAULT_LOCALE];
}
