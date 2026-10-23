# Team health and developer experience

**Teams do their best work when feedback is fast, the load on their minds is manageable, and they can find long stretches of focus, so measure those conditions with the team, remove the obstacles they reveal, and never use the numbers to rank the people.**

## Overview and motivation

The Agile Manifesto's principles ask us to build projects around motivated individuals, give them the environment and support they need, and trust them to get the job done. They also ask that sponsors, developers, and users be able to maintain a constant pace indefinitely, and that the team reflect regularly on how to become more effective. Team health and developer experience measures are how those principles become checkable. They ask what it is like to do the work here, and what stands in the way.

[Developer experience](https://en.wikipedia.org/wiki/Developer_experience) is the sum of the interactions developers have with the tools, processes, and people they work with. The idea is wider than software engineering. Operators, service desk staff, analysts, and anyone else who builds or runs a service has an experience of their environment. This topic uses "developer experience" for the engineers and "team health" for the broader group, and the same measures apply to both.

Two research frameworks are widely cited. The SPACE framework, published by Nicole Forsgren and colleagues in 2021, argues that developer [productivity](https://en.wikipedia.org/wiki/Productivity) cannot be reduced to one number, and proposes five dimensions: satisfaction and well-being, performance, activity, communication and collaboration, and efficiency and flow. A 2023 follow-up by Abi Noda, Margaret-Anne Storey, Nicole Forsgren, and Michaela Greiler, titled "DevEx: What Actually Drives Productivity," focuses on three dimensions that developers can feel and organisations can change: feedback loops, cognitive load, and flow state. Both papers recommend combining survey data about perceptions with data from systems about workflows, and both warn against using any single measure, especially an activity count, as a proxy for productivity.

The three DevEx dimensions are a practical starting point.

- **Feedback loops.** How quickly does a person learn the result of what they did? Slow builds, slow tests, slow reviews, and slow approvals each add waiting, and waiting breaks concentration. Fast feedback is also a core support for continuous delivery.
- **[Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).** How much does a person have to hold in mind to get something done? Complicated systems, poor documentation, unclear ownership, and many tools raise the load. Reducing it frees capacity for the work that matters.
- **[Flow state](https://en.wikipedia.org/wiki/Flow_(psychology)).** Can a person find uninterrupted stretches in which to concentrate? Meetings, notifications, unplanned requests, and context switching all erode it.

Measures in this area are unusually easy to misuse. Counts of commits, pull requests, tickets closed, or hours online are activity measures. They are easy to collect and tell you little about whether people can do good work, and they invite gaming. Measures of perception are subjective and valuable, and they can be distorted if people fear the consequences of an honest answer. Any measure of people can slide into surveillance. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies with an ethical edge: when a measure of people becomes a target, people stop telling the truth about their work (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic builds on the experience of internal users described earlier (see topic 6.4, User and employee experience) and continues in the next topics on well-being, collaboration, skills, and improvement.

## Key principles

- **Measure the conditions, not the people.** Ask about the environment and its obstacles, and report at team level.
- **Combine perception with workflow data.** What people feel and what systems record each miss part of the picture.
- **Let the team own its health check.** The people closest to the work choose the questions and read the results first.
- **Never use these measures to rank or evaluate individuals.** That would end honest answers.
- **Avoid activity counts as productivity.** Counts of commits, tickets, or hours are not outcomes.
- **Act visibly on what you hear.** Fix the obstacle, or say why not.
- **Protect a sustainable pace.** A team that runs hot indefinitely is borrowing from its future.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Feedback loop time | Time for a person to get the result of a common action, by loop type | median and 85th percentile of minutes or hours for build, test run, code review wait, and deployment, per team | minutes or hours | Pipeline and review tool timestamps, aggregated by team | Release and deployment management; continual improvement | Fast feedback in continuous delivery | Weekly |
| Focus time share | Share of working time in uninterrupted blocks of an agreed minimum length, as reported by the team | team-reported hours in focus blocks / working hours, collected in a short pulse | percent | Team pulse; calendar data only if the team opts in and it is aggregated | Continual improvement; knowledge management | Protected time for deep work | Monthly |
| Cognitive load rating | Team rating of how hard it is to understand and change a named system or process | mean rating and spread on a short agreed scale, per system | scale points | Short pulse linked to a system or process | Service design; knowledge management | Shared understanding of the work | Quarterly |
| Obstacle resolution time | Time from an obstacle being raised by the team to its removal or a recorded decision not to remove it | median and 85th percentile of days from raised to resolved or decided | days | Impediment list or tracker | Continual improvement; problem management | Impediments removed | Monthly |
| Team health check trend | Team's own rating on dimensions it chose, tracked over time | change in team-chosen dimension ratings between checks | scale points | Team health check, owned by the team | Continual improvement | Team reflection on how to become more effective | Monthly or quarterly |
| Tool and process satisfaction | Team rating of satisfaction with the tools and processes they use daily | mean rating or share favourable for each named tool or process | scale points or percent | Short pulse | Service level management; continual improvement | Fit of the environment to the work | Quarterly |
| Dimension coverage | Number of SPACE dimensions covered by the measures a team actually uses | count of the five dimensions with at least one measure in use | count (0 to 5) | Metric register | Measurement and reporting; governance | Balanced measures | Annual |

Aggregate everything at team level and set a minimum group size, for example no result for a group smaller than five people. Focus time is the team's own description, and any calendar-derived figure is optional, aggregated, and agreed by the team. Feedback loop times come from systems and describe the pipeline, not people. Dimension coverage is a check on the measurement programme, intended to prevent reliance on a single kind of measure.

## Recommendations

### Start with the conditions people work in

**1. Ask the team what slows them down.** Begin with a conversation, not a survey: what wastes your time, what is hard to understand, and what interrupts you most? Write down the answers in the team's words. The conversation finds problems that no dashboard would, and it builds the trust that later surveys need. Agree which two or three to measure.

**2. Use the three DevEx dimensions as a lens.** For each of feedback loops, cognitive load, and flow state, choose one perception question and, where possible, one system measure. For feedback loops, pair "how satisfied are you with how long builds take?" with the build duration. For cognitive load, ask how hard it is to understand and change a named system. For flow, ask how often people can work without interruption. Pair what people say with what systems record, and look at disagreements.

**3. Cover several dimensions of SPACE.** Choose measures from at least three of the five dimensions so that no single kind of data dominates. Satisfaction and well-being, collaboration, and efficiency and flow often matter most to a team that runs services. Treat activity measures with great care, and use them only as context. The dimension coverage measure keeps this honest.

### Measure with care

**4. Let the team own and read its health check first.** A team health check is a short self-assessment on dimensions the team chooses, such as fun, support, speed, learning, and ease of release. The team reads and discusses its own results before anyone else sees a summary. Others see trends and the obstacles the team asks for help with, not scores to compare. This keeps the tool a learning aid, and it depends on [psychological safety](https://en.wikipedia.org/wiki/Psychological_safety), the shared belief that people will not be punished for speaking up.

**5. Time the feedback loops that matter.** Measure the duration of the loops people complain about: local build, test suite, code review wait, deployment to a test environment. Report median and 85th percentile, since a slow tail hurts more than the average suggests. Share the numbers with the team that owns the pipeline, and set improvement as a regular piece of work (see topic 2.7, Pull request and code review metrics).

**6. Protect focus, and measure it gently.** Ask about focus in the pulse, and look at what causes interruptions: meeting load, notifications, unplanned requests. If a team wishes to look at calendar patterns, do it with their agreement and aggregate the results. Never track individuals' activity or presence. The aim is to find structural interruptions to remove, such as a meeting that could be a document.

**7. Track obstacles to resolution.** Keep a visible list of obstacles the team has raised, and measure how long they take to be resolved or consciously set aside. A long list that never shrinks teaches people that raising problems is pointless. The decision not to remove an obstacle, with a reason, counts as a resolution.

### Use the results to improve

**8. Act on one or two things at a time.** Choose the highest-value obstacle, fix it, and tell the team. Visible action does more for trust than a long report. Resist the temptation to launch many initiatives at once.

**9. Pair people measures with outcome measures.** Look at how feedback loops and cognitive load relate to delivery and stability outcomes (see topic 2.8, DORA metrics). Do not claim causation from correlation in your own data. Use the pairing to find questions to explore, such as whether teams with slower reviews also have longer cycle times.

**10. Keep activity counts out of the conversation.** Do not report commits, lines of code, or tickets closed per person. Counts of team outputs can be useful for flow, but they say little about health. If someone asks for individual activity metrics, explain the research and offer measures of conditions instead.

### Protect people

**11. Set privacy rules before you collect.** Write down what is collected, why, who sees it, how long it is kept, and what will never be done with it. Aggregate to team level, suppress small groups, and let representatives of the people involved review the rules. Do not use any of this data in performance reviews, promotion, or discipline.

**12. Make a sustainable pace the default.** Watch for signs that a team runs hot: a long run of out-of-hours incidents, a permanent state of urgency, rising obstacle lists, falling satisfaction. Treat these as system problems to fix with scope, staffing, or priorities. A constant pace that people can keep up is a design goal, and it supports quality, learning, and retention (see topic 9.2, Satisfaction and well-being metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Feedback loop time | Excluding slow cases; measuring a fast path that most work does not take | Report 85th percentile; define each loop's start and end in the register |
| Focus time share | Blocking calendar time without focusing; reporting inflated focus to please managers | Team-owned pulse; compare with interruption causes; no individual reporting |
| Cognitive load rating | Rating systems low to avoid scrutiny; picking easy systems to rate | Rate a fixed list of systems; compare with onboarding time and incident patterns |
| Obstacle resolution time | Closing obstacles without fixing them; refusing to log obstacles | Team confirms resolution; rate of reopened obstacles |
| Team health check trend | Managers pressing for good scores; teams adjusting scores to avoid attention | Team owns results; trends shared only with team consent |
| Tool and process satisfaction | Surveying happy users; training staff to answer well | Response rate and mix; read comments; tie to system measures |
| Dimension coverage | Counting a dimension with a token measure | Check that each counted measure is used in a decision |

A healthy reading is shorter and steadier feedback loops, a falling cognitive load on key systems, teams that report real focus, obstacles that are raised and resolved, health checks the team trusts, and no use of the data on individuals.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Perception surveys | Capture what systems cannot; low cost | Subjective; vulnerable to fear and fatigue |
| Workflow measures | Objective; continuous | Miss feelings and causes; risk of surveillance |
| Team-owned health check | Honest and useful to the team | Hard to compare; hard to scale |
| Standard company-wide survey | Comparable across teams | Less relevant; used to rank |
| Activity counts | Easy to collect | Poor proxies; easily gamed |
| Condition-focused measures | Point to fixable causes | Need follow-up effort |
| Frequent pulses | Timely | Survey fatigue |
| Annual survey | Low burden | Slow; stale |

The prose answer is to combine team-owned health checks and short pulses with workflow measures of the loops people complain about, avoid activity counts, and guard privacy. Use company-wide comparisons sparingly, and never to rank teams.

## Questions to discuss with your team

**1. What is the slowest feedback loop in our working day, and how long does it actually take?**
Pick the loop people complain about most. Time it from the systems and compare with what people say. The facilitator should note surprises, in either direction. Agree one change that would shorten it, and who owns it.

**2. Which system do we dread changing, and what makes it hard?**
Name the system. Is the difficulty in the code, the documentation, the tools, or the knowledge in a few heads? Ask what one improvement would lower the load most. Plan how to know whether it worked.

**3. When did each of us last have a long block of uninterrupted time, and what interrupted the ones that failed?**
Share honestly and without blame. List the interruptions and sort them into structural (meetings, notifications, unplanned requests) and incidental. Choose one structural interruption to reduce.

**4. Which obstacle have we raised more than once without a result?**
Look at the obstacle list. For each long-standing item, ask who could resolve it and what is blocking them. If the team has stopped raising obstacles, discuss why. Agree one to escalate with evidence.

**5. What would make us hesitate to give an honest health check answer?**
Discuss fears about how results might be used. The facilitator should record concerns and agree rules: who sees the data, what will never be done with it. If the rules are not trusted, say so, and decide what would earn trust.

**6. Which of our measures could go up while the work gets worse?**
List the measures and think of ways each could be improved without helping anyone. Assign a guardrail to each. Remove any measure that has no use in a decision.

## Four perspectives

### Product and delivery teams

Delivery teams know best what slows them and are the owners of their own health check. They should name obstacles, time the loops they control, and decide with the team what to fix first. They should resist pressure to report individual activity and insist on team-level measures.

### Service and operations teams

Operations teams carry on-call, interrupts, and unplanned work that erode focus and pace. They should raise structural load as a system problem, measure the loops of their own tools, and keep a sustainable rotation. They benefit from shared obstacle lists with delivery teams, since many obstacles cross the boundary.

### Leadership and governance

Leaders set the conditions and decide how data is used. They should fund the fixes that conditions measures reveal, protect the privacy rules, and ask for trends and obstacles in place of scores to compare. Governance should treat a request for individual activity metrics as a reason to revisit the rules, and should expect improvement work to be visible.

### Customers and users

Users benefit from teams that can work calmly and learn quickly, because their problems get solved well. They also notice when a team is overwhelmed: slower answers, repeated mistakes, high turnover. Their feedback is evidence about team health from the outside, and they deserve honesty about how fixes are prioritised.

## In practice: a service management example

A national insurer's technology group has 14 teams that build and run policy and claims services. Leadership asks for a developer productivity dashboard. The first request is for commits and tickets closed per person. The head of engineering effectiveness proposes a different approach. The numbers below are illustrative.

She starts with conversations in five teams. Three obstacles come up repeatedly: the test suite takes 70 minutes, code reviews wait for a long time on teams that depend on two senior reviewers, and nobody feels able to change the legacy claims calculation service. She measures what she can from systems. The median build-and-test loop is 58 minutes with an 85th percentile of 92. The median wait for first review is 9 working hours and the 85th percentile is 31 hours. She adds a short quarterly pulse with the three DevEx questions, with a minimum reporting group of five. The cognitive load rating for the claims calculation service is 4.4 on a five-point scale where 5 is very hard, against 2.6 for the policy portal. Focus time reported by teams is about 3 hours a day, with meetings and unplanned requests the main causes. Each team runs its own health check on dimensions it chose, and only reads the combined trend.

The group agrees four actions with the teams. The test suite is split and parallelised, and the 85th percentile falls from 92 to 41 minutes within two months. A review rota spreads the load beyond the two senior reviewers, and the 85th percentile wait falls to 14 hours. Three teams agree to a weekly block with no meetings, and one team reworks how unplanned requests reach it. The claims calculation service becomes a shared learning project, with pairing and documentation, and its cognitive load rating falls to 3.5 over two quarters. Reported focus time rises to about 4 hours.

When a senior manager asks again for individual commit counts, the head of engineering effectiveness explains the SPACE and DevEx research and offers the conditions dashboard. The decision is recorded, with the privacy rules that say individual activity will never be used in reviews. One team asks for its health check results not to be summarised for leadership this quarter, and the request is granted. Attrition in the teams involved falls over the next year, and she notes that she cannot prove the connection and will not claim it.

## Agile, AI, automation, and analytics

### Agile

Measure conditions such as feedback loops and focus time with the team, and remove the obstacles they reveal. The caution is that using the numbers to rank people destroys the data.

### AI

AI coding and writing assistants change feedback loops and cognitive load, for better or worse. Ask the team about benefit and burden, and pair usage with rework and well-being. The caution is that usage statistics reported per person turn into surveillance.

### Automation

Automate collection of build, test, and review times, and measure the toolchain on slowness and failures. The caution is that fast tools can still hide a slow organisation, so combine data with team conversation.

### Analytics

Show trends by team with the number of responses, and set a minimum group size. The decision informed is which obstacle to remove next. The caution is that small teams cannot be anonymous.

## Sector lens

**Startup.** Everyone knows everyone, so conversations beat surveys. Time the main feedback loops, keep builds fast, and watch for signs of unsustainable pace, because a few people carry a lot. Do not import a large survey programme.

**Small business.** A small team may be one or two people who both build and support. Their main risk is interruption and dependence on individuals. Keep a simple obstacle list, ensure cover for absence, and ask each other regularly what is getting in the way. Individual-level data is inherently identifying, so rely on conversation.

**Enterprise.** Scale gives variety and comparison temptations. Provide a common toolkit (pulse questions, loop timings) while letting teams own their health checks. Aggregate carefully, share patterns across teams to spread fixes, and keep rankings out. Involve works councils or employee representatives where they exist.

**Government and public sector.** Procurement, security rules, and approval chains lengthen feedback loops, and staff may have strong protections on monitoring. Measure the loops, involve representatives in setting the data rules, and use findings to simplify processes. Public servants motivated by service value benefit from visible obstacle removal (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the time of teams for health checks and pulses, a little instrumentation of pipelines and review tools, an analyst or coach to help interpret results and facilitate, and the engineering time to remove obstacles. Most of these costs are small compared with the cost of slow loops multiplied across many people.

The return comes from time recovered, less rework, better retention, and faster learning. Estimate it from your own data: the hours per week lost to waiting for builds and reviews across the group, the cost of hiring and onboarding to replace people who leave, and the incident or defect patterns linked to overloaded teams. Be cautious in turning minutes into money, and state the assumptions. Avoid claims from published studies about productivity gains unless you can trace their method and fit. Remember the cost of getting it wrong: a programme seen as surveillance damages trust and the quality of every later survey (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Individual productivity dashboards.** They measure activity, invite gaming, and damage trust. Measure conditions at team level.
- **Using health check scores to compare teams.** Teams then manage the score. Let teams own their results.
- **Surveys without action.** People stop answering. Fix something visible each cycle.
- **Measuring time online or presence.** It rewards visibility and punishes focus. Measure loops and obstacles.
- **One measure for everything.** It misses most of the picture. Cover several dimensions.
- **Ignoring the tail.** Medians hide the slow loops that hurt. Report percentiles.
- **Blaming people for system problems.** Obstacles are usually structural. Fix the structure.
- **Running hot as normal.** Permanent urgency burns people out. Treat sustained overload as a failure of planning.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Understanding conditions | Anecdote | Occasional survey | Regular conversations and pulses on feedback loops, load, and flow | Perception and workflow data combined, with team-level trends | Shared view of conditions across teams and suppliers; teams co-design measures |
| Ownership and ethics | Management reads everything | Informal care | Team-owned health checks; written privacy rules | Rules reviewed with representatives; no individual use enforced | Rules and practices audited independently; teams control data sharing |
| Action | Complaints unaddressed | Ad hoc fixes | Obstacle list with owners; one or two fixes per cycle | Fixes tracked and linked to outcomes; sustainable pace monitored | Obstacle removal built into planning; learning shared widely |

## Checklist

- [ ] Teams have said in their own words what slows them down.
- [ ] At least one perception question and one system measure cover each of feedback loops, cognitive load, and flow.
- [ ] Measures come from at least three SPACE dimensions.
- [ ] Each team owns its health check and reads the results first.
- [ ] Feedback loop times are reported as median and 85th percentile.
- [ ] A visible obstacle list has owners, and resolution time is tracked.
- [ ] Results are reported at team level with a minimum group size.
- [ ] Written privacy rules state that individual data will not be used in reviews.
- [ ] Activity counts are not reported as productivity.
- [ ] The team sees at least one fix per cycle.

## AI prompts

**Draft pulse questions for the three DevEx dimensions.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Analyze obstacle list patterns.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitised]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Write privacy rules for a team health program.**

```text
Draft a one-page set of rules for a team health and developer experience
programme in [type of organisation]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Compare conditions with outcomes.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a team health or developer experience metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a people-related metric entry carries its gaming vector, guardrail, and privacy rules.

## Key takeaways

- Measure the conditions people work in: feedback loops, cognitive load, and flow.
- Combine what people say with what systems record, and look at the disagreements.
- Let teams own their health checks, report at team level, and never use the data on individuals.
- Avoid activity counts as a stand-in for productivity.
- Act visibly on one or two obstacles at a time, and track how long obstacles take to resolve.
- Protect a pace the team can sustain indefinitely.

## References and further reading

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
