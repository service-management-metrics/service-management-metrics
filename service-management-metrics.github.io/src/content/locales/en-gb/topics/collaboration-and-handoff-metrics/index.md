# Collaboration and handoff metrics

**Work slows and quality drops wherever it changes hands, so measure the handoffs, the waiting between them, and the dependence on single people, and use the numbers to bring the right people together instead of counting who talks to whom.**

## Overview and motivation

The Agile Manifesto's principles say that business people and developers must work together daily throughout a project. The underlying observation is old and robust: most delay in a service organisation does not come from people working slowly. It comes from work waiting between people. A request moves from the service desk to a second-line team to an application team to a database administrator, and at each step it joins a queue, loses context, and risks being sent back. The people involved may each be quick. The system is slow.

IT service management (ITSM), as codified by ITIL, has long organised support into tiers and teams, with escalation as the mechanism for moving a problem to someone who can solve it. That structure has benefits: specialisation, clear ownership, and controlled access. It also creates handoffs, and handoffs have a cost. Agile and DevOps practice responds by building cross-functional teams that carry more of the work from end to end, and by encouraging collaboration in real time. The two traditions reach similar conclusions: fewer handoffs, shorter waits between them, and people who can solve the problem working on it together.

Several ideas help with measurement.

- **Handoffs and queues.** Each time work passes from one team to another, it typically waits in a queue. The time spent waiting is often much larger than the time spent working. This is why flow efficiency, introduced earlier, is usually low (see topic 2.2, Lead time, cycle time, and flow efficiency). A [bottleneck](https://en.wikipedia.org/wiki/Bottleneck_(production)) is a point of limited capacity in a process, and it determines the throughput of the whole.
- **Structure shapes communication.** [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) states that organisations design systems that mirror their own communication structures. The reverse is also practical: if you want a system with fewer dependencies, arrange teams to reduce the dependencies between them. Team boundaries create handoffs, and handoffs shape the architecture.
- **Dependencies.** A [dependency](https://en.wikipedia.org/wiki/Dependency_(project_management)) is a relationship in which one piece of work cannot proceed until another finishes. Dependencies between teams are a major source of delay, and they can be mapped, counted, and reduced.
- **Coordination costs grow with people.** [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law), from Frederick Brooks's essays on software projects, observes that adding people to a late project can make it later, partly because of added communication overhead. More people in a conversation is not automatically better.
- **Dependence on individuals.** The [bus factor](https://en.wikipedia.org/wiki/Bus_factor) is the number of people who would need to be unavailable to stop a project, usually used to point out risk when knowledge sits in one head. It is a property of the knowledge distribution, not a rating of any person.

Collaboration measures have a dark side. Counting messages, meetings, or network links as a measure of collaboration is easy and tempting, and it quickly slides into monitoring people's communications. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to the group and to privacy: when "collaboration" becomes a target, people produce visible activity, and when it becomes surveillance, they stop speaking openly (see topic 1.2, Goodhart's law and the psychology of metrics). The measures here therefore look at work items, handoffs, and dependencies, and at team-level patterns. They do not read messages or rank individuals.

This topic connects to the flow measures of Part 2, the incident and request measures of Part 3, and the supplier handoffs of the previous part (see topic 8.4, Supplier and contract metrics).

## Key principles

- **Measure the work, not the conversations.** Handoffs, waits, and dependencies are properties of work items and teams.
- **Fewer handoffs beat faster handoffs.** The best handoff is the one that does not happen.
- **Bring the people together.** Collaboration in real time often removes a whole chain of waiting.
- **Make dependencies visible, and reduce them.** Map them, count them, and change team boundaries or architecture where they hurt most.
- **Spread knowledge deliberately.** Single points of knowledge are risks, and sharing is a design activity.
- **Protect focus.** Collaboration that fills every hour with meetings destroys the time to do the work.
- **Involve stakeholders continuously.** Questions answered in hours serve better than answers collected in weekly meetings.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Handoff count | Number of times a work item changes owning team before completion | median and 85th percentile of team-to-team transfers per completed item, by item type | transfers per item | ITSM or tracker assignment history, aggregated by team | Incident management; service request management; change enablement | Cross-functional teams carrying work end to end | Monthly |
| Handoff wait share | Share of an item's elapsed time spent waiting after a handoff before work resumes | time between handoff and first action by the receiving team / total elapsed time, median across items | percent | Assignment and activity timestamps | Incident management; service request management | Flow efficiency; queue time | Monthly |
| Reassignment rate | Share of items passed between teams more than twice or returned to a previous team | items reassigned more than twice or returned / completed items | percent | Assignment history | Incident management; problem management | Rework and bouncing work | Monthly |
| Dependency delay | Time items spend blocked waiting on another team | median and 85th percentile of days in a blocked-by-another-team state, with the dependency named | days | Tracker blocked state and dependency field | Change enablement; release and deployment management | Blocked work item age | Monthly |
| Collaborative resolution rate | Share of incidents resolved by people from several teams working together in real time without sequential escalation | incidents with a recorded real-time collaboration (for example a shared channel or call) that resolved without further handoff / incidents of eligible priority | percent | Incident records with collaboration tag | Incident management; major incident management | Swarming on problems | Monthly |
| Knowledge coverage | Share of critical components with at least a stated number of team members able to operate and change them | critical components with at least the target number of people able to operate and change / critical components | percent | Team-maintained skills and ownership map | Knowledge management; service continuity management | Shared ownership and collective code ownership | Quarterly |
| Stakeholder response time | Time from a team's question to a stakeholder until a usable answer | median and 85th percentile of hours from question logged to answer recorded | hours | Question log or tracker field for open questions | Service level management; business relationship management | Continuous stakeholder involvement | Monthly |

Aggregate at team, queue, or service level, and never report by individual. Handoff count excludes automatic assignments that do not change owning team. Wait share starts when the item is assigned to the receiving team and ends at their first recorded action. Knowledge coverage uses the team's own judgement of who can operate a component, reviewed with the team, and never ranks individuals. Collaboration data comes from item tags and records, not from reading messages.

## Recommendations

### Map the handoffs

**1. Draw the path of a typical item.** Pick a common type of request or incident and trace its path from the first contact to resolution: each team, each queue, each wait. Use tracker history for real examples, not the official process diagram. The map shows where work waits and where it bounces. Share it with the teams involved, and ask them to identify the waste they see.

**2. Measure handoffs and waits from the work item history.** Use assignment and activity timestamps to compute handoff count, wait share, and reassignment rate for each item type. Look at the distribution: most items may pass once, while a long tail bounces many times. The tail is where the largest delays and the most frustration lie.

**3. Read the data with the people who do the work.** A high reassignment rate may reflect unclear ownership, missing information, or legitimate triage. Ask the teams before concluding. They know why items bounce, and what would stop it.

### Reduce handoffs and waiting

**4. Move capability to the work.** Where many items go to a second team for a simple action, ask whether the first team could be given the knowledge, access, or automation to do it. Self-service and runbooks can remove whole handoffs (see topic 3.7, Self-service and automation metrics). Take care that moving work does not simply overload the first team.

**5. Use collaboration in place of sequential escalation.** For complex or urgent incidents, bring the relevant people together in real time, with one person coordinating, instead of passing the ticket through tiers. This practice, often called swarming, removes the waits and the loss of context that tiered escalation creates. Track the collaborative resolution rate, and look at whether outcomes and satisfaction improve (see topic 3.4, Major incident metrics).

**6. Clarify ownership at boundaries.** For each service and component, state who owns it, how to reach them, and what they need in a handoff. A short template of required information, agreed with the receiving team, reduces returns for missing details. Review reassignment cases to find ownership gaps.

**7. Reduce dependencies where they hurt most.** Map the dependencies between teams, count how often each causes delay, and tackle the worst. Options include changing the architecture, giving a team the capability it keeps waiting for, or reorganising teams around services. [Cross-functional teams](https://en.wikipedia.org/wiki/Cross-functional_team) that contain the skills needed to deliver a service from start to finish minimise dependencies, and they bring continuous collaboration into the structure. Conway's law suggests that structure and design should be changed together.

### Spread knowledge and involvement

**8. Make knowledge coverage visible and improve it.** Keep a simple map of critical components and the people able to operate and change each. Look for components known to one person, and plan pairing, documentation, and rotation to spread it. Treat the result as a risk to the system. The aim is resilience and a sustainable pace for the people who know the most, since a person who is the only expert cannot take leave.

**9. Keep stakeholders in the loop continuously.** Agree how stakeholders will be reached with questions and how fast answers should come. A team that waits a week for a decision on a detail is waiting for the stakeholder, and the cost is real. Record questions and answers, measure the response time, and use it in conversations with stakeholders about their involvement.

**10. Protect time for focused work.** Collaboration should be purposeful. Review the meetings that fill the calendar, and ask for each what decision it supports. Reduce the number of people in conversations that do not need them, in line with Brooks's law. Pair this with the focus measures in the earlier topic on team health (see topic 9.1, Team health and developer experience).

### Keep it honest

**11. Do not measure communication volume.** Counting messages, meetings, or network links says little about whether people are working well together, and it invites monitoring of individuals. If your team chooses to use social network analysis to understand how information flows, do it with consent, at group level, and for the team's own learning, and never to rate individuals.

**12. Review handoff measures with teams and suppliers.** Share the patterns across the teams and suppliers involved, and agree on one or two joint improvements. Track whether handoff counts and waits fall. For supplier boundaries, include the measures in joint reviews (see topic 8.4, Supplier and contract metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Handoff count | Keeping items assigned to one team while others do the work; reassigning to a shared queue to avoid counting | Check actual activity by team; count handoffs by activity, not assignment alone |
| Handoff wait share | Recording a first action that is only an acknowledgement; assigning to the right team late | Define "first action" as a substantive step; compare with satisfaction and resolution time |
| Reassignment rate | Refusing to reassign even when wrong; closing and reopening items under another team | Resolution quality and reopen rate; sample bounced items |
| Dependency delay | Not recording blocked state; naming the wrong dependency | Compare with cycle time and item age; review the dependency field with teams |
| Collaborative resolution rate | Tagging every incident as collaborative; creating shared channels with no real work | Check that the call or channel included the resolving people; resolution time and outcomes |
| Knowledge coverage | Listing people who could in theory do the work; inflating the map | Pairing or drill evidence; ask who actually performed the last change |
| Stakeholder response time | Logging questions late; marking an answer as received when it is not usable | Stakeholder confirms the answer is usable; sample questions |

A healthy reading is fewer handoffs for common items, shorter waits at the boundaries that remain, fewer bounced items, dependencies that shrink, more incidents solved by people working together, critical components known by several people, and stakeholders who answer in hours.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Tiered support with escalation | Specialisation, control of access | Handoffs, waiting, loss of context |
| Cross-functional teams | Fewer handoffs, shared ownership | Needs broad skills; may duplicate specialists |
| Collaborative resolution | Faster, better learning | Pulls several people at once; needs coordination |
| Sequential escalation | Efficient use of specialists | Slower for complex problems |
| Centralised specialist teams | Depth of expertise, consistent standards | Bottlenecks, queues |
| Embedded specialists | Fast access | Isolation; uneven standards |
| Heavy meeting culture | Shared awareness | Eats focus; slows work |
| Asynchronous written communication | Preserves focus; records decisions | Slower for urgent or ambiguous matters |

The prose answer is to keep specialists where depth matters, bring people together in real time for complex or urgent problems, reduce handoffs through capability and clear ownership, and balance meetings with protected focus.

## Questions to discuss with your team

**1. Trace the last incident or request that bounced between teams. Where did it wait, and why?**
Use the item's history. Mark each handoff and wait. The facilitator should look for missing information, unclear ownership, and queues that nobody watches. Agree one change that would have stopped the bounce.

**2. Which team do we most often wait for, and what do they need from us to be quicker?**
List the dependencies and the delays they cause. Invite the other team to the conversation, or prepare questions for them. Agree on a change to the handoff template or the working agreement.

**3. What do only one or two of us know how to do, and what happens when they are away?**
Name the components or tasks. Ask what plan would spread the knowledge: pairing, documentation, rotation. The facilitator should be careful to treat this as a risk to the system and a matter of workload for the experts.

**4. When did solving a problem together in real time work better than passing it along?**
Recall an example. What made it work: the right people, a coordinator, a shared view? Discuss when to use this approach and how to enable it, such as a standing channel and rules for who joins.

**5. How long do we wait for answers from our stakeholders, and what does it cost?**
Look at open questions and their ages. Discuss what is slowing answers: availability, unclear questions, or unclear authority. Agree on an expectation with stakeholders and a way to track it.

**6. Which of our meetings could be replaced by a written note or a decision?**
List the regular meetings and for each ask what decision it supports and who needs to be there. Cancel or shorten one. Agree to protect a block of time with no meetings.

## Four perspectives

### Product and delivery teams

Delivery teams hold many of the dependencies and feel the waiting. They should map their dependencies, ask for the capabilities they keep waiting for, share knowledge to avoid single points, and keep stakeholders close. A cross-functional composition often removes the largest delays.

### Service and operations teams

Operations and support teams sit at the centre of the handoffs: they receive, route, and resolve. They should maintain clear ownership information, use real-time collaboration for hard problems, and record handoffs accurately. They know which boundaries cause the most pain and can say what information would prevent returns.

### Leadership and governance

Leaders shape the structure that creates handoffs. They should look at handoff and dependency data when designing teams and funding, support cross-functional teams where they help, and avoid measures of communication volume. Governance should treat repeated delays at one boundary as a structural issue to fix.

### Customers and users

Users feel handoffs as being passed around, repeating themselves, and waiting. They should be told who owns their problem and be kept informed. Their experience of being bounced is a direct measure of how well collaboration works, and their feedback should be read alongside the numbers (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A national retailer's IT group runs a service desk, an infrastructure team, an application platform team, and several product teams. Users report that requests about the point-of-sale system take too long. The numbers below are illustrative.

The service manager traces 60 recent requests. The median request passes through 3 teams and the 85th percentile through 6. In the median case, 71 percent of elapsed time is spent waiting after a handoff before the receiving team acts. 22 percent of requests are reassigned more than twice, often between the infrastructure and platform teams, who each believe the other owns the issue. Blocked time waiting on another team has a median of 3 days for requests that involve certificates, and 8 days at the 85th percentile. The platform's certificate renewal knowledge sits with one engineer, and two other critical components are known by only one person each. Stakeholders in store operations take a median of 26 hours to answer questions from the delivery team.

The group agrees four changes with the teams. A short ownership table states which team owns each component of the point-of-sale service and what information a handoff must contain. The service desk gets runbook access and automation for certificate renewals, which removes a common handoff. For priority incidents, the group sets up a standing channel and a rule that the incident coordinator brings in the relevant people at once, instead of escalating by tiers. The platform team pairs a second and third person on the certificate process, and plans similar pairing for the two other components, with time protected in the plan. The delivery team and store operations agree to a same-day answer for blocking questions, tracked in a question log.

Three months later, the median request passes through 2 teams, the wait share falls to 38 percent, and the reassignment rate to 9 percent. Certificate-related requests have a median blocked time of under a day. Knowledge coverage on critical components rises from 52 percent to 81 percent. Store operations' median response time falls to 7 hours. The head of IT is asked for a measure of how much teams communicate. The service manager explains that message volume says little about whether work flows, and that tracking it could undermine trust, and offers the handoff and waiting measures instead. The decision is recorded, and the ownership table is added to the service description.

## Agile, AI, automation, and analytics

### Agile

Bring the right people together early and review handoffs regularly with stakeholders. The caution is that counting meetings or messages measures activity, not collaboration.

### AI

AI agents and assistants add new handoffs between people and software. Measure handoffs between AI and humans, including the share that return for correction. The caution is that a handoff to an AI that cannot finish creates a hidden loop.

### Automation

Capture reassignments and waits from the tracker automatically, and measure automated routing on misroutes. The caution is that communication metadata about individuals is surveillance, so keep analysis at the team level.

### Analytics

Show handoff counts and wait share by value stream with counts. The decision informed is which handoff to remove or redesign. The caution is that counting handoffs without their cause leads to merging teams for the wrong reason.

## Sector lens

**Startup.** Small teams collaborate naturally, and handoffs appear when specialists emerge. Keep teams cross-functional as long as possible, document ownership lightly, and watch for knowledge held by one person. Do not import tiered support too early.

**Small business.** One or two people may cover everything, and the largest risk is dependence on them. Share knowledge through simple runbooks and cover for absence. Handoffs to suppliers are the main boundary, so keep clear contacts and escalation paths.

**Enterprise.** Scale creates many teams, layers, and suppliers, and handoffs multiply. Map the most common item paths, design team boundaries around services, and use coordination roles for cross-team incidents. Share handoff data across teams so that boundaries get joint attention.

**Government and public sector.** Responsibility is often divided across agencies, contractors, and legal boundaries, and handoffs involve procurement and formal approval. Make the ownership table explicit, use joint reviews with contractors, and use shared channels for incidents that cross boundaries (see topic 8.4, Supplier and contract metrics).

## Business case: motivations, ROI, and TCO

The costs are the effort to extract and analyse assignment history, time for teams to trace paths and agree ownership, the cost of cross-training, and any tooling for real-time collaboration. Restructuring teams is a larger decision with its own costs.

The returns are shorter times to resolve and deliver, less rework from bounced items, lower risk from single points of knowledge, and a calmer working environment. Build the case from your own data: the share of elapsed time spent waiting, the number of items that bounce, the cost of delays at the worst boundary, and the effect of key-person absences on past incidents. Avoid citing published figures about the cost of handoffs unless you can trace the source and context. Count the cost of the changes, and compare it with the delay removed (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Counting messages or meetings.** It rewards noise and invites surveillance. Measure the flow of work.
- **Optimising the speed of each handoff.** The aim is fewer handoffs. Remove them where you can.
- **Blaming the receiving team for waits.** The cause is often the queue and the structure. Look at the system.
- **Escalating by default.** Sequential tiers add waiting. Bring people together for complex problems.
- **Unclear ownership.** Items bounce. Publish an ownership table and keep it current.
- **Hero experts.** Single points of knowledge are a risk and a burden. Spread knowledge deliberately.
- **Meetings as collaboration.** They can crowd out work. Review them against decisions.
- **Treating knowledge coverage as an individual rating.** It becomes a ranking. Keep it a system measure.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Visibility of handoffs | Anecdotes | Paths drawn for a few services | Handoff count, wait share, and reassignments measured from history | Measures reviewed with teams and linked to outcomes | Shared view across teams and suppliers; boundaries redesigned from data |
| Reducing handoffs | Escalate by default | Some runbooks and templates | Ownership tables; capability moved to the first team; collaboration for hard problems | Dependencies mapped and reduced; collaborative resolution tracked | Teams organised around services with minimal dependencies across the organisation |
| Knowledge and stakeholders | Experts carry everything | Informal sharing | Knowledge coverage mapped; stakeholder questions logged | Coverage and response times managed; pairing planned | Knowledge and decisions flow freely across teams, suppliers, and stakeholders |

## Checklist

- [ ] The path of a typical item has been traced from real tracker history.
- [ ] Handoff count, wait share, and reassignment rate are measured per item type.
- [ ] Ownership of each service and component is published and current.
- [ ] A handoff template states the information the receiving team needs.
- [ ] Complex or urgent incidents use real-time collaboration with a coordinator.
- [ ] Cross-team dependencies are mapped, and the worst are being reduced.
- [ ] Knowledge coverage of critical components is mapped, with a plan to spread it.
- [ ] Stakeholder questions are logged and response times reviewed.
- [ ] No measure counts messages, meetings, or individual communication.
- [ ] Results are shared with the teams and suppliers involved.

## AI prompts

**Analyse a path of work items.**

```text
Here are anonymised assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Draft an ownership table.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Plan knowledge spreading.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Design a collaborative incident approach.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organisation] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a handoff or collaboration metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a collaboration metric entry measures work and not individuals, with its gaming vector and guardrail.

## Key takeaways

- Most delay sits in the waits between handoffs, so measure handoff count, wait share, and reassignments from work item history.
- Reduce handoffs by moving capability to the work, clarifying ownership, and mapping and cutting dependencies.
- Bring the right people together in real time for complex or urgent problems.
- Spread knowledge of critical components, and treat single points of knowledge as a system risk.
- Keep stakeholders continuously involved, with quick answers to blocking questions.
- Never measure communication volume or rate individuals on collaboration.

## References and further reading

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
