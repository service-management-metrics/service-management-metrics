<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { DEFAULT_LOCALE, isLocale, localeForLanguageTag } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';
  import { sectionPath } from '#lib/segments.js';

  /** Where the header locale picker remembers a reader's own choice. */
  const LOCALE_STORAGE_KEY = 'service-management-metrics-locale';

  const fallback = sectionPath(DEFAULT_LOCALE, 'contents');

  /**
   * The locale this reader should land in: one they chose with the picker
   * before; else the first of the browser's preferred languages that the book
   * has a locale for; else the default locale.
   */
  function preferredLocale(): string {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved && isLocale(saved)) return saved;
    } catch {
      // Storage can be blocked; fall through to the browser language.
    }
    const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of tags) {
      const locale = tag ? localeForLanguageTag(tag) : undefined;
      if (locale) return locale;
    }
    return DEFAULT_LOCALE;
  }

  // `/` has no content of its own: send the reader to their locale. A query
  // (`/?<target>`) is a site search handled by SearchGate in the layout, so it
  // must not be redirected away.
  onMount(() => {
    if (!location.search) goto(sectionPath(preferredLocale(), 'contents'), { replaceState: true });
  });
</script>

<svelte:head>
  <title>{_('siteTitle')}</title>
  <noscript><meta http-equiv="refresh" content="0;url={fallback}" /></noscript>
</svelte:head>

<p><a href={fallback}>{_('home.continue')}</a></p>
