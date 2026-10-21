# Knowledge management metrics

**Measure knowledge by whether it gets used and trusted in the moment of need, not by how much of it exists: watch link rate, reuse, freshness, and findability together, and treat every article count as a question about the work rather than a score.**

## Overview and motivation

A service team accumulates knowledge every day: how to restore a service, what a confusing error message really means, which workaround held last time. [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management) is the discipline of making that knowledge available to the next person who needs it. In ITIL 4 (the 2019 edition of the framework published by AXELOS, and the widely documented foundation for this book), knowledge management is a practice in its own right, and [ITIL](https://en.wikipedia.org/wiki/ITIL) also expects it to support incident handling, problem handling, and the service desk. This topic covers how to tell whether that support is real.

Most of the usable output of knowledge management ends up in a [knowledge base](https://en.wikipedia.org/wiki/Knowledge_base): a store of articles, runbooks, known-error records, and short how-to answers. A [runbook](https://en.wikipedia.org/wiki/Runbook) is a written set of steps for a routine operation or a recovery. Articles are the explicit part of what a team knows. The [tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge) of experienced people, such as a sense that an alarm is noise, cannot be fully written down, and no metric in this topic measures it directly.

In the ITIL view, knowledge is a managed asset with a lifecycle: created, reviewed, published, used, and retired. In the agile view, documentation must earn its place, conversation and pairing carry a great deal, and written knowledge is a by-product of finishing work. Both views agree on the test: did the knowledge help someone solve a real problem faster or better than they would have without it?

The method that connects the two views most directly is [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), a methodology from the Consortium for Service Innovation. In KCS, knowledge is captured and improved as part of solving the problem, not afterward. People work in two loops. The solve loop is the moment of resolution: search for an existing article, reuse and improve it if found, create one if not. The evolve loop is the longer cycle that studies how knowledge is performing and improves the system around it. KCS also proposes indicators of its own, such as the rate at which resolved cases are linked to articles. This topic summarizes those ideas in a vendor-neutral way; teams adopting KCS formally should read the Consortium's own practices guide.

The number of articles in a knowledge base is an inventory, not an outcome, and it rises with neglect as easily as with care. The metrics below are tied to a moment of use instead: a case closed, a search made, a reader's reaction. Even those can be bent (see topic 1.2, Goodhart's law and the psychology of metrics).

Contact and handling measures live with the [service desk](https://en.wikipedia.org/wiki/Service_desk) (see topic 3.1, Service desk metrics). Volume and repeat patterns come from incident data (see topic 3.2, Incident volume and priority). Self-service success, where users consume articles without an agent, is covered separately (see topic 3.7, Self-service and automation metrics). This topic stays with the health of the knowledge itself and its use by the people who solve problems.

## Key principles

- **Measure use at the point of work.** An article that is linked to a resolved case or found by a search is evidence of value. An article that merely exists is not.
- **Capture in the flow of work.** Knowledge written during resolution is fresher and cheaper than knowledge written in a separate documentation push, so metrics should reward capture as part of finishing work.
- **Read freshness against use.** Old is not the same as wrong. Review effort belongs on articles that are used often, not spread evenly over a catalog of mostly unread pages.
- **Sample for relevance.** A link between a case and an article proves only that someone created the link. A small human sample of whether the article really fit tells you whether the link means anything.
- **Describe teams and knowledge areas, never individuals.** Contribution counts per person turn a shared asset into a competition and teach people to write junk (see topic 1.2, Goodhart's law and the psychology of metrics).
- **Pair every volume metric with a quality signal.** Link rate with relevance, article creation with duplicates, reuse with reader feedback.

## Metric definitions

The table lists seven metrics. Time windows (such as the review period for freshness) are choices a team makes and writes down; no value here is a benchmark. Throughout, "case" means an incident or a service request record in the ITSM (IT service management) tool, and major incidents are reported separately so they do not distort the ratios (see topic 3.4, Major incident metrics).

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Knowledge link rate | Share of resolved cases that have at least one knowledge article attached at the moment of resolution | cases resolved in the period with at least one linked article / cases resolved in the period. Counts resolution date; excludes major incidents, cases closed as duplicates, and cases auto-closed with no human work | percent | ITSM tool: case and article link tables | Knowledge management; incident management | Definition of done includes capturing what was learned | Weekly for the team; monthly for review |
| Reuse ratio | Share of article links that point to an existing article rather than to one created during that case | links to articles that existed before the case opened / all article links made on resolved cases in the period. Excludes links added after the case closed | percent | ITSM tool: article creation date against case open date | Knowledge management; continual improvement | Reuse over rework; shared ownership of the codebase and its docs | Monthly |
| Article freshness | Share of in-use articles that have been reviewed, or used and confirmed correct, within a stated review window | in-use articles with a review or confirmed-use date inside the window / in-use articles. An article is in use if it was linked to a case or viewed by a reader in the last 12 months (a team choice); drafts and retired articles are excluded | percent | Knowledge base metadata and view log | Knowledge management; service desk | Backlog refinement of documentation; retrospective actions | Monthly |
| Zero-result search rate | Share of knowledge searches that return no article | searches with zero results / all searches. Excludes searches by bots and automated checks; counts each search once even if repeated within a minute | percent | Knowledge base or portal search log | Knowledge management; service desk; service request management | Discovery of unmet user need; backlog input | Weekly |
| Helpfulness rate | Share of reader feedback that says the article helped, shown with the response rate | helpful votes / (helpful votes + not-helpful votes) for articles in the period; response rate = feedback votes / article views | percent, with response rate | Knowledge base feedback widget and view log | Knowledge management; customer experience | Stakeholder review feedback on documentation | Monthly |
| Time to publish | Elapsed time from when an article draft is created to when it is reviewed and visible to its audience | clock starts at draft creation, stops at publication (or at first approved visible state). Excludes time in a state of "on hold, awaiting product release"; reported as median and 85th percentile | days (median and 85th percentile) | Knowledge base workflow history | Knowledge management | Lead time of a work item from start to done (see topic 2.2, Lead time, cycle time, and flow efficiency) | Monthly |
| Contribution breadth | Spread of article creation and improvement across the team, measured without naming people | distinct contributors who created or improved an article in the period / members of the team who resolved cases in the period. Reported for a team only, never as a list of names | percent | Knowledge base edit history joined to team membership | Knowledge management; continual improvement | Collective ownership; pairing and swarming | Quarterly |

Knowledge link rate has a clock that is easy to miss. The link must exist when the case is resolved, not when someone tidies up a week later, because late linking measures cleaning and tells you nothing about use during resolution. Reuse ratio depends on a reliable article creation date. If articles are migrated or bulk imported, their creation dates reset and the ratio will mislead until the migration is marked.

## Recommendations

### Decide what the knowledge is for

**1. Tie every knowledge metric to a use case.** Name the people the knowledge serves: service desk analysts resolving first contact, on-call engineers handling an alert, or users helping themselves. Each audience needs different measures. A runbook for an on-call engineer is judged by whether the steps restored the service, while a password-reset article is judged by whether the user stopped contacting the desk. Record it in your register (see topic 1.4, Metrics governance and ownership).

**2. Start with link rate and relevance, not article counts.** Link rate shows whether knowledge enters the resolution moment at all. Pair it from the start with a small monthly sample in which a person reads 20 or 30 linked cases and judges whether the article fitted. A link rate of 70 percent with half the links irrelevant is worse than a link rate of 40 percent with honest links, because the first hides the knowledge gap that the second reveals.

**3. Separate "no article exists" from "article exists but was not found".** When a case closes without a link, the reasons differ and so do the fixes. Add a short closure choice, such as "no article existed" and "article not found", and report them as shares of unlinked cases. The first points at content to write; the second points at search, naming, and structure. Keep the choice optional where it would slow the desk, and sample instead.

### Capture knowledge as work finishes

**4. Make capture part of the definition of done.** In an agile team, a work item that changes how a service behaves is not done until the runbook, known-error record, or help article is updated. In the service desk, a case that required discovery is not resolved until the discovery is captured or an existing article is improved. This is the KCS idea of working in the solve loop, and it keeps the cost of writing low because the person writing has the context fresh.

**5. Allow a lightweight draft state.** Many teams lose knowledge because every article must pass a heavy review before anyone can see it. KCS-style practice distinguishes a work-in-progress article, visible to the team, from a validated one, visible to a wider audience. Measure time to publish for both stages separately, as medians and the 85th percentile, so slow reviews show up as a queue and not as a vague complaint (see topic 1.6, Statistical literacy for service metrics).

**6. Prefer improving to creating.** A growing pile of near-duplicate articles makes search worse and freshness harder to maintain. Watch the reuse ratio alongside the creation count, and when creation rises while reuse falls, look for duplicates. Make merging and retiring easy and visible, and count a merge as a positive contribution.

### Keep knowledge current and findable

**7. Review the articles that are used.** Concentrate review effort where use is high. Sort in-use articles by how often they were linked or viewed, and set a review window for the top group that is shorter than for the long tail. A stale article that nobody reads costs little; a stale article that appears in a third of resolutions can mislead hundreds of cases. Report freshness for the heavily used group as its own line so the average of the whole base does not hide it.

**8. Treat search failures as backlog items.** Read the most frequent zero-result searches each month and decide for each whether to write an article, add a synonym, rename an article, or accept that the question belongs elsewhere. This turns a metric into a short, concrete list that the team can work. It also shows real vocabulary, since users and analysts rarely use the words that the service catalogue (service catalog) uses.

**9. Read the words behind the votes.** Helpfulness rate is cheap and noisy. Response rates are usually low and skew toward strong opinions. Show the response rate beside the helpfulness rate, and read the written comments on the most-viewed articles in a standing review. A single comment such as "step 4 no longer exists in the new version" is worth more than a thousand unlabeled votes.

**10. Connect knowledge to problems and postmortems.** A recurring incident that is repeatedly resolved with the same article is a signal for problem management, which looks for the underlying cause and may remove the need for the article (see topic 4.1, Problem management metrics). Known-error records and postmortem lessons are knowledge assets with their own lifecycle (see topic 4.2, Postmortem and learning metrics, and topic 4.6, Technical debt and known errors). Look at the top ten most-linked articles each quarter and ask which should be retired by fixing the cause.

### Govern without ranking

**11. Report contribution at team level.** Contribution breadth tells you whether knowledge work is shared or concentrated in two people. That is a risk worth seeing, because it is the same pattern as a [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of two. It must never turn into a leaderboard of authors, which would reward the quantity of edits and teach people to split articles or make trivial changes. If a concentration appears, treat it as a team conversation about time, support, and permission to write (see topic 9.4, Skills and learning metrics).

**12. Retire measures that stop helping.** If nobody acts on link rate, move attention to relevance or freshness of the heavily used group. Log any definition changes with the reason, because a changed formula breaks the trend line (see topic 1.5, Data sources and instrumentation).

## Gaming vectors and guardrails

Every metric in the definitions table appears here. Knowledge metrics are especially exposed because the act of linking or of reviewing is a quick click, whereas the real value lies in the content.

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Knowledge link rate | Attaching any article, often a generic or very popular one, to every case before closing; linking after the fact in bulk | Monthly relevance sample of linked cases; share of links that go to the same few articles; link timestamp against resolution timestamp |
| Reuse ratio | Creating a new article for every case then immediately linking it so it counts as reuse next time; or never creating at all so the ratio looks perfect | Duplicate article rate found by a periodic search; share of cases closed with the reason "no article existed" |
| Article freshness | Marking articles as reviewed without checking them; resetting the review date through trivial edits; counting only the articles easy to review | Sample of recently reviewed articles tested against the real service; helpfulness rate and written comments on the same articles |
| Zero-result search rate | Adding vague or catch-all articles that match any query; stuffing keywords; excluding awkward search terms from the log | Click-through followed by a contact on the same topic within a short window; helpfulness rate; manual read of top search terms |
| Helpfulness rate | Prompting only satisfied readers to vote; hiding the not-helpful option; voting from within the team | Response rate and respondent mix shown with the rate; written comments; contact rate after reading the article |
| Time to publish | Publishing a thin stub to stop the clock; splitting an article into pieces; moving drafts to a state the clock excludes | Relevance and helpfulness of recently published articles; count and age of drafts in excluded states |
| Contribution breadth | Making trivial edits so everyone appears as a contributor; asking people to add a sentence to meet a quota | Size and substance of edits sampled; reuse and helpfulness of the articles contributed; no names in the report |

A healthy reading shows linked articles that a human sample confirms are relevant, a reuse ratio that rises as the base matures, a heavily used set of articles with recent verified reviews, a short list of search failures that the team is working through, and contribution spread across the team. Some cases with no article, because they were genuinely new, are signs of an honest base, not a failing one.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Target a high link rate | Pushes capture and reuse into the daily routine; simple to understand | Invites meaningless links; hides gaps where no article exists |
| Sample for relevance by hand | Reveals whether links mean anything; builds shared standards | Takes analyst time; small samples are noisy; depends on the sampler's judgment |
| Review everything on a fixed schedule | Easy to plan and audit; evenly applied | Spends effort on articles nobody reads; neglects the heavily used ones |
| Review by use | Directs effort to where wrong knowledge hurts most | Needs reliable view and link data; long-tail articles may rot unseen |
| Formal KCS adoption | Gives a coherent, tested set of practices and indicators | Needs sustained investment, coaching, and tool support; heavy for a very small team |
| Conversation and pairing instead of articles | Transfers judgment and context; low overhead | Does not scale to shifts, vacations, and turnover; knowledge leaves with people |

Measure just enough to see whether knowledge is used and trusted, and spend the saved effort on content. For a small team, a link rate with a monthly relevance sample and a short list of search failures is a complete program. For a large desk, the full set pays for itself only if someone owns the review and acts on it.

## Questions to discuss with your team

**1. When we last solved a hard case, where did the knowledge come from, and where did it go afterward?**
Pick a recent case that took real effort and trace the path of what was learned. Was an article found, a colleague asked, or an answer worked out from scratch? Ask whether the next person with the same problem would find the answer in under five minutes. The facilitator should look for the gap between what the team knows and what the knowledge base holds.

**2. If we raised our link rate to a stated target next month, how could we do it without helping anyone?**
Make the gaming list explicit and treat it as design input rather than an accusation. Common answers are linking a generic article, linking in bulk at closure, and picking the most popular article. For each answer, ask which guardrail in the table would catch it and how quickly. The facilitator should leave with at least one new check, such as a monthly relevance sample, and an owner for it.

**3. Which five articles do we rely on most, and when were they last verified against the real service?**
Look at the most linked and most viewed articles and read two of them aloud together. The conversation often shows that the articles with the most impact are the ones with the least care, which is the argument for reviewing by use.

**4. What are people searching for that we do not have?**
Bring the top zero-result searches and the unlinked-case reasons. Group them into articles to write, words to add, and questions that belong with another team. The facilitator should capture a short list of the next three items and plan how they will be written during normal work, not in a special project.

**5. Who writes our knowledge, and what does it cost them to do so?**
Discuss capture honestly. Is writing seen as part of the job, or extra work after the work? Ask what slows it: a heavy template, a slow review, a fear of being wrong, or no time at the end of a hard shift. The facilitator should steer away from chasing individuals and toward changes in tooling, time, and permission.

**6. Which of our articles should we stop needing?**
Take the most-reused articles and ask what recurring cause they work around. A reset procedure used 200 times a month could be a symptom of a defect in the product, a confusing screen, or a missing automation. Decide which items to hand to problem management or to the product team, and which to automate (see topic 3.7, Self-service and automation metrics). The facilitator should note that the best result of good knowledge work is sometimes fewer articles.

## Four perspectives

### Product and delivery teams

Delivery teams create much of the knowledge a service will need: how a feature behaves, what a new error means, how to roll back. If that knowledge is not captured before release, the service desk and on-call teams learn it the hard way. Include the runbook and the help article in the definition of done, and watch link rate and search failures for the services you own as feedback. When the same article is linked many times, treat it as a defect report on the product, not as a success of documentation.

### Service and operations teams

Service desk and operations teams are the main producers and consumers of the knowledge base, so the metrics are mostly theirs to use. Work the solve loop honestly: search first, reuse and improve, create when nothing fits. Use link rate with a relevance sample, and read zero-result searches as a backlog. Avoid any league table of authors or editors, since the knowledge base is a shared tool and personal counts damage it (see topic 3.1, Service desk metrics).

### Leadership and governance

Leaders decide whether knowledge work gets time, so they decide the quality of the knowledge. Ask for the relevance sample and the freshness of the heavily used articles before asking for the article count. Resist targets on link rate or article creation without a guardrail, and expect to hear when the numbers fall for good reasons, such as a merged set of duplicates. Fund the review of high-use articles and the fixes that make articles unnecessary.

### Customers and users

Users meet knowledge through search, a portal, a chatbot, or the answer an analyst gives them. What they notice is whether the first answer is correct and whether they have to repeat themselves. Their own feedback on articles, their searches that come up empty, and their repeat contacts are the best guardrails for everything in this topic. If users are asked to rate articles, tell them what happens to the feedback, and act on it visibly (see topic 6.1, Customer satisfaction metrics).

## In practice: a service management example

A mid-sized insurance company runs an internal IT service desk of about a dozen analysts, supporting staff across several offices. The desk shares a knowledge base with two product teams that own the claims application and the document portal. All numbers in this example are illustrative.

Leadership has asked for better first contact resolution (see topic 3.1, Service desk metrics) and sets a target for the knowledge link rate of 60 percent, up from an illustrative 38 percent. Within six weeks the dashboard shows 64 percent. The service desk lead is not convinced, because analysts still complain that they cannot find answers, and a product team lead mentions that three of the articles she owns appear on most closed cases.

The team runs a gaming review and a relevance sample. They read 30 linked cases, chosen at random from the previous month, and judge whether the article fitted the case. In an illustrative count, 11 of the 30 links are to a generic "How to log a ticket" article or to a general network overview that did not address the problem. They also find that the links were made within a few seconds of closing the case, a pattern that suggests habit and not use. The desk lead looks at the reuse ratio, which is up, and at the share of unlinked cases with the reason "no article existed", which has dropped to almost nothing, because analysts now pick the nearest article. The gap in the knowledge has become invisible.

The team makes three decisions. First, the link rate target is withdrawn and replaced by a relevance-adjusted view: link rate is reported next to the sampled share of relevant links, and the closure reason "no article existed" is made easy to pick and is not treated as a failure. Second, the zero-result searches are read each month, and the top five become the next writing tasks, shared across the desk. Third, the 20 most-linked articles are reviewed for freshness within a month, owned by the relevant product team, and any article that is linked to more than a quarter of one service's cases is passed to problem management as a candidate for a permanent fix (see topic 4.1, Problem management metrics).

Two months later the headline link rate has fallen back to an illustrative 51 percent, which feels like bad news. The sampled relevance has risen from 63 percent to 85 percent in illustrative terms, the zero-result search rate has fallen, and a repeated sign-in problem with the document portal has been fixed at its cause, which retired three articles. The lead asks leadership to judge the program by relevance and retired workarounds, not by the raw link rate.

## Agile, AI, automation, and analytics

### Agile

Treat knowledge as a by-product of solving problems, with short feedback from users on whether an article helped. The caution is that article count targets produce thin, duplicated content.

### AI

AI can draft articles, answer questions from the knowledge base, and surface gaps, which raises article counts and use while quality may fall. Pair link rate and reuse with the helpfulness rate and with the share of AI-drafted articles that a person reviewed before publishing. The caution is that a stale or wrong article served confidently by an AI scales the error.

### Automation

Capture search, view, and link events automatically, and automate freshness reminders to owners. Measure the automation on how many reminders lead to an update. The caution is that automatic expiry that unpublishes articles can remove useful content.

### Analytics

Use search logs to see zero-result queries, and show helpfulness with the number of responses. The decision informed is which articles to write, fix, or retire. The caution is that views of an article are not the same as help received.

## Sector lens

**Startup.** Knowledge lives in a few heads and in chat history. Write a short list of runbooks for what breaks at night, and record the fix after each incident. A monthly check that the top runbooks still work is enough measurement.

**Small business.** One person often is the service desk, the administrator, and the owner of the knowledge. The risk is the bus factor, since the knowledge disappears if the person does. Use a simple shared repository, keep articles short, and let a contractor or colleague test the key procedures. A regular read-through of the most-used pages beats any dashboard.

**Enterprise.** Scale brings duplicate articles and uneven quality. Use common definitions for link rate, freshness, and reuse, report by service and by team, and appoint owners for the high-use articles. Avoid comparing teams, because service mix and the age of the base differ.

**Government and public sector.** Records rules, accessibility requirements, and audit expectations can govern how knowledge is stored, reviewed, and retired. Treat these as design inputs: keep an approval trail for articles that affect citizens, and publish accessible content. Feedback and search failures from citizens are especially valuable (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs of knowledge metrics are modest. The tool data usually exists already in the ITSM platform and the knowledge base. The main costs are the time to define the measures, the small monthly sample that checks relevance, the review time for high-use articles, and the discipline to capture knowledge while solving problems. If the knowledge platform lacks usable link or search data, the cost of instrumenting it should be included (see topic 1.5, Data sources and instrumentation).

The return is a pattern, and the book does not quote a figure for it. When analysts find a correct article quickly, resolution is faster and more consistent, new staff become useful sooner, and on-call engineers depend less on a few experts. When users find answers themselves, the desk receives fewer repeat contacts for known questions. The metrics help by showing where knowledge is missing, stale, or unused, so that scarce writing time goes to the articles that matter.

The total cost of ownership includes upkeep. Articles decay as services change, so review time is a continuing cost, and a program that ignores it will overstate the benefit. To estimate the return for your own team, compare a sample of your own cases before and after, and label your assumptions.

## Anti-patterns and pitfalls

- **Counting articles or views as success.** Volume rises with clutter and views can signal confusion. Measure use in resolution, relevance, and feedback instead.
- **A link-rate target with no relevance check.** People will attach any article. Sample linked cases monthly and report the relevant share beside the rate.
- **Ranking authors or editors.** Personal tallies produce thin edits and splits of articles. Report contribution breadth for the team and discuss it as a capacity question.
- **Reviewing all articles on one fixed schedule.** Effort goes to pages nobody reads. Review by use and retire the unused.
- **Stub publishing to stop the clock.** A quick, thin article defeats time to publish. Pair it with helpfulness and the follow-up contact rate.
- **Ignoring searches that fail.** Failed searches are the clearest signal of unmet need. Read them each month and turn the top items into work.
- **Separating knowledge from the work.** A documentation project at the end of the quarter produces stale pages. Capture during resolution and in the definition of done.
- **Treating the knowledge base as permanent.** Content decays. Make retirement and merging routine and credited.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Capture and linking | Knowledge lives in heads and chat; links are rare | Some teams link articles to cases, practice varies | One written rule for linking and capture; closure reasons recorded | Link rate and relevance sample reviewed monthly and tied to improvement | Capture is part of the workflow across desk, operations, and product teams; definitions revised when they stop informing decisions |
| Freshness and ownership | No owners; articles age unseen | Owners named for key services | Review windows set, with shorter windows for heavily used articles | Freshness of high-use articles is trended and funded | Review responsibility shared with suppliers and product teams; retirement is routine |
| Findability and feedback | Search is ad hoc; no search data | Search log exists but is not read | Zero-result searches and reader feedback reviewed on a set cadence | Search failures drive a backlog and are paired with contact data | Users, analysts, and chatbots draw on one knowledge source; feedback visibly changes content |
| Use in improvement | Metrics, if any, are counts | Counts are shown to the team | Metrics paired with guardrails and shown to the team first | Heavily linked articles feed problem management and automation decisions | Knowledge, problem, and product backlogs are managed together across teams |

## Checklist

- [ ] Each knowledge metric names the audience it serves and the decision it informs.
- [ ] Link rate has a written definition, including the clock, the exclusions, and the treatment of major incidents.
- [ ] A monthly sample checks that linked articles are relevant to the cases.
- [ ] Case closure records "no article existed" and "article not found" as distinct reasons.
- [ ] Time to publish is reported as a median and a high percentile, with draft and published stages separated.
- [ ] A review window is set for in-use articles, shorter for the most used.
- [ ] The top zero-result searches are read each month and turned into backlog items.
- [ ] Reader feedback is shown with its response rate, and comments on top articles are read.
- [ ] Contribution is reported for the team only, with no named lists.
- [ ] The most-linked articles are reviewed each quarter as candidates for permanent fixes.
- [ ] Definition changes are logged with reasons.

## AI prompts

**Check whether linked articles fit their cases.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Turn failed searches into a writing backlog.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Design a lightweight set of knowledge measures.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find related topics and the paired guardrail when you add a knowledge metric to your dashboard.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a knowledge metric carries its gaming vector, guardrail, and cross-references in the right form.

## Key takeaways

- Measure knowledge at the moment of use: linked in resolution, found by search, confirmed by readers.
- Pair link rate with a human relevance sample, because a link proves only that someone clicked.
- Review freshness by use, putting the effort where a wrong article would mislead the most cases.
- Treat failed searches and heavily linked articles as signals for new content, better naming, or a permanent fix.
- Report contribution for the team and never rank authors.
- Fewer, better articles often indicate a healthier base than a larger one.

## References and further reading

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
