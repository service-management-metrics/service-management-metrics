# Work in process and queueing

**A team that is fully busy is a team whose work waits, so measure how much work is in process, how long it queues, and how close the team runs to capacity, and use the arithmetic of queues to set limits before the delays arrive.**

## Overview and motivation

Every service team has a queue, whether or not it uses the word. Incidents wait for triage, requests wait for approval, changes wait for a review slot, and backlog items wait for someone to pull them. Most of the elapsed time in these systems is spent waiting, not working. The measures in this topic explain why the waiting grows, how to see it early, and what a team can do about it.

The central quantity is [work in process](https://en.wikipedia.org/wiki/Work_in_process) (WIP), the number of items that have been started and not yet finished. Agile teams that manage flow make WIP visible on a board and cap it with a WIP limit. Service operations under ITIL count open incidents, requests, and changes, and call the collection a queue or a backlog of records. The two views describe the same thing: items inside a system that has not yet delivered them. This topic uses "work in process" for both, and states the boundary each time (which statuses count as "in process" and which do not), because that boundary decides every number that follows.

The mathematics comes from [queueing theory](https://en.wikipedia.org/wiki/Queueing_theory), the study of waiting lines. Its most useful result for a service team is [Little's law](https://en.wikipedia.org/wiki/Little%27s_law), proved by John Little in 1961. For a stable system, the average number of items in the system equals the average arrival rate multiplied by the average time an item spends in the system. In delivery terms, average WIP equals average throughput multiplied by average cycle time. The law holds regardless of the order in which items are served, which makes it a cheap sanity check on any set of flow metrics (see topic 2.1, Flow measures, and topic 2.2, Lead time, cycle time, and flow efficiency).

The second result is less comfortable. As a shared resource approaches full use, waiting time rises faster and faster. A related approximation, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula), shows that queue delay grows with utilisation in proportion to the ratio of utilisation to the remaining idle fraction, and also grows with the variability of arrivals and of service times. Support and operations work is variable by nature, since incidents arrive in bursts and effort per item differs widely. A team that plans to be 100 percent busy has therefore planned for long waits, and the first major incident turns long waits into a backlog that takes weeks to clear.

Terms used in this topic:

- **Arrival rate** is the number of items entering the system per unit of time.
- **Throughput** (or departure rate) is the number of items leaving the system as finished, per unit of time.
- **Cycle time** is the elapsed time from the moment an item enters the system boundary to the moment it leaves it. This topic uses the same clock as in topic 2.2.
- **Queue time** is the part of the elapsed time during which an item is waiting and nobody is working on it.
- **Utilisation** is the fraction of available capacity that is in use. For a team, capacity is expressed in work hours or in a count of items that can be handled in parallel. Utilisation is a property of a team or a resource pool, never of an individual.
- **WIP limit** is an agreed maximum number of items in a stage or in the whole system. A new item is not started when the limit is reached.
- A **bottleneck** is the stage with the least capacity relative to demand. It sets the pace of the whole chain, a point developed by the [theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) and its idea of the [bottleneck](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Agile and ITIL views meet here: ITIL 4 (2019) treats capacity and performance management, incident management, and service request management as practices that depend on matching capacity to demand, and agile methods express the same idea as limiting work in progress and finishing before starting. [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development) treats unfinished work as inventory with carrying cost and risk.

## Key principles

- **Waiting dominates elapsed time.** In most service and delivery systems, items wait far longer than anyone works on them, so reducing waiting is a bigger lever than working faster.
- **Little's law links the three flow numbers.** Average WIP, throughput, and cycle time cannot be set independently. If you want shorter cycle time at the same throughput, you must lower WIP.
- **Delay grows steeply near full utilisation.** Slack is the price of responsiveness. A team with no spare capacity cannot absorb a burst or an urgent item without making everything else late.
- **Variability amplifies queues.** Uneven arrivals and uneven item sizes lengthen queues even when average load looks acceptable. Reduce variability where you can and buffer it where you cannot.
- **Limit WIP to finish work, not to look busy.** A WIP limit is a trigger for a conversation about blocked work and capacity, not a compliance rule.
- **Measure at the level of the system.** WIP, queue length, and utilisation describe teams and services, never the people in them.
- **Report distributions, not averages.** Queue times are long-tailed, so show the median and a high percentile such as the 85th or 95th (see topic 1.6, Statistical literacy for service metrics).

## Metric definitions

Seven measures cover the topic. Each is defined for a named boundary that the team writes in its metric register (see topic 1.4, Metrics governance and ownership).

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Work in process | Number of items started and not finished inside the agreed boundary | Count of items in "in process" statuses at the snapshot time; items in the backlog or "ready" queue before the first work status and items already done are excluded | items | Issue tracker or ITSM tool status history | Incident management; service request management | WIP count on the board | Daily snapshot, reviewed weekly |
| Queue length | Number of items waiting for work to begin or waiting between stages | Count of items in waiting statuses (for example "new," "awaiting triage," "awaiting review") at the snapshot time; blocked items are reported separately, not added | items | Tracker or ITSM status history | Incident management; change enablement | Ready column and queue columns on a board | Daily snapshot, reviewed weekly |
| Queue time | Elapsed time an item spends waiting before work starts, per stage | Clock starts when the item enters a waiting status and stops when it enters the next active status; time in a status marked "blocked on customer" is excluded and reported as its own figure; report the median and the 85th percentile | hours or days | Status transition timestamps in the tracker or ITSM tool | Service desk; incident management; change enablement | Wait time in a value stream; time in queue columns | Weekly |
| Arrival and departure rate | Items entering and leaving the system per period, and their difference as net queue growth | Arrivals = items that enter the boundary in the period; departures = items that complete in the period; net growth = arrivals minus departures; reopened items count as arrivals only if the team defines them so | items per week | Tracker or ITSM creation and resolution timestamps | Monitoring and event management; incident management | Throughput and cumulative flow diagram | Weekly |
| Team load ratio | Share of team capacity that planned and expected work would consume | Hours of demand expected in the period (arrivals times average effort per item) / hours of capacity available after leave and fixed commitments; the team states how it estimates effort; individuals are never reported | percent | Capacity plan, tracker effort history, rota | Capacity and performance management; workforce and talent management | Team capacity in planned work | Monthly, and at each planning event |
| WIP limit breach rate | Share of days a stage or the system exceeds its agreed WIP limit | Days with WIP above the limit / working days in the period; days when the team recorded a deliberate exception with a reason are reported separately | percent of days | Daily WIP snapshots and the exception log | Continual improvement; incident management | WIP limit working agreement | Weekly |
| Little's law consistency ratio | Check that the three flow numbers agree with each other | Average WIP over the period / (departures per day times mean cycle time in days) for the same boundary and period; a ratio near 1 means the definitions are consistent, a ratio far from 1 means a boundary or clock is inconsistent | ratio | Same tracker data as the other flow metrics | Measurement and reporting | Flow metric sanity check in a retrospective | Monthly |

## Recommendations

### Define the boundary first

**1. Write the system boundary before you count anything.** State which status starts "in process" and which ends it, and which items are excluded (for example scheduled maintenance, or items waiting on a customer). Two teams that count WIP differently will produce numbers that cannot be compared, and a boundary that moves silently will break the Little's law check. Record the boundary in the metric register and change it only with a logged reason.

**2. Separate waiting from working in the status model.** If a single status covers both "queued for review" and "being reviewed," queue time is invisible. Give waiting states their own names, as described in topic 1.5, Data sources and instrumentation, so the transition timestamps reveal the delay. The cost of one extra status is small compared with the value of seeing where items sit.

### Use Little's law as a consistency check

**3. Run the Little's law check each month.** Compute average WIP, throughput, and mean cycle time for the same period and boundary, and see whether they roughly agree. A large mismatch usually means that items are entering or leaving the system without being counted, or that old items are parked in an unattended status. Fix the data before you interpret any trend. The law is a theorem about stable systems, so apply it to periods in which the queue did not grow or shrink dramatically.

### Watch utilisation and queue growth

**4. Plan for slack where variability is high.** For incident handling, on-call work, and any queue fed by random demand, plan below full capacity so a burst does not become a backlog. Teams commonly find that a load ratio that looks comfortable on paper is already too high once interrupts are counted (see topic 2.9, Operational work and unplanned work). Agree the target range with the people who do the work and review it after any major incident.

**5. Track net queue growth as well as queue size.** A queue of 40 items that is shrinking is healthy, and a queue of 15 that grows by 5 items a week is not. Compare arrivals and departures each week, and chart the trend with a [cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), where a widening band for a stage signals growing WIP there. When arrivals exceed departures for several weeks, the queue is growing without limit and a decision is due: add capacity, reduce demand, or change what is accepted.

**6. Read queue time by stage to find the bottleneck.** Break the elapsed time into waiting periods per stage. The stage with the longest queue time and the most items waiting is a candidate bottleneck. Improving any other stage will not shorten the whole system, so direct improvement effort at the constraint, and recheck afterwards because the constraint moves.

### Limit WIP in a way that works

**7. Set the first WIP limit from observation, then adjust.** Start near the current average WIP, or slightly below it, and observe what happens to cycle time and to blocked items. Lower the limit step by step while the team can still keep every person productive on finishing work. There is no universal correct number, and a figure borrowed from another team carries no evidence for yours.

**8. Treat a breach as a prompt, not a violation.** When WIP exceeds the limit, ask what is blocking completion and who can swarm on it. A breach recorded with a reason, such as an urgent production fix, is information. If breaches become routine, the limit is wrong or the system is overloaded, and the response is a capacity conversation rather than a reprimand.

**9. Apply limits to the whole value stream, not one column.** A limit on "in progress" alone lets work pile up in review, testing, and approval queues. Limit the number of items in the system end to end, and add stage limits where a specific queue keeps growing. Shared stages such as a change advisory review or a test environment deserve their own visible limit and their own queue time.

### Handle urgent and variable work deliberately

**10. Give expedited work a policy.** Without one, urgent items quietly exceed every limit and the team cannot tell planned from unplanned load. Define what qualifies, how many expedited items may be in flight, and which work pauses. Count expedited items and their effect on queue time, so the cost of urgency is visible to those who request it (see topic 2.9, Operational work and unplanned work).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Work in process | Moving items to a "parked" or "on hold" status to stay under the limit; splitting items to look smaller; starting work off the board | Count of items in parked statuses and their age; sample the board against the real work; report the oldest item in process |
| Queue length | Closing and reopening items; rejecting new items at the door; renaming waiting statuses so they fall outside the count | Reopen rate and rejection rate beside queue length; review of status definitions at each metrics review |
| Queue time | Starting the clock late by creating the record after work is ready; pausing the clock through blocked or customer-wait statuses; marking an item as in progress when it has only been opened | Distribution of time in blocked and pause statuses; share of items created after they were started; requester-reported wait from a short survey |
| Arrival and departure rate | Closing items quickly to raise departures; splitting one request into many to raise both counts; counting duplicates as arrivals | Quality and reopen measures on closed items (see topic 3.3, Incident response and resolution time); size distribution of items; customer outcome check |
| Team load ratio | Underestimating effort to show spare capacity, or overstating demand to justify headcount; reporting a ratio for a favourable period | Compare estimated and actual effort per item; show the ratio with its trend and the interrupt share; peer review of the estimation method |
| WIP limit breach rate | Raising the limit to stop breaches; hiding breaches by moving items off the board; granting exceptions freely | Number and reasons for exceptions; history of limit changes with dates; cycle time percentile alongside breach rate |
| Little's law consistency ratio | Adjusting the boundary or period until the ratio approaches 1; excluding long-lived items as outliers | Fix boundary and period in advance; publish the excluded items and their count; review changes to the boundary with a reason |

A healthy reading is a team whose WIP is stable or falling, whose queue time percentiles are flat or improving, whose arrivals and departures roughly balance, and whose breaches come with reasons that lead to action. The Little's law ratio hovers near 1 because the data is consistent, not because someone tuned it.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Tight WIP limits | Shorter cycle time, earlier problem discovery, more finishing | Idle time can appear in a stage; needs discipline and some cross-skilling; can frustrate stakeholders who want work started |
| Loose or no WIP limits | Everyone looks busy and requests are accepted quickly | Long queues, slow delivery, hidden blockages, heavy context switching |
| Planned slack capacity | Absorbs bursts and urgent work; keeps response times short | Looks like waste on a utilisation report; needs leadership to accept lower apparent efficiency |
| High planned utilisation | Appears efficient and cheap per hour | Waiting grows steeply as load nears capacity; fragile under any disruption |
| Using Little's law for planning | Simple, general, and quick to apply | Valid only for stable systems and for averages; says nothing about one item |

Limit WIP and keep slack where variability and the cost of delay are high, and accept looser limits where work is steady and independent.

In the simplest textbook model of a single server with random arrivals and service times (an M/M/1 queue), average time in the system is the service time divided by one minus the utilisation: 2 times at 50 percent, 5 times at 80 percent, 10 times at 90 percent, and 20 times at 95 percent. Real teams are not single servers, so treat these figures as the shape of the curve, not a forecast.

## Questions to discuss with your team

**1. What counts as "in process" for us, and do we all count it the same way?**
Ask each person to name the first and last status that makes an item part of WIP, then compare answers. Look for statuses such as "on hold" or "waiting for customer" that some people count and others do not. Agree one boundary and write it down. The facilitator should note how the answers would change the WIP number, because that shows how sensitive the metric is to definition.

**2. Where do our items wait the longest, and who owns that queue?**
Draw the flow from arrival to done and mark the waiting points. Using a recent month of data, estimate the median and 85th percentile wait at each point. Discuss which queue nobody owns, such as an approval step or a shared test environment. Agree one queue to examine in detail and a person to bring the data next time.

**3. How busy is too busy for the kind of work we do?**
Compare the planned load with the share of time actually spent on interrupts and urgent items. Ask what happened to the queue the last time demand spiked. Discuss the idea that a team with no spare capacity cannot respond quickly. The facilitator should steer toward a target range for the load ratio, not a single number, and a plan for what happens when the range is exceeded.

**4. Is our queue growing, shrinking, or steady, and how do we know?**
Look at arrivals and departures for the last eight weeks. A simple chart is enough. Ask whether anyone would have noticed a slow rise before it became a problem, and which signal would trigger action. Agree what a team should do when departures lag arrivals for three weeks in a row.

**5. What would happen if we lowered our WIP limit by one?**
Ask people to predict which items would wait, which would finish sooner, and what they would do when they cannot start something new. Surface fears such as being seen as idle.

**6. Do our numbers agree with each other?**
Take a month of data and compute average WIP, throughput, and mean cycle time. Check whether WIP is roughly throughput times cycle time. If not, hunt for the cause, such as items finished but not closed, or items closed without being started. The facilitator should treat a mismatch as a gift: it points to a data or definition problem that would otherwise distort every other flow metric.

## Four perspectives

### Product and delivery teams

Delivery teams feel the effects of excess WIP as context switching, late feedback, and unfinished work that decays. They gain most from visible WIP limits, small items, and a habit of finishing before starting. A team should look at its own queue times between stages, such as waiting for review, because these delays are usually larger than the time spent coding (see topic 2.7, Pull request and code review metrics).

### Service and operations teams

Operations teams face random demand, so queueing effects are strong. A service desk, an on-call rotation, and a change review board each behave like a queue with variable arrivals. These teams need explicit slack, clear priority rules, and a policy for expedited work so that urgent items do not silently displace everything else (see topic 3.1, Service desk metrics, and topic 5.7, Toil and on-call metrics). Measure queue time at each handoff, and watch for work that bounces between groups (see topic 9.3, Collaboration and handoff metrics).

### Leadership and governance

Leaders influence queues through the demand they accept and the utilisation they reward. They should ask for queue time percentiles and net queue growth as well as utilisation, and expect that a healthy service runs below full capacity. A request to add more projects to a team already at its limit is a decision to lengthen everyone's cycle time, and governance should make that trade-off explicit. Fund capacity for the constraint instead of general efficiency drives (see topic 5.4, Capacity and performance metrics).

### Customers and users

Customers experience queueing as waiting for a response, and they rarely care how busy the team is. They need honest expectations based on the distribution of past waits, a way to see the status of their request, and an escalation path for urgent needs. Limiting WIP may mean slower acceptance of new requests and faster completion of accepted ones, and that choice should be explained to them (see topic 6.2, Experience level agreements).

## In practice: a service management example

A regional hospital's IT department has a service desk, an infrastructure team, and an applications team. All numbers in this example are illustrative.

The applications team handles service requests and small changes for clinical systems. Over a quarter, its dashboard shows a median cycle time that rose from 6 working days to 11, while the team reports being "flat out." The load ratio the team calculates for the quarter is 98 percent. The 85th percentile of queue time for the stage "waiting for clinical sign-off" is 9 working days, and the average WIP on the board is 44 items against a throughput of 4 items per working day. Applying Little's law, 44 divided by 4 gives an implied mean cycle time of 11 working days, which agrees with the measured figure, so the data is consistent and the team trusts it.

The department head first suggests hiring a contractor. The team lead points to the stage breakdown: of the 11 days, the queue before clinical sign-off and the queue before deployment account for most of the elapsed time, and active work is a small share. Arrivals over the quarter exceeded departures by about 2 items per week, so the queue grew steadily. The team has also been accepting every urgent request, and the expedited items have no policy.

The team decides on four changes, recorded in the decision log. It sets a system-wide WIP limit of 30 items, with a stage limit of 8 on the sign-off queue. It plans for a load ratio of about 80 percent so that expected interrupts fit. It writes an expedite policy that allows at most two urgent items in flight. It asks the clinical sign-off group to hold a short daily review slot rather than a weekly meeting. After eight weeks, the team reports a median cycle time of 7 working days, an 85th percentile queue time at sign-off of 3 working days, and a breach rate of 10 percent of days, with the reasons logged.

The team catches a gaming risk in the second month. The breach rate looks excellent, yet a sample of the board shows several items in a new status called "pending," which sits outside the WIP count, and the parked-status count guardrail had been trending up. The team removes the status, moves the items back into the count, and requires every new status to be added to the register with a definition. The breach rate rises to 18 percent for a few weeks, which the team accepts as the honest figure, and then falls as blocked items are resolved.

## Agile, AI, automation, and analytics

### Agile

Limiting work in process supports a sustainable pace and continuous delivery: fewer things in flight means each finishes sooner and feedback arrives earlier. A practical habit is to agree a limit with the team and stakeholders and review breaches at the regular improvement conversation. The caution is that a limit enforced as a rule, not discussed, will be gamed by splitting or hiding work.

### AI

AI assistance makes it easy to start more work in parallel, since a draft costs little. That can raise work in process and queue length for the humans who must review and decide. Pair any increase in started work with queue time at review, and with the load ratio of the reviewing team. The caution is that more AI-started work may be abandoned, so count discarded drafts as well as finished ones.

### Automation

Read queue length and arrival rates from the system of record automatically, and set alerts on trends such as a rising load ratio, as well as on fixed thresholds. Automation that routes work should be measured on misroutes and on the queue it creates when it fails. The caution is that an auto-assignment rule can quietly concentrate work on a few people or a single team.

### Analytics

Use Little's law as a consistency check between work in process, throughput, and cycle time, and treat a large gap as a data or definition problem. The decision this informs is where to set limits and capacity. The caution is that the law assumes a stable system, so do not apply it across a period with a big change in arrivals.

## Sector lens

**Startup.** Demand is uneven and the temptation is to start everything. A simple board with a visible WIP limit and a weekly check of the oldest item in process is enough. Keep slack for production issues, since one outage can consume the whole team.

**Small business.** One or two people often handle support, projects, and administration, and the inbox is the queue. Separate planned from reactive work, set a daily limit on tasks started, and tell customers the usual wait for each kind of request.

**Enterprise.** Many teams share stages such as change approval, security review, and test environments, and the shared queues are often the longest. Measure queue time at shared stages and publish it, give each shared stage an owner, and avoid reporting utilisation as a target. Tools may count WIP differently across teams, so agree a common boundary and a common status vocabulary before rolling up (see topic 2.4, Value stream metrics).

**Government and public sector.** Statutory timelines, procurement steps, and formal approvals create long queues that teams do not control. Separate the time a team controls from the time spent waiting on other bodies, and report both. Where service targets are set in law or regulation, document the clock rules and any pauses, and keep the audit trail (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is faster, more predictable delivery without adding staff, because waiting dominates elapsed time and a modest cut in WIP or in a long approval queue shortens cycle time for every item that follows. Planned slack also lets a team absorb a major incident without losing weeks of other work.

The costs are modest and mostly people: effort to define boundaries and statuses, to build a daily WIP snapshot and a queue time report from existing tool data, and to hold a short weekly review. Limiting WIP also means saying not yet to some requests, which needs stakeholder agreement, and idle capacity is an apparent cost that leaders need to understand as insurance against delay.

The return should be described through patterns the organisation can measure for itself rather than through borrowed percentages. Track the median and 85th percentile of cycle time before and after limits, the number of items aged beyond an agreed threshold, the breach rate and its reasons, and the share of time spent on urgent work. The business case is strongest when it ties queue time to something the business already feels, such as the wait for a new starter's access, a clinical system change, or a customer fix. Total cost of ownership is dominated by the time of the people who review and act on the numbers, so count that time against the delay it removes. A team should build its own baseline, since no benchmark values are cited here.

## Anti-patterns and pitfalls

- **Targeting 100 percent utilisation.** It guarantees long waits and fragile delivery. Plan a load ratio with slack and review it after disruptions.
- **Limiting only the "in progress" column.** Work then piles up in queues outside the limit. Limit the system end to end and add stage limits where queues grow.
- **Treating the WIP limit as a rule to enforce.** People hide work to comply. Use a breach as a prompt to ask what is blocked, and log the reason.
- **Parking items in unlimited statuses.** The count stays low while work waits unseen. Include parked statuses in a visible count and review their age.
- **Measuring utilisation of individuals.** It rewards looking busy and invites ranking. Measure the team or the resource pool, and never publish a per-person figure.
- **Ignoring the arrival side.** Teams work on departures while demand keeps growing. Track arrivals, and when they exceed capacity, make an explicit decision about what to accept.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and boundaries | Each person counts WIP in a personal way | Some teams write a boundary for their board | One written boundary and status vocabulary, with waiting states separated from working states | Boundary changes logged and the Little's law check run monthly | Boundaries aligned with suppliers and partner teams, and revised when they stop informing decisions |
| WIP limits and slack | No limits; everyone busy | Informal limits on one column | System-wide and stage limits, with a breach log and a stated load range | Limits adjusted from cycle time and queue evidence on a cadence | Limits and capacity coordinated across teams that share stages |
| Queue visibility | Waiting seen only through complaints | Queue length counted on some boards | Queue time percentiles by stage shown to the owning team | Net queue growth trended with guardrails and acted on in funded work | Queue time at shared and external stages reported openly to customers and suppliers |
| Use in decisions | Capacity requests argued by anecdote | Utilisation quoted to justify headcount | Queue and cycle time evidence used in planning | Demand and capacity trade-offs decided with data in governance reviews | Demand shaped jointly with customers using wait-time distributions |

## Checklist

- [ ] The system boundary for WIP is written, with the starting and ending statuses and the exclusions.
- [ ] Waiting states and working states are separate statuses in the workflow.
- [ ] A daily WIP and queue snapshot is captured and kept.
- [ ] Queue time is reported as a median and a high percentile, by stage.
- [ ] Arrivals and departures are charted weekly, with a cumulative flow diagram.
- [ ] A WIP limit exists for the system and for any stage with a growing queue.
- [ ] Limit breaches are logged with a reason and reviewed weekly.
- [ ] A policy defines expedited work and caps the number in flight.
- [ ] The team load ratio is estimated at team level, never per person, with the method stated.
- [ ] The Little's law check is run monthly and mismatches are investigated.
- [ ] Parked and blocked statuses are counted and their age is reviewed.
- [ ] Every change to a boundary, status, or limit is logged with its date and reason.

## AI prompts

**Check the boundary and statuses behind a WIP count.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Run a Little's law consistency check.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Plan a first WIP limit experiment.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Find the likely bottleneck from stage data.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic defines a flow or capacity measure you are adding and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited metric names its clocks, boundary, gaming vector, and guardrail.

## Key takeaways

- Waiting dominates elapsed time, so measure WIP, queue length, and queue time by stage, and report medians and high percentiles.
- Little's law ties average WIP, throughput, and cycle time together, which makes it a quick test of whether your definitions are consistent.
- Delay rises steeply as utilisation approaches full capacity, so plan slack where demand is variable.
- Limit WIP for the whole system, treat breaches as prompts for conversation, and guard against relabelling work to stay under the limit.
- Watch arrivals and departures, since a queue that grows week after week needs a decision about capacity or demand.
- Measure teams and services, never individuals, and agree one written boundary before comparing numbers.

## References and further reading

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
