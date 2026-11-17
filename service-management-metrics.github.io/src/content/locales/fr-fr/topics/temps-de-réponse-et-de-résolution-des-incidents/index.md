# Temps de réponse et de résolution des incidents

**Les mesures de temps des incidents décrivent combien de temps les utilisateurs attendent à chaque étape : rapportez-les donc comme des distributions, avec les horloges écrites, jamais comme une moyenne unique, et appariez chaque chiffre de vitesse avec une mesure de la tenue de la correction.**

## Vue d'ensemble et motivation

Un incident, en gestion des services informatiques (ITSM), est une interruption non planifiée d'un service ou une réduction de sa qualité. La [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management) est la pratique qui rétablit le service normal aussi vite que la sécurité le permet. Dans ITIL 4, la pratique s'appelle gestion des incidents et figure parmi les pratiques de gestion des services du cadre [ITIL](https://en.wikipedia.org/wiki/ITIL). Ses contreparties agiles sont l'habitude de l'équipe de traiter le travail non planifié comme un flux de travail à part entière, et les pratiques d'astreinte et de revue sans blâme issues de l'[ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la discipline qui consiste à exploiter des services avec des méthodes d'ingénierie logicielle.

Le temps est la façon la plus naturelle de décrire un incident, et la plus couramment mal utilisée. Un incident unique traverse plusieurs étapes. Quelque chose casse, une supervision ou un utilisateur le remarque, une personne accuse réception de l'alerte, quelqu'un commence le travail, le service est rétabli pour les utilisateurs, et le ticket est clos une fois la cause traitée ou différée. Chaque écart entre deux de ces événements est une mesure distincte, avec un responsable distinct, une cause de retard distincte et un remède distinct. Appeler tout cela « temps de résolution » cache l'endroit où vit le retard.

Ce sujet couvre les mesures de temps écoulé qui suivent un incident du début à la fin : le **temps de détection**, le **temps d'accusé de réception**, le **temps de première réponse**, le **temps de rétablissement** et le **temps de résolution**. Il couvre aussi l'âge des incidents ouverts, le nombre de fois qu'un incident change de mains et les problèmes statistiques du résumé le plus connu, le temps moyen de rétablissement ou de résolution (MTTR). Les décomptes, les catégories et la priorité sont traités ailleurs (voir le sujet 3.2, Volume et priorité des incidents). Les incidents importants et inhabituels ont leurs propres mesures (voir le sujet 3.4, Métriques des incidents majeurs).

### Termes employés dans ce sujet

- **Temps de détection (TTD).** Temps écoulé entre le moment où la défaillance a commencé à affecter les utilisateurs et celui où l'organisation l'a connue, par la supervision ou par un signalement d'utilisateur.
- **Temps d'accusé de réception (TTA).** Temps écoulé entre le déclenchement de l'alerte ou la création du ticket et le moment où une personne ou une équipe nommée en accepte la responsabilité.
- **Temps de première réponse.** Temps écoulé entre l'enregistrement de l'incident et la première action ou le premier message significatif adressé à l'utilisateur touché. Une réponse automatique ne compte pas.
- **Temps de rétablissement.** Temps écoulé entre le début de l'impact sur les utilisateurs et le moment où les utilisateurs peuvent de nouveau utiliser le service, même si la cause sous-jacente n'est que contournée.
- **Temps de résolution.** Temps écoulé entre l'enregistrement de l'incident et sa clôture parce que le service est rétabli et que l'utilisateur l'a confirmé ou a eu une chance raisonnable de le confirmer.
- **Temps moyen de rétablissement ou de résolution (MTTR).** La moyenne arithmétique de l'une de ces durées sur un ensemble d'incidents. La lettre R se lit réparation, récupération, rétablissement, résolution ou réponse selon qui parle, ce qui est le premier problème de l'abréviation. L'[article de Wikipedia sur le temps moyen de réparation](https://en.wikipedia.org/wiki/Mean_time_to_repair) liste les variantes.
- **Accord de niveau de service (SLA).** Un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement entre un fournisseur et un client sur le niveau de service, incluant souvent des temps cibles de réponse et de résolution par priorité.

### Pourquoi la moyenne est un mauvais résumé

Les durées d'incidents ne sont pas symétriques. La plupart des incidents sont courts, quelques-uns sont très longs, et les longs dominent toute moyenne. Les durées de ce genre sont souvent bien décrites par une forme asymétrique à droite comme la [loi log-normale](https://en.wikipedia.org/wiki/Log-normal_distribution). Dans des données asymétriques, la moyenne peut se situer bien au-dessus de l'aspect d'un incident typique, et une seule longue panne peut la déplacer plus qu'un mois d'améliorations.

L'équipe SRE de Google a publié une analyse de ce problème. Elle soutient que, pour les ensembles de données d'incidents qu'elle a étudiés, la dispersion des durées d'incidents est assez large pour que le MTTR puisse cacher de vraies améliorations ou montrer des changements qui ne sont que du bruit, et elle recommande de regarder plutôt les distributions (Davidovič, 2021, cité dans les références). Le raisonnement repose sur des statistiques bien connues : vous pouvez donc le vérifier sur vos propres données sans vous fier à la conclusion de quiconque : tracez vos durées d'incidents, calculez la moyenne et la [médiane](https://en.wikipedia.org/wiki/Median), et voyez l'écart entre les deux (voir le sujet 1.6, Culture statistique pour les métriques de service).

L'alternative, ce sont les [percentiles](https://en.wikipedia.org/wiki/Percentile). La médiane dit ce qu'un utilisateur typique a attendu. Le 85e ou le 95e percentile dit combien de temps les malchanceux ont attendu. Les clients se souviennent de la longue attente, pas de la moyenne : un engagement en percentile comme « neuf incidents sur dix de cette priorité rétablis dans un temps énoncé » correspond bien mieux à leur expérience qu'une moyenne.

### En quoi les visions ITIL et agile diffèrent

La vision ITIL part généralement d'une priorité et d'une cible. L'impact et l'urgence fixent une priorité, la priorité fixe des temps cibles de réponse et de résolution, et un accord de niveau de service peut attacher des conséquences à leur dépassement. C'est ordonné et facile à auditer, et sujet au détournement que les cibles invitent (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

La vision agile et SRE part de l'impact sur les utilisateurs et du flux. Elle demande avec quelle rapidité l'équipe limite le préjudice, quelle part du temps écoulé d'un incident était du travail actif et quelle part de l'attente, et ce que l'équipe a appris. Elle préfère les mesures d'impact (utilisateurs touchés, minutes de service dégradé) aux mesures d'état de ticket, et traite l'horloge du ticket comme un substitut commode mais imparfait. Les deux visions sont compatibles. Utilisez la structure de priorité d'ITIL pour décider quoi mesurer et pour qui, et la pensée en termes de flux et d'impact pour décider si le chiffre signifie quelque chose.

## Principes clés

- **Nommez l'étape, pas « la résolution ».** Détecter, accuser réception, répondre, rétablir et résoudre sont des questions différentes avec des responsables différents. Rapportez chacune sous son propre nom.
- **Écrivez les deux horloges.** Chaque mesure de temps énonce quel événement la démarre, lequel l'arrête et quels états la suspendent. L'essentiel du détournement vit dans ces frontières.
- **Rapportez des distributions.** Montrez la médiane, un percentile élevé et l'âge du plus vieil incident ouvert. Évitez une moyenne isolée, que des données asymétriques rendent peu fiable.
- **Mesurez le rétablissement séparément de la clôture.** Les utilisateurs se soucient du moment où le service est revenu. Le ticket peut se clore plus tard, une fois la cause traitée.
- **Appariez vitesse et durabilité.** Un rétablissement rapide que le même incident défait le lendemain n'est pas une amélioration. Montrez la récurrence et le taux de réouverture à côté de chaque mesure de temps.
- **Décrivez des équipes, des services et des systèmes.** Ne classez jamais des agents ou des ingénieurs individuels par temps de réponse ou de résolution.
- **Segmentez avant de comparer.** Comparez ce qui est comparable, par priorité et par service, car un chiffre mélangé met ensemble des réinitialisations de mot de passe et des pannes de base de données.

## Définitions des métriques

Chaque ligne énonce ses horloges. Le temps calendaire et le temps ouvré sont différents : dites lequel vous utilisez. Là où une mesure utilise des percentiles, le tableau donne les 50e et 95e, et les équipes peuvent ajouter le 85e.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Temps de détection | Durée pendant laquelle une défaillance a affecté les utilisateurs avant que l'organisation ne le sache | L'horloge démarre au premier instant d'impact sur les utilisateurs (tiré des données de supervision ou du début d'impact confirmé consigné dans la revue) ; s'arrête à la première alerte ou au premier signalement d'utilisateur. Rapporté en médiane et 95e percentile par service. Les incidents sans début connu sont comptés et rapportés à part, non écartés | minutes | Plateforme de supervision et d'alerte ; enregistrement d'incident avec un champ de début d'impact | Gestion des incidents ; supervision et gestion des événements | Travail sur l'observabilité et la qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) | Mensuelle |
| Temps d'accusé de réception | Durée pendant laquelle une alerte ou un ticket levé attend avant qu'une personne en soit responsable | L'horloge démarre quand l'alerte se déclenche ou que le ticket est enregistré ; s'arrête quand une personne ou une équipe nommée l'accepte. L'affectation automatique n'arrête pas l'horloge. Rapporté en médiane et 95e percentile par priorité | minutes | Outil d'appel ; historique d'affectation de l'outil ITSM | Gestion des incidents ; centre de services | Réponse d'astreinte dans une rotation SRE | Mensuelle |
| Temps de première réponse | Durée pendant laquelle l'utilisateur attend une première réponse humaine utile | L'horloge démarre quand l'incident est enregistré ; s'arrête au premier message ou à la première action humaine qui traite le signalement. Les accusés de réception automatiques et les reçus types sont exclus. Horloge en heures ouvrées énoncée | minutes ou heures ouvrées | Journal de communication de l'outil ITSM | Centre de services ; gestion des incidents | Retour rapide à l'utilisateur, comme dans un accord de travail | Hebdomadaire |
| Temps de rétablissement | Durée pendant laquelle les utilisateurs ont été privés d'un service fonctionnel | L'horloge démarre au début de l'impact sur les utilisateurs ; s'arrête quand les utilisateurs peuvent de nouveau utiliser le service, y compris par contournement ou retour arrière. La cause corrigée plus tard ne la prolonge pas. Rapporté en médiane et 95e percentile par priorité et par service | minutes ou heures | Enregistrement d'incident avec horodatages de début d'impact et de rétablissement ; supervision | Gestion des incidents | Temps de rétablissement au sens DORA, lu comme une distribution (voir le sujet 2.8, Métriques DORA) | Mensuelle |
| Temps de résolution | Durée pendant laquelle l'enregistrement d'incident est resté ouvert avant d'être clos | L'horloge démarre quand l'incident est enregistré ; s'arrête quand il est clos après le rétablissement et la confirmation de l'utilisateur ou une attente raisonnable. Le temps en « attente du client » est montré comme une part distincte rapportée et non soustrait du chiffre vedette. Rapporté en médiane et 95e percentile par priorité | heures ou heures ouvrées | Historique des statuts de l'outil ITSM | Gestion des incidents | Temps de cycle du travail non planifié (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Mensuelle |
| Âge du plus vieil incident ouvert | Depuis combien de temps l'incident ouvert le plus ancien est ouvert | Maintenant moins l'heure d'enregistrement, pour chaque incident ouvert, en listant les plus anciens par priorité. Les états de suspension ne sont pas soustraits | jours | Liste des incidents ouverts de l'outil ITSM | Gestion des incidents | Âge de l'élément de travail sur le tableau de l'équipe (voir le sujet 2.1, Mesures de flux) | Hebdomadaire |
| Part de temps actif | Proportion du temps écoulé d'un incident passée en travail actif plutôt qu'en attente | Somme du temps dans les états actifs / temps total entre l'enregistrement et la clôture, pour les incidents clos dans la période. Les états actifs sont ceux où une personne travaille l'incident ; les états d'attente sont listés dans la définition | pourcentage | Historique des statuts de l'outil ITSM | Gestion des incidents | Efficacité du flux (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Trimestrielle |
| Nombre de réaffectations | Nombre de fois qu'un incident change d'équipe responsable avant le rétablissement | Nombre de changements de groupe d'affectation entre l'enregistrement et le rétablissement, résumé en médiane et part des incidents avec trois changements ou plus. Compté par service et par priorité, jamais par agent | nombre | Historique d'affectation de l'outil ITSM | Gestion des incidents ; centre de services | Nombre de transmissions (voir le sujet 9.3, Métriques de collaboration et de transmission) | Mensuelle |

Deux remarques sur les données. Premièrement, un temps de rétablissement ne vaut que ce que vaut son heure de début. Beaucoup d'enregistrements d'incidents saisissent le moment où quelqu'un a tapé le ticket, qui peut retarder de plusieurs heures le vrai début de l'impact. Si votre outil n'a pas de champ de début d'impact, ajoutez-en un, et traitez les débuts estimés comme des estimations (voir le sujet 1.5, Sources de données et instrumentation). Deuxièmement, quand vous comparez des périodes, gardez les mêmes définitions de priorité, sinon la courbe de tendance reflétera le reclassement.

## Recommandations

### Définir les horloges

**1. Rédigez une fiche d'horloge pour chaque mesure de temps.** Pour chaque étape, listez l'événement de début, l'événement de fin, les états qui suspendent l'horloge, la base de temps (calendaire ou heures ouvrées) et les exclusions. Gardez-la dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Séparez le rétablissement de la clôture.** Consignez le moment où le service est revenu pour les utilisateurs comme un horodatage à part, distinct de la clôture du ticket. Le rétablissement est ce que les utilisateurs ressentent, et la clôture inclut la vérification, la documentation et le traitement de la cause. Les équipes qui utilisent un seul horodatage pour les deux sont récompensées de clore tôt les tickets ou punies d'un suivi soigneux.

**3. Consignez le début d'impact, pas seulement l'heure d'enregistrement.** Demandez aux intervenants de renseigner le moment où les utilisateurs ont d'abord ressenti l'effet, à partir des données de supervision si possible. Marquez le champ comme estimé quand il l'est. Le temps de détection n'a aucun sens sans lui, et le temps de rétablissement est faussé par son absence.

**4. Limitez les états de suspension et rapportez leur usage.** Attendre un client ou un fournisseur est parfois légitime. Autorisez une courte liste nommée d'états de suspension, exigez un motif et montrez la part du temps d'incident passée dans chacun. Une part croissante de temps suspendu est un signe de dérive, non de rapidité.

### Rapporter honnêtement

**5. Remplacez la moyenne par la médiane et un percentile élevé.** Montrez les 50e et 95e percentiles de chaque étape, par priorité, comme une série temporelle. Montrez le nombre d'incidents derrière chaque point, car un percentile sur dix incidents est un chiffre faible. Là où les décomptes sont petits, tracez les incidents individuels comme des points et omettez la ligne de synthèse.

**6. Montrez l'âge des plus vieux incidents ouverts.** Un graphique des durées d'incidents clos est aveugle aux incidents encore ouverts, qui sont les pires. Listez chaque semaine les plus vieux incidents ouverts par priorité. C'est difficile à améliorer sans terminer le travail, ce qui en fait un compagnon utile de tout graphique de temps de résolution.

**7. Segmentez par priorité et par service.** Un temps de résolution mélangé monte quand le mélange glisse vers des incidents complexes, même si chaque sorte d'incident est traitée plus vite. Comparez à l'intérieur d'une priorité et d'un service, et montrez le mélange à côté du temps (voir le sujet 3.2, Volume et priorité des incidents). Ne tirez pas de conclusions d'un mois où le mélange a changé.

**8. Utilisez des limites de contrôle pour séparer le signal du bruit.** Les durées d'incidents varient beaucoup d'une semaine à l'autre sans que rien ne change. Une carte de contrôle, avec des limites calculées sur une période stable, montre quand un glissement est assez grand pour mériter une explication (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Apparier vitesse et durabilité

**9. Montrez les taux de réouverture et de récurrence à côté de chaque mesure de temps.** Le taux de réouverture est la part des incidents rouverts dans une fenêtre énoncée. La récurrence est le même service et le même symptôme qui réapparaissent dans une fenêtre. Si le temps de rétablissement baisse pendant que la récurrence monte, l'équipe applique des rustines rapides. Envoyez les incidents récurrents à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**10. Mesurez l'attente et les transmissions, car c'est là que passe le temps.** Pour la plupart des services, une grande part du temps écoulé d'un incident est de l'attente d'une personne, d'une décision ou d'un fournisseur, plutôt que du travail. La part de temps actif et le nombre de réaffectations montrent où regarder. Le remède à un long temps de résolution est souvent une règle de routage plus claire ou une astreinte partagée, pas une frappe plus rapide.

**11. Utilisez des objectifs sur les percentiles, avec un humain dans la boucle.** Si vous avez besoin d'un objectif, énoncez-le comme un engagement en percentile pour une priorité, comme « neuf incidents de priorité 2 sur dix rétablis dans un temps énoncé », et convenez-en avec les personnes qui le tiendront. Revoyez les dépassements comme des questions sur le système, non comme des fautes de la personne d'astreinte (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**12. Interrogez les utilisateurs sur l'expérience.** Une courte enquête sur un échantillon d'incidents clos, et une lecture des commentaires, dira si le chiffre correspond à ce que l'attente a semblé. Les utilisateurs se soucient souvent davantage d'une communication opportune que de la minute exacte du rétablissement (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Temps de détection | Fixer le début d'impact plus tard qu'il n'était ; élargir les seuils d'alerte pour que moins de défaillances comptent comme incidents ; ne compter que les incidents que la supervision a attrapés | Part des incidents d'abord signalés par les utilisateurs plutôt que par la supervision ; revue périodique des estimations de début d'impact face aux données de supervision |
| Temps d'accusé de réception | Affecter ou accuser réception automatiquement pour arrêter l'horloge ; accuser réception de l'alerte puis ne rien faire | Temps de première réponse et temps de rétablissement pour les mêmes incidents ; échantillon d'alertes acquittées sans activité ultérieure |
| Temps de première réponse | Envoyer une réponse type ou d'un mot pour arrêter l'horloge | Revue d'un échantillon de premières réponses pour juger du fond ; contacts répétés et commentaires d'enquête |
| Temps de rétablissement | Déclarer le service rétabli avant que les utilisateurs puissent l'utiliser ; rétablir en supprimant le symptôme ; consigner des pannes comme maintenance planifiée | Récurrence dans une fenêtre ; impact signalé par les utilisateurs après l'heure de rétablissement ; part des incidents réétiquetés après coup |
| Temps de résolution | Déplacer des tickets vers « en attente du client » ou « en suspens » ; clore après une seule tentative de joindre l'utilisateur ; scinder un incident en enfants pour clore le parent plus tôt | Part du temps dans les états de suspension ; taux de réouverture ; âge du plus vieil incident ouvert ; lecture d'un échantillon de notes de clôture |
| Âge du plus vieil incident ouvert | Clore et relever à nouveau le plus vieux ticket ; le reclasser comme problème ou demande pour le retirer de la liste | Relier les doublons aux originaux et rapporter l'âge lié ; décompte des incidents convertis en problèmes ou en demandes chaque période |
| Part de temps actif | Consigner un travail bref et sans signification pour marquer le temps comme actif ; passer à des états actifs sans effort | Comparer le temps actif à des résultats comme le temps de rétablissement ; échantillon de notes de travail |
| Nombre de réaffectations | Rouvrir sous la même équipe au lieu de transmettre ; passer le travail par un canal parallèle pour que l'outil ne montre aucune transmission | Temps de rétablissement et satisfaction des utilisateurs ; observation périodique de la manière dont le travail circule entre équipes |

Une lecture saine montre des médianes et des percentiles de queue qui évoluent ensemble, une petite part stable de temps suspendu, peu d'incidents d'abord signalés par les utilisateurs, une récurrence en baisse et des commentaires d'enquête qui concordent avec les données des tickets. Traitez une amélioration vedette qui arrive seule comme une invite à une revue de détournement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Temps moyen de rétablissement | Familier ; un seul chiffre ; facile à suivre dans le temps | Dominé par quelques longs incidents ; cache le vrai changement ; mauvais pour les petits échantillons |
| Médiane plus un percentile élevé | Décrit l'expérience typique et l'expérience malchanceuse ; résiste aux valeurs aberrantes | Demande assez d'incidents ; deux chiffres à expliquer |
| Tracer chaque incident | Montre toute la forme et les valeurs aberrantes ; honnête à faible volume | Plus difficile à lire à fort volume ; demande un animateur |
| Objectifs par priorité | Attentes claires ; soutient les contrats et l'escalade | Invite au reclassement et à la suspension d'horloge ; peut pousser l'effort vers la frontière de l'objectif |
| Mesures d'horloge de ticket | Peu coûteuses, disponibles dans tous les outils ITSM | Mesurent le ticket, non l'expérience de l'utilisateur ; sensibles au flux de statuts |
| Mesures fondées sur l'impact | Proches de ce que ressentent les utilisateurs ; résistent aux astuces de ticket | Demandent des données de supervision et un champ de début d'impact ; plus difficiles à auditer |

La réponse pragmatique est de garder l'horloge du ticket parce que tous les outils l'ont, d'ajouter un horodatage de rétablissement fondé sur l'impact là où la supervision le permet, et d'utiliser des distributions pour les deux. La moyenne est acceptable comme description approximative d'un grand ensemble stable d'incidents semblables, et elle ne doit jamais être le seul chiffre de la page.

## Questions à discuter avec votre équipe

**1. Quelle étape d'un incident prend le plus de temps chez nous, et comment le savons-nous ?**
Dessinez la chronologie de l'incident sur un tableau avec les étapes du début d'impact à la clôture. Prenez les dix derniers incidents et marquez la durée de chaque étape, à partir des données de l'outil et de la mémoire des intervenants. L'animateur doit chercher l'étape où le temps se concentre, qui est souvent l'attente d'une transmission ou d'une décision, non le travail technique. Convenez de l'étape qui mérite l'attention en premier.

**2. Où notre horloge démarre-t-elle et s'arrête-t-elle, et qui l'a décidé ?**
Demandez à chacun de dire quand, selon lui, un incident a « commencé » et quand il s'est « terminé ». Les réponses différeront, et les différences sont le constat. Comparez-les avec les champs de l'outil et le flux de statuts. Consignez les définitions convenues dans le registre des métriques et notez où l'outil ne peut pas encore les soutenir.

**3. Que montreraient nos médianes et nos 95e percentiles que notre moyenne cache ?**
Avant la réunion, calculez la moyenne, la médiane et le 95e percentile des incidents du dernier trimestre par priorité. Montrez-les côte à côte et tracez les durées. Demandez ce que l'équipe conclurait de chacun. L'animateur doit repérer si un ou deux incidents déplacent la moyenne et discuter de la question de savoir si l'équipe croit que la médiane représente l'attente d'un utilisateur typique.

**4. Quel temps passons-nous à attendre plutôt qu'à travailler, et pourquoi ?**
Choisissez trois longs incidents et retracez leur historique de statuts. Comptez les heures dans les états actifs et celles dans les états d'attente, et notez qui ou quoi était attendu. Demandez quelles attentes pourraient être raccourcies par une décision, un chemin d'escalade plus clair ou une astreinte partagée.

**5. Si l'on nous demandait de réduire d'un quart le temps de résolution, comment le ferions-nous sans aider les utilisateurs ?**
C'est la revue de détournement en miniature. Listez chaque manœuvre qui améliorerait le chiffre sans améliorer le service, comme suspendre l'horloge, clore tôt ou réétiqueter les priorités. Pour chaque manœuvre, demandez si un garde-fou l'attraperait. La liste est le début de votre colonne de vecteurs de détournement et montre où les définitions doivent être resserrées.

**6. Comment savons-nous qu'un rétablissement plus rapide était réel ?**
Demandez les preuves : récurrence, réouverture, commentaires des utilisateurs et tout incident ultérieur de même symptôme. Regardez une amélioration récente et demandez si elle a tenu un mois plus tard. L'animateur doit orienter le groupe vers les corrections durables. Terminez en décidant quelle mesure de durabilité rejoint le tableau de bord.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit qui exploitent leurs propres services voient le temps d'incident comme un coût du travail non planifié qui déplace le travail planifié. Suivez la part de chaque période de flux prise par les incidents, et traitez les incidents répétés comme des éléments de backlog pour l'équipe responsable. Les pratiques de publication qui rendent le retour arrière rapide raccourcissent le rétablissement : le temps d'incident est donc en partie une mesure de livraison (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les horloges et ressentent la pression des objectifs. Elles doivent publier la fiche d'horloge, auditer l'usage des états de suspension, rapporter des médianes et des percentiles de queue par priorité, et tenir chaque semaine une liste des plus vieux incidents ouverts. La charge d'astreinte et la qualité des alertes façonnent les temps d'accusé de réception et de détection : regardez-les donc ensemble (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants doivent demander quelle étape est la plus lente et ce qui est fait pour y remédier, non pourquoi un chiffre est rouge. Ils doivent attendre un rapport en percentiles, une mesure de durabilité à côté de toute mesure de vitesse et une explication quand les définitions changent. Le financement de la supervision, des runbooks et du travail sur les problèmes rapporte souvent plus que la pression sur les intervenants, parce qu'il réduit le retard que les intervenants ne maîtrisent pas.

### Clients et utilisateurs

Les utilisateurs éprouvent l'attente, la qualité de la communication et le retour ou non du problème. Ils voient rarement les noms d'étapes. Donnez-leur une première réponse honnête, dites-leur à quoi s'attendre et tenez-les informés selon un calendrier. Leurs commentaires d'enquête et leurs contacts répétés sont le meilleur contrôle de la véracité de l'horloge du ticket.

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une plateforme de commandes, un service de comptes clients et un système d'entrepôt interne. Les équipes produit détiennent leurs services et partagent une rotation d'astreinte avec un petit groupe d'exploitation. Tous les chiffres de cet exemple sont illustratifs.

La direction fixe un objectif de « temps moyen de résolution inférieur à quatre heures » pour les incidents de priorité 2. Au premier trimestre, le tableau de bord montre une moyenne de 3,8 heures, et l'objectif semble atteint. Le personnel de l'entrepôt dit que certaines pannes semblent durer toute la journée. La responsable de l'exploitation trace les 41 incidents de priorité 2 (illustratif) du trimestre et trouve une médiane de 1,5 heure et un 95e percentile de 11 heures. Trois incidents rendent compte de l'essentiel de la longue queue.

Elle retrace les trois longs incidents. Chacun a passé l'essentiel de son temps en « attente du fournisseur » ou « attente du client ». Dans deux d'entre eux, le ticket avait été clos puis relevé comme nouvel incident quand l'original « dépassait » son délai, ce qui réinitialisait l'horloge. Un troisième a impliqué quatre réaffectations entre équipes sur deux jours. Un échantillon de notes de clôture montre que 6 tickets sur 30 examinés (illustratif) ont été clos après une seule tentative de joindre l'utilisateur.

L'équipe fait quatre changements. Elle ajoute un champ de début d'impact et un horodatage de rétablissement au formulaire d'incident. Elle rapporte la médiane, les 85e et 95e percentiles par priorité, et les plus vieux incidents ouverts chaque semaine. Elle montre sur la même page la part de temps dans les états de suspension et le taux de récurrence. Et elle relie les tickets relevés à nouveau à leurs originaux pour que l'âge se reporte.

À la revue suivante, la moyenne vedette est montée à 4,6 heures parce que les tickets relevés à nouveau comptent désormais en entier. L'équipe explique la hausse à la direction comme une correction. Le 95e percentile et le plus vieux ticket ouvert sont maintenant les chiffres sur lesquels elle travaille, et le nombre de réaffectations pointe une lacune de routage entre le service de commandes et le système d'entrepôt. Elle convient d'ajouter un alias d'astreinte partagé et de revoir l'effet au trimestre suivant plutôt que de fixer immédiatement un nouvel objectif.

## Agilité, IA, automatisation et analytique

### Agilité

Une courte boucle de retour après chaque incident significatif, avec les parties prenantes impliquées, aide l'équipe à améliorer ses horloges. La précaution est que des objectifs de temps de réponse produisent des accusés de réception rapides et vides : appariez-les donc avec le temps de rétablissement.

### IA

L'IA peut accélérer la première réponse, suggérer des corrections et résumer les incidents, ce qui raccourcit le temps de première réponse alors que le temps de rétablissement peut ne pas changer. Rapportez les deux, plus la part des incidents où une suggestion de l'IA a été utilisée et la part qui est revenue. La précaution est qu'une réponse rapide de l'IA qui est fausse ajoute du travail : comptez donc les incidents rouverts.

### Automatisation

Calculez chaque horloge à partir des horodatages d'événements de l'outil, avec les motifs de suspension consignés, et mesurez le diagnostic et la remédiation automatisés sur les mauvaises actions autant que sur le temps gagné. La précaution est qu'une automatisation qui rétablit le service sans consigner la cause cache l'enregistrement de problème.

### Analytique

Rapportez la médiane et un percentile élevé pour chaque horloge avec le plus vieil incident ouvert, et montrez combien d'incidents se tiennent derrière eux. La décision éclairée est où les utilisateurs attendent le plus longtemps. La précaution est que les définitions d'horloges diffèrent d'un outil à l'autre : écrivez donc les événements de début et de fin avant de comparer des équipes.

## Éclairage sectoriel

**Startup.** Le volume est faible : les percentiles sont donc bruités et un graphique de chaque incident vaut mieux qu'une synthèse. Une seule personne détecte souvent, répond et rétablit, de sorte que la séparation des étapes compte moins qu'une chronologie écrite de chaque incident. Ajoutez une note de début d'impact à chaque compte rendu post-incident et calculez de simples médianes quand il y a assez d'incidents.

**Petite entreprise.** Un prestataire de services gérés ou un généraliste informatique unique peut traiter les incidents, et le contrat du prestataire peut définir des cibles de réponse et de résolution. Lisez attentivement les horloges du contrat, car elles diffèrent souvent de l'expérience de vos utilisateurs. Tenez un court journal du début d'impact et du rétablissement pour les incidents qui comptent, et demandez au prestataire les enregistrements sous-jacents, puisqu'un chiffre de synthèse cache les horloges.

**Grande entreprise.** De nombreuses équipes, fournisseurs et schémas de priorité rendent la comparaison tentante et trompeuse. Standardisez les définitions d'horloges et le sens des priorités dans l'organisation, publiez des distributions plutôt que des moyennes et segmentez par service. Surveillez la dérive des états de suspension et le reclassement, qui croissent avec le nombre de couches de rapport.

**Gouvernement et secteur public.** Les contrats, les rapports légaux et l'audit peuvent fixer les horloges et les définitions de priorité. Respectez ces obligations telles qu'écrites, et gardez à côté une seconde vue orientée utilisateur, pour que la conformité ne cache pas une mauvaise expérience. Soyez ouvert sur les définitions et sur les corrections quand une règle d'horloge change (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût de ce sujet est surtout de la conception et de la discipline. Il faut quelques heures pour rédiger les fiches d'horloge, un peu de configuration pour ajouter un champ de début d'impact et un horodatage de rétablissement, et un effort modeste pour construire les rapports en percentiles. Là où l'outil ITSM ou une plateforme de supervision détient déjà les horodatages, l'extraction est une tâche unique. Le coût récurrent est une revue mensuelle et un échantillon trimestriel d'incidents clos.

Le rendement vient de meilleures décisions et de moins de reprise. Le rapport en distributions montre si une amélioration a marché, et le rapport par étape oriente l'effort vers le vrai retard, comme les transmissions, les lacunes de détection ou les attentes de fournisseurs. Les mesures de durabilité évitent la fausse économie des rustines rapides qui reviennent comme incidents répétés. Mesurez votre propre référence pendant un trimestre, faites un changement et comparez les distributions.

## Anti-modèles et pièges

- **Un MTTR unique sur le tableau de bord de direction.** La moyenne de données asymétriques trompe. Montrez la médiane, un percentile élevé et le plus vieil incident ouvert, et dites combien d'incidents sont derrière chaque point.
- **Mélanger priorités et services.** Un glissement de mélange ressemble à un changement de performance. Segmentez par priorité et par service, et montrez le mélange.
- **Arrêter l'horloge avec des états de suspension.** Le temps disparaît dans « attente » et « en suspens ». Listez les états autorisés, exigez des motifs et rapportez la part de temps dans chacun.
- **Clore et relever à nouveau des tickets.** Cela réinitialise l'âge et cache le long incident. Reliez les tickets relevés à nouveau à leurs originaux et rapportez l'âge lié.
- **Utiliser un seul horodatage pour le rétablissement et la clôture.** Les équipes sont alors récompensées d'une clôture prématurée ou pénalisées d'un suivi soigneux. Consignez et rapportez les deux.
- **Classer des agents ou des ingénieurs par temps de résolution.** Cela récompense les tickets faciles et le tri des contacts, et décourage l'entraide et l'escalade. Rapportez uniquement par équipe et par service.
- **Des objectifs sans mesures de durabilité.** Un correctif rapide qui échoue demain ressemble à un succès. Montrez la récurrence et le taux de réouverture à côté de chaque objectif.
- **Traiter de petits échantillons comme des tendances.** Un 95e percentile tiré d'une poignée d'incidents est une conjecture. Tracez les incidents individuels et attendez plus de données avant de tirer une ligne.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chacun mesure différemment ; un seul « temps de résolution » | Horloges écrites pour certaines équipes ; étapes en partie séparées | Une fiche d'horloge pour toutes les étapes, avec les états de suspension listés | Définitions revues et changements consignés avec leurs motifs | Définitions alignées avec les fournisseurs et les clients, révisées quand elles cessent d'éclairer les décisions |
| Qualité des données | Notes manuelles ; début d'impact inconnu | Horodatages de l'outil pour l'enregistrement et la clôture | Début d'impact et rétablissement consignés pour les incidents prioritaires | Données auditées par échantillonnage ; estimations signalées | Données de supervision et d'ITSM jointes automatiquement et jugées fiables entre équipes |
| Pratique statistique | Moyenne seule | Moyenne et médiane montrées | Médiane et percentile élevé par priorité et par service | Limites de contrôle utilisées ; mesures de durabilité appariées | Distributions reliées à l'expérience des utilisateurs et utilisées pour décider où investir |
| Usage pour l'amélioration | Chiffres utilisés pour poursuivre des individus | L'équipe voit ses propres chiffres | L'équipe revoit chaque mois les temps d'étape et l'attente | Les étapes lentes mènent à un travail d'amélioration financé | L'amélioration est partagée entre équipes et fournisseurs et les mesures évoluent |

## Liste de vérification

- [ ] Chaque étape (détecter, accuser réception, répondre, rétablir, résoudre) a une règle écrite de début, de fin et de suspension.
- [ ] Le début d'impact et l'heure de rétablissement sont consignés comme champs distincts pour les incidents prioritaires.
- [ ] Les rapports montrent la médiane et un percentile élevé, par priorité et par service.
- [ ] Le nombre d'incidents derrière chaque point rapporté est montré.
- [ ] Les plus vieux incidents ouverts sont listés chaque semaine.
- [ ] Les états de suspension sont une courte liste nommée et leur part de temps est rapportée.
- [ ] Le taux de réouverture et la récurrence sont montrés à côté de chaque mesure de temps.
- [ ] Les tickets relevés à nouveau sont reliés à leurs originaux pour que l'âge se reporte.
- [ ] Aucune mesure de temps n'est utilisée pour classer des agents ou des ingénieurs individuels.
- [ ] Un échantillon d'incidents clos est lu chaque trimestre pour en vérifier l'honnêteté.
- [ ] Les commentaires d'enquête des clients sont lus à côté des données des tickets.

## Prompts d'IA

**Comparez la moyenne et les percentiles de nos durées d'incidents.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Rédigez une fiche d'horloge pour nos mesures de temps d'incident.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Trouvez où va le temps écoulé dans quelques longs incidents.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Menez une revue de détournement de nos objectifs de temps d'incident.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins et les garde-fous associés d'une mesure de temps d'incident que vous allez rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un changement de ce sujet garde cohérents le modèle, le tableau de détournement et les renvois.

## Idées clés

- Un incident a des étapes, et chaque étape a sa propre horloge, son responsable et son remède. Nommez l'étape que vous mesurez.
- Les durées d'incidents sont asymétriques : la moyenne trompe donc. Rapportez la médiane, un percentile élevé et l'âge du plus vieil incident ouvert.
- Écrivez où chaque horloge démarre et s'arrête, consignez le début d'impact et le rétablissement séparément de la clôture du ticket, et limitez les états de suspension.
- Appariez chaque mesure de vitesse avec une mesure de durabilité comme la récurrence et le taux de réouverture.
- Décrivez des équipes et des services, jamais des agents individuels, et lisez un échantillon d'incidents clos pour vérifier que les chiffres sont honnêtes.

## Références et lectures complémentaires

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
