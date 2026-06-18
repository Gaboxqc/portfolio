import type { Translation } from "../types";

function getTranslation(translations: Translation[] = [], locale: string): Translation {
  // The API guarantees every translatable entity has at least one
  // translation row, so the fallback chain always resolves to a value.
  return (
    translations.find(t => t.language_code === locale) ??
    translations.find(t => t.language_code === "en") ??
    translations[0]
  ) as Translation
}

export default getTranslation
