# Métriques des versions et des déploiements

**Déployer du code et le publier auprès des utilisateurs sont deux événements différents, avec des risques différents : mesurez-les donc séparément, comptez chacun selon une règle écrite et lisez ensemble la fréquence, le délai de livraison, la taille des lots et l'hygiène des indicateurs, au lieu de célébrer un décompte isolé.**

## Vue d'ensemble et motivation

Beaucoup d'équipes emploient les mots « déploiement » et « version » (release) comme s'ils signifiaient la même chose. Ce n'est pas le cas, et la différence est l'idée la plus utile de ce sujet. Un **déploiement** est l'acte de mettre une version du logiciel dans un environnement, généralement la production, comme le décrit l'article sur le [déploiement de logiciels](https://en.wikipedia.org/wiki/Software_deployment). Une **version** (ou mise en production auprès des utilisateurs) est le moment où un changement devient disponible pour ses utilisateurs visés, une décision que la [gestion des versions](https://en.wikipedia.org/wiki/Release_management) existe pour gouverner. Quand les deux ont lieu ensemble, un déploiement est une version et un seul chiffre décrit les deux. Quand ils sont séparés, l'équipe peut déployer souvent et discrètement, et publier délibérément.

La séparation compte parce que les deux événements portent des risques différents. Un déploiement porte un risque technique : la nouvelle construction peut ne pas démarrer, casser une dépendance ou demander un retour arrière. Une version porte un risque métier et utilisateur : le changement peut dérouter les clients, ou devoir atterrir à une date convenue. Les équipes qui couplent les deux événements acceptent les deux risques à la fois, ce qui les pousse vers de gros lots de changement publiés rarement. Les équipes qui les séparent prennent le risque technique par petites étapes et le risque utilisateur par étapes contrôlées.

Le principal outil de séparation est l'[indicateur de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) (feature toggle ou feature flag) : un interrupteur de configuration qui active ou désactive un comportement sans nouveau déploiement. Les techniques apparentées comprennent la [version canari](https://en.wikipedia.org/wiki/Canary_release), qui expose d'abord un changement à une petite part du trafic, et le [déploiement bleu-vert](https://en.wikipedia.org/wiki/Blue-green_deployment), qui garde deux environnements de production et bascule le trafic de l'un à l'autre. Toutes permettent de répondre à deux questions distinctes : la nouvelle version tourne-t-elle en sécurité, et qui doit voir le nouveau comportement et quand.

Les termes ci-dessous reviennent dans ce sujet.

- Une **version** (release) est une version ou un ensemble de changements rendus disponibles aux utilisateurs.
- Un **déploiement** est le déplacement d'une version vers un environnement. ITIL 4 nomme une pratique pour cela, la gestion des déploiements.
- Un **lancement masqué** (dark launch) est un déploiement dont le nouveau comportement est désactivé pour les utilisateurs.
- Une **mise en service progressive** est une version qui élargit l'exposition par étapes, par exemple 1 %, 10 % puis tout le monde.
- Un **lot** est l'ensemble des changements qui partent ensemble dans un déploiement ou une version. La taille du lot est le nombre de changements, ou la quantité de changement, qu'il contient.
- Le **délai de livraison d'une version** est le temps écoulé entre un point de départ énoncé et le moment où le changement est disponible pour ses utilisateurs. Votre équipe écrit le point de départ, car plusieurs sont d'usage courant.
- Un **percentile** est une valeur en dessous de laquelle tombe une part donnée des observations. Le 85e percentile du délai de livraison d'une version est le chiffre que 85 % des versions battent.

Les visions agile et ITIL se rencontrent ici. Une équipe agile qui pratique la [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery) veut que chaque changement soit publiable à tout moment, et traite la publication comme une décision métier prise séparément de l'acte technique. Un praticien ITIL voit la gestion des versions, la gestion des déploiements et la maîtrise des changements comme des pratiques qui planifient, programment et contrôlent le passage du changement en usage réel. Les deux visions entrent en conflit quand la gestion des versions est comprise comme un calendrier de grands événements. Elles s'accordent quand la pratique est comprise comme la capacité de publier en sécurité à la demande, avec les contrôles intégrés à la chaîne et aux indicateurs.

Ce sujet ne répète pas les définitions des cinq mesures de performance de livraison du programme de recherche DORA (voir le sujet 2.8, Métriques DORA), ni les mesures d'échec et de reprise après une version (voir le sujet 4.4, Échecs de changement et reprises), ni le volume et l'approbation des changements (voir le sujet 4.3, Métriques de maîtrise des changements). Il ajoute ce que ces sujets laissent ouvert : comment compter les versions distinctement des déploiements, combien de temps un changement terminé attend avant que les utilisateurs l'aient, quelle est la taille des lots et si les indicateurs qui rendent la séparation possible sont tenus en ordre.

Enfin, les décomptes de versions et de déploiements sont des chiffres tentants pour un tableau de bord de direction, et la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique aussitôt (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Un décompte de déploiements monte quand les changements sont scindés en morceaux triviaux. Un décompte de versions monte quand une étiquette est changée. Chaque métrique ci-dessous vient donc avec la façon dont elle se plie et le garde-fou qui attrape la déformation.

## Principes clés

- **Le déploiement et la version sont deux événements.** Mesurez-les séparément partout où l'architecture le permet, et dites clairement là où ils ne sont encore qu'un seul événement.
- **Comptez selon une règle écrite.** Un déploiement compte quand un environnement nommé a reçu une version nommée avec un résultat réussi. Une version compte quand les utilisateurs visés peuvent atteindre le changement. Écrivez la règle une fois et appliquez-la de la même façon chaque fois.
- **Décrivez un service, non une personne.** Les décomptes appartiennent à un service et à son équipe, jamais à un individu.
- **Mesurez l'attente, pas seulement le travail.** Le délai de livraison d'une version contient souvent des jours d'attente d'une fenêtre, d'une approbation ou d'une décision. L'attente est là où l'amélioration se trouve généralement.
- **Les petits lots sont le levier.** La fréquence et la taille sont deux vues d'une même chose. Appariez chaque décompte avec une mesure de la quantité de changement que portait chaque version.
- **Les indicateurs sont un stock avec un coût de portage.** Un indicateur qui vit trop longtemps devient du code mort et une source de défaillance : suivez donc l'âge des indicateurs aussi soigneusement que leur couverture.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fréquence de déploiement | Fréquence à laquelle un service reçoit un déploiement réussi en production | Nombre de déploiements réussis en production du service dans la période / jours de la période ; les déploiements vers les environnements de test ou de préproduction, les déploiements en échec ou annulés et les redéploiements d'une construction inchangée sont exclus ; les déploiements de configuration seule sont comptés dans une série distincte | Déploiements par jour ou par semaine | Journal d'événements de la chaîne de déploiement | Gestion des déploiements | Livraison continue ; livrer un incrément fonctionnel | Hebdomadaire |
| Fréquence de version | Fréquence à laquelle les utilisateurs reçoivent un changement qu'ils peuvent atteindre | Nombre d'événements de version dans la période / jours de la période ; un événement de version est le moment où un changement, ou un groupe de changements, devient accessible à ses utilisateurs visés (un indicateur activé pour tous les utilisateurs, la dernière étape d'une mise en service progressive, ou un déploiement d'un changement sans indicateur) ; un lancement masqué, une mise en service arrêtée à une étape partielle et un changement d'indicateur qui ne touche que les utilisateurs internes sont exclus | Versions par semaine ou par mois | Journal d'audit du service d'indicateurs joint au journal de la chaîne et au calendrier des versions | Gestion des versions | Publier à la fin de chaque incrément ; un incrément potentiellement livrable mis à disposition | Hebdomadaire, revue mensuelle |
| Délai de livraison d'une version | Combien de temps un changement terminé attend avant que les utilisateurs puissent l'atteindre | L'horloge démarre quand le changement est fusionné dans la ligne principale et a passé ses contrôles automatisés (ou, si votre équipe l'écrit ainsi, au premier commit) et s'arrête quand le changement est publié au sens défini plus haut ; rapporter la médiane et le 85e percentile des changements publiés dans la période ; les changements pas encore publiés sont exclus et rapportés comme un âge du travail en attente | Heures ou jours | Gestion de versions jointe à la chaîne et au journal d'audit des indicateurs | Gestion des versions ; gestion des déploiements | Délai entre « terminé » et « livré » ; délai jusqu'au client | Hebdomadaire, revue mensuelle |
| Écart déploiement-version | Combien de temps le code déployé reste masqué avant que les utilisateurs puissent l'atteindre | L'horloge démarre quand le changement est déployé en production et s'arrête quand il est publié ; rapporter la médiane et le 85e percentile ; les changements publiés au moment du déploiement ont un écart de zéro et sont inclus ; les changements déployés puis retirés sans publication sont exclus et comptés à part | Heures ou jours | Journal de la chaîne joint au journal d'audit des indicateurs | Gestion des versions ; gestion des déploiements | Lancement masqué ; découplage du déploiement et de la version | Mensuelle |
| Taille des lots de version | Quantité de changement qui part ensemble dans une version | Médiane et 85e percentile du nombre de changements fusionnés (demandes de fusion ou éléments de travail) par version dans la période ; l'unité de changement est écrite ; chaque changement est compté une fois, dans la version qui l'a rendu accessible | Changements par version | Gestion de versions et gestionnaire d'anomalies joints à l'événement de version | Gestion des versions ; maîtrise des changements | Petits lots ; tranches verticales de travail | Par version, revue mensuelle |
| Couverture par indicateurs de fonctionnalité | Part des changements visibles des utilisateurs publiés derrière un indicateur | Changements visibles des utilisateurs publiés dans la période qui avaient un indicateur au moment de la publication / tous les changements visibles des utilisateurs publiés dans la période ; les changements d'infrastructure et les corrections de défauts qui ne peuvent pas être mis derrière un indicateur sont exclus, et la règle de « visible des utilisateurs » est écrite | Pourcentage | Service d'indicateurs joint au gestionnaire d'anomalies et au journal des versions | Gestion des versions ; maîtrise des changements | Livraison progressive ; développement piloté par l'expérimentation | Mensuelle |
| Nombre d'indicateurs périmés | Combien d'indicateurs ont survécu à leur raison d'être | Nombre d'indicateurs de version encore présents dans le code ou la configuration plus d'un nombre énoncé de jours après que le changement qu'ils protègent a atteint tous les utilisateurs ; les indicateurs d'exploitation permanents (coupe-circuits, indicateurs de droits) sont étiquetés et exclus ; la limite d'âge est écrite par type d'indicateur | Indicateurs, et âge médian des indicateurs de version en jours | Inventaire du service d'indicateurs joint à la recherche dans le code | Gestion des versions ; gestion des connaissances | Nettoyage de dette technique ; critère de terminé qui inclut le retrait d'un indicateur | Mensuelle |

## Recommandations

### Écrire ce qui compte comme un déploiement et comme une version

**Définissez les deux événements avant de compter l'un ou l'autre.** Un déploiement compte quand une version nommée a atteint un environnement nommé et que la chaîne a rapporté un succès. Une version compte quand les utilisateurs visés peuvent atteindre le changement, ce qui pour un changement derrière un indicateur est le moment où l'indicateur est activé pour eux et non le moment où le code est arrivé. Énoncez les exclusions dans la même phrase : environnements de test, retours arrière, redéploiements d'une construction inchangée et exposition purement interne.

### Rapporter les deux séries côte à côte

**Montrez la fréquence de déploiement et la fréquence de version sur un même graphique.** Là où les courbes coïncident, le service couple encore les deux événements. Là où les déploiements devancent nettement les versions, l'équipe a commencé à les découpler, et la distance entre les courbes est un signe de la capacité. Un chiffre combiné unique cache cela, et permet à une équipe de revendiquer une fréquence élevée que les utilisateurs ne voient jamais.

### Mesurer le délai de livraison d'une version d'un début énoncé jusqu'à l'utilisateur

**Choisissez une fois le début de l'horloge et gardez-le.** Démarrer au premier commit montre tout le voyage, et démarrer à la fusion dans la ligne principale isole la chaîne de version et ses approbations. L'un ou l'autre est acceptable s'il est énoncé sur le graphique et jamais changé en silence. Terminez l'horloge à la version, non au déploiement, sinon la métrique cesse de mesurer ce que l'utilisateur a attendu.

### Suivre la taille des lots à côté de la fréquence

**Appariez chaque fréquence avec une taille.** Une équipe peut faire monter son décompte de déploiements en découpant un changement en tranches qui ne sont pas utiles indépendamment, et le décompte monte alors que le vrai flux reste le même. La médiane et le 85e percentile de la taille des lots montrent si les tranches sont réelles. Les petits lots sont plus faciles à revoir, à tester et à inverser, et c'est le bénéfice dont la fréquence est un substitut.

### Traiter les étapes de mise en service progressive comme des événements

**Consignez chaque étape d'une mise en service avec un horodatage.** Une mise en service qui passe de 1 % à 10 % puis à tout le monde donne trois horodatages, et chacun est une chance de s'arrêter. Capturez l'étape, la part d'exposition et le résultat du contrôle de santé qui a permis l'étape suivante. Cela permet de séparer une mise en service suspendue pour un vrai signal d'une qui a calé.

### Tenir un inventaire d'indicateurs avec un responsable et une date d'expiration

**Donnez à chaque indicateur de version un responsable, un objectif et une date de retrait planifiée à la création.** Le service d'indicateurs ou un simple registre peut les contenir. Revoyez le registre chaque mois et calculez le nombre d'indicateurs périmés. Un indicateur laissé actif après la mise en service complète est du code mort qui continue de brancher. Traitez le retrait comme une partie de « terminé » pour le changement.

### Étiqueter les indicateurs par type

**Séparez les indicateurs de version temporaires des indicateurs d'exploitation permanents.** Les coupe-circuits et les indicateurs de droits sont permanents par conception, alors que les indicateurs de version doivent être retirés après la mise en service complète. Mélanger les types rend le décompte des indicateurs périmés bruité et invite les équipes à supprimer un interrupteur dont quelqu'un a besoin pendant un incident. Exigez le type à la création de l'indicateur.

### Relier les versions aux enregistrements d'incidents et de changements

**Consignez l'identifiant de version sur l'incident et le changement.** Un événement de version doit être traçable depuis l'outil d'incidents, pour que la cause d'un incident puisse être reliée au changement publié, qu'il ait été déployé la semaine dernière ou activé ce matin. Sans le lien, les mesures d'instabilité attribuent les échecs à la date de déploiement et manquent les échecs causés par un changement d'indicateur. Les changements d'indicateurs en production sont des changements au sens ITIL et doivent être visibles de la maîtrise des changements, même quand ils sont préautorisés comme changements standard (voir le sujet 4.3, Métriques de maîtrise des changements).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Fréquence de déploiement | Scinder un changement en déploiements triviaux ; redéployer des constructions inchangées ; compter les déploiements vers la préproduction ; compter les déploiements de configuration seule avec la série principale | Taille des lots de version et part des déploiements avec un changement visible des utilisateurs ; série de configuration distincte ; taux d'échec des changements à côté |
| Fréquence de version | Réétiqueter des déploiements en versions ; compter comme version un indicateur activé pour le personnel interne ; publier des changements vides ou cosmétiques pour atteindre un objectif ; compter chaque étape d'une mise en service comme une version distincte | Définition écrite de la version ; échantillon trimestriel de versions vérifié face aux changements visibles des utilisateurs ; taille des lots et décomptes de changements tournés vers les clients |
| Délai de livraison d'une version | Démarrer l'horloge plus tard, par exemple à l'approbation plutôt qu'à la fusion ; exclure comme « bloqués » les changements qui ont longtemps attendu ; publier d'abord un changement trivial pour tirer la médiane vers le bas ; terminer l'horloge au déploiement | 85e percentile et âge du plus ancien changement en attente ; début fixe écrit ; revue trimestrielle des 10 % de changements les plus lents |
| Écart déploiement-version | Activer un indicateur pour un utilisateur symbolique pour consigner la version plus tôt ; laisser le code longtemps masqué hors de l'échantillon en disant que ce « n'est pas une version » ; supprimer le code masqué pour éviter un long écart | Part d'exposition à la version (un seuil de ce qui compte comme publié) ; décompte des changements déployés et retirés sans publication ; nombre d'indicateurs périmés |
| Taille des lots de version | Scinder le travail en demandes de fusion artificielles ; fusionner des changements sans rapport en un seul pour réduire le nombre de versions ; ne compter que le gros changement d'un paquet | Taille médiane des changements en lignes ou en fichiers comme mesure de contexte ; revue d'un échantillon de versions pour y chercher un regroupement sans rapport ; fréquence à côté de la taille |
| Couverture par indicateurs de fonctionnalité | Ajouter des indicateurs aux changements triviaux pour relever le taux ; ne mettre derrière un indicateur que les changements sûrs et livrer les risqués sans indicateur ; créer un indicateur qu'on ne peut pas désactiver en pratique | Résultats de tests de désactivation pour un échantillon d'indicateurs ; nombre d'indicateurs périmés ; causes d'incidents qui n'avaient pas d'indicateur |
| Nombre d'indicateurs périmés | Réétiqueter des indicateurs de version comme permanents pour sortir du décompte ; supprimer l'enregistrement de l'indicateur en le laissant dans le code ; prolonger les dates d'expiration sans revue | Recherche périodique dans le code face au registre ; revue de chaque changement de type d'indicateur ; âge du plus ancien indicateur de version |

Une lecture saine montre des déploiements qui devancent les versions pour les services qui utilisent des indicateurs, avec un écart modeste, une taille de lot petite et stable, et un 85e percentile du délai de livraison pas très au-dessus de la médiane. La couverture par indicateurs est élevée pour les changements risqués, et le nombre d'indicateurs périmés est bas ou en baisse. Une lecture qui paraît trop belle, comme une fréquence élevée avec des tailles de lot croissantes ou un nombre d'indicateurs périmés nul avec un nombre d'indicateurs permanents qui enfle, mérite un audit par échantillon avant toute célébration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déployer en continu et publier par indicateur | Petit risque technique par déploiement ; le moment de la version devient un choix métier ; désactivation rapide | Demande de la discipline d'indicateurs et de l'outillage ; ajoute des chemins de code à tester et à retirer |
| Coupler déploiement et version | Simple à expliquer ; un seul événement à compter ; pas de dette d'indicateurs | Chaque version porte à la fois le risque technique et le risque utilisateur, ce qui encourage de gros lots publiés rarement |
| Train de versions programmé | Prévisible pour le support et les régulateurs | Les changements attendent le prochain train ; le décompte reflète le calendrier, non la capacité |
| Mise en service progressive par pourcentage | Limite l'effet d'une mauvaise version ; produit des preuves à chaque étape | Demande une bonne télémétrie et un contrôle de santé ; des versions mélangées peuvent tourner côte à côte un temps |
| Compter à la fois déploiements et versions | Montre le découplage et l'attente | Demande de joindre un journal d'audit d'indicateurs ou des enregistrements de versions à la chaîne |

Un service qui ne peut pas encore découpler le déploiement de la version, par exemple une application mobile distribuée via la revue d'une boutique d'applications, doit mesurer ce qu'il peut : fréquence de version, délai de livraison d'une version et taille des lots, le temps de revue de la boutique étant rapporté comme une attente distincte.

## Questions à discuter avec votre équipe

**1. Employons-nous les mots « déploiement » et « version » pour le même événement, et cela correspond-il à ce qui se passe ?**
Demandez à trois personnes de décrire le dernier changement mis en ligne et notez quand le code est arrivé et quand les utilisateurs ont pu l'utiliser pour la première fois. L'animateur doit aider le groupe à convenir d'une phrase pour chaque terme et à décider lequel des deux événements chaque chiffre de tableau de bord existant mesure.

**2. Quel est le plus long temps qu'un changement terminé a attendu sa version, et pourquoi ?**
Tirez le plus ancien changement fusionné que les utilisateurs ne peuvent toujours pas atteindre. Retracez son chemin de la fusion à maintenant, et écrivez chaque attente rencontrée.

**3. Si notre décompte de déploiements doublait, que vérifierions-nous avant d'y voir une bonne nouvelle ?**
Invitez le groupe à nommer les façons dont le décompte pourrait monter sans qu'il parvienne plus de valeur aux utilisateurs. Regardez la taille des lots, la part des déploiements avec un changement visible des utilisateurs et les chiffres d'échec et de reprise. L'animateur doit noter lesquelles de ces vérifications existent déjà sur le tableau de bord et lesquelles sont à ajouter avant que quiconque fixe un objectif.

**4. Lesquels de nos indicateurs aurions-nous peur de supprimer, et qu'est-ce que cela nous dit ?**
Parcourez le registre des indicateurs et choisissez les trois plus anciens. Demandez qui détient chacun, ce qu'il protège et ce qui se passerait s'il était retiré. La peur de supprimer signifie généralement un test manquant, un responsable manquant ou une trace d'objectif manquante. Convenez d'une date de retrait pour au moins un et du contrôle qui rendrait le retrait sûr.

**5. Qui décide quand un changement est publié, et a-t-il l'information dont il a besoin ?**
Là où la version est un choix métier, la personne qui le fait a besoin de voir l'état de la mise en service, les signaux de santé et la disponibilité du support. Demandez où vivent ces faits aujourd'hui et avec quelle rapidité le décideur peut inverser une version.

**6. Quelle version du dernier trimestre s'est le plus mal passée, et quelle mesure nous aurait alertés ?**
Choisissez une version qui a causé des ennuis et lisez ensemble la chronologie. Demandez si le lot était gros, si l'écart était long, si la mise en service avait des étapes et si un indicateur aurait pu limiter les dégâts. Choisissez une mesure à ajouter ou un seuil à resserrer en conséquence.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison utilisent ces mesures pour voir si leur chaîne et leurs indicateurs leur donnent réellement le contrôle de l'exposition. Les vues les plus utiles sont l'écart, la taille des lots et l'âge du plus ancien changement en attente, car chacune pointe quelque chose que l'équipe peut changer.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de support se soucient de ce qui change en production et de quand. Les événements de version et les changements d'indicateurs doivent leur être visibles, idéalement avec un identifiant de version sur chaque incident. Les mises en service par étapes et la désactivation rapide réduisent le nombre d'incidents qui demandent un rétablissement complet, et les mesures aident les équipes d'exploitation à demander les contrôles qui rendent leur travail plus serein.

### Direction et gouvernance

Les dirigeants doivent demander des tendances et la dispersion pour chaque service, et la réponse à une question simple : combien de temps faut-il à un changement terminé pour atteindre les utilisateurs, et avec quelle sûreté. Un objectif de fréquence de déploiement entre équipes invite à la scission et au réétiquetage : préférez donc des objectifs de résultat comme des distributions de délais de livraison et la suppression d'attentes connues. La gouvernance peut alléger la charge des approbations de version en préautorisant les changements à faible risque derrière un indicateur, tant que la piste d'audit des indicateurs est complète (voir le sujet 4.3, Métriques de maîtrise des changements).

### Clients et utilisateurs

Les clients voient les versions, non les déploiements. Ils se soucient de ce que les corrections arrivent vite, que le nouveau comportement ne les surprenne pas et qu'un mauvais changement puisse être inversé rapidement. Une équipe qui sépare les deux événements peut donner aux clients un accès anticipé à une fonctionnalité, annoncer une date qu'elle peut tenir et annuler une fonctionnalité sans perdre le reste. Appariez ces mesures avec des mesures tournées vers les clients (voir le sujet 5.3, Métriques de disponibilité, et le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne régional exploite un service de recherche de produits détenu par une équipe produit, soutenue par une équipe plateforme et le centre de services. Le service déploie en production par une chaîne et dispose d'un service d'indicateurs introduit il y a six mois. Tous les chiffres ci-dessous sont illustratifs.

Au dernier trimestre, l'équipe a fait 52 déploiements en production, environ quatre par semaine. La fréquence de version, comptée comme les moments où un changement est devenu accessible à tous les utilisateurs visés, était de 11 pour le même trimestre, environ une par semaine. Le délai de livraison médian d'une version, de la fusion à la version, était de 9 jours, avec un 85e percentile de 21 jours. L'écart médian déploiement-version était de 6 jours. La taille médiane des lots de version était de 3 changements et le 85e percentile de 14. La couverture par indicateurs des changements visibles des utilisateurs était de 58 %, et 17 indicateurs de version avaient plus de 30 jours après la mise en service complète.

Le risque de détournement est déjà visible. Certains déploiements étaient de configuration seule, et la chaîne comptait chacun comme un déploiement : le tableau de bord montre donc maintenant une série de configuration distincte, et la revue mensuelle échantillonne 10 déploiements pour y chercher un changement visible des utilisateurs. Un responsable régional voit le décompte de déploiements et demande à l'équipe de le relever pour égaler le chiffre d'une autre équipe. Le chef d'équipe résiste à l'objectif et apporte plutôt à la revue mensuelle l'ensemble des chiffres. La revue constate que l'écart est long parce que les versions attendent un point hebdomadaire de marketing et de support, que quatre des 17 indicateurs périmés protègent des chemins de code que personne n'a testés, et que le 85e percentile de la taille des lots vient de quelques versions qui ont regroupé des changements sans rapport avant un gel des fêtes.

La décision, consignée dans le journal des décisions, a quatre volets. Le support et le marketing participeront à un point plus court, deux fois par semaine, pour que la décision de version n'attende plus le créneau hebdomadaire. Chaque indicateur de version reçoit un responsable et une date de retrait, et les quatre indicateurs périmés non testés sont retirés dans les deux semaines suivantes. Les versions qui regroupent des changements sans rapport exigent un motif énoncé dans l'enregistrement de version. Et l'équipe décline l'objectif commun de déploiement, offrant à la place une vue partagée de la distribution du délai de livraison des versions de chaque service et de son hygiène d'indicateurs. Le responsable des changements accepte de traiter comme changements standard les changements derrière un indicateur qui passent les contrôles de la chaîne, avec une revue au trimestre suivant. Le trimestre suivant (illustratif), le délai de livraison médian d'une version tombe à 5 jours, le nombre d'indicateurs périmés tombe à 6, et le taux d'échec des changements reste stable : l'expérience continue donc.

## Agilité, IA, automatisation et analytique

### Agilité

Séparer le déploiement de la version permet à une équipe de livrer de petits changements en continu et de publier quand les parties prenantes sont prêtes. Revoyez régulièrement l'hygiène des indicateurs. La précaution est que compter les déploiements récompense la scission des changements.

### IA

Le code assisté par l'IA peut faire monter les décomptes de déploiements et les tailles de lots. Appariez la fréquence avec le rétablissement après déploiement en échec et le nombre d'indicateurs périmés, et marquez les changements assistés par l'IA dans les données. La précaution est que plus de déploiements avec plus de reprise n'est pas un progrès.

### Automatisation

Comptez les déploiements et les versions à partir des événements de la chaîne, et automatisez les rappels de nettoyage des indicateurs. Mesurez la chaîne sur son propre taux d'échec. La précaution est que les versions manuelles hors de la chaîne disparaissent des données.

### Analytique

Montrez la fréquence avec le délai de livraison et la taille des lots, et l'écart entre déploiement et version. La décision éclairée est où le chemin vers les utilisateurs est lent. La précaution est que les définitions du déploiement varient d'une équipe à l'autre.

## Éclairage sectoriel

**Startup.** Une startup a souvent un seul service et une bibliothèque d'indicateurs dans le code : le déploiement et la version peuvent donc être séparés à peu de frais. Tenez un simple registre des indicateurs avec dates d'expiration, et attendez d'avoir assez de volume avant de vous fier aux percentiles.

**Petite entreprise.** Une petite entreprise peut exploiter des logiciels packagés ou achetés dont le fournisseur contrôle la version. Les mesures utiles sont le temps entre la version du fournisseur et l'adoption par l'entreprise, et le lot de changements qui arrivent ensemble dans une version majeure. Consignez les dates de version du fournisseur et vos propres dates de déploiement pour que l'attente entre les deux soit visible.

**Grande entreprise.** Une grande entreprise fait face à de nombreux services aux styles de version différents, à un processus de changement central et à des environnements partagés. Le travail principal est de convenir des définitions du déploiement et de la version entre équipes et fournisseurs, et de tenir une consolidation qui respecte les différences. Utilisez la dispersion et les tendances pour la gouvernance et traitez la plateforme d'indicateurs comme un service partagé avec un responsable.

**Gouvernement et secteur public.** Les versions sont souvent liées à des dates fixes, à la législation, aux cycles de passation de marchés ou à des barrières d'assurance : la fréquence de version peut donc être basse pour de bonnes raisons. La fréquence de déploiement et l'écart déploiement-version peuvent quand même montrer quelle part du risque a été prise tôt et quelle part attend la date. Rapportez séparément l'attente des barrières externes et le temps propre de la chaîne de l'équipe.

## Dossier d'affaires : motivations, ROI et TCO

La motivation de ces mesures est de réduire le risque et le retard entre l'achèvement d'un changement et la livraison de sa valeur. De gros lots publiés rarement portent plus de changement par événement : un échec est donc plus difficile à diagnostiquer et plus difficile à inverser. Séparer le déploiement de la version donne à l'équipe un moyen de prendre le risque technique tôt et en petites quantités, et de prendre le risque utilisateur délibérément. Les mesures montrent si la séparation est réelle, et où le changement attend.

Les coûts sont modérés. Recueillir les événements de déploiement et de version demande de joindre le journal de la chaîne et le journal d'audit des indicateurs à la gestion de versions et au gestionnaire d'anomalies, ce qui est une intégration unique suivie d'une maintenance occasionnelle (voir le sujet 1.5, Sources de données et instrumentation). La pratique des indicateurs a elle-même des coûts courants : la plateforme ou la bibliothèque, le registre, le test des deux chemins d'un changement derrière un indicateur et le nettoyage des indicateurs expirés. Le principal coût caché est la dette d'indicateurs, que le nombre d'indicateurs périmés garde visible.

Le rendement suit un schéma que la plupart des équipes peuvent observer dans leurs propres données. Un délai de livraison de version plus court signifie une boucle de retour plus rapide pour savoir si un changement aide les utilisateurs. Des lots plus petits signifient un diagnostic plus facile et un retour arrière plus facile. Un écart déploiement-version plus court signifie moins de temps pendant lequel le travail terminé reste non réalisé. N'inventez pas de chiffre pour la valeur. Servez-vous des exemples propres de l'équipe de changements restés masqués pendant des semaines et de la tendance de ses propres mesures.

## Anti-modèles et pièges

- **Fixer un objectif de fréquence de déploiement pour chaque équipe.** Il invite à la scission et au réétiquetage. Fixez des objectifs de résultat, comme une distribution de délais plus étroite, et laissez la fréquence suivre.
- **Traiter un train de versions comme une preuve de capacité.** Un calendrier fixe donne un décompte régulier et cache l'âge du travail en attente. Suivez l'âge du plus ancien changement fusionné que les utilisateurs ne peuvent pas atteindre.
- **Compter les changements de configuration comme des déploiements dans la série principale.** Cela gonfle le chiffre. Gardez une série distincte et montrez-la à côté de la principale.
- **Ne jamais retirer les indicateurs.** Le code accumule des branches mortes et des combinaisons non testées. Donnez à chaque indicateur de version un responsable et une date de retrait, et traitez le retrait comme une partie de terminé.
- **Changer des indicateurs en production sans trace.** Un changement d'indicateur est un changement du comportement de production. Envoyez-le au journal d'audit et rendez-le visible de la maîtrise des changements.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | « Déploiement » et « version » sont employés indifféremment ; chacun compte différemment | Quelques équipes écrivent leurs propres définitions | Une définition écrite du déploiement et de la version, avec horloges et exclusions, dans le registre des métriques | Changements de définition consignés et marqués sur les graphiques ; échantillons vérifiés chaque trimestre | Définitions révisées conjointement avec les fournisseurs et la gouvernance quand elles cessent d'éclairer les décisions |
| Séparation du déploiement et de la version | Chaque déploiement est une version | Certaines équipes utilisent des indicateurs ou des mises en service par étapes pour les changements risqués | Les indicateurs et les mises en service par étapes sont une option standard, avec les événements de version consignés | Écart, taille des lots et étapes de mise en service suivis dans le temps et revus | Le moment des versions est coordonné entre équipes et fournisseurs pour les services liés |
| Recueil des données | Décomptes assemblés à la main à partir des tickets et de la messagerie | Données de la chaîne pour certains services ; versions consignées à la main | Déploiements, versions et changements d'indicateurs capturés automatiquement pour la plupart des services | Qualité des données (taux de liens, audit d'échantillons) mesurée et suivie dans le temps | Événements partagés entre équipes et fournisseurs par des interfaces convenues |
| Hygiène des indicateurs | Aucun inventaire | Liste informelle dans certaines équipes | Registre avec responsable, type et date d'expiration pour chaque indicateur de version | Nombre d'indicateurs périmés suivi dans le temps ; le retrait fait partie de terminé et est vérifié | Plateforme d'indicateurs gérée comme un service partagé avec rappels d'expiration automatisés |
| Usage des chiffres | Rapportés vers le haut comme un décompte unique | Les équipes regardent occasionnellement leurs propres graphiques | Revus chaque mois par l'équipe responsable à côté des chiffres d'échec et de reprise | Les tendances alimentent une amélioration financée avec un garde-fou | Dispersion et tendances éclairent l'investissement plateforme et la politique de changement dans toute l'organisation |

## Liste de vérification

- [ ] « Déploiement » et « version » sont définis par écrit, avec les événements d'horloge et les exclusions de chacun.
- [ ] Les déploiements en production sont capturés automatiquement depuis la chaîne, les environnements de test étant exclus.
- [ ] Les événements de version sont capturés depuis le journal d'audit des indicateurs, les étapes de mise en service ou les enregistrements de versions.
- [ ] Le délai de livraison d'une version utilise un début d'horloge énoncé et rapporte la médiane et le 85e percentile.
- [ ] L'écart déploiement-version et la taille des lots de version sont rapportés à côté de la fréquence.
- [ ] Les déploiements de configuration seule apparaissent dans une série distincte.
- [ ] Chaque indicateur de version a un responsable, un type et une date d'expiration dans un registre.
- [ ] Les indicateurs périmés sont revus chaque mois et leur retrait fait partie de terminé.
- [ ] Les identifiants de version apparaissent sur les enregistrements d'incidents et de changements.
- [ ] Un échantillon de déploiements et de versions est audité chaque trimestre face aux définitions.
- [ ] Une expérience d'amélioration, liée à la plus longue attente, est en cours avec une date de revue.

## Prompts d'IA

**Rédigez des définitions du déploiement et de la version pour un service.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Vérifiez les risques de détournement d'un ensemble de métriques de version.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Analysez un export de déploiements, de versions et d'indicateurs.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planifiez une expérience de nettoyage d'indicateurs et d'attente de version.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins sur les changements, les versions et les incidents et le garde-fou qui doit se trouver à côté de chaque métrique de version.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version révisée de ce sujet garde cohérents ses horloges, ses vecteurs de détournement et ses renvois.

## Idées clés

- Un déploiement met une version dans un environnement et une version rend un changement accessible aux utilisateurs. Mesurez les deux séparément partout où vous le pouvez.
- Le délai de livraison d'une version doit se terminer à la version, avec un début énoncé, et être rapporté en médiane et en 85e percentile.
- L'écart déploiement-version et la taille des lots montrent si le découplage est réel, et protègent la fréquence contre la scission et le réétiquetage.
- Les indicateurs de fonctionnalité rendent la séparation possible et ont un coût : suivez donc la couverture et les indicateurs périmés avec des responsables et des dates d'expiration.
- Comptez selon des règles écrites, reliez les versions aux incidents et aux changements, et comparez un service à son propre historique plutôt qu'à d'autres équipes.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
