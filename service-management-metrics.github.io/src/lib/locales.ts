// The locales the site offers. Plain data with no Vite-only imports, because
// `src/params.ts` loads it directly in Node. To add a locale: add its message
// file `./locales/<slug>.json`, add a line here, and sync its content.

export type Locale = { slug: string; label: string };

export const DEFAULT_LOCALE = 'en-001';

/** Sorted by locale code (the picker lists them in this order). Labels are "<language> - <region>", in the locale's own language. */
export const LOCALES: Locale[] = [
  { slug: 'ar-001', label: 'العربية - العالم' },
  { slug: 'bn-001', label: 'বাংলা - বিশ্ব' },
  { slug: 'en-001', label: 'English - World' },
  { slug: 'en-gb', label: 'English - Great Britain' },
  { slug: 'en-gb-oxendict', label: 'English - Great Britain - Oxford' },
  { slug: 'en-us', label: 'English - United States' },
  { slug: 'es-001', label: 'Español - Mundo' },
  { slug: 'fr-001', label: 'Français - Monde' },
  { slug: 'hi-001', label: 'हिन्दी - विश्व' },
  { slug: 'hi-in', label: 'हिन्दी - भारत' },
  { slug: 'ru-001', label: 'Русский - Мир' },
  { slug: 'zh-001', label: '简体中文 - 世界' },
  { slug: 'zh-cn', label: '简体中文 - 中国' },
];

export const LOCALE_SLUGS: string[] = LOCALES.map((locale) => locale.slug);

export function isLocale(value: string): boolean {
  return LOCALE_SLUGS.includes(value);
}
