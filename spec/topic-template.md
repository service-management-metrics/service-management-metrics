# Topic template

Governed by [`index.md`](index.md). Every content topic (N.1 and up, in Parts 1 through 11) has exactly these sections, in this order, with these exact headings. Nothing is renamed, reordered, merged, or left out. `bin/check` enforces it.

1. `# Title`: the first headline of the topic's `index.md`. It is the single source of truth for the topic's title. Topic numbers live in the table of contents, not in headings or directory names.
2. **A bold one-sentence thesis**, with no heading above it.
3. `## Overview and motivation`: what the metric family is, why it matters, and how it differs across agile and ITIL views. Defines every term and acronym used, and links the key concepts to Wikipedia.
4. `## Key principles`: a short bulleted list, 4 to 7 items.
5. `## Metric definitions`: a table with the columns **Metric**, **Definition**, **Formula**, **Unit**, **Data source**, **ITIL practice**, **Agile counterpart**, **Cadence**. At least three rows. Every formula states where the clock starts and stops, or what is counted and what is excluded. Use `n/a` with a reason in a cell instead of leaving it blank.
6. `## Recommendations`: the core of the topic, under `###` subheadings, 8 to 12 recommendations. Each has a bold lead and 2 to 4 sentences of practical guidance.
7. `## Gaming vectors and guardrails`: a table with the columns **Metric**, **How it gets gamed**, **Paired guardrail metric or practice**. Every metric in section 5 appears here. Prose below the table says what a healthy reading looks like.
8. `## Trade-offs: pros and cons`: at least one Markdown table plus prose.
9. `## Questions to discuss with your team`: **exactly six** questions. Each question is bold and followed by a 3 to 6 sentence briefing that helps a facilitator run the conversation.
10. `## Four perspectives`: exactly these four subsections, in this order:
    - `### Product and delivery teams`
    - `### Service and operations teams`
    - `### Leadership and governance`
    - `### Customers and users`
11. `## In practice: a service management example`: one fictional worked scenario set in a named *type* of organization (for example "a mid-sized online retailer" or "a regional hospital's IT department"), never a real named company. It includes the numbers the team sees, the decision they make, and a gaming risk they catch. Numbers in the example are illustrative and labelled as such.
12. `## Agile, AI, automation, and analytics`: exactly four subsections, in this order, each a short paragraph with one concrete practice and one caution: `### Agile` (how continuous delivery and stakeholder involvement shape the measure), `### AI` (how AI-assisted work inflates, shifts, or hides the measure, and the paired quality measure), `### Automation` (what to collect automatically, what automation itself must be measured on), `### Analytics` (data quality, uncertainty, and what decision the number informs).
13. `## Sector lens`: four short paragraphs, labelled **Startup**, **Small business**, **Enterprise**, and **Government and public sector**, on how the topic shifts.
14. `## Business case: motivations, ROI, and TCO`: why invest, what it costs to collect and act on the metric, and what return to expect. No invented figures; describe the pattern or cite a verified source.
15. `## Anti-patterns and pitfalls`: 5 to 8 bullets, each with what to do instead.
16. `## Maturity model`: a table with the five columns **Initiate / Develop / Standardize / Manage / Orchestrate** (see [maturity-model.md](maturity-model.md)) and 3 to 5 rows.
17. `## Checklist`: 6 to 12 `- [ ]` items.
18. `## AI prompts`: 3 to 5 prompts. Each has a bold one-line purpose, then a fenced `text` block the reader can copy and paste. Each prompt uses `[square bracket]` placeholders. No prompt may ask an AI to invent metrics, benchmark values, sources, or compliance claims, and each ends by asking the AI to list its assumptions.
19. `## AI skills`: 1 to 5 bullet links to skills in `skills/`, as relative links, each with one sentence on when to use it. Every linked skill must exist.
20. `## Key takeaways`: 3 to 6 bullets.
21. `## References and further reading`: a numbered list of real works in the format `Author or Publisher, Title, Year, URL`. Wikipedia articles linked in the body are repeated here. Do not invent works or URLs.

## Part introductions (N.0)

A lighter shape:

1. `# Introduction to Part N: Title`
2. A bold one-sentence thesis.
3. Two or three framing paragraphs.
4. `## Topics in this part`: one bullet per topic, with its number, title, and a one-line summary.
5. `## How these topics interrelate`: how the metrics in this part support, balance, or guard one another, including which guardrail pairs belong together.

## Appendices (Part 12)

Appendices are reference material and do not follow the content template. They have the title headline and whatever tables, lists, or templates their scope needs. Appendix 12.2 has one entry per metric, with the same fields as the metric definitions table plus the gaming vector and guardrail.

## Definition of done (per topic)

- [ ] First line is `# Title`, matching the manifest unless a rename was agreed.
- [ ] `index.md`, a relative symlink `README.md -> index.md`, and `.locale-peer-id` are present.
- [ ] All template sections are present, in order, correctly named.
- [ ] Bold one-sentence thesis present.
- [ ] Every metric in the definitions table has a gaming vector and a guardrail.
- [ ] Exactly six discussion questions, each with a 3 to 6 sentence briefing.
- [ ] Four perspectives present, in the fixed order.
- [ ] Maturity table has five levels and 3 to 5 rows.
- [ ] Checklist, prompts, and skill counts are within range, and every skill link resolves.
- [ ] 5 to 12 Wikipedia links, each verified live and each repeated in the references.
- [ ] No invented facts, figures, sources, or quotations. Version-sensitive claims (ITIL, ISO/IEC standards, Scrum Guide editions) are dated.
- [ ] No em-dashes. No stock phrasing. Acronyms expanded on first use.
- [ ] Roughly 3,000 to 6,000 words including tables and references (a `wc -w` count); shorter only for a genuinely lighter topic.
- [ ] Cross-references carry both number and title.
- [ ] Glossary and index entries added; `bin/check` passes.
