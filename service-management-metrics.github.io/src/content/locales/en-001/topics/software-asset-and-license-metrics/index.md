# Software asset and license metrics

**Software is bought, subscribed to, built, and borrowed, and each route creates obligations and costs, so measure what you are entitled to, what you actually use, and what you depend on, and make it easy for teams to choose tools without creating surprises later.**

## Overview and motivation

Software is the asset class that changes fastest and is hardest to see. A developer adds a library in minutes. A team signs up for a software-as-a-service tool on a company card. A vendor changes its pricing model between renewals. A contract allows 500 users and 700 have accounts. [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) is the business practice of managing and optimizing the purchase, deployment, maintenance, use, and disposal of software within an organization. It sits inside the broader IT asset management practice (see topic 7.1, IT asset management metrics) and shares its discipline of records, owners, and lifecycles.

Continuous delivery and software asset management pull in different directions on speed. Teams that deliver continuously need to choose and adopt tools quickly, and they build on open-source components by the hundred. Software asset management wants to know what is in use, under what terms, at what cost, and with what risk. Both are right. The way through is continuous collaboration between teams, procurement, legal, security, and finance: make the approved path fast, make the catalog of approved tools easy to find, and make the checks automatic. Slowing teams down with a long approval process produces [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT), which is the opposite of the visibility everyone wants.

Four kinds of software matter, and the metrics differ among them.

- **Licensed software** installed on devices or servers, governed by a [software license](https://en.wikipedia.org/wiki/Software_license) that says who may use it, how many may use it, and under what conditions. Entitlements may be per user, per device, per core, or per site, and the unit decides how you count.
- **Software as a service.** [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) is accessed over a network and paid for by subscription, often by seat or by usage. It is easy to adopt and easy to forget. Overlapping tools and unused seats accumulate.
- **Open-source components.** [Open-source software](https://en.wikipedia.org/wiki/Open-source_software) is available under licenses that grant broad rights with conditions. Some licenses, called [copyleft](https://en.wikipedia.org/wiki/Copyleft) licenses, require that derived work be shared under the same terms. Compliance depends on how a component is used and distributed, and the interpretation of a license is a legal question.
- **Software you build.** Your own code is an asset, and it depends on many components. A [software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) is a list of the components in a piece of software. It helps you answer which of your services use a given library when a vulnerability or license issue appears.

Software asset metrics are exposed to the usual distortion. A license position can look healthy because the inventory is incomplete. Shelfware cost can look low because contracts were shortened before the review. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies, so each measure here is paired with an independent check (see topic 1.2, Goodhart's law and the psychology of metrics).

A caution on law: license terms and audit rights are legal matters. This topic describes measurement practice. It does not interpret any license, and it does not replace advice from qualified legal counsel for your situation and jurisdiction.

## Key principles

- **Measure entitlement against use.** Knowing what you may use and what you do use is the core comparison.
- **Count by the unit the license uses.** Users, devices, cores, and subscriptions are different, and mixing them hides the answer.
- **Make the approved path the fast path.** A visible catalog and quick approval reduce shadow adoption.
- **Include components as well as products.** Open-source libraries and their licenses are part of the estate.
- **Review before renewal.** The best time to cut waste is ahead of the contract date.
- **Keep legal in the conversation.** Interpretation belongs to people qualified to give it.
- **Share the picture with teams.** Teams that see their own usage and cost make better choices.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Effective license position | Comparison of entitlements held with usage found, per product, in the license's own counting unit | entitlements held minus deployments or users found, per product | units (surplus positive, shortfall negative) | Entitlement records, discovery tool, identity system | IT asset management; supplier management | Visible catalog and usage data for teams | Monthly for key products; quarterly for others |
| License utilization rate | Share of paid entitlements that are in active use | entitlements with activity in the last 90 days / entitlements paid for | percent | Vendor usage reports, identity logs, entitlement records | IT asset management; financial management | Retrospective on tool value | Monthly |
| Shelfware cost | Annual cost of entitlements that are paid for and unused | sum of (unused entitlements times unit cost) | currency per year | Entitlement records, usage data, invoices | IT asset management; financial management | Waste reduction in the toolchain | Quarterly |
| Unsanctioned application count | Number of software applications in use that are not in the approved catalog | applications seen in expense data, single sign-on logs, or network data that are not in the catalog | count | Expense reports, identity provider, network and endpoint data | IT asset management; information security management | Teams choosing tools with visible support | Monthly |
| Renewal readiness | Share of renewals that had a usage review before the notice date | renewals with a completed usage review at least 90 days before notice date / renewals due in the period | percent | Contract register and review records | Supplier management; financial management | Planning ahead for change | Quarterly |
| SBOM coverage | Share of production services with a current software bill of materials | services with an SBOM generated in the last release cycle / production services | percent | Build pipeline outputs, service catalog | IT asset management; information security management | Definition of done includes dependency visibility | Monthly |
| Open-source review coverage | Share of components in production with a recorded license identification and policy decision | components with license and decision recorded / components found in SBOMs | percent | Software composition analysis tool, policy register | IT asset management; supplier management | Dependency review in the pipeline | Monthly |

State the counting unit for each product in the register. Utilization starts counting activity from a defined event, such as sign-in, and a stated window. Exclude service accounts and test accounts from user counts only when the license terms allow, and record the rule. Cost is the contract unit price net of agreed discounts, and the date of the price is recorded.

## Recommendations

### Know what you hold and what you use

**1. Keep an entitlement record for every product that costs money or carries obligations.** The record should hold the vendor, product, license type, counting unit, quantity, term, price, renewal and notice dates, restrictions, and the owner. Store the contract or a link to it. The metric depends on this record, and the record often does not exist for subscriptions bought outside procurement.

**2. Measure use with the vendor's unit.** Seat licenses count named users, and processor licenses count cores. Utilization against the wrong unit gives false comfort. Where terms are complex, ask procurement and legal to describe the counting rule in plain language once, and record it.

**3. Combine three sources of use data.** The vendor's admin console, your identity provider's sign-in logs, and your discovery tools each see a part. Where they disagree, find out why. A seat that is assigned but never used is a candidate for reclaiming, and a user who appears in one log and not in another may be a data problem.

**4. Reclaim unused seats by default.** Set a rule, such as removing access after 90 days without use and restoring it on request. Make restoring easy so that the rule does not frustrate people. Reclaiming is a continuous practice, not a project, and it works best when it is automated and announced.

### Make the right path the easy path

**5. Publish a catalog of approved tools.** List what teams can use, what it costs, who supports it, and how to request access. Add a fast route for proposing a new tool, with a short review for security, privacy, and cost. A catalog that helps people find the existing tool prevents duplicate purchases (see topic 6.3, Service adoption and catalog metrics).

**6. Watch for sprawl without punishing it.** Use expense data, single sign-on logs, and network data to find applications that are not in the catalog. Treat each as a conversation: what does the team need, and could an approved tool serve? Count the unsanctioned applications and track the trend, and aim to bring useful ones under management, not to stamp them out.

**7. Give teams visibility of their own usage and cost.** A monthly view of seats, usage, and cost by team lets them clean up their own subscriptions. Visibility works better than policing, and it respects the agile preference for self-organizing teams with the information they need.

### Plan renewals and manage dependency

**8. Review usage before every significant renewal.** Set a review 90 to 120 days before the notice date, with the owner, procurement, and finance. Bring utilization, shelfware cost, alternatives, and the team's feedback. Renewal readiness is the share of renewals that reach this review in time. A missed notice date is a cost with a cause.

**9. Watch for vendor lock-in.** [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) makes it costly to switch suppliers. Record the exit route for important products: data export formats, contract terms on termination, and the effort to replace. You do not have to avoid dependency, but you should know its price.

**10. Generate an SBOM at every release.** Build tooling can produce an SBOM automatically as part of the pipeline, so the information stays current at no ongoing effort. Store it with the release, and make it searchable so that you can answer which services use a component. This supports licensing and security response alike.

**11. Review open-source licenses in the pipeline.** [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis) tools identify components and their licenses. Agree a short policy with legal on which licenses are approved, which need review, and which are not permitted for your use, and have the pipeline flag exceptions. Keep the policy decisions in a register. The tool identifies licenses, and a person qualified to interpret them decides the hard cases.

### Prepare for audits calmly

**12. Keep evidence ready, not a scramble.** A [software audit](https://en.wikipedia.org/wiki/Software_audit) by a vendor or a regulator asks you to demonstrate that your use matches your entitlements. If entitlement records and usage data are already reconciled each month, an audit is a routine request. Engage legal and procurement early, respond through one channel, and do not self-report conclusions that you have not reviewed with them.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Effective license position | Counting in a favorable unit; leaving shadow deployments out of discovery | Count in the license's own unit; compare with expense and identity data; legal review of the counting rule |
| License utilization rate | Shortening the activity window; counting logins by bots or service accounts as use | Fixed window in the register; exclude non-human accounts; compare with vendor usage report |
| Shelfware cost | Renegotiating or cancelling just before the review to reduce the number; ignoring subscriptions on cards | Include all spend sources; track cost at the start of the notice window |
| Unsanctioned application count | Approving everything into the catalog to reduce the count; hiding usage by using personal accounts | Catalog review criteria; look at spend and identity data; ask teams what they need |
| Renewal readiness | Holding a perfunctory review; setting the notice date later | Review checklist with required inputs; contract dates held by procurement |
| SBOM coverage | Generating SBOMs that omit transitive dependencies; counting build output that is not released | Define depth in the register; spot-check an SBOM against the deployed artifact |
| Open-source review coverage | Marking components as reviewed without a decision; accepting "unknown" licenses | Count components with unknown license; review a sample of decisions |

A healthy reading is a license position that matches independent evidence, a utilization rate that rises because seats are reclaimed and not because the definition changed, an unsanctioned application count that falls as the catalog improves, and renewals that arrive with a review.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Central approval of all tools | Strong control, one view | Slow; encourages shadow IT |
| Team choice within guardrails | Fast; fits team needs | More variety; needs visibility and review |
| Aggressive seat reclamation | Saves cost | Can frustrate users if restoring is slow |
| Generous seat provision | Low friction | Waste accumulates |
| Enterprise agreements | Lower unit cost, simpler | Lock-in; paying for unneeded breadth |
| Pay-as-you-go usage | Matches cost to use | Unpredictable bills |
| Automated license scanning | Consistent and fast | Needs human judgment on edge cases |
| Manual review of components | Careful | Does not scale for large dependency trees |

The prose answer is to give teams choice within clear guardrails, automate the checks, and spend human attention on the large contracts and the hard license questions. Hold a fast path for new tools and an easy path for restoring reclaimed access.

## Questions to discuss with your team

**1. Which three products cost us the most, and do we know how many people use them?**
List the largest contracts and the counting unit for each. Compare with usage data. The facilitator should look for products where nobody knows the unit or where usage data does not exist. Agree to collect the data for one before the next renewal.

**2. How does a new tool get adopted here, and how long does it take?**
Trace a recent example from request to access. Ask how many teams skipped the path, and why. The answer shows whether the approved path is fast. Agree one improvement to the path and a way to learn whether it worked.

**3. What would happen if a vendor asked us to prove our license position next month?**
Walk through who would respond, what records exist, and what gaps there are. The conversation should not aim to find legal conclusions, only to identify missing records. Name the people in legal and procurement who would be involved and how the team would reach them.

**4. Where do we reclaim unused seats, and where do we not?**
Review reclamation rules for the top products. Ask what would happen if a rule were applied to the rest. Discuss how to make restoring access painless, since that is what makes the rule acceptable.

**5. Can we say which of our services use a given open-source library?**
Pick a well-known library and try to answer. If it takes more than a few minutes, discuss why. Agree which pipeline step could produce an SBOM and where the results could be stored.

**6. What do we depend on that would be hard to leave?**
List products whose data or workflow is deeply tied to one vendor. Ask what leaving would cost and how you would start. The facilitator can record the answer as an input to renewal planning.

## Four perspectives

### Product and delivery teams

Delivery teams choose tools and libraries daily. They should use the approved catalog where it serves them, propose additions with a short note, and let the pipeline generate SBOMs and flag license issues. They need fast answers: a clear policy on common licenses and a route to ask about unusual ones. A team that sees its own seat and spend data will clean it up without being told.

### Service and operations teams

Operations teams run discovery, manage access, and field renewals and audits. They should reconcile usage data with entitlements, reclaim unused seats on a schedule, and keep the contract register current. They also carry the support burden of unmanaged tools, which is a good reason to bring useful ones under management.

### Leadership and governance

Leaders want to avoid unplanned cost and legal exposure without slowing teams. They should fund the automation, ask for the independent evidence behind license position claims, and keep legal and procurement in the loop. Governance should expect renewals to be reviewed in time and open-source policy to be applied in the pipeline.

### Customers and users

Users want the tool they need to work the first time, without a long wait. They notice when access disappears without warning or when two tools do the same job. They should be told when seats will be reclaimed, given an easy route to ask for access, and consulted when a tool is replaced.

## In practice: a service management example

A regional news organization's technology group supports 900 staff and runs a publishing platform with about 40 services. The numbers below are illustrative.

The finance director asks why software costs have grown faster than headcount. The software asset manager gathers the data. The entitlement records cover 61 products. Sign-in logs and vendor reports show that the design suite has 220 seats and 140 active users in the last 90 days, a utilization rate of 64 percent, with unused seats costing about the same as one engineer's salary. Expense data shows 37 applications that are not in the catalog, mostly collaboration and analytics tools bought by teams. Three of the largest renewals had notice dates that passed without a usage review.

The team makes four changes with the product teams. A seat reclamation rule removes access after 90 days of no use, with a one-click request to restore it. A catalog page lists approved tools, their cost, and an owner, with a two-day route for proposing a new tool. Renewal reviews begin 100 days before the notice date, with a checklist of utilization, alternatives, and team feedback. The publishing platform's build pipeline now generates an SBOM at each release, and a license scan flags components with unknown or restricted licenses for review by legal.

Three months later, the design suite utilization is 86 percent after reclaiming 60 seats, and one renewal is renegotiated to a lower seat count. The unsanctioned application count falls from 37 to 24, as the team adds four useful tools to the catalog and retires duplicates. SBOM coverage is 70 percent of production services. The scan finds a component with an unknown license in a rarely used service, which legal reviews and the team replaces. A vendor requests a license verification for another product, and the records produced for the audit match, with one correction. The director asks for a promise of 100 percent utilization, and the manager explains that a healthy figure leaves some headroom for new starters and changes, and she proposes a range as a guideline, not a target. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

Make it easy for teams to choose tools through a short, visible process, and review usage with stakeholders regularly. The caution is that a strict approval process pushes people to unsanctioned tools.

### AI

AI services add new license models, based on seats, tokens, or usage, and new obligations around data and model terms. Track license utilization and cost per active user for AI tools, and pair them with a usefulness check from users. The caution is that usage-based pricing can grow unnoticed, so set alerts and owners.

### Automation

Collect entitlement and usage data automatically, and generate the software bill of materials in the pipeline. Measure the automation on coverage and false positives. The caution is that a bill of materials that is generated but not read does not reduce risk.

### Analytics

Show effective license position and shelfware cost with the date of the data. The decision informed is what to renew, reduce, or drop. The caution is that license rules are complex, so ask a specialist for contract interpretation.

## Sector lens

**Startup.** Tools are chosen quickly and paid for by card. Keep a one-page list of subscriptions with owners and renewal dates, review it quarterly, and use free tiers deliberately. Pay attention to open-source licenses before you distribute software or raise investment, since investors may ask.

**Small business.** A handful of products carries most of the cost. Track seat counts by hand, set calendar reminders for renewals, and ask vendors for usage reports. Beware of auto-renewing subscriptions and of licenses tied to a person who has left.

**Enterprise.** Complex contracts, mergers, and many business units make entitlement records hard. Invest in a data model that holds counting units, automate discovery and identity feeds, and give legal and procurement a place in the pipeline for open-source policy. Expect vendor audits and prepare evidence in advance.

**Government and public sector.** Procurement rules, public-benefit licensing, and sovereignty requirements shape choices. Document the reasons for purchases, keep contract records for the required period, and consider open standards and exit routes as requirements. Transparency about software spending may be a statutory duty (see topic 8.4, Supplier and contract metrics).

## Business case: motivations, ROI, and TCO

The costs are the time to build the entitlement record, tooling for usage and composition analysis, and the effort to review renewals. Some tools are already licensed as part of identity or endpoint platforms. The routine cost is a few hours per month for a small estate and more for a large one. Automating reclamation and SBOM generation lowers it.

The return comes from avoided spend and avoided surprise. Unused seats are direct savings at renewal. Early renewal reviews let you negotiate from knowledge. Knowing your dependencies shortens response to vulnerabilities and to license questions. Avoid quoting industry savings percentages that you cannot trace. Measure your own baseline: unused seats times unit cost, the number of renewals reviewed late, the time to answer "which services use this component," and the cost of any past audit finding. Include the cost of the program itself, and count avoided legal exposure only where you can describe a specific risk reduced. The next topics on cost take the financial view further (see topic 7.5, Service cost and unit economics).

## Anti-patterns and pitfalls

- **Counting in the wrong unit.** A seat count for a license sold by core misleads. Record the unit.
- **Treating the vendor's report as the whole truth.** Combine it with your own logs.
- **Blocking tools by default.** Teams go around the block. Make the approved path fast.
- **Reclaiming without a way back.** Users lose trust. Make restoring easy and quick.
- **Reviewing renewals after the notice date.** The leverage is gone. Start early.
- **Scanning licenses and ignoring the results.** A scan without a policy and a decision owner is noise.
- **Interpreting licenses in the delivery team.** Hard cases belong with legal.
- **Treating SBOMs as paperwork.** If nobody queries them, they decay. Use them in response drills.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Entitlements and use | Contracts in email; no use data | Records for main products; occasional usage checks | Entitlement records with counting units; usage from identity and vendor data | License position and utilization reviewed monthly; seats reclaimed automatically | Usage and spend shared with teams; purchasing and usage data flow between suppliers and the organization |
| Adoption path | Teams buy what they like | A list of approved tools | Fast catalog route with owners and review criteria | Unsanctioned applications tracked and absorbed or retired | Tool choice co-designed with teams; common services reused across the organization |
| Components and dependencies | Unknown | Manual component lists for some services | SBOM generated at release; license policy agreed with legal | Coverage tracked; exceptions reviewed; response drills run | SBOMs and policy shared with suppliers and customers; exit routes planned |

## Checklist

- [ ] Every paid or obligation-bearing product has an entitlement record with unit, quantity, term, and owner.
- [ ] Usage comes from at least two sources, compared monthly for key products.
- [ ] Seat reclamation has a rule, a notice, and an easy way back.
- [ ] An approved tool catalog exists with a fast route to propose a new tool.
- [ ] Expense and identity data are checked for unsanctioned applications.
- [ ] Renewal reviews start at least 90 days before the notice date.
- [ ] SBOMs are generated and stored for each release of production services.
- [ ] A license policy agreed with legal flags exceptions in the pipeline.
- [ ] Vendor exit routes are recorded for important products.
- [ ] Legal and procurement contacts for audits are named and known to teams.

## AI prompts

**Build an entitlement record template.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Prepare a renewal review.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Design a seat reclamation rule.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Triage a license scan result.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a software asset or license metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a software metric entry states its counting unit, gaming vector, and guardrail.

## Key takeaways

- Compare entitlements with actual use, counted in the license's own unit.
- Make the approved path the fast path, so teams do not need to hide what they use.
- Review usage before renewal notice dates, and reclaim unused seats by a visible rule.
- Generate SBOMs in the pipeline and flag licenses against a policy agreed with legal.
- Keep legal and procurement involved in interpretation and audits.
- Give teams visibility of their own usage and cost.

## References and further reading

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
