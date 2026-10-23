# Skills and learning metrics

**A team that keeps learning keeps its services healthy, so protect time for learning inside a sustainable pace, measure whether skills are spread and used, and treat certificates and course counts as clues, never as proof of competence.**

## Overview and motivation

Services outlive the people who built them, and the technology under them changes constantly. A team's ability to keep up depends on what it knows and how fast it learns. The Agile Manifesto's principles include continuous attention to technical excellence and regular reflection on how to become more effective. ITIL's continual improvement and knowledge management practices describe the same need from the organizational side. Skills and learning measures ask whether the capability exists to run and change the services, whether it is spread widely enough to survive absence, and whether the organization gives people the time and support to grow.

Learning is easy to count and hard to measure well. Training hours, course completions, and certificates are visible, and none of them shows whether anyone can do something new on the job. A [professional certification](https://en.wikipedia.org/wiki/Professional_certification) shows that a person met an assessment standard at a point in time. It is useful evidence, especially for regulated roles and entry points such as ITIL or agile foundations, and it is not a measure of the person's current skill or judgement. This topic therefore leans on measures of capability in use: who can operate and change what, how fast new people become useful, and whether learning shows up in the work.

Several ideas shape the approach.

- **Much valuable knowledge is [tacit](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi observed that we know more than we can tell. Operating a complex service involves judgement that is hard to write down, and it spreads mainly through working alongside others. Documentation helps, and it cannot replace shared practice such as [pair programming](https://en.wikipedia.org/wiki/Pair_programming), shadowing, and review.
- **Breadth and depth both matter.** [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills) describe a person with depth in one area and working breadth across others. Teams of T-shaped people can cover absences and collaborate across boundaries. [Cross-training](https://en.wikipedia.org/wiki/Cross-training_(business)) builds that breadth deliberately.
- **Learning is social.** A [community of practice](https://en.wikipedia.org/wiki/Community_of_practice) is a group of people who share a craft and learn from each other. [Mentorship](https://en.wikipedia.org/wiki/Mentorship) pairs less experienced people with more experienced ones. Both spread knowledge across team boundaries.
- **Organizations can learn.** A [learning organization](https://en.wikipedia.org/wiki/Learning_organization), a term popularized by Peter Senge, continually transforms itself through the learning of its people. Practices such as blameless reviews of incidents are how organizations learn from experience (see topic 4.2, Postmortem and learning metrics).

Learning measures have their own distortions. Training budgets are spent on courses that nobody applies. Time for learning is promised and then consumed by incidents. Individuals are ranked by skills inventories, which makes them hide what they do not know. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies: when learning hours are a target, people attend sessions, and when certificates are a target, people collect them (see topic 1.2, Goodhart's law and the psychology of metrics).

A sustainable pace matters here too. Learning squeezed into evenings and weekends is a cost to people, and it is not a sign of a healthy organization. The measures below look at protected time inside the working week.

## Key principles

- **Measure capability in use, not course attendance.** Look at what people can do and what they do.
- **Protect learning time inside a sustainable pace.** Do not make learning an unpaid extra.
- **Spread knowledge on purpose.** Single points of knowledge are a risk to the service and a burden to the person.
- **Treat certificates as evidence, not proof.** They matter for some roles and say little about current skill.
- **Learn from work.** Incidents, reviews, and pairing teach more than most courses.
- **Keep skills data at team level.** Individuals should not be ranked by an inventory.
- **Let people shape their own learning.** Motivated people choose well when given time and support.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Protected learning time share | Share of team capacity set aside and actually used for learning | hours or capacity share used for learning in working time / total working capacity, at team level | percent | Team capacity plan and work tracker work type | Workforce and talent management; continual improvement | Time for reflection and technical excellence | Monthly |
| Cross-training depth | Share of critical tasks performed by at least two people in the last period | critical tasks performed by two or more people in the period / critical tasks | percent | Team task and ownership map, validated by recent work | Knowledge management; service continuity management | Collective ownership of the work | Quarterly |
| Time to first contribution | Time for a new team member to complete their first real change or resolved case | median and 85th percentile of days from start date to first completed real work item in production | days | Onboarding tracker and work tracker | Workforce and talent management; knowledge management | Time for a new team member to make a first change | Per hire, reviewed quarterly |
| Community participation | Share of team members taking part in a community of practice in the period, as chosen by them | members who attended, contributed, or presented in the period / team members, at team level | percent | Community records, voluntary | Knowledge management; continual improvement | Communities of practice | Quarterly |
| Training application rate | Share of training experiences where the learner or their team reports using the learning in work within 90 days | learning experiences reported as applied / learning experiences completed | percent | Short follow-up question to learner, anonymized to team | Workforce and talent management; continual improvement | Learning applied to the work | Quarterly |
| Relevant certification coverage | Share of roles that require a certification for legal, contractual, or entry reasons where the requirement is met | roles with required certification held / roles requiring certification | percent | Role requirements register, certificate records | Workforce and talent management; governance | Meeting contractual or regulatory entry requirements | Annual |
| Lessons shared across teams | Number of lessons from incidents or improvements that were shared outside the originating team and used by another team | shared lessons with a recorded use by another team in the period | count | Lessons register and review notes | Knowledge management; continual improvement | Learning shared across teams | Quarterly |

Define the critical tasks, roles, and learning types in the register. Protected learning time counts only time used for learning, not time offered and lost to urgent work, and it excludes after-hours learning. Cross-training depth counts people who have actually performed the task in the period, not those who could in theory. Training application rate uses self-reports and is aggregated by team, with a minimum group size. Certification coverage is only for roles with a genuine requirement, and it is never used to rate an individual's competence.

## Recommendations

### Protect time and make it real

**1. Plan learning time into capacity.** Set aside a share of each team's capacity for learning, such as a regular block each week, and write it into the capacity plan. A plan that assumes everyone works at full utilization on delivery has no room to learn. Track the share actually used, and look at why it falls short: incidents, deadlines, or culture. This ties to the planning and workload topics (see topic 2.5, Delivery forecasting and planning metrics).

**2. Let people choose, with guidance.** Motivated people know what they need to learn. Offer a budget and time, a menu of options, and conversations about team needs. Ask people to share what they learn with the team, which multiplies the value. Avoid mandatory learning that is irrelevant to the work.

**3. Make learning part of the work.** Pairing, rotation, shadowing, code review, internal talks, and blameless incident reviews teach in the context of real problems. Count them as learning in the capacity plan. A team that learns while delivering needs less time away from delivery.

### Spread knowledge

**4. Map critical tasks and who has done them.** List the tasks that must be done reliably: restoring a database, rotating a key, handling a major incident, deploying a risky change. For each, record who has performed it recently. The map shows single points of knowledge. Validate it with evidence of recent work, since a skills inventory based on self-assessment drifts from reality (see topic 9.3, Collaboration and handoff metrics).

**5. Cross-train deliberately.** Plan pairing and rotation so that every critical task has at least two people who have done it lately. Practice with drills and game days where possible. The aim is resilience and sustainable on-call, and it relieves the experts of being the only ones who can help.

**6. Support communities of practice and mentoring.** Encourage voluntary groups around crafts such as reliability, testing, security, or service management, and make time for them. Offer mentoring across teams. Measure participation in a light way, at team level, and ask what the communities have produced: shared practices, tools, lessons.

### Onboard well

**7. Measure time to first contribution.** Track how long it takes new members to complete a real piece of work in production, and what slows them: access, documentation, environment setup, or unclear ownership. Fix the causes, and ask recent joiners for their view. A fast, supportive start sets the tone and reduces risk (see topic 6.4, User and employee experience).

**8. Give new people real work with support early.** Start with small, real tasks and a named buddy. Review progress regularly and adjust. Learning by doing, with safety nets, is faster than a long period of reading.

### Evaluate learning honestly

**9. Ask whether training was applied.** After a course or an event, ask the learner and their team, a few weeks later, whether and how they used it. Aggregate the answers. Courses that nobody applies should be changed or dropped. The Kirkpatrick model of four levels of training evaluation, from reaction to learning to behaviour to results, offers a vocabulary for this, though simple follow-up questions are a good start.

**10. Use certifications for what they are good at.** Where law, contract, or a role's entry standard requires a certification, track coverage. Elsewhere, treat certification as one signal of effort and knowledge. Do not set certificate counts as targets, and do not pay or promote on them alone.

**11. Share lessons across teams.** Keep a lightweight register of lessons from incidents, reviews, and improvements, and track which have been used by a team other than the originator. A lesson that stays in the team that learned it has only been half learned by the organization. Review the register in communities of practice.

**12. Keep individual data out of rankings.** Do not publish skills inventories by person, and never rank people by training hours, certificates, or self-assessed skill. Aggregate to team level, and let people see their own data. Individuals will hide gaps if gaps count against them.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Protected learning time share | Logging ordinary work as learning; scheduling time that is then cancelled | Count only time used; compare with work type records and team comments |
| Cross-training depth | Listing people who have never done the task; counting a single observation | Evidence of recent work; drill results |
| Time to first contribution | Counting trivial changes; starting the clock late | Define "real" work in the register; ask the new member and their buddy |
| Community participation | Mandating attendance; counting sign-ups | Voluntary only; ask what the community produced |
| Training application rate | Pressuring learners to say they applied it; asking only enthusiasts | Anonymous aggregate; follow-up at team level; look at observable changes |
| Relevant certification coverage | Collecting certificates for roles that do not need them; treating certification as competence | Scope to genuine requirements; check practical capability by other evidence |
| Lessons shared across teams | Sharing trivial lessons; counting posts | Require a recorded use by another team; review quality |

A healthy reading is learning time that is protected and used, critical tasks known by several people, new members making real contributions quickly, communities that produce shared practice, training that people apply, and lessons that travel between teams.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Formal courses and certification | Structured, recognized, useful for entry and regulated roles | Cost; may not transfer to the job |
| Learning on the job | Relevant and immediate | Uneven; depends on mentors and time |
| Protected time | Makes learning real | Competes with urgent work; needs discipline |
| Learning in own time | No cost to delivery | Unsustainable; unfair; hidden overtime |
| Skills inventory | Shows gaps and risks | Subjective; can become a ranking |
| Evidence of recent work | Reliable | More effort to maintain |
| Centralized training programme | Consistency | Slow; may not fit teams |
| Team-chosen learning | Relevant; motivated | Variable quality; needs guidance |

The prose answer is to protect learning time in the working week, learn mainly through the work with some formal courses where they help, keep the skills map based on recent evidence, and avoid any use of the data to rank people.

## Questions to discuss with your team

**1. What did each of us learn at work last quarter, and how did we learn it?**
Share briefly. Notice whether most learning came from courses, from the work, or from colleagues. The facilitator should ask what made it possible and what got in the way. Agree one change that would increase useful learning.

**2. Which critical tasks could only one or two of us do, and what would happen if they were away?**
List them. Choose the riskiest and plan how to spread the knowledge: pairing, a drill, a runbook, rotation. Confirm that the plan does not add hidden overtime for the experts.

**3. How long did it take our last new colleague to do something real, and what slowed them?**
Ask them. Trace the steps from their first day. Discuss access, environment, documentation, and support. Agree two fixes that would help the next person.

**4. When did a course or certificate change how we work?**
Recall examples. Ask what made the difference. If few come to mind, discuss why. Decide which learning is worth continuing and which to drop.

**5. What lesson from a recent incident has another team actually used?**
Look at the lessons register. If nothing has travelled, ask how to share more effectively: a community, a short talk, a change to a standard. Pick one lesson to share this month.

**6. Is our learning time real, and what protects it?**
Compare the plan with what happened. Discuss what takes it over: incidents, deadlines, expectations. Agree a rule for protecting it, such as treating an urgent request as an escalation to a decision-maker.

## Four perspectives

### Product and delivery teams

Delivery teams learn mainly by building. They should plan learning time, pair and rotate on critical work, share what they learn, and take part in communities of practice. They should ask for the time and tools they need and treat learning as part of delivering well.

### Service and operations teams

Operations teams need breadth, because they cover absences and incidents at any hour. They should cross-train on critical tasks, use drills and game days, and capture what they learn in runbooks and reviews. Their on-call rhythm must leave space for rest and learning.

### Leadership and governance

Leaders decide whether learning is a priority or an afterthought. They should protect learning time in plans, fund the fixes that onboarding reveals, avoid targets for training hours or certificates, and support communities. Governance should track certification only where it is required and look at evidence of capability in use.

### Customers and users

Users benefit from teams that know their services deeply and keep up with change: faster fixes, fewer repeated mistakes, and better advice. They notice when the people who help them seem new to the system or when the same problem recurs. They can also teach teams about their own work, and their involvement is a form of learning.

## In practice: a service management example

A regional bank's technology operations group has six teams running core banking, payments, and digital channels. The numbers below are illustrative.

The group's training dashboard shows an average of 24 hours of training per person last year and 70 certificates earned, and the training director is pleased. The head of operations asks a different question: can the teams cope when key people are away? She asks each team to map its critical tasks and who has performed each in the last six months. Of 46 critical tasks, only 19 had been performed by two or more people, a cross-training depth of 41 percent. Fourteen tasks had been done by one person. Time to first contribution for the last eight hires has a median of 41 days, with an 85th percentile of 67, mostly spent waiting for access and finding documentation. A short follow-up with 38 people who completed courses found that 31 percent said they had applied the learning within 90 days. Teams report that learning time is usually the first thing cancelled in a busy week, and actual protected time used is about 3 percent of capacity.

The group makes four changes with the teams. Each team plans a standing learning block of about 8 percent of capacity, and a rule that a cancellation must be agreed with the team's lead and logged. Pairing and rotation plans target the 14 single-person tasks, starting with the five most critical, with drills every quarter. An onboarding checklist and a named buddy cut the access delay, and the first-week plan includes a small real change. Courses are chosen by teams from a shortlist, and a follow-up question goes out after 60 days. A cross-team community on reliability meets monthly, and lessons from incident reviews are shared there with a note of who used them.

A year later, cross-training depth is 78 percent, the median time to first contribution is 19 days, training application rate is 64 percent, and protected learning time used is about 7 percent of capacity. Six lessons from reviews have been adopted by other teams. The training director asks for a target of 40 training hours per person. The head of operations offers measures of cross-training depth, application, and time to first contribution instead, explaining that hours can be met by sessions nobody uses. The decision is recorded, and the dashboard drops average training hours. Certification coverage is tracked only for the roles where regulators require it.

## Agile, AI, automation, and analytics

### Agile

Protect learning time inside a sustainable pace and share lessons through regular reviews. The caution is that targets for training hours produce attendance, not learning.

### AI

AI changes the skills a team needs, such as checking AI output, writing good prompts, and understanding limits. Measure application of learning to work and the quality of AI-assisted work, not course completions. The caution is that certificates in AI tools may lag practice and do not prove competence.

### Automation

Automate learning reminders and skills mapping inputs, and measure the use of learning content. The caution is that automatic skills inference from activity data can be inaccurate and intrusive.

### Analytics

Show cross-training depth by team with counts. The decision informed is where knowledge is at risk. The caution is that skills matrices go stale, so review them.

## Sector lens

**Startup.** People wear many hats and learn fast under pressure. Protect some time for learning, make pairing the default, and watch for single points of knowledge. Hiring generalists helps. Do not build a training department too early.

**Small business.** Budgets are tight, and one person may cover a lot. Use low-cost learning: vendor documentation, community events, mentoring from a trusted external adviser, and cross-training where possible. Ensure at least one other person can handle critical tasks, even if only roughly.

**Enterprise.** Scale allows formal programmes, communities, and career paths. It also invites uniform requirements that fit no one. Provide a common learning budget and platform, let teams choose, support internal communities, and measure capability by team. Align certification with real needs.

**Government and public sector.** Skills shortages, procurement rules, and civil service frameworks shape development. Certification may be a formal requirement for some roles. Invest in apprenticeships and internal mobility, retain knowledge when contracts end, and use communities across agencies to share practice (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the time itself, which is the main cost, plus budgets for courses and events, the effort to maintain the skills map, mentoring time, and some tooling for communities. Pairing and rotation cost throughput in the short term.

The returns are resilience to absence and turnover, faster onboarding, fewer repeated mistakes, quicker problem solving, and better retention among people who are growing. Build the case from your own data: the number of critical tasks known to a single person, the days new hires take to be productive and the cost of that time, incidents that were prolonged by absent experts, and attrition among staff who say they have no room to grow. Avoid quoting published estimates of returns on training unless you can trace their method and fit. The cost of not learning appears late, as outdated skills and fragile services (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Training hours as a target.** It buys attendance. Measure application and capability.
- **Certificates as proof of skill.** They show an assessment at a point in time. Use other evidence.
- **Learning in own time.** It hides overtime and is unfair. Protect time in the working week.
- **Self-assessed skills inventories used for ranking.** People inflate or conceal. Base maps on recent work and keep them at team level.
- **Hero experts.** One person who knows everything is a risk and a burden. Spread the knowledge.
- **Courses chosen centrally for everyone.** They fit few. Let teams choose with guidance.
- **Cancelling learning first.** It teaches that learning is optional. Protect it, and treat exceptions as decisions.
- **Lessons that stay local.** The organization repeats mistakes. Share them and track use.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Time and support | Learning in own time | Occasional training budget | Protected time in the capacity plan; team-chosen learning | Time used is tracked; cancellations are decisions; budgets follow team needs | Learning time and growth paths coordinated across teams and partners |
| Spreading knowledge | Experts carry the work | Documentation exists | Critical tasks mapped by recent evidence; pairing and drills | Cross-training depth managed; onboarding measured and improved | Knowledge flows freely across teams, suppliers, and communities |
| Evaluating learning | Attendance counts | Satisfaction ratings for courses | Application follow-ups; certification where required | Lessons shared and used across teams; training changed by results | Learning outcomes linked to service outcomes and shared with partners |

## Checklist

- [ ] Learning time is planned into team capacity and tracked as used.
- [ ] Critical tasks are listed, with who performed each recently.
- [ ] Every critical task has a plan to reach at least two practiced people.
- [ ] Time to first contribution is measured for new members and acted on.
- [ ] Communities of practice and mentoring are supported and voluntary.
- [ ] Training is followed up with a question about application.
- [ ] Certification is tracked only for roles with a genuine requirement.
- [ ] A lessons register records sharing and use across teams.
- [ ] Skills data is kept at team level and never used to rank individuals.
- [ ] Learning never depends on unpaid hours.

## AI prompts

**Build a critical task map.**

```text
Our team runs [services]. List the critical tasks that must be done reliably
(for example restoring from backup, rotating credentials, major incident
coordination, risky deployments) and suggest evidence we can use to record
who has done each in the last six months. Propose a simple table and a way to
review it with the team without ranking people. Do not invent our tasks beyond
what I describe. List your assumptions.
```

**Design an onboarding plan.**

```text
Design a first-30-days onboarding plan for a new [role] joining a team that runs
[services]. Include access setup, a named buddy, a small real change by the end
of the first week, regular check-ins, and what to measure (time to first
contribution and what slowed it). Keep it supportive and realistic. List your
assumptions and items to adapt to our context.
```

**Follow up on training.**

```text
Draft a short follow-up question set to send to people 60 days after they
completed [course or event]. Ask whether and how they applied it, what got in
the way, and what would help, in a way that can be aggregated to team level
without identifying individuals. Suggest how to read the answers and what to
change. List your assumptions.
```

**Plan a knowledge spreading effort.**

```text
Task [description] is only done by [one or two people] in our team. Propose a
plan to spread it using pairing, a drill, and documentation, with realistic
timing that protects those people's workload. Suggest how we will know the plan
worked, using evidence of recent work. List your assumptions and risks.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a skills or learning metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a learning metric entry measures capability in use and carries its gaming vector and guardrail.

## Key takeaways

- Measure capability in use: who has done the critical tasks lately, and how fast new people contribute.
- Protect learning time in the working week, inside a pace that can be sustained.
- Spread knowledge on purpose through pairing, rotation, drills, and communities.
- Follow up on whether training was applied, and treat certificates as evidence, not proof.
- Share lessons across teams and track their use.
- Keep skills data at team level, and never rank individuals.

## References and further reading

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Professional certification](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Cross-training (business)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Community of practice](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentorship](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Learning organization](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
