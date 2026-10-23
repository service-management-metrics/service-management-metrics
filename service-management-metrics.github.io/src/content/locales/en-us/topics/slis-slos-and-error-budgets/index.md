# SLIs, SLOs, and error budgets

**A service level objective turns "reliable enough" into a number that users, product teams, and operations teams can all see, and the error budget it leaves behind turns that number into a shared, spendable decision about risk instead of an argument about blame.**

## Overview and motivation

Every service already has a level of reliability, whether anyone has measured it or not. If nobody states it, users assume one level, the product team assumes another, and the operations team defends a third. The difference is discovered during an outage. This topic covers the three linked ideas that [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) uses to close that gap: the service level indicator, the service level objective, and the error budget.

A [service level indicator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) is a measurement of one aspect of the service as users experience it. Typical aspects are whether a request succeeded, how long it took, whether the data returned was fresh, and whether it was correct. A good SLI is expressed as a ratio: the number of good events divided by the number of valid events, over a defined window. A [service level objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) is the target for that ratio over a period, for example "99.9 percent of valid checkout requests succeed over a rolling 28 days." The **error budget** is whatever the objective permits to go wrong: 100 percent minus the SLO. At 99.9 percent, the budget is 0.1 percent of valid events.

The error budget changes the conversation. If the service has spent little of its budget, the team has room to release faster, try risky changes, and run experiments. If the budget is nearly gone, the same team slows feature work and spends effort on reliability until the budget recovers. The decision comes from a number agreed in advance, so it does not depend on who is most senior or most persuasive in the meeting.

**Burn rate** is how fast the budget is being spent, relative to the rate that would spend exactly all of it by the end of the window. A burn rate of 1 means the budget will be gone exactly at the end of the window. A burn rate of 10 means it will be gone in a tenth of the window. Burn rate is the bridge from the SLO to alerting, because it says how urgent a problem is in terms of what it costs the objective.

The agile and ITIL views meet here, and they use different vocabulary for related ideas. In ITIL 4, service level management is the practice that sets, measures, and reports service levels, and the [service level agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) is the documented agreement between a provider and a customer (see topic 5.1, SLA, OLA, and XLA metrics). An SLO is an internal target that is usually stricter than the SLA and is owned by the team that runs the service. An SLA carries consequences, such as credits or penalties. An SLO carries a decision rule. Agile teams that own their services ("you build it, you run it") use SLOs to make the cost of reliability visible in the same backlog as features. Teams that follow the ITIL practice can treat SLIs as the measurable form of what customers say they need, and the SLO as the working target that keeps the SLA safe.

[Availability](https://en.wikipedia.org/wiki/Availability) is the most familiar SLI and is covered in detail elsewhere (see topic 5.3, Availability metrics). Latency, correctness, freshness, and throughput are also candidates. The skill is choosing indicators from what users care about, rather than from what is easy to collect. CPU use on a server is easy to collect and says little about whether a customer could pay. The share of payment requests that complete within two seconds says a great deal. For latency, report [percentiles](https://en.wikipedia.org/wiki/Percentile), not averages, because an average hides the slow tail that users notice (see topic 1.6, Statistical literacy for service metrics, and topic 5.4, Capacity and performance metrics).

## Key principles

- **Start from the user, not the server.** Choose indicators that describe an experience a person would recognize, such as "my payment went through," and work backward to what to measure.
- **A target below 100 percent is a decision, not an admission.** Perfect reliability is unattainable and unaffordable, and users usually cannot tell the difference beyond a point. The budget makes that trade explicit.
- **Set the objective with the people who depend on it.** The SLO is a negotiated agreement among product, operations, and customers, not a number chosen by one team alone.
- **Agree the consequences before the budget runs out.** An error budget policy written in a calm week is followed in a stressful one. A policy invented during an outage is argued about.
- **Alert on burn, not on every blip.** Page a person only when the budget is being consumed fast enough to threaten the objective, and route slower burn to tickets.
- **SLOs describe services, never people.** The budget belongs to a service and its team. It is never a score for an engineer.

## Metric definitions

The metrics below describe the SLO system for a service. The first four are the core of the practice, and the last two describe how healthy the practice itself is. Every clock and boundary is stated in the formula column. "Valid events" are the events that count toward the SLI after the exclusions agreed in the SLO document, such as requests from the team's own load tests, which are excluded.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLI attainment | The share of valid events that were good, for one indicator of one service | good events / valid events, for the window from the start to the end of the reporting period; events excluded by the SLO document (load tests, planned maintenance announced in advance, if the SLO says so) are removed from both numerator and denominator | percent | Load balancer, application, or synthetic probe telemetry; the monitoring or observability platform | Service level management; monitoring and event management | Definition of done for operability; stakeholder review of service health | Continuous, reported daily and per window |
| SLO compliance | Whether the SLI met the objective over the SLO window, and for how many recent windows | windows in which SLI attainment was at or above the objective / windows evaluated, over the last 12 months; a window that is still open is excluded | percent of windows | SLI attainment history | Service level management; continual improvement | Team goal or working agreement on reliability | Monthly, with a quarterly trend |
| Error budget remaining | The part of the budget not yet spent in the current window | 1 - (bad events so far / allowed bad events for the whole window), where allowed bad events = (1 - SLO) x expected valid events for the whole window; the clock starts at the window start and stops at the window end | percent of budget | SLI attainment and the volume forecast | Service level management; risk management | Release readiness check; planned work input | Daily, reviewed weekly |
| Burn rate | The speed at which the budget is being spent relative to the even-spend rate | (bad events / valid events over a look-back period) / (1 - SLO); the look-back period is stated, for example 1 hour or 6 hours | ratio (1 means exactly on budget) | SLI telemetry at fine time resolution | Monitoring and event management; incident management | On-call alerting rules; swarming trigger | Continuous, evaluated in alert rules |
| Budget policy adherence | How often the agreed consequence was applied when a trigger in the error budget policy was hit | triggers in the period where the policy action was taken within the agreed time / triggers hit in the period; triggers that were formally waived with a recorded reason are counted separately, not removed | percent | Policy document, decision log, and backlog history | Service level management; change enablement | Working agreement; retrospective follow-through | Quarterly |
| SLO coverage | The share of critical user journeys, or of services in scope, that have a current SLO and a working SLI | services or journeys in scope with at least one SLO whose SLI data arrived in the last 7 days / services or journeys in scope; "in scope" is listed in the service catalog (service catalog in ITIL terms) | percent | Service catalog, SLO register, and monitoring configuration | Service catalog management; service level management | Team service ownership list | Quarterly |

The burn-rate look-back and the SLO window are choices. A rolling 28-day window covers whole weeks. State the choice in the SLO document and keep it stable, or the trend will mislead.

## Recommendations

### Choose indicators from what users care about

**1. Start with critical user journeys.** List the three to six things a user must be able to do for the service to be worth using, such as sign in, search, pay, and download a statement. Write each as a sentence from the user's side. Then choose the SLI that shows whether that sentence was true. This keeps the SLOs few and prevents a catalog of technical gauges that nobody reads.

**2. Express each SLI as good events over valid events.** A ratio is easy to explain, easy to aggregate, and easy to turn into a budget. Define "good" with a threshold that users would accept, and define "valid" so that traffic you cannot reasonably serve, such as requests blocked for abuse, is excluded in a documented way. Write both definitions into the SLO document, because the denominator is where most disagreements hide.

**3. Measure as close to the user as practical.** A server-side success rate can be perfect while a network or client problem makes the service unusable. Measure at the load balancer or edge, and add a synthetic probe or client-side measurement for the journeys that matter most. Each point of measurement has a cost and a blind spot, so record which one each SLI uses (see topic 1.5, Data sources and instrumentation).

**4. Use percentiles for latency, with a threshold.** "95 percent of search requests complete in under 800 milliseconds" is an SLI. "Average latency" is not, because a few fast requests can offset many slow ones. Where it helps, use two thresholds, such as a median and a 99th percentile, since the slow tail shapes how the service feels (see topic 5.4, Capacity and performance metrics).

### Set objectives that people can defend

**5. Set the first SLO from current performance and user need, then tighten.** Measure the SLI for a few weeks, ask users and support staff what level they notice, and set an objective that the service can meet today with some room. An objective set far above current performance is a permanent breach, and people stop looking at it. An objective set far below what users get lets quality decay unseen. Revisit it after a quarter.

**6. Keep the SLO stricter than the SLA, and keep them separate.** If a customer agreement promises 99.5 percent, the team's objective might be 99.9 percent, so the budget is exhausted before the contractual line is crossed. Do not make the SLO and the SLA the same number, and do not report one as the other. The agreement is a commercial and legal document, and the objective is an engineering decision rule (see topic 5.1, SLA, OLA, and XLA metrics).

**7. Account for dependencies.** A service cannot be more reliable than what it depends on, unless it degrades gracefully. List the key dependencies, including suppliers, and ask what their actual performance implies for your objective.

### Run the budget as a decision tool

**8. Write an error budget policy before you need it.** The policy says what happens at defined levels of consumption. A simple version has three steps: normal operation while budget remains, extra review of risky changes and priority for reliability work when a stated share has been spent, and a pause on non-essential feature releases when it is exhausted until the budget recovers. Name who may grant an exception and how it is recorded. Product and operations leaders should both sign it, so the policy applies equally to both sides.

**9. Spend the budget on purpose.** A budget that is never touched suggests the objective is too strict or the team is too cautious. Use spare budget for experiments, faster release cadence, canary rollouts, and [feature toggles](https://en.wikipedia.org/wiki/Feature_toggle) that let you test in production with limited exposure, and use [canary releases](https://en.wikipedia.org/wiki/Canary_release) to catch problems while only a small share of users is affected. Treat a consistently untouched budget as a prompt to ask whether the objective matches what users need (see topic 4.5, Release and deployment metrics).

**10. Alert on multiple burn rates.** A fast burn, such as a rate high enough to spend a large share of the budget within an hour, pages a person. A slow burn, such as a modest rate that would still exhaust the budget within days, creates a ticket for working hours. Using two or more look-back windows catches both sudden failures and slow leaks, and reduces pages for brief blips that cost little budget. The Site Reliability Workbook chapter on alerting on SLOs explains the pattern, and the thresholds should be tuned to your service rather than copied (see topic 5.5, Monitoring and alert quality metrics).

**11. Connect incidents, problems, and learning to the budget.** After an incident, record how much budget it consumed alongside its duration and impact. Use that number to prioritize the problem record and the follow-up actions (see topic 4.1, Problem management metrics, and topic 4.2, Postmortem and learning metrics). Budget cost also gives major incident reviews a common unit for comparing very different failures (see topic 3.4, Major incident metrics).

### Keep the practice honest and alive

**12. Review SLOs against reality every quarter.** Compare the SLO with support contacts, complaints, and satisfaction results. If users are unhappy while the SLO is green, the SLI is wrong or the target is too loose. If the SLO is red and nobody complains, the target may be too strict. Record each change and the reason, and show the change on the trend chart (see topic 6.2, Experience level agreements).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| SLI attainment | Narrowing "valid" events until the failures drop out, such as excluding retried requests or whole error classes; measuring only the healthiest component; probing only from a favorable location | Publish the SLI definition and exclusions in the SLO document with a change log; compare the SLI with support contacts and user complaints; a regular review of excluded events and their volume |
| SLO compliance | Setting the objective low enough to always pass; changing the window length after a bad period; redefining a breach as a maintenance period | Objective set with user input and reviewed on a schedule; window fixed in the document; count of exclusions and unplanned changes to the window reported alongside compliance |
| Error budget remaining | Reclassifying bad events as excluded; inflating the expected volume so the allowed bad count looks larger; resetting the window early | Allowed bad events computed from the actual volume at the window end; excluded event volume shown beside the budget; window dates fixed in advance |
| Burn rate | Tuning alert thresholds so burn never triggers; using a look-back so long that fast burns average out | Alert coverage test using past incidents ("would this rule have paged?"); actionable alert rate and missed-detection count (see topic 5.5, Monitoring and alert quality metrics) |
| Budget policy adherence | Granting exceptions routinely; writing a policy with triggers that are never reachable; counting a token reliability ticket as the policy action | Exceptions counted and reviewed separately; share of exceptions in the period; reliability work completed (see topic 4.1, Problem management metrics) |
| SLO coverage | Adding a trivial SLO to every service to raise the percentage; counting a journey as covered when no data flows | SLI data freshness check (data arrived in the last 7 days); review of whether the SLO covers a critical journey, not a secondary endpoint |

A healthy reading shows an SLI that tracks what users report, an objective that is sometimes missed and sometimes comfortably met, and a budget that is spent on purpose. The policy is applied when its trigger is hit, exceptions are rare and recorded, and every definition change is visible on the chart. A service that is always at 100 percent of budget remaining, or one that is always breached, deserves a conversation about the objective, not praise or blame. Remember that any single figure is a prompt for a question (see topic 1.2, Goodhart's law and the psychology of metrics).

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| User-journey SLIs | Match what users feel; few in number; easy to explain to non-engineers | Need effort to instrument end to end; may miss internal faults that have not yet reached users |
| Component or resource SLIs (CPU, memory, queue depth) | Cheap to collect; useful for diagnosis and capacity | Poor proxies for user experience; produce many alerts that do not matter |
| Rolling window | Smooth; no cliff at month end; always current | Harder to explain to executives than a calendar month; a bad day lingers for the whole window |
| Burn-rate alerting | Pages when the objective is genuinely at risk; fewer false alarms | More complex to configure and test; thresholds need tuning per service |

Choose few SLIs, set them with users, and let the budget decide the pace of change. The right strictness is the loosest objective that still keeps users satisfied, since each extra nine costs more than the last.

## Questions to discuss with your team

**1. What does a user of this service need to be able to do, and how would we know if they could not?**
Ask each person to write down the three most important things a user does with the service, without looking at any dashboard. Compare the lists and note the differences between product, operations, and support. Then ask which of those journeys currently has an SLI. The facilitator should look for important journeys with no measurement and for measurements that describe no journey.

**2. If our SLO was 99.9 percent and we met it, would users be happy, and how do we know?**
Put the current SLO next to the last quarter of support contacts, complaints, and satisfaction results. Ask whether they agree. If the SLO is green and users are unhappy, the SLI or the target needs work. If users are happy and the SLO is red, the target may be stricter than anyone needs. Agree one action to bring the objective and the experience together.

**3. What would we actually do differently if the error budget ran out?**
Read the current error budget policy aloud, or draft one together if none exists. Ask who would stop what, and who has the authority to grant an exception. The facilitator should press for concrete actions, such as pausing non-essential releases and moving named people to reliability work, rather than general intentions. A policy that nobody believes will be followed is worse than no policy.

**4. When did we last take a risk because we had budget to spare?**
Discuss whether the team uses its budget or only guards it. Look at the last quarter: was there a period when the budget was almost untouched while releases were slow? Ask what the team would have tried if it had known it was safe to. This question surfaces over-caution, and the answer often points to a canary release, a toggle, or a faster pipeline that would let the team use its budget well.

**5. Which of our alerts would have fired in time for our last bad incident, and which would have fired for nothing?**
Take the last significant incident and replay the alert history against it. Count the pages that arrived, how long after the impact began, and how many pages arrived for events that cost almost no budget. Discuss whether burn-rate alerts would have done better. The goal is a short list of alert changes, each with an owner, and not a blame discussion about who was on call.

**6. Who owns each SLO, and when did we last change one on purpose?**
List the SLOs and write the owner next to each, as a team or role. Ask when each was last reviewed and what changed. An SLO nobody has touched for a year is a sign that it no longer informs decisions. Agree a review date for each, and agree who has the right to retire an SLO that stopped being useful.

## Four perspectives

### Product and delivery teams

Delivery teams gain a clear rule for how fast to move. When budget remains, they can release more often and try bolder changes. When it is low, they put reliability work on the backlog without a long negotiation. They should help choose the indicators because they know which journeys matter, and they should instrument new features with the SLI in mind from the start (see topic 2.8, DORA metrics). The budget is a team resource to plan with, never a number to hide.

### Service and operations teams

Operations teams use SLOs to decide what deserves a page and what can wait until morning. Burn-rate alerting reduces noise and ties on-call work to what users feel (see topic 5.7, Toil and on-call metrics). They keep the SLI definitions honest, maintain the telemetry behind them, and record budget cost in incident and problem records.

### Leadership and governance

Leaders should ask three questions: what is the objective, how much budget is left, and what will we do if it runs out? They sign the error budget policy and back the team when the policy says to slow down. They avoid turning SLO compliance into a bonus metric, which invites narrowing definitions and setting soft targets.

### Customers and users

Customers benefit when the objective reflects what they need and when they can see how the service performs against it. They should be consulted when the objective is set, because their tolerance for slowness or downtime varies by task and by time of day. Experience measures, such as satisfaction and effort, check whether the SLO captures what they feel (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer has a checkout team, a platform team, and a service desk. The checkout service is business critical. All numbers in this example are illustrative.

The team defines one SLI for the "pay for an order" journey: the share of valid payment requests that return a success within 2 seconds, measured at the load balancer. Valid requests exclude the team's own load tests and requests the fraud service rejects by design. The SLO is 99.9 percent over a rolling 28 days. The window carries an expected 12,000,000 valid requests, so the budget is 12,000 bad requests (0.1 percent). The error budget policy, signed by the head of product and the head of platform, has three levels: at 50 percent of the budget spent, risky changes need a second reviewer and a canary rollout; at 75 percent, reliability work takes priority in the next planning conversation; at 100 percent, non-essential feature releases pause until the budget recovers.

On day 10 of the window the team sees 7,800 bad requests out of about 4,285,714 expected so far, which gives SLI attainment of about 99.82 percent, 65 percent of the budget spent, and a window that is only 36 percent elapsed. The burn rate over the period is about 1.8, so at this pace the budget is gone around day 15. A bad deployment accounted for 5,000 of the failures. The incident record shows the failure lasted 22 minutes, the major incident review identifies a missing check in the pipeline, and the budget cost of the incident is recorded in the problem record (see topic 4.1, Problem management metrics).

The team follows the policy. The second-level action applies at once, so risky changes need a canary rollout, and the planning meeting moves the pipeline check to the top of the work queue. The product owner accepts a pause on a non-urgent promotion feature. By day 28 the budget is 94 percent spent, and the team finishes the window within the objective.

The gaming risk appears in the review. A different team, running the retailer's search service, reported 99.95 percent for the quarter while the service desk logged a rise in "search not working" contacts. Investigating, the platform team found that the search team had redefined "valid" to exclude requests that were retried within 5 seconds, which removed many real failures. The review restored the original definition, restated the quarter, and added two guardrails: any change to a definition is recorded in the SLO document with a reason, and SLI attainment is compared with support contacts every month. Nobody lied, since the change had been made to reduce noise, so the fix was a clearer definition, not a reprimand.

## Agile, AI, automation, and analytics

### Agile

An error budget turns reliability into a shared decision with product stakeholders, and it fits continuous delivery by showing how much risk the team can spend. Review the objectives at a regular cadence. The caution is that an SLO nobody has agreed with users is a guess.

### AI

AI features need their own indicators, such as correctness and latency, not just availability, and the objective should say how a wrong answer counts. Pair AI availability with a quality indicator measured by sampling. The caution is that a service that answers fast with a wrong answer can meet an availability SLO while failing users.

### Automation

Compute indicators and burn rate automatically from telemetry, and alert on burn rate, not on every blip. Measure the alerting itself on missed and false alerts. The caution is that automated budget freezes can stall useful work, so keep a human decision in the policy.

### Analytics

Choose indicators users feel and show the window and the count of events behind each. The decision informed is when to slow change or invest in reliability. The caution is that a short window gives a volatile budget, so state the window.

## Sector lens

**Startup.** Start with one SLO for the most important journey, measured at the edge, with a simple policy that fits on a page. Do not build a platform for dozens of SLOs. The budget helps a small team argue less about whether to ship on a Friday.

**Small business.** A small business often relies on hosted tools and suppliers, so the SLI may come from a supplier's status data or a simple external probe. Read the supplier's service levels in writing and check them against your own needs.

**Enterprise.** Many services, teams, and suppliers raise the stakes for consistency. Provide a shared template for SLO documents, a common register, and a standard way to compute attainment and budget, so leaders can compare and roll up without arguing about definitions. Keep the SLO owned by the service team and the register curated centrally.

**Government and public sector.** Services must often meet statutory or published targets, and a failure may be reported publicly. Keep the contractual or statutory commitment separate from the internal objective, and make sure the internal SLO is tighter. Document the SLI definition, exclusions, and data lineage for audit, and plan for accessibility and for users who cannot choose an alternative provider (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is fewer arguments and better decisions about reliability. Without an objective, reliability work competes with features on the strength of whoever argues loudest. With an objective and a budget, the trade is visible and agreed in advance, and users get a service that is as reliable as they need, without the team paying for reliability beyond that point.

The cost has four parts. The first is design: workshops to choose journeys, indicators, and objectives, and to write the policy. The second is instrumentation: telemetry at the right place, probes, and the pipeline that turns events into attainment and budget (see topic 1.5, Data sources and instrumentation). The third is operation: alert rules, a dashboard, a quarterly review, and the time to keep definitions current. The fourth is the opportunity cost when the policy pauses feature work, which is the cost of honoring the agreement and the reason to agree it before the pressure arrives.

The return shows up in patterns a team can track for itself: fewer pages that required no action, shorter debates about whether to release, reliability work scheduled before the budget runs out instead of after a major incident, and fewer surprises for customers. Describe the benefit by comparing the team's own figures before and after, such as pages per rotation and the share of budget consumed by the largest incident.

## Anti-patterns and pitfalls

- **Too many SLOs.** Dozens of objectives dilute attention, and nobody can say which one matters. Start with the critical user journeys and retire the rest.
- **SLO equals SLA.** Reporting one number as both removes the safety margin and mixes an engineering rule with a commercial promise. Keep the objective stricter than the agreement.
- **A policy that is never enforced.** If the budget runs out and nothing changes, the practice loses credibility. Get leaders to sign the policy and record every exception with its reason.
- **Using the budget as a scorecard for people.** Ranking engineers or on-call staff by budget spent makes people hide incidents and narrow definitions. Attribute the budget to the service and discuss causes at the system level (see topic 1.2, Goodhart's law and the psychology of metrics).
- **Alerting on every dip.** Paging on raw symptoms creates alert fatigue and trains people to ignore pages. Page on burn rate and send slow burns to tickets.
- **Setting and forgetting.** An SLO that nobody reviews drifts away from what users need. Schedule a quarterly review and record what changed and why.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Indicators and objectives | Reliability described in words; uptime of servers reported | Some teams define SLIs; targets vary and are rarely reviewed | Critical user journeys have documented SLIs and SLOs in a shared template | SLOs are trended, checked against user feedback, and tightened or loosened with evidence | SLOs are agreed with customers and suppliers and aligned to dependent services and contracts |
| Error budget and policy | No budget; reliability versus features decided by argument | A budget is calculated for a few services; no agreed consequences | A written policy, signed by product and operations, with defined triggers | Policy adherence measured, exceptions reviewed, budget informs release planning | Budget decisions coordinated across teams that share dependencies; policy revised as conditions change |
| Alerting and response | Threshold alerts on raw resources; many pages | Some burn-rate alerts; thresholds copied from examples | Multi-window burn-rate alerts for key SLOs, with tickets for slow burn | Alert quality measured and tuned using past incidents | Alerting aligned across service chains, and improvement driven by joint reviews |

## Checklist

- [ ] The critical user journeys for the service are listed, each written from the user's side.
- [ ] Each SLI is defined as good events over valid events, with exclusions written down.
- [ ] Latency SLIs use percentiles and a stated threshold, not averages.
- [ ] Each SLO states its target, window, and where the SLI is measured.
- [ ] The SLO is stricter than any SLA, and the two are reported separately.
- [ ] An error budget policy exists, is signed by product and operations leaders, and names who may grant exceptions.
- [ ] Burn-rate alerts use at least two look-back periods, and slow burns create tickets rather than pages.
- [ ] Each incident record shows the budget it consumed.
- [ ] SLI attainment is compared with support contacts and satisfaction results every month.
- [ ] Every SLO has an owner (a team or role) and a review date, and changes are logged with reasons.
- [ ] No SLO result is used to rank or reward individuals.

## AI prompts

**Draft candidate SLIs from user journeys.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Draft an error budget policy.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Review an SLO for gaming risk.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topics, such as availability, alert quality, and major incidents, and the guardrail that should sit beside each SLO measure.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep every metric in the gaming table and every cross-reference titled.

## Key takeaways

- Choose a few SLIs from what users do, and express each as good events over valid events.
- An SLO below 100 percent is a decision about risk, and the error budget is the room that decision leaves for change.
- Write the error budget policy in advance, sign it at leadership level, and record every exception.
- Alert on burn rate with more than one look-back window, so pages reflect real risk to the objective.
- Guard the definitions: log every change, and compare SLI results with what users report.
- Attribute budget to services and teams, never to individuals, and review each SLO at least quarterly.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
