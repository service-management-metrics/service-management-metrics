import { LOCALE_SLUGS } from '#lib/book.js';
import { sitemapXml } from '#lib/server/sitemap.js';

export const prerender = true;

export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

/** One locale's contents page and topics, with alternates in the other locales. */
export function GET({ params }) {
  return new Response(sitemapXml([params.locale], ['/' + params.locale + '/']), {
    headers: { 'content-type': 'application/xml' }
  });
}
