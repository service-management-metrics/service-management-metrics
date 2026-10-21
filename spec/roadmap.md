# Roadmap

The authoring backlog. The live checklist is `tasks.md`. Legend: `[ ]` todo, `[x]` done.

## Phase 0: setup (done)

Spec, manifest, stubs, tooling, skills, site skeleton.

## Phase 1: research

- [ ] Verify the ITIL 5 position against peoplecert.org and date it
- [ ] Catalogue canonical sources: Kanban Guide, DORA, SPACE, Google SRE books, ITIL 4 measurement and reporting, ISO/IEC 20000, KCS, FinOps Framework, NIST AI RMF, ISO/IEC 42001
- [ ] Decide the overlap policy with the *Service Management Guide* and with *Software Engineering Metrics* (summarize and cite instead of duplicating)

## Phases 2 to 8: author Parts 1 to 11, then appendices

- [ ] Part 1 first (1.2 Goodhart's law before everything), then Parts 2 to 11 in order, then Part 12
- [ ] Part 10 gives AI, automation, and analytics their own metric families; keep each metric paired with a quality guardrail

## Phase 9: skills, site, release

- [ ] Prune copied skills that no topic links to
- [ ] `pnpm sync`, `pnpm check`, `pnpm build`; browser check at 1440px and 390px
- [ ] Verify citations, links, and standards references; first subtree deploy

## Adoption checklists for a team

### First 30 days

- [ ] Pick one service and one team; write down why you want to measure.
- [ ] List the data you already have; choose at most five metrics (flow, stability, service level, experience, health).
- [ ] For each, write a definition card: clocks, exclusions, data source, owner, gaming vector, guardrail.

### Days 30 to 90

- [ ] Review the metrics in an existing team event; show distributions and trends, not league tables.
- [ ] Retire a metric nobody used.

### Days 90 to 180

- [ ] Add a second team; link flow and change measures to service level and experience measures.
- [ ] Measure any AI assistance and automation with a paired quality measure.
- [ ] Run a gaming review: how would we cheat this, and would we notice?
