# ITIL 5 measurement and value outcomes

**ITIL 5, as its owner describes it, ties strategy, delivery, and measurable outcomes together and covers AI-enabled environments, so measure whether each service, product, and AI system has a named owner and a written outcome with evidence, and treat every detail of ITIL 5 you cannot verify from the owner as unconfirmed.**

## Overview and motivation

[ITIL](https://en.wikipedia.org/wiki/ITIL) is the best-known framework for [IT service management](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Its owner, PeopleCert, publishes the current version, and a new version of the framework, ITIL 5, was announced in 2026. Teams that run services ask what a new version changes about measurement. The honest answer starts with what can be verified and what cannot.

**What is verified (as of 20 October 2026).** PeopleCert's own certification page for the ITIL Foundation Bridge (Version 5) describes the update as covering digital product and service management across the lifecycle, including how ITIL reflects "modern digital and AI-enabled environments". It also lists an "enhanced value creation approach" that links strategy, delivery, and measurable outcomes across the stakeholder ecosystem, and managing digital and AI complexity. The page states that the bridge is for ITIL 4 certification holders. It gives no release date for ITIL 5 itself.

**What is not verified.** Practice names and structure, how much of ITIL 4 carries over, formal release dates, and whether there is a separate AI governance publication. Third-party training and consulting pages give figures and names for these. They disagree with each other, so this book does not repeat them. Re-check the owner's pages before each decision, and label every statement "in ITIL 4" or "in ITIL 5".

Three themes follow from the owner's wording, and each has a measurement consequence. A product orientation means a service is owned from idea to retirement, so measure ownership. AI in the environment means AI systems need governance, so measure inventory, oversight, and quality. Value as measurable outcome means a service should state what is better for someone when it works, so measure whether the outcome is written down and whether there is evidence that it moved.

This topic does not define ITIL 5 metrics, because the owner has published no metric set that this book can verify. It offers measures of a service organization's readiness to be measured: whether the foundations exist that any version of ITIL, and any honest measurement, will need. The measures use the same form as the rest of the book, with a gaming vector and a guardrail for each (see topic 1.2, Goodhart's law and the psychology of metrics).

Terms used here. A **service** is a means of enabling value co-creation by facilitating outcomes the customer wants. A **digital product** is a software-based offering with its own lifecycle and owner. An **estate map** is a list of the services, products, platforms, and AI systems an organization runs, each with an owner. An **outcome** is a change in the life of a customer or the health of a service (see topic 1.3, Outcomes over output: choosing what to measure).

## Key principles

- **Verify before you cite.** A statement about ITIL 5 is verified only if the owner's own publication says it. Everything else is unconfirmed and labelled as such.
- **Measure the foundations, not the framework.** Ownership, outcomes, and AI oversight matter under any version, and they are measurable today.
- **Outcomes over output.** A service's value is a change for someone, so a written outcome and evidence of change beat counts of tickets or releases.
- **Own every product, service, and AI system.** A named owner is the minimum for governance, review, and retirement.
- **Pair every measure with a guardrail.** Coverage counts are easy to satisfy on paper, so pair each with a check that the content is real.
- **Do not wait for the framework.** Start with the estate map and a small set of measures, and adjust as the owner publishes more.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Estate owner coverage | Share of listed services, digital products, platforms, and AI systems with a named, active owner | items with a named owner confirmed in the last 12 months / items on the estate map, counted at period end | percent | Service catalogue, configuration records, and the estate map | Service catalogue management; governance | Product owner and team charter | Quarterly |
| Outcome statement coverage | Share of services and products with a written outcome and at least one named evidence signal | services and products with an outcome statement reviewed in the last 12 months and an evidence signal / services and products on the estate map | percent | Service catalogue and review notes | Service level management; continual improvement | Product goals and acceptance criteria | Quarterly |
| Outcome evidence age | Age of the most recent evidence review for each outcome | median and 85th percentile of (period end date minus date of last evidence review) across outcomes | days | Review log | Measurement and reporting | Regular review with stakeholders | Quarterly |
| AI system inventory coverage | Share of known AI-enabled features and systems with an owner, a human review point, and a risk register entry | AI systems with all three / AI systems found by the latest discovery sweep | percent | AI inventory and risk register | Risk management; governance | Definition of done for AI features | Quarterly |
| Claim verification rate | Share of ITIL 5 statements used in plans and policies that are traced to the owner's own publication | statements with a dated owner citation / ITIL 5 statements used in decision documents in the period | percent | Verification log | Knowledge management; governance | n/a, an organization-level practice with no direct agile counterpart | Quarterly |

The formulas count items at the end of the period. "Active owner" means a person or role who has confirmed the ownership in writing, not a name copied from an old record. Claim verification rate excludes statements about ITIL 4, which is documented widely.

## Recommendations

### Start with the estate map

**1. Build one list before anything else.** List every service, digital product, platform, and AI system you run, with a name and an owner. Expect surprises: shadow tools, features switched on by default in vendor products, and platforms with no owner. The map is the denominator for every other measure here.

**2. Define "owner" in one sentence.** An owner is accountable for the item's outcome, its change, its cost, and its retirement. A team distribution list is not an owner. Decide whether a product and its supporting service share an owner, and write the rule down.

**3. Discover AI systems actively.** Search contracts, tool settings, and cloud accounts for AI features, and ask teams what they have switched on. A one-off survey goes stale, so schedule a regular sweep and compare it with the inventory.

### Measure outcomes

**4. Write one outcome sentence per service.** The sentence says what is better for a named customer when the service works, in their words. "Availability of 99.9 percent" is a target, not an outcome. If the service has no outcome, ask whether it should exist.

**5. Name the evidence signal.** For each outcome, name the data that would show it moving, such as repeat contact rate, task success, or adoption. Prefer signals you already collect (see topic 6.5, Value realization and business outcomes). If no signal exists, record that as the finding.

**6. Report the age of the evidence.** An outcome reviewed two years ago is a claim, not evidence. Show the median and a high percentile of evidence age, and show the oldest. This is hard to game without doing the review.

### Govern AI measurement

**7. Pair AI activity with a quality measure.** Where AI assists with tickets, changes, or knowledge, report a use measure beside a quality measure such as the share of AI drafts that a person changed materially, or the repeat contact rate for AI-answered requests (see topic 10.2, Measuring AI-assisted work). The pair shows benefit, which use alone cannot.

**8. Link AI systems to the risk register.** Each AI system gets an owner, a human review point, a review date, and an entry in the risk register (see topic 10.5, AI governance and risk metrics). Check the law that applies to you with your legal adviser, since this book gives no legal advice.

### Keep the claims honest

**9. Keep a verification log.** For each ITIL 5 statement your plans use, record the owner's source, the date you read it, and whether it is verified. Review the log before each budget or policy decision, since the publication may change.

**10. Keep ITIL 4 measures running.** Do not stop measuring practices that work because a new version exists. Change a measure when the owner's guidance and your own evidence both say it needs changing, and mark the change on the chart (see topic 1.4, Metrics governance and ownership).

**11. Take small steps.** Choose one measure from the table, assign an owner, and run it for a quarter. Adding all five at once creates a reporting programme before there is any evidence that the measures help.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Estate owner coverage | Naming a manager or a distribution list as owner of everything; omitting hard items from the map | Owner confirmation by the owner, and a discovery sweep that compares the map with contracts and cloud accounts |
| Outcome statement coverage | Writing a vague sentence such as "improve efficiency"; copying one outcome across services | Sample outcomes with customers and ask whether they recognize them; outcome evidence age |
| Outcome evidence age | Touching the review date without reviewing; reviewing only easy outcomes | Read the review notes for a sample; report the share of outcomes whose signal actually moved or stayed flat |
| AI system inventory coverage | Counting only systems the team chooses to declare; classifying AI features as ordinary software | Independent discovery sweep; compare against vendor and contract records |
| Claim verification rate | Citing a vendor page as the owner; logging a claim as verified without reading the source | Review a sample of log entries against the source page; owner-only source rule |

A healthy reading is a set of coverage numbers that rise slowly while the sampled content gets better: outcomes customers recognize, owners who can name their service, and a verification log that shows claims moving from unconfirmed to verified, or being dropped.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Coverage measures (owner, outcome, AI inventory) | Cheap, concrete, and available now | Easy to satisfy on paper; say nothing about quality without a sample |
| Outcome evidence measures | Connect service work to value, in line with the owner's stated emphasis | Slow, noisy, and dependent on data that may not exist yet |
| Waiting for a published ITIL 5 metric set | Avoids rework if the owner publishes one | Delays work that is useful under any version; the owner may publish none |
| Following third-party summaries | Fast and detailed | Disagree with each other and with the owner; risk of acting on unconfirmed details |

The prose conclusion is to measure the foundations now, keep the claims labelled, and change course when the owner publishes more. The cost of being wrong is low, because ownership, outcomes, and AI oversight were worth doing already.

## Questions to discuss with your team

**1. Which of our services, products, platforms, and AI systems have no named owner today?**
Start by listing what exists, because people often find systems nobody remembers adopting. Expect surprise at features switched on by default in vendor tools. The facilitator should record each gap without blame. A useful follow-up is to ask who would be called when the item fails at night.

**2. What do we believe about ITIL 5 that we read on a blog rather than from the owner?**
Naming second-hand beliefs turns verification into a task. Teams often repeat percentages, dates, and practice names with confidence. Sort each belief into verified, plausible, and unknown. Ask someone to check each against the owner's page and to record the date.

**3. Which service could we describe to a customer as an outcome rather than an uptime figure?**
Value-focused practice starts from outcomes. Teams default to availability percentages, so push for the customer's sentence: what is better for them when the service works. Follow up by asking how we would notice if the outcome got worse while the target stayed green.

**4. Where do we use AI today, and who oversees each use?**
This tests whether governance exists in practice. Answers range from "nowhere" to a long list that includes vendor features. Listen for oversight that is a policy document only. A good follow-up is what would tell us that an AI system was wrong.

**5. Which of the five measures would be easiest to game here, and how would we notice?**
Ask the group to design the gaming move, not to defend against it in the abstract. Record each move and check it against the paired guardrail. This is a short version of the quarterly gaming review.

**6. What is the smallest first measure we can run this quarter that helps whichever version we follow?**
Small steps beat a transition programme built on unverified details. Typical answers are the estate map or an AI inventory. Choose one with an owner and a date, and agree when to re-read the owner's publications.

## Four perspectives

### Product and delivery teams

You are asked who owns the product after release. Keep the live service inside the product's boundary, write an outcome sentence, and place the AI features you build on the same estate map as everything else. Show the team's own numbers first and keep them away from individual reviews.

### Service and operations teams

Your practices are the working foundation. Keep measuring them, record evidence that they work, and show how AI assistance is overseen where it touches tickets, alerts, or changes. Use the verification log to flag claims from training material before they reach a runbook.

### Leadership and governance

Fund ownership and verification before funding a transition programme. Ask for the estate map, the AI inventory, the verification log, and the age of outcome evidence. Treat a red coverage number as a reason to ask what help the team needs, not as a reason to assign blame.

### Customers and users

You should be able to see what a service is for in your own terms, and to learn when AI is part of how you are served. Ask for the outcome sentence, and say whether it matches your experience.

## In practice: a service management example

A regional logistics company's IT department runs a customer portal, a warehouse system, and a newly added AI assistant that drafts replies for the service desk. The service manager hears that ITIL 5 stresses products and AI governance, and leadership asks for a measurement plan within a month. Numbers in this example are illustrative.

The team resists drafting a plan from slide decks. It builds an estate map: 11 services, three digital products, two platforms, and four AI-enabled features, one of which was switched on by default in a vendor tool and had no owner. Estate owner coverage on the first count is 75 percent. The team records what the owner's certification page says in a one-page note and lists every other ITIL 5 statement as unconfirmed.

Each AI feature gets an owner, a human review point, and a risk register entry, which takes AI system inventory coverage from 50 percent to 100 percent within a month. The service desk lead decides that every AI-drafted reply is read by an agent before sending, and that agents record material changes to drafts. The team also writes outcome sentences for the three digital products, and the portal outcome ("customers can find where their shipment is without calling") is tested with five customers, two of whom describe it differently.

The team then catches a gaming risk. A manager proposes to raise outcome statement coverage by writing one sentence for all eleven services, "improve operational efficiency". The guardrail, a customer sample, would have shown that nobody recognized it, and the team rejects the shortcut. What remains hard: only two services have an evidence signal that is collected today, and the share of AI drafts changed by agents depends on agents recording edits consistently. The plan for next quarter is to add evidence signals for two more services.

## Agile, AI, automation, and analytics

### Agile

Treat adoption as continuous improvement: a small backlog of changes, reviewed with stakeholders and adjusted as the owner publishes more. A practical habit is a regular review of the verification log and the estate map. The caution is that a transition programme with one go-live date hides the verification work and repeats the pattern of big-bang change.

### AI

ITIL 5, as the owner describes it, covers AI-enabled environments. Give every AI use an owner, a human review point, and a way to detect errors, and measure inventory coverage and the quality pair. The caution is not to ask an AI assistant to summarize ITIL 5 from memory, since it may produce confident, wrong details. Give it text you have read from the owner and ask it to quote that text.

### Automation

Automate the estate map where you can: pull service and product lists from your catalogue and configuration data, and flag entries with no owner or an expired confirmation. The automation also needs measuring: how many flags led to action. The caution is that automation exposes data quality problems, so keep a person responsible for resolving each flag.

### Analytics

Track a handful of foundation signals over time, and show how many items stand behind each percentage. Use them to decide where to put improvement effort, not to rank teams. The caution is that a count of "owners named" can be gamed by naming anyone, and the data may be stale, so pair it with confirmation by the owner (see topic 10.8, Analytics and data quality metrics).

## Sector lens

**Startup.** There may be one product and a few people. Name the owner, write the outcome sentence, and list the AI tools the team uses. Skip the rest until there is a reason to add it.

**Small business.** IT may be one person or a supplier. Ask the supplier which AI features are on in the tools you pay for, and keep a short list of services with their owners. Treat vendor claims about any framework with care.

**Enterprise.** The estate is large and ownership is spread across teams and suppliers. Standardize the definition of "owner" and "outcome statement", run the discovery sweep on a cadence, and keep a central verification log so that teams do not each repeat the research.

**Government and public sector.** Procurement, audit, and legal rules shape what you can adopt and when. Treat the owner's publications and the applicable regulation as design inputs, record the date you read them, and use the verification log as evidence for auditors (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The cost is mostly staff time: building the estate map, writing outcome sentences, confirming owners, and running a discovery sweep for AI systems. There is little tooling cost if you already hold a catalogue or configuration data. The larger cost is the discipline of keeping the map and log current.

The return is avoided rework and better decisions. A transition plan built on unverified claims risks spending on the wrong changes. Ownership and AI inventory gaps are findings that matter under any framework version, since an unowned AI feature in a customer-facing process is a risk. Describe the benefit as a pattern, not as a number: fewer unowned systems, fewer surprises in audits, and clearer conversations with customers about value. Measure your own baselines, such as owner coverage and the age of outcome evidence, before and after the work if you need figures for a business case (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Repeating blog claims as fact.** Mark each claim verified or unconfirmed, and link only the owner's pages for the verified ones.
- **Relabelling services as products.** Change ownership and lifecycle accountability, or the label is decoration.
- **Coverage without content.** A high coverage number with empty or copied outcome sentences is gaming. Sample the content with customers.
- **AI governance as a document.** Name owners, review points, and review dates, and test that people follow them.
- **Waiting for the framework to measure.** Ownership, outcomes, and AI oversight are useful now. Start, and adjust when the owner publishes more.
- **Treating a certificate as compliance.** Measure whether teams can run the practice, not who passed an exam.
- **One-off discovery.** AI features appear continuously. Run the sweep on a cadence.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Source discipline | ITIL 5 knowledge comes from blogs and hearsay | Some owner pages read but not recorded | Verified and unconfirmed claims logged with dates | Claims re-checked before each decision | Teams share a living, dated verification log |
| Ownership | Owners unclear for most items | Owners named for main services | Estate map with an owner for every item | Ownership gaps reviewed and closed on a cadence | Owners coordinate across teams and suppliers |
| Outcomes and evidence | Targets and counts only | Outcome sentences for main services | Outcome and evidence signal for every service | Evidence age reviewed; stale outcomes revisited | Outcomes co-written with customers and refreshed continuously |
| AI governance | AI use unknown | Main AI uses listed | Owner, review point, and risk entry per system | Errors and overrides measured and reviewed | Governance adapts as AI and rules change |

## Checklist

- [ ] We read the owner's ITIL 5 pages and recorded what they say, with the date.
- [ ] Every ITIL 5 statement in our plans is marked verified or unconfirmed.
- [ ] We have an estate map of services, products, platforms, and AI systems.
- [ ] Every item on the map has an owner who has confirmed it.
- [ ] Every service has an outcome sentence and a named evidence signal.
- [ ] We report the age of outcome evidence with percentiles.
- [ ] Every AI system has an owner, a human review point, and a risk register entry.
- [ ] We run a discovery sweep for AI features on a schedule.
- [ ] Each measure has a gaming vector and a guardrail on the same page.
- [ ] We chose one first measure with an owner and a date.

## AI prompts

**Build an estate map from material you paste in.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**Sort ITIL 5 statements into verified and unconfirmed.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Draft outcome sentences and evidence signals for review.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Review the gaming risk of the five measures.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## AI skills

- [ITIL 5](../../../../skills/itil-5/SKILL.md): use to build an estate map, a gap analysis, and a phased adoption plan, with ITIL 5 claims flagged unconfirmed.
- [Maturity models](../../../../skills/maturity-models/SKILL.md): use to turn the maturity table into a team self-assessment.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the topic that covers a metric and its paired guardrail.

## Key takeaways

- A statement about ITIL 5 is verified only if the owner's own publication says it, and the date you read it should be recorded.
- The owner's stated themes of digital products, AI-enabled environments, and measurable outcomes can be measured today as ownership, outcome evidence, and AI oversight.
- Coverage numbers are easy to satisfy on paper, so sample the content and keep a guardrail beside each.
- Keep measuring ITIL 4 practices that work, and change a measure only when the owner's guidance and your evidence agree.
- Start with one measure and an estate map, and adjust as the owner publishes more.

## References and further reading

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Product management](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
