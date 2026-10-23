# Introduction to Part 1: Foundations of Measurement

**Measurement helps a team that builds and runs services only when it is chosen for a purpose, owned by someone, drawn from trustworthy data, read with care, and kept from bending the work it describes.**

Teams that practice continuous delivery and teams that practice IT service management (ITSM) both produce a steady stream of numbers: tickets closed, stories completed, deployments made, incidents resolved. Having numbers is easy. Having numbers that help people decide something is harder, and that gap is where most metrics programmes struggle. This part gives the shared groundwork that every later part relies on, before any individual metric is defined. It also adds a lens the book carries throughout: how ITIL 5, AI, automation, and analytics change what a service organization measures.

The groundwork covers seven questions in turn. Why measure at all, and what does it cost to measure nothing or the wrong things? How does a measure turn into a target and then stop telling the truth? What is worth measuring in the first place? Who defines, owns, and retires each metric? Where does the data come from, and how far can it be trusted? How should the numbers be read, given that ticket and flow data are skewed and often sparse? One topic shows how established frameworks help organize the answers, and a final topic asks what ITIL 5, as its owner describes it, means for measurement, separating what can be verified from what cannot.

Read this part first if you are new to the book, and return to it whenever a later metric seems to be misbehaving. Most metric failures in later parts trace back to one of the ideas introduced here. Metrics in this book describe teams, services, and systems. They are never used to rank individuals.

## Topics in this part

- **1.1 Why measure service management**: why teams that build and run services need numbers, what agile and ITIL each contribute to measurement, and the cost of measuring nothing or the wrong things.
- **1.2 Goodhart's law and the psychology of metrics**: the guardrail behind every other topic, covering how a measure turns into a target, how gaming happens in ticket and delivery data, and the habits that prevent it.
- **1.3 Outcomes over output: choosing what to measure**: value, outcomes, outputs, and activity, leading and lagging indicators, and ITIL's value co-creation as the test of a good metric.
- **1.4 Metrics governance and ownership**: metric owners, definitions, review cadence, retirement, and who may see what.
- **1.5 Data sources and instrumentation**: ITSM tools, issue trackers, version control, continuous integration and delivery pipelines, monitoring, the configuration management database (CMDB), and surveys as sources, with attention to data quality, timestamps, and status models.
- **1.6 Statistical literacy for service metrics**: percentiles over averages, skewed distributions, small samples, control charts, and honest uncertainty for ticket and flow data.
- **1.7 Measurement frameworks**: Goal-Question-Metric, objectives and key results (OKRs), the balanced scorecard, critical success factors and key performance indicators, and how they combine with ITIL practices.
- **1.8 ITIL 5 measurement and value outcomes**: ITIL 5's stated emphasis on measurable value, digital products, and AI-enabled environments, as verified from the owner's own publications, and the foundations (ownership, outcomes, AI oversight) that you can measure today.

## How these topics interrelate

The topics form a loop rather than a ladder. Topic 1.1 (see topic 1.1, Why measure service management) supplies the purpose, and topic 1.3 (see topic 1.3, Outcomes over output: choosing what to measure) turns that purpose into a choice of what to measure. A metric picked for its outcome focus still needs a definition, an owner, and a review date, which is the work of topic 1.4 (see topic 1.4, Metrics governance and ownership). Frameworks such as Goal-Question-Metric, covered in topic 1.7 (see topic 1.7, Measurement frameworks), give a repeatable way to move from a goal to a small set of measures, so they pair naturally with topics 1.3 and 1.4.

Data and statistics form a second pair. A well-chosen metric is only as good as the records behind it, and topic 1.5 (see topic 1.5, Data sources and instrumentation) explains how timestamps, status models, and tool configuration shape what a number can mean. Topic 1.6 (see topic 1.6, Statistical literacy for service metrics) then covers how to read that number honestly, using percentiles, control charts, and plain statements of uncertainty. Weak data defeats good statistics, and weak statistics waste good data, so the two are best read together.

Topic 1.8 (see topic 1.8, ITIL 5 measurement and value outcomes) applies the same loop to a changing framework: it measures the foundations that any version needs, and it keeps unverified claims labelled. Topic 1.2 (see topic 1.2, Goodhart's law and the psychology of metrics) sits across all of the others as the guardrail. Any metric chosen under topic 1.3, governed under topic 1.4, and drawn from the sources in topic 1.5 can still be gamed once people are judged by it. Governance limits who sees what and how a metric is used. Outcome-focused choices make gaming less rewarding. Paired measures, introduced here and developed throughout the book, let one number check another. Every metric in the later parts therefore carries a gaming vector and a guardrail, and this part explains why.
