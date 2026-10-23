# Rolling out metrics without breeding fear

**Measurement works when people believe the numbers describe their work to help them, so roll out with transparency, team ownership, written promises about use, and no league tables of individuals.**

## Overview and motivation

A metrics programme succeeds or fails on trust. The same set of measures can be a useful mirror in one organization and a source of dread in another. The difference is rarely the measures. It is what people believe will happen to them because of the numbers. If they believe the numbers will be used to rank, blame, or reduce them, the sensible response is to protect themselves: pick work that scores well, delay reporting problems, argue about definitions, and quietly adjust what is recorded. The data then stops describing the work, and the programme loses the very thing it was built to provide.

This pattern is old and well known. The [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect) describes the way people change behaviour when they know they are being observed. [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law) says that the more a quantitative indicator is used for decision-making, the more it will be subject to corruption pressure and the more it will distort the process it was meant to monitor. [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) makes a similar point about targets (see topic 1.2, Goodhart's law and the psychology of metrics). None of these are reasons to avoid measurement. They are reasons to design the rollout so that the incentives to distort are low and the reasons to tell the truth are high.

[Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety) is a shared belief that a team is safe for interpersonal risk-taking, such as admitting a mistake, asking a question, or reporting bad news. Metrics programmes both depend on it and can erode it. Measures of failure, rework, and delay are only honest when people feel safe reporting them (see topic 9.2, Satisfaction and well-being metrics, and topic 4.2, Postmortem and learning metrics). [Trust](https://en.wikipedia.org/wiki/Trust_(social_science)) between the people measured and the people who use the measures is the underlying asset, and it is built slowly and spent quickly.

[Change management](https://en.wikipedia.org/wiki/Change_management) is the discipline of preparing and supporting people through change. Introducing metrics is an organizational change, and it deserves the same care as a new process or tool (see topic 9.6, Organizational change and adoption metrics). The [technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) describes how innovations spread from enthusiasts to a majority, which is a reminder that a respected pilot with willing teams does more than a mandate. A [pilot project](https://en.wikipedia.org/wiki/Pilot_project) is a small-scale trial that tests an approach before wider commitment. An [information radiator](https://en.wikipedia.org/wiki/Information_radiator) is a visible display of information that people can read at a glance without asking, which suits transparency when it shows team data to the team that owns it.

The agile aims give the rollout its shape. Continuous stakeholder involvement means the people measured help choose the measures and the rules for their use. Continuous improvement means the programme is itself changed in response to what people say. Ongoing evolution means the measures are expected to change, which lowers the stakes of any one of them. A sustainable pace means the programme does not add reporting that crowds out the work. Building around motivated individuals means treating people as capable adults who can use data to improve their own work, and not as resources to be monitored. The practical stance is simple: measure the system, share the data with the people in it, and let them lead the improvement.

The topic works with the dashboard guidance (see topic 11.1, Designing a service metrics dashboard) and the governance of measures (see topic 1.4, Metrics governance and ownership).

## Key principles

- **Say what the data is for, and what it is not for.** Write both down, and keep to them.
- **Teams own their measures.** The people doing the work help define, see, and interpret the numbers about it.
- **Measure systems, not individuals.** No league tables, no per-person scores, no using the data in individual performance reviews.
- **Be transparent.** Share definitions, data sources, and who can see what. Surprises breed suspicion.
- **Start with volunteers.** A willing pilot produces stories and fixes before the wider rollout.
- **Show the use.** Demonstrate that numbers lead to help, such as removing a blocker, and not to blame.
- **Allow challenge.** People can question a number, and corrections are made quickly and visibly.
- **Go at a sustainable pace.** A few measures at a time, with time to learn.

## Metric definitions

The measures below tell the programme team whether the rollout is building or spending trust. They describe teams and the programme, not individuals. Several rely on surveys and on the observation of behaviour, and they are best read as signals to talk about.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Use charter coverage | Share of participating teams that have agreed a written statement of what their measures are used for and never used for | teams with an agreed charter / participating teams | percent | Charters held with the programme | Governance; organizational change management | Working agreements | Quarterly |
| Team ownership share | Share of a team's displayed measures whose definitions the team helped write or has approved | measures with team approval / measures displayed to the team | percent | Metric catalogue; approval records | Continual improvement | Self-organizing teams | Quarterly |
| Candour signal | Whether reporting of problems and near-misses holds steady or rises after measures are introduced | near-miss or problem reports per team per quarter, before and after; trend | reports | Incident, near-miss, and postmortem records | Incident management; continual improvement | Blameless reflection | Quarterly |
| Challenge turnaround | Time from a person or team challenging a number to a resolution that is visible to them | median and 85th percentile of days from challenge to resolution | days | Challenge log | Continual improvement; knowledge management | Responding to feedback | Quarterly |
| Perceived safety of measurement (survey) | Team-level survey agreement with statements such as "the data about our work is used to help us" | percent agreeing on the team survey; response rate shown | percent | Anonymous team survey, aggregated | Organizational change management | Trust and motivated individuals | Twice a year |
| Individual-use incidents | Instances where data was shown or used to rank or evaluate individuals, against the charter | count of reported instances per quarter, with outcomes | count | Reports to the programme; review of dashboards and reviews | Governance | Respect for people | Quarterly |
| Voluntary adoption | Share of eligible teams that chose to take up the programme in a period, before any mandate | teams that opted in / eligible teams invited | percent | Programme records | Organizational change management | Pilots and learning | Quarterly |

The perceived safety survey needs a minimum group size for reporting so that no individual can be identified, and it should be anonymous. Candour signal must be read with care: a rise in reports can mean more problems or more willingness to report them, and the second is usually what a healthy programme produces at first. Individual-use incidents are not a count to hide. The goal is that every instance is reported, handled, and corrected, and a small number of reported instances is a sign of a working reporting path, not a failure of the programme. Voluntary adoption is counted only for the period before any mandate.

## Recommendations

### Set the ground rules first

**1. Write the promises and publish them.** Before the first number is shown, write a short charter. A good one says that measures describe teams, services, and systems and are never used to rank individuals or in individual performance reviews. It says who can see what, how long data is kept, how people can challenge a number, and what happens if the rules are broken. Senior leaders sign it. The charter is a commitment that lets people calm their guard, and it should be easy to find and read.

**2. Separate measurement for improvement from measurement for judgement.** Teams use their measures to improve their own work. Leaders use aggregated views to direct support and investment. Neither use is about assessing a person. If an organization must assess individuals, it should do so through conversation, evidence, and context, and never by reading off a dashboard (see topic 1.2, Goodhart's law and the psychology of metrics).

**3. Be open about the trade-offs.** Tell people that every measure can be gamed, that you know which ways, and that each comes with a guardrail. Show the gaming vectors and guardrails in this book's style. Naming the risks in the open demonstrates good faith, and it invites people to point out ways you have missed.

### Make teams the owners

**4. Let teams choose and define.** Offer a menu of measures and let each team pick a few to start with, adapt the definitions with a stated reason, and add its own. Teams that chose their measures are more likely to use them honestly. Keep a small common core so that services can be compared at the level where comparison is valid (see topic 1.4, Metrics governance and ownership).

**5. Show teams their data first.** Give each team its numbers before anyone else sees them, with time to check, correct, and add context. The team owns the story. When data is later shown to leaders, the team presents or annotates it. This avoids surprises and ensures the interpretation comes from the people closest to the work.

**6. Keep views at the right level.** Show team-level and service-level views. Do not show per-person breakdowns, and turn off tool features that do. Where a detailed view is necessary for investigation, such as the history of a single incident, limit access, explain why, and keep it out of review conversations (see topic 11.2, Tooling landscape).

### Roll out to earn trust

**7. Pilot with volunteers.** Invite two or three teams that are curious and respected. Work with them on the measures and the rules. Let them tell their own stories to their peers. Their fixes and objections will improve the programme, and their endorsement carries more weight than any announcement. Ask what they would change before the wider rollout, and change it.

**8. Deliver value early and visibly.** Within the first weeks, use the data to remove something that annoys the team: a queue that always waits, an approval step with no purpose, a report no one reads. When people see that numbers lead to help, they offer more honest data. When they see that numbers lead to questions about them, they offer less.

**9. Respond to challenges fast.** When someone says a number is wrong, take it seriously. Check it, fix the definition or the data, and say publicly what was done. A quick, respectful correction builds trust, and a defensive reply spends it. Keep a challenge log, and treat repeated challenges as signals that the measure needs work.

### Protect trust over time

**10. Watch for the signs of fear.** Signs include teams arguing about definitions to avoid results, sudden improvements that do not match other signals, fewer reported problems, work chosen to look good, and people asking who can see the data. Treat these as information about the programme and not as misbehavior. Ask the teams, listen, and adjust.

**11. Hold leaders to the charter.** Leaders are under pressure to compare, rank, and explain. Give them what they can legitimately use: trends, distributions, and outcome measures at the team and service level. Make it easy to report a breach of the charter, respond to each report, and publish the outcome, without naming individuals who raised it. A single visible violation can undo months of work, and a visible correction can rebuild it.

**12. Review the programme with the people in it.** Every quarter, ask teams what the measures help with, what they distort, and what they would drop. Retire measures that fail the test. Share the results of the review. An ongoing, visible commitment to improve the programme is the strongest signal that it exists to serve the teams (see topic 9.5, Continual improvement metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Use charter coverage | Signing charters as a formality; leaders ignoring them | Check charter use in practice; report individual-use incidents; review charters with the teams |
| Team ownership share | Teams approving definitions they did not read; the programme presenting finished definitions for sign-off | Sample how definitions were developed; track changes teams requested and made |
| Candour signal | Pressuring teams to report more or fewer problems; renaming categories | Read with severity and the content of postmortems; compare with customer-reported issues |
| Challenge turnaround | Closing challenges without a visible resolution; discouraging challenges | Require a visible response; survey challengers; track repeat challenges |
| Perceived safety of measurement (survey) | Coaching respondents; low response rates hiding unhappy teams | Anonymity and minimum group size; show response rates; talk to teams directly |
| Individual-use incidents | Not reporting; reclassifying incidents as something else; blaming those who report | Easy anonymous reporting; protection for reporters; review of reviews and dashboards for individual data |
| Voluntary adoption | Pressure framed as invitation; counting teams that joined to avoid scrutiny | Ask teams why they joined; check use in practice; keep the period free of mandate |

A healthy reading shows charters that teams actually refer to, measures that teams helped shape, steady or rising reports of problems, challenges answered quickly, a survey that shows people believe the data helps them, a few reported breaches that were handled openly, and teams that joined because they wanted to.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Mandated rollout to all teams at once | Fast and consistent | Compliance without belief; gaming and resentment |
| Voluntary pilots, then spread | Builds stories and trust | Slower; uneven coverage |
| Teams choose all their measures | High ownership | Hard to compare; gaps in coverage |
| Common core plus team choice | Balance of comparison and ownership | Needs governance |
| Open dashboards across teams | Transparency; shared learning | Risk of comparison and rankings |
| Team-only views, with aggregates shared | Safe space for honest reflection | Leaders may feel blind |
| Written charter | Clear promises; basis for challenge | Worthless if ignored |
| Informal assurances | Quick | Forgotten; no recourse |

The prose answer is to start with willing teams, give them ownership, share aggregates upward with team consent and context, and back the promises with a charter that leaders are held to.

## Questions to discuss with your team

**1. What do we believe will happen with these numbers, and what have we seen happen in the past?**
Invite honest stories of measures used well and badly. The facilitator should record fears without arguing. Agree what promises would make the most difference.

**2. What would we write in a charter that says what our data will never be used for?**
Draft it together in plain words. Include individual performance reviews, rankings, and layoffs, if that is the worry. Take it to the leaders who would have to sign.

**3. Which of the proposed measures would we choose, and which would we drop?**
Let each person vote privately and compare. Discuss why some seem threatening. Agree on a short set to try for a quarter.

**4. How would we know if people were starting to hide problems?**
List signs: fewer reports, softened language, work avoided. Agree who watches and how we would raise it without blame.

**5. Who should see our team's numbers, in what form, and when?**
Discuss team-only, leadership aggregates, and cross-team comparison. Decide what is shared, and who presents it. Write the rule down.

**6. If a number about us is wrong, how will we get it fixed?**
Trace the path from noticing to correction. Identify delays and who decides. Agree on a simple challenge route and time expectation.

## Four perspectives

### Product and delivery teams

Teams carry the risk of being measured, and they hold the knowledge of what the numbers mean. They should take part in choosing and defining measures, use the data in their own reviews, and speak up when a number misleads. They benefit when they see the data first and when measurement helps remove obstacles.

### Service and operations teams

Operations teams often hold the richest data and the heaviest on-call and incident burdens. They should be wary of measures that reward silence or punish escalation, protect reporting of incidents and near-misses, and watch that on-call data is not used to rank people (see topic 5.7, Toil and on-call metrics).

### Leadership and governance

Leaders set the culture of use. They should sign and follow the charter, ask for team and service views, respond to breaches openly, and avoid asking for rankings. They should judge the programme by the improvement it enables and by the candour it preserves, not by the number of dashboards.

### Customers and users

Customers and users benefit when teams report problems honestly and fix causes. They may also be the subject of data collection. They deserve clarity on what is gathered about them and how it is used, and they can be partners in deciding which measures show value to them (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A health services provider's technology division introduces metrics across its 15 delivery and support teams. A previous attempt, three years earlier, published a ranking of teams by tickets closed and ended with a spike in closures of low-value tickets and a drop in reported incidents. The figures below are illustrative.

The new head of service management starts by asking six team leads what they remember. They describe the ranking and the fallout. She drafts a charter with them: measures describe teams and services, never individuals; individual views are switched off in the tools; the data is never used in individual reviews; teams see their data first; any person can challenge a number, with a response in ten working days; and an unrelated breach will be reported to the programme and reviewed in the open. The chief technology officer signs it, and it is posted on the programme page.

Three teams volunteer for the pilot. They each pick four measures from a menu and rewrite two definitions. One team insists that "resolution time" exclude time waiting for a customer, and another that change failure be defined by user impact and not by rollback alone. The pilot shows its first benefit in the third week, when one team sees its work waiting in an approval queue and removes a step that nobody could justify. The team presents its story at a division meeting. Seven more teams ask to join. Voluntary adoption reaches 10 of 15 teams within two quarters, and the final five join later without a mandate.

The programme watches for fear. Near-miss reports per team rise in the first quarter, which the head reads as more willingness to report, and she confirms by reading a sample. A team survey with a minimum group size shows 58 percent of respondents agreeing that "data about our work is used to help us" at the start of the second quarter and 76 percent at the start of the fourth. Challenge turnaround has a median of four working days. Then a director, preparing a budget case, asks for a table ranking teams by deployment count. The programme lead tells her it is outside the charter, offers a view of trends by service with team commentary, and logs the request as a reported individual-use near-incident with the outcome. The director accepts. Two quarters later, individual-use incidents stand at one, reported, handled, and published without names.

## Agile, AI, automation, and analytics

### Agile

Roll out with the people measured, with written promises about how the data will be used and a regular conversation about what they see. The caution is that a rollout announced from above with a dashboard of teams invites gaming.

### AI

Staff may fear AI as a measuring tool or as a replacement, so be explicit that AI-derived data about individuals is not used to evaluate them and that AI-assisted work is measured at team level. The caution is that using AI tools to analyse individual behaviour breaks the promise, even if done quietly.

### Automation

Automated collection is acceptable when people know what is collected and why. Publish the list of data collected and the rules for access. The caution is that automatic collection of activity data feels like surveillance, so collect only what a decision needs.

### Analytics

Share results with the team first, and show how each number will be used. The decision informed is whether the programme has earned trust. The caution is that candour signals are soft, so combine surveys with observation and treat low response as information.

## Sector lens

**Startup.** The team is small and trust is personal. Say aloud what the numbers are for, let the whole team choose the few measures to track, and keep them out of any individual conversation. The risk is that a founder's passing comment about a number reshapes behaviour overnight. Write the promise down, even in a few lines.

**Small business.** Staff may suspect that numbers are about cutting jobs. Talk openly about why you are measuring, what you will look at, and what you will not. Involve people in picking the measures, share what you find, and show an improvement that helped them early.

**Enterprise.** Scale makes trust harder, because most leaders are distant from teams. Use a charter signed at a senior level, team-owned measures with a small common core, tool configuration that prevents individual views, and an independent route for reporting breaches. Pilot, learn, and spread through peers, and avoid a single global rollout date.

**Government and public sector.** Employment rules, unions, and public scrutiny add constraints and expectations. Consult staff representatives early, agree the charter with them, and be clear about the line between improvement data and any formal performance process. Public reporting requirements should be kept apart from internal improvement measures (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are mostly people's time: drafting the charter, running pilots, workshops with teams, handling challenges, running surveys, and the leaders' time spent holding to the rules. There is also an opportunity cost, because a careful rollout is slower than a mandate. Those costs are small next to the cost of a failed rollout, in which the data is distorted, trust is spent, and the programme is abandoned.

The returns are data that reflects reality, honest reporting of problems, and teams that use measures to improve. These show up as earlier detection of problems, fewer disputes about numbers, and higher adoption without compulsion. Build the case from your own history: what happened when measures were imposed before, how many teams adopted voluntarily this time, and how reporting of problems changed. Avoid quoting published figures on engagement or trust without a traceable source and relevance to your setting (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **The surprise league table.** Rankings appear in a leadership slide. Trust ends. Keep rankings out of the programme.
- **Measures in performance reviews.** Even a mention changes behaviour everywhere. Keep them out, in writing.
- **Mandate first, explain later.** Compliance without belief. Pilot with volunteers and explain the reasons.
- **A charter nobody enforces.** Words without action are worse than none. Hold leaders to it and publish outcomes.
- **Surveillance by default.** Tools expose individual activity because they can. Turn those features off.
- **Defensive answers to challenges.** People stop pointing out errors. Respond quickly and respectfully.
- **Rushing to many measures.** Overload and confusion. Start with a few and grow.
- **Reading silence as success.** Fewer reports can mean fear. Watch candour signals and talk to people.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Promises and use | Unwritten; use varies by manager | Verbal assurances; some team agreements | Written charter signed by leaders; individual views disabled | Breaches reported and reviewed; charter use checked | Charter co-owned with staff and partners; revised from experience |
| Ownership and transparency | Measures imposed | Some teams consulted | Teams choose and define measures and see data first | Ownership share and challenge turnaround managed | Teams, suppliers, and customers share views by agreement; ownership routine |
| Trust and candour | Fear or indifference | Pilot with volunteers | Safety survey and near-miss trends reviewed with teams | Signals trigger planned action; voluntary adoption tracked | Candour is routine; improvement of the programme comes from everyone |

## Checklist

- [ ] A written charter states what the data is for and never for, and leaders have signed it.
- [ ] Individual-level views and rankings are switched off in tools or restricted by policy.
- [ ] Teams choose or approve their measures and see their data before others do.
- [ ] A pilot with volunteer teams precedes any wider rollout.
- [ ] The first use of data delivers visible help to the team.
- [ ] A challenge route exists, with a stated response time and a log.
- [ ] A reporting path exists for breaches of the charter, and outcomes are published without names.
- [ ] Team-level safety and candour signals are watched and discussed with teams.
- [ ] Gaming vectors and guardrails are shared openly with teams.
- [ ] The programme is reviewed with the teams each quarter, and measures are retired when they stop helping.

## AI prompts

**Draft a metrics charter.**

```text
Draft a one-page charter for the metrics programme of [organization type]. It should
state what the data is for, what it will never be used for (including individual
rankings and performance reviews), who can see what, how long data is kept, how a
person can challenge a number, how breaches are reported, and who signs it. Use
plain words. Do not give legal advice. List your assumptions and points to confirm
with human resources and legal specialists.
```

**Plan a pilot.**

```text
Plan a six-week pilot of a metrics programme with two to three volunteer teams in
[context]. Include how to invite teams, which measures to offer, how to set the
rules, what early help the data should provide, what to ask the teams at the end,
and how to decide on wider rollout. Do not assume the outcome. List your
assumptions and risks.
```

**Review a measure for fear.**

```text
Here is a proposed measure and how it will be used: [paste]. Act as a sceptical
team member. Describe how it could be taken as a threat, how people could change
behaviour to look good, and what honest reporting it might discourage. Suggest
changes to the definition, display, or rules of use that would lower the risk.
List your assumptions.
```

**Respond to a challenge.**

```text
A team has challenged this number: [describe, without personal data]. Draft a
respectful response that acknowledges the concern, explains how the number is
calculated, proposes how to check it, sets a date for the answer, and says what
will change if the number is wrong. Do not be defensive. List what you do not yet
know.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the gaming vector and guardrail to share openly with teams for a proposed measure.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a rollout plan keeps measures at team and service level and never ranks individuals.

## Key takeaways

- Trust is the asset. Write down what the data is for and never for, and keep the promise.
- Measure teams, services, and systems, and switch off views that expose individuals.
- Let teams choose, define, and see their data first, and own the story it tells.
- Pilot with volunteers, deliver visible help early, and spread through peers.
- Answer challenges quickly, and treat signs of fear as information about the programme.
- Hold leaders to the charter, and review the programme with the people in it.

## References and further reading

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
