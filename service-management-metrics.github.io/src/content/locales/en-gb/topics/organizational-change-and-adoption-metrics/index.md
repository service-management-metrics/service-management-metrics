# Organisational change and adoption metrics

**A change has taken hold when people do the new thing for the reasons it was meant to be done and the outcome improves, so measure purpose and effect and not the presence of rituals, and keep the pace of change one that people can sustain.**

## Overview and motivation

Organisations adopt new ways of working all the time: a new service management process, a delivery pipeline, a different team structure, a set of agile practices, an incident framework. Announcements are easy. What changes in daily behaviour is the real question, and whether the intended benefit followed is the one that matters. Many programmes report success because training was delivered, tools were installed, and the new vocabulary is in use, while the work looks the same and the outcomes have not moved.

The Agile Manifesto's principles say that the best architectures, requirements, and designs emerge from self-organising teams, and that changing requirements are welcome. They also say to build projects around motivated individuals and trust them, and to maintain a constant pace indefinitely. These principles are a standing argument against imposing practices from above and measuring compliance. They point toward a different approach to change: involve people continuously, let the way of working evolve, and judge it by outcomes.

A cautionary idea from software culture is the cargo cult. [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming) describes the ritual inclusion of code or practices that serve no purpose, copied from elsewhere without understanding. Richard Feynman's talk on "cargo cult science" used a related image to describe work that has the outward form of the real thing without its substance. Applied to ways of working, the cargo cult is the team that holds all the meetings, uses all the terms, and fills in all the boards, and does not deliver continuously, collaborate with its stakeholders, or improve. A [cargo cult](https://en.wikipedia.org/wiki/Cargo_cult) approach confuses the form of a practice with its aim. The metrics in this topic are designed to tell the difference.

Several ideas from the study of change help.

- **Change is an [organisational change](https://en.wikipedia.org/wiki/Organizational_change) problem as much as a technical one.** [Change management](https://en.wikipedia.org/wiki/Change_management) addresses the people side: awareness, desire, knowledge, ability, and reinforcement are among the commonly used elements. Models such as John Kotter's eight steps and Prosci's ADKAR offer vocabularies, and none of them is a guarantee.
- **People often resist change for sound reasons.** [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change) can signal a real problem with the proposal, a threat to something people value, or fatigue. Treat it as information.
- **Adoption is a process over time.** The [diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) theory describes how new practices spread through a social system, from early adopters to the majority, through influence and observation.
- **Culture shapes what takes hold.** [Organisational culture](https://en.wikipedia.org/wiki/Organizational_culture), the shared assumptions and behaviours of a group, determines which changes feel natural and which are rejected.
- **Observation changes behaviour.** The [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect) is the tendency of people to alter their behaviour because they are being observed. A pilot that shows a great result under close attention may not hold at scale.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) is especially relevant for transformation: when adoption is a target, teams adopt the form. A dashboard of "teams using the new process" with a mandate behind it will show high adoption and low change (see topic 1.2, Goodhart's law and the psychology of metrics). This topic brings together the earlier measures of outcomes (see topic 6.5, Value realisation and business outcomes) and improvement (see topic 9.5, Continual improvement metrics) as the evidence that a change worked.

## Key principles

- **Judge a change by its outcome, not by its rituals.** The proof of adoption is a better result.
- **Make the aim of every practice explicit.** If nobody can say why, it is a candidate for cargo cult.
- **Involve the people affected continuously.** Design with them, not for them.
- **Prefer voluntary uptake and evolution to mandates.** Teams adapt practices to their context.
- **Limit the load of change.** People can absorb only so much, and a constant pace includes change.
- **Treat resistance as data.** Listen for what it says about the proposal.
- **Compare honestly.** Use comparison groups, and be wary of results that appear only under observation.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aim clarity | Share of team members who can state the aim of a practice in their own words and a way they would tell if it were working | members giving a clear aim and indicator in a short, anonymous check / members asked, at team level | percent | Short anonymous check, aggregated by team | Organisational change management; continual improvement | Team understanding of why it works this way | Quarterly |
| Practice adoption breadth | Share of teams using a defined practice, as defined by observable behaviour, not attendance | teams showing the defined behaviour in the last period, confirmed by the team and an observer / teams in scope | percent | Team self-assessment confirmed by observation | Organisational change management | Spread of a practice | Quarterly |
| Outcome movement against comparison | Change in an outcome measure for adopting teams compared with similar non-adopting teams over the same period | change in outcome for adopters minus change for comparison teams | outcome units | Outcome measures per team (flow, stability, experience) | Continual improvement; measurement and reporting | Learning from experiments | Quarterly |
| Change load | Number of significant changes concurrently affecting a team | count of significant change initiatives that ask a team to change how it works in the period, per team | count | Change portfolio and team input | Organisational change management; change enablement | Sustainable pace | Quarterly |
| Stakeholder involvement rate | Share of change initiatives in which the affected people took part in design and review | initiatives with recorded involvement of affected people / initiatives | percent | Initiative records and affected-team confirmation | Organisational change management; stakeholder engagement | Continuous stakeholder involvement | Quarterly |
| Voluntary uptake share | Share of adopting teams that chose the practice, as opposed to being directed | adopting teams that report choosing the practice / adopting teams | percent | Team reports | Organisational change management | Self-organising teams | Annual |
| Reversion rate | Share of teams that dropped a practice within a year of adopting it | teams that stopped within 12 months / teams that adopted | percent | Team records over time | Organisational change management; continual improvement | Practices abandoned as unhelpful | Annual |

Define the practice by what teams do and what they intend, not by its name. Adoption breadth counts a team only when its behaviour matches the definition and the team and an observer agree. Outcome movement uses comparison teams chosen in advance as similar in service type and starting point, and states what else changed. Change load counts initiatives that ask the team to alter its work, not routine updates. All measures are at team or initiative level, never individual.

## Recommendations

### Start with purpose and people

**1. State the aim and the indicator before the practice.** For every proposed change, write down what problem it solves, who feels it, what outcome should improve, and how you will know. If the aim is "to be agile" or "to adopt the framework," ask again. Teams will follow a practice more willingly when they see what it is for. This is the best protection against cargo cult.

**2. Involve the affected people in designing the change.** Ask those who do the work what hurts, what they would try, and what they fear. Design with a few of them, test with a small group, and listen. Continuous stakeholder involvement is a core agile aim, and it applies to change programmes as much as to products. Record who took part.

**3. Listen to resistance.** When people push back, ask what they see that you do not. Possible answers include a flaw in the proposal, a missing capability, an unacknowledged cost, or earlier change that was never finished. Record the concerns and the responses, and adjust the change where they are right.

### Introduce change in a way that can be learned from

**4. Pilot with a comparison.** Try the change with one or two willing teams, and watch a comparable group that does not change. Compare outcomes over the same period. Be aware of the Hawthorne effect, and extend the pilot long enough for the novelty to fade. A [pilot project](https://en.wikipedia.org/wiki/Pilot_project) is a small-scale test, and its value lies in what it teaches before you scale, so state in advance what you hope to learn and what would make you stop.

**5. Prefer voluntary uptake, and let practices evolve.** When teams choose a practice because it solves a problem for them, they adapt it and keep it. When it is imposed, they perform it. Offer the aim, the evidence, and support, and let teams decide how to apply it. Allow local variation, and learn from it. Track voluntary uptake and reversion to see whether a practice is sticking for the right reasons.

**6. Spread through example and conversation.** Influence travels through people who are respected and visible. Share stories of teams who tried something and what happened, including setbacks. Communities of practice are a good channel (see topic 9.4, Skills and learning metrics). Avoid league tables of adoption.

### Watch the load

**7. Count the changes landing on each team.** List the initiatives that ask a team to change how it works: new tools, new processes, reorganisations, reporting requirements. A team facing many at once cannot absorb them, and [change fatigue](https://en.wikipedia.org/wiki/Change_fatigue) sets in. Sequence initiatives, drop low-value ones, and give teams room to finish one change before the next. This is part of keeping a sustainable pace (see topic 9.2, Satisfaction and well-being metrics).

**8. Retire what no longer serves.** For every new practice added, ask what can be removed. Layers of process accumulate, and each layer has a cost. Review the rituals a team runs each quarter and drop those whose aim is no longer served.

### Measure adoption by what matters

**9. Define adoption by observable behaviour and purpose.** Describe what a team does differently when the practice has taken hold, for example "changes reach production in small steps with automated checks, and users are consulted weekly." Assess by observation and conversation, not by counting artefacts such as boards or meetings. Ask team members to explain the aim.

**10. Compare outcomes, not compliance.** Look at flow, stability, experience, and cost measures for adopting teams against comparison teams (see topic 2.8, DORA metrics). Take care with causation: teams that adopt may be different in ways that also affect outcomes. Report the comparison with its limits.

**11. Check the experience of the people.** Adoption that raises friction or erodes autonomy may undermine itself. Use the team health and well-being pulses to see how the change feels (see topic 9.1, Team health and developer experience). Ask what the change took away as well as what it added.

**12. Be honest in reporting.** Report adoption, outcomes, change load, and reversions together, with the story of what was learned. Avoid declaring success when form has spread and outcomes have not moved. Admit when a practice did not suit, and withdraw it. A transformation is judged by what it enabled, not by how widely it was announced.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Aim clarity | Coaching people to recite the aim; asking leading questions | Anonymous check; ask for an example of how they would tell; compare with outcome movement |
| Practice adoption breadth | Counting boards and meetings; teams performing for the observer | Define by behaviour and purpose; observation by someone outside the team; outcome movement |
| Outcome movement against comparison | Choosing a favourable comparison group or period; leaving out other changes | Choose comparison and period in advance; list other changes; show the uncertainty |
| Change load | Splitting an initiative into small pieces; not counting changes that arrive informally | Count by effect on the team's work; ask teams to list what they are absorbing |
| Stakeholder involvement rate | Inviting people to a briefing and calling it involvement; recording attendance only | Affected-team confirmation that they influenced the design; record changes made in response |
| Voluntary uptake share | Presenting a mandate as a choice; teams saying they chose when they felt they had to | Anonymous report; ask what would have happened if they declined |
| Reversion rate | Making dropping a practice costly or hidden; renaming the dropped practice | Review reasons for dropping; allow safe withdrawal |

A healthy reading is a practice that teams can explain and choose, adoption measured by behaviour, outcomes that improve against comparison, a manageable load of change, a few reversions with good reasons, and people who say their voice shaped the change.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Mandated rollout | Fast, consistent | Compliance without purpose; resentment; cargo cult |
| Voluntary uptake | Motivated adopters; local fit | Slower; uneven; some teams never adopt |
| Big-bang change | Clear event | High risk; heavy load; hard to learn from |
| Staged pilots with comparison | Learn before scaling | Slower; pilots may not generalise |
| Standard practices across teams | Easier coordination and support | Poor fit for some teams |
| Local variation | Fit to context | Harder to compare and support |
| Adoption dashboards | Visible progress | Reward the form of adoption |
| Outcome comparison | Honest signal | Hard to isolate; slower to show |

The prose answer is to pilot with comparison, offer practices with their aims, let teams choose and adapt, count the load of change, and judge by outcomes, using any standard only where coordination demands it.

## Questions to discuss with your team

**1. What practice do we follow that nobody can explain the purpose of?**
Each person names one. For each, discuss what problem it was meant to solve and whether it still does. The facilitator should record the answers without defensiveness. Agree to keep, change, or drop two of them.

**2. What changes are landing on us right now, and which could wait?**
List every initiative that asks us to change how we work. Count them. Ask which add value and which add load. Propose to the sponsors a sequence or a stop for one of them.

**3. What did we say no to in the last change, and was anyone listening?**
Recall resistance or concerns. Were they heard, and did the change adapt? Discuss how to raise concerns in a way that is received. Agree how the team will give feedback on the next change.

**4. If this change worked, what would be different in our results, and how would we tell?**
Draft the indicator and the comparison. Ask what else is changing at the same time. If nobody can say, the change lacks an aim. Agree a baseline now.

**5. How would we know if a new practice was only for show?**
Think of signs: nobody uses the output, the meeting has no decision, the board is updated for an audience. Discuss how to check for these. Agree a time to review the rituals the team runs.

**6. Which practice did we drop, and what did we learn from dropping it?**
Recall one. Discuss whether it was safe to drop it, and what replaced it. Treat the answer as proof that teams can adapt.

## Four perspectives

### Product and delivery teams

Delivery teams live with the changes. They should ask for the aim, involve themselves in design, run small experiments, and say when a practice does not fit. They have the right to evolve how they work, and they have a duty to deliver outcomes that justify their choices.

### Service and operations teams

Operations teams absorb process changes from many directions, often on top of unplanned work. They should record the change load, ask for sequencing, and join pilots where their view matters. They are well placed to notice when a new process adds steps without value.

### Leadership and governance

Leaders sponsor changes and often impose them. They should state aims and indicators, involve the affected people, prefer voluntary uptake where possible, limit the load of change, and be ready to withdraw what does not work. Governance should look at outcomes against comparison, change load by team, and reversion rates, and distrust uniformly high adoption figures.

### Customers and users

Users experience the effects of change in service quality, communication, and stability. They can be involved in designing changes that affect them, and their feedback is evidence of whether the change helped. They also bear the cost of transformations that distract teams from the service.

## In practice: a service management example

A multinational logistics company's technology division has 30 teams. Two years ago it launched a transformation programme to adopt a standard set of ways of working, and the programme dashboard shows 27 of 30 teams "adopted." The numbers below are illustrative.

The new head of engineering practice is asked whether the programme worked. She looks beyond the dashboard. A short anonymous check shows that only 41 percent of team members can state the aim of the main practices and a way to tell they are working. Observation of eight teams shows that five hold the prescribed meetings and update the boards, and two of those five still release quarterly with manual approval. Comparing the 12 teams that had the strongest practice behaviour with 12 similar teams that did not, the median cycle time and change fail rate are similar, and satisfaction with the way of working is lower among the teams under the strongest compliance. The average team is absorbing five initiatives that ask it to change how it works, with three teams facing eight or more. 22 percent of teams adopted voluntarily. Of the teams that adopted a pipeline practice two years ago, 30 percent have quietly stopped.

The head of engineering practice reframes the programme with the teams. The aim of each practice is written in plain language with an indicator, and teams are free to adopt, adapt, or decline, with a conversation about why. The division publishes the change load per team and asks sponsors to sequence their initiatives; four are paused and two merged. Willing teams pilot a small-step release practice with automated checks, with a comparison group chosen in advance, and the results are shared as stories and numbers. Stakeholders from the business and from operations join design sessions for two process changes. Reporting changes from adoption counts to outcome movement, change load, and reversion.

A year later, 71 percent of team members can state the aim of the practices they use. The pilot teams reduce median cycle time by 30 percent against a 6 percent reduction in the comparison group, with the Hawthorne effect considered by extending the pilot for two further months. Average change load falls to three initiatives per team. Voluntary uptake rises to 64 percent, and reversions are 9 percent, with reasons recorded. The chief operating officer asks for a target of 100 percent adoption by year end. The head of engineering practice proposes to track outcomes and load instead, explaining that a mandated 100 percent produced the earlier appearance of success and the earlier reversion. The decision is recorded, and the dashboard drops the adoption count.

## Agile, AI, automation, and analytics

### Agile

Change at a pace people can sustain, with stakeholders involved throughout. The caution is that measuring the presence of rituals shows compliance, not purpose.

### AI

AI adoption is a change programme with people impact, so measure voluntary uptake, outcome movement, and concerns raised, and pair usage with quality. The caution is that mandated AI use can raise usage numbers while lowering trust.

### Automation

Collect adoption signals from tools automatically and measure the change load on teams. The caution is that dashboards of tool use can replace conversation.

### Analytics

Compare outcomes with a comparison group where possible and state limits. The decision informed is whether to continue, adjust, or reverse. The caution is that adoption and benefit are different, so measure both.

## Sector lens

**Startup.** Change is constant and practices come from founders and early hires. Keep the aim of each practice explicit and drop anything that does not help. Resist copying a large company's process before you have its problems.

**Small business.** The owner often decides, and change is personal. Explain why, involve the few people affected, try one change at a time, and check whether the pain it targets has eased. Avoid framework purchases that outstrip the team's capacity to absorb them.

**Enterprise.** Scale invites standards, programmes, and consultants, and with them the risk of cargo cult at volume. Offer shared practices with aims, support voluntary uptake, manage the portfolio of change by team load, and compare outcomes honestly. Use communities of practice to spread what works.

**Government and public sector.** Change may be driven by legislation, restructuring, and political cycles, with limited choice. Where choice is limited, be transparent about it, concentrate on the aim and the outcome, and involve staff and users early. Staff protections and consultation duties may apply, and public accountability makes honest reporting of what did not work valuable (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs of measuring change well are small: short checks, comparison data from existing measures, observation time, and a list of initiatives by team. The larger cost is the willingness to hear that a favoured programme is not working.

The returns come from not wasting the very large cost of failed transformations: training, consulting, tools, and the time of many people, plus the cost of change fatigue and lost trust. Build the case from your own history: the cost of a past programme and what outcomes it moved, the number of initiatives competing for each team, and the proportion of adopted practices later dropped. Avoid citing statistics about transformation failure rates unless you can trace their source and method. Include the benefit of earlier course correction through pilots with comparison (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Reporting adoption as success.** Form can spread without substance. Report outcomes against comparison.
- **Mandating practices.** It produces ritual and resentment. Offer aims and let teams choose.
- **Copying another company's process.** It imports form, not the conditions that made it work. Start from your problems.
- **Too many changes at once.** Load exceeds capacity. Count and sequence.
- **Dismissing resistance.** You lose information. Listen and adapt.
- **Pilots without comparison.** Novelty effects mislead. Use a comparison and a longer period.
- **Never retiring anything.** Layers of process accumulate. Remove as you add.
- **Success theatre.** Stories without numbers, or numbers without stories, hide the truth. Report both, honestly.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Purpose and involvement | Practices announced | Aims stated in presentations | Aim and indicator written for each change; affected people consulted | Involvement and aim clarity measured; resistance recorded and answered | Change co-designed with users and teams across the organisation and partners |
| Introduction and evidence | Big-bang rollouts | Pilots without comparison | Pilots with comparison groups; adoption defined by behaviour | Outcome movement and reversion tracked; limits of evidence reported | Portfolio-wide learning about what changes work, shared openly |
| Load and sustainability | No view of change load | Initiatives listed | Change load counted per team and sequenced | Load managed with capacity; practices retired | Change planned jointly with capacity, wellbeing, and delivery goals |

## Checklist

- [ ] Each change has a written aim, a named indicator, and a baseline.
- [ ] Affected people took part in design, and their input is recorded.
- [ ] Concerns and resistance are recorded with responses.
- [ ] Pilots have a comparison group and a period long enough for novelty to fade.
- [ ] Adoption is defined by observable behaviour and purpose.
- [ ] Voluntary uptake and reversion are tracked, with reasons.
- [ ] Change load per team is counted, and initiatives are sequenced.
- [ ] Practices are reviewed for removal at least annually.
- [ ] Outcome movement is reported with its limits.
- [ ] No target requires a given percentage of teams to adopt a practice.

## AI prompts

**Write an aim and indicator for a change.**

```text
We plan to introduce [change] for [teams] in [type of organisation]. Draft a
one-paragraph aim in plain language (the problem, who feels it, the outcome that
should improve), an indicator with a baseline to record now, a way to compare
with similar teams that do not change, and signs that the practice has become
a ritual without purpose. Do not invent evidence. List your assumptions and
questions for the affected teams.
```

**Count and sequence change load.**

```text
Here is a list of initiatives that will ask [team or group] to change how it
works in the next [period]: [paste with sponsors, size, and dates]. Count the
load per team, identify conflicts and dependencies, and propose a sequence that
leaves room for the work and for sustainable pace. Suggest which could be
combined, delayed, or dropped. Do not assume we can do all of it. List your
assumptions.
```

**Design a pilot with a comparison.**

```text
Design a pilot of [change] with [number] willing teams and a comparison group
of [number] similar teams. Propose the outcome measures and baselines, the
duration (including time for novelty to fade), how to choose the comparison
group in advance, what else might confound the result, and what would make us
scale, adapt, or stop. Do not claim results from other organisations. List your
assumptions.
```

**Check for cargo cult.**

```text
Here is a practice our teams follow: [describe, with its artefacts and
meetings]. Ask me ten questions I could put to team members to see whether they
understand the purpose, can name the outcome it should improve, and would
adapt it to their context. Add signs in the artefacts that suggest the practice
is performed for show. Do not judge individuals. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an adoption or change metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an adoption metric entry measures behaviour and outcome, with its gaming vector and guardrail.

## Key takeaways

- Judge a change by its outcome against a comparison, not by the spread of its rituals.
- Write the aim and indicator before the practice, and test whether people can explain it.
- Involve the affected people continuously, and treat resistance as information.
- Prefer voluntary uptake, let practices evolve, and track reversions.
- Count the load of change on each team, and keep it within a sustainable pace.
- Report honestly, including what did not work, and retire practices that no longer serve.

## References and further reading

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
