# Déployer les métriques sans semer la peur

**La mesure fonctionne quand les gens croient que les chiffres décrivent leur travail pour les aider : déployez donc avec transparence, appropriation par les équipes, promesses écrites sur l'usage et aucun classement d'individus.**

## Vue d'ensemble et motivation

Un programme de métriques réussit ou échoue sur la confiance. Le même ensemble de mesures peut être un miroir utile dans une organisation et une source d'effroi dans une autre. La différence tient rarement aux mesures. Elle tient à ce que les gens croient qu'il leur arrivera à cause des chiffres. S'ils croient que les chiffres serviront à les classer, à les blâmer ou à les réduire, la réponse sensée est de se protéger : choisir un travail qui obtient de bons scores, retarder le signalement des problèmes, discuter des définitions et ajuster discrètement ce qui est consigné. Les données cessent alors de décrire le travail, et le programme perd précisément ce qu'il avait été conçu pour fournir.

Ce schéma est ancien et bien connu. L'[effet Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) décrit la façon dont les gens changent de comportement quand ils savent qu'on les observe. La [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) dit que plus un indicateur quantitatif sert à la prise de décision, plus il est soumis à des pressions de corruption et plus il fausse le processus qu'il devait surveiller. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) fait une remarque semblable sur les objectifs (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Rien de cela n'est une raison d'éviter la mesure. Ce sont des raisons de concevoir le déploiement pour que les incitations à fausser soient faibles et les raisons de dire la vérité fortes.

La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety) est la croyance partagée qu'une équipe est un lieu sûr pour prendre des risques interpersonnels, comme admettre une erreur, poser une question ou rapporter une mauvaise nouvelle. Les programmes de métriques en dépendent et peuvent aussi l'éroder. Les mesures d'échec, de reprise et de retard ne sont honnêtes que si les gens se sentent en sécurité pour les signaler (voir le sujet 9.2, Métriques de satisfaction et de bien-être, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). La [confiance](https://en.wikipedia.org/wiki/Trust_(social_science)) entre les personnes mesurées et celles qui utilisent les mesures est l'actif sous-jacent, et elle se construit lentement et se dépense vite.

La [gestion du changement](https://en.wikipedia.org/wiki/Change_management) est la discipline qui consiste à préparer et à soutenir les gens à travers un changement. Introduire des métriques est un changement organisationnel, et il mérite le même soin qu'un nouveau processus ou un nouvel outil (voir le sujet 9.6, Métriques de changement organisationnel et d'adoption). Le [cycle de vie d'adoption des technologies](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) décrit comment les innovations se diffusent des enthousiastes à une majorité, ce qui rappelle qu'un pilote respecté avec des équipes volontaires fait plus qu'un mandat. Un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) est un essai à petite échelle qui teste une approche avant un engagement plus large. Un [radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator) est un affichage visible d'information que les gens peuvent lire d'un coup d'œil sans demander, ce qui convient à la transparence quand il montre les données d'une équipe à l'équipe qui les possède.

Les visées agiles donnent sa forme au déploiement. L'implication continue des parties prenantes signifie que les personnes mesurées aident à choisir les mesures et les règles de leur usage. L'amélioration continue signifie que le programme lui-même est modifié en réponse à ce que disent les gens. L'évolution permanente signifie qu'on s'attend à ce que les mesures changent, ce qui abaisse l'enjeu de chacune. Un rythme soutenable signifie que le programme n'ajoute pas de rapports qui évincent le travail. Bâtir autour de personnes motivées signifie traiter les gens comme des adultes capables qui peuvent se servir des données pour améliorer leur propre travail, et non comme des ressources à surveiller. La posture pratique est simple : mesurez le système, partagez les données avec les personnes qui en font partie et laissez-les mener l'amélioration.

Le sujet s'articule avec les recommandations sur les tableaux de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service) et la gouvernance des mesures (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Principes clés

- **Dites à quoi servent les données, et à quoi elles ne servent pas.** Écrivez les deux, et tenez-vous-y.
- **Les équipes possèdent leurs mesures.** Les personnes qui font le travail aident à définir, voir et interpréter les chiffres qui le concernent.
- **Mesurez les systèmes, non les individus.** Aucun classement, aucun score par personne, aucun usage des données dans les évaluations individuelles.
- **Soyez transparent.** Partagez les définitions, les sources de données et qui peut voir quoi. Les surprises engendrent la méfiance.
- **Commencez avec des volontaires.** Un pilote volontaire produit des histoires et des corrections avant le déploiement élargi.
- **Montrez l'usage.** Démontrez que les chiffres mènent à de l'aide, comme lever un obstacle, et non au blâme.
- **Permettez la contestation.** Les gens peuvent remettre en cause un chiffre, et les corrections sont faites vite et visiblement.
- **Allez à un rythme soutenable.** Quelques mesures à la fois, avec le temps d'apprendre.

## Définitions des métriques

Les mesures ci-dessous disent à l'équipe du programme si le déploiement construit ou dépense de la confiance. Elles décrivent des équipes et le programme, non des individus. Plusieurs reposent sur des sondages et sur l'observation de comportements, et se lisent mieux comme des signaux dont parler.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de la charte d'usage | Part des équipes participantes qui ont convenu d'un énoncé écrit de ce à quoi servent leurs mesures et de ce à quoi elles ne servent jamais | équipes avec une charte convenue / équipes participantes | pourcentage | Chartes détenues par le programme | Gouvernance ; gestion du changement organisationnel | Accords de travail | Trimestrielle |
| Part d'appropriation par les équipes | Part des mesures affichées d'une équipe dont l'équipe a aidé à écrire les définitions ou qu'elle a approuvées | mesures approuvées par l'équipe / mesures affichées à l'équipe | pourcentage | Catalogue de métriques ; enregistrements d'approbation | Amélioration continue | Équipes auto-organisées | Trimestrielle |
| Signal de franchise | Si le signalement des problèmes et des quasi-accidents se maintient ou augmente après l'introduction des mesures | signalements de quasi-accidents ou de problèmes par équipe et par trimestre, avant et après ; tendance | signalements | Enregistrements d'incidents, de quasi-accidents et d'analyses post-incident | Gestion des incidents ; amélioration continue | Réflexion sans blâme | Trimestrielle |
| Délai de réponse aux contestations | Temps entre la contestation d'un chiffre par une personne ou une équipe et une résolution qui lui est visible | médiane et 85e percentile des jours entre la contestation et la résolution | jours | Journal des contestations | Amélioration continue ; gestion des connaissances | Réagir au retour | Trimestrielle |
| Sécurité perçue de la mesure (sondage) | Adhésion, au niveau de l'équipe, à des énoncés comme « les données sur notre travail servent à nous aider » | pourcentage d'accord au sondage d'équipe ; taux de réponse montré | pourcentage | Sondage d'équipe anonyme, agrégé | Gestion du changement organisationnel | Confiance et personnes motivées | Deux fois par an |
| Incidents d'usage individuel | Cas où des données ont été montrées ou utilisées pour classer ou évaluer des individus, contrairement à la charte | décompte des cas signalés par trimestre, avec les suites | décompte | Signalements au programme ; revue des tableaux de bord et des évaluations | Gouvernance | Respect des personnes | Trimestrielle |
| Adoption volontaire | Part des équipes admissibles qui ont choisi de rejoindre le programme dans une période, avant tout mandat | équipes qui ont adhéré / équipes admissibles invitées | pourcentage | Enregistrements du programme | Gestion du changement organisationnel | Pilotes et apprentissage | Trimestrielle |

Le sondage sur la sécurité perçue demande une taille minimale de groupe pour le rapport afin qu'aucun individu ne puisse être identifié, et il doit être anonyme. Le signal de franchise se lit avec soin : une hausse des signalements peut signifier plus de problèmes ou plus de volonté de les signaler, et la seconde est généralement ce que produit d'abord un programme sain. Les incidents d'usage individuel ne sont pas un décompte à cacher. Le but est que chaque cas soit signalé, traité et corrigé, et un petit nombre de cas signalés est le signe d'une voie de signalement qui fonctionne, non d'un échec du programme. L'adoption volontaire n'est comptée que pour la période précédant tout mandat.

## Recommandations

### Fixer d'abord les règles du jeu

**1. Écrivez les promesses et publiez-les.** Avant qu'un seul chiffre soit montré, rédigez une courte charte. Une bonne charte dit que les mesures décrivent des équipes, des services et des systèmes et ne servent jamais à classer des individus ni dans des évaluations individuelles. Elle dit qui peut voir quoi, combien de temps les données sont gardées, comment les gens peuvent contester un chiffre et ce qui arrive si les règles sont enfreintes. Les dirigeants la signent. La charte est un engagement qui permet aux gens de baisser leur garde, et elle devrait être facile à trouver et à lire.

**2. Séparez la mesure pour l'amélioration de la mesure pour le jugement.** Les équipes utilisent leurs mesures pour améliorer leur propre travail. Les dirigeants utilisent des vues agrégées pour orienter le soutien et l'investissement. Aucun de ces usages ne vise à évaluer une personne. Si une organisation doit évaluer des individus, elle devrait le faire par la conversation, des preuves et du contexte, et jamais en lisant un tableau de bord (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

**3. Soyez ouvert sur les compromis.** Dites aux gens que chaque mesure peut être détournée, que vous savez de quelles façons, et que chacune vient avec un garde-fou. Montrez les vecteurs de détournement et les garde-fous dans le style de ce livre. Nommer les risques ouvertement démontre la bonne foi, et invite les gens à signaler les manières que vous avez manquées.

### Faire des équipes les propriétaires

**4. Laissez les équipes choisir et définir.** Offrez un menu de mesures et laissez chaque équipe en choisir quelques-unes pour commencer, adapter les définitions avec une raison énoncée et ajouter les siennes. Les équipes qui ont choisi leurs mesures risquent davantage de les utiliser honnêtement. Gardez un petit noyau commun pour que les services puissent être comparés au niveau où la comparaison est valable (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**5. Montrez d'abord aux équipes leurs données.** Donnez à chaque équipe ses chiffres avant que quiconque les voie, avec le temps de les vérifier, de les corriger et d'y ajouter du contexte. L'équipe possède le récit. Quand les données sont ensuite montrées aux dirigeants, l'équipe les présente ou les annote. Cela évite les surprises et garantit que l'interprétation vient des personnes les plus proches du travail.

**6. Gardez les vues au bon niveau.** Montrez des vues au niveau de l'équipe et du service. Ne montrez pas de ventilations par personne, et désactivez les fonctions d'outils qui en produisent. Là où une vue détaillée est nécessaire pour investiguer, comme l'historique d'un seul incident, limitez l'accès, expliquez pourquoi et gardez-la hors des conversations d'évaluation (voir le sujet 11.2, Panorama des outils).

### Déployer pour gagner la confiance

**7. Pilotez avec des volontaires.** Invitez deux ou trois équipes curieuses et respectées. Travaillez avec elles sur les mesures et les règles. Laissez-les raconter leurs propres histoires à leurs pairs. Leurs corrections et leurs objections amélioreront le programme, et leur soutien pèse plus que n'importe quelle annonce. Demandez ce qu'elles changeraient avant le déploiement élargi, et changez-le.

**8. Apportez de la valeur tôt et visiblement.** Dans les premières semaines, servez-vous des données pour supprimer quelque chose qui agace l'équipe : une file qui attend toujours, une étape d'approbation sans but, un rapport que personne ne lit. Quand les gens voient que les chiffres mènent à de l'aide, ils offrent des données plus honnêtes. Quand ils voient que les chiffres mènent à des questions sur eux, ils en offrent moins.

**9. Répondez vite aux contestations.** Quand quelqu'un dit qu'un chiffre est faux, prenez-le au sérieux. Vérifiez, corrigez la définition ou les données, et dites publiquement ce qui a été fait. Une correction rapide et respectueuse construit la confiance, et une réponse défensive la dépense. Tenez un journal des contestations, et traitez les contestations répétées comme des signaux que la mesure demande du travail.

### Protéger la confiance dans la durée

**10. Guettez les signes de peur.** Les signes comprennent des équipes qui discutent des définitions pour éviter les résultats, des améliorations soudaines qui ne correspondent pas à d'autres signaux, moins de problèmes signalés, un travail choisi pour faire bonne figure et des gens qui demandent qui peut voir les données. Traitez-les comme de l'information sur le programme et non comme de la mauvaise conduite. Interrogez les équipes, écoutez et ajustez.

**11. Tenez les dirigeants à la charte.** Les dirigeants sont sous pression pour comparer, classer et expliquer. Donnez-leur ce qu'ils peuvent légitimement utiliser : des tendances, des distributions et des mesures de résultats au niveau de l'équipe et du service. Facilitez le signalement d'une entorse à la charte, répondez à chaque signalement et publiez le résultat, sans nommer les personnes qui l'ont soulevé. Une seule violation visible peut défaire des mois de travail, et une correction visible peut le reconstruire.

**12. Revoyez le programme avec les personnes qui en font partie.** Chaque trimestre, demandez aux équipes à quoi les mesures aident, ce qu'elles faussent et ce qu'elles abandonneraient. Retirez les mesures qui échouent à l'épreuve. Partagez les résultats de la revue. Un engagement durable et visible à améliorer le programme est le signal le plus fort qu'il existe pour servir les équipes (voir le sujet 9.5, Métriques d'amélioration continue).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture de la charte d'usage | Signer les chartes par formalité ; des dirigeants qui les ignorent | Vérifier l'usage de la charte en pratique ; rapporter les incidents d'usage individuel ; revoir les chartes avec les équipes |
| Part d'appropriation par les équipes | Des équipes qui approuvent des définitions qu'elles n'ont pas lues ; le programme qui présente des définitions finies à signer | Échantillonner la manière dont les définitions ont été élaborées ; suivre les changements demandés et faits par les équipes |
| Signal de franchise | Presser les équipes de signaler plus ou moins de problèmes ; renommer les catégories | Lire avec la gravité et le contenu des analyses post-incident ; comparer avec les problèmes signalés par les clients |
| Délai de réponse aux contestations | Clore des contestations sans résolution visible ; décourager les contestations | Exiger une réponse visible ; sonder les contestataires ; suivre les contestations répétées |
| Sécurité perçue de la mesure (sondage) | Coacher les répondants ; de faibles taux de réponse qui cachent des équipes mécontentes | Anonymat et taille minimale de groupe ; montrer les taux de réponse ; parler directement aux équipes |
| Incidents d'usage individuel | Ne pas signaler ; reclasser les incidents en autre chose ; blâmer ceux qui signalent | Signalement anonyme facile ; protection des personnes qui signalent ; revue des évaluations et tableaux de bord pour y chercher des données individuelles |
| Adoption volontaire | Une pression présentée comme une invitation ; compter les équipes qui ont adhéré pour éviter le contrôle | Demander aux équipes pourquoi elles ont adhéré ; vérifier l'usage en pratique ; garder la période exempte de mandat |

Une lecture saine montre des chartes auxquelles les équipes se réfèrent vraiment, des mesures que les équipes ont aidé à façonner, des signalements de problèmes stables ou en hausse, des contestations traitées rapidement, un sondage qui montre que les gens croient que les données les aident, quelques entorses signalées traitées ouvertement, et des équipes qui ont adhéré parce qu'elles le voulaient.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déploiement imposé à toutes les équipes à la fois | Rapide et cohérent | Conformité sans conviction ; détournement et ressentiment |
| Pilotes volontaires, puis diffusion | Construit des histoires et de la confiance | Plus lent ; couverture inégale |
| Les équipes choisissent toutes leurs mesures | Forte appropriation | Difficile à comparer ; lacunes de couverture |
| Noyau commun plus choix des équipes | Équilibre entre comparaison et appropriation | Demande de la gouvernance |
| Tableaux de bord ouverts entre équipes | Transparence ; apprentissage partagé | Risque de comparaison et de classements |
| Vues réservées aux équipes, avec agrégats partagés | Espace sûr pour une réflexion honnête | Les dirigeants peuvent se sentir aveugles |
| Charte écrite | Promesses claires ; base de contestation | Sans valeur si ignorée |
| Assurances informelles | Rapides | Oubliées ; aucun recours |

La réponse en bref est de commencer avec des équipes volontaires, de leur donner l'appropriation, de partager des agrégats vers le haut avec le consentement et le contexte des équipes, et d'appuyer les promesses sur une charte à laquelle les dirigeants sont tenus.

## Questions à discuter avec votre équipe

**1. Que croyons-nous qu'il arrivera avec ces chiffres, et qu'avons-nous vu arriver par le passé ?**
Invitez des histoires honnêtes de mesures bien et mal utilisées. L'animateur doit consigner les craintes sans argumenter. Convenez des promesses qui feraient le plus de différence.

**2. Qu'écririons-nous dans une charte qui dit à quoi nos données ne serviront jamais ?**
Rédigez-la ensemble en mots simples. Incluez les évaluations individuelles de performance, les classements et les licenciements, si c'est la crainte. Portez-la aux dirigeants qui devraient la signer.

**3. Lesquelles des mesures proposées choisirions-nous, et lesquelles abandonnerions-nous ?**
Laissez chacun voter en privé et comparez. Discutez des raisons pour lesquelles certaines paraissent menaçantes. Convenez d'un court ensemble à essayer pendant un trimestre.

**4. Comment saurions-nous si les gens commençaient à cacher des problèmes ?**
Listez des signes : moins de signalements, un langage adouci, du travail évité. Convenez de qui surveille et de comment nous le soulèverions sans blâme.

**5. Qui devrait voir les chiffres de notre équipe, sous quelle forme et quand ?**
Discutez de vues réservées à l'équipe, d'agrégats pour la direction et de comparaison entre équipes. Décidez de ce qui est partagé et de qui le présente. Écrivez la règle.

**6. Si un chiffre sur nous est faux, comment le ferons-nous corriger ?**
Retracez le chemin entre la constatation et la correction. Repérez les retards et qui décide. Convenez d'une voie de contestation simple et d'un délai attendu.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes portent le risque d'être mesurées, et elles détiennent la connaissance de ce que signifient les chiffres. Elles devraient participer au choix et à la définition des mesures, utiliser les données dans leurs propres revues et parler quand un chiffre induit en erreur. Elles y gagnent quand elles voient d'abord les données et quand la mesure aide à lever des obstacles.

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent souvent les données les plus riches et les charges d'astreinte et d'incidents les plus lourdes. Elles devraient se méfier des mesures qui récompensent le silence ou punissent l'escalade, protéger le signalement des incidents et des quasi-accidents, et veiller à ce que les données d'astreinte ne servent pas à classer des personnes (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants fixent la culture d'usage. Ils devraient signer et suivre la charte, demander des vues d'équipe et de service, répondre ouvertement aux entorses et éviter de demander des classements. Ils devraient juger le programme sur l'amélioration qu'il permet et sur la franchise qu'il préserve, non sur le nombre de tableaux de bord.

### Clients et utilisateurs

Les clients et les utilisateurs bénéficient de ce que les équipes signalent honnêtement les problèmes et corrigent les causes. Ils peuvent aussi être l'objet d'un recueil de données. Ils méritent de savoir clairement ce qui est recueilli à leur sujet et comment c'est utilisé, et ils peuvent être des partenaires pour décider quelles mesures montrent de la valeur pour eux (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

La division technologique d'un prestataire de services de santé introduit des métriques dans ses 15 équipes de livraison et de soutien. Une tentative antérieure, trois ans plus tôt, avait publié un classement des équipes par tickets clos et s'était terminée par un pic de clôtures de tickets de faible valeur et une baisse des incidents signalés. Les chiffres ci-dessous sont illustratifs.

La nouvelle responsable de la gestion des services commence par demander à six chefs d'équipe ce dont ils se souviennent. Ils décrivent le classement et ses retombées. Elle rédige avec eux une charte : les mesures décrivent des équipes et des services, jamais des individus ; les vues individuelles sont désactivées dans les outils ; les données ne servent jamais dans les évaluations individuelles ; les équipes voient d'abord leurs données ; toute personne peut contester un chiffre, avec une réponse en dix jours ouvrables ; et toute entorse sera signalée au programme et examinée au grand jour. Le directeur de la technologie la signe, et elle est affichée sur la page du programme.

Trois équipes se portent volontaires pour le pilote. Chacune choisit quatre mesures dans un menu et réécrit deux définitions. Une équipe insiste pour que le « temps de résolution » exclue le temps d'attente d'un client, et une autre pour que l'échec d'un changement soit défini par l'impact sur les utilisateurs et non par le seul retour arrière. Le pilote montre son premier bénéfice à la troisième semaine, quand une équipe voit son travail attendre dans une file d'approbation et supprime une étape que personne ne pouvait justifier. L'équipe présente son histoire à une réunion de la division. Sept autres équipes demandent à se joindre. L'adoption volontaire atteint 10 équipes sur 15 en deux trimestres, et les cinq dernières se joignent plus tard sans mandat.

Le programme guette la peur. Les signalements de quasi-accidents par équipe augmentent au premier trimestre, ce que la responsable lit comme une plus grande volonté de signaler, et elle le confirme en lisant un échantillon. Un sondage d'équipe avec une taille minimale de groupe montre 58 % des répondants d'accord que « les données sur notre travail servent à nous aider » au début du deuxième trimestre et 76 % au début du quatrième. Le délai de réponse aux contestations a une médiane de quatre jours ouvrables. Puis une directrice, préparant un dossier budgétaire, demande un tableau classant les équipes par nombre de déploiements. La responsable du programme lui dit que cela sort de la charte, offre une vue des tendances par service avec commentaires des équipes, et consigne la demande comme un quasi-incident d'usage individuel signalé, avec sa suite. La directrice accepte. Deux trimestres plus tard, les incidents d'usage individuel sont à un, signalé, traité et publié sans noms.

## Agilité, IA, automatisation et analytique

### Agilité

Déployez avec les personnes mesurées, avec des promesses écrites sur l'usage des données et une conversation régulière sur ce qu'elles voient. La précaution est qu'un déploiement annoncé d'en haut avec un tableau de bord des équipes invite au détournement.

### IA

Le personnel peut craindre l'IA comme outil de mesure ou comme remplaçante : soyez donc explicite sur le fait que les données dérivées de l'IA sur les individus ne servent pas à les évaluer et que le travail assisté par l'IA est mesuré au niveau de l'équipe. La précaution est qu'utiliser des outils d'IA pour analyser le comportement individuel rompt la promesse, même si c'est fait discrètement.

### Automatisation

Le recueil automatisé est acceptable quand les gens savent ce qui est recueilli et pourquoi. Publiez la liste des données recueillies et les règles d'accès. La précaution est que le recueil automatique de données d'activité ressemble à de la surveillance : ne recueillez donc que ce dont une décision a besoin.

### Analytique

Partagez d'abord les résultats avec l'équipe, et montrez comment chaque chiffre sera utilisé. La décision éclairée est de savoir si le programme a gagné la confiance. La précaution est que les signaux de franchise sont souples : combinez donc les sondages avec l'observation et traitez un faible taux de réponse comme de l'information.

## Éclairage sectoriel

**Startup.** L'équipe est petite et la confiance est personnelle. Dites à voix haute à quoi servent les chiffres, laissez toute l'équipe choisir les quelques mesures à suivre et gardez-les hors de toute conversation individuelle. Le risque est qu'une remarque en passant d'un fondateur sur un chiffre remodèle les comportements du jour au lendemain. Écrivez la promesse, même en quelques lignes.

**Petite entreprise.** Le personnel peut soupçonner que les chiffres visent à supprimer des emplois. Parlez ouvertement des raisons pour lesquelles vous mesurez, de ce que vous regarderez et de ce que vous ne regarderez pas. Impliquez les gens dans le choix des mesures, partagez ce que vous trouvez et montrez tôt une amélioration qui les a aidés.

**Grande entreprise.** L'échelle rend la confiance plus difficile, parce que la plupart des dirigeants sont éloignés des équipes. Utilisez une charte signée à un niveau élevé, des mesures détenues par les équipes avec un petit noyau commun, une configuration des outils qui empêche les vues individuelles et une voie indépendante pour signaler les entorses. Pilotez, apprenez et diffusez par les pairs, et évitez une date de déploiement mondial unique.

**Gouvernement et secteur public.** Les règles d'emploi, les syndicats et le regard public ajoutent des contraintes et des attentes. Consultez tôt les représentants du personnel, convenez avec eux de la charte et soyez clair sur la ligne entre les données d'amélioration et tout processus formel de performance. Les exigences de rapport public devraient être tenues à l'écart des mesures internes d'amélioration (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont surtout du temps de personnel : rédiger la charte, mener les pilotes, tenir des ateliers avec les équipes, traiter les contestations, réaliser des sondages et le temps des dirigeants consacré à tenir les règles. Il y a aussi un coût d'opportunité, parce qu'un déploiement soigné est plus lent qu'un mandat. Ces coûts sont petits à côté du coût d'un déploiement raté, où les données sont faussées, la confiance dépensée et le programme abandonné.

Les rendements sont des données qui reflètent la réalité, un signalement honnête des problèmes et des équipes qui se servent des mesures pour s'améliorer. Ils se manifestent par une détection plus précoce des problèmes, moins de disputes sur les chiffres et une adoption plus élevée sans contrainte. Construisez le dossier à partir de votre propre histoire : ce qui s'est passé quand des mesures ont été imposées auparavant, combien d'équipes ont adhéré volontairement cette fois et comment le signalement des problèmes a changé. Évitez de citer des chiffres publiés sur l'engagement ou la confiance sans source traçable et sans pertinence pour votre contexte (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Le classement surprise.** Des classements apparaissent dans une diapositive de direction. La confiance prend fin. Gardez les classements hors du programme.
- **Des mesures dans les évaluations de performance.** Même une mention change les comportements partout. Gardez-les dehors, par écrit.
- **Imposer d'abord, expliquer ensuite.** Conformité sans conviction. Pilotez avec des volontaires et expliquez les raisons.
- **Une charte que personne ne fait respecter.** Des mots sans action sont pires que rien. Tenez les dirigeants à la charte et publiez les résultats.
- **La surveillance par défaut.** Les outils exposent l'activité individuelle parce qu'ils le peuvent. Désactivez ces fonctions.
- **Des réponses défensives aux contestations.** Les gens cessent de signaler les erreurs. Répondez vite et avec respect.
- **Se précipiter vers de nombreuses mesures.** Surcharge et confusion. Commencez avec peu et grandissez.
- **Lire le silence comme un succès.** Moins de signalements peut signifier la peur. Surveillez les signaux de franchise et parlez aux gens.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Promesses et usage | Non écrits ; l'usage varie selon le gestionnaire | Assurances verbales ; quelques accords d'équipe | Charte écrite signée par les dirigeants ; vues individuelles désactivées | Entorses signalées et examinées ; usage de la charte vérifié | Charte co-détenue avec le personnel et les partenaires ; révisée selon l'expérience |
| Appropriation et transparence | Mesures imposées | Quelques équipes consultées | Les équipes choisissent et définissent les mesures et voient d'abord les données | Part d'appropriation et délai de réponse aux contestations gérés | Équipes, fournisseurs et clients partagent des vues par accord ; appropriation routinière |
| Confiance et franchise | Peur ou indifférence | Pilote avec des volontaires | Sondage de sécurité et tendances des quasi-accidents revus avec les équipes | Les signaux déclenchent des actions planifiées ; adoption volontaire suivie | La franchise est routinière ; l'amélioration du programme vient de tous |

## Liste de vérification

- [ ] Une charte écrite énonce à quoi les données servent et ne servent jamais, et les dirigeants l'ont signée.
- [ ] Les vues et classements au niveau individuel sont désactivés dans les outils ou restreints par une politique.
- [ ] Les équipes choisissent ou approuvent leurs mesures et voient leurs données avant les autres.
- [ ] Un pilote avec des équipes volontaires précède tout déploiement élargi.
- [ ] Le premier usage des données apporte une aide visible à l'équipe.
- [ ] Une voie de contestation existe, avec un délai de réponse énoncé et un journal.
- [ ] Une voie de signalement existe pour les entorses à la charte, et les résultats sont publiés sans noms.
- [ ] Les signaux de sécurité et de franchise au niveau de l'équipe sont surveillés et discutés avec les équipes.
- [ ] Les vecteurs de détournement et les garde-fous sont partagés ouvertement avec les équipes.
- [ ] Le programme est revu avec les équipes chaque trimestre, et les mesures sont retirées quand elles cessent d'aider.

## Prompts d'IA

**Rédigez une charte de métriques.**

```text
Draft a one-page charter for the metrics program of [organization type]. It should
state what the data is for, what it will never be used for (including individual
rankings and performance reviews), who can see what, how long data is kept, how a
person can challenge a number, how breaches are reported, and who signs it. Use
plain words. Do not give legal advice. List your assumptions and points to confirm
with human resources and legal specialists.
```

**Planifiez un pilote.**

```text
Plan a six-week pilot of a metrics program with two to three volunteer teams in
[context]. Include how to invite teams, which measures to offer, how to set the
rules, what early help the data should provide, what to ask the teams at the end,
and how to decide on wider rollout. Do not assume the outcome. List your
assumptions and risks.
```

**Passez en revue une mesure sous l'angle de la peur.**

```text
Here is a proposed measure and how it will be used: [paste]. Act as a skeptical
team member. Describe how it could be taken as a threat, how people could change
behavior to look good, and what honest reporting it might discourage. Suggest
changes to the definition, display, or rules of use that would lower the risk.
List your assumptions.
```

**Répondez à une contestation.**

```text
A team has challenged this number: [describe, without personal data]. Draft a
respectful response that acknowledges the concern, explains how the number is
calculated, proposes how to check it, sets a date for the answer, and says what
will change if the number is wrong. Do not be defensive. List what you do not yet
know.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le vecteur de détournement et le garde-fou à partager ouvertement avec les équipes pour une mesure proposée.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un plan de déploiement garde les mesures au niveau de l'équipe et du service et ne classe jamais des individus.

## Idées clés

- La confiance est l'actif. Écrivez à quoi les données servent et ne servent jamais, et tenez la promesse.
- Mesurez des équipes, des services et des systèmes, et désactivez les vues qui exposent des individus.
- Laissez les équipes choisir, définir et voir d'abord leurs données, et posséder le récit qu'elles racontent.
- Pilotez avec des volontaires, apportez tôt une aide visible et diffusez par les pairs.
- Répondez vite aux contestations, et traitez les signes de peur comme de l'information sur le programme.
- Tenez les dirigeants à la charte, et revoyez le programme avec les personnes qui en font partie.

## Références et lectures complémentaires

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Effet Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Confiance (sciences sociales)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Gestion du changement](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Cycle de vie d'adoption des technologies](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Projet pilote](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator).
