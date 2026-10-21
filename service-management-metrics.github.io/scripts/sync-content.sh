#!/bin/sh
# Copy the book's content from the monorepo into this site.
#
# The site vendors the content so that `pnpm dev` and `pnpm build` work on their
# own (this directory is deployed alone by `git subtree`). The copy goes stale
# when the book changes: run this, then commit the result. Never edit
# src/content/ by hand.
#
# Usage:
#   ./scripts/sync-content.sh [path-to-monorepo]
#
# The default path is the parent directory of this site.
#
# Copied:
#   locales/<locale>/topics/<slug>/index.md   written topics only (stubs are skipped)
#   locales/<locale>/dirs.json                the locale's translated directory names (locale.json "dirs"), used for URLs
#   locales/<locale>/slugs.tsv                canonical slug -> this locale's directory name, matched by .locale-peer-id
#   spec/topics.tsv                           -> src/content/topics.tsv (plus a title column read from each topic's first headline)
#   skills/<name>/SKILL.md                    -> src/content/skills/<name>/SKILL.md
#   llms.txt, llms.json                       -> static/

set -eu

here=$(cd "$(dirname "$0")/.." && pwd)
source_repo=${1:-"$here/.."}
destination="$here/src/content"
STUB='<!-- stub -->'

if [ ! -f "$source_repo/spec/topics.tsv" ]; then
    echo "No spec/topics.tsv under $source_repo" >&2
    echo "Pass the path to the monorepo as the first argument." >&2
    exit 1
fi

rm -rf "$destination"
mkdir -p "$destination/locales" "$destination/skills"

# The monorepo manifest has no titles: a topic's first headline is its title.
# Add a title column (from the canonical locale) so the site can list unwritten topics too.
printf 'part\tnumber\tslug\ttitle\tpart_title\n' > "$destination/topics.tsv"
tail -n +2 "$source_repo/spec/topics.tsv" | while IFS="$(printf '\t')" read -r part number slug part_title; do
    title=$(head -n 1 "$source_repo/locales/en-001/topics/$slug/index.md" | sed 's/^# *//')
    printf '%s\t%s\t%s\t%s\t%s\n' "$part" "$number" "$slug" "$title" "$part_title" >> "$destination/topics.tsv"
done
[ -f "$source_repo/llms.txt" ] && cp "$source_repo/llms.txt" "$here/static/llms.txt"
[ -f "$source_repo/llms.json" ] && cp "$source_repo/llms.json" "$here/static/llms.json"

# A locale may name a topic directory in its own language. Its .locale-peer-id
# matches the canonical (en-001) topic's, so write canonical-slug<TAB>local-slug
# pairs per locale (slugs.tsv) for the site to map between them.
ids_file=$(mktemp)
for topic_path in "$source_repo"/locales/en-001/topics/*/; do
    [ -f "${topic_path}.locale-peer-id" ] || continue
    printf '%s\t%s\n' "$(cat "${topic_path}.locale-peer-id")" "$(basename "$topic_path")" >> "$ids_file"
done

total=0
for locale_path in "$source_repo"/locales/*/; do
    locale=$(basename "$locale_path")
    count=0
    # A locale may name its directories in its own language (locale.json "dirs").
    # The site's content tree keeps the canonical names; only URLs use the local ones.
    topics_dir=topics
    if [ -f "${locale_path}locale.json" ]; then
        mkdir -p "$destination/locales/$locale"
        python3 -c 'import json,sys; d=json.load(open(sys.argv[1],encoding="utf-8")).get("dirs",{}); json.dump(d,open(sys.argv[2],"w",encoding="utf-8"),ensure_ascii=False)' "${locale_path}locale.json" "$destination/locales/$locale/dirs.json"
        eval "$(python3 -c 'import json,sys; d=json.load(open(sys.argv[1],encoding="utf-8")).get("dirs",{}); print("topics_dir=%s" % repr(d.get("topics","topics")))' "${locale_path}locale.json")"
    fi
    for topic_path in "${locale_path}${topics_dir}"/*/; do
        [ -f "${topic_path}index.md" ] || continue
        if grep -q "$STUB" "${topic_path}index.md"; then continue; fi
        slug=$(basename "$topic_path")
        if [ -f "${topic_path}.locale-peer-id" ]; then
            canonical=$(grep "^$(cat "${topic_path}.locale-peer-id")	" "$ids_file" | cut -f2 || true)
            if [ -n "$canonical" ]; then
                mkdir -p "$destination/locales/$locale"
                printf '%s\t%s\n' "$canonical" "$slug" >> "$destination/locales/$locale/slugs.tsv"
            fi
        fi
        mkdir -p "$destination/locales/$locale/topics/$slug"
        cp "${topic_path}index.md" "$destination/locales/$locale/topics/$slug/index.md"
        count=$((count + 1))
    done
    echo "Synced $count topics for locale $locale"
    total=$((total + count))
done

rm -f "$ids_file"
skills=0
for skill_path in "$source_repo"/skills/*/; do
    [ -f "${skill_path}SKILL.md" ] || continue
    name=$(basename "$skill_path")
    mkdir -p "$destination/skills/$name"
    cp "${skill_path}SKILL.md" "$destination/skills/$name/SKILL.md"
    skills=$((skills + 1))
done

echo "Synced $total topic files and $skills skills from $source_repo"
echo "Review with: git -C \"$here\" status"
echo "A new locale also needs src/lib/locales/<locale>.json (UI strings)."
