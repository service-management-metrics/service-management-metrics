# AI governance and risk metrics

**AI use needs the same discipline as any change to a live service: know where it is, who owns it, how risky it is, how it is tested and changed, and what happens when it goes wrong, with oversight that people can actually exercise.**

## Overview and motivation

AI arrives in an organization through many doors. A team adopts a coding assistant. A vendor adds a generative feature to a product already in use. A staff member pastes a document into a public tool. A department builds a model to score requests. Each is a use of AI with its own benefits and risks, and few are visible in one place. Governance is the set of structures, policies, and practices that make those uses known, accountable, and safe enough. Risk metrics tell you whether the governance works.

ITIL has the building blocks: governance of the service value system, risk management, change enablement, information security management, supplier management, and continual improvement. Agile and DevOps ways of working supply the habit of small, controlled, reversible change, and of automated checks in the pipeline. AI governance does not need a separate universe. It needs these practices applied to things that behave differently from conventional software.

What is different about AI?

- **Behaviour is statistical and can change without a code change.** A model may behave differently after a vendor update, a change in its inputs, or a change in the prompt. The data it sees in production can drift from the data it was tested on, a phenomenon known in machine learning as drift. A system can degrade quietly.
- **Outputs are not fully predictable.** Testing cannot cover every input, so evaluation is by sampling and by targeted tests, not by proof. Systems can fail in ways their builders did not foresee.
- **Harms can be diffuse and unequal.** [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias) is systematic error that leads to unfair outcomes for some groups. It can arise from data, design, or use, and it may not show up in overall accuracy figures.
- **New attack surfaces appear.** [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection) is an attack in which instructions hidden in input data manipulate a language model into unintended behaviour. Models can be induced to reveal data or take actions their owners did not intend.
- **Dependence on suppliers is deep.** Many AI capabilities come from external providers, with limited visibility into how they are built or changed. Supplier measures matter more (see topic 8.4, Supplier and contract metrics).
- **Rules are emerging and differ by place.** Laws, standards, and guidance on AI are developing quickly. The European Union's [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) takes a risk-based approach with obligations that apply in phases, and other jurisdictions are taking different paths. Standards such as ISO/IEC 42001 on AI management systems and the NIST AI Risk Management Framework offer structures. Statements about specific rules in this topic are dated as of October 2026 and should be rechecked, and legal advice should guide your obligations. The wider field is variously described as [responsible AI](https://en.wikipedia.org/wiki/Responsible_AI) or trustworthy AI, and the question of how law should treat AI is the subject of the [regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Governance can fail in two opposite ways. It can be so heavy that teams avoid it, and AI use goes underground as [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT). Or it can be a paper exercise, with a policy and a register that do not reflect practice. The agile aims suggest the middle path: continuous stakeholder involvement in setting the rules, small and fast approvals for low-risk uses, deeper scrutiny where harm is possible, and continuous improvement of the controls as experience grows. Motivated people with clear boundaries, trusted to use judgement inside them, will report problems. People who fear punishment will not.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies to governance measures: when "percentage of AI uses registered" is a target, registers fill with entries nobody reads, and the actual uses stay out of sight (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic builds on the topics on risk, compliance, and security in Part 8, and on the earlier topics in this part.

## Key principles

- **Know where AI is used.** A register of uses, including those embedded in products and those staff adopt on their own, is the foundation.
- **Match scrutiny to risk.** Light for low-risk uses, deeper for consequential ones.
- **Treat model and prompt changes as changes.** They need testing, approval proportional to risk, and the ability to roll back.
- **Evaluate before and during use.** Test on realistic cases, and keep testing in production.
- **Keep meaningful human oversight.** A person must be able to understand, question, and override, and have the time and authority to do so.
- **Learn from incidents without blame.** AI failures are new, and reporting is how the organization learns.
- **Make approval fast for the safe cases.** Slow governance drives use out of sight.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AI use register coverage | Share of AI uses found by independent means that are on the register with an owner and a risk class | uses on the register with owner and risk class / uses found by independent discovery (procurement, expense, identity, network, and staff reports) | percent | Register, procurement and expense data, identity logs, surveys | Governance; IT asset management; risk management | Visible work and clear ownership | Quarterly |
| Risk assessment currency | Share of medium and high-risk uses with a risk assessment within the required cycle | uses assessed within cycle / medium and high-risk uses | percent | Risk assessments | Risk management; information security management | Regular reflection on risks | Quarterly |
| Change control coverage | Share of changes to models, prompts, tools, and data sources in production that went through change control with required tests | changes with change record, tests, and approval proportional to risk / changes detected | percent | Change records compared with version history and vendor release notes | Change enablement; release and deployment management | Small, controlled, reversible changes | Monthly |
| Evaluation currency | Share of production uses with a current evaluation (accuracy, safety, and fairness where relevant) and results within tolerance | uses with an evaluation within the cycle and results acceptable / production uses in scope | percent | Evaluation records | Quality assurance; risk management | Definition of done for behaviour | Quarterly |
| Human oversight evidence rate | Share of sampled consequential outputs or decisions with a recorded, substantive human review | sampled items with documented review that could have changed the outcome / items sampled | percent | Sampled decision records | Risk management; governance | Review before release | Monthly |
| AI incident rate and time to contain | Incidents involving AI (harmful output, data exposure, unsafe action) per use and the time to contain them | incidents per production use per quarter; median and 85th percentile of hours from detection to containment | incidents; hours | Incident records tagged AI | Incident management; information security management | Blameless response and learning | Quarterly |
| Supplier AI due diligence currency | Share of suppliers providing AI features in critical services whose AI-specific assessment is current | suppliers with current AI assessment / critical suppliers with AI features | percent | Supplier assessments | Supplier management; risk management | Regular review of dependencies | Quarterly |

Define "AI use" broadly in the register: models you build, services you buy, features inside products, and tools staff use. The risk classes and cycles are set in the policy. Register coverage is measured against independent discovery, not against the register itself. Change control coverage requires a way to detect changes: version control, vendor notices, configuration monitoring. Human oversight evidence requires that the review could have changed the outcome, not that a button was clicked. Incident rates describe uses and systems and are not used to rate people.

## Recommendations

### Know and classify

**1. Build the register by finding as well as asking.** Start with a survey and a policy, then check against procurement and expense records, identity and access logs, network and cloud billing data, and vendor product updates. Include AI features embedded in tools you already own. Expect surprises: people use tools you did not approve, often for good reasons. Treat them as information (see topic 7.2, Software asset and licence metrics).

**2. Assign an owner and a risk class to each use.** The owner is the person accountable for the use and its results. The risk class reflects the harm if the system fails: who is affected, whether decisions about people are involved, whether it acts on its own, what data it touches, and how reversible the effects are. Use few classes with clear rules. Draw on recognized frameworks, such as the NIST AI Risk Management Framework, ISO/IEC 42001, and applicable law, and adapt them to your context.

**3. Make approval proportional.** For low-risk uses, a quick self-service registration with a few questions is enough. For consequential uses, require a risk assessment, evaluation results, a defined human oversight design, and sign-off. A fast path for the safe majority keeps people inside the system, and a slower path for the dangerous few gives them proper scrutiny.

### Test and control change

**4. Evaluate on realistic cases, before and during use.** Build a set of test cases that reflect real inputs, including difficult and adversarial ones, and score the outputs against written criteria. Include checks for safety and fairness where people could be affected. Re-run the evaluations on a schedule and whenever the model, prompt, or data changes. A red team, a group that deliberately attacks the system to find weaknesses, is a useful practice for higher-risk uses. See the sampling practices for assisted work (see topic 10.2, Measuring AI-assisted work).

**5. Put models, prompts, and tools under change control.** Version prompts and configurations like code. Require tests and approval proportional to risk for changes, record them, and keep the ability to roll back. Track vendor-driven model updates, which can change behaviour without notice, and agree with suppliers how you will be told. Treat a model upgrade as a change that needs control (see topic 4.3, Change enablement metrics).

**6. Monitor in production.** Watch for drift in inputs and outputs, for rising error and override rates, and for unusual patterns. Set thresholds that trigger review. For systems that take actions, monitor the action logs. Monitoring is how you find the problems that testing missed.

### Keep human oversight real

**7. Design oversight that can work.** A person reviewing every output of a fast system cannot keep up, and a person asked to approve what they cannot understand is not providing oversight. Define what the human does, what information they have, how much time, and what authority to override. Sample reviews to check that they are substantive. Be alert to automation bias, the tendency to accept machine output (see topic 10.1, AI in service management measurement).

**8. Keep audit trails.** Record inputs, outputs, versions, decisions, and actions in a way that supports investigation, subject to privacy rules and retention limits. An [audit trail](https://en.wikipedia.org/wiki/Audit_trail) lets you answer what happened and why. For consequential decisions about people, consider what explanation you can give and what route of appeal exists (see topic 8.3, Compliance and audit metrics).

**9. Protect data and resist manipulation.** Control what data AI systems can see and send out. Test for prompt injection and data leakage, especially for systems that read external content or that have access to tools. Apply the least-privilege principles used for agents that act (see topic 10.3, AI agent and chatbot metrics, and topic 8.1, Security incident and vulnerability metrics). Consider privacy at design time, and involve data protection specialists.

### Respond and learn

**10. Treat AI incidents as incidents.** Define what counts: harmful or biased outputs, data exposure, unsafe actions, significant errors reaching users. Use your normal incident process with the AI tag, review blamelessly, and feed lessons into evaluations and controls. Make reporting easy for staff and users. Time to contain matters as much as for any incident (see topic 3.4, Major incident metrics).

**11. Manage suppliers' AI.** Ask suppliers what AI features they use, how they are tested and changed, how data is handled, and how incidents are reported. Add AI-specific terms to contracts where it matters, including notice of material model changes. Reassess critical suppliers on a cycle (see topic 8.4, Supplier and contract metrics).

**12. Review governance itself.** Every quarter, check what the measures show: where uses went unregistered, which approvals were too slow, which controls did not catch problems. Adjust the policy and the paths. Involve staff and users in the review. Keep the rules short, clear, and current, and retire controls that do not earn their cost.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| AI use register coverage | Registering trivial uses to raise the percentage; denominators limited to what is registered | Independent discovery for the denominator; sample register entries for quality; amnesty for unregistered uses |
| Risk assessment currency | Light-touch assessments that always pass; assessing low-risk uses | Review assessment depth; check that risk class matches the criteria |
| Change control coverage | Not detecting vendor changes; recording changes after the fact | Detection through version history and vendor notices; change records timestamped before release |
| Evaluation currency | Evaluations on easy cases; choosing tolerances after seeing results | Test sets reviewed by independent party; thresholds set in advance |
| Human oversight evidence rate | Clicking approve without reading; documenting review that could not change the outcome | Sample reviews for substance; seeded known errors; reviewer load |
| AI incident rate and time to contain | Not reporting incidents; narrowing the definition | Easy, blame-free reporting; compare with user complaints and audit findings |
| Supplier AI due diligence currency | Questionnaires answered by marketing; assessments without evidence | Evidence requirements for critical suppliers; independent verification |

A healthy reading is a register that independent discovery confirms, assessments that match the risk, changes that go through control, evaluations kept current, oversight that finds real errors, incidents reported readily and contained quickly, and suppliers who share what they change.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Central approval for every AI use | Control, consistency | Slow; drives use underground |
| Self-service registration with risk tiers | Fast for the safe majority | Needs good criteria and spot checks |
| Ban on public tools | Reduces data exposure | Shadow use; lost benefits |
| Approved tools with guidance | Visible and manageable use | Needs provision and support |
| Heavy documentation | Evidence for audit | Burden; may not reflect practice |
| Automated evaluation in the pipeline | Continuous, consistent | Needs good test sets; may miss new failures |
| Human review of everything | Safety | Not scalable; fatigue |
| Risk-based sampling | Practical | Some failures slip through |

The prose answer is to provide approved tools and a quick path for low-risk uses, concentrate scrutiny on consequential ones, automate evaluation and monitoring, and keep human oversight where it can really work.

## Questions to discuss with your team

**1. Where do we use AI today that is not on any list?**
Ask the team honestly, and offer amnesty. Look at tools used for drafting, summarizing, coding, and analysis, including those inside products. The facilitator should record uses without judgement. Agree who will register them and which need a closer look.

**2. If our most consequential AI use made a harmful mistake, how would we find out and what would we do?**
Walk through detection, containment, communication, and learning. Note gaps in monitoring, ownership, and authority to switch it off. Agree one improvement.

**3. What can change under us without anyone approving it?**
List models, prompts, data sources, and vendor updates. For each, ask how we would know it changed and how we would test it. Agree where to add detection or a test.

**4. Could the person who reviews AI output in our process realistically catch a serious error?**
Look at the volume, the information, the time, and the authority. Test with a seeded error. If review cannot work, redesign the process before adding more AI.

**5. Which of our rules would a busy colleague find easy to follow, and which would they work around?**
List the current rules and test them against real workflows. Discuss why rules are bypassed. Agree changes that make the safe path the easy path.

**6. What have our suppliers told us about their AI, and what have we not asked?**
Check recent questionnaires and contracts. Identify critical suppliers with AI features and the information gaps. Agree questions for the next review.

## Four perspectives

### Product and delivery teams

Delivery teams build and adopt AI features, and they feel governance as friction or as help. They should register uses early, test on realistic cases, put prompts and models under version control, and design oversight that works. They benefit from fast approval for low-risk uses.

### Service and operations teams

Operations teams run AI in production and respond to its incidents. They should monitor for drift, keep action logs, tag AI incidents, and have the authority and the means to switch a system off. They also use AI themselves and should follow the same rules.

### Leadership and governance

Leaders set risk appetite and are accountable for outcomes. They should fund the register, evaluation, and monitoring, accept that some AI uses will not pass, ask for independent discovery of uses, and track incidents and time to contain. Governance bodies should keep rules short, review them regularly, and ensure staff and users have a voice.

### Customers and users

Users are affected by AI decisions and outputs, often without knowing. They deserve to know when AI is involved in matters that affect them, to reach a person, and to challenge decisions. Complaints and appeals are essential evidence about how governance works in practice.

## In practice: a service management example

A regional bank's technology and operations division adopts an AI policy after a staff member pastes customer details into a public tool. The compliance team publishes a register and expects every use to be listed. The numbers below are illustrative.

Three months later the register lists 38 AI uses. The head of technology risk checks by independent means: procurement and expense data, identity logs showing sign-ins to AI services, network data, and an anonymous staff survey. The discovery finds 94 uses, so register coverage is 40 percent. Seventeen are features inside tools the bank already licences, and twelve are public tools used by staff. Of the 38 registered uses, only 14 have a risk class, and the three highest-risk ones, a model that scores fraud alerts, a chatbot for customers, and a tool that summarizes complaints, have no evaluation in the last year. Changes to the fraud model's configuration and the chatbot's prompts are made by the teams directly, and the change records for the last quarter cover 21 percent of changes found in version history. A sample of 60 fraud alerts dismissed by the model shows human review recorded for 52 of them, but a seeded set of five known misses was caught by only one reviewer, because reviewers each handle several hundred alerts a day. One incident, in which the chatbot gave an outdated fee amount to customers, was found by a complaint, and it took six days to contain because nobody had authority to switch it off.

The head of technology risk redesigns governance with the teams. A short self-service registration with five questions places low-risk uses in the register within minutes, and an amnesty period encourages staff to list the tools they use. Risk classes are based on harm, data, and autonomy. Higher-risk uses need an assessment, an evaluation against realistic and adversarial cases, and a defined oversight design. Models, prompts, and tools go under change control with tests proportional to risk, and the chatbot's prompts are versioned with rollback. The fraud alert process is redesigned so that reviewers handle fewer, better-prioritized alerts, and seeded errors test their detection. A named owner for each high-risk use has the authority to switch it off, and incident response covers AI. The bank's cloud and AI suppliers are asked what AI features they use and how changes are notified.

Two quarters later, register coverage by independent discovery is 88 percent, all high-risk uses are assessed and evaluated within the cycle, change control coverage is 84 percent, seeded-error detection by reviewers rises to 4 of 5, and the median time to contain an AI incident is 3 hours. Staff use approved tools for most tasks. A senior executive asks for a goal of 100 percent register coverage. The head of technology risk proposes tracking coverage against independent discovery, assessment currency, and incident handling, and explains that a register without discovery can reach 100 percent and still miss the risk. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

Govern AI as a change to a live service, with a lightweight, regular review and stakeholders at the table, instead of a one-off approval. The caution is that heavy approval gates make teams hide AI use.

### AI

Keep a register of every AI use with an owner, a risk class, an evaluation date, and a human oversight point, and measure coverage against independent discovery. Test that oversight can be exercised. The caution is that this book gives no legal advice, and obligations vary by place and over time, so check them with your own legal adviser.

### Automation

Automate discovery and evidence collection for model, prompt, and data changes, and measure the automation on missed changes. The caution is that automated evaluation suites test what they were built to test, so add new tests as failures appear.

### Analytics

Report currency of assessments and evaluations with dates and counts. The decision informed is where oversight is thin. The caution is that incident counts for AI are small and uneven, so combine them with near-miss reports.

## Sector lens

**Startup.** Speed matters and the risks are mostly data exposure and unreliable outputs. Keep a short list of tools and uses with owners, set a few clear rules about what data may be used where, and version prompts. Revisit as customers' demands for assurance grow.

**Small business.** Staff will use public tools. Provide an approved option, write a one-page rule on data, and review how tools are used. Ask suppliers about their AI features, and keep a record of where AI makes decisions about customers or staff.

**Enterprise.** Scale needs an operating model: register, risk tiers, evaluation standards, change control, and incident process, integrated with existing risk and security functions. Use independent discovery, automate evaluation in pipelines, and align with standards. Give teams a fast path.

**Government and public sector.** Decisions affecting citizens bring duties of transparency, fairness, and appeal, and procurement and legal frameworks shape what is allowed. Maintain public records of high-impact uses where required, assess impact on rights, keep humans meaningfully in the loop, and check current law and guidance (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs include the effort to build and maintain the register, discovery tooling or analysis, risk assessments, evaluation sets and runs, change control for prompts and models, monitoring, training, and incident response capacity. Governance also adds some delay for higher-risk uses. These costs scale with the number and risk of uses, which is a reason to keep low-risk approval light.

The returns include avoided harm and exposure, fewer surprises in audits and regulatory reviews, faster safe adoption through clear rules, and trust from customers and staff. Build the case from your own data: the number of uses found outside the register and the data they touch, incidents and their cost, time spent in ad hoc approvals before and after, and findings in audits. Avoid citing published statistics about AI incidents or fines without a traceable source and relevance to your context. Include the cost of not governing, which includes the possibility of significant legal and reputational harm (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **A register that nobody checks.** Coverage looks high and misses the real uses. Use independent discovery.
- **Blanket bans.** They drive use underground. Provide approved tools and a fast path.
- **Treating prompts and models as configuration nobody owns.** Behaviour changes unnoticed. Put them under change control.
- **Evaluating once.** Systems drift and change. Re-run on a schedule and on change.
- **Oversight in name only.** Reviewers cannot catch what they cannot see. Test with seeded errors and fix the load.
- **No authority to switch off.** Containment takes days. Name owners with the power to stop a system.
- **Ignoring suppliers' AI.** Your risk includes theirs. Ask, contract, and reassess.
- **Rules nobody can follow.** They are bypassed. Keep them short and make the safe path easy.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Knowing and classifying | No view of AI use | Policy and a partial list | Register with owner and risk class; independent discovery used for coverage | Coverage, assessment currency, and approval times managed | Shared register view across business units and suppliers; classes reviewed with regulators and users |
| Testing and change | Ad hoc | Some evaluation for some uses | Evaluation on realistic cases; prompts and models under change control | Continuous evaluation and drift monitoring; coverage managed | Automated, risk-based evaluation and change in pipelines, audited independently |
| Oversight and learning | Reliance on trust | Review exists in principle | Oversight designed and sampled; AI incidents tagged and reviewed blamelessly | Seeded-error tests, time to contain, and supplier assessments managed | Oversight, incident learning, and policy co-developed with staff, users, and partners |

## Checklist

- [ ] A register lists AI uses with an owner and a risk class, checked against independent discovery.
- [ ] A fast path exists for low-risk uses, and a deeper path for consequential ones.
- [ ] Higher-risk uses have a current risk assessment and a defined oversight design.
- [ ] Evaluations on realistic and adversarial cases are current and rerun on change.
- [ ] Prompts, models, tools, and data sources are versioned and under change control.
- [ ] Production monitoring watches for drift, errors, overrides, and unusual actions.
- [ ] Oversight is tested with seeded errors, and reviewer load is realistic.
- [ ] Audit trails support investigation within privacy and retention rules.
- [ ] AI incidents are tagged, reviewed blamelessly, and owners can switch systems off.
- [ ] Suppliers with AI features are assessed and bound to notify material changes.

## AI prompts

**Draft a risk classification for AI uses.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Design a registration form.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Plan an evaluation set.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Review an AI incident.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an AI governance or risk metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that an AI governance metric entry uses independent evidence and carries its gaming vector and guardrail.

## Key takeaways

- Build the AI register by independent discovery, and match scrutiny to risk with a fast path for safe uses.
- Treat models, prompts, tools, and data sources as changes that need testing, approval, and rollback.
- Evaluate before use and during use, on realistic and adversarial cases.
- Design human oversight that can work, and test it with seeded errors.
- Treat AI incidents like other incidents, with blameless review, and give owners the power to switch systems off.
- Ask suppliers about their AI, and keep the rules short and the safe path easy.

## References and further reading

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
