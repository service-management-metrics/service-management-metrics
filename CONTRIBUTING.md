# Contributing

Thank you for helping. You can contribute time, corrections, translations, or review.

## Ways to help

- **Report a mistake.** Open an issue naming the topic number and the sentence. A wrong source, a broken link, or a metric without a guardrail is especially useful.
- **Verify a reference.** Most books, papers, and standards were cited from memory. Confirm one against the original and open an issue or pull request with the correction.
- **Translate.** See `spec/locales.md` and `spec/locales-for-global-sharing-with-svelte/index.md`. A translation keeps the section order and each topic's `.locale-peer-id`.
- **Suggest a metric or a gaming vector.** Say which topic it belongs in, how it can be gamed, and what guardrail catches it.

## Before you open a pull request

1. Read `spec/index.md`, `AGENTS.md`, and `STYLE_GUIDE.md`.
2. Run `bin/check --strict` and `bin/check-locales`. Both must pass.
3. If you changed a topic, run `bin/localize`, `bin/build-appendix-metrics`, `bin/build-appendix-references`, `bin/build-appendix-index`, and `bin/build-readme`, and commit the results.
4. If you used an AI tool for substantial content, say which tool and what it did in the pull request description (see [AI_STATEMENT.md](AI_STATEMENT.md)).

## Rules that matter most

Never invent sources or numbers. Every metric gets a gaming vector and a guardrail. Metrics describe teams, services, and systems, never individuals. Follow the agile stance in `spec/index.md`.

## Money

There is no donation button. If you want to support the work, the most useful contributions are corrections and verified sources.
