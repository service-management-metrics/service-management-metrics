import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';

/** One landing page per locale: the hero, with a link on to the contents page. */
export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { locale: params.locale };
}
