# Culture statistique pour les métriques de service

**Les données de tickets et de flux sont asymétriques, irrégulières et souvent minces : rapportez donc des médianes et des percentiles élevés plutôt que des moyennes, dites combien d'éléments se tiennent derrière chaque taux, et séparez la variation ordinaire du changement réel avant que quiconque ne réagisse.**

## Vue d'ensemble et motivation

La plupart des métriques de service arrivent sous la forme d'un chiffre unique sur un tableau de bord : temps moyen de résolution, pourcentage d'incidents résolus dans l'objectif, tickets clos cette semaine. Un chiffre unique paraît précis. Il s'agit généralement d'un résumé compressé d'un ensemble désordonné d'événements, et la compression décide de ce que voit le lecteur. La culture statistique, au sens de ce livre, est le petit ensemble d'habitudes qui garde le résumé honnête : choisir un résumé qui convient à la forme des données, savoir combien de données se tiennent derrière lui et distinguer un vrai changement du bruit.

La forme des données de service est le premier problème. Les mesures de temps comme le temps de résolution, le temps de cycle et le temps d'attente sont bornées par zéro et ont une longue queue à droite. La plupart des éléments se terminent vite, et quelques-uns prennent très longtemps. Des données de ce type sont [asymétriques](https://en.wikipedia.org/wiki/Skewness), et la moyenne arithmétique est tirée vers la queue, de sorte qu'un seul ticket bloqué peut déplacer la moyenne plus que cent tickets de routine. La [médiane](https://en.wikipedia.org/wiki/Median), la valeur du milieu quand les éléments sont triés, est bien moins affectée. Un [percentile](https://en.wikipedia.org/wiki/Percentile) la généralise : le 85e percentile est la valeur dans laquelle 85 % des éléments se terminent. Les durées de ce genre sont souvent modélisées par une [loi log-normale](https://en.wikipedia.org/wiki/Log-normal_distribution), où le logarithme de la valeur est symétrique. La leçon est que « typique » et « moyen » diffèrent pour des données asymétriques.

La taille de l'échantillon est le deuxième problème. Une équipe qui résout 12 incidents de priorité 1 dans un trimestre et rapporte « 83 % dans l'objectif » décrit 10 sur 12. Un échec de plus déplacerait le chiffre de huit points. L'énoncé honnête inclut le décompte, et souvent une fourchette. Un [intervalle de confiance](https://en.wikipedia.org/wiki/Confidence_interval) est une fourchette calculée à partir des données qui exprime à quelle distance la vraie valeur peut plausiblement se trouver de la valeur observée. Les intervalles sont larges pour les petits échantillons et étroits pour les grands, ce qui est le message correct pour un trimestre de 12 incidents.

La variation est le troisième problème. Tout processus produit des chiffres qui oscillent d'une semaine à l'autre sans que rien n'ait changé. Walter Shewhart, travaillant sur la qualité industrielle dans les années 1920, a séparé cette oscillation de routine des signaux qui méritent une investigation, et nous a donné la [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart). L'application de telles cartes à un processus s'appelle la [maîtrise statistique des processus](https://en.wikipedia.org/wiki/Statistical_process_control). Une partie de cette dernière erreur est la [régression vers la moyenne](https://en.wikipedia.org/wiki/Regression_toward_the_mean) : une valeur extrême tend à être suivie d'une valeur moins extrême, de sorte que la semaine qui suit une semaine terrible ressemble à un redressement, que quelqu'un ait fait quoi que ce soit ou non.

La pratique agile du flux, comme l'usage par le Kanban Guide des percentiles de temps de cycle et de l'âge des éléments de travail, demande déjà des distributions et des prévisions exprimées en probabilités (voir le sujet 2.1, Mesures de flux). Dans ITIL 4, la pratique de mesure et de reporting et celle d'amélioration continue dépendent toutes deux de mesures qui signifient ce qu'elles semblent signifier, et la gestion des niveaux de service dépend d'objectifs fixés au regard d'une variation réaliste. La culture statistique est la couche commune sous les deux. Elle soutient aussi le garde-fou du sujet 1.2, Loi de Goodhart et psychologie des métriques : une équipe qui montre toute la distribution a moins d'endroits où cacher une moyenne manipulée.

La variation de cause commune est inscrite dans un processus, et la variation de cause spéciale vient de quelque chose de précis qui a changé ou mal tourné. Un accord de niveau de service (SLA) est un engagement documenté envers un client, et un objectif de niveau de service (SLO) est une cible pour une mesure.

## Principes clés

- **Ajustez le résumé à la forme.** Utilisez des médianes et des percentiles pour les durées, et montrez la distribution complète quand la décision compte. Réservez la moyenne aux données à peu près symétriques, ou à des totaux comme le coût.
- **Chaque taux porte son décompte.** Un pourcentage sans numérateur ni dénominateur est une affirmation sans preuve attachée. En dessous d'un décompte minimal déclaré, montrez les éléments bruts plutôt qu'un taux.
- **La variation ordinaire n'est pas une nouvelle.** Connaissez la plage normale d'une mesure avant de réagir. Répondez aux signaux, pas à chaque mouvement.
- **L'incertitude fait partie de la réponse.** Exprimez les prévisions en probabilités (« 85 % des éléments se terminent en 9 jours ») et les estimations en fourchettes, et résistez à la fausse précision.
- **Montrez les distributions à l'équipe qui détient le travail.** Les éléments bruts et les histogrammes rendent visibles les cas inhabituels, et rendent la manipulation discrète plus difficile.
- **La corrélation, la sélection et le calendrier expliquent de nombreuses « améliorations ».** Demandez ce qui a changé d'autre, qui a été laissé hors des données et si le point de départ était exceptionnellement mauvais.
- **Gardez les statistiques proportionnées.** Une équipe a besoin d'une poignée de techniques employées de façon cohérente, pas d'un cours de statistique. Expliquez chaque graphique en mots simples.

## Définitions des métriques

Les métriques ci-dessous décrivent la qualité statistique d'une pratique de métriques et la distribution du travail de service. Les mesures de temps utilisent les horloges indiquées dans chaque ligne, et les définitions sont destinées à être réutilisées par les sujets qui suivent (voir le sujet 3.3, Temps de réponse et de résolution des incidents, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Temps médian de résolution | Le temps de résolution du milieu pour les incidents résolus dans la période | 50e percentile de (horodatage de résolution moins horodatage de création) sur les incidents résolus dans la période ; l'horloge démarre à la création du ticket et s'arrête à la résolution ; les suspensions sont rapportées à part, non soustraites ; les tickets annulés et en double sont exclus | heures ou jours | Historique des statuts de l'outil ITSM | Gestion des incidents ; mesure et reporting | Temps de cycle médian | Hebdomadaire ou mensuelle |
| Temps de résolution à percentile élevé | Le délai dans lequel la plupart des incidents sont résolus, avec le percentile nommé | 85e (ou 95e) percentile du même temps écoulé que ci-dessus ; calculé seulement si au moins 20 éléments ont été résolus, sinon les éléments bruts sont listés | heures ou jours | Historique des statuts de l'outil ITSM | Gestion des incidents ; gestion des niveaux de service | Prévision par percentile du temps de cycle | Hebdomadaire ou mensuelle |
| Âge du plus ancien élément ouvert | Âge du plus ancien élément encore ouvert, plus le nombre d'éléments plus anciens que le percentile élevé | maintenant moins horodatage de création pour les éléments ouverts, sans soustraction des suspensions ; compte tous les éléments ouverts de la file du service, y compris ceux en attente du client | jours | Outil ITSM ou gestionnaire d'anomalies | Gestion des incidents ; gestion des problèmes | Âge de l'élément de travail | Hebdomadaire |
| Couverture du reporting des taux | Part des taux rapportés qui montrent le numérateur, le dénominateur et un contrôle de décompte minimal | taux rapportés avec décomptes et indicateur d'échantillon / taux rapportés ; ne compte que les taux publiés dans le dossier de revue de la période | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting | Accords de travail | Trimestrielle |
| Taux de signaux de la carte de contrôle | Part des points de la carte de contrôle d'une mesure qui signalent une variation de cause spéciale selon les règles écrites de l'équipe | points signalés selon les règles / points tracés, sur les 20 derniers points ou plus ; les règles sont fixées à l'avance et consignées | pourcentage | Outil de carte de contrôle ou tableur | Amélioration continue | Inspection rétrospective du processus | Mensuelle |
| Largeur de l'intervalle | Largeur de la fourchette d'incertitude déclarée sur un taux phare | borne supérieure moins borne inférieure de l'intervalle, selon la méthode nommée dans le registre, pour le taux phare de la période | points de pourcentage | Calculé à partir des décomptes de l'ITSM | Gestion des niveaux de service | Fourchette de prévision en planification | Mensuelle |

Lorsqu'un contrat nomme une moyenne, rapportez le chiffre contractuel et montrez à côté la médiane et le percentile.

## Recommandations

### Résumer honnêtement les données de temps

**1. Prenez par défaut la médiane et un percentile élevé nommé.** Pour le temps de résolution, le temps de cycle et le temps d'exécution, publiez ensemble la médiane et le 85e ou le 95e percentile, et écrivez le percentile dans le nom de la métrique. La médiane dit ce qui est typique, et le percentile élevé dit ce qu'on peut raisonnablement promettre à un client. S'il faut choisir un seul chiffre pour un engagement, choisissez le percentile.

**2. Montrez la forme autant que le résumé.** Un histogramme ou un nuage de points du temps de résolution selon la date de clôture montre des regroupements, de longues queues et des changements soudains qu'aucun résumé ne montre. Quand l'image et le chiffre ne concordent pas, croyez l'image et examinez le chiffre.

**3. Ajoutez l'âge du plus ancien élément ouvert.** Les percentiles du travail terminé regardent en arrière et ignorent tout ce qui est encore bloqué. Rapportez le plus ancien élément ouvert et combien d'éléments ouverts sont déjà plus anciens que votre percentile élevé (voir le sujet 2.1, Mesures de flux). C'est le meilleur correctif contre les moyennes qui s'améliorent parce que les éléments difficiles sont laissés vieillir.

### Respecter les petits échantillons et l'incertitude

**4. Publiez le décompte avec chaque taux.** Écrivez « 10 sur 12 résolus dans l'objectif » plutôt que « 83 % ». Ajoutez une règle selon laquelle les taux fondés sur moins d'un nombre déclaré d'éléments sont montrés comme des décomptes ou sous forme des éléments sous-jacents. Le seuil est un jugement : écrivez-le, revoyez-le et appliquez-le partout.

**5. Utilisez des intervalles pour les taux phares et les prévisions.** Pour une proportion telle que la part des changements qui échouent, calculez un intervalle de confiance avec une méthode que votre équipe a convenue et notez la méthode dans le registre. Pour les prévisions de livraison, une fourchette fondée sur un échantillon (par exemple « vraisemblablement entre 8 et 14 éléments par semaine ») en dit plus aux planificateurs qu'un chiffre de débit unique. Si l'intervalle est trop large pour éclairer une décision, dites-le.

### Distinguer le signal du bruit

**6. Tracez des cartes de contrôle pour les mesures sur lesquelles vous agissez.** Une simple carte des individus trace chaque point dans l'ordre du temps avec une ligne centrale et des limites calculées à partir des données, et elle signale les points hors des limites ou les séries d'un seul côté du centre. Commencez par la médiane hebdomadaire du temps de résolution et le volume hebdomadaire. Écrivez les règles de signal une fois pour toutes (par exemple un point au-delà des limites, ou une série de huit d'un côté) et gardez-les fixes, pour que l'équipe ne retouche pas les règles jusqu'à ce que la carte soit d'accord avec son ressenti.

**7. Agissez sur les signaux et laissez en paix la variation de cause commune.** Quand un point est à l'intérieur des limites, résistez à l'envie de l'expliquer ; c'est le processus qui se comporte normalement. Quand un signal apparaît, demandez ce qui a changé cette semaine-là : une version, un manque de personnel, une panne de fournisseur, une nouvelle catégorie. Si le processus est stable mais insatisfaisant, l'amélioration est un changement du système, pas une conversation avec celui qui a eu la semaine rouge.

**8. Attendez-vous à une régression vers la moyenne après une période extrême.** Si vous lancez une initiative dans le pire mois de l'année, une certaine amélioration suivra par hasard. Comparez avec une référence plus longue, avec un service similaire qui n'a pas changé ou avec les limites de contrôle avant de créditer l'initiative. Une paire avant-après de deux points est la forme de preuve la plus faible.

### Raisonner avec soin sur la cause et la sélection

**9. Demandez ce qui manque aux données.** Les réponses d'enquête viennent de personnes qui ont choisi de répondre. Les tickets clos excluent ceux qui sont encore ouverts. Avant de tirer une conclusion, listez qui ou quoi est absent et comment cela pourrait faire pencher le résultat.

**10. Changez les définitions à dessein, et marquez-les sur le graphique.** Un nouveau modèle de statuts, une nouvelle matrice de priorité ou une nouvelle liste de catégories change les données sans changer le travail. Annotez chaque changement sur le graphique et redémarrez les limites de contrôle après lui (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Temps médian de résolution | Clore d'abord les tickets rapides et laisser ouverts les difficiles ; scinder un ticket en plusieurs faciles ; suspendre l'horloge dans un état d'attente du client | Temps de résolution à percentile élevé et âge du plus ancien élément ouvert ; part du temps passé dans les états de suspension ; taux de tickets liés |
| Temps de résolution à percentile élevé | Choisir un percentile qui flatte le résultat, ou en changer entre deux rapports ; exclure les longs cas comme « valeurs aberrantes » ou les reclasser | Percentile fixé dans le registre ; liste des éléments exclus avec leurs motifs ; âge du plus ancien élément ouvert |
| Âge du plus ancien élément ouvert | Clore ou fusionner le plus ancien élément sans le résoudre ; le déplacer vers une autre file ou catégorie | Taux de réouverture ; audit par échantillon des plus anciennes clôtures ; nombre de transferts de file |
| Couverture du reporting des taux | Joindre un décompte en petits caractères alors que les titres continuent de mener avec le pourcentage ; fixer le décompte minimal si bas qu'il ne se déclenche jamais | Revoir le tableau de bord réel, pas le registre ; décompte minimal revu avec la largeur de l'intervalle |
| Taux de signaux de la carte de contrôle | Élargir les limites, ajouter des règles ou redémarrer la référence pour que les signaux disparaissent ; déplacer des points en changeant la mesure | Règles et limites conservées dans le registre avec l'historique des changements ; comparer avec l'histogramme brut |
| Largeur de l'intervalle | Choisir une méthode ou une fenêtre qui produit une fourchette étroite ; regrouper des services dissemblables pour agrandir l'échantillon | Méthode nommée dans le registre ; ventilation par service disponible sur demande ; résultats regroupés et non regroupés comparés |

Une lecture saine montre des médianes et des percentiles qui évoluent dans le même sens que l'expérience des utilisateurs, une courte liste de vieux éléments qui diminue sans être reclassée discrètement, et des taux qui apparaissent avec leurs décomptes. Le taux de signaux de la carte de contrôle doit être faible et non nul : une carte qui ne signale jamais est peut-être incapable de le faire, et une carte qui signale toujours reflète un processus instable ou des règles mal choisies.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Temps moyen de résolution | Simple, correspond à de nombreux contrats, facile à totaliser | Dominé par la queue ; cache ce que les clients vivent habituellement |
| Médiane plus percentile élevé | Résiste aux valeurs aberrantes ; soutient les promesses aux clients | Demande un peu d'explication ; les percentiles ont besoin d'assez d'éléments pour être stables |
| Taux bruts sans décomptes | Compacts et familiers | Cachent les petits échantillons et invitent à la surinterprétation |
| Taux avec décomptes et intervalles | Honnêtes sur l'incertitude ; découragent la sur-réaction | Paraissent moins décisifs ; les méthodes d'intervalle demandent un accord |
| Cartes de contrôle | Séparent le signal du bruit ; guident le moment d'agir | Demandent assez de points et des définitions stables ; les limites peuvent être mal lues ou manipulées |
| Comparaison avant-après | Rapide et facile à communiquer | Sujette à la régression vers la moyenne et aux changements simultanés |

Pour un service avec une poignée d'incidents par an, aucune statistique n'est stable, et la bonne méthode est de lire chaque incident. Pour un centre de services à gros volume, les mesures conscientes des distributions sont peu coûteuses et nettement supérieures. Choisissez selon le volume et l'enjeu de la décision.

## Questions à discuter avec votre équipe

**1. Parmi les chiffres de notre tableau de bord actuel, lequel est une moyenne de quelque chose d'asymétrique, et que montreraient la médiane et le 95e percentile ?**
Choisissez la mesure de temps la plus surveillée et calculez les trois sur le même ensemble d'éléments avant la réunion. Demandez si l'histoire que raconte la moyenne correspond à ce que disent les utilisateurs. Concluez en convenant de quel résumé devient le titre et où figureront les autres.

**2. Combien d'éléments se tiennent derrière notre pourcentage le plus cité, et le citerions-nous encore si nous écrivions les décomptes ?**
Listez les trois pourcentages que la direction lit le plus. À côté de chacun, écrivez le numérateur et le dénominateur de la dernière période. Demandez ce qu'un succès ou un échec de plus ferait au chiffre. Convenez d'un décompte minimal en dessous duquel l'équipe montre les éléments plutôt qu'un taux.

**3. Quand avons-nous pour la dernière fois attribué une amélioration à une initiative, et que se passait-il d'autre à ce moment-là ?**
Choisissez une récente histoire de réussite. Demandez quand la mesure était au plus bas, à quoi ressemble l'historique plus long et si un service comparable s'est aussi amélioré. Gardez un ton curieux.

**4. Quelle est la plage normale de nos mesures clés, et qui serait en mesure de dire qu'une semaine donnée est inhabituelle ?**
Tracez les 20 dernières valeurs hebdomadaires ou plus d'une mesure et dessinez le centre et les limites, ou calculez-les grossièrement. Demandez à quelles semaines l'équipe a réagi alors qu'elles étaient dans la plage. Convenez de qui détient la carte et où les règles de signal sont écrites.

**5. Qui ou quoi manque à nos données ?**
Listez les sources de la mesure : tickets clos, réponses d'enquête, services supervisés, outils dotés d'horodatages. Pour chacune, demandez qui est exclu et pourquoi. Consignez chaque lacune comme une correction ou une réserve.

**6. Comment expliquerions-nous une large fourchette ou un « nous ne savons pas encore » à la direction sans que cela ressemble à une excuse ?**
Répétez la formulation sur un exemple réel : « Entre 70 et 95 %, sur 12 incidents ; nous comptons la resserrer après le prochain trimestre. » Demandez ce dont l'auditoire a besoin pour décider et si la fourchette change la décision. Rédigez un court texte pendant la réunion.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison utilisent le temps de cycle et le débit pour prévoir, et elles gagnent le plus avec des prévisions fondées sur des percentiles plutôt que sur des moyennes (voir le sujet 2.1, Mesures de flux). Une prévision énoncée comme une fourchette avec une probabilité est plus facile à défendre qu'une date. Résistez à l'envie de lire le changement d'une période comme une tendance (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les données de tickets et les horloges d'incidents ; elles sont donc les mieux placées pour publier des médianes, des percentiles et le plus ancien élément ouvert, et pour expliquer les règles de suspension. Elles doivent tracer le volume hebdomadaire et le temps de résolution avec des limites de contrôle afin qu'un vrai changement, comme une version défectueuse, soit distingué d'une mauvaise semaine. Quand un service a peu d'incidents, elles doivent revoir chacun d'eux plutôt que de calculer des taux (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants posent les questions qui façonnent ce que les équipes montrent. Demander « pourquoi est-ce monté ? » à chaque oscillation entraîne l'organisation à expliquer le bruit et à le cacher. Les dirigeants doivent demander si un mouvement est dans la plage normale, combien d'éléments se tiennent derrière un chiffre et ce qui a changé dans le processus. Les instances de gouvernance peuvent exiger des décomptes sur les taux phares.

### Clients et utilisateurs

Les clients vivent des cas individuels, pas des moyennes. Ils se souviennent de la seule demande qui a pris cinq semaines, et une moyenne de deux jours ne répare pas ce souvenir. Les engagements en percentile (« neuf demandes sur dix en trois jours ouvrés ») correspondent mieux au modèle mental du client que les temps moyens. Les résultats d'enquête doivent être montrés avec le nombre de réponses, et les commentaires libres doivent être lus à côté des chiffres (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne a un centre de services et une équipe d'exploitation qui soutient sa boutique web. Les chiffres ci-dessous sont illustratifs.

La direction voit un titre mensuel : « le temps moyen de résolution des incidents est passé de 9,1 heures à 7,4 heures ». La responsable de l'exploitation doit le confirmer et présenter le plan pour le prochain objectif, 6 heures. Avant d'accepter, elle demande à l'analyste de sortir les éléments sous-jacents et de les tracer. Sur 240 incidents du mois (illustratif), la médiane est de 2,5 heures, le 85e percentile de 14 heures, et 9 incidents ont plus de 5 jours et sont encore ouverts. Le mois précédent, la médiane était de 2,6 heures. La moyenne a baissé parce que trois très longs incidents du mois précédent, dont un de 11 jours, se sont résolus plus tôt dans la période, et parce qu'un lot de tickets de réinitialisation de mot de passe a été reclassé dans un type de demande à clôture rapide.

L'équipe trace la médiane hebdomadaire sur les 26 dernières semaines. La ligne centrale se situe près de 2,6 heures, et chaque point des deux derniers mois est à l'intérieur des limites. La baisse du titre n'est pas un signal. La recatégorisation de la deuxième semaine a changé la définition en milieu de graphique : l'équipe la marque donc et redémarre les limites à partir de ce point.

Elle décide de trois changements. Le rapport mensuel montrera la médiane, le 85e percentile et le plus ancien élément ouvert, avec le nombre d'incidents derrière chacun. L'objectif proposé de 6 heures de moyenne est remplacé par une conversation sur un objectif en percentile, à fixer après un trimestre de données selon la nouvelle définition. L'équipe listera aussi les 9 vieux incidents avec un responsable et une prochaine étape pour chacun.

Le risque de détournement qu'elle repère survient à la revue suivante. Un responsable propose de clore les 9 plus anciens incidents comme « plus reproductibles » pour que le chiffre du plus ancien élément paraisse sain. Comme le registre apparie l'âge du plus ancien élément ouvert avec le taux de réouverture et un audit par échantillon des vieilles clôtures, l'équipe lit trois des clôtures proposées, constate que deux sont toujours actives et les garde ouvertes. Le chiffre du plus ancien élément reste inconfortable un mois de plus. C'est le comportement voulu.

## Agilité, IA, automatisation et analytique

### Agilité

Une livraison fréquente produit de nombreux petits échantillons, ce qui est bon pour voir le changement, mais chaque échantillon est petit. Une pratique utile est de montrer des cartes de contrôle sur une fenêtre glissante et de ne discuter que des signaux, pas de chaque ondulation, lors des revues régulières. La précaution est d'éviter de réagir au bruit : une équipe qui change de cap après chaque creux ne verra jamais l'effet d'aucun changement.

### IA

Le travail assisté par l'IA déplace souvent toute la distribution, par exemple des premières réponses plus rapides avec une qualité plus variable. Comparez avant et après avec les percentiles et le plus ancien élément, et appariez la vitesse avec une mesure de qualité. La précaution est qu'un changement de modèle peut altérer les données en pleine tendance : marquez donc sur le graphique les changements de modèle et d'invite.

### Automatisation

Automatisez le calcul et l'affichage des médianes, des percentiles élevés, des décomptes et des intervalles, pour que la bonne forme soit celle par défaut et que personne ne recalcule à la main. L'automatisation a aussi besoin que soient rapportées ses propres tailles d'échantillon et ses propres taux d'échec. La précaution est que des alertes automatiques sur des seuils créent de fausses alarmes quand les données sont asymétriques : fondez donc les alertes sur les limites de contrôle, pas sur des nombres fixes.

### Analytique

Dites toujours combien d'éléments se tiennent derrière un taux et montrez un intervalle quand le décompte est petit. Utilisez des prévisions sous forme de fourchettes, pas de dates uniques. La précaution est que la signification statistique n'est pas l'importance pratique, et qu'un petit échantillon peut cacher un vrai problème : combinez donc les chiffres avec la lecture d'éléments réels.

## Éclairage sectoriel

**Startup.** Les volumes sont petits, de sorte que la plupart des taux sont faits de quelques éléments et que les intervalles sont larges. Lisez chaque incident plutôt que de calculer des statistiques, tenez un simple graphique hebdomadaire d'une ou deux mesures et évitez de proclamer des tendances à partir de trois points. À mesure que le volume croît, passez tôt aux médianes et aux percentiles pour que les habitudes soient déjà en place.

**Petite entreprise.** La personne qui gère l'informatique détient aussi les données, et l'échantillon est généralement petit. Rapportez des décomptes, pas des pourcentages, pour les événements rares, et comparez avec votre propre historique plus long. Vérifiez ce que mesure vraiment l'horloge de « temps de réponse » d'un éditeur.

**Grande entreprise.** Le volume rend les distributions significatives, et encourage aussi des agrégats qui mélangent des services dissemblables. Comparez ce qui est comparable, publiez les définitions et le percentile employé, et tenez une bibliothèque partagée de règles de graphiques et de calculs pour que les équipes ne calculent pas la même mesure de trois façons.

**Gouvernement et secteur public.** Les contrats et le reporting réglementaire fixent souvent une moyenne ou un pourcentage seuil, et ces définitions ne sont pas négociables. Rapportez le chiffre exigé exactement comme défini, et montrez à côté la médiane, le percentile et les décomptes pour que les organes de contrôle voient le tableau complet. L'examen public rend l'incertitude honnête plus précieuse, car un chiffre trop confiant coûte cher à rétracter (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Il faut quelques heures pour convenir de règles de résumé, construire un histogramme et une carte de contrôle à partir d'un export et ajouter des décomptes à un modèle de rapport, plus quelques minutes à chaque cycle pour les tenir à jour. La plupart des outils calculent déjà les percentiles. Le coût le plus lourd est une conversation avec des gens habitués à un seul chiffre rassurant.

Le rendement est de meilleures décisions et moins de réactions inutiles. Les équipes cessent de se réorganiser après une mauvaise semaine, cessent d'attribuer aux initiatives des améliorations dues au hasard et cessent de promettre des moyennes que la moitié de leurs clients ne vivent pas. N'empruntez pas de chiffre : comptez combien de fois des décisions de l'an dernier ont été inversées et combien d'« améliorations » se sont évanouies la période suivante, et servez-vous de ces décomptes pour dimensionner le dossier.

## Anti-modèles et pièges

- **Moyenner des durées asymétriques.** La moyenne est tirée par la queue et cache ce que vivent les utilisateurs. Rapportez la médiane et un percentile élevé nommé, et montrez le plus ancien élément ouvert.
- **Des pourcentages tirés de minuscules échantillons.** « 100 % » à partir de trois éléments est une anecdote. Montrez les décomptes et appliquez une règle de décompte minimal.
- **Réagir à chaque oscillation.** Courir après chaque semaine rouge gaspille l'effort et apprend aux équipes à expliquer du bruit. Utilisez des limites de contrôle et des règles de signal écrites.
- **La preuve par l'avant-après.** Deux points ne peuvent pas séparer une intervention du hasard ou de la régression vers la moyenne. Utilisez une référence plus longue et une comparaison.
- **Déplacer les poteaux de but sur le graphique.** Changer les limites, les règles ou les définitions après coup fait concorder n'importe quel graphique avec l'histoire. Fixez les règles, consignez les changements et annotez-les.
- **Exclure les valeurs aberrantes par défaut.** Les cas les plus longs sont généralement ceux dont les clients se souviennent. N'excluez que pour un motif écrit, et listez ce qui a été exclu.
- **La fausse précision.** Rapporter 83,3 % à partir de 12 éléments suppose une connaissance que les données n'ont pas. Arrondissez honnêtement et montrez une fourchette.
- **Regrouper des travaux dissemblables.** Un temps mêlé pour les réinitialisations de mot de passe et les pannes de centre de données ne décrit ni l'un ni l'autre. Segmentez d'abord.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Résumés des données de temps | Moyennes uniquement | Certaines équipes montrent des médianes | Médiane plus percentile nommé et plus ancien élément ouvert sont la norme | Distributions revues avec un garde-fou et suivies dans le temps | Engagements en percentile convenus avec clients et fournisseurs, et révisés à mesure que les données changent |
| Taille d'échantillon et incertitude | Taux cités sans décomptes | Décomptes montrés dans certains rapports | Décomptes et règle de décompte minimal sur chaque taux | Intervalles sur les taux phares, méthode dans le registre | Incertitude partagée ouvertement avec les clients et utilisée en planification entre équipes |
| Variation et causalité | Chaque changement est expliqué | Quelques cartes avec limites | Cartes de contrôle avec règles écrites pour les mesures clés | Les signaux déclenchent une investigation planifiée ; initiatives vérifiées face à la référence | Bibliothèques de cartes partagées entre services ; références comparées entre équipes sans classement |

## Liste de vérification

- [ ] Chaque mesure de temps rapporte une médiane et un percentile élevé nommé, et pas une moyenne seule.
- [ ] L'âge du plus ancien élément ouvert et le nombre d'éléments au-delà du percentile élevé sont rapportés.
- [ ] Chaque taux rapporté montre son numérateur et son dénominateur.
- [ ] Une règle de décompte minimal est écrite et appliquée à tous les taux.
- [ ] Les taux phares et les prévisions montrent une fourchette, avec la méthode nommée dans le registre.
- [ ] Des cartes de contrôle existent pour les trois mesures sur lesquelles l'équipe agit, avec des règles de signal écrites.
- [ ] Les changements de définition sont annotés sur les graphiques et consignés dans le registre.
- [ ] Les éléments exclus sont listés avec leurs motifs.
- [ ] Les affirmations d'amélioration sont vérifiées face à une référence plus longue avant d'être répétées.
- [ ] Le vecteur de détournement et le garde-fou de chaque métrique sont dans le registre (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Prompts d'IA

**Vérifiez si un résumé convient aux données.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Exprimez un taux avec son incertitude.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Jugez si un changement est un signal ou du bruit.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et le garde-fou apparié d'une métrique de temps ou de taux avant de la publier.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une mesure statistique ajoutée à un sujet a sa définition, ses horloges, son vecteur de détournement et son garde-fou.

## Idées clés

- Les durées de service sont asymétriques : rapportez donc la médiane et un percentile élevé nommé, et ajoutez l'âge du plus ancien élément ouvert.
- Chaque taux porte son décompte, et les petits échantillons sont montrés sous forme d'éléments ou avec une fourchette, pas comme un pourcentage assuré.
- Connaissez la plage normale d'une mesure avec une carte de contrôle avant de réagir à une seule semaine.
- Méfiez-vous des améliorations mesurées par deux points : la régression vers la moyenne et les changements de définition en expliquent beaucoup.
- L'incertitude honnête est une force dans un rapport, et un garde-fou contre le détournement à la Goodhart (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- Gardez la technique proportionnée : quelques méthodes cohérentes, expliquées en mots simples, servent mieux une équipe que beaucoup de méthodes inexpliquées.

## Références et lectures complémentaires

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
