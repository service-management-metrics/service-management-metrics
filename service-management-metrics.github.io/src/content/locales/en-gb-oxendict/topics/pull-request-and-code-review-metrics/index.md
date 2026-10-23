# Pull request and code review metrics

**Review is where finished work most often waits, so measure how long a change sits before anyone looks at it, how big it is, and how often it comes back, and pair every speed number with a quality signal so that faster never means careless.**

## Overview and motivation

A [pull request](https://en.wikipedia.org/wiki/Pull_request) is a proposal to merge a set of changes from one branch of a [version control](https://en.wikipedia.org/wiki/Version_control) repository into another, together with the conversation about whether it should be merged. In many teams it is the formal gate between "the author thinks it works" and "the team agrees it can ship." The conversation is a form of [code review](https://en.wikipedia.org/wiki/Code_review): a person other than the author reads the change, asks questions, and approves it or asks for revisions. Some platforms call the same thing a merge request; this topic uses "pull request" for both.

Review is worth measuring for a plain reason. In the flow view of delivery, a work item spends most of its life waiting, and review is one of the waits that sits entirely inside the team's control. A shared platform bottleneck or an external dependency needs other people to change. A pull request that waits two days for a first look needs only the team's own habits to change. The flow measures in this book (see topic 2.1, Flow measures, and topic 2.2, Lead time, cycle time, and flow efficiency) give the general vocabulary. This topic zooms into one stage of the cycle and gives it its own instruments.

The agile and ITIL views meet here in a useful way. From an agile perspective, review is a feedback loop and a teaching mechanism. It spreads knowledge of the codebase, catches defects early, and enforces the team's working agreements and Definition of Done. From an ITIL perspective, the same activity supports several practices. In ITIL 4, the software development and management practice covers how software is built and checked, change enablement covers how changes are assessed and authorized, and deployment management covers how changes reach the live environment. A peer-reviewed pull request is, for many organizations, the evidence that a standard change was assessed before release. Treating review as a measured, improvable activity serves both views: the agile team wants faster feedback, and the ITIL practice wants reliable assurance that changes were checked.

The risk to keep in view throughout is that review speed and review quality are easy to separate. A team can halve its time to first review by approving everything on sight, and the dashboard will show a triumph while the codebase gets worse. [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies with unusual force to this metric family (see topic 1.2, Goodhart's law and the psychology of metrics), because the numbers are cheap to collect, visible to everyone, and trivially easy to move without changing the thing they were meant to represent. Every recommendation below is written with that in mind.

The **author** opened the pull request and a **reviewer** assesses it. A **review round** is one loop of "author pushes, reviewer responds." **Rework** is change made after a review comment, or after the merge, to fix something the first version got wrong. **Continuous integration (CI)** is the practice of merging work into a shared line often and checking each merge automatically; see [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).

All metrics in this topic describe teams and repositories. They never rank reviewers or authors. Individual-level review counts are easy to extract and tempting to use, and doing so turns a collaboration practice into a contest (see topic 9.1, Team health and developer experience).

## Key principles

- **Waiting dominates reviewing.** In most teams the largest part of review time is the pull request sitting unread, not the discussion once a reviewer starts. Measure the wait before you measure the conversation.
- **Small changes are reviewed faster and better.** Size is one of the few levers that improves both speed and thoroughness at once, because a reviewer can hold a small change in their head.
- **Speed without scrutiny is not an improvement.** Every speed metric in this topic needs a quality counterpart, and the pair is read together.
- **Review is a team capacity, not a personal one.** The load should spread across the team. A metric that shows concentration points to a design problem in the team, never to a person to be praised or blamed.
- **Distributions beat averages.** Review times have a long tail of stuck pull requests, so report the median and a high percentile (see topic 1.6, Statistical literacy for service metrics).
- **Define the clock, then leave it alone.** State when the clock starts and stops, which events pause it, and which automated activity is excluded, and write that down where the data lives (see topic 1.5, Data sources and instrumentation).
- **Review metrics serve the team that owns the work.** They are an input to the team's own retrospective, not a scorecard for someone else.

## Metric definitions

The clocks below assume the version control platform records the event times for opening, review requests, comments, approvals, pushes, and merges. Drafts, pull requests opened by bots, and pull requests closed without merging are excluded unless a row says otherwise. "Working hours" means the team's declared working hours, so a pull request opened on Friday evening does not accrue a weekend of waiting.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Time to first review | Wait between a pull request becoming ready for review and the first substantive human response | Clock starts when the pull request leaves draft status or is opened ready, stops at the first review comment, change request, or approval by someone other than the author; bot and author comments and pure label changes are excluded. Report the median and 85th percentile in working hours | working hours | Version control platform event history | Software development and management; change enablement | Working agreement on review responsiveness; flow of work in progress | Weekly |
| Review cycle time | Total time from ready for review to merge | Clock starts when the pull request is ready for review, stops at merge; pull requests closed without merging are excluded and counted separately. Report the median and 85th percentile in working hours | working hours | Version control platform event history | Deployment management; change enablement | Cycle time of the review stage on the team board | Weekly |
| Pull request size | Amount of change in a pull request | Lines added plus lines deleted, excluding generated files, lock files, vendored code, and pure renames, as listed in the repository's ignore rules. Report the median and 85th percentile per merged pull request | lines changed | Version control platform diff statistics | Software development and management | Small batch size; slicing of stories | Weekly |
| Review rounds | Number of loops of author push and reviewer response before merge | Count of distinct "changes requested" or comment-then-push cycles per merged pull request; the first submission is round zero and automated check failures are excluded. Report the median and 85th percentile | count | Version control platform review and push events | Continual improvement; software development and management | Rework signal in the review stage; Definition of Done | Weekly |
| Review load concentration | How unevenly review work is spread across a team | Share of the team's completed reviews handled by the two busiest reviewers over a rolling 4 weeks; reviews of one's own pull request and bot reviews are excluded. Reported for the team, never by name | percent | Version control platform review events, aggregated to team | Continual improvement; knowledge management | Shared code ownership; collective ownership | Monthly |
| Stale pull request count | Pull requests open longer than the team's agreed limit | Pull requests still open and not in draft whose age since ready for review exceeds the team limit, counted at snapshot time; drafts are excluded | count | Version control platform open pull request list | Change enablement; continual improvement | Work item age; WIP limit | Weekly |
| Post-merge fix rate | Share of merged pull requests followed by a corrective change soon after | Merged pull requests followed within 14 days by a fix, revert, or hotfix linked to the same change / merged pull requests in the period; planned follow-up work labelled as such is excluded | percent | Version control history, linked issues, and incident or change records | Change enablement; incident management | Quality built in; Definition of Done | Monthly |

Time to first review is the largest lever and the metric most teams should start with. Review cycle time is its outcome measure and is a component of the longer lead times discussed in topic 2.2. The 14-day window and the stale limit are examples; each team picks values that fit its release rhythm and writes them down. Where the numbers feed into the broader delivery picture, the DORA family (see topic 2.8, DORA metrics) and change failure measures (see topic 4.4, Change failure and rework) take over.

## Recommendations

### Measure the wait before the work

**1. Start with time to first review.** This is usually the largest contributor to review time and the cheapest to improve. Instrument it from the platform's event history so nobody has to enter anything. Report the median and a high percentile, because a median of three hours with a 95th percentile of four days means some changes are being forgotten.

**2. Exclude bots and drafts from the clock, and say so.** Automated checks, dependency update bots, and formatting tools create comments within seconds, and counting them makes the wait look excellent. Start the clock when the author marks the change ready, not when the branch is first pushed. Publish these rules next to the chart.

**3. Use working hours, and write down the team's calendar.** A pull request opened late on Friday should not carry a weekend of wait. A team spread across time zones needs a rule for whose hours count, and often the honest answer is that the hand-off cost across zones is the thing worth seeing. State the choice and keep it stable.

### Shape the work to be reviewable

**4. Keep pull requests small, and treat size as a team habit.** Track the median and 85th percentile of size, and look at the large ones as a set rather than as individual failures. Teams usually find that large changes come from a few causes: work not sliced finely enough, mixing refactoring with new behaviour, or waiting too long to merge. Slice work so each pull request does one thing, which also matches the small batch principle behind [trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development) and frequent deployment.

**5. Do not set a hard size cap as a target.** A limit such as "no more than 400 lines" invites splitting a change into artificial pieces that are individually unreadable or that break the build when merged alone. Use size as a conversation starter in the retrospective, and give the team techniques for slicing, such as feature toggles, preparatory refactoring in its own pull request, and merging behind a flag.

**6. Make the review request explicit.** A pull request that names no reviewer waits for a volunteer, and volunteers are scarce. Agree who is asked, how the team is notified, and what the expectation for response is, in the working agreement. A shared review rota, or a daily review slot, usually reduces the wait more than any tool setting.

### Spread the load and the knowledge

**7. Watch load concentration as a team-level risk.** If two people handle most reviews, their availability limits the team's flow, and their absence stops it. Review the concentration measure monthly, and act through the team's design: rotate the default reviewer, pair newer members with experienced ones, and write down the areas of the code that only one person can review. Do not publish a per-person leaderboard.

**8. Use review to share knowledge, and protect that purpose.** The long-term value of review includes learning, shared ownership, and consistent style, as well as defect detection. [Pair programming](https://en.wikipedia.org/wiki/Pair_programming) and mob programming move some of that exchange earlier in the process; where a pair has already worked on a change, a lighter review is reasonable. Make the choice a team decision, written in the working agreement, so that "paired, so reviewed lightly" is a visible rule and not an excuse.

### Control the review itself

**9. Let automation handle what automation does well.** Formatting, linting, and basic checks belong in the pipeline, so human attention goes to design, correctness, and risk. [Static programme analysis](https://en.wikipedia.org/wiki/Static_program_analysis) and automated tests reduce the number of trivial review rounds. The remaining rounds then say more about the design conversation and less about style disagreements.

**10. Read review rounds as a signal about clarity, not as a fault count.** Many rounds can mean the requirement was unclear, the author lacked context, the reviewer asked for taste changes, or the change was large. Zero rounds on every pull request can mean excellent work or can mean nobody looked. Sample a handful of pull requests with unusually many or unusually few rounds and read them together as a team.

### Pair speed with quality, and keep the time visible

**11. Always show a quality counterpart beside review speed.** The post-merge fix rate, the incidents linked to recent changes, and the share of defects found after release are the natural partners (see topic 4.4, Change failure and rework). If review time improves while the fix rate worsens, the team has traded assurance for speed, and the fix is a conversation rather than a target. Show both on the same chart.

**12. Connect review to the flow picture and to unplanned work.** A faster review helps only if the next stage does not just queue the work (see topic 2.3, Work in process and queueing). Urgent review requests that interrupt planned work have a cost of their own (see topic 2.9, Operational work and unplanned work).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Time to first review | Posting a quick "looks good" or an emoji as the first response; assigning a bot or a friendly reviewer; marking a pull request ready only after someone has pre-agreed to look | Post-merge fix rate; sample of approvals with no comments; require that first responses be substantive in the working agreement |
| Review cycle time | Merging without waiting for review; splitting a change into tiny pieces to pass faster; closing and reopening a pull request to reset the clock | Count closed-and-reopened pull requests; review rounds; post-merge fix rate; protected branch rules that require approval |
| Pull request size | Excluding files from the count; splitting a single change into pieces that cannot be understood separately; padding size with generated code | Review the ignore rules each quarter; check that split pieces build and pass tests alone; read a sample of the smallest and largest |
| Review rounds | Approving on the first pass to keep the count low; moving discussion to chat so it leaves no trace; authors pushing many fix-ups in one commit to hide rounds | Post-merge fix rate; sample of zero-round pull requests; keep the discussion in the pull request |
| Review load concentration | Splitting reviews into many small approvals to spread the count; assigning reviews to those with spare time but no knowledge | Review the knowledge of the reviewer for risky areas; watch post-merge fix rate by area; keep the metric at team level |
| Stale pull request count | Closing stale pull requests without merging; converting them to drafts to hide them; raising the stale limit | Count of pull requests closed unmerged; count of long-running drafts; review the limit with the team each quarter |
| Post-merge fix rate | Recording fixes under a new work item with no link; labelling corrective work as planned follow-up; avoiding the metric by delaying the fix past the window | Compare with incident and change failure data; sample of follow-up items; audit of the labels used |

A healthy reading is a calm one. Time to first review is short and the tail is short too, so no pull request waits for days. Size sits in a range the team finds easy to read, with a few large changes that the team can explain. Review rounds are low but not zero, load concentration is moderate, the stale count is small, and the post-merge fix rate is stable. When one number improves sharply, someone should check that its paired guardrail did not move the wrong way.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Fast review with strict response expectations | Short feedback loops; less context loss for the author; lower work in process | Pressure to approve quickly; interrupts focused work |
| Slow, thorough review | Careful reading of design and risk; stronger knowledge transfer | Longer cycle time; larger batches build up; authors move on and lose context |
| Small pull requests | Easier to read and to revert; smoother flow | More overhead per change; can fragment a feature into confusing steps |
| Large pull requests | Fewer hand-offs; whole feature visible at once | Reviews become shallow; harder to revert; long waits |
| Required approval from a named owner | Clear accountability for risky areas; supports change authorization | Creates a bottleneck and a single point of failure |
| Automated checks before human review | Frees people for design and risk; consistent | Can create false confidence; needs maintenance |

No single policy wins. The aim is to shorten the wait while preserving the scrutiny, and the usual path is smaller changes, clear review expectations, strong automation for routine checks, and a team agreement about what a good review looks like. Review metrics are most useful as questions for a retrospective and least useful as targets.

## Questions to discuss with your team

**1. Where does a pull request spend most of its life, waiting or being reviewed?**
Ask the team to guess before looking at the data, then show the split between time to first review and the remaining time to merge. Most groups are surprised by how much is waiting. The facilitator should note which guesses were wrong and ask what each wrong guess says about how the team experiences review. End with one change that attacks the largest wait.

**2. What does a good review look like in this team, and how would an outsider tell?**
List the behaviours the team values, such as asking about design, checking tests, and explaining the reason for a request. Then ask which of those leave a visible trace in the pull request. Discuss how to tell a substantive first response from a token one without policing individuals. Agree a short written description to put in the working agreement.

**3. How big is too big for us, and what do we do when the work really is large?**
Look at the size distribution and pick a few of the largest pull requests. Ask why each was large and whether it could have been sliced. Discuss techniques such as feature toggles, preparatory refactoring, and merging behind a flag. The facilitator should resist setting a numeric limit and instead agree a habit the team will try for a month.

**4. Who reviews our riskiest code, and what happens when they are away?**
Map areas of the code to the people who can review them well. Look at load concentration and at the areas with a single qualified reviewer. Discuss how to grow a second reviewer in each, through pairing or rotating assignments. Keep the conversation about the team's resilience, not about any person's workload ranking.

**5. If our review speed doubled tomorrow, what would we want to be true about quality?**
Ask the group to name the quality signals they would watch, such as post-merge fixes, incidents linked to recent changes, or the number of reverts. Check whether those signals are currently visible next to the speed chart. Discuss what would be an early sign that speed had been bought at the expense of scrutiny. Agree which counterpart to show on the dashboard.

**6. Which review numbers would we be tempted to improve in a way that does not help?**
Walk through each metric and ask how a person under pressure could make it look better without making anything better. Compare the answers with the gaming table above and add the team's own ideas. The aim is to name the risk before it happens. Agree which guardrail will be reviewed alongside each metric.

## Four perspectives

### Product and delivery teams

Delivery teams own the review process and should own its metrics. They benefit most from shortening the wait with simple agreements: a daily review slot, a clear request process, and small changes. They should use the numbers in retrospectives, keep the work in process low, and resist the temptation to optimize a single chart. Review is also where newer members learn the codebase, so protect that purpose.

### Service and operations teams

Operations teams meet review where infrastructure code, configuration, and runbook automation are changed through pull requests. For them, review is often part of how a standard change is approved and evidenced (see topic 4.3, Change enablement metrics). They should agree which changes need review by a second person, how quickly urgent fixes are reviewed, and how emergency changes are reviewed afterward, so that a rushed fix is still examined. A thin review on a risky change shows up later as an incident.

### Leadership and governance

Leaders should treat review metrics as signals about team health and flow, not as productivity scores. They should ask for the paired quality measure whenever a speed number is reported, support the time that careful review takes, and avoid comparing teams on raw review time, since repositories and risks differ. Governance bodies can use review evidence as part of change assurance, provided they accept that a documented, sampled review process is stronger than a count of approvals.

### Customers and users

Customers do not see pull requests, yet they feel the results: how soon a fix arrives and how often a release brings a new defect. Short review waits help urgent fixes reach them sooner, and thoughtful review helps keep faults away from them. Where a service has a published release or defect history, customers benefit from the team showing fewer reversions and fewer repeat fixes over time.

## In practice: a service management example

A regional hospital's IT department runs a patient-appointment web service, built by one product team of seven and operated with a small site reliability group. All numbers in this example are illustrative.

In a quarterly review, the team finds that its review cycle time has a median of 26 working hours and an 85th percentile of 71 working hours (illustrative). Splitting the cycle shows that the median time to first review is 19 working hours, so most of the delay is waiting. Pull request size has a median of 180 lines and an 85th percentile of 900 lines (illustrative), and the two busiest reviewers handle 68 percent of reviews (illustrative). The post-merge fix rate sits at 9 percent (illustrative).

The team makes three agreements. They set a daily 30-minute review slot, write the expectation of a first response within one working day into their working agreement, and rotate a "review first" duty each week. They also adopt a slicing habit for large work, using feature toggles so that partial features can merge safely. They do not set a size limit or a target for time to first review.

After two months the median time to first review falls to 6 working hours and the 85th percentile of review cycle time falls to 34 working hours (illustrative). Load concentration drops to 52 percent (illustrative), and the post-merge fix rate holds at 9 percent.

The team then catches a gaming risk. A sample of approvals shows that about a third of first responses arrive within minutes and read only "LGTM" on changes touching the appointment-reminder logic. The speed gain was partly real and partly a rubber stamp. The post-merge fix rate had not yet moved because the affected code runs on a monthly cycle. The team changes the working agreement so that a first response must include either a question, a comment about a specific part of the change, or an explicit note of what was checked, and adds the sampled share of no-comment approvals to its review chart. They also agree that changes to patient-facing reminder logic need two reviewers, one of whom is from the operations group. The decision, with the reasons, goes into the team's decision log.

## Agile, AI, automation, and analytics

### Agile

Fast, small reviews support continuous delivery and a sustainable pace. A practical habit is to agree a team norm for time to first review and to talk about stale pull requests at the regular team review. The caution is that review speed treated as a target leads to rubber-stamping, so pair it with post-merge fixes.

### AI

AI-generated changes can raise pull request volume and size, and AI review tools can speed the first look. Pair time to first review with the post-merge fix rate for AI-assisted changes, and report review load per reviewer role, not per person. The caution is that a review comment from a bot may be counted as a review, so count human review separately.

### Automation

Pull review events from the code host automatically, and run automated checks before human review so people spend time on judgement. Measure the checks themselves on false alarms and on defects that escape them. The caution is that heavy automation can make human review superficial, since people assume the tools caught everything.

### Analytics

Show distributions of size, time to first review, and review rounds by team, never by individual. The decision informed is where review capacity or change size needs attention. The caution is that these numbers describe the review system, and any use that ranks people will push them toward smaller, safer, less useful changes.

## Sector lens

**Startup.** A small team can review in minutes because everyone knows the code, and the main risk is skipping review when time is short. Keep the metrics few: time to first review and size are enough. Establish the habit of small changes early, because it is far harder to introduce once the codebase and team grow.

**Small business.** Often one or two developers, or an outside supplier, maintain the software. Review may be by a single colleague or by the supplier's own staff. Ask suppliers how they review and whether pull request data can be shared, and keep a simple record of which changes were reviewed by whom, because review is the main check against mistakes in a small team.

**Enterprise.** Many teams, repositories, and approval rules create wide variation. Standardize the definitions of the clocks and the exclusions so that platform data is comparable, but do not rank teams by raw review time, since risk and codebase differ. Watch for review requirements imposed for audit that add wait without adding scrutiny, and look for opportunities to replace manual approvals with automated checks and sampled review.

**Government and public sector.** Separation of duties, audit trails, and procurement rules often require independent approval for changes. Treat those rules as design inputs: record who approved what and when, and measure the wait they create. Where suppliers write the code, specify review evidence and data access in the contract (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is to shorten the part of delivery that is both slow and controllable, while keeping the benefits of peer review: fewer defects, shared knowledge, and an audit trail. Waiting pull requests hold finished work back from users, increase the cost of context switching for authors, and make merge conflicts more likely as branches age. Reducing the wait therefore pays back through faster delivery, less rework, and less frustration.

The cost of collecting these metrics is low when the version control platform provides event history and an API. The main costs are the time to define the clocks and exclusions, to build or configure the report, and to review the numbers regularly. The larger cost is behavioural: the time people give to reviewing promptly, which competes with other work. That time is the real investment, and it should be budgeted rather than treated as free.

The return shows up as shorter review cycle time, fewer stale pull requests, and a steady or falling post-merge fix rate. Avoid claiming a specific percentage improvement in advance, since results depend on starting point and team. A credible case compares the team's own before and after distributions, together with its quality counterpart, rather than quoting figures from other organizations. The 2018 book *Accelerate* reports research linking technical and cultural practices to delivery performance and is a reasonable source for the general argument, but the numbers for your team come from your own data.

## Anti-patterns and pitfalls

- **Ranking reviewers or authors.** Individual leaderboards of reviews completed or lines changed corrupt collaboration. Report at team level and use the numbers to adjust the team's habits.
- **Targeting time to first review without a quality counterpart.** The result is the rubber stamp. Show the post-merge fix rate and a sample of no-comment approvals beside every speed chart.
- **Setting a hard size limit.** Teams split work artificially to comply. Use size as a conversation and teach slicing techniques instead.
- **Treating zero comments as success.** An unexamined approval may reflect trust or inattention. Sample such pull requests and read them together.
- **Counting bot activity as review.** Automated comments make the wait look short. Exclude bots from the clock and from load measures.
- **Ignoring time zones and calendars.** Raw clock time makes weekend and cross-region waits look like slow review. Use working hours and name the calendar.
- **Leaving the stale list to grow.** Old pull requests accumulate merge conflicts and lose context. Review the list weekly and either merge, rework, or close each item with a reason.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definition and clocks | Review time is guessed or reported by feel | Some teams export times from the platform with their own rules | One written definition of each clock, with exclusions for bots, drafts, and calendars | Definitions reviewed on a cadence; changes logged with reasons | Definitions aligned across teams and suppliers and revised when they stop informing decisions |
| Review practice | Reviews happen when someone notices | Informal norms in some teams | Written working agreement on requests, response expectations, and what a review covers | Norms adjusted from the data; knowledge sharing and risk areas tracked | Review practice coordinated across teams and suppliers, with automation handling routine checks |
| Quality counterpart | No link between review and defects | Occasional look at post-merge fixes | Post-merge fix rate shown beside review speed | Guardrails reviewed regularly; sampled approvals read | Review evidence connected to change assurance and incident learning across services |
| Use in improvement | Numbers unused | Shown at some retrospectives | Reviewed by the owning team on a fixed cadence | Gaps lead to planned, resourced improvement work | Improvement ideas flow from teams to shared practice and back |

## Checklist

- [ ] The clocks for time to first review and review cycle time are written down, with start, stop, and exclusions.
- [ ] Bots, drafts, and pull requests closed without merging are excluded or counted separately, and the rules are visible.
- [ ] Times are reported as the median and a high percentile in working hours.
- [ ] Pull request size is measured with an agreed ignore list for generated and vendored files.
- [ ] The team has a written agreement on how reviews are requested and how soon a first response is expected.
- [ ] Review load concentration is reported at team level only.
- [ ] A post-merge fix rate or another quality counterpart is shown on the same chart as review speed.
- [ ] A sample of no-comment and very fast approvals is read each month.
- [ ] The stale pull request list is reviewed weekly.
- [ ] Review data is used in retrospectives and not in individual appraisal.
- [ ] Areas of code with a single qualified reviewer are listed and have a plan.

## AI prompts

**Draft clock definitions for review metrics.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Analyze a review data export.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Find gaming risks in our review metrics.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Prepare a retrospective on review flow.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labelled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a related flow or quality metric and the guardrail that should sit beside a review metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep the template, the gaming table, and the cross-references consistent.

## Key takeaways

- Most review delay is waiting, so measure time to first review and review cycle time as distributions in working hours.
- Smaller pull requests are reviewed faster and more carefully; teach slicing rather than imposing a size cap.
- Pair every speed measure with a quality counterpart, such as the post-merge fix rate, and read the two together.
- Treat review load as a team capacity and report concentration at team level, never as a ranking of people.
- Review metrics are questions for a retrospective, and they serve the team that owns the work.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
