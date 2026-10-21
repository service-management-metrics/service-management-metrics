# Style guide

The spec ([`spec/conventions.md`](spec/conventions.md)) overrides this file.

## Voice

Calm, plain, practical. Address the reader as "you" for guidance. Lead with the point. Short paragraphs of 2 to 4 sentences. Tables for comparisons and metric definitions. Neutral between agile and ITIL: name the trade-off, never the winner.

## Agile stance

Emphasize continuous delivery, continuous stakeholder involvement, continuous improvement, ongoing evolution, sustainable pace, and building projects around motivated individuals (see `spec/index.md`, "The agile stance"). Never write "agile delivery": write "continuous delivery". De-emphasize sprint, Scrum, and Kanban: they are brands of practice, not agile in themselves. Mention them only where a source or the reader's context needs them, and as one example among several. Do not use "sprint", "burndown", or "iteration" outside the references, except conditionally: "If your team chooses to use sprints, ...", "If your team chooses to use Scrum, ...", "If your team chooses to use Kanban, ...".

## Language (en-001)

American-adjacent spelling with `-ize`, `color`, `program`, `catalog`, `license`. Dates written out ("9 October 2026"). Metric units. Double quotation marks, punctuation outside unless part of the quotation. ITIL's "service catalogue" appears once in parentheses on first use per topic.

## Acronyms

Expand every acronym on first use in each topic: "service level objective (SLO)".

## Writing a metric

For every metric state: what is counted, where the clock starts and stops, what is excluded, the unit, the data source, the owner, how it gets gamed, and the guardrail that catches that. Prefer percentiles to averages for times. Say when a sample is too small to read.

## Writing AI prompts

A bold one-line purpose, then a fenced `text` block with `[placeholders]`. The prompt supplies the reader's real data and asks the AI to list its assumptions and to say what it could not determine. It never asks the AI to invent metrics, benchmarks, sources, or compliance claims.

## Words to avoid

Em-dashes; "not only ... but also"; "load-bearing"; "It's important to note"; "In today's fast-paced world"; hype words (revolutionary, game-changing, cutting-edge, seamless, disruptive, best-in-class).
