# Introduction to Part 5: Service Level, Availability, and Reliability Metrics

**Service level, availability, and reliability metrics describe what users can count on from a service, so that teams can promise only what they can deliver, notice early when they are drifting from the promise, and spend their effort where users would feel it.**

Parts 2 to 4 looked at how work moves: how fast it flows, how incidents are handled, and how change is made safely. This part turns to the result that users actually experience. A service that ships often and resolves incidents quickly can still be slow, unavailable at the wrong moments, or unpredictable. Users judge the service by whether it works when they need it, not by how the team organises itself.

Two traditions meet here. ITIL practice has long used service level agreements, targets, and reporting to set expectations between a provider and its customers. Site reliability engineering practice, set out in Google's *Site Reliability Engineering* books, uses service level indicators, objectives, and error budgets to turn reliability into an explicit engineering trade-off against the pace of change. The two are compatible. Both start from what users care about, both express it as a measurable target, and both need an honest account of how often the target was met.

A recurring risk runs through the whole part. A reliability number is easy to make look good: by choosing a convenient indicator, by excluding awkward periods, or by measuring the component rather than the user's journey. For that reason every topic here names the clocks and boundaries of its measures, reads time and latency as distributions with percentiles (see topic 1.6, Statistical literacy for service metrics), and pairs each measure with a guardrail (see topic 1.2, Goodhart's law and the psychology of metrics). Every metric describes a service, a team, or a system. None of them ranks an individual, and the on-call measures in particular exist to protect people, not to score them.

The four lenses apply to reliability in particular ways. Continuous delivery and error budgets make risk a shared, spendable decision. AI components can fail softly, by being slow or wrong rather than down, so availability for AI paths needs a quality measure beside it. Automation supplies telemetry and alerts, and must itself be measured on missed and false alerts. Analytics should show the window and the number of events behind each figure.

## Topics in this part

- **5.1 SLA, OLA, and XLA metrics**: service level agreement, operational level agreement, and experience level agreement measures, and how watermelon reporting hides trouble behind green dashboards and how to avoid it.
- **5.2 SLIs, SLOs, and error budgets**: service level indicators and objectives, error budget policy, burn rate, and choosing indicators from what users care about.
- **5.3 Availability metrics**: uptime and downtime calculation, user-weighted availability, planned versus unplanned outage, and the arithmetic of nines.
- **5.4 Capacity and performance metrics**: utilisation, saturation, latency percentiles, headroom, and forecasting demand.
- **5.5 Monitoring and alert quality metrics**: alert volume, actionable alert rate, false positives, detection coverage, and alert fatigue.
- **5.6 Service continuity metrics**: recovery time and recovery point objectives met in tests, test frequency, game day findings, and plan currency.
- **5.7 Toil and on-call metrics**: pages per shift, out-of-hours load, toil share of time, and sustainable rotation measures.

## How these topics interrelate

The first three topics form the core of the part, because they define the promise and how it is measured. Topic 5.1 (see topic 5.1, SLA, OLA, and XLA metrics) covers the agreements between providers, internal teams, and customers, and the reporting practices that make those agreements honest or misleading. Topic 5.2 (see topic 5.2, SLIs, SLOs, and error budgets) supplies the engineering counterpart: indicators drawn from user experience, objectives set against them, and an error budget that makes the remaining room for risk visible. Topic 5.3 (see topic 5.3, Availability metrics) fixes the arithmetic that both rely on, including what counts as downtime and which users are affected.

Capacity and performance sit close behind availability. A service that is technically up but saturated or slow fails its users in a way that a simple uptime figure misses. Topic 5.4 (see topic 5.4, Capacity and performance metrics) supplies the latency percentiles and headroom measures that complement availability, and its demand forecasts give early warning before an objective is threatened.

Detection and recovery determine how much of a failure users experience. Topic 5.5 (see topic 5.5, Monitoring and alert quality metrics) asks whether the team learns about problems quickly and from signals worth acting on, which links directly to detection and restoration times in Part 3. Topic 5.6 (see topic 5.6, Service continuity metrics) asks whether the team can recover within stated limits when something larger goes wrong, and tests that claim rather than assuming it.

Topic 5.7 (see topic 5.7, Toil and on-call metrics) acts as the human guardrail for the rest. Tight objectives, noisy alerts, and frequent incidents all land on the people who carry the pager. Pages per shift and toil share reveal when reliability is being bought with unsustainable effort, and they connect back to the unplanned work measures in Part 2. Alert quality in topic 5.5 and on-call load in topic 5.7 should be read as a pair, since poor alerts are a common cause of heavy rotations.

Finally, the error budget in topic 5.2 links this part to change in Part 4. When the budget is healthy, a team can release more freely. When it is spent, change and reliability work should be rebalanced. Part 6 then checks whether meeting the targets in this part has left users better off, which is the question a green report cannot answer on its own.
