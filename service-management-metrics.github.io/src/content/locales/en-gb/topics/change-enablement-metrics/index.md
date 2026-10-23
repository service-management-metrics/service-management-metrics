# Change enablement metrics

**Change enablement metrics show whether your organisation lets beneficial changes flow safely and quickly, so measure how changes are classified, how long they wait for a decision, and how much of that decision the pipeline makes automatically, and pair every speed measure with a view of risk.**

## Overview and motivation

Every service changes. Teams add features, patch libraries, rotate certificates, resize databases, and retire old components. In the [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 framework, the practice that governs this is called change enablement, and its stated purpose is to maximise the number of successful service and product changes by making sure risks are properly assessed, changes are authorised, and the change schedule is managed. Earlier ITIL editions called the practice [change management](https://en.wikipedia.org/wiki/Change_management_(ITSM)), and many organisations still use that name. The newer name signals a change of emphasis: the practice exists to enable good change, not to hold it back.

A **change** in ITIL 4 is the addition, modification, or removal of anything that could have a direct or indirect effect on services. That is a wider scope than a code deployment. It covers configuration edits, infrastructure updates, access changes, supplier actions, and documentation that operators rely on. An agile team usually sees a change as a pull request that ships. A service operations team sees it as an entry on a schedule. Both views are valid, and the metrics in this topic work best when they describe the same event from both sides.

ITIL 4 describes three types of change, and the metrics in this topic depend on them. Check the exact wording in the framework owner's current publications; this topic summarises the widely documented pattern as of October 2026.

- A **standard change** is low risk and well understood. It follows a documented procedure and is pre-authorised, so it needs no case-by-case approval.
- A **normal change** needs assessment and authorisation before it proceeds. The depth of assessment scales with risk and impact.
- An **emergency change** must happen urgently, often to restore service or close a serious vulnerability. It follows an expedited path with fuller review afterwards.

Other terms recur below. A **change authority** is the person or group that holds the right to approve a change of a given type. A **change advisory board (CAB)** is a group that reviews proposed changes and advises or decides. **Approval lead time** is the time a change waits for an authorisation decision. A **percentile** is a value below which a stated share of observations fall, so the 85th percentile is the number that 85 percent of changes beat.

Why measure all this? The strongest published evidence on change control comes from the research programme of DevOps Research and Assessment (DORA). Its guidance reports that heavyweight external approval, such as a CAB or senior manager sign-off, is associated with worse software delivery performance, and that no evidence was found that more formal external review lowers the share of changes that fail. It recommends peer review, automated testing, and small changes instead, with a strategic role for any central board. These are statements about association in survey data, not laws, and the DORA pages give no effect sizes for the claim, so treat them as a strong reason to look at your own data and not as a verdict on any one control. The change enablement material in the *Service Management Guide* summarises the same research.

The agile and ITIL views meet at the question of where control lives. In a delivery pipeline, much of the assessment can happen continuously: a reviewer approves the code, automated tests check behaviour, and the deployment tool writes the record. This satisfies the intent of [separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties) when the review is recorded and the author cannot approve their own work. Metrics tell you whether this is actually happening, or whether the pipeline is a fast road that most changes still leave in order to wait in a queue.

This topic covers the flow and control side of change: volume, type mix, waiting time, and automation. It does not cover whether changes succeed. The change fail rate, emergency share, rollback, and hotfix measures belong to topic 4.4, Change failure and rework, and the DORA throughput and instability measures are in topic 2.8, DORA metrics. Deployment and release frequency are in topic 4.5, Release and deployment metrics. The incident side of a bad change is in topic 3.3, Incident response and resolution time, and topic 3.4, Major incident metrics.

Change metrics attract [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) quickly: a target for approval time invites fast, empty approvals, and a target for standard change share invites reclassifying risky work as routine (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Match control to risk.** The aim is proportionate control: low-risk changes take a fast, pre-authorised path, and high-risk changes get real scrutiny. A single process for everything is slow for most changes and shallow for the dangerous ones.
- **Measure the wait, not just the work.** Approval lead time often dominates the time a finished change spends before it reaches production. It is invisible unless someone records when approval was requested and when it was granted.
- **Count types before you count anything else.** Volume, speed, and risk differ sharply between standard, normal, and emergency changes. A single average across all three hides every useful signal.
- **Prefer automated, recorded evidence to meetings.** Peer review, passing tests, and pipeline checks produce a record without a calendar slot. Measure how much of the approval decision the pipeline captures.
- **Describe a service or team, never a person.** Approvers and requesters work inside a system. Ranking individuals by approvals granted or declined teaches people to approve everything or nothing.
- **Pair speed with safety.** Faster approval is good news only if the failure picture is steady. Read these metrics beside topic 4.4, Change failure and rework.
- **Write down the classification rules.** Whether a change is standard, normal, or emergency is a judgement that must be reproducible. Record the criteria and review a sample each quarter.

## Metric definitions

The table states the clocks and exclusions your team should write down. The data come from the change or ticket tool, the version control and pipeline events, and the approval records (see topic 1.5, Data sources and instrumentation).

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change volume by type | Number of changes completed, split by standard, normal, and emergency | Count of change records that reached implemented status in the period, grouped by type at time of approval; cancelled and withdrawn changes are excluded and reported separately; report per service, not per person | Changes per week or month, by type | Change records in the ITSM tool, joined to pipeline deployment events | Change enablement | Throughput of finished work items; release content per increment | Weekly, reviewed monthly |
| Standard change share | Share of completed changes that took the pre-authorised path | Standard changes completed in the period / all changes completed in the period; a change reclassified after the fact counts under its final type and the reclassification is logged | Percent | Change records with type and reclassification history | Change enablement | Routine work covered by the team's working agreement and definition of done | Monthly |
| Approval lead time | Time a change waits for an authorisation decision | Clock starts when the request is submitted as ready for assessment and stops when the authorisation decision is recorded; time spent waiting for the requester to supply information is excluded and shown separately; report the median and the 85th percentile for normal changes in the period; standard changes with no approval step are excluded | Hours or working days | Timestamps on change records or approval events in the pipeline | Change enablement | Wait time in a workflow; time in a review column | Weekly, reviewed monthly |
| Automated approval share | Share of authorisation decisions made and recorded by pipeline controls or pre-authorised policy | Changes whose approval was granted by a recorded automated check or recorded peer review under a written policy / all changes completed in the period; manual sign-off by a board or manager counts as not automated | Percent | Pipeline logs, code review records, and change records | Change enablement; deployment management | Automated quality gates; peer review as part of the definition of done | Monthly |
| Approval queue age | How long pending requests have been waiting right now | Age of each change currently awaiting a decision, measured from submission to the moment of the snapshot; report the oldest item and the 85th percentile of the open queue; completed approvals are excluded | Hours or working days | Change records with open approval status | Change enablement | Work item age; aging work in progress | Daily snapshot, reviewed weekly |
| Change record completeness | Share of completed changes whose record can answer who, what, why, when, and which service | Changes with all required fields populated and linked to the affected service or configuration item / all changes completed in the period; the required fields are listed in the definition; records created after the change was implemented are flagged | Percent | Change records, version control links, configuration data | Change enablement; service configuration management | Traceability from commit to ticket to deployment | Monthly |

Approval lead time looks back at changes that finished waiting and can hide a pile of stuck requests. Queue age looks at what is waiting today, which is the earlier warning. Standard change share is not a score to maximise: a team changing configuration through a mature pipeline will have a high share, and a team on a legacy core system may reasonably have a low one.

## Recommendations

### Establish the basics

**1. Count changes by type before measuring anything else.** Build one view of completed changes, split by standard, normal, and emergency, per service and per month. Many organisations discover at this point that no one can agree on the total, because tickets, pipeline deployments, and informal fixes are counted separately. Reconciling these sources is the first result of the programme (see topic 1.5, Data sources and instrumentation).

**2. Write the classification rules and sample them.** State what makes a change standard: a documented procedure, a known risk, and a track record. State what pushes a change to normal or emergency. Review a random sample of about twenty changes each quarter and ask whether each was classified the way the rules say. Misclassification is the main threat to every other number in this topic.

**3. Define the approval clock in writing.** Say that the clock starts when the request is submitted as ready, and stops when the decision is recorded, and name the exclusions, such as waiting for the requester to answer a question. Without this, one team measures from ticket creation and another from the board meeting, and the numbers cannot be compared even over time.

### Shorten the wait

**4. Report approval lead time as a distribution.** A mean hides the pattern that matters, which is a few changes waiting a very long time. Show the median and the 85th percentile, and the slowest few cases by name of change, not by name of person (see topic 1.6, Statistical literacy for service metrics). If the 85th percentile is many times the median, the cause is usually a meeting cycle or a single overloaded approver, and the fix is structural.

**5. Watch the queue, not just the history.** Review the approval queue age every week in the same forum that reviews flow measures. The oldest waiting item is the best early warning that a board is overloaded, that a holiday has stalled a signature, or that a requester has quietly stopped following up. A queue view also fits the habit of looking at aging work (see topic 2.1, Flow measures).

**6. Separate waiting for information from waiting for a decision.** When a request goes back to the requester for more detail, stop the approval clock and start a different one. Approvers get blamed for delays that the requester caused, and requesters get blamed for delays in the queue. Two clocks give each side an accurate picture and a concrete improvement, such as a better request template.

### Move control into the pipeline

**7. Convert repeatable, low-risk change types into standard changes.** Pick the most common normal change in your volume view, such as a routine library update or a scaling action. Write down its procedure and its checks, agree the risk with the change authority, and pre-authorise it. Then watch standard change share and approval lead time for normal changes together: the share should rise and the queue should shorten, with no matching rise in failures (see topic 4.4, Change failure and rework).

**8. Record approval where the work happens.** Capture peer review in the [code review](https://en.wikipedia.org/wiki/Code_review) tool and let the pipeline link the review, the test result, and the deployment to the change record automatically. The record is then a by-product of work instead of a separate task. Measure the automated approval share, and inspect a sample to confirm that the recorded review is substantive, not a rubber stamp (see topic 2.7, Pull request and code review metrics).

**9. Treat the pipeline as the place to encode policy.** Rules such as "no direct production access without a ticket," "tests must pass," and "the author cannot approve their own change" can be enforced by tooling, with the configuration kept as code under [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) practices. When the policy is code, you can show an auditor the rule and its history instead of a meeting minute. Measure how many changes bypass the pipeline, because each bypass is a hole in the control.

### Keep the control honest

**10. Keep a fast path for emergency changes, and review how it is used.** Emergency changes need speed, so do not slow them with the normal queue. Do review each one afterward and watch for a drift upward in volume, since an emergency path that is easier than the normal path becomes the default (the measures for this are in topic 4.4, Change failure and rework). Report emergency volume beside normal volume in the same view.

**11. Audit record completeness on a schedule.** A complete record helps during an incident, when responders ask what changed recently (see topic 3.3, Incident response and resolution time). Measure completeness, review a sample, and treat gaps as a defect in the form or integration, not a failing of the requester. An [audit trail](https://en.wikipedia.org/wiki/Audit_trail) that is assembled afterward from memory is weak evidence.

**12. Review the change authority model at least yearly.** Decide who holds approval rights for each type and risk level, and retire boards that approve everything they see. Shift a central board toward a strategic role: coordinating across teams, resolving schedule conflicts, and deciding on trade-offs between time to market and risk. Record the decision and the evidence in the metric register (see topic 1.4, Metrics governance and ownership).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Change volume by type | Splitting one change into many small records to look busy, merging many into one to look calm, or leaving informal changes off the books | Reconcile counts against pipeline deployment events each month; track the share of deployments with no matching change record |
| Standard change share | Reclassifying risky work as standard to reach a target, or writing broad standard procedures that cover anything | Quarterly sample review of classification; change failure rate by type (see topic 4.4, Change failure and rework); a log of reclassifications |
| Approval lead time | Starting the clock late, stopping it early, pausing it for questions that did not need asking, or approving without reading | The 85th percentile beside the median; sampled review of approvals for substance; change failure rate by approver group, never by individual |
| Automated approval share | Adding automated checks that always pass, or counting a peer review with no comments as assurance | Sampled review of automated and peer approvals; escaped defects and failure rate for automatically approved changes; bypass count |
| Approval queue age | Closing or withdrawing old requests so the queue looks short, or moving them to a new request with a fresh timestamp | Count of withdrawn and resubmitted requests; request age measured from the first submission |
| Change record completeness | Filling required fields with placeholder text, or creating records after the change to satisfy a report | Flag records created after implementation; sample quality review of free text; link-to-commit rate |

A healthy reading shows the type mix shifting slowly toward standard changes with a stable failure picture, a median approval time close to the 85th percentile, a queue with no item far older than the rest, and a bypass count that stays near zero. Be suspicious of a sudden jump in any one number. A halving of approval lead time in a month with no process change usually means the clock moved, not the work.

## Trade-offs: pros and cons

| Approach | Pros | Cons |
| --- | --- | --- |
| Pre-authorised standard changes | Fast, consistent, cheap to audit; frees the change authority for risky work | Needs up-front design; classification can drift; broad procedures hide risk |
| Peer review recorded in the pipeline | Review by people who know the code; produces a record automatically; scales with volume | Quality depends on review culture; small teams may lack an independent reviewer; some regulators expect a separate approver |
| Central change advisory board | Cross-team visibility; catches schedule collisions and shared-dependency risk | Slow when used as a gate on every change; encourages larger batches of change delivered less often; creates a queue |
| Approval lead time as a headline metric | Easy to explain; exposes a real source of delay | Easy to game; can push approvers to hurry; says nothing about quality of the decision |
| Automated approval share as a target | Rewards investment in tooling and recorded evidence | Can reward weak automated checks; may exclude changes that genuinely need human judgement |

The better question is rarely "board or no board" and usually "which changes need which kind of scrutiny, and how do we know?"

## Questions to discuss with your team

**1. How many changes did we make last month, and do all our sources agree?**
Ask each group to produce its own count from tickets, pipeline deployments, and informal channels. Compare the totals. The gap is itself a finding about unrecorded change. The facilitator should agree on which source is the system of record and who reconciles the others.

**2. Which of our normal changes are really routine, and what would it take to make them standard?**
List the five most frequent normal changes. For each, ask whether the procedure is documented, whether the risk is understood, and whether the team has a clean track record. The discussion often turns up one or two clear candidates. Capture the checks that would make pre-authorisation safe, and name who would approve the standard procedure.

**3. Where does our approval clock start and stop, and what waits inside it?**
Take the last three normal changes and trace them from submission to decision. Note every handoff, meeting, and request for information. People are often surprised by how much of the wait is calendar time between rounds of questions. Agree on a written definition of the clock and what is excluded.

**4. Do we trust our approvals, or do we only collect them?**
Pull a sample of recent approvals and read the reviews. Look for approvals granted within seconds or with no comments. The goal is to learn how much assurance the process really provides, not to find a culprit. Discuss what would make a review more substantive without making it slower.

**5. What is our change board for, and what would we lose if it stopped meeting?**
Ask what the board decides that nobody else could, and what it only confirms. Some boards do valuable work coordinating across teams and spotting schedule collisions. Others restate decisions already made in code review. Agree which functions are worth keeping and which could move into the pipeline or a lighter forum.

**6. If we reduced approval time by half, what would we need to see to know it was safe?**
Name the safety signals before the change, such as the failure rate for changes by type, the emergency share, and incidents linked to recent changes. Agree the thresholds that would trigger a pause. This conversation turns a speed target into an experiment with a stopping rule, which is the best defence against optimising the wrong thing.

## Four perspectives

### Product and delivery teams

Delivery teams feel approval lead time as idle time between a finished change and a running one. They want to see their own numbers by type, with a view of the queue, so they can decide when to batch, when to split, and when to ask for a new standard change. Their best contributions are good request templates, small changes, and clean links from commit to change record.

### Service and operations teams

Operations teams use the change record to answer the first incident question: what changed recently? They value completeness, accurate service links, and a trustworthy schedule. They also carry the cost of a change that goes wrong, so they have a legitimate interest in classification rules and in the review of emergency changes. The best move is to co-own the standard change catalogue with delivery teams, so that pre-authorisation reflects operational knowledge.

### Leadership and governance

Leaders and governance bodies need assurance that changes are controlled, and they need to know whether control is slowing the organisation. These metrics give both: type mix, waiting time, and the share of approvals backed by recorded evidence. Ask for trends and spread across services, never a league table, and read them beside failure measures (see topic 4.4, Change failure and rework). Funding the automation that moves approval into the pipeline is usually a better investment than adding a reviewer to the board.

### Customers and users

Customers rarely see the change process. They see new features arriving, fixes shipping promptly, and fewer outages after a release. Slow approval delays the fixes they asked for, and weak approval risks the outage they dread. Where a service has scheduled maintenance windows, publish the change calendar in plain language.

## In practice: a service management example

A fictional regional insurance company runs a customer portal with eight delivery teams and a CAB that meets twice a week. All numbers below are illustrative.

The service operations lead builds the first complete view of change. For the month, the portal shows about 420 completed changes by tickets, 610 production deployments by pipeline, and a gap that turns out to be changes made without a ticket. Of the 420 ticketed changes, 18 percent are standard, 76 percent are normal, and 6 percent are emergency (illustrative). The median approval lead time for normal changes is 2 working days, and the 85th percentile is 7 working days (illustrative). The oldest request in the queue has waited 12 working days.

When the teams look at the long wait, they find two causes. Many requests sit until the next board meeting even when they are routine, and others bounce back to the requester several times for missing information. The team separates the two clocks and discovers that roughly half the 85th-percentile wait is time waiting for the requester. They fix the request template first. Then they pick the three most common normal changes: dependency updates with passing tests, configuration toggles in a feature flag tool, and scaling the application servers. They write procedures, agree the risk with the change authority, and convert them to standard changes with approval recorded in the pipeline.

Two months later, the standard share rises to 41 percent (illustrative), the 85th percentile of approval lead time for normal changes falls to 4 working days (illustrative), and the change failure rate by type stays flat, as reported in the companion measures (see topic 4.4, Change failure and rework). The board moves from reviewing every normal change to reviewing high-risk changes and the monthly schedule.

A gaming risk shows up in the quarterly sample. One team has classified a database schema migration as a standard change because the earlier procedure for "configuration changes" was worded loosely. The sample reviewer notices that the migration had no rollback plan. The team tightens the standard change definitions, adds a rule that schema changes are always normal, and the reclassification log becomes a standing agenda item. The decision recorded in the metric register is to keep standard change share as a context measure and not a target.

## Agile, AI, automation, and analytics

### Agile

Change enablement serves continuous delivery when low-risk changes flow without waiting for a meeting and high-risk ones get appropriate scrutiny. Review the classification rules with stakeholders regularly. The caution is that a high standard change share may mean risky changes were relabelled.

### AI

AI can assess change risk, summarise diffs, and draft change records. Pair automated approval share with change fail rate and with the share of AI risk ratings later found wrong, and keep a human accountable for high-risk approvals. The caution is that a model risk score can create false comfort, so test it against outcomes.

### Automation

Automate the evidence a pipeline can produce and the approval of well-understood standard changes, and measure the automation on failures, rollbacks, and approvals made without evidence. The caution is that automation can approve a change it should not, so audit a sample.

### Analytics

Show approval lead time as a distribution by change type and link it to failure rates. The decision informed is which changes can be pre-approved. The caution is that approvals tracked by record date may not match actual timing, so check timestamps.

## Sector lens

**Startup.** A startup usually has little formal process and plenty of pipeline automation. Changes happen quickly with no record, so completeness and the link from commit to deployment matter most. A one-page definition of the three types, plus pipeline-recorded review, is often enough.

**Small business.** A small business often has one or two people who both write and release changes, so independent review is hard. Use a simple standard change list for routine work, require a second pair of eyes for anything that touches customer data or money, and keep a plain log of changes. The measures worth tracking are volume by type and record completeness, because they are cheap and they help during an incident.

**Enterprise.** Enterprises have many teams, shared platforms, and legacy systems with different risk. They tend to have a CAB, and the metrics help decide which of its tasks should stay. The main work is consistent classification, a shared standard change catalogue, and a pipeline that records audit evidence. Roll up by service and risk class, not by team ranking.

**Government and public sector.** Public bodies often face legal requirements for approval, separation of duties, and records retention, and may have procurement-driven release windows. The metrics should state which controls are mandatory and which are local habit, since the former cannot be removed and the latter can. Recorded peer review and pipeline evidence can often satisfy the intent, but confirm this with the relevant auditor before relying on it (see topic 8.3, Compliance and audit metrics).

## Business case: motivations, ROI, and TCO

The motivation is usually the time changes spend waiting. When finished work queues for a decision, value is delayed, batches grow, and each batch carries more risk. A second motivation is assurance: leaders and auditors want to know that changes are controlled, and recorded evidence in the pipeline is cheaper to produce and more trustworthy than a reconstruction. A third is incident response, because a complete and accurate change record shortens the search for a cause.

Collection is cheap if the change tool and pipeline already store timestamps and types, and moderate if you must integrate them. Acting on the data costs more: writing standard change procedures, building pipeline checks, and training approvers and requesters. Expect most of the work in the first quarter and a lower, steady cost for sampling and review afterward.

The return shows up as less waiting time per change, fewer meetings, less effort preparing audit evidence, and faster diagnosis during incidents. Estimate it with your own data: multiply the reduction in approval waiting hours by the number of changes affected and by a cost per delayed hour that your finance partner accepts. Do not import figures from other organisations. The DORA research supports the direction of the argument, but its pages do not give a cost or a return, and any dollar figure must come from your own measurements.

## Anti-patterns and pitfalls

- **Treating standard change share as a target.** Teams reclassify risky work to hit the number. Use it as context, review classification by sample, and watch failure rates by type.
- **Measuring approval speed alone.** A fast rubber stamp looks excellent and delivers nothing. Pair lead time with sampled review of approval substance and with the failure picture.
- **Adding approvals after each incident.** Each new gate slows the system and often encourages bigger batches. Look first at why the failure happened, and fix the cause in testing, review, or the pipeline.
- **Ranking approvers or requesters.** Per-person counts of approvals or rejections teach people to approve everything or nothing. Report by service and by change type.
- **Averaging across change types.** A single mean mixes routine and risky work and hides both. Always split by type and show the 85th percentile.
- **Ignoring changes made outside the process.** Bypass hides real volume and risk. Reconcile pipeline deployments to change records and treat gaps as a system defect.
- **Keeping the board by habit.** A board that approves all it sees adds delay without adding assurance. Review each year what it decides that nobody else could, and refocus it.
- **Collecting the data and never deciding.** Attach each metric to a named owner and a review forum (see topic 1.4, Metrics governance and ownership).

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Classification and volume | Types are informal; no one knows the total | Some teams count by type with different rules | One written classification, one system of record | Type mix trended and sampled for accuracy | Standard change catalogue shared with suppliers and revised as risk evidence changes |
| Approval clock and queue | Approval waits are felt but not timed | Some teams timestamp requests | One definition of the clock, median and percentile shown | Queue age reviewed weekly; delays drive funded fixes | Approval flow tuned across teams and suppliers against failure and customer outcomes |
| Automation of approval | Approval is a meeting or an email | A few pipelines record peer review | Recorded review and checks are the default for low-risk changes | Automated share tracked with a bypass count and sampled quality checks | Policy encoded in shared platform controls that adapt as the risk picture changes |
| Records and use | Records are thin or written afterward | Records exist but differ in quality | Required fields agreed and linked to services | Completeness audited and used in incident reviews | Change data feeds incident, problem, and audit practices across the organisation |

## Checklist

- [ ] The three change types and their criteria are written down and agreed.
- [ ] A single view of completed changes by type exists, reconciled with pipeline deployments.
- [ ] The approval clock has a written start, stop, and list of exclusions.
- [ ] Approval lead time is reported as a median and an 85th percentile.
- [ ] The approval queue age is visible and reviewed weekly.
- [ ] At least one frequent normal change has been converted to a standard change with a documented procedure.
- [ ] Peer review and test results are linked to change records automatically.
- [ ] A quarterly sample checks classification and approval quality.
- [ ] Bypass of the pipeline is measured and reviewed.
- [ ] Every metric has a named owner, a gaming vector, and a guardrail in the metric register.
- [ ] No report ranks individual approvers or requesters.

## AI prompts

**Draft a classification guide for the three change types.**

```text
I work in [type of organisation] and we run [list of services]. Our change tool
is [tool], our pipeline is [pipeline tool], and our regulatory context is
[regulations or none]. Here are our ten most frequent changes: [list]. Draft a
plain-language guide for deciding whether each is a standard, normal, or
emergency change, with the criteria you used and one example of a borderline
case. Do not invent benchmark values or claim any practice meets an
audit requirement. List your assumptions and the questions I should answer
before adopting the guide.
```

**Find where approval time is spent.**

```text
Here is an extract of change records with submission, information-request, and
decision timestamps: [pasted data or description]. Our approval process is
[description]. Calculate the median and 85th percentile of approval lead time by
change type, separating time waiting for the requester from time waiting for a
decision, and suggest three questions to ask about the longest cases. Do not
invent figures that are not in the data, and do not rank individual people. List
your assumptions and any data quality problems you notice.
```

**Check the metrics for gaming risks.**

```text
We report these change enablement metrics: [list of metrics with definitions].
The audience is [team, leadership, or governance body] and the metrics are used
for [purpose]. For each metric, list plausible ways it could be inflated,
hidden, or distorted without real improvement, and suggest a paired guardrail
measure or practice. Do not propose targets or benchmark values. List your
assumptions and which gaming risks you think matter most for [service name].
```

**Plan a move from board approval to pipeline approval.**

```text
Our current approval path for [change type] is [description], with [number]
approvers and a typical wait described as [description]. Our pipeline provides
[checks, tests, review tooling]. Propose a staged plan to move low-risk changes
to recorded, pipeline-based approval, including the evidence we would need to
keep, the safety signals to watch, and a stopping rule. Do not claim the plan
satisfies any regulation or standard. List your assumptions and the people I
should consult, such as [auditor, security lead, change authority].
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related change, release, and incident topics and the guardrail that should sit beside each change enablement metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised version of this topic keeps its clocks, gaming vectors, and cross-references consistent.

## Key takeaways

- Change enablement metrics measure the flow and control of change: volume by type, the wait for approval, and how much approval the pipeline records automatically.
- Split everything by change type, report waiting times as a median and an 85th percentile, and watch the live queue as well as the history.
- Moving routine work to standard changes and recording review in the pipeline is the most direct way to shorten the wait, and it must be read beside failure measures.
- Standard change share and approval speed are easy to game, so sample classification and approval quality and keep the numbers off individual scorecards.
- Use the metrics to decide what a change board is for, and fund the automation that makes lighter control safe.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
