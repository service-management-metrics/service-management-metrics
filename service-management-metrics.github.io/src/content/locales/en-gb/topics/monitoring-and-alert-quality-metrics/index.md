# Monitoring and alert quality metrics

**An alert is a request for a person's attention, so measure monitoring by how often that request was worth making, how much of the real trouble it caught, and how much sleep and trust it cost.**

## Overview and motivation

Monitoring is the collection, processing, and display of real-time data about a system. [System monitoring](https://en.wikipedia.org/wiki/System_monitoring) answers the question "is the service working the way users need it to?" An alert is the point where that data asks a human to do something. Most teams measure the first activity badly or not at all, and measure the second only through complaints. This topic gives you a small set of measures for both: whether the monitoring sees the failures that matter, and whether the alerts it raises deserve the attention they demand.

Some terms first. In ITIL 4 vocabulary, an event is a change of state that has significance for managing a service, and event management is the practice of detecting events, deciding which matter, and choosing the response. An alert is a notification to a human, delivered as a page, a message, or a ticket. A page is an alert that interrupts someone immediately. A false positive is an alert that fired when nothing needed attention, and a false negative is a failure that no alert reported; both terms come from the language of [false positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). An actionable alert is one where a person had a useful action to take, and took it or deliberately chose not to for a recorded reason.

The two sides of monitoring pull against each other. Adding alerts after every incident builds a wall of noise; cutting them to quiet it risks silence during the failure that matters. The language of [precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall) fits well. Precision asks what share of the alerts raised were worth raising. Recall asks what share of the real problems the alerts caught. Alert quality is the balance between the two, and a metric that watches only one invites the team to sacrifice the other. The [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) captures the same tension.

The human cost is the reason this belongs in a service metrics book. [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue) is the well-documented tendency of people exposed to many alarms, most of them unimportant, to become desensitised and slow to respond to the ones that matter. It was studied first in clinical settings and applies to any [on-call](https://en.wikipedia.org/wiki/On-call) rotation that is paged too often by alerts that lead nowhere. Fatigued responders miss real incidents and eventually leave the rotation.

The views differ across the two traditions this book joins. ITIL 4 places this work in the monitoring and event management practice, with links to incident management and service level management. Its concern is that events are detected, classified, and routed so that incidents are found early and handled consistently. [Site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) comes at it from the other end: Google's *Site Reliability Engineering* book argues that pages should be urgent, important, actionable, and real, and that everything else belongs in a ticket or a dashboard. Agile teams meet it as a working agreement: who gets woken, for what, and who fixes a wrong alert. The metrics below borrow from all three and keep one rule: a metric describes a rotation, a service, or an alert rule, never an individual.

This topic does not repeat its neighbours. Incident timings belong to topic 3.3, Incident response and resolution time, major incidents to topic 3.4, Major incident metrics, objectives and error budgets to topic 5.2, SLIs, SLOs, and error budgets, and human load to topic 5.7, Toil and on-call metrics. Here the subject is the quality of the signal that starts all of those. Instrumentation is covered in topic 1.5, Data sources and instrumentation.

## Key principles

- **Page on symptoms users feel; ticket or dashboard the rest.** An alert on what users experience (errors, slowness, unavailability) stays useful as the system changes. An alert on a cause (a full disk, a busy CPU) is useful only when it predicts a symptom and a person can act before it arrives.
- **Every alert must lead to an action.** If the right response to an alert is to do nothing, the alert should be changed, demoted to a ticket, or deleted. Measure the share that lead to action, and treat the rest as defects in the monitoring.
- **Measure both precision and recall.** Counting only noise rewards silence, and counting only coverage rewards volume. The two together describe quality, and each acts as the guardrail for the other.
- **Treat every alert rule as a product with an owner.** A rule has a purpose, a threshold, a runbook, and a review date. Unowned rules accumulate, and the noise they produce belongs to nobody.
- **Report rotations and services, never people.** Alert load is a property of how the system and the rotation are designed. Naming individuals turns a design problem into a blame problem and hides the real fix.
## Metric definitions

The metrics below are chosen as a set. Volume alone is meaningless, actionability tells you whether volume is a problem, and coverage and detection time tell you what the quiet is hiding. All of them are computed per service or per rotation, and all of them use the alert record from the monitoring and paging tools joined to the incident and ticket records.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alert volume | Number of alerts that notified a human, split into pages and tickets | Count of distinct notifications delivered to a rotation or queue in the period; repeats of the same open alert are grouped into one; alerts handled entirely by automation with no human notification are excluded; report per rotation per week, and the out-of-hours share separately | alerts per rotation-week | Paging and alert-routing tool | Monitoring and event management | Team working agreement on on-call | Weekly |
| Actionable alert rate | Share of alerts after which a person took a useful action | Alerts with a recorded action (fix, mitigation, escalation, or a change to the alert rule) / alerts reviewed in the period; alerts auto-resolved before any acknowledgement are counted as not actionable; unreviewed alerts are reported as a separate count, not dropped | percent | Alert record joined to the review label, ticket, or incident | Monitoring and event management; incident management | Team improvement action on operations | Weekly review, monthly trend |
| False positive rate | Share of alerts that fired when no problem existed | Alerts labelled false positive in review / alerts reviewed in the period; "false positive" means the condition was not a fault and no one would want to be told; a real problem that is too minor to act on is not a false positive | percent | Alert review labels | Monitoring and event management | Retrospective noise review | Monthly |
| Detection coverage | Share of in-scope services that have at least one tested alert on a user-facing symptom | Services with a symptom alert that was exercised by a test or a real event in the last 12 months / services in the service catalogue scope; the list of in-scope services is fixed at the start of the period | percent | Service catalogue, alert rule inventory, test records | Service configuration management; monitoring and event management | Definition of done for a new service | Quarterly |
| Monitored detection share | Share of incidents that monitoring detected before a user or colleague reported them | Incidents whose first signal was an alert / incidents in the period; the clock is the incident open time, and incidents with no recorded first signal are reported as unknown, not as detected | percent | Incident record with first-signal field, alert timeline | Incident management | Incident review (post-incident learning) | Monthly |
| Time to detect (TTD) | Elapsed time between the start of user impact and the first alert that notified a human | First human-notifying alert time minus impact start time, where impact start is the earliest time the service level indicator breached, as established in the incident review; report the median and the 95th percentile; incidents with no alert are excluded and counted separately | minutes | Incident review, alert timeline, service level indicator history | Incident management; monitoring and event management | Post-incident review | Monthly, per incident |
| Alert concentration | Share of alert volume produced by the noisiest few alert rules | Alerts from the five rules with the most alerts / all alerts in the period; the same alert grouped once; rule count of five is a convention a team may change if it states why | percent | Alert rule inventory and paging record | Continual improvement; monitoring and event management | Retrospective improvement backlog | Monthly |
| Alert rule currency | Share of paging rules that have an owner, a runbook link, and a review within the agreed interval | Paging rules meeting all three conditions / all paging rules; rules disabled in the period are excluded | percent | Alert rule inventory | Knowledge management; monitoring and event management | Working agreement on operational readiness | Quarterly |

Alert volume needs context, so read it beside actionable alert rate. Time to detect uses the start of user impact, not the ticket, because the ticket clock starts after detection; the impact start is an estimate from the incident review and should be labelled as one. False positive rate and actionable alert rate are not complements, because an alert can be true and still not worth a person's time.

## Recommendations

### Decide what deserves a page

**1. Write a paging policy and keep it short.** State in a paragraph what earns a page (a symptom that users feel now or will feel soon, which a person can act on) and what does not. Everything else goes to a ticket queue or a dashboard. The Google SRE book's chapter on monitoring distributed systems is a good starting point (see topic 5.2, SLIs, SLOs, and error budgets).

**2. Alert on symptoms, and keep causes for diagnosis.** A page for "error rate above the agreed threshold" is a page about users. A page for "CPU is high" is a page about a guess. Keep cause-level signals on dashboards where the responder will look once the symptom alert has fired, and promote one to a page only when it reliably predicts a symptom with enough warning to act.

**3. Tie paging thresholds to the service level objective.** Where a service has a [service level objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alert on the rate at which the error budget is being consumed rather than on raw thresholds. The SRE Workbook chapter on alerting on SLOs describes burn rate alerts and the trade-offs between precision, recall, detection time, and reset time. This approach pages on what threatens the objective and stays quiet about brief blips that do not.

### Review every alert on a rhythm

**4. Label every alert in a short, regular review.** Set aside fifteen minutes each week for each rotation to look at what fired. For each alert, record one label: actionable, false positive, real but not worth a page, or duplicate. The labels are the data for actionable alert rate and false positive rate, and the review is the place where noisy rules get fixed the next day instead of the next quarter.

**5. Make the review produce a change.** Each week, choose at least one rule to tune, demote, merge, or delete, and record the change in the team's backlog as ordinary work.

**6. Delete without fear.** Teams keep alerts because deleting one feels risky and nobody remembers why it exists. Require every paging rule to carry a purpose and an owner, and agree that a rule that has never led to action in a stated period is removed or demoted, with the change recorded so it can be reversed. The rule currency metric makes the discipline visible.

### Measure what monitoring misses

**7. Track the share of incidents users found first.** After each incident, record how it was first noticed: an alert, a colleague, a customer, a support ticket, or a routine check. The share found by monitoring is the closest practical measure of recall. It is not complete, because incidents that nobody noticed never enter the sample, so pair it with periodic tests of the alerts themselves.

**8. Estimate time to detect honestly.** Establish the start of user impact in the post-incident review from the service level indicator history, not from when someone typed the ticket. Report the median and a high percentile, and show the incidents that had no alert at all as a separate count. A single average hides both the typical case and the bad tail (see topic 1.6, Statistical literacy for service metrics, and topic 3.3, Incident response and resolution time).

**9. Test the alerts you depend on.** Detection coverage is only credible if the alert has been seen to work. Include a check in game days or release rehearsals that deliberately causes a symptom and confirms that the right alert fires, reaches the right rotation, and links to a usable runbook. An alert that was never exercised is a hope, not a control (see topic 5.6, Service continuity metrics).

### Keep the signal path healthy

**10. Monitor the monitoring.** A silent failure of the monitoring system looks exactly like a healthy service. Add a heartbeat check that pages if the alert pipeline stops delivering, and record how often the pipeline itself fails.

**11. Group, deduplicate, and link before you count.** Group related alerts into one, suppress repeats of an alert already open, and route each to the owning rotation. Link each alert to its runbook and to the incident or ticket it created, because that join is what lets you compute actionable alert rate and monitored detection share without manual counting (see topic 1.5, Data sources and instrumentation).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Alert volume | Raising thresholds, adding long delays, or moving alerts from pages to a silent queue so the count falls while problems go unseen; splitting or merging alerts to change the count | Monitored detection share and time to detect; a rule that every demotion is recorded with its reason and reviewed after one quarter |
| Actionable alert rate | Labelling alerts as actionable after the fact, or taking a trivial action (a comment, an acknowledgement) to qualify; leaving noisy alerts unreviewed so they never enter the denominator | The count of unreviewed alerts shown beside the rate; a sample check by someone outside the rotation; a definition of "useful action" written down |
| False positive rate | Defining false positives narrowly so that "real but pointless" alerts count as true; closing noisy alerts without a label | Actionable alert rate and the "real but not worth a page" label tracked separately; periodic sampling of closed alerts |
| Detection coverage | Adding a trivial alert (a ping) to every service to claim coverage; counting alerts that have never been tested | The requirement that the alert watches a user-facing symptom and has been exercised in the last 12 months; monitored detection share |
| Monitored detection share | Recording every incident as "detected by monitoring" even when a user reported it first; creating an alert after the fact and then citing it; leaving the first-signal field empty to avoid a bad number | The unknown count shown beside the share; first-signal evidence taken from the alert timeline, not from memory; customer-reported incidents linked from the support record |
| Time to detect (TTD) | Declaring the impact start later than it was; excluding incidents with no alert; reporting the mean to hide the tail | Impact start taken from the service level indicator history; the no-alert incidents counted and shown; median and 95th percentile reported together |
| Alert concentration | Splitting one noisy rule into several so none of them is in the top five; renaming rules | Report concentration by the underlying fault or service as well as by rule; track total volume and actionable alert rate beside it |
| Alert rule currency | Adding placeholder owners, empty runbook links, or a rubber-stamp review to meet the condition | A spot check that the runbook link resolves and was used in a real response; the practice of testing the runbook in game days |

A healthy reading shows several things together. Alert volume per rotation is stable or falling and is within a level the team chose as sustainable. The actionable alert rate rises over several months as the noisiest rules are tuned. The monitored detection share is high and time to detect is short and not getting longer as volume falls, which proves that quiet was earned rather than bought. Detection coverage grows because services are tested, not because trivial alerts were added. If volume falls while detection share or time to detect gets worse, the team has traded recall for peace, and the guardrails are what reveal it.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Few, symptom-based pages | Quiet nights, high trust in each page, easy to keep current | Risk of late detection for slow-building problems; needs good ticket and dashboard habits for the rest |
| Many sensitive alerts | Early warning of cause-level trouble; fewer missed incidents | Alarm fatigue, slower acknowledgement, and attrition from on-call rotations |
| SLO burn rate alerts | Pages tied to what threatens the objective; fewer blips | Needs good indicators and an agreed objective; takes tuning to balance detection time and precision |
| Weekly alert review | Fast feedback; noisy rules fixed quickly | Costs time every week; becomes theatre if no change follows |
| Labelling by humans | Captures judgement that no tool has | Subjective; labels drift between reviewers and rotations unless the definitions are written |
| Automated suppression and grouping | Cuts noise at scale; reduces repeated pages | Can hide real signals if rules are wrong; needs its own monitoring and review |

Every choice trades precision against recall, and the trade should be made on purpose and written down per service, because it is the context that lets anyone read the numbers fairly. A service with severe consequences from a missed failure may accept a lower actionable rate for earlier warning, with a triage layer that sends the extra alerts to a ticket queue at night.

## Questions to discuss with your team

**1. What would we want to be woken for, and which of last month's pages met that standard?** Write the paging policy in a sentence or two, then take last month's pages and test each one against it. The exercise is more valuable than the percentage it produces, because the disagreements reveal where the team's expectations differ. Capture the unnecessary ones as candidates to demote.

**2. If the noisiest alert rule disappeared tomorrow, what would we lose?** Ask the question for each of the top five rules by volume. Often nobody can name a specific failure the rule has ever caught, and that is a sign it can be tuned or removed. Where someone can, ask whether the failure would also trip a symptom alert.

**3. How do we find out what monitoring missed?** Look at the last few incidents and ask who noticed first and how long the impact ran before that. The answer gives you the monitored detection share and a rough time to detect without new tooling. Discuss what signal would have caught each one earlier.

**4. Is our on-call load sustainable, and how would we know?** Agree what sustainable means for a rotation, such as a limit on out-of-hours pages per week, and review the trend by rotation, not by person. If the load is above the agreed level, treat it as a service defect and plan work to reduce it. Keep the measures consistent with topic 5.7, Toil and on-call metrics.

**5. Which of our alerts have we never tested, and how could we test them safely?** List the services that depend on a single symptom alert and ask whether anyone has seen it fire in anger or in a rehearsal. Plan one test and check the full path: detection, routing, notification, runbook. Consider whether a failing alert pipeline would be visible at all.

**6. How might these numbers be gamed here, and what would we notice?** Ask the team to describe, honestly, how they could make each figure look better without improving anything. Then agree which guardrail would show it and who looks at it. Naming the tricks in advance makes them less tempting (see topic 1.2, Goodhart's law and the psychology of metrics).

## Four perspectives

### Product and delivery teams

Teams that build and run a service decide what it reports about itself, so alert quality starts in the definition of done. A new feature that ships with its own tested indicator and alert avoids monitoring bolted on after the first incident. Treat alert tuning as ordinary backlog work.

### Service and operations teams

Operations teams carry the pager and feel the cost first, so they own the review rhythm, the labelling, and the pipeline heartbeat. When an alert is wrong, the fix belongs to the owner of the rule, not to whoever received the page.

### Leadership and governance

Leaders can ask for detection and actionability figures by service, fund tuning time, and resist a target on alert volume that rewards silence. A falling volume is good news only if detection share and time to detect hold steady. Sustainable on-call limits are a staffing and design decision, not a motivational one.

### Customers and users

Customers never see an alert; they see whether the service failed and how long it took to fix. Good monitoring shows up as incidents fixed before they notice, and fewer cases where a customer reports first. Where the organisation uses experience measures (see topic 5.1, SLA, OLA, and XLA metrics), the share of incidents first reported by users is a direct indicator of the experience gap.

## In practice: a service management example

A mid-sized online retailer runs an ordering platform with four product teams and one platform team that supports the on-call rotation. All numbers in this example are illustrative. Over four weeks (illustrative) the rotation received 240 pages, 70 of them between 22:00 and 07:00. The team reviews every page using four labels: actionable, false positive, real but not worth a page, and duplicate.

The review shows an actionable alert rate of 31 percent (illustrative) and a false positive rate of 22 percent (illustrative). Five rules produced 58 percent of the pages (illustrative), and the biggest was a disk threshold on a batch server that always recovered by itself. The previous quarter's monitored detection share was 62 percent (illustrative), and the median time to detect was 14 minutes (illustrative) with a 95th percentile of 51 minutes (illustrative).

The team demotes three noisy rules to a ticket queue, merges duplicates so one fault produces one page, replaces the raw error count alert on checkout with an error budget burn rate alert (see topic 5.2, SLIs, SLOs, and error budgets), and adds a symptom alert for order confirmation emails, a gap behind two customer-reported incidents. Each change is a backlog item with an owner. Four weeks later pages fall to 96 (illustrative) and the actionable rate rises to 64 percent (illustrative), while detection share rises to 71 percent (illustrative) and the median time to detect holds at 14 minutes. The quiet appears to be earned.

The gaming risk appears in the third month. A new manager sets an informal goal of fewer than 60 pages per four weeks, and one rotation reaches it by lengthening the delay on the checkout error alert. Its detection share falls to 55 percent (illustrative) and its 95th percentile time to detect climbs to 80 minutes (illustrative). Because the guardrails sit beside volume, the review catches it. The team withdraws the volume target, restores the alert, and records the case in the metric register (see topic 1.4, Metrics governance and ownership).

## Agile, AI, automation, and analytics

### Agile

Review alerts at a regular cadence as a product used by on-call people, and retire or tune the noisy ones with stakeholders. The caution is that a goal to cut alert volume can remove useful alerts.

### AI

AI can group, summarise, and rank alerts, and can suggest causes. Pair noise reduction with the miss rate for real incidents, and track the share of AI groupings that a person split or merged. The caution is that suppression by a model can hide a rare but serious alert.

### Automation

Count alerts automatically by rule and by outcome, and measure alert automation on suppression errors. The caution is that auto-resolved alerts can look like healthy systems when the rule is just flapping.

### Analytics

Report the actionable alert rate and detection coverage, with the incidents first noticed by users. The decision informed is which alerts to fix or remove. The caution is that coverage measured against known incidents ignores failure modes nobody has seen yet.

## Sector lens

**Startup.** With a handful of engineers all on call, the priority is a short paging policy and a few symptom alerts on the paths that earn money. A ten-minute Monday look at what woke people is enough. The main risk is no alerts at all, so that customers are the monitoring; count how often a customer told you first.

**Small business.** Small organisations often rely on a supplier's monitoring. Useful measures are detection coverage for the few systems that stop the business and the share of incidents found by users. Ask suppliers for the alert data your contract entitles you to.

**Enterprise.** Large organisations have many tools and rotations, and every team may define "actionable" differently. Standardise definitions and labels, review at team level, and aggregate by service rather than by tool. Event correlation platforms reduce volume at scale but need their own recall checks.

**Government and public sector.** Some services run office hours and others, such as emergency or benefit systems, run continuously. Detection coverage and tested alerts matter most where failure carries legal or safety consequences, and test records can support audit. Report coverage and detection to oversight bodies, not raw alert counts, which are easy to misread (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The reasons to invest are practical. Better detection shortens the time users are affected. Fewer pointless pages protect sleep, reduce attrition from the rotation, and keep attention for the alerts that matter. The cost of poor alert quality is hard to see because it is spread across interrupted sleep, slow responses, and departures of experienced engineers.

The cost of collecting these metrics is small if the alert, paging, and incident tools can be joined, and moderate if labels are added by hand. The main costs are weekly review time, tuning and deletion work, and occasional detection tests. Pruning unused rules also trims monitoring licence and storage costs, and total cost of ownership should include the people time.

The return appears within a few months as quieter rotations, a rising monitored detection share, and a time to detect that does not worsen. To turn this into money, compare the cost of incident hours and rotation turnover with the cost of the review, using your own figures. Do not use industry averages unless you can cite a verified source.

## Anti-patterns and pitfalls

- **Targeting alert volume.** A target on the count rewards silence and invites hiding alerts. Set targets on actionable alert rate and detection share, and use volume as a context figure with a sustainability limit chosen by the team.
- **Alerting on every cause.** Dozens of cause-level pages produce noise and still miss the symptom nobody thought of. Alert on user-facing symptoms instead.
- **Adding an alert after every incident and never removing one.** Pair every new alert with a review of the ones it makes redundant.
- **Counting alerts without labelling them.** A count without a judgement of usefulness cannot tell a noisy rotation from a busy one. Label a sample each week, even if only a few minutes are available.
- **Treating coverage as a count of alerts.** A service with fifty cause alerts and no symptom alert is poorly covered. Define coverage as tested symptom detection.
- **Ranking people by pages handled or acknowledged.** It punishes the rotation members who take the hard shifts and encourages avoiding the pager. Report by rotation and service, and look for design fixes.
- **Never testing the alert path.** An alert that has not been seen to work is an assumption. Include alert tests in game days, and monitor the pipeline itself.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Paging policy and rule ownership | Alerts added ad hoc; nobody knows why many exist | Some teams have a policy and owners for their rules | One short paging policy; every paging rule has an owner and a runbook | Rule currency tracked and reviewed; unused rules removed on a schedule | Policy and ownership adapted across teams and suppliers as services change |
| Alert quality measurement | Complaints about noise; no counts | Volume counted by some teams; no labelling | Weekly review with common labels; actionable alert rate and false positive rate reported by service | Rates trended and paired with detection measures; improvement work funded | Quality linked across services and suppliers; definitions revised when they stop informing decisions |
| Detection and coverage | Customers and colleagues report most problems | Symptom alerts on a few key services | Detection coverage tracked with tested alerts; first-signal recorded for every incident | Time to detect and monitored detection share reviewed with a guardrail; gaps become planned work | Detection tested routinely across dependencies and suppliers, including the alert pipeline |
| Use in improvement | Alert fixes follow the worst night | Fixes follow incidents | Each review produces at least one change | Changes tracked to their effect on volume, actionability, and detection | Rotation load, detection, and error budgets reviewed together to steer investment |

## Checklist

- [ ] We have a written paging policy of a few sentences that says what earns a page.
- [ ] Every paging rule has an owner, a purpose, and a runbook link.
- [ ] Each rotation reviews what fired at least weekly and labels each alert.
- [ ] Each review produces at least one recorded change to a rule.
- [ ] We report alert volume, actionable alert rate, and false positive rate by rotation and service, never by person.
- [ ] Every incident records how it was first detected, with an unknown option.
- [ ] We estimate impact start from the service level indicator history and report the median and 95th percentile time to detect.
- [ ] Each in-scope service has a symptom alert that has been tested in the last 12 months.
- [ ] A heartbeat check pages us if the alert pipeline stops.
- [ ] We have agreed a sustainable out-of-hours load for each rotation and review it.
- [ ] No target is set on alert volume alone.

## AI prompts

**Purpose: Draft a paging policy for a service from its indicators and consequences.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalising it, and list your assumptions.
```

**Purpose: Analyze an exported alert review for noise patterns.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Purpose: Check a set of alert metrics for gaming risk before publishing.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organisation type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Purpose: Plan a test of detection for services with weak coverage.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a related measure and the guardrail that should sit beside an alert quality metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep the template, the gaming table, and the cross-references consistent.

## Key takeaways

- Judge alerts by whether they led to action, and judge monitoring by how much real trouble it caught; precision and recall guard each other.
- Page on symptoms that users feel, tie thresholds to the service level objective where one exists, and keep causes for diagnosis.
- Review what fired every week, label it, and make at least one change each time.
- Never set a target on alert volume alone; read it beside actionable alert rate, monitored detection share, and time to detect.
- Test the alerts and the alert pipeline, because an untested alert is an assumption.
- Report by rotation and service, never by person, and treat sustainable on-call load as a design goal.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
