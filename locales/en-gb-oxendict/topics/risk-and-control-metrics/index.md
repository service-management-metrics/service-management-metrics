# Risk and control metrics

**Risk work is a continuing conversation about what could go wrong and what we are doing about it, so keep the register short and alive, test the controls that matter, and distrust any number that makes uncertainty look tidy.**

## Overview and motivation

Every change to a service carries risk, and so does leaving it alone. [Risk management](https://en.wikipedia.org/wiki/Risk_management) is the identification, evaluation, and prioritization of risks, followed by coordinated action to reduce, accept, transfer, or avoid them. ITIL treats risk as a thread that runs through every practice: change enablement decides how much scrutiny a change needs, service continuity plans for disruption, information security protects against threats. Agile and DevOps ways of working reduce risk in a different way. Small changes delivered continuously, with fast feedback and the ability to roll back, make each change less dangerous and make problems visible sooner.

The two views meet in the metrics. A team that delivers continuously still needs to know its principal risks, who owns them, and whether the controls it relies on work. A risk function that insists on heavy approval still needs evidence that its controls reduce harm and do not simply slow people down. This topic gives the measures for both, and it builds on the practices described in the neighbouring topics on security and audit (see topic 8.1, Security incident and vulnerability metrics, and topic 8.3, Compliance and audit metrics).

Four terms recur.

- **Risk:** an uncertain event or condition that, if it occurs, affects objectives. It has a cause, an event, and a consequence, and a likelihood and impact that are usually estimated, not known.
- **Risk register:** the list of identified risks with owners, ratings, and responses. A [risk register](https://en.wikipedia.org/wiki/Risk_register) is a working tool when it is current and read, and a compliance artefact when it is not.
- **Control:** an action or mechanism that reduces a risk, such as a review, an automated test, an approval, a segregation of duties, or a monitoring alert. The set of controls an organization relies on is its [internal control](https://en.wikipedia.org/wiki/Internal_control) system.
- **Key risk indicator (KRI):** a measure that signals a change in the level of a risk before the loss occurs. A [key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator) is useful when it leads an event and when someone acts on it.

Risk quantification has well-known weaknesses. A [risk matrix](https://en.wikipedia.org/wiki/Risk_matrix), which plots likelihood against impact on a grid of coloured cells, is widely used and widely criticized: ratings are subjective, different risks can land in the same cell for different reasons, and the arithmetic of multiplying ordinal scores has no firm basis. Rare, severe events, sometimes described through [black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory), are especially hard to rate. The honest response is to use the matrix as a conversation aid, show ranges, and support it with evidence about controls and incidents. The framework of the three lines of defence, which separates the teams that own risk, the teams that oversee it, and independent assurance, offers a structure for roles, and it works best when the first line, the delivery and operations teams, genuinely owns its risks.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to risk reporting in a particular way. When a red rating brings scrutiny, people rate risks as amber. When a closed risk is a success, people close risks without treating them (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Keep the register short and current.** A few well-owned risks that are reviewed beat hundreds that are not.
- **Make the first line own its risks.** The people closest to the work know it best.
- **Test the controls you rely on.** A control that has never been tested is a hope.
- **Prefer leading indicators that someone acts on.** An indicator with no response plan is decoration.
- **Show ranges and evidence, not false precision.** Ratings are estimates.
- **Reduce risk by making change small and reversible.** Continuous delivery with fast rollback is a control.
- **Talk about risk without blame.** Honest reporting is the raw material of the whole practice.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Risk review currency | Share of open risks reviewed by their owner within the agreed interval | risks reviewed within the interval / open risks | percent | Risk register review dates | Risk management; continual improvement | Risks reviewed in planning and review conversations | Monthly |
| Owner coverage | Share of open risks with a named, current owner who accepted ownership | risks with a confirmed current owner / open risks | percent | Risk register joined to the people directory | Risk management | Team-owned risks on the backlog | Monthly |
| Control test coverage | Share of key controls tested for operation within the required cycle | key controls tested in the cycle / key controls | percent | Control register and test records | Risk management; information security management | Automated checks in the pipeline | Quarterly |
| Control effectiveness rate | Share of tested controls found to operate as designed | controls found effective / controls tested | percent | Test results | Risk management; continual improvement | Automated tests passing for the right reasons | Quarterly |
| KRI breach response time | Time from a key risk indicator crossing its threshold to a recorded decision | median and 85th percentile of hours or days from breach to decision | hours or days | KRI monitoring and decision log | Risk management; monitoring and event management | Reaction to a production signal | Monthly |
| Treatment plan timeliness | Share of risk treatments completed by their committed date | treatments completed by date / treatments due in the period | percent | Risk register and action tracker | Risk management; continual improvement | Improvement actions delivered | Quarterly |
| Risk-based change share | Share of changes approved through risk-based routes with the control evidence attached | changes approved by a risk-based route with required evidence / changes in the period | percent | Change records | Change enablement; risk management | Changes delivered continuously with automated checks | Monthly |

Define the review interval and the key control list in the register. A control is "tested" only when the test examines evidence of operation, not just the design. The KRI clock starts when the indicator crosses its threshold, as recorded by the monitoring system, and stops at a decision that is written down, which may be to act, to accept, or to change the threshold. Exclude risks that are being retired from the denominator only after a recorded closure decision.

## Recommendations

### Keep the risk conversation alive

**1. Keep the register short and write each risk in a standard form.** Use a sentence of the form "Because of [cause], [event] may happen, leading to [consequence]." Limit the register to the risks that would change a decision or a plan. Merge duplicates, split vague ones, and retire risks that have passed. A list of a few dozen risks that people discuss is worth more than a thousand that nobody reads.

**2. Assign every risk to an owner who can act.** The owner is the person with authority over the response, usually in the delivery or operations team, not the risk function. Confirm ownership with the person, and review it when people change roles. Owner coverage measures this, and an unowned risk is a finding.

**3. Review risks in the conversations that already happen.** Raise the top risks in planning, review, and incident reviews, instead of creating a separate meeting. The agile habit of regular reflection on how to become more effective is a natural home for the question "what could hurt us next?" Record the outcome in the register.

**4. Pair ratings with evidence and ranges.** For each important risk, record what makes you think it is likely or serious: incidents, near misses, test results, supplier history. Give a range for likelihood and impact where you can, and say how unsure you are. Do not combine ordinal scores into a single number and treat it as a measurement. If you use a matrix, use it to start a discussion (see topic 1.6, Statistical literacy for service metrics).

### Test the controls

**5. Name the key controls and what each is for.** For each major risk, list the few controls that you rely on, and what failure of each would look like. A control register that lists hundreds of minor activities hides the ones that matter. Include automated controls in the pipeline, such as tests, policy checks, and approval gates.

**6. Test operation, not just design.** A design review asks whether the control would work if it were operated. An operating test asks whether it was operated and worked in the period, by examining samples of evidence. Plan tests on a cycle that matches the risk, record the results, and follow up failures. Where possible, automate the evidence, so that testing happens continuously.

**7. Treat control failures as information.** A failed test is the control system working. Record the failure, ask why, and fix the cause. The control effectiveness rate should be read with the follow-up: failures found and fixed quickly are healthier than a perfect rate that comes from weak testing.

**8. Use independent assurance where it adds value.** Internal audit or an independent reviewer can test the controls that the first line owns and the second line oversees. Independence guards against grading your own work. Coordinate so that teams are not tested by three groups for the same thing.

### Use indicators and decisions well

**9. Choose a few leading indicators per major risk.** A key risk indicator should be cheap to measure, linked to a cause, and paired with a threshold and a response. For example, the age of the oldest critical vulnerability signals security risk, and the share of changes needing emergency handling signals change risk. Define who looks at the indicator and what they will do at the threshold (see topic 8.1, Security incident and vulnerability metrics).

**10. Record the decision at each breach.** When an indicator crosses a threshold, someone decides: act, accept, or adjust the threshold. Write down the decision and the reason. This builds a history that shows whether thresholds are well set and whether the response is timely.

**11. Make risk-based approval the default for change.** In a continuous delivery setting, replace blanket approval boards with risk-based routes: automated checks and peer review for low-risk standard changes, and fuller review for the few high-risk changes (see topic 4.3, Change enablement metrics). Attach the evidence that the controls ran. This reduces risk and delay together, because small changes with automated evidence are safer than large ones with a signature.

**12. Learn from losses and near misses.** After incidents and close calls, update the register: was the risk there, was it rated well, did the control work? Use the answers to improve both. The loop between events and the register is what keeps the register honest (see topic 4.2, Postmortem and learning metrics).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Risk review currency | Marking risks as reviewed without discussion; changing the interval | Sample reviews for substance; fixed interval in the register |
| Owner coverage | Assigning owners without their knowledge; naming a senior person with no authority | Owner confirmation; check that owners can act on the response |
| Control test coverage | Testing the easy controls; counting design reviews as operating tests | Key control list fixed by a second party; test type recorded |
| Control effectiveness rate | Testing small samples; choosing samples that pass | Sample method independent of the owner; sample size recorded |
| KRI breach response time | Changing the threshold after a breach; recording a decision with no content | Threshold change log; decision content sample |
| Treatment plan timeliness | Setting easy dates; redefining completion | Dates agreed with the owner at approval; check that the risk rating moved |
| Risk-based change share | Classifying changes as low risk to avoid review; attaching evidence that was not produced by controls | Sample classification against rules; automated evidence from the pipeline |

A healthy reading is a short register that people argue about, owners who know their risks, controls tested with some failures found and fixed, indicators that lead real decisions, and fewer heavy approvals for small changes.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Risk matrix | Quick, visual, conversation starter | Subjective; false precision; ordinal arithmetic |
| Quantified ranges | More honest about uncertainty | Needs data and skill; effort |
| Heavy approval boards | Visible control | Slow; encourages batching of change |
| Risk-based automated checks | Fast and consistent | Needs engineering; automated checks can be wrong |
| Central risk function owns risks | Consistency | Far from the work; owners disengaged |
| First-line ownership | Knowledge and accountability | Variable quality; needs oversight |
| Periodic control testing | Efficient for stable controls | Misses drift between tests |
| Continuous control monitoring | Timely evidence | Tooling effort; noise |

The prose answer is to place ownership with the teams, apply light central oversight and independent testing, automate evidence where possible, and use ratings as prompts for conversation.

## Questions to discuss with your team

**1. What are the three risks most likely to hurt this service in the next year, and who owns each?**
Ask each member to write three risks privately, then compare. The overlap and the differences are both informative. The facilitator should record who would act on each risk. Agree the top three and confirm owners.

**2. Which control do we depend on most, and when did we last check that it works?**
Pick a control, such as a code review rule, a backup, or an approval step. Trace the last time evidence of its operation was examined. If nobody knows, plan a test. The conversation shows the difference between design and operation.

**3. What would make us change a rating from amber to red, and who would notice?**
Discuss the indicators and thresholds. Ask if the team has ever downgraded a rating to avoid attention, and what pressure caused it. Agree what evidence would justify a change, and how to make red a safe thing to say.

**4. Which approvals slow our changes without reducing risk?**
List the approvals a typical change needs, and for each ask what risk it addresses and whether it ever stopped a change. Propose replacing one with an automated check. Agree what evidence would show the change is safe.

**5. When a control failed, how did we find out, and what did we do?**
Recall a recent failure. Was it found by testing, by an incident, or by an auditor? Discuss what a stronger loop looks like. Include how the person who found it was treated.

**6. Which risks have we accepted, and when do we review that decision?**
List accepted risks and the review dates. Check that each has an owner and a reason. Accepted risk without a review date is a risk nobody is watching.

## Four perspectives

### Product and delivery teams

Delivery teams own most operational risk. They should maintain a short list of their own risks, discuss them in planning and review, and build controls into the pipeline so that evidence is automatic. They gain from risk-based change routes that let low-risk changes flow, and they should be honest about what could go wrong.

### Service and operations teams

Operations teams run the controls: backups, monitoring, access reviews, and recovery tests. They should keep evidence of operation, test controls on a regular cycle, and raise indicator breaches early. They bear the cost of heavy controls and should say which ones add little.

### Leadership and governance

Leaders set risk appetite and decide how much friction is acceptable. They should ask for a short list of top risks with owners and evidence, welcome red ratings, fund control testing, and support independent assurance. Governance should check that the register reflects incidents and near misses, and should not reward tidy-looking reports.

### Customers and users

Users bear the consequences of risks that materialize, and often know about them before the register does. They should have a way to flag concerns, and be told about risks that affect them, within the limits of confidentiality. Their experience of incidents and changes is evidence for risk reviews.

## In practice: a service management example

A national energy utility's digital group runs customer billing, a mobile app, and integrations with grid operations. The numbers below are illustrative.

The group's risk register has 340 entries, last cleaned up three years ago. The risk review currency is 22 percent, and 61 risks have owners who have left. The matrix shows 85 risks in red, and nobody reads the report. The new head of service assurance proposes a reset. With the delivery teams she cuts the register to the risks that would change a decision, ending with 38. She assigns each to a named owner in the team that can act, and they confirm. She chooses 12 key controls and tests operation for each, instead of reviewing design. Five fail: two backup restores had never been tested, one access review had been skipped, and two change approvals had been signed without evidence of testing.

The team fixes the failures and replaces the change approval board for standard changes with risk-based routes. Automated tests and peer review are the controls, and the pipeline attaches the evidence to the change record. Each major risk gets one or two leading indicators with thresholds and responses. For the risk of extended billing outage, the indicators are the age of the oldest critical vulnerability and the number of failed backup restores in the quarter. The first quarter shows owners confirming all 38 risks, review currency of 91 percent, a control effectiveness rate of 7 of 12 on first test and 12 of 12 after fixes, and a median KRI breach response time of 2 days. The share of changes through risk-based routes is 64 percent.

The chief risk officer asks for the number of red risks to fall by half within a year. The head of service assurance proposes tracking treatment plan timeliness and control effectiveness, and explains that the count of red risks can fall by re-rating, and that she would rather see honest red ratings. The decision is recorded, and the next quarter's report includes the sampled decisions behind each downgrade.

## Agile, AI, automation, and analytics

### Agile

Keep the risk register alive through regular conversations with stakeholders rather than an annual review. The caution is that scoring numbers can make uncertainty look tidy.

### AI

AI systems need entries in the risk register with an owner, a human review point, and a review date. Measure control effectiveness for AI oversight by testing it. The caution is that a policy that says a human reviews output is not a control until someone tests it.

### Automation

Automate control checks where they can be tested, and measure the automation on failed and skipped checks. The caution is that a passing automated control may test the wrong thing.

### Analytics

Report control test coverage and effectiveness with the sample size. The decision informed is which controls to strengthen. The caution is that small samples and subjective scoring limit precision, so say so.

## Sector lens

**Startup.** Risks are mostly about running out of money, losing key people, and a major outage. Keep a one-page list of the top five, review it monthly, and test backups and restores. Build controls into the pipeline from the start, since they are cheaper than retrofitting.

**Small business.** A handful of risks dominate: key person dependence, a single supplier, ransomware, and data loss. Keep a short list with owners, test restores, and keep insurance and contact details current. Resist heavy frameworks, and borrow from them what fits.

**Enterprise.** Scale calls for a common taxonomy, a lightweight register tooling, and the three lines of defence in practice. Make the first line own its risks, keep the second line small and advisory, and make independent testing efficient. Avoid duplicated tests across audit, risk, and compliance.

**Government and public sector.** Risk management is often a formal duty with standard frameworks, audit committees, and public reporting. Align with the required framework, document risk appetite statements, and keep evidence. Public accountability makes honest red ratings more valuable, and also harder (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the time of owners to review risks, the effort to define key controls and test them, tooling for the register and indicator monitoring if not already present, and the cost of independent assurance. Automating evidence collection takes engineering effort and then reduces recurring cost.

The returns are fewer surprises, faster and lighter change approval, and more credible assurance. A pruned register and risk-based change routes save time that large approval bodies consumed. Failed control tests found before an incident prevent losses that are hard to price. Build the case from your own data: the time spent per change approval before and after, the number of control failures found by testing versus found by incidents or auditors, and the cost of past incidents that a control would have prevented. Avoid citing industry loss statistics without a traceable source and method.

## Anti-patterns and pitfalls

- **A register that grows forever.** Nobody reads it. Prune it to the risks that matter.
- **Ratings without evidence.** They are opinions in colour. Attach evidence and ranges.
- **Owners in name only.** The risk sits with someone who cannot act. Confirm ownership with the right people.
- **Testing design and calling it assurance.** A control that could work may not have. Test operation.
- **Reporting only the count of red risks.** Counts fall by re-rating. Look at treatments and control results.
- **Approval boards for every change.** They slow small changes and teach batching. Use risk-based routes.
- **Punishing red ratings.** Risks are then hidden. Reward early warning.
- **Separate risk and delivery cultures.** Risk work done to teams, not with them, produces compliance theatre.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Register and ownership | Long, stale list | Register exists, partly owned | Short register with confirmed first-line owners and review dates | Reviews in team conversations; evidence and ranges attached | Risks shared across teams and suppliers with joint owners |
| Controls | Assumed to work | Design documented | Key controls named; operating tests on a cycle | Failures followed up; evidence automated where possible | Continuous control monitoring with human oversight and independent assurance |
| Decisions and change | Approvals by committee | Some standard changes pre-approved | Risk-based routes with evidence attached | Indicators with thresholds and recorded decisions; routes tuned from outcomes | Risk decisions embedded in pipelines across the organization and supply chain |

## Checklist

- [ ] The register is short, with risks written in cause, event, and consequence form.
- [ ] Every risk has a confirmed first-line owner who can act.
- [ ] Risks are reviewed within the team's regular conversations.
- [ ] Key controls are named and tested for operation on a stated cycle.
- [ ] Control failures are logged, explained, and fixed.
- [ ] Each major risk has one or two leading indicators with thresholds and responses.
- [ ] Decisions at indicator breaches are recorded.
- [ ] Risk-based change routes exist, with evidence attached automatically where possible.
- [ ] Accepted risks have an owner, a reason, and a review date.
- [ ] Incidents and near misses update the register.

## AI prompts

**Rewrite risks in a standard form.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Design a control test.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Propose leading indicators for a risk.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Review a change approval process.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a risk or control metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a risk metric entry carries its gaming vector, guardrail, and evidence rule.

## Key takeaways

- Keep the risk register short, owned by the teams that can act, and reviewed in conversations that already exist.
- Test that key controls operate, treat failures as useful information, and automate the evidence.
- Use a few leading indicators with thresholds, responses, and recorded decisions.
- Replace blanket approval with risk-based change routes backed by automated evidence.
- Show ranges and evidence instead of false precision, and use matrices to start conversations.
- Make red ratings safe to give, and learn from losses and near misses.

## References and further reading

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
