# Measurement frameworks

**A measurement framework is a way of deciding which numbers deserve a place on the page, and the best ones all start with a goal and a question, so choose the lightest framework that keeps every metric tied to a decision.**

## Overview and motivation

A team that wants to measure its work meets an early problem: there are thousands of possible numbers, and no rule for choosing among them. A measurement framework supplies the rule. It names a starting point (a goal, a strategy, a handful of critical conditions), and it describes how to get from that starting point to a small set of measures that people will read and act on. Frameworks differ in vocabulary, but they share one aim: to keep every number connected to a reason for having it.

This topic covers five ideas that appear in almost every organization that runs services. The first is the Goal-Question-Metric (GQM) approach, developed by the software engineering researcher [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) and colleagues. It starts from a goal, asks the questions that would show whether the goal is being met, and only then chooses metrics. The second is [objectives and key results](https://en.wikipedia.org/wiki/OKR) (OKRs), a goal-setting method popularized at Intel by Andrew Grove and later at Google through John Doerr. An objective says where a team wants to go, and a handful of key results say how it will know it arrived. The third is the [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), introduced by Robert Kaplan and David Norton in 1992, which asks organizations to look at financial results, customers, internal processes, and learning and growth together, so that no single view dominates.

The fourth and fifth ideas are older and plainer. A [critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) is a condition that must be true for a goal to be reached, and a [key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) is a measure of how well that condition is holding. ITIL, the framework for IT service management (ITSM) published by Axelos and later PeopleCert, uses exactly this pairing. In ITIL 4 (the version in widespread use as of October 2026), the guidance on measurement and reporting and on continual improvement tells practitioners to define CSFs for a service or practice, then choose KPIs that show progress against them. The wider [ITIL](https://en.wikipedia.org/wiki/ITIL) approach is summarized here, not reproduced.

Agile and ITIL views meet usefully in this area. Agile practice favors short cycles of learning: a team states a hypothesis, tries something, inspects the result, and adjusts. ITIL practice favors defined services, agreed service levels, and a managed process of improvement. A framework like GQM suits the agile habit of asking what the team wants to learn. A balanced scorecard suits the ITIL need to show leaders a rounded picture of service health. OKRs sit between the two, because they are reviewed in short cycles yet written in the language of outcomes that governance bodies understand.

Three terms recur in this topic. A **goal** is a statement of an intended outcome for a named audience. A **question** is something you would need to know to say whether the goal is being met. A **metric** is a defined way of counting or timing something that helps answer a question. The frameworks differ in how they treat the third term, but all of them insist that it comes last, after the goal and the question. This ordering is the strongest protection against the failure described in Goodhart's law (see topic 1.2, Goodhart's law and the psychology of metrics), where a number replaces the purpose it was chosen to serve.

No framework fixes a poor choice of goal, and none removes the need for guardrails. Treat a framework as scaffolding for a conversation, and expect to change it as the work changes. KPIs in particular can become [vanity metrics](https://en.wikipedia.org/wiki/Vanity_metric), counts that only rise and never inform a decision, such as total tickets handled. The wider reasons for measuring at all are set out elsewhere (see topic 1.1, Why measure service management).

### How the frameworks differ

The frameworks answer slightly different questions, and mixing them is common. Use the table below as a map.

| Framework | Starting point | Typical output | Best used for | Typical horizon |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | A specific goal for a product, process, or service | A tree of goals, questions, and metrics | Designing a measurement program for one team or service | Weeks to months |
| OKRs | An ambitious objective for the next period | A few objectives, each with measurable key results | Aligning teams on outcomes and focusing effort | Quarter |
| Balanced scorecard | An organization's strategy | Objectives and measures in four perspectives | Showing leaders a rounded view and linking strategy to operations | Year |
| CSFs and KPIs | A service, practice, or goal | A few conditions that must hold, each with indicators | Operating a defined ITIL practice and reporting its health | Ongoing, reviewed regularly |


## Key principles

- **Start from the goal, then the question, then the metric.** A metric chosen first has no way to be judged useful.
- **Make the audience and decision explicit.** Every goal names who benefits, and every metric names who will act on it.
- **Keep the set small.** A few measures that are read and trusted beat a long list that is skimmed.
- **Balance the view.** Pair speed with quality, cost with experience, and short-term output with long-term learning, so no framework rewards one at the expense of another.
- **Treat targets as hypotheses.** A goal and its numbers are a bet that can be wrong, so review them on a schedule and change them with a recorded reason.
- **Use frameworks to describe teams and services, never to rank people.** Scorecards, key results, and KPIs belong to a team or a service.
- **Combine frameworks on purpose.** Say which framework owns which decision, so the same number is not defined three ways.

## Metric definitions

The metrics below measure the health of a framework in use, not the health of a service. They show whether goals and metrics are still connected, and they apply whichever framework a team chooses. Counts are by team or service, never by person.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Goal traceability | Share of reported metrics that trace to a written goal and question | metrics with a recorded goal and question / metrics reported | percent | Metric register (see topic 1.4, Metrics governance and ownership) | Measurement and reporting; continual improvement | Delivery goal; product goal | Quarterly |
| Key result score distribution | Spread of end-of-period scores for key results, shown as the share in each band | key results in each score band (for example 0.0 to 0.3, 0.4 to 0.6, 0.7 to 1.0) / key results scored in the period; excludes key results dropped with a recorded reason | percent per band | OKR tracking tool or team document | Continual improvement; service level management | Quarterly planning; review | Quarterly |
| Perspective coverage | Share of the four balanced scorecard perspectives that have at least one measure with a current value | perspectives with a measure reported in the last period / four | percent | Scorecard or dashboard | Measurement and reporting; service value system governance | Stakeholder review (customer and learning views) | Quarterly |
| Indicator review age | Time since each KPI's definition and target were last reviewed | review date minus the date of the last review; the clock starts on the last recorded review and stops on the reporting date; report the median and the oldest | days | Metric register change log | Continual improvement; measurement and reporting | Retrospective actions | Quarterly |
| CSF-to-KPI coverage | Share of critical success factors with at least one KPI that is currently reported | CSFs with a current KPI / CSFs defined for the service or practice | percent | Practice or service documentation; metric register | The CSF and KPI approach in ITIL practice guides | Definition of done; working agreements | Quarterly |

Goal traceability counts a metric as traced only if both the goal and the question are written and the audience is named; a goal alone is not enough. Key result score distribution should be read as a spread, not an average, because an average hides a team that sandbagged everything and a team that failed everything. Indicator review age excludes metrics retired in the period.

## Recommendations

### Choose and combine frameworks

**1. Pick the smallest framework that does the job.** A single service team with one improvement problem rarely needs a full balanced scorecard. GQM is often enough, because it has a clear stopping point: a tree of one goal, a few questions, and a few metrics. Add structure only when a decision needs it.

**2. Write goals in three parts: purpose, subject, and viewpoint.** GQM goals are traditionally framed as improving a stated quality of a stated subject from a stated viewpoint, for example improving the clarity of incident updates for the people who depend on the service desk. The structure forces you to say who benefits. If a goal has no viewpoint, it is probably a slogan.

**3. Ask questions that a person could answer with a short story.** "How quickly do users hear back after they report a problem?" is a good question, because you can imagine an answer and the evidence behind it. "What is our performance?" is not. Aim for three to five questions per goal, and expect some to be answered by interviews or samples, not by a number.

**4. Choose metrics last, and choose more than one.** For each question, name the candidate metrics, the data source, and the gaming vector (see topic 1.5, Data sources and instrumentation). Include at least one metric in tension with the others, such as response time next to reopen rate. If a question has no feasible metric, say so and plan a qualitative check.

**5. Decide which framework owns which decision.** A common arrangement is for the balanced scorecard or an equivalent to hold the few measures that leaders review, for OKRs to hold the improvements a team has chosen this quarter, and for CSFs and KPIs to describe the running health of a practice. Write this arrangement down in the metric register so each number has a single definition and a single owner.

### Use OKRs well

**6. Write objectives as outcomes, and key results as evidence.** An objective such as "Users get their problems solved without chasing us" is an outcome. A key result such as "median time to a useful first update falls from [current value] to [target value]" is evidence. Key results that read as tasks ("launch a new portal") are activities, not results. If you cannot say what would change for a user, the key result is not finished.

**7. Keep OKRs at team and service level.** Setting them for individuals tends to turn them into task lists and performance review inputs, and invites the gaming that Goodhart's law predicts. Let a team write its own key results in the open, and let teams see each other's. Avoid cascades in which every level must restate the level above.

**8. Treat the score as a conversation, not a grade.** Teams that treat a perfect score as the goal write timid key results. A score distribution that clusters at the top suggests sandbagging, and one that clusters at the bottom suggests the targets were fantasy. Review the spread each quarter, and ask what the team learned from each miss.

### Use scorecards, CSFs, and KPIs well

**9. Define CSFs before KPIs.** A critical success factor is a statement of what must be true, such as "users can find and use the right self-service article". A KPI then shows whether it is true. Beginning with the KPI invites you to count what is easy to count. Ask for each CSF, "if this stopped being true, how quickly would we notice, and from what?" The answer is the KPI.

**10. Use scorecard perspectives to prevent a one-sided view.** The four classic perspectives are financial, customer, internal process, and learning and growth. Service organizations often rename them, for example cost, user experience, operational health, and capability. What matters is that each perspective has at least one measure with a current value, and that a decline in one is read beside the others (see topic 6.5, Value realization and business outcomes).

**11. Link strategy to measures with a simple map.** A [strategy map](https://en.wikipedia.org/wiki/Strategy_map) draws arrows from capability to process to customer to financial results. It is useful for conversation and poor as a calculator. Draw it, argue about the arrows, and then pick a few measures. Do not try to make the diagram quantitatively exact.

**12. Review frameworks on a calendar.** Set a quarterly review where the team asks of every goal, key result, and KPI whether it still matters and whether it still moves people to the right action. Retire what no longer serves, and record the reason. Metrics that outlive their goals become vanity metrics.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Goal traceability | Writing a goal and question after the metric already exists, to make the record look complete; vague goals that justify any metric | Sample five entries each quarter and ask whether the question could have led to a different metric; check that the audience and decision are named |
| Key result score distribution | Writing easy key results so scores cluster near 1.0; rescoring generously; dropping key results that are going badly without recording why | Count of key results dropped with their reasons; compare key results with the previous period's outcomes; review the median ambition with leadership |
| Perspective coverage | Adding a token measure to a perspective so it counts as covered; choosing measures that cannot move | Check that each perspective measure has changed value in the last year and has a written decision attached |
| Indicator review age | Recording a review without reading the indicator; changing the date only | Require a written outcome (kept, changed, retired) with each review, and sample the log |
| CSF-to-KPI coverage | Assigning a KPI that is unrelated to the CSF to reach full coverage; choosing a KPI that cannot reveal a failure | Ask for each pair what reading would show the CSF is failing; look for KPIs that have never been red |

A healthy reading is one where goals change when the world changes, a few key results are missed for stated reasons, and the number of metrics reported is falling or steady rather than growing. If everything is green, scores cluster at the top, and nobody can name a metric that was retired this year, the framework has become decoration.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Goal-Question-Metric | Ties each metric to a reason; easy to explain; works at team scale | Needs a facilitated session; can become a paper exercise; says little about priority across goals |
| OKRs | Focuses a quarter on a few outcomes; visible across teams; fits short planning cycles | Easy to write key results as tasks; scores can be gamed; individual OKRs blur into performance review |
| Balanced scorecard | Gives leaders a rounded view; links strategy to operations | Heavy to maintain; perspectives can become boxes to fill; slow to reflect change |
| CSFs and KPIs | Familiar in ITIL practice; a good fit for reporting on a running service | Easy to drift into vanity KPIs; indicators go stale without review |
| No framework | Light and fast for a very small team | Metrics accumulate without a reason; arguments about what to measure repeat |
| Several frameworks together | Each decision gets the tool that fits | Duplicate definitions; confusion about which number is authoritative |

Choose the weight of the framework to match the stakes. A small internal service needs a goal, three questions, and a few metrics held on a page. A service delivered under contract may need KPIs defined to the level of a service level agreement (see topic 5.1, SLA, OLA, and XLA metrics).

## Questions to discuss with your team

**1. What goal does each of our reported metrics serve, and who would notice if we stopped reporting it?**
List the metrics on a board and write the goal next to each. Where the goal is missing, ask who asked for the metric and why. Some will turn out to be inherited from an earlier project and can be retired. The facilitator should treat a metric with no goal as a normal discovery, not a failure.

**2. If we could only answer three questions about our service, which would they be?**
This forces a ranking of questions before metrics. Let each person write three, then cluster them. Compare the cluster with the dashboard the team currently has. The gaps between the two are usually the most useful output of the session.

**3. Which of our key results describe an outcome for users, and which describe work we plan to do?**
Read each key result aloud and ask whether a user would notice if it were achieved. If the answer is no, rewrite it as an outcome or move it to the plan. The facilitator can mention that tasks are fine, but they belong in a backlog. Finish by agreeing on one key result to rewrite this quarter.

**4. Where do our four scorecard perspectives disagree, and what does that tell us?**
Ask the group to look for a recent period when one perspective improved while another worsened, such as cost falling while experience dropped. Discuss the cause and whether anyone saw it coming. This builds the habit of reading measures together. Record any perspective that has no measure, and decide whether to add one or to say plainly that it is not in scope.

**5. For each critical success factor, what reading would tell us it is failing?**
Pick two CSFs and name the KPI, then ask what value would trigger a conversation. If the team cannot say, the KPI is not doing its job. Look for KPIs that have never changed color, which usually signal a threshold set too loose. The facilitator should ask what the KPI's gaming vector would be.

**6. Which framework should own which decision, and where do we currently define the same number twice?**
Trace one metric, such as incident resolution time, through every report where it appears. Compare the definitions. Differences in clocks or exclusions are common and often explain arguments between teams. Agree on one owner and one definition, and record it in the register.

## Four perspectives

### Product and delivery teams

Delivery teams meet frameworks mainly as OKRs and, if they are lucky, GQM. A team gets most value when it writes its own goals and key results, linked to what its users need, and when it keeps the working measures separate from the ones leaders see. A team should be wary of key results that reward output, such as story points or releases, because they invite the behaviors the frameworks were meant to prevent (see topic 1.3, Outcomes over output: choosing what to measure).

### Service and operations teams

Operations teams meet frameworks mainly as CSFs and KPIs within ITIL practices, plus service level targets agreed with customers. They benefit from defining the CSF in plain language before choosing the KPI, from reporting percentiles for time measures, and from keeping reliability measures such as service level indicators and objectives next to the experience of users (see topic 5.2, SLIs, SLOs, and error budgets). They should also resist the temptation to keep KPIs that were set years ago and no longer relate to how the service is used.

### Leadership and governance

Leaders choose the frameworks, usually by asking for a scorecard or for OKRs, and what they do with the numbers decides how the frameworks behave. A leader who punishes a missed key result teaches teams to write easy ones. A leader who asks what the team learned teaches them to write honest ones. Governance bodies should expect a metric register, a small number of reported measures, and a regular review of whether the framework itself is working (see topic 11.4, Maturity model for metrics programs).

### Customers and users

Customers and users rarely see the framework, only its effects. A well-designed one shows up as services that improve in the ways they asked for and as honest reporting about what has not improved. A poor one shows up as green reports that do not match experience. Include a user viewpoint in every goal, and let user feedback sit in the customer perspective of the scorecard alongside the operational numbers (see topic 6.2, Experience level agreements).

## In practice: a service management example

A mid-sized online retailer runs a customer support platform and a self-service portal with several product teams and a small service operations group. All numbers are illustrative.

Leadership asks for a balanced scorecard and, separately, for quarterly OKRs. Within a quarter the team has 31 reported measures, and no one can say why half of them exist. The service owner runs a half-day session using GQM on one goal: "Improve the clarity of help for customers who cannot complete a payment, from the viewpoint of the customer."

The session produces four questions. Do customers find the right help article? Do they need to contact support after reading it? How long does a payment problem take to resolve when they do contact support? Do they feel the answer was clear? From the 31 measures, nine map to these questions. Three new ones are needed: article search success, contact rate after an article view, and a one-question survey after resolution. The remaining 22 are marked for retirement, with the owner's agreement.

The OKR for the quarter is written as an outcome. The objective is "Customers resolve payment problems without chasing us." The three key results are the median and 90th percentile time to resolution, the contact rate after article views, and the survey result on clarity. The scorecard keeps the customer perspective pointing at the same measures, so there is one definition, not two.

Midway through the quarter, a gaming risk appears. The contact rate after article views drops sharply, which looks like success. A reviewer samples 20 sessions and finds that a redesign moved the "contact us" link three screens deeper. Fewer people reach support, and the survey shows lower clarity scores. The team adds search abandonment and the survey comments as guardrails and restores the link.

At the end of the quarter the key result scores are 0.6, 0.8, and 0.5, which the team presents as they are. Leadership asks what the team learned, not why the scores were not higher. The decision, recorded in the decision log, is to keep the objective for a second quarter, replace the contact rate with the share of customers who resolve the problem on the first visit, and retire six more scorecard measures.

## Agile, AI, automation, and analytics

### Agile

Goals and questions should be revisited as the team learns, so choose a framework light enough to revise at regular improvement reviews with stakeholders. A practical approach is to write the goal, the question, and two or three indicators on one page and review it often. The caution is that a framework used as a one-time design exercise goes stale, and the dashboard drifts away from the goals.

### AI

Add AI to the framework explicitly: which goal does an AI-assisted practice serve, which question does its measure answer, and which quality measure is paired with it. Aligning with a governance vocabulary such as the NIST AI Risk Management Framework can help, but check what the current text says before you cite it. The caution is that a framework that only measures AI adoption will reward use for its own sake.

### Automation

Use automation to keep the traceability from goal to indicator current, for example by flagging indicators with no linked goal. Include automation in the framework as something to measure by its results and its failures. The caution is that a framework can become a large automated report that nobody reads.

### Analytics

Choose indicators the data can support and say what decision each informs. When several frameworks apply, such as goals and key results, a balanced scorecard, and ITIL's critical success factors, map them to a single set instead of running three. The caution is that a framework cannot fix poor data, so pair the choice of indicators with the data quality checks in topic 1.5, Data sources and instrumentation.

## Sector lens

**Startup.** A startup usually needs a goal, three questions, and a handful of metrics, held in a single page. OKRs are common and work well when they are written by the team that will do the work. Resist adding a scorecard until investors or customers require one.

**Small business.** Resources are thin, so pick one framework and use it lightly. CSFs and KPIs written for the two or three things the business cannot afford to get wrong are often enough. Prefer direct feedback from customers over elaborate scoring.

**Enterprise.** Several frameworks usually coexist, which makes ownership of definitions the main challenge. Keep a register, designate which framework holds which number, and run an annual review of the whole arrangement. Beware cascades that force every team to restate corporate objectives in their own words.

**Government and public sector.** Mandated reporting and contractual service levels act as fixed KPIs. Treat them as given, and use GQM or OKRs for the improvement work around them. Public accountability raises the stakes of a misleading number, so publish definitions and be open about changes (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of a framework is mostly time: a facilitated session to design measures, a short quarterly review, and the upkeep of a register. Software for OKRs or scorecards is available, but a document or spreadsheet often suffices at small scale. The larger cost is leadership attention, since a framework that leaders do not use becomes reporting for its own sake.

The return comes from fewer, better measures. Teams that can say why each number exists spend less time producing reports nobody reads, argue less about definitions, and notice sooner when a measure has stopped informing decisions. Rather than quote a figure, measure your own baselines: the number of metrics reported, the share with a recorded goal, and the time spent preparing recurring reports, before and after adopting the framework. A fuller treatment of return on investment is elsewhere (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Metrics before goals.** Starting from the data you have produces a dashboard of what is easy to count. Write the goal and question first, then see what data fits.
- **OKRs as task lists.** Key results that name activities make every quarter look busy and tell you nothing about outcomes. Rewrite each as evidence a user would notice.
- **OKRs and scorecards as individual targets.** They invite gaming and discourage help between people. Keep them at team and service level.
- **A scorecard with empty or token perspectives.** Filling every box with something is not the same as seeing the whole. Require a current value and a decision for each.
- **KPIs that never change.** If an indicator has been green for years, its threshold is probably wrong or it measures nothing that can fail. Ask what reading would show a problem, then reset it.
- **Frameworks stacked without ownership.** Three frameworks defining the same measure three ways create arguments. Name an owner and a single definition.
- **Rewarding the score.** If a perfect OKR score earns praise or pay, teams will write easy key results. Reward honest learning and good questions.
- **Framework as ceremony.** A day of workshops that produces a laminated poster changes nothing. Keep the output in the register and review it on a calendar.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Goals and questions | Metrics chosen because the data exists | Some teams write goals before metrics | A common goal and question format; every reported metric traces to one | Traceability is reviewed and gaps lead to funded work | Goals are co-written with customers and suppliers and revised as conditions change |
| Framework use | Ad hoc; no stated framework | Teams adopt different frameworks with different vocabulary | A written arrangement says which framework owns which decision | Framework outcomes are reviewed, and unused parts are dropped | Frameworks are aligned across teams and suppliers with one set of definitions |
| Indicators and scoring | KPIs set once and never reviewed | Some KPIs have owners and thresholds | KPIs and key results have owners, definitions, and guardrails | Scores and indicators are trended and reviewed for gaming each quarter | Indicators are retired and replaced routinely, with changes linked to outcomes |
| Use in decisions | Reports are produced and ignored | Leaders ask for numbers when something goes wrong | Reviews record decisions that numbers influenced | Learning questions are standard; missed targets are discussed without blame | Improvement planning across teams uses the same shared goals and measures |

## Checklist

- [ ] Every reported metric traces to a written goal, a question, and a named audience.
- [ ] A metric register records which framework owns each metric and its single definition.
- [ ] Goals are written with a purpose, a subject, and a viewpoint.
- [ ] Each key result describes an outcome someone would notice, not a task.
- [ ] OKRs, scorecard measures, and KPIs belong to teams or services, not individuals.
- [ ] Each critical success factor has at least one current KPI and a stated reading that would show failure.
- [ ] Each scorecard perspective has a measure with a current value.
- [ ] Every metric has a named gaming vector and guardrail.
- [ ] A quarterly review asks whether each goal, key result, and KPI still matters.
- [ ] At least one metric or indicator has been retired or redesigned in the past year, with the reason recorded.

## AI prompts

**Turn a goal into questions and candidate metrics.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Review draft OKRs.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Map critical success factors to KPIs.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Audit a scorecard for balance.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find which topic owns a metric and its paired guardrail before you place it in a framework.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a framework-based metric entry carries its definition, gaming vector, and guardrail.

## Key takeaways

- A framework decides which metrics earn a place, and the common rule is to start from a goal and a question, then choose the metric.
- Goal-Question-Metric suits designing measures for one team, OKRs suit focusing a quarter, scorecards suit rounded leadership views, and CSFs with KPIs suit operating an ITIL practice.
- Use the lightest framework that works, and say which one owns which number.
- Every framework can be gamed, so pair each metric with a guardrail and review the set on a calendar.
- Keep frameworks at team and service level, never as individual targets.
- Retire goals, key results, and indicators that no longer inform decisions.

## References and further reading

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
