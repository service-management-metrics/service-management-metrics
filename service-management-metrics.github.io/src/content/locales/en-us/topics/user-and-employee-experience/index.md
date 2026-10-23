# User and employee experience

**People do their best work when the tools, devices, and support around them just work, so measure the friction your colleagues meet, treat the answers as a reason to remove obstacles, and never turn that data into surveillance or a ranking of people.**

## Overview and motivation

The fifth principle behind the Agile Manifesto says to build projects around motivated individuals, give them the environment and support they need, and trust them to get the job done. For the people who use internal IT, the environment is the laptop, the sign-in, the collaboration tools, the access process, and the service desk. When those are slow or confusing, motivated people lose time and goodwill, and they invent workarounds. Measuring that environment is therefore a way of supporting people. It is not a way of watching them.

[Employee experience](https://en.wikipedia.org/wiki/Employee_experience_management) is the sum of an employee's interactions with their workplace across their time with the organization. The part that IT shapes is sometimes called the digital employee experience, and the [digital workplace](https://en.wikipedia.org/wiki/Digital_workplace) is the set of technology that people use to work. The earlier topics of this part covered satisfaction surveys (see topic 6.1, Customer satisfaction metrics) and experience level agreements (see topic 6.2, Experience level agreements). This topic turns the same attention inward, to the colleagues who use IT services every day, including the engineers and operators who build and run them.

Internal users differ from external customers in four ways that matter for measurement.

- **They cannot leave.** An employee has no competitor to switch to, so silence is not satisfaction. It may mean resignation, or a workaround.
- **They are identifiable.** In a company of a few hundred people, a small group of survey answers can point at a person. Privacy design comes first.
- **They are also colleagues.** Poor experience data harms relationships and morale, and good data can be shared openly and acted on together.
- **They include the delivery and operations teams.** The tooling that developers and service desk staff use is part of the experience, and its friction reaches users through slower fixes.

Two themes run through this topic. The first is **friction**: the avoidable effort, delay, and interruption that stands between a person and their work. Interruptions and mental overhead cost more than their clock time suggests. The idea of [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load), the burden on working memory, explains why a confusing form or an unexpected forced restart costs more than the minutes it takes, and the idea of [flow](https://en.wikipedia.org/wiki/Flow_(psychology)), a state of absorbed focus, explains why protecting uninterrupted time matters for knowledge work. The second theme is **ethics**: how to learn about experience without invading privacy. [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring) technology can measure a great deal, and the line between supporting and policing is easy to cross. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies in a human form here: a score used to judge people teaches them to hide their problems (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Measure the environment, not the person.** The unit of analysis is a service, a device type, or a group, never an individual.
- **Treat friction as the enemy.** Time lost, interruption, and confusion are costs to remove.
- **Ask, observe, and measure.** Combine what people say with what systems record and what you see when you watch work being done.
- **Make privacy a design requirement.** Collect the least data that answers the question, aggregate early, and suppress small groups.
- **Include everyone.** Accessibility needs, remote and shift workers, and new starters often meet the worst experience.
- **Protect focus.** Plan changes, updates, and notifications around people's work.
- **Say what you collect and why.** Transparency builds the trust that honest answers depend on.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Day-one readiness rate | Share of new starters whose devices, accounts, and access are complete and working at their start time | new starters with all agreed items working at start / new starters in the period | percent | Onboarding requests, identity system, new starter confirmation | Service request management; service catalog management | Team working agreement for onboarding | Monthly |
| Time to productive | Elapsed time from start date to the point where a new starter has everything needed for their first real task | median and 85th percentile of days from start date to confirmation from the new starter and their manager | days | Onboarding tracker; short confirmation question | Service request management; continual improvement | Time for a new team member to make a first change | Monthly |
| Workaround prevalence | Share of surveyed staff who use unapproved tools or manual steps to get around an official service | respondents reporting a workaround for the service / valid respondents | percent | Pulse survey; sanctioned-tool discovery reports | Service level management; continual improvement | Impediments raised in daily team check-ins | Quarterly |
| Forced-disruption minutes | Time people are interrupted by planned IT actions such as forced restarts, updates, and sign-in prompts | total disruption minutes caused by planned actions / active users in the group | minutes per person per month | Endpoint management logs, aggregated by group | Change enablement; release and deployment management | Interruption-free working time | Monthly |
| Accessibility request resolution time | Time to resolve requests related to accessibility needs | median and 85th percentile of hours from request to confirmed working solution | hours | Request system with an accessibility tag | Service request management; incident management | Inclusive definition of done | Monthly |
| Tool pulse score | Rating of one named tool or service on a short agreed question | mean rating or share favorable across valid responses, per tool | scale points or percent | Pulse survey, rotating tools | Service level management; continual improvement | Feedback from team members on their tools | Quarterly |
| Privacy safeguard compliance | Share of experience reports that meet the suppression and aggregation rules | reports meeting the rules / reports published | percent | Review of published reports against the privacy rules | Information security management; measurement and reporting | Working agreement on data use | Quarterly |

Define the group and the period for every measure. Day-one readiness counts a new starter as ready only when every item on an agreed list works, and the list is recorded in the metric register. Forced-disruption minutes are computed from group totals, and the lowest level shown is a group of at least ten people. Privacy safeguard compliance applies to the experience program itself, which makes it a guardrail on the other six.

## Recommendations

### Start from people and their work

**1. Walk through a day with colleagues.** Sit with a few people from different roles, locations, and shifts and watch them work. Note every wait, every workaround, and every moment of confusion. Ask what they would fix first. Observation finds problems that surveys miss, because people stop noticing the friction they have learned to live with. Agree beforehand what you will record and how you will use it.

**2. Map the moments that matter.** For staff, the high-impact moments are usually the first day, a laptop failure, a move between teams, a request for access, and leaving the organization. Write down the steps in each and who owns them. The map shows hand-offs between teams where delay hides, which links to the collaboration measures in a later part (see topic 9.3, Collaboration and handoff metrics).

**3. Include the people at the edges.** Staff with accessibility needs, shift workers, remote and field staff, and contractors are often invisible in averages. Segment the results where it is safe to do so, and review the worst-served group on its own. Treat accessibility as a first-class requirement. [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) standards such as the Web Content Accessibility Guidelines give a concrete checklist for internal tools, and accessibility problems are a legal and ethical matter in many jurisdictions.

### Measure with care

**4. Combine three kinds of evidence.** Use short pulse questions about named tools and moments, system measures such as forced-disruption minutes and onboarding completion, and conversations. When two kinds disagree, investigate. A tool with excellent uptime and a poor pulse score is telling you something that uptime cannot (see topic 5.3, Availability metrics).

**5. Ask about a tool, not about IT.** "How easy is it to find a document in the file system?" gets better answers than "How is IT?" Rotate tools through the pulse so that no one is asked more than once or twice a quarter, and keep wording steady so trends mean something.

**6. Count minutes that people lose.** Time lost is easier to understand than a score. Estimate it from the system where you can, for example restart prompts and sign-in failures, and ask people for a rough figure where you cannot. Present it per person per month for a group, with the method, and avoid multiplying by salary to make a dramatic number unless you also state the assumptions.

**7. Minimize and aggregate.** Follow the principle of [data minimization](https://en.wikipedia.org/wiki/Data_minimization): collect only what you need, keep it only as long as you need it, and aggregate as early as possible. Where data could identify someone, [pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization) reduces the risk. Rules such as [k-anonymity](https://en.wikipedia.org/wiki/K-anonymity), which requires that each reported group contains at least k people, give a simple way to suppress small cells. State your k in the register.

**8. Draw a clear line against surveillance.** Do not use experience data, endpoint telemetry, or sentiment to evaluate individuals, to detect who is "less engaged," or to feed performance reviews. Say so in writing, and let staff representatives or a works council review the data plan where they exist. Check local law and privacy specialists before collecting any behavioral data. Trust, once lost, makes every later survey less honest.

### Act on what you learn

**9. Fix the biggest friction first and say so.** Rank problems by time lost, number of people, and severity for the people affected, and fund the top ones. Tell people what you fixed and what you chose not to, with reasons. A visible fix is the strongest encouragement to keep reporting problems.

**10. Plan disruptions around work.** Many forced interruptions are avoidable. Schedule updates outside focus time, offer deferral within limits, and bundle restarts. Review forced-disruption minutes next to security goals so the trade-off is explicit, since some updates must happen quickly (see topic 4.3, Change enablement metrics).

**11. Treat workarounds as design feedback.** When people use an unapproved tool, ask what it does better. The answer is a requirement the official tool missed. [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) carries real risks for security and cost, and a punitive response drives it underground. Prefer to adopt the good idea, or explain the risk and offer a safe alternative.

**12. Share the program with the people it serves.** Show results to staff, hold a short review with representatives, and ask what to change in the next quarter. The program is a form of continuous collaboration between IT and its users, and continuous improvement of the environment is the outcome. Link it to the people measures in the next part (see topic 9.2, Satisfaction and well-being metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Day-one readiness rate | Shortening the agreed list; marking items ready before they work; delaying the official start date | Written list in the register; new starter confirmation; time to productive |
| Time to productive | Marking the start of the clock later; closing the onboarding record early | Clock definition in the register; manager and new starter both confirm |
| Workaround prevalence | Discouraging honest answers by hinting at consequences; asking only satisfied groups | Anonymity statement; response rate and respondent mix; privacy safeguard compliance |
| Forced-disruption minutes | Counting only some kinds of interruption; moving disruptions to the group not measured | Define all planned interruption types; report by group including remote and shift staff |
| Accessibility request resolution time | Closing requests with a partial fix; tagging requests as something else to avoid the clock | Confirmation from the requester that the solution works; review of untagged requests |
| Tool pulse score | Surveying only happy users; changing the question; training staff to answer well | Stable wording log; response rate and mix; read comments |
| Privacy safeguard compliance | Reporting compliance without independent review; widening groups to hide issues | Periodic review by someone outside the team; publish the rules (the value of k and suppression) |

A healthy reading is new starters who can work on their first day, a falling count of forced interruptions, workarounds that lead to better official tools, and staff who say they trust the program because they have seen what it does with their answers.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Pulse surveys | Direct voice, cheap, easy to repeat | Survey fatigue; response bias |
| System telemetry | Objective, continuous, no survey burden | Privacy risk; shows events but not feelings |
| Observation and interviews | Finds hidden friction; builds relationships | Time-consuming; small samples |
| Fine-grained data | Precise diagnosis | Identifies people; erodes trust |
| Aggregated data with suppression | Safe to share and act on | Less detail; hides small groups that may struggle |
| Strict controls on devices | Security and compliance | More forced disruption; more workarounds |

The prose answer is to use all three kinds of evidence at the group level, keep detail only as long as a diagnosis needs it, and treat security and experience as a trade-off to discuss openly. The aim is a workplace in which motivated people get what they need with little effort.

## Questions to discuss with your team

**1. What is the first day like for a new colleague, and how do we know?**
Ask the team to trace the path from the offer to the first real task. Who does what, and where does it wait? Ask a recent starter to join the conversation. The facilitator should focus on the moments that left the person waiting or embarrassed, and agree one change that would improve the next starter's day.

**2. Which workaround do people use that we would rather they did not, and what does it tell us?**
List the unofficial tools and manual steps the team has seen. For each, ask what need it meets. The conversation often finds a requirement that the official service missed. Decide which workarounds to adopt, which to replace with a better official option, and which to prohibit with an explanation.

**3. How many minutes do our own actions take from colleagues each month?**
Estimate the forced restarts, updates, and prompts for a typical person. Compare with what a user would say. The facilitator can ask what would change if the figure were published. Agree one disruption to reduce or reschedule this quarter.

**4. What data about colleagues could we collect, and what should we promise never to do with it?**
Make two lists: what is technically possible and what the team will actually collect. Draft a short statement of purpose and limits. Ask a staff representative to react. The discussion shows where the line against surveillance sits, and how to explain it.

**5. Who struggles most with our tools, and are they in our data?**
Think about accessibility needs, shift workers, remote staff, and people who are new. Check whether the surveys and logs reach them and whether small-group rules hide them. Agree one way to listen to the least-served group directly.

**6. What did we fix last quarter because of what colleagues told us, and did they hear about it?**
List the fixes and how they were announced. If the list is short, discuss what blocks action: ownership, funding, or fear. Agree one visible fix to deliver before the next survey and a message to explain it.

## Four perspectives

### Product and delivery teams

Delivery teams are both users and builders of internal tools. Their own friction, such as slow builds, flaky environments, and access delays, slows everything they deliver, and the measures in this topic apply to them too. They should make internal tools part of the product backlog with an owner and users, and take part in the pulse and the reviews as colleagues (see topic 9.1, Team health and developer experience).

### Service and operations teams

Operations and the service desk shape much of the experience, and they are staff with their own tools and workload. They should send changes with care for user focus, keep the accessibility channel responsive, and use workarounds as feedback. They should also protect their own colleagues from being ranked by experience data. Support staff are motivated individuals too.

### Leadership and governance

Leaders set the culture of measurement. They should ask for friction removed, not scores raised, and fund the fixes. They should protect the privacy commitments in writing, resist requests to use the data on individuals, and accept that security controls have an experience cost to weigh. Governance should expect the privacy rules and their review as part of any experience reporting.

### Customers and users

The people who use internal IT are the authors of the experience. They deserve a first day that works, tools that respect their focus, an honest account of what is collected about them, a way to opt out where possible, and evidence that speaking up leads to change. Colleagues with accessibility needs should be asked how to make the service work for them, and not be treated as a special case.

## In practice: a service management example

A university's central IT department supports 6,000 staff and runs a service desk, a platform team, and several product teams. The numbers below are illustrative.

A new head of IT wants to know why staff complaints about onboarding persist when the service desk's resolution times are within target. She asks the service manager to pilot an experience program for new starters and for the main collaboration tool, built with the staff council. The council's condition is a written promise that no data will be used about individuals, and it agrees to review the plan.

The team measures day-one readiness and time to productive for the last quarter's 140 new starters, using the onboarding tracker and a one-question confirmation from the starter and their manager. Only 46 percent of new starters had every agreed item working on day one, and the median time to productive was 4 days, with an 85th percentile of 9 days. The reasons, from interviews, are three separate requests that each wait for a different team, and a laptop imaging step that finishes late on Fridays. A short pulse of the collaboration tool, sent to a rotating tenth of staff with a minimum group size of 10, shows lower ratings among staff who work in the evenings and at weekends. Endpoint logs, aggregated by building and shift, show an average of 38 minutes a month of forced restart and update prompts, with a long tail for staff on night shifts, who have restarts during work hours because their devices update when others are asleep.

The team makes three changes. A single onboarding request replaces the three, with a named owner. The imaging step moves to a weekday window. Update scheduling gains a deferral window tied to the user's working hours. They publish the privacy rules in the metric register: a minimum group size of 10, no individual data in any report, and a six-month retention limit on raw logs. Three months later, day-one readiness rises to 81 percent, the 85th percentile time to productive falls to 5 days, and forced-disruption minutes for night-shift staff fall by about half. The head of IT is asked by a manager to report which departments have the most complaints, to name teams for follow-up. She declines to rank departments, and offers to share the group-level patterns and fix the causes. The decision is recorded in the decision log, and the council asks to extend the program to a second tool.

## Agile, AI, automation, and analytics

### Agile

Fix friction in small steps and show people what changed, in the spirit of continuous improvement. The caution is that surveying people repeatedly without visible action destroys trust.

### AI

AI assistants change daily work for employees, so measure friction and time lost for AI-assisted tasks, and pair usage with a user-reported benefit. The caution is that AI use data about individuals can be misused to judge performance, so keep it aggregated and governed.

### Automation

Collect device and application health automatically, with clear privacy limits, and measure the collection on coverage and on the number of issues fixed. The caution is that technical telemetry can miss how work feels, so combine it with short surveys.

### Analytics

Report readiness and time to productive with counts, never per person. The decision informed is where to remove obstacles. The caution is that small teams produce identifiable data, so set a minimum group size before reporting.

## Sector lens

**Startup.** Everyone talks to everyone, so observation and conversation will find most of the friction. Make the first-day experience excellent, because it sets the tone, and keep telemetry minimal. Write down the privacy promises early, even if the team is small.

**Small business.** A single administrator may handle onboarding and support. Use a simple checklist and ask each new starter what was missing. Be careful with small-group data: with a dozen staff, almost any breakdown identifies someone, so rely on conversation.

**Enterprise.** Large and varied estates make segmentation useful and risky. Segment by role family, site type, and device class rather than by team, apply a minimum group size, and involve staff representatives. Align the program with security, legal, and privacy functions from the start.

**Government and public sector.** Duties on accessibility, equality, and privacy are often statutory, and works councils or unions may have formal roles. Treat accessibility testing and consultation as required parts of the program, publish the privacy rules, and avoid collecting data that is not clearly needed. Where staff data is subject to regulation, involve the data protection officer (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are modest. Pulse surveys and observation need people's time and a survey tool. Endpoint data usually comes from tooling already deployed, though the analysis and privacy review take effort. The largest cost is the willingness to fix what is found, which may mean changing onboarding processes, device policies, and update practices across teams.

The return comes in time recovered, faster ramp-up of new starters, fewer support contacts caused by avoidable friction, and less shadow IT. You can build the case from your own numbers: the minutes of forced disruption per person, the days to productive for new starters, and the support contacts about problems that a fix removed. Be cautious with a single productivity figure derived from salary and minutes, because it rests on assumptions about what a recovered minute is worth. There is also a risk cost on the other side of the ledger: collecting too much data about staff can create legal exposure and damage trust. Include that in the total cost of ownership.

## Anti-patterns and pitfalls

- **Using experience data to judge individuals.** It turns a support program into surveillance and ends honest feedback. Aggregate, suppress small groups, and say so.
- **Measuring only averages.** The people with the worst experience are hidden. Look at the tail and the least-served groups.
- **Collecting everything because it is possible.** More data brings more risk. Collect what answers a question.
- **Surveying relentlessly.** People stop answering. Rotate tools and keep it short.
- **Punishing workarounds.** People hide them and the underlying need goes unmet. Learn from them.
- **Putting security and experience in separate rooms.** Some controls are worth their cost, and many are not. Discuss the trade-off with numbers.
- **Counting the first day as someone else's problem.** Onboarding crosses HR, IT, and the manager. Give it one owner.
- **Ignoring accessibility until a complaint.** Build and test with the people affected from the start.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Understanding friction | Complaints only | Occasional interviews or a survey | Regular observation and pulse for key tools and moments | Combined survey, system, and conversation evidence, segmented safely | Joint view with HR, facilities, and suppliers; staff co-own priorities |
| Privacy and ethics | No stated rules | Informal care | Written purpose, minimization, and group-size rules | Rules reviewed independently; compliance measured | Rules co-designed with staff representatives and audited across suppliers |
| Action | Fixes by complaint | Ad hoc fixes | Top friction on the backlog with owners | Fixes funded, tracked, and announced; disruption planned around work | Experience improvements built into planning across teams and suppliers |

## Checklist

- [ ] The key moments (first day, device failure, access request, move, leaving) are mapped with owners.
- [ ] Day-one readiness and time to productive are measured with a written list and clocks.
- [ ] A short pulse covers named tools on a rotation.
- [ ] Forced disruption minutes are measured by group and reviewed with security.
- [ ] Accessibility requests are tagged, tracked, and confirmed by the requester.
- [ ] Reports use a minimum group size and never show individuals.
- [ ] A written purpose-and-limits statement for experience data exists and is shared.
- [ ] Staff representatives have reviewed the data plan where such bodies exist.
- [ ] Workarounds are collected and reviewed as feedback.
- [ ] Results and fixes are shared with staff each quarter.

## AI prompts

**Map a moment that matters.**

```text
We want to improve [moment, for example the first day for a new starter] in
[type of organization]. The steps today are: [list steps and who owns each]. Draw
a text map showing hand-offs and waits, suggest where friction is likely, and
propose one measure from what people say, one from what systems record, and one
from observation for each major step. Do not invent figures. List your
assumptions and the questions I should ask staff.
```

**Draft a privacy statement for an experience program.**

```text
Draft a one-page plain-language statement for staff about an experience program
in [organization type] in [jurisdiction]. We collect: [list data]. Our purpose
is [purpose]. Include what we will not do (for example use data on individuals),
the minimum group size [number], retention [period], who can see raw data, and
how staff can raise concerns. Flag anything I should review with a privacy
specialist or staff representatives. Do not give legal conclusions. List your
assumptions.
```

**Analyze pulse comments about a tool.**

```text
Here are [number] anonymized comments about [tool] from [period]: [paste
comments with personal data removed]. Group them into themes of friction,
count each theme, give two representative quotes for each, and suggest which
themes may point to a fixable cause versus a training need. Do not identify
individuals or infer motives. List your assumptions and what a person should
check before acting.
```

**Plan a disruption reduction.**

```text
Our endpoints receive [number] planned interruptions per person per month on
average: [list types and frequencies]. Security requirements: [list]. Propose a
scheme that reduces disruption to focus time (for example deferral windows,
bundling, scheduling by working hours) while meeting the requirements, and
describe how to measure whether it works without tracking individuals. List
your assumptions and the trade-offs I should discuss with security.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an experience or friction metric before you publish it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised experience metric entry keeps its gaming vector, guardrail, and privacy rules.

## Key takeaways

- The aim is to give motivated people the environment and support they need, so measure friction and remove it.
- Combine pulse questions, system measures, and observation, and look at the groups at the edges.
- Count minutes lost and interruptions caused by IT's own actions, and plan around people's focus.
- Make privacy a design rule: minimize, aggregate, suppress small groups, and never judge individuals.
- Treat workarounds as feedback, and tell staff what you fixed.
- Include accessibility from the start, and review the program with the people it serves.

## References and further reading

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
