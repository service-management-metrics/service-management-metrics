# Volume et priorité des incidents

**Comptez les incidents au regard de l'usage qui les a produits, lisez la priorité comme un mélange plutôt que comme un score, et surveillez les répétitions, car la forme de la demande d'incidents vous dit où investir bien avant qu'un seul temps de résolution ne le fasse.**

## Vue d'ensemble et motivation

Un incident, en termes [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, est une interruption non planifiée d'un service ou une réduction de sa qualité. La [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management) est la pratique qui rétablit le fonctionnement normal du service aussi vite que possible et limite le préjudice pour l'activité. Chaque incident est aussi un signal : quelque chose dans le service, ses changements, ses utilisateurs ou sa supervision n'a pas fonctionné comme prévu. Le nombre et le caractère des incidents sont donc l'une des mesures de demande les plus informatives dont dispose une équipe d'exploitation.

Le volume seul est un mauvais guide. Une hausse des incidents peut signifier que le service s'est dégradé, ou que davantage de gens l'utilisent, ou que la supervision s'est améliorée et voit maintenant des défaillances qui passaient autrefois inaperçues. Une baisse peut signifier que le travail de fiabilité a porté ses fruits, ou que les utilisateurs ont cessé de se donner la peine de signaler. Ce sujet porte sur la lecture du volume avec assez de contexte pour distinguer ces histoires : normaliser par rapport à l'usage, ventiler par catégorie et par service, et surveiller le mélange des priorités et le taux de répétitions.

La priorité est la seconde moitié du sujet. La pratique ITIL dérive couramment la priorité de deux entrées : l'impact (quelle part de l'activité est touchée) et l'urgence (la rapidité avec laquelle l'activité a besoin de la correction). Le couple est converti en un niveau de priorité qui fixe la réponse attendue. Les équipes agiles ont une contrepartie proche dans leur façon de trier un backlog : des étiquettes de gravité et d'urgence sur les défauts, et une « classe de service » sur un tableau de flux qui décide de ce qui double la file. Les mots diffèrent ; la question est la même : qu'est-ce qui doit être traité en premier, et pourquoi.

La vision ITIL traite les incidents comme des enregistrements détenus par un centre de services et des groupes de résolution, avec des catégories, des priorités et des cibles de niveau de service. La vision agile traite le travail non planifié comme une interruption du flux qui entre en concurrence avec le travail planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Les deux visions profitent des mêmes mesures, si elles décrivent le système et non les personnes qui s'y trouvent. Le [centre de services](https://en.wikipedia.org/wiki/Help_desk_software) est l'endroit où commencent la plupart des enregistrements, et ses propres métriques sont traitées à part (voir le sujet 3.1, Métriques du centre de services). La rapidité de réponse et de résolution des incidents est traitée dans le sujet 3.3, Temps de réponse et de résolution des incidents. Les incidents majeurs ont leurs propres mesures (voir le sujet 3.4, Métriques des incidents majeurs).

Plusieurs termes reviennent ci-dessous. Un **percentile** est la valeur en dessous de laquelle tombe une part donnée des observations : le 85e percentile est donc la valeur que 85 % des observations ne dépassent pas. Un **accord de niveau de service (SLA)** est un engagement documenté entre un fournisseur et un client. Un **élément de configuration (CI)** est un composant qui doit être géré pour fournir un service. Un **processus de Poisson** décrit des événements qui arrivent indépendamment à un rythme moyen donné, ce qui est un premier modèle utile pour les arrivées d'incidents (voir le sujet 1.6, Culture statistique pour les métriques de service).

L'avertissement du sujet 1.2 (Loi de Goodhart et psychologie des métriques) s'applique ici plus qu'ailleurs. Les décomptes et les priorités d'incidents sont saisis par des personnes, souvent sous pression, et le chiffre attaché à un enregistrement peut être changé en changeant la façon dont l'enregistrement est écrit. Chaque métrique ci-dessous a un vecteur de détournement, et les garde-fous font partie de la définition.

## Principes clés

- **Normalisez avant de comparer.** Un décompte signifie peu sans l'usage, la base d'utilisateurs ou le volume de transactions d'où il vient. Comparez des taux entre périodes et entre services, et montrez le décompte brut à côté.
- **Lisez le mélange, pas un chiffre unique.** La distribution des priorités, la distribution des catégories et la part de répétitions en disent plus ensemble que n'importe quel total.
- **La priorité est une règle, pas une humeur.** Dérivez-la de l'impact et de l'urgence à l'aide d'une matrice écrite, et mesurez la fréquence à laquelle elle est changée après coup.
- **Séparez les incidents des demandes.** Une demande pour quelque chose de normal n'est pas une défaillance. Compter les deux ensemble gonfle le volume d'incidents et cache ce à quoi le centre de services consacre son temps (voir le sujet 3.5, Métriques de traitement des demandes de service).
- **Les répétitions sont le signal le plus précieux.** Un incident qui revient pointe un problème qui n'est pas encore résolu (voir le sujet 4.1, Métriques de gestion des problèmes).
- **Mesurez des services et des équipes, jamais des agents.** Les décomptes par personne invitent au classement, et le classement corrompt les données (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Attendez-vous à ce que le volume bouge pour des raisons étrangères à la qualité.** Les versions, les saisons, les campagnes et les changements de canaux de signalement déplacent tous les décomptes. Annotez le graphique.

## Définitions des métriques

Le tableau liste les métriques de ce sujet. Les horloges et les frontières sont énoncées dans la colonne des formules. « Clos » et « ouvert » renvoient aux horodatages de l'enregistrement d'incident ; l'heure d'ouverture est celle où l'enregistrement est créé ou celle où le système de supervision le crée, et l'heure de clôture est celle où l'incident est confirmé résolu et clos.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume d'incidents par service | Nombre d'incidents ouverts pour un service dans une période | incidents dont l'heure d'ouverture tombe dans la période, attribués au service touché ; les demandes de service, les doublons fusionnés dans un enregistrement parent et les enregistrements annulés comme créés par erreur sont exclus | nombre | Enregistrements d'incidents de l'outil ITSM | Gestion des incidents | Défauts de production ou éléments de travail non planifiés par équipe | Hebdomadaire, revue mensuelle |
| Taux d'incidents normalisé | Incidents rapportés à l'usage du service | incidents ouverts dans la période / mesure d'usage pour la même période et le même périmètre (utilisateurs actifs, sessions ou transactions, choisis et consignés par service) x 1 000 ; la mesure d'usage doit provenir d'une source autre que l'outil d'incidents | incidents pour 1 000 unités d'usage | Outil ITSM plus données d'usage issues de l'analytique ou de la supervision | Gestion des incidents ; gestion des niveaux de service | Densité de défauts par version ou par utilisateur | Mensuelle |
| Répartition des priorités | Part des incidents ouverts à chaque niveau de priorité | incidents à la priorité consignée à l'ouverture / tous les incidents ouverts dans la période, montrée pour chaque niveau ; les incidents reclassés sont comptés à la priorité d'ouverture et montrés de nouveau à la priorité de clôture | pourcentage par niveau | Outil ITSM, y compris l'historique des changements de priorité | Gestion des incidents | Distribution de la gravité des défauts ; répartition des classes de service | Mensuelle |
| Taux de reclassement de priorité | Part des incidents dont la priorité a changé entre l'ouverture et la clôture | incidents clos dans la période dont la priorité de clôture diffère de la priorité d'ouverture / incidents clos dans la période | pourcentage | Piste d'audit de l'outil ITSM | Gestion des incidents | Taux de nouveau triage du backlog des défauts | Mensuelle |
| Concentration des catégories | Part du volume d'incidents détenue par les plus grandes catégories | incidents des cinq premières catégories par nombre / tous les incidents catégorisés dans la période ; les incidents non catégorisés sont rapportés à part comme leur propre part | pourcentage | Champs de catégorie et de service de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Grappes de défauts par composant ou par épopée | Mensuelle |
| Taux d'incidents répétés | Part des incidents qui reviennent pour le même service, le même élément de configuration et la même catégorie dans une fenêtre énoncée | incidents de la période ayant un incident clos antérieur pour le même service, le même CI et la même catégorie dans la fenêtre précédente (par exemple 30 jours, fixée une fois et consignée) / incidents ouverts dans la période ; un enregistrement rouvert compte comme une réouverture, non comme une répétition | pourcentage | Outil ITSM et liens de la CMDB | Gestion des incidents ; gestion des problèmes | Taux de régression ou de défauts échappés | Mensuelle |
| Taux de réouverture | Part des incidents clos qui ont été rouverts | incidents clos dans la période qui ont ensuite été rouverts dans une fenêtre énoncée (par exemple 7 jours) / incidents clos dans la période | pourcentage | Historique des statuts de l'outil ITSM | Gestion des incidents | Défauts rouverts ; reprise | Mensuelle |
| Part détectée par la supervision | Part des incidents d'abord signalés par la supervision avant qu'un utilisateur ne les signale | incidents dont le premier événement est une alerte automatisée / tous les incidents ouverts dans la période ; les incidents ouverts par une personne à partir d'une alerte sont comptés à l'heure de l'alerte | pourcentage | Outil ITSM, intégration de supervision | Supervision et gestion des événements ; gestion des incidents | Défauts détectés par alerte ou signalés par les clients | Mensuelle |

Deux remarques sur les définitions. La première est que la « priorité » dans ce tableau est la priorité que porte l'enregistrement, qui doit venir de la matrice d'impact et d'urgence et non de l'ordre dans lequel les gens veulent que le travail soit fait. La seconde est que le volume rapporté pour une période est un décompte d'ouvertures, non un décompte d'incidents ouverts un jour donné. Le nombre d'ouverts à un instant donné est une mesure de backlog et relève du vieillissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

## Recommandations

### Compter avec soin

**1. Écrivez ce qu'est un incident et ce qu'il n'est pas.** Beaucoup d'outils tiennent incidents, demandes, alertes et problèmes dans une seule table. Décidez quels types d'enregistrements comptent, documentez le filtre et appliquez-le chaque fois. Un changement du filtre change la tendance : consignez donc les changements avec la date et le motif (voir le sujet 1.5, Sources de données et instrumentation).

**2. Dédoublonnez avant de rapporter.** Quand une défaillance produit cinquante tickets, l'incident parent est l'événement et les enfants sont une mesure de sa portée. Rapportez les deux chiffres : les incidents parents pour le nombre de défaillances survenues, et les enregistrements liés pour le nombre de personnes qui les ont ressenties. Mélanger les deux fait ressembler une grosse panne à un mois de travail courant.

**3. Attribuez les incidents à des services autant qu'à des équipes.** Le service est ce que l'activité achète et comprend. Utilisez le catalogue des services (le « service catalogue » d'ITIL) pour définir la liste, et revoyez la correspondance avec les CI quand les services changent. Un incident sans service est un problème de qualité des données à corriger, et la part de ces enregistrements mérite d'être rapportée.

### Normaliser et interpréter le volume

**4. Normalisez par rapport à une mesure d'usage issue d'une autre source.** Divisez par les utilisateurs actifs, les sessions ou les transactions, tirés de l'analytique ou de la supervision et non de l'outil d'incidents. Un service qui a doublé ses utilisateurs et ses incidents ne s'est pas dégradé ; un service dont les incidents ont doublé à usage plat, si. Montrez le décompte brut à côté du taux pour que personne ne croie que le dénominateur cache quelque chose.

**5. Utilisez une carte de contrôle, pas une flèche de tendance.** Les décomptes d'incidents varient d'une semaine à l'autre même quand rien n'a changé. Une [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart) montre la plage habituelle de variation, de sorte que l'équipe réagit à un signal et laisse le bruit tranquille. Des décomptes hebdomadaires qui évoluent dans les limites ne sont pas une nouvelle ; une série soutenue d'un seul côté de la moyenne en est une. Corrigez de la [saisonnalité](https://en.wikipedia.org/wiki/Seasonality), comme les fins de trimestre, les congés et les cycles de versions, en comparant des périodes semblables.

**6. Annotez le graphique avec des événements.** Marquez les versions, les migrations, les campagnes, les pannes de dépendances et les changements du canal de signalement. Un nouveau formulaire de libre-service ou un bouton « signaler un problème » plus visible peut faire monter le volume alors que le service reste le même. La plupart des disputes sur le volume se terminent vite quand le graphique montre ce qui s'est passé cette semaine-là.

### Gérer la priorité par des règles

**7. Dérivez la priorité de l'impact et de l'urgence avec une matrice publiée.** Définissez l'impact en termes d'utilisateurs et de fonctions métier touchés, et l'urgence en termes de rapidité avec laquelle le préjudice grandit. Publiez la matrice sur la page où les agents choisissent les valeurs, avec deux ou trois exemples travaillés par case. Évitez les champs de priorité à choix libre ; ils tournent à la négociation, et le nombre d'incidents de « priorité 1 » devient une mesure de persuasion.

**8. Rapportez ensemble le mélange et le taux de reclassement.** Un mélange sain a un petit nombre d'incidents de la plus haute priorité et une large base d'incidents moins prioritaires. Si le niveau le plus haut grossit, demandez si le préjudice a grandi ou si les clients ont appris que « critique » attire l'attention. Le taux de reclassement montre à quel point la matrice convient : des changements fréquents à la clôture signifient que la règle est floue ou que la première évaluation est bâclée. Revoyez chaque mois un échantillon d'enregistrements reclassés dans le groupe qui détient la matrice.

**9. Gardez alignées la priorité et la classe de service agile.** Là où les équipes de livraison reçoivent du travail issu d'incidents, utilisez les mêmes mots et la même matrice, ou publiez une correspondance claire. Une équipe qui appelle un défaut « élevé » pendant que l'exploitation appelle le même défaut « moyen » perdra du temps en traduction. Réservez une marge explicite pour le travail accéléré afin que l'interruption soit visible dans les mesures de flux (voir le sujet 2.1, Mesures de flux).

### Chercher les répétitions et les schémas

**10. Suivez les répétitions et les réouvertures comme des signaux distincts.** Une réouverture signifie que la première correction n'a pas tenu ; une répétition signifie que le même genre de défaillance est revenu après une correction en bonne et due forme. La première pointe la qualité de la résolution et la seconde une cause non résolue. Reliez les grappes qui se répètent à des enregistrements de problèmes, et cessez de compter un incident comme corrigé quand il risque de revenir (voir le sujet 4.1, Métriques de gestion des problèmes).

**11. Servez-vous du [principe de Pareto](https://en.wikipedia.org/wiki/Pareto_principle) pour choisir où regarder.** Triez les catégories et les services par nombre d'incidents et voyez combien peu rendent compte de l'essentiel du volume. Investiguez les premiers avant de construire de nouveaux rapports pour le reste. La forme est une invite à l'[analyse des causes racines](https://en.wikipedia.org/wiki/Root_cause_analysis), non une conclusion, car une catégorie à fort nombre peut simplement être celle qui est facile à catégoriser.

**12. Renvoyez les constats aux équipes de livraison et au centre de services.** Partagez les vues par catégorie et par répétition avec les équipes qui construisent et modifient les services, dans une conversation régulière plutôt qu'un rapport. Associez chaque grappe récurrente à un responsable, une prochaine étape et une date, et placez le travail sur le même backlog que les autres priorités (voir le sujet 2.6, Métriques du backlog et de son affinage). Le volume baisse quand les causes sont supprimées, et cela demande une capacité planifiée.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Volume d'incidents par service | Consigner des incidents comme des demandes, fusionner des tickets sans rapport, décourager les utilisateurs de signaler, ou clore des doublons comme « aucune défaillance trouvée » | Volume de contacts signalés par les utilisateurs et volume de demandes à côté du volume d'incidents ; satisfaction et abandon du centre de services ; échantillon de demandes qui se lisent comme des défaillances |
| Taux d'incidents normalisé | Choisir le dénominateur qui donne le meilleur chiffre, ou changer la définition de l'usage entre les périodes | Mesure d'usage fixe par service, consignée dans le registre ; décomptes bruts montrés à côté du taux |
| Répartition des priorités | Abaisser les priorités pour paraître calme ou les relever pour attirer l'attention ; attribuer une basse priorité pour éviter une cible de réponse | Taux de reclassement de priorité ; revue mensuelle d'un échantillon face à la matrice d'impact et d'urgence ; impact signalé par les clients |
| Taux de reclassement de priorité | Ne pas changer la priorité quand elle devrait changer, pour que le taux paraisse stable ; ne la changer qu'à la clôture pour l'ajuster à la cible | Échantillon d'enregistrements où l'impact a changé pendant l'incident ; revues des chronologies d'incidents |
| Concentration des catégories | Utiliser une catégorie fourre-tout, ou scinder une grande catégorie en plusieurs pour cacher la concentration | Part des enregistrements non catégorisés et « autre » ; revue périodique de la liste de catégories ; vérification des catégories face aux notes de résolution |
| Taux d'incidents répétés | Ouvrir un nouvel incident avec une formulation ou un CI différents pour éviter le lien ; clore tôt pour éviter une réouverture | Revue des enregistrements quasi doublons par texte et par service ; taux de réouverture ; taux de liens vers des enregistrements de problèmes |
| Taux de réouverture | Demander aux utilisateurs d'ouvrir un nouveau ticket au lieu de rouvrir ; clore les tickets tard pour éviter les réouvertures | Décompte des nouveaux tickets qui renvoient à un ticket récemment clos ; confirmation de la résolution par le client ; distribution du temps jusqu'à la clôture |
| Part détectée par la supervision | Créer des alertes bruyantes qui ouvrent des incidents automatiquement, ou laisser les gens réétiqueter des signalements d'utilisateurs comme des alertes | Mesures de qualité des alertes comme la part d'alertes exploitables (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) ; audit de la source des incidents |

Une lecture saine est terne et explicable. Les taux normalisés sont stables ou baissent pour les services stables et montent quand l'usage ou le changement montent pour une raison que le graphique montre. La répartition des priorités est stable, le reclassement est faible et un petit ensemble de catégories reçoit une attention délibérée. Les répétitions et les réouvertures baissent après le travail planifié sur les problèmes, et le mouvement de toute métrique a une explication que quelqu'un peut donner sans défendre le chiffre.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Décomptes bruts d'incidents | Simples, faciles à expliquer, toujours disponibles | Mêlent usage, qualité et comportement de signalement en un seul chiffre |
| Taux rapportés à l'usage | Permettent une comparaison équitable entre périodes et entre services | Demandent une source d'usage fiable ; les dénominateurs peuvent être discutés |
| Matrice fixe d'impact et d'urgence | Priorité cohérente entre les équipes ; auditable | Peut sembler rigide ; les cas limites demandent du jugement et une voie de dérogation |
| Priorité à choix libre | Rapide et flexible pour des agents expérimentés | Incohérente, ouverte aux pressions, difficile à comparer dans le temps |
| Arbre de catégories détaillé | Montre d'où vient la demande | Difficile à utiliser sous pression ; les gens choisissent la première correspondance ou « autre » |
| Courte liste de catégories avec étiquettes | Rapide à appliquer et cohérente | Moins de détail ; peut cacher des schémas qui demandent une analyse de texte |
| Taux de répétitions par CI et catégorie | Pointe les causes non résolues | Dépend de bonnes données de CI ; fausses liaisons et omissions se produisent |

Acceptez qu'aucune mesure unique n'est la bonne. Utilisez les décomptes bruts pour la planification de la capacité, les taux pour la santé, la répartition des priorités pour le risque et les répétitions pour l'amélioration, et montrez chacun pour ce qu'il est. Gardez la liste de catégories assez courte pour que les gens s'en servent, et n'améliorez l'arbre que lorsqu'une décision a besoin d'un détail plus fin.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui compte ici comme un incident, et tout le monde applique-t-il la règle de la même façon ?**
Prenez dix enregistrements récents et demandez à chacun de les étiqueter comme incident, demande ou autre chose. Comparez les réponses et discutez des désaccords. L'animateur doit chercher des habitudes comme traiter chaque ticket d'une personne senior comme un incident, puis convenir d'une règle écrite avec des exemples. Consignez la date pour que les tendances ultérieures soient lues correctement.

**2. Quand le volume d'incidents a monté le trimestre dernier, que savions-nous alors de l'usage et du changement ?**
Mettez le graphique à côté d'une chronologie des versions, des campagnes et des chiffres d'usage. Demandez quelle hausse était expliquée et laquelle ne l'était pas. La discussion montre généralement combien rarement le dénominateur est sur la page. Convenez de la mesure d'usage que chaque service portera désormais.

**3. Comment la priorité est-elle décidée, et quand nous a-t-elle surpris pour la dernière fois ?**
Parcourez la matrice d'impact et d'urgence avec un exemple récent de chaque niveau de priorité. Demandez où les agents devinent et où les clients ou les responsables poussent. Comparez la priorité d'ouverture et la priorité de clôture de quelques enregistrements. Décidez d'un changement de la matrice ou de ses exemples qui réduit la dispute.

**4. Quelles trois catégories prennent l'essentiel de notre volume d'incidents, et qui travaille à en supprimer la cause ?**
Listez les principales catégories et, pour chacune, le responsable de la cause sous-jacente. Si la réponse est « personne », c'est un constat. Demandez si la catégorie est une vraie grappe ou une habitude d'étiquetage. Choisissez une grappe à investiguer ce trimestre avec l'équipe de livraison.

**5. Comment distinguons-nous une répétition d'une réouverture, et que faisons-nous de chacune ?**
Montrez à l'équipe deux ou trois paires d'enregistrements et demandez lesquelles sont des répétitions. Discutez de ce qu'une réouverture dit de la qualité de la première correction, et de ce qu'une répétition dit de la cause. L'animateur doit orienter le groupe vers le fait de relier les grappes qui se répètent à des enregistrements de problèmes au lieu de les clore une à une. Convenez de qui les revoit et à quelle fréquence.

**6. Qu'est-ce que nous serions tentés de changer si notre nombre d'incidents était revu chaque semaine par la direction ?**
Demandez au groupe d'imaginer le chiffre affiché sur un mur. Quelles habitudes changeraient : la façon de consigner, de fusionner les tickets, de fixer les priorités ? Nommez la pression ouvertement et sans blâme. Convenez du garde-fou qui montrerait le glissement, et de qui le regarde.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison reçoivent la production de ce sujet sous forme de demande. Les vues par catégorie et par répétition montrent quelles parties du produit causent le plus d'ennuis, et la répartition des priorités montre combien de travail d'interruption prévoir. Les équipes doivent traiter le travail issu d'incidents comme une part de leur capacité, le garder visible dans les mesures de flux et utiliser les grappes de répétitions pour justifier le travail de fiabilité dans le backlog (voir le sujet 2.9, Travail opérationnel et travail non planifié). Compter les incidents par version est une tendance utile, mais cela ne doit jamais devenir une mesure de blâme pour des développeurs individuels.

### Équipes de service et d'exploitation

Les équipes de service et d'exploitation créent les enregistrements et ressentent la pression autour de la priorité. Elles profitent d'une matrice claire, d'une courte liste de catégories et de moyens rapides de lier les doublons. Elles doivent vérifier les données dans leurs propres outils, comme la part d'enregistrements non catégorisés et le taux de reclassement, avant que d'autres ne le fassent. Les équipes d'exploitation sont bien placées pour mener la revue mensuelle par échantillon et alimenter la gestion des problèmes avec les grappes qui se répètent.

### Direction et gouvernance

Les dirigeants veulent savoir si le service s'améliore et où investir. Ils doivent demander des taux normalisés, la répartition des priorités et la vue des répétitions, avec des annotations, et résister à un chiffre de volume unique. Les objectifs de « moins d'incidents » invitent à la suppression : fixez donc plutôt des attentes sur des résultats comme l'impact sur les clients et la réduction des répétitions. La gouvernance doit détenir la matrice de priorité et approuver ses changements, en notant l'effet sur les courbes de tendance.

### Clients et utilisateurs

Les clients éprouvent les incidents comme du travail interrompu, non comme des catégories. Ils ont besoin d'un moyen facile de signaler une défaillance, d'une priorité équitable fondée sur leur impact et de mises à jour honnêtes. Si les signalements sont découragés ou si les priorités semblent arbitraires, le volume baissera et la confiance avec lui. Partagez les principaux constats en termes que les utilisateurs reconnaissent, comme les services améliorés et les problèmes supprimés (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional soutient un système de dossiers patients, un système de planification et un outil de messagerie du personnel. Tous les chiffres de cet exemple sont illustratifs.

Le rapport mensuel montre 640 incidents au dernier mois du trimestre, contre 520 le mois précédent. La direction demande un plan de redressement. Le responsable du service de planification, dont le nombre a le plus augmenté, demande à regarder les données avant d'admettre que le service s'est dégradé.

Trois faits émergent. D'abord, le système de planification a accueilli ce mois-là un nouveau groupe de cliniques, et les utilisateurs actifs ont augmenté d'environ 30 % (illustratif). Normalisé, le taux d'incidents pour 1 000 sessions était à peu près plat. Ensuite, 90 des enregistrements supplémentaires étaient reliés à un seul incident parent, une interface défaillante avec un système de laboratoire : le nombre de défaillances distinctes n'a donc augmenté que de quelques unités. Enfin, la répartition des priorités a glissé : la part de la plus haute priorité était de 2 % le mois précédent et de 7 % maintenant. Le taux de reclassement avait aussi doublé, et un échantillon de 20 enregistrements a montré qu'environ la moitié des hautes priorités avaient été abaissées à la clôture.

L'équipe prend trois décisions. Elle rapporte séparément les incidents parents et les enregistrements liés. Elle ajoute les sessions actives au rapport comme dénominateur. Elle tient une séance d'une demi-heure avec le centre de services et les responsables cliniques pour appliquer la matrice d'impact et d'urgence aux enregistrements échantillonnés, ce qui montre que « une clinique ne peut pas prendre de rendez-vous » avait été traité comme moyen par certains agents et comme élevé par d'autres. La matrice reçoit deux exemples cliniques par case.

Le risque de détournement qu'elle repère est discret. Un responsable avait demandé aux agents d'éviter la priorité 1 pour le système de planification parce que chacune déclenchait une revue : les enregistrements étaient donc ouverts à une priorité plus basse et relevés plus tard, ou pas du tout. Le taux de reclassement et la revue par échantillon ont exposé le schéma. L'équipe convient que les revues sont faites pour apprendre, publie cette déclaration et suit la part d'incidents ouverts en dessous de la priorité de clôture comme garde-fou. La concentration des catégories place aussi la défaillance de l'interface en tête de liste : un enregistrement de problème est donc ouvert et une correction est planifiée avec l'équipe de l'interface.

## Agilité, IA, automatisation et analytique

### Agilité

Revoyez la demande d'incidents lors des conversations d'amélioration régulières avec les équipes produit qui détiennent les services touchés, et choisissez une cause répétée à supprimer. La précaution est qu'un objectif de moins d'incidents peut réduire le signalement honnête : gardez donc une part détectée par la supervision à côté du décompte.

### IA

L'IA peut classer et prioriser les incidents en volume, ce qui déplace la répartition des priorités et la concentration des catégories sans aucun changement de l'impact réel. Appariez la répartition des priorités avec une vérification humaine échantillonnée de l'honnêteté des priorités et rapportez le taux de reclassement pour les priorités attribuées par l'IA. La précaution est qu'un modèle entraîné sur d'anciens tickets reproduit les vieilles habitudes de catégories : surveillez donc les nouveaux genres d'incidents classés sous d'anciennes étiquettes.

### Automatisation

Capturez automatiquement la création d'incidents, les changements de priorité et les alertes de supervision pour que le volume soit compté à partir d'événements, et mesurez l'étape de classification automatique sur son taux d'erreur. La précaution est que les tempêtes d'alertes créent des décomptes d'incidents qui reflètent l'outillage et non le préjudice aux utilisateurs : normalisez donc par l'usage et dédoublonnez.

### Analytique

Normalisez le volume par l'usage et montrez la priorité comme un mélange dans le temps, avec les incidents répétés reliés à une cause. La décision éclairée est où investir dans la prévention. La précaution est qu'un faible nombre d'incidents de haute priorité est trop petit pour être comparé d'un mois à l'autre : utilisez donc des fenêtres plus longues.

## Éclairage sectoriel

**Startup.** Le volume est faible et l'équipe connaît chaque incident : les taux et les matrices peuvent donc sembler lourds. Gardez un simple décompte par service et une courte liste de catégories, et écrivez en une page ce qui compte comme un incident. Surveillez les répétitions, car une petite équipe peut éliminer vite une défaillance répétée et regagner du temps.

**Petite entreprise.** Le centre de services peut être une seule personne utilisant un outil hébergé. Utilisez les rapports standard de l'outil, gardez la priorité à quelques niveaux avec une règle simple d'impact et d'urgence, et vérifiez que les demandes ne sont pas comptées comme incidents. Comparez d'un mois à l'autre avec des notes sur les changements, comme un nouveau personnel ou un nouveau logiciel.

**Grande entreprise.** De nombreux services, fournisseurs et centres font de la cohérence la question principale. Convenez d'une matrice d'impact et d'urgence, d'un schéma de catégories à profondeur limitée et d'une règle de dédoublonnage, et laissez les équipes locales ajouter des étiquettes sans changer le schéma partagé. Normalisez par service et revoyez les tendances avec des cartes de contrôle et des annotations. Les incidents causés par un fournisseur demandent une définition partagée dans les contrats (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**Gouvernement et secteur public.** Les incidents peuvent comporter des obligations de déclaration, des besoins d'audit et un intérêt public, en particulier là où les services touchent aux droits ou à la sécurité des citoyens. Documentez la matrice de priorité et le schéma de catégories, gardez une piste d'audit des changements de priorité et soyez prudent avec tout chiffre publié, puisque le rapport public peut créer une forte pression sur la façon dont les enregistrements sont écrits. Les données d'usage peuvent être limitées par les règles de vie privée : énoncez donc le dénominateur que vous pouvez légitimement utiliser (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est la gestion de la demande. Les incidents consomment du temps qualifié, interrompent le travail planifié et perturbent les utilisateurs. Comprendre le volume, la priorité et les répétitions permet à une organisation de supprimer des causes, de dimensionner les effectifs d'après la demande réelle et de montrer aux dirigeants où le travail de fiabilité rapporterait.

Le coût a trois parts. La mise en place couvre la définition d'incident et de demande, l'accord sur la matrice de priorité et le schéma de catégories, et la liaison des données d'usage aux services. Le coût d'exploitation est l'effort de garder les enregistrements propres, une revue mensuelle par échantillon et une personne pour maintenir le rapport. Un troisième coût est le temps d'agir sur les constats, d'où vient l'essentiel du rendement, et pour lequel il faut donc planifier de la capacité.

Le rendement se décrit au mieux par des schémas que vous pouvez mesurer vous-même. Ils comprennent moins de répétitions après le travail sur les problèmes, moins de temps passé en disputes de priorité, moins d'escalades surprises et une meilleure adéquation entre effectifs et demande. Évitez de promettre une réduction en pourcentage des incidents ; elle dépend du service, du point de départ et du travail accompli. Le coût total de possession est surtout du temps de personnes : comptez-le donc, et comparez-le au temps que les incidents répétés consomment actuellement.

## Anti-modèles et pièges

- **Rapporter un décompte brut comme un score de santé.** L'usage, le changement et le comportement de signalement le déplacent tous. Montrez ensemble les taux normalisés, les décomptes bruts et les annotations.
- **Des objectifs de moins d'incidents.** Ils récompensent la suppression et le mauvais étiquetage. Fixez des objectifs de réduction des répétitions et d'impact sur les clients, et gardez le nombre d'incidents comme information.
- **Compter les demandes comme des incidents.** Le volume monte et le service paraît pire qu'il n'est. Séparez les types d'enregistrements et rapportez chacun.
- **Priorité à choix libre.** La priorité devient une négociation et le mélange perd son sens. Utilisez une matrice publiée et échantillonnez pour vérifier la cohérence.
- **Un arbre de catégories que personne n'utilise.** Les gens choisissent la première correspondance, et « autre » grossit. Gardez-le court, revoyez « autre » chaque mois et élaguez ce qui est inutilisé.
- **Compter chaque ticket lié comme une défaillance distincte.** Une seule panne domine le mois. Rapportez les incidents parents et le nombre d'enregistrements liés.
- **Classer des agents ou des équipes par nombre d'incidents.** Les décomptes par personne reflètent la répartition du travail et les habitudes de tickets. Agrégez par services et revoyez des schémas, pas des personnes.
- **Ignorer les répétitions.** La même défaillance est corrigée encore et encore, et personne ne détient la cause. Reliez les répétitions à des enregistrements de problèmes et attribuez un responsable.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et comptage | Les gens ne s'accordent pas sur ce qu'est un incident ; les décomptes viennent d'exports ponctuels | Certaines équipes séparent les demandes des incidents ; les règles diffèrent | Une définition écrite, un filtre et une règle de dédoublonnage pour toutes les équipes | Changements de définition consignés et montrés sur les courbes de tendance ; part des enregistrements non catégorisés suivie | Définitions revues avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Normalisation et interprétation | Décomptes bruts seulement | Données d'usage utilisées par quelques services | Une mesure d'usage nommée par service, issue d'une source distincte | Cartes de contrôle avec annotations utilisées en revue | Données d'usage, de changement et d'incidents reliées entre équipes et fournisseurs pour expliquer la demande |
| Pratique de la priorité | Priorité choisie à l'intuition | Une matrice existe dans certaines équipes | Une matrice avec exemples, montrée là où la priorité est choisie | Mélange et taux de reclassement revus et échantillonnés chaque mois | Matrice ajustée avec les clients et les responsables cliniques ou métier à mesure que les conditions changent |
| Répétitions et schémas | Répétitions repérées de mémoire | Listes de catégories revues occasionnellement | Taux de répétitions et de réouvertures rapportés chaque mois avec une fenêtre énoncée | Grappes qui se répètent reliées à des enregistrements de problèmes avec responsables et dates | Suppression des causes entre équipes et fournisseurs financée et suivie jusqu'à une demande réduite |

## Liste de vérification

- [ ] Une définition écrite sépare les incidents des demandes, des alertes et des problèmes.
- [ ] Les incidents parents et les enregistrements liés sont rapportés séparément.
- [ ] Chaque incident est attribué à un service du catalogue des services.
- [ ] Chaque service a une mesure d'usage nommée, issue d'une source autre que l'outil d'incidents.
- [ ] Les rapports montrent le décompte brut, le taux normalisé et des annotations pour les versions et les campagnes.
- [ ] Une carte de contrôle est utilisée avant que quiconque ne réagisse à un changement du volume hebdomadaire.
- [ ] La priorité est dérivée d'une matrice d'impact et d'urgence publiée, avec des exemples.
- [ ] La répartition des priorités et le taux de reclassement sont revus ensemble chaque mois.
- [ ] La liste de catégories est courte, et la part des enregistrements « autre » et non catégorisés est suivie.
- [ ] Les taux de répétitions et de réouvertures utilisent des fenêtres énoncées et sont rapportés séparément.
- [ ] Les grappes qui se répètent sont reliées à des enregistrements de problèmes avec un responsable.
- [ ] Aucun rapport ne classe les agents individuels par nombre d'incidents.

## Prompts d'IA

**Vérifiez l'ambiguïté d'une définition du volume d'incidents.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Concevez un taux d'incidents normalisé.**

```text
For the service [service name] I want an incident rate normalized by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Passez en revue une matrice d'impact et d'urgence.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymized example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Analysez les catégories et les répétitions pour trouver des candidats à l'amélioration.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique voisine et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique modifié garde complets ses horloges, ses vecteurs de détournement et ses garde-fous.

## Idées clés

- Le volume d'incidents reflète l'usage, le changement et le comportement de signalement autant que la qualité : normalisez-le donc et annotez-le.
- Lisez la priorité comme un mélange, dérivez-la d'une matrice d'impact et d'urgence publiée et surveillez le taux de reclassement.
- Rapportez séparément les incidents parents et les enregistrements liés pour qu'une panne ne ressemble pas à un mois de travail courant.
- Les répétitions et les réouvertures sont les signaux les plus utiles, car elles pointent des causes et des corrections qui n'ont pas tenu.
- Agrégez par services et par équipes, jamais par agents individuels, et appariez chaque métrique avec un garde-fou.
- Utilisez des cartes de contrôle et des vues de Pareto pour décider où regarder, puis donnez à chaque grappe un responsable et de la capacité.

## Références et lectures complémentaires

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
