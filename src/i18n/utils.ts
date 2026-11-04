import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, locales, type Locale } from './config';

/** Reads the language from a URL such as /en/projects/ (falls back to French). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

/**
 * Same page, other language: /fr/a-propos/ -> /en/a-propos/.
 * Used by the language switcher so visitors never lose their place.
 */
export function switchLocalePath(url: URL, target: Locale): string {
  const segments = url.pathname.split('/');
  if (isLocale(segments[1])) {
    segments[1] = target;
    return segments.join('/');
  }
  return `/${target}/`;
}

/** Every language version of the current page, for hreflang links. */
export function alternates(url: URL): { locale: Locale; path: string }[] {
  return locales.map((locale) => ({ locale, path: switchLocalePath(url, locale) }));
}

type Project = CollectionEntry<'projects'>;

/**
 * Projects for one language, sorted by `order`.
 * A project not yet translated falls back to its French version, and the
 * build prints a warning so the gap is never forgotten.
 */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection('projects');
  const bySlug = new Map<string, Partial<Record<Locale, Project>>>();

  for (const entry of all) {
    const [lang, slug] = entry.id.split('/');
    if (!isLocale(lang) || !slug) continue;
    const versions = bySlug.get(slug) ?? {};
    versions[lang] = entry;
    bySlug.set(slug, versions);
  }

  const result: Project[] = [];
  for (const [slug, versions] of bySlug) {
    const entry = versions[locale] ?? versions[defaultLocale];
    if (!entry) continue;
    if (!versions[locale]) {
      console.warn(`[i18n] Project "${slug}" has no "${locale}" version: using French.`);
    }
    result.push(entry);
  }

  return result.sort((a, b) => a.data.order - b.data.order);
}
