# Structure (canonical topic manifest)

This file is the structural source of truth for the book. It lists every part and topic with its decimal number, slug, title, and scope. The machine-readable twin is [`topics.tsv`](topics.tsv). The two must agree, and `bin/check` verifies that the topic directories on disk match them exactly. Change the structure here, in `topics.tsv`, and in the topic directories together.

Totals: **12 parts**, **94 topics** (each part opens with an N.0 introduction; Part 12 is the appendices).

Topic directories are `locales/<locale>/topics/<slug>/`. Slugs carry no numbers, so a topic can move without being renamed. Ordering comes from this manifest. The title column is the plan: once a topic exists, the first headline of its `index.md` is the single source of truth for its title, and every other copy follows it. New topics are added at the end of their part, so existing numbers never change (see [conventions.md](conventions.md), "Changing the structure").

The scope column says what the topic owns. Each concept has one **home topic**, and other topics link to it instead of re-explaining it.

## Part 1: Foundations of Measurement

*Why, what, and how to measure without distorting the work.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 1.0 | `foundations-of-measurement` | Introduction to Part 1: Foundations of Measurement | Part introduction: framing, topics in this part, how they interrelate. |
| 1.1 | `why-measure-service-management` | Why measure service management | Why teams that build and run services need numbers, what agile and ITIL each contribute to measurement, and the cost of measuring nothing or the wrong things. |
| 1.2 | `goodharts-law-and-the-psychology-of-metrics` | Goodhart's law and the psychology of metrics | The guardrail behind every other topic: how a measure turns into a target, how gaming happens in ticket and delivery data, and the habits that prevent it. |
| 1.3 | `outcomes-over-output` | Outcomes over output: choosing what to measure | Value, outcomes, outputs, and activity; leading and lagging indicators; ITIL's value co-creation as the test of a good metric. |
| 1.4 | `metrics-governance-and-ownership` | Metrics governance and ownership | Metric owners, definitions, review cadence, retirement, and who may see what; ITIL's measurement and reporting and continual improvement practices. |
| 1.5 | `data-sources-and-instrumentation` | Data sources and instrumentation | ITSM tools, issue trackers, version control, CI/CD, monitoring, the CMDB, and surveys as sources; data quality, timestamps, and status models. |
| 1.6 | `statistical-literacy-for-service-metrics` | Statistical literacy for service metrics | Percentiles over averages, skewed distributions, small samples, control charts, and honest uncertainty for ticket and flow data. |
| 1.7 | `measurement-frameworks` | Measurement frameworks | Goal-Question-Metric, objectives and key results (OKRs), balanced scorecard, critical success factors and key performance indicators, and how they combine with ITIL practices. |

| 1.8 | `itil-5-measurement-and-value-outcomes` | ITIL 5 measurement and value outcomes | How ITIL 5's emphasis on measurable value, digital products, and AI governance (as verified from the owner's own publications, see spec/index.md) changes what a service organization measures; from outputs and SLAs toward outcomes and evidence. Labels ITIL 4 and ITIL 5 statements separately. |

## Part 2: Flow and Continuous Delivery Metrics

*How work moves through agile teams that also run services.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 2.0 | `flow-metrics` | Introduction to Part 2: Flow and Continuous Delivery Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 2.1 | `flow-measures` | Flow measures | Work in progress, throughput, work item age, and cycle time, with the Kanban Guide as one source among several, applied to project and service work. |
| 2.2 | `lead-time-cycle-time-and-flow-efficiency` | Lead time, cycle time, and flow efficiency | Definitions that hold up across teams, where the clocks start and stop, and how to expose waiting time. |
| 2.3 | `work-in-process-and-queueing` | Work in process and queueing | Little's law, utilization and queue growth, WIP limits, and why a fully busy service team is a slow one. |
| 2.4 | `value-stream-metrics` | Value stream metrics | Value stream mapping measures, process time, wait time, percent complete and accurate, and ITIL value streams. |
| 2.5 | `delivery-forecasting-and-planning-metrics` | Delivery forecasting and planning metrics | Forecasting delivery from flow data, planning against capacity, forecast accuracy, goal success, and where team-specific planning measures such as velocity fit and where they mislead. |
| 2.6 | `backlog-and-refinement-metrics` | Backlog and refinement metrics | Backlog size and age, ready work, refinement coverage, and how product and service backlogs differ. |
| 2.7 | `pull-request-and-code-review-metrics` | Pull request and code review metrics | Review time, pull request size, and rework as signals of flow, with the gaming vectors that follow. |
| 2.8 | `dora-metrics` | DORA metrics | Change lead time, deployment frequency, failed deployment recovery time, change fail rate, and deployment rework rate, with the research's own cautions. |
| 2.9 | `operational-work-and-unplanned-work` | Operational work and unplanned work | Planned versus unplanned work, interrupt load, expedite lanes, and capacity allocation between change and run work. |

## Part 3: Service Desk, Incident, and Request Metrics

*How well support and restoration work for users.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 3.0 | `service-desk-incident-and-request-metrics` | Introduction to Part 3: Service Desk, Incident, and Request Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 3.1 | `service-desk-metrics` | Service desk metrics | Contact volume, first contact resolution, abandonment, and handling time; what each rewards and what each hides. |
| 3.2 | `incident-volume-and-priority` | Incident volume and priority | Incident counts, categories, impact and urgency, priority mix, repeat incidents, and normalizing volume against usage. |
| 3.3 | `incident-response-and-resolution-time` | Incident response and resolution time | Time to detect, acknowledge, respond, and resolve; mean time measures and their statistical problems; percentiles instead. |
| 3.4 | `major-incident-metrics` | Major incident metrics | Frequency, duration, customer impact, communication timeliness, and follow-through on actions. |
| 3.5 | `service-request-fulfilment-metrics` | Service request fulfilment metrics | Fulfilment time, backlog, request volume by catalog item, and automation share. |
| 3.6 | `knowledge-management-metrics` | Knowledge management metrics | Article use, reuse in resolution, link rate, freshness, and Knowledge-Centered Service (KCS) indicators. |
| 3.7 | `self-service-and-automation-metrics` | Self-service and automation metrics | Deflection, self-service success, automation coverage, and the shift-left effect on volume and complexity. |

## Part 4: Problem, Change, and Release Metrics

*How change and learning affect stability and speed.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 4.0 | `problem-change-and-release-metrics` | Introduction to Part 4: Problem, Change, and Release Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 4.1 | `problem-management-metrics` | Problem management metrics | Problems opened and closed, known error reuse, recurrence, and time to permanent fix. |
| 4.2 | `postmortem-and-learning-metrics` | Postmortem and learning metrics | Review completion, action item closure, recurrence of causes, and blameless learning signals. |
| 4.3 | `change-enablement-metrics` | Change enablement metrics | Change volume by type, approval lead time, standard change share, and automation of approval. |
| 4.4 | `change-failure-and-rework` | Change failure and rework | Change fail rate, emergency change share, rollback and hotfix rates, and consistent definitions of failure. |
| 4.5 | `release-and-deployment-metrics` | Release and deployment metrics | Deployment frequency, release frequency, feature flag use, release lead time, and separating deployment from release. |
| 4.6 | `technical-debt-and-known-errors` | Technical debt and known errors | Known error backlog, debt stock and interest, and prioritizing fixes against feature work. |

## Part 5: Service Level, Availability, and Reliability Metrics

*What users can count on.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 5.0 | `service-level-availability-and-reliability-metrics` | Introduction to Part 5: Service Level, Availability, and Reliability Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 5.1 | `sla-ola-and-xla-metrics` | SLA, OLA, and XLA metrics | Service level agreement, operational level agreement, and experience level agreement measures; watermelon reporting and how to avoid it. |
| 5.2 | `slis-slos-and-error-budgets` | SLIs, SLOs, and error budgets | Service level indicators and objectives, error budget policy, burn rate, and choosing indicators from what users care about. |
| 5.3 | `availability-metrics` | Availability metrics | Uptime and downtime calculation, user-weighted availability, planned versus unplanned outage, and the arithmetic of nines. |
| 5.4 | `capacity-and-performance-metrics` | Capacity and performance metrics | Utilization, saturation, latency percentiles, headroom, and forecasting demand. |
| 5.5 | `monitoring-and-alert-quality-metrics` | Monitoring and alert quality metrics | Alert volume, actionable alert rate, false positives, detection coverage, and alert fatigue. |
| 5.6 | `service-continuity-metrics` | Service continuity metrics | Recovery time and recovery point objectives met in tests, test frequency, game day findings, and plan currency. |
| 5.7 | `toil-and-on-call-metrics` | Toil and on-call metrics | Pages per shift, out-of-hours load, toil share of time, and sustainable rotation measures. |

## Part 6: Customer and Experience Metrics

*Whether users are better off.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 6.0 | `customer-and-experience-metrics` | Introduction to Part 6: Customer and Experience Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 6.1 | `customer-satisfaction-metrics` | Customer satisfaction metrics | Customer satisfaction (CSAT), net promoter score (NPS), customer effort score (CES), survey design, response bias, and sample size. |
| 6.2 | `experience-level-agreements` | Experience level agreements | Measuring experience instead of only operational targets; sentiment, effort, and journey measures. |
| 6.3 | `service-adoption-and-catalog-metrics` | Service adoption and catalog metrics | Catalog item use, adoption and abandonment, request mix, and treating the catalog as a product backlog. |
| 6.4 | `user-and-employee-experience` | User and employee experience | Digital employee experience, friction, time lost to IT issues, and internal customer outcomes. |
| 6.5 | `value-realization-and-business-outcomes` | Value realization and business outcomes | Tying service work to business outcomes, benefits tracking, and the limits of attribution. |

## Part 7: Asset, Configuration, and Financial Metrics

*Knowing what you have and what it costs.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 7.0 | `asset-configuration-and-financial-metrics` | Introduction to Part 7: Asset, Configuration, and Financial Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 7.1 | `it-asset-management-metrics` | IT asset management metrics | Inventory accuracy, lifecycle stage coverage, discovery coverage, and reconciliation rates. |
| 7.2 | `software-asset-and-license-metrics` | Software asset and license metrics | License compliance position, shelfware, SaaS sprawl, and software bill of materials coverage. |
| 7.3 | `hardware-asset-lifecycle-metrics` | Hardware asset lifecycle metrics | Age profile, refresh rate, failure rate, utilization, and disposal and e-waste measures. |
| 7.4 | `configuration-and-cmdb-quality-metrics` | Configuration and CMDB quality metrics | Completeness, accuracy, timeliness, relationship coverage, and CMDB value measured by use. |
| 7.5 | `service-cost-and-unit-economics` | Service cost and unit economics | Cost per service, per user, and per transaction; showback and chargeback; stable funding of teams. |
| 7.6 | `finops-and-cloud-cost-metrics` | FinOps and cloud cost metrics | Cost allocation coverage, unit cost, commitment coverage, waste, and forecast accuracy. |
| 7.7 | `return-on-investment-and-business-case` | Return on investment and business case | ROI, total cost of ownership (TCO), payback, and building a credible business case for improvements. |

## Part 8: Security, Risk, Compliance, and Supplier Metrics

*Trust, control, and the third parties behind the service.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 8.0 | `security-risk-compliance-and-supplier-metrics` | Introduction to Part 8: Security, Risk, Compliance, and Supplier Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 8.1 | `security-incident-and-vulnerability-metrics` | Security incident and vulnerability metrics | Time to patch, vulnerability age, exposure, security incident rates, and DevSecOps signals. |
| 8.2 | `risk-and-control-metrics` | Risk and control metrics | Risk register health, key risk indicators, control effectiveness, and risk-based change approval. |
| 8.3 | `compliance-and-audit-metrics` | Compliance and audit metrics | Audit findings, evidence automation, control coverage, and compliance as a by-product of delivery. |
| 8.4 | `supplier-and-contract-metrics` | Supplier and contract metrics | Supplier performance against contract, multi-sourcing and service integration measures, and exit readiness. |
| 8.5 | `regulated-and-government-reporting` | Regulated and government reporting | Statutory and public-sector reporting obligations treated as design inputs to a metrics program. |

## Part 9: People, Teams, and Improvement Metrics

*The health of the people and the habit of improving.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 9.0 | `people-teams-and-improvement-metrics` | Introduction to Part 9: People, Teams, and Improvement Metrics | Part introduction: framing, topics in this part, how they interrelate. |
| 9.1 | `team-health-and-developer-experience` | Team health and developer experience | The SPACE framework and developer experience measures for teams that build and run services. |
| 9.2 | `satisfaction-and-well-being-metrics` | Satisfaction and well-being metrics | Engagement, burnout signals, psychological safety, and handling sensitive data ethically. |
| 9.3 | `collaboration-and-handoff-metrics` | Collaboration and handoff metrics | Handoffs between teams, escalations, swarming, and cross-team dependency delay. |
| 9.4 | `skills-and-learning-metrics` | Skills and learning metrics | Skill coverage, key-person risk, training outcomes, and communities of practice. |
| 9.5 | `continual-improvement-metrics` | Continual improvement metrics | Improvement backlog throughput, retrospective action follow-through, and benefits realized. |
| 9.6 | `organizational-change-and-adoption-metrics` | Organizational change and adoption metrics | Practice adoption, behaviour change, and measuring a transformation without gaming it. |

## Part 10: Metrics for AI, Automation, and Analytics

*What AI, automation, and analytics change about the numbers, and how to measure them honestly.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 10.0 | `metrics-for-ai-automation-and-analytics` | Introduction to Part 10: Metrics for AI, Automation, and Analytics | Part introduction: framing, topics in this part, how they interrelate. |
| 10.1 | `ai-in-service-management-measurement` | AI in service management measurement | Where AI enters ITSM and continuous delivery, and which baselines to capture before it does. |
| 10.2 | `measuring-ai-assisted-work` | Measuring AI-assisted work | Adoption, acceptance, rework, quality, and outcome measures for AI-assisted delivery and support. |
| 10.3 | `ai-agent-and-chatbot-metrics` | AI agent and chatbot metrics | Containment, deflection quality, escalation, resolution accuracy, and user trust. |
| 10.4 | `metric-inflation-and-quality-dilution` | Metric inflation and quality dilution | How AI inflates volume and speed measures, and the paired quality measures that catch it. |
| 10.5 | `ai-governance-and-risk-metrics` | AI governance and risk metrics | Model and prompt change control, incident rates, bias and safety review coverage, and audit evidence. |
| 10.6 | `automation-and-orchestration-metrics` | Automation and orchestration metrics | Automation coverage, success and failure rates, manual override, time saved, orchestration lead time, and the maintenance cost of automations. |
| 10.7 | `pipeline-and-automated-change-metrics` | Pipeline and automated change metrics | Pipeline duration and reliability, automated approval share, policy-as-code coverage, rollback rate, and evidence completeness for automated change. |
| 10.8 | `analytics-and-data-quality-metrics` | Analytics and data quality metrics | Completeness, accuracy, timeliness, and lineage of service data; dashboard use; decisions changed by analytics; the cost of bad data. |
| 10.9 | `forecasting-and-predictive-analytics-metrics` | Forecasting and predictive analytics metrics | Forecast accuracy and calibration, prediction intervals, drift, alert precision and recall, and avoiding false confidence. |
| 10.10 | `observability-and-telemetry-metrics` | Observability and telemetry metrics | Instrumentation coverage, signal quality, trace and log completeness, telemetry cost, and time to understand an unfamiliar failure. |

## Part 11: Building a Metrics Program

*From a handful of measures to a habit.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 11.0 | `building-a-metrics-program` | Introduction to Part 11: Building a Metrics Program | Part introduction: framing, topics in this part, how they interrelate. |
| 11.1 | `designing-a-service-metrics-dashboard` | Designing a service metrics dashboard | Audiences, a small balanced set, context and trend, and views for teams, services, and leadership. |
| 11.2 | `tooling-landscape` | Tooling landscape | Build versus buy, ITSM and engineering analytics platforms, data pipelines, and vendor-neutral selection criteria. |
| 11.3 | `rolling-out-metrics-without-breeding-fear` | Rolling out metrics without breeding fear | Transparency, team ownership, no individual league tables, and a rollout that earns trust. |
| 11.4 | `maturity-model-for-metrics-programs` | Maturity model for metrics programs | The five-level scale applied to a metrics program itself. |
| 11.5 | `incremental-adoption-roadmap` | An incremental adoption roadmap | A first 30, 90, and 180 days plan, starting where you are. |

## Part 12: Appendices

*Reference material.*

| Topic | Slug | Title | Scope |
| --- | --- | --- | --- |
| 12.0 | `appendices` | Appendices | Introduction to the reference material. Appendices do not follow the content topic template. |
| 12.1 | `glossary` | Glossary | Terms and acronyms, each pointing to its home topic. |
| 12.2 | `metric-definitions-and-formulas-reference` | Metric definitions and formulas reference | One entry per metric: definition, formula, unit, data source, gaming vector, and guardrail. |
| 12.3 | `checklists` | Checklists | Metric review, dashboard launch, and program audit. |
| 12.4 | `templates` | Templates | Metrics charter, metric card, dashboard specification, and review agenda. |
| 12.5 | `maturity-self-assessment` | Maturity self-assessment | The consolidated maturity model for a team to self-assess. |
| 12.6 | `references-and-further-reading` | References and further reading | Consolidated references. |
| 12.7 | `index` | Index | Concepts, frameworks, and metrics by topic number. |
