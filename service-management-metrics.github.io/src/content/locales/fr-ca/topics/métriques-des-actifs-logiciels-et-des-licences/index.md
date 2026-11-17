# Métriques des actifs logiciels et des licences

**Le logiciel s'achète, s'abonne, se construit et s'emprunte, et chaque voie crée des obligations et des coûts : mesurez donc ce à quoi vous avez droit, ce que vous utilisez réellement et ce dont vous dépendez, et facilitez aux équipes le choix d'outils sans créer de mauvaises surprises plus tard.**

## Vue d'ensemble et motivation

Le logiciel est la classe d'actifs qui change le plus vite et qui est la plus difficile à voir. Un développeur ajoute une bibliothèque en quelques minutes. Une équipe s'inscrit à un outil de logiciel en tant que service avec une carte de l'entreprise. Un fournisseur change son modèle de prix entre deux renouvellements. Un contrat autorise 500 utilisateurs et 700 ont des comptes. La [gestion des actifs logiciels](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) est la pratique de gestion qui consiste à gérer et à optimiser l'achat, le déploiement, la maintenance, l'usage et l'élimination des logiciels au sein d'une organisation. Elle s'inscrit dans la pratique plus large de gestion des actifs informatiques (voir le sujet 7.1, Métriques de gestion des actifs informatiques) et partage sa discipline des enregistrements, des responsables et des cycles de vie.

La livraison continue et la gestion des actifs logiciels tirent dans des directions différentes sur la vitesse. Les équipes qui livrent en continu doivent choisir et adopter des outils rapidement, et elles bâtissent sur des composants libres par centaines. La gestion des actifs logiciels veut savoir ce qui est utilisé, à quelles conditions, à quel coût et avec quel risque. Les deux ont raison. La voie passe par la collaboration continue entre les équipes, les achats, le juridique, la sécurité et la finance : rendre rapide le chemin approuvé, rendre facile à trouver le catalogue des outils approuvés et rendre les contrôles automatiques. Ralentir les équipes avec un long processus d'approbation produit du [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT), l'opposé de la visibilité que tout le monde veut.

Quatre sortes de logiciels comptent, et les métriques diffèrent entre elles.

- **Les logiciels sous licence** installés sur des appareils ou des serveurs, régis par une [licence logicielle](https://en.wikipedia.org/wiki/Software_license) qui dit qui peut les utiliser, combien de personnes le peuvent et à quelles conditions. Les droits peuvent être par utilisateur, par appareil, par cœur ou par site, et l'unité décide de la manière de compter.
- **Le logiciel en tant que service.** Le [logiciel en tant que service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) est accessible par un réseau et payé par abonnement, souvent par poste ou à l'usage. Il est facile à adopter et facile à oublier. Les outils qui se chevauchent et les postes inutilisés s'accumulent.
- **Les composants libres.** Le [logiciel libre](https://en.wikipedia.org/wiki/Open-source_software) est disponible sous des licences qui accordent de larges droits avec des conditions. Certaines licences, dites de [copyleft](https://en.wikipedia.org/wiki/Copyleft), exigent que les œuvres dérivées soient partagées aux mêmes conditions. La conformité dépend de la manière dont un composant est utilisé et distribué, et l'interprétation d'une licence est une question juridique.
- **Le logiciel que vous construisez.** Votre propre code est un actif, et il dépend de nombreux composants. Une [nomenclature logicielle](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) est une liste des composants d'un logiciel. Elle vous aide à répondre à la question de savoir lesquels de vos services utilisent une bibliothèque donnée quand une vulnérabilité ou un problème de licence apparaît.

Les métriques d'actifs logiciels sont exposées à la distorsion habituelle. Une position de licences peut sembler saine parce que l'inventaire est incomplet. Le coût des licences inutilisées peut sembler bas parce que les contrats ont été raccourcis avant la revue. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : chaque mesure ici est donc appariée avec un contrôle indépendant (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Une mise en garde sur le droit : les conditions de licence et les droits d'audit sont des questions juridiques. Ce sujet décrit une pratique de mesure. Il n'interprète aucune licence, et il ne remplace pas l'avis d'un conseiller juridique qualifié pour votre situation et votre juridiction.

## Principes clés

- **Mesurez les droits contre l'usage.** Savoir ce que vous pouvez utiliser et ce que vous utilisez est la comparaison centrale.
- **Comptez dans l'unité de la licence.** Utilisateurs, appareils, cœurs et abonnements sont différents, et les mélanger cache la réponse.
- **Faites du chemin approuvé le chemin rapide.** Un catalogue visible et une approbation rapide réduisent l'adoption de l'ombre.
- **Incluez les composants autant que les produits.** Les bibliothèques libres et leurs licences font partie du parc.
- **Revoyez avant le renouvellement.** Le meilleur moment pour réduire le gaspillage est avant la date du contrat.
- **Gardez le juridique dans la conversation.** L'interprétation appartient aux personnes qualifiées pour la donner.
- **Partagez l'image avec les équipes.** Les équipes qui voient leur propre usage et leur coût font de meilleurs choix.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Position effective de licences | Comparaison des droits détenus avec l'usage constaté, par produit, dans l'unité de comptage propre à la licence | droits détenus moins déploiements ou utilisateurs constatés, par produit | unités (excédent positif, déficit négatif) | Enregistrements de droits, outil de découverte, système d'identité | Gestion des actifs informatiques ; gestion des fournisseurs | Catalogue visible et données d'usage pour les équipes | Mensuelle pour les produits clés ; trimestrielle pour les autres |
| Taux d'utilisation des licences | Part des droits payés qui sont en usage actif | droits avec activité dans les 90 derniers jours / droits payés | pourcentage | Rapports d'usage du fournisseur, journaux d'identité, enregistrements de droits | Gestion des actifs informatiques ; gestion financière | Rétrospective sur la valeur de l'outil | Mensuelle |
| Coût des licences inutilisées | Coût annuel des droits payés et inutilisés | somme de (droits inutilisés fois coût unitaire) | monnaie par an | Enregistrements de droits, données d'usage, factures | Gestion des actifs informatiques ; gestion financière | Réduction du gaspillage dans la chaîne d'outils | Trimestrielle |
| Nombre d'applications non sanctionnées | Nombre d'applications logicielles en usage qui ne sont pas dans le catalogue approuvé | applications vues dans les données de dépenses, les journaux d'authentification unique ou les données réseau et absentes du catalogue | décompte | Notes de frais, fournisseur d'identité, données réseau et de postes | Gestion des actifs informatiques ; gestion de la sécurité de l'information | Équipes qui choisissent leurs outils avec un soutien visible | Mensuelle |
| Préparation au renouvellement | Part des renouvellements qui ont eu une revue d'usage avant la date de préavis | renouvellements avec une revue d'usage achevée au moins 90 jours avant la date de préavis / renouvellements dus dans la période | pourcentage | Registre des contrats et enregistrements de revue | Gestion des fournisseurs ; gestion financière | Planifier le changement à l'avance | Trimestrielle |
| Couverture des SBOM | Part des services de production ayant une nomenclature logicielle à jour | services avec un SBOM généré au dernier cycle de version / services de production | pourcentage | Sorties du pipeline de construction, catalogue de services | Gestion des actifs informatiques ; gestion de la sécurité de l'information | La définition de terminé inclut la visibilité des dépendances | Mensuelle |
| Couverture de la revue des composants libres | Part des composants en production ayant une identification de licence et une décision de politique consignées | composants avec licence et décision consignées / composants trouvés dans les SBOM | pourcentage | Outil d'analyse de composition logicielle, registre des politiques | Gestion des actifs informatiques ; gestion des fournisseurs | Revue des dépendances dans le pipeline | Mensuelle |

Énoncez l'unité de comptage de chaque produit dans le registre. L'utilisation compte l'activité à partir d'un événement défini, comme une connexion, et d'une fenêtre énoncée. N'excluez les comptes de service et de test des décomptes d'utilisateurs que si les conditions de la licence le permettent, et consignez la règle. Le coût est le prix unitaire du contrat net des remises convenues, et la date du prix est consignée.

## Recommandations

### Savoir ce que vous détenez et ce que vous utilisez

**1. Tenez un enregistrement de droits pour chaque produit qui coûte de l'argent ou comporte des obligations.** L'enregistrement doit contenir le fournisseur, le produit, le type de licence, l'unité de comptage, la quantité, la durée, le prix, les dates de renouvellement et de préavis, les restrictions et le responsable. Conservez le contrat ou un lien vers lui. La métrique dépend de cet enregistrement, et il n'existe souvent pas pour les abonnements achetés hors des achats officiels.

**2. Mesurez l'usage avec l'unité du fournisseur.** Les licences par poste comptent des utilisateurs nommés, et les licences par processeur comptent des cœurs. Une utilisation calculée dans la mauvaise unité donne un faux confort. Là où les conditions sont complexes, demandez aux achats et au juridique de décrire une fois la règle de comptage en langage clair, et consignez-la.

**3. Combinez trois sources de données d'usage.** La console d'administration du fournisseur, les journaux de connexion de votre fournisseur d'identité et vos outils de découverte en voient chacun une partie. Là où elles divergent, trouvez pourquoi. Un poste attribué mais jamais utilisé est candidat à la récupération, et un utilisateur qui apparaît dans un journal et pas dans un autre peut être un problème de données.

**4. Récupérez par défaut les postes inutilisés.** Fixez une règle, par exemple retirer l'accès après 90 jours sans usage et le rétablir sur demande. Rendez le rétablissement facile pour que la règle ne frustre pas les gens. La récupération est une pratique continue, non un projet, et elle marche mieux quand elle est automatisée et annoncée.

### Faire du bon chemin le chemin facile

**5. Publiez un catalogue des outils approuvés.** Listez ce que les équipes peuvent utiliser, ce que cela coûte, qui le soutient et comment demander l'accès. Ajoutez une voie rapide pour proposer un nouvel outil, avec une courte revue de sécurité, de vie privée et de coût. Un catalogue qui aide les gens à trouver l'outil existant évite les achats en double (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

**6. Surveillez la prolifération sans la punir.** Utilisez les données de dépenses, les journaux d'authentification unique et les données réseau pour trouver les applications absentes du catalogue. Traitez chacune comme une conversation : de quoi l'équipe a-t-elle besoin, et un outil approuvé pourrait-il y répondre ? Comptez les applications non sanctionnées et suivez la tendance, et visez à amener les utiles sous gestion, non à les étouffer.

**7. Donnez aux équipes la visibilité de leur propre usage et coût.** Une vue mensuelle des postes, de l'usage et du coût par équipe leur permet de nettoyer leurs propres abonnements. La visibilité marche mieux que la police, et elle respecte la préférence agile pour des équipes auto-organisées qui ont l'information dont elles ont besoin.

### Planifier les renouvellements et gérer la dépendance

**8. Revoyez l'usage avant chaque renouvellement important.** Fixez une revue 90 à 120 jours avant la date de préavis, avec le responsable, les achats et la finance. Apportez l'utilisation, le coût des licences inutilisées, les alternatives et le retour de l'équipe. La préparation au renouvellement est la part des renouvellements qui atteignent cette revue à temps. Une date de préavis manquée est un coût avec une cause.

**9. Surveillez l'enfermement chez un fournisseur.** L'[enfermement chez un fournisseur](https://en.wikipedia.org/wiki/Vendor_lock-in) rend coûteux le changement de fournisseur. Consignez la voie de sortie pour les produits importants : formats d'export des données, conditions de résiliation du contrat et effort de remplacement. Vous n'avez pas à éviter la dépendance, mais vous devez en connaître le prix.

**10. Générez un SBOM à chaque version.** L'outillage de construction peut produire un SBOM automatiquement dans le pipeline, de sorte que l'information reste à jour sans effort continu. Conservez-le avec la version et rendez-le consultable pour pouvoir répondre à la question de savoir quels services utilisent un composant. Cela soutient autant la gestion des licences que la réponse aux vulnérabilités.

**11. Revoyez les licences libres dans le pipeline.** Les outils d'[analyse de composition logicielle](https://en.wikipedia.org/wiki/Software_composition_analysis) identifient les composants et leurs licences. Convenez avec le juridique d'une courte politique sur les licences approuvées, celles qui demandent une revue et celles qui ne sont pas permises pour votre usage, et faites signaler les exceptions par le pipeline. Gardez les décisions de politique dans un registre. L'outil identifie les licences, et une personne qualifiée pour les interpréter tranche les cas difficiles.

### Se préparer calmement aux audits

**12. Gardez les preuves prêtes, sans précipitation.** Un [audit de logiciels](https://en.wikipedia.org/wiki/Software_audit) par un fournisseur ou un régulateur vous demande de démontrer que votre usage correspond à vos droits. Si les enregistrements de droits et les données d'usage sont déjà rapprochés chaque mois, un audit est une demande de routine. Impliquez tôt le juridique et les achats, répondez par un seul canal et ne rapportez pas spontanément de conclusions que vous n'avez pas revues avec eux.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Position effective de licences | Compter dans une unité favorable ; laisser les déploiements de l'ombre hors de la découverte | Compter dans l'unité propre à la licence ; comparer avec les données de dépenses et d'identité ; revue juridique de la règle de comptage |
| Taux d'utilisation des licences | Raccourcir la fenêtre d'activité ; compter comme usage les connexions de robots ou de comptes de service | Fenêtre fixe dans le registre ; exclure les comptes non humains ; comparer avec le rapport d'usage du fournisseur |
| Coût des licences inutilisées | Renégocier ou résilier juste avant la revue pour réduire le chiffre ; ignorer les abonnements sur cartes | Inclure toutes les sources de dépenses ; suivre le coût au début de la fenêtre de préavis |
| Nombre d'applications non sanctionnées | Tout approuver dans le catalogue pour réduire le décompte ; cacher l'usage par des comptes personnels | Critères de revue du catalogue ; regarder les données de dépenses et d'identité ; demander aux équipes ce dont elles ont besoin |
| Préparation au renouvellement | Tenir une revue de pure forme ; fixer la date de préavis plus tard | Liste de vérification de revue avec des intrants obligatoires ; dates de contrat détenues par les achats |
| Couverture des SBOM | Générer des SBOM qui omettent les dépendances transitives ; compter des sorties de construction qui ne sont pas mises en production | Définir la profondeur dans le registre ; vérifier par sondage un SBOM contre l'artefact déployé |
| Couverture de la revue des composants libres | Marquer des composants comme revus sans décision ; accepter des licences « inconnues » | Compter les composants à licence inconnue ; revoir un échantillon de décisions |

Une lecture saine est une position de licences qui correspond aux preuves indépendantes, un taux d'utilisation qui monte parce que des postes sont récupérés et non parce que la définition a changé, un nombre d'applications non sanctionnées qui baisse à mesure que le catalogue s'améliore, et des renouvellements qui arrivent avec une revue.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Approbation centrale de tous les outils | Contrôle solide, vue unique | Lente ; encourage le shadow IT |
| Choix par l'équipe dans des garde-fous | Rapide ; répond aux besoins de l'équipe | Plus de variété ; demande visibilité et revue |
| Récupération agressive des postes | Économise du coût | Peut frustrer les utilisateurs si le rétablissement est lent |
| Attribution généreuse de postes | Peu de friction | Le gaspillage s'accumule |
| Accords d'entreprise | Coût unitaire plus bas, plus simple | Enfermement ; paiement d'une ampleur non nécessaire |
| Paiement à l'usage | Fait correspondre le coût à l'usage | Factures imprévisibles |
| Analyse automatisée des licences | Cohérente et rapide | Demande un jugement humain sur les cas limites |
| Revue manuelle des composants | Soigneuse | Ne passe pas à l'échelle pour de grands arbres de dépendances |

La réponse en bref est de donner aux équipes le choix dans des garde-fous clairs, d'automatiser les contrôles et de consacrer l'attention humaine aux grands contrats et aux questions de licence difficiles. Gardez une voie rapide pour les nouveaux outils et une voie facile pour rétablir l'accès récupéré.

## Questions à discuter avec votre équipe

**1. Quels trois produits nous coûtent le plus, et savons-nous combien de personnes les utilisent ?**
Listez les plus gros contrats et l'unité de comptage de chacun. Comparez avec les données d'usage. L'animateur doit chercher les produits dont personne ne connaît l'unité ou pour lesquels il n'existe pas de données d'usage. Convenez de recueillir les données pour l'un d'eux avant le prochain renouvellement.

**2. Comment un nouvel outil est-il adopté ici, et combien de temps cela prend-il ?**
Retracez un exemple récent de la demande à l'accès. Demandez combien d'équipes ont sauté le chemin, et pourquoi. La réponse montre si le chemin approuvé est rapide. Convenez d'une amélioration du chemin et d'un moyen de savoir si elle a marché.

**3. Que se passerait-il si un fournisseur nous demandait de prouver notre position de licences le mois prochain ?**
Parcourez qui répondrait, quels enregistrements existent et quelles lacunes il y a. La conversation ne doit pas viser des conclusions juridiques, seulement l'identification des enregistrements manquants. Nommez les personnes du juridique et des achats qui seraient impliquées et la manière dont l'équipe les joindrait.

**4. Où récupérons-nous les postes inutilisés, et où ne le faisons-nous pas ?**
Revoyez les règles de récupération des principaux produits. Demandez ce qui arriverait si une règle était appliquée aux autres. Discutez de la manière de rendre indolore le rétablissement de l'accès, car c'est ce qui rend la règle acceptable.

**5. Pouvons-nous dire lesquels de nos services utilisent une bibliothèque libre donnée ?**
Choisissez une bibliothèque connue et essayez de répondre. Si cela prend plus de quelques minutes, discutez des raisons. Convenez de l'étape du pipeline qui pourrait produire un SBOM et de l'endroit où stocker les résultats.

**6. De quoi dépendons-nous qui serait difficile à quitter ?**
Listez les produits dont les données ou le flux de travail sont profondément liés à un fournisseur. Demandez ce que coûterait le départ et comment vous commenceriez. L'animateur peut consigner la réponse comme intrant de la planification des renouvellements.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison choisissent des outils et des bibliothèques tous les jours. Elles doivent utiliser le catalogue approuvé là où il les sert, proposer des ajouts avec une courte note et laisser le pipeline générer les SBOM et signaler les problèmes de licence. Elles ont besoin de réponses rapides : une politique claire sur les licences courantes et une voie pour poser des questions sur les inhabituelles. Une équipe qui voit ses propres données de postes et de dépenses les nettoiera sans qu'on le lui dise.

### Équipes de service et d'exploitation

Les équipes d'exploitation exécutent la découverte, gèrent les accès et traitent les renouvellements et les audits. Elles doivent rapprocher les données d'usage et les droits, récupérer les postes inutilisés selon un calendrier et tenir à jour le registre des contrats. Elles portent aussi la charge de soutien des outils non gérés, ce qui est une bonne raison d'amener les utiles sous gestion.

### Direction et gouvernance

Les dirigeants veulent éviter les coûts imprévus et l'exposition juridique sans ralentir les équipes. Ils doivent financer l'automatisation, demander les preuves indépendantes derrière les affirmations de position de licences et garder le juridique et les achats dans la boucle. La gouvernance doit attendre que les renouvellements soient revus à temps et que la politique sur le libre soit appliquée dans le pipeline.

### Clients et utilisateurs

Les utilisateurs veulent que l'outil dont ils ont besoin marche du premier coup, sans longue attente. Ils remarquent quand l'accès disparaît sans avertissement ou quand deux outils font le même travail. On doit les prévenir quand des postes seront récupérés, leur donner une voie facile pour demander l'accès et les consulter quand un outil est remplacé.

## En pratique : un exemple de gestion des services

Le groupe technologique d'une organisation régionale de presse soutient 900 personnes et exploite une plateforme de publication d'environ 40 services. Les chiffres ci-dessous sont illustratifs.

Le directeur financier demande pourquoi les coûts logiciels ont crû plus vite que les effectifs. Le gestionnaire des actifs logiciels rassemble les données. Les enregistrements de droits couvrent 61 produits. Les journaux de connexion et les rapports de fournisseurs montrent que la suite de conception compte 220 postes et 140 utilisateurs actifs dans les 90 derniers jours, soit un taux d'utilisation de 64 %, les postes inutilisés coûtant à peu près autant que le salaire d'un ingénieur. Les données de dépenses montrent 37 applications absentes du catalogue, surtout des outils de collaboration et d'analyse achetés par des équipes. Trois des plus gros renouvellements ont vu leur date de préavis passer sans revue d'usage.

L'équipe fait quatre changements avec les équipes produit. Une règle de récupération des postes retire l'accès après 90 jours sans usage, avec une demande en un clic pour le rétablir. Une page de catalogue liste les outils approuvés, leur coût et un responsable, avec une voie de deux jours pour proposer un nouvel outil. Les revues de renouvellement commencent 100 jours avant la date de préavis, avec une liste de vérification d'utilisation, d'alternatives et de retour de l'équipe. Le pipeline de construction de la plateforme de publication génère désormais un SBOM à chaque version, et une analyse de licences signale les composants à licence inconnue ou restreinte pour revue par le juridique.

Trois mois plus tard, l'utilisation de la suite de conception est de 86 % après la récupération de 60 postes, et un renouvellement est renégocié à un nombre de postes inférieur. Le nombre d'applications non sanctionnées passe de 37 à 24, l'équipe ajoutant quatre outils utiles au catalogue et retirant les doublons. La couverture des SBOM est de 70 % des services de production. L'analyse trouve un composant à licence inconnue dans un service rarement utilisé, que le juridique examine et que l'équipe remplace. Un fournisseur demande une vérification de licences pour un autre produit, et les enregistrements produits pour l'audit concordent, à une correction près. Le directeur demande la promesse d'une utilisation de 100 %, et la gestionnaire explique qu'un chiffre sain laisse de la marge pour les nouveaux arrivants et les changements, et elle propose une plage comme repère, non comme objectif. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Facilitez le choix d'outils par les équipes grâce à un processus court et visible, et revoyez l'usage avec les parties prenantes régulièrement. La précaution est qu'un processus d'approbation strict pousse les gens vers des outils non sanctionnés.

### IA

Les services d'IA ajoutent de nouveaux modèles de licence, fondés sur des postes, des jetons ou l'usage, et de nouvelles obligations sur les données et les conditions des modèles. Suivez l'utilisation des licences et le coût par utilisateur actif pour les outils d'IA, et appariez-les avec un contrôle d'utilité auprès des utilisateurs. La précaution est que la tarification à l'usage peut croître sans qu'on le remarque : fixez donc des alertes et des responsables.

### Automatisation

Recueillez automatiquement les droits et les données d'usage, et générez la nomenclature logicielle dans le pipeline. Mesurez l'automatisation sur sa couverture et ses faux positifs. La précaution est qu'une nomenclature générée mais non lue ne réduit pas le risque.

### Analytique

Montrez la position effective de licences et le coût des licences inutilisées avec la date des données. La décision éclairée est quoi renouveler, réduire ou abandonner. La précaution est que les règles de licence sont complexes : demandez donc l'interprétation du contrat à un spécialiste.

## Éclairage sectoriel

**Startup.** Les outils sont choisis vite et payés par carte. Gardez une liste d'une page des abonnements avec responsables et dates de renouvellement, revoyez-la chaque trimestre et utilisez les paliers gratuits à dessein. Soyez attentif aux licences libres avant de distribuer du logiciel ou de lever des fonds, car les investisseurs peuvent poser la question.

**Petite entreprise.** Une poignée de produits porte l'essentiel du coût. Suivez les nombres de postes à la main, fixez des rappels de calendrier pour les renouvellements et demandez des rapports d'usage aux fournisseurs. Méfiez-vous des abonnements à reconduction automatique et des licences liées à une personne partie.

**Grande entreprise.** Les contrats complexes, les fusions et de nombreuses unités d'affaires rendent difficiles les enregistrements de droits. Investissez dans un modèle de données qui porte les unités de comptage, automatisez les flux de découverte et d'identité et donnez au juridique et aux achats une place dans le pipeline pour la politique sur le libre. Attendez-vous à des audits de fournisseurs et préparez les preuves à l'avance.

**Gouvernement et secteur public.** Les règles de passation de marchés, les licences d'intérêt public et les exigences de souveraineté façonnent les choix. Documentez les raisons des achats, conservez les enregistrements de contrats pendant la durée exigée et considérez les normes ouvertes et les voies de sortie comme des exigences. La transparence sur les dépenses logicielles peut être un devoir légal (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps de construire l'enregistrement de droits, l'outillage d'analyse d'usage et de composition, et l'effort de revoir les renouvellements. Certains outils sont déjà sous licence au titre de plateformes d'identité ou de gestion des postes. Le coût courant est de quelques heures par mois pour un petit parc et davantage pour un grand. Automatiser la récupération et la génération des SBOM le réduit.

Le rendement vient de la dépense évitée et de la surprise évitée. Les postes inutilisés sont des économies directes au renouvellement. Des revues de renouvellement précoces permettent de négocier en connaissance de cause. Connaître vos dépendances raccourcit la réponse aux vulnérabilités et aux questions de licence. Évitez de citer des pourcentages d'économie sectoriels que vous ne pouvez retracer. Mesurez votre propre référence : postes inutilisés fois coût unitaire, nombre de renouvellements revus tardivement, temps pour répondre à « quels services utilisent ce composant » et coût de tout constat d'audit passé. Incluez le coût du programme lui-même, et ne comptez l'exposition juridique évitée que là où vous pouvez décrire un risque précis réduit. Les sujets suivants sur le coût prolongent la vue financière (voir le sujet 7.5, Coût du service et économie unitaire).

## Anti-modèles et pièges

- **Compter dans la mauvaise unité.** Un nombre de postes pour une licence vendue au cœur induit en erreur. Consignez l'unité.
- **Traiter le rapport du fournisseur comme toute la vérité.** Combinez-le avec vos propres journaux.
- **Bloquer les outils par défaut.** Les équipes contournent le blocage. Rendez rapide le chemin approuvé.
- **Récupérer sans chemin de retour.** Les utilisateurs perdent confiance. Rendez le rétablissement facile et rapide.
- **Revoir les renouvellements après la date de préavis.** Le levier a disparu. Commencez tôt.
- **Analyser les licences et ignorer les résultats.** Une analyse sans politique ni responsable de décision est du bruit.
- **Interpréter les licences dans l'équipe de livraison.** Les cas difficiles appartiennent au juridique.
- **Traiter les SBOM comme de la paperasse.** Si personne ne les interroge, ils se dégradent. Servez-vous-en dans des exercices de réponse.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Droits et usage | Contrats dans les courriels ; pas de données d'usage | Enregistrements pour les principaux produits ; vérifications d'usage occasionnelles | Enregistrements de droits avec unités de comptage ; usage issu de l'identité et du fournisseur | Position de licences et utilisation revues chaque mois ; postes récupérés automatiquement | Usage et dépenses partagés avec les équipes ; données d'achat et d'usage circulant entre les fournisseurs et l'organisation |
| Chemin d'adoption | Les équipes achètent ce qui leur plaît | Une liste d'outils approuvés | Voie de catalogue rapide avec responsables et critères de revue | Applications non sanctionnées suivies puis absorbées ou retirées | Choix d'outils coconçu avec les équipes ; services communs réutilisés dans l'organisation |
| Composants et dépendances | Inconnus | Listes manuelles de composants pour certains services | SBOM généré à la version ; politique de licences convenue avec le juridique | Couverture suivie ; exceptions revues ; exercices de réponse menés | SBOM et politique partagés avec les fournisseurs et les clients ; voies de sortie planifiées |

## Liste de vérification

- [ ] Chaque produit payant ou porteur d'obligations a un enregistrement de droits avec unité, quantité, durée et responsable.
- [ ] L'usage vient d'au moins deux sources, comparées chaque mois pour les produits clés.
- [ ] La récupération des postes a une règle, un préavis et un chemin de retour facile.
- [ ] Un catalogue d'outils approuvés existe avec une voie rapide pour proposer un nouvel outil.
- [ ] Les données de dépenses et d'identité sont vérifiées pour les applications non sanctionnées.
- [ ] Les revues de renouvellement commencent au moins 90 jours avant la date de préavis.
- [ ] Des SBOM sont générés et conservés pour chaque version des services de production.
- [ ] Une politique de licences convenue avec le juridique fait signaler les exceptions dans le pipeline.
- [ ] Les voies de sortie des fournisseurs sont consignées pour les produits importants.
- [ ] Les contacts du juridique et des achats pour les audits sont nommés et connus des équipes.

## Prompts d'IA

**Construisez un modèle d'enregistrement de droits.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Préparez une revue de renouvellement.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Concevez une règle de récupération des postes.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Triez un résultat d'analyse de licences.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'actifs logiciels ou de licences.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique logicielle énonce son unité de comptage, son vecteur de détournement et son garde-fou.

## Idées clés

- Comparez les droits à l'usage réel, compté dans l'unité propre à la licence.
- Faites du chemin approuvé le chemin rapide, pour que les équipes n'aient pas à cacher ce qu'elles utilisent.
- Revoyez l'usage avant les dates de préavis de renouvellement, et récupérez les postes inutilisés selon une règle visible.
- Générez des SBOM dans le pipeline et signalez les licences face à une politique convenue avec le juridique.
- Gardez le juridique et les achats impliqués dans l'interprétation et les audits.
- Donnez aux équipes la visibilité de leur propre usage et coût.

## Références et lectures complémentaires

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
