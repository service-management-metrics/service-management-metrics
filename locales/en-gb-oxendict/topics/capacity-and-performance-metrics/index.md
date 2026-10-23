# Capacity and performance metrics

**Measure how full a service is, how slow its slowest requests are, and how much room remains before users notice, then forecast demand with ranges so capacity arrives before the need, not after the complaint.**

## Overview and motivation

Availability tells you whether a service answers. Capacity and performance tell you how well it answers, and how long it will keep doing so as demand grows. A checkout page that responds in eight seconds is "up" by most availability definitions and "broken" by every customer's definition. A database at 95 percent of its storage is healthy today and an outage next month. This topic covers the measures that close those gaps.

[Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning) is the practice of determining the resources a service needs to meet changing demand. In ITIL 4 this sits in the capacity and performance management practice, which aims to ensure that services achieve agreed and expected performance and satisfy current and future demand cost-effectively. The practice describes this at three levels: the business (what the organization will ask of its services), the service (how a service behaves under load), and the component (how each server, database, network link, or queue behaves). The measures in this topic mostly work at the service and component levels, and they need input from the business level to forecast anything.

[Site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) treats latency, traffic, errors, and saturation as the four signals worth watching on any user-facing system, and it ties performance targets to service level objectives (see topic 5.2, SLIs, SLOs, and error budgets). Agile teams meet capacity as a delivery question: can the next release carry the expected load, and who owns the answer? Treating performance as an acceptance criterion, checked in the pipeline, moves the conversation earlier.

Several terms recur in this topic. **Utilization** is the share of a resource's capacity that is in use over an interval, for example the share of processor time busy. **Saturation** is the amount of work waiting because a resource is fully used, for example the length of a run queue or a request backlog. Utilization says how busy a resource is. Saturation says whether work is queuing for it, and queues are what users feel. **[Latency](https://en.wikipedia.org/wiki/Latency_(engineering))** is the time between a request and its response. **[Throughput](https://en.wikipedia.org/wiki/Throughput)** is the rate at which a service completes work, for example requests per second. **Headroom** is the gap between current peak load and the load at which the service stops meeting its objectives. **Demand** is the work users and the business ask of the service, which is not the same as the work it completes: a service that is overloaded completes less than was asked.

One property of waiting lines explains why these measures behave as they do. [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory) shows that, for a service with random arrivals, waiting time grows slowly while utilization is moderate and then rises steeply as utilization approaches full use. [Little's law](https://en.wikipedia.org/wiki/Little%27s_law) relates the average number of requests in a system to the arrival rate and the average time each spends there. A resource at high average utilization is close to a cliff. The exact shape of the curve depends on the service, so find it by testing your own system with [load testing](https://en.wikipedia.org/wiki/Load_testing) instead of borrowing a threshold from a general article.

Latency needs particular care because the average hides the experience that matters. A [percentile](https://en.wikipedia.org/wiki/Percentile) states the value below which a given share of observations falls: the 95th percentile (p95) is the latency that 95 percent of requests beat. [Tail latency](https://en.wikipedia.org/wiki/Tail_latency) tends to dominate in systems where one user action fans out into many internal calls. Report percentiles instead of the mean alone (see topic 1.6, Statistical literacy for service metrics, and topic 3.3, Incident response and resolution time, which makes the same argument for resolution time).

Finally, capacity depends on [forecasting](https://en.wikipedia.org/wiki/Forecasting) demand, and demand has patterns: daily cycles, weekly cycles, and [seasonality](https://en.wikipedia.org/wiki/Seasonality) tied to the calendar, campaigns, and product launches. [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling) changes how this feels, since cloud platforms can add resources in minutes, but it does not remove the topic. Autoscaling has limits, a lag, a cost, and dependencies that do not scale, such as a database or a third-party interface. The cost side belongs with FinOps (see topic 7.6, FinOps and cloud cost metrics).

Neighbouring topics cover availability arithmetic (see topic 5.3, Availability metrics), alert design (see topic 5.5, Monitoring and alert quality metrics), and rotation load (see topic 5.7, Toil and on-call metrics). Here the subject is the service's own resources and response times.

## Key principles

- **Measure saturation as well as utilization.** Utilization shows how busy a resource is, and saturation shows whether work is waiting. Users experience the waiting.
- **Report latency as a distribution.** Use percentiles per user-facing operation, and keep the slow tail visible. An average of a skewed distribution describes almost nobody.
- **Tie targets to user experience.** A threshold is meaningful when it traces to something a user or the business cares about, not to what a tool happens to chart.
- **Plan with ranges and review them.** A forecast is a range with stated assumptions. Compare it with what happened and learn from the error.
- **Know your limits by testing.** Capacity is a hypothesis until a realistic load test confirms it. Repeat the test after changes that matter.
- **Describe systems, never people.** These measures belong to services, components, and teams. They are never a scorecard for individuals.
- **Weigh cost against risk.** Spare capacity costs money, and missing capacity costs customers. Make the trade-off visible so that it is chosen, not drifted into.

## Metric definitions

The table lists seven measures. The clocks and boundaries are stated in each formula. Percentile-based measures use a fixed window, stated in the register, and are computed from raw observations or from histograms, never as an average of averages.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Resource utilization | Share of a resource's capacity in use over an interval, reported as a high percentile of the interval series | busy capacity / total capacity, per interval of 1 to 5 minutes; report the median and the 95th percentile over the review window; maintenance windows with the resource drained are excluded | percent | Infrastructure monitoring and cloud platform metrics | Capacity and performance management; monitoring and event management | Operational acceptance criteria in the definition of done; SRE resource signals | Weekly |
| Saturation | Amount of work waiting for a resource that is fully used | queue length, run queue, pending requests, or throttled requests, per interval; report the 95th percentile and the share of intervals with any waiting; intervals with no demand are excluded | count, or percent of intervals | Application and infrastructure telemetry | Capacity and performance management; monitoring and event management | SRE saturation signal; work in process limit on a service queue | Weekly |
| Latency percentile | Time taken to answer a request for one user-facing operation, reported at the median, p95, and p99 | response time from request received at the edge to last byte sent, per successful request; failed requests are reported as errors, not as fast responses; measure over a rolling window | milliseconds | Load balancer or gateway logs, tracing, real user monitoring | Service level management; capacity and performance management | SRE latency indicator and service level objective | Continuous, reviewed weekly |
| Headroom | Remaining load a service can carry before it breaches its objectives | (tested or modelled breaking load - current peak load) / current peak load; peak is the busiest hour in the window; the breaking load is the load at which the latency objective is first breached in a test, not the hardware maximum | percent, or days at current growth | Load test results and traffic telemetry | Capacity and performance management; service level management | Non-functional requirements and performance tests in the pipeline | Monthly, and before major launches |
| Forecast error | Difference between forecast demand and actual demand for a period | absolute (forecast peak - actual peak) / actual peak, for a stated horizon; the forecast is frozen at the start of the horizon and not revised afterwards; unforecast one-off events are listed, not removed | percent | Forecast register and traffic telemetry | Capacity and performance management; demand-related planning in service financial management | Release and roadmap forecasting; SRE demand forecasting | Quarterly |
| Capacity lead time | Time needed to bring new capacity into service once the need is accepted | clock starts when the capacity request is approved, and stops when the capacity carries production traffic; report the median and the 85th percentile; requests cancelled are excluded | days | Request records in the ITSM tool, change records, provisioning logs | Capacity and performance management; service request management; change enablement | Lead time for a platform backlog item (see topic 2.2, Lead time, cycle time, and flow efficiency) | Quarterly |
| Performance test coverage | Share of critical services with a recent, realistic load test | critical services with a passing load test less than a stated age old, on a representative environment and workload / critical services in the register; the age limit is written down | percent | Test results store and service register | Capacity and performance management; release management | Non-functional tests in the continuous delivery pipeline | Quarterly |

Together these answer four questions: how full is it, how slow is it, how much room is left, and how fast can we respond when the answer changes.

## Recommendations

### Start with the user, then the resource

**1. Choose the few operations users care about, and measure those.** A service has hundreds of endpoints and a handful of journeys that matter, such as logging in, searching, paying, and downloading a statement. Agree these with product owners and customers, and set a latency expectation for each. These link naturally to service level indicators (see topic 5.2, SLIs, SLOs, and error budgets).

**2. Pair every resource chart with a saturation chart.** Showing processor use alone invites the false comfort of "it only reached 70 percent." Add the queue, the waiting requests, or the throttling count beside it. When saturation appears before utilization looks alarming, you have found the real constraint, and that constraint is often not the resource you were watching, such as a connection pool, a thread limit, or a rate limit on a partner interface.

**3. Prefer the busy tail to the quiet average.** Averages over a day blend the dead of night with the lunchtime peak. Look at the busiest period and record the date and cause of the worst intervals. The planning question is how the service behaves at its worst expected hour.

### Report latency honestly

**4. Publish percentiles per operation, and name the window.** State the median, p95, and p99 for each important operation over a rolling window, and say which requests are included. Never average percentiles across servers or across operations, because the result does not correspond to any real user's experience; combine histograms or the raw observations instead. If the sample is small, say so, since a p99 from a few hundred requests is a noisy number (see topic 1.6, Statistical literacy for service metrics).

**5. Measure where the user is, as well as where the server is.** Server-side timings leave out the network, the browser, and the device. Add real user monitoring or synthetic checks so you can tell a slow back end from a slow last mile.

**6. Count errors and timeouts with latency, not instead of it.** A service that fails fast looks quick in a latency chart, and a service that times out looks slow for the wrong reason. Report the error rate with the latency percentile so that a fast failure cannot flatter the result.

### Find the limits, then leave room

**7. Test the breaking point on purpose.** Run load tests that replay a realistic mix of operations, ramp the load, and note where the latency objective is first breached and which resource saturates first. Test on an environment that resembles production in the ways that matter, and write down the ways it does not. A failed test in a safe place is the cheapest incident you will have (see topic 4.5, Release and deployment metrics, for putting checks in the pipeline).

**8. Set headroom as a policy and review it as a trade-off.** Decide how much margin a service keeps over its expected peak, and why. Critical customer-facing services justify more, internal batch services less. The figure is a business choice about cost and risk, so record the reasoning and revisit it when the cost of an outage or the price of capacity changes. Do not copy a number from another organization.

### Forecast demand with the people who know it

**9. Ask the business what is coming, and write the forecast down.** Marketing campaigns, new customers, regulatory deadlines, and seasonal events change demand long before traffic shows it. Keep a short forecast register with the date, the assumptions, the range, the owner, and the source of each input. A forecast given as a range, such as a low, expected, and high case, is more honest than a single number and more useful for deciding how much to buy.

**10. Score the forecast and use the error to improve it.** After each period, compare the frozen forecast with what happened, using forecast error, and list the causes of large misses. Common causes are an unannounced campaign, a change in user behaviour, and a dependency that moved. The aim is not a zero error, which is not achievable, but to learn which inputs are reliable, and to widen the range where they are not.

### Make capacity easy to add

**11. Shorten capacity lead time before you chase accuracy.** If new capacity takes weeks to arrive, you must forecast far ahead and carry more spare. If it takes minutes, you can run closer to need. Look at the steps between "approved" and "carrying traffic," such as procurement, approval, provisioning, configuration, and testing, and remove the longest waits first (see topic 4.3, Change enablement metrics). In ITIL terms this is a capacity strategy choice, leading demand, matching it, or lagging it; choose consciously, per service.

**12. Treat autoscaling as a system to measure.** Record how often scaling triggers, how long new capacity takes to become useful, how often it hits its configured maximum, and what it costs. An autoscaler pinned at its limit is a capacity plan that has already failed. Review these with the cost view so that performance and spend are discussed together (see topic 7.5, Service cost and unit economics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Resource utilization | Averaging over long intervals to hide peaks; counting idle reserved capacity as "used"; reporting only the quietest resources | Peak-hour 95th percentile beside the average; saturation measure; list of resources in scope reviewed against the service map |
| Saturation | Raising queue limits so nothing is reported as rejected or throttled; moving the wait into another queue that is not measured | Latency percentile and error rate for the same operation; end-to-end queue time, not one stage; review of all queues in the path |
| Latency percentile | Reporting the mean or the median only; dropping slow or failed requests from the sample; measuring from a fast internal location; excluding "outliers" | p95 and p99 always shown; error and timeout rate shown beside latency; real user monitoring compared with server-side timing; raw sample size shown |
| Headroom | Choosing a gentle test workload; testing a larger environment than production; defining the breaking point as the hardware maximum | Test workload reviewed against production traffic shape; written list of differences between test and production; headroom retested after relevant changes |
| Forecast error | Revising the forecast after the fact; setting very wide ranges so that every outcome is "in range"; removing months with surprises as "unforecast events" | Forecast frozen and dated in the register; range width reported with the error; every excluded event listed and reviewed |
| Capacity lead time | Starting the clock later by delaying approval records; closing requests when the order is placed instead of when capacity carries traffic; splitting requests | Clock defined from approval to carrying traffic; sample of closed requests compared with provisioning logs; count of requests reopened |
| Performance test coverage | Running a trivial test to claim coverage; shrinking the list of critical services; keeping an old passing test on the books | Test age and workload realism recorded; critical service list reviewed against the service catalogue and incident history; failed tests reported as well as passes |

A healthy reading shows utilization with visible daily cycles and headroom, saturation that appears rarely and briefly, latency percentiles that are stable or improving at the busiest hours, and a forecast error that is known and slowly shrinking. The healthy sign is that surprises are discussed with their causes. Perfect numbers should raise suspicion, because they usually mean the measurement is gentle.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Run with generous headroom | Absorbs surprises; protects latency and availability | Higher cost; hides inefficiency and weak forecasting |
| Run lean with fast autoscaling | Lower cost; capacity follows demand | Depends on scaling speed and limits; dependencies may not scale; harder to reason about in an incident |
| Percentile latency targets | Reflect what slow requests feel like; resist averaging tricks | Need more data and larger samples; noisy at high percentiles for low-traffic services |
| Mean or median latency only | Simple and stable | Hides the tail that drives complaints and churn |
| Synthetic load tests | Controlled, repeatable, safe | Only as realistic as the workload model and the environment |
| Production telemetry as the basis | Reflects real behaviour and real mix | Reveals limits only after they are hit; cannot probe beyond current demand |
| Detailed forecasting models | Capture seasonality and growth | Require data and skill; a false sense of precision when inputs are weak |
| Simple ranges agreed with the business | Easy to explain and update; focuses on assumptions | Coarser; depends on honest input from the business |

Choose the lightest method that supports the decision. For most services a weekly look at peak-hour utilization, saturation, and latency percentiles, a load test before major changes, and a quarterly forecast review are enough. Add modelling where the cost of being wrong is large.

## Questions to discuss with your team

**1. Which three user journeys matter most, and what response time do users expect for each?**
Ask the group to name the journeys, then compare with what the dashboards chart. The facilitator should push for an expectation traceable to a user or customer, not an engineering preference. 

**2. Where is our service close to a cliff, and how do we know?**
Look for resources such as connection pools, thread limits, or a partner rate limit. Ask when each was last tested to its breaking point. If nobody knows, that is the first piece of work.

**3. How do we report latency today, and what would the slowest one percent of users say?**
Display the mean, the median, p95, and p99 for one operation side by side and discuss the gap. Ask which requests are excluded and why, and whether failed requests are counted. 

**4. How much headroom do we keep, who chose it, and when did we last revisit the choice?**
Discuss the cost of the margin and the cost of an outage on the busiest day. Agree a review date and the evidence that would change the margin.

**5. How good were our last three demand forecasts, and what did we learn?**
Compare the dated forecasts with the actuals and the causes of large misses. Ask what the business knew that operations did not receive. Decide on one input to add to the forecast register, such as the marketing calendar or a launch schedule.

**6. If we needed double the capacity next month, what would stop us?**
List every step from request to production traffic and mark where it waits. Include procurement, approvals, licensing, and dependencies that do not scale. The facilitator should look for the longest wait that is not technical, since it is often an approval or a contract. Agree one step to shorten and measure the effect through capacity lead time.

## Four perspectives

### Product and delivery teams

Include a performance expectation in the acceptance criteria of features that touch busy paths, run a load test in the pipeline where practical, and tell operations about launches early. Watch for the habit of treating performance as a later "hardening" task, which turns into unplanned work (see topic 2.9, Operational work and unplanned work).

### Service and operations teams

Operations teams own the telemetry, the capacity plan, and the response when a limit is reached. They need saturation and tail latency on the dashboards they actually use, a forecast register shared with the business, and test results that are trusted. They should record each capacity-related incident with its cause (see topic 4.1, Problem management metrics, and topic 3.4, Major incident metrics).

### Leadership and governance

Leaders decide how much risk and cost the organization accepts, and the headroom policy is where that decision shows up. Ask for latency percentiles and headroom per critical service, with the forecast error beside them, and treat requests for capacity as investment decisions that carry evidence. Governance bodies should resist one organization-wide utilization target, which pushes every service to the same point on the cliff.

### Customers and users

Customers feel slowness as unreliability, long before any availability number changes. State performance in terms of percentiles at stated load, and share how the service handles peak periods (see topic 5.1, SLA, OLA, and XLA metrics, and topic 6.2, Experience level agreements).

## In practice: a service management example

A mid-sized online retailer runs a storefront, a payment service, and an order service, each owned by a product team, with a platform team providing shared infrastructure. All numbers in this example are illustrative.

The platform team's weekly review shows storefront search with a median latency of 180 milliseconds and a p95 of 420 milliseconds, both within objective, and processor use at a peak-hour 95th percentile of 58 percent. Three weeks before a planned sale, a support lead reports that customers say the site "crawls" during evening campaigns. The dashboard is green.

The team looks at the p99 for search at the busiest hour of the previous sale and finds 3.1 seconds, against a p99 objective of 1.5 seconds. Saturation tells the rest of the story: the connection pool to the product database shows waiting requests in 14 percent of one-minute intervals during the peak, while processor use never exceeded 60 percent. The constraint was never the processor. It was a pool limit set when traffic was a third of today's.

The product owner and the platform lead run a load test at 1.5 times last year's peak, using the production mix of operations. The test shows the p99 objective is breached at 1.15 times last year's peak, so headroom is 15 percent against a policy of 40 percent for customer-facing services. The marketing calendar suggests demand 1.6 times last year's peak on the opening day. The old forecast, frozen in the register, had put the range at 1.2 to 1.4, and the error against last year's sale was 22 percent, mostly from an unannounced email campaign.

The decision, recorded in the decision log, has four parts. First, raise the pool limit and add read replicas, and retest. Second, add a sale-readiness checklist to the release process so that campaigns reach the forecast register at least six weeks ahead. Third, add p99 and pool saturation to the weekly review. Fourth, agree with finance on the cost of the extra capacity for the sale window, using scheduled scaling instead of year-round spare.

After the changes, a second test shows the p99 objective holding to 1.8 times last year's peak. The gaming risk surfaced during the review. A contractor had proposed a "quick win" of excluding requests slower than 5 seconds from the latency report, on the grounds that they were outliers. The team refused: the excluded requests were exactly the customers who complained. The guardrail was to keep error and timeout rates beside every latency percentile and to record the sample size. During the sale the p99 peaks at 1.2 seconds, pool saturation stays below 1 percent of intervals, and the forecast error is 9 percent, recorded in the register with the reason for the remaining miss.

## Agile, AI, automation, and analytics

### Agile

Plan capacity in short cycles with product stakeholders, using forecasts as ranges that update with data. The caution is that over-provisioning to protect a headline number wastes money.

### AI

AI workloads, such as model inference, have variable and sometimes costly demand, and AI features can change usage patterns fast. Track latency percentiles and cost per request for AI paths, and pair them with answer quality. The caution is that tuning for speed can lower answer quality, so measure both.

### Automation

Collect utilization and latency automatically and automate scaling within limits. Measure the scaling on oscillation and on the cost it adds. The caution is that autoscaling hides saturation until limits are hit, so track headroom, not just current load.

### Analytics

Show percentile latency and headroom with forecast ranges and the forecast error history. The decision informed is when to add capacity. The caution is that forecasts from short history are fragile, so state the interval.

## Sector lens

**Startup.** Traffic is small and growth is uncertain, so cheap measures beat elaborate ones. Track latency percentiles for the two or three journeys that earn money, watch saturation on the database, and run a simple load test before launches. Set a spending alert so that a bug or a traffic spike does not become a bill.

**Small business.** Services are often hosted or bought, so capacity is a supplier matter. Ask the supplier for performance and capacity reports in writing, learn what the contract says about peak periods, and watch the customer's view with a few synthetic checks. Track headroom on the one system the business cannot do without.

**Enterprise.** Many services share infrastructure, so capacity problems appear in the wrong place. Invest in a service map linking services to the components they use, a shared forecast process with the business units, and common definitions of latency percentiles across teams. Set headroom policy by service criticality.

**Government and public sector.** Demand is shaped by deadlines set in law, such as tax filing dates, benefit claims, and elections, and failure on those dates is public. Forecasts should use the statutory calendar, and capacity for the peak may need to be contracted months ahead. Procurement lead times lengthen capacity lead time, so measure them and plan around them. Public reports of service performance should state the percentile and the load conditions (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost has four parts. The first is instrumentation: telemetry and its storage. The second is testing: a representative environment and workload models that need maintaining. The third is the planning routine: keeping the forecast register and reviewing error each quarter. The fourth is the spare capacity itself, which is often the largest cost and the one most worth making explicit.

The return comes from fewer capacity-related incidents, better decisions about when to buy and when not to, and avoided spending on capacity that data shows is unnecessary. Do not promise a percentage saving in advance. Instead, measure your own pattern: the number of incidents with a capacity cause per quarter, the share of peaks that required emergency action, the spend on idle capacity relative to the agreed headroom policy, and the trend in forecast error. The Google SRE book treats reliability as an economic decision.

Total cost of ownership is dominated by people and the test environment. A small team can begin with existing monitoring, a weekly review, and one load test for the most important journey.

## Anti-patterns and pitfalls

- **Reporting average utilization as the capacity story.** The average hides the peak and the cliff. Report the peak-hour high percentile and the saturation measure.
- **Mean latency on the executive dashboard.** The tail drives the complaints. Show p95 and p99, with error rates and the sample size.
- **Excluding "outliers" from latency.** The slowest requests are real users. Keep them, and investigate the cause instead of trimming the data.
- **Averaging percentiles across servers.** The result describes nobody. Combine histograms or raw observations before computing the percentile.
- **Capacity plans built from last year's traffic alone.** Demand depends on business events. Include the business calendar and review forecast error.
- **Testing in an environment unlike production.** A passing result gives false confidence. Record the differences and correct for them, or test in production safely.
- **Using capacity metrics to rank engineers or teams.** Utilization and latency describe systems. Review them in terms of service design and demand, and keep individuals out of the picture.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Measurement of utilization, saturation, and latency | Averages from a few servers; alerts on high processor use | Some teams chart latency percentiles and queues | Shared definitions: percentiles per key operation, saturation beside utilization, windows written down | Trended against objectives, paired with error rates, reviewed weekly | Definitions revised jointly with suppliers and customers; user-side and server-side views reconciled |
| Limits and headroom | Limits unknown until a failure | Occasional load tests before big launches | Load tests on critical services against a written headroom policy | Headroom tracked per service and retested after relevant changes | Headroom policy adjusted from cost, risk, and incident data across teams and suppliers |
| Forecasting | Ad hoc guesses at the time of a request | Individual teams keep forecasts in their heads or spreadsheets | A shared forecast register with ranges and owners, fed by the business calendar | Forecast error scored and reviewed, with causes of misses | Forecasts built with the business and suppliers; inputs improved routinely |
| Capacity delivery | Capacity added after an incident | Standard requests for common cases | Documented route from approval to production traffic, with capacity lead time measured | Longest waits targeted with funded improvement | Capacity added automatically within policy; scaling behaviour and cost reviewed together |

## Checklist

- [ ] The critical user journeys are named, each with a latency expectation agreed with its owner.
- [ ] Latency is reported as the median, p95, and p99 per operation, with window and sample size stated.
- [ ] Percentiles are computed from histograms or raw observations, never averaged across servers.
- [ ] Every utilization chart has a saturation chart beside it.
- [ ] Error and timeout rates are shown beside each latency percentile.
- [ ] Each critical service has a load test, with workload and environment differences written down.
- [ ] A headroom policy exists per service criticality, with the reasoning recorded.
- [ ] A dated forecast register holds ranges, assumptions, and owners, and is fed by the business calendar.
- [ ] Forecast error is reviewed each quarter, with causes of large misses recorded.
- [ ] Capacity lead time is measured from approval to carrying traffic.
- [ ] Autoscaling limits, lag, and cost are reviewed with the service owner.
- [ ] No capacity or performance measure is reported by individual.

## AI prompts

**Review a latency report for hidden distortion.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Draft a load test plan for a service.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Structure a demand forecast with the business.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Find the real constraint from symptoms.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that defines a capacity or performance measure, its clocks, and the guardrail that belongs beside it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an edited capacity or performance topic keeps every metric paired with a gaming vector and a guardrail.

## Key takeaways

- Measure saturation with utilization, because users feel the queue, not the percentage.
- Report latency as percentiles per operation, with error rates and sample size, and never average percentiles.
- Find limits by testing and set headroom as a recorded policy that weighs cost against risk.
- Forecast demand as ranges with the business, freeze the forecast, and learn from the error.
- Shorten capacity lead time and measure autoscaling, so that capacity follows need.
- Describe services and systems, never people, and treat perfect-looking numbers as a prompt to check the measurement.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
