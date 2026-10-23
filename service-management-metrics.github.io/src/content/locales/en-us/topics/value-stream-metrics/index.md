# Value stream metrics

**Measure a value stream end to end, split every stage into the time work is touched and the time it waits, and count how much arrives usable, because the largest delays and the largest rework in a service organization sit between teams, not inside them.**

## Overview and motivation

Most teams measure their own stage. The service desk reports tickets closed, a development team reports stories finished, a change board reports changes approved. Each number can look healthy while the person who asked for something waits for weeks. The reason is structural: in a typical request, most of the elapsed time is spent in queues and handoffs, and no single team owns that time.

A [value stream](https://en.wikipedia.org/wiki/Value_stream) is the sequence of steps through which a request becomes delivered value. [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) is the technique, developed within [lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing) and later applied to offices, hospitals, and software, of drawing every step from the start of a process to the customer and recording time and volume at each stage. The map is a picture of the current state, followed by a picture of a better future state. The numbers on the map are the subject of this topic.

Two vocabularies meet here. In ITIL 4, the Information Technology Infrastructure Library's fourth edition, a value stream is a specific combination of [ITIL](https://en.wikipedia.org/wiki/ITIL) service value chain activities (plan, improve, engage, design and transition, obtain and build, deliver and support) arranged to create a particular product or service. Examples are "restore service after an incident" and "deliver a change from idea to production." ITIL tells you what a stream is and who needs to be involved. Lean tells you how to measure it. The agile counterpart is the flow of work items across a board, which teams that manage flow already track with measures such as cycle time (see topic 2.1, Flow measures).

The lean measures are few. **Lead time** is the total elapsed time from the moment a request is made to the moment it is delivered. **Process time**, sometimes called touch time, is the time someone is actually working on the item. **Wait time** is the time the item sits between active work, in a queue, in an approval, or in a handoff. **Percent complete and accurate (%C/A)** is the share of items that the next stage can use as received, without having to correct, complete, or send them back. **Takt time** is the pace at which the stream must complete items to match customer demand, calculated as available working time divided by the number of items demanded in that time. The ratio of process time to lead time is **process efficiency**, which this book treats as the value-stream form of flow efficiency (see topic 2.2, Lead time, cycle time, and flow efficiency).

Two relationships make the numbers useful together. First, [lead time](https://en.wikipedia.org/wiki/Lead_time) is the sum of process time and wait time across every stage, so a stream with a lead time of weeks and a process time of days is mostly queue. [Little's law](https://en.wikipedia.org/wiki/Little%27s_law) links that queue to the work in process and the throughput, which is why topic 2.3 (Work in process and queueing) is the natural companion. Second, %C/A compounds. A stream of five stages in which each stage passes 90 percent of its output cleanly delivers a clean result only about 59 percent of the time, a product known in manufacturing as [rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield). The single-stage reports all say 90 percent. The stream says something much less comfortable.

## Key principles

- **Start from the customer's request and end at the customer's use.** A stream measured from "work started" to "work merged" hides the waiting at both ends, which is often the longest part.
- **Separate touch time from wait time at every stage.** A single stage duration blends the two and sends improvement effort to the wrong place. Waiting is usually a design property of the stream, not a failure of effort.
- **Measure quality as completeness and accuracy, as well as speed.** A fast stage that sends work back is slow in the stream's terms, because the rework consumes capacity and adds wait.
- **Map one stream and one item class at a time.** A map that mixes emergency changes with routine requests produces an average that describes neither.
- **Report distributions and show the sample.** Lead time and wait time are skewed, so show the median and a high percentile, and say how many items and which period (see topic 1.6, Statistical literacy for service metrics).
- **Describe streams, never people.** Stage metrics identify where work waits. They are never a ranking of the individuals or teams at each stage.

## Metric definitions

The metrics below are defined for one named value stream and one class of work. Item counts exclude canceled items unless stated. Process time and wait time are reported for each stage and summed for the stream.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Value stream lead time | Elapsed time from the customer's request to the customer being able to use the result | time of delivery confirmation minus time the request was logged; items canceled or withdrawn are excluded; report the median and the 85th and 95th percentiles | days | ITSM tool records joined with delivery events from the pipeline or fulfillment system | Service request management; change enablement | Lead time on the team board | Monthly |
| Process time | Time an item is being actively worked, per stage and for the stream | sum of the intervals in which the item is in an active state, per stage; queue, approval wait, and blocked states are excluded | hours or days | Tracker status history; time records where states are too coarse | Incident management; service request management | Cycle time in "in progress" columns | Monthly |
| Wait time | Time an item sits between active work, per stage and for the stream | stage elapsed time minus the process time of that stage; includes queues, approvals, handoffs, and blocked time | days | Tracker status history and ITSM tool state changes | Change enablement; service desk | Time in queue columns; blocked time | Monthly |
| Process efficiency | Share of the lead time that is process time | sum of process time across stages / value stream lead time for the same items; items still open are excluded | percent | Derived from process time and lead time | Continual improvement | Flow efficiency | Quarterly |
| Percent complete and accurate (stage) | Share of items a stage receives that it can use without correction, completion, or return | items accepted as received / items received in the period; items returned for any reason count as not accepted | percent | Return and reopen events in the tracker or ITSM tool; sampled acceptance reviews | Service request management; change enablement; problem management | Definition of ready; rework rate | Monthly |
| Rolled percent complete and accurate | Share of items that pass every stage cleanly | product of the stage %C/A values for one stream and period (for example 0.90 x 0.85 x 0.95); stages outside the stream are excluded | percent | Derived from the stage values | Continual improvement | Escaped defect and rework rate across a pipeline | Quarterly |
| Handoff count | Number of times an item passes between teams or queues | count of changes of owning team or queue from request to delivery, per item; report the median and 85th percentile | count | Assignment history in the ITSM tool or tracker | Service desk; service request management | Dependencies between teams | Quarterly |
| Takt time ratio | Whether the stream's pace matches demand | median observed interval between completions / takt time, where takt time is available working time divided by items demanded in the same period; a ratio above 1 means the stream is slower than demand | ratio | Demand count from the intake queue and completion events | Capacity and performance management; service level management | Throughput against demand; forecast | Quarterly |

Process time, wait time, and the stage lead times are sums and ratios over the same set of items, so they are computed from item-level records and never by adding stage averages that were measured on different samples. Takt time applies best to repeatable work such as standard requests and routine changes, and it is a poor fit for work where each item is unique.

## Recommendations

### Choose the stream

**1. Pick one valuable stream and one item class, and name its boundaries.** Good first candidates are a high-volume request type, such as access or equipment provisioning, or the path of a normal change from approval to live. Write the trigger that starts the clock and the event that confirms delivery to the customer. If you cannot state both in a sentence each, the stream is not yet defined (see topic 3.5, Service request fulfillment metrics).

**2. Start the clock at the customer's request and stop it at the customer's use.** A stream that starts when a team accepts the work and stops when the team marks it done excludes the intake queue and the confirmation delay. Those are frequently the longest waits. If the data for the true boundaries is not yet captured, report the narrower measure with an honest label and plan the instrumentation (see topic 1.5, Data sources and instrumentation).

### Map the current state

**3. Walk the stream with the people who do the work.** Run a mapping session with a representative from every stage, including the customer side. Draw the steps as they actually happen, then compare with the documented process. The gaps between the two are findings in themselves. The method is described in Rother and Shook's *Learning to See* and in Martin and Osterling's *Value Stream Mapping*.

**4. Record process time and wait time for each stage from real items.** Take a sample of recent items, 20 or more if the volume allows, and follow each through the stream using the tracker history and, where needed, a conversation. Record the touch time and the wait before each stage. Treat the sample as an estimate and say how it was drawn. Repeat the mapping when the stream changes enough to invalidate it.

**5. Show waiting as its own bar.** On the map and the dashboard, draw process time and wait time as separate segments for each stage. A stage with 30 minutes of process time and four days of wait looks nothing like one with four days of process time, though the stage duration is identical.

### Measure quality along the stream

**6. Measure %C/A at the handoff, defined by the receiving stage.** The receiving team decides what "usable as received" means, ideally in a short written acceptance condition. Count a return, a request for missing information, or a silent correction as not accepted. Silent correction is the most common leak, because the work is fixed without anyone recording that it was broken.

**7. Compute rolled %C/A and compare it with the stage values.** Multiply the stage values. A gap between the rolled figure and the best-looking stage is the compounding effect of rework, and it often makes the case for fixing a handoff better than any speed measure. Connect it to the rework and change failure measures for the same stream (see topic 4.4, Change failure and rework).

### Use the numbers to decide

**8. Improve the largest wait first, and look for its cause in the interface.** Rank stages by wait time, then ask what the waiting item is waiting for: a decision, a person, a batch, a scheduled slot, or a missing input. Then ask whether that wait is needed. The [theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) holds that the stream's pace is set by its tightest stage, so improving a stage that is not the constraint changes little. Approval waits in change enablement are a frequent case (see topic 4.3, Change enablement metrics).

**9. Reduce handoffs before optimizing stages.** Each handoff adds a queue, a context switch, and a chance for incomplete information. Count the handoffs, then test whether a stage can be combined, a decision delegated to the team doing the work, or a standard request pre-authorized. ITIL 4 describes standard changes as pre-authorized, low-risk changes, which is exactly this move applied to the change stream.

**10. Compare demand and pace with takt time, for repeatable work only.** Calculate the takt time from real demand data for the period, then compare it with the interval at which the stream actually completes items. A stream slower than takt grows a queue, and Little's law tells you roughly how fast. A stream much faster than takt has slack that could be redirected. Do not use takt time to set targets for individuals.

### Keep the measurement honest

**11. Join data across tools, and say what is estimated.** The stream usually crosses the ITSM tool, the issue tracker, and the pipeline. Join on an item identifier, document the join rule, and mark which stages come from system events and which from sampling. An estimate labeled as an estimate is far more useful than a precise-looking number of unknown origin.

**12. Review the map quarterly, and read raw items every time.** Streams drift as teams reorganize and tools change. Put the map and one decision on the agenda of a standing review with every stage represented (see topic 1.4, Metrics governance and ownership).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Value stream lead time | Starting the clock later, for example at triage instead of the request; closing items before the customer can use them; splitting one request into several small ones | Fixed clock rules written in the metric register; customer confirmation of delivery; count of reopened items and linked child items |
| Process time | Recording idle or blocked states as active so process time rises and the stream looks efficient; or recording waits as work to look busy | Observation of a sample of items; process time compared with time records where they exist; the state definitions reviewed with the team |
| Wait time | Moving waiting into an untracked state, such as a side conversation, a spreadsheet, or a "pending" status that stops the clock | Report the use of pause and blocked statuses; compare ticket age with stage timestamps; sample items for off-system waits |
| Process efficiency | Shrinking the lead time with expedited handling for the measured items, or inflating process time to raise the ratio | Show lead time and process time beside the ratio; report the expedited share; never set a target for the ratio itself |
| Percent complete and accurate (stage) | The receiving stage lowers its acceptance bar so fewer items are returned, or the sending stage pushes work through by informal workarounds | Written acceptance condition; downstream defect and rework counts; sample of accepted items reviewed by a third party |
| Rolled percent complete and accurate | Merging stages so that returns happen inside a stage and disappear from the handoff count; choosing a favorable stage list | Fix the stage list in advance; report stage changes in the decision log; compare with the rework rate for the whole stream |
| Handoff count | Reassigning items to a shared queue or a catch-all owner to avoid counted changes of owner; hiding handoffs in a single "team" that spans several | Count by queue and by role; read the assignment history of sampled items; track the number of reassignments per item |
| Takt time ratio | Counting deferred or rejected demand as not demanded; counting partial completions as completions | Report demand, rejected demand, and backlog age beside the ratio; count completions only when the customer confirms |

A healthy reading shows lead time and process time that are plausible against the sample, wait time that is visibly the larger part and gradually shrinking, %C/A values with a written acceptance condition behind them, and handoffs that fall only when a real decision or step was removed. If lead time improves while rolled %C/A falls, the stream is sending work through faster by moving the cost downstream, which is the pattern the guardrails exist to catch (see topic 1.2, Goodhart's law and the psychology of metrics).

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Workshop-based mapping with a sample | Fast, shows the whole stream, builds shared understanding across teams | A snapshot that ages quickly; sample bias; depends on honest participants |
| Automated measurement from tool events | Continuous, objective, supports percentiles and trends | Sees only what the tools record; off-system waits and silent corrections are invisible |
| End-to-end customer boundaries | Reflects the experience; exposes intake and confirmation delays | Needs data from several systems and a shared item identifier |
| Takt time and demand comparison | Ties pace to real demand; makes queue growth predictable | Weak for unique, non-repeatable work; needs reliable demand counts |
| Rolled %C/A | Shows how rework compounds across handoffs | Needs agreement on acceptance conditions; easy to argue about definitions |

Use the mapping workshop to learn the shape of the stream and automated measurement to watch it. Use team-boundary measures as inputs and customer-boundary measures as the verdict. The cost of the approach is the cross-team conversation it forces, which is also its main benefit.

## Questions to discuss with your team

**1. Where does the customer's clock start and stop in our most common request, and does our report agree?**
Pick one request type and trace it on a whiteboard from the moment the customer asks to the moment they can use the result. Mark where our current report starts and stops counting. The facilitator should look for the gap at each end, since intake queues and confirmation delays are routinely left out. Agree whether to change the report or to label it as a partial view.

**2. For each stage in our stream, how much of the elapsed time is someone working on the item?**
Take five recent items and reconstruct the history of each. Estimate the touch time and the wait for every stage, and compare the totals. Most groups are surprised by how little of the elapsed time is work. Ask what each long wait is waiting for, and resist the first answer, which is usually "people are busy." Record which waits look like design choices rather than capacity limits.

**3. What does the next stage need from us, and how would we know it was missing?**
Have a representative of the receiving stage state the acceptance condition in plain words. Compare it with what the sending stage believes it provides. Count the times in the last month that work was returned, completed by someone else, or fixed silently. The discussion often produces a small checklist that removes a recurring return.

**4. Which handoffs exist because of history rather than need?**
List the handoffs on the map and ask why each one exists. Some are real: a skill, a control, a separation of duties. Others persist because a team boundary was drawn years ago. Choose one handoff to remove, delegate, or pre-authorize, and name who must agree.

**5. If we improved the stage everyone complains about, would the customer notice?**
Compare the stage that attracts the most attention with the stage that holds the longest wait. The theory of constraints suggests that improving a non-constraint changes little for the customer. Ask what would have to be true for the loudest stage to also be the slowest. The facilitator should help the group agree on how to test the answer with data.

**6. How would someone make this stream look better without making it better?**
Walk through the table of gaming vectors with the group. For each metric, ask what a person under pressure might do and what the team would see if they did. Agree which guardrail reading will be reviewed each time and who owns it. The aim is a shared habit of checking, not a search for culprits.

## Four perspectives

### Product and delivery teams

Delivery teams usually see their own stages clearly and the stream poorly. A value stream view shows them how long a finished change waits for review, approval, a release slot, or a deployment window, and how much of that is outside their control. They benefit from %C/A at their handoffs, because it turns vague complaints about "bad requirements" or "late reviews" into counted events. They should be wary of improving their own cycle time at the expense of the receiving stage (see topic 2.8, DORA metrics).

### Service and operations teams

Operations teams own many of the queues: the service desk intake, the change approval, the release schedule, the on-call handoff. They gain from pre-authorized standard changes, clear acceptance conditions for incoming work, and a view of which handoffs add the most wait. They should also expect to be the receiving stage in a %C/A measure, and to define what a complete handover looks like. Their items often carry strict clocks of their own, so the stream measure sits beside, and does not replace, the service level measures.

### Leadership and governance

Leaders sponsor cross-team change and decide whether a stream has a named owner. They should ask for the stream's lead time from the customer's point of view and the largest wait, rather than for a stage-by-stage scorecard. Governance bodies that approve work are themselves stages, and their wait time belongs on the map. Setting targets on the ratio of process time to lead time invites the vectors described above, so use it to direct inquiry (see topic 6.5, Value realization and business outcomes).

### Customers and users

Customers experience the lead time and the rework, and they rarely see the stages. Their most useful contribution is confirming when the result was usable and saying what they had to do to get it, such as resubmitting a form. Customer-facing reports should state the start and stop of the clock in plain words. Customers also benefit when the stream publishes an honest median and a high percentile, because a promise based on the median alone disappoints one request in several.

## In practice: a service management example

A mid-sized insurance company's IT department delivers normal changes to its policy administration platform. Customers in the business complain that "small changes take over a month." All numbers in this example are illustrative.

The department maps the stream from the moment a business owner submits a change request to the moment the owner confirms the change is live. A sample of 20 recent normal changes gives the stage table below, using illustrative median values per stage.

| Stage | Process time (days) | Wait time (days) | %C/A (illustrative) |
| --- | --- | --- | --- |
| Intake and triage | 0.5 | 6 | 85 |
| Build | 1.5 | 5 | 90 |
| Test | 0.5 | 8 | 80 |
| Change approval | 0.25 | 9 | 70 |
| Deployment and confirmation | 0.25 | 4 | 95 |
| Stream total | 3.0 | 32 | 41 (rolled) |

The stream lead time in the sample is about 35 days, so process efficiency is roughly 9 percent. The rolled %C/A is about 41 percent, the product of the five stage values, so fewer than half the changes pass every stage without a return. The change approval stage looks modest by %C/A alone, but its 9 days of wait is the longest single queue, and 30 percent of changes arrive there with missing risk information, which the board sends back.

The team makes two decisions. First, it classifies the ten most frequent low-risk change types as standard changes with pre-authorized procedures, so they skip the board. Second, the intake form gains the risk fields the board always asks for, and a short acceptance checklist is agreed with the board. These choices address the largest wait and the largest compounding return, rather than the build stage, where the team had been asked to "go faster."

Three months later the median lead time for the sampled class falls and the approval wait shrinks, while the rolled %C/A rises. The gaming risk appears in the third month. A product team splits several requests into two or three smaller ones, because small items qualify as standard changes, and the lead time per item drops sharply. The reviewer notices that the count of linked child items rose and that customer confirmation per original request has not improved. The department keeps lead time, but redefines the item as the customer's original request, so splits no longer help. The decision log records the change in definition and restates the previous quarter with the same rule.

## Agile, AI, automation, and analytics

### Agile

A value stream crosses team boundaries, which is where continuous delivery often stalls. A practical step is to map one stream with the people who work in it and their stakeholders, mark the waiting between stages, and choose one handoff to improve. The caution is that a map made once and filed away goes stale, so revisit it as the work changes.

### AI

AI can speed one stage, such as drafting or triage, while the work then waits longer at the next stage. Measure the whole stream before and after an AI change, and not just the stage that got the tool, and pair end-to-end lead time with percent complete and accurate at each handoff. The caution is that local gains from AI can hide a longer total lead time.

### Automation

Instrument stage entry and exit events automatically so the stream is measured from real timestamps. Measure automation by the process time and wait time it removes and by the rework it creates downstream. The caution is that automating one stage without fixing the handoff after it shifts the queue without shortening the stream.

### Analytics

Show process efficiency as a trend and break lead time into touch and wait per stage. The decision informed is which handoff to fix first. The caution is that stage definitions differ between teams, so agree the boundaries before comparing, and avoid ranking teams by stage time.

## Sector lens

**Startup.** A short stream with few handoffs has little to map, and the most useful measure is simply the elapsed time from customer request to customer use. Draw the stream on a wall, read the raw items, and watch for the first handoff that appears as the team grows. Resist building tooling before the stream has stabilized.

**Small business.** One or two people often cover several stages, so handoffs are between roles or tools rather than teams. The tracker or service desk reports give lead time cheaply, and a sample of ten items reveals the waiting. Ask suppliers, such as a managed service provider, for their stage times, since the supplier's queue is often the longest wait.

**Enterprise.** Long streams with many teams and approval gates are where rolled %C/A and handoff count pay off most. Assign an owner to each major stream, map it jointly with every stage represented, and use a shared item identifier so tools can be joined. Different divisions will use the same words for different clocks, so publish one definition per measure and keep a change log.

**Government and public sector.** Statutory approvals, procurement steps, and audit controls form legitimate stages that cannot be removed, and they often hold the longest waits. Map them honestly, separate the mandated wait from the avoidable wait, and show the mandated part to those who set the rules. Keep an audit trail of the data and of any definition change (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is that waiting is usually the largest part of lead time and the cheapest to reduce, because the fix is often a decision, a rule, or a handoff rather than additional capacity. Customers feel the lead time directly, and the organization pays for the rework in capacity that never shows on a stage report. Reducing handoffs and returns also reduces the failure modes that become incidents later.

The costs are modest and mostly human: a few hours of several people's time for the mapping workshop and sample, a shared item identifier across tools (see topic 1.5, Data sources and instrumentation), and a little analyst time each month. The larger cost is the cross-team conversation and the willingness to change a rule that someone owns.

Return shows up as shorter and more predictable lead times, a rising rolled %C/A, fewer returned items, and capacity released from rework. Do not forecast a percentage improvement from published case studies. Estimate the return from your own stream: the volume of items, the current wait, the cost of delay to the customer as best you can state it, and the rework hours you can count. The Flow Framework and the lean literature describe the pattern, and neither supplies a benchmark that transfers to your stream (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Mapping a stage instead of a stream.** A beautifully detailed map of one team's work leaves the longest waits off the page. Map from the customer's request to the customer's use, and add detail only where the waits are.
- **Averaging stage times from different samples.** The sum of stage averages is not the average of the stream. Compute stream measures from item-level records and report medians and percentiles.
- **Treating wait time as an effort problem.** Telling people to work faster rarely shortens a queue. Ask what the item is waiting for and whether the wait is necessary.
- **Optimizing process efficiency as a target.** Once the ratio becomes a goal, process time is padded or lead time is trimmed by tricks. Use it as a prompt for inquiry and pair it with the customer's confirmed lead time.
- **Measuring %C/A without a written acceptance condition.** Without one, every return is an argument. Have the receiving stage write the condition and keep it short.
- **Letting silent rework go unrecorded.** If a stage fixes incoming work without logging it, %C/A is overstated and the sending stage never learns. Record every correction as a return.
- **Using stream metrics to rank teams or people.** They describe the system, and the largest wait is rarely one team's fault. Report by stage and stream, and review the results with all stages present.
- **Mapping once and never again.** Streams drift. Review the map on a schedule and after any reorganization or tool change.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Stream definition and clocks | Stream undefined; each team measures its own stage | One stream mapped by one team; clocks differ from other teams | Written start and stop for each major stream, from customer request to customer use | Clock rules reviewed, changes logged, restated history when definitions change | Definitions revised across teams and suppliers as the stream and demand change |
| Process time and wait time | Only elapsed time is known | Sampled for one stream by hand | Collected from tool events with a documented state model and labeled estimates | Trended with percentiles, wait reductions funded and tracked | Waits across suppliers and teams managed jointly, with shared queues visible |
| Quality along the stream | Rework noticed but not counted | Returns counted by some stages | Written acceptance conditions and stage %C/A shown to the owning teams | Rolled %C/A trended and paired with rework and failure measures | Acceptance conditions co-owned by sender and receiver and linked to customer outcomes |
| Use in improvement | Mapping done once, then shelved | Occasional workshop leads to a local fix | Quarterly review with every stage present | Largest wait or return tackled each quarter with an owner | Improvement ideas arrive from every stage, with decisions logged and results checked |

## Checklist

- [ ] One value stream and one item class are named, with a stream owner.
- [ ] The start and stop of the clock are written in terms of the customer's request and the customer's use.
- [ ] The current-state map was built with a representative of every stage, including the customer side.
- [ ] Process time and wait time are recorded separately for each stage from a sample of real items.
- [ ] Stage and stream times are reported as medians and a high percentile, with the sample size shown.
- [ ] Each receiving stage has a written acceptance condition, and returns are recorded.
- [ ] Rolled percent complete and accurate is calculated from the stage values.
- [ ] Handoffs are counted and the largest wait has a named owner and a planned experiment.
- [ ] Each metric has its gaming vector and guardrail reviewed with the team.
- [ ] The map and the sample are reviewed on a schedule, and definition changes are logged.

## AI prompts

**Draft a value stream map interview guide.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Compute stream measures from a sample.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Find gaming risks in a stream dashboard.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Write an acceptance condition for a handoff.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a metric on your stream map and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited metric topic states its clocks, gaming vectors, and cross-references.

## Key takeaways

- Measure the stream from the customer's request to the customer's use, because team-boundary measures hide the longest waits.
- Split every stage into process time and wait time, and look for the cause of the largest wait in the interface between teams.
- Percent complete and accurate compounds across stages, so the rolled value is usually lower than any stage report suggests.
- Reduce handoffs and pre-authorize routine work before pushing stages to go faster.
- Observe a sample of real items alongside tool data, report percentiles, and label estimates.
- Pair every stream metric with its guardrail, and use the measures to describe the system, never to rank people.

## References and further reading

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
