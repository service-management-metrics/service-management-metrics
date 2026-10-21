<script lang="ts">
  import {
    ArticleLayout,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { SKILLS_REPO } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.skill.name} — {_('skillsPage.title')} — {_('siteTitle')}</title>
  <meta name="description" content={data.skill.description} />
</svelte:head>

<ArticleLayout class="page page-topic">
  <BreadcrumbNav label={_('breadcrumb.label')} class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{_('breadcrumb.home')}</a></BreadcrumbListItem>
      <BreadcrumbListItem><a href="/skills/">{_('skillsPage.title')}</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{data.skill.name}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <p class="page-eyebrow">{_('skillsPage.title')}</p>
    <h1><code>{data.skill.name}</code></h1>
    <p class="page-lead">{data.skill.description}</p>
    <p><a href="{SKILLS_REPO}/{data.skill.name}/SKILL.md" rel="noopener">{_('skillsPage.viewSource')}</a></p>
  </header>

  <div class="prose">
    <!-- Rendered at build time from the repository's own markdown; not user input. -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.doc.html}
  </div>
</ArticleLayout>
