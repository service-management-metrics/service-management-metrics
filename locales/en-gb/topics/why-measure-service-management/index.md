# Why measure service management

**Teams that build and run services need a small set of honest numbers to see whether their work helps users and is getting better, and agile and ITIL each supply a different half of that picture.**

## Overview and motivation

Every team that builds and runs a service makes decisions all day: what to work on next, whether a release is safe, whether the service desk needs another person, whether an outage was a one-off or a pattern. Without measurement, those decisions rest on memory, anecdote, and whoever spoke last. With the wrong measurement, they can be worse than that, because a number carries an authority that an opinion does not. This topic explains why measuring is worth the effort, what each tradition contributes, and what it costs to get it wrong.

Two traditions meet in this book. [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development) is a set of values and practices, stated in the Agile Manifesto of 2001, that favours working software, close collaboration with customers, and responding to change. Its measurement habits are empirical and local: a team inspects its own flow, looks at what it delivered, and adapts. [ITIL](https://en.wikipedia.org/wiki/ITIL), originally the Information Technology Infrastructure Library, is a body of guidance for [IT service management](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), the practice of designing, delivering, and improving IT services. Its measurement habits are service-oriented and shared: agreed service levels, a catalogue of services (ITIL's own spelling is "service catalogue"), and a continual improvement discipline. In ITIL 4, the 2019 edition of the framework, measurement and reporting is one of the general management practices, and continual improvement is both a practice and a guiding principle. Check the framework owner's current publications before relying on version details, because the framework continues to evolve.

The two views differ in useful ways. Agile asks "are we building the right thing, and how smoothly does work flow?" ITIL asks "is the service meeting the needs of the people who use it, and is it reliable, supportable, and affordable?" A team that measures only flow can ship quickly into a service that users find unreliable. A team that measures only service levels can hit every target while delivering change so slowly that the service stops being relevant. The [DevOps](https://en.wikipedia.org/wiki/DevOps) movement grew from the observation that building and running are one system, and so the numbers describing it should be read together. [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), the discipline Google described in its published books, adds an explicit link between reliability targets and the pace of change.

Three terms recur throughout the book. A **measure** describes something about the work or the service. A **metric** is a measure with a defined formula, unit, and data source, so two people computing it get the same answer. A **guardrail** is a second measure or practice, chosen in advance, that moves if the first is being gamed. The warning behind guardrails is [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): when a measure becomes a target, people start to steer the number rather than the work (see topic 1.2, Goodhart's law and the psychology of metrics).

### What measurement is for

Measurement earns its place when it does one of four jobs.

- **See.** Make invisible work visible: the queue nobody looks at, the incident pattern across three teams, the change that waits nine days for a slot.
- **Decide.** Inform a choice between two options, such as whether to automate a request type or fix the defect that causes it.
- **Learn.** Test a belief. If the team thinks a new review practice will cut rework, a number can say whether it did.
- **Account.** Give users, customers, and leaders an honest account of what the service delivers, so that trust rests on evidence.

A number that does none of these four jobs is overhead. Later topics repeat this test for each metric family.

### The cost of measuring nothing

A team that measures nothing is not free of numbers. It runs on implicit ones: the loudest complaint, the most recent outage, the manager's sense of how busy people look. Two costs follow.

- **Slow feedback.** Problems that a trend would have shown early arrive as surprises. A creeping rise in repeat contacts looks like bad luck until it is a crisis.
- **No basis for improvement.** A team cannot tell whether a change helped, so it cannot learn which changes to repeat.

### The cost of measuring the wrong things

Measuring the wrong things is often worse than measuring nothing, because it directs effort with false confidence. Counts of tickets closed, lines of code, story points completed, and hours logged are easy to collect and easy to chart, and each is a measure of activity, not of value to a user. The research behind the SPACE framework (Forsgren and colleagues, 2021) argues that productivity cannot be captured by one dimension, and that activity counts used alone mislead.

## Key principles

- **Measure for a decision.** Each metric answers a written question and informs a named choice. If no one can say which, retire it.
- **Join the two views.** Read delivery flow and service health on the same page, so speed is never bought at the expense of stability or the reverse.
- **Measure outcomes first, activity second.** Users being better off is the test. Activity counts support the story but do not tell it (see topic 1.3, Outcomes over output: choosing what to measure).
- **Describe teams and services, never individuals.** Individual rankings corrupt the data and harm collaboration.
- **Start small and grow.** A handful of trusted metrics beats a wall of weakly governed ones.
- **Show the team first.** The people who do the work are the first audience, and the best check on whether the data is accurate.
- **Expect to change.** Definitions, metrics, and targets are revised when they stop informing decisions.

## Metric definitions

The metrics below describe the health of a measurement practice itself, which is where "why measure" becomes testable. A team that can show these is measuring for reasons. Every time-based or count-based formula states its boundaries.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Decision-linked metric share | Share of reported metrics that have a written question and a named decision they inform | metrics with a recorded question and decision / metrics reported on the dashboard at quarter end | percent | Metric register (see topic 1.4, Metrics governance and ownership) | Measurement and reporting; continual improvement | Retrospective actions; working agreements | Quarterly |
| Baseline coverage | Share of in-scope services and teams that have a recorded starting value for each of the agreed core measures | service-and-measure pairs with a baseline recorded in the last 12 months / all in-scope service-and-measure pairs; services outside the catalogue are excluded | percent | Service catalogue and metric register | Service level management; measurement and reporting | Stakeholder review; team dashboards | Quarterly |
| Measurement effort | Staff time spent collecting, cleaning, and reporting metrics by hand | hours logged to manual collection and reporting during the month, excluding time spent acting on findings | hours per team per month | Time notes or a short team survey | Measurement and reporting | Retrospective time budget | Quarterly |
| Data age at review | How old the newest data point is when the group meets to discuss it | review meeting timestamp minus timestamp of the latest data point on the dashboard; computed per metric, reported as median and 85th percentile | days | Dashboard refresh log | Measurement and reporting | Stakeholder review | Per review |
| Improvement follow-through | Share of improvement actions raised from metric reviews that are completed or deliberately closed within the agreed window | actions completed or closed with a reason within 90 days of being raised / actions raised in the period, counted from the date logged in the improvement register | percent | Continual improvement register or backlog | Continual improvement | Retrospective action items | Quarterly |

Measurement effort deliberately counts only manual work. Time spent reading the data and deciding what to do is the point of the exercise and is excluded, so that automating collection shows up as progress.

## Recommendations

### Start with purpose

**1. Write the reason before the metric.** For each proposed measure, write one sentence: "We measure X to decide Y." If the sentence cannot be written, the measure is not ready. This single habit removes most vanity metrics before they enter a dashboard.

**2. Name the audience and the decision.** The same number means different things to a team, a service owner, and an executive. Write down who will read it and what choice it supports. A team working view may carry twenty measures. What goes to leadership should be a small, stable set (see topic 11.1, Designing a service metrics dashboard).

### Use both traditions

**3. Pair a flow measure with a service measure.** Choose at least one measure of how work moves, such as lead time or work item age (see topic 2.2, Lead time, cycle time, and flow efficiency), and at least one measure of how the service behaves, such as incident recurrence or a service level indicator (see topic 5.2, SLIs, SLOs, and error budgets). Showing them together prevents the common failure in which speed and stability are managed by different groups looking at different charts.

**4. Treat delivery and operations as one system.** Research summarised in *Accelerate* (Forsgren, Humble, and Kim, 2018) reports that software delivery performance can be described with four measures that balance throughput and stability. Whatever set a team adopts, keep change-related and incident-related numbers close enough that a rise in one prompts a look at the other (see topic 2.8, DORA metrics).

### Measure honestly

**5. Prefer a few measures that pull against each other.** A single number invites over-optimisation, so choose pairs such as speed with quality, volume with outcome, and cost with experience. The pair does not need to be a formula. It needs to appear on the same page.

**6. Record a baseline before you change anything.** Without a starting value, an improvement claim is a story. Capture a few weeks of data first, including the spread of values as well as the average (see topic 1.6, Statistical literacy for service metrics). Baselines also protect teams: they show that a bad quarter followed a change in how work was counted rather than a decline in performance.

### Build the habit

**7. Review on a cadence that matches the decision.** Flow measures suit a weekly conversation, or one held at each step of continuous software delivery. Service level and cost measures suit a monthly or quarterly one. A metric reviewed at the wrong rhythm either creates noise or misses the moment when action would have helped.

**8. Close the loop with improvement work.** A review that ends with "interesting" has wasted its data. End each review with one or two named actions, an owner, and a date, and track their completion. ITIL's continual improvement practice and the agile retrospective are two names for the same discipline (see topic 9.5, Continual improvement metrics).

**9. Say what you will not use the numbers for.** State plainly that team metrics will not be used to rank or reward individuals, and that definitions will be changed openly. People cooperate with measurement when they trust how it will be used (see topic 11.3, Rolling out metrics without breeding fear).

## Gaming vectors and guardrails

Even metrics about measurement can be gamed. Each row below pairs the metric with the usual way it is bent and the check that would reveal it.

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Decision-linked metric share | Writing a plausible question and decision for every metric after the fact to raise the percentage | Sample the decision log: ask what changed because of the metric, and check the date the entry was written against the date the metric first appeared |
| Baseline coverage | Recording a baseline once and never refreshing it, or choosing a convenient quiet period | Require a stated date range and sample size with each baseline; review baselines after major changes to the service |
| Measurement effort | Moving collection work off the books by doing it unlogged, or by shifting it to a supplier | Compare with a short survey of how long people say reporting takes; include supplier effort in the review |
| Data age at review | Refreshing the dashboard just before the meeting while the underlying records are still stale | Report the age of the newest record in the source system as well as the refresh time |
| Improvement follow-through | Closing actions with a reason of "no longer relevant" to hit the percentage, or splitting actions into trivial pieces | Review the reasons given for closed actions each quarter, and track whether the measure the action targeted moved |

A healthy reading is a practice that is visibly alive. Metrics join and leave the register for written reasons, baselines are fresh, actions from reviews are finished or honestly dropped, and the team spends more time acting on the data than collecting it. A perfect score on every row is a prompt to sample the underlying records, not a reason to celebrate.

## Trade-offs: pros and cons

| Choice | Strength | Weakness |
| --- | --- | --- |
| Measure little | Low cost; low risk of gaming; high trust | Blind spots; decisions rest on anecdote |
| Measure a lot | Broad coverage; early warning on many fronts | Attention is diluted; governance is thin; collection cost grows |
| Joined view | Balances speed and stability; supports shared ownership | Needs agreed definitions across teams and a common place to look |
| Targets on metrics | Gives direction and urgency | Invites gaming; needs a paired guardrail |
| Metrics without targets | Encourages honest discussion | Can drift into reports nobody acts on |

The practical answer is a small joined set, with targets used sparingly for conditions that are well understood and that users have asked for, such as a service level objective. Everything else is a question to discuss. The aim is not to remove judgement from decisions but to feed it better evidence.

## Questions to discuss with your team

**1. What decision did we make last quarter that a number actually changed?**
Ask the group to recall specific decisions and then work out which, if any, depended on data. If the list is short, that is useful information: it means much of the current reporting is not earning its keep. The facilitator should record the metrics that did change decisions, because they are candidates for protection. Then ask which decisions were made on instinct and whether a number could have helped.

**2. Which of our current numbers describe activity, and which describe value to users?**
Put the current dashboard on a screen and mark each metric as activity (tickets closed, builds run, points completed) or outcome (users able to work, problems not recurring). Do not argue about borderline cases for long. The point is to see the balance. Where there is only activity, ask what outcome the activity is supposed to produce and how the team would know.

**3. Where do delivery and operations numbers live today, and do the same people look at both?**
Trace where each family of measures is stored and who reviews it. Teams are often surprised to find that change data is reviewed by one group and incident data by another, with no shared meeting. Ask what pattern might be missed because the two are never seen together. Agree on one place or one meeting where they meet.

**4. What are we not measuring that we would regret not knowing?**
Invite worries rather than metrics: "I am afraid we would not notice if..." Work from the answers to candidate measures, and then to the cheapest data that would show them. Keep the list short.

**5. What would we need to believe about our numbers before showing them to leadership?**
Discuss what makes the data trustworthy: stable definitions, sampled accuracy checks, and agreement on exclusions. List the doubts the team has, even small ones, such as a status used inconsistently. Decide which doubts must be fixed before wider sharing and which can be disclosed with the number.

**6. If we could keep only three metrics for the next quarter, which would they be and why?**
The constraint forces priorities. Ask each person to write three, then compare. Look for agreement on outcomes and disagreement on activity measures. Ask what guardrail each of the three needs.

## Four perspectives

### Product and delivery teams

Delivery teams benefit most from fast, local feedback: how long work waits, where it queues, how often changes cause problems. They should keep a rich working view for themselves and publish a small set outward. Teams should resist the pull to measure output volume as a proxy for value, and should pair speed measures with quality measures from the start (see topic 2.1, Flow measures).

### Service and operations teams

Operations teams already live with numbers: volumes, response and resolution times, availability. The opportunity is to move from reporting what happened to explaining why, through recurrence, root causes, and the share of work that is unplanned (see topic 2.9, Operational work and unplanned work). They should also bring their data into planning conversations with delivery teams, so that reliability work is argued from evidence rather than from complaint.

### Leadership and governance

Leaders set the incentives, often by accident, through the questions they ask. A leader who asks "why is this red?" teaches teams to hide red. A leader who asks "what did you learn, and what do you need?" teaches teams to report honestly. Governance bodies should ask for the register, the guardrails, and the improvement actions alongside the numbers, and should fund the work that a bad number reveals (see topic 1.4, Metrics governance and ownership).

### Customers and users

Users judge the service by whether it works and whether problems are put right, not by internal measures. Their own words, in surveys, complaints, and comments, belong beside the operational numbers as a check on whether the team is measuring what matters (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer runs a service desk, an operations team, and three product teams that build the storefront, payments, and fulfilment services. The numbers below are illustrative.

Leadership asks why customers complain about slow checkout when the delivery teams report that they ship every day and the operations team reports that availability is 99.9 percent. Each group is right by its own measures, and nobody has looked at them together. The head of service management proposes a one-page joined view for the checkout service, built from data the teams already collect.

The view shows four things for the last twelve weeks. Change lead time has a median of 2 days and an 85th percentile of 9 days. The change fail rate is 8 percent. Incidents on checkout number 14, of which 6 share one cause, a slow database query introduced by a recent release. The median time to restore is 40 minutes, but the page-load time at the 95th percentile has crept up over six weeks, a pattern the availability figure does not show because the service stayed technically up.

The group sees what was hidden. Availability was measured as "the checkout responds," while users experience "the checkout responds quickly enough." The product team and operations team agree to add a latency indicator for checkout with an objective set by the product owner after reading customer comments, to treat the repeated incident cause as a problem record with an owner, and to review the joined view fortnightly. They record one decision: pause new checkout features for a stretch of continuous software delivery to fix the query and add a performance check to the release pipeline.

A gaming risk appears within a month. The operations team notices that two of the 14 incidents had been opened as "service requests" because the request category carries no resolution target. The team realises that a target on incidents had nudged people to categorise borderline cases as requests. They add the recategorised share to the view and sample ten tickets each month. After the change, the 95th percentile page-load time falls, repeat incidents drop, and the team keeps the view because it has changed a decision.

## Agile, AI, automation, and analytics

### Agile

Continuous delivery and continuous stakeholder involvement give you a steady supply of small changes and regular feedback, which is exactly what a handful of honest numbers needs. A useful practice is to review the same small set of measures at each regular improvement conversation and ask what the team will change next. The caution is to avoid treating the review as a status report: a number shown without a decision attached is overhead.

### AI

AI-assisted work can raise output counts such as tickets drafted, changes proposed, or articles written, without raising the value a user receives. Pair any volume measure for AI-assisted work with a quality measure, such as the share of drafts a person had to correct or the repeat contact rate for AI-answered requests. The caution is that a number about AI use shows adoption, not benefit, so say what it cannot show.

### Automation

Collect timestamps and statuses automatically from the system of record, so nobody types numbers into a report. A practice worth adopting early is a small automated check that flags missing timestamps and impossible sequences. The caution is that automation also needs measuring: a pipeline or bot that fails silently makes every number downstream look healthy.

### Analytics

Decide the question and the decision before building the chart, and show how many items stand behind each rate. Use percentiles and trends instead of single averages, and mark every change of definition on the chart. The caution is uncertainty: a small count of items can move a percentage a long way, so avoid acting on one month of data. For ITIL 5 specifically, see topic 1.8, ITIL 5 measurement and value outcomes.

## Sector lens

**Startup.** Small teams have little process and strong trust, which helps. The risk is importing a large enterprise dashboard before there is a need. Start with two or three measures the founders will read weekly, such as lead time for change, a simple reliability indicator, and direct user feedback, and write down their definitions.

**Small business.** The person running IT often reports to the owner, and a single customer complaint can outweigh any chart. Keep the set small, use the data your tools already produce, and favour conversations with users. Treat vendor-supplied reports with some care, since vendors have their own incentives.

**Enterprise.** Scale multiplies the demand for comparable numbers and the pressure to game them. Use a small standard set with written definitions, keep team working views separate from roll-ups, and avoid comparing teams that run very different kinds of services. A metric register, shared definitions, and a review cadence become essential.

**Government and public sector.** Contract service levels, audit requirements, and public reporting obligations can make some measures non-negotiable. Treat them as design inputs: meet them, show a guardrail beside them, and state the definitions used. Public accountability raises the cost of hiding bad news, so build safe internal channels for candid reporting (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation for measuring is better decisions at lower cost. Measurement supports prioritisation, shows where waste sits, gives early warning of service decline, and provides evidence for investment requests. 

The cost has several parts. There is tooling, which is often already owned: the ticketing system, the issue tracker, version control, and monitoring. There is staff time to define metrics, build views, and maintain a register. There is the recurring cost of review meetings, which is the largest and the most worthwhile. The total cost of ownership (TCO) of a measurement practice also includes the cost of acting on findings, since an insight with no budget for the fix has little return.

The return is hard to state with a universal figure, and this book does not invent one. A useful way to build the case is to measure your own baselines before and after a change: time spent on manual reporting, repeat contacts, decisions reversed because the data was wrong, and surprises found late. The pattern to expect is fewer surprises, shorter arguments, and better agreement between operational numbers and user experience. A simple [return on investment](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) comparison of effort spent against effort saved is a reasonable starting point, and topic 7.7, Return on investment and business case, covers the method.

## Anti-patterns and pitfalls

- **The dashboard of everything.** Dozens of charts, no owners, no decisions. Choose a few, name the decision each informs, and retire the rest.
- **One-sided measurement.** Speed without stability, or stability without relevance. Pair a flow measure with a service measure.
- **Measuring people.** Individual rankings corrupt data and discourage help. Report at the level of teams and services.
- **Targets before baselines.** A target with no starting value is a guess. Record a baseline first, and set targets after at least one review cycle.
- **Reports with no actions.** A review that produces no changes teaches people to ignore it. End each review with a named action, owner, and date.
- **Silent definition changes.** Trend lines become meaningless. Log every change with its reason and mark it on the chart.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Purpose and selection | Metrics chosen because the tool offers them | Some metrics have a stated purpose | Each reported metric has a written question and decision | Metric set reviewed against decisions and retired when unused | Metrics co-designed with users and suppliers around shared outcomes |
| Joined view of agile and ITIL | Delivery and service data kept apart | A few teams view both together | A common view of flow and service health per service | Joined view trended and linked to improvement work | Cross-team and supplier views tied to user outcomes |
| Baselines and effort | No baselines; manual collection | Baselines for some services; mixed collection | Baselines recorded for core measures; collection mostly automatic | Baselines refreshed after changes; effort tracked and reduced | Baselines and definitions adjusted continually as services change |
| Use in improvement | Numbers noted and forgotten | Occasional actions after bad weeks | Every review ends with named actions | Action follow-through measured and funded | Improvement flows from everyone and is visible across teams |

## Checklist

- [ ] Each reported metric has a written question and a named decision it informs.
- [ ] The audience for each view is named, and team views are separate from leadership views.
- [ ] At least one flow measure and one service measure appear on the same page.
- [ ] A baseline with a date range and sample size exists for each core measure.
- [ ] Every time measure states where the clock starts and stops.
- [ ] Every metric has a guardrail shown beside it.
- [ ] Manual collection effort is known, and the largest manual task has been reviewed for automation.
- [ ] Teams see their own data before leadership does.
- [ ] No individual ranking, pay, or discipline is linked to a metric.
- [ ] Each review ends with at least one named improvement action, owner, and date.
- [ ] At least one metric has been retired or redefined in the past year.

## AI prompts

**Draft the purpose statement for each metric.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Join delivery and service views.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Plan a baseline.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Prepare a review that leads to action.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric you are considering and its paired guardrail.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new or revised metric topic keeps the purpose statement, gaming vector, and guardrail.

## Key takeaways

- Measure to see, decide, learn, and account; a number that does none of these is overhead.
- Agile supplies fast, local feedback on flow; ITIL supplies shared, service-level views of reliability and value. Read them together.
- Measuring nothing leaves decisions to anecdote, and measuring the wrong things directs effort with false confidence.
- Start with a few metrics, each with a written purpose, a baseline, and a guardrail.
- Describe teams and services, never individuals, and let the team see its data first.
- Close the loop: a review that produces no action wastes the data.

## References and further reading

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
