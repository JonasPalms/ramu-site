export const baseLanguage = 'en'

export const contentLanguage = (
  import.meta.env.SANITY_CONTENT_LANGUAGE || baseLanguage
).toLowerCase()

export const languageQueryParams = {
  language: contentLanguage,
  baseLanguage,
}
