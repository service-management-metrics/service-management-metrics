# Locales

The book is published in a set of locales. Each locale is a complete copy of every topic, differing only in language or spelling. All locales keep identical structure, section order, and slugs; see [structure.md](structure.md) and [conventions.md](conventions.md), which govern every locale equally.

How the site supports locales end to end (routing, UI strings, language picker) is in [locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md). The list of language codes is [locales-for-global-sharing-with-svelte/locales.tsv](locales-for-global-sharing-with-svelte/locales.tsv).

## `en-001` is the source

Author and edit topics in `locales/en-001/topics/<slug>/`. It is the one locale a person writes by hand in English. This matches the *Service Management Guide*, so a topic here and its sibling there share a slug and a spelling convention (American-adjacent `-ize`, `color`, `program`, `catalog`; see [conventions.md](conventions.md), "Language").

## English spelling variants

These are mechanical conversions of `en-001`, never hand-edited, produced by `bin/localize` once it exists (see [roadmap.md](roadmap.md)). Guidance for each is in the Svelte locale spec.

| Locale | Name | Derivation from `en-001` |
| --- | --- | --- |
| `en-001` | International English | The authoring source. |
| `en-us` | American English | Fix any stray British forms (organisation to organization, licence to license, programme to program, cancelled to canceled, analogue to analog). |
| `en-gb` | British English | `-ize` to `-ise` family, `-or` to `-our`, `-er` to `-re`, `-se` to `-ce` for nouns, doubled-L forms, analogue, programme, and maths. |
| `en-gb-oxendict` | British English, Oxford spelling | `en-gb`, then revert only the `-ise` family to `-ize`, keeping `-yse` forms (analyse) and every other British form. |

Picker labels follow `<language> - <region>`: `en-gb` is "English - Great Britain" and `en-gb-oxendict` is "English - Great Britain, Oxford spelling".

Locale conversion never touches fenced code blocks, inline code, link targets, proper nouns, or titles of cited works (for example, "Hospital Readmissions Reduction Program" stays as written).

## Translated locales

A translated locale is maintained by a person, in its own language. It reuses the slug and the `.locale-peer-id` of the English topic, so the site can find "this page, in locale X".

Priority order for translation:

1. `en-001`
2. `en-us`
3. `en-gb`
4. `en-gb-oxendict`
5. `cy-gb` (then copy to `cy-001`)
6. `zh-cn` (then copy to `zh-001`)
7. `ar-001`
8. `hi-in` (then copy to `hi-001`)

Further codes come from `locales.tsv` as translators volunteer. A translated topic keeps the same sections in the same order; only the section prose is translated. Metric names that are standard acronyms (MTTR, SLO, CMDB) stay in Latin letters, with a local-language expansion on first use.

## `.locale-peer-id`

Every topic directory has a `.locale-peer-id` file: a byte-identical 32-character lowercase hexadecimal number followed by a newline, the same across every locale's version of the same topic, regardless of slug. Once assigned it is immutable. Helper scripts in `bin/` create and look up ids.

## Section directory names

Each locale directory holds up to five sections: topics, front matter, examples, contributing, and project. Their directory names are language-specific and are listed in `spec/section-names.json`, which has a `default` block (English names) and one block per locale. Add a locale's block when the locale is added.

## Adding a locale

1. Add the code to `locales.tsv` if absent, and a block to `section-names.json`.
2. Create the locale directory with its section directories.
3. For each topic, copy the `.locale-peer-id` from the English topic.
4. Add the UI message file and the one-line registration the site needs.
5. Run `bin/check`.
