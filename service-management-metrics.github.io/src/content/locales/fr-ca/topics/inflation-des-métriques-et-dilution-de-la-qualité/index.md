# Inflation des métriques et dilution de la qualité

**Quand l'IA rend le volume et la vitesse bon marché, chaque métrique qui compte le volume et la vitesse gonfle : appariez donc chacune avec une mesure d'utilité qu'une personne a vérifiée, et surveillez si le signal de vos données est noyé.**

## Vue d'ensemble et motivation

Une métrique fonctionne parce qu'elle reflète quelque chose de difficile à produire. Les tickets résolus reflètent de l'effort. Les documents rédigés reflètent de la connaissance. Les tests ajoutés reflètent du soin. Quand un outil rend la production visible presque gratuite, le lien entre la production et l'effort se brise. Les chiffres continuent de monter et le sens s'écoule. C'est l'inflation des métriques, et son compagnon est la dilution de la qualité : la part de ce qui est produit qui est utile baisse, et la partie utile devient plus difficile à trouver.

Ce n'est pas un problème nouveau. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) et sa parente la [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) décrivent comment les mesures employées pour le contrôle sont corrompues. Une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric) paraît impressionnante et ne dit rien de la santé du travail. Ce que l'IA change est la vitesse et l'échelle auxquelles la production peut être générée, et avec elles la vitesse et l'échelle auxquelles ces vieux échecs peuvent survenir. Une équipe qui gonflait autrefois un décompte à la main peut maintenant le faire en quelques minutes, souvent sans le vouloir.

Plusieurs schémas reviennent dans le travail de service et de livraison.

- **Inflation du volume.** L'IA rédige plus de tickets, plus de réponses, plus de commentaires, plus de cas de test, plus de documents et plus de code. Les décomptes de ces éléments montent. La charge de travail de ceux qui doivent les lire, les revoir et les maintenir monte aussi.
- **Inflation de la vitesse.** Le temps jusqu'au premier brouillon chute fortement, et le temps jusqu'à un résultat terminé et vérifié baisse moins, voire pas du tout. Un tableau de bord qui rapporte le premier raconte une histoire flatteuse.
- **Bruit.** Davantage de contenu se dispute l'attention. La [surcharge informationnelle](https://en.wikipedia.org/wiki/Information_overload) est l'état dans lequel une personne ne peut pas traiter le volume d'information présenté, et le [rapport signal sur bruit](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) de la base de connaissances, de la file de tickets ou du flux d'alertes baisse. La [fatigue des alarmes](https://en.wikipedia.org/wiki/Alert_fatigue) en est la forme opérationnelle (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).
- **Contenu généré de faible qualité.** Le contenu produit en masse avec peu de revue, parfois appelé [bouillie d'IA](https://en.wikipedia.org/wiki/AI_slop) (AI slop), est plausible et mince. Une base de connaissances ensemencée de tels articles devient moins digne de confiance, et les utilisateurs apprennent à s'en méfier.
- **Coût de vérification.** L'effort de vérifier une affirmation est souvent bien plus grand que celui de la faire, un schéma parfois appelé [loi de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Quand la génération est bon marché, la vérification devient le goulot d'étranglement.
- **Une efficience qui augmente la consommation.** Le [paradoxe de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) décrit des cas où des gains d'efficience mènent à plus d'usage d'une ressource, non à moins. Si rédiger un rapport devient bon marché, on demande plus de rapports. Le temps économisé par un outil peut être consommé par plus de travail de moindre valeur.
- **Boucles de rétroaction.** Si le contenu généré alimente la génération suivante, les erreurs se composent. La littérature de recherche décrit l'[effondrement de modèle](https://en.wikipedia.org/wiki/Model_collapse) chez les modèles entraînés sur leurs propres productions. Une boucle semblable peut se produire à l'intérieur d'une organisation quand un assistant résume des tickets écrits par un assistant à partir d'articles qu'un assistant a résumés.
- **Références qui dérivent.** Si la distribution des données change à cause de l'IA, les tendances et les seuils ne signifient plus ce qu'ils signifiaient. Cela ressemble à la [dérive conceptuelle](https://en.wikipedia.org/wiki/Concept_drift) de l'apprentissage automatique, où la relation entre les entrées et les résultats change dans le temps. Une hausse du volume de tickets peut refléter une création de tickets plus facile, non davantage de problèmes.

Les objectifs agiles comptent ici. La livraison continue, l'amélioration continue et le rythme soutenable dépendent tous de la clarté du signal. On ne doit pas demander à des personnes motivées de patauger dans un bruit généré par des machines ni de vérifier des piles de production à un rythme insoutenable. Les parties prenantes impliquées en continu sont aussi la meilleure défense : elles vous diront quand les rapports ne servent plus.

Ce sujet donne les mesures pour remarquer l'inflation et la dilution, et les appariements qui les exposent. Il s'appuie sur les fondations et sur les mesures du travail assisté (voir le sujet 10.1, L'IA dans la mesure de la gestion des services, et le sujet 10.2, Mesurer le travail assisté par l'IA).

## Principes clés

- **Appariez chaque métrique de volume ou de vitesse avec un contrôle d'utilité.** Une personne juge si la production est utile.
- **Mesurez jusqu'à un résultat terminé et vérifié.** La vitesse du premier brouillon est un piège.
- **Surveillez la charge de vérification.** Elle grossit silencieusement et consomme le temps économisé.
- **Protégez le signal.** Gardez la base de connaissances, les files et les alertes assez propres pour qu'on leur fasse confiance.
- **Brisez les boucles de rétroaction.** Ne laissez pas le contenu généré alimenter la génération sans revue.
- **Refaites la référence quand les données changent.** Les tendances à travers un changement technologique demandent du soin.
- **Préférez moins de productions, mais meilleures.** Moins peut valoir plus quand l'attention est la ressource limitante.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rapport production-résultat | Volume de production relatif au résultat qu'elle devait produire | décompte de production (tickets, articles, changements) / mesure de résultat (problèmes résolus, articles utilisés, changements conservés), sur la même période, suivi comme tendance | rapport | Gestionnaire de travail, base de connaissances, mesures de résultats | Amélioration continue ; mesure et rapports | Logiciel fonctionnel plutôt que volume de documentation | Mensuelle |
| Part d'éléments utiles | Part des éléments échantillonnés jugés utiles par un réviseur qualifié | éléments échantillonnés jugés utiles (corrects, pertinents, sans doublon) / éléments échantillonnés | pourcentage | Revue d'un échantillon aléatoire | Gestion des connaissances ; assurance qualité | Définition de terminé pour le contenu | Mensuelle |
| Charge de vérification | Temps humain consacré à vérifier et à corriger le travail généré par unité de production | heures de revue et de correction / unités de production, suivi comme tendance | heures par unité | Estimations de temps, données de l'outil de revue | Gestion financière des services ; amélioration continue | Capacité de revue comme contrainte | Mensuelle |
| Taux de redondance du contenu | Part des éléments de connaissances qui doublonnent ou recoupent substantiellement un autre | éléments signalés comme doublons ou chevauchements en revue ou par appariement / éléments de la base de connaissances | pourcentage | Revue de la base de connaissances, rapports d'appariement | Gestion des connaissances | Source unique de vérité | Trimestrielle |
| Part des connaissances générées revues | Part des éléments de connaissances générés par l'IA qu'une personne qualifiée a revus et approuvés avant publication | éléments générés publiés avec revue approuvée / éléments générés publiés | pourcentage | Métadonnées de la base de connaissances | Gestion des connaissances ; maîtrise des changements | Revue avant mise en production | Mensuelle |
| Entrée du backlog face à la résolution | Croissance du travail qui arrive relativement à la croissance du travail résolu, pour les files touchées par l'IA | (variation des éléments créés) / (variation des éléments résolus), comparée à la référence d'avant l'IA | rapport | Historique des tickets et du suivi | Gestion des incidents ; gestion des demandes de service | Équilibre du flux | Mensuelle |
| Drapeaux de dérive des métriques | Nombre de métriques dont la définition ou la distribution a nettement changé après l'introduction de l'IA, revues et annotées | métriques signalées en revue / métriques du registre | décompte ; pourcentage | Revue du registre des métriques, contrôles de distribution | Mesure et rapports | Rétrospective sur la mesure | Trimestrielle |

Définissez « utile » dans une grille écrite : correct, pertinent pour un vrai besoin, sans doublon et à jour. La charge de vérification compte le temps passé par des personnes, y compris le temps de reformuler un prompt, et exclut le temps qui n'est que de l'attente. La part revue est un contrôle : les connaissances générées non revues sont suivies à part et gardées visiblement étiquetées. Les drapeaux de dérive des métriques sont des discussions, non des pénalités : un drapeau signifie qu'une personne a décidé d'ajuster la définition, d'annoter la tendance ou de refaire la référence. Toutes les mesures décrivent des processus et du contenu, non des individus.

## Recommandations

### Apparier le volume avec l'utilité

**1. Intégrez un contrôle d'utilité à chaque métrique de volume.** Pour chaque mesure de volume ou de vitesse de votre tableau de bord, nommez une mesure d'utilité qu'une personne a jugée. Les tickets créés s'apparient avec la qualité de résolution, les articles rédigés avec l'usage et l'exactitude des articles, les changements fusionnés avec la rétention et la reprise (voir le sujet 10.2, Mesurer le travail assisté par l'IA). Montrez-les ensemble, et discutez quand elles divergent.

**2. Échantillonnez et jugez, régulièrement.** Chaque mois, tirez au hasard un échantillon d'éléments des flux que touche l'IA et faites-les juger par une personne qualifiée face à une grille écrite. Consignez la part utile et les raisons pour lesquelles des éléments échouent. Faites tourner les réviseurs et gardez-les indépendants des producteurs. L'échantillonnage est la principale défense contre la dilution lente.

**3. Rapportez les résultats avant les productions.** Dans les rapports aux dirigeants, commencez par les résultats : problèmes résolus, utilisateurs satisfaits, défauts évités. Mettez les décomptes de production ensuite, comme contexte. Si le rapport garderait sa valeur une fois les décomptes de production retirés, il est bien orienté.

### Maîtriser la vérification et le bruit

**4. Mesurez la charge de vérification.** Estimez le temps passé à vérifier et à corriger le travail généré, et suivez-le comme tendance par unité de production. S'il monte quand la production monte, le gain net est plus petit que ne le suggèrent les chiffres de génération, et les réviseurs peuvent être en route vers la surcharge. Incluez la charge dans le coût par tâche (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

**5. Limitez ce qui entre dans le système.** Décidez quel contenu généré peut être créé et publié automatiquement, et quel contenu demande une revue. Fixez des limites à la taille et au nombre de changements générés dans une revue. Rendez facile de dire non au volume. Une file plus petite avec des éléments plus clairs sert mieux les utilisateurs.

**6. Gérez la base de connaissances comme un produit.** Étiquetez le contenu généré, exigez une revue avant publication, retirez les doublons et les éléments périmés, et suivez la redondance et l'usage. Une base de connaissances est utile en proportion de la confiance que lui font les utilisateurs. Retirez les articles que personne n'utilise et dont personne ne peut se porter garant (voir le sujet 3.6, Métriques de gestion des connaissances).

**7. Gardez propres les flux d'alertes et de tickets.** Si l'IA crée des tickets à partir d'alertes ou de résumés, mesurez la part utile et les doublons. Ajustez énergiquement. Traitez un rapport signal sur bruit en baisse comme un incident à part entière, car il nuit à la réponse quand de vrais ennuis surviennent.

### Briser les boucles et surveiller la référence

**8. Empêchez le contenu généré de s'alimenter lui-même sans contrôle.** Là où un assistant s'appuie sur une base de connaissances, un historique de tickets ou des rapports passés, assurez-vous que la matière générée de ces sources a été revue, ou qu'elle est étiquetée et pondérée en conséquence. Échantillonnez la chaîne : choisissez une réponse et retracez-la à travers ses sources pour voir d'où elle vient. Les boucles non contrôlées amplifient les erreurs.

**9. Refaites la référence quand les données changent.** Après l'introduction de l'IA, annotez les graphiques de tendance et, là où la nature des données a changé, commencez une nouvelle référence. Vérifiez les distributions, pas seulement les totaux : longueur des tickets, mélange de catégories et temps de création peuvent tous changer. Les drapeaux de dérive des métriques déclenchent ces conversations (voir le sujet 1.6, Culture statistique pour les métriques de service).

**10. Cherchez le rebond.** Quand une tâche devient moins chère, demandez si la demande pour elle va croître. Décidez d'avance comment employer le temps économisé, pour qu'il ne soit pas absorbé par plus de production de faible valeur. Une équipe qui produit deux fois plus de rapports avec le même effort fait peut-être moins de travail utile.

### Garder l'attention humaine dans la boucle

**11. Protégez l'attention des réviseurs et des utilisateurs.** La capacité de revue et l'attention sont rares. Réduisez le volume de matière que les gens doivent lire, donnez aux réviseurs des charges réalistes et demandez-leur ce qui devient plus difficile. Un rythme soutenable inclut le rythme de lecture et de jugement (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**12. Demandez aux utilisateurs et aux parties prenantes si le signal est clair.** L'implication continue des personnes qui utilisent les productions est le meilleur test. Demandez si la base de connaissances est plus facile ou plus difficile à utiliser, si les rapports leur disent ce dont ils ont besoin, si la file semble plus claire. Leurs réponses et leurs commentaires doivent se lire à côté des chiffres.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Rapport production-résultat | Choisir une mesure de résultat qui monte avec le volume ; changer la période | Résultat fixé dans le registre ; comparer avec la satisfaction et le taux de réouverture |
| Part d'éléments utiles | Échantillonner des éléments faciles ; grille indulgente ; réviseurs influencés par le producteur | Échantillon aléatoire ; grille écrite ; réviseurs indépendants et tournants |
| Charge de vérification | Ne pas consigner le temps de revue ; déplacer la vérification vers des équipes en aval | Inclure la reprise en aval ; interroger les réviseurs sur la charge |
| Taux de redondance du contenu | Règles d'appariement étroites qui manquent des doublons ; fusionner des éléments distincts | Échantillonner les doublons à la main ; consigner les règles de fusion |
| Part des connaissances générées revues | Marquer la revue comme achevée sans lire ; revoir en bloc | Échantillonner les revues pour leur substance ; temps par revue ; taux d'erreur des éléments publiés |
| Entrée du backlog face à la résolution | Clore automatiquement des éléments ; scinder des éléments | Vérifier la qualité de résolution ; taux de réouverture ; échantillonner les éléments clos |
| Drapeaux de dérive des métriques | Ne pas signaler pour éviter du travail ; tout signaler | Revoir toutes les métriques chaque trimestre ; exiger une décision pour chaque drapeau |

Une lecture saine est une part d'éléments utiles stable ou croissante à mesure que le volume grandit, une charge de vérification connue et abordable, une base de connaissances à faible redondance avec du contenu généré revu, des files au signal clair, et une vue des dirigeants qui commence par les résultats.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Compter les productions | Facile, familier | Gonfle ; récompense le volume |
| Mesurer les résultats | Reflète la valeur | Plus lent ; plus difficile à attribuer |
| Échantillonner et juger | Détecte la dilution | Demande des réviseurs compétents ; effort |
| Notation automatique de la qualité | Passe à l'échelle | L'opinion d'un autre modèle ; peut partager les mêmes angles morts |
| Revoir tout ce qui est généré | Sûr | Supprime le bénéfice ; réviseurs surchargés |
| Revoir un échantillon | Pratique | Certains éléments médiocres passent |
| Permettre la génération ouverte | Rapide, large | Bruit ; la confiance s'érode |
| Limiter la génération à des usages approuvés | Signal plus propre | Adoption plus lente ; bénéfices manqués |

La réponse en bref est de mesurer les résultats, d'échantillonner et de juger l'utilité avec des personnes, de limiter ce qui entre dans les magasins partagés sans revue et de revisiter les références. Utilisez la notation automatique comme une aide, non comme juge.

## Questions à discuter avec votre équipe

**1. Lesquels de nos chiffres ont monté depuis que nous utilisons l'IA, et qu'ont-ils fait pour les gens que nous servons ?**
Listez les chiffres. Pour chacun, regardez le résultat qu'il devait refléter. L'animateur doit noter où le résultat n'a pas bougé. Appariez ces chiffres avec un contrôle d'utilité.

**2. Quelle part de ce que nous avons publié ou créé le mois dernier serions-nous heureux de défendre ligne par ligne ?**
Prenez un échantillon aléatoire et lisez-le ensemble. Marquez ce qui est utile, mince, faux ou en double. Discutez du taux et des causes. Convenez d'une norme pour ce qui entre dans les magasins partagés.

**3. Où la vérification devient-elle notre goulot d'étranglement ?**
Demandez aux réviseurs. Regardez les files de revues, la profondeur des revues et l'effort qu'ils portent maintenant. Convenez d'une limite de taille ou de nombre d'éléments générés par revue, et d'un moyen de mesurer la charge.

**4. Quel contenu généré alimente ici d'autre contenu généré ?**
Retracez une réponse typique jusqu'à ses sources. Où la chaîne a-t-elle commencé ? Discutez de l'endroit où une personne devrait vérifier la chaîne, ou étiqueter le contenu.

**5. Que dirait un utilisateur de notre base de connaissances maintenant, comparée à il y a un an ?**
Lisez les commentaires récents et regardez les données d'usage. Demandez s'il est plus facile ou plus difficile de trouver une réponse digne de confiance. Convenez d'un nettoyage et d'une règle pour le nouveau contenu.

**6. Lesquelles de nos tendances devrions-nous redémarrer avec une nouvelle référence ?**
Listez les métriques qui dépendent du volume ou de la manière dont les éléments sont créés. Cherchez les changements de forme depuis l'arrivée de l'IA. Annotez les tendances, et décidez lesquelles demandent une nouvelle référence.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison génèrent une grande part du volume et portent la maintenance. Elles doivent favoriser des changements plus petits et plus clairs, garder la matière générée revue et étiquetée, et surveiller la rétention et la reprise. Elles doivent refuser les métriques fondées sur le volume généré et demander des mesures de résultats.

### Équipes de service et d'exploitation

Les équipes d'exploitation vivent dans les files, les alertes et la base de connaissances que la dilution abîme. Elles doivent ajuster les tickets et alertes créés par l'IA pour garder un signal fort, revoir les connaissances générées avant publication et signaler quand le flux devient du bruit. Elles sont les mieux placées pour juger l'utilité.

### Direction et gouvernance

Les dirigeants reçoivent les tableaux de bord que l'inflation fausse. Ils doivent demander les résultats d'abord, exiger des contrôles d'utilité à côté du volume, financer la capacité de revue et accepter que certaines mesures demandent une nouvelle référence. La gouvernance doit vérifier que le contenu généré des magasins partagés est revu et étiqueté.

### Clients et utilisateurs

Les utilisateurs supportent le coût de la dilution quand les réponses sont fausses, que les articles se contredisent et que les réponses sont longues et vides. Ils veulent une aide courte, correcte et pertinente. Leur réaction à la qualité de ce qu'ils reçoivent est un test direct de la survie du signal.

## En pratique : un exemple de gestion des services

Le groupe informatique d'une société pharmaceutique mondiale active un assistant d'IA pour rédiger des articles de connaissances, résumer des tickets et préparer des rapports d'état hebdomadaires. En un trimestre, le tableau de bord paraît excellent. Les chiffres ci-dessous sont illustratifs.

Les articles de connaissances créés passent de 140 à 610 par mois. Les tickets portent des résumés détaillés rédigés par l'IA. Les rapports hebdomadaires atteignent douze pages. La responsable de la qualité des services remarque que la satisfaction envers le libre-service a baissé et que le centre de services rapporte plus de contacts « l'article n'a pas aidé ». Elle échantillonne 100 des nouveaux articles avec deux agents expérimentés. Seuls 54 sont jugés utiles : 23 doublonnent des articles existants, 15 contiennent des étapes périmées ou incorrectes et 8 sont trop vagues pour qu'on puisse agir. Parmi les nouveaux articles, 71 % ont été publiés sans revue humaine. La base de connaissances compte désormais environ 3 200 articles, avec un taux de redondance du contenu qu'elle estime à 28 % contre 9 % il y a un an. Les agents rapportent que trouver une réponse digne de confiance prend plus de temps. La charge de vérification des rédacteurs d'articles du centre de services a grandi à environ 40 heures par semaine, contre 12. Les résumés de tickets rédigés par l'IA font que les réponses ultérieures générées par l'IA s'appuient sur un texte que personne n'a écrit, et dans un retraçage de cinq réponses à travers leurs sources, deux s'appuyaient sur un résumé qui avait mal énoncé le problème. Les rapports d'état hebdomadaires, quand on les lit, disent peu de choses qui n'étaient pas dans le précédent, et les parties prenantes ont cessé de lire au-delà de la page deux.

Elle propose quatre changements, que l'équipe de direction des services et les responsables des connaissances adoptent. Les articles générés exigent une revue par un rédacteur nommé avant publication, et sont étiquetés tant qu'ils ne sont pas approuvés. Une limite d'un article généré par groupe thématique évite les doublons, et un balayage fusionne ou retire les éléments redondants. Les modèles de rapport sont ramenés à deux pages qui commencent par les résultats, et l'IA ne sert qu'à rédiger les sections qu'une personne édite ensuite. Les résumés de tickets sont marqués comme générés, et un échantillon est vérifié chaque mois. Le tableau de bord rapporte la part d'éléments utiles, le taux de redondance, la part revue et la charge de vérification à côté des décomptes d'articles.

Après deux trimestres, les articles créés par mois tombent à 190, la part d'éléments utiles monte à 91 %, le taux de redondance tombe à 11 %, la part revue est de 100 % et la charge de vérification se stabilise à environ 16 heures par semaine. La satisfaction envers le libre-service se rétablit et les contacts « l'article n'a pas aidé » baissent. Les parties prenantes lisent le rapport de deux pages. Un directeur demande un objectif de 1 000 articles par mois pour montrer la valeur du programme d'IA. La responsable de la qualité des services explique que le décompte était le problème, et propose de suivre l'utilité et l'usage. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Une revue régulière de la question de savoir si chaque décompte reflète encore l'utilité aide une équipe à remarquer tôt l'inflation, et les parties prenantes peuvent vous dire ce qu'elles utilisent réellement. La précaution est que resserrer un décompte après avoir remarqué l'inflation relance le cycle.

### IA

L'IA rend le volume et la vitesse bon marché : tout décompte de volume ou de vitesse gonfle donc. Appariez chacun avec la part d'éléments qu'une personne a jugés utiles et avec la charge de vérification, et vérifiez le contenu redondant. La précaution est qu'une IA utilisée pour vérifier la production d'une IA peut partager les mêmes angles morts : gardez donc l'échantillonnage humain.

### Automatisation

Automatisez la détection des doublons, des quasi-doublons et du contenu périmé, et mesurez la détection sur les faux positifs. La précaution est qu'un nettoyage automatisé peut retirer des éléments rares mais importants.

### Analytique

Rapportez le rapport production-résultat et la part d'éléments utiles avec les tailles d'échantillon. La décision éclairée est quels décomptes cesser de rapporter. La précaution est que le rapport dépend de la manière dont les résultats sont définis : énoncez-la donc.

## Éclairage sectoriel

**Startup.** La génération est bon marché et le temps de revue rare. Gardez la documentation et les tickets courts, revoyez ce que les clients liront et supprimez librement. Un petit ensemble correct d'articles vaut mieux qu'un grand ensemble douteux.

**Petite entreprise.** La capacité de revue est faible : limitez donc ce que l'outil produit. Préférez une poignée de guides et de modèles vérifiés. Méfiez-vous de publier sans contrôle de la matière générée sur des pages publiques.

**Grande entreprise.** L'échelle amplifie le bruit. Établissez une gouvernance du contenu avec des responsables, des étiquettes et des règles de revue, mesurez l'utilité dans toute la base de connaissances et menez des nettoyages périodiques. Partagez les grilles entre équipes et comparez les tendances, non les équipes.

**Gouvernement et secteur public.** Le contenu public doit être exact et accessible, et les erreurs peuvent nuire. Exigez la revue de l'information publique générée, conservez des traces de la manière dont elle a été produite et appliquez des normes de langage clair et d'accessibilité. Des règles de conservation et de documents peuvent s'appliquer à la matière générée (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts de la protection contre l'inflation sont modestes : temps de revue pour l'échantillonnage, effort éditorial pour le contenu généré, outillage de détection des doublons et effort de refaire les références des tendances. Les coûts de ne pas le faire sont plus grands mais diffus : des utilisateurs qui cessent de faire confiance au libre-service, des réviseurs qui s'épuisent, des décisions prises sur des chiffres gonflés et des projets de nettoyage.

Construisez le dossier à partir de vos propres données : la part d'éléments utiles et la charge de vérification dans le temps, le volume de contacts causés par un contenu inutile et le coût d'un nettoyage de la base de connaissances. Évitez d'utiliser des chiffres publiés sur la qualité du contenu généré, qui varient largement selon l'outil, la tâche et la méthode. Incluez le coût évité du tort à la réputation causé par la publication d'informations fausses (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Célébrer le volume.** Cela récompense le bruit. Célébrez les résultats et l'utilité.
- **La vitesse du premier brouillon comme histoire de productivité.** L'économie peut disparaître à la vérification. Mesurez le temps jusqu'à un résultat vérifié.
- **Publier du contenu généré sans revue.** La confiance s'érode silencieusement. Revoyez et étiquetez.
- **Laisser le contenu généré alimenter la génération.** Les erreurs se composent. Vérifiez la chaîne.
- **Des références inchangées.** Les tendances induisent en erreur après un changement technologique. Annotez et refaites la référence.
- **Surcharger les réviseurs.** La revue devient un tampon. Limitez le volume et mesurez la charge.
- **Utiliser un juge d'IA pour tout.** Il peut partager les angles morts du producteur. Gardez des personnes dans la boucle.
- **Ignorer le rebond.** Un travail moins cher attire plus de travail. Décidez à quoi sert le temps économisé.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Appariement et échantillonnage | Volume rapporté seul | Impressions informelles de qualité | Chaque métrique de volume appariée avec un contrôle d'utilité échantillonné | Utilité, charge et redondance gérées avec des cibles portant sur la revue et non le volume | Vue entre organisations de la qualité du signal ; grilles partagées avec les partenaires |
| Contenu et boucles | Contenu généré mêlé aux autres | Un peu d'étiquetage | Contenu généré étiqueté et revu avant publication ; chaînes échantillonnées | Boucles surveillées ; magasins entretenus ; doublons retirés selon un calendrier | Provenance suivie de bout en bout entre outils et fournisseurs |
| Références et attention | Tendances lues à travers le changement | Annotations sur certains graphiques | Références refaites là où les données ont changé ; rebond considéré | Drapeaux de dérive revus chaque trimestre ; charge des réviseurs gérée | La conception des métriques s'adapte continuellement au changement technologique avec les parties prenantes |

## Liste de vérification

- [ ] Chaque métrique de volume ou de vitesse a un compagnon d'utilité jugé par une personne.
- [ ] Un échantillon aléatoire d'éléments touchés par l'IA est revu chaque mois face à une grille écrite.
- [ ] La charge de vérification est estimée et suivie comme tendance.
- [ ] Les connaissances générées sont étiquetées et revues avant publication.
- [ ] La redondance de la base de connaissances est mesurée et réduite.
- [ ] Les flux d'alertes et de tickets sont surveillés pour la part utile et les doublons.
- [ ] Les chaînes allant des productions générées à leurs sources sont échantillonnées.
- [ ] Les tendances à travers l'introduction de l'IA sont annotées ou refaites avec une nouvelle référence.
- [ ] Les rapports aux dirigeants commencent par les résultats.
- [ ] Les utilisateurs et les parties prenantes sont interrogés pour savoir si le signal est plus clair ou plus bruité.

## Prompts d'IA

**Créez une grille d'utilité.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Analysez une baisse du signal.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Planifiez un nettoyage de la base de connaissances.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Retracez une chaîne de contenu généré.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le compagnon d'utilité d'une métrique de volume ou de vitesse.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique touchée par l'IA apparie le volume avec une utilité échantillonnée et porte son vecteur de détournement et son garde-fou.

## Idées clés

- Quand l'IA rend la production bon marché, les métriques de volume et de vitesse gonflent et la part qui est utile peut baisser.
- Appariez chaque mesure de volume ou de vitesse avec un contrôle d'utilité échantillonné et jugé par une personne.
- Mesurez le temps jusqu'à un résultat vérifié et la charge de vérification, car la vérification devient le goulot d'étranglement.
- Étiquetez et revoyez le contenu généré avant qu'il entre dans les magasins partagés, et empêchez les boucles de s'alimenter sans contrôle.
- Refaites les références des tendances après un changement technologique, et commencez les rapports par les résultats.
- Décidez d'avance à quoi sert le temps économisé, et protégez l'attention des réviseurs et des utilisateurs.

## Références et lectures complémentaires

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
