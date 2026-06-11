function getTranslation(translations = [], locale) {
  return (
    translations.find(t => t.language_code === locale) ??
    translations.find(t => t.language_code === "en") ??
    translations[0]
  )
}

export default getTranslation