# Retour sur investissement et dossier d'affaires

**Un dossier d'affaires est une prévision : rédigez-le donc avec des plages et des hypothèses énoncées, financez le travail par étapes à mesure que les preuves arrivent, et comparez la prévision avec ce qui s'est passé pour que le prochain dossier soit plus honnête que le dernier.**

## Vue d'ensemble et motivation

Améliorer la manière dont les services informatiques sont livrés et exploités demande de l'argent et de l'attention, et chaque proposition entre en concurrence avec d'autres. Une nouvelle plateforme, un changement d'effectifs, un programme d'automatisation et une initiative de qualité promettent tous un avenir meilleur. Les dirigeants ont besoin d'un moyen de les comparer, et les équipes d'un moyen de plaider pour le travail qui compte. Le dossier d'affaires est l'outil traditionnel, et le retour sur investissement son chiffre le plus connu.

Un [dossier d'affaires](https://en.wikipedia.org/wiki/Business_case) est une justification d'un projet ou d'une entreprise proposés, qui expose généralement le problème, les options, les coûts, les bénéfices et les risques. Le [retour sur investissement](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) compare le gain d'un investissement avec son coût. Le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) compte tout ce qu'un actif ou un service coûte sur sa vie, y compris l'achat, l'exploitation, le soutien et l'élimination. Les sujets antérieurs de cette partie fournissent les intrants : le coût des actifs, des logiciels, des enregistrements de configuration, des services et des ressources infonuagiques (voir le sujet 7.5, Coût du service et économie unitaire, et le sujet 7.6, Métriques FinOps et de coûts du nuage), et le sujet sur les bénéfices donne les preuves de résultats (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Deux tensions rendent les dossiers d'affaires difficiles à bien faire.

- **Les dossiers d'affaires sont des prévisions, écrites par des personnes qui veulent une approbation.** L'auteur souhaite souvent que la proposition réussisse, et l'incitation à gonfler les bénéfices et à rogner les coûts est forte. Le [biais d'optimisme](https://en.wikipedia.org/wiki/Optimism_bias) est la tendance à attendre de meilleurs résultats que ceux qui sont probables, et il est bien documenté dans la planification de projet. Le correctif est la [prévision par classe de référence](https://en.wikipedia.org/wiki/Reference_class_forecasting), qui fonde les estimations sur les résultats réels de projets passés semblables plutôt que sur une histoire construite par le bas. Votre propre historique de dossiers passés est la meilleure classe de référence dont vous disposez.
- **La livraison continue change ce qu'un dossier d'affaires peut promettre.** L'approche agile suppose que les exigences et la valeur se découvrent à mesure que le travail avance. Un périmètre, un prix et un ensemble de bénéfices fixés un an à l'avance entrent en conflit avec cela. La réponse agile est de financer par étapes : une petite première étape pour apprendre, puis un financement supplémentaire à mesure que les preuves arrivent. Cela correspond à l'objectif de livraison continue et de collaboration continue avec les parties prenantes, et à une fonction financière qui veut du contrôle. Cela signifie aussi que le dossier d'affaires est un document vivant, revu à mesure que les hypothèses sont testées (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Quelques idées de la finance aident. La [valeur temps de l'argent](https://en.wikipedia.org/wiki/Time_value_of_money) dit qu'une unité monétaire aujourd'hui vaut plus qu'une unité plus tard : les bénéfices plus lointains comptent donc moins. La [valeur actuelle nette](https://en.wikipedia.org/wiki/Net_present_value) (VAN) convertit un flux de coûts et de bénéfices futurs en une valeur unique aujourd'hui à l'aide d'un taux d'actualisation. Le [délai de récupération](https://en.wikipedia.org/wiki/Payback_period) est le temps pour récupérer la mise initiale. Chacun est un résumé et chacun cache des hypothèses : énoncez-les. Le [coût d'opportunité](https://en.wikipedia.org/wiki/Opportunity_cost) rappelle que le coût de choisir une option est la valeur de la meilleure solution de rechange abandonnée. Un [coût irrécupérable](https://en.wikipedia.org/wiki/Sunk_cost) est de l'argent déjà dépensé qui ne peut être récupéré et qui ne doit pas dicter la décision de continuer.

Chaque chiffre d'un dossier d'affaires peut être détourné, en choisissant une période généreuse, un taux d'actualisation favorable ou des bénéfices difficiles à vérifier. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique au dossier lui-même : quand l'approbation dépend d'un ROI affiché, les auteurs apprennent à le produire (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ci-dessous incluent donc un contrôle de la qualité des prévisions passées.

## Principes clés

- **Traitez le dossier comme une prévision avec une plage.** Montrez des résultats bas, attendu et haut, et énoncez les hypothèses derrière chacun.
- **Comptez le coût complet.** Incluez l'exploitation, le soutien, la formation, l'effort de changement et l'élimination, autant que la construction.
- **Soyez explicite sur les bénéfices et leurs preuves.** Séparez les économies de coûts, les coûts évités, les revenus et la réduction de risque, et dites comment chacun sera mesuré.
- **Financez par étapes.** Libérez l'argent à mesure que les hypothèses sont testées et que le tableau s'améliore.
- **Comparez avec les solutions de rechange, y compris ne rien faire.** Le coût de rester en place fait partie du dossier.
- **Apprenez de votre propre historique.** Comparez les prévisions aux résultats et ajustez.
- **Ignorez les coûts irrécupérables.** Décidez sur ce qui est devant vous.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Retour sur investissement | Gain net relatif au coût sur une période énoncée | (bénéfices totaux moins coûts totaux) / coûts totaux sur la période | pourcentage | Dossier d'affaires, grand livre, registre des bénéfices | Gestion financière des services ; amélioration continue | Revue des résultats face au financement | À la décision et à chaque revue |
| Coût total de possession | Coût sur toute la vie d'un service ou d'un actif sur une période énoncée | coûts d'acquisition + exploitation + soutien + changement + formation + élimination sur la période | monnaie | Grand livre, modèles de coûts, contrats de fournisseurs | Gestion financière des services ; gestion des actifs informatiques | Coût d'une équipe pérenne et de ses plateformes | À la décision et chaque année |
| Délai de récupération | Temps pour que les bénéfices nets cumulés égalent l'investissement initial | moment où bénéfices cumulés moins coûts cumulés atteint zéro | mois | Flux de trésorerie du dossier d'affaires | Gestion financière des services | Délai avant première valeur, étendu à la récupération des coûts | À la décision et à chaque revue |
| Valeur actuelle nette | Valeur actuelle des bénéfices attendus moins valeur actuelle des coûts, à un taux d'actualisation énoncé | somme sur les périodes de (bénéfice moins coût) / (1 + taux d'actualisation) à la puissance de la période | monnaie | Flux de trésorerie du dossier d'affaires, politique financière sur le taux d'actualisation | Gestion financière des services | Priorisation fondée sur la valeur | À la décision |
| Exactitude de l'estimation des coûts | Rapport entre le coût réel et le coût estimé pour les initiatives achevées | coût réel / coût estimé à l'approbation, par initiative et sous forme de distribution | rapport | Enregistrements de dossiers d'affaires et grand livre | Gestion financière des services ; amélioration continue | Exactitude des prévisions | Trimestrielle |
| Exactitude de l'estimation des bénéfices | Rapport entre le bénéfice réalisé et le bénéfice attendu pour les initiatives achevées, selon les règles de preuve des bénéfices | bénéfice réalisé / bénéfice attendu à l'approbation, par initiative et sous forme de distribution | rapport | Enregistrements de dossiers d'affaires et registre des bénéfices | Amélioration continue ; gouvernance du système de valeur du service | Revue des résultats avec les parties prenantes | Trimestrielle |
| Taux d'arrêt fondé sur les preuves | Part des initiatives financées qui ont été arrêtées ou remodelées à un jalon parce que des preuves ont changé le tableau | initiatives arrêtées ou remodelées sur preuves à un jalon / initiatives atteignant un jalon | pourcentage | Journal des décisions de jalons | Amélioration continue ; gouvernance du portefeuille | Apprentissage à partir du travail livré | Trimestrielle |

Énoncez la période, le taux d'actualisation et ce qui compte comme un coût ou un bénéfice pour chaque chiffre, et consignez-les avec le dossier. Le ROI et la VAN en dépendent fortement : deux dossiers ne sont donc comparables que s'ils suivent les mêmes règles. L'exactitude des coûts et des bénéfices se montre sous forme de distributions, par exemple le rapport médian et la dispersion, sur les initiatives passées, non comme une moyenne unique. Un faible taux d'arrêt fondé sur les preuves peut signifier une bonne sélection, ou des jalons qui ne disent jamais non : lisez-le donc avec les mesures d'exactitude.

## Recommandations

### Rédiger honnêtement le dossier

**1. Commencez par le problème et les options.** Décrivez le problème, qui le vit et ce qu'il coûte maintenant. Listez au moins trois options : ne rien faire, un pas minimal et le changement proposé, plus toute solution de rechange sérieuse. « Ne rien faire » a des coûts, comme la poursuite d'incidents ou un risque croissant, et les inclure rend la comparaison équitable.

**2. Comptez le coût total de possession sur la vie du changement.** Incluez la construction, les licences, l'hébergement, l'exploitation, le soutien, la formation, la migration, le temps des personnes qui s'en serviront et l'élimination. Les coûts qui arrivent après le lancement sont ceux qu'on omet le plus souvent. Utilisez une période qui correspond à la vie du bénéfice, et dites laquelle.

**3. Décrivez chaque bénéfice et la manière dont il sera mesuré.** Séparez les sortes. Les économies de coûts réduisent la dépense réelle. Les coûts évités préviennent une dépense qui aurait autrement eu lieu, et sont plus difficiles à vérifier. Les bénéfices de revenus dépendent du comportement du marché. La réduction de risque diminue la probabilité ou l'impact d'une perte, et s'énonce mieux en termes d'un scénario précis. Pour chacun, nommez l'indicateur, la référence et le responsable (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**4. Donnez des plages, et dites ce qui les détermine.** Pour les coûts et les bénéfices, donnez une estimation basse, attendue et haute, avec les principales hypothèses. Une [analyse de sensibilité](https://en.wikipedia.org/wiki/Sensitivity_analysis) montre comment le résultat change quand une hypothèse change, et quelles hypothèses comptent le plus. Si le dossier ne marche que lorsque chaque hypothèse est généreuse, dites-le. La simulation peut combiner des plages, bien qu'elle puisse aussi donner un faux confort si les intrants sont des suppositions.

### Corriger l'optimisme

**5. Utilisez votre propre historique comme classe de référence.** Regardez les résultats réels de coûts et de bénéfices de vos initiatives passées semblables, et comparez-les avec ce qui avait été prévu. Si les initiatives passées ont coûté en moyenne 30 % de plus que l'estimation, une nouvelle estimation qui l'ignore risque de répéter l'erreur. Ajustez, ou au moins montrez l'ajustement. Les mesures d'exactitude des coûts et des bénéfices ci-dessus construisent cet enregistrement.

**6. Faites relire le dossier par quelqu'un d'extérieur à l'équipe.** Un collègue de la finance ou d'une autre équipe, sans intérêt dans le résultat, lit le dossier pour y chercher des coûts manquants, des bénéfices généreux et des hypothèses non testées. Rendez la revue routinière et constructive. Un dossier qui y résiste est plus solide.

**7. Séparez, quand c'est possible, ceux qui estiment et ceux qui plaident.** Les équipes de livraison sont bonnes pour estimer l'effort, et les commanditaires pour juger la valeur. Quand la même personne veut une approbation, les estimations dérivent. Consignez qui a produit quels chiffres.

### Financer par étapes

**8. Libérez le financement par paliers liés aux preuves.** Financez une petite première étape pour tester l'hypothèse la plus risquée : construire une tranche mince, mener un pilote ou mesurer la référence. Définissez d'avance quelles preuves justifieraient l'étape suivante, lesquelles vous feraient remodeler le travail et lesquelles vous feraient arrêter. C'est l'approche agile du risque appliquée à l'argent, et elle plafonne le coût de se tromper.

**9. Décidez à chaque étape sur ce qui est devant vous.** L'argent déjà dépensé est un coût irrécupérable, et il ne doit pas peser sur la décision de continuer. Demandez si le coût restant est justifié par le bénéfice attendu restant, compte tenu de ce que vous avez appris. Donnez aux équipes la permission d'arrêter, et traitez un arrêt bien étayé comme un bon résultat.

**10. Gardez les parties prenantes dans la boucle.** Revoyez le dossier avec le commanditaire et le responsable du bénéfice à chaque étape. La collaboration avec les parties prenantes tout au long est un objectif agile central, et elle empêche le dossier de devenir un document que personne ne lit après l'approbation.

### Vérifier et apprendre

**11. Revoyez le résultat face au dossier.** Aux points de revue convenus, comparez le coût réel et le bénéfice réalisé avec la prévision. Consignez les rapports, les raisons des écarts et ce que vous changeriez dans le prochain dossier. Rendez la revue sans blâme et factuelle, car le rapport honnête en dépend.

**12. Rapportez la distribution de l'exactitude aux décideurs.** Montrez, sur les initiatives passées, comment les prévisions se comparaient aux résultats. Un portefeuille où les bénéfices manquent régulièrement d'une marge semblable dit aux dirigeants dans quelle mesure faire confiance à un nouveau dossier, et donne aux auteurs une raison d'être honnêtes. Appariez-le avec le taux d'arrêt fondé sur les preuves pour voir si les jalons fonctionnent.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Retour sur investissement | Choisir une longue période ou compter des bénéfices mous ; omettre le coût d'exploitation | Règles fixes de période et de périmètre des coûts ; qualité des preuves des bénéfices ; revue indépendante |
| Coût total de possession | Omettre le soutien, la formation, l'effort de changement ou l'élimination ; utiliser des volumes optimistes | Liste de vérification des catégories de coûts ; comparer avec le TCO réel de travaux passés semblables |
| Délai de récupération | Définir le début tard ; compter des bénéfices qui ne sont pas réalisés | Définition de l'horloge fixe ; comparer avec l'exactitude du bénéfice réalisé |
| Valeur actuelle nette | Choisir un faible taux d'actualisation ; allonger l'horizon | Taux d'actualisation fixé par la politique financière ; analyse de sensibilité montrée |
| Exactitude de l'estimation des coûts | Réviser l'estimation de référence après coup ; exclure les dépassements comme changements de périmètre | Estimation figée à l'approbation ; consigner les changements de périmètre avec approbation ; montrer le coût total à terminer |
| Exactitude de l'estimation des bénéfices | Compter des bénéfices qui n'ont pas été mesurés ; redéfinir le bénéfice | Règles du registre des bénéfices ; confirmation par un responsable extérieur à l'équipe de livraison |
| Taux d'arrêt fondé sur les preuves | Arrêter du travail de faible valeur pour gonfler le taux ; ne jamais rien arrêter | Lire avec les mesures d'exactitude ; revoir les raisons des arrêts et des poursuites |

Une lecture saine est un portefeuille avec un bilan : des prévisions un peu optimistes d'une manière connue, des dossiers qui incluent des plages et une sensibilité, et des jalons qui arrêtent parfois du travail sur preuves.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Grand dossier d'affaires initial | Engagement clair et contrôle | Fige les hypothèses ; invite à l'optimisme |
| Financement par étapes | Limite le coût de se tromper ; apprend tôt | Demande de la discipline aux jalons ; moins de certitude pour la planification |
| Chiffre de ROI unique | Simple à comparer | Cache les hypothèses ; facile à détourner |
| Plage avec sensibilité | Honnête sur l'incertitude | Plus difficile à comparer ; peut sembler vague |
| Dossier qualitatif | Capte les raisons stratégiques et de risque | Difficile à comparer et à vérifier |
| Dossier quantitatif | Comparable et testable | Fausse précision ; omet ce qui ne peut être compté |
| Classe de référence externe | Corrige l'optimisme | Peut ne pas convenir à votre contexte |
| Classe de référence de votre historique | Convient à votre contexte | Demande un enregistrement ; petits échantillons |

La réponse en bref est d'utiliser le financement par étapes, les plages et votre propre historique, avec un court exposé qualitatif de ce que les chiffres manquent. Utilisez le ROI, la VAN et le délai de récupération comme des résumés, non comme des verdicts.

## Questions à discuter avec votre équipe

**1. Dans quelle mesure nos cinq derniers dossiers d'affaires se sont-ils trompés, et dans quel sens ?**
Rassemblez les coûts et bénéfices prévus et réels des initiatives récentes. Calculez les rapports. Regardez la dispersion et si les erreurs penchent d'un côté. L'animateur doit résister aux explications dans un premier temps et simplement consigner le schéma. Discutez ensuite de ce que cela implique pour le prochain dossier.

**2. Quelle est l'hypothèse la plus risquée de notre proposition actuelle, et à quel faible coût pourrions-nous la tester ?**
Listez les hypothèses et classez-les selon la part du dossier qui en dépend et notre degré d'incertitude. Pour la première, concevez un petit test. La réponse façonne la première étape de financement.

**3. Que coûte ne rien faire, et l'avons-nous mis dans le dossier ?**
Décrivez la trajectoire probable si la proposition n'est pas approuvée : coûts d'incidents qui continuent, entretien croissant, risque grandissant. Estimez-la avec une plage. Vérifiez que le dossier se compare équitablement avec elle.

**4. Quels coûts apparaissent toujours tard dans nos projets ?**
Pensez à l'exploitation, à la formation, à la migration et au démantèlement. Vérifiez le dossier pour chacun. Ajoutez au modèle une liste de vérification standard de catégories de coûts.

**5. Qui, hors de l'équipe, a contesté nos chiffres, et qu'a-t-il dit ?**
Revoyez la dernière revue indépendante. S'il n'y en a pas eu, décidez qui devrait faire la prochaine. La conversation doit faire comprendre que la revue est un service rendu au dossier, non une attaque.

**6. Quand avons-nous arrêté quelque chose pour la dernière fois parce que les preuves avaient changé, et comment l'avons-nous vécu ?**
Rappelez une initiative arrêtée ou remodelée. Discutez de la façon dont cela a été reçu et de ce que cela a fait pour la confiance. Convenez de la manière de faire ressentir le prochain arrêt comme un apprentissage.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison fournissent les estimations de coûts et apprennent des étapes de financement. Elles doivent estimer en plages, consigner les coûts réels et parler quand des hypothèses se brisent. Le financement par étapes leur permet de se concentrer sur l'apprentissage de ce qui compte le plus, et un arrêt fondé sur des preuves doit compter comme un succès.

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent une grande part du coût après le lancement et sont souvent laissées hors du dossier. On doit leur demander les coûts d'exploitation, l'effort de soutien et les risques, et elles doivent vérifier les bénéfices qui dépendent de leur travail, comme la réduction des incidents. Elles peuvent vérifier les affirmations d'économies d'exploitation à partir de leurs propres données.

### Direction et gouvernance

Les dirigeants décident de ce qui est financé et fixent le climat d'honnêteté. Ils doivent demander des plages et des hypothèses, revoir le bilan des prévisions, financer par étapes et accepter un arrêt comme un résultat normal. La gouvernance doit exiger une revue indépendante des grands dossiers et une vérification après la mise en œuvre, et regarder le portefeuille des résultats.

### Clients et utilisateurs

Les utilisateurs et les responsables métier supportent les bénéfices et la perturbation. Ils doivent faire partie du dossier, aider à définir le problème et le bénéfice, et être informés de ce qui a été décidé et pourquoi. Leur expérience après la livraison est le meilleur test pour savoir si le dossier avait raison.

## En pratique : un exemple de gestion des services

Le groupe informatique d'une agence provinciale de santé propose un programme pour automatiser les demandes d'accès courantes et réduire le traitement manuel. Les chiffres ci-dessous sont illustratifs.

La première ébauche de la proposition affirme un ROI de 240 % sur cinq ans, fondé sur 18 000 demandes par an, un coût moyen de traitement manuel et l'automatisation complète de 80 % des demandes. La partenaire financière suggère d'appliquer l'historique propre du groupe. Elle sort huit initiatives passées : le coût réel a été en médiane de 1,35 fois l'estimation, avec une plage de 1,0 à 1,9, et le bénéfice réalisé en médiane de 0,6 du bénéfice attendu. Le groupe constate aussi que le chiffre du volume de demandes provenait d'une seule année chargée, et que l'estimation des coûts omettait la formation et le temps du personnel qui revoit les exceptions.

L'équipe réécrit le dossier avec des plages. En utilisant l'historique des coûts, le coût attendu monte d'un tiers. En utilisant l'historique des bénéfices, le bénéfice attendu est réduit d'environ la moitié. Le dossier révisé montre un ROI dans une plage allant de légèrement négatif à environ 70 %, un délai de récupération entre 20 et 40 mois et une VAN positive dans les cas médian et attendu au taux d'actualisation de la politique financière et négative dans le cas bas. L'analyse de sensibilité montre que la part des demandes qui peuvent être automatisées compte le plus. La proposition est remodelée en étapes. La première étape automatise les trois types de demandes les plus courants, avec un budget d'environ un cinquième du total, pour tester la part d'automatisation et mesurer le temps de traitement de référence. Les critères de la deuxième étape sont écrits : au moins 50 % de ces types de demandes entièrement automatisés, et un temps de traitement par demande réduit d'un montant énoncé, avec confirmation du responsable du bénéfice.

Après la première étape, 58 % des trois types de demandes sont automatisés, et les exceptions prennent plus de temps que prévu. L'équipe remodèle la deuxième étape pour améliorer le traitement des exceptions avant d'étendre à d'autres types. Le conseil de l'agence demande pourquoi le chiffre de ROI a baissé. Le directeur explique que le chiffre antérieur supposait une automatisation complète et aucun historique de dépassement, et que la nouvelle plage est plus honnête. La décision est consignée. Le remodelage de la deuxième étape fondé sur les preuves est inscrit au journal, et les tableaux d'exactitude des coûts et des bénéfices du portefeuille sont mis à jour.

## Agilité, IA, automatisation et analytique

### Agilité

Financez le travail par étapes à mesure que les preuves arrivent et vérifiez la prévision après la mise en production avec les parties prenantes. La précaution est qu'un seul grand dossier d'affaires invite à des hypothèses optimistes.

### IA

Les dossiers d'affaires de l'IA reposent souvent sur des affirmations de productivité : consignez donc la référence, le changement mesuré et les effets sur la qualité, et comparez la prévision au résultat. La précaution est que les affirmations des fournisseurs d'IA peuvent ne pas se transposer à votre contexte : testez donc avec un pilote avant de passer à l'échelle.

### Automatisation

Automatisez la collecte des données de coûts et de bénéfices là où elles existent, et mesurez le processus de dossier d'affaires sur l'exactitude des estimations. La précaution est que les bénéfices d'automatisation sont souvent revendiqués en heures économisées, qui ne deviennent de l'argent que si les heures sont utilisées.

### Analytique

Montrez les plages et les hypothèses, et suivez l'exactitude des estimations dans le temps. La décision éclairée est de continuer, de changer ou d'arrêter. La précaution est que le retour sur investissement dépend des hypothèses : montrez-les donc à côté du chiffre.

## Éclairage sectoriel

**Startup.** Les ressources sont rares et la vitesse d'apprentissage compte. Utilisez un dossier d'une page avec l'hypothèse la plus risquée et un test peu coûteux, financez par petites étapes et évitez les modèles financiers élaborés. C'est souvent l'autonomie financière, non la VAN, qui est la contrainte déterminante.

**Petite entreprise.** Le propriétaire est le commanditaire et la fonction financière. Concentrez-vous sur le délai de récupération et la trésorerie, incluez le temps du personnel et comparez avec les options de ne rien faire et d'acheter. Méfiez-vous des calculateurs de ROI fournis par les fournisseurs, qui tendent à être généreux.

**Grande entreprise.** La gouvernance du portefeuille, la politique financière sur les taux d'actualisation et de nombreuses propositions concurrentes rendent la cohérence importante. Utilisez un modèle standard avec des catégories de coûts obligatoires, une revue indépendante pour les grands dossiers et une revue après la mise en œuvre. Gardez un enregistrement de l'exactitude des prévisions par commanditaire et par type d'initiative comme outil de portefeuille, non comme classement de personnes.

**Gouvernement et secteur public.** Les organismes publics suivent souvent des orientations formelles d'évaluation, comme le Green Book britannique, qui expose comment évaluer les options, traiter le biais d'optimisme et considérer l'optimisation des ressources, y compris les bénéfices non financiers. Les bénéfices peuvent être sociaux et difficiles à monétiser, et la transparence et l'audit comptent. Utilisez les orientations qui s'appliquent à vous, documentez les hypothèses et consignez les preuves des bénéfices (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Ce sujet porte lui-même sur le dossier d'affaires : le point est donc le coût de bien le faire. Écrire un dossier soigné prend des jours, non des heures, et la revue indépendante en prend plus. Suivre l'exactitude des coûts et des bénéfices demande un simple enregistrement de la prévision et du résultat de chaque initiative, ce que beaucoup d'organisations n'ont pas. Le financement par étapes ajoute des réunions de gouvernance.

Le rendement est une meilleure allocation d'un argent rare et moins de grands échecs. Des dossiers honnêtes réduisent les surprises qui suivent les dossiers optimistes. Un bilan permet aux dirigeants d'actualiser correctement les nouveaux dossiers, ce qui rend tout le portefeuille plus fiable. Construisez l'argument à partir de votre propre historique : les rapports du coût réel au coût estimé et du bénéfice réel au bénéfice estimé, l'argent dépensé pour des initiatives abandonnées plus tard et le coût de la revue comparé aux dépassements qu'elle a évités. Évitez de citer des études sur les taux d'échec de projets à moins de pouvoir retracer la méthode et sa pertinence pour votre type de travail.

## Anti-modèles et pièges

- **Un chiffre de ROI unique présenté comme un fait.** Il cache les hypothèses. Montrez des plages et la sensibilité.
- **Omettre le coût d'exploitation.** La construction n'est qu'une fraction du coût sur la vie. Comptez toute la vie.
- **Compter des bénéfices mous comme durs.** Les coûts évités et les affirmations de productivité demandent des preuves. Étiquetez-les et testez-les.
- **Prévoir seulement par le bas.** Cela répète l'optimisme. Comparez avec votre propre historique.
- **Tout le financement d'avance.** Cela fige des suppositions. Financez par étapes avec des jalons de preuves.
- **Continuer à cause de l'argent déjà dépensé.** Décidez sur ce qui est devant vous.
- **Corriger ses propres copies.** Faites revoir les coûts et les bénéfices par un lecteur indépendant.
- **Ne jamais revisiter le dossier.** Sans revues de résultats, rien ne s'améliore. Comparez les prévisions aux résultats.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Rédaction du dossier | Argumentaire informel avec un chiffre phare | Modèle avec coûts et bénéfices | Modèle standard avec liste de vérification du TCO, plages et sensibilité | Ajustement par l'historique propre appliqué ; revue indépendante | Dossiers coélaborés avec les responsables métier et la finance ; hypothèses partagées dans le portefeuille |
| Financement | Tout d'avance | Jalons | Financement par étapes avec critères de preuve | Les jalons remodèlent ou arrêtent régulièrement le travail sur preuves | Le financement du portefeuille s'ajuste entre initiatives selon les preuves |
| Apprentissage | Aucun suivi | Revue occasionnelle | Revue après la mise en œuvre face au dossier | Exactitude des coûts et des bénéfices suivie sous forme de distributions et utilisée dans les nouveaux dossiers | Apprentissage partagé dans l'organisation et avec les partenaires ; la méthode s'améliore |

## Liste de vérification

- [ ] Le dossier liste des options, y compris ne rien faire.
- [ ] Le coût total de possession couvre la construction, l'exploitation, le soutien, la formation, le changement et l'élimination.
- [ ] Chaque bénéfice a un type, un indicateur, une référence et un responsable.
- [ ] Les coûts et les bénéfices sont donnés en plages avec leurs déterminants énoncés.
- [ ] Une analyse de sensibilité montre quelles hypothèses comptent le plus.
- [ ] Les estimations sont comparées à votre propre historique d'initiatives semblables.
- [ ] Un réviseur indépendant a lu le dossier.
- [ ] Le financement est par étapes, avec des critères de preuve pour continuer, remodeler ou arrêter.
- [ ] Les résultats sont revus face au dossier aux dates convenues.
- [ ] L'exactitude des coûts et des bénéfices sur les initiatives passées est rapportée aux décideurs.

## Prompts d'IA

**Mettez un dossier d'affaires à l'épreuve.**

```text
Here is a summary of our business case for [initiative]: costs [list with
ranges], benefits [list with types and ranges], period [years], discount rate
[rate set by finance], and assumptions [list]. Identify missing cost
categories, benefits that need stronger evidence, assumptions that dominate the
result, and optimism risks. Suggest a sensitivity analysis and a staged
funding structure. Do not invent figures. List your assumptions and questions
I should answer.
```

**Construisez une classe de référence à partir de notre historique.**

```text
We have these past initiatives with forecast and actual cost and benefit:
[paste a table]. Calculate the ratios of actual to forecast, describe the
median and spread, comment on any pattern by type of initiative, and suggest
how to use this when estimating a new initiative. Warn me where the sample is
too small to rely on. Do not use outside benchmarks. List your assumptions.
```

**Concevez des jalons de financement.**

```text
For [initiative], propose three funding stages. For each, state the riskiest
assumption to test, the evidence that would justify moving on, the evidence
that would make us reshape the work, and the evidence that would make us stop.
Keep each stage small and cheap. Do not assume any particular delivery method.
List your assumptions and decisions that need leadership input.
```

**Rédigez une revue après la mise en œuvre.**

```text
Draft a one-page post-implementation review for [initiative]. Inputs: the
original case [summary], actual cost [figures], realized benefit and evidence
[summary], and what changed along the way [list]. Include cost and benefit
ratios, reasons for differences, what we would change in the next case, and
questions for the benefit owner. Keep the tone factual and blameless. List your
assumptions and any claim that needs checking.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de dossier d'affaires ou de ROI.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique financière énonce sa période, ses hypothèses, son vecteur de détournement et son garde-fou.

## Idées clés

- Un dossier d'affaires est une prévision : montrez des plages, des hypothèses et la sensibilité.
- Comptez le coût total de possession sur la vie du changement, et comparez avec ne rien faire.
- Corrigez l'optimisme en vous servant de votre propre historique de prévisions et de résultats.
- Financez par étapes, décidez sur ce qui est devant vous et traitez un arrêt fondé sur des preuves comme un succès.
- Revoyez les résultats face au dossier et rapportez l'exactitude aux décideurs.
- Utilisez le ROI, la VAN et le délai de récupération comme des résumés aux règles énoncées, non comme des verdicts.

## Références et lectures complémentaires

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
