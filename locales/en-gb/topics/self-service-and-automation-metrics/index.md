# Self-service and automation metrics

**Measure self-service by whether people got what they needed without help, and measure automation by the work it removes and the failures it creates, because a contact that never arrived is only a success if the problem was solved.**

## Overview and motivation

Self-service and automation are the two main ways a service organisation takes routine work off its people. [Self-service](https://en.wikipedia.org/wiki/Self-service_software) lets a user solve a problem or obtain something alone, through a portal, a knowledge article, a password reset page, or a [chatbot](https://en.wikipedia.org/wiki/Chatbot). [Automation](https://en.wikipedia.org/wiki/Automation) lets a system perform the steps that a person used to perform, such as creating an account, restarting a service, or closing a ticket once a monitor confirms recovery. Both aim at the same outcome: fewer repetitive tasks for people, faster results for users, and more time for the work that needs judgement.

The ideas map onto both traditions. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, the service request management practice expects well-understood, repeatable requests to be handled through standard flows with as much automation as is sensible, and the incident management and knowledge management practices expect good information to be available to users and to support staff at the earliest useful point. Agile and DevOps practice reaches the same place by another route: [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code), pipelines, and the discipline of removing toil, which the Google site reliability engineering books define as manual, repetitive, automatable work that grows with the service. The shared idea is often called "shift left": move the resolution of a problem toward the user, or toward the cheapest and earliest point in the support chain, and away from the specialist queue.

Shift-left language invites a measurement mistake. Teams see that a contact avoided is cheap and then count avoided contacts as success. The count is easy to produce, because a portal visit that did not end in a ticket looks identical to a portal visit where the user gave up. This topic therefore starts from the user's outcome. It defines what self-service success means, how to estimate deflection without claiming credit for abandonment, how to measure automation coverage and reliability, and how to see the shift-left effect on volume and complexity. The related volume and priority measures are in topic 3.2, Incident volume and priority, the request side is in topic 3.5, Service request fulfilment metrics, and the knowledge side is in topic 3.6, Knowledge management metrics.

Terms used in this topic:

- **Level 0 (or self-service tier)**: resolution by the user without contacting staff. Level 1 is the first line of support, usually the service desk, and levels 2 and 3 are the specialist and engineering tiers.
- **Deflection**: a contact that would otherwise have reached staff and was resolved at level 0 instead. It cannot be observed directly, so it is always an estimate.
- **Fall-through**: a user who tried self-service, did not succeed, and then contacted staff about the same need.
- **Runbook**: a documented procedure for a routine operational task. A [runbook](https://en.wikipedia.org/wiki/Runbook) is the usual first step toward automating it.
- **Toil**: manual, repetitive, automatable work with no lasting value (see topic 5.7, Toil and on-call metrics).
- **Service catalogue**: the list of services and standard requests offered to users. ITIL calls it the service catalogue.

## Key principles

- **Count outcomes, not avoided contacts.** A portal session with no ticket is a success only when the user's need was met. Define success from the user's side and verify it with a follow-up signal.
- **Deflection is an estimate, so label it as one.** State the method, the comparison used, and the uncertainty. Never present an estimated deflection figure as a measured fact.
- **Measure the fall-through path.** The route from a failed self-service attempt to a staffed contact is where most hidden failure lives. Report it beside every success number.
- **Automation has a cost side.** Every automated flow needs maintenance, monitoring, and a way to fail safely. Measure coverage and reliability together, and count the effort spent keeping automation alive.
- **Shift left changes the mix as well as the volume.** When easy work leaves the queue, the remaining work is harder and slower on average. Read resolution time and handling time with that in mind (see topic 3.3, Incident response and resolution time).
- **Metrics describe services and flows.** Report by catalogue item, article family, or automation flow. Never rank agents by how many users they pushed to self-service.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Self-service success rate | Share of self-service sessions where the user's need was met without staff contact | Sessions that ended in a completed outcome (request submitted and fulfilled, article marked helpful, reset completed) with no staffed contact about the same need within 7 days, divided by all sessions that started a task. Clock starts at the first meaningful action in the portal, stops at completion or abandonment. Excludes bot traffic, test accounts, and pure browsing | Percent | Portal and identity logs, ticket system, session analytics | Service request management; knowledge management | Customer feedback loop; outcome-based acceptance criteria | Monthly |
| Estimated deflection rate | Estimated share of demand resolved at level 0 that would otherwise have reached staff | Compare contact rate per 1,000 active users for a service before and after a self-service change, or against a holdout group, adjusted for known demand shifts. Stated as an estimate with the method named. Excludes contacts that moved to another channel | Percent (estimate) | Ticket system, user population counts, experiment or cohort data | Service desk; incident management | Experiment with a control group; A/B test | Quarterly |
| Fall-through rate | Share of failed self-service attempts that end in a staffed contact on the same need | Staffed contacts opened within 7 days of an abandoned or unsuccessful self-service session by the same user on the same topic, divided by unsuccessful sessions. Clock starts at the end of the session. Excludes unrelated contacts | Percent | Portal logs joined to ticket system on user and topic | Service desk; knowledge management | Escalation path in a definition of done; feedback from support | Monthly |
| Self-service adoption (portal-first share) | Share of eligible requests and incident reports raised through self-service channels | Items created via portal, bot, or API, divided by all items for catalogue entries that offer a self-service route. Excludes items for which no self-service route exists | Percent | Ticket system channel field, catalogue configuration | Service request management; service catalogue management | Adoption tracking after a release | Monthly |
| Automation coverage | Share of eligible repeatable work completed by automation with no manual step | Items completed by an automated flow end to end, divided by all items of types judged automatable. Counts the type as automatable only if a written candidate list names it. Excludes one-off work and items automation rejected | Percent | Ticket system, automation platform logs, candidate list | Service request management; deployment management | Automation of the definition of done; pipeline-as-code | Monthly |
| Automation failure and rework rate | Share of automated runs that failed, needed manual repair, or produced an outcome later corrected | Automated runs that errored, were rolled back, or were followed by a manual fix within 7 days, divided by all automated runs. Clock starts at run start. Excludes planned dry runs | Percent | Automation platform logs, ticket system, change records | Change enablement; incident management | Change fail rate; build and test stability | Weekly |
| Manual touch time per request type | Staff effort spent on a request type that is a candidate for automation | Hands-on minutes recorded by staff on items of the type in the period, summarised as median and 85th percentile per item. Estimated by sampling where time is not logged. Excludes waiting time | Minutes per item | Time sampling, ticket work logs | Service request management | Toil tracking; value stream waste | Quarterly |
| Level distribution (shift-left share) | Where in the support chain items get resolved | Items resolved at each level (0, 1, 2, 3) divided by all resolved items for the period. Level is the highest tier that did hands-on work. Excludes items cancelled before triage | Percent by level | Ticket system resolver group and assignment history | Incident management; service desk | Swarming and escalation patterns; cross-functional teams | Monthly |

All of these are measured per service, catalogue item, or flow, never per person. Time measures should be shown as the median plus a high percentile, as the introduction to the topic on statistical literacy explains (see topic 1.6, Statistical literacy for service metrics).

## Recommendations

### Define success from the user's side

**1. Write down what "got what I needed" means for each self-service route.** For a password reset it is a completed reset and a successful sign-in. For a request it is fulfilment, not submission. For an article it is a user who did not contact staff again about the same need. A definition that stops at "viewed the page" measures traffic.

**2. Join self-service sessions to later contacts.** The strongest evidence of failure is a staffed contact on the same topic soon after a session. Link the two on user and topic where privacy rules allow, and where they do not, use aggregate counts by topic and day. The join turns a vague satisfaction story into a fall-through rate you can improve.

**3. Ask users with a single question at the point of exit.** A one-question prompt such as "Did this solve your problem?" gives a direct signal that logs cannot. Treat the answers as a sample, read the free-text comments, and compare responders with non-responders so that the happiest users do not define the result (see topic 6.1, Customer satisfaction metrics).

### Estimate deflection honestly

**4. Prefer a comparison to a counter.** The cleanest estimate comes from a holdout, a phased rollout, or a before-and-after view of contacts per 1,000 active users for the affected service. Counting "sessions that did not become tickets" overstates the effect, because many of those users never had a need that staff would have seen. State the method and the uncertainty next to the figure.

**5. Normalise volume against usage.** A fall in ticket count can follow a fall in users, a quiet release cycle, or a seasonal change. Divide by active users or by transactions before drawing conclusions (see topic 3.2, Incident volume and priority). Annotate the chart with releases, campaigns, and portal changes.

**6. Keep deflection out of targets.** A target for deflection rewards hiding the contact route, burying the phone number, and closing chat sessions early. Use deflection as a learning estimate and let the target sit on user outcomes, such as self-service success rate and the oldest unresolved item.

### Measure automation as a product, not a project

**7. Keep a candidate list and measure coverage against it.** Coverage of "all work" is a poor measure, because most work is not automatable. Keep a short written list of request and incident types that are repeatable, well understood, and frequent, rank it by manual touch time and volume, and report coverage against that list. Review the list each quarter so the denominator is honest.

**8. Pair coverage with reliability.** An automated flow that fails one run in ten, or that silently produces the wrong result, may cost more than the manual task it replaced. Track failure and rework rate, the time to detect a failed run, and how often a person has to repair the outcome. Use the error handling practices that the site reliability engineering community describes: idempotent steps, clear alerts, and a safe manual fallback (see topic 5.5, Monitoring and alert quality metrics).

**9. Count the upkeep.** Automations need owners, version control, tests, and updates when the systems around them change. Record the time spent maintaining each flow, and compare it with the manual touch time it removed. An automation that costs more to keep running than it saves is a candidate for retirement, which is a normal result, not a failure.

### Watch the shift-left effect

**10. Expect the remaining work to be harder.** When routine contacts leave the service desk, average handling time and first contact resolution at level 1 often get worse even though the service is better. Report the level distribution and the mix of categories next to those measures, and agree in advance with leadership that a rise in handling time after a successful deflection is expected (see topic 3.1, Service desk metrics).

**11. Close the loop to knowledge and to problem management.** Every fall-through is evidence of a missing or poor article, a confusing form, or an unfixed defect. Route the top fall-through topics to the knowledge owners and, where the cause is a defect, to problem management (see topic 4.1, Problem management metrics). Review the list monthly and report how many items were fixed.

**12. Share the capacity you free.** If automation and self-service remove work, decide what the freed time buys: improvement work, proactive fixes, or training. Teams that see no benefit from automation stop proposing it. Track the planned share of capacity for improvement over time (see topic 2.9, Operational work and unplanned work).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Self-service success rate | Counting any completed form or any page view as success; removing the "did this help" prompt when scores fall; excluding hard topics from the denominator | Fall-through rate and a sample of closed sessions read by a person; report the denominator rules |
| Estimated deflection rate | Hiding the contact route; adding steps before contact; classifying all fewer tickets as deflection regardless of cause | Contacts per 1,000 active users, user satisfaction on the affected service, and the method written beside the number |
| Fall-through rate | Defining the matching window so short that returns fall outside it; closing the follow-up contact as a duplicate | Repeat contact rate across all channels; review of a sample of returned contacts |
| Self-service adoption (portal-first share) | Forcing all requests into the portal regardless of fit; re-labelling phone-created tickets as portal tickets | Self-service success rate and user effort; share of requests that have no workable portal route |
| Automation coverage | Choosing easy items for the candidate list; growing the denominator with trivial tasks; counting partly manual flows as automated | Written candidate list reviewed each quarter; automation failure and rework rate; manual touch time of the remaining items |
| Automation failure and rework rate | Excluding manual repairs from the count; letting failed runs retry silently until they succeed; labelling failures as "planned dry runs" | Incident and alert records linked to flows; time to detect a failed run; sampled audit of outcomes |
| Manual touch time per request type | Not logging time for items that look manual; assigning the time to another category; sampling only quiet days | Sampling plan written and reviewed; compare with cycle time and queue age for the same type |
| Level distribution (shift-left share) | Raising the share resolved at level 1 by reclassifying escalations, or by closing items at level 1 and reopening at level 2 as new items | Reopen rate and linked-ticket rate; resolution quality sample; customer satisfaction by level |

A healthy reading shows self-service success rising together with a stable or falling fall-through rate, estimated deflection stated with its method, automation coverage rising against a reviewed candidate list while failure and rework stay low, and a level distribution that moves work earlier without raising reopen rates or lowering satisfaction. If one number improves while its guardrail worsens, treat the improvement as unproven.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Self-service first | Immediate results for users, lower marginal cost, available at any hour | Users with complex or unusual needs can feel stranded; weak content creates more contacts than it removes |
| Staffed contact first | Personal help, judgement, and a chance to notice unusual problems | Slower, costly, and dependent on staff availability |
| Estimating deflection with a holdout | Credible evidence of effect | Requires design work and tolerance for a group that does not receive the change |
| Counting sessions without tickets | Cheap and always available | Overstates success; invites gaming; cannot tell success from abandonment |
| Broad automation | Consistent execution and less toil | Maintenance burden, failure modes that scale, and skills that can fade from the team |
| Selective automation of stable flows | Better return for the effort and fewer surprises | Leaves some manual work in place, which needs its own attention |

The prose answer is to automate what is frequent, stable, and well understood, and to keep a person available where need is unclear or the stakes are high. Self-service should be judged by whether people were helped, with the staffed route kept visible. Shift-left savings are real only when the user outcome holds, so count both sides.

## Questions to discuss with your team

**1. When a user opens the portal and leaves without raising a ticket, what do we assume happened, and how would we find out?**
Ask the group to list the possible stories: the user found the answer, gave up, called instead, or asked a colleague. Look at what data would separate them, such as a follow-up contact, an exit prompt, or a sample of sessions. The facilitator should record which assumption is currently in the dashboard and who relies on it. Close by agreeing one change that would replace an assumption with evidence.

**2. How do we currently estimate deflection, and would we defend the method to a sceptical finance partner?**
Walk through the calculation step by step, including the comparison group and the adjustments for demand changes. Ask what else changed during the period, such as releases, outages, or staff changes. Note the range of plausible values as well as the headline. The discussion should end with a plain statement of the method that can sit beside the number.

**3. Which of our automations would we switch off tomorrow if we knew their true cost?**
List the automated flows with their owners, last change date, run counts, failure rates, and maintenance effort. Ask which ones nobody would miss, and which ones people are afraid to touch. The facilitator should treat retirement as a legitimate outcome. The answers often reveal flows with no owner.

**4. What happens to a user whose self-service attempt fails, and how long does it take them to reach a person?**
Ask someone to walk the path as a user would, including finding the contact route. Time it and note every step that could be shortened. Compare the experience with the stated intent of the portal. The group should decide whether the route is as easy to find as the self-service route.

**5. What did the service desk's mix of work look like a year ago, and what does it look like now?**
Review the category mix and the level distribution over time. Discuss why handling time or first contact resolution moved, and whether it reflects a harder mix. Ask whether leadership has been told that this is expected. Agree how to present the trend so that a rise in handling time after a successful shift left is not read as decline.

**6. What would we do with the capacity that automation frees, and who decides?**
Estimate the hours removed from manual work and name what they were meant to buy. Ask whether the time went to improvement work or was absorbed by new demand. Discuss how the team would know. The facilitator should push for a concrete commitment, such as a share of capacity reserved for fixing the top fall-through topics.

## Four perspectives

### Product and delivery teams

Delivery teams own much of what makes self-service succeed: clear error messages, usable forms, in-product help, and the ability to do tasks without raising a ticket. They also own automation that lives in pipelines and infrastructure code. Their useful measures are self-service success on their own features and the manual steps left in release and environment work, treated as toil to remove (see topic 2.8, DORA metrics). They should read fall-through topics as a product backlog.

### Service and operations teams

Operations teams carry the automation estate and the staffed fallback. They should track automation reliability, the maintenance load, and the manual touch time that remains, and they should watch the level distribution without being penalised for the harder work that remains. Agents should be consulted on which requests are good automation candidates, because they know where the real friction is. Report by flow and request type, and never by agent.

### Leadership and governance

Leaders are tempted to treat deflection as a cost-saving figure. A better request is for the user outcome, the method behind any estimate, and the reliability of the automation. Governance should expect a candidate list, an owner for each automated flow, and a rule for retirement. Leaders should also protect the staffed route from being hidden to meet a target (see topic 11.3, Rolling out metrics without breeding fear).

### Customers and users

Users want to get on with their work. Many prefer self-service when it works, and almost all dislike being trapped in it when it does not. Their experience is best captured by effort and outcome questions at the point of exit, and by whether a failed attempt led quickly to a person (see topic 6.4, User and employee experience). Users with accessibility needs or limited confidence are an early warning for portals that work for the average user only.

## In practice: a service management example

A mid-sized online retailer's IT department runs a service desk, a platform team, and several product teams. The numbers in this example are illustrative.

The department launches a redesigned portal with guided password reset, a software access request flow, and a chatbot for common questions. Three months later, the portal report shows that 62 percent of sessions end without a ticket, and a manager proposes calling that "deflection" and setting a target of 70 percent. The service desk lead is uneasy, because agents report that people who call say they "tried the portal first."

The team reviews the measures. They define self-service success as a completed outcome with no staffed contact on the same topic within 7 days. On that definition the success rate is 48 percent, not 62, and the fall-through rate for the access request flow is 31 percent. Reading a sample of 40 fall-through contacts, they find that most users could not tell which of two similar catalogue items to pick, and that the chatbot was answering a question about a retired tool.

The team makes three decisions. First, the headline measure becomes self-service success, with estimated deflection shown only as a quarterly estimate based on contacts per 1,000 active users, and no target is set on deflection. Second, the two similar catalogue items are merged, the chatbot content is corrected, and the two top fall-through topics are added to the improvement backlog with an owner. Third, a manual process for creating test environments, which takes platform engineers a median of 25 minutes (illustrative) and happens about 40 times a month (illustrative), is added to the automation candidate list.

The platform team automates the environment flow within the quarter. A gaming risk appears quickly: the flow's coverage figure rises, but the failure and rework rate shows that one run in eight (illustrative) needs a manual repair and that the repairs were logged as "planned maintenance." The team adds repaired runs to the failure count, links runs to the incident record, and agrees to review the flow monthly. At the next review, success rate has risen to 57 percent (illustrative), the fall-through rate has fallen, and service desk handling time has risen slightly because the remaining contacts are harder. The head of IT agrees to present handling time with the level distribution, to avoid reading the rise as decline.

## Agile, AI, automation, and analytics

### Agile

Improve self-service in small steps with user feedback, because the portal is a product used by real people. The caution is that a portal-first mandate can raise adoption while frustrating users who need a person.

### AI

AI chat and search can raise self-service volume and estimated deflection, but a deflected contact may be an unsolved problem. Pair deflection with self-service success rate measured by a user answer or a no-return window, and with the fall-through rate to a person. The caution is that a model that answers confidently and wrongly produces contacts that come back later.

### Automation

Measure automation by coverage, by failures and rework, and by the manual touch time it removes. Log every automated action so it can be audited and rolled back. The caution is that coverage numbers reward automating easy tasks, so also track the hard ones.

### Analytics

Show success, fall-through, and recontact on one page by request type, with counts. The decision informed is what to automate next. The caution is that deflection is an estimate, so label it as one and verify with a sample of users.

## Sector lens

**Startup.** Founders can often fix a poor self-service path by talking to the user. Measure success with a single exit question and a few reads of real sessions, and automate the two or three tasks that interrupt the most people. Avoid building a bot before the written answers are good.

**Small business.** One person may run IT for everyone, so self-service mostly means good short guides and a shared request form. Automation of account setup and password resets pays back quickly, provided someone owns each flow. Keep the staffed route obvious, because the owner's own staff will otherwise route around the system.

**Enterprise.** Scale makes both the benefit and the gaming greater. Standardise definitions across business units, keep a central candidate list and automation register, and report by service and catalogue item. Beware of comparing units that serve very different user populations.

**Government and public sector.** Accessibility, language access, and the obligation to serve people who cannot use digital channels are design inputs, not extras. Keep assisted routes available and measured, document automated decisions that affect people, and expect audit questions about who owns each automated flow (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The motivations are fewer repetitive contacts, faster results for users, steadier execution of routine tasks, and more capacity for improvement work. The cost side includes building and maintaining the portal and content, the integration and data work to join sessions to tickets, the automation platform, and the time to write, test, and own each automated flow. Samples of staff time and a short exit survey cost little, and they provide most of the evidence you need.

The return should be argued from your own data. Use manual touch time and volume to estimate the effort an automation removes, subtract the upkeep and the cost of failures, and report the result as a range with its assumptions. For self-service, use the fall-through rate and the sampled outcomes to show the share of contacts avoided because users were helped, not merely turned away. Do not import deflection or savings percentages from vendors or surveys; measure your own baseline first. The total cost of ownership of an automation includes the changes it will need as the systems around it evolve, so budget for them.

## Anti-patterns and pitfalls

- **Counting sessions without tickets as success.** It cannot separate help from abandonment. Define success by outcome and verify it with fall-through and exit feedback.
- **Targets on deflection.** They reward hiding the contact route. Use deflection as an estimate and set targets on user outcomes.
- **Hiding the phone number or chat.** Users who cannot reach a person raise their effort and lose trust. Keep the staffed route visible and measure how long it takes to reach it.
- **Automating before understanding the process.** The flow encodes confusion at speed. Document and simplify the runbook first, then automate the stable version.
- **Automation without owners.** Unowned flows decay silently and fail at bad moments. Give each flow an owner, a test, a monitor, and a retirement rule.
- **Ignoring the cost of failure.** A high coverage figure with unmeasured rework is a hidden liability. Report failure and rework rate with coverage.
- **Reading a rise in handling time as decline.** After a successful shift left the remaining work is harder. Show the level distribution and category mix next to the time measures.
- **Ranking agents by deflected contacts.** It produces pushing users away and spoils the data. Report by service and flow only.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Self-service success and deflection | Portal visits and ticket counts reported; no outcome definition | Success defined for some routes; deflection quoted without method | One written success definition; fall-through measured; deflection labelled as an estimate | Success and fall-through trended with exit feedback; deflection estimated by comparison | Outcomes shared with product teams and suppliers; fall-through topics drive funded fixes |
| Automation coverage and reliability | Automation ad hoc; no list of candidates | Some flows automated by individual teams; failures handled informally | Candidate list, owners, and failure measures defined for every automated flow | Coverage, failure rate, and upkeep effort reviewed and funded on a cadence | Automation coordinated across teams and suppliers; flows retired and revised routinely |
| Shift-left effect and use | Volume reported without context | Level distribution tracked by a few teams | Level distribution and category mix reported beside handling time | Freed capacity planned and tracked; leadership reads mix effects correctly | Capacity and learning flow back into services and catalogue design across the organisation |

## Checklist

- [ ] Self-service success is defined by outcome, with a written start, stop, and exclusions.
- [ ] Fall-through rate is measured for the top self-service routes.
- [ ] Any deflection figure states its method and is labelled as an estimate.
- [ ] No target is set on deflection.
- [ ] A one-question exit prompt or equivalent feedback exists for key routes.
- [ ] A written automation candidate list exists and is reviewed each quarter.
- [ ] Every automated flow has an owner, a monitor, and a failure and rework measure.
- [ ] Manual touch time is sampled for the top request types.
- [ ] Level distribution is shown beside handling time and first contact resolution.
- [ ] The staffed route is visible and its access time is checked.
- [ ] Top fall-through topics are reviewed monthly and routed to owners.
- [ ] No metric in this topic is reported or targeted per agent.

## AI prompts

**Check how we estimate deflection.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Analyze fall-through topics from a sample.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Rank automation candidates.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Design the guardrails for an automated flow.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the related topic and guardrail for a self-service or automation metric you plan to introduce.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep every metric paired with a gaming vector and guardrail.

## Key takeaways

- Self-service success is a user outcome, so define it from the user's side and verify it with fall-through and exit feedback.
- Deflection is an estimate, so state the method and keep it out of targets.
- Automation coverage means little without reliability, upkeep, and a reviewed candidate list.
- Shift left raises the difficulty of the remaining work, so read handling time with the level distribution and category mix.
- Measure flows, services, and catalogue items, never agents, and keep the staffed route visible.

## References and further reading

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
