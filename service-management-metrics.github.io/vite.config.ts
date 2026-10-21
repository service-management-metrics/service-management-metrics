import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        // GitHub Pages serves 404.html for any unmatched path, so this is both
        // the SPA fallback and the real "page not found" page.
        fallback: '404.html',

        // Pages compresses responses itself, so shipping .gz/.br alongside every
        // file would only enlarge the artifact.
        precompress: false,

        // Fail the build on a route that cannot be prerendered, rather than
        // quietly publishing a site with a hole in it.
        strict: true
      }),

      /*
       * `paths.base` is deliberately not set.
       *
       * The adapter-static docs pair `paths.base` with a
       * `BASE_PATH: '/${{ github.event.repository.name }}'` step in the deploy
       * workflow. That is for a *project* site, served from a subpath at
       * user.github.io/repo. This repository is named service-management-metrics.github.io,
       * which makes it the organization's root site: it is served from the domain
       * root, so the base path is empty and copying that step would prefix every
       * URL with `/service-management-metrics.github.io` and break the whole site.
       *
       * Wiring `base` up "just in case" would also be inert unless every link and
       * the ThemePicker's `themesUrl` were routed through it, so the site uses
       * plain root-relative paths and this comment instead.
       */
      prerender: {
        // Topic prose carries anchors into headings that live on other
        // topic pages, and the appendices cross-link topics by name.
        // Demote the missing-id check so a cross-reference typo warns
        // rather than failing the whole build.
        handleMissingId: 'warn',
        // Until the first topic is written there is nothing for the topic
        // route to prerender. Unwritten topics are not synced (see
        // scripts/sync-content.sh), so this is expected, not a hole.
        handleUnseenRoutes: 'ignore'
      }
    })
  ]
});
