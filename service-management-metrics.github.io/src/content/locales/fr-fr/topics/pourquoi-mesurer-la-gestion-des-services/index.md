# Pourquoi mesurer la gestion des services

**Les équipes qui construisent et exploitent des services ont besoin d'un petit nombre de chiffres honnêtes pour voir si leur travail aide les utilisateurs et s'améliore, et l'agilité comme ITIL apportent chacune une moitié différente de ce tableau.**

## Vue d'ensemble et motivation

Toute équipe qui construit et exploite un service prend des décisions toute la journée : sur quoi travailler ensuite, si une version est sûre, si le centre de services a besoin d'une personne de plus, si une panne était un accident isolé ou un schéma récurrent. Sans mesure, ces décisions reposent sur la mémoire, l'anecdote et la dernière personne qui a parlé. Avec la mauvaise mesure, elles peuvent être pires encore, car un chiffre porte une autorité qu'une opinion n'a pas. Ce sujet explique pourquoi la mesure vaut l'effort, ce qu'apporte chaque tradition et ce que coûte une erreur.

Deux traditions se rencontrent dans ce livre. Le [développement logiciel agile](https://en.wikipedia.org/wiki/Agile_software_development) est un ensemble de valeurs et de pratiques, énoncées dans le Manifeste agile de 2001, qui privilégie le logiciel qui fonctionne, la collaboration étroite avec les clients et la réponse au changement. Ses habitudes de mesure sont empiriques et locales : une équipe inspecte son propre flux, regarde ce qu'elle a livré et s'adapte. [ITIL](https://en.wikipedia.org/wiki/ITIL), à l'origine l'Information Technology Infrastructure Library, est un corpus de recommandations pour la [gestion des services informatiques](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), la pratique qui consiste à concevoir, fournir et améliorer des services informatiques. Ses habitudes de mesure sont orientées service et partagées : des niveaux de service convenus, un catalogue de services et une discipline d'amélioration continue. Dans ITIL 4, l'édition 2019 du cadre, la mesure et le reporting font partie des pratiques générales de gestion, et l'amélioration continue est à la fois une pratique et un principe directeur. Vérifiez les publications actuelles du propriétaire du cadre avant de vous appuyer sur des détails de version, car le cadre continue d'évoluer.

Les deux points de vue diffèrent de manière utile. L'agilité demande : « construisons-nous la bonne chose, et le travail circule-t-il sans heurts ? » ITIL demande : « le service répond-il aux besoins de ceux qui l'utilisent, et est-il fiable, supportable et abordable ? » Une équipe qui ne mesure que le flux peut livrer vite vers un service que les utilisateurs jugent peu fiable. Une équipe qui ne mesure que les niveaux de service peut atteindre chaque objectif tout en livrant le changement si lentement que le service cesse d'être pertinent. Le mouvement [DevOps](https://en.wikipedia.org/wiki/DevOps) est né du constat que construire et exploiter forment un seul système, et que les chiffres qui le décrivent doivent donc être lus ensemble. L'[ingénierie de la fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la discipline que Google a décrite dans ses livres publiés, ajoute un lien explicite entre les objectifs de fiabilité et le rythme du changement.

Trois termes reviennent dans tout le livre. Une **mesure** décrit quelque chose du travail ou du service. Une **métrique** est une mesure dotée d'une formule, d'une unité et d'une source de données définies, de sorte que deux personnes qui la calculent obtiennent la même réponse. Un **garde-fou** est une seconde mesure ou pratique, choisie à l'avance, qui bouge si la première est détournée. L'avertissement qui fonde les garde-fous est la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) : quand une mesure devient un objectif, les gens se mettent à piloter le chiffre plutôt que le travail (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### À quoi sert la mesure

La mesure gagne sa place quand elle remplit l'une de quatre fonctions.

- **Voir.** Rendre visible le travail invisible : la file que personne ne regarde, le schéma d'incidents qui traverse trois équipes, le changement qui attend neuf jours un créneau.
- **Décider.** Éclairer un choix entre deux options, comme automatiser un type de demande ou corriger le défaut qui la provoque.
- **Apprendre.** Mettre une croyance à l'épreuve. Si l'équipe pense qu'une nouvelle pratique de revue réduira les reprises, un chiffre peut dire si c'est le cas.
- **Rendre compte.** Donner aux utilisateurs, aux clients et aux dirigeants un compte rendu honnête de ce que le service fournit, pour que la confiance repose sur des preuves.

Un chiffre qui ne remplit aucune de ces quatre fonctions est une surcharge. Les sujets suivants reprennent ce test pour chaque famille de métriques.

### Le coût de ne rien mesurer

Une équipe qui ne mesure rien n'est pas pour autant sans chiffres. Elle fonctionne avec des chiffres implicites : la plainte la plus bruyante, la panne la plus récente, l'impression du responsable sur l'air occupé des gens. Deux coûts en découlent.

- **Une rétroaction lente.** Des problèmes qu'une tendance aurait montrés tôt arrivent comme des surprises. Une hausse progressive des contacts répétés ressemble à de la malchance jusqu'à ce qu'elle devienne une crise.
- **Aucune base pour s'améliorer.** Une équipe ne peut pas dire si un changement a aidé, donc elle ne peut pas apprendre quels changements répéter.

### Le coût de mesurer les mauvaises choses

Mesurer les mauvaises choses est souvent pire que ne rien mesurer, parce que cela oriente l'effort avec une fausse assurance. Les décomptes de tickets clos, de lignes de code, de points de récit terminés et d'heures saisies sont faciles à collecter et à tracer, et chacun mesure l'activité, pas la valeur pour un utilisateur. Les travaux à l'origine du cadre SPACE (Forsgren et collègues, 2021) soutiennent que la productivité ne peut pas être saisie par une seule dimension, et que les décomptes d'activité utilisés seuls induisent en erreur.

## Principes clés

- **Mesurez pour une décision.** Chaque métrique répond à une question écrite et éclaire un choix nommé. Si personne ne peut dire lequel, retirez-la.
- **Réunissez les deux points de vue.** Lisez le flux de livraison et la santé du service sur la même page, pour que la vitesse ne soit jamais achetée au détriment de la stabilité, ni l'inverse.
- **Mesurez d'abord les résultats, ensuite l'activité.** Le test est que les utilisateurs soient mieux servis. Les décomptes d'activité appuient le récit sans le raconter (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).
- **Décrivez des équipes et des services, jamais des personnes.** Les classements individuels corrompent les données et nuisent à la collaboration.
- **Commencez petit et grandissez.** Une poignée de métriques fiables vaut mieux qu'un mur de métriques faiblement gouvernées.
- **Montrez d'abord à l'équipe.** Les personnes qui font le travail sont le premier public, et le meilleur contrôle de l'exactitude des données.
- **Attendez-vous à changer.** Les définitions, les métriques et les objectifs se révisent quand ils cessent d'éclairer des décisions.

## Définitions des métriques

Les métriques ci-dessous décrivent la santé de la pratique de mesure elle-même, là où le « pourquoi mesurer » devient vérifiable. Une équipe qui peut les montrer mesure pour des raisons. Chaque formule fondée sur le temps ou sur un décompte énonce ses bornes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Part de métriques liées à une décision | Part des métriques rapportées qui ont une question écrite et une décision nommée qu'elles éclairent | métriques avec une question et une décision consignées / métriques rapportées sur le tableau de bord en fin de trimestre | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Actions de rétrospective ; accords de travail | Trimestrielle |
| Couverture des références de départ | Part des services et équipes concernés qui ont une valeur de départ consignée pour chacune des mesures de base convenues | couples service-mesure avec une référence consignée au cours des 12 derniers mois / tous les couples service-mesure concernés ; les services hors catalogue sont exclus | pourcentage | Catalogue de services et registre des métriques | Gestion des niveaux de service ; mesure et reporting | Revue avec les parties prenantes ; tableaux de bord d'équipe | Trimestrielle |
| Effort de mesure | Temps du personnel passé à collecter, nettoyer et rapporter les métriques à la main | heures consacrées à la collecte et au reporting manuels pendant le mois, hors temps passé à agir sur les constats | heures par équipe et par mois | Notes de temps ou courte enquête d'équipe | Mesure et reporting | Budget de temps de rétrospective | Trimestrielle |
| Âge des données à la revue | Ancienneté du point de données le plus récent au moment où le groupe se réunit pour en discuter | horodatage de la réunion de revue moins horodatage du dernier point de données du tableau de bord ; calculé par métrique, rapporté en médiane et en 85e percentile | jours | Journal d'actualisation du tableau de bord | Mesure et reporting | Revue avec les parties prenantes | À chaque revue |
| Suite donnée aux améliorations | Part des actions d'amélioration issues des revues de métriques qui sont terminées ou délibérément closes dans le délai convenu | actions terminées ou closes avec un motif dans les 90 jours suivant leur création / actions créées dans la période, comptées à partir de la date saisie dans le registre d'amélioration | pourcentage | Registre ou backlog d'amélioration continue | Amélioration continue | Actions de rétrospective | Trimestrielle |

L'effort de mesure ne compte volontairement que le travail manuel. Le temps passé à lire les données et à décider quoi faire est le but de l'exercice et en est exclu, pour que l'automatisation de la collecte apparaisse comme un progrès.

## Recommandations

### Commencer par la finalité

**1. Écrivez la raison avant la métrique.** Pour chaque mesure proposée, écrivez une phrase : « Nous mesurons X pour décider Y. » Si la phrase ne peut pas être écrite, la mesure n'est pas prête. Cette seule habitude écarte la plupart des métriques de façade avant qu'elles n'entrent dans un tableau de bord.

**2. Nommez le public et la décision.** Le même chiffre signifie des choses différentes pour une équipe, un responsable de service et un dirigeant. Notez qui le lira et quel choix il appuie. La vue de travail d'une équipe peut porter vingt mesures. Ce qui monte vers la direction doit être un petit ensemble stable (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

### Utiliser les deux traditions

**3. Appariez une mesure de flux à une mesure de service.** Choisissez au moins une mesure de la façon dont le travail avance, comme le délai de livraison ou l'âge des éléments de travail (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux), et au moins une mesure du comportement du service, comme la récurrence des incidents ou un indicateur de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Les montrer ensemble évite l'échec courant où la vitesse et la stabilité sont gérées par des groupes différents qui regardent des graphiques différents.

**4. Traitez la livraison et l'exploitation comme un seul système.** Les travaux résumés dans *Accelerate* (Forsgren, Humble et Kim, 2018) indiquent que la performance de livraison logicielle peut se décrire avec quatre mesures qui équilibrent débit et stabilité. Quel que soit l'ensemble adopté par une équipe, gardez les chiffres liés aux changements et ceux liés aux incidents assez proches pour qu'une hausse de l'un pousse à regarder l'autre (voir le sujet 2.8, Métriques DORA).

### Mesurer honnêtement

**5. Préférez quelques mesures qui se tirent en sens contraire.** Un chiffre unique invite à la suroptimisation : choisissez donc des paires comme vitesse et qualité, volume et résultat, coût et expérience. La paire n'a pas besoin d'être une formule. Elle doit apparaître sur la même page.

**6. Consignez une référence avant de changer quoi que ce soit.** Sans valeur de départ, une affirmation d'amélioration est une histoire. Capturez d'abord quelques semaines de données, en incluant la dispersion des valeurs en plus de la moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service). Les références protègent aussi les équipes : elles montrent qu'un mauvais trimestre a suivi un changement dans la façon de compter le travail plutôt qu'un déclin de la performance.

### Installer l'habitude

**7. Faites la revue à une cadence qui correspond à la décision.** Les mesures de flux conviennent à une conversation hebdomadaire, ou tenue à chaque étape de la livraison logicielle continue. Les mesures de niveau de service et de coût conviennent à une conversation mensuelle ou trimestrielle. Une métrique revue au mauvais rythme crée du bruit ou manque le moment où l'action aurait aidé.

**8. Bouclez la boucle avec du travail d'amélioration.** Une revue qui se termine par « intéressant » a gaspillé ses données. Terminez chaque revue par une ou deux actions nommées, un responsable et une date, et suivez leur achèvement. La pratique d'amélioration continue d'ITIL et la rétrospective agile sont deux noms de la même discipline (voir le sujet 9.5, Métriques d'amélioration continue).

**9. Dites à quoi vous n'emploierez pas les chiffres.** Énoncez clairement que les métriques d'équipe ne serviront pas à classer ni à récompenser des personnes, et que les définitions seront modifiées ouvertement. Les gens coopèrent avec la mesure quand ils ont confiance dans l'usage qui en sera fait (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

Même les métriques sur la mesure peuvent être détournées. Chaque ligne ci-dessous apparie la métrique avec la manière habituelle de la plier et le contrôle qui la révélerait.

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Part de métriques liées à une décision | Écrire après coup une question et une décision plausibles pour chaque métrique afin de gonfler le pourcentage | Échantillonner le journal des décisions : demander ce qui a changé grâce à la métrique, et comparer la date de rédaction de l'entrée à la date d'apparition de la métrique |
| Couverture des références de départ | Consigner une référence une fois pour toutes sans jamais l'actualiser, ou choisir une période calme qui arrange | Exiger une plage de dates et une taille d'échantillon avec chaque référence ; revoir les références après les changements majeurs du service |
| Effort de mesure | Sortir le travail de collecte des comptes en le faisant sans le saisir, ou en le déplaçant vers un fournisseur | Comparer avec une courte enquête sur le temps que les gens disent consacrer au reporting ; inclure l'effort du fournisseur dans la revue |
| Âge des données à la revue | Actualiser le tableau de bord juste avant la réunion alors que les enregistrements sous-jacents sont encore périmés | Rapporter l'âge de l'enregistrement le plus récent dans le système source en plus de l'heure d'actualisation |
| Suite donnée aux améliorations | Clore des actions avec le motif « n'est plus pertinent » pour atteindre le pourcentage, ou découper les actions en morceaux triviaux | Revoir chaque trimestre les motifs donnés pour les actions closes, et suivre si la mesure visée par l'action a bougé |

Une lecture saine est celle d'une pratique visiblement vivante. Les métriques entrent dans le registre et en sortent pour des raisons écrites, les références sont fraîches, les actions issues des revues sont terminées ou honnêtement abandonnées, et l'équipe passe plus de temps à agir sur les données qu'à les collecter. Un score parfait sur chaque ligne est une invitation à échantillonner les enregistrements sous-jacents, pas une raison de se réjouir.

## Compromis : avantages et inconvénients

| Choix | Force | Faiblesse |
| --- | --- | --- |
| Mesurer peu | Coût faible ; faible risque de détournement ; confiance élevée | Angles morts ; décisions fondées sur l'anecdote |
| Mesurer beaucoup | Large couverture ; alerte précoce sur de nombreux fronts | L'attention se dilue ; gouvernance mince ; le coût de collecte croît |
| Vue réunie | Équilibre vitesse et stabilité ; soutient la responsabilité partagée | Exige des définitions convenues entre équipes et un lieu commun où regarder |
| Objectifs sur les métriques | Donne direction et urgence | Invite au détournement ; exige un garde-fou apparié |
| Métriques sans objectifs | Encourage une discussion honnête | Peut dériver vers des rapports sur lesquels personne n'agit |

La réponse pratique est un petit ensemble réuni, avec des objectifs utilisés avec parcimonie pour des conditions bien comprises et réclamées par les utilisateurs, comme un objectif de niveau de service. Tout le reste est une question à discuter. Le but n'est pas de retirer le jugement des décisions, mais de l'alimenter en meilleures preuves.

## Questions à discuter avec votre équipe

**1. Quelle décision avons-nous prise le trimestre dernier qu'un chiffre a réellement changée ?**
Demandez au groupe de se rappeler des décisions précises, puis de déterminer lesquelles, le cas échéant, dépendaient de données. Si la liste est courte, c'est une information utile : cela signifie qu'une bonne part du reporting actuel ne justifie pas son existence. L'animateur doit noter les métriques qui ont bien changé des décisions, car ce sont des candidates à la protection. Demandez ensuite quelles décisions ont été prises à l'instinct et si un chiffre aurait pu aider.

**2. Lesquels de nos chiffres actuels décrivent l'activité, et lesquels décrivent la valeur pour les utilisateurs ?**
Mettez le tableau de bord actuel à l'écran et marquez chaque métrique comme activité (tickets clos, constructions lancées, points terminés) ou résultat (utilisateurs en mesure de travailler, problèmes qui ne reviennent pas). Ne débattez pas longtemps des cas limites. L'enjeu est de voir l'équilibre. Là où il n'y a que de l'activité, demandez quel résultat l'activité est censée produire et comment l'équipe le saurait.

**3. Où se trouvent aujourd'hui les chiffres de livraison et d'exploitation, et les mêmes personnes regardent-elles les deux ?**
Retracez où chaque famille de mesures est stockée et qui la revoit. Les équipes sont souvent surprises de découvrir que les données de changements sont revues par un groupe et celles d'incidents par un autre, sans réunion commune. Demandez quel schéma pourrait échapper parce que les deux ne sont jamais vus ensemble. Convenez d'un lieu ou d'une réunion où elles se rencontrent.

**4. Que ne mesurons-nous pas et regretterions-nous de ne pas savoir ?**
Invitez à exprimer des inquiétudes plutôt que des métriques : « J'ai peur que nous ne remarquions pas si... » Partez des réponses pour arriver à des mesures candidates, puis aux données les moins coûteuses qui les montreraient. Gardez la liste courte.

**5. Que devrions-nous croire de nos chiffres avant de les montrer à la direction ?**
Discutez de ce qui rend les données fiables : définitions stables, contrôles d'exactitude par échantillonnage et accord sur les exclusions. Dressez la liste des doutes de l'équipe, même petits, comme un statut employé de façon incohérente. Décidez quels doutes doivent être levés avant un partage plus large et lesquels peuvent être signalés avec le chiffre.

**6. Si nous ne pouvions garder que trois métriques pour le trimestre prochain, lesquelles seraient-elles et pourquoi ?**
La contrainte force à hiérarchiser. Demandez à chacun d'en écrire trois, puis comparez. Cherchez l'accord sur les résultats et le désaccord sur les mesures d'activité. Demandez quel garde-fou chacune des trois exige.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison profitent surtout d'une rétroaction rapide et locale : combien de temps le travail attend, où il fait la queue, à quelle fréquence les changements causent des problèmes. Elles doivent garder une vue de travail riche pour elles-mêmes et en publier une petite sélection vers l'extérieur. Elles doivent résister à l'envie de mesurer le volume de production comme indicateur indirect de la valeur, et apparier dès le départ les mesures de vitesse avec des mesures de qualité (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes d'exploitation vivent déjà avec des chiffres : volumes, temps de réponse et de résolution, disponibilité. L'occasion est de passer du rapport sur ce qui s'est passé à l'explication du pourquoi, par la récurrence, les causes racines et la part de travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Elles doivent aussi apporter leurs données dans les conversations de planification avec les équipes de livraison, afin que le travail de fiabilité soit défendu avec des preuves plutôt qu'avec des plaintes.

### Direction et gouvernance

Les dirigeants fixent les incitations, souvent par accident, à travers les questions qu'ils posent. Un dirigeant qui demande « pourquoi est-ce rouge ? » apprend aux équipes à cacher le rouge. Un dirigeant qui demande « qu'avez-vous appris, et de quoi avez-vous besoin ? » apprend aux équipes à rapporter honnêtement. Les instances de gouvernance doivent demander le registre, les garde-fous et les actions d'amélioration avec les chiffres, et financer le travail qu'un mauvais chiffre révèle (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Clients et utilisateurs

Les utilisateurs jugent le service à ce qu'il fonctionne et à ce que les problèmes soient corrigés, pas à des mesures internes. Leurs propres mots, dans les enquêtes, les réclamations et les commentaires, ont leur place à côté des chiffres opérationnels pour vérifier que l'équipe mesure ce qui compte (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite un centre de services, une équipe d'exploitation et trois équipes produit qui construisent les services de vitrine, de paiement et d'exécution des commandes. Les chiffres ci-dessous sont illustratifs.

La direction demande pourquoi les clients se plaignent d'un paiement lent alors que les équipes de livraison indiquent qu'elles livrent tous les jours et que l'équipe d'exploitation indique une disponibilité de 99,9 %. Chaque groupe a raison selon ses propres mesures, et personne ne les a regardées ensemble. La responsable de la gestion des services propose une vue réunie sur une page pour le service de paiement, construite à partir de données que les équipes collectent déjà.

La vue montre quatre choses sur les douze dernières semaines. Le délai de livraison des changements a une médiane de 2 jours et un 85e percentile de 9 jours. Le taux d'échec des changements est de 8 %. Les incidents sur le paiement sont au nombre de 14, dont 6 partagent une même cause, une requête de base de données lente introduite par une version récente. Le temps médian de rétablissement est de 40 minutes, mais le temps de chargement des pages au 95e percentile a augmenté insidieusement sur six semaines, un schéma que le chiffre de disponibilité ne montre pas parce que le service est resté techniquement en service.

Le groupe voit ce qui était caché. La disponibilité était mesurée comme « le paiement répond », alors que les utilisateurs vivent « le paiement répond assez vite ». L'équipe produit et l'équipe d'exploitation conviennent d'ajouter un indicateur de latence pour le paiement avec un objectif fixé par le responsable produit après lecture des commentaires de clients, de traiter la cause d'incident répétée comme un enregistrement de problème avec un responsable, et de revoir la vue réunie tous les quinze jours. Elles consignent une décision : suspendre les nouvelles fonctionnalités de paiement pendant une période de livraison logicielle continue pour corriger la requête et ajouter un contrôle de performance à la chaîne de publication.

Un risque de détournement apparaît dans le mois. L'équipe d'exploitation remarque que deux des 14 incidents avaient été ouverts comme « demandes de service » parce que la catégorie des demandes n'a pas d'objectif de résolution. L'équipe comprend qu'un objectif sur les incidents avait incité à classer des cas limites comme des demandes. Elle ajoute à la vue la part recatégorisée et échantillonne dix tickets chaque mois. Après le changement, le temps de chargement des pages au 95e percentile baisse, les incidents répétés diminuent, et l'équipe garde la vue parce qu'elle a changé une décision.

## Agilité, IA, automatisation et analytique

### Agilité

La livraison continue et l'implication continue des parties prenantes vous donnent un approvisionnement régulier de petits changements et une rétroaction régulière, ce dont a précisément besoin une poignée de chiffres honnêtes. Une pratique utile consiste à revoir le même petit ensemble de mesures à chaque conversation d'amélioration régulière et à demander ce que l'équipe changera ensuite. La précaution est d'éviter de traiter la revue comme un rapport d'avancement : un chiffre montré sans décision attachée est une surcharge.

### IA

Le travail assisté par l'IA peut faire monter des décomptes de production comme les tickets rédigés, les changements proposés ou les articles écrits, sans augmenter la valeur reçue par l'utilisateur. Appariez toute mesure de volume du travail assisté par l'IA avec une mesure de qualité, comme la part des brouillons qu'une personne a dû corriger ou le taux de contacts répétés pour les demandes traitées par l'IA. La précaution est qu'un chiffre sur l'usage de l'IA montre l'adoption, pas le bénéfice, alors dites ce qu'il ne peut pas montrer.

### Automatisation

Collectez automatiquement les horodatages et les statuts depuis le système de référence, pour que personne ne saisisse de chiffres dans un rapport. Une pratique à adopter tôt est un petit contrôle automatisé qui signale les horodatages manquants et les séquences impossibles. La précaution est que l'automatisation doit aussi être mesurée : une chaîne ou un robot qui échoue en silence fait paraître saines toutes les valeurs en aval.

### Analytique

Décidez de la question et de la décision avant de construire le graphique, et montrez combien d'éléments se tiennent derrière chaque taux. Utilisez des percentiles et des tendances plutôt que des moyennes uniques, et marquez sur le graphique chaque changement de définition. La précaution est l'incertitude : un petit nombre d'éléments peut déplacer un pourcentage très loin, évitez donc d'agir sur un seul mois de données. Pour ITIL 5 en particulier, voir le sujet 1.8, Mesure d'ITIL 5 et résultats de valeur.

## Éclairage sectoriel

**Startup.** Les petites équipes ont peu de processus et beaucoup de confiance, ce qui aide. Le risque est d'importer un grand tableau de bord d'entreprise avant d'en avoir besoin. Commencez avec deux ou trois mesures que les fondateurs liront chaque semaine, comme le délai de livraison des changements, un indicateur simple de fiabilité et la rétroaction directe des utilisateurs, et écrivez leurs définitions.

**Petite entreprise.** La personne qui s'occupe de l'informatique rend souvent compte au propriétaire, et une seule plainte de client peut peser plus que n'importe quel graphique. Gardez l'ensemble petit, utilisez les données que vos outils produisent déjà et privilégiez les conversations avec les utilisateurs. Traitez les rapports fournis par les éditeurs avec un peu de prudence, car les éditeurs ont leurs propres incitations.

**Grande entreprise.** L'échelle multiplie la demande de chiffres comparables et la pression pour les détourner. Utilisez un petit ensemble standard avec des définitions écrites, séparez les vues de travail des équipes des agrégats, et évitez de comparer des équipes qui exploitent des services de natures très différentes. Un registre des métriques, des définitions partagées et une cadence de revue deviennent essentiels.

**Gouvernement et secteur public.** Les niveaux de service contractuels, les exigences d'audit et les obligations de rapport public peuvent rendre certaines mesures non négociables. Traitez-les comme des données d'entrée de conception : respectez-les, montrez un garde-fou à côté et énoncez les définitions utilisées. La responsabilité publique augmente le coût de cacher les mauvaises nouvelles : construisez donc des canaux internes sûrs pour un reporting franc (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation de la mesure est de meilleures décisions à moindre coût. La mesure appuie la priorisation, montre où se trouve le gaspillage, donne une alerte précoce du déclin d'un service et fournit des preuves pour les demandes d'investissement.

Le coût comporte plusieurs parties. Il y a l'outillage, souvent déjà détenu : le système de tickets, le gestionnaire d'anomalies, le contrôle de version et la supervision. Il y a le temps du personnel pour définir les métriques, construire les vues et tenir un registre. Il y a le coût récurrent des réunions de revue, qui est le plus élevé et le plus rentable. Le coût total de possession (TCO) d'une pratique de mesure comprend aussi le coût d'agir sur les constats, car un enseignement sans budget pour la correction a peu de rendement.

Le rendement est difficile à exprimer par un chiffre universel, et ce livre n'en invente pas. Une manière utile de bâtir le dossier est de mesurer vos propres références avant et après un changement : temps consacré au reporting manuel, contacts répétés, décisions annulées parce que les données étaient fausses, et surprises découvertes tard. Le schéma à attendre est moins de surprises, des discussions plus courtes et un meilleur accord entre les chiffres opérationnels et l'expérience des utilisateurs. Une simple comparaison de [retour sur investissement](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) entre l'effort dépensé et l'effort économisé est un point de départ raisonnable, et le sujet 7.7, Retour sur investissement et dossier d'affaires, en traite la méthode.

## Anti-modèles et pièges

- **Le tableau de bord de tout.** Des dizaines de graphiques, aucun responsable, aucune décision. Choisissez-en quelques-uns, nommez la décision que chacun éclaire et retirez le reste.
- **La mesure à sens unique.** La vitesse sans la stabilité, ou la stabilité sans la pertinence. Appariez une mesure de flux avec une mesure de service.
- **Mesurer les personnes.** Les classements individuels corrompent les données et découragent l'entraide. Rapportez au niveau des équipes et des services.
- **Des objectifs avant les références.** Un objectif sans valeur de départ est une supposition. Consignez d'abord une référence et fixez les objectifs après au moins un cycle de revue.
- **Des rapports sans actions.** Une revue qui ne produit aucun changement apprend aux gens à l'ignorer. Terminez chaque revue par une action nommée, un responsable et une date.
- **Des changements de définition silencieux.** Les courbes de tendance deviennent dénuées de sens. Consignez chaque changement avec son motif et marquez-le sur le graphique.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Finalité et sélection | Métriques choisies parce que l'outil les propose | Certaines métriques ont une finalité énoncée | Chaque métrique rapportée a une question et une décision écrites | Ensemble de métriques revu au regard des décisions et retiré quand il n'est plus utilisé | Métriques coconçues avec les utilisateurs et les fournisseurs autour de résultats partagés |
| Vue réunie agile et ITIL | Données de livraison et de service tenues séparément | Quelques équipes consultent les deux ensemble | Une vue commune du flux et de la santé du service par service | Vue réunie suivie dans le temps et reliée au travail d'amélioration | Vues inter-équipes et fournisseurs reliées aux résultats pour les utilisateurs |
| Références et effort | Pas de références ; collecte manuelle | Références pour certains services ; collecte mixte | Références consignées pour les mesures de base ; collecte surtout automatique | Références actualisées après les changements ; effort suivi et réduit | Références et définitions ajustées en continu à mesure que les services changent |
| Usage pour l'amélioration | Chiffres notés puis oubliés | Actions occasionnelles après les mauvaises semaines | Chaque revue se termine par des actions nommées | Suite donnée aux actions mesurée et financée | L'amélioration vient de tous et est visible entre équipes |

## Liste de vérification

- [ ] Chaque métrique rapportée a une question écrite et une décision nommée qu'elle éclaire.
- [ ] Le public de chaque vue est nommé, et les vues d'équipe sont séparées des vues de direction.
- [ ] Au moins une mesure de flux et une mesure de service figurent sur la même page.
- [ ] Une référence avec plage de dates et taille d'échantillon existe pour chaque mesure de base.
- [ ] Chaque mesure de temps indique où l'horloge démarre et s'arrête.
- [ ] Chaque métrique a un garde-fou affiché à côté.
- [ ] L'effort de collecte manuelle est connu, et la plus grosse tâche manuelle a été examinée en vue d'une automatisation.
- [ ] Les équipes voient leurs propres données avant la direction.
- [ ] Aucun classement individuel, aucune rémunération ni aucune sanction n'est liée à une métrique.
- [ ] Chaque revue se termine par au moins une action d'amélioration nommée, avec un responsable et une date.
- [ ] Au moins une métrique a été retirée ou redéfinie au cours de l'année écoulée.

## Prompts d'IA

**Rédigez l'énoncé de finalité de chaque métrique.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Réunissez les vues de livraison et de service.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Planifiez une référence de départ.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Préparez une revue qui débouche sur l'action.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique que vous envisagez et son garde-fou associé.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique nouveau ou révisé conserve l'énoncé de finalité, le vecteur de détournement et le garde-fou.

## Idées clés

- Mesurez pour voir, décider, apprendre et rendre compte ; un chiffre qui ne fait rien de cela est une surcharge.
- L'agilité apporte une rétroaction rapide et locale sur le flux ; ITIL apporte des vues partagées, au niveau du service, de la fiabilité et de la valeur. Lisez-les ensemble.
- Ne rien mesurer laisse les décisions à l'anecdote, et mesurer les mauvaises choses oriente l'effort avec une fausse assurance.
- Commencez avec quelques métriques, chacune avec une finalité écrite, une référence et un garde-fou.
- Décrivez des équipes et des services, jamais des personnes, et laissez l'équipe voir ses données d'abord.
- Bouclez la boucle : une revue qui ne produit aucune action gaspille les données.

## Références et lectures complémentaires

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
