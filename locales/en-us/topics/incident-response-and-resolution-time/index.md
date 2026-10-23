# Incident response and resolution time

**Time measures for incidents describe how long users wait at each stage, so report them as distributions with the clocks written down, never as a single mean, and pair every speed number with a measure of whether the fix held.**

## Overview and motivation

An incident, in IT service management (ITSM), is an unplanned interruption to a service or a reduction in its quality. [Incident management](https://en.wikipedia.org/wiki/Incident_management) is the practice that restores normal service as quickly as is safe. In ITIL 4, the practice is called incident management and sits among the service management practices of the [ITIL](https://en.wikipedia.org/wiki/ITIL) framework. Its agile counterparts are the team's habit of treating unplanned work as a first-class flow of work, and the on-call and blameless review practices that come from [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), the discipline of running services with software engineering methods.

Time is the most natural way to describe an incident, and the most commonly misused. A single incident passes through several stages. Something breaks, a monitor or a user notices, a person acknowledges the alert, someone starts work, the service is restored for users, and the ticket is closed once the cause is handled or deferred. Each gap between two of these events is a separate measure with a separate owner, a separate cause of delay, and a separate remedy. Calling all of it "resolution time" hides where the delay lives.

This topic covers the elapsed-time measures that follow an incident from start to finish: **time to detect**, **time to acknowledge**, **time to first response**, **time to restore**, and **time to resolve**. It also covers the age of open incidents, the number of times an incident changes hands, and the statistical problems of the best-known summary, mean time to restore or resolve (MTTR). Counts, categories, and priority are covered elsewhere (see topic 3.2, Incident volume and priority). Large and unusual incidents have their own measures (see topic 3.4, Major incident metrics).

### Terms used in this topic

- **Time to detect (TTD).** Elapsed time from when the fault began to affect users until the organization knew about it, by monitoring or by a user report.
- **Time to acknowledge (TTA).** Elapsed time from the alert or ticket being raised until a named person or team accepts ownership.
- **Time to first response.** Elapsed time from the incident being logged until the first meaningful action or message to the affected user. An automatic reply does not count.
- **Time to restore.** Elapsed time from the start of user impact until users can again use the service, even if the underlying cause is only worked around.
- **Time to resolve.** Elapsed time from the incident being logged until the incident is closed because service is restored and the user has confirmed or been given a fair chance to confirm.
- **Mean time to restore or resolve (MTTR).** The arithmetic mean of one of those durations over a set of incidents. The letter R is read as repair, recovery, restore, resolve, or respond depending on who is speaking, which is the first problem with the abbreviation. The [Wikipedia article on mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair) lists the variants.
- **Service level agreement (SLA).** A [service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement) is a commitment between a provider and a customer about the level of service, often including target response and resolution times by priority.

### Why the mean is a poor summary

Incident durations are not symmetrical. Most incidents are short, a few are very long, and the long ones dominate any average. Durations of this kind are often well described by a right-skewed shape such as the [log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). In skewed data the mean can sit well above what a typical incident looks like, and a single long outage can move it more than a month of improvements.

Google's SRE team has published an analysis of this problem. It argues that, for the incident data sets it studied, the spread in incident durations is wide enough that MTTR can hide real improvements or show changes that are noise, and it recommends looking at distributions instead (Davidovič, 2021, listed in the references). The reasoning rests on well-known statistics, so you can check it on your own data without trusting anyone's conclusion: plot your incident durations, compute the mean and the [median](https://en.wikipedia.org/wiki/Median), and see how far apart they are (see topic 1.6, Statistical literacy for service metrics).

The alternative is [percentiles](https://en.wikipedia.org/wiki/Percentile). The median says what a typical user waited. The 85th or 95th percentile says how long the unlucky ones waited. Customers remember the long wait, not the average, so a percentile commitment such as "nine in ten incidents of this priority restored within a stated time" matches their experience far better than a mean.

### How ITIL and agile views differ

The ITIL view tends to start from a priority and a target. Impact and urgency set a priority, the priority sets target response and resolution times, and a service level agreement may attach consequences to missing them. This is orderly and easy to audit, and prone to the gaming that targets invite (see topic 1.2, Goodhart's law and the psychology of metrics).

The agile and SRE view starts from user impact and from flow. It asks how quickly the team limits harm, how much of an incident's elapsed time was active work and how much was waiting, and what the team learned. It prefers measures of impact (users affected, minutes of degraded service) to measures of ticket status, and treats the ticket clock as a convenient but imperfect proxy. The two views are compatible. Use ITIL's priority structure to decide what to measure and for whom, and use flow and impact thinking to decide whether the number means anything.

## Key principles

- **Name the stage, not "resolution".** Detect, acknowledge, respond, restore, and resolve are different questions with different owners. Report each one under its own name.
- **Write both clocks down.** Every time measure states which event starts it, which stops it, and which states pause it. Most gaming lives in these boundaries.
- **Report distributions.** Show the median, a high percentile, and the age of the oldest open incident. Avoid a lone mean, which skewed data makes unreliable.
- **Measure restoration separately from closure.** Users care when service came back. The ticket can close later, after the cause is handled.
- **Pair speed with durability.** A fast restoration that the same incident undoes the next day is not an improvement. Show recurrence and reopen rates beside every time measure.
- **Describe teams, services, and systems.** Never rank individual agents or engineers by response or resolution time.
- **Segment before comparing.** Compare like with like, by priority and by service, because a blended number mixes password resets with database failures.

## Metric definitions

Each row states its clocks. Calendar time and business time are different: say which one you use. Where a measure uses percentiles, the table gives the 50th and 95th, and teams may add the 85th.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Time to detect | How long a fault affected users before the organization knew | Clock starts at the first moment of user impact (taken from monitoring data or the confirmed impact start recorded in the review); stops at the first alert or user report. Reported as median and 95th percentile per service. Incidents with no known start are counted and reported separately, not dropped | minutes | Monitoring and alerting platform; incident record with an impact-start field | Incident management; monitoring and event management | Observability and alert quality work (see topic 5.5, Monitoring and alert quality metrics) | Monthly |
| Time to acknowledge | How long a raised alert or ticket waits before a person owns it | Clock starts when the alert fires or the ticket is logged; stops when a named person or team accepts it. Auto-assignment does not stop the clock. Reported as median and 95th percentile by priority | minutes | Paging tool; ITSM tool assignment history | Incident management; service desk | On-call response in an SRE rotation | Monthly |
| Time to first response | How long the user waits for a first human, useful reply | Clock starts when the incident is logged; stops at the first human message or action that addresses the report. Auto-acknowledgements and templated receipts are excluded. Business-hours clock stated | minutes or business hours | ITSM tool communication log | Service desk; incident management | Timely feedback to the user, as in a working agreement | Weekly |
| Time to restore | How long users were without a working service | Clock starts at the start of user impact; stops when users can again use the service, including by workaround or rollback. Cause fixed later does not extend it. Reported as median and 95th percentile by priority and service | minutes or hours | Incident record with impact start and restore timestamps; monitoring | Incident management | Mean time to restore in DORA terms, read as a distribution (see topic 2.8, DORA metrics) | Monthly |
| Time to resolve | How long the incident record was open until closed | Clock starts when the incident is logged; stops when it is closed after restoration and user confirmation or a fair wait. Time in "waiting for customer" is shown as a separate, reported share and not subtracted from the headline. Reported as median and 95th percentile by priority | hours or business hours | ITSM tool status history | Incident management | Cycle time for unplanned work (see topic 2.2, Lead time, cycle time, and flow efficiency) | Monthly |
| Oldest open incident age | How long the longest-standing open incident has been open | Now minus logged time, for each open incident, listing the oldest few by priority. Pause states are not subtracted | days | ITSM tool open-incident list | Incident management | Work item age on the team board (see topic 2.1, Flow measures) | Weekly |
| Active-time share | The proportion of an incident's elapsed time spent in active work rather than waiting | Sum of time in active states / total time from logged to closed, for incidents closed in the period. Active states are those where a person is working the incident; waiting states are listed in the definition | percent | ITSM tool status history | Incident management | Flow efficiency (see topic 2.2, Lead time, cycle time, and flow efficiency) | Quarterly |
| Reassignment count | How many times an incident changes owning team before restoration | Count of assignment-group changes from logged to restored, summarized as the median and share of incidents with three or more. Counted per service and priority, never per agent | count | ITSM tool assignment history | Incident management; service desk | Handoff count (see topic 9.3, Collaboration and handoff metrics) | Monthly |

Two notes on data. First, a restore time is only as good as its start time. Many incident records capture when someone typed the ticket, which can lag the real start of impact by hours. If your tool has no impact-start field, add one, and treat estimated starts as estimates (see topic 1.5, Data sources and instrumentation). Second, when you compare periods, keep the same priority definitions, or the trend line will reflect the reclassification.

## Recommendations

### Define the clocks

**1. Write a clock sheet for each time measure.** For each stage, list the start event, the stop event, the states that pause the clock, the time basis (calendar or business hours), and the exclusions. Keep it in the metric register (see topic 1.4, Metrics governance and ownership).

**2. Separate restoration from closure.** Record when service came back for users as its own timestamp, apart from when the ticket closed. Restoration is what users feel, and closure includes verification, documentation, and cause handling. Teams that use one timestamp for both are rewarded for closing tickets early or punished for careful follow-up.

**3. Record the impact start, not just the logged time.** Ask responders to fill in when users first felt the effect, using monitoring data where possible. Mark the field as estimated when it is. Time to detect is meaningless without it, and restore time is distorted by its absence.

**4. Limit pause states and report their use.** Waiting for a customer or a supplier is sometimes legitimate. Allow a short, named list of pause states, require a reason, and show the share of incident time spent in each. A rising share of paused time is a sign of drift, not of speed.

### Report honestly

**5. Replace the mean with the median and a high percentile.** Show the 50th and 95th percentile for each stage, by priority, as a time series. Show the count of incidents behind each point, because a percentile of ten incidents is a weak figure. Where counts are small, plot the individual incidents as dots and skip the summary line.

**6. Show the age of the oldest open incidents.** A chart of closed incident durations is blind to the incidents still open, which are the worst ones. List the oldest open incidents by priority every week. This is hard to improve without finishing the work, so it makes a useful companion to any resolution-time chart.

**7. Segment by priority and by service.** A blended resolution time rises when the mix shifts toward complex incidents, even if every kind of incident is handled faster. Compare within a priority and within a service, and show the mix beside the time (see topic 3.2, Incident volume and priority). Do not draw conclusions from a month in which the mix changed.

**8. Use control limits to separate signal from noise.** Incident durations vary a great deal from week to week without anything changing. A control chart, with limits calculated from a stable period, shows when a shift is large enough to be worth explaining (see topic 1.6, Statistical literacy for service metrics).

### Pair speed with durability

**9. Show reopen and recurrence rates beside every time measure.** Reopen rate is the share of incidents reopened within a stated window. Recurrence is the same service and symptom reappearing within a window. If restoration time falls while recurrence rises, the team is applying quick patches. Send recurring incidents to problem management (see topic 4.1, Problem management metrics).

**10. Measure waiting and handoffs, because that is where time goes.** For most services, much of an incident's elapsed time is waiting for a person, a decision, or a supplier, rather than working. Active-time share and reassignment count show where to look. A fix for a long resolution time is often a clearer routing rule or a shared on-call, not faster typing.

**11. Use targets on percentiles, with a human in the loop.** If you need a target, state it as a percentile commitment for a priority, such as "nine in ten priority 2 incidents restored within a stated time," and agree it with the people who will meet it. Review breaches as questions about the system, not as faults of the person on call (see topic 5.1, SLA, OLA, and XLA metrics).

**12. Ask users about the experience.** A short survey on a sample of closed incidents, and a read of the comments, will say whether the number matches how the wait felt. Users often care more about timely communication than about the exact minute of restoration (see topic 6.1, Customer satisfaction metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Time to detect | Setting the impact start later than it was; widening alert thresholds so fewer faults count as incidents; counting only incidents the monitor caught | Share of incidents first reported by users rather than monitoring; periodic review of impact-start estimates against monitoring data |
| Time to acknowledge | Auto-assigning or auto-acknowledging to stop the clock; acknowledging the alert and then doing nothing | Time to first response and time to restore for the same incidents; sample of acknowledged alerts with no later activity |
| Time to first response | Sending a templated or one-word reply to stop the clock | Review a sample of first replies for substance; repeat contact and survey comments |
| Time to restore | Declaring service restored before users can use it; restoring by suppressing the symptom; logging outages as planned maintenance | Recurrence within a window; user-reported impact after the restore time; share of incidents relabeled after the fact |
| Time to resolve | Moving tickets into "waiting for customer" or "on hold"; closing after one contact attempt; splitting an incident into children to close the parent early | Share of time in pause states; reopen rate; oldest open incident age; read a sample of closing notes |
| Oldest open incident age | Closing and re-raising the oldest ticket; reclassifying it as a problem or a request to remove it from the list | Link duplicates to originals and report linked age; count of incidents converted to problems or requests each period |
| Active-time share | Logging brief, meaningless work to mark time as active; moving to active states without effort | Compare active time with outcomes such as restore time; sample of work notes |
| Reassignment count | Reopening under the same team instead of passing on; passing work by a side channel so the tool shows no handoff | Time to restore and user satisfaction; periodic observation of how work moves between teams |

A healthy reading shows medians and tail percentiles that move together, a small and stable share of paused time, few incidents first reported by users, falling recurrence, and survey comments that match the ticket data. Treat a headline improvement that arrives alone as a prompt for a gaming review.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Mean time to restore | Familiar; one number; easy to trend | Dominated by a few long incidents; hides real change; poor for small samples |
| Median plus a high percentile | Describes the typical and the unlucky experience; resists outliers | Needs enough incidents; two numbers to explain |
| Plotting every incident | Shows the full shape and the outliers; honest at low volume | Harder to read at high volume; needs a facilitator |
| Targets by priority | Clear expectations; supports contracts and escalation | Invites reclassification and clock-pausing; can drive effort to the target boundary |
| Ticket-clock measures | Cheap, available in every ITSM tool | Measure the ticket, not the user's experience; sensitive to status workflow |
| Impact-based measures | Close to what users feel; resist ticket tricks | Need monitoring data and an impact-start field; harder to audit |

The pragmatic answer is to keep the ticket clock because every tool has it, add an impact-based restoration timestamp where monitoring allows, and use distributions for both. The mean is acceptable as a rough description of a single, stable, large set of similar incidents, and it should never be the only number on the page.

## Questions to discuss with your team

**1. Which stage of an incident takes the longest for us, and how do we know?**
Draw the incident timeline on a board with the stages from impact start to closure. Take the last ten incidents and mark how long each stage took, using the tool data and the responders' memory. The facilitator should look for the stage where the time clusters, which is often waiting for a handoff or a decision, not the technical work. Agree which stage deserves attention first.

**2. Where does our clock start and stop, and who decided?**
Ask each person to say when they believe an incident "began" and when it "ended". The answers will differ, and the differences are the finding. Compare them with the fields in the tool and the status workflow. Capture the agreed definitions in the metric register and note where the tool cannot yet support them.

**3. What would our medians and 95th percentiles show that our mean hides?**
Before the meeting, compute the mean, median, and 95th percentile for the last quarter's incidents by priority. Show them side by side and plot the durations. Ask what the team would conclude from each. The facilitator should notice whether one or two incidents move the mean and discuss whether the team believes the median represents a typical user's wait.

**4. What time do we spend waiting rather than working, and why?**
Pick three long incidents and trace their status history. Count the hours in active states and the hours in waiting states, and note who or what was awaited. Ask which waits could be shortened by a decision, a clearer escalation path, or a shared on-call.

**5. If we were asked to cut resolution time by a quarter, how would we do it without helping users?**
This is the gaming review in miniature. List every move that would improve the number without improving the service, such as pausing the clock, closing early, or relabeling priorities. For each move, ask whether a guardrail would catch it. The list is the start of your gaming-vector column and shows where definitions need tightening.

**6. How do we know that a faster restoration was real?**
Ask for the evidence: recurrence, reopening, user comments, and any later incident with the same symptom. Look at one recent improvement and ask whether it held a month later. The facilitator should steer the group toward durable fixes. End by deciding which durability measure joins the dashboard.

## Four perspectives

### Product and delivery teams

Product teams that run their own services see incident time as a cost of unplanned work that displaces planned work. Track how much of each flow period is taken by incidents, and treat repeated incidents as backlog items for the owning team. Release practices that make rollback quick shorten restoration, so incident time is partly a delivery measure (see topic 2.9, Operational work and unplanned work).

### Service and operations teams

Operations teams own the clocks and feel the pressure of the targets. They should publish the clock sheet, audit pause-state use, report medians and tail percentiles by priority, and keep a weekly list of the oldest open incidents. On-call load and alert quality shape acknowledgement and detection times, so look at them together (see topic 5.7, Toil and on-call metrics).

### Leadership and governance

Leaders should ask which stage is slowest and what is being done about it, not why a number is red. They should expect percentile reporting, a durability measure beside any speed measure, and an explanation when definitions change. Funding for monitoring, runbooks, and problem work often pays back more than pressure on responders, because it reduces the delay that responders cannot control.

### Customers and users

Users experience the wait, the quality of communication, and whether the problem comes back. They rarely see the stage names. Give them an honest first response, tell them what to expect, and update them on a schedule. Their survey comments and repeat contacts are the best check on whether the ticket clock tells the truth.

## In practice: a service management example

A mid-sized online retailer runs an order platform, a customer account service, and an internal warehouse system. Product teams own their services and share an on-call rotation with a small operations group. All numbers in this example are illustrative.

Leadership sets a goal of a "mean resolution time under four hours" for priority 2 incidents. In the first quarter, the dashboard shows a mean of 3.8 hours, and the goal appears to be met. Warehouse staff say that some outages seem to last all day. The operations lead plots the 41 priority 2 incidents (illustrative) for the quarter and finds a median of 1.5 hours and a 95th percentile of 11 hours. Three incidents account for most of the long tail.

She traces the three long incidents. Each spent most of its time in "waiting for supplier" or "waiting for customer". In two, the ticket had been closed and re-raised as a new incident when the original "breached", which reset the clock. A third involved four reassignments between teams over two days. A sample of closing notes shows that 6 of 30 reviewed tickets (illustrative) were closed after a single attempt to reach the user.

The team makes four changes. They add an impact-start field and a restoration timestamp to the incident form. They report median, 85th and 95th percentile by priority, and the oldest open incidents each week. They show the share of time in pause states and the recurrence rate on the same page. And they link re-raised tickets to their originals so age carries over.

At the next review, the headline mean has risen to 4.6 hours because the re-raised tickets now count in full. The team explains the rise to leadership as a correction. The 95th percentile and the oldest open ticket are now the numbers they work on, and the reassignment count points to a routing gap between the order service and the warehouse system. They agree to add a shared on-call alias and review the effect over the next quarter rather than set a new target immediately.

## Agile, AI, automation, and analytics

### Agile

A short feedback loop after each significant incident, with stakeholders involved, helps the team improve its clocks. The caution is that response-time targets produce quick, empty acknowledgments, so pair them with time to restore.

### AI

AI can speed first response, suggest fixes, and summarize incidents, which shortens time to first response while time to restore may not change. Report both, plus the share of incidents where an AI suggestion was used and the share that recurred. The caution is that a fast AI reply that is wrong adds work, so count reopened incidents.

### Automation

Compute every clock from event timestamps in the tool, with pause reasons recorded, and measure automated diagnosis and remediation on wrong actions as well as on time saved. The caution is that an automation that restores service without logging the cause hides the problem record.

### Analytics

Report the median and a high percentile for each clock with the oldest open incident, and show how many incidents stand behind them. The decision informed is where users wait longest. The caution is that clock definitions differ across tools, so write the start and stop events down before comparing teams.

## Sector lens

**Startup.** Volume is low, so percentiles are noisy and a plot of each incident is better than a summary. One person often detects, responds, and restores, so stage separation matters less than a written timeline of each incident. Add an impact-start note to every post-incident write-up and compute simple medians once there are enough incidents.

**Small business.** A managed service provider or a single IT generalist may handle incidents, and the provider's contract may define response and resolution targets. Read the contract clocks carefully, because they often differ from your users' experience. Keep a short log of impact start and restoration for the incidents that matter, and ask the provider for the underlying records, since a summary figure hides the clocks.

**Enterprise.** Many teams, suppliers, and priority schemes make comparison tempting and misleading. Standardize clock definitions and priority meanings across the organization, publish distributions rather than means, and segment by service. Watch for pause-state drift and reclassification, which grow with the number of reporting layers.

**Government and public sector.** Contracts, statutory reporting, and audit may fix the clocks and the priority definitions. Meet those obligations as written, and keep a second, user-oriented view beside them, so that compliance does not hide a poor experience. Be open about definitions and about corrections when a clock rule changes (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of this topic is mostly design and discipline. It takes a few hours to write clock sheets, some configuration to add an impact-start field and a restoration timestamp, and a modest effort to build percentile reports. Where the ITSM tool or a monitoring platform already holds the timestamps, extraction is a one-time task. The recurring cost is a monthly review and a quarterly sample of closed incidents.

The return comes from better decisions and less rework. Distribution reporting shows whether an improvement worked, and stage reporting directs effort to the real delay, such as handoffs, detection gaps, or supplier waits. Durability measures prevent the false saving of quick patches that return as repeat incidents. Measure your own baseline for a quarter, make one change, and compare distributions.

## Anti-patterns and pitfalls

- **A single MTTR on the executive dashboard.** The mean of skewed data misleads. Show the median, a high percentile, and the oldest open incident, and say how many incidents are behind each point.
- **Blending priorities and services.** A mix shift looks like a performance change. Segment by priority and service, and show the mix.
- **Stopping the clock with pause states.** Time vanishes into "waiting" and "on hold". List the allowed states, require reasons, and report the share of time in each.
- **Closing and re-raising tickets.** It resets the age and hides the long incident. Link re-raised tickets to their originals and report the linked age.
- **Using one timestamp for restoration and closure.** Teams are then rewarded for premature closing or penalized for careful follow-up. Record both and report both.
- **Ranking agents or engineers by resolution time.** It rewards easy tickets and cherry-picking, and discourages help and escalation. Report by team and service only.
- **Targets without durability measures.** A fast patch that fails tomorrow looks like success. Show recurrence and reopen rate beside every target.
- **Treating small samples as trends.** A 95th percentile from a handful of incidents is a guess. Plot individual incidents and wait for more data before drawing a line.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | Each person measures differently; one "resolution time" | Clocks written for some teams; stages partly separated | One clock sheet for all stages, with pause states listed | Definitions reviewed and changes logged with reasons | Definitions aligned with suppliers and customers, revised when they stop informing decisions |
| Data quality | Manual notes; impact start unknown | Tool timestamps for ticket logged and closed | Impact start and restoration recorded for priority incidents | Data audited by sampling; estimates flagged | Monitoring and ITSM data joined automatically and trusted across teams |
| Statistical practice | Mean only | Mean and median shown | Median and a high percentile by priority and service | Control limits used; durability measures paired | Distributions linked to user experience and used to decide where to invest |
| Use in improvement | Numbers used to chase individuals | Team sees its own numbers | Team reviews stage times and waiting monthly | Slow stages lead to funded improvement work | Improvement is shared across teams and suppliers and the measures evolve |

## Checklist

- [ ] Each stage (detect, acknowledge, respond, restore, resolve) has a written start, stop, and pause rule.
- [ ] Impact start and restoration time are recorded as separate fields for priority incidents.
- [ ] Reports show the median and a high percentile, by priority and by service.
- [ ] The count of incidents behind each reported point is shown.
- [ ] The oldest open incidents are listed weekly.
- [ ] Pause states are a short, named list and their share of time is reported.
- [ ] Reopen rate and recurrence are shown beside every time measure.
- [ ] Re-raised tickets are linked to their originals so age carries over.
- [ ] No time measure is used to rank individual agents or engineers.
- [ ] A sample of closed incidents is read each quarter for honesty.
- [ ] Customer survey comments are read beside the ticket data.

## AI prompts

**Compare the mean and the percentiles of our incident durations.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Draft a clock sheet for our incident time measures.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Find where the elapsed time goes in a few long incidents.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Run a gaming review on our incident time targets.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabeling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topics and paired guardrails for an incident time measure you are about to report.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a change to this topic keeps the template, the gaming table, and the cross-references consistent.

## Key takeaways

- An incident has stages, and each stage has its own clock, owner, and remedy. Name the stage you are measuring.
- Incident durations are skewed, so the mean misleads. Report the median, a high percentile, and the age of the oldest open incident.
- Write down where each clock starts and stops, record impact start and restoration separately from ticket closure, and limit pause states.
- Pair every speed measure with a durability measure such as recurrence and reopen rate.
- Describe teams and services, never individual agents, and read a sample of closed incidents to check the numbers are honest.

## References and further reading

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
