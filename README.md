# Service Management Metrics

A practical handbook for measuring service management in the age of ITIL 5, through four lenses: agile, AI, automation, and analytics. Flow, incidents, changes, service levels, customer experience, assets, cost, risk, people, AI, automation, and analytics, with the gaming vector and guardrail for every metric.

It is the metrics companion to the [Service Management Guide](https://service-management-guide.github.io), which holds the practices.

## Who this is for

Delivery teams, service desk and operations staff, product and service owners, automation and AI engineers, data and analytics practitioners, agile coaches, service and IT managers, CIOs, and anyone preparing for ITIL or agile certification.

## The idea

ITIL (Version 5), introduced by PeopleCert in 2026, frames service management around digital products and services, AI, and measurable value. Agile aims for continuous delivery, continuous stakeholder involvement, continuous improvement, and sustainable pace. Automation and AI change what the numbers mean: volume and speed inflate while quality can quietly fall. This book joins these into a small, balanced, humane set of measures. Its guardrail is [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): a measure that becomes a target stops being a good measure. Metrics here describe teams, services, and systems. They are never used to rank people.

## How to use this book

- **Read a topic** for metric definitions, recommendations, gaming vectors and guardrails, a fictional worked example, four points of view, and the agile, AI, automation, and analytics lens.
- **Talk it through.** Every topic has six questions to discuss with your team.
- **Use the AI prompts and skills.** Fill in the `[placeholders]`; prompts never ask an AI to invent metrics, benchmark values, or sources.
- **Check where you are** with each topic's five-level maturity table. It is a conversation tool, not a certification.

## Contents

94 topics in 12 parts, written in English (World), locale `en-001`. Unwritten topics are stubs. The specification is in [`spec/`](spec/index.md).

<!-- toc:start -->
**Part 1: Foundations of Measurement**

- Topic 1.0: [Introduction to Part 1: Foundations of Measurement](locales/en-001/topics/foundations-of-measurement/)
- Topic 1.1: [Why measure service management](locales/en-001/topics/why-measure-service-management/)
- Topic 1.2: [Goodhart's law and the psychology of metrics](locales/en-001/topics/goodharts-law-and-the-psychology-of-metrics/)
- Topic 1.3: [Outcomes over output: choosing what to measure](locales/en-001/topics/outcomes-over-output/)
- Topic 1.4: [Metrics governance and ownership](locales/en-001/topics/metrics-governance-and-ownership/)
- Topic 1.5: [Data sources and instrumentation](locales/en-001/topics/data-sources-and-instrumentation/)
- Topic 1.6: [Statistical literacy for service metrics](locales/en-001/topics/statistical-literacy-for-service-metrics/)
- Topic 1.7: [Measurement frameworks](locales/en-001/topics/measurement-frameworks/)
- Topic 1.8: [ITIL 5 measurement and value outcomes](locales/en-001/topics/itil-5-measurement-and-value-outcomes/)

**Part 2: Flow and Continuous Delivery Metrics**

- Topic 2.0: [Introduction to Part 2: Flow and Continuous Delivery Metrics](locales/en-001/topics/flow-metrics/)
- Topic 2.1: [Flow measures](locales/en-001/topics/flow-measures/)
- Topic 2.2: [Lead time, cycle time, and flow efficiency](locales/en-001/topics/lead-time-cycle-time-and-flow-efficiency/)
- Topic 2.3: [Work in process and queueing](locales/en-001/topics/work-in-process-and-queueing/)
- Topic 2.4: [Value stream metrics](locales/en-001/topics/value-stream-metrics/)
- Topic 2.5: [Delivery forecasting and planning metrics](locales/en-001/topics/delivery-forecasting-and-planning-metrics/)
- Topic 2.6: [Backlog and refinement metrics](locales/en-001/topics/backlog-and-refinement-metrics/)
- Topic 2.7: [Pull request and code review metrics](locales/en-001/topics/pull-request-and-code-review-metrics/)
- Topic 2.8: [DORA metrics](locales/en-001/topics/dora-metrics/)
- Topic 2.9: [Operational work and unplanned work](locales/en-001/topics/operational-work-and-unplanned-work/)

**Part 3: Service Desk, Incident, and Request Metrics**

- Topic 3.0: [Introduction to Part 3: Service Desk, Incident, and Request Metrics](locales/en-001/topics/service-desk-incident-and-request-metrics/)
- Topic 3.1: [Service desk metrics](locales/en-001/topics/service-desk-metrics/)
- Topic 3.2: [Incident volume and priority](locales/en-001/topics/incident-volume-and-priority/)
- Topic 3.3: [Incident response and resolution time](locales/en-001/topics/incident-response-and-resolution-time/)
- Topic 3.4: [Major incident metrics](locales/en-001/topics/major-incident-metrics/)
- Topic 3.5: [Service request fulfilment metrics](locales/en-001/topics/service-request-fulfilment-metrics/)
- Topic 3.6: [Knowledge management metrics](locales/en-001/topics/knowledge-management-metrics/)
- Topic 3.7: [Self-service and automation metrics](locales/en-001/topics/self-service-and-automation-metrics/)

**Part 4: Problem, Change, and Release Metrics**

- Topic 4.0: [Introduction to Part 4: Problem, Change, and Release Metrics](locales/en-001/topics/problem-change-and-release-metrics/)
- Topic 4.1: [Problem management metrics](locales/en-001/topics/problem-management-metrics/)
- Topic 4.2: [Postmortem and learning metrics](locales/en-001/topics/postmortem-and-learning-metrics/)
- Topic 4.3: [Change enablement metrics](locales/en-001/topics/change-enablement-metrics/)
- Topic 4.4: [Change failure and rework](locales/en-001/topics/change-failure-and-rework/)
- Topic 4.5: [Release and deployment metrics](locales/en-001/topics/release-and-deployment-metrics/)
- Topic 4.6: [Technical debt and known errors](locales/en-001/topics/technical-debt-and-known-errors/)

**Part 5: Service Level, Availability, and Reliability Metrics**

- Topic 5.0: [Introduction to Part 5: Service Level, Availability, and Reliability Metrics](locales/en-001/topics/service-level-availability-and-reliability-metrics/)
- Topic 5.1: [SLA, OLA, and XLA metrics](locales/en-001/topics/sla-ola-and-xla-metrics/)
- Topic 5.2: [SLIs, SLOs, and error budgets](locales/en-001/topics/slis-slos-and-error-budgets/)
- Topic 5.3: [Availability metrics](locales/en-001/topics/availability-metrics/)
- Topic 5.4: [Capacity and performance metrics](locales/en-001/topics/capacity-and-performance-metrics/)
- Topic 5.5: [Monitoring and alert quality metrics](locales/en-001/topics/monitoring-and-alert-quality-metrics/)
- Topic 5.6: [Service continuity metrics](locales/en-001/topics/service-continuity-metrics/)
- Topic 5.7: [Toil and on-call metrics](locales/en-001/topics/toil-and-on-call-metrics/)

**Part 6: Customer and Experience Metrics**

- Topic 6.0: [Introduction to Part 6: Customer and Experience Metrics](locales/en-001/topics/customer-and-experience-metrics/)
- Topic 6.1: [Customer satisfaction metrics](locales/en-001/topics/customer-satisfaction-metrics/)
- Topic 6.2: [Experience level agreements](locales/en-001/topics/experience-level-agreements/)
- Topic 6.3: [Service adoption and catalog metrics](locales/en-001/topics/service-adoption-and-catalog-metrics/)
- Topic 6.4: [User and employee experience](locales/en-001/topics/user-and-employee-experience/)
- Topic 6.5: [Value realization and business outcomes](locales/en-001/topics/value-realization-and-business-outcomes/)

**Part 7: Asset, Configuration, and Financial Metrics**

- Topic 7.0: [Introduction to Part 7: Asset, Configuration, and Financial Metrics](locales/en-001/topics/asset-configuration-and-financial-metrics/)
- Topic 7.1: [IT asset management metrics](locales/en-001/topics/it-asset-management-metrics/)
- Topic 7.2: [Software asset and license metrics](locales/en-001/topics/software-asset-and-license-metrics/)
- Topic 7.3: [Hardware asset lifecycle metrics](locales/en-001/topics/hardware-asset-lifecycle-metrics/)
- Topic 7.4: [Configuration and CMDB quality metrics](locales/en-001/topics/configuration-and-cmdb-quality-metrics/)
- Topic 7.5: [Service cost and unit economics](locales/en-001/topics/service-cost-and-unit-economics/)
- Topic 7.6: [FinOps and cloud cost metrics](locales/en-001/topics/finops-and-cloud-cost-metrics/)
- Topic 7.7: [Return on investment and business case](locales/en-001/topics/return-on-investment-and-business-case/)

**Part 8: Security, Risk, Compliance, and Supplier Metrics**

- Topic 8.0: [Introduction to Part 8: Security, Risk, Compliance, and Supplier Metrics](locales/en-001/topics/security-risk-compliance-and-supplier-metrics/)
- Topic 8.1: [Security incident and vulnerability metrics](locales/en-001/topics/security-incident-and-vulnerability-metrics/)
- Topic 8.2: [Risk and control metrics](locales/en-001/topics/risk-and-control-metrics/)
- Topic 8.3: [Compliance and audit metrics](locales/en-001/topics/compliance-and-audit-metrics/)
- Topic 8.4: [Supplier and contract metrics](locales/en-001/topics/supplier-and-contract-metrics/)
- Topic 8.5: [Regulated and government reporting](locales/en-001/topics/regulated-and-government-reporting/)

**Part 9: People, Teams, and Improvement Metrics**

- Topic 9.0: [Introduction to Part 9: People, Teams, and Improvement Metrics](locales/en-001/topics/people-teams-and-improvement-metrics/)
- Topic 9.1: [Team health and developer experience](locales/en-001/topics/team-health-and-developer-experience/)
- Topic 9.2: [Satisfaction and well-being metrics](locales/en-001/topics/satisfaction-and-well-being-metrics/)
- Topic 9.3: [Collaboration and handoff metrics](locales/en-001/topics/collaboration-and-handoff-metrics/)
- Topic 9.4: [Skills and learning metrics](locales/en-001/topics/skills-and-learning-metrics/)
- Topic 9.5: [Continual improvement metrics](locales/en-001/topics/continual-improvement-metrics/)
- Topic 9.6: [Organizational change and adoption metrics](locales/en-001/topics/organizational-change-and-adoption-metrics/)

**Part 10: Metrics for AI, Automation, and Analytics**

- Topic 10.0: [Introduction to Part 10: Metrics for AI, Automation, and Analytics](locales/en-001/topics/metrics-for-ai-automation-and-analytics/)
- Topic 10.1: [AI in service management measurement](locales/en-001/topics/ai-in-service-management-measurement/)
- Topic 10.2: [Measuring AI-assisted work](locales/en-001/topics/measuring-ai-assisted-work/)
- Topic 10.3: [AI agent and chatbot metrics](locales/en-001/topics/ai-agent-and-chatbot-metrics/)
- Topic 10.4: [Metric inflation and quality dilution](locales/en-001/topics/metric-inflation-and-quality-dilution/)
- Topic 10.5: [AI governance and risk metrics](locales/en-001/topics/ai-governance-and-risk-metrics/)
- Topic 10.6: [Automation and orchestration metrics](locales/en-001/topics/automation-and-orchestration-metrics/)
- Topic 10.7: [Pipeline and automated change metrics](locales/en-001/topics/pipeline-and-automated-change-metrics/)
- Topic 10.8: [Analytics and data quality metrics](locales/en-001/topics/analytics-and-data-quality-metrics/)
- Topic 10.9: [Forecasting and predictive analytics metrics](locales/en-001/topics/forecasting-and-predictive-analytics-metrics/)
- Topic 10.10: [Observability and telemetry metrics](locales/en-001/topics/observability-and-telemetry-metrics/)

**Part 11: Building a Metrics Program**

- Topic 11.0: [Introduction to Part 11: Building a Metrics Program](locales/en-001/topics/building-a-metrics-program/)
- Topic 11.1: [Designing a service metrics dashboard](locales/en-001/topics/designing-a-service-metrics-dashboard/)
- Topic 11.2: [Tooling landscape](locales/en-001/topics/tooling-landscape/)
- Topic 11.3: [Rolling out metrics without breeding fear](locales/en-001/topics/rolling-out-metrics-without-breeding-fear/)
- Topic 11.4: [Maturity model for metrics programs](locales/en-001/topics/maturity-model-for-metrics-programs/)
- Topic 11.5: [An incremental adoption roadmap](locales/en-001/topics/incremental-adoption-roadmap/)

**Part 12: Appendices**

- Topic 12.0: [Appendices](locales/en-001/topics/appendices/)
- Topic 12.1: [Glossary](locales/en-001/topics/glossary/)
- Topic 12.2: [Metric definitions and formulas reference](locales/en-001/topics/metric-definitions-and-formulas-reference/)
- Topic 12.3: [Checklists](locales/en-001/topics/checklists/)
- Topic 12.4: [Templates](locales/en-001/topics/templates/)
- Topic 12.5: [Maturity self-assessment](locales/en-001/topics/maturity-self-assessment/)
- Topic 12.6: [References and further reading](locales/en-001/topics/references-and-further-reading/)
- Topic 12.7: [Index](locales/en-001/topics/index/)
<!-- toc:end -->

## Trademarks

ITIL(R) is a registered trademark of its owner. SAFe(R), Scrum, and other names are trademarks of their owners. This book is independent and is not affiliated with or endorsed by any framework owner. Nothing here is legal advice.
