# Toil and on-call metrics

**A service is only as reliable as the rotation that looks after it, so measure the interruptions, the night-time load, and the share of time lost to repetitive manual work for the rotation as a whole, and use the numbers to fund prevention and automation, never to compare people.**

## Overview and motivation

Reliability is often described in terms of the system: availability, latency, error rates. Behind every service that has users in the middle of the night is a human system that responds when the system fails. That human system has limits. A rotation that is paged too often, wakes too many people, or spends most of its week on manual, repetitive tasks will slow down, make more mistakes, and eventually lose people. The other metrics in Part 5 can look healthy right up to the point where the people holding them together leave.

Two ideas organise this topic. The first is [on-call](https://en.wikipedia.org/wiki/On-call) work: a rotation of people who are reachable and ready to respond to alerts outside normal working patterns. A **page** is an alert that interrupts a responder, usually through a pager, phone call, or push notification. A **shift** is one stretch of on-call duty, for example a day, a week, or a night. A **rotation** is the group of people who take shifts in turn. The second idea is **toil**, a term from [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), the discipline of running services with software engineering methods. In Google's *Site Reliability Engineering* book, toil is operational work tied to running a production service that tends to be manual, repetitive, automatable, tactical, without enduring value, and growing in step with the service. It is not the same as overhead such as meetings, and it is not simply work someone dislikes.

ITIL 4 does not have a practice called "toil management." The material sits across several practices. [Incident management](https://en.wikipedia.org/wiki/Incident_management) and monitoring and event management produce the pages. Problem management removes the causes that keep producing them. Service request management and deployment management produce much of the repetitive manual work. Workforce and talent management, and continual improvement, own the people side. The agile counterpart is the team's working agreement about unplanned work and sustainable pace, and the DevOps habit that the team that builds a service also carries part of the pager for it.

The measures here are about load and sustainability. Incident handling belongs to other topics (see topic 3.3, Incident response and resolution time, and topic 3.4, Major incident metrics), as does the quality of individual alerts (see topic 5.5, Monitoring and alert quality metrics). This topic asks what it costs the people in the rotation to keep the service running, and whether that cost is sustainable.

### Why this belongs with reliability

Fatigue has operational consequences. [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation) degrades judgement and reaction time, and responders who are tired at the start of an incident take longer to diagnose it and are more likely to make a second mistake while fixing the first. [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue) is the related effect of too many alerts: people stop treating each one as urgent. [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout) is the longer-term outcome of sustained overload, and it shows up as attrition, sickness, and disengagement, which are slow, expensive, and hard to reverse. A team that measures service reliability without measuring the sustainability of its rotation is watching only the effect and ignoring part of the cause.

This topic describes rotations, shifts, and services, and it never ranks individuals. An ITIL view starts from the incident and the service, an SRE view from the person-time cost, and an agile view from capacity for planned work.

## Key principles

- **Measure the rotation, not the person.** Report load by service, shift, and rotation slot. A person's page count depends on the shift they drew, and a league table teaches people to hide interruptions.
- **Count when interruptions happen as well as how long they last.** A five-minute page at 03:00 can cost a night's sleep.
- **Define toil narrowly and let the team classify it.** Toil is a specific kind of work, not a synonym for work people dislike.
- **Treat load as a signal for investment.** High page volume or toil share is evidence that a service, tool, or staffing level needs work.
- **Pair every load measure with a quality measure.** Fewer pages is good news only if incidents are still detected.
- **Show distributions and share the data with the rotation first.** An average shift hides a handful of terrible nights, and the people on call are the best judges of whether the numbers match their experience.

## Metric definitions

The table gives the core set. Every time or count measure states where it starts and stops and what is excluded. "Out-of-hours" must be defined once per rotation as a written window in local time, including weekends and public holidays, because the people in a distributed rotation can have different local hours.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pages per shift | Number of pages delivered to a rotation during one shift | Count of pages delivered between shift start and shift end, one count per shift, after merging duplicate pages for the same alert group within 5 minutes (the merge window is a team setting). Test pages and pages sent in error are excluded. Report the median and 90th percentile across shifts, plus the busiest shift | pages per shift | Paging tool; on-call schedule | Incident management; monitoring and event management | Unplanned work policy; sustainable pace | Weekly review, monthly trend |
| Out-of-hours page share | Share of pages that arrive outside the written working window | Pages delivered outside the working window / all pages delivered, over the period. Window is set per rotation in local time; holidays count as outside the window | percent | Paging tool; rotation calendar | Incident management; monitoring and event management | Working agreement on availability | Monthly |
| Night interruption rate | How often a shift includes at least one page in the protected sleep window | Shifts with at least one page in the protected sleep window (for example 22:00 to 07:00 local, set by the team) / all shifts in the period. A page that is acknowledged automatically with no human response is excluded | percent of shifts | Paging tool; acknowledgement log | Incident management; workforce and talent management | Sustainable pace; team health check | Monthly |
| Toil share of time | Share of a rotation's working time spent on toil | Hours the rotation records against work classified as toil / total working hours recorded by the rotation, over a month. Meetings, training, and leave are excluded from both numerator and denominator. Classification follows the six characteristics of toil, applied by the team | percent of time | Time sampling or task labels in the work tracker; team classification review | Continual improvement; deployment management; service request management | Unplanned work share; capacity allocation in planned work | Monthly, with a quarterly review of the classification |
| Toil by source | Distribution of toil hours across named sources such as manual restarts, access requests, certificate renewals, and ticket triage | Toil hours for each source / total toil hours, listing the top five sources and an "other" group. Same exclusions as toil share of time | percent of toil hours by source | Time sampling or task labels in the work tracker | Problem management; service request management | Backlog of improvement items | Quarterly |
| Repeat page rate | Share of pages caused by a condition that has paged the rotation before within a stated window | Pages whose alert group or cause code matches an earlier page within 30 days / all pages in the period. A cause code is set by the responder at close; unset codes are reported separately | percent | Paging tool; incident record cause codes | Problem management; incident management | Retrospective actions; technical debt backlog | Monthly |
| Rotation depth | How many qualified responders share the pager compared with the number of roles to fill | Number of people who completed on-call readiness and are available for shifts / number of shift positions per rotation cycle. Leave and secondment reduce availability. Report as a ratio per rotation, never per person | ratio | Rotation schedule; readiness checklist | Workforce and talent management | Cross-functional team; skills matrix | Quarterly |
| Toil removed | Recurring toil hours taken out of the rotation's work by an automation or design change | Estimated monthly toil hours of a source before the change minus the same after the change, measured over at least two cycles after delivery. Hours saved by a one-off cleanup are excluded | hours per month | Time sampling before and after; improvement ticket | Continual improvement; problem management | Improvement item delivered | Quarterly |

A page count is a count of interruptions, not of incidents: one incident can generate a dozen pages. Toil share of time depends on honest recording, so treat it as an agreed estimate.

## Recommendations

### Define the terms before you count

**1. Write down what counts as a page, a shift, and out-of-hours.** Teams count different things under the same word. A page might be any notification, only those that reach a human, or only those that need action. Pick one definition, state the merge window for duplicates, and record the working window in local time. Without this, the numbers will change when a tool is reconfigured, and the trend will mislead.

**2. Agree what toil is, with examples from your own service.** Start from the six characteristics in the SRE book. Write a short list of examples and non-examples, such as restarting a stuck job (toil), designing a new recovery tool (engineering), and a planning meeting (overhead). Review the list when disagreements show up.

**3. Choose how you will measure toil share, and accept its limits.** The cheap options are time sampling, task labels in the work tracker, and a short fortnightly estimate. None is exact, so pick the one with least overhead, run it for a quarter, and judge the trend more than the absolute value.

### Measure the load on the rotation

**4. Report pages per shift as a distribution.** The average shift hides what the rotation feels. Show the median, the 90th percentile, and the busiest shift, and add a note on what happened in that shift. A quiet median with a terrible tail means a few bad nights, which is a different problem from a steadily busy rotation. See topic 1.6, Statistical literacy for service metrics, for reading percentiles.

**5. Put timing beside volume.** Out-of-hours page share and night interruption rate show when the load lands. Five pages in office hours is a nuisance; five between midnight and 05:00 is a different cost. Show both on the same page.

**6. Look at the spread across shifts, not across people.** A rotation where one recurring shift (for example the weekend or the Monday handover) collects most of the pages needs a different fix from one where load is even. Report the share of pages by shift position and day. When the data are reported by named individual, expect them to be read as a ranking, so do not produce that view.

**7. Count major incident load separately.** A major incident can generate more interruptions in one night than a normal month. Report it as its own line so one event does not distort the trend (see topic 3.4, Major incident metrics).

### Connect load to causes and to fixes

**8. Link pages to problems, and track repeats.** Repeat page rate shows how much of the load comes from causes that are already known. A high repeat rate is an argument for problem management, not for a faster response. Feed the top repeating causes into the problem backlog and record the link (see topic 4.1, Problem management metrics, and topic 4.6, Technical debt and known errors).

**9. Rank toil sources and attack the largest one.** A [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart) of toil hours by source usually shows a few sources responsible for most of the time. Pick the biggest, decide whether it can be designed away, automated, or handed to the team that owns the cause, and schedule it like feature work. Prefer removing the need to automating the step, because an automated step still has to be maintained.

**10. Measure toil removed, not automations written.** An automation that nobody uses removes nothing. Measure the toil hours before and after, over at least two cycles, and record the effort to build and maintain the automation. This is the honest return, and it prevents a programme of "automation" that adds scripts without removing work. See topic 3.7, Self-service and automation metrics, for adoption of automation by users.

### Keep the system sustainable

**11. Set rotation limits in a team agreement, then watch rotation depth.** Agree how often a person can be on call, how many consecutive nights are acceptable, and what rest follows a bad night. Rotation depth shows whether the rotation has enough qualified people for the agreed limit. A rotation that is nominally eight people but effectively three, because the others are not yet ready or are on leave, does not meet the limit, whatever the roster says.

**12. Use the numbers to ask for something specific.** A load number supports a request: a staffing change, time carved from feature work to pay down toil, a change to alert thresholds, or a deprecation. State the request next to the number, or people will stop recording (see topic 1.4, Metrics governance and ownership).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Pages per shift | Raising alert thresholds or silencing alerts so the count falls; merging unrelated alerts into one page; moving pages to a ticket queue that nobody watches | Detection coverage and customer-reported incidents that the monitoring missed (see topic 5.5, Monitoring and alert quality metrics); time to detect (see topic 3.3, Incident response and resolution time) |
| Out-of-hours page share | Redefining the working window to be wider; rescheduling jobs and deployments so pages shift into office hours without reducing them; reclassifying pages as "low urgency" | Total page volume next to the share; written working window under change control; a review of what moved |
| Night interruption rate | Delaying acknowledgement until morning; auto-acknowledging pages; counting only pages that reached a human | Time to acknowledge by hour (see topic 3.3, Incident response and resolution time); pages with no human response reported separately; customer impact at night |
| Toil share of time | Reclassifying toil as "engineering" or "project work"; recording less than was spent; labelling only what is easy to describe | A periodic audit of classified items by someone outside the rotation; the team's own view of how the week felt; the share of time spent on planned improvement work |
| Toil by source | Splitting a large source into several small ones so none stands out; leaving a source unnamed in "other" | A cap on the "other" group (for example under a fifth of toil hours, a team setting); sampling of the "other" items each quarter |
| Repeat page rate | Closing pages with a new cause code each time so matches are missed; widening cause codes until everything is distinct; lengthening or shortening the window | Cause-code audit on a sample; recurrence of the same alert group across incidents (see topic 4.1, Problem management metrics) |
| Rotation depth | Counting people who have not completed readiness; counting people who are rarely available; padding the roster | Share of shifts actually covered by the nominal pool; actual shift count by slot, reported without names; readiness checklist completion |
| Toil removed | Counting one-off cleanups as recurring savings; ignoring the effort of building and maintaining the automation; claiming savings without a before-and-after | Before-and-after hours measured over two cycles; maintenance effort of the automation; toil share of time over the following quarters |

A healthy reading is a rotation whose median shift is quiet and whose worst shift is rare, with few pages at night, a declining share of repeat pages, and a toil share that falls because sources have been removed, not because they were reclassified. It also shows the effort to get there: improvement work appearing in the plan, funded, and delivered. If page counts fall while customers report more incidents the monitoring did not catch, the numbers are getting better by looking away.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Count pages from the paging tool | Automatic, cheap, and hard to dispute | Counts interruptions, not their cost; tuning alerts changes the count without changing the load |
| Time sampling for toil | Reasonable accuracy for modest effort | Needs discipline; small samples are noisy |
| Rotation-level reporting | Matches how the work is organised; safe to share widely | Can hide a person who is struggling; needs a supportive conversation channel next to it |
| Hard cap on toil (for example the SRE book's aim of keeping toil below 50 percent of time) | A clear signal that triggers a response | A number can be met by reclassification; a cap needs management backing |

The central tension is between acceptance and investment. It is easy to treat high load as the normal price of an important service and ask people to absorb it, and it is easy to set a cap that nobody has the power to enforce. The way through is to pair every measure with a decision: a threshold at which the team stops and takes action, a named owner for the action, and a date to look again. Rotation-level numbers are safe and sometimes too coarse. When someone is struggling, the conversation belongs with that person and their manager, using their own account of the week.

## Questions to discuss with your team

**1. What did our busiest shift of the last quarter feel like, and what do the numbers say about it?**
Start with the story before the chart. Ask the people who were on call to describe the shift, then compare it with pages per shift and night interruption numbers. If the numbers understate the experience, find out what is missing, such as unrecorded calls or work done after the page. Capture that list as the next measurement improvement.

**2. What would we say is toil on our team, and what would we say is not?**
Put five or six recent tasks on a board and ask each person to classify them as toil, engineering, or overhead against the six characteristics. Expect disagreement, and treat it as useful: the disagreements show where the definition is vague. Agree a working definition for the next quarter and write down two examples of each. Avoid debating whether the work is enjoyable, because the question is whether it is manual, repetitive, and automatable.

**3. Which alert or task would we delete first if we could?**
Ask for the alert or recurring task that everyone dreads, then ask what stops us removing it: the cost to fix, a missing owner, or a belief that it is required. The facilitator should look for work that is cheap to remove and whose owner is not in the room. Finish by choosing one item for the next round of planning.

**4. How many people can actually take a shift today, and what limits are we willing to commit to?**
Count readiness honestly: who is trained, who is available, and who has constraints. Compare the result with the nominal rotation size. Ask what frequency of on-call and what number of consecutive nights the group considers acceptable, then check whether current practice meets it.

**5. If we cut our page count in half by next quarter, how would we know we had not just stopped listening?**
This question is about the guardrail. Ask the group to list ways the page count could fall without the service improving, such as raising thresholds, merging alerts, or ignoring a source. Then ask what we would see in customer reports and in detection measures if that had happened. Agree on the guardrail and put it on the same page as the volume.

**6. Who sees these numbers, and what do we want them to do with them?**
Trace the path of the load measures from the rotation to managers and leaders. Ask what each audience is likely to conclude, and whether any view could be read as a ranking. Agree the form that goes upward: rotation-level, with context, with a request attached. Note any concern about individuals being identifiable.

## Four perspectives

### Product and delivery teams

Delivery teams generate much of the on-call load through the changes they release. Teams that run what they build can see the link between a release and the pages that follow. They should include toil and on-call work in capacity planning, schedule toil removal as ordinary backlog work, and watch change quality next to speed (see topic 2.8, DORA metrics).

### Service and operations teams

Operations teams carry the pager most often and see the human cost first. They should own the definitions, run the time sampling or labelling, publish the rotation-level numbers, and bring the top toil sources and repeat causes to the owning teams with evidence. Their risk is absorbing the load quietly out of professionalism. A calm, factual record of nights and weeks is a more effective request for help than a complaint, and the records should never be turned into a ranking of the people who responded.

### Leadership and governance

Leaders decide staffing, priorities, and whether toil work is funded. A leader who reads a high toil share as poor performance teaches the team to lower it by relabelling. A leader who reads it as a bill for work the organisation chose not to fund gets honest data and a plan. Governance should expect a limit on rotation load and a visible response when it is exceeded (see topic 9.2, Satisfaction and well-being metrics).

### Customers and users

Users do not see the rotation, but they feel its effects: slower diagnosis from tired responders, repeated incidents from unfixed causes, and the departure of people who knew the service. Where users span many time zones, their out-of-hours needs shape the rotation, and the cost of covering them is a fair topic for a service level conversation (see topic 5.1, SLA, OLA, and XLA metrics).

## In practice: a service management example

A mid-sized online retailer runs an order platform, a customer account service, and a warehouse integration. A rotation of six engineers from two product teams and a small operations group shares a weekly on-call shift. All numbers in this example are illustrative.

The monthly review shows a median of 9 pages per shift and a 90th percentile of 31. The busiest shift had 58 pages. About half of all pages arrive out of hours, and 6 of the 8 shifts in the quarter included a page between 22:00 and 07:00. Time sampling suggests toil takes 55 percent of working time.

The busiest shift coincided with a certificate expiry on the warehouse integration that paged the rotation 22 times in one night. One disk-space alert on a batch server accounts for almost a quarter of pages, and most were closed by clearing a temporary directory by hand. Repeat page rate is 41 percent. A Pareto view shows manual certificate renewals, disk clean-up, and access requests take most toil hours.

The team takes three items into the next four weeks: automate certificate renewal, fix the cause of the full temporary directory, and move access requests to a self-service form owned by the identity team. A working agreement sets a limit of one shift in four per person and a rest day after a night with three or more pages. Rotation depth is 6 people for an agreed need of 8, so two engineers from a third team begin readiness training.

A gaming risk shows up at the next review. Pages per shift has fallen to a median of 4, and the 90th percentile to 12. One manager is pleased. A team member points out that the disk alert threshold was raised by 20 points and that the batch server filled twice with no page. Customer-reported incidents about delayed batch orders went up. The guardrail, customer-reported incidents the monitoring missed, caught it. The threshold change is reversed, the directory cleanup is scheduled as a fix, and the team adds a rule that any threshold change is recorded with its reason and reviewed after a month. The toil share the next quarter is 38 percent (illustrative) and is reported with the sampling method beside it.

## Agile, AI, automation, and analytics

### Agile

A sustainable pace includes the on-call rotation, so review its load with the team at a regular cadence and fund prevention. The caution is that a target for fewer pages can lead to silencing alerts.

### AI

AI can summarise pages, suggest runbook steps, and triage alerts, which can lower toil, and it can add new toil in checking and correcting its output. Include time spent supervising AI in toil, and pair page counts with sleep and well-being signals. The caution is that automated first response may hide pages from people who still carry the risk.

### Automation

Automate toil removal where the work is repetitive, and measure the toil removed and the incidents the automation caused. The caution is that automation built without ownership becomes a new source of on-call work.

### Analytics

Report load by rotation, never by person, with the count of pages behind each figure. The decision informed is where to invest in prevention. The caution is that pager data omits informal interruptions, so combine it with a short survey.

## Sector lens

**Startup.** A small team often has no formal rotation, so everyone is on call all the time and the cost is invisible. Count pages and night wake-ups in a spreadsheet and write down the three biggest repetitive tasks. Founders who carry the pager themselves are a business risk, not a badge of commitment.

**Small business.** One or two people may run all of IT. Measure what needs no tooling: calls outside hours, tasks that repeat, and leave that cannot be taken. A managed service provider can take part of the rotation if the contract states response times and hours. Rotation depth is often one, which is the main risk.

**Enterprise.** Scale brings follow-the-sun rotations, shared platforms, and several suppliers. Define the measures once, set local working windows per region, and avoid averaging across rotations with very different services. Employment rules in some countries limit on-call duty and require rest periods, and these belong in the rotation limits.

**Government and public sector.** Services may need around-the-clock coverage by statute or contract, and staffing is bound by procurement and grading. Rotation limits and rest rules are often governed by employment agreements, so measure against them and report when they are exceeded. Public accountability makes candid reporting more valuable and harder: build a safe channel for load data, and be explicit that it describes the system and the staffing, not individuals (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation is to protect service quality and keep skilled people. Tired responders diagnose more slowly, and when experienced people leave, the knowledge goes with them. Replacing a person has real costs in recruiting, onboarding, and reduced output during the learning period, and an organisation can estimate those costs from its own records. Toil also takes capacity away from improvement. A team that spends most of its time on manual operations cannot reduce the incidents that cause them.

The cost of the measures is modest. The paging tool already counts pages, and time sampling costs a few minutes per person per fortnight. The larger cost is acting on the findings: engineering time to remove toil, staffing for a sustainable rotation, and review time. Count the automation's maintenance as a cost, because an unmaintained automated step becomes tomorrow's incident.

The return shows up as fewer pages from known causes, fewer night interruptions, hours of toil given back to improvement work, lower attrition from the rotation, and quicker diagnosis. No universal figure applies, so estimate your own. For a toil source, multiply the monthly hours by a loaded hourly cost agreed with finance, compare that with the effort to remove it, and review after two cycles. For rotation sustainability, record departures and long absences from the rotation and compare them with load measures over time, treating the link as a hypothesis to test, not a proven cause. Where a figure is needed, state it as an estimate and show the inputs (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Ranking people by pages.** It turns a system measure into a performance score and teaches responders to avoid shifts and hide interruptions. Report by rotation, shift position, and service.
- **Cutting pages by silencing alerts.** The count falls and detection weakens. Pair volume with detection and customer-reported incidents, and review every threshold change.
- **Calling everything toil.** A definition so wide that it includes meetings and hard problems destroys the signal. Use the six characteristics and keep a list of examples.
- **A toil target with no authority behind it.** A cap that cannot trigger a decision becomes a number people argue about. Agree in advance what happens when it is exceeded and who decides.
- **Automating before understanding.** Automation can bake in a poor process and add maintenance. Ask first whether the need can be designed away, and measure toil removed afterwards.
- **Averaging across unlike services.** A mean across a stable service and a fragile one describes neither. Show each service and rotation separately.
- **Measuring and not acting.** Load numbers with no response teach people the data does not matter. Attach a decision, an owner, and a review date to every finding.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and data | Pages and toil are described by feel; no common definition | Some rotations count pages; toil is discussed but not measured | One written definition of page, shift, out-of-hours, and toil; paging data collected by tool | Distributions and timing are trended; toil sampled each month and audited | Definitions reviewed across teams and suppliers; sampling effort adjusted to the value of the answers |
| Rotation sustainability | Informal; the same few people absorb the pager | Rosters exist; limits discussed but not written | Written limits on frequency and rest; rotation depth known | Limits monitored and breaches reviewed with action | Rotations are shared across teams and suppliers, and load is balanced as services change |
| Use of the numbers | Used to blame or ignored | Shown to managers | Shown to the rotation first, with the decisions they support | Paired with guardrails and reviewed on a cadence that leads to funded change | Shared with leaders and partners to plan staffing and service scope |

## Checklist

- [ ] Page, shift, out-of-hours window, and merge window are defined in writing.
- [ ] Toil has a written definition with examples and non-examples from our own service.
- [ ] Pages per shift is reported as a median, a high percentile, and the busiest shift.
- [ ] Out-of-hours page share and night interruption rate are reported next to volume.
- [ ] Load is reported by rotation, shift position, and service, never by named person.
- [ ] Toil share of time is sampled on a schedule, with the method written down.
- [ ] The top five toil sources and top repeating page causes are on the improvement backlog.
- [ ] Rotation limits and rest rules are in a team agreement, and rotation depth is checked each quarter.
- [ ] Every load measure has a guardrail on the same page, including detection and customer-reported incidents.
- [ ] Each review ends with a decision, an owner, and a date.
- [ ] Threshold and alert changes are logged with a reason and reviewed after a month.

## AI prompts

**Review a rotation's load and look for patterns.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymised paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Classify tasks as toil, engineering, or overhead.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Draft gaming vectors and guardrails for our load metrics.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topics and guardrails when you add an on-call or toil measure to a dashboard.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep every metric paired with a gaming vector and guardrail.

## Key takeaways

- Measure the load on the rotation, by shift, service, and time of day, and never rank the people on it.
- Count when interruptions happen as well as how many, because night pages cost more than office-hours pages.
- Define toil narrowly using its six characteristics, estimate its share of time with a simple method, and judge the trend.
- Link pages and toil sources to problem work and to automation or design changes, and measure the toil actually removed.
- Pair every load measure with a guardrail such as detection and customer-reported incidents, so lower numbers cannot be bought by looking away.
- Treat a heavy load as a request for investment, with a decision, an owner, and a review date.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
