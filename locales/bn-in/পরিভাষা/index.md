# বাংলা পরিভাষা নির্দেশিকা (সেবা ব্যবস্থাপনা মেট্রিক)

অনুবাদকদের জন্য সম্মত নীতি। ভাষারীতি চলিত বাংলা, পাঠককে "আপনি" সম্বোধন, আদেশসূচক ক্রিয়ায় "করুন" রূপ। ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps এবং টুল ও পণ্যের নাম মূল লাতিন বানানে থাকে। SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI-এর মতো প্রতিষ্ঠিত সংক্ষিপ্ত রূপ অপরিবর্তিত থাকে এবং প্রথম ব্যবহারে বাংলা ব্যাখ্যা যুক্ত হয়। ইংরেজি উইকিপিডিয়ার লিংক, তথ্যসূত্রের শিরোনাম ও URL, এআই প্রম্পটের কোড ব্লকের কাঠামো এবং এআই স্কিল ফাইলের লিংক ইংরেজিতেই থাকে। উইকিপিডিয়া লিংকের দৃশ্যমান লেখা বাংলায় হয়, প্রয়োজনে বন্ধনীতে ইংরেজি পদ থাকে। সংখ্যা লাতিন অঙ্কে (12,000), শতাংশ সংলগ্ন (99.9%), তারিখ YYYY-MM-DD, একক মেট্রিক। আন্তঃসূত্র "(বিষয় N.N, শিরোনাম দেখুন)" আকারে। ITIL 5 সম্পর্কিত বক্তব্য শুধু মালিকের (PeopleCert) যাচাইযোগ্য প্রকাশনা থেকে নেওয়া হয়, বাকিটা অযাচাইকৃত বলে চিহ্নিত। স্প্রিন্ট, Scrum, Kanban-এর মতো নির্দিষ্ট পদ্ধতির পরিভাষা জোর না দিয়ে শর্তসাপেক্ষে উল্লেখ করা হয়। মেট্রিক সর্বদা দল, সেবা ও ব্যবস্থা বর্ণনা করে, কখনও ব্যক্তিকে ক্রম দেয় না। দীর্ঘ ড্যাশ (U+2014) নিষিদ্ধ, সংখ্যার পরিসর ছাড়া en-ড্যাশও (U+2013) নয়; তার বদলে কমা, কোলন বা বন্ধনী।

## মূল পরিভাষা

| ইংরেজি | বাংলা |
|---|---|
| service | সেবা |
| value co-creation | মূল্য সহ-সৃষ্টি |
| incident | ইনসিডেন্ট |
| event (monitoring) | ইভেন্ট |
| problem | সমস্যা |
| change enablement | পরিবর্তন সক্ষমকরণ (change enablement) |
| SLA / SLO / XLA | SLA / SLO / XLA (সেবা স্তর চুক্তি / সেবা স্তর লক্ষ্য / অভিজ্ঞতা স্তর চুক্তি) |
| error budget | ত্রুটির বাজেট |
| burn rate | ক্ষয়ের হার |
| toil | একঘেয়ে কাজ (toil) |
| backlog | ব্যাকলগ |
| retrospective | রেট্রোস্পেকটিভ (পর্যালোচনা সভা) |
| value stream | ভ্যালু স্ট্রিম |
| guardrail | রক্ষাবেষ্টনী |
| runbook | রানবুক |
| postmortem | পোস্টমর্টেম |
| service desk | সার্ভিস ডেস্ক |
| continual improvement | নিরন্তর উন্নয়ন |
| continuous delivery | নিরবচ্ছিন্ন ডেলিভারি |
| observability | পর্যবেক্ষণযোগ্যতা |
| orchestration | অর্কেস্ট্রেশন |
| auto-remediation | স্বয়ংক্রিয় প্রতিকার |
| human in the loop | মানুষের সম্পৃক্ততা (human in the loop) |
| AI agent | এআই এজেন্ট |
| hallucination (AI) | হ্যালুসিনেশন (ভুল বা বানানো উত্তর) |
| prompt | প্রম্পট |
| skill (AI) | এআই স্কিল |
| analytics | বিশ্লেষণ |
| forecasting | পূর্বাভাস |
| metric | মেট্রিক |
| measure | পরিমাপ |
| gaming vector | কারসাজির উপায় |
| Goodhart's law | গুডহার্টের সূত্র |
| lead time | লিড টাইম |
| cycle time | সাইকল টাইম |
| work in process (WIP) | চলমান কাজ (WIP) |
| throughput | থ্রুপুট |
| queue | সারি |
| Little's law | লিটলের সূত্র |
| control chart | কন্ট্রোল চার্ট |
| change failure rate | পরিবর্তন ব্যর্থতার হার |
| mean time to restore (MTTR) | গড় পুনরুদ্ধার সময় (MTTR) |
| flow efficiency | প্রবাহ-দক্ষতা |
| shift / page / rotation / on-call | শিফট / পেজ / পালা / অন-কল |
| knowledge base | জ্ঞানভান্ডার |
| pull request | পুল রিকোয়েস্ট |
| deployment | ডিপ্লয়মেন্ট |
| release | রিলিজ |
| baseline | ভিত্তিরেখা |
| dashboard | ড্যাশবোর্ড |
| maturity | পরিপক্বতা |
| stakeholder | অংশীজন |
| governance | গভর্ন্যান্স |
| compliance | সম্মতি |
| supplier | সরবরাহকারী |
| customer / user | গ্রাহক / ব্যবহারকারী |
| team | দল |
| anti-pattern | অ্যান্টি-প্যাটার্ন |
| percentile | পার্সেন্টাইল |
| median | মধ্যমান |
| sampling | নমুনায়ন |
