# Lead time, cycle time, and flow efficiency

**Lead time, cycle time, and flow efficiency only mean something when each has a written start and stop, a distribution instead of an average, and a view of the waiting that fills most of the elapsed time.**

## Overview and motivation

Almost every team wants to know how long work takes. The question sounds simple and produces arguments, because "how long" depends on who is asking and where they start the stopwatch. A customer counts from the moment they asked. A developer counts from the moment they picked the work up. An operations manager counts from the moment the ticket was assigned to a queue. All three are right about their own clock, and all three give different numbers for the same piece of work.

[Lead time](https://en.wikipedia.org/wiki/Lead_time) is the elapsed time between a request arriving and the request being satisfied, seen from the side of the person who asked. [Cycle time](https://en.wikipedia.org/wiki/Cycle_time) is the elapsed time between the moment the team commits to a piece of work and the moment it is finished, seen from the side of the team doing it. The difference between the two is the time the request waited before the team started. Flow efficiency is the share of elapsed time in which someone was actually working on the item, as opposed to the item waiting. If an item took 10 days from start to finish and was worked on for 1 day, its flow efficiency is 10 percent. Touch time is the working part. Wait time is everything else.

[Lean software development](https://en.wikipedia.org/wiki/Lean_software_development) and the Kanban Guide carried these ideas from manufacturing into knowledge work. ITIL practices talk about resolution time, fulfillment time, and service level targets, and agile teams talk about cycle time and work items. This topic gives one set of definitions that holds up when an incident, a request, a change, and a story share a meeting.

Elapsed time has a property that surprises people the first time they measure it. In most knowledge work and service work, the item spends the majority of its life waiting: for a decision, a reviewer, an environment, a supplier, a maintenance window, or simply for a person who is busy with something else. Making that waiting visible is the most useful thing these metrics do. A team that cannot see its wait time tends to try to improve by working faster, which has little effect on a system where 90 percent of the elapsed time is spent in queues. Queueing behavior is covered in depth in topic 2.3, Work in process and queueing, and the full value stream view is in topic 2.4, Value stream metrics.

Time measures are reported as percentiles, such as the median and the 85th or 95th [percentile](https://en.wikipedia.org/wiki/Percentile), for the reasons in topic 1.6, Statistical literacy for service metrics. The raw timestamps come from the sources in topic 1.5, Data sources and instrumentation. The flow measures of work in progress, throughput, and work item age are in topic 2.1, Flow measures, and the DORA measure of change lead time is in topic 2.8, DORA metrics. This topic covers the time measures themselves: how to define them so they are comparable, where their clocks start and stop, and how to expose the waiting inside them.

## Key principles

- **Name the clock before you read the number.** Every time measure has a start event, a stop event, and a list of exclusions. A figure without them is an opinion.
- **Lead time belongs to the customer, cycle time belongs to the team.** Keep both, and always label which one a chart shows, because the gap between them is a signal in its own right.
- **Report distributions, never only a mean.** The median describes the typical item. A high percentile describes the risk the customer actually carries.
- **Waiting is the main finding.** Flow efficiency is usually low, and the response is to remove queues and handoffs, not to ask people to hurry.
- **Pause states are design decisions.** If the clock can be stopped by moving an item to a "waiting" status, that status will be used, so count how often it is used and by whom.
- **Compare an item with its own kind.** An incident, a standard request, a change, and a feature have different shapes. Segment by work type before comparing anything.
- **Measure systems, not people.** Time measures describe how work flows through a team or service. They are never a ranking of individuals.

## Metric definitions

The table below uses one vocabulary for agile work items and ITIL records. "Work item" means any record that moves through a workflow: a story, a task, an incident, a service request, a change, or a problem record. All durations are elapsed calendar time unless stated otherwise, and each is reported as the median and a high percentile.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time | Elapsed time from the arrival of a request to its delivery to the requester | delivery timestamp minus request arrival timestamp, per work item; clock starts when the request is recorded, stops when the requester can use the result; items still open and items canceled before delivery are excluded and counted separately | days or hours | ITSM tool or issue tracker history | Service request management; incident management; change enablement | Lead time on the team board; request-to-release time | Weekly, reviewed monthly |
| Cycle time | Elapsed time from the moment the team starts the work to the moment it is finished | finished timestamp minus started timestamp, per work item; clock starts at the first move into an active working state, stops at the first move into a done state; time before the start and after the done state is excluded | days or hours | Tracker or board state history | Incident management; service request management; change enablement | Cycle time (see topic 2.1, Flow measures) | Weekly |
| Touch time | Time in which a person or an automation is actively working on the item | sum of the intervals the item spends in states classed as active work; waiting states, blocked states, and queue states are excluded | hours | Tracker state history, with each state classed as active or waiting | Incident management; service request management | Process time in a value stream map | Monthly sample |
| Wait time | Time in which the item is in a queue, blocked, or paused | cycle time minus touch time, per work item; n/a for items without a recorded start | days or hours | Tracker state history | Incident management; service level management | Wait time or blocked time on a board | Monthly |
| Flow efficiency | Share of cycle time spent in active work | sum of touch time / sum of cycle time, for items finished in the period; items with a missing state history are excluded and counted separately | percent | Tracker state history | Continual improvement; service request management | Flow efficiency from lean practice | Monthly |
| Clock pause share | Share of cycle time during which the formal service clock was paused | sum of pause durations / sum of cycle time, for items finished in the period; pauses are the statuses defined in the written clock rules | percent | ITSM tool status history | Service level management; incident management | Blocked or on-hold column time | Monthly |

The start of the cycle time clock is a team decision that must be written down. The formal clock in a service level agreement (SLA) often pauses while an item waits for the customer, so this topic reports the pause share instead of discarding that time. Touch time is inferred from states, so its accuracy depends on how well the states describe the work.

## Recommendations

### Define the clocks

**1. Write the start and the stop of each clock.** For lead time the start is the arrival of the request, as recorded by the first system the requester touches, and the stop is the moment the requester can use the result. For cycle time the start is the first move into an active state and the stop is the first move into a done state. Put both in the metric register (see topic 1.4, Metrics governance and ownership) and show the definition under every chart.

**2. Agree what "done" means for each work type.** A change is done when it is running in production and verified, not when the code is merged. An incident is done when service is restored for the user, not when the ticket is closed by a bulk job on Friday. A request is done when the requester has the thing. If "done" differs by team, cycle times cannot be compared across them.

**3. Keep both lead time and cycle time, and watch the gap.** The difference between them is the commitment wait: the time a request sits before the team starts. A short cycle time next to a long lead time says the team works efficiently on what it starts and the intake is the bottleneck. A long cycle time next to a short lead time says requests are accepted quickly and then stall inside the team.

### Report time honestly

**4. Use percentiles and say which ones.** Report the median and the 85th or 95th percentile, for example "half of items finished within 4 days and 85 percent within 11 days." That statement is also a forecast: a new item has about an 85 percent chance of finishing within 11 days if the system stays the same. A mean cannot give you that sentence, and it moves a long way when a single outlier appears (see topic 1.6, Statistical literacy for service metrics).

**5. Plot every item, and not just the summary.** A scatter plot of cycle time against finish date shows the shape of the system at a glance: clusters, a slow drift upward, a sudden step after a process change. Summary numbers belong beside the plot. A tool that offers only an average line removes the information the team most needs.

**6. Segment by work type and by class of service.** An urgent incident, a standard request, a planned change, and a research story have different expected times. Split the data by type, and by priority where the priority changes how the work is handled, before looking for patterns. Mixed populations produce a broad distribution that describes nobody's experience.

### Expose the waiting

**7. Classify every status as active, waiting, or done.** This is the work that makes flow efficiency possible. "In development" and "in review with a reviewer working" are active. "Awaiting review," "awaiting approval," "blocked," and "waiting for customer" are waiting. Review the classification with the team, because the labels in a workflow rarely tell the whole truth, and a state called "in progress" often hides an item that nobody has touched for a week.

**8. Calculate flow efficiency as a diagnostic, not a target.** Compute it on a sample or on all finished items, and use it to find where the waiting lives: which state holds the items longest, and which handoff precedes it. Expect low numbers, and do not set a goal such as "reach 40 percent." Raising the number by relabeling waiting states as active is easy and useless, and the real gains come from removing the queue itself (see topic 2.4, Value stream metrics).

**9. Count blocked and paused time separately.** Track how often items enter a blocked or paused state, how long they stay, and what the reason was. A short list of recurring blocking reasons, such as waiting for an approval, an environment, or a supplier, tells you what to fix and who to talk to. Report the pause share beside any service level result that excludes paused time (see topic 3.3, Incident response and resolution time).

### Use the numbers well

**10. Control the queue to control the time.** Time through a system rises as work in process rises, a relationship set out in [Little's law](https://en.wikipedia.org/wiki/Little%27s_law), which relates the average number of items in the system, the arrival or completion rate, and the average time each item spends there. Limiting work in progress is therefore the most direct lever on cycle time (see topic 2.3, Work in process and queueing). Changing the metric target without changing the queue only changes the incentive to misreport.

**11. Use cycle time distributions for forecasts and for service level targets.** If the 85th percentile cycle time for standard requests is 6 days, a commitment to 5 days will be missed often, and a commitment to 8 days will be met with room to spare. Base an internal target on what the system has done, then work on the system to move the distribution (see topic 3.5, Service request fulfillment metrics, and topic 4.3, Change enablement metrics).

**12. Treat a changed definition as an event.** If the start or stop of a clock changes, mark it on every chart and restate history from the raw events where possible. Without that discipline a trend line shows the effect of a definition change as if it were an improvement or a decline (see topic 1.5, Data sources and instrumentation).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Lead time | Delaying the creation of the request record so the clock starts late; closing and reopening items to restart the clock; splitting one request into many tiny ones | Compare request records with the first contact in email or chat on a sample; track reopen rate; track the size and count of items per request |
| Cycle time | Starting the clock late by moving items to "in progress" only at the end; leaving items out of the board until almost done; slicing work into pieces that do not deliver value on their own | Work item age for open items (see topic 2.1, Flow measures); check that done items are usable by the requester; compare lead time with cycle time |
| Touch time | Classifying waiting states as active, or logging activity to look busy | Review the state classification with the team each quarter; sample items and compare logged activity with commits, comments, and calendars |
| Wait time | Creating new statuses so waiting time falls into an unmeasured gap; moving waiting items into a status outside the workflow | Count undocumented statuses and transitions (see topic 1.5, Data sources and instrumentation); confirm that cycle time equals touch time plus wait time on a sample |
| Flow efficiency | Reclassifying waiting as active; selecting only fast items for the sample; finishing easy items first to lift the ratio | Fixed state classification with a change log; compute it on all finished items; report it with the 85th percentile cycle time and the age of open items |
| Clock pause share | Pausing the formal service clock for reasons that do not depend on the customer, such as internal handoffs, to meet the SLA | Audit the pause reasons on a sample; report elapsed time and SLA time side by side; review the customer's own view of resolution time (see topic 5.1, SLA, OLA, and XLA metrics) |

A healthy reading shows a lead time and a cycle time that move together, a gap between them that the team can explain, an 85th percentile that is a stable multiple of the median, and a flow efficiency that is low but rising as specific queues are removed. Warning signs are a median that improves while the high percentile gets worse, a pause share that grows at the end of each month, and a flow efficiency that jumps without any change to how work is done. When a number improves, someone should be able to point to the change in the work that explains it. A gaming-driven improvement will usually fail that test. The wider psychology is covered in topic 1.2, Goodhart's law and the psychology of metrics.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Lead time from the requester's view | Matches what the customer feels; hard to improve by changing internal labels | The start event is outside the team's control and may be poorly recorded |
| Cycle time from the team's commitment | Under the team's control; easy to compute from board history | Ignores intake delay; a team can look fast while requests wait |
| Elapsed time (calendar clock) | Simple, comparable, and matches the customer's experience | Includes nights and weekends, which can mislead for teams with different hours |
| Business-hours clock | Fits staffed service levels and on-call patterns | Needs a calendar per team; hides the real wait experienced by the customer |
| Flow efficiency as a ratio | Shows how much of the time is waiting in a single, intuitive number | Depends on state classification; easy to inflate; can be misread as a target |
| Percentile reporting | Shows risk and supports forecasts | Needs enough items per period; harder for some audiences to read than an average |

The practical advice is to start with elapsed time, add a business-hours view only where a service level demands it, and report both lead time and cycle time at a high percentile. Use flow efficiency as a conversation starter in a review, with the state classification on the table, and avoid putting it on a scorecard.

## Questions to discuss with your team

**1. Where does our lead time clock start, and where does the customer think it starts?**
Take three recent requests and trace them from the first contact to delivery. Mark the moment the request was recorded in the system of record. Compare the gap between first contact and record creation. The facilitator should look for hidden queues in email, chat, or a shared inbox that never appear in a metric.

**2. What does "done" mean for each type of work we handle?**
List the work types, such as incidents, requests, changes, and stories, and ask for the stop event of each. Ask whether the requester would agree that the work was finished at that moment. Differences of opinion point to a clock that stops too early. Agree one stop event per type and write it down.

**3. Which of our statuses are waiting, and how long do items sit in them?**
Put the workflow on a wall and mark each state as active or waiting. Ask for the typical time in each waiting state from the last month of data. The biggest waiting state is usually a surprise to somebody. Choose one queue to examine more closely next month.

**4. What percentile do we promise, and what has the system actually done?**
Show the distribution of cycle times for the last quarter with the median, the 85th percentile, and the 95th percentile. Ask what commitment the team currently makes to customers and where it falls on the distribution. Discuss the cost of promising a faster time than the system has delivered. Decide on a commitment the team can meet for its own reasons.

**5. Who is allowed to pause the clock, and why?**
List the pause and on-hold states, the people who can use them, and the stated reasons. Read a sample of paused items and ask whether the customer was really the cause. Discuss what would happen if the pause share were shown on the same chart as the SLA result. The facilitator should keep the tone curious, since pause states often exist for legitimate reasons that were never written down.

**6. If flow efficiency doubled next quarter, what would we have changed in how work moves?**
Ask the group to name specific queues, handoffs, approvals, or batch sizes that would have to change. If the answers are general, such as "work harder" or "communicate better," the number is not yet connected to any action. Pick one concrete change, predict its effect on the wait time of a named state, and agree when to check.

## Four perspectives

### Product and delivery teams

Delivery teams own the cycle time clock and see its detail on the board. They gain most by classifying states honestly, limiting work in progress, and reading the scatter plot in their own retrospectives. They should resist the pressure to split work into artificially small pieces that finish quickly and deliver nothing, and should show the age of open items beside completed cycle times (see topic 2.1, Flow measures).

### Service and operations teams

Service teams work with records that carry formal service level clocks, and their pause states are where elapsed time and SLA time diverge. They should report both clocks, segment by type and priority, and record the reason for every pause. Operations teams are also the natural owners of queues for approvals, maintenance windows, and supplier responses, which often dominate the wait time that product teams see (see topic 3.5, Service request fulfillment metrics).

### Leadership and governance

Leaders ask for lead time because it is the number closest to what the customer experiences. They should expect a definition, a distribution, and a segmentation with every figure, and should ask where the waiting is before asking why people are slow. Targets for these measures work best when they apply to a service or a value stream with a named owner, and when they are set from what the system has delivered. A target applied to an average invites reclassification and clock games.

### Customers and users

Customers experience lead time, including all the waiting before work begins and all the waiting after the team believes it has finished. They need an honest estimate expressed as a range, such as "most requests like this are done within a week, and nearly all within two," and they need to know when a pause was applied because the team was waiting for them. Reports to customers should state which clock they use (see topic 5.1, SLA, OLA, and XLA metrics).

## In practice: a service management example

A regional hospital's IT department runs a service desk, an infrastructure team, and an applications team that supports clinical staff. All numbers in this example are illustrative.

The service desk reports that standard access requests meet their 5 working day target 94 percent of the time, yet ward managers keep complaining that access takes "about two weeks." The head of service operations asks the team to measure lead time and cycle time for these requests over a quarter, using elapsed calendar days from the raw status history instead of the SLA timer.

The result for 400 requests (illustrative) is a median cycle time of 3 days and an 85th percentile of 9 days. Lead time, measured from the moment the manager first emailed the shared mailbox, has a median of 8 days and an 85th percentile of 16 days. Two findings explain the gap. First, requests wait an average of 3 days in the mailbox before anyone creates a ticket, which is invisible to the SLA. Second, the status "pending approval" accounts for most of the cycle time: of the 9-day 85th percentile, about 6 days is spent waiting for a department head to approve. Touch time on a sample of 30 requests is about half a day, so flow efficiency is roughly 8 percent (illustrative). The SLA result is high because the timer stops during "pending approval" and "waiting for customer," so the clock pause share is 52 percent of cycle time.

The team makes three decisions. It adds a web form that creates the ticket at the first contact, so the lead time clock starts where the customer's does. It agrees with department heads that approvals for a defined list of standard roles are pre-authorized, with a quarterly audit instead of a per-request approval. And it adds pause share and lead time to the monthly service review beside the SLA result. After a quarter, the median lead time falls to 4 days and the 85th percentile to 8 days (illustrative), while the SLA result barely moves.

During the review the team catches a gaming risk. A technician has begun moving tickets to "waiting for customer" as soon as an approval email is sent, which is not what the status was meant for. The pause share for that group rises, the audit of a sample of paused tickets shows the pattern, and the team rewrites the clock rules so that only a request for information from the requester can pause the clock. The guardrail that caught the problem was reporting the pause share beside the SLA result, which is the pairing recommended in this topic.

## Agile, AI, automation, and analytics

### Agile

Continuous delivery shortens the loop from an idea to a user's hands, so lead time is the measure that a stakeholder feels. A good practice is to decide with stakeholders where lead time starts, such as the moment a request is accepted, and to keep that definition stable. The caution is that a team can shrink cycle time by starting the clock later, so always report lead time from the customer's side as well.

### AI

AI tools can cut touch time on drafting and coding while leaving wait time unchanged or longer, so flow efficiency can fall even as people feel faster. Report touch time and wait time separately for AI-assisted work, and pair them with rework. The caution is that a drop in cycle time may come from lower review depth, so sample changes to see whether quality held.

### Automation

Compute each clock from event timestamps rather than from fields people type in, and record every pause with a reason. Measure automation itself on how much wait time it removes and how often it adds a new queue, such as a manual approval step it cannot skip. The caution is that retroactive status edits can rewrite history, so log edits.

### Analytics

Report percentiles of lead time and cycle time and show the ratio of touch time to lead time as a trend. The decision informed is where to remove waiting, which is usually between teams. The caution is that flow efficiency depends on how finely touch time is recorded, so treat it as a rough guide and not as a precise ratio.

## Sector lens

**Startup.** With a small team and few handoffs, cycle time is easy to measure from the board and lead time is close to cycle time. Track both from day one with a simple state classification, and look at the scatter plot weekly. Flow efficiency is usually already high for small tasks, so the main danger is an informal intake that hides requests in chat.

**Small business.** A single person may play requester, approver, and doer, and the hosted service desk may offer only an SLA timer. Export the raw status history, compute elapsed time yourself, and keep one definition for each clock. The most useful finding is usually how long requests wait for supplier or vendor responses.

**Enterprise.** Many handoffs between teams, suppliers, and approval boards make wait time large and spread across organizations. Agree a shared vocabulary for start, stop, and pause, classify states consistently across ITSM and engineering tools, and segment by work type and class of service. Cross-team comparisons are meaningful only after definitions align, and a roll-up should be built from distributions, not by averaging team averages.

**Government and public sector.** Statutory response times, procurement rules, and approval chains create waiting that the team cannot remove alone. Record the externally imposed clocks separately from internal ones, so that the part of the delay the organization controls can be seen and improved. Public reporting of lead time, with plain definitions, builds trust and exposes the queues that policy creates (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The main motivation is that time measures turn a vague complaint ("it takes forever") into a located problem ("requests wait six days for approval"). The same data gives teams a truthful forecast, so commitments to customers are based on the distribution of past work instead of hope. It also exposes where investment in automation, approvals, or staffing would shorten the elapsed time, which is often a different place from where people expect.

The costs are modest when the tooling already records state changes. Setup involves agreeing the definitions, classifying the states, and building a view of the distribution and the scatter plot. Running costs are the time to maintain the state classification, to audit pause reasons on a sample, and to hold the monthly review. Where state history is missing or unreliable, the first investment is in the instrumentation described in topic 1.5, Data sources and instrumentation.

Return shows up in patterns a team can measure for itself: a shorter high-percentile cycle time for a work type, fewer escalations about late items, fewer disputes about whose clock is right, and a smaller gap between lead time and cycle time. Do not expect a particular gain from a benchmark. Lean and flow writers describe low flow efficiency as common, but no published figure should be adopted as a target for your own work without your own data. Total cost of ownership is dominated by people's time, so count the hours of the metric owner and the reviewers.

## Anti-patterns and pitfalls

- **Reporting the mean.** One long outlier drags the average and the typical item is misdescribed. Report the median and a high percentile, and plot the items.
- **One number for all work.** Mixing incidents, requests, and features produces a distribution that describes nothing. Segment by work type and class of service first.
- **Measuring only the SLA clock.** A timer that stops during waiting states reports a result the customer never experiences. Report elapsed lead time and the pause share beside it.
- **Setting a flow efficiency target.** People raise the ratio by relabeling states. Use it as a diagnostic and judge success by the wait time of named queues.
- **Starting the clock at the wrong place.** A clock that begins at assignment or at first work hides the intake queue. Start lead time at the request and cycle time at the commitment, and publish both.
- **Comparing teams by cycle time.** Different work, different states, and different definitions make rankings meaningless and invite gaming. Compare a team with its own history, and compare services only after the definitions align.
- **Ignoring open items.** Cycle time counts only finished work, so a stuck item is invisible until it ends. Track the age of items still in progress (see topic 2.1, Flow measures).
- **Changing definitions silently.** The trend then records a change in the instrument. Log every change and mark it on the chart.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | People quote durations from memory; each person starts the clock differently | Some teams define cycle time on their board; ITSM teams quote SLA time | One written definition of lead time, cycle time, and pauses used by all teams | Definition changes are logged and history restated from raw events | Definitions are aligned with suppliers and customers and revised when they stop informing decisions |
| Reporting and analysis | Averages in a slide, assembled by hand | Some teams show medians or a chart from the tool | Median and a high percentile, with a scatter plot, segmented by work type | Distributions trended and reviewed on a cadence; forecasts drawn from them | Flow data across teams and suppliers is combined to forecast end-to-end commitments |
| Waiting and flow efficiency | Waiting is not distinguished from working | Blocked columns exist on some boards | Every status classed as active or waiting; flow efficiency calculated on all finished items | Largest queues examined and funded for improvement; pause reasons audited | Queues, approvals, and handoffs redesigned jointly with the teams and suppliers that create them |
| Use in decisions | Numbers shown at a quarterly review and not acted on | Teams discuss cycle time in retrospectives | Service targets set from the observed distribution | Targets paired with guardrails and reviewed for gaming | Customers see honest ranges, and improvement ideas come from everyone who touches the work |

## Checklist

- [ ] Each time measure has a written start event, stop event, and list of exclusions in the metric register.
- [ ] Lead time and cycle time are both reported, and each chart is labeled with the one it shows.
- [ ] "Done" is defined for each work type and agreed with the requester.
- [ ] Results are reported as the median and a high percentile, and the items are plotted.
- [ ] Data is segmented by work type and, where relevant, class of service.
- [ ] Every status is classified as active, waiting, or done, and the classification is reviewed each quarter.
- [ ] Pause statuses, who may use them, and their reasons are written down and audited on a sample.
- [ ] Elapsed time and SLA time are shown side by side, with the pause share.
- [ ] Flow efficiency is used as a diagnostic and is not on a scorecard.
- [ ] Definition changes are logged and marked on the charts.
- [ ] The age of open items is reviewed with completed cycle times.

## AI prompts

**Draft clock rules for a work type.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to canceled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Classify statuses as active or waiting.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Analyze a set of cycle times.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Review a metric for gaming.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a time measure and the guardrail that belongs beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited time measure states its clocks, exclusions, and gaming vector.

## Key takeaways

- Lead time is the customer's wait and cycle time is the team's wait, so keep both and examine the gap between them.
- Write the start, stop, and pause rules for every clock, and treat a change of definition as an event.
- Report the median and a high percentile, plot the items, and segment by work type before comparing anything.
- Flow efficiency is usually low because most elapsed time is waiting, so use it to locate queues and avoid making it a target.
- Show the pause share beside any service level result that excludes paused time.
- Reduce work in process and remove handoffs to shorten the time, because telling people to hurry does not change the queues.

## References and further reading

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
