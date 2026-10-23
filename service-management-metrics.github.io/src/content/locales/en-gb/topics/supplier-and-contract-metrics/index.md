# Supplier and contract metrics

**Suppliers are part of your service, so measure what they deliver, how much you depend on them, and whether you could leave, and build the relationship around shared outcomes and regular conversation, not around penalties and surprise.**

## Overview and motivation

Almost no service is built and run by one team alone. Cloud providers host it, vendors supply the software, contractors staff the service desk, a telecommunications company carries the traffic, and a payments partner moves the money. When one of them fails, your users do not distinguish between your failure and theirs. [Vendor management](https://en.wikipedia.org/wiki/Vendor_management) is the discipline of selecting, contracting with, monitoring, and, when necessary, exiting suppliers. ITIL's supplier management practice describes it as ensuring that suppliers and their performance are managed appropriately to support service delivery without gaps.

[Outsourcing](https://en.wikipedia.org/wiki/Outsourcing) moves work to an outside party and does not move accountability: the organisation remains answerable to its customers and regulators. Contracts, therefore, are a means of coordination and risk allocation, not a transfer of responsibility. When many suppliers are involved, [multisourcing](https://en.wikipedia.org/wiki/Multisourcing) and the practice of [service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) coordinate them so that the user sees one service. The measures in this topic describe the health of that web.

Agile values give a useful orientation. The Agile Manifesto states a preference for customer collaboration over contract negotiation. That does not mean ignoring contracts, which allocate real risk and money. It means building relationships in which supplier and customer work on the same outcomes, share information early, and adjust as they learn. Suppliers that are treated as partners tell you about problems sooner. Suppliers who fear penalties hide them. Measurement should support the first pattern.

Four problems recur in supplier measurement.

- **Green reports and unhappy users.** A supplier can meet every contractual service level and still deliver a poor experience, a pattern that the earlier topic on service level agreements calls the watermelon effect (see topic 5.1, SLA, OLA, and XLA metrics). The contract measures what it says, and users experience something wider.
- **Concentration and lock-in.** Depending heavily on one supplier is efficient until it fails or raises its prices. [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) makes change costly, and the cost grows quietly with each integration.
- **Hidden dependencies.** Your suppliers have suppliers. A [supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack) targets a trusted vendor to reach its customers, and a failure in a subcontractor can reach you without any contact from your direct supplier.
- **Exit as an afterthought.** Many contracts are signed with no plan for ending them. An [exit strategy](https://en.wikipedia.org/wiki/Exit_strategy) that has never been tested may not work when needed.

Another consideration is the form of contract. [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting) ties payment to outcomes, and it can align interests when outcomes are clear and measurable. It can also invite gaming when the measures are narrow. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies in both directions: suppliers optimise the measured service level, and buyers optimise their reported savings (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic builds on the records of the previous part, especially software and financial data (see topic 7.2, Software asset and licence metrics, and topic 7.5, Service cost and unit economics), and it prepares for the reporting duties that often fall on public bodies (see topic 8.5, Regulated and government reporting).

## Key principles

- **You remain accountable.** Contracts allocate risk and money, and they do not transfer responsibility to users and regulators.
- **Measure outcomes and experience as well as contract terms.** A green contract report can hide a poor service.
- **Know your dependencies.** Map critical suppliers, their key subcontractors, and the services that rely on them.
- **Plan the exit before you sign.** An untested exit plan is a hope.
- **Collaborate regularly.** Frequent, candid joint reviews beat annual crisis meetings.
- **Share data openly.** Both sides benefit from the same numbers.
- **Differentiate suppliers by criticality.** Spend management effort where failure would hurt most.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Supplier service level attainment | Share of contracted service level measures met by a supplier, paired with an experience measure for the same service | measures met in the period / measures contracted; reported beside the user experience score for the service | percent | Supplier reports, your own monitoring, survey data | Supplier management; service level management | Review of a partner's contribution to goals | Monthly |
| Supplier-attributed incident time | Hours of service impact attributed to a supplier's component or action | sum of impact hours of incidents where a supplier's failure was a confirmed cause | hours | Incident records with cause analysis, supplier incident reports | Incident management; supplier management | Time lost to external blockers | Monthly |
| Contract register coverage | Share of suppliers with a current contract, a named internal owner, and a scheduled review | suppliers with all three / suppliers in scope | percent | Contract register, procurement records | Supplier management; financial management | Clear ownership of external dependencies | Quarterly |
| Due diligence currency | Share of critical suppliers whose risk assessment is within its review cycle | critical suppliers assessed within the cycle / critical suppliers | percent | Supplier risk assessments | Supplier management; risk management; information security management | Regular review of risks | Quarterly |
| Exit readiness | Share of critical suppliers with a documented exit plan that has been tested within the agreed period | critical suppliers with a tested exit plan / critical suppliers | percent | Exit plans and test records | Supplier management; service continuity management | Practiced recovery of a dependency | Annual |
| Concentration | Share of critical services that depend on a single supplier with no tested alternative | critical services with a single-supplier dependency and no tested alternative / critical services | percent | Dependency map, supplier register | Supplier management; risk management | Avoiding a single point of failure | Quarterly |
| Joint action closure rate | Share of actions agreed in joint reviews with suppliers that were closed by their due date | joint actions closed by date / joint actions due | percent | Review minutes and action tracker | Supplier management; continual improvement | Retrospective actions delivered | Quarterly |

Define criticality in the register, with the criteria, and apply it consistently. A service level measure is "met" as defined in the contract, and the experience measure is the one you choose for the same service. Supplier-attributed incident time counts only confirmed causes, and the attribution method is agreed with the supplier where possible. Exit readiness counts a plan as tested only when a walkthrough or exercise has been recorded in the period.

## Recommendations

### Know your suppliers and what depends on them

**1. Keep a supplier register with owners and criticality.** List every supplier with a contract, what they provide, the internal owner, the contract dates, and the criticality. Include free or informal services that your teams rely on. Criticality is a judgement about the harm if the supplier fails, and it decides how much management attention the relationship gets.

**2. Map the dependency chain for critical services.** For each critical service, list the suppliers it depends on and, where you can, their key subcontractors and shared platforms. Use the configuration records for internal links, and ask suppliers for their critical dependencies (see topic 7.4, Configuration and CMDB quality metrics). The map shows concentration risk and tells you where an outage elsewhere would reach you.

**3. Assess risk proportionately.** Use a short, standard assessment for low-risk suppliers and a deeper one for critical ones, covering security, resilience, financial stability, and compliance. Reassess on a cycle and when something changes. Share the results with the supplier and agree on actions. Standards such as ISO/IEC 27036 give guidance on information security in supplier relationships.

### Write contracts for outcomes and cooperation

**4. Define service levels that reflect what users experience.** Include contracted measures that relate to user outcomes, such as the speed of the user-facing action, as well as component availability. Ask for the data to check them yourself. A [service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement) with measures that nobody can verify, or that do not match what users feel, produces the watermelon effect.

**5. Prefer shared goals to penalties alone.** Credits for missed targets are common and have a place, but a contract built mainly on penalties makes the relationship adversarial and the data less honest. Where possible, include shared objectives, regular joint reviews, and gain-sharing for improvements. Review the incentive for the side effects it might cause.

**6. Plan the exit in the contract.** Include data export in usable formats, support during transition, reasonable notice, and clarity on intellectual property and ownership of configurations. Ask what leaving would cost and write that down. A contract with no exit terms leaves you to negotiate under pressure.

### Manage the relationship

**7. Hold regular joint reviews.** Meet at a cadence that suits the criticality, with a short standard agenda: results, incidents, risks, upcoming changes, and actions. Share your own measures with the supplier and ask for theirs. Track actions and closure. Treat the meeting as a working session between partners, and invite the people who do the work.

**8. Share incident information quickly and openly.** Agree how and how fast each side will notify the other, and review significant incidents jointly in a blameless way (see topic 3.4, Major incident metrics). Measure supplier-attributed incident time to see where the biggest impact is, and use it in the conversation, not as a stick.

**9. Combine contract data with user experience.** For each critical supplier service, put contracted measures beside satisfaction or effort measures from users (see topic 6.2, Experience level agreements). Disagreement between the two is the starting point for a discussion.

**10. Coordinate suppliers into one service.** Where several suppliers contribute to one service, agree who owns the end-to-end result, how hand-offs work, and who communicates with users. SIAM practices formalise this. Measure hand-off delay and repeated escalations between suppliers (see topic 9.3, Collaboration and handoff metrics).

### Reduce concentration and prepare to leave

**11. Measure concentration and decide deliberately.** Report the share of critical services that depend on a single supplier with no tested alternative. Concentration is sometimes the right choice, because it brings simplicity and negotiating weight. Make it a decision with an owner, a cost, and a review date, and not an accident.

**12. Test the exit.** For critical suppliers, walk through the exit plan at least once in a defined period: can you export the data, does the alternative exist, how long would it take, what would break? A tabletop exercise reveals gaps cheaply. Record results and fix the gaps, and update the plan when the architecture changes.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Supplier service level attainment | Supplier excludes events from measurement; clock pauses; narrow definitions | Own monitoring; experience measure; audit of exclusions |
| Supplier-attributed incident time | Disputing attribution; classifying supplier faults as customer-side | Joint cause review; neutral reviewer for disputes; track disputed share |
| Contract register coverage | Naming owners who do not know; listing contracts without dates | Owner confirmation; check review meetings are held |
| Due diligence currency | Assessments by questionnaire only; suppliers self-certify | Evidence requirement for critical suppliers; sample verification |
| Exit readiness | Writing a plan and calling it tested; exercises without real steps | Record what was exercised; independent review of exercise |
| Concentration | Splitting one supplier into several legal entities on paper | Dependency map to the ultimate provider; review shared platforms |
| Joint action closure rate | Setting easy actions; closing without effect | Review action quality; check that the intended issue improved |

A healthy reading is a supplier register with active owners, service levels that match user experience, incidents discussed openly, concentration chosen deliberately, and exit plans that have been exercised.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Single supplier | Simplicity, negotiating weight, integration | Concentration risk, lock-in |
| Multiple suppliers | Resilience, choice | Integration cost, coordination burden |
| Penalty-heavy contract | Clear remedies | Adversarial; hides problems |
| Partnership with shared goals | Honest data, faster learning | Needs trust and maturity; less clear remedies |
| Outcome-based payment | Aligns incentives | Hard to define and measure outcomes; gaming |
| Input-based payment | Simple, predictable | Rewards effort, not results |
| Frequent joint reviews | Early warning | Time cost |
| Annual reviews only | Low cost | Slow to catch problems |

The prose answer is to keep contract remedies for the serious cases, build everyday relationships around shared outcomes and open data, and choose concentration on purpose. Match the intensity of management to the criticality of the supplier.

## Questions to discuss with your team

**1. Which supplier failure would hurt our users most, and what is our plan?**
Name the top three dependencies. For each, ask what would happen in a prolonged outage and what the plan is. The facilitator should look for dependencies with no plan, no owner, or no tested alternative. Agree one to work on first.

**2. Where does a green contract report disagree with what users tell us?**
Take one supplier service and compare contract measures with user feedback. Ask which is more reliable and why. The conversation often finds a service level that measures the wrong thing. Agree to raise it at the next joint review.

**3. Who in the team owns each critical supplier relationship, and how often do they meet?**
Check the register. If an owner has not met the supplier in months, ask why. Agree a cadence and a standard agenda for the most critical ones.

**4. What would it take to leave our largest supplier?**
Estimate the time, cost, and risk of exit. Ask which data, integrations, and skills tie you in. Decide whether the dependence is a deliberate choice and what would change it.

**5. How do we find out about a supplier's incident, and how fast?**
Review the last two supplier incidents and the time from their start to your knowledge. Check the notification terms. Agree improvements, such as shared status feeds or a named contact.

**6. What do we share with our suppliers, and what do they share with us?**
List the data each side provides. Discuss what extra sharing would help, such as forecasts of demand or advance notice of changes. Consider confidentiality, and agree one exchange to start.

## Four perspectives

### Product and delivery teams

Delivery teams depend on suppliers for platforms, components, and services, and they feel supplier changes directly. They should keep dependencies visible in design, give suppliers early notice of demand changes, and take part in joint reviews. They can build resilience into their services, for example with fallbacks, so that one supplier failure does not stop everything.

### Service and operations teams

Operations teams manage the day-to-day relationship: raising incidents, tracking performance, and coordinating hand-offs. They hold the evidence on supplier-attributed impact and the experience of working with each supplier. They should record attribution carefully, keep notification channels working, and join exit exercises.

### Leadership and governance

Leaders sign contracts and accept the risk. They should ask for criticality, concentration, and exit readiness reports, set expectations for partnership, and avoid choosing suppliers on price alone. Governance should require due diligence proportional to criticality and evidence that exit plans were tested.

### Customers and users

Users experience the combined result of the supplier network. They need clear communication when a supplier problem affects them, and consistent support regardless of which party is at fault. Their feedback is the check on whether supplier performance, as reported, matches reality.

## In practice: a service management example

A regional hospital group's IT department supports clinical systems with about 60 suppliers, including a hosting provider, an electronic records vendor, a network carrier, and a managed service desk. The numbers below are illustrative.

After a long outage of the records system, the board asks how many such dependencies exist. The head of vendor management builds the picture. The supplier register covers 47 of 60 known suppliers with a current contract, an owner, and a review date, a coverage of 78 percent. Due diligence is current for 6 of 14 critical suppliers. Of 22 critical services, 9 depend on a single supplier with no tested alternative, a concentration of 41 percent, and two of those suppliers share the same hosting platform. The managed service desk reports 98 percent service level attainment, while clinical staff satisfaction with the desk is falling, and the monthly report shows that incidents waiting for the supplier's second line are excluded from measured response time. Over the last quarter, supplier-attributed incident time totaled 53 hours, three quarters of it from two suppliers. The exit plan for the records vendor exists on paper and was never exercised.

The head of vendor management agrees changes with the clinical systems owners and the suppliers. Critical suppliers get a quarterly joint review with a shared agenda and data from both sides. The service desk contract is amended to measure time to resolution from the user's point of view, and the supplier agrees to share its queue data. A short experience survey is added beside the contract measures. Due diligence for critical suppliers moves to an annual cycle with evidence requests. The team runs a tabletop exit exercise for the records vendor, which finds that the data export format does not include the audit trail, and that the alternative would take months to prepare. The finding goes into the next contract negotiation. The group also decides which of the nine single-supplier dependencies to accept deliberately, and which to reduce.

A year later, register coverage is 96 percent, due diligence is current for 13 of 14 critical suppliers, and concentration is 27 percent with each remaining case recorded as an accepted decision. Supplier-attributed incident time falls to 22 hours a quarter. The service desk's contract measure and the clinical satisfaction score now move together. The finance director asks for a clause imposing financial penalties for any missed service level across all suppliers. The head of vendor management proposes penalties only for the critical safety-related measures, and shared goals for the rest, explaining that blanket penalties lead suppliers to hide events and to argue over measurement. The decision is recorded, and the contract template is updated.

## Agile, AI, automation, and analytics

### Agile

Build supplier relationships around shared outcomes and regular conversation. The caution is that penalty-driven measures lead to disputes about definitions.

### AI

Suppliers may embed AI in their services, so ask which AI features are used, with what data, and who oversees them, and measure supplier AI disclosure coverage. The caution is that supplier statements about AI should be checked against contract terms.

### Automation

Collect supplier performance data automatically where possible and automate contract date reminders. Measure the automation on missed renewals. The caution is that automated feeds from suppliers use their definitions, so reconcile them.

### Analytics

Report supplier attainment with attribution rules for incidents. The decision informed is whether to renew, renegotiate, or exit. The caution is that concentration and exit readiness are judgements, so document the reasoning.

## Sector lens

**Startup.** Suppliers are mostly cloud and software-as-a-service tools. Keep a list with owners and renewal dates, know what data each holds, and keep an export of critical data. Pick suppliers with clear export paths, because early lock-in is cheap to create and costly to undo.

**Small business.** A few suppliers carry the business, and the owner often manages them directly. Keep contacts and contract terms in one place, ask for status and incident updates, and test restoring from backups held outside the supplier. Reduce dependence on a single person at the supplier.

**Enterprise.** Many suppliers and layers call for a supplier management function, criticality tiers, and standard contract terms for security, resilience, and exit. Use SIAM-style coordination where suppliers must work together. Keep a central dependency map and share it with risk and continuity teams.

**Government and public sector.** Procurement law, competition rules, and transparency requirements shape how suppliers are chosen and managed. Contracts may be long, with public reporting duties and requirements for sovereignty, accessibility, and exit. Document decisions, report supplier performance as required, and plan for re-procurement (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the time of supplier owners and a small coordinating function, a register and dependency data, assessment effort, and joint reviews. Exit exercises cost a few hours to days per critical supplier. Tooling may be as simple as a shared register.

The returns are fewer and shorter supplier-caused incidents, better commercial terms from informed negotiation, avoided lock-in costs, and a quicker, calmer response when a supplier fails. Build the case from your own data: supplier-attributed incident hours and their cost, the cost and time of past supplier transitions, and the difference between contracted service levels and user-reported experience. Avoid citing industry outsourcing failure rates unless you can trace the source and method. Include the cost of keeping a second option warm, and compare it with the exposure it reduces (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Signing and forgetting.** Contracts drift from reality. Hold regular reviews with owners and data.
- **Trusting the supplier's report alone.** It measures what the supplier chooses. Monitor independently and compare with user experience.
- **Penalty-only relationships.** They reduce honesty. Build shared goals alongside remedies.
- **No exit plan.** Leaving becomes a crisis. Write and test the plan before it is needed.
- **Hidden concentration.** Several suppliers may share one platform. Map to the ultimate provider.
- **Blame in joint reviews.** Suppliers conceal incidents. Review incidents blamelessly.
- **Uniform management of all suppliers.** It wastes effort on small ones and neglects critical ones. Tier by criticality.
- **Ignoring subcontractors.** Your risk includes theirs. Ask about critical dependencies.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Knowing suppliers | Contracts scattered | Register for main suppliers | Register with owners, criticality, and review dates | Dependency map to subcontractors; coverage and currency tracked | Shared dependency view with suppliers and customers |
| Performance and relationship | Reactive; disputes | Monthly reports from suppliers | Contract and experience measures compared; regular joint reviews | Actions tracked; incidents reviewed jointly; attribution agreed | Suppliers integrated as partners with shared goals and open data |
| Resilience and exit | None | Exit terms in some contracts | Exit plans for critical suppliers | Exit plans exercised; concentration decided deliberately | Alternatives kept warm; exercises joint with suppliers |

## Checklist

- [ ] A supplier register lists every supplier with an owner, criticality, and contract dates.
- [ ] Critical services have a dependency map that reaches key subcontractors.
- [ ] Contract service levels are paired with a user experience measure.
- [ ] Joint reviews with critical suppliers are held on a cadence with a standard agenda.
- [ ] Due diligence for critical suppliers is current and evidence-based.
- [ ] Incident notification terms and channels are agreed and tested.
- [ ] Supplier-attributed incident time is recorded with agreed attribution.
- [ ] Concentration is measured and each single-supplier dependency is a recorded decision.
- [ ] Exit plans exist for critical suppliers and were exercised within the period.
- [ ] Contract terms include data export, transition support, and ownership of configurations.

## AI prompts

**Build a supplier criticality assessment.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Compare contract measures with user experience.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Design an exit exercise.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Draft a joint review agenda.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a supplier or contract metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a supplier metric entry carries its gaming vector, guardrail, and attribution rule.

## Key takeaways

- You remain accountable for services you outsource, so manage suppliers as part of your own service.
- Pair contract measures with user experience, and monitor independently of the supplier's report.
- Map dependencies to subcontractors, and treat concentration as a deliberate decision.
- Build relationships around shared outcomes and regular joint reviews, with remedies kept for serious cases.
- Plan the exit before you sign, and test it for critical suppliers.
- Review incidents with suppliers in a blameless way and share data openly.

## References and further reading

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
