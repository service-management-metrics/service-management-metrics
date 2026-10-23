# Tooling landscape

**Choose tools for the questions you need answered and the data you can trust, keep the data portable, and spend less on platforms than on the habits that make the numbers worth reading.**

## Overview and motivation

Tools are where metrics programmes most often go wrong, in two opposite directions. Some organizations buy a large analytics platform first and discover later that they have no agreed definitions, no clean data, and no audience. Others build a pile of scripts and spreadsheets that one person understands, and the programme ends when that person moves on. Both start with the tool and ignore the questions it is meant to answer.

The landscape is crowded and changes quickly, so this topic is deliberately vendor-neutral. It describes the kinds of tools, the data flows between them, the trade-offs between building and buying, and criteria for choosing. It names no products, because product names date quickly and a book is a poor guide to current features and prices. The measurement principles do not change with the vendor: know what you are measuring, where the data comes from, who owns it, and how it will be read.

Most of the data a service metrics programme needs already exists in systems of record. [IT service management](https://en.wikipedia.org/wiki/IT_service_management) tools hold incidents, requests, problems, changes, and configuration records. Source control, build, test, and deployment systems hold the history of engineering work. Monitoring and [observability](https://en.wikipedia.org/wiki/Observability_(software)) systems hold availability, latency, and error data. Survey tools, finance systems, human resources systems, and contract repositories hold the rest. A metrics programme joins these sources without disturbing the work done in them (see topic 1.5, Data sources and instrumentation).

The movement of data from sources to a place where it can be analysed is a [data pipeline](https://en.wikipedia.org/wiki/Data_pipeline), and the classic pattern is [extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load): read from sources, reshape and clean, and write to a store. The store may be a [data warehouse](https://en.wikipedia.org/wiki/Data_warehouse), an integrated repository of data from several systems organized for analysis. Programmes reach these systems through an [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface), which is how one piece of software asks another for data in a defined way. The quality of what flows through determines the quality of every chart. [Data quality](https://en.wikipedia.org/wiki/Data_quality) covers accuracy, completeness, consistency, and timeliness, and the discipline that sustains it is [data governance](https://en.wikipedia.org/wiki/Data_governance).

The financial side deserves care. The [total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership) of a tool includes licences, infrastructure, integration, training, administration, and the cost of leaving it. [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) is the situation where switching suppliers is so costly that the customer is effectively bound. Metrics programmes are especially exposed, because definitions, history, and dashboards accumulate inside a tool, and extracting them later is hard.

The agile aims shape the approach. Continuous delivery applies to the programme: stand up the thinnest working path from one source to one view for one team, learn from its use, and extend. Continuous stakeholder involvement means the people who will use the numbers take part in tool choices. Continuous improvement and ongoing evolution mean the tooling is expected to change, so portability matters more than perfection. A sustainable pace means the programme does not become a data engineering project that starves the work it measures. And motivated individuals do better work with tools they helped choose and understand than with tools imposed from above, particularly tools that feel like surveillance (see topic 11.3, Rolling out metrics without breeding fear).

The topic leans on the dashboard design guidance (see topic 11.1, Designing a service metrics dashboard) and the governance topics in Part 1.

## Key principles

- **Questions before tools.** Write the questions and the measures first, then see what tooling they need.
- **Use the systems of record.** Take data from where the work happens, and avoid asking people to enter it twice.
- **Keep definitions outside the tool.** Maintain metric definitions in a plain, portable form that survives a change of platform.
- **Prefer portable data.** Store data in open formats, with documented interfaces, and keep a path out.
- **Start thin and grow.** One source, one view, one team, then extend.
- **Count the full cost.** Licences are a fraction of the cost of integration, data cleaning, and upkeep.
- **Protect people.** Tools should aggregate to teams and services, enforce access rules, and make surveillance hard.
- **Treat the pipeline as a service.** It needs an owner, monitoring, tests, and a way to handle failure.

## Metric definitions

The measures below describe the health of the metrics tooling and its data supply. They are for the programme team, to keep the infrastructure honest, and are not to be used to rate people.

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Source coverage | Share of the systems of record needed for the agreed measures that feed the metrics store automatically | sources connected and tested / sources needed for agreed measures | percent | Source inventory; pipeline configuration | Information and technology management; service configuration management | Continuous delivery of the pipeline | Quarterly |
| Pipeline reliability | Share of scheduled data loads that complete on time with passing checks | loads on time with passing checks / loads scheduled | percent | Pipeline logs and test results | Monitoring and event management | Automated tests and fast feedback | Weekly |
| Time to a new measure | Elapsed time from an approved request for a new measure to its availability with a definition card | days from approval to published, median and 85th percentile | days | Request and release records | Service request management; change enablement | Small increments of value | Quarterly |
| Reconciliation rate | Share of key figures that match between the metrics store and the source system on a sampled check | figures matching within tolerance / figures checked | percent | Reconciliation checks | Information and technology management | Trustworthy feedback | Monthly |
| Manual effort share | Share of effort on recurring reports spent on manual collection and cleaning | hours on manual steps / total hours on recurring reports | percent | Time estimates; team survey | Continual improvement | Eliminating toil | Quarterly |
| Exit readiness | Whether the definitions, history, and dashboards can be exported in a documented, usable form | exports tested and complete / export tests planned | percent | Export test records | Supplier management; service continuity management | Sustainable choices | Annual |
| Tooling cost per team supported | Full annual cost of the programme's tooling divided by the teams it serves | (licences + infrastructure + upkeep effort) / teams served | currency per team | Finance and effort records | Service financial management | Sustainable pace | Annual |

Count sources by what the agreed measures need and not by what exists, so that coverage is not raised by connecting irrelevant systems. Reconciliation requires choosing a sample in advance and a tolerance. Tooling cost per team supported is a descriptive figure used to compare options, not a target to push down. It includes the effort of the people who maintain the pipeline.

## Recommendations

### Decide what you need

**1. Write the requirements as questions and measures.** List the measures the programme has agreed to publish (see topic 11.1, Designing a service metrics dashboard), the sources each needs, how fresh each must be, who may see it, and how long history must be kept. Distinguish must-haves from preferences. A short document of two pages is better than a long request for proposals.

**2. Inventory what you already own.** Many organizations have analytics features in their service management, engineering, and monitoring tools that go unused. Many have spreadsheets, scripts, and reports that already answer part of the need. Start by seeing what these can do. The cheapest tool is the one already paid for and already understood.

**3. Take stock of the data before the tool.** For each source, check whether the data is complete, consistently entered, and accessible through an interface. A tool cannot fix incident categories that nobody uses, change records created after the fact, or timestamps that are overwritten. Some of the most valuable early work is fixing the data capture at the source (see topic 7.4, Configuration and CMDB quality metrics).

### Build, buy, or combine

**4. Compare building and buying on full cost and fit.** Buying an analytics platform or a packaged engineering analytics product brings ready-made connectors, charts, and support, at the price of licences, a fixed model of the world, and dependency. Building a pipeline and views brings fit and control, at the price of engineering time and upkeep. Most organizations end up combining: use built-in reporting where it is good enough, use a general analysis tool for views, and build thin connectors where nothing else fits.

**5. Test a prototype with real data.** Before committing, run a time-boxed trial with two or three of your own measures, using real data and real users. Check how long connections took, how well the tool handled your definitions, whether it could show distributions and percentiles, and how it controlled access. Marketing demonstrations use clean data, and yours is not.

**6. Plan the exit before you enter.** Ask how definitions, history, and dashboards can be exported, and test it. Prefer tools with open interfaces and standard formats, and keep your own copy of the metric definitions and the cleaned data. The cost of leaving is part of the cost of staying, and a credible exit improves your negotiating position (see topic 8.4, Supplier and contract metrics).

### Choose with clear criteria

**7. Use vendor-neutral selection criteria.** Useful criteria include the following. Do the data sources you need have maintained connectors? Can definitions be written, versioned, and reviewed? Can the tool show distributions, percentiles, and trends as well as averages and counts? Does it aggregate to teams and services and let you restrict individual-level views? Does it support role-based access and audit? Is data exportable in open formats? How does the vendor handle changes, outages, and security incidents? What does it cost at the scale you expect in three years?

**8. Be wary of built-in scoring.** Some tools offer composite scores, rankings of people, or "productivity" indices out of the box. These are easy to adopt and hard to defend (see topic 1.2, Goodhart's law and the psychology of metrics). Check whether such features can be turned off, and set the policy before turning anything on.

**9. Involve the people who will use it.** Ask the teams to try the shortlisted options with their data. Their questions will expose limits that a requirements document did not. Include security, privacy, finance, and procurement early (see topic 8.1, Security incident and vulnerability metrics).

### Run the pipeline as a service

**10. Automate, test, and monitor the pipeline.** Treat data loads like any other production service. Run automated checks on counts, ranges, duplicates, and freshness. Alert on failure, and show data quality status on the dashboard. Version the transformation logic and review changes to it like code (see topic 5.5, Monitoring and alert quality metrics).

**11. Keep a catalogue of definitions.** Maintain a shared catalogue with each measure's definition, formula, source, owner, and limits. It can be a repository of plain text files, a data catalogue tool, or a wiki. What matters is that it is the source of truth for meaning, and that dashboards read from it or link to it (see topic 1.4, Metrics governance and ownership).

**12. Review the tooling yearly.** Each year, check what the tooling costs, which parts the programme uses, where manual effort remains, and what newer options exist. Retire what no one uses. Reconsider the build or buy balance as the programme matures. Plan for change as a normal part of the work.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Source coverage | Connecting easy or irrelevant sources; counting a connection that carries no usable data | Count by agreed measures; check data completeness per source |
| Pipeline reliability | Loosening checks so loads always pass; scheduling fewer loads | Review the checks for strength; track reconciliation and source row counts |
| Time to a new measure | Publishing without definitions or tests; narrowing what counts as a new measure | Require the definition card and a reconciliation check for completion |
| Reconciliation rate | Choosing easy figures to check; widening the tolerance after a miss | Choose samples before the check; fix tolerance in advance; include difficult figures |
| Manual effort share | Understating manual work; hiding effort in other budgets | Ask the people who do the work; compare with time spent late in each reporting cycle |
| Exit readiness | Testing a partial export; counting a documented plan as readiness | Run a full restore into a different tool on a sample; verify definitions and history |
| Tooling cost per team supported | Excluding upkeep effort; adding teams on paper | Include staff time; count teams that actively use their views |

A healthy reading shows data that arrives on time and reconciles to the source, new measures that are published with definitions, falling manual effort, and an exit that has been tested at least once.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Built-in reporting of each tool | Cheap; already there; understood | Silos; inconsistent definitions across tools |
| Single suite from one vendor | Integrated; one contract | Lock-in; fits the vendor's model, not yours |
| Packaged engineering analytics product | Fast start; ready connectors | Fixed model; risk of individual-level scoring; cost at scale |
| General analysis and visualization tool | Flexible; wide skills available | Needs a data supply and design skill |
| Warehouse with a transformation layer | Strong control; joins across sources | Engineering effort; needs ownership |
| Spreadsheets and scripts | Quick to start; no licence | Fragile; depends on individuals; hard to audit |
| Open-source stack | Control; no licence cost | Upkeep effort; support depends on you |
| Hand-collected metrics | Works with no tooling | Slow; error-prone; hard to sustain |

The prose answer is to start with what you already have, add the thinnest connection that answers real questions, keep definitions and data portable, and move to heavier tools only when the lighter ones demonstrably limit decisions.

## Questions to discuss with your team

**1. Which numbers do we produce by hand each month, and what would it take to stop?**
List the manual reports and the hours they take. Find the source of each and whether it has an interface. The facilitator should ask which reports could simply be dropped. Agree one to automate and one to retire.

**2. If our current reporting tool vanished tomorrow, what would we lose?**
Name the definitions, history, and dashboards that exist only inside it. Check which of them are exportable. Agree where to keep a copy.

**3. Which data in our systems do we least trust, and why?**
Look at entry habits, defaults, and overwritten fields. Estimate how far each distortion affects the measures we publish. Agree which source fix would add the most trust for the least effort.

**4. What does the tool let people see that we would not want it to?**
Check individual-level views, activity logs, and rankings. Decide what to restrict or turn off, and write the rule down before anyone uses the feature.

**5. How long does it take us to add a new measure, and what slows us?**
Trace a recent request from approval to availability. Mark the waits. Agree what to remove, such as approvals, missing definitions, or manual cleaning.

**6. What is the full cost of this tool for one team for one year?**
Add licences, infrastructure, integration, training, and the time of the people who maintain it. Compare with the decisions it improved. Discuss what we would stop paying for.

## Four perspectives

### Product and delivery teams

Teams want data that comes from the work without extra entry, and views that answer their questions. They should help choose and test tools, own the definitions of their own measures, and refuse features that rank individuals. Their time is the scarcest input, and tooling that asks them to log work twice will be resisted.

### Service and operations teams

Operations teams run the sources and often the pipeline. They should treat the pipeline as a service with monitoring and tests, keep source data fields reliable, and flag changes in systems of record that will break connectors. They are the first to see when a number is wrong.

### Leadership and governance

Leaders fund the programme and set expectations. They should ask for total cost, not licence price, require portability and an exit, resist buying a platform to solve a definition problem, and insist on privacy and access rules. They should accept a modest start and judge it by the decisions it improves.

### Customers and users

Customers and users rarely see the tooling, and they live with its consequences: data about them is stored, combined, and analysed. They deserve clear rules on what is collected, how long it is kept, who sees it, and how it is protected. Where measures draw on their feedback, the tools should respect consent and anonymity.

## In practice: a service management example

A regional logistics company has a service management tool, a source control and deployment system, a monitoring platform, and a survey tool, and each produces its own reports. The head of service management wants one view of service health for 12 teams. A vendor offers an all-in-one analytics platform with a three-year contract. The figures below are illustrative.

The head of service management first writes the questions and the 14 measures that the teams and leaders agreed in the dashboard sessions. She inventories what exists: the service management tool can export incident and change data through its interface, the deployment system provides deployment timestamps, and the monitoring platform reports availability against objectives. She asks a small group of team representatives to test two options on three measures with real data: the vendor's platform and a combination of a general visualization tool with a small data store and thin connectors.

The trial turns up differences. The platform connected to all sources in two days, but it computed lead time as a mean and could not show a high percentile, it had a built-in "team productivity score" that could not be turned off, and exporting dashboard definitions produced a file that no other tool could read. The combination took 11 days to connect, but it showed medians and percentiles, kept definitions as plain text in a repository, and restricted individual-level fields at the data store. The group also discovers that 30 percent of change records were created after deployment, so lead time was wrong whatever tool read it. Fixing the entry habit at the source becomes the first piece of work.

The company chooses the combination. Source coverage rises from 3 of 8 needed sources to 7 of 8 over two quarters. Pipeline reliability starts at 71 percent of loads on time with passing checks, and reaches 96 percent after the team adds tests and failure alerts. Time to a new measure falls from a median of 31 days to 9. Manual effort on the monthly report falls from about 40 hours to 6. A director asks whether the vendor platform's productivity score could be added to give a single ranking of teams. The head of service management explains the analysis in topic 1.2, shows what happened when a similar score was used elsewhere in the company, and proposes the current balanced view. The decision is recorded, and the score feature is disabled in any tool that has one.

## Agile, AI, automation, and analytics

### Agile

Choose tools in small experiments with a real team and a real question, and keep the ability to change course. The caution is that a large platform decision made early locks in definitions before the team has learned what it needs.

### AI

Many analytics and service management tools now include AI features. Ask what the AI does, with what data, under what terms, how its output is checked, and how to turn it off, and measure the AI features like any other use (see topic 10.5, AI governance and risk metrics). The caution is that default-on AI features can change reports silently, so ask suppliers about each release.

### Automation

Prefer tools that let you collect data automatically through documented interfaces and keep your data portable. Measure the integrations on failures and time to a new measure. The caution is that proprietary connectors can make your data hard to take away, so test an export.

### Analytics

Judge tools by source coverage, reconciliation, and the time to answer a new question. The decision informed is which tool to adopt, keep, or leave. The caution is that demonstration data looks clean, so test with your own messy data.

## Sector lens

**Startup.** Use what the product and the existing tools already provide. A spreadsheet and the built-in reports of the tools you use can answer most early questions. Resist a data platform until the questions are stable and the manual effort is hurting. Keep metric definitions written down so that a later move is easy.

**Small business.** Few measures and few systems mean simple tooling. Built-in reports and a spreadsheet are often enough. The main risks are data kept only in one person's head and in tools with no export. Pick products you can leave, and write the definitions down.

**Enterprise.** Many systems, many teams, and many definitions argue for a governed data store, a catalogue of definitions, and layered views. Federated ownership works better than a central team that builds every report. Pay attention to lock-in, access control, privacy, and supplier assessment, and consider a small platform team that provides the pipeline as a service.

**Government and public sector.** Procurement rules, data sovereignty, and accessibility affect tool choices. Open standards and portability are valuable because contracts are long and administrations change. Plan for security assessments, records retention, and public disclosure rules, and check current guidance on hosting and procurement (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs include licences or subscriptions, infrastructure, integration and connector work, data cleaning, definition and catalogue work, training, support, and the recurring effort of keeping the pipeline healthy. Build options carry engineering costs that are easy to understate, and buy options carry fees that grow with scale and the cost of leaving.

The returns come from reporting effort saved, faster answers, fewer disputes about numbers, and better decisions from trusted data. Build the case from your own data: hours spent on manual reports now, the number of competing versions of one figure, the delay between a question and an answer, and costs of tools that overlap. Avoid quoting analyst figures about analytics returns without a traceable source and relevance to your context. A fair comparison counts the full cost of each option over three years, including exit (see topic 7.5, Service cost and unit economics, and topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Tool first, questions later.** The platform arrives, and no one knows what to ask of it. Write the measures first.
- **Buying to fix a definitions problem.** Disagreement about meaning persists in any tool. Settle the definitions.
- **Built-in individual scores.** They tempt and they distort. Disable them and set the policy first.
- **No exit.** History and definitions are trapped. Test export and keep a copy.
- **The one-person pipeline.** It stops when that person leaves. Document it, test it, and share ownership.
- **Double entry.** People log the same work twice, and quality of both falls. Take data from the systems of record.
- **Over-engineering early.** A data platform arrives before a single view has proved its worth. Start thin.
- **Ignoring data quality.** Clean charts on dirty data mislead more convincingly. Fix capture at the source.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Data supply | Manual collection; spreadsheets | Some automated feeds; individual scripts | Agreed sources feed a shared store through tested pipelines | Reliability, reconciliation, and freshness managed and visible | Federated pipelines with shared contracts across teams and suppliers; sources improved from feedback |
| Definitions and catalogue | In people's heads | Some documented | One catalogue of definitions with owners, versioned and reviewed | Catalogue drives dashboards; changes reviewed with users | Definitions co-owned across teams and suppliers; retired when they stop informing decisions |
| Choice and cost | Ad hoc purchases | Overlapping tools | Criteria written down; exit tested; full cost counted | Cost per team supported and manual effort managed | Tooling choices reviewed regularly with users and adapted as needs change |

## Checklist

- [ ] The agreed measures and their questions are written down before tools are compared.
- [ ] Existing tools and reports have been inventoried and tested first.
- [ ] Data quality at the main sources has been checked and the worst gaps fixed.
- [ ] Selection criteria are written and include distributions, access control, and export.
- [ ] A time-boxed trial with real data and real users was done before any commitment.
- [ ] Individual-level scoring and ranking features are disabled or restricted by policy.
- [ ] Definitions are kept in a portable catalogue outside any single tool.
- [ ] The pipeline has an owner, automated checks, monitoring, and a failure alert.
- [ ] An export of definitions and history has been tested.
- [ ] Full cost over three years, including exit, has been counted.

## AI prompts

**Write requirements from questions.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Plan a tool trial.**

```text
We are comparing [options] for our metrics programme. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Review a data pipeline.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behaviour. List your assumptions and what you could not
tell from the description.
```

**Compare full cost.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics programme. List the cost categories for each option, including
licences, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the data source and guardrail for each measure when writing requirements.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a tooling decision record carries definitions, data sources, and guardrails.

## Key takeaways

- Write the questions and measures first, and choose tools to serve them.
- Use the systems of record, fix data capture at the source, and test reconciliation.
- Keep definitions and data portable, and test the exit before you commit.
- Disable individual-level scoring and rankings, and set the policy before turning any feature on.
- Run the pipeline as a service with an owner, tests, and monitoring.
- Count the full cost over several years, and start with the thinnest path that answers real questions.

## References and further reading

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
