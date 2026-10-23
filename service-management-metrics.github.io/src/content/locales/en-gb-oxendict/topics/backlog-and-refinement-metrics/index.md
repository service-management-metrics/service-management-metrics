# Backlog and refinement metrics

**A backlog is a queue of promises, so measure how many promises are waiting, how long they have waited, and how much of the next stretch of work is truly ready, and treat a growing pile of old items as a decision you have not yet made.**

## Overview and motivation

Every team that builds or runs a service keeps a list of work it has agreed to consider. In agile practice this list is the [product backlog](https://en.wikipedia.org/wiki/Product_backlog), an ordered set of items that describes what might be done to improve the product. On a flow board the equivalent is the set of items waiting to the left of the started columns. In IT service management (ITSM), as described by [ITIL](https://en.wikipedia.org/wiki/ITIL), the equivalents are the open incidents, service requests, problems, and changes waiting in a queue. All of these are backlogs. They differ in who fills them, how fast items must leave, and what it means for an item to wait.

Most of the data comes from an [issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system) or an ITSM tool. Backlog metrics answer a plain question: is the amount of promised work in proportion to the capacity to do it, and is the promised work still worth doing? A backlog that grows without limit does not describe a plan. It describes a wish list, and every reader of it, from the product owner to the customer who raised an item, will form their own idea of when it will be done. The honest answer is often "never", and the cost of not saying so is paid in trust, in time spent re-reading old items, and in decisions made on stale information.

Refinement is the activity that keeps a backlog useful. In agile practice, product backlog refinement is the ongoing work of adding detail, estimates, and order to items so that they are ready to be started. Teams that pull work as capacity frees up often call the same activity replenishment or backlog grooming. In ITSM it appears as triage, categorization, and the grooming of a known error or problem list. The metrics in this topic measure the size and age of the backlog, how much work is ready, and how well refinement keeps a window of ready work ahead of the team.

Four terms recur. An **item** is a single entry in a backlog, such as a [user story](https://en.wikipedia.org/wiki/User_story), a defect, a service request, or a problem record. **Item age** is the elapsed time since the item entered the backlog, which is distinct from work item age in flow measurement, where the clock starts when work begins (see topic 2.1, Flow measures). **Ready** means an item meets a team's written definition of ready, so that the team could start it and expect to finish it within a a service-level window. **Refinement** is the work of making items ready and of removing items that will never be done.

Product and service backlogs behave differently, and mixing them is the most common error in this area. A product backlog is a place where items are deliberately held until the product owner decides their order. Waiting is a normal state, and an old item is a reason to ask whether it still matters. A service backlog of incidents and requests is a queue with a promise attached: the customer expects an answer within a time. Waiting there is a cost to the customer from the first minute. A product backlog should be pruned; a service backlog should be drained. Put the two on one chart and the chart will mislead.

The agile view treats the backlog as a living artefact owned by a product owner, kept short enough to understand and ordered by value. The ITIL view treats open records as work in progress against an agreed service level, owned by a practice. Both views share one fact from queueing theory: a queue that receives items faster than it releases them will grow, and the time an item waits grows with the queue (see topic 2.3, Work in process and queueing). [Little's law](https://en.wikipedia.org/wiki/Little%27s_law) links the size of the queue, the rate at which items leave, and the average time an item spends in the system, and it is the reason backlog size and backlog age are two views of the same thing.

A last distinction keeps the topic honest. A backlog is not a measure of productivity or of how busy a team is. A large backlog can mean a popular product, a poorly pruned list, or an under-resourced team, and the number alone cannot say which.

## Key principles

- **Measure age as well as size.** Size tells you how much is waiting; age tells you how long, and the oldest items show where decisions are being avoided.
- **Keep product and service backlogs apart.** A held idea and a waiting customer are different things, and each needs its own reading.
- **Aim for ready work, not a long list.** A few weeks of ready, well-ordered work is worth more than a thousand items nobody has looked at.
- **Pruning is a feature.** Removing an item you will never do is honest work, and a discard rate that is never above zero is a warning.
- **Use distributions.** Report the median and the 85th percentile of item age and show the oldest item, since averages hide the tail.
- **Describe the team and the system.** Backlog metrics show how work reaches a team and how it is handled, never how an individual performed.
- **Tie every number to a decision.** If a backlog chart would not change what you do next, retire it.

## Metric definitions

The metrics below apply to a single backlog at a time. Choose the backlog first (a product backlog, an incident queue, a service request queue, a problem list) and report each metric per backlog. Percentiles use the [percentile](https://en.wikipedia.org/wiki/Percentile) method stated in topic 1.6, Statistical literacy for service metrics.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Backlog size | Number of open items in a named backlog at a point in time | Count of items with status open or ready on the snapshot date; excludes items in progress and closed items | items | Issue tracker or ITSM tool snapshot | Incident management; service request management; problem management | Product backlog; Input queue | Weekly |
| Backlog age | Distribution of how long open items have waited | For each open item, snapshot date minus the date it entered the backlog; report the median, 85th percentile, and oldest item | days | Issue tracker or ITSM creation and status history | Incident management; problem management; continual improvement | Backlog health; aged item review | Weekly |
| Ready work depth | How far ahead the team has ready work | Items meeting the definition of ready / average items finished per week over the last six periods | weeks | Issue tracker ready flag and throughput history | Business analysis; service request management | Definition of ready; refinement | Per planning period |
| Refinement coverage | Share of the near-term window that is ready | Items in the next two fortnights of expected work (or the top N by order) that meet the definition of ready / items in that window | percent | Issue tracker order, ready flag, and planned work | Business analysis; change enablement (for planned change) | Product backlog refinement | Per planning period |
| Backlog inflow-outflow ratio | Whether items arrive faster than they leave | Items added in the period / items removed from the backlog by completion or discard in the same period; a ratio above 1 means growth | ratio | Issue tracker or ITSM created and resolved events | Incident management; service request management; capacity and performance management | Arrival and departure rates | Weekly |
| Backlog discard rate | Share of leaving items removed without delivery | Items closed as will not do, duplicate, or obsolete / all items leaving the backlog in the period; excludes items closed as done | percent | Issue tracker resolution field | Continual improvement; problem management (known error review) | Backlog pruning; product owner ordering | Monthly |
| Service backlog past target | Share of open service items older than their agreed response or resolution window | Open items whose elapsed time exceeds the service target / all open items in the queue; the clock runs from logging and pauses only in states the written definition allows | percent | ITSM tool with service level clock | Service level management; incident management; service request management | Expedite lane; service level expectation | Daily or weekly |

Three clocks need stating plainly. Backlog age starts when the item is created in the backlog and stops when it leaves by completion or discard, so an item that is re-opened starts a new age. Ready work depth uses throughput from completed items only, never planned velocity, since planned velocity is a forecast. Service backlog past target uses the service level clock, which may differ from backlog age because of allowed pauses (see topic 5.1, SLA, OLA, and XLA metrics).

## Recommendations

### Set up the backlog so it can be measured

**1. Name each backlog and its owner.** Every backlog in scope has one owner, one purpose, and one list of item types. A product backlog belongs to a product owner; an incident queue belongs to the service desk or the resolver group. Without a named owner nobody decides when an old item should go.

**2. Separate held items from queued promises.** Tag each item as either an idea the team is holding for ordering or a commitment someone is waiting on. Report backlog size and age separately for each. A support request sitting in a product backlog is a queued promise in the wrong place, and it deserves a service clock.

**3. Write the definition of ready, and keep it short.** A definition of ready lists the few things a team needs to know before it starts: the outcome sought, a rough size, the acceptance conditions, and any dependency. Keep it to a handful of lines and revise it when it stops predicting smooth work. A long checklist turns refinement into paperwork and invites ticking boxes.

**4. Record the entry date and the leave reason.** Age and discard rate both depend on two fields: the date an item entered and the reason it left. Make both mandatory in the tool, and add a controlled list of leave reasons such as done, duplicate, obsolete, and will not do. Missing dates are the most common cause of unusable backlog age (see topic 1.5, Data sources and instrumentation).

### Read size and age together

**5. Report backlog age as a distribution.** Show the median, the 85th percentile, and the oldest item, and a histogram by age band such as under 30 days, 30 to 90, 90 to 180, and over 180. A flat average age can hide a growing pile of ancient items because new items pull the average down. The oldest-item view is the hardest to hide.

**6. Use the inflow-outflow ratio to see growth early.** A ratio persistently above 1 means the backlog will grow, whatever the current size. Plot it as a rolling four-week figure to smooth out holidays and release weeks. Pair it with throughput so the team can see whether growth comes from rising demand or falling output (see topic 2.1, Flow measures).

**7. Convert size into time with throughput.** Divide backlog size by average items finished per period to get a rough number of periods of work waiting, a direct use of Little's law. State clearly that it is an average, not a promise, and show the range using a lower and a higher throughput from recent periods. A product backlog of a hundred items that equals a year of work is a conversation about scope, not a schedule.

### Keep refinement flowing

**8. Aim for a window of ready work, not a full backlog of it.** Refine enough for the next one to three weeks of work and no more. Detail added to an item that will not be started for six months usually goes stale, so measure ready work depth and let it float inside a target band, such as one to three weeks of work, that the team picks and revisits. A depth far above the band is waste; a depth below one week of work is a risk of idle or rushed planning.

**9. Measure refinement coverage on the items about to be started.** Refinement coverage looks only at the top of the order. It answers the question the planning meeting will ask: if we started now, would the next items be ready? Report it just before planning, when a miss can still be fixed, rather than after.

**10. Make refinement a regular, short activity.** Agile guidance, including the Scrum Guide, describes refinement as an ongoing activity and leaves its form to the team. Many teams find a short, frequent session works better than one long meeting.

### Prune and review

**11. Prune on a schedule and report the discard rate.** Review the oldest items every month and ask of each: will we do this in the next six months, and if not, why keep it? Closing an item with a stated reason is not failure. A team that never discards is probably hoarding, and one that discards most of what it receives is probably accepting work it should have declined at the door.

**12. Handle service backlogs by draining, not pruning.** For incident and request queues, the first question is whether items are within their service window. Track the share past target and the oldest open item, and keep the expedite lane for items that cannot wait. Problem and known error lists sit between the two worlds: they are held until a fix is funded, so review them like a product backlog, with a stated review date for each entry (see topic 4.6, Technical debt and known errors).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Backlog size | Closing items in bulk as obsolete, splitting items to look busy, or hiding work in side lists and spreadsheets | Backlog discard rate with leave reasons; periodic comparison of the tool to the real list of requests; customer feedback on dropped items |
| Backlog age | Resetting the entry date by cloning or re-creating old items; moving items between backlogs; re-opening instead of re-raising to change the clock | Audit of cloned and moved items; oldest-item review; age measured from first creation across linked records |
| Ready work depth | Marking items ready without checking them; inflating depth by writing detailed items for low-value work | Sample of ready items read against the definition; rework or return-to-refinement rate when work starts |
| Refinement coverage | Ticking the ready flag to meet the number; narrowing the window so fewer items count | Count of items sent back after planning; delivery goal success and mid-period scope change (see topic 2.5, Delivery forecasting and planning metrics) |
| Backlog inflow-outflow ratio | Closing quickly the easy items to push outflow, or refusing new items at the door to hold inflow down | Age of the oldest items; discard rate; share of requests rejected without a reason; customer-reported unmet needs |
| Backlog discard rate | Discarding items that users still want, to shrink size; or avoiding discards so the number looks gentle | Review of a sample of discarded items with the requester; reopen and re-raise rate for discarded items |
| Service backlog past target | Pausing the clock with a waiting-for-customer state, downgrading priority, or closing and reopening to reset the window | Share of time in pause states; reopen rate (see topic 1.2, Goodhart's law and the psychology of metrics); user satisfaction on closed tickets |

A healthy reading shows a backlog whose size is steady or slowly falling, whose oldest items are few and each have an owner and a stated reason, and whose near-term window is mostly ready. The inflow-outflow ratio hovers near 1, the discard rate is neither zero nor dominant, and refinement coverage rises without planned work becoming more fragile. When the numbers look good but customers still report that nothing happens to their requests, trust the customers and audit the data.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Small, aggressively pruned product backlog | Easy to understand and keep ordered; honest about capacity | Risks discarding ideas that would have mattered later; requesters may feel ignored |
| Large, retained backlog | Preserves every idea and request; useful history | Costly to read; stale items mislead planning and hide real priorities |
| Deep ready window (many weeks refined) | Smooth planning; fewer surprises when work starts | Refined detail goes stale; effort spent on work that may never start |
| Shallow ready window (about a week) | Little wasted detail; stays flexible | Planning can stall when a few items are not ready; less lead time to spot dependencies |
| Strict definition of ready | Fewer vague starts; predictable work | Can become a gate that slows flow and encourages checkbox filling |
| Light definition of ready | Fast; trusts the team | More discovery during the work; more mid-period change |

The practical answer is to hold the backlog small enough to read in one sitting, keep a ready window of about one to three weeks of work, and let the definition of ready stay short enough that people remember it. Service queues need the opposite stance: small is not a goal, finishing within the agreed window is. Choose the cell in each row that fits your context and write the reason down.

## Questions to discuss with your team

**1. If we stopped adding items today, how long would it take to clear the backlog at our recent throughput, and does that number feel believable?**
Start by dividing backlog size by the typical number of items finished per period and show the range using the best and worst recent periods. Ask whether the team believes the result, and where the time would really go. If the number is longer than a year for a product backlog, ask which items could be removed without anyone noticing.

**2. Which are the five oldest items, and who decided they should still be here?**
Read the five oldest items aloud with their entry dates. For each, ask for a named owner and a reason it remains, such as waiting on a dependency, a deliberate deferral, or neglect. Agree an action for each: schedule it, discard it, or write down why it stays and when to look again.

**3. What does "ready" mean here, and did our recent surprises come from items that were not?**
Ask each person to write the definition of ready in their own words, then compare. Differences are the first finding. Look back at items that caused mid-period questions or rework and ask what would have made them ready. The facilitator should resist adding checklist items for every surprise and instead pick the one or two that would have prevented the most pain.

**4. Which of our backlogs hold ideas, and which hold promises to someone?**
List each backlog and sort its items into the two kinds. Support requests, incidents, and committed customer items are promises and need a service clock; ideas and enhancements are held for ordering. Discuss where the two are mixed and what that does to the age chart. The outcome can be as simple as a label and a filter that lets each be reported on its own.

**5. When did we last remove items on purpose, and how did the requesters react?**
Pruning often feels risky, so look at the evidence. Check the discard rate and sample a few discarded items. Ask whether the requester was told, and whether anyone asked for an item back. The facilitator should help the group agree a simple message for requesters ("we are not planning to do this; here is why; raise it again if circumstances change") so that pruning becomes routine and respectful.

**6. If we wanted our backlog charts to look better without helping anyone, what would we do?**
Run the gaming review from topic 1.2 on each backlog metric. Likely answers include closing old items in bulk, cloning items to reset age, marking items ready early, and narrowing the window that coverage counts. For each answer, check whether the guardrail in the table above would catch it. Record the ones that would slip through and choose one new check to try next quarter.

## Four perspectives

### Product and delivery teams

Delivery teams use backlog metrics to keep planning calm. Ready work depth and refinement coverage tell the team whether the next planning session will be smooth, and backlog age shows which promises are quietly rotting. A good habit is to review age, inflow-outflow, and ready depth for a few minutes at each refinement session, then act on one thing. Teams should publish a small, stable set outward and keep detailed age bands for their own use (see topic 2.5, Delivery forecasting and planning metrics).

### Service and operations teams

Operations teams run queues with clocks. Their central reading is the share of open items past target together with the oldest open item, split by priority and by pause state. Problem and known error lists need a review date on each entry so that held items do not become permanent. Teams should also watch the inflow-outflow ratio for the incident queue, since a ratio above 1 over several weeks is an early sign of understaffing or a recurring cause (see topic 3.2, Incident volume and priority).

### Leadership and governance

Leaders see a backlog as a statement of intent. A very large backlog tells them that the organization is promising more than it can deliver, and a quickly shrinking one may mean pruning or reduced demand. Ask what decision the number informs. Fund time for refinement and pruning, avoid targets on raw backlog size, and ask for the age distribution and discard reasons when a size figure is presented (see topic 1.3, Outcomes over output: choosing what to measure).

### Customers and users

Customers experience the backlog as silence. An item raised six months ago with no reply says more than any chart. Users value being told the truth: it is planned, it is not planned and here is why, or it is waiting on a dependency. Give requesters a way to see the status of their items, and treat discarded items as a communication task, not a data cleaning one (see topic 3.5, Service request fulfilment metrics).

## In practice: a service management example

A mid-sized regional insurer runs an internal claims application with a product team and a separate service desk. The numbers in this example are illustrative.

The product team's backlog holds 412 items. The median age is 138 days, the 85th percentile is 410 days, and the oldest item is 29 months old. The team finishes about 14 items per fortnight, so the backlog is roughly 29 fortnights of work at recent throughput. Refinement coverage on the next two fortnights is 55 percent, and planning often runs long as the team discovers missing detail. The service desk shows a different picture: 63 open requests, of which 9 percent are past target, and an inflow-outflow ratio close to 1.

A product owner asks for a smaller number and proposes a target of fewer than 200 items by the end of the quarter. The team does not want to treat that as a goal on its own. Instead, they run a review. They tag items as held ideas or promised work and find that 38 of the 412 are support requests that customers were told would be handled. They move those to the service queue with a service clock. They read the oldest 40 items and find that 22 are obsolete or duplicates. They close those with leave reasons and tell the requesters. They set a ready band of one to two fortnights and spend a short weekly session refining only the top of the order.

Over three fortnights the backlog size falls to 301 and the discard rate for the month is 31 percent, which is high on purpose and flagged in the review. Refinement coverage rises to 88 percent. A quick look at the data reveals a gaming risk: backlog size dropped faster than expected because two team members cloned a handful of aging items into fresh ones to avoid the old-item list. The team catches this when the oldest-item chart no longer matches the discard sample. They agree to measure age from the first creation across linked records and to review clones at each pruning session. The decision recorded for leadership is to drop the size target and instead report the age distribution, the ready window, and the discard reasons each quarter.

## Agile, AI, automation, and analytics

### Agile

Refinement keeps the next stretch of work understood and ready, in conversation with stakeholders. A useful practice is to review backlog age and ready work depth together and to delete or decide on items that have waited too long. The caution is that a backlog groomed only to look short, by discarding items without telling the requesters, damages trust.

### AI

AI tools can generate and split backlog items at volume, which inflates backlog size without adding value. Measure ready work depth and discard rate, and pair backlog size with the share of AI-created items that reach delivery. The caution is that a large AI-generated backlog may add noise for the people who must prioritize it.

### Automation

Pull backlog size and age from the tracker automatically, and flag items that cross an age threshold for a human decision, not for automatic deletion. Automation that closes stale items should itself be measured for wrongly closed items. The caution is that a bot that closes old items improves the age number without answering the requester.

### Analytics

Show the age distribution and the inflow-outflow ratio over time, with the oldest items listed. The decision informed is what to commit to, defer, or drop. The caution is that backlog size alone says little, since a long backlog of well-understood small items may be healthier than a short one of vague items.

## Sector lens

**Startup.** The backlog is often a single list in the founder's head or a simple board. Track only age of the oldest items and whether the next piece of work is ready. Prune hard and often, since the right answer for an idea three months old is often to forget it.

**Small business.** Product and service work usually share a team, so the backlog mixes held ideas and customer promises. Separate them with a label early. A single list read weekly in a short meeting beats elaborate metrics. Watch the age of customer-facing items first, because one forgotten request can cost a relationship.

**Enterprise.** Many teams and many queues multiply the ways to misread a backlog. Define the metrics once, with the clocks and the leave reasons, and avoid rolling product backlog size into a single portfolio figure. Compare a team to its own history, never to another team with different work (see topic 2.4, Value stream metrics). Problem and known error lists deserve their own review cadence.

**Government and public sector.** Commitments to citizens, statutory response times, and audit trails shape the service queues. Treat the statutory clocks as fixed inputs and report the share past target with the definitions used. Product backlogs may be constrained by funding rounds and procurement, so the ready window may need to be longer than in a commercial team. Keep discard reasons visible, since public accountability makes silent dropping risky.

## Business case: motivations, ROI, and TCO

The cost of these metrics is modest. Most data already sits in the issue tracker or ITSM tool. The costs are a mandatory entry date and leave reason, a short pruning session each month, a few minutes in refinement to look at the age and ready charts, and some effort to separate product and service backlogs. A spreadsheet or the tool's built-in reports is enough to start, and no new product needs to be bought.

The return comes from avoided waste and clearer promises. Teams that keep a ready window spend less planning time rediscovering what an item means, and teams that prune stop re-reading items that will never be done. Customers get honest answers sooner, which reduces repeat contacts and escalations. Describe the benefit in terms of patterns the team can check for itself: shorter planning sessions, fewer items returned to refinement after work starts, fewer chasers about old requests, and fewer surprises when leadership asks what is in the pipeline. This topic does not offer a percentage, since none can be given without a source. Measure your own baseline for a quarter and compare.

## Anti-patterns and pitfalls

- **Treating backlog size as a productivity or performance score.** Size depends on demand, scope, and pruning habits. Report size with age and discard reasons, and never compare teams on it.
- **Mixing held ideas and customer promises in one list.** The age chart then reads as neglect and the service clock is missing. Split them with a label and report each separately.
- **Refining everything.** Detailed items that will not start for months go stale. Keep a ready window and refine just ahead of need.
- **Never discarding.** An ever-growing list makes every statement about scope false. Prune on a schedule and record the reason each time.
- **Resetting age by cloning or moving items.** It flatters the chart and loses history. Measure age from first creation across linked records and audit clones.
- **A definition of ready used as a gate.** If it blocks work that the team could safely start, it slows flow. Keep it short and let the team override it with a stated reason.
- **Targets on raw size.** A target of fewer than N items invites bulk closure. Target the age of the oldest items or the share past service target, with a guardrail.
- **Using average age.** New items pull the average down while old ones pile up. Show the median, the 85th percentile, and the oldest item.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and data | Entry dates and leave reasons are missing or inconsistent | Some teams record dates; definitions of ready differ | One written definition of ready and of backlog age; mandatory entry date and leave reason | Data quality sampled; age measured across clones and moves | Definitions shared across teams and suppliers and revised when they stop informing decisions |
| Backlog health | Backlog grows unnoticed; no pruning | Occasional clean-up when the list becomes unmanageable | Scheduled pruning; product and service backlogs separated | Size, age, inflow-outflow, and discard rate trended and reviewed with a guardrail | Backlog policy tuned across teams to demand and capacity; customers see the status of their items |
| Refinement | Ad hoc detail added at planning | Regular sessions for some teams | Short, regular refinement with a ready window agreed | Coverage and ready depth reviewed and linked to delivery outcomes | Refinement shared across teams and dependencies; the window adapts to conditions |
| Use in decisions | Numbers shown only when something goes wrong | Reported to leadership without discussion | Team reviews age and ready depth in refinement | Funded improvement work follows the review | Backlog evidence informs portfolio and capacity decisions across the organization |

## Checklist

- [ ] Each backlog has a named owner and a stated purpose.
- [ ] Held ideas and customer promises are labelled and reported separately.
- [ ] Every item has a mandatory entry date and a leave reason from a controlled list.
- [ ] The team has a short written definition of ready.
- [ ] Backlog age is reported as median, 85th percentile, and oldest item.
- [ ] Inflow-outflow ratio is shown as a rolling figure beside throughput.
- [ ] A ready window is agreed, and ready work depth is reported against it.
- [ ] Refinement coverage is reported before planning, not after.
- [ ] A monthly pruning session is on the calendar and the discard rate is reported.
- [ ] Service queues show the share past target and the pause state use.
- [ ] The gaming review for backlog metrics has been run this quarter.

## AI prompts

**Assess the health of a backlog.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Draft a definition of ready.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Plan a backlog pruning session.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Separate product and service work in a mixed backlog.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail and the neighbouring topics for a backlog metric you are about to introduce.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised backlog topic keeps its gaming vectors, guardrails, and cross-references consistent.

## Key takeaways

- A backlog is a queue of promises, so read size and age together and show the oldest items.
- Keep held ideas and customer promises in separate views, since waiting means different things in each.
- Aim for a short window of ready work and measure refinement coverage on the items about to start.
- Prune on a schedule, record why items leave, and treat a discard rate of zero as a warning.
- Target age and service windows, not raw size, and pair every backlog metric with a guardrail.
- Backlog metrics describe how work reaches a team and how it is handled, and never rank people.

## References and further reading

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
