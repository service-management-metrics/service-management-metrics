# Métriques de tâches répétitives et d'astreinte

**Un service n'est aussi fiable que la rotation qui veille sur lui : mesurez donc les interruptions, la charge de nuit et la part du temps perdue en travail manuel répétitif pour la rotation dans son ensemble, et servez-vous des chiffres pour financer la prévention et l'automatisation, jamais pour comparer des personnes.**

## Vue d'ensemble et motivation

La fiabilité est souvent décrite en termes de système : disponibilité, latence, taux d'erreurs. Derrière chaque service qui a des utilisateurs au milieu de la nuit se trouve un système humain qui répond quand le système défaille. Ce système humain a des limites. Une rotation appelée trop souvent, qui réveille trop de monde ou qui passe l'essentiel de sa semaine sur des tâches manuelles répétitives ralentira, fera plus d'erreurs et finira par perdre des gens. Les autres métriques de la partie 5 peuvent paraître saines jusqu'au moment où les personnes qui les tiennent ensemble s'en vont.

Deux idées organisent ce sujet. La première est le travail d'[astreinte](https://en.wikipedia.org/wiki/On-call) : une rotation de personnes joignables et prêtes à répondre aux alertes hors des horaires normaux de travail. Un **appel** (page) est une alerte qui interrompt un intervenant, généralement par un bipeur, un appel téléphonique ou une notification poussée. Un **poste** (shift) est une période d'astreinte, par exemple une journée, une semaine ou une nuit. Une **rotation** est le groupe de personnes qui prennent des postes à tour de rôle. La seconde idée est celle des **tâches répétitives** (toil), un terme de l'[ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la discipline qui consiste à exploiter des services avec des méthodes d'ingénierie logicielle. Dans le livre *Site Reliability Engineering* de Google, les tâches répétitives sont le travail opérationnel lié à l'exploitation d'un service de production qui tend à être manuel, répétitif, automatisable, tactique, sans valeur durable, et croissant au même rythme que le service. Ce n'est pas la même chose que les frais généraux comme les réunions, et ce n'est pas simplement un travail que quelqu'un n'aime pas.

ITIL 4 n'a pas de pratique appelée « gestion des tâches répétitives ». La matière se répartit entre plusieurs pratiques. La [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management) et la supervision et gestion des événements produisent les appels. La gestion des problèmes supprime les causes qui continuent de les produire. La gestion des demandes de service et la gestion des déploiements produisent une grande part du travail manuel répétitif. La gestion de la main-d'œuvre et des talents, et l'amélioration continue, détiennent le versant humain. La contrepartie agile est l'accord de travail de l'équipe sur le travail non planifié et le rythme soutenable, et l'habitude DevOps selon laquelle l'équipe qui construit un service porte aussi une part du bipeur.

Les mesures ici portent sur la charge et la soutenabilité. Le traitement des incidents relève d'autres sujets (voir le sujet 3.3, Temps de réponse et de résolution des incidents, et le sujet 3.4, Métriques des incidents majeurs), tout comme la qualité des alertes individuelles (voir le sujet 5.5, Métriques de supervision et de qualité des alertes). Ce sujet demande ce qu'il en coûte aux personnes de la rotation pour maintenir le service en marche, et si ce coût est soutenable.

### Pourquoi cela appartient à la fiabilité

La fatigue a des conséquences opérationnelles. La [privation de sommeil](https://en.wikipedia.org/wiki/Sleep_deprivation) dégrade le jugement et le temps de réaction : les intervenants fatigués au début d'un incident mettent plus de temps à le diagnostiquer et risquent davantage de commettre une seconde erreur en corrigeant la première. La [fatigue des alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue) est l'effet voisin d'un trop grand nombre d'alertes : les gens cessent de traiter chacune comme urgente. L'[épuisement professionnel](https://en.wikipedia.org/wiki/Occupational_burnout) est le résultat à plus long terme d'une surcharge soutenue, et il se voit dans les départs, les maladies et le désengagement, lents, coûteux et difficiles à inverser. Une équipe qui mesure la fiabilité du service sans mesurer la soutenabilité de sa rotation ne regarde que l'effet et ignore une partie de la cause.

Ce sujet décrit des rotations, des postes et des services, et ne classe jamais des individus. Une vision ITIL part de l'incident et du service, une vision SRE du coût en temps de personnes, et une vision agile de la capacité pour le travail planifié.

## Principes clés

- **Mesurez la rotation, non la personne.** Rapportez la charge par service, par poste et par place dans la rotation. Le nombre d'appels d'une personne dépend du poste qu'elle a tiré, et un classement apprend aux gens à cacher les interruptions.
- **Comptez quand les interruptions ont lieu autant que leur durée.** Un appel de cinq minutes à 3 h peut coûter une nuit de sommeil.
- **Définissez étroitement les tâches répétitives et laissez l'équipe les classer.** Les tâches répétitives sont un genre de travail précis, non un synonyme de travail que les gens n'aiment pas.
- **Traitez la charge comme un signal d'investissement.** Un fort volume d'appels ou une forte part de tâches répétitives est la preuve qu'un service, un outil ou un niveau d'effectifs demande du travail.
- **Appariez chaque mesure de charge avec une mesure de qualité.** Moins d'appels n'est une bonne nouvelle que si les incidents sont encore détectés.
- **Montrez des distributions et partagez les données d'abord avec la rotation.** Un poste moyen cache une poignée de terribles nuits, et les personnes d'astreinte sont les mieux placées pour juger si les chiffres correspondent à leur expérience.

## Définitions des métriques

Le tableau donne l'ensemble de base. Chaque mesure de temps ou de décompte énonce où elle démarre et s'arrête et ce qui est exclu. « Hors des heures de travail » doit être défini une fois par rotation comme une fenêtre écrite en heure locale, y compris les week-ends et les jours fériés, parce que les personnes d'une rotation répartie peuvent avoir des heures locales différentes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Appels par poste | Nombre d'appels délivrés à une rotation pendant un poste | Nombre d'appels délivrés entre le début et la fin du poste, un décompte par poste, après fusion des appels en double pour le même groupe d'alertes dans les 5 minutes (la fenêtre de fusion est un réglage d'équipe). Les appels de test et ceux envoyés par erreur sont exclus. Rapporter la médiane et le 90e percentile sur les postes, plus le poste le plus chargé | appels par poste | Outil d'appel ; planning d'astreinte | Gestion des incidents ; supervision et gestion des événements | Politique de travail non planifié ; rythme soutenable | Revue hebdomadaire, tendance mensuelle |
| Part d'appels hors des heures de travail | Part des appels qui arrivent en dehors de la fenêtre de travail écrite | Appels délivrés en dehors de la fenêtre de travail / tous les appels délivrés, sur la période. La fenêtre est fixée par rotation en heure locale ; les jours fériés comptent comme hors fenêtre | pourcentage | Outil d'appel ; calendrier de la rotation | Gestion des incidents ; supervision et gestion des événements | Accord de travail sur la disponibilité | Mensuelle |
| Taux d'interruption nocturne | Fréquence à laquelle un poste inclut au moins un appel dans la fenêtre de sommeil protégée | Postes avec au moins un appel dans la fenêtre de sommeil protégée (par exemple de 22 h à 7 h en heure locale, fixée par l'équipe) / tous les postes de la période. Un appel acquitté automatiquement sans réponse humaine est exclu | pourcentage de postes | Outil d'appel ; journal d'accusés de réception | Gestion des incidents ; gestion de la main-d'œuvre et des talents | Rythme soutenable ; bilan de santé de l'équipe | Mensuelle |
| Part du temps en tâches répétitives | Part du temps de travail d'une rotation passée en tâches répétitives | Heures que la rotation consigne sur du travail classé comme tâches répétitives / total des heures de travail consignées par la rotation, sur un mois. Réunions, formation et congés sont exclus du numérateur et du dénominateur. La classification suit les six caractéristiques des tâches répétitives, appliquées par l'équipe | pourcentage du temps | Échantillonnage du temps ou étiquettes de tâches dans le gestionnaire ; revue de classification par l'équipe | Amélioration continue ; gestion des déploiements ; gestion des demandes de service | Part de travail non planifié ; répartition de la capacité dans le travail planifié | Mensuelle, avec une revue trimestrielle de la classification |
| Tâches répétitives par source | Distribution des heures de tâches répétitives entre des sources nommées comme les redémarrages manuels, les demandes d'accès, les renouvellements de certificats et le triage de tickets | Heures de tâches répétitives de chaque source / total des heures de tâches répétitives, en listant les cinq premières sources et un groupe « autre ». Mêmes exclusions que la part du temps en tâches répétitives | pourcentage des heures de tâches répétitives par source | Échantillonnage du temps ou étiquettes de tâches dans le gestionnaire | Gestion des problèmes ; gestion des demandes de service | Backlog d'éléments d'amélioration | Trimestrielle |
| Taux d'appels répétés | Part des appels causés par une condition qui a déjà appelé la rotation dans une fenêtre énoncée | Appels dont le groupe d'alertes ou le code de cause correspond à un appel antérieur dans les 30 jours / tous les appels de la période. Un code de cause est fixé par l'intervenant à la clôture ; les codes non fixés sont rapportés à part | pourcentage | Outil d'appel ; codes de cause des enregistrements d'incidents | Gestion des problèmes ; gestion des incidents | Actions de rétrospective ; backlog de dette technique | Mensuelle |
| Profondeur de rotation | Combien d'intervenants qualifiés se partagent le bipeur par rapport au nombre de rôles à pourvoir | Nombre de personnes qui ont terminé la préparation à l'astreinte et sont disponibles pour des postes / nombre de places de poste par cycle de rotation. Congés et détachements réduisent la disponibilité. Rapporter comme un ratio par rotation, jamais par personne | ratio | Planning de la rotation ; liste de vérification de préparation | Gestion de la main-d'œuvre et des talents | Équipe pluridisciplinaire ; matrice de compétences | Trimestrielle |
| Tâches répétitives supprimées | Heures de tâches répétitives récurrentes retirées du travail de la rotation par une automatisation ou un changement de conception | Heures mensuelles estimées de tâches répétitives d'une source avant le changement moins les mêmes après le changement, mesurées sur au moins deux cycles après la livraison. Les heures économisées par un nettoyage ponctuel sont exclues | heures par mois | Échantillonnage du temps avant et après ; ticket d'amélioration | Amélioration continue ; gestion des problèmes | Élément d'amélioration livré | Trimestrielle |

Un décompte d'appels est un décompte d'interruptions, non d'incidents : un incident peut générer une douzaine d'appels. La part du temps en tâches répétitives dépend d'un enregistrement honnête : traitez-la donc comme une estimation convenue.

## Recommandations

### Définir les termes avant de compter

**1. Écrivez ce qui compte comme un appel, un poste et « hors des heures de travail ».** Les équipes comptent des choses différentes sous le même mot. Un appel peut être n'importe quelle notification, seulement celles qui atteignent un humain, ou seulement celles qui demandent une action. Choisissez une définition, énoncez la fenêtre de fusion des doublons et consignez la fenêtre de travail en heure locale. Sans cela, les chiffres changeront quand un outil est reconfiguré, et la tendance trompera.

**2. Convenez de ce que sont les tâches répétitives, avec des exemples tirés de votre propre service.** Partez des six caractéristiques du livre SRE. Écrivez une courte liste d'exemples et de contre-exemples, comme redémarrer un travail bloqué (tâche répétitive), concevoir un nouvel outil de rétablissement (ingénierie) et une réunion de planification (frais généraux). Revoyez la liste quand des désaccords apparaissent.

**3. Choisissez comment mesurer la part des tâches répétitives, et acceptez ses limites.** Les options peu coûteuses sont l'échantillonnage du temps, les étiquettes de tâches dans le gestionnaire et une courte estimation bimensuelle. Aucune n'est exacte : choisissez donc celle qui a le moins de surcoût, faites-la tourner un trimestre et jugez la tendance plus que la valeur absolue.

### Mesurer la charge de la rotation

**4. Rapportez les appels par poste comme une distribution.** Le poste moyen cache ce que la rotation ressent. Montrez la médiane, le 90e percentile et le poste le plus chargé, et ajoutez une note sur ce qui s'est passé pendant ce poste. Une médiane calme avec une terrible queue signifie quelques mauvaises nuits, ce qui est un autre problème qu'une rotation régulièrement chargée. Voir le sujet 1.6, Culture statistique pour les métriques de service, pour lire les percentiles.

**5. Placez le moment à côté du volume.** La part d'appels hors des heures de travail et le taux d'interruption nocturne montrent quand la charge tombe. Cinq appels en heures de bureau sont une gêne ; cinq entre minuit et 5 h sont un autre coût. Montrez les deux sur la même page.

**6. Regardez la dispersion entre les postes, non entre les personnes.** Une rotation où un poste récurrent (par exemple le week-end ou la passation du lundi) collecte l'essentiel des appels demande une autre correction qu'une rotation où la charge est égale. Rapportez la part des appels par place de poste et par jour. Quand les données sont rapportées par individu nommé, attendez-vous à ce qu'elles soient lues comme un classement : ne produisez donc pas cette vue.

**7. Comptez séparément la charge des incidents majeurs.** Un incident majeur peut générer plus d'interruptions en une nuit qu'un mois ordinaire. Rapportez-le sur sa propre ligne pour qu'un seul événement ne fausse pas la tendance (voir le sujet 3.4, Métriques des incidents majeurs).

### Relier la charge aux causes et aux corrections

**8. Reliez les appels aux problèmes et suivez les répétitions.** Le taux d'appels répétés montre quelle part de la charge vient de causes déjà connues. Un taux de répétition élevé est un argument pour la gestion des problèmes, non pour une réponse plus rapide. Alimentez le backlog des problèmes avec les principales causes répétées et consignez le lien (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.6, Dette technique et erreurs connues).

**9. Classez les sources de tâches répétitives et attaquez la plus grosse.** Un [diagramme de Pareto](https://en.wikipedia.org/wiki/Pareto_chart) des heures de tâches répétitives par source montre généralement que quelques sources rendent compte de l'essentiel du temps. Choisissez la plus grosse, décidez si elle peut être supprimée par la conception, automatisée ou remise à l'équipe qui détient la cause, et planifiez-la comme du travail sur les fonctionnalités. Préférez supprimer le besoin plutôt qu'automatiser l'étape, car une étape automatisée doit quand même être maintenue.

**10. Mesurez les tâches répétitives supprimées, non les automatisations écrites.** Une automatisation que personne n'utilise ne supprime rien. Mesurez les heures de tâches répétitives avant et après, sur au moins deux cycles, et consignez l'effort de construire et de maintenir l'automatisation. C'est le rendement honnête, et il évite un programme d'« automatisation » qui ajoute des scripts sans supprimer de travail. Voir le sujet 3.7, Métriques de libre-service et d'automatisation, pour l'adoption de l'automatisation par les utilisateurs.

### Garder le système soutenable

**11. Fixez des limites de rotation dans un accord d'équipe, puis surveillez la profondeur de rotation.** Convenez de la fréquence à laquelle une personne peut être d'astreinte, du nombre de nuits consécutives acceptable et du repos qui suit une mauvaise nuit. La profondeur de rotation montre si la rotation a assez de personnes qualifiées pour la limite convenue. Une rotation nominalement de huit personnes mais effectivement de trois, parce que les autres ne sont pas encore prêtes ou sont en congé, ne respecte pas la limite, quoi que dise le planning.

**12. Servez-vous des chiffres pour demander quelque chose de précis.** Un chiffre de charge appuie une demande : un changement d'effectifs, du temps prélevé sur le travail de fonctionnalités pour rembourser des tâches répétitives, un changement de seuils d'alerte ou un retrait. Énoncez la demande à côté du chiffre, sinon les gens cesseront de consigner (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Appels par poste | Relever les seuils d'alerte ou faire taire des alertes pour que le décompte baisse ; fusionner des alertes sans rapport en un seul appel ; déplacer des appels vers une file de tickets que personne ne surveille | Couverture de détection et incidents signalés par les clients que la supervision a manqués (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) ; temps de détection (voir le sujet 3.3, Temps de réponse et de résolution des incidents) |
| Part d'appels hors des heures de travail | Redéfinir la fenêtre de travail pour qu'elle soit plus large ; reprogrammer des travaux et des déploiements pour que les appels passent en heures de bureau sans diminuer ; reclasser des appels en « faible urgence » | Volume total d'appels à côté de la part ; fenêtre de travail écrite sous contrôle des changements ; revue de ce qui a bougé |
| Taux d'interruption nocturne | Retarder l'accusé de réception jusqu'au matin ; acquitter automatiquement les appels ; ne compter que les appels qui ont atteint un humain | Temps d'accusé de réception par heure (voir le sujet 3.3, Temps de réponse et de résolution des incidents) ; appels sans réponse humaine rapportés séparément ; impact sur les clients la nuit |
| Part du temps en tâches répétitives | Reclasser les tâches répétitives en « ingénierie » ou « travail de projet » ; consigner moins que ce qui a été dépensé ; n'étiqueter que ce qui est facile à décrire | Audit périodique des éléments classés par quelqu'un d'extérieur à la rotation ; ressenti de l'équipe sur la semaine ; part du temps consacrée au travail d'amélioration planifié |
| Tâches répétitives par source | Scinder une grosse source en plusieurs petites pour qu'aucune ne ressorte ; laisser une source sans nom dans « autre » | Plafond sur le groupe « autre » (par exemple moins d'un cinquième des heures de tâches répétitives, un réglage d'équipe) ; échantillonnage des éléments « autre » chaque trimestre |
| Taux d'appels répétés | Clore les appels avec un nouveau code de cause à chaque fois pour que les correspondances soient manquées ; élargir les codes de cause jusqu'à ce que tout soit distinct ; allonger ou raccourcir la fenêtre | Audit des codes de cause sur un échantillon ; récurrence du même groupe d'alertes d'un incident à l'autre (voir le sujet 4.1, Métriques de gestion des problèmes) |
| Profondeur de rotation | Compter des personnes qui n'ont pas terminé la préparation ; compter des personnes rarement disponibles ; gonfler le planning | Part des postes réellement couverts par le vivier nominal ; nombre réel de postes par place, rapporté sans noms ; achèvement de la liste de vérification de préparation |
| Tâches répétitives supprimées | Compter des nettoyages ponctuels comme des économies récurrentes ; ignorer l'effort de construire et de maintenir l'automatisation ; revendiquer des économies sans avant-après | Heures avant et après mesurées sur deux cycles ; effort de maintenance de l'automatisation ; part du temps en tâches répétitives sur les trimestres suivants |

Une lecture saine est une rotation dont le poste médian est calme et dont le pire poste est rare, avec peu d'appels la nuit, une part décroissante d'appels répétés et une part de tâches répétitives qui baisse parce que des sources ont été supprimées, non parce qu'elles ont été reclassées. Elle montre aussi l'effort pour y arriver : du travail d'amélioration qui apparaît dans le plan, financé et livré. Si les décomptes d'appels baissent pendant que les clients signalent plus d'incidents que la supervision n'a pas attrapés, les chiffres s'améliorent en regardant ailleurs.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Compter les appels depuis l'outil d'appel | Automatique, peu coûteux et difficile à contester | Compte des interruptions, non leur coût ; ajuster les alertes change le décompte sans changer la charge |
| Échantillonnage du temps pour les tâches répétitives | Précision raisonnable pour un effort modeste | Demande de la discipline ; les petits échantillons sont bruités |
| Rapport au niveau de la rotation | Correspond à l'organisation du travail ; sûr à partager largement | Peut cacher une personne en difficulté ; demande à côté un canal de conversation bienveillant |
| Plafond strict pour les tâches répétitives (par exemple l'objectif du livre SRE de garder les tâches répétitives sous 50 % du temps) | Un signal clair qui déclenche une réponse | Un chiffre peut être atteint par reclassement ; un plafond demande le soutien de la direction |

La tension centrale est entre acceptation et investissement. Il est facile de traiter une forte charge comme le prix normal d'un service important et de demander aux gens de l'absorber, et facile de fixer un plafond que personne n'a le pouvoir d'appliquer. La voie est d'apparier chaque mesure avec une décision : un seuil auquel l'équipe s'arrête et agit, un responsable nommé de l'action et une date de revoyure. Les chiffres au niveau de la rotation sont sûrs et parfois trop grossiers. Quand quelqu'un est en difficulté, la conversation appartient à cette personne et à son responsable, à partir de son propre récit de la semaine.

## Questions à discuter avec votre équipe

**1. Comment s'est passé notre poste le plus chargé du dernier trimestre, et que disent les chiffres à son sujet ?**
Commencez par l'histoire avant le graphique. Demandez aux personnes qui étaient d'astreinte de décrire le poste, puis comparez avec les chiffres d'appels par poste et d'interruptions nocturnes. Si les chiffres sous-estiment l'expérience, découvrez ce qui manque, comme des appels non consignés ou du travail fait après l'appel. Consignez cette liste comme la prochaine amélioration de la mesure.

**2. Qu'est-ce que nous dirions être des tâches répétitives dans notre équipe, et qu'est-ce que nous dirions ne pas en être ?**
Mettez cinq ou six tâches récentes sur un tableau et demandez à chacun de les classer comme tâches répétitives, ingénierie ou frais généraux face aux six caractéristiques. Attendez-vous à des désaccords, et traitez-les comme utiles : ils montrent où la définition est floue. Convenez d'une définition de travail pour le trimestre suivant et écrivez deux exemples de chaque. Évitez de débattre du caractère agréable du travail, car la question est de savoir s'il est manuel, répétitif et automatisable.

**3. Quelle alerte ou quelle tâche supprimerions-nous en premier si nous le pouvions ?**
Demandez l'alerte ou la tâche récurrente que tout le monde redoute, puis demandez ce qui nous empêche de la supprimer : le coût de la correction, un responsable manquant ou une croyance qu'elle est nécessaire. L'animateur doit chercher du travail peu coûteux à supprimer et dont le responsable n'est pas dans la salle. Terminez en choisissant un élément pour la prochaine planification.

**4. Combien de personnes peuvent réellement prendre un poste aujourd'hui, et quelles limites sommes-nous prêts à nous engager à respecter ?**
Comptez honnêtement la préparation : qui est formé, qui est disponible et qui a des contraintes. Comparez le résultat avec la taille nominale de la rotation. Demandez quelle fréquence d'astreinte et quel nombre de nuits consécutives le groupe juge acceptables, puis vérifiez si la pratique actuelle les respecte.

**5. Si nous réduisions de moitié notre nombre d'appels d'ici le trimestre prochain, comment saurions-nous que nous n'avons pas simplement cessé d'écouter ?**
Cette question porte sur le garde-fou. Demandez au groupe de lister les façons dont le nombre d'appels pourrait baisser sans que le service s'améliore, comme relever les seuils, fusionner les alertes ou ignorer une source. Demandez ensuite ce que nous verrions dans les signalements des clients et les mesures de détection si cela s'était produit. Convenez du garde-fou et placez-le sur la même page que le volume.

**6. Qui voit ces chiffres, et que voulons-nous qu'on en fasse ?**
Retracez le chemin des mesures de charge de la rotation vers les responsables et les dirigeants. Demandez ce que chaque public conclura probablement, et si une vue pourrait être lue comme un classement. Convenez de la forme qui remonte : au niveau de la rotation, avec contexte, avec une demande jointe. Notez toute inquiétude sur l'identification possible d'individus.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison génèrent une grande part de la charge d'astreinte par les changements qu'elles publient. Les équipes qui exploitent ce qu'elles construisent peuvent voir le lien entre une version et les appels qui suivent. Elles doivent inclure les tâches répétitives et le travail d'astreinte dans la planification de la capacité, planifier la suppression des tâches répétitives comme du travail ordinaire du backlog, et surveiller la qualité des changements à côté de la vitesse (voir le sujet 2.8, Métriques DORA).

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le plus souvent le bipeur et voient d'abord le coût humain. Elles doivent détenir les définitions, mener l'échantillonnage du temps ou l'étiquetage, publier les chiffres au niveau de la rotation et porter aux équipes responsables les principales sources de tâches répétitives et causes répétées, avec des preuves. Leur risque est d'absorber la charge en silence par professionnalisme. Un registre calme et factuel des nuits et des semaines est une demande d'aide plus efficace qu'une plainte, et les registres ne doivent jamais être transformés en classement des personnes qui ont répondu.

### Direction et gouvernance

Les dirigeants décident des effectifs, des priorités et du financement du travail sur les tâches répétitives. Un dirigeant qui lit une forte part de tâches répétitives comme une mauvaise performance apprend à l'équipe à la baisser par reclassement. Un dirigeant qui la lit comme la facture d'un travail que l'organisation a choisi de ne pas financer obtient des données honnêtes et un plan. La gouvernance doit attendre une limite de charge de rotation et une réponse visible quand elle est dépassée (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

### Clients et utilisateurs

Les utilisateurs ne voient pas la rotation, mais ils en ressentent les effets : un diagnostic plus lent par des intervenants fatigués, des incidents répétés par des causes non corrigées, et le départ de personnes qui connaissaient le service. Là où les utilisateurs couvrent de nombreux fuseaux horaires, leurs besoins hors des heures de travail façonnent la rotation, et le coût de les couvrir est un sujet légitime pour une conversation sur les niveaux de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une plateforme de commandes, un service de comptes clients et une intégration d'entrepôt. Une rotation de six ingénieurs de deux équipes produit et d'un petit groupe d'exploitation partage un poste d'astreinte hebdomadaire. Tous les chiffres de cet exemple sont illustratifs.

La revue mensuelle montre une médiane de 9 appels par poste et un 90e percentile de 31. Le poste le plus chargé a compté 58 appels. Environ la moitié de tous les appels arrivent hors des heures de travail, et 6 des 8 postes du trimestre ont inclus un appel entre 22 h et 7 h. L'échantillonnage du temps suggère que les tâches répétitives prennent 55 % du temps de travail.

Le poste le plus chargé a coïncidé avec l'expiration d'un certificat sur l'intégration d'entrepôt, qui a appelé la rotation 22 fois en une nuit. Une alerte d'espace disque sur un serveur de traitement par lots rend compte de près d'un quart des appels, et la plupart étaient clos en vidant à la main un répertoire temporaire. Le taux d'appels répétés est de 41 %. Une vue de Pareto montre que les renouvellements manuels de certificats, le nettoyage de disque et les demandes d'accès prennent l'essentiel des heures de tâches répétitives.

L'équipe prend trois éléments pour les quatre semaines suivantes : automatiser le renouvellement des certificats, corriger la cause du répertoire temporaire plein et déplacer les demandes d'accès vers un formulaire en libre-service détenu par l'équipe d'identité. Un accord de travail fixe une limite d'un poste sur quatre par personne et d'un jour de repos après une nuit de trois appels ou plus. La profondeur de rotation est de 6 personnes pour un besoin convenu de 8 : deux ingénieurs d'une troisième équipe commencent donc leur formation de préparation.

Un risque de détournement apparaît à la revue suivante. Les appels par poste sont tombés à une médiane de 4, et le 90e percentile à 12. Un responsable est satisfait. Un membre de l'équipe fait remarquer que le seuil de l'alerte disque a été relevé de 20 points et que le serveur de traitement par lots s'est rempli deux fois sans appel. Les incidents signalés par les clients sur des commandes par lots retardées ont augmenté. Le garde-fou, les incidents signalés par les clients que la supervision a manqués, l'a attrapé. Le changement de seuil est annulé, le nettoyage du répertoire est planifié comme une correction, et l'équipe ajoute une règle selon laquelle tout changement de seuil est consigné avec son motif et revu au bout d'un mois. La part de tâches répétitives du trimestre suivant est de 38 % (illustratif) et est rapportée avec la méthode d'échantillonnage à côté.

## Agilité, IA, automatisation et analytique

### Agilité

Un rythme soutenable inclut la rotation d'astreinte : revoyez donc sa charge avec l'équipe selon une cadence régulière et financez la prévention. La précaution est qu'un objectif de moins d'appels peut mener à faire taire des alertes.

### IA

L'IA peut résumer les appels, suggérer des étapes de runbook et trier les alertes, ce qui peut réduire les tâches répétitives, et elle peut ajouter de nouvelles tâches répétitives à vérifier et corriger sa production. Incluez le temps passé à superviser l'IA dans les tâches répétitives, et appariez les décomptes d'appels avec des signaux de sommeil et de bien-être. La précaution est qu'une première réponse automatisée peut cacher des appels aux personnes qui portent encore le risque.

### Automatisation

Automatisez la suppression des tâches répétitives là où le travail est répétitif, et mesurez les tâches répétitives supprimées et les incidents que l'automatisation a causés. La précaution est qu'une automatisation construite sans responsable devient une nouvelle source de travail d'astreinte.

### Analytique

Rapportez la charge par rotation, jamais par personne, avec le décompte d'appels derrière chaque chiffre. La décision éclairée est où investir dans la prévention. La précaution est que les données d'appel omettent les interruptions informelles : combinez-les donc avec une courte enquête.

## Éclairage sectoriel

**Startup.** Une petite équipe n'a souvent pas de rotation formelle : tout le monde est donc d'astreinte en permanence et le coût est invisible. Comptez les appels et les réveils nocturnes dans un tableur et écrivez les trois plus grosses tâches répétitives. Des fondateurs qui portent eux-mêmes le bipeur sont un risque pour l'entreprise, non un gage d'engagement.

**Petite entreprise.** Une ou deux personnes peuvent gérer toute l'informatique. Mesurez ce qui ne demande aucun outil : appels hors des heures, tâches qui se répètent, et congés qui ne peuvent pas être pris. Un prestataire de services gérés peut prendre une part de la rotation si le contrat énonce les temps de réponse et les heures. La profondeur de rotation est souvent de un, ce qui est le principal risque.

**Grande entreprise.** L'échelle apporte des rotations qui suivent le soleil, des plateformes partagées et plusieurs fournisseurs. Définissez les mesures une fois, fixez des fenêtres de travail locales par région et évitez de moyenner entre des rotations aux services très différents. Les règles d'emploi de certains pays limitent le devoir d'astreinte et exigent des périodes de repos, et celles-ci ont leur place dans les limites de rotation.

**Gouvernement et secteur public.** Les services peuvent exiger une couverture permanente par la loi ou le contrat, et les effectifs sont liés par la passation de marchés et les grades. Les limites de rotation et les règles de repos relèvent souvent d'accords d'emploi : mesurez donc face à elles et rapportez quand elles sont dépassées. La redevabilité publique rend le rapport franc plus précieux et plus difficile : construisez un canal sûr pour les données de charge, et soyez explicite sur le fait qu'elles décrivent le système et les effectifs, non les individus (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de protéger la qualité du service et de garder des personnes qualifiées. Des intervenants fatigués diagnostiquent plus lentement, et quand des personnes expérimentées partent, la connaissance part avec elles. Remplacer une personne a de vrais coûts de recrutement, d'accueil et de production réduite pendant la période d'apprentissage, et une organisation peut estimer ces coûts à partir de ses propres registres. Les tâches répétitives prennent aussi de la capacité à l'amélioration. Une équipe qui passe l'essentiel de son temps en exploitation manuelle ne peut pas réduire les incidents qui la causent.

Le coût des mesures est modeste. L'outil d'appel compte déjà les appels, et l'échantillonnage du temps coûte quelques minutes par personne et par quinzaine. Le coût le plus lourd est d'agir sur les constats : temps d'ingénierie pour supprimer des tâches répétitives, effectifs pour une rotation soutenable et temps de revue. Comptez la maintenance de l'automatisation comme un coût, car une étape automatisée non maintenue devient l'incident de demain.

Le rendement se voit dans moins d'appels de causes connues, moins d'interruptions nocturnes, des heures de tâches répétitives rendues au travail d'amélioration, moins de départs de la rotation et un diagnostic plus rapide. Aucun chiffre universel ne s'applique : estimez donc le vôtre. Pour une source de tâches répétitives, multipliez les heures mensuelles par un coût horaire chargé convenu avec la finance, comparez-le à l'effort de la supprimer et revoyez après deux cycles. Pour la soutenabilité de la rotation, consignez les départs et les longues absences de la rotation et comparez-les aux mesures de charge dans le temps, en traitant le lien comme une hypothèse à tester, non comme une cause prouvée. Là où un chiffre est nécessaire, énoncez-le comme une estimation et montrez les entrées (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Classer des personnes selon les appels.** Cela transforme une mesure du système en score de performance et apprend aux intervenants à éviter les postes et à cacher les interruptions. Rapportez par rotation, place de poste et service.
- **Réduire les appels en faisant taire des alertes.** Le décompte baisse et la détection s'affaiblit. Appariez le volume avec la détection et les incidents signalés par les clients, et revoyez chaque changement de seuil.
- **Appeler tout « tâches répétitives ».** Une définition si large qu'elle inclut les réunions et les problèmes difficiles détruit le signal. Utilisez les six caractéristiques et gardez une liste d'exemples.
- **Un objectif sur les tâches répétitives sans autorité derrière.** Un plafond qui ne peut déclencher aucune décision devient un chiffre dont on se dispute. Convenez d'avance de ce qui se passe quand il est dépassé et de qui décide.
- **Automatiser avant de comprendre.** L'automatisation peut figer un mauvais processus et ajouter de la maintenance. Demandez d'abord si le besoin peut être supprimé par la conception, et mesurez ensuite les tâches répétitives supprimées.
- **Moyenner des services dissemblables.** Une moyenne d'un service stable et d'un service fragile ne décrit aucun des deux. Montrez chaque service et chaque rotation séparément.
- **Mesurer sans agir.** Des chiffres de charge sans réponse apprennent aux gens que les données ne comptent pas. Attachez une décision, un responsable et une date de revue à chaque constat.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et données | Appels et tâches répétitives décrits à l'intuition ; pas de définition commune | Certaines rotations comptent les appels ; les tâches répétitives sont discutées mais non mesurées | Une définition écrite d'appel, de poste, de hors-heures et de tâches répétitives ; données d'appel recueillies par l'outil | Distributions et moment suivis dans le temps ; tâches répétitives échantillonnées chaque mois et auditées | Définitions revues entre équipes et fournisseurs ; effort d'échantillonnage ajusté à la valeur des réponses |
| Soutenabilité de la rotation | Informelle ; les mêmes quelques personnes absorbent le bipeur | Des plannings existent ; limites discutées mais non écrites | Limites écrites de fréquence et de repos ; profondeur de rotation connue | Limites surveillées et dépassements revus avec action | Rotations partagées entre équipes et fournisseurs, et charge équilibrée à mesure que les services changent |
| Usage des chiffres | Utilisés pour blâmer ou ignorés | Montrés aux responsables | Montrés d'abord à la rotation, avec les décisions qu'ils soutiennent | Appariés à des garde-fous et revus selon une cadence qui mène à un changement financé | Partagés avec les dirigeants et les partenaires pour planifier les effectifs et le périmètre des services |

## Liste de vérification

- [ ] Appel, poste, fenêtre hors des heures de travail et fenêtre de fusion sont définis par écrit.
- [ ] Les tâches répétitives ont une définition écrite avec exemples et contre-exemples tirés de notre propre service.
- [ ] Les appels par poste sont rapportés en médiane, percentile élevé et poste le plus chargé.
- [ ] La part d'appels hors des heures de travail et le taux d'interruption nocturne sont rapportés à côté du volume.
- [ ] La charge est rapportée par rotation, place de poste et service, jamais par personne nommée.
- [ ] La part du temps en tâches répétitives est échantillonnée selon un calendrier, avec la méthode écrite.
- [ ] Les cinq principales sources de tâches répétitives et les principales causes d'appels répétés sont dans le backlog d'amélioration.
- [ ] Les limites de rotation et les règles de repos sont dans un accord d'équipe, et la profondeur de rotation est vérifiée chaque trimestre.
- [ ] Chaque mesure de charge a un garde-fou sur la même page, y compris la détection et les incidents signalés par les clients.
- [ ] Chaque revue se termine par une décision, un responsable et une date.
- [ ] Les changements de seuils et d'alertes sont consignés avec un motif et revus au bout d'un mois.

## Prompts d'IA

**Passez en revue la charge d'une rotation et cherchez des schémas.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Classez des tâches en tâches répétitives, ingénierie ou frais généraux.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Rédigez des vecteurs de détournement et des garde-fous pour nos métriques de charge.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins et les garde-fous quand vous ajoutez une mesure d'astreinte ou de tâches répétitives à un tableau de bord.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique appariée avec un vecteur de détournement et un garde-fou.

## Idées clés

- Mesurez la charge de la rotation, par poste, service et heure de la journée, et ne classez jamais les personnes qui la composent.
- Comptez quand les interruptions ont lieu autant que leur nombre, car les appels de nuit coûtent plus que ceux des heures de bureau.
- Définissez étroitement les tâches répétitives par leurs six caractéristiques, estimez leur part du temps par une méthode simple et jugez la tendance.
- Reliez les appels et les sources de tâches répétitives au travail sur les problèmes et à des changements d'automatisation ou de conception, et mesurez les tâches répétitives réellement supprimées.
- Appariez chaque mesure de charge avec un garde-fou comme la détection et les incidents signalés par les clients, pour que des chiffres plus bas ne puissent pas s'acheter en regardant ailleurs.
- Traitez une forte charge comme une demande d'investissement, avec une décision, un responsable et une date de revue.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
