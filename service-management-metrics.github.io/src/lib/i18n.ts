// UI strings, through Sveltia I18n (https://github.com/sveltia/sveltia-i18n).
//
// One message file per locale in ./locales/<locale>.json, loaded eagerly: the
// site is prerendered, and the files are tiny. Importing this module registers
// them. Call `await setLocale(code)` before rendering (see routes/+layout.ts).
//
// Sveltia keeps the active locale in a process-wide singleton. That is unsafe
// for a live multi-request server, but this site is prerendered one page at a
// time at build time and then runs only in the browser, so it is safe here.

import { addMessages, init, isRTL, locale, waitLocale, format } from '@sveltia/i18n';
import { DEFAULT_LOCALE, LOCALE_SLUGS, isLocale } from '#lib/book.js';

const messageFiles = import.meta.glob('./locales/*.json', { eager: true, import: 'default' }) as Record<
  string,
  Record<string, unknown>
>;

for (const [path, messages] of Object.entries(messageFiles)) {
  addMessages(path.match(/\/([^/]+)\.json$/)![1], messages);
}

init({ fallbackLocale: DEFAULT_LOCALE, initialLocale: DEFAULT_LOCALE });

/** Switch the UI language (falls back to the default locale for an unknown code). */
export async function setLocale(code: string | undefined): Promise<void> {
  const next = code && isLocale(code) ? code : DEFAULT_LOCALE;
  if (locale.current !== next) await locale.set(next);
  await waitLocale();
}

/**
 * Look up a UI string. MessageFormat wraps interpolated text in invisible
 * bidi-isolate characters; in a left-to-right locale they only leak into page
 * titles and the search index, so they are removed there and kept for
 * right-to-left locales, where they matter.
 */
export const _: typeof format = ((...args: Parameters<typeof format>) => {
  const text = format(...args);
  return isRTL() ? text : text.replace(/[\u2066-\u2069]/g, '');
}) as typeof format;

export { locale, LOCALE_SLUGS };
