# Configuration and CMDB quality metrics

**A configuration database earns its keep only when people trust it enough to use it in a change or an incident, so measure its quality by how well it answers real questions, and let the teams that own services keep their own records current.**

## Overview and motivation

When a database server fails at three in the morning, someone asks which services depend on it. When a team plans a change, someone asks what else could break. The answers should come from a record of the things that make up your services and how they connect. That record is the subject of configuration management, and the database behind it is the configuration management database, usually shortened to CMDB.

A [configuration item](https://en.wikipedia.org/wiki/Configuration_item) (CI) is any component that needs to be managed to deliver an IT service: a server, an application, a database, a network device, a cloud account, a contract. A [configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database) stores information about CIs, their attributes, and the relationships among them. Where asset management asks what you have, who owns it, and what it costs (see topic 7.1, IT asset management metrics), configuration management asks how the parts fit together and what depends on what.

CMDBs have a mixed reputation, and the reputation is earned. Many were built as comprehensive maps, filled with data that decayed faster than anyone could fix it, and then abandoned. The agile and DevOps traditions offer a better starting point. Teams that describe their infrastructure as code have an authoritative, versioned definition of what they run, and they can publish it to the shared record automatically. [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) turns the record into a by-product of delivery. ITIL 4 describes the practice as service configuration management and emphasizes the information needed to support decisions, not completeness for its own sake.

Quality in a configuration record has several parts, and they map to the broader idea of [data integrity](https://en.wikipedia.org/wiki/Data_integrity):

- **Completeness:** the CIs and attributes that matter are present.
- **Accuracy:** what the record says matches reality.
- **Timeliness:** changes appear in the record soon enough to be useful.
- **Consistency:** the same thing is not recorded twice under different names. Matching records that refer to the same thing is the problem of [entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
- **Relationship quality:** dependencies between CIs are present and right. This is where most value, and most decay, lives.

The deepest test of a CMDB is use. A record that people consult during incidents and changes, and correct when it is wrong, is healthy. A record that is only audited is not. The measures below therefore pair quality measures with use measures.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies with a twist: completeness is easy to inflate with default values, and accuracy is easy to claim without checking. Insist on independent evidence and on measures of use (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Start with the questions.** Decide what you need the record to answer, and build only that.
- **Prefer a smaller, trusted record to a larger, doubtful one.** Scope grows when trust is earned.
- **Let the source of truth feed the record.** Pipelines, cloud APIs, and discovery should write to it, not people with spreadsheets.
- **Let service teams own their services' records.** They know their dependencies, and they feel the cost of errors.
- **Measure by use as well as by quality.** A good record is consulted.
- **Check against reality.** Test the record by asking whether it predicts what happens.
- **Fix at the source.** A wrong record is a symptom. Find the process that let it drift.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CI completeness | Share of in-scope CIs with all required attributes populated with valid values | in-scope CIs with every required attribute valid / in-scope CIs | percent | CMDB, attribute rules | Service configuration management; IT asset management | Definition of done includes service description | Monthly |
| CI accuracy | Share of sampled CIs whose record matches evidence on the required attributes | sampled CIs matching on all required attributes / CIs sampled | percent | Audit sample compared with the live system | Service configuration management | Infrastructure as code state matches reality | Quarterly |
| Dependency coverage | Share of critical services whose upstream and downstream dependencies are mapped and reviewed | critical services with a dependency map reviewed in the last 90 days / critical services | percent | CMDB relationships and review records | Service configuration management; availability management | Architecture and service ownership review | Quarterly |
| Impact prediction hit rate | Share of incidents and changes where the services actually affected were in the CMDB's predicted impact | incidents or changes where all affected services were predicted / incidents or changes reviewed | percent | Post-incident reviews and change records compared with CMDB queries | Incident management; change enablement | Blameless review finding on missing dependencies | Quarterly |
| Duplicate CI rate | Share of CIs that duplicate another CI | CIs flagged as duplicates by matching rules and confirmed in review / CIs in scope | percent | CMDB matching report and review sample | Service configuration management | Single source of truth | Monthly |
| Update latency | Delay between a change to a CI in the real world and its update in the CMDB | median and 85th percentile of hours or days from change event to CMDB update | hours or days | Change events and pipeline events compared with CMDB timestamps | Service configuration management; change enablement | Automated registration in the pipeline | Monthly |
| CMDB use rate | Share of incidents and changes that reference CIs, and of those, share where users report the record helped | records referencing a valid CI / incidents and changes in the period; plus share of reviewed records where the CI data helped | percent | ITSM tool, short feedback prompt | Incident management; change enablement | Teams using the shared record in their work | Monthly |

Define the scope of "in-scope CI" by class and by criticality, and record it. A CI is accurate only on the attributes you name as required. Update latency starts at the real event, such as a deployment or a purchase, and stops when the CMDB reflects it. Impact prediction hit rate requires a review step that records which services were actually affected, and it is only as reliable as that review.

## Recommendations

### Decide what the record is for

**1. Write the questions the CMDB must answer.** Typical ones are: what depends on this component, who owns this service, what changed recently, what would a failure here affect, and what is out of support. For each question, name the CI classes, attributes, and relationships needed. Anything not needed to answer a question is a candidate to leave out.

**2. Start with the services that matter most.** Pick the handful of critical services, map them end to end, and get that right before adding more. A reliable map of ten services helps more than a doubtful map of a thousand. Expand as trust and use grow.

**3. Define classes, attributes, and relationship types simply.** A short list of CI classes (service, application, database, host, network, cloud resource) and relationship types (depends on, runs on, connects to, owned by) covers most needs. A model that tries to capture everything is hard to fill and harder to query. Keep a written model and change it deliberately.

### Feed the record from the source

**4. Publish from pipelines and code.** Where infrastructure and applications are defined as code, have the delivery pipeline create, update, and retire CIs on each change, including ownership and dependency information declared alongside the code. Treat the declaration as part of the definition of done for a service. This makes update latency near zero and keeps the record aligned with what runs.

**5. Use discovery as a second opinion.** Network and cloud [service discovery](https://en.wikipedia.org/wiki/Service_discovery) finds what is actually running and how it connects. Compare it with the declared record. Differences are findings: either the declaration is missing something or something is running that should not be. Discovery alone produces noisy data without ownership, so use it to check, not to author.

**6. Use stable identifiers and matching rules.** Duplicates arise when different sources name the same thing differently. Agree a unique identifier for each CI class, record source identifiers, and run matching rules to find and merge duplicates. Review matches by hand in a sample, since automatic merging can combine different things.

**7. Give each service team ownership of its slice.** The team that builds and runs a service is best placed to know its dependencies and to notice errors. Make it easy for them: a template, a short review at planning, and feedback when their data is used. Central teams own the model, the tools, and the checks, not every record.

### Measure quality and use

**8. Audit accuracy by sampling.** Each quarter, draw a random sample of CIs and check them against live systems, and a second sample from live systems to check that they appear in the record. Report accuracy by class and show the main sources of error. Keep the sample method fixed so that trends mean something.

**9. Test the map against incidents.** After a significant incident or change, compare the services actually affected with what the CMDB predicted. Record misses and fix the missing dependencies. This is the most meaningful accuracy test, because it checks the record against events, and the hit rate improves as the map is corrected. Use blameless reviews so that people report misses readily (see topic 4.2, Postmortem and learning metrics).

**10. Track use and ask whether it helped.** Count how often incidents and changes reference CIs, and ask responders and approvers a short question on whether the record helped. A rising use rate with positive answers is the clearest sign of value. A low use rate means people do not trust the record or do not know it exists, and both are fixable.

**11. Review dependency maps regularly with owners.** Dependencies change as software evolves. Ask owners of critical services to confirm their maps every quarter, ideally as part of a planning or architecture conversation. Use the confirmation date as an attribute, and show maps that are overdue.

### Keep it honest and proportionate

**12. Retire what no one uses.** Remove CI classes and attributes that no question needs and no one consults. Fewer, better fields raise accuracy. Review the model annually and record what was removed and why. A smaller record is less to keep true, and it makes the quality measures easier to meet honestly.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| CI completeness | Filling required attributes with defaults or placeholders; narrowing the required list | Count default and placeholder values; fixed required list; accuracy sample |
| CI accuracy | Sampling easy classes; auditing after a clean-up | Random sample drawn independently from both directions; fixed method |
| Dependency coverage | Marking maps as reviewed without reading them; mapping only trivial dependencies | Impact prediction hit rate; spot-check a map against live traffic |
| Impact prediction hit rate | Choosing incidents that went well; recording affected services narrowly | Review all significant incidents; reviewers outside the owning team |
| Duplicate CI rate | Merging distinct CIs to lower the rate; loosening matching rules | Sample merges for correctness; log merge rules |
| Update latency | Backdating change events; counting only automated updates | Compare event and update timestamps from source systems; audit trail |
| CMDB use rate | Adding CI references as a formality; making the field mandatory with any value | Check that referenced CIs are relevant; the feedback question on helpfulness |

A healthy reading is a smaller record with high measured accuracy, dependency maps that predict real incidents, update latency near zero for automated classes, and people who say they use the record because it helps.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Comprehensive CMDB | Broad view; supports many use cases | Expensive to keep true; decays |
| Minimal, question-driven CMDB | Trusted and cheap | Gaps; needs growth discipline |
| Discovery-driven population | Finds the unknown; low manual effort | Noisy; lacks ownership and purpose |
| Pipeline-driven population | Accurate; low latency | Limited to what is built through pipelines |
| Central ownership of records | Consistency | Slow; far from the knowledge |
| Team ownership of records | Accurate and fast | Variation; needs templates and checks |
| Graph-style model | Natural for relationships and impact queries | Needs skills and tooling |
| Relational table model | Familiar and simple | Awkward for deep dependency queries |

The prose answer is to start small and question-driven, populate from pipelines with discovery as a second opinion, and put service teams in charge of their records. A [graph database](https://en.wikipedia.org/wiki/Graph_database) can make dependency questions natural to ask, though a conventional database works if the model is kept simple.

## Questions to discuss with your team

**1. What question did we last wish the CMDB could answer, and could it?**
Recall a recent incident or change where someone searched for dependencies. What did they find, and what did they do instead? The facilitator should record the question and whether the record was consulted. The result is the first candidate for the record's purpose.

**2. If our most important service failed now, how confident are we in the predicted impact?**
Ask for the predicted impact from the CMDB and compare it with what people who know the service believe. Note the differences. Agree which dependency to verify first and who will check it.

**3. Who owns the record for each service, and do they know it?**
List critical services and the owners of their CMDB entries. Ask whether owners know and have reviewed them lately. Where the owner is "the CMDB team," discuss how to move ownership to the service team.

**4. What do we fill in just to satisfy a required field?**
Look for default values and placeholders. These show where the model asks for more than anyone knows. Decide whether to remove the field, automate it, or find the real source.

**5. Where does our record disagree with what is running?**
Compare discovery output with the record for one service. For each difference, ask whether the record or reality should change. The conversation tends to find both stale data and unauthorized components.

**6. What would we stop recording?**
List classes, attributes, and relationships that nobody has used for six months. Ask what would happen if each disappeared. Agree to remove two and observe whether anyone notices.

## Four perspectives

### Product and delivery teams

Delivery teams hold the knowledge of what their services depend on and are best placed to keep the record true. They should declare ownership and dependencies alongside their code, review them when design changes, and use the record when planning changes. A definition of done that includes updating the service description keeps the record near the work.

### Service and operations teams

Operations teams consult the record during incidents and changes, so they feel its errors first. They should report misses in reviews, run discovery checks, maintain the matching rules, and provide feedback to owners. They also operate the tooling and the audit samples.

### Leadership and governance

Leaders want impact and risk visible, and they often sponsor large CMDB programs that disappoint. They should ask for use and accuracy evidence in place of record counts, fund pipeline integration, and accept a smaller scope done well. Governance should expect to see the impact prediction hit rate and the gap list.

### Customers and users

Users benefit when incidents are diagnosed faster and changes are less likely to break dependent services. They rarely see the CMDB, though they see its effects in communication that names the affected services correctly and in fewer surprises after changes. Their feedback after incidents shows whether the impact picture was right.

## In practice: a service management example

A national airline's technology group runs about 300 applications and a customer booking platform. The numbers below are illustrative.

The CMDB holds 180,000 CIs and was populated by a discovery tool five years ago. The head of service management wants to know whether it is worth keeping. She asks a small team to test it. For quality, they audit 150 sampled CIs and find 71 percent accurate on the five required attributes. For the map, they review the last 20 significant incidents and compare the services actually affected with what the CMDB predicted: it predicted all affected services in 6 of 20, a hit rate of 30 percent. For use, 12 percent of incidents in the last quarter referenced a CI, and in a short survey of responders, most said they relied on a separate wiki page. Duplicate CIs are 9 percent of the total.

The team makes four decisions with the service owners. It shrinks the scope to the 40 services that carry the most customers, with five CI classes and four relationship types. It asks each service team to declare owner, dependencies, and runtime location in a short file kept with its code, which the pipeline publishes to the CMDB on each release. It runs discovery weekly and reports differences to owners. It adds a field to the incident review, "was the CMDB prediction right?" and fixes each miss within two weeks.

Two quarters later, the scoped CMDB has 14,000 CIs, accuracy on the sampled set is 92 percent, update latency from release to record is under an hour for services in the pipeline, and the hit rate on the last 12 incidents is 75 percent. CMDB use in incidents has risen to 58 percent, and responders say the wiki page is no longer needed. The chief operating officer asks for a plan to bring the other 260 applications in at once. The head of service management proposes adding ten services per quarter, after each earns a hit rate above an agreed level on a test incident, and explains that the earlier broad record had never been trusted. The decision is recorded, with a review each quarter.

## Agile, AI, automation, and analytics

### Agile

Let service teams keep their own records current as part of their work, and review quality with them regularly. The caution is that a completeness target alone produces records filled with placeholders.

### AI

AI can infer dependencies, suggest records, and answer questions from configuration data, and AI systems themselves are configuration items. Track impact prediction hit rate for AI-suggested dependencies against real incidents. The caution is that an AI that guesses dependencies can pollute the record with plausible errors.

### Automation

Feed records from discovery and infrastructure as code, and measure update latency. The caution is that automated discovery can create duplicate or stale items without clear identity rules.

### Analytics

Judge the database by how well it answers questions in real changes and incidents, and report the use rate. The decision informed is where to improve data. The caution is that accuracy is measured by sampling, so show the sample size.

## Sector lens

**Startup.** There is little need for a CMDB beyond a service catalog and infrastructure code. Keep service owners and dependencies in the repository, and generate a map from it. Add a database only when the questions outgrow the files.

**Small business.** A simple diagram and a list of systems with owners and vendors may suffice. Update it after every significant change. Resist buying a platform for a small estate, but keep the diagram current, since it is invaluable in an outage.

**Enterprise.** Scale needs a model, federated ownership, and integration with several sources, including acquisitions. Standardize identifiers and the core model, let teams extend it within rules, and measure use and accuracy by domain. Expect to run a persistent matching and cleansing function.

**Government and public sector.** Services often rest on long-lived systems, contractors, and shared infrastructure, and incident impact can affect the public. Map dependencies on suppliers and shared platforms explicitly, keep records for audits, and align with continuity planning (see topic 5.6, Service continuity metrics).

## Business case: motivations, ROI, and TCO

The costs are modeling and governance effort, integration of pipelines and discovery, some tooling, and the effort of audits and fixes. Many organizations already own the platform. Population by pipeline is cheap once the template exists. Large programs to populate everything at once have been expensive and have often failed.

The returns are shorter incidents, safer changes, and less time hunting for information. Build the case from your own evidence: the time responders spend finding dependencies in a typical incident, the share of incidents where missing dependency information delayed diagnosis, and changes that caused unexpected impact. The impact prediction hit rate is a direct measure of whether the record would have helped. Avoid published claims about the percentage of incidents caused by change or the cost of outages unless you can trace their source. Count the costs of keeping a large, doubtful record against the value of a small, trusted one.

## Anti-patterns and pitfalls

- **Populating everything first.** A huge, stale record destroys trust. Start with critical services.
- **Discovery as the only source.** It cannot tell you why something exists or who owns it. Combine with declarations.
- **Auditing completeness and calling it quality.** Complete and wrong is worse than incomplete and right. Sample for accuracy.
- **Central teams owning all the data.** They do not know it. Give service teams ownership.
- **Mandatory fields with default values.** They look complete and carry no information. Remove or automate them.
- **Measuring by the number of CIs.** More is not better. Measure accuracy, hit rate, and use.
- **Ignoring relationships.** Without dependencies, a CMDB is an inventory. Invest in the map for critical services.
- **Blaming people for misses.** They stop reporting them. Treat a missed dependency as a finding.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Scope and model | Whatever discovery found | Model defined; broad scope | Question-driven model; critical services mapped | Scope grows when hit rate and use justify it | Federated model across teams and suppliers; shared identifiers |
| Population and quality | Manual or one-time load | Scheduled discovery and imports | Pipelines publish from code; discovery as a check; sampling audits | Accuracy, latency, and duplicates measured and trended | Real-time feeds with automated reconciliation and owner confirmation |
| Use | Rarely consulted | Used by a few teams | Referenced in incidents and changes as standard practice | Impact prediction tested against incidents; use and helpfulness tracked | Record informs automated decisions and shared supplier maps |

## Checklist

- [ ] The questions the CMDB must answer are written down.
- [ ] Scope is limited to critical services, with a defined growth rule.
- [ ] The model has a small set of classes, attributes, and relationship types.
- [ ] Each critical service has an owner who has confirmed its record in the last quarter.
- [ ] Pipelines publish CI changes for services built as code.
- [ ] Discovery results are compared with the record and differences are reviewed.
- [ ] A random accuracy sample is audited each quarter in both directions.
- [ ] Incident reviews record whether the predicted impact was right.
- [ ] CMDB use in incidents and changes is tracked, with a helpfulness question.
- [ ] Unused classes and attributes are retired on a schedule.

## AI prompts

**Define the questions and scope.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Analyze an impact prediction miss.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Design a declaration file for service teams.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Plan a quarterly accuracy audit.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a configuration quality metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a CMDB metric entry carries its gaming vector, guardrail, and independent evidence rule.

## Key takeaways

- Build the CMDB to answer named questions about the services that matter most, and grow it as trust grows.
- Populate it from pipelines and code, use discovery as a second opinion, and let service teams own their records.
- Test quality against events: compare predicted impact with what actually happened in incidents.
- Measure use and helpfulness, not the number of CIs.
- Sample for accuracy from independent evidence in both directions.
- Retire what no one uses, and fix errors at their source.

## References and further reading

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
