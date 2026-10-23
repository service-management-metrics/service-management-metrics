# Introduction to Part 6: Customer and Experience Metrics

**Customer and experience metrics ask whether the people who use a service are better off, which is the question that operational and delivery measures can only answer indirectly.**

A team can close every incident inside its target, ship every change on schedule, and still leave users frustrated. Operational numbers describe what the service organization did. Experience numbers describe what the user felt and achieved. Both are needed, because a green dashboard and an unhappy customer can exist side by side, and only the second one decides whether the service is valued.

Agile and ITIL meet naturally here. Agile practice treats working software and customer collaboration as the measure of progress, and it uses frequent feedback to steer. ITIL 4 describes value as co-created with the consumer rather than delivered to them, so the consumer's experience and outcomes are part of the service, not a report written afterwards. Measuring experience therefore means collecting that feedback on purpose, reading it honestly, and acting on it quickly enough for it to matter.

Experience data is also easy to misread. Survey scores depend on who answers, when they are asked, and how the question is worded. Small samples swing widely, and a score that rises may only reflect a change in who replies. Read every measure in this part as evidence about a team, a service, or a journey, never as a ranking of individuals, and pair it with a guardrail so that it cannot be improved by changing the survey instead of the service (see topic 1.2, Goodhart's law and the psychology of metrics).

The four lenses matter in a specific way here. Continuous stakeholder involvement is the source of experience evidence. AI-handled contacts should be reported separately, with a person reading a sample of comments, since models can misread tone. Automated surveys need a check on who answers. Analytics shows scores with the response count, and attribution limits are stated.

## Topics in this part

- **6.1 Customer satisfaction metrics**: customer satisfaction (CSAT), net promoter score (NPS), customer effort score (CES), survey design, response bias, and sample size.
- **6.2 Experience level agreements**: measuring experience instead of only operational targets, using sentiment, effort, and journey measures.
- **6.3 Service adoption and catalog metrics**: catalog item use, adoption and abandonment, request mix, and treating the catalog as a product backlog.
- **6.4 User and employee experience**: digital employee experience, friction, time lost to IT issues, and internal customer outcomes.
- **6.5 Value realization and business outcomes**: tying service work to business outcomes, benefits tracking, and the limits of attribution.

## How these topics interrelate

Topic 6.1 (see topic 6.1, Customer satisfaction metrics) supplies the basic instruments: the survey measures and the discipline for collecting them. It also sets out the limits of those instruments, including response bias and sample size, which apply to every other topic in the part. Read it first, because the later topics reuse its measures and inherit its cautions.

Topic 6.2 (see topic 6.2, Experience level agreements) takes those instruments and uses them to complement operational targets. A service can meet a response-time target and still produce a poor experience, so an experience level agreement sits beside the conventional service level agreement and does not replace it. The pairing works in both directions. Operational data explains why an experience score moved, and experience data shows whether an operational target is aimed at the right thing.

Topics 6.3 and 6.4 look at behavior and friction instead of opinion. Adoption and abandonment in topic 6.3 (see topic 6.3, Service adoption and catalog metrics) show what people actually do, which checks what they say in a survey. Friction and lost time in topic 6.4 (see topic 6.4, User and employee experience) show the cost of poor service to the internal customer. Behavioral measures guard the survey measures against polite or unrepresentative answers, and surveys explain the behavior that the usage data alone cannot.

Topic 6.5 (see topic 6.5, Value realization and business outcomes) closes the part by asking whether any of this changed an outcome the business cares about. It is the most cautious topic, because attribution is hard: many things move a business result, and a service team should claim only what its evidence supports. It guards the rest of the part against measuring satisfaction for its own sake.

Several guardrail pairs follow from this. A satisfaction score should be read with its response rate and sample size. An effort or sentiment measure should be read with the operational data behind it. An adoption figure should be read with abandonment, so that a popular catalog item that people give up on is not counted as a success. Fast resolution measures from earlier parts should be read with satisfaction, so that speed is not bought with poor outcomes (see topic 2.2, Lead time, cycle time, and flow efficiency, for the clocks those speed measures use).

Later parts continue the same thread. Financial and service-level measures in Parts 7 and 8 describe cost and commitment, and the experience view in this part is the check that cost and commitment are directed at something users value.
