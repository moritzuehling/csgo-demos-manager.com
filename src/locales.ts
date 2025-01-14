export const LOCALES: { [locale: string]: string } = {
  en: 'English',
  fr: 'Francais',
}

export const LOCALE_PATH_REGEX = `/:locale(${Object.keys(LOCALES)
  .map(locale => locale)
  .join('|')})?`
