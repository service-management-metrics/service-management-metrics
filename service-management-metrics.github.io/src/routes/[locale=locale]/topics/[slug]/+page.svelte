<script lang="ts">
  import {
    ArticleLayout,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem,
    PaginationNav,
    PaginationList,
    PaginationListItem
  } from '@lilydesignsystem/svelte-headless';
  import { SITE_URL } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';
  import { sectionPath } from '#lib/segments.js';

  let { data } = $props();

  const part = $derived(data.parts.find((candidate) => candidate.number === data.ref.part));

  const fullTitle = $derived(`${_('topic.eyebrow', { values: { number: data.ref.number } })} — ${data.ref.title}`);

  const label = (ref: { number: string; title: string }) => `${ref.number} ${ref.title}`;
</script>

<svelte:head>
  <title>{fullTitle} — {_('siteTitle')}</title>
  <meta name="description" content={data.doc.lead || data.ref.title} />
  <link
    rel="canonical"
    href="{SITE_URL}{encodeURI(sectionPath(data.locale, 'topics', data.ref.slug))}"
  />
</svelte:head>

<ArticleLayout class="page page-topic">
  <BreadcrumbNav label={_('breadcrumb.label')} class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{_('breadcrumb.home')}</a></BreadcrumbListItem>
      <BreadcrumbListItem
        ><a href={sectionPath(data.locale, 'contents')}>{_('breadcrumb.contents')}</a></BreadcrumbListItem
      >
      {#if part}
        <BreadcrumbListItem>{_('contents.part', { values: { number: part.number } })} — {part.title}</BreadcrumbListItem>
      {/if}
      <BreadcrumbListItem current>
        {_('topic.eyebrow', { values: { number: data.ref.number } })}
      </BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{data.ref.title}</h1>
    {#if data.doc.lead}
      <p class="page-lead">{data.doc.lead}</p>
    {/if}
  </header>

  <div class="prose">
    <!-- Rendered at build time from the book's own markdown; not user input. -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.doc.html}
  </div>

  <PaginationNav label={_('topic.paginationLabel')} class="page-pagination">
    <PaginationList>
      <PaginationListItem class="page-pagination-previous">
        {#if data.previous}
          <a href={sectionPath(data.locale, 'topics', data.previous.slug)} rel="prev">
            <span class="page-pagination-direction">{_('topic.previous')}</span>
            <span class="page-pagination-label">{label(data.previous)}</span>
          </a>
        {/if}
      </PaginationListItem>
      <PaginationListItem class="page-pagination-next">
        {#if data.next}
          <a href={sectionPath(data.locale, 'topics', data.next.slug)} rel="next">
            <span class="page-pagination-direction">{_('topic.next')}</span>
            <span class="page-pagination-label">{label(data.next)}</span>
          </a>
        {/if}
      </PaginationListItem>
    </PaginationList>
  </PaginationNav>
</ArticleLayout>
