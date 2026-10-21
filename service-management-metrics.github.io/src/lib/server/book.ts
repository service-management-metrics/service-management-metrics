// Server-only access to the book's markdown.
//
// Living under `#lib/server/` means SvelteKit refuses to bundle this into
// client code. The site is fully prerendered, so this module runs at build time
// and each page ships only its own rendered HTML.

import { parse, type Document } from '#lib/markdown.js';
import { sectionPath } from '#lib/segments.js';
import { LOCALE_SLUGS, SOURCE_REPO, type Part, type TopicRef } from '#lib/book.js';

/**
 * Raw markdown for every written topic, keyed by module path, e.g.
 * `../../content/locales/en-001/topics/scrum/index.md`. Unwritten topics are
 * not synced (scripts/sync-content.sh), so a file's presence means "written".
 */
const topicFiles = import.meta.glob('../../content/locales/*/topics/*/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const manifestFile = import.meta.glob('../../content/topics.tsv', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

/** `locale -> canonical slug -> that locale's directory name`, from the sync script's slugs.tsv. Absent means the slugs are the canonical ones. */
const slugFiles = import.meta.glob('../../content/locales/*/slugs.tsv', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;
const localSlug: Record<string, Record<string, string>> = {};
for (const [path, tsv] of Object.entries(slugFiles)) {
  const locale = path.match(/\/locales\/([^/]+)\/slugs\.tsv$/)?.[1];
  if (!locale) continue;
  for (const line of tsv.trim().split('\n')) {
    const [canonical, local] = line.split('\t');
    (localSlug[locale] ??= {})[canonical] = local;
  }
}

const messageFiles = import.meta.glob('../locales/*.json', { eager: true, import: 'default' }) as Record<
  string,
  { topicWords?: string[] }
>;

/** The words a locale uses for "topic" in a cross-reference such as "topic 2.1", longest first. */
function topicWords(locale: string): string[] {
  const words = messageFiles[`../locales/${locale}.json`]?.topicWords ?? ['topic', 'topics'];
  return [...words].sort((a, b) => b.length - a.length);
}

type ManifestRow = { part: number; number: string; slug: string; title: string; partTitle: string };

/** The manifest (spec/topics.tsv): order, numbers, and parts. Its title column is a fallback copied by the sync script from each topic's first headline. */
const manifest: ManifestRow[] = Object.values(manifestFile)[0]
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => {
    const [part, number, slug, title, partTitle] = line.split('\t');
    return { part: Number(part), number, slug, title, partTitle };
  });

/** `locale -> slug -> markdown` for every written topic. */
const written: Record<string, Record<string, string>> = {};
for (const [path, markdown] of Object.entries(topicFiles)) {
  const match = path.match(/\/locales\/([^/]+)\/topics\/([^/]+)\/index\.md$/);
  if (!match) throw new Error(`Unrecognized topic content path: ${path}`);
  (written[match[1]] ??= {})[match[2]] = markdown;
}

/** Table-of-contents entries for one locale, in manifest order, written or not. */
export function toc(locale: string): TopicRef[] {
  const have = written[locale] ?? {};
  return manifest.map(({ slug: canonical, number, title, part }) => {
    const slug = localSlug[locale]?.[canonical] ?? canonical;
    return {
      slug,
      number,
      // The topic's own first headline is its title; the manifest copy is for unwritten topics.
      title: have[slug]?.match(/^# (.+)$/m)?.[1].trim() ?? title,
      part,
      written: slug in have
    };
  });
}

/** The parts, in order, from the manifest. */
export function parts(): Part[] {
  const seen = new Map<number, string>();
  for (const row of manifest) if (!seen.has(row.part)) seen.set(row.part, row.partTitle);
  return [...seen].map(([number, title]) => ({ number, title }));
}

/**
 * Rewrite links that only make sense on GitHub or in the repository:
 * skills links go to the site's own skills pages, and links into `spec/` and
 * `skills/` elsewhere go to the source repository. Plain-text topic
 * references such as "topic 2.1" become links to that topic in the same locale.
 */
function rewriteLinks(markdown: string, locale: string): string {
  const numbers = new Map(toc(locale).filter((t) => t.written).map((t) => [t.number, t.slug]));
  const escaped = topicWords(locale).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const reference = new RegExp(`(?<![\\p{Script=Latin}\\p{N}])(?:${escaped.join('|')})\\s?(\\d{1,2}\\.\\d{1,2})(?![\\d.]*\\d)(?![^\\[]*\\]\\()`, 'giu');
  let inFence = false;
  return markdown
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line)) inFence = !inFence;
      if (inFence) return line;
      return line
        .replace(/\]\((?:\.\.\/)+skills\/([\w-]+)\/SKILL\.md\)/g, '](/skills/$1/)')
        .replace(/\]\((?:\.\.\/)+(spec|skills)\/([^)]*)\)/g, `](${SOURCE_REPO}/blob/main/$1/$2)`)
        .replace(reference, (match, number: string) => {
          const slug = numbers.get(number);
          return slug ? `[${match}](${sectionPath(locale, 'topics', slug)})` : match;
        });
    })
    .join('\n');
}

/** A rendered topic plus its written neighbours, or `null` if it is not written. */
export function topic(
  locale: string,
  slug: string
): { ref: TopicRef; doc: Document; previous: TopicRef | null; next: TopicRef | null } | null {
  const markdown = written[locale]?.[slug];
  if (markdown === undefined) return null;
  const list = toc(locale).filter((candidate) => candidate.written);
  const at = list.findIndex((candidate) => candidate.slug === slug);
  return {
    ref: list[at],
    doc: parse(rewriteLinks(markdown, locale)),
    previous: list[at - 1] ?? null,
    next: list[at + 1] ?? null
  };
}

/** `{ locale, slug }` for every written topic in every locale, for prerender entries. */
export function localeTopicEntries(): Array<{ locale: string; slug: string }> {
  return LOCALE_SLUGS.flatMap((locale) =>
    Object.keys(written[locale] ?? {}).map((slug) => ({ locale, slug }))
  );
}

/** Written topic slugs for one locale. */
export function slugs(locale: string): string[] {
  return toc(locale).filter((t) => t.written).map((t) => t.slug);
}

/**
 * Maps a topic number to its slug in each locale, so the locale picker can jump
 * to the equivalent topic after a switch. Keyed by number, not slug, because a
 * translated locale may have translated slugs.
 */
export function localeSlugMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};
  for (const locale of Object.keys(written)) {
    for (const ref of toc(locale)) {
      if (ref.written) (map[ref.number] ??= {})[locale] = ref.slug;
    }
  }
  return map;
}

