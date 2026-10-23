# Hardware asset lifecycle metrics

**Devices are the daily tools of motivated people and a stream of cost, risk, and waste, so plan refresh as a steady flow instead of a periodic lurch, measure age and failure from your own data, and treat secure disposal and reuse as part of the job.**

## Overview and motivation

Behind every service are physical things: laptops, phones, servers, network equipment, printers, and the cables and racks that hold them together. Hardware has a lifecycle that software does not. It is bought, shipped, imaged, handed out, repaired, moved, retired, wiped, and recycled, and each step has a cost and a risk. A laptop that fails on a client call costs more than the laptop. A retired server that leaves the building with data on its disks costs far more than its resale value. A drawer of unused phones is capital that is doing nothing.

The agile aim of building projects around motivated individuals, with the environment and support they need, applies directly. People cannot do their best work on a device that is slow, failing, or missing. The ITIL tradition contributes the lifecycle view and the records that go with it, covered in the earlier topic on IT asset management (see topic 7.1, IT asset management metrics). This topic adds the measures specific to physical equipment: how old it is, how often it fails, how well it is used, and how it leaves.

Hardware planning is often done in large cycles: replace everything every few years, in one big purchase, then live with the consequences. A steadier alternative, in the spirit of continuous delivery, is to refresh a fraction of the estate continuously. That smooths spending, spreads the workload of imaging and handover, and lets you learn from each batch before buying the next. It also means you need data on age and failure to decide when each device should go.

Three ideas organise the measures.

- **Age and failure.** The [failure rate](https://en.wikipedia.org/wiki/Failure_rate) of a device population changes over its life, and [mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) is a common summary for repairable items. Averages hide a lot: a batch with a faulty component may fail early while the rest are fine. Look at failure by model, batch, and age band, and use your own history, not manufacturers' figures, to plan.
- **Utilisation.** A device that nobody uses is waste, and a device that is overloaded is a source of friction. Measure whether equipment is used and whether it fits the work.
- **Responsible exit.** Retired equipment may hold sensitive data, contain valuable and hazardous materials, and add to electronic waste. [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste) is a growing environmental concern, and many jurisdictions regulate how it must be handled. Secure [data erasure](https://en.wikipedia.org/wiki/Data_erasure) and certified reuse or recycling are the end of the lifecycle, not an afterthought. A [circular economy](https://en.wikipedia.org/wiki/Circular_economy) approach keeps products and materials in use for as long as possible.

Hardware metrics are exposed to a familiar distortion. A team rewarded for a low average device age may refresh devices that are fine. A team rewarded for low spending may stretch lives until failures disrupt people. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies, so each measure is paired with a check that people and the planet are better off, not just the number (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Plan a steady flow.** Refresh a share of the estate each period, and learn from each batch.
- **Decide by evidence.** Use your own failure, age, and use data to choose when to replace.
- **Look at the distribution.** Averages hide the old, failing, and idle tail.
- **Count total cost.** Purchase price is one part of the cost of a device over its life (see topic 7.5, Service cost and unit economics).
- **Protect data to the end.** A device is not retired until its data is gone and the evidence is recorded.
- **Prefer reuse and repair.** Keep equipment in service as long as it serves people well.
- **Treat equipment as part of the working environment.** People need devices that work.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Age profile | Distribution of device age by class, and share beyond the planned life | median age and 85th percentile age; share of devices older than the planned life for the class | years; percent | Asset register purchase and deployment dates | IT asset management; capacity and performance management | Technical health review | Quarterly |
| Refresh on-time rate | Share of devices reaching planned replacement that were replaced within the planned window | devices replaced within the window / devices that reached planned replacement in the period | percent | Asset register and refresh plan | IT asset management; service request management | Planned maintenance of the working environment | Quarterly |
| Failure rate by model | Failures per 100 devices per year, by model and age band | hardware failures in the period / average devices in service, scaled to a year, times 100 | failures per 100 per year | Incident and repair records joined to the register | Incident management; IT asset management | Defects in the working environment | Quarterly |
| Idle device share | Share of issued devices with no activity in a set period | devices with no sign-in or network activity in 60 days / devices issued | percent | Endpoint management logs, aggregated by class | IT asset management; financial management | Waste reduction | Monthly |
| Replacement lead time | Time to replace a failed or lost device with a working one | median and 85th percentile of hours or days from report to the user having a working device | days | Incident and request records | Incident management; service request management | Time to unblock a team member | Monthly |
| Secure disposal completion | Share of retired devices with recorded evidence of data erasure or destruction | retired devices with evidence of erasure or destruction / devices retired | percent | Disposal records and wipe certificates | Information security management; IT asset management | Definition of done for retiring equipment | Monthly |
| Reuse and recycling rate | Share of retired devices that were reused, refurbished, or recycled through an approved channel | devices reused, refurbished, or recycled through an approved channel / devices retired | percent | Disposal and partner records | IT asset management; supplier management | Sustainability goal in planning | Quarterly |

Define the device classes (for example standard laptop, developer workstation, mobile phone, server, network switch), each with its own planned life. Failure rate counts hardware faults only, and excludes software faults, user damage coded separately, and loss. The clock for replacement lead time starts at the report and stops when the user confirms a working device, not when one is dispatched. Idle device share excludes devices that are intentionally spare, which are counted as a separate class.

## Recommendations

### Plan the flow

**1. Set a planned life for each class, and treat it as a hypothesis.** Start from the vendor's warranty and your own experience, and revise as the data arrives. A planned life of a few years for laptops, longer for network equipment, and shorter for heavily used devices is typical, but the right figure for your estate comes from your own failure and use data. Write the rationale in the register.

**2. Refresh continuously in small batches.** Replace a steady share of devices each month or quarter, ordered by age, failure history, and need. Small batches smooth cost, spread the imaging and handover work, and let you test a new model with a few users before committing. A single large refresh every few years concentrates risk and effort.

**3. Hold a modest buffer of spares.** A small pool of ready devices shortens replacement lead time for failures, losses, and new starters. Size the buffer from your own failure and hiring history, and review it quarterly. Count spares as their own class so they do not distort utilisation.

**4. Plan with finance, not at them.** Agree how devices are capitalised and depreciated, and how a steady refresh shows in the budget. [Depreciation](https://en.wikipedia.org/wiki/Depreciation) rules affect when a replacement is cheapest on paper, and they should not drive replacement of devices that still serve people well. Keep a shared view of the plan and its assumptions.

### Learn from your own data

**5. Study failure by model, batch, and age.** Join repair and incident records to the register and look at failures per 100 devices per year by model and age band. Look for batches that fail early, models that fail in a particular way, and the age at which failures begin to rise. Use the findings to choose models and to time replacement. Be cautious about small samples, and say when a model has too few devices to judge (see topic 1.6, Statistical literacy for service metrics).

**6. Use warranty and repair wisely.** Know what [warranty](https://en.wikipedia.org/wiki/Warranty) covers and for how long, record claims, and compare the cost of repair with replacement. Repair keeps equipment in use and out of the waste stream, and the right to repair parts and information is an active policy topic in several places. Favour models that can be repaired and upgraded when other things are equal.

**7. Measure use to find what is idle and what is strained.** Aggregate activity data by class, and look for devices that are never used and for devices that are consistently maxed out. Idle devices can be reassigned or retired. Strained devices are friction, and users will feel it (see topic 6.4, User and employee experience). Respect privacy: report by class and group, never by person, and use the minimum data.

**8. Track replacement lead time as a service.** Measure how long it takes a person to get a working device after a failure or loss, and include the steps: report, approval, stock, imaging, delivery, and handover. The 85th percentile tells you how bad the unlucky cases are. Fix the slowest step first.

### Manage devices well

**9. Manage devices centrally and consistently.** [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management) and similar tools let you enrol, configure, update, and wipe devices remotely, which reduces manual work and risk. Use them to keep the register accurate, to push updates with care for people's focus, and to support lost-device response.

**10. Make secure disposal a defined process.** Follow a recognised standard for sanitising media, such as the guidance published by the United States National Institute of Standards and Technology, or the equivalent in your jurisdiction. Record the method, date, and the evidence for each device, and use certified partners for destruction and recycling. A disposal step with no evidence is a gap.

**11. Prefer reuse, then recycling.** Where devices still work, redeploy them internally, donate them through an approved partner, or resell them after wiping. Use certified recyclers for the rest. Measure the share of retired devices that go to each channel and the reasons for any that go straight to waste. Regulations on electronic waste vary by jurisdiction and are enforced, so involve your legal and sustainability colleagues.

**12. Review the lifecycle with the people who use it.** Once a quarter, bring finance, security, procurement, the service desk, and a few users together to look at age, failure, lead time, and disposal. Ask what is working and what annoys people. This is continuous collaboration around the working environment, and it keeps the plan realistic.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Age profile | Replacing healthy devices to lower the average; excluding old devices by reclassifying them as spares | Failure rate by age band; idle device share; review of reclassification |
| Refresh on-time rate | Widening the planned window; deferring planned dates by editing the plan | Plan changes logged with reasons; compare with failure and user feedback |
| Failure rate by model | Coding failures as user damage or software faults; delaying repair records | Sample failure coding; compare repair records with incident records |
| Idle device share | Counting scheduled background activity as use; reassigning idle devices to ghost users | Use human sign-in as the activity signal; spot-check assignments |
| Replacement lead time | Stopping the clock at dispatch; closing the request before the user has a working device | Clock ends at user confirmation; survey of recent replacements |
| Secure disposal completion | Recording erasure without evidence; certificates not matched to serial numbers | Match certificates to serial numbers; audit a sample with the disposal partner |
| Reuse and recycling rate | Counting devices sent to a broker with unknown downstream handling as recycled | Require certified partners and downstream reporting; sample audits |

A healthy reading is an age profile with a thin old tail, failure rates that guide purchasing, short replacement times, complete disposal evidence, and a falling share of equipment going to waste.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Fixed-cycle refresh | Predictable budget and simple rules | Replaces devices that are fine; creates a large peak of work |
| Continuous refresh in batches | Smooth cost and workload; learn between batches | Needs good data and discipline |
| Run to failure | Lowest purchase cost | Disrupts people; unplanned cost; security risk of old systems |
| Short planned life | Newer, faster, better supported | Higher cost and more waste |
| Long planned life | Lower cost and less waste | More failures and security exposure at the tail |
| In-house repair and reuse | Keeps devices in use; lower waste | Needs skills and parts |
| Outsourced disposal | Specialist handling | Needs oversight of the downstream chain |

The prose answer is to refresh continuously in small batches, based on age, failure, and need, to repair and reuse where it serves people, and to hold the disposal chain to a standard you can evidence.

## Questions to discuss with your team

**1. What does the age and failure picture of our devices look like, and who has the oldest ones?**
Show the age distribution and the failure rate by band. Look at who holds the oldest devices and whether they are the people who most need reliable equipment. The facilitator should ask what the team would change about the refresh order based on the picture.

**2. How long does it take someone to get a working device after theirs breaks?**
Trace the last three replacements from the report to a working device. Note the waits. Ask which step could be removed or automated. Agree one change and a way to measure the effect.

**3. Which models cause us the most trouble, and how do we know?**
List models with the highest failure or ticket rates. Check whether the sample is large enough to judge. Ask how the findings influence the next purchase. If they do not, decide how to feed them back to procurement.

**4. What would we do if a retired device turned up with data on it?**
Walk through the disposal path and the evidence kept at each step. Ask where the weakest link is and who verifies the downstream partner. Agree a spot check of disposal evidence for the next quarter.

**5. Where is our equipment idle, and why?**
Look at devices with no use in 60 days and at spares. Ask whether they should be reassigned, retired, or kept. The conversation also reveals mismatches between what people were issued and what they need.

**6. What would it take to reuse or repair more of what we retire?**
List the barriers: skills, parts, policy, or partners. Ask what a pilot with one device class would look like and how it would be measured. Include the sustainability and finance perspectives.

## Four perspectives

### Product and delivery teams

Delivery teams depend on reliable machines and test devices, and they feel slow builds and failing laptops directly. They should flag the equipment that slows them, take part in choosing models for their roles, and expect a quick replacement path. Teams that test on physical devices, such as phones, should treat those devices as assets with owners and a refresh plan.

### Service and operations teams

Operations teams run the supply chain: purchase, receive, image, deploy, repair, and dispose. They should keep records current, watch failure patterns, hold a sensible spares pool, and keep disposal evidence. They carry the physical work, and their capacity limits how fast refresh can go.

### Leadership and governance

Leaders want predictable cost, low risk, and a sustainability story. They should fund steady refresh, ask for age and failure data in place of a bare average age, and require disposal evidence. Governance should check that environmental and data protection obligations are met and that the plan is revisited as conditions change.

### Customers and users

Users want a device that works, quickly replaced when it does not. They also own some of the outcome: reporting problems early, returning equipment, and telling IT when they move. Their view of the equipment and the replacement process is the most direct feedback available. Involve them in choosing models for their work.

## In practice: a service management example

A county government's IT department supports 3,800 staff across 40 sites, with a mix of office, field, and shared devices. The numbers below are illustrative.

Every four years the county replaced all laptops in a single procurement, and the last cycle ended with a spike in failures in the year before replacement and months of imaging work in the year of it. The asset manager proposes a steady refresh and builds a picture from the register and repair records. The median laptop age is 3.2 years and the 85th percentile is 5.1 years. Failures per 100 laptops per year rise from about 6 for devices under three years to about 19 for devices over five. One model purchased in a single batch shows 24 failures per 100 per year at two years old, caused by a battery fault. The median replacement lead time is 5 days, with an 85th percentile of 12 days, mostly waiting for imaging. Idle device share is 7 percent, mostly spares and devices of staff on long leave. Of 410 laptops retired last year, 366 have a recorded erasure certificate, a completion rate of 89 percent, and 12 percent went to a recycler without downstream reporting.

The team makes four changes. It moves to a quarterly refresh of about 6 percent of laptops, ordered by age and failure history, with field staff and the oldest devices first. It negotiates with the supplier for the faulty batch under warranty. It holds a spares pool of 2 percent of the estate, preloaded with the standard image, which cuts waiting for imaging. It requires a certificate matched to the serial number for every disposed device, and moves to a recycler that reports on downstream handling. It also starts a small pilot to refurbish and redeploy devices under four years old.

Two quarters later the 85th percentile replacement lead time is 4 days, the over-five-year share of devices has fallen from 22 percent to 13 percent, disposal evidence completion is 99 percent, and the reuse and recycling rate through approved channels is 94 percent. The finance office asks for a single target for average device age, and the asset manager proposes to track the age profile and failure rate together, explaining that a low average age can be bought by replacing healthy devices. The decision is recorded in the decision log, with a review in six months.

## Agile, AI, automation, and analytics

### Agile

Plan refresh as a steady flow and review age and failure data with users regularly. The caution is that a rigid replacement age wastes working devices and strains budgets.

### AI

AI features can raise hardware requirements, for example for local models, which changes refresh timing. Track failure and age from your own data and add a measure of devices that cannot run the tools people need. The caution is that vendor claims about AI-ready hardware should be tested against your own workloads.

### Automation

Automate lifecycle events, such as warranty dates and disposal steps, and measure the automation on missed events. The caution is that automatic wipe and disposal workflows need proof of completion, so audit a sample.

### Analytics

Show the age profile and failure rates by model with counts. The decision informed is how much to refresh each period. The caution is that failure rates for small fleets are noisy, so avoid conclusions from a handful of devices.

## Sector lens

**Startup.** Devices are bought as needed and often by the person who will use them. Keep a simple list with purchase dates, wipe devices on departure, and avoid over-buying. Use a managed enrolment tool early, since it is cheaper than retrofitting later.

**Small business.** The cost of a failed device falls on a few people. Keep one or two spares, record warranty dates, and have a routine for wiping and disposal. Local recyclers and refurbishers can be good partners. A three-line disposal checklist beats none.

**Enterprise.** Scale makes batch behaviour and supplier management important. Use failure data to negotiate with suppliers, standardise a few models per class, and run continuous refresh with logistics support. Align with sustainability reporting, since hardware often dominates the footprint of IT.

**Government and public sector.** Procurement rules, records retention, and strict data protection shape the lifecycle. Document sanitisation to a recognised standard, keep disposal evidence for the required period, and consider public commitments on sustainability and repair. Public bodies may be required to report e-waste (see topic 8.3, Compliance and audit metrics).

## Business case: motivations, ROI, and TCO

The costs are the effort to join register, repair, and endpoint data; some tooling for device management if not already present; the spares pool; and the process work of disposal with evidence. The savings and benefits show up in fewer disruptive failures, a smoother budget, less wasted equipment, and lower risk of a data incident.

Build the case from your own data. Compare the cost of running a device past its planned life, including the support effort and the lost working time per failure, with the cost of replacing it earlier. Compare the cost of the spares pool with the saved days of lost work per failure. Count the number of retired devices without evidence of erasure, and the cost of a single data incident that would follow. Avoid quoting average device lifetimes or e-waste figures from published sources without checking their method and date. Total cost of ownership brings these parts together (see topic 7.5, Service cost and unit economics), and the full [total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership) of a device includes purchase, support, energy, disruption, and disposal.

## Anti-patterns and pitfalls

- **Replacing everything on a calendar.** It wastes working devices and creates a workload spike. Use age, failure, and need.
- **Running to failure.** The unplanned cost and disruption exceed the saving. Watch the age tail.
- **Using the average age as a target.** It can be met by replacing healthy devices. Show the profile and failure rate.
- **Trusting manufacturers' reliability numbers.** Your usage differs. Use your own failure data.
- **Disposing without evidence.** An unrecorded wipe is a risk you cannot show you managed.
- **Sending devices to the cheapest recycler.** Downstream handling matters. Use certified partners.
- **Tracking people through their devices.** Report by class and group, and never by individual.
- **Ignoring repair and reuse.** Keeping equipment in service is cheaper and kinder to the environment.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Planning | Buy when it breaks | Periodic refresh by calendar | Planned life per class; steady refresh in batches | Refresh timed by age, failure, and need; spares sized from data | Refresh coordinated with suppliers, finance, and sustainability goals across sites |
| Learning from data | No failure records | Repair records kept | Failure rate by model and age tracked | Findings change purchasing and timing; lead time managed | Failure and use data shared with suppliers to improve design and terms |
| Exit | Devices disappear | Informal wiping | Disposal process with evidence for every device | Evidence audited; reuse and recycling tracked | Circular practices with certified partners and public reporting |

## Checklist

- [ ] Device classes and planned lives are defined, with rationale recorded.
- [ ] A steady refresh plan exists and is reviewed with finance.
- [ ] Age profile, failure rate by model, and replacement lead time are reported.
- [ ] A spares pool is sized from failure and hiring data.
- [ ] Idle devices are identified by class, with privacy rules in place.
- [ ] Warranty claims and repairs are recorded and used in purchase decisions.
- [ ] Every retired device has a recorded sanitisation method and evidence.
- [ ] Disposal partners are certified and report downstream handling.
- [ ] Reuse and recycling rates are tracked.
- [ ] A quarterly review includes finance, security, procurement, the service desk, and users.

## AI prompts

**Analyse failure data by model and age.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Design a continuous refresh plan.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Review a disposal process.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitisation, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Reduce replacement lead time.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrolment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a hardware lifecycle metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a hardware metric entry carries its gaming vector, guardrail, and evidence rule.

## Key takeaways

- Refresh a steady share of devices continuously, using your own age, failure, and use data.
- Look at the age distribution and failure by model, not the average.
- Keep replacement quick with a spares pool and a short, measured path.
- Treat secure disposal with evidence as the end of the lifecycle, and prefer repair, reuse, and certified recycling.
- Report by device class and group, and never track individuals through their equipment.
- Review the lifecycle with finance, security, procurement, and users together.

## References and further reading

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
