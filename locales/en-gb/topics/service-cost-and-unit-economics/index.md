# Service cost and unit economics

**Knowing what a service costs, and what it costs per unit of something users value, lets a team make honest choices about quality, speed, and spend, as long as the allocation rules are fair, visible, and never used to punish the people who run the service.**

## Overview and motivation

Every IT service costs money: people, cloud and hosting, licences, hardware, suppliers, and the share of shared platforms it uses. Leaders ask what a service costs, whether it is worth it, and what changes if demand doubles. Teams ask the same questions from the other side: what can we afford to do, and what are we giving up? Without numbers, these conversations turn into arguments about whose budget is whose.

[Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting) is the practice of measuring, recording, and analysing costs. For a service organisation the central tasks are to attribute costs to services, to express cost per unit of something meaningful, and to forecast how cost changes with volume. ITIL's service financial management practice covers the same ground, and the FinOps practice for cloud spending takes it further (see topic 7.6, FinOps and cloud cost metrics).

Agile and ITIL views of cost differ, and the difference is useful.

- **The project view** funds a temporary effort with a budget and a delivery date. Cost is what the project spent, and success is delivery on time and on budget. The project ends, the team disperses, and the service it created is handed to someone else.
- **The product or service view** funds a persistent team to build and run a service over its life. Cost is the stable cost of the team and its platforms, and the question is whether the value delivered justifies that spending. This fits the agile aims of continuous delivery and building around motivated people who know the service. It also fits ITIL's concern with the cost of a service throughout its lifecycle.

Cost measures can mislead as easily as they inform. Three problems recur.

- **Allocation is a choice.** Shared costs, such as networks, security, and platforms, must be spread across services by some rule, and different rules give different answers. [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation) should follow a [cost driver](https://en.wikipedia.org/wiki/Cost_driver), a factor that causes cost to change, such as users, requests, or storage. [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing) formalises this by tracing costs to the activities that consume resources.
- **Fixed and variable costs behave differently.** A [fixed cost](https://en.wikipedia.org/wiki/Fixed_cost) stays the same as volume changes within a range, and a [variable cost](https://en.wikipedia.org/wiki/Variable_cost) rises with volume. A service's [unit cost](https://en.wikipedia.org/wiki/Unit_cost) falls as volume grows when fixed costs dominate, a pattern related to [economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale). Looking at unit cost without knowing which costs are fixed leads to wrong forecasts.
- **Cost is not value.** The cheapest service is not the best one. Cost per ticket falls if you close tickets without solving problems. Cost measures need a quality or outcome companion, which the earlier parts of this book supply (see topic 6.5, Value realisation and business outcomes).

Accounting classifications also matter. [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure) buys assets that last, and operating expenses cover day-to-day running. Cloud and subscription services shift spending from the first kind to the second, which changes how budgets look without changing what the services cost. Finance colleagues own these rules, and the metrics here should be built with them.

The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies strongly to money. A cost target tends to produce cost cutting where it is easiest to hide the damage, such as maintenance, quality, and learning time. The measures below are therefore paired with indicators of service health and with a statement of the allocation rules (see topic 1.2, Goodhart's law and the psychology of metrics).

## Key principles

- **Make allocation rules explicit and tied to drivers.** People accept numbers they can follow.
- **Separate fixed from variable cost.** Forecasts depend on which is which.
- **Report unit cost with its quality companion.** Cheaper is only better if the service is still good.
- **Use ranges and trends, not false precision.** Allocation involves judgement.
- **Fund persistent teams around services where you can.** Stable teams learn and improve; temporary ones disband.
- **Share costs with the people who can change them.** Visibility without influence is just blame.
- **Never rank people or teams by cost.** Services differ, and so do their constraints.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cost per service | Fully loaded annual cost of a named service, using documented allocation rules | direct costs + allocated shared costs for the service in the period | currency per year | General ledger, cost centre data, cloud and licence bills, time or activity data | Service financial management; service catalogue management | Cost of a persistent product team and its platforms | Quarterly |
| Unit cost | Cost per unit of something users value, such as per active user, per transaction, or per resolved request | cost per service in the period / units delivered in the period | currency per unit | Cost per service and volume data | Service financial management; service level management | Cost to serve per outcome | Quarterly |
| Allocation coverage | Share of IT spend attributed to a named service or declared as shared overhead | spend attributed to services or declared overhead / total IT spend | percent | General ledger and allocation model | Service financial management | Visible cost of each team's work | Quarterly |
| Run, change, and improvement split | Share of spend or capacity going to running services, changing them, and improving them | spend or capacity in each category / total | percent | Ledger tags, work tracker work types | Service financial management; continual improvement | Capacity allocation by work type | Quarterly |
| Forecast variance | Difference between forecast and actual cost, by service | (actual minus forecast) / forecast | percent | Forecast log and ledger | Service financial management | Forecast accuracy | Monthly |
| Showback dispute rate | Share of showback or chargeback line items that service owners challenged and that were changed | line items changed after challenge / line items issued | percent | Showback system and dispute log | Service financial management | Retrospective on shared costs | Quarterly |
| Persistent-team funding share | Share of delivery and operations spend funded as stable team capacity for a service | spend on persistent service teams / total delivery and operations spend | percent | Ledger and organisation chart | Service financial management; organisational change | Teams built around services and motivated people | Annual |

Define the period, currency, and cost types for every measure, and record the allocation rules in the metric register: which costs are direct, which are shared, and which driver spreads each shared cost. Unit cost needs a unit that users and the team both accept, and the unit definition stays fixed over the trend. Forecast variance compares with the forecast as it stood at the start of the period, not a revised one.

## Recommendations

### Build the cost picture

**1. Start with the ledger and the service list.** Take total IT spend from the ledger, list the services from the catalogue, and decide what share of each cost belongs to which service. Begin with the easy direct costs: the team that runs the service, its licences, its hosting. Shared costs come second. A rough first picture, shared with the people involved, beats a precise one built in private.

**2. Choose cost drivers people can follow.** For each shared cost, choose a driver tied to what actually causes it: users for a collaboration platform, storage for a data platform, requests for a gateway, devices for endpoint management. Explain the rule in one sentence. Drivers that nobody can check invite arguments, and drivers that nobody can influence make showback pointless.

**3. Separate fixed and variable cost.** For each service, mark which costs move with volume and which do not. A service that is mostly fixed cost has a unit cost that falls with growth, and one that is mostly variable does not. This split is the basis for any forecast and for any conversation about scaling.

**4. Show ranges where allocation involves judgement.** If two reasonable allocation rules give 20 percent different results, show both or show the range. A single precise number from an arbitrary rule starts fights that the data cannot settle.

### Measure per unit, with quality alongside

**5. Choose a unit that reflects value.** Cost per active user, per completed transaction, per resolved request, or per deployment can all be useful. Pick the unit that connects to what the service is for, agree it with the service owner, and keep it stable. Cost per ticket is a risky unit, because it falls when tickets are closed early and rises when you prevent tickets with good self-service.

**6. Pair every unit cost with a quality measure.** Show unit cost beside availability, satisfaction, or reopen rate. A unit cost that falls while quality falls is a transfer of cost to users. A unit cost that holds steady while quality rises is a gain. Present them together or not at all (see topic 6.1, Customer satisfaction metrics).

**7. Track the trend, not just the level.** Unit cost over time, with notes on what changed, tells a story that one quarter cannot. Mark changes in allocation rules or units on the chart so that trends are not misread. Compare a service with its own history before comparing it with others.

### Share cost with the people who can change it

**8. Use showback before chargeback.** Showback reports costs to service owners without billing them, and chargeback transfers the cost to their budgets. Start with showback, which builds understanding and trust, and move to chargeback only where it changes decisions and the rules are accepted. Both depend on rules that owners help shape.

**9. Let owners challenge the numbers.** A dispute process is a sign of health, as long as it is quick and its outcomes are logged. Review the dispute rate: a high rate shows rules that nobody trusts, and zero may show that nobody reads the reports. Fix the rule, not just the line item.

**10. Review cost with the whole service team.** Include engineers and operators as well as managers in a regular cost review. People who run a service often know where waste hides: idle environments, over-sized resources, duplicated tools. Treat their findings as improvements to share and not as criticisms.

### Fund for stability and learning

**11. Prefer persistent teams funded around services.** Where possible, fund a stable team to own a service over time, instead of assembling a project team and disbanding it. Persistent teams accumulate knowledge, build better relationships with users, and carry the cost of poor decisions. This reflects the agile aim of building around motivated individuals and the ITIL concern for the service lifecycle. The change in funding is a significant organisational decision, so involve finance and leadership early. Mik Kersten's book *Project to Product* discusses this shift.

**12. Reserve capacity for improvement.** Costs that reduce future costs, such as automation, reliability fixes, and removing duplicated tools, need protected funding or they lose to feature work every time. Track the improvement share in the run, change, and improvement split, and look at the returns it produces (see topic 4.6, Technical debt and known errors).

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Cost per service | Shifting costs to other services through the allocation rule; leaving unfavourable costs unallocated | Allocation coverage; rules published and reviewed by owners; compare totals with the ledger |
| Unit cost | Raising the denominator with low-value units; cutting quality to cut cost; changing the unit | Quality companion measure; fixed unit definition; outcome checks |
| Allocation coverage | Declaring large amounts as shared overhead to avoid attribution | Overhead share reported; review of what is declared overhead and why |
| Run, change, and improvement split | Relabelling run work as improvement or change; tagging at the end of the period | Tag at intake; sample items for type; compare with incident and request data |
| Forecast variance | Padding forecasts; revising the forecast late in the period | Forecast logged at the start; compare forecast ranges with actuals over time |
| Showback dispute rate | Discouraging disputes; changing line items without a rule change | Review disputes and outcomes; check whether rules changed after repeated disputes |
| Persistent-team funding share | Renaming projects as persistent teams without changing funding or ownership | Check team stability and ownership over time; service health measures |

A healthy reading is a cost picture that service owners recognise, unit costs that move with explained causes while quality holds, forecast errors that shrink, and improvement work that appears in the numbers.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Project funding | Clear scope and end | Teams disband; knowledge lost; service handed over |
| Persistent team funding | Learning, ownership, stable cost | Needs trust and a mature planning process; scope can drift |
| Showback | Builds understanding with little friction | Can be ignored if nobody is accountable |
| Chargeback | Creates accountability and price signals | Disputes; incentives to avoid shared services |
| Simple allocation rules | Easy to explain | May be crude |
| Activity-based allocation | More accurate | Costly to maintain; false precision |
| Cost per unit | Links cost to value | Sensitive to unit choice and volume |
| Total cost only | Simple | Hides trends and efficiency |

The prose answer is to start with simple rules and showback, add precision where decisions depend on it, and move toward persistent team funding as trust and planning maturity grow. Keep a quality measure beside every cost measure.

## Questions to discuss with your team

**1. What does our main service cost per year, and who would agree with the number?**
Ask finance and the service owner to produce independent estimates. Compare them. The facilitator should note where they differ and why: allocation rules, scope, or missing costs. Agree a single documented rule for the next quarter.

**2. What is the unit our users would recognise, and what does it cost?**
List possible units for the service and choose one. Calculate its cost and discuss what would make it rise or fall. Ask what the unit hides. Add a quality measure to sit beside it.

**3. Which of our shared costs are spread by a rule nobody can explain?**
List the shared costs and their drivers. For each, ask whether the driver relates to what causes the cost. Replace one that does not. Discuss who can influence the driver, since cost data without influence is only blame.

**4. How much of our capacity goes to running, changing, and improving the service?**
Review a quarter of finished work by type, as in the planning topic (see topic 2.5, Delivery forecasting and planning metrics). Compare with what leaders think. Decide what the improvement share should be, and what would protect it.

**5. What would change if we funded a persistent team for this service?**
Imagine the funding, the ownership, and the measures. Ask what risks and benefits finance, the team, and users would see. Identify one step toward it, such as a stable team list and a shared service budget view.

**6. When did a cost number last cause an argument, and what did we learn?**
Recall a showback or budget dispute. Was it about the number or about the rule? Discuss how a clearer rule or a better dispute process would have helped.

## Four perspectives

### Product and delivery teams

Delivery teams see cost as the price of their time, platforms, and tools. They should know their service's cost and unit cost, spot waste early, and use the numbers to argue for improvement work and for stable funding. They should avoid optimising the number by cutting quality, and they should challenge allocation rules they cannot follow.

### Service and operations teams

Operations teams carry the cost of running services and often hold the shared platforms. They should publish how shared costs are driven, answer showback questions, and share cost-saving ideas from experience. They should expect pressure to cut run costs, and they should show the quality and risk side of any cut.

### Leadership and governance

Leaders ask about cost and value and set the funding model. They should ask for unit costs with quality companions, support persistent team funding where it fits, and avoid ranking teams by cost. Governance should expect allocation rules to be documented, reviewed, and applied consistently, and should look at the improvement share.

### Customers and users

Users who pay through chargeback want to understand the bill and to influence it. Others see cost in the quality and range of services offered. Clear unit costs and a voice in the trade-off between price and service make the relationship healthier, and their feedback is part of the quality companion for every unit cost.

## In practice: a service management example

A mid-sized university's central IT department provides about 25 services to 18,000 students and staff. The numbers below are illustrative.

The finance office wants to know why IT's budget grew faster than enrolment. The IT finance partner builds a cost picture with the service owners. Of total IT spend, 72 percent is direct to named services, 18 percent is shared platforms (network, identity, security tooling) that are allocated by drivers, and 10 percent is declared overhead. Allocation coverage is therefore 90 percent. The learning platform costs the equivalent of US$41 per active user per year, up from US$36, while satisfaction and availability are steady. The service desk shows a cost per resolved request that has fallen 12 percent over two years. The service owner points out that the fall coincided with a rise in reopened tickets from 4 to 9 percent, and the quality companion shows the saving is partly a transfer of effort to users.

The team makes four changes. It publishes the allocation rules on one page, with drivers for each shared cost and the date of the last review. It replaces cost per request with cost per resolved request on first contact, shown beside the reopen rate. It moves the learning platform and the identity service to funding as persistent teams with a stable roster. It sets aside 15 percent of capacity for improvement work for each of the two largest services, and tracks what the work returns.

A year later, the learning platform's unit cost is US$38 as usage grew, the reopen rate has fallen to 5 percent, and the forecast variance for the two persistent-team services is within 4 percent, compared with 11 percent for project-funded work. The showback dispute rate has fallen from 22 percent to 8 percent after two rules were changed. The finance office asks for an annual target of 5 percent unit cost reduction for every service. The IT finance partner proposes targets only where a service has a clear efficiency lever, shown with the quality companion, and explains that a blanket target would reward cutting maintenance. The decision is recorded, with a review of the rules each year.

## Agile, AI, automation, and analytics

### Agile

Fund persistent teams and review cost alongside outcomes with stakeholders regularly, so cost discussions are about more than cutting. The caution is that allocation rules used to punish teams lead to gaming of tags and splits.

### AI

AI workloads add variable cost, such as model usage and data processing, and raise the question of cost per outcome. Track cost per unit of value for AI-assisted paths and pair it with quality. The caution is that a cheaper AI path that lowers quality only moves cost to rework.

### Automation

Automate cost collection and tagging checks, and measure allocation coverage. The caution is that automatic allocation by a rule that nobody reviews can distort the picture.

### Analytics

Report unit cost with ranges and state allocation rules. The decision informed is where to change quality, speed, or spend. The caution is that unit cost depends on what is chosen as the unit, so say why.

## Sector lens

**Startup.** Cost is mostly cloud, tools, and salaries. Track the main cloud and tool spend by service from the beginning, tag resources, and compute cost per active customer early. Resist elaborate allocation, since the team is small.

**Small business.** A handful of vendors and one or two people make up most costs. Keep a simple annual picture, cost per user for the main tools, and a view of what is paid for and unused. Ask suppliers for itemised bills.

**Enterprise.** Scale brings shared platforms and many business units. Use a documented allocation model with drivers, a dispute process, and a finance partner embedded in IT. Beware of chargeback that discourages use of shared services that benefit everyone.

**Government and public sector.** Budgets are annual and appropriated, with rules on capital and operating spending, and cost transparency may be required. Align service costing with public finance rules, document allocation methods for audit, and consider multi-year funding for persistent service teams where law allows. Report unit costs with outcome measures (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are the effort to build the allocation model, the time of finance and service owners to agree rules, and the routine work of monthly reporting and dispute handling. Most organisations already have the ledger and cloud billing data. A small model in a spreadsheet can start the work, and tooling comes later.

The returns are better decisions and fewer arguments. Teams that see their costs find waste: idle environments, unused licences, and duplicate tools. Leaders can compare options knowing the cost drivers, plan growth with fixed and variable costs separated, and fund improvement with evidence of its return. Build the case from your own numbers: the waste found in the first review, the time spent in budget disputes, and the forecast variance before and after. Avoid external claims about average IT spend as a percentage of revenue unless you can trace the source and method, since definitions vary widely. The final topic of this part gathers the financial case in one place (see topic 7.7, Return on investment and business case).

## Anti-patterns and pitfalls

- **Spreading shared cost evenly.** It punishes small users and hides real drivers. Use drivers that reflect consumption.
- **Cost per ticket as a target.** It rewards closing tickets early. Use cost per resolved request with a quality companion.
- **Precision without trust.** A beautiful model that owners do not believe is worthless. Build rules with them.
- **Chargeback first.** It starts fights before there is understanding. Begin with showback.
- **Cutting what is hard to see.** Maintenance, learning, and reliability work are cut first and cost more later. Protect improvement capacity.
- **Comparing teams by cost.** Services differ in constraints and risk. Compare each with its own history.
- **Changing the rules and the trend at once.** Mark rule changes on charts and restate history where possible.
- **Treating cost as owned by finance.** The people who run the service know where cost comes from. Include them.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardise | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Cost picture | Budget by department only | Cost per service for a few services, rough allocation | Documented allocation rules with drivers; coverage tracked | Unit costs with quality companions; fixed and variable split | Costs shared transparently with business partners; drivers influenced jointly |
| Using cost | Cost cuts by percentage | Showback to some owners | Showback for all services; dispute process | Forecast variance and unit cost trends drive decisions | Cost, quality, and value traded off openly across the portfolio |
| Funding model | Annual project budgets | Some stable teams | Persistent teams for key services | Funding follows service outcomes and learning | Funding flexible across services with shared platform investment |

## Checklist

- [ ] Total IT spend is attributed to services or declared overhead, with coverage tracked.
- [ ] Allocation rules and drivers are written down and reviewed with service owners.
- [ ] Fixed and variable costs are separated for each major service.
- [ ] Unit costs use agreed, stable units and sit beside quality measures.
- [ ] Forecasts are logged at the start of the period and compared with actuals.
- [ ] Showback is available to every service owner, with a dispute process.
- [ ] Run, change, and improvement spend or capacity is reported.
- [ ] A share of capacity is protected for improvement.
- [ ] Rule and unit changes are marked on trend charts.
- [ ] No team or person is ranked by cost.

## AI prompts

**Propose cost drivers for shared services.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Design a unit cost and its quality companion.**

```text
For the service [name] in [type of organisation], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Prepare a showback review.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Plan a move to persistent team funding.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organisations. List your
assumptions and decisions that need leadership input.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for a cost or unit economics metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a cost metric entry states its allocation rule, gaming vector, and quality companion.

## Key takeaways

- Attribute cost to services with drivers people can follow, and show the rules.
- Separate fixed from variable cost, and pair every unit cost with a quality measure.
- Start with showback and a dispute process, and add chargeback only if it changes decisions.
- Fund persistent teams around services where you can, and protect improvement capacity.
- Report ranges and trends, and mark changes of rule on the charts.
- Never rank people or teams by cost.

## References and further reading

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
