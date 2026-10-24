# Travail en cours et théorie des files d'attente

**Une équipe entièrement occupée est une équipe dont le travail attend : mesurez donc la quantité de travail en cours, le temps qu'il passe en file et la proximité de la capacité à laquelle l'équipe fonctionne, et servez-vous de l'arithmétique des files pour fixer des limites avant que les retards n'arrivent.**

## Vue d'ensemble et motivation

Toute équipe de service a une file d'attente, qu'elle emploie ou non le mot. Les incidents attendent le triage, les demandes attendent l'approbation, les changements attendent un créneau de revue, et les éléments du backlog attendent que quelqu'un les prenne. L'essentiel du temps écoulé dans ces systèmes se passe à attendre, pas à travailler. Les mesures de ce sujet expliquent pourquoi l'attente grandit, comment la voir tôt et ce qu'une équipe peut faire.

La grandeur centrale est le [travail en cours](https://en.wikipedia.org/wiki/Work_in_process) (WIP), le nombre d'éléments qui ont été commencés et ne sont pas encore terminés. Les équipes agiles qui gèrent le flux rendent le WIP visible sur un tableau et le plafonnent par une limite de WIP. L'exploitation des services sous ITIL compte les incidents, les demandes et les changements ouverts, et appelle l'ensemble une file ou un backlog d'enregistrements. Les deux points de vue décrivent la même chose : des éléments à l'intérieur d'un système qui ne les a pas encore livrés. Ce sujet emploie « travail en cours » pour les deux, et énonce chaque fois la frontière (quels statuts comptent comme « en cours » et lesquels non), car cette frontière décide de tous les chiffres qui suivent.

Les mathématiques viennent de la [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory), l'étude des files d'attente. Son résultat le plus utile pour une équipe de service est la [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law), démontrée par John Little en 1961. Pour un système stable, le nombre moyen d'éléments dans le système est égal au taux moyen d'arrivée multiplié par le temps moyen qu'un élément passe dans le système. En termes de livraison, le WIP moyen est égal au débit moyen multiplié par le temps de cycle moyen. La loi tient quel que soit l'ordre dans lequel les éléments sont servis, ce qui en fait un contrôle de cohérence peu coûteux sur tout ensemble de métriques de flux (voir le sujet 2.1, Mesures de flux, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

Le deuxième résultat est moins confortable. À mesure qu'une ressource partagée approche de la pleine utilisation, le temps d'attente monte de plus en plus vite. Une approximation apparentée, la [formule de Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), montre que le retard dans la file croît avec l'utilisation proportionnellement au rapport de l'utilisation à la fraction de temps mort restante, et croît aussi avec la variabilité des arrivées et des temps de service. Le travail de support et d'exploitation est variable par nature, puisque les incidents arrivent par rafales et que l'effort par élément diffère largement. Une équipe qui prévoit d'être occupée à 100 % a donc prévu de longues attentes, et le premier incident majeur transforme les longues attentes en un arriéré qui prend des semaines à résorber.

Termes employés dans ce sujet :

- Le **taux d'arrivée** est le nombre d'éléments qui entrent dans le système par unité de temps.
- Le **débit** (ou taux de départ) est le nombre d'éléments qui sortent du système, terminés, par unité de temps.
- Le **temps de cycle** est le temps écoulé entre le moment où un élément entre dans la frontière du système et celui où il en sort. Ce sujet emploie la même horloge que dans le sujet 2.2.
- Le **temps de file** est la partie du temps écoulé pendant laquelle un élément attend et personne ne travaille dessus.
- L'**utilisation** est la fraction de la capacité disponible qui est employée. Pour une équipe, la capacité s'exprime en heures de travail ou en nombre d'éléments pouvant être traités en parallèle. L'utilisation est une propriété d'une équipe ou d'un groupe de ressources, jamais d'un individu.
- Une **limite de WIP** est un nombre maximal convenu d'éléments dans une étape ou dans tout le système. Un nouvel élément n'est pas commencé quand la limite est atteinte.
- Un **goulot d'étranglement** est l'étape dont la capacité est la plus faible par rapport à la demande. Il fixe le rythme de toute la chaîne, un point développé par la [théorie des contraintes](https://en.wikipedia.org/wiki/Theory_of_constraints) et son idée de [goulot d'étranglement](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Les visions agile et ITIL se rejoignent ici : ITIL 4 (2019) traite la gestion de la capacité et de la performance, la gestion des incidents et la gestion des demandes de service comme des pratiques qui dépendent de l'adéquation de la capacité à la demande, et les méthodes agiles expriment la même idée en limitant le travail en cours et en terminant avant de commencer. Le [développement logiciel lean](https://en.wikipedia.org/wiki/Lean_software_development) traite le travail inachevé comme un stock avec un coût de portage et un risque.

## Principes clés

- **L'attente domine le temps écoulé.** Dans la plupart des systèmes de service et de livraison, les éléments attendent bien plus longtemps que quiconque ne travaille dessus : réduire l'attente est donc un levier plus grand que travailler plus vite.
- **La loi de Little relie les trois chiffres de flux.** Le WIP moyen, le débit et le temps de cycle ne peuvent pas être fixés indépendamment. Si vous voulez un temps de cycle plus court au même débit, vous devez baisser le WIP.
- **Le retard croît fortement près de la pleine utilisation.** La marge est le prix de la réactivité. Une équipe sans capacité de réserve ne peut pas absorber une rafale ou un élément urgent sans retarder tout le reste.
- **La variabilité amplifie les files.** Des arrivées inégales et des tailles d'éléments inégales allongent les files même quand la charge moyenne paraît acceptable. Réduisez la variabilité là où vous le pouvez et tamponnez-la là où vous ne le pouvez pas.
- **Limitez le WIP pour terminer le travail, pas pour avoir l'air occupé.** Une limite de WIP est un déclencheur de conversation sur le travail bloqué et la capacité, pas une règle de conformité.
- **Mesurez au niveau du système.** Le WIP, la longueur de file et l'utilisation décrivent des équipes et des services, jamais les personnes qui les composent.
- **Rapportez des distributions, pas des moyennes.** Les temps de file ont une longue queue : montrez donc la médiane et un percentile élevé comme le 85e ou le 95e (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Définitions des métriques

Sept mesures couvrent le sujet. Chacune est définie pour une frontière nommée que l'équipe écrit dans son registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Travail en cours | Nombre d'éléments commencés et non terminés à l'intérieur de la frontière convenue | Nombre d'éléments dans les statuts « en cours » à l'instant de l'instantané ; les éléments du backlog ou de la file « prêt » avant le premier statut de travail et les éléments déjà terminés sont exclus | éléments | Historique des statuts du gestionnaire d'anomalies ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service | Décompte du WIP sur le tableau | Instantané quotidien, revu chaque semaine |
| Longueur de file | Nombre d'éléments qui attendent que le travail commence ou qui attendent entre des étapes | Nombre d'éléments dans les statuts d'attente (par exemple « nouveau », « en attente de triage », « en attente de revue ») à l'instant de l'instantané ; les éléments bloqués sont rapportés séparément, non ajoutés | éléments | Historique des statuts du gestionnaire ou de l'ITSM | Gestion des incidents ; maîtrise des changements | Colonne prêt et colonnes de file d'un tableau | Instantané quotidien, revu chaque semaine |
| Temps de file | Temps écoulé qu'un élément passe à attendre avant que le travail commence, par étape | L'horloge démarre quand l'élément entre dans un statut d'attente et s'arrête quand il entre dans le statut actif suivant ; le temps passé dans un statut marqué « bloqué en attente du client » est exclu et rapporté comme son propre chiffre ; rapporter la médiane et le 85e percentile | heures ou jours | Horodatages de transition de statut dans le gestionnaire ou l'outil ITSM | Centre de services ; gestion des incidents ; maîtrise des changements | Temps d'attente dans un flux de valeur ; temps dans les colonnes de file | Hebdomadaire |
| Taux d'arrivée et de départ | Éléments qui entrent dans le système et en sortent par période, et leur différence comme croissance nette de la file | Arrivées = éléments qui entrent dans la frontière dans la période ; départs = éléments qui se terminent dans la période ; croissance nette = arrivées moins départs ; les éléments rouverts ne comptent comme arrivées que si l'équipe le définit ainsi | éléments par semaine | Horodatages de création et de résolution du gestionnaire ou de l'ITSM | Supervision et gestion des événements ; gestion des incidents | Débit et diagramme de flux cumulé | Hebdomadaire |
| Ratio de charge de l'équipe | Part de la capacité de l'équipe que consommerait le travail planifié et attendu | Heures de demande attendue dans la période (arrivées fois effort moyen par élément) / heures de capacité disponible après congés et engagements fixes ; l'équipe indique comment elle estime l'effort ; les individus ne sont jamais rapportés | pourcentage | Plan de capacité, historique d'effort du gestionnaire, tableau de service | Gestion de la capacité et de la performance ; gestion de la main-d'œuvre et des talents | Capacité de l'équipe en travail planifié | Mensuelle, et à chaque événement de planification |
| Taux de dépassement de la limite de WIP | Part des jours où une étape ou le système dépasse sa limite de WIP convenue | Jours avec un WIP au-dessus de la limite / jours ouvrés de la période ; les jours où l'équipe a consigné une exception délibérée avec un motif sont rapportés séparément | pourcentage de jours | Instantanés quotidiens du WIP et journal des exceptions | Amélioration continue ; gestion des incidents | Accord de travail sur la limite de WIP | Hebdomadaire |
| Ratio de cohérence de la loi de Little | Contrôle que les trois chiffres de flux concordent entre eux | WIP moyen sur la période / (départs par jour fois temps de cycle moyen en jours) pour la même frontière et la même période ; un ratio proche de 1 signifie que les définitions sont cohérentes, un ratio loin de 1 signifie qu'une frontière ou une horloge est incohérente | ratio | Mêmes données du gestionnaire que les autres métriques de flux | Mesure et reporting | Contrôle de cohérence des métriques de flux en rétrospective | Mensuelle |

## Recommandations

### Définir d'abord la frontière

**1. Écrivez la frontière du système avant de compter quoi que ce soit.** Indiquez quel statut déclenche « en cours » et lequel l'achève, et quels éléments sont exclus (par exemple la maintenance planifiée, ou les éléments en attente d'un client). Deux équipes qui comptent le WIP différemment produiront des chiffres qui ne peuvent pas être comparés, et une frontière qui bouge en silence brisera le contrôle de la loi de Little. Consignez la frontière dans le registre des métriques et ne la changez qu'avec un motif consigné.

**2. Séparez l'attente du travail dans le modèle de statuts.** Si un seul statut couvre à la fois « en file pour revue » et « en cours de revue », le temps de file est invisible. Donnez à chaque état d'attente son propre nom, comme décrit dans le sujet 1.5, Sources de données et instrumentation, pour que les horodatages de transition révèlent le retard. Le coût d'un statut supplémentaire est faible comparé à la valeur de voir où les éléments stagnent.

### Utiliser la loi de Little comme contrôle de cohérence

**3. Faites le contrôle de la loi de Little chaque mois.** Calculez le WIP moyen, le débit et le temps de cycle moyen pour la même période et la même frontière, et voyez s'ils concordent à peu près. Un grand écart signifie généralement que des éléments entrent dans le système ou en sortent sans être comptés, ou que de vieux éléments sont garés dans un statut non surveillé. Corrigez les données avant d'interpréter une tendance. La loi est un théorème sur des systèmes stables : appliquez-la donc à des périodes pendant lesquelles la file n'a pas grandi ni diminué de façon spectaculaire.

### Surveiller l'utilisation et la croissance de la file

**4. Prévoyez de la marge là où la variabilité est élevée.** Pour le traitement des incidents, le travail d'astreinte et toute file alimentée par une demande aléatoire, planifiez en dessous de la pleine capacité pour qu'une rafale ne devienne pas un arriéré. Les équipes constatent couramment qu'un ratio de charge qui paraît confortable sur le papier est déjà trop élevé une fois les interruptions comptées (voir le sujet 2.9, Travail opérationnel et travail non planifié). Convenez de la plage cible avec les personnes qui font le travail et revoyez-la après tout incident majeur.

**5. Suivez la croissance nette de la file autant que sa taille.** Une file de 40 éléments qui diminue est saine, et une file de 15 qui grossit de 5 éléments par semaine ne l'est pas. Comparez les arrivées et les départs chaque semaine, et tracez la tendance avec un [diagramme de flux cumulé](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), où une bande qui s'élargit pour une étape signale un WIP croissant à cet endroit. Quand les arrivées dépassent les départs pendant plusieurs semaines, la file grossit sans limite et une décision s'impose : ajouter de la capacité, réduire la demande ou changer ce qui est accepté.

**6. Lisez le temps de file par étape pour trouver le goulot d'étranglement.** Décomposez le temps écoulé en périodes d'attente par étape. L'étape avec le temps de file le plus long et le plus d'éléments en attente est un candidat au goulot d'étranglement. Améliorer toute autre étape ne raccourcira pas tout le système : dirigez donc l'effort d'amélioration vers la contrainte, et revérifiez ensuite, car la contrainte se déplace.

### Limiter le WIP de manière efficace

**7. Fixez la première limite de WIP à partir de l'observation, puis ajustez.** Commencez près du WIP moyen actuel, ou légèrement en dessous, et observez ce qui arrive au temps de cycle et aux éléments bloqués. Abaissez la limite pas à pas tant que l'équipe peut encore garder chacun productif à terminer du travail. Il n'existe pas de nombre correct universel, et un chiffre emprunté à une autre équipe ne porte aucune preuve pour la vôtre.

**8. Traitez un dépassement comme une invite, pas comme une violation.** Quand le WIP dépasse la limite, demandez ce qui bloque l'achèvement et qui peut se mobiliser dessus. Un dépassement consigné avec un motif, comme une correction urgente en production, est une information. Si les dépassements deviennent routiniers, la limite est mauvaise ou le système est surchargé, et la réponse est une conversation sur la capacité plutôt qu'une réprimande.

**9. Appliquez les limites à tout le flux de valeur, pas à une seule colonne.** Une limite sur « en cours » seule laisse le travail s'empiler dans les files de revue, de test et d'approbation. Limitez le nombre d'éléments dans le système de bout en bout, et ajoutez des limites d'étape là où une file précise continue de grossir. Les étapes partagées comme une revue consultative des changements ou un environnement de test méritent leur propre limite visible et leur propre temps de file.

### Traiter délibérément le travail urgent et variable

**10. Donnez au travail accéléré une politique.** Sans elle, les éléments urgents dépassent discrètement toutes les limites et l'équipe ne peut plus distinguer la charge planifiée de la charge non planifiée. Définissez ce qui qualifie, combien d'éléments accélérés peuvent être en cours et quel travail est suspendu. Comptez les éléments accélérés et leur effet sur le temps de file, pour que le coût de l'urgence soit visible à ceux qui la demandent (voir le sujet 2.9, Travail opérationnel et travail non planifié).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Travail en cours | Déplacer des éléments vers un statut « garé » ou « en pause » pour rester sous la limite ; scinder les éléments pour qu'ils paraissent plus petits ; commencer du travail hors du tableau | Nombre d'éléments dans les statuts garés et leur âge ; échantillonner le tableau face au travail réel ; rapporter le plus ancien élément en cours |
| Longueur de file | Clore et rouvrir des éléments ; rejeter les nouveaux éléments à l'entrée ; renommer les statuts d'attente pour qu'ils tombent hors du décompte | Taux de réouverture et taux de rejet à côté de la longueur de file ; revue des définitions de statuts à chaque revue de métriques |
| Temps de file | Démarrer l'horloge tard en créant l'enregistrement une fois le travail prêt ; suspendre l'horloge par des statuts bloqués ou d'attente du client ; marquer un élément comme en cours alors qu'il a seulement été ouvert | Distribution du temps passé dans les statuts bloqués et de suspension ; part des éléments créés après avoir été commencés ; attente déclarée par le demandeur dans une courte enquête |
| Taux d'arrivée et de départ | Clore vite les éléments pour augmenter les départs ; scinder une demande en plusieurs pour augmenter les deux décomptes ; compter les doublons comme des arrivées | Mesures de qualité et de réouverture sur les éléments clos (voir le sujet 3.3, Temps de réponse et de résolution des incidents) ; distribution des tailles d'éléments ; contrôle du résultat pour le client |
| Ratio de charge de l'équipe | Sous-estimer l'effort pour montrer de la capacité de réserve, ou surestimer la demande pour justifier des effectifs ; rapporter un ratio pour une période favorable | Comparer l'effort estimé et réel par élément ; montrer le ratio avec sa tendance et la part d'interruptions ; revue par les pairs de la méthode d'estimation |
| Taux de dépassement de la limite de WIP | Relever la limite pour arrêter les dépassements ; cacher les dépassements en déplaçant des éléments hors du tableau ; accorder librement des exceptions | Nombre et motifs des exceptions ; historique des changements de limite avec dates ; percentile du temps de cycle à côté du taux de dépassement |
| Ratio de cohérence de la loi de Little | Ajuster la frontière ou la période jusqu'à ce que le ratio approche 1 ; exclure les éléments de longue durée comme valeurs aberrantes | Fixer la frontière et la période à l'avance ; publier les éléments exclus et leur nombre ; revoir les changements de frontière avec un motif |

Une lecture saine est celle d'une équipe dont le WIP est stable ou en baisse, dont les percentiles du temps de file sont plats ou en amélioration, dont les arrivées et les départs s'équilibrent à peu près, et dont les dépassements s'accompagnent de motifs qui mènent à l'action. Le ratio de la loi de Little tourne autour de 1 parce que les données sont cohérentes, pas parce que quelqu'un l'a réglé.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Limites de WIP serrées | Temps de cycle plus court, découverte plus précoce des problèmes, plus d'achèvements | Du temps mort peut apparaître dans une étape ; demande de la discipline et un peu de polyvalence ; peut frustrer les parties prenantes qui veulent que le travail démarre |
| Limites de WIP lâches ou absentes | Tout le monde a l'air occupé et les demandes sont acceptées vite | Longues files, livraison lente, blocages cachés, fort changement de contexte |
| Capacité de réserve planifiée | Absorbe les rafales et le travail urgent ; garde les temps de réponse courts | Ressemble à du gaspillage sur un rapport d'utilisation ; demande que la direction accepte une moindre efficacité apparente |
| Utilisation planifiée élevée | Paraît efficace et peu coûteuse à l'heure | L'attente croît fortement à l'approche de la capacité ; fragile face à toute perturbation |
| Utiliser la loi de Little pour planifier | Simple, générale et rapide à appliquer | Valable seulement pour des systèmes stables et pour des moyennes ; ne dit rien d'un élément isolé |

Limitez le WIP et gardez de la marge là où la variabilité et le coût du retard sont élevés, et acceptez des limites plus lâches là où le travail est régulier et indépendant.

Dans le modèle de manuel le plus simple d'un serveur unique avec des arrivées et des temps de service aléatoires (une file M/M/1), le temps moyen dans le système est le temps de service divisé par un moins l'utilisation : 2 fois à 50 %, 5 fois à 80 %, 10 fois à 90 % et 20 fois à 95 %. Les équipes réelles ne sont pas des serveurs uniques : traitez donc ces chiffres comme la forme de la courbe, pas comme une prévision.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui compte comme « en cours » pour nous, et comptons-nous tous de la même façon ?**
Demandez à chacun de nommer le premier et le dernier statut qui font d'un élément une partie du WIP, puis comparez les réponses. Cherchez des statuts comme « en pause » ou « en attente du client » que certains comptent et pas d'autres. Convenez d'une frontière et écrivez-la. L'animateur doit noter comment les réponses changeraient le chiffre du WIP, car cela montre la sensibilité de la métrique à la définition.

**2. Où nos éléments attendent-ils le plus longtemps, et qui détient cette file ?**
Dessinez le flux de l'arrivée à terminé et marquez les points d'attente. À partir d'un mois récent de données, estimez la médiane et le 85e percentile de l'attente à chaque point. Discutez de la file que personne ne détient, comme une étape d'approbation ou un environnement de test partagé. Convenez d'une file à examiner en détail et d'une personne qui apportera les données la prochaine fois.

**3. À partir de quand sommes-nous trop occupés pour le type de travail que nous faisons ?**
Comparez la charge planifiée à la part du temps réellement passée en interruptions et en éléments urgents. Demandez ce qui est arrivé à la file la dernière fois que la demande a bondi. Discutez de l'idée qu'une équipe sans capacité de réserve ne peut pas réagir vite. L'animateur doit orienter vers une plage cible pour le ratio de charge, pas un chiffre unique, et un plan pour le cas où la plage est dépassée.

**4. Notre file grossit-elle, diminue-t-elle ou est-elle stable, et comment le savons-nous ?**
Regardez les arrivées et les départs des huit dernières semaines. Un simple graphique suffit. Demandez si quelqu'un aurait remarqué une lente hausse avant qu'elle ne devienne un problème, et quel signal déclencherait l'action. Convenez de ce qu'une équipe doit faire quand les départs sont inférieurs aux arrivées trois semaines de suite.

**5. Que se passerait-il si nous baissions notre limite de WIP d'une unité ?**
Demandez aux gens de prédire quels éléments attendraient, lesquels se termineraient plus tôt et ce qu'ils feraient quand ils ne peuvent plus commencer quelque chose de nouveau. Faites émerger des craintes comme celle d'être vu comme inactif.

**6. Nos chiffres concordent-ils entre eux ?**
Prenez un mois de données et calculez le WIP moyen, le débit et le temps de cycle moyen. Vérifiez si le WIP est à peu près le débit fois le temps de cycle. Sinon, cherchez la cause, comme des éléments terminés mais non clos, ou des éléments clos sans avoir été commencés. L'animateur doit traiter un écart comme un cadeau : il pointe un problème de données ou de définition qui fausserait sinon toutes les autres métriques de flux.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison ressentent les effets d'un WIP excessif sous forme de changement de contexte, de retour tardif et de travail inachevé qui se dégrade. Elles gagnent le plus avec des limites de WIP visibles, de petits éléments et l'habitude de terminer avant de commencer. Une équipe doit regarder ses propres temps de file entre les étapes, comme l'attente d'une revue, car ces retards sont généralement plus grands que le temps passé à coder (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

### Équipes de service et d'exploitation

Les équipes d'exploitation font face à une demande aléatoire : les effets de file sont donc forts. Un centre de services, une rotation d'astreinte et un comité de revue des changements se comportent chacun comme une file avec des arrivées variables. Ces équipes ont besoin d'une marge explicite, de règles de priorité claires et d'une politique pour le travail accéléré, afin que les éléments urgents ne déplacent pas discrètement tout le reste (voir le sujet 3.1, Métriques du centre de services, et le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Mesurez le temps de file à chaque transmission, et surveillez le travail qui rebondit entre groupes (voir le sujet 9.3, Métriques de collaboration et de transmission).

### Direction et gouvernance

Les dirigeants influencent les files par la demande qu'ils acceptent et l'utilisation qu'ils récompensent. Ils doivent demander les percentiles du temps de file et la croissance nette de la file autant que l'utilisation, et s'attendre à ce qu'un service sain fonctionne en dessous de la pleine capacité. Une demande d'ajouter plus de projets à une équipe déjà à sa limite est une décision d'allonger le temps de cycle de tous, et la gouvernance doit rendre ce compromis explicite. Financez la capacité de la contrainte plutôt que des campagnes d'efficacité générale (voir le sujet 5.4, Métriques de capacité et de performance).

### Clients et utilisateurs

Les clients éprouvent la file comme une attente de réponse, et se soucient rarement de savoir à quel point l'équipe est occupée. Ils ont besoin d'attentes honnêtes fondées sur la distribution des attentes passées, d'un moyen de voir l'état de leur demande et d'une voie d'escalade pour les besoins urgents. Limiter le WIP peut signifier une acceptation plus lente des nouvelles demandes et un achèvement plus rapide des demandes acceptées, et ce choix doit leur être expliqué (voir le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional a un centre de services, une équipe d'infrastructure et une équipe d'applications. Tous les chiffres de cet exemple sont illustratifs.

L'équipe d'applications traite les demandes de service et les petits changements des systèmes cliniques. Sur un trimestre, son tableau de bord montre un temps de cycle médian passé de 6 jours ouvrés à 11, alors que l'équipe dit être « à bout ». Le ratio de charge que l'équipe calcule pour le trimestre est de 98 %. Le 85e percentile du temps de file pour l'étape « en attente de validation clinique » est de 9 jours ouvrés, et le WIP moyen sur le tableau est de 44 éléments pour un débit de 4 éléments par jour ouvré. En appliquant la loi de Little, 44 divisé par 4 donne un temps de cycle moyen implicite de 11 jours ouvrés, ce qui concorde avec le chiffre mesuré : les données sont donc cohérentes et l'équipe s'y fie.

Le responsable du service suggère d'abord d'embaucher un prestataire. Le chef d'équipe désigne la ventilation par étape : sur les 11 jours, la file avant la validation clinique et la file avant le déploiement représentent l'essentiel du temps écoulé, et le travail actif en est une petite part. Les arrivées du trimestre ont dépassé les départs d'environ 2 éléments par semaine : la file a donc grossi régulièrement. L'équipe a aussi accepté toutes les demandes urgentes, et les éléments accélérés n'ont aucune politique.

L'équipe décide de quatre changements, consignés dans le journal des décisions. Elle fixe une limite de WIP à l'échelle du système de 30 éléments, avec une limite d'étape de 8 sur la file de validation. Elle planifie un ratio de charge d'environ 80 % pour que les interruptions attendues y tiennent. Elle écrit une politique d'accélération qui autorise au plus deux éléments urgents en cours. Elle demande au groupe de validation clinique de tenir un court créneau de revue quotidien plutôt qu'une réunion hebdomadaire. Après huit semaines, l'équipe rapporte un temps de cycle médian de 7 jours ouvrés, un 85e percentile du temps de file à la validation de 3 jours ouvrés et un taux de dépassement de 10 % des jours, avec les motifs consignés.

L'équipe repère un risque de détournement au deuxième mois. Le taux de dépassement paraît excellent, mais un échantillon du tableau montre plusieurs éléments dans un nouveau statut appelé « en suspens », qui se trouve hors du décompte du WIP, et le garde-fou du nombre de statuts garés était en hausse. L'équipe supprime le statut, remet les éléments dans le décompte et exige que tout nouveau statut soit ajouté au registre avec une définition. Le taux de dépassement monte à 18 % pendant quelques semaines, ce que l'équipe accepte comme le chiffre honnête, puis il baisse à mesure que les éléments bloqués sont résolus.

## Agilité, IA, automatisation et analytique

### Agilité

Limiter le travail en cours soutient un rythme soutenable et la livraison continue : moins de choses en cours signifie que chacune se termine plus tôt et que le retour arrive plus tôt. Une habitude pratique est de convenir d'une limite avec l'équipe et les parties prenantes et de revoir les dépassements lors de la conversation d'amélioration régulière. La précaution est qu'une limite appliquée comme une règle, sans discussion, sera détournée en scindant ou en cachant du travail.

### IA

L'assistance de l'IA facilite le démarrage de plus de travail en parallèle, puisqu'un brouillon coûte peu. Cela peut augmenter le travail en cours et la longueur de file pour les humains qui doivent relire et décider. Appariez toute hausse du travail commencé avec le temps de file à la revue, et avec le ratio de charge de l'équipe qui relit. La précaution est que davantage de travail commencé par l'IA peut être abandonné : comptez donc les brouillons écartés autant que les terminés.

### Automatisation

Lisez automatiquement la longueur de file et les taux d'arrivée depuis le système de référence, et fixez des alertes sur des tendances comme un ratio de charge en hausse, aussi bien que sur des seuils fixes. L'automatisation qui oriente le travail doit être mesurée sur les mauvaises orientations et sur la file qu'elle crée quand elle échoue. La précaution est qu'une règle d'affectation automatique peut concentrer discrètement le travail sur quelques personnes ou sur une seule équipe.

### Analytique

Utilisez la loi de Little comme contrôle de cohérence entre le travail en cours, le débit et le temps de cycle, et traitez un grand écart comme un problème de données ou de définition. La décision qu'elle éclaire est où fixer les limites et la capacité. La précaution est que la loi suppose un système stable : ne l'appliquez donc pas sur une période marquée par un grand changement des arrivées.

## Éclairage sectoriel

**Startup.** La demande est inégale et la tentation est de tout commencer. Un simple tableau avec une limite de WIP visible et un contrôle hebdomadaire du plus ancien élément en cours suffit. Gardez de la marge pour les problèmes de production, car une seule panne peut consommer toute l'équipe.

**Petite entreprise.** Une ou deux personnes gèrent souvent le support, les projets et l'administration, et la boîte de réception est la file. Séparez le travail planifié du travail réactif, fixez une limite quotidienne aux tâches commencées et dites aux clients l'attente habituelle pour chaque type de demande.

**Grande entreprise.** De nombreuses équipes partagent des étapes comme l'approbation des changements, la revue de sécurité et les environnements de test, et les files partagées sont souvent les plus longues. Mesurez le temps de file aux étapes partagées et publiez-le, donnez à chaque étape partagée un responsable et évitez de rapporter l'utilisation comme un objectif. Les outils peuvent compter le WIP différemment d'une équipe à l'autre : convenez donc d'une frontière commune et d'un vocabulaire de statuts commun avant d'agréger (voir le sujet 2.4, Métriques de flux de valeur).

**Gouvernement et secteur public.** Les délais légaux, les étapes de passation de marchés et les approbations formelles créent de longues files que les équipes ne contrôlent pas. Séparez le temps qu'une équipe contrôle du temps passé à attendre d'autres organismes, et rapportez les deux. Là où les objectifs de service sont fixés par la loi ou la réglementation, documentez les règles d'horloge et les éventuelles suspensions, et conservez la piste d'audit (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est une livraison plus rapide et plus prévisible sans ajouter de personnel, parce que l'attente domine le temps écoulé et qu'une réduction modeste du WIP ou d'une longue file d'approbation raccourcit le temps de cycle de chaque élément qui suit. Une marge planifiée permet aussi à une équipe d'absorber un incident majeur sans perdre des semaines d'autre travail.

Les coûts sont modestes et consistent surtout en personnes : l'effort de définir les frontières et les statuts, de construire un instantané quotidien du WIP et un rapport de temps de file à partir des données d'outils existantes, et de tenir une courte revue hebdomadaire. Limiter le WIP signifie aussi dire pas tout de suite à certaines demandes, ce qui exige l'accord des parties prenantes, et la capacité inemployée est un coût apparent que les dirigeants doivent comprendre comme une assurance contre le retard.

Le rendement doit être décrit par des schémas que l'organisation peut mesurer elle-même plutôt que par des pourcentages empruntés. Suivez la médiane et le 85e percentile du temps de cycle avant et après les limites, le nombre d'éléments dépassant un âge convenu, le taux de dépassement et ses motifs, et la part du temps consacrée au travail urgent. Le dossier d'affaires est le plus fort quand il relie le temps de file à quelque chose que l'entreprise ressent déjà, comme l'attente de l'accès d'un nouvel arrivant, d'un changement d'un système clinique ou d'une correction pour un client. Le coût total de possession est dominé par le temps des personnes qui relisent les chiffres et agissent, comptez donc ce temps face au retard qu'il supprime. Une équipe doit construire sa propre référence, puisqu'aucune valeur de référence n'est citée ici.

## Anti-modèles et pièges

- **Viser 100 % d'utilisation.** Cela garantit de longues attentes et une livraison fragile. Planifiez un ratio de charge avec de la marge et revoyez-le après les perturbations.
- **Ne limiter que la colonne « en cours ».** Le travail s'empile alors dans des files hors limite. Limitez le système de bout en bout et ajoutez des limites d'étape là où les files grossissent.
- **Traiter la limite de WIP comme une règle à faire respecter.** Les gens cachent du travail pour s'y conformer. Utilisez un dépassement comme invite à demander ce qui est bloqué, et consignez le motif.
- **Garer des éléments dans des statuts sans limite.** Le décompte reste bas pendant que le travail attend sans qu'on le voie. Incluez les statuts garés dans un décompte visible et revoyez leur âge.
- **Mesurer l'utilisation des individus.** Cela récompense le fait d'avoir l'air occupé et invite au classement. Mesurez l'équipe ou le groupe de ressources, et ne publiez jamais un chiffre par personne.
- **Ignorer le côté des arrivées.** Les équipes travaillent sur les départs pendant que la demande continue de croître. Suivez les arrivées, et quand elles dépassent la capacité, prenez une décision explicite sur ce qu'il faut accepter.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et frontières | Chacun compte le WIP à sa manière | Certaines équipes écrivent une frontière pour leur tableau | Une frontière écrite et un vocabulaire de statuts, avec les états d'attente séparés des états de travail | Changements de frontière consignés et contrôle de la loi de Little fait chaque mois | Frontières alignées avec fournisseurs et équipes partenaires, et révisées quand elles cessent d'éclairer des décisions |
| Limites de WIP et marge | Pas de limites ; tout le monde occupé | Limites informelles sur une colonne | Limites à l'échelle du système et par étape, avec un journal des dépassements et une plage de charge déclarée | Limites ajustées à partir des preuves de temps de cycle et de file selon une cadence | Limites et capacité coordonnées entre les équipes qui partagent des étapes |
| Visibilité des files | L'attente n'est vue qu'à travers les plaintes | Longueur de file comptée sur certains tableaux | Percentiles du temps de file par étape montrés à l'équipe qui en est responsable | Croissance nette de la file suivie avec garde-fous et traitée par du travail financé | Temps de file aux étapes partagées et externes rapporté ouvertement aux clients et fournisseurs |
| Usage dans les décisions | Demandes de capacité défendues par l'anecdote | Utilisation citée pour justifier des effectifs | Preuves de files et de temps de cycle utilisées en planification | Compromis demande-capacité décidés avec des données lors des revues de gouvernance | Demande façonnée conjointement avec les clients à l'aide des distributions d'attente |

## Liste de vérification

- [ ] La frontière du système pour le WIP est écrite, avec les statuts de début et de fin et les exclusions.
- [ ] Les états d'attente et les états de travail sont des statuts distincts dans le flux de travail.
- [ ] Un instantané quotidien du WIP et de la file est capturé et conservé.
- [ ] Le temps de file est rapporté comme une médiane et un percentile élevé, par étape.
- [ ] Les arrivées et les départs sont tracés chaque semaine, avec un diagramme de flux cumulé.
- [ ] Une limite de WIP existe pour le système et pour toute étape dont la file grossit.
- [ ] Les dépassements de limite sont consignés avec un motif et revus chaque semaine.
- [ ] Une politique définit le travail accéléré et plafonne le nombre d'éléments en cours.
- [ ] Le ratio de charge de l'équipe est estimé au niveau de l'équipe, jamais par personne, avec la méthode indiquée.
- [ ] Le contrôle de la loi de Little est fait chaque mois et les écarts sont examinés.
- [ ] Les statuts garés et bloqués sont comptés et leur âge est revu.
- [ ] Chaque changement de frontière, de statut ou de limite est consigné avec sa date et son motif.

## Prompts d'IA

**Vérifiez la frontière et les statuts derrière un décompte de WIP.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Faites un contrôle de cohérence de la loi de Little.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Planifiez une première expérience de limite de WIP.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Trouvez le goulot d'étranglement probable à partir des données par étape.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit une mesure de flux ou de capacité que vous ajoutez et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique modifiée nomme ses horloges, sa frontière, son vecteur de détournement et son garde-fou.

## Idées clés

- L'attente domine le temps écoulé : mesurez donc le WIP, la longueur de file et le temps de file par étape, et rapportez des médianes et des percentiles élevés.
- La loi de Little relie le WIP moyen, le débit et le temps de cycle, ce qui en fait un test rapide de la cohérence de vos définitions.
- Le retard monte fortement à mesure que l'utilisation approche de la pleine capacité : prévoyez donc de la marge là où la demande est variable.
- Limitez le WIP pour tout le système, traitez les dépassements comme des invites à la conversation et gardez-vous du réétiquetage du travail pour rester sous la limite.
- Surveillez les arrivées et les départs, car une file qui grossit semaine après semaine appelle une décision sur la capacité ou la demande.
- Mesurez des équipes et des services, jamais des individus, et convenez d'une frontière écrite avant de comparer des chiffres.

## Références et lectures complémentaires

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
