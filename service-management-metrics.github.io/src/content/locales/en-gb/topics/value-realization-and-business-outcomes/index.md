# Value realisation and business outcomes

**Delivering a change is not the same as the organisation benefiting from it, so state the expected benefit before you build, check it after release with the people who were meant to gain, and be honest about how much of any improvement you can attribute to your work.**

## Overview and motivation

Agile ways of working put working software first and keep stakeholders collaborating throughout, so that what ships is what people need. IT service management (ITSM), as codified by ITIL, frames the same concern as value: a service is valuable when it helps customers achieve outcomes they want, with costs and risks they accept. Both traditions meet at one uncomfortable question. A year from now, are the people and the organisation better off because of what this team built and ran?

Answering it is harder than counting what was delivered. Features ship and nobody uses them. Incidents fall for reasons unrelated to the team's work. A cost saving appears on a slide, and the budget it came from is spent elsewhere. This topic is about closing that gap, and it links directly to the outcome focus introduced early in the book (see topic 1.3, Outcomes over output: choosing what to measure).

Four ideas organise the topic.

- **Benefit.** A benefit is a measurable improvement that a stakeholder values, such as less time spent on a task, fewer errors, more customers served, or lower risk. A feature is not a benefit. It is a means. [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management) is the discipline of identifying benefits, assigning owners, and checking that they arrive.
- **Value hypothesis.** Before building, the team writes down what it expects to change, for whom, by how much, and how it will tell. This is a testable claim, and it can be wrong. A [theory of change](https://en.wikipedia.org/wiki/Theory_of_change) or a [logic model](https://en.wikipedia.org/wiki/Logic_model) lays out the chain from activities to outputs to outcomes, which helps make the hypothesis explicit.
- **Leading and lagging indicators.** A [leading indicator](https://en.wikipedia.org/wiki/Leading_indicator) moves early and predicts a result, such as adoption of a new process. A [lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator) confirms the result after the fact, such as reduced cost per transaction. Use both: leading indicators let you correct course, and lagging indicators tell you whether it worked.
- **Attribution.** Many things change at once. To say that your work caused an improvement you need a comparison: a baseline, a comparison group, or a before-and-after design that accounts for other changes. Without one, claims of value are stories. The honest position is often "associated with" and not "caused by."

Goals frameworks such as [objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKRs) can connect team work to business outcomes, and the earlier topic on measurement frameworks covers them in detail (see topic 1.7, Measurement frameworks). The risk with every framework is the one named by [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): once a benefit number becomes a target, people find ways to produce the number without the benefit (see topic 1.2, Goodhart's law and the psychology of metrics).

The topic also bridges to money. The next part's topic on return on investment and the business case takes the financial view in depth (see topic 7.7, Return on investment and business case). Here the focus is on the evidence of outcomes, which feeds that case.

## Key principles

- **Write the expected benefit down before you build.** A claim that cannot be checked later cannot be learned from.
- **Name an owner for each benefit.** The owner is a stakeholder who will see the change, not the delivery team.
- **Measure at the users, after release.** Delivery is the start of the check, not the end.
- **Use leading indicators to steer and lagging indicators to confirm.**
- **Be honest about attribution.** Say what else changed, and avoid claims the evidence cannot support.
- **Count benefits that did not arrive.** Learning from a failed hypothesis is a benefit of working this way.
- **Keep collaborating.** Stakeholders and the team review the evidence together, regularly.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Benefit realisation rate | Share of expected benefits that were observed at the agreed review date | benefits with measured result at or above the agreed threshold / benefits expected with a review date in the period | percent | Benefits register with owners, baselines, and review dates | Continual improvement; service value system governance | Outcome review with stakeholders | Quarterly |
| Time to first value | Time from the start of work to the first measurable benefit for users | days from first work started to the first date the benefit indicator moved as expected | days | Work tracker and benefit indicator | Service design; release and deployment management | Continuous delivery of value | Per initiative |
| Hypothesis check rate | Share of released changes whose stated value hypothesis was checked after release | changes with a recorded post-release check / changes released that carried a hypothesis | percent | Hypothesis log linked to release records | Continual improvement; change enablement | Learning from released work | Monthly |
| Evidence quality share | Share of claimed benefits that have a baseline and a stated method of comparison | benefit claims with baseline and method / benefit claims reported | percent | Benefits register review | Measurement and reporting | Honest reporting of outcomes | Quarterly |
| Outcome indicator movement | Change in a chosen outcome indicator compared with its baseline and with a comparison where available | (indicator after minus indicator before) with the comparison group's change reported alongside | indicator units | Product analytics, service data, finance | Service level management; continual improvement | Key result progress | Monthly |
| Business-impact hours | Hours in which a business process was degraded or stopped because of service issues | hours of degraded or stopped process attributed by process owners to IT service causes | hours | Incident records joined with process owner confirmation | Incident management; availability management | Business impact review | Monthly |
| Outcome-linked capacity share | Share of team capacity spent on work linked to a stated outcome | capacity on items linked to a recorded outcome / total capacity | percent | Work tracker with outcome field | Service value system; portfolio governance | Work aligned to the product goal | Quarterly |

Define the review date and the threshold for every benefit when it is recorded, not afterward. Time to first value starts when work begins and stops when the indicator first moves in the expected direction by a stated amount, which may be well after release. Attribution of business-impact hours is agreed with the process owner, and disputes are logged.

## Recommendations

### Before building: make the claim checkable

**1. Write a value hypothesis for each significant change.** Use a plain form: "We believe that [change] will help [who] to [do what] so that [measurable improvement]. We will know by [indicator] moving from [baseline] to [expected], reviewed on [date]." Keep it short enough to fit on a card on the board. Teams that cannot fill in the blanks often have not yet understood the problem.

**2. Record a baseline.** Without a before, there is no after. Capture the current value of the indicator, how it was measured, and how much it varies. If the indicator is noisy, a single number is misleading, so record a range over several weeks (see topic 1.6, Statistical literacy for service metrics).

**3. Choose leading and lagging indicators.** For a new self-service request, a leading indicator is how many eligible users complete it, and a lagging indicator is the fall in manual handling hours (see topic 6.3, Service adoption and catalogue metrics). Agree which indicator is checked when. Leading indicators allow a mid-course correction without waiting for the quarter to end.

**4. Name a benefit owner outside the delivery team.** The owner is the stakeholder who will see the improvement in their area and who can judge it. The delivery team supports the measurement but does not mark its own homework. This is continuous collaboration in practice: the person who wanted the outcome stays involved until it is confirmed.

### After release: check it, honestly

**5. Review the hypothesis on the agreed date.** Hold a short review with the owner and the team. Look at the indicator, the baseline, and the comparison. Record the result in the register: met, partly met, not met, or cannot tell. "Cannot tell" is a legitimate result and a prompt to improve the measurement.

**6. Use a comparison where you can.** The strongest comparison is a controlled experiment. [A/B testing](https://en.wikipedia.org/wiki/A/B_testing) compares two versions with users randomly assigned, and works well for digital services with enough traffic. Where randomisation is not possible, a staggered rollout lets you compare groups that have and have not received the change. A [difference-in-differences](https://en.wikipedia.org/wiki/Difference_in_differences) approach compares the change in a treated group with the change in an untreated group over the same period, which removes shared trends. Use the simplest design that fits.

**7. Look for confounders.** A [confounding](https://en.wikipedia.org/wiki/Confounding) factor is something else that changed and could explain the result: a seasonal pattern, a new policy, a different mix of requests. List the plausible ones before you claim an effect. If you cannot rule them out, say what the evidence supports and no more.

**8. Report negative and null results.** When a change did not help, say so and record what was learned. [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias), the habit of looking only at successes, makes programmes look better than they are. A register that contains only wins has not been kept honestly.

### Keep the programme honest

**9. Separate evidence quality from the benefit.** Track the share of claims that have a baseline and a stated method. A large claim with weak evidence should read as such. A healthy register shows modest claims with strong evidence, and a few honest "cannot tell" entries.

**10. Link capacity to outcomes, loosely.** Ask what share of the team's work is tied to a stated outcome, and look at the rest. Some work, such as security fixes or keeping the lights on, has no new benefit, and that is fine if it is named. The aim is to notice drift, not to force every task into a benefit story.

**11. Connect to the goal framework you use.** If you use OKRs, make the key results the outcome indicators and review them with stakeholders. Keep the key results about outcomes, not tasks, and leave room for aspirational goals that may not be fully met. Do not make key results individual targets (see topic 1.7, Measurement frameworks).

**12. Review the portfolio as well as the project.** Once a quarter, look across initiatives at which benefits arrived, which did not, and what the pattern says about how the team estimates and selects work. Use it to improve the way hypotheses are written, not to rank teams.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Benefit realisation rate | Setting low thresholds; moving the review date; redefining the benefit after the fact | Threshold and date fixed at approval; evidence quality share; owner outside the delivery team |
| Time to first value | Choosing an early indicator that moves for the wrong reason; starting the clock late | Indicator and clock defined in the register; confirm with the benefit owner |
| Hypothesis check rate | Writing vague hypotheses that always pass; checking only successful changes | Sample hypotheses for testability; include null and failed results in the review |
| Evidence quality share | Backfilling baselines; describing any comparison as a method | Baseline dated before the change; review by someone outside the team |
| Outcome indicator movement | Picking a favourable period or group; ignoring confounders | Pre-registered period and group; list of confounders considered |
| Business-impact hours | Process owners inflating or deflating attributions; incidents reclassified to avoid attribution | Attribution rules written and logged; compare with incident and availability records |
| Outcome-linked capacity share | Tagging all work with a generic outcome; inventing outcomes for routine work | Outcome list reviewed with stakeholders; sample items for link quality |

A healthy reading is a register in which some benefits are met, some are not, a few are unclear, and every entry has a baseline, an owner, and a stated method. A register of uniform success should be treated with suspicion.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Formal benefits register | Accountability, learning across initiatives | Bureaucracy if applied to every small change |
| Light hypothesis on each card | Cheap, builds the habit | Easy to write vaguely |
| Controlled experiment | Strong evidence of cause | Needs traffic, time, and a design that fits the service |
| Before-and-after only | Simple, quick | Confounded by other changes |
| Stakeholder judgement | Captures value that metrics miss | Subject to optimism and politics |
| Leading indicators | Early course correction | May not predict the real outcome |
| Lagging indicators | Confirm real results | Arrive late; many causes |

The prose answer is to match the weight of the evidence to the size and risk of the change. Use a light hypothesis and a simple before-and-after for small changes, and an experiment or staged rollout for large ones. Always record what you expected, what happened, and how sure you are.

## Questions to discuss with your team

**1. What did we ship in the last quarter, and what changed for the people it was meant to help?**
List the main changes and, for each, name the person who would notice a difference. Ask what they would say. The facilitator should note changes where nobody can answer, since they are candidates for a post-release check. Agree one change to review with its owner within a month.

**2. For our next significant change, what is the value hypothesis and how will we know?**
Fill in the hypothesis form together. Challenge vague words and missing baselines. Ask what result would make the team change its plans. If the group cannot agree on a measure, that is a discovery task before building.

**3. Who owns the benefit, and are they in the room?**
Check that each benefit has an owner outside the delivery team. Ask how often the owner sees the evidence. Where the owner is the team itself, discuss who else should share the judgement. The conversation supports continuous collaboration among stakeholders.

**4. What else changed when the numbers improved?**
Take a recent claimed improvement and list other changes in the same period: policy, seasonality, staffing, another team's release. Ask which could explain the result. Decide whether to describe the improvement as caused by the change, associated with it, or unclear.

**5. Which of our past hypotheses turned out wrong, and what did we do about it?**
Ask for a story of a failed expectation. If none comes quickly, the team may not be checking, or may not be talking about it. Discuss how to make reporting a null result safe and useful.

**6. What share of our capacity is tied to an outcome, and does that feel right?**
Review a month of finished work and tag each item with an outcome or "keeping the service running." Ask whether the split matches what leaders think. Discuss work with no outcome and whether it should continue.

## Four perspectives

### Product and delivery teams

Delivery teams own the hypothesis and the measurement plan, and they should deliver changes in small steps so evidence arrives early. They should build the indicator into the change, for example by logging the events they need, and ask the benefit owner to confirm what they see. Teams should welcome failed hypotheses as information, since early learning saves the cost of building more of the wrong thing.

### Service and operations teams

Operations teams see the real effect of changes on incidents, requests, and capacity. They hold much of the data for lagging indicators, such as manual handling hours and repeat contacts, and they should help check hypotheses as well as absorb change. They should speak up when benefits claimed on paper do not match what the service desk sees.

### Leadership and governance

Leaders choose whether benefits are a learning tool or a sales pitch. They should ask for baselines and methods, welcome honest "not met" results, and avoid holding teams to benefit numbers set before the facts were known. Governance should review the register as a portfolio, fund the measurement, and be willing to stop work whose hypothesis has failed.

### Customers and users

Users know whether a change helped, and they are the best judges of most benefits. They should be asked, shown the results, and told when a change did not deliver what was hoped. Their comments are evidence in their own right. A benefit that the numbers show and the users do not feel deserves a closer look.

## In practice: a service management example

A regional health insurer's IT group builds and runs a claims portal for providers. The numbers below are illustrative.

The group plans to add automatic eligibility checks to claim submission. The hypothesis, written with the claims operations manager, is: "We believe automatic eligibility checks will help providers' billing staff submit correct claims first time, so that claims returned for correction fall from 18 percent to 12 percent within three months. We will know from the returned-claim rate, reviewed on 1 March." The baseline is the average of the last 12 weeks, 18 percent with a weekly range of 15 to 21 percent. The leading indicator is use of the check in the first month. The claims operations manager is the benefit owner.

The team releases in small steps, with the check first available to one region. After three weeks, use of the check is 64 percent in that region. At the review date, returned claims fall to 13 percent in the region with the check and to 17 percent in regions without it. The claims manager points out that a policy change on one billing code also took effect in the period. The team lists it as a confounder and removes claims with that code from both groups, which leaves 14 percent against 17.5 percent. The benefit realisation is recorded as "partly met": better than baseline by a clear margin, short of the 12 percent target. The team writes honestly in the register that the evidence is from a staggered rollout over one quarter, and that the effect may differ for other providers.

They then roll out the check to all regions, with a plan to check again in three months, and add a task to improve the error message, since comments from providers say the message is unclear. The finance director asks for a single number for the board. The head of IT offers the range and the method, and declines to state a figure with more precision than the evidence allows. The decision is recorded, along with the next review date.

## Agile, AI, automation, and analytics

### Agile

State the expected benefit before work begins and check it after release with the people meant to gain. The caution is that benefits claimed without a baseline are stories.

### AI

AI projects often promise large benefits, so record the baseline, the expected change, and the evidence for AI-assisted work separately, and pair productivity claims with quality and cost. The caution is that benefit estimates produced by an AI tool should be checked, since they can sound precise and be unsupported.

### Automation

Automate the capture of outcome indicators already in your systems, and measure the benefit review process on completion. The caution is that automated dashboards of indicators can replace the conversation about whether the benefit happened.

### Analytics

Report the movement of outcome indicators with the evidence quality and attribution limits. The decision informed is what to continue, change, or stop. The caution is that attribution is hard, so describe the uncertainty.

## Sector lens

**Startup.** Benefits are close to revenue and retention, and learning speed matters. Write one-line hypotheses on cards, check them quickly, and avoid heavy registers. Use simple comparisons, and accept that small samples limit what you can claim.

**Small business.** The owner is the benefit owner, and the effects are visible. Keep a short list of changes with expected effects and review it every quarter. Avoid inflating small gains into large figures, and compare with the cost of the change.

**Enterprise.** Portfolios, funding cycles, and many stakeholders make a benefits register useful. Keep it light for small changes and rigorous for large ones, put owners in business units, and review across the portfolio. Guard against numbers being rolled up with different definitions.

**Government and public sector.** Outcomes are often public goods, such as access, fairness, and safety, which do not reduce to revenue. Define outcomes with the people served, use mixed evidence, and report methods openly. Formal business cases and benefits reviews may be required, and honest null results matter for public accountability (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is mainly attention. Writing a hypothesis takes minutes, a baseline takes an hour or a few, and a review takes a short meeting. Experiments and staged rollouts need design effort and some tooling. A benefits register can be a spreadsheet or a field in the work tracker.

The return is better investment decisions. A team that checks its hypotheses stops building things that do not help, scales those that do, and learns how well it predicts. That saves the cost of unused features and failed programmes. Build the case from your own data: the share of changes that carried a hypothesis, the share that were checked, and the cost of work later abandoned or reversed. Avoid published figures about the failure rate of IT projects unless you can trace their source and method, since they vary widely and are often quoted without context. The financial treatment is in the next part (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Counting delivery as value.** A shipped feature is a means. Check the effect on people.
- **Hypotheses that cannot fail.** Make them specific, with a number and a date.
- **Marking your own homework.** Have the benefit owner outside the team judge the result.
- **Claiming cause from a before-and-after.** List confounders and use a comparison where possible.
- **Reporting only wins.** Record null and negative results. A register of only successes is not honest.
- **Setting benefit targets for individuals.** Targets tied to people invite inflated claims. Keep benefits at team and initiative level.
- **Over-precision.** Report ranges and the method, not a single decimal number.
- **Ignoring the work that has no new benefit.** Name it, and do not invent a benefit story for it.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Stating value | Benefits claimed in business cases only | Hypotheses written for some changes | A short hypothesis, baseline, and owner for every significant change | Hypotheses and thresholds fixed at approval; leading and lagging indicators defined | Hypotheses shared across teams and suppliers; outcomes defined with users |
| Checking value | No post-release check | Occasional check by the delivery team | Scheduled review with an independent owner | Comparisons and confounders documented; evidence quality tracked | Portfolio-level evidence guides funding; shared experiments across teams |
| Learning | Wins celebrated, failures forgotten | Some lessons recorded | Null results recorded and reviewed | Patterns in missed hypotheses improve selection and sizing | Learning feeds planning across the organisation and with partners |

## Checklist

- [ ] Each significant change has a written value hypothesis with baseline, indicator, and review date.
- [ ] Each benefit has an owner outside the delivery team.
- [ ] Leading and lagging indicators are defined and tracked.
- [ ] Reviews take place on the agreed date with the owner.
- [ ] Comparisons or staged rollouts are used where feasible.
- [ ] Confounders are listed for each claimed result.
- [ ] Null and negative results are recorded and shared.
- [ ] Evidence quality is tracked next to benefit claims.
- [ ] No individual has a personal benefit target.
- [ ] A quarterly portfolio review looks at patterns in met and missed hypotheses.

## AI prompts

**Write a value hypothesis.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organisation]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**List confounders for a claimed result.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Design a staged rollout comparison.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Review a benefits register entry.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a value or outcome metric before you report it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a benefits metric entry carries its gaming vector, guardrail, and evidence standard.

## Key takeaways

- Write a checkable value hypothesis before building, with a baseline, an owner outside the team, and a review date.
- Use leading indicators to steer and lagging indicators to confirm.
- Compare where you can, list confounders, and claim only what the evidence supports.
- Record null and negative results; a register of uniform success is not honest.
- Track the quality of evidence beside the size of the claim.
- Keep stakeholders and users collaborating until the outcome is confirmed.

## References and further reading

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
