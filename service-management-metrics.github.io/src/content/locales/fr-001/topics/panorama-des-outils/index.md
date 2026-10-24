# Panorama des outils

**Choisissez les outils pour les questions auxquelles vous devez répondre et les données auxquelles vous pouvez vous fier, gardez les données portables et dépensez moins pour les plateformes que pour les habitudes qui rendent les chiffres dignes d'être lus.**

## Vue d'ensemble et motivation

Les outils sont l'endroit où les programmes de métriques déraillent le plus souvent, dans deux directions opposées. Certaines organisations achètent d'abord une grande plateforme d'analytique et découvrent plus tard qu'elles n'ont ni définitions convenues, ni données propres, ni public. D'autres bâtissent un tas de scripts et de tableurs que seule une personne comprend, et le programme prend fin quand cette personne s'en va. Les deux partent de l'outil et ignorent les questions auxquelles il doit répondre.

Le paysage est encombré et change vite : ce sujet est donc délibérément neutre vis-à-vis des fournisseurs. Il décrit les sortes d'outils, les flux de données entre eux, les compromis entre construire et acheter, et des critères de choix. Il ne nomme aucun produit, parce que les noms de produits vieillissent vite et qu'un livre est un mauvais guide pour les fonctionnalités et les prix actuels. Les principes de mesure ne changent pas avec le fournisseur : savoir ce que l'on mesure, d'où viennent les données, qui les détient et comment elles seront lues.

La plupart des données dont un programme de métriques de service a besoin existent déjà dans des systèmes de référence. Les outils de [gestion des services informatiques](https://en.wikipedia.org/wiki/IT_service_management) contiennent les incidents, les demandes, les problèmes, les changements et les enregistrements de configuration. Les systèmes de gestion de versions, de construction, de test et de déploiement contiennent l'historique du travail d'ingénierie. Les systèmes de supervision et d'[observabilité](https://en.wikipedia.org/wiki/Observability_(software)) contiennent les données de disponibilité, de latence et d'erreurs. Les outils d'enquête, les systèmes financiers, les systèmes de ressources humaines et les dépôts de contrats contiennent le reste. Un programme de métriques joint ces sources sans perturber le travail qui s'y fait (voir le sujet 1.5, Sources de données et instrumentation).

Le déplacement des données des sources vers un endroit où elles peuvent être analysées est un [pipeline de données](https://en.wikipedia.org/wiki/Data_pipeline), et le schéma classique est [extraire, transformer, charger](https://en.wikipedia.org/wiki/Extract,_transform,_load) : lire depuis les sources, remodeler et nettoyer, puis écrire dans un stockage. Ce stockage peut être un [entrepôt de données](https://en.wikipedia.org/wiki/Data_warehouse), un dépôt intégré de données de plusieurs systèmes organisé pour l'analyse. Les programmes atteignent ces systèmes par une [interface de programmation d'application](https://en.wikipedia.org/wiki/Application_programming_interface), qui est la manière dont un logiciel demande des données à un autre de façon définie. La qualité de ce qui circule détermine la qualité de chaque graphique. La [qualité des données](https://en.wikipedia.org/wiki/Data_quality) couvre l'exactitude, la complétude, la cohérence et l'actualité, et la discipline qui la soutient est la [gouvernance des données](https://en.wikipedia.org/wiki/Data_governance).

Le côté financier mérite du soin. Le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) d'un outil comprend les licences, l'infrastructure, l'intégration, la formation, l'administration et le coût de le quitter. L'[enfermement propriétaire](https://en.wikipedia.org/wiki/Vendor_lock-in) est la situation où changer de fournisseur coûte si cher que le client est en pratique lié. Les programmes de métriques y sont particulièrement exposés, parce que les définitions, l'historique et les tableaux de bord s'accumulent dans un outil, et qu'il est difficile de les en extraire plus tard.

Les visées agiles façonnent l'approche. La livraison continue s'applique au programme : mettez en place le chemin fonctionnel le plus mince d'une source vers une vue pour une équipe, apprenez de son usage et étendez. L'implication continue des parties prenantes signifie que les personnes qui utiliseront les chiffres participent aux choix d'outils. L'amélioration continue et l'évolution permanente signifient qu'on s'attend à ce que l'outillage change : la portabilité compte donc plus que la perfection. Un rythme soutenable signifie que le programme ne devient pas un projet d'ingénierie des données qui affame le travail qu'il mesure. Et des personnes motivées font un meilleur travail avec des outils qu'elles ont aidé à choisir et qu'elles comprennent qu'avec des outils imposés d'en haut, surtout des outils qui ressemblent à de la surveillance (voir le sujet 11.3, Déployer les métriques sans semer la peur).

Le sujet s'appuie sur les recommandations de conception des tableaux de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service) et sur les sujets de gouvernance de la partie 1.

## Principes clés

- **Les questions avant les outils.** Écrivez d'abord les questions et les mesures, puis voyez de quel outillage elles ont besoin.
- **Servez-vous des systèmes de référence.** Prenez les données là où le travail se fait, et évitez de demander aux gens de les saisir deux fois.
- **Gardez les définitions hors de l'outil.** Maintenez les définitions de métriques sous une forme simple et portable qui survit à un changement de plateforme.
- **Préférez des données portables.** Stockez les données dans des formats ouverts, avec des interfaces documentées, et gardez une voie de sortie.
- **Commencez mince et grandissez.** Une source, une vue, une équipe, puis étendez.
- **Comptez le coût complet.** Les licences ne sont qu'une fraction du coût de l'intégration, du nettoyage des données et de l'entretien.
- **Protégez les gens.** Les outils devraient agréger au niveau des équipes et des services, faire respecter les règles d'accès et rendre la surveillance difficile.
- **Traitez le pipeline comme un service.** Il lui faut un responsable, une supervision, des tests et un moyen de gérer les défaillances.

## Définitions des métriques

Les mesures ci-dessous décrivent la santé de l'outillage de métriques et de son approvisionnement en données. Elles sont destinées à l'équipe du programme, pour garder l'infrastructure honnête, et ne doivent pas servir à évaluer des personnes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des sources | Part des systèmes de référence nécessaires aux mesures convenues qui alimentent automatiquement le stockage de métriques | sources connectées et testées / sources nécessaires aux mesures convenues | pourcentage | Inventaire des sources ; configuration du pipeline | Gestion de l'information et de la technologie ; gestion de la configuration des services | Livraison continue du pipeline | Trimestrielle |
| Fiabilité du pipeline | Part des chargements de données planifiés qui se terminent à temps avec des contrôles réussis | chargements à temps avec contrôles réussis / chargements planifiés | pourcentage | Journaux du pipeline et résultats de tests | Supervision et gestion des événements | Tests automatisés et retour rapide | Hebdomadaire |
| Délai pour une nouvelle mesure | Temps écoulé entre une demande approuvée de nouvelle mesure et sa disponibilité avec une fiche de définition | jours entre l'approbation et la publication, médiane et 85e percentile | jours | Enregistrements de demandes et de livraisons | Gestion des demandes de service ; maîtrise des changements | Petits incréments de valeur | Trimestrielle |
| Taux de rapprochement | Part des chiffres clés qui concordent entre le stockage de métriques et le système source lors d'un contrôle par échantillon | chiffres concordant dans la tolérance / chiffres contrôlés | pourcentage | Contrôles de rapprochement | Gestion de l'information et de la technologie | Retour d'information digne de confiance | Mensuelle |
| Part de l'effort manuel | Part de l'effort sur les rapports récurrents consacrée au recueil et au nettoyage manuels | heures d'étapes manuelles / heures totales sur les rapports récurrents | pourcentage | Estimations de temps ; sondage d'équipe | Amélioration continue | Éliminer les tâches répétitives | Trimestrielle |
| Aptitude à la sortie | Possibilité d'exporter les définitions, l'historique et les tableaux de bord sous une forme documentée et utilisable | exports testés et complets / tests d'export planifiés | pourcentage | Enregistrements de tests d'export | Gestion des fournisseurs ; gestion de la continuité des services | Choix soutenables | Annuelle |
| Coût d'outillage par équipe soutenue | Coût annuel complet de l'outillage du programme divisé par les équipes qu'il sert | (licences + infrastructure + effort d'entretien) / équipes servies | monnaie par équipe | Enregistrements financiers et d'effort | Gestion financière des services | Rythme soutenable | Annuelle |

Comptez les sources selon ce dont les mesures convenues ont besoin et non selon ce qui existe, pour que la couverture ne soit pas relevée en connectant des systèmes sans pertinence. Le rapprochement demande de choisir un échantillon d'avance et une tolérance. Le coût d'outillage par équipe soutenue est un chiffre descriptif servant à comparer des options, non un objectif à faire baisser. Il comprend l'effort des personnes qui maintiennent le pipeline.

## Recommandations

### Décider de ce dont vous avez besoin

**1. Écrivez les exigences sous forme de questions et de mesures.** Listez les mesures que le programme a convenu de publier (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service), les sources dont chacune a besoin, la fraîcheur requise, qui peut la voir et combien de temps l'historique doit être gardé. Distinguez l'indispensable des préférences. Un court document de deux pages vaut mieux qu'une longue demande de propositions.

**2. Faites l'inventaire de ce que vous possédez déjà.** Beaucoup d'organisations ont des fonctions d'analytique dans leurs outils de gestion des services, d'ingénierie et de supervision qui restent inutilisées. Beaucoup ont des tableurs, des scripts et des rapports qui répondent déjà à une partie du besoin. Commencez par voir ce qu'ils peuvent faire. L'outil le moins cher est celui qui est déjà payé et déjà compris.

**3. Faites le point sur les données avant l'outil.** Pour chaque source, vérifiez si les données sont complètes, saisies de façon cohérente et accessibles par une interface. Un outil ne peut pas réparer des catégories d'incidents que personne n'utilise, des enregistrements de changement créés après coup ou des horodatages écrasés. Une partie du travail initial le plus précieux consiste à corriger la saisie des données à la source (voir le sujet 7.4, Métriques de qualité de la configuration et de la CMDB).

### Construire, acheter ou combiner

**4. Comparez construire et acheter sur le coût complet et l'adéquation.** Acheter une plateforme d'analytique ou un produit d'analytique d'ingénierie prêt à l'emploi apporte des connecteurs, des graphiques et un soutien tout faits, au prix de licences, d'un modèle du monde figé et d'une dépendance. Construire un pipeline et des vues apporte l'adéquation et la maîtrise, au prix de temps d'ingénierie et d'entretien. La plupart des organisations finissent par combiner : utiliser les rapports intégrés là où ils suffisent, un outil d'analyse général pour les vues, et construire de minces connecteurs là où rien d'autre ne convient.

**5. Testez un prototype avec de vraies données.** Avant de vous engager, menez un essai à durée limitée avec deux ou trois de vos propres mesures, de vraies données et de vrais utilisateurs. Vérifiez combien de temps ont pris les connexions, comment l'outil a géré vos définitions, s'il pouvait montrer des distributions et des percentiles, et comment il contrôlait l'accès. Les démonstrations commerciales utilisent des données propres, et les vôtres ne le sont pas.

**6. Planifiez la sortie avant d'entrer.** Demandez comment les définitions, l'historique et les tableaux de bord peuvent être exportés, et testez-le. Préférez les outils aux interfaces ouvertes et aux formats standards, et gardez votre propre copie des définitions de métriques et des données nettoyées. Le coût de la sortie fait partie du coût du maintien, et une sortie crédible améliore votre position de négociation (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

### Choisir avec des critères clairs

**7. Utilisez des critères de sélection neutres vis-à-vis des fournisseurs.** Des critères utiles sont les suivants. Les sources de données dont vous avez besoin ont-elles des connecteurs maintenus ? Les définitions peuvent-elles être écrites, versionnées et revues ? L'outil peut-il montrer des distributions, des percentiles et des tendances autant que des moyennes et des décomptes ? Agrège-t-il au niveau des équipes et des services et permet-il de restreindre les vues individuelles ? Prend-il en charge l'accès par rôle et l'audit ? Les données sont-elles exportables en formats ouverts ? Comment le fournisseur gère-t-il les changements, les pannes et les incidents de sécurité ? Combien cela coûte-t-il à l'échelle que vous prévoyez dans trois ans ?

**8. Méfiez-vous des notes intégrées.** Certains outils offrent d'emblée des scores composites, des classements de personnes ou des indices de « productivité ». Ils sont faciles à adopter et difficiles à défendre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Vérifiez si de telles fonctions peuvent être désactivées, et fixez la politique avant d'activer quoi que ce soit.

**9. Impliquez les personnes qui s'en serviront.** Demandez aux équipes d'essayer les options présélectionnées avec leurs données. Leurs questions révéleront des limites qu'un document d'exigences n'avait pas vues. Incluez tôt la sécurité, la vie privée, les finances et les achats (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités).

### Exploiter le pipeline comme un service

**10. Automatisez, testez et supervisez le pipeline.** Traitez les chargements de données comme tout autre service de production. Exécutez des contrôles automatiques sur les décomptes, les plages, les doublons et la fraîcheur. Alertez en cas d'échec, et montrez l'état de la qualité des données sur le tableau de bord. Versionnez la logique de transformation et revoyez ses changements comme du code (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**11. Tenez un catalogue de définitions.** Maintenez un catalogue partagé avec la définition, la formule, la source, le responsable et les limites de chaque mesure. Ce peut être un dépôt de fichiers texte, un outil de catalogue de données ou un wiki. Ce qui compte, c'est qu'il soit la source de vérité du sens, et que les tableaux de bord y puisent ou y renvoient (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**12. Revoyez l'outillage chaque année.** Chaque année, vérifiez ce que coûte l'outillage, quelles parties le programme utilise, où il reste de l'effort manuel et quelles options plus récentes existent. Retirez ce que personne n'utilise. Reconsidérez l'équilibre entre construire et acheter à mesure que le programme mûrit. Prévoyez le changement comme une partie normale du travail.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des sources | Connecter des sources faciles ou sans pertinence ; compter une connexion qui ne porte aucune donnée utilisable | Compter selon les mesures convenues ; vérifier la complétude des données par source |
| Fiabilité du pipeline | Relâcher les contrôles pour que les chargements passent toujours ; planifier moins de chargements | Revoir la solidité des contrôles ; suivre le rapprochement et les décomptes de lignes des sources |
| Délai pour une nouvelle mesure | Publier sans définitions ni tests ; restreindre ce qui compte comme nouvelle mesure | Exiger la fiche de définition et un contrôle de rapprochement pour l'achèvement |
| Taux de rapprochement | Choisir des chiffres faciles à contrôler ; élargir la tolérance après un raté | Choisir les échantillons avant le contrôle ; fixer la tolérance d'avance ; inclure des chiffres difficiles |
| Part de l'effort manuel | Minimiser le travail manuel ; cacher l'effort dans d'autres budgets | Demander aux personnes qui font le travail ; comparer avec le temps passé en fin de chaque cycle de rapport |
| Aptitude à la sortie | Tester un export partiel ; compter un plan documenté comme une aptitude | Faire une restauration complète dans un autre outil sur un échantillon ; vérifier les définitions et l'historique |
| Coût d'outillage par équipe soutenue | Exclure l'effort d'entretien ; ajouter des équipes sur le papier | Inclure le temps du personnel ; compter les équipes qui utilisent activement leurs vues |

Une lecture saine montre des données qui arrivent à temps et se rapprochent de la source, de nouvelles mesures publiées avec leurs définitions, un effort manuel en baisse et une sortie qui a été testée au moins une fois.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Rapports intégrés de chaque outil | Peu coûteux ; déjà là ; compris | Silos ; définitions incohérentes d'un outil à l'autre |
| Suite unique d'un seul fournisseur | Intégrée ; un seul contrat | Enfermement ; correspond au modèle du fournisseur, non au vôtre |
| Produit d'analytique d'ingénierie prêt à l'emploi | Démarrage rapide ; connecteurs prêts | Modèle figé ; risque de notation individuelle ; coût à grande échelle |
| Outil général d'analyse et de visualisation | Souple ; larges compétences disponibles | Demande un approvisionnement en données et un savoir-faire de conception |
| Entrepôt avec une couche de transformation | Forte maîtrise ; jointures entre sources | Effort d'ingénierie ; demande un responsable |
| Tableurs et scripts | Rapides à démarrer ; pas de licence | Fragiles ; dépendent d'individus ; difficiles à auditer |
| Pile à code source ouvert | Maîtrise ; pas de coût de licence | Effort d'entretien ; le soutien dépend de vous |
| Métriques recueillies à la main | Fonctionne sans outillage | Lent ; sujet aux erreurs ; difficile à tenir |

La réponse en bref est de commencer avec ce que vous avez déjà, d'ajouter la plus mince connexion qui répond à de vraies questions, de garder définitions et données portables, et de ne passer à des outils plus lourds que lorsque les plus légers limitent manifestement les décisions.

## Questions à discuter avec votre équipe

**1. Quels chiffres produisons-nous à la main chaque mois, et que faudrait-il pour arrêter ?**
Listez les rapports manuels et les heures qu'ils prennent. Trouvez la source de chacun et voyez si elle a une interface. L'animateur doit demander quels rapports pourraient simplement être abandonnés. Convenez d'en automatiser un et d'en retirer un.

**2. Si notre outil de rapport actuel disparaissait demain, que perdrions-nous ?**
Nommez les définitions, l'historique et les tableaux de bord qui n'existent que dedans. Vérifiez lesquels sont exportables. Convenez de l'endroit où garder une copie.

**3. Quelles données de nos systèmes sont celles auxquelles nous faisons le moins confiance, et pourquoi ?**
Regardez les habitudes de saisie, les valeurs par défaut et les champs écrasés. Estimez jusqu'où chaque distorsion touche les mesures que nous publions. Convenez de la correction à la source qui ajouterait le plus de confiance pour le moins d'effort.

**4. Que laisse voir l'outil que nous ne voudrions pas qu'il laisse voir ?**
Vérifiez les vues individuelles, les journaux d'activité et les classements. Décidez de ce qu'il faut restreindre ou désactiver, et écrivez la règle avant que quiconque utilise la fonction.

**5. Combien de temps nous faut-il pour ajouter une nouvelle mesure, et qu'est-ce qui nous ralentit ?**
Retracez une demande récente de l'approbation à la disponibilité. Marquez les attentes. Convenez de ce qu'il faut supprimer, comme des approbations, des définitions manquantes ou du nettoyage manuel.

**6. Quel est le coût complet de cet outil pour une équipe sur un an ?**
Additionnez les licences, l'infrastructure, l'intégration, la formation et le temps des personnes qui le maintiennent. Comparez avec les décisions qu'il a améliorées. Discutez de ce que nous cesserions de payer.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes veulent des données qui viennent du travail sans saisie supplémentaire, et des vues qui répondent à leurs questions. Elles devraient aider à choisir et à tester les outils, posséder les définitions de leurs propres mesures et refuser les fonctions qui classent les individus. Leur temps est l'intrant le plus rare, et un outillage qui leur demande de consigner le travail deux fois rencontrera de la résistance.

### Équipes de service et d'exploitation

Les équipes d'exploitation font tourner les sources et souvent le pipeline. Elles devraient traiter le pipeline comme un service avec supervision et tests, garder fiables les champs de données sources et signaler les changements dans les systèmes de référence qui casseront les connecteurs. Ce sont les premières à voir quand un chiffre est faux.

### Direction et gouvernance

Les dirigeants financent le programme et fixent les attentes. Ils devraient demander le coût total, non le prix des licences, exiger la portabilité et une sortie, résister à l'envie d'acheter une plateforme pour résoudre un problème de définitions et insister sur des règles de vie privée et d'accès. Ils devraient accepter un début modeste et le juger sur les décisions qu'il améliore.

### Clients et utilisateurs

Les clients et les utilisateurs voient rarement l'outillage, et vivent avec ses conséquences : les données qui les concernent sont stockées, combinées et analysées. Ils méritent des règles claires sur ce qui est recueilli, la durée de conservation, qui le voit et comment c'est protégé. Là où les mesures s'appuient sur leur retour, les outils devraient respecter le consentement et l'anonymat.

## En pratique : un exemple de gestion des services

Une entreprise régionale de logistique a un outil de gestion des services, un système de gestion de versions et de déploiement, une plateforme de supervision et un outil d'enquête, et chacun produit ses propres rapports. La responsable de la gestion des services veut une vue unique de la santé des services pour 12 équipes. Un fournisseur offre une plateforme d'analytique tout-en-un avec un contrat de trois ans. Les chiffres ci-dessous sont illustratifs.

La responsable de la gestion des services écrit d'abord les questions et les 14 mesures sur lesquelles les équipes et les dirigeants se sont accordés lors des séances sur le tableau de bord. Elle fait l'inventaire de l'existant : l'outil de gestion des services peut exporter les données d'incidents et de changements par son interface, le système de déploiement fournit les horodatages de déploiement et la plateforme de supervision rapporte la disponibilité face aux objectifs. Elle demande à un petit groupe de représentants d'équipes de tester deux options sur trois mesures avec de vraies données : la plateforme du fournisseur et une combinaison d'un outil général de visualisation avec un petit stockage de données et de minces connecteurs.

L'essai révèle des différences. La plateforme s'est connectée à toutes les sources en deux jours, mais elle calculait le délai de livraison comme une moyenne et ne pouvait pas montrer un percentile élevé, elle avait un « score de productivité d'équipe » intégré qui ne pouvait pas être désactivé, et l'export des définitions de tableaux de bord produisait un fichier qu'aucun autre outil ne pouvait lire. La combinaison a pris 11 jours à connecter, mais elle montrait des médianes et des percentiles, gardait les définitions en texte simple dans un dépôt et restreignait les champs individuels au niveau du stockage de données. Le groupe découvre aussi que 30 % des enregistrements de changement ont été créés après le déploiement : le délai de livraison était donc faux quel que soit l'outil qui le lisait. Corriger l'habitude de saisie à la source devient le premier travail.

L'entreprise choisit la combinaison. La couverture des sources passe de 3 sources nécessaires sur 8 à 7 sur 8 en deux trimestres. La fiabilité du pipeline démarre à 71 % de chargements à temps avec contrôles réussis, et atteint 96 % après que l'équipe ajoute des tests et des alertes d'échec. Le délai pour une nouvelle mesure passe d'une médiane de 31 jours à 9. L'effort manuel sur le rapport mensuel passe d'environ 40 heures à 6. Un directeur demande si le score de productivité de la plateforme du fournisseur pourrait être ajouté pour donner un classement unique des équipes. La responsable de la gestion des services explique l'analyse du sujet 1.2, montre ce qui s'est passé quand un score semblable a été utilisé ailleurs dans l'entreprise et propose la vue équilibrée actuelle. La décision est consignée, et la fonction de score est désactivée dans tout outil qui en a une.

## Agilité, IA, automatisation et analytique

### Agilité

Choisissez les outils par de petites expériences avec une vraie équipe et une vraie question, et gardez la capacité de changer de cap. La précaution est qu'une grande décision de plateforme prise tôt verrouille les définitions avant que l'équipe ait appris ce dont elle a besoin.

### IA

Beaucoup d'outils d'analytique et de gestion des services comprennent maintenant des fonctions d'IA. Demandez ce que fait l'IA, avec quelles données, à quelles conditions, comment sa production est vérifiée et comment la désactiver, et mesurez les fonctions d'IA comme tout autre usage (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA). La précaution est que les fonctions d'IA activées par défaut peuvent changer les rapports en silence : interrogez donc les fournisseurs à chaque version.

### Automatisation

Préférez les outils qui vous laissent recueillir les données automatiquement par des interfaces documentées et garder vos données portables. Mesurez les intégrations sur leurs défaillances et sur le délai pour une nouvelle mesure. La précaution est que des connecteurs propriétaires peuvent rendre vos données difficiles à emporter : testez donc un export.

### Analytique

Jugez les outils sur la couverture des sources, le rapprochement et le délai pour répondre à une nouvelle question. La décision éclairée est quel outil adopter, garder ou quitter. La précaution est que les données de démonstration paraissent propres : testez donc avec vos propres données en désordre.

## Éclairage sectoriel

**Startup.** Servez-vous de ce que le produit et les outils existants fournissent déjà. Un tableur et les rapports intégrés des outils que vous utilisez peuvent répondre à la plupart des premières questions. Résistez à une plateforme de données tant que les questions ne sont pas stables et que l'effort manuel ne fait pas mal. Gardez les définitions de métriques écrites pour qu'un déménagement ultérieur soit facile.

**Petite entreprise.** Peu de mesures et peu de systèmes signifient un outillage simple. Les rapports intégrés et un tableur suffisent souvent. Les principaux risques sont des données gardées seulement dans la tête d'une personne et des outils sans export. Choisissez des produits que vous pouvez quitter, et écrivez les définitions.

**Grande entreprise.** De nombreux systèmes, équipes et définitions plaident pour un stockage de données gouverné, un catalogue de définitions et des vues en couches. Une responsabilité fédérée marche mieux qu'une équipe centrale qui construit chaque rapport. Soyez attentif à l'enfermement, au contrôle d'accès, à la vie privée et à l'évaluation des fournisseurs, et envisagez une petite équipe de plateforme qui fournit le pipeline comme un service.

**Gouvernement et secteur public.** Les règles d'achat, la souveraineté des données et l'accessibilité pèsent sur les choix d'outils. Les normes ouvertes et la portabilité sont précieuses parce que les contrats sont longs et que les administrations changent. Prévoyez les évaluations de sécurité, la conservation des documents et les règles de divulgation publique, et vérifiez les directives actuelles sur l'hébergement et les achats (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent les licences ou abonnements, l'infrastructure, le travail d'intégration et de connecteurs, le nettoyage des données, le travail de définitions et de catalogue, la formation, le soutien et l'effort récurrent pour garder le pipeline en bonne santé. Les options de construction portent des coûts d'ingénierie faciles à sous-estimer, et les options d'achat portent des frais qui croissent avec l'échelle et le coût de la sortie.

Les rendements viennent de l'effort de rapport économisé, de réponses plus rapides, de moins de disputes sur les chiffres et de meilleures décisions fondées sur des données fiables. Construisez le dossier à partir de vos propres données : heures passées aujourd'hui aux rapports manuels, nombre de versions concurrentes d'un même chiffre, délai entre une question et une réponse, et coûts des outils qui font double emploi. Évitez de citer des chiffres d'analystes sur les rendements de l'analytique sans source traçable et sans pertinence pour votre contexte. Une comparaison équitable compte le coût complet de chaque option sur trois ans, sortie comprise (voir le sujet 7.5, Coût du service et économie unitaire, et le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **L'outil d'abord, les questions ensuite.** La plateforme arrive, et personne ne sait quoi lui demander. Écrivez d'abord les mesures.
- **Acheter pour régler un problème de définitions.** Le désaccord sur le sens persiste dans tout outil. Réglez les définitions.
- **Des scores individuels intégrés.** Ils tentent et ils faussent. Désactivez-les et fixez la politique d'abord.
- **Aucune sortie.** L'historique et les définitions sont piégés. Testez l'export et gardez une copie.
- **Le pipeline d'une seule personne.** Il s'arrête quand cette personne part. Documentez-le, testez-le et partagez la responsabilité.
- **La double saisie.** Les gens consignent deux fois le même travail, et la qualité des deux baisse. Prenez les données dans les systèmes de référence.
- **La sur-ingénierie initiale.** Une plateforme de données arrive avant qu'une seule vue ait fait ses preuves. Commencez mince.
- **Ignorer la qualité des données.** Des graphiques propres sur des données sales trompent de façon plus convaincante. Corrigez la saisie à la source.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Approvisionnement en données | Recueil manuel ; tableurs | Quelques flux automatisés ; scripts individuels | Des sources convenues alimentent un stockage partagé par des pipelines testés | Fiabilité, rapprochement et fraîcheur gérés et visibles | Pipelines fédérés avec contrats partagés entre équipes et fournisseurs ; sources améliorées à partir du retour |
| Définitions et catalogue | Dans la tête des gens | Quelques-unes documentées | Un catalogue de définitions avec responsables, versionné et revu | Le catalogue pilote les tableaux de bord ; changements revus avec les utilisateurs | Définitions co-détenues entre équipes et fournisseurs ; retirées quand elles cessent d'éclairer les décisions |
| Choix et coût | Achats ponctuels | Outils qui se chevauchent | Critères écrits ; sortie testée ; coût complet compté | Coût par équipe soutenue et effort manuel gérés | Choix d'outillage revus régulièrement avec les utilisateurs et adaptés à l'évolution des besoins |

## Liste de vérification

- [ ] Les mesures convenues et leurs questions sont écrites avant que les outils soient comparés.
- [ ] Les outils et rapports existants ont été inventoriés et testés d'abord.
- [ ] La qualité des données aux principales sources a été vérifiée et les pires lacunes corrigées.
- [ ] Les critères de sélection sont écrits et comprennent distributions, contrôle d'accès et export.
- [ ] Un essai à durée limitée avec de vraies données et de vrais utilisateurs a été fait avant tout engagement.
- [ ] Les fonctions de notation et de classement individuels sont désactivées ou restreintes par une politique.
- [ ] Les définitions sont gardées dans un catalogue portable hors de tout outil unique.
- [ ] Le pipeline a un responsable, des contrôles automatisés, une supervision et une alerte d'échec.
- [ ] Un export des définitions et de l'historique a été testé.
- [ ] Le coût complet sur trois ans, sortie comprise, a été compté.

## Prompts d'IA

**Rédigez des exigences à partir de questions.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Planifiez un essai d'outil.**

```text
We are comparing [options] for our metrics program. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Passez en revue un pipeline de données.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behavior. List your assumptions and what you could not
tell from the description.
```

**Comparez le coût complet.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics program. List the cost categories for each option, including
licenses, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver la source de données et le garde-fou de chaque mesure en rédigeant les exigences.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un dossier de décision d'outillage porte des définitions, des sources de données et des garde-fous.

## Idées clés

- Écrivez d'abord les questions et les mesures, et choisissez les outils pour les servir.
- Servez-vous des systèmes de référence, corrigez la saisie des données à la source et testez le rapprochement.
- Gardez définitions et données portables, et testez la sortie avant de vous engager.
- Désactivez la notation et les classements individuels, et fixez la politique avant d'activer une fonction.
- Exploitez le pipeline comme un service avec un responsable, des tests et une supervision.
- Comptez le coût complet sur plusieurs années, et commencez par le chemin le plus mince qui répond à de vraies questions.

## Références et lectures complémentaires

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Gestion des services informatiques](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observabilité (logiciel)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Pipeline de données](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extraire, transformer, charger](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Entrepôt de données](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Interface de programmation d'application](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Qualité des données](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Gouvernance des données](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Enfermement propriétaire](https://en.wikipedia.org/wiki/Vendor_lock-in).
