# Experience level agreements

**An experience level agreement adds the question "how did it feel to use?" to the question "did the service meet its target?", and it works only when the experience measures are chosen with users and kept beside the operational ones.**

## Overview and motivation

A [service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) records what a provider commits to deliver, usually in terms the provider can count: availability, response time, resolution time. Those measures are useful and they are also incomplete. A team can meet every target on the dashboard while users spend their week working around slow logins, repeating themselves to a service desk, and waiting for approvals. This gap between green reporting and unhappy users is sometimes called the watermelon effect: green on the outside, red on the inside (see topic 5.1, SLA, OLA, and XLA metrics).

An **experience level agreement (XLA)** is an agreement, between a provider and the people who use a service, about the experience the service should give. It states desired outcomes and feelings, such as "I can start work within a few minutes of arriving" or "I trust that my request will be handled," and it names the measures that will show whether they are being met. The term is used across the IT service management (ITSM) community, and its exact definition varies between authors and vendors. Check the framework owner's current publications before describing an XLA as part of ITIL, and state which usage you follow. This topic treats the XLA as a practical idea: an agreement that places experience measures next to operational ones.

The idea has roots outside IT. [User experience](https://en.wikipedia.org/wiki/User_experience) is the overall experience of a person using a product, system, or service, and [customer experience](https://en.wikipedia.org/wiki/Customer_experience) is the sum of a customer's interactions with an organization over time. [Usability](https://en.wikipedia.org/wiki/Usability) concerns how effectively, efficiently, and satisfyingly people can reach their goals. Agile teams know this territory from design thinking and user research, and from stakeholder reviews where users react to working software. An XLA brings the same attention to run-time service.

Experience is hard to measure and easy to distort. A survey that only reaches happy users, a sentiment score tuned to rise, or a single "experience index" that nobody can explain will mislead as surely as a gamed ticket time. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies in full: experience measures are conversation starters, not quotas (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic builds on the survey measures in the previous topic (see topic 6.1, Customer satisfaction metrics) and adds behavioural and journey-based measures that do not depend on asking.

## Key principles

- **Start with outcomes people care about.** Ask users what a good day looks like, and write agreements in their words.
- **Pair experience with operations.** An XLA sits beside an SLA, not in place of it.
- **Use a few measures from different angles.** Combine what people say, what they do, and what the system records.
- **Measure journeys as well as touchpoints.** An experience is the whole path from need to outcome.
- **Be honest about uncertainty.** Experience data is noisy, and small groups need protection.
- **Agree targets with users, and revise them.** An XLA is a living agreement, reviewed with the people it describes.
- **Never use experience data to rank individuals.**

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Experience score | Average rating of an agreed experience statement, for a service and audience | mean rating across valid responses to one statement on a fixed scale | scale points | Short pulse survey, sent on a schedule | Service level management; continual improvement | Stakeholder review feedback; product outcome review | Monthly |
| Sentiment trend | Direction of tone in free-text comments for a service | share of comments coded positive minus share coded negative, per period | percentage points | Coded survey comments and ticket comments | Continual improvement | Retrospective themes | Monthly |
| Friction events per user | Count of signals that a user hit trouble, normalized by active users | (repeat contacts + reopened items + failed logins beyond a set number + abandoned requests) / active users | events per user | Ticket system, identity logs, request portal | Service desk; incident management | Defects found in use | Monthly |
| Time lost to IT issues | Estimated time users lose to service problems in a period | self-reported minutes lost per user, or measured time in degraded state weighted by users affected | minutes per user | Pulse survey; monitoring joined to user counts | Availability management; incident management | Cycle time lost to blockers | Quarterly |
| Journey completion rate | Share of users who finish a defined journey without abandoning or seeking help | users completing journey without a help contact / users starting journey | percent | Portal analytics; ticket links | Service request management; service catalogue management | Task success in usability tests | Monthly |
| XLA attainment | Share of agreed experience targets met in the period | targets met / targets agreed | percent | The XLA register | Service level management | Delivery goal achievement | Quarterly |
| Experience gap | Difference between SLA attainment and experience score for the same service | SLA attainment rank minus experience score rank across services, or a written comparison | rank difference or note | SLA reports and pulse survey | Service level management | Definition of done versus user feedback | Quarterly |

Define the audience and the period for every measure. State how small groups are protected: for example, no result is shown for any group of fewer than ten people. Friction events count signals, not blame, so an event is attached to a service and a user group, never to a named person's performance review.

## Recommendations

### Design the agreement with users

**1. Interview before you measure.** Spend time with a sample of users from each important group and ask: What does a good day with this service look like? Where does it waste your time? What would you stop doing if it worked? Use [human-centred design](https://en.wikipedia.org/wiki/Human-centered_design) habits: observe real work, and write what you hear in the user's words. The statements that result become the experience goals of the agreement.

**2. Write experience statements as outcomes.** "I can get a new starter productive on their first morning" says more than "new starter access request resolved in two days." Keep each statement short, in the first person, and tied to one service. Aim for three to five statements per service so that people can remember them.

**3. Choose measures from three angles.** For each statement, pick one measure from what people say (a pulse question or comment theme), one from what people do (journey completion, repeat contacts, abandoned requests), and where possible one from what the system records (latency for the steps in the journey). When the three disagree, you have found something to investigate.

**4. Agree targets lightly.** Early on, set a direction ("reduce time lost") and a review date instead of a hard number. Hard targets for new experience measures invite gaming before the measure is understood. When a target does appear, make it a range, and say who agreed to it.

### Collect and read the data

**5. Use short, regular pulse questions.** One question about one statement, asked at a regular interval, is easier to answer than a long annual survey. Rotate the statements, keep wording stable, and avoid asking the same person more than once in a set period. Link the pulse design to the survey principles in the previous topic (see topic 6.1, Customer satisfaction metrics).

**6. Read comments with a method.** [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) tools can sort large volumes of text, and they misread sarcasm, jargon, and context. Treat tool output as a first pass, have a person check a sample every month, and keep a short list of themes that you code by hand. The point of the analysis is to find topics to talk about with users, not to produce a score.

**7. Add behavioural signals from the journey.** Instrument the journeys users care about, with their knowledge: where do they start, where do they drop out, and where do they ask for help? [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring) of page load times, errors, and steps gives a view that surveys cannot. Tell users what you collect, keep it to what you need, and aggregate it before sharing.

**8. Protect small groups and individuals.** Experience data can reveal who is struggling. Aggregate results, suppress groups below an agreed size, and never use the data in performance reviews. Decide who may see raw comments, and store them accordingly. In regulated settings, check with privacy specialists before collecting behavioural data.

### Use the agreement

**9. Show SLA and XLA side by side.** On the same page, display operational attainment and the experience measures for each service. The pairing is the point: a green SLA with a falling experience score is a prompt for a conversation, and a green experience score with failing SLAs deserves a look at what users are not being told.

**10. Hold a regular experience review with users.** Meet quarterly with representatives of the user groups, show the data, ask what it means, and agree one or two improvements to try. Include the service desk and the product team, since the cause of a poor experience often sits in the product, not in the support.

**11. Fund the fixes.** An agreement that identifies friction and then leaves it in place teaches users that the measures are theatre. Put the top two or three experience problems on the backlog with owners and dates, and report on them at the next review. See the continual improvement metrics later in this book (see topic 9.5, Continual improvement metrics).

**12. Revise the agreement as services and users change.** Retire statements that no longer matter and add new ones. Log the changes and mark them on trend charts, as you would for any metric definition.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Experience score | Surveying satisfied users only; timing the survey after good events; rewording the statement so it is easier to agree with | Response rate and respondent mix; stable wording log; read comments |
| Sentiment trend | Tuning the tool or the theme list until the trend rises; excluding negative channels | Human check of a monthly sample; keep a fixed coding guide and log changes |
| Friction events per user | Redefining events so fewer count; discouraging repeat contacts by making the desk hard to reach | Contact volume by channel; abandonment rate at the service desk (see topic 3.1, Service desk metrics) |
| Time lost to IT issues | Asking in a way that anchors low estimates; counting only major incidents | Compare self-reported time with measured degraded time; survey wording review |
| Journey completion rate | Defining the journey so narrowly that failure is out of scope; steering hard cases to a different channel | Journey definition in the register; help-contact rate and escalations |
| XLA attainment | Setting targets that are already met; defining a very small set of targets | Review target-setting with users; show attainment with trend and target history |
| Experience gap | Choosing the services or periods that look best; changing which SLAs are compared | Fixed comparison set agreed in advance; show all services |

A healthy reading is an experience picture that matches the comments and the user review conversation, a small set of measures that change slowly and for reasons the team can explain, and a backlog of experience fixes that gets shorter.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| SLA only | Clear, countable, contractual | Misses what users feel; can be green while users are unhappy |
| XLA only | Close to what users value | Harder to measure and compare; weak as a basis for contracts with suppliers |
| SLA with XLA | Gives both views and exposes the gap | More work; needs trust and judgement in reading disagreements |
| Survey-based experience measures | Direct voice of users | Response bias; burden on respondents |
| Behavioural measures | No survey burden; objective | Needs instrumentation and privacy care; shows what happened, not why |
| Single experience index | Easy headline | Hides detail; easy to game and hard to explain |

The prose answer is to use the XLA as an addition, introduced for a few services where the gap between operations and experience is already visible. Do not replace contractual SLAs with experience measures that suppliers cannot control. Keep the legal and commercial commitments in the SLA, and use the XLA to drive improvement and conversation.

## Questions to discuss with your team

**1. For our most important service, what does a good day look like for users, in their words?**
Gather two or three users, or reuse recent interviews, and write down their statements. The facilitator should resist rewording them into operational terms. Compare the statements with the current SLA and ask which statements it covers, and which it ignores. The gaps are candidates for experience measures.

**2. Where do our green dashboards and our users' stories disagree?**
Ask the team for a recent case in which a service met its targets and users complained. Trace the case through the data: what did we measure, and what did we miss? The conversation will often surface a missing step, a handoff, or a clock that stopped early. Record the case as an example for the next review with users.

**3. Which three measures would we use to know whether this experience statement is true?**
Pick one statement and choose one measure from what people say, one from what they do, and one from what the system records. Ask what each could miss, and how each could be gamed. Agree the smallest set that would convince a sceptical user.

**4. What do we collect about users that they might not expect, and would they be comfortable with it?**
List behavioural data sources and the purpose of each. Ask a user representative to react. The facilitator should treat discomfort as information about the design, not as an obstacle. Decide what to stop collecting, what to aggregate, and who may see the raw data.

**5. What would we do if the experience score fell while every SLA stayed green?**
Rehearse the response. Who looks first, what do they check, and who do they talk to? Decide whether the team would trust the experience score or look for ways to dismiss it. The answer shows how seriously the team takes the agreement.

**6. Which experience fixes have we promised, and what happened to them?**
Review the last two review meetings with users. For each commitment, show the date, owner, and outcome. If the list is empty or stale, discuss why. Agree one fix to deliver before the next review and a way to tell users it happened.

## Four perspectives

### Product and delivery teams

Product teams hold much of the cause of a poor experience: confusing screens, slow steps, unclear errors. Experience measures give them evidence from live use, and they feed refinement directly. Teams should read the comment themes before each planning session, and connect journey measures to the backlog. They should not treat the experience score as a team target. It is information about the service they share with operations.

### Service and operations teams

Operations teams see the friction first: repeat contacts, workarounds, and angry callers. Experience measures give them a way to show what the SLA hides, and a reason to fix causes instead of closing tickets faster. They should hold the line on definitions and sampling, avoid steering users to channels that look better, and read the unhappy comments in full (see topic 3.1, Service desk metrics).

### Leadership and governance

Leaders choose whether an XLA is a conversation or a scoreboard. They should ask what the experience data says about where to invest, avoid linking pay to an experience index, and protect the privacy of staff data. Governance should ask for the definitions, the sampling, and the history of changes, and should treat an unexplained jump in an experience measure as a reason to check the method.

### Customers and users

Users are the authors of the agreement. They should be invited to describe what good looks like, shown the results, and told what changed. They should know what is collected about them and why, and have a way to say no. Users who are asked often and see nothing improve will stop answering, and the silence will make the data look better than reality.

## In practice: a service management example

A mid-sized professional services firm runs an internal IT service for 1,800 staff. The numbers below are illustrative.

The monthly SLA report shows 99.8 percent availability for the collaboration platform and 96 percent of incidents resolved within target. The IT director is satisfied, yet consultants at client sites keep complaining about slow sign-in. The service manager proposes an XLA pilot for the collaboration platform.

In interviews with 12 consultants, three statements emerge: "I can join a client call within two minutes of deciding to," "I don't have to ring IT to get back into my account," and "when something breaks, I know what is happening." The team chooses measures for each. For the first, they take the pulse rating of the statement and the measured time from sign-in start to call join from the client's real user monitoring, aggregated by region. For the second, they count password reset contacts per active user per month. For the third, they track the share of incidents where the status message was updated within 30 minutes, and ask the pulse question about it.

The first two months of data show that median sign-in to call join time is fine in the head office region but long in two others, and that password reset contacts per user are three times higher for staff on managed laptops than on others. The experience score for the first statement is 3.1 out of 5 against 4.2 for office-based staff. The SLA is green on both. The service manager takes the finding to the user review. The team agrees two improvements: tuning the single sign-on configuration for remote regions, and changing the token refresh settings on managed laptops. Three months later, the median time falls, the reset contacts per user fall, and the experience score rises to 3.8. The director agrees to keep the XLA for this service, to add it to one more, and to set no numeric target until the next review.

## Agile, AI, automation, and analytics

### Agile

Agree experience measures with users and revisit them as the service evolves, with continuous stakeholder involvement. The caution is that an experience target set by the provider alone will not describe what users feel.

### AI

AI features change the experience directly, so include journeys that use them and measure the user's outcome, not the model's confidence. Pair experience scores with task completion and escalation to a person. The caution is that a chatbot that feels pleasant while failing the task flatters the score.

### Automation

Collect friction events and journey completion automatically, with consent and privacy rules, and measure the collection on coverage. The caution is that automatic experience data about individuals can become surveillance, so aggregate and minimize.

### Analytics

Report the experience score with operational measures on the same page, and the gap between them. The decision informed is which service to improve even though its SLA is green. The caution is that the gap can be a measurement artefact, so check the sample.

## Sector lens

**Startup.** Close contact with users makes interviews easy. Resist building a framework: write three experience statements for the core service, ask users about them every month, and add one behavioural measure. Formal agreements come later.

**Small business.** Staff are few and often share a manager with IT. Use conversations and a very short monthly pulse. Be careful with behavioural data, since small groups are easily identifiable.

**Enterprise.** Scale brings many user groups and suppliers. Define experience statements per service and persona, keep dashboards per service, and avoid a single company-wide experience index. Align the XLA with supplier contracts so that suppliers contribute data without being held to measures they cannot influence.

**Government and public sector.** Services often face the public as well as staff, with duties around accessibility, plain language, and equal access. Include accessibility in the experience statements and the measures, test with users who rely on assistive technology, and protect personal data in line with the law. Where public reporting is required, report methods with results (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is moderate. User interviews take a few days per service. A monthly pulse survey needs a survey tool, which many organizations already have. Behavioural measures need some instrumentation, which may come from existing monitoring and portal analytics. The review with users takes a few hours each quarter. Coding comments takes an hour or two each month.

The return lies in finding problems that SLAs do not show, such as slow journeys in specific regions or devices, and in directing improvement money to what users value. Time lost to IT issues can be turned into a cost with your own staff rates if you measure it carefully. Avoid generic claims about productivity gains. Build the case from your own baseline: time lost per user, friction events per user, and repeat contacts, before and after a fix. Also count the avoided cost of workarounds, such as shadow tools adopted because the official service is awkward.

## Anti-patterns and pitfalls

- **Replacing SLAs with XLAs.** Contracts need countable commitments. Keep both and show them together.
- **One composite experience index.** It hides the cause and invites gaming. Show a few separate measures.
- **Defining experience without users.** Statements written in a meeting room describe the provider's view. Interview and test with users.
- **Surveying until people stop answering.** Keep pulses short and rotate topics.
- **Collecting behavioural data without telling anyone.** It breaks trust and may break the law. Be open about what is collected and why.
- **Using experience data in performance reviews.** It turns a learning tool into surveillance and destroys honest reporting.
- **Fixing the measure, not the cause.** Do not redirect users to a friendlier channel to improve a number. Fix the journey.
- **Leaving the findings on a slide.** Fund and track the experience fixes.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Experience goals | Implicit or absent | Written by the provider for some services | Statements written with users for key services | Statements reviewed and revised each quarter with user groups | Shared across services and suppliers, owned jointly with users |
| Measurement | Occasional surveys | Pulse survey for one service | Three-angle measures (say, do, system) for each statement | Measures trended, protected for small groups, and compared with SLAs | Data combined across providers, with user-controlled privacy choices |
| Action | Complaints handled one by one | Fixes made ad hoc | Top experience problems on the backlog with owners | Fixes funded, tracked, and reported back to users | Improvement coordinated across teams, suppliers, and users, with learning shared |

## Checklist

- [ ] Each XLA service has three to five experience statements written with users.
- [ ] Each statement has measures from at least two angles (say, do, system).
- [ ] SLA and experience measures appear on the same page for each service.
- [ ] Pulse surveys are short, regular, and stable in wording.
- [ ] Comments are coded by a stable guide and a person checks a monthly sample.
- [ ] Groups below an agreed size are suppressed in reports.
- [ ] Behavioural data collected is disclosed to users and limited to need.
- [ ] No experience measure is used in individual performance reviews.
- [ ] A quarterly review with user representatives is on the calendar.
- [ ] The top experience problems have owners and dates on the backlog.

## AI prompts

**Draft experience statements from interview notes.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Find the gap between SLA and experience.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Review a privacy approach for behavioral measures.**

```text
We plan to collect these behavioural signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Prepare a quarterly experience review with users.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the guardrail for an experience measure before you add it to a dashboard.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an XLA metric entry carries its gaming vector and guardrail.

## Key takeaways

- An XLA adds experience goals and measures to operational targets, and it complements the SLA.
- Write experience statements with users, in their words, and tie each to measures from what people say, do, and the system records.
- Show SLA and experience results together, and treat disagreement as a prompt to investigate.
- Protect users: disclose what you collect, aggregate it, suppress small groups, and keep it out of performance reviews.
- Avoid a single experience index and avoid hard targets before the measures are understood.
- Fund the fixes that the data reveals, and tell users what changed.

## References and further reading

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
