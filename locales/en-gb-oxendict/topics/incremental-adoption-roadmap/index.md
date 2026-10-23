# An incremental adoption roadmap

**Start where you are, deliver something useful to one team in the first month, and grow the programme in small steps that each earn the right to the next.**

## Overview and motivation

Most guidance about metrics describes an end state: a full set of measures, a clean data store, a dashboard for every audience, a culture of evidence. Few organizations arrive there by plan. They arrive, when they do, by a series of small useful steps, each of which paid for itself before the next began. This topic offers a roadmap in that spirit: a first 30 days, a next 60, and a further 90, which together make roughly 180 days. The timings are a rough shape and not a promise. A small team may move faster, and a large or cautious one slower.

The logic is the same continuous delivery logic that the rest of the book recommends for services. Deliver a thin, working slice early. Put it in front of real users. Learn from what they do with it. Extend what helped, and drop what did not. A metrics programme that spends six months on design and launches a full dashboard to a surprised audience repeats the old mistake of the large release: much effort, late feedback, and a high chance that the result fits poorly. The idea of a [minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product), the smallest version of something that delivers value and generates learning, applies to a programme as well as to a product.

The agile aims shape the roadmap in several ways. Continuous stakeholder involvement means the first weeks are spent with the people who will use and be measured by the numbers, not in a back room. Continuous improvement means the plan itself is reviewed and changed as the programme learns, in the spirit of [kaizen](https://en.wikipedia.org/wiki/Kaizen), the practice of small, steady improvement by everyone. Ongoing evolution means that no list of measures is final. A sustainable pace means that the roadmap asks for a modest share of a team's time, and that the programme adds no reporting burden that outweighs its help. And building around motivated individuals means starting with volunteers and with the questions they care about.

The roadmap respects the other topics of this part. It assumes the ground rules of trust from the rollout topic (see topic 11.3, Rolling out metrics without breeding fear), it uses the dashboard principles (see topic 11.1, Designing a service metrics dashboard), it keeps tooling thin until value is proven (see topic 11.2, Tooling landscape), and it tracks progress with the programme's maturity profile (see topic 11.4, Maturity model for metrics programmes).

Three ideas help anchor the early work. First, start with a baseline. A [run chart](https://en.wikipedia.org/wiki/Run_chart) of a few months of existing data shows how things stand and gives later changes something to be compared against. Second, check [data quality](https://en.wikipedia.org/wiki/Data_quality) at the start, since the most valuable early improvements often come from fixing how work is recorded and not from any chart. Third, make results visible: an [information radiator](https://en.wikipedia.org/wiki/Information_radiator), a display that shows information at a glance without anyone asking, helps a team see its own data and start conversations. The first steps usually take the form of a [pilot project](https://en.wikipedia.org/wiki/Pilot_project) with willing participants, followed by spreading what worked as [change management](https://en.wikipedia.org/wiki/Change_management) in the wider organization (see topic 9.6, Organizational change and adoption metrics).

No roadmap fits every organization. The plan below is a starting point to be tailored by the people who will carry it out.

## Key principles

- **Start where you are.** Use the data, tools, and habits you have. Do not wait for a new platform.
- **Pilot with volunteers.** One to three willing teams, working on questions they care about.
- **Deliver value in the first month.** Something that helps a team, not a report for management.
- **One thin slice at a time.** One source, one view, a handful of measures, then extend.
- **Write the promises early.** A short charter before the first number is shared.
- **Review and adjust.** Check at the end of each stage what helped, what hurt, and what to change.
- **Stop things.** Retire measures and reports that no one uses as the new ones arrive.
- **Do not skip trust.** Moving quickly on tooling while leaving trust behind produces distortion.

## Metric definitions

The measures below track the progress of adoption itself. They are for the programme team and sponsors, and are read as signals, not targets. They avoid counts of dashboards or reports, which would reward activity.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Time to first useful result | Elapsed time from the start of the programme to the first measure that a pilot team says helped it make a change | days from kickoff to the first team-confirmed helpful use | days | Programme log; team confirmation | Continual improvement | Early and continuous delivery of value | Once, then per new team |
| Teams actively using measures | Share of invited teams that used their measures in a review in the period, by their own account | teams that used measures in a review / invited teams | percent | Team confirmation; review notes | Organizational change management | Continuous stakeholder involvement | Monthly |
| Improvements traced to measures | Number of changes teams made that they attribute, with reasons, to what a measure showed | count of team-reported changes with a stated link to a measure | count | Improvement register | Continual improvement | Evidence-informed experiments | Quarterly |
| Retired measures and reports | Measures or reports stopped because they stopped informing decisions | count retired per quarter | count | Catalogue change log | Continual improvement | Ongoing evolution | Quarterly |
| Baseline coverage | Share of agreed measures that have a recorded baseline of at least a few months | measures with a baseline / agreed measures | percent | Metric catalogue | Service level management; continual improvement | Evidence over opinion | Quarterly |
| Programme effort share | Share of participating teams' time spent on measurement tasks | hours on collection, reporting, and review / total team hours, by estimate | percent | Team time estimates | Continual improvement | Sustainable pace | Quarterly |
| Stage review completion | Share of planned stage reviews held with teams, with changes recorded | reviews held with recorded changes / reviews planned | percent | Programme records | Continual improvement | Regular reflection | Per stage |

Time to first useful result is measured by the pilot team's own account and not by the programme's. Teams actively using measures is counted by what teams say, and not by logins. Improvements traced to measures is a count of stated links and not a target, since a target would produce invented links. Programme effort share should stay small, and a rise is a warning.

## Recommendations

### Days 1 to 30: listen, agree, and deliver one useful thing

**1. Find a sponsor and a few volunteers.** Ask a senior leader to sponsor the programme and sign a short charter. Invite one to three teams that are curious and respected. Explain that the aim is to help them see their own work and improve it, and that the data will not be used to rank or assess individuals (see topic 11.3, Rolling out metrics without breeding fear).

**2. Ask the questions.** Meet each pilot team for an hour. Ask what slows them, what surprises them, and what they wish they knew. Write the questions down. Choose three to five measures from this book that speak to those questions, each with a companion guardrail (see topic 1.3, Outcomes over output: choosing what to measure).

**3. Look at the data you already have.** Pull a few months of history from the systems of record and plot run charts. Check data quality honestly: missing fields, changed categories, records created after the fact. Fix capture at the source where it is cheap. A simple spreadsheet is enough at this stage (see topic 1.5, Data sources and instrumentation).

**4. Deliver one useful thing.** By the end of the first month, give each pilot team a small view of its own data with a definition for each measure, and hold a review conversation. Look for one change that the data suggests, such as removing a waiting step, and help the team try it. The first useful result matters more than a polished tool.

### Days 31 to 90: learn, extend, and make it routine

**5. Hold the first review with the pilot teams.** Ask what helped, what confused, what felt risky, and what they would change. Revise the measures, the definitions, and the charter. Listen especially for signs of fear or gaming. Share a short story of what changed, told by the team.

**6. Automate the thin path.** Where manual work is heavy, automate the one or two feeds that matter most, with checks on freshness and reconciliation against the source. Keep definitions in a plain, portable catalogue. Do not buy a platform yet unless the trial has shown that existing tools cannot do the job (see topic 11.2, Tooling landscape).

**7. Establish a review rhythm.** Hold a short monthly review in each pilot team that looks at trends, records decisions, and notes events. Include a chance to say "no action." Add a quarterly look at the whole programme with sponsors, using aggregated views and team commentary.

**8. Invite the next wave.** Offer the approach to more teams, led by the pilot teams' stories. Let each new team choose its measures from a menu, with a small common core. Keep the pace sustainable: a few teams at a time, with support from the pilot teams and the programme lead.

### Days 91 to 180: strengthen, balance, and prepare to hand over

**9. Design the audience views.** With the audience, design the service owner and leadership views described in the dashboard topic, using shared definitions and the teams' commentary (see topic 11.1, Designing a service metrics dashboard). Keep each view small. Retire the older reports they replace.

**10. Add balance and outcomes.** Extend the pilot measures to a balanced set that includes quality, reliability, experience, and cost, with outcomes alongside activity (see topic 6.5, Value realization and business outcomes). Check each new measure for its gaming vector and guardrail before it is shown.

**11. Assess the programme.** Run the self-assessment from the maturity model topic with each participating team, report the profile and themes, and choose one or two next steps in the dimension that limits the others (see topic 11.4, Maturity model for metrics programmes). Count what you have retired as well as what you have added.

**12. Decide what comes next.** At the 180-day review, with teams and sponsors, decide whether to continue, adjust, or stop. Write down what the programme has done, at what effort, and what has changed in the services. Choose the next stage: more teams, deeper tooling, links to finance or customer measures, or consolidation. Record the decision and the reasons.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Time to first useful result | Declaring a trivial change useful; rushing a showpiece | Ask the team what changed; check that the change persisted |
| Teams actively using measures | Reviews held to tick a box; claiming use that did not happen | Ask for the decision made; sample review notes; talk with teams |
| Improvements traced to measures | Inventing links to reach a count; claiming credit for unrelated changes | Keep it descriptive; ask the team for the reasoning; accept uncertain links as such |
| Retired measures and reports | Retiring inconvenient measures; retiring and reintroducing under new names | Review the retired list for unfavourable trends; require a stated reason |
| Baseline coverage | Fabricating history; using a period that flatters later results | Record the source and period; keep raw data; choose baselines before changes |
| Programme effort share | Understating effort; moving work to people outside the count | Ask the people who do the work; compare with late-cycle overtime |
| Stage review completion | Short, perfunctory reviews; recording changes that never happen | Check that changes are carried out; ask teams if the review was worth their time |

A healthy reading shows a first useful result within the first month or two, teams that use measures because they find them helpful, a handful of attributed changes, retired reports alongside new ones, a modest and stable effort share, and stage reviews that lead to real changes in the plan.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Pilot with volunteers | Trust; real stories | Slower start; selection bias |
| Rollout to all teams together | Fast coverage | Resistance; distortion |
| Spreadsheets first | Quick; low cost; learning | Fragile; manual effort |
| Platform first | Polish; scale | Cost; weak fit before questions are clear |
| Few measures per team | Focus; low burden | May miss important areas |
| Many measures at once | Breadth | Overload; sprawl |
| Fixed 180-day plan | Clarity for sponsors | Rigid; ignores what is learned |
| Stage reviews that change the plan | Learning; fit | Less predictable for sponsors |

The prose answer is to start with volunteers and spreadsheets, extend as the value is shown, give sponsors a clear shape and review points, and allow the plan to change.

## Questions to discuss with your team

**1. What is one question we wish we could answer about our work this month?**
Collect questions from everyone. Pick the one that matters most and could be answered with data we already hold. Agree what a useful answer would look like.

**2. What do we already measure, and who looks at it?**
List existing reports and their audiences. Mark those nobody uses. Decide which to retire to make room for the new.

**3. What would make us willing to try this for a month?**
Hear the conditions: a charter, a say in the measures, limited time. Agree on them with the sponsor before starting.

**4. What small change might the first data suggest?**
Look at a few months of history together. Name a possible change and an expected result. Agree how we will tell whether it helped.

**5. How much of our time can we give this without hurting the work?**
Estimate in hours per month. Agree on a limit, and review it at the first stage review.

**6. When should we stop or change the plan?**
Describe signs: no useful result, rising fear, heavy effort. Agree who decides, and how the decision will be recorded.

## Four perspectives

### Product and delivery teams

Pilot teams carry the early risk and give the early proof. They should ask for the charter, choose their own measures, use the first views in their own reviews, and report honestly on what helped and what did not. They benefit when the first result removes a real obstacle.

### Service and operations teams

Operations teams provide much of the data and often have the greatest load. They should help assess data quality, point out where a measure would reward the wrong behaviour, and protect time for on-call and incident work. Their sustainable pace is a fixed constraint on the plan.

### Leadership and governance

Leaders sponsor, sign the charter, and protect the programme from misuse. They should accept a modest start, ask for outcomes and stories rather than counts of dashboards, avoid asking for rankings, and let the plan change as the programme learns. They should judge it by decisions that improved.

### Customers and users

Customers and users gain when the programme leads to better services. They can take part in choosing experience measures and in reviewing what is gathered about them. They should see changes that stem from their feedback.

## In practice: a service management example

A mid-sized public transport authority has 12 teams across digital services, operations technology, and a service desk. A new chief information officer wants "a metrics programme in six months." An earlier attempt bought a platform and produced dashboards that few opened. The figures below are illustrative.

The head of service improvement proposes a 180-day roadmap with stage reviews at days 30, 90, and 180. In the first week she meets the chief information officer, who signs a one-page charter, and invites three volunteer teams: the service desk, a passenger information team, and an infrastructure operations team. In hour-long sessions each team states its questions. The service desk wants to know why the same customer problems return. The passenger information team wants to know whether its changes break things. The infrastructure team wants to know how much of its time goes to unplanned work.

For each team she chooses three to five measures from this book, with guardrails, and builds run charts in a shared spreadsheet from the previous five months of data. The data check finds that 27 percent of change records at the passenger information team were created after deployment, and that the service desk's categories had been reorganized midway through the period. Fixing the entry habit and mapping the categories takes two weeks. By day 27 the service desk sees that 19 percent of its contacts were returns within a week, concentrated in two categories linked to a confusing timetable page. The team works with the passenger information team to change the page. The service desk confirms this as the first useful result, at day 27.

At the day 30 review the teams ask for shorter definitions and a smaller number of charts, and one asks whether the data would be used in its yearly reviews. The charter is clarified to say it will not. Between days 31 and 90, the head automates two feeds, sets up a monthly review in each team that records decisions, and invites four more teams on the strength of the pilot stories. Teams actively using measures stands at 7 of 7 invited. At the day 90 review, teams report five changes they attribute to their measures. The programme has retired three old weekly reports. Effort share is estimated at 3 percent of team time. Between days 91 and 180, the head designs service owner and leadership views with those audiences, adds experience and cost measures to the balanced set, and runs the self-assessment: most teams are at Level 2 in use in decisions and 3 in trust and safety, and the chosen next step is a decision log in every team. At day 180 the chief information officer asks for a ranking of all 12 teams by their maturity. The head offers the aggregate profile and themes, explains the charter, and the request is dropped. The sponsors agree to extend the programme to the remaining five teams over the next two quarters, still on a volunteer basis.

## Agile, AI, automation, and analytics

### Agile

Deliver something useful to one team in the first month and grow in small steps that each earn the next, in the same continuous delivery spirit as the services being measured. The caution is that a fixed roadmap with dates can drive the programme when the learning says to change course.

### AI

Decide early where AI belongs in the programme: AI assistants for analysis and reporting, measures of AI use, and governance. Add them in small, reviewed steps, with a person checking AI output used in a report. The caution is that adding AI features early can inflate the programme's output before its value is shown.

### Automation

Automate data collection for the first few measures, so effort goes to interpretation, and measure the programme's own effort share. The caution is that automating too many measures at once creates a maintenance load that the programme cannot carry.

### Analytics

Track time to a first useful result and improvements traced to measures, and review the roadmap against them. The decision informed is whether to expand, hold, or stop. The caution is that improvements are hard to attribute to a measure, so describe the evidence honestly.

## Sector lens

**Startup.** Compress the roadmap. Within two weeks, agree on three questions and two or three measures, and look at them together weekly or fortnightly. Use what you already have. Revisit after a quarter. A startup that waits to build tooling will lose the habit of looking.

**Small business.** The first 30 days might be a single conversation, a one-page list of questions, a spreadsheet, and one change. The next stages involve a regular monthly look. The main risk is that the person who set it up becomes the only one who understands it, so write down what each measure means.

**Enterprise.** Use waves of volunteers, a small central team that supports and does not own the measures, shared definitions, and stage reviews with sponsors. Resist a single global date. Expect to spend the first stage fixing data capture, and plan for coordination with security, privacy, and works councils or staff representatives where they exist.

**Government and public sector.** Consultation with staff representatives and clear communication to oversight bodies are part of the early work. Procurement cycles often favour starting with tools already owned. Keep mandated reporting separate from improvement measures, and document decisions for audit (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs of the first 180 days are mostly people's time: the programme lead, a small analysis effort, a share of pilot teams' time, and sponsor attention. Tooling costs can be low or zero in the first stages. The larger cost is the cost of getting the early steps wrong, for instance by launching measures without trust.

The returns appear early if the first step is well chosen: a change the data suggested, reports that were retired, fewer disputes about numbers, and teams that ask for more. Build the case from your own record: days to the first useful result, the changes teams attribute to measures, hours saved on retired reports, and effort spent. Avoid quoting external figures about analytics returns without a traceable source and relevance to your setting. The credible claim is modest and local (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **The big-bang launch.** Months of design, then a surprise. Deliver a thin slice early.
- **Platform first.** Tools arrive before questions. Start with what you have.
- **Counting dashboards.** Activity measured, value ignored. Track decisions and changes.
- **Skipping the charter.** Fear fills the gap. Write the promises before the first number is shown.
- **Too many teams at once.** Support collapses. Spread in small waves.
- **Never stopping anything.** Old reports remain beside the new. Retire as you add.
- **A fixed plan defended against evidence.** The plan should change as you learn.
- **Giving up after the first miss.** Early attempts teach. Review, adjust, and try again.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Start and pilot | No plan; ad hoc reports | Interested teams try measures alone | Charter, sponsor, and volunteer pilots with a first useful result | Pilot learning drives wave plans; time to value tracked | Teams spread the approach among themselves; sponsors and partners join |
| Extension and cadence | One-off efforts | Some regular reviews | Monthly team reviews and quarterly programme reviews | Effort share, retirement, and attributed changes managed | Reviews link across teams and services; cadence adapts to need |
| Learning and adjustment | Plan fixed or absent | Occasional lessons shared | Stage reviews change the plan | Roadmap steps tied to the maturity profile | The programme improves continually from everyone's contributions |

## Checklist

- [ ] A sponsor has signed a short charter before the first number is shared.
- [ ] One to three volunteer teams have stated their questions in their own words.
- [ ] A baseline of several months of data and a data quality check exist for each pilot measure.
- [ ] Each pilot team has a small view with a definition for every measure.
- [ ] A first useful result is delivered, and confirmed by the team, within the first month or two.
- [ ] A review rhythm exists in each pilot team and records decisions.
- [ ] Old reports are retired as new views replace them.
- [ ] The effort the programme asks of teams is estimated and kept small.
- [ ] Stage reviews at days 30, 90, and 180 are held with teams, and the plan changes as a result.
- [ ] The next stage is decided with teams and sponsors and recorded with reasons.

## AI prompts

**Draft a 180-day plan.**

```text
Draft a 180-day roadmap for introducing a service metrics programme in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Choose first measures.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Run a data quality check.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Plan a stage review.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to choose starter measures with their paired guardrails for a pilot team.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a roadmap keeps measures at team level and carries a gaming vector for every measure introduced.

## Key takeaways

- Start where you are, with volunteers, a charter, and the data and tools you already have.
- Deliver one useful result to one team in the first month or two.
- Extend in small waves, and retire reports as new views replace them.
- Check data quality early, and fix capture at the source.
- Hold stage reviews that change the plan, and keep the effort asked of teams small.
- Decide the next stage with teams and sponsors, and record the reasons.

## References and further reading

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
