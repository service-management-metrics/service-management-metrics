# Service adoption and catalog metrics

**A service that nobody chooses, finds, or completes a request for has not delivered value, so measure how people discover and use what you offer, and keep the catalog as honest as a backlog.**

## Overview and motivation

Teams invest in services and then discover that people are not using them. The new self-service portal is bypassed by email. A carefully designed catalog item for software access gets two requests a year while a hundred a month arrive by chat. A monitoring service launches and half the teams it was built for never connect to it. Adoption is the missing half of delivery: a service is only valuable when its intended users start, continue, and finish using it.

The **service catalog** (ITIL's own spelling is "service catalog") is the list of services and requestable items an organization offers, described in terms its users can understand. A [service catalog](https://en.wikipedia.org/wiki/Service_catalog) usually has a customer-facing view, which lists what a user can ask for and how, and a technical view, which records how each service is built and supported. Agile teams will recognize the shape: a catalog is a kind of [product backlog](https://en.wikipedia.org/wiki/Product_backlog) in reverse. A backlog lists what you intend to build. A catalog lists what you already offer, and both need the same care: ordering, pruning, clear wording, and a steady stream of feedback from users (see topic 2.6, Backlog and refinement metrics).

**Adoption** is the extent to which the intended users take up and keep using a service. The study of how new practices spread has a long history; the [diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) theory describes adoption as a process over time, with early adopters, a majority, and laggards. For an internal service, the practical lesson is that adoption rarely happens because of an announcement. It happens when the service is easy to find, easy to use, and clearly better than the workaround.

Adoption measures are tempting to turn into targets. Mandating a channel makes a usage number look good while users resent it and build workarounds. Pushing every request into a catalog item makes catalog coverage rise while completion falls. The guardrail from [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) applies, so each measure here is paired with a check that real value, not mere use, is rising (see topic 1.2, Goodhart's law and the psychology of metrics).

This topic covers four things: whether people use a service (adoption), whether they can find and finish what they came for (catalog and request flow), whether the catalog is current and honest (hygiene), and whether use is concentrated in a few items (shape). It connects to request fulfillment (see topic 3.5, Service request fulfillment metrics) and self-service (see topic 3.7, Self-service and automation metrics), which cover what happens after the request is made.

## Key principles

- **Adoption is an outcome, so ask what the user was trying to do.** Count completed goals, not page views.
- **Measure the funnel, not just the total.** Where people drop out tells you what to fix.
- **Compare with the alternative.** A service competes with email, chat, a phone call, and a workaround.
- **Keep the catalog as small and current as it can be.** Stale items teach users to stop looking.
- **Segment before you conclude.** Averages across all users hide the groups for whom the service does not work.
- **Never force use to raise a number.** Mandates produce numbers, not adoption.
- **Treat low use as a question for the owner and the users.** It may mean the service is not needed.

## Metric definitions

| Metric | Definition | Formula | Unit | Data source | ITIL practice | Agile counterpart | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Adoption rate | Share of eligible users who used a service at least once in the period | distinct eligible users with at least one completed use / eligible users | percent | Service usage logs joined to the user directory | Service catalog management; service level management | Feature adoption; product outcome review | Monthly |
| Active use rate | Share of adopters still using the service over time | users active in the period who also used the service in the prior period / users active in the prior period | percent | Usage logs; cohort tables | Continual improvement | Retention in product analytics | Monthly |
| Catalog coverage | Share of requests that arrive through the catalog instead of ad hoc channels | requests created via catalog / all requests, from all channels | percent | Request management tool; mailbox and chat tags | Service request management; service catalog management | Backlog items that carry a written definition | Monthly |
| Request abandonment rate | Share of started requests that the user does not submit | requests started but not submitted within 24 hours / requests started | percent | Portal analytics | Service request management | Task abandonment in usability tests | Monthly |
| Search success rate | Share of catalog searches that end in a request or a viewed answer | searches followed by a request or knowledge view within the session / searches | percent | Portal search logs | Knowledge management; service catalog management | Findability in user research | Monthly |
| Stale item share | Share of catalog items past their review date or with no use in a set period | items overdue for review or with zero requests in 12 months / items in the catalog | percent | Catalog register | Service catalog management | Backlog age and pruning | Quarterly |
| Request concentration | Share of requests accounted for by the most requested items | requests for the top five items / all catalog requests | percent | Request management tool | Service request management | Pareto of work by type | Quarterly |

State the user base for each measure. "Eligible users" must be defined before you measure, for example staff in the roles who could use a service, and the list recorded in the metric register. Count a use only when it ends in a completed outcome, such as a delivered access grant, and not when a page loads. Exclude test accounts and automated traffic.

## Recommendations

### Know your services and your users

**1. Define the intended audience for each service.** Before measuring adoption, write down who the service is for, and why they would use it instead of the alternative. A new analytics service built for finance staff is not "low adoption" if only finance staff were meant to use it. Without a defined audience, adoption rate is a number about nobody.

**2. Record the alternative.** For each major service, list what people do now when they do not use it: ask a colleague, send an email, buy a tool, run a spreadsheet. Treat the alternative as a competitor in the sense that matters: it is where your users go when your service is harder. Compare the effort of both paths during design and review.

**3. Describe items in user language.** Titles like "Software access, standard" and "Laptop replacement, damaged" are easier to find than internal names. Test titles by asking a few users to find an item from a short scenario. Wording problems show up quickly in the search logs.

**4. Keep an owner for every item.** Each catalog item has a named owner, a review date, a description of the audience, and the expected volume. Items without owners drift. If no one can say who uses an item and why, it is a candidate for removal.

### Measure the journey

**5. Instrument the funnel.** For each important service, record the steps from discovery to completed outcome: find the item, start the request, fill the form, submit, receive the result. A [conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel) view shows where users leave. Fix the largest drop first. Check that the fixes make the form shorter or clearer, not just the data prettier.

**6. Use cohorts to see retention.** A [cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis) groups users by when they first used the service and follows each group. It separates a service that keeps its users from one that attracts them once and loses them. Use it for services that should be used repeatedly, such as the service desk portal or a deployment pipeline.

**7. Read search logs for what people cannot find.** Searches with no result, or searches repeated with different words, point to gaps in naming, in content, or in the catalog itself. Review the top zero-result searches monthly and decide for each: rename an item, add a synonym, write an article, or create a new item. [Web analytics](https://en.wikipedia.org/wiki/Web_analytics) tools can supply this, and so can the portal's own logs.

**8. Segment by group.** Break adoption and abandonment down by role, location, device, and accessibility needs where you have lawful and ethical access to that information. The aggregate may look healthy while night-shift staff or users on mobile devices fail at twice the rate. Suppress small groups to protect people, and combine with the experience measures in the previous topics (see topic 6.2, Experience level agreements).

### Keep the catalog honest

**9. Prune on a schedule.** Review the catalog every quarter. Remove or merge items with no use, retire items for discontinued services, and fix items with high abandonment. A smaller, accurate catalog serves users better than a complete, stale one. Treat removal as normal and record the reason.

**10. Look at the shape of demand.** In most catalogs a few items account for most of the requests, a pattern often described through the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle). Use it to focus design effort on the frequent items and to automate the ones that are routine (see topic 3.7, Self-service and automation metrics). Do not drop the long tail without a look, since rare items can matter a great deal to the people who need them.

**11. Do not force adoption.** If a service is needed, users will come once it is easy. Where the organization requires a channel for control or audit reasons, say so, and be open that the number reflects a rule, not preference. Avoid [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern), such as hiding the phone number or making the alternative harder, since they raise use and lower trust.

**12. Close the loop with owners and users.** Share the funnel, the search gaps, and the stale list with item owners monthly. Ask users, in the survey and in reviews, why they use or avoid a service (see topic 6.1, Customer satisfaction metrics). Record what you changed in the register and tell users it happened.

## Gaming vectors and guardrails

| Metric | How it gets gamed | Paired guardrail metric or practice |
| --- | --- | --- |
| Adoption rate | Mandating use; counting logins or page views as use; narrowing "eligible users" to those who already use it | Completed-outcome definition; compare with satisfaction and effort ratings; publish the eligible-user rule |
| Active use rate | Auto-enrolling users so they appear active; sending notifications that count as activity | Count only user-initiated completed actions; sample interviews with lapsed users |
| Catalog coverage | Forcing every request into a generic catalog item; closing email requests with "please use the portal" | Request abandonment rate and satisfaction; count how many requests are re-raised by another channel |
| Request abandonment rate | Removing form fields that are needed, which shifts work to fulfillment; counting abandoned requests only after a long window | Rework and clarification rate at fulfillment (see topic 3.5, Service request fulfillment metrics) |
| Search success rate | Counting any click as success; adding irrelevant articles that match every query | Check that the result was used (request made, article rated helpful); read zero-result searches |
| Stale item share | Marking items as reviewed without reading them; resetting review dates in bulk | Sample reviewed items for accuracy; show last real change date |
| Request concentration | Splitting popular items into many; merging unrelated items to hide long-tail demand | Fixed item taxonomy with change log; look at the tail by category |

A healthy reading is a catalog where the most used items work well and are getting easier, where users choose the service because it is better than the alternative, and where retiring an item is routine.

## Trade-offs: pros and cons

| Approach | Strength | Weakness |
| --- | --- | --- |
| Mandated channel | Predictable volume, easy to audit | Resentment, workarounds, inflated numbers |
| Voluntary adoption | Honest signal of value | Slower; some services may never be adopted |
| Large catalog | Complete, covers rare needs | Hard to search; becomes stale |
| Small catalog | Easy to find and maintain | Rare needs fall outside; users resort to email |
| Funnel metrics | Pinpoint where users drop out | Need instrumentation; can encourage optimizing the form at the expense of the outcome |
| Survey on why | Explains behavior | Biased by who answers; hard to scale |

The prose answer is to prefer voluntary adoption backed by a clear quality advantage, and to use mandates only where control or compliance require them, with the number labeled accordingly. Keep the catalog small enough to maintain, and put the tail in a searchable knowledge base, not in a hundred half-used items.

## Questions to discuss with your team

**1. Who is each of our main services for, and how would we know they are using it?**
List the five services your team spends most time on and write the intended audience for each. Then ask how adoption could be measured for them. The facilitator should look for services where nobody can name the audience, since those are likely to have no adoption plan.

**2. What do people do when they do not use our service, and why?**
For one low-adoption service, interview or survey a few users who avoid it. The alternative is usually revealing: it may be faster, more familiar, or more flexible. Decide whether to improve the service, change the alternative, or accept that the service is not needed.

**3. Where do users drop out of our most requested item?**
Show the funnel for the top item, from first view to submission. Ask the team to guess where the largest drop is, then compare. Agree one change to test, and say how you will check that it helped without moving the problem elsewhere.

**4. What would we remove from the catalog if we dared?**
Print the list of items with no requests in a year. Ask what would happen if each disappeared. The conversation often finds that an item exists because someone once asked for it. Agree a date to remove or merge the first five, and a note to users.

**5. Where are we nudging or forcing users, and is it worth the cost?**
List every place where a rule or design pushes users into a channel. Ask which are genuinely needed and which are habit. The facilitator should explore how users experience each one, and whether the resulting numbers mean what leaders think they mean.

**6. What are people searching for that we do not have?**
Review the top zero-result searches. For each, decide whether to add an item, write an article, or explain that the service does not exist. Ask who owns this review and how often it will happen.

## Four perspectives

### Product and delivery teams

Delivery teams build services and features that need adoption to matter. They should define the audience at the start, build usage measures into the service, and review the funnel after launch. Adoption data is feedback on the work, and it belongs in refinement and review. Teams should avoid declaring a release done when it ships. Done means the intended users are getting the benefit.

### Service and operations teams

Operations teams run the catalog and see the requests that arrive by every channel. They should keep the catalog current, tag requests that bypass it, and ask why. They should not close a request by redirecting it, since that hides the signal. Search gaps and abandonment are their best source of improvements to the portal.

### Leadership and governance

Leaders decide whether adoption is a conversation or a quota. They should ask what the service is for, who it helps, and why people choose it. They should avoid setting adoption targets for individual teams, support the retirement of unused services, and expect to see adoption alongside satisfaction and effort. Where a mandate is justified, leaders should explain it to users.

### Customers and users

Users want to get what they need with little effort. They notice when a portal is hard to search, when forms ask for things the organization already knows, and when the old way is quicker. Their behavior, and what they say, is the most honest adoption signal. They should be asked why they avoid a service, and told what changed as a result.

## In practice: a service management example

A national transport agency's IT department runs a service desk, a self-service portal with a catalog of about 140 items, and several product teams. The numbers below are illustrative.

The portal launched a year ago, and leadership set a goal of 80 percent of requests through it. The monthly report shows 78 percent coverage, and the head of service management is pleased until she reads the comments from the user survey. Staff in regional offices say the portal is slow and the forms are long. She asks the catalog manager to look at the funnel and the search logs.

The funnel for "New starter equipment" shows 1,100 starts a quarter and 640 submissions, an abandonment rate of 42 percent. The form has 23 fields. The search log shows the term "laptop" returning eight items, and the term "VPN" returning none, though it is the most searched term. Of 140 catalog items, 38 had no request in 12 months and 21 are past their review date. The top five items account for 61 percent of requests, and a further 15 percent of requests arrive by email and are logged by hand.

The team makes four changes. It cuts the new starter form to nine fields by using data the HR system already holds. It adds a VPN article and an item with synonyms. It merges the eight laptop items into two. And it retires 19 of the unused items with a note to owners. It also changes how the monthly report is read: coverage is shown with abandonment rate and the survey question "how easy was it to get what you needed?" Three months later, abandonment of the new starter item falls to 24 percent, the portal's coverage is 74 percent, and the effort rating from regional offices rises. The director asks why coverage fell. The head of service management explains that email requests were previously being force-closed, and that the lower number is more honest and the experience is better. The decision log records that the target is replaced by a direction: reduce abandonment and raise the effort rating, with coverage reviewed but not targeted.

## Agile, AI, automation, and analytics

### Agile

Treat the catalog as a backlog that is refined with its users, and remove items nobody uses. The caution is that a catalog item count target adds clutter.

### AI

AI search and assistants can change how people find services, which moves adoption and abandonment figures. Pair search success with abandonment rate and with the share of AI suggestions that were accepted and completed. The caution is that a model may recommend a service that the person cannot request, so check eligibility rules.

### Automation

Capture search, view, and request events automatically, and flag stale catalog items for a human decision. Measure automation in fulfillment on its failure rate. The caution is that automated clean-up that removes items can hide services people use rarely but need.

### Analytics

Show adoption and abandonment by catalog item with counts, and the concentration of requests. The decision informed is which items to redesign or retire. The caution is that low-volume items have noisy rates.

## Sector lens

**Startup.** There is often no catalog. A simple page of "how to get X" and a shared channel is enough. Watch what people ask for and turn the top five requests into short guides. Measure adoption of internal tools by asking users, and skip formal funnels.

**Small business.** Few people provide IT, and requests arrive by every channel. A modest catalog of 10 to 20 items covers most needs. Do not force users into a portal that costs more to maintain than the requests it handles. Review the list twice a year.

**Enterprise.** Scale gives you a catalog large enough to need governance: owners, review dates, and a taxonomy. Segment adoption by business unit and region, and avoid enterprise-wide mandates that ignore local needs. Watch for suppliers whose catalog items are counted but not used.

**Government and public sector.** Services reach the public as well as staff, with duties on accessibility, language, and equal access. Include assisted channels (phone, in person) in the measures so that digital adoption does not hide exclusion. Where legal or policy rules require a channel, state that in reports (see topic 8.5, Regulated and government reporting).

## Business case: motivations, ROI, and TCO

The costs are modest. Usage logs and request data usually exist already. Funnel and search analysis need access to portal analytics, which most platforms provide. The main time cost is the quarterly catalog review and a monthly look at search gaps and drop-offs, a few hours each. Fixing forms and merging items cost design and configuration time.

The return comes from services that are used, requests that finish, and less waste in fulfillment. A shorter form that cuts abandonment reduces repeat contacts and manual handling. Pruning unused items reduces maintenance. Build the case from your own numbers: abandonment rate, manual handling time per emailed request, and the cost to maintain an unused item, before and after changes. Avoid published claims about portal ROI that you cannot trace, since they depend on organization and method.

## Anti-patterns and pitfalls

- **Counting launches as adoption.** A service is adopted when intended users complete outcomes with it. Measure the use, not the announcement.
- **Mandating a channel to raise a number.** Users will work around it. Improve the service and let the number follow.
- **Adding items and never removing any.** The catalog becomes unsearchable. Prune every quarter.
- **Looking only at totals.** Segment by group and look at the funnel.
- **Closing emailed requests with a redirect.** It hides demand and annoys users. Handle the request and fix the route.
- **Using page views as use.** Count completed outcomes.
- **Treating low use as failure of users.** Ask whether the service is needed and easy to use.
- **Letting item owners lapse.** Assign owners and review dates for every item.

## Maturity model

| Dimension | 1 Initiate | 2 Develop | 3 Standardize | 4 Manage | 5 Orchestrate |
| --- | --- | --- | --- | --- | --- |
| Catalog design | List grown by request | Catalog exists, wording inconsistent | User-language items with owners and review dates | Quarterly pruning; taxonomy managed | Catalog shared across teams and suppliers; items co-designed with users |
| Adoption measurement | Anecdote | Request counts by item | Adoption defined by eligible users and completed outcomes | Funnels, cohorts, and segments reviewed monthly | Adoption linked to experience and outcomes across services |
| Improvement | Ad hoc fixes | Fixes after complaints | Search gaps and drop-offs reviewed monthly | Fixes prioritized and tracked on a backlog | Improvement coordinated with users, with retired services reported openly |

## Checklist

- [ ] Each major service has a written intended audience and an alternative path.
- [ ] Adoption is defined as completed outcomes by eligible users.
- [ ] Catalog items have owners, descriptions in user language, and review dates.
- [ ] The funnel is instrumented for the top requested items.
- [ ] Zero-result searches are reviewed monthly.
- [ ] Adoption and abandonment are segmented by group, with small groups suppressed.
- [ ] Requests arriving outside the catalog are tagged and counted.
- [ ] The catalog is pruned each quarter, with reasons recorded.
- [ ] Adoption is shown beside satisfaction or effort measures.
- [ ] No adoption target is set for an individual team or person.

## AI prompts

**Analyze a request funnel.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfillment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Review search logs for catalog gaps.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Plan a catalog pruning review.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Draft an adoption definition for a service.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## AI skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use to find the paired guardrail for an adoption or catalog metric.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use to check that a new catalog metric entry has its gaming vector and guardrail.

## Key takeaways

- Adoption means intended users complete outcomes with a service, so define the audience and count completions.
- Measure the funnel, the search gaps, and the retention of users, and segment by group.
- Compare the service with the alternative users have today.
- Keep the catalog small, owned, and pruned every quarter.
- Do not force use to raise a number, and pair adoption with satisfaction and effort.
- Treat low use as a question about need and ease, not as user failure.

## References and further reading

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
