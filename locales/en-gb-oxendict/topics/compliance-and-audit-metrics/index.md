# Compliance and audit metrics

**Compliance is easiest and most honest when the evidence is produced by the work itself, so measure how much evidence comes automatically, how fast findings are fixed, and how often the same finding comes back, and treat auditors as stakeholders who join the conversation early.**

## Overview and motivation

Most organizations that build and run IT services answer to someone: regulators, customers, certification bodies, insurers, boards. [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance) is the act of conforming to laws, rules, and standards, and demonstrating that you do. An audit is a systematic examination of evidence to judge whether that is true. In IT this includes the audits of financial reporting controls, data protection obligations, security certifications, and contractual commitments. [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit) examines the controls around systems and the data they hold.

Compliance and continuous delivery have a reputation for friction. Compliance asks for documents, signatures, and approvals before change, and continuous delivery favours small changes released continuously. The friction is real when compliance is treated as a phase at the end. It lessens when compliance is built into the flow of work. Change records, code reviews, automated tests, and access logs are evidence, and a delivery pipeline produces them every day. [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing) uses automated, near real-time checks of controls instead of periodic samples, and it matches the cadence of continuous delivery. An [audit trail](https://en.wikipedia.org/wiki/Audit_trail) is a record that shows who did what, when, to which system, and it is often the strongest evidence you have.

ITIL describes the relevant practices: information security management, risk management, and the governance of the service value system, and it points to standards such as [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) for information security management systems. Frameworks that organizations commonly face include reporting regimes for financial controls, such as the [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) in the United States, data protection laws such as the [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union, and assurance reports such as [SOC 2](https://en.wikipedia.org/wiki/SOC_2), which examine controls relevant to security and related criteria. The details differ by jurisdiction, sector, and date, and this topic describes measurement practice, not legal requirements. Work with your compliance, legal, and audit colleagues for what applies to you.

The aim of compliance metrics is to learn how well the organization meets its obligations and how much effort that takes, so that both can improve. The risk is that compliance becomes a performance for the auditor. A team can pass an audit by producing documents at the last moment and still run risky practices. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies: when "audit findings" is a target, people avoid scrutiny, narrow scope, and negotiate wording (see topic 1.2, Goodhart's law and the psychology of metrics).

Two lines of thought help.

- **Compliance as a by-product.** If the pipeline records review, testing, approval, and deployment automatically, evidence exists whether or not an audit is near. This also removes the temptation to reconstruct evidence afterwards.
- **Auditors as stakeholders.** Agile practice values continuous collaboration with stakeholders. Auditors and assessors are stakeholders with legitimate questions. Involving them in designing controls and evidence reduces surprise and rework, while keeping their independence.

## Key principles

- **Produce evidence as a by-product of the work.** Pipelines, tickets, and logs should answer most audit questions.
- **Map obligations to controls and owners.** Every obligation has a control, and every control has an owner.
- **Collaborate early with auditors.** Share designs and evidence approaches before the audit, and preserve their independence.
- **Fix causes, not findings.** A finding closed without removing the cause comes back.
- **Measure effort as well as outcome.** The cost of compliance is part of the picture.
- **Keep separation of duties where it matters.** Independence of review is a control that automation can support but not replace.
- **Be honest about gaps.** Self-reported weaknesses are better found by you than by others.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Obligation coverage | Share of applicable obligations mapped to a control with an owner and a source of evidence | obligations mapped to at least one control with owner and evidence source / applicable obligations | percent | Obligations register and control register | Governance; information security management; risk management | Definition of done includes control evidence | Quarterly |
| Evidence automation rate | Share of in-scope control evidence collected automatically from systems of record | control evidence items collected automatically / evidence items required | percent | Control register, pipeline and system logs | Information security management; change enablement | Pipeline records review, test, and deployment automatically | Quarterly |
| Evidence turnaround | Time to supply evidence requested by an auditor or assessor | median and 85th percentile of days from request to accepted evidence | days | Audit request tracker | Governance; information security management | Responsiveness to a stakeholder question | Per audit |
| Finding closure time | Time to close audit findings by severity | median and 85th percentile of days from finding issued to verified closure | days | Findings tracker | Continual improvement; risk management | Time to fix a defect | Monthly |
| Repeat finding rate | Share of findings that recur from a previous audit or review | findings matching an earlier closed finding in substance / findings in the period | percent | Findings tracker with cause links | Continual improvement; problem management | Recurring defect after a fix | Per audit cycle |
| Segregation-of-duties conflicts | Count of access or approval combinations that violate segregation rules, and time to resolve | conflicts detected; median days to resolve | count; days | Identity and access management tools, change records | Information security management; change enablement | Independent review of changes | Monthly |
| Audit effort | Person-hours the organization spends preparing for and supporting an audit cycle, per scope unit | hours logged to audit preparation and support / scoped controls or systems | hours per unit | Time records or effort estimates | Governance; continual improvement | Cost of non-delivery work | Per audit cycle |

State the obligations in scope and the audit scope in the register. Closure time starts when the finding is issued and stops when the auditor or an independent verifier confirms closure, not when the team says it is done. Repeat findings are matched by cause, not by wording, and the matching rule is recorded. Audit effort is a trend measure for the organization and never a measure of individuals.

## Recommendations

### Know your obligations and controls

**1. List the obligations that apply, in plain language.** With legal and compliance colleagues, list the laws, standards, contracts, and policies that bind the service, and what each requires in terms of outcomes. Keep the list short and readable. Obligations that nobody can state plainly are the ones that cause audit surprises.

**2. Map each obligation to controls, owners, and evidence.** For each obligation, name the control that meets it, the person accountable, and the evidence that shows the control operates. Where one control meets several obligations, say so, because that reduces duplicated effort. Obligation coverage measures the completeness of this map. Unmapped obligations are gaps to close or to accept knowingly.

**3. Prefer fewer, stronger controls.** A control that is automated and tested is worth several manual ones. Look for controls that overlap, and retire those that serve no obligation. Each control costs effort to operate and to evidence (see topic 8.2, Risk and control metrics).

### Make evidence a by-product

**4. Let the pipeline produce the evidence.** Link every production change to a request, a code review, test results, and an approval where one is required, all recorded automatically. A deployment record that shows these tells the auditor what happened without a document being written. This relies on the continuous delivery practices that agile teams already use (see topic 4.5, Release and deployment metrics).

**5. Use policy checks in the pipeline.** Encode rules, such as "no deployment without a review by someone other than the author" or "no production access without a ticket", as automated checks. The check is both a control and its evidence. Keep the rules visible and versioned, so that changes to them are also recorded. This supports [segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties), the principle that no single person should control all stages of a sensitive process.

**6. Preserve audit trails properly.** Keep logs of access and change in a way that cannot be altered by the people they describe, retain them for the required period, and make them searchable. A trail that can be edited by those it records is weak evidence. Check retention rules with legal colleagues.

**7. Measure how much evidence is automatic.** The evidence automation rate shows where manual collection remains. Rank the manual items by effort and risk, and automate the worst first. As the rate rises, audit effort and turnaround time fall.

### Work with auditors

**8. Invite auditors into the design.** Share planned changes to controls and evidence with internal audit and external assessors early, and ask what would satisfy them. Independence means they do not design your controls, and it does not mean they cannot tell you what evidence they will need. Early conversations reduce rework. The Institute of Internal Auditors publishes standards for the profession that explain the role of [internal audit](https://en.wikipedia.org/wiki/Internal_audit).

**9. Prepare an evidence index.** Keep a living index of where each type of evidence lives and how to retrieve it. Track the turnaround time for evidence requests and use delays to find missing automation. A short, steady process beats a scramble before each audit.

**10. Agree the meaning of materiality and scope.** Ask auditors how they judge what matters and what is in scope, and record the answer. A shared understanding prevents disputes later. Do not narrow the scope to avoid scrutiny, and do not widen it without reason.

### Fix causes and learn

**11. Treat each finding as a problem record.** Find the cause, fix it, and verify closure by someone independent. Link repeat findings to the earlier ones, and examine why the first fix did not hold. A high repeat finding rate points to fixes that treated symptoms, which ties to problem management (see topic 4.1, Problem management metrics).

**12. Track the cost and drive it down.** Record audit effort over cycles. If effort is high and flat, look for duplication across audits, manual evidence collection, and controls that serve no one. Report the effort trend with the outcomes. Compliance is worth its cost when it reduces real risk, and the metrics help you tell.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Obligation coverage | Mapping obligations to weak or irrelevant controls; defining obligations narrowly | Review of control relevance by a second party; test the controls (see topic 8.2, Risk and control metrics) |
| Evidence automation rate | Counting screenshots or exports as automatic; automating low-value evidence first | Define automatic as system-generated and tamper-resistant; rank by risk |
| Evidence turnaround | Providing partial evidence quickly; negotiating the request wording | Count accepted evidence only; track follow-up requests |
| Finding closure time | Closing findings without verification; reclassifying severity | Independent verification; severity change log |
| Repeat finding rate | Rewording findings so they do not match; closing the earlier finding as a different type | Match by cause with a recorded rule; review by internal audit |
| Segregation-of-duties conflicts | Moving conflicts to systems not in scope; granting temporary access that is never recorded | Cover all systems with sensitive processes; review temporary access |
| Audit effort | Not logging hours; moving effort to other budgets | Sample time records; compare with team surveys |

A healthy reading is rising evidence automation, shorter and steadier turnaround, findings closed with verification, a low repeat rate, and audit effort that falls as the process matures.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Periodic manual evidence | Familiar to auditors | Costly; reconstructed after the fact |
| Automated continuous evidence | Cheap to maintain; timely | Needs engineering; auditors need to trust the source |
| Heavy approvals | Visible control | Slow; batches change |
| Automated policy checks | Consistent and fast | Rules must be right and visible |
| Early auditor involvement | Fewer surprises | Needs care to preserve independence |
| Audit at the end | Clear separation | Late findings; rework |
| One control for many obligations | Efficient | A single failure affects several obligations |
| Many specific controls | Clear mapping | Duplicated effort |

The prose answer is to automate evidence from the pipeline and systems of record, involve auditors early on design while keeping their independence, and keep a lean set of strong controls mapped to obligations.

## Questions to discuss with your team

**1. Which audit question takes us the longest to answer, and why?**
Pick the slowest evidence request from the last audit and trace it. Is the evidence missing, scattered, or in someone's head? Discuss what would make it automatic. The facilitator should capture the cost in hours.

**2. Can we show, for any production change in the last month, who reviewed it and what tests ran?**
Pick a change at random and try. Note where the chain breaks. Agree one improvement to the change record or the pipeline that closes the gap.

**3. What did we promise at the last audit, and did it hold?**
Review the findings and the fixes. For each, ask whether the cause was removed and who verified closure. Look for repeats. Agree one finding to examine more deeply.

**4. What would auditors tell us if we asked them how to make evidence easier?**
Plan a conversation with internal audit or an assessor about evidence design. Ask what they trust and what they do not. The facilitator should treat their answers as information, and keep in mind independence rules.

**5. Which controls do we run that no obligation needs?**
List controls and the obligations they serve. Find those with no clear purpose. Discuss retiring them, and the evidence that they are unnecessary.

**6. Where could one person do something sensitive end to end here?**
Think about deployment, access grants, and payments. Check whether tools enforce separation or only policy. Discuss compensating controls, such as automated review, where staff numbers are small.

## Four perspectives

### Product and delivery teams

Delivery teams produce much of the evidence by doing their work well. They should keep change, review, and test records linked, use pipeline policy checks, and raise concerns about controls that slow work without reducing risk. They gain from early conversations with auditors about what evidence is enough.

### Service and operations teams

Operations teams run access management, logging, backups, and incident handling, which are central to many audits. They should keep logs tamper-resistant and retained, manage access reviews on schedule, and keep the evidence index. They bear the burden of manual evidence and can point to where automation would help most.

### Leadership and governance

Leaders are accountable for compliance and often for audit outcomes. They should fund automation of evidence, ask for coverage and repeat finding rates instead of only the count of findings, and support auditors' independence. Governance should expect honest reports of gaps, and a plan for each.

### Customers and users

Customers and users rely on compliance as assurance about how their data and services are handled. They benefit when assurance reports are clear, when incidents are reported as required, and when controls do not make legitimate use harder than necessary. Transparent communication about compliance builds trust.

## In practice: a service management example

A mid-sized payments company runs a card processing platform and is assessed annually against a security assurance framework and a data protection regime. The numbers below are illustrative.

Audit preparation takes the engineering teams about six weeks every year. Last year's assessment closed with 14 findings, of which 5 repeated from the year before. The head of compliance maps the situation. Obligation coverage is 83 percent, with 17 percent of obligations having no named control owner. Evidence automation is 22 percent, and most evidence for change approval comes from screenshots of tickets compiled by hand. The median evidence turnaround is 9 days, with an 85th percentile of 21 days. Median finding closure time is 74 days, and closure was often marked by the owning team without verification.

The head of compliance works with the delivery and operations teams and with the internal auditor. They change four things. Every production change in the pipeline now links to the request, the code review by someone other than the author, test results, and the deployment, recorded automatically in the change record. A policy check blocks a deployment that lacks an independent review, and logs the exception route for emergencies. Access reviews run quarterly from the identity system, which shows segregation-of-duties conflicts directly. Each finding becomes a problem record, with an independent verifier from internal audit, and repeat findings are linked to their predecessors.

At the next assessment, the evidence automation rate is 71 percent, the median evidence turnaround is 2 days, the 85th percentile is 5 days, and audit preparation takes about two weeks. Obligation coverage is 97 percent, and the remaining items have documented acceptance. Findings fall to 6, with one repeat, and the median closure time is 31 days with independent verification. The chief executive asks for zero findings next year. The head of compliance proposes tracking repeat findings, closure time, and evidence automation, and explains that a goal of zero findings pushes teams to hide issues or narrow scope, and that an assessor who finds nothing may not have looked hard enough. The decision is recorded, and the board agrees to review the measures at the next meeting.

## Agile, AI, automation, and analytics

### Agile

Produce evidence as a by-product of work, and invite auditors to the conversation early. The caution is that a target for audit findings can discourage honest self-reporting.

### AI

AI-related obligations are changing, so check the law that applies to you with your legal adviser, and keep an inventory of AI systems as evidence. Do not ask an AI tool to state compliance claims. The caution is that AI-generated evidence summaries need a person to verify them against the source.

### Automation

Automate evidence collection from pipelines and tools, and measure evidence automation rate and turnaround. The caution is that automation can produce evidence that is complete but wrong, so sample it.

### Analytics

Report repeat findings and closure time with counts. The decision informed is where controls fail repeatedly. The caution is that audit effort is a cost, not a goal, and reducing it should not reduce coverage.

## Sector lens

**Startup.** Obligations may arrive suddenly with a large customer or a funding round. Build habits early: peer review, change records, and access control in the pipeline, so that evidence exists when it is asked for. Pick one framework when the business needs it and map it to what you already do.

**Small business.** Compliance duties are often fixed by contracts and law, and resources are limited. Keep a short list of obligations, rely on managed services with their own assurance reports, and keep a simple evidence folder. Be wary of buying compliance tools that cost more than the risk they address.

**Enterprise.** Many obligations overlap, so a unified control framework that maps one control to many obligations saves large effort. Use common evidence sources, a shared findings tracker, and a calendar of audits to avoid repeated requests. Coordinate internal audit, compliance, and security so that teams are not examined three times for the same thing.

**Government and public sector.** Compliance duties are extensive and public, including procurement, records, accessibility, and data protection rules, with audits by national bodies. Document decisions and evidence for the required period, make reports consistent across agencies where possible, and keep a clear line between independent audit and management. Obligations may change with elections and legislation (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs include tooling for the control register, pipeline integration for evidence, identity and logging systems, and the time for compliance staff and teams. The initial effort to automate evidence is significant, and it replaces recurring manual work.

The returns are lower recurring audit effort, faster responses to requests, fewer repeat findings, and a more honest view of control health. They also include the avoided cost of surprises late in a certification cycle. Build the case from your own numbers: audit preparation hours before and after, evidence turnaround, the number and age of findings, and the cost of any audit-related delay in a commercial deal. Avoid quoting studies of the cost of compliance unless you can trace their method and relevance. Count the cost of the programme and the risk of over-automation of weak controls. The wider financial treatment appears in the last topic of the previous part (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Preparing for the audit in the last month.** It produces reconstructed evidence and a scramble. Record evidence as the work happens.
- **Screenshots as evidence.** They are manual, easy to alter, and expensive. Use system-generated records.
- **Aiming for zero findings.** It rewards narrow scope and hidden issues. Track closure, repeats, and coverage.
- **Closing findings by assertion.** The same finding returns. Verify closure independently.
- **Treating auditors as adversaries.** It increases cost on both sides. Collaborate on evidence design while preserving independence.
- **Controls that serve no obligation.** They cost effort and breed cynicism. Retire them.
- **Automating a bad control.** It produces evidence of a weak control at scale. Test the control first.
- **Manual segregation of duties.** It relies on memory. Enforce it in tools and review exceptions.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Obligations and controls | Known by a few people | List of obligations and controls | Mapped to controls, owners, and evidence sources | Coverage tracked; overlap reduced; controls tested | Unified control framework across teams, suppliers, and regimes |
| Evidence | Compiled before audits | Standard templates and an evidence folder | Pipelines and systems of record produce much evidence | Automation rate, turnaround, and effort managed | Continuous assurance with auditors consuming evidence directly |
| Findings and learning | Findings argued and closed by assertion | Findings tracked | Findings treated as problem records with independent verification | Repeats and closure time analysed and fed into control design | Findings shared across the organization and with partners; improvement is routine |

## Checklist

- [ ] Applicable obligations are listed in plain language, with owners.
- [ ] Each obligation is mapped to controls and a source of evidence.
- [ ] Production changes carry linked request, review, test, and deployment evidence automatically.
- [ ] Policy checks enforce review and separation of duties in the pipeline.
- [ ] Audit trails are tamper-resistant and retained for the required period.
- [ ] An evidence index exists, and turnaround for requests is measured.
- [ ] Auditors are consulted on evidence design while independence is preserved.
- [ ] Findings are logged as problem records and closed with independent verification.
- [ ] Repeat findings are linked to their predecessors and examined for cause.
- [ ] Audit effort is tracked as a trend and reviewed for duplication.

## AI prompts

**Map obligations to controls.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Plan evidence automation.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Analyze repeat findings.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Prepare an early conversation with auditors.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a compliance or audit metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a compliance metric entry carries its gaming vector, guardrail, and independence rule.

## Key takeaways

- Produce evidence as a by-product of delivery, from pipelines and systems of record, and measure how much is automatic.
- Map every obligation to a control, an owner, and a source of evidence.
- Invite auditors into evidence design early, and protect their independence.
- Close findings by removing causes, verify closure independently, and watch the repeat finding rate.
- Avoid targets such as zero findings, and track effort alongside outcomes.
- Enforce separation of duties in tools, and keep audit trails tamper-resistant.

## References and further reading

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
