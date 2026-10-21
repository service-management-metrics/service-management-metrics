# Introduction to Part 10: Metrics for AI, Automation, and Analytics

**AI makes output cheap and fluent, which breaks the old link between what is produced and what is worth having, so measure what survives, what helps, and what stays under control.**

Every metric in this book rests on an assumption that producing the thing being counted takes real effort. A resolved ticket reflected work. A written article reflected knowledge. A merged change reflected care. Generative AI weakens that assumption. It can draft a reply, an article, a test, or a block of code in seconds, and what it drafts is often plausible and sometimes wrong. The counts go up. Whether the people served are better off is a separate question that the counts cannot answer.

AI also adds new things to measure. Conversational assistants and agents that act on a user's behalf need measures of resolution, handoff, and the harm of wrong actions. The governance of models, prompts, and suppliers needs measures of coverage, control, and incident handling. And people who work beside these tools need their skills, understanding, and sustainable pace protected. The measures in this part draw on the rest of the book, because the guardrails are the same ones: pair each metric with a check on what it could hide, compare with a baseline, sample with people, and keep data about people out of evaluation (see topic 1.2, Goodhart's law and the psychology of metrics).

Agile and ITIL ways of working offer a sensible stance toward all of this. Treat each use of AI as a small experiment. State the expected benefit, try it with willing people, compare with similar work done without it, and decide on the evidence. Keep stakeholders continuously involved, because they are the first to notice when the signal degrades. Aim at a sustainable pace, so that time saved is a choice about quality and learning, not an automatic increase in demand. And remember the aim of building around motivated individuals: AI should relieve tedious work and respect people's judgment, and it should not become a way to monitor them.

Facts about AI tools, products, and rules change quickly. Statements in this part about specific regulations, standards, and tools are dated as of October 2026, and the reader should recheck them. The measurement principles are more durable than any of the technology they describe.

This part also covers the other two of the four lenses, automation and analytics. Automation and orchestration change who does the work and make failures fast and wide, so they are measured on what they remove and what they break. Pipelines produce much of the evidence for change and compliance, so they are measured as systems. Analytics, forecasting, and observability produce the numbers used everywhere else in the book, so their data quality, uncertainty, and cost need their own measures.

## Topics in this part

- **10.1 AI in service management measurement**: where AI enters the work, baselines before adoption, comparisons, time to a checked result, and full cost.
- **10.2 Measuring AI-assisted work**: retention, rework, review load, escaped defects, understanding, and skills.
- **10.3 AI agent and chatbot metrics**: verified resolution, return contacts, handoffs, time to a person, answer accuracy, and the reversal of agent actions.
- **10.4 Metric inflation and quality dilution**: how volume and speed inflate, usefulness sampling, verification burden, and breaking feedback loops.
- **10.5 AI governance and risk metrics**: the register of uses, risk classes, change control for models and prompts, evaluation, oversight, and incidents.
- **10.6 Automation and orchestration metrics**: what automation removes and breaks, coverage that means something, failure and rollback, and human-in-the-loop design.
- **10.7 Pipeline and automated change metrics**: pipeline health, automated approvals, policy as code, and the evidence a pipeline produces.
- **10.8 Analytics and data quality metrics**: completeness, timeliness, lineage, reconciliation, and what a number can and cannot show.
- **10.9 Forecasting and predictive analytics metrics**: forecast error, calibration, intervals, and the decisions forecasts inform.
- **10.10 Observability and telemetry metrics**: coverage of logs, metrics, and traces, signal quality, and the cost of telemetry.

## How these topics interrelate

The foundations topic (see topic 10.1, AI in service management measurement) sets the method: baseline, comparison, sampling, and full cost. It applies to every other topic in the part. The assisted work topic (see topic 10.2, Measuring AI-assisted work) uses that method on the work people do with AI beside them, and looks at what survives and what happens to understanding. The chatbot and agent topic (see topic 10.3, AI agent and chatbot metrics) applies it to systems that face users directly or act on their behalf, where the cost of a wrong answer or action falls on someone else.

Inflation and dilution (see topic 10.4, Metric inflation and quality dilution) is the cautionary companion to all of these. It explains why the easy numbers rise and what to pair with them, and it connects to the usefulness checks in the other topics. Governance (see topic 10.5, AI governance and risk metrics) is the structure that holds the rest in place: it provides the register that tells you what to measure, the risk classes that tell you how deeply, the change control that keeps behavior from drifting unseen, and the incident process for when something goes wrong.

Several guardrail pairs follow. A speed measure should be read with the time to a checked result and the verification burden. A containment or deflection figure should be read with verified resolution and return contacts. A registered-uses count should be read against independent discovery. An adoption figure for an AI tool should be treated as descriptive, and outcomes against comparison carry the weight.

The part links to earlier ones: the review and flow measures of Part 2, the knowledge and self-service measures of Part 3, the security and risk measures of Part 8, and the people measures of Part 9. Topics 10.6 to 10.10 extend the method to automation, pipelines, analytics, forecasting, and observability: the same baseline, the same pairing of speed with quality, and the same habit of checking what the number cannot show. Automation and pipeline measures (see topic 10.6, Automation and orchestration metrics, and topic 10.7, Pipeline and automated change metrics) rest on the data quality measures of topic 10.8 (see topic 10.8, Analytics and data quality metrics), and forecasts (see topic 10.9, Forecasting and predictive analytics metrics) and telemetry (see topic 10.10, Observability and telemetry metrics) feed both. It leads into the final content part, which is about building a metrics program itself, because a program that introduces measurement without care will suffer the same distortions this part describes.
