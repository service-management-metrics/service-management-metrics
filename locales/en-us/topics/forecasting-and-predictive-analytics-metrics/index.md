# Forecasting and predictive analytics metrics

**A forecast is a range with a track record, not a date or a number to defend, so measure how often the actual result fell inside the stated range, whether the range was honest about its width, and whether anyone made a better decision because of it.**

## Overview and motivation

[Forecasting](https://en.wikipedia.org/wiki/Forecasting) estimates a future quantity from past data and stated assumptions. Service organizations forecast demand for support, capacity for a platform, the date a piece of work will finish, the chance a change will fail, and the cost of a service next year. Predictive models, including machine learning models, extend this to scoring individual items: which ticket will breach its target, which change is risky, which incident is likely to recur.

Forecasts and predictions fail in ordinary ways. The past may not resemble the future, because a service, a team, or a tool has changed. The data may be thin or biased. The range may be too narrow, because a single number looks more helpful than an interval. And the forecast may be used as a commitment, so people work to make it come true or hide what contradicts it.

Earlier topics gave forecasts for specific uses: delivery dates from throughput (see topic 2.5, Delivery forecasting and planning metrics), capacity from demand (see topic 5.4, Capacity and performance metrics), and cost (see topic 7.5, Service cost and unit economics). This topic gives the general method for measuring the quality of any forecast or prediction, which applies to all of them. It also covers predictive models whose output drives an action, where the cost of a wrong prediction falls on someone.

Terms used here. A **point forecast** is a single predicted value. A **prediction interval** is a range intended to contain the actual value with a stated probability. **Calibration** is the agreement between stated probability and observed frequency: of the forecasts that said 80 percent, about 80 percent should come true. **Forecast error** is the difference between forecast and actual. A **baseline forecast** is a simple method, such as "same as last period", against which a more complex method is compared. A **false positive** is a prediction of an event that does not happen, and a **false negative** is a failure to predict one that does. **Drift** is a change in the data or in the relationship between inputs and outcomes that reduces a model's accuracy over time.

## Key principles

- **Forecast in ranges and keep a track record.** A forecast that is never checked cannot improve.
- **Compare with a simple baseline.** A complex model that does not beat "same as last period" is not earning its cost.
- **Calibration matters as much as accuracy.** A forecast that says 90 percent should be right about nine times in ten.
- **Match the cost of errors to the decision.** A false alarm and a miss do not cost the same.
- **Watch for drift.** Forecasts decay when the world changes, so monitor them.
- **A forecast is not a commitment.** Do not turn it into a target for people.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Forecast interval coverage | Share of actual outcomes that fell inside the stated prediction interval | outcomes inside the interval / forecasts evaluated; evaluated forecasts are those whose outcome is known | percent | Forecast log and actuals | Capacity and performance management; financial management | Forecast with ranges from throughput | Quarterly |
| Forecast error | Typical size of the difference between forecast and actual | median of absolute error and its 85th percentile, where absolute error = absolute value of (forecast minus actual) / actual, over evaluated forecasts | percent | Forecast log and actuals | Capacity and performance management | Planning review | Quarterly |
| Skill against baseline | Improvement of the forecast method over a simple baseline | 1 minus (median absolute error of the method / median absolute error of the baseline) over the same forecasts | ratio | Forecast log, baseline log, and actuals | Continual improvement | Experiment and compare | Quarterly |
| Calibration gap | Difference between stated probability and observed frequency | for each probability band, absolute value of (stated probability minus observed share) averaged over bands; bands with fewer than a stated number of cases are reported separately | percentage points | Probabilistic forecast log and outcomes | Risk management; change enablement | Retrospective on estimates | Quarterly |
| Alert precision and recall | For a predictive alert or score, the share of alerts that were right and the share of events caught | precision = true positives / (true positives + false positives); recall = true positives / (true positives + false negatives) | percent | Prediction log and outcomes | Incident management; event management | Definition of done for the model | Monthly |
| Forecast drift signal | Rise in error over time compared with a reference period | median absolute error in the latest window minus median absolute error in the reference window, with the window sizes stated | percentage points | Forecast log and actuals | Continual improvement; capacity management | Inspect and adapt | Monthly |
| Forecast decision linkage | Share of forecasts cited in a recorded decision | forecasts cited in the decision log / forecasts published | percent | Decision log and forecast log | Continual improvement; governance | Review actions | Quarterly |

Forecast error and coverage are computed only for forecasts whose outcome is known, so recent forecasts are excluded until then. Precision and recall depend on how an event is defined, so the definition of the event, such as "a change that causes an incident within 48 hours", is stated with the metric.

## Recommendations

### Forecast honestly

**1. Publish ranges, not single dates.** Give an interval with a stated probability, such as "between 12 and 18 working days, with 85 percent confidence", and explain the assumption behind it. A single number invites a commitment.

**2. Keep a forecast log.** Record each forecast when it is made: the quantity, the value or range, the date, the method, and the assumptions. Add the actual when it is known. Without the log, there is no track record.

**3. Start with a simple baseline.** Compare any new method with a naive one, such as the last period's value or a recent average. If a complex method does not beat it clearly over time, keep the simple one.

**4. State the assumptions that would invalidate the forecast.** A forecast of demand assumes no big launch, no outage, no new customer group. Write the assumption next to the number, so a reader knows when to distrust it.

### Measure quality

**5. Check coverage and calibration.** Count how often outcomes fall within the interval. If an 85 percent interval contains the outcome only half the time, it is too narrow. Report calibration with the number of cases, since small samples are noisy.

**6. Read errors as a distribution.** A median error of 10 percent can hide occasional misses of 50 percent that matter most. Show a high percentile and the largest misses, and review them.

**7. Match the measure to the decision cost.** For a predictive alert, choose precision or recall according to the cost of a false alarm and of a miss. A fraud alert and a low-risk routing suggestion have different balances.

**8. Watch for drift.** Compare recent error with a reference period and investigate rises. Common causes are a new service, a changed process, new tooling, or a change in how data is recorded.

### Use forecasts well

**9. Link forecasts to decisions.** Say what decision a forecast informs, and record in the decision log what was decided. Retire forecasts that nobody uses.

**10. Keep forecasts away from targets for people.** A forecast of incident volume that becomes a quota for the desk will distort reporting. Treat forecasts as information about a system.

**11. Keep a human accountable for acting on predictions.** For models that score items, name the owner, the action taken on a score, how a person can override it, and how errors are reported. Review false positives and false negatives with sampled cases.

**12. Watch for bias and harm.** A model trained on past decisions can repeat their bias. Check results for groups of users or services that fare differently, and report what the check cannot show. This book gives no legal advice, so check obligations with your own legal adviser.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Forecast interval coverage | Widening intervals until coverage looks good; evaluating only easy forecasts | Report interval width with coverage; evaluate all logged forecasts |
| Forecast error | Revising the forecast just before the outcome; choosing the evaluation window | Use the logged original forecast; fix the window in advance |
| Skill against baseline | Choosing a weak baseline; tuning the method on the evaluation data | Agree the baseline in advance; evaluate on data not used for tuning |
| Calibration gap | Using few bands or few cases; merging bands to hide gaps | Report the number of cases per band; minimum case counts |
| Alert precision and recall | Redefining events after the fact; counting duplicates | Fix the event definition in advance; de-duplicate; sample alerts |
| Forecast drift signal | Resetting the reference period; ignoring slow drift | Fix the reference window and review it on a schedule |
| Forecast decision linkage | Citing forecasts in a log with no effect on the decision | Ask what changed; sample entries |

A healthy reading is intervals that cover the stated share of outcomes without being absurdly wide, simple baselines that complex methods beat by a clear margin, drift noticed and investigated, and forecasts that appear in decisions.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Simple baseline forecasts | Easy to explain and maintain; hard to overfit | Miss patterns and changes |
| Statistical or machine learning models | Capture more patterns; scale across items | Hard to explain; drift; need monitoring and data |
| Point forecasts | Easy to communicate | False precision; invite commitment |
| Interval forecasts | Honest about uncertainty | Harder to communicate; may be read as vague |
| Expert judgment | Uses context a model lacks | Biased; hard to track |

The prose conclusion is to start simple, keep the log, show intervals, and add complexity only when it earns its place against a baseline. Judgment and models can work together if both are logged and checked.

## Questions to discuss with your team

**1. What is the last forecast we made, and how did it turn out?**
Most teams do not know, because forecasts are not logged. Ask for the number, the assumption, and the actual. Notice whether the surprise came from the data or the assumption. Follow up by starting a forecast log with that example.

**2. Which forecast do we treat as a commitment, and who pays when it is wrong?**
Look for forecasts that became targets, such as delivery dates or volume figures. Ask who feels pressure and what they do. Discuss ranges and the language used to communicate them. Follow up by rewriting one commitment as a range with assumptions.

**3. Does our predictive model or tool beat "same as last period"?**
Ask for the comparison, not the vendor's claim. Teams often have no baseline. Discuss how to compare fairly over the same cases. Follow up by running the baseline alongside for one quarter.

**4. What does a false alarm cost us, and what does a miss cost?**
This sets the balance between precision and recall. Ask for real examples. Costs are often different for different people, such as an on-call engineer and a customer. Follow up by agreeing on which error matters more.

**5. What would make our forecasts stop working, and would we notice?**
Discuss changes such as a new product, a new tool, or a different way of recording data. Ask for the signal that would show drift. Follow up by adding a drift check and an owner.

**6. Who acts on a prediction, and can they say no?**
For scored items, ask who decides what happens. Look for automatic actions with no override. Discuss how errors are reported and corrected. Follow up by writing the override rule.

## Four perspectives

### Product and delivery teams

Forecast from your own history and give ranges. Log forecasts and compare them with actuals, and mark the changes that make history a poor guide, such as a new tool or a team change. Keep team-local planning numbers out of comparisons between teams.

### Service and operations teams

Demand, capacity, and incident forecasts help staffing and prevention. Use them to plan, not to set quotas. Watch for alert models that raise noise, and report false positives so models can be tuned.

### Leadership and governance

Ask for the track record behind a forecast, not just its value, and for the interval. Avoid turning forecasts into targets for people. For predictive models used in operations, ask for the owner, the override rule, and the check for bias.

### Customers and users

You feel the effect of forecasts as waits, outages, and decisions made about you. Ask how predictions that affect you are checked and how you can challenge one. Your reports of wrong outcomes are part of the feedback the model needs.

## In practice: a service management example

A regional government agency's IT service desk forecasts weekly ticket volume to plan staffing. Numbers in this example are illustrative. A vendor tool offers a machine learning forecast, and the manager wants to know whether to adopt it.

The team starts a forecast log. For ten weeks they record three forecasts for each week: the vendor's point forecast, a naive baseline (the average of the last four weeks), and a range from the baseline's recent errors. Afterward they compute forecast error for each. The vendor's median error is 11 percent and the baseline's is 13 percent, so skill against baseline is 15 percent. The vendor's 85th percentile error is 38 percent, with large misses in weeks with announcements by the agency, which are not in the data the tool uses.

The team adopts the vendor forecast as one input, adds a field for known events, and publishes a range based on past errors. Forecast interval coverage for the stated 85 percent range is about 80 percent over the ten weeks, with a small count, so they report it with the caution that ten cases is few. They also set up a drift check that compares the latest eight weeks of error with the first eight.

A gaming risk appears. A team lead notes that the forecast is used to set staffing and suggests adding a buffer to the forecast so the team looks well staffed. The team keeps the forecast honest and records the staffing buffer as a separate decision. What remains hard: events the tool cannot see still cause large misses, and ten weeks of data is not enough to judge calibration. The plan is to review again after a longer period.

## Agile, AI, automation, and analytics

### Agile

Short planning cycles let a team check forecasts often and revise them with stakeholders. A good practice is to forecast with ranges from the team's own throughput and to review the track record at the regular improvement conversation. The caution is that a forecast treated as a promise leads to padding, hiding, or splitting work.

### AI

Machine learning models and AI assistants can produce forecasts and risk scores, with the appearance of precision. Compare them with a baseline, keep an owner, check calibration and false positive and negative rates by sampling, and keep a human accountable for actions taken on a score (see topic 10.5, AI governance and risk metrics). The caution is that an AI-generated forecast may give a confident number with no interval and no stated assumptions, so ask for both.

### Automation

Automate forecast logging, the collection of actuals, and the computation of error and coverage, so the track record builds itself. Measure automated actions that follow a prediction on their wrong actions. The caution is that automation that acts on a forecast, such as scaling capacity or paging, makes forecast errors visible to users, so add limits and review.

### Analytics

This topic is the analytics of forecasts: show error as a distribution, coverage with counts, and drift with the window used. The decision informed is how much to trust a forecast and when to replace the method. The caution is that small samples give unstable calibration, so state the number of forecasts behind each figure (see topic 10.8, Analytics and data quality metrics).

## Sector lens

**Startup.** History is short and the service changes often, so forecasts are weak. Use simple baselines and wide ranges, and keep a short log. Avoid buying forecasting tools before there is data.

**Small business.** Seasonality and a few large customers dominate. Use last year's same period as a baseline, and note events that break the pattern. Be careful with vendor forecasts that claim precision.

**Enterprise.** Many forecasts across teams need a common log and definitions. Compare methods fairly across teams and avoid ranking teams by forecast accuracy. Review models for drift on a schedule.

**Government and public sector.** Forecasts often support budget and staffing decisions that are public. Document methods and assumptions, and check rules for automated decisions that affect people. Plan for external events such as policy changes that break the data (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are data work, forecast logging, tools for modeling if used, review time, and the monitoring of models for drift. Starting with a log and a naive baseline costs very little.

The return is better planning: capacity that arrives before the need, staffing that matches demand, and fewer surprises. It is hard to attribute, so avoid claiming a figure. Compare the cost and the error of a forecasting method with the baseline over time, and state the assumptions as ranges (see topic 7.7, Return on investment and business case). The risk side is the cost of over-reliance on a model that has drifted, and of decisions made on false precision.

## Anti-patterns and pitfalls

- **Single-number forecasts treated as promises.** They produce padding and blame. Publish ranges with assumptions.
- **No forecast log.** There is no way to learn. Record forecasts and actuals.
- **Buying a model without a baseline.** The gain is unknown. Compare with "same as last period".
- **Judging accuracy on the training data.** It flatters the model. Evaluate on later data.
- **Ignoring false positives.** Noisy predictions train people to ignore them. Report precision and recall.
- **Forecasts as targets for people.** They distort the data. Use them for planning.
- **No drift check.** Models decay silently. Monitor error over time.
- **Predictions with no human owner.** Wrong actions have no one to answer. Name an owner and an override rule.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Forecast practice | Single numbers; no record | Some ranges; informal notes | Forecast log with ranges, assumptions, and actuals | Error, coverage, and baseline compared on a cadence | Forecasts and methods improved through experiments and shared across teams |
| Predictive models | Vendor claims accepted | Pilot compared with a baseline | Owner, evaluation, and override rule per model | Drift, precision, and recall monitored | Model lifecycle managed with oversight and retirement |
| Use in decisions | Forecasts as commitments | Forecasts shown to decision makers | Forecasts linked to decisions in a log | Decisions reviewed against forecast outcomes | Decisions adapt to forecast uncertainty |

## Checklist

- [ ] A forecast log records quantity, value or range, date, method, and assumptions.
- [ ] Actuals are added and forecast error is reported as a distribution.
- [ ] A simple baseline is run alongside any complex forecast.
- [ ] Interval coverage is reported with interval width and the number of cases.
- [ ] Predictive alerts report precision and recall against a fixed event definition.
- [ ] Drift is checked against a fixed reference window.
- [ ] Every predictive model has an owner, an override rule, and a review date.
- [ ] Forecasts are linked to decisions in a decision log.
- [ ] Forecasts are not used as individual targets.
- [ ] Each metric has a gaming vector and a guardrail shown beside it.

## AI prompts

**Design a forecast log and baseline.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Evaluate a forecast method against a baseline.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Review a predictive model's oversight.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Review the gaming risk of the forecasting measures.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## AI skills

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): use to build and check a demand forecast with ranges.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): use to examine trends and changes before forecasting.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): use to document a predictive model's purpose, data, and limits.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- A forecast is a range with a track record, so log forecasts and compare them with actuals.
- Compare any model with a simple baseline, and keep the complex one only if it clearly beats it.
- Check interval coverage and calibration with the number of cases behind them.
- Pick precision or recall according to the cost of a false alarm and of a miss.
- Do not turn forecasts into targets for people, and keep a human accountable for actions taken on a prediction.

## References and further reading

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
