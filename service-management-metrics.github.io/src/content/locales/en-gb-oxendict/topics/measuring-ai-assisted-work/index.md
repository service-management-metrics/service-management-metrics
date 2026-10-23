# Measuring AI-assisted work

**Judge AI-assisted work by what survives review, production, and the user's next contact, not by how fast it appeared, and keep watching whether the people doing it are still learning.**

## Overview and motivation

Once a team uses AI tools every day, the central question changes from "should we?" to "what are we getting?" The previous topic set out the foundations: baselines, comparisons, and full cost (see topic 10.1, AI in service management measurement). This topic goes into the work itself. How do you tell whether AI-assisted code, tickets, documents, and decisions are as good as, better than, or worse than the work they replace, and what happens to the people who do it?

AI assistance touches many kinds of work. In software delivery, tools suggest or generate code, tests, commit messages, and review comments. In service operations they summarize incidents, propose causes, draft replies, and write knowledge articles. In analysis they produce reports and queries. The common feature is that producing a plausible first version becomes cheap. The costs move to other places: reading and judging the output, fixing what is wrong, maintaining what was generated, and learning enough to know the difference.

Several effects make measurement tricky.

- **Output counts mislead.** [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code) was always a poor measure of productivity, and generated code makes it worse. More code is more to read, test, and maintain. Counts of generated lines, accepted suggestions, or drafts say little about value.
- **Review becomes the bottleneck.** [Code review](https://en.wikipedia.org/wiki/Code_review) and the review of other generated work take time, and a flow of larger, more frequent changes can overload reviewers. Large [pull requests](https://en.wikipedia.org/wiki/Pull_request) are harder to review well, and an overloaded reviewer is more likely to approve what they have not understood. The review and flow measures from earlier remain essential (see topic 2.7, Pull request and code review metrics).
- **Quality problems arrive late.** Generated code may pass tests today and carry [duplicate code](https://en.wikipedia.org/wiki/Duplicate_code), unclear structure, or hidden defects that surface as maintenance cost, a form of [technical debt](https://en.wikipedia.org/wiki/Technical_debt). Measures taken at the moment of creation miss it. Look at what happens to the work afterwards.
- **Skills may change.** Relying on a tool for tasks one used to do oneself is a form of [cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading), which can free attention for harder problems or can lead to [deskilling](https://en.wikipedia.org/wiki/Deskilling) if the underlying understanding fades. Both are possible, and the outcome depends on how the tools are used. This matters for the people involved and for the ability of the team to handle the situations the tool cannot.

Evidence about the effect of AI assistance on productivity is still developing, and it varies with the task, the experience of the user, the tool, and the setting. Some controlled studies of coding tasks have found faster completion on well-defined tasks, and other studies and reports have found smaller or no gains, or additional costs, for experienced people working on complex systems they know well. This book does not offer a number. The responsible position for a team is to measure its own work, with baselines and comparison, and to treat any published figure as one study in a particular context.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) is especially important here, because the pressure to show gains is strong and the easy numbers are the misleading ones. The measures below follow what survives, not what is produced (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Measure what survives.** Retention, rework, and escaped defects tell more than output.
- **Watch the review.** The flow of AI-assisted work is limited by how well people can read it.
- **Compare like with like.** Assisted and non-assisted work must be similar in kind and difficulty.
- **Look later as well as now.** Quality problems and maintenance costs appear weeks or months after creation.
- **Keep understanding in the loop.** The person who ships the work must be able to explain it.
- **Protect skills and learning.** Notice what people can still do without the tool.
- **Aggregate; do not monitor individuals.** Data on who uses AI and how is for improving the process, not for ranking people.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Retention rate | Share of AI-assisted changes that remain substantially unchanged after a stated period | AI-assisted changes with less than a set share modified or reverted after 30 days / AI-assisted changes merged 30 days ago | percent | Version control history joined to assistance tags, at team level | Release and deployment management; change enablement | Work that sticks; low rework | Monthly |
| Post-merge rework | Share of changes needing a follow-up fix within a short period, for assisted and comparison changes | changes with a linked follow-up fix within 14 days / changes merged, per group | percent | Version control, issue tracker, change records | Change enablement; problem management | Escaped defects; rework | Monthly |
| Review load | Reviewer effort per change, for assisted and comparison changes | median and 85th percentile of review time and review rounds per change, per group | hours; rounds | Review tool timestamps, aggregated by team | Release and deployment management | Review as feedback and learning | Monthly |
| Escaped defect rate | Defects found in production per change, for assisted and comparison changes | defects found after release attributed to a change / changes released, per group | defects per change | Defect tracker linked to changes | Incident management; problem management | Quality of what is released | Quarterly |
| Explanation check pass rate | Share of sampled AI-assisted changes whose author can explain the approach and its trade-offs in review | sampled changes where the author explained to the reviewer's satisfaction / sampled changes | percent | Sampled review notes | Knowledge management; change enablement | Shared understanding of the code | Quarterly |
| Assisted support quality | Reopen rate and user satisfaction for AI-assisted support responses compared with unassisted ones | reopened assisted tickets / assisted tickets, and favourable ratings / ratings, per group | percent | ITSM tool, survey | Service desk; incident management | Quality of service outcomes | Monthly |
| Unaided confidence rating | Team rating of confidence to do key tasks without the tool | mean rating and spread on an agreed scale, per team | scale points | Anonymous team pulse | Workforce and talent management; knowledge management | Team capability and learning | Quarterly |

Tag AI assistance reliably at team level, by tool logs or a lightweight convention, and state how comparison changes are chosen: similar in size, area, and risk. Retention measures substantial change, with a threshold set in the register. Post-merge rework links a follow-up fix to the original change by a stated rule. Review load is the effort of the reviewer, not of the author, and includes only active review time where measurable. Individual-level data is never reported. Samples for the explanation check are chosen at random, and the check is a conversation to support learning, not a test of a person.

## Recommendations

### Follow the work after it is created

**1. Track what happens to assisted work over time.** For code, follow changes for weeks after merge: do they stay, get fixed, or get reverted? For support, follow tickets after the reply: are they reopened or followed by repeat contacts? For documents, check whether they are used, corrected, or ignored. Retention and rework are simple, hard-to-fake signals of quality.

**2. Compare with similar unassisted work.** Choose comparison work of similar size, risk, and area, from the same period. Difficulty matters: people may use AI for easy tasks, which would flatter the tool, or for hard ones, which would punish it. State how tasks come to be assisted, and adjust or caveat accordingly. A small, honest comparison beats a large, confounded one (see topic 6.5, Value realization and business outcomes).

**3. Include the downstream measures in the standard set.** Pair any speed measure with change fail rate, escaped defects, and the stability measures already in use (see topic 2.8, DORA metrics). A speed gain with falling stability is a transfer of cost to operations and users. Report the pair together.

### Keep review meaningful

**4. Watch review load and size.** Measure review time, review rounds, and change size for assisted and unassisted work. If assisted changes are larger or more numerous, reviewers may be overloaded. Set norms for change size, and limit the amount of generated material that can go into one review. Review capacity is part of the system's capacity (see topic 2.3, Work in process and queueing).

**5. Ask authors to explain.** Make it a habit that the author of a change can explain what it does, why this approach, and what the trade-offs are. A short, supportive conversation in review is enough. Sample explanation checks quarterly to see whether understanding keeps up with output. Where authors cannot explain, treat it as a signal to slow down and learn, not as a failing of the person.

**6. Guard against automation bias.** Encourage reviewers to read assisted work as critically as any other. Rotate reviewers, occasionally seed known issues in a test change to check detection, and keep the sampling of outputs by independent reviewers going. A very high acceptance rate with rising rework is a warning (see topic 10.1, AI in service management measurement).

### Look after quality and maintenance

**7. Monitor the structure of the code and the system.** Track duplication, complexity, test coverage, and the rate of change in the areas where assistance is heavy. Use the measures you already have for [software testing](https://en.wikipedia.org/wiki/Software_testing) and code health, and look at trends. Rising duplication or falling test effectiveness may signal that generated code is being accepted without integration into the design. [Regression testing](https://en.wikipedia.org/wiki/Regression_testing) coverage is a safety net, and its strength matters more when the volume of change rises.

**8. Treat generated tests with care.** AI can write many tests quickly, and tests can pass without checking anything meaningful. Sample generated tests for value, and measure test effectiveness by methods such as whether tests fail when behaviour is deliberately broken. Do not count tests written as a quality measure.

**9. Watch the quality of assisted support.** For service desk and operations, measure reopen rate, repeat contacts, satisfaction, and accuracy of sampled replies for assisted versus unassisted responses. A faster reply that sends the user back is slower overall. Read user comments about assisted replies, and look at whether users know they are dealing with AI where that matters (see topic 6.1, Customer satisfaction metrics).

### Protect people and skills

**10. Notice what people can still do.** Ask teams how confident they are to do key tasks without the tool and track the trend. Use occasional unaided practice, pairing, and reviews of the underlying design to keep skills alive. Particularly protect the learning of newer team members, who may use the tool before they have built the mental models that experienced colleagues rely on to judge it (see topic 9.4, Skills and learning metrics).

**11. Keep data on people out of evaluation.** Aggregate to team level. Do not report which individuals use AI most, and do not use usage, acceptance rate, or generated volume in performance reviews. Make the rules known. Trust is needed for honest reports of what works and what does not.

**12. Revisit regularly.** Tools, models, and practices change in months. Re-run the comparison when the tool or the way of working changes. Share findings, including that a tool did not help here, and retire uses that no longer earn their place.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Retention rate | Avoiding needed changes to keep the number up; tagging only successful changes as assisted | Tag by tool logs, not by author choice; pair with escaped defects and rework |
| Post-merge rework | Fixing in a different ticket or a new change not linked; delaying fixes beyond the window | Linking rule in the register; look at a longer window; production defects |
| Review load | Rushed reviews that lower measured time; approvals without comments | Review depth sample; escaped defects; reviewer survey |
| Escaped defect rate | Not attributing defects to changes; reclassifying defects as enhancements | Attribution rule; independent sample of defect classification |
| Explanation check pass rate | Authors rehearsing for the check; lenient reviewers | Random, unannounced samples; rotate reviewers; focus on design reasons |
| Assisted support quality | Assisting only easy tickets; coaching users to rate highly | Match tickets by type and difficulty; response rate and mix; read comments |
| Unaided confidence rating | Inflated ratings to avoid scrutiny; low ratings to argue for more tools | Anonymity; compare with observed practice in drills; read comments |

A healthy reading is assisted work that stays in place as often as unassisted work, rework and escaped defects that match or beat the comparison, review that remains deep, authors who can explain what they ship, assisted support that does not come back, and teams that stay confident in their own skills.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Measure output volume | Easy | Rewards volume; says nothing about value |
| Measure retention and rework | Reflects quality over time | Delayed; needs linking of records |
| Controlled comparison | Credible | Needs effort; may be impractical |
| Observational comparison | Cheap | Confounded by task selection |
| Mandatory explanation checks | Maintain understanding | Can feel like testing; adds effort |
| Light sampled checks | Low burden | May miss patterns |
| Heavy restrictions on AI use | Control of risk | Lost benefit; shadow use |
| Open use with measurement | Learning and benefit | Needs trust and discipline |

The prose answer is to allow use within clear rules, measure what survives, sample for understanding, protect review capacity and skills, and keep the data on people out of evaluation.

## Questions to discuss with your team

**1. How much of what AI helped us produce last quarter is still in place, unchanged, and how do we know?**
Look at retention and rework for assisted changes against a comparable set. The facilitator should record how hard it was to answer. Agree how to tag and link the records so the answer is easy next quarter.

**2. Is review keeping up, and what happens when it does not?**
Look at review times, rounds, and sizes. Ask reviewers how they feel about assisted changes. Discuss limits on size and ways to share the load. Agree one norm to try.

**3. Could each of us explain the last change we shipped with AI help, and its trade-offs?**
Try it in pairs. Notice where explanation was easy and where it was hard. Discuss what that tells us about our use of the tool, and how to keep understanding up.

**4. What can we still do well without the tool, and what are we losing the knack for?**
List key tasks, rate confidence honestly, and plan some unaided practice or pairing. The conversation also surfaces what people value in their work and want to keep.

**5. Where did AI help us most and least, and what do those places have in common?**
Compare examples. Look for features such as well-defined tasks, good tests, or familiar domains. Use the findings to guide where to use the tool.

**6. What would we measure if we did not trust our first impressions?**
Ask the group to name the evidence that would change their mind about the tool in either direction. Use the answers to define the next comparison.

## Four perspectives

### Product and delivery teams

Delivery teams hold the day-to-day experience and the quality outcomes. They should tag assisted work, watch retention and rework, keep review meaningful, and maintain their own understanding. They should speak up when the volume of generated change outruns their ability to review it.

### Service and operations teams

Operations teams use AI for summaries, diagnosis, and replies, and they inherit the quality problems that escape. They should sample outputs, compare reopen and repeat contact rates, and keep clear human responsibility for actions in production. They should help define where AI must not act without a person.

### Leadership and governance

Leaders face pressure to show gains and may be tempted by usage and output metrics. They should insist on retention, rework, and stability measures beside speed, fund review capacity, protect skill development, and resist ranking people. Governance should expect comparisons and caveats in AI benefit reports.

### Customers and users

Users receive the results: code that runs their services, replies to their requests, documents they rely on. They benefit when quality holds and suffer when it does not. They should be able to reach a person, and their feedback on assisted interactions is key evidence of quality.

## In practice: a service management example

A European airline's digital group has six product teams that build and run booking and operations software. Teams started using an AI coding assistant a year ago, and the group's dashboard reports that 38 percent of merged lines are AI-generated. The numbers below are illustrative.

The head of engineering excellence is uneasy about that dashboard. She asks three teams to tag assisted changes through the tool's logs, at team level only, and to choose comparison changes of similar size and area. Over a quarter, the median time from first commit to merge is shorter for assisted changes, 1.4 days against 2.0. The retention rate of assisted changes after 30 days is 81 percent against 90 percent for comparison changes, and 12 percent of assisted changes needed a follow-up fix within 14 days against 7 percent. Review load tells the same story: the median review time per change is 35 percent higher for assisted changes, and the 85th percentile of change size has grown. Escaped defects per 100 changes are slightly higher for assisted changes, though the sample is small and the difference is within normal variation. A sample of 40 assisted changes shows that in 31 the author could explain the approach and its trade-offs well, in 6 partly, and in 3 not at all, mostly in code areas new to the author. In the service desk, assisted replies had a reopen rate of 7 percent against 6 for unassisted ones, with satisfaction similar. In a team pulse, newer engineers rate their confidence to implement core features without the tool at 2.6 out of 5, against 4.1 for engineers with more than three years in the group.

The head of engineering excellence takes the results to the teams and does not rank them. The teams agree four changes. Change size limits and a review rota protect reviewers. Authors briefly explain assisted changes in review. Newer engineers pair with experienced ones for core features, and a monthly unaided exercise keeps skills in practice. The dashboard drops the generated-line share and shows retention, rework, review load, and escaped defects, assisted against comparison. Three months later, the retention gap narrows to 4 points, follow-up fixes fall to 8 percent, and the explanation check improves. A vice president asks for the generated-line share to be a target for every team. The head of engineering excellence explains the findings and proposes to keep tracking outcomes, adding that gains are real in some tasks and not in others, and that the team will decide where to use the tool. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

A sustainable pace and motivated people include protecting understanding, so review AI-assisted work with the team at a regular cadence and look at what survived. The caution is that measuring individual AI use turns a team practice into surveillance.

### AI

Judge AI-assisted work by what survives review and production, and by whether people still understand what they ship. Pair retention and rework with an explanation check and an unaided confidence rating, and keep the data at team level. The caution is that quick drafts shift effort to reviewers, so measure review load as well.

### Automation

Tag AI-assisted changes automatically where the tooling allows, and measure the tagging on coverage, since untagged work breaks the comparison. The caution is that automated tags can be removed or missed, so sample.

### Analytics

Compare AI-assisted and other work on the same measures, with counts and uncertainty. The decision informed is where AI help is real and where it adds rework. The caution is that the two groups of work may differ in kind, so avoid causal claims from a rough comparison.

## Sector lens

**Startup.** Small teams may gain a lot from assistance and also accumulate hidden debt fast. Track retention and rework from early on, keep tests meaningful, and ensure that the people who will maintain the system understand it. Beware of shipping code nobody can explain.

**Small business.** Assistance can stretch a tiny team. Measure on a small sample: how often assisted work needs fixing later. Keep backups, tests, and human review of anything customer-facing, and protect the owner's understanding of the systems they depend on.

**Enterprise.** Scale amplifies both gains and problems. Provide shared guidance on tagging, review limits, and measures, compare across teams carefully without ranking, and invest in review and testing capacity. Include security and licence review of generated code in the pipeline (see topic 7.2, Software asset and licence metrics).

**Government and public sector.** Public systems have long lives, strict accountability, and high consequences for error. Require traceable human responsibility, careful testing, and documentation of how AI was used. Record assisted work in change records, and assess risks to fairness and security (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are tooling and usage charges, the effort to tag and link records, the reviewing and fixing time, extra testing, and training. A comparison study takes time, but it is cheap relative to a wrong decision to scale or to ban.

The returns are real where assistance reduces effort without reducing quality, and are lost where it moves effort into review, rework, and maintenance. Build the case from your own measures: time to a merged, retained change, rework and escaped defects against comparison, review load, and satisfaction of users and staff. Avoid using published productivity figures as your estimate. Remember hidden costs: reduced understanding, skill loss, and technical debt. Be honest about uncertainty (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Counting generated lines or suggestions accepted.** They reward volume. Measure what survives.
- **Comparing assisted work on easy tasks with unassisted work on hard ones.** The result flatters or punishes the tool. Match tasks.
- **Letting review capacity fall behind.** Quality drops silently. Limit change size and protect reviewers.
- **Skipping the downstream measures.** The cost appears later. Track rework, defects, and stability.
- **Treating generated tests as quality.** They can pass without checking anything. Test the tests.
- **Ignoring skills.** Understanding fades unnoticed. Track unaided confidence and practice.
- **Monitoring individuals.** It breeds fear and hides problems. Keep data at team level.
- **Declaring victory on a short, small study.** Re-run as tools and practices change.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Measuring what survives | Output counts | Informal impressions of quality | Assisted work tagged; retention and rework tracked against comparison | Downstream defects, stability, and review load managed together | Cross-team evidence guides where assistance is used; results shared widely |
| Review and understanding | Review as before | Concern about overload | Change size norms; explanation checks sampled | Review capacity planned; automation bias countered | Review and understanding built into how all teams work with AI |
| People and skills | Not considered | Anecdotes | Unaided confidence pulsed; some practice | Skills development planned; trends managed | Learning and craft protected across the organization; AI use co-designed with staff |

## Checklist

- [ ] AI-assisted work is tagged at team level through tool logs or a lightweight convention.
- [ ] Comparison work of similar size, area, and risk is defined.
- [ ] Retention and post-merge rework are tracked for assisted and comparison work.
- [ ] Escaped defects and change fail rate are reported beside any speed measure.
- [ ] Review time, rounds, and change size are monitored, with norms for size.
- [ ] Authors can explain assisted changes, and a sample is checked each quarter.
- [ ] Generated tests are sampled for value.
- [ ] Assisted support is compared for reopen rate, repeat contacts, and satisfaction.
- [ ] Unaided confidence is pulsed, and unaided practice is planned.
- [ ] Individual usage and acceptance data are not used in evaluation.

## AI prompts

**Plan a comparison of assisted and unassisted changes.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Design an explanation check.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Review the downstream measures.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Plan unaided practice.**

```text
Propose a light programme to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a measure of AI-assisted work.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an AI-assisted work metric measures what survives and carries its gaming vector and guardrail.

## Key takeaways

- Measure what survives: retention, rework, escaped defects, and stability, against comparable unassisted work.
- Protect review capacity and keep review deep, because it limits how fast assisted work can safely flow.
- Check that authors can explain what they ship, and notice whether skills are growing or fading.
- Sample generated tests and outputs for real value.
- Read published productivity claims as single studies, and measure your own work.
- Keep individual usage data out of evaluation.

## References and further reading

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
