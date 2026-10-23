# Postmortem and learning metrics

**A review that is written, filed, and forgotten has taught nobody anything, so measure whether reviews happen, whether they are good, whether their actions finish, and whether the same causes stop coming back, and keep the whole practice blameless so that people keep telling the truth.**

## Overview and motivation

Every service fails sometimes. What separates a team that gets steadily better from a team that repeats its worst week is what happens in the days after the failure. A [postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) is a written account of an incident or near miss: what happened, how it was detected and handled, what conditions made it possible, and what the team will change. ITIL calls the activity a post-incident review, and this topic uses the two names interchangeably. A regular team reflection is a close relative that looks at ordinary work instead of an outage.

This topic covers the measures that tell you whether that learning loop works. It asks four questions. Do the reviews that should happen actually happen? Are they good enough to find something real? Do the actions they produce get finished? And does the same cause keep returning anyway? A fifth question runs underneath the others: do people feel safe enough to describe what really happened?

The topic sits between two neighbours and avoids repeating them. Major incident metrics (see topic 3.4, Major incident metrics) measure the timeliness of the review and the follow-through of its actions for declared major incidents, and they are the home of those two measures in that narrow setting. Problem management metrics (see topic 4.1, Problem management metrics) own the problem record, the known error, and the time to a permanent fix. This topic widens the view to every severity of incident, to near misses, and to team retrospectives, and it owns the quality of the learning itself: coverage, depth, action closure across all sources, recurrence of causes, and the blameless signals that keep the data honest.

### Terms used in this topic

- **Postmortem or post-incident review:** a structured, blameless examination of an incident after service is restored, ending in a written record.
- **Near miss:** an event that could have caused an incident or harm but did not, for example a failed deployment caught in a test environment or an alert that fired minutes before users noticed.
- **Action item:** a specific change with a named owning team, a due date, and a way to tell when it is done.
- **Contributing factor:** a condition that made the incident possible or worse. Most incidents have several. A single "root cause" is often a simplification, and [root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis) is best treated as a search for conditions, not for a culprit.
- **Cause class:** a stable label from a short, agreed list (for example "capacity limit," "configuration drift," "missing monitoring," "unclear ownership") used to spot recurrence. It describes a system condition, never a person.
- **Blameless:** a review style that asks how the system allowed a reasonable person to act as they did, and does not ask who to punish. It is a practice, and it is tied to the idea of a [just culture](https://en.wikipedia.org/wiki/Just_culture), in which honest mistakes are treated as learning and reckless acts are still handled separately.
- **Information Technology Infrastructure Library (ITIL):** the widely used framework for IT service management (ITSM). This topic refers to practices as described in ITIL 4 (2019), and the book as a whole is dated as of October 2026. See [ITIL](https://en.wikipedia.org/wiki/ITIL).

### How the agile and ITIL views differ

ITIL contributes structure. In ITIL 4, incident management restores service, problem management reduces the likelihood and impact of incidents by finding and managing causes, and continual improvement turns what is learned into funded change. The review is the hinge between the first two and the third. ITIL tends to ask whether the review was held, whether a problem record was opened where one was warranted, and whether the improvement was registered.

The agile and [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traditions contribute habits. Reviews are blameless, short, written for readers beyond the team, and shared widely. Regular team reflection, a habit of continuous improvement, asks what to change next, and the [agile](https://en.wikipedia.org/wiki/Agile_software_development) preference for small, frequent adjustment replaces the single large improvement programme. Google's *Site Reliability Engineering* book devotes a chapter to postmortem culture and argues that a review process is only as good as the culture around it.

Used together, the two views are strong. ITIL gives you coverage rules and a place for the action to live. The agile and SRE habits give you honesty and speed. Measured together, they show whether the loop is closing.

## Key principles

- **Learning is the product, not the document.** A review has succeeded when something changes in the system, the process, or the shared understanding. Count the change, not the paperwork.
- **Blameless is a precondition for good data.** If people fear blame, the timeline will be thin, the contributing factors will be tidy, and the same incident will return. Protect candour before you measure anything else.
- **Measure follow-through and recurrence, not volume.** The number of reviews says little. The share of actions finished and the share of causes that stay gone say a great deal.
- **Hold the metrics at team and system level.** A review is about conditions. Never count reviews, actions, or errors per person, and never use these numbers in performance conversations.
- **Right-size the review.** Not every event deserves a long document. Set triggers by impact and by learning value, and let a small event get a short review.
- **Let actions compete honestly.** An action item is work. It belongs in the same backlog as other work, ranked against it, and it may be declined with a recorded reason.
- **Read the reviews.** Numbers locate the problem. A human reading a sample tells you whether the reviews are any good.

## Metric definitions

The metrics below describe the learning loop for a service or a group of teams. Each states what is counted, where clocks start and stop, and what is excluded. Time measures should be shown as a median and a high percentile (for example the 85th) with the age of the oldest open item, not as an average (see topic 1.6, Statistical literacy for service metrics).

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Review coverage | Share of qualifying events that received a completed review | Qualifying events with a published review within the agreed window / qualifying events closed in the period. Qualifying events are those meeting the written triggers. Events inside the window still open at period end are excluded. | percent | ITSM tool incident records joined to the review repository | Incident management; problem management | Regular team reflection; team working agreements | Monthly |
| Review quality score | Whether a published review meets a short written standard | Reviews in a sample that meet at least [agreed number] of the checklist items / reviews in the sample. The sample is a fixed number of reviews drawn at random each quarter, scored by someone outside the owning team. | percent | Quarterly sample of the review repository with a scoring sheet | Continual improvement; problem management | Definition of done for a review | Quarterly |
| Action closure rate | Share of review actions completed by their due date | Actions completed or formally declined (with a reason) by due date / actions due in the period. The clock starts when the review is published and stops when the owning team marks the action done and a reviewer confirms it. Actions closed as "won't do" are counted separately and reported. | percent | Team backlog or ITSM improvement register, linked to the review | Continual improvement; problem management | Team backlog; improvement actions | Monthly |
| Open action age | Age of review actions still open | For each open action, today minus publication date of its review. Report the median, the 85th percentile, and the oldest. | days | Team backlog or improvement register | Continual improvement | Work item age; aging work in progress | Monthly |
| Cause recurrence rate | Share of events whose cause class matches an earlier event for the same service | Events in the period whose primary cause class matches a review closed in the previous twelve months for the same service / events with a recorded cause class in the period. Events without a recorded cause class are excluded and counted separately. | percent | Review repository cause class field joined to incident records | Problem management; incident management | Escaped defect analysis; retrospective themes | Quarterly |
| Near-miss reporting rate | Volume of near misses and weak signals that people choose to report | Near misses logged in the period / active services, shown as a trend per service and never per person. The rate is meant to rise early in a healthy programme and then level off. | count per service | Near-miss log, or a tagged field in the issue tracker | Incident management; risk management | Team health check; impediment board | Monthly |
| Learning reach | How far a review travels beyond the team that wrote it | Reviews presented or discussed outside the owning team (a shared forum, a cross-team session, or a documented read by a dependent team) within [agreed number] days of publication / reviews published in the period | percent | Forum or meeting records and the review repository | Continual improvement; knowledge management | Stakeholder review; communities of practice | Quarterly |
| Retrospective action carry-over | Share of team retrospective actions that were finished by the next retrospective | Retrospective actions completed before the next retrospective / retrospective actions agreed at the previous one. Actions deliberately dropped with a reason are removed from both counts. | percent | Retrospective notes or board, kept in the team backlog | Continual improvement | Regular team reflection | Per review period, reviewed quarterly |
| Safe-to-speak pulse | Whether people believe they can describe mistakes without blame | Share of responses at or above [agreed level] on a short anonymous question set (for example "I can describe a mistake in a review without fear of blame") / responses received. The pulse is reported only for groups large enough to protect anonymity. | percent | Anonymous pulse survey | Continual improvement; organisational change | Team health check; psychological safety check | Quarterly |

A review is "published" when it is visible to the intended readers, not saved as a draft. A cause class is recorded by the review group from the review itself, from a short agreed list, never by whoever closed the ticket.

## Recommendations

### Decide what deserves a review

**1. Write the triggers down and publish them.** A rule such as "every major incident, every incident of the top two severities, any event with customer data loss, and any near miss the team judges instructive" removes argument and makes coverage measurable. Without written triggers, reviews follow mood and workload, and the coverage figure means nothing.

**2. Scale the review to the event.** A small event can have a half-page review written in thirty minutes, while a major incident may deserve a full timeline and a facilitated session. A light track keeps coverage high without making the practice a burden.

### Judge quality by reading

**3. Sample and read reviews every quarter.** Draw a small random sample, and have someone outside the owning team read each one against a short checklist. Useful items include a timeline that shows decisions and the information available when they were made, more than one contributing factor, a description of what went well, actions with owners and dates, and language that describes the system and not the individual. Report the share that meet the standard, and feed the findings back to the writers as coaching.

**4. Teach the skill of reviewing.** [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias) makes events look obvious after the fact and nudges authors toward "someone should have noticed." Ask facilitators to reconstruct what people knew at each moment, and use the [five whys](https://en.wikipedia.org/wiki/Five_whys) as a prompt for questions, not a recipe for a single answer.

### Make actions finish

**5. Put actions in the real backlog.** An action that lives only in a review document is invisible to planning. Create a work item in the owning team's tracker, link it to the review, and let it compete for capacity like any other work. Report closure by team and by service so that a blocked action becomes visible to the people who can unblock it.

**6. Allow honest "won't do," and record why.** Some actions turn out to be too costly or no longer relevant. Closing them with a stated reason is healthier than leaving them open for a year or marking them done without doing them. Report the declined share, because a very high share suggests the review process is proposing actions nobody will fund.

**7. Track the age of open actions, as well as the closure rate.** The 85th percentile of open action age and the oldest open action show what is stuck. Review the oldest at the meeting that reviews the service's reliability.

### Watch for repeats

**8. Keep a short list of cause classes, and tag every review.** A list of eight to fifteen classes is enough. Review the list when more than a small share of events land in an "other" class. Tagging lets you answer the question "have we seen this before?" with data, and it feeds problem management with patterns that no single review shows (see topic 4.1, Problem management metrics, and topic 4.6, Technical debt and known errors).

**9. Treat recurrence as a signal about the action, not the people.** When a cause class returns, ask whether the earlier actions were finished, whether they were the right actions, and whether the class is too broad. Recurrence after all actions closed means the actions did not work, which is useful news.

### Protect honesty

**10. Keep reviews blameless and make it visible.** State in the template that the review describes conditions and decisions and does not assign fault, and have leaders thank authors for candour. [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety), in Amy Edmondson's research on work teams, is the shared belief that the team is safe for interpersonal risk taking (see topic 9.2, Satisfaction and well-being metrics).

**11. Reward near-miss reports, and read a rising count as good news at first.** A team that begins reporting near misses will see the count climb, because the events were always happening. Say so in advance, track the share of near misses that produced a change, and publish the stories with the team's consent.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Review coverage | Narrowing the triggers; downgrading severity so events fall outside them; filing a one-line "review" to tick the box | Review quality score; compare incident severity counts to customer-reported impact; audit downgrades |
| Review quality score | Writing to the checklist with boilerplate; scoring by the owning team; a predictable sample | Outside scorer; random sample; read two reviews aloud each quarter; track whether actions from high-scoring reviews finish |
| Action closure rate | Setting due dates far out; splitting actions into trivial pieces; closing actions without verification; declaring "won't do" to clear the list | Open action age; declined share with reasons; reviewer confirmation that the change works; cause recurrence rate |
| Open action age | Closing and reopening or recreating an action to reset its age; moving actions to a separate "ideas" list | Link new actions to the originating review and keep the first date; count of actions moved to ideas |
| Cause recurrence rate | Recording vague or ever-changing cause classes so that nothing matches; using a broad "other" class; linking a repeat to a different class | Share of events in "other"; a periodic reread of reviews by class; a review of the class list itself |
| Near-miss reporting rate | Asking for reports in order to hit a number; logging trivial events; or, in the other direction, reading the number as a failure and suppressing reports | Share of near misses that led to a change; no targets on the count; feedback from the safe-to-speak pulse |
| Learning reach | Adding names to a distribution list; presenting at poorly attended sessions; counting a link as a read | Attendance or actual discussion notes; ask dependent teams what they changed after the last review |
| Retrospective action carry-over | Agreeing only to trivial actions that are easy to finish; skipping the retrospective; marking items complete | Impact of the actions as judged by the team; retrospective held rate; whether the same theme appears for several weeks |
| Safe-to-speak pulse | Pressuring respondents; surveying only the confident; reporting an average that hides a low-scoring group | Response rate and respondent mix; minimum group size; open comments read in full; whether review language changes |

A healthy reading shows reviews for the events that matter, a quality standard most meet, actions that finish or are honestly declined, a handful of old actions that leaders can name, cause classes that fall in frequency after they are addressed, and a near-miss count that rose and then steadied. The pulse stays steady or improves when a hard incident happens. A pattern that is too clean is itself a sign to read a sample.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Review every incident | Complete coverage; no argument about triggers | Heavy; reviews become shallow; teams come to resent the process |
| Review by written triggers | Focuses effort on impact and learning value | Triggers need maintenance; borderline events slip through |
| Cause class tagging | Finds patterns across reviews | Classes are a simplification; real causes are often several things at once |
| Anonymous pulse on safety | Honest signal on a sensitive question | Coarse; small teams may be identifiable; survey fatigue |

The prose answer is to keep the loop short and the numbers few: written triggers, a small quality sample, one action tracker, and a cause class list, with the safety pulse added once the team trusts the rest. No measure here proves learning has happened. Together they show whether the conditions for it are present.

## Questions to discuss with your team

**1. Which of our last five incidents received a review, and did anyone change anything because of it?**
Start from the incident list, not from the review folder, so that missing reviews become visible. For each review, ask what is different in the system or the process today. If the answer is "nothing," ask why the review was held and who read it. The facilitator should record the answers without judging, because they show whether the practice produces change or paperwork.

**2. What would make it harder for someone to tell the truth in a review here?**
Ask for specific examples: a manager's reaction, a performance review, a customer escalation, a tone in an email. Invite people to write answers anonymously first. Look for conditions that can be changed, such as who attends, who reads, and what leaders say aloud. This is the conversation that protects every other number in the topic.

**3. Which action items have been open longest, and what is stopping them?**
Display the oldest five. For each, ask whether the action is still right, whether it has an owner with capacity, and whether it should be done, rescheduled, or declined. Keep the focus on the system of work and not on the owner. Agree on a decision for each before the session ends.

**4. When did the same kind of problem return, and what does that say about the earlier fix?**
Use the cause class tags to find a repeat, and read the earlier review and its actions. Ask whether the actions were finished, whether they addressed the contributing factors, and whether the class was drawn too broadly. The goal is a better action, not an explanation.

**5. Do we report near misses, and what happens when someone does?**
Ask for a recent example and trace what followed. If nothing followed, ask why people would report again. If the count is low, ask what people fear. The facilitator should explain that a rising count is expected at first, and agree on how the team will respond to the next report so that reporting feels worthwhile.

**6. How would we know a review was good if we could not look at any numbers?**
This asks the team to describe quality in its own words. Common answers include "someone outside the team learned something," "the fix held," and "the author was not afraid." Turn the answers into the checklist for the quarterly sample, and revisit it after two quarters.

## Four perspectives

### Product and delivery teams

Delivery teams write many reviews and carry most of the actions, so they feel the cost of a clumsy process first. They benefit from short templates, a clear trigger rule, and a visible link between an action and a team backlog item. Regular team reflection deserves the same follow-through discipline as an incident review, and a team that finishes its retrospective actions is practicing the same habit on a smaller scale. Guard against actions being squeezed out by feature pressure, and bring that trade-off to the product owner openly (see topic 2.5, Delivery forecasting and planning metrics).

### Service and operations teams

Operations teams hold the evidence (timelines, alerts, chat logs) and are best placed to tag cause classes consistently and to notice a repeat before it becomes an outage. They need protected time to write, since reviews written at the end of a long shift are thin. Link each review to any problem record it feeds (see topic 3.3, Incident response and resolution time).

### Leadership and governance

Leaders set the tone of every review by what they ask afterwards. "Who did this?" ends honest reviews, and "what did we learn, and what are we changing?" invites them. Governance bodies should expect coverage, quality, action age, and recurrence on the reliability review, fund the actions that need investment, and never compare teams by how many incidents or reviews they have.

### Customers and users

Customers rarely see the review, but they feel its result: the same fault that stops returning, and an honest account when it does. Where contracts allow, publish a plain-language summary after a significant incident (see topic 3.4, Major incident metrics). Repeat contact on the same issue is the customer-side signal that learning has not landed (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized online retailer runs a customer-facing storefront, a payments service, and an internal inventory platform. Five product teams build and run these services, and a small service management group keeps the incident and problem process. The numbers in this example are illustrative.

In one quarter the retailer has 41 incidents in the top two severities. Written triggers qualify all of them for a review, and 36 reviews are published within ten working days, so review coverage is about 88 percent. Leadership is pleased. The service management group draws a random sample of eight reviews, asks a team from another product area to score them, and finds that only three meet the agreed standard. The common gap is that the timeline lists what happened but not what people knew when they made each decision, and the contributing factor section names a single cause.

The same sample shows that of 74 actions due in the quarter, 51 were completed by their due date, a closure rate of about 69 percent. The oldest open action, 210 days old, is a capacity alert threshold on the payments database, deferred in six successive weeks. Cause tagging shows "capacity limit" in 9 of the 36 reviews, 4 of them for the payments service. The anonymous pulse, answered by 58 of 70 invited people, is lower in the on-call group, where several comments say senior managers ask pointed questions about named individuals.

The team makes three decisions. First, they hold a short session with the senior managers who attend reviews and agree a rule: questions in the room are about conditions and decisions, and any follow-up about a person goes through the team lead. Second, they put the oldest capacity action at the top of the payments team's next planning round, ranked against feature work by the product owner, and report the outcome at the reliability review. Third, they add two checklist items to the review template (what people knew at each decision, and at least two contributing factors) and run a coaching session for writers using one anonymised review.

The gaming risk appears in the following quarter. Review coverage rises to 97 percent, but the share of reviews under 300 words doubles, and a few teams downgraded incidents from severity two to three just below the trigger. The quality sample and an audit of severity changes catch it. The group asks why the downgrades happened, learns that teams felt a review was punishing, and relaxes the length expectation for small events while keeping the severity two trigger.

## Agile, AI, automation, and analytics

### Agile

Reviews work best as a regular habit with stakeholders, where actions go to the same backlog as other work. The caution is that a target for review count produces reviews written to a template without learning.

### AI

AI can draft timelines and summaries for a review, which raises coverage and speed. Pair review coverage with a quality check by a person and with cause recurrence rate, and label AI-drafted sections. The caution is that AI may smooth over uncertainty or assign blame in its wording, so a human owns a blameless final account.

### Automation

Automate timeline capture and action reminders, and measure how many reminders lead to closure. The caution is that automated nagging without owner agreement becomes noise.

### Analytics

Track action age and recurrence over a long window, with counts. The decision informed is which learning is actually changing the system. The caution is that recurrence rates are slow and small-sample, so avoid short-term conclusions.

## Sector lens

**Startup.** A small team can learn quickly because everyone attended the incident. The risk is that nothing is written down and the lesson walks out with the next hire. Keep a one-page template, hold a review for anything that wakes someone at night, and track only action closure and repeat causes. Protect candour by having founders read reviews without commentary on individuals.

**Small business.** The person who fixed the problem is often the only one who understands it. Use a brief template and review the oldest open action monthly.

**Enterprise.** Standardise the template, the trigger, and the cause class list, and let teams tailor depth. Provide a searchable place for reviews, a cross-team forum, and an outside scorer. Beware of league tables of teams by incident or review counts, since they punish transparency.

**Government and public sector.** Reviews may face statutory duties, audit, or freedom of information requests, which makes authors cautious. Separate the learning review from any formal report for oversight, and record blocked actions with their dependency (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost of this practice is mostly time. Authors spend hours on each review and many people spend an hour in a session. A quarterly quality sample takes a few hours of an outside reader. Cause tagging and action tracking need a little tooling, which can be a spreadsheet and a field in the existing ticket and backlog tools. There is a larger, less visible cost in leadership behaviour, because the programme fails if leaders react badly to candid reviews.

The return comes from causes that stop recurring and from incidents that are shorter because the team has seen something like them. Fewer repeat incidents release engineering and operations capacity, reduce escalations, and lower the cost of disruption to customers. A shared library of reviews shortens the learning curve of new staff and lowers the dependence on a few experienced people. Do not quote a percentage from another organisation. Measure your own baseline for cause recurrence, open action age, and repeat contact before you start, and compare after two or three quarters.

The honest limit is that learning is hard to attribute: a fall in recurrence may come from a better review, an unrelated architecture change, or luck. For wider treatment see topic 7.7, Return on investment and business case.

## Anti-patterns and pitfalls

- **Review theatre.** Reviews satisfy a rule and nobody reads them. Instead, sample and read reviews, and judge them by the change they produced.
- **A search for the root cause as a person.** The review names an individual error and stops. Instead, ask what made the error likely, and list several contributing factors.
- **Action inflation.** Reviews produce long lists that the team cannot fund. Instead, limit each review to a few ranked actions and decline the rest with a reason.
- **Actions outside the backlog.** They live in a document and are never planned. Instead, create work items in the owning team's tracker and link them to the review.
- **Closure without verification.** The action is marked done and the cause returns. Instead, have a reviewer confirm the change works and watch the cause class for recurrence.
- **Using counts to compare teams.** A team with more reviews or near misses looks worse. Instead, read a high count as openness, and compare each team with its own history.
- **Punishing the messenger.** A leader questions a person after a candid review. Instead, agree a norm for how leaders respond, and check the pulse after hard incidents.
- **Treating the metrics as proof of learning.** A clean dashboard is taken as evidence that the organisation is learning. Instead, keep reading a sample of reviews and asking the people who wrote them.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Triggers and coverage | Reviews depend on who is available and how bad it felt | Some teams hold reviews for serious incidents | Written triggers and a common template; coverage counted by severity | Coverage trended and audited against downgrades; light and full tracks | Triggers adapted with customers and suppliers; shared reviews for joint incidents |
| Quality and honesty | Reviews name a person or a single cause | Some teams write blameless reviews | Checklist standard; blameless language expected | Outside quarterly sample; pulse reviewed; coaching for writers | Reviews co-written with suppliers and users; reading across teams is routine |
| Actions and recurrence | Actions live in documents and are rarely finished | Actions tracked by some teams; closure varies | Actions in the real backlog with owners, dates, and honest decline | Closure, age, and cause recurrence reviewed, with funded improvement | Actions across teams and suppliers coordinated; cause classes revised as patterns shift |
| Sharing and learning | Lessons stay with the team | Reviews posted for the team | Reviews searchable and shared at a regular forum | Reach measured; dependent teams report changes made | Learning flows to design, onboarding, and supplier contracts |

## Checklist

- [ ] Written triggers say which events receive a review, including near misses of high learning value.
- [ ] A short template exists, with a light track for small events.
- [ ] Reviews are blameless by template and by leadership behaviour.
- [ ] Every action is a work item in the owning team's backlog, with an owner and a date.
- [ ] Actions may be declined, and the reason is recorded and reported.
- [ ] A short list of cause classes exists, and every review is tagged.
- [ ] An outside reader scores a random sample of reviews each quarter.
- [ ] The oldest open actions are reviewed alongside service reliability.
- [ ] Open action age is reported as a median, a high percentile, and the oldest.
- [ ] A near-miss route exists, and the team knows what happens after a report.
- [ ] No metric in this topic is reported or used per person.
- [ ] A safe-to-speak pulse runs only for groups large enough to protect anonymity.

## AI prompts

**Review a draft postmortem for quality.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgement, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Propose cause classes from past reviews.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Analyze open action items for stalling patterns.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the matching topic, definitions, and paired guardrail for a review or learning metric you are about to report.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a revised learning metric still carries its clocks, gaming vector, and guardrail.

## Key takeaways

- A review is worth what it changes, so measure coverage, quality, action closure, and recurrence of causes, and read a sample of the reviews themselves.
- Blamelessness is the precondition for honest data, and leaders protect it by how they respond to a candid review.
- Put actions in the real backlog, limit their number, allow honest decline, and watch the age of the oldest ones.
- Tag reviews with a short list of cause classes so that repeat causes become visible and feed problem management.
- Read a rising near-miss count as a sign of openness early on, and never rank people or teams by review volume.
- Pair every number here with a guardrail, because the learning loop is itself a target that can be gamed.

## References and further reading

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
