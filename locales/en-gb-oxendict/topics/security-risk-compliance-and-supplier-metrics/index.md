# Introduction to Part 8: Security, Risk, Compliance, and Supplier Metrics

**Trust in a service rests on how it handles threats, risks, obligations, and the third parties behind it, and the best evidence of that trust is produced by the work itself and shared openly.**

A service can be fast, cheap, and well liked and still fail the people who depend on it, because of an unpatched weakness, an unexamined risk, an obligation nobody tracked, or a supplier that stopped delivering. The measures in this part describe the conditions that protect against those failures: how long weaknesses stay open, whether controls work, whether evidence exists when someone asks for it, and whether you know what you depend on and could leave.

Agile and ITIL practice both treat these concerns seriously, from different angles. ITIL contributes information security management, risk management, supplier management, and governance, with their emphasis on policy, ownership, and records. Agile and DevOps contribute the idea that security and control belong inside continuous delivery: small changes, fast feedback, automated checks, and shared responsibility among development, security, operations, and assurance. The most effective organizations combine the two, so that controls are built into the pipeline, evidence is a by-product of delivery, and auditors, regulators, and suppliers are partners in a continuing conversation instead of occasional adversaries.

These measures also carry the highest stakes for distortion. Targets for findings, red risks, or breaches teach people to look away, to re-rate, or to hide. Measures that touch human behaviour, such as reports of suspicious activity, can slide into surveillance or blame. Every metric in this part therefore comes with the way it gets gamed and a guardrail, and the part treats safe reporting and blameless learning as controls in their own right. None of the measures ranks individuals. They describe systems, services, and relationships (see topic 1.2, Goodhart's law and the psychology of metrics).

The four lenses matter here because AI systems add new risks and new obligations. Security and compliance evidence is increasingly produced by pipelines, so automation must be tested, not trusted. Suppliers may embed AI, so ask what is switched on. Analytics reports exposure and control effectiveness with sample sizes. This book gives no legal advice, so check obligations with your own legal adviser.

## Topics in this part

- **8.1 Security incident and vulnerability metrics**: exposure windows, patch compliance, scan coverage, time to contain, exceptions, and the reporting culture that keeps signals flowing.
- **8.2 Risk and control metrics**: a short, owned risk register, control testing, key risk indicators, and risk-based change approval.
- **8.3 Compliance and audit metrics**: obligation coverage, evidence automation, finding closure and repeats, and working with auditors.
- **8.4 Supplier and contract metrics**: supplier performance against experience, concentration, due diligence, joint reviews, and tested exit plans.
- **8.5 Regulated and government reporting**: reporting obligations as design inputs, traceable reports, reconciled definitions, and usable public information.

## How these topics interrelate

Security measures (see topic 8.1, Security incident and vulnerability metrics) describe threats and weaknesses in concrete terms, and they supply some of the strongest key risk indicators for the risk register. Risk and control measures (see topic 8.2, Risk and control metrics) put those indicators in context, decide which controls matter, and test that they work. Compliance and audit measures (see topic 8.3, Compliance and audit metrics) turn the same controls and tests into evidence for outsiders, and they show how much of that evidence the work produces by itself.

Supplier measures (see topic 8.4, Supplier and contract metrics) extend each of these across the boundary of the organization. A supplier's vulnerabilities, risks, and compliance posture become yours, and the contract is one of the controls. The reporting topic (see topic 8.5, Regulated and government reporting) closes the part by asking what must be said to whom, and how to say it accurately without letting the reporting view distort the work it describes.

Several guardrail pairs follow. An exposure window should be read with scan coverage, so that a clean figure is not just a narrow scan. A control effectiveness rate should be read with the follow-up of failures, because a perfect rate can come from weak testing. A count of audit findings should be read with the repeat rate and closure verification. A supplier service level should be read with user experience (see topic 6.2, Experience level agreements). A statutory figure should be read with its companion measures and a reconciliation to the internal definition.

The part leans on earlier ones. Asset, configuration, and cost records (see topic 7.1, IT asset management metrics, and topic 7.4, Configuration and CMDB quality metrics) are what make scanning, dependency mapping, and supplier analysis possible. The postmortem and change measures of Part 4 supply the learning loops that keep this work honest. Part 9 turns to the people behind it all: their health, their collaboration, and the habits of improvement that make the whole system better over time.
