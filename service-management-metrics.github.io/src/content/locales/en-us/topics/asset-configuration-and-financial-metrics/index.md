# Introduction to Part 7: Asset, Configuration, and Financial Metrics

**Knowing what you have, how it fits together, and what it costs is the foundation that every other service decision stands on, and it is best kept up to date as a by-product of the work, not as a separate chore.**

Teams that deliver and run services make hundreds of decisions a week that depend on facts about things: which servers does this change touch, which licenses expire next month, who owns this cloud account, what does this service cost per customer. When those facts are wrong or missing, the decisions are guesses. Asset, configuration, and financial records exist to turn guesses into informed choices, and the metrics in this part ask how good those records are and how well they are used.

Agile practice and ITIL approach this ground from different directions, and they are stronger together. ITIL contributes the discipline of records, owners, lifecycles, and service costing. Agile and DevOps contribute the habit of delivering change continuously, with infrastructure described as code and pipelines that can register what they create. The best results come when delivery pipelines feed the records automatically, and when procurement, finance, security, operations, and engineering collaborate continuously around one shared picture. Teams that own their services, and that are trusted and given the information they need, keep the records true because they feel the cost when the records are wrong.

These records are also easy to inflate. An inventory can look perfect because it only lists what was already known. A cost number can look low because shared costs were allocated elsewhere. A business case can look strong because the benefits were generous. Each metric in this part therefore comes with the way it gets gamed and a guardrail that checks it against independent evidence, never against itself (see topic 1.2, Goodhart's law and the psychology of metrics). None of these measures ranks people or teams. They describe estates, services, and decisions.

The four lenses apply as follows. Continuous delivery and infrastructure as code make records a by-product of work. AI services, models, and usage-based licenses are assets and costs that need records, owners, and unit costs paired with quality. Automation feeds discovery and cost collection and must itself be measured for gaps. Analytics reports accuracy from samples, with the date and size of the sample.

## Topics in this part

- **7.1 IT asset management metrics**: inventory accuracy, discovery coverage, reconciliation, ownership, and lifecycle completeness, with records captured as work happens.
- **7.2 Software asset and license metrics**: license position, utilization, shelfware, sprawl, renewal readiness, and software bills of materials.
- **7.3 Hardware asset lifecycle metrics**: age profile, failure rate, replacement time, utilization, secure disposal, and reuse.
- **7.4 Configuration and CMDB quality metrics**: completeness, accuracy, dependency coverage, impact prediction, and use of the configuration record.
- **7.5 Service cost and unit economics**: cost per service, unit cost, allocation, showback, and funding persistent teams.
- **7.6 FinOps and cloud cost metrics**: allocation by tag, waste, commitments, anomalies, forecast variance, and emissions.
- **7.7 Return on investment and business case**: total cost of ownership, return, payback, net present value, and the accuracy of past forecasts.

## How these topics interrelate

The first four topics describe the things themselves. Asset records (see topic 7.1, IT asset management metrics) say what exists and who owns it. Software and hardware topics (see topic 7.2, Software asset and license metrics, and topic 7.3, Hardware asset lifecycle metrics) add the specific lifecycles and obligations of each class. The configuration topic (see topic 7.4, Configuration and CMDB quality metrics) adds relationships, so that you can say what depends on what. They share a method: capture at the moment of change, check against independent evidence in both directions, and keep the record small enough to keep true.

The last three topics describe what the things cost and whether the cost is worth it. Service costing (see topic 7.5, Service cost and unit economics) turns spending into cost per service and per unit, which depends on the asset and configuration records to attribute cost fairly. Cloud cost practice (see topic 7.6, FinOps and cloud cost metrics) applies the same ideas where spending changes by the hour and tags are the link between a charge and an owner. The business case topic (see topic 7.7, Return on investment and business case) uses all of this to make investment choices, and it asks you to check those choices against what happened.

Several guardrail pairs follow. An inventory accuracy figure should be read with the gap list and the ownerless share. A license utilization rate should be read with user access experience, so that reclaiming seats does not frustrate people. A cost measure should always sit beside a reliability or satisfaction measure (see topic 5.2, SLIs, SLOs, and error budgets), so that savings are not bought with a worse service. A business case should be read with the track record of earlier forecasts.

This part connects forward and back. The benefits evidence in Part 6 (see topic 6.5, Value realization and business outcomes) feeds the business case. The risk, audit, and supplier measures in Part 8 depend on the asset and contract records described here. Part 9 turns to the people who keep all of this running, and to the habits of continuous improvement that make the records better over time.
