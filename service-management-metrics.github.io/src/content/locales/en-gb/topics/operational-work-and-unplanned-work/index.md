# Operational work and unplanned work

**A team that builds and runs a service has one pool of capacity, so make the split between planned change and operational work visible, protect it with explicit rules for interruption and expedites, and read the share of unplanned work as a signal about the system rather than a verdict on the people.**

## Overview and motivation

Every team that builds and runs a service spends its time on two broad kinds of work. **Change work** moves the service forward: new features, planned improvements, migrations, and the removal of known weaknesses. **Run work**, also called operational work, keeps the service going: answering incidents and requests, responding to alerts, applying routine patches, restoring access, and handling the manual tasks that the service still demands. Both are legitimate, and a service that has users needs both. The trouble starts when nobody can say how much of each the team is doing, because the plan then silently assumes capacity that the run work has already consumed.

Work can also be sorted by whether it was foreseen. **Planned work** was chosen before the period began, for example during planned working or a quarterly commitment. **Unplanned work** arrives during the period and demands attention that was not budgeted: a production incident, an urgent request from a senior stakeholder, a security fix, or a defect that blocks a customer. The two axes overlap but are not the same. Most run work is unplanned in its timing even when its volume is predictable, and some run work, such as a scheduled certificate renewal, is fully planned. Change work can also be unplanned, as when a regulation changes and a team must respond within weeks.

Agile and ITIL views describe the same pressure in different words. In time-boxed planning, a commitment is a forecast of capacity, and work that arrives mid-period either displaces something or is deferred. On a flow board, work in progress has explicit limits and there is often a dedicated lane for urgent items, and the question is how many urgent items the system can absorb before flow collapses (see topic 2.1, Flow measures). In ITIL 4 (the version published in 2019), incident management, service request management, and problem management describe how run work is received, prioritised, and resolved, while change enablement and the software development and management practice govern planned change. The practices describe workflows. They rarely say how a single team should share its hours between them, and that gap is where this topic works.

Several terms recur here. An **interrupt** is any demand that arrives outside the planning cycle and pulls a person away from the item they are working on. **Interrupt load** is the total effect of those demands on a team over a period, measured by count, by hours, or by the share of capacity they consume. An **expedite** is a work item allowed to jump the queue, usually because its [cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay) is high and immediate. An **expedite lane** is a rule, often a dedicated row on a board, that limits how many expedites may be in progress at once. **Capacity allocation** is the explicit division of a team's capacity among kinds of work, for example a stated share for planned change, a share for run work, and a share for improvement.

Unplanned work is the largest hidden tax on planned delivery: each interrupt costs its own time plus the recovery time lost to [task switching](https://en.wikipedia.org/wiki/Task_switching_(psychology)), and research on interrupted work (Mark, Gudith, and Klocke, 2008) found that people compensate by working faster at the price of more stress. A note on direction. A high share of unplanned work is not a defect in itself. A newly launched service, an ongoing outage, or a regulated event can legitimately consume most of a team's capacity for a while. The aim is neither to drive unplanned work to zero nor to hide it, but to see it, price it, and decide deliberately how much of it the team will absorb and how much the organisation must fix upstream. Unplanned work that recurs for the same cause is the most useful kind to find, because it points at a problem record, a monitoring gap, or a [technical debt](https://en.wikipedia.org/wiki/Technical_debt) item that is cheaper to remove than to keep paying for.

## Key principles

- **Capacity is finite and shared.** Every hour given to run work or to an expedite is an hour not given to planned change, so make the split explicit and visible rather than letting it emerge from whoever shouts loudest.
- **Classify work when it arrives, not afterward.** Tag each item as planned or unplanned and as change or run at the moment it enters the system, because reclassification at the end of the period is a recollection and not an observation.
- **Interrupts have a price beyond their duration.** Count the recovery cost of switching as well as the minutes spent, and prefer designs that batch or route interrupts to a named person.
- **Expedite by rule, not by rank.** An expedite lane with a limit and an entry test protects flow; unlimited expediting by seniority removes it.
- **Reserve capacity on purpose.** A planned buffer is more honest than a plan that assumes none.
- **Treat repeated unplanned work as a defect in the system.** A weekly repeat is a candidate for a problem record or an automation.
- **Measure teams and services, never individuals.** The person who answers most interrupts is usually the person who knows the most; ranking them punishes the wrong thing (see topic 1.2, Goodhart's law and the psychology of metrics).

## Metric definitions

Seven metrics describe how capacity is divided and disturbed. Each needs a written classification rule, because every one of them depends on how items are tagged. The period in each formula is the same fixed window for the team, such as a week, a month, or a quarter.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Unplanned work ratio | Share of completed work items, by count, that were not in the plan at the start of the period | items completed in the period that entered the board or backlog after the period began / all items completed in the period; clock starts at the planning event, stops at the end of the period; cancelled items and items still open are excluded | percent | Issue tracker with item creation time and the planning snapshot | Incident management; service request management | Scope change; Work item types | Monthly |
| Capacity allocation adherence | How closely actual effort matches the stated split between change work, run work, and improvement work | for each category, absolute difference between actual share and agreed share, summed and halved; actual share is completed items (or logged effort where the team records it) in that category / all completed items; items with no category are reported separately and not dropped | percent points | Issue tracker work type field, and time records where they exist | Continual improvement; capacity and performance management | Capacity allocation or capacity planning | Monthly |
| Interrupt rate | How often demands outside the plan reach the team and reach the people doing planned work | interrupts received by the team in the period / working days in the period, where an interrupt is any ticket, page, message request, or ask logged to the team's intake channel and not already on the plan; duplicates of the same underlying demand are counted once | interrupts per working day | Intake channel log, ITSM queue, alert system, and team interrupt log | Incident management; service request management; monitoring and event management | Interruption log or team working agreement | Weekly |
| Expedite rate | Share of completed items that used the expedite lane | items completed in the period that entered the expedite lane / all items completed in the period; the clock starts when the item is marked expedite and stops at completion; items downgraded out of the lane before work began are counted separately | percent | Board lane history or priority field history | Incident management; change enablement (emergency change) | Expedite class of service | Monthly |
| Planned work displacement | Number of planned items pushed out or abandoned to make room for unplanned work | planned items removed from the period, postponed, or left unfinished with a recorded reason of "displaced by unplanned work" in the period (count); items removed because the goal changed are excluded | count of items | Board change history, with the reason field | Change enablement; continual improvement | Delivery goal protection; scope negotiation | Monthly |
| Repeat unplanned work share | Share of unplanned items whose cause matches an earlier unplanned item in the lookback window | unplanned items completed in the period that link to the same problem record, alert rule, or cause tag as an earlier item within the lookback window (for example 90 days) / all unplanned items completed in the period; items without a cause tag are reported as a separate unclassified count | percent | ITSM incident and problem records, tracker cause tags | Problem management; known error management | Retrospective action items; recurring defect tags | Monthly |
| Planned commitment reliability | Share of the items the team planned for the period that it finished in the period | planned items finished in the period / planned items at the start of the period; items added after the start are excluded from both counts | percent | Planning snapshot and tracker completion history | Service level management; change enablement | Forecast reliability | Monthly |

Time measures in this topic, such as the age of an expedite item, should be shown as percentiles (for example the median and the 85th percentile) and not as an average, since one long incident distorts a mean (see topic 1.6, Statistical literacy for service metrics).

## Recommendations

### Make the split visible

**1. Tag every item with two fields at intake.** Add a work type (change, run, improvement) and a planned flag (planned, unplanned) to the intake form of the tracker or the ITSM tool, and make both required. The tags are cheap when set at creation and unreliable when reconstructed later. Write the definition of each value in one sentence in the team working agreement, and review it when the tags stop describing the work (see topic 1.5, Data sources and instrumentation).

**2. Freeze a planning snapshot.** "Unplanned" only has meaning relative to a plan, so capture the list of items at the start of the period and store it. Compare completed work against the snapshot, not against what the board looks like at the end.

### Allocate capacity on purpose

**3. Agree a capacity allocation and treat it as a hypothesis.** Decide, as a team and with the product owner or service owner, roughly what share goes to planned change, to run work, and to improvement. Start from what the data shows the team has actually been doing for the last several periods, then choose a target that moves in the direction you want. Revisit the split at each planning cycle; a fixed percentage copied from another team's slide is a guess and not a decision.

**4. Reserve a buffer sized from your own history.** Use the team's own interrupt record to size a buffer for unplanned work, for example by looking at the middle and the upper range of the weekly unplanned share over recent periods, and plan only the capacity that remains. A buffer that is regularly unused can shrink; one that is regularly exhausted needs a larger allocation or a cause removed. The relationship between load and delay in a queue (see [Little's law](https://en.wikipedia.org/wiki/Little%27s_law), and topic 2.3, Work in process and queueing) explains why a system run at full utilisation has no room to absorb a surprise.

### Design the interrupt path

**5. Route interrupts to a named role.** Rotate a single person, often called the interrupt handler, duty engineer, or shield, to take incoming demands for a day or a week, while the others protect their focus. The role has a written scope, a handover note, and a limit on how long it lasts so that the load is shared fairly. Teams on a rotation should connect it to on-call practice (see topic 5.7, Toil and on-call metrics).

**6. Triage at the door.** Interrupts differ enormously in urgency. Apply a short [triage](https://en.wikipedia.org/wiki/Triage) rule at intake that asks three questions: is a service down or a user blocked, is there a date that cannot move, and can the demand wait for the next planning event? Items that fail all three go to the backlog and are planned like any other work. In ITIL 4 terms this is the prioritisation step of incident management and service request management applied to the team's own intake.

### Govern the expedite lane

**7. Give the expedite lane a limit and an entry test.** The lane holds at most one or two items at a time, and an item enters only if its cost of delay is high and immediate and the requester can state it. A stated test lets the team say no to the request that is merely loud. If the lane is always full, it has stopped being an exception, and the team should review the entry test and the upstream causes. The lane is a [class of service](https://en.wikipedia.org/wiki/Class_of_service) with its own rules; see the Kanban literature for the underlying idea (Anderson, 2010).

### Remove the sources

**8. Link unplanned items to a cause and review the repeats.** Add a cause tag or a link to a problem record to every unplanned item. Once a month, list the causes that recur and send the top few to problem management, to the backlog as technical debt items, or to monitoring improvements (see topic 4.1, Problem management metrics, and topic 4.6, Technical debt and known errors). The repeat unplanned work share tells you whether those fixes land. The pattern is similar to the elimination of toil described in the Google SRE book, where repetitive manual operational work is treated as something to be engineered away; the book suggests keeping it below a share of an engineer's time (Beyer et al., 2016), a guideline each team should test against its own data instead of adopting as a target.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Unplanned work ratio | Adding items to the planning snapshot late so they count as planned; leaving urgent work untracked so it never counts; tagging planned items as unplanned to excuse a missed plan | Frozen planning snapshot with a timestamp; unclassified count; a sample of closed items read each quarter to compare the tag with what happened |
| Capacity allocation adherence | Moving items between categories to match the agreed split; splitting one item into several to shift the shares; choosing a split the team already hits | Fixed category definitions written in the working agreement; a sample of item descriptions against their category; planned commitment reliability |
| Interrupt rate | Turning interrupts into silent favours that never reach the log; combining several demands into one entry; discouraging people from asking | Compare the log with intake channel traffic and the alert history; ask the team in the retrospective whether the log matches their experience |
| Expedite rate | Keeping urgent work out of the lane to look disciplined, or putting everything in it to get speed; redefining expedite to mean "important" | Lane limit with an entry test; share of expedite items that met the test on review; planned work displacement |
| Planned work displacement | Recording displacement as a scope change by choice; letting planned items fail quietly without a reason; avoiding planned items likely to be displaced | Reason field required on every removed or unfinished item; planned commitment reliability; review of reasons at the retrospective |
| Repeat unplanned work share | Using a coarse cause tag so repeats are hidden, or a fine one so nothing repeats; closing the problem record to remove the link | Cause tag taxonomy reviewed quarterly; unclassified count; recurrence check after a problem record closes |
| Planned commitment reliability | Planning small to finish everything; padding estimates; counting a partial item as done; dropping hard items before the period begins | Size and value of items planned compared over time; outcome check on the delivery goal; unplanned work ratio, so a high value is not read as health when the plan was timid |

A healthy reading is an unplanned work ratio the team can explain, an expedite lane that is rarely full, and a repeat share that falls after fixes. A suspiciously perfect reading is the thing to investigate. A team that reports zero unplanned work has either a very quiet service or an untracked one, and the way to tell is to compare the log with the alert and ticket history.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Fixed capacity allocation (stated percentages) | Easy to explain; protects improvement work from being starved | Ignores real variation; can be gamed by re-labelling |
| Reserved buffer sized from history | Matches the plan to the real interrupt load | Needs several periods of reliable data; can hide a chronic cause |
| Rotating interrupt handler | Protects the focus of most of the team; spreads load fairly | The handler's own planned work stalls; the role needs handover and support |
| Strict expedite limit | Keeps flow predictable; forces a stated cost of delay | Requesters may route around it; a real emergency can feel blocked |
| Counting items rather than effort | Simple and hard to inflate | Treats very different sizes alike |

The practical position for most teams is to count items first, add effort only where the item counts mislead, protect a small buffer and a small expedite lane, and use the cause tag to attack the largest repeat.

## Questions to discuss with your team

**1. What share of our last period's completed work was unplanned, and how do we know?**
Open the planning snapshot beside the list of completed items and count the items that were not in the plan. Compare the result with each person's sense of the period; the two often differ. The facilitator should ask how many items were never logged, because the honest answer shapes every other number.

**2. Which three sources of interrupts cost us the most, and who could remove them?**
List the sources by count and by the effort they absorbed, such as alerts, repeated requests, escalations, and ad hoc asks from stakeholders. Mark each as removable, routable, or unavoidable. The facilitator should push for a named owner outside the team for any source the team cannot fix itself.

**3. What split between change, run, and improvement work do we actually want?**
Compare the split the data shows with the split people believe they have and with the split leadership expects. Discuss which kinds of work the team would drop first under pressure, since that reveals the real priorities. Choose a target for the next period and a way to check it.

**4. What is our rule for the expedite lane, and who decides?**
Read the current rule aloud, or note that none exists. Ask for the last three expedites and test each against a stated cost of delay. Discuss what the team does when a senior person asks for a jump that fails the test, and who backs the decision.

**5. When we are interrupted, what does it cost us after the interruption ends?**
Ask people to describe how long it takes to regain their place in a task after a typical interrupt.

**6. Which unplanned item has come back more than once, and what would stop it?**
Take the last quarter of unplanned items and look for repeats by cause. Pick the one with the highest total effort and trace why it recurs: a missing alert, an unfixed defect, a manual step, or a supplier issue. Decide whether it goes to a problem record, to the backlog, or to a supplier conversation.

## Four perspectives

### Product and delivery teams

Delivery teams feel unplanned work as broken plans and slipping forecasts. They benefit from tagging at intake, a frozen planning snapshot, and a forecast built from a buffer based on history (see topic 2.5, Delivery forecasting and planning metrics). The displacement record shows product owners what each late request cost.

### Service and operations teams

Operations teams carry most of the run work. They need a named interrupt handler, a triage rule, and a route from recurring requests and alerts to fixes (see topic 5.5, Monitoring and alert quality metrics). The repeat share is their strongest argument for investment in problem management.

### Leadership and governance

Leaders set the real allocation through the requests they make and the deadlines they accept. They should ask for the ratio and its causes, fund improvement work that removes repeat interrupts, and avoid using expedites as the normal way to get things done.

### Customers and users

Customers see unplanned work as outages, slow answers, and delayed features. They gain when the team has room to fix causes, and they need a fair path for raising urgency. Service level agreements (see [service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement)) should reflect the interrupt load the team carries (see topic 5.1, SLA, OLA, and XLA metrics).

## In practice: a service management example

A regional health insurer's IT department runs a claims platform with one product team of seven people and a shared service desk. The team builds new features and also supports the platform in production. All numbers in this example are illustrative.

For six weeks, the team's planned commitment reliability fell from about 85 percent to 55 percent, and the product owner began to question the team's estimates. The team lead pulls the tracker history. Using the frozen planning snapshots, the unplanned work ratio is 41 percent by count in the latest period, compared with a recollection by the team of "maybe a fifth." The unclassified count is 9 percent, so the ratio is reasonably trustworthy.

Splitting the unplanned items by cause shows that 14 of 24 were run work, and of those, 9 trace to one claim-submission batch job that fails after a data format change by a partner and is restarted by hand each time. The repeat unplanned work share is 58 percent. Interrupt rate is 6 per working day, and 4 of those reach the engineers who are doing the planned work, because the service desk escalates directly to whoever answers first. The expedite lane holds two items at once most days, and the expedite rate is 23 percent. Planned work displacement is 7 items in the period, of which 5 carry the reason "displaced by unplanned work."

The team makes four decisions with the product owner and the service owner. First, one engineer at a time becomes the interrupt handler with a written scope and a handover note, and escalations go to that person only. Second, the expedite lane is limited to one item, with an entry test requiring a stated cost of delay, and each expedite records the item it displaced. Third, the batch job failure is raised as a problem record, with a fix and a partner conversation placed in the backlog as improvement work, using 15 percent of capacity, which is the share the team chooses as its first allocation to improvement. Fourth, the team plans the next period of work with a buffer sized from the upper range of its recent unplanned share, not with a full load.

Six weeks later, the unplanned work ratio is 27 percent, the repeat share is 22 percent, the interrupt rate reaching planned workers is 1.5 per day, and planned commitment reliability is about 78 percent (all illustrative). The team has not reached its earlier 85 percent, and says so.

The gaming risk the team catches: in the second period under the new arrangement the interrupt rate drops sharply, and the team lead notices that people are messaging the handler directly, so favours never reach the log. Comparing the log with intake channel and alert history shows the real volume was unchanged. The team agrees that the handler redirects direct messages to the intake channel. The fault lay in the design of the path, not in any person.

## Agile, AI, automation, and analytics

### Agile

A team that builds and runs a service has one pool of capacity, and a sustainable pace needs honest limits on interruption. A practical step is to agree a capacity split with stakeholders and review the unplanned share at the regular improvement conversation. The caution is that a target for the unplanned share can push teams to label operational work as planned.

### AI

AI can shift work between planned and unplanned, for example by automating routine fixes while adding review and oversight tasks. Track the unplanned share and the repeat unplanned work share before and after AI changes, and include time spent correcting AI output as its own category. The caution is that hidden correction work can swallow the capacity AI was meant to free up.

### Automation

Capture the type of work from the tracker automatically with a small, agreed set of categories. Measure automation by the unplanned work it removes and by the new incidents it causes. The caution is that automated remediation that restarts services without recording cause makes repeat unplanned work look like fresh work.

### Analytics

Show the share of unplanned work over time and the causes of repeated items. The decision informed is how much capacity to reserve and which sources of interruption to remove. The caution is that categories are chosen by people, so audit a sample of items for honest classification.

## Sector lens

**Startup.** Nearly all work feels urgent and the same few people do change and run work. Keep the classification to two tags and set an explicit limit on expedites. The unplanned ratio is the evidence for saying "we can do the roadmap or the support load, not both."

**Small business.** One administrator or a small team often handles every request. Use the tool's ticket types as the classification, log interrupts for a month to learn the pattern, and reserve a fixed daily block for planned work. Ask suppliers for their volume and repeat-cause reports.

**Enterprise.** Unplanned work for one team is often planned work for another. Agree shared definitions, report per team and per service, and fund fixes at the level where the cause lives (see topic 9.3, Collaboration and handoff metrics).

**Government and public sector.** Capacity may be fixed by headcount ceilings, and run work may be set by statute or audit findings. Make these part of the allocation, document the classification rules, and keep an audit trail (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is predictable delivery: a plan that ignores interrupt load is missed repeatedly, and visible unplanned work gives the team a stronger voice when it asks for time to remove causes.

The cost of collecting these measures is modest when the tags and the planning snapshot are part of the normal workflow. The main costs are the time to agree definitions, the discipline to tag at intake, a small amount of tooling to join tracker and ITSM data (see topic 1.5, Data sources and instrumentation), and the hours of the interrupt handler, whose own planned work slows. Adding hour-level time records costs considerably more and is often resented, so add them only if item counts prove misleading. The total cost of ownership is dominated by people's time, so count it.

The return shows up in patterns the team can measure for itself rather than in an assumed figure. Look for a falling repeat unplanned work share after problem fixes, a rise in planned commitment reliability, fewer displaced planned items, and fewer interrupts reaching people on planned work. Where hours are known, the effort recovered from a removed recurring cause can be priced at the team's own cost per hour and set against the effort of the fix (see topic 7.5, Service cost and unit economics, and topic 7.7, Return on investment and business case). Do not borrow industry percentages for unplanned work; no figure from another organisation is a substitute for your own history.

## Anti-patterns and pitfalls

- **Treating all unplanned work as failure.** Some of it is the service doing its job, and a target of zero pushes work out of the log. Instead, ask which part is expected, which is avoidable, and set a buffer for the first.
- **Hero culture.** The person who rescues every emergency becomes indispensable, tired, and a single point of failure. Instead, share the interrupt role by rotation and reward the removal of causes.
- **Everything is an expedite.** A lane that is always full is just a second queue. Instead, set a limit, require a stated cost of delay, and review the entry test monthly.
- **Planning at full utilisation.** A plan with no slack guarantees that every surprise displaces something. Instead, size a buffer from your own interrupt history and plan the capacity that remains.
- **Classifying after the fact.** Tags added at the end of the period reflect memory and mood. Instead, require the tags at intake and freeze the planning snapshot.
- **Absorbing demand silently.** Favours that never reach the log make the load invisible and the planning wrong. Instead, make one intake path the rule and redirect side-channel asks to it.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Classification and visibility | Work is not tagged; unplanned work is felt, not counted | Some teams tag planned and unplanned work with their own words | One written definition of work types and the planned flag, applied at intake with a planning snapshot | Unplanned ratio and unclassified count trended and reviewed each period | Definitions shared across teams and suppliers, and revised when they stop informing decisions |
| Capacity allocation | Capacity is assumed to be fully available for planned work | A rough buffer is applied by some teams | An agreed split between change, run, and improvement, with a buffer sized from history | Adherence reviewed and the split adjusted with product and service owners | Allocation negotiated across teams that share platforms, services, and people |
| Interrupt and expedite handling | Anyone interrupts anyone; urgency is set by seniority | A habit of a duty person or an urgent row exists in some teams | A named interrupt role, a triage rule, and an expedite lane with a limit and an entry test | Expedite rate, displacement, and interrupt rate reviewed against a guardrail | Interrupt routing and expedite rules coordinated across teams, with shared on-call and escalation paths |
| Removal of causes | Same problems recur and are fixed by heroics | Some repeats are noticed and discussed in retrospectives | Unplanned items carry a cause tag and the top repeats go to problem management | Repeat share tracked and fixes funded as planned improvement work | Causes traced across teams, suppliers, and customers, and improvement is routine |

## Checklist

- [ ] Every work item carries a work type (change, run, improvement) and a planned flag, set at intake.
- [ ] Definitions of planned, unplanned, change, and run are written in the team working agreement.
- [ ] A planning snapshot is frozen at the start of each period and stored.
- [ ] The unplanned work ratio is reported as a trend, beside the unclassified count.
- [ ] The team and its owners have agreed a capacity allocation and reviewed it in the last quarter.
- [ ] One intake path exists, and side-channel requests are redirected to it.
- [ ] An interrupt role with a written scope rotates among the team.
- [ ] The expedite lane has a limit, an entry test, and a record of what each expedite displaced.
- [ ] Unplanned items carry a cause tag or a problem record link, and repeats are reviewed monthly.
- [ ] Measures are reported at team and service level, and never used to rank individuals.

## AI prompts

**Design a work classification for intake.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Analyze an interrupt log for patterns.**

```text
Here is a summary of our interrupts over [period]: [paste anonymised counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organisations. List your
assumptions and the data you would need to be more confident.
```

**Draft an expedite lane policy.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic owns a related metric, such as incident volume or toil, and the guardrail that belongs beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited version of this topic keeps its clocks, classification rules, and gaming table in step.

## Key takeaways

- Planned and unplanned work, and change and run work, share one pool of capacity, so make the split visible and agree it deliberately.
- Tag work at intake and freeze a planning snapshot, since "unplanned" only means something against a recorded plan.
- Interrupts cost recovery time as well as minutes, so route them to a named role and triage them at the door.
- An expedite lane needs a limit, an entry test, and a record of what each expedite displaced.
- Repeat unplanned work is the strongest signal for problem management and improvement work, and the share of repeats shows whether fixes land.
- Report at team and service level, compare a team with its own history, and never rank individuals.

## References and further reading

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
