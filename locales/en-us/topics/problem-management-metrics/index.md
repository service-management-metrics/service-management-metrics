# Problem management metrics

**Problem management metrics show whether a team is removing the causes of its incidents or only repairing their symptoms, so measure how many causes are found, how fast they are fixed for good, and whether the same incidents come back.**

## Overview and motivation

A team that restores service quickly can still be stuck on a treadmill. The same fault returns every few weeks, the same people are paged, and the incident numbers look healthy because each repair is fast. Problem management is the practice that steps off the treadmill. It looks across incidents, finds the underlying cause, and gets that cause removed or contained. This topic covers the numbers that tell you whether that work is happening and whether it is working.

Four terms carry the topic. An **incident** is an unplanned interruption to a service or a reduction in its quality, as the [ITIL](https://en.wikipedia.org/wiki/ITIL) framework uses the word (see topic 3.3, Incident response and resolution time). A **problem** is the underlying cause, or suspected cause, of one or more incidents. A **known error** is a problem whose cause is understood and for which a workaround is recorded, held in a [known error database](https://en.wikipedia.org/wiki/Known_error_database) so that the next person to meet the symptom can find it. A [workaround](https://en.wikipedia.org/wiki/Workaround) reduces or avoids the impact of an incident or problem without removing its cause. The permanent fix is the change that removes the cause.

Finding the cause is the job of [root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis). Common techniques include the [five whys](https://en.wikipedia.org/wiki/Five_whys), the [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram), and the [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart), which ranks causes by how often they occur or how much harm they do. Complex systems often have several contributing causes and no single culprit, so a good problem record names the factors that, once removed, stop the recurrence, and says how confident the team is.

The metrics matter because problem management has a built-in reporting trap. Opening a problem record is easy and feels productive. Closing one is easy too, since a record can be closed with a note. Neither event shows that anything got better for users. The measures worth watching sit further downstream: whether incidents linked to a problem stop recurring, whether known errors are actually used by the people on call, and how long a diagnosed cause waits for its fix.

ITIL and agile views meet here without much friction. In ITIL 4, problem management is a practice inside the service value system, close to incident management, change enablement, and knowledge management. Its agile counterpart is the stream of small, evidence-based fixes that flow through a team's [backlog](https://en.wikipedia.org/wiki/Backlog), the retrospective that spots a pattern, and the habit of treating reliability work as ordinary product work. Where the ITIL view stresses records, ownership, and the known error, the agile view stresses small batches and fast feedback. Both want fewer repeat incidents, and that outcome is the measure to keep in front of everyone.

This topic does not repeat the incident clocks (see topic 3.3, Incident response and resolution time) or the major incident measures (see topic 3.4, Major incident metrics), and it treats review follow-through only where it feeds problems (see topic 4.2, Postmortem and learning metrics). The backlog of known errors and the wider idea of [technical debt](https://en.wikipedia.org/wiki/Technical_debt) are treated in topic 4.6, Technical debt and known errors. Here the focus is the problem record and the outcomes it produces. Deployment-based recovery and failure measures live in topic 2.8, DORA metrics.

## Key principles

- **Measure recurrence, not paperwork.** The test of problem management is that linked incidents stop coming back. Counts of records opened and closed describe activity and say little about the result.
- **Separate three moments.** Detecting that a pattern exists, identifying its cause, and removing the cause are different events with different clocks and different owners. Merging them hides where the delay sits.
- **A workaround is a stage, not an ending.** Record it, use it, and track how long it stays the only protection. A workaround that lives for years is debt with an owner nobody can name.
- **Put the fix where the work is.** A permanent fix usually lands as a change or a backlog item owned by a product team. Measure it in the team's own flow, and show it to the team that owns the service.
- **Link incidents to problems at the source.** Every measure here depends on the link between an incident and a problem. If the link is weak, the numbers are weak.
- **Prefer distributions and cohorts to averages.** Problem durations are long and skewed, and a few old records dominate any mean (see topic 1.6, Statistical literacy for service metrics).
- **Describe teams and services, never people.** Problems are system properties. A table of problems closed per analyst turns an investigation into a quota.

## Metric definitions

All clocks use the timestamps of the problem record, the linked incident records, and the linked change or backlog item. Unless a row says otherwise, problems are counted by service and by the owning team, and merged or duplicate records are excluded. Percentiles are preferred to means for every duration. Numbers in this topic's example are illustrative.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problems opened and closed | Flow of problem records into and out of the open state, by service | Count opened in the period and count closed in the period, each by closing code (fixed, accepted risk, duplicate, cannot reproduce); duplicates are shown but excluded from the "fixed" count | count per period | ITSM problem records | Problem management | Backlog intake and throughput | Monthly |
| Problem backlog age | How long open problems have been waiting | For each open problem, snapshot date minus the creation date of the record; report the median and 85th percentile of open problems and the oldest, by priority | days | ITSM problem records | Problem management | Work item age on the board | Monthly |
| Incident-to-problem link rate | Share of incidents that point at a problem or known error where one is expected | Incidents in the period with a linked problem or known error / incidents in the period with a priority of high or above, or reopened, or in a repeat category; incidents closed as user error or duplicates are excluded | percent | ITSM incident and problem records | Incident management; problem management | Retrospective pattern spotting | Monthly |
| Time to root cause | How long a diagnosed problem takes to reach a recorded cause | Clock starts when the problem record is created and stops when the cause is recorded and a second person has reviewed it; problems closed without a cause are excluded and counted separately; report the median and 85th percentile | days | ITSM problem records and their audit trail | Problem management | Spike or investigation time-box | Monthly |
| Known error reuse rate | How often a known error is used when an incident arrives | Incidents resolved with a linked known error or its workaround / incidents in the period whose symptom matches a known error that existed at the time; incidents with no matching known error are excluded | percent | ITSM incident links; knowledge article use | Knowledge management; problem management | Team runbook or playbook use | Monthly |
| Time to permanent fix | How long a problem is exposed from diagnosis to the fix running in production | Clock starts when the cause is recorded and stops when the linked fix change is implemented and confirmed; problems closed as accepted risk are excluded and counted separately; report the median and 85th percentile | days | Problem records; change records or pipeline deployment events | Problem management; change enablement | Cycle time of the fix item | Monthly |
| Post-fix recurrence rate | Share of fixed problems whose linked symptoms returned | Problems closed as fixed in a cohort quarter with a new matching incident within 90 days of the fix going live / problems closed as fixed in that quarter; the 90-day window is an example and is stated on the chart | percent | ITSM incident and problem records; deployment events | Problem management; continual improvement | Escaped defect or regression rate | Quarterly |
| Workaround-only share | Share of known problems protected only by a workaround | Open problems in the known error state with no fix scheduled / open problems in the known error state; accepted-risk problems with a named owner and review date are shown as a separate group | percent | ITSM problem records | Problem management; risk management | Technical debt register | Monthly |

The 90-day window, the matching rule for symptoms, and the definition of "expected" in the link rate are examples. A team picks values that fit its services and writes them in the metric register (see topic 1.4, Metrics governance and ownership). Counting problems closed as "fixed" separately from other closing codes keeps the opened-and-closed pair honest.

## Recommendations

### Decide what counts as a problem

**1. Open a problem on evidence, and say what the evidence is.** Good triggers are repeat incidents of the same symptom, a major incident with an unknown cause, a trend found in review, or a risk spotted before any incident. Write the trigger on the record, for example "five incidents in six weeks linked to the same service". If every unusual incident becomes a problem record, the backlog fills with noise and nobody reads it.

**2. Use a small, shared set of closing codes.** Fixed, accepted risk, duplicate, cannot reproduce, and merged are enough for most teams. Each code has a one-sentence meaning and an owner who may use it. The mix of closing codes is more informative than the closed count, because it shows how much work removed a cause and how much ended without a change.

### Link incidents and problems at the source

**3. Make the link a step in incident closure.** Ask the resolver to link the incident to a problem, a known error, or "none found" before closing it. Offer matching suggestions from the tool when it can, and let a person decide. A link made weeks later in a bulk exercise is unreliable (see topic 1.5, Data sources and instrumentation).

**4. Agree how symptoms are matched.** Recurrence depends on deciding when two incidents are "the same". A short cause and symptom taxonomy, with definitions and examples, is better than free text. Review a sample of matches each quarter, since mismatches in both directions bias the recurrence rate.

**5. Let pattern review feed the problem list.** A monthly review of incident categories, by service and by [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart), shows which few causes produce most of the pain. Use the review to open problems and to prioritize them, and send repeat causes from major incident reviews into the same list (see topic 3.2, Incident volume and priority).

### Measure the three delays

**6. Time the stages separately.** Measure from record creation to recorded cause, and from recorded cause to the fix running in production. The first delay points at investigation capacity, access to data, and skill. The second points at prioritization, the change process, and competing feature work. A single "time to close a problem" blends them and gives nobody a clear action.

**7. Report the old ones.** Show the median and 85th percentile of open problem age, and list the oldest by service. A few records that are years old will move a mean and tell you little, whereas the oldest list invites a decision: fix, accept the risk with a named owner and review date, or close with a reason.

### Put the fix into normal flow

**8. Treat a permanent fix as a backlog item with an owner and a date.** Link the problem to the change or work item that carries the fix, and show the fix on the same board as feature work. Prioritize with an agreed rule, such as weighing recurring incident cost against the effort to fix. Where a fix needs a change, the standard change path should be fast for low-risk corrections (see topic 4.3, Change enablement metrics).

**9. Ask for the workaround and the exit date together.** A workaround buys time. Record it as a known error, test that the on-call team can find and run it, and set a review date for the fix. The workaround-only share then becomes a list of decisions, not a quiet pile of debt (see topic 4.6, Technical debt and known errors).

### Check that fixes worked

**10. Follow every fix with a recurrence window.** After a fix is live, watch for matching incidents for a stated window, and report the share of fixes that held by quarterly cohort. Recurrence is the closest thing this practice has to an outcome measure. If it is high, ask whether the cause was found or only a contributor, and reopen the analysis.

**11. Measure known error reuse where responders work.** Count how often a known error or its workaround is used when a matching incident arrives. A low reuse rate with many known errors usually means the entries are hard to find, out of date, or written for the analyst instead of the responder. Fix the article and its placement before adding more of them (see topic 3.6, Knowledge management metrics).

### Keep the numbers honest

**12. Show cohorts and caveats beside every chart.** Record the definitions, closing code mix, and any rule change on the chart itself. Quarterly cohorts of fixed problems show recurrence without mixing old and new work. Pair every count with a measure of outcome so that no number stands alone (see topic 1.2, Goodhart's law and the psychology of metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Problems opened and closed | Opening many trivial records; splitting one problem into several; closing records as duplicates or "cannot reproduce" to clear the list | Closing code mix; post-fix recurrence rate; a sample of closed records read each quarter |
| Problem backlog age | Closing the oldest records without a fix; reopening as a new record to reset the clock; reclassifying a problem as a request | Link new records to their originals and report age from the first record; list of closures by reason; review of accepted risks |
| Incident-to-problem link rate | Linking every incident to a vague catch-all problem to raise the rate | Share of links pointing at the five largest problems; sample of links checked for a real match; recurrence of linked symptoms |
| Time to root cause | Recording a quick, shallow cause to stop the clock; naming "human error"; skipping the second reviewer | Post-fix recurrence rate; the cause taxonomy with "human error" not accepted alone; review of a sample of causes against the evidence |
| Known error reuse rate | Counting a link added after the incident closed; adding a known error to every incident of a service | Time between incident closure and the link; responder feedback on whether the entry helped; review of entries not used in 90 days |
| Time to permanent fix | Marking the change implemented before the fix is verified; closing as accepted risk to avoid the work | Post-fix recurrence rate; accepted-risk list with owner and review date; verification step before the clock stops |
| Post-fix recurrence rate | Defining symptoms narrowly so that recurrences do not match; widening the closing window so fixes fall in earlier cohorts; delaying linking | Cause taxonomy reviewed by someone outside the owning team; incident link rate; fixed window stated in advance |
| Workaround-only share | Scheduling a placeholder fix with no real date; moving problems to accepted risk; lowering the problem's priority | Age of scheduled fixes that have slipped; accepted-risk list reviewed with a named executive owner; repeat incident cost by problem |

A healthy reading looks quiet and a little dull. Opened and closed counts are roughly in step, the oldest open problems each have a recorded decision, the share of fixes that held is high and the cohort lines are steady, and known errors are used by the people who meet the symptoms. The warning pattern is a long, tidy closed count alongside incidents that keep returning. When the activity numbers look excellent and users still hit the same fault, trust the users.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Formal problem records for recurring and major incidents | Clear owner, history, and link to fixes; supports audit | Process overhead; records can go stale |
| Fixing causes inside the team's backlog without a problem record | Fast, lightweight, close to the work | Cross-team patterns go unseen; no shared known error |
| Strict closing codes and quarterly cohorts | Honest outcome view; resists tidy counts | Slower to read; needs discipline in data entry |
| Counting problems closed as a target | Easy to explain and chart | Invites closing for the count; rewards small problems |
| Recurrence tracking for fixed problems | Closest available measure of whether it worked | Needs good symptom matching and a long enough window |
| Reuse tracking for known errors | Shows whether the knowledge is helping responders | Depends on responders linking the entry; can be gamed |

Teams that fix causes quickly inside their own backlog should still record the cause where the wider organization can see it, so that another team meeting the same symptom benefits. Invest first in the link between incidents and problems and in the recurrence window. Those two pieces make every other measure interpretable.

## Questions to discuss with your team

**1. Which three incidents did we repair most often last quarter, and what stopped us from fixing their cause?**
List the repeat incidents from the service desk or incident tool and sort them by number of occurrences. For each, ask what the obstacle was: no investigation time, no agreed cause, a fix competing with features, or a fix that needs another team. The facilitator should look for obstacles that repeat across the three, because they point at a system fix rather than a technical one.

**2. When we link an incident to a problem, who does it, when, and how do we know it is the right problem?**
Walk through one recent incident from closure to link. Note whether the link is made during the incident, at closure, or in a later clean-up. Review a small sample of links together for true matches. Agree one change that makes the link easier or more reliable.

**3. How long does a diagnosed cause wait for its fix, and who decides the order?**
Take the problems with a recorded cause and look at the time since diagnosis. Ask who prioritizes them and what rule they use. The discussion often shows that the delay is a queue in front of the product backlog rather than a technical difficulty. Agree on how problem fixes are compared with feature work.

**4. What are our oldest workarounds, and what would we lose if we kept them another year?**
Name the three longest-lived workarounds and what they cost in manual effort, risk, and the knowledge of the people who still remember them. Ask what would happen if the person who knows the workaround were away. Decide for each one whether to fix it, accept the risk with an owner and review date, or retire the service.

**5. If a fixed problem comes back, do we find out, and how fast?**
Ask how a returning symptom would be noticed and who would reopen the analysis. Discuss whether the recurrence window is long enough for the kind of failure involved. The facilitator should help the group agree a window and a matching rule, and decide which team reviews the matches so that the owning team does not mark its own work.

**6. Do the people on call use our known errors, and what would make them reach for one?**
Ask responders when they last searched for a known error and what they found. Look at where the entries live, how they are titled, and whether they say what to do first. Choose one entry to rewrite with a responder and test it in the next on-call week.

## Four perspectives

### Product and delivery teams

Delivery teams own most permanent fixes, and they feel the pull of feature work. They gain from seeing the incident cost of a recurring fault next to the effort of fixing it, and from having a clear place for fix items in the backlog. They should resist treating problem work as an interruption and instead reserve a visible share of capacity for it. The retrospective is a natural place to spot patterns and open problems (see topic 2.1, Flow measures).

### Service and operations teams

Operations teams see the repeated symptoms first and carry the cost in pages and manual work. They keep the problem and known error records, run the pattern review, and check that links are made. Their risk is spending effort on records instead of removing causes. They should keep the closing codes small, make the known error the first thing a responder sees, and hand fixes to the owning team with the evidence attached.

### Leadership and governance

Leaders decide whether reliability work wins against features, and they set the incentives for what gets recorded. They should ask for recurrence by cohort and for the oldest open problems before asking for counts, and treat accepted risk as a decision that needs a named owner and review date. Reporting a falling backlog without recurrence rewards closing. Governance should look at trends and decisions, not at a league table of teams (see topic 4.6, Technical debt and known errors).

### Customers and users

Users judge problem management by one thing: does the same thing keep going wrong. They do not see problem records, and they do not care how many were closed. Where agreements allow, tell customers about a known issue, the workaround, and the date by which a fix is expected, then report back when it lands. A fix that is announced and delivered builds more trust than a quiet one.

## In practice: a service management example

A regional hospital's IT department supports a clinical scheduling application used by wards and outpatient clinics. A product team builds and runs the application, an infrastructure team runs the platform, and a service desk takes calls. All numbers in this example are illustrative.

In a quarterly review the department head notices that the problem dashboard looks excellent: 46 problems closed against 31 opened, and the oldest open problem is 140 days. Ward managers still complain that the scheduling screen freezes at shift change. The service owner asks for the incident-to-problem link rate and the post-fix recurrence rate, which are not yet on the dashboard.

The data tells a different story. The closing code mix shows that 22 of the 46 closures were "cannot reproduce" or "duplicate". The link rate for high-priority incidents is 38 percent. The freezing incidents were logged in four categories, so no pattern was visible. Once a sample of 30 incidents was re-linked by hand, 17 of them pointed at one cause: a database lock held by a nightly job that overran into the morning shift. Recurrence for problems fixed in the previous quarter was 27 percent, higher than anyone expected.

The team makes three decisions. First, the cause and symptom taxonomy gains a "scheduling freeze" entry, and linking a problem or "none found" becomes a required step at incident closure. Second, the nightly job problem moves from the infrastructure backlog to the product team's board with an owner and a target date, and a workaround (a scheduled restart after the job) is recorded as a known error and tested with the service desk. Third, the dashboard replaces the closed count with three numbers: the share of fixes that held after 90 days, the median and 85th percentile of time from recorded cause to fix, and the oldest open problems with their decisions.

Eight weeks later the lock is removed by a change to the job. Incidents in the freezing category fall from about nine per month to two, and known error reuse rises to 71 percent for the symptoms that remain, mostly because the service desk now finds the restart entry. The gaming risk the team caught was in its own earlier habit: closing records as "cannot reproduce" when an incident fell outside working hours. The closing code mix, the sample of closed records read each quarter, and the recurrence cohort now act as guardrails. No one is ranked, and the review lists services and decisions, not analysts.

## Agile, AI, automation, and analytics

### Agile

Fold problem work into the regular backlog and improvement conversations, so permanent fixes compete openly with new work. The caution is that a target for closing problems quickly leads to closing them with workarounds.

### AI

AI can cluster incidents, suggest root causes, and draft problem records, which can raise problem counts and link rates without removing causes. Pair link rate with post-fix recurrence rate and mark which causes were suggested by AI and confirmed by a person. The caution is that an AI-suggested cause can be plausible and wrong, so verify before closing.

### Automation

Link incidents to problems automatically where signals match, and measure the matching on wrong links. The caution is that auto-closing a problem when incidents stop hides a cause that has only gone quiet.

### Analytics

Show time to permanent fix as a distribution and the recurrence rate after fixes. The decision informed is which causes deserve capacity. The caution is that recurrence needs a long window, so say how long you watched.

## Sector lens

**Startup.** There is rarely a separate problem process. The team fixes causes directly, and the risk is that nobody remembers why. Keep a one-page list of recurring incidents and their causes, link fixes to the issue tracker, and review the list monthly. Measure recurrence and the age of the oldest items; skip formal closing codes until the team grows.

**Small business.** One IT person or a managed service provider may run everything. Ask the provider for its problem records and the incident categories behind them, and for the written definition of "resolved". A short list of the top five repeat issues, with a named owner and a date for each, outperforms a heavy tool. Export the records periodically to avoid lock-in.

**Enterprise.** Many services and suppliers create the largest need for shared definitions. Agree the cause taxonomy, closing codes, and recurrence window across teams, name problem owners by service, and report by service and cohort. Where a supplier holds a fix, track the supplier's response against the agreement (see topic 8.4, Supplier and contract metrics) and escalate through a documented route.

**Government and public sector.** Audit, change control, and procurement can lengthen the path from cause to fix, so the time-to-fix clock should show where the delay sits: investigation, approval, procurement, or scheduling. Accepted risks need recorded owners and review dates that stand up to audit. Retention and privacy rules apply to incident and problem records, particularly where clinical or citizen data appears in them.

## Business case: motivations, ROI, and TCO

The cost has three parts. The first is investigation time: people with the skills and access to analyze incidents, which competes with their other work. The second is the fix itself, delivered through the backlog and the change process. The third is the cost of recording and reporting: linking incidents, keeping taxonomies, running the pattern review, and maintaining the known error database. These costs are mostly people's time, so count hours.

The return shows up as incidents that stop recurring, fewer pages and less manual workaround effort, shorter incident handling because responders find known errors, and fewer escalations to engineers. No universal figure applies, so estimate your own. For a recurring incident, multiply occurrences per year by the average handling effort and an estimate of business impact per occurrence, then compare that with the effort to fix it. Review the estimate with the service owner, state it as an estimate, and revisit it after the recurrence window shows what happened. Problem management pays back best on the few causes that produce most of the incident load, which the Pareto view finds quickly.

## Anti-patterns and pitfalls

- **Closing as a target.** A goal for problems closed rewards trivial records and early closure. Report outcome measures first and show the closing code mix.
- **Problem records as a graveyard.** Records sit open with no owner, date, or decision. Review the oldest list on a cadence and require a decision for each item.
- **Stopping at "human error".** It names who touched the system and not why the system allowed the failure. Accept a cause only when it names a condition that can be changed.
- **Fixing nothing until the root cause is certain.** Complex failures may have no single cause. Apply a workaround and the best-supported fix, then watch recurrence.
- **Workarounds with no exit.** A workaround with no review date becomes permanent. Record an owner and a date when the known error is created.
- **Weak incident links.** Missing or sloppy links make recurrence invisible. Make linking part of incident closure and sample the links.
- **Problem work outside the backlog.** Fixes that live in a separate queue wait forever. Put the fix item on the owning team's board and prioritize it against features.
- **Comparing analysts or teams on records closed.** It rewards easy services and invites gaming. Compare services over time against their own history, and read the cohorts.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Problem identification and linking | Problems opened after big outages only; no incident links | Some teams link incidents; categories differ by team | Shared taxonomy and closing codes; link made at incident closure | Link rate and match quality sampled and reviewed | Patterns detected across teams and suppliers, with shared known errors |
| Root cause and known errors | Cause recorded in free text, if at all | Known errors kept by some teams in different places | One known error database; second-person review of causes | Time to root cause and known error reuse trended and acted on | Responders, suppliers, and customers contribute to and use shared entries |
| Fix delivery | Fixes happen when someone has time | Fixes tracked in a team's own list | Fix linked to a backlog item or change with an owner and date | Time to permanent fix reviewed, with capacity reserved for it | Fix priority set jointly with product and supplier roadmaps |
| Outcome and learning | Counts of records reported | Backlog age reported in some reviews | Post-fix recurrence and workaround-only share reported with definitions | Cohorts paired with guardrails and used in funding decisions | Definitions revised when they stop informing decisions; improvement routine |

## Checklist

- [ ] The metric register defines a problem, a known error, and each closing code.
- [ ] Incident closure includes a link to a problem, a known error, or "none found".
- [ ] A cause and symptom taxonomy exists, with definitions and examples.
- [ ] Every problem has an owner, a trigger, and a decision date.
- [ ] Time to root cause and time to permanent fix are measured separately, with percentiles.
- [ ] Each permanent fix is linked to a backlog item or change with an owner.
- [ ] Every workaround has an owner and a review date.
- [ ] Post-fix recurrence is tracked by quarterly cohort with a stated window.
- [ ] Known error reuse is measured where responders work.
- [ ] The oldest open problems are reviewed on a cadence, and each decision is recorded.
- [ ] A sample of closed records is read each quarter to check closing codes and causes.
- [ ] Reports describe services and teams, and no table ranks individuals.

## AI prompts

**Find candidate problems in a set of incidents.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Review problem closing codes and records.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Design a recurrence measure.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Prepare a decision review of aged problems.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topics that define the incident, change, and knowledge measures that problem metrics depend on, and the guardrail to pair with each.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new or edited problem metric states its clocks, exclusions, gaming vector, and guardrail.

## Key takeaways

- The measure of problem management is recurrence: whether the incidents linked to a problem stop coming back.
- Time the stages separately, from record to recorded cause and from cause to the fix running in production.
- Link incidents to problems at closure, agree how symptoms are matched, and sample the links.
- A workaround is a stage with an owner and a review date, and the workaround-only share shows how much risk is being carried.
- Put permanent fixes in the owning team's backlog, and report outcome measures before counts of records.
- Describe services, cohorts, and decisions. Never rank analysts or teams by problems closed.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
