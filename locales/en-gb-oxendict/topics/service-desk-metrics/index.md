# Service desk metrics

**Measure the service desk by how well it helps people get back to work and how much it teaches the rest of the organization, because counts of calls and minutes on the phone reward speed and volume at the expense of both.**

## Overview and motivation

For most users the service desk is the service. They rarely meet the engineers or see the pipeline; they meet whoever answers when something goes wrong. A [help desk](https://en.wikipedia.org/wiki/Help_desk) is the department or person that gives assistance and information, usually about computer problems. In [IT service management (ITSM)](https://en.wikipedia.org/wiki/IT_service_management) usage, the service desk is the single point of contact between the provider and its users, handling both incidents (unplanned disruptions or potential disruptions to a service) and service requests (routine requests for something the service normally provides). In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, the service desk practice sits beside incident management and service request management, and it is described by its purpose and outcomes, not by a fixed list of measures. This topic therefore offers practical guidance, not a framework requirement.

The measures that grew up around the desk come largely from the [call centre](https://en.wikipedia.org/wiki/Call_centre) tradition: how many contacts arrived, how long people waited, how many gave up, how long each contact took, and how many were solved at the first attempt. Those measures are useful and cheap, and they are also the easiest in the book to turn into targets that damage the service. Short calls look efficient until the same user calls back three times. Low abandonment looks caring until agents answer fast and resolve nothing. The topic's job is to describe each measure, state its clocks, and say what it rewards and what it hides.

The agile view adds a second purpose. Every contact is evidence about what users find confusing, what breaks, and what they wish the service did. An agile team that releases often needs that evidence quickly and at the level of a service, not a ticket. So the desk is measured twice: as an operation that answers people well, and as a sensor that feeds the backlog. Volume is the bridge between the two. A rising count may mean growth, a bad release, a missing article, or a new channel, and the metric alone cannot tell you which (see topic 3.2, Incident volume and priority, for how to read counts by category and priority).

Key terms: [first-call resolution](https://en.wikipedia.org/wiki/First_call_resolution) is the share of contacts resolved at the first contact; an [automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor) routes incoming calls to available staff; a [service-level agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) is a commitment between provider and customer; a [percentile](https://en.wikipedia.org/wiki/Percentile) is the value below which a given share of observations fall, so the 85th percentile of handle time is the duration that 85 percent of contacts finish within; and [customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction) (see topic 6.1, Customer satisfaction metrics) is how well a service meets users' expectations.

The terms "contact" and "ticket" are not the same. A contact is one attempt by a person to reach the desk through a channel such as phone, chat, email, portal, walk-up, or messaging. A ticket (also called a record) is what the ITSM tool creates to track the work. One ticket may involve many contacts, and some contacts, such as a password reset answered on the spot, may create a ticket only for the record. Mixing the two is the most common source of confusion in desk reporting, so the definitions below count them separately.

## Key principles

- **Count contacts and tickets separately, and define both.** A contact is an attempt to reach the desk; a ticket is a record of work. Reports that mix them cannot be reconciled.
- **Report times as distributions.** Show the median and a high percentile such as the 85th or 95th, never only an average, because a few very long or very short contacts distort the mean.
- **Pair every speed measure with an outcome measure.** Answer speed, abandonment, and handle time describe effort. Resolution and recontact describe whether the user was helped.
- **Normalize volume against usage.** A count that rises because the user base grew is a different story from one that rises per user.
- **Measure channels and services, not people.** These metrics describe a desk, a queue, a service, and a channel. They are never used to rank or discipline individual agents.
- **Treat the desk as a sensor.** Each metric should lead to a question for delivery teams about what to fix, document, or automate upstream.

## Metric definitions

The table lists seven measures that most service desks can collect from their telephony platform and ITSM tool. Thresholds and targets are for each desk to set and write down; this topic gives no benchmark values.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Contact volume | Number of contacts received by the desk, by channel and period | count of contacts created in the period, by channel; internal test contacts, duplicate email auto-replies, and outbound calls the desk placed are excluded | count | Telephony or chat platform log; ITSM tool contact records | Service desk | Demand signal in backlog refinement | Weekly |
| Contact rate | Contacts relative to the size of the population served, so growth is not mistaken for a problem | contacts in the period / active users or active accounts in the period, scaled to 100 users; the user count is taken from the same period and the definition of "active" is written down | contacts per 100 users | Contact records and the identity or licence system | Service desk; service level management | Usage-adjusted demand in product review | Monthly |
| Time to answer | Wait from the moment a contact enters the queue until a person or an automated answer engages | clock starts when the contact is queued and stops at first human response; abandoned contacts are excluded from this measure and counted in abandonment; report the median and 85th percentile | seconds (phone, chat); minutes or hours (email, portal) | Telephony platform; chat platform; ITSM tool timestamps | Service desk | Responsiveness working agreement | Daily during review windows, weekly in trend |
| Abandonment rate | Share of contacts that end before anyone engages, by the user | contacts ended by the user before first human response / contacts queued; contacts ended within a short grace period (stated in the definition, for example five seconds) are excluded as accidental | percent | Telephony platform; chat platform | Service desk | Cost-of-delay signal in service review | Weekly |
| Handle time | Time the desk spends on a contact | clock starts when a person engages and stops when they finish the contact, including after-contact documentation work; waiting for the user is included only if the definition says so; report the median and 85th percentile, split by contact type | minutes | Telephony platform; chat platform; ITSM tool work log | Service desk; incident management | Effort signal in refinement and capacity planning | Weekly |
| First contact resolution rate | Share of contacts resolved at first contact with no later contact on the same matter | contacts resolved during the contact and not followed by a recontact on the same issue by the same user within the recontact window / contacts eligible; calls where only a referral is required and calls the desk is not expected to resolve are excluded | percent | ITSM tool resolution and linkage fields; user confirmation where collected | Service desk; incident management | Definition-of-done check, resolved at first touch | Monthly |
| Recontact rate | Share of resolved contacts followed by another contact on the same matter | contacts followed within the recontact window (for example seven days, set in the definition) by another contact from the same user on the same service or issue / contacts resolved in the earlier period; contacts about a new issue are excluded | percent | ITSM tool linkage and reopen history; contact records | Service desk; incident management | Escaped defect rate | Monthly |

First contact resolution has more than one defensible definition, so the definition is part of the metric. Some desks count a contact as resolved when the agent closes the ticket during the call. Others count only when the user does not come back within a window. The second is harder to collect and harder to game, and it is the one used here. State the window, state what counts as "the same matter", and apply both the same way every period.

## Recommendations

### Separate contacts from tickets from the start

**Give contacts and tickets their own definitions, identifiers, and counts.** A contact is a record of an attempt to reach the desk, and a ticket is a record of work. Link them in the tool so that a recontact on the same matter is visible. Reports that mix the two give a volume figure nobody can reconcile with the telephony platform.

### Report volume by channel, category, and normalized rate

**Show total volume, volume by channel, volume by category, and contact rate per 100 users.** Totals alone confuse growth with trouble. A drop in phone volume may be a shift to chat, and a rise in portal contacts may be a deliberate success of self-service. Plot the series over at least a year so that seasonality such as term starts and financial year-ends is visible.

### Use distributions for every time measure

**Report the median and a high percentile for time to answer and handle time.** The average of a skewed distribution describes almost nobody's experience. The median shows the typical contact, and the 85th or 95th percentile shows how bad the slow tail is. Say how many contacts the figure rests on, and mark the reading as unreliable when a queue handles only a handful of contacts in the period (see topic 1.6, Statistical literacy for service metrics).

### Treat abandonment as a signal of demand and staffing

**Read abandonment alongside time to answer and arrival patterns.** People abandon when the wait is longer than they expect, so the rate rises with the wait, and the wait rises when arrivals exceed capacity. [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory) explains why the wait grows sharply as a queue approaches full utilization, which is why a desk run near 100 percent busy always has long waits and high abandonment. Staff to arrival patterns by hour and day rather than to a monthly average, and show abandonment by time of day (see topic 2.3, Work in process and queueing).

### Define first contact resolution carefully, then measure it from the user's side

**Use a recontact-based definition and confirm it with a short question to users.** Counting only contacts that do not return within a stated window is harder to inflate than an agent flag set at closure. Add a one-question check, such as "was your issue resolved?", and compare it with the recontact figure. When the two disagree, the user's answer is the better guide, and the gap points at where closure is premature.

### Use handle time for planning, not for targets

**Treat handle time as a capacity input and a diagnostic, and never set a target for agents to beat.** A target on handle time pays for rushing, early transfers, and thin documentation. Use the distribution by contact type to plan staffing and to find contacts that take far longer than similar ones, which often point at a missing article, a clumsy tool, or an unclear process. Aim at the system causes, not at the agents.

### Tie desk metrics to delivery work

**Review the top categories of contacts with the teams who own the services.** Every month, take the five categories that generated the most contacts per 100 users and ask what change upstream would remove them: a fix, an article, a better error message, or a self-service route. Record the answers in the owning team's backlog. This turns the desk's numbers into improvement work and is the clearest agile use of the data (see topic 3.6, Knowledge management metrics, and topic 3.7, Self-service and automation metrics).

### Include every channel in the same definitions

**Apply the same clock and counting rules to phone, chat, email, portal, walk-up, and messaging.** Asynchronous channels have no live queue, so time to answer means something different in each. Define the clock per channel, and report each separately before combining. A desk that publishes only its best channel hides the experience of everyone else.

### Link the metrics to the user's experience

**Pair operational measures with a post-contact satisfaction question and a free-text prompt.** A fast answer to a rude or unhelpful contact is a bad outcome, and the clocks cannot see it. Show the response rate and the respondent mix beside the score, because only a self-selected part of users reply (see topic 1.5, Data sources and instrumentation). Read the comments with the people who answer the contacts, in a team setting.

### Keep metrics at the team and queue level

**Report by queue, channel, service, and team, and keep agent-level data for coaching conversations that the agent takes part in.** Ranking individual agents on handle time or resolution rate pushes cherry-picking of easy contacts and avoidance of hard ones. It also damages trust in the data, and users feel the result in the quality of help. Use team-level numbers to ask what the system needs.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Contact volume | Agents discourage logging by redirecting users to channels that are not counted, or split one contact into several to make a queue look busy; managers target a lower volume | Contact rate per 100 users and a periodic reconciliation of telephony counts with ticket counts; a fixed rule that every channel is counted |
| Contact rate | The denominator is chosen after the fact (for example a broad definition of "active") so the rate looks better | A written, dated definition of "active users" and the raw counts shown beside the rate |
| Time to answer | Contacts are answered by an auto-greeting or a transfer to a quiet queue, or the call is picked up and put on hold; email gets an automatic reply that counts as an answer | Define the clock as first human response, and track abandonment and recontact beside it |
| Abandonment rate | Callers are dropped before they are queued, the grace period is stretched, or a callback offer is counted as an answered contact | Time to answer percentiles, callback completion rate, and a published grace period |
| Handle time | Calls are rushed, transferred early, or ended before the problem is solved; notes are left thin; work is moved to after-contact time that the clock excludes | First contact resolution, recontact rate, and a sample review of documentation quality by the team |
| First contact resolution rate | Tickets are closed during the call regardless of the result, "same matter" is read narrowly, or hard contacts are classified as "not expected to resolve" | Recontact rate, a one-question user confirmation, and periodic audits of exclusions by the team |
| Recontact rate | Users are asked to open a new ticket for a follow-up, or follow-ups are logged under a different category so they do not link | Linking rules in the tool, a sample audit of unlinked repeat contacts, and user-reported resolution |

A healthy reading is a set of figures that agree with one another. Time to answer and abandonment move together, handle time varies with the contact type and not with the day's target, first contact resolution and recontact are mirror images that sum near their ceiling, and the user's answer to "was your issue resolved?" agrees with the recontact figure. A single figure that improves sharply while the others stay flat is a reason to look at how it is collected before celebrating. A desk that is gamed usually shows the symptoms in recontact, repeat categories in volume, and rising complaints.

## Trade-offs: pros and cons

| Choice | Advantage | Cost or risk |
| --- | --- | --- |
| Average handle time as a headline | Simple, available in every platform, easy to explain | Rewards rushing, hides the tail, and invites targets that damage resolution |
| Median and 85th percentile for times | Describes the typical case and the slow tail | Needs enough contacts to be stable and a little more explanation |
| First contact resolution by agent closure flag | Easy to collect | Easy to inflate and hard to compare between desks |
| First contact resolution by recontact window | Hard to game and closer to the user's experience | Needs good linking in the tool and waits for the window to pass before it can be reported |
| Abandonment with a grace period | Removes accidental hang-ups | The grace period can be stretched to flatter the figure |
| Contact rate per 100 users | Separates growth from trouble | Depends on a trustworthy user count and a clear definition of "active" |
| Post-contact survey | Captures what the clocks cannot | Low and uneven response rates, and a bias toward users with strong feelings |
| Reporting by team and queue only | Protects trust and focuses on the system | Gives less detail for individual coaching, which needs a different, private process |

No set of measures removes the tension between speed and care. A desk that answers every contact in seconds and solves little has a good queue and a poor service, and a desk that takes time to solve properly will show longer handle times and wait. The way through is to agree which outcome matters most this quarter, make the trade explicit, and review the pair of metrics that hold it in balance. Faster is better only while resolution holds.

## Questions to discuss with your team

**1. What does a "contact" mean here, and does our count match what the telephony platform and the ITSM tool each report?**
Ask the group to trace one day of contacts through every channel and compare the counts from the two systems. Note contacts that never become tickets and tickets that never begin as contacts. A facilitator should expect a gap at first and treat it as a finding about definitions, not a fault in the people. Agree a rule for the next report and who owns it.

**2. When we say a contact was resolved at first contact, how do we know the user would agree?**
Review ten recent contacts marked as first contact resolutions and check whether any of the users came back on the same matter. Ask what the agent could have done differently on those that did. The discussion usually shows where closure happens before the user is ready. Decide whether to add a one-question confirmation and what the recontact window should be.

**3. What happens to the person on hold, and when do they give up?**
Look at the abandonment curve by time waited. Most desks find a point beyond which people leave in large numbers, and that point is the practical limit of the queue. Ask what callback, chat, or automated answers are on offer, and whether any of them are counted as answered when the issue is not solved. The facilitator can use this to open a discussion about staffing by hour, not by month.

**4. Which of our handle time numbers would change if we paid attention to after-contact work and waiting?**
List what the clock includes and what it leaves out. Ask whether anyone has felt pressure to shorten calls, and what they did. This question is easier to answer in a team than in a report, so give people the chance to speak without attribution. Agree a definition and whether handle time will be used for planning only.

**5. Which five categories generated the most contacts per 100 users last quarter, and who owns the fix for each?**
Bring the category data and the owners of the underlying services to the same table. For each category, ask whether the best response is a fix, an article, a better message, or a self-service route. The point is to leave with items in a backlog and named owners. Revisit the list next quarter to see which ones moved.

**6. Are we reporting this at team and queue level, and is anyone using it to compare individuals?**
Ask the group directly whether any of these figures has been used to judge a person, and what effect it had. Discuss what the desk would stop doing if individual comparison ended, and what it would start doing. The facilitator should record any examples and bring them to the metrics owner for a decision about the policy. The aim is a written commitment that the data describes the system.

## Four perspectives

### Product and delivery teams

Delivery teams get the best view of their own service from the desk. Contacts per 100 users after a release show quickly whether a change confused people, and the categories show what to fix next. Teams should expect a monthly review of top categories and treat them as backlog input, with no blame attached to the desk for reporting what users tell it. Ask the desk for contact samples as well as counts, because the words users use often reveal a labelling or design problem.

### Service and operations teams

Desk staff and their leads need figures that help them plan and improve without turning into targets. Staffing by hour from arrival patterns, recontact reviews, and article requests are the most useful outputs. Staff should have a say in how the metrics are defined, because they know where the clocks mislead. They should see their own team's figures first and be able to challenge them.

### Leadership and governance

Leaders need a short set of figures that agree with each other: volume and contact rate, time to answer and abandonment, first contact resolution and recontact, and a user satisfaction score with its response rate. They should ask for distributions and for notes on definition changes, and they should resist setting a single target on handle time or on volume. Targets on speed alone invite the gaming described above. Governance should record who owns each definition (see topic 1.4, Metrics governance and ownership).

### Customers and users

Users care whether they got through, whether they were treated well, and whether the problem stayed fixed. They do not care about handle time. Telling them what the desk measures and acting on their feedback builds trust, and so does making sure the channels they prefer are measured and staffed. Customers who buy the service are served by clear commitments in an SLA or an experience agreement (see topic 5.1, SLA, OLA, and XLA metrics, and topic 6.2, Experience level agreements).

## In practice: a service management example

A regional hospital's IT department runs a service desk of about a dozen staff for roughly 4,000 clinical and administrative users. The numbers below are illustrative and do not come from any real organization.

The team's weekly view shows 1,900 contacts (illustrative), which is a contact rate of 47.5 contacts per 100 users (illustrative). Phone time to answer has a median of 40 seconds and an 85th percentile of 6 minutes (illustrative). Abandonment is 14 percent (illustrative) and rises sharply on weekday mornings between 08:00 and 09:30. Median handle time is 7 minutes, and the 85th percentile is 22 minutes (illustrative). First contact resolution by recontact window is 61 percent (illustrative), and the seven-day recontact rate is 19 percent (illustrative).

At the monthly review the desk lead and the clinical applications team look at the categories. Login and badge problems account for a large share of morning contacts, and a recent change to the clinical application sign-in produced a spike in contacts about the same error message. The desk and the applications team decide to do three things. They will change the error message and add a link to the article, they will add a callback option for the morning peak, and they will move one shift's start earlier by an hour to cover the 08:00 arrival pattern. They will review abandonment, recontact, and contact rate for that category after four weeks.

Partway through the quarter a manager proposes a handle time target of 5 minutes to reduce the queue. The team shows that the 85th percentile contacts are the slow ones that matter most and that a target would push agents to end calls early. They also notice that the first contact resolution figure has risen to 78 percent (illustrative) in one week while the recontact rate rose to 27 percent (illustrative). A review finds that a few shifts had begun closing tickets during the call with a note to the user to call back, which counted as a first contact resolution. The team restores the recontact-based definition, adds the user confirmation question, and drops the handle time target. Abandonment, time to answer, and recontact are reported together from then on.

## Agile, AI, automation, and analytics

### Agile

Treat desk feedback as input for continuous improvement: a regular review with stakeholders of the top contact reasons and one change to remove a cause. The caution is that handle time targets push agents to rush, so keep them out of individual reviews.

### AI

AI triage and drafted replies can cut time to answer and handle time while changing what reaches a human, so the remaining contacts are harder and the averages mislead. Pair speed with recontact rate and the share of AI-drafted replies that an agent changed materially. The caution is that a virtual agent that closes a conversation is not a resolved problem, so count contacts that return.

### Automation

Collect contact, queue, and status events automatically from the telephony and ticket systems, and measure routing automation on misroutes and on contacts that bounce between queues. The caution is that automatic categorization drifts, so sample tickets to check the category was right.

### Analytics

Use percentiles for answer time, show the number of contacts behind each rate, and break out contact reasons so the decision is which cause to remove. The caution is that small queues produce noisy percentages, so show intervals or counts for low-volume services.

## Sector lens

**Startup.** The desk is often a shared inbox or a chat channel handled by whoever is free. Count contacts by channel, tag the category, and look at the top five each month with the people who build the product. Do not buy a call centre platform before the volume justifies it, and do not set targets for speed when two people answer all contacts.

**Small business.** One person or an outsourced provider usually runs a hosted service desk. Use the tool's standard reports, ask the supplier for its definitions of contact, resolution, and abandonment in writing, and export raw data from time to time. A short recurring question to users, such as "was your issue resolved?", gives more insight than a long dashboard.

**Enterprise.** Many queues, languages, tools, and suppliers lead to different definitions of the same word. Agree a shared definition of contact, first contact resolution, and recontact, and a common set of channels. Report by queue and service, with a standard view for leadership, and use workforce management data to staff to arrival patterns. Compare queues only after checking that they use the same definitions.

**Government and public sector.** Records may have retention, access, audit, and privacy obligations, and a contract may fix the metrics and targets for an outsourced desk. Read the contract metrics critically and add the guardrail measures to the reporting even when they are not required. Keep the audit trail of definition changes, and avoid collecting personal data that is not needed. Public services often serve users with limited choice of channel, so accessibility of each channel is part of the picture (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivation for better desk metrics is a cheaper and better service, and the return comes in three places. First, fewer repeat contacts: each recontact is work the desk did not need to do and time the user did not want to spend. Second, upstream fixes: the desk's category data can remove entire classes of contact when delivery teams act on it. Third, better staffing: arrival-pattern data lets managers place people when users need them, which lowers abandonment and idle time at once.

The cost of collection is modest where the telephony platform and ITSM tool already record the events. The main costs are time to agree definitions, fix linking between contacts and tickets, add a short post-contact question, and review the data with delivery teams.

No return figure is offered here, because published figures vary with the organization and its method, and none has been verified for this topic. Estimate the return from your own data. Take the count of recontacts and a measured handle time, multiply by the cost of an agent hour, and compare that to the cost of the fix. Describe the result as an estimate with its assumptions, and revisit it after the change (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Targeting average handle time.** It rewards rushing and early transfers. Use the distribution by contact type for planning, and pair it with first contact resolution and recontact.
- **Counting an agent-set closure flag as first contact resolution.** It can be set regardless of the outcome. Use a recontact window and a user confirmation.
- **Ranking individual agents.** It pushes cherry-picking and defensive behaviour. Report by team and queue, and keep individual conversations private and supportive.
- **Reporting an all-channel average that hides the weakest channel.** Phone, chat, and email behave differently. Report each channel separately before combining.
- **Reading volume without a denominator.** A rise might be growth. Show contacts per 100 users and the category mix.
- **Leaving the desk out of delivery decisions.** Counts reported to a dashboard and never discussed with the product team are wasted. Hold a monthly review of top categories with their owners.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | Each person counts contacts differently | A few definitions are written for some queues | One written definition per metric, including clock start and stop and exclusions | Definition changes are logged and reviewed on a schedule | Definitions shared with suppliers and customers and revised when they stop informing decisions |
| Data capture and quality | Counts assembled by hand from exports | Telephony and ITSM data reported separately | Contacts and tickets linked, with automated capture across channels | Linkage, completeness, and reconciliation measured and trended | Contact data shared across teams and suppliers through agreed interfaces |
| Use in improvement | Numbers reported but rarely discussed | Occasional review of busy periods | Monthly review of top categories with service owners | Improvements planned, funded, and checked against recontact and volume | Desk data drives backlog priorities across product teams and suppliers |
| Guardrails and trust | Speed targets applied to individuals | Some awareness of gaming | Paired measures reported together and no individual ranking | Gaming checks audited by the team and user confirmation in use | Users and staff help set the measures and see the results |

## Checklist

- [ ] Contacts and tickets are defined and counted separately, and the counts reconcile.
- [ ] Every channel has a written clock for time to answer and a stated way of treating automated replies.
- [ ] Time measures are reported as the median and a high percentile with the sample size.
- [ ] Abandonment has a written grace period and is shown with time to answer.
- [ ] First contact resolution uses a recontact window and a stated meaning of "the same matter".
- [ ] A one-question user confirmation is collected, with its response rate shown.
- [ ] Contact rate per 100 users is reported, with a written definition of "active user".
- [ ] No target on handle time is set for agents, and no metric ranks individuals.
- [ ] The top contact categories are reviewed monthly with the owning teams, and actions go to a backlog.
- [ ] Definitions are version-controlled and each change is dated.

## AI prompts

**Draft precise definitions for the desk's core measures.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Review a set of desk figures for signs of gaming.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Prepare a monthly review of top contact categories.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Design a short post-contact survey.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic defines a related metric and the guardrail that should sit beside a desk measure.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep every metric paired with a gaming vector and a guardrail.

## Key takeaways

- Count contacts and tickets separately, define both, and normalize volume against the size of the user base.
- Report times as the median and a high percentile, and say how many contacts each figure rests on.
- Read answer speed, abandonment, and handle time as signs of effort, and pair them with first contact resolution and recontact as signs of outcome.
- Define first contact resolution by whether the user comes back, and confirm it with a one-question check.
- Use the desk as a sensor: review the top categories monthly with the teams who own the services.
- Measure queues, channels, and services, and never rank individual agents.

## References and further reading

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
