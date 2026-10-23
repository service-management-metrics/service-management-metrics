# Customer satisfaction metrics

**Satisfaction scores tell you how people felt about a moment of service, so ask short, honest questions at the right time, read the comments before the numbers, and never let a score become a quota.**

## Overview and motivation

Operational measures say what the service did. Satisfaction measures say what it was like to receive. A ticket can close inside its target time and still leave the user stuck, and a restored service can still feel like a poor week. Agile teams ask the same thing at the end of each increment: did this help the people it was for? IT service management (ITSM), as codified by ITIL, asks it through the value a service co-creates with its customers. Satisfaction measurement is where the two questions meet.

[Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction) is a measure of how products and services meet or exceed what customers expect. In service work it is usually collected by survey, and it comes in three common forms that this topic covers:

- **Customer satisfaction score (CSAT):** a rating of a specific interaction or service, usually on a five-point scale, reported as the share of satisfied responses.
- **Net promoter score (NPS):** based on one question about how likely a respondent is to recommend a company, product, or service. Respondents who answer 9 or 10 are promoters, those who answer 0 to 6 are detractors, and the score is the percentage of promoters minus the percentage of detractors. The [net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score) was popularised by Fred Reichheld in a 2003 *Harvard Business Review* article.
- **Customer effort score (CES):** a rating of how much effort it took to get something done, or how easy it was. Its authors argued that reducing effort predicts loyalty better than delighting people. Treat that claim as a hypothesis to test in your own context, not as settled fact.

In an internal IT setting the "customer" is a colleague, and the survey is a short question after a ticket or a release. The principles are the same, and the ethical duties are larger, because the people you ask work with you tomorrow.

Surveys are a form of [survey methodology](https://en.wikipedia.org/wiki/Survey_methodology), a field with decades of findings about how question wording, timing, and sampling change answers. Teams that skip it tend to produce scores that move for reasons unrelated to service quality. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies with extra force here: when staff are rewarded for a high score, they learn to ask for it (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic gives you the definitions, the data hygiene, and the habits that keep satisfaction measures honest. The next topic extends them toward a fuller view of experience (see topic 6.2, Experience level agreements).

## Key principles

- **Ask about a specific moment.** A survey tied to a closed ticket or a release gives sharper answers than a general annual question.
- **Keep it short.** One rating and one open comment beat ten questions that most people skip.
- **Read the comments.** The score tells you how much, and the words tell you why.
- **Report who answered.** A score without a response rate and a respondent mix is a rumour.
- **Close the loop.** People who report a bad experience should hear back.
- **Compare to yourself over time.** Cross-company benchmarks hide differences in method, audience, and culture.
- **Protect respondents.** Collect only what you need, say how it will be used, and do not rank individuals on it.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Share of responses that are satisfied, for a defined interaction type | responses rated 4 or 5 on a five-point scale / valid responses | percent | Post-interaction survey tied to the ticket or release | Service desk; incident management; service level management | Stakeholder review feedback | Weekly or monthly |
| NPS | Promoters minus detractors for a defined service and audience | percent answering 9 or 10 minus percent answering 0 to 6 | points, range -100 to 100 | Relationship survey, sent at a fixed interval | Continual improvement; service level management | Product outcome review | Quarterly |
| CES | Average or share-favourable rating of how easy it was to get something done | favourable responses / valid responses, or mean rating | percent or mean | Post-interaction survey tied to the ticket, request, or release | Service request management; service desk | Usability feedback in refinement | Monthly |
| Survey response rate | Share of invited users who responded | responses received / surveys delivered | percent | Survey tool and ticket system | Measurement and reporting | Feedback participation in reviews | Monthly |
| Respondent coverage | How closely the respondent mix matches the user population on agreed dimensions | share of respondents in each group compared with share of users in that group, per group | percentage points | Survey tool joined to the user directory or ticket data | Measurement and reporting | Stakeholder map | Quarterly |
| Comment theme share | Share of free-text comments assigned to each theme | comments in theme / comments coded | percent | Coded survey comments | Continual improvement | Retrospective themes | Monthly |
| Detractor follow-up time | Time from a low rating to a documented contact with the user | timestamp of follow-up note minus timestamp of low rating, median and 85th percentile | hours or days | Survey tool and ticket system | Incident management; continual improvement | Feedback loop in the working agreement | Monthly |

The clocks and boundaries matter. CSAT and CES count only responses to the specific interaction, never general mood. Detractor follow-up time starts at the moment the low rating is recorded, not when someone first reads it. Exclude test records and responses from members of the team being measured.

## Recommendations

### Design the instrument

**1. Choose one question per purpose.** Use CSAT after an interaction to learn how that interaction went, CES after something the user had to do to learn where friction sits, and NPS at a regular interval to learn about the overall relationship. Mixing the three in one form invites survey fatigue and muddled results. If you can afford only one, pick the one that matches the decision you need to make.

**2. Write neutral, specific wording.** "How satisfied were you with how your request was handled?" is better than "How great was our service?" Avoid double-barrelled questions that ask about speed and friendliness at once. Offer a consistent scale, label its ends, and keep the order of answers the same each time. A [Likert scale](https://en.wikipedia.org/wiki/Likert_scale) is a common design, and small changes in labels can shift results, so do not change them casually.

**3. Add one open question.** "What is the main reason for your rating?" costs the respondent little and gives the team its richest data. Comments explain the score, expose problems the numbers cannot, and give agents something to learn from. Read them in a regular review, aloud if possible.

**4. Time the survey close to the event.** Send the question soon after the ticket resolves or the release lands, while memory is fresh. Do not send it at the moment of closure by an agent who is hoping for a high mark. A short delay, set by the system, removes the temptation to coach the answer.

### Make the numbers trustworthy

**5. Report response rate and respondent mix next to every score.** A satisfaction score from 4 percent of users is a statement about the respondents. Compare who answered with who was invited, using attributes you already hold, such as region, service, or type of request. Large gaps mean the score needs a caution label. Representativeness is a core theme of [response bias](https://en.wikipedia.org/wiki/Response_bias) research, and the point for a service team is simply to look.

**6. Show uncertainty.** Small samples swing widely. A [margin of error](https://en.wikipedia.org/wiki/Margin_of_error) or a [confidence interval](https://en.wikipedia.org/wiki/Confidence_interval) shown beside a monthly CSAT stops the team from reacting to noise (see topic 1.6, Statistical literacy for service metrics). If a team has fewer than a few dozen responses in a period, report counts and read comments, not percentages.

**7. Avoid selecting who gets asked.** If the person who closed the ticket decides whether to send the survey, scores rise for the wrong reason. Send the survey automatically to every eligible interaction, or to a random sample if volume is high. Document the rule, including any exclusions, in the metric register.

**8. Separate the satisfaction of a person from the performance of a person.** Satisfaction depends on factors an individual agent does not control: the product's quality, the queue, the policy, the user's mood. Do not rank agents by CSAT. Use it at the team and service level, and use comments for coaching conversations that the agent welcomes.

### Act on what you hear

**9. Close the loop with unhappy users.** Contact people who report a bad experience, ask what would have helped, and record what you learn. Set a target for the follow-up time and make the follow-up a conversation, not a request to change the score. Changing a score on request is a distortion, so the follow-up should aim at fixing the problem and learning.

**10. Code comments into themes and track them.** Agree a short list of themes, such as "had to repeat myself," "slow response," "fix did not last," "unclear communication," and "friendly and helpful." Code a sample each month, by hand or with a tool, and have a person check the results. Trends in themes often show problems before a score moves.

**11. Link satisfaction to operational data.** Compare CSAT with resolution time, reopen rate, and the number of contacts per issue. The pairs tell you whether speed is buying satisfaction or whether the team is fast and wrong. Use them to find stories to investigate, not to prove a rule.

**12. Treat benchmarks with care.** Published or vendor-supplied figures for satisfaction scores depend on method, audience, and region, and your own history is a better comparator. If you use an external comparison, state its source, method, and date, and do not set a target from it without testing whether your method matches. Never invent a benchmark.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| CSAT | Agents coach users to give top marks; surveys sent only after easy tickets; difficult tickets closed without a survey | Automatic survey to every eligible ticket; response rate and respondent mix; reopen rate |
| NPS | Surveying only friendly users; timing the survey after a good event; asking face to face; relabelling scale points | Fixed audience and schedule in the register; respondent coverage; read the comments of detractors |
| CES | Removing steps from the form in a way that moves the work elsewhere; asking only after smooth requests | Count of contacts per issue; request fulfilment time and rework (see topic 3.5, Service request fulfilment metrics) |
| Survey response rate | Inviting only people likely to answer; sending the survey to a different list each time | Invitation rule written down; compare invitees with the user population |
| Respondent coverage | Dropping hard-to-reach groups from the comparison; reweighting without saying so | Publish the dimensions and the method; show the unweighted result beside the weighted one |
| Comment theme share | Coding comments to avoid bad themes; merging themes so none looks large | Second person codes a sample; keep the theme list stable and log changes |
| Detractor follow-up time | Logging a note without contacting the user; contacting the user to ask for a better score | Check follow-up notes for content; ask the user in the next survey whether anyone contacted them |

A healthy reading is a stable response rate, a respondent mix close to the user mix, a score that moves with the experience users describe in comments, and unhappy users who say that someone got back to them.

## Trade-offs: pros and cons

| Measure | Strength | Weakness |
| --- | --- | --- |
| CSAT | Simple, quick, tied to a specific moment | Easily inflated; says little about the whole relationship |
| NPS | One question, easy to track over time | Hides the reasons; one number compresses a wide distribution; cultural differences affect the scale |
| CES | Points directly at friction the team can remove | Less widely understood; the evidence is contested |
| Annual long survey | Rich, covers many services | Slow, low response, hard to act on |
| Comments only | Concrete, memorable | Hard to compare over time; vulnerable to the loudest voices |
| Behavioural signals | No survey burden; objective | Does not capture feelings; can misread cause |

The prose answer is to combine a short interaction survey, an occasional relationship survey, and the comments, and to read all three with the operational data. Satisfaction measures work as a conversation between users and the team. They fail as a scoreboard.

## Questions to discuss with your team

**1. What do we do with a score that is low and a score that is high?**
Ask the team to describe, in practice, the last time a low score led to a change. Then ask the same for a high score. If the answers are vague, the survey is a ritual. The facilitator should look for a concrete link from the data to an action, and agree on one place where that link will be recorded.

**2. Who answers our surveys, and who does not?**
Ask the team to name the groups of users they hear from least. Compare with the invitation list and the user directory. The conversation often reveals that the quietest users have the hardest problems. Agree one way to reach a quiet group this quarter, such as a short call or a different channel.

**3. When in the interaction do we ask, and who decides?**
Walk through the path from resolution to survey. Find every point where a person can influence whether, when, or how the survey is sent. Agree which of these points should be automated. The facilitator can ask what an agent might do to protect a score, as a design question and not an accusation.

**4. What does a detractor hear from us after they respond?**
Look at a few recent low ratings and read the follow-up notes. Ask whether the user would feel heard. Discuss how to make the follow-up useful without asking for a changed rating. Decide who owns the follow-up and what the target time is.

**5. Which comments from the last month changed what we did?**
Print or display ten comments at random. Ask the team which were acted on, which were not, and why. This keeps the focus on the words and builds a habit of reading them. Agree to code themes for the next month and to review the trend.

**6. Which published figure are we tempted to compare ourselves to, and is the comparison fair?**
Name the figure, its source, its method, and its audience, then compare each with your own. Ask whether it would change a decision. If not, set it aside and use your own trend. The facilitator should record the answer in the metric register.

## Four perspectives

### Product and delivery teams

Product teams use satisfaction feedback to decide what to fix or build next, and short surveys after a release give a faster read than the next quarterly review. Delivery teams should connect comments to backlog items, show users what changed, and avoid treating a score as a delivery goal. A rise in effort or confusion comments after a release is a signal to look at the release, not at the survey.

### Service and operations teams

Service desks collect most of the interaction data and feel the pressure of the score most. Operations teams should send surveys automatically, publish the sampling rule, and use comments for team learning. They should keep CSAT beside reopen rate and repeat contacts, so that quick closures do not look like good outcomes (see topic 3.1, Service desk metrics).

### Leadership and governance

Leaders set the climate for gaming. A request for "95 percent satisfaction by year end" teaches staff to protect the number. Leaders should ask for response rate, respondent mix, and the top comment themes, fund the fixes that comments reveal, and keep satisfaction out of individual pay and ranking. Governance should expect a stated method for any figure it reports externally.

### Customers and users

Users give their time and their candour. They deserve a short survey, a clear reason for asking, a promise about how their answers will be used, and a reply when they report a problem. Where the survey is not anonymous, say so. Users who see nothing change will stop answering, and the silence will look like satisfaction.

## In practice: a service management example

A regional hospital's IT department runs a service desk and a small team that builds clinical applications. The numbers below are illustrative.

The service desk's monthly CSAT is 92 percent, calculated from 140 responses out of about 3,100 closed tickets, a response rate of 4.5 percent. Leadership is pleased. The service manager reads the comments and notices that many positive responses come from staff in administration, while nurses on night shifts barely appear. She compares the respondent mix with the user directory and finds that night-shift staff are about 18 percent of users and 3 percent of respondents.

The team makes three changes. The survey becomes a two-question form with a rating and one comment, sent automatically by the ticket system four hours after resolution, to every ticket. A text-message version is offered to staff on shifts. The monthly report now shows CSAT with the response rate, the confidence interval, the respondent mix against the user mix, and the top five comment themes.

Within two months the response rate rises to about 11 percent and the CSAT drops to 84 percent. The comment themes show "had to call back" and "fix did not last" as the top two complaints, concentrated in the clinical systems. The head of IT tells the board that the old score reflected who answered, and that the new score is a better guide. The product team adds a backlog item to fix the recurring fault behind the callbacks, and the service desk begins contacting each user who gives a rating of 1 or 2 within one working day. In the next quarter, the repeat contact rate for the clinical systems falls, and the share of "had to call back" comments falls with it. The team records the decision in its log and does not set a CSAT target.

## Agile, AI, automation, and analytics

### Agile

Ask for feedback continuously and in small amounts, and review comments with stakeholders at each regular improvement conversation. The caution is that survey fatigue lowers response rates and skews who answers.

### AI

AI can summarise comments and sentiment at volume, and AI-assisted interactions may be rated differently from human ones. Report satisfaction separately for AI-handled and human-handled contacts, pair scores with comment themes, and have a person read a sample. The caution is that a sentiment model may misread tone or language, so check it against a manual sample.

### Automation

Trigger surveys automatically at a chosen moment, and measure the survey process on response rate and respondent mix. The caution is that automatic surveys after only successful contacts bias the score upward.

### Analytics

Show scores with the response count and respondent mix, and read comments before numbers. The decision informed is which journeys to improve. The caution is that scores over few responses move a lot, so show the count.

## Sector lens

**Startup.** Close contact with users makes short conversations better than surveys at first. Add a one-question survey once volume grows, and keep reading every comment. Resist the urge to publish a score before you have enough responses to mean something.

**Small business.** A single unhappy customer can matter more than a score. Use the survey as a prompt to talk to people, and keep records of the follow-ups. Vendor-supplied satisfaction reports deserve scepticism about method.

**Enterprise.** Scale brings segments and the temptation to roll up. Keep scores by service and audience, publish the method, and avoid averaging unlike services into one number. Use a stable survey platform with automatic sending, and treat any cross-team ranking with caution.

**Government and public sector.** Public bodies often have formal obligations to collect user feedback and to publish results, along with duties on accessibility and privacy. Offer accessible survey channels, protect respondents' identities, and publish methods with results. Where a satisfaction figure appears in a contract or a statutory report, define it exactly and show the guardrail beside it (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The direct costs are survey tooling, which many ticket systems already include, an hour or two each month to review comments and code themes, and the time to follow up with unhappy users. The larger cost is the discipline to act on what you hear. There is no need for a new platform to start.

The return shows up as fixes users value and avoided waste. Comments tell you where friction sits, so you can remove causes of repeat contacts and failed fixes instead of adding staff to handle them. A better view of who is not answering protects you from decisions based on a self-selected few. Describe the benefit in terms of the problems found and removed, and measure your own baselines before and after: repeat contact rate, reopen rate, and time to first useful response. Do not use a made-up percentage to justify the programme. If you need figures, build them from your own data.

## Anti-patterns and pitfalls

- **Treating the score as a target.** It will be met by selecting who is asked or coaching the answer. Use it as a question and pair it with comments and operational measures.
- **Surveying only after easy tickets.** Send to every eligible interaction, automatically.
- **Ranking agents by CSAT.** It penalises people who take hard cases. Use team and service views and learn from comments.
- **Asking for a better score.** Following up on a low rating should aim at fixing the problem. Do not request a change.
- **Reporting a score without a response rate.** Always show who answered and how many.
- **Changing the question and keeping the trend.** Log changes and mark the break in the chart.
- **Importing a benchmark without its method.** Compare with your own history first.
- **Collecting comments and never reading them.** Put a review in the calendar and assign an owner.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Instrument and sampling | Occasional ad hoc survey | Survey exists for some services, sent by hand | Short survey sent automatically to all eligible interactions | Sampling rule, wording changes, and exclusions logged and reviewed | Instruments aligned across teams and suppliers, and revised with users |
| Data quality | Score only | Response rate reported | Response rate, respondent mix, and uncertainty reported | Respondent coverage managed; coding checked by a second person | Shared view of experience across services, with users involved in interpretation |
| Action and follow-up | Scores reported, nothing changes | Occasional fixes from comments | Detractor follow-up with a target time; themes tracked | Themes drive funded improvement work and are linked to operational data | Closed loop spans teams and suppliers; users see what changed |

## Checklist

- [ ] Each survey has one stated purpose and one decision it informs.
- [ ] Questions are short, neutral, and include one open comment.
- [ ] The survey is sent automatically to every eligible interaction or to a documented random sample.
- [ ] Response rate and respondent mix are shown beside every score.
- [ ] Uncertainty is shown, and small samples are reported as counts.
- [ ] No individual agent is ranked by satisfaction.
- [ ] A named person follows up with low ratings within an agreed time.
- [ ] Comments are coded into a stable list of themes and reviewed monthly.
- [ ] Wording and sampling changes are logged and marked on charts.
- [ ] Respondents are told how their answers are used, and personal data is protected.

## AI prompts

**Review a survey instrument.**

```text
I run [service or team] for [type of organisation]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Code survey comments into themes.**

```text
Here are [number] anonymised survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Check representativeness.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Plan a closed-loop follow-up.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a satisfaction metric before you publish it.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised survey metric entry keeps its gaming vector and guardrail.

## Key takeaways

- Satisfaction scores describe how a moment of service felt, so tie surveys to specific events and keep them short.
- Always report response rate, respondent mix, and uncertainty with the score.
- Comments explain the numbers, so read them every month and code them into themes.
- Send surveys automatically and never ask users to change a rating.
- Use satisfaction at the team and service level, never to rank people, and treat external benchmarks with care.
- Close the loop: people who report a bad experience should hear back and see change.

## References and further reading

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
