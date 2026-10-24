# Métriques d'adoption des services et de catalogue

**Un service que personne ne choisit, ne trouve ou pour lequel personne ne mène une demande à terme n'a pas livré de valeur : mesurez donc comment les gens découvrent et utilisent ce que vous offrez, et gardez le catalogue aussi honnête qu'un backlog.**

## Vue d'ensemble et motivation

Les équipes investissent dans des services puis découvrent que les gens ne les utilisent pas. Le nouveau portail en libre-service est contourné par courriel. Un élément de catalogue soigneusement conçu pour l'accès à un logiciel reçoit deux demandes par an pendant que cent par mois arrivent par messagerie. Un service de supervision est lancé et la moitié des équipes pour lesquelles il a été construit ne s'y connectent jamais. L'adoption est la moitié manquante de la livraison : un service n'a de valeur que si ses utilisateurs prévus commencent à l'utiliser, continuent et vont jusqu'au bout.

Le **catalogue de services** (l'orthographe d'ITIL est « service catalogue ») est la liste des services et des éléments demandables qu'une organisation offre, décrits en termes que ses utilisateurs comprennent. Un [catalogue de services](https://en.wikipedia.org/wiki/Service_catalog) a généralement une vue orientée client, qui liste ce qu'un utilisateur peut demander et comment, et une vue technique, qui consigne comment chaque service est construit et soutenu. Les équipes agiles en reconnaîtront la forme : un catalogue est une sorte de [backlog produit](https://en.wikipedia.org/wiki/Product_backlog) à l'envers. Un backlog liste ce que vous avez l'intention de construire. Un catalogue liste ce que vous offrez déjà, et les deux demandent le même soin : ordre, élagage, formulation claire et flux régulier de retours des utilisateurs (voir le sujet 2.6, Métriques du backlog et de son affinage).

L'**adoption** est la mesure dans laquelle les utilisateurs prévus adoptent un service et continuent de l'utiliser. L'étude de la manière dont de nouvelles pratiques se diffusent a une longue histoire ; la théorie de la [diffusion des innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) décrit l'adoption comme un processus dans le temps, avec des adopteurs précoces, une majorité et des retardataires. Pour un service interne, la leçon pratique est que l'adoption se produit rarement à cause d'une annonce. Elle se produit quand le service est facile à trouver, facile à utiliser et nettement meilleur que le contournement.

Les mesures d'adoption sont tentantes à transformer en objectifs. Imposer un canal fait paraître bon un chiffre d'usage pendant que les utilisateurs s'en agacent et bâtissent des contournements. Pousser chaque demande dans un élément de catalogue fait monter la couverture du catalogue pendant que l'achèvement baisse. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : chaque mesure ici est donc appariée avec un contrôle que la vraie valeur, et non le simple usage, augmente (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet couvre quatre choses : si les gens utilisent un service (adoption), s'ils peuvent trouver et terminer ce pour quoi ils sont venus (catalogue et flux de demande), si le catalogue est à jour et honnête (hygiène) et si l'usage est concentré sur quelques éléments (forme). Il se relie au traitement des demandes (voir le sujet 3.5, Métriques de traitement des demandes de service) et au libre-service (voir le sujet 3.7, Métriques de libre-service et d'automatisation), qui couvrent ce qui se passe après la demande.

## Principes clés

- **L'adoption est un résultat : demandez donc ce que l'utilisateur essayait de faire.** Comptez les buts atteints, non les pages vues.
- **Mesurez l'entonnoir, pas seulement le total.** L'endroit où les gens abandonnent dit ce qu'il faut corriger.
- **Comparez avec l'alternative.** Un service est en concurrence avec le courriel, la messagerie, un appel téléphonique et un contournement.
- **Gardez le catalogue aussi petit et à jour que possible.** Des éléments périmés apprennent aux utilisateurs à cesser de chercher.
- **Segmentez avant de conclure.** Les moyennes sur tous les utilisateurs cachent les groupes pour lesquels le service ne marche pas.
- **Ne forcez jamais l'usage pour faire monter un chiffre.** Les obligations produisent des chiffres, non de l'adoption.
- **Traitez un faible usage comme une question pour le responsable et les utilisateurs.** Cela peut signifier que le service n'est pas nécessaire.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'adoption | Part des utilisateurs éligibles qui ont utilisé un service au moins une fois dans la période | utilisateurs éligibles distincts avec au moins un usage achevé / utilisateurs éligibles | pourcentage | Journaux d'usage du service joints à l'annuaire des utilisateurs | Gestion du catalogue des services ; gestion des niveaux de service | Adoption des fonctionnalités ; revue des résultats du produit | Mensuelle |
| Taux d'usage actif | Part des adopteurs qui utilisent encore le service dans le temps | utilisateurs actifs dans la période qui ont aussi utilisé le service dans la période précédente / utilisateurs actifs dans la période précédente | pourcentage | Journaux d'usage ; tables de cohortes | Amélioration continue | Rétention dans l'analytique produit | Mensuelle |
| Couverture du catalogue | Part des demandes qui arrivent par le catalogue plutôt que par des canaux ad hoc | demandes créées via le catalogue / toutes les demandes, tous canaux confondus | pourcentage | Outil de gestion des demandes ; étiquettes de boîte aux lettres et de messagerie | Gestion des demandes de service ; gestion du catalogue des services | Éléments du backlog qui portent une définition écrite | Mensuelle |
| Taux d'abandon des demandes | Part des demandes commencées que l'utilisateur ne soumet pas | demandes commencées mais non soumises dans les 24 heures / demandes commencées | pourcentage | Analytique du portail | Gestion des demandes de service | Abandon de tâche dans les tests d'utilisabilité | Mensuelle |
| Taux de réussite des recherches | Part des recherches dans le catalogue qui aboutissent à une demande ou à une réponse consultée | recherches suivies d'une demande ou d'une consultation de connaissance dans la session / recherches | pourcentage | Journaux de recherche du portail | Gestion des connaissances ; gestion du catalogue des services | Facilité à trouver dans la recherche utilisateur | Mensuelle |
| Part d'éléments périmés | Part des éléments du catalogue au-delà de leur date de revue ou sans usage dans une période fixée | éléments en retard de revue ou sans demande en 12 mois / éléments du catalogue | pourcentage | Registre du catalogue | Gestion du catalogue des services | Âge du backlog et élagage | Trimestrielle |
| Concentration des demandes | Part des demandes représentée par les éléments les plus demandés | demandes pour les cinq premiers éléments / toutes les demandes de catalogue | pourcentage | Outil de gestion des demandes | Gestion des demandes de service | Pareto du travail par type | Trimestrielle |

Énoncez la base d'utilisateurs de chaque mesure. Les « utilisateurs éligibles » doivent être définis avant de mesurer, par exemple le personnel des rôles qui pourraient utiliser un service, et la liste consignée dans le registre des métriques. Ne comptez un usage que s'il se termine par un résultat achevé, comme un accès accordé, et non quand une page se charge. Excluez les comptes de test et le trafic automatisé.

## Recommandations

### Connaître vos services et vos utilisateurs

**1. Définissez le public visé de chaque service.** Avant de mesurer l'adoption, écrivez à qui le service s'adresse et pourquoi ces personnes l'utiliseraient plutôt que l'alternative. Un nouveau service d'analyse conçu pour le personnel de la finance n'est pas à « faible adoption » si seul le personnel de la finance devait l'utiliser. Sans public défini, le taux d'adoption est un chiffre sur personne.

**2. Consignez l'alternative.** Pour chaque service important, listez ce que font les gens maintenant quand ils ne l'utilisent pas : demander à un collègue, envoyer un courriel, acheter un outil, faire tourner un tableur. Traitez l'alternative comme un concurrent au sens qui compte : c'est là que vont vos utilisateurs quand votre service est plus difficile. Comparez l'effort des deux chemins pendant la conception et la revue.

**3. Décrivez les éléments dans le langage de l'utilisateur.** Des titres comme « Accès logiciel, standard » et « Remplacement d'ordinateur portable, endommagé » sont plus faciles à trouver que des noms internes. Testez les titres en demandant à quelques utilisateurs de trouver un élément à partir d'un court scénario. Les problèmes de formulation apparaissent vite dans les journaux de recherche.

**4. Gardez un responsable pour chaque élément.** Chaque élément du catalogue a un responsable nommé, une date de revue, une description du public et le volume attendu. Les éléments sans responsable dérivent. Si personne ne peut dire qui utilise un élément et pourquoi, c'est un candidat au retrait.

### Mesurer le parcours

**5. Instrumentez l'entonnoir.** Pour chaque service important, consignez les étapes de la découverte au résultat achevé : trouver l'élément, commencer la demande, remplir le formulaire, soumettre, recevoir le résultat. Une vue en [entonnoir de conversion](https://en.wikipedia.org/wiki/Conversion_funnel) montre où les utilisateurs partent. Corrigez d'abord la plus grosse chute. Vérifiez que les corrections rendent le formulaire plus court ou plus clair, et non seulement les données plus jolies.

**6. Utilisez des cohortes pour voir la rétention.** Une [analyse de cohortes](https://en.wikipedia.org/wiki/Cohort_analysis) regroupe les utilisateurs selon le moment où ils ont utilisé le service pour la première fois et suit chaque groupe. Elle distingue un service qui garde ses utilisateurs d'un service qui les attire une fois et les perd. Utilisez-la pour les services qui devraient être utilisés de façon répétée, comme le portail du centre de services ou un pipeline de déploiement.

**7. Lisez les journaux de recherche pour ce que les gens ne trouvent pas.** Les recherches sans résultat, ou répétées avec d'autres mots, pointent des lacunes dans le nommage, le contenu ou le catalogue lui-même. Revoyez chaque mois les principales recherches sans résultat et décidez pour chacune : renommer un élément, ajouter un synonyme, écrire un article ou créer un nouvel élément. Les outils d'[analytique web](https://en.wikipedia.org/wiki/Web_analytics) peuvent le fournir, tout comme les journaux du portail.

**8. Segmentez par groupe.** Ventilez l'adoption et l'abandon par rôle, lieu, appareil et besoins d'accessibilité là où vous avez un accès légal et éthique à ces informations. L'agrégat peut sembler sain pendant que le personnel de nuit ou les utilisateurs d'appareils mobiles échouent deux fois plus souvent. Supprimez les petits groupes pour protéger les personnes, et combinez avec les mesures d'expérience des sujets précédents (voir le sujet 6.2, Accords de niveau d'expérience).

### Garder le catalogue honnête

**9. Élaguez selon un calendrier.** Revoyez le catalogue chaque trimestre. Retirez ou fusionnez les éléments sans usage, retirez les éléments de services abandonnés et corrigez ceux qui ont un fort abandon. Un catalogue plus petit et exact sert mieux les utilisateurs qu'un catalogue complet mais périmé. Traitez le retrait comme normal et consignez la raison.

**10. Regardez la forme de la demande.** Dans la plupart des catalogues, quelques éléments rendent compte de l'essentiel des demandes, un schéma souvent décrit par le [principe de Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Servez-vous-en pour concentrer l'effort de conception sur les éléments fréquents et automatiser ceux qui sont routiniers (voir le sujet 3.7, Métriques de libre-service et d'automatisation). N'abandonnez pas la longue traîne sans y regarder, car des éléments rares peuvent compter beaucoup pour ceux qui en ont besoin.

**11. Ne forcez pas l'adoption.** Si un service est nécessaire, les utilisateurs viendront dès qu'il sera facile. Là où l'organisation impose un canal pour des raisons de contrôle ou d'audit, dites-le, et soyez ouvert sur le fait que le chiffre reflète une règle, non une préférence. Évitez les [motifs trompeurs](https://en.wikipedia.org/wiki/Dark_pattern), comme cacher le numéro de téléphone ou rendre l'alternative plus difficile, car ils augmentent l'usage et abaissent la confiance.

**12. Bouclez la boucle avec les responsables et les utilisateurs.** Partagez chaque mois l'entonnoir, les lacunes de recherche et la liste des éléments périmés avec les responsables d'éléments. Demandez aux utilisateurs, dans l'enquête et dans les revues, pourquoi ils utilisent un service ou l'évitent (voir le sujet 6.1, Métriques de satisfaction de la clientèle). Consignez ce que vous avez changé dans le registre et dites aux utilisateurs que cela a eu lieu.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux d'adoption | Imposer l'usage ; compter les connexions ou les pages vues comme usage ; restreindre les « utilisateurs éligibles » à ceux qui l'utilisent déjà | Définition par résultat achevé ; comparer avec les notes de satisfaction et d'effort ; publier la règle des utilisateurs éligibles |
| Taux d'usage actif | Inscrire automatiquement des utilisateurs pour qu'ils paraissent actifs ; envoyer des notifications qui comptent comme activité | Ne compter que les actions achevées à l'initiative de l'utilisateur ; entretiens par échantillon avec les utilisateurs partis |
| Couverture du catalogue | Forcer chaque demande dans un élément de catalogue générique ; clore les demandes par courriel avec « veuillez utiliser le portail » | Taux d'abandon des demandes et satisfaction ; compter combien de demandes sont rouvertes par un autre canal |
| Taux d'abandon des demandes | Retirer des champs de formulaire nécessaires, ce qui déplace le travail vers le traitement ; ne compter les demandes abandonnées qu'après une longue fenêtre | Taux de reprise et de clarification au traitement (voir le sujet 3.5, Métriques de traitement des demandes de service) |
| Taux de réussite des recherches | Compter n'importe quel clic comme un succès ; ajouter des articles hors sujet qui correspondent à toute requête | Vérifier que le résultat a été utilisé (demande faite, article jugé utile) ; lire les recherches sans résultat |
| Part d'éléments périmés | Marquer des éléments comme revus sans les lire ; réinitialiser les dates de revue en bloc | Échantillonner les éléments revus pour vérifier l'exactitude ; montrer la date du dernier vrai changement |
| Concentration des demandes | Scinder les éléments populaires en plusieurs ; fusionner des éléments sans rapport pour cacher la demande de la longue traîne | Taxonomie d'éléments fixe avec journal des changements ; regarder la traîne par catégorie |

Une lecture saine est un catalogue où les éléments les plus utilisés marchent bien et deviennent plus faciles, où les utilisateurs choisissent le service parce qu'il est meilleur que l'alternative, et où retirer un élément est routinier.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Canal imposé | Volume prévisible, facile à auditer | Ressentiment, contournements, chiffres gonflés |
| Adoption volontaire | Signal honnête de valeur | Plus lente ; certains services peuvent ne jamais être adoptés |
| Grand catalogue | Complet, couvre les besoins rares | Difficile à chercher ; devient périmé |
| Petit catalogue | Facile à trouver et à maintenir | Les besoins rares tombent dehors ; les utilisateurs se rabattent sur le courriel |
| Mesures d'entonnoir | Repèrent où les utilisateurs abandonnent | Demandent de l'instrumentation ; peuvent encourager l'optimisation du formulaire aux dépens du résultat |
| Enquête sur le pourquoi | Explique le comportement | Biaisée par qui répond ; difficile à mettre à l'échelle |

La réponse en bref est de préférer l'adoption volontaire appuyée sur un net avantage de qualité, et de n'utiliser des obligations que là où le contrôle ou la conformité l'exigent, avec le chiffre étiqueté en conséquence. Gardez le catalogue assez petit pour être maintenu, et mettez la traîne dans une base de connaissances consultable, non dans cent éléments à moitié utilisés.

## Questions à discuter avec votre équipe

**1. À qui chacun de nos principaux services s'adresse-t-il, et comment saurions-nous qu'ils l'utilisent ?**
Listez les cinq services auxquels votre équipe consacre le plus de temps et écrivez le public visé de chacun. Demandez ensuite comment l'adoption pourrait être mesurée. L'animateur doit chercher les services dont personne ne sait nommer le public, car ils n'ont probablement aucun plan d'adoption.

**2. Que font les gens quand ils n'utilisent pas notre service, et pourquoi ?**
Pour un service à faible adoption, interrogez quelques utilisateurs qui l'évitent. L'alternative est généralement révélatrice : elle peut être plus rapide, plus familière ou plus souple. Décidez s'il faut améliorer le service, changer l'alternative ou accepter que le service n'est pas nécessaire.

**3. Où les utilisateurs abandonnent-ils notre élément le plus demandé ?**
Montrez l'entonnoir de l'élément principal, de la première vue à la soumission. Demandez à l'équipe de deviner où se trouve la plus grosse chute, puis comparez. Convenez d'un changement à tester et dites comment vous vérifierez qu'il a aidé sans déplacer le problème ailleurs.

**4. Que retirerions-nous du catalogue si nous osions ?**
Imprimez la liste des éléments sans demande en un an. Demandez ce qui arriverait si chacun disparaissait. La conversation constate souvent qu'un élément existe parce que quelqu'un l'a demandé un jour. Convenez d'une date pour retirer ou fusionner les cinq premiers et d'une note aux utilisateurs.

**5. Où poussons-nous ou forçons-nous les utilisateurs, et cela vaut-il le coût ?**
Listez chaque endroit où une règle ou une conception pousse les utilisateurs vers un canal. Demandez lesquels sont réellement nécessaires et lesquels sont une habitude. L'animateur doit explorer comment les utilisateurs vivent chacun, et si les chiffres obtenus signifient ce que les dirigeants croient.

**6. Que cherchent les gens que nous n'avons pas ?**
Revoyez les principales recherches sans résultat. Pour chacune, décidez s'il faut ajouter un élément, écrire un article ou expliquer que le service n'existe pas. Demandez qui détient cette revue et à quelle fréquence elle aura lieu.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison construisent des services et des fonctionnalités qui ont besoin d'adoption pour compter. Elles doivent définir le public dès le départ, intégrer des mesures d'usage dans le service et revoir l'entonnoir après le lancement. Les données d'adoption sont un retour sur le travail, et elles ont leur place dans l'affinage et la revue. Les équipes doivent éviter de déclarer une version terminée parce qu'elle est livrée. Terminé signifie que les utilisateurs prévus en tirent le bénéfice.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent le catalogue et voient les demandes qui arrivent par tous les canaux. Elles doivent garder le catalogue à jour, étiqueter les demandes qui le contournent et demander pourquoi. Elles ne doivent pas clore une demande en la redirigeant, car cela cache le signal. Les lacunes de recherche et l'abandon sont leur meilleure source d'améliorations du portail.

### Direction et gouvernance

Les dirigeants décident si l'adoption est une conversation ou un quota. Ils doivent demander à quoi sert le service, qui il aide et pourquoi les gens le choisissent. Ils doivent éviter de fixer des objectifs d'adoption à des équipes individuelles, soutenir le retrait des services inutilisés et s'attendre à voir l'adoption à côté de la satisfaction et de l'effort. Là où une obligation est justifiée, les dirigeants doivent l'expliquer aux utilisateurs.

### Clients et utilisateurs

Les utilisateurs veulent obtenir ce dont ils ont besoin avec peu d'effort. Ils remarquent quand un portail est difficile à chercher, quand les formulaires demandent ce que l'organisation sait déjà et quand l'ancienne façon est plus rapide. Leur comportement, et ce qu'ils disent, est le signal d'adoption le plus honnête. On doit leur demander pourquoi ils évitent un service, et leur dire ce qui a changé en conséquence.

## En pratique : un exemple de gestion des services

Le service informatique d'une agence nationale des transports exploite un centre de services, un portail en libre-service avec un catalogue d'environ 140 éléments et plusieurs équipes produit. Les chiffres ci-dessous sont illustratifs.

Le portail a été lancé il y a un an, et la direction a fixé un objectif de 80 % des demandes par ce canal. Le rapport mensuel montre 78 % de couverture, et la responsable de la gestion des services est satisfaite jusqu'à ce qu'elle lise les commentaires de l'enquête auprès des utilisateurs. Le personnel des bureaux régionaux dit que le portail est lent et que les formulaires sont longs. Elle demande au gestionnaire du catalogue de regarder l'entonnoir et les journaux de recherche.

L'entonnoir de « Équipement d'un nouvel arrivant » montre 1 100 débuts par trimestre et 640 soumissions, soit un taux d'abandon de 42 %. Le formulaire a 23 champs. Le journal de recherche montre que le terme « portable » renvoie huit éléments, et que le terme « VPN » n'en renvoie aucun, alors que c'est le terme le plus recherché. Sur 140 éléments du catalogue, 38 n'ont eu aucune demande en 12 mois et 21 ont dépassé leur date de revue. Les cinq premiers éléments représentent 61 % des demandes, et 15 % de plus des demandes arrivent par courriel et sont saisies à la main.

L'équipe fait quatre changements. Elle ramène le formulaire du nouvel arrivant à neuf champs en utilisant des données que le système RH détient déjà. Elle ajoute un article sur le VPN et un élément avec des synonymes. Elle fusionne les huit éléments d'ordinateur portable en deux. Et elle retire 19 des éléments inutilisés avec une note aux responsables. Elle change aussi la façon de lire le rapport mensuel : la couverture est montrée avec le taux d'abandon et la question d'enquête « dans quelle mesure a-t-il été facile d'obtenir ce dont vous aviez besoin ? » Trois mois plus tard, l'abandon de l'élément du nouvel arrivant tombe à 24 %, la couverture du portail est de 74 % et la note d'effort des bureaux régionaux monte. Le directeur demande pourquoi la couverture a baissé. La responsable de la gestion des services explique que les demandes par courriel étaient auparavant closes de force, que le chiffre plus bas est plus honnête et que l'expérience est meilleure. Le journal de décision consigne que l'objectif est remplacé par une direction : réduire l'abandon et relever la note d'effort, la couverture étant revue mais non ciblée.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez le catalogue comme un backlog affiné avec ses utilisateurs, et retirez les éléments que personne n'utilise. La précaution est qu'un objectif de nombre d'éléments du catalogue ajoute de l'encombrement.

### IA

La recherche et les assistants d'IA peuvent changer la manière dont les gens trouvent les services, ce qui déplace les chiffres d'adoption et d'abandon. Appariez la réussite des recherches avec le taux d'abandon et avec la part des suggestions de l'IA qui ont été acceptées et menées à terme. La précaution est qu'un modèle peut recommander un service que la personne ne peut pas demander : vérifiez donc les règles d'éligibilité.

### Automatisation

Capturez automatiquement les événements de recherche, de consultation et de demande, et signalez les éléments périmés du catalogue pour une décision humaine. Mesurez l'automatisation du traitement sur son taux d'échec. La précaution est qu'un nettoyage automatisé qui retire des éléments peut cacher des services que les gens utilisent rarement mais dont ils ont besoin.

### Analytique

Montrez l'adoption et l'abandon par élément de catalogue avec les décomptes, et la concentration des demandes. La décision éclairée est quels éléments redessiner ou retirer. La précaution est que les éléments à faible volume ont des taux bruités.

## Éclairage sectoriel

**Startup.** Il n'y a souvent pas de catalogue. Une simple page « comment obtenir X » et un canal partagé suffisent. Observez ce que les gens demandent et transformez les cinq principales demandes en courts guides. Mesurez l'adoption des outils internes en interrogeant les utilisateurs, et laissez de côté les entonnoirs formels.

**Petite entreprise.** Peu de personnes assurent l'informatique, et les demandes arrivent par tous les canaux. Un catalogue modeste de 10 à 20 éléments couvre l'essentiel des besoins. Ne forcez pas les utilisateurs vers un portail qui coûte plus à maintenir que les demandes qu'il traite. Revoyez la liste deux fois par an.

**Grande entreprise.** L'échelle donne un catalogue assez grand pour demander de la gouvernance : responsables, dates de revue et taxonomie. Segmentez l'adoption par unité d'affaires et par région, et évitez les obligations à l'échelle de l'entreprise qui ignorent les besoins locaux. Méfiez-vous des fournisseurs dont les éléments de catalogue sont comptés mais non utilisés.

**Gouvernement et secteur public.** Les services touchent le public autant que le personnel, avec des devoirs d'accessibilité, de langue et d'égalité d'accès. Incluez les canaux assistés (téléphone, en personne) dans les mesures pour que l'adoption numérique ne cache pas l'exclusion. Là où des règles légales ou de politique exigent un canal, dites-le dans les rapports (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes. Les journaux d'usage et les données de demandes existent généralement déjà. L'analyse de l'entonnoir et des recherches demande l'accès à l'analytique du portail, que la plupart des plateformes fournissent. Le principal coût en temps est la revue trimestrielle du catalogue et un regard mensuel sur les lacunes de recherche et les abandons, quelques heures chacun. Corriger les formulaires et fusionner des éléments coûte du temps de conception et de configuration.

Le rendement vient de services utilisés, de demandes qui aboutissent et de moins de gaspillage dans le traitement. Un formulaire plus court qui réduit l'abandon réduit les contacts répétés et le traitement manuel. Élaguer les éléments inutilisés réduit la maintenance. Construisez le dossier à partir de vos propres chiffres : taux d'abandon, temps de traitement manuel par demande reçue par courriel et coût de maintenance d'un élément inutilisé, avant et après les changements. Évitez les affirmations publiées sur le ROI des portails que vous ne pouvez pas retracer, car elles dépendent de l'organisation et de la méthode.

## Anti-modèles et pièges

- **Compter les lancements comme de l'adoption.** Un service est adopté quand les utilisateurs prévus mènent des résultats à terme avec lui. Mesurez l'usage, non l'annonce.
- **Imposer un canal pour faire monter un chiffre.** Les utilisateurs le contourneront. Améliorez le service et laissez le chiffre suivre.
- **Ajouter des éléments sans jamais en retirer.** Le catalogue devient impossible à chercher. Élaguez chaque trimestre.
- **Ne regarder que les totaux.** Segmentez par groupe et regardez l'entonnoir.
- **Clore les demandes reçues par courriel par une redirection.** Cela cache la demande et agace les utilisateurs. Traitez la demande et corrigez la route.
- **Utiliser les pages vues comme usage.** Comptez les résultats achevés.
- **Traiter un faible usage comme un échec des utilisateurs.** Demandez si le service est nécessaire et facile à utiliser.
- **Laisser tomber les responsables d'éléments.** Attribuez des responsables et des dates de revue à chaque élément.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Conception du catalogue | Liste qui a grandi au gré des demandes | Un catalogue existe, formulation incohérente | Éléments en langage utilisateur avec responsables et dates de revue | Élagage trimestriel ; taxonomie gérée | Catalogue partagé entre équipes et fournisseurs ; éléments coconçus avec les utilisateurs |
| Mesure de l'adoption | Anecdote | Décomptes de demandes par élément | Adoption définie par utilisateurs éligibles et résultats achevés | Entonnoirs, cohortes et segments revus chaque mois | Adoption reliée à l'expérience et aux résultats entre services |
| Amélioration | Corrections ponctuelles | Corrections après plaintes | Lacunes de recherche et abandons revus chaque mois | Corrections priorisées et suivies dans un backlog | Amélioration coordonnée avec les utilisateurs, services retirés rapportés ouvertement |

## Liste de vérification

- [ ] Chaque service important a un public visé écrit et un chemin alternatif.
- [ ] L'adoption est définie comme des résultats achevés par des utilisateurs éligibles.
- [ ] Les éléments du catalogue ont des responsables, des descriptions en langage utilisateur et des dates de revue.
- [ ] L'entonnoir est instrumenté pour les éléments les plus demandés.
- [ ] Les recherches sans résultat sont revues chaque mois.
- [ ] L'adoption et l'abandon sont segmentés par groupe, avec suppression des petits groupes.
- [ ] Les demandes arrivant hors du catalogue sont étiquetées et comptées.
- [ ] Le catalogue est élagué chaque trimestre, avec les raisons consignées.
- [ ] L'adoption est montrée à côté de mesures de satisfaction ou d'effort.
- [ ] Aucun objectif d'adoption n'est fixé pour une équipe ou une personne individuelle.

## Prompts d'IA

**Analysez un entonnoir de demande.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Passez en revue les journaux de recherche pour trouver les lacunes du catalogue.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Planifiez une revue d'élagage du catalogue.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Rédigez une définition d'adoption pour un service.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'adoption ou de catalogue.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une nouvelle entrée de métrique de catalogue a son vecteur de détournement et son garde-fou.

## Idées clés

- L'adoption signifie que les utilisateurs prévus mènent des résultats à terme avec un service : définissez donc le public et comptez les achèvements.
- Mesurez l'entonnoir, les lacunes de recherche et la rétention des utilisateurs, et segmentez par groupe.
- Comparez le service avec l'alternative qu'ont aujourd'hui les utilisateurs.
- Gardez le catalogue petit, avec des responsables, et élagué chaque trimestre.
- Ne forcez pas l'usage pour faire monter un chiffre, et appariez l'adoption avec la satisfaction et l'effort.
- Traitez un faible usage comme une question sur le besoin et la facilité, non comme un échec des utilisateurs.

## Références et lectures complémentaires

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
