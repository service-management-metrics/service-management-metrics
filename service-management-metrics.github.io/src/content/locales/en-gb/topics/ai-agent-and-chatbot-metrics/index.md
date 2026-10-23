# AI agent and chatbot metrics

**A conversational assistant has helped only when the user's problem is solved and stays solved, so measure verified resolution, returns, the quality of the handoff to a person, and the harm of wrong actions, and never reward a bot for keeping people away from help.**

## Overview and motivation

Many organisations now put a conversational assistant between users and the service desk, and some give AI agents the ability to act: reset a password, order equipment, restart a service, change a configuration. A [chatbot](https://en.wikipedia.org/wiki/Chatbot) is a software application that conducts a conversation, and a [virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant) adds the ability to perform tasks on the user's behalf. The broader idea of an [intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent) is a system that perceives an environment and takes actions toward goals. Modern language models make these systems far more capable of open conversation than their rule-based predecessors, and the first conversational programme, Joseph Weizenbaum's ELIZA of the 1960s, already showed how readily people attribute understanding to a machine that merely produces plausible replies.

The appeal is obvious. Users get help at any hour without waiting. Teams spend less time on routine requests. [Self-service](https://en.wikipedia.org/wiki/Self-service) has long been a goal of ITSM, and shift-left, the move of resolution to earlier and cheaper points, is a core idea of the service desk (see topic 3.7, Self-service and automation metrics). The measurement problem is that the obvious numbers reward the wrong things. A bot that ends a conversation counts as having "contained" it, whether the user was helped or gave up. A bot that never offers a human maximises containment. A bot that confidently gives a wrong answer produces a quiet failure that shows up as an angry contact days later.

Two kinds of system need distinct measures.

- **Conversational assistants** answer questions, guide users, and gather information. Their risk is wrong or unhelpful answers and trapping users in loops. Measures focus on resolution, accuracy, and the route to a person.
- **Agents that act** change things in the world: accounts, systems, tickets, money. Their risk is a wrong action with real consequences. Measures focus on correctness of actions, reversibility, permission boundaries, and audit trails. These uses call for stronger governance and, often, human approval for consequential steps (see topic 10.5, AI governance and risk metrics).

Several design issues shape what you measure.

- **Honesty about what the user is talking to.** Many jurisdictions have or are developing duties to tell people when they interact with an AI system, and as of October 2026 these rules are evolving, so check what applies to you. Good practice is to say so plainly in any case.
- **A way out.** Users must be able to reach a person without a struggle. A bot that hides the route to a human is a [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), a design that tricks or traps users into outcomes they would not choose.
- **Accessibility.** Conversational interfaces must work for people using assistive technology, those with limited language ability, and those who need another language or channel.
- **Automated decisions.** When an assistant's output affects a person's rights or access, the topic of [automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making) and the duties around it apply. Keep such decisions with people, or with strong safeguards.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) is vivid here: if containment or deflection is the target, the cheapest way to meet it is to make the human harder to reach (see topic 1.2, Goodhart's law and the psychology of metrics). The measures below put resolution and user outcome first.

## Key principles

- **Resolution is the measure, not containment.** A conversation that ended is not a problem that was solved.
- **Verify, and check for return.** Count a contact as resolved only when the user confirms or does not come back.
- **Always provide a way to a person.** Make the route easy, fast, and visible, and carry the context across.
- **Be honest about the system.** Say that it is an AI, what it can do, and what it cannot.
- **Limit what agents may do.** Grant the least privilege, require approval for consequential actions, and keep an audit trail.
- **Measure the quality of answers by sampling.** Fluent replies can be wrong.
- **Listen to users and to the staff who pick up the pieces.** They see what the metrics miss.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Verified resolution rate | Share of bot conversations in which the user confirmed that the issue was resolved, or did not return within a stated period | conversations with confirmed resolution or no return contact within 7 days / conversations that started with a resolvable intent | percent | Conversation logs, user confirmation, ticket and contact data | Service desk; knowledge management | Working outcome for the user | Weekly |
| Return contact rate | Share of bot-ended conversations followed by a contact about the same issue through any channel | conversations followed by a related contact within 7 days / conversations ended without handoff | percent | Conversation logs joined to ticket and contact records | Service desk; incident management | Escaped defects | Weekly |
| Handoff context completeness | Share of handoffs to a person in which the person had the information needed without asking the user to repeat it | sampled handoffs judged complete by the receiving agent / handoffs sampled | percent | Sampled handoffs, agent feedback | Service desk; knowledge management | Smooth collaboration across the boundary | Monthly |
| Time to human | Time from the user asking for a person, or the bot deciding to hand off, to a person taking over | median and 85th percentile of minutes | minutes | Conversation logs, queue data | Service desk; incident management | Responsiveness when the user needs help | Weekly |
| Answer accuracy | Share of sampled bot answers judged correct, complete, and safe by a qualified reviewer | answers judged correct / answers sampled | percent | Sampled review | Knowledge management; quality assurance | Definition of done for an answer | Monthly |
| Bot satisfaction and effort | User rating of satisfaction and ease after a conversation, with comments | favourable ratings / ratings; mean effort rating | percent; scale points | Short post-conversation survey | Service desk; customer experience | Feedback on working software | Weekly |
| Agent action reversal rate | Share of actions taken by an AI agent that had to be corrected, undone, or escalated | actions reversed or corrected / actions taken, by action type and risk class | percent | Action audit log, change records | Change enablement; incident management | Rework and rollback | Weekly |

Define the intents the bot handles, and exclude from containment those it should always hand off. Verified resolution counts a conversation only if the issue was in scope and the user either confirmed or showed no return contact. Time to human starts at the user's request, not at the end of a menu. Answer accuracy is judged against the knowledge base and policy by a person who did not build the bot. Agent action reversal is split by action type and risk class, and any harmful action is reported separately as an incident.

## Recommendations

### Define success as resolution

**1. Define the intents and the outcome you want.** List the problems the assistant should handle, such as password reset, access status, how-to questions, and the outcome for each: answered, done, or handed off. Decide which intents must always go to a person: complaints, anything involving distress, safety, legal rights, or money. A bot that tries to handle everything fails badly at the edges.

**2. Measure verified resolution and returns.** Ask users at the end whether their issue is solved, and also look for related contacts afterwards. Neither alone is enough: users who give up do not answer, and some who got help still call. Together they approximate true resolution. Treat the return contact rate as the key guardrail for any containment figure (see topic 3.1, Service desk metrics).

**3. Avoid containment as a target.** Report containment only as a descriptive figure and always beside verified resolution, returns, and satisfaction. A rising containment with rising returns means the bot is turning people away. Do not set a containment target or tie anyone's performance to it.

### Make the route to a person easy and good

**4. Let users reach a person at any point.** Provide a clear, plain way to ask for a human, and honour it. Measure time to human and the share of conversations where users asked more than once. Test the path yourself regularly. Where a person is not available, say when one will be, and offer a callback.

**5. Hand off with the context.** When the bot passes a conversation to a person, include the summary, what was tried, the user's words, and the relevant account details so that the user does not repeat themselves. Ask receiving agents to rate whether the handoff was complete, and sample the results. Poor handoffs make users trust both the bot and the service less (see topic 9.3, Collaboration and handoff metrics).

**6. Design for all users.** Test the assistant with users who use assistive technology, who write in other languages, who are in a hurry or in distress, and who are not comfortable with the technology. Offer other channels. Measure verified resolution and satisfaction by user group where it is safe and lawful to do so. The averages hide those the bot fails most.

### Check the quality of what it says and does

**7. Sample answers for accuracy and safety.** Each month, draw a random sample of conversations and have a qualified person judge the answers: correct, complete, safe, and honest about uncertainty. Record errors by type: outdated, invented, off-policy, or misunderstood. Feed errors to the knowledge base and the configuration. Add targeted tests for sensitive topics, and for attempts to push the assistant outside its scope.

**8. Keep the knowledge current.** An assistant is only as good as the content and tools it draws on. Link answer errors to knowledge articles, and measure the freshness of the knowledge it uses (see topic 3.6, Knowledge management metrics). Where the system uses retrieval from a knowledge base, include a check that it cites its sources and that the sources are right.

**9. Be honest with users.** State at the start that they are talking to an AI, and what it can and cannot do. Do not give it a human name or manner that suggests otherwise. Where it is unsure, it should say so and offer a person. Check applicable law on disclosure.

### Govern agents that act

**10. Classify actions by risk and set permissions to match.** For each action an agent can take, define its risk class: informational, reversible and low impact, or consequential. Grant the least privilege needed. Require human approval for consequential actions. Keep an audit trail of every action with the reason, the user, and the result. These controls link to the change and security measures in earlier parts (see topic 8.1, Security incident and vulnerability metrics, and topic 8.2, Risk and control metrics).

**11. Measure action correctness and reversibility.** Track the reversal rate by action type, and review every harmful action as an incident, blamelessly. Test agents in a safe environment before granting access, and re-test when the model or the tools change. A new model version can change behaviour, so treat it as a change that needs control (see topic 4.3, Change enablement metrics).

**12. Listen to the people who pick up the pieces.** Service desk staff see the consequences of bot failures: angry users, repeat contacts, and messes to clean up. Ask them regularly what the bot gets wrong and what makes it harder. Their feedback and the users' comments are evidence that no metric captures fully, and it should shape the next round of changes.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Verified resolution rate | Counting any end of conversation as resolved; asking leading confirmation questions | Define confirmation neutrally; return contact rate; sample conversations |
| Return contact rate | Measuring only through one channel; short windows | Join all channels; use a longer window as a check; sample returns |
| Handoff context completeness | Passing a long transcript instead of a summary; sampling easy handoffs | Receiving agent rating; random sample; time to resolution after handoff |
| Time to human | Starting the clock after menus; counting a queue acknowledgment as takeover | Clock starts at the request; takeover means a person is active in the conversation |
| Answer accuracy | Sampling easy conversations; lenient reviewers | Random sample by independent reviewers; adversarial test cases |
| Bot satisfaction and effort | Surveying only completed conversations; placing the survey where only happy users reach it | Survey also abandoned conversations; response rate and mix; read comments |
| Agent action reversal rate | Not logging reversals; reclassifying corrections as new work | Audit log tamper-resistant; link reversals to actions; incident review |

A healthy reading is high verified resolution with low returns, easy and fast routes to a person with complete handoffs, accurate answers on sampled review, satisfied users across groups, and agents whose actions seldom need reversing and never cause harm unseen.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Rule-based bot | Predictable, easy to test | Narrow; brittle; frustrating outside scripts |
| Language-model assistant | Flexible, fluent | Can be wrong with confidence; harder to test |
| Retrieval from approved knowledge | Grounded answers, easier to correct | Depends on content quality |
| Open generation | Broad coverage | Higher risk of invention |
| Human approval for actions | Safety | Slower; reviewer fatigue |
| Autonomous actions | Speed | Larger blast radius when wrong |
| Strict scope with early handoff | Safe | Lower containment |
| Broad scope | Higher containment | More errors at the edges |

The prose answer is to start with narrow, well-understood intents, ground answers in approved knowledge, make human help easy, and extend scope and autonomy only as the measures justify it.

## Questions to discuss with your team

**1. If a user wanted a person right now, how many steps would it take, and have we tried it ourselves?**
Test the path together. Count the steps and the wait. The facilitator should note every barrier. Agree changes so that the path is short, and measure time to human.

**2. What share of the conversations our bot ended actually solved the problem?**
Check the returns and the confirmations for a sample. Compare with the containment figure. Discuss the gap. Decide which figure leaders should see.

**3. What does our bot get wrong, and who finds out?**
Ask the service desk. Review sampled conversations. Look for patterns: outdated articles, ambiguous questions, sensitive topics. Agree a route from errors to fixes, with an owner.

**4. Which actions may the agent take on its own, and which need a person?**
List actions with their risk classes and permissions. Ask what the worst realistic failure of each would be. Agree the approval rules and the audit trail, and who reviews harmful cases.

**5. Who is the bot failing quietly?**
Think about users who are in a hurry, in distress, with accessibility needs, or with limited language. Look at resolution and satisfaction by group, where safe. Agree one test with such users.

**6. What would make us switch the bot off or narrow its scope?**
Define the evidence: returns above a level, harmful actions, accuracy below a standard. Decide who may decide. Having a stop rule in advance makes it easier to act.

## Four perspectives

### Product and delivery teams

Teams that build the assistant own its quality. They should define intents, ground answers in approved knowledge, test with adversarial cases, release changes under control, and read the failures. They should push back on containment targets that reward trapping users.

### Service and operations teams

Service desk staff work with the assistant and inherit its failures. They should rate handoffs, flag wrong answers, keep the knowledge current, and take over quickly when asked. They are the best judges of whether the assistant helps users, and their workload and stress are part of the picture.

### Leadership and governance

Leaders sponsor the assistant and want savings. They should ask for verified resolution, returns, and satisfaction beside containment, require a stop rule, fund the human route, and review risk classes for agents. Governance should check disclosure, accessibility, and legal duties.

### Customers and users

Users want help with little effort and no trickery. They should know they are talking to an AI, be able to reach a person easily, and trust that the system will not act without good reason. Their experience, especially of failure, is the primary evidence of whether the assistant is worth having.

## In practice: a service management example

A national university runs a student and staff service desk handling about 30,000 contacts a month. It launches a chatbot for common requests, and the vendor dashboard reports a containment rate of 74 percent. The numbers below are illustrative.

The head of student services checks. Among bot-ended conversations in the last month, 29 percent were followed by a related contact through email or phone within seven days. Verified resolution, using the user's confirmation and the absence of return, is 49 percent for in-scope intents. The median time to reach a person after asking is 6 minutes, with an 85th percentile of 22, partly because the route requires three menu steps. A sample of 100 conversations reviewed by two experienced advisers finds 88 answers correct and 12 flawed: 7 outdated, 3 invented details about a deadline, and 2 mishandled sensitive cases involving a student in difficulty. Receiving agents rate 54 percent of handoffs as complete. Satisfaction with the bot is lower for students using screen readers and for those writing in languages other than English. The service desk team reports many contacts that begin with "the chatbot could not help."

The head of student services makes changes with the team. Sensitive intents, such as welfare, complaints, and disputes about fees, are routed straight to a person, and the bot says so. A "talk to a person" option appears on every screen, and time to human is tracked, with a target to answer within a few minutes during staffed hours. Handoffs include an automatic summary and the user's own words. The knowledge base owners fix outdated articles, and a monthly sample review feeds them. The assistant is limited to answering from approved content and is required to say when it does not know. A second pilot lets an agent reset passwords after identity verification, with every action logged and reversible within a time limit, and a reversal rate tracked. The dashboard replaces containment with verified resolution, return contact rate, accuracy, time to human, and satisfaction by group.

Three months later, verified resolution reaches 66 percent for in-scope intents, the return contact rate falls to 14 percent, median time to human falls to 2 minutes, the share of complete handoffs rises to 86 percent, and accuracy on sampled answers rises to 95 percent, with no mishandled sensitive cases in the sample. The agent action reversal rate in the password pilot is 1.2 percent. A vice chancellor's office asks for a containment target of 85 percent. The head of student services explains that a higher containment target would reward hiding the route to a person, and proposes verified resolution and returns as the measures, with a review of what to extend next. The decision is recorded.

## Agile, AI, automation, and analytics

### Agile

Improve assistants in small steps with feedback from users and the people who take over, and review failures regularly with stakeholders. The caution is that rewarding containment teaches the bot to keep people from help.

### AI

A conversational assistant has helped only when the problem is solved and stays solved, so measure verified resolution, returns, handoff quality, and the reversal of agent actions. Define the human's role: who approves actions, when the bot must hand over, and how a person overrides it. The caution is that a pleasant conversation can still fail the task.

### Automation

Log every conversation and agent action, with permissions and a way to roll back, and measure the automation on wrong actions. The caution is that an agent with broad permissions can cause harm at speed, so limit scope and review logs.

### Analytics

Report resolution verified by user confirmation or a no-return window, with counts, and read a sample of conversations. The decision informed is where the assistant is safe to expand. The caution is that satisfaction scores on bot conversations skew toward users who finished.

## Sector lens

**Startup.** An assistant can cover support at low cost, and one bad answer can cost a customer. Keep scope narrow, ground answers in your documentation, make the human option obvious, and read every escalation. Be careful about letting an agent act on accounts or payments.

**Small business.** An off-the-shelf assistant on a website can handle common questions. Test it as a customer would, make sure a phone number or email is easy to find, and review conversations weekly. Check what the vendor does with the data.

**Enterprise.** Scale offers savings and risk. Run a governance process for risk classes, approvals, and audit, measure by intent and user group, and ensure that a person is reachable on every channel. Coordinate across support, security, legal, and accessibility.

**Government and public sector.** Citizens may have no alternative provider, and duties of accessibility, language access, and fair treatment apply strongly. Keep a person reachable, avoid automated decisions about entitlements without safeguards, publish how the assistant is used, and check disclosure and administrative law duties (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are licences or usage charges, integration, content preparation, ongoing sampling and review, maintenance of the knowledge base, testing, and governance. A good human route also costs money, because it must be staffed.

The potential returns are shorter waits for simple issues, relief from repetitive contacts, and out-of-hours coverage. The risk side includes returns, lost trust, harm from wrong answers or actions, and legal exposure. Build the case from your own numbers: verified resolution and returns, the cost per resolved contact including handoffs, the time of staff spent fixing bot failures, and satisfaction by group. Avoid using a vendor's containment or deflection claims as your estimate. Count the cost of the human route and of governance (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Containment as a target.** It rewards keeping people away from help. Report verified resolution and returns.
- **Hidden or slow route to a person.** It is a dark pattern, and users notice. Make it short and test it.
- **Handing off without context.** Users repeat themselves and trust falls. Pass a summary.
- **Letting the bot handle sensitive cases.** Welfare, complaints, and rights need people. Route them directly.
- **Autonomous actions without audit or approval.** One error can scale. Classify, limit, and log.
- **Measuring only what the vendor dashboard shows.** It flatters. Join your own data.
- **Ignoring groups the bot fails.** Averages hide them. Test and segment where safe.
- **No stop rule.** A failing bot stays up. Define the evidence that would narrow or switch it off.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Outcomes | Containment reported | Satisfaction surveyed | Verified resolution and returns tracked per intent | Segmented by user group; stop rules defined; accuracy sampled monthly | Assistant, staff, and knowledge improved together using shared evidence |
| Route to people | Hard to find | Option available | Short route; time to human tracked; handoffs carry context | Handoff quality rated and improved; staffing matched to demand | Bot and staff collaborate smoothly across channels, with user choice respected |
| Agents that act | Ad hoc automation | Scripted actions | Risk-classified actions, least privilege, approval and audit | Reversal rate and harm reviewed; changes controlled | Agent behaviour governed across the organisation and suppliers with independent assurance |

## Checklist

- [ ] The assistant's intents are listed, with those that must always go to a person.
- [ ] Verified resolution and return contact rate are reported beside containment.
- [ ] A visible, short route to a person exists on every screen, and time to human is measured.
- [ ] Handoffs include a summary and the user's words, and are rated by receiving agents.
- [ ] Answers are sampled monthly by qualified, independent reviewers.
- [ ] Users are told they are talking to an AI, and what it can do.
- [ ] Accessibility and other-language testing is done with real users.
- [ ] Agent actions are risk-classified, permissioned by least privilege, and audit-logged.
- [ ] Reversal rates and harmful actions are reviewed blamelessly.
- [ ] A stop rule defines when to narrow or switch off the assistant.

## AI prompts

**Define intents and handoff rules.**

```text
We run a service desk for [type of organisation]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Check a containment claim.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Design a risk classification for agent actions.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Plan a review of bot conversations.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a chatbot or AI agent metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a chatbot metric entry measures resolution and carries its gaming vector and guardrail.

## Key takeaways

- Measure verified resolution and return contacts, and treat containment as a descriptive figure only.
- Make the route to a person short and visible, and hand off with the context.
- Sample answers for accuracy and safety, and keep the knowledge the assistant uses current.
- Be honest that users are talking to an AI, and test with the users most likely to be failed.
- For agents that act, classify risk, limit permissions, require approval for consequential actions, and keep an audit trail.
- Define a stop rule in advance.

## References and further reading

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
