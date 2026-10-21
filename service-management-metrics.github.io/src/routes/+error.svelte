<script lang="ts">
  import { page } from '$app/state';
  import { ArticleLayout } from '@lilydesignsystem/svelte-headless';
  import { DEFAULT_LOCALE } from '#lib/book.js';
  import { _ } from '#lib/i18n.js';
</script>

<svelte:head>
  <title>{page.status} — {_('siteTitle')}</title>
</svelte:head>

<ArticleLayout class="page">
  <header class="page-header">
    <p class="page-eyebrow">{_('error.label', { values: { status: page.status } })}</p>
    <h1>{page.status === 404 ? _('error.notFound') : _('error.generic')}</h1>
    <p class="page-lead">{page.error?.message ?? _('error.unknown')}</p>
  </header>

  <p>
    <a href="/{DEFAULT_LOCALE}/contents/">{_('nav.contents')}</a>
  </p>
</ArticleLayout>
