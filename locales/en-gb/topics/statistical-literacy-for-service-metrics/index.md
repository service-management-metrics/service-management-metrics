# Statistical literacy for service metrics

**Ticket and flow data are skewed, lumpy, and often thin, so report medians and high percentiles instead of averages, say how many items stand behind every rate, and separate ordinary variation from real change before anyone reacts.**

## Overview and motivation

Most service metrics arrive as a single number on a dashboard: average resolution time, percent of incidents resolved within target, tickets closed this week. A single number feels precise. It is usually a compressed summary of a messy collection of events, and the compression decides what the reader sees. Statistical literacy, for the purposes of this book, is the small set of habits that keeps the summary honest: choose a summary that fits the shape of the data, know how much data stands behind it, and tell a real change from noise.

The shape of service data is the first problem. Time measures such as resolution time, cycle time, and wait time are bounded at zero and have a long tail on the right. Most items finish quickly, and a few take very long. Data like this is [skewed](https://en.wikipedia.org/wiki/Skewness), and the arithmetic mean is pulled toward the tail, so one stuck ticket can move the average more than a hundred routine ones. The [median](https://en.wikipedia.org/wiki/Median), the middle value when the items are sorted, is far less affected. A [percentile](https://en.wikipedia.org/wiki/Percentile) generalises it: the 85th percentile is the value that 85 percent of items finish within. Durations of this kind are often modelled with a [log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution), in which the logarithm of the value is symmetric. The lesson is that "typical" and "average" differ for skewed data.

Sample size is the second problem. A team that resolves 12 priority 1 incidents in a quarter and reports "83 percent within target" is describing 10 of 12. One more miss would move the figure by eight points. The honest statement includes the count, and often a range. A [confidence interval](https://en.wikipedia.org/wiki/Confidence_interval) is a range computed from the data that expresses how far the true value could plausibly sit from the observed one. Intervals are wide for small samples and narrow for large ones, which is the correct message for a quarter with 12 incidents.

Variation is the third problem. Every process produces numbers that wobble from week to week without anything having changed. Walter Shewhart, working on manufacturing quality in the 1920s, separated this routine wobble from signals that deserve investigation, and gave us the [control chart](https://en.wikipedia.org/wiki/Control_chart). Applying charts like this to a process is called [statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control). Part of that last mistake is [regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean): an extreme value tends to be followed by a less extreme one, so the week after a terrible week looks like a recovery whether or not anyone did anything.

Agile flow practice, such as the Kanban Guide's use of cycle time percentiles and work item age, already asks for distributions and forecasts expressed as likelihoods (see topic 2.1, Flow measures). In ITIL 4, the measurement and reporting practice and the continual improvement practice both depend on measures that mean what they appear to mean, and service level management depends on targets that are set against realistic variation. Statistical literacy is the shared layer under both. It also supports the guardrail in topic 1.2, Goodhart's law and the psychology of metrics: a team that shows the whole distribution has fewer places to hide a manipulated average.

Common-cause variation is built into a process, and special-cause variation comes from something specific that changed or went wrong. A service level agreement (SLA) is a documented commitment to a customer, and a service level objective (SLO) is a target for a measure.

## Key principles

- **Match the summary to the shape.** Use medians and percentiles for durations, and show the full distribution when the decision matters. Reserve the mean for data that is roughly symmetric, or for totals such as cost.
- **Every rate carries its count.** A percentage without the numerator and denominator is a claim with no evidence attached. Below a stated minimum count, show the raw items instead of a rate.
- **Ordinary variation is not news.** Know the normal range of a measure before reacting. Respond to signals, not to every movement.
- **Uncertainty is part of the answer.** Express forecasts as likelihoods ("85 percent of items finish within 9 days") and estimates as ranges, and resist false precision.
- **Show distributions to the team that owns the work.** Raw items and histograms make unusual cases visible, and they make quiet manipulation harder.
- **Correlation, selection, and timing explain many "improvements."** Ask what else changed, who was left out of the data, and whether the starting point was unusually bad.
- **Keep the statistics proportionate.** A team needs a handful of techniques used consistently, not a statistics course. Explain every chart in plain words.

## Metric definitions

The metrics below describe the statistical quality of a metrics practice and the distribution of service work. Time measures use the clocks stated in each row, and the definitions are meant to be reused by the topics that follow (see topic 3.3, Incident response and resolution time, and topic 2.2, Lead time, cycle time, and flow efficiency).

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Median resolution time | The middle resolution time of incidents resolved in the period | 50th percentile of (resolved timestamp minus created timestamp) over incidents resolved in the period; the clock starts at ticket creation and stops at resolution; pauses are reported separately, not subtracted; cancelled and duplicate tickets are excluded | hours or days | ITSM tool status history | Incident management; measurement and reporting | Median cycle time | Weekly or monthly |
| High-percentile resolution time | The time within which most incidents are resolved, with the percentile named | 85th (or 95th) percentile of the same elapsed time as above; computed only if at least 20 items resolved, otherwise the raw items are listed | hours or days | ITSM tool status history | Incident management; service level management | Cycle time percentile forecast | Weekly or monthly |
| Oldest open item age | Age of the oldest item still open, plus the count of items older than the high percentile | now minus created timestamp for open items, no pause subtracted; counts all open items in the service queue including those waiting for the customer | days | ITSM tool or issue tracker | Incident management; problem management | Work item age | Weekly |
| Rate reporting coverage | Share of reported rates that show the numerator, denominator, and a minimum-count check | rates reported with counts and a sample flag / rates reported; counts only rates published in the period's review pack | percent | Metric register (see topic 1.4, Metrics governance and ownership) | Measurement and reporting | Working agreements | Quarterly |
| Control chart signal rate | Share of points on a measure's control chart that signal special-cause variation under the team's written rules | points flagged under the rules / points plotted, over the last 20 or more points; the rules are fixed in advance and logged | percent | Control chart tool or spreadsheet | Continual improvement | Retrospective inspection of the process | Monthly |
| Interval width | Width of the stated uncertainty range on a headline rate | upper bound minus lower bound of the interval, using the method named in the register, for the period's headline rate | percentage points | Calculated from ITSM counts | Service level management | Forecast range in planning | Monthly |

Where a contract names a mean, report the contractual figure and show the median and percentile beside it.

## Recommendations

### Summarise time data honestly

**1. Default to the median and one named high percentile.** For resolution time, cycle time, and fulfilment time, publish the median and the 85th or 95th percentile together, and write the percentile into the metric name. The median says what is typical, and the high percentile says what a customer can reasonably be promised. If you have to choose one number for a commitment, choose the percentile.

**2. Show the shape as well as the summary.** A histogram or a scatter plot of resolution time by close date shows clusters, long tails, and sudden shifts that no summary shows. When the picture and the number disagree, believe the picture and investigate the number.

**3. Add the age of the oldest open item.** Percentiles of finished work look backward and ignore everything still stuck. Report the oldest open item and how many open items are already older than your high percentile (see topic 2.1, Flow measures). This is the single most useful corrective for averages that improve because hard items are left to age.

### Respect small samples and uncertainty

**4. Publish the count with every rate.** Write "10 of 12 resolved within target" rather than "83 percent." Add a rule that rates based on fewer than a stated number of items are shown as counts or as the underlying items. The threshold is a judgement: write it down, review it, and apply it everywhere.

**5. Use intervals for headline rates and forecasts.** For a proportion such as the share of changes that fail, calculate a confidence interval with a method your team agrees on and note the method in the register. For delivery forecasts, a sample-based range (for example, "likely between 8 and 14 items per week") tells planners more than a single throughput figure. If the interval is too wide to inform a decision, say so.

### Distinguish signal from noise

**6. Draw control charts for the measures you act on.** A simple individuals chart plots each point in time order with a centre line and limits computed from the data, and it flags points outside the limits or runs on one side of the centre. Start with weekly median resolution time and weekly volume. Write the signal rules down once (for example, a point beyond the limits, or a run of eight on one side) and keep them fixed, so the team does not adjust the rules until the chart agrees with its feelings.

**7. Act on signals and leave common-cause variation alone.** When a point is inside the limits, resist an explanation for it; it is the process behaving as it normally does. When a signal appears, ask what changed that week: a release, a staffing gap, a supplier outage, a new category. If the process is stable but unsatisfactory, the improvement is a change to the system, not a conversation with whoever had the red week.

**8. Expect regression toward the mean after an extreme period.** If you launch an initiative in the worst month of the year, some improvement will follow by chance. Compare against a longer baseline, against a similar service that did not change, or against the control limits, before crediting the initiative. A before-and-after pair of two points is the weakest form of evidence.

### Reason carefully about cause and selection

**9. Ask what is missing from the data.** Survey responses come from people who chose to answer. Closed tickets exclude the ones still open. Before drawing a conclusion, list who or what is absent and how that could tilt the result.

**10. Change definitions on purpose, and mark them on the chart.** A new status model, a new priority matrix, or a new category list changes the data without changing the work. Annotate each change on the chart and restart the control limits after it (see topic 1.5, Data sources and instrumentation).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Median resolution time | Closing quick tickets first and leaving hard ones open; splitting a ticket into several easy ones; pausing the clock in a customer-wait state | High-percentile resolution time and oldest open item age; share of time in pause states; linked-ticket rate |
| High-percentile resolution time | Choosing a percentile that flatters the result, or changing it between reports; excluding long cases as "outliers" or reclassifying them | Percentile fixed in the register; a list of excluded items with reasons; oldest open item age |
| Oldest open item age | Closing or merging the oldest item without resolving it; moving it to a different queue or category | Reopen rate; sample audit of the oldest closed items; queue transfer count |
| Rate reporting coverage | Attaching a count in small print while headlines still lead with the percentage; setting the minimum count so low that it never triggers | Review the actual dashboard, not the register; minimum count reviewed with the interval width |
| Control chart signal rate | Widening the limits, adding rules, or restarting the baseline so signals disappear; moving points by changing the measure | Rules and limits stored in the register with change history; compare against the raw histogram |
| Interval width | Choosing a method or window that produces a narrow range; pooling dissimilar services to enlarge the sample | Method named in the register; breakdown by service available on request; pooled and unpooled results compared |

A healthy reading shows medians and percentiles that move in the same direction as users' experience, a short list of old items that shrinks without being quietly reclassified, and rates that appear with their counts. The control chart signal rate should be low and non-zero: a chart that never signals may be unable to, and one that always signals reflects an unstable process or badly chosen rules.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Mean resolution time | Simple, matches many contracts, easy to total | Dominated by the tail; hides what customers typically experience |
| Median plus high percentile | Resists outliers; supports promises to customers | Takes a little explanation; percentiles need enough items to be stable |
| Raw rates without counts | Compact and familiar | Hides small samples and invites over-reading |
| Rates with counts and intervals | Honest about uncertainty; discourages over-reaction | Looks less decisive; interval methods need agreement |
| Control charts | Separate signal from noise; guide when to act | Need enough points and stable definitions; limits can be misread or manipulated |
| Before-and-after comparison | Quick and easy to communicate | Prone to regression to the mean and to coincident changes |

For a service with a handful of incidents a year, no statistic is stable, and the right method is to read each incident. For a high-volume desk, distribution-aware measures are cheap and clearly superior. Choose by volume and by the stakes of the decision.

## Questions to discuss with your team

**1. Which of our current dashboard numbers is an average of something skewed, and what would the median and the 95th percentile show?**
Pick the most-watched time measure and compute all three on the same set of items before the meeting. Ask whether the story the average tells matches what users say. Close by agreeing which summary becomes the headline and where the others will appear.

**2. How many items stand behind our most-quoted percentage, and would we still quote it if we wrote the counts?**
List the three percentages leadership reads most. Next to each, write the numerator and denominator for the last period. Ask what a single extra success or failure would do to the figure. Agree on a minimum count below which the team shows the items rather than a rate.

**3. When did we last credit an improvement to an initiative, and what else was true at the time?**
Choose a recent success story. Ask when the measure was at its worst, what the longer history looks like, and whether a comparable service also improved. Keep the tone curious.

**4. What is the normal range of our key measures, and who would be able to say that a given week is unusual?**
Plot the last 20 or more weekly values for one measure and draw the centre and limits, or compute them roughly. Ask which weeks the team reacted to that were inside the range. Agree on who owns the chart and where the signal rules are written.

**5. Who or what is missing from our data?**
List the sources of the measure: closed tickets, survey responses, monitored services, tools with timestamps. For each, ask who is excluded and why. Capture each gap as a fix or a caveat.

**6. How would we explain a wide range or a "we do not know yet" to leadership without it sounding like an excuse?**
Rehearse the wording on a real example: "Between 70 and 95 percent, on 12 incidents; we expect to narrow this after the next quarter." Ask what the audience needs to decide and whether the range changes the decision. Write a short script in the meeting.

## Four perspectives

### Product and delivery teams

Delivery teams use cycle time and throughput to forecast, and they gain most from percentile-based forecasts rather than averages (see topic 2.1, Flow measures). A forecast stated as a range with a likelihood is easier to defend than a date. Resist reading one period's change as a trend (see topic 2.5, Delivery forecasting and planning metrics).

### Service and operations teams

Operations teams own the ticket data and the incident clocks, so they are best placed to publish medians, percentiles, and the oldest open item, and to explain the pause rules. They should chart weekly volume and resolution time with control limits so that a real shift, such as a faulty release, is distinguished from a bad week. When a service has few incidents, they should review each one instead of computing rates (see topic 3.3, Incident response and resolution time).

### Leadership and governance

Leaders ask the questions that shape what teams show. Asking "why did this go up?" of every wobble trains the organisation to explain noise and to hide it. Leaders should ask whether a movement is inside the normal range, how many items are behind a figure, and what has changed in the process. Governance bodies can require counts on headline rates.

### Customers and users

Customers experience individual cases, not averages. They remember the one request that took five weeks, and an average of two days does not repair that memory. Percentile commitments ("nine out of ten requests within three working days") match the customer's mental model better than mean times. Survey results should be shown with response counts, and open comments should be read alongside the numbers (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer has a service desk and an operations team that supports its web shop. The figures below are illustrative.

Leadership sees a monthly headline: "average incident resolution time fell from 9.1 hours to 7.4 hours." The operations lead is asked to confirm it and to present the plan for the next target, 6 hours. Before agreeing, she asks the analyst to pull the underlying items and plot them. Of 240 incidents in the month (illustrative), the median is 2.5 hours, the 85th percentile is 14 hours, and 9 incidents are older than 5 days and still open. The month before, the median was 2.6 hours. The average fell because three very long incidents from the previous month, one of them 11 days old, happened to resolve earlier in the period, and because a batch of password reset tickets was recategorised into a quick-closing request type.

The team charts the weekly median for the last 26 weeks. The centre line sits near 2.6 hours, and every point from the past two months is inside the limits. The headline drop is not a signal. The recategorisation in the second week changed the definition mid-chart, so the team marks it and restarts the limits from that point.

They decide on three changes. The monthly report will show the median, the 85th percentile, and the oldest open item, with the number of incidents behind each. The proposed 6-hour average target is replaced by a conversation about a percentile objective, to be set after a quarter of data under the new definition. The team will also list the 9 old incidents with an owner and a next step each.

The gaming risk they catch is on the next review. A manager proposes closing the 9 oldest incidents as "no longer reproducible" to make the oldest-item figure look healthy. Because the register pairs oldest open item age with reopen rate and a sampled audit of old closures, the team reads three of the proposed closures, finds two are still live, and keeps them open. The oldest-item figure stays uncomfortable for another month. That is the intended behaviour.

## Agile, AI, automation, and analytics

### Agile

Frequent delivery produces many small samples, which is good for seeing change, but each sample is small. A useful practice is to show control charts over a rolling window and discuss only signals, not every wiggle, at regular reviews. The caution is to avoid reacting to noise: a team that changes course after every dip will never see the effect of any change.

### AI

AI-assisted work often shifts the whole distribution, such as faster first responses with more variable quality. Compare before and after with percentiles and the oldest item, and pair speed with a quality measure. The caution is that a model change can alter the data mid-trend, so mark model and prompt changes on the chart.

### Automation

Automate the calculation and display of medians, high percentiles, counts, and intervals, so the right form is the default and nobody recalculates by hand. Automation also needs its own sample sizes and failure rates reported. The caution is that automatic alerts on thresholds create false alarms when the data is skewed, so base alerts on control limits, not fixed numbers.

### Analytics

Always say how many items stand behind a rate and show an interval when the count is small. Use forecasts as ranges, not single dates. The caution is that statistical significance does not mean practical importance, and a small sample can hide a real problem, so combine the numbers with reading actual items.

## Sector lens

**Startup.** Volumes are small, so most rates are made of a few items and intervals are wide. Read each incident instead of computing statistics, keep a simple weekly chart of one or two measures, and avoid declaring trends from three points. As volume grows, move to medians and percentiles early so the habits are already in place.

**Small business.** The person who runs IT also owns the data, and the sample is usually small. Report counts, not percentages, for rare events, and compare against your own longer history. Check what a vendor's "response time" clock really measures.

**Enterprise.** Volume makes distributions meaningful, and it also encourages roll-ups that mix dissimilar services. Compare like with like, publish the definitions and the percentile used, and keep a shared library of chart and calculation rules so teams do not compute the same measure three ways. 

**Government and public sector.** Contracts and statutory reporting often fix a mean or a threshold percentage, and those definitions are not negotiable. Report the required figure exactly as defined, and show the median, percentile, and counts alongside it so oversight bodies see the whole picture. Public scrutiny makes honest uncertainty more valuable, because an overconfident number is expensive to retract (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

It takes a few hours to agree on summary rules, build a histogram and a control chart from an export, and add counts to a report template, plus a few minutes each cycle to keep them current. Most tools compute percentiles already. The larger cost is a conversation with people used to one comforting number.

The return is better decisions and less wasted reaction. Teams stop reorganising after a bad week, stop crediting initiatives for chance improvements, and stop promising averages that half their customers do not experience. Do not borrow a figure: count how often last year's decisions were reversed and how many "improvements" vanished the next period, and use those counts to size the case.

## Anti-patterns and pitfalls

- **Averaging skewed durations.** The mean is dragged by the tail and conceals what users feel. Report the median and a named high percentile, and show the oldest open item.
- **Percentages from tiny samples.** "100 percent" from three items is an anecdote. Show counts and apply a minimum-count rule.
- **Reacting to every wobble.** Chasing each red week wastes effort and teaches teams to explain noise. Use control limits and written signal rules.
- **Before-and-after proof.** Two points cannot separate an intervention from chance or regression toward the mean. Use a longer baseline and a comparison.
- **Moving the goalposts on the chart.** Changing limits, rules, or definitions after the fact makes any chart agree with the story. Fix the rules, log changes, and annotate them.
- **Excluding outliers by default.** The longest cases are usually the ones customers remember. Exclude only with a written reason, and list what was excluded.
- **False precision.** Reporting 83.3 percent from 12 items implies knowledge the data lacks. Round honestly and show a range.
- **Pooling dissimilar work.** A blended time for password resets and data centre failures describes neither. Segment first.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Summaries of time data | Averages only | Some teams show medians | Median plus a named percentile and oldest open item are standard | Distributions reviewed with a guardrail and trended | Percentile commitments agreed with customers and suppliers, and revised as data changes |
| Sample size and uncertainty | Rates quoted without counts | Counts shown in some reports | Counts and a minimum-count rule on every rate | Intervals on headline rates, method in the register | Uncertainty shared openly with customers and used in planning across teams |
| Variation and causation | Every change is explained | A few charts with limits | Control charts with written rules for key measures | Signals trigger planned investigation; initiatives checked against baseline | Shared chart libraries across services; baselines compared across teams without ranking |

## Checklist

- [ ] Every time measure reports a median and a named high percentile, instead of a mean alone.
- [ ] The age of the oldest open item and the count of items beyond the high percentile are reported.
- [ ] Every reported rate shows its numerator and denominator.
- [ ] A minimum-count rule is written down and applied to all rates.
- [ ] Headline rates and forecasts show a range, with the method named in the register.
- [ ] Control charts exist for the three measures the team acts on, with written signal rules.
- [ ] Definition changes are annotated on charts and logged in the register.
- [ ] Excluded items are listed with reasons.
- [ ] Improvement claims are checked against a longer baseline before they are repeated.
- [ ] Each metric's gaming vector and guardrail are in the register (see topic 1.4, Metrics governance and ownership).

## AI prompts

**Check whether a summary fits the data.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Express a rate with its uncertainty.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Judge whether a change is a signal or noise.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a centre line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic and the paired guardrail for a time or rate metric before you publish it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a statistical measure added to a topic has its definition, clocks, gaming vector, and guardrail.

## Key takeaways

- Service durations are skewed, so report the median and a named high percentile, and add the age of the oldest open item.
- Every rate carries its count, and small samples are shown as items or with a range, not as a confident percentage.
- Know the normal range of a measure with a control chart before reacting to a single week.
- Be suspicious of improvements measured by two points: regression toward the mean and definition changes explain many of them.
- Honest uncertainty is a strength in a report, and it is a guardrail against Goodhart-style gaming (see topic 1.2, Goodhart's law and the psychology of metrics).
- Keep the technique proportionate: a few consistent methods, explained in plain words, serve a team better than many unexplained ones.

## References and further reading

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
