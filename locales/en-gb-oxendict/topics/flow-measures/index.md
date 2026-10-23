# Flow measures

**Four plain counts and clocks, work in progress, throughput, work item age, and cycle time, tell a team where its work is stuck and what it can promise, provided each one is defined the same way for project work and service work and read as a distribution rather than an average.**

## Overview and motivation

Most delivery and service dashboards report what finished last month. Flow measures add the view that matters while the work is still moving: how much is in progress right now, how old each item is, how fast items finish, and how long they take. The flow literature gives these four measures precise definitions. The Kanban Guide (kanbanguides.org, current version as of October 2026) is one clear source: it names them as the measures a team uses to inspect and adapt its workflow, and this topic follows those definitions without requiring any particular method or board.

The four definitions are short. **Work in progress (WIP)** is the number of work items that have started but not finished. **Throughput** is the number of work items finished per unit of time. **Work item age** is the elapsed time between when a work item started and the current time, so it applies only to items still in progress. **Cycle time** is the elapsed time between when a work item started and when it finished, counting both days inclusive in the Guide's wording. A **work item** is a unit of work the team has chosen to track as one thing, such as a user story, an incident, a service request, or a change. A **workflow** is the set of states between "started" and "finished," and the team's written **definition of workflow** says which states those are.

Two of the four are about the system as a whole (WIP and throughput) and two are about individual items (age and cycle time). The pair for finished items is throughput and cycle time. The pair for unfinished items is WIP and age. This split matters because the finished-item measures are lagging: they tell you how things went. The unfinished-item measures are leading: they tell you what is about to happen, while there is still time to act. Work item age is the most underused of the four, and it is usually the first one worth adding to a board.

The relationship among the first three is not accidental. [Little's law](https://en.wikipedia.org/wiki/Little%27s_law), a result from [queueing theory](https://en.wikipedia.org/wiki/Queueing_theory), says that in a stable system the average number of items in the system equals the average arrival rate multiplied by the average time each item spends there. In flow terms, average WIP is tied to average throughput and average cycle time. The law holds only under conditions the topic returns to in Recommendations (see topic 2.3, Work in process and queueing, for the full treatment). The practical consequence is simple: if throughput stays roughly constant, more work in progress means longer cycle times.

Agile and ITIL views meet here with different vocabularies. In agile practice, flow measures belong to the team's board and are used in a regular review with stakeholders and in the team's own reflection on how to improve. In ITIL 4, the same numbers describe how incident management, service request management, and change enablement move records through states, and they feed the measurement and reporting practice and service level management. An incident is a work item. A service request is a work item. Both have a start, a finish, and an age in between. The ITIL service desk and the delivery team are doing the same kind of work from a measurement standpoint: items arrive, wait, get worked, and leave.

The measures also connect to [lean software development](https://en.wikipedia.org/wiki/Lean_software_development), which treats waiting as the main source of waste, and to the [cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), a chart of cumulative arrivals and departures that shows WIP, throughput, and cycle time at a glance. The chart is optional. The four measures can be computed from a table of items with two dates each.

Because cycle time and age are durations with a long right tail, a single average misleads. A [percentile](https://en.wikipedia.org/wiki/Percentile) such as the 85th tells a team "85 percent of items finish within this many days," which is a usable forecast and a usable promise (see topic 1.6, Statistical literacy for service metrics). The flow literature calls such a promise a **service level expectation (SLE)**: how long a typical item should take, stated as a time and a probability. An SLE is a team's own forecast. It is not a [service level agreement](https://en.wikipedia.org/wiki/Service-level_agreement), which is a negotiated commitment with a customer (see topic 5.1, SLA, OLA, and XLA metrics).

## Key principles

- **Count whole items that match one definition of started and finished.** Splitting or merging items to improve a number destroys comparability. Agree what a work item is, and keep the definition stable.
- **Define the clocks before collecting the data.** Cycle time and age depend on which state means "started" and which means "finished." Write both down, and record every change to them (see topic 1.5, Data sources and instrumentation).
- **Look at unfinished work first.** Age and WIP are the only measures that can still change an outcome. Throughput and cycle time confirm what already happened.
- **Report distributions, not averages.** Show percentiles for cycle time and age, and a run of weekly counts for throughput, so the shape of variation is visible.
- **Use the measures to manage the workflow, not people.** The unit of analysis is the team's workflow. Never rank individuals by items finished or by cycle time.
- **Limit WIP to make flow predictable.** A WIP limit is a policy, not a target. The limit exists to expose queues and shorten cycle time.
- **Separate flow time from planning accuracy.** Flow measures describe how work moves. They say nothing on their own about whether the right work was chosen (see topic 1.3, Outcomes over output: choosing what to measure).

## Metric definitions

Every row counts items on one team's workflow. Items still in progress are excluded from cycle time and throughput, and finished items are excluded from age and WIP.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Work in progress (WIP) | Work items started but not finished | Count of items whose started timestamp is set and whose finished timestamp is empty, at a stated moment (for example the end of each day); backlog items not yet started and finished items are excluded | items | Issue tracker or ITSM tool state history | Incident management; service request management; change enablement | WIP limit; team backlog in progress | Daily snapshot, reviewed weekly |
| Throughput | Work items finished per unit of time | Count of items whose finished timestamp falls in the period (for example a calendar week, Monday to Sunday); items finished and then reopened count again only if they are new items | items per week | Issue tracker or ITSM tool state history | Incident management; service request fulfilment | Throughput; completed items | Weekly |
| Work item age | Elapsed time an unfinished item has been in progress | Current time minus the started timestamp, for items still in progress; clock runs through blocked time; items not yet started are excluded | days | Issue tracker or ITSM tool state history | Incident management; problem management | Work item age; daily team check-in | Daily, reviewed at each team check-in |
| Cycle time | Elapsed time from start to finish of a finished item | Finished timestamp minus started timestamp, in calendar days, inclusive; clock starts at the first move into a started state and stops at the move into a finished state; report the median and the 85th and 95th percentiles | days | Issue tracker or ITSM tool state history | Incident management; service request fulfilment; change enablement | Cycle time; item duration | Weekly, with a rolling 8 to 12 week window |
| SLE attainment | Share of finished items that met the team's service level expectation | Finished items with cycle time at or below the SLE / all items finished in the window; items still open are excluded | percent | Derived from cycle time | Service level management | Service level expectation | Monthly |
| Blocked time share | Share of in-progress days that items spent flagged as blocked | Item-days in a blocked state / item-days in progress, over the window; the clock for both starts at the started timestamp | percent | Issue tracker flags or a blocked status in the ITSM tool | Incident management; problem management; supplier management | Blockers; impediments raised in daily team check-ins | Weekly |

Cycle time here follows the flow-literature definition. It differs from the ITIL idea of resolution time, which is often measured from the moment a ticket is opened and may exclude time on hold. A team that wants to compare both must label them, and topic 2.2 treats the clocks in detail (see topic 2.2, Lead time, cycle time, and flow efficiency). SLE attainment and blocked time share are derived from the four core measures and are included because they are how a team uses those measures day to day.

## Recommendations

### Define the workflow and the items

**1. Write the definition of workflow before you chart anything.** List the states, say which one means "started" and which one means "finished," and state who may move an item between them. The flow literature calls this the definition of workflow, and every measure in this topic depends on it. If two teams define "started" differently, their cycle times cannot be compared.

**2. Choose a work item size that the team can finish in days, not months.** A work item is whatever the team tracks as one unit: a story, an incident, a request. Very large items hide their own age and make throughput lumpy. Use a stable rule such as "one item is one thing a customer or user could notice," and avoid splitting items just to improve a count.

**3. Treat project work and service work as the same kind of flow, with different arrival patterns.** Project work arrives as a planned backlog that the team pulls from. Service work, such as incidents and requests, arrives unpredictably and may preempt planned work. Measure both on the same board or in the same tables, tagged by type, so you can see how interruptions affect planned work (see topic 2.9, Operational work and unplanned work).

### Measure unfinished work

**4. Start with work item age on the board.** Mark each card with its age in days and sort or highlight by percentile bands taken from the team's own history of cycle time. An item older than the 85th percentile of past cycle times is a signal to ask what is blocking it today. This turns a lagging measure into a daily prompt.

**5. Count WIP honestly and set a limit you can defend.** Count every started item that is not finished, including work waiting for a review or a supplier. Pick an initial limit from the team's current average WIP and lower it step by step, noting what changes in cycle time and age. Treat the limit as a policy the team inspects, and use Little's law only as a sanity check on averages (see topic 2.3, Work in process and queueing).

**6. Show blocked work as time, not as a flag.** A blocked flag that nobody counts becomes an excuse. Record when an item became blocked and when it was freed, and report the blocked time share. Keep the item's clock running through the block, because the customer's wait does not pause (see topic 3.3, Incident response and resolution time, where ITIL on-hold states raise the same question).

### Measure finished work

**7. Report cycle time as a distribution with percentiles.** Show the median, the 85th percentile, and the 95th percentile, and plot each finished item as a dot over time (a scatterplot) so the team can see clusters and outliers. State the window, for example the last 10 weeks. An average hides the long tail that customers feel.

**8. Report throughput as a weekly run, not a single total.** Plot the count of finished items per week as a [run chart](https://en.wikipedia.org/wiki/Run_chart) or a [control chart](https://en.wikipedia.org/wiki/Control_chart). Weekly counts vary naturally, so read changes against that variation before reacting, and never compare two teams' throughput as a performance ranking, because item sizes and definitions differ (see topic 2.5, Delivery forecasting and planning metrics).

**9. Set a service level expectation from your own data and review it.** Take the team's cycle times for the last several weeks, choose a probability the team can live with, and read the number of days from the percentile. Publish it as "85 percent of items finish in 9 days or less," using real values from your data. Revisit it when the workflow changes. An SLE is a forecast the team makes about itself, so keep it separate from contractual targets.

### Use the measures

**10. Use all four together, and ask the same four questions at each team check-in.** What is in progress, and is it within the limit? Which items are oldest, and what would unblock them? How many did we finish, and is that in the usual range? How long did the recent ones take compared with our expectation? The four questions replace a status report and take a few minutes.

**11. Apply the same measures to service queues, with a clear boundary for the clock.** For incidents and requests, "started" might be the first assignment to a person or team, while the ITIL resolution clock starts at logging. Both are valid and answer different questions: how responsive is intake, and how long does the work itself take. Name each clock, and do not mix them in one chart (see topic 3.5, Service request fulfilment metrics).

**12. Change the workflow, then measure again, and keep the history.** When the team changes a WIP limit, a state, or a policy, log the date and the reason, and mark the change on the charts. A shift in cycle time after a change is evidence of its effect. A shift with no logged change is a reason to suspect the instrument (see topic 1.4, Metrics governance and ownership).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Work in progress (WIP) | Keeping items in the backlog or in a "ready" column until the last moment, so they are not counted as started; closing and reopening items; hiding work off the board | Reconcile board items with requests received; sample the board against the team's actual work; track the age of items in the first column |
| Throughput | Splitting items into tiny pieces; closing items before they are done; choosing easy items first | Look at item size distribution and reopen rate; count escaped defects and incidents tied to recent items; review the mix of work types finished |
| Work item age | Moving a stale item to "done" or a new state to reset the clock; cancelling old items quietly; creating a fresh copy of an old item | Audit state moves backward and cancelled items; report cancelled items and their age; check for duplicates created near the age limit |
| Cycle time | Starting the clock late by moving items to "in progress" only when work is nearly done; ending it early by marking items done before review or release | Compare start time with first commit or first activity; report the time between "done" and release; sample finished items for true completion |
| SLE attainment | Setting a generous SLE; excluding hard items as "special"; closing items to stay under the limit | Keep the SLE at a percentile of past data and review it each quarter; report excluded items and the reason; read the 95th percentile and the oldest open items |
| Blocked time share | Never flagging blocks, so the share looks low; flagging everything as blocked to explain delay | Compare blocked share with the age of in-progress items; review block reasons by category; sample blocked items to check each reason |

A healthy reading shows WIP at or below the limit most days, age mostly under the 85th percentile of past cycle times, and throughput varying within a stable range from week to week. Cycle time percentiles are steady or falling, SLE attainment sits near the probability the team chose, and blocked time has named causes that someone is working on. When a number looks too good, ask whether the clock moved or the definition changed before celebrating.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Flow measures (WIP, throughput, age, cycle time) | Simple, tool-independent, and based on counts and dates; support probabilistic forecasting | Need consistent definitions and clean timestamps; say nothing about value or quality |
| Estimate-based measures such as story points | Include a view of effort and complexity; fit planned work | Subjective and team-specific; cannot be compared across teams |
| Average-based service metrics such as mean time to resolve | Easy to compute and explain | Distorted by outliers and skew; hide the long tail |
| Percentile-based cycle time and SLE | Reflect what customers experience; support a clear promise | Need enough history; harder to explain to people used to averages |
| A single org-wide definition of "started" and "finished" | Allows roll-up and comparison | Fits some teams poorly; can push teams toward artificial states |

Choose the simplest measure that serves the decision at hand. Flow measures work well for a team that pulls work and can finish items in days. They fit less well when items take months, when one item varies hugely in size, or when most of the value lies in discovery and not in delivery.

## Questions to discuss with your team

**1. Which state means "started" for us, and which means "finished," and does everyone agree?**
Put the board on screen and ask each person to point to the first and last state of the clock. Note disagreements, because they are the largest source of unreliable cycle times. Look especially at items waiting in review, in a release queue, or in a supplier's hands. Agree on a written definition of workflow and a date when it takes effect.

**2. How much work do we have in progress right now, and what would happen if we stopped starting new items for one week?**
Count the cards, including work that has stalled. Ask what the team would finish and what would still be stuck. The facilitator should steer the conversation toward the reasons for starting early, such as fear of idle time or pressure from stakeholders, and away from blame. Propose a first WIP limit and a date to review it.

**3. Which items are oldest on the board, and what is stopping each of them?**
Sort by age and talk about the oldest three items. For each, name the obstacle, the person who can remove it, and the next action. Compare the oldest ages with the 85th percentile of past cycle times. Make a habit of asking this question at every check-in, because age is the one measure that can still change a result.

**4. What does our cycle time distribution look like, and what promise can we make from it?**
Show the scatterplot of finished items over the last 8 to 12 weeks. Read off the median, the 85th, and the 95th percentile. Discuss whether the team is comfortable stating an SLE at the 85th percentile, and what the outliers had in common. The facilitator should check that the group understands the difference between the median and the tail.

**5. How do incidents and requests affect the planned work we pull from the backlog?**
Tag finished items by type and compare cycle times and throughput by type. Ask how often a planned item stalled because an incident arrived. Decide whether an expedite policy or reserved capacity would help, and how to keep its use visible (see topic 2.9, Operational work and unplanned work). Discuss what the team would stop doing if the interruptions doubled.

**6. Which of these measures could we game, and how would we notice?**
Walk through each measure and ask how someone under pressure could make it look better without improving flow. Match each answer to a guardrail from the table. The facilitator should treat this as a design exercise on the instrument and not as an accusation. Choose one guardrail to add this quarter, and name an owner.

## Four perspectives

### Product and delivery teams

Delivery teams use flow measures to see their own system. They get the most from the age of in-progress items and the cycle time distribution, which tell them what to swarm on and what to promise. They should avoid turning throughput into a target and avoid comparing their numbers with other teams' (see topic 2.8, DORA metrics, for the delivery-level measures that sit above team flow).

### Service and operations teams

Service teams handle arrivals they do not control. Flow measures show how interrupts, handoffs, and waiting on others stretch the time to finish. They benefit from separate views for incidents, requests, and planned change, and from blocked time reported by reason. They should keep the ITIL clocks that contracts require while using the flow clocks to run the team.

### Leadership and governance

Leaders should ask for the distribution and the trend, not a single figure, and should read changes with the logged workflow changes beside them. They can use SLE attainment and age profiles to see risk early. They should resist rolling throughput up across teams, because item definitions differ, and should fund the clean-up of status models and timestamps that reliable flow data needs.

### Customers and users

Customers feel cycle time and especially its tail. A statement such as "most requests of this type are done within a stated number of days" gives them something to plan around, and an honest note when the team is outside its expectation builds trust. They do not need WIP or throughput counts, but they benefit when those measures reduce the wait.

## In practice: a service management example

A regional hospital's IT department runs a combined team that handles end-user service requests and a small stream of planned improvements for the clinical systems. All numbers in this example are illustrative.

The team has a board with the states Ready, In progress, Waiting on others, Review, and Done. The manager notices that the monthly report shows 46 items finished, in line with the previous month, yet clinical staff complain that requests take "forever." A review of the tracker history shows that "started" had been set when a card was first triaged, so cycle time included days in a queue.

The team rewrites the definition of workflow: "started" is the first move into In progress, "finished" is the move into Done, and Waiting on others counts as in progress, with its own blocked time. With the new clocks, the median cycle time of the last 10 weeks is 4 days, the 85th percentile is 11 days, and the 95th percentile is 24 days. Average WIP is 19 items for a team of 6. Work item age shows seven cards older than 11 days, and five of them are waiting on an outside supplier.

The team decides three things. It sets an SLE of "85 percent of items finish in 11 days or less." It sets a WIP limit of 12 and agrees to stop starting new planned items when the limit is reached. It also adds a weekly ten-minute review of the oldest five items. The supplier items are raised through supplier management with the dates they have been waiting.

Six weeks later, the 85th percentile of cycle time is 8 days and WIP averages 12. Throughput is 44 items per week for several weeks, near the earlier level. Then the team sees a possible gaming risk: median cycle time drops to 2 days in one week, but the count of finished items per week rises sharply and the share of items reopened within a week climbs. A sample of cards shows that large requests were being split into several one-line cards to boost throughput and shorten cycle time. The guardrails caught it: the item size mix and the reopen rate. The team agrees a rule on what counts as one item, merges the split cards in the reports, and continues to publish the SLE and the age list.

## Agile, AI, automation, and analytics

### Agile

Flow measures fit continuous delivery well because work is released in small pieces and the clocks run continuously. A practical step is to show work item age on a board the whole team and its stakeholders can see, and to talk about the oldest items at each regular review. The caution is that a board full of tiny items makes throughput look healthy, so keep item size roughly consistent and watch cycle time at a high percentile.

### AI

AI assistance tends to raise throughput of small items, such as drafted code or replies, without shortening the time that finished work waits for review, approval, or release. Pair throughput with cycle time at the 85th percentile and with rework, so a rise in output that only fills the queue is visible. The caution is that a faster first draft may move the wait to a human reviewer, so measure where the clock now sits.

### Automation

Pull the start and stop events from the tracker and the pipeline automatically, and mark blocked states with a reason code so blocked time can be counted. Automated handoffs also need measuring: how often they fail and how long a failed handoff sits unnoticed. The caution is that an automatic status change, such as a bot moving cards, can create timestamps that no person decided on.

### Analytics

Use the distribution of cycle time to give a range for future work, and show how many items stand behind it. The decision this informs is what the team can promise and where to look for delay. The caution is that a forecast from a few weeks of data is fragile, so show its interval and update it as the data grows.

## Sector lens

**Startup.** A small team can start with a physical or digital board and a spreadsheet of start and finish dates. Begin with age and WIP, because they need no history, and add cycle time percentiles after about ten weeks of data. Keep one board for planned work and urgent fixes, tagged by type, so interruptions are visible.

**Small business.** Work often arrives through email or a hosted help desk. Use the tool's own created, started, and resolved dates, check that "started" means someone began work, and export the data regularly. A simple weekly look at the oldest open items does more good than an elaborate dashboard.

**Enterprise.** Many teams, tools, and workflows make consistent definitions the main challenge. Agree a small common vocabulary for started and finished, let teams map their local states to it, and keep team-level flow data at team level. Use the measures to spot systemic queues, such as shared approval steps or shared environments, and not to compare teams.

**Government and public sector.** Statutory timelines, audit requirements, and procurement rules shape the clocks. Keep the statutory clock separate from the team's flow clock, and document both. Supplier-controlled steps often dominate cycle time, so record them as blocked time and use the data in contract discussions (see topic 8.4, Supplier and contract metrics).

## Business case: motivations, ROI, and TCO

The cost of flow measures is low in tools and moderate in discipline. A team needs a board with reliable state changes, a few hours to write the definition of workflow, a short recurring review, and someone to maintain the charts. If timestamps come from the tracker or ITSM tool, collection is nearly free. The larger cost is the time spent aligning definitions and changing habits, such as stopping the start of new work when the limit is reached.

The return shows up in predictability and in fewer surprises. A team that can state an SLE from its own data can answer "when will it be done?" without padding estimates, and can see stalled work early. Describe the benefit through measures you can observe yourself: the share of items older than the 85th percentile, the width of the gap between median and 95th percentile, and the time spent in status meetings before and after. No benchmark value is offered here, because published numbers depend on workflow and item definitions. The total cost of ownership is mostly people's time, so count it, and compare it with the cost of work that waits unseen.

## Anti-patterns and pitfalls

- **Counting items that never started.** Backlog cards inflate WIP and age and make the board unreadable. Count only started items, and keep the backlog in its own place (see topic 2.6, Backlog and refinement metrics).
- **Treating a WIP limit as a target to hit.** A limit is a ceiling that exposes queues. Review whether the limit is doing its job, and lower it when the team can manage.
- **Reporting only averages.** The average cycle time hides the long tail customers feel. Report the median and the 85th and 95th percentiles.
- **Pausing the clock for waiting.** Stopping the clock when an item is blocked makes cycle time look better and hides the delay. Keep the clock running and report blocked time separately.
- **Comparing throughput across teams.** Item definitions and sizes differ. Compare each team with its own history.
- **Using flow measures to judge individuals.** Items finished per person invites gaming and ignores shared work. Keep every measure at team level.
- **Changing the workflow without logging it.** A change in a state name or policy breaks the trend silently. Log the date and reason, and mark it on every chart.
- **Mixing incidents, requests, and planned work in one distribution.** Their cycle times differ by nature. Tag by type and read each distribution on its own.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | "Started" and "finished" mean different things to different people | Some teams write down their workflow states | One written definition of workflow per team, with clock rules for blocked time | Definition changes logged and marked on charts; clocks reviewed for drift | Definitions aligned across teams and suppliers where work crosses boundaries, and revised when they stop informing decisions |
| Measuring unfinished work | Status told in meetings | Cards show age or WIP for some teams | WIP counted daily and age shown on every card, with a written limit | Age bands taken from historical percentiles drive daily action | Cross-team queues and handoffs tracked together, with age shared with suppliers |
| Measuring finished work | Counts of closed tickets per month | Cycle time averages reported by some teams | Cycle time percentiles and weekly throughput from one data source | Trends reviewed against logged changes; SLE attainment tracked | Forecasts from flow data inform planning and service commitments across teams |
| Use and guardrails | Numbers used to chase people | Informal awareness of gaming | Each measure paired with a guardrail and reviewed with the team | Guardrail alerts lead to funded improvement work | Measures and guardrails revised jointly with customers and suppliers |

## Checklist

- [ ] The definition of workflow is written, with the "started" and "finished" states named.
- [ ] A work item is defined, with a rule for splitting and merging items.
- [ ] WIP is counted daily from tool data, and a WIP limit is written down.
- [ ] Every in-progress card shows its age in days.
- [ ] Cycle time is reported as the median, the 85th percentile, and the 95th percentile over a stated window.
- [ ] Throughput is reported as a weekly run chart with its window.
- [ ] A service level expectation is stated from the team's own data and reviewed each quarter.
- [ ] Blocked time is recorded with start, end, and reason, and the item clock keeps running.
- [ ] Incidents, requests, and planned work are tagged so each can be read on its own.
- [ ] Every change to a state or policy is logged with its date and reason.
- [ ] Each measure is paired with a guardrail from the gaming table.
- [ ] No measure is used to rank individuals or to compare teams.

## AI prompts

**Check a definition of workflow for clock problems.**

```text
Here is the workflow for [team or service]: [list of states and transitions,
with a one-line meaning for each if known]. We want to compute work in progress,
throughput, work item age, and cycle time using the flow-literature definitions.
Identify which state should start the clock and which should stop it, any state
where the clock could be paused or misread, and any state that two teams might
interpret differently. Do not guess how our tool is configured. List your
assumptions and the questions I should answer to settle the definition.
```

**Analyze an export of work items.**

```text
I have an export of [number] finished work items from [tool] with these fields:
[field names, for example id, type, started date, finished date, blocked
periods]. Explain how to compute cycle time percentiles, weekly throughput, and
daily work in progress from these fields, and how to handle missing dates,
reopened items, and items of type [types]. Provide the steps and a short script
outline in [language], and do not assume any values. List your assumptions and
the data quality checks I should run first.
```

**Draft a service level expectation statement.**

```text
Our team handles [type of work] and has cycle time data for the last [number]
weeks, with a median of [value], an 85th percentile of [value], and a 95th
percentile of [value]. Draft a one-sentence service level expectation and a short
note explaining it to [audience, for example customers or the service owner],
including what it does not promise. Do not invent target values or benchmarks.
List your assumptions and the caveats about sample size.
```

**Review gaming risks for our flow measures.**

```text
We track [list of flow measures] for [team or service]. The team is under
pressure to [pressure, for example reduce ticket age]. For each measure, list
realistic ways it could be made to look better without improving flow, the signal
in our data that would reveal each, and a paired guardrail. Do not invent
statistics or cite studies. List your assumptions and the data I would need to
test each risk.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a flow measure and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep the template, the definitions table, and the gaming table in step.

## Key takeaways

- Four measures describe flow: work in progress, throughput, work item age, and cycle time, each with a short definition and a clock that must be written down.
- Work item age and WIP are the leading measures; throughput and cycle time confirm what already happened.
- Report cycle time and age as percentiles, and state a service level expectation from your own data.
- The same measures fit project work and service work, provided you tag work types and name each clock.
- Every measure can be gamed by moving the clock, splitting items, or hiding work, so pair each with a guardrail.
- Keep the measures at team level and use them to improve the workflow, never to rank people.

## References and further reading

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
