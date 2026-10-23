# Satisfaction and well-being metrics

**People who feel safe, trusted, and able to keep their pace do better work for longer, so ask about well-being with care, keep the answers anonymous and aggregated, and treat what you learn as a call to change the work, never as a judgement of the person.**

## Overview and motivation

The Agile Manifesto's principles say that agile processes promote sustainable development: sponsors, developers, and users should be able to maintain a constant pace indefinitely. They also say to build projects around motivated individuals and trust them to get the job done. A service organisation that depends on people to keep complex systems running through nights, weekends, and crises needs to ask whether its way of working can really be sustained. Satisfaction and well-being measures are how it asks.

These measures are more sensitive than any others in this book. They touch on how people feel about their work, their colleagues, and their health. Done badly, they invade privacy, create fear, and produce false answers. Done well, they give teams and leaders an early warning of problems that would otherwise surface as resignations, errors, and incidents. This topic is therefore as much about ethics and method as about metrics, and it follows the earlier topic on team conditions (see topic 9.1, Team health and developer experience).

Three ideas frame it.

- **Satisfaction is not well-being, and neither is engagement.** [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction) is a person's feeling about their job, [employee engagement](https://en.wikipedia.org/wiki/Employee_engagement) is an energetic involvement in work, and well-being is a broader state of health and flourishing. A person can be satisfied with a job that is wearing them down. Measuring one does not tell you about the others.
- **Motivation comes from conditions that can be built.** [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory), developed by Edward Deci and Richard Ryan, proposes that people's [intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation) is supported when three needs are met: autonomy, a sense of control over one's work; competence, a sense of effectiveness and growth; and relatedness, a sense of connection with others. These match the agile call for motivated individuals who are given the environment and trust they need.
- **Safety to speak up is a precondition.** [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety), a concept developed by Amy Edmondson, is the shared belief that a team is safe for interpersonal risk-taking. Without it, people hide mistakes, concerns, and exhaustion, and every survey measures what people dare to say, not what they feel.

Well-being measures have particular hazards. Respondents may give answers they think are expected, a pattern known as [social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias). Burnout is a serious matter, and the World Health Organisation's classification describes burn-out as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed. It is not a medical diagnosis made by a survey. Researchers describe burnout through exhaustion, cynicism, and reduced efficacy ([occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout) is the general term), and employers should provide support and fix the conditions, not diagnose individuals. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) has a human face here: when a well-being score becomes a target for a manager, people learn to say they are fine (see topic 1.2, Goodhart's law and the psychology of metrics).

A final caution: this topic describes measurement practice and does not give medical, psychological, or legal advice. Involve qualified professionals, such as occupational health, human resources, and employee representatives, and follow the privacy and employment law that applies where your people work.

## Key principles

- **Participation is voluntary and answers are anonymous.** Nobody should feel compelled to disclose how they feel.
- **Report only in groups.** Use a minimum group size, and suppress anything that could identify a person.
- **Never use these measures to evaluate individuals.** They describe the work and the team.
- **Never diagnose.** Surveys can show conditions, and clinical judgement belongs to qualified professionals.
- **Fix the conditions.** The response to a poor result is to change the workload, the process, or the priorities.
- **Aim for a pace the team can sustain.** Short bursts are fine, and permanent urgency is not.
- **Act where people can see it.** Visible change builds the trust that honest answers need.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sustainable pace rating | Team rating of whether the current pace could be kept up indefinitely | mean rating and spread on an agreed scale for the statement "we could keep working at this pace indefinitely" | scale points | Anonymous team pulse | Continual improvement; workforce and talent management | Constant pace indefinitely | Monthly |
| Psychological safety rating | Team rating of how safe it is to raise problems and take interpersonal risks | mean rating on a short validated set of statements, per team | scale points | Anonymous team pulse | Continual improvement; workforce and talent management | Trust and open reflection | Quarterly |
| Needs-support rating | Team rating of autonomy, competence, and relatedness at work | mean rating for each of three statements, per team | scale points | Anonymous team pulse | Workforce and talent management; continual improvement | Motivated individuals with the environment they need | Quarterly |
| Workload strain rating | Team rating of how demanding the workload is relative to capacity | mean rating and share rating the workload as unsustainable | scale points; percent | Anonymous team pulse | Capacity and performance management; workforce and talent management | Sustainable development | Monthly |
| Sustained extended-hours weeks | Share of weeks in which the rotation or team worked well beyond its normal hours, counted at rotation or team level | weeks in the period with extended hours at team level / weeks in the period | percent | Rotation records and on-call logs aggregated by team; team-reported, opt-in | Incident management; capacity and performance management | Overtime as a signal of overload | Monthly |
| Voluntary attrition and exit themes | Share of team members leaving voluntarily in a period, with themes from exit conversations | voluntary leavers / average headcount; theme counts from consenting leavers | percent; counts | Human resources records, exit conversations | Workforce and talent management | Retention of experienced people | Quarterly |
| Time to act on well-being feedback | Time from a team raising a well-being concern to a recorded response | median and 85th percentile of days from concern to recorded decision or action | days | Team feedback log | Continual improvement | Prompt response to team reflection | Quarterly |

Define the minimum reporting group size in the register, for example no result for a group of fewer than seven people, and apply it to every table, chart, and comment. Ratings come from short, anonymous pulses, with participation voluntary. Extended-hours weeks are computed from rotation and on-call records for the team as a whole, and any individual-level hours data is never collected for this purpose. Attrition is reported only where the group is large enough, and exit themes only from people who consent. None of these metrics is part of any individual's evaluation.

## Recommendations

### Set the ground rules first

**1. Write the rules before you ask.** State the purpose, what is collected, who sees what, the minimum group size, how long data is kept, and what will never be done with it, including that no individual response will be used in reviews, promotion, or discipline. Share the draft with employee representatives, where they exist, and with your privacy and human resources specialists. Publish the final rules where everyone can read them.

**2. Make participation voluntary and answers anonymous.** Do not chase individuals who have not responded. Do not require identification fields. Use a survey method that cannot be traced to a person, and test that claim honestly: in a small team, demographic questions can identify people. Tell people what you do to protect them, and mean it.

**3. Involve occupational health and employee support.** Surveys are not substitutes for support. Ensure that an employee assistance programme or equivalent exists, that people know how to reach it, and that managers know how to respond kindly if someone discloses a problem. A well-being programme that identifies distress and offers nothing is worse than none.

### Ask well

**4. Use few, clear, validated questions.** A short set of statements, rated on a consistent scale, serves better than a long form. Use established wordings for psychological safety, and for the three needs of self-determination theory, from the research literature, and keep your own wording stable so that trends mean something. Add one open comment, and read the comments in full.

**5. Ask about conditions more than feelings.** "I can keep up this pace for a year" and "I have what I need to do my best work" point to the work. "How stressed are you?" points to the person. Both have a place, and the condition questions are easier to answer honestly and easier to act on.

**6. Keep the cadence light.** A monthly three-question pulse on pace and workload and a quarterly pulse on safety and needs are enough for most teams. Survey fatigue is real, and a long annual survey is slow to act on. Vary the questions modestly so people do not answer on autopilot, and keep the core stable.

**7. Read results with the team first.** Share the team's own results with the team before anyone else, and let them interpret them. Leaders see trends across teams and the obstacles teams ask for help with, not a ranking. This approach is more accurate, since teams know the context, and more respectful.

### Look at the work as well as the feelings

**8. Pair perception with workload facts at team level.** Compare the pace and strain ratings with rotation and on-call load, unplanned work share, and the backlog of obstacles (see topic 5.7, Toil and on-call metrics, and topic 2.9, Operational work and unplanned work). When ratings fall as unplanned work rises, you have found a cause you can fix. Aggregate hours data to the team or rotation, and never track individuals.

**9. Treat sustained overload as a system problem.** A run of extended-hours weeks means the plan, the staffing, or the priorities do not match reality. Respond by reducing scope, adding people, removing work, or fixing the causes of incidents, not by asking individuals to be more resilient. Short, chosen bursts are different from open-ended urgency, and the team can say which it is.

**10. Watch attrition for patterns, with care.** Voluntary attrition is a lagging signal. Look at it by team and over a long period, and combine it with themes from exit conversations that leavers agree to. Small numbers swing widely and can identify people, so suppress small groups and avoid reading single departures as proof.

### Act and learn

**11. Respond within a stated time, and tell people what happened.** Commit to a response to well-being concerns within a short period, and report the actions and their results. Time to act measures this. A visible response, even if it is "we cannot change this now, and here is why," keeps trust alive.

**12. Learn from what does not work.** If scores do not improve after an intervention, ask why. Listen to the team before trying again. Avoid wellness add-ons, such as a meditation app or a social event, as a substitute for changing a workload that is too high. Well-being is largely a property of how the work is organised.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Sustainable pace rating | Managers pressing for good scores; teams reporting what is expected | Anonymity and group-size rules; compare with workload facts; read comments |
| Psychological safety rating | Surveying only safe teams; wording changes that raise scores | Fixed wording log; response rate and mix; compare with reporting rates for incidents and mistakes |
| Needs-support rating | Redefining statements; coaching answers | Stable wording; team-owned interpretation; comments |
| Workload strain rating | Lowering reported strain to avoid scrutiny; adjusting scope on paper | Compare with unplanned work and rotation load; check for hidden work |
| Sustained extended-hours weeks | Not logging hours; moving work out of the rotation records | Compare with incident logs and team comments; allow reporting without penalty |
| Voluntary attrition and exit themes | Reclassifying resignations as involuntary; steering exit conversations | Clear classification rules; independent exit conversations; look at long periods |
| Time to act on well-being feedback | Recording a response with no action; closing concerns quickly | Team confirms the response is meaningful; track whether ratings change |

A healthy reading is a stable or improving pace rating that matches the workload facts, psychological safety high enough that bad news travels, workload strain falling after conditions change, extended-hours weeks that are rare and explained, and teams who say they see their feedback used.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Anonymous pulse surveys | Honest, cheap, timely | Cannot follow up with individuals; small groups limit anonymity |
| Identified surveys | Allow follow-up | People hold back; privacy risk |
| Condition-focused questions | Point to fixable causes | Miss personal circumstances |
| Feeling-focused questions | Capture lived experience | Easier to misuse; harder to act on |
| Team-level workload data | Objective, links to causes | Can slide into surveillance without strong rules |
| Manager one-to-ones | Personal, can respond to individual needs | Depend on the manager; not aggregable |
| Annual engagement survey | Comparable over time | Slow; low action rate |
| Frequent short pulses | Timely | Fatigue if misused |

The prose answer is to use anonymous, condition-focused pulses with strict group-size rules, combine them with team-level workload facts, and rely on managers and professionals for individual support. Treat any individual-level well-being data as outside the scope of metrics.

## Questions to discuss with your team

**1. Could we keep working at the current pace for a year, and what would have to change if not?**
Ask for honest answers. The facilitator should record the causes without assigning blame: scope, staffing, interruptions, incidents. Agree one change to the work that would reduce strain. If the answer is yes, ask what is protecting the pace.

**2. When did someone here last raise a problem or a mistake, and how was it received?**
Collect stories. Notice whether the response was curiosity or blame. Discuss what makes it safe or unsafe. Agree one habit that would make raising a problem easier, such as thanking the person who did.

**3. What rules would make us trust a well-being survey?**
Draft the rules together: who sees what, minimum group size, and what will never be done. Ask what would make you doubt the promise. The result is the first draft of the programme's rules for review with representatives.

**4. Which of our practices depend on people working extra hours, and why?**
List them: releases, handovers, on-call. Ask if each is truly necessary, and what would remove it. Choose one to fix with automation, process, or staffing.

**5. What do we do when a colleague seems to be struggling?**
Discuss the support that exists, how to reach it, and what each person can do. The facilitator should be ready with information about employee assistance and make clear that the team is not a substitute for professional help.

**6. What did we change in response to the last round of feedback?**
Check the record. If nothing changed, discuss why: lack of ownership, lack of authority, or fear. Agree one action with an owner and a date, and how it will be reported back.

## Four perspectives

### Product and delivery teams

Delivery teams carry the pressure of deadlines and demand. They should set their own pulse questions, discuss results together, and raise pace and workload openly in planning. They are best placed to say which commitments are sustainable, and they deserve leaders who listen.

### Service and operations teams

Operations teams carry on-call, incidents, and overnight work. They should track rotation load at the team level, push for fixes to recurring causes, and use rest and cover rules as protections. They need cultures that treat exhaustion as a risk to the service, not as a sign of dedication.

### Leadership and governance

Leaders set expectations and approve the plans that create load. They should protect the privacy rules, respond to team-level signals with changes in scope, staffing, or priorities, and resist the temptation to rank teams. Governance should check that support services exist, that legal duties on working time and health are met, and that no individual data is used for evaluation.

### Customers and users

Users benefit from teams that are rested, learning, and stable, because service quality, patience, and continuity depend on them. They are also affected when teams are overwhelmed: slower answers, more mistakes, loss of experienced staff. Honest communication about capacity and priorities is part of treating the people who serve them with respect.

## In practice: a service management example

A regional telecommunications operator's service operations group has eight teams that run networks, billing, and customer support systems around the clock. The numbers below are illustrative.

After three resignations in one team, the director asks for a morale dashboard that lists each team's score. The head of people and culture proposes a different approach and works with employee representatives to write the programme rules: voluntary and anonymous pulses, a minimum reporting group of seven, no individual data, and no use in reviews. Teams get a monthly three-question pulse on pace, workload, and the sense of having what they need, and a quarterly pulse on psychological safety and the three needs of self-determination theory. Results go to each team first.

The first quarter shows that the platform operations team rates sustainable pace at 2.3 out of 5, with 62 percent rating the workload as unsustainable. Rotation records show that the team worked extended hours in 9 of the last 13 weeks, driven by repeated incidents from one aging billing component, and that a quarter of its capacity goes to unplanned work. The team's psychological safety rating is lower than the others, and comments say that raising concerns about the component has led to being told to be patient. Other teams rate pace between 3.4 and 4.1.

The director and the team agree on four actions. The billing component's replacement is moved up the priority list, and the team receives two temporary engineers from a team with spare capacity. The rotation adds a rest day after any night incident, with managers responsible for protecting it. Concerns about the component are logged and answered within two weeks, with reasons. Leaders stop requesting team rankings. Within two quarters, the team's pace rating rises to 3.6, extended-hours weeks fall to 2 of 13, and psychological safety rises. Time to act on feedback has a median of 11 days. The director asks for a company-wide wellness score to publish to the board. The head of people and culture explains that a single score invites managers to manage the number, and offers a report of actions taken and conditions changed, with team consent. The decision is recorded. One team asks that its results not be shared beyond the team, and that request is granted.

## Agile, AI, automation, and analytics

### Agile

Protect a sustainable pace and ask about well-being with care, anonymously and in aggregate. The caution is that asking and not acting costs trust.

### AI

AI can change workload and job security concerns, and sentiment tools should not be used to monitor individuals. Ask about the effect of AI on work directly, in an anonymous survey. The caution is that analysing free text with AI can expose individuals, so check privacy rules.

### Automation

Automate survey delivery and reminders, not the interpretation, and measure the process on response rate and anonymity. The caution is that automatic alerts about individuals' well-being cross a line.

### Analytics

Report aggregated results with the response count and minimum group size. The decision informed is how to change the work. The caution is that well-being data is sensitive, so limit access and retention.

## Sector lens

**Startup.** Intensity is common, and so is the risk that bursts become the norm. Founders can model sustainable pace and notice when the team runs hot. Rely on conversation and a very short anonymous pulse once the team is large enough to protect anonymity.

**Small business.** Teams are small enough that nothing is anonymous. Do not run well-being surveys that pretend otherwise. Use regular, honest one-to-one conversations, provide access to support, and watch for overload in the work pattern, such as chronic after-hours incidents.

**Enterprise.** Scale allows anonymous measures and trend analysis. It also brings pressure to compare. Provide a common set of core questions, let teams add their own, protect group-size rules, and involve employee representatives. Make support services visible and easy to use.

**Government and public sector.** Employment protections, works councils, and unions often have formal roles in surveys and monitoring. Involve them from the start, follow the rules on working time and health, and treat sensitive data with great care. Public servants are often motivated by purpose, and organisations should not take advantage of that goodwill by accepting permanent overload (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are modest: the time of teams for short pulses, survey tooling that preserves anonymity, specialist time for privacy review and for interpreting results, and the real cost of acting, which may mean staffing, scope reduction, or investment in fixing recurring causes. Support services such as employee assistance also cost money and are worth having.

The return comes through retention, fewer errors, better service, and fewer crises. Replacing an experienced engineer costs recruitment, onboarding, and lost knowledge. Teams under chronic overload make more mistakes and cause more incidents. Build the case from your own data: voluntary attrition by team over several years, the cost of recruiting and onboarding replacements, and incident patterns in overloaded teams. Avoid quoting studies of the cost of burnout unless you can trace the source and relevance. Be honest that the benefits are real and hard to isolate, and that the ethical case does not depend on the financial one (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Ranking teams by well-being scores.** Managers then manage the number. Report conditions and actions.
- **Identified surveys.** People hold back. Use anonymity and group-size rules.
- **Diagnosing individuals from survey data.** It is unethical and unreliable. Offer support and leave diagnosis to professionals.
- **Wellness add-ons instead of workload change.** They treat the symptom. Fix the load.
- **Collecting hours per person.** It is surveillance. Use rotation and team-level facts.
- **Surveys without action.** People stop answering. Respond visibly and quickly.
- **Using results in performance reviews.** It ends honesty. Prohibit it in writing.
- **Treating overload as resilience training.** It places the burden on individuals. Change the system.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Ethics and privacy | No rules | Informal care | Written rules, anonymity, group-size minimum, no individual use | Rules reviewed with representatives; compliance checked | Rules and practice audited independently; teams control sharing |
| Measures | Annual survey, if any | Occasional team check-ins | Short monthly and quarterly pulses on pace, load, safety, and needs | Perception combined with team-level workload facts; trends watched | Cross-team picture with partners; early warning drives planning |
| Action | Complaints unaddressed | Ad hoc fixes | Responses logged and timed; visible changes | Conditions changed, tracked, and linked to outcomes | Workload and pace built into planning and funding across the organisation |

## Checklist

- [ ] Written rules state purpose, access, group size, retention, and a ban on individual use.
- [ ] Employee representatives and privacy specialists have reviewed the rules.
- [ ] Participation is voluntary and responses are anonymous.
- [ ] A minimum reporting group size applies to all outputs.
- [ ] Support services are in place and known to all staff.
- [ ] Pulses use a few stable, clear questions and one open comment.
- [ ] Teams read their own results first.
- [ ] Team-level workload facts are compared with perception, never individual hours.
- [ ] Responses to concerns have a stated time and are reported back.
- [ ] No well-being data is used in performance reviews, promotion, or discipline.

## AI prompts

**Draft rules for a well-being programme.**

```text
Draft plain-language rules for a staff well-being pulse programme in [type of
organisation] in [jurisdiction or sector]. Cover purpose, voluntary
participation, anonymity, minimum reporting group size [number], who sees
results, retention, a clear ban on use in reviews, support available, and how
staff can raise concerns. Flag items to review with privacy specialists,
employee representatives, and occupational health. Do not give legal
conclusions. List your assumptions.
```

**Review pulse questions.**

```text
Here are our pulse questions on pace, workload, psychological safety, and
motivation: [paste]. Review them for leading or double-barrelled wording,
sensitivity, and risk of identifying individuals in small groups. Suggest a
shorter set that focuses on conditions we can change. Do not claim validation
for any wording unless you cite the published source accurately. List your
assumptions and cautions.
```

**Analyze comments safely.**

```text
Here are [number] anonymised comments from a pulse for [team type]: [paste with
any identifying details removed]. Group them into themes about conditions of the
work, count each theme, and suggest which conditions could be changed by the
team, its leaders, or other groups. Do not infer anyone's health or identify
individuals. Tell me what a person should check before acting. List your
assumptions.
```

**Plan a response to an overload signal.**

```text
A team's pace rating is [value], extended-hours weeks are [number] of [number],
and unplanned work is [share]. Causes in comments: [summary]. Propose a
response that changes the work (scope, staffing, rotation, root-cause fixes),
what to tell the team, and how to measure whether it helped without tracking
individuals. List your assumptions and trade-offs for leadership.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail and privacy rules for a well-being metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a well-being metric entry carries its gaming vector, guardrail, and anonymity rule.

## Key takeaways

- Ask about conditions, such as pace, workload, safety, and support, more than about feelings, and keep answers anonymous and aggregated.
- Write and publish the rules first, including a ban on using results to judge individuals.
- Treat sustained overload as a system problem to fix with scope, staffing, and causes, not resilience.
- Compare perception with team-level workload facts, never individual hours.
- Respond visibly and within a stated time, and tell people what changed.
- Provide real support services, and leave diagnosis to professionals.

## References and further reading

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Employee engagement](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
