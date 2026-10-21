<script lang="ts">
  import {
    ArticleLayout,
    BreadcrumbNav,
    BreadcrumbList,
    BreadcrumbListItem
  } from '@lilydesignsystem/svelte-headless';
  import { _ } from '#lib/i18n.js';

  let { data } = $props();
</script>

<svelte:head>
  <title>{_('skillsPage.title')} — {_('siteTitle')}</title>
  <meta name="description" content={_('skillsPage.lead')} />
</svelte:head>

<ArticleLayout class="page">
  <BreadcrumbNav label={_('breadcrumb.label')} class="page-breadcrumb">
    <BreadcrumbList>
      <BreadcrumbListItem><a href="/">{_('breadcrumb.home')}</a></BreadcrumbListItem>
      <BreadcrumbListItem current>{_('skillsPage.title')}</BreadcrumbListItem>
    </BreadcrumbList>
  </BreadcrumbNav>

  <header class="page-header">
    <h1>{_('skillsPage.title')}</h1>
    <p class="page-lead">{_('skillsPage.lead')}</p>
  </header>

  <ul class="skills-list">
    {#each data.skills as skill (skill.name)}
      <li>
        <a href="/skills/{skill.name}/"><code>{skill.name}</code></a>
        <span class="skills-description">{skill.description}</span>
      </li>
    {/each}
  </ul>
</ArticleLayout>
