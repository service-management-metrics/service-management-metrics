# Incident volume and priority

**Count incidents against the use that produced them, read priority as a mix rather than a score, and watch repeats, because the shape of incident demand tells you where to invest long before any single resolution time does.**

## Overview and motivation

An incident, in [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 terms, is an unplanned interruption to a service or a reduction in its quality. [Incident management](https://en.wikipedia.org/wiki/Incident_management) is the practice that restores normal service operation as quickly as is practical and limits the harm to the business. Every incident is also a signal: something in the service, its changes, its users, or its monitoring did not work as expected. The count and character of incidents is therefore one of the most informative demand measures an operations team has.

Volume on its own is a poor guide. A rise in incidents can mean the service got worse, or that more people are using it, or that monitoring improved and now sees faults that used to go unreported. A fall can mean reliability work paid off, or that users stopped bothering to report. This topic is about reading volume with enough context to tell those stories apart: normalising against usage, splitting by category and service, and watching the mix of priorities and the rate of repeats.

Priority is the second half of the topic. ITIL practice commonly derives priority from two inputs: impact (how much of the business is affected) and urgency (how quickly the business needs the fix). The pair is mapped to a priority level that sets the expected response. Agile teams have a close counterpart in how they triage a backlog: severity and urgency labels on defects, and a "class of service" on a flow board that decides what jumps the queue. The words differ; the question is the same: what must be handled first, and why.

The ITIL view treats incidents as records owned by a service desk and resolver groups, with categories, priorities, and service level targets. The agile view treats unplanned work as an interruption to flow that competes with planned work (see topic 2.9, Operational work and unplanned work). Both views benefit from the same measures, if the measures describe the system and not the people inside it. The [service desk](https://en.wikipedia.org/wiki/Help_desk_software) is where most records start, and its own metrics are covered separately (see topic 3.1, Service desk metrics). How fast incidents are responded to and resolved is covered in topic 3.3, Incident response and resolution time. Major incidents have their own measures (see topic 3.4, Major incident metrics).

Several terms recur below. A **percentile** is the value below which a stated share of observations fall, so the 85th percentile is the value that 85 percent of observations do not exceed. A **service-level agreement (SLA)** is a documented commitment between a provider and a customer. A **configuration item (CI)** is a component that needs managing to deliver a service. A **Poisson process** describes events that arrive independently at some average rate, which is a useful first model for incident arrivals (see topic 1.6, Statistical literacy for service metrics).

The warning from topic 1.2 (Goodhart's law and the psychology of metrics) applies here more than in most places. Incident counts and priorities are entered by people, often under pressure, and the number attached to a record can be changed by changing how the record is written. Every metric below has a gaming vector, and the guardrails are part of the definition.

## Key principles

- **Normalise before you compare.** A count means little without the usage, user base, or transaction volume it came from. Compare rates between periods and services, and show the raw count beside them.
- **Read the mix, not a single number.** Priority distribution, category distribution, and the share of repeats say more together than any total.
- **Priority is a rule, not a mood.** Derive it from impact and urgency using a written matrix, and measure how often it is changed after the fact.
- **Separate incidents from requests.** A request for something normal is not a fault. Counting both together inflates incident volume and hides what the service desk spends its time on (see topic 3.5, Service request fulfilment metrics).
- **Repeats are the most valuable signal.** An incident that comes back points at a problem that is not yet solved (see topic 4.1, Problem management metrics).
- **Measure services and teams, never agents.** Counts by person invite ranking, and ranking corrupts the data (see topic 1.2, Goodhart's law and the psychology of metrics).
- **Expect volume to move for reasons that are not quality.** Releases, seasons, campaigns, and changes in reporting channels all shift counts. Annotate the chart.

## Metric definitions

The table lists the metrics in this topic. Clocks and boundaries are stated in the formula column. "Closed" and "opened" refer to timestamps in the incident record; the opening time is when the record is created or when the monitoring system creates it, and the closing time is when the incident is confirmed resolved and closed.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Incident volume by service | Count of incidents opened for a service in a period | incidents with an opening time inside the period, attributed to the affected service; service requests, duplicates merged into a parent record, and records cancelled as raised in error are excluded | count | ITSM tool incident records | Incident management | Production defects or unplanned work items per team | Weekly, reviewed monthly |
| Normalised incident rate | Incidents relative to the usage of the service | incidents opened in the period / usage measure for the same period and scope (active users, sessions, or transactions, chosen and recorded per service) x 1,000; the usage measure must come from a source other than the incident tool | incidents per 1,000 usage units | ITSM tool plus usage data from analytics or monitoring | Incident management; service level management | Defect density per release or per user | Monthly |
| Priority mix | Share of opened incidents at each priority level | incidents at the priority recorded at opening / all incidents opened in the period, shown for each level; reclassified incidents counted at the opening priority and shown again at the closing priority | percent by level | ITSM tool, including the history of priority changes | Incident management | Severity distribution of defects; class-of-service mix | Monthly |
| Priority reclassification rate | Share of incidents whose priority changed between opening and closing | incidents closed in the period whose closing priority differs from the opening priority / incidents closed in the period | percent | ITSM tool audit trail | Incident management | Re-triage rate on the defect backlog | Monthly |
| Category concentration | Share of incident volume held by the largest categories | incidents in the top five categories by count / all categorised incidents in the period; uncategorised incidents are reported separately as their own share | percent | ITSM tool category and service fields | Incident management; problem management | Defect clusters by component or epic | Monthly |
| Repeat incident rate | Share of incidents that recur for the same service, configuration item, and category within a stated window | incidents in the period with an earlier closed incident for the same service, CI, and category in the preceding window (for example 30 days, set once and recorded) / incidents opened in the period; a reopened record counts as a reopen, not a repeat | percent | ITSM tool and CMDB links | Incident management; problem management | Regression or escaped-defect rate | Monthly |
| Reopen rate | Share of closed incidents that were reopened | incidents closed in the period that were later reopened within a stated window (for example 7 days) / incidents closed in the period | percent | ITSM tool status history | Incident management | Reopened defects; rework | Monthly |
| Monitoring-detected share | Share of incidents first raised by monitoring before a user reported them | incidents whose first event is an automated alert / all incidents opened in the period; incidents opened by a person from an alert are counted by the alert time | percent | ITSM tool, monitoring integration | Monitoring and event management; incident management | Alert-driven versus customer-reported defects | Monthly |

Two notes on the definitions. The first is that "priority" in this table is the priority the record carries, which should come from the impact and urgency matrix and not from the order people want work done. The second is that volume reported for a period is a count of openings, not a count of open incidents on a given day. The open count at any moment is a backlog measure and belongs with ageing (see topic 3.3, Incident response and resolution time).

## Recommendations

### Count carefully

**1. Write down what an incident is and is not.** Many tools hold incidents, requests, alerts, and problems in one table. Decide which record types count, document the filter, and apply it every time. A change in the filter changes the trend, so log changes with the date and reason (see topic 1.5, Data sources and instrumentation).

**2. Deduplicate before you report.** When one fault produces fifty tickets, the parent incident is the event and the children are a measure of its reach. Report both numbers: parent incidents for how many faults occurred, and linked records for how many people felt them. Mixing the two makes one big outage look like a month of routine work.

**3. Attribute incidents to services as well as teams.** The service is the thing the business buys and understands. Use the service catalogue (ITIL's "service catalogue") to define the list, and review the mapping from CIs when services change. An incident with no service is a data quality problem to fix, and the share of such records is worth reporting.

### Normalise and interpret volume

**4. Normalise against a usage measure from a different source.** Divide by active users, sessions, or transactions, taken from analytics or monitoring and not from the incident tool. A service that doubled its users and its incidents has not gotten worse; a service whose incidents doubled with flat usage has. Show the raw count next to the rate so nobody believes the denominator is hiding something.

**5. Use a control chart, not a trend arrow.** Incident counts vary from week to week even when nothing has changed. A [control chart](https://en.wikipedia.org/wiki/Control_chart) shows the usual range of variation, so the team reacts to a signal and leaves noise alone. Weekly counts that move inside the limits are not news; a sustained run on one side of the average is. Adjust for [seasonality](https://en.wikipedia.org/wiki/Seasonality) such as quarter-end, holidays, and release cycles by comparing like periods.

**6. Annotate the chart with events.** Mark releases, migrations, campaigns, outages of dependencies, and changes to the reporting channel. A new self-service form or a more visible "report a problem" button can raise volume while the service stays the same. Most volume arguments end quickly when the chart shows what happened that week.

### Manage priority with rules

**7. Derive priority from impact and urgency with a published matrix.** Define impact in terms of users and business functions affected, and urgency in terms of how soon the harm grows. Publish the matrix on the page where agents choose the values, with two or three worked examples per cell. Avoid free-choice priority fields; they turn into negotiation, and the count of "priority 1" incidents becomes a measure of persuasion.

**8. Report the mix and the reclassification rate together.** A healthy mix has a small number of the highest-priority incidents and a broad base of lower ones. If the top level grows, ask whether harm grew or whether customers learned that "critical" gets attention. The reclassification rate shows how well the matrix fits: frequent changes at closing mean the rule is unclear or the first assessment is rushed. Review a sample of reclassified records each month in the group that owns the matrix.

**9. Keep priority and the agile class of service aligned.** Where delivery teams receive incident-driven work, use the same words and the same matrix, or publish a clear mapping. A team that calls a defect "high" while operations calls the same defect "medium" will lose time to translation. Reserve an explicit allowance for expedited work so the interrupt is visible in the flow measures (see topic 2.1, Flow measures).

### Look for repeats and patterns

**10. Track repeats and reopens as separate signals.** A reopen means the first fix did not hold; a repeat means the same kind of fault returned after a proper fix. The first points at resolution quality and the second at an unresolved cause. Link repeating clusters to problem records, and stop counting an incident as fixed when it is likely to come back (see topic 4.1, Problem management metrics).

**11. Use the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) to choose where to look.** Sort categories and services by incident count and see how few account for most of the volume. Investigate the top few before building new reports for the rest. The shape is a prompt for [root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis), not a conclusion, because a high-count category may simply be the one that is easy to categorise.

**12. Feed the findings back to delivery and to the service desk.** Share the category and repeat views with the teams that build and change the services, in a regular conversation rather than a report. Pair each recurring cluster with an owner, a next step, and a date, and place the work on the same backlog as other priorities (see topic 2.6, Backlog and refinement metrics). Volume falls when causes are removed, and that takes planned capacity.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Incident volume by service | Logging incidents as requests, merging unrelated tickets, discouraging users from reporting, or closing duplicates as "no fault found" | User-reported contact volume and request volume beside incident volume; satisfaction and abandonment from the service desk; sample of requests that read like faults |
| Normalised incident rate | Choosing the denominator that gives the best figure, or changing the usage definition between periods | Fixed usage measure per service, recorded in the register; raw counts shown beside the rate |
| Priority mix | Lowering priorities to look calm or raising them to get attention; assigning a low priority to avoid a response target | Priority reclassification rate; monthly sample review against the impact and urgency matrix; customer-reported impact |
| Priority reclassification rate | Not changing priority when it should change, so the rate looks stable; changing it only at closing to fit the target | Sample of records where impact changed during the incident; reviews of incident timelines |
| Category concentration | Using a catch-all category, or splitting a big category into several to hide concentration | Share of uncategorised and "other" records; periodic review of the category list; checks of categories against resolution notes |
| Repeat incident rate | Opening a new incident with different wording or CI to avoid the link; closing early to avoid a reopen | Review of near-duplicate records by text and service; reopen rate; link rate to problem records |
| Reopen rate | Asking users to open a new ticket instead of reopening; closing tickets late to avoid reopens | Count of new tickets that reference a recent closed one; customer confirmation of resolution; time-to-close distribution |
| Monitoring-detected share | Creating noisy alerts that open incidents automatically, or letting people re-label user reports as alerts | Alert quality measures such as actionable alert share (see topic 5.5, Monitoring and alert quality metrics); incident source audit |

A healthy reading is dull and explainable. Normalised rates are steady or falling for stable services and rise when usage or change rises for a reason the chart shows. The priority mix is stable, reclassification is low, and a small set of categories receives deliberate attention. Repeats and reopens fall after planned problem work, and a move in any metric has an explanation that someone can give without defending the number.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Raw incident counts | Simple, easy to explain, always available | Mix usage, quality, and reporting behaviour into one number |
| Rates against usage | Allows fair comparison across periods and services | Needs a trusted usage source; denominators can be argued |
| Fixed impact and urgency matrix | Consistent priority across teams; auditable | Can feel rigid; edge cases need judgement and a route to override |
| Free-choice priority | Fast and flexible for experienced agents | Inconsistent, open to pressure, hard to compare over time |
| Detailed category tree | Shows where demand comes from | Hard to use under pressure; people choose the first match or "other" |
| Short category list with tags | Quick to apply and consistent | Less detail; may hide patterns that need text analysis |
| Repeat rate by CI and category | Points at unresolved causes | Depends on good CI data; false links and misses both occur |

Accept that no single measure is right. Use raw counts for capacity planning, rates for health, the priority mix for risk, and repeats for improvement, and show each for what it is. Keep the category list short enough that people use it, and improve the tree only when a decision needs finer detail.

## Questions to discuss with your team

**1. What counts as an incident here, and does everyone apply the rule the same way?**
Take ten recent records and ask each person to label them as incident, request, or something else. Compare the answers and discuss disagreements. The facilitator should look for habits such as treating every ticket from a senior person as an incident, and then agree on one written rule with examples. Record the date so later trends can be read correctly.

**2. When incident volume rose last quarter, what did we know about usage and change at the time?**
Put the chart beside a timeline of releases, campaigns, and usage figures. Ask which rise was explained and which was not. The discussion tends to show how rarely the denominator is on the page. Agree which usage measure each service will carry from now on.

**3. How is priority decided, and when did it last surprise us?**
Walk through the impact and urgency matrix with a recent example from each priority level. Ask where agents guess and where customers or managers push. Compare the opening priority and the closing priority of a few records. Decide one change to the matrix or its examples that reduces argument.

**4. Which three categories take most of our incident volume, and who is working on removing the cause?**
List the top categories and, for each, the owner of the underlying cause. If the answer is "nobody," that is a finding. Ask whether the category is a real cluster or a habit of labelling. Choose one cluster to investigate with the delivery team this quarter.

**5. How do we tell a repeat from a reopen, and what do we do about each?**
Show the team two or three pairs of records and ask which are repeats. Discuss what a reopen says about the quality of the first fix, and what a repeat says about the cause. The facilitator should steer the group toward linking repeating clusters to problem records instead of closing them one at a time. Agree who reviews them and how often.

**6. What would we be tempted to change if our incident count were reviewed by senior leaders each week?**
Ask the group to imagine the number on a wall. Which habits would shift: how things are logged, how tickets are merged, how priorities are set? Name the pressure openly and without blame. Agree which guardrail would show the shift, and who looks at it.

## Four perspectives

### Product and delivery teams

Delivery teams receive the output of this topic as demand. Category and repeat views show which parts of the product cause the most trouble, and the priority mix shows how much interrupt work to plan for. Teams should treat incident-driven work as part of their capacity, keep it visible in flow measures, and use repeat clusters to justify reliability work on the backlog (see topic 2.9, Operational work and unplanned work). Counting incidents per release is a useful trend, though it should never become a blame measure for individual developers.

### Service and operations teams

Service and operations teams create the records and feel the pressure around priority. They gain from a clear matrix, a short category list, and fast ways to link duplicates. They should check the data in their own tools, such as the share of uncategorised records and the reclassification rate, before others do. Operations teams are well placed to run the monthly sample review and to feed repeating clusters into problem management.

### Leadership and governance

Leaders want to know whether service is getting better and where to invest. They should ask for normalised rates, the priority mix, and the repeat view, with annotations, and resist a single volume figure. Targets for "fewer incidents" invite suppression, so set expectations on outcomes such as customer impact and repeat reduction instead. Governance should own the priority matrix and approve changes to it, with the effect on trend lines noted.

### Customers and users

Customers experience incidents as interrupted work, not as categories. They need an easy way to report a fault, a fair priority based on their impact, and honest updates. If reports are discouraged or priorities feel arbitrary, volume will fall and trust will fall with it. Share the main findings in terms users recognise, such as the services improved and the problems removed (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A regional hospital's IT department supports a patient records system, a scheduling system, and a staff messaging tool. All numbers in this example are illustrative.

The monthly report shows 640 incidents in the quarter's final month, up from 520 the month before. Leadership asks for a recovery plan. The service owner for the scheduling system, whose count rose most, asks to look at the data before agreeing that the service got worse.

Three facts emerge. First, the scheduling system gained a new clinic group that month, and active users rose by about 30 percent (illustrative). Normalised, the incident rate per 1,000 sessions was roughly flat. Second, 90 of the extra records were linked to one parent incident, a failed interface with a laboratory system, so the number of distinct faults rose by only a handful. Third, the priority mix shifted: the share of the highest priority was 2 percent the month before and 7 percent now. The reclassification rate had also doubled, and a sample of 20 records showed that about half of the high priorities had been lowered at closing.

The team makes three decisions. They report parent incidents and linked records separately. They add active sessions to the report as the denominator. They hold a half-hour session with the service desk and clinical leads to apply the impact and urgency matrix to the sampled records, which shows that "a clinic cannot book patients" had been treated as medium by some agents and high by others. The matrix gets two clinical examples per cell.

The gaming risk they catch is quiet. A manager had asked agents to avoid priority 1 for the scheduling system because each one triggered a review, so records were opened at a lower priority and raised later, or not raised at all. The reclassification rate and the sample review exposed the pattern. The team agrees that reviews are about learning, publishes that statement, and tracks the share of incidents opened below the closing priority as a guardrail. Category concentration also shows the interface fault at the top of the list, so a problem record is opened and a fix is scheduled with the interface team.

## Agile, AI, automation, and analytics

### Agile

Review incident demand at regular improvement conversations with the product teams who own the affected services, and pick one repeat cause to remove. The caution is that a goal of fewer incidents can reduce honest reporting, so keep a monitoring-detected share beside the count.

### AI

AI can classify and prioritise incidents at volume, which shifts the priority mix and the category concentration without any change in real impact. Pair priority mix with a sampled human check of priority honesty and report the reclassification rate for AI-assigned priorities. The caution is that a model trained on past tickets repeats old category habits, so watch for new kinds of incident being filed under old labels.

### Automation

Capture incident creation, priority changes, and monitoring alerts automatically so volume is counted from events, and measure the auto-classification step on its error rate. The caution is that alert storms create incident counts that reflect tooling, not user harm, so normalise by use and de-duplicate.

### Analytics

Normalise volume by usage and show priority as a mix over time, with repeat incidents linked to a cause. The decision informed is where to invest in prevention. The caution is that a low count of high-priority incidents is too small to compare month to month, so use longer windows.

## Sector lens

**Startup.** Volume is small and the team knows each incident, so rates and matrices can feel heavy. Keep a simple count by service and a short list of categories, and write down in one page what counts as an incident. Watch for repeats, because a small team can eliminate a repeating fault quickly and gain time back.

**Small business.** The service desk may be a single person using a hosted tool. Use the tool's standard reports, keep priority to a few levels with a plain impact and urgency rule, and check that requests are not counted as incidents. Compare month to month with notes about changes, such as new staff or new software.

**Enterprise.** Many services, suppliers, and desks make consistency the main issue. Agree one impact and urgency matrix, one category scheme with a limited depth, and one rule for deduplication, and let local teams add tags without changing the shared scheme. Normalise by service and review trends with control charts and annotations. Supplier-caused incidents need a shared definition in contracts (see topic 5.1, SLA, OLA, and XLA metrics).

**Government and public sector.** Incidents may carry reporting duties, audit needs, and public interest, particularly where services affect citizens' rights or safety. Document the priority matrix and category scheme, keep an audit trail of changes to priority, and be careful with any published count, since public reporting can create strong pressure on how records are written. Usage data may be limited by privacy rules, so state the denominator you can legitimately use (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is demand management. Incidents consume skilled time, interrupt planned work, and disrupt users. Understanding volume, priority, and repeats lets an organisation remove causes, set staffing against real demand, and show leaders where reliability work would pay off.

The cost has three parts. Setup covers defining incident and request, agreeing the priority matrix and category scheme, and linking usage data to services. Run cost is the effort of keeping records clean, a monthly sample review, and a person to maintain the report. A third cost is the time to act on the findings, which is where most of the return comes from, so plan capacity for it.

Return is best described as patterns you can measure yourself. These include fewer repeats after problem work, less time spent in priority disputes, fewer surprise escalations, and a better match between staffing and demand. Avoid promising a percentage reduction in incidents; it depends on the service, the starting point, and the work done. The total cost of ownership is mostly people's time, so count it, and compare it with the time that repeating incidents currently consume.

## Anti-patterns and pitfalls

- **Reporting a raw count as a health score.** Usage, change, and reporting behaviour all move it. Show normalised rates, raw counts, and annotations together.
- **Targets for fewer incidents.** They reward suppression and mislabelling. Set goals for repeat reduction and customer impact, and keep the incident count as information.
- **Counting requests as incidents.** Volume rises and the service looks worse than it is. Separate the record types and report each.
- **Free-choice priority.** Priority becomes negotiation and the mix becomes meaningless. Use a published matrix and sample for consistency.
- **A category tree nobody uses.** People pick the first match, and "other" grows. Keep it short, review "other" monthly, and prune what is unused.
- **Counting every linked ticket as a separate fault.** A single outage dominates the month. Report parent incidents and the number of linked records.
- **Ranking agents or teams by incident counts.** Counts by person reflect work allocation and ticket habits. Aggregate to services and review patterns, not people.
- **Ignoring repeats.** The same fault is fixed again and again, and nobody owns the cause. Link repeats to problem records and assign an owner.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and counting | People disagree on what an incident is; counts come from ad hoc exports | Some teams filter requests from incidents; rules differ | One written definition, filter, and deduplication rule for all teams | Definition changes logged and shown on trend charts; share of uncategorised records tracked | Definitions reviewed with suppliers and customers and revised when they stop informing decisions |
| Normalisation and interpretation | Raw counts only | Usage data used by a few services | A named usage measure per service from a separate source | Control charts with annotations used in reviews | Usage, change, and incident data linked across teams and suppliers to explain demand |
| Priority practice | Priority chosen by feel | Matrix exists in some teams | One matrix with examples, shown where priority is chosen | Mix and reclassification rate reviewed and sampled monthly | Matrix tuned with customers and clinical or business owners as conditions change |
| Repeats and patterns | Repeats noticed by memory | Category lists reviewed occasionally | Repeat and reopen rates reported monthly with a stated window | Repeating clusters linked to problem records with owners and dates | Cross-team and supplier cause removal funded and tracked to reduced demand |

## Checklist

- [ ] A written definition separates incidents from requests, alerts, and problems.
- [ ] Parent incidents and linked records are reported separately.
- [ ] Every incident is attributed to a service from the service catalogue.
- [ ] Each service has a named usage measure from a source other than the incident tool.
- [ ] Reports show the raw count, the normalised rate, and annotations for releases and campaigns.
- [ ] A control chart is used before anyone reacts to a change in weekly volume.
- [ ] Priority is derived from a published impact and urgency matrix with examples.
- [ ] The priority mix and the reclassification rate are reviewed together every month.
- [ ] The category list is short, and the share of "other" and uncategorised records is tracked.
- [ ] Repeat and reopen rates use stated windows and are reported separately.
- [ ] Repeating clusters are linked to problem records with an owner.
- [ ] No report ranks individual agents by incident counts.

## AI prompts

**Check a definition of incident volume for ambiguity.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Design a normalized incident rate.**

```text
For the service [service name] I want an incident rate normalised by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Review an impact and urgency matrix.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymised example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Analyze categories and repeats for improvement candidates.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a related metric and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited metric topic keeps its clocks, gaming vectors, and guardrails complete.

## Key takeaways

- Incident volume reflects usage, change, and reporting behaviour as much as quality, so normalise it and annotate it.
- Read priority as a mix, derive it from a published impact and urgency matrix, and watch the reclassification rate.
- Report parent incidents and linked records separately so one outage does not look like a month of routine work.
- Repeats and reopens are the most useful signals, because they point at causes and fixes that did not hold.
- Aggregate to services and teams, never to individual agents, and pair every metric with a guardrail.
- Use control charts and Pareto views to decide where to look, then give each cluster an owner and capacity.

## References and further reading

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
