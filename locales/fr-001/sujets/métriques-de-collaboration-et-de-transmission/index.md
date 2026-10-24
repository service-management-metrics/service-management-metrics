# Métriques de collaboration et de transmission

**Le travail ralentit et la qualité baisse partout où il change de mains : mesurez donc les transmissions, l'attente entre elles et la dépendance envers des personnes seules, et servez-vous des chiffres pour réunir les bonnes personnes plutôt que de compter qui parle à qui.**

## Vue d'ensemble et motivation

Les principes du Manifeste agile disent que les gens du métier et les développeurs doivent travailler ensemble quotidiennement tout au long d'un projet. L'observation sous-jacente est ancienne et solide : la plus grande partie du retard dans une organisation de services ne vient pas de personnes qui travaillent lentement. Elle vient du travail qui attend entre les personnes. Une demande passe du centre de services à une équipe de deuxième niveau, puis à une équipe applicative, puis à un administrateur de base de données, et à chaque étape elle rejoint une file, perd du contexte et risque d'être renvoyée. Les personnes impliquées peuvent chacune être rapides. C'est le système qui est lent.

La gestion des services informatiques (ITSM), telle que codifiée par ITIL, organise depuis longtemps le soutien en niveaux et en équipes, l'escalade étant le mécanisme qui déplace un problème vers quelqu'un qui peut le résoudre. Cette structure a des avantages : spécialisation, responsabilité claire et accès contrôlé. Elle crée aussi des transmissions, et les transmissions ont un coût. La pratique agile et DevOps répond en bâtissant des équipes pluridisciplinaires qui portent une plus grande part du travail de bout en bout, et en encourageant la collaboration en temps réel. Les deux traditions arrivent à des conclusions semblables : moins de transmissions, des attentes plus courtes entre elles, et des personnes capables de résoudre le problème qui y travaillent ensemble.

Plusieurs idées aident pour la mesure.

- **Transmissions et files.** Chaque fois que le travail passe d'une équipe à une autre, il attend généralement dans une file. Le temps passé à attendre est souvent bien plus grand que le temps passé à travailler. C'est pourquoi l'efficacité du flux, présentée plus tôt, est généralement faible (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Un [goulot d'étranglement](https://en.wikipedia.org/wiki/Bottleneck_(production)) est un point de capacité limitée dans un processus, et il détermine le débit de l'ensemble.
- **La structure façonne la communication.** La [loi de Conway](https://en.wikipedia.org/wiki/Conway%27s_law) énonce que les organisations conçoivent des systèmes qui reproduisent leurs propres structures de communication. L'inverse est aussi praticable : si vous voulez un système avec moins de dépendances, organisez les équipes pour réduire les dépendances entre elles. Les frontières d'équipes créent des transmissions, et les transmissions façonnent l'architecture.
- **Dépendances.** Une [dépendance](https://en.wikipedia.org/wiki/Dependency_(project_management)) est une relation dans laquelle un travail ne peut avancer avant qu'un autre ait fini. Les dépendances entre équipes sont une source majeure de retard, et elles peuvent être cartographiées, comptées et réduites.
- **Les coûts de coordination croissent avec les personnes.** La [loi de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), tirée des essais de Frederick Brooks sur les projets logiciels, observe qu'ajouter des personnes à un projet en retard peut le retarder davantage, en partie à cause de la charge de communication ajoutée. Plus de monde dans une conversation n'est pas automatiquement mieux.
- **Dépendance envers des individus.** Le [facteur de bus](https://en.wikipedia.org/wiki/Bus_factor) est le nombre de personnes qui devraient être indisponibles pour arrêter un projet, généralement employé pour signaler le risque quand la connaissance est dans une seule tête. C'est une propriété de la répartition de la connaissance, non une évaluation d'une personne.

Les mesures de collaboration ont un côté sombre. Compter les messages, les réunions ou les liens de réseau comme mesure de la collaboration est facile et tentant, et glisse vite vers la surveillance des communications des gens. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique au groupe et à la vie privée : quand la « collaboration » devient un objectif, les gens produisent de l'activité visible, et quand elle devient de la surveillance, ils cessent de parler ouvertement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ici regardent donc les éléments de travail, les transmissions et les dépendances, et des schémas au niveau de l'équipe. Elles ne lisent pas les messages et ne classent pas les individus.

Ce sujet se relie aux mesures de flux de la partie 2, aux mesures d'incidents et de demandes de la partie 3, et aux transmissions avec les fournisseurs de la partie précédente (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Principes clés

- **Mesurez le travail, non les conversations.** Les transmissions, les attentes et les dépendances sont des propriétés des éléments de travail et des équipes.
- **Moins de transmissions valent mieux que des transmissions plus rapides.** La meilleure transmission est celle qui n'a pas lieu.
- **Réunissez les gens.** La collaboration en temps réel supprime souvent toute une chaîne d'attente.
- **Rendez les dépendances visibles, et réduisez-les.** Cartographiez-les, comptez-les et changez les frontières d'équipes ou l'architecture là où elles font le plus mal.
- **Répandez la connaissance délibérément.** Les points uniques de connaissance sont des risques, et le partage est une activité de conception.
- **Protégez la concentration.** Une collaboration qui remplit chaque heure de réunions détruit le temps de faire le travail.
- **Impliquez les parties prenantes en continu.** Des questions répondues en quelques heures servent mieux que des réponses recueillies dans des réunions hebdomadaires.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nombre de transmissions | Nombre de fois qu'un élément de travail change d'équipe responsable avant son achèvement | médiane et 85e percentile des transferts d'équipe à équipe par élément achevé, par type d'élément | transferts par élément | Historique d'affectation de l'ITSM ou du suivi, agrégé par équipe | Gestion des incidents ; gestion des demandes de service ; maîtrise des changements | Équipes pluridisciplinaires portant le travail de bout en bout | Mensuelle |
| Part d'attente de transmission | Part du temps écoulé d'un élément passée à attendre après une transmission avant la reprise du travail | temps entre la transmission et la première action de l'équipe réceptrice / temps écoulé total, médiane sur les éléments | pourcentage | Horodatages d'affectation et d'activité | Gestion des incidents ; gestion des demandes de service | Efficacité du flux ; temps de file | Mensuelle |
| Taux de réaffectation | Part des éléments passés entre équipes plus de deux fois ou renvoyés à une équipe précédente | éléments réaffectés plus de deux fois ou renvoyés / éléments achevés | pourcentage | Historique d'affectation | Gestion des incidents ; gestion des problèmes | Reprise et travail qui rebondit | Mensuelle |
| Retard de dépendance | Temps que passent les éléments bloqués en attente d'une autre équipe | médiane et 85e percentile des jours dans un état bloqué par une autre équipe, avec la dépendance nommée | jours | État bloqué du suivi et champ de dépendance | Maîtrise des changements ; gestion des versions et des déploiements | Âge des éléments de travail bloqués | Mensuelle |
| Taux de résolution collaborative | Part des incidents résolus par des personnes de plusieurs équipes travaillant ensemble en temps réel sans escalade séquentielle | incidents avec une collaboration en temps réel consignée (par exemple un canal ou un appel partagé) résolus sans autre transmission / incidents de priorité éligible | pourcentage | Enregistrements d'incidents avec étiquette de collaboration | Gestion des incidents ; gestion des incidents majeurs | Se mobiliser en essaim sur les problèmes | Mensuelle |
| Couverture de la connaissance | Part des composants critiques que peut exploiter et modifier au moins un nombre énoncé de membres de l'équipe | composants critiques que peut exploiter et modifier au moins le nombre cible de personnes / composants critiques | pourcentage | Carte des compétences et des responsabilités tenue par l'équipe | Gestion des connaissances ; gestion de la continuité des services | Responsabilité partagée et propriété collective du code | Trimestrielle |
| Délai de réponse des parties prenantes | Temps entre la question d'une équipe à une partie prenante et une réponse utilisable | médiane et 85e percentile des heures entre la question consignée et la réponse consignée | heures | Journal des questions ou champ du suivi pour les questions ouvertes | Gestion des niveaux de service ; gestion de la relation d'affaires | Implication continue des parties prenantes | Mensuelle |

Agrégez au niveau de l'équipe, de la file ou du service, et ne rapportez jamais par individu. Le nombre de transmissions exclut les affectations automatiques qui ne changent pas l'équipe responsable. La part d'attente démarre quand l'élément est affecté à l'équipe réceptrice et se termine à sa première action consignée. La couverture de la connaissance utilise le jugement propre de l'équipe sur qui peut exploiter un composant, revu avec l'équipe, et ne classe jamais d'individus. Les données de collaboration viennent des étiquettes et des enregistrements des éléments, non de la lecture des messages.

## Recommandations

### Cartographier les transmissions

**1. Dessinez le chemin d'un élément typique.** Choisissez un type courant de demande ou d'incident et retracez son chemin du premier contact à la résolution : chaque équipe, chaque file, chaque attente. Utilisez l'historique du suivi pour des exemples réels, non le schéma officiel du processus. La carte montre où le travail attend et où il rebondit. Partagez-la avec les équipes concernées et demandez-leur d'identifier le gaspillage qu'elles voient.

**2. Mesurez les transmissions et les attentes à partir de l'historique des éléments de travail.** Utilisez les horodatages d'affectation et d'activité pour calculer le nombre de transmissions, la part d'attente et le taux de réaffectation de chaque type d'élément. Regardez la distribution : la plupart des éléments peuvent passer une seule fois, alors qu'une longue queue rebondit plusieurs fois. C'est dans la queue que se trouvent les plus grands retards et la plus grande frustration.

**3. Lisez les données avec les personnes qui font le travail.** Un taux de réaffectation élevé peut refléter une responsabilité floue, des informations manquantes ou un triage légitime. Demandez aux équipes avant de conclure. Elles savent pourquoi les éléments rebondissent et ce qui l'arrêterait.

### Réduire les transmissions et l'attente

**4. Déplacez la capacité vers le travail.** Là où beaucoup d'éléments vont à une seconde équipe pour une action simple, demandez si la première équipe pourrait recevoir la connaissance, l'accès ou l'automatisation pour la faire. Le libre-service et les guides d'exécution peuvent supprimer des transmissions entières (voir le sujet 3.7, Métriques de libre-service et d'automatisation). Veillez à ce que le déplacement du travail ne surcharge pas simplement la première équipe.

**5. Utilisez la collaboration à la place de l'escalade séquentielle.** Pour les incidents complexes ou urgents, réunissez les personnes pertinentes en temps réel, une personne coordonnant, au lieu de faire passer le ticket par des niveaux. Cette pratique, souvent appelée mobilisation en essaim (swarming), supprime les attentes et la perte de contexte que crée l'escalade par niveaux. Suivez le taux de résolution collaborative, et regardez si les résultats et la satisfaction s'améliorent (voir le sujet 3.4, Métriques des incidents majeurs).

**6. Clarifiez la responsabilité aux frontières.** Pour chaque service et composant, dites qui en est responsable, comment le joindre et ce qu'il lui faut dans une transmission. Un court modèle d'informations requises, convenu avec l'équipe réceptrice, réduit les retours pour détails manquants. Revoyez les cas de réaffectation pour trouver les lacunes de responsabilité.

**7. Réduisez les dépendances là où elles font le plus mal.** Cartographiez les dépendances entre équipes, comptez la fréquence à laquelle chacune cause un retard et attaquez les pires. Les options comprennent changer l'architecture, donner à une équipe la capacité qu'elle attend sans cesse, ou réorganiser les équipes autour des services. Les [équipes pluridisciplinaires](https://en.wikipedia.org/wiki/Cross-functional_team) qui contiennent les compétences nécessaires pour livrer un service du début à la fin minimisent les dépendances, et elles intègrent la collaboration continue à la structure. La loi de Conway suggère de changer ensemble la structure et la conception.

### Répandre la connaissance et l'implication

**8. Rendez visible la couverture de la connaissance et améliorez-la.** Gardez une carte simple des composants critiques et des personnes capables d'exploiter et de modifier chacun. Cherchez les composants connus d'une seule personne et planifiez le travail en binôme, la documentation et la rotation pour répandre la connaissance. Traitez le résultat comme un risque pour le système. Le but est la résilience et un rythme soutenable pour les personnes qui en savent le plus, car une personne qui est la seule experte ne peut pas prendre de congé.

**9. Gardez les parties prenantes dans la boucle en continu.** Convenez de la manière de joindre les parties prenantes avec des questions et de la rapidité des réponses. Une équipe qui attend une semaine une décision sur un détail attend la partie prenante, et le coût est réel. Consignez les questions et les réponses, mesurez le délai de réponse et servez-vous-en dans les conversations avec les parties prenantes sur leur implication.

**10. Protégez le temps de travail concentré.** La collaboration doit être motivée. Revoyez les réunions qui remplissent le calendrier et demandez pour chacune quelle décision elle soutient. Réduisez le nombre de personnes dans les conversations qui n'en ont pas besoin, conformément à la loi de Brooks. Appariez cela avec les mesures de concentration du sujet antérieur sur la santé de l'équipe (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

### Rester honnête

**11. Ne mesurez pas le volume de communication.** Compter les messages, les réunions ou les liens de réseau dit peu de chose sur la qualité du travail ensemble, et invite à la surveillance d'individus. Si votre équipe choisit d'utiliser l'analyse de réseaux sociaux pour comprendre la circulation de l'information, faites-le avec consentement, au niveau du groupe et pour l'apprentissage propre de l'équipe, et jamais pour évaluer des individus.

**12. Revoyez les mesures de transmission avec les équipes et les fournisseurs.** Partagez les schémas entre les équipes et les fournisseurs concernés et convenez d'une ou deux améliorations conjointes. Suivez si le nombre de transmissions et les attentes baissent. Aux frontières avec les fournisseurs, incluez les mesures dans les revues conjointes (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Nombre de transmissions | Garder les éléments affectés à une équipe pendant que d'autres font le travail ; réaffecter à une file partagée pour éviter le décompte | Vérifier l'activité réelle par équipe ; compter les transmissions par activité, non par la seule affectation |
| Part d'attente de transmission | Consigner une première action qui n'est qu'un accusé de réception ; affecter tard à la bonne équipe | Définir la « première action » comme une étape substantielle ; comparer avec la satisfaction et le délai de résolution |
| Taux de réaffectation | Refuser de réaffecter même quand c'est faux ; clore et rouvrir des éléments sous une autre équipe | Qualité de la résolution et taux de réouverture ; échantillonner les éléments qui ont rebondi |
| Retard de dépendance | Ne pas consigner l'état bloqué ; nommer la mauvaise dépendance | Comparer avec le temps de cycle et l'âge des éléments ; revoir le champ de dépendance avec les équipes |
| Taux de résolution collaborative | Étiqueter chaque incident comme collaboratif ; créer des canaux partagés sans vrai travail | Vérifier que l'appel ou le canal incluait les personnes qui ont résolu ; délai de résolution et résultats |
| Couverture de la connaissance | Lister des personnes qui pourraient en théorie faire le travail ; gonfler la carte | Preuves de travail en binôme ou d'exercice ; demander qui a réellement effectué le dernier changement |
| Délai de réponse des parties prenantes | Consigner tard les questions ; marquer une réponse comme reçue quand elle n'est pas utilisable | La partie prenante confirme que la réponse est utilisable ; échantillonner les questions |

Une lecture saine est moins de transmissions pour les éléments courants, des attentes plus courtes aux frontières qui subsistent, moins d'éléments qui rebondissent, des dépendances qui rétrécissent, plus d'incidents résolus par des personnes travaillant ensemble, des composants critiques connus de plusieurs personnes et des parties prenantes qui répondent en quelques heures.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Soutien par niveaux avec escalade | Spécialisation, contrôle de l'accès | Transmissions, attente, perte de contexte |
| Équipes pluridisciplinaires | Moins de transmissions, responsabilité partagée | Demandent des compétences larges ; peuvent dupliquer des spécialistes |
| Résolution collaborative | Plus rapide, meilleur apprentissage | Mobilise plusieurs personnes à la fois ; demande de la coordination |
| Escalade séquentielle | Usage efficace des spécialistes | Plus lente pour les problèmes complexes |
| Équipes de spécialistes centralisées | Profondeur d'expertise, normes cohérentes | Goulots d'étranglement, files |
| Spécialistes intégrés | Accès rapide | Isolement ; normes inégales |
| Culture de réunions lourde | Conscience partagée | Mange la concentration ; ralentit le travail |
| Communication écrite asynchrone | Préserve la concentration ; consigne les décisions | Plus lente pour les questions urgentes ou ambiguës |

La réponse en bref est de garder les spécialistes là où la profondeur compte, de réunir les gens en temps réel pour les problèmes complexes ou urgents, de réduire les transmissions par la capacité et une responsabilité claire, et d'équilibrer les réunions avec une concentration protégée.

## Questions à discuter avec votre équipe

**1. Retracez le dernier incident ou la dernière demande qui a rebondi entre équipes. Où a-t-il attendu, et pourquoi ?**
Utilisez l'historique de l'élément. Marquez chaque transmission et chaque attente. L'animateur doit chercher les informations manquantes, la responsabilité floue et les files que personne ne surveille. Convenez d'un changement qui aurait arrêté le rebond.

**2. Quelle équipe attendons-nous le plus souvent, et de quoi a-t-elle besoin de notre part pour être plus rapide ?**
Listez les dépendances et les retards qu'elles causent. Invitez l'autre équipe à la conversation, ou préparez des questions pour elle. Convenez d'un changement du modèle de transmission ou de l'accord de travail.

**3. Que ne savent faire qu'un ou deux d'entre nous, et que se passe-t-il quand ils sont absents ?**
Nommez les composants ou les tâches. Demandez quel plan répandrait la connaissance : travail en binôme, documentation, rotation. L'animateur doit prendre soin de traiter cela comme un risque pour le système et une question de charge de travail pour les experts.

**4. Quand résoudre un problème ensemble en temps réel a-t-il mieux marché que de le transmettre ?**
Rappelez un exemple. Qu'est-ce qui a fait que cela a marché : les bonnes personnes, un coordinateur, une vue partagée ? Discutez de quand utiliser cette approche et de la manière de la rendre possible, comme un canal permanent et des règles sur qui se joint.

**5. Combien de temps attendons-nous des réponses de nos parties prenantes, et que cela coûte-t-il ?**
Regardez les questions ouvertes et leur âge. Discutez de ce qui ralentit les réponses : disponibilité, questions peu claires ou autorité floue. Convenez d'une attente avec les parties prenantes et d'un moyen de la suivre.

**6. Lesquelles de nos réunions pourraient être remplacées par une note écrite ou une décision ?**
Listez les réunions régulières et pour chacune demandez quelle décision elle soutient et qui doit y être. Annulez-en ou raccourcissez-en une. Convenez de protéger une plage de temps sans réunion.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent beaucoup de dépendances et ressentent l'attente. Elles doivent cartographier leurs dépendances, demander les capacités qu'elles attendent sans cesse, partager la connaissance pour éviter les points uniques et garder les parties prenantes proches. Une composition pluridisciplinaire supprime souvent les plus grands retards.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de soutien sont au centre des transmissions : elles reçoivent, acheminent et résolvent. Elles doivent tenir à jour l'information de responsabilité, utiliser la collaboration en temps réel pour les problèmes difficiles et consigner exactement les transmissions. Elles savent quelles frontières causent le plus de peine et peuvent dire quelle information éviterait les retours.

### Direction et gouvernance

Les dirigeants façonnent la structure qui crée les transmissions. Ils doivent regarder les données de transmissions et de dépendances en concevant les équipes et le financement, soutenir les équipes pluridisciplinaires là où elles aident et éviter les mesures du volume de communication. La gouvernance doit traiter des retards répétés à une même frontière comme un problème structurel à corriger.

### Clients et utilisateurs

Les utilisateurs ressentent les transmissions comme le fait d'être renvoyés d'un à l'autre, de se répéter et d'attendre. On doit leur dire qui détient leur problème et les tenir informés. Leur expérience d'être renvoyés est une mesure directe de la qualité de la collaboration, et leur retour doit se lire à côté des chiffres (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Le groupe informatique d'un détaillant national exploite un centre de services, une équipe d'infrastructure, une équipe de plateforme applicative et plusieurs équipes produit. Les utilisateurs signalent que les demandes sur le système de point de vente prennent trop de temps. Les chiffres ci-dessous sont illustratifs.

Le responsable du service retrace 60 demandes récentes. La demande médiane passe par 3 équipes et le 85e percentile par 6. Dans le cas médian, 71 % du temps écoulé est passé à attendre après une transmission avant que l'équipe réceptrice agisse. 22 % des demandes sont réaffectées plus de deux fois, souvent entre les équipes d'infrastructure et de plateforme, qui croient chacune que l'autre détient le problème. Le temps bloqué en attente d'une autre équipe a une médiane de 3 jours pour les demandes qui concernent des certificats, et de 8 jours au 85e percentile. La connaissance du renouvellement des certificats de la plateforme est détenue par un seul ingénieur, et deux autres composants critiques ne sont connus que d'une personne chacun. Les parties prenantes de l'exploitation des magasins prennent une médiane de 26 heures pour répondre aux questions de l'équipe de livraison.

Le groupe convient de quatre changements avec les équipes. Un court tableau de responsabilité énonce quelle équipe détient chaque composant du service de point de vente et ce que doit contenir une transmission. Le centre de services reçoit l'accès à un guide d'exécution et une automatisation pour les renouvellements de certificats, ce qui supprime une transmission courante. Pour les incidents prioritaires, le groupe met en place un canal permanent et une règle selon laquelle le coordinateur d'incident fait venir tout de suite les personnes pertinentes, au lieu d'escalader par niveaux. L'équipe de plateforme met une deuxième et une troisième personne en binôme sur le processus des certificats, et prévoit un travail en binôme semblable pour les deux autres composants, avec du temps protégé dans le plan. L'équipe de livraison et l'exploitation des magasins conviennent d'une réponse le jour même pour les questions bloquantes, suivie dans un journal des questions.

Trois mois plus tard, la demande médiane passe par 2 équipes, la part d'attente tombe à 38 % et le taux de réaffectation à 9 %. Les demandes liées aux certificats ont un temps bloqué médian de moins d'un jour. La couverture de la connaissance sur les composants critiques monte de 52 % à 81 %. Le délai de réponse médian de l'exploitation des magasins tombe à 7 heures. On demande au responsable informatique une mesure de la quantité de communication entre équipes. Le responsable du service explique que le volume de messages dit peu de chose sur la circulation du travail, et que le suivre pourrait miner la confiance, et propose à la place les mesures de transmission et d'attente. La décision est consignée, et le tableau de responsabilité est ajouté à la description du service.

## Agilité, IA, automatisation et analytique

### Agilité

Réunissez tôt les bonnes personnes et revoyez régulièrement les transmissions avec les parties prenantes. La précaution est que compter les réunions ou les messages mesure l'activité, non la collaboration.

### IA

Les agents et assistants d'IA ajoutent de nouvelles transmissions entre personnes et logiciels. Mesurez les transmissions entre l'IA et les humains, y compris la part qui revient pour correction. La précaution est qu'une transmission à une IA qui ne peut pas terminer crée une boucle cachée.

### Automatisation

Capturez automatiquement les réaffectations et les attentes depuis le suivi, et mesurez l'acheminement automatisé sur les erreurs d'aiguillage. La précaution est que les métadonnées de communication sur des individus sont de la surveillance : gardez donc l'analyse au niveau de l'équipe.

### Analytique

Montrez les nombres de transmissions et la part d'attente par flux de valeur avec les décomptes. La décision éclairée est quelle transmission supprimer ou repenser. La précaution est que compter les transmissions sans leur cause mène à fusionner des équipes pour la mauvaise raison.

## Éclairage sectoriel

**Startup.** Les petites équipes collaborent naturellement, et les transmissions apparaissent quand des spécialistes émergent. Gardez les équipes pluridisciplinaires aussi longtemps que possible, documentez légèrement la responsabilité et guettez la connaissance détenue par une seule personne. N'importez pas trop tôt un soutien par niveaux.

**Petite entreprise.** Une ou deux personnes peuvent tout couvrir, et le plus grand risque est la dépendance envers elles. Partagez la connaissance par de simples guides d'exécution et assurez la relève en cas d'absence. Les transmissions vers les fournisseurs sont la frontière principale : gardez donc des contacts clairs et des chemins d'escalade.

**Grande entreprise.** L'échelle crée de nombreuses équipes, couches et fournisseurs, et les transmissions se multiplient. Cartographiez les chemins d'éléments les plus courants, concevez les frontières d'équipes autour des services et utilisez des rôles de coordination pour les incidents entre équipes. Partagez les données de transmissions entre équipes pour que les frontières reçoivent une attention conjointe.

**Gouvernement et secteur public.** La responsabilité est souvent partagée entre organismes, prestataires et frontières juridiques, et les transmissions impliquent la passation de marchés et l'approbation formelle. Rendez explicite le tableau de responsabilité, utilisez des revues conjointes avec les prestataires et des canaux partagés pour les incidents qui traversent les frontières (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort d'extraire et d'analyser l'historique d'affectation, le temps des équipes pour retracer les chemins et convenir de la responsabilité, le coût de la formation croisée et tout outillage de collaboration en temps réel. Restructurer les équipes est une décision plus grande, avec ses propres coûts.

Les rendements sont des délais de résolution et de livraison plus courts, moins de reprise due aux éléments qui rebondissent, un moindre risque lié aux points uniques de connaissance et un environnement de travail plus calme. Construisez le dossier à partir de vos propres données : la part du temps écoulé passée à attendre, le nombre d'éléments qui rebondissent, le coût des retards à la pire frontière et l'effet des absences de personnes clés sur les incidents passés. Évitez de citer des chiffres publiés sur le coût des transmissions à moins de pouvoir en retracer la source et le contexte. Comptez le coût des changements et comparez-le avec le retard supprimé (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Compter les messages ou les réunions.** Cela récompense le bruit et invite à la surveillance. Mesurez le flux du travail.
- **Optimiser la vitesse de chaque transmission.** Le but est d'avoir moins de transmissions. Supprimez-les là où vous le pouvez.
- **Blâmer l'équipe réceptrice pour les attentes.** La cause est souvent la file et la structure. Regardez le système.
- **Escalader par défaut.** Les niveaux séquentiels ajoutent de l'attente. Réunissez les gens pour les problèmes complexes.
- **Une responsabilité floue.** Les éléments rebondissent. Publiez un tableau de responsabilité et tenez-le à jour.
- **Des experts héros.** Les points uniques de connaissance sont un risque et un fardeau. Répandez délibérément la connaissance.
- **Les réunions comme collaboration.** Elles peuvent évincer le travail. Revoyez-les face aux décisions.
- **Traiter la couverture de la connaissance comme une évaluation individuelle.** Elle devient un classement. Gardez-la comme mesure du système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité des transmissions | Anecdotes | Chemins dessinés pour quelques services | Nombre de transmissions, part d'attente et réaffectations mesurés à partir de l'historique | Mesures revues avec les équipes et reliées aux résultats | Vue partagée entre équipes et fournisseurs ; frontières repensées à partir des données |
| Réduire les transmissions | Escalade par défaut | Quelques guides d'exécution et modèles | Tableaux de responsabilité ; capacité déplacée vers la première équipe ; collaboration pour les problèmes difficiles | Dépendances cartographiées et réduites ; résolution collaborative suivie | Équipes organisées autour des services avec un minimum de dépendances dans l'organisation |
| Connaissance et parties prenantes | Les experts portent tout | Partage informel | Couverture de la connaissance cartographiée ; questions des parties prenantes consignées | Couverture et délais de réponse gérés ; travail en binôme planifié | Connaissance et décisions circulent librement entre équipes, fournisseurs et parties prenantes |

## Liste de vérification

- [ ] Le chemin d'un élément typique a été retracé à partir de l'historique réel du suivi.
- [ ] Le nombre de transmissions, la part d'attente et le taux de réaffectation sont mesurés par type d'élément.
- [ ] La responsabilité de chaque service et composant est publiée et à jour.
- [ ] Un modèle de transmission énonce l'information dont l'équipe réceptrice a besoin.
- [ ] Les incidents complexes ou urgents utilisent la collaboration en temps réel avec un coordinateur.
- [ ] Les dépendances entre équipes sont cartographiées, et les pires sont en cours de réduction.
- [ ] La couverture de la connaissance des composants critiques est cartographiée, avec un plan pour la répandre.
- [ ] Les questions des parties prenantes sont consignées et les délais de réponse revus.
- [ ] Aucune mesure ne compte les messages, les réunions ou la communication individuelle.
- [ ] Les résultats sont partagés avec les équipes et les fournisseurs concernés.

## Prompts d'IA

**Analysez un chemin d'éléments de travail.**

```text
Here are anonymized assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Rédigez un tableau de responsabilité.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Planifiez la diffusion de la connaissance.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Concevez une approche collaborative pour les incidents.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organization] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de transmission ou de collaboration.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de collaboration mesure le travail et non des individus, avec son vecteur de détournement et son garde-fou.

## Idées clés

- Le plus gros du retard se trouve dans les attentes entre transmissions : mesurez donc le nombre de transmissions, la part d'attente et les réaffectations à partir de l'historique des éléments de travail.
- Réduisez les transmissions en déplaçant la capacité vers le travail, en clarifiant la responsabilité et en cartographiant et en coupant les dépendances.
- Réunissez les bonnes personnes en temps réel pour les problèmes complexes ou urgents.
- Répandez la connaissance des composants critiques, et traitez les points uniques de connaissance comme un risque du système.
- Gardez les parties prenantes impliquées en continu, avec des réponses rapides aux questions bloquantes.
- Ne mesurez jamais le volume de communication et n'évaluez jamais des individus sur la collaboration.

## Références et lectures complémentaires

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
