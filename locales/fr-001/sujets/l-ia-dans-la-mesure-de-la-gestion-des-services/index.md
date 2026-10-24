# L'IA dans la mesure de la gestion des services

**Avant que l'IA change le travail, écrivez à quoi ressemble le travail aujourd'hui, puis mesurez chaque usage de l'IA face à cette référence et face à un travail comparable fait sans elle, car les affirmations seront grandes et les preuves généralement minces.**

## Vue d'ensemble et motivation

L'intelligence artificielle se trouve désormais à l'intérieur de nombreux outils que les équipes utilisent pour construire et exploiter des services. L'[intelligence artificielle](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) est la capacité de systèmes informatiques à accomplir des tâches associées à l'intelligence humaine. En son sein, les systèmes d'[apprentissage automatique](https://en.wikipedia.org/wiki/Machine_learning) apprennent des schémas à partir des données, et les systèmes d'[IA générative](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), souvent bâtis sur de [grands modèles de langage](https://en.wikipedia.org/wiki/Large_language_model), produisent du texte, du code et d'autres contenus en réponse à des prompts. Dans la gestion des services informatiques (ITSM), ces capacités apparaissent dans le triage des tickets, le résumé des incidents, la rédaction d'articles de connaissances, les réponses suggérées au centre de services, la complétion et la revue de code dans les pipelines de livraison, la détection d'anomalies en supervision et les assistants conversationnels pour les utilisateurs. [AIOps](https://en.wikipedia.org/wiki/AIOps) est le nom souvent donné à l'application de l'IA aux données d'exploitation informatique.

Les affirmations faites pour ces outils sont grandes, et les preuves dans une organisation donnée sont généralement minces. Les fournisseurs rapportent du temps économisé. Les premiers adopteurs rapportent de l'enthousiasme. Les dirigeants demandent le gain d'efficience qui avait été promis. Les équipes, elles, rapportent que la production demande des vérifications, que certaines suggestions sont fausses avec assurance et que le travail a un autre goût. La mesure est la manière dont une organisation découvre laquelle de ces affirmations est vraie pour son propre travail. Cette partie du livre prend l'IA au sérieux comme chose à mesurer, avec les mêmes garde-fous que toute autre famille de métriques.

L'IA change le problème de mesure de quatre façons.

- **Le volume et la vitesse montent pendant que la qualité devient plus difficile à voir.** L'IA peut produire rapidement des tickets, des réponses, du code et des documents : les mesures de production montent donc. Savoir si la production est bonne est une question distincte (voir le sujet 10.4, Inflation des métriques et dilution de la qualité).
- **Les références disparaissent.** Une fois l'IA d'usage quotidien, on ne peut plus retrouver à quoi ressemblait le travail sans elle. Une référence doit être relevée avant le changement, ou un groupe de comparaison doit exister.
- **Les humains restent dans la boucle, avec des conséquences.** Les conceptions avec [intervention humaine](https://en.wikipedia.org/wiki/Human-in-the-loop) gardent une personne responsable du résultat. Les personnes qui revoient la production d'une machine peuvent s'en remettre trop volontiers à elle, un schéma connu sous le nom de [biais d'automatisation](https://en.wikipedia.org/wiki/Automation_bias), ou passer plus de temps à vérifier qu'elles n'en ont économisé.
- **Les productions peuvent être fluides et fausses.** Une [hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) est une production assurée que ni l'entrée ni les faits n'appuient. Les mesures doivent inclure un contrôle de l'exactitude, échantillonné par une personne.

Les façons de travailler agiles et ITIL fournissent toutes deux une posture envers cela. Les objectifs agiles de livraison continue, d'amélioration continue et d'évolution permanente suggèrent de traiter chaque usage de l'IA comme une petite expérience : énoncer le bénéfice attendu, l'essayer avec quelques personnes volontaires, comparer et décider. Le principe directeur d'ITIL de progresser par itérations avec retour va dans le même sens, et son accent sur la valeur demande quel résultat s'améliore pour les utilisateurs et l'activité, non la quantité de texte produite. L'objectif de personnes motivées est servi quand l'IA soulage le travail fastidieux et respecte leur jugement, et il n'est pas servi quand l'IA devient un moyen d'accélérer le rythme ou de surveiller les personnes qui l'utilisent. Un rythme soutenable signifie que le temps économisé ne doit pas être silencieusement converti en plus de demande.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique à l'IA sous sa forme la plus aiguë. Si l'« adoption de l'IA » ou la « part de code généré par l'IA » devient un objectif, les gens utiliseront l'outil là où il n'aide pas, et la qualité paiera pour le chiffre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet couvre les fondations : où l'IA entre dans le travail, quelles références relever et quelles mesures montrent si un usage de l'IA aide. Les sujets suivants vont plus loin sur le travail assisté, sur les agents et agents conversationnels, sur l'inflation et la dilution, et sur la gouvernance. Les faits sur les produits et les règles de l'IA changent vite, et les énoncés sur des outils ou des réglementations précis dans cette partie sont datés d'octobre 2026 et doivent être revérifiés.

## Principes clés

- **Relevez une référence avant d'introduire l'IA.** Sans elle, chaque affirmation de bénéfice est une opinion.
- **Traitez chaque usage comme une expérience avec une comparaison.** Comparez avec un travail semblable fait sans IA, sur la même période.
- **Mesurez la qualité par échantillonnage, avec des personnes.** Une production fluide n'est pas une production correcte.
- **Comptez le coût complet.** Incluez le temps de revue, la reprise, les licences et les coûts d'inférence.
- **Gardez les gens redevables et informés.** La personne qui utilise l'IA répond du résultat.
- **Ne laissez pas l'IA devenir une accélération du rythme ou un moniteur.** Le temps économisé est un choix sur la manière de l'employer.
- **Commencez avec des personnes volontaires et de vrais problèmes.** Les obligations produisent de l'usage sans valeur.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Complétude des références | Part des cas d'usage d'IA prévus qui ont une référence d'avant adoption consignée pour leurs principaux indicateurs | cas d'usage avec référence datée / cas d'usage prévus | pourcentage | Registre des cas d'usage | Amélioration continue ; mesure et rapports | Référence avant une expérience | Trimestrielle |
| Couverture de l'usage de l'IA | Part des éléments de travail ou des tâches admissibles où l'IA a été utilisée, par cas d'usage | éléments où une assistance par IA a été utilisée / éléments admissibles, à partir des journaux d'outils ou des étiquettes d'utilisateurs, au niveau de l'équipe | pourcentage | Journaux d'usage des outils, étiquettes | Centre de services ; gestion des incidents ; gestion des versions et des déploiements | Adoption d'un outil par des équipes volontaires | Mensuelle |
| Taux d'acceptation et de modification des suggestions | Part des suggestions de l'IA acceptées telles quelles, modifiées ou rejetées | suggestions de chaque catégorie / suggestions offertes | pourcentage | Journaux d'outils agrégés par équipe | Centre de services ; gestion des connaissances | Revue des suggestions de la machine | Mensuelle |
| Exactitude de la production revue | Part des productions d'IA échantillonnées jugées correctes et adaptées à l'objectif par un réviseur qualifié | productions jugées correctes / productions échantillonnées | pourcentage | Enregistrements de revue d'échantillons | Assurance qualité ; gestion des connaissances | Définition de terminé pour la production | Mensuelle |
| Temps de tâche face à la référence | Temps pour accomplir une tâche définie avec l'IA comparé à la référence ou à un groupe de comparaison | médiane et 85e percentile du temps de tâche avec l'IA moins le même pour la référence ou la comparaison | minutes ou heures | Tâches chronométrées, horodatages de tickets | Centre de services ; gestion des incidents | Temps de cycle d'une tâche | Trimestrielle |
| Coût par tâche assistée par l'IA | Coût total du travail assisté par l'IA par tâche, y compris la revue et la reprise | (coût de licence et d'usage + coût du temps de revue et de reprise) / tâches achevées avec l'IA | monnaie par tâche | Factures des fournisseurs, estimations de temps, gestionnaire de travail | Gestion financière des services | Coût de service par résultat | Trimestrielle |
| Évolution du résultat face à une comparaison | Variation de l'indicateur de résultat pour le travail assisté par l'IA comparée à un travail semblable non assisté | variation de l'indicateur pour le groupe assisté par l'IA moins variation pour le groupe de comparaison | unités d'indicateur | Mesures de résultats par cas d'usage (qualité, satisfaction, taux de réouverture, défauts) | Amélioration continue | Apprentissage à partir des expériences | Trimestrielle |

Définissez chaque cas d'usage par la tâche, les utilisateurs et les indicateurs de résultat, et consignez-les dans le registre. La couverture de l'usage de l'IA est une mesure descriptive et non un objectif. L'exactitude de la production revue est jugée face à une norme écrite par une personne qualifiée qui n'a pas produit la production. Le temps de tâche inclut le temps de formuler le prompt, de revoir et de corriger autant que de générer. Le coût par tâche compte le temps de personnes passé à vérifier et à corriger. L'évolution du résultat exige une comparaison choisie d'avance et une note sur les autres changements de la période.

## Recommandations

### Décider où l'IA a sa place

**1. Listez les tâches et le problème que chaque usage de l'IA traite.** Partez de la douleur, non de l'outil : rédaction répétée, triage lent, connaissances éparpillées, longues revues, alertes bruyantes. Pour chaque usage candidat, écrivez le problème, qui le ressent, le résultat qui doit s'améliorer et les risques. Laissez de côté les usages sans problème clair. C'est le registre auquel se rattachent la référence et les mesures.

**2. Classez le risque de chaque usage.** Un outil qui rédige des notes internes ne porte pas le même risque qu'un outil qui modifie des systèmes de production, répond à des clients ou prend des décisions sur des personnes. Classez les usages selon le préjudice si la production est fausse, qui est touché et si une personne la revoit avant qu'elle prenne effet. Les usages à plus haut risque demandent des mesures, un échantillonnage et une gouvernance plus solides (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA).

**3. Commencez avec des personnes volontaires et des tâches bornées.** Faites un pilote avec des volontaires sur une tâche courante et vérifiable. Les volontaires donnent un retour honnête et adaptent l'outil à leur travail. Une tâche bornée rend faisables les références et les comparaisons. Évitez de commencer par le travail le plus sensible.

### Relever des références et mettre en place des comparaisons

**4. Consignez la référence avant le premier usage.** Pour chaque cas d'usage, relevez l'état actuel des indicateurs : temps d'achèvement, taux de qualité ou de défauts, reprise, satisfaction des utilisateurs et coût. Prenez assez d'observations pour voir la variation normale (voir le sujet 1.6, Culture statistique pour les métriques de service). Datez la référence et gardez-la. Une référence relevée après le déploiement est un enregistrement du nouveau monde.

**5. Construisez une comparaison.** Quand c'est possible, gardez un groupe ou un ensemble de tâches semblables qui n'utilise pas l'IA pendant la période pilote, ou alternez l'usage par semaine ou par type de tâche de façon équitable. La randomisation est idéale et souvent impraticable. Dites clairement ce qui a changé d'autre. Sans comparaison, les améliorations dues à la saisonnalité, aux effectifs ou à l'apprentissage seront portées au crédit de l'outil.

**6. Mesurez le temps honnêtement.** Le temps jusqu'à un premier brouillon est rarement la bonne mesure. Mesurez le temps jusqu'à un résultat terminé et vérifié, y compris la formulation du prompt, la revue et la correction. Les gens rapportent souvent un temps économisé fondé sur l'étape de génération, et l'étape de revue en mange une partie ou la totalité. Des études de temps sur un échantillon de tâches valent l'effort.

### Mesurer la qualité et le coût

**7. Échantillonnez les productions pour les faire revoir par des personnes qualifiées.** Chaque mois, tirez au hasard un échantillon de productions assistées par l'IA et faites-les juger par une personne qualifiée face à une norme écrite. Rapportez l'exactitude, les sortes d'erreurs trouvées et les tendances. C'est la principale protection contre la propagation d'erreurs fluides. Gardez le réviseur indépendant du producteur, et faites tourner les réviseurs.

**8. Surveillez les schémas d'acceptation et de modification.** Un taux d'acceptation très élevé peut signaler un biais d'automatisation, où les gens acceptent sans vérifier. Un taux très bas peut signaler un outil peu utile. Servez-vous des taux comme d'invites à la conversation avec l'équipe et demandez ce que les chiffres signifient dans son expérience. Ne fixez pas d'objectifs d'acceptation.

**9. Comptez le coût complet par tâche.** Incluez les frais de licence, les frais à l'usage, le temps passé à formuler les prompts, à revoir et à corriger, la formation et l'effort de gouvernance. Comparez avec le coût de référence. Un outil qui produit vite des brouillons et demande de lourdes corrections peut coûter plus cher que l'ancienne façon. Incluez le coût des erreurs qui atteignent les utilisateurs.

### Garder juste le côté humain

**10. Protégez les gens de la surveillance et de la dérive du rythme.** Agrégez les données d'usage de l'IA au niveau de l'équipe et ne vous en servez pas pour évaluer des individus. N'utilisez pas l'usage comme mesure de performance. Convenez d'avance que le temps économisé ne deviendra pas automatiquement de la charge supplémentaire, et décidez avec l'équipe de ce qu'il faut en faire : qualité, apprentissage, amélioration ou autre travail. Un rythme constant est un objectif de conception (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**11. Demandez aux personnes qui s'en servent.** De courts sondages flash et des conversations révèlent ce que les chiffres manquent : où l'outil aide, où il frustre, où il déplace le travail de créer vers vérifier, et s'il change la satisfaction du travail. Traitez avec respect les préoccupations sur les compétences, la qualité et la sécurité de l'emploi.

**12. Décidez, publiez et revisitez.** À la fin de chaque pilote, décidez de passer à l'échelle, d'adapter ou d'arrêter, et consignez les preuves. Partagez honnêtement les résultats, y compris nuls et négatifs. Revisitez les décisions à mesure que les outils changent, ce qu'ils font vite. Un usage qui n'a pas aidé l'an dernier peut aider maintenant, et l'inverse.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Complétude des références | Consigner les références après coup ; utiliser des indicateurs commodes | Références horodatées ; revue indépendante de la méthode de référence |
| Couverture de l'usage de l'IA | Imposer l'usage ; compter des invocations triviales ou automatiques | Jamais un objectif ; comparer avec l'évolution du résultat ; compter l'usage significatif |
| Taux d'acceptation et de modification des suggestions | Récompenser l'acceptation ; rendre le rejet fastidieux | Aucun objectif ; exactitude de la production revue ; interroger les utilisateurs sur leur expérience |
| Exactitude de la production revue | Échantillonner des productions faciles ; réviseurs indulgents | Échantillon aléatoire par des réviseurs indépendants ; norme écrite ; rotation des réviseurs |
| Temps de tâche face à la référence | Ne chronométrer que la génération ; choisir des tâches faciles | Temps jusqu'au résultat vérifié ; échantillonner les tâches au hasard ; inclure la revue et la reprise |
| Coût par tâche assistée par l'IA | Omettre le temps de revue ou le coût de gouvernance | Liste de vérification du coût complet ; comparer avec des études de temps |
| Évolution du résultat face à une comparaison | Choisir des groupes ou des périodes favorables ; ignorer d'autres changements | Comparaison et période convenues d'avance ; liste des autres changements |

Une lecture saine est des références pour chaque pilote, des temps mesurés jusqu'aux résultats terminés, une exactitude vérifiée par des personnes qualifiées, des coûts qui incluent la revue, des résultats comparés équitablement, et des équipes qui disent que l'outil sert leur jugement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Pilote avec des volontaires | Retour honnête ; faible risque | Les volontaires sont des enthousiastes ; les résultats peuvent ne pas se généraliser |
| Déploiement imposé | Couverture rapide | Usage sans valeur ; ressentiment ; détournement |
| Comparaison contrôlée | Preuves crédibles | Effort ; pas toujours possible |
| Avant-après seulement | Simple | Confondu par d'autres changements |
| Économies rapportées par le fournisseur | Faciles à obtenir | Optimistes ; sans contexte |
| Tâches chronométrées en propre | Ancrées dans votre travail | Chronophages ; petits échantillons |
| Revue lourde de chaque production | Sûre | Supprime le bénéfice |
| Revue par échantillon | Passe à l'échelle | Certaines erreurs passent |

La réponse en bref est de mener de petits pilotes avec références et comparaisons, d'échantillonner les productions pour la qualité, de compter le coût complet et de décider sur les preuves. Utilisez les chiffres des fournisseurs comme des hypothèses à tester.

## Questions à discuter avec votre équipe

**1. Où nous attendons-nous à ce que l'IA nous aide, et que verrions-nous si elle le faisait ?**
Listez les usages candidats et, pour chacun, l'indicateur et la référence que nous avons aujourd'hui. L'animateur doit pousser vers le concret : quelle tâche, quelle mesure, quelle ampleur de changement compterait. Choisissez un usage à piloter et convenez de la référence.

**2. Qu'est-ce qui nous ferait faire confiance ou méfiance à une suggestion de l'IA, et comment saurions-nous que nous avions tort ?**
Discutez de cas où la production était fausse et de la manière dont on l'a remarqué. Considérez comment la revue fonctionne en pratique et si la pression conduit à la sauter. Convenez d'une méthode d'échantillonnage que quelqu'un d'indépendant appliquera.

**3. Quelle part du temps que nous économisons serait dépensée à vérifier ?**
Chronométrez une vraie tâche avec et sans l'outil, y compris la formulation du prompt et la revue. Comparez avec ce que les gens attendent. La conversation révèle souvent où se trouve le gain et où il ne se trouve pas.

**4. Que devons-nous faire du temps que nous économisons ?**
Décidez d'avance. Les options comprennent le travail de qualité, l'apprentissage, l'amélioration ou moins de pression. Discutez de la manière d'éviter que le temps soit silencieusement absorbé par plus de demande. Convenez avec les dirigeants de la manière dont l'équipe le protégera.

**5. Que ne voudrions-nous pas que l'IA fasse ici, et pourquoi ?**
Listez les tâches qui demandent du jugement humain, de l'empathie ou de la redevabilité. Discutez des risques pour les utilisateurs et pour les compétences. L'animateur doit consigner les limites comme intrants de la gouvernance.

**6. Comment saurons-nous quand arrêter ?**
Définissez les preuves qui mettraient fin au pilote ou à l'usage. Convenez de qui décide et quand. Un pilote sans critère de sortie devient une installation permanente.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison utilisent l'IA pour le code, les tests, les revues et la documentation. Elles doivent mesurer le temps jusqu'à un résultat revu et fonctionnel, surveiller la qualité et les défauts et garder une revue humaine significative. Elles doivent résister aux métriques qui comptent les lignes générées ou l'acceptation, et insister sur des mesures de résultats comme les défauts et la stabilité.

### Équipes de service et d'exploitation

Les équipes d'exploitation et du centre de services utilisent l'IA pour le triage, les résumés, les suggestions et la supervision. Elles doivent comparer la qualité du traitement et de la résolution avec des références, échantillonner les productions et surveiller les effets sur les utilisateurs et sur les contacts répétés. On doit les consulter avant que l'IA soit placée devant les utilisateurs.

### Direction et gouvernance

Les dirigeants parrainent des programmes d'IA et subissent la pression de montrer des gains. Ils doivent insister sur des références et des comparaisons, financer le travail de revue, éviter les objectifs d'usage et protéger les gens de la surveillance et de la dérive du rythme. La gouvernance doit exiger une classification des risques et des preuves avant le passage à l'échelle.

### Clients et utilisateurs

Les utilisateurs rencontrent l'IA dans des réponses, des suggestions et des actions automatisées. Ils veulent une aide correcte et compréhensible et la possibilité de joindre une personne. On doit leur dire quand ils interagissent avec une IA lorsque c'est approprié, et leur retour est la preuve clé de l'aide apportée (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Le groupe technologique d'un assureur de taille moyenne exploite un centre de services interne pour 4 000 employés et plusieurs équipes produit. La direction achète des licences pour un assistant d'IA et demande un rapport du temps économisé après trois mois. Les chiffres ci-dessous sont illustratifs.

La responsable de la gestion des services insiste sur une référence. Pour la tâche la plus courante du centre de services, la rédaction de réponses aux demandes d'accès et de mot de passe, elle chronomètre 120 tickets récents : temps de traitement médian de 11 minutes, 85e percentile de 24, taux de réouverture de 6 % et score de satisfaction de l'enquête stable. Elle choisit deux équipes pour piloter l'assistant et garde deux équipes semblables comme comparaison. Les équipes pilotes sont volontaires.

Après huit semaines, le temps de traitement médian des équipes pilotes est de 8 minutes et le 85e percentile de 19, contre 11 et 23 dans les équipes de comparaison. Les journaux de l'outil montrent que les agents acceptent les suggestions telles quelles dans 52 % des cas, les modifient dans 38 % et les rejettent dans 10 %. Un échantillon aléatoire mensuel de 80 réponses, revu par un agent senior hors du pilote, en trouve 91 % entièrement correctes, les erreurs se concentrant dans une procédure rarement utilisée où l'assistant a donné des étapes périmées. Le taux de réouverture dans les équipes pilotes monte légèrement à 7 %, dans la variation normale. Le coût par ticket baisse modestement une fois les licences et le temps de revue comptés. Une enquête montre que les agents apprécient les brouillons et n'aiment pas la vérification supplémentaire des longues réponses. Deux agents disent ressentir la pression de traiter plus de tickets par heure.

La responsable de la gestion des services rapporte un gain de temps d'environ un quart à la médiane et énonce les réserves : deux équipes, huit semaines, des volontaires et un taux de réouverture à surveiller. Elle convient avec les dirigeants que le temps économisé ira à la base de connaissances et aux cas complexes, et qu'aucun objectif de tickets ne montera. La procédure périmée est corrigée dans la base de connaissances. Un cadre supérieur demande un usage obligatoire à l'échelle de l'entreprise et un objectif de 80 % d'acceptation. Elle refuse l'objectif, expliquant qu'un objectif d'acceptation récompenserait le fait de ne pas vérifier, et propose d'étendre le pilote à deux autres équipes avec les mêmes mesures. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Introduisez l'IA par petites étapes avec les parties prenantes, avec une référence et une comparaison pour chaque étape, et revoyez le résultat à la conversation d'amélioration régulière. La précaution est que déployer l'IA partout à la fois supprime le groupe de comparaison.

### IA

Tout ce sujet porte sur l'IA, la règle est donc simple : consignez le travail tel qu'il est aujourd'hui, mesurez chaque usage face à cette référence et face à un travail comparable fait sans IA, et appariez chaque gain de vitesse avec une mesure de qualité vérifiée. Nommez un responsable pour chaque usage, et décidez d'avance où un humain décide. La précaution est que les chiffres des fournisseurs décrivent d'autres organisations : utilisez donc vos propres données.

### Automatisation

Recueillez automatiquement les événements d'usage, de suggestion, d'acceptation et de modification, et mesurez l'automatisation qui applique la production de l'IA sur ses taux d'erreur et d'annulation. La précaution est que les taux d'acceptation peuvent monter parce que les gens cessent de vérifier : échantillonnez donc la production acceptée.

### Analytique

Rapportez l'exactitude issue d'un échantillon revu avec la taille de l'échantillon, et les résultats face à une comparaison avec les limites énoncées. La décision éclairée est d'étendre, de changer ou d'arrêter un usage de l'IA. La précaution est que de petits pilotes donnent des résultats bruités : évitez donc de promettre un chiffre tiré d'un pilote.

## Éclairage sectoriel

**Startup.** Les outils sont adoptés vite et souvent de façon informelle. Relevez une simple référence de temps et de défauts pour l'usage principal, gardez une revue humaine de tout ce qui est visible par le client et évitez de vous enfermer tôt chez un seul fournisseur. Guettez la sécurité et l'exposition des données quand le personnel utilise des outils publics.

**Petite entreprise.** Les assistants prêts à l'emploi peuvent offrir une aide réelle pour la rédaction et les tâches courantes. Mesurez à petite échelle : temps pour quelques vraies tâches et taux de corrections. Soyez prudent avec les données confidentielles, et vérifiez les conditions des fournisseurs sur l'usage des données.

**Grande entreprise.** L'échelle exige de la gouvernance, des normes d'approvisionnement et une approche de mesure commune. Menez des pilotes avec comparaison, publiez les résultats en interne et partagez les références et les méthodes entre équipes. Méfiez-vous des programmes qui rapportent l'usage comme un succès.

**Gouvernement et secteur public.** Les décisions qui touchent les citoyens peuvent être soumises à des devoirs légaux de transparence, d'équité et de revue humaine. Classez les usages par risque, conservez des traces de l'usage de l'IA dans les décisions et soyez ouvert à ce sujet. La passation de marchés et la protection des données s'appliquent, et certaines juridictions ont des lois précises sur l'IA à vérifier à ce jour (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont les licences ou frais à l'usage, l'intégration, la formation, le temps de relever des références et de mener des comparaisons, le temps de personnes passé à revoir et à corriger les productions, et l'effort de gouvernance. Les coûts peuvent croître avec l'usage et changer avec les prix des fournisseurs : modélisez donc une plage.

Les rendements potentiels sont du temps récupéré sur les tâches répétitives, une rédaction et une recherche plus rapides, une meilleure couverture des connaissances et un soulagement du personnel face au travail fastidieux. Ce sont des possibilités à tester, non des hypothèses à encaisser. Construisez le dossier à partir de vos propres pilotes : temps de tâche mesuré jusqu'à un résultat vérifié, exactitude revue, reprise et coût complet par tâche, face à la référence et à la comparaison. Évitez de citer des pourcentages de productivité issus de sources de fournisseurs ou d'enquêtes à moins de pouvoir en retracer la méthode et l'adéquation à votre travail. Incluez le risque d'erreurs qui atteignent les utilisateurs et le coût de la gouvernance des outils (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Introduire l'IA sans référence.** Vous ne pouvez pas dire ce qui a changé. Relevez-la d'abord.
- **Mesurer la vitesse de génération.** L'économie peut disparaître à la revue. Mesurez le temps jusqu'à un résultat vérifié.
- **Des objectifs d'adoption.** Ils produisent de l'usage sans valeur. Traitez la couverture comme descriptive.
- **Faire confiance aux affirmations des fournisseurs.** Ce sont des hypothèses. Testez-les sur votre travail.
- **Une revue qui n'est pas réelle.** Le biais d'automatisation transforme la revue en tampon. Échantillonnez et vérifiez de façon indépendante.
- **Convertir le temps économisé en plus de demande.** Cela érode la confiance et le rythme soutenable. Décidez d'avance à quoi sert le temps.
- **Surveiller l'usage individuel.** Cela engendre la peur. Agrégez au niveau de l'équipe.
- **Des pilotes sans fin.** Ils deviennent permanents par défaut. Fixez des critères de sortie.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| But et références | Outils adoptés par enthousiasme | Cas d'usage listés | Registre avec problème, classe de risque, référence et indicateur pour chaque usage | Références et comparaisons exigées avant le passage à l'échelle ; résultats publiés | Références et méthodes partagées entre équipes et partenaires ; usages retirés quand les preuves s'estompent |
| Preuves de bénéfice | Anecdotes et affirmations des fournisseurs | Estimations de temps informelles | Tâches chronométrées ; exactitude échantillonnée ; coût complet par tâche | Évolution des résultats face à une comparaison rapportée avec ses limites | Vue de portefeuille de l'endroit où l'IA aide, avec apprentissage largement partagé |
| Personnes et rythme | Obligations ; surveillance | Soin informel | Données au niveau de l'équipe seulement ; temps économisé affecté par accord | Préoccupations suivies ; compétences et satisfaction mesurées | Coconception de l'usage de l'IA avec les utilisateurs et le personnel ; rythme soutenu protégé |

## Liste de vérification

- [ ] Chaque usage de l'IA a un problème écrit, une classe de risque, un responsable et des critères de sortie.
- [ ] Une référence datée existe pour chaque pilote avant le premier usage.
- [ ] Un groupe de comparaison ou des tâches de comparaison sont définis d'avance.
- [ ] Le temps est mesuré jusqu'à un résultat terminé et vérifié.
- [ ] Les productions sont échantillonnées chaque mois et revues par des personnes qualifiées et indépendantes.
- [ ] Le coût complet par tâche inclut la revue et la reprise.
- [ ] Les données d'usage sont agrégées au niveau de l'équipe et non utilisées pour des individus.
- [ ] L'équipe a convenu de ce qu'elle fait du temps économisé.
- [ ] Les utilisateurs sont interrogés sur leur expérience de l'outil.
- [ ] Les pilotes se terminent par une décision consignée de passer à l'échelle, d'adapter ou d'arrêter.

## Prompts d'IA

**Rédigez une entrée de cas d'usage.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Concevez une étude de tâches chronométrées.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Planifiez l'échantillonnage des productions.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Décidez quoi faire du temps économisé.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique liée à l'IA avant de la rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'IA consigne sa référence, sa comparaison, son vecteur de détournement et son garde-fou.

## Idées clés

- Relevez une référence datée avant l'usage de l'IA, et comparez avec un travail semblable fait sans elle.
- Mesurez le temps jusqu'à un résultat terminé et vérifié, et échantillonnez les productions pour l'exactitude avec des réviseurs indépendants.
- Comptez le coût complet, y compris la revue et la reprise.
- Traitez l'usage et l'acceptation comme descriptifs, jamais comme des objectifs.
- Décidez d'avance quoi faire du temps économisé, et gardez un rythme soutenable.
- Gardez les données d'usage au niveau de l'équipe, et terminez chaque pilote par une décision consignée.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
