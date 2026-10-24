# Métriques du cycle de vie des actifs matériels

**Les appareils sont les outils quotidiens de personnes motivées et aussi un flux de coûts, de risques et de gaspillage : planifiez donc le renouvellement comme un flux régulier plutôt que comme une secousse périodique, mesurez l'âge et les pannes à partir de vos propres données, et traitez l'élimination sécurisée et le réemploi comme une partie du travail.**

## Vue d'ensemble et motivation

Derrière chaque service se trouvent des choses physiques : ordinateurs portables, téléphones, serveurs, équipements réseau, imprimantes, et les câbles et baies qui les tiennent ensemble. Le matériel a un cycle de vie que le logiciel n'a pas. Il est acheté, expédié, imagé, distribué, réparé, déplacé, retiré, effacé et recyclé, et chaque étape a un coût et un risque. Un portable qui tombe en panne pendant un appel client coûte plus que le portable. Un serveur retiré qui quitte le bâtiment avec des données sur ses disques coûte bien plus que sa valeur de revente. Un tiroir de téléphones inutilisés est du capital qui ne fait rien.

L'objectif agile de bâtir les projets autour d'individus motivés, avec l'environnement et le soutien dont ils ont besoin, s'applique directement. Les gens ne peuvent pas faire leur meilleur travail sur un appareil lent, défaillant ou manquant. La tradition ITIL apporte la vision du cycle de vie et les enregistrements qui l'accompagnent, couverts dans le sujet antérieur sur la gestion des actifs informatiques (voir le sujet 7.1, Métriques de gestion des actifs informatiques). Ce sujet ajoute les mesures propres à l'équipement physique : son âge, la fréquence de ses pannes, la qualité de son utilisation et la manière dont il sort.

La planification du matériel se fait souvent par grands cycles : tout remplacer tous les quelques années, en un seul gros achat, puis vivre avec les conséquences. Une alternative plus régulière, dans l'esprit de la livraison continue, est de renouveler en continu une fraction du parc. Cela lisse les dépenses, répartit la charge d'imagerie et de remise, et permet d'apprendre de chaque lot avant d'acheter le suivant. Cela signifie aussi qu'il vous faut des données d'âge et de pannes pour décider quand chaque appareil doit partir.

Trois idées organisent les mesures.

- **Âge et pannes.** Le [taux de défaillance](https://en.wikipedia.org/wiki/Failure_rate) d'une population d'appareils change au cours de sa vie, et le [temps moyen entre pannes](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) est un résumé courant pour les éléments réparables. Les moyennes cachent beaucoup : un lot avec un composant défectueux peut tomber en panne tôt alors que le reste va bien. Regardez les pannes par modèle, par lot et par tranche d'âge, et planifiez à partir de votre propre historique, non des chiffres des fabricants.
- **Utilisation.** Un appareil que personne n'utilise est du gaspillage, et un appareil surchargé est une source de friction. Mesurez si l'équipement est utilisé et s'il convient au travail.
- **Sortie responsable.** L'équipement retiré peut contenir des données sensibles, des matériaux précieux et dangereux, et ajouter aux déchets électroniques. Les [déchets électroniques](https://en.wikipedia.org/wiki/Electronic_waste) sont une préoccupation environnementale croissante, et de nombreuses juridictions réglementent la façon de les traiter. L'[effacement sécurisé des données](https://en.wikipedia.org/wiki/Data_erasure) et le réemploi ou le recyclage certifiés sont la fin du cycle de vie, non une pensée après coup. Une approche d'[économie circulaire](https://en.wikipedia.org/wiki/Circular_economy) garde les produits et les matériaux en usage aussi longtemps que possible.

Les métriques du matériel sont exposées à une distorsion familière. Une équipe récompensée pour un âge moyen bas peut renouveler des appareils qui vont bien. Une équipe récompensée pour de faibles dépenses peut étirer les durées de vie jusqu'à ce que les pannes perturbent les gens. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : chaque mesure est donc appariée avec un contrôle que les gens et la planète s'en portent mieux, et non seulement le chiffre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Planifiez un flux régulier.** Renouvelez une part du parc à chaque période, et apprenez de chaque lot.
- **Décidez sur preuves.** Utilisez vos propres données de pannes, d'âge et d'usage pour choisir quand remplacer.
- **Regardez la distribution.** Les moyennes cachent la traîne des appareils vieux, défaillants et inactifs.
- **Comptez le coût total.** Le prix d'achat n'est qu'une part du coût d'un appareil sur sa vie (voir le sujet 7.5, Coût du service et économie unitaire).
- **Protégez les données jusqu'au bout.** Un appareil n'est pas retiré avant que ses données soient effacées et que la preuve soit consignée.
- **Préférez le réemploi et la réparation.** Gardez l'équipement en service tant qu'il sert bien les gens.
- **Traitez l'équipement comme une partie de l'environnement de travail.** Les gens ont besoin d'appareils qui fonctionnent.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profil d'âge | Distribution de l'âge des appareils par classe, et part au-delà de la durée de vie prévue | âge médian et âge au 85e percentile ; part des appareils plus vieux que la durée de vie prévue pour la classe | années ; pourcentage | Dates d'achat et de déploiement du registre des actifs | Gestion des actifs informatiques ; gestion de la capacité et de la performance | Revue de santé technique | Trimestrielle |
| Taux de renouvellement à temps | Part des appareils arrivés au remplacement prévu qui ont été remplacés dans la fenêtre prévue | appareils remplacés dans la fenêtre / appareils arrivés au remplacement prévu dans la période | pourcentage | Registre des actifs et plan de renouvellement | Gestion des actifs informatiques ; gestion des demandes de service | Entretien planifié de l'environnement de travail | Trimestrielle |
| Taux de défaillance par modèle | Pannes pour 100 appareils par an, par modèle et par tranche d'âge | pannes matérielles dans la période / appareils moyens en service, ramenés à l'année, fois 100 | pannes pour 100 par an | Enregistrements d'incidents et de réparations joints au registre | Gestion des incidents ; gestion des actifs informatiques | Défauts de l'environnement de travail | Trimestrielle |
| Part d'appareils inactifs | Part des appareils distribués sans activité sur une période fixée | appareils sans connexion ni activité réseau en 60 jours / appareils distribués | pourcentage | Journaux de gestion des postes, agrégés par classe | Gestion des actifs informatiques ; gestion financière | Réduction du gaspillage | Mensuelle |
| Délai de remplacement | Temps pour remplacer un appareil défaillant ou perdu par un appareil qui fonctionne | médiane et 85e percentile des heures ou des jours entre le signalement et le moment où l'utilisateur a un appareil qui fonctionne | jours | Enregistrements d'incidents et de demandes | Gestion des incidents ; gestion des demandes de service | Temps pour débloquer un membre de l'équipe | Mensuelle |
| Achèvement de l'élimination sécurisée | Part des appareils retirés avec une preuve consignée d'effacement ou de destruction des données | appareils retirés avec preuve d'effacement ou de destruction / appareils retirés | pourcentage | Enregistrements d'élimination et certificats d'effacement | Gestion de la sécurité de l'information ; gestion des actifs informatiques | Définition de terminé pour le retrait d'équipement | Mensuelle |
| Taux de réemploi et de recyclage | Part des appareils retirés qui ont été réemployés, remis à neuf ou recyclés par une filière approuvée | appareils réemployés, remis à neuf ou recyclés par une filière approuvée / appareils retirés | pourcentage | Enregistrements d'élimination et de partenaires | Gestion des actifs informatiques ; gestion des fournisseurs | Objectif de durabilité dans la planification | Trimestrielle |

Définissez les classes d'appareils (par exemple portable standard, poste de développeur, téléphone mobile, serveur, commutateur réseau), chacune avec sa propre durée de vie prévue. Le taux de défaillance ne compte que les pannes matérielles, et exclut les pannes logicielles, les dommages causés par l'utilisateur codés à part et la perte. L'horloge du délai de remplacement démarre au signalement et s'arrête quand l'utilisateur confirme un appareil qui fonctionne, non quand un appareil est expédié. La part d'appareils inactifs exclut les appareils intentionnellement de rechange, qui sont comptés comme une classe séparée.

## Recommandations

### Planifier le flux

**1. Fixez une durée de vie prévue pour chaque classe, et traitez-la comme une hypothèse.** Partez de la garantie du fournisseur et de votre propre expérience, et révisez à mesure que les données arrivent. Une durée de vie prévue de quelques années pour les portables, plus longue pour les équipements réseau et plus courte pour les appareils très sollicités est typique, mais le bon chiffre pour votre parc vient de vos propres données de pannes et d'usage. Écrivez la justification dans le registre.

**2. Renouvelez en continu par petits lots.** Remplacez une part régulière des appareils chaque mois ou chaque trimestre, ordonnée par âge, historique de pannes et besoin. De petits lots lissent le coût, répartissent le travail d'imagerie et de remise, et permettent de tester un nouveau modèle auprès de quelques utilisateurs avant de s'engager. Un seul grand renouvellement tous les quelques années concentre le risque et l'effort.

**3. Gardez une modeste réserve de rechange.** Un petit stock d'appareils prêts raccourcit le délai de remplacement pour les pannes, les pertes et les nouveaux arrivants. Dimensionnez la réserve à partir de votre propre historique de pannes et d'embauches, et revoyez-la chaque trimestre. Comptez les appareils de rechange comme leur propre classe pour qu'ils ne faussent pas l'utilisation.

**4. Planifiez avec la finance, non contre elle.** Convenez de la manière dont les appareils sont capitalisés et amortis, et de la façon dont un renouvellement régulier apparaît au budget. Les règles d'[amortissement](https://en.wikipedia.org/wiki/Depreciation) influencent le moment où un remplacement est le moins cher sur le papier, et elles ne doivent pas dicter le remplacement d'appareils qui servent encore bien les gens. Gardez une vue partagée du plan et de ses hypothèses.

### Apprendre de vos propres données

**5. Étudiez les pannes par modèle, par lot et par âge.** Joignez les enregistrements de réparation et d'incidents au registre et regardez les pannes pour 100 appareils par an par modèle et par tranche d'âge. Cherchez les lots qui tombent en panne tôt, les modèles qui tombent en panne d'une manière particulière et l'âge auquel les pannes commencent à augmenter. Servez-vous des constats pour choisir les modèles et choisir le moment du remplacement. Soyez prudent avec les petits échantillons, et dites quand un modèle compte trop peu d'appareils pour qu'on en juge (voir le sujet 1.6, Culture statistique pour les métriques de service).

**6. Utilisez la garantie et la réparation avec discernement.** Sachez ce que couvre la [garantie](https://en.wikipedia.org/wiki/Warranty) et pour combien de temps, consignez les réclamations et comparez le coût de la réparation avec celui du remplacement. La réparation garde l'équipement en usage et hors du flux de déchets, et le droit à la réparation des pièces et de l'information est un sujet de politique active à plusieurs endroits. Favorisez les modèles qui peuvent être réparés et améliorés, toutes choses égales par ailleurs.

**7. Mesurez l'usage pour trouver ce qui est inactif et ce qui est sollicité à l'excès.** Agrégez les données d'activité par classe et cherchez les appareils jamais utilisés et ceux qui sont constamment au maximum. Les appareils inactifs peuvent être réaffectés ou retirés. Les appareils sollicités à l'excès sont de la friction, et les utilisateurs la sentiront (voir le sujet 6.4, Expérience des utilisateurs et des employés). Respectez la vie privée : rapportez par classe et par groupe, jamais par personne, et utilisez le minimum de données.

**8. Suivez le délai de remplacement comme un service.** Mesurez le temps qu'il faut à une personne pour obtenir un appareil qui fonctionne après une panne ou une perte, et incluez les étapes : signalement, approbation, stock, imagerie, livraison et remise. Le 85e percentile vous dit à quel point les cas malchanceux sont mauvais. Corrigez d'abord l'étape la plus lente.

### Bien gérer les appareils

**9. Gérez les appareils de façon centralisée et cohérente.** La [gestion des appareils mobiles](https://en.wikipedia.org/wiki/Mobile_device_management) et les outils semblables permettent d'inscrire, de configurer, de mettre à jour et d'effacer les appareils à distance, ce qui réduit le travail manuel et le risque. Servez-vous-en pour garder le registre exact, pour pousser les mises à jour en respectant la concentration des gens et pour soutenir la réponse en cas de perte d'appareil.

**10. Faites de l'élimination sécurisée un processus défini.** Suivez une norme reconnue d'assainissement des supports, comme les lignes directrices publiées par le National Institute of Standards and Technology des États-Unis, ou l'équivalent dans votre juridiction. Consignez la méthode, la date et la preuve pour chaque appareil, et recourez à des partenaires certifiés pour la destruction et le recyclage. Une étape d'élimination sans preuve est une lacune.

**11. Préférez le réemploi, puis le recyclage.** Là où les appareils fonctionnent encore, redéployez-les en interne, donnez-les par un partenaire approuvé ou revendez-les après effacement. Recourez à des recycleurs certifiés pour le reste. Mesurez la part des appareils retirés qui va dans chaque filière et les raisons de ceux qui vont directement au rebut. La réglementation sur les déchets électroniques varie selon la juridiction et elle est appliquée : impliquez donc vos collègues du juridique et de la durabilité.

**12. Revoyez le cycle de vie avec les personnes qui s'en servent.** Une fois par trimestre, réunissez la finance, la sécurité, les achats, le centre de services et quelques utilisateurs pour regarder l'âge, les pannes, le délai et l'élimination. Demandez ce qui marche et ce qui agace les gens. C'est de la collaboration continue autour de l'environnement de travail, et cela garde le plan réaliste.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Profil d'âge | Remplacer des appareils sains pour abaisser la moyenne ; exclure les vieux appareils en les reclassant comme rechanges | Taux de défaillance par tranche d'âge ; part d'appareils inactifs ; revue des reclassements |
| Taux de renouvellement à temps | Élargir la fenêtre prévue ; reporter les dates prévues en modifiant le plan | Changements de plan consignés avec les raisons ; comparer avec les pannes et le retour des utilisateurs |
| Taux de défaillance par modèle | Coder les pannes comme dommages de l'utilisateur ou pannes logicielles ; retarder les enregistrements de réparation | Échantillonner le codage des pannes ; comparer les enregistrements de réparation avec les enregistrements d'incidents |
| Part d'appareils inactifs | Compter l'activité d'arrière-plan planifiée comme usage ; réaffecter les appareils inactifs à des utilisateurs fantômes | Utiliser la connexion humaine comme signal d'activité ; vérifier les affectations par sondage |
| Délai de remplacement | Arrêter l'horloge à l'expédition ; clore la demande avant que l'utilisateur ait un appareil qui fonctionne | L'horloge s'arrête à la confirmation de l'utilisateur ; enquête sur les remplacements récents |
| Achèvement de l'élimination sécurisée | Consigner l'effacement sans preuve ; certificats non appariés aux numéros de série | Apparier les certificats aux numéros de série ; auditer un échantillon avec le partenaire d'élimination |
| Taux de réemploi et de recyclage | Compter comme recyclés des appareils envoyés à un courtier dont le traitement en aval est inconnu | Exiger des partenaires certifiés et un rapport en aval ; audits par échantillon |

Une lecture saine est un profil d'âge avec une traîne de vieux appareils mince, des taux de pannes qui guident les achats, des délais de remplacement courts, des preuves d'élimination complètes et une part décroissante d'équipement qui va au rebut.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Renouvellement à cycle fixe | Budget prévisible et règles simples | Remplace des appareils qui vont bien ; crée un grand pic de travail |
| Renouvellement continu par lots | Coût et charge de travail lissés ; apprentissage entre les lots | Demande de bonnes données et de la discipline |
| Exploiter jusqu'à la panne | Coût d'achat le plus bas | Perturbe les gens ; coût imprévu ; risque de sécurité des vieux systèmes |
| Courte durée de vie prévue | Plus récent, plus rapide, mieux soutenu | Coût plus élevé et plus de déchets |
| Longue durée de vie prévue | Coût plus bas et moins de déchets | Plus de pannes et d'exposition de sécurité en queue de distribution |
| Réparation et réemploi internes | Garde les appareils en usage ; moins de déchets | Demande des compétences et des pièces |
| Élimination externalisée | Traitement spécialisé | Demande une supervision de la chaîne en aval |

La réponse en bref est de renouveler en continu par petits lots, selon l'âge, les pannes et le besoin, de réparer et de réemployer là où cela sert les gens, et de tenir la chaîne d'élimination à une norme dont vous pouvez fournir la preuve.

## Questions à discuter avec votre équipe

**1. À quoi ressemble le tableau d'âge et de pannes de nos appareils, et qui détient les plus vieux ?**
Montrez la distribution des âges et le taux de pannes par tranche. Regardez qui détient les plus vieux appareils et si ce sont les personnes qui ont le plus besoin d'un équipement fiable. L'animateur doit demander ce que l'équipe changerait à l'ordre de renouvellement d'après ce tableau.

**2. Combien de temps faut-il à quelqu'un pour obtenir un appareil qui fonctionne après la panne du sien ?**
Retracez les trois derniers remplacements du signalement à un appareil qui fonctionne. Notez les attentes. Demandez quelle étape pourrait être supprimée ou automatisée. Convenez d'un changement et d'un moyen de mesurer l'effet.

**3. Quels modèles nous causent le plus d'ennuis, et comment le savons-nous ?**
Listez les modèles aux plus forts taux de pannes ou de tickets. Vérifiez si l'échantillon est assez grand pour juger. Demandez comment les constats influencent le prochain achat. Sinon, décidez comment les faire remonter aux achats.

**4. Que ferions-nous si un appareil retiré réapparaissait avec des données dessus ?**
Parcourez le chemin d'élimination et la preuve conservée à chaque étape. Demandez où est le maillon le plus faible et qui vérifie le partenaire en aval. Convenez d'un contrôle par sondage des preuves d'élimination pour le trimestre suivant.

**5. Où notre équipement est-il inactif, et pourquoi ?**
Regardez les appareils sans usage en 60 jours et les rechanges. Demandez s'ils doivent être réaffectés, retirés ou gardés. La conversation révèle aussi des écarts entre ce que les gens ont reçu et ce dont ils ont besoin.

**6. Que faudrait-il pour réemployer ou réparer davantage de ce que nous retirons ?**
Listez les obstacles : compétences, pièces, politique ou partenaires. Demandez à quoi ressemblerait un projet pilote avec une classe d'appareils et comment il serait mesuré. Incluez les points de vue de la durabilité et de la finance.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison dépendent de machines et d'appareils de test fiables, et elles ressentent directement les compilations lentes et les portables défaillants. Elles doivent signaler l'équipement qui les ralentit, participer au choix des modèles pour leurs rôles et attendre un chemin de remplacement rapide. Les équipes qui testent sur des appareils physiques, comme des téléphones, doivent traiter ces appareils comme des actifs avec des responsables et un plan de renouvellement.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent la chaîne d'approvisionnement : achat, réception, imagerie, déploiement, réparation et élimination. Elles doivent tenir les enregistrements à jour, surveiller les schémas de pannes, garder une réserve de rechange raisonnable et conserver les preuves d'élimination. Elles portent le travail physique, et leur capacité limite la vitesse du renouvellement.

### Direction et gouvernance

Les dirigeants veulent un coût prévisible, un faible risque et une histoire de durabilité. Ils doivent financer un renouvellement régulier, demander des données d'âge et de pannes plutôt qu'un simple âge moyen et exiger des preuves d'élimination. La gouvernance doit vérifier que les obligations environnementales et de protection des données sont respectées et que le plan est revu quand les conditions changent.

### Clients et utilisateurs

Les utilisateurs veulent un appareil qui fonctionne, vite remplacé quand ce n'est pas le cas. Ils détiennent aussi une part du résultat : signaler tôt les problèmes, rendre l'équipement et dire à l'informatique quand ils déménagent. Leur point de vue sur l'équipement et le processus de remplacement est le retour le plus direct qui soit. Impliquez-les dans le choix des modèles pour leur travail.

## En pratique : un exemple de gestion des services

Le service informatique d'un gouvernement de comté soutient 3 800 personnes sur 40 sites, avec un mélange d'appareils de bureau, de terrain et partagés. Les chiffres ci-dessous sont illustratifs.

Tous les quatre ans, le comté remplaçait tous les portables en un seul marché, et le dernier cycle s'est terminé par un pic de pannes l'année précédant le remplacement et des mois de travail d'imagerie l'année du remplacement. Le gestionnaire des actifs propose un renouvellement régulier et construit un tableau à partir du registre et des enregistrements de réparation. L'âge médian des portables est de 3,2 ans et le 85e percentile de 5,1 ans. Les pannes pour 100 portables par an passent d'environ 6 pour les appareils de moins de trois ans à environ 19 pour ceux de plus de cinq. Un modèle acheté en un seul lot montre 24 pannes pour 100 par an à deux ans d'âge, causées par un défaut de batterie. Le délai médian de remplacement est de 5 jours, avec un 85e percentile de 12 jours, surtout à attendre l'imagerie. La part d'appareils inactifs est de 7 %, surtout des rechanges et des appareils de personnes en congé prolongé. Sur 410 portables retirés l'an dernier, 366 ont un certificat d'effacement consigné, soit un taux d'achèvement de 89 %, et 12 % sont allés à un recycleur sans rapport en aval.

L'équipe fait quatre changements. Elle passe à un renouvellement trimestriel d'environ 6 % des portables, ordonné par âge et historique de pannes, avec le personnel de terrain et les appareils les plus vieux d'abord. Elle négocie avec le fournisseur le lot défectueux au titre de la garantie. Elle garde une réserve de rechange de 2 % du parc, préchargée avec l'image standard, ce qui réduit l'attente d'imagerie. Elle exige un certificat apparié au numéro de série pour chaque appareil éliminé, et passe à un recycleur qui rend compte du traitement en aval. Elle lance aussi un petit projet pilote de remise à neuf et de redéploiement d'appareils de moins de quatre ans.

Deux trimestres plus tard, le 85e percentile du délai de remplacement est de 4 jours, la part d'appareils de plus de cinq ans est passée de 22 % à 13 %, l'achèvement des preuves d'élimination est de 99 % et le taux de réemploi et de recyclage par les filières approuvées est de 94 %. Le bureau des finances demande un objectif unique pour l'âge moyen des appareils, et le gestionnaire des actifs propose de suivre ensemble le profil d'âge et le taux de pannes, expliquant qu'un âge moyen bas peut s'acheter en remplaçant des appareils sains. La décision est consignée dans le journal de décision, avec une revue dans six mois.

## Agilité, IA, automatisation et analytique

### Agilité

Planifiez le renouvellement comme un flux régulier et revoyez régulièrement les données d'âge et de pannes avec les utilisateurs. La précaution est qu'un âge de remplacement rigide gaspille des appareils qui fonctionnent et tend les budgets.

### IA

Les fonctionnalités d'IA peuvent relever les exigences matérielles, par exemple pour des modèles locaux, ce qui change le calendrier de renouvellement. Suivez les pannes et l'âge à partir de vos propres données et ajoutez une mesure des appareils qui ne peuvent pas faire tourner les outils dont les gens ont besoin. La précaution est que les affirmations des fournisseurs sur le matériel « prêt pour l'IA » doivent être testées face à vos propres charges de travail.

### Automatisation

Automatisez les événements du cycle de vie, comme les dates de garantie et les étapes d'élimination, et mesurez l'automatisation sur les événements manqués. La précaution est que les flux automatiques d'effacement et d'élimination demandent une preuve d'achèvement : auditez donc un échantillon.

### Analytique

Montrez le profil d'âge et les taux de pannes par modèle avec les décomptes. La décision éclairée est de combien renouveler à chaque période. La précaution est que les taux de pannes de petites flottes sont bruités : évitez donc les conclusions tirées d'une poignée d'appareils.

## Éclairage sectoriel

**Startup.** Les appareils sont achetés au besoin et souvent par la personne qui s'en servira. Gardez une liste simple avec les dates d'achat, effacez les appareils au départ et évitez de trop acheter. Utilisez tôt un outil d'inscription géré, car c'est moins cher que de l'ajouter après coup.

**Petite entreprise.** Le coût d'un appareil défaillant retombe sur quelques personnes. Gardez un ou deux appareils de rechange, consignez les dates de garantie et ayez une routine d'effacement et d'élimination. Les recycleurs et remettants à neuf locaux peuvent être de bons partenaires. Une liste de vérification d'élimination de trois lignes vaut mieux que rien.

**Grande entreprise.** L'échelle rend importants le comportement par lots et la gestion des fournisseurs. Servez-vous des données de pannes pour négocier avec les fournisseurs, standardisez quelques modèles par classe et menez un renouvellement continu avec un soutien logistique. Alignez-vous sur les rapports de durabilité, puisque le matériel domine souvent l'empreinte de l'informatique.

**Gouvernement et secteur public.** Les règles de passation de marchés, la conservation des documents et une protection stricte des données façonnent le cycle de vie. Documentez l'assainissement selon une norme reconnue, conservez les preuves d'élimination pendant la durée exigée et envisagez des engagements publics sur la durabilité et la réparation. Les organismes publics peuvent être tenus de rapporter les déchets électroniques (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de joindre les données du registre, des réparations et des postes ; un peu d'outillage de gestion des appareils s'il n'est pas déjà présent ; la réserve de rechange ; et le travail de processus de l'élimination avec preuve. Les économies et les bénéfices se voient dans moins de pannes perturbatrices, un budget plus lisse, moins d'équipement gaspillé et un moindre risque d'incident de données.

Construisez le dossier à partir de vos propres données. Comparez le coût d'exploiter un appareil au-delà de sa durée de vie prévue, y compris l'effort de soutien et le temps de travail perdu par panne, avec le coût de le remplacer plus tôt. Comparez le coût de la réserve de rechange avec les jours de travail perdus évités par panne. Comptez le nombre d'appareils retirés sans preuve d'effacement, et le coût d'un incident de données qui en découlerait. Évitez de citer des durées de vie moyennes d'appareils ou des chiffres de déchets électroniques tirés de sources publiées sans vérifier leur méthode et leur date. Le coût total de possession réunit ces éléments (voir le sujet 7.5, Coût du service et économie unitaire), et le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) complet d'un appareil comprend l'achat, le soutien, l'énergie, la perturbation et l'élimination.

## Anti-modèles et pièges

- **Tout remplacer selon un calendrier.** Cela gaspille des appareils qui fonctionnent et crée un pic de charge. Utilisez l'âge, les pannes et le besoin.
- **Exploiter jusqu'à la panne.** Le coût imprévu et la perturbation dépassent l'économie. Surveillez la traîne d'âge.
- **Utiliser l'âge moyen comme objectif.** Il peut être atteint en remplaçant des appareils sains. Montrez le profil et le taux de pannes.
- **Se fier aux chiffres de fiabilité des fabricants.** Votre usage diffère. Utilisez vos propres données de pannes.
- **Éliminer sans preuve.** Un effacement non consigné est un risque dont vous ne pouvez montrer que vous l'avez géré.
- **Envoyer les appareils au recycleur le moins cher.** Le traitement en aval compte. Utilisez des partenaires certifiés.
- **Suivre les gens à travers leurs appareils.** Rapportez par classe et par groupe, et jamais par individu.
- **Ignorer la réparation et le réemploi.** Garder l'équipement en service coûte moins cher et est meilleur pour l'environnement.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Planification | Acheter quand ça casse | Renouvellement périodique au calendrier | Durée de vie prévue par classe ; renouvellement régulier par lots | Renouvellement calé sur l'âge, les pannes et le besoin ; rechanges dimensionnées sur les données | Renouvellement coordonné avec les fournisseurs, la finance et les objectifs de durabilité entre sites |
| Apprendre des données | Aucun enregistrement de pannes | Enregistrements de réparation tenus | Taux de pannes par modèle et âge suivis | Les constats changent les achats et le calendrier ; délai géré | Données de pannes et d'usage partagées avec les fournisseurs pour améliorer la conception et les conditions |
| Sortie | Les appareils disparaissent | Effacement informel | Processus d'élimination avec preuve pour chaque appareil | Preuves auditées ; réemploi et recyclage suivis | Pratiques circulaires avec des partenaires certifiés et rapport public |

## Liste de vérification

- [ ] Les classes d'appareils et les durées de vie prévues sont définies, avec la justification consignée.
- [ ] Un plan de renouvellement régulier existe et est revu avec la finance.
- [ ] Le profil d'âge, le taux de défaillance par modèle et le délai de remplacement sont rapportés.
- [ ] Une réserve de rechange est dimensionnée à partir des données de pannes et d'embauches.
- [ ] Les appareils inactifs sont identifiés par classe, avec des règles de vie privée en place.
- [ ] Les réclamations de garantie et les réparations sont consignées et utilisées dans les décisions d'achat.
- [ ] Chaque appareil retiré a une méthode d'assainissement et une preuve consignées.
- [ ] Les partenaires d'élimination sont certifiés et rendent compte du traitement en aval.
- [ ] Les taux de réemploi et de recyclage sont suivis.
- [ ] Une revue trimestrielle inclut la finance, la sécurité, les achats, le centre de services et les utilisateurs.

## Prompts d'IA

**Analysez les données de pannes par modèle et par âge.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Concevez un plan de renouvellement continu.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Passez en revue un processus d'élimination.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Réduisez le délai de remplacement.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de cycle de vie du matériel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique matérielle porte son vecteur de détournement, son garde-fou et sa règle de preuve.

## Idées clés

- Renouvelez en continu une part régulière des appareils, à partir de vos propres données d'âge, de pannes et d'usage.
- Regardez la distribution des âges et les pannes par modèle, non la moyenne.
- Gardez le remplacement rapide avec une réserve de rechange et un chemin court et mesuré.
- Traitez l'élimination sécurisée avec preuve comme la fin du cycle de vie, et préférez la réparation, le réemploi et le recyclage certifié.
- Rapportez par classe d'appareils et par groupe, et ne suivez jamais des individus à travers leur équipement.
- Revoyez le cycle de vie avec la finance, la sécurité, les achats et les utilisateurs ensemble.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
