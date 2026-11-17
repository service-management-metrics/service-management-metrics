# Métriques du backlog et de son affinage

**Un backlog est une file de promesses : mesurez donc combien de promesses attendent, depuis combien de temps elles attendent et quelle part de la prochaine période de travail est vraiment prête, et traitez un tas grandissant de vieux éléments comme une décision que vous n'avez pas encore prise.**

## Vue d'ensemble et motivation

Toute équipe qui construit ou exploite un service tient une liste du travail qu'elle a accepté d'envisager. En pratique agile, cette liste est le [backlog produit](https://en.wikipedia.org/wiki/Product_backlog), un ensemble ordonné d'éléments qui décrit ce qui pourrait être fait pour améliorer le produit. Sur un tableau de flux, l'équivalent est l'ensemble des éléments qui attendent à gauche des colonnes commencées. En gestion des services informatiques (ITSM), telle que décrite par [ITIL](https://en.wikipedia.org/wiki/ITIL), les équivalents sont les incidents, demandes de service, problèmes et changements ouverts qui attendent dans une file. Tout cela, ce sont des backlogs. Ils diffèrent par qui les remplit, par la vitesse à laquelle les éléments doivent en sortir et par ce que signifie, pour un élément, d'attendre.

La plupart des données viennent d'un [système de suivi des anomalies](https://en.wikipedia.org/wiki/Issue_tracking_system) ou d'un outil ITSM. Les métriques du backlog répondent à une question simple : la quantité de travail promis est-elle proportionnée à la capacité de le faire, et le travail promis vaut-il encore la peine d'être fait ? Un backlog qui grossit sans limite ne décrit pas un plan. Il décrit une liste de souhaits, et chaque lecteur, du responsable produit au client qui a soulevé un élément, se fera sa propre idée de la date à laquelle ce sera fait. La réponse honnête est souvent « jamais », et le coût de ne pas le dire se paie en confiance, en temps passé à relire de vieux éléments et en décisions prises sur des informations périmées.

L'affinage est l'activité qui garde un backlog utile. En pratique agile, l'affinage du backlog produit est le travail continu d'ajouter du détail, des estimations et de l'ordre aux éléments pour qu'ils soient prêts à être commencés. Les équipes qui tirent le travail à mesure que la capacité se libère appellent souvent la même activité réapprovisionnement ou toilettage du backlog. En ITSM, elle apparaît comme le triage, la catégorisation et le toilettage d'une liste d'erreurs connues ou de problèmes. Les métriques de ce sujet mesurent la taille et l'âge du backlog, la quantité de travail prêt et la façon dont l'affinage maintient une fenêtre de travail prêt devant l'équipe.

Quatre termes reviennent. Un **élément** est une entrée unique d'un backlog, comme un [récit utilisateur](https://en.wikipedia.org/wiki/User_story), un défaut, une demande de service ou un enregistrement de problème. L'**âge de l'élément** est le temps écoulé depuis son entrée dans le backlog, à distinguer de l'âge de l'élément de travail dans la mesure du flux, où l'horloge démarre quand le travail commence (voir le sujet 2.1, Mesures de flux). **Prêt** signifie qu'un élément répond à la définition de prêt écrite d'une équipe, de sorte que l'équipe pourrait le commencer et compter le terminer dans une fenêtre de niveau de service. L'**affinage** est le travail qui rend les éléments prêts et retire ceux qui ne seront jamais faits.

Les backlogs de produit et de service se comportent différemment, et les mélanger est l'erreur la plus courante dans ce domaine. Un backlog produit est un endroit où les éléments sont délibérément retenus jusqu'à ce que le responsable produit décide de leur ordre. Attendre y est un état normal, et un vieil élément est une raison de se demander s'il compte encore. Un backlog de service composé d'incidents et de demandes est une file assortie d'une promesse : le client attend une réponse dans un délai. Attendre y est un coût pour le client dès la première minute. Un backlog produit doit être élagué ; un backlog de service doit être drainé. Mettez les deux sur un même graphique, et le graphique trompera.

La vision agile traite le backlog comme un artefact vivant détenu par un responsable produit, gardé assez court pour être compris et ordonné par la valeur. La vision ITIL traite les enregistrements ouverts comme du travail en cours au regard d'un niveau de service convenu, détenu par une pratique. Les deux visions partagent un fait de la théorie des files d'attente : une file qui reçoit des éléments plus vite qu'elle ne les libère grossira, et le temps d'attente d'un élément croît avec la file (voir le sujet 2.3, Travail en cours et théorie des files d'attente). La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie la taille de la file, le rythme auquel les éléments sortent et le temps moyen qu'un élément passe dans le système, et c'est la raison pour laquelle la taille et l'âge du backlog sont deux vues d'une même chose.

Une dernière distinction garde le sujet honnête. Un backlog n'est pas une mesure de productivité ni de l'occupation d'une équipe. Un grand backlog peut signifier un produit populaire, une liste mal élaguée ou une équipe sous-dotée, et le chiffre seul ne peut pas dire lequel.

## Principes clés

- **Mesurez l'âge autant que la taille.** La taille dit combien attendent ; l'âge dit depuis combien de temps, et les plus vieux éléments montrent où l'on évite des décisions.
- **Gardez séparés les backlogs de produit et de service.** Une idée retenue et un client qui attend sont deux choses différentes, et chacune demande sa propre lecture.
- **Visez du travail prêt, pas une longue liste.** Quelques semaines de travail prêt et bien ordonné valent plus que mille éléments que personne n'a regardés.
- **L'élagage est une fonction.** Retirer un élément que vous ne ferez jamais est un travail honnête, et un taux d'abandon qui n'est jamais au-dessus de zéro est un avertissement.
- **Utilisez des distributions.** Rapportez la médiane et le 85e percentile de l'âge des éléments et montrez le plus vieil élément, puisque les moyennes cachent la queue.
- **Décrivez l'équipe et le système.** Les métriques du backlog montrent comment le travail parvient à une équipe et comment il est traité, jamais comment un individu a performé.
- **Reliez chaque chiffre à une décision.** Si un graphique de backlog ne changerait rien à ce que vous faites ensuite, retirez-le.

## Définitions des métriques

Les métriques ci-dessous s'appliquent à un seul backlog à la fois. Choisissez d'abord le backlog (un backlog produit, une file d'incidents, une file de demandes de service, une liste de problèmes) et rapportez chaque métrique par backlog. Les percentiles emploient la méthode de [percentile](https://en.wikipedia.org/wiki/Percentile) énoncée dans le sujet 1.6, Culture statistique pour les métriques de service.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taille du backlog | Nombre d'éléments ouverts dans un backlog nommé à un instant donné | Nombre d'éléments au statut ouvert ou prêt à la date de l'instantané ; exclut les éléments en cours et les éléments clos | éléments | Instantané du gestionnaire d'anomalies ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service ; gestion des problèmes | Backlog produit ; file d'entrée | Hebdomadaire |
| Âge du backlog | Distribution du temps d'attente des éléments ouverts | Pour chaque élément ouvert, date de l'instantané moins date d'entrée dans le backlog ; rapporter la médiane, le 85e percentile et le plus vieil élément | jours | Création et historique des statuts du gestionnaire ou de l'outil ITSM | Gestion des incidents ; gestion des problèmes ; amélioration continue | Santé du backlog ; revue des éléments anciens | Hebdomadaire |
| Profondeur du travail prêt | Avance dont dispose l'équipe en travail prêt | Éléments répondant à la définition de prêt / moyenne des éléments terminés par semaine sur les six dernières périodes | semaines | Indicateur « prêt » du gestionnaire et historique du débit | Analyse métier ; gestion des demandes de service | Définition de prêt ; affinage | Par période de planification |
| Couverture de l'affinage | Part de la fenêtre à court terme qui est prête | Éléments des deux prochaines quinzaines de travail attendu (ou les N premiers par ordre) répondant à la définition de prêt / éléments de cette fenêtre | pourcentage | Ordre du gestionnaire, indicateur « prêt » et travail planifié | Analyse métier ; maîtrise des changements (pour le changement planifié) | Affinage du backlog produit | Par période de planification |
| Ratio entrées-sorties du backlog | Si les éléments arrivent plus vite qu'ils ne partent | Éléments ajoutés dans la période / éléments retirés du backlog par achèvement ou abandon dans la même période ; un ratio supérieur à 1 signifie une croissance | ratio | Événements de création et de résolution du gestionnaire ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service ; gestion de la capacité et de la performance | Taux d'arrivée et de départ | Hebdomadaire |
| Taux d'abandon du backlog | Part des éléments sortants retirés sans livraison | Éléments clos comme « ne sera pas fait », doublon ou obsolète / tous les éléments quittant le backlog dans la période ; exclut les éléments clos comme faits | pourcentage | Champ de résolution du gestionnaire | Amélioration continue ; gestion des problèmes (revue des erreurs connues) | Élagage du backlog ; ordonnancement par le responsable produit | Mensuelle |
| Backlog de service hors cible | Part des éléments de service ouverts plus anciens que leur fenêtre de réponse ou de résolution convenue | Éléments ouverts dont le temps écoulé dépasse la cible de service / tous les éléments ouverts de la file ; l'horloge court depuis l'enregistrement et ne s'arrête que dans les états que la définition écrite autorise | pourcentage | Outil ITSM avec horloge de niveau de service | Gestion des niveaux de service ; gestion des incidents ; gestion des demandes de service | Voie accélérée ; attente de niveau de service | Quotidienne ou hebdomadaire |

Trois horloges demandent d'être énoncées clairement. L'âge du backlog démarre quand l'élément est créé dans le backlog et s'arrête quand il en sort par achèvement ou abandon : un élément rouvert démarre donc un nouvel âge. La profondeur du travail prêt utilise le débit des seuls éléments terminés, jamais la vélocité planifiée, puisque la vélocité planifiée est une prévision. Le backlog de service hors cible utilise l'horloge de niveau de service, qui peut différer de l'âge du backlog à cause des suspensions autorisées (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## Recommandations

### Mettre en place le backlog pour qu'il soit mesurable

**1. Nommez chaque backlog et son responsable.** Chaque backlog dans le périmètre a un responsable, un objectif et une liste de types d'éléments. Un backlog produit appartient à un responsable produit ; une file d'incidents appartient au centre de services ou au groupe de résolution. Sans responsable nommé, personne ne décide quand un vieil élément doit partir.

**2. Séparez les éléments retenus des promesses en file.** Marquez chaque élément comme une idée que l'équipe retient pour l'ordonner ou comme un engagement que quelqu'un attend. Rapportez la taille et l'âge du backlog séparément pour chacun. Une demande de support dans un backlog produit est une promesse en file au mauvais endroit, et elle mérite une horloge de service.

**3. Écrivez la définition de prêt, et gardez-la courte.** Une définition de prêt liste les quelques choses que l'équipe doit savoir avant de commencer : le résultat recherché, une taille approximative, les conditions d'acceptation et toute dépendance. Tenez-la en une poignée de lignes et révisez-la quand elle cesse de prédire un travail fluide. Une longue liste de vérification transforme l'affinage en paperasse et invite à cocher des cases.

**4. Consignez la date d'entrée et le motif de sortie.** L'âge et le taux d'abandon dépendent de deux champs : la date à laquelle un élément est entré et le motif pour lequel il est parti. Rendez les deux obligatoires dans l'outil, et ajoutez une liste contrôlée de motifs de sortie comme fait, doublon, obsolète et ne sera pas fait. Les dates manquantes sont la cause la plus courante d'un âge de backlog inutilisable (voir le sujet 1.5, Sources de données et instrumentation).

### Lire ensemble la taille et l'âge

**5. Rapportez l'âge du backlog comme une distribution.** Montrez la médiane, le 85e percentile et le plus vieil élément, ainsi qu'un histogramme par tranche d'âge, comme moins de 30 jours, 30 à 90, 90 à 180 et plus de 180. Un âge moyen plat peut cacher un tas grandissant d'éléments très anciens, parce que les nouveaux éléments tirent la moyenne vers le bas. La vue du plus vieil élément est la plus difficile à cacher.

**6. Utilisez le ratio entrées-sorties pour voir tôt la croissance.** Un ratio durablement supérieur à 1 signifie que le backlog grossira, quelle que soit sa taille actuelle. Tracez-le comme un chiffre glissant sur quatre semaines pour lisser les congés et les semaines de version. Appariez-le avec le débit pour que l'équipe voie si la croissance vient d'une demande en hausse ou d'une production en baisse (voir le sujet 2.1, Mesures de flux).

**7. Convertissez la taille en temps avec le débit.** Divisez la taille du backlog par la moyenne des éléments terminés par période pour obtenir un nombre approximatif de périodes de travail en attente, une application directe de la loi de Little. Dites clairement qu'il s'agit d'une moyenne et non d'une promesse, et montrez la fourchette avec un débit plus bas et un plus haut tirés de périodes récentes. Un backlog produit de cent éléments qui équivaut à un an de travail est une conversation sur le périmètre, pas un calendrier.

### Garder l'affinage en mouvement

**8. Visez une fenêtre de travail prêt, pas un backlog entièrement prêt.** Affinez assez pour une à trois prochaines semaines de travail et pas plus. Le détail ajouté à un élément qui ne sera pas commencé avant six mois se périme généralement : mesurez donc la profondeur du travail prêt et laissez-la flotter dans une bande cible, comme une à trois semaines de travail, que l'équipe choisit et revoit. Une profondeur bien au-dessus de la bande est du gaspillage ; une profondeur inférieure à une semaine de travail est un risque de planification inactive ou bâclée.

**9. Mesurez la couverture de l'affinage sur les éléments sur le point d'être commencés.** La couverture de l'affinage ne regarde que le haut de l'ordre. Elle répond à la question que la réunion de planification posera : si nous commencions maintenant, les prochains éléments seraient-ils prêts ? Rapportez-la juste avant la planification, quand un ratage peut encore être corrigé, plutôt qu'après.

**10. Faites de l'affinage une activité régulière et brève.** Les conseils agiles, dont le Scrum Guide, décrivent l'affinage comme une activité continue et en laissent la forme à l'équipe. Beaucoup d'équipes trouvent qu'une séance brève et fréquente marche mieux qu'une longue réunion.

### Élaguer et revoir

**11. Élaguez selon un calendrier et rapportez le taux d'abandon.** Revoyez chaque mois les plus vieux éléments et demandez pour chacun : le ferons-nous dans les six prochains mois, et sinon, pourquoi le garder ? Clore un élément avec un motif énoncé n'est pas un échec. Une équipe qui n'abandonne jamais accumule probablement, et une équipe qui abandonne l'essentiel de ce qu'elle reçoit accepte probablement un travail qu'elle aurait dû décliner à la porte.

**12. Traitez les backlogs de service en les drainant, pas en les élaguant.** Pour les files d'incidents et de demandes, la première question est de savoir si les éléments sont dans leur fenêtre de service. Suivez la part hors cible et le plus vieil élément ouvert, et gardez la voie accélérée pour les éléments qui ne peuvent pas attendre. Les listes de problèmes et d'erreurs connues sont à mi-chemin entre les deux mondes : elles sont retenues jusqu'à ce qu'une correction soit financée, revoyez-les donc comme un backlog produit, avec une date de revue énoncée pour chaque entrée (voir le sujet 4.6, Dette technique et erreurs connues).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taille du backlog | Clore des éléments en masse comme obsolètes, scinder des éléments pour paraître occupé, ou cacher du travail dans des listes annexes et des tableurs | Taux d'abandon du backlog avec motifs de sortie ; comparaison périodique de l'outil avec la vraie liste des demandes ; retour des clients sur les éléments abandonnés |
| Âge du backlog | Réinitialiser la date d'entrée en clonant ou en recréant de vieux éléments ; déplacer des éléments entre backlogs ; rouvrir au lieu de relever à nouveau pour changer l'horloge | Audit des éléments clonés et déplacés ; revue du plus vieil élément ; âge mesuré depuis la première création à travers les enregistrements liés |
| Profondeur du travail prêt | Marquer des éléments prêts sans les vérifier ; gonfler la profondeur en rédigeant des éléments détaillés pour du travail de faible valeur | Échantillon d'éléments prêts lus face à la définition ; taux de reprise ou de retour à l'affinage quand le travail démarre |
| Couverture de l'affinage | Cocher l'indicateur « prêt » pour atteindre le chiffre ; rétrécir la fenêtre pour que moins d'éléments comptent | Nombre d'éléments renvoyés après la planification ; réussite des objectifs de livraison et changement de périmètre en cours de période (voir le sujet 2.5, Métriques de prévision et de planification de la livraison) |
| Ratio entrées-sorties du backlog | Clore vite les éléments faciles pour pousser les sorties, ou refuser de nouveaux éléments à la porte pour contenir les entrées | Âge des plus vieux éléments ; taux d'abandon ; part des demandes rejetées sans motif ; besoins non satisfaits signalés par les clients |
| Taux d'abandon du backlog | Abandonner des éléments que les utilisateurs veulent encore, pour réduire la taille ; ou éviter les abandons pour que le chiffre paraisse doux | Revue d'un échantillon d'éléments abandonnés avec le demandeur ; taux de réouverture et de nouvelle demande des éléments abandonnés |
| Backlog de service hors cible | Suspendre l'horloge avec un état « en attente du client », rétrograder la priorité, ou clore et rouvrir pour réinitialiser la fenêtre | Part du temps passé dans les états de suspension ; taux de réouverture (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques) ; satisfaction des utilisateurs sur les tickets clos |

Une lecture saine montre un backlog dont la taille est stable ou baisse lentement, dont les plus vieux éléments sont peu nombreux et ont chacun un responsable et un motif énoncé, et dont la fenêtre à court terme est en grande partie prête. Le ratio entrées-sorties reste près de 1, le taux d'abandon n'est ni nul ni dominant, et la couverture de l'affinage monte sans que le travail planifié devienne plus fragile. Quand les chiffres sont bons mais que les clients rapportent encore que rien n'arrive à leurs demandes, croyez les clients et auditez les données.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Backlog produit petit et élagué avec vigueur | Facile à comprendre et à garder ordonné ; honnête sur la capacité | Risque d'abandonner des idées qui auraient compté plus tard ; les demandeurs peuvent se sentir ignorés |
| Grand backlog conservé | Préserve chaque idée et demande ; historique utile | Coûteux à lire ; les éléments périmés trompent la planification et cachent les vraies priorités |
| Fenêtre prête profonde (beaucoup de semaines affinées) | Planification fluide ; moins de surprises quand le travail démarre | Le détail affiné se périme ; effort dépensé sur du travail qui ne démarrera peut-être jamais |
| Fenêtre prête étroite (environ une semaine) | Peu de détail gaspillé ; reste flexible | La planification peut caler quand quelques éléments ne sont pas prêts ; moins de temps pour repérer les dépendances |
| Définition de prêt stricte | Moins de démarrages vagues ; travail prévisible | Peut devenir une barrière qui ralentit le flux et encourage le remplissage de cases |
| Définition de prêt légère | Rapide ; fait confiance à l'équipe | Plus de découverte pendant le travail ; plus de changements en cours de période |

La réponse pratique est de garder le backlog assez petit pour être lu d'une traite, de maintenir une fenêtre prête d'environ une à trois semaines de travail, et de laisser la définition de prêt assez courte pour que les gens s'en souviennent. Les files de service demandent la posture inverse : être petite n'est pas un but, terminer dans la fenêtre convenue en est un. Choisissez dans chaque ligne la case qui convient à votre contexte et écrivez la raison.

## Questions à discuter avec votre équipe

**1. Si nous cessions d'ajouter des éléments aujourd'hui, combien de temps faudrait-il pour vider le backlog au débit récent, et ce chiffre paraît-il crédible ?**
Commencez par diviser la taille du backlog par le nombre typique d'éléments terminés par période et montrez la fourchette avec les meilleures et les pires périodes récentes. Demandez si l'équipe croit le résultat, et où le temps passerait vraiment. Si le chiffre dépasse un an pour un backlog produit, demandez quels éléments pourraient être retirés sans que personne ne le remarque.

**2. Quels sont les cinq plus vieux éléments, et qui a décidé qu'ils devaient encore être là ?**
Lisez à voix haute les cinq plus vieux éléments avec leurs dates d'entrée. Pour chacun, demandez un responsable nommé et une raison pour laquelle il reste : attente d'une dépendance, report délibéré ou négligence. Convenez d'une action pour chacun : le planifier, l'abandonner, ou écrire pourquoi il reste et quand le revoir.

**3. Que signifie « prêt » ici, et nos récentes surprises viennent-elles d'éléments qui ne l'étaient pas ?**
Demandez à chacun d'écrire la définition de prêt avec ses mots, puis comparez. Les différences sont le premier constat. Regardez en arrière les éléments qui ont causé des questions ou des reprises en cours de période et demandez ce qui les aurait rendus prêts. L'animateur doit résister à l'ajout d'un point de liste pour chaque surprise et choisir plutôt les un ou deux qui auraient évité le plus de peine.

**4. Lesquels de nos backlogs contiennent des idées, et lesquels des promesses faites à quelqu'un ?**
Listez chaque backlog et classez ses éléments dans les deux sortes. Les demandes de support, les incidents et les éléments clients engagés sont des promesses et ont besoin d'une horloge de service ; les idées et les améliorations sont retenues pour être ordonnées. Discutez des endroits où les deux sont mêlés et de ce que cela fait au graphique d'âge. Le résultat peut être aussi simple qu'une étiquette et un filtre qui permettent de rapporter chacun à part.

**5. Quand avons-nous retiré des éléments à dessein pour la dernière fois, et comment les demandeurs ont-ils réagi ?**
L'élagage paraît souvent risqué : regardez donc les preuves. Vérifiez le taux d'abandon et échantillonnez quelques éléments abandonnés. Demandez si le demandeur a été informé, et si quelqu'un a réclamé un élément. L'animateur doit aider le groupe à convenir d'un message simple pour les demandeurs (« nous ne prévoyons pas de le faire ; voici pourquoi ; relancez la demande si les circonstances changent ») pour que l'élagage devienne routinier et respectueux.

**6. Si nous voulions que nos graphiques de backlog paraissent meilleurs sans aider personne, que ferions-nous ?**
Menez sur chaque métrique de backlog la revue de détournement du sujet 1.2. Les réponses probables incluent clore de vieux éléments en masse, cloner des éléments pour réinitialiser l'âge, marquer des éléments prêts trop tôt et rétrécir la fenêtre que la couverture compte. Pour chaque réponse, vérifiez si le garde-fou du tableau ci-dessus l'attraperait. Consignez celles qui passeraient entre les mailles et choisissez un nouveau contrôle à essayer le trimestre prochain.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison utilisent les métriques du backlog pour garder la planification sereine. La profondeur du travail prêt et la couverture de l'affinage disent à l'équipe si la prochaine séance de planification sera fluide, et l'âge du backlog montre quelles promesses pourrissent en silence. Une bonne habitude est de revoir l'âge, le ratio entrées-sorties et la profondeur prête pendant quelques minutes à chaque séance d'affinage, puis d'agir sur une seule chose. Les équipes doivent publier vers l'extérieur un petit ensemble stable et garder les tranches d'âge détaillées pour leur usage propre (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent des files munies d'horloges. Leur lecture centrale est la part des éléments ouverts hors cible avec le plus vieil élément ouvert, ventilées par priorité et par état de suspension. Les listes de problèmes et d'erreurs connues demandent une date de revue sur chaque entrée pour que les éléments retenus ne deviennent pas permanents. Les équipes doivent aussi surveiller le ratio entrées-sorties de la file d'incidents, puisqu'un ratio supérieur à 1 pendant plusieurs semaines est un signe précoce de sous-effectif ou de cause récurrente (voir le sujet 3.2, Volume et priorité des incidents).

### Direction et gouvernance

Les dirigeants voient un backlog comme une déclaration d'intention. Un très grand backlog leur dit que l'organisation promet plus qu'elle ne peut livrer, et un backlog qui fond vite peut signifier de l'élagage ou une demande réduite. Demandez quelle décision le chiffre éclaire. Financez du temps pour l'affinage et l'élagage, évitez les objectifs sur la taille brute du backlog, et demandez la distribution des âges et les motifs d'abandon quand un chiffre de taille est présenté (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

### Clients et utilisateurs

Les clients éprouvent le backlog comme du silence. Un élément soulevé il y a six mois sans réponse en dit plus que n'importe quel graphique. Les utilisateurs apprécient qu'on leur dise la vérité : c'est planifié, ce n'est pas planifié et voici pourquoi, ou cela attend une dépendance. Donnez aux demandeurs un moyen de voir l'état de leurs éléments, et traitez les éléments abandonnés comme une tâche de communication, pas de nettoyage de données (voir le sujet 3.5, Métriques de traitement des demandes de service).

## En pratique : un exemple de gestion des services

Un assureur régional de taille moyenne exploite une application interne de sinistres avec une équipe produit et un centre de services distinct. Les chiffres de cet exemple sont illustratifs.

Le backlog de l'équipe produit contient 412 éléments. L'âge médian est de 138 jours, le 85e percentile de 410 jours, et le plus vieil élément a 29 mois. L'équipe termine environ 14 éléments par quinzaine : le backlog représente donc à peu près 29 quinzaines de travail au débit récent. La couverture de l'affinage sur les deux prochaines quinzaines est de 55 %, et la planification déborde souvent parce que l'équipe découvre du détail manquant. Le centre de services montre un autre tableau : 63 demandes ouvertes, dont 9 % hors cible, et un ratio entrées-sorties proche de 1.

Un responsable produit demande un chiffre plus petit et propose un objectif de moins de 200 éléments à la fin du trimestre. L'équipe ne veut pas en faire un but en soi. Elle mène plutôt une revue. Elle marque les éléments comme idées retenues ou travail promis et constate que 38 des 412 sont des demandes de support dont on avait dit aux clients qu'elles seraient traitées. Elle les déplace vers la file de service avec une horloge de service. Elle lit les 40 plus vieux éléments et constate que 22 sont obsolètes ou en double. Elle les clôt avec des motifs de sortie et prévient les demandeurs. Elle fixe une bande prête d'une à deux quinzaines et consacre une courte séance hebdomadaire à n'affiner que le haut de l'ordre.

En trois quinzaines, la taille du backlog tombe à 301 et le taux d'abandon du mois est de 31 %, élevé à dessein et signalé dans la revue. La couverture de l'affinage monte à 88 %. Un rapide coup d'œil aux données révèle un risque de détournement : la taille du backlog a baissé plus vite que prévu parce que deux membres de l'équipe ont cloné une poignée de vieux éléments en éléments neufs pour éviter la liste des vieux éléments. L'équipe le repère quand le graphique du plus vieil élément ne correspond plus à l'échantillon des abandons. Elle convient de mesurer l'âge depuis la première création à travers les enregistrements liés et de revoir les clones à chaque séance d'élagage. La décision consignée pour la direction est d'abandonner l'objectif de taille et de rapporter plutôt, chaque trimestre, la distribution des âges, la fenêtre prête et les motifs d'abandon.

## Agilité, IA, automatisation et analytique

### Agilité

L'affinage garde la prochaine période de travail comprise et prête, en conversation avec les parties prenantes. Une pratique utile est de revoir ensemble l'âge du backlog et la profondeur du travail prêt, et de supprimer ou trancher les éléments qui ont trop attendu. La précaution est qu'un backlog toiletté seulement pour paraître court, en abandonnant des éléments sans prévenir les demandeurs, abîme la confiance.

### IA

Les outils d'IA peuvent générer et scinder des éléments de backlog en volume, ce qui gonfle la taille du backlog sans ajouter de valeur. Mesurez la profondeur du travail prêt et le taux d'abandon, et appariez la taille du backlog avec la part des éléments créés par l'IA qui arrivent à la livraison. La précaution est qu'un grand backlog généré par l'IA peut ajouter du bruit pour les personnes qui doivent le prioriser.

### Automatisation

Tirez automatiquement la taille et l'âge du backlog depuis le gestionnaire, et signalez les éléments qui franchissent un seuil d'âge pour une décision humaine, pas pour une suppression automatique. Une automatisation qui clôt les éléments périmés doit elle-même être mesurée sur les éléments clos à tort. La précaution est qu'un robot qui clôt les vieux éléments améliore le chiffre d'âge sans répondre au demandeur.

### Analytique

Montrez la distribution des âges et le ratio entrées-sorties dans le temps, avec la liste des plus vieux éléments. La décision éclairée est quoi engager, reporter ou abandonner. La précaution est que la taille seule du backlog dit peu, puisqu'un long backlog de petits éléments bien compris peut être plus sain qu'un court backlog d'éléments vagues.

## Éclairage sectoriel

**Startup.** Le backlog est souvent une liste unique dans la tête du fondateur ou un simple tableau. Suivez seulement l'âge des plus vieux éléments et si le prochain morceau de travail est prêt. Élaguez fort et souvent, puisque la bonne réponse pour une idée vieille de trois mois est souvent de l'oublier.

**Petite entreprise.** Le travail de produit et de service partage généralement une équipe : le backlog mêle donc idées retenues et promesses aux clients. Séparez-les tôt avec une étiquette. Une liste unique lue chaque semaine en une courte réunion vaut mieux que des métriques élaborées. Surveillez d'abord l'âge des éléments tournés vers les clients, car une demande oubliée peut coûter une relation.

**Grande entreprise.** De nombreuses équipes et de nombreuses files multiplient les façons de mal lire un backlog. Définissez les métriques une fois, avec les horloges et les motifs de sortie, et évitez de consolider la taille des backlogs produit en un chiffre de portefeuille unique. Comparez une équipe à son propre historique, jamais à une autre équipe qui fait un travail différent (voir le sujet 2.4, Métriques de flux de valeur). Les listes de problèmes et d'erreurs connues méritent leur propre cadence de revue.

**Gouvernement et secteur public.** Les engagements envers les citoyens, les délais de réponse légaux et les pistes d'audit façonnent les files de service. Traitez les horloges légales comme des entrées fixes et rapportez la part hors cible avec les définitions utilisées. Les backlogs produit peuvent être contraints par les cycles de financement et la passation de marchés, la fenêtre prête devra donc peut-être être plus longue que dans une équipe commerciale. Gardez les motifs d'abandon visibles, puisque la responsabilité publique rend risqué l'abandon silencieux.

## Dossier d'affaires : motivations, ROI et TCO

Le coût de ces métriques est modeste. La plupart des données se trouvent déjà dans le gestionnaire d'anomalies ou l'outil ITSM. Les coûts sont une date d'entrée et un motif de sortie obligatoires, une courte séance d'élagage chaque mois, quelques minutes en affinage pour regarder les graphiques d'âge et de travail prêt, et un peu d'effort pour séparer les backlogs de produit et de service. Un tableur ou les rapports intégrés de l'outil suffisent pour commencer, et aucun nouveau produit n'a besoin d'être acheté.

Le rendement vient du gaspillage évité et de promesses plus claires. Les équipes qui gardent une fenêtre prête passent moins de temps de planification à redécouvrir ce qu'un élément signifie, et celles qui élaguent cessent de relire des éléments qui ne seront jamais faits. Les clients obtiennent plus tôt des réponses honnêtes, ce qui réduit les contacts répétés et les escalades. Décrivez le bénéfice par des schémas que l'équipe peut vérifier elle-même : des séances de planification plus courtes, moins d'éléments renvoyés à l'affinage une fois le travail commencé, moins de relances sur de vieilles demandes et moins de surprises quand la direction demande ce qu'il y a dans le pipeline. Ce sujet n'offre aucun pourcentage, puisqu'aucun ne peut être donné sans source. Mesurez votre propre référence pendant un trimestre et comparez.

## Anti-modèles et pièges

- **Traiter la taille du backlog comme un score de productivité ou de performance.** La taille dépend de la demande, du périmètre et des habitudes d'élagage. Rapportez la taille avec l'âge et les motifs d'abandon, et ne comparez jamais des équipes là-dessus.
- **Mélanger idées retenues et promesses aux clients dans une seule liste.** Le graphique d'âge se lit alors comme de la négligence et l'horloge de service manque. Séparez-les avec une étiquette et rapportez chacun à part.
- **Tout affiner.** Les éléments détaillés qui ne démarreront pas avant des mois se périment. Gardez une fenêtre prête et affinez juste avant le besoin.
- **Ne jamais abandonner.** Une liste qui grossit toujours rend fausse toute affirmation sur le périmètre. Élaguez selon un calendrier et consignez le motif chaque fois.
- **Réinitialiser l'âge en clonant ou en déplaçant des éléments.** Cela flatte le graphique et perd l'historique. Mesurez l'âge depuis la première création à travers les enregistrements liés et auditez les clones.
- **Une définition de prêt utilisée comme barrière.** Si elle bloque du travail que l'équipe pourrait commencer sans danger, elle ralentit le flux. Gardez-la courte et laissez l'équipe la contourner avec un motif énoncé.
- **Des objectifs sur la taille brute.** Un objectif de moins de N éléments invite à la clôture en masse. Visez l'âge des plus vieux éléments ou la part hors cible de service, avec un garde-fou.
- **Utiliser l'âge moyen.** Les nouveaux éléments tirent la moyenne vers le bas pendant que les vieux s'empilent. Montrez la médiane, le 85e percentile et le plus vieil élément.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et données | Dates d'entrée et motifs de sortie manquants ou incohérents | Certaines équipes consignent les dates ; les définitions de prêt diffèrent | Une définition écrite de prêt et d'âge du backlog ; date d'entrée et motif de sortie obligatoires | Qualité des données échantillonnée ; âge mesuré à travers les clones et les déplacements | Définitions partagées entre équipes et fournisseurs et révisées quand elles cessent d'éclairer les décisions |
| Santé du backlog | Le backlog grossit sans qu'on le remarque ; pas d'élagage | Nettoyage occasionnel quand la liste devient ingérable | Élagage planifié ; backlogs de produit et de service séparés | Taille, âge, entrées-sorties et taux d'abandon suivis dans le temps et revus avec un garde-fou | Politique de backlog ajustée entre équipes à la demande et à la capacité ; les clients voient l'état de leurs éléments |
| Affinage | Détail ajouté à la volée à la planification | Séances régulières pour certaines équipes | Affinage bref et régulier avec une fenêtre prête convenue | Couverture et profondeur prête revues et reliées aux résultats de livraison | Affinage partagé entre équipes et dépendances ; la fenêtre s'adapte aux conditions |
| Usage dans les décisions | Chiffres montrés seulement quand quelque chose va mal | Rapportés à la direction sans discussion | L'équipe revoit l'âge et la profondeur prête en affinage | Un travail d'amélioration financé suit la revue | Les preuves du backlog éclairent les décisions de portefeuille et de capacité dans toute l'organisation |

## Liste de vérification

- [ ] Chaque backlog a un responsable nommé et un objectif énoncé.
- [ ] Les idées retenues et les promesses aux clients sont étiquetées et rapportées séparément.
- [ ] Chaque élément a une date d'entrée obligatoire et un motif de sortie tiré d'une liste contrôlée.
- [ ] L'équipe a une courte définition de prêt écrite.
- [ ] L'âge du backlog est rapporté comme médiane, 85e percentile et plus vieil élément.
- [ ] Le ratio entrées-sorties est montré comme un chiffre glissant à côté du débit.
- [ ] Une fenêtre prête est convenue, et la profondeur du travail prêt est rapportée par rapport à elle.
- [ ] La couverture de l'affinage est rapportée avant la planification, non après.
- [ ] Une séance d'élagage mensuelle est au calendrier et le taux d'abandon est rapporté.
- [ ] Les files de service montrent la part hors cible et l'usage des états de suspension.
- [ ] La revue de détournement des métriques de backlog a été menée ce trimestre.

## Prompts d'IA

**Évaluez la santé d'un backlog.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Rédigez une définition de prêt.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Planifiez une séance d'élagage du backlog.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Séparez le travail de produit et de service dans un backlog mixte.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé et les sujets voisins d'une métrique de backlog que vous allez introduire.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de backlog révisé garde cohérents ses vecteurs de détournement, ses garde-fous et ses renvois.

## Idées clés

- Un backlog est une file de promesses : lisez donc ensemble la taille et l'âge, et montrez les plus vieux éléments.
- Gardez les idées retenues et les promesses aux clients dans des vues séparées, puisque attendre signifie des choses différentes dans chacune.
- Visez une courte fenêtre de travail prêt et mesurez la couverture de l'affinage sur les éléments sur le point de démarrer.
- Élaguez selon un calendrier, consignez pourquoi les éléments sortent et traitez un taux d'abandon de zéro comme un avertissement.
- Visez l'âge et les fenêtres de service, pas la taille brute, et appariez chaque métrique de backlog avec un garde-fou.
- Les métriques du backlog décrivent comment le travail parvient à une équipe et comment il est traité, et ne classent jamais les personnes.

## Références et lectures complémentaires

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
