# IT asset management metrics

**You cannot support, secure, or pay sensibly for what you cannot find, so measure how accurate, complete, and current your asset records are, and build the habit of recording assets as a by-product of everyday work instead of a yearly clean-up.**

## Overview and motivation

Every service rests on things: laptops, servers, licences, cloud accounts, network devices, and the data and contracts attached to them. [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) is the set of business practices that join financial, contractual, and inventory functions to support lifecycle management and strategic decision-making for the IT environment. It answers questions that other practices depend on. What do we own? Where is it? Who is responsible for it? What does it cost? When must it be renewed, patched, or replaced?

Continuous delivery and ITIL meet awkwardly on this ground. Teams that deliver software continuously create and destroy infrastructure all the time: containers, virtual machines, test environments, and cloud accounts appear in minutes. A quarterly spreadsheet cannot keep up. ITAM from the ITIL tradition insists on records, owners, and lifecycles, and that insistence is right, because unmanaged assets are where security gaps, wasted money, and compliance failures grow. The agile contribution is continuous collaboration across procurement, finance, security, and operations, and the practical habit of recording assets automatically as they are created, through pipelines and infrastructure as code, so that the record is a by-product of the work.

Three terms recur in this topic.

- **Asset:** an item of value to the organization that is managed through a lifecycle. In ITAM this includes hardware, software, cloud resources, subscriptions, and sometimes data.
- **Asset record:** the entry that describes an asset: what it is, who owns it, where it is, what state it is in, what it costs, and what it is linked to.
- **Lifecycle:** the stages an asset passes through, typically requested, procured, received, deployed, in use, maintained, retired, and disposed of. [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle) thinking applies to each class of asset, with different stages for a laptop and a cloud subscription.

ITAM overlaps with configuration management, which tracks the relationships between components so that you can understand the impact of change, and the next topics take software, hardware, and configuration in turn (see topic 7.2, Software asset and licence metrics, topic 7.3, Hardware asset lifecycle metrics, and topic 7.4, Configuration and CMDB quality metrics). The difference is one of purpose: asset management emphasizes ownership, cost, and lifecycle, while configuration management emphasizes structure and dependency. The same inventory often feeds both.

The standard that most ITAM programmes cite is ISO/IEC 19770, a family of standards for IT asset management systems. Cite it by name and scope, and read it from the standards body before relying on any detail. This topic does not reproduce its text.

Asset metrics are easy to turn into targets, and the targets are easy to meet on paper. An inventory can show 100 percent accuracy because it records only what was already known. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies: measure accuracy against independent evidence, and treat a perfect number as a reason to look harder (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Record at the moment of change.** Assets should enter and leave the record as part of the work that creates or removes them.
- **Measure against independent evidence.** Accuracy means agreement with reality, checked by a method other than the record itself.
- **Every asset has an owner.** An asset that nobody owns will not be patched, paid for sensibly, or retired.
- **Keep the record as small as it can be.** Capture the fields that decisions need, and no more.
- **Combine sources.** Discovery tools, procurement, finance, identity, and cloud billing each see part of the estate.
- **Collaborate across functions.** Procurement, finance, security, and operations share the record and its quality.
- **Treat gaps as information.** An unaccounted asset is a finding to understand, not a failure to hide.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Inventory accuracy | Share of sampled assets whose record matches what is found | sampled assets where the record matches physical or technical evidence on all agreed fields / assets sampled | percent | Audit sample compared with the asset register and discovery data | IT asset management; configuration management | Definition of done includes registering the asset | Quarterly |
| Discovery coverage | Share of expected assets seen by discovery in the period | assets seen by at least one discovery source in the last 30 days / assets in the register that discovery can see | percent | Discovery tool reports joined to the register | IT asset management; monitoring and event management | Infrastructure as code state matches reality | Monthly |
| Reconciliation rate | Share of assets matched across independent sources | assets matched in both register and a second source (for example procurement, identity, or cloud billing) / assets in either source | percent | Register, procurement, identity, cloud billing exports | IT asset management; supplier management | Single source of truth for environments | Monthly |
| Ownerless asset share | Share of assets with no named, valid owner | assets with no owner or an owner who has left / assets in the register | percent | Register joined to the people directory | IT asset management; information security management | Clear ownership of services and components | Monthly |
| Lifecycle stage completeness | Share of assets with a current lifecycle stage and the dates that stage requires | assets with stage and required dates recorded / assets in the register | percent | Register | IT asset management; release and deployment management | Environment lifecycle tracked in the pipeline | Monthly |
| Time to record | Delay between an asset change and its update in the register | median and 85th percentile of hours or days from the change event to the register update | days | Change, procurement, or pipeline events compared with register timestamps | IT asset management; change enablement | Automated registration in the pipeline | Monthly |
| Unaccounted asset rate | Share of expected assets that cannot be located or explained at audit | assets expected but not found, and not explained by an approved disposal / assets expected | percent | Audit results | IT asset management; information security management | Retrospective finding on lost items | Per audit |

State the scope of "asset" for each class. A laptop, a virtual machine, a subscription, and a licence are different, and the record fields and the evidence differ. Time to record starts at the event that created the change, such as goods received, a pipeline run, or a subscription start, and stops when the register reflects it. Exclude assets that are intentionally outside scope, such as short-lived test containers, and list them as an exclusion class in the register.

## Recommendations

### Decide what you are managing

**1. List the classes of asset that matter and why.** Start with the ones that carry cost, risk, or legal obligation: end-user devices, servers and cloud accounts, network equipment, software licences and subscriptions, and critical data stores. For each class, write the decisions the record must support: patching, renewal, audit, refresh, disposal. Skip classes that no decision needs.

**2. Define the minimum fields.** For each class, choose the few fields that the decisions require: identifier, type, owner, location or account, status, acquisition and end dates, cost centre, and links to the service it supports. A short record that is accurate is worth more than a long one that is stale. Record the definition in the metric register.

**3. Assign an owner to every class and every asset.** The class owner designs the record and the process. The asset owner is the person or team accountable for the asset in use. Use a team, not an individual, when an asset is shared, and keep the directory current so that departures do not orphan assets.

### Capture assets as work happens

**4. Register assets in the pipeline.** Where infrastructure is created by code, have the pipeline write to the register on creation and removal. That makes time to record close to zero and makes the register agree with the code. The agile practice of delivering change continuously supports this: if every deployment updates the record, the record is rarely wrong.

**5. Link procurement and the register.** For purchased hardware and software, make the purchase order or subscription creation the trigger for a record, and goods receipt or activation the trigger for a state change. [Inventory management](https://en.wikipedia.org/wiki/Inventory_management) practice for physical goods offers useful patterns for receiving, storing, and issuing items. Where purchases happen outside procurement, such as team credit cards for subscriptions, add a monthly check of expense data.

**6. Use discovery as a check, not as the record.** Discovery tools scan networks and cloud accounts and report what they find. They are good at telling you what exists and poor at telling you who owns it or why. Use them to detect missing and unknown assets and to compare with the register. The step of matching one source against another is a form of [reconciliation](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), the same idea accountants use to compare two sets of records.

**7. Tag and label at creation.** Require an owner and a service tag on every cloud resource and a label on every physical device. [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking) methods such as barcodes and radio-frequency tags help with physical items in warehouses and offices. Untagged resources are findings for the owner's team, handled as a normal part of operations.

### Measure honestly

**8. Audit with a random sample.** Each quarter, draw a random sample of assets from the register and check them against evidence: find the device, inspect the resource, confirm the owner. Then draw a sample the other way, from discovery results and procurement data, and check that each appears in the register. The two directions reveal different gaps. Report accuracy for each class separately.

**9. Watch data quality over time.** The completeness, accuracy, and timeliness of records are aspects of [data quality](https://en.wikipedia.org/wiki/Data_quality). Track the trend per field and per class, and look at which fields drift fastest. Drift in owner and location is normal and tells you where to automate.

**10. Report the gaps.** Show the unaccounted assets, the ownerless share, and the unreconciled items as well as the headline accuracy. A report that hides its exceptions is a report about the report. Name an owner and a date for each class of gap.

### Close the loop

**11. Retire assets as deliberately as you create them.** Disposal needs records too: the date, the method, and for devices that held data, evidence that data was wiped. A [chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody) record shows who handled an asset and when. Retired assets still on the register inflate costs and confuse audits.

**12. Use the record in everyday decisions.** Patching, renewals, security response, and budgeting should read from the register. When people use it, they fix it. When the register is only for audits, it decays. Review the register's use with the teams that depend on it, and fix the fields they complain about first.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Inventory accuracy | Sampling the easy assets; auditing only after a clean-up; counting a match on fewer fields | Random sample drawn by someone outside the team; fixed field list; sample from both directions |
| Discovery coverage | Narrowing "expected assets" to what discovery can see; excluding hard-to-scan networks | Document exclusions; compare with procurement and cloud billing |
| Reconciliation rate | Choosing a second source that is derived from the first; auto-matching on weak keys | Use truly independent sources; spot-check matches by hand |
| Ownerless asset share | Assigning a catch-all team as owner; entering a placeholder person | Count of assets owned by catch-all teams; owner confirmation sample |
| Lifecycle stage completeness | Filling in default dates; setting every asset to "in use" | Compare stage with evidence in the audit; look at the age distribution |
| Time to record | Backdating change events; recording the event time as the record time | Compare with source system timestamps; audit trail on edits |
| Unaccounted asset rate | Writing assets off without approval; reclassifying them as disposed | Disposal approval and evidence rate; compare write-offs with finance records |

A healthy reading is an accuracy figure that stays below 100 percent for honest reasons, with visible gaps that shrink, owners who confirm their assets when asked, and a record that people use to make decisions.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Automated registration | Fast, consistent, low effort | Needs engineering; misses things outside the pipeline |
| Manual registration | Flexible, works for anything | Slow, error-prone, decays |
| Discovery-driven | Finds the unknown | Cannot supply ownership or purpose |
| Procurement-driven | Captures cost and contract | Misses shadow purchases and free tiers |
| Tight control of purchases | Strong record | Slows teams; encourages workarounds |
| Light control with checks | Fast; relies on trust | More gaps to find and fix |
| Large record schema | Rich reporting | Hard to keep accurate |
| Small record schema | Easy to maintain | Limited analysis |

The prose answer is to automate registration where infrastructure is code, use discovery and billing data as independent checks, and keep the record small. Trust teams to create what they need, ask them to tag it, and verify with sampling.

## Questions to discuss with your team

**1. If we had to find every asset tied to our most important service tomorrow, how long would it take?**
Pick a service and trace its assets from the register and from other sources. Time the exercise and note the gaps. The facilitator should record which sources agreed and which did not. The result shows whether the register is a working tool or a document.

**2. Which assets get created without anyone in this room knowing?**
Think of cloud accounts, subscriptions, test environments, and devices bought outside procurement. Ask how these would show up. The conversation finds the leaks. Agree one source of independent evidence to add to reconciliation this quarter.

**3. Who owns the assets we have today, and how do we know they are still around?**
Take a sample of assets and ask the named owners to confirm. Note how many owners have changed roles or left. Decide how the directory and the register will stay in step, for example by an automated check when someone leaves.

**4. How do we audit our own register without grading our own homework?**
Discuss who draws the sample and who checks it. Ask what would happen if the result were poor. The facilitator should explore whether people feel safe reporting a bad number, since an unsafe audit produces good numbers.

**5. What do we record that nobody uses?**
List the fields in the register and ask which decisions use each. Fields with no user are candidates for removal. Fields that are used but unreliable are candidates for automation. Agree two changes.

**6. What happens to an asset between "no longer needed" and "gone"?**
Trace a retired device or a decommissioned service. Who confirms data was wiped? When is the record closed? The gaps in this path are where cost, risk, and audit findings accumulate.

## Four perspectives

### Product and delivery teams

Delivery teams create most of the new assets, and they feel record-keeping as friction unless it is automatic. They should treat the asset record as part of the definition of done for an environment, let pipelines register what they create, and tag resources with owners. They benefit from an accurate record when they need to find costs, patch, or retire an environment.

### Service and operations teams

Operations teams depend on the register for patching, incident response, and capacity. They should reconcile discovery with the register, pursue ownerless assets, and report gaps as findings. They also hold the physical handling: receiving, imaging, storage, and disposal, where chain-of-custody records matter.

### Leadership and governance

Leaders and auditors rely on asset data for cost control, security assurance, and compliance. They should ask for the accuracy method and the gap list, not just the headline, and fund automation of registration. Governance should expect the register to be used in decisions and should treat a reported 100 percent with suspicion.

### Customers and users

Users experience asset management when a device arrives ready, a licence is there when needed, and a lost laptop is handled well. Their feedback on onboarding and equipment is evidence of how the process works in practice (see topic 6.4, User and employee experience). They also have a role: telling IT when equipment moves or leaves.

## In practice: a service management example

A mid-sized logistics company's IT department supports about 2,400 staff and runs a product platform on cloud infrastructure. The numbers below are illustrative.

An internal audit asks for the number of devices and cloud resources the company owns. The register shows 3,100 end-user devices and 1,850 cloud resources. The asset manager decides to test the figures before reporting them. She draws a random sample of 100 devices from the register and finds 87 matching on all four agreed fields, an accuracy of 87 percent. From the other direction, she draws 100 devices from the endpoint management tool and finds 94 in the register. Discovery coverage of the cloud estate is 82 percent, because three accounts created by project teams are not connected to the discovery tool. Reconciling the cloud billing export with the register matches 71 percent of billed resources, and the unmatched ones are mostly untagged test environments. The ownerless asset share is 9 percent, with a third of those owned by people who have left.

The team makes four changes with the product teams and finance. The pipeline templates now register every new environment and require an owner and service tag. The monthly cloud bill is reconciled against the register, with untagged resources reported to account owners. A monthly check compares the people directory with asset owners and sends a list to managers when someone leaves. Goods receipt in the warehouse triggers a register update the same day. They also change how they report: the audit summary shows accuracy from both sample directions, the gap list, and the ownerless share.

After two quarters, accuracy from the register sample is 93 percent, reconciliation of the cloud estate is 90 percent, and the ownerless share is 3 percent. The head of finance asks for a single "inventory accuracy" number for the board. The asset manager gives the figure with the method and the gap list, and declines to report a target of 100 percent, explaining that the aim is to keep the gaps visible and shrinking. The decision is recorded, and the team notes that the lower number from a better method is more useful than the earlier unverified figure.

## Agile, AI, automation, and analytics

### Agile

Record assets as a by-product of everyday work and review accuracy with owners at a regular cadence, instead of a yearly clean-up. The caution is that a target for accuracy can push teams to delete records they cannot confirm.

### AI

AI tools and subscriptions are assets too, and they are often adopted without a record. Include AI services, models, and data sources in discovery, and pair inventory accuracy with the ownerless asset share. The caution is that AI features enabled inside existing products do not show up as new purchases, so ask suppliers what is switched on.

### Automation

Run discovery automatically and reconcile it with purchase and identity records, and measure discovery on coverage and false matches. The caution is that discovery finds what it is pointed at, so audit what it misses.

### Analytics

Report accuracy from a sample audit with the sample size, as well as from tool counts. The decision informed is where to invest in discovery and ownership. The caution is that reconciling two flawed sources can look clean while both are wrong.

## Sector lens

**Startup.** There may be no formal register, only cloud accounts and a few laptops. Keep a simple list with owners, tag cloud resources from the start, and review the list monthly. Avoid buying a platform before you know what questions you need to answer.

**Small business.** A single administrator may handle everything. A spreadsheet with a few fields can work, if someone checks it against purchases twice a year. Pay attention to licences and subscriptions, which are easy to lose track of, and to the disposal of devices that held data.

**Enterprise.** Scale needs automation, clear class owners, and reconciliation across several sources. Expect acquisitions to bring unfamiliar estates, and plan a standard way to bring them under the same record. Align with finance on asset accounting, including how [fixed assets](https://en.wikipedia.org/wiki/Fixed_asset) are capitalized and depreciated, and agree where the IT register and the finance ledger must match.

**Government and public sector.** Public bodies face audit, procurement rules, and records obligations, and often hold sensitive data on devices. Keep evidence for disposal, document chain of custody, and align the register with required asset reporting. Treat the register as part of the evidence for audits (see topic 8.3, Compliance and audit metrics).

## Business case: motivations, ROI, and TCO

The costs include time to design the record, tooling for discovery and reconciliation if you do not have it, engineering effort to register assets in pipelines, and the routine effort of sampling and fixing. Many organizations already own discovery and endpoint tools. A modest team can run a programme, and the ongoing cost is low once registration is automated.

The returns are avoided waste and reduced risk. Accurate records reduce paying for unused subscriptions and resources, speed up incident response and patching because you know what exists, and cut audit effort. Avoid claiming specific percentage savings from published studies. Measure your own baseline: the number of unowned cloud resources and their monthly cost, the time to answer an audit question, and the licences paid for but unused. Count the cost of the risk too: an unknown server is a security exposure, and a lost device with data has a notification cost. The financial treatment of costs is covered later in this part (see topic 7.5, Service cost and unit economics).

## Anti-patterns and pitfalls

- **The annual clean-up.** A big effort once a year decays within weeks. Record continuously and sample every quarter.
- **Auditing only the register.** It proves the register agrees with itself. Sample from independent evidence in both directions.
- **A perfect score.** A 100 percent figure usually means narrow scope or weak evidence. Look at what was excluded.
- **Owner fields filled with a team catch-all.** It looks complete and is useless. Count catch-all ownership as a gap.
- **Too many fields.** People fill them with defaults. Keep the record to what decisions need.
- **Tool first, process later.** A discovery platform without ownership and lifecycle rules produces a bigger mess. Decide the questions first.
- **Penalizing teams for gaps.** They hide assets. Treat gaps as findings and fix the cause.
- **Forgetting disposal.** Retired assets that stay on the register or leave without a wipe record create cost and risk.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Capture | Spreadsheets updated when remembered | Register for main classes, mostly manual | Registration tied to procurement and pipelines | Registration automated; time to record measured | Assets registered across teams and suppliers from one flow of events |
| Accuracy | Unknown | Occasional counts | Quarterly independent sampling in both directions | Accuracy and gaps tracked per class and fed to improvement | Independent checks shared across IT, finance, and security |
| Use | Register used for audits only | Used by a few teams | Patching, renewal, and budgeting read from the register | Use reviewed; fields tuned to decisions | Register drives automated decisions with human oversight |

## Checklist

- [ ] Asset classes and the decisions each record supports are listed.
- [ ] Minimum fields per class are defined and recorded in the metric register.
- [ ] Every class and every asset has a named owner, kept current against the directory.
- [ ] Pipelines register new infrastructure with an owner and a service tag.
- [ ] Procurement and subscription creation trigger asset records.
- [ ] Discovery and billing data are reconciled with the register monthly.
- [ ] A random sample is audited each quarter in both directions.
- [ ] Gap lists with owners and dates are published with accuracy figures.
- [ ] Disposal has a recorded method and evidence of data wiping.
- [ ] Unused fields are removed; the register is used in daily decisions.

## AI prompts

**Design a minimum asset record.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Plan a two-way audit sample.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Analyze a reconciliation result.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Draft a leaver and mover check.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an asset metric before you report it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an asset metric entry carries its gaming vector, guardrail, and independent evidence rule.

## Key takeaways

- Record assets at the moment of change, preferably through pipelines and procurement, so the register is a by-product of work.
- Measure accuracy against independent evidence, sampling in both directions.
- Every asset needs an owner, and ownerless assets are findings.
- Keep the record small and make it useful in daily decisions.
- Report the gaps, not just the headline, and distrust a perfect score.
- Plan disposal as carefully as creation.

## References and further reading

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
