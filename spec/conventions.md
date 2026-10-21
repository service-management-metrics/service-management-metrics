# Conventions

The writing and format specification. Topics are written to satisfy it, and `bin/check` enforces the parts that a machine can check. Rules marked **(enforced)** fail the check when broken.

## Repository layout

| Path | Role |
| --- | --- |
| `README.md` | Entry point and table of contents. |
| `AGENTS.md`, `AGENTS/`, `CLAUDE.md` | Instructions for AI agents. `CLAUDE.md` is a short pointer to `AGENTS.md` and this spec. |
| `spec/` | This specification. |
| `STYLE_GUIDE.md` | Voice, language, and prompt-writing rules. The spec overrides it. |
| `GLOSSARY.md`, `INDEX.md` | Generated or maintained A to Z definitions and the concept index. |
| `plan.md`, `tasks.md` | The build plan and the live checklist. |
| `_sources/research-notes.md` | Verified research notes. Verify each source again before citing it. |
| `locales/<locale>/topics/<slug>/index.md` | One topic, one locale. |
| `locales/<locale>/topics/<slug>/README.md` | Relative symlink to `index.md`. |
| `locales/<locale>/topics/<slug>/.locale-peer-id` | Tracks this topic across every locale (see [locales.md](locales.md)). |
| `skills/` | AI skills in Claude Code `SKILL.md` format. |
| `bin/` | `check`, `build-llms`, `build-readme`, and the locale helpers. |
| `llms.txt`, `llms.json` | Generated machine-readable inventory. Never edit by hand. |
| `CITATION.cff` and the other special files | See [special-files-for-public-repos](special-files-for-public-repos/index.md). |
| `service-management-metrics.github.io/` | The SvelteKit website, deployed by git subtree. |

## Numbering and file names

- Parts are whole numbers (1 through 12). Topics are decimals within a part.
- Topic **N.0** is the part introduction. Topics **N.1, N.2, ...** are content topics. Numbering within a part is contiguous and starts at N.0. **(enforced)**
- Directory names are slugs only: lowercase, hyphen-separated, no numbers, identical across locales. Order comes from [structure.md](structure.md) and [topics.tsv](topics.tsv). **(enforced)**
- Every topic directory has `index.md`, `README.md -> index.md` (relative symlink), and `.locale-peer-id`. **(enforced)**
- The first heading of every topic is `# Title`, and it is the single source of truth for the title.

## The topic template

Defined in [topic-template.md](topic-template.md). Section names and order are fixed. **(enforced)**

## House style

- Write for a colleague, not a spec sheet. Be calm, direct, practical, and encouraging. Address the reader as "you" when giving guidance; use the third person when describing practice.
- Lead with the point. Give guidance, not a survey. Be opinionated where the evidence supports it, and neutral between frameworks.
- Short paragraphs of 2 to 4 sentences. Use tables for comparisons and metric definitions.
- Stay vendor-neutral. Name products only as factual examples.
- **Agile stance.** Follow [index.md](index.md), "The agile stance": emphasize continuous delivery, continuous stakeholder involvement, continuous improvement, ongoing evolution, sustainable pace, and projects built around motivated individuals. **Never write "agile delivery"** (write "continuous delivery"). **De-emphasize sprint, Scrum, and Kanban**, and do not use "sprint", "burndown", or "iteration" outside the references, except in a sentence that is conditional on the team's own choice, such as "If your team chooses to use sprints, ...". **(enforced)**
- No hype words: revolutionary, game-changing, cutting-edge, seamless, disruptive, best-in-class.
- Roughly 3,000 to 6,000 words per content topic, counting tables and references with `wc -w`, reached by depth, never by padding. Go shorter only when the topic is genuinely lighter.
- **Every metric gets its gaming vector named,** with the guardrail that catches it. **(enforced: section 7 of the template must cover every metric in section 5)**
- **Every metric states its clocks and boundaries.** Where does the measurement start and stop, and what is excluded?
- **Prefer distributions to averages** for time measures. Show percentiles (for example the median and the 85th or 95th percentile) and say so.
- **No individual ranking.** Metrics describe teams, services, and systems.

## Hard rules

- **No em-dashes.** Do not use the em-dash character (U+2014) anywhere in the repository's prose. Use a comma, colon, parentheses, or two sentences. En-dashes (U+2013) are allowed only in numeric ranges. **(enforced)**
- **No stock LLM phrasing.** Do not use "not only ... but also", "but also", or "load-bearing". Avoid "It's important to note", "In today's fast-paced world", "It's crucial to consider", "It appears that", "One could argue", and the "it's not just X, it's Y" formula. **(partly enforced)**
- **Define terms on first use, in each topic.** Topics are read on their own, so expand every acronym on first use in each topic, for example "mean time to restore (MTTR)." **(partly enforced)**
- **Link key concepts to Wikipedia on first mention,** once per topic, 5 to 12 links per topic. Verify each article exists before linking; never guess a slug. Do not link in headings, tables, code, or the references section. **(link form enforced; `bin/check --links` resolves each link)**
- **Never invent sources.** No made-up citations, URLs, statistics, survey figures, benchmark values, or quotations. The references list real books, papers, standards, and reports. If a figure cannot be verified, describe the pattern without the number. **(partly enforced)**
- **No real named company in a worked example.** Fictional scenarios only, set in a type of organization.
- **Do not reproduce copyrighted framework text** (ITIL, ISO/IEC standards, the Scrum Guide) beyond short quotations. Summarize and cite.
- **Cross-references carry number and title:** "(see topic 3.4, Change enablement metrics)". A bare number is never enough. Do not hard-code file paths in prose. **(enforced)**
- **AI prompts never ask an AI to invent** metrics, benchmark values, sources, or compliance claims. They use `[placeholders]` and ask for assumptions to be listed. **(enforced for the placeholder and assumption lines)**
- **Illustrative numbers are labelled.** Any number in an example that is not from a cited source says "illustrative."
- **`.locale-peer-id` files are immutable** once assigned.

## Language

The authoring locale is `en-001` (English, World), following the *Service Management Guide*:

- American-adjacent spelling using `-ize` (organize, prioritize, standardize), `color`, `program`, `catalog`, `license`.
- ITIL's own term "service catalogue" appears once in parentheses on first use in a topic, then "service catalog".
- Dates are written out ("9 October 2026") or as DD/MM/YYYY. Monday-first week. Metric units. `US$` for dollars.
- Double quotation marks; punctuation outside the quotation marks unless it belongs to the quotation.
- Never change spelling inside a URL, inside code, or inside the title of a cited work or a proper noun.

## Version-sensitive claims

Concepts from ITIL 4 (service value system, guiding principles, four dimensions, service value chain, practices) remain the widely documented foundation. Label every version-specific statement ("in ITIL 4", "in ITIL 5"). State only what is verified from the framework owner's own publications for ITIL 5, and re-check before each release. Date claims about standards, editions, and certification ("as of October 2026"). Name ITIL(R) and other trademarks accurately, and carry one trademark notice in `README.md`.

## Preferred sources

Start from: the Agile Manifesto and its principles; the Scrum Guide; the Kanban Guide; the DORA research program; Google's *Site Reliability Engineering* books; the SPACE framework paper (Forsgren et al., 2021); *Accelerate* (Forsgren, Humble, Kim); *Making Work Visible* and *Actionable Agile Metrics* for flow; ITIL 4 publications from the owner (summarize, do not reproduce); ISO/IEC 20000, 19770, and 27001 (cite by name and scope); ISO/IEC 25010 and 33000 where relevant; Goodhart (1975) and Strathern (1997) for the guardrail. Each source is verified again at write time.

## Cross-artifact consistency

A change that adds, renames, renumbers, or removes a topic or a defined term updates, in the same commit: [structure.md](structure.md), [topics.tsv](topics.tsv), the README table of contents, `GLOSSARY.md`, `INDEX.md`, appendix 12.2 where a metric is affected, `llms.txt` and `llms.json`, `tasks.md`, and every cross-reference it affects.

## Changing the structure

To add, remove, rename, or renumber a topic:

1. Edit or create the topic directory following the template.
2. Update [structure.md](structure.md) and [topics.tsv](topics.tsv) so they match.
3. If a part's introduction lists its topics, update that list.
4. Regenerate the README table of contents and `llms.*`.
5. Run `bin/check`. It must pass before the change is complete.

New topics are added at the end of their part so existing numbers never change.
