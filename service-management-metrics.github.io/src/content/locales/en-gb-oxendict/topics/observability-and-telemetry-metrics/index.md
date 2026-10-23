# Observability and telemetry metrics

**Observability is the ability to ask new questions of a running service and get answers from its own signals, so measure how much of the service you can see, how good the signals are, how fast they lead to understanding, and what the telemetry costs, rather than counting dashboards or data volume.**

## Overview and motivation

[Observability](https://en.wikipedia.org/wiki/Observability_(software)) is a property of a system: how well its internal state can be understood from the outputs it produces. In practice those outputs are called [telemetry](https://en.wikipedia.org/wiki/Telemetry), and are usually grouped into three kinds. **Logs** are records of discrete events. **Metrics** are numeric measurements over time, such as request rate or error rate. **Traces** follow a single request through the parts of a distributed system. Many teams add profiles, events from the user's device, and business events.

Monitoring asks known questions, such as "is the error rate above a threshold?", and alerts when the answer is yes. Observability aims to let a team ask questions it did not plan for, such as "why are requests from this region slow for this customer segment?". Both are needed. Monitoring is covered in earlier topics (see topic 5.5, Monitoring and alert quality metrics). This topic covers the quality of the signals themselves and the practice of understanding systems from them.

Telemetry has costs and risks. Collecting everything is expensive in storage and money, and it can capture personal or confidential data. Collecting too little leaves a team blind during an incident. Telemetry is also data in the sense of the previous topic (see topic 10.8, Analytics and data quality metrics), so it has completeness, timeliness, and lineage questions. And as AI tools read telemetry to summarize incidents and suggest causes, the quality of the signals decides whether the summary is right.

Terms used here. A **signal** is a stream of telemetry, such as a log, metric, or trace. **Instrumentation** is the code that produces signals. **Cardinality** is the number of distinct values of a label on a metric, and high cardinality increases cost. A **service level indicator (SLI)** measures an aspect of service as users experience it (see topic 5.2, SLIs, SLOs, and error budgets). **Sampling** keeps only a share of the data, which saves cost and loses detail. **Retention** is how long data is kept. **Correlation** means linking signals that describe the same request or event, through shared identifiers.

## Key principles

- **Instrument for questions, not for volume.** Choose signals that answer questions about user experience and system behaviour.
- **Measure what you can see, and what you cannot.** Coverage of services and journeys shows blind spots.
- **Signals must be linked.** Identifiers that connect a log, a trace, and a metric make understanding fast.
- **Telemetry is a cost and a risk.** Budget it, and keep personal and confidential data out unless there is a reason and a rule.
- **Observability serves people.** Measure time to understand, and the experience of the people on call.
- **Open standards reduce lock-in.** Prefer common formats for instrumentation where they fit, and check current specifications.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Instrumentation coverage | Share of services and critical user journeys that emit the agreed core signals | services or journeys with logs, metrics, and traces meeting the agreed standard / services or journeys in the service catalogue | percent | Service catalogue and telemetry platform inventory | Monitoring and event management; service configuration management | Definition of done for new services | Quarterly |
| Trace completeness | Share of sampled requests with an unbroken trace from entry to the last dependency | requests whose trace spans all expected hops / requests in a checked sample | percent | Tracing platform and a sampled check | Monitoring and event management | Test of observability in a feature | Monthly |
| Signal correlation rate | Share of incidents where logs, metrics, and traces could be joined by an identifier | incidents with a working join in the timeline review / incidents reviewed | percent | Incident reviews and tracing platform | Incident management; problem management | Retrospective actions | Quarterly |
| Time to understand | Time from detection to a recorded working explanation of the cause | median and 85th percentile of (time the first working cause is recorded minus time the incident was detected) for incidents with a recorded cause | minutes | Incident timeline and review notes | Incident management | Blameless review | Quarterly |
| Telemetry cost per service | Telemetry spend attributed to a service, per unit of the service's use | telemetry cost allocated to the service / a stated unit of use, such as 1,000 requests | currency per unit | Telemetry billing and usage data | Financial management | Cost as a design input | Monthly |
| Sensitive data in telemetry | Number of confirmed records containing data that should not be there | confirmed cases found by scanning or review in the period | count | Telemetry scans and reviews | Information security management | Definition of done; privacy review | Monthly |
| Blind-spot incidents | Incidents first reported by users where telemetry showed no sign | incidents first reported by users with no related alert or signal / incidents in the period | percent | Incident records and review notes | Incident management; monitoring | Retrospective actions | Quarterly |

Instrumentation coverage depends on an agreed core standard, such as request rate, error rate, latency, and a trace identifier, stated in the metric register. Time to understand counts only incidents where a cause was recorded, so incidents with no known cause are reported separately.

## Recommendations

### Decide what to see

**1. Start from user journeys and service levels.** List the journeys that matter and the indicators that show whether users succeed. Instrument those first, since they tie telemetry to outcomes (see topic 5.2, SLIs, SLOs, and error budgets).

**2. Agree a core standard.** Define the minimum signals every service emits, and the naming and identifier conventions. Put the standard in the definition of done for new services.

**3. Map coverage honestly.** Compare the service catalogue with the services that emit the core signals. List the gaps and their owners, and tackle those with the highest user impact first.

### Make signals useful

**4. Link signals with shared identifiers.** Pass a request or trace identifier through logs, metrics, and traces so that a person can move from a slow request to the exact log lines. Test this in a drill.

**5. Test instrumentation like code.** A trace that breaks at a queue, or a log with the wrong time zone, wastes an incident. Check completeness with sampled requests, and fix the breaks.

**6. Control cardinality and sampling deliberately.** High-cardinality labels can create large costs, and sampling can drop the rare event you need. Decide where to sample, record the rate, and keep full data for errors and slow requests where affordable.

**7. Keep sensitive data out.** Decide what must not appear in logs and traces, such as personal data, credentials, and health or payment details. Scan for it, and fix the source. Check obligations with your legal adviser, since this book gives no legal advice.

### Measure understanding

**8. Measure time to understand, and not just time to fix.** The time from detection to a working explanation shows how well the signals support people. Review the longest cases to see what signal was missing.

**9. Count the blind spots.** Incidents that users found first are the clearest evidence of a gap. For each, ask what signal would have shown it, and add it.

**10. Review dashboards and alerts for use.** Retire dashboards that nobody opens and alerts that never lead to action (see topic 5.5, Monitoring and alert quality metrics). A smaller set that people trust beats a wall of charts.

### Manage cost and standards

**11. Budget and attribute telemetry cost.** Allocate cost to services and watch the trend. Set retention by value: keep detailed data for a short time, summaries longer, and delete what has no use.

**12. Prefer open standards where they fit.** Common instrumentation and data formats, such as those maintained by the OpenTelemetry project, make it easier to change tools. Check the current specification and your tools' support before committing, since standards and products change.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Instrumentation coverage | Adding a minimal signal to every service to pass the standard; excluding hard services from the catalogue | Trace completeness and blind-spot incidents; review the catalogue for omissions |
| Trace completeness | Sampling only simple requests; counting partial traces as complete | Define the check sample by type of request; check dependency coverage |
| Signal correlation rate | Reviewing only incidents that went well; counting a join that exists on paper | Review a random sample of incidents; run a join drill |
| Time to understand | Recording a cause early and loosely; leaving the cause blank for hard cases | Review cause records for quality; report incidents with no cause separately |
| Telemetry cost per service | Dropping signals to cut cost; shifting cost to another account | Blind-spot incidents and time to understand; reconcile total spend |
| Sensitive data in telemetry | Scanning too narrowly; not reporting findings | Scan coverage and independent review; track time to remove |
| Blind-spot incidents | Counting an incident as detected when an alert fired after users reported; defining signal broadly | Compare timestamps for first signal and first user report; sample reviews |

A healthy reading is coverage that rises with the number of complete traces and joins, a falling share of incidents found first by users, time to understand that falls without cutting signals, telemetry cost that is understood and attributed, and sensitive data findings that are fixed quickly.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Collect everything, keep it long | Maximum ability to investigate | High cost and risk; hard to search |
| Sample and keep short retention | Lower cost | May miss rare events and old incidents |
| Standard instrumentation across services | Consistent; faster understanding | Effort to adopt; may not fit every service |
| Team-chosen instrumentation | Fits local needs | Inconsistent; hard to join signals |
| AI summaries of telemetry | Faster first view | Can be wrong; depend on signal quality |

The prose conclusion is to keep rich data for errors and slow requests, sample the routine, and set retention by value. A modest, consistent, linked set of signals beats a large unlinked pile.

## Questions to discuss with your team

**1. During our last incident, what did we want to know that we could not find out?**
This reveals the missing signal. Ask people to recall the question and where they looked. Expect answers like "which customers were affected" or "what changed". Follow up by deciding who adds the signal and how to test it.

**2. For our most important user journey, how would we know it was failing?**
Walk through the journey step by step. Ask which signal shows success at each step, and how soon. Look for steps with no signal. Follow up by adding an indicator for the weakest step.

**3. Can we follow one request from the user's click to the database and back?**
Try it live. Notice where the trace breaks, such as at a queue or a third-party call. Ask how long it takes to find the matching log lines. Follow up by fixing the largest break.

**4. How much do we spend on telemetry, and what do we get for it?**
Many teams do not know the cost by service. Ask which signals have been used in the last quarter. Discuss what could be sampled or deleted without harm. Follow up by choosing one signal to review.

**5. What sensitive information might be in our logs and traces today?**
Search together for examples. Common cases are email addresses, tokens, and free-text fields. Ask how it got there and who can read it. Follow up by agreeing a rule and a scan.

**6. How are we using AI tools on our telemetry, and who checks what they say?**
Listen for unchecked summaries of incidents. Ask what data is sent to a tool and under what terms. Discuss how a person verifies a suggested cause. Follow up by writing a short rule.

## Four perspectives

### Product and delivery teams

You decide what a service emits. Add instrumentation as you build, include the identifier that links signals, and test it as part of the work. Treat missing observability as a defect, since the next incident will pay for it.

### Service and operations teams

You use telemetry under pressure. Tell the team which signals helped and which were missing, and keep alerts tied to user impact. Track time to understand and the blind-spot incidents, and bring them to the product team.

### Leadership and governance

Fund observability as part of the service, with budgets for telemetry and for fixing gaps. Ask for coverage, blind-spot incidents, and cost trends, not the count of dashboards. Set rules for sensitive data and for the use of AI tools on telemetry.

### Customers and users

You are often the first to notice a problem, so ask how to report it and how quickly it will be linked to the service's signals. Your reports reduce blind spots, and you should be told what was learned. Ask what telemetry is collected about you and why.

## In practice: a service management example

A mid-sized online retailer runs a checkout service made of eight smaller services. Numbers in this example are illustrative. Customers report occasional failures at payment, but the dashboards show healthy error rates and normal latency.

The team measures. Instrumentation coverage is 6 of 8 services meeting the core standard. A check of 50 sampled checkout requests shows trace completeness of 62 percent, because the trace breaks at a message queue and at a third-party payment call. In the last six incidents, the signal correlation rate is two of six, since logs use a different request identifier from traces. Blind-spot incidents are three of six.

The team passes a single request identifier through the queue and logs, adds a trace span around the payment call, and instruments the two missing services. After a month, trace completeness reaches about 90 percent in the sampled check and the next incident has a working explanation in 35 minutes, against several hours before. They also scan logs and find customer email addresses in an error message, which they remove from the source, and sensitive data findings fall to zero in the next month.

A gaming risk appears. A manager asks to raise instrumentation coverage by marking the two remaining services as "out of scope". The team declines, because the blind-spot incident count would stay high, and records the gap with an owner. What remains hard: telemetry cost per checkout request has risen, and the team has not yet decided how long to keep traces. The next quarter's plan is to sample routine traces and keep full detail for errors.

## Agile, AI, automation, and analytics

### Agile

Include observability in the definition of done, so each increment of a service can be understood in production. A good practice is to review the last incident's missing signals at the regular improvement conversation and add them as backlog items. The caution is that observability work is often deferred for features, so make it visible and protect time for it.

### AI

AI can summarize telemetry, correlate signals, and suggest causes, and AI features themselves need telemetry such as inputs, outputs, latency, cost, and user feedback. Pair AI-suggested causes with a human check and report how often they were right, and monitor AI features for quality as well as availability (see topic 10.1, AI in service management measurement). The caution is that prompts and responses in logs may contain personal data, so decide what to record before you start.

### Automation

Automate collection, correlation, and alerting, and automate the checks for coverage and sensitive data. Measure the telemetry pipeline itself on dropped data and delay, since a broken pipeline looks like a healthy system. The caution is that automatic remediation that acts on a signal can mask the cause, so log what it did.

### Analytics

Use telemetry to answer questions on user experience and system behaviour, with SLIs linked to outcomes. The decision informed is where to invest in signals and where to reduce cost. The caution is that data volume is not insight, and aggregated metrics can hide the users who are hurt, so check distributions and segments, and show the number of events behind each figure (see topic 10.8, Analytics and data quality metrics).

## Sector lens

**Startup.** Begin with a few signals on the main user journey and a trace identifier in logs. Avoid buying a large platform before the questions are clear, and watch cost as usage grows.

**Small business.** Hosted services often provide limited telemetry. Ask suppliers what you can see and keep a simple external check of the main journey. Avoid collecting personal data in logs.

**Enterprise.** Many teams and tools need a shared standard, shared identifiers, and central cost attribution. Allow teams to add signals within the standard, and manage retention and access centrally.

**Government and public sector.** Rules about data location, retention, and access shape what you can collect and where it is stored. Document telemetry data flows and check obligations with legal advisers (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are instrumentation work, platform or service fees, storage by retention period, and staff time to maintain standards and dashboards. Telemetry cost can grow quickly with volume and cardinality, so budget and attribute it.

The return is faster understanding in incidents, fewer incidents found first by users, and better decisions on where to improve. These benefits are real and hard to price, so avoid inventing a figure. Compare your own time to understand and blind-spot incident share before and after the work, and state assumptions as ranges (see topic 7.7, Return on investment and business case). The risk side is the cost of a data leak through telemetry and the cost of telemetry that is never used.

## Anti-patterns and pitfalls

- **Counting dashboards.** More charts do not mean more understanding. Measure coverage, joins, and time to understand.
- **Collecting everything forever.** Cost and risk grow with little use. Set retention by value.
- **Unlinked signals.** Logs, metrics, and traces that cannot be joined slow every incident. Pass shared identifiers.
- **Sampling away the rare event.** The failure you need is the one you dropped. Keep errors and slow requests.
- **Sensitive data in logs.** It spreads and is hard to remove. Scan and fix the source.
- **Alerts on every signal.** Noise trains people to ignore alerts. Alert on user impact.
- **Trusting AI summaries unchecked.** They can be wrong, and the signals can be incomplete. Verify against the data.
- **Instrumentation as someone else's job.** The people who write the code know what to emit. Make it part of the work.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Coverage and standard | Signals vary by team; blind spots unknown | Main services instrumented | Core standard and coverage tracked against the catalogue | Blind-spot incidents reviewed and gaps closed | Coverage built into service creation and adjusted by user impact |
| Signal quality and linking | Logs only; no shared identifiers | Some traces and metrics | Shared identifiers; trace completeness checked | Time to understand reviewed; drills run | Signals adapt automatically to questions asked |
| Cost and governance | Cost unknown; no data rules | Cost visible overall | Cost attributed; retention and sensitive data rules | Cost and data findings reviewed on a cadence | Telemetry cost and risk managed by value across teams |

## Checklist

- [ ] A core signal standard is written and part of the definition of done.
- [ ] Instrumentation coverage is tracked against the service catalogue.
- [ ] A request or trace identifier links logs, metrics, and traces.
- [ ] Trace completeness is checked on a sample of real requests.
- [ ] Time to understand is recorded for incidents, with the cause.
- [ ] Blind-spot incidents are counted and each leads to a signal.
- [ ] Telemetry cost is attributed to services, and retention is set by value.
- [ ] Sensitive data in telemetry is scanned for and fixed at source.
- [ ] Rules exist for AI tools that read telemetry.
- [ ] Each metric has a gaming vector and a guardrail shown beside it.

## AI prompts

**Design a core signal standard.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Find gaps in observability from an incident review.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Plan a scan for sensitive data in telemetry.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Review the gaming risk of the observability measures.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI skills

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): use to examine unusual patterns in telemetry before deciding on a cause.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): use to turn signals and timelines into a tested explanation.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): use to connect indicators to the agreements and objectives they support.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- Observability is about being able to ask new questions of a running service, so measure coverage, linked signals, and time to understand.
- Incidents that users find first are the clearest evidence of blind spots, so count them and add signals.
- Shared identifiers across logs, metrics, and traces are what make understanding fast.
- Telemetry costs money and can leak sensitive data, so budget it, set retention by value, and scan for sensitive content.
- Check AI summaries of telemetry against the data, since they depend on signal quality.

## References and further reading

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
