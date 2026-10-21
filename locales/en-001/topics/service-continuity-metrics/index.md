# Service continuity metrics

**A recovery plan is a hypothesis until an exercise has tested it, so continuity metrics should count what was actually recovered, how fast, and how much data came back, and never the number of plans on a shelf.**

## Overview and motivation

Most incident measures describe the ordinary bad day: a failed deployment, a saturated database, a noisy neighbor. Service continuity describes the rare, severe day, when a region fails, a data store is corrupted, a supplier disappears, or ransomware encrypts the estate. [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning) is the discipline of preparing an organization to keep delivering at acceptable levels through such events. In ITIL 4, the practice is called service continuity management, and it is the IT service view of that larger aim (see the matching topic in the companion *Service Management Guide*).

Two terms carry most of the weight. The [recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) is the acceptable time to restore a service after a disruption. The [recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) is the acceptable amount of data loss, expressed as a span of time: an RPO of one hour means that losing the last hour of writes is tolerable and losing more is not. Both come from a [business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), the method of identifying which activities matter most, what depends on what, and what a disruption costs. The objectives are business decisions with a price, because tighter objectives need more redundancy, more automation, and more exercise time.

The difficulty is that an objective is a promise about a future event that has not happened. The honest evidence is a test. Did the team restore the service within the RTO in the last exercise? Did the restored data meet the RPO? Were the steps in the plan the steps the team really took? A continuity metric is therefore mostly a measurement of exercises, and the quality of the measurement depends on how realistic the exercise was.

Agile and site reliability engineering (SRE) teams bring useful habits to this. Their systems change weekly, so a plan written once and filed goes stale within months. The agile response is to keep recovery as code (for example with [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code)), rehearse it often, and treat each rehearsal as a source of backlog items. [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering) and game days apply the same idea at smaller scale: induce a failure on purpose, in a controlled way, and watch what happens. The SRE view is described in Google's *Site Reliability Engineering* book, and the wider field is summarized in the [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) article.

### How the views differ

- **ITIL view.** Service continuity management is a practice that sets recovery objectives from the BIA, designs plans, and proves them with tests. Its outputs are plans, exercise reports, and recorded findings. The [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) standard describes a business continuity management system. As of October 2026, check the current edition directly if a customer or regulator requires conformance.
- **Agile view.** Recovery capability is a product property in the definition of done. A story that adds a data store is not done until its restore path has been tried.
- **SRE view.** Reliability work is budgeted and measured. Failover, restore drills, and game days are scheduled work with owners and findings that enter the backlog.

This topic covers seven measures: recovery against time and data objectives in tests, exercise coverage and recency, backup restores, closure of findings, and plan currency. Real outages are in major incident metrics (see topic 3.4, Major incident metrics) and availability metrics (see topic 5.3, Availability metrics). Objectives expressed as user-facing targets are in the topic on indicators and budgets (see topic 5.2, SLIs, SLOs, and error budgets). The "failed deployment recovery time" of the DORA research program is a much smaller clock (see topic 2.8, DORA metrics). Root causes revealed by tests belong to problem and learning topics (see topic 4.1, Problem management metrics, and topic 4.2, Postmortem and learning metrics).

A **tier** is a class of service grouped by how quickly it must come back. A **tabletop exercise** is a discussion-based rehearsal with no system changes. A **game day** is a hands-on rehearsal in which a team induces or simulates a failure and observes the response. A **finding** is a recorded gap between the plan and what happened. **Plan currency** is how well a plan reflects the service as it is today.

## Key principles

- **Test, then claim.** An RTO or RPO is validated only by a recovery that was actually performed and timed. Report the objective and the last demonstrated result side by side.
- **Measure realism, not just success.** A restore of an empty test database that passed in minutes says little about a production-sized restore. Record the scope and conditions of each exercise next to the result.
- **Tier the estate and spend effort by tier.** Critical services get frequent, realistic tests. Low-tier services get lighter checks. A single frequency target for everything wastes effort or misses risk.
- **Treat findings as the product of an exercise.** The valuable output of a game day is a closed list of gaps. A test with no findings is either excellent or too gentle, and you should find out which.
- **Describe services and rotations, never individuals.** Exercise results describe the system and the plan. Nobody is ranked by how fast they recovered a drill.
- **Show each exercise as its own row.** There are few tests per service per year, so averages mislead (see topic 1.6, Statistical literacy for service metrics).

## Metric definitions

Each metric lists the clock or the count, what is excluded, and the data source. Every row needs a written rule before it is trusted. A "tier-1 service" below means a service in the highest recovery tier defined by your own BIA.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RTO met rate | Share of recovery exercises in which the service was restored within its stated RTO | exercises with restore time <= RTO / exercises run. Clock starts at the declared start of the exercise failure (injection time or scenario declaration) and stops when the service passes its agreed health check for real or synthetic users. Tabletop exercises and exercises with no timed restoration are excluded and counted separately | percent, with the number of exercises shown | Exercise report, timeline from monitoring, service register with RTO | Service continuity management; availability management | Game day outcome; time to recover in delivery metrics | Per exercise; rolled up quarterly |
| RPO met rate | Share of recovery exercises in which data loss stayed within the stated RPO | exercises with measured data loss span <= RPO / exercises that restore data. Data loss span is the time between the last write present after recovery and the moment of failure. Exercises that restore no state are excluded | percent, with the number of exercises shown | Exercise report, comparison of restored data to source or write log | Service continuity management; information security management | Restore drill as part of definition of done | Per exercise; rolled up quarterly |
| Tested recovery coverage | Share of tier-1 and tier-2 services that had a hands-on recovery test within their agreed test interval | services with a qualifying test inside the interval / services in scope. A qualifying test is hands-on (not tabletop only) and restores the service in the test or production environment. The interval is set per tier | percent, by tier | Service register, exercise calendar and reports | Service continuity management; service catalog management | Game day schedule | Monthly |
| Days since last successful recovery test | Age of the most recent passing recovery test for each critical service | report date minus date of the latest test that met both RTO and RPO. A failed test does not reset the clock. Services never tested are shown as "never" and not as zero | days, per service, with the oldest highlighted | Exercise reports, service register | Service continuity management | Game day schedule; work item age | Monthly |
| Backup restore success rate | Share of attempted restores from backup that completed with verified, usable data | restores that completed and passed a data verification check / restores attempted, over automated and manual restore tests. Backup job success alone is excluded, because a job that ran is not a restore that worked | percent, by data tier | Backup system logs, automated restore verification results | Service continuity management; infrastructure and platform management | Restore drill; operability criteria in definition of done | Weekly for automated tests; monthly in review |
| Exercise finding closure rate | Share of findings from recovery exercises closed within their agreed time, split by severity | findings closed within target / findings that came due in the period. Clock starts when the finding is recorded in the exercise report and stops at verified fix, which means a re-test or review that confirms it. Findings accepted as risks by a named owner are counted separately | percent, with the count of overdue findings | Exercise report, issue tracker | Service continuity management; continual improvement | Retrospective action items; backlog item age | Monthly |
| Plan currency | Share of continuity plans and runbooks reviewed after the last material change to their service, or within their review interval | plans with a review date later than the last material change and inside the interval / plans in scope. Material change means a change record flagged as altering architecture, data stores, dependencies, or suppliers | percent, with oldest unreviewed plan age | Plan repository (version control), change records, service register | Service continuity management; change enablement | Definition of done includes runbook update | Quarterly |

The RTO clock in an exercise differs from the clock in a real outage, which starts at impact (see topic 3.4, Major incident metrics), so compare exercises with exercises. A closely scripted exercise measures rehearsal speed, so record how much surprise it contained.

## Recommendations

### Set objectives that can be tested

**1. Derive RTO and RPO from a business impact analysis, and write them next to the service.** The BIA asks the business what an hour, a day, and a week of outage cost and what data it can afford to lose. Record the answers in the service register so every test can be compared with a stated objective. Objectives chosen by engineers alone tend to be either unaffordable or unrelated to what customers need.

**2. Tier the services and set test intervals by tier.** A small number of tiers, perhaps three or four, is easier to run than a different rule for every service. Give the top tier the most frequent and most realistic tests, and give the lowest tier a light check such as a periodic restore of a sample. Write the intervals down and review them when the BIA changes.

**3. Check that the objective fits the architecture.** An RPO of five minutes with a nightly backup is a contradiction a test will expose at the worst moment. Compare each objective with the backup, replication, and failover design before the first exercise, and record any gap as a finding.

### Test in ways that reveal something

**4. Mix tabletops, restore drills, and game days.** A tabletop exercise is cheap and finds gaps in roles, contacts, and decisions. A hands-on restore drill finds gaps in procedures, permissions, and data. A game day, which induces a failure and watches the response, finds gaps in monitoring, runbooks, and coordination. Report each type separately so a run of easy tabletops does not look like proof of recovery.

**5. Time the restore on production-sized data.** A restore that works on a small copy can fail on the real volume because of throughput or storage limits. Where full-scale tests are too costly to run often, run one periodically and state any extrapolation. Record the data size with the result.

**6. Verify that restored data is usable.** Add an automated check after restore, such as a row count, a checksum, or a synthetic transaction. Count a restore as successful only when that check passes.

**7. Add surprise gradually.** Early exercises can be announced and scripted. Later ones should hold back details of the failure and include dependencies such as expired credentials or an unreachable supplier. Record the level of surprise so results can be read in context.

### Turn findings into change

**8. Log every finding with an owner, a severity, and a due date.** A game day produces a list: a missing permission, a runbook step that no longer matches the tool, a monitor that never fired. Put each one into the team's backlog with the same visibility as feature work. Track the age of open findings and the share closed on time, and confirm closure by re-test where practical.

**9. Link findings to problem management and learning.** A finding that recurs across exercises is a problem in the ITIL sense (see topic 4.1, Problem management metrics). Review each exercise blamelessly, as you would a postmortem, and track actions to closure (see topic 4.2, Postmortem and learning metrics).

### Keep plans alive

**10. Keep plans and runbooks in version control, and link them to change.** When a change record alters architecture, a data store, or a supplier, require that the owning plan is reviewed in the same piece of work (see topic 4.3, Change enablement metrics). Measure plan currency against the last material change and not just against the calendar. A plan reviewed every quarter that ignores last month's migration is current in name only.

**11. Keep the dependency map honest.** Recovery order depends on shared services such as identity, name resolution, and secrets storage. Reconcile the map against configuration records and fix the gaps exercises reveal (see topic 7.4, Configuration and CMDB quality metrics).

**12. Include suppliers, and rotate exercise duty.** Ask each critical supplier for its own test evidence and agree how to exercise the joint steps (see topic 8.4, Supplier and contract metrics). Exercises consume time, so share the duty across a rotation and count it as operational load (see topic 5.7, Toil and on-call metrics).

## Gaming vectors and guardrails

Continuity numbers are easy to flatter because few people look closely at an exercise, and the real test happens rarely. The table pairs each metric with a way it gets gamed and the check that catches it. The pairings follow the form set out in topic 1.2 (see topic 1.2, Goodhart's law and the psychology of metrics).

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| RTO met rate | Choosing a small test dataset, an easy scenario, or a rehearsed script; starting the clock late, after the team has begun; loosening the health check so "restored" arrives sooner; setting a generous RTO so every test passes | Record data size, scenario surprise, and health check definition with each result; compare the RTO with the BIA; show each exercise as its own row, including failures |
| RPO met rate | Measuring loss only for the primary table and not for all state; testing a replica that is in sync because no load is running; redefining the RPO after a missed result | Verify data loss against the write log across all data stores in scope; test under realistic write load; keep a change log of objectives with reasons |
| Tested recovery coverage | Counting tabletop discussions as tests; testing a trivially small service to raise the percentage; shrinking the in-scope list by reclassifying services to a lower tier | Require hands-on tests for the tier-1 count; report coverage weighted by service criticality; audit tier changes against the BIA |
| Days since last successful recovery test | Re-running an easy test to reset the age; labeling a partial test as passed; resetting the date after a paper review | Show the scope of the last passing test; show the oldest age and the services never tested; require both RTO and RPO to have been met |
| Backup restore success rate | Reporting backup job success as restore success; testing only the backups that are known to be good; verifying with a check that cannot fail | Track restores of randomly sampled backups; require a data verification result; review the check itself at each audit |
| Exercise finding closure rate | Closing findings without a fix; downgrading severity to relax the due date; splitting one finding into many easy ones; recording few findings in the first place | Verify closure by re-test; report findings per exercise next to the closure rate, since a falling count can mean gentler exercises; review severity changes |
| Plan currency | Updating a review date without reading the plan; marking changes as non-material; stuffing the plan with generic text that never goes stale | Sample plans and walk through them with someone who did not write them; compare the material-change flag rate with the architecture change history; link currency to test results |

A healthy reading shows a handful of tests per quarter with honest variation: some passed on the first attempt, some failed and were repeated, and the findings from each appear in the backlog and close within the stated time. Perfect scores year after year are a reason to ask how hard the exercises are.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Frequent small automated restore tests | Cheap, continuous evidence; catches silent backup failure early | Does not test coordination, people, or full-scale recovery |
| Annual full-scale failover exercise | Realistic; exercises people, suppliers, and dependencies together | Expensive and rare; hard to repeat after a fix; carries risk if run in production |
| Tabletop exercises | Low cost; finds gaps in roles and decisions; good for training | Does not prove the technology works; easy to run without learning anything |
| Production game days with induced failure | Highest realism; tests monitoring and runbooks as they are | Needs mature safeguards and leadership support; can cause customer harm if run carelessly |
| Tiered objectives | Spends effort where the risk is | Tier assignments can drift and need an owner |

The practical answer is a layered program: cheap automated restore checks all the time, hands-on drills for each tier-1 service on a fixed interval, a larger exercise on a longer cycle, and tabletops for decisions and communication. State the intervals so the reader can judge how recent the evidence is.

## Questions to discuss with your team

**1. When did we last restore our most important service, and what exactly did we prove?**
Ask for the date, the data size, the scenario, and the result, and write them on a board.  The facilitator should resist judging and focus on the gap between the claim and the evidence. Finish by agreeing on one test that would close the largest gap.

**2. Who chose our RTO and RPO, and would the business still choose them today?**
Trace each objective back to a business impact analysis or a decision. Ask whether the architecture could meet the objective on paper, and whether the cost of meeting it was ever stated.  Agree who will confirm the top services' objectives with the business and by when.

**3. What would a failed exercise cost us in reputation, and does that shape how hard our exercises are?**
This question surfaces the pressure that makes exercises gentle. Ask whether a failed test is treated as a failure of the team or a success of the exercise. 

**4. Which findings from our last exercise are still open, and why?**
Read the list aloud with ages and owners. For each overdue item, ask what is blocking it: competing work, unclear ownership, cost, or a belief that the risk is acceptable. The aim is that no finding sits in an unowned state.

**5. What does our plan assume that is no longer true?**
Pick one plan and read it with a person who did not write it. Look for retired tools, renamed accounts, and departed suppliers. Ask how the plan would be updated when the service changes, and who notices when it is not. Link the answer to the change process.

**6. Which dependency would stop everything, and have we ever tested without it?**
Shared services such as identity, name resolution, secrets, and the paging system itself are common single points of failure. Ask the team to name them and to describe the last time each was unavailable on purpose.

## Four perspectives

### Product and delivery teams

Product teams own the design that makes recovery possible, so they meet continuity as part of the definition of done for critical services: a backup path, a restore procedure, and a runbook that works. They should run restore drills as part of their own cadence, store recovery code with the service, and treat a failed drill as a backlog item.

### Service and operations teams

Operations teams run most exercises and carry the load of preparing them. They should keep the exercise calendar, record timelines as the exercise runs, and write findings the same day. Results describe the service and the plan, and nobody is ranked by how quickly an individual recovered a drill.

### Leadership and governance

Leaders set the objectives with the business and decide how much recovery is worth buying. They should ask to see the last demonstrated result beside each objective, the age of the evidence, and the open findings, and should avoid rewarding a clean sheet. Governance bodies should expect a small, stable set of continuity measures, linked to the risk register and to regulated reporting where it applies (see topic 8.2, Risk and control metrics, and topic 8.5, Regulated and government reporting).

### Customers and users

Customers rarely see continuity until it matters, and then they judge it entirely by the outcome: how long they were without the service and whether their data survived. They benefit from clear statements of what is promised, in terms they can understand, and from honest communication when an incident invokes the plan. Where contracts include recovery commitments, share exercise evidence on request (see topic 5.1, SLA, OLA, and XLA metrics).

## In practice: a service management example

A regional hospital's IT department runs a patient scheduling system, a medical imaging archive, and a staff messaging service. A product team of eight maintains scheduling, and an operations team runs the platform. All numbers in this example are illustrative.

The department's register lists scheduling as tier 1 with an RTO of 2 hours and an RPO of 15 minutes. Its quarterly report shows "RTO met rate: 100 percent over 4 exercises" and "tested recovery coverage: 100 percent." A new head of operations reads the exercise reports behind the numbers. Three of the four exercises were tabletops, and the only hands-on restore used a copy of the database holding about one tenth of production data. No one had restored a backup to a clean environment for 14 months.

The team decides to change what is measured and tested. It redefines tested recovery coverage to count hands-on tests only, which drops the figure to 33 percent across the three tier-1 services. It schedules a production-sized restore for scheduling, with automated verification of row counts and a synthetic booking transaction. The run takes 3 hours 40 minutes against a 2-hour RTO, and the restored data is 40 minutes behind the failure point against a 15-minute RPO, because log shipping had been paused during a migration and never resumed. The game day produces 9 findings: 2 high, 5 medium, and 2 low severity.

The decision recorded in the log is to treat the miss as the most valuable result of the year. The team opens work to resume log shipping with an alert on its lag, to parallelize the restore, and to move one data volume to faster storage. The RTO stays at 2 hours, and the team adds a documented manual fallback for scheduling. The finding closure rate for the first 60 days is 7 of 9 on time, with the other two accepted as risks by named owners.

The gaming risk caught here was subtle. Nobody falsified a number: a generous count of tabletops and a small test dataset made the report green. The guardrails that worked were recording data size and exercise type with each result, and the practice of reading the underlying exercise reports. On the next report, the team shows each exercise as its own row, with the failed run included.

## Agile, AI, automation, and analytics

### Agile

Rehearse recovery in small, frequent exercises with stakeholders and fix what they reveal. The caution is that scripted exercises that always pass give false comfort.

### AI

AI services add new dependencies, such as models, vector stores, and third-party APIs, to the recovery plan. Include them in tested recovery coverage and pair recovery time with a check that answers are correct after restore. The caution is that a restored AI service may run a different model version or lose its data, so verify behavior, not just availability.

### Automation

Automate backup verification and restore tests, and measure the automation on failed restores. The caution is that a backup that completes is not a backup that restores, so test the restore.

### Analytics

Report objectives met in tests with the dates of the last test, and the exercise findings closed. The decision informed is which recovery is least proven. The caution is that few real recoveries means small samples, so show counts.

## Sector lens

**Startup.** There is usually one production environment, a small team, and a managed cloud provider. The most valuable measure is the simplest: restore the production database from backup into a clean environment every month, time it, and verify the result. Write the RTO and RPO on one page.

**Small business.** IT is often outsourced or run by one or two people on hosted services. Ask the supplier in writing what recovery it commits to and what evidence it can show, and test one restore of your own data a quarter. Keep a one-page plan where it can be read when the main systems are down.

**Enterprise.** Many services, many suppliers, and shared platforms make tiering and a dependency map essential. Invest in a central service register with objectives, an exercise calendar, automated restore verification, and consistent reporting so that results compare across teams.

**Government and public sector.** Continuity duties may arise from law, audit, or policy, and a public service may have to keep working during emergencies. Evidence of testing is often reviewed externally, so keep the exercise reports, findings, and closure records in a form an auditor can read. Procurement can lock in recovery arrangements, so include exercise rights and evidence in contracts (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The reasons to invest are the cost of a severe outage that lasts longer than the business can bear, the loss of data that cannot be recreated, and the obligations to customers, regulators, and insurers who ask for evidence of preparedness. Continuity work is insurance, so the return is the avoided loss and the confidence of the decision makers, and it is hard to express as a figure without inventing one. Describe it through patterns you can observe: the gap between stated and demonstrated recovery time, the number of high-severity findings found in exercises instead of in real events, and the time to answer a customer or auditor request for evidence.

Costs come in three groups: the redundancy and tooling the objectives demand, the time of people to plan, run, and review exercises, and the effort to keep plans and dependency maps current.

Total cost of ownership is dominated by people and by the tighter tiers. Moving from a 24-hour to a 2-hour RTO changes the design and the bill, so make that trade explicit with the business. Small, frequent, automated tests tend to cost less than one large annual event because defects surface while they are cheap to fix.

## Anti-patterns and pitfalls

- **The plan on the shelf.** A document counts as preparation, and nobody has tried it. Instead, report the date and result of the last hands-on test beside every objective.
- **Backup success as restore success.** Jobs report green while the data cannot be restored. Instead, test restores regularly and verify the data before counting a success.
- **Rehearsed theatre.** The exercise is scripted and run by the plan's authors. Instead, add surprise gradually.
- **One target for everything.** Every service has a four-hour RTO because the template said so. Instead, tier the services from a business impact analysis and set objectives that fit.
- **Findings that never close.** The exercise report lists gaps and the backlog never sees them. Instead, give each finding an owner and a due date, and verify closure by re-test.
- **Penalizing the failed test.** A team that is blamed for a missed RTO will stop running hard tests. Instead, agree up front that a failed exercise with good findings is a good outcome, and review it without blame.
- **Stale plans after fast change.** The calendar drives review, and architecture changes slip through. Instead, link plan review to material change records and measure plan currency against them.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Objectives and tiers | RTO and RPO unwritten or copied from a template | Objectives written for some key services | Tiers and objectives come from a business impact analysis and sit in the service register | Objectives reviewed against demonstrated results and architecture | Objectives agreed jointly with the business and suppliers, and adjusted as the services change |
| Testing and evidence | Recovery never tested, or tested once after an incident | Ad hoc restore tests by some teams; results kept in personal notes | Tiered test intervals with recorded scope, timeline, and result | Results trended, with tabletops, drills, and game days reported separately | Cross-team and supplier exercises with surprise, scheduled from risk |
| Findings and learning | Gaps noticed informally | Findings listed after some exercises | Every finding has an owner, severity, and due date | Closure rate and age reviewed, with re-test confirming closure | Findings feed shared platforms, supplier contracts, and design standards |
| Plan currency | Plans written once | Plans updated after incidents | Plans in version control with a review interval | Review linked to material changes and measured | Plans and runbooks tested as code and generated from the service definition where possible |

## Checklist

- [ ] Each tier-1 service has a written RTO and RPO that came from a business impact analysis.
- [ ] The service register shows each service's tier, objectives, and test interval.
- [ ] The RTO and RPO clocks, health check, and exclusions are written down (see topic 1.5, Data sources and instrumentation).
- [ ] Hands-on recovery tests, tabletops, and game days are reported as separate types.
- [ ] Every recovery test records data size, scenario, level of surprise, and the measured restore time and data loss.
- [ ] Restores from backup are tested automatically, and a data verification check decides success.
- [ ] Each exercise finding has an owner, a severity, a due date, and a place in the backlog.
- [ ] Plan review is linked to material change records, and the oldest unreviewed plan is visible.
- [ ] The dependency map includes shared services, and at least one scenario removes one of them.
- [ ] Each metric in this topic has a named guardrail and an owner in the metric register (see topic 1.4, Metrics governance and ownership).
- [ ] Exercise duty rotates, and the time it takes is counted as operational load.

## AI prompts

**Design a recovery test and the measures that go with it.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Review exercise reports for flattering evidence.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Turn game day notes into findings and backlog items.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Check a plan for currency against recent change.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a continuity, recovery, or exercise metric, and the guardrail to pair with it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited continuity metric states its clocks, exclusions, and gaming vector.

## Key takeaways

- A recovery objective is a promise, and only a timed, realistic exercise shows whether it can be kept.
- Report the last demonstrated result and its age beside each RTO and RPO, and show every exercise as its own row.
- Test restores, not backups: a restore counts only when the data has been verified as usable.
- The product of an exercise is a closed list of findings, so track their age and confirm closure by re-test.
- Keep plans in version control and tie their review to material change, and not just to the calendar.
- Measure services and plans, never people, and make a failed exercise with good findings a safe and respected result.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
