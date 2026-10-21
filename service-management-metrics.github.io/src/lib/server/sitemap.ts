import { DEFAULT_LOCALE, SITE_URL } from '#lib/book.js';
import { sectionPath } from '#lib/segments.js';
import { localeSlugMap, slugs } from '#lib/server/book.js';

/**
 * `en-gb-oxendict` -> `en-GB-oxendict`, `zh-cn` -> `zh-CN`, `en-001` stays.
 * Locale slugs are already BCP 47 tags apart from case, and `oxendict` is a
 * registered variant subtag.
 */
function hreflang(locale: string): string {
  const [language, region, ...rest] = locale.split('-');
  return [language, region && region.length === 2 ? region.toUpperCase() : region, ...rest]
    .filter(Boolean)
    .join('-');
}

/**
 * Builds a sitemap for a book that search engines should index topic by topic —
 * readers arrive from a search for one concept, not for the front page.
 * Every locale's topics are listed with `xhtml:link` alternates pointing at
 * the same topic in every other locale (and `x-default` at the default
 * locale), so a search engine serves each reader the language they read.
 */
export function sitemapXml(locales: string[], extra: string[] = []): string {
  const slugMap = localeSlugMap();
  const url = (path: string, alternates: Record<string, string> = {}) => {
    const links = Object.entries(alternates).map(([locale, alternate]) => [
      hreflang(locale),
      `${SITE_URL}${encodeURI(alternate)}`
    ]);
    if (alternates[DEFAULT_LOCALE]) links.push(['x-default', `${SITE_URL}${alternates[DEFAULT_LOCALE]}`]);
    const alts = links
      .map(([lang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`)
      .join('');
    return `  <url><loc>${SITE_URL}${encodeURI(path)}</loc>${alts}${alts ? '\n  ' : ''}</url>`;
  };

  const topicGroups = (locale: string, slug: string): Record<string, string> => {
    const entry = Object.values(slugMap).find((group) => group[locale] === slug);
    const group = entry ?? {};
    return Object.fromEntries(Object.entries(group).map(([l, s]) => [l, sectionPath(l, 'topics', s)]));
  };

  const entries = [
    ...extra.map((path) => url(path)),
    ...locales.flatMap((locale) => [
      url(sectionPath(locale, 'contents')),
      ...slugs(locale).map((slug) => url(sectionPath(locale, 'topics', slug), topicGroups(locale, slug)))
    ])
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return body;
}
