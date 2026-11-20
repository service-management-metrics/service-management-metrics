// The locales the site offers. Plain data with no Vite-only imports, because
// `src/params.ts` loads it directly in Node. To add a locale: add its message
// file `./locales/<slug>.json`, add a line here, and sync its content.

export type Locale = { slug: string; label: string };

export const DEFAULT_LOCALE = 'en-001';

/** Sorted by locale code (the picker lists them in this order). Labels are "<language> - <region>", in the locale's own language. */
export const LOCALES: Locale[] = [
  { slug: 'ar-001', label: 'العربية - العالم' },
  { slug: 'ar-dz', label: 'العربية - الجزائر' },
  { slug: 'ar-eg', label: 'العربية - مصر' },
  { slug: 'bn-001', label: 'বাংলা - বিশ্ব' },
  { slug: 'bn-in', label: 'বাংলা - ভারত' },
  { slug: 'bn-bd', label: 'বাংলা - বাংলাদেশ' },
  { slug: 'cy-001', label: 'Cymraeg - Byd' },
  { slug: 'cy-ar', label: 'Cymraeg - Ariannin' },
  { slug: 'cy-gb', label: 'Cymraeg - Prydain Fawr' },
  { slug: 'da-001', label: 'Dansk - Verden' },
  { slug: 'de-001', label: 'Deutsch - Welt' },
  { slug: 'de-at', label: 'Deutsch - Österreich' },
  { slug: 'de-de', label: 'Deutsch - Deutschland' },
  { slug: 'en-001', label: 'English - World' },
  { slug: 'en-gb', label: 'English - Great Britain' },
  { slug: 'en-gb-oxendict', label: 'English - Great Britain - Oxford' },
  { slug: 'en-us', label: 'English - United States' },
  { slug: 'es-001', label: 'Español - Mundo' },
  { slug: 'es-mx', label: 'Español - México' },
  { slug: 'es-es', label: 'Español - España' },
  { slug: 'fr-001', label: 'Français - Monde' },
  { slug: 'fr-ca', label: 'Français - Canada' },
  { slug: 'fr-fr', label: 'Français - France' },
  { slug: 'hi-001', label: 'हिन्दी - विश्व' },
  { slug: 'hi-in', label: 'हिन्दी - भारत' },
  { slug: 'hi-np', label: 'हिन्दी - नेपाल' },
  { slug: 'id-001', label: 'Bahasa Indonesia - Dunia' },
  { slug: 'id-id', label: 'Bahasa Indonesia - Indonesia' },
  { slug: 'id-my', label: 'Bahasa Indonesia - Malaysia' },
  { slug: 'ja-001', label: '日本語 - 世界' },
  { slug: 'ja-jp', label: '日本語 - 日本' },
  { slug: 'ko-001', label: '한국어 - 세계' },
  { slug: 'ko-kr', label: '한국어 - 대한민국' },
  { slug: 'nl-001', label: 'Nederlands - Wereld' },
  { slug: 'nl-nl', label: 'Nederlands - Nederland' },
  { slug: 'pt-001', label: 'Português - Mundo' },
  { slug: 'pt-br', label: 'Português - Brasil' },
  { slug: 'pt-pt', label: 'Português - Portugal' },
  { slug: 'ru-001', label: 'Русский - Мир' },
  { slug: 'ru-by', label: 'Русский - Беларусь' },
  { slug: 'ru-ru', label: 'Русский - Россия' },
  { slug: 'sv-001', label: 'Svenska - Världen' },
  { slug: 'sv-se', label: 'Svenska - Sverige' },
  { slug: 'sw-001', label: 'Kiswahili - Dunia' },
  { slug: 'sw-tz', label: 'Kiswahili - Tanzania' },
  { slug: 'ur-001', label: 'اردو - دنیا' },
  { slug: 'vi-001', label: 'Tiếng Việt - Thế giới' },
  { slug: 'vi-vn', label: 'Tiếng Việt - Việt Nam' },
  { slug: 'zh-001', label: '简体中文 - 世界' },
  { slug: 'zh-cn', label: '简体中文 - 中国' },
  { slug: 'zh-th', label: '简体中文 - 泰国' },
];

export const LOCALE_SLUGS: string[] = LOCALES.map((locale) => locale.slug);

export function isLocale(value: string): boolean {
  return LOCALE_SLUGS.includes(value);
}
