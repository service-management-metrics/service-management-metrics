# Install and use

You do not need to install anything to read the book: go to <https://service-management-metrics.github.io>, or read the Markdown in `locales/en-001/topics/` on GitHub.

## Read locally

```sh
git clone git@github.com:service-management-metrics/service-management-metrics.git
cd service-management-metrics
open README.md
```

## Run the checks

You need Python 3.

```sh
python3 -I bin/check --strict          # structure, template, and style rules
python3 -I bin/check --strict --links  # also resolves every Wikipedia link
python3 bin/check-locales              # every locale is complete
python3 bin/localize --check           # derived English locales are current
```

## Run the website

You need Node.js and pnpm.

```sh
cd service-management-metrics.github.io
pnpm install
./scripts/sync-content.sh   # copy content from the book
pnpm dev                    # http://localhost:5173
```

## Use the AI skills

Copy `skills/service-management-metrics-skill/` into your own Claude Code skills folder. The maintainer skill in `skills/service-management-metrics-maintainer-skill/` is for people editing this book.
