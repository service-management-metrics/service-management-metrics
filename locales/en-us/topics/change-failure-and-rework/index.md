# Change failure and rework

**Define "a failed change" once, in writing, link every failure back to the change that caused it, and read failure and rework together with speed so that a lower number means safer change and never just fewer reports.**

## Overview and motivation

Every change to a live service carries some chance of making things worse. The practical questions are how often that happens, how much unplanned work it creates, and how quickly the team recovers. This topic covers the measures that answer them: the share of changes that fail, the share that need an emergency path, the rates of rollback and hotfix, and the rework that follows a bad change. It also covers the least glamorous part of the subject, which is agreeing what counts as a failure at all.

Some terms first. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, the practice called change enablement covers the addition, modification, or removal of anything that could affect a service. A **change** is therefore wider than a code deployment: it includes a configuration edit, a certificate renewal, a firewall rule, or a database migration. A **standard change** is pre-authorized and low risk, a **normal change** goes through assessment, and an **emergency change** is made urgently, usually to restore a service or close a serious vulnerability. A **deployment** is the act of putting a version of software into an environment, while a **release** makes a capability available to users. Teams that use a [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) can deploy code without releasing it (see topic 4.5, Release and deployment metrics).

A **change failure** is a change that leads to degraded service or needs remediation. Remediation takes several shapes. A [rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) returns the system to its earlier state. A [hotfix](https://en.wikipedia.org/wiki/Hotfix) is an urgent patch applied outside the normal release rhythm. A roll-forward fix ships a new change on top of the broken one. [Rework](https://en.wikipedia.org/wiki/Rework) is the unplanned effort spent redoing or repairing something that was supposed to be finished. In a [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) setting, where small changes flow to production often, these measures are the main evidence about whether speed is costing stability.

The two traditions look at the same event differently. The ITIL view is organized around the change record: was the change authorized, did it succeed, and was the outcome recorded? A change that succeeds on paper may still cause an incident an hour later. The agile view is organized around the work item and the deployment: did the team's definition of done hold, and did the change cause unplanned work soon after? Neither view is complete alone. The research behind the DORA program treats change fail rate and deployment rework rate as the two "instability" measures beside the throughput measures (see topic 2.8, DORA metrics, which defines them at the level of the program). This topic goes deeper on the mechanics: how to define failure, how to attach incidents to changes, how emergency work is counted, and how the numbers are gamed.

A warning applies from the start. These measures describe a team, a service, or a pipeline. They never describe a person. A change fail rate attached to an individual engineer teaches people to avoid risky and valuable work, to split changes until the counts look good, and to stop reporting problems (see topic 1.2, Goodhart's law and the psychology of metrics). [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) bites hard here, because "fewer failures" is easy to achieve by recording fewer failures.

Incident timing belongs to topic 3.3, Incident response and resolution time, the worst incidents to topic 3.4, Major incident metrics, approval flow and standard change share to topic 4.3, Change enablement metrics, root causes to topic 4.1, Problem management metrics, and the written review to topic 4.2, Postmortem and learning metrics.

## Key principles

- **Failure needs one written definition.** Teams that decide case by case produce numbers that cannot be trended or compared, and the argument about the definition replaces the argument about the work.
- **A failure must be traceable to its change.** Without a recorded link between an incident, a rollback, or a hotfix and the change that caused it, the fail rate is a guess.
- **Count every remediation path.** Rollback, hotfix, roll-forward, and manual workaround are four routes to the same event. A metric that counts one of them rewards teams for choosing another.
- **Read failure beside speed and recovery.** A change fail rate in isolation can be improved by changing less often, which is rarely the goal. Pair it with lead time, deployment frequency, and recovery time.
- **Small samples need counts, not just percentages.** A team with eight changes in a month and one failure has a 12.5 percent fail rate that says almost nothing, so show the counts and use a longer window (see topic 1.6, Statistical literacy for service metrics).
- **Emergency is a signal, not a sin.** A steady, explained share of emergency changes is normal. A rising share usually points to upstream quality, planning, or detection problems.

## Metric definitions

Failure and rework measures depend on joining the change record, the deployment log, and the incident tool. Each definition below states what is counted, what is excluded, and where the clock starts and stops. Teams should copy the definitions into their metric register and adjust them with a stated reason.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change fail rate | Share of changes to production that cause degraded service or need remediation | changes that required a rollback, hotfix, roll-forward fix, or linked incident within the failure window / all changes to production completed in the period; the window starts at completion of the change and stops after a fixed number of days (for example 7), written in the metric register; changes still inside the window are reported separately and excluded from the rate until the window closes | percent | Change records or deployment log joined to the incident tool and the hotfix list | Change enablement; incident management | Definition of done; escaped defects | Monthly, on a rolling window of 90 days |
| Emergency change share | Share of changes made through the emergency path | changes recorded as emergency / all changes completed in the period; emergency means the normal assessment was bypassed or shortened on urgency, and pre-authorized standard changes are excluded from both counts | percent | Change record type field | Change enablement | Unplanned work and expedite class of service | Monthly |
| Rollback rate | Share of changes that were reversed to a previous version | changes reversed after reaching production / all changes to production in the period; a rollback made before the change reached any users (for example a canary stopped at its first step) is counted separately | percent | Deployment log and release tool | Release management; deployment management | Pipeline and release practices | Monthly |
| Hotfix rate | Share of changes that are urgent patches applied outside the normal release flow | changes tagged or branched as hotfix / all changes to production in the period; the denominator includes the hotfixes themselves | percent | Version control branches or tags and the deployment log | Change enablement; incident management | Unplanned work; expedite | Monthly |
| Deployment rework rate | Share of deployments that were unplanned fixes for a problem in an earlier deployment | deployments to production that fix a defect or failure in a recent earlier deployment, within the same failure window / all production deployments in the period; planned follow-up work from the roadmap is excluded | percent | Deployment log with a "fixes" link or tag, and the work tracker | Change enablement; continual improvement | Rework; escaped defects; failure demand | Monthly |
| Change-to-incident link rate | Share of resolved incidents that record whether a change caused them, and which one | incidents with a completed "caused by change" field (yes or no, plus the change identifier when yes) / incidents resolved in the period; clock stops when the incident is closed | percent | Incident tool and change records | Incident management; change enablement | Post-incident review; definition of done | Monthly |
| Failure-definition agreement | Agreement between two reviewers about whether a sample of changes failed | sampled changes where two independent reviewers reach the same failure verdict using the written definition / sampled changes; a sample of at least 20 changes drawn at random each quarter | percent | Sample review sheet kept with the metric register | Continual improvement; measurement and reporting | Retrospective | Quarterly |

Two notes on the table. The fail rate and the rework rate overlap but differ: a failure reverted with no new deployment counts in the fail rate and not in the rework rate. And the unit is the change or deployment, not the incident, because one change can cause three incidents and one incident can come from three changes.

## Recommendations

### Write the definition of failure before collecting any data

**Agree what "failed" means and put it in the metric register.** A workable definition is that a change failed if, within a stated window after completion, it was rolled back, needed a hotfix or roll-forward fix, or was linked to an incident of a stated severity or higher. State the window (7 days is common, and the right value depends on how quickly your services show problems), the incident severity threshold, and who decides in a disputed case. Write down at least five worked examples, including awkward ones such as a change that degraded performance without any outage. Revisit the definition annually and log changes with their reasons, so that a trend line can be restated if the rule moves.

### Link failures to changes in the incident record

**Add a required field to the incident record: caused by a change, yes or no, and the change identifier when yes.** The field should be completed during resolution and checked in the post-incident review (see topic 4.2, Postmortem and learning metrics). Track the link rate as its own metric. If only half of incidents carry the field, the fail rate understates the truth by an unknown amount, and you should say so beside the number. Automate the first guess where you can, for example by listing changes completed on the affected service in the hours before the incident began, and let a human confirm it.

### Count all remediation paths, not just one

**Define one failure from several signals.** Pull rollbacks from the deployment tool, hotfixes from version control or the release log, roll-forward fixes from the "fixes" link, and incidents from the incident tool, then deduplicate by change. A team that counts only rollbacks will see failures vanish the day it switches to fixing forward. Keep each route as a separate breakdown too, because the mix tells a story: many hotfixes and few rollbacks suggest that rollback is hard, which is worth fixing in its own right.

### Treat the emergency change share as a question, not a score

**Review emergency changes as a group, not as a target.** Each quarter, read all of them and sort the reasons: restoring a service, closing a vulnerability, a late business request, a missed planning step, or an approval path that was too slow for ordinary work. The last two are system problems that should be fixed by improving the standard path, so that people do not need to bypass it (see topic 4.3, Change enablement metrics). A share of zero is suspicious, because genuine emergencies occur. A share that rises steadily deserves a problem record (see topic 4.1, Problem management metrics).

### Measure rework as failure demand

**Track rework as the work created by earlier failure.** The idea of failure demand comes from service design: demand that exists because something was not done right the first time. In delivery terms, count the deployments and work items whose only purpose is to correct a recent change. This links directly to the planned and unplanned split (see topic 2.9, Operational work and unplanned work). Use the share of capacity spent on rework as the conversation starter with the product owner, because it turns an abstract rate into a trade-off about what to work on next.

### Report rates with counts, distributions, and a window

**Show counts beside percentages, and use a rolling window.** A monthly fail rate for a team that deploys ten times is noisy. Use a rolling 90-day window, show the number of changes and failures behind the rate, and give a rough indication of uncertainty (see topic 1.6, Statistical literacy for service metrics). For recovery, show the median and the 85th percentile of the time from failure to restoration rather than a mean. When a service has very few changes, tell the story with a list of the actual failures instead of a rate.

### Pair failure with speed so improvement cannot hide in either

**Always display change fail rate beside lead time and deployment frequency.** If the fail rate drops while deployment frequency also drops sharply and lead time grows, the team may be batching changes, which raises the risk of each one. If speed rises and the fail rate holds steady, the system is getting better at change. The pairing is the main defense against gaming and against the comfortable belief that fewer deployments mean safer ones (see topic 2.8, DORA metrics).

### Use the numbers to improve the change itself

**Turn failure data into engineering experiments.** Look at the common features of failed changes: size, time of day, type, number of people involved, whether they touched shared components, and whether test coverage was thin. Then try one small, reversible experiment such as smaller batches, automated [regression testing](https://en.wikipedia.org/wiki/Regression_testing) for a risky area, a [canary release](https://en.wikipedia.org/wiki/Canary_release) for the next risky change, or a feature toggle that separates deployment from release. Re-measure after a full window. The aim is better change, and an improved metric is merely evidence.

### Review the metrics together in a blameless forum

**Hold a monthly review of failed changes with the people who made them.** The agenda has three items: the counts and trend, two or three failed changes chosen for study, and one improvement action with an owner. Use blameless review practice, so that people describe what they knew at the time. Publish the review notes with the metrics. If people hesitate to report failures because of how the numbers are used, fix that before changing anything else (see topic 11.3, Rolling out metrics without breeding fear).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Change fail rate | Narrowing the failure window; not linking incidents to changes; classifying a bad change as a "service request" or "maintenance"; fixing forward and calling it a new change; bundling many edits into one change so one failure covers them | Change-to-incident link rate; quarterly sample audit against the incident list; failure-definition agreement; lead time and deployment frequency beside it |
| Emergency change share | Routing urgent work through the standard path with a false risk rating; routing ordinary work as emergency to avoid approval; splitting an emergency into several normal changes | Quarterly read of all emergency changes; reasons sorted and reviewed; standard change share and approval lead time (see topic 4.3, Change enablement metrics) |
| Rollback rate | Fixing forward to avoid recording a rollback; keeping a broken version live; holding changes back from production so there is nothing to reverse | Hotfix rate and rework rate beside it; recovery time distribution; sample of incidents against the deployment log |
| Hotfix rate | Not tagging hotfixes; pushing them through the normal branch; calling a hotfix "a small improvement" | Deployment rework rate; branch and tag audit; unplanned work share (see topic 2.9, Operational work and unplanned work) |
| Deployment rework rate | Not linking fixes to the originating deployment; labeling a fix as "planned"; bundling the fix with new features | Required "fixes" link on corrective deployments; sample review of deployments labeled planned; change fail rate beside it |
| Change-to-incident link rate | Completing the field with "no" without checking; letting the field default to "no"; closing incidents in bulk to raise the percentage | Sample check of "no" answers in the post-incident review; no default value; reviewer comments on a sample |
| Failure-definition agreement | Choosing easy examples for the sample; reviewers who are the people being measured; relaxing the definition so everyone agrees | Random sample drawn by someone outside the team; include borderline cases on purpose; publish disagreements and fix the definition |

A healthy reading looks like this: the fail rate sits in a range the team understands and explains, the link rate is high enough that the fail rate can be trusted, emergency changes are few and explained, and rollbacks and hotfixes are short and rehearsed. Failures are reported quickly and discussed without blame. An unnaturally low fail rate with a low link rate, falling deployment frequency, and growing batch sizes is a warning, not a success. Treat any sudden improvement as a prompt to check the instrument first (see topic 1.5, Data sources and instrumentation).

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Strict, automated definition of failure | Consistent, cheap to repeat, easy to trend | Misses subtle degradation; may count benign rollbacks as failures |
| Judgment-based review of each change | Captures context and severity | Slow, subjective, open to pressure and drift |
| Long failure window (weeks) | Catches delayed failures | Blurs cause and effect; recent changes cannot be reported yet |
| Counting all remediation paths | Hard to game by switching route | Needs several data sources joined with care |

Use an automated definition as the base, add a sampled human review, and improve the join between changes and incidents before building anything else.

## Questions to discuss with your team

**1. What exactly counts as a failed change here, and could two of us disagree about the same change?**
Take five recent changes and ask each person to vote on whether they failed. Compare the votes and the reasons. The disagreements show where the written definition is thin. Agree on a rule for the awkward cases, such as a performance drop without an outage, and write it down with an example.

**2. How do we know which incidents were caused by a change?**
Ask how the link is recorded today, and who fills it in. Review ten recent incidents and see how many have a change attached, and how many should. Discuss whether the field is optional, whether it defaults to "no," and who checks it. The facilitator should aim for a concrete improvement to the record, such as a required field with no default.

**3. Which remediation routes do we use, and are all of them counted?**
List rollback, hotfix, roll-forward fix, manual workaround, and feature toggle off. For each, ask where the event is recorded and whether it feeds the fail rate. Notice the routes that leave no trace. The discussion often reveals that the team's preferred route is the one the metric cannot see.

**4. When was our last emergency change, and could it have been avoided?**
Walk through the last three or four. Ask what made each one urgent, what was known earlier, and what a better standard path would have looked like. Separate real emergencies from late discoveries and slow approvals. Agree on one fix to the ordinary path that would remove a recurring reason for emergency.

**5. How much of our week goes to fixing recent changes?**
Estimate the share of capacity spent on rework over the last four weeks, using the tracker rather than memory. Compare the estimate with the tracker. Talk about what the number costs in planned work and how the product owner would use it. Pick one failure pattern and one experiment to reduce it.

**6. If our fail rate fell by half next quarter, would we believe it?**
Imagine the headline and ask what else would have to be true: link rate stable, deployment frequency steady, recovery quick, and no new categories of "maintenance." Discuss which of these checks the team already makes and which are missing. Agree how a sudden improvement will be investigated before it is celebrated.

## Four perspectives

### Product and delivery teams

Delivery teams own the changes, so they own the definition of failure and the fixes. Start from the work: look at failed changes in the review, find the common features, and try smaller batches, better tests, or toggles. Track rework as part of the board, so unplanned fixes are visible next to planned work. Keep the numbers for the team's own learning, and resist sharing individual-level data. If a metric is shown to leaders, the team should be able to explain every change in it.

### Service and operations teams

Operations teams see the consequences of change in the incident queue and are best placed to maintain the link between incidents and changes. They can add the required field, check it in the resolution step, and feed the results back to the delivery team without blame. Operations also owns the emergency path and should review its use. Share information about recovery routes and rehearse rollbacks together with delivery teams, since the best way to cut the cost of failure is a shared habit of making change reversible (see topic 3.3, Incident response and resolution time).

### Leadership and governance

Leaders should ask for trends by service, the two kinds of instability measure together with speed, and the improvement experiments behind them. Avoid fixed targets such as "fail rate below 5 percent," which invite redefinition, and avoid using the figures in individual reviews. Governance bodies can use the data as evidence for whether a lighter approval path is safe, by checking that failure and recovery held steady as controls were relaxed. A rising trend in emergency changes is a signal to look at planning and approval design, not to blame the on-call engineers.

### Customers and users

Customers do not care about the fail rate. They care about whether the service breaks after an update and how quickly it comes back. Failure data supports honest communication: advance notice of risky changes, clear status messages when a change causes trouble, and a visible commitment to learn. Where users depend on a service for critical tasks, agree maintenance windows and rollback expectations with them in advance (see topic 3.4, Major incident metrics).

## In practice: a service management example

A regional healthcare provider's IT department runs a patient scheduling service. A product team of seven releases changes several times a week, and an operations team of five handles incidents and the change process. All numbers in this example are illustrative.

Over a quarter, the monthly report shows a change fail rate of 4 percent, down from 11 percent the quarter before. The chief information officer is pleased. The platform lead is not convinced, because the on-call team says their nights have not improved. She asks the team to run the sample audit from the metric register.

The audit takes 30 changes at random and two reviewers apply the written definition. They agree on 24 of the 30 verdicts, so the failure-definition agreement is 80 percent (illustrative). They then compare the sample with the incident list. Of 22 incidents resolved in the quarter, only 9 carry the "caused by change" field, a link rate of 41 percent. Reading the other 13 by hand, the reviewers find 5 that began within a day of a change. The corrected count raises the fail rate to about 9 percent, and the audit finds why the number looked good: a new habit of deploying fixes under the label "maintenance," which the report excluded from the denominator and the numerator alike.

The gaming risk is the label, and nobody planned it. The team had been told that failures were a concern, and "maintenance" avoided a conversation. The team makes three decisions. The "caused by change" field becomes required with no default, and the post-incident review checks it. The "maintenance" label is retired, and corrective deployments must carry a link to the change they fix, which feeds the rework rate. The definition of failure is rewritten with six worked examples, including a slow-query regression that never caused an outage.

The next quarter shows a restated fail rate of 8 percent and a link rate of 90 percent (illustrative). The leadership report now shows counts, the link rate, and the rework rate beside lead time, and the chief information officer stops quoting a single percentage.

## Agile, AI, automation, and analytics

### Agile

Frequent small changes make failures cheaper and easier to trace, and the team reviews them with stakeholders regularly. The caution is that if failures are penalized, people stop declaring them.

### AI

AI-assisted changes may raise volume and rework while looking fast. Report failed changes and rework for AI-assisted work with the same definition as other work, and mark them in the data. The caution is that comparing AI-assisted and other work needs care because the changes may differ in kind.

### Automation

Link changes, deployments, and incidents automatically by identifiers, and measure the link rate. Automated rollback should be measured on success and on side effects. The caution is that broken links make the failure rate look better than it is.

### Analytics

State the failure definition once and sample links by hand. The decision informed is where change practice needs strengthening. The caution is that rates over small numbers of changes swing widely, so show counts.

## Sector lens

**Startup.** Changes are small and frequent, and the team often knows every failure by heart. Keep the definition to one paragraph, tag rollbacks and hotfixes in the deployment tool, and review failures at the weekly retrospective. A fail rate on 20 changes is noisy, so use a list of failures as the main evidence. The risk is informality: with no written definition, the rate shifts with whoever is counting.

**Small business.** The same people deploy, operate, and support, so rework competes directly with planned work. Record failures in whatever tool you already use, add a required field to the incident record, and review emergency changes every quarter. Avoid heavy approval just to improve the numbers. A shared rollback checklist is worth more than a change board.

**Enterprise.** Many teams, suppliers, and tools mean many definitions. Standardize the failure definition and the link field across teams, publish it in the catalog of metrics, and calculate rates per service before rolling up. Use sampled audits to find divergence, and treat each supplier's change records as another source with its own quality (see topic 1.5, Data sources and instrumentation). Take care that roll-ups never turn into league tables of teams.

**Government and public sector.** Change records serve audit and accountability, and rollbacks may be constrained by statute, procurement, or shared platforms. Keep the formal record and add the failure link as part of it. Explain the numbers carefully to oversight bodies, with counts and context, because a single failure in a critical service can draw attention out of proportion. Use the data to justify lighter paths for low-risk change, with evidence that failure and recovery stayed steady.

## Business case: motivations, ROI, and TCO

The motivation is the cost of failed change: incident work, rework, delayed roadmap items, and the loss of user trust. Many organizations cannot say how much of their effort goes to repairing recent changes, and a rework measure provides the first honest answer. There is also an indirect benefit. Teams that can show that change is safe can defend lighter approval, which shortens lead time. The DORA research reports an association between heavyweight external approval and weaker delivery performance (see topic 4.3, Change enablement metrics), and failure data is how a team tests that claim against its own history.

The cost to collect is modest if the groundwork exists: a required field in the incident record, tagged corrective deployments, a join of three data sources, and a monthly review. The larger cost is attention, because someone must own the definition, run the audits, and act on findings. Avoid buying a tool before the definition and the link work by hand.

The return shows up as fewer repeated failures, shorter recovery, less unplanned work, and better conversations with governance. Do not promise a percentage. Instead, estimate your own baseline: count the hours spent on rework and incident response linked to change over a quarter, price them using your normal internal rate, and compare after the improvements. State the assumptions, and report the result as a range rather than a single figure. Compare it with the cost of the program and the cost of a single serious failure in a critical service.

## Anti-patterns and pitfalls

- **Setting a target for the fail rate.** It invites redefinition and hidden failures. Set a target for learning instead, such as completing every review and closing every corrective action, and watch the rate for trends.
- **Ranking teams or people by failure.** It destroys reporting and punishes the teams that take on risky, valuable work. Compare a team with its own past and discuss context.
- **Counting only incidents as failures.** Failures that are caught early and rolled back disappear. Include every remediation route, and use incidents as one signal among several.
- **Treating emergency changes as bad.** The pressure leads to disguised emergencies. Review them for reasons and fix the ordinary path.
- **Letting the incident link default to "no."** The default produces a flattering and wrong number. Make the field required and check a sample.
- **Reporting a rate without counts.** Small samples swing wildly. Show counts and a rolling window.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definition of failure | Decided case by case by whoever is asked | Some teams write a definition; teams differ | One written definition with worked examples and a stated window | Definition tested by sampled audits and agreement measured | Definition revised with suppliers and customers when it stops informing decisions |
| Linking changes and incidents | Link remembered by people if at all | Optional field used by some teams | Required field with no default, checked in the post-incident review | Link rate trended and reviewed, with gaps acted on | Links shared across teams and suppliers through agreed interfaces |
| Remediation and emergency handling | Rollbacks and hotfixes handled ad hoc and unrecorded | Rollbacks and hotfixes tagged by some teams | All remediation routes recorded; emergency test written down | Emergency changes reviewed each quarter; rollbacks rehearsed | Recovery paths designed into services and tested jointly across teams |
| Use in improvement | Numbers quoted in reports with no follow-up | Failures discussed after major incidents | Monthly blameless review of failed changes with actions | Failure and rework paired with speed; experiments planned and funded | Improvement routine and shared across teams, with learning published |

## Checklist

- [ ] A written definition of change failure exists, with a stated window and at least five worked examples.
- [ ] The unit of counting (change, deployment, or release) is named in the metric register.
- [ ] The incident record has a required "caused by a change" field with no default value.
- [ ] Rollbacks, hotfixes, and roll-forward fixes are tagged in the deployment or version control tools.
- [ ] Corrective deployments carry a link to the change they fix.
- [ ] Emergency change has a short written test, and every emergency change is reviewed within a set number of days.
- [ ] Rates are shown with counts and a rolling window, never as a bare percentage.
- [ ] Change fail rate is always displayed beside lead time, deployment frequency, and recovery time.
- [ ] A quarterly sample audit checks the failure verdicts and the incident link.
- [ ] A blameless monthly review of failed changes runs, with an owner for each action.
- [ ] No metric in this topic is used to rank or review individuals.

## AI prompts

**Draft a written definition of change failure.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Design the change-to-incident link.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Analyze a list of failed changes for patterns.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Check a failure dashboard for gaming risks.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic defines a related metric, such as lead time or incident duration, and the guardrail to place beside the fail rate.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new or edited failure metric states its clock, its source, and its gaming vector.

## Key takeaways

- A change fail rate is only as good as its definition, so write one with a window, worked examples, and a named unit.
- Link every failure to its change by a required field in the incident record, and measure the link rate.
- Count rollbacks, hotfixes, roll-forward fixes, and linked incidents together, so teams cannot dodge the metric by switching route.
- Read emergency change share and rework as signals about planning and the ordinary path, not as scores.
- Always show failure beside speed and recovery, with counts and a rolling window, and never rank people.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
