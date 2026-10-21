# AI Statement

Version 1.0.0, status is active.

Canonical location is `AI_STATEMENT.md` at the repository root.

Review at least at every release.

**Abstract.** This document discloses how artificial-intelligence tools are used to produce this book and its website. It states what the tools do and do not touch, who is accountable, which controls bound the work, the licensing and data position, the rules for contributors, the uses that are prohibited, and the limitations that remain. It is a self-declaration by the maintainer.

The key words shall, should, and may are used as ISO/IEC Directives Part 2 defines them: requirement, recommendation, permission.

## 1. Scope

This document covers the use of AI tools in producing everything in this repository and in the site repository published from it.

The book discusses AI, automation, and analytics (Part 10) and ships AI prompts and skills as text. It does not ship an AI system. Nothing the site serves calls an AI service.

## 2. Frameworks

Nothing in the EU AI Act, or in other rules known to the maintainer, places an obligation on this project, which is a book. This statement is voluntary. ISO/IEC 42001 and the NIST AI RMF are used as vocabulary only. No certification is claimed and no audit has occurred.

## 3. Terms

This document uses the W3C AI Content Disclosure vocabulary:

- none: entirely human-authored
- ai-assisted: human-authored; AI edited, refined, or filled in boilerplate
- ai-generated: AI-generated with human prompting and review
- autonomous: AI-generated without meaningful human oversight

## 4. Accountability

[MAINTAINERS.md](MAINTAINERS.md) names the accountable maintainer for every change, whatever tool produced the text.

## 5. Where AI is used, and at what level

The tooling is agentic AI coding assistance (Claude Code, by Anthropic) operated in sessions the maintainer directs. No percentage is given, because no defensible method for measuring one exists.

| Activity | Level | Notes |
| --- | --- | --- |
| Topic text, appendices, and the specification | ai-generated | Written in directed sessions, one part at a time, and approved by the maintainer before the next part begins |
| Scripts in `bin/` and the website source | ai-generated | Adapted from sibling projects and checked by the quality gates |
| Reference verification | ai-assisted | Web searches and URL checks by the tool; results recorded in commit messages |
| Translations | ai-generated | Where present, marked in the locale; see section 12 |
| Scope, structure, and the agile stance | none | Decided by the maintainer and recorded in the spec |
| Release decisions and publication | none | Decided by the maintainer |

## 6. Human oversight

The maintainer sets the scope, the rules, and the stance, reads the summary of each part, and decides whether to proceed. That is part-level oversight. Line-by-line independent review of every sentence is not claimed.

## 7. Quality controls

- **Specification authority.** `spec/index.md` governs. Enforced by `bin/check`.
- **Mechanical gates.** `bin/check --strict --links` enforces the template, banned phrasing, spelling rules, the agile stance, and that every Wikipedia link resolves. `bin/check-locales` enforces that every locale is complete.
- **No invented sources.** The writing rules forbid invented sources, statistics, and quotations. The gates cannot detect an invented book or paper. References must be verified at write time; any that are not are marked unverified in the references appendix. ITIL 5 statements rest only on the framework owner's own publications.

## 8. Licensing and provenance

AI output does not launder anyone's copyright, and the full provenance of generated text is generally not knowable. Substantially copied third-party text is refused however it was produced. Framework text (ITIL, ISO/IEC, the Scrum Guide) is summarized and cited, not reproduced. If identifiable third-party material is found, it is removed or licensed properly.

## 9. Data

No personal data, customer data, or confidential organizational data is in the repository or in prompts. Worked examples use fictional organizations and labeled illustrative figures. Vendor-side data handling is governed by the tool vendor's terms, and this document makes no claim on the vendor's behalf.

## 10. Rules for contributors

Contributors may use AI tools. A contribution with ai-generated content shall say so in the pull request description: which tool, and what it did. The contributor remains responsible for the submission: understood, checked, and honest. Commits made in the maintainer's AI sessions carry a Co-Authored-By trailer naming the tool.

## 11. Prohibited uses

AI shall not merge or publish on its own initiative, decide scope, fabricate a citation or number, or weaken a quality gate to make a change pass.

## 12. Limitations and residual risks

- **The gates test form, not truth.** A passing check does not mean a claim is correct.
- **Citations may be wrong.** Many references are unverified. Treat bibliographic details as leads.
- **Review depth is one person's.** See section 6.
- **Translations, when added, will be machine-produced.** They have not been reviewed by native-speaking reviewers unless a locale says so, and they may contain errors of terminology or tone.
- **Provenance uncertainty survives.** Whether any generated fragment echoes training material is not fully knowable.
- **Self-declaration.** No third party has audited this document.

## 13. Review and change

Reviewed at each release, and revised when the tooling, a vendor's terms, or a binding rule changes. The change lands as a commit and updates the change log below.

## 14. Reporting

Report a suspected provenance, licensing, or quality problem, including a claim here that does not survive checking, by opening an issue. For anything security-sensitive, use [SECURITY.md](SECURITY.md).

## Annex A. Change log

| Version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 2026-10-11 | First issue. |

## Annex B. Machine-readable summary

```yaml
ai-statement:
  version: 1.0.0
  last-updated: 2026-10-20
  vocabulary: w3c-ai-content-disclosure
  disclosure-default: ai-generated
  tools:
    - name: Claude Code
      provider: Anthropic
  processes:
    content: ai-generated
    code: ai-generated
    reference-verification: ai-assisted
    translation: ai-generated
    scope-and-stance: none
    release-decisions: none
  ships-ai-system: false
  autonomous-use: none
```
