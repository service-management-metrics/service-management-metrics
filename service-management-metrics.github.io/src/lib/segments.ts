// URL segments per locale. The content tree and the routes use the canonical
// English names (`contents`, `topics`). A locale may name
// them in its own language (locale.json "dirs", copied by scripts/sync-content.sh
// to content/locales/<locale>/dirs.json); `src/hooks.ts` maps those URLs back to
// the canonical routes, and every link is built here.

export type Section = 'contents' | 'topics';

const files = import.meta.glob('../content/locales/*/dirs.json', {
  import: 'default',
  eager: true
}) as Record<string, Partial<Record<Section, string>>>;

const local: Record<string, Partial<Record<Section, string>>> = {};
for (const [path, dirs] of Object.entries(files)) {
  const locale = path.match(/\/locales\/([^/]+)\/dirs\.json$/)?.[1];
  if (locale) local[locale] = dirs;
}

/** This locale's URL segment for a section (the canonical name when it has no translation). */
export function segment(locale: string, section: Section): string {
  return local[locale]?.[section] ?? section;
}

/** The canonical section named by a URL segment in this locale, if any. */
export function canonicalSection(locale: string, seg: string): Section | undefined {
  const dirs = local[locale];
  if (!dirs) return undefined;
  return (Object.keys(dirs) as Section[]).find((section) => dirs[section] === seg);
}

/** `/<locale>/<segment>/` or `/<locale>/<segment>/<slug>/`. */
export function sectionPath(locale: string, section: Section, slug?: string): string {
  return `/${locale}/${segment(locale, section)}/${slug ? `${slug}/` : ''}`;
}

/** True when the locale names this section differently from the canonical route. */
export function isTranslated(locale: string, section: Section): boolean {
  return segment(locale, section) !== section;
}
