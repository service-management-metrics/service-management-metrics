# AI in service management measurement

**Before AI changes the work, write down what the work looks like today, then measure each use of AI against that baseline and against comparable work done without it, because the claims will be large and the evidence usually small.**

## Overview and motivation

Artificial intelligence now sits inside many of the tools that teams use to build and run services. [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) is the capability of computational systems to perform tasks associated with human intelligence. Within it, [machine learning](https://en.wikipedia.org/wiki/Machine_learning) systems learn patterns from data, and [generative AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) systems, often built on [large language models](https://en.wikipedia.org/wiki/Large_language_model), produce text, code, and other content in response to prompts. In IT service management (ITSM) these capabilities appear in ticket triage, summarization of incidents, drafting of knowledge articles, suggested responses for the service desk, code completion and review in delivery pipelines, anomaly detection in monitoring, and conversational assistants for users. [AIOps](https://en.wikipedia.org/wiki/AIOps) is the name often given to the application of AI to IT operations data.

The claims made for these tools are large, and the evidence in any given organization is usually small. Vendors report time saved. Early adopters report enthusiasm. Executives ask for the efficiency gain that was promised. Teams meanwhile report that the output needs checking, that some suggestions are confidently wrong, and that the work feels different. Measurement is how an organization finds out which of these is true for its own work. This part of the book takes AI seriously as a thing to be measured, with the same guardrails as any other metric family.

AI changes the measurement problem in four ways.

- **Volume and speed rise while quality becomes harder to see.** AI can produce tickets, replies, code, and documents quickly, so measures of output go up. Whether the output is good is a separate question (see topic 10.4, Metric inflation and quality dilution).
- **Baselines vanish.** Once AI is in daily use, you cannot recover what the work looked like without it. A baseline must be captured before the change, or a comparison group must exist.
- **Humans stay in the loop, with consequences.** [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) designs keep a person responsible for the result. People reviewing machine output may defer to it too readily, a pattern known as [automation bias](https://en.wikipedia.org/wiki/Automation_bias), or they may spend more time checking than they saved.
- **Outputs can be fluent and wrong.** A [hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) is a confident output not supported by the input or by fact. Measures must include a check on correctness, sampled by a person.

Agile and ITIL ways of working both provide a stance toward this. The agile aims of continuous delivery, continuous improvement, and ongoing evolution suggest treating each use of AI as a small experiment: state the expected benefit, try it with a few willing people, compare, and decide. ITIL's guiding principle of progressing iteratively with feedback points the same way, and its emphasis on value asks what outcome improves for users and the business, not how much text is produced. The aim of motivated people is served when AI relieves tedious work and respects their judgment, and it is not served when AI becomes a way to increase pace or to monitor the people who use it. Sustainable pace means that time saved should not be silently converted into more demand.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to AI in its sharpest form. If "AI adoption" or "AI-generated share of code" becomes a target, people will use the tool where it does not help, and quality will pay for the number (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic covers the foundations: where AI enters the work, what baselines to capture, and which measures show whether a use of AI is helping. The next topics go deeper on assisted work, on agents and chatbots, on inflation and dilution, and on governance. Facts about AI products and rules change quickly, and statements about specific tools or regulations in this part are dated as of October 2026 and should be rechecked.

## Key principles

- **Capture a baseline before introducing AI.** Without one, every benefit claim is an opinion.
- **Treat each use as an experiment with a comparison.** Compare with similar work done without AI, over the same period.
- **Measure quality by sampling, with people.** Fluent output is not correct output.
- **Count the full cost.** Include review time, rework, licenses, and inference costs.
- **Keep people accountable and informed.** The person using AI answers for the result.
- **Do not let AI become a pace increase or a monitor.** Time saved is a choice about how to use the time.
- **Start with willing people and real problems.** Mandates produce use without value.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baseline completeness | Share of planned AI use cases that have a recorded pre-adoption baseline for their main indicators | use cases with dated baseline / planned use cases | percent | Use case register | Continual improvement; measurement and reporting | Baseline before an experiment | Quarterly |
| AI use coverage | Share of eligible work items or tasks where AI was used, by use case | items where AI assistance was used / eligible items, from tool logs or user tags, at team level | percent | Tool usage logs, tags | Service desk; incident management; release and deployment management | Adoption of a tool by willing teams | Monthly |
| Suggestion acceptance and override rate | Share of AI suggestions accepted as is, edited, or rejected | suggestions in each category / suggestions offered | percent | Tool logs aggregated by team | Service desk; knowledge management | Review of machine suggestions | Monthly |
| Reviewed output accuracy | Share of sampled AI outputs judged correct and fit for purpose by a qualified reviewer | outputs judged correct / outputs sampled | percent | Sampled review records | Quality assurance; knowledge management | Definition of done for the output | Monthly |
| Task time against baseline | Time to complete a defined task with AI compared with the baseline or a comparison group | median and 85th percentile of task time with AI minus the same for baseline or comparison | minutes or hours | Timed tasks, ticket timestamps | Service desk; incident management | Cycle time for a task | Quarterly |
| Cost per AI-assisted task | Total cost of AI-assisted work per task, including review and rework | (license and usage cost + review and rework time cost) / tasks completed with AI | currency per task | Vendor invoices, time estimates, work tracker | Service financial management | Cost to serve per outcome | Quarterly |
| Outcome movement against comparison | Change in the outcome indicator for AI-assisted work compared with similar non-assisted work | change in indicator for AI-assisted group minus change for comparison group | indicator units | Outcome measures per use case (quality, satisfaction, reopen rate, defects) | Continual improvement | Learning from experiments | Quarterly |

Define each use case by the task, the users, and the outcome indicators, and record them in the register. AI use coverage is a descriptive measure and not a target. Reviewed output accuracy is judged against a written standard by someone qualified who did not produce the output. Task time includes the time to prompt, review, and correct as well as to generate. Cost per task counts the people time spent checking and fixing. Outcome movement requires a comparison chosen in advance and a note on other changes during the period.

## Recommendations

### Decide where AI belongs

**1. List the tasks and the problem each use of AI addresses.** Start from pain, not from the tool: repeated drafting, slow triage, scattered knowledge, long reviews, noisy alerts. For each candidate use, write the problem, who feels it, the outcome that should improve, and the risks. Skip uses without a clear problem. This is the register that the baseline and the measures hang from.

**2. Classify the risk of each use.** A tool that drafts internal notes carries a different risk from one that changes production systems, replies to customers, or makes decisions about people. Classify uses by the harm if the output is wrong, who is affected, and whether a person reviews it before it takes effect. Higher-risk uses need stronger measures, sampling, and governance (see topic 10.5, AI governance and risk metrics).

**3. Start with willing people and bounded tasks.** Pilot with volunteers on a task that is common and checkable. Volunteers give honest feedback and adapt the tool to their work. A bounded task makes baselines and comparisons feasible. Avoid starting with the most sensitive work.

### Capture baselines and set up comparisons

**4. Record the baseline before the first use.** For each use case, capture the current state of the indicators: time to complete, quality or defect rate, rework, satisfaction of users, and cost. Take enough observations to see the normal variation (see topic 1.6, Statistical literacy for service metrics). Date the baseline and keep it. A baseline taken after rollout is a record of the new world.

**5. Build a comparison.** Where possible, keep a similar group or set of tasks that does not use AI for the pilot period, or alternate use by week or by task type in a way that is fair. Randomization is ideal and often impractical. State plainly what else changed. Without a comparison, improvements due to seasonality, staffing, or learning will be credited to the tool.

**6. Measure time honestly.** Time to a first draft is rarely the right measure. Measure time to a finished, checked result, including prompting, review, and correction. People often report time saved based on the generation step, and the review step eats some or all of it. Time studies on a sample of tasks are worth the effort.

### Measure quality and cost

**7. Sample outputs for review by qualified people.** Each month, draw a random sample of AI-assisted outputs and have a qualified person judge them against a written standard. Report accuracy, the kinds of errors found, and trends. This is the main protection against fluent mistakes spreading. Keep the reviewer independent of the producer, and rotate reviewers.

**8. Watch acceptance and override patterns.** A very high acceptance rate may signal automation bias, where people accept without checking. A very low rate may signal a tool that is not useful. Use the rates as prompts for conversation with the team and ask what the numbers mean in their experience. Do not set targets for acceptance.

**9. Count the full cost per task.** Include license fees, usage-based charges, the time spent prompting, reviewing, and correcting, training, and governance effort. Compare with the baseline cost. A tool that makes drafts quickly and needs heavy correction may cost more than the old way. Include the cost of mistakes that reach users.

### Keep the human side right

**10. Protect people from monitoring and from pace creep.** Aggregate AI usage data at team level and do not use it to rate individuals. Do not use usage as a performance measure. Agree in advance that time saved will not automatically become extra workload, and decide with the team what to do with it: quality, learning, improvement, or other work. A constant pace is a design goal (see topic 9.2, Satisfaction and well-being metrics).

**11. Ask the people who use it.** Short pulses and conversations reveal what the numbers miss: where the tool helps, where it frustrates, where it shifts the work from creating to checking, and whether it changes the satisfaction of the job. Treat concerns about skills, quality, and job security with respect.

**12. Decide, publish, and revisit.** At the end of each pilot, decide to scale, adapt, or stop, and record the evidence. Share results honestly, including null and negative ones. Revisit decisions as the tools change, which they do quickly. A use that did not help last year may help now, and the reverse.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Baseline completeness | Recording baselines after the fact; using convenient indicators | Date-stamped baselines; independent review of baseline method |
| AI use coverage | Mandating use; counting trivial or automatic invocations | Never a target; compare with outcome movement; count meaningful use |
| Suggestion acceptance and override rate | Rewarding acceptance; making rejection cumbersome | No targets; reviewed output accuracy; ask users about their experience |
| Reviewed output accuracy | Sampling easy outputs; lenient reviewers | Random sample by independent reviewers; written standard; reviewer rotation |
| Task time against baseline | Timing only generation; choosing easy tasks | Time to checked result; sample tasks randomly; include review and rework |
| Cost per AI-assisted task | Leaving out review time or governance cost | Full-cost checklist; compare with time studies |
| Outcome movement against comparison | Choosing favorable groups or periods; ignoring other changes | Pre-agreed comparison and period; list of other changes |

A healthy reading is baselines for every pilot, measured time to finished results, accuracy checked by qualified people, costs that include review, outcomes compared fairly, and teams who say that the tool serves their judgment.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Pilot with volunteers | Honest feedback; low risk | Volunteers are enthusiasts; results may not generalize |
| Mandated rollout | Fast coverage | Use without value; resentment; gaming |
| Controlled comparison | Credible evidence | Effort; not always possible |
| Before-and-after only | Simple | Confounded by other changes |
| Vendor-reported savings | Easy to obtain | Optimistic; context-free |
| Own timed tasks | Grounded in your work | Time-consuming; small samples |
| Heavy review of every output | Safe | Removes the benefit |
| Sampled review | Scales | Some errors slip through |

The prose answer is to run small pilots with baselines and comparisons, sample outputs for quality, count full cost, and decide on the evidence. Use vendor figures as hypotheses to test.

## Questions to discuss with your team

**1. Where do we expect AI to help us, and what would we see if it did?**
List candidate uses and, for each, the indicator and the baseline we have today. The facilitator should push for specifics: which task, which measure, what size of change would matter. Choose one use to pilot and agree the baseline.

**2. What would make us trust or distrust an AI suggestion, and how would we know we were wrong?**
Discuss cases where the output was wrong and how it was noticed. Consider how review works in practice and whether pressure leads to skipping it. Agree a sampling method that someone independent will run.

**3. How much of the time we save would be spent on checking?**
Time one real task with and without the tool, including prompting and review. Compare with what people expect. The conversation often reveals where the gain is and where it is not.

**4. What should we do with time we save?**
Decide in advance. Options include quality work, learning, improvement, or less pressure. Discuss how to prevent the time from being silently absorbed into more demand. Agree with leaders how the team will protect it.

**5. What would we not want AI to do here, and why?**
List tasks that need human judgment, empathy, or accountability. Discuss risks to users and to skills. The facilitator should record boundaries as inputs to governance.

**6. How will we know when to stop?**
Define the evidence that would end the pilot or the use. Agree on who decides and when. A pilot with no exit criteria becomes a permanent fixture.

## Four perspectives

### Product and delivery teams

Delivery teams use AI for code, tests, reviews, and documentation. They should measure time to a reviewed, working result, watch quality and defects, and keep human review meaningful. They should resist metrics that count generated lines or acceptance, and insist on outcome measures such as defects and stability.

### Service and operations teams

Operations and service desk teams use AI for triage, summaries, suggestions, and monitoring. They should compare handling and resolution quality with baselines, sample outputs, and watch for effects on users and on repeat contacts. They should be consulted before AI is placed in front of users.

### Leadership and governance

Leaders sponsor AI programs and face pressure to show gains. They should insist on baselines and comparisons, fund the review work, avoid usage targets, and protect people from monitoring and pace creep. Governance should require risk classification and evidence before scaling.

### Customers and users

Users meet AI in answers, suggestions, and automated actions. They want correct, understandable help and the ability to reach a person. They should be told when they are interacting with AI where appropriate, and their feedback is key evidence of whether it helps (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized insurer's technology group runs an internal service desk for 4,000 staff and several product teams. Leadership buys licenses for an AI assistant and asks for a report of time saved after three months. The numbers below are illustrative.

The head of service management insists on a baseline. For the service desk's most common task, drafting replies to access and password requests, she times 120 recent tickets: median handling time of 11 minutes, 85th percentile of 24, a reopen rate of 6 percent, and a satisfaction score from the survey that is stable. She picks two teams to pilot the assistant and keeps two similar teams as a comparison. The pilot teams are volunteers.

After eight weeks, the pilot teams' median handling time is 8 minutes and the 85th percentile is 19, compared with 11 and 23 in the comparison teams. The tool logs show that agents accept suggestions as written in 52 percent of cases, edit them in 38 percent, and reject them in 10 percent. A monthly random sample of 80 replies, reviewed by a senior agent not in the pilot, finds 91 percent fully correct, with errors concentrated in a rarely used procedure where the assistant gave outdated steps. The reopen rate in the pilot teams rises slightly to 7 percent, within the normal variation. Cost per ticket falls modestly once licenses and review time are counted. A survey shows agents appreciate the drafts and dislike the extra checking of long responses. Two agents say they feel pressure to handle more tickets per hour.

The head of service management reports a time saving of about a quarter at the median and states the caveats: two teams, eight weeks, volunteers, and a reopen rate that needs watching. She agrees with leaders that the saved time will go to the knowledge base and to complex cases, and that no ticket targets will rise. The outdated procedure is fixed in the knowledge base. A senior manager asks for company-wide mandatory use and a target of 80 percent acceptance. She declines the target, explaining that an acceptance target would reward not checking, and proposes to extend the pilot to two more teams with the same measures. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

Introduce AI in small steps with stakeholders, with a baseline and a comparison for each step, and review the result at the regular improvement conversation. The caution is that rolling AI out everywhere at once removes the comparison group.

### AI

This whole topic is about AI, so the rule is simple: record the work as it is today, measure each use against that baseline and against comparable work done without AI, and pair every speed gain with a checked quality measure. Name an owner for each use, and decide in advance where a human decides. The caution is that vendor figures describe other organizations, so use your own data.

### Automation

Collect usage, suggestion, acceptance, and override events automatically, and measure the automation that applies AI output on its error and reversal rates. The caution is that acceptance rates can rise because people stop checking, so sample accepted output.

### Analytics

Report accuracy from a reviewed sample with the sample size, and outcomes against a comparison with the stated limits. The decision informed is whether to expand, change, or stop a use of AI. The caution is that small pilots give noisy results, so avoid promising a figure from a pilot.

## Sector lens

**Startup.** Tools are adopted quickly and often informally. Capture a simple baseline of time and defects for the main use, keep human review of anything customer-facing, and avoid locking into a single vendor early. Watch for security and data exposure when staff use public tools.

**Small business.** Off-the-shelf assistants can offer real help for drafting and routine tasks. Measure on a small scale: time for a few real tasks and the rate of corrections. Be careful with confidential data, and check vendor terms on how data is used.

**Enterprise.** Scale demands governance, procurement standards, and a common measurement approach. Run pilots with comparison, publish results internally, and share baselines and methods across teams. Beware of programs that report usage as success.

**Government and public sector.** Decisions affecting citizens may be subject to legal duties on transparency, fairness, and human review. Classify uses by risk, keep records of how AI was used in decisions, and be open about it. Procurement rules and data protection apply, and some jurisdictions have specific AI laws that should be checked as of today (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are licenses or usage charges, integration, training, the time to capture baselines and run comparisons, the people time spent reviewing and correcting outputs, and governance effort. Costs can scale with usage and change with vendor pricing, so model a range.

The potential returns are time recovered on repetitive tasks, faster drafting and search, better coverage of knowledge, and relief for staff from tedious work. These are possibilities to test, not assumptions to bank. Build the case from your own pilots: measured task time to a checked result, reviewed accuracy, rework, and full cost per task, against baseline and comparison. Avoid quoting productivity percentages from vendor or survey sources unless you can trace the method and fit to your work. Include the risk of mistakes that reach users and the cost of governing the tools (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Introducing AI without a baseline.** You cannot tell what changed. Capture it first.
- **Measuring generation speed.** The saving may vanish in review. Time to a checked result.
- **Adoption targets.** They produce use without value. Treat coverage as descriptive.
- **Trusting vendor claims.** They are hypotheses. Test them on your work.
- **Review that is not real.** Automation bias turns review into a rubber stamp. Sample and check independently.
- **Converting saved time into more demand.** It erodes trust and sustainable pace. Decide in advance what the time is for.
- **Monitoring individual usage.** It breeds fear. Aggregate to team level.
- **Pilots with no end.** They become permanent by default. Set exit criteria.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Purpose and baselines | Tools adopted by enthusiasm | Use cases listed | Register with problem, risk class, baseline, and indicator for each use | Baselines and comparisons required before scaling; results published | Shared baselines and methods across teams and partners; uses retired when evidence fades |
| Evidence of benefit | Anecdotes and vendor claims | Informal time estimates | Timed tasks; sampled accuracy; full cost per task | Outcome movement against comparison reported with limits | Portfolio view of where AI helps, with learning shared widely |
| People and pace | Mandates; monitoring | Informal care | Team-level data only; time saved allocated by agreement | Concerns tracked; skills and satisfaction measured | Co-design of AI use with users and staff; sustained pace protected |

## Checklist

- [ ] Each use of AI has a written problem, risk class, owner, and exit criteria.
- [ ] A dated baseline exists for each pilot before first use.
- [ ] A comparison group or comparison tasks are defined in advance.
- [ ] Time is measured to a finished, checked result.
- [ ] Outputs are sampled monthly and reviewed by qualified, independent people.
- [ ] Full cost per task includes review and rework.
- [ ] Usage data is aggregated at team level and not used for individuals.
- [ ] The team has agreed what to do with time saved.
- [ ] Users are asked about their experience of the tool.
- [ ] Pilots end in a recorded decision to scale, adapt, or stop.

## AI prompts

**Draft a use case entry.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Design a timed-task study.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Plan output sampling.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Decide what to do with time saved.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an AI-related metric before reporting it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an AI metric entry records its baseline, comparison, gaming vector, and guardrail.

## Key takeaways

- Capture a dated baseline before AI is used, and compare with similar work done without it.
- Measure time to a finished, checked result, and sample outputs for accuracy with independent reviewers.
- Count full cost, including review and rework.
- Treat usage and acceptance as descriptive, never as targets.
- Decide in advance what to do with time saved, and keep a sustainable pace.
- Keep usage data at team level, and end every pilot with a recorded decision.

## References and further reading

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
