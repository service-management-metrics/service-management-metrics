# Metrics governance and ownership

**A metric that nobody owns, defines, reviews, or retires will drift away from the work it describes, so give every reported metric a named owner, a written definition, a review date, and an exit.**

## Overview and motivation

Metrics governance is the set of lightweight decisions about who owns a measure, what it means, who may see it, how often it is reviewed, and when it is removed. It is a close cousin of [data governance](https://en.wikipedia.org/wiki/Data_governance), which covers the wider management of data availability, quality, and security in an organization. Metrics governance applies the same discipline to the small, high-visibility set of numbers that teams and leaders use to steer service and delivery work.

The need shows up as small, repeated frictions. Two teams compute "resolution time" differently and spend a meeting reconciling the figures. A dashboard tile goes stale for months because the person who built it changed jobs. A measure designed to help one team diagnose its flow is adopted by a steering group as a performance target, which is the situation the previous topic warns about (see topic 1.2, Goodhart's law and the psychology of metrics). None of these is a statistical problem. Each is an ownership problem, and each is cheap to prevent.

Agile and ITIL views differ in emphasis, and the difference is useful. In the agile view, a team owns its working measures and negotiates them in retrospectives, working agreements, and reviews. The ITIL view, as documented in ITIL 4 (the 2019 edition from AXELOS, now published by PeopleCert), treats measurement and reporting as a general management practice and continual improvement as a practice with its own roles, records, and review. ITIL also expects service owners and practice owners to be accountable for results. The two views fit together: the team owns the working view, a named service or practice owner owns the reported view, and a small register links the two.

A few terms used here. A **metric owner** is the one accountable person for a metric's definition, data quality, and use. A **metric register** is a short catalogue of the metrics in use, with each one's owner, definition, data source, guardrail, and review date. A **metrics charter** is a one-page statement of purpose, scope, roles, and review cadence for a set of metrics. A **[single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)** is the one authoritative system or dataset from which a given figure is computed. A **[data steward](https://en.wikipedia.org/wiki/Data_steward)** looks after the quality and definition of a data domain, and in a small organization the metric owner often plays this role. A **[RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix)** records who is responsible, accountable, consulted, and informed for each activity. A **[data dictionary](https://en.wikipedia.org/wiki/Data_dictionary)** is a catalogue of data elements and their meanings, which is what the register's definition column becomes at larger scale. The **[principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** says that people and systems get the access they need for their task and no more. **[Continual improvement](https://en.wikipedia.org/wiki/Continual_improvement_process)** is the ongoing effort to improve services, practices, and ways of working, and it is both an ITIL practice and an agile habit. SLA means service level agreement, and ITSM means IT service management.

## Key principles

- **Every reported metric has one named owner.** A role or a person, never "the team." Shared ownership leaves the definition unmaintained.
- **One definition, one source of truth.** Write the definition once, including where the clock starts and stops, and compute the figure in one place.
- **Govern in proportion to consequence.** A metric a team uses to debug its own board needs a sentence. A metric in a contract, a public report, or a board pack needs a charter entry, review, and an audit trail.
- **Access follows purpose.** Decide who sees which view and why. The default audience for a team's working view is the team.
- **Review on a cadence and retire on evidence.** Metrics have lifecycles. Adopt, review, revise, and retire them deliberately.
- **Write it down and keep it small.** A register that fits on a page gets read. A policy manual does not.
- **Governance serves the people measured.** The owners of a metric include the people whose work it describes.

## Metric definitions

These are measures of the health of a metrics practice, not of a service. They are deliberately few and cheap to collect from the register itself. Each period is a calendar quarter unless stated.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ownership coverage | Share of reported metrics with a named, current owner | reported metrics with an owner who still holds the role at period end / reported metrics at period end; excludes metrics used only inside one team's private board | percent | Metric register | Measurement and reporting | Working agreements | Quarterly |
| Definition currency | Share of reported metrics whose definition was reviewed within the agreed interval | metrics with a review date within the last 6 months / reported metrics; clock starts at the last recorded review and stops at the period end | percent | Metric register change log | Measurement and reporting; continual improvement | Retrospective actions | Quarterly |
| Source conformance | Share of reported metrics computed from exactly one named source | metrics with one authoritative source and no known parallel calculation / reported metrics; parallel calculations are found by sampling dashboards and reports | percent | Register plus a sample of dashboards and reports | Measurement and reporting; service level management | Definition of done for a metric | Quarterly |
| Retirement rate | Number of metrics retired or merged in a period relative to those reported | metrics retired or merged in the period / metrics reported at period start; a metric moved to a private team view counts as retired from the reported set | percent | Metric register change log | Continual improvement | Retrospective actions | Quarterly |
| Access review currency | Share of restricted metric views whose audience list was reviewed within the interval | restricted views with an audience review in the last 6 months / restricted views; views open to the whole organization are excluded | percent | Access list or BI tool permissions export | Information security management; measurement and reporting | Working agreements | Semi-annually |
| Decision linkage | Share of reported metrics linked in the register to a decision they inform | metrics with a recorded decision or question / reported metrics; a link counts only if the decision was taken in the last 12 months | percent | Metric register and decision log | Continual improvement | Stakeholder review and improvement outcomes | Quarterly |

None of these is a target. A register can show full ownership coverage and still describe useless metrics, so read the table with the gaming table below.

## Recommendations

### Establish ownership and the register

**1. Keep a one-page metric register.** List each reported metric with its question, owner, definition, formula and clocks, unit, data source, audience, guardrail, last review date, and planned review date. A spreadsheet or a Markdown file in version control is enough. The register is the single most useful artefact in this topic, and the previous topic already assumes it exists (see topic 1.2, Goodhart's law and the psychology of metrics).

**2. Name one owner per metric, and record the role.** The owner is accountable for the definition, the data quality, and the explanation of odd results. Choose someone close to the data and the decisions, often the service owner, a practice owner, or a team lead. Record the role as well as the person, so the entry survives a change of job and a vacancy shows up in the coverage figure.

**3. Separate owning a metric from owning the work it measures.** The owner of a metric explains and maintains it, but the team that does the work remains responsible for the result. This avoids two traps: the owner who is blamed for a number they cannot influence, and the team that disowns a number because someone else maintains it. A short RACI table in the charter makes this explicit.

**4. Write the definition with its clocks, once.** The register holds the authoritative definition: what is counted, where the clock starts and stops, which states pause it, and what is excluded. Link to it from every dashboard that shows the metric. When a definition needs to change, change it in the register first and mark the change on the chart (see topic 1.6, Statistical literacy for service metrics, for how to show a break in a trend).

**5. Compute each metric in one place.** Pick the authoritative source, such as the ITSM tool, the issue tracker, or the monitoring system, and say so in the register. Parallel spreadsheets that reproduce the figure should either be retired or renamed so no one mistakes them for the official number. Data lineage and tooling belong to the next topic (see topic 1.5, Data sources and instrumentation).

### Set cadence and change control

**6. Review definitions on a schedule that matches consequence.** For metrics in contracts, regulated reports, or executive packs, review twice a year and on any change to the underlying workflow. For team-level working measures, the retrospective is the review. Each review asks three questions: is the definition still accurate, is the data still sound, and did anyone use the number to decide something?

**7. Treat definition changes like changes to a service.** Record who requested the change, why, who was consulted, and the date it takes effect. A small change to a status workflow can silently move a time measure by a large amount. Lightweight change control for definitions borrows the idea from change enablement without the ceremony (see topic 4.3, Change enablement metrics, for the service-change counterpart).

**8. Tie the review into continual improvement.** Metrics reviews should produce improvement work, or an explicit decision not to act. ITIL treats continual improvement as a practice with a register of improvement opportunities, and agile teams get the same effect through retrospective actions. If a review ends with no action and no retirement, ask whether the metric is doing any work (see topic 9.5, Continual improvement metrics).

**9. Retire metrics deliberately.** Define a retirement test, for example "not cited in a decision for two review cycles," and apply it. Archive the definition and the final values, say what replaced the metric if anything, and tell the audience. A retirement log is evidence for auditors and a relief for people who maintained the data by hand.

### Control views and access

**10. Decide the audience for each view.** Most metrics have a working view for the team, a reported view for the service owner or programme, and sometimes an external view for customers, a regulator, or a supplier. Record which audience gets which view and why. Using the principle of least privilege as a guide, restrict views that contain personal data, security detail, or commercially sensitive supplier figures, and leave the rest open so transparency is the default.

**11. Keep individual-level data out of reporting.** The hard rule of this book is that metrics describe teams, services, and systems, not people. Governance backs this up by setting the reported grain, for example team and service, and by restricting any person-level extract to the data steward. If a request for a person-level breakdown arrives, record it, ask what decision it serves, and offer a team-level or system-level alternative (see topic 11.3, Rolling out metrics without breeding fear).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Ownership coverage | Naming a manager or a mailing list as owner to reach 100 percent, with no one who can explain or change the metric | Ask each owner to explain one recent movement in the number; track questions that went unanswered for more than a week |
| Definition currency | Touching the review date without reading the definition | Sample three entries each quarter and compare the written definition with the tool's actual configuration |
| Source conformance | Declaring a source authoritative while spreadsheets still circulate and disagree | Count distinct figures for the same metric found in a sample of reports; reconcile differences in the review |
| Retirement rate | Retiring trivial or unused metrics to look disciplined, or renaming a metric so it counts as new | Review the retirement log for what was removed; track the total reported count and the decision linkage figure alongside |
| Access review currency | Approving the existing audience list without reading it | Compare the list with current team membership and roles; report the number of removals found |
| Decision linkage | Writing a vague decision such as "improve service" to satisfy the field | Require a dated decision or question, and sample the decision log for whether the metric was actually consulted |

A healthy reading is a register that changes. Entries have owners who answer questions, review dates that fall in the past six months, a retirement log with reasons, and a short list of metrics that are still wanted because people can name the decision they inform. A register with every field full and nothing ever changing is a warning sign.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Central metrics office | Consistent definitions and shared tooling; easier audit | Slow, distant from the work, and tempted to standardize measures that should differ between teams |
| Federated ownership with a shared register | Owners sit close to the data; the register keeps a common minimum | Needs steady encouragement to avoid drift in quality between teams |
| Team-owned measures only | Fast and fits the work | Definitions diverge; roll-ups become unreliable; knowledge leaves with people |
| Open by default access | Builds trust and shared understanding | Risks exposure of sensitive or person-level detail |
| Restricted access | Protects sensitive data | Hides context from people who could help, and invites suspicion |

The balance is to centralize the thin layer that must agree, which is the register, shared definitions, and access rules, and to federate everything else.

## Questions to discuss with your team

**1. Who would answer if the most-cited number on our dashboard looked wrong tomorrow?**
Ask the group to name a person, not a group. If several names come up, or none, the metric has no owner in practice. The facilitator should note the metric, the candidate owner, and what the owner would need to do the job, such as read access to the data or time in the review. Close by agreeing who will confirm the owner and record the role in the register.

**2. Where do two versions of the same figure exist today?**
Look for reports that show the same metric with different values: a weekly slide against a live dashboard, or a supplier report against the internal one. For each, ask where the difference arises, such as scope, clock, or exclusions. Decide which source is authoritative and what happens to the other version. Expect the conversation to uncover different working definitions of words everyone assumed were shared.

**3. Which metric would we retire this quarter if we had to retire one?**
Start with the metric nobody has cited in a decision recently. Ask what would happen if it vanished, and who would notice. If the answer is "nobody," move it out of the reported set for a trial period. The facilitator should treat retirement as normal and healthy, and record the outcome in the retirement log.

**4. Who sees which of our metrics, and is that on purpose?**
Draw a simple grid of metrics against audiences: team, service owner, leadership, customers, suppliers, regulators. Mark where access was a decision and where it simply happened. Look for any view that could be used to compare individuals. Agree on a change to at least one audience list, and on who reviews it next.

**5. How do we change a definition without breaking the trend?**
Walk through a recent change to a status workflow or a priority scale. Ask who was told, whether the chart was annotated, and whether anyone compared the old and new values. Draft a light change entry the team would actually fill in. Agree on who approves changes to metrics that appear in contracts or external reports.

**6. What would we stop doing if governance became a burden?**
Governance can turn into a ritual. Ask which parts of the current approach people would skip if no one checked, and why. Treat the answers as design feedback rather than as resistance. The facilitator should look for steps that duplicate each other, fields nobody reads, and reviews that never produce a decision.

## Four perspectives

### Product and delivery teams

Delivery teams own working measures such as work item age and cycle time, and they should agree the definitions in their working agreements. When a metric moves up into a portfolio report, the team should know the owner, the definition, and the audience. Teams get most value from a short register entry for each reported measure, and from the right to challenge a definition that no longer fits how the work flows (see topic 2.1, Flow measures).

### Service and operations teams

Service and operations teams carry the metrics that appear in SLAs and operational reviews, so definitions, clocks, and exclusions have contractual weight. Owners here are usually service owners and practice owners. They should keep an evidence trail for definition changes, reconcile reported figures against the ITSM tool regularly, and be the first to retire a measure that has stopped informing operational decisions (see topic 5.1, SLA, OLA, and XLA metrics).

### Leadership and governance

Leaders set the conditions: who owns metrics, which views reach the executive pack, and how the numbers are used. They should ask for the register and the retirement log, read the definitions behind the headline figures, and resist requests for person-level league tables. Governance bodies need a small standing item that reviews the register and records decisions, in line with ISO/IEC 20000-1 expectations for service management systems (as of its 2018 edition) without turning the review into a compliance exercise (see topic 8.3, Compliance and audit metrics).

### Customers and users

Customers and users rarely see the register, but they feel its absence when a figure in a service review differs from their experience. Where a metric appears in a customer-facing report or an SLA, the definition should be available in plain language, including what is excluded. Customers should have a route to question a figure, and the owner should answer it (see topic 5.1, SLA, OLA, and XLA metrics).

## In practice: a service management example

A mid-sized online retailer runs a service desk, three product teams, and an operations group. All numbers below are illustrative.

The monthly service review shows an incident resolution time of 5.1 hours for the median. The product teams' own dashboard, built from the same ITSM tool, shows 6.4 hours. The two figures have been in circulation for a year. A new service owner asks who owns the metric and receives three different answers.

The owner, with the team leads and the data steward, spends two sessions on a first register of 14 reported metrics. Of those, 5 had no owner and 4 had two sources. Resolution time is one of the double-source metrics. The difference traces to a pause state: the service review excludes time in "waiting for customer," and the team dashboard does not. The group agrees one definition, names the service owner as the metric owner, and publishes both values on the same page for one quarter, labelled by definition, so no one loses the history. They annotate the chart where the definition changes.

At the first quarterly review, the group applies a retirement test and removes 3 of the 14 metrics, including a monthly ticket-count chart that no recent decision had cited. They also restrict the view that breaks resolution time down by analyst, keeping the data steward as the only holder, and they offer a team-level breakdown instead.

A gaming risk appears at the second review. Ownership coverage reaches 100 percent, but a sample shows that two of the owners are a distribution list and a department head who has never opened the data. The group replaces them with named service owners and adds the guardrail question to the review: "Can the owner explain the last movement in this number?" Coverage drops to 86 percent for a quarter, which the group records as an honest result. The decision logged is to hold the target for coverage until the guardrail has run for two cycles.

## Agile, AI, automation, and analytics

### Agile

Treat the metric register as a living document that the team updates when it learns something, not as a one-time design exercise. A practical habit is a short regular review where the metric owner, the team, and a stakeholder agree which metrics stay, change, or retire. The caution is that frequent small changes can break trends, so log each change with a reason.

### AI

Metrics about AI systems need an owner just as service metrics do, and the owner needs authority to pause the system when the numbers say it is harming users. Record in the register which metrics describe AI-assisted work and who reviews their quality pair. The caution is that vendor-supplied AI dashboards have their own definitions, so register them with the vendor's definition quoted and checked.

### Automation

Automate register hygiene: flag metrics with no owner, no review date, or no recent citation in a decision, and alert the owner. The caution is that an automated reminder that nobody answers is noise, so measure how many flags lead to action and retire the ones that do not.

### Analytics

Treat access to metric data as a governance question too: who can see team-level data, who can see raw tickets, and how long data is kept. The decision the register informs is what to keep, change, or retire. The caution is that analytics on people's behaviour can cross into surveillance, so keep metrics at team and service level and check the privacy rules that apply to you.

## Sector lens

**Startup.** A founder or lead engineer often owns every metric by default. The risk is that definitions live in one head. Keep a register of five to eight metrics in a shared document, name an owner for each, and write the definitions the day a metric first appears in an investor or customer update.

**Small business.** The person running IT is usually the owner, steward, and report reader. Keep governance to a single page, review twice a year, and take extra care when a vendor-supplied report defines a metric differently from your own. Name who in the business owns each customer-facing figure.

**Enterprise.** Scale makes the shared layer essential. Use a register with workflow, a lightweight council that meets quarterly, and a data steward role for each major domain. Preserve team autonomy for working measures and guard against standardizing metrics that should differ between kinds of services. Aligning with the data governance already present in the organization saves effort.

**Government and public sector.** Statutory reporting, audit, and procurement make written definitions and change records an obligation. Treat the register as an audit artefact, and keep a clear line from each published figure to its owner and source. Access decisions often involve legal and privacy review, so record the basis for each restricted view (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is modest and mostly time. Expect a few hours to build a first register, an hour or two per quarter for the review, and some effort from the data steward to resolve conflicting sources. Tool costs are low because a spreadsheet or a version-controlled file is enough to start.

The return is mostly avoided waste. Meetings spent reconciling figures disappear, audits find a clear trail, and onboarding a new service owner is faster because the definitions are written down. Decisions are better because they rest on numbers that mean the same thing every month. Do not quote a percentage for these benefits without your own data. If you need figures for a business case, count the hours spent last quarter reconciling conflicting numbers and the number of metrics with no recorded owner, then count them again after two review cycles.

## Anti-patterns and pitfalls

- **Ownership by committee.** A group owns the metric and nobody answers questions. Name one accountable role and a deputy.
- **The register as a graveyard.** It is built once and never touched. Put review dates on the calendar and show the date on every dashboard.
- **Standardizing everything.** One definition imposed on teams whose work differs produces numbers that mean nothing anywhere. Share only the layer that must agree.
- **Silent definition changes.** Trends break and trust follows. Log every change with its reason and annotate the chart.
- **Governance without retirement.** The set only grows and attention thins. Apply a retirement test every review.
- **Secrecy by default.** Hiding working views from the people measured breeds suspicion. Restrict only what carries real risk and explain why.
- **Open access to person-level data.** A single extract can become a league table within days. Set the reported grain at team and service, and hold any person-level data under the steward.
- **Compliance theatre.** Fields are filled to satisfy a checklist. Sample entries for truth, and ask owners to explain recent movements.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Ownership and register | Owners unclear; metrics live in individual spreadsheets | Some teams keep a list with owners | One register for all reported metrics, each with a named owner and role | Coverage and currency trended; gaps lead to resourced fixes | Register shared with suppliers and customers where figures cross boundaries |
| Definitions and change control | Definitions differ by person | Written for some contract metrics | Written definition with clocks and a change log for every reported metric | Changes reviewed for impact on trends before release | Definitions revised jointly across teams and suppliers when they stop informing decisions |
| Review and retirement | Metrics added, never removed | Occasional clean-up | Review cadence and retirement test written down | Review outcomes tracked as improvement work | Retirement and renewal routine, driven by evidence from users and teams |
| Access and audience | Access by accident | Restricted views for sensitive data | Audience listed per metric, with a reason | Access reviewed on a cadence; person-level data held by the steward | Audience designed with the people measured and with customers |

## Checklist

- [ ] A metric register exists and lists every reported metric.
- [ ] Every reported metric has a named owner and a recorded role.
- [ ] Every reported metric has a written definition with start, stop, and exclusion rules.
- [ ] Each metric has one authoritative source named in the register.
- [ ] A review date and an interval are recorded for each metric.
- [ ] Definition changes are logged with a reason and marked on the chart.
- [ ] A retirement test is written down and applied at each review.
- [ ] The audience for each view is recorded, with a reason for any restriction.
- [ ] No reported view ranks individuals, and person-level data sits with the data steward.
- [ ] The register has been sampled for truth in the last quarter.

## AI prompts

**Draft a metrics charter for a metric set.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Find conflicts between two versions of a metric.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Review a metric register for gaps.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Plan a retirement review.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic and the paired guardrail for a metric before adding it to the register.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a metric entry carries an owner, a gaming vector, and a guardrail.

## Key takeaways

- Governance keeps numbers meaning the same thing over time, and a one-page register is the core of it.
- Name one accountable owner for each reported metric, and record the role as well as the person.
- Write one definition with its clocks, compute it in one place, and log every change.
- Match the weight of governance to the consequence of the metric.
- Decide who sees which view on purpose, keep person-level data out of reporting, and retire metrics on evidence.

## References and further reading

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
