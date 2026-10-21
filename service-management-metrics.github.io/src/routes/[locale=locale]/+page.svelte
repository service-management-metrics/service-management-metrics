<script lang="ts">
  import { ArticleLayout } from '@lilydesignsystem/svelte-headless';
  import { SITE_URL, LOCALE_SLUGS } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';
  import { sectionPath } from '#lib/segments.js';
  import { HERO, ENDONYMS } from '#lib/hero.js';

  let { data } = $props();

  const hero = $derived(HERO[data.locale] ?? HERO['en-001']);
  const translations = LOCALE_SLUGS.filter((code) => code.endsWith('-001') && code in ENDONYMS);
  const contents = $derived(encodeURI(sectionPath(data.locale, 'contents')));
</script>

<svelte:head>
  <title>{_('siteTitle')}</title>
  <meta name="description" content={hero.tagline} />
  <link rel="canonical" href="{SITE_URL}/{data.locale}/" />
</svelte:head>

<ArticleLayout class="page">
  <header class="page-header page-hero">
    <h1>{_('siteTitle')}</h1>
    <p class="page-hero-subheadline">{hero.tagline}</p>
    <p class="page-lead">{hero.intro}</p>
    <p class="page-hero-contents"><a href={contents}>{_('contents.pageTitle')}</a></p>
    <p class="page-hero-translations">
      {hero.translations}{#each translations as code, i (code)}{i ? ', ' : ''}<a
          href="/{code}/"
          aria-current={code === data.locale ? 'page' : undefined}>{ENDONYMS[code]}</a
        >{/each}
    </p>
  </header>
</ArticleLayout>
