# Technical debt and known errors

**Treat known errors and technical debt as one visible ledger of deferred fixes, measure what each item costs you every month it stays open, and spend a protected share of capacity on the items with the highest interest.**

## Overview and motivation

Every team defers some repair. A defect is understood but not fixed, a shortcut is taken to meet a date, a component is left to age, and a workaround is written into a runbook. Each deferral is a sensible decision when it is made. The trouble starts when deferrals accumulate out of sight, because the cost of carrying them shows up later as incidents, slow delivery, and tired people, with no line on any report that connects the cost to the cause.

Two vocabularies describe the same pattern. In [ITIL](https://en.wikipedia.org/wiki/ITIL), a **known error** is a problem whose root cause is understood and for which a workaround, or a permanent fix not yet applied, exists. Known errors are recorded so that service desk and operations staff can resolve repeat incidents quickly, and the record stays open until a fix is released. In agile software work, **[technical debt](https://en.wikipedia.org/wiki/Technical_debt)** is the metaphor, coined by [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) in 1992, for design and implementation choices that make future change harder. The metaphor carries two ideas that matter for measurement: the **principal**, which is the effort needed to remove the debt, and the **interest**, which is the extra effort or risk you pay each period while the debt remains.

The two views differ in where they look. Known errors are discovered through operations: an incident or a problem investigation finds a cause. Technical debt is usually discovered through delivery: a developer notices that a change is harder than it should be. A known error is often technical debt that has already begun to hurt customers. Technical debt is often a known error waiting to happen. Keeping separate lists, one in the ITSM tool and one in a backlog or a wiki, hides the connection and produces two competing arguments for the same scarce capacity.

This topic gives you a small set of measures for the combined ledger. It avoids a single dollar figure for the debt of a whole organisation, which no method produces reliably, and measures what you can observe: items open, time waited, incidents caused, work added, and capacity spent on repair. The ledger then feeds a prioritisation conversation between product and operations (see topic 4.1, Problem management metrics, for problem records and permanent fixes, and topic 2.9, Operational work and unplanned work, for the interrupt load that debt creates).

Terms used in this topic:

- A **workaround** is a way to restore service or avoid a failure without removing the cause.
- A **permanent fix** removes the cause. [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis) is the work that finds it.
- **[Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring)** restructures code without changing its external behaviour. It is the usual way to repay design debt.
- A **[code smell](https://en.wikipedia.org/wiki/Code_smell)** is a surface sign in code that often indicates a deeper problem. It is a prompt for a look, not a verdict.
- **[Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost)** is the value of the best alternative you give up by choosing one use of time over another. Every fix competes with a feature, and the comparison is the real decision.
- **[Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay)** is the economic loss from postponing a piece of work. It is the idea behind pricing the interest on a debt item.
- A **[software bug](https://en.wikipedia.org/wiki/Software_bug)** is a defect in software. A known error may be a bug, a configuration weakness, a design limit, or a supplier defect.
- **[Static programme analysis](https://en.wikipedia.org/wiki/Static_program_analysis)** inspects code without running it. Its warnings and complexity scores are indicators of possible debt, and they are weaker evidence than incident history.

Not all debt is a mistake. Martin Fowler's quadrant separates deliberate from inadvertent and reckless from prudent debt (see the reference list). A prudent shortcut with a repayment plan is a sound loan, and reckless debt is the kind to prevent. The metrics here do not judge the origin. They show the balance.

## Key principles

- **One ledger, two doors.** Known errors from operations and debt items from delivery go into the same visible list, with a link between records that describe the same cause.
- **Measure the interest, and the principal too.** The size of a repair matters less than what the open item costs you each month in incidents, workarounds, and slowed change. Rank by interest per unit of repair effort.
- **Make deferral a decision with an owner.** Every item has an owner, a stated reason for waiting, and a review date. An item no one chose to defer is neglect, and it is counted as such.
- **Protect capacity before you need it.** A stated share of each team's capacity for repair work, agreed in advance, beats a heroic cleanup after a bad quarter.
- **Keep the workaround honest.** A workaround is a service, with its own cost, owner, and failure modes. Measure how often it is used and how often it fails.
- **Describe systems, never people.** Debt belongs to a service or a component. Never attribute it to an author, and never rank engineers by the debt they touched.
- **Estimate coarsely.** Sizes of "hours", "days", and "weeks" are enough. Precision beyond that is invented.

## Metric definitions

The metrics below describe the ledger of deferred repairs. Clocks and boundaries are stated in each formula. Time measures are reported as distributions (the median and the 85th or 95th percentile), not as a single average.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Known error backlog age | How long open known errors have waited for a permanent fix | Clock starts when the problem record is marked "known error"; stops when the permanent fix is released to production; items closed as "accepted risk" are reported separately and excluded. Report count, median age, and 85th percentile age, by service | days (distribution) | ITSM tool problem and known error records, release records | Problem management | Aging work item chart; bug backlog age | Monthly |
| Workaround coverage | Share of open known errors that have a documented, tested workaround an agent can follow | open known errors with a workaround reviewed within the last 6 months / open known errors; closed and accepted-risk items excluded | percent | Knowledge base linked to known error records | Problem management; knowledge management | Runbook or definition of done for operability | Monthly |
| Incidents linked to open known errors | Incidents whose cause is an open known error, a direct measure of the interest paid in service disruption | incidents in the period linked to a known error that was open when the incident started / all incidents in the period; incidents with no cause link are reported as unlinked, not counted | percent, plus count | ITSM tool incident-to-problem links | Incident management; problem management | Escaped defects; production bug inflow | Monthly |
| Debt stock | Number and estimated size of registered technical debt items that remain open | open items in the debt register at period end; size is the sum of coarse effort bands (hours, days, weeks) assigned at registration; unregistered or suspected debt is excluded | count, and effort bands | Debt register in the tracker, tagged by service | Continual improvement; service design | Product backlog items labelled as debt | Monthly |
| Debt interest | Extra work caused by open debt and known errors, in team time | hours logged in the period against work items tagged with a debt or known error reference (workarounds, manual steps, rework, and extra effort on affected changes) / total team working hours in the period; the repair work itself is excluded and counted under capacity share | percent of working time | Time or effort tags on work items, kept at team level | Continual improvement; problem management | Unplanned work and rework share | Monthly |
| Debt capacity share | Share of delivery capacity spent on retiring debt and known errors | capacity (item count or effort) of completed work items tagged as debt repair or known error fix / all completed work items in the period; items with no tag are excluded | percent | Tracker, completed items by tag | Continual improvement; change enablement | Capacity allocation | Per planning period, reviewed monthly |
| Debt net change | Whether the ledger is growing or shrinking | debt and known error items registered in the period minus items resolved in the period; resolved means fix released, not merged; items closed as "will not fix" are counted in a separate line | count (signed) | Debt register and known error records | Continual improvement | Backlog change by category | Monthly |

Accepted risk is a legitimate way to close a known error, because some problems are not worth fixing. It is listed separately so that closing items does not quietly improve the age figure. The 6-month review window in workaround coverage is an example. A team sets the window to match how fast its systems change and writes it in the metric register.

## Recommendations

### Build the ledger

**1. Merge the known error list and the debt list into one ledger.** Keep one register with a field for origin (operations or delivery), service, owner, size band, and link to related records. The ITSM tool can hold it, or the tracker can, provided each system links to the other. Without a single view, a known error in operations competes with an unseen debt item in delivery for the same engineers.

**2. Register debt at the moment it is created or discovered.** A shortcut taken deliberately goes into the register in the same pull request or change record, with a stated reason and a review date. Debt found later is registered by whoever finds it. A cheap, one-line capture rule works better than a periodic audit, because people forget what they knew last quarter.

### Measure the interest

**3. Link incidents to known errors every time.** The link between an incident and its known error is the strongest data you have on interest, and it costs a few seconds at resolution. Make the link a required field when the cause is known, and report the unlinked share so a gap does not look like good news (see topic 3.3, Incident response and resolution time). When the same cause appears in several incidents, the problem record carries the evidence for the fix.

**4. Tag the work that debt creates.** Let engineers mark a work item when a workaround, a manual step, or extra rework was needed because of a known weakness, and link it to the ledger item. The tag costs little and gives you the debt interest figure at team level. Treat the result as an estimate with wide error, useful for ranking items and for watching a trend, not for accounting.

**5. Price each item in two numbers: repair effort and monthly interest.** Use coarse bands, such as hours, days, weeks, for effort, and a rough monthly cost drawn from linked incidents, tagged work, and any downtime cost your organisation already estimates. Dividing interest by effort gives a simple payback time. Do not invent precision: a band and a stated assumption are enough to separate the obvious wins from the items that can wait.

### Protect capacity and decide

**6. Reserve a standing share of capacity, and report it.** Agree with the product owner a share of each cycle for repair work, set by the trend in the ledger and revisited each quarter. Report the debt capacity share beside the planned-work figures, so leaders see repair work as a deliberate investment. A reserved share also protects the team from a tradeoff argument at every planning conversation, which the feature backlog usually wins.

**7. Rank repair against features with one common currency.** Put known errors and debt items into the same prioritisation conversation as features, expressed as cost of delay and payback time. A fix that removes a weekly incident, and returns its effort in a quarter, competes on its merits. Ranking by loudness, seniority, or the date of registration gives poor results (see topic 4.4, Change failure and rework).

**8. Close the loop on deferral decisions.** For each item that is consciously left open, record who accepted the risk, the review date, and the trigger that would move it up, such as a second incident or a planned change in the area. Review the accepted list on its own cadence. An item that has been deferred three times with no trigger is a decision to ignore it, and the ledger should say so.

### Keep the numbers honest

**9. Release the fix before you close the record.** A known error stays open until the permanent fix is in production and the recurrence has been checked over a stated window. Closing at "merged" or "ticket done" flatters the age and net change figures and reopens the incident later (see topic 4.5, Release and deployment metrics). Track the reopen rate of known errors as a quality check on the closure rule.

**10. Look at the shape of the ledger, beyond the totals.** A flat count can hide a long tail of very old items, a growing share of items in one service, or a ledger kept small by closing everything as "will not fix". Show the age distribution, the split by service, and the accepted-risk list on one page. Review it with the people who own the services, in the same meeting that plans the next quarter's work.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Known error backlog age | Closing old records as "accepted risk" or "will not fix"; splitting one old record into new young ones; resetting the clock by re-registering | Accepted-risk count and age reported on the same page; review of closures by someone outside the owning team; record lineage kept |
| Workaround coverage | Writing a vague workaround to satisfy the field; counting a workaround that no agent has ever tried | Workaround use and failure rate in linked incidents; periodic test of a sample of workarounds |
| Incidents linked to open known errors | Leaving incidents unlinked, or linking them to a different cause, so the share falls | Unlinked incident share reported beside it; sample review of closed incidents for missed links |
| Debt stock | Not registering debt, so the stock looks small; merging many items into one large item; registering trivia to look diligent | Register review against a sample of code reviews and incident postmortems; item size and specificity checks |
| Debt interest | Under-tagging the work to avoid scrutiny, or over-tagging to win a repair budget; reading the figure as a rating of a team | Sample audit of tagged and untagged items; team-level view only, with no comparison between teams; interest read together with incident links |
| Debt capacity share | Tagging ordinary feature work as repair; choosing easy cosmetic items to fill the share | Outcome check: age of the oldest high-interest items and incident links falling; review of what was fixed against the ranking |
| Debt net change | Resolving many tiny items to offset a few large ones; closing items as "will not fix" to make the count fall | Net change shown by size band and by interest; "will not fix" line reported; recurrence check on resolved items |

A healthy reading shows a ledger that is visible, specific, and moving in a direction the team chose. The oldest high-interest items are falling in number. Incidents linked to open known errors are trending down, and the unlinked share is small. The debt capacity share is stable at the agreed level instead of spiking after a crisis and vanishing after. The accepted-risk list is short and reviewed. When any single number looks excellent and the others do not move, suspect the definition before you celebrate.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| One merged ledger of known errors and debt | Single prioritisation; operations and delivery see the same costs | Needs shared tooling or links; ownership across two functions must be settled |
| A standing capacity share for repair | Predictable; protects repair work from feature pressure | Can be spent on low-value items if ranking is weak |
| Repair work scheduled only when it wins the priority debate | Flexible; responds to the current priority | Features nearly always win; the ledger grows until a crisis |
| Interest estimated from incidents and tagged work | Ties debt to observable cost; supports ranking | Rough numbers; depends on honest tagging and incident links |
| A dedicated repair push or "debt week" | Focus and visible progress | Episodic; the ledger refills between events; interrupts planned commitments |

Choose the lightest arrangement that keeps the oldest high-interest items moving. A small team can run the ledger on one board with a label and a monthly review. Larger organisations need links between tools and an agreed ranking method. The aim is a deliberate decision about each item, not an empty list.

## Questions to discuss with your team

**1. Which three open items cost us the most every month, and how do we know?**
Ask people to name candidates from memory, then check them against incident links and tagged work. Compare the remembered list with the measured one, and note the gaps. Agree how the ranking evidence will be gathered from now on.

**2. When we defer a fix, who decides, and when do we look again?**
Walk through the last five deferrals and ask who accepted the risk and what review date was set. Where nobody decided, the item was neglected, not deferred. Agree a rule that every deferral carries an owner, a reason, and a trigger. Discuss how the accepted-risk list will be reviewed and by whom.

**3. How much capacity should we reserve for repair, and what would change the share?**
Show the ledger trend and the current debt capacity share. Ask what the team would be willing to give up to raise it, and what evidence would let it fall. Record the number, the reason, and the date to revisit.

**4. Are our workarounds real, and would a new agent be able to follow them?**
Pick a workaround at random and ask someone who did not write it to follow it. Agree a test routine for the workarounds that cover the highest-impact errors.

**5. What counts as fixed, and how long do we watch before we close the record?**
Compare the closure rules used by operations, delivery, and the product owner. Discuss a recurrence window that suits the service, and what the team will do when a closed item reopens. Agree one definition and write it in the metric register.

**6. Where might our debt numbers be telling us a comfortable story?**
Ask for the ways each number could be flattered: unregistered debt, easy items fixed first, items closed as will not fix. Look at the unlinked incident share and the accepted-risk list. Choose one guardrail to add this quarter and name who will check it.

## Four perspectives

### Product and delivery teams

Delivery teams see debt first, usually while changing code. They gain from a register that is easy to add to and from a protected share of capacity, so repair work does not depend on winning an argument at each planning conversation. They should register shortcuts when they take them, tag work caused by weak spots, and avoid using debt as a label for any work they would rather not do (see topic 2.2, Lead time, cycle time, and flow efficiency, for the lead time effects of debt).

### Service and operations teams

Operations teams see the interest: repeat incidents, manual steps, fragile workarounds, and the on-call load that follows. They own the known error records and the workaround documents, and they have the incident data that prices the interest. They should link every incident to its known error, test workarounds, and bring ranked evidence to the planning conversation instead of a list of complaints (see topic 5.7, Toil and on-call metrics).

### Leadership and governance

Leaders decide how much capacity repair work receives, and the incentives they set decide whether the ledger stays honest. They should ask for the age distribution, the interest figures, and the accepted-risk list, not a single debt score. Reading the ledger as a rating of a team punishes registration and drives debt underground. A governance forum should treat risk acceptance as a decision with an owner and a review date.

### Customers and users

Customers feel debt as repeat failures and workarounds they must follow. Where a workaround affects users, publish it with a plain note on when a fix is expected, and honour the date or explain the change. Fewer repeat incidents and honest status on known problems build more trust than a promise of no defects (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A regional hospital's IT department runs a patient scheduling service, supported by one product team and an operations group. All numbers in this example are illustrative.

The operations group keeps 23 known errors in the ITSM tool. The product team keeps a separate list of 41 debt items on its board. A quarterly review finds that 9 of the known errors and 7 of the debt items describe the same five causes. The oldest known error is 14 months old, the median known error age is 5 months, and the 85th percentile is 11 months. Workaround coverage is 61 percent. Incidents linked to open known errors are 18 percent of the quarter's incidents, and 22 percent of incidents are unlinked, so the real share could be higher.

The team merges the two lists into one ledger of 55 distinct items. For the ten items with the most linked incidents, it estimates a repair effort in bands and a monthly interest in hours. One item stands out: a nightly appointment synchronisation job fails silently about once a fortnight and needs a manual restart by on-call staff. Its repair is estimated at two weeks. Its interest, from linked incidents and tagged work, is about 10 hours a month, and every failure delays morning clinic lists. Payback time is about four months, which is quicker than any feature then in the plan.

The decision, recorded in the decision log, is to reserve 15 percent of the product team's capacity for repair work, ranked by interest per unit of effort, and to fix the synchronisation job first. The head of operations also agrees to link every incident to a known error where one exists and to test the five most-used workarounds.

Two quarters later the median known error age is 4 months and the 85th percentile is 9 months. Incidents linked to open known errors fall to 11 percent. The unlinked share falls to 8 percent, which gives the team more confidence in the figure. Then the team catches a gaming risk. The debt net change line shows 12 items resolved in a quarter, but 6 of them were closed as will not fix, and two of those were the oldest high-interest items. A reviewer outside the team reads the records and finds that the closures were made to improve the age figure. The items are reopened, the closure reason becomes a required field with a named approver, and accepted-risk items now appear on the same page as the age distribution.

## Agile, AI, automation, and analytics

### Agile

Spend a protected share of capacity on the debt with the highest interest, and review it regularly with stakeholders. The caution is that a debt count target leads to splitting and re-labelling items.

### AI

AI-generated code can add debt quickly, and AI can also help find and pay it down. Track debt net change and incidents linked to open known errors for AI-assisted areas separately, and label them. The caution is that a model that suggests a fix may leave the root cause in place.

### Automation

Automate detection of stale known errors and of dependency and flag decay, and measure the automation on false alarms. The caution is that automated scanners create noise that buries the items that matter.

### Analytics

Estimate interest with the incidents and effort each item causes, with ranges. The decision informed is what to fix next. The caution is that debt cost estimates are rough, so avoid false precision.

## Sector lens

**Startup.** Debt is usually deliberate and often right, because speed to a first customer matters most. Keep one list on the board with a label, register shortcuts as you take them, and set a review date so that "later" has a meaning. Raise the repair share when interest begins to show in incidents.

**Small business.** A single administrator or small team often carries both operations and delivery, so the two lists are naturally one. Record known errors and their workarounds in a shared document, and note which supplier or contract each item depends on. A supplier-owned defect is a known error you cannot fix yourself, so track the supplier's committed date and your workaround.

**Enterprise.** Many teams, many services, and many suppliers create several competing lists and several definitions of "done". Settle one ledger structure, one closure rule, and one ranking method, and let teams add local fields with a stated mapping.

**Government and public sector.** Legacy systems, long procurement cycles, and fixed budgets make some debt costly to repay and some replacement decisions slow. Record the legal, retention, and audit constraints that block a fix, since they explain deferral. Show the ledger as part of risk reporting, and plan repair in the budget cycle instead of treating it as an unplanned cost (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is to stop paying interest you cannot see. Repeat incidents, manual workarounds, and slow, risky changes are the visible costs, and they are normally recorded as separate problems in separate budgets. A merged ledger turns them into one comparison between the cost of repair and the cost of carrying the debt.

The cost of the practice has three parts. The first is setup: a register, links between the ITSM tool and the tracker, and a tagging convention. The second is run effort: a few seconds per incident to link it, a few seconds per work item to tag it, and a monthly review of an hour or two per service. The third is the repair capacity itself, which is the largest item and is a deliberate investment, not an overhead.

The return comes from patterns you can measure yourself. Compare the incidents linked to a known error before and after its fix, the hours of tagged work on affected changes before and after, and the on-call interrupts avoided. Add the cost of downtime if your organisation already estimates it. Do not borrow an industry figure for the cost of debt: the research literature on the topic is real, but the figures depend on context, and your own incident and time data are better evidence. The *Accelerate* research links delivery performance to organisational performance (see topic 2.8, DORA metrics), though it gives no price for your ledger. For the wider treatment of cost and return, see topic 7.7, Return on investment and business case.

## Anti-patterns and pitfalls

- **Two lists that never meet.** Operations and delivery argue for the same capacity with different evidence. Merge the lists or link every shared cause.
- **A single debt score for the organisation.** It hides where the cost is and invites ranking of teams. Report the ledger by service, with age, interest, and ownership.
- **The big rewrite as the only repair.** Large cleanups stall, and the ledger refills while they run. Retire items in small steps, ranked by payback time.
- **Zero debt as a goal.** Pursuing it rewards trivial closures and deters honest registration. Aim for a ledger whose oldest high-interest items are moving.
- **Closing known errors at "merged".** The fix has not reached users, and the incident returns. Close on release, then watch for recurrence over a stated window.
- **Hiding deferral in "will not fix".** The age figure improves and the risk stays. Count accepted risk separately, with an owner and a review date.
- **Treating static analysis as the truth.** Scores reflect code shape, not cost. Use them to find candidates, then confirm with incident links and change history.
- **Attributing debt to authors.** It teaches people to hide shortcuts and to avoid hard components. Keep every measure at service and team level (see topic 1.2, Goodhart's law and the psychology of metrics).

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Ledger and definitions | Known errors and debt live in people's heads or in scattered notes | Operations and delivery each keep a list, with different rules | One ledger with a written definition, an owner, and a closure rule for every item | Age, accepted risk, and net change reviewed against the written definitions | Definitions revised with suppliers and customers when they stop informing decisions |
| Measuring interest | No link between incidents and causes | Some incidents linked to known errors by hand | Incident links required where the cause is known; work tagged at team level | Interest and payback time estimated for the top items and trended | Interest linked to service outcomes and shared across teams and suppliers |
| Capacity and prioritisation | Repair happens in a crisis | Informal time set aside by some teams | An agreed share of capacity and a common ranking method | Share adjusted by the ledger trend and funded as planned work | Repair capacity coordinated across shared platforms and suppliers |
| Workarounds and closure | Workarounds undocumented or held by one person | Documented for some errors, untested | Workarounds in the knowledge base, with a closure rule on release | Workaround use, failure, and recurrence after closure measured | Workarounds retired automatically as fixes release, with feedback from users |

## Checklist

- [ ] Known errors and debt items sit in one ledger, or are linked item by item.
- [ ] Every item has an owner, a size band, a service, and a review date.
- [ ] Deliberate shortcuts are registered when taken, with a reason.
- [ ] Incidents are linked to known errors where the cause is known, and the unlinked share is reported.
- [ ] Work caused by weak spots is tagged at team level, and the tagging is audited by sample.
- [ ] Each of the top items has a repair effort band and a monthly interest estimate.
- [ ] A share of capacity for repair work is agreed, reported, and reviewed each quarter.
- [ ] Known errors close on release of the fix, with a stated recurrence window.
- [ ] Accepted-risk closures are listed separately, with an approver and a review date.
- [ ] Workarounds for the highest-impact errors are tested on a schedule.
- [ ] The age distribution and the split by service are shown, with the totals.
- [ ] No debt measure is used to compare or rank individuals.

## AI prompts

**Merge two lists into one ledger.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Estimate effort bands and monthly interest for the top items.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Review closure and gaming risks.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Prepare a prioritization conversation with the product owner.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a related metric, such as recurrence or change failure, and the guardrail that belongs beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited metric names its clocks, its gaming vector, and its guardrail.

## Key takeaways

- Known errors and technical debt are two views of one ledger of deferred repairs, so keep them together or linked.
- Measure the interest each item costs every month, in incidents, workarounds, and slowed change, and rank repair by payback time.
- Make every deferral a decision with an owner, a reason, and a review date, and report accepted risk separately.
- Reserve an agreed share of capacity for repair work, and report it beside planned work.
- Close a known error on release of the fix, then watch for recurrence before you trust the result.
- Keep every measure at service and team level, and use guardrails so that a better number means a better system.

## References and further reading

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
