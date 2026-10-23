# DORA metrics

**The DORA metrics describe how quickly and how safely a team's software changes reach production, so read the speed measures and the stability measures together, compute them from pipeline and incident events, and use them to start conversations about a delivery system, never to rank teams or people.**

## Overview and motivation

The DORA metrics come from the research programme of [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), a long-running study of how software delivery practices relate to team and organisational outcomes. Nicole Forsgren, Jez Humble, and Gene Kim presented the early findings in the book [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) in 2018, and the programme has continued under Google Cloud with an annual report. The research asked which measurable aspects of delivery predict good outcomes, and settled on a small set of software delivery performance measures that can be computed from the delivery pipeline and the incident record.

As of October 2026, the DORA website describes five software delivery performance metrics, split into two groups. Three describe **throughput**, meaning how fast changes move: change lead time, deployment frequency, and failed deployment recovery time. Two describe **instability**, meaning how often a release causes trouble: change fail rate and deployment rework rate. Earlier publications described four metrics, with "time to restore service" in place of failed deployment recovery time and without the rework rate. Definitions have been refined over the years, so always state which edition of the guidance you are following and the date you last checked it.

The research finding that made the metrics famous is that speed and stability tend to move together across teams. Teams that deployed often and had short lead times were not, on average, paying for it with more failures. This overturns the old assumption that going faster means breaking more. It is a pattern in survey and pipeline data, not a law, and it holds for teams that have invested in practices such as [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), small batches, automated testing, and fast feedback. The metrics are signals of those underlying capabilities. They are not the capabilities themselves.

The terms below recur in this topic.

- A **deployment** is the act of putting a version of the software into a given environment. This topic means production unless it says otherwise.
- A **change** is a set of modifications to the software, commonly one or more commits that ship together. In ITIL 4 the word has a wider meaning, covering any addition, modification, or removal that could affect services, and the [ITIL](https://en.wikipedia.org/wiki/ITIL) practice that governs it is change enablement.
- A **failed deployment** is a deployment that causes a degraded service or an outage in production and needs remediation, such as a hotfix, a rollback, or a patch. Your team writes the exact rule down, because the research leaves it to local definition.
- A **rollback** is the act of returning production to the previous known good version.
- A **percentile** is a value below which a stated share of observations fall. The 85th percentile of lead time is the number that 85 percent of changes beat.

The agile and ITIL views meet on this ground. An agile team sees these numbers as feedback on its engineering practice and its working agreements. An ITIL practitioner sees them as outcome evidence for change enablement, release management, deployment management, and incident management. The tension is usually about control. A traditional change approval board tries to reduce failure by inspecting each change before it ships. The DORA research found that heavy external approval was not associated with better stability, and that peer review, automated testing, and small changes were. In ITIL 4, change enablement allows for this by separating standard, normal, and emergency changes and by letting low-risk changes be pre-authorised (see topic 4.3, Change enablement metrics).

The metrics also have limits that the research states itself, and the practical advice in this topic builds on them. They describe a delivery system for one application or service, they are meant for improvement conversations, and they say nothing about whether the work being shipped is valuable. A team can post excellent numbers while shipping the wrong thing. For that reason this topic sits beside, and not above, the flow measures (see topic 2.1, Flow measures), the service reliability measures (see topic 5.2, SLIs, SLOs, and error budgets), and the outcome measures (see topic 1.3, Outcomes over output: choosing what to measure).

Finally, the metrics invite [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) the moment they appear on a leadership dashboard. Deployment frequency is the easiest to inflate and failed deployment counts are the easiest to hide. Every recommendation below therefore pairs a measure with a check on how it could be bent (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Compute from events, not from memory.** Deployments come from the pipeline, failures and recoveries from the incident record, and lead time from version control joined to the pipeline (see topic 1.5, Data sources and instrumentation).
- **Read speed and stability as one picture.** A fast team with rising failures, or a stable team that ships quarterly, is telling you something that neither half shows alone.
- **Measure a service or application, not a person.** The unit of analysis is a delivery system. Individuals do not deploy alone, and ranking them destroys the data.
- **Compare a team with its own past, not with another team.** Context differs sharply between a payments service, a data platform, and a mobile app, and the research itself warns against using the metrics as a league table.
- **Use distributions for times.** Lead time and recovery time have long tails, so report the median and a high percentile (see topic 1.6, Statistical literacy for service metrics).
- **Treat the metrics as symptoms.** When a number moves, look for the cause in the capabilities beneath it, such as batch size, test automation, review practice, and architecture, and then run an experiment.
- **Write the definitions down.** Failure, deployment, and "start of work" are judgement calls. Record the choice and keep it stable so the trend means something.

## Metric definitions

The five metrics below follow the DORA guidance as of October 2026. The formulas state the clocks and exclusions your team should write down. Where the research leaves a boundary open, the table shows a sensible default and the recommendations explain the choice.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change lead time | Time for a committed change to reach production | Clock starts at the first commit of the change (or its merge to the main branch, if stated in the definition) and stops when the deployment to production completes successfully; report the median and the 85th percentile of changes deployed in the period; changes never deployed are excluded and reported separately as work in progress | Hours or days | Version control joined to the deployment pipeline | Deployment management; release management; change enablement | Cycle time; Lead time to production | Weekly or per release, reviewed monthly |
| Deployment frequency | How often a team deploys to production | Count of successful production deployments of the application in the period / days in the period; failed or rolled back deployments are excluded from the success count; deployments to test environments are excluded | Deployments per day or per week | Deployment pipeline event log | Deployment management; release management | Continuous delivery; releasing at the end of each increment | Weekly |
| Failed deployment recovery time | How long it takes to recover when a deployment causes a production failure | Clock starts when the failure is detected or reported (the same rule every time) and stops when service is restored for users; report the median and the 85th percentile for failed deployments in the period; incidents not caused by a deployment are excluded | Minutes or hours | Incident record joined to deployment events and monitoring alerts | Incident management; service continuity management | Time to recover; restoration work | Per failure, reviewed monthly |
| Change fail rate | Share of production deployments that cause a failure needing remediation | Deployments that required a hotfix, rollback, patch, or incident response / all production deployments in the period; the rule that links a failure to its deployment is written down and applied the same way each time | Percent | Deployment events joined to incidents, rollbacks, and hotfix deployments | Change enablement; incident management | Definition of done; escaped defects | Monthly |
| Deployment rework rate | Share of production deployments that were unplanned and made to fix a user-facing problem | Unplanned deployments made in response to a production issue / all production deployments in the period; planned deployments that happen to contain a fix are excluded; the rule for "unplanned" is written down | Percent | Pipeline log tagged by deployment reason, linked to incident or defect records | Change enablement; problem management | Unplanned work; bug fix released outside the plan | Monthly |

Two notes on the table. First, change fail rate and deployment rework rate overlap and are not the same thing: a failure the team notices and rolls back without any new deployment counts in change fail rate but not in rework rate, while a planned fix that the team schedules does not count in either. Second, the research treats **deployment** as the unit and counts per application, so a platform with fifty services has fifty sets of numbers, not one.

## Recommendations

### Start with definitions and clocks

**1. Write a one-page definition for each metric before you chart it.** State what counts as a deployment, which environment is production, where the clock starts for lead time, and how a failure is linked to a deployment. Put the page in the metric register (see topic 1.4, Metrics governance and ownership). A definition that lives only in someone's head will drift the first time the tool or the team changes.

**2. Choose a lead time start and stay with it.** The most common choices are the first commit on the change, the merge to the main branch, and the creation of a ticket. The first commit measures the delivery system and ignores time the work sat in a backlog. The ticket start measures more of the customer's wait but mixes in prioritisation (see topic 2.2, Lead time, cycle time, and flow efficiency). Use one consistently and say which in every chart.

**3. Attribute failures with a stated rule.** A failure belongs to a deployment when, for example, an incident opens within a stated window after the deployment and its cause analysis points at that change, or when a rollback or hotfix is tagged to it. Pick a rule that people can apply without argument, review a sample of cases each quarter, and keep the rule the same long enough to see a trend.

### Instrument from the pipeline

**4. Take deployment events from the pipeline, not from a spreadsheet.** A [CI/CD](https://en.wikipedia.org/wiki/CI/CD) system that records each production deployment with a timestamp, a version, and a result gives you deployment frequency and the stop of the lead time clock with no human entry. Hand-entered counts are late and inconsistent, and they invite the backdating problems described in topic 1.5, Data sources and instrumentation. The open-source Four Keys project from the DORA team is one worked example of collecting these events, though any equivalent pipeline of your own will do.

**5. Join the incident record to deployments.** Failure and recovery measures need two sources: the deployment log and the incident tool. Add a field to the incident record for "caused by deployment" and the deployment identifier, filled in during resolution and checked in the post-incident review (see topic 4.2, Postmortem and learning metrics). Without the join, change fail rate becomes a guess.

**6. Tag the reason for each deployment.** Rework rate needs to separate planned deployments from unplanned fixes. A simple label on the pipeline run, such as "planned change" or "fix for production issue," is enough. Keep the label list short, so that people do not have to think about it under pressure.

### Report the numbers honestly

**7. Report distributions and counts, not a single average.** Show the median and the 85th percentile for lead time and recovery time, with the number of observations behind each. A week with two deployments and one failure has a 50 percent change fail rate that means very little, so show the counts beside the percentage and prefer a longer window for rates (see topic 1.6, Statistical literacy for service metrics).

**8. Show the throughput and instability groups side by side.** Put the three throughput metrics and the two instability metrics on one view, per service, with the trend over at least a quarter. Never publish deployment frequency without the failure measures next to it. If a leader asks for one number, explain that there is no single DORA score, and offer the two-group view instead.

**9. Keep comparisons within a team's own history.** A team that moves its median lead time from nine days to five has learned something. Ranking it against another team with a different architecture, regulatory load, or release train proves little, and it teaches both teams to protect their numbers. When you must roll up for governance, show the spread across services and the improvement trend, not a league table (see topic 1.2, Goodhart's law and the psychology of metrics).

### Improve the system the numbers describe

**10. Reduce batch size first.** Small changes shorten lead time, make failures easier to diagnose, and lower the cost of a rollback. Techniques include [feature toggles](https://en.wikipedia.org/wiki/Feature_toggle), trunk-based working, and splitting work so that each increment can ship alone (see topic 2.7, Pull request and code review metrics). Track the median size of changes beside lead time so that you can see whether the batch is actually shrinking.

**11. Invest in fast detection and fast reversal.** Recovery time falls when the team can see a failure within minutes, and when it can [roll back](https://en.wikipedia.org/wiki/Rollback_(data_management)) or switch off a change without a new build. A [canary release](https://en.wikipedia.org/wiki/Canary_release), a feature toggle, and an automated rollback each shorten the interval between failure and restoration. Measure the time from deployment to detection separately, because slow detection hides inside a recovery time number (see topic 3.3, Incident response and resolution time).

**12. Use the numbers to choose a capability to improve.** Pick one weak metric, ask why it is weak, and select a practice from the research's capability list that addresses the cause, such as test automation, loosely coupled architecture, or lightweight change approval. Run the change for a quarter and look at the trend. Pair the experiment with a retrospective topic so that the team owns the improvement (see topic 9.5, Continual improvement metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Change lead time | Moving the start of the clock later, such as starting at merge instead of first commit; merging early to a long-lived branch; excluding hard changes as "not code"; shipping trivial changes through the pipeline to drag the median down | Percentile and age of work in progress; a fixed written start of clock; sample of the slowest 10 percent of changes each quarter; change size distribution |
| Deployment frequency | Splitting one change into many trivial deployments; redeploying unchanged builds; counting deployments to staging or empty configuration changes | Change size per deployment; share of deployments that contain user-visible change; change fail rate and rework rate beside it |
| Failed deployment recovery time | Starting the clock late or closing incidents early; reclassifying a failure as a new incident after a partial fix; raising the severity threshold for "failure" | Recurrence of the same incident within a stated window; clock start taken from monitoring alerts; customer-reported impact duration |
| Change fail rate | Not linking incidents to deployments; counting only failures that cause a full outage; widening the window so failures fall outside it; fixing forward and calling it a new change | Review a sample of incidents against the deployment log each quarter; track the proportion of incidents with a deployment link recorded; deployment rework rate |
| Deployment rework rate | Labelling fixes as planned work; bundling a fix into a scheduled release; avoiding fix deployments by delaying the fix | Defect and escaped-defect counts from the tracker; age of open production defects; the tag audit on a sample of deployments |

A healthy reading shows lead time and recovery time shrinking or steady at a low level, deployment frequency stable or rising with small changes, and failure and rework rates flat or falling, with counts large enough to trust. Suspicious readings include a sudden jump in deployment frequency with no change in the work, a failure rate that falls to zero within a month, and a recovery time that drops while customer complaints stay the same. Each one calls for a look at the instrument before a celebration.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Use all five DORA metrics per service | Research-based, balances speed against stability, computed from objective events | Needs a pipeline and an incident record that join cleanly; silent on whether the work was valuable |
| Report only deployment frequency and lead time | Easy to collect from the pipeline | Rewards speed alone and invites the exact gaming that stability measures catch |
| Use local definitions per team | Fits the team's architecture and release style | Teams cannot be compared, and roll-ups are unreliable |
| Use one organisation-wide definition | Consistent reporting; simple governance | Fits some systems badly, such as mainframes with batch windows or regulated releases |
| Compare teams against published performance bands | Gives leaders a quick sense of position | Ignores context, and the research warns that the bands are not targets for each team |
| Use the metrics for team self-improvement | Builds ownership; supports honest data | Offers less comfort to leaders who want a single score |

The central tension is between comparability and honesty. The more a number is used to judge teams, the more the data bends, and the less it helps the team that owns it. Use the metrics to support improvement first, accept imperfect comparability, and keep leader-level views to trends and spread. Where regulated reporting needs a standard definition, document it and keep the team-level improvement view separate.

## Questions to discuss with your team

**1. Which of our five DORA numbers come from events, and which come from someone's recollection?**
Trace each metric back to its source. Note where a person types a date or decides whether something counts as a failure. The facilitator should help the group rank the manual steps by how much they could distort the number, and agree which one to automate first.

**2. Where exactly does our lead time clock start and stop, and does everybody agree?**
Ask three people to describe the start and stop of the clock for the last change that shipped. Compare the answers. Differences usually show up around the first commit, the merge, a ticket, and the approval step. Agree on one definition and write it down, and discuss what waiting time the chosen definition hides.

**3. What counts as a failed deployment for us, and who decides?**
Walk through the last five production incidents and ask whether each one belongs to a deployment. Disagreements show where the rule is unclear. Discuss what happens to a failure that is fixed with a configuration change, a rollback, or a quick patch, and decide how each one is recorded.

**4. If deployment frequency doubled next quarter, what would we check before calling it good news?**
Invite the group to name the ways the number could rise without delivering more value. Look at change size, the share of deployments with a user-visible change, and the failure and rework rates. The facilitator should note which checks already exist on the dashboard and which need to be added.

**5. How do these numbers get used by people outside the team?**
Ask who sees them, in what form, and what they do with them. Listen for comparison with other teams, targets set from outside, and use in individual reviews. Discuss what the team would need to see change in that use before it could trust its own data, and who has the standing to make the change.

**6. Which one capability would most improve our weakest number, and what is a small experiment to try?**
Choose the weakest metric and talk through its likely causes, such as large batches, slow review, flaky tests, or a manual release step. Pick one cause and design a four- to six-week experiment with a way to see the effect. Agree a date to review the result and who will bring the data.

## Four perspectives

### Product and delivery teams

Delivery teams own the capabilities that drive these numbers: small changes, automated tests, a fast pipeline, and a habit of reviewing each other's work. They should use the metrics as a mirror for their own engineering practice, set their own improvement goals, and resist pressure to report a single number upward. They also decide the definitions, so they carry the duty to keep them honest (see topic 2.7, Pull request and code review metrics).

### Service and operations teams

Operations teams hold the incident record that failure and recovery measures depend on. They help the delivery team by tagging incidents with the deployment that caused them, by supplying monitoring that detects failures quickly, and by joining the review of each failed deployment. They should watch that the speed of delivery is not buying instability that they absorb as on-call load (see topic 5.7, Toil and on-call metrics), and ask for the rollback and detection investments that reduce recovery time.

### Leadership and governance

Leaders should ask for trends and spread across services, the two groups of metrics together, and the improvement experiments behind them. They should avoid targets that lock in a number, such as "deploy daily," and avoid using the metrics in individual reviews. Governance bodies can use the numbers as evidence that a lighter change approval path is safe, or as a reason to reconsider it, by showing whether stability stayed steady as the process changed (see topic 4.4, Change failure and rework).

### Customers and users

Customers rarely care about deployment counts. They care about how quickly a fix or feature reaches them, how rarely a release breaks something they rely on, and how fast the service returns when it does. Use the DORA metrics as internal evidence that these outcomes are likely, and complement them with customer-facing measures such as availability and satisfaction (see topic 5.3, Availability metrics, and topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer runs a checkout service owned by one product team, supported by a platform team and the service desk. All numbers below are illustrative.

The team has deployed to production about twice a week, with a lead time (first commit to production) of a median 11 days and an 85th percentile of 26 days. Over the previous quarter, 6 of 24 deployments (25 percent, illustrative) were followed by a rollback or an incident. The median recovery time for those failures was 3 hours. The change approval board meets weekly and reviews every change to the checkout service.

The team proposes a plan. It will split large changes, add automated checks in the pipeline, put new behaviour behind feature toggles, and ask the board to pre-authorise low-risk changes that pass the checks as standard changes. The change manager is wary, so the team agrees to report all five metrics monthly and to stop the experiment if the failure rate rises for two consecutive months.

After a quarter, the numbers (illustrative) are 19 deployments per month, a median lead time of 3 days with an 85th percentile of 8 days, a change fail rate of 8 percent, a median recovery time of 40 minutes, and a rework rate of 5 percent. The team is pleased, and a regional manager asks to compare the checkout team's deployment frequency with the other product teams and set a common target.

The team lead brings the rework and failure breakdown to the review and notices a gaming risk. Deployment frequency has been helped by a number of tiny configuration deployments that the pipeline counts, and the median change size is shrinking faster than the actual work. Worse, two incidents last month were fixed by a configuration change that the pipeline logged as a normal deployment tagged "planned," so the rework rate was understated. The change fail rate looked good partly because those two incidents had not been linked to their original deployments.

The decision, recorded in the decision log, has four parts. Configuration-only deployments are counted separately and shown beside the main number. The deployment reason tag is audited monthly on a sample of 10 deployments. The incident tool now requires the deployment identifier when the cause is a change. And the team declines the common deployment frequency target, offering instead a shared view that shows each service's trend and its failure rate. The change manager agrees to keep the pre-authorisation for standard changes, with a review at the end of the next quarter.

## Agile, AI, automation, and analytics

### Agile

The DORA metrics describe how quickly and safely changes reach production, which is the practical core of continuous delivery. A good practice is to read the speed and stability measures together at a regular review with stakeholders and pick one improvement. The caution is that the team can inflate deployment frequency by splitting changes, so watch change size and rework.

### AI

AI-assisted coding can raise change volume and speed up lead time while raising rework or failed changes. Report AI-assisted and other changes together on the same stability measures, and compare failed deployment recovery time and deployment rework rate before and after adoption. The caution is that DORA research on AI is evolving, so check the current published reports before you cite any finding.

### Automation

Compute all five measures from pipeline and incident events automatically, with a clear rule for what counts as a deployment and a failure. Measure the pipeline itself on its own failure and flakiness. The caution is that automation can hide manual steps that sit outside the pipeline, such as an approval by email, so map the real path once.

### Analytics

Report distributions, not just averages, and compare a team with its own past, not with other teams. The decision informed is where the delivery system is slow or fragile. The caution is that cross-team league tables encourage gaming, and the numbers depend on local definitions of a deployment and a failure.

## Sector lens

**Startup.** A small team often deploys many times a day and has thin incident records, so deployment frequency and lead time are easy but failure data is patchy. Start by tagging every rollback and hotfix in the pipeline, and by keeping a simple incident log with the deployment identifier. Do not let a high frequency convince you that stability is fine without checking the failure rate.

**Small business.** A hosted platform or an outsourced developer may deploy only monthly, with little tooling. Count what you can by hand for a few months, ask the supplier for deployment and incident dates in writing, and focus on lead time and failure rate. Use the numbers to decide whether smaller changes delivered continuously would reduce risk, not to chase a band.

**Enterprise.** Many teams, several release styles, and a mix of modern and legacy systems make consistent definitions hard. Agree a common minimum definition for each metric, publish it, and allow a team to add stricter local ones with a stated reason. Roll up by showing the spread and the trend per service rather than an average, and keep team-level detail visible only to the owning team and its supporting groups.

**Government and public sector.** Release windows, audit rules, and procurement contracts shape what is possible, and some systems are run by suppliers. Include delivery and incident data rights in contracts so the metrics can be computed. Use the numbers as evidence that a modernisation programme is shortening lead times without raising failure rates, and report all the metrics together so the results are not selected (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is to shorten the time between an idea and its use while keeping production stable. The cost of the programme has three parts: instrumentation (pipeline events, deployment tags, and the incident join), the review routine (a monthly look at the trends and a quarterly sample of failure and rework cases), and the improvement work the numbers point to, such as test automation or a faster pipeline. The first two are modest. The third is where the real expense lies, and it is spent on engineering capability, not on measurement.

The return comes from decisions that the numbers make easier. A team can show a change board that small changes are safe, and so retire an approval step. A platform group can see which services have slow pipelines or poor rollback and place its investment accordingly. An operations team can argue from data for a better detection tool. Describe the return through patterns you can observe for yourself, such as the time from commit to production, the share of releases that need a fix, and the on-call load per release, before and after a change. Avoid quoting benchmark figures from other organisations as an expected return, since your context will differ. The total cost of ownership is dominated by people's time, so keep the metric set small and automate its collection (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Treating the metrics as a performance scorecard for individuals.** It breaks the research basis and corrupts the data. Report at service and team level only.
- **Setting targets such as "deploy daily" or "lead time under one day."** The target replaces the goal. Set a direction of improvement and an experiment, and keep the number as a signal.
- **Ranking teams against one another or against published bands.** Context differs and gaming follows. Compare a team with its own trend, and use bands only as a loose orientation.
- **Reporting speed without stability.** The pair is the point. Always show the throughput and instability groups together.
- **Letting definitions drift.** Failure, deployment, and the lead time start change quietly with the tool. Log every change to a definition with its reason, and mark it on the chart.
- **Counting deployments of anything.** Configuration pushes, test environment releases, and redeploys of the same build inflate the count. Define a production deployment, and show other kinds separately.
- **Ignoring what is shipped.** Strong numbers can hide work that does not matter. Read them beside flow and outcome measures (see topic 2.9, Operational work and unplanned work).
- **Chasing the metric instead of the capability.** Lead time falls most reliably when batches shrink and tests get faster. Improve the practice and let the number follow.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | Each person defines deployment and failure differently | A few teams document their definitions | One written definition per metric, with clocks and exclusions, in the metric register | Definition changes logged and marked on charts; samples checked each quarter | Definitions revised jointly with suppliers and governance when they stop informing decisions |
| Data capture | Counts assembled by hand from tickets | Pipeline data for some services; incidents linked by hand | Deployments, reasons, and incident links captured automatically for most services | Data quality (link rate, tag audit) measured and trended | Events shared across teams and suppliers through agreed interfaces |
| Use of the numbers | Reported upward as a single score | Teams look at their own charts occasionally | Throughput and instability groups reviewed together monthly by the owning team | Trends feed funded improvement experiments with a guardrail | Spread and trends inform platform investment and change policy across the organisation |
| Guardrails against gaming | None | Informal awareness | Paired guardrails listed for each metric | Guardrails and samples reviewed, with gaming cases recorded | Guardrails tuned continually as teams and tools change |

## Checklist

- [ ] The five metrics are defined in writing, with clocks, exclusions, and the date and edition of the DORA guidance followed.
- [ ] Production deployments are recorded by the pipeline with a timestamp, a version, and a result.
- [ ] The lead time start (first commit, merge, or other) is stated and applied consistently.
- [ ] Incidents carry a field for the deployment that caused them, filled in during resolution.
- [ ] Each deployment carries a reason tag, and a sample is audited monthly.
- [ ] Times are reported as the median and a high percentile, with counts.
- [ ] Throughput and instability metrics are shown together for each service.
- [ ] Change size is tracked beside deployment frequency and lead time.
- [ ] The numbers are not used in individual reviews or to rank teams.
- [ ] A named owner reviews the metrics monthly and logs any change to a definition.
- [ ] One improvement experiment, tied to the weakest metric, is running with a review date.

## AI prompts

**Write a one-page definition set for the five metrics.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Check a metric set for gaming risks.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Analyze a data export of deployments and incidents.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Plan an improvement experiment.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related change, release, and incident topics and the guardrail that should sit beside each DORA metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised version of this topic keeps its clocks, gaming vectors, and cross-references consistent.

## Key takeaways

- The DORA metrics are five measures of software delivery, three of throughput and two of instability, and they are most useful read together for one service.
- Compute them from pipeline and incident events with written definitions, because failure and the lead time start are judgement calls.
- Use them to learn about a delivery system and compare a team with its own history, never to rank people or teams.
- Report medians, high percentiles, and counts, and pair every metric with a guardrail that catches its gaming.
- Improve the underlying capabilities, such as small batches, fast detection, and easy rollback, and let the numbers follow.
- State the edition and date of the guidance you follow, since the definitions have been refined over time.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
