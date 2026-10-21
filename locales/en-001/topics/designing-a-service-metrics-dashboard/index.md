# Designing a service metrics dashboard

**A good dashboard answers a few questions that a named audience actually asks, shows each number with its trend and context, and is built by the people who will use it.**

## Overview and motivation

A [dashboard](https://en.wikipedia.org/wiki/Dashboard_(business)) is a visual display of the most important information needed to achieve one or more objectives, arranged so that it can be monitored at a glance. In practice, most dashboards in service organizations fail that definition. They begin as a way to answer a real question, then grow by accretion until they show everything the tool can draw. Nobody owns them, nobody is sure what the numbers mean, and the screen on the wall is ignored.

The purpose of a service metrics dashboard is to help people make decisions and to start good conversations. A team uses it to notice that its work is waiting longer than it was, and to ask why. A service owner uses it to see that a service is near the edge of its reliability target. A leader uses it to see whether investment in an area is producing the outcome that was hoped for. A display that does none of these is decoration, and decoration costs money to build and attention to ignore.

ITIL frames this as a question of information and communication: the right information, to the right people, in a form they can use, at the right time. The agile aims point to the same design principles. Continuous stakeholder involvement means the audience helps design the view, and keeps helping as questions change. Continuous improvement means the dashboard itself is reviewed and trimmed. Ongoing evolution means the set of measures changes when the services and goals change. A sustainable pace means the dashboard does not generate a daily compulsion to check numbers that move only monthly. And the same trust that supports motivated individuals means teams see their own data first and own the story it tells.

Three design failures are common. The first is the wall of numbers, where a hundred tiles compete and none stands out. The second is the target-only display, where a figure is shown against a goal in red or green with no trend and no context, which invites management by color instead of by understanding. The third is the unowned display, where definitions have drifted, the data is stale, and nobody knows whom to ask. The work of design is to avoid these.

Good visual design helps. [Data visualization](https://en.wikipedia.org/wiki/Data_visualization) is the practice of showing data graphically so that patterns can be seen and understood. A [sparkline](https://en.wikipedia.org/wiki/Sparkline) is a small, word-sized line chart that shows a trend without axes or labels, and it suits a dashboard well because it puts the history beside the current value. A [run chart](https://en.wikipedia.org/wiki/Run_chart) plots a measure over time with a median line, and a [control chart](https://en.wikipedia.org/wiki/Control_chart) adds limits that separate ordinary variation from signals worth investigating (see topic 1.6, Statistical literacy for service metrics). [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk) is the decoration that adds no information, such as heavy gridlines, three-dimensional bars, and ornamental gauges, and it is worth removing.

A [vanity metric](https://en.wikipedia.org/wiki/Vanity_metric) is a number that looks good and does not help anyone decide anything, such as a count of tickets handled or logins to a portal shown without outcomes. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to the whole display: when a number on the screen becomes a target, people manage the number (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic draws on the measurement frameworks (see topic 1.7, Measurement frameworks) and on the data and governance topics in Part 1.

## Key principles

- **Start with questions, not data.** Write the decisions and questions the audience has before choosing a single chart.
- **Show few measures, balanced.** A small set that spans flow, quality, reliability, experience, and cost resists gaming better than one measure alone.
- **Always show trend and context.** A value without history, a baseline, and a note about what changed is hard to interpret.
- **Respect variation.** Do not react to every wiggle. Use run charts or control charts to separate signal from noise.
- **Give each audience its own view.** Teams, service owners, and leadership ask different questions and need different detail.
- **Teams see their data first.** The people who do the work should see their numbers before anyone else does, and own the interpretation.
- **Define everything and name an owner.** Each measure has a written definition, a data source, and a person to ask.
- **Keep it light to maintain.** A dashboard that takes a week of manual work each month will die.

## Metric definitions

The measures below are about the dashboard itself, not about a service. They help a program team see whether its displays are healthy. Some are descriptive and are marked so, because treating them as targets would invite the distortions this topic warns against.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Question coverage | Share of listed audience questions that the dashboard can answer with a defined measure | questions with a measure and a definition / questions listed by the audience | percent | Question list from stakeholder sessions; metric cards | Continual improvement; service level management | Continuous stakeholder involvement | Quarterly |
| Definition completeness | Share of displayed measures with a current written definition, data source, owner, and known limits | measures with all four / measures displayed | percent | Metric cards or catalog | Information and technology management; knowledge management | Shared understanding; visible work | Quarterly |
| Data freshness | Share of displayed measures updated within their expected interval | measures updated on time / measures displayed | percent | Pipeline logs; dashboard metadata | Monitoring and event management | Fast feedback | Weekly |
| Decision linkage | Share of reviewed measures where a recent review led to a recorded decision, action, or deliberate choice to do nothing | measures with a linked decision in the period / measures reviewed | percent | Review notes; improvement register | Continual improvement | Regular reflection | Quarterly |
| Display size | Number of measures on each audience view | count per view | measures | Dashboard configuration | Continual improvement | Simplicity | Quarterly |
| Retirement rate | Measures removed or replaced in the period because they stopped informing decisions | measures retired / measures displayed at start | percent | Change log of the dashboard | Continual improvement | Ongoing evolution | Annual |
| Audience reach (descriptive) | Share of intended teams or roles that opened their view in the period | distinct teams or roles that viewed / intended teams or roles | percent | Dashboard access logs, aggregated to team or role | Information and technology management | Continuous stakeholder involvement | Quarterly |

Define the audience of each view in writing. Count measures per view, not per tool, so that a large catalog with a small front page is not mistaken for sprawl. Access logs are gathered and reported at the level of team or role and never to track individuals' reading habits. Audience reach is descriptive and is read alongside decision linkage, because a heavily viewed display that changes no decision has little value. Decision linkage accepts "we looked, and chose to do nothing" as a recorded decision, so that the measure does not push people to invent action.

## Recommendations

### Start from the audience

**1. List the audiences and their questions.** Typical audiences are the delivery or support team that does the work, the service owner who is accountable for a service, and the leaders who fund and direct. Sit with each for an hour and write down what they ask, what decisions they make, and what they wish they knew. A good question sounds like "Is our work waiting longer than it used to?" or "Are we close to using up our error budget?" It does not sound like "Show me the incident dashboard."

**2. Map each question to one measure and a companion.** For each question, choose the single best measure from the earlier parts of this book, and a companion that guards against the obvious distortion. A speed measure pairs with a quality measure. A volume measure pairs with an outcome. An experience measure pairs with a behavior measure. This is the pairing logic that runs through the whole book (see topic 1.3, Outcomes over output: choosing what to measure).

**3. Include the audience in the design.** Show sketches before building anything. Ask what is confusing, what is missing, and what they would do with each number. Their answers will cut the set down, and they will trust what they helped to make.

### Choose a small, balanced set

**4. Keep each view to a handful of measures.** About five to nine measures per audience view is a workable range, though the right number depends on the questions. The limit forces choices. Put detail behind a click, in a supporting view, and keep the front page to what is needed to decide whether to look further.

**5. Balance the set across dimensions.** A [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) is a strategic management tool that looks at an organization from several perspectives instead of financial results alone. The idea transfers well: for a service, balance flow and speed, quality and stability, reliability, experience, and cost. A set that includes only speed encourages shortcuts, and a set that includes only quality encourages delay. The related idea of a [key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator) is useful when the indicator is chosen for what it reveals about an objective and not for how easy it is to show.

**6. Distinguish indicators from diagnostics.** A few headline indicators tell you whether things are healthy. Diagnostic measures help you find out why when they are not. Keep diagnostics one step down, so the front page does not become a wall.

### Show context and trend

**7. Show history with every value.** Put a sparkline or a small run chart beside each current value. Show at least enough history to see seasonal patterns, such as monthly peaks or a quarterly cycle. Mark events that explain changes: a release, a policy change, an outage, a team reorganization. A note next to the line saves a hundred questions.

**8. Use distributions and ranges for time measures.** A mean hides the long tail that users feel. Show the median and a high percentile such as the 85th or 95th, and show the spread. State the sample size when it is small, and show how uncertain a small sample is (see topic 1.6, Statistical literacy for service metrics, and topic 2.2, Lead time, cycle time, and flow efficiency).

**9. Be careful with targets and colors.** Use a target line when a target has a real basis, such as a service level objective, and show it as a reference, not as a verdict. Avoid red, amber, and green tiles that flip on one data point. If you use status colors, base them on a rule that accounts for normal variation, and explain the rule on the page.

### Make it trustworthy and maintainable

**10. Attach a definition and a data note to every measure.** One click from each number should lead to its definition, formula, data source, owner, refresh time, and known gaps. A short "how to read this" note is worth the space. A reader who can see the limits is less likely to misuse the number, and a team that can see them can challenge them (see topic 1.4, Metrics governance and ownership, and topic 1.5, Data sources and instrumentation).

**11. Automate the data and own the display.** Pull data from the systems of record on a schedule, and show the time of the last update. Manual spreadsheets can start a conversation, but they are fragile. Name an owner for each dashboard who is responsible for its definitions, freshness, and retirement. Review the dashboard at a fixed cadence with its audience, and trim it.

**12. Plan the exit from the start.** Every measure should have a stated reason for existing and a condition under which it will be retired, such as "when the backlog of known errors falls under a threshold for three months" or "when the team no longer uses it in its review." Retiring measures keeps the set small and signals that the program serves the work.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Question coverage | Writing narrow questions that existing measures already answer; leaving out hard questions | Include stakeholders from outside the program team; review unanswered questions explicitly |
| Definition completeness | Filling fields with boilerplate; definitions nobody reads | Sample definitions for clarity with someone outside the team; check that the definition matches the actual calculation |
| Data freshness | Refreshing a stale source with unchanged data; counting a refresh as success when the source feed failed | Check source timestamps as well as refresh times; compare with record counts and expected volume |
| Decision linkage | Recording decisions after the fact to fill the field; inventing action to avoid a blank | Accept "chose to do nothing" as a recorded decision; sample links for a real prior discussion |
| Display size | Hiding measures on secondary tabs; splitting one view into many | Count measures per audience across all tabs; ask the audience how many numbers they actually use |
| Retirement rate | Retiring inconvenient measures that show poor results | Review the retired list for measures with unfavorable trends; require a stated reason |
| Audience reach (descriptive) | Opening the page to raise the count; mandatory viewing at meetings | Keep it descriptive; read with decision linkage; do not report individual views |

A healthy reading shows a short front page that the audience can explain, definitions that match calculations, data that arrives on time, reviews that sometimes lead to action and sometimes to a deliberate choice to wait, and a list of retired measures that includes some that were once popular.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| One enterprise dashboard for everyone | Single source of truth; consistent definitions | Too general for any audience; grows into a wall |
| Separate views per audience on shared data | Fits each audience; consistent definitions | Needs governance of the shared definitions |
| Team-built dashboards | Fit local questions; high ownership | Definitions drift; hard to roll up |
| Central team builds all dashboards | Consistency; design skill | Slow; may not fit team questions |
| Live, real-time display | Quick signals for operations | Encourages reacting to noise; costly |
| Periodic review pack | Calm, discussed with context | Delay; can be skipped |
| Targets and status colors | Quick scanning | Invites management by color; hides variation |
| Trend and distribution only | Honest about variation | Harder to scan for newcomers |

The prose answer is to share definitions across the organization, let each audience have its own small view, use live displays only where operational response needs them, and use a calm periodic review for improvement decisions.

## Questions to discuss with your team

**1. What decisions did we make in the last quarter that a number on a screen informed?**
List them. For each, name the number and where it came from. Notice which numbers on our current screens never appear in this list. The facilitator should ask whether they earn their place.

**2. If we could show only five numbers to our own team, which would they be?**
Have each person write a list privately, then compare. Discuss differences and what each number would help someone decide. Agree on a trial set and a date to review it.

**3. Which number on our dashboard would we most like to remove, and why?**
Listen for numbers that cause arguments, mislead, or are never read. Check whether the problem is the measure or its presentation. Agree to retire, redefine, or keep each.

**4. How would a new colleague read our dashboard without help?**
Ask a newcomer to explain what they see. Note what they misread and why. Add definitions, context, or notes where they stumbled.

**5. What changed in our work that a number does not show?**
Releases, staffing, policy, or a change in customers can explain a trend. Agree how events are recorded on the display so that the next reader has the story.

**6. Who looks at our data besides us, and what do they do with it?**
Trace the path of our numbers to other audiences. Check that the interpretation they place on them is one we would endorse. Agree what we will share and what context goes with it.

## Four perspectives

### Product and delivery teams

Teams do the work and should be the first audience for their own data. They should help choose the measures, use the display to prompt their own review conversations, and annotate it with events. A team view should answer "how are we doing and what should we try?" and not "how do we compare with the team next door?"

### Service and operations teams

Service owners are accountable for how a service performs over time. Their view brings together reliability, incidents, changes, cost, and experience for one service, with trends and the status of improvement actions. They should use it to decide where to invest and to prepare for conversations with customers and leaders.

### Leadership and governance

Leaders need a short view of outcomes and risks across services, with enough context to interpret it. They should ask for trends and distributions rather than rankings, resist asking for new measures without retiring others, and use the display to direct questions at systems and decisions, not at individuals.

### Customers and users

Customers and users see service information through status pages, reports, and the experience measures that reflect their view (see topic 6.2, Experience level agreements). Their view should be honest, plain, and consistent with what the teams see. They should be able to tell the organization what the numbers fail to show.

## In practice: a service management example

A software company with a hosted product and a customer support group has accumulated three dashboards: an operations screen with 62 tiles, a support report that is emailed weekly, and a delivery page maintained by one analyst. The leadership team asks for a single dashboard to "see everything." The figures below are illustrative.

The head of service management proposes starting with questions. She holds an hour-long session with each of three audiences: the support team, the platform team, and the leadership group. The support team asks whether customers wait longer than they used to for a first useful reply and whether the same issues come back. The platform team asks whether it is close to using up its error budget and whether its change process is slowing it down or protecting it. Leadership asks whether customers are getting value and whether the investment in a new self-service portal is paying off. Together they listed 14 questions. The existing dashboards could answer six of them with a defined measure, so question coverage is 43 percent.

The group designs three views of no more than seven measures each, on shared definitions. The support view shows the median and 85th percentile time to a useful first reply, the share of contacts that return within seven days, a satisfaction trend with its sample size, and self-service resolution paired with return contacts. The platform view shows availability against the objective with an error budget burn line, change lead time with the change failure rate, and the share of time spent on unplanned work. The leadership view shows service-level outcomes, customer experience, cost per active customer, and the status of three funded improvement actions. Every value has a sparkline, a link to its definition card, and a note field for events. Colors appear only on the error budget, based on a rule explained on the page.

The first review brings surprises. The support team notices that its median reply time improved while its 85th percentile worsened, because easy contacts were being answered quickly and hard ones left waiting. It decides to look at its triage rules and records the decision. The platform team sees that a recent increase in change lead time coincided with a new approval step, and it takes the question to the change group. Leadership notices that portal usage is rising while return contacts are flat, and asks the support team what the portal is failing to answer. Two quarters later, question coverage is 79 percent, all displayed measures have complete definitions, and the old 62-tile screen is retired. Three measures have been dropped because nobody used them, and one has been added. A director asks for a green-amber-red summary row. The head of service management shows a trial in which a single bad week turned the row red and caused a flurry of questions with no cause. They agree on a short written note of what changed each month in its place, and record the decision.

## Agile, AI, automation, and analytics

### Agile

Build the dashboard with its users and improve it in small steps, asking at each regular review which question it answered and which decision it changed. The caution is that a dashboard built once for a launch goes stale as questions change.

### AI

Dashboards now often include AI-assisted work, summaries written by AI, and AI-generated insights. Show AI-related measures with a quality pair, label any text an AI wrote, and have a person check it before it reaches decision makers. The caution is that a fluent AI summary beside a chart can carry more weight than the data deserves, so show the data first.

### Automation

Refresh data automatically, and show freshness and any failed load on the dashboard itself. Measure the dashboard pipeline on its own failures. The caution is that an automated dashboard keeps showing the last good data when a load fails, so make staleness visible.

### Analytics

Show each number with its trend, the count behind it, and a note on what it cannot show. The decision informed is which question the audience will act on. The caution is that colors and thresholds imply a target, so avoid red and green where no target exists.

## Sector lens

**Startup.** Keep it very small: a single page with perhaps five numbers that the whole company can read, reflecting speed of delivery, stability, customer experience, and cost. Use whatever the existing tools provide. Revisit the page whenever the product or the customers change, and resist building a data platform before the questions are clear.

**Small business.** A shared document or a simple spreadsheet chart updated monthly may be enough. Pick a handful of measures that the owner and staff actually use, write down what each means, and discuss them in a regular meeting. The risk is not too little tooling. The risk is measures that nobody trusts or acts on.

**Enterprise.** Scale requires shared definitions, a governed catalog of measures, and layered views for teams, services, portfolios, and executives. The temptation to roll everything up into one number is strong and harmful. Keep team views owned by teams, publish common definitions, and require a stated purpose for any new measure on a leadership view (see topic 1.4, Metrics governance and ownership).

**Government and public sector.** Reporting obligations and public accountability often dictate certain measures. Keep the mandated measures visible and clearly separated from those the teams use to improve, and explain to the public and to oversight bodies what the figures can and cannot show. Plain language and accessibility matter for any display shared outside the organization (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs of a dashboard program include time to interview audiences, design and build, connect and clean data, write definitions, train and support users, and maintain the display over time. The largest hidden cost is the time of people who read numbers that do not help and the meetings spent debating whose number is right. Cheap, quick builds are common, and the real cost arrives later in maintenance and in distrust.

The returns include faster recognition of trends, fewer arguments about definitions, better-targeted improvement work, and reduced reporting effort when one governed source replaces several manual reports. Build the case from your own data: hours spent on manual reports before and after, the number of competing versions of the same figure, and decisions that were informed by the display. Avoid quoting published figures about the value of analytics without a traceable source and relevance to your context. The credible claim is modest: fewer, better measures, trusted and used (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **The wall of tiles.** Every number competes for attention. Cut to a handful per audience and put detail one step down.
- **Management by color.** Status colors flip on noise and drive reactions. Show trends and use rules that respect variation.
- **No definitions.** Two teams read the same label differently. Attach a definition and an owner to every measure.
- **Dashboards as surveillance.** Individual-level views erode trust and distort the data. Show teams, services, and systems.
- **A single number to summarize everything.** It hides the trade-offs it was meant to expose. Show a balanced few.
- **Build once, never review.** The display goes stale. Review with the audience on a cadence and retire measures.
- **Vanity displays.** Large counts of activity with no outcomes. Pair every volume with an outcome measure.
- **The report nobody asked for.** Built from the data available instead of the questions asked. Start with questions.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Audience and questions | Built from available data | Some teams ask what they need | Audiences and questions written down; small views per audience | Question coverage and decision linkage reviewed and acted on | Audiences co-design views, including customers and suppliers, and questions evolve with the services |
| Design and context | Many tiles without history | Some trends and definitions | Few measures per view with trend, distribution, and definition on every measure | Variation-aware displays; companion measures for every headline | Views adapt to changing goals; shared patterns reused across teams |
| Data and upkeep | Manual, stale, unowned | Some automation; informal owners | Automated feeds, named owners, freshness shown | Freshness and definition completeness managed; retirement routine | Federated ownership with shared definitions; retirement and improvement driven by users |

## Checklist

- [ ] Each audience's questions are written down, and each view maps to them.
- [ ] Each view has no more than about nine measures, with detail one step down.
- [ ] The set is balanced across flow, quality, reliability, experience, and cost.
- [ ] Every value shows trend and context, and time measures show a high percentile.
- [ ] Every measure has a definition, a source, an owner, and a refresh time within one click.
- [ ] Targets are shown as references, and status colors follow a stated rule.
- [ ] Teams see their own data first and own the interpretation.
- [ ] No view ranks or tracks individuals.
- [ ] The dashboard has a named owner, a review cadence, and a rule for retiring measures.
- [ ] Data is pulled automatically, with the last update time visible.

## AI prompts

**Turn questions into a view.**

```text
Here are questions asked by [audience]: [list]. For each, suggest one primary
measure and one companion measure that guards against its most likely distortion.
Group them into a view of no more than seven measures, and for each state the
definition, a suggested chart type, and what context it needs. Do not invent data
or benchmarks. List your assumptions and the questions the view cannot answer.
```

**Review a dashboard for clarity.**

```text
Here is a description of our dashboard, listing each tile, its label, and its
definition: [paste]. Act as a new colleague reading it for the first time. List
which labels are ambiguous, which numbers lack context or trend, which tiles might
invite management by color, and which tiles could be retired. Do not rewrite the
data. List your assumptions.
```

**Draft a metric card.**

```text
Draft a metric card for [measure]. Include a plain definition, the formula, unit,
data source, owner, refresh interval, known gaps, the most likely way it will be
gamed, the paired guardrail, and the decision it should inform. Keep it under 200
words. Do not invent figures. Mark anything you are unsure about.
```

**Plan a dashboard review.**

```text
Plan a 45-minute quarterly review of our [team] dashboard with its audience.
Include how to check that measures were used for decisions, how to decide which to
retire, how to record events that explain trends, and how to avoid ranking people.
List the questions the facilitator should ask and the output to record.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for each measure on a proposed view.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a dashboard specification has definitions, owners, and gaming vectors for every measure.

## Key takeaways

- Start from the questions an audience asks, and give each audience a small view of its own.
- Balance the set, and pair each headline with a companion that guards against distortion.
- Show trend, distribution, and context with every value, and respect normal variation.
- Attach a definition, source, owner, and refresh time to every measure.
- Let teams see and own their data first, and never show individuals.
- Review the dashboard with its audience, and retire measures that stopped informing decisions.

## References and further reading

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
