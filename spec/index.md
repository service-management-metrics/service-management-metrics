# Service Management Metrics: Specification

This is the governing specification for *Service Management Metrics*. Where any file in this repository disagrees with this document or its companions, the spec wins: fix the file, or change the spec on purpose and bring every affected artifact into line in the same change.

The book is made of **topics**. The topics are **Markdown**. The words in those topics are the product. Everything else in the repository exists to serve them.

If you are an author or an agent about to change anything, read this file first.

## This is a book, not a website

- The **source of truth** is the Markdown in `locales/en-001/topics/`, the front matter, the appendices, this specification, and the locales derived from it (see [locales.md](locales.md)).
- The **website is a side effect.** It is rendered from the same Markdown by a separate SvelteKit project (`service-management-metrics.github.io/`) governed by its own `AGENTS.md`. Nothing in that layer decides what the book says.
- If the site and the book disagree, the **book wins.** You could delete the rendering directory and still have the whole book in plain text.

Write for a reader holding a book, topic by topic. Do not write for a navigation sidebar, a search box, or a theme.

## What this book is

A practical handbook for measuring service management in the age of ITIL 5, through four lenses: agile, AI, automation, and analytics. It is the metrics companion to the *Service Management Guide* (`~/git/service-management-guide/service-management-guide`), which holds the practices; this book holds the measures of those practices.

- **Premise:** agile ways of working, which aim at continuous delivery, continuous stakeholder involvement, continuous improvement, ongoing evolution, sustainable pace, and projects built around motivated individuals, and IT service management as codified by ITIL are complements. They also measure different things in different ways. Agile measures flow, learning, and working software delivered continuously. ITIL measures service levels, incidents, changes, assets, and value co-created with customers. This book joins the two into one coherent, humane metrics set.
- **Audience:** delivery teams, service desk and operations staff, product and service owners, agile coaches and team facilitators, IT managers and CIOs, and people preparing for ITIL or agile certification.
- **Centre of gravity:** worldwide and vendor-neutral. Commercial companies, the public sector, nonprofits, and managed-service providers are all first-class readers. Named frameworks and tools are examples, never endorsements.
- **Guardrail:** [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): a measure that becomes a target stops being a good measure. Topic 1.2 sets it, and every metric family in the book carries its own gaming vector and guardrail as a condition of using the metric at all.
- **Distinctive features:** every content topic has a metric definitions table, a gaming vectors table, six discussion questions, four points of view, a fictional worked example, AI prompts, and links to AI skills.

## The agile stance

This book treats agile as a small set of aims, drawn from the Agile Manifesto and its principles, and not as a set of ceremonies or branded methods. The aims, in the order the book leans on them:

1. **Continuous delivery** of valuable software, so that change reaches users steadily and safely.
2. **Continuous stakeholder involvement**: developers, operations, service desk, product and service owners, suppliers, auditors, and users work together every day, not at handoffs.
3. **Continuous improvement**: the team regularly reflects on how to become more effective and adjusts its way of working.
4. **Ongoing evolution**: requirements, services, and ways of working keep changing, and changing needs are welcomed, not resisted.
5. **Sustainable pace**: sponsors, teams, and users can keep going at a constant pace indefinitely, without heroics, burnout, or a permanent state of urgency.
6. **Projects built around motivated individuals**: give people the environment and support they need, and trust them to get the work done. Metrics serve this aim by helping people see their own work; they are never used to rank or police them.

Writing consequences for every topic:

- **Never say "agile delivery".** It is wrong, misleading, and cargo cult: agile is a set of values and principles, and delivery is something you do continuously. Say "continuous delivery" (or "continuous software delivery"). Enforced by `bin/check`.
- **De-emphasize "sprint", "Scrum", and "Kanban".** They are particular brands of practice. They are not agile in themselves, and copying their rituals without the aims behind them is cargo cult. Describe practices by the aims above. Name them only where a cited source or a reader's context requires it, and then as one local convention among several. The Kanban Guide and DORA research may be cited as sources for flow and delivery measures, since they do not depend on fixed time-boxes.
- **Conditional phrasing is allowed.** You may name a practice when the sentence makes clear it is the reader's own choice, for example "If your team chooses to use sprints, ...", "If your team chooses to use Scrum, ...", or "If your team chooses to use Kanban, ...". Keep such passages short and secondary to the aims, and give the aim behind the practice. `bin/check` accepts the banned terms only inside a sentence of this form ("if", "where", or "when" a team "chooses to use" the practice).
- **Avoid "iteration", "burndown", and "frequent releases"** as the way to describe how work moves. Prefer "continuous delivery", "planning cadence", and "review cadence". `bin/check` rejects "sprint", "burndown", and "iteration" outside the references unless the sentence is conditional on the team's own choice.
- **Prefer the vocabulary of the aims**: continuous stakeholder involvement, continuous improvement, ongoing evolution, sustainable pace, motivated individuals, flow, feedback, and learning.
- **Do not make time-boxed events, velocity, or release counts the centre of a measure.** Where a team uses them, they are that team's local convention, and the topic says so.
- **Frame improvement metrics around learning and removing obstacles, and people metrics around support, trust, and sustainable pace.**

## The four lenses and ITIL 5

Every metric topic asks what changes when work is **agile** (continuous delivery, stakeholder involvement, sustainable pace), **AI-assisted** (inflated volume, shifting quality, new risks), **automated** (coverage, failure, rollback, maintenance cost), and **analyzed** (data quality, forecast honesty, decisions changed). The section "Agile, AI, automation, and analytics" in the topic template holds this.

ITIL (Version 5) was introduced by PeopleCert in 2026, described by its owner as digital product and service management that includes the impact of AI and emerging technologies and links strategy, delivery, and measurable outcomes. As of October 2026 that is all this book treats as verified (from peoplecert.org); everything else about ITIL 5 is unconfirmed until read from the owner. Label every ITIL statement "in ITIL 4" or "in ITIL 5". See topic 1.8 (ITIL 5 measurement and value outcomes).

## Sibling projects

| Project | Role here |
| --- | --- |
| `~/git/service-management-guide/service-management-guide` | The practices. This book cross-references its topics by number and title, and reuses its slugs, its shared maturity scale, and its en-001 conventions. |
| `~/git/software-engineering-metrics/software-engineering-metrics` | The model for this spec: the manifest, the conventions, the hard rules, the tests, and the site architecture. Where this book overlaps (DORA, SPACE, flow, SLOs), it summarizes and cites that book's approach instead of competing with it. |

## What spec-driven development means here

The spec comes first, the topics conform to it, and the tests enforce it.

1. **Declare intent in the spec.** What topics exist, in what order, and what shape each takes is decided in these files, not improvised topic by topic.
2. **Bring the topics into line.** A topic that does not follow the template or the house style is a defect, not a variation.
3. **Enforce mechanically what can be enforced.** `bin/check` verifies the structure and the rules a machine can check. It must pass before any change is considered done.

**Change the spec and the topics in the same change.** Never let the manifest, the conventions, and the topic files drift apart.

## The specification files

| File | What it governs |
| --- | --- |
| [structure.md](structure.md) | The canonical manifest: every part and topic, with number, slug, title, and scope. |
| [topics.tsv](topics.tsv) | Machine-readable twin of the manifest. Must agree with `structure.md`. |
| [topic-template.md](topic-template.md) | The fixed sections of a content topic, and the shape of a part introduction. |
| [conventions.md](conventions.md) | Numbering, file layout, house style, citation rules, hard rules, and how to change the structure. |
| [maturity-model.md](maturity-model.md) | The shared five-level maturity scale. |
| [locales.md](locales.md) | The locale set, the authoring locale, derivation, and peer ids. |
| [roadmap.md](roadmap.md) | The authoring backlog and adoption checklists. |
| [search/index.md](search/index.md) | Site search behaviour. |
| [contents-for-global-sharing-with-svelte/index.md](contents-for-global-sharing-with-svelte/index.md) | How the site presents contents. |
| [locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md) | How the site supports locales end to end. |
| [special-files-for-public-repos/index.md](special-files-for-public-repos/index.md) | The top-level files every public repo carries. |

## The shape of the book

Twelve parts, made of numbered topics. Each part opens with an N.0 introduction.

1. Foundations of Measurement
2. Flow and Agile Delivery Metrics
3. Service Desk, Incident, and Request Metrics
4. Problem, Change, and Release Metrics
5. Service Level, Availability, and Reliability Metrics
6. Customer and Experience Metrics
7. Asset, Configuration, and Financial Metrics
8. Security, Risk, Compliance, and Supplier Metrics
9. People, Teams, and Improvement Metrics
10. Metrics for AI, Automation, and Analytics
11. Building a Metrics Program
12. Appendices

The authoritative list is [structure.md](structure.md). This overview deliberately does not restate topics, so the two cannot fall out of sync.

## How the two traditions are joined

Each metric topic names, in its metric definitions table, both its **ITIL practice** (for example incident management, change enablement, service level management) and its **agile counterpart** (for example cycle time, work item age, delivery goal success). A metric that has only one side gets a sentence explaining why. This is how the book stays neutral between frameworks: no "agile good, ITIL bad" or the reverse.

## Golden rules

The enforceable version is in [conventions.md](conventions.md).

1. **No em-dashes.** Use a comma, colon, parentheses, or two sentences.
2. **No stock LLM phrasing.** No "not only ... but also", no "load-bearing", no filler openers.
3. **Follow the topic template.** The section order is fixed.
4. **Never invent sources.** No made-up citations, URLs, statistics, survey figures, benchmark values, or quotations. If a figure cannot be verified, describe the pattern without the number.
5. **Define terms on first use** in each topic, and link key concepts to Wikipedia once per topic, after verifying the article exists.
6. **Name the gaming vector.** A topic that presents a metric without saying how it gets gamed and what pairs with it to catch that is not finished.
7. **Metrics are for teams, not for ranking people.** No topic recommends individual league tables, or tying a single number to pay or discipline.
8. **Agile stance.** Never say "agile delivery"; say "continuous delivery". De-emphasize sprint, Scrum, and Kanban; emphasize continuous stakeholder involvement, continuous improvement, ongoing evolution, and sustainable pace.
9. **The spec is the source of truth.** Change the spec and the topics together.
10. **Checks must pass.** Run `bin/check` before you consider a change done.

## The usual workflow

1. Decide the change as a change to the book: which topics, which sections, which words.
2. Edit the spec first if the change touches structure, numbering, or conventions.
3. Write or edit topics in `locales/en-001/topics/<slug>/index.md`, following the template and house style.
4. If the set of topics changed, update `structure.md` and `topics.tsv`, then regenerate the README table of contents, the glossary and index entries, and `llms.*`.
5. Run `bin/check` and fix anything it reports.
6. Update `tasks.md` and the changelog in the same commit.
