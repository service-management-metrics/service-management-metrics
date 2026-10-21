import { LOCALE_SLUGS } from '#lib/book.js';
import { sitemapXml } from '#lib/server/sitemap.js';

export const prerender = true;

/** The whole book: every locale, plus the site-level pages. Each locale also has its own at `/<locale>/sitemap.xml`. */
export function GET() {
  return new Response(sitemapXml(LOCALE_SLUGS, ['/', '/skills/']), { headers: { 'content-type': 'application/xml' } });
}
