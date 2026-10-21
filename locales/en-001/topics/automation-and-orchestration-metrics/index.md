# Automation and orchestration metrics

**Automation has paid off only when it removes work people do not want to do without creating new work, new failures, or new risk, so measure what each automation removes, how often it fails, how fast it can be undone, and who decides when it should stop.**

## Overview and motivation

[Automation](https://en.wikipedia.org/wiki/Automation) in service management means letting software do work that a person used to do: provisioning an account, restarting a service, routing a ticket, approving a standard change, or posting a status update. [Orchestration](https://en.wikipedia.org/wiki/Orchestration_(computing)) coordinates several automated steps, often across tools and teams, into one flow such as "onboard a new employee" or "recover this service". ITIL's guiding principle "optimize and automate" is a long-standing statement of the idea, and continuous delivery depends on it. Practices such as [infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) turn the setup of systems into versioned, testable files, so automation is also a form of record.

Automation shifts risk from slow and visible to fast and wide. A person who makes a mistake affects one ticket. An automated step with the same mistake can affect every ticket in a minute. That is why automation needs its own measures, and why counts such as "number of automations" or "hours saved" are weak. They describe how much was built and how much was claimed, not whether anyone is better off.

This topic differs from the earlier measures of self-service and automation in service requests (see topic 3.7, Self-service and automation metrics), which are about the user-facing request flow. Here the subject is automation as an engineering and operations asset: its coverage, reliability, safety, ownership, and cost. It also differs from the pipeline measures of topic 10.7 (see topic 10.7, Pipeline and automated change metrics), which cover the path a change takes to production.

Terms used here. An **automation** is a defined task that runs without a person performing its steps. A **runbook** is documented procedure for an operational task, and **runbook automation** executes it. An **orchestration** is a flow that coordinates automations. **Human in the loop** means a person reviews or approves before an action takes effect. **Toil** is repetitive manual operational work that scales with the service and has no lasting value (see topic 5.7, Toil and on-call metrics). A **guardrail** here has two senses: the paired measure used throughout this book, and a technical limit on what an automation may do. The text says which is meant.

## Key principles

- **Measure the effect, not the count.** The number of automations says little. What they remove and what they break says a great deal.
- **Every automation has an owner.** An unowned automation is a risk that grows with age.
- **Make every automated action visible and reversible.** Log what ran, on what, with what result, and know how to undo it.
- **Choose where a human decides.** Match the human's role to the risk of the action, and test that the role can be exercised.
- **Measure automation as a service.** It has reliability, change, cost, and retirement like any other service.
- **Automate the stable and the boring first.** Automating something poorly understood fixes a problem into the system.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Automation run success rate | Share of automation runs that completed and achieved the intended result, confirmed by a check after the run | runs with a successful post-run check / runs started in the period; runs with no post-run check are excluded and reported separately | percent | Orchestration and automation platform logs | Service request management; release management | Definition of done for automated work | Monthly |
| Task automation coverage | Share of eligible, repeated tasks that are automated | tasks on the agreed eligible list that run automated / tasks on the eligible list; the eligible list is reviewed each quarter | percent | Task inventory and runbook register | Continual improvement | Backlog of automation candidates | Quarterly |
| Manual intervention rate | Share of automation runs that needed a person to step in or fix | runs with a manual step added after start / runs started | percent | Automation logs and ticket links | Incident management | Escaped defects in automated work | Monthly |
| Automation-caused incident rate | Incidents attributed to an automated action, per 1,000 runs | incidents with a confirmed automation cause / automation runs x 1,000 | count per 1,000 runs | Incident records linked to run identifiers | Incident management; problem management | Change fail rate for automated change | Monthly |
| Rollback time | Time to undo an automated action once the need is recognized | median and 95th percentile of (time the undo completes minus time the decision to undo was made) | minutes | Automation logs and incident timeline | Change enablement | Rollback ability in the definition of done | Quarterly |
| Time saved, verified | Hours of manual work removed, checked by sampling | tasks automated x (median manual task time from a time sample minus median residual manual time) over the period; sample date stated | hours | Time samples and run counts | Continual improvement | Value delivered per item of work | Quarterly |
| Automation ownership currency | Share of automations with an owner who confirmed ownership and reviewed the automation in the last 12 months | automations with confirmed owner and review in 12 months / automations in the register | percent | Automation register | Governance; asset and configuration management | Team charter and ownership | Quarterly |

Formulas count runs, not tasks, unless stated. "Successful" requires an independent post-run check, such as confirming the service is healthy or the account exists; a run that only exits without error is not counted as successful. Time saved excludes time spent building and maintaining the automation, which is counted separately as cost (see topic 7.7, Return on investment and business case).

## Recommendations

### Decide what to automate

**1. Start from a list of repeated tasks, not tools.** Rank repeated tasks by how often they happen, how long they take, how error-prone they are, and how well understood they are. Automate the stable and well-understood ones first, and leave the rare and the poorly understood to people.

**2. Fix the process before automating it.** Automating a confusing process makes the confusion faster. Walk the steps with the people who do them, remove steps that add nothing, and then automate.

**3. Choose the human's role by risk.** For low-risk, reversible actions, a person may only review a log afterward. For higher-risk actions, a person approves before the action. For the highest, the action may stay manual. Write the rule down, and test that approvers have the information to decide.

### Make automation safe

**4. Require an owner and a register.** Every automation has a named owner and an entry in a register with its purpose, scope, permissions, and last review. When an owner leaves, ownership moves before the person does.

**5. Limit permissions and scope.** An automation should have the least access that does the job, and a limit on how much it can change in one run, such as a maximum number of accounts or servers. A scope limit is a technical guardrail that caps the damage of a bad run.

**6. Check the result, not the exit code.** Add a post-run check that confirms the intended state, and measure success by that check. A script that exits cleanly may have done nothing.

**7. Log and plan the undo.** Every run records what it changed, and every automation has a tested way to reverse its change or a stated reason it cannot. Practice the rollback in a safe setting and measure the time it takes.

### Measure honestly

**8. Verify time saved by sampling.** Claims of hours saved are often optimistic. Time a sample of the manual task before and after, state the date of the sample, and subtract the cost of maintenance and of failures.

**9. Report failures and interventions beside coverage.** A high coverage number with a high manual intervention rate means people are fixing what the automation breaks. Show both on one page.

**10. Retire what no longer helps.** An automation whose task has changed or disappeared is a risk. Review use at a regular cadence and remove automations with no runs or no owner.

**11. Keep a human able to stop it.** Provide a clear way to pause an automation or a whole class of automations quickly, and measure how fast that can happen.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Automation run success rate | Counting a run as successful when it exits cleanly; deleting failed runs from the log | Independent post-run check; compare logs with downstream records |
| Task automation coverage | Shrinking the eligible list so coverage rises; automating trivial tasks first | Review the eligible list with a second team; weight by volume and time |
| Manual intervention rate | Logging manual fixes as separate tickets so the run looks clean | Link tickets to run identifiers; sample runs for hidden fixes |
| Automation-caused incident rate | Attributing automation failures to people or tools; not linking incidents to runs | Require a run identifier in incident records; sample incidents for missed links |
| Rollback time | Measuring only rollbacks that were easy; starting the clock late | Practice rollback in a drill for the hardest automations; define the start of the clock |
| Time saved, verified | Using optimistic task times; ignoring maintenance and failure cost | Time samples by someone outside the team; include build and maintenance cost |
| Automation ownership currency | Naming a distribution list or a former employee as owner | Owner confirms in writing; check owner is active |

A healthy reading is rising coverage with a steady or falling manual intervention rate and incident rate, verified time saved that matches what the team feels, and a register that stays current because retired automations are removed.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Automate widely and early | Removes toil; faster and more consistent work | Fast, wide failures; maintenance burden; hidden dependencies |
| Automate selectively with human checks | Lower risk; people stay skilled | Slower; approvers may rubber-stamp |
| Count automations and hours saved | Simple to report and compare | Rewards quantity; claims often unverified |
| Measure effect, failures, and rollback | Shows real value and risk | More effort to collect; requires linking records |

The prose conclusion is to automate what is stable and understood, measure what it removes and what it breaks, and keep people able to stop it. An automation that saves hours but causes an occasional serious incident may be a poor trade, and only the paired measures will show that.

## Questions to discuss with your team

**1. Which automations do we run today, and who owns each one?**
Build the list together, because teams usually find automations nobody remembers building. Ask for the purpose, the permissions, and the last review date. Expect scripts on individual machines and scheduled jobs with former employees as owners. Follow up by agreeing who owns each one by the end of the quarter.

**2. When did an automation last make a problem bigger or faster than a person would have?**
Invite stories without blame. Typical examples are a clean-up job that removed the wrong resources, or a remediation that restarted a service during an outage. Ask what limit would have capped the damage. The answers become the scope limits and approval rules.

**3. For our riskiest automated action, who decides, and could they decide well?**
Look at what the approver sees at the moment of approval. Often the approval request lacks the information needed to judge. Ask whether the approver could say no and what would happen if they did. Follow up by improving the request or changing the role.

**4. How would we know an automation has silently stopped working?**
Silent failure is the most common problem, and it often shows as flat numbers. Ask for the check that would notice. Discuss alerts on missing runs and on results that do not match expectation. Choose one automation and test it.

**5. Which hours saved did we actually spend on something better?**
Time saved on paper may not become capacity. Ask where the time went and who decided. Be honest about maintenance and failure cost. Follow up by selecting one claim to verify with a sample.

**6. Which automation should we retire, and what would it take?**
Ask for evidence of use and of value. Retirement can feel like failure, so frame it as routine maintenance. Identify dependencies before removing anything. Agree on a trial period and a way to restore it.

## Four perspectives

### Product and delivery teams

Build automation as part of the product, with tests, logs, an owner, and a way to roll back. Include post-run checks in the definition of done, and avoid automating steps that the team does not yet understand. Keep metrics at the level of the team's automations, not of individual engineers.

### Service and operations teams

You carry the pager when automation fails, so insist on visibility and an easy stop. Track manual interventions and incidents caused by automation, and use them to prioritize fixes. Treat the automation register as part of the service record.

### Leadership and governance

Ask for effect, failures, and rollback readiness, not just counts of automations. Fund maintenance of automation as well as its creation, and expect some automations to be retired. Set expectations for human oversight by risk and review the list of the riskiest actions.

### Customers and users

You should not notice automation when it works, and you should have a person to turn to when it does not. Ask how to reach a person, and say when an automated action was wrong. Your feedback is part of the check that the automation helped.

## In practice: a service management example

A mid-sized online retailer's operations team automates three tasks: restarting a failing web server, resetting customer-service passwords, and cleaning up unused cloud storage. Numbers in this example are illustrative. After a quarter, the dashboard shows 3 automations, 2,400 runs, and "about 180 hours saved". Leadership is pleased and asks for more.

The team applies the measures. Automation run success rate looks like 98 percent by exit code. With a post-run check, it falls to 91 percent: the password reset reports success but, for 9 percent of runs, the user cannot sign in. The manual intervention rate for that automation is 11 percent. The restart automation has caused two incidents, one when it restarted servers during a database failover, with a rollback time of about 40 minutes because nobody had practiced it.

The time sample shows that the manual password reset took about four minutes, not the ten the original estimate used, and that handling failed resets takes about as long as the original task. Verified time saved is closer to 60 hours. The storage clean-up has an owner who left the company in the spring.

The team decides to add a post-run check to the password reset, a scope limit and a pause rule to the restart automation, and a new owner to the clean-up. A manager proposes counting "automations built" as a team goal. The team declines, because it would reward building more of the same. The remaining difficulty is that the post-run check for passwords needs a test account, and the rollback drill for the restart automation is scheduled for next quarter.

## Agile, AI, automation, and analytics

### Agile

Treat automation as a product that is improved continuously with the people who use and depend on it. A good practice is a short regular review of the automation backlog, failures, and interventions with stakeholders. The caution is that frequent small changes to automation need the same testing as other change, or the failures arrive faster.

### AI

AI can draft runbooks, write scripts, and decide which action to take, and agentic AI can act on systems. Treat any AI that can act as an automation with an owner, permissions, scope limits, an approval rule, and a rollback. Pair its success rate with the rate of wrong actions and the share a person had to reverse (see topic 10.3, AI agent and chatbot metrics). The caution is that an AI-written script looks authoritative, so test it as you would any code.

### Automation

This is the topic's subject, so the practice is to measure the automation platform itself: its availability, run failures, and queue times, since many services depend on it. Collect run data automatically with run identifiers that link to tickets and incidents. The caution is that the automation platform becomes a single point of failure, so have a manual fallback for critical tasks.

### Analytics

Link runs to outcomes: successful post-run checks, tickets, and incidents. The decision informed is which automation to fix, extend, or retire. The caution is that attribution depends on consistent identifiers, so audit the link rate, and show the number of runs behind each rate (see topic 10.8, Analytics and data quality metrics).

## Sector lens

**Startup.** Small teams automate fast and with few controls. Keep a short list of automations with owners, put a post-run check on anything that touches customers, and avoid building an orchestration platform before there is a need.

**Small business.** Automation often means a few scheduled jobs and a managed service. Ask your supplier what automation runs on your behalf and what the rollback is. Keep a list, and check that someone owns each item.

**Enterprise.** Many automations across many teams create dependencies and duplication. Keep a central register, standard logging and run identifiers, and a review path for high-risk actions. Share automations across teams instead of rebuilding them.

**Government and public sector.** Accountability and audit needs mean every automated action must be traceable to a decision and an owner. Keep logs and approvals as evidence, and check procurement and legal rules for automated decisions that affect citizens (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are building and testing the automation, running the platform, maintaining the automation as systems change, and the cost of failures. Collecting the measures costs little if runs are logged with identifiers. The larger cost is the discipline of owners, reviews, and rollback drills.

The return is removal of toil, faster and more consistent work, and fewer manual errors. These are real but easy to overstate, so verify with samples. The risk side is incidents caused by automation, and the cost of an automation nobody maintains. A fair business case compares verified time saved, plus avoided errors, with the full cost including maintenance and incidents, and states the assumptions as ranges (see topic 7.7, Return on investment and business case). No benchmark figures are given here, because they vary widely by context. Measure your own baselines before you start.

## Anti-patterns and pitfalls

- **Counting automations built.** It rewards quantity. Report effect, failures, and rollback instead.
- **Success by exit code.** A clean exit proves little. Check the intended result.
- **Unowned automations.** They fail silently as systems change. Keep a register and confirm owners.
- **Automating a bad process.** The fault moves faster. Fix the process first.
- **No undo.** A fast wrong action with no reversal is the worst case. Plan and practice rollback.
- **Claiming hours saved without a sample.** Verify with time samples, and subtract maintenance.
- **Approval as theater.** An approver without the information to decide adds delay and no safety. Redesign the request.
- **Automation as a single point of failure.** Keep a manual path for critical tasks.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Ownership and register | Scripts known only to their authors | Main automations listed | Register with owner, scope, and review date | Reviews and retirements on a cadence | Shared catalog and standard patterns across teams |
| Safety and rollback | No undo; exit-code checks | Some post-run checks and logs | Post-run checks, scope limits, and tested rollback | Rollback drills; incidents linked to runs | Safety patterns built into the platform |
| Value evidence | Counts and estimates | Time saved estimated | Time saved sampled and verified | Effect, failures, and cost reviewed together | Portfolio of automation managed by value and risk |

## Checklist

- [ ] Every automation has an owner who has confirmed ownership.
- [ ] A register lists each automation with purpose, scope, and permissions.
- [ ] Each automation has a post-run check that confirms the intended result.
- [ ] Runs are logged with identifiers that link to tickets and incidents.
- [ ] Each automation has a scope limit and a tested way to undo or pause it.
- [ ] The human role is defined for each automated action by risk.
- [ ] Time saved is verified by a dated sample.
- [ ] Manual interventions and automation-caused incidents are reported with coverage.
- [ ] Unused or unowned automations are reviewed and retired.
- [ ] Each metric has a gaming vector and a guardrail shown beside it.

## AI prompts

**Build an automation register from material you paste in.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Design a post-run check and rollback for one automation.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Review the gaming risk of an automation dashboard.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Plan a time-saved verification.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## AI skills

- [Runbook](../../../../skills/runbook/SKILL.md): use to document a task before automating it.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): use to analyze an incident caused by an automated action.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- Automation counts and hours saved describe effort and claims, so measure effect, failures, and rollback.
- Every automation needs an owner, a register entry, a post-run check, a scope limit, and a way to undo or pause it.
- Choose where a human decides by risk, and test that the human can decide well.
- Verify time saved with dated samples, and subtract maintenance and failure cost.
- Retire automations that are unowned, unused, or no longer needed.

## References and further reading

1. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (computing)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
