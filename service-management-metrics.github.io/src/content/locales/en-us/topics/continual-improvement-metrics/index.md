# Continual improvement metrics

**Improvement is a habit of noticing, trying, and checking, so measure whether ideas turn into changes, whether changes are checked for effect, and whether the same problems keep returning, and keep the work in the hands of the people who do it.**

## Overview and motivation

One of the Agile Manifesto's principles says that at regular intervals the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. ITIL expresses the same conviction in its guiding principles and its continual improvement practice: services and the way they are run should be improved all the time, in small steps, based on evidence. Both ask for the same thing, which is a standing habit of improvement and not an occasional program.

Most organizations believe they do this. Many have a retrospective-style meeting that generates a list of actions, a register of improvement ideas, or an annual improvement plan. The common failure is that the list grows and little happens. Actions are agreed in a meeting and forgotten. Improvements are made and never checked, so nobody knows whether they helped. The same problem returns under another name. Continual improvement metrics are the way to tell the difference between an organization that is improving and one that is only talking about it.

The [continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process) has deep roots in quality management. The [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA) cycle, associated with W. Edwards Deming and Walter Shewhart, describes improvement as repeated small experiments: plan a change, try it, check the result, and act on what you learn. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) is the Japanese term for continuous improvement of working practices, with the involvement of everyone. Both come from [lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing) and the Toyota Production System, and both are now standard vocabulary in service and software work. ITIL 4 offers a continual improvement model whose steps ask what the vision is, where you are now, where you want to be, how you will get there, to take action, whether you got there, and how to keep momentum. It is a prompt for conversation, not a procedure to follow mechanically.

A few ideas help.

- **Improve the constraint.** The [theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints), developed by Eliyahu Goldratt, says that the throughput of a system is limited by its slowest part, so improvements elsewhere add little. Find the constraint using the flow measures from earlier in the book, and improve that first (see topic 2.3, Work in process and queueing).
- **Find causes, not symptoms.** [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis) looks for the underlying causes of a problem so that fixing them stops its return. Overuse of simple methods can mislead when problems have several causes, so examine contributing factors.
- **Question the assumptions.** [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning), a term from Chris Argyris and Donald Schön, goes beyond fixing the action to examine the beliefs and rules that led to it. Teams that only fix symptoms (single-loop learning) tend to meet the same problems again.
- **Improvement needs capacity.** A team at full stretch has no room to improve. Protected capacity is a precondition, and a pace that can be sustained is part of what makes improvement possible (see topic 9.2, Satisfaction and well-being metrics).

Improvement metrics invite their own gaming. If the number of completed actions is a target, teams agree trivial actions. If savings from improvements are a target, claims inflate. If the number of ideas submitted is a target, ideas flood in and none are acted on. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies: measure whether improvements work, and not how busy the improvement program looks (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Improvement belongs to the people who do the work.** They see the problems and the possible fixes first.
- **Work in small steps and check each one.** Small experiments reduce risk and speed learning.
- **Measure follow-through and effect, not activity.** Actions completed and effects confirmed matter more than ideas generated.
- **Improve the constraint first.** Effort away from the bottleneck adds little.
- **Fix causes.** Look for contributing factors, and question the assumptions behind them.
- **Protect capacity for improvement.** It will not happen in spare time that does not exist.
- **Celebrate learning, including from failed experiments.** A tried idea that did not work is information.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Action follow-through rate | Share of improvement actions agreed in reviews that were completed by their agreed date | actions completed by date / actions due in the period | percent | Improvement register or team backlog | Continual improvement | Reflection actions delivered | Monthly |
| Improvement backlog age | Age of open improvement items, with attention to the oldest | median and 85th percentile age in days of open items; age of the oldest | days | Improvement register | Continual improvement | Backlog age | Monthly |
| Effect check rate | Share of completed improvements whose effect was checked against a baseline | completed improvements with a recorded before-and-after check / completed improvements | percent | Improvement register with baseline and result fields | Continual improvement; measurement and reporting | Learning from experiments | Quarterly |
| Time from idea to trial | Time from an improvement idea being raised to the first trial in the real work | median and 85th percentile of days from raised to first trial | days | Improvement register | Continual improvement | Fast feedback on changes | Monthly |
| Frontline idea share | Share of improvement ideas raised by people who do the work, counted at team level | ideas raised by team members doing the work / ideas raised | percent | Improvement register | Continual improvement | Self-organizing teams | Quarterly |
| Repeat issue rate | Share of issues that recur after an improvement intended to remove their cause | issues recurring within a stated period after a related improvement closed / improvements closed with a related cause | percent | Incident, problem, and improvement records linked by cause | Problem management; continual improvement | Escaped defect after a fix | Quarterly |
| Improvement capacity share | Share of team capacity spent on improvement work | capacity or completed items tagged as improvement / total capacity or completed items | percent | Work tracker work types | Continual improvement; capacity and performance management | Time for reflection and technical excellence | Monthly |

Define "improvement item" in the register and keep it separate from ordinary backlog work and from corrective repairs. The follow-through clock starts when the action is agreed with an owner and a date. An effect check requires a baseline recorded before the change and a defined indicator, and the result may be "no effect" or "cannot tell". Repeat issue rate depends on a recorded cause, and the matching rule is written in the register. All measures describe teams and the system, not individuals.

## Recommendations

### Make improvement visible and owned

**1. Keep one visible improvement list per team.** Put improvement items where the team already looks, such as its board or backlog, and tag them. Each item has an owner, a stated problem, an expected effect, an indicator, and a date. A list that lives in a separate tool or a document nobody opens will decay. Show the oldest items so the list cannot hide.

**2. Hold regular, short reflection.** At a steady cadence the team asks what is going well, what is getting in the way, and what to try next. Keep it short and specific, and end with a small number of actions that have owners. If your team chooses to use a named format for this, such as a retrospective, that is the team's choice. The principle is the regular habit.

**3. Agree fewer actions and finish them.** Two or three actions that are completed teach more than a dozen that are not. Check the follow-through rate. When actions repeatedly slip, ask why: unclear ownership, no capacity, or actions that were too large. Break large ones into small steps.

**4. Protect capacity.** Reserve a share of capacity for improvement, and plan it like any other work (see topic 2.5, Delivery forecasting and planning metrics). When the team is overloaded, reduce the intake of new work rather than cancel improvement, since improvement is often what reduces the overload. Track the share used.

### Find what matters

**5. Look for the constraint.** Use flow data to find where work waits and what limits throughput. Improvements at the constraint raise the output of the whole system. Improvements elsewhere may only move the pile of work. Apply the same view to incident handling, change approval, and request fulfillment.

**6. Use evidence to choose.** Choose improvements from data and from the people closest to the pain: repeat incidents, long waits, rework, user complaints, obstacle lists. Link each improvement to a recorded problem. This ties the improvement register to problem management (see topic 4.1, Problem management metrics).

**7. Look for causes and contributing factors.** For recurring problems, ask more than once why, and look for conditions as well as triggers. Be wary of stopping at the first plausible cause, or at a person. Question assumptions: why do we work this way, and is the rule still needed? That is where double-loop learning pays.

### Try small, then check

**8. Run small experiments with a baseline.** State the change, the expected effect, and the indicator. Record the baseline before the change. Try it on a small scale for a short period, then compare. The Plan-Do-Check-Act cycle is a simple frame. The shorter the time from idea to trial, the faster the learning.

**9. Check the effect and record it honestly.** After a change, compare the indicator with the baseline and with what else changed. Record whether the effect was seen, not seen, or unclear. Teams that never find "no effect" are probably not checking carefully (see topic 6.5, Value realization and business outcomes).

**10. Keep what works and drop what does not.** Spread improvements that work to other teams where they fit, and retire changes that added cost without benefit. Revisit older changes, since conditions change. Standards should evolve as the team learns.

### Keep the habit alive

**11. Make it safe to suggest and to stop.** People raise ideas when earlier ones were heard and acted on. They stay quiet when ideas vanish or bring extra work for the proposer. Respond to every idea, even if the answer is "not now," with a reason. Allow teams to stop improvements that are not working.

**12. Do not turn improvement into a target.** Do not set targets for the number of ideas, the number of actions closed, or the savings claimed. Report the follow-through, the effect checks, the repeat rate, and some stories. Compare each team with its own past, and share good ideas across teams without ranking them.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Action follow-through rate | Agreeing trivial actions; moving due dates; closing without doing | Review the size and value of actions; date changes logged; effect check rate |
| Improvement backlog age | Closing old items as "won't do" without a decision; splitting items to reset age | Record reasons for closure; track items closed without action; review the oldest |
| Effect check rate | Recording a check with no baseline; checking only successes | Baseline dated before the change; include null and negative results |
| Time from idea to trial | Calling a plan a trial; trialing trivial variations | Define a trial as a change in the real work; look at the importance of trialed ideas |
| Frontline idea share | Managers filing ideas under staff names; mandatory idea quotas | Ideas by author recorded at team level; no quotas; ask the team |
| Repeat issue rate | Recording different causes for the same problem; closing the earlier record under another type | Match by cause with a recorded rule; review by someone outside the team |
| Improvement capacity share | Tagging ordinary work as improvement; scheduling time that is then used for delivery | Sample items for type; compare with time actually spent |

A healthy reading is a short list with actions that finish, ideas that reach trial within days or weeks, effects that are checked and sometimes disappointing, falling repeat issues, and protected capacity that is used.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Large improvement programs | Visible; can tackle big issues | Slow; disconnected from daily work |
| Small continuous experiments | Fast learning, low risk | May miss structural problems |
| Central improvement team | Skill and consistency | Far from the work; ideas stall |
| Team-owned improvement | Relevant and motivated | Variable quality; needs support |
| Idea schemes with rewards | Generate volume | Quotas and gaming; low quality |
| Evidence-based selection | Focuses on real problems | Needs data and time |
| Formal effect checks | Honest learning | Effort; can feel bureaucratic if heavy |
| No checks | Fast | No learning about what works |

The prose answer is to keep improvement close to the teams, in small experiments with light effect checks, supported by a few people who help with data and method, and by leaders who protect capacity and listen to the results.

## Questions to discuss with your team

**1. What improvement did we agree in our last review, and did it happen?**
Look at the actions. For each, ask whether it was completed, abandoned, or forgotten, and why. The facilitator should note the reasons. Agree how many actions the team can really finish, and cut the next list to that.

**2. Which change we made lately do we know helped, and how do we know?**
Pick a recent change and look for the baseline and the result. If there is none, discuss how to check next time. Decide on a simple indicator for the next experiment.

**3. What keeps coming back no matter how many times we fix it?**
List recurring issues. For one, ask why it returns and what assumption sits behind the current approach. Consider whether the fix treats a symptom. Choose one recurring issue for a deeper look.

**4. Where does work wait the longest, and what is the constraint?**
Use flow data. Ask whether the improvements the team is working on touch the constraint. If not, discuss whether to change focus.

**5. How much of our week goes to improvement, and what protects it?**
Compare the plan with reality. Discuss what takes the time. Agree a rule for protecting a small share, and what to cut if the team is overloaded.

**6. What happened to the last idea someone suggested, and how did they hear about it?**
Trace one idea. Was it answered, tried, or lost? Discuss how to make sure each idea gets a response and a reason.

## Four perspectives

### Product and delivery teams

Delivery teams are the main source of improvement ideas and the best judges of whether they work. They should keep a visible list, finish a few actions each cycle, check effects, and share what they learn. They need protected capacity and leaders who respond.

### Service and operations teams

Operations teams see repeat incidents, slow approvals, and manual toil every day. They should link improvements to recorded problems, track repeat issues, and make time for fixes that reduce their own load. Their feedback shows whether improvements reach the user.

### Leadership and governance

Leaders create the conditions: protected capacity, safety to suggest and to stop, and attention to results. They should ask for follow-through and effect checks, accept honest "no effect" findings, avoid quotas, and fund improvements that need investment. Governance should look at the improvement register across teams for patterns that need structural action.

### Customers and users

Users benefit from services that keep getting better, and they are a rich source of ideas. They should be asked, told what changed, and invited to check the effect. Repeated complaints about the same issue are a signal that improvement is not reaching the cause.

## In practice: a service management example

A national tax agency's digital services group runs a filing portal, a payments system, and a contact center platform with eight teams. Each team keeps an improvement list, and the group reports the number of improvements completed each quarter. The numbers below are illustrative.

The head of service improvement notices that the reported number rises while the same pain points persist. She reviews the lists. Across the group, 212 improvement items are open, with a median age of 7 months and the oldest at 26 months. Of the actions agreed in the last quarter's reviews, 38 percent were completed by their date. Of the 64 improvements completed last year, only 9 had a recorded baseline and result, an effect check rate of 14 percent, and 3 of those 9 showed no effect. Repeat issues are common: of 25 incidents linked to improvements intended to remove their cause, 11 recurred within six months, a repeat rate of 44 percent. Improvement work takes about 4 percent of capacity.

The group agrees four changes with the teams. Each team trims its list to the items it can address in the next two months and states why it is parking or closing the rest. Teams agree no more than three actions at a time, with named owners. For each improvement, a baseline and an indicator are recorded before the change, and the result is recorded after, including "no effect." A quarterly review looks at the recurring problems across teams and picks two for a deeper cause analysis, with the contact center and payments teams investigating a shared cause together. Each team reserves 10 percent of capacity for improvement, protected by a rule that cancellation needs the team lead's agreement and a log entry. The report to leaders changes from the number of improvements completed to follow-through, effect checks, and repeat issues.

After two quarters, open items fall to 74 with a median age of 2 months. Follow-through rises to 81 percent, the effect check rate to 70 percent, with 9 of 36 checked improvements showing no effect and being dropped. The repeat issue rate falls to 20 percent, and time from idea to trial has a median of 9 days. The deputy director asks for a target of 100 completed improvements per quarter. The head of service improvement explains that the count was the reason the earlier numbers misled, and proposes to track follow-through, effect, and repeat rate. The decision is recorded, and one team's request to run a four-week experiment on its approval process is approved.

## Agile, AI, automation, and analytics

### Agile

Keep improvement in the hands of the people who do the work and review actions at a regular cadence. The caution is that a target for number of improvements encourages trivial ones.

### AI

AI can suggest improvements from tickets and incidents. Track the share of suggestions that a team tried and the effect check result. The caution is that an AI-generated backlog of ideas can overload the team, so limit work in progress.

### Automation

Automate reminders and tracking of improvement actions, and measure effect check rate. The caution is that automation that nags without agreed ownership is ignored.

### Analytics

Report effect check rate and repeat issue rate with counts. The decision informed is which improvements worked. The caution is that effects are hard to attribute, so describe uncertainty.

## Sector lens

**Startup.** Improvement happens constantly and informally. Keep a short list, write down expected effects and check them, and protect a small slice of time. Avoid heavy process, and watch for improvement being crowded out entirely by growth.

**Small business.** One or two people do everything, and improvement competes with firefighting. Pick one recurring problem each quarter, fix its cause, and check the effect. Ask users what annoys them and act on one thing.

**Enterprise.** Scale makes improvement uneven and ideas hard to share. Provide a common register format and light coaching, let teams own their lists, and use a cross-team forum to spread what works and to tackle shared constraints. Avoid central quotas.

**Government and public sector.** Improvement may be constrained by procurement, legislation, and approval chains, and it is scrutinized publicly. Document experiments and their results, involve users in choosing and checking improvements, and report honestly on effects, including those that did not work. Look for improvements that remove burden from citizens (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are protected capacity, which is the main cost, the effort to record baselines and results, and some coaching or facilitation. Tools can be as simple as the team's existing board.

The returns are fewer repeated problems, lower toil, shorter waits, and better morale in teams that see their ideas turn into change. Build the case from your own data: the cost of recurring incidents and the share removed by improvements, time saved by improvements with checked effects, and the cost of improvements that were made and did not work, which checking now prevents repeating. Avoid citing published returns on improvement programs unless you can trace their source and method. Count the opportunity cost of capacity as well (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Counting improvements completed.** Teams agree trivial changes. Measure follow-through and effect.
- **Idea quotas.** They generate volume and noise. Respond to the ideas that come.
- **No baselines.** Nobody knows whether anything helped. Record before and after.
- **Only successes recorded.** Learning from failure is lost. Record null results.
- **Long lists with no pruning.** The list loses credibility. Trim to what the team will do.
- **Improvement in spare time.** There is none. Protect capacity.
- **Fixing symptoms.** The problem returns. Ask why more than once, and question assumptions.
- **Improvement by a distant team.** Ideas stall. Keep it with the people who do the work.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Habit and ownership | Improvement is occasional | Reflection happens; actions often lost | Visible team list with owners; small number of actions finished | Follow-through and idea-to-trial time managed; capacity protected | Improvement is routine and shared across teams, suppliers, and users |
| Evidence and effect | Opinions | Some measures after changes | Baseline and result recorded for each improvement | Effect checks include null results; repeat issues tracked by cause | Portfolio-level learning guides where to improve next, with partners |
| Depth | Fixes to symptoms | Some cause analysis | Cause analysis for recurring issues | Constraints identified from flow data; assumptions questioned | Systemic improvements across the value stream, with shared governance |

## Checklist

- [ ] Each team has one visible improvement list with owners, expected effects, and dates.
- [ ] Regular, short reflection ends with a small number of owned actions.
- [ ] Action follow-through and the age of the oldest items are reviewed monthly.
- [ ] Capacity for improvement is planned, protected, and tracked.
- [ ] Improvements are linked to recorded problems or evidence.
- [ ] A baseline and indicator are recorded before each change.
- [ ] Effects are checked and recorded, including no effect.
- [ ] Repeat issues are tracked by cause after improvements.
- [ ] Every idea gets a response with a reason.
- [ ] There are no quotas or targets for ideas, actions, or savings.

## AI prompts

**Choose improvements from evidence.**

```text
Here are our recurring problems and obstacles with rough counts and impact:
[paste]. Here is our flow data on where work waits: [paste]. Suggest which two
or three improvements are most likely to matter, why, and what evidence would
confirm or contradict that. Recommend a small experiment for each, with a
baseline and an indicator. Do not invent figures. List your assumptions.
```

**Design a small experiment.**

```text
We want to try [change] to address [problem] in [team and process]. Design a
small experiment: the expected effect, the baseline to record now, the
indicator and how to measure it, the trial period, how to tell whether other
changes confused the result, and what we will do if there is no effect. Keep it
light. List your assumptions and risks.
```

**Review an improvement list.**

```text
Here is our improvement list with age, owner, and expected effect for each item:
[paste]. Identify items that are too vague, too large, or stale, suggest a
shorter list the team could finish in two months, and propose a note to explain
the items we are parking and why. Do not judge individuals. List your
assumptions.
```

**Analyze a recurring problem.**

```text
Problem: [describe]. Past fixes and when it recurred: [paste]. Suggest
contributing factors beyond the first plausible cause, assumptions to question
(double-loop learning), and a few ways to test each hypothesis cheaply. Do not
assume a single root cause. List your assumptions and questions for the team.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an improvement metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an improvement metric entry measures follow-through and effect, with its gaming vector and guardrail.

## Key takeaways

- Keep one visible improvement list per team, with a few owned actions at a time, and finish them.
- Record a baseline before each change, check the effect afterwards, and record null results.
- Track follow-through, effect checks, repeat issues, and the age of the oldest items.
- Improve the constraint first, and look for causes and the assumptions behind them.
- Protect capacity for improvement inside a sustainable pace.
- Do not set quotas for ideas, actions, or savings.

## References and further reading

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
