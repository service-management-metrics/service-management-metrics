# Introduction to Part 3: Service Desk, Incident, and Request Metrics

**Service desk, incident, and request metrics show how well support and restoration work for the people who use your services, so that you can improve the experience of getting help rather than the appearance of a report.**

This is the part of the book where users meet the service. A person who cannot sign in, a customer whose order fails, and an employee who needs a new laptop all reach the organization through the service desk, a monitoring alert, a self-service portal, or a chat message. What happens next decides how they judge the whole service. Metrics in this area describe that experience from two sides: how quickly and how well the organization restores service when something breaks, and how reliably it fulfils the routine requests that people make.

In ITIL 4, incident management and service request management are separate practices, and the service desk is the point of contact for both. Agile teams that run what they build often handle the same work through on-call rotations and shared queues. Either way, the measurement problems are alike. Counts depend on how work is categorized, times depend on where the clocks start and stop, and averages hide the long delays that users remember. The statistical habits set out in Part 1 apply throughout (see topic 1.6, Statistical literacy for service metrics).

Support metrics are also unusually easy to game. A desk can close tickets faster by closing them early, and it can lower handling time by rushing callers. A team can reduce incident counts by reclassifying them as requests. Each topic in this part therefore names the behavior a metric rewards, the behavior it hides, and the guardrail that catches the difference (see topic 1.2, Goodhart's law and the psychology of metrics). Every measure here describes a team, a service, or a system. None of them ranks an individual agent or responder.

The four lenses matter most in this part, because AI triage, virtual agents, and automated fulfilment now handle part of the work that these measures count. A contact that never reached a person is only a success if the problem was solved, so each speed or volume measure here is paired with a recontact, reopen, or quality measure. Automated collection supplies the clocks, and analytics shows distributions with the number of cases behind them.

## Topics in this part

- **3.1 Service desk metrics**: contact volume, first contact resolution, abandonment, and handling time; what each rewards and what each hides.
- **3.2 Incident volume and priority**: incident counts, categories, impact and urgency, priority mix, repeat incidents, and normalizing volume against usage.
- **3.3 Incident response and resolution time**: time to detect, acknowledge, respond, and resolve; mean time measures and their statistical problems; percentiles instead.
- **3.4 Major incident metrics**: frequency, duration, customer impact, communication timeliness, and follow-through on actions.
- **3.5 Service request fulfilment metrics**: fulfilment time, backlog, request volume by catalog item, and automation share.
- **3.6 Knowledge management metrics**: article use, reuse in resolution, link rate, freshness, and Knowledge-Centered Service (KCS) indicators.
- **3.7 Self-service and automation metrics**: deflection, self-service success, automation coverage, and the shift-left effect on volume and complexity.

## How these topics interrelate

The first four topics follow the life of a disruption. Contacts arrive at the desk, which is the concern of topic 3.1 (see topic 3.1, Service desk metrics). Those that report a fault become incidents, which topic 3.2 (see topic 3.2, Incident volume and priority) counts and classifies by impact and urgency. Topic 3.3 (see topic 3.3, Incident response and resolution time) then measures how long each stage takes. The few incidents that cause serious harm get their own treatment in topic 3.4 (see topic 3.4, Major incident metrics), because their rarity and size make ordinary averages misleading.

Several of these measures need a partner to stay honest. Speed on the desk, such as handling time in topic 3.1, should be read beside first contact resolution and the repeat contacts it produces, so that fast calls are not mistaken for solved problems. Resolution time in topic 3.3 belongs with the repeat incidents in topic 3.2, since a quick restoration that fails again a week later has not helped the user. Priority mix in topic 3.2 gives context to every time measure: a rise in median resolution time may reflect a change in the kind of incidents arriving rather than a change in how well the team responds.

Requests and incidents should be measured side by side but never merged. Topic 3.5 (see topic 3.5, Service request fulfilment metrics) covers the predictable, repeatable work of fulfilment, where the aim is a steady and shrinking effort per request. Incident work is unpredictable, and its aim is fast and durable restoration. Combining them in one queue average hides the problems of both. The flow measures in Part 2 supply the shared clocks and the work in process limits that keep the two streams from starving each other (see topic 2.9, Operational work and unplanned work).

The last two topics act on the volume that the others measure. Knowledge in topic 3.6 (see topic 3.6, Knowledge management metrics) shortens resolution by letting the next person reuse what the last one learned, and it feeds the self-service content measured in topic 3.7 (see topic 3.7, Self-service and automation metrics). Deflection and automation reduce the simple contacts that reach the desk, which leaves a harder mix of work for the people who remain. That shift should be expected, and handling time may rise as a result, so it should be read as a change in mix rather than a decline in performance.

Recurring incidents become inputs to problem management in Part 4.
