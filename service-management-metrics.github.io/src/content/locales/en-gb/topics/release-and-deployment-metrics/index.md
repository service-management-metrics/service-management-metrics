# Release and deployment metrics

**Deploying code and releasing it to users are different events with different risks, so measure them separately, count each one by a written rule, and read frequency, lead time, batch size, and flag hygiene together instead of celebrating any single count.**

## Overview and motivation

Many teams use the words "deployment" and "release" as if they meant the same thing. They do not, and the difference is the most useful idea in this topic. A **deployment** is the act of putting a version of the software into an environment, usually production, as described in the article on [software deployment](https://en.wikipedia.org/wiki/Software_deployment). A **release** is the moment a change becomes available to its intended users, a decision that [release management](https://en.wikipedia.org/wiki/Release_management) exists to govern. When the two happen together, a deployment is a release and one number describes both. When they are separated, the team can deploy often and quietly, and release deliberately.

The separation matters because the two events carry different risks. A deployment carries technical risk: the new build might fail to start, might break a dependency, or might need a rollback. A release carries business and user risk: the change might confuse customers, or might need to land on an agreed date. Teams that couple the two events accept both risks at once, which pushes them toward large batches of change released rarely. Teams that separate them take the technical risk in small steps and the user risk in controlled steps.

The main tool for separation is the [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), also called a feature flag: a switch in configuration that turns a behaviour on or off without a new deployment. Related techniques include the [canary release](https://en.wikipedia.org/wiki/Canary_release), which exposes a change to a small share of traffic first, and [blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment), which keeps two production environments and switches traffic between them. All of them let you answer two separate questions: is the new version running safely, and who should see the new behaviour and when.

The terms below recur in this topic.

- A **release** is a version or set of changes made available to users.
- A **deployment** is the movement of a version to an environment. ITIL 4 names a practice for this, deployment management.
- A **dark launch** is a deployment whose new behaviour is switched off for users.
- A **progressive rollout** is a release that widens exposure in stages, for example 1 percent, 10 percent, and then everyone.
- A **batch** is the set of changes that ship together in one deployment or release. Batch size is the number of changes, or the amount of change, in it.
- **Release lead time** is the elapsed time from a stated start point until the change is available to its users. Your team writes the start point down, because several are in common use.
- A **percentile** is a value below which a stated share of observations fall. The 85th percentile of release lead time is the number that 85 percent of releases beat.

The agile and ITIL views meet here. An agile team following [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) wants every change to be releasable at any time, and treats the release as a business decision made separately from the technical act. An ITIL practitioner sees release management, deployment management, and change enablement as practices that plan, schedule, and control the movement of change into live use. The two views conflict when release management is understood as a calendar of big events. They fit together when the practice is understood as the capability to release safely on demand, with the controls built into the pipeline and the flags.

This topic does not repeat the definitions of the five delivery performance measures from the DORA research programme (see topic 2.8, DORA metrics), nor the measures of failure and rework after a release (see topic 4.4, Change failure and rework), nor the volume and approval of changes (see topic 4.3, Change enablement metrics). It adds what those topics leave open: how to count releases as distinct from deployments, how long a finished change waits before users get it, how large the batches are, and whether the flags that make separation possible are being kept tidy.

Finally, release and deployment counts are tempting numbers for a leadership dashboard, and [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies at once (see topic 1.2, Goodhart's law and the psychology of metrics). A count of deployments rises when changes are split into trivial pieces. A count of releases rises when a label is changed. Each metric below therefore comes with the way it bends and the guardrail that catches the bend.

## Key principles

- **Deployment and release are two events.** Measure them separately wherever the architecture allows it, and say plainly where they are still one event.
- **Count by a written rule.** A deployment counts when a named environment received a named version with a successful result. A release counts when the intended users can reach the change. Write the rule once and apply it the same way every time.
- **Describe a service, not a person.** Counts belong to a service and its team, never to an individual.
- **Measure the wait, not just the work.** Release lead time often contains days of waiting for a window, an approval, or a decision. The wait is where improvement usually lives.
- **Small batches are the lever.** Frequency and size are two views of one thing. Pair every count with a measure of how much change each release carried.
- **Flags are inventory with a carrying cost.** A flag that lives too long becomes dead code and a source of failure, so track flag age as carefully as flag coverage.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deployment frequency | How often a service receives a successful deployment to production | Count of successful production deployments of the service in the period / days in the period; deployments to test or staging environments, failed or rolled-back deployments, and redeployments of an unchanged build are excluded; configuration-only deployments are counted in a separate series | Deployments per day or per week | Deployment pipeline event log | Deployment management | Continuous delivery; shipping a working increment | Weekly |
| Release frequency | How often users receive a change they can reach | Count of release events in the period / days in the period; a release event is the moment a change, or a group of changes, becomes reachable by its intended users (a flag turned on for all users, a final stage of a progressive rollout, or a deployment of a change with no flag); a dark launch, a rollout stopped at a partial stage, and a flag change that only affects internal users are excluded | Releases per week or per month | Flag service audit log joined to the pipeline log and the release calendar | Release management | Releasing at the end of each increment; a potentially shippable increment made available | Weekly, reviewed monthly |
| Release lead time | How long a finished change waits before users can reach it | Clock starts when the change is merged to the main line and has passed its automated checks (or, if your team writes it so, at the first commit) and stops when the change is released as defined above; report the median and the 85th percentile of changes released in the period; changes not yet released are excluded and reported as an age of work waiting | Hours or days | Version control joined to the pipeline and the flag audit log | Release management; deployment management | Lead time from done to delivered; Lead time to customer | Weekly, reviewed monthly |
| Deployment-to-release gap | How long deployed code stays dark before users can reach it | Clock starts when the change is deployed to production and stops when it is released; report the median and the 85th percentile; changes released at the moment of deployment have a gap of zero and are included; changes deployed and later removed without release are excluded and counted separately | Hours or days | Pipeline log joined to the flag audit log | Release management; deployment management | Dark launch; decoupling deployment from release | Monthly |
| Release batch size | How much change ships together in one release | Median and 85th percentile of the number of merged changes (pull requests or work items) per release in the period; the unit of change is written down; each change is counted once, in the release that made it reachable | Changes per release | Version control and the issue tracker joined to the release event | Release management; change enablement | Small batches; vertical slices of work | Per release, reviewed monthly |
| Feature flag coverage | The share of user-visible changes that were released behind a flag | User-visible changes released in the period that had a flag at the time of release / all user-visible changes released in the period; infrastructure changes and defect fixes that cannot be flagged are excluded, and the rule for "user-visible" is written down | Percent | Flag service joined to the issue tracker and release log | Release management; change enablement | Progressive delivery; experiment-driven development | Monthly |
| Stale flag count | How many flags have outlived their purpose | Number of release flags still present in code or configuration more than a stated number of days after the change they guard reached all users; permanent operational flags (kill switches, entitlement flags) are tagged and excluded; the age limit is written down per flag type | Flags, and the median age of release flags in days | Flag service inventory joined to the code search | Release management; knowledge management | Technical debt cleanup; the done criterion of removing a flag | Monthly |

## Recommendations

### Write down what counts as a deployment and as a release

**Define both events before you count either.** A deployment counts when a named version reached a named environment and the pipeline reported success. A release counts when the intended users can reach the change, which for a flagged change is the moment the flag is turned on for them and not the moment the code arrived. State the exclusions in the same sentence: test environments, rollbacks, redeployments of an unchanged build, and internal-only exposure.

### Report the two series side by side

**Show deployment frequency and release frequency on one chart.** Where the lines coincide, the service still couples the two events. Where deployments run well ahead of releases, the team has started to decouple them, and the distance between the lines is a sign of the capability. A single combined number hides this, and it lets a team claim a high frequency that users never see.

### Measure release lead time from a stated start to the user

**Pick the clock start once and keep it.** Starting at the first commit shows the full journey, and starting at merge to the main line isolates the release pipeline and its approvals. Either is acceptable if it is stated on the chart and never changed silently. End the clock at the release, not the deployment, otherwise the metric stops measuring what the user waited for.

### Track batch size beside frequency

**Pair every frequency with a size.** A team can raise its deployment count by cutting one change into slices that are not independently useful, and the count rises while the real flow stays the same. Median and 85th percentile batch size show whether the slices are real. Small batches are easier to review, test, and reverse, and that is the benefit the frequency is a proxy for.

### Treat progressive rollout stages as events

**Record each stage of a rollout with a timestamp.** A rollout that goes from 1 percent to 10 percent to everyone gives three timestamps, and each is a chance to stop. Capture the stage, the exposure share, and the result of the health check that allowed the next stage. This lets you separate a rollout paused for a real signal from one that stalled.

### Keep a flag inventory with an owner and an expiry date

**Give every release flag an owner, a purpose, and a planned removal date at creation.** The flag service or a plain register can hold these. Review the register monthly and compute the stale flag count. A flag left on after full rollout is dead code that still branches. Treat the removal as part of done for the change.

### Tag flags by type

**Separate temporary release flags from permanent operational flags.** Kill switches and entitlement flags are permanent by design, while release flags should be removed after full rollout. Mixing the types makes the stale count noisy and invites teams to delete a switch someone needs during an incident. Require the type when the flag is created.

### Link releases to the incident and change records

**Record the release identifier on the incident and the change.** A release event should be traceable from the incident tool, so that the cause of an incident can be linked to the change that was released, whether it was deployed last week or switched on this morning. Without the link, instability measures attribute failures to the deployment date and miss failures caused by a flag change. Flag changes in production are changes in the ITIL sense and should be visible to change enablement, even when they are pre-authorised as standard changes (see topic 4.3, Change enablement metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Deployment frequency | Splitting one change into trivial deployments; redeploying unchanged builds; counting deployments to staging; counting configuration-only deployments with the main series | Release batch size and the share of deployments with a user-visible change; the separate configuration series; change fail rate beside it |
| Release frequency | Relabelling deployments as releases; counting a flag switched on for internal staff as a release; releasing empty or cosmetic changes to meet a target; counting each stage of a rollout as a separate release | A written definition of release; sample of releases each quarter checked against user-visible changes; batch size and customer-facing change counts |
| Release lead time | Starting the clock later, for example at approval instead of merge; excluding changes that waited long as "blocked"; releasing a trivial change first to pull down the median; ending the clock at deployment | The 85th percentile and the age of the oldest waiting change; a fixed written start; a quarterly review of the slowest 10 percent of changes |
| Deployment-to-release gap | Turning a flag on for a token user to record the release early; leaving long-dark code out of the sample by calling it "not a release"; deleting dark code to avoid a long gap | Exposure share at release (a threshold for what counts as released); count of changes deployed and removed without release; stale flag count |
| Release batch size | Splitting work into artificial pull requests; merging unrelated changes into one to lower the number of releases; counting only the large change in a bundle | Median change size in lines or files as a context measure; review of a sample of releases for unrelated bundling; frequency beside size |
| Feature flag coverage | Adding flags to trivial changes to raise the rate; flagging only the safe changes and shipping risky ones unflagged; creating a flag with no way to turn it off in practice | Flag-off test results for a sample of flags; the stale flag count; incident causes that had no flag |
| Stale flag count | Re-tagging release flags as permanent to leave the stale count; deleting the flag record while leaving it in code; extending expiry dates without review | A periodic code search against the register; review of every change of flag type; the age of the oldest release flag |

A healthy reading shows deployments running ahead of releases for services that use flags, with a modest gap, a small and steady batch size, and an 85th percentile of lead time not far above the median. Flag coverage is high for risky changes, and the stale flag count is low or falling. A reading that looks too good, such as a high frequency alongside growing batch sizes or a zero stale count with a swelling count of permanent flags, deserves a sample audit before any celebration.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Deploy continuously and release by flag | Small technical risk per deployment; release timing becomes a business choice; quick switch-off | Needs flag discipline and tooling; adds code paths that must be tested and removed |
| Couple deployment and release | Simple to explain; one event to count; no flag debt | Every release carries both technical and user risk, which encourages big batches released rarely |
| Scheduled release train | Predictable for support and regulators | Changes wait for the next train; the count reflects the calendar, not the capability |
| Progressive rollout by percentage | Limits the effect of a bad release; produces evidence at each stage | Needs good telemetry and a health check; mixed versions may run side by side for a while |
| Count both deployments and releases | Shows decoupling and waiting | Requires a flag audit log or release records to be joined to the pipeline |

A service that cannot yet decouple deployment from release, for example a mobile application distributed through an app store review, should measure what it can: release frequency, release lead time, and batch size, with the store review time reported as a separate wait.

## Questions to discuss with your team

**1. Do we use the words "deployment" and "release" for the same event, and does that match what happens?**
Ask three people to describe the last change that went live and note when the code arrived and when users could first use it. The facilitator should help the group agree on one sentence for each term and decide which of the two events each existing dashboard number measures.

**2. What is the longest time a finished change has waited for release, and why?**
Pull the oldest merged change that users still cannot reach. Trace its path from merge to now, and write down every wait along the way.

**3. If our deployment count doubled, what would we check before calling it good news?**
Invite the group to name ways the count could rise without more value reaching users. Look at batch size, the share of deployments with a user-visible change, and the failure and rework figures. The facilitator should note which of these checks already exist on the dashboard and which need to be added before anyone sets a target.

**4. Which of our flags would we be afraid to delete, and what does that tell us?**
Walk through the flag register and pick the three oldest. Ask who owns each, what it guards, and what would happen if it were removed. Fear of deletion usually means a missing test, a missing owner, or a missing record of purpose. Agree on a removal date for at least one and on the check that would make removal safe.

**5. Who decides when a change is released, and do they have the information they need?**
Where release is a business choice, the person who makes it needs to see the state of the rollout, the health signals, and the support readiness. Ask where those facts live today and how quickly the decision-maker can reverse a release.

**6. Which release in the last quarter went worst, and which measure would have warned us?**
Choose one release that caused trouble and read the timeline together. Ask whether the batch was large, the gap was long, the rollout had stages, and whether a flag could have limited the damage. Pick one measure to add or one threshold to tighten as a result.

## Four perspectives

### Product and delivery teams

Delivery teams use these measures to see whether their pipeline and flags actually give them control over exposure. The most useful views are the gap, the batch size, and the age of the oldest waiting change, because each points at something the team can change.

### Service and operations teams

Operations and support teams care about what changes in production and when. Release events and flag changes need to be visible to them, ideally with a release identifier on every incident. Staged rollouts and fast switch-off reduce the number of incidents that need a full restoration, and the measures help operations teams ask for the controls that make their work calmer.

### Leadership and governance

Leaders should ask for trends and spread for each service, and for the answer to a simple question: how long does it take for a finished change to reach users, and how safely. A target for deployment frequency across teams invites splitting and relabelling, so prefer targets for outcomes such as lead time distributions and for the removal of known waits. Governance can reduce the load of release approvals by pre-authorising low-risk flagged changes, as long as the flag audit trail is complete (see topic 4.3, Change enablement metrics).

### Customers and users

Customers see releases, not deployments. They care that fixes arrive soon, that new behaviour does not surprise them, and that a bad change can be reversed quickly. A team that separates the two events can give customers early access to a feature, can announce a date it can keep, and can roll back one feature without losing the rest. Pair these measures with customer-facing ones (see topic 5.3, Availability metrics, and topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A regional online retailer runs a product search service owned by one product team, supported by a platform team and the service desk. The service deploys to production through a pipeline and has a flag service that was introduced six months ago. All numbers below are illustrative.

Over the last quarter the team made 52 production deployments, about four per week. Release frequency, counted as the moments when a change became reachable by all intended users, was 11 for the same quarter, about one per week. The median release lead time, from merge to release, was 9 days, with an 85th percentile of 21 days. The median deployment-to-release gap was 6 days. The median release batch size was 3 changes and the 85th percentile was 14. Flag coverage for user-visible changes was 58 percent, and 17 release flags were more than 30 days past full rollout.

The gaming risk is already visible. Some deployments were configuration-only, and the pipeline counted each as a deployment, so the dashboard now shows a separate configuration series and the monthly review samples 10 deployments for a user-visible change. A regional manager sees the deployment count and asks the team to raise it to match another team's figure. The team lead resists the target and brings the full set of numbers to the monthly review instead. The review finds that the gap is long because releases wait for a weekly marketing and support briefing, that four of the 17 stale flags guard code paths nobody has tested, and that the 85th percentile of batch size comes from a few releases that bundled unrelated changes before a holiday freeze.

The decision, recorded in the decision log, has four parts. Support and marketing will take part in a shorter, twice-weekly briefing, so that the release decision no longer waits for the weekly slot. Every release flag gets an owner and a removal date, and the four untested stale flags are removed in the next two weeks. Releases bundling unrelated changes need a stated reason in the release record. And the team declines the common deployment target, offering a shared view of each service's release lead time distribution and flag hygiene instead. The change manager agrees to treat flagged changes that pass the pipeline checks as standard changes, with a review next quarter. In the next quarter (illustrative), the median release lead time falls to 5 days, the stale flag count falls to 6, and the change fail rate stays steady, so the experiment continues.

## Agile, AI, automation, and analytics

### Agile

Separating deployment from release lets a team ship small changes continuously and release when stakeholders are ready. Review flag hygiene regularly. The caution is that counting deployments rewards splitting changes.

### AI

AI-assisted coding can raise deployment counts and batch sizes. Pair frequency with failed deployment recovery and the stale flag count, and mark AI-assisted changes in the data. The caution is that more deployments with more rework is not progress.

### Automation

Count deployments and releases from pipeline events, and automate flag clean-up reminders. Measure the pipeline on its own failure rate. The caution is that manual releases outside the pipeline vanish from the data.

### Analytics

Show frequency with lead time and batch size, and the gap between deployment and release. The decision informed is where the path to users is slow. The caution is that definitions of deployment vary by team.

## Sector lens

**Startup.** A startup often has a single service and a flag library in the code, so deployment and release can be separated cheaply. Keep a simple register of flags with expiry dates, and wait for enough volume before trusting percentiles.

**Small business.** A small business may run packaged or purchased software where the supplier controls the release. The useful measures are the time between the supplier's release and the business adopting it, and the batch of changes that arrive together in a major version. Record supplier release dates and your own deployment dates so that the wait in between is visible.

**Enterprise.** An enterprise faces many services on different release styles, a central change process, and shared environments. The main work is agreeing the definitions of deployment and release across teams and suppliers, and keeping a roll-up that respects the differences. Use spread and trends for governance and treat the flag platform as a shared service with an owner.

**Government and public sector.** Releases are often tied to fixed dates, legislation, procurement cycles, or assurance gates, so release frequency may be low for good reasons. Deployment frequency and the deployment-to-release gap can still show how much of the risk has been taken early and how much waits for the date. Report the wait for external gates separately from the team's own pipeline time.

## Business case: motivations, ROI, and TCO

The motivation for these measures is to reduce the risk and the delay between finishing a change and delivering its value. Large batches released rarely carry more change per event, so a failure is harder to diagnose and harder to reverse. Separating deployment from release gives the team a way to take technical risk early and in small amounts, and to take user risk deliberately. The measures show whether the separation is real, and where change is waiting.

The costs are moderate. Collecting deployment and release events needs the pipeline log and the flag audit log joined to version control and the issue tracker, which is a one-time integration followed by occasional maintenance (see topic 1.5, Data sources and instrumentation). The flag practice itself has running costs: the platform or library, the register, testing both paths of a flagged change, and the cleanup of expired flags. The main hidden cost is flag debt, which the stale flag count keeps visible.

The return follows a pattern that most teams can observe in their own data. Shorter release lead time means a faster feedback loop on whether a change helps users. Smaller batches mean easier diagnosis and easier reversal. A shorter deployment-to-release gap means less time that finished work sits unrealised. Do not invent a figure for the value. Use the team's own examples of changes that sat dark for weeks and the trend of its own measures.

## Anti-patterns and pitfalls

- **Setting a deployment frequency target for every team.** It invites splitting and relabelling. Set outcome targets, such as a narrower lead time distribution, and let frequency follow.
- **Treating a release train as proof of capability.** A fixed calendar gives a steady count and hides the age of waiting work. Track the age of the oldest merged change that users cannot reach.
- **Counting configuration changes as deployments in the main series.** It inflates the number. Keep a separate series and show it beside the main one.
- **Never removing flags.** The code accumulates dead branches and untested combinations. Give every release flag an owner and a removal date, and treat removal as part of done.
- **Changing flags in production without a record.** A flag change is a change to production behaviour. Send it to the audit log and make it visible to change enablement.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | "Deployment" and "release" are used interchangeably; each person counts differently | A few teams write down their own definitions | One written definition of deployment and release, with clocks and exclusions, in the metric register | Definition changes are logged and marked on charts; samples checked each quarter | Definitions revised jointly with suppliers and governance when they stop informing decisions |
| Separation of deployment and release | Every deployment is a release | Some teams use flags or staged rollouts for risky changes | Flags and staged rollouts are a standard option, with release events recorded | Gap, batch size, and rollout stages are trended and reviewed | Release timing is coordinated across teams and suppliers for related services |
| Data capture | Counts assembled by hand from tickets and chat | Pipeline data for some services; releases recorded by hand | Deployments, releases, and flag changes captured automatically for most services | Data quality (link rate, audit of samples) is measured and trended | Events shared across teams and suppliers through agreed interfaces |
| Flag hygiene | No inventory | Informal list in some teams | Register with owner, type, and expiry date for every release flag | Stale flag count trended; removal is part of done and checked | Flag platform managed as a shared service with automated expiry reminders |
| Use of the numbers | Reported upward as a single count | Teams look at their own charts occasionally | Reviewed monthly by the owning team beside the failure and rework figures | Trends feed funded improvement with a guardrail | Spread and trends inform platform investment and change policy across the organisation |

## Checklist

- [ ] "Deployment" and "release" are defined in writing, with the clock events and exclusions for each.
- [ ] Deployments to production are captured automatically from the pipeline, with test environments excluded.
- [ ] Release events are captured from the flag audit log, rollout stages, or release records.
- [ ] Release lead time uses a stated clock start and reports the median and the 85th percentile.
- [ ] The deployment-to-release gap and release batch size are reported beside frequency.
- [ ] Configuration-only deployments appear in a separate series.
- [ ] Every release flag has an owner, a type, and an expiry date in a register.
- [ ] Stale flags are reviewed monthly and their removal is part of done.
- [ ] Release identifiers appear on incident and change records.
- [ ] A sample of deployments and releases is audited each quarter against the definitions.
- [ ] One improvement experiment, tied to the longest wait, is running with a review date.

## AI prompts

**Draft definitions of deployment and release for a service.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Check a release metric set for gaming risks.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Analyze an export of deployments, releases, and flags.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Plan a flag cleanup and release wait experiment.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related change, release, and incident topics and the guardrail that should sit beside each release metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised version of this topic keeps its clocks, gaming vectors, and cross-references consistent.

## Key takeaways

- A deployment puts a version into an environment and a release makes a change reachable by users. Measure the two separately wherever you can.
- Release lead time should end at the release, with a stated start, and be reported as a median and an 85th percentile.
- The deployment-to-release gap and batch size show whether decoupling is real, and they guard frequency against splitting and relabelling.
- Feature flags make separation possible and carry a cost, so track coverage and stale flags with owners and expiry dates.
- Count by written rules, link releases to incidents and changes, and compare a service with its own history instead of with other teams.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
