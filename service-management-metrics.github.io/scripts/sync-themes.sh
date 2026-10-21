#!/bin/sh
# Copy the Lily reference themes from the installed npm package into static/.
#
# `@lilydesignsystem/themes` is CSS-only (see index.md), with no `<link>` or
# bundler build step for the runtime, per-theme swap `theme-picker` needs —
# each stylesheet has to exist as its own static file the picker can point a
# `<link href>` at. `static/assets/themes/` is therefore a generated copy, not
# hand-maintained source: this script is the only thing that should write to
# it. It reruns automatically after every `pnpm install` (see package.json's
# `postinstall`), so the directory is gitignored rather than committed — unlike
# `src/content/`, there is nothing here to review or diff by hand.
#
# Institution-specific themes (NHS England/Scotland/Wales, UK GOV.UK GDS, US
# USWDS) are deliberately excluded: this book is not any of those
# institutions, and shipping their themes would imply an affiliation that
# does not exist. Every excluded slug starts with `united-kingdom-` or
# `united-states-` (see the package's own index.md for the full 45-theme
# list), so the filter below is a prefix check, not a hardcoded exclusion
# list that could silently drift from what the package actually ships.
#
# Usage:
#   ./scripts/sync-themes.sh

set -eu

here=$(cd "$(dirname "$0")/.." && pwd)
source_dir="$here/node_modules/@lilydesignsystem/themes/dist"
destination="$here/static/assets/themes"

if [ ! -d "$source_dir" ]; then
    echo "No @lilydesignsystem/themes package found at $source_dir" >&2
    echo "Run pnpm install first." >&2
    exit 1
fi

# Remove first so a theme renamed or removed upstream doesn't linger here as
# a stale file the picker never offers but the site still ships.
rm -rf "$destination"
mkdir -p "$destination"

total=0
skipped=0
for theme_file in "$source_dir"/*.css; do
    name=$(basename "$theme_file")
    case "$name" in
        united-kingdom-*|united-states-*)
            skipped=$((skipped + 1))
            continue
            ;;
    esac
    cp "$theme_file" "$destination/$name"
    total=$((total + 1))
done

echo "Synced $total generic themes to static/assets/themes/ (skipped $skipped institution-specific themes) from @lilydesignsystem/themes"
