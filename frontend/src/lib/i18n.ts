export const supportedLocales = ['da', 'en'] as const
export type SiteLocale = (typeof supportedLocales)[number]

export const defaultLocale: SiteLocale = 'da'
export const baseLanguage = 'en'

export function normalizeLocale(value: string | undefined): SiteLocale {
  return value === 'en' ? 'en' : defaultLocale
}

export function languageQueryParams(locale: SiteLocale) {
  return {
    language: locale,
    baseLanguage,
  }
}

export function localePath(path: string, locale: SiteLocale) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (locale === 'en') return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`
  return normalizedPath
}
