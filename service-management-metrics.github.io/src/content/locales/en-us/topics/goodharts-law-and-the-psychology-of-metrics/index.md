# Goodhart's law and the psychology of metrics

**Any number you reward, rank, or threaten will start to change the work it was meant to describe, so every metric in this book is used as a question for a team to discuss and is paired with a guardrail that catches its gaming.**

## Overview and motivation

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) is the oldest warning in measurement. The economist Charles Goodhart noticed in 1975, writing about British monetary policy, that a statistical regularity tends to collapse once authorities put pressure on it for control purposes. The popular wording came later. The anthropologist Marilyn Strathern put it in 1997 as "When a measure becomes a target, it ceases to be a good measure." The two sentences say the same thing: the moment a number is used to steer people, people steer the number.

The same idea has other names. [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law), from the social scientist Donald Campbell, says the more a quantitative indicator is used for decisions, the more it is subject to corruption pressures and the more it distorts the processes it is meant to monitor. The [cobra effect](https://en.wikipedia.org/wiki/Cobra_effect) is the story of a bounty that produced more of the thing it was meant to remove. Each is an example of a [perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive): a reward that pushes behavior away from what the rewarder wanted.

Teams that build and run IT services are unusually exposed. Continuous delivery and IT service management (ITSM), as codified by [ITIL](https://en.wikipedia.org/wiki/ITIL), both produce a steady stream of timestamps, counts, and statuses. A ticketing system records when a ticket opened, when it was assigned, when the clock paused, and when it closed. A delivery tool records when work started and finished. These numbers are cheap to collect, easy to chart, and easy to turn into targets. They are also easy to move without helping anyone.

Three terms recur in this topic and the rest of the book. A **measure** describes something. A **target** is a number someone is expected to hit. A **guardrail** is a second measure or a practice, chosen in advance, that would move if the first measure were being gamed. The step from measure to target is where trouble starts, and the guardrail is how you notice.

This topic sets the rule that governs every other topic. Each metric family in the book arrives with its gaming vector (how it typically gets gamed) and its guardrail. If a later topic seems to skip that, treat the topic as unfinished.

### Why people game numbers

Gaming is usually not dishonesty. It is the ordinary response of capable people to the incentives in front of them. Four forces are at work.

- **Pressure.** Someone's bonus, review, contract renewal, or reputation depends on the number. Even without a formal link, people infer what leadership cares about from what leadership charts.
- **Surrogation.** [Surrogation](https://en.wikipedia.org/wiki/Surrogation) is the tendency to treat the measure as if it were the thing it stands for. Researchers who studied it in organizations found that incentive pay tied to a measure makes this more likely. A team that tracks "tickets closed" begins to believe the goal is closed tickets, not solved problems.
- **Fear.** When a bad number brings blame, people hide bad news. Incidents get downgraded, outages get relabeled as "planned maintenance," and defects get logged as feature requests.
- **Local optimization.** A team improves the part of the system it is judged on and pushes cost onto a part it is not. The service desk closes fast and the second line inherits the repeats.

Understanding these forces matters because the remedy is not stricter policing. It is changing the conditions that make gaming rational.

## Key principles

- **Measure to learn, not to judge.** Show numbers to the team that does the work, first, and use them to ask questions.
- **Pair every metric with a guardrail.** Speed with quality, volume with outcome, cost with experience.
- **Describe teams and systems, never rank people.** Individual league tables are the fastest way to corrupt a data source.
- **Prefer outcomes and trends to targets.** A direction and a conversation beat a threshold.
- **Write the definition down, including the clocks.** Ambiguous definitions are where gaming hides.
- **Expect change.** Retire or redesign a metric when it stops informing decisions.
- **Make bad news safe.** If honest reporting is punished, the data will lie.

## Metric definitions

The metrics below are not service or delivery measures. They are measures of the health of a metrics practice itself, and they show the form every metric table in this book takes. The first three are guardrail examples that appear throughout later topics.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Guardrail coverage | Share of reported metrics that have a named, tracked guardrail | metrics with a guardrail / metrics reported | percent | Metric register (see topic 1.4, Metrics governance and ownership) | Measurement and reporting; continual improvement | Retrospective of working agreements | Quarterly |
| Reopen rate | Share of closed tickets or work items reopened within a stated window | items reopened within 14 days / items closed in the period | percent | ITSM tool or issue tracker status history | Incident management; problem management | Definition of done; escaped defects | Monthly |
| Definition change count | Number of changes to metric definitions or status workflows in a period, with reasons | count of entries in the definition change log | count | Metric register change log | Measurement and reporting | Working agreements | Quarterly |
| Metric use rate | Share of reported metrics that were cited in a decision during the period | metrics cited in a recorded decision / metrics reported | percent | Decision log or review notes | Continual improvement | Retrospective actions | Quarterly |
| Perception gap | Difference between a satisfaction survey result and a ticket-derived service level for the same service | survey-derived rate minus tracker-derived rate | percentage points | Survey tool and ITSM tool | Service level management | Stakeholder review feedback | Quarterly |

Reopen rate counts only items that were reopened in the same record. An item closed and then re-raised as a new ticket does not appear. Part of the point of the next section is that the guardrail needs its own guardrail, such as linking duplicate tickets to their originals.

## Recommendations

### Design the measurement system

**1. Start from a question, not a number.** Before adding a metric, write the question it answers and the decision it informs. "Are users getting their problems solved the first time?" is a question. "Reduce average handling time" is a target pretending to be one. A metric with no decision attached is a candidate for retirement.

**2. Choose metrics in tension.** A single number invites over-optimization, so pick pairs that pull against each other: lead time with change fail rate, ticket closure speed with reopen rate, availability with user-reported experience. The pair does not need to be a formula. It needs to be shown together, on the same page.

**3. Define the clocks and the exclusions.** For every time measure, write where the clock starts, where it stops, and when it may pause. Most gaming in service data lives in these boundaries: a ticket put into "waiting for customer" stops the service level clock, and a change recorded only after it is applied escapes the change lead time. If a pause state exists, report how often it is used.

**4. Use distributions and percentiles.** An average of ticket resolution times can improve because a few easy tickets were closed quickly while the hard ones age. Show the median and a high percentile (for example the 85th or 95th), and show the oldest open items. Work item age and the oldest open ticket are hard to game without actually finishing the work (see topic 2.1, Flow measures).

**5. Keep a metric register.** A short register lists each metric, its owner, its definition, its data source, its gaming vector, its guardrail, and the date it was last reviewed. It is boring and it is the single most effective habit in this topic (see topic 1.4, Metrics governance and ownership).

### Introduce metrics safely

**6. Show the team first, and show raw data.** Teams that see the numbers before leadership do are more willing to question their accuracy. Start with the underlying items, not the chart. If the data cannot survive a conversation with the people who generated it, it cannot survive a dashboard.

**7. Separate learning views from accountability views.** A team's working view can contain many measures, including ugly ones. What goes to leadership should be a small, stable set. If leadership asks for the working view, expect the working view to change to look better.

**8. Do not tie individual pay, discipline, or ranking to a metric.** Teams can be asked to explain their numbers and to improve them. Individual targets on ticket counts, story points, or commits teach people to maximize the count. The [key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator) approach can work when indicators are chosen for the whole system and reviewed regularly. It fails when it becomes a per-person scorecard.

**9. Make honest reporting safe.** [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety) is the belief that you will not be punished for speaking up with a mistake or a concern. A blameless review of an incident is an example of it in practice. Without it, incident counts fall for the wrong reason: people stop reporting.

### Keep the system honest

**10. Run a gaming review.** Once a quarter, ask the team one question about each reported metric: "If we wanted this number to look good without helping anyone, what would we do?" Write the answers down, then check whether the guardrail would catch each one. The exercise is cheap, produces useful ideas, and moves the conversation from suspicion to design.

**11. Audit the definitions against reality.** Sample a small number of closed items and read them. Were they really resolved? Was the priority honest? Did the "waiting for customer" state mean the customer was being waited on? A fifteen-minute sample often tells you more than a month of dashboards.

**12. Retire metrics.** A metric that has not been cited in a decision for two quarters is overhead. Remove it, and say so. Fewer metrics, each trusted, beat many.

## Gaming vectors and guardrails

The table covers the metrics in the section above. Later topics apply the same form to service and delivery measures.

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Guardrail coverage | Naming a guardrail on paper without ever tracking it | Review the register: a guardrail only counts if its latest value appears on the same dashboard |
| Reopen rate | Closing the ticket and raising a new one instead of reopening; lengthening the window until reopenings fall outside it | Duplicate and linked-ticket rate; recurrence of the same cause across tickets |
| Definition change count | Not logging changes so the count stays low; changing a workflow without telling anyone | Compare the status model in the tool with the register at each review |
| Metric use rate | Citing every metric in a decision log as a formality | Ask what changed because of the citation; sample the log |
| Perception gap | Surveying only satisfied users; steering surveys to times after a good interaction | Survey response rate and respondent mix; open comments read aloud in a review |

A healthy reading is a metrics practice that changes: definitions are adjusted for reasons that are written down, metrics come and go, and the team can tell a story about a decision a number changed.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Measuring without targets | Reduces gaming; invites honest discussion | Can drift into reporting nobody acts on |
| Targets with guardrails | Gives direction and urgency; the pair limits gaming | More work to maintain; the guardrail also gets gamed over time |
| Individual metrics | Easy to understand; seems fair | Corrupts data; harms collaboration |
| Team and service metrics | Matches how work really happens | Harder to attribute; hides individual support needs |
| Few metrics | Easier to trust and remember | Blind spots; may miss a new problem |
| Many metrics | Broad coverage | Dilutes attention; each metric is weakly governed |

The prose answer is to use targets sparingly, for conditions that are well understood and hard to game, such as a service level objective users have asked for. Even then, prefer to tie the target to the service, not to a person's review. The goal is not to remove numbers from decision-making. It is to keep the numbers connected to reality by keeping the people who produce them on your side.

## Questions to discuss with your team

**1. Which number on our current dashboard would we be most tempted to improve without improving the work?**
Start with the metric people look at first, then move to the one leadership asks about. Ask for specific moves: what would we do to the data if we were under pressure? The facilitator should record each answer without judging it, because the list becomes the gaming vectors for the register. Finish by asking which of the moves our guardrails would catch, and which they would miss.

**2. Where does a clock start and stop in our most important time measure, and who decided that?**
Ask the group to draw the ticket or work item lifecycle on a whiteboard and mark each state. Look for states where time can disappear, such as waiting for a customer or on hold. Count how often each state is used and by whom. The conversation often reveals that two teams use the same word differently.

**3. When did a number last make us do something unhelpful?**
Invite stories, not blame. Common examples are closing tickets before verifying, splitting changes to raise deployment counts, or reclassifying an incident to avoid a breach report. The facilitator should ask what the person was trying to protect. The answer usually shows the incentive that needs changing.

**4. Who sees our metrics, and what happens to them there?**
Trace each metric from the team to its audience. Ask whether any version of it is used to compare teams or people. Ask what the team would show if the audience were different. Where the team would change the numbers they show, there is a trust gap to talk about with the audience.

**5. What is the guardrail for each of our five most important metrics, and is it on the same page?**
Make a two-column list on a board. If a metric has no guardrail, agree on one candidate and an owner to trial it for a quarter. If a guardrail exists but is rarely viewed, discuss why. Avoid choosing a guardrail that is merely the inverse of the metric, because that tells you nothing new.

**6. Which metric should we retire this quarter?**
Ask for evidence: when was it last used in a decision? If nobody can remember, retire it for a trial period and see whether anyone notices. The facilitator should treat retirement as a normal event. Teams that never drop metrics end up with reports that nobody trusts or reads.

## Four perspectives

### Product and delivery teams

Delivery teams meet gaming through velocity, throughput, and deployment counts. [Velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) in particular is a planning tool for one team, not a measure of productivity, and comparing teams by it leads to inflated estimates. Delivery teams should keep their working measures for themselves, publish a small set outward, and pair each speed measure with a quality measure (see topic 2.5, Delivery forecasting and planning metrics).

### Service and operations teams

Service teams meet gaming through resolution time, first contact resolution, and service level compliance. The clock-pausing states and priority fields are the usual points of drift. Operations teams should audit status transitions regularly, report the use of pause states, and watch repeat contacts and reopen rate next to speed. Teams on call should be especially careful with measures that reward not being paged, since they punish honest alerting (see topic 3.3, Incident response and resolution time).

### Leadership and governance

Leaders set the incentives, often without intending to. A question asked in a review ("why is this red?") teaches the team what to hide. Leaders should ask what the team learned from a number, keep league tables out of the room, protect candid reporting, and fund the improvement work a bad number reveals. Governance bodies should expect the metric register and the gaming review as part of reporting, and treat a defined change in a metric as normal.

### Customers and users

Users experience the effect of gaming as a service that looks good on paper and feels poor in practice: a ticket closed that was not fixed, an outage labeled planned, a survey that never reached them. Users are also the best guardrail. Their feedback, in the form of surveys, complaints, and comments, should sit beside the operational numbers, and it should be read in full, not reduced to a score (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A regional hospital's IT department runs a service desk and several product teams that build clinical applications. The numbers in this example are illustrative.

Leadership sets a target of closing 90 percent of incidents within the agreed time. Within two months the dashboard shows 94 percent. The head of service operations is pleased but uneasy, because clinical staff complain more, not less. She asks the team to run a gaming review on the metric.

The team sketches the ticket lifecycle. They find that tickets move to "waiting for customer" an average of twice each, and that the time in that state has grown. A sample of 30 closed tickets shows that 7 were closed with the note "no response from user" after one attempt to call. They also find that the reopen rate is flat only because users were told to "raise a new ticket" when the problem returned.

The team makes three changes. First, the resolution-time chart now shows the median, the 90th percentile, and the oldest open ticket, along with the share of time spent in pause states. Second, the dashboard adds a repeat contact rate, defined as the share of new tickets from the same user about the same service within 14 days. Third, a short survey goes to a random sample of closed tickets, and its open comments are read in the monthly review.

Three months later the headline compliance number drops to 88 percent, which feels like bad news. The repeat contact rate has fallen, however, and survey comments about unresolved problems have become rarer. The head of operations tells leadership that the old number was inflated and the new picture is more honest, and she asks them to accept a service level target based on the corrected definition. The decision, recorded in the decision log, is to set the target after one more quarter of data rather than immediately.

## Agile, AI, automation, and analytics

### Agile

Short feedback loops let a team notice gaming early. A practice that fits well is to read a few raw items at each regular review and compare them with the headline number, with stakeholders in the room. The caution is that a loop that rewards speed of reporting can itself become a target, so keep the purpose of each review on learning.

### AI

AI changes how gaming looks. A model can produce plausible resolution notes, status updates, or ticket categories at volume, so a metric that counts those artifacts can be satisfied without any real work. Pair every AI-influenced count with a sampled human check of quality, and report the share of AI output that a person changed. The caution is that a low correction rate can mean good drafts or careless review, so read the two together.

### Automation

Automated collection removes manual edits to data, which closes some gaming routes. Automate the guardrail as well as the metric, so both appear on the same page. The caution is that people then game the inputs the automation reads, such as the ticket category or the pause state, so audit definitions against a sample of real items.

### Analytics

Analysis can reveal gaming through odd distributions, such as a spike of tickets closed just before a reporting deadline, or a cluster at exactly the target value. Use those patterns to prompt a conversation, not as proof of bad intent. The caution is that any detection rule becomes known and then avoided, so rotate guardrails and keep a human in the review.

## Sector lens

**Startup.** Small teams have few metrics and strong trust, which helps. The danger is importing a large enterprise dashboard too soon. Start with two or three measures that the founders actually use, write down their definitions, and keep them away from individual performance conversations.

**Small business.** Resources are thin, and the person running IT often reports directly to the owner. A single customer complaint can outweigh any dashboard. Keep the set small, favor direct feedback from users, and treat vendor-supplied reports with some caution, since the vendor has its own incentives.

**Enterprise.** Scale multiplies both the demand for comparable numbers and the pressure to game them. Use a small standard set with written definitions, keep team working views separate from roll-ups, and avoid comparing teams that work on different kinds of services. A metric register and a review cadence become essential.

**Government and public sector.** Reporting obligations and contract service levels can make some targets non-negotiable. Treat them as design inputs: meet them, show the guardrail beside them, and report the definitions used. Public accountability raises the cost of hiding bad news, so build safe internal channels and be open about corrected definitions (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of applying this topic is mostly time: a few hours to write definitions and a register, a short quarterly gaming review, and occasional sampling of closed items. There is little tooling cost. The larger cost is leadership attention, because the discipline only works if the people reading the numbers behave consistently.

The return comes from avoided waste and better decisions. Decisions made on corrupted data can direct investment to the wrong problem, such as staffing a service desk to close tickets faster when the real problem is repeat contacts from a defect. Gaming also erodes trust between the team and the people who rely on it, which is hard to repair. Describe the benefit in the pattern, not with a made-up percentage: fewer reversals of decisions, fewer surprises in audits, and better agreement between operational numbers and user experience. If you need figures for a business case, measure your own baselines, such as the perception gap and repeat contact rate, before and after the change.

## Anti-patterns and pitfalls

- **Targets without guardrails.** A lone target gets met by any available route. Add a paired measure before the target is announced.
- **League tables of people or teams.** They invite gaming and discourage help between teams. Show each team its own trend, with context.
- **Metrics as punishment.** A red number that brings blame will turn green by concealment. Ask what the team needs instead.
- **Averages of skewed data.** They hide the tail where users suffer. Use percentiles and the age of the oldest item.
- **Changing definitions silently.** Trend lines become meaningless. Log every change with its reason and mark it on the chart.
- **Treating the guardrail as the new target.** The guardrail then gets gamed. Review both together and rotate guardrails when they lose power.
- **Vanity metrics.** Counts that only go up, such as tickets handled or commits made, say nothing about outcomes. Prefer measures that can fall as well as rise.
- **Ignoring qualitative evidence.** Numbers alone cannot show that a closed ticket felt unresolved. Read the comments.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | Informal; each person counts differently | Written for some metrics | One written definition per metric, with clocks and exclusions | Definitions reviewed and changes logged with reasons | Definitions aligned across teams and suppliers, revised when they stop informing decisions |
| Guardrails | None | Named for some metrics | Every reported metric has a guardrail on the same page | Guardrails reviewed for gaming each quarter | Guardrails rotate and are co-designed with the people measured |
| Use and safety | Numbers used to assign blame | Team sees its own numbers | Team sees data first; no individual rankings | Leadership asks learning questions; reporting is safe | Customers and suppliers share a candid view of the numbers |

## Checklist

- [ ] Every reported metric has a written question and decision it informs.
- [ ] Every time measure has a written start, stop, and pause rule.
- [ ] Every reported metric has a named guardrail shown beside it.
- [ ] Time measures show percentiles and the age of the oldest open item.
- [ ] A metric register exists with owner, definition, gaming vector, guardrail, and review date.
- [ ] The team sees its data before leadership does.
- [ ] No individual ranking, pay, or discipline is linked to a metric.
- [ ] A quarterly gaming review is on the calendar.
- [ ] A sample of closed items is read for honesty each quarter.
- [ ] At least one metric has been retired or redesigned in the past year.

## AI prompts

**Run a gaming review on a metric.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Draft a metric register entry.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Audit a sample of closed tickets.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Plan how to introduce a metric safely.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic and the paired guardrail for a metric you are about to introduce.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new metric topic carries its gaming vector and guardrail.

## Key takeaways

- A measure that becomes a target stops describing the work, so use numbers to ask questions.
- Gaming is a normal response to pressure and fear, and it is reduced by changing conditions, not by policing.
- Every metric needs a written definition with its clocks and a guardrail shown beside it.
- Prefer percentiles and the age of the oldest item to averages.
- Describe teams and services, never rank individuals, and let the team see its data first.
- Review for gaming each quarter and retire metrics that no longer inform decisions.

## References and further reading

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
