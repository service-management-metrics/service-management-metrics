# SLI, SLO et budgets d'erreur

**Un objectif de niveau de service transforme « assez fiable » en un chiffre que les utilisateurs, les équipes produit et les équipes d'exploitation peuvent tous voir, et le budget d'erreur qu'il laisse derrière lui transforme ce chiffre en une décision partagée et dépensable sur le risque, au lieu d'une dispute sur le blâme.**

## Vue d'ensemble et motivation

Tout service a déjà un niveau de fiabilité, que quelqu'un l'ait mesuré ou non. Si personne ne l'énonce, les utilisateurs supposent un niveau, l'équipe produit en suppose un autre et l'équipe d'exploitation en défend un troisième. La différence se découvre pendant une panne. Ce sujet couvre les trois idées liées que l'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) utilise pour combler cet écart : l'indicateur de niveau de service, l'objectif de niveau de service et le budget d'erreur.

Un [indicateur de niveau de service (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) est une mesure d'un aspect du service tel que les utilisateurs l'éprouvent. Les aspects typiques sont : une requête a-t-elle réussi, combien de temps a-t-elle pris, les données renvoyées étaient-elles fraîches, et étaient-elles correctes. Un bon SLI s'exprime comme un ratio : le nombre d'événements bons divisé par le nombre d'événements valides, sur une fenêtre définie. Un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) est la cible de ce ratio sur une période, par exemple « 99,9 % des requêtes de paiement valides réussissent sur 28 jours glissants ». Le **budget d'erreur** est ce que l'objectif permet de voir mal tourner : 100 % moins le SLO. À 99,9 %, le budget est de 0,1 % des événements valides.

Le budget d'erreur change la conversation. Si le service a dépensé peu de son budget, l'équipe a de la marge pour publier plus vite, essayer des changements risqués et mener des expériences. Si le budget est presque épuisé, la même équipe ralentit le travail sur les fonctionnalités et dépense son effort sur la fiabilité jusqu'à ce que le budget se reconstitue. La décision vient d'un chiffre convenu d'avance : elle ne dépend donc pas de la personne la plus ancienne ou la plus persuasive de la réunion.

Le **taux de consommation** (burn rate) est la vitesse à laquelle le budget est dépensé, par rapport au rythme qui en dépenserait exactement la totalité à la fin de la fenêtre. Un taux de consommation de 1 signifie que le budget sera épuisé exactement à la fin de la fenêtre. Un taux de 10 signifie qu'il sera épuisé en un dixième de la fenêtre. Le taux de consommation est le pont entre le SLO et l'alerte, parce qu'il dit l'urgence d'un problème en termes de ce qu'il coûte à l'objectif.

Les visions agile et ITIL se rencontrent ici, et emploient un vocabulaire différent pour des idées voisines. Dans ITIL 4, la gestion des niveaux de service est la pratique qui fixe, mesure et rapporte les niveaux de service, et l'[accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est l'accord documenté entre un fournisseur et un client (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). Un SLO est une cible interne généralement plus stricte que le SLA et détenue par l'équipe qui exploite le service. Un SLA porte des conséquences, comme des crédits ou des pénalités. Un SLO porte une règle de décision. Les équipes agiles qui détiennent leurs services (« vous le construisez, vous l'exploitez ») utilisent les SLO pour rendre le coût de la fiabilité visible dans le même backlog que les fonctionnalités. Les équipes qui suivent la pratique ITIL peuvent traiter les SLI comme la forme mesurable de ce que les clients disent vouloir, et le SLO comme la cible de travail qui garde le SLA en sécurité.

La [disponibilité](https://en.wikipedia.org/wiki/Availability) est le SLI le plus familier et est traitée en détail ailleurs (voir le sujet 5.3, Métriques de disponibilité). La latence, l'exactitude, la fraîcheur et le débit sont aussi des candidats. L'art est de choisir les indicateurs à partir de ce qui compte pour les utilisateurs, plutôt que de ce qui est facile à recueillir. L'utilisation du processeur d'un serveur est facile à recueillir et dit peu de choses sur la possibilité pour un client de payer. La part des requêtes de paiement qui se terminent en moins de deux secondes en dit beaucoup. Pour la latence, rapportez des [percentiles](https://en.wikipedia.org/wiki/Percentile), non des moyennes, parce qu'une moyenne cache la queue lente que les utilisateurs remarquent (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 5.4, Métriques de capacité et de performance).

## Principes clés

- **Partez de l'utilisateur, non du serveur.** Choisissez des indicateurs qui décrivent une expérience qu'une personne reconnaîtrait, comme « mon paiement est passé », et remontez à ce qu'il faut mesurer.
- **Une cible en dessous de 100 % est une décision, non un aveu.** La fiabilité parfaite est inatteignable et inabordable, et les utilisateurs ne peuvent généralement pas voir la différence au-delà d'un certain point. Le budget rend cet arbitrage explicite.
- **Fixez l'objectif avec les personnes qui en dépendent.** Le SLO est un accord négocié entre produit, exploitation et clients, non un chiffre choisi par une seule équipe.
- **Convenez des conséquences avant que le budget soit épuisé.** Une politique de budget d'erreur écrite une semaine calme est suivie une semaine de stress. Une politique inventée pendant une panne est discutée.
- **Alertez sur la consommation, pas sur chaque à-coup.** N'appelez une personne que lorsque le budget est consommé assez vite pour menacer l'objectif, et routez la consommation plus lente vers des tickets.
- **Les SLO décrivent des services, jamais des personnes.** Le budget appartient à un service et à son équipe. Ce n'est jamais un score pour un ingénieur.

## Définitions des métriques

Les métriques ci-dessous décrivent le système de SLO d'un service. Les quatre premières sont le cœur de la pratique, et les deux dernières décrivent la santé de la pratique elle-même. Chaque horloge et chaque frontière est énoncée dans la colonne des formules. Les « événements valides » sont les événements qui comptent dans le SLI après les exclusions convenues dans le document de SLO, comme les requêtes des propres tests de charge de l'équipe, qui sont exclues.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atteinte du SLI | Part des événements valides qui étaient bons, pour un indicateur d'un service | événements bons / événements valides, pour la fenêtre du début à la fin de la période de rapport ; les événements exclus par le document de SLO (tests de charge, maintenance planifiée annoncée d'avance, si le SLO le dit) sont retirés du numérateur et du dénominateur | pourcentage | Télémétrie de l'équilibreur de charge, de l'application ou de sondes synthétiques ; plateforme de supervision ou d'observabilité | Gestion des niveaux de service ; supervision et gestion des événements | Définition de terminé pour l'exploitabilité ; revue de la santé du service avec les parties prenantes | Continue, rapportée chaque jour et par fenêtre |
| Conformité au SLO | Si le SLI a atteint l'objectif sur la fenêtre du SLO, et pour combien de fenêtres récentes | fenêtres dans lesquelles l'atteinte du SLI était à l'objectif ou au-dessus / fenêtres évaluées, sur les 12 derniers mois ; une fenêtre encore ouverte est exclue | pourcentage de fenêtres | Historique d'atteinte du SLI | Gestion des niveaux de service ; amélioration continue | Objectif d'équipe ou accord de travail sur la fiabilité | Mensuelle, avec une tendance trimestrielle |
| Budget d'erreur restant | Part du budget pas encore dépensée dans la fenêtre courante | 1 - (événements mauvais à ce jour / événements mauvais permis pour toute la fenêtre), où événements mauvais permis = (1 - SLO) x événements valides attendus pour toute la fenêtre ; l'horloge démarre au début de la fenêtre et s'arrête à sa fin | pourcentage du budget | Atteinte du SLI et prévision de volume | Gestion des niveaux de service ; gestion des risques | Contrôle de préparation de version ; entrée du travail planifié | Quotidienne, revue hebdomadaire |
| Taux de consommation | Vitesse à laquelle le budget est dépensé relativement au rythme de dépense régulière | (événements mauvais / événements valides sur une période de rétrospection) / (1 - SLO) ; la période de rétrospection est énoncée, par exemple 1 heure ou 6 heures | ratio (1 signifie exactement dans le budget) | Télémétrie du SLI à fine résolution temporelle | Supervision et gestion des événements ; gestion des incidents | Règles d'alerte d'astreinte ; déclencheur d'essaimage | Continue, évaluée dans les règles d'alerte |
| Respect de la politique de budget | Fréquence à laquelle la conséquence convenue a été appliquée quand un déclencheur de la politique de budget d'erreur a été atteint | déclencheurs de la période pour lesquels l'action de la politique a été prise dans le délai convenu / déclencheurs atteints dans la période ; les déclencheurs formellement levés avec un motif consigné sont comptés à part, non retirés | pourcentage | Document de politique, journal des décisions et historique du backlog | Gestion des niveaux de service ; maîtrise des changements | Accord de travail ; suivi de rétrospective | Trimestrielle |
| Couverture par SLO | Part des parcours utilisateurs critiques, ou des services dans le périmètre, qui ont un SLO courant et un SLI fonctionnel | services ou parcours dans le périmètre avec au moins un SLO dont les données de SLI sont arrivées dans les 7 derniers jours / services ou parcours dans le périmètre ; le « périmètre » est listé dans le catalogue des services (« service catalogue » en termes ITIL) | pourcentage | Catalogue des services, registre des SLO et configuration de supervision | Gestion du catalogue des services ; gestion des niveaux de service | Liste de propriété de service de l'équipe | Trimestrielle |

La période de rétrospection du taux de consommation et la fenêtre du SLO sont des choix. Une fenêtre glissante de 28 jours couvre des semaines entières. Énoncez le choix dans le document de SLO et gardez-le stable, sinon la tendance trompera.

## Recommandations

### Choisir les indicateurs d'après ce qui compte pour les utilisateurs

**1. Commencez par les parcours utilisateurs critiques.** Listez les trois à six choses qu'un utilisateur doit pouvoir faire pour que le service vaille la peine d'être utilisé, comme se connecter, chercher, payer et télécharger un relevé. Écrivez chacune comme une phrase du côté de l'utilisateur. Choisissez ensuite le SLI qui montre si cette phrase était vraie. Cela garde les SLO peu nombreux et évite un catalogue de jauges techniques que personne ne lit.

**2. Exprimez chaque SLI comme événements bons sur événements valides.** Un ratio est facile à expliquer, facile à agréger et facile à transformer en budget. Définissez « bon » avec un seuil que les utilisateurs accepteraient, et définissez « valide » de façon que le trafic que vous ne pouvez raisonnablement pas servir, comme les requêtes bloquées pour abus, soit exclu de manière documentée. Écrivez les deux définitions dans le document de SLO, car le dénominateur est l'endroit où se cachent la plupart des désaccords.

**3. Mesurez aussi près de l'utilisateur que praticable.** Un taux de réussite côté serveur peut être parfait alors qu'un problème de réseau ou de client rend le service inutilisable. Mesurez à l'équilibreur de charge ou en périphérie, et ajoutez une sonde synthétique ou une mesure côté client pour les parcours qui comptent le plus. Chaque point de mesure a un coût et un angle mort : consignez donc lequel chaque SLI utilise (voir le sujet 1.5, Sources de données et instrumentation).

**4. Utilisez des percentiles pour la latence, avec un seuil.** « 95 % des requêtes de recherche se terminent en moins de 800 millisecondes » est un SLI. « La latence moyenne » n'en est pas un, parce que quelques requêtes rapides peuvent compenser de nombreuses lentes. Là où c'est utile, utilisez deux seuils, comme une médiane et un 99e percentile, puisque la queue lente façonne la sensation du service (voir le sujet 5.4, Métriques de capacité et de performance).

### Fixer des objectifs que les gens peuvent défendre

**5. Fixez le premier SLO d'après la performance actuelle et le besoin des utilisateurs, puis resserrez.** Mesurez le SLI pendant quelques semaines, demandez aux utilisateurs et au personnel de support quel niveau ils remarquent, et fixez un objectif que le service peut atteindre aujourd'hui avec de la marge. Un objectif fixé bien au-dessus de la performance actuelle est un dépassement permanent, et les gens cessent de le regarder. Un objectif fixé bien en dessous de ce que reçoivent les utilisateurs laisse la qualité se dégrader sans qu'on le voie. Revoyez-le après un trimestre.

**6. Gardez le SLO plus strict que le SLA, et gardez-les séparés.** Si un accord avec un client promet 99,5 %, l'objectif de l'équipe peut être 99,9 %, de sorte que le budget soit épuisé avant que la ligne contractuelle soit franchie. Ne faites pas du SLO et du SLA le même chiffre, et ne rapportez pas l'un comme l'autre. L'accord est un document commercial et juridique, et l'objectif est une règle de décision d'ingénierie (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**7. Tenez compte des dépendances.** Un service ne peut pas être plus fiable que ce dont il dépend, à moins de se dégrader en douceur. Listez les principales dépendances, y compris les fournisseurs, et demandez ce que leur performance réelle implique pour votre objectif.

### Faire fonctionner le budget comme outil de décision

**8. Écrivez une politique de budget d'erreur avant d'en avoir besoin.** La politique dit ce qui se passe à des niveaux de consommation définis. Une version simple a trois étapes : fonctionnement normal tant qu'il reste du budget, revue supplémentaire des changements risqués et priorité au travail de fiabilité quand une part énoncée a été dépensée, et pause des versions de fonctionnalités non essentielles quand il est épuisé, jusqu'à ce que le budget se reconstitue. Nommez qui peut accorder une exception et comment elle est consignée. Les dirigeants du produit et de l'exploitation doivent tous deux la signer, pour que la politique s'applique également aux deux côtés.

**9. Dépensez le budget à dessein.** Un budget qu'on ne touche jamais suggère que l'objectif est trop strict ou que l'équipe est trop prudente. Utilisez le budget disponible pour des expériences, un rythme de publication plus rapide, des mises en service canari et des [indicateurs de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) qui permettent de tester en production avec une exposition limitée, et employez des [versions canari](https://en.wikipedia.org/wiki/Canary_release) pour attraper les problèmes alors que seule une petite part des utilisateurs est touchée. Traitez un budget constamment intact comme une invite à demander si l'objectif correspond à ce dont les utilisateurs ont besoin (voir le sujet 4.5, Métriques des versions et des déploiements).

**10. Alertez sur plusieurs taux de consommation.** Une consommation rapide, avec un taux assez élevé pour dépenser une grande part du budget en une heure, appelle une personne. Une consommation lente, avec un taux modeste qui épuiserait quand même le budget en quelques jours, crée un ticket pour les heures ouvrées. Employer deux fenêtres de rétrospection ou plus attrape à la fois les pannes soudaines et les fuites lentes, et réduit les appels pour de brefs à-coups qui coûtent peu de budget. Le chapitre du Site Reliability Workbook sur l'alerte sur les SLO explique le schéma, et les seuils doivent être ajustés à votre service plutôt que copiés (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**11. Reliez incidents, problèmes et apprentissage au budget.** Après un incident, consignez la quantité de budget qu'il a consommée à côté de sa durée et de son impact. Servez-vous de ce chiffre pour prioriser l'enregistrement de problème et les actions de suivi (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Le coût en budget donne aussi aux revues d'incidents majeurs une unité commune pour comparer des défaillances très différentes (voir le sujet 3.4, Métriques des incidents majeurs).

### Garder la pratique honnête et vivante

**12. Revoyez les SLO face à la réalité chaque trimestre.** Comparez le SLO avec les contacts du support, les plaintes et les résultats de satisfaction. Si les utilisateurs sont mécontents alors que le SLO est vert, le SLI est faux ou la cible est trop lâche. Si le SLO est rouge et que personne ne se plaint, la cible est peut-être trop stricte. Consignez chaque changement et sa raison, et montrez le changement sur la courbe de tendance (voir le sujet 6.2, Accords de niveau d'expérience).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Atteinte du SLI | Rétrécir les événements « valides » jusqu'à ce que les échecs disparaissent, par exemple en excluant les requêtes rejouées ou des classes d'erreurs entières ; mesurer seulement le composant le plus sain ; ne sonder que depuis un endroit favorable | Publier la définition du SLI et les exclusions dans le document de SLO avec un journal des changements ; comparer le SLI avec les contacts du support et les plaintes des utilisateurs ; revue régulière des événements exclus et de leur volume |
| Conformité au SLO | Fixer l'objectif assez bas pour toujours passer ; changer la longueur de fenêtre après une mauvaise période ; redéfinir un dépassement comme une période de maintenance | Objectif fixé avec l'avis des utilisateurs et revu selon un calendrier ; fenêtre fixée dans le document ; décompte des exclusions et des changements non planifiés de la fenêtre rapporté à côté de la conformité |
| Budget d'erreur restant | Reclasser des événements mauvais comme exclus ; gonfler le volume attendu pour que le nombre permis d'événements mauvais paraisse plus grand ; réinitialiser la fenêtre tôt | Événements mauvais permis calculés à partir du volume réel à la fin de la fenêtre ; volume d'événements exclus montré à côté du budget ; dates de fenêtre fixées d'avance |
| Taux de consommation | Ajuster les seuils d'alerte pour que la consommation ne déclenche jamais ; utiliser une rétrospection si longue que les consommations rapides se moyennent | Test de couverture des alertes à partir d'incidents passés (« cette règle aurait-elle appelé ? ») ; taux d'alertes exploitables et décompte des détections manquées (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) |
| Respect de la politique de budget | Accorder des exceptions de routine ; écrire une politique aux déclencheurs jamais atteignables ; compter un ticket de fiabilité symbolique comme action de la politique | Exceptions comptées et revues séparément ; part des exceptions dans la période ; travail de fiabilité terminé (voir le sujet 4.1, Métriques de gestion des problèmes) |
| Couverture par SLO | Ajouter un SLO trivial à chaque service pour relever le pourcentage ; compter un parcours comme couvert alors qu'aucune donnée n'arrive | Contrôle de fraîcheur des données de SLI (données arrivées dans les 7 derniers jours) ; revue de la question de savoir si le SLO couvre un parcours critique, non un point d'accès secondaire |

Une lecture saine montre un SLI qui suit ce que rapportent les utilisateurs, un objectif tantôt manqué tantôt atteint confortablement, et un budget dépensé à dessein. La politique est appliquée quand son déclencheur est atteint, les exceptions sont rares et consignées, et chaque changement de définition est visible sur le graphique. Un service toujours à 100 % de budget restant, ou toujours en dépassement, mérite une conversation sur l'objectif, non des louanges ni des reproches. Rappelez-vous que tout chiffre isolé est une invite à poser une question (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLI par parcours utilisateur | Correspondent à ce que ressentent les utilisateurs ; peu nombreux ; faciles à expliquer aux non-ingénieurs | Demandent de l'effort pour instrumenter de bout en bout ; peuvent manquer des défauts internes qui n'ont pas encore atteint les utilisateurs |
| SLI par composant ou ressource (processeur, mémoire, profondeur de file) | Peu coûteux à recueillir ; utiles pour le diagnostic et la capacité | Mauvais substituts de l'expérience utilisateur ; produisent de nombreuses alertes sans importance |
| Fenêtre glissante | Lisse ; pas de falaise en fin de mois ; toujours à jour | Plus difficile à expliquer aux dirigeants qu'un mois calendaire ; une mauvaise journée s'attarde pendant toute la fenêtre |
| Alerte sur le taux de consommation | Appelle quand l'objectif est réellement en danger ; moins de fausses alertes | Plus complexe à configurer et à tester ; les seuils demandent un ajustement par service |

Choisissez peu de SLI, fixez-les avec les utilisateurs et laissez le budget décider du rythme du changement. La juste rigueur est l'objectif le plus lâche qui garde quand même les utilisateurs satisfaits, puisque chaque neuf supplémentaire coûte plus que le précédent.

## Questions à discuter avec votre équipe

**1. De quoi un utilisateur de ce service a-t-il besoin d'être capable, et comment saurions-nous s'il ne le pouvait pas ?**
Demandez à chacun d'écrire les trois choses les plus importantes qu'un utilisateur fait avec le service, sans regarder aucun tableau de bord. Comparez les listes et notez les différences entre produit, exploitation et support. Demandez ensuite lesquels de ces parcours ont actuellement un SLI. L'animateur doit chercher des parcours importants sans mesure et des mesures qui ne décrivent aucun parcours.

**2. Si notre SLO était de 99,9 % et que nous l'atteignions, les utilisateurs seraient-ils contents, et comment le savons-nous ?**
Placez le SLO actuel à côté du dernier trimestre de contacts du support, de plaintes et de résultats de satisfaction. Demandez s'ils concordent. Si le SLO est vert et que les utilisateurs sont mécontents, le SLI ou la cible demande du travail. Si les utilisateurs sont contents et que le SLO est rouge, la cible est peut-être plus stricte que personne n'en a besoin. Convenez d'une action pour rapprocher l'objectif et l'expérience.

**3. Que ferions-nous réellement différemment si le budget d'erreur était épuisé ?**
Lisez à voix haute la politique de budget d'erreur actuelle, ou rédigez-en une ensemble s'il n'en existe pas. Demandez qui arrêterait quoi, et qui a l'autorité d'accorder une exception. L'animateur doit insister pour des actions concrètes, comme suspendre les versions non essentielles et affecter des personnes nommées au travail de fiabilité, plutôt que des intentions générales. Une politique que personne ne croit appliquée est pire que pas de politique.

**4. Quand avons-nous pris un risque pour la dernière fois parce que nous avions du budget en réserve ?**
Discutez de la question de savoir si l'équipe utilise son budget ou se contente de le garder. Regardez le dernier trimestre : y a-t-il eu une période où le budget était presque intact alors que les versions étaient lentes ? Demandez ce que l'équipe aurait essayé si elle avait su qu'elle pouvait le faire en sécurité. Cette question fait émerger l'excès de prudence, et la réponse pointe souvent vers une version canari, un indicateur ou une chaîne plus rapide qui permettrait à l'équipe d'utiliser son budget à bon escient.

**5. Lesquelles de nos alertes se seraient déclenchées à temps pour notre dernier mauvais incident, et lesquelles se seraient déclenchées pour rien ?**
Prenez le dernier incident significatif et rejouez l'historique d'alertes face à lui. Comptez les appels arrivés, combien de temps après le début de l'impact, et combien sont arrivés pour des événements qui ont coûté presque aucun budget. Discutez de la question de savoir si des alertes sur le taux de consommation auraient mieux fait. Le but est une courte liste de changements d'alertes, chacun avec un responsable, et non une discussion de blâme sur qui était d'astreinte.

**6. Qui détient chaque SLO, et quand en avons-nous changé un à dessein pour la dernière fois ?**
Listez les SLO et écrivez le responsable à côté de chacun, comme équipe ou rôle. Demandez quand chacun a été revu pour la dernière fois et ce qui a changé. Un SLO que personne n'a touché depuis un an est un signe qu'il n'éclaire plus les décisions. Convenez d'une date de revue pour chacun, et de qui a le droit de retirer un SLO qui a cessé d'être utile.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison gagnent une règle claire sur la rapidité d'avancer. Quand il reste du budget, elles peuvent publier plus souvent et essayer des changements plus audacieux. Quand il est bas, elles mettent du travail de fiabilité au backlog sans longue négociation. Elles doivent aider à choisir les indicateurs parce qu'elles savent quels parcours comptent, et instrumenter les nouvelles fonctionnalités en pensant au SLI dès le départ (voir le sujet 2.8, Métriques DORA). Le budget est une ressource d'équipe avec laquelle planifier, jamais un chiffre à cacher.

### Équipes de service et d'exploitation

Les équipes d'exploitation utilisent les SLO pour décider de ce qui mérite un appel et de ce qui peut attendre le matin. L'alerte sur le taux de consommation réduit le bruit et relie le travail d'astreinte à ce que les utilisateurs ressentent (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Elles gardent honnêtes les définitions des SLI, maintiennent la télémétrie qui les sous-tend et consignent le coût en budget dans les enregistrements d'incidents et de problèmes.

### Direction et gouvernance

Les dirigeants doivent poser trois questions : quel est l'objectif, combien de budget reste-t-il, et que ferons-nous s'il s'épuise ? Ils signent la politique de budget d'erreur et soutiennent l'équipe quand la politique dit de ralentir. Ils évitent de transformer la conformité au SLO en métrique de prime, ce qui invite à rétrécir les définitions et à fixer des cibles molles.

### Clients et utilisateurs

Les clients profitent d'un objectif qui reflète ce dont ils ont besoin et de la possibilité de voir comment le service se comporte face à lui. Ils doivent être consultés quand l'objectif est fixé, parce que leur tolérance à la lenteur ou à l'indisponibilité varie selon la tâche et l'heure de la journée. Les mesures d'expérience, comme la satisfaction et l'effort, vérifient si le SLO saisit ce qu'ils ressentent (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne a une équipe de paiement, une équipe plateforme et un centre de services. Le service de paiement est critique pour l'activité. Tous les chiffres de cet exemple sont illustratifs.

L'équipe définit un SLI pour le parcours « payer une commande » : la part des requêtes de paiement valides qui renvoient un succès en 2 secondes, mesurée à l'équilibreur de charge. Les requêtes valides excluent les propres tests de charge de l'équipe et les requêtes que le service anti-fraude rejette par conception. Le SLO est de 99,9 % sur 28 jours glissants. La fenêtre porte 12 000 000 de requêtes valides attendues : le budget est donc de 12 000 requêtes mauvaises (0,1 %). La politique de budget d'erreur, signée par le responsable du produit et le responsable de la plateforme, a trois niveaux : à 50 % du budget dépensé, les changements risqués demandent un second relecteur et une mise en service canari ; à 75 %, le travail de fiabilité prend la priorité à la prochaine conversation de planification ; à 100 %, les versions de fonctionnalités non essentielles sont suspendues jusqu'à ce que le budget se reconstitue.

Au jour 10 de la fenêtre, l'équipe voit 7 800 requêtes mauvaises sur environ 4 285 714 attendues jusqu'ici, ce qui donne une atteinte du SLI d'environ 99,82 %, 65 % du budget dépensé et une fenêtre écoulée à 36 % seulement. Le taux de consommation sur la période est d'environ 1,8 : à ce rythme, le budget est épuisé vers le jour 15. Un mauvais déploiement a causé 5 000 des échecs. L'enregistrement d'incident montre que la défaillance a duré 22 minutes, la revue d'incident majeur identifie un contrôle manquant dans la chaîne, et le coût en budget de l'incident est consigné dans l'enregistrement de problème (voir le sujet 4.1, Métriques de gestion des problèmes).

L'équipe suit la politique. L'action du deuxième niveau s'applique aussitôt : les changements risqués demandent donc une mise en service canari, et la réunion de planification place le contrôle de la chaîne en tête de la file de travail. Le responsable produit accepte la pause d'une fonctionnalité de promotion non urgente. Au jour 28, le budget est dépensé à 94 %, et l'équipe termine la fenêtre dans l'objectif.

Le risque de détournement apparaît dans la revue. Une autre équipe, qui exploite le service de recherche du détaillant, a rapporté 99,95 % pour le trimestre alors que le centre de services consignait une hausse des contacts « la recherche ne marche pas ». En investiguant, l'équipe plateforme a constaté que l'équipe de recherche avait redéfini « valide » pour exclure les requêtes rejouées dans les 5 secondes, ce qui retirait de nombreux vrais échecs. La revue a rétabli la définition d'origine, restitué le trimestre et ajouté deux garde-fous : tout changement de définition est consigné dans le document de SLO avec un motif, et l'atteinte du SLI est comparée chaque mois aux contacts du support. Personne n'avait menti, puisque le changement avait été fait pour réduire le bruit : la correction a donc été une définition plus claire, non une réprimande.

## Agilité, IA, automatisation et analytique

### Agilité

Un budget d'erreur transforme la fiabilité en décision partagée avec les parties prenantes du produit, et il s'accorde avec la livraison continue en montrant combien de risque l'équipe peut dépenser. Revoyez les objectifs selon une cadence régulière. La précaution est qu'un SLO que personne n'a convenu avec les utilisateurs est une devinette.

### IA

Les fonctionnalités d'IA ont besoin de leurs propres indicateurs, comme l'exactitude et la latence, pas seulement la disponibilité, et l'objectif doit dire comment une mauvaise réponse compte. Appariez la disponibilité de l'IA avec un indicateur de qualité mesuré par échantillonnage. La précaution est qu'un service qui répond vite avec une mauvaise réponse peut atteindre un SLO de disponibilité tout en décevant les utilisateurs.

### Automatisation

Calculez automatiquement les indicateurs et le taux de consommation à partir de la télémétrie, et alertez sur le taux de consommation, non sur chaque à-coup. Mesurez l'alerte elle-même sur les alertes manquées et fausses. La précaution est que des gels de budget automatisés peuvent bloquer un travail utile : gardez donc une décision humaine dans la politique.

### Analytique

Choisissez des indicateurs que les utilisateurs ressentent et montrez la fenêtre et le nombre d'événements derrière chacun. La décision éclairée est quand ralentir le changement ou investir dans la fiabilité. La précaution est qu'une courte fenêtre donne un budget volatil : énoncez donc la fenêtre.

## Éclairage sectoriel

**Startup.** Commencez par un SLO pour le parcours le plus important, mesuré en périphérie, avec une politique simple qui tient sur une page. Ne construisez pas une plateforme pour des dizaines de SLO. Le budget aide une petite équipe à moins se disputer pour savoir s'il faut publier un vendredi.

**Petite entreprise.** Une petite entreprise s'appuie souvent sur des outils hébergés et des fournisseurs : le SLI peut donc venir des données d'état d'un fournisseur ou d'une simple sonde externe. Lisez par écrit les niveaux de service du fournisseur et vérifiez-les face à vos propres besoins.

**Grande entreprise.** De nombreux services, équipes et fournisseurs relèvent l'enjeu de la cohérence. Fournissez un modèle partagé de documents de SLO, un registre commun et une façon standard de calculer l'atteinte et le budget, pour que les dirigeants puissent comparer et consolider sans se disputer sur les définitions. Gardez le SLO détenu par l'équipe de service et le registre tenu de façon centrale.

**Gouvernement et secteur public.** Les services doivent souvent respecter des cibles légales ou publiées, et une défaillance peut être rapportée publiquement. Gardez l'engagement contractuel ou légal séparé de l'objectif interne, et assurez-vous que le SLO interne est plus serré. Documentez la définition du SLI, les exclusions et la lignée des données pour l'audit, et prévoyez l'accessibilité et les utilisateurs qui ne peuvent pas choisir un autre fournisseur (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est moins de disputes et de meilleures décisions sur la fiabilité. Sans objectif, le travail de fiabilité concourt avec les fonctionnalités selon la force de celui qui argumente le plus fort. Avec un objectif et un budget, l'arbitrage est visible et convenu d'avance, et les utilisateurs obtiennent un service aussi fiable qu'ils en ont besoin, sans que l'équipe paie la fiabilité au-delà de ce point.

Le coût a quatre parts. La première est la conception : des ateliers pour choisir les parcours, les indicateurs et les objectifs, et pour écrire la politique. La deuxième est l'instrumentation : la télémétrie au bon endroit, les sondes et la chaîne qui transforme les événements en atteinte et en budget (voir le sujet 1.5, Sources de données et instrumentation). La troisième est l'exploitation : règles d'alerte, tableau de bord, revue trimestrielle et temps pour garder les définitions à jour. La quatrième est le coût d'opportunité quand la politique suspend le travail sur les fonctionnalités, qui est le coût d'honorer l'accord et la raison de le convenir avant que la pression n'arrive.

Le rendement se voit dans des schémas qu'une équipe peut suivre elle-même : moins d'appels n'ayant demandé aucune action, des débats plus courts sur la question de savoir s'il faut publier, du travail de fiabilité planifié avant que le budget soit épuisé au lieu d'après un incident majeur, et moins de surprises pour les clients. Décrivez le bénéfice en comparant les propres chiffres de l'équipe avant et après, comme les appels par rotation et la part du budget consommée par le plus gros incident.

## Anti-modèles et pièges

- **Trop de SLO.** Des dizaines d'objectifs diluent l'attention, et personne ne peut dire lequel compte. Commencez par les parcours utilisateurs critiques et retirez le reste.
- **SLO égal SLA.** Rapporter un chiffre comme les deux supprime la marge de sécurité et mêle une règle d'ingénierie avec une promesse commerciale. Gardez l'objectif plus strict que l'accord.
- **Une politique jamais appliquée.** Si le budget s'épuise et que rien ne change, la pratique perd sa crédibilité. Faites signer la politique par les dirigeants et consignez chaque exception avec son motif.
- **Utiliser le budget comme tableau de score pour les personnes.** Classer les ingénieurs ou le personnel d'astreinte selon le budget dépensé pousse les gens à cacher les incidents et à rétrécir les définitions. Attribuez le budget au service et discutez des causes au niveau du système (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Alerter sur chaque creux.** Appeler sur des symptômes bruts crée de la fatigue d'alerte et apprend aux gens à ignorer les appels. Appelez sur le taux de consommation et envoyez les consommations lentes vers des tickets.
- **Fixer puis oublier.** Un SLO que personne ne revoit dérive loin de ce dont les utilisateurs ont besoin. Planifiez une revue trimestrielle et consignez ce qui a changé et pourquoi.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Indicateurs et objectifs | Fiabilité décrite par des mots ; disponibilité des serveurs rapportée | Certaines équipes définissent des SLI ; les cibles varient et sont rarement revues | Les parcours utilisateurs critiques ont des SLI et SLO documentés dans un modèle partagé | SLO suivis dans le temps, vérifiés face au retour des utilisateurs, resserrés ou relâchés sur preuves | SLO convenus avec les clients et les fournisseurs et alignés sur les services dépendants et les contrats |
| Budget d'erreur et politique | Pas de budget ; fiabilité contre fonctionnalités décidée par la dispute | Un budget est calculé pour quelques services ; pas de conséquences convenues | Une politique écrite, signée par le produit et l'exploitation, avec des déclencheurs définis | Respect de la politique mesuré, exceptions revues, budget éclairant la planification des versions | Décisions de budget coordonnées entre équipes qui partagent des dépendances ; politique révisée à mesure que les conditions changent |
| Alerte et réponse | Alertes à seuil sur des ressources brutes ; beaucoup d'appels | Quelques alertes sur le taux de consommation ; seuils copiés d'exemples | Alertes multi-fenêtres sur le taux de consommation pour les SLO clés, avec des tickets pour la consommation lente | Qualité des alertes mesurée et ajustée à partir d'incidents passés | Alerte alignée sur les chaînes de services, et amélioration pilotée par des revues conjointes |

## Liste de vérification

- [ ] Les parcours utilisateurs critiques du service sont listés, chacun écrit du côté de l'utilisateur.
- [ ] Chaque SLI est défini comme événements bons sur événements valides, avec les exclusions écrites.
- [ ] Les SLI de latence utilisent des percentiles et un seuil énoncé, non des moyennes.
- [ ] Chaque SLO énonce sa cible, sa fenêtre et l'endroit où le SLI est mesuré.
- [ ] Le SLO est plus strict que tout SLA, et les deux sont rapportés séparément.
- [ ] Une politique de budget d'erreur existe, est signée par les dirigeants du produit et de l'exploitation, et nomme qui peut accorder des exceptions.
- [ ] Les alertes sur le taux de consommation utilisent au moins deux périodes de rétrospection, et les consommations lentes créent des tickets plutôt que des appels.
- [ ] Chaque enregistrement d'incident montre le budget qu'il a consommé.
- [ ] L'atteinte du SLI est comparée chaque mois aux contacts du support et aux résultats de satisfaction.
- [ ] Chaque SLO a un responsable (une équipe ou un rôle) et une date de revue, et les changements sont consignés avec leurs motifs.
- [ ] Aucun résultat de SLO n'est utilisé pour classer ou récompenser des individus.

## Prompts d'IA

**Rédigez des SLI candidats à partir de parcours utilisateurs.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Rédigez une politique de budget d'erreur.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Passez en revue un SLO pour y chercher des risques de détournement.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins, comme la disponibilité, la qualité des alertes et les incidents majeurs, et le garde-fou qui doit se trouver à côté de chaque mesure de SLO.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique du tableau de détournement et chaque renvoi titré.

## Idées clés

- Choisissez quelques SLI d'après ce que font les utilisateurs, et exprimez chacun comme événements bons sur événements valides.
- Un SLO en dessous de 100 % est une décision sur le risque, et le budget d'erreur est la marge que cette décision laisse au changement.
- Écrivez la politique de budget d'erreur à l'avance, signez-la au niveau de la direction et consignez chaque exception.
- Alertez sur le taux de consommation avec plus d'une fenêtre de rétrospection, pour que les appels reflètent un vrai risque pour l'objectif.
- Gardez les définitions : consignez chaque changement et comparez les résultats du SLI à ce que rapportent les utilisateurs.
- Attribuez le budget à des services et des équipes, jamais à des individus, et revoyez chaque SLO au moins chaque trimestre.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
