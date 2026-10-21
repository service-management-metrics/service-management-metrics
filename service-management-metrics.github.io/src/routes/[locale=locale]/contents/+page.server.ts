import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { isTranslated } from '#lib/segments.js';
import { parts, toc } from '#lib/server/book.js';

/** One contents page per locale. */
export function entries() {
  return LOCALE_SLUGS.filter((locale) => !isTranslated(locale, 'contents')).map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale, toc: toc(params.locale), parts: parts() };
}
