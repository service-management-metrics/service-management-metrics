# Return on investment and business case

**A business case is a forecast, so write it with ranges and stated assumptions, fund the work in stages as evidence arrives, and check the forecast against what happened so that the next case is more honest than the last.**

## Overview and motivation

Improving how IT services are delivered and run takes money and attention, and every proposal competes with others. A new platform, a staffing change, an automation programme, and a quality initiative all promise a better future. Leaders need a way to compare them, and teams need a way to argue for the work that matters. The business case is the traditional tool, and return on investment is its best-known number.

A [business case](https://en.wikipedia.org/wiki/Business_case) is a justification for a proposed project or undertaking, usually setting out the problem, the options, the costs, the benefits, and the risks. [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) compares the gain from an investment with its cost. [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) counts everything an asset or service costs over its life, including purchase, operation, support, and disposal. The earlier topics of this part supply the inputs: the cost of assets, software, configuration records, services, and cloud resources (see topic 7.5, Service cost and unit economics and topic 7.6, FinOps and cloud cost metrics), and the benefits topic gives the evidence of outcomes (see topic 6.5, Value realization and business outcomes).

Two tensions make business cases hard to do well.

- **Business cases are forecasts, written by people who want approval.** The author often wants the proposal to succeed, and the incentive to inflate benefits and trim costs is strong. [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias) is the tendency to expect better outcomes than are likely, and it is well documented in project planning. The corrective is [reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting), which bases estimates on the actual outcomes of similar past projects instead of on a bottom-up story. Your own history of past cases is the best reference class you have.
- **Continuous delivery changes what a business case can promise.** The agile approach assumes that requirements and value are discovered as the work proceeds. A fixed scope, price, and benefit set a year in advance conflicts with that. The agile response is to fund in stages: a small first step to learn, then further funding as evidence arrives. This fits the aim of continuous delivery and continuous collaboration with stakeholders, and it fits a finance function that wants control. It also means the business case is a living document, revisited as hypotheses are tested (see topic 6.5, Value realization and business outcomes).

A few ideas from finance help. The [time value of money](https://en.wikipedia.org/wiki/Time_value_of_money) says that a currency unit today is worth more than one later, so benefits further in the future count for less. [Net present value](https://en.wikipedia.org/wiki/Net_present_value) (NPV) converts a stream of future costs and benefits into a single value today using a discount rate. The [payback period](https://en.wikipedia.org/wiki/Payback_period) is the time to recover the initial outlay. Each is a summary and each hides assumptions, so state them. [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost) reminds you that the cost of choosing one option is the value of the best alternative forgone. A [sunk cost](https://en.wikipedia.org/wiki/Sunk_cost) is money already spent that cannot be recovered and should not drive the decision to continue.

Every number in a business case can be gamed, by choosing a generous period, a favourable discount rate, or benefits that are hard to check. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to the case itself: when approval depends on a headline ROI, authors learn to produce it (see topic 1.2, Goodhart's law and the psychology of metrics). The measures below therefore include a check on the quality of past forecasts.

## Key principles

- **Treat the case as a forecast with a range.** Show low, expected, and high outcomes, and state the assumptions behind each.
- **Count the full cost.** Include operation, support, training, change effort, and disposal as well as the build.
- **Be explicit about benefits and their evidence.** Separate cost savings, cost avoidance, revenue, and risk reduction, and say how each will be measured.
- **Fund in stages.** Release money as hypotheses are tested and the picture improves.
- **Compare with the alternatives, including doing nothing.** The cost of staying put is part of the case.
- **Learn from your own history.** Check forecasts against outcomes and adjust.
- **Ignore sunk costs.** Decide on what lies ahead.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Return on investment | Net gain relative to cost over a stated period | (total benefits minus total costs) / total costs over the period | percent | Business case, ledger, benefits register | Service financial management; continual improvement | Outcome review against funding | At decision and at each review |
| Total cost of ownership | Whole-life cost of a service or asset over a stated period | acquisition + operation + support + change + training + disposal costs over the period | currency | Ledger, cost models, supplier contracts | Service financial management; IT asset management | Cost of a persistent team and its platforms | At decision and annually |
| Payback period | Time for cumulative net benefits to equal the initial investment | time at which cumulative benefits minus cumulative costs reaches zero | months | Business case cash flows | Service financial management | Time to first value, extended to cost recovery | At decision and at each review |
| Net present value | Present value of expected benefits minus present value of costs, at a stated discount rate | sum over periods of (benefit minus cost) / (1 + discount rate) to the power of the period | currency | Business case cash flows, finance policy on the discount rate | Service financial management | Value-based prioritization | At decision |
| Cost estimate accuracy | Ratio of actual to estimated cost for completed initiatives | actual cost / estimated cost at approval, per initiative and as a distribution | ratio | Business case records and ledger | Service financial management; continual improvement | Forecast accuracy | Quarterly |
| Benefit estimate accuracy | Ratio of realized to expected benefit for completed initiatives, using the evidence rules for benefits | realized benefit / expected benefit at approval, per initiative and as a distribution | ratio | Business case records and benefits register | Continual improvement; service value system governance | Outcome review with stakeholders | Quarterly |
| Evidence-based stop rate | Share of funded initiatives that were stopped or reshaped at a stage gate because evidence changed the picture | initiatives stopped or reshaped on evidence at a gate / initiatives reaching a gate | percent | Stage gate decision log | Continual improvement; portfolio governance | Learning from released work | Quarterly |

State the period, the discount rate, and what counts as a cost or a benefit for every figure, and record them with the case. ROI and NPV depend heavily on these, so two cases are comparable only if they use the same rules. Cost and benefit accuracy are shown as distributions, for example the median ratio and the spread, across past initiatives, not as a single average. A low evidence-based stop rate may mean good selection, or it may mean gates that never say no, so read it with the accuracy measures.

## Recommendations

### Write the case honestly

**1. Start with the problem and the options.** Describe the problem, who experiences it, and what it costs now. List at least three options: do nothing, a minimal step, and the proposed change, plus any serious alternative. "Do nothing" has costs, such as continuing incidents or growing risk, and including them makes the comparison fair.

**2. Count total cost of ownership over the life of the change.** Include build, licences, hosting, operation, support, training, migration, the time of the people who will use it, and disposal. Costs that arrive after launch are the ones most often left out. Use a period that matches the life of the benefit, and say what it is.

**3. Describe each benefit and how it will be measured.** Separate the kinds. Cost savings reduce actual spend. Cost avoidance prevents spend that would otherwise have occurred, and is harder to verify. Revenue benefits depend on market behaviour. Risk reduction lowers the likelihood or impact of loss, and is best stated in terms of a specific scenario. For each, name the indicator, the baseline, and the owner (see topic 6.5, Value realization and business outcomes).

**4. Give ranges, and say what drives them.** For costs and benefits, give a low, expected, and high estimate, with the main assumptions. A [sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis) shows how the result changes when an assumption changes, and which assumptions matter most. If the case only works when every assumption is generous, say so. Simulation can combine ranges, though it also can give false comfort if inputs are guesses.

### Correct for optimism

**5. Use your own history as a reference class.** Look at the actual cost and benefit outcomes of your past similar initiatives, and compare them with what was forecast. If past initiatives cost 30 percent more than estimated on average, a new estimate that ignores this is likely to repeat the error. Adjust, or at least show the adjustment. The cost and benefit accuracy measures above build this record.

**6. Have someone outside the team review the case.** A colleague from finance or another team, not invested in the outcome, reads the case for missing costs, generous benefits, and untested assumptions. Make the review routine and constructive. A case that survives it is stronger.

**7. Separate the people who estimate from the people who advocate, where possible.** Delivery teams are good at estimating effort, and sponsors are good at judging value. When the same person wants approval, the estimates drift. Record who produced which numbers.

### Fund in stages

**8. Release funding in steps tied to evidence.** Fund a small first stage to test the riskiest assumption: build a thin slice, run a pilot, or measure the baseline. Define in advance what evidence would justify the next stage, what would make you reshape the work, and what would make you stop. This is the agile approach to risk applied to money, and it caps the cost of being wrong.

**9. Decide at each stage on what lies ahead.** Money already spent is a sunk cost, and it should not weigh on whether to continue. Ask whether the remaining cost is justified by the remaining expected benefit, given what you have learned. Give teams permission to stop, and treat a well-evidenced stop as a good outcome.

**10. Keep stakeholders in the loop.** Review the case with the sponsor and the benefit owner at each stage. Collaboration with stakeholders throughout is a core agile aim, and it prevents the case from becoming a document that nobody reads after approval.

### Check and learn

**11. Review the outcome against the case.** At the agreed review points, compare actual cost and realized benefit with the forecast. Record the ratios, the reasons for differences, and what you would change in the next case. Make the review blameless and factual, since honest reporting depends on it.

**12. Report the distribution of accuracy to decision makers.** Show, across past initiatives, how forecasts compared with outcomes. A portfolio where benefits regularly fall short by a similar margin tells leaders how much to trust a new case, and it gives authors a reason to be honest. Pair it with the evidence-based stop rate to see whether the gates work.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Return on investment | Choosing a long period or counting soft benefits; leaving out operating cost | Fixed rules for period and cost scope; benefit evidence quality; independent review |
| Total cost of ownership | Omitting support, training, change effort, or disposal; using optimistic volumes | Checklist of cost categories; compare with actual TCO of similar past work |
| Payback period | Defining the start late; counting benefits that are not realized | Clock definition fixed; compare with realized benefit accuracy |
| Net present value | Choosing a low discount rate; extending the horizon | Discount rate set by finance policy; sensitivity analysis shown |
| Cost estimate accuracy | Revising the baseline estimate after the fact; excluding overruns as scope changes | Estimate frozen at approval; log scope changes with approval; show total cost to complete |
| Benefit estimate accuracy | Counting benefits that were not measured; redefining the benefit | Benefits register rules; owner outside the delivery team confirms |
| Evidence-based stop rate | Stopping low-value work to inflate the rate; never stopping anything | Read with accuracy measures; review reasons for stops and continues |

A healthy reading is a portfolio with a track record: forecasts that are somewhat optimistic in a known way, cases that include ranges and sensitivity, and gates that sometimes stop work on evidence.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Large upfront business case | Clear commitment and control | Locks in assumptions; invites optimism |
| Staged funding | Limits the cost of being wrong; learns early | Needs discipline at gates; less certainty for planning |
| Single ROI figure | Simple to compare | Hides assumptions; easy to game |
| Range with sensitivity | Honest about uncertainty | Harder to compare; may feel vague |
| Qualitative case | Captures strategic and risk reasons | Hard to compare and verify |
| Quantitative case | Comparable and testable | False precision; omits what cannot be counted |
| External reference class | Corrects optimism | May not fit your context |
| Own-history reference class | Fits your context | Needs a record; small samples |

The prose answer is to use staged funding, ranges, and your own history, together with a short qualitative account of what the numbers miss. Use ROI, NPV, and payback as summaries, not as verdicts.

## Questions to discuss with your team

**1. How wrong were our last five business cases, and in which direction?**
Collect the forecast and actual costs and benefits for recent initiatives. Calculate the ratios. Look at the spread and whether the errors lean one way. The facilitator should resist explanations in the first pass and just record the pattern. Then discuss what it implies for the next case.

**2. What is the riskiest assumption in our current proposal, and how cheaply could we test it?**
List the assumptions and rank them by how much the case depends on each and how unsure we are. For the top one, design a small test. The answer shapes the first funding stage.

**3. What does doing nothing cost, and have we put it in the case?**
Describe the likely path if the proposal is not approved: continuing incident costs, rising maintenance, growing risk. Estimate it with a range. Check that the case compares fairly with it.

**4. Which costs always appear late in our projects?**
Think of operations, training, migration, and decommissioning. Check the case for each. Add a standard checklist of cost categories to the template.

**5. Who outside the team has challenged our numbers, and what did they say?**
Review the last independent review. If there was none, decide who should do the next one. The conversation should make clear that review is a service to the case, not an attack.

**6. When did we last stop something because the evidence changed, and how did it feel?**
Recall a stopped or reshaped initiative. Discuss how it was received and what it did for trust. Agree how to make the next stop feel like learning.

## Four perspectives

### Product and delivery teams

Delivery teams supply cost estimates and learn from the stages of funding. They should estimate in ranges, record actual costs, and speak up when assumptions break. Staged funding lets them focus on learning what matters most, and a stop based on evidence should count as a success.

### Service and operations teams

Operations teams own much of the cost after launch and are often left out of the case. They should be asked for the running costs, support effort, and risks, and should check the benefits that depend on their work, such as reduced incidents. They can verify claims about savings in operations from their own data.

### Leadership and governance

Leaders decide what is funded and set the climate for honesty. They should ask for ranges and assumptions, review the track record of forecasts, fund in stages, and accept a stop as a normal outcome. Governance should require independent review of large cases and a post-implementation check, and should look at the portfolio of outcomes.

### Customers and users

Users and business owners bear the benefits and the disruption. They should be part of the case, helping to define the problem and the benefit, and be told what was decided and why. Their experience after delivery is the best test of whether the case was right.

## In practice: a service management example

A provincial health agency's IT group proposes a programme to automate routine access requests and reduce manual handling. The numbers below are illustrative.

The proposal's first draft claims an ROI of 240 percent over five years, based on 18,000 requests a year, an average manual handling cost, and full automation of 80 percent of requests. The finance partner suggests applying the group's own history. She pulls eight past initiatives: actual cost was a median of 1.35 times the estimate, with a range from 1.0 to 1.9, and realized benefit was a median of 0.6 of the expected benefit. The group also finds that the request volume figure came from a single busy year, and that the cost estimate omitted training and the time of the staff who review exceptions.

The team rewrites the case with ranges. Using the cost history, the expected cost rises by a third. Using the benefit history, expected benefit is reduced by roughly half. The revised case shows an ROI in a range from slightly negative to about 70 percent, a payback period between 20 and 40 months, and an NPV that is positive in the middle and expected cases at the finance policy discount rate and negative in the low case. Sensitivity analysis shows that the share of requests that can be automated matters most. The proposal is reshaped into stages. The first stage automates the three most common request types, with a budget of about one fifth of the total, to test the automation share and measure the baseline handling time. The criteria for the second stage are written down: at least 50 percent of those request types fully automated, and handling time per request reduced by a stated amount, with the benefit owner confirming.

After the first stage, 58 percent of the three request types are automated, and the exceptions take longer than expected. The team reshapes the second stage to improve the exception handling before extending to more types. The agency's board asks why the ROI figure has gone down. The director explains that the earlier figure assumed full automation and no history of overrun, and that the new range is more honest. The decision is recorded. The evidence-based reshaping of the second stage is logged, and the portfolio's cost and benefit accuracy tables are updated.

## Agile, AI, automation, and analytics

### Agile

Fund work in stages as evidence arrives and check the forecast after release with stakeholders. The caution is that a single large business case invites optimistic assumptions.

### AI

AI business cases often rely on productivity claims, so record the baseline, the measured change, and the quality effects, and compare forecast with result. The caution is that AI vendors' claims may not transfer to your context, so test with a pilot before scaling.

### Automation

Automate the collection of cost and benefit data where it exists, and measure the business case process on estimate accuracy. The caution is that automation benefits are often claimed as hours saved, which do not become money unless the hours are used.

### Analytics

Show ranges and assumptions, and track estimate accuracy over time. The decision informed is whether to continue, change, or stop. The caution is that return on investment depends on assumptions, so show them next to the figure.

## Sector lens

**Startup.** Resources are scarce and learning speed matters. Use a one-page case with the riskiest assumption and a cheap test, fund in small steps, and avoid elaborate financial models. Runway, not NPV, is often the binding constraint.

**Small business.** The owner is the sponsor and the finance function. Focus on payback and cash flow, include the time of staff, and compare with the do-nothing and buy options. Beware of vendor-supplied ROI calculators, which tend to be generous.

**Enterprise.** Portfolio governance, finance policy on discount rates, and many competing proposals make consistency important. Use a standard template with required cost categories, independent review for large cases, and a post-implementation review. Keep a record of forecast accuracy by sponsor and by type of initiative as a portfolio tool, not a ranking of people.

**Government and public sector.** Public bodies often follow formal appraisal guidance, such as the UK Green Book, which sets out how to appraise options, treat optimism bias, and consider value for money including non-financial benefits. Benefits may be social and hard to monetize, and transparency and audit matter. Use the guidance that applies to you, document assumptions, and record the evidence for benefits (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

This topic is itself about the business case, so the point is the cost of doing it well. Writing a careful case takes days, not hours, and independent review takes more. Tracking cost and benefit accuracy requires a simple record of each initiative's forecast and outcome, which many organizations lack. Staged funding adds governance meetings.

The return is better allocation of scarce money and fewer large failures. Honest cases reduce the surprises that follow optimistic ones. A track record lets leaders discount new cases appropriately, which makes the whole portfolio more reliable. Build the argument from your own history: the ratios of actual to estimated cost and benefit, the money spent on initiatives that were later abandoned, and the cost of the review compared with the overruns it prevented. Avoid quoting studies of project failure rates unless you can trace the method and its relevance to your type of work.

## Anti-patterns and pitfalls

- **A single ROI figure presented as fact.** It hides assumptions. Show ranges and sensitivity.
- **Leaving out operating cost.** The build is a fraction of the life cost. Count the whole life.
- **Counting soft benefits as hard.** Cost avoidance and productivity claims need evidence. Label and test them.
- **Forecasting from the bottom up only.** It repeats optimism. Compare with your own history.
- **All funding upfront.** It locks in guesses. Fund in stages with evidence gates.
- **Continuing because of money already spent.** Decide on what lies ahead.
- **Marking your own homework.** Have an independent reader review costs and benefits.
- **Never revisiting the case.** Without outcome reviews, nothing improves. Check forecasts against results.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Writing the case | Informal pitch with a headline number | Template with costs and benefits | Standard template with TCO checklist, ranges, and sensitivity | Own-history adjustment applied; independent review | Cases co-developed with business owners and finance; shared assumptions across the portfolio |
| Funding | All upfront | Milestones | Staged funding with evidence criteria | Gates routinely reshape or stop work on evidence | Portfolio funding flexes between initiatives based on evidence |
| Learning | No follow-up | Occasional review | Post-implementation review against the case | Cost and benefit accuracy tracked as distributions and used in new cases | Learning shared across the organization and with partners; method improves |

## Checklist

- [ ] The case lists options, including doing nothing.
- [ ] Total cost of ownership covers build, operation, support, training, change, and disposal.
- [ ] Each benefit has a type, an indicator, a baseline, and an owner.
- [ ] Costs and benefits are given as ranges with the drivers stated.
- [ ] A sensitivity analysis shows which assumptions matter most.
- [ ] Estimates are compared with your own history of similar initiatives.
- [ ] An independent reviewer has read the case.
- [ ] Funding is staged, with evidence criteria for continuing, reshaping, or stopping.
- [ ] Outcomes are reviewed against the case on agreed dates.
- [ ] Cost and benefit accuracy across past initiatives are reported to decision makers.

## AI prompts

**Stress-test a business case.**

```text
Here is a summary of our business case for [initiative]: costs [list with
ranges], benefits [list with types and ranges], period [years], discount rate
[rate set by finance], and assumptions [list]. Identify missing cost
categories, benefits that need stronger evidence, assumptions that dominate the
result, and optimism risks. Suggest a sensitivity analysis and a staged
funding structure. Do not invent figures. List your assumptions and questions
I should answer.
```

**Build a reference class from our history.**

```text
We have these past initiatives with forecast and actual cost and benefit:
[paste a table]. Calculate the ratios of actual to forecast, describe the
median and spread, comment on any pattern by type of initiative, and suggest
how to use this when estimating a new initiative. Warn me where the sample is
too small to rely on. Do not use outside benchmarks. List your assumptions.
```

**Design stage gates.**

```text
For [initiative], propose three funding stages. For each, state the riskiest
assumption to test, the evidence that would justify moving on, the evidence
that would make us reshape the work, and the evidence that would make us stop.
Keep each stage small and cheap. Do not assume any particular delivery method.
List your assumptions and decisions that need leadership input.
```

**Write a post-implementation review.**

```text
Draft a one-page post-implementation review for [initiative]. Inputs: the
original case [summary], actual cost [figures], realized benefit and evidence
[summary], and what changed along the way [list]. Include cost and benefit
ratios, reasons for differences, what we would change in the next case, and
questions for the benefit owner. Keep the tone factual and blameless. List your
assumptions and any claim that needs checking.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a business case or ROI metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a financial metric entry states its period, assumptions, gaming vector, and guardrail.

## Key takeaways

- A business case is a forecast: show ranges, assumptions, and sensitivity.
- Count total cost of ownership over the life of the change, and compare with doing nothing.
- Correct for optimism using your own history of forecasts and outcomes.
- Fund in stages, decide on what lies ahead, and treat an evidence-based stop as success.
- Review outcomes against the case and report accuracy to decision makers.
- Use ROI, NPV, and payback as summaries with stated rules, not as verdicts.

## References and further reading

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
