# Une feuille de route d'adoption progressive

**Partez de là où vous êtes, apportez quelque chose d'utile à une équipe dans le premier mois et faites grandir le programme par petites étapes dont chacune gagne le droit à la suivante.**

## Vue d'ensemble et motivation

La plupart des recommandations sur les métriques décrivent un état final : un ensemble complet de mesures, un stockage de données propre, un tableau de bord pour chaque public, une culture de la preuve. Peu d'organisations y arrivent par un plan. Elles y arrivent, quand elles y arrivent, par une série de petites étapes utiles dont chacune s'est rentabilisée avant que la suivante commence. Ce sujet offre une feuille de route dans cet esprit : les 30 premiers jours, les 60 suivants et 90 de plus, soit environ 180 jours au total. Les délais donnent une forme approximative et non une promesse. Une petite équipe peut aller plus vite, et une grande ou prudente plus lentement.

La logique est la même logique de livraison continue que le reste du livre recommande pour les services. Livrez tôt une tranche mince et fonctionnelle. Mettez-la devant de vrais utilisateurs. Apprenez de ce qu'ils en font. Étendez ce qui a aidé et abandonnez ce qui n'a pas aidé. Un programme de métriques qui passe six mois à concevoir et lance un tableau de bord complet devant un public surpris répète l'ancienne erreur de la grande livraison : beaucoup d'efforts, un retour tardif et de fortes chances que le résultat convienne mal. L'idée de [produit minimum viable](https://en.wikipedia.org/wiki/Minimum_viable_product), la plus petite version de quelque chose qui apporte de la valeur et génère de l'apprentissage, s'applique à un programme autant qu'à un produit.

Les visées agiles façonnent la feuille de route de plusieurs façons. L'implication continue des parties prenantes signifie que les premières semaines se passent avec les personnes qui utiliseront les chiffres et seront mesurées par eux, et non dans une arrière-salle. L'amélioration continue signifie que le plan lui-même est revu et modifié à mesure que le programme apprend, dans l'esprit du [kaizen](https://en.wikipedia.org/wiki/Kaizen), la pratique d'une amélioration petite et régulière par tous. L'évolution permanente signifie qu'aucune liste de mesures n'est définitive. Un rythme soutenable signifie que la feuille de route demande une part modeste du temps d'une équipe, et que le programme n'ajoute aucune charge de rapports qui l'emporte sur son aide. Et bâtir autour de personnes motivées signifie commencer avec des volontaires et avec les questions qui leur importent.

La feuille de route respecte les autres sujets de cette partie. Elle suppose les règles de confiance du sujet sur le déploiement (voir le sujet 11.3, Déployer les métriques sans semer la peur), elle utilise les principes de tableau de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service), elle garde l'outillage mince jusqu'à ce que la valeur soit prouvée (voir le sujet 11.2, Panorama des outils) et elle suit l'avancement avec le profil de maturité du programme (voir le sujet 11.4, Modèle de maturité des programmes de métriques).

Trois idées aident à ancrer le travail initial. Premièrement, partez d'une base de référence. Un [graphique de suivi](https://en.wikipedia.org/wiki/Run_chart) de quelques mois de données existantes montre où l'on en est et donne aux changements ultérieurs quelque chose à quoi se comparer. Deuxièmement, vérifiez la [qualité des données](https://en.wikipedia.org/wiki/Data_quality) dès le début, car les améliorations initiales les plus précieuses viennent souvent d'une correction de la manière dont le travail est consigné et non d'un graphique. Troisièmement, rendez les résultats visibles : un [radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator), un affichage qui montre l'information d'un coup d'œil sans que personne la demande, aide une équipe à voir ses propres données et à lancer des conversations. Les premières étapes prennent généralement la forme d'un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) avec des participants volontaires, suivi d'une diffusion de ce qui a marché comme [gestion du changement](https://en.wikipedia.org/wiki/Change_management) dans l'ensemble de l'organisation (voir le sujet 9.6, Métriques de changement organisationnel et d'adoption).

Aucune feuille de route ne convient à toutes les organisations. Le plan ci-dessous est un point de départ à adapter par les personnes qui le mèneront.

## Principes clés

- **Partez de là où vous êtes.** Servez-vous des données, des outils et des habitudes que vous avez. N'attendez pas une nouvelle plateforme.
- **Pilotez avec des volontaires.** Une à trois équipes consentantes, travaillant sur des questions qui leur importent.
- **Apportez de la valeur dans le premier mois.** Quelque chose qui aide une équipe, non un rapport pour la direction.
- **Une tranche mince à la fois.** Une source, une vue, une poignée de mesures, puis étendez.
- **Écrivez tôt les promesses.** Une courte charte avant que le premier chiffre soit partagé.
- **Revoyez et ajustez.** Vérifiez à la fin de chaque étape ce qui a aidé, ce qui a nui et ce qu'il faut changer.
- **Arrêtez des choses.** Retirez les mesures et les rapports que personne n'utilise à mesure que les nouveaux arrivent.
- **Ne sautez pas la confiance.** Avancer vite sur l'outillage en laissant la confiance derrière soi produit de la distorsion.

## Définitions des métriques

Les mesures ci-dessous suivent l'avancement de l'adoption elle-même. Elles sont destinées à l'équipe du programme et aux sponsors, et se lisent comme des signaux, non comme des objectifs. Elles évitent les décomptes de tableaux de bord ou de rapports, qui récompenseraient l'activité.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai avant le premier résultat utile | Temps écoulé entre le début du programme et la première mesure dont une équipe pilote dit qu'elle l'a aidée à faire un changement | jours entre le lancement et le premier usage utile confirmé par une équipe | jours | Journal du programme ; confirmation de l'équipe | Amélioration continue | Livraison précoce et continue de valeur | Une fois, puis par nouvelle équipe |
| Équipes qui utilisent activement les mesures | Part des équipes invitées qui ont utilisé leurs mesures lors d'une revue dans la période, selon leur propre compte rendu | équipes qui ont utilisé des mesures dans une revue / équipes invitées | pourcentage | Confirmation de l'équipe ; notes de revue | Gestion du changement organisationnel | Implication continue des parties prenantes | Mensuelle |
| Améliorations rattachées aux mesures | Nombre de changements que des équipes ont faits et qu'elles attribuent, avec leurs raisons, à ce qu'une mesure montrait | décompte des changements rapportés par les équipes avec un lien énoncé à une mesure | décompte | Registre d'amélioration | Amélioration continue | Expériences éclairées par les preuves | Trimestrielle |
| Mesures et rapports retirés | Mesures ou rapports arrêtés parce qu'ils ont cessé d'éclairer les décisions | décompte des retraits par trimestre | décompte | Journal des changements du catalogue | Amélioration continue | Évolution permanente | Trimestrielle |
| Couverture de la base de référence | Part des mesures convenues qui ont une base de référence consignée d'au moins quelques mois | mesures avec une base de référence / mesures convenues | pourcentage | Catalogue de métriques | Gestion des niveaux de service ; amélioration continue | Les preuves plutôt que l'opinion | Trimestrielle |
| Part de l'effort du programme | Part du temps des équipes participantes consacrée aux tâches de mesure | heures de recueil, de rapport et de revue / heures totales de l'équipe, par estimation | pourcentage | Estimations de temps des équipes | Amélioration continue | Rythme soutenable | Trimestrielle |
| Achèvement des revues d'étape | Part des revues d'étape planifiées tenues avec les équipes, avec les changements consignés | revues tenues avec changements consignés / revues planifiées | pourcentage | Enregistrements du programme | Amélioration continue | Réflexion régulière | Par étape |

Le délai avant le premier résultat utile est mesuré selon le compte rendu de l'équipe pilote et non celui du programme. Les équipes qui utilisent activement les mesures sont comptées d'après ce que disent les équipes, et non d'après les connexions. Les améliorations rattachées aux mesures sont un décompte de liens énoncés et non un objectif, car un objectif produirait des liens inventés. La part de l'effort du programme devrait rester petite, et une hausse est un avertissement.

## Recommandations

### Jours 1 à 30 : écouter, convenir et livrer une chose utile

**1. Trouvez un sponsor et quelques volontaires.** Demandez à un dirigeant de parrainer le programme et de signer une courte charte. Invitez une à trois équipes curieuses et respectées. Expliquez que le but est de les aider à voir leur propre travail et à l'améliorer, et que les données ne serviront pas à classer ni à évaluer des individus (voir le sujet 11.3, Déployer les métriques sans semer la peur).

**2. Posez les questions.** Rencontrez chaque équipe pilote pendant une heure. Demandez ce qui la ralentit, ce qui la surprend et ce qu'elle voudrait savoir. Écrivez les questions. Choisissez de trois à cinq mesures de ce livre qui répondent à ces questions, chacune avec un garde-fou compagnon (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

**3. Regardez les données que vous avez déjà.** Tirez quelques mois d'historique des systèmes de référence et tracez des graphiques de suivi. Vérifiez honnêtement la qualité des données : champs manquants, catégories modifiées, enregistrements créés après coup. Corrigez la saisie à la source là où c'est peu coûteux. Un simple tableur suffit à ce stade (voir le sujet 1.5, Sources de données et instrumentation).

**4. Livrez une chose utile.** À la fin du premier mois, donnez à chaque équipe pilote une petite vue de ses propres données avec une définition pour chaque mesure, et tenez une conversation de revue. Cherchez un changement que les données suggèrent, comme supprimer une étape d'attente, et aidez l'équipe à l'essayer. Le premier résultat utile compte plus qu'un outil poli.

### Jours 31 à 90 : apprendre, étendre et en faire une routine

**5. Tenez la première revue avec les équipes pilotes.** Demandez ce qui a aidé, ce qui a embrouillé, ce qui a semblé risqué et ce qu'elles changeraient. Révisez les mesures, les définitions et la charte. Écoutez en particulier les signes de peur ou de détournement. Partagez une courte histoire de ce qui a changé, racontée par l'équipe.

**6. Automatisez le chemin mince.** Là où le travail manuel est lourd, automatisez les un ou deux flux qui comptent le plus, avec des contrôles de fraîcheur et de rapprochement avec la source. Gardez les définitions dans un catalogue simple et portable. N'achetez pas encore de plateforme, sauf si l'essai a montré que les outils existants ne peuvent pas faire le travail (voir le sujet 11.2, Panorama des outils).

**7. Établissez un rythme de revue.** Tenez une courte revue mensuelle dans chaque équipe pilote qui regarde les tendances, consigne les décisions et note les événements. Incluez la possibilité de dire « aucune action ». Ajoutez un regard trimestriel sur l'ensemble du programme avec les sponsors, à l'aide de vues agrégées et de commentaires des équipes.

**8. Invitez la vague suivante.** Offrez l'approche à davantage d'équipes, portée par les histoires des équipes pilotes. Laissez chaque nouvelle équipe choisir ses mesures dans un menu, avec un petit noyau commun. Gardez un rythme soutenable : quelques équipes à la fois, avec le soutien des équipes pilotes et du responsable du programme.

### Jours 91 à 180 : renforcer, équilibrer et préparer la passation

**9. Concevez les vues par public.** Avec le public, concevez les vues du responsable de service et de la direction décrites dans le sujet du tableau de bord, avec des définitions communes et les commentaires des équipes (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service). Gardez chaque vue petite. Retirez les anciens rapports qu'elles remplacent.

**10. Ajoutez équilibre et résultats.** Étendez les mesures du pilote à un ensemble équilibré qui comprend la qualité, la fiabilité, l'expérience et le coût, avec des résultats à côté de l'activité (voir le sujet 6.5, Réalisation de la valeur et résultats métier). Vérifiez pour chaque nouvelle mesure son vecteur de détournement et son garde-fou avant qu'elle soit montrée.

**11. Évaluez le programme.** Menez l'auto-évaluation du sujet sur le modèle de maturité avec chaque équipe participante, rapportez le profil et les thèmes, et choisissez une ou deux prochaines étapes dans la dimension qui limite les autres (voir le sujet 11.4, Modèle de maturité des programmes de métriques). Comptez ce que vous avez retiré autant que ce que vous avez ajouté.

**12. Décidez de la suite.** À la revue du 180e jour, avec les équipes et les sponsors, décidez de poursuivre, d'ajuster ou d'arrêter. Écrivez ce que le programme a fait, à quel effort et ce qui a changé dans les services. Choisissez la prochaine étape : plus d'équipes, un outillage plus poussé, des liens avec les mesures financières ou clients, ou une consolidation. Consignez la décision et les raisons.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai avant le premier résultat utile | Déclarer utile un changement trivial ; précipiter une vitrine | Demander à l'équipe ce qui a changé ; vérifier que le changement a duré |
| Équipes qui utilisent activement les mesures | Des revues tenues pour cocher une case ; prétendre à un usage qui n'a pas eu lieu | Demander la décision prise ; échantillonner les notes de revue ; parler avec les équipes |
| Améliorations rattachées aux mesures | Inventer des liens pour atteindre un décompte ; s'attribuer le mérite de changements sans rapport | La garder descriptive ; demander à l'équipe son raisonnement ; accepter les liens incertains comme tels |
| Mesures et rapports retirés | Retirer les mesures gênantes ; retirer et réintroduire sous de nouveaux noms | Revoir la liste des retraits pour y chercher des tendances défavorables ; exiger une raison énoncée |
| Couverture de la base de référence | Fabriquer un historique ; utiliser une période qui flatte les résultats ultérieurs | Consigner la source et la période ; garder les données brutes ; choisir les bases avant les changements |
| Part de l'effort du programme | Minimiser l'effort ; déplacer le travail vers des personnes hors du décompte | Demander aux personnes qui font le travail ; comparer avec les heures supplémentaires de fin de cycle |
| Achèvement des revues d'étape | Revues courtes et de pure forme ; consigner des changements qui n'ont jamais lieu | Vérifier que les changements sont menés à bien ; demander aux équipes si la revue valait leur temps |

Une lecture saine montre un premier résultat utile dans le premier mois ou les deux premiers, des équipes qui utilisent les mesures parce qu'elles les trouvent utiles, une poignée de changements attribués, des rapports retirés à côté des nouveaux, une part d'effort modeste et stable, et des revues d'étape qui mènent à de vrais changements du plan.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Pilote avec des volontaires | Confiance ; vraies histoires | Démarrage plus lent ; biais de sélection |
| Déploiement dans toutes les équipes ensemble | Couverture rapide | Résistance ; distorsion |
| Tableurs d'abord | Rapides ; peu coûteux ; apprentissage | Fragiles ; effort manuel |
| Plateforme d'abord | Finition ; passage à l'échelle | Coût ; mauvaise adéquation tant que les questions ne sont pas claires |
| Peu de mesures par équipe | Concentration ; faible charge | Peut manquer des domaines importants |
| Beaucoup de mesures à la fois | Étendue | Surcharge ; prolifération |
| Plan fixe de 180 jours | Clarté pour les sponsors | Rigide ; ignore ce qui est appris |
| Revues d'étape qui changent le plan | Apprentissage ; adéquation | Moins prévisible pour les sponsors |

La réponse en bref est de commencer avec des volontaires et des tableurs, d'étendre à mesure que la valeur est montrée, de donner aux sponsors une forme claire et des points de revue, et de permettre au plan de changer.

## Questions à discuter avec votre équipe

**1. Quelle est la question à laquelle nous aimerions pouvoir répondre sur notre travail ce mois-ci ?**
Recueillez les questions de chacun. Choisissez celle qui compte le plus et à laquelle on pourrait répondre avec des données que nous détenons déjà. Convenez de ce à quoi ressemblerait une réponse utile.

**2. Que mesurons-nous déjà, et qui le regarde ?**
Listez les rapports existants et leurs publics. Marquez ceux que personne n'utilise. Décidez lesquels retirer pour faire de la place aux nouveaux.

**3. Qu'est-ce qui nous rendrait disposés à essayer cela pendant un mois ?**
Écoutez les conditions : une charte, un mot à dire sur les mesures, un temps limité. Convenez-en avec le sponsor avant de commencer.

**4. Quel petit changement les premières données pourraient-elles suggérer ?**
Regardez ensemble quelques mois d'historique. Nommez un changement possible et un résultat attendu. Convenez de la manière dont nous saurons s'il a aidé.

**5. Quelle part de notre temps pouvons-nous y consacrer sans nuire au travail ?**
Estimez en heures par mois. Convenez d'une limite, et revoyez-la à la première revue d'étape.

**6. Quand devrions-nous arrêter ou changer le plan ?**
Décrivez des signes : aucun résultat utile, peur croissante, effort lourd. Convenez de qui décide, et de la manière dont la décision sera consignée.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes pilotes portent le risque initial et apportent la preuve initiale. Elles devraient demander la charte, choisir leurs propres mesures, utiliser les premières vues dans leurs propres revues et rapporter honnêtement ce qui a aidé et ce qui n'a pas aidé. Elles y gagnent quand le premier résultat lève un vrai obstacle.

### Équipes de service et d'exploitation

Les équipes d'exploitation fournissent une grande part des données et ont souvent la charge la plus lourde. Elles devraient aider à évaluer la qualité des données, signaler où une mesure récompenserait le mauvais comportement et protéger le temps réservé à l'astreinte et aux incidents. Leur rythme soutenable est une contrainte fixe du plan.

### Direction et gouvernance

Les dirigeants parrainent, signent la charte et protègent le programme d'un mauvais usage. Ils devraient accepter un début modeste, demander des résultats et des histoires plutôt que des décomptes de tableaux de bord, éviter de demander des classements et laisser le plan changer à mesure que le programme apprend. Ils devraient le juger sur les décisions qui se sont améliorées.

### Clients et utilisateurs

Les clients et les utilisateurs gagnent quand le programme mène à de meilleurs services. Ils peuvent participer au choix des mesures d'expérience et à l'examen de ce qui est recueilli à leur sujet. Ils devraient voir les changements qui découlent de leur retour.

## En pratique : un exemple de gestion des services

Une autorité de transport public de taille moyenne compte 12 équipes réparties entre les services numériques, la technologie d'exploitation et un centre de services. Une nouvelle directrice de l'information veut « un programme de métriques en six mois ». Une tentative antérieure avait acheté une plateforme et produit des tableaux de bord que peu de gens ouvraient. Les chiffres ci-dessous sont illustratifs.

La responsable de l'amélioration des services propose une feuille de route de 180 jours avec des revues d'étape aux jours 30, 90 et 180. La première semaine, elle rencontre la directrice de l'information, qui signe une charte d'une page, et invite trois équipes volontaires : le centre de services, une équipe d'information aux voyageurs et une équipe d'exploitation de l'infrastructure. Dans des séances d'une heure, chaque équipe énonce ses questions. Le centre de services veut savoir pourquoi les mêmes problèmes de clients reviennent. L'équipe d'information aux voyageurs veut savoir si ses changements cassent des choses. L'équipe d'infrastructure veut savoir quelle part de son temps va au travail non planifié.

Pour chaque équipe, elle choisit de trois à cinq mesures de ce livre, avec des garde-fous, et construit des graphiques de suivi dans un tableur partagé à partir des cinq mois de données précédents. Le contrôle des données révèle que 27 % des enregistrements de changement de l'équipe d'information aux voyageurs ont été créés après le déploiement, et que les catégories du centre de services avaient été réorganisées en milieu de période. Corriger l'habitude de saisie et faire correspondre les catégories prend deux semaines. Au jour 27, le centre de services voit que 19 % de ses contacts étaient des retours dans la semaine, concentrés dans deux catégories liées à une page d'horaires déroutante. L'équipe travaille avec l'équipe d'information aux voyageurs pour changer la page. Le centre de services confirme cela comme le premier résultat utile, au jour 27.

À la revue du jour 30, les équipes demandent des définitions plus courtes et moins de graphiques, et l'une demande si les données serviraient dans ses évaluations annuelles. La charte est précisée pour dire que non. Entre les jours 31 et 90, la responsable automatise deux flux, met en place une revue mensuelle dans chaque équipe qui consigne les décisions et invite quatre équipes de plus sur la foi des histoires du pilote. Les équipes qui utilisent activement les mesures sont 7 sur 7 invitées. À la revue du jour 90, les équipes rapportent cinq changements qu'elles attribuent à leurs mesures. Le programme a retiré trois anciens rapports hebdomadaires. La part d'effort est estimée à 3 % du temps des équipes. Entre les jours 91 et 180, la responsable conçoit avec ces publics les vues du responsable de service et de la direction, ajoute des mesures d'expérience et de coût à l'ensemble équilibré et mène l'auto-évaluation : la plupart des équipes sont au niveau 2 pour l'usage dans les décisions et 3 pour la confiance et la sécurité, et la prochaine étape choisie est un journal de décisions dans chaque équipe. Au jour 180, la directrice de l'information demande un classement des 12 équipes selon leur maturité. La responsable offre le profil agrégé et les thèmes, explique la charte, et la demande est abandonnée. Les sponsors conviennent d'étendre le programme aux cinq équipes restantes au cours des deux trimestres suivants, toujours sur une base volontaire.

## Agilité, IA, automatisation et analytique

### Agilité

Apportez quelque chose d'utile à une équipe dans le premier mois et grandissez par petites étapes dont chacune gagne la suivante, dans le même esprit de livraison continue que les services mesurés. La précaution est qu'une feuille de route fixe avec des dates peut piloter le programme quand l'apprentissage dit de changer de cap.

### IA

Décidez tôt où l'IA a sa place dans le programme : assistants d'IA pour l'analyse et le rapport, mesures de l'usage de l'IA et gouvernance. Ajoutez-les par petites étapes revues, avec une personne qui vérifie la production de l'IA employée dans un rapport. La précaution est qu'ajouter tôt des fonctions d'IA peut gonfler la production du programme avant que sa valeur soit montrée.

### Automatisation

Automatisez le recueil des données pour les premières mesures, pour que l'effort aille à l'interprétation, et mesurez la part d'effort du programme lui-même. La précaution est qu'automatiser trop de mesures à la fois crée une charge de maintenance que le programme ne peut pas porter.

### Analytique

Suivez le délai avant un premier résultat utile et les améliorations rattachées aux mesures, et revoyez la feuille de route à leur lumière. La décision éclairée est de savoir s'il faut étendre, tenir ou arrêter. La précaution est que les améliorations sont difficiles à attribuer à une mesure : décrivez donc honnêtement les preuves.

## Éclairage sectoriel

**Startup.** Comprimez la feuille de route. En deux semaines, convenez de trois questions et de deux ou trois mesures, et regardez-les ensemble chaque semaine ou toutes les deux semaines. Servez-vous de ce que vous avez. Revoyez après un trimestre. Une startup qui attend de construire l'outillage perdra l'habitude de regarder.

**Petite entreprise.** Les 30 premiers jours peuvent se résumer à une seule conversation, une liste de questions d'une page, un tableur et un changement. Les étapes suivantes comprennent un regard mensuel régulier. Le principal risque est que la personne qui l'a mis en place devienne la seule à le comprendre : écrivez donc ce que signifie chaque mesure.

**Grande entreprise.** Utilisez des vagues de volontaires, une petite équipe centrale qui soutient sans posséder les mesures, des définitions communes et des revues d'étape avec les sponsors. Résistez à une date mondiale unique. Attendez-vous à passer la première étape à corriger la saisie des données, et prévoyez la coordination avec la sécurité, la vie privée et les comités d'entreprise ou représentants du personnel là où ils existent.

**Gouvernement et secteur public.** La consultation des représentants du personnel et une communication claire aux organes de contrôle font partie du travail initial. Les cycles d'achat favorisent souvent de commencer avec des outils déjà détenus. Gardez les rapports imposés séparés des mesures d'amélioration, et documentez les décisions pour l'audit (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts des 180 premiers jours sont surtout du temps de personnel : le responsable du programme, un petit effort d'analyse, une part du temps des équipes pilotes et l'attention des sponsors. Les coûts d'outillage peuvent être faibles ou nuls aux premières étapes. Le coût plus élevé est celui de rater les premières étapes, par exemple en lançant des mesures sans confiance.

Les rendements apparaissent tôt si la première étape est bien choisie : un changement que les données ont suggéré, des rapports retirés, moins de disputes sur les chiffres et des équipes qui en redemandent. Construisez le dossier à partir de votre propre bilan : jours avant le premier résultat utile, changements que les équipes attribuent aux mesures, heures économisées sur les rapports retirés et effort dépensé. Évitez de citer des chiffres externes sur les rendements de l'analytique sans source traçable et sans pertinence pour votre contexte. L'affirmation crédible est modeste et locale (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Le lancement en big bang.** Des mois de conception, puis une surprise. Livrez tôt une tranche mince.
- **La plateforme d'abord.** Les outils arrivent avant les questions. Commencez avec ce que vous avez.
- **Compter les tableaux de bord.** On mesure l'activité, on ignore la valeur. Suivez les décisions et les changements.
- **Sauter la charte.** La peur comble le vide. Écrivez les promesses avant que le premier chiffre soit montré.
- **Trop d'équipes à la fois.** Le soutien s'effondre. Diffusez par petites vagues.
- **Ne jamais rien arrêter.** Les anciens rapports restent à côté des nouveaux. Retirez à mesure que vous ajoutez.
- **Un plan fixe défendu contre les preuves.** Le plan devrait changer à mesure que vous apprenez.
- **Abandonner après le premier échec.** Les premiers essais enseignent. Revoyez, ajustez et réessayez.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Démarrage et pilote | Aucun plan ; rapports ponctuels | Des équipes intéressées essaient les mesures seules | Charte, sponsor et pilotes volontaires avec un premier résultat utile | L'apprentissage du pilote pilote les plans de vagues ; délai avant valeur suivi | Les équipes diffusent l'approche entre elles ; sponsors et partenaires se joignent |
| Extension et cadence | Efforts ponctuels | Quelques revues régulières | Revues mensuelles d'équipe et revues trimestrielles du programme | Part d'effort, retrait et changements attribués gérés | Revues reliées entre équipes et services ; cadence adaptée au besoin |
| Apprentissage et ajustement | Plan fixe ou absent | Leçons occasionnellement partagées | Les revues d'étape changent le plan | Étapes de la feuille de route liées au profil de maturité | Le programme s'améliore continuellement grâce aux contributions de tous |

## Liste de vérification

- [ ] Un sponsor a signé une courte charte avant que le premier chiffre soit partagé.
- [ ] Une à trois équipes volontaires ont énoncé leurs questions avec leurs propres mots.
- [ ] Une base de référence de plusieurs mois de données et un contrôle de qualité des données existent pour chaque mesure pilote.
- [ ] Chaque équipe pilote a une petite vue avec une définition pour chaque mesure.
- [ ] Un premier résultat utile est livré, et confirmé par l'équipe, dans le premier mois ou les deux premiers.
- [ ] Un rythme de revue existe dans chaque équipe pilote et consigne les décisions.
- [ ] Les anciens rapports sont retirés à mesure que de nouvelles vues les remplacent.
- [ ] L'effort que le programme demande aux équipes est estimé et gardé petit.
- [ ] Des revues d'étape aux jours 30, 90 et 180 sont tenues avec les équipes, et le plan change en conséquence.
- [ ] La prochaine étape est décidée avec les équipes et les sponsors et consignée avec ses raisons.

## Prompts d'IA

**Rédigez un plan de 180 jours.**

```text
Draft a 180-day roadmap for introducing a service metrics program in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Choisissez les premières mesures.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Menez un contrôle de qualité des données.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Planifiez une revue d'étape.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour choisir des mesures de départ avec leurs garde-fous associés pour une équipe pilote.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une feuille de route garde les mesures au niveau de l'équipe et porte un vecteur de détournement pour chaque mesure introduite.

## Idées clés

- Partez de là où vous êtes, avec des volontaires, une charte, et les données et outils que vous avez déjà.
- Apportez un résultat utile à une équipe dans le premier mois ou les deux premiers.
- Étendez par petites vagues, et retirez des rapports à mesure que de nouvelles vues les remplacent.
- Vérifiez tôt la qualité des données, et corrigez la saisie à la source.
- Tenez des revues d'étape qui changent le plan, et gardez petit l'effort demandé aux équipes.
- Décidez de la prochaine étape avec les équipes et les sponsors, et consignez les raisons.

## Références et lectures complémentaires

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Produit minimum viable](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Graphique de suivi](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Qualité des données](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Projet pilote](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Gestion du changement](https://en.wikipedia.org/wiki/Change_management).
