# Guide de terminologie en français (Métriques de gestion des services)

Les personnes qui ont traduit ont convenu des décisions suivantes. Les noms propres (ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps et les noms d'outils et de produits) gardent leur graphie d'origine. Les sigles consacrés (SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI) sont aussi conservés. Quelques termes techniques d'usage courant (backlog, DORA, shelfware, showback, toil entre parenthèses à la première mention) restent en anglais. Les liens Wikipédia en anglais, les titres des sources, le code des prompts d'IA et les noms de fichiers des skills restent en anglais. Le texte du lien vers Wikipédia est traduit en français, tandis que les adresses et les entrées des sources restent en anglais. Dans le texte français, on emploie la virgule décimale et l'espace comme séparateur des milliers pour les grands nombres, avec une espace avant les signes « % », « : », « ; », « ? » et « ! » (par exemple 99,9 % et 12 000 ; les nombres de quatre chiffres s'écrivent sans séparateur, comme 5256). Les guillemets sont « ». Le format de date des exemples est AAAA-MM-JJ et les unités sont métriques. On s'adresse aux lecteurs avec « vous » (forme de politesse). Le format des renvois est « (voir le sujet N.N, Titre) ». Les affirmations sur ITIL 5 ne reprennent que ce qu'a vérifié le propriétaire (PeopleCert), et ce qui n'est pas confirmé est signalé comme tel. Les termes de méthodes précises comme sprint, Scrum et Kanban ne sont pas mis en avant et l'on emploie des formulations générales (par exemple « un intervalle de deux semaines »). Les métriques sont toujours rédigées de façon à décrire des équipes, des services et des systèmes, jamais des individus.

## Termes clés

| Anglais | Français |
|---|---|
| service | service |
| value co-creation | cocréation de valeur |
| incident | incident |
| event (monitoring) | événement |
| problem | problème |
| change enablement | maîtrise des changements |
| SLA / SLO / XLA | SLA / SLO / XLA (accord de niveau de service / objectif de niveau de service / accord de niveau d'expérience) |
| error budget | budget d'erreur |
| burn rate | taux de consommation |
| toil | tâches répétitives (toil) |
| backlog | backlog |
| retrospective | rétrospective |
| value stream | flux de valeur |
| guardrail | garde-fou |
| runbook | guide d'exécution (runbook) |
| postmortem | analyse post-incident |
| service desk | centre de services |
| continual improvement | amélioration continue |
| continuous delivery | livraison continue |
| observability | observabilité |
| orchestration | orchestration |
| auto-remediation | remédiation automatique |
| human in the loop | humain dans la boucle |
| AI agent | agent d'IA |
| hallucination (AI) | hallucination |
| prompt | prompt |
| skill (AI) | skill |
| analytics | analytique |
| forecasting | prévision |
| metric | métrique |
| gaming vector | vecteur de détournement |
| Goodhart's law | loi de Goodhart |
| lead time | délai de livraison |
| cycle time | temps de cycle |
| work in process (WIP) | travail en cours (WIP) |
| throughput | débit |
| queue | file d'attente |
| Little's law | loi de Little |
| control chart | carte de contrôle |
| change failure rate | taux d'échec des changements |
| mean time to restore (MTTR) | temps moyen de rétablissement (MTTR) |
| SLI | indicateur de niveau de service (SLI) |
| flow efficiency | efficacité du flux |
| unit economics | économie unitaire |
| total cost of ownership (TCO) | coût total de possession (TCO) |
| well-being | bien-être |
| sustainable pace | rythme soutenable |
| psychological safety | sécurité psychologique |
| percentile | percentile |
| median | médiane |
| workaround | contournement |
| known error | erreur connue |
| shift (on-call) | quart |
| page (on-call) | appel |
| rotation (on-call) | rotation |
| roster | tableau d'astreinte |
| on-call | astreinte |
| knowledge base | base de connaissances |
| pull request | demande de fusion |
| deployment | déploiement |
| release | version |
| feature flag | indicateur de fonctionnalité |
| rework | reprise |
| escaped defects | défauts échappés |
| rollback | retour arrière |
| pulse survey | sondage flash |
| showback / chargeback | rétro-information (showback) / refacturation (chargeback) |
| cost driver | inducteur de coût |
| lineage | filiation |
| automation bias | biais d'automatisation |
| post-run check | contrôle après exécution |
| assurance | assurance |
| game day | game day |
| tabletop exercise | exercice sur table |
| watermelon effect | effet pastèque |
| Initiate / Develop / Standardize / Manage / Orchestrate | Initier / Développer / Standardiser / Gérer / Orchestrer |

## Parties du livre

| Partie | Titre |
|---|---|
| 1 | Fondements de la mesure |
| 2 | Métriques de flux et de livraison continue |
| 3 | Métriques du centre de services, des incidents et des demandes |
| 4 | Métriques des problèmes, des changements et des versions |
| 5 | Métriques des niveaux de service, de la disponibilité et de la fiabilité |
| 6 | Métriques de clientèle et d'expérience |
| 7 | Métriques des actifs, de la configuration et des finances |
| 8 | Métriques de sécurité, de risque, de conformité et de fournisseurs |
| 9 | Métriques des personnes, des équipes et de l'amélioration |
| 10 | Métriques pour l'IA, l'automatisation et l'analytique |
| 11 | Construire un programme de métriques |
| 12 | Annexes |

## Titres des sujets

| Numéro | Titre |
|---|---|
| 1.0 | Introduction à la partie 1 : Fondements de la mesure |
| 1.1 | Pourquoi mesurer la gestion des services |
| 1.2 | Loi de Goodhart et psychologie des métriques |
| 1.3 | Les résultats plutôt que la production : choisir ce qu'il faut mesurer |
| 1.4 | Gouvernance et responsabilité des métriques |
| 1.5 | Sources de données et instrumentation |
| 1.6 | Culture statistique pour les métriques de service |
| 1.7 | Cadres de mesure |
| 1.8 | Mesure d'ITIL 5 et résultats de valeur |
| 2.0 | Introduction à la partie 2 : Métriques de flux et de livraison continue |
| 2.1 | Mesures de flux |
| 2.2 | Délai de livraison, temps de cycle et efficacité du flux |
| 2.3 | Travail en cours et théorie des files d'attente |
| 2.4 | Métriques de flux de valeur |
| 2.5 | Métriques de prévision et de planification de la livraison |
| 2.6 | Métriques du backlog et de son affinage |
| 2.7 | Métriques des demandes de fusion et de la revue de code |
| 2.8 | Métriques DORA |
| 2.9 | Travail opérationnel et travail non planifié |
| 3.0 | Introduction à la partie 3 : Métriques du centre de services, des incidents et des demandes |
| 3.1 | Métriques du centre de services |
| 3.2 | Volume et priorité des incidents |
| 3.3 | Temps de réponse et de résolution des incidents |
| 3.4 | Métriques des incidents majeurs |
| 3.5 | Métriques de traitement des demandes de service |
| 3.6 | Métriques de gestion des connaissances |
| 3.7 | Métriques de libre-service et d'automatisation |
| 4.0 | Introduction à la partie 4 : Métriques des problèmes, des changements et des versions |
| 4.1 | Métriques de gestion des problèmes |
| 4.2 | Métriques des analyses post-incident et de l'apprentissage |
| 4.3 | Métriques de maîtrise des changements |
| 4.4 | Échecs de changement et reprises |
| 4.5 | Métriques des versions et des déploiements |
| 4.6 | Dette technique et erreurs connues |
| 5.0 | Introduction à la partie 5 : Métriques des niveaux de service, de la disponibilité et de la fiabilité |
| 5.1 | Métriques de SLA, d'OLA et de XLA |
| 5.2 | SLI, SLO et budgets d'erreur |
| 5.3 | Métriques de disponibilité |
| 5.4 | Métriques de capacité et de performance |
| 5.5 | Métriques de supervision et de qualité des alertes |
| 5.6 | Métriques de continuité de service |
| 5.7 | Métriques de tâches répétitives et d'astreinte |
| 6.0 | Introduction à la partie 6 : Métriques de clientèle et d'expérience |
| 6.1 | Métriques de satisfaction de la clientèle |
| 6.2 | Accords de niveau d'expérience |
| 6.3 | Métriques d'adoption des services et de catalogue |
| 6.4 | Expérience des utilisateurs et des employés |
| 6.5 | Réalisation de la valeur et résultats métier |
| 7.0 | Introduction à la partie 7 : Métriques des actifs, de la configuration et des finances |
| 7.1 | Métriques de gestion des actifs informatiques |
| 7.2 | Métriques des actifs logiciels et des licences |
| 7.3 | Métriques du cycle de vie des actifs matériels |
| 7.4 | Métriques de qualité de la configuration et de la CMDB |
| 7.5 | Coût du service et économie unitaire |
| 7.6 | Métriques FinOps et de coûts du nuage |
| 7.7 | Retour sur investissement et dossier d'affaires |
| 8.0 | Introduction à la partie 8 : Métriques de sécurité, de risque, de conformité et de fournisseurs |
| 8.1 | Métriques des incidents de sécurité et des vulnérabilités |
| 8.2 | Métriques des risques et des contrôles |
| 8.3 | Métriques de conformité et d'audit |
| 8.4 | Métriques des fournisseurs et des contrats |
| 8.5 | Rapports réglementaires et gouvernementaux |
| 9.0 | Introduction à la partie 9 : Métriques des personnes, des équipes et de l'amélioration |
| 9.1 | Santé de l'équipe et expérience des développeurs |
| 9.2 | Métriques de satisfaction et de bien-être |
| 9.3 | Métriques de collaboration et de transmission |
| 9.4 | Métriques de compétences et d'apprentissage |
| 9.5 | Métriques d'amélioration continue |
| 9.6 | Métriques de changement organisationnel et d'adoption |
| 10.0 | Introduction à la partie 10 : Métriques pour l'IA, l'automatisation et l'analytique |
| 10.1 | L'IA dans la mesure de la gestion des services |
| 10.2 | Mesurer le travail assisté par l'IA |
| 10.3 | Métriques des agents d'IA et des agents conversationnels |
| 10.4 | Inflation des métriques et dilution de la qualité |
| 10.5 | Métriques de gouvernance et de risque de l'IA |
| 10.6 | Métriques d'automatisation et d'orchestration |
| 10.7 | Métriques des pipelines et des changements automatisés |
| 10.8 | Métriques d'analytique et de qualité des données |
| 10.9 | Métriques de prévision et d'analytique prédictive |
| 10.10 | Métriques d'observabilité et de télémétrie |
| 11.0 | Introduction à la partie 11 : Construire un programme de métriques |
| 11.1 | Concevoir un tableau de bord de métriques de service |
| 11.2 | Panorama des outils |
| 11.3 | Déployer les métriques sans semer la peur |
| 11.4 | Modèle de maturité des programmes de métriques |
| 11.5 | Une feuille de route d'adoption progressive |
| 12.0 | Annexes |
| 12.1 | Glossaire |
| 12.2 | Référentiel des définitions et formules de métriques |
| 12.3 | Listes de vérification |
| 12.4 | Modèles |
| 12.5 | Autoévaluation de la maturité |
| 12.6 | Références et lectures complémentaires |
| 12.7 | Index alphabétique |
