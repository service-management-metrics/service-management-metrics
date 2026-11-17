# Métriques de traitement des demandes de service

**Mesurez le temps que prennent les demandes courantes du point de vue de l'utilisateur, la part de ce temps passée à attendre, les éléments du catalogue qui génèrent la demande et la part du travail qui est automatisée, puis servez-vous de ce tableau pour repenser les demandes fréquentes plutôt que de pousser les personnes qui les traitent.**

## Vue d'ensemble et motivation

Une **demande de service** est une demande courante d'un utilisateur pour quelque chose qu'un service est conçu pour fournir : un compte, l'accès à un dossier, un ordinateur portable, une licence logicielle, une information. Elle diffère d'un **incident**, qui est une perturbation non planifiée d'un service (voir le sujet 3.2, Volume et priorité des incidents), et d'un **changement**, qui modifie un service et exige un nouveau jugement sur le risque (voir le sujet 4.3, Métriques de maîtrise des changements). Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, ce travail relève de la pratique de gestion des demandes de service, et il est généralement décrit comme un **modèle de demande** répétable : les informations nécessaires, les approbations, les étapes et le délai attendu. ITIL écrit le mot « fulfilment » à la britannique ; le corps de ce sujet suit l'orthographe du livre.

Les demandes comptent pour les métriques parce qu'elles sont une demande prévisible. Un incident est une surprise ; une demande d'ordinateur portable pour un nouvel arrivant revient chaque mois et suit les mêmes étapes. Cette prévisibilité fait des demandes le meilleur candidat à la conception, à la standardisation et à l'[automatisation des processus](https://en.wikipedia.org/wiki/Process_automation). Elle signifie aussi que les retards sont rarement causés par la difficulté. Ils sont causés par les files, les approbations et les transmissions : la question utile est donc de savoir où la demande attend, non à quelle vitesse quelqu'un tape.

L'unité d'analyse est l'**élément du catalogue** : une chose nommée qu'un utilisateur peut demander dans le [catalogue des services](https://en.wikipedia.org/wiki/Service_catalog) (le terme d'ITIL est « service catalogue » ; le reste de ce sujet dit « catalogue des services »). Les mesures par élément sont bien plus utiles qu'un chiffre mélangé unique, car une demande de réinitialisation de mot de passe et une demande de construction de serveur ont des horloges, des responsables et des cibles raisonnables différents. Une moyenne mélangée cache les deux.

Les visions agile et ITIL se rencontrent ici avec peu de frictions. ITIL demande si le service livre le résultat convenu dans le délai convenu. La pratique agile du flux demande combien de temps le travail met à aller de la demande à terminé, quelle part reste dans des files et combien de travail est en cours en même temps. Une demande est un élément de travail qui avance dans un flux de travail : les outils de la mesure du flux, comme le temps de cycle et l'âge de l'élément de travail, s'appliquent donc directement (voir le sujet 2.1, Mesures de flux). Le vocabulaire diffère. L'arithmétique est la même.

Trois termes reviennent. Le **délai de traitement** est le temps écoulé entre le moment où l'utilisateur soumet la demande et celui où l'utilisateur confirme, ou le système enregistre, que la chose a été livrée. Le **temps d'intervention** est le temps pendant lequel quelqu'un travaille activement sur la demande, et le **temps d'attente** est tout le reste, y compris les approbations et l'attente de l'utilisateur. La différence entre les deux est ce qu'un modèle de demande doit réduire. La **part d'automatisation** est la portion des demandes traitées sans qu'une personne n'y touche après la soumission.

Les mesures de temps demandent du soin. Les délais de traitement sont asymétriques : la plupart des demandes se terminent vite et quelques-unes prennent très longtemps. Une moyenne est tiraillée par ces quelques-unes : rapportez donc la médiane et un [percentile](https://en.wikipedia.org/wiki/Percentile) élevé comme le 85e ou le 95e (voir le sujet 1.6, Culture statistique pour les métriques de service). Les objectifs convenus avec les clients, comme ceux d'un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), doivent être énoncés de la même façon : « 85 % des demandes d'ordinateur portable traitées en moins de 5 jours ouvrés » en dit plus que « moyenne de 3 jours ».

Enfin, un avertissement venu de la psychologie de la mesure. Quand une équipe est jugée sur la rapidité de clôture des demandes, le moyen le moins coûteux d'améliorer le chiffre est de changer ce qui compte comme clos, ou de suspendre l'horloge. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique pleinement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Chaque métrique ci-dessous est donc appariée avec un garde-fou, et aucune ne décrit un agent individuel.

## Principes clés

- **Mesurez par élément du catalogue.** Chaque élément a son propre modèle de demande, son responsable et sa cible raisonnable : les chiffres mélangés trompent donc.
- **Démarrez l'horloge quand l'utilisateur demande et arrêtez-la quand l'utilisateur a la chose.** Les jalons internes sont de bons diagnostics, mais ils ne sont pas l'expérience du client.
- **Séparez le temps d'attente du temps d'intervention.** L'écart entre les deux montre où la refonte rapporte, et il se trouve rarement dans le travail lui-même.
- **Rapportez des distributions, pas des moyennes.** Une médiane et un 95e percentile décrivent ce que vivent les utilisateurs.
- **Traitez la demande comme un signal.** Le volume par élément montre ce dont les utilisateurs ont besoin, ce qui est déroutant et ce qui mérite l'automatisation ou le libre-service.
- **Automatisez d'abord le stable et le fréquent.** La part d'automatisation est le résultat d'une bonne conception des demandes, pas un but à poursuivre pour lui-même.
- **Mesurez l'équipe et le service, jamais la personne.** Les demandes circulent à travers des systèmes, et la variation entre agents reflète surtout le mélange du travail.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de traitement des demandes | Temps écoulé pour livrer une demande, montré en médiane et en 95e percentile par élément du catalogue | l'horloge démarre quand l'utilisateur soumet la demande, s'arrête quand l'utilisateur confirme la livraison ou que la livraison est enregistrée ; les demandes annulées par l'utilisateur sont exclues ; le temps d'attente de l'utilisateur est rapporté à part, non retiré | jours ouvrés ou heures | Historique des demandes de l'outil ITSM | Gestion des demandes de service | Temps de cycle sur le tableau de l'équipe (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Hebdomadaire, tendance mensuelle |
| Traitement dans la cible | Part des demandes livrées dans la cible convenue pour leur élément du catalogue | demandes traitées dans la cible / demandes traitées dans la période ; horloge comme ci-dessus, les éléments encore ouverts sont exclus et comptés plutôt dans l'âge du backlog | pourcentage | Historique des demandes de l'outil ITSM ; table des cibles par élément du catalogue | Gestion des niveaux de service | Attente de niveau de service | Mensuelle |
| Backlog de demandes et âge | Nombre de demandes ouvertes et ancienneté des plus vieilles, par élément du catalogue | demandes ouvertes à la fin de la période (nombre) ; âge de chaque demande ouverte = date du rapport moins date de soumission ; rapporter le nombre, l'âge médian et l'âge le plus élevé | nombre et jours | File des demandes ouvertes de l'outil ITSM | Gestion des demandes de service | Travail en cours et éléments de travail vieillissants (voir le sujet 2.3, Travail en cours et théorie des files d'attente) | Hebdomadaire |
| Temps d'attente d'approbation | Temps qu'une demande passe à attendre une approbation | l'horloge démarre quand l'approbation est demandée, s'arrête quand elle est accordée ou refusée ; les demandes sans étape d'approbation sont exclues | heures | Journal des approbations de l'outil ITSM | Gestion des demandes de service ; maîtrise des changements | Temps bloqué ou colonne « en attente » sur le tableau | Mensuelle |
| Volume de demandes par élément du catalogue | Nombre de demandes soumises pour chaque élément, avec sa part de toutes les demandes | demandes soumises par élément dans la période ; les demandes soumises de nouveau en doublon, si elles sont repérées, sont exclues ; rapporter le nombre et la part du total | nombre et pourcentage | Enregistrements de demandes de l'outil ITSM | Gestion du catalogue des services | Analyse de la demande pour façonner le backlog | Mensuelle |
| Part d'automatisation | Portion des demandes traitées sans étape manuelle après la soumission | demandes traitées de bout en bout par l'automatisation / demandes traitées dans la période ; une demande touchée par une personne à une étape de traitement compte comme manuelle ; les approbations par une personne ne comptent pas comme des étapes manuelles de traitement si la politique les exige | pourcentage | Enregistrements de traitement de l'outil ITSM et journaux de la plateforme d'automatisation | Gestion des demandes de service ; automatisation dans la chaîne de valeur du service | L'automatisation dans la définition de terminé | Mensuelle |
| Taux de réouverture des demandes | Part des demandes traitées que l'utilisateur rouvre ou relève de nouveau parce que le résultat était faux ou incomplet | demandes rouvertes ou relevées de nouveau pour le même élément par le même utilisateur dans les 7 jours suivant le traitement / demandes traitées dans la période ; la fenêtre de 7 jours est un exemple que l'équipe écrit | pourcentage | Historique des demandes de l'outil ITSM | Gestion des demandes de service | Taux de reprise ; défauts échappés | Mensuelle |

Le délai de traitement ne compte en temps de travail que si l'équipe a convenu d'un calendrier et l'a consigné ; sinon, utilisez des heures écoulées et dites-le. La métrique de backlog porte trois chiffres à dessein, car un décompte seul ne dit rien de l'attente. La définition de la part d'automatisation laisse les approbations humaines hors du décompte « manuel » parce que beaucoup d'approbations sont une décision de politique et non un coût de traitement ; le temps d'attente d'approbation est mesuré séparément pour que le retard reste visible.

## Recommandations

### Définir les horloges et l'unité

**1. Mesurez par élément du catalogue, et publiez la liste des éléments.** Commencez par les dix premiers éléments par volume, qui couvrent généralement une grande part des demandes, et ajoutez des éléments à mesure que les données le permettent. Donnez à chaque élément un responsable, une cible énoncée et une définition d'une ligne de « livré ». La liste des éléments est le dénominateur de tout le reste : gardez-la donc dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Écrivez le début et la fin de l'horloge de chaque élément.** Pour la plupart des éléments, l'horloge démarre à la soumission et s'arrête quand l'utilisateur peut utiliser ce qu'il a demandé, non quand un ticket est clos. Un ordinateur portable est livré quand il est entre les mains de l'utilisateur, non quand le coursier est réservé.

**3. Décidez une fois de la façon de traiter l'attente de l'utilisateur.** Certaines demandes calent parce que l'utilisateur n'a pas répondu à une question. Suspendre l'horloge pour cela est raisonnable, mais c'est aussi le levier le plus facile à abuser. Consignez la suspension comme un état distinct avec un motif, rapportez le temps suspendu comme son propre chiffre et revoyez le taux de suspension par élément (voir le sujet 1.5, Sources de données et instrumentation).

### Rapporter ce que les utilisateurs éprouvent

**4. Montrez la médiane et le 95e percentile, avec un décompte.** Mettez les deux sur un même graphique par élément, avec le nombre de demandes derrière chaque point. Une médiane de deux jours avec un 95e percentile de vingt vous dit que la plupart des utilisateurs sont bien servis et qu'une queue demande investigation, ce qu'une moyenne de quatre jours cache. Quand le décompte est petit, dites-le et montrez plutôt les demandes individuelles à la place d'un percentile.

**5. Rendez visible l'âge des demandes ouvertes.** Le délai de traitement n'est connu qu'une fois la demande terminée : il est donc en retard. Une liste des plus vieilles demandes ouvertes par élément, triée par âge, dit à une équipe où regarder aujourd'hui. En termes de flux, c'est l'âge de l'élément de travail face au temps de cycle habituel de l'élément, et c'est la vue la plus exploitable que puisse avoir une file de demandes.

**6. Découpez le temps écoulé en temps d'intervention, d'approbation et d'attente de l'utilisateur.** Prenez un échantillon de demandes traitées pour un élément et ventilez chacune selon le temps passé dans chaque état. La plupart des équipes constatent que le travail actif est une petite part du temps écoulé. Le constat déplace la conversation d'amélioration de « travaillez plus vite » vers « supprimez la file entre les étapes », qui est l'idée centrale de l'étude des files et du flux (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Utiliser la demande pour façonner le service

**7. Lisez le volume par élément comme un message des utilisateurs.** Un volume croissant pour un élément peut signifier un besoin croissant, un produit déroutant ou une défaillance ailleurs, comme un processus cassé qui renvoie les gens redemander. Un élément à très faible volume peut être candidat à un retrait du catalogue. Comparez le volume aux données d'adoption (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

**8. Classez les candidats à l'automatisation par volume, stabilité et temps d'intervention.** Les meilleurs premiers candidats sont à fort volume, varient rarement et portent un temps d'intervention notable. Commencez par l'élément dont les étapes sont déjà identiques à chaque fois, comme l'accès à un groupe standard, et automatisez les étapes avant de toucher aux exceptions. Suivez la part d'automatisation par élément pour que les progrès soient visibles, et renvoyez les questions de libre-service et de déflexion à leur propre sujet (voir le sujet 3.7, Métriques de libre-service et d'automatisation).

**9. Repensez les approbations avant d'ajouter des personnes.** L'attente d'approbation domine souvent le temps écoulé. Demandez pour chaque approbation si elle est exigée par la politique, si une demande standard préapprouvée suffirait et si l'approbateur peut être un rôle avec un suppléant plutôt qu'une personne unique. Préapprouver les demandes à faible risque et bien comprises reprend l'idée des changements standard de la maîtrise des changements, et supprime des files sans supprimer le contrôle.

### Garder les chiffres honnêtes

**10. Appariez toujours vitesse et qualité.** Rapportez le délai de traitement à côté du taux de réouverture et d'un signal de satisfaction des utilisateurs pour le même élément (voir le sujet 6.1, Métriques de satisfaction de la clientèle). Une demande plus rapide qui revient rouverte est plus lente qu'elle n'en a l'air. Si la vitesse s'améliore et que le taux de réouverture monte avec elle, traitez le gain de vitesse comme non prouvé.

**11. Gardez séparées dans les données les demandes, les incidents et les changements.** Les mélanger fausse les trois. Une réinitialisation de mot de passe qui est en réalité le symptôme d'un service de connexion défaillant est un incident, et une demande de modifier le fonctionnement d'un service est un changement. Classez à la réception avec une règle courte, échantillonnez chaque trimestre les éléments mal classés et comparez côte à côte les volumes de demandes et d'incidents (voir le sujet 3.1, Métriques du centre de services).

**12. Revoyez le tableau des éléments avec l'équipe qui fait le travail.** Réunissez-vous chaque mois trente minutes autour du tableau par élément : volume, médiane et 95e percentile, plus vieille demande ouverte, part d'automatisation, taux de réouverture. Choisissez un élément et un changement à essayer, et regardez le même tableau le mois suivant pour voir ce qui s'est passé.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai de traitement des demandes | Suspendre l'horloge pour « attente de l'utilisateur » que l'utilisateur en soit ou non la cause ; clore des demandes avant livraison et les rouvrir comme nouvelles ; scinder une demande en plusieurs petites | Part de temps suspendu par élément, avec audit par échantillon des motifs de suspension ; taux de réouverture ; confirmation de la livraison par l'utilisateur avant la clôture |
| Traitement dans la cible | Redéfinir la cible pour qu'elle soit plus facile ; ne compter que les demandes qui se terminent et ignorer les vieilles ouvertes ; choisir les éléments rapides pour l'ensemble des cibles | Âge du backlog pour les demandes ouvertes ; changements de cibles consignés dans le registre des métriques avec un motif ; l'ensemble des cibles couvre tous les éléments par volume |
| Backlog de demandes et âge | Clore de vieilles demandes comme « sans réponse » ou « périmées » ; déplacer des demandes vers une autre file ou catégorie pour qu'elles quittent la file comptée | Décompte des demandes closes sans livraison, par motif ; transferts de catégorie et de file revus à la réunion mensuelle |
| Temps d'attente d'approbation | Les approbateurs approuvent sans lire pour garder leur temps bas ; les demandeurs relancent les approbateurs hors du système pour que l'attente consignée soit courte | Revue par échantillon des demandes approuvées face à la politique ; taux de réouverture et exceptions de sécurité pour les éléments approuvés ; nombre d'étapes d'approbation par élément |
| Volume de demandes par élément du catalogue | Réduire le volume en rendant le catalogue plus difficile à trouver ou en décourageant les demandes ; reclasser les demandes en incidents ou en « demandes générales » | Satisfaction des utilisateurs pour le catalogue ; part des contacts classés « autre » ; données d'adoption du service (voir le sujet 6.3, Métriques d'adoption des services et de catalogue) |
| Part d'automatisation | Automatiser les éléments triviaux pour faire monter le pourcentage ; compter comme automatisée une demande scriptée qu'une personne vérifie encore à la main ; cacher les étapes manuelles dans un ticket séparé | Part pondérée par le volume de demandes et par le temps d'intervention supprimé ; taux d'échec de l'automatisation et de repli vers le manuel ; échantillon de demandes « automatisées » retracées de bout en bout |
| Taux de réouverture des demandes | Décourager la réouverture en la rendant difficile ; dire aux utilisateurs d'ouvrir une nouvelle demande, ce qui réinitialise le compteur | Demandes répétées du même utilisateur pour le même élément dans la fenêtre ; satisfaction des utilisateurs par élément ; réouverture permise depuis la notification |

Une lecture saine ressemble à ceci. La médiane et le 95e percentile baissent ensemble, ou le 95e percentile baisse pendant que la médiane tient. La plus vieille demande ouverte n'est pas beaucoup plus ancienne que le 95e percentile des demandes traitées. Le taux de réouverture et la satisfaction restent plats ou s'améliorent pendant que la vitesse s'améliore. La part d'automatisation monte sur les éléments qui comptent par volume, et le volume lui-même change pour des raisons que l'équipe peut expliquer. Si un chiffre s'améliore nettement pendant que son garde-fou dérive dans l'autre sens, allez regarder les demandes sous-jacentes.

## Compromis : avantages et inconvénients

| Choix | Avantages | Inconvénients |
| --- | --- | --- |
| Mesure par élément | Les cibles s'ajustent au travail ; montre où la refonte rapporte | Plus de données à maintenir ; les petits éléments ont peu de points de données |
| Médiane et 95e percentile au lieu de la moyenne | Décrit ce que vivent les utilisateurs ; résiste aux valeurs aberrantes | Plus difficile à expliquer aux dirigeants habitués à un seul chiffre ; instable pour les éléments à faible volume |
| Suspendre l'horloge en attente de l'utilisateur | Équitable envers l'équipe quand l'utilisateur cause le retard | Facilement abusé ; cache l'effet de formulaires flous et d'une mauvaise communication |
| Compter la part d'automatisation | Rend visibles les progrès de l'automatisation et les relie au coût | Récompense les automatisations faciles ; ne dit rien de la qualité sans être apparié au taux d'échec |
| Mesurer de la soumission de l'utilisateur à sa confirmation | Correspond à l'expérience du client | Dépend de la confirmation de l'utilisateur, souvent absente ; demande une règle par défaut |
| Séparation stricte des demandes et des incidents | Données plus propres et meilleures cibles | Demande de la discipline à la réception et des discussions sur les cas limites |

Le compromis central est entre un chiffre propre et un chiffre équitable. Une horloge stricte qui ne s'arrête jamais est simple et difficile à détourner, mais elle pénalise l'équipe quand l'utilisateur est lent. Une horloge flexible est plus équitable mais demande un audit. La plupart des équipes font bien de commencer strictes, d'ajouter un état suspendu explicite avec un motif, et de rapporter ouvertement la part suspendue.

## Questions à discuter avec votre équipe

**1. Quels trois éléments du catalogue causent le plus d'attente pour nos utilisateurs, et comment le savons-nous ?**
Apportez le tableau par élément du volume, de la médiane et du 95e percentile du délai de traitement. Demandez au groupe de choisir les éléments selon l'attente totale (volume fois attente typique), non selon l'agacement ressenti. Comparez la réponse avec le premier réflexe des gens. L'animateur doit noter où les données et l'instinct diffèrent.

**2. Quand notre horloge démarre-t-elle et s'arrête-t-elle, et un utilisateur serait-il d'accord ?**
Choisissez un élément courant et parcourez son trajet comme l'utilisateur le voit, du premier clic au moment où il peut utiliser le résultat. Marquez où l'état de notre ticket dit « fait » et où l'utilisateur dirait « fait ». Tout écart entre les deux est une attente invisible. Convenez d'un changement de l'événement de fin, et écrivez-le dans le registre des métriques.

**3. Quelle part de notre temps écoulé est du travail de personnes, et quelle part de l'attente ?**
Échantillonnez dix demandes traitées pour un élément et ventilez chacune en temps d'intervention, d'approbation et d'attente de l'utilisateur. Montrez le résultat en barre empilée. Demandez ce qui devrait être vrai pour que l'attente soit divisée par deux. Cette question fait généralement passer la salle de « nous avons besoin de plus de personnel » à « nous avons besoin de moins de transmissions ».

**4. Lesquelles de nos approbations pourraient être remplacées par une règle convenue d'avance ?**
Listez les approbations des principaux éléments et la raison de politique de chacune. Là où personne ne se souvient du dernier refus, l'approbation est peut-être un rituel.

**5. Si nous automatisions le prochain élément du catalogue, le chiffre monterait-il pour la bonne raison ?**
Discutez de la façon dont la part d'automatisation peut monter par des éléments faciles ou à faible volume pendant que les utilisateurs ne voient aucune différence. Demandez ce que l'équipe mesurerait pour confirmer qu'une automatisation a aidé : temps d'intervention supprimé, taux d'échec, taux de réouverture et satisfaction. Décidez quel élément automatiser ensuite d'après le volume et le temps d'intervention, non d'après la seule facilité.

**6. Que ferions-nous si un chiffre de cette page se dégradait, et qui serait blâmé ?**
Menez l'expérience de pensée ouvertement. Demandez ce que l'équipe serait tentée de changer dans les données avant de changer le service. Convenez que la première réponse à un chiffre qui se dégrade est de regarder les demandes qui sont derrière.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit génèrent des demandes sur leurs propres services : accès à des environnements, nouvelles chaînes, données de test, clés de licence. Les longs délais de traitement de celles-ci apparaissent comme du travail inactif dans le flux propre de l'équipe : la mesure a donc sa place sur leur tableau comme état bloqué. Les équipes qui détiennent un service doivent publier leurs propres éléments de demande et leurs cibles, et traiter les demandes répétées comme des candidats pour le backlog (voir le sujet 2.6, Métriques du backlog et de son affinage). Là où une demande est en réalité une capacité de plateforme manquante, la demande répétée est l'argument pour la construire.

### Équipes de service et d'exploitation

Pour les personnes qui traitent les demandes, le tableau par élément est une carte de l'endroit où va l'effort. Elles savent quelles étapes sont manuelles, quelles approbations calent et quels formulaires produisent des saisies vagues. Elles doivent détenir les modèles de demande, le backlog d'automatisation et la revue mensuelle, et être le premier public des données. Les chiffres décrivent la file et le processus : précisez donc explicitement que personne n'est classé et que la variation entre personnes reflète surtout le mélange des demandes qu'elles prennent.

### Direction et gouvernance

Les dirigeants ont besoin d'une vue courte : médiane et 95e percentile des principaux éléments, part traitée dans la cible, plus vieilles demandes ouvertes, et tendance de la part d'automatisation et du coût par demande (voir le sujet 7.5, Coût du service et économie unitaire). La tâche de gouvernance est de demander ce qui a changé, non qui est lent. Les dirigeants approuvent aussi le côté politique des approbations : ils détiennent donc le levier qui réduit le plus l'attente.

### Clients et utilisateurs

Les utilisateurs se soucient de trois choses : combien de temps, quelle prévisibilité et combien d'effort. Ils se soucient rarement des états internes. Montrez-leur une cible claire par élément (« ordinateurs portables en cinq jours ouvrés »), dites-leur où en est leur demande et demandez-leur de confirmer la livraison. Recueillez un signal de satisfaction en une question à la clôture et lisez les commentaires.

## En pratique : un exemple de gestion des services

Le service informatique d'une université régionale (organisation fictive) exploite un centre de services et une petite équipe plateforme. Les chiffres ci-dessous sont illustratifs et ne viennent d'aucune organisation réelle.

À la revue mensuelle, l'équipe regarde le tableau par élément. Sur l'ensemble des demandes, le délai de traitement moyen est de 3,1 jours ouvrés, ce qui paraît acceptable et n'a presque pas bougé depuis un an. Par élément, le tableau est différent. « Accès à un dossier partagé » a une médiane de 0,4 jour et un 95e percentile de 2 jours. « Licence logicielle de département » a une médiane de 2 jours et un 95e percentile de 11 jours. « Ordinateur portable pour nouvel arrivant » a une médiane de 6 jours et un 95e percentile de 15 jours. Les trois premiers éléments par volume sont l'accès à un dossier partagé, les demandes de licence et les ordinateurs portables de nouveaux arrivants, à des parts illustratives de 32, 21 et 9 % de toutes les demandes.

L'équipe échantillonne dix demandes d'ordinateur portable et ventile le temps. Résultat illustratif : environ 0,5 jour de travail d'intervention, 2,5 jours d'attente de l'approbation d'un responsable hiérarchique, 1,5 jour d'attente de confirmation de stock, et le reste dans une file de coursier. L'attente d'approbation est la plus grande part.

La décision découle des données. L'équipe propose, avec le responsable financier et le responsable de la sécurité, que les ordinateurs portables du catalogue standard soient préapprouvés une fois le rôle du nouvel arrivant confirmé par les ressources humaines, le responsable étant informé plutôt que sollicité. Elle relie aussi la vérification du stock au système d'inventaire. Elle fixe l'expérience sur un trimestre et convient de ce qui comptera comme un succès : le 95e percentile des ordinateurs portables baisse, et le taux de réouverture et le score de satisfaction restent au même niveau.

Un risque de détournement apparaît le deuxième mois. La médiane des licences chute nettement, de 2 jours à moins de 1. La revue remarque que la part de temps suspendu « en attente de l'utilisateur » pour l'élément est passée d'un illustratif 5 % à 40 %, et que le taux de réouverture a monté. Un échantillon montre que des agents suspendaient les demandes avec un message générique dès qu'une licence nécessitait la moindre vérification, ce qui arrêtait l'horloge. L'équipe ne blâme pas les agents. Elle voit que l'objectif rendait la suspension attrayante et que le champ du motif de suspension était du texte libre. Elle remplace le motif de suspension par une courte liste, exige une question précise à l'utilisateur et ajoute la part de temps suspendu comme colonne permanente à côté de la médiane. La médiane des licences revient près de son niveau antérieur, le taux de réouverture baisse, et l'équipe utilise le temps de discussion économisé pour repenser le formulaire de licence, qui produisait les demandes floues.

À l'issue du trimestre (illustratif), le 95e percentile des ordinateurs portables passe de 15 à 9 jours et la part d'automatisation de l'accès à un dossier partagé atteint 70 %. L'équipe consigne les deux changements et choisit le formulaire de licence comme prochaine expérience.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les demandes courantes comme de petits produits que l'équipe améliore en continu avec les personnes qui les utilisent. La précaution est qu'un objectif de délai de traitement peut mener à clore les demandes trop tôt ou à les scinder : appariez-le donc avec le taux de réouverture des demandes.

### IA

L'IA peut rédiger des réponses, remplir des formulaires et router des demandes, et peut traiter certaines demandes sans aucune personne. Appariez la part d'automatisation avec le taux de réouverture des demandes et avec la part des demandes traitées par l'IA qui ont ensuite eu besoin d'une personne. La précaution est qu'une IA qui comprend mal une demande peut créer le mauvais accès ou la mauvaise commande : les règles d'approbation s'appliquent donc toujours.

### Automatisation

Automatisez les approbations, la mise à disposition et les mises à jour d'état pour les demandes standard, et mesurez l'automatisation sur les échecs et la reprise manuelle. Montrez séparément le temps d'attente d'approbation, puisque c'est souvent la plus longue attente. La précaution est qu'une automatisation sans responsable clair laisse les demandes échouées dans une file que personne ne surveille.

### Analytique

Montrez le délai de traitement comme une distribution par élément du catalogue et incluez la plus vieille demande ouverte. La décision éclairée est quelle demande repenser en premier. La précaution est que mélanger des éléments simples et complexes dans une moyenne cache les deux.

## Éclairage sectoriel

**Startup.** Une startup a peu de types de demandes et pas de catalogue formel, et les mêmes personnes traitent les demandes et construisent le produit. Mesurez les trois ou quatre demandes qui bloquent les nouveaux arrivants, comme les comptes et l'équipement, et suivez la plus vieille demande ouverte. Automatisez tôt l'accueil, car chaque recrue le répète.

**Petite entreprise.** Une petite entreprise s'appuie souvent sur une personne informatique ou un prestataire externe. Utilisez un simple tableau partagé avec une colonne par état et suivez l'âge et le volume des demandes par type. Demandez au prestataire le volume mensuel par élément et la plus vieille demande ouverte.

**Grande entreprise.** Une grande entreprise a des centaines d'éléments de catalogue, de nombreux groupes de traitement et des approbations en couches. Concentrez-vous sur les principaux éléments par volume et sur les éléments à plus longue attente par attente totale. Standardisez la définition de l'horloge entre groupes de traitement avant de les comparer, et rapportez séparément les transmissions entre groupes (voir le sujet 9.3, Métriques de collaboration et de transmission). Les délais de traitement des fournisseurs ont leur place dans la même vue, mesurés depuis la demande du client, non depuis la réception par le fournisseur.

**Gouvernement et secteur public.** Les organismes publics ajoutent des approbations obligatoires, des règles de passation de marchés et des obligations d'archivage : une part de l'attente est donc de la politique et doit être étiquetée comme telle plutôt que comptée comme un retard à supprimer. Publiez les cibles par élément en langage clair là où les engagements de service sont publics. Rapportez d'une manière qu'un régulateur ou un organe de contrôle puisse reproduire, avec les définitions écrites.

## Dossier d'affaires : motivations, ROI et TCO

Les demandes sont une grande part répétitive du travail qui atteint un centre de services : même une refonte modeste a donc un effet large. Les principales motivations sont des attentes plus courtes et plus prévisibles pour les utilisateurs, un moindre effort de traitement par demande, moins de contacts répétés et une capacité libérée pour le travail sur les problèmes et l'amélioration.

Le côté coût est surtout ponctuel et modeste. Définir les éléments du catalogue, convenir des horloges et s'assurer que l'outil enregistre les états nécessaires représente quelques jours de travail par groupe, plus un petit effort continu pour garder la chaîne correcte (voir le sujet 1.5, Sources de données et instrumentation). L'automatisation a son propre coût de construction et de maintenance, qui comprend la supervision des automatisations, le traitement des échecs et leur mise à jour quand les systèmes cibles changent. Comptez cela dans le coût total de possession au-delà de la licence ou du temps de construction.

Le rendement doit être estimé à partir de vos propres données et non d'une référence générale. Pour un élément, multipliez le volume mensuel par le temps d'intervention économisé et par le coût chargé de ce temps, puis soustrayez le coût de construction et d'exploitation du changement. Ajoutez la valeur du temps d'attente supprimé pour les utilisateurs, avec une méthode que vous pouvez défendre, et montrez-la séparément car c'est une estimation d'une autre nature. Aucun chiffre de ce sujet n'est une référence, et les chiffres d'exemple sont illustratifs. Reliez le dossier d'affaires au coût unitaire par demande là où les données financières existent (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Une moyenne mélangée unique pour toutes les demandes.** Elle cache à la fois les gains rapides et la longue queue. Rapportez par élément, avec une médiane et un 95e percentile.
- **Clore le ticket et appeler cela livré.** L'utilisateur peut n'avoir encore rien. Définissez la livraison du côté de l'utilisateur et demandez une confirmation.
- **Des états de suspension en texte libre.** Un statut « en attente » sans motif permet d'arrêter l'horloge pour n'importe quelle cause. Utilisez une courte liste de motifs et rapportez la part suspendue.
- **Compter l'automatisation par nombre d'éléments.** Dix éléments rares automatisés peuvent faire monter le pourcentage sans aider personne. Pondérez par le volume et le temps d'intervention.
- **Classer les agents par demandes closes.** Cela récompense le tri des tickets faciles et punit ceux qui prennent les difficiles. Rapportez seulement au niveau de l'équipe et de l'élément.
- **Cacher la demande pour paraître efficace.** Rendre le catalogue difficile à utiliser baisse le volume et augmente la frustration. Appariez le volume avec la satisfaction et les données d'adoption.
- **Traiter les approbations comme intouchables.** Les approbations sont souvent le plus grand retard et rarement revues. Demandez ce que chacune protège et si une règle peut faire le travail.
- **Mélanger les demandes et les incidents.** Cela fausse les deux jeux de chiffres. Classez à la réception et échantillonnez la classification.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Les demandes sont comptées comme des tickets ; la fin de l'horloge est ce que « clos » veut dire | Certaines équipes définissent début et fin par élément ; les définitions diffèrent | Une définition d'horloge écrite par élément du catalogue, partagée entre équipes | Définitions revues selon une cadence et changements consignés avec motifs | Les définitions suivent la vue du client à travers les fournisseurs et sont révisées quand elles cessent d'éclairer les décisions |
| Données et rapports | Décomptes tirés à la main de l'outil | Rapports pour certains éléments depuis l'outil ITSM ; temps moyens | Médiane et 95e percentile par élément depuis une source de données unique | Tendances, âge du backlog et part de temps suspendu revus avec leurs garde-fous | Données de traitement des équipes internes et des fournisseurs combinées et reliées aux résultats pour les utilisateurs |
| Demande et automatisation | Demandes traitées une à une ; aucune vue de la demande répétée | Principaux éléments repérés de façon informelle ; quelques scripts | Modèles de demande documentés pour les principaux éléments ; backlog d'automatisation classé par volume et temps d'intervention | Part d'automatisation et taux d'échec suivis ; approbations repensées sur preuves | Demande, libre-service et automatisation planifiés ensemble dans l'organisation et adaptés en continu |
| Usage pour l'amélioration | Chiffres remontés, non utilisés | Corrections occasionnelles après des plaintes | Revue mensuelle par l'équipe qui fait le travail | Améliorations financées liées aux résultats par élément | Les idées d'amélioration viennent des équipes, des utilisateurs et des fournisseurs, et les résultats alimentent la conception du catalogue |

## Liste de vérification

- [ ] Chaque élément du catalogue dans le périmètre a un responsable, une définition d'une ligne de « livré » et une cible énoncée.
- [ ] Les événements de début et de fin de l'horloge de traitement sont écrits pour chaque élément.
- [ ] L'attente de l'utilisateur est un état distinct avec une courte liste de motifs, et le temps suspendu est rapporté.
- [ ] Les rapports montrent la médiane et le 95e percentile par élément, avec le nombre de demandes derrière chacun.
- [ ] Les plus vieilles demandes ouvertes sont visibles de l'équipe chaque semaine.
- [ ] Les temps d'intervention, d'approbation et d'attente ont été échantillonnés pour les principaux éléments.
- [ ] Le volume par élément est revu chaque mois et comparé aux données d'adoption ou de satisfaction.
- [ ] La part d'automatisation est pondérée par le volume et appariée aux taux d'échec et de repli.
- [ ] Chaque métrique de vitesse est appariée avec le taux de réouverture et un signal de satisfaction des utilisateurs.
- [ ] Les demandes, les incidents et les changements sont classés à la réception, et la classification est échantillonnée.
- [ ] Aucun rapport ne classe les agents individuels.

## Prompts d'IA

**Rédigez un modèle de demande et une définition d'horloge pour un élément du catalogue.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Découpez le temps écoulé en temps d'intervention et temps d'attente.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Classez les candidats à l'automatisation.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Passez en revue un tableau de bord de traitement pour y chercher des risques de détournement.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver la définition, le vecteur de détournement et le garde-fou d'une métrique de demande, ainsi que les sujets voisins qui lui sont appariés.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent intacts le modèle, les horloges et les appariements de garde-fous.

## Idées clés

- Mesurez le traitement par élément du catalogue, de la soumission de l'utilisateur à sa confirmation, et rapportez la médiane et un percentile élevé.
- L'essentiel du temps écoulé est de l'attente : séparez donc les temps d'intervention, d'approbation et d'attente de l'utilisateur avant de décider quoi corriger.
- Lisez le volume par élément comme un message des utilisateurs, et automatisez d'abord les éléments fréquents et stables.
- Appariez chaque chiffre de vitesse avec le taux de réouverture et un signal de satisfaction, et rapportez ouvertement le temps suspendu.
- Décrivez la file et le processus, jamais la personne.

## Références et lectures complémentaires

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
