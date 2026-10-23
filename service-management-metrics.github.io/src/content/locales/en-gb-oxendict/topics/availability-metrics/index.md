# Availability metrics

**Availability is the share of time, or of user requests, in which a service did what its users needed, and it only tells the truth when you define what "up" means from the user's side, count planned and unplanned outages separately, and read the arithmetic of the nines before you promise one.**

## Overview and motivation

Availability is the most quoted number in service management and one of the least precisely defined. A statement such as "the service was 99.9 percent available last month" sounds exact, yet it hides at least four decisions: what counted as the service, what counted as "available", which hours were in scope, and which outages were excluded. Two teams can report the same service on the same month and publish figures that differ by an order of magnitude without either of them making an arithmetic mistake.

This topic makes those decisions explicit. It covers uptime and downtime calculation, user-weighted availability, planned versus unplanned outage, and the arithmetic of the nines. It builds on service level indicators (SLIs), service level objectives (SLOs), and error budgets (see topic 5.2, SLIs, SLOs, and error budgets) and on the contractual view of service levels (see topic 5.1, SLA, OLA, and XLA metrics). Those topics say how to choose a target. This one says how to compute the number the target is compared with.

### Terms used in this topic

- **Availability** is the ability of a service to do what users need when they need it, usually expressed as a percentage over a period. The general concept is described in the article on [high availability](https://en.wikipedia.org/wiki/High_availability).
- **[Downtime](https://en.wikipedia.org/wiki/Downtime)** is a period when a service is unavailable. This topic uses **outage** for one continuous episode of downtime and **degradation** for a period when the service works but below an agreed quality.
- **Uptime** is the complement of downtime within the measurement window. Time-based availability is uptime divided by the total in-scope time.
- **Request-based availability** is the share of valid requests that succeeded, so a failure that affects 5 percent of requests for an hour counts as 5 percent of an hour's traffic, not as a full hour of downtime.
- **User-weighted availability** extends the request-based view by weighting failures by the number or importance of the users affected, for example by counting failed sessions or failed journeys instead of raw requests.
- A **service level agreement (SLA)** is a commitment to a customer, and a **service level objective (SLO)** is an internal target for an indicator. The [service level agreement](https://en.wikipedia.org/wiki/Service-level_agreement) and [service level objective](https://en.wikipedia.org/wiki/Service-level_objective) articles give general definitions.
- **Planned downtime** is an outage announced in advance and approved through change enablement. **Unplanned downtime** is everything else. The boundary between them is one of the most contested lines in availability reporting.
- **[Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)** is the average operating time between outages, and **[mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair)** is the average time to restore. Both are averages, so this book reads them as distributions (see topic 1.6, Statistical literacy for service metrics).
- **[Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring)** uses scripted probes that behave like a user and report success or failure. **[Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring)** records the experience of actual users as they use the service.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** is the best-known framework for IT service management. In ITIL 4 the availability management practice is concerned with ensuring that services deliver agreed levels of availability, and it works closely with monitoring and event management, incident management, and service continuity management.

### Why one number is never enough

Ten outages of four minutes each and one outage of forty minutes produce the same downtime total, yet they feel different to users and call for different responses. The first pattern points to a fragile service. The second points to slow detection or recovery. For that reason the metrics here come as a small set, each with a guardrail, so that a team can discuss availability honestly without competing for the most nines.

### How ITIL and agile views differ

In ITIL, availability is a managed attribute of a service, agreed with the customer and reported by service level management against a stated target, with clear service hours and exclusions such as planned maintenance.

In agile and site reliability engineering (SRE) practice, availability is one SLI among several, compared with an SLO. The Google *Site Reliability Engineering* book says that time-based availability suits a single system, while request success rate suits distributed services that are partly up at all times. It also says 100 percent is almost never the right target, because the cost of each extra nine rises steeply.

Use the ITIL discipline of agreed scope, hours, and exclusions to define the denominator. Use the SRE discipline of user-centred indicators and error budgets to define the numerator and to decide what to do with the result.

## Key principles

- **Define "available" from the user's side.** A service that answers health checks while users cannot sign in is down for the people who matter.
- **Write the denominator down.** State the service boundary, the hours in scope, the time zone, and the measurement window before you calculate anything.
- **Count planned and unplanned outages separately.** Report both, together, and never let one hide inside the other.
- **Prefer request-based and user-weighted measures for distributed services.** A partial failure is neither full uptime nor full downtime.
- **Convert nines to minutes.** A target is only understood when people can say how many minutes of failure per month it allows.
- **Choose the number of nines the users need.** Beyond that point, each extra nine costs more than it returns.
- **Describe services, never people.** Availability belongs to a service and the teams that run it, and it is never an individual's score.

## Metric definitions

Each row states its clocks and boundaries. Calendar time is used unless a row says otherwise. Where a measure uses a distribution, report the median and the 95th percentile, and name the window.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Time-based availability | Share of in-scope time in which the service met the written definition of "up" | (in-scope minutes in window minus unplanned downtime minutes) / in-scope minutes in window. Clock starts at the first failed probe that is later confirmed as user impact, or at the confirmed impact start recorded in the incident review; stops when the service again meets the definition. Planned downtime inside agreed service hours is shown separately, and time outside agreed service hours is excluded from the denominator | percent | Synthetic monitoring results; incident record with impact start and restore timestamps | Availability management; service level management | A time-based SLI for a single system (see topic 5.2, SLIs, SLOs, and error budgets) | Monthly |
| Request-based availability | Share of valid requests that succeeded | successful valid requests / total valid requests in the window. Valid requests exclude malformed requests and client errors caused by the caller; failures caused by the service, including timeouts, are counted as failures. Reported per service and per user journey | percent | Load balancer, gateway, or application logs and metrics | Availability management; monitoring and event management | Success-rate SLI with an SLO and error budget (see topic 5.2, SLIs, SLOs, and error budgets) | Daily trend, monthly report |
| User-weighted availability | Availability weighted by the users or journeys affected, so an outage at peak counts for more than one overnight | 1 minus (failed user sessions or failed journeys / total user sessions or journeys) in the window. A session counts as failed if a defined critical step failed; partial success is reported as a separate degradation share, not folded in | percent | Real user monitoring; application session logs; analytics events | Availability management; service level management | Journey-based SLI and the experience measures in topic 6.2 (see topic 6.2, Experience level agreements) | Monthly |
| Unplanned downtime | Minutes in which the service was unavailable without prior approved notice | Sum of outage durations in the window, from confirmed impact start to confirmed restore, for outages not announced and approved through change enablement before they began. Overlapping outages on the same service are merged, not summed. Reported as total minutes, outage count, and the median and 95th percentile of outage duration | minutes | Incident record with impact start and restore timestamps | Incident management; availability management | Time to restore read as a distribution (see topic 3.3, Incident response and resolution time) | Monthly |
| Planned downtime share | Proportion of all downtime that was announced and approved in advance | planned downtime minutes / (planned plus unplanned downtime minutes) in the window. An outage counts as planned only if it was approved through a change record before it began and its start and end times were communicated to users; an overrun beyond the approved window is reclassified as unplanned from the moment the window ended | percent | Change record with approved window; incident record; status page history | Change enablement; availability management | Release and maintenance practices that favour zero-downtime deployment (see topic 4.3, Change enablement metrics) | Monthly |
| Outage frequency and spacing | How often outages start and how long the service runs between them | Count of outages starting in the window; and for each pair of consecutive outages, the minutes of uptime between the restore of the first and the start of the second, summarized as the median and the 5th percentile. Not reported as a single mean when fewer than ten intervals exist | count; minutes | Incident record; monitoring history | Incident management; problem management | Stability signal alongside change fail rate (see topic 4.4, Change failure and rework) | Monthly |
| Degradation share | Time in which the service worked but below an agreed quality | Minutes in which the latency, error, or correctness indicator breached its threshold, excluding minutes already counted as downtime / in-scope minutes. Threshold stated per service, for example in the SLO | percent | Monitoring and SLI measurements | Availability management; capacity and performance management | Latency SLI (see topic 5.4, Capacity and performance metrics) | Monthly |
| Measurement coverage | How much of the service's user-facing behaviour the availability measurement actually observes | Critical user journeys with an active probe or real user measurement / critical user journeys listed in the service definition | percent | Service definition; monitoring configuration | Monitoring and event management; availability management | Observability coverage and alert quality (see topic 5.5, Monitoring and alert quality metrics) | Quarterly |

Two notes on data. A probe that checks every five minutes cannot resolve a two-minute outage, so record the probe interval beside the figure, and use the impact start field in the incident record (see topic 1.5, Data sources and instrumentation). Whenever the definition of "up" changes, mark it on the trend chart.

## Recommendations

### Define the measurement

**1. Write the service definition before the percentage.** List the service boundary, the critical user journeys, the hours in scope, the time zone, and the window (a calendar month is usual). Say which dependencies count: if a payment provider fails and users cannot pay, is that your outage? Record the answer in the metric register (see topic 1.4, Metrics governance and ownership). Most disputes about availability are disputes about this page, and settling them in advance is much cheaper than settling them after an outage.

**2. Define "up" as a user outcome, not a server state.** A health check that returns success while sign-in is broken measures the wrong thing. Choose a small number of critical journeys, such as "search and view an item", "sign in", or "submit a claim", and define success for each in terms users would recognize. Probe the journey end to end, and treat a slow response beyond an agreed threshold as degraded, not as up.

**3. Use request-based measures for distributed services and time-based measures where the service is genuinely on or off.** A global service is rarely entirely down, so counting minutes of total failure ignores most real failures. Report both when you can, and say which is the headline and why.

**4. Add user weighting where load is uneven.** A ten-minute outage at 4 a.m. and one at the start of a trading day have the same duration and very different cost. Weight by sessions or transactions in the minute of failure, or report peak-hour outage minutes as a separate figure.

**5. Measure from outside the failure domain.** A probe inside the same network or region as the service fails with it, or keeps reporting success while the path users take is broken. Run synthetic probes from at least two independent locations and cross-check them against real user data.

### Treat planned and unplanned outages honestly

**6. Report planned and unplanned downtime side by side.** Many agreements exclude planned maintenance, which is reasonable. Users still experience it as downtime, so show the excluded minutes and the planned share next to the headline (see topic 4.3, Change enablement metrics).

**7. Make the planned label hard to earn.** Define planned as approved through a change record before the outage began, with start and end times communicated to users in advance. An outage announced after it started is unplanned. An overrun past the approved window is unplanned from the moment the window ended. These three rules stop the label from becoming a way to relabel failures.

**8. Work to shrink planned downtime.** Rolling deployments, feature flags, lock-free schema migrations, and blue-green releases let teams change a service without taking it down. Track planned downtime minutes as a trend and ask what it would take to bring them toward zero.

### Read the numbers well

**9. Convert the nines to minutes and show them.** The table below gives the arithmetic for a 30-day month (43,200 minutes) and a 365-day year (525,600 minutes). Put the minutes allowed on the dashboard beside the target, and show the minutes used so far in the window. People make better decisions about "43 minutes a month" than about "three nines".

| Availability target | Downtime allowed in a 30-day month | Downtime allowed in a 365-day year |
| --- | --- | --- |
| 99 percent | 432 minutes (7.2 hours) | 5,256 minutes (87.6 hours) |
| 99.5 percent | 216 minutes (3.6 hours) | 2,628 minutes (43.8 hours) |
| 99.9 percent | 43.2 minutes | 525.6 minutes (8.76 hours) |
| 99.95 percent | 21.6 minutes | 262.8 minutes (4.38 hours) |
| 99.99 percent | 4.32 minutes | 52.56 minutes |
| 99.999 percent | about 26 seconds | about 5.26 minutes |

The values assume the clock runs for the whole window. If you measure only agreed service hours, the allowed minutes shrink in proportion, and you should say so.

**10. Respect the cost of each extra nine and the limits of your dependencies.** The SRE book notes that reliability costs rise steeply with each additional nine, and that the target should reflect what users need and what the business will pay for. A service can rarely be more available than the dependencies it needs in series. If three essential components each achieve 99.9 percent and a request needs all three, the best expected availability for the combination is roughly 99.7 percent, because the failure probabilities add when the components are independent. Do the multiplication before you promise a figure.

**11. Look at the spacing and the shape, and not just the total.** Frequent short outages need a different response from one rare long outage. Link long outages to detection and restoration (see topic 3.3, Incident response and resolution time) and to the major incident view (see topic 3.4, Major incident metrics).

**12. Close the loop with the error budget and the problem record.** An availability target is useful when it changes what the team does. When the monthly budget of allowed downtime is nearly spent, slow risky change and move effort to reliability work, as described in the error budget policy (see topic 5.2, SLIs, SLOs, and error budgets). When the same cause recurs, open a problem record and track it to a fix (see topic 4.1, Problem management metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Time-based availability | Probing a trivial page that stays up while the real journey fails; lengthening the probe interval so short outages fall between checks; shrinking the in-scope hours; counting outages as degradation | User-weighted availability and real user monitoring; probe interval stated beside the figure; sample incidents against the monitoring record |
| Request-based availability | Counting easy requests (health checks, cached assets) in the denominator to dilute failures; classifying server errors as client errors; excluding retries that users experienced as failures | Success rate per critical journey, not per request; review the exclusion list; compare with user-reported incidents |
| User-weighted availability | Choosing the weighting so peak failures matter little; defining a "successful" session so loosely that broken steps still pass | Publish the weighting rule and the journey list; compare with complaint volume and support contacts during outages |
| Unplanned downtime | Reclassifying outages as planned after the fact; delaying the confirmed impact start; splitting one outage into two to look shorter | Planned downtime share, with the rule that an outage announced after it began is unplanned; compare impact start with monitoring data |
| Planned downtime share | Booking changes as approved windows so that overruns and failures count as planned; inflating the planned share by scheduling needless maintenance | Overrun minutes reclassified as unplanned; change fail rate and emergency change share (see topic 4.4, Change failure and rework) |
| Outage frequency and spacing | Merging incidents, or opening a new incident only after a long gap, to keep the count low; suppressing alerts so short outages go unrecorded | Alert and incident sampling against raw monitoring events; monitoring coverage and alert quality (see topic 5.5, Monitoring and alert quality metrics) |
| Degradation share | Setting the threshold so loose that slow service never breaches it; declaring degraded time as up | Latency percentiles and user-reported slowness reviewed beside the figure (see topic 5.4, Capacity and performance metrics) |
| Measurement coverage | Listing only the journeys that are easy to probe, so coverage reads as 100 percent; counting a journey as covered by a probe that never runs | Journey list agreed with the service owner and users; probe run history sampled each quarter |

A healthy reading shows figures that move for reasons the team can explain, with planned and unplanned downtime both visible and a user-weighted figure close to the headline. Be suspicious of a perfect month that comes with complaints. An occasional honest dip shows the recording system works.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Time-based availability | Simple, widely understood, easy to compare with contracts | Treats partial failure as all or nothing; ignores when and who |
| Request-based availability | Reflects partial failure; scales to distributed services | Depends on a sound definition of a valid request; can be diluted by easy traffic |
| User-weighted availability | Close to what users experienced; shows the cost of peak-time failure | Needs session or journey data; more effort to explain |
| Excluding planned downtime | Matches many agreements; rewards advance notice | Can hide real impact; invites relabelling |
| Moderate targets with error budgets | Balances reliability and delivery speed | Needs discipline to act when the budget is spent |

The prose answer is to choose the simplest measure that fits the service, add user weighting where load is uneven, and be explicit about every exclusion. A slightly less elegant measure that everyone understands does more good than a sophisticated one nobody trusts.

## Questions to discuss with your team

**1. What does "available" mean for our most important service, and would a user agree?**
Ask each person to describe, in one sentence, what a user must be able to do for the service to count as up. Compare the answers with the written definition and with the probe that feeds the dashboard. The facilitator should listen for gaps such as sign-in, search, or payment working in the probe but failing in practice. Finish by agreeing which user journeys the definition must name.

**2. Which outages from the last quarter would our calculation have excluded, and was that fair?**
List the outages and mark each as planned, unplanned, or excluded. Ask who made each call and when. The facilitator should record cases where users would have disagreed with the label, and use them to tighten the rules.

**3. How many minutes of downtime does our target allow, and how many have we used this window?**
Convert the target to minutes for the month and the year on a whiteboard. Compare with the minutes used so far. Ask what the team would do differently if only 20 percent of the budget were left. This makes the abstract target concrete and connects the number to the error budget policy.

**4. Where could our measurement miss a failure that users would feel?**
Walk through probe locations, interval, journeys covered, and dependencies. Ask what failure would pass every probe and still break the service for users. Agree on one new probe or one real user measure to add.

**5. Are we planning outages we could avoid?**
Look at planned downtime over six months and ask what forced each outage. Some are unavoidable, such as a vendor requirement. Others come from a release or migration approach that could change. Ask what it would take to remove the largest source, and who owns that work.

**6. If the headline number looks perfect, what would make us doubt it?**
Name the signals that would contradict the dashboard: complaint volume, support contacts, or the on-call team's recollection. Check whether any exist right now. Agree on one comparison to put on the dashboard.

## Four perspectives

### Product and delivery teams

Delivery teams affect availability every time they change a service. They can design for zero-downtime deployment, use feature flags to limit blast radius, and treat the error budget as an input to release decisions, reading availability next to deployment measures (see topic 2.8, DORA metrics).

### Service and operations teams

Operations teams own the probes, the incident records, and the rotations that produce the data. They should keep the definition and exclusion list current, record the impact start honestly, and review monitoring against real incidents. Availability belongs to the service and its rotation, never to one engineer on call (see topic 5.7, Toil and on-call metrics).

### Leadership and governance

Leaders set the incentives that decide whether availability data is candid. A review that asks "why did you lose a nine?" teaches teams to hide outages in the exclusions. Ask what the team learned and what investment would reduce outages, and do not request more nines than users will notice (see topic 8.4, Supplier and contract metrics, for supplier commitments).

### Customers and users

Users judge availability by whether they could do what they came to do. They tolerate a signposted maintenance window far better than a surprise. Give them a status page with honest start and end times, and read their feedback beside the numbers (see topic 6.2, Experience level agreements).

## In practice: a service management example

A mid-sized online retailer runs a storefront, a checkout service, and an order-tracking service. The numbers in this example are illustrative.

The checkout team reports 99.95 percent time-based availability for the month, which allows 21.6 minutes of unplanned downtime, and the dashboard shows 99.96 percent. The head of customer support is uneasy, because support contacts about failed payments rose during the same month. She asks the team to review the measurement.

The team finds three issues. The probe checks a "checkout is reachable" page every five minutes, not the full payment journey. Request-based data shows that during two evenings a payment provider timeout caused about 4 percent of payment attempts to fail for roughly 50 minutes each, and the probe never noticed because the page itself loaded. And a database migration that overran its approved window by 18 minutes had been recorded entirely as planned maintenance.

The team makes four changes. It adds a synthetic probe for the full payment journey from two locations at a one-minute interval. It adds request-based and user-weighted figures, using sessions that reached the payment step. It reclassifies the overrun minutes as unplanned. And it adds the planned downtime share and measurement coverage to the report.

On the corrected basis, the month shows time-based availability of 99.93 percent, request-based availability of 99.90 percent, and user-weighted availability of 99.84 percent, because the failures fell in the evening peak. All three miss the 99.95 percent target, which is uncomfortable. The team and the head of support agree that the earlier number was too generous. They write the corrected definition into the metric register and put the error budget policy into effect: for the next month, risky changes to checkout wait until the budget recovers, and the team opens a problem record for the payment provider timeouts (see topic 4.1, Problem management metrics).

The gaming risk they catch is relabelling. A manager suggested calling the overrun "extended maintenance" to protect the target. The planned downtime share, with its rule that overruns become unplanned, made the reclassification visible, and the team kept the honest figure.

## Agile, AI, automation, and analytics

### Agile

Define availability from the user's side and review the definition with stakeholders when the service changes. The caution is that a high number of nines on a component says little about the journey a user takes.

### AI

AI components can fail softly, by being slow, wrong, or unavailable only for some inputs, which plain uptime misses. Add a quality-adjusted view, such as the share of requests with a correct, timely answer, and pair it with user-reported problems. The caution is that counting a degraded AI answer as up flatters the number.

### Automation

Collect request outcomes from real traffic and synthetic probes automatically, and measure the probes for coverage. The caution is that a probe that checks a health page can say up while users cannot sign in.

### Analytics

Report time-based and request-based availability with degradation share, and state the measurement window. The decision informed is where reliability work will help users. The caution is that rare outages make annual percentages unstable, so show events, not just percentages.

## Sector lens

**Startup.** A small team often has one service and little monitoring. Start with one probe on the most important journey and a one-paragraph definition of "up". Choose a modest target, convert it to minutes, and avoid promising nines the team cannot yet measure.

**Small business.** The service is often hosted tools plus a few custom systems, and availability depends on suppliers. Record supplier outages as they affect your users, compare with what the supplier reports, and keep the set to two or three figures.

**Enterprise.** Many services, many teams, and many suppliers multiply the definitions in use. Publish one standard definition of availability with a short list of allowed variations, keep the metric register current, and make sure the planned and unplanned rules are the same across teams before comparing them. Prefer service-level reporting over team league tables, since services differ in load and criticality.

**Government and public sector.** Public services often have statutory service hours, published commitments, and contracts with formal credits. Report against them as written, show the user-weighted view beside them, and be open about exclusions (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The main costs are the time to write the service definition and register, monitoring that probes critical journeys from outside the failure domain, and the effort to join incident, change, and monitoring data so planned and unplanned downtime can be separated. Real user monitoring adds tooling and storage costs. Most organizations already own some of the data, so the first investment is usually in definitions.

The return comes from better decisions and fewer disputes. Teams that measure from the user's side find failures that health checks miss, agreements are easier to manage with one definition, and the cost of an extra nine can be set against its value to users. Describe the benefit as a pattern, such as fewer surprises at agreement reviews, and measure your own baselines, such as the gap between the headline and user-weighted figures. Do not borrow figures from other organizations.

## Anti-patterns and pitfalls

- **Quoting the nines without the minutes.** A target nobody can translate into allowed downtime cannot guide decisions. Show the minutes allowed and used beside every target.
- **Measuring the server instead of the journey.** A green health check can sit beside a broken sign-in. Probe critical journeys end to end and compare with real user data.
- **Letting the planned label absorb failures.** A planned category that is easy to claim empties the unplanned figure. Require approval before the outage, communicate it, and reclassify overruns.
- **Averaging across services and hours.** A blended figure hides the critical service and the busy hour. Report per service, and add a user-weighted view.
- **Promising more nines than the dependencies allow.** Components in series cannot exceed their combined availability. Multiply before you promise, and ask suppliers for their measured figures.
- **Treating 100 percent as the aim.** The cost climbs steeply and change slows. Choose the target from user need and use the error budget.
- **Ranking teams or people by their nines.** Services differ in load and criticality, and a league table teaches teams to hide outages. Show each service its own trend and compare it with its own target.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definition and clocks | "Up" means whatever the monitoring tool shows; outage times are estimated afterward | Written for some services; probe and incident times disagree | One written definition per service with journeys, hours, exclusions, and clock rules | Definitions reviewed on a cadence; changes logged and marked on charts | Definitions aligned with suppliers and customers and revised when they stop informing decisions |
| Measurement quality | Manual reports or a single health check | Probes for some services; request data in some logs | Outside-in probes on critical journeys plus request-based figures from a standard source | User-weighted figures from real user data; coverage tracked and sampled | Measurements shared across teams and suppliers and reconciled automatically |
| Planned and unplanned handling | No distinction; maintenance counted ad hoc | Planned label used by some teams, rules differ | One rule: approved before the outage and communicated, overruns reclassified | Planned share trended with a goal to reduce it | Zero-downtime change is the default, and planned downtime is rare and negotiated |
| Use in decisions | Reported after a complaint | Reviewed monthly by operations | Targets shown in minutes | Error budget policy changes work, with funding | Availability, cost, and experience traded off jointly | 

## Checklist

- [ ] Each service has a written definition of "available" naming its critical user journeys.
- [ ] The measurement window, hours in scope, and time zone are stated for every figure.
- [ ] The exclusion list is written down, reviewed, and shown beside the headline.
- [ ] Planned downtime requires an approved change and advance notice; overruns count as unplanned.
- [ ] Probes run from outside the failure domain, at a stated interval, on critical journeys.
- [ ] A request-based or user-weighted figure sits beside the time-based figure.
- [ ] Each target is shown as minutes allowed and minutes used in the current window.
- [ ] Outage count and duration percentiles are reported, and not just the total.
- [ ] Dependency availability is multiplied through before a target is promised.
- [ ] Definition changes are logged and marked on the trend chart.
- [ ] Availability is reported per service and never per person.

## AI prompts

**Draft a service availability definition.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Convert a target into allowed downtime and test it.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Review a month of outages for classification problems.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topics and the paired guardrail for an availability measure you are about to report.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revision to this topic keeps every metric paired with a gaming vector and guardrail.

## Key takeaways

- Availability is only meaningful once "up", the service boundary, the hours, and the exclusions are written down from the user's side.
- Request-based and user-weighted measures describe distributed services and uneven load better than minutes of total failure.
- Report planned and unplanned downtime together, and make the planned label hard to earn.
- Convert every target to minutes, and multiply dependencies in series before promising a number of nines.
- Each extra nine costs more than the last, so choose the target from what users need and use the error budget to act on it.
- Describe services and rotations, never people, and test every headline figure against the experience of users.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
