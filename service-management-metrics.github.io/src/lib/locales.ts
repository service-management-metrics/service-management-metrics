// The locales the site offers. Plain data with no Vite-only imports, because
// `src/params.ts` loads it directly in Node. To add a locale: add its message
// file `./locales/<slug>.json`, add a line here, and sync its content.

export type Locale = { slug: string; label: string };

export const DEFAULT_LOCALE = 'en-001';

/** Sorted by locale code (the picker lists them in this order). Labels are "<language> - <region>", in the locale's own language. */
export const LOCALES: Locale[] = [
  { slug: 'ar-001', label: 'العربية - العالم' },
  { slug: 'bn-001', label: 'বাংলা - বিশ্ব' },
  { slug: 'da-001', label: 'Dansk - Verden' },
  { slug: 'de-001', label: 'Deutsch - Welt' },
  { slug: 'en-001', label: 'English - World' },
  { slug: 'en-gb', label: 'English - Great Britain' },
  { slug: 'en-gb-oxendict', label: 'English - Great Britain - Oxford' },
  { slug: 'en-us', label: 'English - United States' },
  { slug: 'es-001', label: 'Español - Mundo' },
  { slug: 'fr-001', label: 'Français - Monde' },
  { slug: 'hi-001', label: 'हिन्दी - विश्व' },
  { slug: 'hi-in', label: 'हिन्दी - भारत' },
  { slug: 'ja-001', label: '日本語 - 世界' },
  { slug: 'ja-jp', label: '日本語 - 日本' },
  { slug: 'ko-001', label: '한국어 - 세계' },
  { slug: 'ko-kr', label: '한국어 - 대한민국' },
  { slug: 'nl-001', label: 'Nederlands - Wereld' },
  { slug: 'nl-nl', label: 'Nederlands - Nederland' },
  { slug: 'pt-001', label: 'Português - Mundo' },
  { slug: 'ru-001', label: 'Русский - Мир' },
  { slug: 'sv-001', label: 'Svenska - Världen' },
  { slug: 'sv-se', label: 'Svenska - Sverige' },
  { slug: 'sw-001', label: 'Kiswahili - Dunia' },
  { slug: 'sw-tz', label: 'Kiswahili - Tanzania' },
  { slug: 'ur-001', label: 'اردو - دنیا' },
  { slug: 'vi-001', label: 'Tiếng Việt - Thế giới' },
  { slug: 'vi-vn', label: 'Tiếng Việt - Việt Nam' },
  { slug: 'zh-001', label: '简体中文 - 世界' },
  { slug: 'zh-cn', label: '简体中文 - 中国' },
];

export const LOCALE_SLUGS: string[] = LOCALES.map((locale) => locale.slug);

export function isLocale(value: string): boolean {
  return LOCALE_SLUGS.includes(value);
}
