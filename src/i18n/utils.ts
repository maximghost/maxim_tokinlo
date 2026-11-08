import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, locales, routes, type Locale, type RouteKey } from './config';

/** Reads the language from a URL such as /en/projects/ (falls back to French). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

/** Builds a localised path: localePath('en', 'projects', 'gamberge') -> /en/projects/gamberge/ */
export function localePath(locale: Locale, route?: RouteKey, slug?: string): string {
  const parts: string[] = [locale];
  if (route) parts.push(routes[route][locale]);
  if (slug) parts.push(slug);
  return `/${parts.join('/')}/`;
}

/**
 * Same page, other language: /fr/projets/gamberge/ -> /en/projects/gamberge/.
 * Translated URL segments are mapped too, so visitors never lose their place.
 */
export function switchLocalePath(url: URL, target: Locale): string {
  const segments = url.pathname.split('/');
  const current = segments[1];
  if (!isLocale(current)) return `/${target}/`;

  segments[1] = target;
  const section = segments[2];
  if (section) {
    const key = (Object.keys(routes) as RouteKey[]).find((k) => routes[k][current] === section);
    if (key) segments[2] = routes[key][target];
  }
  return segments.join('/');
}

/** Every language version of the current page, for hreflang links. */
export function alternates(url: URL): { locale: Locale; path: string }[] {
  return locales.map((locale) => ({ locale, path: switchLocalePath(url, locale) }));
}

type Project = CollectionEntry<'projects'>;

/** The project's slug, without its language folder: "fr/gamberge" -> "gamberge". */
export function projectSlug(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

/**
 * Projects for one language, sorted by `order`.
 * A project not yet translated falls back to its French version, and the
 * build prints a warning so the gap is never forgotten.
 */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection('projects');
  const bySlug = new Map<string, Partial<Record<Locale, Project>>>();

  for (const entry of all) {
    const [lang] = entry.id.split('/');
    const slug = projectSlug(entry);
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

type News = CollectionEntry<'news'>;

/** The news item's slug, without its language folder: "fr/sfm" -> "sfm". */
export function newsSlug(item: News): string {
  return item.id.split('/').slice(1).join('/');
}

/** News items for one language, newest first (then by `order`). */
export async function getNews(locale: Locale): Promise<News[]> {
  const items = await getCollection('news', (e) => e.id.startsWith(`${locale}/`));
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.data.order - b.data.order);
}
