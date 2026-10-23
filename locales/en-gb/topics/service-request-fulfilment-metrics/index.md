# Service request fulfilment metrics

**Measure how long routine requests take from the user's point of view, how much of that time is waiting, which catalogue items drive demand, and how much of the work is automated, then use the picture to redesign the common requests instead of pushing the people who handle them.**

## Overview and motivation

A **service request** is a routine request from a user for something a service is designed to provide: an account, access to a folder, a laptop, a software licence, a piece of information. It differs from an **incident**, which is an unplanned disruption to a service (see topic 3.2, Incident volume and priority), and from a **change**, which modifies a service and needs a fresh judgement about risk (see topic 4.3, Change enablement metrics). In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 the work is covered by the service request management practice, and the work is usually described as a repeatable **request model**: the information needed, the approvals, the steps, and the expected time. ITIL spells the word "fulfilment"; the body of this topic uses "fulfilment" in line with the book's spelling.

Requests matter for metrics because they are predictable demand. An incident is a surprise; a request for a new starter's laptop arrives every month and follows the same steps. That predictability makes requests the best candidate for design, standardisation, and [process automation](https://en.wikipedia.org/wiki/Process_automation). It also means delays are rarely caused by difficulty. They are caused by queues, approvals, and handoffs, so the useful question is where the request waits, not how fast anyone types.

The unit of analysis is the **catalogue item**: one named thing a user can ask for in the [service catalogue](https://en.wikipedia.org/wiki/Service_catalog) (ITIL's term is "service catalogue"; the rest of this topic says "service catalogue"). Per-item measures are far more useful than a single blended number, because a request for a password reset and a request for a server build have different clocks, different owners, and different reasonable targets. A blended average hides both.

The agile and ITIL views meet here with little friction. ITIL asks whether the service delivers the agreed outcome within the agreed time. Agile flow practice asks how long work takes to flow from request to done, how much sits in queues, and how much work is in progress at once. A request is a work item moving through a workflow, so the tools of flow measurement, such as cycle time and work-item age, apply directly (see topic 2.1, Flow measures). The vocabulary differs. The arithmetic is the same.

Three terms recur. **Fulfilment time** is the elapsed time from the moment the user submits the request to the moment the user confirms, or the system records, that the thing was delivered. **Hands-on time** is the time someone is actively working on the request, and **wait time** is everything else, including approvals and waiting for the user. The difference between them is what a request model should shrink. **Automation share** is the portion of requests fulfilled without a person touching them after submission.

Time measures need care. Fulfilment times are skewed: most requests finish quickly and a few take very long. A mean is pulled around by the few, so report the median and a high [percentile](https://en.wikipedia.org/wiki/Percentile) such as the 85th or 95th (see topic 1.6, Statistical literacy for service metrics). Targets agreed with customers, such as those in a [service-level agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), should be stated the same way: "85 percent of laptop requests fulfilled within 5 working days" says more than "average 3 days".

Finally, a warning from the psychology of measurement. When a team is judged on closing requests quickly, the cheapest way to improve the number is to change what counts as closed, or to pause the clock. [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies fully (see topic 1.2, Goodhart's law and the psychology of metrics). Every metric below is therefore paired with a guardrail, and none of them describes an individual agent.

## Key principles

- **Measure per catalogue item.** Each item has its own request model, owner, and reasonable target, so blended numbers mislead.
- **Start the clock when the user asks and stop it when the user has the thing.** Internal milestones are useful diagnostics, but they are not the customer's experience.
- **Separate wait time from hands-on time.** The gap between them shows where redesign pays, and it is rarely in the work itself.
- **Report distributions, not averages.** A median and a 95th percentile describe what users live through.
- **Treat demand as a signal.** Volume by item shows what users need, what is confusing, and what deserves automation or self-service.
- **Automate the stable and frequent first.** Automation share is a result of good request design, not a goal to chase for its own sake.
- **Measure the team and the service, never the person.** Requests flow through systems, and variation between agents mostly reflects the mix of work.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Request fulfilment time | Elapsed time to deliver a request, shown as a median and a 95th percentile per catalogue item | clock starts when the user submits the request, stops when the user confirms delivery or the delivery is recorded; requests cancelled by the user are excluded; time waiting for the user is reported separately, not removed | working days or hours | ITSM tool request history | Service request management | Cycle time on the team board (see topic 2.2, Lead time, cycle time, and flow efficiency) | Weekly, trended monthly |
| Fulfilment within target | Share of requests delivered within the target agreed for their catalogue item | requests fulfilled within target / requests fulfilled in the period; clock as above, items still open are excluded and counted in backlog age instead | percent | ITSM tool request history; catalogue item target table | Service level management | Service level expectation | Monthly |
| Request backlog and age | Number of open requests and how old the oldest are, by catalogue item | open requests at the end of the period (count); age of each open request = report date minus submission date; report the count, the median age, and the oldest age | count and days | ITSM tool open request queue | Service request management | Work in progress and aging work items (see topic 2.3, Work in process and queueing) | Weekly |
| Approval wait time | Time a request spends waiting for an approval | clock starts when the approval is requested, stops when it is granted or declined; requests with no approval step are excluded | hours | ITSM tool approval log | Service request management; change enablement | Blocked time or a "waiting" column on the board | Monthly |
| Request volume by catalogue item | Number of requests submitted for each item, with its share of all requests | requests submitted per item in the period; requests resubmitted as duplicates, if identified, are excluded; report the count and the share of total | count and percent | ITSM tool request records | Service catalogue management | Demand analysis for backlog shaping | Monthly |
| Automation share | Portion of requests fulfilled with no manual step after submission | requests fulfilled end to end by automation / requests fulfilled in the period; a request touched by a person for any fulfilment step is counted as manual; approvals by a person do not count as manual fulfilment steps if the policy requires them | percent | ITSM tool fulfilment records and automation platform logs | Service request management; automation within the service value chain | Automation in the definition of done | Monthly |
| Request reopen rate | Share of fulfilled requests that the user reopens or re-raises because the result was wrong or incomplete | requests reopened or re-raised for the same item by the same user within 7 days of fulfilment / requests fulfilled in the period; the 7-day window is an example the team writes down | percent | ITSM tool request history | Service request management | Rework rate; defect escape | Monthly |

Fulfilment time counts working time only if the team has agreed a calendar and recorded it; otherwise use elapsed hours and say so. The backlog metric carries three numbers on purpose, because a count alone says nothing about waiting. The automation share definition leaves human approvals out of the "manual" tally because many approvals are a policy decision, not a fulfilment cost; approval wait time is measured separately so the delay stays visible.

## Recommendations

### Define the clocks and the unit

**1. Measure per catalogue item, and publish the item list.** Start with the top ten items by volume, which usually cover a large share of requests, and add items as the data allows. Give each item an owner, a stated target, and a one-line definition of "delivered". The item list is the denominator for everything else, so keep it in the metric register (see topic 1.4, Metrics governance and ownership).

**2. Write down the start and stop of the clock for each item.** For most items the clock starts at submission and stops when the user can use what they asked for, not when a ticket is closed. A laptop is delivered when it is in the user's hands, not when the courier is booked.

**3. Decide once how waiting for the user is treated.** Some requests stall because the user has not answered a question. Pausing the clock for that is reasonable, but it is also the easiest lever to abuse. Record the pause as a separate state with a reason, report paused time as its own number, and review the pause rate by item (see topic 1.5, Data sources and instrumentation).

### Report what users experience

**4. Show the median and the 95th percentile, with a count.** Put both on one chart per item, with the number of requests behind each point. A median of two days with a 95th percentile of twenty tells you that most users are well served and that a tail needs investigation, which an average of four days hides. When the count is small, say so and show the individual requests instead of a percentile.

**5. Make age visible for open requests.** Fulfilment time is only known after a request finishes, so it lags. A list of the oldest open requests per item, sorted by age, tells a team where to look today. In flow terms this is work-item age against the item's usual cycle time, and it is the single most actionable view a request queue can have.

**6. Split elapsed time into hands-on, approval, and waiting-for-user time.** Take a sample of fulfilled requests for one item and break each one into the time spent in each state. Most teams find that active work is a small share of the elapsed time. The finding moves the improvement conversation from "work faster" to "remove the queue between steps", which is the core idea in the study of queues and flow (see topic 2.3, Work in process and queueing).

### Use demand to shape the service

**7. Read volume by item as a message from users.** A rising volume for one item can mean growing need, a confusing product, or a failure elsewhere, such as a broken process that sends people back to ask again. A very low-volume item may be a candidate to retire from the catalogue. Compare volume with adoption data (see topic 6.3, Service adoption and catalogue metrics).

**8. Rank automation candidates by volume, stability, and hands-on time.** The best first candidates are high-volume, rarely vary, and carry noticeable hands-on time. Start with the item whose steps are already identical every time, such as access to a standard group, and automate the steps before touching the exceptions. Track the automation share per item so progress is visible, and send self-service and deflection questions to their own topic (see topic 3.7, Self-service and automation metrics).

**9. Redesign approvals before adding people.** Approval wait often dominates elapsed time. Ask for each approval whether it is required by policy, whether a pre-approved standard request would do, and whether the approver can be a role with a deputy rather than one person. Pre-approving low-risk, well-understood requests mirrors the idea of standard changes in change enablement, and it removes queues without removing control.

### Keep the numbers honest

**10. Pair speed with quality every time.** Report fulfilment time beside the reopen rate and a user satisfaction signal for the same item (see topic 6.1, Customer satisfaction metrics). A faster request that comes back reopened is slower than it looks. If speed improves and the reopen rate rises with it, treat the speed gain as unproven.

**11. Keep requests, incidents, and changes apart in the data.** Mixing them distorts all three. A password reset that is really a symptom of a faulty sign-in service is an incident, and a request to alter how a service works is a change. Classify at intake with a short rule, sample misclassified items quarterly, and compare request and incident volumes side by side (see topic 3.1, Service desk metrics).

**12. Review the item table with the team that does the work.** Meet monthly for thirty minutes around the per-item table: volume, median and 95th percentile, oldest open request, automation share, reopen rate. Pick one item and one change to try, and look at the same table next month to see what happened.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Request fulfilment time | Pausing the clock for "waiting for user" whether or not the user is the cause; closing requests before delivery and reopening them as new ones; splitting one request into several small ones | Paused-time share by item, with a sample audit of pause reasons; reopen rate; user confirmation of delivery before closure |
| Fulfilment within target | Redefining the target to be easier; counting only requests that finish and ignoring the old open ones; cherry-picking quick items for the target set | Backlog age for open requests; changes to targets logged in the metric register with a reason; the target set covers all items by volume |
| Request backlog and age | Closing old requests as "no response" or "stale"; moving requests to a different queue or category so they leave the counted queue | Count of requests closed without delivery, by reason; category and queue transfers reviewed in the monthly meeting |
| Approval wait time | Approvers approve without reading to keep their time low; requesters chase approvers outside the system so the logged wait is short | Sample review of approved requests against policy; reopen rate and security exceptions for approved items; approval step count per item |
| Request volume by catalogue item | Reducing volume by making the catalogue harder to find or by discouraging requests; reclassifying requests as incidents or as "general inquiries" | User satisfaction for the catalogue; share of contacts classified as "other"; adoption data for the service (see topic 6.3, Service adoption and catalogue metrics) |
| Automation share | Automating the trivial items to raise the percentage; counting a scripted request that a person still checks by hand as automated; hiding manual steps in a separate ticket | Share weighted by request volume and by hands-on time removed; failed automation and fallback-to-manual rate; sample of "automated" requests traced end to end |
| Request reopen rate | Discouraging reopening by making it hard; telling users to open a new request, which resets the counter | Repeat requests from the same user for the same item within the window; user satisfaction by item; reopening allowed from the notification |

A healthy reading looks like this. Median and 95th percentile fall together, or the 95th percentile falls while the median holds. The oldest open request is not much older than the 95th percentile of fulfilled ones. Reopen rate and satisfaction stay flat or improve while speed improves. Automation share rises on the items that matter by volume, and volume itself changes for reasons the team can explain. If one number improves sharply while its guardrail drifts the other way, go and look at the underlying requests.

## Trade-offs: pros and cons

| Choice | Advantages | Disadvantages |
| --- | --- | --- |
| Per-item measurement | Targets fit the work; shows where redesign pays | More data to maintain; small items have few data points |
| Median and 95th percentile instead of the mean | Describes what users live through; resists outliers | Harder to explain to executives used to one number; unstable for low-volume items |
| Pausing the clock when waiting for the user | Fair to the team when the user causes the delay | Easily abused; hides the effect of unclear forms and poor communication |
| Counting automation share | Makes progress on automation visible and ties it to cost | Rewards easy automations; says nothing about quality unless paired with failure rate |
| Measuring from user submission to user confirmation | Matches the customer's experience | Depends on user confirmation, which is often missing; needs a default rule |
| Strict separation of requests from incidents | Cleaner data and better targets | Takes intake discipline and arguments about edge cases |

The central trade-off is between a clean number and a fair one. A strict clock that never pauses is simple and hard to game, yet it penalises the team when the user is slow. A flexible clock is fairer yet needs audit. Most teams do well to start strict, add one explicit paused state with a reason, and report the paused share openly.

## Questions to discuss with your team

**1. Which three catalogue items cause the most waiting for our users, and how do we know?**
Bring the per-item table of volume, median, and 95th percentile fulfilment time. Ask the group to pick items by total waiting (volume times typical wait), not by how annoying they feel. Compare the answer with people's first instinct. The facilitator should note where data and instinct differ.

**2. When does our clock start and stop, and would a user agree?**
Pick one common item and walk its journey as the user sees it, from the first click to the moment they can use the result. Mark where our ticket status says "done" and where the user would say "done". Any gap between the two is invisible waiting. Agree on one change to the stop event, and write it in the metric register.

**3. How much of our elapsed time is people working, and how much is waiting?**
Sample ten fulfilled requests for one item and split each into hands-on, approval, and waiting-for-user time. Show the result as a stacked bar. Ask what would have to be true for the waiting to halve. This question usually moves the room from "we need more staff" to "we need fewer handoffs".

**4. Which approvals could be replaced by a pre-agreed rule?**
List the approvals for the top items and the policy reason for each. Where nobody can remember the last decline, the approval may be a ritual.

**5. If we automated the next catalogue item, would the number go up for the right reason?**
Discuss how automation share can rise through easy or low-volume items while users see no difference. Ask what the team would measure to confirm that an automation helped: hands-on time removed, failure rate, reopen rate, and satisfaction. Decide which item to automate next using volume and hands-on time, not ease alone.

**6. What would we do if a number on this page got worse, and who would be blamed?**
Run the thought experiment openly. Ask what the team would be tempted to change in the data before changing the service. Agree that the first response to a worsening number is to look at the requests behind it.

## Four perspectives

### Product and delivery teams

Product teams generate requests about their own services: access to environments, new pipelines, test data, licence keys. Long fulfilment times for these show up as idle work in the team's own flow, so the measure belongs on their board as a blocked state. Teams that own a service should publish their own request items and targets, and treat repeated requests as backlog candidates (see topic 2.6, Backlog and refinement metrics). Where a request is really a missing platform capability, the repeated demand is the case for building it.

### Service and operations teams

For the people fulfilling requests, the per-item table is a map of where effort goes. They know which steps are manual, which approvals stall, and which forms produce vague input. They should own the request models, the automation backlog, and the monthly review, and they should be the first audience for the data. The numbers describe the queue and the process, so make it explicit that no one is ranked and that variation between people mostly reflects the mix of requests they pick up.

### Leadership and governance

Leaders need a short view: median and 95th percentile for the main items, the share fulfilled within target, the oldest open requests, and the trend in automation share and cost per request (see topic 7.5, Service cost and unit economics). The governance task is to ask what changed, not who is slow. Leaders also approve the policy side of approvals, so they hold the lever that most reduces waiting.

### Customers and users

Users care about three things: how long, how predictable, and how much effort. They rarely care about internal states. Show them a plain target per item ("laptops in five working days"), tell them where their request is, and ask them to confirm delivery. Collect a one-question satisfaction signal on closure and read the comments.

## In practice: a service management example

A regional university's IT department (a fictional organisation) runs a service desk and a small platform team. The numbers below are illustrative, not from any real organisation.

At the monthly review the team looks at the per-item table. Across all requests, the average fulfilment time is 3.1 working days, which looks acceptable and has barely moved for a year. By item, the picture is different. "Shared drive access" has a median of 0.4 days and a 95th percentile of 2 days. "Departmental software licence" has a median of 2 days and a 95th percentile of 11 days. "New starter laptop" has a median of 6 days and a 95th percentile of 15 days. The top three items by volume are shared drive access, licence requests, and new starter laptops, at illustrative shares of 32, 21, and 9 percent of all requests.

The team samples ten laptop requests and splits the time. Illustrative result: about 0.5 days of hands-on work, 2.5 days waiting for a line manager's approval, 1.5 days waiting for stock confirmation, and the rest in a courier queue. The approval wait is the largest piece.

The decision follows from the data. The team proposes, with the finance owner and the security owner, that laptops in the standard catalogue be pre-approved when the new starter's role is confirmed by human resources, with the manager notified instead of asked. They also connect the stock check to the inventory system. They set the experiment for one quarter and agree what would count as success: the 95th percentile for laptops falls, and the reopen rate and satisfaction score stay level.

A gaming risk appears in the second month. The median for licences drops sharply, from 2 days to under 1. The review notices that the "waiting for user" paused-time share for the item has jumped from an illustrative 5 percent to 40 percent, and the reopen rate has risen. A sample shows that agents were pausing requests with a generic message the moment a licence needed any check, which stopped the clock. The team does not blame the agents. They see that the target made pausing attractive and that the pause reason field was free text. They change the pause reason to a short list, require a specific question to the user, and add paused-time share as a standing column next to the median. The licence median returns to near its earlier level, the reopen rate falls, and the team uses the saved discussion time to redesign the licence form, which was producing the unclear requests.

After the quarter (illustrative), the laptop 95th percentile falls from 15 to 9 days and the automation share for shared drive access reaches 70 percent. The team logs both changes and picks the licence form as the next experiment.

## Agile, AI, automation, and analytics

### Agile

Treat common requests as small products that the team improves continuously with the people who use them. The caution is that a fulfilment time target can lead to closing requests early or splitting them, so pair it with request reopen rate.

### AI

AI can draft answers, fill forms, and route requests, and may complete some requests with no person involved. Pair automation share with request reopen rate and with the share of AI-handled requests that needed a person afterward. The caution is that an AI that misreads a request can create the wrong access or order, so approval rules still apply.

### Automation

Automate approvals, provisioning, and status updates for standard requests, and measure the automation on failures and manual rework. Show approval wait time separately, since it is often the longest wait. The caution is that automation without clear ownership leaves failed requests in a queue nobody watches.

### Analytics

Show fulfilment time as a distribution by catalogue item and include the oldest open request. The decision informed is which request to redesign first. The caution is that mixing simple and complex items in one average hides both.

## Sector lens

**Startup.** A startup has few request types and no formal catalogue, and the same people handle requests and build the product. Measure the three or four requests that block new joiners, such as accounts and equipment, and track the oldest open request. Automate onboarding early, because every hire repeats it.

**Small business.** A small business often relies on one IT person or an external provider. Use a simple shared board with a column for each state and track request age and volume by type. Ask the provider for the monthly volume by item and the oldest open request.

**Enterprise.** An enterprise has hundreds of catalogue items, many fulfilment groups, and layered approvals. Concentrate on the top items by volume and on the longest-waiting items by total wait. Standardise the clock definition across fulfilment groups before comparing them, and report cross-group handoffs separately (see topic 9.3, Collaboration and handoff metrics). Supplier fulfilment times belong in the same view, measured from the customer's request, not the supplier's receipt.

**Government and public sector.** Public bodies add mandatory approvals, procurement rules, and records obligations, so some wait time is policy and should be labelled as such rather than counted as delay to remove. Publish targets per item in plain language where service commitments are public. Report in a way that a regulator or an oversight body can reproduce, with the definitions written down.

## Business case: motivations, ROI, and TCO

Requests are a large and repetitive share of the work that reaches a service desk, so even modest redesign has a wide effect. The main motivations are shorter and more predictable waits for users, lower handling effort per request, fewer repeat contacts, and capacity released for problem and improvement work.

The cost side is mostly one-off and modest. Defining the catalogue items, agreeing the clocks, and making sure the tool records the needed states is a few days of work per group, plus a small ongoing effort to keep the pipeline correct (see topic 1.5, Data sources and instrumentation). Automation has its own build and maintenance cost, which includes monitoring the automations, handling failures, and updating them when the target systems change. Count that in the total cost of ownership beyond the licence or the build time.

The return should be estimated from your own data and not from a general benchmark. For one item, multiply monthly volume by hands-on time saved and by the loaded cost of the time, then subtract the build and run cost of the change. Add the value of the waiting time removed for users, using a method you can defend, and show it separately because it is an estimate of a different kind. No figure in this topic is a benchmark, and the example numbers are illustrative. Link the business case to unit cost per request where the finance data exists (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **One blended average for all requests.** It hides both the quick wins and the long tail. Report per item, with a median and a 95th percentile.
- **Closing the ticket and calling it delivered.** The user may still have nothing. Define delivery from the user's side and ask for confirmation.
- **Free-form pause states.** A "waiting" status with no reason lets the clock be stopped for any cause. Use a short list of reasons and report the paused share.
- **Counting automation by item count.** Ten automated rare items can lift the percentage while helping nobody. Weight by volume and hands-on time.
- **Ranking agents by requests closed.** It rewards cherry-picking easy tickets and punishes people who take hard ones. Report at team and item level only.
- **Hiding demand to look efficient.** Making the catalogue hard to use lowers volume and raises frustration. Pair volume with satisfaction and adoption data.
- **Treating approvals as untouchable.** Approvals are often the biggest delay and are rarely reviewed. Ask what each one protects and whether a rule can do the job.
- **Mixing requests with incidents.** It distorts both sets of numbers. Classify at intake and sample the classification.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Definitions and clocks | Requests are counted as tickets; the end of the clock is whatever "closed" means | Some teams define start and stop per item; definitions differ | One written clock definition per catalogue item, shared across teams | Definitions reviewed on a cadence and changes logged with reasons | Definitions follow the customer's view across suppliers and are revised when they stop informing decisions |
| Data and reporting | Counts pulled by hand from the tool | Reports for some items from the ITSM tool; mean times | Median and 95th percentile per item from one data source | Trends, backlog age, and paused-time share reviewed with their guardrails | Fulfilment data from internal teams and suppliers combined and linked to user outcomes |
| Demand and automation | Requests handled one by one; no view of repeat demand | Top items identified informally; a few scripts | Request models documented for top items; automation backlog ranked by volume and hands-on time | Automation share and failure rate tracked; approvals redesigned on evidence | Demand, self-service, and automation planned together across the organisation and adapted continually |
| Use in improvement | Numbers are reported upward, not used | Occasional fixes after complaints | Monthly review by the team that does the work | Funded improvements tied to per-item results | Improvement ideas arrive from teams, users, and suppliers, and results feed back into catalogue design |

## Checklist

- [ ] Every catalogue item in scope has an owner, a one-line definition of "delivered", and a stated target.
- [ ] The start and stop events of the fulfilment clock are written down for each item.
- [ ] Waiting for the user is a separate state with a short list of reasons, and paused time is reported.
- [ ] Reports show the median and the 95th percentile per item, with the number of requests behind each.
- [ ] The oldest open requests are visible to the team every week.
- [ ] Hands-on, approval, and waiting time have been sampled for the top items.
- [ ] Volume by item is reviewed monthly and compared with adoption or satisfaction data.
- [ ] Automation share is weighted by volume and paired with failure and fallback rates.
- [ ] Each speed metric is paired with the reopen rate and a user satisfaction signal.
- [ ] Requests, incidents, and changes are classified at intake, and the classification is sampled.
- [ ] No report ranks individual agents.

## AI prompts

**Draft a request model and clock definition for one catalogue item.**

```text
I am defining the measurement for this catalogue item: [catalogue item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfilment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Break elapsed time into hands-on and waiting time.**

```text
Here is a sample of [number] fulfilled requests for [catalogue item] with state
change times: [paste anonymised state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Rank automation candidates.**

```text
Here is a table of catalogue items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Review a fulfillment dashboard for gaming risk.**

```text
This is our request fulfilment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the definition, the gaming vector, and the guardrail for a request metric, and the neighbouring topics that pair with it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that edits to this topic keep the template, the clocks, and the guardrail pairings intact.

## Key takeaways

- Measure fulfilment per catalogue item, from the user's submission to the user's confirmation, and report the median and a high percentile.
- Most elapsed time is waiting, so split hands-on, approval, and waiting-for-user time before deciding what to fix.
- Read volume by item as a message from users, and automate the frequent and stable items first.
- Pair every speed number with the reopen rate and a satisfaction signal, and report paused time openly.
- Describe the queue and the process, never the person.

## References and further reading

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
