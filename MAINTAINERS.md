# Maintainers and access continuity

## Roster

| Person | GitHub | Email | Role | Since |
| --- | --- | --- | --- | --- |
| Joel Parker Henderson | [@joelparkerhenderson](https://github.com/joelparkerhenderson) | <joel@joelparkerhenderson.com> | Maintainer (sole) | 2026-10 |

**The bus factor of this project is one.** One person has write access, one person can publish, and one person accepts contributions. The `service-management-metrics` GitHub organization is a convenience owned by that same person and does not represent a group.

## What this means in practice

- The book is plain Markdown in a public repository under a permissive license, so anyone can fork and continue it.
- The published site is built from that repository by a GitHub Actions workflow in the site repository. A fork can publish its own copy by following `service-management-metrics.github.io/README.md`.
- Machine gates (`bin/check`, `bin/check-locales`) stand in for review capacity a larger team would have. See [AI_STATEMENT.md](AI_STATEMENT.md).
