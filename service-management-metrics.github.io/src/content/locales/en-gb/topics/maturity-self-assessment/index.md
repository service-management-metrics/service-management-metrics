# Maturity self-assessment

A consolidated self-assessment for a team. It uses the shared five-level scale (Initiate, Develop, Standardise, Manage, Orchestrate) in two views: the six dimensions of a metrics programme, and the metric areas covered by Parts 2 to 10. It takes about an hour. It is a conversation tool and not a certification, and it is not the same as the process maturity scales in ITIL, ISO/IEC 33000, or the Capability Maturity Model. Results stay with the team (see topic 11.4, Maturity model for metrics programmes).

## How to run it

1. **Bring the team together for an hour** with a facilitator who is not the team's manager. Show the scale below.
2. **Mark privately.** Each person marks the level they think the team is at, for each row, on their own.
3. **Compare and discuss.** Differences reveal different experiences of the same practice. Ask for an example for each level claimed ("Which decision last quarter?").
4. **Agree a team view** and write down the evidence behind it.
5. **Choose one or two small next steps,** each finishable in a quarter, with an owner and a date. Put them in the improvement register (see topic 9.5, Continual improvement metrics).
6. **Keep the result with the team.** Share only aggregated ranges and themes beyond the team. Never average the rows into one score, and never rank teams.

Reassess about twice a year and after a reorganisation, a tool change, or a breach of the metrics charter. Expect some rows to slip back, and treat that as information.

## The scale

| Level | Name | What it looks like |
| --- | --- | --- |
| 1 | **Initiate** | The team recognises the practice but has no consistent way of doing it. Work is ad hoc, depends on individuals, and is mostly undocumented. |
| 2 | **Develop** | Some teams have working practices, but they differ from team to team. Early tools, templates, and habits exist but are not shared or expected. |
| 3 | **Standardise** | A common, lightweight approach is written down and used across teams. Roles are clear. The approach is a starting point that teams may tailor with a stated reason. |
| 4 | **Manage** | Outcomes are measured and reviewed. Gaps lead to improvement work that is planned and resourced. |
| 5 | **Orchestrate** | The practice is coordinated across teams, suppliers, and customers, and is adapted continually as conditions change. Improvement is routine and comes from everyone. |

Higher is not always better. Choose the level that fits your size, risk, and needs, and write down why.

## View 1: the metrics programme

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Questions and purpose | Measures collected because data exists | Some teams state the questions they ask | Audiences and questions written down; measures mapped to them | Question coverage reviewed; unanswered questions drive new measures | Audiences, including customers and suppliers, shape the measures |
| Definitions and ownership | Definitions vary by person | Some written; informal owners | Catalogue with definition, source, owner, and limits | Definition completeness and challenges managed | Definitions co-owned across teams and suppliers |
| Data and tooling | Manual and fragile | Some automated feeds | Tested pipelines, shared store, portable data | Reliability, reconciliation, and exit readiness managed | Federated pipelines with shared contracts |
| Use in decisions | Numbers displayed, rarely used | Used in some reviews | Regular reviews that record decisions | Decision evidence tracked and acted on | Decisions linked across teams to outcomes |
| Trust and safety | Fear or indifference | Verbal assurances | Written charter; individual views off; safety survey | Breaches reviewed in the open; candour signals managed | Trust routine; programme shaped by staff and partners |
| Review and evolution | None | Occasional clean-up | Periodic review with teams; retirement rule | Assessment steps funded and completed | The programme improves continually from everyone |

## View 2: the metric areas

For each area, mark the level that best describes how your team measures and uses it today. Skip areas that do not apply. The prompts are examples of what a team at Level 3 can say.

| Area | Home part | A Level 3 team can say |
| --- | --- | --- |
| Flow and continuous delivery | Part 2 | We know our lead and cycle times as distributions, we limit work in process, and we read delivery speed beside stability (see topic 2.8, DORA metrics). |
| Service desk, incident, and request | Part 3 | We measure time to a useful resolution with return contacts, and our major incidents have a standard review (see topic 3.4, Major incident metrics). |
| Problem, change, and release | Part 4 | Our changes carry a risk-proportional path, and we track rework and the cost of known errors (see topic 4.3, Change enablement metrics). |
| Service level, availability, and reliability | Part 5 | Our service levels are defined from user outcomes, with an error budget used in decisions (see topic 5.2, SLIs, SLOs, and error budgets). |
| Customer and experience | Part 6 | We ask users about their experience in ways that do not tire them, and we act on the answers (see topic 6.2, Experience level agreements). |
| Asset, configuration, and financial | Part 7 | We know what we own and run, and the cost per unit of use of our services (see topic 7.5, Service cost and unit economics). |
| Security, risk, compliance, and supplier | Part 8 | Our risk and control evidence is real, our suppliers are measured on outcomes, and none of it is gamed for audit (see topic 8.2, Risk and control metrics). |
| People, teams, and improvement | Part 9 | We hear from our people about pace and well-being, and we track improvement work through to results (see topic 9.1, Team health and developer experience). |
| Metrics for AI, automation, and analytics | Part 10 | We compare AI-assisted work with a baseline, sample outputs for usefulness, and register our AI uses (see topic 10.1, AI in service management measurement). Our automations and pipelines have owners, post-run checks, and a tested way to undo (see topic 10.6, Automation and orchestration metrics, and topic 10.7, Pipeline and automated change metrics). We show data quality and uncertainty beside our numbers and log our forecasts against actuals (see topic 10.8, Analytics and data quality metrics, and topic 10.9, Forecasting and predictive analytics metrics). |
| ITIL 5 foundations | Part 1 | We have an estate map with owners, outcome statements with evidence, and a verification log for ITIL 5 claims, each labelled verified or unconfirmed (see topic 1.8, ITIL 5 measurement and value outcomes). |

## Recording the result

```text
Team: [name]   Date: [date]   Facilitator: [name]
Participants: [roles]

View 1
| Dimension | Team view | Evidence | Next step (owner, date) |
| [row] | [1-5] | [example] | [step] |

View 2
| Area | Team view | Evidence | Next step |
| [row] | [1-5 or n/a] | [example] | [step] |

Differences that surprised us: [notes]
What we will never use this for: [ranking, funding, performance reviews]
Next assessment: [date]
```

## Reading the profile

- **Look for the limiting row.** Trust and definitions often limit the others. A small gain there can unlock the rest.
- **Compare rows, not teams.** The useful question is where your team is stronger or weaker, not how it compares with another.
- **Ask what changed.** A rise after a quarter should be backed by a decision, a habit, or a result you can name. A rise without evidence suggests the marking was optimistic.
- **Stop at good enough.** A team may reasonably stay at Level 3 in some rows for years.
