# Introduction to Part 2: Flow and Continuous Delivery Metrics

**Flow metrics show how work actually moves through a team that builds and runs services, so that you can find where it waits, decide what to change, and check that the change helped.**

Agile teams that also run services handle a mixed stream of work: planned features, defect fixes, service requests, and interruptions from live incidents. All of it competes for the same people and the same attention. Flow metrics describe that stream from the work item's point of view. They ask how many items are in progress, how long they take, how old they are, and how many finish in a period.

This view is useful because most delay is waiting rather than working. A request can sit in a queue, in a review, or in an approval for far longer than anyone spends on it. Measuring the clock on the item, instead of the effort of the person, exposes those gaps and gives the team a shared, factual starting point for improvement. It also fits both worlds. Agile practice talks about cycle time and throughput, and ITIL practice talks about value streams and service performance. Both are describing the same movement of work.

Flow data is skewed, and it is easy to misuse. Time measures should be read as distributions with percentiles, as set out in Part 1 (see topic 1.6, Statistical literacy for service metrics). Every metric in this part describes a team, a service, or a system. None of them ranks an individual, and none of them is a target to be pushed up or down in isolation (see topic 1.2, Goodhart's law and the psychology of metrics).

The four lenses of this book show up here in a particular way. Continuous delivery and stakeholder involvement set the rhythm of the work being measured. AI assistance can raise the count of finished-looking items without shortening the time they wait, so flow measures are paired with rework and quality signals. Automation supplies the event timestamps and should itself be measured for failures. Analytics turns the clocks into ranges and trends, with the number of items behind each one shown.

## Topics in this part

- **2.1 Flow measures**: work in progress, throughput, work item age, and cycle time, applied to project and service work.
- **2.2 Lead time, cycle time, and flow efficiency**: definitions that hold up across teams, where the clocks start and stop, and how to expose waiting time.
- **2.3 Work in process and queueing**: Little's law, utilization and queue growth, work in process (WIP) limits, and why a fully busy service team is a slow one.
- **2.4 Value stream metrics**: value stream mapping measures, process time, wait time, percent complete and accurate, and ITIL value streams.
- **2.5 Delivery forecasting and planning metrics**: story points and velocity, delivery goal success, forecast accuracy, and why velocity must never be compared across teams.
- **2.6 Backlog and refinement metrics**: backlog size and age, ready work, refinement coverage, and how product and service backlogs differ.
- **2.7 Pull request and code review metrics**: review time, pull request size, and rework as signals of flow, with the gaming vectors that follow.
- **2.8 DORA metrics**: change lead time, deployment frequency, failed deployment recovery time, change fail rate, and deployment rework rate, with the research's own cautions.
- **2.9 Operational work and unplanned work**: planned versus unplanned work, interrupt load, expedite lanes, and capacity allocation between change and run work.

## How these topics interrelate

The first four topics form the core of the part. Topic 2.1 (see topic 2.1, Flow measures) defines the basic quantities: work in progress, throughput, work item age, and cycle time. Topic 2.2 (see topic 2.2, Lead time, cycle time, and flow efficiency) fixes where the clocks start and stop, which any comparison depends on. Topic 2.3 (see topic 2.3, Work in process and queueing) explains why those quantities move together, and topic 2.4 (see topic 2.4, Value stream metrics) widens the view from one team's board to the whole path from request to value.

Several topics act as guardrails for others. Throughput and speed measures can be inflated by splitting work into smaller pieces or by rushing it, so they should be read alongside rework and quality signals. Pull request size and review time in topic 2.7 (see topic 2.7, Pull request and code review metrics) are early indicators of delay and rework. The delivery outcomes in topic 2.8 (see topic 2.8, DORA metrics) pair speed measures with stability measures, so that faster delivery is not bought with more failure. Velocity in topic 2.5 (see topic 2.5, Delivery forecasting and planning metrics) is a planning aid for one team, and it should be checked against forecast accuracy and the flow measures rather than read as output.

The remaining topics describe the conditions under which work flows. A backlog that is long, old, or poorly refined feeds poor flow, which is the concern of topic 2.6 (see topic 2.6, Backlog and refinement metrics). Unplanned work and interruptions, covered in topic 2.9 (see topic 2.9, Operational work and unplanned work), are often the hidden reason cycle times stretch and forecasts miss. Reading them next to work in process and queueing in topic 2.3 explains why a team with no spare capacity cannot absorb an incident without delaying everything else.

Later parts build on these measures. Incident, change, and release metrics in Parts 3 and 4 use the same clocks and the same distribution thinking, applied to support and change work. Taken together, the flow view lets agile and ITIL teams talk about one shared system of work.
