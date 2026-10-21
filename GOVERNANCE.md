# Governance

This project has one maintainer, Joel Parker Henderson, who decides what the book says and what ships. See [MAINTAINERS.md](MAINTAINERS.md).

## Source of truth

`spec/index.md` governs everything. Where a file disagrees with the spec, the spec wins, or the spec is changed on purpose and every file is brought into line in the same commit.

## How decisions are made

- Content changes follow the topic template and the hard rules in [AGENTS.md](AGENTS.md), and must pass `bin/check --strict`.
- Changes to the spec, the template, or the manifest are made on purpose and recorded in the commit message.
- Disagreements about wording or scope are settled in issues. The maintainer decides, and records the reasoning in the spec when it affects future writing.

## What the project will not do

- It will not invent sources, statistics, or quotations.
- It will not publish metrics advice that ranks individuals.
- It will not present framework text it does not have the right to reproduce.

## Changing governance

This file changes by pull request, like everything else.
