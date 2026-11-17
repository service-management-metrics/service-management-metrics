# Dette technique et erreurs connues

**Traitez les erreurs connues et la dette technique comme un seul registre visible de corrections différées, mesurez ce que coûte chaque élément pour chaque mois où il reste ouvert, et consacrez une part protégée de la capacité aux éléments qui portent les intérêts les plus élevés.**

## Vue d'ensemble et motivation

Toute équipe diffère certaines réparations. Un défaut est compris mais pas corrigé, un raccourci est pris pour tenir une date, un composant est laissé vieillir et un contournement est écrit dans un runbook. Chaque report est une décision sensée au moment où elle est prise. Les ennuis commencent quand les reports s'accumulent hors de vue, car le coût de leur portage apparaît plus tard sous forme d'incidents, de livraison lente et de personnes fatiguées, sans aucune ligne dans un rapport qui relie le coût à la cause.

Deux vocabulaires décrivent le même schéma. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL), une **erreur connue** est un problème dont la cause racine est comprise et pour lequel il existe un contournement, ou une correction définitive pas encore appliquée. Les erreurs connues sont consignées pour que le personnel du centre de services et de l'exploitation puisse résoudre vite les incidents répétés, et l'enregistrement reste ouvert jusqu'à ce qu'une correction soit publiée. Dans le travail logiciel agile, la **[dette technique](https://en.wikipedia.org/wiki/Technical_debt)** est la métaphore, forgée par [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) en 1992, pour les choix de conception et de mise en œuvre qui rendent le changement futur plus difficile. La métaphore porte deux idées qui comptent pour la mesure : le **principal**, qui est l'effort nécessaire pour supprimer la dette, et les **intérêts**, qui sont l'effort ou le risque supplémentaire que vous payez à chaque période tant que la dette demeure.

Les deux visions diffèrent par l'endroit où elles regardent. Les erreurs connues sont découvertes par l'exploitation : un incident ou une investigation de problème trouve une cause. La dette technique est généralement découverte par la livraison : un développeur remarque qu'un changement est plus difficile qu'il ne devrait l'être. Une erreur connue est souvent de la dette technique qui a déjà commencé à faire mal aux clients. La dette technique est souvent une erreur connue qui attend de se produire. Tenir des listes séparées, l'une dans l'outil ITSM et l'autre dans un backlog ou un wiki, cache le lien et produit deux argumentaires concurrents pour la même capacité rare.

Ce sujet donne un petit ensemble de mesures pour le registre combiné. Il évite un chiffre unique en argent pour la dette d'une organisation entière, qu'aucune méthode ne produit de façon fiable, et mesure ce que vous pouvez observer : éléments ouverts, temps attendu, incidents causés, travail ajouté et capacité consacrée à la réparation. Le registre alimente ensuite une conversation de priorisation entre produit et exploitation (voir le sujet 4.1, Métriques de gestion des problèmes, pour les enregistrements de problèmes et les corrections définitives, et le sujet 2.9, Travail opérationnel et travail non planifié, pour la charge d'interruptions que crée la dette).

Termes employés dans ce sujet :

- Un **contournement** est un moyen de rétablir le service ou d'éviter une défaillance sans supprimer la cause.
- Une **correction définitive** supprime la cause. L'[analyse des causes racines](https://en.wikipedia.org/wiki/Root_cause_analysis) est le travail qui la trouve.
- La **[refactorisation du code](https://en.wikipedia.org/wiki/Code_refactoring)** restructure le code sans changer son comportement externe. C'est la façon habituelle de rembourser la dette de conception.
- Une **[mauvaise odeur de code](https://en.wikipedia.org/wiki/Code_smell)** (code smell) est un signe de surface dans le code qui indique souvent un problème plus profond. C'est une invite à regarder, non un verdict.
- Le **[coût d'opportunité](https://en.wikipedia.org/wiki/Opportunity_cost)** est la valeur de la meilleure alternative à laquelle vous renoncez en choisissant un usage du temps plutôt qu'un autre. Chaque correction entre en concurrence avec une fonctionnalité, et la comparaison est la vraie décision.
- Le **[coût du retard](https://en.wikipedia.org/wiki/Cost_of_delay)** est la perte économique due au report d'un morceau de travail. C'est l'idée derrière le chiffrage des intérêts d'un élément de dette.
- Un **[bogue logiciel](https://en.wikipedia.org/wiki/Software_bug)** est un défaut du logiciel. Une erreur connue peut être un bogue, une faiblesse de configuration, une limite de conception ou un défaut de fournisseur.
- L'**[analyse statique de programmes](https://en.wikipedia.org/wiki/Static_program_analysis)** inspecte le code sans l'exécuter. Ses avertissements et ses scores de complexité sont des indicateurs d'une dette possible, et une preuve plus faible que l'historique des incidents.

Toute dette n'est pas une erreur. Le quadrant de Martin Fowler sépare la dette délibérée de l'inadvertante et l'imprudente de la prudente (voir la liste de références). Un raccourci prudent avec un plan de remboursement est un prêt sain, et la dette imprudente est celle qu'il faut prévenir. Les métriques ici ne jugent pas l'origine. Elles montrent le solde.

## Principes clés

- **Un registre, deux portes.** Les erreurs connues venues de l'exploitation et les éléments de dette venus de la livraison vont dans la même liste visible, avec un lien entre les enregistrements qui décrivent la même cause.
- **Mesurez les intérêts, et le principal aussi.** La taille d'une réparation compte moins que ce que l'élément ouvert vous coûte chaque mois en incidents, contournements et changements ralentis. Classez par intérêts par unité d'effort de réparation.
- **Faites du report une décision avec un responsable.** Chaque élément a un responsable, une raison énoncée d'attendre et une date de revue. Un élément que personne n'a choisi de reporter est de la négligence, et il est compté comme tel.
- **Protégez la capacité avant d'en avoir besoin.** Une part énoncée de la capacité de chaque équipe pour le travail de réparation, convenue d'avance, vaut mieux qu'un nettoyage héroïque après un mauvais trimestre.
- **Gardez le contournement honnête.** Un contournement est un service, avec son propre coût, son responsable et ses modes de défaillance. Mesurez la fréquence de son usage et la fréquence de son échec.
- **Décrivez des systèmes, jamais des personnes.** La dette appartient à un service ou à un composant. Ne l'attribuez jamais à un auteur, et ne classez jamais des ingénieurs selon la dette qu'ils ont touchée.
- **Estimez grossièrement.** Des tailles en « heures », « jours » et « semaines » suffisent. Une précision au-delà est inventée.

## Définitions des métriques

Les métriques ci-dessous décrivent le registre des réparations différées. Les horloges et les frontières sont énoncées dans chaque formule. Les mesures de temps sont rapportées comme des distributions (la médiane et le 85e ou le 95e percentile), non comme une moyenne unique.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Âge du backlog d'erreurs connues | Depuis combien de temps les erreurs connues ouvertes attendent une correction définitive | L'horloge démarre quand l'enregistrement de problème est marqué « erreur connue » ; s'arrête quand la correction définitive est publiée en production ; les éléments clos comme « risque accepté » sont rapportés à part et exclus. Rapporter le nombre, l'âge médian et l'âge au 85e percentile, par service | jours (distribution) | Enregistrements de problèmes et d'erreurs connues de l'outil ITSM, enregistrements de versions | Gestion des problèmes | Graphique d'éléments de travail vieillissants ; âge du backlog de bogues | Mensuelle |
| Couverture par contournement | Part des erreurs connues ouvertes qui ont un contournement documenté et testé qu'un agent peut suivre | erreurs connues ouvertes avec un contournement revu dans les 6 derniers mois / erreurs connues ouvertes ; les éléments clos et à risque accepté sont exclus | pourcentage | Base de connaissances reliée aux enregistrements d'erreurs connues | Gestion des problèmes ; gestion des connaissances | Runbook ou définition de terminé pour l'exploitabilité | Mensuelle |
| Incidents reliés à des erreurs connues ouvertes | Incidents dont la cause est une erreur connue ouverte, mesure directe des intérêts payés en perturbation du service | incidents de la période reliés à une erreur connue qui était ouverte au début de l'incident / tous les incidents de la période ; les incidents sans lien de cause sont rapportés comme non reliés, non comptés | pourcentage, plus nombre | Liens incident-problème de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Défauts échappés ; flux entrant de bogues en production | Mensuelle |
| Stock de dette | Nombre et taille estimée des éléments de dette technique enregistrés qui restent ouverts | éléments ouverts du registre de dette en fin de période ; la taille est la somme de tranches d'effort grossières (heures, jours, semaines) attribuées à l'enregistrement ; la dette non enregistrée ou soupçonnée est exclue | nombre, et tranches d'effort | Registre de dette dans le gestionnaire, étiqueté par service | Amélioration continue ; conception des services | Éléments du backlog produit étiquetés comme dette | Mensuelle |
| Intérêts de la dette | Travail supplémentaire causé par la dette et les erreurs connues ouvertes, en temps d'équipe | heures consignées dans la période sur des éléments de travail étiquetés avec une référence de dette ou d'erreur connue (contournements, étapes manuelles, reprise et effort supplémentaire sur les changements touchés) / total des heures de travail de l'équipe dans la période ; le travail de réparation lui-même est exclu et compté dans la part de capacité | pourcentage du temps de travail | Étiquettes de temps ou d'effort sur les éléments de travail, tenues au niveau de l'équipe | Amélioration continue ; gestion des problèmes | Part de travail non planifié et de reprise | Mensuelle |
| Part de capacité pour la dette | Part de la capacité de livraison dépensée à retirer la dette et les erreurs connues | capacité (nombre d'éléments ou effort) des éléments de travail terminés étiquetés comme réparation de dette ou correction d'erreur connue / tous les éléments de travail terminés dans la période ; les éléments sans étiquette sont exclus | pourcentage | Gestionnaire, éléments terminés par étiquette | Amélioration continue ; maîtrise des changements | Répartition de la capacité | Par période de planification, revue mensuelle |
| Variation nette de la dette | Si le registre grossit ou diminue | éléments de dette et d'erreurs connues enregistrés dans la période moins éléments résolus dans la période ; résolu signifie correction publiée, non fusionnée ; les éléments clos comme « ne sera pas corrigé » sont comptés sur une ligne distincte | nombre (signé) | Registre de dette et enregistrements d'erreurs connues | Amélioration continue | Variation du backlog par catégorie | Mensuelle |

Le risque accepté est une façon légitime de clore une erreur connue, parce que certains problèmes ne valent pas la peine d'être corrigés. Il est listé à part pour que la clôture d'éléments n'améliore pas discrètement le chiffre d'âge. La fenêtre de revue de 6 mois dans la couverture par contournement est un exemple. Une équipe fixe la fenêtre en fonction de la vitesse à laquelle ses systèmes changent et l'écrit dans le registre des métriques.

## Recommandations

### Construire le registre

**1. Fusionnez la liste d'erreurs connues et la liste de dette en un seul registre.** Tenez un registre avec un champ pour l'origine (exploitation ou livraison), le service, le responsable, la tranche de taille et le lien vers les enregistrements voisins. L'outil ITSM peut le contenir, ou le gestionnaire, pourvu que chaque système renvoie à l'autre. Sans vue unique, une erreur connue en exploitation entre en concurrence avec un élément de dette invisible en livraison pour les mêmes ingénieurs.

**2. Enregistrez la dette au moment où elle est créée ou découverte.** Un raccourci pris délibérément entre dans le registre dans la même demande de fusion ou le même enregistrement de changement, avec une raison énoncée et une date de revue. La dette trouvée plus tard est enregistrée par qui la trouve. Une règle de capture peu coûteuse, d'une ligne, marche mieux qu'un audit périodique, parce que les gens oublient ce qu'ils savaient le trimestre dernier.

### Mesurer les intérêts

**3. Reliez les incidents aux erreurs connues à chaque fois.** Le lien entre un incident et son erreur connue est la donnée la plus forte dont vous disposez sur les intérêts, et il coûte quelques secondes à la résolution. Faites du lien un champ obligatoire quand la cause est connue, et rapportez la part non reliée pour qu'une lacune ne ressemble pas à une bonne nouvelle (voir le sujet 3.3, Temps de réponse et de résolution des incidents). Quand la même cause apparaît dans plusieurs incidents, l'enregistrement de problème porte les preuves de la correction.

**4. Étiquetez le travail que la dette crée.** Laissez les ingénieurs marquer un élément de travail quand un contournement, une étape manuelle ou une reprise supplémentaire a été nécessaire à cause d'une faiblesse connue, et reliez-le à l'élément du registre. L'étiquette coûte peu et donne le chiffre des intérêts de la dette au niveau de l'équipe. Traitez le résultat comme une estimation avec une grande marge d'erreur, utile pour classer des éléments et pour surveiller une tendance, non pour la comptabilité.

**5. Chiffrez chaque élément en deux nombres : effort de réparation et intérêts mensuels.** Utilisez des tranches grossières, comme heures, jours, semaines, pour l'effort, et un coût mensuel approximatif tiré des incidents reliés, du travail étiqueté et de tout coût d'indisponibilité que votre organisation estime déjà. Diviser les intérêts par l'effort donne un simple temps de retour. N'inventez pas de précision : une tranche et une hypothèse énoncée suffisent pour séparer les gains évidents des éléments qui peuvent attendre.

### Protéger la capacité et décider

**6. Réservez une part permanente de capacité, et rapportez-la.** Convenez avec le responsable produit d'une part de chaque cycle pour le travail de réparation, fixée selon la tendance du registre et revue chaque trimestre. Rapportez la part de capacité pour la dette à côté des chiffres du travail planifié, pour que les dirigeants voient le travail de réparation comme un investissement délibéré. Une part réservée protège aussi l'équipe d'une dispute d'arbitrage à chaque conversation de planification, que le backlog de fonctionnalités gagne généralement.

**7. Classez la réparation face aux fonctionnalités dans une monnaie commune.** Mettez les erreurs connues et les éléments de dette dans la même conversation de priorisation que les fonctionnalités, exprimés en coût du retard et en temps de retour. Une correction qui supprime un incident hebdomadaire, et rend son effort en un trimestre, concourt sur ses mérites. Classer selon le bruit, l'ancienneté hiérarchique ou la date d'enregistrement donne de mauvais résultats (voir le sujet 4.4, Échecs de changement et reprises).

**8. Bouclez la boucle sur les décisions de report.** Pour chaque élément consciemment laissé ouvert, consignez qui a accepté le risque, la date de revue et le déclencheur qui le ferait monter, comme un second incident ou un changement planifié dans la zone. Revoyez la liste des risques acceptés selon sa propre cadence. Un élément reporté trois fois sans déclencheur est une décision de l'ignorer, et le registre doit le dire.

### Garder les chiffres honnêtes

**9. Publiez la correction avant de clore l'enregistrement.** Une erreur connue reste ouverte jusqu'à ce que la correction définitive soit en production et que la récurrence ait été vérifiée sur une fenêtre énoncée. Clore à « fusionné » ou « ticket terminé » flatte les chiffres d'âge et de variation nette et rouvre l'incident plus tard (voir le sujet 4.5, Métriques des versions et des déploiements). Suivez le taux de réouverture des erreurs connues comme un contrôle de qualité de la règle de clôture.

**10. Regardez la forme du registre, au-delà des totaux.** Un décompte plat peut cacher une longue queue d'éléments très anciens, une part croissante d'éléments dans un service, ou un registre maintenu petit en clôturant tout comme « ne sera pas corrigé ». Montrez la distribution des âges, la répartition par service et la liste des risques acceptés sur une même page. Revoyez-la avec les personnes qui détiennent les services, dans la même réunion que celle qui planifie le travail du trimestre suivant.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Âge du backlog d'erreurs connues | Clore de vieux enregistrements comme « risque accepté » ou « ne sera pas corrigé » ; scinder un vieil enregistrement en nouveaux jeunes ; réinitialiser l'horloge en réenregistrant | Décompte et âge des risques acceptés rapportés sur la même page ; revue des clôtures par quelqu'un d'extérieur à l'équipe responsable ; lignée des enregistrements conservée |
| Couverture par contournement | Écrire un contournement vague pour satisfaire le champ ; compter un contournement qu'aucun agent n'a jamais essayé | Taux d'usage et d'échec du contournement dans les incidents reliés ; test périodique d'un échantillon de contournements |
| Incidents reliés à des erreurs connues ouvertes | Laisser des incidents non reliés, ou les relier à une autre cause, pour que la part baisse | Part d'incidents non reliés rapportée à côté ; revue par échantillon d'incidents clos pour y chercher des liens manqués |
| Stock de dette | Ne pas enregistrer la dette, pour que le stock paraisse petit ; fusionner de nombreux éléments en un seul gros ; enregistrer des broutilles pour paraître diligent | Revue du registre face à un échantillon de revues de code et d'analyses post-incident ; contrôles de taille et de précision des éléments |
| Intérêts de la dette | Sous-étiqueter le travail pour éviter l'examen, ou sur-étiqueter pour obtenir un budget de réparation ; lire le chiffre comme une note sur une équipe | Audit par échantillon des éléments étiquetés et non étiquetés ; vue au niveau de l'équipe seulement, sans comparaison entre équipes ; intérêts lus avec les liens d'incidents |
| Part de capacité pour la dette | Étiqueter le travail ordinaire de fonctionnalité comme réparation ; choisir des éléments cosmétiques faciles pour remplir la part | Contrôle de résultat : âge des plus vieux éléments à intérêts élevés et liens d'incidents en baisse ; revue de ce qui a été corrigé face au classement |
| Variation nette de la dette | Résoudre de nombreux minuscules éléments pour compenser quelques gros ; clore des éléments comme « ne sera pas corrigé » pour faire baisser le décompte | Variation nette montrée par tranche de taille et par intérêts ; ligne « ne sera pas corrigé » rapportée ; contrôle de récurrence sur les éléments résolus |

Une lecture saine montre un registre visible, précis et qui évolue dans une direction que l'équipe a choisie. Les plus vieux éléments à intérêts élevés diminuent en nombre. Les incidents reliés à des erreurs connues ouvertes baissent, et la part non reliée est petite. La part de capacité pour la dette est stable au niveau convenu au lieu de grimper après une crise et de disparaître ensuite. La liste des risques acceptés est courte et revue. Quand un seul chiffre paraît excellent et que les autres ne bougent pas, soupçonnez la définition avant de vous réjouir.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Un registre fusionné d'erreurs connues et de dette | Priorisation unique ; l'exploitation et la livraison voient les mêmes coûts | Demande un outillage partagé ou des liens ; la responsabilité entre deux fonctions doit être réglée |
| Une part de capacité permanente pour la réparation | Prévisible ; protège le travail de réparation de la pression des fonctionnalités | Peut être dépensée sur des éléments de faible valeur si le classement est faible |
| Travail de réparation planifié seulement quand il gagne le débat de priorité | Flexible ; répond à la priorité du moment | Les fonctionnalités gagnent presque toujours ; le registre grossit jusqu'à une crise |
| Intérêts estimés à partir des incidents et du travail étiqueté | Relie la dette à un coût observable ; soutient le classement | Chiffres approximatifs ; dépend d'un étiquetage et de liens d'incidents honnêtes |
| Une campagne de réparation dédiée ou une « semaine de la dette » | Concentration et progrès visibles | Épisodique ; le registre se remplit entre les événements ; interrompt les engagements planifiés |

Choisissez l'arrangement le plus léger qui garde en mouvement les plus vieux éléments à intérêts élevés. Une petite équipe peut tenir le registre sur un tableau avec une étiquette et une revue mensuelle. Les organisations plus grandes ont besoin de liens entre outils et d'une méthode de classement convenue. Le but est une décision délibérée sur chaque élément, non une liste vide.

## Questions à discuter avec votre équipe

**1. Quels trois éléments ouverts nous coûtent le plus chaque mois, et comment le savons-nous ?**
Demandez aux gens de nommer des candidats de mémoire, puis vérifiez-les face aux liens d'incidents et au travail étiqueté. Comparez la liste retenue de mémoire à celle qui est mesurée, et notez les écarts. Convenez de la façon de recueillir désormais les preuves du classement.

**2. Quand nous reportons une correction, qui décide, et quand regardons-nous de nouveau ?**
Parcourez les cinq derniers reports et demandez qui a accepté le risque et quelle date de revue a été fixée. Là où personne n'a décidé, l'élément a été négligé, non reporté. Convenez d'une règle selon laquelle chaque report porte un responsable, une raison et un déclencheur. Discutez de la façon dont la liste des risques acceptés sera revue et par qui.

**3. Quelle capacité devrions-nous réserver à la réparation, et qu'est-ce qui changerait la part ?**
Montrez la tendance du registre et la part actuelle de capacité pour la dette. Demandez à quoi l'équipe serait prête à renoncer pour la relever, et quelles preuves la laisseraient baisser. Consignez le chiffre, la raison et la date de revoyure.

**4. Nos contournements sont-ils réels, et un nouvel agent pourrait-il les suivre ?**
Choisissez un contournement au hasard et demandez à quelqu'un qui ne l'a pas écrit de le suivre. Convenez d'une routine de test pour les contournements qui couvrent les erreurs à plus fort impact.

**5. Qu'est-ce qui compte comme corrigé, et combien de temps observons-nous avant de clore l'enregistrement ?**
Comparez les règles de clôture utilisées par l'exploitation, la livraison et le responsable produit. Discutez d'une fenêtre de récurrence adaptée au service, et de ce que l'équipe fera quand un élément clos se rouvre. Convenez d'une définition unique et écrivez-la dans le registre des métriques.

**6. Où nos chiffres de dette pourraient-ils nous raconter une histoire confortable ?**
Demandez les façons dont chaque chiffre pourrait être flatté : dette non enregistrée, éléments faciles corrigés d'abord, éléments clos comme ne sera pas corrigé. Regardez la part d'incidents non reliés et la liste des risques acceptés. Choisissez un garde-fou à ajouter ce trimestre et nommez qui le vérifiera.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison voient la dette en premier, généralement en changeant du code. Elles profitent d'un registre facile à compléter et d'une part de capacité protégée, pour que le travail de réparation ne dépende pas de la victoire dans une dispute à chaque conversation de planification. Elles doivent enregistrer les raccourcis au moment où elles les prennent, étiqueter le travail causé par des points faibles, et éviter d'utiliser la dette comme étiquette pour tout travail qu'elles préféreraient ne pas faire (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux, pour les effets de la dette sur le délai de livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation voient les intérêts : incidents répétés, étapes manuelles, contournements fragiles et charge d'astreinte qui s'ensuit. Elles détiennent les enregistrements d'erreurs connues et les documents de contournement, et elles ont les données d'incidents qui chiffrent les intérêts. Elles doivent relier chaque incident à son erreur connue, tester les contournements et apporter à la conversation de planification des preuves classées plutôt qu'une liste de plaintes (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants décident de la capacité que reçoit le travail de réparation, et les incitations qu'ils fixent décident si le registre reste honnête. Ils doivent demander la distribution des âges, les chiffres d'intérêts et la liste des risques acceptés, non un score de dette unique. Lire le registre comme une note sur une équipe punit l'enregistrement et pousse la dette dans la clandestinité. Un forum de gouvernance doit traiter l'acceptation d'un risque comme une décision avec un responsable et une date de revue.

### Clients et utilisateurs

Les clients ressentent la dette comme des défaillances répétées et des contournements qu'ils doivent suivre. Là où un contournement touche les utilisateurs, publiez-le avec une note claire sur la date à laquelle une correction est attendue, et honorez la date ou expliquez le changement. Moins d'incidents répétés et un état honnête sur les problèmes connus construisent plus de confiance qu'une promesse d'absence de défauts (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un service de planification des patients, soutenu par une équipe produit et un groupe d'exploitation. Tous les chiffres de cet exemple sont illustratifs.

Le groupe d'exploitation tient 23 erreurs connues dans l'outil ITSM. L'équipe produit tient une liste séparée de 41 éléments de dette sur son tableau. Une revue trimestrielle constate que 9 des erreurs connues et 7 des éléments de dette décrivent les mêmes cinq causes. La plus vieille erreur connue a 14 mois, l'âge médian des erreurs connues est de 5 mois et le 85e percentile de 11 mois. La couverture par contournement est de 61 %. Les incidents reliés à des erreurs connues ouvertes représentent 18 % des incidents du trimestre, et 22 % des incidents ne sont pas reliés : la vraie part pourrait donc être plus élevée.

L'équipe fusionne les deux listes en un registre de 55 éléments distincts. Pour les dix éléments avec le plus d'incidents reliés, elle estime un effort de réparation en tranches et des intérêts mensuels en heures. Un élément se détache : une tâche de synchronisation nocturne des rendez-vous qui échoue en silence environ une fois par quinzaine et demande un redémarrage manuel par le personnel d'astreinte. Sa réparation est estimée à deux semaines. Ses intérêts, d'après les incidents reliés et le travail étiqueté, sont d'environ 10 heures par mois, et chaque échec retarde les listes des consultations du matin. Le temps de retour est d'environ quatre mois, ce qui est plus rapide que n'importe quelle fonctionnalité alors au plan.

La décision, consignée dans le journal des décisions, est de réserver 15 % de la capacité de l'équipe produit au travail de réparation, classé par intérêts par unité d'effort, et de corriger d'abord la tâche de synchronisation. Le responsable de l'exploitation convient aussi de relier chaque incident à une erreur connue là où il en existe une et de tester les cinq contournements les plus utilisés.

Deux trimestres plus tard, l'âge médian des erreurs connues est de 4 mois et le 85e percentile de 9 mois. Les incidents reliés à des erreurs connues ouvertes tombent à 11 %. La part non reliée tombe à 8 %, ce qui donne à l'équipe plus de confiance dans le chiffre. Puis l'équipe repère un risque de détournement. La ligne de variation nette de la dette montre 12 éléments résolus dans un trimestre, mais 6 d'entre eux ont été clos comme ne sera pas corrigé, et deux d'entre eux étaient les plus vieux éléments à intérêts élevés. Un relecteur extérieur à l'équipe lit les enregistrements et constate que les clôtures avaient été faites pour améliorer le chiffre d'âge. Les éléments sont rouverts, le motif de clôture devient un champ obligatoire avec un approbateur nommé, et les éléments à risque accepté apparaissent désormais sur la même page que la distribution des âges.

## Agilité, IA, automatisation et analytique

### Agilité

Consacrez une part protégée de la capacité à la dette aux intérêts les plus élevés, et revoyez-la régulièrement avec les parties prenantes. La précaution est qu'un objectif de nombre d'éléments de dette mène à scinder et à réétiqueter les éléments.

### IA

Le code généré par l'IA peut ajouter de la dette rapidement, et l'IA peut aussi aider à la trouver et à la rembourser. Suivez séparément la variation nette de la dette et les incidents reliés à des erreurs connues ouvertes pour les zones assistées par l'IA, et étiquetez-les. La précaution est qu'un modèle qui suggère une correction peut laisser la cause racine en place.

### Automatisation

Automatisez la détection des erreurs connues périmées et de la dégradation des dépendances et des indicateurs, et mesurez l'automatisation sur les fausses alertes. La précaution est que des analyseurs automatiques créent du bruit qui enfouit les éléments qui comptent.

### Analytique

Estimez les intérêts avec les incidents et l'effort que chaque élément cause, avec des fourchettes. La décision éclairée est quoi corriger ensuite. La précaution est que les estimations du coût de la dette sont approximatives : évitez donc la fausse précision.

## Éclairage sectoriel

**Startup.** La dette est généralement délibérée et souvent juste, parce que la rapidité jusqu'à un premier client compte le plus. Gardez une liste unique sur le tableau avec une étiquette, enregistrez les raccourcis quand vous les prenez et fixez une date de revue pour que « plus tard » ait un sens. Relevez la part de réparation quand les intérêts commencent à se voir dans les incidents.

**Petite entreprise.** Un administrateur unique ou une petite équipe porte souvent à la fois l'exploitation et la livraison : les deux listes n'en font donc naturellement qu'une. Consignez les erreurs connues et leurs contournements dans un document partagé, et notez de quel fournisseur ou contrat chaque élément dépend. Un défaut détenu par un fournisseur est une erreur connue que vous ne pouvez pas corriger vous-même : suivez donc la date engagée par le fournisseur et votre contournement.

**Grande entreprise.** De nombreuses équipes, de nombreux services et de nombreux fournisseurs créent plusieurs listes concurrentes et plusieurs définitions de « terminé ». Réglez une structure de registre, une règle de clôture et une méthode de classement, et laissez les équipes ajouter des champs locaux avec une correspondance énoncée.

**Gouvernement et secteur public.** Les systèmes anciens, les longs cycles de passation de marchés et les budgets fixes rendent certaines dettes coûteuses à rembourser et certaines décisions de remplacement lentes. Consignez les contraintes légales, de conservation et d'audit qui bloquent une correction, puisqu'elles expliquent le report. Montrez le registre comme partie du rapport de risques, et planifiez la réparation dans le cycle budgétaire au lieu de la traiter comme un coût non planifié (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est d'arrêter de payer des intérêts que vous ne voyez pas. Les incidents répétés, les contournements manuels et les changements lents et risqués sont les coûts visibles, et ils sont normalement consignés comme des problèmes séparés dans des budgets séparés. Un registre fusionné les transforme en une comparaison entre le coût de la réparation et le coût de portage de la dette.

Le coût de la pratique a trois parts. La première est la mise en place : un registre, des liens entre l'outil ITSM et le gestionnaire, et une convention d'étiquetage. La deuxième est l'effort courant : quelques secondes par incident pour le relier, quelques secondes par élément de travail pour l'étiqueter, et une revue mensuelle d'une heure ou deux par service. La troisième est la capacité de réparation elle-même, qui est le plus gros poste et un investissement délibéré, non un surcoût.

Le rendement vient de schémas que vous pouvez mesurer vous-même. Comparez les incidents reliés à une erreur connue avant et après sa correction, les heures de travail étiqueté sur les changements touchés avant et après, et les interruptions d'astreinte évitées. Ajoutez le coût de l'indisponibilité si votre organisation l'estime déjà. N'empruntez pas de chiffre sectoriel pour le coût de la dette : la littérature de recherche sur le sujet est réelle, mais les chiffres dépendent du contexte, et vos propres données d'incidents et de temps sont une meilleure preuve. La recherche *Accelerate* relie la performance de livraison à la performance organisationnelle (voir le sujet 2.8, Métriques DORA), bien qu'elle ne donne aucun prix pour votre registre. Pour le traitement plus large du coût et du rendement, voir le sujet 7.7, Retour sur investissement et dossier d'affaires.

## Anti-modèles et pièges

- **Deux listes qui ne se rencontrent jamais.** L'exploitation et la livraison plaident pour la même capacité avec des preuves différentes. Fusionnez les listes ou reliez chaque cause partagée.
- **Un score de dette unique pour l'organisation.** Il cache où est le coût et invite au classement des équipes. Rapportez le registre par service, avec âge, intérêts et responsabilité.
- **La grande réécriture comme seule réparation.** Les grands nettoyages calent, et le registre se remplit pendant qu'ils durent. Retirez les éléments par petites étapes, classées par temps de retour.
- **Zéro dette comme but.** Le poursuivre récompense les clôtures triviales et décourage l'enregistrement honnête. Visez un registre dont les plus vieux éléments à intérêts élevés avancent.
- **Clore les erreurs connues à « fusionné ».** La correction n'a pas atteint les utilisateurs, et l'incident revient. Closez à la publication, puis surveillez la récurrence sur une fenêtre énoncée.
- **Cacher le report dans « ne sera pas corrigé ».** Le chiffre d'âge s'améliore et le risque reste. Comptez séparément le risque accepté, avec un responsable et une date de revue.
- **Traiter l'analyse statique comme la vérité.** Les scores reflètent la forme du code, non le coût. Servez-vous-en pour trouver des candidats, puis confirmez avec les liens d'incidents et l'historique des changements.
- **Attribuer la dette aux auteurs.** Cela apprend aux gens à cacher les raccourcis et à éviter les composants difficiles. Gardez chaque mesure au niveau du service et de l'équipe (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Registre et définitions | Erreurs connues et dette vivent dans les têtes ou dans des notes éparses | L'exploitation et la livraison tiennent chacune une liste, avec des règles différentes | Un registre avec une définition écrite, un responsable et une règle de clôture pour chaque élément | Âge, risque accepté et variation nette revus face aux définitions écrites | Définitions révisées avec les fournisseurs et les clients quand elles cessent d'éclairer les décisions |
| Mesure des intérêts | Aucun lien entre incidents et causes | Certains incidents reliés à des erreurs connues à la main | Liens d'incidents obligatoires là où la cause est connue ; travail étiqueté au niveau de l'équipe | Intérêts et temps de retour estimés pour les principaux éléments et suivis dans le temps | Intérêts reliés aux résultats du service et partagés entre équipes et fournisseurs |
| Capacité et priorisation | La réparation a lieu en cas de crise | Temps informel mis de côté par certaines équipes | Une part de capacité convenue et une méthode de classement commune | Part ajustée selon la tendance du registre et financée comme travail planifié | Capacité de réparation coordonnée entre plateformes partagées et fournisseurs |
| Contournements et clôture | Contournements non documentés ou détenus par une seule personne | Documentés pour certaines erreurs, non testés | Contournements dans la base de connaissances, avec une règle de clôture à la publication | Usage, échec et récurrence après clôture des contournements mesurés | Contournements retirés automatiquement à mesure que les corrections sortent, avec retour des utilisateurs |

## Liste de vérification

- [ ] Les erreurs connues et les éléments de dette sont dans un seul registre, ou reliés élément par élément.
- [ ] Chaque élément a un responsable, une tranche de taille, un service et une date de revue.
- [ ] Les raccourcis délibérés sont enregistrés au moment où ils sont pris, avec une raison.
- [ ] Les incidents sont reliés aux erreurs connues là où la cause est connue, et la part non reliée est rapportée.
- [ ] Le travail causé par des points faibles est étiqueté au niveau de l'équipe, et l'étiquetage est audité par échantillon.
- [ ] Chacun des principaux éléments a une tranche d'effort de réparation et une estimation d'intérêts mensuels.
- [ ] Une part de capacité pour le travail de réparation est convenue, rapportée et revue chaque trimestre.
- [ ] Les erreurs connues se closent à la publication de la correction, avec une fenêtre de récurrence énoncée.
- [ ] Les clôtures à risque accepté sont listées séparément, avec un approbateur et une date de revue.
- [ ] Les contournements des erreurs à plus fort impact sont testés selon un calendrier.
- [ ] La distribution des âges et la répartition par service sont montrées, avec les totaux.
- [ ] Aucune mesure de dette n'est utilisée pour comparer ou classer des individus.

## Prompts d'IA

**Fusionnez deux listes en un seul registre.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Estimez les tranches d'effort et les intérêts mensuels des principaux éléments.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Passez en revue la clôture et les risques de détournement.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Préparez une conversation de priorisation avec le responsable produit.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique voisine, comme la récurrence ou l'échec de changement, et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique modifiée nomme ses horloges, son vecteur de détournement et son garde-fou.

## Idées clés

- Les erreurs connues et la dette technique sont deux vues d'un même registre de réparations différées : gardez-les donc ensemble ou reliées.
- Mesurez les intérêts que chaque élément coûte chaque mois, en incidents, contournements et changements ralentis, et classez la réparation par temps de retour.
- Faites de chaque report une décision avec un responsable, une raison et une date de revue, et rapportez séparément le risque accepté.
- Réservez une part de capacité convenue pour le travail de réparation, et rapportez-la à côté du travail planifié.
- Clôturez une erreur connue à la publication de la correction, puis surveillez la récurrence avant de vous fier au résultat.
- Gardez chaque mesure au niveau du service et de l'équipe, et utilisez des garde-fous pour qu'un meilleur chiffre signifie un meilleur système.

## Références et lectures complémentaires

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
