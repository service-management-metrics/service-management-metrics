# Métriques des analyses post-incident et de l'apprentissage

**Une revue écrite, classée puis oubliée n'a rien appris à personne : mesurez donc si les revues ont lieu, si elles sont bonnes, si leurs actions se terminent et si les mêmes causes cessent de revenir, et gardez toute la pratique sans blâme pour que les gens continuent de dire la vérité.**

## Vue d'ensemble et motivation

Tout service tombe en panne parfois. Ce qui sépare une équipe qui s'améliore régulièrement d'une équipe qui répète sa pire semaine, c'est ce qui se passe dans les jours qui suivent la défaillance. Une [analyse post-incident](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) est un compte rendu écrit d'un incident ou d'un quasi-accident : ce qui s'est passé, comment cela a été détecté et traité, quelles conditions l'ont rendu possible et ce que l'équipe va changer. ITIL appelle l'activité une revue post-incident, et ce sujet emploie les deux noms de façon interchangeable. Une réflexion régulière de l'équipe en est un proche parent qui porte sur le travail ordinaire plutôt que sur une panne.

Ce sujet couvre les mesures qui disent si cette boucle d'apprentissage fonctionne. Il pose quatre questions. Les revues qui devraient avoir lieu ont-elles réellement lieu ? Sont-elles assez bonnes pour trouver quelque chose de réel ? Les actions qu'elles produisent sont-elles menées à terme ? Et la même cause continue-t-elle quand même de revenir ? Une cinquième question court sous les autres : les gens se sentent-ils assez en sécurité pour décrire ce qui s'est réellement passé ?

Le sujet se place entre deux voisins et évite de les répéter. Les métriques d'incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs) mesurent la ponctualité de la revue et le suivi de ses actions pour les incidents majeurs déclarés, et sont le lieu de ces deux mesures dans ce cadre étroit. Les métriques de gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes) détiennent l'enregistrement de problème, l'erreur connue et le temps jusqu'à une correction définitive. Ce sujet élargit la vue à toutes les gravités d'incidents, aux quasi-accidents et aux rétrospectives d'équipe, et il détient la qualité de l'apprentissage lui-même : couverture, profondeur, clôture des actions toutes sources confondues, récurrence des causes et signaux d'absence de blâme qui gardent les données honnêtes.

### Termes employés dans ce sujet

- **Analyse post-incident ou revue post-incident :** un examen structuré et sans blâme d'un incident après le rétablissement du service, se terminant par un enregistrement écrit.
- **Quasi-accident (near miss) :** un événement qui aurait pu causer un incident ou un préjudice mais ne l'a pas fait, par exemple un déploiement défaillant attrapé dans un environnement de test ou une alerte déclenchée quelques minutes avant que les utilisateurs ne remarquent.
- **Action de suivi :** un changement précis avec une équipe responsable nommée, une échéance et un moyen de savoir quand il est terminé.
- **Facteur contributif :** une condition qui a rendu l'incident possible ou pire. La plupart des incidents en ont plusieurs. Une « cause racine » unique est souvent une simplification, et l'[analyse des causes racines](https://en.wikipedia.org/wiki/Root_cause_analysis) se traite au mieux comme une recherche de conditions, non d'un coupable.
- **Classe de cause :** une étiquette stable tirée d'une courte liste convenue (par exemple « limite de capacité », « dérive de configuration », « supervision manquante », « responsabilité floue ») utilisée pour repérer la récurrence. Elle décrit une condition du système, jamais une personne.
- **Sans blâme (blameless) :** un style de revue qui demande comment le système a permis à une personne raisonnable d'agir comme elle l'a fait, et ne demande pas qui punir. C'est une pratique, liée à l'idée de [culture juste](https://en.wikipedia.org/wiki/Just_culture), dans laquelle les erreurs honnêtes sont traitées comme de l'apprentissage et les actes imprudents restent traités séparément.
- **Information Technology Infrastructure Library (ITIL) :** le cadre largement utilisé de gestion des services informatiques (ITSM). Ce sujet renvoie aux pratiques telles que décrites dans ITIL 4 (2019), et le livre dans son ensemble est daté d'octobre 2026. Voir [ITIL](https://en.wikipedia.org/wiki/ITIL).

### En quoi les visions agile et ITIL diffèrent

ITIL apporte la structure. Dans ITIL 4, la gestion des incidents rétablit le service, la gestion des problèmes réduit la probabilité et l'impact des incidents en trouvant et en gérant les causes, et l'amélioration continue transforme ce qui est appris en changement financé. La revue est la charnière entre les deux premières et la troisième. ITIL tend à demander si la revue a eu lieu, si un enregistrement de problème a été ouvert là où il était justifié et si l'amélioration a été enregistrée.

Les traditions agile et d'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) apportent des habitudes. Les revues sont sans blâme, courtes, écrites pour des lecteurs au-delà de l'équipe et largement partagées. La réflexion régulière de l'équipe, habitude d'amélioration continue, demande quoi changer ensuite, et la préférence [agile](https://en.wikipedia.org/wiki/Agile_software_development) pour de petits ajustements fréquents remplace le grand programme d'amélioration unique. L'ouvrage *Site Reliability Engineering* de Google consacre un chapitre à la culture des analyses post-incident et soutient qu'un processus de revue ne vaut que par la culture qui l'entoure.

Utilisées ensemble, les deux visions sont fortes. ITIL donne des règles de couverture et un lieu où l'action vit. Les habitudes agiles et SRE donnent l'honnêteté et la vitesse. Mesurées ensemble, elles montrent si la boucle se ferme.

## Principes clés

- **L'apprentissage est le produit, non le document.** Une revue a réussi quand quelque chose change dans le système, le processus ou la compréhension partagée. Comptez le changement, non la paperasse.
- **L'absence de blâme est une condition préalable à de bonnes données.** Si les gens craignent le blâme, la chronologie sera mince, les facteurs contributifs seront bien rangés et le même incident reviendra. Protégez la franchise avant de mesurer quoi que ce soit d'autre.
- **Mesurez le suivi et la récurrence, non le volume.** Le nombre de revues dit peu. La part d'actions terminées et la part de causes qui restent disparues en disent beaucoup.
- **Gardez les métriques au niveau de l'équipe et du système.** Une revue porte sur des conditions. Ne comptez jamais les revues, les actions ou les erreurs par personne, et n'utilisez jamais ces chiffres dans des conversations de performance.
- **Dimensionnez la revue au juste.** Tout événement ne mérite pas un long document. Fixez des déclencheurs selon l'impact et la valeur d'apprentissage, et laissez un petit événement recevoir une courte revue.
- **Laissez les actions concourir honnêtement.** Une action est du travail. Elle appartient au même backlog que l'autre travail, est classée face à lui, et peut être déclinée avec un motif consigné.
- **Lisez les revues.** Les chiffres localisent le problème. Un humain qui lit un échantillon dit si les revues sont bonnes.

## Définitions des métriques

Les métriques ci-dessous décrivent la boucle d'apprentissage pour un service ou un groupe d'équipes. Chacune énonce ce qui est compté, où les horloges démarrent et s'arrêtent, et ce qui est exclu. Les mesures de temps doivent être montrées en médiane et percentile élevé (par exemple le 85e) avec l'âge de l'élément ouvert le plus ancien, non en moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des revues | Part des événements éligibles ayant reçu une revue achevée | Événements éligibles avec une revue publiée dans la fenêtre convenue / événements éligibles clos dans la période. Les événements éligibles sont ceux qui répondent aux déclencheurs écrits. Les événements encore dans la fenêtre à la fin de la période sont exclus. | pourcentage | Enregistrements d'incidents de l'outil ITSM joints au dépôt des revues | Gestion des incidents ; gestion des problèmes | Réflexion régulière de l'équipe ; accords de travail d'équipe | Mensuelle |
| Score de qualité des revues | Si une revue publiée répond à une courte norme écrite | Revues d'un échantillon qui satisfont au moins [nombre convenu] points de la liste de vérification / revues de l'échantillon. L'échantillon est un nombre fixe de revues tirées au hasard chaque trimestre, notées par quelqu'un d'extérieur à l'équipe responsable. | pourcentage | Échantillon trimestriel du dépôt des revues avec une grille de notation | Amélioration continue ; gestion des problèmes | Définition de terminé pour une revue | Trimestrielle |
| Taux de clôture des actions | Part des actions de revue terminées à leur échéance | Actions terminées ou formellement déclinées (avec un motif) à l'échéance / actions échues dans la période. L'horloge démarre à la publication de la revue et s'arrête quand l'équipe responsable marque l'action faite et qu'un relecteur le confirme. Les actions closes comme « ne sera pas fait » sont comptées à part et rapportées. | pourcentage | Backlog de l'équipe ou registre d'amélioration de l'ITSM, relié à la revue | Amélioration continue ; gestion des problèmes | Backlog de l'équipe ; actions d'amélioration | Mensuelle |
| Âge des actions ouvertes | Âge des actions de revue encore ouvertes | Pour chaque action ouverte, aujourd'hui moins la date de publication de sa revue. Rapporter la médiane, le 85e percentile et la plus ancienne. | jours | Backlog de l'équipe ou registre d'amélioration | Amélioration continue | Âge de l'élément de travail ; travail en cours vieillissant | Mensuelle |
| Taux de récurrence des causes | Part des événements dont la classe de cause correspond à un événement antérieur pour le même service | Événements de la période dont la classe de cause principale correspond à une revue close dans les douze mois précédents pour le même service / événements de la période avec une classe de cause consignée. Les événements sans classe de cause consignée sont exclus et comptés à part. | pourcentage | Champ de classe de cause du dépôt des revues joint aux enregistrements d'incidents | Gestion des problèmes ; gestion des incidents | Analyse des défauts échappés ; thèmes de rétrospective | Trimestrielle |
| Taux de signalement des quasi-accidents | Volume de quasi-accidents et de signaux faibles que les gens choisissent de signaler | Quasi-accidents consignés dans la période / services actifs, montré comme une tendance par service et jamais par personne. Le taux est censé monter tôt dans un programme sain puis se stabiliser. | nombre par service | Journal des quasi-accidents, ou champ étiqueté dans le gestionnaire d'anomalies | Gestion des incidents ; gestion des risques | Bilan de santé de l'équipe ; tableau des obstacles | Mensuelle |
| Portée de l'apprentissage | Jusqu'où une revue voyage au-delà de l'équipe qui l'a écrite | Revues présentées ou discutées hors de l'équipe responsable (un forum partagé, une séance inter-équipes ou une lecture documentée par une équipe dépendante) dans [nombre convenu] jours suivant la publication / revues publiées dans la période | pourcentage | Enregistrements de forums ou de réunions et dépôt des revues | Amélioration continue ; gestion des connaissances | Revue des parties prenantes ; communautés de pratique | Trimestrielle |
| Report des actions de rétrospective | Part des actions de rétrospective d'équipe terminées avant la rétrospective suivante | Actions de rétrospective terminées avant la rétrospective suivante / actions de rétrospective convenues à la précédente. Les actions délibérément abandonnées avec un motif sont retirées des deux décomptes. | pourcentage | Notes ou tableau de rétrospective, tenus dans le backlog de l'équipe | Amélioration continue | Réflexion régulière de l'équipe | Par période de revue, revue trimestrielle |
| Pouls de sécurité de parole | Si les gens croient pouvoir décrire des erreurs sans blâme | Part des réponses à un niveau [convenu] ou plus sur un court jeu de questions anonymes (par exemple « je peux décrire une erreur dans une revue sans crainte d'être blâmé ») / réponses reçues. Le pouls n'est rapporté que pour des groupes assez grands pour protéger l'anonymat. | pourcentage | Enquête flash anonyme | Amélioration continue ; changement organisationnel | Bilan de santé de l'équipe ; vérification de la sécurité psychologique | Trimestrielle |

Une revue est « publiée » quand elle est visible des lecteurs visés, non enregistrée comme brouillon. Une classe de cause est consignée par le groupe de revue à partir de la revue elle-même, à partir d'une courte liste convenue, jamais par la personne qui a clos le ticket.

## Recommandations

### Décider ce qui mérite une revue

**1. Écrivez les déclencheurs et publiez-les.** Une règle comme « chaque incident majeur, chaque incident des deux gravités les plus hautes, tout événement avec perte de données clients et tout quasi-accident que l'équipe juge instructif » supprime la dispute et rend la couverture mesurable. Sans déclencheurs écrits, les revues suivent l'humeur et la charge de travail, et le chiffre de couverture ne veut rien dire.

**2. Dimensionnez la revue à l'événement.** Un petit événement peut avoir une revue d'une demi-page écrite en trente minutes, alors qu'un incident majeur peut mériter une chronologie complète et une séance animée. Une voie légère garde la couverture élevée sans faire de la pratique un fardeau.

### Juger la qualité en lisant

**3. Échantillonnez et lisez des revues chaque trimestre.** Tirez un petit échantillon au hasard, et faites lire chaque revue par quelqu'un d'extérieur à l'équipe responsable, face à une courte liste de vérification. Les points utiles comprennent une chronologie qui montre les décisions et l'information disponible quand elles ont été prises, plus d'un facteur contributif, une description de ce qui a bien marché, des actions avec responsables et dates, et un langage qui décrit le système et non l'individu. Rapportez la part qui satisfait à la norme, et renvoyez les constats aux rédacteurs comme coaching.

**4. Enseignez l'art de mener une revue.** Le [biais rétrospectif](https://en.wikipedia.org/wiki/Hindsight_bias) fait paraître les événements évidents après coup et pousse les auteurs vers « quelqu'un aurait dû remarquer ». Demandez aux animateurs de reconstituer ce que les gens savaient à chaque instant, et utilisez les [cinq pourquoi](https://en.wikipedia.org/wiki/Five_whys) comme une invite à poser des questions, non comme une recette pour une réponse unique.

### Faire terminer les actions

**5. Mettez les actions dans le vrai backlog.** Une action qui ne vit que dans un document de revue est invisible pour la planification. Créez un élément de travail dans le gestionnaire de l'équipe responsable, reliez-le à la revue et laissez-le concourir pour la capacité comme n'importe quel autre travail. Rapportez la clôture par équipe et par service pour qu'une action bloquée devienne visible aux personnes qui peuvent la débloquer.

**6. Autorisez un « ne sera pas fait » honnête, et consignez pourquoi.** Certaines actions se révèlent trop coûteuses ou n'ont plus de pertinence. Les clore avec un motif énoncé est plus sain que de les laisser ouvertes un an ou de les marquer faites sans les faire. Rapportez la part déclinée, car une part très élevée suggère que le processus de revue propose des actions que personne ne financera.

**7. Suivez l'âge des actions ouvertes, autant que le taux de clôture.** Le 85e percentile de l'âge des actions ouvertes et la plus ancienne action ouverte montrent ce qui est bloqué. Revoyez les plus anciennes à la réunion qui examine la fiabilité du service.

### Surveiller les répétitions

**8. Tenez une courte liste de classes de causes, et étiquetez chaque revue.** Une liste de huit à quinze classes suffit. Revoyez la liste quand plus d'une petite part des événements tombe dans une classe « autre ». L'étiquetage permet de répondre par des données à la question « l'avons-nous déjà vu ? » et alimente la gestion des problèmes avec des schémas qu'aucune revue isolée ne montre (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.6, Dette technique et erreurs connues).

**9. Traitez la récurrence comme un signal sur l'action, non sur les personnes.** Quand une classe de cause revient, demandez si les actions antérieures ont été terminées, si c'étaient les bonnes actions et si la classe est trop large. Une récurrence après la clôture de toutes les actions signifie que les actions n'ont pas marché, ce qui est une nouvelle utile.

### Protéger l'honnêteté

**10. Gardez les revues sans blâme et rendez-le visible.** Énoncez dans le modèle que la revue décrit des conditions et des décisions et n'attribue aucune faute, et faites remercier les auteurs de leur franchise par les dirigeants. La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), dans les recherches d'Amy Edmondson sur les équipes de travail, est la croyance partagée que l'équipe est sûre pour la prise de risque interpersonnelle (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**11. Récompensez les signalements de quasi-accidents, et lisez d'abord une hausse du décompte comme une bonne nouvelle.** Une équipe qui commence à signaler des quasi-accidents verra le décompte grimper, parce que les événements avaient toujours lieu. Dites-le d'avance, suivez la part des quasi-accidents qui ont produit un changement, et publiez les histoires avec l'accord de l'équipe.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des revues | Rétrécir les déclencheurs ; abaisser la gravité pour que les événements tombent hors d'eux ; déposer une « revue » d'une ligne pour cocher la case | Score de qualité des revues ; comparer les décomptes de gravité d'incidents à l'impact signalé par les clients ; auditer les rétrogradations |
| Score de qualité des revues | Écrire pour la liste de vérification avec du texte passe-partout ; notation par l'équipe responsable ; échantillon prévisible | Notateur extérieur ; échantillon aléatoire ; lire deux revues à voix haute chaque trimestre ; suivre si les actions des revues bien notées se terminent |
| Taux de clôture des actions | Fixer des échéances lointaines ; scinder les actions en morceaux triviaux ; clore des actions sans vérification ; déclarer « ne sera pas fait » pour vider la liste | Âge des actions ouvertes ; part déclinée avec motifs ; confirmation par un relecteur que le changement fonctionne ; taux de récurrence des causes |
| Âge des actions ouvertes | Clore et rouvrir ou recréer une action pour réinitialiser son âge ; déplacer des actions vers une liste « idées » séparée | Relier les nouvelles actions à la revue d'origine et garder la première date ; décompte des actions déplacées vers les idées |
| Taux de récurrence des causes | Consigner des classes de causes vagues ou changeantes pour que rien ne corresponde ; utiliser une large classe « autre » ; relier une répétition à une autre classe | Part des événements en « autre » ; relecture périodique des revues par classe ; revue de la liste de classes elle-même |
| Taux de signalement des quasi-accidents | Demander des signalements pour atteindre un chiffre ; consigner des événements triviaux ; ou, dans l'autre sens, lire le chiffre comme un échec et supprimer des signalements | Part des quasi-accidents qui ont mené à un changement ; aucun objectif sur le décompte ; retour du pouls de sécurité de parole |
| Portée de l'apprentissage | Ajouter des noms à une liste de diffusion ; présenter à des séances peu suivies ; compter un lien comme une lecture | Présence ou notes de discussion réelles ; demander aux équipes dépendantes ce qu'elles ont changé après la dernière revue |
| Report des actions de rétrospective | Ne convenir que d'actions triviales faciles à terminer ; sauter la rétrospective ; marquer des éléments terminés | Impact des actions tel que jugé par l'équipe ; taux de tenue des rétrospectives ; vérifier si le même thème apparaît plusieurs semaines |
| Pouls de sécurité de parole | Mettre la pression sur les répondants ; n'interroger que les confiants ; rapporter une moyenne qui cache un groupe à faible score | Taux de réponse et composition des répondants ; taille minimale de groupe ; commentaires libres lus en entier ; évolution du langage des revues |

Une lecture saine montre des revues pour les événements qui comptent, une norme de qualité que la plupart satisfont, des actions qui se terminent ou sont honnêtement déclinées, une poignée de vieilles actions que les dirigeants peuvent nommer, des classes de causes qui baissent en fréquence après avoir été traitées, et un décompte de quasi-accidents qui a monté puis s'est stabilisé. Le pouls reste stable ou s'améliore quand un incident difficile survient. Un schéma trop propre est lui-même un signe qu'il faut lire un échantillon.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Revoir chaque incident | Couverture complète ; pas de dispute sur les déclencheurs | Lourd ; les revues deviennent superficielles ; les équipes finissent par en vouloir au processus |
| Revoir selon des déclencheurs écrits | Concentre l'effort sur l'impact et la valeur d'apprentissage | Les déclencheurs demandent de la maintenance ; les événements limites passent entre les mailles |
| Étiquetage par classe de cause | Trouve des schémas entre revues | Les classes sont une simplification ; les vraies causes sont souvent plusieurs choses à la fois |
| Pouls anonyme sur la sécurité | Signal honnête sur une question sensible | Grossier ; les petites équipes peuvent être identifiables ; fatigue des enquêtes |

La réponse en bref est de garder la boucle courte et les chiffres peu nombreux : déclencheurs écrits, petit échantillon de qualité, un seul suivi d'actions et une liste de classes de causes, le pouls de sécurité s'ajoutant une fois que l'équipe fait confiance au reste. Aucune mesure ici ne prouve que l'apprentissage a eu lieu. Ensemble, elles montrent si les conditions pour qu'il ait lieu sont réunies.

## Questions à discuter avec votre équipe

**1. Lesquels de nos cinq derniers incidents ont reçu une revue, et quelqu'un a-t-il changé quelque chose à cause d'elle ?**
Partez de la liste des incidents, non du dossier des revues, pour que les revues manquantes deviennent visibles. Pour chaque revue, demandez ce qui est différent aujourd'hui dans le système ou le processus. Si la réponse est « rien », demandez pourquoi la revue a été tenue et qui l'a lue. L'animateur doit consigner les réponses sans juger, car elles montrent si la pratique produit du changement ou de la paperasse.

**2. Qu'est-ce qui rendrait ici plus difficile pour quelqu'un de dire la vérité dans une revue ?**
Demandez des exemples précis : la réaction d'un responsable, une évaluation de performance, une escalade de client, un ton dans un courriel. Invitez d'abord les gens à écrire leurs réponses de façon anonyme. Cherchez des conditions qui peuvent être changées, comme qui assiste, qui lit et ce que disent les dirigeants à voix haute. C'est la conversation qui protège tous les autres chiffres du sujet.

**3. Quelles actions sont ouvertes depuis le plus longtemps, et qu'est-ce qui les arrête ?**
Affichez les cinq plus anciennes. Pour chacune, demandez si l'action est toujours la bonne, si elle a un responsable avec de la capacité et si elle doit être faite, replanifiée ou déclinée. Gardez l'attention sur le système de travail et non sur le responsable. Convenez d'une décision pour chacune avant la fin de la séance.

**4. Quand le même genre de problème est-il revenu, et qu'est-ce que cela dit de la correction antérieure ?**
Utilisez les étiquettes de classe de cause pour trouver une répétition, et lisez la revue antérieure et ses actions. Demandez si les actions ont été terminées, si elles traitaient les facteurs contributifs et si la classe était tracée trop largement. Le but est une meilleure action, pas une explication.

**5. Signalons-nous des quasi-accidents, et que se passe-t-il quand quelqu'un le fait ?**
Demandez un exemple récent et retracez ce qui a suivi. Si rien n'a suivi, demandez pourquoi les gens signaleraient de nouveau. Si le décompte est faible, demandez ce que les gens craignent. L'animateur doit expliquer qu'une hausse du décompte est attendue au début, et convenir de la façon dont l'équipe réagira au prochain signalement pour que signaler paraisse valoir la peine.

**6. Comment saurions-nous qu'une revue était bonne si nous ne pouvions regarder aucun chiffre ?**
Cela demande à l'équipe de décrire la qualité avec ses propres mots. Les réponses courantes incluent « quelqu'un d'extérieur à l'équipe a appris quelque chose », « la correction a tenu » et « l'auteur n'avait pas peur ». Transformez les réponses en liste de vérification pour l'échantillon trimestriel, et revoyez-la au bout de deux trimestres.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison écrivent beaucoup de revues et portent la plupart des actions : elles ressentent donc en premier le coût d'un processus maladroit. Elles profitent de modèles courts, d'une règle claire de déclencheurs et d'un lien visible entre une action et un élément du backlog de l'équipe. La réflexion régulière de l'équipe mérite la même discipline de suivi qu'une revue d'incident, et une équipe qui termine ses actions de rétrospective pratique la même habitude à plus petite échelle. Gardez-vous de voir les actions écrasées par la pression des fonctionnalités, et portez ce compromis ouvertement devant le responsable produit (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les preuves (chronologies, alertes, journaux de messagerie) et sont les mieux placées pour étiqueter les classes de causes de manière cohérente et remarquer une répétition avant qu'elle ne devienne une panne. Elles ont besoin de temps protégé pour écrire, puisque les revues écrites à la fin d'un long poste sont minces. Reliez chaque revue à tout enregistrement de problème qu'elle alimente (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants fixent le ton de chaque revue par ce qu'ils demandent ensuite. « Qui a fait cela ? » met fin aux revues honnêtes, et « qu'avons-nous appris, et que changeons-nous ? » les invite. Les instances de gouvernance doivent attendre à la revue de fiabilité la couverture, la qualité, l'âge des actions et la récurrence, financer les actions qui demandent un investissement, et ne jamais comparer les équipes selon leur nombre d'incidents ou de revues.

### Clients et utilisateurs

Les clients voient rarement la revue, mais ils en ressentent le résultat : la même défaillance qui cesse de revenir, et un compte rendu honnête quand elle revient. Là où les contrats le permettent, publiez un résumé en langage clair après un incident significatif (voir le sujet 3.4, Métriques des incidents majeurs). Le contact répété sur le même problème est le signal côté client que l'apprentissage n'a pas pris (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une boutique destinée aux clients, un service de paiement et une plateforme d'inventaire interne. Cinq équipes produit construisent et exploitent ces services, et un petit groupe de gestion des services tient le processus d'incidents et de problèmes. Les chiffres de cet exemple sont illustratifs.

Un trimestre, le détaillant compte 41 incidents dans les deux gravités les plus hautes. Les déclencheurs écrits les qualifient tous pour une revue, et 36 revues sont publiées en dix jours ouvrés, de sorte que la couverture des revues est d'environ 88 %. La direction est satisfaite. Le groupe de gestion des services tire un échantillon aléatoire de huit revues, demande à une équipe d'un autre domaine produit de les noter, et constate que trois seulement satisfont à la norme convenue. Le défaut commun est que la chronologie liste ce qui s'est passé mais pas ce que les gens savaient quand ils ont pris chaque décision, et que la section des facteurs contributifs nomme une cause unique.

Le même échantillon montre que, sur 74 actions échues dans le trimestre, 51 ont été terminées à leur échéance, soit un taux de clôture d'environ 69 %. La plus ancienne action ouverte, vieille de 210 jours, est un seuil d'alerte de capacité sur la base de données de paiement, reporté six semaines de suite. L'étiquetage des causes montre « limite de capacité » dans 9 des 36 revues, dont 4 pour le service de paiement. Le pouls anonyme, auquel ont répondu 58 des 70 personnes invitées, est plus bas dans le groupe d'astreinte, où plusieurs commentaires disent que des dirigeants posent des questions pointues sur des personnes nommées.

L'équipe prend trois décisions. Premièrement, elle tient une courte séance avec les dirigeants qui assistent aux revues et convient d'une règle : les questions dans la salle portent sur les conditions et les décisions, et tout suivi concernant une personne passe par le chef d'équipe. Deuxièmement, elle place la plus ancienne action de capacité en tête du prochain cycle de planification de l'équipe de paiement, classée face au travail sur les fonctionnalités par le responsable produit, et rapporte le résultat à la revue de fiabilité. Troisièmement, elle ajoute deux points de liste de vérification au modèle de revue (ce que les gens savaient à chaque décision, et au moins deux facteurs contributifs) et mène une séance de coaching pour les rédacteurs à partir d'une revue anonymisée.

Le risque de détournement apparaît le trimestre suivant. La couverture des revues monte à 97 %, mais la part des revues de moins de 300 mots double, et quelques équipes ont rétrogradé des incidents de la gravité deux à la gravité trois, juste sous le déclencheur. L'échantillon de qualité et un audit des changements de gravité l'attrapent. Le groupe demande pourquoi les rétrogradations ont eu lieu, apprend que les équipes sentaient qu'une revue était une punition, et assouplit l'attente de longueur pour les petits événements tout en gardant le déclencheur de gravité deux.

## Agilité, IA, automatisation et analytique

### Agilité

Les revues marchent le mieux comme une habitude régulière avec les parties prenantes, où les actions vont dans le même backlog que l'autre travail. La précaution est qu'un objectif de nombre de revues produit des revues écrites sur un modèle, sans apprentissage.

### IA

L'IA peut rédiger des chronologies et des résumés pour une revue, ce qui fait monter la couverture et la vitesse. Appariez la couverture des revues avec une vérification de qualité par une personne et avec le taux de récurrence des causes, et étiquetez les sections rédigées par l'IA. La précaution est que l'IA peut lisser l'incertitude ou attribuer un blâme dans sa formulation : un humain détient donc le compte rendu final, sans blâme.

### Automatisation

Automatisez la capture de la chronologie et les rappels d'actions, et mesurez combien de rappels mènent à une clôture. La précaution est qu'un rappel automatique sans l'accord du responsable devient du bruit.

### Analytique

Suivez l'âge des actions et la récurrence sur une longue fenêtre, avec les décomptes. La décision éclairée est quel apprentissage change réellement le système. La précaution est que les taux de récurrence sont lents et portent sur de petits échantillons : évitez donc les conclusions à court terme.

## Éclairage sectoriel

**Startup.** Une petite équipe peut apprendre vite parce que tout le monde a assisté à l'incident. Le risque est que rien ne soit écrit et que la leçon parte avec la prochaine recrue. Gardez un modèle d'une page, tenez une revue pour tout ce qui réveille quelqu'un la nuit, et ne suivez que la clôture des actions et les causes répétées. Protégez la franchise en faisant lire les revues aux fondateurs sans commentaire sur les individus.

**Petite entreprise.** La personne qui a corrigé le problème est souvent la seule à le comprendre. Utilisez un bref modèle et revoyez chaque mois la plus ancienne action ouverte.

**Grande entreprise.** Standardisez le modèle, le déclencheur et la liste de classes de causes, et laissez les équipes adapter la profondeur. Fournissez un lieu où l'on puisse chercher les revues, un forum inter-équipes et un notateur extérieur. Méfiez-vous des classements d'équipes par nombre d'incidents ou de revues, puisqu'ils punissent la transparence.

**Gouvernement et secteur public.** Les revues peuvent être soumises à des devoirs légaux, à l'audit ou à des demandes d'accès à l'information, ce qui rend les auteurs prudents. Séparez la revue d'apprentissage de tout rapport formel destiné au contrôle, et consignez les actions bloquées avec leur dépendance (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût de cette pratique est surtout du temps. Les auteurs passent des heures sur chaque revue et de nombreuses personnes passent une heure en séance. Un échantillon trimestriel de qualité prend quelques heures à un lecteur extérieur. L'étiquetage des causes et le suivi des actions demandent un peu d'outillage, qui peut être un tableur et un champ dans les outils de tickets et de backlog existants. Il y a un coût plus grand et moins visible dans le comportement des dirigeants, parce que le programme échoue si les dirigeants réagissent mal à des revues franches.

Le rendement vient de causes qui cessent de se répéter et d'incidents plus courts parce que l'équipe en a vu de semblables. Moins d'incidents répétés libèrent de la capacité d'ingénierie et d'exploitation, réduisent les escalades et abaissent le coût de la perturbation pour les clients. Une bibliothèque partagée de revues raccourcit la courbe d'apprentissage des nouveaux et diminue la dépendance envers quelques personnes expérimentées. Ne citez pas de pourcentage venu d'une autre organisation. Mesurez votre propre référence pour la récurrence des causes, l'âge des actions ouvertes et le contact répété avant de commencer, et comparez après deux ou trois trimestres.

La limite honnête est que l'apprentissage est difficile à attribuer : une baisse de la récurrence peut venir d'une meilleure revue, d'un changement d'architecture sans rapport ou de la chance. Pour un traitement plus large, voir le sujet 7.7, Retour sur investissement et dossier d'affaires.

## Anti-modèles et pièges

- **Le théâtre de la revue.** Les revues satisfont une règle et personne ne les lit. Échantillonnez plutôt et lisez les revues, et jugez-les au changement qu'elles ont produit.
- **La recherche de la cause racine sous forme de personne.** La revue nomme une erreur individuelle et s'arrête. Demandez plutôt ce qui a rendu l'erreur probable, et listez plusieurs facteurs contributifs.
- **L'inflation d'actions.** Les revues produisent de longues listes que l'équipe ne peut pas financer. Limitez plutôt chaque revue à quelques actions classées et déclinez le reste avec un motif.
- **Des actions hors du backlog.** Elles vivent dans un document et ne sont jamais planifiées. Créez plutôt des éléments de travail dans le gestionnaire de l'équipe responsable et reliez-les à la revue.
- **Une clôture sans vérification.** L'action est marquée faite et la cause revient. Faites plutôt confirmer par un relecteur que le changement fonctionne et surveillez la récurrence de la classe de cause.
- **Utiliser les décomptes pour comparer les équipes.** Une équipe avec plus de revues ou de quasi-accidents paraît pire. Lisez plutôt un décompte élevé comme de l'ouverture, et comparez chaque équipe à son propre historique.
- **Punir le messager.** Un dirigeant interroge une personne après une revue franche. Convenez plutôt d'une norme sur la façon dont les dirigeants réagissent, et vérifiez le pouls après les incidents difficiles.
- **Traiter les métriques comme une preuve d'apprentissage.** Un tableau de bord propre est pris comme preuve que l'organisation apprend. Continuez plutôt de lire un échantillon de revues et d'interroger les personnes qui les ont écrites.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Déclencheurs et couverture | Les revues dépendent de qui est disponible et de la gravité ressentie | Certaines équipes tiennent des revues pour les incidents sérieux | Déclencheurs écrits et modèle commun ; couverture comptée par gravité | Couverture suivie dans le temps et auditée face aux rétrogradations ; voies légère et complète | Déclencheurs adaptés avec les clients et les fournisseurs ; revues partagées pour les incidents conjoints |
| Qualité et honnêteté | Les revues nomment une personne ou une cause unique | Certaines équipes écrivent des revues sans blâme | Norme de liste de vérification ; langage sans blâme attendu | Échantillon trimestriel extérieur ; pouls revu ; coaching des rédacteurs | Revues rédigées conjointement avec fournisseurs et utilisateurs ; lecture entre équipes routinière |
| Actions et récurrence | Les actions vivent dans des documents et sont rarement terminées | Actions suivies par certaines équipes ; la clôture varie | Actions dans le vrai backlog avec responsables, dates et refus honnête | Clôture, âge et récurrence des causes revus, avec une amélioration financée | Actions coordonnées entre équipes et fournisseurs ; classes de causes révisées à mesure que les schémas changent |
| Partage et apprentissage | Les leçons restent dans l'équipe | Revues affichées pour l'équipe | Revues consultables et partagées lors d'un forum régulier | Portée mesurée ; les équipes dépendantes rapportent les changements faits | L'apprentissage alimente la conception, l'accueil et les contrats fournisseurs |

## Liste de vérification

- [ ] Des déclencheurs écrits disent quels événements reçoivent une revue, y compris les quasi-accidents à haute valeur d'apprentissage.
- [ ] Un modèle court existe, avec une voie légère pour les petits événements.
- [ ] Les revues sont sans blâme par le modèle et par le comportement des dirigeants.
- [ ] Chaque action est un élément de travail dans le backlog de l'équipe responsable, avec un responsable et une date.
- [ ] Les actions peuvent être déclinées, et le motif est consigné et rapporté.
- [ ] Une courte liste de classes de causes existe, et chaque revue est étiquetée.
- [ ] Un lecteur extérieur note chaque trimestre un échantillon aléatoire de revues.
- [ ] Les plus anciennes actions ouvertes sont revues avec la fiabilité du service.
- [ ] L'âge des actions ouvertes est rapporté en médiane, percentile élevé et plus ancienne.
- [ ] Une voie de signalement des quasi-accidents existe, et l'équipe sait ce qui se passe après un signalement.
- [ ] Aucune métrique de ce sujet n'est rapportée ni utilisée par personne.
- [ ] Un pouls de sécurité de parole n'est mené que pour des groupes assez grands pour protéger l'anonymat.

## Prompts d'IA

**Passez en revue un brouillon d'analyse post-incident pour en juger la qualité.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgment, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Proposez des classes de causes à partir de revues passées.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Analysez les actions ouvertes pour y chercher des schémas de blocage.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet correspondant, les définitions et le garde-fou associé d'une métrique de revue ou d'apprentissage que vous allez rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique d'apprentissage révisée porte toujours ses horloges, son vecteur de détournement et son garde-fou.

## Idées clés

- Une revue vaut ce qu'elle change : mesurez donc la couverture, la qualité, la clôture des actions et la récurrence des causes, et lisez un échantillon des revues elles-mêmes.
- L'absence de blâme est la condition préalable de données honnêtes, et les dirigeants la protègent par la façon dont ils répondent à une revue franche.
- Mettez les actions dans le vrai backlog, limitez-en le nombre, autorisez un refus honnête et surveillez l'âge des plus anciennes.
- Étiquetez les revues avec une courte liste de classes de causes pour que les causes répétées deviennent visibles et alimentent la gestion des problèmes.
- Lisez d'abord un décompte de quasi-accidents en hausse comme un signe d'ouverture, et ne classez jamais des personnes ou des équipes selon le volume de revues.
- Appariez chaque chiffre ici avec un garde-fou, car la boucle d'apprentissage est elle-même un objectif qui peut être détourné.

## Références et lectures complémentaires

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
