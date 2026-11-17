# Gouvernance et responsabilité des métriques

**Une métrique que personne ne détient, ne définit, ne revoit ni ne retire dérivera loin du travail qu'elle décrit : donnez donc à chaque métrique rapportée un responsable nommé, une définition écrite, une date de revue et une sortie.**

## Vue d'ensemble et motivation

La gouvernance des métriques est l'ensemble des décisions légères sur qui détient une mesure, ce qu'elle signifie, qui peut la voir, à quelle fréquence elle est revue et quand elle est retirée. C'est une proche cousine de la [gouvernance des données](https://en.wikipedia.org/wiki/Data_governance), qui couvre la gestion plus large de la disponibilité, de la qualité et de la sécurité des données dans une organisation. La gouvernance des métriques applique la même discipline au petit ensemble très visible de chiffres que les équipes et les dirigeants utilisent pour piloter le travail de service et de livraison.

Le besoin se manifeste par de petites frictions répétées. Deux équipes calculent le « temps de résolution » différemment et passent une réunion à réconcilier les chiffres. Une tuile de tableau de bord reste périmée pendant des mois parce que la personne qui l'a construite a changé de poste. Une mesure conçue pour aider une équipe à diagnostiquer son flux est adoptée par un comité de pilotage comme objectif de performance, ce qui est la situation contre laquelle met en garde le sujet précédent (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Aucun de ces cas n'est un problème statistique. Chacun est un problème de responsabilité, et chacun est peu coûteux à prévenir.

Les visions agile et ITIL diffèrent par leur accent, et cette différence est utile. Dans la vision agile, une équipe détient ses mesures de travail et les négocie dans les rétrospectives, les accords de travail et les revues. La vision ITIL, telle que documentée dans ITIL 4 (l'édition 2019 d'AXELOS, désormais publiée par PeopleCert), traite la mesure et le reporting comme une pratique générale de gestion et l'amélioration continue comme une pratique dotée de ses propres rôles, enregistrements et revues. ITIL attend aussi des responsables de service et des responsables de pratique qu'ils répondent des résultats. Les deux visions s'emboîtent : l'équipe détient la vue de travail, un responsable de service ou de pratique nommé détient la vue rapportée, et un petit registre relie les deux.

Quelques termes employés ici. Un **responsable de métrique** est la seule personne qui répond de la définition, de la qualité des données et de l'usage d'une métrique. Un **registre des métriques** est un court catalogue des métriques en usage, avec pour chacune son responsable, sa définition, sa source de données, son garde-fou et sa date de revue. Une **charte des métriques** est un énoncé d'une page de la finalité, du périmètre, des rôles et de la cadence de revue d'un ensemble de métriques. Une **[source unique de vérité](https://en.wikipedia.org/wiki/Single_source_of_truth)** est le système ou le jeu de données faisant autorité à partir duquel un chiffre donné est calculé. Un **[intendant des données](https://en.wikipedia.org/wiki/Data_steward)** veille à la qualité et à la définition d'un domaine de données, et dans une petite organisation le responsable de métrique joue souvent ce rôle. Une **[matrice RACI](https://en.wikipedia.org/wiki/RACI_matrix)** consigne qui est responsable, qui rend compte, qui est consulté et qui est informé pour chaque activité. Un **[dictionnaire de données](https://en.wikipedia.org/wiki/Data_dictionary)** est un catalogue des éléments de données et de leur signification, ce que devient la colonne de définition du registre à plus grande échelle. Le **[principe du moindre privilège](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** dit que les personnes et les systèmes obtiennent l'accès dont ils ont besoin pour leur tâche et pas davantage. L'**[amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process)** est l'effort permanent pour améliorer les services, les pratiques et les façons de travailler, à la fois pratique ITIL et habitude agile. SLA désigne un accord de niveau de service, et ITSM la gestion des services informatiques.

## Principes clés

- **Chaque métrique rapportée a un seul responsable nommé.** Un rôle ou une personne, jamais « l'équipe ». Une responsabilité partagée laisse la définition sans entretien.
- **Une définition, une source unique de vérité.** Écrivez la définition une fois, y compris où l'horloge démarre et s'arrête, et calculez le chiffre à un seul endroit.
- **Gouvernez en proportion des conséquences.** Une métrique qu'une équipe utilise pour déboguer son propre tableau demande une phrase. Une métrique figurant dans un contrat, un rapport public ou un dossier de conseil demande une entrée de charte, une revue et une piste d'audit.
- **L'accès suit la finalité.** Décidez qui voit quelle vue et pourquoi. Le public par défaut de la vue de travail d'une équipe est l'équipe.
- **Revoyez selon une cadence et retirez sur preuve.** Les métriques ont un cycle de vie. Adoptez-les, revoyez-les, révisez-les et retirez-les délibérément.
- **Écrivez-le et gardez-le petit.** Un registre qui tient sur une page se lit. Un manuel de politique non.
- **La gouvernance sert les personnes mesurées.** Les détenteurs d'une métrique incluent les personnes dont elle décrit le travail.

## Définitions des métriques

Ce sont des mesures de la santé d'une pratique de métriques, pas d'un service. Elles sont volontairement peu nombreuses et peu coûteuses à collecter à partir du registre lui-même. Chaque période est un trimestre civil sauf indication contraire.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de la responsabilité | Part des métriques rapportées ayant un responsable nommé et à jour | métriques rapportées avec un responsable qui tient encore le rôle en fin de période / métriques rapportées en fin de période ; exclut les métriques utilisées uniquement dans le tableau privé d'une équipe | pourcentage | Registre des métriques | Mesure et reporting | Accords de travail | Trimestrielle |
| Actualité des définitions | Part des métriques rapportées dont la définition a été revue dans l'intervalle convenu | métriques avec une date de revue dans les 6 derniers mois / métriques rapportées ; l'horloge démarre à la dernière revue consignée et s'arrête à la fin de la période | pourcentage | Journal des changements du registre des métriques | Mesure et reporting ; amélioration continue | Actions de rétrospective | Trimestrielle |
| Conformité de la source | Part des métriques rapportées calculées à partir d'une seule source nommée | métriques avec une source faisant autorité et aucun calcul parallèle connu / métriques rapportées ; les calculs parallèles sont repérés par échantillonnage des tableaux de bord et des rapports | pourcentage | Registre plus un échantillon de tableaux de bord et de rapports | Mesure et reporting ; gestion des niveaux de service | Définition de terminé pour une métrique | Trimestrielle |
| Taux de retrait | Nombre de métriques retirées ou fusionnées dans une période par rapport à celles rapportées | métriques retirées ou fusionnées dans la période / métriques rapportées en début de période ; une métrique déplacée vers une vue privée d'équipe compte comme retirée de l'ensemble rapporté | pourcentage | Journal des changements du registre des métriques | Amélioration continue | Actions de rétrospective | Trimestrielle |
| Actualité des revues d'accès | Part des vues de métriques restreintes dont la liste de destinataires a été revue dans l'intervalle | vues restreintes avec une revue d'audience dans les 6 derniers mois / vues restreintes ; les vues ouvertes à toute l'organisation sont exclues | pourcentage | Liste d'accès ou export des permissions de l'outil de BI | Gestion de la sécurité de l'information ; mesure et reporting | Accords de travail | Semestrielle |
| Lien avec les décisions | Part des métriques rapportées reliées dans le registre à une décision qu'elles éclairent | métriques avec une décision ou une question consignée / métriques rapportées ; un lien ne compte que si la décision a été prise dans les 12 derniers mois | pourcentage | Registre des métriques et journal des décisions | Amélioration continue | Revue avec les parties prenantes et résultats d'amélioration | Trimestrielle |

Aucune de ces métriques n'est un objectif. Un registre peut afficher une couverture complète de la responsabilité tout en décrivant des métriques inutiles : lisez donc le tableau avec le tableau de détournement ci-dessous.

## Recommandations

### Établir la responsabilité et le registre

**1. Tenez un registre des métriques d'une page.** Énumérez chaque métrique rapportée avec sa question, son responsable, sa définition, sa formule et ses horloges, son unité, sa source de données, son public, son garde-fou, sa dernière date de revue et sa prochaine date de revue prévue. Un tableur ou un fichier Markdown sous contrôle de version suffit. Le registre est l'artefact le plus utile de ce sujet, et le sujet précédent suppose déjà qu'il existe (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

**2. Nommez un responsable par métrique et consignez le rôle.** Le responsable répond de la définition, de la qualité des données et de l'explication des résultats étranges. Choisissez quelqu'un proche des données et des décisions, souvent le responsable de service, un responsable de pratique ou un chef d'équipe. Consignez le rôle autant que la personne, pour que l'entrée survive à un changement de poste et qu'une vacance apparaisse dans le chiffre de couverture.

**3. Séparez détenir une métrique de détenir le travail qu'elle mesure.** Le responsable d'une métrique l'explique et la maintient, mais l'équipe qui fait le travail reste responsable du résultat. Cela évite deux pièges : le responsable que l'on blâme pour un chiffre sur lequel il ne peut agir, et l'équipe qui renie un chiffre parce que quelqu'un d'autre le maintient. Un court tableau RACI dans la charte le rend explicite.

**4. Écrivez la définition avec ses horloges, une seule fois.** Le registre contient la définition qui fait autorité : ce qui est compté, où l'horloge démarre et s'arrête, quels états la suspendent et ce qui est exclu. Pointez vers elle depuis chaque tableau de bord qui montre la métrique. Quand une définition doit changer, changez-la d'abord dans le registre et marquez le changement sur le graphique (voir le sujet 1.6, Culture statistique pour les métriques de service, pour savoir comment montrer une rupture dans une tendance).

**5. Calculez chaque métrique à un seul endroit.** Choisissez la source qui fait autorité, comme l'outil ITSM, le gestionnaire d'anomalies ou le système de supervision, et dites-le dans le registre. Les tableurs parallèles qui reproduisent le chiffre doivent être soit retirés, soit renommés pour que personne ne les prenne pour le chiffre officiel. La traçabilité des données et l'outillage relèvent du sujet suivant (voir le sujet 1.5, Sources de données et instrumentation).

### Fixer la cadence et la maîtrise des changements

**6. Revoyez les définitions selon un calendrier proportionné aux conséquences.** Pour les métriques figurant dans des contrats, des rapports réglementés ou des dossiers de direction, revoyez deux fois par an et à tout changement du flux de travail sous-jacent. Pour les mesures de travail au niveau de l'équipe, la rétrospective est la revue. Chaque revue pose trois questions : la définition est-elle toujours exacte, les données sont-elles toujours saines, et quelqu'un s'est-il servi du chiffre pour décider quelque chose ?

**7. Traitez les changements de définition comme des changements d'un service.** Consignez qui a demandé le changement, pourquoi, qui a été consulté et la date d'entrée en vigueur. Un petit changement dans un flux de statuts peut déplacer en silence une mesure de temps de façon importante. Une maîtrise légère des changements pour les définitions emprunte l'idée à la maîtrise des changements sans la cérémonie (voir le sujet 4.3, Métriques de maîtrise des changements, pour la contrepartie pour les changements de service).

**8. Rattachez la revue à l'amélioration continue.** Les revues de métriques doivent produire du travail d'amélioration, ou une décision explicite de ne pas agir. ITIL traite l'amélioration continue comme une pratique dotée d'un registre d'opportunités d'amélioration, et les équipes agiles obtiennent le même effet par les actions de rétrospective. Si une revue se termine sans action et sans retrait, demandez-vous si la métrique fait un travail quelconque (voir le sujet 9.5, Métriques d'amélioration continue).

**9. Retirez les métriques délibérément.** Définissez un test de retrait, par exemple « non citée dans une décision pendant deux cycles de revue », et appliquez-le. Archivez la définition et les dernières valeurs, dites ce qui a remplacé la métrique le cas échéant, et informez le public. Un journal des retraits est une preuve pour les auditeurs et un soulagement pour les personnes qui maintenaient les données à la main.

### Maîtriser les vues et l'accès

**10. Décidez du public de chaque vue.** La plupart des métriques ont une vue de travail pour l'équipe, une vue rapportée pour le responsable de service ou le programme et parfois une vue externe pour les clients, un régulateur ou un fournisseur. Consignez quel public reçoit quelle vue et pourquoi. En vous guidant sur le principe du moindre privilège, restreignez les vues contenant des données personnelles, des détails de sécurité ou des chiffres de fournisseurs commercialement sensibles, et laissez le reste ouvert pour que la transparence soit la règle par défaut.

**11. Gardez les données au niveau individuel hors du reporting.** La règle stricte de ce livre est que les métriques décrivent des équipes, des services et des systèmes, pas des personnes. La gouvernance l'appuie en fixant le grain rapporté, par exemple équipe et service, et en réservant à l'intendant des données tout extrait au niveau d'une personne. Si une demande de ventilation par personne arrive, consignez-la, demandez à quelle décision elle sert et proposez une alternative au niveau de l'équipe ou du système (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture de la responsabilité | Nommer un responsable hiérarchique ou une liste de diffusion comme responsable pour atteindre 100 %, sans personne qui puisse expliquer ou changer la métrique | Demander à chaque responsable d'expliquer un mouvement récent du chiffre ; suivre les questions restées sans réponse plus d'une semaine |
| Actualité des définitions | Toucher à la date de revue sans lire la définition | Échantillonner trois entrées chaque trimestre et comparer la définition écrite avec la configuration réelle de l'outil |
| Conformité de la source | Déclarer une source comme faisant autorité alors que des tableurs circulent encore et divergent | Compter les chiffres distincts pour la même métrique dans un échantillon de rapports ; concilier les écarts en revue |
| Taux de retrait | Retirer des métriques triviales ou inutilisées pour paraître discipliné, ou renommer une métrique pour qu'elle compte comme nouvelle | Revoir le journal des retraits pour voir ce qui a été supprimé ; suivre à côté le nombre total de métriques rapportées et le lien avec les décisions |
| Actualité des revues d'accès | Approuver la liste de destinataires existante sans la lire | Comparer la liste avec la composition et les rôles actuels des équipes ; rapporter le nombre de suppressions constatées |
| Lien avec les décisions | Écrire une décision vague comme « améliorer le service » pour satisfaire le champ | Exiger une décision ou une question datée, et échantillonner le journal des décisions pour voir si la métrique a réellement été consultée |

Une lecture saine est celle d'un registre qui change. Les entrées ont des responsables qui répondent aux questions, des dates de revue qui tombent dans les six derniers mois, un journal des retraits avec des motifs et une courte liste de métriques encore voulues parce que les gens peuvent nommer la décision qu'elles éclairent. Un registre dont tous les champs sont remplis et qui ne change jamais est un signal d'alarme.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Bureau central des métriques | Définitions cohérentes et outillage partagé ; audit plus facile | Lent, éloigné du travail et tenté de normaliser des mesures qui devraient différer d'une équipe à l'autre |
| Responsabilité fédérée avec un registre partagé | Les responsables sont proches des données ; le registre maintient un minimum commun | Demande un encouragement constant pour éviter une dérive de qualité entre équipes |
| Mesures détenues uniquement par les équipes | Rapide et adaptée au travail | Les définitions divergent ; les agrégats deviennent peu fiables ; le savoir part avec les personnes |
| Accès ouvert par défaut | Construit la confiance et la compréhension partagée | Risque d'exposer des détails sensibles ou au niveau individuel |
| Accès restreint | Protège les données sensibles | Cache le contexte à des personnes qui pourraient aider et invite à la suspicion |

L'équilibre consiste à centraliser la fine couche qui doit concorder, à savoir le registre, les définitions partagées et les règles d'accès, et à fédérer tout le reste.

## Questions à discuter avec votre équipe

**1. Qui répondrait demain si le chiffre le plus cité de notre tableau de bord paraissait faux ?**
Demandez au groupe de nommer une personne, pas un groupe. Si plusieurs noms sortent, ou aucun, la métrique n'a pas de responsable en pratique. L'animateur doit noter la métrique, le responsable candidat et ce dont il aurait besoin pour faire le travail, comme un accès en lecture aux données ou du temps en revue. Concluez en convenant de qui confirmera le responsable et consignera le rôle dans le registre.

**2. Où existent aujourd'hui deux versions du même chiffre ?**
Cherchez des rapports qui montrent la même métrique avec des valeurs différentes : une diapositive hebdomadaire face à un tableau de bord en direct, ou un rapport de fournisseur face au rapport interne. Pour chacun, demandez d'où vient la différence, par exemple le périmètre, l'horloge ou les exclusions. Décidez quelle source fait autorité et ce qui advient de l'autre version. Attendez-vous à ce que la conversation fasse découvrir des définitions de travail différentes de mots que tous croyaient partagés.

**3. Quelle métrique retirerions-nous ce trimestre s'il fallait en retirer une ?**
Commencez par la métrique que personne n'a citée récemment dans une décision. Demandez ce qui se passerait si elle disparaissait, et qui le remarquerait. Si la réponse est « personne », sortez-la de l'ensemble rapporté à titre d'essai. L'animateur doit traiter le retrait comme normal et sain, et consigner le résultat dans le journal des retraits.

**4. Qui voit lesquelles de nos métriques, et est-ce voulu ?**
Dessinez une grille simple de métriques face aux publics : équipe, responsable de service, direction, clients, fournisseurs, régulateurs. Marquez où l'accès a été une décision et où il s'est simplement produit. Cherchez toute vue qui pourrait servir à comparer des personnes. Convenez d'un changement d'au moins une liste de destinataires, et de qui la revoit ensuite.

**5. Comment changeons-nous une définition sans casser la tendance ?**
Parcourez un changement récent d'un flux de statuts ou d'une échelle de priorité. Demandez qui a été prévenu, si le graphique a été annoté et si quelqu'un a comparé les anciennes et les nouvelles valeurs. Rédigez une entrée de changement légère que l'équipe remplirait vraiment. Convenez de qui approuve les changements des métriques figurant dans des contrats ou des rapports externes.

**6. Que cesserions-nous de faire si la gouvernance devenait un fardeau ?**
La gouvernance peut se transformer en rituel. Demandez quelles parties de l'approche actuelle les gens sauteraient si personne ne vérifiait, et pourquoi. Traitez les réponses comme un retour de conception plutôt que comme de la résistance. L'animateur doit chercher les étapes qui se font doublon, les champs que personne ne lit et les revues qui ne produisent jamais de décision.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent des mesures de travail comme l'âge des éléments de travail et le temps de cycle, et elles doivent en convenir les définitions dans leurs accords de travail. Quand une métrique monte dans un rapport de portefeuille, l'équipe doit connaître le responsable, la définition et le public. Les équipes tirent le plus de valeur d'une courte entrée de registre pour chaque mesure rapportée, et du droit de contester une définition qui ne correspond plus à la façon dont circule le travail (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes de service et d'exploitation portent les métriques qui figurent dans les SLA et les revues opérationnelles : les définitions, les horloges et les exclusions ont donc un poids contractuel. Les responsables y sont généralement des responsables de service et de pratique. Ils doivent garder une piste de preuves des changements de définition, réconcilier régulièrement les chiffres rapportés avec l'outil ITSM et être les premiers à retirer une mesure qui a cessé d'éclairer les décisions opérationnelles (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

### Direction et gouvernance

Les dirigeants fixent les conditions : qui détient les métriques, quelles vues atteignent le dossier de direction et comment les chiffres sont utilisés. Ils doivent demander le registre et le journal des retraits, lire les définitions derrière les chiffres phares et résister aux demandes de classements au niveau des personnes. Les instances de gouvernance ont besoin d'un petit point permanent qui revoit le registre et consigne les décisions, conformément aux attentes d'ISO/IEC 20000-1 pour les systèmes de management des services (dans son édition 2018), sans transformer la revue en exercice de conformité (voir le sujet 8.3, Métriques de conformité et d'audit).

### Clients et utilisateurs

Les clients et utilisateurs voient rarement le registre, mais ils en sentent l'absence quand un chiffre d'une revue de service diffère de leur expérience. Là où une métrique figure dans un rapport destiné aux clients ou dans un SLA, la définition doit être disponible en langage clair, y compris ce qui est exclu. Les clients doivent avoir un moyen de contester un chiffre, et le responsable doit y répondre (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite un centre de services, trois équipes produit et un groupe d'exploitation. Tous les chiffres ci-dessous sont illustratifs.

La revue mensuelle du service montre un temps de résolution des incidents de 5,1 heures en médiane. Le tableau de bord propre des équipes produit, construit à partir du même outil ITSM, affiche 6,4 heures. Les deux chiffres circulent depuis un an. Un nouveau responsable de service demande qui détient la métrique et reçoit trois réponses différentes.

Le responsable, avec les chefs d'équipe et l'intendant des données, consacre deux séances à un premier registre de 14 métriques rapportées. Parmi elles, 5 n'avaient pas de responsable et 4 avaient deux sources. Le temps de résolution est l'une des métriques à double source. La différence tient à un état de suspension : la revue de service exclut le temps passé en « attente du client », et pas le tableau de bord de l'équipe. Le groupe convient d'une définition unique, nomme le responsable de service comme responsable de la métrique et publie les deux valeurs sur la même page pendant un trimestre, étiquetées par définition, pour que personne ne perde l'historique. Il annote le graphique à l'endroit où la définition change.

À la première revue trimestrielle, le groupe applique un test de retrait et supprime 3 des 14 métriques, dont un graphique mensuel de nombre de tickets qu'aucune décision récente n'avait cité. Il restreint aussi la vue qui ventile le temps de résolution par analyste, en gardant l'intendant des données comme seul détenteur, et propose à la place une ventilation au niveau de l'équipe.

Un risque de détournement apparaît à la deuxième revue. La couverture de la responsabilité atteint 100 %, mais un échantillon montre que deux des responsables sont une liste de diffusion et un chef de département qui n'a jamais ouvert les données. Le groupe les remplace par des responsables de service nommés et ajoute à la revue la question de garde-fou : « Le responsable peut-il expliquer le dernier mouvement de ce chiffre ? » La couverture tombe à 86 % pendant un trimestre, ce que le groupe consigne comme un résultat honnête. La décision consignée est de maintenir l'objectif de couverture jusqu'à ce que le garde-fou ait tourné pendant deux cycles.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez le registre des métriques comme un document vivant que l'équipe met à jour quand elle apprend quelque chose, et non comme un exercice de conception ponctuel. Une habitude pratique est une courte revue régulière où le responsable de la métrique, l'équipe et une partie prenante conviennent de quelles métriques restent, changent ou sont retirées. La précaution est que des petits changements fréquents peuvent casser les tendances : consignez donc chaque changement avec un motif.

### IA

Les métriques sur les systèmes d'IA ont besoin d'un responsable comme les métriques de service, et le responsable doit avoir l'autorité de suspendre le système quand les chiffres disent qu'il nuit aux utilisateurs. Consignez dans le registre quelles métriques décrivent le travail assisté par l'IA et qui revoit leur compagne de qualité. La précaution est que les tableaux de bord d'IA fournis par les éditeurs ont leurs propres définitions : enregistrez-les donc avec la définition de l'éditeur citée et vérifiée.

### Automatisation

Automatisez l'hygiène du registre : signalez les métriques sans responsable, sans date de revue ou sans citation récente dans une décision, et alertez le responsable. La précaution est qu'un rappel automatique auquel personne ne répond est du bruit : mesurez donc combien de signalements débouchent sur une action et retirez ceux qui n'en produisent pas.

### Analytique

Traitez l'accès aux données de métriques comme une question de gouvernance aussi : qui peut voir les données au niveau de l'équipe, qui peut voir les tickets bruts et combien de temps les données sont conservées. La décision qu'éclaire le registre est ce qu'il faut garder, changer ou retirer. La précaution est que l'analytique sur le comportement des personnes peut glisser vers la surveillance : gardez donc les métriques au niveau des équipes et des services et vérifiez les règles de confidentialité qui s'appliquent à vous.

## Éclairage sectoriel

**Startup.** Un fondateur ou un ingénieur principal détient souvent chaque métrique par défaut. Le risque est que les définitions vivent dans une seule tête. Tenez un registre de cinq à huit métriques dans un document partagé, nommez un responsable pour chacune et écrivez les définitions le jour où une métrique apparaît pour la première fois dans une communication aux investisseurs ou aux clients.

**Petite entreprise.** La personne qui s'occupe de l'informatique est généralement responsable, intendant et lecteur des rapports. Limitez la gouvernance à une page, revoyez deux fois par an et faites très attention quand un rapport fourni par un éditeur définit une métrique différemment de la vôtre. Nommez qui, dans l'entreprise, détient chaque chiffre destiné aux clients.

**Grande entreprise.** L'échelle rend la couche partagée indispensable. Utilisez un registre avec flux de travail, un conseil léger qui se réunit chaque trimestre et un rôle d'intendant des données pour chaque domaine majeur. Préservez l'autonomie des équipes pour les mesures de travail et évitez de normaliser des métriques qui devraient différer selon les types de services. S'aligner sur la gouvernance des données déjà présente dans l'organisation économise de l'effort.

**Gouvernement et secteur public.** Le reporting réglementaire, l'audit et les marchés publics font des définitions écrites et des enregistrements de changements une obligation. Traitez le registre comme un artefact d'audit et gardez une ligne claire entre chaque chiffre publié, son responsable et sa source. Les décisions d'accès impliquent souvent un examen juridique et de confidentialité : consignez donc le fondement de chaque vue restreinte (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est modeste et consiste surtout en temps. Comptez quelques heures pour construire un premier registre, une heure ou deux par trimestre pour la revue et un peu d'effort de l'intendant des données pour résoudre les sources en conflit. Les coûts d'outils sont faibles, car un tableur ou un fichier sous contrôle de version suffit pour commencer.

Le rendement est surtout du gaspillage évité. Les réunions consacrées à réconcilier les chiffres disparaissent, les audits trouvent une piste claire et l'intégration d'un nouveau responsable de service est plus rapide parce que les définitions sont écrites. Les décisions sont meilleures parce qu'elles reposent sur des chiffres qui signifient la même chose chaque mois. Ne citez pas de pourcentage pour ces bénéfices sans vos propres données. Si vous avez besoin de chiffres pour un dossier d'affaires, comptez les heures passées le trimestre dernier à réconcilier des chiffres en conflit et le nombre de métriques sans responsable consigné, puis recomptez-les après deux cycles de revue.

## Anti-modèles et pièges

- **La responsabilité par comité.** Un groupe détient la métrique et personne ne répond aux questions. Nommez un rôle responsable et un suppléant.
- **Le registre comme cimetière.** Il est construit une fois et jamais retouché. Mettez les dates de revue au calendrier et affichez la date sur chaque tableau de bord.
- **Tout normaliser.** Une définition unique imposée à des équipes dont le travail diffère produit des chiffres qui ne signifient rien nulle part. Ne partagez que la couche qui doit concorder.
- **Des changements de définition silencieux.** Les tendances se brisent et la confiance suit. Consignez chaque changement avec son motif et annotez le graphique.
- **Une gouvernance sans retrait.** L'ensemble ne fait que croître et l'attention s'amincit. Appliquez un test de retrait à chaque revue.
- **Le secret par défaut.** Cacher les vues de travail aux personnes mesurées engendre la suspicion. Ne restreignez que ce qui porte un risque réel et expliquez pourquoi.
- **L'accès ouvert aux données au niveau individuel.** Un seul extrait peut devenir un classement en quelques jours. Fixez le grain rapporté au niveau de l'équipe et du service, et gardez toute donnée au niveau individuel auprès de l'intendant.
- **Le théâtre de conformité.** Les champs sont remplis pour satisfaire une liste de vérification. Échantillonnez les entrées pour en vérifier la véracité, et demandez aux responsables d'expliquer les mouvements récents.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Responsabilité et registre | Responsables flous ; métriques dans des tableurs individuels | Certaines équipes tiennent une liste avec des responsables | Un registre pour toutes les métriques rapportées, chacune avec un responsable et un rôle nommés | Couverture et actualité suivies ; les écarts mènent à des corrections dotées de moyens | Registre partagé avec les fournisseurs et les clients là où les chiffres franchissent les frontières |
| Définitions et maîtrise des changements | Définitions différentes selon la personne | Écrites pour certaines métriques contractuelles | Définition écrite avec horloges et journal des changements pour chaque métrique rapportée | Changements revus pour leur effet sur les tendances avant publication | Définitions révisées conjointement entre équipes et fournisseurs quand elles cessent d'éclairer des décisions |
| Revue et retrait | Métriques ajoutées, jamais retirées | Nettoyage occasionnel | Cadence de revue et test de retrait écrits | Résultats des revues suivis comme du travail d'amélioration | Retrait et renouvellement routiniers, guidés par les preuves des utilisateurs et des équipes |
| Accès et public | Accès par accident | Vues restreintes pour les données sensibles | Public listé par métrique, avec une raison | Accès revu selon une cadence ; données individuelles tenues par l'intendant | Public conçu avec les personnes mesurées et avec les clients |

## Liste de vérification

- [ ] Un registre des métriques existe et énumère chaque métrique rapportée.
- [ ] Chaque métrique rapportée a un responsable nommé et un rôle consigné.
- [ ] Chaque métrique rapportée a une définition écrite avec des règles de démarrage, d'arrêt et d'exclusion.
- [ ] Chaque métrique a une source faisant autorité nommée dans le registre.
- [ ] Une date de revue et un intervalle sont consignés pour chaque métrique.
- [ ] Les changements de définition sont consignés avec un motif et marqués sur le graphique.
- [ ] Un test de retrait est écrit et appliqué à chaque revue.
- [ ] Le public de chaque vue est consigné, avec une raison pour toute restriction.
- [ ] Aucune vue rapportée ne classe des individus, et les données individuelles sont auprès de l'intendant des données.
- [ ] Le registre a été échantillonné pour en vérifier la véracité au cours du dernier trimestre.

## Prompts d'IA

**Rédigez une charte des métriques pour un ensemble de métriques.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Trouvez les conflits entre deux versions d'une métrique.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Passez en revue un registre de métriques pour y chercher des lacunes.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Planifiez une revue de retrait.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et le garde-fou apparié d'une métrique avant de l'ajouter au registre.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique porte un responsable, un vecteur de détournement et un garde-fou.

## Idées clés

- La gouvernance maintient les chiffres signifiant la même chose dans le temps, et un registre d'une page en est le cœur.
- Nommez un responsable unique pour chaque métrique rapportée, et consignez le rôle autant que la personne.
- Écrivez une définition unique avec ses horloges, calculez-la à un seul endroit et consignez chaque changement.
- Ajustez le poids de la gouvernance aux conséquences de la métrique.
- Décidez à dessein qui voit quelle vue, gardez les données individuelles hors du reporting et retirez les métriques sur preuve.

## Références et lectures complémentaires

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
