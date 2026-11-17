# Rapports réglementaires et gouvernementaux

**Le rapport obligatoire est une exigence fixe autour de laquelle il faut concevoir : bâtissez-le donc à partir des mêmes enregistrements que ceux que vous utilisez pour exploiter le service, gardez la vue de rapport séparée de la vue d'apprentissage, et protégez les personnes qui font le travail contre des objectifs qui le faussent.**

## Vue d'ensemble et motivation

De nombreuses organisations doivent rendre compte de leurs services qu'elles le choisissent ou non. Les régulateurs demandent des notifications d'incidents, des chiffres de disponibilité et des preuves de contrôles. Les gouvernements exigent des organismes qu'ils publient des données de performance, des dépenses et des déclarations d'accessibilité. Les bailleurs de fonds et les organes de surveillance demandent des résultats face aux engagements. Les contrats exigent des rapports de service. Dans ces cadres, le rapport n'est pas un choix de gestion interne. C'est une obligation avec une échéance, une définition et parfois une pénalité.

Le [secteur public](https://en.wikipedia.org/wiki/Public_sector) a des particularités. La [redevabilité](https://en.wikipedia.org/wiki/Accountability) envers les citoyens et les organes élus est un devoir central, et elle s'exerce par l'audit, la législation, les [lois sur l'accès à l'information](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) et la publication des résultats. Les pratiques de [gouvernement ouvert](https://en.wikipedia.org/wiki/Open_government) et de [données ouvertes](https://en.wikipedia.org/wiki/Open_data) rendent l'information disponible pour l'examen et la réutilisation. Les règles de [passation de marchés publics](https://en.wikipedia.org/wiki/Public_procurement) façonnent ce qui peut être acheté et comment, et les obligations de [gestion des documents](https://en.wikipedia.org/wiki/Records_management) régissent la durée de conservation de l'information. L'[optimisation des ressources](https://en.wikipedia.org/wiki/Value_for_money) est un critère courant de la dépense publique, et des organes indépendants mènent des [audits de performance](https://en.wikipedia.org/wiki/Performance_audit) pour l'examiner. Les détails diffèrent selon le pays, le niveau de gouvernement et le secteur, et ce sujet décrit une pratique de mesure, non des exigences légales. Travaillez avec vos collègues du juridique, de la conformité et des documents.

Les organisations réglementées du secteur privé, comme celles de la finance, de la santé, de l'énergie et des télécommunications, partagent bon nombre de ces caractéristiques. Elles font face à des devoirs de notification d'incidents, à des rapports de résilience et à des revues de supervision. Le fil commun est que quelqu'un d'extérieur à l'équipe de livraison définit ce qui doit être rapporté et pour quand.

La livraison continue et la pratique ITIL ont toutes deux quelque chose à offrir. L'objectif agile de collaboration continue avec les parties prenantes s'étend aux organes de surveillance, qui sont des parties prenantes aux besoins légitimes, et des conversations précoces sur ce qu'ils exigent peuvent éviter des reprises. L'habitude agile de livrer en continu de petits incréments fonctionnels convient aux rapports : des rapports produits automatiquement à partir des systèmes de référence sont plus exacts et moins coûteux que ceux assemblés à la main chaque trimestre. La pratique de mesure et de rapport d'ITIL, et sa gestion des niveaux de service, donnent le vocabulaire pour définir ce qui est mesuré et partagé.

Les obligations de rapport créent trois dangers bien connus.

- **Distorsion par les objectifs.** Quand un chiffre rapporté porte une conséquence, le travail se plie au chiffre. La littérature du secteur public sur les objectifs, y compris les écrits de John Seddon sur la pensée systémique dans le secteur public et l'analyse de la fixation métrique par Jerry Muller, décrit de nombreux cas où l'atteinte de l'objectif et le service du public divergeaient. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique pleinement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Deux jeux de chiffres.** La définition statutaire d'un chiffre diffère souvent de celle que l'équipe utilise en interne. Si l'équipe gère avec l'une et rapporte l'autre, personne ne fait confiance à aucune. Gardez les deux visibles, rapprochez-les et expliquez les différences.
- **Le rapport comme fardeau.** Des demandes manuelles, répétées et incohérentes consomment des personnes qualifiées. Plus le rapport dépend d'un travail héroïque de tableur, plus l'erreur et le retard s'installent.

Ce sujet s'appuie sur les mesures de conformité, de risque et de fournisseurs de cette partie (voir le sujet 8.2, Métriques des risques et des contrôles, le sujet 8.3, Métriques de conformité et d'audit, et le sujet 8.4, Métriques des fournisseurs et des contrats) et sur les fondations de données de la première partie (voir le sujet 1.5, Sources de données et instrumentation).

## Principes clés

- **Traitez les obligations comme des intrants de conception.** Listez-les tôt, avec définitions, échéances et responsables, et concevez la collecte de données autour d'elles.
- **Produisez les rapports à partir des systèmes de référence.** Automatisez l'extraction et gardez la filiation visible.
- **Séparez la vue de rapport de la vue d'apprentissage.** Les équipes ont besoin de mesures de travail franches qui ne sont pas contraintes par ce qui est rapporté.
- **Rapprochez les définitions.** Montrez comment les chiffres statutaires se rapportent aux mesures propres de l'équipe.
- **Rapportez honnêtement, y compris les mauvaises nouvelles.** Les corrections et le contexte construisent la confiance.
- **Protégez les gens des objectifs pervers.** Utilisez les objectifs statutaires avec des mesures compagnes et expliquez leurs limites.
- **Rendez utilisables les données publiées.** L'accessibilité, la clarté et le format comptent pour le public.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des obligations de rapport | Part des obligations de rapport ayant un responsable nommé, une définition énoncée, une source de données et une entrée au calendrier | obligations avec les quatre / obligations de rapport du périmètre | pourcentage | Registre des obligations | Mesure et rapports ; gouvernance | Accord de travail avec les parties prenantes sur les besoins d'information | Trimestrielle |
| Ponctualité des rapports | Part des rapports exigés soumis à leur échéance | rapports soumis à la date d'échéance ou avant / rapports dus dans la période | pourcentage | Calendrier des rapports et enregistrements de soumission | Mesure et rapports | Engagements envers les parties prenantes tenus | Mensuelle |
| Taux de rectification | Part des rapports ou des chiffres soumis qui sont corrigés plus tard | rapports ou chiffres corrigés après soumission / rapports ou chiffres soumis | pourcentage | Journal des soumissions et journal des corrections | Mesure et rapports ; amélioration continue | Défauts échappés | Trimestrielle |
| Couverture de la traçabilité | Part des chiffres rapportés qui peuvent être retracés jusqu'à un système de référence par des étapes documentées | chiffres avec une filiation documentée jusqu'à un système de référence / chiffres rapportés | pourcentage | Documentation de filiation, spécifications des rapports | Mesure et rapports ; gestion des connaissances | Constructions reproductibles | Trimestrielle |
| Alignement des définitions | Part des mesures rapportées pour lesquelles la définition statutaire et la définition interne sont documentées et rapprochées | mesures avec rapprochement documenté / mesures rapportées ayant une définition statutaire | pourcentage | Registre des métriques | Mesure et rapports ; gestion des niveaux de service | Définition de terminé partagée | Trimestrielle |
| Effort de rapport | Heures-personnes consacrées à produire un rapport récurrent | heures consignées par cycle de rapport, avec la part d'extraction et d'assemblage manuels | heures | Estimations de temps, journaux d'effort | Mesure et rapports ; amélioration continue | Coût du travail hors livraison | Par cycle de rapport |
| Conformité d'accessibilité des publications | Part des rapports et jeux de données publiés qui respectent la norme d'accessibilité exigée | éléments publiés qui passent un contrôle d'accessibilité / éléments publiés | pourcentage | Résultats des tests d'accessibilité | Mesure et rapports ; gestion des connaissances | Définition de terminé inclusive | Trimestrielle |

Écrivez la définition statutaire, la source et l'échéance à côté de chaque mesure rapportée. Un rapport est « ponctuel » quand il est accepté par l'organe destinataire, non quand il est envoyé, si l'acceptation est consignée. Une rectification compte toute correction d'un chiffre déjà soumis, volontaire ou exigée. L'effort de rapport est une mesure de tendance de l'organisation et jamais une mesure d'individus. La conformité d'accessibilité est vérifiée face à la norme qui s'applique à vous, comme les Web Content Accessibility Guidelines.

## Recommandations

### Traiter les obligations comme des intrants de conception

**1. Tenez un registre des obligations de rapport.** Pour chacune, consignez l'exigence, la source légale ou contractuelle, ce qui doit être rapporté, la définition, l'échéance, l'organe destinataire, le responsable interne et la source de données. Revoyez-le quand les lois, les contrats ou les régulateurs changent. Les obligations connues tôt peuvent être intégrées à la conception, et celles découvertes tard doivent être assemblées à la main.

**2. Impliquez tôt l'organe de surveillance.** Demandez aux régulateurs, aux auditeurs et aux bailleurs de fonds ce qu'ils feront des données et de quoi ils ont besoin. Certains vous aideront à façonner une définition ou accepteront des données sous une forme que vous produisez déjà. La pratique agile valorise la collaboration avec les parties prenantes, et les organes de surveillance en sont. Conservez la trace de ces conversations, et préservez l'indépendance là où elle compte.

**3. Concevez dès le départ la collecte de données pour le rapport.** En construisant un service, incluez les événements et les champs dont les rapports exigés auront besoin : horodatages d'incidents, impact, catégories, nombre d'utilisateurs. Les ajouter plus tard coûte cher. Définissez-les une fois, partagez la définition entre les équipes, avec un responsable unique de la définition (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Produire les rapports à partir des systèmes de référence

**4. Automatisez la chaîne de l'enregistrement au rapport.** Extrayez des systèmes d'incidents, de changements et de services avec des requêtes scriptées, appliquez des transformations documentées et produisez le rapport avec un modèle revu. Les rapports automatisés sont reproductibles, plus rapides et plus faciles à auditer que les rapports manuels. Versionnez les requêtes et les modèles pour qu'un rapport passé puisse être reproduit.

**5. Documentez la filiation.** Pour chaque chiffre rapporté, notez d'où il vient, comment il est calculé et qui le vérifie. La couverture de la traçabilité mesure la qualité de ce travail. Un auditeur ou un journaliste qui demande « d'où vient ce chiffre ? » doit obtenir une réponse claire en quelques minutes.

**6. Revoyez avant la soumission, avec un lecteur indépendant.** Faites vérifier par quelqu'un d'extérieur à l'équipe qui a produit le rapport les définitions, l'arithmétique et le récit. Les revues attrapent les erreurs et les affirmations non étayées. Consignez la revue. Une courte approbation de la personne redevable rend la responsabilité claire.

**7. Corrigez ouvertement.** Quand une erreur est trouvée après la soumission, corrigez-la vite, expliquez ce qui a changé et notez la cause. Un taux de rectification proche de zéro est suspect si les données sont complexes. Une correction visible et rapide construit plus de confiance qu'un chiffre laissé en place.

### Garder séparés le rapport et l'apprentissage

**8. Maintenez une vue de travail pour l'équipe.** Les équipes ont besoin de mesures qui les aident à s'améliorer, comme les percentiles, l'âge des plus vieux éléments et des compagnons de qualité. Ce sont rarement les mêmes que les chiffres statutaires. Ne limitez pas la vue de travail à ce qui est rapporté, et ne gérez pas uniquement par le chiffre rapporté.

**9. Rapprochez les définitions statutaires et internes.** Là où une mesure exigée diffère de celle de l'équipe, documentez les différences et montrez les deux. Par exemple, le chiffre de disponibilité d'un régulateur peut exclure la maintenance planifiée, alors que les utilisateurs la vivent comme une indisponibilité. Montrez le rapprochement dans le registre des métriques et dans les notes du rapport. Cela garde contre le problème des « deux jeux de chiffres ».

**10. Appariez les objectifs statutaires avec des compagnons.** Si un objectif est imposé, ajoutez des mesures qui révéleraient la distorsion : qualité, expérience des utilisateurs et travail laissé de côté. Par exemple, appariez un objectif de délai de première réponse avec une mesure de résolution et de contacts répétés (voir le sujet 3.1, Métriques du centre de services). Expliquez dans le rapport comment le chiffre doit être lu.

### Publier pour le public

**11. Rendez utilisable l'information publiée.** Publiez dans des formats ouverts et lisibles par machine là où la loi et la vie privée le permettent, avec des descriptions, des définitions et des dates claires. Respectez les normes d'accessibilité pour les documents et les pages web. Publier des données d'une manière que les gens ne peuvent pas lire ni réutiliser satisfait la lettre et défait l'objectif. Testez avec de vrais utilisateurs, y compris ceux qui utilisent des technologies d'assistance (voir le sujet 6.4, Expérience des utilisateurs et des employés).

**12. Protégez la vie privée et la sécurité dans ce que vous publiez.** Agrégez et supprimez les petits nombres qui pourraient identifier des personnes, évitez de publier des détails qui aident les attaquants et vérifiez les règles de divulgation auprès de spécialistes. Appliquez le même soin aux réponses aux demandes d'accès à l'information. Consignez les décisions de caviardage et leurs raisons.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des obligations de rapport | Traiter les obligations étroitement ; lister le responsable sans accord | Revue du registre par la conformité ou l'audit interne ; confirmation des responsables |
| Ponctualité des rapports | Soumettre des rapports incomplets pour respecter la date ; compter des ébauches comme soumissions | Contrôle de complétude à la soumission ; ne compter que les rapports acceptés ; taux de rectification |
| Taux de rectification | Supprimer les corrections ; faire les corrections discrètement | Journal des corrections revu par un lecteur indépendant ; un faible taux se lit avec la traçabilité |
| Couverture de la traçabilité | Documenter la filiation superficiellement ; n'inclure que des chiffres simples | Échantillonner la filiation en refaisant un calcul depuis la source |
| Alignement des définitions | Déclarer des définitions alignées sans rapprochement ; n'adopter la définition statutaire que dans le rapport | Document de rapprochement revu ; montrer les deux chiffres côte à côte |
| Effort de rapport | Ne pas consigner les heures ; déplacer le travail vers d'autres équipes | Comparer avec le retour de l'équipe ; inclure tous les contributeurs dans l'estimation |
| Conformité d'accessibilité des publications | Utiliser un vérificateur qui ne trouve que certains problèmes ; publier une version accessible distincte qui accuse du retard | Tests manuels avec des technologies d'assistance ; vérifier la parité entre les versions |

Une lecture saine est chaque obligation détenue, des rapports à l'heure et exacts avec des corrections visibles, des chiffres traçables jusqu'aux systèmes de référence, des définitions statutaires et internes rapprochées, un effort de rapport en baisse et une information publiée que le public peut utiliser.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Assemblage manuel des rapports | Souple ; marche avec n'importe quelles données | Lent, sujet aux erreurs, dépendant des individus |
| Rapports automatisés | Reproductibles, auditables, peu coûteux à exploiter | Effort de mise en place ; peut ancrer une mauvaise définition |
| Un seul jeu de mesures pour tout | Simple | Fausse le travail ; les chiffres statutaires conviennent rarement aux besoins de l'équipe |
| Vues de rapport et d'apprentissage séparées | Apprentissage franc ; rapport honnête | Demande rapprochement et discipline |
| Objectifs statutaires durs | Redevabilité claire | Effets pervers ; détournement |
| Objectifs avec compagnons et contexte | Révèle la distorsion | Plus à expliquer |
| Engagement précoce avec les régulateurs | Moins de surprises | Temps ; frontières à maintenir |
| Relation à distance seulement | Indépendance claire | Retour tardif ; reprises |

La réponse en bref est d'automatiser les rapports depuis les systèmes de référence, de garder une vue de travail d'équipe séparée de la vue de rapport, de rapprocher ouvertement les définitions et d'engager tôt les organes de surveillance tout en préservant leur indépendance.

## Questions à discuter avec votre équipe

**1. Quels rapports devons-nous, à qui et pour quand, et qui détient chacun ?**
Dressez la liste dans la salle et comparez-la avec le registre. Des lacunes apparaissent souvent : rapports dus en vertu de contrats, à des bailleurs de fonds, ou en vertu de règles que peu de gens connaissent. L'animateur doit consigner les nouveaux éléments et attribuer des responsables.

**2. Quel chiffre rapporté gérerions-nous différemment s'il n'était pas rapporté ?**
Choisissez une mesure statutaire ou contractuelle et demandez ce que ferait l'équipe si personne ne la mesurait. La réponse révèle où le chiffre et l'objectif divergent. Discutez de la mesure compagne qui montrerait la différence.

**3. Pouvons-nous reproduire aujourd'hui le rapport du trimestre dernier à partir de la source ?**
Essayez avec un rapport. Notez ce qui est manuel, non documenté ou perdu. Convenez de la première étape à automatiser ou à documenter, et de qui s'en chargera.

**4. Comment traitons-nous une erreur trouvée après la soumission ?**
Revoyez le processus et le dernier exemple. La correction a-t-elle été rapide et ouverte ? Quelqu'un a-t-il eu peur de la soulever ? Convenez de ce qui rend la correction normale.

**5. Qu'éprouverait une personne utilisant une technologie d'assistance en lisant notre rapport publié ?**
Testez ensemble un élément publié, ou revoyez un contrôle d'accessibilité récent. Demandez qui détient l'accessibilité des documents publiés. Convenez d'une correction et d'un processus pour éviter la récurrence.

**6. Que fait réellement le régulateur ou l'organe de surveillance de nos données ?**
Beaucoup d'équipes l'ignorent. Planifiez une conversation pour le savoir et pour demander si une autre forme le servirait aussi bien. L'animateur doit noter les frontières d'indépendance.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison construisent les événements et les champs dont dépendent les rapports, et elles ressentent la pression des objectifs statutaires. Elles doivent inclure les besoins de rapport dans la définition de terminé, garder une vue de travail franche et signaler quand un objectif fausse le travail. Des conversations précoces avec les personnes qui rapportent aident à éviter les reprises.

### Équipes de service et d'exploitation

Les équipes d'exploitation génèrent l'essentiel des données sous-jacentes et préparent souvent les rapports. Elles doivent documenter la filiation, automatiser l'extraction et tenir un journal des corrections. Elles sont bien placées pour expliquer comment lire un chiffre, et pour avertir quand il induit en erreur.

### Direction et gouvernance

Les dirigeants sont redevables de l'exactitude et de l'honnêteté de ce qui est rapporté. Ils doivent demander la traçabilité et le rapprochement, résister à la transformation des chiffres statutaires en objectifs individuels, protéger les personnes qui soulèvent des erreurs et soutenir l'engagement avec les organes de surveillance. La gouvernance doit revoir le registre des obligations et l'historique des rectifications.

### Clients et utilisateurs

Le public et les clients s'appuient sur l'information publiée pour tenir les services redevables. Ils ont besoin de données qu'ils peuvent trouver, lire et réutiliser, dans des formats accessibles, avec des explications claires de ce qu'elles signifient. Ils méritent aussi un avis rapide quand un incident les touche, comme les règles peuvent l'exiger.

## En pratique : un exemple de gestion des services

Un organisme national fournit des services de délivrance de permis en ligne utilisés par plusieurs millions de personnes par an. Il doit rendre compte chaque mois à un ministère, publier chaque année des données de performance et notifier son régulateur des incidents de service majeurs dans un délai fixe. Les chiffres ci-dessous sont illustratifs.

Une revue interne constate que l'organisme doit 31 rapports de natures diverses, et que seulement 22 figurent au registre des obligations avec un responsable nommé et une définition, soit une couverture de 71 %. Les chiffres mensuels sont assemblés à la main en quelque 60 heures, surtout en extrayant trois systèmes vers un tableur. La traçabilité est faible : pour le chiffre phare, la disponibilité, personne ne peut reproduire le chiffre de l'an dernier. La définition ministérielle de la disponibilité exclut la maintenance planifiée, et la vue de travail propre à l'organisme la compte, ce qui explique pourquoi les utilisateurs et le ministère voient des tableaux différents. L'organisme a atteint son objectif de délai de première réponse chaque mois, et le centre de services a commencé à accuser réception automatiquement des demandes pour l'atteindre, alors que le délai de résolution a augmenté. Deux rapports publiés ont échoué à un test d'accessibilité avec un lecteur d'écran.

Le responsable de la performance des services de l'organisme convient de changements avec le ministère et les équipes de livraison et d'exploitation. Le registre des obligations devient complet, avec responsables, définitions et dates. Les chiffres mensuels viennent de requêtes scriptées des systèmes d'incidents et de supervision, avec une transformation documentée et un modèle revu, ce qui ramène l'effort à environ 8 heures. Une note de rapprochement expose les définitions statutaire et interne de la disponibilité, les deux chiffres étant montrés dans le rapport. L'objectif de première réponse est apparié avec le délai de résolution et les contacts répétés dans la vue de travail, et le ministère accepte de voir les mesures compagnes. L'organisme corrige aussi un chiffre de disponibilité du trimestre précédent, en explique la cause et publie la correction. Les rapports publiés sont produits dans un modèle accessible, et un test avec lecteur d'écran est ajouté à la liste de vérification de mise en production.

Un an plus tard, la couverture des obligations est de 100 %, les rapports sont à l'heure, le taux de rectification est bas et chaque correction est expliquée, la traçabilité couvre tous les chiffres phares et l'effort de rapport a baissé d'environ 85 %. Le cabinet de la ministre demande un nouvel objectif de 99,95 % de disponibilité, les dirigeants de l'organisme en étant redevables. Le responsable de la performance des services explique la différence entre le chiffre statutaire et celui vécu par les utilisateurs et propose un objectif avec des mesures compagnes et une date de revue. La décision est consignée, et le ministère accepte une revue conjointe de la définition avant la prochaine année de rapport.

## Agilité, IA, automatisation et analytique

### Agilité

Concevez pour des exigences de rapport fixes et gardez la vue de rapport séparée de la vue d'apprentissage. La précaution est qu'un objectif de rapport peut fausser le travail qu'il décrit.

### IA

Là où l'IA soutient des processus réglementés, le rapport peut devoir montrer comment les décisions ont été prises et qui en était redevable. Vérifiez les exigences auprès de votre conseiller juridique et conservez des traces de l'usage de l'IA. La précaution est qu'une sortie d'IA utilisée dans un dépôt demande une vérification humaine.

### Automatisation

Bâtissez les rapports à partir des mêmes enregistrements que ceux qui servent à exploiter le service, et automatisez les contrôles qui s'exécutent avant la soumission. Mesurez le processus sur les rectifications. La précaution est que l'automatisation peut propager une erreur dans de nombreux rapports.

### Analytique

Rapportez avec les définitions utilisées et la date des données. La décision éclairée est ce qui doit être rapporté et d'où viennent les données. La précaution est que les définitions diffèrent selon le régime : évitez donc de supposer qu'une définition est universelle.

## Éclairage sectoriel

**Startup.** Les devoirs de rapport peuvent arriver avec un premier client d'entreprise ou un régulateur. Commencez par une courte liste d'obligations, produisez les rapports à partir de vos propres systèmes et évitez de bâtir un processus de rapport distinct. Soyez prudent en promettant des niveaux de service dans les contrats.

**Petite entreprise.** Les obligations sont souvent contractuelles ou liées à un seul régulateur. Tenez un calendrier, utilisez des modèles et documentez la manière dont les chiffres sont faits. Un petit rapport exact vaut mieux qu'un grand rapport hâtif.

**Grande entreprise.** De nombreuses obligations entre régions et régimes appellent un registre central, des définitions communes et un outillage d'extraction partagé. Méfiez-vous des demandes en double aux mêmes équipes. Utilisez une source unique de vérité pour les données d'incidents et de services, avec des vues pour chaque régime.

**Gouvernement et secteur public.** C'est le terrain propre de ce sujet. Prévoyez la législation, les demandes ministérielles, l'audit, les demandes d'accès à l'information et l'examen public. Publiez ouvertement les données là où la loi le permet, respectez les devoirs d'accessibilité, conservez les documents pendant la durée exigée et documentez les décisions. Résistez à la transformation des chiffres statutaires en objectifs de performance individuels, et considérez les effets des objectifs sur les citoyens et le personnel.

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de construire et de maintenir le registre des obligations, l'ingénierie de l'extraction automatisée et des modèles, le temps de revue et les tests d'accessibilité. Comparée à l'assemblage manuel, l'automatisation déplace l'effort d'un travail répété vers une construction unique et une maintenance légère.

Les rendements sont moins d'erreurs et de corrections, moins de temps du personnel consacré à l'assemblage, des réponses plus rapides aux demandes de surveillance et une plus grande confiance des régulateurs et du public. Construisez le dossier à partir de vos propres données : heures par rapport avant et après, nombre et effet des rectifications, délai pour répondre à une question de surveillance, et coût de toute pénalité ou constat d'audit critique évité. Évitez de citer des estimations du fardeau de conformité à moins de pouvoir en retracer la source et la méthode. Incluez le coût de l'engagement continu avec les organes de surveillance et comparez-le au coût des surprises (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Gérer par le seul chiffre statutaire.** Il fausse le travail. Gardez une vue de travail avec des mesures compagnes.
- **Deux jeux de chiffres non rapprochés.** La confiance s'effondre. Documentez et montrez les différences.
- **Des tableurs faits à la main comme système.** Ils cassent et dépendent des individus. Automatisez depuis les systèmes de référence.
- **Soumettre des rapports incomplets pour respecter une date.** C'est échanger un échec contre un autre. Convenez de prolongations ou soumettez avec des réserves claires.
- **Des corrections discrètes.** Elles minent la confiance. Corrigez ouvertement et expliquez.
- **Des objectifs individuels tirés de chiffres statutaires.** Ils récompensent le détournement et punissent le personnel honnête. Gardez les chiffres au niveau du service.
- **Des publications illisibles.** Une conformité de forme défait l'objectif. Publiez des données utilisables et accessibles.
- **Ignorer la vie privée dans la publication.** De petits nombres peuvent identifier des personnes. Agrégez et revoyez la divulgation.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Obligations et définitions | Connues de quelques personnes | Liste partielle | Registre avec responsables, définitions et dates ; définitions statutaires et internes rapprochées | Registre revu face aux changements de la loi ; rapprochement maintenu | Définitions coélaborées avec les organes de surveillance ; partagées entre organismes |
| Production et qualité | Assemblage manuel | Modèles, quelques scripts | Automatisation depuis les systèmes de référence avec filiation et revue indépendante | Rectifications analysées ; effort et ponctualité gérés | Rapports produits en continu ; les organes de surveillance accèdent directement aux données |
| Usage et publication | Rapport pour satisfaire la demande | Publication sur demande | Vue de travail séparée de la vue de rapport ; publication accessible et réutilisable | Mesures compagnes avec objectifs ; tests utilisateurs des publications | Données ouvertes et liées avec participation du public à la conception |

## Liste de vérification

- [ ] Un registre liste chaque obligation de rapport avec responsable, définition, source, échéance et organe destinataire.
- [ ] Les champs et événements requis sont intégrés aux services dès le départ.
- [ ] Les rapports sont produits à partir des systèmes de référence par des requêtes et des modèles versionnés.
- [ ] Chaque chiffre rapporté a une filiation documentée et un vérificateur nommé.
- [ ] Un lecteur indépendant revoit les rapports avant la soumission.
- [ ] Les définitions statutaires et internes sont rapprochées et les deux sont montrées.
- [ ] Les corrections sont consignées, expliquées et publiées rapidement.
- [ ] Les objectifs statutaires ont des mesures compagnes et du contexte dans le rapport.
- [ ] Les rapports et jeux de données publiés respectent la norme d'accessibilité applicable et la revue de vie privée.
- [ ] Une conversation avec chaque grand organe de surveillance sur ses besoins est au calendrier.

## Prompts d'IA

**Construisez un registre des obligations.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Rapprochez deux définitions.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Planifiez l'automatisation d'un rapport.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Passez en revue la lisibilité d'un rapport publié.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de rapport statutaire ou réglementé.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de rapport montre sa définition, son rapprochement, son vecteur de détournement et son garde-fou.

## Idées clés

- Traitez les obligations de rapport comme des intrants de conception, listées avec responsables, définitions et échéances.
- Produisez les rapports à partir des systèmes de référence avec filiation et revue indépendante.
- Gardez une vue de travail franche séparée de la vue de rapport, et rapprochez ouvertement les définitions.
- Appariez les objectifs statutaires avec des mesures compagnes, et ne les transformez jamais en objectifs individuels.
- Corrigez les erreurs ouvertement et rapidement.
- Publiez une information que le public peut trouver, lire et réutiliser, en protégeant la vie privée.

## Références et lectures complémentaires

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
