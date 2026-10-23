# Maturity model for metrics programmes

**Use the shared five-level scale to describe where a metrics programme is and to choose the next small step, never as a score to display, compare, or certify.**

## Overview and motivation

Every other topic in this book ends with a small maturity table for its subject. This topic applies the same scale to the metrics programme as a whole. The question is not how good a team's incident times are. It is how well the organization collects, reads, and acts on measures at all: whether definitions are shared, whether the data is trusted, whether the numbers lead to decisions, and whether the people measured see the programme as help.

A maturity model is a description of stages that an organization may pass through as a practice develops. The best-known example in software is the [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), which grew from work at the Software Engineering Institute and spread widely. Its influence was large, and so was the criticism that followed. Organizations chased the level and not the capability, auditors scored paperwork, and the model came to be used as a badge. A responsible use of any maturity model keeps three cautions in view. The scale is a conversation tool and not a certification. Higher is not always better, because the right level depends on context. And the model is no substitute for outcomes: a mature programme that does not improve services is a very tidy failure, and a level shown as a badge is much like a [vanity metric](https://en.wikipedia.org/wiki/Vanity_metric), a number that looks good and informs no decision.

The scale used here is the one shared across the book and the *Service Management Guide*: Initiate, Develop, Standardize, Manage, and Orchestrate (see the shared maturity model in the specification). It is deliberately not the same as the process maturity scales in ITIL, in ISO/IEC 33000, or in the Capability Maturity Model, and a team should not claim a score in any of those frameworks on the strength of this one.

The agile aims point to how to use it. Continuous improvement means the model is for finding the next step, not for reaching a final state. Ongoing evolution means a programme that reached Orchestrate last year may regress if people leave or priorities shift, so the self-assessment is repeated. Continuous stakeholder involvement means the assessment is done with the teams and not on them. A sustainable pace means the programme takes one step at a time and does not try to leap three levels in a quarter. And building around motivated individuals means that the people doing the work judge whether the programme helps them. This is the same logic as the continual improvement practice in ITIL, where an organization checks the current state, sets a direction, and improves in small steps, a habit close to [kaizen](https://en.wikipedia.org/wiki/Kaizen), the Japanese idea of continuous improvement by everyone. The more general idea is the [continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process) (see topic 9.5, Continual improvement metrics).

The model has a particular trap in the context of metrics. A programme that is assessed on its own metrics invites the very distortion it warns against. If "number of measures with definitions" becomes a target, definitions multiply. The approach in this topic therefore uses evidence from the work (what decisions changed, what teams say) in addition to counts, and it keeps the assessment owned by the teams, who have the least to gain from inflating it (see topic 1.2, Goodhart's law and the psychology of metrics). A companion assessment form for teams appears in the appendices (see topic 12.5, Maturity self-assessment).

## Key principles

- **The scale is a conversation tool.** It helps people describe the present and choose a next step, and it is not for rating, ranking, or certifying.
- **Assess with the teams.** Self-assessment, discussed openly, is more accurate than external scoring.
- **Judge by evidence.** Ask what decisions changed, what people say, and what the data shows, as well as what documents exist.
- **Dimensions can differ.** A programme can be strong in tooling and weak in trust. Report the profile, not a single number.
- **Move one step at a time.** Aim for the next level in one or two dimensions, not for everything at once.
- **Higher is not always better.** Choose the level that fits the size, risk, and needs of the organization.
- **Expect regression.** Staff turnover, reorganization, and pressure can push a programme back. Reassess regularly.
- **Never publish a league table of teams.** Aggregate for the programme and share team results only with the team.

## Metric definitions

The measures below describe the programme's health and its assessment. They are for the programme team and the sponsors, and they are read as signals for discussion.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Assessment participation | Share of participating teams that completed a self-assessment with their own discussion | teams that completed and discussed / participating teams | percent | Assessment records | Continual improvement | Reflection and retrospectives | Twice a year |
| Profile by dimension | The distribution of teams' self-assessed levels in each dimension, shown as a range and not a single score | count of teams at each level, per dimension | teams per level | Self-assessments, aggregated | Continual improvement; governance | Visible work | Twice a year |
| Improvement actions from assessments | Share of agreed next steps that were completed, dropped with a reason, or still under way | actions closed or reasoned out / actions agreed | percent | Improvement register | Continual improvement | Small experiments | Quarterly |
| Decision evidence | Share of sampled measures where the team can name a decision or deliberate choice that the measure informed in the last quarter | measures with a named decision / measures sampled | percent | Team interviews; review notes | Continual improvement | Evidence over ceremony | Quarterly |
| Definition and data trust | Team-level agreement that the definitions are clear and the data is correct | percent agreeing on a short team survey; response rate shown | percent | Anonymous team survey | Knowledge management; information management | Shared understanding | Twice a year |
| Time-to-next-level (descriptive) | Elapsed time for a team to move a dimension up one level where it chose to | median months from agreed step to the team's reassessment | months | Assessment history | Continual improvement | Sustainable pace | Annual |
| Assessment burden | Hours the assessment takes per team | median hours per team | hours | Time estimates from teams | Continual improvement | Sustainable pace | Twice a year |

Participation is measured as completion with discussion, because a form filled alone says little. Profile is a range and is never averaged into one maturity number. Time-to-next-level is descriptive: a fast climb may reflect inflated self-scoring, and a slow one may reflect appropriate care. Assessment burden is a check on the assessment itself, which should take no more than an hour or two per team.

## Recommendations

### Use the scale well

**1. Define the dimensions of a metrics programme.** A workable set has six dimensions: (a) questions and purpose, whether measures answer questions that audiences asked; (b) definitions and ownership, whether measures have written definitions and owners; (c) data and tooling, whether the data is accurate, timely, and portable; (d) use in decisions, whether numbers inform choices; (e) trust and safety, whether people believe the data helps them; and (f) review and evolution, whether the programme trims itself. Six is enough to be useful and few enough to discuss in an hour.

**2. Describe what each level looks like.** The table in the "Maturity model" section below gives short descriptions for each dimension at each level. Treat them as prompts. A team should adapt the wording to its own context and write down its own examples.

**3. Do not average.** A single overall score hides the pattern that matters. A programme with high tooling maturity and low trust is in a different situation from one with the reverse, and the next step differs. Show the profile.

### Assess with and not on the teams

**4. Make it a conversation of an hour.** Bring a team together with the table. Ask each person to mark where they think the team is in each dimension, privately, and then compare. Discuss differences, because they reveal different experiences of the same programme. Agree on a team view, record the evidence behind it, and choose one or two next steps.

**5. Ask for evidence.** For each level claimed, ask for an example. "We use the numbers in decisions" invites the question "Which decisions last quarter?" Use sampled measures and interviews to check. This respects people and keeps the assessment from drifting into wishful thinking.

**6. Keep the results with the team.** A team's profile belongs to the team. The programme shares aggregated ranges and common themes, and not a ranking. Make clear that the assessment does not affect funding, standing, or reviews. If it does, teams will inflate it and the value is lost (see topic 11.3, Rolling out metrics without breeding fear).

### Choose next steps

**7. Pick the dimension that limits the others.** Trust and safety often limits everything else: without it, data is distorted and decisions are suspect. Definitions and ownership often limit data and use. A common pattern is to strengthen trust and definitions first, then data, then use and review. Look for the dimension where a small improvement would unlock the others.

**8. Set a small, concrete step.** A next step should be one a team can complete in a quarter and recognize: "agree a charter," "write definitions for our four measures," "automate two feeds," "hold a monthly review where we record decisions." Avoid steps such as "reach Level 4." Levels describe a state, and steps describe work.

**9. Link steps to the improvement register.** Put the actions in the same place as other improvement work, with owners and dates, and review progress in the regular improvement conversation (see topic 9.5, Continual improvement metrics). A step that is not funded or scheduled will not happen.

### Keep it honest and light

**10. Calibrate across teams without ranking them.** Hold a short session where teams share examples of what they call Level 3 in a dimension. Discuss differences in standards. The aim is a shared understanding, not equal scores. Rotate the facilitator, and invite a team from outside the programme to challenge the wording.

**11. Reassess on a rhythm, and in response to events.** Twice a year is enough for most programmes. Reassess after a reorganization, a tool change, or a breach of the charter, since these can move trust in either direction. Watch for regression and treat it as information, not failure.

**12. Retire or revise the model itself.** Every year, ask the teams whether the dimensions and level descriptions still fit. Reword what confuses, and remove what no one uses. A model that has not changed in five years may be describing a programme that no longer exists.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Assessment participation | Completing forms to meet a quota; one person filling for the team | Require a team discussion; ask for the evidence behind each claim |
| Profile by dimension | Inflating levels to look good; sandbagging to receive help | Do not link to funding or standing; ask for evidence; calibrate openly |
| Improvement actions from assessments | Choosing trivial steps to close; closing without doing | Review step size and value; check outcomes at the next assessment |
| Decision evidence | Inventing decisions after the fact; listing decisions of no consequence | Ask for the date and the people involved; accept "chose to do nothing" as a decision |
| Definition and data trust | Coaching respondents; low response hiding discontent | Anonymity and minimum group size; show response rates; talk with teams directly |
| Time-to-next-level (descriptive) | Rushing claims of progress; hiding regression | Keep descriptive; read with evidence; record regressions without penalty |
| Assessment burden | Skipping the discussion to cut hours | Track hours together with participation and the quality of evidence |

A healthy reading shows a profile with a mix of levels, with trust and definitions rising before tooling and polish, next steps that are small and finished, decisions that teams can name, and an honest record of occasional regression.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Team self-assessment | Honest, owned, quick | Subjective; calibration needed |
| External assessment | Consistent; independent | Costly; invites performing for the assessor |
| Single overall score | Easy to communicate | Hides the pattern; invites targets |
| Profile by dimension | Shows where to act | Harder to summarize |
| Annual assessment | Light | Slow to notice regression |
| Twice-yearly with event triggers | Responsive | More effort |
| Linked to funding | Gains attention | Inflation and gaming |
| Kept separate from funding | Honest data | Needs other ways to gain support |

The prose answer is to run a light self-assessment with evidence, report profiles and ranges, keep results with the teams, and tie next steps to the improvement register, not to funding or standing.

## Questions to discuss with your team

**1. Which of the six dimensions would we say is our weakest, and what makes us say so?**
Have each person pick one privately and then share. The facilitator should ask for a recent example. Look for patterns, and agree which dimension limits the others.

**2. Can we name a decision from last quarter that a measure changed?**
List them. If the list is short, ask why. Discuss whether the problem is the measures, the data, or the habit of looking.

**3. Where would we place ourselves on trust and safety, and how do we know?**
Look at near-miss reports, challenges, and survey results. Compare with how people talk in practice. Agree one thing leaders could do to move it.

**4. What would a small, concrete next step look like for our weakest dimension?**
Draft it in one sentence, with an owner and a date. Check that it can be finished in a quarter. Agree how we will know it worked.

**5. What would make this assessment feel like a threat, and how do we prevent it?**
Discuss uses of the results that people would fear. Write down what the results will never be used for. Check that the programme lead agrees.

**6. Is there a level we do not need to reach?**
Think about our size, risks, and goals. Describe a level that is good enough for now and a signal that would tell us to revisit.

## Four perspectives

### Product and delivery teams

Teams assess themselves, choose the next step, and keep their results. They should use the conversation to surface differences in experience, ask for evidence, and set steps small enough to finish. They should push back on any attempt to turn the profile into a ranking.

### Service and operations teams

Operations teams carry heavy data and incident loads and can see where the programme supports them or burdens them. They should note where tooling or definitions block their work, ask that on-call and incident data be handled with care, and give frank feedback on the assessment burden.

### Leadership and governance

Leaders sponsor the programme and receive the aggregate picture. They should ask for profiles and common themes, resist asking for a single score, fund the next steps that teams choose, and not tie funding or standing to the assessment. They should also model the behaviour by describing decisions that metrics informed.

### Customers and users

Customers and users benefit when the programme improves services and when their feedback is part of the measures. Where they are partners, they can take part in assessing measures that concern them, for example the usefulness of satisfaction surveys, and in reviewing how their data is used.

## In practice: a service management example

A national insurance group has 20 delivery and support teams and a metrics programme that has run for 18 months. The sponsor asks for "a maturity score for each team" to guide investment. The programme lead is wary, remembering how a previous audit-style scoring led teams to prepare binders of documents. The figures below are illustrative.

The programme lead proposes instead a profile across six dimensions, assessed by teams in an hour-long conversation with a facilitator from outside the team, with results kept by the team. She tells the sponsor that the programme will report ranges and common themes, and that no team's profile will be linked to funding. The sponsor agrees, and the decision is recorded.

Nineteen of 20 teams complete the assessment with a discussion, so participation is 95 percent. The profile shows a range: in questions and purpose, most teams sit at Level 2 or 3; in definitions and ownership, a spread from 1 to 4; in data and tooling, mostly 3; in use in decisions, mostly 2; in trust and safety, a split between 2 and 4; and in review and evolution, mostly 1 or 2. The evidence checks are revealing. Eleven teams claimed Level 3 for use in decisions, but when asked to name a decision from the last quarter that a measure informed, only six could. The programme lead notes this without judgement, and it becomes a theme: the teams have dashboards and rarely hold reviews that record decisions.

The next steps are small. Eight teams choose a monthly review with a decision log. Four choose to write definitions for their measures. Three choose to agree a charter. Six months later, 14 of 17 agreed steps are done, one is dropped with a reason, and two are under way. A repeat assessment shows decision evidence rising from 38 percent to 71 percent of sampled measures, and the trust survey moving from 54 to 67 percent agreement. One team slips back in trust after a reorganization, and the facilitator records it as information, not failure. A year later the sponsor asks again for a single score for the annual report. The programme lead offers a one-page profile with ranges, three themes, and the improvement steps completed. The sponsor accepts, and the report states plainly that the scale is a conversation tool.

## Agile, AI, automation, and analytics

### Agile

Use the model as a conversation at regular improvement reviews, with the team choosing its own next small step. The caution is that a maturity score displayed on a wall becomes a target.

### AI

Add the AI lens to the assessment: whether AI uses are inventoried, whether AI-assisted measures have quality pairs, and whether people can challenge AI-derived numbers. The caution is that an AI-written self-assessment may sound confident and miss local facts, so the team must write its own.

### Automation

Automate the collection of evidence for the assessment, such as the share of metrics with owners and guardrails, but have people interpret it. The caution is that evidence gathered automatically may be incomplete, so say what it excludes.

### Analytics

Show the profile across dimensions, not a single score, with the evidence behind each rating. The decision informed is what to improve next. The caution is that ratings are judgements by the people assessed, so avoid comparing teams on them.

## Sector lens

**Startup.** A formal assessment is likely excessive. A short conversation twice a year over the six dimensions, with one or two small steps, is enough. Watch for the fear that measures will be used for judgement, since small teams feel this keenly.

**Small business.** Use the dimensions as a checklist for a talk with the owner and staff. Ask whether the few measures you keep answer real questions, whether people know what they mean, and whether they are used. Pick one step. Do not spend more than an hour.

**Enterprise.** Scale needs a light, consistent process: the same dimensions, self-assessment with a facilitator, calibration sessions, and aggregated profiles. Resist a central scoring office. Link next steps to improvement registers, and report ranges and themes to sponsors. Guard against the scale turning into a compliance exercise.

**Government and public sector.** Audit and oversight bodies may ask for maturity scores. Be clear about the difference between this internal conversation tool and any formal framework. Keep team results with the teams, provide aggregates to oversight, and be transparent about what the scale is and is not (see topic 8.3, Compliance and audit metrics).

## Business case: motivations, ROI, and TCO

The costs are small: an hour or two per team twice a year, a facilitator, some analysis, and the effort to carry out the improvement steps. The larger costs come when the model is misused, with consultants, scoring offices, and binders of evidence.

The returns come from better targeting of effort. Instead of spreading investment across all dimensions, the programme finds the limiting dimension and addresses it. Other returns include earlier recognition of regression, shared language between teams, and improvement steps that teams chose and own. Build the case from your own data: improvement steps completed, changes in decision evidence and trust survey results, and the effort the assessment took. Avoid quoting published claims about the returns of maturity improvement without a traceable source and relevance to your context (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **The maturity badge.** The level becomes the goal. Use it as a conversation, with evidence.
- **One overall number.** The pattern is lost and targets appear. Show the profile.
- **Scoring by auditors.** Teams prepare documents to perform. Use self-assessment with a facilitator.
- **Linking the score to funding.** Inflation follows. Keep the assessment separate.
- **Chasing the top level.** Not every programme needs Orchestrate. Pick what fits.
- **Assess and forget.** No steps follow. Link steps to the improvement register.
- **Overlong assessment.** Burden grows and quality falls. Keep it to an hour.
- **Ignoring regression.** Programmes slip after change. Reassess on a rhythm and after events.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Questions and purpose | Measures collected because data exists | Some teams state the questions they ask | Audiences and questions written down; measures mapped to them | Question coverage reviewed; unanswered questions drive new measures | Audiences, including customers and suppliers, shape the measures; questions evolve with the services |
| Definitions and ownership | Definitions vary by person | Some written; informal owners | Catalogue with definition, source, owner, and limits for each measure | Definition completeness and challenges managed | Definitions co-owned across teams and suppliers; revised when they stop informing decisions |
| Data and tooling | Manual and fragile | Some automated feeds | Tested pipelines, shared store, portable data | Reliability, reconciliation, and exit readiness managed | Federated pipelines with shared contracts; sources improved from feedback |
| Use in decisions | Numbers displayed, rarely used | Used in some reviews | Regular reviews that record decisions | Decision evidence tracked and acted on | Decisions linked across teams to outcomes; learning shared |
| Trust and safety | Fear or indifference | Verbal assurances | Written charter; individual views off; safety survey | Breaches reviewed in the open; candour signals managed | Trust routine; programme shaped by staff and partners |
| Review and evolution | None | Occasional clean-up | Periodic review with teams; retirement rule | Assessment steps funded and completed | Programme improves continually, with changes from everyone |

## Checklist

- [ ] The six dimensions are agreed, and the level descriptions are adapted to our context.
- [ ] Each team assesses itself in a discussion of about an hour, with a facilitator.
- [ ] Each claimed level is backed by an example or a sampled check.
- [ ] Results are shown as profiles and ranges, and never as one averaged score or a ranking.
- [ ] A team's results stay with the team, and the aggregate is shared with sponsors.
- [ ] The assessment is not linked to funding, standing, or performance reviews, and this is written down.
- [ ] Each team agrees one or two small next steps, with an owner and a date.
- [ ] Next steps are tracked in the improvement register.
- [ ] Reassessment happens at least twice a year and after major events.
- [ ] The model itself is reviewed yearly with the teams.

## AI prompts

**Prepare a self-assessment conversation.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
programme across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Turn a weak dimension into steps.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics programme. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Check evidence for a claimed level.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Summarize profiles without ranking.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to map programme measures to the maturity dimensions and their paired guardrails.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a maturity assessment reports profiles, keeps results with teams, and avoids a single score.

## Key takeaways

- Use the shared five-level scale as a conversation tool, never as a badge, ranking, or certification.
- Report a profile across six dimensions and not one averaged score.
- Assess with the teams, ask for evidence, and keep each team's results with the team.
- Choose small next steps in the dimension that limits the others, often trust and definitions.
- Track steps in the improvement register, and reassess regularly because programmes regress.
- Higher is not always better, and outcomes matter more than levels.

## References and further reading

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
