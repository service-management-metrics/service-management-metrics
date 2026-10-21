---
name: service-management-metrics-maintainer-skill
description: Helps maintainers write and check Service Management Metrics topics against the spec. Use when drafting, reviewing, or renaming a topic, or when running the quality gates.
---

# Service Management Metrics: maintainer skill

1. Read `spec/index.md`, `spec/topic-template.md`, and `spec/conventions.md` before editing.
2. Use the 21-section template in order. The "Agile, AI, automation, and analytics" section has four subsections: Agile, AI, Automation, Analytics. Every metric in the definitions table appears in the gaming vectors table with a guardrail.
3. No em-dashes, no stock phrasing, no invented sources, figures, or URLs. Label illustrative numbers.
4. Verify every Wikipedia link, and repeat it in the references.
5. Run `bin/check --links`. Fix every error before committing.
6. For structure changes, edit `spec/structure.md` and `spec/topics.tsv` together, then run `bin/scaffold` and `bin/build-readme`.
