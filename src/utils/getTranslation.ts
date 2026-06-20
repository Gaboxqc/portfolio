import type { Translation } from '../types'

function getTranslation(translations: Translation[] = [], locale: string): Translation {
  return (translations.find((t) => t.language_code === locale) ??
    translations.find((t) => t.language_code === 'en') ??
    translations[0]) as Translation
}

export default getTranslation
