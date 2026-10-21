// Client-safe book metadata: locales, parts, and shared types.
//
// Locales live in ./locales.ts; UI strings in ./locales/<locale>.json.

/** One entry in the table of contents. */
export type TopicRef = {
  /** URL slug, identical to the topic's directory name in that locale (translated in some locales). */
  slug: string;
  /** Topic number such as `3.4`. */
  number: string;
  /** Title from the topic's first headline, e.g. `Change Enablement`. */
  title: string;
  /** Part number, 1-12. */
  part: number;
  /** Whether the topic has been written and synced. */
  written: boolean;
};

export type Part = { number: number; title: string };

export { DEFAULT_LOCALE, LOCALES, LOCALE_SLUGS, isLocale, type Locale } from './locales.ts';
import { LOCALE_SLUGS } from './locales.ts';

/**
 * The locale for a BCP 47 language tag such as `en-AU` or `cy_GB`:
 * the exact slug first, then the language's `-001` locale, then the first
 * locale in the same language. `undefined` when the book has none.
 */
export function localeForLanguageTag(tag: string): string | undefined {
  const lower = tag.toLowerCase().replace(/_/g, '-');
  if (LOCALE_SLUGS.includes(lower)) return lower;
  const language = lower.split('-')[0];
  if (LOCALE_SLUGS.includes(`${language}-001`)) return `${language}-001`;
  return LOCALE_SLUGS.find((slug) => slug.split('-')[0] === language);
}

export const SITE_URL = 'https://service-management-metrics.github.io';
export const SOURCE_REPO = 'https://github.com/service-management-metrics/service-management-metrics';
export const SKILLS_REPO = `${SOURCE_REPO}/tree/main/skills`;
