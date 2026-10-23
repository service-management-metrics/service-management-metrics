# Analytics and data quality metrics

**Every number in this book is only as trustworthy as the data and analysis behind it, so measure the quality of the data, the soundness of the analysis, and the use of the result in a decision, and always say what a number cannot show.**

## Overview and motivation

[Analytics](https://en.wikipedia.org/wiki/Analytics) is the use of data and statistics to answer questions and inform decisions. In service management it ranges from a simple weekly count of tickets to models that predict which changes will fail. Analytics is the fourth lens of this book, alongside agile practice, AI, and automation, and it is also the thing the other three lenses depend on. A dashboard built on poor [data quality](https://en.wikipedia.org/wiki/Data_quality) gives confident answers to the wrong questions.

Data quality is a set of properties: whether data is complete, accurate, consistent, timely, unique, and valid. Earlier topics covered where service data comes from and how to read it (see topic 1.5, Data sources and instrumentation, and topic 1.6, Statistical literacy for service metrics). This topic turns those ideas into measures that a team can track about its own data and analysis, in the way that Part 4 measures change. It also covers analytics as a practice: the questions asked, the methods used, who checks them, and whether the result changed a decision.

Analytics is attractive because it scales. One analyst can serve many teams, and one model can score every ticket. The same scale amplifies mistakes. A misread definition in a shared dataset spreads to every report built on it, and a model trained on past behaviour can repeat old bias at speed. AI tools that write queries, charts, and summaries make analysis cheaper and also make errors easier to produce with confidence, so checking matters more.

Terms used here. A **dataset** is a defined collection of records, such as tickets or deployments. **Lineage** is the record of where data came from and what was done to it. **Reconciliation** compares two sources that should agree. A **data contract** is an agreement between the producer and users of a dataset about its structure, meaning, and quality. An **analysis** is a question, a method, and a result. **Uncertainty** is the range within which a value may lie, given the data and method. A **decision log** records the decisions a number informed.

## Key principles

- **Start from the question and the decision.** An analysis with no decision attached is overhead.
- **Measure the data about the data.** Completeness, timeliness, and reconciliation are measures a team can own.
- **Keep lineage.** A number you cannot trace to its source cannot be corrected.
- **State uncertainty and limits.** Show the count behind a rate and say what the number cannot show.
- **Check analysis like code.** Review definitions and queries, and keep them in version control.
- **Protect people.** Analytics on people's behaviour needs privacy limits, and results describe teams and services.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Required field completeness | Share of records with all fields required for the metrics that use them | records with every required field present and valid / records in scope | percent | Source system extracts and data quality checks | Measurement and reporting; knowledge management | Definition of done for records | Monthly |
| Data freshness | Age of the most recent data in a dataset at the time a report is read | median and maximum of (report read time minus time of latest record loaded) across datasets | hours | Pipeline logs and dataset metadata | Measurement and reporting | Fast feedback | Weekly |
| Reconciliation variance | Difference between two sources that should agree on the same quantity | absolute difference between source A and source B / source A, for a stated sample of quantities and period | percent | Two source systems | Measurement and reporting; financial management | Working agreements on definitions | Quarterly |
| Lineage coverage | Share of reported metrics whose source, transformations, and owner are documented | metrics in the register with documented lineage / metrics reported | percent | Metric register and data catalogue | Governance | Team agreements | Quarterly |
| Pipeline run failure rate | Share of data pipeline runs that fail or load incomplete data | data pipeline runs that failed or loaded incomplete data / runs started | percent | Data pipeline logs | Measurement and reporting | Continuous integration for data | Weekly |
| Analysis review rate | Share of published analysis pieces that were reviewed by a second person before use | analysis pieces with a recorded review / analysis pieces published to a decision-making audience | percent | Analysis register and review log | Measurement and reporting; continual improvement | Peer review | Quarterly |
| Decision use rate | Share of reported metrics cited in a recorded decision in the period | metrics cited in a decision log entry / metrics reported | percent | Decision log and metric register | Continual improvement | Retrospective actions | Quarterly |

Completeness counts a field as present only if it contains a valid value, so a placeholder such as "n/a" does not count. Reconciliation variance applies to a named sample of quantities, such as ticket counts for a month, and states the sample.

## Recommendations

### Make data quality visible

**1. Define data quality in terms of the metrics.** List the fields and timestamps your most important metrics depend on, and define what valid looks like for each. Check these first, since a missing timestamp breaks a time measure.

**2. Check at the source, and not just in the report.** A quality check run when data is created, such as a required field in the ticket form, prevents errors that no later cleaning can fully repair. Add checks when data is loaded as well.

**3. Publish quality next to the numbers.** Show completeness and freshness on the dashboard that shows the metric. A reader should see the quality of the data without asking.

**4. Reconcile on a schedule.** Compare at least one quantity across two systems each quarter, such as the number of changes in the change record and in the pipeline. Investigate and explain differences, and record the finding.

### Keep analysis honest

**5. Write the question and the decision first.** Before analysis, record the question, the decision it informs, and who will decide. When the decision has passed, record what was decided.

**6. Keep lineage and definitions in one register.** Link each metric to its source, transformation, owner, and review date (see topic 1.4, Metrics governance and ownership). Changes to definitions are logged with reasons and marked on charts.

**7. Review each piece of analysis.** A second person checks definitions, queries, and conclusions for any analysis used in a decision. Keep queries in version control so they can be rerun.

**8. State uncertainty and limits.** Show the number of items behind each rate, intervals where they matter, and what the analysis cannot show. Avoid single-number precision where the data does not support it.

### Govern use

**9. Use data contracts for shared datasets.** The team that produces a dataset states its meaning, fields, freshness, and known issues, and tells users when it changes. Breaking changes need notice.

**10. Protect people in the data.** Decide who can see raw records, how long data is kept, and what the minimum group size is for reports. Keep analytics at team and service level, and check the privacy rules that apply to you.

**11. Retire reports and datasets.** A report that nobody uses still costs maintenance and can mislead. Review use and retire what is not cited in decisions.

**12. Treat AI-assisted analysis as unreviewed until checked.** AI tools can write a query or a summary that looks correct and is wrong. Review the query, rerun on a small known sample, and record that it was checked.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Required field completeness | Filling fields with placeholders or defaults; making fields optional | Validity checks on content; sample records for real values |
| Data freshness | Timestamping loads rather than events; loading empty updates | Check event time against load time; row counts per load |
| Reconciliation variance | Choosing quantities that happen to agree; adjusting one source to match | Rotate quantities; keep an audit trail of adjustments |
| Lineage coverage | Documenting lineage superficially; copying text between entries | Sample entries and trace one metric end to end |
| Pipeline run failure rate | Marking failed runs as retried or successful; deleting logs | Compare record counts with source; alert on gaps |
| Analysis review rate | Rubber-stamp reviews; reviewing after the decision | Check reviewer notes; require review before use |
| Decision use rate | Citing metrics in a log without an effect on the decision | Ask what changed; sample entries |

A healthy reading is data quality figures that are visible and stable, differences between sources that get explained, analysis that is reviewed before use, and metrics that come and go as decisions need them.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Strict data validation at entry | Prevents errors early | Friction for users; placeholder entries |
| Cleaning data after the fact | Flexible; does not slow users | Hides the cause; errors remain in some reports |
| Central analytics team | Consistent methods and quality | Bottleneck; distance from the work |
| Self-service analytics by teams | Fast; close to the work | Inconsistent definitions; uneven quality |
| AI-assisted analysis | Fast drafts; lowers the barrier | Confident errors; weak reproducibility |

The prose conclusion is to prevent errors at the source, share definitions and lineage in one place, and require review for any analysis that informs a decision. Speed from self-service and AI is welcome when checking keeps up.

## Questions to discuss with your team

**1. Which three numbers on our dashboard would we most regret if the data underneath were wrong?**
Start with the numbers that drive decisions or targets. Ask what the data depends on, and who owns the source. People often discover that a key number depends on a field entered by hand. Follow up by choosing one to check this month.

**2. When did two reports disagree, and how did we resolve it?**
Stories of conflicting numbers show where definitions differ. Ask whether the resolution was recorded and whether the cause was fixed. The facilitator should note repeated causes, such as different time zones or status definitions. Follow up by agreeing on one definition and an owner.

**3. How old is the data in the report we look at most?**
Many people do not know. Ask how freshness is shown and whether a stale load would be noticed. Discuss the cost of an outdated decision. Follow up by adding freshness to the report.

**4. Who reviewed the last analysis that changed a decision?**
Look for a second pair of eyes on definitions and queries. If none, discuss why. Ask what review would be proportionate. Follow up by choosing a simple review step for any analysis that informs a significant decision.

**5. What can our most-used metric not tell us?**
Naming limits is the habit of analytics done well. Ask for specific blind spots, such as users who do not contact support. Record the limits next to the metric. Follow up by adding a measure that covers a blind spot.

**6. How are we using AI tools to write queries and summaries, and how do we check them?**
Ask for actual practice, not policy. Listen for unreviewed output used in reports. Discuss a simple check, such as rerunning on a known sample. Follow up by agreeing on a rule for AI-assisted analysis.

## Four perspectives

### Product and delivery teams

Your tools produce much of the data others analyse. Keep timestamps, identifiers, and statuses reliable, and tell data users when a field changes. Include data quality in the definition of done for new features that produce data.

### Service and operations teams

Ticket data depends on how people fill forms under pressure. Make the right entry the easy one, check data quality in the tool, and speak up when a metric misreads the work. Do not backdate or batch-update records to improve a number.

### Leadership and governance

Ask for data quality and lineage next to any number that supports a decision or target. Fund data engineering and review time, and not just dashboards. Protect privacy, and avoid using analytics on individuals to evaluate people.

### Customers and users

Data about you drives how the service treats you, so ask what is collected and how it is used. Where your feedback is in the data, such as survey responses, ask how it is protected and how it reached a decision.

## In practice: a service management example

A regional utility's IT department builds a dashboard of incident resolution time and change failure rate for its executive team. Numbers in this example are illustrative. The dashboard shows a resolution time median of 3.1 hours and a change failure rate of 4 percent.

An analyst checks quality before launch. Required field completeness for the resolved timestamp is 91 percent, with the missing records mostly major incidents entered after the fact. Freshness is 26 hours, because the extract runs overnight. Reconciling the change record with the pipeline shows 8 percent more production changes in the pipeline than in the change record, so the failure rate has a denominator problem.

The team makes changes. The ticket form requires the resolved time and checks it is later than the opened time. The dashboard shows the number of incidents behind each figure, the data's age, and the completeness of the fields used. A data contract states that the change record is the system of record for approved changes and the pipeline for deployments, with a monthly reconciliation. The first reconciliation explains the gap as emergency changes recorded only in the pipeline.

A gaming risk shows up when a manager suggests excluding incidents with missing resolved times to improve completeness. The team refuses and fixes the entry. The result is a wider median interval and a change failure rate of 6 percent. The decision log records that the executive team chose to wait a quarter before setting a target. What remains hard: backdated entries are not all detectable, and the reconciliation depends on a manual identifier link.

## Agile, AI, automation, and analytics

### Agile

Short feedback loops help data quality: fix the form, check the next day's data, and ask the users. A good practice is to review data quality figures at the regular improvement conversation with the people who enter the data. The caution is that continuous changes to fields and statuses break trends, so log every definition change.

### AI

AI can write queries, draft charts, summarize comments, and flag anomalies, and it can also invent plausible results. Treat AI-assisted analysis as unreviewed until a person checks the query and reruns it on a small known sample, and record that it was checked. The caution is that AI summaries of survey comments can misread language and tone, so read a sample of the originals.

### Automation

Automate data quality checks at load and at report time, and measure the pipelines on failures and gaps. Alert on missing loads and sudden changes in volume. The caution is that automated cleaning rules can hide a source problem, so report what was changed and why.

### Analytics

This topic is about analytics, so the practice is a short note on every metric: its question, decision, lineage, quality, and limits. The decision informed is whether to trust a number enough to act. The caution is that clean-looking dashboards can sit on weak data, so show the quality figures next to the result and keep the Service Management Metrics definitions in one register.

## Sector lens

**Startup.** Data is small and changing. Keep one source of truth for each metric, write definitions in a short document, and avoid building a data platform before the questions are clear.

**Small business.** Data may live in a hosted tool with fixed reports. Check how the tool defines each measure, export samples to verify, and keep a short list of what the reports cannot show.

**Enterprise.** Many sources and teams create conflicting definitions. Use a shared metric register, data contracts, and a regular reconciliation, and give teams the means to check their own data.

**Government and public sector.** Records may be subject to retention, access, and public reporting rules. Document lineage for any figure that is published, and keep privacy rules for data about people (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is staff time for data quality checks, reconciliation, documentation, and review, plus tools for data pipelines and catalogues where used. Much of it can start with small steps, such as validation in the ticket form.

The return is decisions made on better numbers, less time spent arguing about which report is right, and less rework when a misread number is found late. Describe it as a pattern, not as a figure: fewer reversed decisions and fewer disputes. If you need numbers for a case, measure your own baselines, such as reconciliation variance and the time spent resolving report disputes, before and after the change (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Cleaning in the report only.** The source keeps producing errors. Fix entry and load checks.
- **Dashboards without quality figures.** Readers cannot judge the number. Show completeness, freshness, and counts.
- **Undocumented definitions.** Numbers change meaning silently. Keep lineage and a change log.
- **Unreviewed analysis.** Errors reach decisions. Require a second look.
- **Trusting AI summaries.** They can be fluent and wrong. Check queries and sample originals.
- **Analytics on individuals.** It turns into surveillance and corrupts data. Report at team level with a minimum group size.
- **Never retiring reports.** They accumulate and mislead. Review use and remove.
- **Single numbers with no uncertainty.** They invite overreaction. Show counts and ranges.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Data quality | Unknown quality; spreadsheets by hand | Completeness checked for key fields | Quality checks at entry and load, shown on reports | Reconciliation and quality trends reviewed on a cadence | Quality managed with data contracts across teams |
| Lineage and definitions | Definitions in people's heads | Some definitions written | Register with source, owner, and change log | Lineage traced end to end for key metrics | Definitions shared across teams and suppliers |
| Analysis practice | One-off reports; no review | Some peer review | Questions, decisions, and review recorded | Analysis reused, reviewed, and retired | Analytics embedded in decisions with feedback on results |

## Checklist

- [ ] Each key metric lists the fields and timestamps it depends on.
- [ ] Required fields are validated at entry, not cleaned only later.
- [ ] Reports show completeness, freshness, and the count behind each rate.
- [ ] At least one quantity is reconciled across two sources each quarter.
- [ ] A register records source, transformation, owner, and review date for each metric.
- [ ] Definition changes are logged and marked on charts.
- [ ] Analysis that informs a decision is reviewed by a second person.
- [ ] Rules exist for AI-assisted analysis, including a check on a known sample.
- [ ] Access, retention, and minimum group size are defined for people-related data.
- [ ] Each metric has a gaming vector and a guardrail shown beside it.

## AI prompts

**Draft data quality checks for a metric.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Review an analysis before it is used.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Plan a reconciliation between two systems.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Review the gaming risk of data quality measures.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI skills

- [Data quality](../../../../skills/data-quality/SKILL.md): use to define and check the quality of a dataset.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): use to design and review the pipeline that loads service data.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): use to check that a method and its uncertainty fit the question.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- A number is only as trustworthy as its data, so measure completeness, freshness, and reconciliation and show them beside the result.
- Keep lineage and definitions in one register, and log every change.
- Review analysis before it informs decisions, including AI-assisted ones.
- State uncertainty and limits, and show the count behind each rate.
- Keep analytics at team and service level, with privacy limits on data about people.

## References and further reading

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
