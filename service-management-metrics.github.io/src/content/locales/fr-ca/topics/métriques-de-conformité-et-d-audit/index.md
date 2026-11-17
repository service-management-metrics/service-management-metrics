# Métriques de conformité et d'audit

**La conformité est plus facile et plus honnête quand les preuves sont produites par le travail lui-même : mesurez donc la part de preuves qui vient automatiquement, la rapidité avec laquelle les constats sont corrigés et la fréquence à laquelle le même constat revient, et traitez les auditeurs comme des parties prenantes qui rejoignent la conversation tôt.**

## Vue d'ensemble et motivation

La plupart des organisations qui construisent et exploitent des services informatiques rendent des comptes à quelqu'un : régulateurs, clients, organismes de certification, assureurs, conseils d'administration. La [conformité réglementaire](https://en.wikipedia.org/wiki/Regulatory_compliance) est le fait de se conformer aux lois, aux règles et aux normes, et de démontrer qu'on le fait. Un audit est un examen systématique de preuves pour juger si c'est vrai. En informatique, cela comprend les audits des contrôles de l'information financière, des obligations de protection des données, des certifications de sécurité et des engagements contractuels. L'[audit informatique](https://en.wikipedia.org/wiki/Information_technology_audit) examine les contrôles qui entourent les systèmes et les données qu'ils détiennent.

La conformité et la livraison continue ont une réputation de friction. La conformité demande des documents, des signatures et des approbations avant le changement, et la livraison continue privilégie de petits changements livrés en continu. La friction est réelle quand la conformité est traitée comme une phase à la fin. Elle diminue quand la conformité est intégrée au flux de travail. Les enregistrements de changements, les revues de code, les tests automatisés et les journaux d'accès sont des preuves, et un pipeline de livraison les produit chaque jour. L'[audit continu](https://en.wikipedia.org/wiki/Continuous_auditing) utilise des vérifications automatisées en quasi-temps réel des contrôles au lieu d'échantillons périodiques, et il correspond à la cadence de la livraison continue. Une [piste d'audit](https://en.wikipedia.org/wiki/Audit_trail) est un enregistrement qui montre qui a fait quoi, quand et sur quel système, et c'est souvent la preuve la plus solide dont vous disposez.

ITIL décrit les pratiques pertinentes : gestion de la sécurité de l'information, gestion des risques et gouvernance du système de valeur du service, et il renvoie à des normes comme l'[ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) pour les systèmes de gestion de la sécurité de l'information. Parmi les cadres auxquels les organisations font couramment face figurent des régimes de rapport pour les contrôles financiers, comme la [loi Sarbanes-Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) aux États-Unis, des lois de protection des données comme le [Règlement général sur la protection des données](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) dans l'Union européenne, et des rapports d'assurance comme [SOC 2](https://en.wikipedia.org/wiki/SOC_2), qui examinent les contrôles pertinents pour la sécurité et les critères connexes. Les détails diffèrent selon la juridiction, le secteur et la date, et ce sujet décrit une pratique de mesure, non des exigences légales. Travaillez avec vos collègues de la conformité, du juridique et de l'audit pour savoir ce qui s'applique à vous.

Le but des métriques de conformité est d'apprendre dans quelle mesure l'organisation remplit ses obligations et quel effort cela demande, pour que les deux puissent s'améliorer. Le risque est que la conformité devienne une représentation donnée à l'auditeur. Une équipe peut réussir un audit en produisant des documents à la dernière minute et continuer à pratiquer des méthodes risquées. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : quand les « constats d'audit » sont un objectif, les gens évitent l'examen, rétrécissent le périmètre et négocient la formulation (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Deux lignes de pensée aident.

- **La conformité comme sous-produit.** Si le pipeline enregistre automatiquement la revue, les tests, l'approbation et le déploiement, les preuves existent qu'un audit soit proche ou non. Cela supprime aussi la tentation de reconstituer des preuves après coup.
- **Les auditeurs comme parties prenantes.** La pratique agile valorise la collaboration continue avec les parties prenantes. Les auditeurs et les évaluateurs sont des parties prenantes aux questions légitimes. Les impliquer dans la conception des contrôles et des preuves réduit les surprises et les reprises, tout en préservant leur indépendance.

## Principes clés

- **Produisez les preuves comme sous-produit du travail.** Les pipelines, les tickets et les journaux doivent répondre à la plupart des questions d'audit.
- **Reliez les obligations aux contrôles et aux responsables.** Chaque obligation a un contrôle, et chaque contrôle a un responsable.
- **Collaborez tôt avec les auditeurs.** Partagez les conceptions et les approches de preuves avant l'audit, et préservez leur indépendance.
- **Corrigez les causes, non les constats.** Un constat clos sans supprimer la cause revient.
- **Mesurez l'effort autant que le résultat.** Le coût de la conformité fait partie du tableau.
- **Gardez la séparation des tâches là où elle compte.** L'indépendance de la revue est un contrôle que l'automatisation peut soutenir mais non remplacer.
- **Soyez honnête sur les lacunes.** Les faiblesses que l'on déclare soi-même valent mieux que celles que d'autres trouvent.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des obligations | Part des obligations applicables reliées à un contrôle avec un responsable et une source de preuves | obligations reliées à au moins un contrôle avec responsable et source de preuves / obligations applicables | pourcentage | Registre des obligations et registre des contrôles | Gouvernance ; gestion de la sécurité de l'information ; gestion des risques | La définition de terminé inclut les preuves de contrôle | Trimestrielle |
| Taux d'automatisation des preuves | Part des preuves de contrôle du périmètre recueillies automatiquement depuis les systèmes de référence | éléments de preuve de contrôle recueillis automatiquement / éléments de preuve exigés | pourcentage | Registre des contrôles, journaux du pipeline et des systèmes | Gestion de la sécurité de l'information ; maîtrise des changements | Le pipeline enregistre automatiquement la revue, les tests et le déploiement | Trimestrielle |
| Délai de fourniture des preuves | Temps pour fournir les preuves demandées par un auditeur ou un évaluateur | médiane et 85e percentile des jours entre la demande et les preuves acceptées | jours | Suivi des demandes d'audit | Gouvernance ; gestion de la sécurité de l'information | Réactivité à une question d'une partie prenante | Par audit |
| Délai de clôture des constats | Temps pour clore les constats d'audit par gravité | médiane et 85e percentile des jours entre l'émission du constat et la clôture vérifiée | jours | Suivi des constats | Amélioration continue ; gestion des risques | Délai de correction d'un défaut | Mensuelle |
| Taux de constats récurrents | Part des constats qui reviennent d'un audit ou d'une revue antérieurs | constats correspondant sur le fond à un constat clos antérieur / constats de la période | pourcentage | Suivi des constats avec liens de cause | Amélioration continue ; gestion des problèmes | Défaut récurrent après une correction | Par cycle d'audit |
| Conflits de séparation des tâches | Nombre de combinaisons d'accès ou d'approbation qui violent les règles de séparation, et délai de résolution | conflits détectés ; médiane des jours de résolution | décompte ; jours | Outils de gestion des identités et des accès, enregistrements de changements | Gestion de la sécurité de l'information ; maîtrise des changements | Revue indépendante des changements | Mensuelle |
| Effort d'audit | Heures-personnes que l'organisation consacre à préparer et à soutenir un cycle d'audit, par unité de périmètre | heures consignées à la préparation et au soutien de l'audit / contrôles ou systèmes du périmètre | heures par unité | Relevés de temps ou estimations d'effort | Gouvernance ; amélioration continue | Coût du travail hors livraison | Par cycle d'audit |

Énoncez dans le registre les obligations du périmètre et le périmètre de l'audit. Le délai de clôture démarre à l'émission du constat et s'arrête quand l'auditeur ou un vérificateur indépendant confirme la clôture, non quand l'équipe dit que c'est fait. Les constats récurrents sont appariés par cause, non par formulation, et la règle d'appariement est consignée. L'effort d'audit est une mesure de tendance de l'organisation et jamais une mesure d'individus.

## Recommandations

### Connaître vos obligations et vos contrôles

**1. Listez en langage clair les obligations qui s'appliquent.** Avec les collègues du juridique et de la conformité, listez les lois, normes, contrats et politiques qui lient le service, et ce que chacune exige en termes de résultats. Gardez la liste courte et lisible. Les obligations que personne ne sait énoncer clairement sont celles qui causent des surprises d'audit.

**2. Reliez chaque obligation à des contrôles, des responsables et des preuves.** Pour chaque obligation, nommez le contrôle qui y répond, la personne redevable et la preuve qui montre que le contrôle fonctionne. Là où un contrôle répond à plusieurs obligations, dites-le, car cela réduit l'effort en double. La couverture des obligations mesure l'exhaustivité de cette carte. Les obligations non reliées sont des lacunes à combler ou à accepter en connaissance de cause.

**3. Préférez moins de contrôles, mais plus solides.** Un contrôle automatisé et testé vaut plusieurs contrôles manuels. Cherchez les contrôles qui se chevauchent et retirez ceux qui ne servent aucune obligation. Chaque contrôle coûte un effort à exploiter et à étayer (voir le sujet 8.2, Métriques des risques et des contrôles).

### Faire des preuves un sous-produit

**4. Laissez le pipeline produire les preuves.** Reliez chaque changement en production à une demande, une revue de code, des résultats de tests et une approbation là où elle est requise, le tout enregistré automatiquement. Un enregistrement de déploiement qui montre cela dit à l'auditeur ce qui s'est passé sans qu'un document soit écrit. Cela repose sur les pratiques de livraison continue que les équipes agiles utilisent déjà (voir le sujet 4.5, Métriques des versions et des déploiements).

**5. Utilisez des contrôles de politique dans le pipeline.** Encodez des règles, comme « aucun déploiement sans revue par quelqu'un d'autre que l'auteur » ou « aucun accès à la production sans ticket », sous forme de contrôles automatisés. Le contrôle est à la fois un contrôle et sa preuve. Gardez les règles visibles et versionnées, pour que les changements qui leur sont apportés soient aussi consignés. Cela soutient la [séparation des tâches](https://en.wikipedia.org/wiki/Segregation_of_duties), le principe selon lequel aucune personne ne doit contrôler toutes les étapes d'un processus sensible.

**6. Conservez correctement les pistes d'audit.** Gardez les journaux d'accès et de changement de manière qu'ils ne puissent pas être modifiés par les personnes qu'ils décrivent, conservez-les pendant la durée exigée et rendez-les consultables. Une piste que peuvent modifier ceux qu'elle consigne est une preuve faible. Vérifiez les règles de conservation avec les collègues du juridique.

**7. Mesurez la part de preuves automatiques.** Le taux d'automatisation des preuves montre où subsiste la collecte manuelle. Classez les éléments manuels par effort et par risque, et automatisez d'abord les pires. À mesure que le taux monte, l'effort d'audit et le délai de fourniture baissent.

### Travailler avec les auditeurs

**8. Invitez les auditeurs dans la conception.** Partagez tôt avec l'audit interne et les évaluateurs externes les changements prévus des contrôles et des preuves, et demandez ce qui les satisferait. L'indépendance signifie qu'ils ne conçoivent pas vos contrôles, et non qu'ils ne peuvent pas vous dire de quelles preuves ils auront besoin. Des conversations précoces réduisent les reprises. L'Institute of Internal Auditors publie des normes pour la profession qui expliquent le rôle de l'[audit interne](https://en.wikipedia.org/wiki/Internal_audit).

**9. Préparez un index des preuves.** Gardez un index vivant de l'endroit où se trouve chaque type de preuve et de la manière de la récupérer. Suivez le délai de fourniture des demandes de preuves et servez-vous des retards pour trouver l'automatisation manquante. Un processus court et régulier vaut mieux qu'une course avant chaque audit.

**10. Convenez du sens de la matérialité et du périmètre.** Demandez aux auditeurs comment ils jugent ce qui compte et ce qui est dans le périmètre, et consignez la réponse. Une compréhension partagée évite les disputes plus tard. Ne restreignez pas le périmètre pour éviter l'examen, et ne l'élargissez pas sans raison.

### Corriger les causes et apprendre

**11. Traitez chaque constat comme un enregistrement de problème.** Trouvez la cause, corrigez-la et faites vérifier la clôture par quelqu'un d'indépendant. Reliez les constats récurrents aux précédents, et examinez pourquoi la première correction n'a pas tenu. Un taux élevé de constats récurrents indique des corrections qui ont traité des symptômes, ce qui se rattache à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**12. Suivez le coût et faites-le baisser.** Consignez l'effort d'audit sur plusieurs cycles. Si l'effort est élevé et plat, cherchez les doublons entre audits, la collecte manuelle de preuves et les contrôles qui ne servent personne. Rapportez la tendance de l'effort avec les résultats. La conformité vaut son coût quand elle réduit le risque réel, et les métriques aident à en juger.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des obligations | Relier les obligations à des contrôles faibles ou non pertinents ; définir les obligations étroitement | Revue de la pertinence des contrôles par un tiers ; tester les contrôles (voir le sujet 8.2, Métriques des risques et des contrôles) |
| Taux d'automatisation des preuves | Compter des captures d'écran ou des exports comme automatiques ; automatiser d'abord les preuves de faible valeur | Définir automatique comme généré par le système et résistant à l'altération ; classer par risque |
| Délai de fourniture des preuves | Fournir vite des preuves partielles ; négocier la formulation de la demande | Ne compter que les preuves acceptées ; suivre les demandes de suivi |
| Délai de clôture des constats | Clore des constats sans vérification ; reclasser la gravité | Vérification indépendante ; journal des changements de gravité |
| Taux de constats récurrents | Reformuler les constats pour qu'ils ne correspondent pas ; clore le constat antérieur sous un autre type | Apparier par cause avec une règle consignée ; revue par l'audit interne |
| Conflits de séparation des tâches | Déplacer les conflits vers des systèmes hors périmètre ; accorder des accès temporaires jamais consignés | Couvrir tous les systèmes comportant des processus sensibles ; revoir les accès temporaires |
| Effort d'audit | Ne pas consigner les heures ; déplacer l'effort vers d'autres budgets | Échantillonner les relevés de temps ; comparer avec des enquêtes auprès des équipes |

Une lecture saine est une automatisation des preuves croissante, un délai de fourniture plus court et plus stable, des constats clos avec vérification, un faible taux de récurrence et un effort d'audit qui baisse à mesure que le processus mûrit.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Preuves manuelles périodiques | Familières aux auditeurs | Coûteuses ; reconstituées après coup |
| Preuves automatisées continues | Peu coûteuses à maintenir ; opportunes | Demandent de l'ingénierie ; les auditeurs doivent faire confiance à la source |
| Approbations lourdes | Contrôle visible | Lentes ; regroupent les changements |
| Contrôles de politique automatisés | Cohérents et rapides | Les règles doivent être justes et visibles |
| Implication précoce des auditeurs | Moins de surprises | Demande du soin pour préserver l'indépendance |
| Audit à la fin | Séparation nette | Constats tardifs ; reprises |
| Un contrôle pour plusieurs obligations | Efficace | Une seule défaillance touche plusieurs obligations |
| De nombreux contrôles spécifiques | Carte claire | Effort en double |

La réponse en bref est d'automatiser les preuves depuis le pipeline et les systèmes de référence, d'impliquer tôt les auditeurs dans la conception en gardant leur indépendance, et de garder un ensemble mince de contrôles solides reliés aux obligations.

## Questions à discuter avec votre équipe

**1. Quelle question d'audit nous prend le plus de temps à répondre, et pourquoi ?**
Choisissez la demande de preuve la plus lente du dernier audit et retracez-la. La preuve est-elle manquante, éparpillée ou dans la tête de quelqu'un ? Discutez de ce qui la rendrait automatique. L'animateur doit consigner le coût en heures.

**2. Pouvons-nous montrer, pour tout changement en production du dernier mois, qui l'a revu et quels tests ont tourné ?**
Choisissez un changement au hasard et essayez. Notez où la chaîne se brise. Convenez d'une amélioration de l'enregistrement du changement ou du pipeline qui comble l'écart.

**3. Qu'avons-nous promis au dernier audit, et cela a-t-il tenu ?**
Revoyez les constats et les corrections. Pour chacun, demandez si la cause a été supprimée et qui a vérifié la clôture. Cherchez les récurrences. Convenez d'un constat à examiner plus en profondeur.

**4. Que nous diraient les auditeurs si nous leur demandions comment faciliter les preuves ?**
Planifiez une conversation avec l'audit interne ou un évaluateur sur la conception des preuves. Demandez ce qu'ils jugent fiable et ce qu'ils ne jugent pas. L'animateur doit traiter leurs réponses comme de l'information, en gardant à l'esprit les règles d'indépendance.

**5. Quels contrôles exploitons-nous dont aucune obligation n'a besoin ?**
Listez les contrôles et les obligations qu'ils servent. Trouvez ceux sans objet clair. Discutez de leur retrait, et des preuves qu'ils sont inutiles.

**6. Où une seule personne pourrait-elle ici faire quelque chose de sensible de bout en bout ?**
Pensez au déploiement, à l'octroi d'accès et aux paiements. Vérifiez si les outils imposent la séparation ou seulement la politique. Discutez de contrôles compensatoires, comme la revue automatisée, là où les effectifs sont petits.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison produisent une grande part des preuves en faisant bien leur travail. Elles doivent garder reliés les enregistrements de changements, de revues et de tests, utiliser des contrôles de politique dans le pipeline et soulever des préoccupations sur les contrôles qui ralentissent le travail sans réduire le risque. Elles gagnent à des conversations précoces avec les auditeurs sur ce qui constitue des preuves suffisantes.

### Équipes de service et d'exploitation

Les équipes d'exploitation exécutent la gestion des accès, la journalisation, les sauvegardes et le traitement des incidents, qui sont au cœur de nombreux audits. Elles doivent garder les journaux résistants à l'altération et conservés, mener les revues d'accès dans les temps et tenir l'index des preuves. Elles portent le fardeau des preuves manuelles et peuvent indiquer où l'automatisation aiderait le plus.

### Direction et gouvernance

Les dirigeants sont redevables de la conformité et souvent des résultats d'audit. Ils doivent financer l'automatisation des preuves, demander la couverture et les taux de constats récurrents plutôt que le seul décompte des constats, et soutenir l'indépendance des auditeurs. La gouvernance doit attendre des rapports honnêtes sur les lacunes, et un plan pour chacune.

### Clients et utilisateurs

Les clients et les utilisateurs s'appuient sur la conformité comme assurance de la manière dont leurs données et leurs services sont traités. Ils en profitent quand les rapports d'assurance sont clairs, quand les incidents sont signalés comme requis et quand les contrôles ne rendent pas l'usage légitime plus difficile que nécessaire. Une communication transparente sur la conformité construit la confiance.

## En pratique : un exemple de gestion des services

Une entreprise de paiements de taille moyenne exploite une plateforme de traitement de cartes et est évaluée chaque année face à un cadre d'assurance de sécurité et à un régime de protection des données. Les chiffres ci-dessous sont illustratifs.

La préparation de l'audit prend aux équipes d'ingénierie environ six semaines chaque année. L'évaluation de l'an dernier s'est close avec 14 constats, dont 5 revenaient de l'année précédente. La responsable de la conformité cartographie la situation. La couverture des obligations est de 83 %, 17 % des obligations n'ayant aucun responsable de contrôle nommé. L'automatisation des preuves est de 22 %, et la plupart des preuves d'approbation des changements viennent de captures d'écran de tickets compilées à la main. Le délai médian de fourniture des preuves est de 9 jours, avec un 85e percentile de 21 jours. Le délai médian de clôture des constats est de 74 jours, et la clôture était souvent prononcée par l'équipe responsable sans vérification.

La responsable de la conformité travaille avec les équipes de livraison et d'exploitation et avec l'auditeur interne. Ils changent quatre choses. Chaque changement en production dans le pipeline est désormais relié à la demande, à la revue de code par quelqu'un d'autre que l'auteur, aux résultats de tests et au déploiement, enregistrés automatiquement dans l'enregistrement du changement. Un contrôle de politique bloque un déploiement qui n'a pas de revue indépendante, et consigne la voie d'exception pour les urgences. Les revues d'accès se font chaque trimestre à partir du système d'identité, qui montre directement les conflits de séparation des tâches. Chaque constat devient un enregistrement de problème, avec un vérificateur indépendant de l'audit interne, et les constats récurrents sont reliés à leurs prédécesseurs.

À l'évaluation suivante, le taux d'automatisation des preuves est de 71 %, le délai médian de fourniture des preuves est de 2 jours, le 85e percentile de 5 jours, et la préparation de l'audit prend environ deux semaines. La couverture des obligations est de 97 %, et les éléments restants ont une acceptation documentée. Les constats tombent à 6, dont un récurrent, et le délai médian de clôture est de 31 jours avec vérification indépendante. Le président-directeur général demande zéro constat l'an prochain. La responsable de la conformité propose de suivre les constats récurrents, le délai de clôture et l'automatisation des preuves, et explique qu'un objectif de zéro constat pousse les équipes à cacher des problèmes ou à rétrécir le périmètre, et qu'un évaluateur qui ne trouve rien n'a peut-être pas cherché assez. La décision est consignée, et le conseil convient de revoir les mesures à la prochaine réunion.

## Agilité, IA, automatisation et analytique

### Agilité

Produisez les preuves comme un sous-produit du travail, et invitez tôt les auditeurs à la conversation. La précaution est qu'un objectif sur les constats d'audit peut décourager l'auto-déclaration honnête.

### IA

Les obligations liées à l'IA changent : vérifiez donc le droit qui s'applique à vous avec votre conseiller juridique, et tenez un inventaire des systèmes d'IA comme preuve. Ne demandez pas à un outil d'IA d'énoncer des affirmations de conformité. La précaution est que les résumés de preuves générés par l'IA demandent qu'une personne les vérifie face à la source.

### Automatisation

Automatisez la collecte des preuves depuis les pipelines et les outils, et mesurez le taux d'automatisation des preuves et le délai de fourniture. La précaution est que l'automatisation peut produire des preuves complètes mais fausses : échantillonnez-les donc.

### Analytique

Rapportez les constats récurrents et le délai de clôture avec les décomptes. La décision éclairée est où les contrôles échouent de façon répétée. La précaution est que l'effort d'audit est un coût, non un objectif, et que le réduire ne doit pas réduire la couverture.

## Éclairage sectoriel

**Startup.** Les obligations peuvent arriver soudainement avec un grand client ou une levée de fonds. Prenez tôt de bonnes habitudes : revue par les pairs, enregistrements de changements et contrôle d'accès dans le pipeline, pour que les preuves existent quand on les demande. Choisissez un cadre quand l'entreprise en a besoin et reliez-le à ce que vous faites déjà.

**Petite entreprise.** Les devoirs de conformité sont souvent fixés par les contrats et la loi, et les ressources sont limitées. Gardez une courte liste d'obligations, appuyez-vous sur des services gérés ayant leurs propres rapports d'assurance et tenez un simple dossier de preuves. Méfiez-vous de l'achat d'outils de conformité qui coûtent plus que le risque qu'ils traitent.

**Grande entreprise.** De nombreuses obligations se chevauchent : un cadre de contrôle unifié qui relie un contrôle à plusieurs obligations économise un grand effort. Utilisez des sources de preuves communes, un suivi des constats partagé et un calendrier des audits pour éviter les demandes répétées. Coordonnez l'audit interne, la conformité et la sécurité pour que les équipes ne soient pas examinées trois fois pour la même chose.

**Gouvernement et secteur public.** Les devoirs de conformité sont étendus et publics, y compris les règles de passation de marchés, de documents, d'accessibilité et de protection des données, avec des audits par des organismes nationaux. Documentez les décisions et les preuves pendant la durée exigée, rendez les rapports cohérents entre organismes quand c'est possible et gardez une ligne nette entre l'audit indépendant et la direction. Les obligations peuvent changer avec les élections et la législation (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent l'outillage du registre des contrôles, l'intégration du pipeline pour les preuves, les systèmes d'identité et de journalisation, et le temps du personnel de conformité et des équipes. L'effort initial d'automatisation des preuves est important, et il remplace un travail manuel récurrent.

Les rendements sont un effort d'audit récurrent moindre, des réponses plus rapides aux demandes, moins de constats récurrents et une vue plus honnête de la santé des contrôles. Ils comprennent aussi le coût évité des surprises tard dans un cycle de certification. Construisez le dossier à partir de vos propres chiffres : heures de préparation d'audit avant et après, délai de fourniture des preuves, nombre et âge des constats, et coût de tout retard lié à l'audit dans une affaire commerciale. Évitez de citer des études sur le coût de la conformité à moins de pouvoir en retracer la méthode et la pertinence. Comptez le coût du programme et le risque de sur-automatisation de contrôles faibles. Le traitement financier plus large figure dans le dernier sujet de la partie précédente (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Préparer l'audit le dernier mois.** Cela produit des preuves reconstituées et une course. Consignez les preuves au fil du travail.
- **Des captures d'écran comme preuves.** Elles sont manuelles, faciles à modifier et coûteuses. Utilisez des enregistrements générés par le système.
- **Viser zéro constat.** Cela récompense un périmètre étroit et des problèmes cachés. Suivez la clôture, les récurrences et la couverture.
- **Clore les constats par simple affirmation.** Le même constat revient. Vérifiez la clôture de façon indépendante.
- **Traiter les auditeurs en adversaires.** Cela augmente le coût des deux côtés. Collaborez sur la conception des preuves en préservant l'indépendance.
- **Des contrôles qui ne servent aucune obligation.** Ils coûtent de l'effort et nourrissent le cynisme. Retirez-les.
- **Automatiser un mauvais contrôle.** Cela produit à grande échelle des preuves d'un contrôle faible. Testez d'abord le contrôle.
- **Séparation des tâches manuelle.** Elle repose sur la mémoire. Imposez-la dans les outils et revoyez les exceptions.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Obligations et contrôles | Connus de quelques personnes | Liste d'obligations et de contrôles | Reliés aux contrôles, aux responsables et aux sources de preuves | Couverture suivie ; chevauchements réduits ; contrôles testés | Cadre de contrôle unifié entre équipes, fournisseurs et régimes |
| Preuves | Compilées avant les audits | Modèles standard et dossier de preuves | Les pipelines et systèmes de référence produisent une grande part des preuves | Taux d'automatisation, délai de fourniture et effort gérés | Assurance continue, les auditeurs consommant directement les preuves |
| Constats et apprentissage | Constats contestés et clos par affirmation | Constats suivis | Constats traités comme des enregistrements de problème avec vérification indépendante | Récurrences et délai de clôture analysés et réinjectés dans la conception des contrôles | Constats partagés dans l'organisation et avec les partenaires ; l'amélioration est routinière |

## Liste de vérification

- [ ] Les obligations applicables sont listées en langage clair, avec des responsables.
- [ ] Chaque obligation est reliée à des contrôles et à une source de preuves.
- [ ] Les changements en production portent automatiquement des preuves liées de demande, de revue, de test et de déploiement.
- [ ] Des contrôles de politique imposent la revue et la séparation des tâches dans le pipeline.
- [ ] Les pistes d'audit sont résistantes à l'altération et conservées pendant la durée exigée.
- [ ] Un index des preuves existe, et le délai de fourniture des demandes est mesuré.
- [ ] Les auditeurs sont consultés sur la conception des preuves, l'indépendance étant préservée.
- [ ] Les constats sont consignés comme enregistrements de problème et clos avec vérification indépendante.
- [ ] Les constats récurrents sont reliés à leurs prédécesseurs et examinés pour leur cause.
- [ ] L'effort d'audit est suivi comme tendance et revu pour les doublons.

## Prompts d'IA

**Reliez les obligations aux contrôles.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Planifiez l'automatisation des preuves.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Analysez les constats récurrents.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Préparez une conversation précoce avec les auditeurs.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de conformité ou d'audit.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de conformité porte son vecteur de détournement, son garde-fou et sa règle d'indépendance.

## Idées clés

- Produisez les preuves comme sous-produit de la livraison, depuis les pipelines et les systèmes de référence, et mesurez la part qui est automatique.
- Reliez chaque obligation à un contrôle, un responsable et une source de preuves.
- Invitez tôt les auditeurs dans la conception des preuves, et protégez leur indépendance.
- Clôturez les constats en supprimant les causes, vérifiez la clôture de façon indépendante et surveillez le taux de constats récurrents.
- Évitez les objectifs comme zéro constat, et suivez l'effort à côté des résultats.
- Imposez la séparation des tâches dans les outils, et gardez les pistes d'audit résistantes à l'altération.

## Références et lectures complémentaires

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
