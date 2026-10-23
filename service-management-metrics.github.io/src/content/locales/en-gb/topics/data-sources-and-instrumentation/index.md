# Data sources and instrumentation

**A metric is only as trustworthy as the events beneath it, so name the system of record for every number, capture events automatically at the moment they happen, and test the pipeline as carefully as you test the chart.**

## Overview and motivation

Most metrics programmes spend their effort on dashboards and almost none on the pipes that feed them. That is backwards. A polished chart built on inconsistent timestamps, a status field nobody updates, or an integration that silently stopped last month looks authoritative while being wrong. This topic covers the unglamorous foundation for the rest of the book: where service and delivery data comes from, how reliable each source is, and which data quality failures invalidate a metric before anyone notices.

The sources fall into a handful of families. An [IT service management (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) tool records incidents, requests, problems, and changes, which [ITIL](https://en.wikipedia.org/wiki/ITIL) treats as the core records of service operation. An [issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system) records the backlog and the movement of work items for agile teams. [Version control](https://en.wikipedia.org/wiki/Version_control) records commits, branches, and merges. A [continuous integration and continuous delivery (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) pipeline records builds, test results, and deployments. Monitoring and [observability](https://en.wikipedia.org/wiki/Observability_(software)) platforms emit telemetry: metrics, logs, and traces from running systems. A [configuration management database (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) records the services and components that things relate to. Surveys record what no system can observe, such as satisfaction and effort.

A deployment event written by a pipeline is objective and hard to fake, a ticket status changed hours after the work is a recollection, and a survey answer is a perception. Knowing which kind of record sits behind a number tells you which failure to look for first.

Agile and ITIL views meet at the same data: both are state machines with timestamps, so record every state change as an event with a reliable time and derive the metrics from the events.

Three terms recur in this topic. A **system of record** is the one source that is authoritative for a fact, for example the pipeline for "a deployment happened." **Instrumentation** is the deliberate capture of events, by code, configuration, or tool integration, so that a metric can be computed without anyone typing it in. A **status model** is the set of states a work item or record can be in and the allowed moves between them. The status model decides which clocks can be computed at all.

At enterprise and public sector scale the problem compounds. Data passes through connectors, [extract, transform, load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) jobs, and reporting layers, and each hop is a chance for meaning to drift. A field that means one thing in the source can mean something subtly different in the warehouse, and the number still looks plausible. The remedy is to shorten the distance between event and dashboard, and to check the pipeline on a schedule.


## Key principles

- **Capture events, not summaries.** Store the raw state changes with timestamps and compute metrics from them, so a definition can change without losing history.
- **Prefer observation to self-report.** Where a system can see the event, use that; reserve people's reports for what only people can say.
- **Name one system of record per fact.** Duplicate sources disagree, and the disagreement erodes trust in both.
- **Design the status model before the metric.** A clock cannot be computed from states that do not exist or that mean different things on different teams.
- **Treat the pipeline as a product.** It has owners, tests, monitoring, and a change log, because data quality decays silently.
- **Show provenance.** Every number on a dashboard should lead back to its source records in a click or two.
- **Collect only what you will use, and protect it.** Every field is a cost and, when it concerns people, a privacy duty.

## Metric definitions

The metrics below measure the health of the data supply itself. They are the instrument panel for the instruments. 

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Source coverage | Share of in-scope services and teams whose events reach the metrics store automatically | services or teams with an automated feed / services or teams in scope; "in scope" is listed in the metric register | percent | Metric register and pipeline configuration | Measurement and reporting; service configuration management | Team working agreement on tooling | Quarterly |
| Timestamp completeness | Share of closed work items that carry every timestamp needed for the clocks of the metric | closed items with all required state-change timestamps / items closed in the period; items still open are excluded | percent | ITSM tool or issue tracker history | Incident management; service request management | Board or workflow history | Monthly |
| Backdating rate | Share of state changes recorded after the fact, measured by the gap between the event time and the time it was entered | state changes entered more than 24 hours after the event time / state changes in the period; clock starts at the event, stops at the entry | percent | Audit trail of the tracker, or pipeline event time versus entry time | Change enablement; incident management | Definition of done | Monthly |
| Data freshness | How old the newest data on a dashboard is when it is viewed | view time minus the newest event time loaded; report the median and the 95th percentile | hours | Pipeline run log and dashboard load log | Measurement and reporting | Stakeholder review preparation | Weekly |
| Reconciliation variance | Disagreement between two sources for the same count | absolute difference between the two counts / the source of record count, for a fixed period and scope | percent | Source of record and the reporting layer | Service level management; financial management | Release report checks | Monthly |
| Status model drift | Number of distinct status names or transitions in use compared with the documented model | undocumented statuses or transitions observed in the period (count); documented ones are excluded | count | Tracker workflow configuration and event history | Continual improvement | Working agreements on workflow | Quarterly |
| Survey response rate | Share of invited people who completed a survey | completed responses / invitations delivered; bounced invitations are excluded | percent | Survey tool | Service level management; customer experience | Stakeholder review and improvement feedback | Per survey wave |

Timestamp completeness counts only closed items, so a backlog of old open items cannot hide a gap. Backdating rate uses a 24-hour threshold as an example; a team picks a threshold that fits its work and writes it down. 

## Recommendations

### Map every metric to its source

**1. Build a source map before you build a dashboard.** For each metric, record the system of record, the event that starts the clock, the event that stops it, the owner of the source, and the known failure mode. If you cannot name the system, you do not yet know where the number comes from. Keep the map in the metric register (see topic 1.4, Metrics governance and ownership).

**2. Choose one system of record per fact.** A deployment is recorded by the pipeline, an incident by the ITSM tool, a code change by version control, a service relationship by the CMDB. Where two tools hold the same fact, decide which wins and make the other read from it. Reconciliation then becomes a check, not a debate.

### Capture events at the moment they happen

**3. Instrument the event, not the report.** Let the pipeline record the deployment, the version control host record the merge, and the monitoring system record the alert. Data that depends on someone remembering to update a field degrades with distance from the event and with workload. Where an automated event exists, prefer it over a human-entered proxy for the same fact (see topic 2.8, DORA metrics).

**4. Make status changes a side effect of the work.** If a branch merge moves the work item to "in review" or a deployment moves it to "released," nobody has to remember. Integrations between version control, pipeline, and tracker remove most backdating.

**5. Keep the raw events, and keep them immutable.** Store each state change with the event time, the entry time, and the actor type (person or automation). Write corrections as new events, not overwrites, so the history of the correction is itself data. 

### Get time right

**6. Record time in one standard.** Store timestamps in [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) in an unambiguous format such as the one defined by ISO 8601 and RFC 3339, and convert to local time only for display. Mixed time zones and daylight saving changes quietly produce negative durations and off-by-an-hour clocks.

**7. Write clock rules where the data lives.** For each time measure, state which event starts the clock, which stops it, and which statuses pause it. A pause state is a design decision. Report how often each pause state is used, because the clock is where service data is most often shaped (see topic 3.3, Incident response and resolution time).

### Design the status model

**8. Keep the status model small, shared, and documented.** Each extra status invites a different interpretation by each team. Define what each state means in one sentence, who may move work into it, and which transitions are allowed. Work item age and flow measures depend on this model (see topic 2.1, Flow measures), and cross-team comparison depends on teams using the same words for the same states. When the data surprises you, suspect the workflow first: log every change to a workflow or field with its date and reason, and count undocumented statuses as a drift signal.

### Keep the pipeline honest

**9. Test the pipeline like software.** Check row counts against the source, check that required fields are present, check for duplicates, and alert when a feed stops. Add a freshness indicator to every dashboard so viewers can see how old the data is. A silent connector failure that leaves last month's numbers on screen is among the most common and most damaging failures in this area (see topic 11.1, Designing a service metrics dashboard).

**10. Reconcile on a schedule and sample by hand.** Compare a count in the reporting layer with the source for a fixed period, and investigate the difference. Then read a small sample of raw records. A fifteen-minute sample often finds what automated checks cannot, such as a status used in an unexpected way.

### Handle people and surveys carefully

**11. Reserve surveys for what only a person can tell you.** Satisfaction, effort, trust, and well-being cannot be observed from system data. Ask directly, keep surveys short, vary the timing, and report the response rate and who responded, since the people who answer differ from the people who do not, a form of [selection bias](https://en.wikipedia.org/wiki/Selection_bias). Read the open comments in full (see topic 6.1, Customer satisfaction metrics).

**12. Protect personal data and keep data at team level.** Event data about work can identify individuals through commit authorship, assignee fields, and chat records. Collect at the level the metric needs, aggregate to teams and services, and apply the privacy rules of your jurisdiction and organisation. Individual-level data, once collected, tends to be used for ranking, which corrupts the source (see topic 1.2, Goodhart's law and the psychology of metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Source coverage | Counting a service as covered after a feed is connected, even if it carries almost no events; leaving hard services out of scope | Event volume per covered service compared with its known activity; review the scope list against the service catalogue |
| Timestamp completeness | Filling required timestamps with the closing time to satisfy validation | Distribution of gaps between consecutive states; sample closed items to see whether the times are plausible |
| Backdating rate | Entering changes just inside the threshold; widening the threshold; recording all changes through one bulk update | Entry-time pattern by hour; share of changes made by automation versus by hand; audit of bulk edits |
| Data freshness | Showing the time of the last refresh instead of the time of the newest event | Newest event time displayed on the dashboard; alert when a feed delivers no new events |
| Reconciliation variance | Choosing the period or scope that reconciles; adjusting the reporting layer to match the source without finding the cause | Fix the scope and period in advance; record each cause found and review the causes quarterly |
| Status model drift | Reusing an existing status for a new meaning to avoid being flagged; adding statuses without logging them | Compare workflow configuration with the register at each review; read a sample of items in unusual states |
| Survey response rate | Inviting only people likely to respond; sending reminders to satisfied users; offering rewards that bias answers | Respondent mix compared with the user population; distribution of answers by wave; open comments read in the review |

A healthy reading is a set of boring numbers: coverage high, backdating low and falling, freshness within its stated promise, and a known cause whenever reconciliation variance is nonzero. When a number moves, someone can say whether the work changed or the instrument did.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Automated event capture | Objective, timely, low effort once built | Covers only what was instrumented; breaks silently when tools change |
| Manual entry and status updates | Captures context and judgement; works with no integration | Late, inconsistent, and open to gaming |
| One central metrics store | One definition, one place to test and govern | Needs funding and ownership; can become a bottleneck |
| Each team keeps its own data | Fits local work; quick to start | Definitions diverge; roll-ups are unreliable |
| Raw events kept long term | Definitions can change and history can be recomputed | Storage and privacy cost; more to secure |

Automate what is observable, ask people about what is not, and keep the raw record. Invest first in the sources behind the two or three metrics the team actually uses, not in a data platform for every conceivable number.

## Questions to discuss with your team

**1. For our most important metric, which system is the source of record, and how do we know?**
Ask the group to trace the number from the dashboard back to the first event. Note every place where a person or a transformation touches the data. The facilitator should look for steps nobody can explain, because that is where the first investigation should start.

**2. Which of our timestamps are written by a system, and which are typed by a person?**
List the clocks in use, such as time to respond, time to resolve, and cycle time. Mark each start and stop as automatic or manual. For the manual ones, ask how long after the event the entry is usually made. The discussion often shows that the most debated metric rests on the least reliable timestamp.

**3. What do our statuses mean, and do all teams mean the same thing?**
Put the workflow on a board and have people from different teams explain each state in their own words. Compare the explanations. Count states where the clock pauses, and ask who may use them and why. Agree on one change to remove ambiguity and log it with the reason.

**4. How would we find out if a feed silently stopped?**
Ask when anyone last checked that the data on the dashboard is current. Discuss what alert or freshness indicator would catch a stopped connector within a day.  The facilitator should push for a named owner and a concrete check, not a general intention to be careful.

**5. What do we collect that we never use, and what do we use that we do not collect well?**
Take the field list and the metric list side by side. Mark fields that feed no decision and metrics that rest on poor fields. Decide one field to stop collecting and one to improve this quarter.

**6. Who answers our surveys, and who does not?**
Compare the respondents with the population of users or team members. Look at response rates by group and by time of day or week. Discuss what the silence might mean and how to reach quiet groups without pressure. Agree how the response rate will be shown beside every survey result.

## Four perspectives

### Product and delivery teams

Delivery teams generate most of the objective data: commits, reviews, builds, and deployments. They benefit from instrumentation that makes status changes a side effect of the work, so the board stays honest without extra effort. They should keep the workflow small and be wary of using version control activity as a measure of effort (see topic 2.2, Lead time, cycle time, and flow efficiency).

### Service and operations teams

Service teams depend on records created by people under pressure, often during an incident. The clock rules, pause states, and priority fields are where drift occurs. Operations teams should make the capture of key times automatic where possible, such as alert time and acknowledgement time, audit pause-state use, and keep monitoring data separate from the ticket record so each can check the other (see topic 5.5, Monitoring and alert quality metrics).

### Leadership and governance

Leaders decide how much to invest in data foundations, and they set the incentives that determine whether the data stays honest. They should ask where a number comes from before asking why it moved, fund pipeline ownership as ongoing work, and expect a freshness date and a definition on every report. Governance bodies should treat a documented change in a source or a definition as a normal event, not a failure.

### Customers and users

Users supply the data that matters most about experience, usually by answering surveys, rating interactions, or reporting problems. They need to know what is collected, why, and what will change as a result. Short surveys and visible follow-up keep the response rate healthy. Customer-facing service level reports should state their sources and definitions (see topic 5.2, SLIs, SLOs, and error budgets).

## In practice: a service management example

A mid-sized online retailer has a platform team, three product teams, and a service desk. All numbers in this example are illustrative.

Leadership asks why the change lead time on the monthly report fell from a median of 9 days to 3 days in one quarter, while the product teams report no change in how they work. The head of platform engineering suspects the instrument and asks for a source map of the metric.

The map shows that the lead time starts when a change record is created in the ITSM tool and stops when its status is set to "implemented." Two product teams had begun creating the record after the work was ready, so the clock started late. A sample of 40 records finds that 12 were created on the same day as the deployment. The backdating rate, measured as the gap between the deployment event in the pipeline and the entry of the "implemented" status, was 31 percent over the 24-hour threshold the team had set.

The team makes three changes. First, the start of the clock moves to the first commit linked to the change, taken from version control, and the stop moves to the deployment event written by the pipeline. Second, the ITSM tool receives the status from the pipeline, so "implemented" is no longer typed. Third, the dashboard gains a freshness indicator and a reconciliation check of change counts between the pipeline and the ITSM tool.

Under the new definition the median lead time is 7 days and the 95th percentile is 21 days, and the backdating rate falls to 4 percent. Leadership first reads the 7 days as a worse result. The head of platform explains that the old number was an artefact of late record creation. The decision, written in the decision log, is to restate the previous two quarters from raw events and mark the definition change on the chart. The gaming risk the team caught was subtle: nobody falsified a number, yet late record creation produced a flattering figure. The reconciliation variance now acts as the guardrail, and the sample of raw records is reviewed each quarter.

## Agile, AI, automation, and analytics

### Agile

Build instrumentation in small steps alongside the features, so each release adds the events needed to measure it, and agree the event definitions with the people who will read the numbers. A practical step is to add the event to the definition of done for a change. The caution is that retrofitting measurement after launch gives gaps in the early data that no later fix can recover.

### AI

AI systems add new data sources: prompts, responses, tool calls, human edits, and overrides. Capture who or what acted, which model version ran, and whether a person changed the result, subject to privacy and retention rules. The caution is that logging prompts can capture personal or confidential data, so decide what to store before you start.

### Automation

Capture events automatically at the moment they happen, from the system of record, and test the pipeline with known inputs. Automation itself is a source: record runs, failures, retries, and rollbacks. The caution is silent failure, where a broken connector produces flat, healthy-looking numbers, so monitor data freshness as a metric.

### Analytics

Reconcile at least one number against an independent source each quarter, and publish the variance. The decision this informs is whether a metric can be trusted enough to use. The caution is that clean-looking dashboards can sit on weak data, so show data completeness next to the result.

## Sector lens

**Startup.** Data is thin and trust is high, which helps. Use the pipeline and version control as the main sources, because they need no extra effort, and keep the status model to a handful of states. Write down each definition and its source in a single page, and revisit it when the team doubles.

**Small business.** One person often runs IT on a hosted service desk. Use the tool's reports, ask the supplier for its definitions in writing, and export raw data periodically to avoid lock-in.

**Enterprise.** Many tools, many teams, and layers of integration create the largest risk of definition drift. Invest in a shared event model, a central metrics store with named owners, and automated reconciliation and freshness checks. Agree a small enterprise-wide status vocabulary, and let teams add local states only with a stated mapping to it.

**Government and public sector.** Records may be subject to retention, audit, access, and privacy law, and procurement may lock in tools and data formats. Treat these as design inputs: keep an audit trail, document the lineage from event to report, and negotiate data export rights in contracts. Reporting obligations make documented definitions essential (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of this topic has three parts. The first is build effort: integrations, a metrics store, and a status model clean-up. The second is run effort: an owner for the pipeline, monitoring of the feeds, and a quarterly reconciliation and sampling routine. The third is the cost of privacy and security controls for the data you keep.

The return comes from decisions made on numbers that mean what they appear to mean. Poor data leads to wrong investments, arguments about whose figure is right, and restated results that damage trust. Describe the benefit through patterns you can measure for yourself: the time taken to produce a monthly report before and after, the number of reconciliation disputes per quarter, and the backdating rate and timestamp completeness over time. The total cost of ownership is dominated by people, so count the pipeline owner's hours.

## Anti-patterns and pitfalls

- **Building the dashboard before the source map.** The chart looks finished while its meaning is unknown. Map the source, clocks, and owner first.
- **Trusting manual status updates for time measures.** Late entry makes the clocks fiction. Automate transitions from pipeline and version control events wherever they exist.
- **Several systems of record for one fact.** Disputes follow. Choose one and make others read from it.
- **Silent definition changes.** The trend line becomes meaningless. Log every change with its reason and mark it on the chart.
- **Averages from incomplete data.** Missing timestamps are not random, since the awkward items are often the ones skipped. Report timestamp completeness beside the result.
- **Collecting everything in case it is useful.** Cost and privacy risk rise with no decision served. Collect what a named question needs.
- **No freshness indicator.** A stale dashboard looks the same as a current one. Show the age of the newest event on every view.
- **Individual-level data without purpose.** It tempts ranking and harms the source. Aggregate to team and service level, and restrict access.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Sources and capture | Numbers assembled by hand from exports | Some tools feed a report automatically; others do not | Each metric has one named system of record and automated capture where an event exists | Coverage and completeness measured and trended | Events shared across teams and suppliers through agreed interfaces, with contracts for export |
| Time and status models | Each person records and reads time differently | Some teams document their workflow | One time standard and a shared status vocabulary with written clock rules | Drift and backdating monitored, and changes logged with reasons | Models revised jointly with suppliers and customers when they stop informing decisions |
| Pipeline quality | Failures found when someone complains | Occasional manual checks | Row counts, duplicate checks, and a freshness indicator on each dashboard | Reconciliation scheduled and causes reviewed; pipeline has an owner | Pipeline health reported like a service, with improvement funded |
| Survey and privacy practice | Ad hoc surveys; no privacy review | Standard questions in some teams | Short regular surveys with response rate shown; data kept at team level | Respondent mix reviewed and acted on | Survey results and privacy practice shared openly with users |

## Checklist

- [ ] Each reported metric has a named system of record and a named source owner.
- [ ] The source map is stored in the metric register.
- [ ] Every time measure states where its clock starts, stops, and pauses.
- [ ] Timestamps are stored in UTC in an unambiguous format, and server clocks are synchronised.
- [ ] Status changes are generated by automation wherever an event exists.
- [ ] Raw events are kept with event time and entry time, and corrections are new events.
- [ ] The status model is documented, and every change is logged with its reason.
- [ ] Every dashboard shows the age of its newest data.
- [ ] Counts are reconciled with the source on a schedule, and causes are recorded.
- [ ] A sample of raw records is read each quarter.
- [ ] Survey response rate and respondent mix are shown with every survey result.
- [ ] Personal data is minimised and aggregated to team and service level.

## AI prompts

**Build a source map for a metric.**

```text
I am documenting the data behind this metric: [metric name], defined as
[definition]. Our tools are [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Draft a source map with these fields: the event that
starts the clock, the event that stops it, the system of record for each, who or
what creates the event (person or automation), likely failure modes, and checks
that would detect each failure. Do not invent tool features or benchmark values.
List your assumptions and the questions I should answer to complete the map.
```

**Review a status model for ambiguity.**

```text
Here is the workflow for [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. The clocks we compute
from it are [list clocks]. Identify statuses that are ambiguous, states where a
clock could stop or pause in a misleading way, and places where two teams might
read the same word differently. Suggest a smaller model that still supports the
clocks, and say what would be lost. Do not guess how our tool is configured. List
your assumptions.
```

**Design data quality checks for a feed.**

```text
We load [data type, for example change records] from [source system] into
[destination] every [schedule]. Required fields are [list fields]. Propose a
practical set of checks for completeness, duplicates, freshness, and
reconciliation against the source, with a suggested alert and an owner role for
each. Keep the set small enough for a team of [team size] to maintain. Do not
invent thresholds; ask me for the ones you need. List your assumptions.
```

**Draft a short survey and a plan for its response rate.**

```text
I want to measure [experience topic, for example effort to get a request
fulfilled] for [audience]. Draft [number] neutral questions, a plan for when and
how to send them, and how to report the response rate and the respondent mix. Flag
wording that could bias answers, and note privacy considerations given that the
data will be held in [tool or location]. Do not invent benchmark response rates.
List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic defines the metric you are instrumenting and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new or edited metric topic names its data source and clocks.

## Key takeaways

- Every metric depends on a named system of record, so map the source before you build the chart.
- Capture events automatically at the moment they happen, and keep the raw events so definitions can change without losing history.
- Time is data too: use one standard, write the clock rules, and watch for backdating.
- Keep the status model small, shared, and documented, and log every change.
- Treat the pipeline as a product with an owner, tests, a freshness indicator, and scheduled reconciliation.
- Use surveys for what only people can say, show the response rate, and keep personal data at team level.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
