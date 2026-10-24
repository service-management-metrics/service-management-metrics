# Échecs de changement et reprises

**Définissez une fois « un changement en échec », par écrit, reliez chaque échec au changement qui l'a causé, et lisez l'échec et la reprise avec la vitesse pour qu'un chiffre plus bas signifie un changement plus sûr et jamais simplement moins de signalements.**

## Vue d'ensemble et motivation

Tout changement apporté à un service en production comporte une certaine chance de dégrader les choses. Les questions pratiques sont : à quelle fréquence cela arrive, combien de travail non planifié cela crée et avec quelle rapidité l'équipe se rétablit. Ce sujet couvre les mesures qui y répondent : la part des changements qui échouent, la part qui passe par la voie d'urgence, les taux de retours arrière et de correctifs urgents, et la reprise qui suit un mauvais changement. Il couvre aussi la partie la moins glorieuse du sujet, qui est de s'accorder sur ce qui compte comme un échec.

Quelques termes d'abord. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique appelée maîtrise des changements couvre l'ajout, la modification ou le retrait de tout ce qui pourrait affecter un service. Un **changement** est donc plus large qu'un déploiement de code : il inclut une modification de configuration, un renouvellement de certificat, une règle de pare-feu ou une migration de base de données. Un **changement standard** est préautorisé et à faible risque, un **changement normal** passe par une évaluation, et un **changement d'urgence** est fait d'urgence, généralement pour rétablir un service ou combler une vulnérabilité grave. Un **déploiement** est l'acte de mettre une version d'un logiciel dans un environnement, alors qu'une **version** (release) rend une capacité disponible aux utilisateurs. Les équipes qui utilisent un [indicateur de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) peuvent déployer du code sans le publier (voir le sujet 4.5, Métriques des versions et des déploiements).

Un **échec de changement** est un changement qui mène à un service dégradé ou demande une remédiation. La remédiation prend plusieurs formes. Un [retour arrière](https://en.wikipedia.org/wiki/Rollback_(data_management)) ramène le système à son état antérieur. Un [correctif urgent](https://en.wikipedia.org/wiki/Hotfix) (hotfix) est un correctif urgent appliqué hors du rythme normal de publication. Une correction en avant (roll-forward) livre un nouveau changement par-dessus le changement cassé. La [reprise](https://en.wikipedia.org/wiki/Rework) (rework) est l'effort non planifié dépensé à refaire ou à réparer quelque chose qui devait être terminé. Dans un contexte de [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery), où de petits changements parviennent souvent en production, ces mesures sont la principale preuve que la vitesse coûte ou non de la stabilité.

Les deux traditions regardent le même événement différemment. La vision ITIL s'organise autour de l'enregistrement de changement : le changement a-t-il été autorisé, a-t-il réussi, et le résultat a-t-il été consigné ? Un changement qui réussit sur le papier peut quand même causer un incident une heure plus tard. La vision agile s'organise autour de l'élément de travail et du déploiement : la définition de terminé de l'équipe a-t-elle tenu, et le changement a-t-il causé du travail non planifié peu après ? Aucune des deux visions n'est complète seule. La recherche derrière le programme DORA traite le taux d'échec des changements et le taux de reprise des déploiements comme les deux mesures d'« instabilité » à côté des mesures de débit (voir le sujet 2.8, Métriques DORA, qui les définit au niveau du programme). Ce sujet va plus en profondeur dans la mécanique : comment définir l'échec, comment rattacher des incidents à des changements, comment le travail d'urgence est compté et comment les chiffres sont détournés.

Un avertissement vaut dès le départ. Ces mesures décrivent une équipe, un service ou une chaîne. Elles ne décrivent jamais une personne. Un taux d'échec des changements attaché à un ingénieur individuel apprend aux gens à éviter le travail risqué et précieux, à scinder les changements jusqu'à ce que les décomptes paraissent bons, et à cesser de signaler les problèmes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) mord fort ici, parce que « moins d'échecs » s'obtient facilement en consignant moins d'échecs.

Le calendrier des incidents relève du sujet 3.3, Temps de réponse et de résolution des incidents, les pires incidents du sujet 3.4, Métriques des incidents majeurs, le flux d'approbation et la part de changements standard du sujet 4.3, Métriques de maîtrise des changements, les causes racines du sujet 4.1, Métriques de gestion des problèmes, et la revue écrite du sujet 4.2, Métriques des analyses post-incident et de l'apprentissage.

## Principes clés

- **L'échec a besoin d'une seule définition écrite.** Les équipes qui décident au cas par cas produisent des chiffres qui ne peuvent être ni suivis dans le temps ni comparés, et la dispute sur la définition remplace la dispute sur le travail.
- **Un échec doit être traçable jusqu'à son changement.** Sans lien consigné entre un incident, un retour arrière ou un correctif urgent et le changement qui l'a causé, le taux d'échec est une conjecture.
- **Comptez chaque voie de remédiation.** Retour arrière, correctif urgent, correction en avant et contournement manuel sont quatre routes vers le même événement. Une métrique qui n'en compte qu'une récompense les équipes qui en choisissent une autre.
- **Lisez l'échec à côté de la vitesse et du rétablissement.** Un taux d'échec des changements isolé peut être amélioré en changeant moins souvent, ce qui est rarement le but. Appariez-le au délai de livraison, à la fréquence de déploiement et au temps de rétablissement.
- **Les petits échantillons demandent des décomptes, pas seulement des pourcentages.** Une équipe avec huit changements dans un mois et un échec a un taux d'échec de 12,5 % qui ne dit presque rien : montrez donc les décomptes et utilisez une fenêtre plus longue (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **L'urgence est un signal, non un péché.** Une part stable et expliquée de changements d'urgence est normale. Une part en hausse pointe généralement des problèmes de qualité en amont, de planification ou de détection.

## Définitions des métriques

Les mesures d'échec et de reprise dépendent de la jointure de l'enregistrement de changement, du journal des déploiements et de l'outil d'incidents. Chaque définition ci-dessous énonce ce qui est compté, ce qui est exclu et où l'horloge démarre et s'arrête. Les équipes doivent copier les définitions dans leur registre des métriques et les ajuster avec un motif énoncé.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'échec des changements | Part des changements en production qui causent un service dégradé ou demandent une remédiation | changements ayant exigé un retour arrière, un correctif urgent, une correction en avant ou un incident relié dans la fenêtre d'échec / tous les changements en production terminés dans la période ; la fenêtre démarre à l'achèvement du changement et s'arrête après un nombre fixe de jours (par exemple 7), écrit dans le registre des métriques ; les changements encore dans la fenêtre sont rapportés à part et exclus du taux jusqu'à la fermeture de la fenêtre | pourcentage | Enregistrements de changements ou journal des déploiements joints à l'outil d'incidents et à la liste des correctifs urgents | Maîtrise des changements ; gestion des incidents | Définition de terminé ; défauts échappés | Mensuelle, sur une fenêtre glissante de 90 jours |
| Part de changements d'urgence | Part des changements faits par la voie d'urgence | changements consignés comme urgence / tous les changements terminés dans la période ; urgence signifie que l'évaluation normale a été contournée ou raccourcie pour cause d'urgence, et les changements standard préautorisés sont exclus des deux décomptes | pourcentage | Champ de type de l'enregistrement de changement | Maîtrise des changements | Travail non planifié et classe de service accélérée | Mensuelle |
| Taux de retours arrière | Part des changements qui ont été inversés vers une version antérieure | changements inversés après avoir atteint la production / tous les changements en production dans la période ; un retour arrière fait avant que le changement ait atteint des utilisateurs (par exemple une version canari arrêtée à sa première étape) est compté à part | pourcentage | Journal des déploiements et outil de publication | Gestion des versions ; gestion des déploiements | Pratiques de chaîne et de publication | Mensuelle |
| Taux de correctifs urgents | Part des changements qui sont des correctifs urgents appliqués hors du flux normal de publication | changements étiquetés ou branchés comme correctif urgent / tous les changements en production dans la période ; le dénominateur inclut les correctifs urgents eux-mêmes | pourcentage | Branches ou étiquettes de gestion de versions et journal des déploiements | Maîtrise des changements ; gestion des incidents | Travail non planifié ; accélération | Mensuelle |
| Taux de reprise des déploiements | Part des déploiements qui étaient des corrections non planifiées d'un problème d'un déploiement antérieur | déploiements en production qui corrigent un défaut ou une défaillance d'un déploiement antérieur récent, dans la même fenêtre d'échec / tous les déploiements en production de la période ; le travail de suivi planifié issu de la feuille de route est exclu | pourcentage | Journal des déploiements avec un lien ou une étiquette « corrige », et gestionnaire de travail | Maîtrise des changements ; amélioration continue | Reprise ; défauts échappés ; demande d'échec | Mensuelle |
| Taux de liaison changement-incident | Part des incidents résolus qui consignent si un changement les a causés, et lequel | incidents avec un champ « causé par un changement » rempli (oui ou non, plus l'identifiant du changement quand oui) / incidents résolus dans la période ; l'horloge s'arrête à la clôture de l'incident | pourcentage | Outil d'incidents et enregistrements de changements | Gestion des incidents ; maîtrise des changements | Revue post-incident ; définition de terminé | Mensuelle |
| Concordance sur la définition de l'échec | Accord entre deux relecteurs sur le fait qu'un échantillon de changements a échoué ou non | changements échantillonnés pour lesquels deux relecteurs indépendants parviennent au même verdict d'échec avec la définition écrite / changements échantillonnés ; un échantillon d'au moins 20 changements tirés au hasard chaque trimestre | pourcentage | Feuille de revue de l'échantillon tenue avec le registre des métriques | Amélioration continue ; mesure et rapports | Rétrospective | Trimestrielle |

Deux remarques sur le tableau. Le taux d'échec et le taux de reprise se recoupent sans être identiques : un échec annulé sans nouveau déploiement compte dans le taux d'échec et non dans le taux de reprise. Et l'unité est le changement ou le déploiement, non l'incident, parce qu'un changement peut causer trois incidents et qu'un incident peut venir de trois changements.

## Recommandations

### Écrire la définition de l'échec avant de collecter des données

**Convenez de ce que « en échec » signifie et mettez-le dans le registre des métriques.** Une définition praticable est qu'un changement a échoué si, dans une fenêtre énoncée après son achèvement, il a été annulé, a demandé un correctif urgent ou une correction en avant, ou a été relié à un incident d'une gravité énoncée ou supérieure. Énoncez la fenêtre (7 jours est courant, et la bonne valeur dépend de la rapidité avec laquelle vos services montrent leurs problèmes), le seuil de gravité de l'incident et qui tranche en cas de litige. Écrivez au moins cinq exemples travaillés, y compris des cas délicats comme un changement qui a dégradé les performances sans aucune panne. Revoyez la définition chaque année et consignez les changements avec leurs motifs, pour qu'une courbe de tendance puisse être restituée si la règle bouge.

### Relier les échecs aux changements dans l'enregistrement d'incident

**Ajoutez un champ obligatoire à l'enregistrement d'incident : causé par un changement, oui ou non, et l'identifiant du changement quand oui.** Le champ doit être rempli pendant la résolution et vérifié lors de la revue post-incident (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Suivez le taux de liaison comme sa propre métrique. Si seule la moitié des incidents portent le champ, le taux d'échec sous-estime la vérité d'une quantité inconnue, et vous devez le dire à côté du chiffre. Automatisez la première supposition là où vous le pouvez, par exemple en listant les changements terminés sur le service touché dans les heures précédant le début de l'incident, et laissez un humain la confirmer.

### Compter toutes les voies de remédiation, pas une seule

**Définissez un échec à partir de plusieurs signaux.** Tirez les retours arrière de l'outil de déploiement, les correctifs urgents de la gestion de versions ou du journal de publication, les corrections en avant du lien « corrige », et les incidents de l'outil d'incidents, puis dédoublonnez par changement. Une équipe qui ne compte que les retours arrière verra les échecs disparaître le jour où elle passe à la correction en avant. Gardez aussi chaque voie comme une ventilation distincte, car le mélange raconte une histoire : beaucoup de correctifs urgents et peu de retours arrière suggèrent que le retour arrière est difficile, ce qui vaut d'être corrigé en soi.

### Traiter la part de changements d'urgence comme une question, non un score

**Revoyez les changements d'urgence comme un groupe, non comme un objectif.** Chaque trimestre, lisez-les tous et triez les raisons : rétablir un service, combler une vulnérabilité, une demande tardive de l'activité, une étape de planification manquée, ou un chemin d'approbation trop lent pour le travail ordinaire. Les deux dernières sont des problèmes de système qu'il faut corriger en améliorant le chemin standard, pour que les gens n'aient pas besoin de le contourner (voir le sujet 4.3, Métriques de maîtrise des changements). Une part de zéro est suspecte, parce que de véritables urgences se produisent. Une part qui monte régulièrement mérite un enregistrement de problème (voir le sujet 4.1, Métriques de gestion des problèmes).

### Mesurer la reprise comme une demande d'échec

**Suivez la reprise comme le travail créé par un échec antérieur.** L'idée de demande d'échec (failure demand) vient de la conception de services : la demande qui existe parce que quelque chose n'a pas été bien fait du premier coup. En termes de livraison, comptez les déploiements et les éléments de travail dont le seul but est de corriger un changement récent. Cela se relie directement à la répartition entre travail planifié et non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Utilisez la part de capacité dépensée en reprise comme point de départ de la conversation avec le responsable produit, parce qu'elle transforme un taux abstrait en un arbitrage sur ce qu'il faut faire ensuite.

### Rapporter des taux avec des décomptes, des distributions et une fenêtre

**Montrez les décomptes à côté des pourcentages, et utilisez une fenêtre glissante.** Un taux d'échec mensuel pour une équipe qui déploie dix fois est bruité. Utilisez une fenêtre glissante de 90 jours, montrez le nombre de changements et d'échecs derrière le taux, et donnez une indication approximative de l'incertitude (voir le sujet 1.6, Culture statistique pour les métriques de service). Pour le rétablissement, montrez la médiane et le 85e percentile du temps entre l'échec et la restauration plutôt qu'une moyenne. Quand un service a très peu de changements, racontez l'histoire avec la liste des échecs réels au lieu d'un taux.

### Apparier échec et vitesse pour que l'amélioration ne puisse se cacher dans aucun des deux

**Affichez toujours le taux d'échec des changements à côté du délai de livraison et de la fréquence de déploiement.** Si le taux d'échec baisse pendant que la fréquence de déploiement baisse aussi nettement et que le délai de livraison s'allonge, l'équipe regroupe peut-être les changements, ce qui augmente le risque de chacun. Si la vitesse monte et que le taux d'échec reste stable, le système devient meilleur au changement. L'appariement est la principale défense contre le détournement et contre la croyance confortable que moins de déploiements signifie des déploiements plus sûrs (voir le sujet 2.8, Métriques DORA).

### Utiliser les chiffres pour améliorer le changement lui-même

**Transformez les données d'échec en expériences d'ingénierie.** Regardez les traits communs des changements en échec : taille, heure de la journée, type, nombre de personnes impliquées, atteinte de composants partagés et couverture de tests mince. Essayez ensuite une petite expérience réversible comme des lots plus petits, des [tests de non-régression](https://en.wikipedia.org/wiki/Regression_testing) automatisés pour une zone risquée, une [version canari](https://en.wikipedia.org/wiki/Canary_release) pour le prochain changement risqué, ou un indicateur de fonctionnalité qui sépare le déploiement de la version. Mesurez de nouveau après une fenêtre complète. Le but est un meilleur changement, et une métrique améliorée n'en est que la preuve.

### Revoir les métriques ensemble dans un forum sans blâme

**Tenez chaque mois une revue des changements en échec avec les personnes qui les ont faits.** L'ordre du jour a trois points : les décomptes et la tendance, deux ou trois changements en échec choisis pour étude, et une action d'amélioration avec un responsable. Utilisez la pratique de revue sans blâme, pour que les gens décrivent ce qu'ils savaient à l'époque. Publiez les notes de revue avec les métriques. Si les gens hésitent à signaler les échecs à cause de la façon dont les chiffres sont utilisés, corrigez cela avant de changer quoi que ce soit d'autre (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux d'échec des changements | Rétrécir la fenêtre d'échec ; ne pas relier les incidents aux changements ; classer un mauvais changement comme « demande de service » ou « maintenance » ; corriger en avant et appeler cela un nouveau changement ; regrouper de nombreuses modifications en un seul changement pour qu'un échec les couvre toutes | Taux de liaison changement-incident ; audit trimestriel par échantillon face à la liste d'incidents ; concordance sur la définition de l'échec ; délai de livraison et fréquence de déploiement à côté |
| Part de changements d'urgence | Faire passer le travail urgent par le chemin standard avec une fausse note de risque ; faire passer du travail ordinaire en urgence pour éviter l'approbation ; scinder une urgence en plusieurs changements normaux | Lecture trimestrielle de tous les changements d'urgence ; raisons triées et revues ; part de changements standard et délai d'approbation (voir le sujet 4.3, Métriques de maîtrise des changements) |
| Taux de retours arrière | Corriger en avant pour éviter de consigner un retour arrière ; garder en production une version cassée ; retenir des changements hors de la production pour qu'il n'y ait rien à inverser | Taux de correctifs urgents et taux de reprise à côté ; distribution du temps de rétablissement ; échantillon d'incidents face au journal des déploiements |
| Taux de correctifs urgents | Ne pas étiqueter les correctifs urgents ; les faire passer par la branche normale ; appeler un correctif urgent « une petite amélioration » | Taux de reprise des déploiements ; audit des branches et des étiquettes ; part de travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié) |
| Taux de reprise des déploiements | Ne pas relier les corrections au déploiement d'origine ; étiqueter une correction comme « planifiée » ; regrouper la correction avec de nouvelles fonctionnalités | Lien « corrige » obligatoire sur les déploiements correctifs ; revue par échantillon des déploiements étiquetés planifiés ; taux d'échec des changements à côté |
| Taux de liaison changement-incident | Remplir le champ avec « non » sans vérifier ; laisser le champ prendre « non » par défaut ; clore des incidents en masse pour relever le pourcentage | Vérification par échantillon des réponses « non » lors de la revue post-incident ; pas de valeur par défaut ; commentaires de relecteurs sur un échantillon |
| Concordance sur la définition de l'échec | Choisir des exemples faciles pour l'échantillon ; des relecteurs qui sont les personnes mesurées ; assouplir la définition pour que tout le monde soit d'accord | Échantillon aléatoire tiré par quelqu'un d'extérieur à l'équipe ; inclure délibérément des cas limites ; publier les désaccords et corriger la définition |

Une lecture saine ressemble à ceci : le taux d'échec se situe dans une plage que l'équipe comprend et explique, le taux de liaison est assez élevé pour qu'on puisse se fier au taux d'échec, les changements d'urgence sont peu nombreux et expliqués, et les retours arrière et les correctifs urgents sont courts et répétés. Les échecs sont rapportés vite et discutés sans blâme. Un taux d'échec anormalement bas avec un faible taux de liaison, une fréquence de déploiement en baisse et des lots qui grossissent est un avertissement, non un succès. Traitez toute amélioration soudaine comme une invite à vérifier d'abord l'instrument (voir le sujet 1.5, Sources de données et instrumentation).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Définition stricte et automatisée de l'échec | Cohérente, peu coûteuse à répéter, facile à suivre dans le temps | Manque les dégradations subtiles ; peut compter des retours arrière bénins comme des échecs |
| Revue au jugement de chaque changement | Capte le contexte et la gravité | Lente, subjective, ouverte aux pressions et à la dérive |
| Longue fenêtre d'échec (semaines) | Attrape les échecs différés | Brouille cause et effet ; les changements récents ne peuvent pas encore être rapportés |
| Compter toutes les voies de remédiation | Difficile à détourner en changeant de voie | Demande de joindre avec soin plusieurs sources de données |

Utilisez une définition automatisée comme base, ajoutez une revue humaine échantillonnée, et améliorez la jointure entre changements et incidents avant de construire quoi que ce soit d'autre.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui compte exactement ici comme un changement en échec, et deux d'entre nous pourraient-ils être en désaccord sur le même changement ?**
Prenez cinq changements récents et demandez à chacun de voter sur leur échec ou non. Comparez les votes et les raisons. Les désaccords montrent où la définition écrite est mince. Convenez d'une règle pour les cas délicats, comme une baisse de performance sans panne, et écrivez-la avec un exemple.

**2. Comment savons-nous quels incidents ont été causés par un changement ?**
Demandez comment le lien est consigné aujourd'hui, et qui le renseigne. Revoyez dix incidents récents et voyez combien ont un changement rattaché, et combien devraient en avoir un. Discutez de la question de savoir si le champ est facultatif, s'il prend « non » par défaut et qui le vérifie. L'animateur doit viser une amélioration concrète de l'enregistrement, comme un champ obligatoire sans valeur par défaut.

**3. Quelles voies de remédiation utilisons-nous, et toutes sont-elles comptées ?**
Listez retour arrière, correctif urgent, correction en avant, contournement manuel et désactivation d'un indicateur de fonctionnalité. Pour chacune, demandez où l'événement est consigné et s'il alimente le taux d'échec. Notez les voies qui ne laissent aucune trace. La discussion révèle souvent que la voie préférée de l'équipe est celle que la métrique ne peut pas voir.

**4. Quand a eu lieu notre dernier changement d'urgence, et aurait-il pu être évité ?**
Parcourez les trois ou quatre derniers. Demandez ce qui a rendu chacun urgent, ce qui était connu plus tôt et à quoi aurait ressemblé un meilleur chemin standard. Séparez les vraies urgences des découvertes tardives et des approbations lentes. Convenez d'une correction du chemin ordinaire qui supprimerait une raison récurrente d'urgence.

**5. Quelle part de notre semaine va à corriger des changements récents ?**
Estimez la part de capacité dépensée en reprise au cours des quatre dernières semaines, avec le gestionnaire plutôt que la mémoire. Comparez l'estimation au gestionnaire. Discutez de ce que le chiffre coûte en travail planifié et de la façon dont le responsable produit s'en servirait. Choisissez un schéma d'échec et une expérience pour le réduire.

**6. Si notre taux d'échec baissait de moitié le trimestre prochain, le croirions-nous ?**
Imaginez le titre et demandez ce qui devrait aussi être vrai : taux de liaison stable, fréquence de déploiement constante, rétablissement rapide et aucune nouvelle catégorie de « maintenance ». Discutez des vérifications que l'équipe fait déjà et de celles qui manquent. Convenez de la façon dont une amélioration soudaine sera investiguée avant d'être célébrée.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent les changements : elles détiennent donc la définition de l'échec et les corrections. Partez du travail : regardez les changements en échec lors de la revue, trouvez les traits communs et essayez des lots plus petits, de meilleurs tests ou des indicateurs. Suivez la reprise comme partie du tableau, pour que les corrections non planifiées soient visibles à côté du travail planifié. Gardez les chiffres pour l'apprentissage propre de l'équipe et résistez au partage de données au niveau individuel. Si une métrique est montrée aux dirigeants, l'équipe doit pouvoir expliquer chaque changement qui s'y trouve.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient les conséquences du changement dans la file d'incidents et sont les mieux placées pour maintenir le lien entre incidents et changements. Elles peuvent ajouter le champ obligatoire, le vérifier à l'étape de résolution et renvoyer les résultats à l'équipe de livraison sans blâme. L'exploitation détient aussi la voie d'urgence et doit en revoir l'usage. Partagez l'information sur les voies de rétablissement et répétez les retours arrière avec les équipes de livraison, puisque la meilleure façon de réduire le coût de l'échec est une habitude partagée de rendre le changement réversible (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants doivent demander des tendances par service, les deux sortes de mesures d'instabilité avec la vitesse, et les expériences d'amélioration qui les sous-tendent. Évitez les objectifs fixes comme « taux d'échec inférieur à 5 % », qui invitent à la redéfinition, et évitez d'utiliser les chiffres dans les évaluations individuelles. Les instances de gouvernance peuvent utiliser les données comme preuve qu'un chemin d'approbation plus léger est sûr, en vérifiant que l'échec et le rétablissement sont restés stables quand les contrôles ont été assouplis. Une tendance à la hausse des changements d'urgence est un signal pour regarder la planification et la conception des approbations, non pour blâmer les ingénieurs d'astreinte.

### Clients et utilisateurs

Les clients se moquent du taux d'échec. Ils se soucient de savoir si le service casse après une mise à jour et avec quelle rapidité il revient. Les données d'échec soutiennent une communication honnête : préavis des changements risqués, messages d'état clairs quand un changement cause des ennuis et engagement visible d'apprendre. Là où les utilisateurs dépendent d'un service pour des tâches critiques, convenez à l'avance avec eux des fenêtres de maintenance et des attentes de retour arrière (voir le sujet 3.4, Métriques des incidents majeurs).

## En pratique : un exemple de gestion des services

Le service informatique d'un prestataire de santé régional exploite un service de planification des patients. Une équipe produit de sept personnes publie des changements plusieurs fois par semaine, et une équipe d'exploitation de cinq personnes traite les incidents et le processus de changement. Tous les chiffres de cet exemple sont illustratifs.

Sur un trimestre, le rapport mensuel montre un taux d'échec des changements de 4 %, contre 11 % le trimestre précédent. Le directeur des systèmes d'information est satisfait. Le responsable de la plateforme n'est pas convaincu, parce que l'équipe d'astreinte dit que ses nuits ne se sont pas améliorées. Elle demande à l'équipe de mener l'audit par échantillon prévu dans le registre des métriques.

L'audit prend 30 changements au hasard et deux relecteurs appliquent la définition écrite. Ils s'accordent sur 24 des 30 verdicts : la concordance sur la définition de l'échec est donc de 80 % (illustratif). Ils comparent ensuite l'échantillon avec la liste d'incidents. Sur 22 incidents résolus dans le trimestre, 9 seulement portent le champ « causé par un changement », soit un taux de liaison de 41 %. En lisant les 13 autres à la main, les relecteurs en trouvent 5 qui ont commencé dans la journée suivant un changement. Le décompte corrigé fait monter le taux d'échec à environ 9 %, et l'audit découvre pourquoi le chiffre paraissait bon : une nouvelle habitude de déployer les corrections sous l'étiquette « maintenance », que le rapport excluait à la fois du dénominateur et du numérateur.

Le risque de détournement est l'étiquette, et personne ne l'avait planifié. On avait dit à l'équipe que les échecs étaient une préoccupation, et « maintenance » évitait une conversation. L'équipe prend trois décisions. Le champ « causé par un changement » devient obligatoire sans valeur par défaut, et la revue post-incident le vérifie. L'étiquette « maintenance » est retirée, et les déploiements correctifs doivent porter un lien vers le changement qu'ils corrigent, ce qui alimente le taux de reprise. La définition de l'échec est réécrite avec six exemples travaillés, dont une régression de requête lente qui n'a jamais causé de panne.

Le trimestre suivant montre un taux d'échec restitué de 8 % et un taux de liaison de 90 % (illustratif). Le rapport de direction montre désormais les décomptes, le taux de liaison et le taux de reprise à côté du délai de livraison, et le directeur des systèmes d'information cesse de citer un pourcentage unique.

## Agilité, IA, automatisation et analytique

### Agilité

De petits changements fréquents rendent les échecs moins coûteux et plus faciles à tracer, et l'équipe les revoit régulièrement avec les parties prenantes. La précaution est que si les échecs sont pénalisés, les gens cessent de les déclarer.

### IA

Les changements assistés par l'IA peuvent faire monter le volume et la reprise tout en paraissant rapides. Rapportez les changements en échec et la reprise du travail assisté par l'IA avec la même définition que les autres, et marquez-les dans les données. La précaution est que comparer le travail assisté par l'IA et les autres demande du soin parce que les changements peuvent différer par nature.

### Automatisation

Reliez automatiquement changements, déploiements et incidents par des identifiants, et mesurez le taux de liaison. Le retour arrière automatisé doit être mesuré sur sa réussite et ses effets de bord. La précaution est que des liens brisés font paraître le taux d'échec meilleur qu'il n'est.

### Analytique

Énoncez la définition de l'échec une seule fois et échantillonnez les liens à la main. La décision éclairée est où la pratique du changement doit être renforcée. La précaution est que les taux sur de petits nombres de changements varient largement : montrez donc les décomptes.

## Éclairage sectoriel

**Startup.** Les changements sont petits et fréquents, et l'équipe connaît souvent chaque échec par cœur. Gardez la définition à un paragraphe, étiquetez les retours arrière et les correctifs urgents dans l'outil de déploiement, et revoyez les échecs à la rétrospective hebdomadaire. Un taux d'échec sur 20 changements est bruité : utilisez donc une liste d'échecs comme preuve principale. Le risque est l'informalité : sans définition écrite, le taux bouge selon qui compte.

**Petite entreprise.** Les mêmes personnes déploient, exploitent et soutiennent, de sorte que la reprise entre directement en concurrence avec le travail planifié. Consignez les échecs dans l'outil que vous utilisez déjà, ajoutez un champ obligatoire à l'enregistrement d'incident et revoyez les changements d'urgence chaque trimestre. Évitez une lourde approbation uniquement pour améliorer les chiffres. Une liste de vérification partagée de retour arrière vaut plus qu'un comité des changements.

**Grande entreprise.** De nombreuses équipes, fournisseurs et outils signifient de nombreuses définitions. Standardisez la définition de l'échec et le champ de liaison entre équipes, publiez-les dans le catalogue des métriques et calculez les taux par service avant de consolider. Utilisez des audits par échantillon pour trouver les divergences, et traitez les enregistrements de changements de chaque fournisseur comme une autre source avec sa propre qualité (voir le sujet 1.5, Sources de données et instrumentation). Veillez à ce que les consolidations ne deviennent jamais des classements d'équipes.

**Gouvernement et secteur public.** Les enregistrements de changements servent l'audit et la redevabilité, et les retours arrière peuvent être contraints par la loi, la passation de marchés ou des plateformes partagées. Gardez l'enregistrement formel et ajoutez-y le lien d'échec. Expliquez soigneusement les chiffres aux organes de contrôle, avec décomptes et contexte, car un seul échec sur un service critique peut attirer une attention disproportionnée. Servez-vous des données pour justifier des chemins plus légers pour le changement à faible risque, avec la preuve que l'échec et le rétablissement sont restés stables.

## Dossier d'affaires : motivations, ROI et TCO

La motivation est le coût du changement en échec : travail sur incidents, reprise, éléments de feuille de route retardés et perte de confiance des utilisateurs. Beaucoup d'organisations ne peuvent pas dire quelle part de leur effort va à réparer des changements récents, et une mesure de reprise donne la première réponse honnête. Il y a aussi un bénéfice indirect. Les équipes qui peuvent montrer que le changement est sûr peuvent défendre une approbation plus légère, ce qui raccourcit le délai de livraison. La recherche DORA rapporte une association entre une lourde approbation externe et de moins bonnes performances de livraison (voir le sujet 4.3, Métriques de maîtrise des changements), et les données d'échec sont le moyen par lequel une équipe teste cette affirmation face à son propre historique.

Le coût de collecte est modeste si le terrain est préparé : un champ obligatoire dans l'enregistrement d'incident, des déploiements correctifs étiquetés, une jointure de trois sources de données et une revue mensuelle. Le coût le plus lourd est l'attention, car quelqu'un doit détenir la définition, mener les audits et agir sur les constats. Évitez d'acheter un outil avant que la définition et le lien fonctionnent à la main.

Le rendement se voit dans moins d'échecs répétés, un rétablissement plus court, moins de travail non planifié et de meilleures conversations avec la gouvernance. Ne promettez pas de pourcentage. Estimez plutôt votre propre référence : comptez les heures passées en reprise et en réponse aux incidents reliées au changement sur un trimestre, chiffrez-les avec votre taux interne habituel et comparez après les améliorations. Énoncez les hypothèses, et rapportez le résultat comme une fourchette plutôt qu'un chiffre unique. Comparez-le au coût du programme et au coût d'un seul échec grave sur un service critique.

## Anti-modèles et pièges

- **Fixer un objectif sur le taux d'échec.** Il invite à la redéfinition et aux échecs cachés. Fixez plutôt un objectif d'apprentissage, comme mener à bien chaque revue et clore chaque action corrective, et surveillez le taux pour les tendances.
- **Classer des équipes ou des personnes selon l'échec.** Cela détruit le signalement et punit les équipes qui prennent du travail risqué et précieux. Comparez une équipe à son propre passé et discutez du contexte.
- **Ne compter que les incidents comme échecs.** Les échecs attrapés tôt et annulés disparaissent. Incluez chaque voie de remédiation, et utilisez les incidents comme un signal parmi plusieurs.
- **Traiter les changements d'urgence comme mauvais.** La pression mène à des urgences déguisées. Revoyez-les pour leurs raisons et corrigez le chemin ordinaire.
- **Laisser le lien d'incident prendre « non » par défaut.** La valeur par défaut produit un chiffre flatteur et faux. Rendez le champ obligatoire et vérifiez un échantillon.
- **Rapporter un taux sans décomptes.** Les petits échantillons varient fortement. Montrez les décomptes et une fenêtre glissante.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition de l'échec | Décidée au cas par cas par la personne interrogée | Certaines équipes écrivent une définition ; les équipes diffèrent | Une définition écrite avec exemples travaillés et fenêtre énoncée | Définition testée par des audits sur échantillon et concordance mesurée | Définition révisée avec les fournisseurs et les clients quand elle cesse d'éclairer les décisions |
| Liaison des changements et des incidents | Lien retenu de mémoire par les gens, s'il l'est | Champ facultatif utilisé par certaines équipes | Champ obligatoire sans valeur par défaut, vérifié lors de la revue post-incident | Taux de liaison suivi dans le temps et revu, les lacunes étant traitées | Liens partagés entre équipes et fournisseurs par des interfaces convenues |
| Remédiation et gestion des urgences | Retours arrière et correctifs urgents traités à la volée et non consignés | Retours arrière et correctifs urgents étiquetés par certaines équipes | Toutes les voies de remédiation consignées ; critère d'urgence écrit | Changements d'urgence revus chaque trimestre ; retours arrière répétés | Voies de rétablissement conçues dans les services et testées conjointement entre équipes |
| Usage pour l'amélioration | Chiffres cités dans des rapports sans suivi | Échecs discutés après les incidents majeurs | Revue mensuelle sans blâme des changements en échec avec des actions | Échec et reprise appariés à la vitesse ; expériences planifiées et financées | Amélioration routinière et partagée entre équipes, avec apprentissage publié |

## Liste de vérification

- [ ] Une définition écrite de l'échec de changement existe, avec une fenêtre énoncée et au moins cinq exemples travaillés.
- [ ] L'unité de comptage (changement, déploiement ou version) est nommée dans le registre des métriques.
- [ ] L'enregistrement d'incident a un champ « causé par un changement » obligatoire sans valeur par défaut.
- [ ] Les retours arrière, les correctifs urgents et les corrections en avant sont étiquetés dans les outils de déploiement ou de gestion de versions.
- [ ] Les déploiements correctifs portent un lien vers le changement qu'ils corrigent.
- [ ] Le changement d'urgence a un court critère écrit, et chaque changement d'urgence est revu dans un nombre de jours fixé.
- [ ] Les taux sont montrés avec des décomptes et une fenêtre glissante, jamais comme un pourcentage nu.
- [ ] Le taux d'échec des changements est toujours affiché à côté du délai de livraison, de la fréquence de déploiement et du temps de rétablissement.
- [ ] Un audit trimestriel par échantillon vérifie les verdicts d'échec et le lien d'incident.
- [ ] Une revue mensuelle sans blâme des changements en échec a lieu, avec un responsable pour chaque action.
- [ ] Aucune métrique de ce sujet n'est utilisée pour classer ou évaluer des individus.

## Prompts d'IA

**Rédigez une définition écrite de l'échec de changement.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Concevez le lien changement-incident.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Analysez une liste de changements en échec pour y chercher des schémas.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Vérifiez un tableau de bord d'échecs pour y chercher des risques de détournement.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit une métrique voisine, comme le délai de livraison ou la durée d'incident, et le garde-fou à placer à côté du taux d'échec.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique d'échec nouvelle ou modifiée énonce son horloge, sa source et son vecteur de détournement.

## Idées clés

- Un taux d'échec des changements ne vaut que ce que vaut sa définition : écrivez-en donc une avec une fenêtre, des exemples travaillés et une unité nommée.
- Reliez chaque échec à son changement par un champ obligatoire dans l'enregistrement d'incident, et mesurez le taux de liaison.
- Comptez ensemble retours arrière, correctifs urgents, corrections en avant et incidents reliés, pour que les équipes ne puissent pas esquiver la métrique en changeant de voie.
- Lisez la part de changements d'urgence et la reprise comme des signaux sur la planification et le chemin ordinaire, non comme des scores.
- Montrez toujours l'échec à côté de la vitesse et du rétablissement, avec des décomptes et une fenêtre glissante, et ne classez jamais des personnes.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
