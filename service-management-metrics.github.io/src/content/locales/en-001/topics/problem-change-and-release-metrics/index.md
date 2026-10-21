# Introduction to Part 4: Problem, Change, and Release Metrics

**Problem, change, and release metrics show whether the way a team changes its services and learns from failure is making them both faster to improve and steadier to run.**

Every change to a live service is a bet. It may deliver value sooner, or it may break something users rely on. Part 3 measured how well support and restoration work when things go wrong (see topic 3.0, Introduction to Part 3: Service Desk, Incident, and Request Metrics). This part looks at the other side of the same coin: how change enters the environment, how often it causes trouble, and how well the organization learns so that the same trouble does not return.

Continuous delivery and ITIL approach this ground from different directions. Agile practice favors continuous software delivery in small changes and treats fast feedback as a safety measure. ITIL practices such as problem management, change enablement, and release management exist to protect stability and to find and remove the causes of incidents. The metrics in this part let both views be checked against the same evidence. If frequent change is safe, the failure and rework measures will show it. If a control is slowing delivery without reducing risk, the approval and lead time measures will show that instead.

Two cautions run through the whole part. Speed and stability must be read together, because a number that improves one while quietly damaging the other is a bad trade. Time measures should also be read as distributions with percentiles, as set out in Part 1 (see topic 1.6, Statistical literacy for service metrics). Every metric here describes a team, a service, or a system. None of them ranks an individual, and none is a target to be pushed in isolation (see topic 1.2, Goodhart's law and the psychology of metrics).

The four lenses shape this part. Continuous delivery makes small, frequent changes the norm, so change and release measures describe flow and safety together. AI-assisted changes and AI-generated risk scores need their own quality pairing. Pipelines automate evidence and approvals, so the automation must be measured on its failures. Analytics links changes, incidents, and problems, and says how many cases stand behind each rate.

## Topics in this part

- **4.1 Problem management metrics**: problems opened and closed, known error reuse, recurrence, and time to permanent fix.
- **4.2 Postmortem and learning metrics**: review completion, action item closure, recurrence of causes, and blameless learning signals.
- **4.3 Change enablement metrics**: change volume by type, approval lead time, standard change share, and automation of approval.
- **4.4 Change failure and rework**: change fail rate, emergency change share, rollback and hotfix rates, and consistent definitions of failure.
- **4.5 Release and deployment metrics**: deployment frequency, release frequency, feature flag use, release lead time, and separating deployment from release.
- **4.6 Technical debt and known errors**: known error backlog, debt stock and interest, and prioritizing fixes against feature work.

## How these topics interrelate

The part divides into two halves that depend on each other. Topics 4.1 and 4.2 are about learning: how incidents are traced to causes, and how reviews turn into fixes that are completed. Topics 4.3, 4.4, and 4.5 are about change: how it is approved, how often it fails, and how it reaches users. Topic 4.6 joins the halves, because the debt and known errors that learning uncovers are the same items that compete with new features for the team's time.

The most important pairing is between speed and failure. Deployment and release frequency in topic 4.5 (see topic 4.5, Release and deployment metrics) describe how often change reaches production, and the DORA research program pairs such throughput measures with stability measures (see topic 2.8, DORA metrics). Topic 4.4 (see topic 4.4, Change failure and rework) supplies that stability side. A team that deploys more often while its failure and rework rates stay flat or fall is improving. A team whose frequency rises while rollbacks and hotfixes rise with it is moving the cost somewhere else.

Change enablement sits between the two. Topic 4.3 (see topic 4.3, Change enablement metrics) measures the control side: how long approval takes, how much change is pre-authorized as standard, and how much of the approval is automated. Approval lead time is the cost of a control, and the change fail rate from topic 4.4 is the evidence of whether that control is working. Read together, they show whether a heavy approval step is buying safety or only adding delay, and whether lighter, automated approval has kept failure steady.

The learning topics guard the others. Problem management in topic 4.1 (see topic 4.1, Problem management metrics) measures recurrence and time to permanent fix, which is the long-run test of whether incident handling from Part 3 is removing causes or only restoring service. Topic 4.2 (see topic 4.2, Postmortem and learning metrics) checks that reviews actually happen and that their actions are closed, since a completed review with no follow-through changes nothing. Counting reviews or problems closed is easy to game, so these counts should be read next to recurrence of the same causes, which is harder to fake.

Finally, topic 4.6 (see topic 4.6, Technical debt and known errors) explains why the other measures drift. Unaddressed known errors and accumulated debt raise the chance of failure and the cost of every later change. Reading the known error backlog beside the change fail rate shows when deferring fixes has begun to slow delivery.

Later parts build on these measures. Service level objectives and error budgets in Part 5 give a reliability limit against which the pace of change can be judged, and Part 11 shows how to introduce these measures without breeding fear.
