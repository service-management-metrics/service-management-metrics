# Regulated and government reporting

**Mandatory reporting is a fixed requirement to design around, so build it from the same records you use to run the service, keep the reporting view separate from the learning view, and protect the people who do the work from targets that distort it.**

## Overview and motivation

Many organizations must report on their services whether or not they would choose to. Regulators ask for incident notifications, availability figures, and evidence of controls. Governments require agencies to publish performance data, spending, and accessibility statements. Funders and oversight bodies ask for outcomes against commitments. Contracts require service reports. In these settings, reporting is not an internal management choice. It is an obligation with a due date, a definition, and sometimes a penalty.

The [public sector](https://en.wikipedia.org/wiki/Public_sector) has particular features. [Accountability](https://en.wikipedia.org/wiki/Accountability) to citizens and elected bodies is a core duty, and it is exercised through audit, legislation, [freedom of information laws](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country), and published results. [Open government](https://en.wikipedia.org/wiki/Open_government) and [open data](https://en.wikipedia.org/wiki/Open_data) practices make information available for scrutiny and reuse. [Public procurement](https://en.wikipedia.org/wiki/Public_procurement) rules shape what can be bought and how, and [records management](https://en.wikipedia.org/wiki/Records_management) obligations govern how long information is kept. [Value for money](https://en.wikipedia.org/wiki/Value_for_money) is a common test of public spending, and independent bodies conduct [performance audits](https://en.wikipedia.org/wiki/Performance_audit) to examine it. The details differ by country, level of government, and sector, and this topic describes measurement practice, not legal requirements. Work with your legal, compliance, and records colleagues.

Regulated private-sector organizations, such as those in finance, health, energy, and telecommunications, share many of these features. They face incident notification duties, resilience reporting, and supervisory reviews. The common thread is that someone outside the delivery team defines what must be reported and by when.

Continuous delivery and ITIL practice both have something to offer. The agile aim of continuous collaboration with stakeholders extends to oversight bodies, who are stakeholders with legitimate needs, and early conversations about what they require can prevent rework. The agile habit of delivering small, working increments continuously suits reporting: reports that are produced automatically from systems of record are more accurate and cheaper than those assembled by hand each quarter. ITIL's measurement and reporting practice, and its service level management, give the vocabulary for defining what is measured and shared.

Reporting obligations create three well-known hazards.

- **Distortion by targets.** When a reported figure carries a consequence, the work bends toward the figure. The public-sector literature on targets, including John Seddon's writing on systems thinking in the public sector and Jerry Muller's analysis of metric fixation, describes many cases in which hitting the target and serving the public diverged. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies with full force (see topic 1.2, Goodhart's law and the psychology of metrics).
- **Two sets of numbers.** The statutory definition of a figure often differs from the one the team uses internally. If the team manages by one and reports another, nobody trusts either. Keep both visible, reconcile them, and explain the differences.
- **Reporting as a burden.** Manual, repeated, inconsistent requests consume skilled people. The more reporting depends on heroic spreadsheet work, the more error and delay creep in.

This topic builds on the compliance, risk, and supplier measures of this part (see topic 8.2, Risk and control metrics, topic 8.3, Compliance and audit metrics, and topic 8.4, Supplier and contract metrics) and on the data foundations from the first part (see topic 1.5, Data sources and instrumentation).

## Key principles

- **Treat obligations as design inputs.** List them early, with definitions, due dates, and owners, and design data collection around them.
- **Produce reports from systems of record.** Automate extraction and keep the lineage visible.
- **Separate the reporting view from the learning view.** Teams need candid working measures that are not constrained by what is reported.
- **Reconcile definitions.** Show how statutory figures relate to the team's own measures.
- **Report honestly, including bad news.** Corrections and context build trust.
- **Protect people from perverse targets.** Use statutory targets with companion measures and explain their limits.
- **Make published data usable.** Accessibility, clarity, and format matter to the public.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Reporting obligation coverage | Share of reporting obligations with a named owner, a stated definition, a data source, and a calendar entry | obligations with all four / reporting obligations in scope | percent | Obligations register | Measurement and reporting; governance | Working agreement with stakeholders on information needs | Quarterly |
| Report timeliness | Share of required reports submitted by their due date | reports submitted on or before due date / reports due in the period | percent | Reporting calendar and submission records | Measurement and reporting | Commitments to stakeholders met | Monthly |
| Restatement rate | Share of submitted reports or figures later corrected | reports or figures corrected after submission / reports or figures submitted | percent | Submission log and correction log | Measurement and reporting; continual improvement | Escaped defects | Quarterly |
| Traceability coverage | Share of reported figures that can be traced to a system of record through documented steps | figures with documented lineage to a system of record / figures reported | percent | Lineage documentation, report specifications | Measurement and reporting; knowledge management | Reproducible builds | Quarterly |
| Definition alignment | Share of reported measures for which the statutory definition and the internal definition are documented and reconciled | measures with documented reconciliation / reported measures with a statutory definition | percent | Metric register | Measurement and reporting; service level management | Shared definition of done | Quarterly |
| Reporting effort | Person-hours spent producing a recurring report | logged hours per report cycle, with the share that is manual extraction and assembly | hours | Time estimates, effort logs | Measurement and reporting; continual improvement | Cost of non-delivery work | Per report cycle |
| Published accessibility conformance | Share of published reports and datasets that meet the required accessibility standard | published items passing an accessibility check / published items | percent | Accessibility test results | Measurement and reporting; knowledge management | Inclusive definition of done | Quarterly |

Write the statutory definition, source, and due date beside every reported measure. A report is "timely" when it is accepted by the receiving body, not when it is sent, if acceptance is recorded. A restatement counts any correction to a figure already submitted, whether voluntary or required. Reporting effort is a trend measure for the organization and never a measure of individuals. Accessibility conformance is checked against the standard that applies to you, such as the Web Content Accessibility Guidelines.

## Recommendations

### Treat obligations as design inputs

**1. Keep a register of reporting obligations.** For each, record the requirement, the legal or contractual source, what is to be reported, the definition, the due date, the receiving body, the internal owner, and the data source. Review it when laws, contracts, or regulators change. Obligations known early can be designed in, and those discovered late have to be assembled by hand.

**2. Involve the oversight body early.** Ask regulators, auditors, and funders what they will do with the data and what they need. Some will help you shape a definition or accept data in a form you already produce. Agile practice values collaboration with stakeholders, and oversight bodies are stakeholders. Keep records of these conversations, and preserve independence where it matters.

**3. Design data collection for reporting from the start.** When building a service, include the events and fields that required reports will need: incident timestamps, impact, categories, user counts. Adding them later is costly. Define them once, and share the definition across teams, with a single owner for the definition (see topic 1.4, Metrics governance and ownership).

### Produce reports from systems of record

**4. Automate the pipeline from record to report.** Extract from the incident, change, and service systems with scripted queries, apply documented transformations, and produce the report with a reviewed template. Automated reports are repeatable, faster, and easier to audit than manual ones. Version the queries and the templates so that a past report can be reproduced.

**5. Document lineage.** For each reported figure, note where it comes from, how it is calculated, and who checks it. Traceability coverage measures how well this is done. An auditor or a journalist asking "where does this number come from?" should get a clear answer in minutes.

**6. Review before submission, with an independent reader.** Have someone outside the team that produced the report check the definitions, the arithmetic, and the narrative. Reviews catch errors and unsupported claims. Record the review. A short sign-off from the person accountable makes ownership clear.

**7. Correct openly.** When an error is found after submission, correct it promptly, explain what changed, and note the cause. A restatement rate near zero is suspicious if the data is complex. A visible, quick correction builds more trust than a figure left standing.

### Keep reporting and learning separate

**8. Maintain a working view for the team.** Teams need measures that help them improve, such as percentiles, the age of the oldest items, and quality companions. These are rarely the same as statutory figures. Do not restrict the working view to what is reported, and do not manage solely by the reported figure.

**9. Reconcile statutory and internal definitions.** Where a required measure differs from the team's, document the differences and show both. For example, a regulator's availability figure may exclude planned maintenance, while users experience it as downtime. Show the reconciliation in the metric register and in the report notes. This guards against the "two sets of numbers" problem.

**10. Pair statutory targets with companions.** If a target is imposed, add measures that would reveal distortion: quality, user experience, and the work left out. For example, pair a target for time to first response with a measure of resolution and of repeat contacts (see topic 3.1, Service desk metrics). Explain in the report how the figure should be read.

### Publish for the public

**11. Make published information usable.** Publish in open, machine-readable formats where the law and privacy permit, with clear descriptions, definitions, and dates. Meet accessibility standards for documents and web pages. Publishing data in a way that people cannot read or reuse satisfies the letter and defeats the purpose. Test with real users, including those who use assistive technology (see topic 6.4, User and employee experience).

**12. Protect privacy and security in what you publish.** Aggregate and suppress small numbers that could identify people, avoid publishing details that help attackers, and check disclosure rules with specialists. Apply the same care to responses under freedom of information laws. Record decisions about redaction and the reasons for them.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Reporting obligation coverage | Treating obligations narrowly; listing the owner without agreement | Review of the register by compliance or internal audit; confirmation from owners |
| Report timeliness | Submitting incomplete reports to meet the date; counting drafts as submissions | Completeness check on submission; count only accepted reports; restatement rate |
| Restatement rate | Suppressing corrections; making corrections quietly | Correction log reviewed by an independent reader; a low rate is read with traceability |
| Traceability coverage | Documenting lineage superficially; including only simple figures | Sample lineage by reperforming a calculation from the source |
| Definition alignment | Declaring definitions aligned without reconciliation; adopting the statutory definition only in the report | Reconciliation document reviewed; show both figures side by side |
| Reporting effort | Not logging hours; moving work to other teams | Compare with team feedback; include all contributors in the estimate |
| Published accessibility conformance | Running a checker that finds only some issues; publishing a separate accessible version that lags | Manual testing with assistive technology; check for parity between versions |

A healthy reading is every obligation owned, reports on time and accurate with visible corrections, figures traceable to systems of record, statutory and internal definitions reconciled, falling reporting effort, and published information that the public can use.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Manual assembly of reports | Flexible; works with any data | Slow, error-prone, dependent on individuals |
| Automated reporting | Repeatable, auditable, cheap to run | Setup effort; may entrench a poor definition |
| One set of measures for everything | Simple | Distorts work; statutory figures rarely fit team needs |
| Separate reporting and learning views | Candid learning; honest reporting | Needs reconciliation and discipline |
| Hard statutory targets | Clear accountability | Perverse effects; gaming |
| Targets with companions and context | Reveals distortion | More to explain |
| Early engagement with regulators | Fewer surprises | Time; boundaries to maintain |
| Arm's-length relationship only | Clear independence | Late feedback; rework |

The prose answer is to automate reports from systems of record, keep a team working view separate from the reporting view, reconcile definitions openly, and engage oversight bodies early while preserving their independence.

## Questions to discuss with your team

**1. Which reports do we owe, to whom, and by when, and who owns each?**
Compile the list in the room and compare it with the register. Gaps often appear: reports owed under contracts, to funders, or under rules few people know. The facilitator should record new items and assign owners.

**2. Which reported figure would we manage differently if it were not reported?**
Pick a statutory or contractual measure and ask what the team would do if no one measured it. The answer reveals where the figure and the purpose diverge. Discuss what companion measure would show the difference.

**3. Can we reproduce last quarter's report from source today?**
Try with one report. Note what is manual, undocumented, or lost. Agree the first step to automate or document, and who will do it.

**4. How do we handle an error found after submission?**
Review the process and the last example. Was the correction quick and open? Did anyone feel afraid to raise it? Agree what makes correction normal.

**5. What would a person using assistive technology experience reading our published report?**
Test one published item together, or review a recent accessibility check. Ask who owns accessibility for published documents. Agree one fix and a process to prevent recurrence.

**6. What does the regulator or oversight body actually do with our data?**
Many teams do not know. Plan a conversation to find out and to ask whether a different form would serve them as well. The facilitator should note independence boundaries.

## Four perspectives

### Product and delivery teams

Delivery teams build the events and fields that reports depend on, and they feel the pressure of statutory targets. They should include reporting needs in the definition of done, keep a candid working view, and flag when a target distorts the work. Early conversations with the people who report help prevent rework.

### Service and operations teams

Operations teams generate most of the underlying data and often prepare the reports. They should document lineage, automate extraction, and keep a correction log. They are well placed to explain how a figure should be read, and to warn when it misleads.

### Leadership and governance

Leaders are accountable for the accuracy and honesty of what is reported. They should ask for traceability and reconciliation, resist turning statutory figures into individual targets, protect people who raise errors, and support engagement with oversight bodies. Governance should review the obligations register and the restatement history.

### Customers and users

The public and customers rely on published information to hold services to account. They need data they can find, read, and reuse, in accessible formats, with clear explanations of what it means. They also deserve prompt notice when an incident affects them, as rules may require.

## In practice: a service management example

A national agency provides online licensing services used by several million people a year. It must report monthly to a ministry, publish annual performance data, and notify its regulator of major service incidents within a fixed time. The numbers below are illustrative.

An internal review finds that the agency owes 31 reports of different kinds, and that only 22 are on the obligations register with a named owner and a definition, a coverage of 71 percent. Monthly figures are assembled by hand over about 60 hours, mostly pulling from three systems into a spreadsheet. Traceability is poor: for the headline figure, availability, nobody can reproduce last year's number. The ministry's definition of availability excludes planned maintenance, and the agency's own working view counts it, which explains why users and the ministry see different pictures. The agency met its target for time to first response each month, and the service desk has begun auto-acknowledging requests to hit it, while time to resolution has risen. Two published reports failed an accessibility test when checked with a screen reader.

The agency's head of service performance agrees changes with the ministry and the delivery and operations teams. The obligations register becomes complete, with owners, definitions, and dates. Monthly figures come from scripted queries of the incident and monitoring systems, with a documented transformation and a reviewed template, which cuts effort to about 8 hours. A reconciliation note sets out the statutory and internal availability definitions with both figures shown in the report. The first-response target is paired with time to resolution and repeat contacts in the working view, and the ministry agrees to see the companion measures. The agency also corrects an availability figure from the previous quarter, explains the cause, and publishes the correction. Published reports are produced in an accessible template, and a screen-reader test is added to the release checklist.

A year later, obligation coverage is 100 percent, reports are on time, the restatement rate is low with every correction explained, traceability covers all headline figures, and reporting effort has fallen by roughly 85 percent. The minister's office asks for a new target of 99.95 percent availability, with the agency's leaders accountable. The head of service performance explains the difference between the statutory and the user-experienced figure and proposes a target with companion measures and a review date. The decision is recorded, and the ministry agrees to a joint review of the definition before the next reporting year.

## Agile, AI, automation, and analytics

### Agile

Design for fixed reporting requirements and keep the reporting view separate from the learning view. The caution is that a reporting target can distort the work it describes.

### AI

Where AI supports regulated processes, the report may need to show how decisions were made and who was accountable. Check requirements with your legal adviser and keep records of AI use. The caution is that AI output used in a filing needs human verification.

### Automation

Build reports from the same records used to run the service, and automate checks that run before submission. Measure the process on restatements. The caution is that automation can propagate an error into many reports.

### Analytics

Report with the definitions used and the date of data. The decision informed is what must be reported and where the data comes from. The caution is that definitions differ by regime, so avoid assuming one is universal.

## Sector lens

**Startup.** Reporting duties may arrive with a first enterprise customer or a regulator. Start with a short list of obligations, produce reports from your own systems, and avoid building a separate reporting process. Be careful when promising service levels in contracts.

**Small business.** Obligations are often contractual or tied to a single regulator. Keep a calendar, use templates, and document how numbers are made. A small, accurate report beats a large, hurried one.

**Enterprise.** Many obligations across regions and regimes call for a central register, common definitions, and shared extraction tooling. Beware of duplicated requests to the same teams. Use a single source of truth for incident and service data, with views for each regime.

**Government and public sector.** This is the home ground of the topic. Plan for legislation, ministerial requests, audit, freedom of information requests, and public scrutiny. Publish data openly where the law permits, meet accessibility duties, keep records for the required period, and document decisions. Resist turning statutory figures into individual performance targets, and consider the effects of targets on citizens and staff.

## Business case: motivations, ROI, and TCO

The costs are the effort to build and maintain the obligations register, the engineering of automated extraction and templates, review time, and accessibility testing. Compared with manual assembly, automation shifts effort from repeated work to a one-time build and light maintenance.

The returns are fewer errors and corrections, less staff time spent on assembly, faster responses to oversight requests, and greater trust with regulators and the public. Build the case from your own data: hours per report before and after, the number and effect of restatements, time to answer an oversight question, and the cost of any penalty or critical audit finding avoided. Avoid quoting estimates of the compliance burden unless you can trace the source and method. Include the cost of continuing engagement with oversight bodies, and compare it with the cost of surprises (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Managing by the statutory figure alone.** It distorts the work. Keep a working view with companion measures.
- **Two unreconciled sets of numbers.** Trust collapses. Document and show the differences.
- **Hand-built spreadsheets as the system.** They break and depend on individuals. Automate from systems of record.
- **Submitting incomplete reports to meet a date.** It trades one failure for another. Agree extensions or submit with clear caveats.
- **Quiet corrections.** They undermine trust. Correct openly and explain.
- **Individual targets from statutory figures.** They reward gaming and punish honest staff. Keep figures at service level.
- **Unreadable publications.** Compliance in form defeats the purpose. Publish usable, accessible data.
- **Ignoring privacy in publication.** Small numbers can identify people. Aggregate and review disclosure.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Obligations and definitions | Known by a few people | Partial list | Register with owners, definitions, and dates; statutory and internal definitions reconciled | Register reviewed against changes in law; reconciliation maintained | Definitions co-developed with oversight bodies; shared across agencies |
| Production and quality | Manual assembly | Templates, some scripts | Automated from systems of record with lineage and independent review | Restatements analysed; effort and timeliness managed | Reports produced continuously; oversight bodies access data directly |
| Use and publication | Report to satisfy the request | Published on request | Working view separate from reporting view; accessible, reusable publication | Companion measures with targets; user testing of publications | Open, linked data with public participation in design |

## Checklist

- [ ] A register lists every reporting obligation with owner, definition, source, due date, and receiving body.
- [ ] Required fields and events are built into services from the start.
- [ ] Reports are produced from systems of record by versioned queries and templates.
- [ ] Each reported figure has documented lineage and a named checker.
- [ ] An independent reader reviews reports before submission.
- [ ] Statutory and internal definitions are reconciled and both are shown.
- [ ] Corrections are logged, explained, and published promptly.
- [ ] Statutory targets have companion measures and context in the report.
- [ ] Published reports and datasets meet the applicable accessibility standard and privacy review.
- [ ] A conversation with each major oversight body about its needs is on the calendar.

## AI prompts

**Build an obligations register.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Reconcile two definitions.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Plan report automation.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Review a published report for usability.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a statutory or regulated reporting metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a reporting metric entry shows its definition, reconciliation, gaming vector, and guardrail.

## Key takeaways

- Treat reporting obligations as design inputs, listed with owners, definitions, and due dates.
- Produce reports from systems of record with lineage and independent review.
- Keep a candid working view separate from the reporting view, and reconcile definitions openly.
- Pair statutory targets with companion measures, and never turn them into individual targets.
- Correct errors openly and quickly.
- Publish information that the public can find, read, and reuse, with privacy protected.

## References and further reading

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
