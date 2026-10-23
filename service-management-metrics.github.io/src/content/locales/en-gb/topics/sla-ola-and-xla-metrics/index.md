# SLA, OLA, and XLA metrics

**A service level agreement tells a customer what was promised, an operational level agreement tells internal teams what they owe one another, and an experience level agreement tells you whether the people using the service are actually better off, so you need all three and you need to report them honestly rather than as a wall of green.**

## Overview and motivation

A [service level agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) is a documented commitment between a service provider and a customer about what the service will deliver: its hours, its availability, how quickly the provider responds to and resolves incidents, and how fast it fulfills requests. In ITIL 4 (the 2019 edition of the framework published by the owner, now AXELOS under PeopleCert), the [service level management](https://en.wikipedia.org/wiki/ITIL) practice defines these targets, monitors them, and reports on them. An [operational level agreement (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) is the internal counterpart: an agreement between teams in the same organisation, for example between the service desk and the network team, about what each will do and how fast so that the customer-facing SLA can be met. An underpinning contract plays the same role for an external supplier (see topic 8.4, Supplier and contract metrics).

An experience level agreement (XLA) is the newest of the three. It records an agreed outcome in terms of how people experience the service, such as how easily they got their work done, how they felt about the interaction, and whether the service helped them reach their goal. The idea has grown in service management practice because an SLA can be met while users are unhappy. This topic owns the three agreements and their reporting. The depth on how to measure experience belongs to topic 6.2, Experience level agreements, and the engineering counterparts of the targets belong to topic 5.2, SLIs, SLOs, and error budgets.

Three agile and reliability concepts sit beside these agreements. A [service level indicator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) is a measured property of a service, such as the share of requests served successfully. A [service level objective (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) is the internal target for an SLI, usually stricter than anything promised to a customer. [Site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) practice treats the SLO, and the error budget that follows from it, as a shared decision tool for product and operations. The SLA is the contract; the SLO is the engineering aim; the SLI is the measurement. Keeping the three apart avoids a common muddle in which a contractual penalty clause is used to steer daily engineering decisions.

The family has a well-known failure called watermelon reporting: a report that is green on the outside and red on the inside. Every SLA line shows as met, yet customers are frustrated, because the measures were chosen for what the provider could reliably hit rather than for what the customer cares about, or because averages hide the bad tail, or because the clock was paused through the worst of the wait. The remedy is partly technical (percentiles, honest clocks, user-centred indicators) and partly social (agreements negotiated as a conversation, reviewed on a cadence, and read as a question about the service, not as a verdict on a team). The wider warning about measures that turn into targets is in topic 1.2, Goodhart's law and the psychology of metrics.

Agile teams think in objectives and budgets; ITIL service level managers think in agreements and reviews. The views fit together: the agreement states the outcome, the objectives and indicators are how the team keeps the promise, and the experience measures confirm that it mattered.

A last term: a [percentile](https://en.wikipedia.org/wiki/Percentile) is the value below which a stated share of observations fall. The 85th percentile of resolution time is the time within which 85 percent of tickets were resolved. Most SLA targets are written as a percentile or a share, so the way the percentile is computed and what is included in it are the core of the topic (see topic 1.6, Statistical literacy for service metrics).

## Key principles

- **Agree outcomes with the customer, then measure them.** An agreement is a negotiated statement of what the customer needs and the provider can sustain, written in the customer's words and reviewed together.
- **Report distributions and shares, never a single average.** An average resolution time that meets the target can sit on top of a long tail of very late work. State the percentile, the population, and the count.
- **Make the clock honest.** Every target has a start event, a stop event, and a list of pause conditions. Publish the clock rules, and report how often each pause is used.
- **Layer the agreements.** The SLA is built on OLAs and supplier contracts, and the objectives set inside the team should be tighter than the promises made outside it. A gap at any layer shows up as a breach at the top.
- **Pair every operational measure with an experience measure.** A met target and a poor experience, or the reverse, is the most useful signal in the report.
- **Count the near misses.** Work that finished just inside the limit tells you more about risk than the work that finished far inside it.
- **Report on teams and services, never on people.** Agreements describe what a service or a team commits to. They are not a way to rank individuals.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLA attainment rate | Share of measured items (incidents, requests, or time windows) that met a stated SLA target in the period | Items that met the target divided by items that were measured. Clock starts at the logged time defined in the agreement (for example ticket creation) and stops at the defined stop event (for example restoration confirmed). Excluded: items cancelled as duplicates and time inside agreed exclusions such as scheduled maintenance. Report the count beside the share | Percent, with n | ITSM tool timestamps; monitoring data for time-based targets | Service level management; incident management; service request management | Service level objective attainment over a rolling window (see topic 5.2, SLIs, SLOs, and error budgets) | Monthly, with a weekly internal view |
| Near-miss share | Share of items that met the target but finished inside the last tenth of the allowed time | Items finished at 90 percent or more of the target time and still within it, divided by items that met the target. Same clock as the SLA. n/a for time windows (it applies to time-to-target measures only) | Percent | ITSM tool timestamps | Service level management | Proportion of work close to the service level expectation on a flow chart (see topic 2.1, Flow measures) | Monthly |
| Clock pause share | Share of total elapsed ticket time spent in states that pause the SLA clock | Total pause time divided by total elapsed time from start to stop, for items in scope. Excludes items with no pause state used. Report by pause state | Percent | ITSM tool status history | Service level management; incident management | Blocked time and wait time in a flow view (see topic 2.4, Value stream metrics) | Monthly |
| OLA attainment rate | Share of internal hand-offs that met the OLA target between two teams | Hand-offs completed within the OLA target divided by hand-offs received. Clock starts when the receiving team is assigned and stops when it returns or closes the item. Excluded: items reassigned in error, counted separately | Percent, with n | ITSM tool assignment history | Service level management; incident management | Hand-off wait time and blocked work between teams (see topic 9.3, Collaboration and handoff metrics) | Monthly |
| Hand-off wait time (85th percentile) | Time an item waits in a receiving team's queue before work begins | 85th percentile of the time between assignment to the receiving team and the first logged action by that team. Excluded: items waiting on the customer | Hours or minutes | ITSM tool assignment and activity history | Service level management; incident management | Queue time in a flow view (see topic 2.3, Work in process and queueing) | Weekly |
| Experience score by journey | Customer or user rating of how the service supported a defined journey, such as getting a new laptop or recovering from an outage | Mean and distribution of survey ratings on a fixed scale for completed journeys in the period. Report the response rate and respondent mix. Excluded: partial surveys. Not a single average, so show the distribution | Rating scale, with response rate | Short post-interaction survey; journey events from the ITSM tool | Service level management; customer satisfaction practices (see topic 6.1, Customer satisfaction metrics) | Customer feedback and outcome measures | Monthly, with each wave shown |
| Watermelon gap | Share of reporting periods or services where the SLA reads as met while the experience measure or a user-impact measure reads as poor | Services (or periods) with SLA attainment at or above target and experience below its agreed level, divided by services (or periods) with SLA attainment at or above target. The experience level must be agreed before the period is scored | Percent of green services | SLA attainment and experience score together | Service level management; continual improvement | Retrospective of results against outcomes | Quarterly |
| Agreement coverage and currency | Share of live services whose SLA, OLAs, and supplier contracts exist and were reviewed within the agreed interval | Services with all three layers documented and reviewed within the interval, divided by live services in the service catalogue. Interval is set by the organisation. Excluded: services in retirement | Percent | Service catalogue (service catalogue in ITIL's own spelling) and agreement register | Service level management; service catalogue management; supplier management | Working agreements and team charters reviewed on a regular cadence | Quarterly |

## Recommendations

### Set up the agreements

**1. Write each SLA in the customer's language and tie it to one outcome.** Start from what the customer needs, such as "a locked-out employee is working again quickly", and then choose the measure. A short agreement with a handful of meaningful targets beats a long one that nobody reads. Write down the clock for each target: the start event, the stop event, and the pause conditions (see topic 3.3, Incident response and resolution time).

**2. State targets as percentiles or shares, with a stated population.** "90 percent of priority 2 incidents restored within four hours" says more than "average restoration under two hours". Agree on what counts: which priorities, which hours, which request types. Show the count with every percentage so a month with eight incidents is not read like a month with eight hundred.

**3. Derive OLAs from the SLA, and give each one a named owning team.** Work backwards from the customer target: if the customer is promised restoration within four hours, the OLAs must leave room for detection, triage, hand-offs, and fix. Write each OLA as a short mutual agreement with a receiving team, an expected response time, and a route for disputes. An OLA exists to help teams plan, so keep it as light as the relationship allows.

**4. Keep the objectives tighter than the promise.** Set the internal SLO at a stricter level than the SLA so a bad week is noticed and corrected before a customer-visible breach (see topic 5.2, SLIs, SLOs, and error budgets). Treat the SLA as a floor that finance and legal care about and the SLO as the number engineers steer by. Use the error budget as the way product and operations decide between feature work and reliability work.

### Measure honestly

**5. Publish the clock rules and report on pauses.** The most common route to a green report is a generous pause state, such as "waiting for customer" used when the provider is the one who is waiting. Report the clock pause share by pause state, sample some paused tickets each month, and ask whether the customer would agree the clock should have stopped. Keep the list of allowed pause reasons short and written into the agreement.

**6. Show the whole distribution beside the target.** Place the median, the 85th or 95th percentile, and the worst decile beside the attainment rate. A flat 95 percent attainment can hide a tail of work that took days. (see topic 1.6, Statistical literacy for service metrics).

**7. Track near misses and breach causes.** The near-miss share tells you how much luck is in the green number. When a breach occurs, record the cause category and whether it was a capacity, hand-off, supplier, or definition problem. Link the largest categories to problem management (see topic 4.1, Problem management metrics).

**8. Measure the OLA queue, not just the attainment.** The hand-off wait time at the 85th percentile shows where work stalls, long before an SLA breach appears. Share it with both the sending and the receiving team, and describe it as a property of the flow between them. The conversation is about the queue, never about the people in it (see topic 2.3, Work in process and queueing).

### Add experience and close the gap

**9. Pair each SLA with an experience measure for the same journey.** Ask users a short question after the interaction about whether it worked and how hard it was, and report the response rate and the respondent mix. Agree in advance what level counts as good enough, so an XLA is a negotiated outcome and not a number invented after the fact (see topic 6.2, Experience level agreements, and topic 6.1, Customer satisfaction metrics).

**10. Report the watermelon gap and treat it as a finding.** Track how often an SLA is met while experience is poor. A rising gap tells you the SLA measures are drifting away from what users care about, and the right response is to revise the measure, not to explain the discrepancy. Review it quarterly with the customer representative present.

**11. Review the agreements on a schedule and retire the ones nobody uses.** Check each agreement against the service catalogue, the supplier contracts, and the actual work. A smaller set of live agreements is easier to report on and harder to game.

**12. Report each service in one view that combines all three layers.** Show the SLA attainment, the distribution, the OLA hand-off waits, the experience score, and the open improvement work for each service on one page. Derive the status from the data, not from a colour chosen by the service owner. Make the page open to the customer and the teams (see topic 11.1, Designing a service metrics dashboard).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| SLA attainment rate | Choosing the target to be easy; closing tickets early and reopening later; reclassifying priority downward; excluding hard cases as "out of scope" | Reopen rate and priority reclassification rate; sample of closed tickets read with the customer; review of the exclusion list each quarter |
| Near-miss share | Stopping the clock a minute before the limit, then continuing the work off the record; splitting a ticket into two shorter ones | Time from last customer contact to confirmed restoration; count of linked or child tickets per incident |
| Clock pause share | Using pause states on tickets that are not waiting for the customer; moving work into a state that is not counted | Pause reasons audited on a sample; share of pauses reversed by the customer; experience score for paused tickets |
| OLA attainment rate | Rejecting hand-offs back to the sender to restart the clock; marking items as accepted without starting work | Bounce count per item and total time to restoration across teams; the end-to-end SLA outcome |
| Hand-off wait time (85th percentile) | Assigning to a person rather than the team queue to hide the wait; logging a token first action | First action quality sampled; time from assignment to the first customer-visible update |
| Experience score by journey | Sending surveys only to satisfied users; asking leading questions; coaching responders to give high ratings | Respondent mix against the population; response rate shown beside the score; open comments read in the review |
| Watermelon gap | Setting the experience level low so the gap stays small; changing the experience measure when it dips | Experience level agreed in advance and changes logged with reasons; trend of the whole distribution |
| Agreement coverage and currency | Marking an agreement as reviewed without a real review; counting a stub document as an SLA | Evidence of the review (attendees, changes, decisions); sample of agreements read for actual content and customer sign-off |

A healthy reading shows attainment that moves for understandable reasons, near misses that are few and explained, pauses that stay within the agreed list, hand-off waits that are discussed by the teams who own them, and an experience measure that largely agrees with the SLA. Where the two disagree, the team already has a note of the cause and an improvement item.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Contractual SLAs with penalties | Clear, enforceable, legally recognised | Encourages clock games and defensive reporting; penalties can sour the relationship |
| SLAs without penalties, with regular review | Builds trust and honest data; focuses on learning | Less leverage when a supplier consistently misses targets |
| Detailed OLAs between all teams | Clear expectations and fewer disputes | Bureaucracy; teams optimise for their own clock instead of the customer's |
| Light OLAs with a shared end-to-end target | Encourages cooperation; less paperwork | Needs trust and good queue visibility to settle disputes |
| Adding XLAs to SLAs | Shows whether the service helps people | Survey data is noisier and slower; attribution is harder |

Keep the agreement small, report the distribution, and use experience data to check the operational data. Spend effort on the clock rules and the hand-offs, where most disagreement about a number arises.

## Questions to discuss with your team

**1. If our SLA report is all green, what would we expect users to say about the service?**
Ask the group to name a service that has been green for several months and then collect what users actually say in comments and complaints. Compare the two. The facilitator should look for gaps between the measure and the lived experience, and note which measures were chosen for being easy to hit.

**2. Where does our clock stop, and who decided that?**
Walk through the start, stop, and pause rules for one important target and ask who wrote each. Look at the share of tickets in a pause state, and ask whether customers would agree. Agree on one rule to tighten or clarify.

**3. Which of our OLAs help teams plan, and which just assign blame?**
List the internal agreements and ask who reads each one and when. Discuss what happens after a missed OLA: a conversation about the queue, or a search for fault. The aim is to move the discussion towards the flow of work between teams. Pick one OLA to simplify or retire.

**4. How much of our green is luck?**
Show the near-miss share for the most important target. Discuss what would happen if the next month had a few more hard cases or a few fewer people available. Ask whether the team has slack, and where it sits.

**5. What would the customer like us to promise that we do not measure today?**
Invite the customer representative or a user to describe what matters to them in their own words, such as being able to reach a person or getting a laptop before the first day. Capture two or three outcomes. Decide which could be a short survey question or an event already in the data, and how the group would agree on a good level.

**6. How would we know if our SLA measures had drifted away from what users care about?**
Discuss the watermelon gap as a signal and ask who looks at it. Consider how often the agreements are reviewed and whether the customer attends. Agree on a review date and the evidence to bring, including a sample of tickets and the latest experience results.

## Four perspectives

### Product and delivery teams

Delivery teams that also run their services meet the SLA through their own objectives and error budgets, and they feel the cost when an SLA penalty or a customer escalation interrupts planned work. They should keep SLOs tighter than SLAs and treat the SLA as a safety floor, not as the daily target (see topic 5.2, SLIs, SLOs, and error budgets). 

### Service and operations teams

Operations teams carry the clocks. They need clear rules for the start, stop, and pause conditions, shared OLAs that name the receiving queue, and visibility of hand-off waits. They should report breach causes plainly and use them as input to problem and capacity work (see topic 4.1, Problem management metrics). They should resist pressure to explain a result through the clock instead of fixing the cause.

### Leadership and governance

Leaders use SLA reports to see whether commitments are met and where to invest. They should ask for distributions, the clock pause share, the near-miss share, and the watermelon gap, and they should treat an unbroken run of green with curiosity. Funding the improvement work that follows a breach analysis, and protecting honest reporting from blame, matters more than the target itself (see topic 1.2, Goodhart's law and the psychology of metrics).

### Customers and users

Customers want the agreement to describe what they feel: how quickly the problem is fixed, how often it recurs, and whether they can reach someone who helps. They should be part of the review of agreements and have a way to say when a green report does not match their experience. A readable one-page summary, with the reasons for any breach and the planned fix, builds more trust than a long table of attainment.

## In practice: a service management example

A regional hospital's IT department supports a clinical scheduling system used by ward staff. The service owner, the service desk, the application team, and the infrastructure team meet monthly. All numbers below are illustrative.

The SLA promises that 90 percent of priority 2 incidents (partial loss of function affecting a ward) are restored within four hours, measured from ticket creation, in a 24-hour, seven-day service. The monthly report shows attainment of 94 percent on 36 incidents (illustrative), comfortably green. The experience survey, sent after each priority 2 closure, has a response rate of 41 percent (illustrative) and a median rating of 3 on a five-point scale, well below the level of 4 that the service owner and ward managers had agreed as the XLA. The watermelon gap is visible for the third month in a row.

The team looks at the distribution. The median restoration is 1 hour 40 minutes (illustrative), but the 95th percentile is 3 hours 50 minutes (illustrative), and the near-miss share is 31 percent (illustrative): nearly a third of the "met" incidents finished in the last tenth of the allowed time. They look at the clock pause share and find that 22 percent (illustrative) of elapsed time is spent in the state "waiting for customer". A sample of ten paused tickets shows four where the ward had replied and the ticket stayed paused until the next shift, and in three others the application team was waiting for the infrastructure team. The hand-off wait time at the 85th percentile for the infrastructure queue is 2 hours 10 minutes (illustrative) against an OLA of 30 minutes (illustrative), and the OLA attainment rate for that hand-off is 58 percent (illustrative).

The decision is practical. They change the clock rule so that "waiting for customer" may be used only after a documented request to the customer, and the clock resumes at the next reply. They add an on-call route for the infrastructure queue during ward hours and agree a smaller OLA, with a review in a month. They add the experience measure and the watermelon gap to the monthly one-page report and invite a ward manager to the review. They also lower the internal SLO to a stricter four-hour restoration for 95 percent of incidents, so the team notices trouble before the SLA is at risk.

A gaming risk shows up in the second month. After the pause rule changes, attainment dips to 89 percent (illustrative), and a manager asks the service desk to "recheck priorities". The team spots a spike in downgrades from priority 2 to priority 3, pairs attainment with the reclassification and reopen rates, and requires a reason in the record for any priority change. In the third month, attainment is 91 percent (illustrative), the 95th percentile is lower, the near-miss share has fallen, and the median experience rating has risen to 3.8 (illustrative). The gap narrows because the work improved, and the numbers are believable.

## Agile, AI, automation, and analytics

### Agile

Agree service levels with stakeholders and review them regularly, so the targets follow what users need as the service evolves. The caution is that a fixed target left alone for years measures the past.

### AI

AI can summarise breaches, predict which tickets will miss a target, and suggest escalations. Pair attainment with the experience score and the watermelon gap, and record which predictions were right. The caution is that an AI nudge to protect the target can push people to pause clocks or reprioritise, so audit pause use.

### Automation

Calculate attainment from event timestamps and make the pause rules visible. Measure automated escalation on false escalations and on breaches it missed. The caution is that an automated pause on a state such as waiting for customer is an easy route to gaming.

### Analytics

Report attainment with near-misses and percentiles, and show the experience score beside it. The decision informed is which agreement to renegotiate. The caution is that attainment over small ticket counts is volatile, so show the count behind each percentage.

## Sector lens

**Startup.** A small company often has no formal SLA at all, only an informal promise to a few early customers. Write one page that names the service hours, a response target, and a restoration target stated as a percentile, and keep an SLO inside the team. Customer conversations take the place of an XLA, so write down what the three most important customers say each month.

**Small business.** A small IT team usually depends heavily on external suppliers, so the underpinning contracts matter more than internal OLAs. Check that each supplier's commitment is at least as strict as the SLA you give your own users, and track the supplier's actual performance (see topic 8.4, Supplier and contract metrics). A simple monthly page, with attainment, near misses, and a short user survey, is enough.

**Enterprise.** Large organisations need a register of agreements and a coverage metric. Standardise the clock rules and the definitions across services so roll-ups are meaningful (see topic 1.4, Metrics governance and ownership). Beware of the watermelon effect in management roll-ups, where hundreds of green lines hide a few services with serious user pain.

**Government and public sector.** Public bodies often have statutory service standards, procurement rules that fix SLAs in contracts, and a duty to publish results. Keep the published measure clear and verifiable, retain the clock rules and the evidence for audit, and treat citizens as customers with a voice in the review (see topic 8.5, Regulated and government reporting). Where the contract is rigid, add an experience measure beside it without changing the contract wording.

## Business case: motivations, ROI, and TCO

The case for better agreement metrics is a case for trust and for avoiding wasted effort. Reports that match how users feel reduce escalations and disputes, shorten the monthly argument about whose number is right, and let leaders fund the work that matters. Clear OLAs reduce hand-off delays, which are among the largest contributors to long restorations. A watermelon gap, caught early, avoids the larger cost of a customer relationship or a contract renewal going wrong.

The costs are modest: time to write and review the agreements, reliable clock and hand-off data (see topic 1.5, Data sources and instrumentation), a short survey, and a monthly review. Total cost grows with the number of agreements, so fewer and simpler ones are cheaper to own.

The return appears as fewer surprising breaches, less time spent explaining reports, and better-informed investment choices. Treat these as patterns to observe and compare over time, not as a calculation. Compare the effort of a monthly review with the cost of one escalated dispute or one lost renewal in your own organisation, using your own data (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Reporting only averages.** An average hides a long tail of late work. Report percentiles, the near-miss share, and the count.
- **Writing the SLA around what is easy to hit.** A target chosen for comfort gives an always-green report. Start from what the customer needs and show the gap openly.
- **Pausing the clock to improve the number.** Generous pause states turn the SLA into fiction. Publish the pause rules, audit samples, and report the pause share.
- **OLAs as a weapon.** An OLA used to blame the next team teaches teams to bounce work. Treat misses as information about the queue and fix the flow.
- **Penalty-driven reporting.** Heavy penalties encourage defensive classification and disputes about the clock. Use penalties sparingly and pair them with reopen and reclassification rates.
- **Experience data without a response rate.** A high score from a tiny, self-selected sample misleads. Show the response rate and the respondent mix beside every result.
- **Agreements that nobody reviews.** Stale agreements describe a service that no longer exists. Schedule reviews and retire what is unused.
- **Individual targets from team agreements.** Splitting a team SLA into personal quotas leads to rushed closures and ranking. Keep the agreement at the level of the service and the team.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Agreement design | Verbal promises or copied templates; targets chosen by habit | Some written SLAs; OLAs rare; clocks differ between teams | A short template with outcome-based targets, percentiles, and written clock rules | Agreements reviewed on a cadence, with the customer and tied to SLOs | Layers of SLA, OLA, supplier contract, and SLO adjusted together as conditions change |
| Measurement quality | Manual counts; averages; pauses undocumented | Tool-based attainment for some services; pause use unreviewed | One definition and data source; distributions and pause share shown | Near misses, breach causes, and hand-off waits trended and sampled | Cross-team and supplier data reconciled; definitions revised when they stop informing decisions |
| Experience linkage | No user feedback tied to the SLA | Ad hoc surveys for some services | A short survey for key journeys, with response rate shown | Experience targets agreed with customers and the watermelon gap reported | Experience and operational measures steer shared improvement work with customers |
| Use in improvement | Reported after a complaint | Breaches discussed in team meetings | Monthly review with owners and actions | Breach causes feed funded improvement and problem work | Customers, suppliers, and teams plan improvement together from the same view |

## Checklist

- [ ] Each SLA states its outcome, its target as a percentile or share, and its population.
- [ ] The start event, stop event, and allowed pause conditions are written for every target.
- [ ] Each customer-facing SLA has OLAs or supplier contracts that fit within it, each with a named owning team.
- [ ] Internal objectives are stricter than the promised SLA targets.
- [ ] Reports show the distribution, the count, the near-miss share, and the clock pause share.
- [ ] A sample of paused and closed tickets is read each month.
- [ ] Each key service has an experience measure with an agreed level, and the response rate is shown.
- [ ] The watermelon gap is tracked and reviewed with a customer representative.
- [ ] Agreements are reviewed on a schedule and retired when unused.
- [ ] No agreement metric is used to rank individual people.

## AI prompts

**Review an SLA for clock and wording problems.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Draft an OLA between two teams.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Look for a watermelon gap in our data.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Design a short experience survey for an XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic defines the metric behind an SLA line and the guardrail that should sit beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep the template, the clock rules, and the gaming table in step.

## Key takeaways

- An SLA is a promise to the customer, an OLA is a promise between teams, and an XLA is an agreed experience outcome; each needs its own measure and owner.
- Report percentiles, counts, near misses, and the clock pause share, because averages and quiet pauses produce green reports over poor service.
- Derive OLAs from the SLA and keep internal objectives tighter than the promise.
- Pair every SLA with an experience measure for the same journey, and report the watermelon gap as a finding to act on.
- Review agreements on a schedule with the customer in the room, and retire what nobody uses.
- Keep every agreement metric at the level of services and teams, never individuals.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
