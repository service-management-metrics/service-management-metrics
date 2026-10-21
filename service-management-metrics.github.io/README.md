# service-management-metrics.github.io

The website for the [Service Management Metrics](https://github.com/service-management-metrics/service-management-metrics), at <https://service-management-metrics.github.io>.

This directory is part of the book's monorepo (`service-management-metrics.github.io/`) and is published to its own repository with `git subtree`. Make all changes in the monorepo; never push to the site repository directly. See `../spec/locales.md` for how locales work.

## What's here

A SvelteKit 3 project with `@sveltejs/adapter-static` that prerenders every page to plain HTML. Styled with the [Lily Design System](https://github.com/LilyDesignSystem) (`@lilydesignsystem/svelte-headless`, `svelte-picker-bar`, `themes`), with UI strings from [Sveltia I18n](https://github.com/sveltia/sveltia-i18n) (`@sveltia/i18n`) and a build-time search index per locale.

```
service-management-metrics.github.io/
├── src/
│   ├── content/            Vendored copy of the book (generated; never edit)
│   ├── lib/
│   │   ├── book.ts         Types, locale lookup, site constants (client-safe)
│   │   ├── locales.ts      The list of locales (plain module; also read by params.ts)
│   │   ├── locales/        UI strings: one <locale>.json per locale (MessageFormat 2)
│   │   ├── i18n.ts         Registers the message files with Sveltia I18n
│   │   ├── markdown.ts     Markdown to HTML, run at build time
│   │   ├── search.ts, SearchGate.svelte   Search UI
│   │   └── server/         Build-time loaders for topics and skills
│   └── routes/
│       ├── +layout.svelte  Grail layout with the Lily PickerBar
│       ├── [locale=locale]/contents/ and topics/[slug]/
│       ├── skills/, skills/[name]/
│       └── sitemap.xml/
├── static/                 Stylesheet, favicon, robots.txt, llms files (synced)
├── scripts/                sync-content.sh, sync-themes.sh, build-search-index.mjs
├── spec/                   Subproject specs (picker bar, search)
└── .github/workflows/deploy.yml   Build and deploy to GitHub Pages
```

## Develop

Use pnpm. Never use npm or yarn here.

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm check        # type check: must report 0 errors
pnpm build        # produces build/
pnpm preview
pnpm sync         # re-copy content from the monorepo
```

## How content gets here

`src/content/` is copied from the monorepo by `scripts/sync-content.sh`: written topics (unwritten stubs are skipped and shown as "coming soon"), `spec/topics.tsv`, every skill's `SKILL.md`, and `llms.txt`/`llms.json`. Run `pnpm sync` after the book changes, then commit the result.

## Deploy

From the monorepo root:

```sh
git remote add site git@github.com:service-management-metrics/service-management-metrics.github.io.git   # once
bin/deploy-site
```

`bin/deploy-site` runs `git subtree push --prefix=service-management-metrics.github.io site main`. The workflow in `.github/workflows/deploy.yml` then builds and publishes to GitHub Pages. In the site repository's settings, set Pages → Source to "GitHub Actions".
