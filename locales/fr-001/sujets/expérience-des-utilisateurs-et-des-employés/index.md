# Expérience des utilisateurs et des employés

**Les gens font leur meilleur travail quand les outils, les appareils et le soutien autour d'eux fonctionnent simplement : mesurez donc la friction que rencontrent vos collègues, traitez les réponses comme une raison de supprimer des obstacles, et ne transformez jamais ces données en surveillance ou en classement de personnes.**

## Vue d'ensemble et motivation

Le cinquième principe du Manifeste agile dit de bâtir les projets autour d'individus motivés, de leur donner l'environnement et le soutien dont ils ont besoin, et de leur faire confiance pour atteindre l'objectif. Pour les personnes qui utilisent l'informatique interne, l'environnement est l'ordinateur portable, la connexion, les outils de collaboration, le processus d'accès et le centre de services. Quand ceux-ci sont lents ou déroutants, des personnes motivées perdent du temps et de la bonne volonté, et elles inventent des contournements. Mesurer cet environnement est donc une manière de soutenir les gens. Ce n'est pas une manière de les surveiller.

L'[expérience employé](https://en.wikipedia.org/wiki/Employee_experience_management) est la somme des interactions d'un employé avec son lieu de travail pendant son passage dans l'organisation. La part que façonne l'informatique est parfois appelée expérience numérique de l'employé, et le [poste de travail numérique](https://en.wikipedia.org/wiki/Digital_workplace) est l'ensemble de la technologie que les gens utilisent pour travailler. Les sujets précédents de cette partie ont couvert les enquêtes de satisfaction (voir le sujet 6.1, Métriques de satisfaction de la clientèle) et les accords de niveau d'expérience (voir le sujet 6.2, Accords de niveau d'expérience). Ce sujet tourne la même attention vers l'intérieur, vers les collègues qui utilisent les services informatiques tous les jours, y compris les ingénieurs et les exploitants qui les construisent et les font tourner.

Les utilisateurs internes diffèrent des clients externes de quatre manières qui comptent pour la mesure.

- **Ils ne peuvent pas partir.** Un employé n'a pas de concurrent vers qui se tourner : le silence n'est donc pas de la satisfaction. Il peut signifier la résignation, ou un contournement.
- **Ils sont identifiables.** Dans une entreprise de quelques centaines de personnes, un petit groupe de réponses d'enquête peut désigner une personne. La conception de la vie privée passe en premier.
- **Ce sont aussi des collègues.** De mauvaises données d'expérience nuisent aux relations et au moral, et de bonnes données peuvent être partagées ouvertement et exploitées ensemble.
- **Ils incluent les équipes de livraison et d'exploitation.** L'outillage que les développeurs et le personnel du centre de services utilisent fait partie de l'expérience, et sa friction atteint les utilisateurs par des corrections plus lentes.

Deux thèmes traversent ce sujet. Le premier est la **friction** : l'effort, le retard et l'interruption évitables qui se dressent entre une personne et son travail. Les interruptions et la charge mentale coûtent plus que leur temps d'horloge ne le laisse croire. L'idée de [charge cognitive](https://en.wikipedia.org/wiki/Cognitive_load), le fardeau pesant sur la mémoire de travail, explique pourquoi un formulaire déroutant ou un redémarrage forcé inattendu coûte plus que les minutes qu'il prend, et l'idée de [flow](https://en.wikipedia.org/wiki/Flow_(psychology)), un état de concentration absorbée, explique pourquoi protéger le temps ininterrompu compte pour le travail intellectuel. Le second thème est l'**éthique** : comment apprendre sur l'expérience sans envahir la vie privée. La technologie de [surveillance des employés](https://en.wikipedia.org/wiki/Employee_monitoring) peut mesurer beaucoup de choses, et la ligne entre soutenir et policer est facile à franchir. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ici sous une forme humaine : un score utilisé pour juger des gens leur apprend à cacher leurs problèmes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurez l'environnement, non la personne.** L'unité d'analyse est un service, un type d'appareil ou un groupe, jamais un individu.
- **Traitez la friction comme l'ennemie.** Le temps perdu, l'interruption et la confusion sont des coûts à supprimer.
- **Demandez, observez et mesurez.** Combinez ce que disent les gens, ce que les systèmes consignent et ce que vous voyez en regardant le travail se faire.
- **Faites de la vie privée une exigence de conception.** Recueillez le moins de données qui répondent à la question, agrégez tôt et supprimez les petits groupes.
- **Incluez tout le monde.** Les besoins d'accessibilité, le personnel à distance et posté et les nouveaux arrivants rencontrent souvent la pire expérience.
- **Protégez la concentration.** Planifiez les changements, les mises à jour et les notifications en fonction du travail des gens.
- **Dites ce que vous recueillez et pourquoi.** La transparence construit la confiance dont dépendent des réponses honnêtes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de préparation du premier jour | Part des nouveaux arrivants dont les appareils, les comptes et les accès sont complets et fonctionnels à leur heure d'arrivée | nouveaux arrivants dont tous les éléments convenus fonctionnent à l'arrivée / nouveaux arrivants de la période | pourcentage | Demandes d'accueil, système d'identité, confirmation du nouvel arrivant | Gestion des demandes de service ; gestion du catalogue des services | Accord de travail de l'équipe pour l'accueil | Mensuelle |
| Délai avant productivité | Temps écoulé entre la date d'arrivée et le moment où un nouvel arrivant a tout ce qu'il faut pour sa première vraie tâche | médiane et 85e percentile des jours entre la date d'arrivée et la confirmation du nouvel arrivant et de son responsable | jours | Suivi d'accueil ; courte question de confirmation | Gestion des demandes de service ; amélioration continue | Temps pour qu'un nouveau membre d'équipe fasse un premier changement | Mensuelle |
| Prévalence des contournements | Part du personnel interrogé qui utilise des outils non approuvés ou des étapes manuelles pour contourner un service officiel | répondants déclarant un contournement pour le service / répondants valides | pourcentage | Sondage flash ; rapports de découverte d'outils non sanctionnés | Gestion des niveaux de service ; amélioration continue | Obstacles soulevés aux points quotidiens de l'équipe | Trimestrielle |
| Minutes de perturbation imposée | Temps pendant lequel les gens sont interrompus par des actions informatiques planifiées comme les redémarrages forcés, les mises à jour et les invites de connexion | total des minutes de perturbation causées par des actions planifiées / utilisateurs actifs du groupe | minutes par personne et par mois | Journaux de gestion des postes, agrégés par groupe | Habilitation des changements ; gestion des versions et des déploiements | Temps de travail sans interruption | Mensuelle |
| Délai de résolution des demandes d'accessibilité | Temps de résolution des demandes liées aux besoins d'accessibilité | médiane et 85e percentile des heures entre la demande et la solution confirmée fonctionnelle | heures | Système de demandes avec une étiquette d'accessibilité | Gestion des demandes de service ; gestion des incidents | Définition de terminé inclusive | Mensuelle |
| Score flash d'un outil | Note d'un outil ou service nommé sur une courte question convenue | note moyenne ou part favorable sur les réponses valides, par outil | points d'échelle ou pourcentage | Sondage flash, outils en rotation | Gestion des niveaux de service ; amélioration continue | Retour des membres de l'équipe sur leurs outils | Trimestrielle |
| Conformité aux garanties de vie privée | Part des rapports d'expérience qui respectent les règles de suppression et d'agrégation | rapports conformes aux règles / rapports publiés | pourcentage | Revue des rapports publiés face aux règles de vie privée | Gestion de la sécurité de l'information ; mesure et rapports | Accord de travail sur l'usage des données | Trimestrielle |

Définissez le groupe et la période de chaque mesure. Le taux de préparation du premier jour ne compte un nouvel arrivant comme prêt que si chaque élément d'une liste convenue fonctionne, et la liste est consignée dans le registre des métriques. Les minutes de perturbation imposée sont calculées à partir de totaux de groupe, et le niveau le plus bas montré est un groupe d'au moins dix personnes. La conformité aux garanties de vie privée s'applique au programme d'expérience lui-même, ce qui en fait un garde-fou sur les six autres.

## Recommandations

### Partir des gens et de leur travail

**1. Parcourez une journée avec des collègues.** Asseyez-vous avec quelques personnes de rôles, de lieux et d'équipes différents et regardez-les travailler. Notez chaque attente, chaque contournement et chaque moment de confusion. Demandez ce qu'elles corrigeraient en premier. L'observation trouve des problèmes que les enquêtes manquent, parce que les gens cessent de remarquer la friction avec laquelle ils ont appris à vivre. Convenez d'avance de ce que vous consignerez et de l'usage que vous en ferez.

**2. Cartographiez les moments qui comptent.** Pour le personnel, les moments à fort impact sont généralement le premier jour, la panne d'un ordinateur portable, un changement d'équipe, une demande d'accès et le départ de l'organisation. Écrivez les étapes de chacun et qui les détient. La carte montre les transmissions entre équipes où se cache le retard, ce qui rejoint les mesures de collaboration d'une partie ultérieure (voir le sujet 9.3, Métriques de collaboration et de transmission).

**3. Incluez les personnes en marge.** Le personnel ayant des besoins d'accessibilité, le personnel posté, à distance et de terrain, et les prestataires sont souvent invisibles dans les moyennes. Segmentez les résultats là où c'est sûr, et examinez à part le groupe le moins bien servi. Traitez l'accessibilité comme une exigence de premier rang. Les normes d'[accessibilité du web](https://en.wikipedia.org/wiki/Web_accessibility) comme les Web Content Accessibility Guidelines donnent une liste concrète pour les outils internes, et les problèmes d'accessibilité sont une question légale et éthique dans de nombreuses juridictions.

### Mesurer avec soin

**4. Combinez trois sortes de preuves.** Utilisez de courtes questions flash sur des outils et des moments nommés, des mesures système comme les minutes de perturbation imposée et l'achèvement de l'accueil, et des conversations. Quand deux sortes divergent, investiguez. Un outil à l'excellente disponibilité et au mauvais score flash dit quelque chose que la disponibilité ne peut pas dire (voir le sujet 5.3, Métriques de disponibilité).

**5. Interrogez sur un outil, non sur « l'informatique ».** « Dans quelle mesure est-il facile de retrouver un document dans le système de fichiers ? » obtient de meilleures réponses que « Comment va l'informatique ? » Faites tourner les outils dans le sondage flash pour que personne ne soit interrogé plus d'une ou deux fois par trimestre, et gardez la formulation stable pour que les tendances signifient quelque chose.

**6. Comptez les minutes que perdent les gens.** Le temps perdu est plus facile à comprendre qu'un score. Estimez-le à partir du système là où vous le pouvez, par exemple les invites de redémarrage et les échecs de connexion, et demandez un chiffre approximatif aux gens là où vous ne le pouvez pas. Présentez-le par personne et par mois pour un groupe, avec la méthode, et évitez de multiplier par un salaire pour produire un chiffre spectaculaire sans énoncer aussi les hypothèses.

**7. Minimisez et agrégez.** Suivez le principe de [minimisation des données](https://en.wikipedia.org/wiki/Data_minimization) : ne recueillez que ce dont vous avez besoin, ne le gardez que le temps nécessaire et agrégez le plus tôt possible. Là où des données pourraient identifier quelqu'un, la [pseudonymisation](https://en.wikipedia.org/wiki/Pseudonymization) réduit le risque. Des règles comme la [k-anonymité](https://en.wikipedia.org/wiki/K-anonymity), qui exige que chaque groupe rapporté contienne au moins k personnes, donnent un moyen simple de supprimer les petites cellules. Énoncez votre k dans le registre.

**8. Tracez une ligne nette contre la surveillance.** N'utilisez pas les données d'expérience, la télémétrie des postes ou le sentiment pour évaluer des individus, détecter qui est « moins engagé » ou alimenter des évaluations de performance. Dites-le par écrit, et laissez des représentants du personnel ou un comité d'entreprise revoir le plan de données là où ils existent. Consultez le droit local et des spécialistes de la vie privée avant de recueillir toute donnée comportementale. Une fois perdue, la confiance rend chaque enquête ultérieure moins honnête.

### Agir sur ce que vous apprenez

**9. Corrigez d'abord la plus grosse friction et dites-le.** Classez les problèmes par temps perdu, nombre de personnes et gravité pour les personnes touchées, et financez les premiers. Dites aux gens ce que vous avez corrigé et ce que vous avez choisi de ne pas corriger, avec les raisons. Une correction visible est le meilleur encouragement à continuer de signaler des problèmes.

**10. Planifiez les perturbations autour du travail.** Beaucoup d'interruptions forcées sont évitables. Planifiez les mises à jour hors des temps de concentration, offrez un report dans des limites et regroupez les redémarrages. Revoyez les minutes de perturbation imposée à côté des objectifs de sécurité pour que le compromis soit explicite, puisque certaines mises à jour doivent se faire vite (voir le sujet 4.3, Métriques d'habilitation des changements).

**11. Traitez les contournements comme un retour de conception.** Quand les gens utilisent un outil non approuvé, demandez ce qu'il fait mieux. La réponse est une exigence que l'outil officiel a manquée. Le [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) comporte de vrais risques pour la sécurité et le coût, et une réponse punitive le pousse dans la clandestinité. Préférez adopter la bonne idée, ou expliquer le risque et offrir une alternative sûre.

**12. Partagez le programme avec les personnes qu'il sert.** Montrez les résultats au personnel, tenez une courte revue avec des représentants et demandez quoi changer le trimestre suivant. Le programme est une forme de collaboration continue entre l'informatique et ses utilisateurs, et l'amélioration continue de l'environnement en est le résultat. Reliez-le aux mesures sur les personnes de la partie suivante (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de préparation du premier jour | Raccourcir la liste convenue ; marquer des éléments comme prêts avant qu'ils fonctionnent ; retarder la date d'arrivée officielle | Liste écrite dans le registre ; confirmation du nouvel arrivant ; délai avant productivité |
| Délai avant productivité | Faire démarrer l'horloge plus tard ; clore trop tôt l'enregistrement d'accueil | Définition de l'horloge dans le registre ; confirmation du responsable et du nouvel arrivant |
| Prévalence des contournements | Décourager les réponses honnêtes en laissant entendre des conséquences ; n'interroger que des groupes satisfaits | Énoncé d'anonymat ; taux de réponse et composition des répondants ; conformité aux garanties de vie privée |
| Minutes de perturbation imposée | Ne compter que certaines sortes d'interruption ; déplacer les perturbations vers le groupe non mesuré | Définir tous les types d'interruption planifiée ; rapporter par groupe, y compris le personnel à distance et posté |
| Délai de résolution des demandes d'accessibilité | Clore les demandes avec une correction partielle ; étiqueter les demandes autrement pour éviter l'horloge | Confirmation du demandeur que la solution fonctionne ; revue des demandes non étiquetées |
| Score flash d'un outil | N'interroger que les utilisateurs contents ; changer la question ; former le personnel à bien répondre | Journal de la stabilité de la formulation ; taux de réponse et composition ; lecture des commentaires |
| Conformité aux garanties de vie privée | Rapporter la conformité sans revue indépendante ; élargir les groupes pour cacher les problèmes | Revue périodique par quelqu'un d'extérieur à l'équipe ; publier les règles (la valeur de k et la suppression) |

Une lecture saine est des nouveaux arrivants qui peuvent travailler dès leur premier jour, un nombre décroissant d'interruptions forcées, des contournements qui mènent à de meilleurs outils officiels, et un personnel qui dit faire confiance au programme parce qu'il a vu ce qu'on fait de ses réponses.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Sondages flash | Voix directe, peu coûteux, faciles à répéter | Fatigue d'enquête ; biais de réponse |
| Télémétrie système | Objective, continue, sans charge d'enquête | Risque pour la vie privée ; montre des événements mais pas des sentiments |
| Observation et entretiens | Trouve la friction cachée ; construit des relations | Chronophage ; petits échantillons |
| Données fines | Diagnostic précis | Identifie les personnes ; érode la confiance |
| Données agrégées avec suppression | Sûres à partager et à exploiter | Moins de détail ; cache les petits groupes qui peuvent être en difficulté |
| Contrôles stricts sur les appareils | Sécurité et conformité | Plus de perturbation imposée ; plus de contournements |

La réponse en bref est d'utiliser les trois sortes de preuves au niveau du groupe, de ne garder le détail que le temps qu'un diagnostic l'exige, et de traiter la sécurité et l'expérience comme un compromis à discuter ouvertement. Le but est un lieu de travail où des personnes motivées obtiennent ce dont elles ont besoin avec peu d'effort.

## Questions à discuter avec votre équipe

**1. Comment se passe le premier jour d'un nouveau collègue, et comment le savons-nous ?**
Demandez à l'équipe de retracer le chemin de l'offre à la première vraie tâche. Qui fait quoi, et où cela attend-il ? Demandez à un arrivant récent de se joindre à la conversation. L'animateur doit se concentrer sur les moments qui ont laissé la personne à attendre ou embarrassée, et convenir d'un changement qui améliorerait la journée du prochain arrivant.

**2. Quel contournement les gens utilisent-ils que nous préférerions qu'ils n'utilisent pas, et que nous dit-il ?**
Listez les outils non officiels et les étapes manuelles que l'équipe a vus. Pour chacun, demandez quel besoin il satisfait. La conversation trouve souvent une exigence que le service officiel a manquée. Décidez quels contournements adopter, lesquels remplacer par une meilleure option officielle et lesquels interdire avec une explication.

**3. Combien de minutes nos propres actions prennent-elles à nos collègues chaque mois ?**
Estimez les redémarrages forcés, les mises à jour et les invites pour une personne type. Comparez avec ce que dirait un utilisateur. L'animateur peut demander ce qui changerait si le chiffre était publié. Convenez d'une perturbation à réduire ou à replanifier ce trimestre.

**4. Quelles données sur nos collègues pourrions-nous recueillir, et que devrions-nous promettre de ne jamais en faire ?**
Dressez deux listes : ce qui est techniquement possible et ce que l'équipe recueillera réellement. Rédigez une courte déclaration d'objectif et de limites. Demandez à un représentant du personnel de réagir. La discussion montre où se situe la ligne contre la surveillance, et comment l'expliquer.

**5. Qui a le plus de mal avec nos outils, et sont-ils dans nos données ?**
Pensez aux besoins d'accessibilité, au personnel posté, au personnel à distance et aux nouveaux. Vérifiez si les enquêtes et les journaux les atteignent et si les règles de petits groupes les cachent. Convenez d'un moyen d'écouter directement le groupe le moins bien servi.

**6. Qu'avons-nous corrigé le trimestre dernier à cause de ce que nos collègues nous ont dit, et en ont-ils entendu parler ?**
Listez les corrections et la manière dont elles ont été annoncées. Si la liste est courte, discutez de ce qui bloque l'action : responsabilité, financement ou peur. Convenez d'une correction visible à livrer avant la prochaine enquête et d'un message pour l'expliquer.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison sont à la fois utilisatrices et constructrices d'outils internes. Leur propre friction, comme les compilations lentes, les environnements instables et les retards d'accès, ralentit tout ce qu'elles livrent, et les mesures de ce sujet s'appliquent aussi à elles. Elles doivent faire des outils internes une partie du backlog produit avec un responsable et des utilisateurs, et participer au sondage flash et aux revues comme collègues (voir le sujet 9.1, Santé de l'équipe et expérience développeur).

### Équipes de service et d'exploitation

L'exploitation et le centre de services façonnent une grande part de l'expérience, et ce sont des employés avec leurs propres outils et leur propre charge. Elles doivent envoyer les changements en respectant la concentration des utilisateurs, garder le canal d'accessibilité réactif et se servir des contournements comme retour. Elles doivent aussi protéger leurs propres collègues d'un classement fondé sur les données d'expérience. Le personnel de soutien est aussi composé d'individus motivés.

### Direction et gouvernance

Les dirigeants fixent la culture de la mesure. Ils doivent demander que la friction soit supprimée, non que les scores montent, et financer les corrections. Ils doivent protéger par écrit les engagements de vie privée, résister aux demandes d'utiliser les données sur des individus et accepter que les contrôles de sécurité aient un coût d'expérience à peser. La gouvernance doit attendre les règles de vie privée et leur revue dans tout rapport d'expérience.

### Clients et utilisateurs

Les personnes qui utilisent l'informatique interne sont les auteurs de l'expérience. Elles méritent un premier jour qui fonctionne, des outils qui respectent leur concentration, un compte rendu honnête de ce qui est recueilli sur elles, un moyen de refuser quand c'est possible, et la preuve que parler mène à un changement. Les collègues ayant des besoins d'accessibilité doivent être consultés sur la manière de faire fonctionner le service pour eux, et non traités comme un cas particulier.

## En pratique : un exemple de gestion des services

Le service informatique central d'une université soutient 6 000 employés et exploite un centre de services, une équipe de plateforme et plusieurs équipes produit. Les chiffres ci-dessous sont illustratifs.

Une nouvelle responsable informatique veut savoir pourquoi les plaintes du personnel sur l'accueil persistent alors que les délais de résolution du centre de services sont dans la cible. Elle demande au responsable du service de piloter un programme d'expérience pour les nouveaux arrivants et pour le principal outil de collaboration, construit avec le conseil du personnel. La condition du conseil est une promesse écrite qu'aucune donnée ne sera utilisée sur des individus, et il accepte de revoir le plan.

L'équipe mesure le taux de préparation du premier jour et le délai avant productivité pour les 140 nouveaux arrivants du trimestre précédent, à l'aide du suivi d'accueil et d'une confirmation d'une question de la part de l'arrivant et de son responsable. Seuls 46 % des nouveaux arrivants avaient tous les éléments convenus fonctionnels le premier jour, et le délai médian avant productivité était de 4 jours, avec un 85e percentile de 9 jours. Les raisons, tirées d'entretiens, sont trois demandes distinctes qui attendent chacune une équipe différente, et une étape d'imagerie des portables qui se termine tard le vendredi. Un court sondage flash de l'outil de collaboration, envoyé à un dixième tournant du personnel avec une taille minimale de groupe de 10, montre des notes plus basses chez le personnel qui travaille le soir et le week-end. Les journaux des postes, agrégés par bâtiment et par équipe, montrent en moyenne 38 minutes par mois d'invites de redémarrage et de mise à jour forcés, avec une longue traîne pour le personnel de nuit, qui subit des redémarrages pendant ses heures de travail parce que ses appareils se mettent à jour quand les autres dorment.

L'équipe fait trois changements. Une seule demande d'accueil remplace les trois, avec un responsable nommé. L'étape d'imagerie passe à une fenêtre en semaine. La planification des mises à jour gagne une fenêtre de report liée aux heures de travail de l'utilisateur. Elle publie les règles de vie privée dans le registre des métriques : une taille minimale de groupe de 10, aucune donnée individuelle dans aucun rapport et une limite de conservation de six mois pour les journaux bruts. Trois mois plus tard, le taux de préparation du premier jour monte à 81 %, le 85e percentile du délai avant productivité tombe à 5 jours, et les minutes de perturbation imposée pour le personnel de nuit baissent d'environ la moitié. Un directeur demande à la responsable informatique de rapporter quels services ont le plus de plaintes, pour nommer des équipes à suivre. Elle refuse de classer les services, et propose de partager les schémas au niveau des groupes et de corriger les causes. La décision est consignée dans le journal de décision, et le conseil demande d'étendre le programme à un deuxième outil.

## Agilité, IA, automatisation et analytique

### Agilité

Corrigez la friction par petites étapes et montrez aux gens ce qui a changé, dans l'esprit de l'amélioration continue. La précaution est qu'interroger les gens à répétition sans action visible détruit la confiance.

### IA

Les assistants d'IA changent le travail quotidien des employés : mesurez donc la friction et le temps perdu pour les tâches assistées par l'IA, et appariez l'usage avec un bénéfice déclaré par l'utilisateur. La précaution est que les données d'usage de l'IA sur des individus peuvent être détournées pour juger la performance : gardez-les donc agrégées et encadrées.

### Automatisation

Recueillez automatiquement la santé des appareils et des applications, avec des limites claires de vie privée, et mesurez le recueil sur sa couverture et sur le nombre de problèmes corrigés. La précaution est que la télémétrie technique peut manquer ce que le travail fait ressentir : combinez-la donc avec de courtes enquêtes.

### Analytique

Rapportez la préparation et le délai avant productivité avec des décomptes, jamais par personne. La décision éclairée est où supprimer les obstacles. La précaution est que de petites équipes produisent des données identifiables : fixez donc une taille minimale de groupe avant de rapporter.

## Éclairage sectoriel

**Startup.** Tout le monde parle à tout le monde : l'observation et la conversation trouveront l'essentiel de la friction. Faites du premier jour une excellente expérience, car il donne le ton, et gardez la télémétrie minimale. Écrivez tôt les promesses de vie privée, même si l'équipe est petite.

**Petite entreprise.** Un seul administrateur peut gérer l'accueil et le soutien. Utilisez une simple liste de vérification et demandez à chaque nouvel arrivant ce qui manquait. Soyez prudent avec les données de petits groupes : avec une douzaine d'employés, presque toute ventilation identifie quelqu'un, appuyez-vous donc sur la conversation.

**Grande entreprise.** Des parcs vastes et variés rendent la segmentation utile et risquée. Segmentez par famille de rôles, type de site et classe d'appareil plutôt que par équipe, appliquez une taille minimale de groupe et impliquez des représentants du personnel. Alignez le programme avec les fonctions de sécurité, juridique et de vie privée dès le départ.

**Gouvernement et secteur public.** Les devoirs d'accessibilité, d'égalité et de vie privée sont souvent légaux, et des comités d'entreprise ou des syndicats peuvent avoir des rôles formels. Traitez les tests d'accessibilité et la consultation comme des parties obligatoires du programme, publiez les règles de vie privée et évitez de recueillir des données qui ne sont pas clairement nécessaires. Là où les données du personnel sont soumises à réglementation, impliquez le délégué à la protection des données (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes. Les sondages flash et l'observation demandent du temps de personnes et un outil d'enquête. Les données des postes viennent généralement d'un outillage déjà déployé, bien que l'analyse et la revue de vie privée demandent de l'effort. Le coût le plus grand est la volonté de corriger ce qui est trouvé, ce qui peut signifier changer les processus d'accueil, les politiques d'appareils et les pratiques de mise à jour entre équipes.

Le rendement se voit dans le temps récupéré, la montée en charge plus rapide des nouveaux arrivants, moins de contacts de soutien causés par une friction évitable et moins de shadow IT. Vous pouvez construire le dossier à partir de vos propres chiffres : les minutes de perturbation imposée par personne, les jours avant productivité des nouveaux arrivants et les contacts de soutien sur des problèmes qu'une correction a supprimés. Soyez prudent avec un chiffre de productivité unique dérivé d'un salaire et de minutes, car il repose sur des hypothèses sur la valeur d'une minute récupérée. Il y a aussi un coût de risque de l'autre côté du registre : recueillir trop de données sur le personnel peut créer une exposition juridique et abîmer la confiance. Incluez-le dans le coût total de possession.

## Anti-modèles et pièges

- **Utiliser les données d'expérience pour juger des individus.** Cela transforme un programme de soutien en surveillance et met fin au retour honnête. Agrégez, supprimez les petits groupes et dites-le.
- **Ne mesurer que des moyennes.** Les personnes à la pire expérience sont cachées. Regardez la traîne et les groupes les moins bien servis.
- **Tout recueillir parce que c'est possible.** Plus de données apportent plus de risque. Recueillez ce qui répond à une question.
- **Interroger sans relâche.** Les gens cessent de répondre. Faites tourner les outils et restez bref.
- **Punir les contournements.** Les gens les cachent et le besoin sous-jacent reste insatisfait. Apprenez d'eux.
- **Mettre la sécurité et l'expérience dans des pièces séparées.** Certains contrôles valent leur coût, et beaucoup non. Discutez du compromis avec des chiffres.
- **Traiter le premier jour comme le problème de quelqu'un d'autre.** L'accueil traverse les RH, l'informatique et le responsable. Donnez-lui un seul responsable.
- **Ignorer l'accessibilité jusqu'à une plainte.** Construisez et testez avec les personnes concernées dès le départ.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Compréhension de la friction | Plaintes seulement | Entretiens ou enquête occasionnels | Observation et sondage flash réguliers pour les outils et moments clés | Preuves combinées d'enquête, de système et de conversation, segmentées en sécurité | Vue commune avec les RH, les services généraux et les fournisseurs ; le personnel codétient les priorités |
| Vie privée et éthique | Aucune règle énoncée | Soin informel | Règles écrites d'objectif, de minimisation et de taille de groupe | Règles revues de façon indépendante ; conformité mesurée | Règles coconçues avec les représentants du personnel et auditées chez les fournisseurs |
| Action | Corrections sur plainte | Corrections ponctuelles | Principales frictions au backlog avec des responsables | Corrections financées, suivies et annoncées ; perturbation planifiée autour du travail | Améliorations de l'expérience intégrées à la planification entre équipes et fournisseurs |

## Liste de vérification

- [ ] Les moments clés (premier jour, panne d'appareil, demande d'accès, changement d'équipe, départ) sont cartographiés avec des responsables.
- [ ] Le taux de préparation du premier jour et le délai avant productivité sont mesurés avec une liste et des horloges écrites.
- [ ] Un court sondage flash couvre des outils nommés en rotation.
- [ ] Les minutes de perturbation imposée sont mesurées par groupe et revues avec la sécurité.
- [ ] Les demandes d'accessibilité sont étiquetées, suivies et confirmées par le demandeur.
- [ ] Les rapports utilisent une taille minimale de groupe et ne montrent jamais d'individus.
- [ ] Une déclaration écrite d'objectif et de limites pour les données d'expérience existe et est partagée.
- [ ] Des représentants du personnel ont revu le plan de données là où de tels organes existent.
- [ ] Les contournements sont recueillis et revus comme retour.
- [ ] Les résultats et les corrections sont partagés avec le personnel chaque trimestre.

## Prompts d'IA

**Cartographiez un moment qui compte.**

```text
We want to improve [moment, for example the first day for a new starter] in
[type of organization]. The steps today are: [list steps and who owns each]. Draw
a text map showing hand-offs and waits, suggest where friction is likely, and
propose one measure from what people say, one from what systems record, and one
from observation for each major step. Do not invent figures. List your
assumptions and the questions I should ask staff.
```

**Rédigez une déclaration de vie privée pour un programme d'expérience.**

```text
Draft a one-page plain-language statement for staff about an experience program
in [organization type] in [jurisdiction]. We collect: [list data]. Our purpose
is [purpose]. Include what we will not do (for example use data on individuals),
the minimum group size [number], retention [period], who can see raw data, and
how staff can raise concerns. Flag anything I should review with a privacy
specialist or staff representatives. Do not give legal conclusions. List your
assumptions.
```

**Analysez des commentaires de sondage flash sur un outil.**

```text
Here are [number] anonymized comments about [tool] from [period]: [paste
comments with personal data removed]. Group them into themes of friction,
count each theme, give two representative quotes for each, and suggest which
themes may point to a fixable cause versus a training need. Do not identify
individuals or infer motives. List your assumptions and what a person should
check before acting.
```

**Planifiez une réduction des perturbations.**

```text
Our endpoints receive [number] planned interruptions per person per month on
average: [list types and frequencies]. Security requirements: [list]. Propose a
scheme that reduces disruption to focus time (for example deferral windows,
bundling, scheduling by working hours) while meeting the requirements, and
describe how to measure whether it works without tracking individuals. List
your assumptions and the trade-offs I should discuss with security.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'expérience ou de friction avant de la publier.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'expérience révisée garde son vecteur de détournement, son garde-fou et ses règles de vie privée.

## Idées clés

- Le but est de donner à des personnes motivées l'environnement et le soutien dont elles ont besoin : mesurez donc la friction et supprimez-la.
- Combinez questions flash, mesures système et observation, et regardez les groupes en marge.
- Comptez les minutes perdues et les interruptions causées par les propres actions de l'informatique, et planifiez autour de la concentration des gens.
- Faites de la vie privée une règle de conception : minimisez, agrégez, supprimez les petits groupes et ne jugez jamais des individus.
- Traitez les contournements comme un retour, et dites au personnel ce que vous avez corrigé.
- Incluez l'accessibilité dès le départ, et revoyez le programme avec les personnes qu'il sert.

## Références et lectures complémentaires

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
