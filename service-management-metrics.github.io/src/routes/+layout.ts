import { DEFAULT_LOCALE, isLocale } from '#lib/book.js';
import { setLocale } from '#lib/i18n.js';

// Everything on this site is static prose, so prerender the whole thing.
// adapter-static then emits plain HTML that GitHub Pages serves directly.
export const prerender = true;
export const trailingSlash = 'always';

/** Set the UI language from the URL's first segment before anything renders. */
export async function load({ url }) {
  const first = url.pathname.split('/')[1] ?? '';
  await setLocale(isLocale(first) ? first : DEFAULT_LOCALE);
}
