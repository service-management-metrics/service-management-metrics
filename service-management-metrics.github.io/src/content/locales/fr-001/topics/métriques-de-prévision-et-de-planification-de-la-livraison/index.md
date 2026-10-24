# Métriques de prévision et de planification de la livraison

**Les équipes qui livrent du logiciel en continu et exploitent aussi des services en production ont besoin de prévisions honnêtes, pas d'engagements arrachés à des estimations : planifiez donc à partir du flux de travail terminé, donnez des fourchettes plutôt que des dates, et gardez tout chiffre de planification propre à une équipe hors des comparaisons et hors des objectifs.**

## Vue d'ensemble et motivation

Les parties prenantes posent deux questions à chaque équipe de livraison : « Quand ce sera terminé ? » et « Combien pouvez-vous prendre en charge ? » La réponse agile part des visées des principes du Manifeste agile : livrer en continu du logiciel utile, collaborer chaque jour avec les parties prenantes, réfléchir et s'améliorer régulièrement, et bâtir le travail autour de personnes motivées à qui l'on fait confiance pour le mener à bien. Une prévision qui sert ces visées est une conversation entre parties prenantes sur les résultats probables et le risque. Ce n'est pas une promesse arrachée sous pression.

Les équipes qui exploitent des services en production ont une difficulté de plus. Leur capacité est partagée entre le changement planifié, le travail d'incident non planifié, les demandes de service et l'amélioration. Un plan qui ignore la charge d'exploitation échouera pour des raisons que personne n'avait planifiées (voir le sujet 2.9, Travail opérationnel et travail non planifié). La gestion des services informatiques (ITSM), telle que codifiée par ITIL, y voit une question de capacité et de demande. La [planification de la capacité](https://en.wikipedia.org/wiki/Capacity_planning) est le processus qui détermine la capacité dont une organisation a besoin pour répondre à une demande changeante. La pratique agile de planifier en fonction de ce que l'équipe peut réellement terminer est la même idée à l'échelle de l'équipe.

Il y a deux grandes façons de prévoir la livraison :

- **À partir d'estimations.** L'équipe dimensionne les éléments dans une unité, additionne les tailles et divise par un rythme. Beaucoup d'équipes utilisent un dimensionnement relatif comme les [points de récit](https://en.wikipedia.org/wiki/Story_point), et le rythme s'appelle la [vélocité](https://en.wikipedia.org/wiki/Velocity_(software_development)). C'est rapide à démarrer, cela dépend des habitudes d'estimation de l'équipe, et cela n'a de sens qu'à l'intérieur d'une seule équipe.
- **À partir de données de flux.** L'équipe utilise son propre relevé du travail terminé : combien d'éléments elle achève par semaine (débit) et combien de temps les éléments prennent du début à la fin (temps de cycle). Parce que ce sont des décomptes et des temps écoulés, et non des opinions, ils résistent à la dérive et peuvent être combinés à la simulation pour donner une fourchette de résultats. Cette approche vient de la tradition du flux, dont fait partie le Kanban Guide, et fonctionne avec n'importe quelle façon d'organiser le travail, y compris les équipes qui livrent en continu sans période de planification fixe.

Ce sujet penche vers la seconde approche, parce que la livraison continue de logiciel produit un flux régulier d'éléments terminés que les données de flux décrivent directement (voir le sujet 2.1, Mesures de flux, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Il couvre quand même la première, parce que beaucoup d'équipes utilisent des estimations, et parce que le mésusage de la vélocité est l'une des façons les plus courantes dont les métriques de livraison dérapent.

Les prévisions sont de la [prévision](https://en.wikipedia.org/wiki/Forecasting) d'un futur incertain, et l'incertitude est précisément le sujet. L'idée du [cône d'incertitude](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) dit que les premières estimations sont les moins certaines. La [erreur de planification](https://en.wikipedia.org/wiki/Planning_fallacy) dit que les gens sous-estiment le temps que prendront leurs propres plans même quand ils savent que des plans semblables ont pris du retard. Une bonne mesure de prévision nomme cela et mesure la fréquence à laquelle les prévisions se réalisent.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) compte ici, parce que les prévisions et les plans deviennent facilement des promesses, puis des objectifs. Dès qu'une équipe est jugée sur le respect d'une date, elle cache les risques, rogne la qualité ou gonfle l'estimation par prudence (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Prévoyez à partir du travail terminé.** Ce que l'équipe a livré est une meilleure preuve que ce que quiconque croit qu'elle livrera.
- **Donnez une fourchette avec une probabilité.** « Probablement d'ici la fin du mois prochain, très probablement d'ici la fin du suivant » vaut mieux qu'une date unique.
- **Planifiez avec la capacité réelle.** Incluez le travail d'exploitation, gardez du temps pour l'amélioration et ne planifiez pas à pleine utilisation.
- **Gardez les estimations locales.** Toute unité de dimensionnement est un outil de planification privé d'une équipe, jamais une base de comparaison.
- **Mesurez la qualité des prévisions, pas seulement la livraison.** Une prévision juste pour de mauvaises raisons est de la chance.
- **Traitez la prévision comme partagée.** Les parties prenantes et l'équipe la construisent ensemble et la révisent quand les faits changent.
- **Faites confiance à l'équipe.** Les personnes à qui l'on fait confiance et que l'on soutient donnent des prévisions honnêtes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réussite des prévisions | Part des prévisions pour lesquelles le résultat réel est tombé dans la fourchette annoncée | prévisions dont le résultat réel était dans la fourchette annoncée / prévisions faites | pourcentage | Journal des prévisions et relevés de livraison | Gestion de la capacité et de la performance ; amélioration continue | Exactitude des prévisions dans les conversations de planification | Mensuelle |
| Largeur de la fourchette de prévision | Largeur de la fourchette annoncée, rapportée à la prévision médiane | (borne supérieure moins borne inférieure) / prévision médiane | ratio | Journal des prévisions | Gestion de la capacité et de la performance | Rétrécissement du cône d'incertitude | Mensuelle |
| Réussite des objectifs de livraison | Part des objectifs de livraison annoncés qui ont été atteints pour la période, jugée sur le résultat | objectifs atteints / objectifs fixés | pourcentage | Enregistrements d'objectifs convenus avec les parties prenantes | Gestion des niveaux de service ; amélioration continue | Revue des résultats avec les parties prenantes | Mensuelle ou à chaque livraison d'un objectif |
| Taux de changement de périmètre | Part du travail engagé qui a été ajoutée, retirée ou redimensionnée après la prévision | éléments ajoutés ou retirés après la prévision / éléments de la prévision d'origine | pourcentage | Historique des changements du gestionnaire de travail | Maîtrise des changements ; gestion des niveaux de service | Adaptation du backlog aux retours | Mensuelle |
| Répartition de la capacité | Part de la capacité de l'équipe consacrée au changement, au travail d'exploitation et à l'amélioration | éléments ou heures terminés dans chaque catégorie / tous les éléments ou heures terminés | pourcentage | Gestionnaire de travail avec type de travail | Gestion de la capacité et de la performance ; gestion des incidents | Répartition par type de travail | Mensuelle |
| Stabilité du débit | Variation du débit hebdomadaire | écart type du débit hebdomadaire / moyenne du débit hebdomadaire | ratio | Gestionnaire de travail | Gestion de la capacité et de la performance | Prévisibilité du flux | Mensuelle |
| Vélocité locale | Travail terminé d'une seule équipe, dans sa propre unité de dimensionnement, par période de planification | somme des estimations des éléments répondant à la définition de terminé dans la période | points définis par l'équipe | Gestionnaire de travail | Gestion de la capacité et de la performance | Aide à la planification de la capacité de l'équipe | Par période de planification |

Définissez les horloges. Une prévision est « faite » quand elle est consignée et partagée avec les parties prenantes, et « tenue » quand le résultat est publié et utilisé, pas quand le code est fusionné. Le débit compte les éléments qui répondent à la définition de terminé, les éléments de types différents étant comptés dans des séries distinctes si leur taille diffère beaucoup. La vélocité locale n'est montrée qu'à l'équipe qui en est propriétaire.

## Recommandations

### Prévoir à partir du flux

**1. Construisez la prévision à partir du débit et du temps de cycle.** Comptez les éléments terminés chaque semaine sur les 12 à 26 dernières semaines. Servez-vous de cet historique pour prévoir combien d'éléments seront terminés à une date donnée, ou quand un ensemble d'éléments sera probablement terminé. Une simulation par [méthode de Monte-Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), qui échantillonne des milliers de fois l'historique de l'équipe, transforme cet historique en fourchette de probabilités. De simples tableurs ou de petits scripts font cela très bien. Indiquez la fenêtre d'historique et la date de la prévision.

**2. Rapportez des percentiles de résultats.** Dites « probable à 50 % d'ici le 14 mars, à 85 % d'ici le 4 avril, à 95 % d'ici le 18 avril ». Chaque percentile est un énoncé honnête du risque, et les parties prenantes peuvent choisir la marge dont elles ont besoin. Une date unique cache ce choix (voir le sujet 1.6, Culture statistique pour les métriques de service).

**3. Utilisez les percentiles du temps de cycle pour les éléments isolés.** Pour un élément, le 85e percentile des temps de cycle passés répond à « combien de temps cela pourrait-il prendre ? » mieux que n'importe quelle estimation. Montrez-le sur le tableau, comme une ligne à laquelle comparer l'âge des éléments en cours (voir le sujet 2.1, Mesures de flux).

**4. Gardez des tailles d'éléments à peu près égales.** La prévision par le débit marche mieux quand les éléments sont petits et assez semblables pour être comptés. Les équipes y parviennent en découpant le travail en la plus petite pièce qui livre encore de la valeur, une habitude de la livraison continue de logiciel en soi. Si les éléments varient largement, suivez des séries séparées pour différents types de travail.

**5. Rafraîchissez la prévision chaque fois que les faits changent.** Une prévision est une vue vivante. Quand le périmètre change, que la taille de l'équipe change ou qu'un incident majeur consomme une semaine, relancez-la et prévenez les parties prenantes. Versionnez les prévisions pour pouvoir les juger plus tard.

### Planifier avec la capacité réelle

**6. Répartissez la capacité par type de travail.** Consignez quelle part du travail terminé de l'équipe était du changement planifié, du travail d'exploitation non planifié, des demandes de service et de l'amélioration. Planifiez avec la part que l'expérience montre, pas avec un idéal. Les équipes qui exploitent des services en production constatent souvent qu'un tiers ou plus de leur capacité va au travail d'exploitation, et ce chiffre est à elles de le mesurer, pas à emprunter (voir le sujet 2.9, Travail opérationnel et travail non planifié).

**7. Réservez de la capacité pour l'amélioration.** L'amélioration continue est une part permanente du travail : prévoyez donc du temps pour elle dans la répartition, et protégez-le. Les équipes qui l'écrasent à chaque période chargée voient leur charge d'exploitation augmenter, ce qui l'écrase encore davantage. Suivez la part d'amélioration et l'effet des améliorations sur la part d'exploitation.

**8. Ne planifiez pas à pleine utilisation.** Une équipe planifiée à 100 % n'a aucune marge pour la variation, et les files grossissent à mesure que l'utilisation approche de la limite (voir le sujet 2.3, Travail en cours et théorie des files d'attente). Laissez du mou pour l'imprévu, et traitez-le comme un choix de conception et non comme du gaspillage.

### Utiliser les estimations avec précaution si vous en utilisez

**9. Traitez la vélocité comme une aide de planification locale.** Si une équipe dimensionne son travail en points de récit, sa vélocité peut l'aider à décider de ce qu'elle prend en charge lors de sa prochaine conversation de planification, et elle ne doit être comparée qu'au passé récent de cette même équipe. Ne comparez jamais des équipes, ne fixez jamais d'objectif de vélocité et ne la rapportez jamais vers le haut comme mesure de productivité. Les points n'ont pas d'unité commune d'une équipe à l'autre, et la pression pour faire monter le chiffre gonfle les estimations sans livrer davantage.

**10. Comparez de temps en temps les estimations aux temps de cycle réels.** Tracez les estimations contre le temps que les éléments ont réellement pris. Si les grosses estimations ne prennent pas plus de temps que les petites, l'effort d'estimation n'achète pas grand-chose, et compter les éléments peut servir l'équipe aussi bien. S'il y a corrélation, les estimations portent une information qui mérite d'être gardée. Laissez l'équipe trancher avec les données.

### Mesurer si cela fonctionne

**11. Consignez chaque prévision et notez-la.** Enregistrez la prévision, la fourchette et le résultat réel, puis calculez le taux de réussite. Une prévision au 85e percentile bien calibrée doit se réaliser environ 85 % du temps. Si les réussites sont bien au-dessus ou en dessous, ajustez la méthode. Partagez le journal avec les parties prenantes, car la confiance dans la prévision se construit sur un historique de résultats.

**12. Jugez les objectifs de livraison sur le résultat.** Un objectif comme « les clients peuvent payer sur facture » est atteint quand les clients peuvent le faire, pas quand les tâches sont closes. Convenez des objectifs avec les parties prenantes en mots simples, revoyez-les ensemble et consignez le résultat. Cela garde la planification liée à la collaboration continue et décourage de livrer un travail que personne n'utilise (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de réussite des prévisions | Annoncer des fourchettes très larges pour que chaque prévision réussisse ; reprévoir après coup | Largeur de la fourchette de prévision ; garder la prévision d'origine dans le journal ; comparer les fourchettes avec l'historique des pairs |
| Largeur de la fourchette de prévision | Resserrer les fourchettes pour paraître confiant | Taux de réussite des prévisions ; exiger que la fourchette soit construite à partir d'un historique consigné |
| Réussite des objectifs de livraison | Fixer des objectifs faciles ; redéfinir un objectif après coup ; compter la production comme un résultat | Les parties prenantes jugent le résultat ; formulation des objectifs conservée dans un journal ; vérifier les données d'usage du changement livré |
| Taux de changement de périmètre | Figer le périmètre en refusant des changements valables ; cacher le changement de périmètre en redimensionnant des éléments | Satisfaction des parties prenantes quant à la réactivité ; motifs des changements consignés |
| Répartition de la capacité | Mal étiqueter du travail d'exploitation comme de l'amélioration ; cacher la charge d'exploitation en travaillant hors du tableau | Réconcilier avec les enregistrements d'incidents et de demandes ; échantillonner des éléments pour vérifier le type |
| Stabilité du débit | Scinder les éléments en morceaux triviaux pour faire monter le décompte ; clore des éléments sans les terminer | Distribution des tailles d'éléments ; taux de réouverture ; échantillon pour vérifier la valeur livrée |
| Vélocité locale | Gonfler les estimations ; scinder les récits pour réclamer des points ; comparer les équipes | La garder privée à l'équipe ; comparer avec le débit et le temps de cycle ; ne jamais fixer d'objectif |

Une lecture saine montre des prévisions qui se réalisent à peu près au taux annoncé, des objectifs que les parties prenantes reconnaissent atteints, un tableau de la capacité qui correspond à ce que l'équipe vit, et un chiffre de vélocité qui, s'il existe, est utilisé par l'équipe et par personne d'autre.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Prévision fondée sur le flux | Utilise des données réelles, résiste à l'inflation, donne des fourchettes | Demande un historique régulier et des éléments de tailles semblables |
| Prévision fondée sur les estimations | Rapide à démarrer, encourage la discussion sur le travail | Subjective, gonfle sous la pression, non comparable entre équipes |
| Engagement sur une date unique | Simple à communiquer | Cache le risque ; punit l'honnêteté |
| Fourchette avec probabilité | Honnête sur l'incertitude | Plus difficile à lire au début pour certaines parties prenantes |
| Planification à pleine utilisation | Paraît efficace | Les files grossissent ; pas de place pour les incidents ni l'apprentissage |
| Mou planifié | Absorbe la variation et soutient l'amélioration | Ressemble à de la capacité inemployée pour les non-convaincus |

La réponse en bref : partez des données de flux, n'ajoutez des estimations que là où elles aident l'équipe, et parlez en fourchettes. Là où un contrat exige une date, donnez celle que le 85e ou le 95e percentile soutient, et dites ce qui la changerait.

## Questions à discuter avec votre équipe

**1. Que dirions-nous si une partie prenante demandait « quand ce sera terminé » et voulait une réponse honnête ?**
Demandez à l'équipe de répondre pour un vrai morceau de travail, d'abord avec une date unique puis avec une fourchette. Notez la différence de confort entre les deux réponses. L'animateur doit relever ce dont l'équipe aurait besoin pour donner la fourchette honnêtement, comme l'historique, la taille des éléments et les risques connus.

**2. Quelle part de notre capacité va réellement au changement planifié, et comment le savons-nous ?**
Regardez les trois derniers mois de travail terminé par type. Comparez avec le plan que l'équipe avait fait. La conversation révèle souvent que le travail d'exploitation est plus grand que prévu, et le travail d'amélioration plus petit. Convenez de ce que la répartition devrait être, et de la décision qui la changerait.

**3. Où nos estimations nous aident-elles, et où nous font-elles seulement perdre du temps ?**
Tracez un échantillon d'estimations contre les temps de cycle réels. Discutez de la question de savoir si les plus grosses estimations étaient vraiment plus lentes. Si le lien est faible, demandez ce que l'équipe ferait autrement si elle ne comptait que les éléments. Décidez de continuer, de simplifier ou d'arrêter d'estimer pour une période d'essai.

**4. Qui voit les chiffres de planification de notre équipe, et qu'en fait-on ?**
Suivez chaque chiffre de planification de l'équipe jusqu'à son public. Demandez si quelqu'un compare des équipes avec ou fixe des objectifs. Si oui, discutez de la manière d'y mettre fin et de ce qu'il faut offrir à la place. L'animateur doit être prêt à expliquer que les chiffres locaux perdent leur valeur quand ils voyagent.

**5. Quand une de nos prévisions a-t-elle échoué, et qu'avons-nous appris ?**
Choisissez un ratage et retracez-le. Était-ce un changement de périmètre, un incident majeur, une dépendance ou une hypothèse erronée ? Qu'est-ce qui l'aurait signalé plus tôt ? Convenez d'un changement de la pratique de prévision, comme consigner les dépendances ou rafraîchir la prévision chaque semaine.

**6. Quels objectifs avons-nous atteints le trimestre dernier, et qui l'a dit ?**
Listez les objectifs de livraison et qui a jugé chacun. Si l'équipe a jugé ses propres objectifs, discutez de la manière d'y associer les parties prenantes. La conversation soutient la collaboration continue et montre si les objectifs portent sur des résultats ou sur des tâches.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent la prévision et les données de flux qui la soutiennent. Elles doivent publier des fourchettes, garder les éléments petits et reprévoir quand les faits changent. Les équipes qui choisissent de dimensionner le travail en points doivent garder les chiffres à l'intérieur de l'équipe. Le but est un flux régulier de travail terminé et utile, et une prévision à laquelle les parties prenantes font confiance parce qu'elle a un historique de résultats.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent la demande qui dérange les plans. Elles doivent partager la charge d'incidents et de demandes avec les équipes de livraison, pour que les plans de capacité partent de vrais chiffres. Les équipes d'exploitation qui livrent aussi du changement peuvent utiliser la même prévision fondée sur le flux pour leur propre travail. La planification conjointe du changement et de l'exploitation est un bon endroit pour la collaboration continue entre les deux groupes.

### Direction et gouvernance

Les dirigeants décident si une prévision est un énoncé de risque ou une promesse. Ils doivent demander des fourchettes, financer le mou et l'amélioration, et résister à l'usage de la vélocité ou du débit pour comparer des équipes. Les instances de gouvernance doivent regarder le taux de réussite des prévisions dans le temps et les résultats des objectifs, et traiter les ratages répétés comme un signal sur le système, comme les dépendances et la charge d'exploitation, pas sur les personnes.

### Clients et utilisateurs

Les utilisateurs se soucient de savoir quand ils verront le changement et s'il les aidera. Une fourchette avec une confiance annoncée les sert mieux qu'une date qui glisse. Ils doivent être associés au jugement sur l'atteinte des objectifs, puisque ce sont eux qui ressentent le résultat. Dire aux utilisateurs quand une prévision change, et pourquoi, fait partie de les traiter en collaborateurs.

## En pratique : un exemple de gestion des services

L'équipe numérique d'un fournisseur d'énergie régional construit un portail de facturation pour les clients et l'exploite en production. Les chiffres ci-dessous sont illustratifs.

Les parties prenantes ont demandé à l'équipe une date pour une nouvelle fonctionnalité de plan de paiement composée de 22 éléments. Le trimestre dernier, l'équipe avait donné une date ferme fondée sur ses estimations, l'avait manquée de cinq semaines à cause de deux incidents majeurs, et avait perdu la confiance des parties prenantes. Cette fois, la responsable de la livraison tire le débit des 20 dernières semaines, qui va de 3 à 9 éléments par semaine avec une médiane de 6, et note que le travail d'exploitation a pris environ 35 % des éléments terminés.

Elle lance une simulation à partir de l'historique. Elle montre que 22 éléments sont terminés en 4 semaines environ une fois sur deux, en 6 semaines environ 85 % du temps et en 8 semaines environ 95 % du temps. Elle présente ces trois dates aux parties prenantes, avec les hypothèses : taille de l'équipe inchangée, charge d'exploitation semblable à celle des 20 dernières semaines et aucun nouveau périmètre. Un responsable produit demande un lancement pour une date de facturation précise, huit semaines plus tard. L'équipe et les parties prenantes conviennent de planifier sur la date à 85 %, de garder les deux dernières semaines comme tampon et de fixer un point de contrôle toutes les deux semaines pour reprévoir.

Au premier point de contrôle, une panne de la passerelle de paiement a pris trois jours et la simulation décale la date à 85 % d'une semaine. L'équipe prévient les parties prenantes le jour même, avec la raison, et elles conviennent de sortir un élément de faible valeur. La fonctionnalité est mise en ligne à la date du tampon. L'objectif de livraison, « les clients peuvent mettre en place un plan de paiement sans appeler », est jugé par le responsable produit et un panel de clients après trois semaines. Il est atteint pour la plupart des clients, et un thème de commentaires montre de la confusion sur un écran, qui rejoint le backlog. L'équipe consigne que son taux de réussite des prévisions pour le trimestre est de quatre sur cinq. Les parties prenantes demandent à la responsable de la livraison d'apporter des fourchettes de prévision à la prochaine séance de planification, et l'équipe abandonne les points de récit parce que compter les éléments donnait la même réponse.

## Agilité, IA, automatisation et analytique

### Agilité

Planifiez à partir du flux de travail terminé et révisez souvent avec les parties prenantes, en donnant des fourchettes plutôt que des dates. Une bonne pratique est de prévoir avec l'historique de débit de l'équipe et de montrer la fourchette à chaque revue régulière. La précaution est que tout chiffre de planification propre à une équipe, comme la vélocité, devient un objectif dès qu'il est comparé entre équipes.

### IA

L'assistance de l'IA peut changer le débit rapidement et de façon inégale, ce qui fait de l'ancien historique un mauvais guide pendant un temps. Marquez sur le graphique du débit les dates d'adoption des outils d'IA, élargissez la fourchette de prévision après le changement et appariez le taux de réussite des prévisions avec la reprise. La précaution est que les estimations générées par l'IA paraissent précises : traitez-les donc comme matière à discussion et vérifiez-les face à l'historique propre de l'équipe.

### Automatisation

Calculez les prévisions automatiquement à partir des données du gestionnaire, pour qu'elles se rafraîchissent sans réunion. Suivez l'exactitude de ces prévisions comme une métrique de la méthode de prévision. La précaution est qu'une prévision automatisée montrée sans son intervalle invite à une fausse confiance : montrez donc la fourchette par défaut.

### Analytique

Utilisez la simulation ou des fourchettes par percentiles à partir du débit passé, et rapportez le taux de réussite des prévisions avec le nombre de prévisions qui le fondent. La décision éclairée est quoi promettre et quand replanifier. La précaution est que les prévisions échouent quand le périmètre ou la capacité changent : suivez donc le taux de changement de périmètre à côté.

## Éclairage sectoriel

**Startup.** Les priorités changent vite : gardez donc les prévisions courtes et approximatives. Suivez le débit dès le début, puisque cela ne coûte rien, et donnez des fourchettes aux fondateurs. Résistez à l'importation d'un système de planification conçu pour de grandes équipes.

**Petite entreprise.** Une ou deux personnes peuvent faire ensemble le changement et l'exploitation, sans capacité de réserve. Soyez explicite sur la répartition, et dites au propriétaire quand un incident va repousser une date. Un simple décompte hebdomadaire des éléments terminés suffit.

**Grande entreprise.** De nombreuses équipes et dépendances font dépendre les prévisions du flux d'autres équipes. Prévoyez chaque équipe à partir de ses propres données, rendez les dépendances visibles et combinez les fourchettes avec soin, puisqu'additionner les meilleurs cas donne un total trompeur. Évitez les consolidations qui comparent les équipes par vélocité.

**Gouvernement et secteur public.** Les budgets fixes, la passation de marchés et les dates légales créent une pression pour des engagements à date unique. Indiquez la date soutenue par le percentile choisi, expliquez les hypothèses et consignez ouvertement les arbitrages de périmètre. Là où une date obligatoire existe, planifiez le périmètre pour qu'il y tienne (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est faible. Les données de débit et de temps de cycle existent généralement dans le gestionnaire de travail de l'équipe. Un tableur de prévision ou un petit script prend une journée à construire, et une prévision prend quelques minutes à mettre à jour. Le coût récurrent est le temps de consigner les prévisions et les résultats, et de tenir une courte conversation de point de contrôle avec les parties prenantes.

Le rendement vient de moins de surprises et de meilleures décisions. Les parties prenantes qui comprennent le risque peuvent choisir un tampon, ajuster le périmètre ou réordonner le travail tôt. Les équipes passent moins de temps en cérémonies d'estimation si compter les éléments sert aussi bien. Les conflits de dates manquées et les raccourcis de qualité qu'ils provoquent diminuent. Construisez le dossier à partir de votre propre historique : la part des prévisions qui ont tenu, le temps passé à estimer et les changements de périmètre faits tôt plutôt que tard. N'empruntez pas de chiffres de prévisibilité à d'autres organisations.

## Anti-modèles et pièges

- **Traiter une prévision comme un engagement.** Cela transforme la prévision en objectif, et l'honnêteté devient coûteuse. Présentez des fourchettes et révisez-les.
- **Comparer les équipes par la vélocité.** Les points sont locaux, et la comparaison les gonfle. Comparez une équipe uniquement à son propre passé.
- **Planifier à pleine utilisation.** La variation se transforme en retard. Laissez du mou.
- **Ignorer le travail d'exploitation.** Les plans échouent sur la charge que personne n'avait planifiée. Mesurez et planifiez la répartition.
- **Utiliser une date unique pour tout.** Utilisez des percentiles et dites lequel vous avez choisi.
- **Estimer plus précisément que les données ne le permettent.** Les estimations détaillées pour un travail lointain sont les moins fiables. Prévoyez grossièrement le travail lointain.
- **Fixer un objectif de vélocité ou de débit.** Le chiffre montera, et la valeur non.
- **Ne jamais noter les prévisions.** Sans historique de résultats, la confiance ne peut pas grandir.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Méthode de prévision | Dates devinées | Estimations additionnées à la main | Fourchettes fondées sur le flux avec percentiles | Prévisions consignées et notées ; méthode ajustée d'après le taux de réussite | Prévisions combinées entre équipes et dépendances, partagées en direct avec les parties prenantes |
| Planification de la capacité | Les plans ignorent le travail d'exploitation | Charge d'exploitation connue à peu près | Capacité répartie par type de travail à partir de données | Répartition revue au regard des résultats ; temps d'amélioration protégé | Capacité planifiée conjointement avec les fournisseurs et l'exploitation sur tous les services |
| Objectifs et usage des chiffres | Les objectifs sont des listes de tâches | Objectifs mis par écrit | Objectifs jugés sur le résultat avec les parties prenantes | Ratages analysés comme des signaux du système ; chiffres locaux gardés privés | Objectifs fixés et jugés en collaboration avec les utilisateurs ; apprentissage partagé entre équipes |

## Liste de vérification

- [ ] Les prévisions sont construites à partir de l'historique de débit et de temps de cycle de l'équipe.
- [ ] Les prévisions sont données comme des fourchettes avec percentiles, hypothèses énoncées.
- [ ] Chaque prévision est consignée avec sa fourchette et son résultat réel.
- [ ] Le taux de réussite et la largeur de fourchette des prévisions sont revus chaque mois.
- [ ] La capacité est répartie par type de travail, y compris le travail d'exploitation et l'amélioration.
- [ ] L'utilisation planifiée laisse du mou pour la variation et les incidents.
- [ ] Toute unité de dimensionnement ou vélocité est privée à l'équipe et ne porte aucun objectif.
- [ ] Les objectifs de livraison sont écrits comme des résultats et jugés avec les parties prenantes.
- [ ] Les changements de périmètre sont consignés avec leurs motifs.
- [ ] Les prévisions sont rafraîchies quand les faits changent, et les parties prenantes en sont informées.

## Prompts d'IA

**Construisez une prévision fondée sur le débit.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Passez en revue notre usage des estimations.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Planifiez la capacité entre changement et exploitation.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Rédigez un point de contrôle de prévision avec les parties prenantes.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de prévision ou de planification.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de planification révisée conserve son vecteur de détournement et son garde-fou.

## Idées clés

- Prévoyez à partir du flux de travail terminé, et donnez des fourchettes avec probabilités plutôt que des dates uniques.
- Planifiez avec la capacité réelle, y compris le travail d'exploitation, le temps d'amélioration et le mou.
- Traitez toute unité d'estimation ou vélocité comme une aide privée à une équipe, jamais comme un objectif ou une comparaison.
- Notez vos prévisions : le taux de réussite construit la confiance.
- Jugez les objectifs de livraison sur le résultat, avec les parties prenantes et les utilisateurs.
- Faites confiance à l'équipe et soutenez-la : les prévisions honnêtes viennent de personnes qui ne sont pas punies pour leur incertitude.

## Références et lectures complémentaires

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
