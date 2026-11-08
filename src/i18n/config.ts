export const locales = ['fr', 'en', 'fi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

/** Labels shown in the language switcher, written in their own language. */
export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  fi: 'Suomi',
};

/** Values for the <html lang> attribute and hreflang links. */
export const htmlLang: Record<Locale, string> = {
  fr: 'fr',
  en: 'en',
  fi: 'fi',
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/**
 * Translated URL segments, so every language reads naturally:
 * /fr/projets/gamberge/, /en/projects/gamberge/, /fi/projektit/gamberge/.
 */
export const routes = {
  projects: { fr: 'projets', en: 'projects', fi: 'projektit' },
  about: { fr: 'a-propos', en: 'about', fi: 'tietoa' },
  news: { fr: 'actualites', en: 'news', fi: 'ajankohtaista' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;
