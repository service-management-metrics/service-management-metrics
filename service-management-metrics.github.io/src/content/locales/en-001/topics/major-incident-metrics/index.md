# Major incident metrics

**Measure major incidents as rare, expensive events to learn from, not as a league table: count them, time them honestly, size their customer impact, check that people were told, and prove that the follow-up actions got done.**

## Overview and motivation

A major incident is an incident that is serious enough to need a response beyond the normal routine. [ITIL](https://en.wikipedia.org/wiki/ITIL), the best-known framework for IT service management, describes [incident management](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) as restoring normal service operation as quickly as possible, and it expects organizations to handle their most serious incidents through a distinct, more coordinated path. How an organization draws that line is its own decision. A common choice is an incident that affects many users or a critical service and needs several teams working together under one coordinator. Write your own definition down, because every metric in this topic depends on it.

Major incidents are few. A team may see dozens of ordinary incidents a week and two or three major ones a quarter. That changes how you measure. The ordinary statistics of incident volume and resolution time (see topic 3.2, Incident volume and priority, and topic 3.3, Incident response and resolution time) assume many events and reward averages. With a handful of major incidents per period, an average is dominated by one bad night, a trend line is mostly noise, and a [percentile](https://en.wikipedia.org/wiki/Percentile) is meaningless on five data points (see topic 1.6, Statistical literacy for service metrics). The honest approach is to show every major incident as its own row, with its own timeline, and to summarize only over longer windows.

The agile and ITIL views meet here more directly than anywhere else in the book. ITIL contributes the structure: a declared major incident, a named coordinator, defined communication to affected parties, and a review afterwards. The [agile](https://en.wikipedia.org/wiki/Agile_software_development) and [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traditions contribute the habits: an [incident commander](https://en.wikipedia.org/wiki/Incident_commander) who runs the response, blameless review of what happened, and a focus on learning that feeds continuous improvement. Google's *Site Reliability Engineering* describes both the incident command pattern and the practice of postmortem review (see References). A [postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) in this sense is a written account of an incident, its causes, and the actions that follow, and the term is used here interchangeably with "post-incident review."

This topic covers five questions. How often do major incidents happen? How long do they last, and how much of that time is spent before anyone declares one? How many users, and which users, felt it? Did people hear from us in time and at a steady rhythm? And did the promised follow-up happen? The related topics cover what sits around them: availability (see topic 5.3, Availability metrics), the quality of the written review (see topic 4.2, Postmortem and learning metrics), the underlying causes (see topic 4.1, Problem management metrics), and the change that often triggers them (see topic 4.4, Change failure and rework).

Terms used in this topic:

- **Major incident:** an incident that meets your written declaration criteria and triggers the major incident process.
- **Declaration:** the moment someone with authority formally invokes the major incident process.
- **Time to restore:** the time from the start of customer impact to the moment service is restored for users. The moment of restoring service is not the same as finding the [root cause](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Incident commander:** the role that coordinates the response, assigns tasks, and decides. It is a role for the duration of the incident, not a job title.
- **Post-incident review:** the structured, blameless examination of an incident after service is restored.
- **Action item:** a specific, owned, dated change that follows from a review.

## Key principles

- **Show events, then summarize.** Rare events deserve individual timelines. Report each major incident separately and use summary statistics only over a long window, with the count beside them.
- **Start the clock at impact, not at awareness.** Duration that begins when someone notices hides the detection gap, which is often the largest part of the story.
- **Measure the user's experience, not the team's effort.** Customer impact is the reason the process exists. Hours of responder effort are a cost to track, never a score.
- **Communication is part of restoration.** A service that is restored while users are still guessing has only been half fixed. Treat the timeliness of updates as a measure of the response.
- **The review is not finished until the actions are.** A completed document with open actions has changed nothing. Measure follow-through, not just the existence of a review.
- **Never rank people, and never punish declaring.** If declaring a major incident hurts the declarer's team in a report, fewer incidents will be declared and the metrics will improve while service gets worse.
- **Keep the declaration criteria stable.** Moving the threshold changes every metric in this topic. Log each change with its reason and its date.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Major incident count | Major incidents declared in a period, by service | Count of incidents that met the declaration criteria and were declared in the period, by declaration time; incidents downgraded within the first hour are listed separately and excluded | count per quarter | ITSM tool incident records with the major incident flag | Incident management | Team or service health review | Monthly report, quarterly trend |
| Major incident duration | Time that customers were affected | Service restored time minus impact start time, per incident. Impact start is the earliest evidence in monitoring or the first user report, whichever is earlier. Partial restoration is recorded as its own event, and the full restore stops the clock | minutes, per incident | Monitoring timeline, incident timeline in the ITSM tool | Incident management; service level management | Time to recover in delivery metrics (see topic 2.8, DORA metrics) | Per incident; long-window median and maximum quarterly |
| Time to declare | Delay between the start of impact and the declaration of a major incident | Declaration time minus impact start time, per incident. Incidents never declared are found by a quarterly review of ordinary high-impact incidents and are included with a declaration time of n/a (never declared) | minutes, per incident | Monitoring timeline, ITSM tool audit trail | Incident management; monitoring and event management | Definition of ready for escalation in team working agreements | Per incident |
| Customer impact | How many users and how much usage were affected | Affected users (or failed requests) multiplied by minutes affected, per incident. Count only users who attempted to use the service during the impact window. Planned maintenance is excluded | user-minutes, or failed requests | Service telemetry, support contact records | Service level management; incident management | User-facing service level indicators (see topic 5.2, SLIs, SLOs, and error budgets) | Per incident |
| Communication timeliness | Whether affected parties were told on time | Share of major incidents where the first customer-facing notice went out within the target after declaration, and share of scheduled updates sent within the agreed interval. Clock starts at declaration. Internal-only messages are excluded | percent of incidents; percent of updates | Status page history, communication log in the ITSM tool | Incident management; service level management | Stakeholder communication in the team working agreement | Per incident; quarterly summary |
| Review completion timeliness | Whether a review took place soon enough to be useful | Share of major incidents with a published review within the agreed number of working days after restoration. Clock stops at publication, not at the first draft. Incidents still inside the window are excluded | percent | Review repository, ITSM tool | Continual improvement; problem management | Improvement follow-up | Quarterly |
| Action item follow-through | Whether review actions are completed | Review actions completed by their due date / review actions due in the period. Actions closed as "won't do" are counted separately with a reason, not hidden | percent; count of overdue | Issue tracker linked to the review | Continual improvement; problem management | Backlog items from retrospectives | Monthly |
| Repeat major incident rate | Recurrence of the same cause | Major incidents in the period whose recorded cause matches that of an earlier major incident in the previous twelve months / major incidents in the period. Matching is by the cause field, reviewed by hand | percent, with the count shown | Review records, problem records | Problem management | Prevention work in the backlog | Quarterly |

Every row needs a written clock rule before it is trusted. Disputes about impact start and restore time are common and are best settled in advance (see topic 1.5, Data sources and instrumentation).

## Recommendations

### Write down what makes an incident major

**Publish declaration criteria that anyone on call can apply.** Criteria usually combine impact (users affected, a critical service degraded, a safety or legal risk) with a need for coordination (more than one team required). A short list with examples beats a long matrix. State who may declare, and make clear that declaring in good faith is never a mistake, even when the incident turns out to be minor.

**Record the criteria version in every incident record.** When the threshold moves, trends move with it. A version number or date on each record lets you compare like with like and explain a jump in the count that came from a rule change.

### Count and classify without turning the count into a target

**Report the count with its context.** Show the number of major incidents per quarter next to the service, the trigger (change, capacity, dependency, security, other) and the criteria version. A count with no context invites targets such as "fewer than three per quarter", which teach people not to declare. Treat a falling count as good news only when time to declare and customer impact are stable.

**Separate declared, downgraded, and missed.** Track incidents that were declared and downgraded, because they show whether the criteria are sensible. Review a sample of ordinary incidents each quarter for ones that should have been declared. The missed ones are the most informative.

### Time the incident from the user's side

**Start the clock when customers are affected.** Use the earliest reliable evidence, which is often a monitoring signal that predates the first ticket. When the start is uncertain, record the estimate and its source rather than the time someone noticed. The gap between impact start and declaration is a metric on its own and usually the cheapest to improve.

**Split the timeline into phases.** Detection, declaration, diagnosis, mitigation, and full restoration each have different causes of delay and different owners. A phase breakdown for each incident shows where time went without needing an average. Restoring service by a workaround and fixing the cause are separate events, and the second belongs to problem management.

**Use the median and the worst case over long windows, with the count.** For a year of data, report the median and the longest duration, and say how many incidents they come from. Avoid a single mean time to restore for major incidents. With a few events it is unstable, and it is distorted by one long outage (see topic 1.6, Statistical literacy for service metrics).

### Size customer impact in terms users would recognize

**Prefer user-based impact to server-based impact.** Failed requests, affected users, or affected transactions describe what happened to people. Minutes of degraded service on a component describe what happened to a machine. Where you have service level indicators, use them (see topic 5.2, SLIs, SLOs, and error budgets) and connect the incident to the availability picture (see topic 5.3, Availability metrics).

**Add a plain-language impact statement to each record.** One or two sentences naming who was affected and what they could not do. Support contacts, social media mentions, and customer escalations are evidence for the statement, not metrics to maximize.

### Measure communication as part of the response

**Set communication targets by audience.** Affected customers, internal stakeholders, and executives need different messages at different times. Agree a target for the first notice after declaration and a steady rhythm for updates, and measure adherence per incident. The rhythm matters more than the content: an update that says "no change, next update in thirty minutes" and arrives on time builds more trust than silence.

**Keep response and communication in separate hands.** A communications lead frees the incident commander to focus on diagnosis. A small team can use a checklist and a pre-written template instead.

### Close the loop on learning

**Hold the review soon, and publish it.** Memory fades, so set a window for the review and measure whether it was met. Review completion matters less than what the review changes, so pair it with follow-through. Google's *Site Reliability Engineering* makes the case for blameless review and for writing it down (see References), and topic 4.2 (Postmortem and learning metrics) covers review quality.

**Track actions to the finish, and allow honest "won't do".** Put each action in the backlog the owning team already uses, with an owner and a date. Record actions that are declined, with the reason, instead of letting them rot. Review overdue actions at an operations or service review, and ask what is blocking them. Cap the number of actions per review so the ones that remain are the ones that matter.

**Look for patterns across incidents, and send them to problem management.** Repeat causes, common triggers, and recurring detection gaps are signals that single reviews miss. Feed them into the problem and known error process (see topic 4.1, Problem management metrics) and into the planning of the teams that own the services. Treat a rising repeat rate as a prompt for investigation, not a verdict.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Major incident count | Raising the declaration threshold, keeping incidents at "high" priority so they are never declared, splitting one event into several records, or merging several into one | Fixed, versioned criteria; quarterly sample of high-impact ordinary incidents; customer impact and time to declare tracked beside the count |
| Major incident duration | Restoring the clock to a later impact start, declaring "restored" while users still fail, or closing and reopening a new record | Impact start taken from monitoring; restoration confirmed by a user-facing indicator; reopened and linked records counted as one incident |
| Time to declare | Declaring early on everything to look fast, or backdating the declaration to the impact start | Share of declared incidents later downgraded; audit trail of the declaration time; sample of timelines against raw monitoring |
| Customer impact | Narrowing the definition of "affected", counting only users who raised a ticket, or measuring a dependency that stayed up | Impact derived from telemetry as well as contacts; a plain-language impact statement reviewed at the incident review |
| Communication timeliness | Posting a vague notice to start the clock, sending updates with no content, or counting internal messages | Content check of a sample of updates; customer feedback on clarity; only customer-facing notices counted |
| Review completion timeliness | Publishing a thin document to meet the date, or declaring a review "not needed" | Review quality read by a peer on a sample (see topic 4.2, Postmortem and learning metrics); share of reviews waived is shown |
| Action item follow-through | Writing vague or trivial actions that are easy to close, closing actions without doing the work, or relabeling as "won't do" | Action quality sampled; closed actions verified against the system change; "won't do" share and reasons reviewed |
| Repeat major incident rate | Recording each cause as new by choosing different wording, or attributing everything to "human error" | A short cause taxonomy with definitions; cause fields reviewed by someone outside the incident; "human error" as a cause not accepted without a system explanation |

A healthy reading is a moderate and fairly stable count of declared incidents, with an occasional downgrade and an occasional missed one found in review. Time to declare is short and falling, customer impact per incident is understood and falls where prevention work was done, and nearly all customer-facing updates are on schedule. Reviews are published on time and their actions are mostly finished, with a small, honest set of declined actions. If everything looks perfect, ask whether the criteria have drifted or whether people have stopped declaring (see topic 1.2, Goodhart's law and the psychology of metrics). The [law named after Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) is easiest to see here, because the cost of a bad number is a reduced willingness to raise an alarm.

## Trade-offs: pros and cons

| Choice | Strength | Weakness |
| --- | --- | --- |
| Show each incident as a row | Keeps context, avoids misleading averages on small counts | Harder to summarize for leaders; needs a short narrative per incident |
| Report a count of major incidents | Simple, familiar, visible to leadership | Easy to turn into a target; reacts to changes in criteria |
| Time from impact start | Reflects the user's experience, exposes the detection gap | Impact start is sometimes uncertain and needs judgment |
| Time from declaration | Easy to capture and compare | Hides slow detection and slow declaration |
| User-minutes of impact | Comparable across incidents and services | Needs telemetry; treats all users and minutes as equal |
| Review completion rate | Easy to collect, nudges the habit | Rewards the document, not the learning |
| Action follow-through rate | Connects review to change | Can be gamed by trivial actions; needs an owner and a backlog |

Use a small set of measures that cover the whole cycle (declare, restore, tell, learn, finish) instead of optimizing one. Add impact measures only when the telemetry exists. Where telemetry is missing, a careful written impact statement serves better than an invented number.

## Questions to discuss with your team

**1. What exactly makes an incident major here, and does everyone on call agree?**
The definition is the foundation for every other number. Ask three people to classify the same recent incident and compare answers. Disagreement shows where the criteria are vague. The facilitator should note examples to add to the written criteria and agree who may declare. Close by confirming that declaring in good faith is always acceptable, even if the incident is later downgraded.

**2. In our last major incident, how long was it between the start of impact and the declaration?**
Reconstruct the timeline from monitoring, not memory. The gap is often larger than expected and is sometimes the longest phase. Ask what signal existed and who saw it, and whether the gap came from unclear criteria, a missing alert, or reluctance to declare. Pick one change that would shorten it, and decide how you will know.

**3. Who was affected, and how do we know?**
Compare what the team believed at the time with what telemetry and support contacts show later. Ask which customers, if any, were affected more than others, and whether they were the ones who matter most to the business or the ones least able to cope. Discuss whether the impact statement is something a customer would recognize. Agree on one measure of impact you can collect reliably next time.

**4. Did people hear from us when they needed to, and was the message useful?**
Check the first notice and each update against the agreed rhythm. Read the actual messages as a customer would. Ask whether they said what was known, what was not known, and when the next update would come. Discuss who owns communication during an incident and whether that person is free to do it.

**5. What happened to the actions from our last three reviews?**
Pull the actions into one list and mark each as done, in progress, overdue, or declined. For overdue ones, ask what is blocking them: capacity, ownership, priority, or unclear scope. Decide how overdue actions will be raised at the next operations or planning meeting.

**6. If we were measured on the number of major incidents, what would we do differently, and would customers be better off?**
This question surfaces the gaming vectors before they occur. Ask the group to be candid about what they might change: thresholds, labels, who declares. Then ask what the better target is. A good answer moves toward customer impact, time to declare, and follow-through, which are harder to game without helping users. Record the answer as a guardrail.

## Four perspectives

### Product and delivery teams

Product teams meet major incidents as interruptions to planned work and as feedback on their own changes. They gain most from clear impact numbers, fast access to their own incident timelines, and review actions that land in their backlog with room to do them. Reserve capacity for incident follow-up, and treat actions as work with the same standing as features. Share cause categories so that a recurring trigger leads to a change in practice (see topic 2.9, Operational work and unplanned work).

### Service and operations teams

Operations teams run the response and carry the cost of the late-night work. They need criteria they can apply at 3 a.m., a commander and communications role they can staff, and tools that capture the timeline as events happen instead of from memory afterwards. They should watch the load that major incidents place on a small group of people (see topic 5.7, Toil and on-call metrics) and use the metrics in this topic to ask for prevention work, not to compare responders.

### Leadership and governance

Leaders set the climate that decides whether people declare quickly and report honestly. They should ask for the story of each major incident and the trend over a year, avoid targets on the count, and ask about customer impact, detection gaps, and finished actions. Fund the prevention work that reviews recommend, and review it at the same forum as delivery plans. Governance can then see whether lessons turn into change (see topic 5.2, SLIs, SLOs, and error budgets, for a way to link reliability and investment).

### Customers and users

Customers judge a major incident by how long they were affected, whether they were told, and whether it happens again. They are better served by early honest notices than by late polished ones. Give them a status channel, a rhythm they can rely on, and a clear account afterwards of what happened and what will change. Where contracts apply, report in the terms agreed in the service level agreement (see topic 5.1, SLA, OLA, and XLA metrics). Satisfaction after an incident is worth asking about (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer runs a storefront, a payments service, and an order management service, each owned by a product team, with a shared platform team on call. A small service management group runs the major incident process. All numbers in this example are illustrative.

In the last two quarters the retailer declared five major incidents (illustrative). The service management group shows each as a row with impact start, declaration time, restore time, estimated failed orders, the time of the first customer notice, and the review status. They notice that the median gap between impact start and declaration is 38 minutes (illustrative), almost as long as the median time from declaration to restoration at 52 minutes (illustrative). With five incidents they treat both numbers as rough and read the timelines instead. Three of the five show a monitoring alert that fired early and sat unacknowledged in a shared channel.

The team decides to route that alert class to the on-call pager and to add a line to the criteria saying that a sustained checkout failure signal is enough to declare, without waiting for tickets. They also set a target for the first customer notice within 20 minutes of declaration (illustrative), and they check it per incident. Two of five met it. The deployment team adds a status page template that a communications lead can fill in under pressure.

During the same review they find a gaming risk. A manager of one product team had proposed a quarterly goal of "no more than two major incidents". The service management group points out that the previous quarter had one incident that stayed at high priority for four hours with customers failing at checkout, which was never declared because the team was close to the limit. They replace the goal with three measures: time to declare, failed orders per incident, and the share of review actions completed on time. They add the guardrail of a quarterly sample of high-priority incidents read by someone outside the owning team. Next quarter the declared count rises to four (illustrative), the median time to declare falls, and the sampled review finds no missed declarations.

## Agile, AI, automation, and analytics

### Agile

Run a blameless review with stakeholders after each major incident and follow the actions through at a regular cadence. The caution is that a target for fewer major incidents encourages declaring fewer, so measure time to declare and customer impact as well.

### AI

AI can help detect, summarize, and communicate during a major incident, and draft the first version of a review. Pair communication timeliness with the accuracy of what was communicated, and mark which parts of a review an AI drafted and a person checked. The caution is that a confident AI summary of an incident may be wrong, so a human owns the final account.

### Automation

Automate the timeline capture from chat, paging, and monitoring so the review starts from facts, and measure the incident tooling itself, such as paging failures. The caution is that automated status posts can look like communication without reaching the people who need it.

### Analytics

Major incidents are rare, so use counts, timelines, and customer impact, not rates and averages. The decision informed is what to fix and what to rehearse. The caution is that small numbers invite over-interpretation, so avoid trend claims from a handful of events.

## Sector lens

**Startup.** A startup may have no formal major incident process, only whoever is awake. Start with a one-paragraph definition, a named coordinator for each event, and a shared document that records the timeline. Count incidents and note impact in a sentence. The review can be a half-page note, and the follow-up is an item in the team's backlog.

**Small business.** A small business often depends on suppliers for much of its service, so the timeline includes waiting on a supplier. Record supplier contact and response times in the incident timeline, because they explain much of the duration and give evidence for contract conversations. Keep customer communication simple: one channel, one person, and a stated update interval.

**Enterprise.** Enterprises run many services and have many incidents in each period, so a count per service and a roll-up are both useful. The risks are inconsistent criteria between divisions and a process heavy enough to slow declaration. Align definitions, keep the process light for the first fifteen minutes, and use a common record format so that impact and communication can be compared.

**Government and public sector.** Public bodies often have statutory duties, such as notifying a regulator or the public, and a higher cost of failure for citizens who have no alternative. Add measures for compliance with notification duties and for impact on vulnerable groups, and keep records that stand up to audit and public information requests. Procurement cycles can delay action items, so track blocked actions and escalate them.

## Business case: motivations, ROI, and TCO

The motive is to cut the cost of the incidents that hurt the most: lost revenue or service, damaged trust, staff burnout, and regulatory exposure. A small, consistent set of major incident measures shows where that cost comes from, whether detection and communication are improving, and whether the investment in prevention is landing. Measures that show nothing but a count push cost into hiding incidents.

Costs of collection are modest if the data already lives in the ITSM tool, the monitoring system, and the issue tracker. The main costs are agreeing definitions, linking the incident record to monitoring and to the action backlog, and the time taken to write each review. The metrics cost little beyond making the record consistent.

The return shows up as shorter time to declare, clearer communication, fewer repeat incidents, and less rework. No universal figure applies, so estimate your own: take your last year of major incidents, estimate the cost of an hour of impact for each service with finance, and compare it with the cost of the follow-up work you would need to prevent the repeat causes. Total cost of ownership includes the time of reviewers, the tooling for timelines and status pages, and the capacity set aside for follow-up actions, which is where most programs underinvest.

## Anti-patterns and pitfalls

- **A target for the number of major incidents.** It teaches people to avoid declaring. Instead, track time to declare, impact, and follow-through, and sample for missed declarations.
- **A single mean time to restore for major incidents.** With few events, one long outage dominates. Instead, show each incident, then the median and the longest over a year with the count.
- **Starting the clock at declaration.** It hides detection and declaration delay. Instead, start at the earliest evidence of customer impact, and report the gap separately.
- **Ranking responders or teams by incident metrics.** It destroys candor and breaks the review. Instead, report by service and system, and keep names out of the data.
- **Treating the review as done when the document is published.** The change is the point. Instead, measure action follow-through and look at overdue actions every month.
- **Silent threshold changes.** Trends become meaningless. Instead, version the criteria and note changes in the report.
- **Counting only tickets as impact.** Many affected users never call. Instead, use telemetry and add a plain-language impact statement.
- **Using the metrics to assign blame.** People then hide facts. Instead, keep reviews blameless, focus on conditions and decisions, and look for system causes.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definition and clocks | Major means whatever the loudest person says; times come from memory | Some teams have criteria and write down start and end times | One written definition, versioned, with clock rules for impact start, declaration, and restore | Definition and clocks audited against monitoring; changes logged with reasons | Criteria and clocks agreed with suppliers and customers, revised when they stop informing decisions |
| Impact and communication | Impact described in anecdotes; updates sent when someone remembers | Impact estimated for some incidents; some teams use a status page | Impact measured from telemetry for key services; update targets set and tracked | Impact and communication trended and linked to customer feedback | Impact shared with customers and suppliers in a common format, with joint improvement actions |
| Review and follow-through | Reviews rare and unwritten; actions forgotten | Reviews written by some teams; actions recorded but not tracked | Every major incident reviewed on time; actions tracked in the team backlog | Overdue actions and repeat causes reviewed on a cadence, with funded prevention work | Patterns shared across teams and suppliers; learning changes design and planning routinely |
| Use in decisions | Numbers cited after the fact | Counts shown to leaders without context | Timelines and trends shown to the teams that own the services | Metrics paired with guardrails and used to prioritize reliability work | Reliability investment decided jointly using impact and recurrence evidence across services |

## Checklist

- [ ] Declaration criteria are written, versioned, and known to everyone on call.
- [ ] Declaring in good faith is explicitly safe, and no target exists on the count.
- [ ] Impact start, declaration, and restore times are defined and taken from monitoring or an audit trail.
- [ ] Each major incident is shown as its own row with a phase timeline.
- [ ] Customer impact is derived from telemetry where it exists and described in a plain-language statement.
- [ ] Targets for the first notice and for the update rhythm are set and checked per incident.
- [ ] A review is published within the agreed window and its actions are in the owning team's backlog.
- [ ] Overdue actions and repeat causes are reviewed on a schedule.
- [ ] A quarterly sample of high-impact ordinary incidents checks for missed declarations.
- [ ] Every metric has a named guardrail and no metric is used to rank individuals.

## AI prompts

**Draft declaration criteria for review.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Reconstruct and critique an incident timeline.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Review a set of post-incident actions.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Test a proposed metric for gaming.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topics and the guardrail that should sit beside each major incident metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited version of this topic still follows the template and conventions.

## Key takeaways

- Major incidents are rare, so show each one with its timeline and summarize only over long windows with the count beside the figure.
- Start the clock at customer impact, and report the gap before declaration as its own measure.
- Measure impact in terms of users and usage, and add a plain-language statement for what numbers miss.
- Treat communication timeliness as part of the response, with targets by audience and a steady update rhythm.
- A review is finished when its actions are finished, so track follow-through and repeat causes.
- Never set a target on the count, never rank people, and keep declaring safe.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
