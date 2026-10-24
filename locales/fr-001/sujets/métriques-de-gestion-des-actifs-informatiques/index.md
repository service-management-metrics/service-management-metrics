# Métriques de gestion des actifs informatiques

**Vous ne pouvez pas soutenir, sécuriser ou payer raisonnablement ce que vous ne pouvez pas trouver : mesurez donc l'exactitude, la complétude et l'actualité de vos enregistrements d'actifs, et prenez l'habitude de saisir les actifs comme un sous-produit du travail quotidien plutôt que lors d'un ménage annuel.**

## Vue d'ensemble et motivation

Chaque service repose sur des choses : ordinateurs portables, serveurs, licences, comptes infonuagiques, équipements réseau, et les données et contrats qui leur sont attachés. La [gestion des actifs informatiques](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) est l'ensemble des pratiques de gestion qui joignent les fonctions financières, contractuelles et d'inventaire pour soutenir la gestion du cycle de vie et la prise de décision stratégique pour l'environnement informatique. Elle répond à des questions dont d'autres pratiques dépendent. Que possédons-nous ? Où cela se trouve-t-il ? Qui en est responsable ? Combien cela coûte-t-il ? Quand faut-il le renouveler, le corriger ou le remplacer ?

La livraison continue et ITIL se rencontrent maladroitement sur ce terrain. Les équipes qui livrent du logiciel en continu créent et détruisent de l'infrastructure tout le temps : des conteneurs, des machines virtuelles, des environnements de test et des comptes infonuagiques apparaissent en quelques minutes. Un tableur trimestriel ne peut pas suivre. L'ITAM de la tradition ITIL insiste sur les enregistrements, les responsables et les cycles de vie, et cette insistance est juste, car les actifs non gérés sont l'endroit où poussent les failles de sécurité, l'argent gaspillé et les manquements de conformité. L'apport agile est la collaboration continue entre les achats, la finance, la sécurité et l'exploitation, et l'habitude pratique d'enregistrer automatiquement les actifs au moment de leur création, par des pipelines et de l'infrastructure sous forme de code, pour que l'enregistrement soit un sous-produit du travail.

Trois termes reviennent dans ce sujet.

- **Actif :** un élément de valeur pour l'organisation qui est géré tout au long d'un cycle de vie. En ITAM, cela inclut le matériel, les logiciels, les ressources infonuagiques, les abonnements et parfois les données.
- **Enregistrement d'actif :** l'entrée qui décrit un actif : ce que c'est, qui en est responsable, où il se trouve, dans quel état il est, ce qu'il coûte et à quoi il est lié.
- **Cycle de vie :** les étapes par lesquelles passe un actif, typiquement demandé, acquis, reçu, déployé, en usage, entretenu, retiré et éliminé. La pensée du [cycle de vie du produit](https://en.wikipedia.org/wiki/Product_lifecycle) s'applique à chaque classe d'actifs, avec des étapes différentes pour un ordinateur portable et pour un abonnement infonuagique.

L'ITAM recoupe la gestion de la configuration, qui suit les relations entre composants pour comprendre l'impact d'un changement, et les sujets suivants traitent tour à tour les logiciels, le matériel et la configuration (voir le sujet 7.2, Métriques des actifs logiciels et des licences, le sujet 7.3, Métriques du cycle de vie des actifs matériels, et le sujet 7.4, Métriques de qualité de la configuration et de la CMDB). La différence tient à l'objectif : la gestion des actifs met l'accent sur la responsabilité, le coût et le cycle de vie, alors que la gestion de la configuration met l'accent sur la structure et la dépendance. Le même inventaire alimente souvent les deux.

La norme que la plupart des programmes d'ITAM citent est l'ISO/IEC 19770, une famille de normes pour les systèmes de gestion des actifs informatiques. Citez-la par son nom et son périmètre, et lisez-la auprès de l'organisme de normalisation avant de vous appuyer sur un détail. Ce sujet ne reproduit pas son texte.

Les métriques d'actifs sont faciles à transformer en objectifs, et les objectifs sont faciles à atteindre sur le papier. Un inventaire peut afficher 100 % d'exactitude parce qu'il n'enregistre que ce qui était déjà connu. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : mesurez l'exactitude contre des preuves indépendantes, et traitez un chiffre parfait comme une raison de chercher davantage (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Enregistrez au moment du changement.** Les actifs doivent entrer dans l'enregistrement et en sortir au fil du travail qui les crée ou les supprime.
- **Mesurez contre des preuves indépendantes.** L'exactitude signifie l'accord avec la réalité, vérifié par une méthode autre que l'enregistrement lui-même.
- **Chaque actif a un responsable.** Un actif dont personne n'est responsable ne sera pas corrigé, payé raisonnablement ni retiré.
- **Gardez l'enregistrement aussi petit que possible.** Saisissez les champs dont les décisions ont besoin, et pas plus.
- **Combinez les sources.** Les outils de découverte, les achats, la finance, l'identité et la facturation infonuagique voient chacun une partie du parc.
- **Collaborez entre fonctions.** Les achats, la finance, la sécurité et l'exploitation partagent l'enregistrement et sa qualité.
- **Traitez les écarts comme de l'information.** Un actif introuvable est un constat à comprendre, non un échec à cacher.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exactitude de l'inventaire | Part des actifs échantillonnés dont l'enregistrement correspond à ce qui est trouvé | actifs échantillonnés dont l'enregistrement correspond aux preuves physiques ou techniques sur tous les champs convenus / actifs échantillonnés | pourcentage | Échantillon d'audit comparé au registre des actifs et aux données de découverte | Gestion des actifs informatiques ; gestion de la configuration | La définition de terminé inclut l'enregistrement de l'actif | Trimestrielle |
| Couverture de la découverte | Part des actifs attendus vus par la découverte dans la période | actifs vus par au moins une source de découverte dans les 30 derniers jours / actifs du registre que la découverte peut voir | pourcentage | Rapports de l'outil de découverte joints au registre | Gestion des actifs informatiques ; supervision et gestion des événements | L'état de l'infrastructure sous forme de code correspond à la réalité | Mensuelle |
| Taux de rapprochement | Part des actifs appariés entre sources indépendantes | actifs appariés dans le registre et dans une seconde source (par exemple achats, identité ou facturation infonuagique) / actifs de l'une ou l'autre source | pourcentage | Exports du registre, des achats, de l'identité et de la facturation infonuagique | Gestion des actifs informatiques ; gestion des fournisseurs | Source unique de vérité pour les environnements | Mensuelle |
| Part d'actifs sans responsable | Part des actifs sans responsable nommé et valide | actifs sans responsable ou dont le responsable est parti / actifs du registre | pourcentage | Registre joint à l'annuaire des personnes | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Responsabilité claire des services et des composants | Mensuelle |
| Complétude de l'étape du cycle de vie | Part des actifs ayant une étape du cycle de vie à jour et les dates que cette étape exige | actifs dont l'étape et les dates requises sont consignées / actifs du registre | pourcentage | Registre | Gestion des actifs informatiques ; gestion des versions et des déploiements | Cycle de vie des environnements suivi dans le pipeline | Mensuelle |
| Délai d'enregistrement | Délai entre un changement d'actif et sa mise à jour dans le registre | médiane et 85e percentile des heures ou des jours entre l'événement de changement et la mise à jour du registre | jours | Événements de changement, d'achat ou de pipeline comparés aux horodatages du registre | Gestion des actifs informatiques ; maîtrise des changements | Enregistrement automatisé dans le pipeline | Mensuelle |
| Taux d'actifs introuvables | Part des actifs attendus qui ne peuvent être localisés ou expliqués à l'audit | actifs attendus mais non trouvés et non expliqués par une élimination approuvée / actifs attendus | pourcentage | Résultats d'audit | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Constat rétrospectif sur des éléments perdus | Par audit |

Énoncez le périmètre d'« actif » pour chaque classe. Un ordinateur portable, une machine virtuelle, un abonnement et une licence sont différents, et les champs de l'enregistrement et les preuves diffèrent. Le délai d'enregistrement démarre à l'événement qui a créé le changement, comme la réception de marchandises, une exécution de pipeline ou le début d'un abonnement, et s'arrête quand le registre le reflète. Excluez les actifs intentionnellement hors périmètre, comme les conteneurs de test de courte durée, et listez-les comme classe d'exclusion dans le registre.

## Recommandations

### Décider ce que vous gérez

**1. Listez les classes d'actifs qui comptent et pourquoi.** Commencez par celles qui portent un coût, un risque ou une obligation légale : appareils des utilisateurs, serveurs et comptes infonuagiques, équipements réseau, licences et abonnements logiciels, et magasins de données critiques. Pour chaque classe, écrivez les décisions que l'enregistrement doit soutenir : correctifs, renouvellement, audit, renouvellement du parc, élimination. Laissez de côté les classes dont aucune décision n'a besoin.

**2. Définissez les champs minimaux.** Pour chaque classe, choisissez les quelques champs que les décisions exigent : identifiant, type, responsable, emplacement ou compte, statut, dates d'acquisition et de fin, centre de coûts et liens vers le service qu'il soutient. Un enregistrement court et exact vaut plus qu'un long enregistrement périmé. Consignez la définition dans le registre des métriques.

**3. Attribuez un responsable à chaque classe et à chaque actif.** Le responsable de la classe conçoit l'enregistrement et le processus. Le responsable de l'actif est la personne ou l'équipe redevable de l'actif en usage. Utilisez une équipe, non un individu, quand un actif est partagé, et gardez l'annuaire à jour pour que les départs n'orphelinent pas des actifs.

### Saisir les actifs au fil du travail

**4. Enregistrez les actifs dans le pipeline.** Là où l'infrastructure est créée par du code, faites écrire le pipeline dans le registre à la création et à la suppression. Le délai d'enregistrement tombe ainsi près de zéro et le registre s'accorde avec le code. La pratique agile de livrer le changement en continu le soutient : si chaque déploiement met à jour l'enregistrement, celui-ci est rarement faux.

**5. Reliez les achats et le registre.** Pour le matériel et les logiciels achetés, faites de la commande d'achat ou de la création d'abonnement le déclencheur d'un enregistrement, et de la réception des marchandises ou de l'activation le déclencheur d'un changement d'état. La pratique de la [gestion des stocks](https://en.wikipedia.org/wiki/Inventory_management) pour les biens physiques offre des schémas utiles pour la réception, le stockage et la remise d'articles. Là où des achats se font hors des achats officiels, comme les cartes de crédit d'équipe pour des abonnements, ajoutez une vérification mensuelle des données de dépenses.

**6. Utilisez la découverte comme contrôle, non comme enregistrement.** Les outils de découverte balayent les réseaux et les comptes infonuagiques et rapportent ce qu'ils trouvent. Ils sont bons pour dire ce qui existe et mauvais pour dire qui en est responsable ou pourquoi. Servez-vous-en pour détecter les actifs manquants et inconnus et pour comparer avec le registre. L'étape qui consiste à apparier une source avec une autre est une forme de [rapprochement](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), la même idée que les comptables utilisent pour comparer deux ensembles d'enregistrements.

**7. Étiquetez à la création.** Exigez un responsable et une étiquette de service sur chaque ressource infonuagique et une étiquette sur chaque appareil physique. Les méthodes de [suivi des actifs](https://en.wikipedia.org/wiki/Asset_tracking) comme les codes-barres et les étiquettes radiofréquence aident pour les articles physiques dans les entrepôts et les bureaux. Les ressources non étiquetées sont des constats pour l'équipe du responsable, traités comme une partie normale de l'exploitation.

### Mesurer honnêtement

**8. Auditez avec un échantillon aléatoire.** Chaque trimestre, tirez au hasard un échantillon d'actifs du registre et vérifiez-les contre des preuves : trouvez l'appareil, inspectez la ressource, confirmez le responsable. Tirez ensuite un échantillon dans l'autre sens, à partir des résultats de découverte et des données d'achat, et vérifiez que chacun figure dans le registre. Les deux directions révèlent des écarts différents. Rapportez l'exactitude de chaque classe séparément.

**9. Surveillez la qualité des données dans le temps.** La complétude, l'exactitude et l'actualité des enregistrements sont des aspects de la [qualité des données](https://en.wikipedia.org/wiki/Data_quality). Suivez la tendance par champ et par classe, et regardez quels champs dérivent le plus vite. La dérive du responsable et de l'emplacement est normale et vous dit où automatiser.

**10. Rapportez les écarts.** Montrez les actifs introuvables, la part sans responsable et les éléments non rapprochés, en plus de l'exactitude globale. Un rapport qui cache ses exceptions est un rapport sur le rapport. Nommez un responsable et une date pour chaque classe d'écart.

### Boucler la boucle

**11. Retirez les actifs aussi délibérément que vous les créez.** L'élimination demande aussi des enregistrements : la date, la méthode et, pour les appareils qui contenaient des données, la preuve que les données ont été effacées. Un enregistrement de [chaîne de traçabilité](https://en.wikipedia.org/wiki/Chain_of_custody) montre qui a manipulé un actif et quand. Les actifs retirés encore au registre gonflent les coûts et embrouillent les audits.

**12. Utilisez l'enregistrement dans les décisions de tous les jours.** Les correctifs, les renouvellements, la réponse de sécurité et la budgétisation doivent lire le registre. Quand les gens s'en servent, ils le corrigent. Quand le registre ne sert qu'aux audits, il se dégrade. Revoyez l'usage du registre avec les équipes qui en dépendent, et corrigez d'abord les champs dont elles se plaignent.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Exactitude de l'inventaire | Échantillonner les actifs faciles ; n'auditer qu'après un ménage ; compter une correspondance sur moins de champs | Échantillon aléatoire tiré par quelqu'un d'extérieur à l'équipe ; liste de champs fixe ; échantillon dans les deux sens |
| Couverture de la découverte | Restreindre les « actifs attendus » à ce que la découverte peut voir ; exclure les réseaux difficiles à balayer | Documenter les exclusions ; comparer avec les achats et la facturation infonuagique |
| Taux de rapprochement | Choisir une seconde source dérivée de la première ; apparier automatiquement sur des clés faibles | Utiliser des sources réellement indépendantes ; vérifier les correspondances à la main par sondage |
| Part d'actifs sans responsable | Attribuer une équipe fourre-tout comme responsable ; saisir une personne fictive | Nombre d'actifs détenus par des équipes fourre-tout ; échantillon de confirmation des responsables |
| Complétude de l'étape du cycle de vie | Remplir des dates par défaut ; mettre chaque actif à « en usage » | Comparer l'étape avec les preuves à l'audit ; regarder la distribution des âges |
| Délai d'enregistrement | Antidater les événements de changement ; saisir l'heure de l'événement comme heure de l'enregistrement | Comparer avec les horodatages du système source ; piste d'audit sur les modifications |
| Taux d'actifs introuvables | Radier des actifs sans approbation ; les reclasser comme éliminés | Taux d'approbation et de preuve de l'élimination ; comparer les radiations avec les enregistrements financiers |

Une lecture saine est un chiffre d'exactitude qui reste sous 100 % pour des raisons honnêtes, avec des écarts visibles qui diminuent, des responsables qui confirment leurs actifs quand on le leur demande, et un enregistrement que les gens utilisent pour prendre des décisions.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enregistrement automatisé | Rapide, cohérent, peu d'effort | Demande de l'ingénierie ; manque ce qui est hors pipeline |
| Enregistrement manuel | Souple, marche pour tout | Lent, sujet aux erreurs, se dégrade |
| Piloté par la découverte | Trouve l'inconnu | Ne peut fournir ni responsabilité ni raison d'être |
| Piloté par les achats | Capte le coût et le contrat | Manque les achats de l'ombre et les paliers gratuits |
| Contrôle serré des achats | Enregistrement solide | Ralentit les équipes ; encourage les contournements |
| Contrôle léger avec vérifications | Rapide ; repose sur la confiance | Plus d'écarts à trouver et à corriger |
| Grand schéma d'enregistrement | Rapports riches | Difficile à garder exact |
| Petit schéma d'enregistrement | Facile à maintenir | Analyse limitée |

La réponse en bref est d'automatiser l'enregistrement là où l'infrastructure est du code, d'utiliser la découverte et les données de facturation comme contrôles indépendants, et de garder l'enregistrement petit. Faites confiance aux équipes pour créer ce dont elles ont besoin, demandez-leur de l'étiqueter et vérifiez par échantillonnage.

## Questions à discuter avec votre équipe

**1. Si nous devions trouver demain tous les actifs liés à notre service le plus important, combien de temps cela prendrait-il ?**
Choisissez un service et retracez ses actifs à partir du registre et d'autres sources. Chronométrez l'exercice et notez les écarts. L'animateur doit consigner quelles sources concordaient et lesquelles non. Le résultat montre si le registre est un outil de travail ou un document.

**2. Quels actifs sont créés sans que personne dans cette salle le sache ?**
Pensez aux comptes infonuagiques, aux abonnements, aux environnements de test et aux appareils achetés hors des achats officiels. Demandez comment ils apparaîtraient. La conversation trouve les fuites. Convenez d'une source de preuve indépendante à ajouter au rapprochement ce trimestre.

**3. Qui détient les actifs que nous avons aujourd'hui, et comment savons-nous qu'ils sont toujours là ?**
Prenez un échantillon d'actifs et demandez aux responsables nommés de confirmer. Notez combien de responsables ont changé de rôle ou sont partis. Décidez comment l'annuaire et le registre resteront synchronisés, par exemple par une vérification automatique quand quelqu'un part.

**4. Comment auditons-nous notre propre registre sans corriger nos propres copies ?**
Discutez de qui tire l'échantillon et de qui le vérifie. Demandez ce qui se passerait si le résultat était mauvais. L'animateur doit explorer si les gens se sentent en sécurité pour rapporter un mauvais chiffre, car un audit qui n'est pas sûr produit de bons chiffres.

**5. Que consignons-nous que personne n'utilise ?**
Listez les champs du registre et demandez quelles décisions utilisent chacun. Les champs sans utilisateur sont candidats au retrait. Les champs utilisés mais peu fiables sont candidats à l'automatisation. Convenez de deux changements.

**6. Que devient un actif entre « n'est plus nécessaire » et « disparu » ?**
Retracez un appareil retiré ou un service désaffecté. Qui confirme que les données ont été effacées ? Quand l'enregistrement est-il clos ? Les lacunes de ce chemin sont l'endroit où s'accumulent le coût, le risque et les constats d'audit.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison créent l'essentiel des nouveaux actifs, et elles ressentent la tenue des enregistrements comme une friction à moins qu'elle soit automatique. Elles doivent traiter l'enregistrement d'actif comme une partie de la définition de terminé d'un environnement, laisser les pipelines enregistrer ce qu'ils créent et étiqueter les ressources avec des responsables. Elles bénéficient d'un enregistrement exact quand elles doivent trouver des coûts, appliquer des correctifs ou retirer un environnement.

### Équipes de service et d'exploitation

Les équipes d'exploitation dépendent du registre pour les correctifs, la réponse aux incidents et la capacité. Elles doivent rapprocher la découverte et le registre, poursuivre les actifs sans responsable et rapporter les écarts comme des constats. Elles détiennent aussi la manutention physique : réception, imagerie, stockage et élimination, où les enregistrements de chaîne de traçabilité comptent.

### Direction et gouvernance

Les dirigeants et les auditeurs s'appuient sur les données d'actifs pour la maîtrise des coûts, l'assurance de sécurité et la conformité. Ils doivent demander la méthode d'exactitude et la liste des écarts, pas seulement le chiffre global, et financer l'automatisation de l'enregistrement. La gouvernance doit attendre que le registre soit utilisé dans les décisions et traiter avec méfiance un 100 % rapporté.

### Clients et utilisateurs

Les utilisateurs font l'expérience de la gestion des actifs quand un appareil arrive prêt, qu'une licence est là au besoin et qu'un portable perdu est bien traité. Leur retour sur l'accueil et l'équipement est une preuve du fonctionnement du processus en pratique (voir le sujet 6.4, Expérience des utilisateurs et des employés). Ils ont aussi un rôle : dire à l'informatique quand un équipement bouge ou part.

## En pratique : un exemple de gestion des services

Le service informatique d'une entreprise de logistique de taille moyenne soutient environ 2 400 personnes et exploite une plateforme produit sur une infrastructure infonuagique. Les chiffres ci-dessous sont illustratifs.

Un audit interne demande le nombre d'appareils et de ressources infonuagiques que possède l'entreprise. Le registre montre 3 100 appareils d'utilisateurs et 1 850 ressources infonuagiques. La gestionnaire des actifs décide de tester les chiffres avant de les rapporter. Elle tire un échantillon aléatoire de 100 appareils du registre et en trouve 87 qui correspondent sur les quatre champs convenus, soit une exactitude de 87 %. Dans l'autre sens, elle tire 100 appareils de l'outil de gestion des postes et en trouve 94 dans le registre. La couverture de la découverte du parc infonuagique est de 82 %, parce que trois comptes créés par des équipes de projet ne sont pas connectés à l'outil de découverte. Le rapprochement de l'export de facturation infonuagique avec le registre apparie 71 % des ressources facturées, et les non-appariées sont surtout des environnements de test non étiquetés. La part d'actifs sans responsable est de 9 %, dont un tiers détenus par des personnes parties.

L'équipe fait quatre changements avec les équipes produit et la finance. Les modèles de pipeline enregistrent désormais chaque nouvel environnement et exigent un responsable et une étiquette de service. La facture infonuagique mensuelle est rapprochée du registre, les ressources non étiquetées étant rapportées aux titulaires de compte. Une vérification mensuelle compare l'annuaire des personnes avec les responsables d'actifs et envoie une liste aux responsables quand quelqu'un part. La réception des marchandises à l'entrepôt déclenche une mise à jour du registre le jour même. Ils changent aussi la façon de rapporter : le résumé d'audit montre l'exactitude des deux directions d'échantillonnage, la liste des écarts et la part sans responsable.

Après deux trimestres, l'exactitude de l'échantillon du registre est de 93 %, le rapprochement du parc infonuagique de 90 % et la part sans responsable de 3 %. Le responsable des finances demande un chiffre unique d'« exactitude de l'inventaire » pour le conseil. La gestionnaire des actifs donne le chiffre avec la méthode et la liste des écarts, et refuse de rapporter un objectif de 100 %, expliquant que le but est de garder les écarts visibles et décroissants. La décision est consignée, et l'équipe note que le chiffre plus bas issu d'une meilleure méthode est plus utile que le chiffre antérieur non vérifié.

## Agilité, IA, automatisation et analytique

### Agilité

Enregistrez les actifs comme un sous-produit du travail quotidien et revoyez l'exactitude avec les responsables à cadence régulière, au lieu d'un ménage annuel. La précaution est qu'un objectif d'exactitude peut pousser les équipes à supprimer des enregistrements qu'elles ne peuvent confirmer.

### IA

Les outils et abonnements d'IA sont aussi des actifs, et ils sont souvent adoptés sans enregistrement. Incluez les services d'IA, les modèles et les sources de données dans la découverte, et appariez l'exactitude de l'inventaire avec la part d'actifs sans responsable. La précaution est que les fonctionnalités d'IA activées dans des produits existants n'apparaissent pas comme de nouveaux achats : demandez donc aux fournisseurs ce qui est activé.

### Automatisation

Exécutez la découverte automatiquement et rapprochez-la des enregistrements d'achat et d'identité, et mesurez la découverte sur sa couverture et ses faux appariements. La précaution est que la découverte trouve ce vers quoi on la pointe : auditez donc ce qu'elle manque.

### Analytique

Rapportez l'exactitude issue d'un audit par échantillon avec la taille de l'échantillon, autant que celle issue des décomptes d'outils. La décision éclairée est où investir dans la découverte et la responsabilité. La précaution est que rapprocher deux sources défectueuses peut sembler net alors que les deux sont fausses.

## Éclairage sectoriel

**Startup.** Il peut n'y avoir aucun registre formel, seulement des comptes infonuagiques et quelques ordinateurs portables. Gardez une liste simple avec des responsables, étiquetez les ressources infonuagiques dès le départ et revoyez la liste chaque mois. Évitez d'acheter une plateforme avant de savoir à quelles questions vous devez répondre.

**Petite entreprise.** Un seul administrateur peut tout gérer. Un tableur à quelques champs peut suffire, si quelqu'un le vérifie contre les achats deux fois par an. Soyez attentif aux licences et aux abonnements, faciles à perdre de vue, et à l'élimination des appareils qui contenaient des données.

**Grande entreprise.** L'échelle demande de l'automatisation, des responsables de classe clairs et un rapprochement entre plusieurs sources. Attendez-vous à ce que les acquisitions apportent des parcs inconnus, et prévoyez une manière standard de les amener sous le même enregistrement. Alignez-vous avec la finance sur la comptabilité des actifs, y compris la manière dont les [immobilisations](https://en.wikipedia.org/wiki/Fixed_asset) sont capitalisées et amorties, et convenez de l'endroit où le registre informatique et le grand livre financier doivent concorder.

**Gouvernement et secteur public.** Les organismes publics font face à l'audit, aux règles de passation de marchés et aux obligations de conservation des documents, et détiennent souvent des données sensibles sur des appareils. Conservez des preuves d'élimination, documentez la chaîne de traçabilité et alignez le registre sur les rapports d'actifs exigés. Traitez le registre comme une partie des preuves pour les audits (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent le temps de conception de l'enregistrement, l'outillage de découverte et de rapprochement si vous n'en avez pas, l'effort d'ingénierie pour enregistrer les actifs dans les pipelines et l'effort courant d'échantillonnage et de correction. Beaucoup d'organisations possèdent déjà des outils de découverte et de gestion des postes. Une petite équipe peut mener un programme, et le coût courant est faible une fois l'enregistrement automatisé.

Les rendements sont le gaspillage évité et le risque réduit. Des enregistrements exacts réduisent le paiement d'abonnements et de ressources inutilisés, accélèrent la réponse aux incidents et les correctifs parce que vous savez ce qui existe, et diminuent l'effort d'audit. Évitez d'affirmer des économies en pourcentage tirées d'études publiées. Mesurez votre propre référence : le nombre de ressources infonuagiques sans responsable et leur coût mensuel, le temps pour répondre à une question d'audit et les licences payées mais inutilisées. Comptez aussi le coût du risque : un serveur inconnu est une exposition de sécurité, et un portable perdu contenant des données a un coût de notification. Le traitement financier des coûts est couvert plus loin dans cette partie (voir le sujet 7.5, Coût du service et économie unitaire).

## Anti-modèles et pièges

- **Le ménage annuel.** Un grand effort une fois par an se dégrade en quelques semaines. Enregistrez en continu et échantillonnez chaque trimestre.
- **N'auditer que le registre.** Cela prouve que le registre s'accorde avec lui-même. Échantillonnez à partir de preuves indépendantes dans les deux sens.
- **Un score parfait.** Un chiffre de 100 % signifie généralement un périmètre étroit ou des preuves faibles. Regardez ce qui a été exclu.
- **Des champs de responsable remplis avec une équipe fourre-tout.** Cela paraît complet et c'est inutile. Comptez la responsabilité fourre-tout comme un écart.
- **Trop de champs.** Les gens les remplissent avec des valeurs par défaut. Gardez l'enregistrement à ce dont les décisions ont besoin.
- **L'outil d'abord, le processus ensuite.** Une plateforme de découverte sans règles de responsabilité et de cycle de vie produit un plus grand désordre. Décidez d'abord des questions.
- **Pénaliser les équipes pour les écarts.** Elles cachent des actifs. Traitez les écarts comme des constats et corrigez la cause.
- **Oublier l'élimination.** Les actifs retirés qui restent au registre ou partent sans enregistrement d'effacement créent du coût et du risque.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Saisie | Tableurs mis à jour quand on s'en souvient | Registre pour les classes principales, surtout manuel | Enregistrement lié aux achats et aux pipelines | Enregistrement automatisé ; délai d'enregistrement mesuré | Actifs enregistrés entre équipes et fournisseurs à partir d'un seul flux d'événements |
| Exactitude | Inconnue | Décomptes occasionnels | Échantillonnage indépendant trimestriel dans les deux sens | Exactitude et écarts suivis par classe et alimentant l'amélioration | Contrôles indépendants partagés entre l'informatique, la finance et la sécurité |
| Usage | Registre utilisé seulement pour les audits | Utilisé par quelques équipes | Correctifs, renouvellements et budgétisation lisent le registre | Usage revu ; champs ajustés aux décisions | Le registre pilote des décisions automatisées sous supervision humaine |

## Liste de vérification

- [ ] Les classes d'actifs et les décisions que chaque enregistrement soutient sont listées.
- [ ] Les champs minimaux par classe sont définis et consignés dans le registre des métriques.
- [ ] Chaque classe et chaque actif a un responsable nommé, tenu à jour face à l'annuaire.
- [ ] Les pipelines enregistrent la nouvelle infrastructure avec un responsable et une étiquette de service.
- [ ] Les achats et la création d'abonnements déclenchent des enregistrements d'actifs.
- [ ] Les données de découverte et de facturation sont rapprochées du registre chaque mois.
- [ ] Un échantillon aléatoire est audité chaque trimestre dans les deux sens.
- [ ] Les listes d'écarts avec responsables et dates sont publiées avec les chiffres d'exactitude.
- [ ] L'élimination a une méthode consignée et une preuve d'effacement des données.
- [ ] Les champs inutilisés sont retirés ; le registre est utilisé dans les décisions quotidiennes.

## Prompts d'IA

**Concevez un enregistrement d'actif minimal.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Planifiez un échantillon d'audit dans les deux sens.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Analysez un résultat de rapprochement.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Rédigez une vérification des départs et des mutations.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'actifs avant de la rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'actifs porte son vecteur de détournement, son garde-fou et sa règle de preuve indépendante.

## Idées clés

- Enregistrez les actifs au moment du changement, de préférence par les pipelines et les achats, pour que le registre soit un sous-produit du travail.
- Mesurez l'exactitude contre des preuves indépendantes, en échantillonnant dans les deux sens.
- Chaque actif a besoin d'un responsable, et les actifs sans responsable sont des constats.
- Gardez l'enregistrement petit et rendez-le utile dans les décisions quotidiennes.
- Rapportez les écarts, pas seulement le chiffre global, et méfiez-vous d'un score parfait.
- Planifiez l'élimination aussi soigneusement que la création.

## Références et lectures complémentaires

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
