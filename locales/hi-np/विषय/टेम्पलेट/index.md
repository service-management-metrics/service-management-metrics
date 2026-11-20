# टेम्पलेट

नक़ल करके ढालने के लिए चार टेम्पलेट: एक मीट्रिक्स चार्टर, एक मीट्रिक कार्ड, एक डैशबोर्ड विनिर्देश और एक समीक्षा एजेंडा। ये शुरुआती बिंदु हैं। कोष्ठकों में लिखे पाठ को बदलें, जो फ़िट न बैठे उसे हटा दें, और जहाँ संभव हो हर दस्तावेज़ को एक पृष्ठ का रखें।

## मीट्रिक्स चार्टर

```text
Metrics charter for [team, service, or organization]

Purpose
We measure [services and ways of working] to [improve ... / see ... / decide ...].
The measures help us see our own work and improve it. They are not a way to
judge individuals.

What the data is for
- Team reviews of how the work is going and what to try next.
- Decisions about where to invest in services, tools, and skills.
- Reporting that [regulators/customers] require: [list, kept separate].

What the data will never be used for
- Ranking or comparing individuals.
- Individual performance reviews, pay, promotion, or dismissal.
- [Add the worries your teams raised.]

Who sees what
- Each team sees its own data first, and owns the interpretation.
- [Role] sees aggregated service and team trends.
- Individual-level views are switched off in [tools].

Data kept
- [What is collected, from which systems, for how long.]

Challenges
- Anyone may challenge a number. We respond within [number] working days.
- Contact: [name or group].

Breaches
- Report any use against this charter to [route]. Outcomes are published
  without names.

Review
- We review this charter every [six months] with the teams.

Signed: [sponsor], [team representative(s)]   Date: [date]
```

## मीट्रिक कार्ड

```text
Metric card: [metric name]

Question it answers: [the question the audience asked]
Decision it informs: [what someone might do differently]
Definition: [plain words]
Formula: [how it is calculated]
Unit: [unit]   Cadence: [how often]
Clock or boundary rules: [when counting starts, stops, pauses]
Data source: [system and field]   Refresh: [interval]
Owner: [role]   Person to ask: [name or group]
Audience: [team, service owner, leadership]
Level: [team, service, or system. Never an individual.]
Display: [median and percentile, run chart, distribution]
Baseline: [period and value from our own data]
Known limits: [gaps, changes in entry habits, sample size]
Gaming vector: [how it could be made to look better without being better]
Guardrail: [paired metric or practice]
Companion outcome: [the outcome it should be read with]
Related topic: (see topic [N.M], [Title])
Retire when: [condition]
Last reviewed: [date]   Changes since last review: [notes]
```

## डैशबोर्ड विनिर्देश

```text
Dashboard specification: [name]

Audience: [team, service owner, leadership]
Owner: [role]   Review cadence: [monthly or quarterly]   Review date: [date]
Questions it answers
1. [question]
2. [question]

Measures (no more than about nine)
| Measure | Question | Companion guardrail | Display | Source | Refresh |
| [name] | [no.] | [name] | [sparkline / run chart / distribution] | [system] | [interval] |

Context shown with every value
- Trend over [period], event notes, definition link, sample size where small.

Status colors
- [None, or the stated rule that allows for ordinary variation.]

Access
- [Who may see what. Individual-level views: off.]

Data quality checks
- [Freshness, row counts, reconciliation with the source.]

Retirement
- Reports replaced by this dashboard: [list] retired on [date].
- Measures to retire when: [conditions].

Approved by the audience: [names or roles]   Date: [date]
```

## समीक्षा एजेंडा

45 मिनट की टीम समीक्षा, मासिक या तिमाही। यह काम के बारे में एक बातचीत है, जिसका नेतृत्व टीम करती है।

```text
Metrics review for [team], [date]

1. Check-in (5 minutes)
   How is the work going? Anything the numbers will not show?

2. Events since last time (5 minutes)
   Releases, incidents, staffing changes, policy changes. Add notes to the display.

3. Trends and distributions (15 minutes)
   For each measure: What do we see? Is it ordinary variation or a signal?
   Read each measure with its guardrail. Check data freshness and known gaps.

4. Decisions (10 minutes)
   What will we try, stop, or change? Record each decision, including a
   decision to wait and watch. Name an owner and a date to look again.

5. Last decisions (5 minutes)
   Did last time's decisions help? What did we learn?

6. The measures themselves (5 minutes)
   Which measure confused us or misled us? Which could we retire? What is missing?

Record: decisions, owners, dates, changes to measures.
Rule: no comparison of individuals. Numbers describe the system.
```
