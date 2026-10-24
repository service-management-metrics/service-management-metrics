# Les résultats plutôt que la production : choisir ce qu'il faut mesurer

**Une bonne métrique de service ou de livraison décrit un changement dans la vie d'un client ou dans la santé d'un service : choisissez donc les mesures en demandant ce qui a changé pour quelqu'un, et ne traitez les décomptes d'activité et de production que comme des éléments de preuve complémentaires.**

## Vue d'ensemble et motivation

La plupart des tableaux de bord commencent par ce qui est facile à compter : tickets clos, changements déployés, récits terminés, appels décrochés. Tout cela est déjà horodaté dans un outil et sous le contrôle de l'équipe. Aucun de ces chiffres ne dit si quelqu'un s'en trouve mieux.

Quatre mots permettent de s'y retrouver. L'**activité** est l'effort dépensé : heures travaillées, réunions tenues, appels passés. La **production** est ce que le travail a fourni : une version, un ticket résolu, un article publié. Le **résultat** est le changement que cette production a rendu possible pour quelqu'un : un client accomplit une tâche en moitié moins de temps, une clinique ouvre à l'heure, un problème récurrent cesse de revenir. L'**impact** est l'effet à plus long terme sur les objectifs de l'organisation, comme la fidélisation des clients ou un moindre coût de service. Dans ITIL 4 (l'édition 2019 du cadre publié par AXELOS, aujourd'hui détenu par PeopleCert), une production est un livrable tangible ou intangible d'une activité, et un résultat est un effet pour une partie prenante rendu possible par une ou plusieurs productions.

[ITIL](https://en.wikipedia.org/wiki/ITIL) ajoute une seconde idée qui sert de test pour toute métrique : la valeur est [cocréée](https://en.wikipedia.org/wiki/Co-creation) par le fournisseur du service et le consommateur du service, et non délivrée par l'un à l'autre. Cela s'inscrit dans la pensée de la [logique dominante du service](https://en.wikipedia.org/wiki/Service-dominant_logic), la vision du marketing selon laquelle la valeur naît à l'usage, quand le client applique les capacités d'un fournisseur à ses propres objectifs. Une métrique mesurée entièrement du côté du fournisseur ne peut pas prouver la valeur. Une équipe peut clore tous les tickets et livrer toutes les versions à l'heure alors que les utilisateurs ne trouvent pas leur travail plus facile.

La vision agile arrive au même point par un autre chemin. Les principes du Manifeste du [développement logiciel agile](https://en.wikipedia.org/wiki/Agile_software_development) disent que le logiciel qui fonctionne est la principale mesure d'avancement, et que la simplicité, l'art de maximiser la quantité de travail non effectué, est essentielle. Ni l'un ni l'autre ne récompense un plus grand tas de production. Les deux visent à livrer quelque chose qui fonctionne pour ses utilisateurs et à ne pas construire ce dont personne n'a besoin.

Les métriques de production et d'activité ne sont pas fausses. Elles servent à gérer le flux, la capacité et le coût, et les sujets suivants s'en servent beaucoup (voir le sujet 2.1, Mesures de flux). L'erreur est de les laisser tenir lieu de valeur. Une [métrique de façade](https://en.wikipedia.org/wiki/Vanity_metric) est un chiffre facile à rapporter et qui augmente presque toujours : nombre total d'utilisateurs inscrits, tickets traités cumulés, fonctionnalités livrées à ce jour. Elle donne à une équipe l'air d'être occupée et ne dit à personne quoi faire ensuite. Le test : ce chiffre pourrait-il monter pendant que la situation du client se dégrade ?

Les métriques de résultat sont plus difficiles. Elles bougent lentement, dépendent de facteurs hors du contrôle de l'équipe et sont bruyantes. Un changement du parcours de réinitialisation du mot de passe peut mettre des semaines à apparaître dans le volume de contacts, sur lequel une campagne marketing influe aussi. La réponse consiste à choisir les résultats avec soin, à les apparier aux mesures de production que l'équipe pilote au jour le jour, et à être honnête sur la part du mouvement que l'équipe peut revendiquer.

Un **indicateur avancé** est une mesure qui bouge avant le résultat qui vous importe et sur laquelle on peut agir tôt, comme la part des nouveaux services dotés d'un runbook de support testé. Un **indicateur retardé** rend compte du résultat après coup, comme le nombre d'incidents majeurs ou le taux d'attrition des clients. Les économistes utilisent le même appariement, en classant un [indicateur économique](https://en.wikipedia.org/wiki/Economic_indicator) comme avancé, coïncident ou retardé. Les équipes ont besoin des deux : les indicateurs retardés disent si l'on avait raison, et les indicateurs avancés donnent quelque chose sur quoi agir tant qu'il est encore temps. Un indicateur avancé n'est qu'une hypothèse tant que vous n'avez pas vérifié, sur plusieurs périodes, qu'il bouge bien avant le résultat.

Les mesures de résultat sont un remède partiel au détournement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Une mesure proche de ce que vivent les clients est plus difficile à améliorer sans les aider, et c'est dans la distance au résultat que vit le détournement. Les cadres qui aident à choisir sont traités à part (voir le sujet 1.7, Cadres de mesure).

## Principes clés

- **Partez du résultat et remontez.** Nommez le changement voulu pour un client, un service ou l'organisation, demandez quelle preuve le montrerait, puis quels signes avancés apparaîtraient plus tôt.
- **La valeur est cocréée : incluez donc le côté du consommateur.** Au moins une mesure de chaque ensemble doit venir des personnes qui utilisent le service : leur réussite, leur effort ou leur expérience, plutôt que les seuls enregistrements du fournisseur.
- **Gardez la chaîne visible.** Montrez l'activité, la production, le résultat et l'impact comme une chaîne. Les équipes pilotent sur les productions et les indicateurs avancés, et se jugent sur les résultats.
- **Appariez, ne substituez jamais.** Une mesure de résultat explique pourquoi une mesure de production importe, et une mesure de production explique que faire face à une mesure de résultat. Aucune ne fonctionne seule.
- **Préférez les mesures qui peuvent baisser comme monter.** Un chiffre qui ne fait que croître est un décompte, pas un signal.
- **Traitez les indicateurs avancés comme des hypothèses.** Vérifiez qu'ils prédisent le résultat, et abandonnez-les quand ce n'est pas le cas.
- **Soyez honnête sur l'attribution.** Les résultats ont de nombreuses causes. Dites ce que l'équipe influence et ce qu'elle ne fait qu'observer.

## Définitions des métriques

Les cinq métriques ci-dessous sont choisies pour déplacer un ensemble de mesures vers les résultats. Ce sont des exemples de la forme à employer, et les sujets suivants définissent les mesures de service et de livraison qui les remplissent. Les seuils illustratifs de ce sujet ne sont pas des repères de référence.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des résultats | Part des métriques rapportées qui sont reliées dans le registre des métriques à un résultat écrit pour un client ou un service nommé | métriques avec un lien écrit vers un résultat / métriques rapportées dans la période. Ne compte que les métriques figurant dans un rapport régulier ; exclut les mesures de la vue de travail tenues par une seule équipe | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Objectif produit et objectif de livraison | Trimestrielle |
| Taux d'adoption d'une fonctionnalité | Part des utilisateurs éligibles qui utilisent une capacité nouvelle ou modifiée dans une fenêtre déclarée après la mise en production | utilisateurs éligibles distincts ayant utilisé la capacité dans les 30 jours suivant la mise en production / utilisateurs éligibles distincts de cette période. L'horloge démarre à la disponibilité générale ; exclut les comptes de test internes et les utilisateurs qui ne pouvaient pas accéder à la capacité | pourcentage | Analytique produit, journaux d'usage du catalogue de services | Conception de services ; gestion des versions | Retour de la revue avec les parties prenantes ; mesure de résultat produit | Mensuelle pendant 3 mois après la mise en production, puis trimestrielle |
| Taux de contacts répétés | Part des contacts d'un utilisateur concernant le même service dans une fenêtre déclarée après la clôture d'un contact antérieur | nouveaux contacts du même utilisateur sur le même service dans les 14 jours suivant un contact clos / contacts clos dans la période. L'horloge démarre à la clôture ; exclut les contacts ouverts comme suivis planifiés | pourcentage | Historique des contacts et des tickets de l'outil ITSM | Centre de services ; gestion des incidents | Défauts échappés ; définition de terminé | Mensuelle |
| Taux de validation des indicateurs avancés | Part des indicateurs avancés en usage dont le mouvement a précédé celui de l'indicateur retardé associé pendant la période de revue | indicateurs avancés dont l'avance sur l'indicateur retardé est confirmée / indicateurs avancés en usage. Jugé par l'équipe lors d'une revue documentée, sur au moins quatre périodes de données ; exclut les indicateurs ayant moins de quatre périodes | pourcentage | Registre des métriques et historique des tendances | Amélioration continue | Actions de rétrospective sur les expériences | Deux fois par an |
| Taux d'achèvement des revues de bénéfices | Part des changements ou améliorations financés dont le résultat visé a été revu par rapport à sa mesure après le délai convenu | changements dotés d'une revue de résultat terminée dans les 90 jours suivant la date de revue prévue / changements dont la date de revue tombait dans la période. Exclut les changements retirés avant la mise en production | pourcentage | Enregistrement du changement, registre d'amélioration, notes de revue | Amélioration continue ; maîtrise des changements | Revue avec les parties prenantes ; revue de l'incrément produit | Trimestrielle |

La couverture des résultats et le taux d'achèvement des revues de bénéfices mesurent la pratique de mesure et se satisfont facilement avec de la paperasse. Le taux d'adoption d'une fonctionnalité et le taux de contacts répétés se situent plus près du client et sont ceux qui ont le plus de chances de changer une décision.

## Recommandations

### Partir des résultats

**1. Écrivez le résultat sous la forme d'une phrase sur une personne ou un service.** « Le personnel peut réinitialiser son mot de passe sans appeler le centre de services » est un résultat. « Déployer le nouveau portail d'identité » est une production. Placez la phrase en tête de l'entrée de la métrique dans le registre, puis choisissez la mesure. Si vous ne pouvez pas écrire la phrase, vous n'êtes pas prêt à choisir un chiffre.

**2. Dessinez la chaîne de l'activité à l'impact.** Pour chaque objectif, esquissez quatre cases : ce que l'équipe fait, ce qu'elle produit, ce qui change pour l'utilisateur et ce que cela change pour l'organisation. Placez chaque métrique candidate dans une case. Un ensemble plein à gauche et vide à droite est le signal qu'il faut chercher des preuves de résultat.

**3. Appliquez à chaque métrique le test de la cocréation de valeur.** Demandez : le point de vue de qui sur la valeur ce chiffre montre-t-il, et le point de vue du consommateur apparaît-il quelque part dans l'ensemble ? En termes ITIL, une relation de service comporte un fournisseur et un consommateur, et la valeur se réalise dans l'usage du consommateur. Une mesure du temps de réponse à l'horloge du fournisseur a besoin d'une compagne du côté du consommateur, comme le fait que l'utilisateur ait pu poursuivre son travail (voir le sujet 6.2, Accords de niveau d'expérience).

**4. Demandez une décision, pas un rapport.** Pour chaque métrique candidate, écrivez la décision que quelqu'un prendrait si elle bougeait. Retirez toute mesure sans décision attachée. C'est le filtre le plus rapide contre les métriques de façade, et il empêche un tableau de bord de grossir par défaut.

### Apparier productions et résultats

**5. Choisissez une mesure de résultat par grande mesure de production.** Si vous rapportez des déploiements, appariez-les avec une mesure de ce que les déploiements ont changé pour le service, comme l'échec des changements ou les incidents visibles par les utilisateurs (voir le sujet 2.8, Métriques DORA). Si vous rapportez des tickets résolus, appariez-les avec les contacts répétés. La paire doit figurer sur la même page. Une équipe qui ne voit que la production optimisera la production.

**6. Choisissez des mesures de résultat que l'équipe peut influencer, et nommez celles qu'elle ne fait qu'observer.** Une équipe peut influencer les contacts répétés de son propre service et l'adoption de ses propres fonctionnalités. Elle ne peut qu'observer le chiffre d'affaires de l'entreprise. Les deux ont leur place dans le tableau, mais les objectifs et le travail d'amélioration s'attachent aux mesures influencées. Nommer la différence évite le blâme pour des mouvements que l'équipe n'aurait pas pu causer.

**7. Employez les approximations ouvertement.** De nombreux résultats ne peuvent pas être mesurés directement. Choisissez une approximation, dites que c'en est une, et dites ce qu'elle manque. Le taux de contacts répétés est une approximation de « le problème a vraiment été résolu », et une courte enquête ou la lecture de commentaires libres peut vérifier qu'il dit toujours la vérité (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Construire des paires avancé et retardé

**8. Appariez chaque indicateur retardé avec au moins un indicateur avancé sur lequel vous pouvez agir.** Les incidents majeurs sont un indicateur retardé, et la part des services dotés de runbooks de reprise testés peut les précéder. L'indicateur avancé donne à l'équipe quelque chose à faire ce mois-ci. Choisissez des indicateurs avancés auxquels vous croyez pour une raison que vous pouvez écrire, puis mettez cette croyance à l'épreuve.

**9. Validez les indicateurs avancés par un retour en arrière.** Deux fois par an, tracez chaque indicateur avancé face à son partenaire retardé sur au moins quatre périodes et demandez si le mouvement est venu en premier. Là où la relation est faible, changez ou abandonnez l'indicateur avancé.

**10. Utilisez des objectifs de niveau de service là où le résultat a une mesure claire côté utilisateur.** Un indicateur de niveau de service (SLI) bien choisi est un signal avancé du contentement des utilisateurs, et un objectif de niveau de service (SLO) énonce le niveau requis (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Ils fonctionnent mieux quand l'indicateur est choisi du point de vue de l'utilisateur, pas de celui de la machine.

### Garder le choix honnête

**11. Bouclez la boucle avec des revues de résultats.** Quand un changement ou une amélioration est financé, consignez le résultat qu'il doit produire, la mesure et la date à laquelle quelqu'un regardera. Tenez la revue même si la réponse est gênante. Sans revues, le langage des résultats n'est que de la décoration (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**12. Gardez les mesures de production dans la vue de travail, et dites à quoi elles servent.** Les mesures de flux, de capacité et de coût sont les instruments de l'équipe, pas son tableau de score. Le temps de cycle indique où le travail attend (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Rapportées vers le haut sans résultat à côté, elles invitent au détournement.

## Vecteurs de détournement et garde-fous

Se tourner vers les résultats ne supprime pas le détournement. Cela en change la forme : les résultats peuvent être redéfinis, les approximations pilotées et les revues sautées.

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des résultats | Écrire une phrase de résultat vague (« améliorer le service ») pour chaque métrique afin que le lien existe sur le papier | Échantillonner le registre : une phrase doit nommer une personne ou un service et un changement ; vérifier qu'une décision a été prise grâce à la mesure |
| Taux d'adoption d'une fonctionnalité | Compter comme adoption une première utilisation forcée ou automatique ; réduire le groupe d'utilisateurs éligibles ; faire de la capacité le choix par défaut pour qu'elle soit « utilisée » sans avoir été choisie | Réussite de la tâche ou satisfaction des utilisateurs de la capacité ; rétention de l'usage à 30 et 90 jours ; lire les commentaires libres |
| Taux de contacts répétés | Dire aux utilisateurs de soulever une nouvelle demande par un autre canal ; clore le contact comme doublon d'un contact sans rapport ; allonger la clôture pour éviter un nouveau contact dans la fenêtre | Contacts par canal pour le même service ; revue échantillonnée des notes de clôture ; taux de « problème résolu » déclaré par les utilisateurs |
| Taux de validation des indicateurs avancés | Déclarer valides des indicateurs avancés après un examen informel ; choisir des indicateurs qui bougent trivialement avec le résultat | Compte rendu écrit de la revue avec les données tracées ; inviter une personne extérieure à l'équipe à contester un résultat par cycle |
| Taux d'achèvement des revues de bénéfices | Tenir une revue de pure forme, ou fixer le résultat visé après coup pour qu'il soit toujours atteint | Comparer le résultat de la revue avec l'énoncé fait quand le changement a été financé ; suivre la part des revues qui ont entraîné un changement de plan |

Une lecture saine montre des mesures de résultat qui déçoivent parfois, des revues qui mettent parfois fin à un changement et des indicateurs avancés qui sont parfois abandonnés. Un ensemble où chaque résultat est atteint et chaque indicateur avancé confirmé a probablement été réglé pour cela.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesures de production et d'activité | Rapides, peu coûteuses et sous le contrôle de l'équipe ; adaptées aux décisions de flux et de capacité | Faciles à gonfler ; ne disent rien sur le fait que quelqu'un en ait bénéficié |
| Mesures de résultat | Restent proches de ce que valorisent les clients et l'organisation ; plus difficiles à améliorer sans aider | Lentes, bruyantes et influencées par des facteurs hors du contrôle de l'équipe |
| Indicateurs avancés | Donnent une alerte précoce et quelque chose sur quoi agir | Peuvent induire en erreur si le lien avec le résultat est supposé plutôt que vérifié |
| Indicateurs retardés | Rendent compte de ce qui s'est vraiment passé | Arrivent trop tard pour changer le résultat de cette période |
| Approximations de résultats | Rendent visibles des résultats difficiles à mesurer | Peuvent s'éloigner de ce qu'elles représentent et invitent à la substitution |
| Un petit ensemble centré sur les résultats | Facile à retenir et à discuter ; concentre l'effort | Peut manquer un problème extérieur aux résultats choisis |
| Un large ensemble équilibré | Couvre davantage le service | Dilue l'attention ; chaque mesure reçoit moins d'examen |

Gardez un petit nombre de mesures de résultat que tout le groupe peut réciter, appuyez chacune sur les mesures de production et les mesures avancées qui l'expliquent, et revoyez l'ensemble quand la stratégie change. Les approches équilibrées associées au [tableau de bord prospectif](https://en.wikipedia.org/wiki/Balanced_scorecard) et aux [objectifs et résultats clés](https://en.wikipedia.org/wiki/Objectives_and_key_results) cherchent toutes deux à relier le travail quotidien aux résultats qui comptent. Elles échouent de la même façon quand les résultats clés deviennent une liste de productions avec un pourcentage à côté.

## Questions à discuter avec votre équipe

**1. Parmi nos cinq métriques les plus en vue, lesquelles peuvent monter alors que nos clients s'en trouvent plus mal ?**
Écrivez les cinq sur un tableau et posez la question à chacune. Un décompte de tickets clos, par exemple, peut monter pendant que les contacts répétés montent aussi. L'animateur doit noter les cas où la réponse est oui, car ce sont les métriques de façade. Terminez en demandant quelle mesure de résultat serait placée à côté de chacune.

**2. À quoi ressemble une bonne semaine pour un client de ce service, avec ses mots ?**
Demandez à ceux qui parlent aux clients, en évitant le vocabulaire de l'équipe. Les réponses deviennent des phrases de résultat, et révèlent souvent des choses que personne ne mesure, comme ne pas avoir à expliquer deux fois un problème. Retenez trois phrases et demandez lesquelles peuvent être mesurées, même par approximation.

**3. Parmi nos indicateurs avancés, lesquels avons-nous déjà comparés au résultat qu'ils sont censés prédire ?**
Choisissez un indicateur et tracez-le face à son partenaire retardé sur les dernières périodes. Demandez ce que vous voyez et quelle confiance vous avez. Si la relation est faible, discutez de ce par quoi le remplacer. Traitez l'abandon d'un indicateur comme un résultat normal de l'apprentissage, pas comme un échec.

**4. Où notre équipe revendique-t-elle le mérite d'un résultat qu'elle ne fait qu'observer ?**
Regardez les métriques des rapports à la direction. Lesquelles dépendent de facteurs hors du contrôle de l'équipe, comme la saisonnalité, une campagne ou un fournisseur ? Convenez d'une manière simple d'énoncer ce que l'équipe influence et ce qu'elle observe. Cela prépare l'équipe au jour où un résultat bouge pour des raisons qu'elle n'a pas causées.

**5. Qu'avons-nous livré ou changé au cours des deux derniers trimestres, et quelqu'un a-t-il revu si cela avait fonctionné ?**
Dressez la liste des changements sur un tableau et marquez ceux qui ont un compte rendu de revue. Pour les autres, demandez quel résultat était attendu et comment on pourrait le savoir maintenant. Résistez à la chasse aux coupables. Le but est de lancer l'habitude, même si les premières revues sont tardives.

**6. Quelles mesures de production devraient revenir dans notre vue de travail ?**
Certaines mesures sont utiles à l'équipe et trompeuses dans un rapport. Demandez lesquelles sont lesquelles, et ce que chacune exigerait à côté d'elle pour rester dans un rapport de direction. Convenez d'une mesure à déplacer ce trimestre. Déplacer une mesure est un signe de maturité, pas un recul de la transparence.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison sont tentées par la production parce que leurs outils la rapportent par défaut. Le remède est de faire de l'adoption et de la preuve de résultat une partie de la définition de terminé et de la revue avec les parties prenantes. Une fonctionnalité que personne n'utilise est une leçon, et le découvrir tôt est un bénéfice de la pratique agile. Les équipes gardent les mesures de flux dans leur vue de travail et les apparient avec des mesures d'adoption et d'échec (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes de service sont mesurées sur le traitement : appels décrochés, tickets clos, temps de résolution. Cela compte pour la planification et le coût, et dit peu de choses sur le fait que le problème de l'utilisateur ait disparu. Les équipes d'exploitation doivent ajouter les contacts répétés, la récurrence de la même cause et la résolution déclarée par l'utilisateur à côté des mesures de vitesse, et traiter avec méfiance un nombre croissant de tickets faciles (voir le sujet 3.1, Métriques du centre de services). Des indicateurs avancés comme l'usage des articles de connaissance et les runbooks testés donnent à l'équipe quelque chose sur quoi agir entre les incidents.

### Direction et gouvernance

Ce que les dirigeants demandent à voir apprend à l'organisation ce qui compte. Demandez des résultats, acceptez qu'ils soient plus lents et plus bruyants, et financez les revues qui les vérifient. Les instances de gouvernance doivent chercher un ensemble court et stable de mesures de résultat, chacune avec un responsable désigné et un historique des décisions qu'elle a éclairées (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Un dirigeant qui demande « qu'avons-nous appris ? » obtient de meilleures données que celui qui demande « pourquoi est-ce rouge ? »

### Clients et utilisateurs

Les clients éprouvent directement les résultats et voient rarement les décomptes de production. Ils sont le test final de l'ensemble : le service leur permet-il de poursuivre ce pour quoi ils sont venus ? De courtes enquêtes, des commentaires libres et l'observation de tâches réelles sont de meilleures preuves que n'importe quelle mesure côté fournisseur. Les clients ont aussi un rôle dans la cocréation de valeur, ce qui signifie que la qualité de leur information, de leur mise en capacité et de leur écoute influe sur les résultats (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une équipe de plateforme interne qui offre un service libre-service de mise à disposition d'environnements à une quarantaine d'équipes produit, soutenue par un petit centre de services. Tous les chiffres de cet exemple sont illustratifs.

Le rapport mensuel montre 310 demandes satisfaites (contre 240), un délai médian d'exécution de 6 heures et 12 fonctionnalités livrées dans le trimestre. La direction est satisfaite. Le responsable de la plateforme remarque que les contacts au centre de services sur la mise à disposition ont eux aussi augmenté, et demande à l'équipe de tracer les productions face au résultat espéré : des équipes produit qui obtiennent un environnement sans attendre ni demander d'aide.

L'exercice de chaîne montre que l'équipe avait mesuré l'activité et la production, mais aucun résultat. Elle en ajoute trois. Le premier est le taux de contacts répétés : 22 % des contacts sur la mise à disposition sont suivis d'un autre contact sur le même service dans les 14 jours. Le deuxième est le taux d'adoption des fonctionnalités pour les trois plus récentes, qui s'établit à 9 %, 14 % et 61 % des équipes éligibles après 30 jours. Le troisième, un indicateur avancé, est la part des demandes qui s'achèvent sans étape humaine, actuellement 48 %. Elle fait l'hypothèse que celui-ci devrait précéder une baisse du taux de contacts répétés.

Elle décide de suspendre deux fonctionnalités prévues qui ressemblent aux deux à faible adoption et de consacrer le trimestre à la cause la plus fréquente de contacts répétés, un message d'erreur peu clair quand un quota est dépassé. Elle consigne le résultat visé, un taux de contacts répétés inférieur à 15 %, et fixe une date de revue dans 90 jours.

Le risque de détournement apparaît au deuxième mois. Le taux de contacts répétés tombe à 11 %, ce qui paraît merveilleux. Un échantillon de 25 contacts clos montre que le centre de services avait commencé à demander aux utilisateurs d'utiliser un canal de discussion pour les questions de suivi, et que ce canal n'est pas compté dans l'outil ITSM. L'équipe ajoute au rapport les contacts par canal, intègre les transcriptions de discussion à l'échantillon et constate que le taux combiné est de 17 %. C'est une amélioration réelle, plus modeste que la première lecture. En revue, le responsable rapporte 17 %, note que l'indicateur avancé est passé de 48 à 57 % en phase, et consigne que l'hypothèse a tenu sur deux des quatre périodes nécessaires pour la déclarer validée.

## Agilité, IA, automatisation et analytique

### Agilité

La livraison continue permet de publier à peu de frais de petits changements et de voir si un résultat pour l'utilisateur a bougé. Une bonne pratique consiste à énoncer le résultat visé et le signal qui le montrerait avant le début du travail, et à vérifier le signal après la mise en production avec les parties prenantes. La précaution est que des mises en production fréquentes tentent les équipes de compter les versions comme du progrès, ce qui est encore de la production.

### IA

Les outils d'IA font monter la production facilement : plus de code, plus de brouillons, plus de réponses. La question du résultat est de savoir si les utilisateurs sont mieux servis : appariez donc les décomptes de production avec un résultat comme le taux de contacts répétés ou la réussite des tâches sur le parcours assisté par l'IA. La précaution est qu'un résultat qui s'améliore pendant que l'usage de l'IA monte peut avoir d'autres causes : évitez donc d'affirmer que l'outil en est la cause sans comparaison.

### Automatisation

Automatisez la saisie des signaux de résultat qui existent déjà, comme les contacts répétés, l'abandon ou le temps jusqu'à la première réponse utile. L'automatisation du travail lui-même doit être mesurée par ce qu'elle libère et ce qu'elle casse. La précaution est qu'une tâche automatisée qui s'exécute souvent a l'air productive même quand son résultat n'est jamais utilisé.

### Analytique

Les données de résultat sont généralement plus lentes et plus bruyantes que celles de production. Utilisez des indicateurs avancés pour piloter, et validez-les de temps en temps par rapport au résultat plus lent. La précaution est que la corrélation entre une production et un résultat dans les données de l'an dernier ne signifie pas que la production continuera à le prédire. En termes ITIL 5, l'accent que le propriétaire met sur les résultats mesurables fait de ce sujet la base du sujet 1.8, Mesure d'ITIL 5 et résultats de valeur.

## Éclairage sectoriel

**Startup.** Les résultats sont à portée de main : les fondateurs peuvent parler aux clients et voir s'ils restent. Le risque est de ne mesurer que la croissance des utilisateurs et des fonctionnalités, qui sont des métriques de façade tant que la rétention et la réussite des tâches ne sont pas visibles. Choisissez une mesure de résultat que les clients reconnaîtraient et vérifiez-la chaque semaine.

**Petite entreprise.** Les chiffres sont trop petits pour des statistiques : préférez donc les conversations directes, une poignée de cas suivis et une courte liste d'approximations. Méfiez-vous des tableaux de bord d'éditeurs qui rapportent leur propre activité comme s'il s'agissait de votre résultat.

**Grande entreprise.** L'échelle invite au reporting de production, parce que les productions sont comparables entre de nombreuses équipes et pas les résultats. Résistez à l'envie d'imposer une définition unique de résultat à des services dissemblables. Convenez d'un petit ensemble de phrases de résultat communes, laissez chaque service choisir ses mesures et tenez le registre à jour.

**Gouvernement et secteur public.** Les obligations légales, les règles de financement et les niveaux de service fixent certaines mesures à l'avance, souvent des productions comme les dossiers traités. Respectez-les, et ajoutez à côté des mesures de résultat pour les citoyens et le personnel, comme le fait qu'une personne ait obtenu l'aide qu'elle était venue chercher. Le reporting public rend des données de résultat honnêtes plus précieuses et plus sensibles : convenez donc à l'avance de la manière d'expliquer les chiffres corrigés (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût du virage vers les résultats est surtout de l'effort et de la patience : écrire des phrases de résultat, ajouter quelques mesures comme une courte enquête ou un événement d'adoption, et tenir des revues de résultats. Le coût d'outillage est modeste, puisque la plupart des approximations peuvent être construites à partir de données déjà collectées. Le coût le plus lourd est le délai, car les données de résultat arrivent lentement et les dirigeants doivent les attendre.

Le rendement vient de meilleurs choix sur où dépenser. Le travail que personne n'utilise coûte cher, de même qu'améliorer une mesure de traitement alors que la cause sous-jacente des contacts répétés reste en place. Le schéma à attendre est moins de fonctionnalités construites puis laissées inutilisées, plus d'attention portée aux causes récurrentes et un meilleur argumentaire de financement. Ne promettez pas de pourcentage. Mesurez vos propres références, comme l'adoption des versions récentes et les contacts répétés, et comparez après quelques trimestres (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Compter ce qui est facile.** Les décomptes de tickets et de déploiements sont dans tous les outils, ce qui en fait le choix par défaut. Ajoutez au moins une mesure de résultat pour chaque service avant d'ajouter un autre décompte de production.
- **Le théâtre des résultats.** Écrire une phrase de résultat pour chaque métrique sans jamais la vérifier. Revoyez un échantillon du registre et demandez quelle décision chaque mesure a éclairée.
- **Des indicateurs avancés non testés.** Traiter un signal plausible comme une preuve. Tracez-le face au résultat retardé au moins deux fois par an et abandonnez ceux qui ne précèdent pas.
- **Des résultats comme objectifs personnels.** Attribuer une mesure de résultat à une seule personne invite au comportement décrit dans le sujet 1.2. Rattachez les résultats à des équipes et à des services.
- **Ne mesurer que le côté du fournisseur.** Un ensemble fait d'horloges et de décomptes internes manquera ce que ressentent les clients. Incluez une mesure côté consommateur pour chaque service.
- **Ne jamais revoir.** Financer des changements sur des bénéfices promis sans jamais les vérifier. Mettez une date de revue sur l'enregistrement du changement lors de son approbation.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Choix des mesures | Décomptes disponibles dans les outils | Certaines équipes écrivent des phrases de résultat | Chaque métrique rapportée a un résultat écrit et une décision qu'elle éclaire | Ensembles de résultats et de productions revus ensemble chaque trimestre | Phrases de résultat alignées entre équipes, fournisseurs et clients, et révisées quand la stratégie change |
| Indicateurs avancés et retardés | Uniquement des résultats retardés, rapportés tard | Quelques indicateurs avancés choisis à l'intuition | Indicateurs avancés et retardés appariés et consignés dans le registre | Indicateurs avancés validés par rapport aux résultats deux fois par an | Indicateurs partagés avec fournisseurs et clients ; l'ensemble évolue avec les preuves |
| Revues de résultats | Aucune revue de l'efficacité des changements | Revues occasionnelles après les gros changements | Date de revue consignée pour chaque changement financé | Revues terminées, leurs résultats alimentant le plan suivant | Revues routinières, inter-équipes, avec la contribution des clients |
| Preuves côté consommateur | Anecdotes | Enquête pour certains services | Une mesure côté consommateur pour chaque service | Preuves côté consommateur suivies dans le temps et lues avec les données opérationnelles | Les clients aident à définir et à interpréter les mesures de résultat |

## Liste de vérification

- [ ] Chaque service a au moins une phrase de résultat nommant une personne ou un service et un changement.
- [ ] Chaque métrique rapportée est placée sur la chaîne de l'activité à l'impact.
- [ ] Chaque métrique a une décision nommée qu'elle éclaire ; celles qui n'en ont pas sont retirées.
- [ ] Chaque mesure de production d'un rapport a une mesure de résultat à côté.
- [ ] Chaque service a au moins une mesure côté consommateur.
- [ ] Chaque indicateur retardé a un indicateur avancé, avec une raison écrite du lien.
- [ ] Les indicateurs avancés sont comparés aux résultats au moins deux fois par an.
- [ ] Les approximations sont étiquetées comme telles, avec ce qu'elles manquent.
- [ ] Chaque changement financé a un résultat visé, une mesure et une date de revue.
- [ ] Les mesures de résultat se rattachent à des équipes et à des services, jamais à des personnes.

## Prompts d'IA

**Transformez une métrique de production en ensemble centré sur les résultats.**

```text
Our team is [team name], which provides [service or product] to [customers or
users]. We currently report [list of output or activity metrics]. We want to
move toward outcomes. For each metric, suggest an outcome sentence about a
customer or service that it might support, and propose one outcome measure and
one leading indicator we could consider. For each suggestion, say what the
measure would miss and how it could be gamed. Do not invent benchmark values
or sources. List your assumptions and the facts you need from me.
```

**Testez la crédibilité d'un indicateur avancé.**

```text
We use [leading indicator] as a leading indicator for [lagging outcome measure].
Here are [number] periods of data for both, pasted below, with notes on
anything that changed during that time: [data and notes]. Describe whether the
leading indicator appears to move before the lagging one, and what other
explanations are consistent with the data. Do not claim causation. List your
assumptions, the limits of this much data, and what additional data would help.
```

**Rédigez une revue de résultat pour un changement récent.**

```text
We made this change: [description], approved on [date], with the intended
outcome [outcome sentence] and measure [measure]. Current data: [data]. Draft
an outcome review agenda and a short summary structure that compares the
intended outcome with what we see, separates what the team influenced from what
it only observed, and lists questions for users. Do not judge success beyond
what the data supports. List your assumptions and any data gaps.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et la mesure de résultat compagne d'une métrique de production que vous êtes sur le point de rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un nouveau sujet de métrique apparie ses mesures de production avec des résultats et des garde-fous.

## Idées clés

- L'activité, la production, le résultat et l'impact sont des choses différentes, et un tableau de bord des deux premières ne peut pas montrer la valeur.
- Dans ITIL, la valeur est cocréée avec le consommateur : chaque ensemble a donc besoin d'une mesure venant du côté du consommateur.
- Appariez les productions avec les résultats, et les indicateurs retardés avec des indicateurs avancés que vous avez testés.
- Soyez clair sur ce que l'équipe influence et ce qu'elle ne fait qu'observer.
- Revoyez les changements financés par rapport à leurs résultats visés, et laissez les résultats changer le plan.
- Les mesures de résultat réduisent le détournement sans y mettre fin : chacune a encore besoin d'un garde-fou.

## Références et lectures complémentaires

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
