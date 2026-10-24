# Métriques de supervision et de qualité des alertes

**Une alerte est une demande d'attention adressée à une personne : mesurez donc la supervision par la fréquence à laquelle cette demande valait la peine d'être faite, la part des vrais ennuis qu'elle a attrapée, et ce qu'elle a coûté en sommeil et en confiance.**

## Vue d'ensemble et motivation

La supervision est le recueil, le traitement et l'affichage de données en temps réel sur un système. La [supervision de systèmes](https://en.wikipedia.org/wiki/System_monitoring) répond à la question « le service fonctionne-t-il comme les utilisateurs en ont besoin ? » Une alerte est le point où ces données demandent à un humain de faire quelque chose. La plupart des équipes mesurent mal ou pas du tout la première activité, et ne mesurent la seconde que par les plaintes. Ce sujet vous donne un petit ensemble de mesures pour les deux : la supervision voit-elle les défaillances qui comptent, et les alertes qu'elle lève méritent-elles l'attention qu'elles exigent.

Quelques termes d'abord. Dans le vocabulaire d'ITIL 4, un événement est un changement d'état qui a une signification pour la gestion d'un service, et la gestion des événements est la pratique qui consiste à détecter les événements, décider lesquels comptent et choisir la réponse. Une alerte est une notification à un humain, délivrée comme un appel, un message ou un ticket. Un appel (page) est une alerte qui interrompt quelqu'un immédiatement. Un faux positif est une alerte qui s'est déclenchée alors que rien ne demandait d'attention, et un faux négatif est une défaillance qu'aucune alerte n'a signalée ; les deux termes viennent du langage des [faux positifs et faux négatifs](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Une alerte exploitable est une alerte pour laquelle une personne avait une action utile à mener, et l'a menée ou a délibérément choisi de ne pas le faire pour un motif consigné.

Les deux faces de la supervision tirent en sens contraire. Ajouter des alertes après chaque incident construit un mur de bruit ; les réduire pour le calmer risque le silence pendant la défaillance qui compte. Le langage de la [précision et du rappel](https://en.wikipedia.org/wiki/Precision_and_recall) convient bien. La précision demande quelle part des alertes levées valait la peine d'être levée. Le rappel demande quelle part des vrais problèmes les alertes ont attrapée. La qualité des alertes est l'équilibre entre les deux, et une métrique qui n'en surveille qu'une invite l'équipe à sacrifier l'autre. Le [rapport signal sur bruit](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) capte la même tension.

Le coût humain est la raison pour laquelle cela a sa place dans un livre de métriques de service. La [fatigue des alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue) est la tendance bien documentée des personnes exposées à de nombreuses alarmes, la plupart sans importance, à se désensibiliser et à tarder à répondre à celles qui comptent. Elle a d'abord été étudiée en milieu clinique et s'applique à toute rotation d'[astreinte](https://en.wikipedia.org/wiki/On-call) appelée trop souvent par des alertes qui ne mènent nulle part. Des intervenants fatigués manquent de vrais incidents et finissent par quitter la rotation.

Les visions diffèrent entre les deux traditions que ce livre joint. ITIL 4 place ce travail dans la pratique de supervision et de gestion des événements, avec des liens vers la gestion des incidents et la gestion des niveaux de service. Son souci est que les événements soient détectés, classés et routés pour que les incidents soient trouvés tôt et traités de façon cohérente. L'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) l'aborde par l'autre bout : l'ouvrage *Site Reliability Engineering* de Google soutient que les appels doivent être urgents, importants, exploitables et réels, et que tout le reste relève d'un ticket ou d'un tableau de bord. Les équipes agiles le rencontrent comme un accord de travail : qui est réveillé, pour quoi, et qui corrige une mauvaise alerte. Les métriques ci-dessous empruntent aux trois et gardent une règle : une métrique décrit une rotation, un service ou une règle d'alerte, jamais un individu.

Ce sujet ne répète pas ses voisins. Le calendrier des incidents relève du sujet 3.3, Temps de réponse et de résolution des incidents, les incidents majeurs du sujet 3.4, Métriques des incidents majeurs, les objectifs et budgets d'erreur du sujet 5.2, SLI, SLO et budgets d'erreur, et la charge humaine du sujet 5.7, Métriques de tâches répétitives et d'astreinte. Ici, le sujet est la qualité du signal qui lance tout cela. L'instrumentation est couverte dans le sujet 1.5, Sources de données et instrumentation.

## Principes clés

- **Appelez pour les symptômes que les utilisateurs ressentent ; mettez le reste en ticket ou en tableau de bord.** Une alerte sur ce que les utilisateurs éprouvent (erreurs, lenteur, indisponibilité) reste utile quand le système change. Une alerte sur une cause (un disque plein, un processeur occupé) n'est utile que si elle prédit un symptôme et qu'une personne peut agir avant qu'il n'arrive.
- **Chaque alerte doit mener à une action.** Si la bonne réponse à une alerte est de ne rien faire, l'alerte doit être changée, rétrogradée en ticket ou supprimée. Mesurez la part qui mène à une action, et traitez le reste comme des défauts de la supervision.
- **Mesurez à la fois la précision et le rappel.** Ne compter que le bruit récompense le silence, et ne compter que la couverture récompense le volume. Les deux ensemble décrivent la qualité, et chacun sert de garde-fou à l'autre.
- **Traitez chaque règle d'alerte comme un produit avec un responsable.** Une règle a un objectif, un seuil, un runbook et une date de revue. Les règles sans responsable s'accumulent, et le bruit qu'elles produisent n'appartient à personne.
- **Rapportez des rotations et des services, jamais des personnes.** La charge d'alertes est une propriété de la conception du système et de la rotation. Nommer des individus transforme un problème de conception en problème de blâme et cache la vraie correction.

## Définitions des métriques

Les métriques ci-dessous sont choisies comme un ensemble. Le volume seul n'a aucun sens, l'exploitabilité dit si le volume est un problème, et la couverture et le temps de détection disent ce que le calme cache. Toutes sont calculées par service ou par rotation, et toutes utilisent l'enregistrement d'alertes des outils de supervision et d'appel joint aux enregistrements d'incidents et de tickets.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume d'alertes | Nombre d'alertes qui ont notifié un humain, ventilé en appels et tickets | Nombre de notifications distinctes délivrées à une rotation ou une file dans la période ; les répétitions d'une même alerte ouverte sont groupées en une ; les alertes traitées entièrement par l'automatisation sans notification humaine sont exclues ; rapporter par rotation et par semaine, et la part hors heures de travail séparément | alertes par rotation-semaine | Outil d'appel et de routage des alertes | Supervision et gestion des événements | Accord de travail de l'équipe sur l'astreinte | Hebdomadaire |
| Taux d'alertes exploitables | Part des alertes après lesquelles une personne a mené une action utile | Alertes avec une action consignée (correction, atténuation, escalade ou changement de la règle d'alerte) / alertes revues dans la période ; les alertes auto-résolues avant tout accusé de réception sont comptées comme non exploitables ; les alertes non revues sont rapportées comme un décompte distinct, non écartées | pourcentage | Enregistrement d'alerte joint à l'étiquette de revue, au ticket ou à l'incident | Supervision et gestion des événements ; gestion des incidents | Action d'amélioration de l'équipe sur l'exploitation | Revue hebdomadaire, tendance mensuelle |
| Taux de faux positifs | Part des alertes qui se sont déclenchées alors qu'aucun problème n'existait | Alertes étiquetées faux positif en revue / alertes revues dans la période ; « faux positif » signifie que la condition n'était pas une défaillance et que personne ne voudrait être prévenu ; un vrai problème trop mineur pour qu'on agisse n'est pas un faux positif | pourcentage | Étiquettes de revue des alertes | Supervision et gestion des événements | Revue du bruit en rétrospective | Mensuelle |
| Couverture de détection | Part des services dans le périmètre qui ont au moins une alerte testée sur un symptôme orienté utilisateur | Services avec une alerte de symptôme exercée par un test ou un événement réel dans les 12 derniers mois / services du périmètre du catalogue des services ; la liste des services dans le périmètre est fixée au début de la période | pourcentage | Catalogue des services, inventaire des règles d'alerte, enregistrements de tests | Gestion de la configuration des services ; supervision et gestion des événements | Définition de terminé pour un nouveau service | Trimestrielle |
| Part détectée par la supervision | Part des incidents que la supervision a détectés avant qu'un utilisateur ou un collègue ne les signale | Incidents dont le premier signal était une alerte / incidents de la période ; l'horloge est l'heure d'ouverture de l'incident, et les incidents sans premier signal consigné sont rapportés comme inconnus, non comme détectés | pourcentage | Enregistrement d'incident avec champ de premier signal, chronologie des alertes | Gestion des incidents | Revue d'incident (apprentissage post-incident) | Mensuelle |
| Temps de détection (TTD) | Temps écoulé entre le début de l'impact sur les utilisateurs et la première alerte qui a notifié un humain | Heure de la première alerte notifiant un humain moins heure de début d'impact, où le début d'impact est la plus ancienne heure à laquelle l'indicateur de niveau de service a franchi son seuil, tel qu'établi en revue d'incident ; rapporter la médiane et le 95e percentile ; les incidents sans alerte sont exclus et comptés à part | minutes | Revue d'incident, chronologie des alertes, historique de l'indicateur de niveau de service | Gestion des incidents ; supervision et gestion des événements | Revue post-incident | Mensuelle, par incident |
| Concentration des alertes | Part du volume d'alertes produite par les quelques règles les plus bruyantes | Alertes des cinq règles qui ont le plus d'alertes / toutes les alertes de la période ; la même alerte groupée une fois ; le nombre de cinq règles est une convention qu'une équipe peut changer si elle dit pourquoi | pourcentage | Inventaire des règles d'alerte et enregistrement d'appel | Amélioration continue ; supervision et gestion des événements | Backlog d'amélioration de rétrospective | Mensuelle |
| Actualité des règles d'alerte | Part des règles d'appel qui ont un responsable, un lien de runbook et une revue dans l'intervalle convenu | Règles d'appel remplissant les trois conditions / toutes les règles d'appel ; les règles désactivées dans la période sont exclues | pourcentage | Inventaire des règles d'alerte | Gestion des connaissances ; supervision et gestion des événements | Accord de travail sur la préparation opérationnelle | Trimestrielle |

Le volume d'alertes a besoin de contexte : lisez-le donc à côté du taux d'alertes exploitables. Le temps de détection utilise le début de l'impact sur les utilisateurs, non le ticket, parce que l'horloge du ticket démarre après la détection ; le début d'impact est une estimation tirée de la revue d'incident et doit être étiqueté comme telle. Le taux de faux positifs et le taux d'alertes exploitables ne sont pas complémentaires, parce qu'une alerte peut être vraie et ne pas valoir le temps d'une personne.

## Recommandations

### Décider ce qui mérite un appel

**1. Écrivez une politique d'appel et gardez-la courte.** Énoncez en un paragraphe ce qui mérite un appel (un symptôme que les utilisateurs ressentent maintenant ou ressentiront bientôt, sur lequel une personne peut agir) et ce qui n'en mérite pas. Tout le reste va dans une file de tickets ou sur un tableau de bord. Le chapitre du livre SRE de Google sur la supervision des systèmes distribués est un bon point de départ (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

**2. Alertez sur les symptômes, et gardez les causes pour le diagnostic.** Un appel pour « taux d'erreur au-dessus du seuil convenu » est un appel sur les utilisateurs. Un appel pour « le processeur est élevé » est un appel sur une supposition. Gardez les signaux au niveau des causes sur les tableaux de bord que l'intervenant regardera une fois l'alerte de symptôme déclenchée, et ne promouvez l'un d'eux en appel que s'il prédit de façon fiable un symptôme avec assez de préavis pour agir.

**3. Reliez les seuils d'appel à l'objectif de niveau de service.** Là où un service a un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alertez sur le rythme de consommation du budget d'erreur plutôt que sur des seuils bruts. Le chapitre du SRE Workbook sur l'alerte sur les SLO décrit les alertes sur le taux de consommation et les arbitrages entre précision, rappel, temps de détection et temps de réinitialisation. Cette approche appelle sur ce qui menace l'objectif et reste silencieuse sur les brefs à-coups qui ne le menacent pas.

### Revoir chaque alerte selon un rythme

**4. Étiquetez chaque alerte dans une courte revue régulière.** Réservez quinze minutes chaque semaine à chaque rotation pour regarder ce qui s'est déclenché. Pour chaque alerte, consignez une étiquette : exploitable, faux positif, réelle mais ne valant pas un appel, ou doublon. Les étiquettes sont la donnée du taux d'alertes exploitables et du taux de faux positifs, et la revue est l'endroit où les règles bruyantes sont corrigées le lendemain plutôt que le trimestre suivant.

**5. Faites produire un changement à la revue.** Chaque semaine, choisissez au moins une règle à ajuster, rétrograder, fusionner ou supprimer, et consignez le changement dans le backlog de l'équipe comme du travail ordinaire.

**6. Supprimez sans crainte.** Les équipes gardent des alertes parce que supprimer paraît risqué et que personne ne se souvient de la raison de leur existence. Exigez que chaque règle d'appel porte un objectif et un responsable, et convenez qu'une règle qui n'a jamais mené à une action dans une période énoncée est retirée ou rétrogradée, le changement étant consigné pour pouvoir être annulé. La métrique d'actualité des règles rend la discipline visible.

### Mesurer ce que la supervision manque

**7. Suivez la part d'incidents que les utilisateurs ont trouvés en premier.** Après chaque incident, consignez comment il a d'abord été remarqué : une alerte, un collègue, un client, un ticket de support ou un contrôle de routine. La part trouvée par la supervision est la mesure pratique la plus proche du rappel. Elle n'est pas complète, parce que les incidents que personne n'a remarqués n'entrent jamais dans l'échantillon : appariez-la donc avec des tests périodiques des alertes elles-mêmes.

**8. Estimez honnêtement le temps de détection.** Établissez le début de l'impact sur les utilisateurs dans la revue post-incident à partir de l'historique de l'indicateur de niveau de service, non du moment où quelqu'un a saisi le ticket. Rapportez la médiane et un percentile élevé, et montrez les incidents qui n'avaient aucune alerte comme un décompte distinct. Une moyenne unique cache à la fois le cas typique et la mauvaise queue (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 3.3, Temps de réponse et de résolution des incidents).

**9. Testez les alertes dont vous dépendez.** La couverture de détection n'est crédible que si l'alerte a été vue en fonctionnement. Incluez dans les exercices ou les répétitions de version un contrôle qui provoque délibérément un symptôme et confirme que la bonne alerte se déclenche, atteint la bonne rotation et renvoie à un runbook utilisable. Une alerte qui n'a jamais été exercée est un espoir, non un contrôle (voir le sujet 5.6, Métriques de continuité de service).

### Garder en bonne santé le chemin du signal

**10. Supervisez la supervision.** Une défaillance silencieuse du système de supervision ressemble exactement à un service sain. Ajoutez un contrôle de pulsation qui appelle si le circuit d'alertes cesse de délivrer, et consignez la fréquence des défaillances du circuit lui-même.

**11. Groupez, dédoublonnez et reliez avant de compter.** Groupez les alertes liées en une seule, supprimez les répétitions d'une alerte déjà ouverte et routez chacune vers la rotation responsable. Reliez chaque alerte à son runbook et à l'incident ou au ticket qu'elle a créé, car cette jointure est ce qui permet de calculer le taux d'alertes exploitables et la part détectée par la supervision sans comptage manuel (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Volume d'alertes | Relever les seuils, ajouter de longs délais, ou déplacer des alertes des appels vers une file silencieuse pour que le décompte baisse pendant que les problèmes passent inaperçus ; scinder ou fusionner des alertes pour changer le décompte | Part détectée par la supervision et temps de détection ; règle selon laquelle chaque rétrogradation est consignée avec son motif et revue au bout d'un trimestre |
| Taux d'alertes exploitables | Étiqueter des alertes comme exploitables après coup, ou mener une action triviale (un commentaire, un accusé de réception) pour être éligible ; laisser des alertes bruyantes non revues pour qu'elles n'entrent jamais dans le dénominateur | Décompte des alertes non revues montré à côté du taux ; contrôle par échantillon par quelqu'un d'extérieur à la rotation ; définition écrite d'« action utile » |
| Taux de faux positifs | Définir étroitement les faux positifs pour que les alertes « réelles mais sans intérêt » comptent comme vraies ; clore des alertes bruyantes sans étiquette | Taux d'alertes exploitables et étiquette « réelle mais ne valant pas un appel » suivis séparément ; échantillonnage périodique d'alertes closes |
| Couverture de détection | Ajouter une alerte triviale (un ping) à chaque service pour revendiquer la couverture ; compter des alertes jamais testées | Exigence que l'alerte surveille un symptôme orienté utilisateur et ait été exercée dans les 12 derniers mois ; part détectée par la supervision |
| Part détectée par la supervision | Consigner chaque incident comme « détecté par la supervision » même quand un utilisateur l'a signalé le premier ; créer une alerte après coup puis la citer ; laisser vide le champ de premier signal pour éviter un mauvais chiffre | Décompte des inconnus montré à côté de la part ; preuve du premier signal tirée de la chronologie des alertes, non de la mémoire ; incidents signalés par les clients reliés depuis l'enregistrement du support |
| Temps de détection (TTD) | Déclarer le début d'impact plus tard qu'il n'était ; exclure les incidents sans alerte ; rapporter la moyenne pour cacher la queue | Début d'impact tiré de l'historique de l'indicateur de niveau de service ; incidents sans alerte comptés et montrés ; médiane et 95e percentile rapportés ensemble |
| Concentration des alertes | Scinder une règle bruyante en plusieurs pour qu'aucune ne soit dans les cinq premières ; renommer des règles | Rapporter la concentration par défaillance ou service sous-jacent autant que par règle ; suivre le volume total et le taux d'alertes exploitables à côté |
| Actualité des règles d'alerte | Ajouter des responsables fictifs, des liens de runbook vides ou une revue de pure forme pour satisfaire la condition | Contrôle par échantillon que le lien du runbook se résout et a été utilisé dans une vraie réponse ; pratique du test du runbook lors des exercices |

Une lecture saine montre plusieurs choses ensemble. Le volume d'alertes par rotation est stable ou en baisse et se situe à un niveau que l'équipe a choisi comme soutenable. Le taux d'alertes exploitables monte sur plusieurs mois à mesure que les règles les plus bruyantes sont ajustées. La part détectée par la supervision est élevée et le temps de détection est court et ne s'allonge pas à mesure que le volume baisse, ce qui prouve que le calme a été mérité et non acheté. La couverture de détection croît parce que les services sont testés, non parce que des alertes triviales ont été ajoutées. Si le volume baisse pendant que la part de détection ou le temps de détection se dégrade, l'équipe a échangé le rappel contre la tranquillité, et les garde-fous sont ce qui le révèle.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Peu d'appels, fondés sur les symptômes | Nuits calmes, forte confiance dans chaque appel, facile à tenir à jour | Risque de détection tardive des problèmes qui se construisent lentement ; demande de bonnes habitudes de tickets et de tableaux de bord pour le reste |
| Beaucoup d'alertes sensibles | Alerte précoce des ennuis au niveau des causes ; moins d'incidents manqués | Fatigue des alarmes, accusé de réception plus lent et départ des rotations d'astreinte |
| Alertes sur le taux de consommation du SLO | Appels liés à ce qui menace l'objectif ; moins d'à-coups | Demande de bons indicateurs et un objectif convenu ; demande un ajustement pour équilibrer temps de détection et précision |
| Revue hebdomadaire des alertes | Retour rapide ; règles bruyantes corrigées vite | Coûte du temps chaque semaine ; devient du théâtre si aucun changement ne suit |
| Étiquetage par des humains | Capte un jugement qu'aucun outil n'a | Subjectif ; les étiquettes dérivent entre relecteurs et rotations si les définitions ne sont pas écrites |
| Suppression et regroupement automatisés | Réduit le bruit à grande échelle ; réduit les appels répétés | Peut cacher de vrais signaux si les règles sont fausses ; demande sa propre supervision et revue |

Chaque choix arbitre la précision contre le rappel, et l'arbitrage doit être fait à dessein et écrit par service, car c'est le contexte qui permet à quiconque de lire les chiffres équitablement. Un service dont une défaillance manquée a de graves conséquences peut accepter un taux d'exploitabilité plus bas pour une alerte plus précoce, avec une couche de triage qui envoie les alertes supplémentaires vers une file de tickets la nuit.

## Questions à discuter avec votre équipe

**1. Pour quoi voudrions-nous être réveillés, et lesquels des appels du mois dernier satisfaisaient cette norme ?** Écrivez la politique d'appel en une phrase ou deux, puis prenez les appels du mois dernier et testez chacun face à elle. L'exercice vaut plus que le pourcentage qu'il produit, parce que les désaccords révèlent où les attentes de l'équipe diffèrent. Consignez les appels inutiles comme candidats à la rétrogradation.

**2. Si la règle d'alerte la plus bruyante disparaissait demain, que perdrions-nous ?** Posez la question pour chacune des cinq premières règles par volume. Souvent personne ne peut nommer une défaillance précise que la règle ait jamais attrapée, et c'est un signe qu'elle peut être ajustée ou retirée. Là où quelqu'un le peut, demandez si la défaillance aurait aussi déclenché une alerte de symptôme.

**3. Comment découvrons-nous ce que la supervision a manqué ?** Regardez les derniers incidents et demandez qui a remarqué en premier et combien de temps l'impact a duré avant cela. La réponse vous donne la part détectée par la supervision et un temps de détection approximatif sans nouvel outillage. Discutez du signal qui aurait attrapé chacun plus tôt.

**4. Notre charge d'astreinte est-elle soutenable, et comment le saurions-nous ?** Convenez de ce que soutenable signifie pour une rotation, comme une limite d'appels hors des heures de travail par semaine, et revoyez la tendance par rotation, non par personne. Si la charge dépasse le niveau convenu, traitez-la comme un défaut du service et planifiez du travail pour la réduire. Gardez les mesures cohérentes avec le sujet 5.7, Métriques de tâches répétitives et d'astreinte.

**5. Lesquelles de nos alertes n'avons-nous jamais testées, et comment pourrions-nous les tester en sécurité ?** Listez les services qui dépendent d'une seule alerte de symptôme et demandez si quelqu'un l'a vue se déclencher pour de vrai ou lors d'une répétition. Planifiez un test et vérifiez tout le chemin : détection, routage, notification, runbook. Demandez si une défaillance du circuit d'alertes serait seulement visible.

**6. Comment ces chiffres pourraient-ils être détournés ici, et que remarquerions-nous ?** Demandez à l'équipe de décrire honnêtement comment elle pourrait faire paraître chaque chiffre meilleur sans rien améliorer. Convenez ensuite du garde-fou qui le montrerait et de qui le regarde. Nommer les astuces d'avance les rend moins tentantes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Quatre perspectives

### Équipes produit et de livraison

Les équipes qui construisent et exploitent un service décident de ce qu'il rapporte de lui-même : la qualité des alertes commence donc à la définition de terminé. Une nouvelle fonctionnalité livrée avec son propre indicateur et sa propre alerte testés évite une supervision greffée après le premier incident. Traitez l'ajustement des alertes comme du travail ordinaire du backlog.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le bipeur et en ressentent le coût en premier : elles détiennent donc le rythme de revue, l'étiquetage et la pulsation du circuit. Quand une alerte est fausse, la correction appartient au responsable de la règle, non à celui qui a reçu l'appel.

### Direction et gouvernance

Les dirigeants peuvent demander des chiffres de détection et d'exploitabilité par service, financer le temps d'ajustement et résister à un objectif sur le volume d'alertes qui récompense le silence. Un volume en baisse n'est une bonne nouvelle que si la part de détection et le temps de détection tiennent. Des limites d'astreinte soutenables sont une décision de dotation et de conception, non de motivation.

### Clients et utilisateurs

Les clients ne voient jamais une alerte ; ils voient si le service a échoué et combien de temps il a fallu pour le réparer. Une bonne supervision se voit dans des incidents corrigés avant qu'ils ne les remarquent, et moins de cas où un client signale le premier. Là où l'organisation emploie des mesures d'expérience (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA), la part d'incidents d'abord signalés par les utilisateurs est un indicateur direct de l'écart d'expérience.

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une plateforme de commandes avec quatre équipes produit et une équipe plateforme qui soutient la rotation d'astreinte. Tous les chiffres de cet exemple sont illustratifs. Sur quatre semaines (illustratif), la rotation a reçu 240 appels, dont 70 entre 22 h et 7 h. L'équipe revoit chaque appel avec quatre étiquettes : exploitable, faux positif, réel mais ne valant pas un appel, et doublon.

La revue montre un taux d'alertes exploitables de 31 % (illustratif) et un taux de faux positifs de 22 % (illustratif). Cinq règles ont produit 58 % des appels (illustratif), et la plus grosse était un seuil de disque sur un serveur de traitement par lots qui se rétablissait toujours tout seul. La part détectée par la supervision du trimestre précédent était de 62 % (illustratif), et le temps de détection médian de 14 minutes (illustratif), avec un 95e percentile de 51 minutes (illustratif).

L'équipe rétrograde trois règles bruyantes vers une file de tickets, fusionne les doublons pour qu'une défaillance produise un appel, remplace l'alerte de décompte brut d'erreurs sur le paiement par une alerte sur le taux de consommation du budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur), et ajoute une alerte de symptôme pour les courriels de confirmation de commande, une lacune derrière deux incidents signalés par des clients. Chaque changement est un élément de backlog avec un responsable. Quatre semaines plus tard, les appels tombent à 96 (illustratif) et le taux d'exploitabilité monte à 64 % (illustratif), pendant que la part de détection monte à 71 % (illustratif) et que le temps de détection médian tient à 14 minutes. Le calme semble mérité.

Le risque de détournement apparaît au troisième mois. Un nouveau responsable fixe un objectif informel de moins de 60 appels par quatre semaines, et une rotation l'atteint en allongeant le délai de l'alerte d'erreurs du paiement. Sa part de détection tombe à 55 % (illustratif) et son 95e percentile du temps de détection grimpe à 80 minutes (illustratif). Parce que les garde-fous sont à côté du volume, la revue l'attrape. L'équipe retire l'objectif de volume, rétablit l'alerte et consigne le cas dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Agilité, IA, automatisation et analytique

### Agilité

Revoyez les alertes selon une cadence régulière comme un produit utilisé par les personnes d'astreinte, et retirez ou ajustez les bruyantes avec les parties prenantes. La précaution est qu'un objectif de réduction du volume d'alertes peut retirer des alertes utiles.

### IA

L'IA peut regrouper, résumer et classer les alertes, et suggérer des causes. Appariez la réduction du bruit avec le taux de ratage des vrais incidents, et suivez la part des regroupements de l'IA qu'une personne a scindés ou fusionnés. La précaution est que la suppression par un modèle peut cacher une alerte rare mais grave.

### Automatisation

Comptez automatiquement les alertes par règle et par résultat, et mesurez l'automatisation des alertes sur les erreurs de suppression. La précaution est que les alertes auto-résolues peuvent ressembler à des systèmes sains alors que la règle ne fait que clignoter.

### Analytique

Rapportez le taux d'alertes exploitables et la couverture de détection, avec les incidents d'abord remarqués par les utilisateurs. La décision éclairée est quelles alertes corriger ou retirer. La précaution est qu'une couverture mesurée face aux incidents connus ignore les modes de défaillance que personne n'a encore vus.

## Éclairage sectoriel

**Startup.** Avec une poignée d'ingénieurs tous d'astreinte, la priorité est une courte politique d'appel et quelques alertes de symptôme sur les chemins qui rapportent de l'argent. Dix minutes le lundi à regarder ce qui a réveillé les gens suffisent. Le principal risque est l'absence totale d'alertes, de sorte que les clients sont la supervision ; comptez la fréquence à laquelle un client vous a prévenu le premier.

**Petite entreprise.** Les petites organisations s'appuient souvent sur la supervision d'un fournisseur. Les mesures utiles sont la couverture de détection des quelques systèmes qui arrêtent l'activité et la part des incidents trouvés par les utilisateurs. Demandez aux fournisseurs les données d'alertes auxquelles votre contrat vous donne droit.

**Grande entreprise.** Les grandes organisations ont de nombreux outils et rotations, et chaque équipe peut définir « exploitable » différemment. Standardisez les définitions et les étiquettes, revoyez au niveau de l'équipe, et agrégez par service plutôt que par outil. Les plateformes de corrélation d'événements réduisent le volume à grande échelle mais demandent leurs propres contrôles de rappel.

**Gouvernement et secteur public.** Certains services fonctionnent en heures de bureau et d'autres, comme les systèmes d'urgence ou de prestations, fonctionnent en continu. La couverture de détection et les alertes testées comptent le plus là où la défaillance a des conséquences légales ou de sécurité, et les enregistrements de tests peuvent soutenir l'audit. Rapportez aux organes de contrôle la couverture et la détection, non les décomptes bruts d'alertes, faciles à mal lire (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les raisons d'investir sont pratiques. Une meilleure détection raccourcit le temps pendant lequel les utilisateurs sont touchés. Moins d'appels inutiles protègent le sommeil, réduisent les départs de la rotation et gardent l'attention pour les alertes qui comptent. Le coût d'une mauvaise qualité des alertes est difficile à voir parce qu'il est réparti entre sommeil interrompu, réponses lentes et départs d'ingénieurs expérimentés.

Le coût de recueil de ces métriques est faible si les outils d'alertes, d'appel et d'incidents peuvent être joints, et modéré si les étiquettes sont ajoutées à la main. Les principaux coûts sont le temps de revue hebdomadaire, le travail d'ajustement et de suppression, et les tests de détection occasionnels. Élaguer les règles inutilisées réduit aussi les coûts de licence et de stockage de la supervision, et le coût total de possession doit inclure le temps des personnes.

Le rendement apparaît en quelques mois sous forme de rotations plus calmes, d'une part détectée par la supervision en hausse et d'un temps de détection qui ne s'aggrave pas. Pour le traduire en argent, comparez le coût des heures d'incident et du renouvellement de la rotation avec le coût de la revue, avec vos propres chiffres. N'utilisez pas de moyennes sectorielles à moins de pouvoir citer une source vérifiée.

## Anti-modèles et pièges

- **Viser le volume d'alertes.** Un objectif sur le décompte récompense le silence et invite à cacher des alertes. Fixez des objectifs sur le taux d'alertes exploitables et la part de détection, et utilisez le volume comme chiffre de contexte avec une limite de soutenabilité choisie par l'équipe.
- **Alerter sur chaque cause.** Des dizaines d'appels au niveau des causes produisent du bruit et manquent quand même le symptôme auquel personne n'a pensé. Alertez plutôt sur les symptômes orientés utilisateur.
- **Ajouter une alerte après chaque incident sans jamais en retirer.** Appariez chaque nouvelle alerte avec une revue de celles qu'elle rend redondantes.
- **Compter les alertes sans les étiqueter.** Un décompte sans jugement d'utilité ne peut pas distinguer une rotation bruyante d'une rotation occupée. Étiquetez un échantillon chaque semaine, même si quelques minutes seulement sont disponibles.
- **Traiter la couverture comme un décompte d'alertes.** Un service avec cinquante alertes de cause et aucune alerte de symptôme est mal couvert. Définissez la couverture comme une détection de symptôme testée.
- **Classer les personnes selon les appels traités ou acquittés.** Cela punit les membres de la rotation qui prennent les postes difficiles et encourage à éviter le bipeur. Rapportez par rotation et par service, et cherchez des corrections de conception.
- **Ne jamais tester le chemin des alertes.** Une alerte qu'on n'a pas vue fonctionner est une hypothèse. Incluez des tests d'alertes dans les exercices, et supervisez le circuit lui-même.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Politique d'appel et responsabilité des règles | Alertes ajoutées à la volée ; personne ne sait pourquoi beaucoup existent | Certaines équipes ont une politique et des responsables pour leurs règles | Une courte politique d'appel ; chaque règle d'appel a un responsable et un runbook | Actualité des règles suivie et revue ; règles inutilisées retirées selon un calendrier | Politique et responsabilité adaptées entre équipes et fournisseurs à mesure que les services changent |
| Mesure de la qualité des alertes | Plaintes sur le bruit ; pas de décomptes | Volume compté par certaines équipes ; pas d'étiquetage | Revue hebdomadaire avec des étiquettes communes ; taux d'alertes exploitables et de faux positifs rapportés par service | Taux suivis dans le temps et appariés aux mesures de détection ; amélioration financée | Qualité reliée entre services et fournisseurs ; définitions révisées quand elles cessent d'éclairer les décisions |
| Détection et couverture | Clients et collègues signalent la plupart des problèmes | Alertes de symptôme sur quelques services clés | Couverture de détection suivie avec des alertes testées ; premier signal consigné pour chaque incident | Temps de détection et part détectée revus avec un garde-fou ; lacunes transformées en travail planifié | Détection testée régulièrement à travers les dépendances et les fournisseurs, y compris le circuit d'alertes |
| Usage pour l'amélioration | Les corrections d'alertes suivent la pire nuit | Les corrections suivent les incidents | Chaque revue produit au moins un changement | Changements suivis jusqu'à leur effet sur le volume, l'exploitabilité et la détection | Charge de rotation, détection et budgets d'erreur revus ensemble pour orienter l'investissement |

## Liste de vérification

- [ ] Nous avons une politique d'appel écrite de quelques phrases qui dit ce qui mérite un appel.
- [ ] Chaque règle d'appel a un responsable, un objectif et un lien de runbook.
- [ ] Chaque rotation revoit au moins chaque semaine ce qui s'est déclenché et étiquette chaque alerte.
- [ ] Chaque revue produit au moins un changement consigné d'une règle.
- [ ] Nous rapportons le volume d'alertes, le taux d'alertes exploitables et le taux de faux positifs par rotation et par service, jamais par personne.
- [ ] Chaque incident consigne comment il a d'abord été détecté, avec une option inconnue.
- [ ] Nous estimons le début d'impact à partir de l'historique de l'indicateur de niveau de service et rapportons la médiane et le 95e percentile du temps de détection.
- [ ] Chaque service dans le périmètre a une alerte de symptôme testée dans les 12 derniers mois.
- [ ] Un contrôle de pulsation nous appelle si le circuit d'alertes s'arrête.
- [ ] Nous avons convenu d'une charge hors des heures de travail soutenable pour chaque rotation et la revoyons.
- [ ] Aucun objectif n'est fixé sur le seul volume d'alertes.

## Prompts d'IA

**Objectif : rédigez une politique d'appel pour un service à partir de ses indicateurs et de ses conséquences.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Objectif : analysez une revue d'alertes exportée pour y chercher des schémas de bruit.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Objectif : vérifiez un ensemble de métriques d'alertes pour y chercher un risque de détournement avant publication.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Objectif : planifiez un test de détection pour des services à couverture faible.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure voisine et le garde-fou qui doit se trouver à côté d'une métrique de qualité des alertes.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent cohérents le modèle, le tableau de détournement et les renvois.

## Idées clés

- Jugez les alertes selon qu'elles ont mené à une action, et la supervision selon la quantité de vrais ennuis qu'elle a attrapés ; précision et rappel se servent mutuellement de garde-fou.
- Appelez sur les symptômes que les utilisateurs ressentent, reliez les seuils à l'objectif de niveau de service là où il en existe un, et gardez les causes pour le diagnostic.
- Revoyez chaque semaine ce qui s'est déclenché, étiquetez-le et faites au moins un changement chaque fois.
- Ne fixez jamais d'objectif sur le seul volume d'alertes ; lisez-le à côté du taux d'alertes exploitables, de la part détectée par la supervision et du temps de détection.
- Testez les alertes et le circuit d'alertes, car une alerte non testée est une hypothèse.
- Rapportez par rotation et par service, jamais par personne, et traitez une charge d'astreinte soutenable comme un objectif de conception.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
