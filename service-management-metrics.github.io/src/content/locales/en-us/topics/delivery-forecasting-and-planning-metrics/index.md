# Delivery forecasting and planning metrics

**Teams that deliver software continuously and also run live services need honest forecasts, not commitments squeezed out of estimates, so plan from the flow of finished work, give ranges instead of dates, and keep any team-local planning number out of comparisons and out of targets.**

## Overview and motivation

Stakeholders ask two questions of every delivery team: "When will it be done?" and "How much can you take on?" The agile answer starts from the aims in the Agile Manifesto's principles: deliver valuable software continuously, collaborate with stakeholders every day, reflect and improve regularly, and build the work around motivated people who are trusted to get it done. Forecasting that serves those aims is a conversation among stakeholders about likely outcomes and risk. It is not a promise extracted under pressure.

Teams that run live services have an extra difficulty. Their capacity is shared between planned change, unplanned incident work, service requests, and improvement. A plan that ignores the operational load will fail for reasons nobody planned for (see topic 2.9, Operational work and unplanned work). IT service management (ITSM), as codified by ITIL, treats this as a question of capacity and demand. [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning) is the process of determining the capacity an organization needs to meet changing demand. The agile practice of planning against what the team can actually finish is the same idea at team level.

There are two broad ways to forecast delivery:

- **From estimates.** The team sizes items in some unit, adds up the sizes, and divides by a rate. Many teams use relative sizing such as [story points](https://en.wikipedia.org/wiki/Story_point), and the rate is called [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). It is quick to start, depends on the team's estimating habits, and is only meaningful inside one team.
- **From flow data.** The team uses its own record of finished work: how many items it completes per week (throughput) and how long items take from start to finish (cycle time). Because these are counts and elapsed times, not opinions, they resist drift and can be combined with simulation to give a range of outcomes. This approach comes from the flow tradition, which includes the Kanban Guide, and works with any way of organizing work, including teams that deliver continuously without any fixed planning period.

This topic leans toward the second approach, because continuous software delivery produces a steady stream of finished items that flow data describes directly (see topic 2.1, Flow measures, and topic 2.2, Lead time, cycle time, and flow efficiency). It still covers the first, because many teams use estimates, and because the misuse of velocity is among the most common ways delivery metrics go wrong.

Forecasts are [forecasting](https://en.wikipedia.org/wiki/Forecasting) of an uncertain future, and uncertainty is the point. The [cone of uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) idea says that early estimates are the least certain. The [planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy) says people underestimate how long their own plans will take even when they know similar plans ran late. Good forecasting measures names this and measures how often forecasts hit.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) matters here, because forecasts and plans easily become promises and then targets. Once a team is judged on hitting a date, it hides risk, trims quality, or sandbags the estimate (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Forecast from finished work.** What the team has delivered is better evidence than what anyone believes it will deliver.
- **Give a range with a probability.** "Likely by the end of next month, very likely by the end of the following one" beats a single date.
- **Plan against real capacity.** Include operational work, leave time for improvement, and do not plan to full utilization.
- **Keep estimates local.** Any sizing unit is a private planning tool for one team, never a basis for comparison.
- **Measure forecast quality, not just delivery.** A forecast that is right for the wrong reasons is luck.
- **Treat the forecast as shared.** Stakeholders and the team build it together and revise it when facts change.
- **Trust the team.** People who are trusted and supported give honest forecasts.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Forecast hit rate | Share of forecasts where the actual result fell inside the stated range | forecasts whose actual outcome was within the stated range / forecasts made | percent | Forecast log and delivery records | Capacity and performance management; continual improvement | Forecasting accuracy in planning conversations | Monthly |
| Forecast range width | How wide the stated range was, relative to the median forecast | (upper bound minus lower bound) / median forecast | ratio | Forecast log | Capacity and performance management | Cone of uncertainty narrowing | Monthly |
| Delivery goal success | Share of stated delivery goals that were met for the period, judged by outcome | goals met / goals set | percent | Goal records agreed with stakeholders | Service level management; continual improvement | Outcome review with stakeholders | Monthly or per release of a goal |
| Scope change rate | Share of committed work that was added, removed, or re-sized after the forecast was made | items added or removed after forecast / items in the original forecast | percent | Work tracker change history | Change enablement; service level management | Backlog adaptation to feedback | Monthly |
| Capacity allocation | Share of team capacity spent on change, operational work, and improvement | completed items or hours in each category / all completed items or hours | percent | Work tracker with work type | Capacity and performance management; incident management | Work type distribution | Monthly |
| Throughput stability | Variation in weekly throughput | standard deviation of weekly throughput / mean of weekly throughput | ratio | Work tracker | Capacity and performance management | Predictability of flow | Monthly |
| Local velocity | A single team's finished work in its own sizing unit per planning period | sum of estimates for items meeting the definition of done in the period | team-defined points | Work tracker | Capacity and performance management | Team capacity planning aid | Per planning period |

Define the clocks. A forecast is "made" when it is recorded and shared with stakeholders, and "met" when the outcome is released and in use, not when code is merged. Throughput counts items that meet the definition of done, with items of different types counted in separate series if their size differs a great deal. Local velocity is shown only to the team that owns it.

## Recommendations

### Forecast from flow

**1. Build the forecast from throughput and cycle time.** Count the items finished each week for the last 12 to 26 weeks. Use that history to forecast how many items will finish by a given date, or when a set of items is likely to finish. A [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method) simulation, which samples from the team's own history thousands of times, turns the history into a probability range. Simple spreadsheets or small scripts do this well. State the history window and the date of the forecast.

**2. Report percentiles of outcomes.** Say "50 percent likely by 14 March, 85 percent likely by 4 April, 95 percent likely by 18 April." Each percentile is an honest statement of risk, and stakeholders can choose how much margin they need. A single date hides that choice (see topic 1.6, Statistical literacy for service metrics).

**3. Use cycle time percentiles for single items.** For one item, the 85th percentile of past cycle times answers "how long might this take?" better than any estimate. Show it on the board, as a line against which the age of in-progress items can be compared (see topic 2.1, Flow measures).

**4. Keep item sizes roughly even.** Throughput-based forecasting works best when items are small and similar enough to count. Teams get there by slicing work into the smallest piece that still delivers value, a habit of continuous software delivery in its own right. If items vary widely, track separate series for different work types.

**5. Refresh the forecast whenever facts change.** A forecast is a living view. When the scope changes, the team size changes, or a large incident consumes a week, re-run it and tell the stakeholders. Version the forecasts so you can judge them later.

### Plan against real capacity

**6. Allocate capacity by work type.** Record what share of the team's finished work was planned change, unplanned operational work, service requests, and improvement. Plan for the share that experience shows, not for an ideal. Teams that run live services often find that a third or more of their capacity goes to operational work, and the figure is theirs to measure, not to borrow (see topic 2.9, Operational work and unplanned work).

**7. Reserve capacity for improvement.** Continuous improvement is a standing part of the work, so plan time for it in the allocation, and protect it. Teams that squeeze it out in every busy period find their operational load rising, which squeezes it further. Track the improvement share and the effect of the improvements on the operational share.

**8. Do not plan to full utilization.** A team planned at 100 percent has no room for variation, and queues grow as utilization approaches the limit (see topic 2.3, Work in process and queueing). Leave slack for the unexpected, and treat it as a design choice and not as waste.

### Use estimates carefully if you use them

**9. Treat velocity as a local planning aid.** If a team sizes work in story points, its velocity can help it decide how much to take on in its next planning conversation, and it should be compared only with that same team's recent past. Never compare teams, set a velocity target, or report velocity upward as a measure of productivity. Points have no common unit across teams, and the pressure to raise the number inflates the estimates without delivering more.

**10. Compare estimates with actual cycle times occasionally.** Plot estimates against how long items took. If large estimates do not take longer than small ones, the estimating effort is not buying much, and counting items may serve the team as well. If they do correlate, the estimates carry information worth keeping. Let the team decide with the data.

### Measure whether it works

**11. Log every forecast and score it.** Record the forecast, the range, and the actual result, then compute the hit rate. A well-calibrated 85th percentile forecast should come true about 85 percent of the time. If hits are far above or below, adjust the method. Share the log with stakeholders, because trust in the forecast is built from track record.

**12. Judge delivery goals by outcome.** A goal such as "customers can pay by invoice" is met when customers can do it, not when the tasks are closed. Agree goals with stakeholders in plain words, review them together, and record the result. This keeps planning tied to continuous collaboration, and it discourages shipping work that nobody uses (see topic 1.3, Outcomes over output: choosing what to measure).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Forecast hit rate | Stating very wide ranges so that every forecast hits; re-forecasting after the fact | Forecast range width; keep the original forecast in the log; compare ranges with peers' history |
| Forecast range width | Narrowing ranges to look confident | Forecast hit rate; require the range to be built from recorded history |
| Delivery goal success | Setting easy goals; redefining a goal after the fact; counting output as outcome | Stakeholders judge the outcome; goal wording kept in a log; check usage data for the delivered change |
| Scope change rate | Freezing scope by refusing valid changes; hiding scope change by re-sizing items | Satisfaction of stakeholders with responsiveness; change reasons recorded |
| Capacity allocation | Mislabeling operational work as improvement; hiding operational load by working off the board | Reconcile with incident and request records; sample items for type |
| Throughput stability | Splitting items into trivial pieces to raise the count; closing items without finishing them | Item size distribution; reopen rate; sample for value delivered |
| Local velocity | Inflating estimates; splitting stories to claim points; comparing teams | Keep it team-private; compare with throughput and cycle time; never set a target |

A healthy reading is forecasts that come true at about the stated rate, goals that stakeholders agree were met, a capacity picture that matches what the team lives, and a velocity number that, if it exists, is used by the team and no one else.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Flow-based forecasting | Uses real data, resists inflation, gives ranges | Needs steady history and similar-sized items |
| Estimate-based forecasting | Quick to start, encourages discussion of the work | Subjective, inflates under pressure, not comparable across teams |
| Single-date commitment | Simple to communicate | Hides risk; punishes honesty |
| Range with probability | Honest about uncertainty | Harder for some stakeholders to read at first |
| Planning at full utilization | Looks efficient | Queues grow; no room for incidents or learning |
| Planned slack | Absorbs variation and supports improvement | Looks like idle capacity to the unconvinced |

The prose answer is to start from flow data, add estimates only where they help the team, and speak in ranges. Where a contract demands a date, give the date the 85th or 95th percentile supports and say what would change it.

## Questions to discuss with your team

**1. What would we say if a stakeholder asked "when will it be done" and wanted an honest answer?**
Ask the team to answer for a real piece of work, first with a single date and then with a range. Notice the difference in how comfortable each answer feels. The facilitator should capture what the team would need to know to give the range honestly, such as history, item size, and known risks.

**2. How much of our capacity really goes to planned change, and how do we know?**
Look at the last three months of finished work by type. Compare with the plan the team made. The conversation often reveals that operational work is larger than planned, and that improvement work is smaller. Agree what the allocation should be, and what decision would change it.

**3. Where do our estimates help us, and where do they just cost time?**
Plot a sample of estimates against actual cycle times. Discuss whether bigger estimates were really slower. If the link is weak, ask what the team would do differently if it only counted items. Decide whether to continue, simplify, or stop estimating for a trial period.

**4. Who sees our team-level planning numbers, and what happens to them?**
Trace each planning number from the team to its audience. Ask whether anyone compares teams with it or sets targets. If so, discuss how to stop that and what to offer instead. The facilitator should be ready to explain that local numbers lose their value when they travel.

**5. When did a forecast of ours fail, and what did we learn?**
Pick one miss and trace it. Was it scope change, a large incident, a dependency, or a wrong assumption? What would have flagged it earlier? Agree one change to the forecasting practice, such as recording the dependencies or refreshing the forecast weekly.

**6. Which goals did we meet last quarter, and who said so?**
List the delivery goals and who judged each. If the team judged its own goals, discuss how to bring stakeholders in. The conversation supports continuous collaboration, and it shows whether goals are about outcomes or about tasks.

## Four perspectives

### Product and delivery teams

Delivery teams own the forecast and the flow data that supports it. They should publish ranges, keep items small, and re-forecast when facts change. Teams that choose to size work in points should keep the numbers inside the team. The aim is a steady stream of finished, valuable work, and a forecast that stakeholders trust because it has a track record.

### Service and operations teams

Operations teams carry the demand that disrupts plans. They should share incident and request load with delivery teams, so that capacity plans start from real numbers. Operations teams that also deliver change can use the same flow-based forecasting for their own work. Joint planning of change and run work is a good place for continuous collaboration across both groups.

### Leadership and governance

Leaders decide whether a forecast is a risk statement or a promise. They should ask for ranges, fund slack and improvement, and resist using velocity or throughput to compare teams. Governance bodies should look at forecast hit rate over time and at goal outcomes, and treat repeated misses as a signal about the system, such as dependencies and operational load, not about the people.

### Customers and users

Users care about when they will see the change and whether it will help. A range with a stated confidence serves them better than a date that slips. They should be involved in judging whether goals were met, since they are the ones who feel the outcome. Telling users when a forecast changes, and why, is part of treating them as collaborators.

## In practice: a service management example

A regional energy utility's digital team builds a customer billing portal and runs it in production. The numbers below are illustrative.

The team has been asked by its stakeholders for a date for a new payment-plan feature made of 22 items. Last quarter the team gave a firm date based on its estimates, missed it by five weeks because of two major incidents, and lost stakeholder confidence. This time the delivery lead pulls the throughput for the past 20 weeks, which ranges from 3 to 9 items a week with a median of 6, and notes that operational work took about 35 percent of finished items.

She runs a simulation from the history. It shows that 22 items finish within 4 weeks about half the time, within 6 weeks about 85 percent of the time, and within 8 weeks about 95 percent of the time. She presents these three dates to the stakeholders, along with the assumptions: team size unchanged, operational load like the past 20 weeks, and no new scope. A product owner asks about launching for a specific billing date eight weeks away. The team and stakeholders agree to plan for the 85 percent date, keep the last two weeks as a buffer, and set a checkpoint every two weeks to re-forecast.

At the first checkpoint, a fault in the payment gateway has taken three days and the simulation moves the 85 percent date by a week. The team tells the stakeholders the same day, with the reason, and they agree to move one low-value item out. The feature goes live on the buffer date. The delivery goal, "customers can set up a payment plan without calling," is judged by the product owner and a customer panel after three weeks. It is met for most customers, and a comment theme shows confusion about one screen, which joins the backlog. The team records that its forecast hit rate for the quarter is four of five. The stakeholders ask the delivery lead to bring forecast ranges to the next planning session, and the team drops its use of story points because counting items gave the same answer.

## Agile, AI, automation, and analytics

### Agile

Plan from the flow of finished work and revise often with stakeholders, giving ranges instead of dates. A good practice is to forecast with the team's own throughput history and show the range at each regular review. The caution is that any team-local planning number, such as velocity, becomes a target as soon as it is compared across teams.

### AI

AI assistance can change throughput quickly and unevenly, which makes old history a poor guide for a while. Mark the dates AI tools were adopted on the throughput chart, widen the forecast range after the change, and pair forecast hit rate with rework. The caution is that AI-generated estimates look precise, so treat them as input for discussion and check them against the team's own record.

### Automation

Compute forecasts automatically from tracker data, so they refresh without a meeting. Track the accuracy of those forecasts as a metric of the forecasting method. The caution is that an automated forecast shown without its interval invites false confidence, so show the range by default.

### Analytics

Use simulation or percentile-based ranges from past throughput, and report forecast hit rate with the number of forecasts behind it. The decision informed is what to promise and when to re-plan. The caution is that forecasts fail when scope or capacity shifts, so track scope change rate beside them.

## Sector lens

**Startup.** Priorities change quickly, so keep forecasts short and rough. Track throughput from the beginning, since it costs nothing, and give founders ranges. Resist importing a planning system built for large teams.

**Small business.** One or two people may do change and run work together, with no spare capacity. Be explicit about the split, and tell the owner when an incident will push a date. A simple weekly count of finished items is enough.

**Enterprise.** Many teams and dependencies make forecasts depend on other teams' flow. Forecast each team from its own data, make dependencies visible, and combine ranges carefully, since adding best cases gives a misleading total. Avoid roll-ups that compare teams by velocity.

**Government and public sector.** Fixed budgets, procurement, and statutory dates create pressure for single-date commitments. State the date supported by the chosen percentile, explain the assumptions, and record scope trade-offs openly. Where a mandatory date exists, plan scope to fit it (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is low. Throughput and cycle time data usually exist in the team's work tracker. A forecasting spreadsheet or small script takes a day to build, and a forecast takes minutes to update. The recurring cost is the time to log forecasts and results, and to hold a short checkpoint conversation with stakeholders.

The return comes from fewer surprises and better decisions. Stakeholders who understand the risk can choose a buffer, adjust scope, or reorder work early. Teams spend less time on estimating ceremonies if counting items serves as well. Missed-date conflicts and the quality shortcuts they provoke fall. Build the case from your own record: the share of forecasts that held, the time spent estimating, and the scope changes made early rather than late. Do not borrow predictability figures from other organizations.

## Anti-patterns and pitfalls

- **Treating a forecast as a commitment.** It turns the forecast into a target, and honesty becomes costly. Present ranges and revise them.
- **Comparing teams by velocity.** Points are local, and comparison inflates them. Compare a team only with its own past.
- **Planning at full utilization.** Variation turns into delay. Leave slack.
- **Ignoring operational work.** Plans fail on the load nobody planned for. Measure and plan the allocation.
- **Using a single date for everything.** Use percentiles and say which one you chose.
- **Estimating more precisely than the data supports.** Detailed estimates for far-off work are the least reliable. Forecast far-off work coarsely.
- **Setting a velocity or throughput target.** The number will rise and the value will not.
- **Never scoring forecasts.** Without a track record, trust cannot grow.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Forecasting method | Single-date guesses | Estimates summed by hand | Flow-based ranges with percentiles | Forecasts logged and scored; method tuned from hit rate | Forecasts combine across teams and dependencies, shared with stakeholders live |
| Capacity planning | Plans ignore operational work | Operational load known roughly | Capacity allocated by work type from data | Allocation reviewed against outcomes; improvement time protected | Capacity planned jointly with suppliers and operations across services |
| Goals and use of numbers | Goals are task lists | Goals written down | Goals judged by outcome with stakeholders | Misses analyzed as system signals; local numbers kept private | Goals set and judged collaboratively with users; learning shared across teams |

## Checklist

- [ ] Forecasts are built from the team's own throughput and cycle time history.
- [ ] Forecasts are given as ranges with percentiles, with assumptions stated.
- [ ] Every forecast is logged with its range and actual result.
- [ ] Forecast hit rate and range width are reviewed monthly.
- [ ] Capacity is allocated by work type, including operational work and improvement.
- [ ] Planned utilization leaves slack for variation and incidents.
- [ ] Any sizing unit or velocity is private to the team and carries no target.
- [ ] Delivery goals are written as outcomes and judged with stakeholders.
- [ ] Scope changes are recorded with reasons.
- [ ] Forecasts are refreshed when facts change, and stakeholders are told.

## AI prompts

**Build a throughput-based forecast.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Review how we use estimates.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Plan capacity across change and run work.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Draft a forecast review with stakeholders.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a forecasting or planning metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised planning metric entry keeps its gaming vector and guardrail.

## Key takeaways

- Forecast from the flow of finished work, and give ranges with probabilities instead of single dates.
- Plan against real capacity, including operational work, improvement time, and slack.
- Treat any estimating unit or velocity as a private aid for one team, never as a target or a comparison.
- Score your forecasts: the hit rate builds trust.
- Judge delivery goals by outcome, together with stakeholders and users.
- Trust and support the team: honest forecasts come from people who are not punished for uncertainty.

## References and further reading

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
