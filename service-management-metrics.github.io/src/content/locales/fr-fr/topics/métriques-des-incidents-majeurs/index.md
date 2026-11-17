# Métriques des incidents majeurs

**Mesurez les incidents majeurs comme des événements rares et coûteux dont il faut apprendre, non comme un classement : comptez-les, chronométrez-les honnêtement, évaluez leur impact sur les clients, vérifiez que les gens ont été prévenus et prouvez que les actions de suivi ont été menées à bien.**

## Vue d'ensemble et motivation

Un incident majeur est un incident assez grave pour exiger une réponse au-delà de la routine normale. [ITIL](https://en.wikipedia.org/wiki/ITIL), le cadre de gestion des services informatiques le plus connu, décrit la [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) comme le rétablissement du fonctionnement normal du service aussi vite que possible, et il attend des organisations qu'elles traitent leurs incidents les plus graves par une voie distincte et plus coordonnée. La façon dont une organisation trace cette ligne est sa propre décision. Un choix courant est un incident qui touche de nombreux utilisateurs ou un service critique et demande que plusieurs équipes travaillent ensemble sous un seul coordinateur. Écrivez votre propre définition, car chaque métrique de ce sujet en dépend.

Les incidents majeurs sont peu nombreux. Une équipe peut voir des dizaines d'incidents ordinaires par semaine et deux ou trois majeurs par trimestre. Cela change la façon de mesurer. Les statistiques ordinaires du volume d'incidents et du temps de résolution (voir le sujet 3.2, Volume et priorité des incidents, et le sujet 3.3, Temps de réponse et de résolution des incidents) supposent de nombreux événements et récompensent les moyennes. Avec une poignée d'incidents majeurs par période, une moyenne est dominée par une mauvaise nuit, une courbe de tendance est surtout du bruit, et un [percentile](https://en.wikipedia.org/wiki/Percentile) n'a aucun sens sur cinq points de données (voir le sujet 1.6, Culture statistique pour les métriques de service). L'approche honnête est de montrer chaque incident majeur comme sa propre ligne, avec sa propre chronologie, et de ne synthétiser que sur de plus longues fenêtres.

Les visions agile et ITIL se rencontrent ici plus directement qu'ailleurs dans le livre. ITIL apporte la structure : un incident majeur déclaré, un coordinateur nommé, une communication définie auprès des parties touchées et une revue ensuite. Les traditions [agile](https://en.wikipedia.org/wiki/Agile_software_development) et d'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) apportent les habitudes : un [commandant d'incident](https://en.wikipedia.org/wiki/Incident_commander) qui dirige la réponse, une revue sans blâme de ce qui s'est passé et une attention à l'apprentissage qui alimente l'amélioration continue. L'ouvrage *Site Reliability Engineering* de Google décrit à la fois le modèle du commandant d'incident et la pratique de la revue d'analyse post-incident (voir les références). Une [analyse post-incident](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) en ce sens est un compte rendu écrit d'un incident, de ses causes et des actions qui suivent, et le terme est employé ici de façon interchangeable avec « revue post-incident ».

Ce sujet couvre cinq questions. À quelle fréquence les incidents majeurs se produisent-ils ? Combien de temps durent-ils, et quelle part de ce temps passe avant que quiconque en déclare un ? Combien d'utilisateurs, et lesquels, l'ont ressenti ? Les gens ont-ils eu de nos nouvelles à temps et à un rythme régulier ? Et le suivi promis a-t-il eu lieu ? Les sujets voisins couvrent ce qui les entoure : la disponibilité (voir le sujet 5.3, Métriques de disponibilité), la qualité de la revue écrite (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage), les causes sous-jacentes (voir le sujet 4.1, Métriques de gestion des problèmes) et le changement qui les déclenche souvent (voir le sujet 4.4, Échecs de changement et reprises).

Termes employés dans ce sujet :

- **Incident majeur :** un incident qui répond à vos critères de déclaration écrits et déclenche le processus d'incident majeur.
- **Déclaration :** le moment où une personne ayant autorité invoque formellement le processus d'incident majeur.
- **Temps de rétablissement :** le temps entre le début de l'impact sur les clients et le moment où le service est rétabli pour les utilisateurs. Le moment du rétablissement du service n'est pas celui où l'on trouve la [cause racine](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Commandant d'incident :** le rôle qui coordonne la réponse, attribue les tâches et décide. C'est un rôle pour la durée de l'incident, non un titre de poste.
- **Revue post-incident :** l'examen structuré et sans blâme d'un incident après le rétablissement du service.
- **Action de suivi :** un changement précis, attribué et daté qui découle d'une revue.

## Principes clés

- **Montrez les événements, puis synthétisez.** Les événements rares méritent des chronologies individuelles. Rapportez chaque incident majeur séparément et n'utilisez des statistiques de synthèse que sur une longue fenêtre, avec le décompte à côté.
- **Démarrez l'horloge à l'impact, non à la prise de conscience.** Une durée qui commence quand quelqu'un remarque cache l'écart de détection, qui est souvent la plus grande part de l'histoire.
- **Mesurez l'expérience de l'utilisateur, non l'effort de l'équipe.** L'impact sur les clients est la raison d'être du processus. Les heures d'effort des intervenants sont un coût à suivre, jamais un score.
- **La communication fait partie du rétablissement.** Un service rétabli pendant que les utilisateurs en sont encore à deviner n'est réparé qu'à moitié. Traitez la ponctualité des mises à jour comme une mesure de la réponse.
- **La revue n'est pas terminée tant que les actions ne le sont pas.** Un document achevé avec des actions ouvertes n'a rien changé. Mesurez le suivi, pas seulement l'existence d'une revue.
- **Ne classez jamais des personnes, et ne punissez jamais la déclaration.** Si déclarer un incident majeur nuit à l'équipe du déclarant dans un rapport, moins d'incidents seront déclarés et les métriques s'amélioreront pendant que le service se dégrade.
- **Gardez stables les critères de déclaration.** Déplacer le seuil change chaque métrique de ce sujet. Consignez chaque changement avec son motif et sa date.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nombre d'incidents majeurs | Incidents majeurs déclarés dans une période, par service | Nombre d'incidents ayant répondu aux critères de déclaration et déclarés dans la période, selon l'heure de déclaration ; les incidents rétrogradés dans la première heure sont listés à part et exclus | nombre par trimestre | Enregistrements d'incidents de l'outil ITSM avec l'indicateur d'incident majeur | Gestion des incidents | Revue de santé de l'équipe ou du service | Rapport mensuel, tendance trimestrielle |
| Durée de l'incident majeur | Durée pendant laquelle les clients ont été affectés | Heure de rétablissement du service moins heure de début d'impact, par incident. Le début d'impact est la plus ancienne preuve dans la supervision ou le premier signalement d'utilisateur, selon le plus précoce. Un rétablissement partiel est consigné comme son propre événement, et le rétablissement complet arrête l'horloge | minutes, par incident | Chronologie de supervision, chronologie d'incident dans l'outil ITSM | Gestion des incidents ; gestion des niveaux de service | Temps de rétablissement dans les mesures de livraison (voir le sujet 2.8, Métriques DORA) | Par incident ; médiane et maximum sur longue fenêtre chaque trimestre |
| Délai de déclaration | Délai entre le début de l'impact et la déclaration d'un incident majeur | Heure de déclaration moins heure de début d'impact, par incident. Les incidents jamais déclarés sont repérés par une revue trimestrielle des incidents ordinaires à fort impact et sont inclus avec un délai de déclaration « s.o. (jamais déclaré) » | minutes, par incident | Chronologie de supervision, piste d'audit de l'outil ITSM | Gestion des incidents ; supervision et gestion des événements | Définition de prêt pour l'escalade dans les accords de travail des équipes | Par incident |
| Impact sur les clients | Nombre d'utilisateurs et part d'usage affectés | Utilisateurs affectés (ou requêtes échouées) multipliés par les minutes d'impact, par incident. Ne compter que les utilisateurs ayant tenté d'utiliser le service pendant la fenêtre d'impact. La maintenance planifiée est exclue | utilisateurs-minutes, ou requêtes échouées | Télémétrie du service, enregistrements de contacts du support | Gestion des niveaux de service ; gestion des incidents | Indicateurs de niveau de service côté utilisateur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Par incident |
| Ponctualité de la communication | Si les parties touchées ont été prévenues à temps | Part des incidents majeurs pour lesquels le premier avis aux clients est parti dans le délai cible après la déclaration, et part des mises à jour programmées envoyées dans l'intervalle convenu. L'horloge démarre à la déclaration. Les messages purement internes sont exclus | pourcentage d'incidents ; pourcentage de mises à jour | Historique de la page d'état, journal de communication de l'outil ITSM | Gestion des incidents ; gestion des niveaux de service | Communication avec les parties prenantes dans l'accord de travail de l'équipe | Par incident ; synthèse trimestrielle |
| Ponctualité de la revue | Si une revue a eu lieu assez tôt pour être utile | Part des incidents majeurs ayant une revue publiée dans le nombre de jours ouvrés convenu après le rétablissement. L'horloge s'arrête à la publication, non au premier brouillon. Les incidents encore dans la fenêtre sont exclus | pourcentage | Dépôt des revues, outil ITSM | Amélioration continue ; gestion des problèmes | Suivi d'amélioration | Trimestrielle |
| Suivi des actions | Si les actions de revue sont menées à terme | Actions de revue terminées à leur échéance / actions de revue échues dans la période. Les actions closes comme « ne sera pas fait » sont comptées à part avec un motif, non cachées | pourcentage ; nombre en retard | Gestionnaire d'anomalies lié à la revue | Amélioration continue ; gestion des problèmes | Éléments de backlog issus des rétrospectives | Mensuelle |
| Taux d'incidents majeurs répétés | Récurrence de la même cause | Incidents majeurs de la période dont la cause consignée correspond à celle d'un incident majeur antérieur des douze mois précédents / incidents majeurs de la période. La correspondance se fait par le champ de cause, revu à la main | pourcentage, avec le décompte affiché | Enregistrements de revue, enregistrements de problèmes | Gestion des problèmes | Travail de prévention dans le backlog | Trimestrielle |

Chaque ligne a besoin d'une règle d'horloge écrite avant d'être crue. Les disputes sur le début d'impact et l'heure de rétablissement sont courantes et se règlent au mieux d'avance (voir le sujet 1.5, Sources de données et instrumentation).

## Recommandations

### Écrire ce qui rend un incident majeur

**Publiez des critères de déclaration que n'importe quelle personne d'astreinte peut appliquer.** Les critères combinent généralement l'impact (utilisateurs touchés, service critique dégradé, risque pour la sécurité ou juridique) avec un besoin de coordination (plus d'une équipe requise). Une courte liste avec des exemples vaut mieux qu'une longue matrice. Indiquez qui peut déclarer, et précisez que déclarer de bonne foi n'est jamais une erreur, même quand l'incident se révèle mineur.

**Consignez la version des critères dans chaque enregistrement d'incident.** Quand le seuil bouge, les tendances bougent avec lui. Un numéro de version ou une date sur chaque enregistrement permet de comparer ce qui est comparable et d'expliquer un saut du décompte venu d'un changement de règle.

### Compter et classer sans transformer le décompte en objectif

**Rapportez le décompte avec son contexte.** Montrez le nombre d'incidents majeurs par trimestre à côté du service, du déclencheur (changement, capacité, dépendance, sécurité, autre) et de la version des critères. Un décompte sans contexte invite à des objectifs comme « moins de trois par trimestre », qui apprennent aux gens à ne pas déclarer. Ne traitez un décompte en baisse comme une bonne nouvelle que si le délai de déclaration et l'impact sur les clients sont stables.

**Séparez les déclarés, les rétrogradés et les manqués.** Suivez les incidents déclarés puis rétrogradés, car ils montrent si les critères sont sensés. Revoyez chaque trimestre un échantillon d'incidents ordinaires pour y chercher ceux qui auraient dû être déclarés. Les manqués sont les plus instructifs.

### Chronométrer l'incident du côté de l'utilisateur

**Démarrez l'horloge quand les clients sont affectés.** Utilisez la plus ancienne preuve fiable, qui est souvent un signal de supervision antérieur au premier ticket. Quand le début est incertain, consignez l'estimation et sa source plutôt que l'heure à laquelle quelqu'un a remarqué. L'écart entre le début d'impact et la déclaration est une métrique à part entière et généralement la moins chère à améliorer.

**Découpez la chronologie en phases.** La détection, la déclaration, le diagnostic, l'atténuation et le rétablissement complet ont chacun des causes de retard et des responsables différents. Une ventilation par phase de chaque incident montre où le temps est passé sans avoir besoin d'une moyenne. Rétablir le service par un contournement et corriger la cause sont des événements distincts, et le second relève de la gestion des problèmes.

**Utilisez la médiane et le pire cas sur de longues fenêtres, avec le décompte.** Pour une année de données, rapportez la médiane et la plus longue durée, et dites de combien d'incidents elles viennent. Évitez un temps moyen de rétablissement unique pour les incidents majeurs. Avec peu d'événements, il est instable, et une seule longue panne le fausse (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Évaluer l'impact sur les clients en termes que les utilisateurs reconnaîtraient

**Préférez l'impact fondé sur les utilisateurs à l'impact fondé sur les serveurs.** Les requêtes échouées, les utilisateurs touchés ou les transactions touchées décrivent ce qui est arrivé aux gens. Les minutes de service dégradé sur un composant décrivent ce qui est arrivé à une machine. Là où vous avez des indicateurs de niveau de service, utilisez-les (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et reliez l'incident au tableau de la disponibilité (voir le sujet 5.3, Métriques de disponibilité).

**Ajoutez à chaque enregistrement un énoncé d'impact en langage clair.** Une ou deux phrases nommant qui a été touché et ce qu'il ne pouvait pas faire. Les contacts du support, les mentions sur les réseaux sociaux et les escalades de clients sont des preuves pour l'énoncé, non des métriques à maximiser.

### Mesurer la communication comme partie de la réponse

**Fixez des objectifs de communication par public.** Les clients touchés, les parties prenantes internes et les dirigeants ont besoin de messages différents à des moments différents. Convenez d'un objectif pour le premier avis après la déclaration et d'un rythme régulier de mises à jour, et mesurez le respect par incident. Le rythme compte plus que le contenu : une mise à jour qui dit « pas de changement, prochaine mise à jour dans trente minutes » et arrive à l'heure construit plus de confiance que le silence.

**Gardez la réponse et la communication dans des mains séparées.** Un responsable de la communication libère le commandant d'incident pour se concentrer sur le diagnostic. Une petite équipe peut utiliser une liste de vérification et un modèle préécrit à la place.

### Boucler la boucle de l'apprentissage

**Tenez la revue rapidement, et publiez-la.** La mémoire s'efface : fixez donc une fenêtre pour la revue et mesurez si elle a été tenue. L'achèvement de la revue compte moins que ce que la revue change : appariez-le donc avec le suivi. L'ouvrage *Site Reliability Engineering* de Google plaide pour la revue sans blâme et pour sa rédaction (voir les références), et le sujet 4.2 (Métriques des analyses post-incident et de l'apprentissage) couvre la qualité de la revue.

**Suivez les actions jusqu'au bout, et autorisez un « ne sera pas fait » honnête.** Mettez chaque action dans le backlog que l'équipe responsable utilise déjà, avec un responsable et une date. Consignez les actions déclinées, avec le motif, au lieu de les laisser pourrir. Revoyez les actions en retard lors d'une revue d'exploitation ou de service, et demandez ce qui les bloque. Plafonnez le nombre d'actions par revue pour que celles qui restent soient celles qui comptent.

**Cherchez des schémas entre incidents, et envoyez-les à la gestion des problèmes.** Les causes répétées, les déclencheurs communs et les lacunes de détection récurrentes sont des signaux que les revues isolées manquent. Alimentez-en le processus des problèmes et des erreurs connues (voir le sujet 4.1, Métriques de gestion des problèmes) et la planification des équipes qui détiennent les services. Traitez un taux de répétitions en hausse comme une invite à investiguer, non comme un verdict.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Nombre d'incidents majeurs | Relever le seuil de déclaration, garder des incidents en priorité « haute » pour qu'ils ne soient jamais déclarés, scinder un événement en plusieurs enregistrements, ou en fusionner plusieurs en un | Critères fixes et versionnés ; échantillon trimestriel d'incidents ordinaires à fort impact ; impact sur les clients et délai de déclaration suivis à côté du décompte |
| Durée de l'incident majeur | Reculer l'horloge vers un début d'impact plus tardif, déclarer « rétabli » alors que les utilisateurs échouent encore, ou clore et rouvrir un nouvel enregistrement | Début d'impact tiré de la supervision ; rétablissement confirmé par un indicateur côté utilisateur ; enregistrements rouverts et liés comptés comme un seul incident |
| Délai de déclaration | Déclarer tôt pour tout afin de paraître rapide, ou antidater la déclaration au début d'impact | Part des incidents déclarés ensuite rétrogradés ; piste d'audit de l'heure de déclaration ; échantillon de chronologies face à la supervision brute |
| Impact sur les clients | Rétrécir la définition d'« affecté », ne compter que les utilisateurs ayant ouvert un ticket, ou mesurer une dépendance restée disponible | Impact tiré de la télémétrie autant que des contacts ; énoncé d'impact en langage clair revu lors de la revue d'incident |
| Ponctualité de la communication | Poster un avis vague pour démarrer l'horloge, envoyer des mises à jour sans contenu, ou compter des messages internes | Vérification du contenu d'un échantillon de mises à jour ; retour des clients sur la clarté ; seuls les avis destinés aux clients sont comptés |
| Ponctualité de la revue | Publier un document mince pour tenir la date, ou déclarer une revue « non nécessaire » | Qualité de la revue lue par un pair sur un échantillon (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage) ; part des revues dispensées affichée |
| Suivi des actions | Écrire des actions vagues ou triviales faciles à clore, clore des actions sans faire le travail, ou réétiqueter en « ne sera pas fait » | Qualité des actions échantillonnée ; actions closes vérifiées face au changement du système ; part des « ne sera pas fait » et motifs revus |
| Taux d'incidents majeurs répétés | Consigner chaque cause comme nouvelle en choisissant une autre formulation, ou tout attribuer à une « erreur humaine » | Courte taxonomie de causes avec définitions ; champs de cause revus par quelqu'un d'extérieur à l'incident ; « erreur humaine » non acceptée comme cause sans explication par le système |

Une lecture saine est un nombre modéré et assez stable d'incidents déclarés, avec une rétrogradation occasionnelle et un manqué occasionnel découvert en revue. Le délai de déclaration est court et diminue, l'impact sur les clients par incident est compris et baisse là où un travail de prévention a été fait, et presque toutes les mises à jour destinées aux clients sont à l'heure. Les revues sont publiées à temps et leurs actions sont en majorité terminées, avec un petit ensemble honnête d'actions déclinées. Si tout paraît parfait, demandez si les critères ont dérivé ou si les gens ont cessé de déclarer (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). La [loi qui porte le nom de Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se voit le mieux ici, parce que le coût d'un mauvais chiffre est une moindre disposition à donner l'alarme.

## Compromis : avantages et inconvénients

| Choix | Force | Faiblesse |
| --- | --- | --- |
| Montrer chaque incident comme une ligne | Garde le contexte, évite les moyennes trompeuses sur de petits décomptes | Plus difficile à synthétiser pour les dirigeants ; demande un court récit par incident |
| Rapporter un décompte d'incidents majeurs | Simple, familier, visible pour la direction | Facile à transformer en objectif ; réagit aux changements de critères |
| Temps à partir du début d'impact | Reflète l'expérience de l'utilisateur, expose l'écart de détection | Le début d'impact est parfois incertain et demande du jugement |
| Temps à partir de la déclaration | Facile à capter et à comparer | Cache la détection lente et la déclaration lente |
| Utilisateurs-minutes d'impact | Comparable entre incidents et services | Demande de la télémétrie ; traite tous les utilisateurs et toutes les minutes comme égaux |
| Taux d'achèvement des revues | Facile à recueillir, encourage l'habitude | Récompense le document, non l'apprentissage |
| Taux de suivi des actions | Relie la revue au changement | Peut être détourné par des actions triviales ; demande un responsable et un backlog |

Utilisez un petit ensemble de mesures qui couvrent tout le cycle (déclarer, rétablir, informer, apprendre, terminer) au lieu d'en optimiser une seule. N'ajoutez des mesures d'impact que lorsque la télémétrie existe. Là où la télémétrie manque, un énoncé d'impact écrit avec soin sert mieux qu'un chiffre inventé.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui rend exactement un incident majeur ici, et toutes les personnes d'astreinte sont-elles d'accord ?**
La définition est le fondement de tous les autres chiffres. Demandez à trois personnes de classer le même incident récent et comparez les réponses. Le désaccord montre où les critères sont vagues. L'animateur doit noter des exemples à ajouter aux critères écrits et convenir de qui peut déclarer. Terminez en confirmant que déclarer de bonne foi est toujours acceptable, même si l'incident est rétrogradé plus tard.

**2. Lors de notre dernier incident majeur, combien de temps s'est écoulé entre le début de l'impact et la déclaration ?**
Reconstituez la chronologie à partir de la supervision, non de la mémoire. L'écart est souvent plus grand que prévu et est parfois la phase la plus longue. Demandez quel signal existait et qui l'a vu, et si l'écart venait de critères flous, d'une alerte manquante ou d'une réticence à déclarer. Choisissez un changement qui le raccourcirait, et décidez comment vous saurez.

**3. Qui a été touché, et comment le savons-nous ?**
Comparez ce que l'équipe croyait à l'époque avec ce que montrent plus tard la télémétrie et les contacts du support. Demandez quels clients, le cas échéant, ont été plus touchés que d'autres, et s'il s'agissait de ceux qui comptent le plus pour l'entreprise ou de ceux qui sont le moins capables de s'adapter. Discutez de la question de savoir si l'énoncé d'impact est quelque chose qu'un client reconnaîtrait. Convenez d'une mesure d'impact que vous pourrez recueillir de façon fiable la prochaine fois.

**4. Les gens ont-ils eu de nos nouvelles quand ils en avaient besoin, et le message était-il utile ?**
Vérifiez le premier avis et chaque mise à jour face au rythme convenu. Lisez les messages réels comme un client le ferait. Demandez s'ils disaient ce qui était connu, ce qui ne l'était pas et quand viendrait la prochaine mise à jour. Discutez de qui détient la communication pendant un incident et de la question de savoir si cette personne est libre de la faire.

**5. Qu'est-il arrivé aux actions de nos trois dernières revues ?**
Réunissez les actions dans une seule liste et marquez chacune comme faite, en cours, en retard ou déclinée. Pour les actions en retard, demandez ce qui les bloque : capacité, responsabilité, priorité ou périmètre flou. Décidez comment les actions en retard seront remontées à la prochaine réunion d'exploitation ou de planification.

**6. Si nous étions mesurés sur le nombre d'incidents majeurs, que ferions-nous différemment, et les clients y gagneraient-ils ?**
Cette question fait émerger les vecteurs de détournement avant qu'ils ne se produisent. Demandez au groupe d'être franc sur ce qu'il pourrait changer : seuils, étiquettes, qui déclare. Demandez ensuite quel est le meilleur objectif. Une bonne réponse va vers l'impact sur les clients, le délai de déclaration et le suivi, qui sont plus difficiles à détourner sans aider les utilisateurs. Consignez la réponse comme un garde-fou.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit rencontrent les incidents majeurs comme des interruptions du travail planifié et comme un retour sur leurs propres changements. Elles profitent surtout de chiffres d'impact clairs, d'un accès rapide à leurs propres chronologies d'incidents et d'actions de revue qui atterrissent dans leur backlog avec de la place pour les faire. Réservez de la capacité pour le suivi des incidents et traitez les actions comme du travail ayant le même statut que les fonctionnalités. Partagez les catégories de causes pour qu'un déclencheur récurrent mène à un changement de pratique (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation mènent la réponse et portent le coût du travail de nuit. Elles ont besoin de critères applicables à 3 h du matin, d'un rôle de commandant et de communication qu'elles peuvent pourvoir, et d'outils qui capturent la chronologie au fil des événements au lieu de la reconstituer de mémoire après coup. Elles doivent surveiller la charge que les incidents majeurs placent sur un petit groupe de personnes (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte) et utiliser les métriques de ce sujet pour demander du travail de prévention, non pour comparer des intervenants.

### Direction et gouvernance

Les dirigeants fixent le climat qui décide si les gens déclarent vite et rapportent honnêtement. Ils doivent demander le récit de chaque incident majeur et la tendance sur un an, éviter les objectifs sur le décompte, et poser des questions sur l'impact sur les clients, les lacunes de détection et les actions terminées. Financez le travail de prévention que recommandent les revues, et revoyez-le dans le même forum que les plans de livraison. La gouvernance peut alors voir si les leçons se traduisent en changement (voir le sujet 5.2, SLI, SLO et budgets d'erreur, pour un moyen de relier fiabilité et investissement).

### Clients et utilisateurs

Les clients jugent un incident majeur selon la durée pendant laquelle ils ont été touchés, s'ils ont été prévenus et si cela se reproduit. Ils sont mieux servis par des avis précoces et honnêtes que par des avis tardifs et soignés. Donnez-leur un canal d'état, un rythme sur lequel compter et un compte rendu clair ensuite de ce qui s'est passé et de ce qui va changer. Là où des contrats s'appliquent, rapportez dans les termes convenus dans l'accord de niveau de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). La satisfaction après un incident vaut la peine d'être demandée (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une boutique, un service de paiement et un service de gestion des commandes, chacun détenu par une équipe produit, avec une équipe plateforme partagée d'astreinte. Un petit groupe de gestion des services mène le processus d'incident majeur. Tous les chiffres de cet exemple sont illustratifs.

Au cours des deux derniers trimestres, le détaillant a déclaré cinq incidents majeurs (illustratif). Le groupe de gestion des services montre chacun comme une ligne avec le début d'impact, l'heure de déclaration, l'heure de rétablissement, le nombre estimé de commandes échouées, l'heure du premier avis aux clients et l'état de la revue. Il remarque que l'écart médian entre le début d'impact et la déclaration est de 38 minutes (illustratif), presque aussi long que le temps médian entre la déclaration et le rétablissement, à 52 minutes (illustratif). Avec cinq incidents, il traite les deux chiffres comme approximatifs et lit plutôt les chronologies. Trois des cinq montrent une alerte de supervision déclenchée tôt qui est restée sans accusé de réception dans un canal partagé.

L'équipe décide de router cette classe d'alertes vers le bipeur d'astreinte et d'ajouter une ligne aux critères disant qu'un signal soutenu d'échec du passage en caisse suffit à déclarer, sans attendre de tickets. Elle fixe aussi un objectif de premier avis aux clients dans les 20 minutes suivant la déclaration (illustratif), et le vérifie par incident. Deux sur cinq l'ont respecté. L'équipe de déploiement ajoute un modèle de page d'état qu'un responsable de la communication peut remplir sous pression.

Pendant la même revue, ils trouvent un risque de détournement. Un responsable d'une équipe produit avait proposé un objectif trimestriel de « pas plus de deux incidents majeurs ». Le groupe de gestion des services fait remarquer que le trimestre précédent avait compté un incident resté en priorité haute pendant quatre heures avec des clients échouant au passage en caisse, qui n'a jamais été déclaré parce que l'équipe était proche de la limite. Ils remplacent l'objectif par trois mesures : le délai de déclaration, les commandes échouées par incident et la part des actions de revue terminées à temps. Ils ajoutent le garde-fou d'un échantillon trimestriel d'incidents de haute priorité lu par quelqu'un d'extérieur à l'équipe responsable. Le trimestre suivant, le nombre de déclarés monte à quatre (illustratif), le délai de déclaration médian baisse, et la revue par échantillon ne trouve aucune déclaration manquée.

## Agilité, IA, automatisation et analytique

### Agilité

Menez une revue sans blâme avec les parties prenantes après chaque incident majeur et suivez les actions à une cadence régulière. La précaution est qu'un objectif de moins d'incidents majeurs encourage à déclarer moins : mesurez donc aussi le délai de déclaration et l'impact sur les clients.

### IA

L'IA peut aider à détecter, résumer et communiquer pendant un incident majeur, et rédiger la première version d'une revue. Appariez la ponctualité de la communication avec l'exactitude de ce qui a été communiqué, et marquez quelles parties d'une revue une IA a rédigées et une personne vérifiées. La précaution est qu'un résumé d'incident assuré par l'IA peut être faux : une personne détient donc le compte rendu final.

### Automatisation

Automatisez la capture de la chronologie à partir de la messagerie, de l'appel et de la supervision pour que la revue parte des faits, et mesurez l'outillage d'incident lui-même, comme les échecs d'appel. La précaution est que des publications d'état automatisées peuvent ressembler à de la communication sans atteindre les personnes qui en ont besoin.

### Analytique

Les incidents majeurs sont rares : utilisez donc des décomptes, des chronologies et l'impact sur les clients, non des taux et des moyennes. La décision éclairée est quoi corriger et quoi répéter. La précaution est que de petits nombres invitent à la surinterprétation : évitez donc les affirmations de tendance tirées d'une poignée d'événements.

## Éclairage sectoriel

**Startup.** Une startup peut n'avoir aucun processus formel d'incident majeur, seulement la personne qui est éveillée. Commencez par une définition d'un paragraphe, un coordinateur nommé pour chaque événement et un document partagé qui consigne la chronologie. Comptez les incidents et notez l'impact en une phrase. La revue peut être une note d'une demi-page, et le suivi un élément du backlog de l'équipe.

**Petite entreprise.** Une petite entreprise dépend souvent de fournisseurs pour une grande part de son service : la chronologie inclut donc l'attente d'un fournisseur. Consignez les temps de contact et de réponse du fournisseur dans la chronologie de l'incident, car ils expliquent une grande part de la durée et fournissent des preuves pour les conversations contractuelles. Gardez la communication avec les clients simple : un canal, une personne et un intervalle de mise à jour énoncé.

**Grande entreprise.** Les grandes entreprises exploitent de nombreux services et ont de nombreux incidents par période : un décompte par service et une consolidation sont donc tous deux utiles. Les risques sont des critères incohérents entre divisions et un processus assez lourd pour ralentir la déclaration. Alignez les définitions, gardez le processus léger pour les quinze premières minutes, et utilisez un format d'enregistrement commun pour que l'impact et la communication puissent être comparés.

**Gouvernement et secteur public.** Les organismes publics ont souvent des devoirs légaux, comme informer un régulateur ou le public, et un coût d'échec plus élevé pour des citoyens qui n'ont pas d'alternative. Ajoutez des mesures de conformité aux obligations de notification et d'impact sur les groupes vulnérables, et gardez des enregistrements qui résistent à l'audit et aux demandes d'information du public. Les cycles de passation de marchés peuvent retarder les actions de suivi : suivez donc les actions bloquées et escaladez-les.

## Dossier d'affaires : motivations, ROI et TCO

Le mobile est de réduire le coût des incidents qui font le plus mal : revenu ou service perdu, confiance abîmée, épuisement du personnel et exposition réglementaire. Un petit ensemble cohérent de mesures d'incidents majeurs montre d'où vient ce coût, si la détection et la communication s'améliorent et si l'investissement dans la prévention porte. Des mesures qui ne montrent qu'un décompte poussent le coût vers la dissimulation des incidents.

Les coûts de recueil sont modestes si les données vivent déjà dans l'outil ITSM, le système de supervision et le gestionnaire d'anomalies. Les principaux coûts sont de convenir des définitions, de relier l'enregistrement d'incident à la supervision et au backlog d'actions, et le temps pris pour écrire chaque revue. Les métriques coûtent peu au-delà de la cohérence de l'enregistrement.

Le rendement se voit dans un délai de déclaration plus court, une communication plus claire, moins d'incidents répétés et moins de reprise. Aucun chiffre universel ne s'applique : estimez donc le vôtre. Prenez votre dernière année d'incidents majeurs, estimez avec la finance le coût d'une heure d'impact pour chaque service, et comparez-le au coût du travail de suivi qu'il faudrait pour empêcher les causes répétées. Le coût total de possession inclut le temps des relecteurs, l'outillage pour les chronologies et les pages d'état, et la capacité mise de côté pour les actions de suivi, là où la plupart des programmes sous-investissent.

## Anti-modèles et pièges

- **Un objectif sur le nombre d'incidents majeurs.** Il apprend aux gens à éviter de déclarer. Suivez plutôt le délai de déclaration, l'impact et le suivi, et échantillonnez pour y chercher des déclarations manquées.
- **Un temps moyen de rétablissement unique pour les incidents majeurs.** Avec peu d'événements, une longue panne domine. Montrez plutôt chaque incident, puis la médiane et le plus long sur un an avec le décompte.
- **Démarrer l'horloge à la déclaration.** Cela cache le retard de détection et de déclaration. Démarrez plutôt à la plus ancienne preuve d'impact sur les clients, et rapportez l'écart séparément.
- **Classer les intervenants ou les équipes par métriques d'incident.** Cela détruit la franchise et brise la revue. Rapportez plutôt par service et par système, et gardez les noms hors des données.
- **Traiter la revue comme terminée quand le document est publié.** Le changement est le but. Mesurez plutôt le suivi des actions et regardez chaque mois les actions en retard.
- **Des changements de seuil silencieux.** Les tendances perdent leur sens. Versionnez plutôt les critères et notez les changements dans le rapport.
- **Ne compter que les tickets comme impact.** De nombreux utilisateurs touchés n'appellent jamais. Utilisez plutôt la télémétrie et ajoutez un énoncé d'impact en langage clair.
- **Utiliser les métriques pour attribuer des blâmes.** Les gens cachent alors des faits. Gardez plutôt les revues sans blâme, concentrez-vous sur les conditions et les décisions, et cherchez des causes dans le système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition et horloges | Majeur signifie ce que dit la personne la plus bruyante ; les temps viennent de la mémoire | Certaines équipes ont des critères et notent les heures de début et de fin | Une définition écrite et versionnée, avec règles d'horloge pour le début d'impact, la déclaration et le rétablissement | Définition et horloges auditées face à la supervision ; changements consignés avec motifs | Critères et horloges convenus avec les fournisseurs et les clients, révisés quand ils cessent d'éclairer les décisions |
| Impact et communication | Impact décrit par des anecdotes ; mises à jour envoyées quand quelqu'un s'en souvient | Impact estimé pour certains incidents ; certaines équipes utilisent une page d'état | Impact mesuré par la télémétrie pour les services clés ; objectifs de mise à jour fixés et suivis | Impact et communication suivis dans le temps et reliés au retour des clients | Impact partagé avec les clients et les fournisseurs dans un format commun, avec des actions d'amélioration conjointes |
| Revue et suivi | Revues rares et non écrites ; actions oubliées | Revues rédigées par certaines équipes ; actions consignées mais non suivies | Chaque incident majeur revu à temps ; actions suivies dans le backlog de l'équipe | Actions en retard et causes répétées revues selon une cadence, avec un travail de prévention financé | Schémas partagés entre équipes et fournisseurs ; l'apprentissage change couramment la conception et la planification |
| Usage dans les décisions | Chiffres cités après coup | Décomptes montrés aux dirigeants sans contexte | Chronologies et tendances montrées aux équipes qui détiennent les services | Métriques appariées à des garde-fous et utilisées pour prioriser le travail de fiabilité | Investissement de fiabilité décidé conjointement à partir des preuves d'impact et de récurrence sur tous les services |

## Liste de vérification

- [ ] Les critères de déclaration sont écrits, versionnés et connus de toutes les personnes d'astreinte.
- [ ] Déclarer de bonne foi est explicitement sans risque, et aucun objectif n'existe sur le décompte.
- [ ] Le début d'impact, la déclaration et le rétablissement sont définis et tirés de la supervision ou d'une piste d'audit.
- [ ] Chaque incident majeur est montré comme sa propre ligne avec une chronologie par phase.
- [ ] L'impact sur les clients est tiré de la télémétrie là où elle existe et décrit par un énoncé en langage clair.
- [ ] Les objectifs pour le premier avis et pour le rythme de mise à jour sont fixés et vérifiés par incident.
- [ ] Une revue est publiée dans la fenêtre convenue et ses actions sont dans le backlog de l'équipe responsable.
- [ ] Les actions en retard et les causes répétées sont revues selon un calendrier.
- [ ] Un échantillon trimestriel d'incidents ordinaires à fort impact vérifie l'absence de déclarations manquées.
- [ ] Chaque métrique a un garde-fou nommé et aucune métrique n'est utilisée pour classer des individus.

## Prompts d'IA

**Rédigez des critères de déclaration pour examen.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Reconstituez et critiquez une chronologie d'incident.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Passez en revue un ensemble d'actions post-incident.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Testez une métrique proposée pour détecter le détournement.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins et le garde-fou qui doit se trouver à côté de chaque métrique d'incident majeur.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version modifiée de ce sujet respecte encore le modèle et les conventions.

## Idées clés

- Les incidents majeurs sont rares : montrez donc chacun avec sa chronologie et ne synthétisez que sur de longues fenêtres, avec le décompte à côté du chiffre.
- Démarrez l'horloge à l'impact sur les clients, et rapportez l'écart avant la déclaration comme une mesure à part.
- Mesurez l'impact en termes d'utilisateurs et d'usage, et ajoutez un énoncé en langage clair pour ce que les chiffres manquent.
- Traitez la ponctualité de la communication comme une partie de la réponse, avec des objectifs par public et un rythme de mise à jour régulier.
- Une revue est terminée quand ses actions le sont : suivez donc le suivi et les causes répétées.
- Ne fixez jamais d'objectif sur le décompte, ne classez jamais des personnes et gardez la déclaration sans risque.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
