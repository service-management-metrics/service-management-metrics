<script lang="ts">
  import {
    ArticleLayout,
    SectionHeading,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { LOCALES, SITE_URL } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';
  import { sectionPath } from '#lib/segments.js';

  let { data } = $props();

  const localeLabel = $derived(
    LOCALES.find((candidate) => candidate.slug === data.locale)?.label ?? data.locale
  );
  const parts = $derived(
    data.parts.map((part) => ({
      ...part,
      topics: data.toc.filter((topic) => topic.part === part.number)
    }))
  );
</script>

<svelte:head>
  <title>{_('contents.pageTitle')} — {_('siteTitle')}</title>
  <meta name="description" content={_('contents.lead')} />
  <link rel="canonical" href="{SITE_URL}{encodeURI(sectionPath(data.locale, 'contents'))}" />
</svelte:head>

<ArticleLayout class="page">
  <BreadcrumbNav label={_('breadcrumb.label')} class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{_('breadcrumb.home')}</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{_('contents.pageTitle')}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{_('contents.pageTitle')}</h1>
    <p class="page-lead">{_('contents.lead')}</p>
    <p class="page-eyebrow">{_('contents.readingIn', { values: { language: localeLabel } })}</p>
  </header>

  <section class="page-section">
    <ul class="contents-list contents-parts">
      {#each parts as part (part.number)}
        <li>
          <p class="contents-part-heading">
            {_('contents.part', { values: { number: part.number } })} — {_(`parts.${part.number}.title`)}
          </p>
          <p class="contents-part-tagline">{_(`parts.${part.number}.tagline`)}</p>
          <ul class="contents-list">
            {#each part.topics as topic (topic.slug)}
              <li>
                {#if topic.written}
                  <a href={sectionPath(data.locale, 'topics', topic.slug)}>{topic.number} {topic.title}</a>
                {:else}
                  <span class="contents-unwritten">
                    {topic.number} {topic.title}
                    <em>({_('contents.comingSoon')})</em>
                  </span>
                {/if}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </section>

  <section class="page-section">
    <SectionHeading heading={_('contents.reference')} />
    <ul class="contents-list">
      <li><a href="/skills/">{_('nav.skills')}</a></li>
    </ul>
  </section>
</ArticleLayout>
