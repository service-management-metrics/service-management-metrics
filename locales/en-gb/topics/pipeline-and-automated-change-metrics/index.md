# Pipeline and automated change metrics

**A delivery pipeline is both the way changes reach users and the source of the evidence that they are safe, so measure its speed, its reliability, how much of change approval it handles, and whether the evidence it produces would convince an auditor, and read all of these as measures of a system, never of the people who use it.**

## Overview and motivation

A [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) and [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) pipeline takes a change from a developer's work to a running service through automated build, test, security checks, and deployment. When a pipeline is trusted, it can also make the decisions that a change advisory board once made for routine changes. ITIL calls the practice of managing change "change enablement", and its aim is to let beneficial changes happen safely and quickly. A pipeline that runs checks, records the evidence, and approves low-risk changes automatically is one way to meet that aim.

The pipeline is therefore two things at once. It is a production system, with its own availability, speed, and failures, and it is a control, with evidence about what was tested, who reviewed, and what was approved. Both need measuring. A fast pipeline that skips checks is a risk. A slow, flaky pipeline pushes people to bypass it, and bypassed changes escape every control the pipeline was meant to provide.

This topic complements the change measures of Part 4 (see topic 4.3, Change enablement metrics, and topic 4.4, Change failure and rework) and the release measures (see topic 4.5, Release and deployment metrics) by focusing on the pipeline as a system. It complements the DORA measures (see topic 2.8, DORA metrics) by looking at what happens inside the pipeline. It also relates to the general automation measures of topic 10.6 (see topic 10.6, Automation and orchestration metrics).

Terms used here. A **pipeline run** is one execution of the pipeline for one change. A **stage** is a step in the pipeline, such as build or test. A **flaky test** is a test that sometimes passes and sometimes fails on the same code. A **bypass** is a change that reaches production without passing the pipeline, for example through an emergency manual deployment. **Policy as code** means writing rules, such as "no deployment without a passed security scan", as software the pipeline enforces. **Evidence** is the recorded proof of what a change went through. A **standard change** in ITIL is a low-risk, well-understood, pre-approved type of change.

## Key principles

- **The pipeline is a service.** Measure its reliability, speed, and failures as you would for any production system, and give it an owner.
- **Measure the bypass.** The number of changes that avoid the pipeline shows how much the pipeline can be trusted.
- **Automate approval by risk, with evidence.** Pre-approve what is well understood, and keep human review for what is not.
- **Evidence is a product.** What the pipeline records should answer an auditor's questions without a scramble.
- **Fast and safe are measured together.** Speed measures are paired with failure and rework.
- **Describe systems, not people.** Pipeline data about who pushed a change is not a performance ranking.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pipeline success rate | Share of pipeline runs that finish without a failure caused by the pipeline or its environment | runs that pass or fail only on a genuine code defect / runs started; runs cancelled by the user are excluded and reported | percent | Pipeline platform logs | Release management; change enablement | Continuous integration health | Weekly |
| Pipeline duration | Time for a change to move through the pipeline | median and 85th percentile of (time the last stage finishes minus time the run starts) for runs that reach deployment | minutes | Pipeline platform logs | Release management | Short feedback loops | Weekly |
| Flaky test rate | Share of test failures that pass on rerun with no code change | failures that pass on rerun / test failures | percent | Test results and rerun logs | Release management | Definition of done; test practice | Monthly |
| Automated approval share | Share of changes approved by pipeline policy without a human approval step | changes approved by policy only / changes deployed | percent | Pipeline and change records | Change enablement | Trunk-based development with automated checks | Monthly |
| Bypass rate | Share of production changes that did not pass through the pipeline | production changes made outside the pipeline, found by comparing deployment records with pipeline records / all production changes | percent | Deployment records, configuration audit, and pipeline logs | Change enablement; configuration management | Working agreements | Monthly |
| Evidence completeness | Share of pipeline-deployed changes whose record shows the required evidence | changes with all required evidence items (tests, review, scan, approval) linked / changes deployed | percent | Pipeline and change records | Change enablement; governance | Definition of done | Monthly |
| Policy gate failure rate | Share of runs stopped by a policy check, split by genuine violation and policy error | runs stopped by a policy gate / runs started; reasons classified by sampling | percent | Pipeline logs and gate records | Change enablement; risk management | Acceptance criteria | Monthly |

Pipeline success rate excludes runs cancelled by a person, which are reported separately, and counts a failure caused by a flaky test or an environment fault as a pipeline failure. Bypass rate needs an independent record of what is running in production, so it cannot be computed from the pipeline alone.

## Recommendations

### Treat the pipeline as a service

**1. Give the pipeline an owner and objectives.** A named team owns the pipeline's reliability and speed, with service level objectives such as the share of runs that finish within a stated time. Without an owner, flakiness grows until people stop trusting it.

**2. Measure duration as a distribution.** A median hides the slow runs people wait on. Show the median and the 85th percentile, and break duration into stages to find the longest wait, which is often a queue for a shared runner or a manual approval.

**3. Track and fix flaky tests.** A flaky test teaches people to rerun until green. Count flaky failures, assign each to an owner, and fix or quarantine it with a date. A pipeline that people rerun by habit is not producing evidence.

### Automate approval carefully

**4. Classify changes by risk.** Agree with change owners which kinds of change are standard and can be approved by policy, and which need a person. Review the classification regularly using failure data (see topic 4.4, Change failure and rework).

**5. Write policy as code and test it.** Rules enforced by the pipeline are code, and need tests and owners like any code. Record which policy version applied to each run.

**6. Keep a human path for the unusual.** Emergency and high-risk changes need a person who can decide with the evidence. Test that the path works and measure how long it takes.

### Produce useful evidence

**7. Decide what evidence you need.** Work backward from the questions an auditor or incident reviewer asks: what was tested, who reviewed, what was scanned, who approved, and what was deployed. Make the pipeline record exactly that and link it to the change.

**8. Measure completeness by sampling.** Evidence completeness from the pipeline's own count can be high while the content is empty. Check a sample of records to confirm that the evidence is real and matches what ran.

**9. Keep evidence tamper-evident.** Store pipeline records where the people who deploy cannot edit them, and keep them for the retention period your rules require. Check retention requirements with your own legal adviser.

### Watch for bypass and drift

**10. Compare production with the pipeline.** Reconcile what is running in production with what the pipeline deployed. Differences are bypasses or drift, and each deserves a short, blameless look at why the pipeline was avoided.

**11. Make the pipeline the easiest path.** People bypass slow and flaky pipelines. If bypass rises, look first at speed and reliability, and at emergency needs the pipeline does not meet.

**12. Review gates for value.** A gate that never stops a genuine defect and delays every run is a candidate for removal or redesign. A gate that stops many runs because of policy errors needs a policy fix.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Pipeline success rate | Reclassifying infrastructure failures as cancelled; rerunning until green and counting only the last run | Count all attempts; report reruns per change |
| Pipeline duration | Moving slow stages outside the measured window; skipping stages | Measure end to end from commit to deployed; compare stages run with stages required |
| Flaky test rate | Deleting or silencing flaky tests; marking failures as known | Test count and coverage trend; review quarantined tests with a date |
| Automated approval share | Widening the "standard" class to include risky changes | Change fail rate for automatically approved changes; sample approved changes |
| Bypass rate | Recording emergency manual deploys as pipeline runs; not reconciling with production | Reconcile production state with pipeline records; sample deployments |
| Evidence completeness | Attaching empty or irrelevant evidence; linking a generic report | Sample evidence content; check that it matches the change |
| Policy gate failure rate | Loosening policies to reduce failures; classifying genuine violations as policy errors | Sample stopped runs; escaped defect rate and findings from audit |

A healthy reading is a pipeline that is fast and stable enough that people use it for everything, a bypass rate near zero with each exception understood, a growing share of automated approvals with a steady change failure rate, and evidence that holds up when sampled.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Heavy pipeline checks | Catches defects early; strong evidence | Slow runs; more flakiness; pressure to bypass |
| Light pipeline | Fast feedback | Weaker evidence; more defects reach production |
| Automated approval for standard changes | Removes waiting; consistent decisions | Risk of widening the class; policy errors scale |
| Human approval for all changes | Familiar; visible accountability | Waiting; approvals can become formalities |

The prose conclusion is to keep the pipeline fast and trusted, approve by policy only what is well understood, and measure the bypass. Heavy checks that people avoid protect nothing.

## Questions to discuss with your team

**1. What fraction of our production changes go through the pipeline, and how do we know?**
Ask for a way to compare production state with pipeline records. Teams often find emergency fixes, configuration changes, and data changes that go around the pipeline. Expect defensive answers, so treat each bypass as information. Follow up by asking what would have made the pipeline the easier route.

**2. Which of our tests do we rerun until they pass, and who owns them?**
Rerun habits show where trust has eroded. Make a list and assign owners. Discuss whether to fix or remove each one. The conversation often shows a few tests cause most of the noise.

**3. Which changes do we approve automatically today, and which should we?**
List the types of change and the failure history of each. Decide which have low risk and good tests. Ask what would make you stop approving a type automatically. Follow up by agreeing a review date for the classification.

**4. If an auditor asked about last Tuesday's deployment, what could we show?**
Walk through one real change and pull its evidence. Notice gaps and manual steps. Ask whether the evidence was recorded at the time or reconstructed later. Follow up by choosing one gap to close.

**5. Where does our pipeline spend its time, and who waits?**
Look at the stage breakdown. The longest wait is often a queue or a manual approval. Ask whether the people waiting could do something else, and what the wait costs in delayed feedback. Choose one delay to remove.

**6. Which gate has never stopped anything useful?**
Look at gate stop reasons for the past quarter. A gate with only policy errors needs fixing, and a gate that never stops anything may be redundant. Ask whether removing it would raise risk. Agree a trial.

## Four perspectives

### Product and delivery teams

You depend on the pipeline every day. Keep tests reliable, keep changes small, and treat a flaky test as a defect in the product. Use pipeline data to find your own delays, and keep it away from individual performance conversations.

### Service and operations teams

You inherit what the pipeline releases. Ask for the evidence you need for an incident, such as what changed and when, and for fast rollback. Track bypasses and drift, and bring them to the team as a conversation about why.

### Leadership and governance

Fund the pipeline as a production service, with an owner, capacity, and time to fix flakiness. Ask for bypass rate, evidence completeness by sampling, and the change failure rate of automated approvals. Resist pressure to count deployments as a measure of success.

### Customers and users

You benefit when changes arrive often and safely, and you suffer when a change breaks something. Ask how changes are tested and how quickly a bad change is undone. Your reports of problems after a release are part of the feedback the pipeline cannot supply.

## In practice: a service management example

A regional hospital's IT department runs a pipeline for its clinical scheduling application. Numbers in this example are illustrative. A change advisory board meets weekly, and routine changes wait an average of four days for approval. The team proposes to approve standard changes through the pipeline.

Before starting, they measure. Pipeline success rate is 82 percent, and a sample of failures shows that about a third are flaky tests. Duration at the 85th percentile is 47 minutes, with a 20-minute queue for a shared build runner. Comparing deployment records with pipeline records shows that about 12 percent of production changes bypassed the pipeline, mostly configuration edits and urgent fixes.

The team fixes the five flakiest tests, adds a build runner, and creates a configuration change path through the pipeline. After three months, bypass falls to 3 percent. They then define a standard change class of small, tested, reversible changes to the scheduling application, with policy checks for tests, a security scan, and peer review. Automated approval share reaches about 40 percent, and approval lead time for those changes falls from days to minutes.

A gaming risk appears. A manager asks to raise the automated approval share by adding database schema changes to the standard class. The team checks the change failure rate for schema changes, which is higher than for other changes, and keeps them with a human reviewer. Evidence completeness by the pipeline's count is 98 percent, but a sample of 20 records shows that four had a test report from a different build attached. The team fixes the linking rule. What remains hard: bypass for emergency fixes still needs a post-hoc record, and the clinical risk review for changes that affect patient safety stays with people.

## Agile, AI, automation, and analytics

### Agile

Small, frequent changes through a trusted pipeline are the core of continuous delivery, and the pipeline's own backlog deserves the same regular review with stakeholders as the product. A good practice is to review flaky tests and bypasses at a regular improvement conversation. The caution is that celebrating deployment frequency alone rewards splitting changes.

### AI

AI can write code and tests, review changes, and assess change risk inside the pipeline. Mark AI-assisted changes in the data and compare their failure and rework with other changes (see topic 10.2, Measuring AI-assisted work). If an AI gate decides or recommends, measure its false approvals and false stops by sampling, and keep a human accountable for high-risk changes. The caution is that AI-generated tests can raise coverage numbers without testing behaviour that matters.

### Automation

The pipeline is the automation, so the practice is to treat it as a production service with logs, an owner, and a manual fallback for emergencies. Automate the evidence collection and the reconciliation of production with pipeline records. The caution is that automated approvals multiply the effect of a policy error, so test policies and keep a pause control.

### Analytics

Use pipeline events to show where time goes and where failures cluster, and link runs to incidents and rework. The decision informed is where to invest in speed, reliability, or tests. The caution is that pipeline data does not show the quality of the tests, so combine it with escaped defects, and show the number of runs behind each rate (see topic 10.8, Analytics and data quality metrics).

## Sector lens

**Startup.** A simple pipeline with fast tests and an automatic deploy to production may be enough. Measure duration and bypass, and record evidence of tests and review in the repository.

**Small business.** The pipeline may be a hosted service or a supplier's. Ask what it records and where, and keep a way to reconstruct what was deployed. Avoid building controls you will not maintain.

**Enterprise.** Many pipelines across teams need common evidence formats and shared policy. Keep a central view of bypass and evidence completeness, with team-level ownership of fixes. Avoid forcing one tool where teams have different needs.

**Government and public sector.** Separation of duties, audit trails, and retention rules shape the pipeline. Design the evidence for audit, and check legal and procurement requirements, including for automated decisions (see topic 8.3, Compliance and audit metrics, and topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the pipeline platform and runners, the work to write and maintain tests and policy, time to fix flakiness, and the cost of storing evidence. The measures themselves cost little when pipeline and change records are linked.

The return is shorter waits for approval, fewer manual steps, earlier detection of defects, and evidence that is ready when needed. These show up as faster delivery and less effort at audit time, but they are easy to overstate. Measure your own baselines, such as approval lead time and effort to assemble audit evidence, before and after, and state assumptions as ranges (see topic 7.7, Return on investment and business case). The risk side is the cost of failures that escape the pipeline and of a pipeline outage that blocks all change.

## Anti-patterns and pitfalls

- **Counting deployments as success.** It rewards splitting changes. Pair with failure and rework.
- **Rerun until green.** It hides flaky tests and weak evidence. Count flakes and fix them.
- **Ignoring bypass.** The changes that avoid the pipeline are the ones it cannot protect. Reconcile production with pipeline records.
- **Widening the standard class to raise automation.** The share rises and the failure rate follows. Review the class with failure data.
- **Evidence that exists but says nothing.** Sample content, not just presence.
- **A pipeline with no owner.** It decays. Name a team and give it time.
- **Policy errors treated as code defects.** People learn to ignore gates. Classify stops and fix policy.
- **No manual path for emergencies.** People bypass. Provide a fast, audited path.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Pipeline reliability | Ad hoc builds; frequent unexplained failures | Pipeline exists; success tracked | Owner, objectives, and flaky test handling | Duration and failures reviewed by stage | Pipelines share patterns and capacity across teams |
| Approval and policy | Manual approval for all changes | Some standard changes defined | Policy as code for standard changes, with tests | Approval classes reviewed with failure data | Risk-based approval adapts automatically within agreed limits |
| Evidence and bypass | Evidence reconstructed after the fact | Some evidence recorded | Required evidence recorded and linked | Bypass reconciled and completeness sampled | Evidence and reconciliation fully automated and audited |

## Checklist

- [ ] The pipeline has a named owner and objectives for reliability and speed.
- [ ] Pipeline success rate and duration percentiles are reported by stage.
- [ ] Flaky tests are counted and each has an owner and a fix date.
- [ ] Standard change classes are defined with risk criteria and reviewed with failure data.
- [ ] Policies are code, tested, and versioned, and the version is recorded per run.
- [ ] Production state is reconciled with pipeline records to find bypasses.
- [ ] Required evidence is defined and recorded for each deployed change.
- [ ] Evidence completeness is checked by sampling content.
- [ ] An audited emergency path exists and is tested.
- [ ] Each metric has a gaming vector and a guardrail shown beside it.

## AI prompts

**Classify changes by risk for automated approval.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Define the evidence a pipeline should record.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Analyze flaky test data.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Review the gaming risk of the pipeline dashboard.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## AI skills

- [Change request](../../../../skills/change-request/SKILL.md): use to define what a change record and its evidence should contain.
- [Release notes](../../../../skills/release-notes/SKILL.md): use to turn pipeline output into notes for users and operations.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- A pipeline is both a production service and a control, so measure its reliability, speed, and the evidence it produces.
- Measure the bypass by reconciling production with pipeline records, and make the pipeline the easiest path.
- Approve automatically only well-understood changes, with tested policy and a human path for the rest.
- Count flaky tests and fix them, because rerunning until green destroys trust and evidence.
- Sample evidence content, because completeness counts alone can be satisfied with empty records.

## References and further reading

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
