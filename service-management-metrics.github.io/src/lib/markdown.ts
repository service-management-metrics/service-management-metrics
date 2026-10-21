// Markdown rendering for the book.
//
// Every page of this site is prerendered by adapter-static, so everything here
// runs at build time and never ships to the browser. That is deliberate: the
// book is 34 markdown files totalling well over a megabyte, and none of it
// needs a client-side markdown parser.

import { Marked, Renderer } from 'marked';

/** The stock table renderer, so the override below only has to add a wrapper. */
const defaultTable = Renderer.prototype.table;

/** One heading lifted out of a document, for building an on-page contents nav. */
export type Heading = {
  /** Heading depth: 2 for `##`, 3 for `###`. */
  depth: number;
  /** Rendered heading text, plain (no markup). */
  text: string;
  /** The `id` attribute given to the heading, for `#fragment` links. */
  id: string;
};

/** A markdown document split into the parts a page needs. */
export type Document = {
  /** The `# ` heading, with the `Topic N.N — ` prefix left intact. */
  title: string;
  /** The bold lead paragraph directly under the title, as plain text. */
  lead: string;
  /** Body HTML — the title and lead removed, since pages render those. */
  html: string;
  /** `##` and `###` headings in document order. */
  headings: Heading[];
};

/**
 * Turn heading text into a URL fragment: lowercase, non-alphanumerics collapsed
 * to single hyphens, edges trimmed. Duplicate ids get a `-2`, `-3`, … suffix so
 * that a topic using the same subheading twice still yields unique anchors.
 */
function slugger() {
  const seen = new Map<string, number>();
  return (text: string): string => {
    const base =
      text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-+|-+$/g, '') || 'section';
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
}

/** Strip markup from an inline token stream, leaving readable plain text. */
function plain(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();
}

/**
 * Render `**strong**` and `*emphasis*` that CommonMark's flanking rules reject.
 *
 * A closing `**` that follows punctuation and precedes a letter is not
 * right-flanking, so `**[価値多元主義](url)**である` leaves literal asterisks. That
 * is routine in Japanese, Chinese and Korean, where a letter follows the
 * punctuation with no space between. Emphasis with no asterisk inside is
 * rewritten to HTML before `marked` sees it; fenced and inline code are left
 * alone, and anything `marked` already renders correctly renders the same.
 */
function fixCjkEmphasis(markdown: string): string {
  return markdown
    .split(/(```[\s\S]*?```|`[^`\n]*`)/g)
    .map((part, i) =>
      i % 2 === 1
        ? part
        : part
            .replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>')
            .replace(/(?<![*\w\\])\*(?!\s)([^*\n]+?)(?<!\s)\*(?![*\w])/g, '<em>$1</em>')
    )
    .join('');
}

/**
 * Parse one markdown document.
 *
 * A fresh `Marked` instance per call keeps the heading slugger's duplicate
 * counter scoped to a single document — a shared global instance would let
 * topic 3's ids leak into topic 4's.
 */
export function parse(markdown: string): Document {
  const slug = slugger();
  const headings: Heading[] = [];

  const marked = new Marked({
    gfm: true,
    renderer: {
      heading(token) {
        const text = this.parser.parseInline(token.tokens);
        const bare = plain(token.text);
        const id = slug(bare);
        if (token.depth === 2 || token.depth === 3) {
          headings.push({ depth: token.depth, text: bare, id });
        }
        return `<h${token.depth} id="${id}">${text}</h${token.depth}>\n`;
      },

      /**
       * Wrap every table in a scrolling container.
       *
       * The book's tables compare four or five columns of system archetypes,
       * paradigms, and maturity levels. Narrowing them to a phone would make
       * them unreadable, and letting them set the page width makes everything
       * else unreadable, so the table scrolls inside its own box. `tabindex`
       * makes that scroll region reachable from the keyboard, which WCAG 2.1.1
       * requires of any scrollable content.
       */
      table(token) {
        const html = defaultTable.call(this, token);
        return `<div class="prose-scroll" role="region" aria-label="Table" tabindex="0">${html}</div>\n`;
      }
    }
  });

  const lines = markdown.split('\n');

  // The first `# ` line is the document title; pages render it themselves in a
  // page header, so drop it from the body to avoid a duplicate h1.
  let cursor = 0;
  let title = '';
  while (cursor < lines.length) {
    const line = lines[cursor];
    cursor += 1;
    if (line.startsWith('# ')) {
      title = line.slice(2).trim();
      break;
    }
  }

  // A `**bold paragraph**` immediately under the title is the topic's thesis
  // sentence. Pull it out for the page header and for link previews.
  let lead = '';
  const rest = lines.slice(cursor);
  const firstContent = rest.findIndex((line) => line.trim() !== '');
  if (firstContent !== -1) {
    const candidate = rest[firstContent].trim();
    if (candidate.startsWith('**') && candidate.endsWith('**')) {
      lead = plain(candidate);
      rest.splice(0, firstContent + 1);
    }
  }

  const html = marked.parse(fixCjkEmphasis(rest.join('\n'))) as string;
  return { title, lead, html, headings };
}
