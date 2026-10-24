# Métriques de qualité de la configuration et de la CMDB

**Une base de données de configuration ne gagne sa place que lorsque les gens lui font assez confiance pour s'en servir lors d'un changement ou d'un incident : mesurez donc sa qualité par sa capacité à répondre à de vraies questions, et laissez les équipes qui détiennent les services garder leurs propres enregistrements à jour.**

## Vue d'ensemble et motivation

Quand un serveur de base de données tombe en panne à trois heures du matin, quelqu'un demande quels services en dépendent. Quand une équipe prépare un changement, quelqu'un demande ce qui pourrait casser d'autre. Les réponses devraient venir d'un enregistrement des éléments qui composent vos services et de la manière dont ils sont reliés. Cet enregistrement est l'objet de la gestion de la configuration, et la base de données qui le porte est la base de données de gestion de la configuration, généralement abrégée en CMDB.

Un [élément de configuration](https://en.wikipedia.org/wiki/Configuration_item) (CI) est tout composant qu'il faut gérer pour livrer un service informatique : un serveur, une application, une base de données, un équipement réseau, un compte infonuagique, un contrat. Une [base de données de gestion de la configuration](https://en.wikipedia.org/wiki/Configuration_management_database) stocke de l'information sur les CI, leurs attributs et les relations qui les unissent. Là où la gestion des actifs demande ce que vous avez, qui en est responsable et ce que cela coûte (voir le sujet 7.1, Métriques de gestion des actifs informatiques), la gestion de la configuration demande comment les parties s'assemblent et ce qui dépend de quoi.

Les CMDB ont une réputation mitigée, et elle est méritée. Beaucoup ont été construites comme des cartes exhaustives, remplies de données qui se dégradaient plus vite que personne ne pouvait les corriger, puis abandonnées. Les traditions agile et DevOps offrent un meilleur point de départ. Les équipes qui décrivent leur infrastructure sous forme de code disposent d'une définition faisant autorité et versionnée de ce qu'elles exploitent, et elles peuvent la publier automatiquement dans l'enregistrement partagé. L'[infrastructure sous forme de code](https://en.wikipedia.org/wiki/Infrastructure_as_code) fait de l'enregistrement un sous-produit de la livraison. ITIL 4 décrit la pratique comme la gestion de la configuration des services et met l'accent sur l'information nécessaire pour soutenir les décisions, non sur l'exhaustivité pour elle-même.

La qualité d'un enregistrement de configuration comporte plusieurs parties, qui correspondent à l'idée plus large d'[intégrité des données](https://en.wikipedia.org/wiki/Data_integrity) :

- **Complétude :** les CI et les attributs qui comptent sont présents.
- **Exactitude :** ce que dit l'enregistrement correspond à la réalité.
- **Actualité :** les changements apparaissent dans l'enregistrement assez tôt pour être utiles.
- **Cohérence :** la même chose n'est pas enregistrée deux fois sous des noms différents. Apparier des enregistrements qui se rapportent à la même chose est le problème de la [résolution d'entités](https://en.wikipedia.org/wiki/Entity_resolution).
- **Qualité des relations :** les dépendances entre CI sont présentes et justes. C'est là que se trouvent l'essentiel de la valeur, et l'essentiel de la dégradation.

Le test le plus profond d'une CMDB est l'usage. Un enregistrement que les gens consultent pendant les incidents et les changements, et qu'ils corrigent quand il est faux, est sain. Un enregistrement qui n'est qu'audité ne l'est pas. Les mesures ci-dessous apparient donc des mesures de qualité avec des mesures d'usage.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique avec une subtilité : la complétude est facile à gonfler avec des valeurs par défaut, et l'exactitude est facile à affirmer sans vérifier. Exigez des preuves indépendantes et des mesures d'usage (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Partez des questions.** Décidez à quoi l'enregistrement doit répondre, et ne construisez que cela.
- **Préférez un enregistrement plus petit et fiable à un plus grand et douteux.** Le périmètre grandit quand la confiance est gagnée.
- **Laissez la source de vérité alimenter l'enregistrement.** Les pipelines, les API infonuagiques et la découverte doivent y écrire, non des personnes avec des tableurs.
- **Laissez les équipes de service détenir les enregistrements de leurs services.** Elles connaissent leurs dépendances et ressentent le coût des erreurs.
- **Mesurez par l'usage autant que par la qualité.** Un bon enregistrement est consulté.
- **Vérifiez contre la réalité.** Testez l'enregistrement en demandant s'il prédit ce qui arrive.
- **Corrigez à la source.** Un enregistrement faux est un symptôme. Trouvez le processus qui l'a laissé dériver.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Complétude des CI | Part des CI du périmètre dont tous les attributs requis sont renseignés avec des valeurs valides | CI du périmètre avec chaque attribut requis valide / CI du périmètre | pourcentage | CMDB, règles d'attributs | Gestion de la configuration des services ; gestion des actifs informatiques | La définition de terminé inclut la description du service | Mensuelle |
| Exactitude des CI | Part des CI échantillonnés dont l'enregistrement correspond aux preuves sur les attributs requis | CI échantillonnés correspondant sur tous les attributs requis / CI échantillonnés | pourcentage | Échantillon d'audit comparé au système réel | Gestion de la configuration des services | L'état de l'infrastructure sous forme de code correspond à la réalité | Trimestrielle |
| Couverture des dépendances | Part des services critiques dont les dépendances en amont et en aval sont cartographiées et revues | services critiques avec une carte de dépendances revue dans les 90 derniers jours / services critiques | pourcentage | Relations de la CMDB et enregistrements de revue | Gestion de la configuration des services ; gestion de la disponibilité | Revue d'architecture et de responsabilité des services | Trimestrielle |
| Taux de réussite de la prédiction d'impact | Part des incidents et des changements où les services réellement touchés figuraient dans l'impact prédit par la CMDB | incidents ou changements où tous les services touchés étaient prédits / incidents ou changements revus | pourcentage | Revues post-incident et enregistrements de changements comparés aux requêtes de la CMDB | Gestion des incidents ; habilitation des changements | Constat de revue sans blâme sur des dépendances manquantes | Trimestrielle |
| Taux de CI en double | Part des CI qui doublonnent un autre CI | CI signalés comme doublons par des règles d'appariement et confirmés en revue / CI du périmètre | pourcentage | Rapport d'appariement de la CMDB et échantillon de revue | Gestion de la configuration des services | Source unique de vérité | Mensuelle |
| Latence de mise à jour | Délai entre un changement d'un CI dans le monde réel et sa mise à jour dans la CMDB | médiane et 85e percentile des heures ou des jours entre l'événement de changement et la mise à jour de la CMDB | heures ou jours | Événements de changement et de pipeline comparés aux horodatages de la CMDB | Gestion de la configuration des services ; habilitation des changements | Enregistrement automatisé dans le pipeline | Mensuelle |
| Taux d'usage de la CMDB | Part des incidents et des changements qui référencent des CI, et, parmi eux, part où les utilisateurs déclarent que l'enregistrement a aidé | enregistrements référençant un CI valide / incidents et changements de la période ; plus part des enregistrements revus où les données du CI ont aidé | pourcentage | Outil ITSM, courte invite de retour | Gestion des incidents ; habilitation des changements | Équipes utilisant l'enregistrement partagé dans leur travail | Mensuelle |

Définissez le périmètre de « CI du périmètre » par classe et par criticité, et consignez-le. Un CI n'est exact que sur les attributs que vous nommez comme requis. La latence de mise à jour démarre à l'événement réel, comme un déploiement ou un achat, et s'arrête quand la CMDB le reflète. Le taux de réussite de la prédiction d'impact exige une étape de revue qui consigne quels services ont réellement été touchés, et il n'est fiable que dans la mesure de cette revue.

## Recommandations

### Décider à quoi sert l'enregistrement

**1. Écrivez les questions auxquelles la CMDB doit répondre.** Des questions typiques sont : de quoi dépend ce composant, qui est responsable de ce service, qu'est-ce qui a changé récemment, qu'est-ce qu'une défaillance ici toucherait et qu'est-ce qui n'est plus soutenu. Pour chaque question, nommez les classes de CI, les attributs et les relations nécessaires. Tout ce qui n'est pas nécessaire pour répondre à une question est candidat à l'exclusion.

**2. Commencez par les services qui comptent le plus.** Choisissez la poignée de services critiques, cartographiez-les de bout en bout et réussissez cela avant d'en ajouter. Une carte fiable de dix services aide davantage qu'une carte douteuse de mille. Étendez à mesure que la confiance et l'usage grandissent.

**3. Définissez simplement les classes, les attributs et les types de relations.** Une courte liste de classes de CI (service, application, base de données, hôte, réseau, ressource infonuagique) et de types de relations (dépend de, s'exécute sur, se connecte à, détenu par) couvre l'essentiel des besoins. Un modèle qui tente de tout capturer est difficile à remplir et plus difficile à interroger. Tenez un modèle écrit et changez-le délibérément.

### Alimenter l'enregistrement depuis la source

**4. Publiez depuis les pipelines et le code.** Là où l'infrastructure et les applications sont définies sous forme de code, faites créer, mettre à jour et retirer les CI par le pipeline de livraison à chaque changement, y compris l'information de responsabilité et de dépendance déclarée à côté du code. Traitez la déclaration comme une partie de la définition de terminé d'un service. La latence de mise à jour est ainsi proche de zéro et l'enregistrement reste aligné sur ce qui tourne.

**5. Utilisez la découverte comme second avis.** La [découverte de services](https://en.wikipedia.org/wiki/Service_discovery) réseau et infonuagique trouve ce qui tourne réellement et comment cela se connecte. Comparez-la avec l'enregistrement déclaré. Les différences sont des constats : soit la déclaration omet quelque chose, soit quelque chose tourne qui ne devrait pas. La découverte seule produit des données bruitées sans responsabilité : servez-vous-en pour vérifier, non pour rédiger.

**6. Utilisez des identifiants stables et des règles d'appariement.** Les doublons surviennent quand différentes sources nomment la même chose différemment. Convenez d'un identifiant unique pour chaque classe de CI, consignez les identifiants sources et exécutez des règles d'appariement pour trouver et fusionner les doublons. Revoyez à la main un échantillon des appariements, car la fusion automatique peut combiner des choses différentes.

**7. Donnez à chaque équipe de service la responsabilité de sa part.** L'équipe qui construit et exploite un service est la mieux placée pour connaître ses dépendances et remarquer les erreurs. Facilitez-lui la tâche : un modèle, une courte revue à la planification et un retour quand ses données sont utilisées. Les équipes centrales détiennent le modèle, les outils et les contrôles, non chaque enregistrement.

### Mesurer la qualité et l'usage

**8. Auditez l'exactitude par échantillonnage.** Chaque trimestre, tirez un échantillon aléatoire de CI et vérifiez-les contre les systèmes réels, et un second échantillon tiré des systèmes réels pour vérifier qu'ils figurent dans l'enregistrement. Rapportez l'exactitude par classe et montrez les principales sources d'erreur. Gardez la méthode d'échantillonnage fixe pour que les tendances signifient quelque chose.

**9. Testez la carte contre les incidents.** Après un incident ou un changement important, comparez les services réellement touchés avec ce que la CMDB avait prédit. Consignez les ratés et corrigez les dépendances manquantes. C'est le test d'exactitude le plus significatif, car il vérifie l'enregistrement contre des événements, et le taux de réussite s'améliore à mesure que la carte est corrigée. Utilisez des revues sans blâme pour que les gens rapportent volontiers les ratés (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

**10. Suivez l'usage et demandez si cela a aidé.** Comptez la fréquence à laquelle les incidents et les changements référencent des CI, et posez aux intervenants et aux approbateurs une courte question sur l'aide apportée par l'enregistrement. Un taux d'usage en hausse avec des réponses positives est le signe le plus clair de valeur. Un faible taux d'usage signifie que les gens ne font pas confiance à l'enregistrement ou ne savent pas qu'il existe, et les deux se corrigent.

**11. Revoyez régulièrement les cartes de dépendances avec les responsables.** Les dépendances changent à mesure que le logiciel évolue. Demandez aux responsables des services critiques de confirmer leurs cartes chaque trimestre, idéalement dans le cadre d'une conversation de planification ou d'architecture. Utilisez la date de confirmation comme attribut et montrez les cartes en retard.

### Rester honnête et proportionné

**12. Retirez ce que personne n'utilise.** Retirez les classes de CI et les attributs dont aucune question n'a besoin et que personne ne consulte. Moins de champs, mieux tenus, élèvent l'exactitude. Revoyez le modèle chaque année et consignez ce qui a été retiré et pourquoi. Un enregistrement plus petit est moins à garder exact, et il rend les mesures de qualité plus faciles à atteindre honnêtement.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Complétude des CI | Remplir les attributs requis avec des valeurs par défaut ou fictives ; restreindre la liste requise | Compter les valeurs par défaut et fictives ; liste requise fixe ; échantillon d'exactitude |
| Exactitude des CI | Échantillonner les classes faciles ; auditer après un ménage | Échantillon aléatoire tiré indépendamment dans les deux sens ; méthode fixe |
| Couverture des dépendances | Marquer des cartes comme revues sans les lire ; ne cartographier que des dépendances triviales | Taux de réussite de la prédiction d'impact ; vérifier par sondage une carte contre le trafic réel |
| Taux de réussite de la prédiction d'impact | Choisir les incidents qui se sont bien passés ; consigner étroitement les services touchés | Revoir tous les incidents importants ; réviseurs extérieurs à l'équipe responsable |
| Taux de CI en double | Fusionner des CI distincts pour abaisser le taux ; assouplir les règles d'appariement | Échantillonner les fusions pour leur justesse ; consigner les règles de fusion |
| Latence de mise à jour | Antidater les événements de changement ; ne compter que les mises à jour automatisées | Comparer les horodatages des événements et des mises à jour des systèmes sources ; piste d'audit |
| Taux d'usage de la CMDB | Ajouter des références de CI par formalité ; rendre le champ obligatoire avec n'importe quelle valeur | Vérifier que les CI référencés sont pertinents ; question de retour sur l'aide apportée |

Une lecture saine est un enregistrement plus petit avec une exactitude mesurée élevée, des cartes de dépendances qui prédisent de vrais incidents, une latence de mise à jour proche de zéro pour les classes automatisées, et des gens qui disent s'en servir parce que cela les aide.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| CMDB exhaustive | Vue large ; soutient de nombreux cas d'usage | Coûteuse à garder exacte ; se dégrade |
| CMDB minimale pilotée par les questions | Fiable et peu coûteuse | Lacunes ; demande de la discipline de croissance |
| Alimentation par la découverte | Trouve l'inconnu ; peu d'effort manuel | Bruitée ; manque de responsabilité et de raison d'être |
| Alimentation par les pipelines | Exacte ; faible latence | Limitée à ce qui est construit par les pipelines |
| Responsabilité centrale des enregistrements | Cohérence | Lente ; loin de la connaissance |
| Responsabilité des enregistrements par les équipes | Exacte et rapide | Variation ; demande des modèles et des contrôles |
| Modèle en graphe | Naturel pour les relations et les requêtes d'impact | Demande des compétences et de l'outillage |
| Modèle en tables relationnelles | Familier et simple | Maladroit pour les requêtes de dépendances profondes |

La réponse en bref est de commencer petit et piloté par les questions, d'alimenter depuis les pipelines avec la découverte comme second avis, et de mettre les équipes de service aux commandes de leurs enregistrements. Une [base de données en graphe](https://en.wikipedia.org/wiki/Graph_database) peut rendre naturelles les questions de dépendance, bien qu'une base de données conventionnelle marche si le modèle reste simple.

## Questions à discuter avec votre équipe

**1. Quelle est la dernière question à laquelle nous aurions voulu que la CMDB réponde, et le pouvait-elle ?**
Rappelez un incident ou un changement récent où quelqu'un a cherché des dépendances. Qu'a-t-il trouvé, et qu'a-t-il fait à la place ? L'animateur doit consigner la question et si l'enregistrement a été consulté. Le résultat est le premier candidat à l'objectif de l'enregistrement.

**2. Si notre service le plus important tombait maintenant, quelle confiance avons-nous dans l'impact prédit ?**
Demandez l'impact prédit par la CMDB et comparez-le à ce que croient les personnes qui connaissent le service. Notez les différences. Convenez de la dépendance à vérifier en premier et de qui la vérifiera.

**3. Qui détient l'enregistrement de chaque service, et le sait-il ?**
Listez les services critiques et les responsables de leurs entrées dans la CMDB. Demandez si les responsables le savent et les ont revues récemment. Là où le responsable est « l'équipe de la CMDB », discutez de la façon de transférer la responsabilité à l'équipe de service.

**4. Que remplissons-nous seulement pour satisfaire un champ obligatoire ?**
Cherchez les valeurs par défaut et fictives. Elles montrent où le modèle demande plus que personne ne sait. Décidez s'il faut retirer le champ, l'automatiser ou trouver la vraie source.

**5. Où notre enregistrement diverge-t-il de ce qui tourne ?**
Comparez la sortie de la découverte avec l'enregistrement pour un service. Pour chaque différence, demandez si c'est l'enregistrement ou la réalité qui doit changer. La conversation tend à trouver autant des données périmées que des composants non autorisés.

**6. Que cesserions-nous de consigner ?**
Listez les classes, attributs et relations que personne n'a utilisés depuis six mois. Demandez ce qui arriverait si chacun disparaissait. Convenez d'en retirer deux et d'observer si quelqu'un le remarque.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent la connaissance de ce dont dépendent leurs services et sont les mieux placées pour garder l'enregistrement exact. Elles doivent déclarer la responsabilité et les dépendances à côté de leur code, les revoir quand la conception change et se servir de l'enregistrement pour planifier les changements. Une définition de terminé qui inclut la mise à jour de la description du service garde l'enregistrement près du travail.

### Équipes de service et d'exploitation

Les équipes d'exploitation consultent l'enregistrement pendant les incidents et les changements, et en ressentent donc les erreurs en premier. Elles doivent rapporter les ratés dans les revues, mener des contrôles de découverte, tenir les règles d'appariement et donner du retour aux responsables. Elles exploitent aussi l'outillage et les échantillons d'audit.

### Direction et gouvernance

Les dirigeants veulent l'impact et le risque visibles, et ils parrainent souvent de grands programmes de CMDB qui déçoivent. Ils doivent demander des preuves d'usage et d'exactitude plutôt que des décomptes d'enregistrements, financer l'intégration des pipelines et accepter un périmètre plus petit bien réalisé. La gouvernance doit s'attendre à voir le taux de réussite de la prédiction d'impact et la liste des écarts.

### Clients et utilisateurs

Les utilisateurs profitent d'incidents diagnostiqués plus vite et de changements moins susceptibles de casser des services dépendants. Ils voient rarement la CMDB, mais ils en voient les effets dans des communications qui nomment correctement les services touchés et dans moins de surprises après les changements. Leur retour après les incidents montre si le tableau d'impact était juste.

## En pratique : un exemple de gestion des services

Le groupe technologique d'une compagnie aérienne nationale exploite environ 300 applications et une plateforme de réservation pour les clients. Les chiffres ci-dessous sont illustratifs.

La CMDB contient 180 000 CI et a été alimentée par un outil de découverte il y a cinq ans. La responsable de la gestion des services veut savoir si elle vaut la peine d'être gardée. Elle demande à une petite équipe de la tester. Pour la qualité, ils auditent 150 CI échantillonnés et les trouvent exacts à 71 % sur les cinq attributs requis. Pour la carte, ils revoient les 20 derniers incidents importants et comparent les services réellement touchés avec ce que la CMDB avait prédit : elle prédisait tous les services touchés dans 6 cas sur 20, soit un taux de réussite de 30 %. Pour l'usage, 12 % des incidents du dernier trimestre référençaient un CI, et dans une courte enquête auprès des intervenants, la plupart disaient s'appuyer sur une page de wiki distincte. Les CI en double représentent 9 % du total.

L'équipe prend quatre décisions avec les responsables de services. Elle réduit le périmètre aux 40 services qui portent le plus de clients, avec cinq classes de CI et quatre types de relations. Elle demande à chaque équipe de service de déclarer responsable, dépendances et emplacement d'exécution dans un court fichier conservé avec son code, que le pipeline publie dans la CMDB à chaque version. Elle exécute la découverte chaque semaine et rapporte les différences aux responsables. Elle ajoute un champ à la revue d'incident, « la prédiction de la CMDB était-elle juste ? », et corrige chaque raté en deux semaines.

Deux trimestres plus tard, la CMDB à périmètre réduit compte 14 000 CI, l'exactitude sur l'échantillon est de 92 %, la latence de mise à jour de la version à l'enregistrement est de moins d'une heure pour les services dans le pipeline, et le taux de réussite sur les 12 derniers incidents est de 75 %. L'usage de la CMDB dans les incidents est monté à 58 %, et les intervenants disent que la page de wiki n'est plus nécessaire. Le directeur des opérations demande un plan pour y intégrer les 260 autres applications d'un coup. La responsable de la gestion des services propose d'ajouter dix services par trimestre, après que chacun a atteint un taux de réussite supérieur à un niveau convenu lors d'un incident de test, et explique que l'ancien enregistrement large n'avait jamais été fiable. La décision est consignée, avec une revue chaque trimestre.

## Agilité, IA, automatisation et analytique

### Agilité

Laissez les équipes de service garder leurs propres enregistrements à jour dans le cadre de leur travail, et revoyez la qualité avec elles régulièrement. La précaution est qu'un objectif de complétude seul produit des enregistrements remplis de valeurs fictives.

### IA

L'IA peut déduire des dépendances, suggérer des enregistrements et répondre à des questions à partir des données de configuration, et les systèmes d'IA sont eux-mêmes des éléments de configuration. Suivez le taux de réussite de la prédiction d'impact pour les dépendances suggérées par l'IA face aux vrais incidents. La précaution est qu'une IA qui devine des dépendances peut polluer l'enregistrement avec des erreurs plausibles.

### Automatisation

Alimentez les enregistrements depuis la découverte et l'infrastructure sous forme de code, et mesurez la latence de mise à jour. La précaution est que la découverte automatisée peut créer des éléments en double ou périmés sans règles d'identité claires.

### Analytique

Jugez la base de données à sa capacité de répondre aux questions dans de vrais changements et incidents, et rapportez le taux d'usage. La décision éclairée est où améliorer les données. La précaution est que l'exactitude se mesure par échantillonnage : montrez donc la taille de l'échantillon.

## Éclairage sectoriel

**Startup.** Il y a peu de besoin d'une CMDB au-delà d'un catalogue de services et du code d'infrastructure. Gardez les responsables de services et les dépendances dans le dépôt, et générez-en une carte. N'ajoutez une base de données que lorsque les questions dépassent les fichiers.

**Petite entreprise.** Un simple schéma et une liste de systèmes avec responsables et fournisseurs peuvent suffire. Mettez-le à jour après chaque changement important. Résistez à l'achat d'une plateforme pour un petit parc, mais gardez le schéma à jour, car il est inestimable lors d'une panne.

**Grande entreprise.** L'échelle demande un modèle, une responsabilité fédérée et l'intégration de plusieurs sources, y compris celles des acquisitions. Standardisez les identifiants et le modèle de base, laissez les équipes l'étendre dans des règles, et mesurez l'usage et l'exactitude par domaine. Attendez-vous à devoir faire tourner en permanence une fonction d'appariement et de nettoyage.

**Gouvernement et secteur public.** Les services reposent souvent sur des systèmes anciens, des prestataires et des infrastructures partagées, et l'impact d'un incident peut toucher le public. Cartographiez explicitement les dépendances envers les fournisseurs et les plateformes partagées, conservez les enregistrements pour les audits et alignez-vous sur la planification de la continuité (voir le sujet 5.6, Métriques de continuité de service).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de modélisation et de gouvernance, l'intégration des pipelines et de la découverte, un peu d'outillage, et l'effort des audits et des corrections. Beaucoup d'organisations possèdent déjà la plateforme. L'alimentation par pipeline est peu coûteuse une fois le modèle en place. Les grands programmes visant à tout alimenter d'un coup ont été coûteux et ont souvent échoué.

Les rendements sont des incidents plus courts, des changements plus sûrs et moins de temps passé à chercher de l'information. Construisez le dossier à partir de vos propres preuves : le temps que les intervenants passent à chercher des dépendances dans un incident typique, la part des incidents où l'absence d'information de dépendance a retardé le diagnostic, et les changements qui ont causé un impact inattendu. Le taux de réussite de la prédiction d'impact mesure directement si l'enregistrement aurait aidé. Évitez les affirmations publiées sur le pourcentage d'incidents causés par le changement ou le coût des pannes à moins de pouvoir en retracer la source. Comptez le coût de garder un enregistrement grand et douteux face à la valeur d'un petit enregistrement fiable.

## Anti-modèles et pièges

- **Tout alimenter d'abord.** Un énorme enregistrement périmé détruit la confiance. Commencez par les services critiques.
- **La découverte comme seule source.** Elle ne peut dire ni pourquoi quelque chose existe ni qui en est responsable. Combinez-la avec des déclarations.
- **Auditer la complétude et l'appeler qualité.** Complet et faux est pire qu'incomplet et juste. Échantillonnez pour l'exactitude.
- **Des équipes centrales détenant toutes les données.** Elles ne les connaissent pas. Donnez la responsabilité aux équipes de service.
- **Des champs obligatoires avec valeurs par défaut.** Ils paraissent complets et ne portent aucune information. Retirez-les ou automatisez-les.
- **Mesurer par le nombre de CI.** Plus n'est pas mieux. Mesurez l'exactitude, le taux de réussite et l'usage.
- **Ignorer les relations.** Sans dépendances, une CMDB est un inventaire. Investissez dans la carte des services critiques.
- **Blâmer les gens pour les ratés.** Ils cessent de les rapporter. Traitez une dépendance manquée comme un constat.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Périmètre et modèle | Ce que la découverte a trouvé | Modèle défini ; périmètre large | Modèle piloté par les questions ; services critiques cartographiés | Le périmètre grandit quand le taux de réussite et l'usage le justifient | Modèle fédéré entre équipes et fournisseurs ; identifiants partagés |
| Alimentation et qualité | Chargement manuel ou ponctuel | Découverte et imports planifiés | Les pipelines publient depuis le code ; découverte comme contrôle ; audits par échantillonnage | Exactitude, latence et doublons mesurés et suivis dans le temps | Flux en temps réel avec rapprochement automatisé et confirmation des responsables |
| Usage | Rarement consultée | Utilisée par quelques équipes | Référencée dans les incidents et les changements comme pratique standard | Prédiction d'impact testée contre les incidents ; usage et utilité suivis | L'enregistrement éclaire des décisions automatisées et des cartes de fournisseurs partagées |

## Liste de vérification

- [ ] Les questions auxquelles la CMDB doit répondre sont écrites.
- [ ] Le périmètre est limité aux services critiques, avec une règle de croissance définie.
- [ ] Le modèle comporte un petit ensemble de classes, d'attributs et de types de relations.
- [ ] Chaque service critique a un responsable qui a confirmé son enregistrement au dernier trimestre.
- [ ] Les pipelines publient les changements de CI pour les services construits sous forme de code.
- [ ] Les résultats de la découverte sont comparés à l'enregistrement et les différences sont revues.
- [ ] Un échantillon aléatoire d'exactitude est audité chaque trimestre dans les deux sens.
- [ ] Les revues d'incident consignent si l'impact prédit était juste.
- [ ] L'usage de la CMDB dans les incidents et les changements est suivi, avec une question d'utilité.
- [ ] Les classes et attributs inutilisés sont retirés selon un calendrier.

## Prompts d'IA

**Définissez les questions et le périmètre.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Analysez un raté de prédiction d'impact.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Concevez un fichier de déclaration pour les équipes de service.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Planifiez un audit d'exactitude trimestriel.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de qualité de la configuration.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de CMDB porte son vecteur de détournement, son garde-fou et sa règle de preuve indépendante.

## Idées clés

- Construisez la CMDB pour répondre à des questions nommées sur les services qui comptent le plus, et faites-la grandir à mesure que la confiance grandit.
- Alimentez-la depuis les pipelines et le code, utilisez la découverte comme second avis et laissez les équipes de service détenir leurs enregistrements.
- Testez la qualité contre des événements : comparez l'impact prédit avec ce qui s'est réellement passé dans les incidents.
- Mesurez l'usage et l'utilité, non le nombre de CI.
- Échantillonnez l'exactitude à partir de preuves indépendantes dans les deux sens.
- Retirez ce que personne n'utilise, et corrigez les erreurs à leur source.

## Références et lectures complémentaires

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
