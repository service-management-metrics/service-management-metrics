# Metric inflation and quality dilution

**When AI makes volume and speed cheap, every metric that counts volume and speed inflates, so pair each one with a measure of usefulness that a person has checked, and watch whether the signal in your data is being drowned.**

## Overview and motivation

A metric works because it reflects something that is hard to produce. Tickets resolved reflect effort. Documents written reflect knowledge. Tests added reflect care. When a tool makes the visible output nearly free, the link between the output and the effort breaks. The numbers keep rising and the meaning drains out. This is metric inflation, and its companion is quality dilution: the share of what is produced that is useful falls, and the useful part becomes harder to find.

This is not a new problem. [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) and its relative [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law) describe how measures used for control are corrupted. A [vanity metric](https://en.wikipedia.org/wiki/Vanity_metric) looks impressive and says nothing about the health of the work. What AI changes is the speed and scale at which output can be generated, and with it the speed and scale at which these old failures can occur. A team that once inflated a count by hand can now do it in minutes, often without intending to.

Several patterns recur in service and delivery work.

- **Volume inflation.** AI drafts more tickets, more replies, more comments, more test cases, more documents, and more code. Counts of these rise. Workloads for those who must read, review, and maintain them rise too.
- **Speed inflation.** Time to first draft falls sharply, and time to a finished, checked result falls less, or not at all. A dashboard that reports the first of these tells a flattering story.
- **Noise.** More content competes for attention. [Information overload](https://en.wikipedia.org/wiki/Information_overload) is the condition in which a person cannot process the volume of information presented, and the [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) of the knowledge base, the ticket queue, or the alert stream falls. [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue) is its operational form (see topic 5.5, Monitoring and alert quality metrics).
- **Low-quality generated content.** Content produced in bulk with little review, sometimes called [AI slop](https://en.wikipedia.org/wiki/AI_slop), is plausible and thin. A knowledge base seeded with such articles becomes less trustworthy, and users learn to distrust it.
- **Verification cost.** The effort to check a claim is often much larger than the effort to make it, a pattern sometimes called [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law). When generation is cheap, verification becomes the bottleneck.
- **Efficiency that increases consumption.** The [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox) describes cases in which gains in efficiency lead to more use of a resource, not less. If drafting a report becomes cheap, more reports are demanded. Time saved by a tool may be consumed by more work of lower value.
- **Feedback loops.** If generated content feeds the next round of generation, errors compound. The research literature describes [model collapse](https://en.wikipedia.org/wiki/Model_collapse) in models trained on their own outputs. A similar loop can occur inside an organisation when an assistant summarises tickets that were written by an assistant from articles that an assistant summarised.
- **Drifting baselines.** If the distribution of data changes because of AI, trends and thresholds no longer mean what they did. This resembles [concept drift](https://en.wikipedia.org/wiki/Concept_drift) in machine learning, where the relationship between inputs and outcomes changes over time. A rise in ticket volume may reflect easier ticket creation, not more problems.

The agile aims matter here. Continuous delivery, continuous improvement, and sustainable pace all depend on the signal being clear. Motivated people should not be asked to wade through machine-generated noise or to verify piles of output at an unsustainable pace. Stakeholders who are continuously involved are also the best defence: they will tell you when the reports no longer help.

This topic gives the measures for noticing inflation and dilution, and the pairings that expose them. It builds on the foundations and the measures of assisted work (see topic 10.1, AI in service management measurement, and topic 10.2, Measuring AI-assisted work).

## Key principles

- **Pair every volume or speed metric with a usefulness check.** A person judges whether the output is useful.
- **Measure to a finished, verified result.** First-draft speed is a trap.
- **Watch the verification burden.** It grows quietly and consumes the saved time.
- **Protect the signal.** Keep the knowledge base, queues, and alerts clean enough to trust.
- **Break feedback loops.** Do not let generated content feed generation without review.
- **Re-baseline when the data changes.** Trends across a technology shift need care.
- **Prefer fewer, better outputs.** Less can be more when attention is the limiting resource.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Output-to-outcome ratio | Volume of output relative to the outcome it was meant to produce | output count (tickets, articles, changes) / outcome measure (resolved problems, used articles, retained changes), over the same period, tracked as a trend | ratio | Work tracker, knowledge base, outcome measures | Continual improvement; measurement and reporting | Working software over documentation volume | Monthly |
| Useful-item share | Share of sampled items judged useful by a qualified reviewer | sampled items judged useful (correct, relevant, non-duplicate) / items sampled | percent | Random sample review | Knowledge management; quality assurance | Definition of done for content | Monthly |
| Verification burden | Human time spent checking and correcting generated work per unit of output | review and correction hours / units of output, tracked as a trend | hours per unit | Time estimates, review tool data | Service financial management; continual improvement | Review capacity as a constraint | Monthly |
| Content redundancy rate | Share of knowledge items that duplicate or substantially overlap another | items flagged duplicate or overlapping in review or by matching / items in the knowledge base | percent | Knowledge base review, matching reports | Knowledge management | Single source of truth | Quarterly |
| Reviewed share of generated knowledge | Share of AI-generated knowledge items that a qualified person has reviewed and approved before publication | generated items published with approved review / generated items published | percent | Knowledge base metadata | Knowledge management; change enablement | Review before release | Monthly |
| Backlog inflow against resolution | Growth of work arriving relative to growth of work resolved, for queues affected by AI | (change in items created) / (change in items resolved), compared with the pre-AI baseline | ratio | Ticket and tracker history | Incident management; service request management | Flow balance | Monthly |
| Metric drift flags | Number of metrics whose definition or distribution shifted noticeably after AI was introduced, reviewed and annotated | metrics flagged in review / metrics in the register | count; percent | Metric register review, distribution checks | Measurement and reporting | Retrospective on measurement | Quarterly |

Define "useful" in a written rubric: correct, relevant to a real need, non-duplicate, and current. Verification burden counts time spent by people, including the time to prompt again, and excludes time that is only waiting. Reviewed share is a control: unreviewed generated knowledge is tracked separately and kept visibly labelled. Metric drift flags are discussions, not penalties: a flag means a person has decided whether to adjust the definition, annotate the trend, or re-baseline. All measures describe processes and content, not individuals.

## Recommendations

### Pair volume with usefulness

**1. Build a usefulness check into every volume metric.** For each volume or speed measure on your dashboard, name a usefulness measure that a person has judged. Tickets created pair with resolution quality, articles written with article use and accuracy, changes merged with retention and rework (see topic 10.2, Measuring AI-assisted work). Show them together, and discuss when they diverge.

**2. Sample and judge, regularly.** Each month, draw a random sample of items from the streams AI touches and have a qualified person judge them against a written rubric. Record the share useful and the reasons items fail. Rotate reviewers and keep them independent of the producers. Sampling is the main defence against slow dilution.

**3. Report outcomes before outputs.** In leadership reports, lead with outcomes: problems resolved, users satisfied, defects avoided. Put output counts after, as context. If the report would still be valuable with the output counts removed, it is oriented well.

### Control verification and noise

**4. Measure the verification burden.** Estimate the time spent checking and correcting generated work, and track it as a trend per unit of output. If it rises as output rises, the net gain is smaller than the generation numbers suggest, and reviewers may be on the way to overload. Include the burden in the cost per task (see topic 10.1, AI in service management measurement).

**5. Limit what enters the system.** Decide what generated content may be created and published automatically, and what needs review. Set limits on the size and number of generated changes in one review. Make it easy to say no to volume. A smaller queue with clearer items serves users better.

**6. Manage the knowledge base as a product.** Label generated content, require review before publication, retire duplicates and stale items, and track redundancy and use. A knowledge base is useful in proportion to how much users trust it. Remove articles that nobody uses and that nobody can vouch for (see topic 3.6, Knowledge management metrics).

**7. Keep alert and ticket streams clean.** If AI creates tickets from alerts or summaries, measure the useful share and the duplicates. Tune aggressively. Treat a falling signal-to-noise ratio as an incident in its own right, since it harms response when real trouble comes.

### Break loops and watch the baseline

**8. Stop generated content from feeding itself unchecked.** Where an assistant draws on a knowledge base, a ticket history, or past reports, ensure that generated material in those sources has been reviewed, or is labelled and weighted accordingly. Sample the chain: pick an answer and trace it back through its sources to see where it came from. Unchecked loops amplify errors.

**9. Re-baseline when the data shifts.** After introducing AI, annotate trend charts and, where the nature of the data has changed, start a new baseline. Check distributions, not just totals: ticket length, category mix, and time to create may all shift. Metric drift flags prompt these conversations (see topic 1.6, Statistical literacy for service metrics).

**10. Look for rebound.** When a task becomes cheaper, ask whether demand for it will grow. Decide in advance how to use time saved, so that it is not absorbed by more low-value output. A team that produces twice as many reports with the same effort may be doing less useful work.

### Keep human attention in the loop

**11. Protect the attention of reviewers and users.** Review capacity and attention are scarce. Reduce the volume of material that people must read, give reviewers realistic loads, and ask them what is becoming harder. A sustainable pace includes the pace of reading and judging (see topic 9.2, Satisfaction and well-being metrics).

**12. Ask users and stakeholders whether the signal is clear.** Continuous involvement of the people who use the outputs is the best test. Ask whether the knowledge base is easier or harder to use, whether reports tell them what they need, whether the queue feels clearer. Their answers, and their comments, should be read beside the numbers.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Output-to-outcome ratio | Choosing an outcome measure that rises with volume; changing the period | Outcome fixed in the register; compare with satisfaction and reopen rate |
| Useful-item share | Sampling easy items; lenient rubric; reviewers influenced by the producer | Random sample; written rubric; independent, rotating reviewers |
| Verification burden | Not logging review time; shifting checking to downstream teams | Include downstream rework; ask reviewers about load |
| Content redundancy rate | Narrow matching rules that miss duplicates; merging distinct items | Sample duplicates by hand; log merge rules |
| Reviewed share of generated knowledge | Marking review as complete without reading; reviewing in bulk | Sample reviews for substance; time per review; error rate in published items |
| Backlog inflow against resolution | Auto-closing items; splitting items | Check resolution quality; reopen rate; sample closed items |
| Metric drift flags | Not flagging to avoid work; flagging everything | Review all metrics each quarter; require a decision for each flag |

A healthy reading is a stable or rising useful-item share as volume grows, a verification burden that is known and affordable, a knowledge base with low redundancy and reviewed generated content, queues with a clear signal, and a leadership view that leads with outcomes.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Count outputs | Easy, familiar | Inflates; rewards volume |
| Measure outcomes | Reflects value | Slower; harder to attribute |
| Sample and judge | Detects dilution | Needs skilled reviewers; effort |
| Automatic quality scoring | Scales | Another model's opinion; can share the same blind spots |
| Review everything generated | Safe | Removes the benefit; reviewers overloaded |
| Review a sample | Practical | Some poor items pass |
| Allow open generation | Fast, broad | Noise; trust erodes |
| Limit generation to approved uses | Cleaner signal | Slower adoption; missed benefits |

The prose answer is to measure outcomes, sample and judge usefulness with people, limit what enters shared stores without review, and revisit baselines. Use automatic scoring as an aid and not as the judge.

## Questions to discuss with your team

**1. Which of our numbers has gone up since we started using AI, and what has it done for the people we serve?**
List the numbers. For each, look at the outcome it was meant to reflect. The facilitator should note where the outcome did not move. Pair those numbers with a usefulness check.

**2. How much of what we published or created last month would we be happy to defend line by line?**
Take a random sample and read it together. Mark what is useful, thin, wrong, or duplicate. Discuss the rate and the causes. Agree a standard for what goes in shared stores.

**3. Where is checking becoming our bottleneck?**
Ask the reviewers. Look at queues of reviews, review depth, and the effort they now carry. Agree a limit on the size or number of generated items per review, and a way to measure the burden.

**4. What generated content is feeding other generated content here?**
Trace a typical answer back to its sources. Where did the chain start? Discuss where a person should check the chain, or label the content.

**5. What would a user say about our knowledge base now, compared with a year ago?**
Read recent comments and look at use data. Ask whether it is easier or harder to find a trustworthy answer. Agree one clean-up and one rule for new content.

**6. Which of our trends should we restart with a new baseline?**
List the metrics that depend on volume or on how items are created. Look for changes in shape since AI arrived. Annotate the trends, and decide which need a fresh baseline.

## Four perspectives

### Product and delivery teams

Delivery teams generate much of the volume and carry the maintenance. They should favour smaller, clearer changes, keep generated material reviewed and labelled, and watch retention and rework. They should refuse metrics based on generated volume, and ask for outcome measures.

### Service and operations teams

Operations teams live in the queues, alerts, and knowledge base that dilution damages. They should tune AI-created tickets and alerts to keep the signal strong, review generated knowledge before it is published, and report when the stream becomes noise. They are best placed to judge usefulness.

### Leadership and governance

Leaders receive the dashboards that inflation distorts. They should ask for outcomes first, require usefulness checks beside volume, fund review capacity, and accept that some measures need re-baselining. Governance should check that generated content in shared stores is reviewed and labelled.

### Customers and users

Users bear the cost of dilution when answers are wrong, articles contradict each other, and replies are long and empty. They want short, correct, relevant help. Their reaction to the quality of what they receive is a direct test of whether the signal survived.

## In practice: a service management example

A global pharmaceutical company's IT group enables an AI assistant for drafting knowledge articles, summarising tickets, and preparing weekly status reports. Within a quarter, the dashboard looks excellent. The numbers below are illustrative.

Knowledge articles created rise from 140 to 610 a month. Tickets carry detailed AI-written summaries. Weekly reports run to twelve pages. The service quality manager notices that satisfaction with self-service has fallen and that the service desk reports more "the article did not help" contacts. She samples 100 of the new articles with two experienced agents. Only 54 are judged useful: 23 duplicate existing articles, 15 contain outdated or incorrect steps, and 8 are too vague to act on. Of the new articles, 71 percent were published without human review. The knowledge base now holds about 3,200 articles, with a content redundancy rate she estimates at 28 percent against 9 percent a year ago. Agents report that finding a trustworthy answer takes longer. The verification burden for the service desk's article editors has grown to roughly 40 hours a week, up from 12. The AI-written summaries of tickets make later AI-generated replies rely on text no one wrote, and in a trace of five replies back through their sources, two relied on a summary that had misstated the problem. The weekly status reports, when read, say little that was not in the previous one, and stakeholders have stopped reading beyond page two.

She proposes four changes, which the service leadership team and the knowledge owners adopt. Generated articles need review by a named editor before publication, and are labelled until approved. A limit of one generated article per topic cluster prevents duplicates, and a sweep merges or retires redundant items. Report templates are cut to two pages that lead with outcomes, and the AI is used to draft only the sections a person then edits. Ticket summaries are marked as generated, and a sample is checked each month. The dashboard reports useful-item share, redundancy rate, reviewed share, and verification burden beside article counts.

After two quarters, articles created per month fall to 190, the useful-item share rises to 91 percent, the redundancy rate falls to 11 percent, the reviewed share is 100 percent, and the verification burden stabilises at about 16 hours a week. Self-service satisfaction recovers and "article did not help" contacts fall. Stakeholders read the two-page report. A director asks for a goal of 1,000 articles a month to show the value of the AI programme. The service quality manager explains that the count was the problem, and proposes to track usefulness and use. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

A regular review of whether each count still reflects usefulness helps a team notice inflation early, and stakeholders can tell you what they actually use. The caution is that tightening a count after inflation is noticed starts the cycle again.

### AI

AI makes volume and speed cheap, so every count of volume or speed inflates. Pair each with the share of items a person judged useful and the verification burden, and check for redundant content. The caution is that AI used to check AI output may share the same blind spots, so keep human sampling.

### Automation

Automate detection of duplicates, near-duplicates, and stale content, and measure the detection on false positives. The caution is that automated clean-up may remove items that are rare but important.

### Analytics

Report the output-to-outcome ratio and useful-item share with sample sizes. The decision informed is which counts to stop reporting. The caution is that the ratio depends on how outcomes are defined, so state it.

## Sector lens

**Startup.** Generation is cheap and review time is scarce. Keep documentation and tickets short, review what customers will read, and delete freely. A small, correct set of articles beats a large set of doubtful ones.

**Small business.** There is little capacity to review, so limit what the tool produces. Prefer a handful of verified guides and templates. Beware of publishing generated material on public pages without checking it.

**Enterprise.** Scale amplifies noise. Establish content governance with owners, labels, and review rules, measure usefulness across the knowledge base, and run periodic clean-ups. Share rubrics across teams and compare trends, not teams.

**Government and public sector.** Public content must be accurate and accessible, and errors can harm. Require review of generated public information, keep records of how it was produced, and apply plain language and accessibility standards. Retention and records rules may apply to generated material (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs of guarding against inflation are modest: review time for sampling, editorial effort for generated content, tooling for duplicate detection, and the effort to re-baseline trends. The costs of not doing so are larger but diffuse: users who stop trusting self-service, reviewers who burn out, decisions made on inflated numbers, and clean-up projects.

Build the case from your own data: the useful-item share and the verification burden over time, the volume of contacts caused by unhelpful content, and the cost of a knowledge base clean-up. Avoid using published figures on the quality of generated content, which vary widely by tool, task, and method. Include the avoided cost of reputation damage from publishing wrong information (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Celebrating volume.** It rewards noise. Celebrate outcomes and usefulness.
- **First-draft speed as the productivity story.** The saving may vanish in checking. Time to a verified result.
- **Publishing generated content without review.** Trust erodes quietly. Review and label.
- **Letting generated content feed generation.** Errors compound. Check the chain.
- **Unchanged baselines.** Trends mislead after a technology shift. Annotate and re-baseline.
- **Overloading reviewers.** Review becomes a rubber stamp. Limit the volume and measure the burden.
- **Using an AI judge for everything.** It may share the blind spots of the producer. Keep people in the loop.
- **Ignoring the rebound.** Cheaper work attracts more work. Decide what saved time is for.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Pairing and sampling | Volume reported alone | Informal quality impressions | Every volume metric paired with a sampled usefulness check | Usefulness, burden, and redundancy managed with targets for review not volume | Cross-organisation view of signal quality; rubrics shared with partners |
| Content and loops | Generated content mixed in | Some labelling | Generated content labelled and reviewed before publication; chains sampled | Loops monitored; stores curated; duplicates retired on a schedule | Provenance tracked end to end across tools and suppliers |
| Baselines and attention | Trends read across the shift | Annotations on some charts | Baselines reset where data changed; rebound considered | Drift flags reviewed quarterly; reviewer load managed | Metric design adapts continuously to technology change with stakeholders |

## Checklist

- [ ] Each volume or speed metric has a usefulness companion judged by a person.
- [ ] A random sample of AI-touched items is reviewed monthly against a written rubric.
- [ ] Verification burden is estimated and tracked as a trend.
- [ ] Generated knowledge is labelled and reviewed before publication.
- [ ] Redundancy in the knowledge base is measured and reduced.
- [ ] Alert and ticket streams are monitored for useful share and duplicates.
- [ ] Chains from generated outputs back to their sources are sampled.
- [ ] Trends across the introduction of AI are annotated or re-baselined.
- [ ] Leadership reports lead with outcomes.
- [ ] Users and stakeholders are asked whether the signal is clearer or noisier.

## AI prompts

**Create a usefulness rubric.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organisation].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Analyze a drop in signal.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Plan a knowledge base clean-up.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritise by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Trace a chain of generated content.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the usefulness companion for a volume or speed metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a metric affected by AI pairs volume with sampled usefulness and carries its gaming vector and guardrail.

## Key takeaways

- When AI makes output cheap, volume and speed metrics inflate and the share that is useful can fall.
- Pair every volume or speed measure with a sampled, person-judged usefulness check.
- Measure time to a verified result and the verification burden, because checking becomes the bottleneck.
- Label and review generated content before it enters shared stores, and keep loops from feeding themselves unchecked.
- Re-baseline trends after a technology shift, and lead reports with outcomes.
- Decide in advance what saved time is for, and protect the attention of reviewers and users.

## References and further reading

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
