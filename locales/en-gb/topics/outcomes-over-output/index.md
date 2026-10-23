# Outcomes over output: choosing what to measure

**A good service or delivery metric describes a change in the life of a customer or the health of a service, so choose measures by asking what changed for someone, and treat counts of activity and output as supporting evidence at most.**

## Overview and motivation

Most dashboards begin with what is easy to count: tickets closed, changes deployed, stories finished, calls answered. They are already time-stamped in a tool and within the team's control. None of them says whether anyone is better off.

Four words keep this straight. **Activity** is effort spent: hours worked, meetings held, calls made. **Output** is what the work produced: a release, a resolved ticket, a published article. **Outcome** is the change that output enabled for someone: a customer completes a task in half the time, a clinic opens on schedule, a repeat problem stops recurring. **Impact** is the longer-term effect on the organisation's goals, such as retained customers or lower cost to serve. In ITIL 4 (the 2019 edition of the framework published by AXELOS, now owned by PeopleCert), an output is a tangible or intangible deliverable of an activity, and an outcome is a result for a stakeholder enabled by one or more outputs.

[ITIL](https://en.wikipedia.org/wiki/ITIL) adds a second idea that works as a test for any metric: value is [co-created](https://en.wikipedia.org/wiki/Co-creation) by the service provider and the service consumer, not delivered by one to the other. This follows the thinking behind [service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic), the marketing view that value arises in use, when the customer applies a provider's capabilities to their own goals. A metric measured entirely on the provider's side cannot prove value. A team can close every ticket and ship every release on time while users find their jobs no easier.

The agile view reaches the same place by a different road. The principles behind the Manifesto for [agile software development](https://en.wikipedia.org/wiki/Agile_software_development) say that working software is the primary measure of progress, and that simplicity, the art of maximising the amount of work not done, is essential. Neither rewards a larger pile of output. Both point at delivering something that works for its users and not building what nobody needs.

Output and activity metrics are not wrong. They manage flow, capacity, and cost, and later topics use them heavily (see topic 2.1, Flow measures). The mistake is to let them stand in for value. A [vanity metric](https://en.wikipedia.org/wiki/Vanity_metric) is a number that is easy to report and almost always rises: total registered users, cumulative tickets handled, features shipped to date. It makes a team look busy and tells nobody what to do next. The test: could this number go up while the customer's situation gets worse?

Outcome metrics are harder. They move slowly, depend on factors outside the team's control, and are noisy. A change to a password reset flow may take weeks to show up in contact volume, which a marketing campaign also affects. The answer is to choose outcomes carefully, pair them with the output measures the team steers by day to day, and be honest about how much of the movement the team can claim.

A **leading indicator** is a measure that moves before the result you care about and can be influenced early, such as the share of new services with a tested support runbook. A **lagging indicator** reports the result after the fact, such as the number of major incidents or the churn of customers. Economists use the same pairing, classing an [economic indicator](https://en.wikipedia.org/wiki/Economic_indicator) as leading, coincident, or lagging. Teams need both: lagging indicators say whether you were right, and leading indicators give you something to act on while there is still time. A leading indicator is only a hypothesis until you have checked, over several periods, that it really does move before the outcome.

Outcome measures are a partial remedy for gaming (see topic 1.2, Goodhart's law and the psychology of metrics). A measure close to what customers experience is harder to improve without helping them, and distance from the outcome is where gaming lives. Frameworks that help with the choice are covered separately (see topic 1.7, Measurement frameworks).

## Key principles

- **Start from the outcome and work backward.** Name the change you want for a customer, a service, or the organisation, then ask what evidence would show it, then ask what leading signs would appear sooner.
- **Value is co-created, so include the consumer's side.** At least one measure in every set should come from the people using the service: their success, effort, or experience, rather than the provider's records alone.
- **Keep the chain visible.** Show activity, output, outcome, and impact as a chain. Teams steer on outputs and leading indicators, and judge themselves on outcomes.
- **Pair, never substitute.** An outcome measure explains why an output measure matters, and an output measure explains what to do about an outcome measure. Neither works alone.
- **Prefer measures that can fall as well as rise.** A number that only grows is a count, not a signal.
- **Treat leading indicators as hypotheses.** Check that they predict the outcome, and drop them when they do not.
- **Be honest about attribution.** Outcomes have many causes. Say what the team influences and what it only observes.

## Metric definitions

The five metrics below are chosen to move a measurement set toward outcomes. They are examples of the form to use, and later topics define the service and delivery measures that fill them. The illustrative thresholds in this topic are not benchmarks.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Outcome coverage | Share of reported metrics that are linked in the metric register to a written outcome for a named customer or service | metrics with a written outcome link / metrics reported in the period. Counts only metrics shown on a regular report; excludes working-view measures kept by a single team | percent | Metric register (see topic 1.4, Metrics governance and ownership) | Measurement and reporting; continual improvement | Product goal and delivery goal | Quarterly |
| Feature adoption rate | Share of eligible users who use a new or changed capability within a stated window after release | distinct eligible users who used the capability within 30 days of release / distinct eligible users in that period. Clock starts at general availability; excludes internal test accounts and users who could not reach the capability | percent | Product analytics, service catalogue usage logs | Service design; release management | Stakeholder review feedback; product outcome measure | Monthly for 3 months after release, then quarterly |
| Repeat contact rate | Share of contacts from a user about the same service within a stated window after an earlier contact was closed | new contacts from the same user about the same service within 14 days of a closed contact / closed contacts in the period. Clock starts at closure; excludes contacts opened as planned follow-ups | percent | ITSM tool contact and ticket history | Service desk; incident management | Escaped defects; definition of done | Monthly |
| Leading indicator validation rate | Share of leading indicators in use whose movement has preceded the movement of their linked lagging indicator in the review period | leading indicators with a confirmed lead over their lagging indicator / leading indicators in use. Judged by the team in a documented review, on at least four periods of data; excludes indicators with fewer than four periods | percent | Metric register and trend history | Continual improvement | Retrospective actions on experiments | Twice a year |
| Benefit review completion rate | Share of funded changes or improvements whose intended outcome was reviewed against its measure after the agreed delay | changes with a completed outcome review within 90 days of the planned review date / changes whose review date fell in the period. Excludes changes withdrawn before release | percent | Change record, improvement register, review notes | Continual improvement; change enablement | Stakeholder review; product increment review | Quarterly |

Outcome coverage and benefit review completion rate measure the measurement practice and are easy to satisfy with paperwork. Feature adoption rate and repeat contact rate sit nearer the customer and are the ones most likely to change a decision.

## Recommendations

### Start from outcomes

**1. Write the outcome as a sentence about a person or a service.** "Staff can reset their own password without calling the service desk" is an outcome. "Deploy the new identity portal" is an output. Put the sentence at the top of the metric's entry in the register, then choose the measure. If you cannot write the sentence, you are not ready to choose a number.

**2. Draw the chain from activity to impact.** For each goal, sketch four boxes: what the team does, what it produces, what changes for the user, and what that changes for the organisation. Place each candidate metric in a box. A set full on the left and empty on the right is the signal to look for outcome evidence.

**3. Use the value-co-creation test on every metric.** Ask: whose view of value does this show, and does the consumer's view appear anywhere in the set? In ITIL terms, a service relationship has a provider and a consumer, and value is realised in the consumer's use. A measure of response time from the provider's clock needs a companion from the consumer's side, such as whether the user could carry on with their work (see topic 6.2, Experience level agreements).

**4. Ask for a decision, not a report.** For each candidate metric, write the decision someone would take if it moved. Retire any measure with no decision attached. This is the quickest filter against vanity metrics and prevents a dashboard from growing by default.

### Pair outputs with outcomes

**5. Choose one outcome measure per major output measure.** If you report deployments, pair them with a measure of what the deployments changed for the service, such as change failure or user-facing incidents (see topic 2.8, DORA metrics). If you report tickets resolved, pair them with repeat contact. The pair should be on the same page. A team that sees only output will optimise for output.

**6. Choose outcome measures the team can influence, and name the ones it only observes.** A team can influence its own service's repeat contacts and adoption of its own features. It can only observe the company's revenue. Both belong in the picture, but targets and improvement work attach to the influenced measures. Naming the difference prevents blame for movements the team could not have caused.

**7. Use proxies openly.** Many outcomes cannot be measured directly. Choose a proxy, say that it is one, and say what it misses. Repeat contact rate is a proxy for "the problem was really solved," and a short survey or a read of open comments can check that it still tells the truth (see topic 6.1, Customer satisfaction metrics).

### Build leading and lagging pairs

**8. Pair each lagging indicator with at least one leading indicator you can act on.** Major incidents are a lagging indicator, and the share of services with tested recovery runbooks may lead them. The leading indicator gives the team something to do this month. Choose leading indicators you believe in for a reason you can write down, then test the belief.

**9. Validate leading indicators with a look back.** Twice a year, plot each leading indicator against its lagging partner over at least four periods and ask whether the movement came first. Where the relationship is weak, change or drop the leading indicator. 

**10. Use service level objectives where the outcome has a clear user-facing measure.** A well-chosen service level indicator (SLI) is a leading signal for user happiness, and a service level objective (SLO) states how good it needs to be (see topic 5.2, SLIs, SLOs, and error budgets). They work best when the indicator is chosen from the user's point of view, not from the machine's.

### Keep the choice honest

**11. Close the loop with outcome reviews.** When a change or improvement is funded, record the outcome it is meant to produce, the measure, and the date when someone will look. Hold the review even if the answer is awkward. Without reviews, outcome language is decoration (see topic 6.5, Value realisation and business outcomes).

**12. Keep output measures in the working view, and say what they are for.** Flow, capacity, and cost measures are the team's instruments, not its scorecard. Cycle time tells you where work waits (see topic 2.2, Lead time, cycle time, and flow efficiency). Reported upward without an outcome beside them, they invite gaming.

## Gaming vectors and guardrails

Moving toward outcomes does not remove gaming. It changes its shape: outcomes can be redefined, proxies can be steered, and reviews can be skipped.

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Outcome coverage | Writing a vague outcome sentence ("improve service") for every metric so the link exists on paper | Sample the register: a sentence must name a person or service and a change; check that a decision was taken because of the measure |
| Feature adoption rate | Counting a forced or automatic first use as adoption; shrinking the eligible user group; making the capability the default so it is "used" without being chosen | Task completion or satisfaction among users of the capability; retention of use after 30 and 90 days; read open comments |
| Repeat contact rate | Telling users to raise a new request through another channel; closing the contact as a duplicate of an unrelated one; lengthening the closure to avoid recontact inside the window | Contacts by channel for the same service; sampled review of closure notes; user-reported "problem solved" rate |
| Leading indicator validation rate | Declaring leading indicators valid after an informal look; choosing indicators that trivially move with the outcome | Written review record with the plotted data; invite someone outside the team to challenge one result per cycle |
| Benefit review completion rate | Holding a review in name only, or setting the intended outcome after the fact so it is always met | Compare the outcome in the review with the statement made when the change was funded; track the share of reviews that led to a change in plan |

A healthy reading shows outcome measures that sometimes disappoint, reviews that sometimes end a change, and leading indicators that sometimes get dropped. A set where every outcome is met and every leading indicator is confirmed has probably been tuned to be so.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Output and activity measures | Quick, cheap, and within the team's control; good for flow and capacity decisions | Easy to inflate; say nothing about whether anyone benefited |
| Outcome measures | Stay close to what customers and the organisation value; harder to improve without helping | Slow, noisy, and influenced by factors outside the team's control |
| Leading indicators | Give early warning and something to act on | Can mislead if the link to the outcome is assumed rather than tested |
| Lagging indicators | Report what really happened | Arrive too late to change this period's result |
| Proxies for outcomes | Make hard-to-measure outcomes visible | May drift from what they stand for, and invite surrogation |
| A small outcome-led set | Easy to remember and discuss; focuses effort | May miss a problem outside the chosen outcomes |
| A broad balanced set | Covers more of the service | Dilutes attention; each measure gets less scrutiny |

Keep a small number of outcome measures the whole group can recite, support each with the output and leading measures that explain it, and revisit the set when strategy changes. The balanced approaches associated with the [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) and with [objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results) both try to connect the daily work to the results that matter. They fail in the same way when key results become a list of outputs with a percentage beside them.

## Questions to discuss with your team

**1. For our five most prominent metrics, which can rise while our customers are worse off?**
Write the five on a board and ask the question of each. A count of tickets closed, for example, can rise while repeat contacts also rise. The facilitator should record the cases where the answer is yes, because those are the vanity metrics. Finish by asking what outcome measure would sit beside each one.

**2. What does a good week look like for a customer of this service, in their words?**
Ask people who talk to customers, and avoid the team's own vocabulary. The answers become outcome sentences, and often reveal things nobody measures, such as not having to explain a problem twice. Capture three sentences and ask which can be measured, even by proxy.

**3. Which of our leading indicators have we ever checked against the result they are supposed to predict?**
Choose one indicator and plot it against its lagging partner for the last several periods. Ask what you see and how confident you are. If the relationship is weak, discuss what to replace it with. Treat a dropped indicator as a normal result of learning, not a failure.

**4. Where does our team claim credit for an outcome it only observes?**
Look at the metrics in reports to leadership. Which depend on factors outside the team's control, such as seasonality, a campaign, or a supplier? Agree on a plain way to state what the team influences and what it observes. This prepares the team for the day an outcome moves for reasons it did not cause.

**5. What did we ship or change in the last two quarters, and did anyone review whether it worked?**
List the changes on a board and mark the ones with a review record. For the others, ask what outcome was expected and how you could find out now. Resist a hunt for blame. The aim is to start the habit, even if the first reviews are late.

**6. Which output measures should move back to our working view?**
Some measures are useful to the team and misleading in a report. Ask which are which, and what each would need beside it to stay on a leadership report. Agree on one measure to move this quarter. Moving a measure is a sign of maturity, not a retreat from transparency.

## Four perspectives

### Product and delivery teams

Delivery teams are tempted by output because their tools report it by default. The remedy is to make adoption and outcome evidence part of the definition of done and the stakeholder review. A feature nobody uses is a lesson, and finding that out early is a benefit of agile practice. Teams keep flow measures in their working view and pair them with adoption and failure measures (see topic 2.5, Delivery forecasting and planning metrics).

### Service and operations teams

Service teams are measured on handling: calls answered, tickets closed, time to resolve. These matter for planning and cost, and they say little about whether the user's problem went away. Operations teams should add repeat contact, recurrence of the same cause, and user-reported resolution beside speed measures, and should treat a rising count of easy tickets with suspicion (see topic 3.1, Service desk metrics). Leading indicators such as knowledge article use and tested runbooks give the team something to act on between incidents.

### Leadership and governance

What leaders ask to see teaches the organisation what matters. Ask for outcomes, accept that they are slower and noisier, and fund the reviews that check them. Governance bodies should look for a short, stable set of outcome measures, each with a stated owner and a record of the decisions it informed (see topic 1.4, Metrics governance and ownership). A leader who asks "what did we learn?" gets better data than one who asks "why is this red?"

### Customers and users

Customers experience outcomes directly and rarely see output counts. They are the final test of the set: does the service let them get on with what they came to do? Short surveys, open comments, and observation of real tasks are better evidence than any provider-side measure. Customers also have a role in co-creating value, which means that how well they are informed, enabled, and heard affects the results (see topic 6.3, Service adoption and catalogue metrics).

## In practice: a service management example

A mid-sized online retailer runs an internal platform team that offers a self-service environment provisioning service to about 40 product teams, supported by a small service desk. All numbers in this example are illustrative.

The monthly report shows 310 requests fulfilled (up from 240), a median fulfilment time of 6 hours, and 12 features shipped in the quarter. Leadership is pleased. The platform lead notices that contacts to the desk about provisioning have also gone up, and asks the team to chart the outputs against the outcome they hoped for: product teams getting an environment without waiting or asking for help.

The chain exercise shows the team had measured activity and output and no outcome. They add three. The first is repeat contact rate: 22 percent of provisioning contacts are followed by another contact about the same service within 14 days. The second is feature adoption rate for the three newest features, which stands at 9 percent, 14 percent, and 61 percent of eligible teams after 30 days. The third, a leading indicator, is the share of requests that complete without a human step, currently 48 percent. They hypothesize that this should lead the repeat contact rate down.

They decide to pause two planned features that resemble the two low-adoption ones and spend the quarter on the most common cause of repeat contact, an unclear error message when a quota is exceeded. They record the intended outcome, a repeat contact rate under 15 percent, and set a review date in 90 days.

The gaming risk appears in month two. The repeat contact rate drops to 11 percent, which looks wonderful. A sample of 25 closed contacts shows that the service desk had started asking users to use a chat channel for follow-up questions, and the chat channel is not counted in the ITSM tool. The team adds contacts by channel to the report, brings chat transcripts into the sample, and finds the combined rate is 17 percent. That is a real improvement, smaller than the first reading. In the review the lead reports 17 percent, notes the leading indicator rose from 48 to 57 percent in step, and records that the hypothesis has held for two of the four periods needed to call it validated.

## Agile, AI, automation, and analytics

### Agile

Continuous delivery makes it cheap to release small changes and see whether a user outcome moved. A good practice is to state the intended outcome and the signal that would show it before work starts, and to check the signal after release with stakeholders. The caution is that frequent releases tempt teams to count releases as progress, which is output again.

### AI

AI tools raise output easily: more code, more drafts, more answers. The outcome question is whether users are better served, so pair output counts with an outcome such as repeat contact rate or task success for the AI-assisted path. The caution is that an outcome that improves while AI use rises may still have other causes, so avoid claiming the tool caused it without a comparison.

### Automation

Automate the capture of outcome signals that already exist, such as repeat contacts, abandonment, or time to first useful answer. Automation of work itself should be measured by what it frees up and what it breaks. The caution is that an automated task that runs often looks productive even when its result is never used.

### Analytics

Outcome data is usually slower and noisier than output data. Use leading indicators to steer, and validate them against the slower outcome from time to time. The caution is that correlation between an output and an outcome in last year's data does not mean the output will keep predicting it. In ITIL 5 terms, the owner's stated focus on measurable outcomes makes this topic the base for topic 1.8, ITIL 5 measurement and value outcomes.

## Sector lens

**Startup.** Outcomes are close at hand: founders can talk to customers and see whether they stay. The risk is to measure only growth in users and features, which are vanity metrics until retention and task success are visible. Choose one outcome measure customers would recognise and check it weekly.

**Small business.** Numbers are too small for statistics, so prefer direct conversations, a handful of tracked cases, and a short list of proxies. Be wary of vendor dashboards that report their own activity as if it were your outcome.

**Enterprise.** Scale invites output reporting, because outputs are comparable across many teams and outcomes are not. Resist forcing one outcome definition on dissimilar services. Agree a small set of shared outcome sentences, let each service choose its measures, and keep the register current.

**Government and public sector.** Statutory duties, funding rules, and service levels fix some measures in advance, often outputs such as cases processed. Meet them, and add outcome measures for citizens and staff alongside, such as whether a person got the help they came for. Public reporting makes honest outcome data more valuable and more sensitive, so agree in advance how corrected figures will be explained (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of shifting toward outcomes is mostly effort and patience: writing outcome sentences, adding a few measures such as a short survey or an adoption event, and holding outcome reviews. Tool cost is modest, since most proxies can be built from data already collected. The larger cost is delay, because outcome data arrives slowly and leaders must wait for it.

The return comes from better choices about where to spend. Work that nobody uses is expensive, and so is improving a handling measure while the underlying cause of repeat contacts stays in place. The pattern to expect is fewer features built and left unused, more attention on recurring causes, and a stronger story for funding. Do not promise a percentage. Measure your own baselines, such as adoption of recent releases and repeat contact, and compare after a few quarters (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Counting what is easy.** Ticket and deployment counts are in every tool, which makes them the default. Add at least one outcome measure for each service before adding another output count.
- **Outcome theatre.** Writing an outcome sentence for every metric without ever checking it. Review a sample of the register and ask what decision each measure informed.
- **Untested leading indicators.** Treating a plausible signal as proof. Plot it against the lagging result at least twice a year and drop those that do not lead.
- **Outcomes as personal targets.** Assigning an outcome measure to one person invites the behaviour described in topic 1.2. Attach outcomes to teams and services.
- **Measuring only the provider's side.** A set made of internal clocks and counts will miss what customers feel. Include a consumer-side measure for every service.
- **Never reviewing.** Funding changes on promised benefits and never checking them. Put a review date on the change record when it is approved.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Choosing measures | Counts that are available in tools | Some teams write outcome sentences | Every reported metric has a written outcome and a decision it informs | Outcome and output sets reviewed together each quarter | Outcome sentences aligned across teams, suppliers, and customers, and revised when strategy changes |
| Leading and lagging indicators | Only lagging results, reported late | A few leading indicators chosen by intuition | Leading and lagging indicators paired and recorded in the register | Leading indicators validated against results twice a year | Indicators shared with suppliers and customers; the set evolves with evidence |
| Outcome reviews | No review of whether changes worked | Occasional reviews after large changes | Review date recorded for every funded change | Reviews completed, with results feeding the next plan | Reviews are routine, cross-team, and include customer input |
| Consumer-side evidence | Anecdotes | Survey for some services | A consumer-side measure for every service | Consumer evidence trended and read alongside operational data | Customers help define and interpret outcome measures |

## Checklist

- [ ] Every service has at least one outcome sentence naming a person or service and a change.
- [ ] Each reported metric is placed on the chain from activity to impact.
- [ ] Each metric has a named decision it informs; those with none are retired.
- [ ] Every output measure on a report has an outcome measure beside it.
- [ ] Every service has at least one consumer-side measure.
- [ ] Each lagging indicator has a leading indicator, with a written reason for the link.
- [ ] Leading indicators are checked against results at least twice a year.
- [ ] Proxies are labelled as proxies, with what they miss.
- [ ] Every funded change has an intended outcome, a measure, and a review date.
- [ ] Outcome measures attach to teams and services, never to individuals.

## AI prompts

**Turn an output metric into an outcome-led set.**

```text
Our team is [team name], which provides [service or product] to [customers or
users]. We currently report [list of output or activity metrics]. We want to
move toward outcomes. For each metric, suggest an outcome sentence about a
customer or service that it might support, and propose one outcome measure and
one leading indicator we could consider. For each suggestion, say what the
measure would miss and how it could be gamed. Do not invent benchmark values
or sources. List your assumptions and the facts you need from me.
```

**Test whether a leading indicator is credible.**

```text
We use [leading indicator] as a leading indicator for [lagging outcome measure].
Here are [number] periods of data for both, pasted below, with notes on
anything that changed during that time: [data and notes]. Describe whether the
leading indicator appears to move before the lagging one, and what other
explanations are consistent with the data. Do not claim causation. List your
assumptions, the limits of this much data, and what additional data would help.
```

**Draft an outcome review for a recent change.**

```text
We made this change: [description], approved on [date], with the intended
outcome [outcome sentence] and measure [measure]. Current data: [data]. Draft
an outcome review agenda and a short summary structure that compares the
intended outcome with what we see, separates what the team influenced from what
it only observed, and lists questions for users. Do not judge success beyond
what the data supports. List your assumptions and any data gaps.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic and companion outcome measure for an output metric you are about to report.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new metric topic pairs its output measures with outcomes and guardrails.

## Key takeaways

- Activity, output, outcome, and impact are different things, and a dashboard of the first two cannot show value.
- In ITIL, value is co-created with the consumer, so every set needs a measure from the consumer's side.
- Pair outputs with outcomes, and lagging indicators with leading ones you have tested.
- Be clear about what the team influences and what it only observes.
- Review funded changes against their intended outcomes, and let the results change the plan.
- Outcome measures reduce gaming without ending it, so each one still needs a guardrail.

## References and further reading

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
