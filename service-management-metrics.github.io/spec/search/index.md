# Search

Every `*.github.io` SvelteKit site in this family offers site search with no
server: a static index built at publish time and a small client-side search.

## Route

Search lives on the home page and is driven by the query string:

| URL | Meaning |
|---|---|
| `/?foo` | search for `foo` |
| `/?foo+bar` or `/?foo%20bar` | search for `foo bar` (every word must match) |
| `/?q=foo` | accepted as an alias of `/?foo` |
| `/` | no query: the normal home page |

The whole query string is the target, URL-decoded, with `+` read as a space.
The page stays prerendered: the query is read in the browser only, never during
prerendering. A search box on the home page navigates to `/?<target>`.

## Index

- `scripts/build-search-index.mjs` runs after `vite build` (part of
  `npm run build`) and reads the generated HTML, so it works the same for every
  site layout and needs no dependencies.
- One index per locale at `build/search-index/<locale>.json`, for every locale
  present (`/xx-yy/…` pages). Unprefixed pages (the home and skills pages) are
  English, so only English locales include them. The 404 page and redirects are
  skipped. `build/search-index.json` is a copy of the default locale's index
  (first present of `en-gb-oxendict`, `en-gb`, `en-001`, `en-us`) for older
  clients.
- One entry per page: `{ u: url, t: title, h: headings, x: text }`. Text is the
  `<main>` content with markup removed, capped at 20 000 characters.
- The client searches the index for the reader's locale: the locale of the
  page they are on, else the one the picker saved or detected. A locale whose
  index is missing falls back to the default locale's. The results page and
  the home search form use that locale's own wording (`results` in
  `src/lib/i18n.ts`).

## Matching and ranking

- Case-insensitive; every word of the query must appear in the page.
- Score = 10 × title hits + 4 × heading hits + body hits; ties by title.
- Results show title, URL and a snippet with matches highlighted; at most 50.
- An empty or unmatched search says so and links back to the home page.

## Verification

After each publish: `GET /search-index/<locale>.json` returns 200 for every
locale and contains known text in that language, and the same ranking function
run against the live index finds results for a known term. The query page
itself (`/?foo`) returns 200. Substring matching is what lets Japanese, Chinese
and Korean queries (no spaces) work; there is no stemming, so a Welsh or German
inflected form matches only itself.
