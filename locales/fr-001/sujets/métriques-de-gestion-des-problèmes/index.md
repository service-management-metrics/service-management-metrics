# Métriques de gestion des problèmes

**Les métriques de gestion des problèmes montrent si une équipe supprime les causes de ses incidents ou ne fait que réparer leurs symptômes : mesurez donc combien de causes sont trouvées, à quelle vitesse elles sont corrigées pour de bon et si les mêmes incidents reviennent.**

## Vue d'ensemble et motivation

Une équipe qui rétablit vite le service peut quand même être coincée sur un tapis roulant. La même défaillance revient toutes les quelques semaines, les mêmes personnes sont appelées, et les chiffres d'incidents paraissent sains parce que chaque réparation est rapide. La gestion des problèmes est la pratique qui descend du tapis roulant. Elle regarde à travers les incidents, trouve la cause sous-jacente et obtient que cette cause soit supprimée ou contenue. Ce sujet couvre les chiffres qui disent si ce travail a lieu et s'il fonctionne.

Quatre termes portent le sujet. Un **incident** est une interruption non planifiée d'un service ou une réduction de sa qualité, au sens où le cadre [ITIL](https://en.wikipedia.org/wiki/ITIL) emploie le mot (voir le sujet 3.3, Temps de réponse et de résolution des incidents). Un **problème** est la cause sous-jacente, ou supposée, d'un ou de plusieurs incidents. Une **erreur connue** est un problème dont la cause est comprise et pour lequel un contournement est consigné, conservé dans une [base de données d'erreurs connues](https://en.wikipedia.org/wiki/Known_error_database) afin que la prochaine personne confrontée au symptôme puisse la trouver. Un [contournement](https://en.wikipedia.org/wiki/Workaround) réduit ou évite l'impact d'un incident ou d'un problème sans en supprimer la cause. La correction définitive est le changement qui supprime la cause.

Trouver la cause est le travail de l'[analyse des causes racines](https://en.wikipedia.org/wiki/Root_cause_analysis). Les techniques courantes comprennent les [cinq pourquoi](https://en.wikipedia.org/wiki/Five_whys), le [diagramme d'Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) et le [diagramme de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), qui classe les causes selon leur fréquence ou le mal qu'elles font. Les systèmes complexes ont souvent plusieurs causes contributives et aucun coupable unique : un bon enregistrement de problème nomme donc les facteurs qui, une fois supprimés, arrêtent la récurrence, et dit le degré de confiance de l'équipe.

Les métriques comptent parce que la gestion des problèmes a un piège de rapport intégré. Ouvrir un enregistrement de problème est facile et donne l'impression d'être productif. En clore un est facile aussi, puisqu'un enregistrement peut être clos avec une note. Aucun des deux événements ne montre que quoi que ce soit s'est amélioré pour les utilisateurs. Les mesures qui valent d'être surveillées se trouvent plus en aval : les incidents reliés à un problème cessent-ils de revenir, les erreurs connues sont-elles réellement utilisées par les personnes d'astreinte, et combien de temps une cause diagnostiquée attend-elle sa correction.

Les visions ITIL et agile se rencontrent ici sans beaucoup de frictions. Dans ITIL 4, la gestion des problèmes est une pratique du système de valeur du service, proche de la gestion des incidents, de la maîtrise des changements et de la gestion des connaissances. Sa contrepartie agile est le flux de petites corrections fondées sur des preuves qui passent par le [backlog](https://en.wikipedia.org/wiki/Backlog) d'une équipe, la rétrospective qui repère un schéma et l'habitude de traiter le travail de fiabilité comme du travail de produit ordinaire. Là où la vision ITIL insiste sur les enregistrements, la responsabilité et l'erreur connue, la vision agile insiste sur les petits lots et le retour rapide. Les deux veulent moins d'incidents répétés, et ce résultat est la mesure à garder devant les yeux de chacun.

Ce sujet ne répète pas les horloges d'incidents (voir le sujet 3.3, Temps de réponse et de résolution des incidents) ni les mesures d'incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs), et il ne traite le suivi des revues que là où il alimente les problèmes (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Le backlog d'erreurs connues et l'idée plus large de [dette technique](https://en.wikipedia.org/wiki/Technical_debt) sont traités dans le sujet 4.6, Dette technique et erreurs connues. Ici, l'accent est mis sur l'enregistrement de problème et les résultats qu'il produit. Les mesures de rétablissement et d'échec fondées sur les déploiements vivent dans le sujet 2.8, Métriques DORA.

## Principes clés

- **Mesurez la récurrence, pas la paperasse.** Le test de la gestion des problèmes est que les incidents reliés cessent de revenir. Les décomptes d'enregistrements ouverts et clos décrivent l'activité et disent peu du résultat.
- **Séparez trois moments.** Détecter qu'un schéma existe, identifier sa cause et supprimer la cause sont des événements différents avec des horloges et des responsables différents. Les fusionner cache où se situe le retard.
- **Un contournement est une étape, non une fin.** Consignez-le, utilisez-le et suivez combien de temps il reste la seule protection. Un contournement qui vit pendant des années est une dette dont personne ne peut nommer le responsable.
- **Placez la correction là où est le travail.** Une correction définitive atterrit généralement comme un changement ou un élément de backlog détenu par une équipe produit. Mesurez-la dans le flux propre de l'équipe et montrez-la à l'équipe qui détient le service.
- **Reliez les incidents aux problèmes à la source.** Chaque mesure ici dépend du lien entre un incident et un problème. Si le lien est faible, les chiffres sont faibles.
- **Préférez les distributions et les cohortes aux moyennes.** Les durées de problèmes sont longues et asymétriques, et quelques vieux enregistrements dominent toute moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Décrivez des équipes et des services, jamais des personnes.** Les problèmes sont des propriétés du système. Un tableau de problèmes clos par analyste transforme une investigation en quota.

## Définitions des métriques

Toutes les horloges utilisent les horodatages de l'enregistrement de problème, des enregistrements d'incidents reliés et du changement ou de l'élément de backlog relié. Sauf indication contraire d'une ligne, les problèmes sont comptés par service et par équipe responsable, et les enregistrements fusionnés ou en double sont exclus. Les percentiles sont préférés aux moyennes pour toute durée. Les chiffres de l'exemple de ce sujet sont illustratifs.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problèmes ouverts et clos | Flux d'enregistrements de problèmes entrant dans l'état ouvert et en sortant, par service | Nombre ouverts dans la période et nombre clos dans la période, chacun par code de clôture (corrigé, risque accepté, doublon, non reproductible) ; les doublons sont montrés mais exclus du décompte « corrigé » | nombre par période | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes | Entrée et débit du backlog | Mensuelle |
| Âge du backlog de problèmes | Depuis combien de temps les problèmes ouverts attendent | Pour chaque problème ouvert, date de l'instantané moins date de création de l'enregistrement ; rapporter la médiane et le 85e percentile des problèmes ouverts et le plus vieux, par priorité | jours | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes | Âge de l'élément de travail sur le tableau | Mensuelle |
| Taux de liaison incident-problème | Part des incidents qui pointent vers un problème ou une erreur connue là où l'on s'attend à en trouver un | Incidents de la période avec un problème ou une erreur connue reliés / incidents de la période de priorité haute ou supérieure, rouverts ou d'une catégorie répétée ; les incidents clos comme erreur d'utilisateur ou doublons sont exclus | pourcentage | Enregistrements d'incidents et de problèmes de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Repérage de schémas en rétrospective | Mensuelle |
| Temps jusqu'à la cause racine | Temps qu'un problème diagnostiqué met à atteindre une cause consignée | L'horloge démarre à la création de l'enregistrement de problème et s'arrête quand la cause est consignée et qu'une seconde personne l'a revue ; les problèmes clos sans cause sont exclus et comptés à part ; rapporter la médiane et le 85e percentile | jours | Enregistrements de problèmes de l'outil ITSM et leur piste d'audit | Gestion des problèmes | Spike ou investigation à durée limitée | Mensuelle |
| Taux de réutilisation des erreurs connues | Fréquence à laquelle une erreur connue est utilisée quand un incident arrive | Incidents résolus avec une erreur connue reliée ou son contournement / incidents de la période dont le symptôme correspond à une erreur connue qui existait à l'époque ; les incidents sans erreur connue correspondante sont exclus | pourcentage | Liens d'incidents de l'outil ITSM ; usage des articles de connaissance | Gestion des connaissances ; gestion des problèmes | Usage des runbooks ou des guides de l'équipe | Mensuelle |
| Temps jusqu'à la correction définitive | Durée pendant laquelle un problème est exposé entre le diagnostic et le moment où la correction tourne en production | L'horloge démarre quand la cause est consignée et s'arrête quand le changement de correction relié est mis en œuvre et confirmé ; les problèmes clos comme risque accepté sont exclus et comptés à part ; rapporter la médiane et le 85e percentile | jours | Enregistrements de problèmes ; enregistrements de changements ou événements de déploiement de la chaîne | Gestion des problèmes ; maîtrise des changements | Temps de cycle de l'élément de correction | Mensuelle |
| Taux de récurrence après correction | Part des problèmes corrigés dont les symptômes reliés sont revenus | Problèmes clos comme corrigés dans un trimestre de cohorte avec un nouvel incident correspondant dans les 90 jours suivant la mise en production de la correction / problèmes clos comme corrigés ce trimestre-là ; la fenêtre de 90 jours est un exemple et est énoncée sur le graphique | pourcentage | Enregistrements d'incidents et de problèmes de l'outil ITSM ; événements de déploiement | Gestion des problèmes ; amélioration continue | Taux de défauts échappés ou de régression | Trimestrielle |
| Part de problèmes protégés par un contournement seul | Part des problèmes connus protégés uniquement par un contournement | Problèmes ouverts à l'état d'erreur connue sans correction planifiée / problèmes ouverts à l'état d'erreur connue ; les problèmes à risque accepté avec un responsable nommé et une date de revue sont montrés comme un groupe distinct | pourcentage | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes ; gestion des risques | Registre de dette technique | Mensuelle |

La fenêtre de 90 jours, la règle de correspondance des symptômes et la définition de « s'attendre à » dans le taux de liaison sont des exemples. Une équipe choisit des valeurs adaptées à ses services et les écrit dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Compter les problèmes clos comme « corrigés » séparément des autres codes de clôture garde honnête le couple ouverts-clos.

## Recommandations

### Décider de ce qui compte comme un problème

**1. Ouvrez un problème sur des preuves, et dites quelles sont ces preuves.** Les bons déclencheurs sont des incidents répétés du même symptôme, un incident majeur de cause inconnue, une tendance trouvée en revue ou un risque repéré avant tout incident. Écrivez le déclencheur sur l'enregistrement, par exemple « cinq incidents en six semaines reliés au même service ». Si chaque incident inhabituel devient un enregistrement de problème, le backlog se remplit de bruit et personne ne le lit.

**2. Utilisez un petit ensemble partagé de codes de clôture.** Corrigé, risque accepté, doublon, non reproductible et fusionné suffisent à la plupart des équipes. Chaque code a un sens en une phrase et un responsable qui peut l'utiliser. La répartition des codes de clôture est plus instructive que le nombre de clôtures, parce qu'elle montre combien de travail a supprimé une cause et combien s'est terminé sans changement.

### Relier incidents et problèmes à la source

**3. Faites du lien une étape de la clôture de l'incident.** Demandez à l'intervenant de relier l'incident à un problème, à une erreur connue ou à « aucun trouvé » avant de le clore. Proposez des suggestions de correspondance de l'outil quand il le peut, et laissez une personne décider. Un lien fait des semaines plus tard dans un exercice en masse n'est pas fiable (voir le sujet 1.5, Sources de données et instrumentation).

**4. Convenez de la façon dont les symptômes sont appariés.** La récurrence dépend de la décision de quand deux incidents sont « les mêmes ». Une courte taxonomie de causes et de symptômes, avec définitions et exemples, vaut mieux que du texte libre. Revoyez chaque trimestre un échantillon d'appariements, car les erreurs dans les deux sens biaisent le taux de récurrence.

**5. Laissez la revue des schémas alimenter la liste des problèmes.** Une revue mensuelle des catégories d'incidents, par service et par [diagramme de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), montre les quelques causes qui produisent l'essentiel de la douleur. Servez-vous de la revue pour ouvrir des problèmes et les prioriser, et envoyez dans la même liste les causes répétées issues des revues d'incidents majeurs (voir le sujet 3.2, Volume et priorité des incidents).

### Mesurer les trois retards

**6. Chronométrez les étapes séparément.** Mesurez de la création de l'enregistrement à la cause consignée, puis de la cause consignée à la correction tournant en production. Le premier retard pointe la capacité d'investigation, l'accès aux données et la compétence. Le second pointe la priorisation, le processus de changement et le travail concurrent sur les fonctionnalités. Un seul « temps de clôture d'un problème » les mêle et ne donne à personne d'action claire.

**7. Rapportez les vieux.** Montrez la médiane et le 85e percentile de l'âge des problèmes ouverts, et listez les plus vieux par service. Quelques enregistrements vieux de plusieurs années déplaceront une moyenne et diront peu, alors que la liste des plus vieux invite à une décision : corriger, accepter le risque avec un responsable nommé et une date de revue, ou clore avec un motif.

### Mettre la correction dans le flux normal

**8. Traitez une correction définitive comme un élément de backlog avec un responsable et une date.** Reliez le problème au changement ou à l'élément de travail qui porte la correction, et montrez la correction sur le même tableau que le travail sur les fonctionnalités. Priorisez avec une règle convenue, comme la pondération du coût des incidents récurrents face à l'effort de correction. Là où une correction demande un changement, le chemin des changements standard doit être rapide pour les corrections à faible risque (voir le sujet 4.3, Métriques de maîtrise des changements).

**9. Demandez ensemble le contournement et la date de sortie.** Un contournement fait gagner du temps. Consignez-le comme erreur connue, vérifiez que l'équipe d'astreinte peut le trouver et l'exécuter, et fixez une date de revue de la correction. La part de problèmes protégés par un contournement seul devient alors une liste de décisions, non un tas silencieux de dette (voir le sujet 4.6, Dette technique et erreurs connues).

### Vérifier que les corrections ont marché

**10. Faites suivre chaque correction d'une fenêtre de récurrence.** Une fois la correction en production, surveillez les incidents correspondants pendant une fenêtre énoncée, et rapportez la part des corrections qui ont tenu par cohorte trimestrielle. La récurrence est ce qui se rapproche le plus d'une mesure de résultat pour cette pratique. Si elle est élevée, demandez si la cause a été trouvée ou seulement un contributeur, et rouvrez l'analyse.

**11. Mesurez la réutilisation des erreurs connues là où travaillent les intervenants.** Comptez la fréquence à laquelle une erreur connue ou son contournement est utilisé quand un incident correspondant arrive. Un faible taux de réutilisation avec beaucoup d'erreurs connues signifie généralement que les entrées sont difficiles à trouver, périmées ou écrites pour l'analyste plutôt que pour l'intervenant. Corrigez l'article et son emplacement avant d'en ajouter d'autres (voir le sujet 3.6, Métriques de gestion des connaissances).

### Garder les chiffres honnêtes

**12. Montrez cohortes et réserves à côté de chaque graphique.** Consignez les définitions, la répartition des codes de clôture et tout changement de règle sur le graphique lui-même. Des cohortes trimestrielles de problèmes corrigés montrent la récurrence sans mêler travail ancien et nouveau. Appariez chaque décompte avec une mesure de résultat pour qu'aucun chiffre ne soit seul (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Problèmes ouverts et clos | Ouvrir de nombreux enregistrements triviaux ; scinder un problème en plusieurs ; clore des enregistrements comme doublons ou « non reproductibles » pour vider la liste | Répartition des codes de clôture ; taux de récurrence après correction ; échantillon d'enregistrements clos lu chaque trimestre |
| Âge du backlog de problèmes | Clore les plus vieux enregistrements sans correction ; rouvrir comme nouvel enregistrement pour réinitialiser l'horloge ; reclasser un problème en demande | Relier les nouveaux enregistrements à leurs originaux et rapporter l'âge depuis le premier enregistrement ; liste des clôtures par motif ; revue des risques acceptés |
| Taux de liaison incident-problème | Relier chaque incident à un problème fourre-tout vague pour relever le taux | Part des liens pointant vers les cinq plus gros problèmes ; échantillon de liens vérifiés pour une vraie correspondance ; récurrence des symptômes reliés |
| Temps jusqu'à la cause racine | Consigner une cause rapide et superficielle pour arrêter l'horloge ; nommer l'« erreur humaine » ; sauter le second relecteur | Taux de récurrence après correction ; taxonomie des causes où l'« erreur humaine » n'est pas acceptée seule ; revue d'un échantillon de causes face aux preuves |
| Taux de réutilisation des erreurs connues | Compter un lien ajouté après la clôture de l'incident ; ajouter une erreur connue à chaque incident d'un service | Délai entre la clôture de l'incident et le lien ; retour des intervenants sur l'utilité de l'entrée ; revue des entrées non utilisées depuis 90 jours |
| Temps jusqu'à la correction définitive | Marquer le changement comme mis en œuvre avant que la correction soit vérifiée ; clore comme risque accepté pour éviter le travail | Taux de récurrence après correction ; liste des risques acceptés avec responsable et date de revue ; étape de vérification avant l'arrêt de l'horloge |
| Taux de récurrence après correction | Définir les symptômes étroitement pour que les récurrences ne correspondent pas ; élargir la fenêtre de clôture pour que les corrections tombent dans des cohortes antérieures ; retarder la liaison | Taxonomie des causes revue par quelqu'un d'extérieur à l'équipe responsable ; taux de liaison des incidents ; fenêtre fixée d'avance |
| Part de problèmes protégés par un contournement seul | Planifier une correction fictive sans vraie date ; déplacer des problèmes vers le risque accepté ; abaisser la priorité du problème | Âge des corrections planifiées qui ont glissé ; liste des risques acceptés revue avec un dirigeant responsable nommé ; coût des incidents répétés par problème |

Une lecture saine paraît calme et un peu terne. Les décomptes d'ouverts et de clos sont à peu près au même pas, les plus vieux problèmes ouverts ont chacun une décision consignée, la part des corrections qui ont tenu est élevée et les lignes de cohortes sont stables, et les erreurs connues sont utilisées par les personnes qui rencontrent les symptômes. Le schéma d'alerte est un long décompte de clos bien rangé à côté d'incidents qui continuent de revenir. Quand les chiffres d'activité sont excellents et que les utilisateurs rencontrent toujours la même défaillance, croyez les utilisateurs.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enregistrements de problèmes formels pour les incidents récurrents et majeurs | Responsable clair, historique et lien vers les corrections ; soutient l'audit | Surcoût de processus ; les enregistrements peuvent se périmer |
| Corriger les causes dans le backlog de l'équipe sans enregistrement de problème | Rapide, léger, proche du travail | Les schémas entre équipes passent inaperçus ; pas d'erreur connue partagée |
| Codes de clôture stricts et cohortes trimestrielles | Vue honnête du résultat ; résiste aux décomptes bien rangés | Plus lent à lire ; demande de la discipline dans la saisie |
| Compter les problèmes clos comme objectif | Facile à expliquer et à tracer | Invite à clore pour le décompte ; récompense les petits problèmes |
| Suivi de la récurrence des problèmes corrigés | Mesure disponible la plus proche du fait que cela a marché | Demande un bon appariement des symptômes et une fenêtre assez longue |
| Suivi de la réutilisation des erreurs connues | Montre si la connaissance aide les intervenants | Dépend de la liaison par les intervenants ; peut être détourné |

Les équipes qui corrigent vite les causes dans leur propre backlog doivent quand même consigner la cause là où l'organisation plus large peut la voir, pour qu'une autre équipe qui rencontre le même symptôme en profite. Investissez d'abord dans le lien entre incidents et problèmes et dans la fenêtre de récurrence. Ces deux éléments rendent interprétable toute autre mesure.

## Questions à discuter avec votre équipe

**1. Quels trois incidents avons-nous le plus souvent réparés le trimestre dernier, et qu'est-ce qui nous a empêchés d'en corriger la cause ?**
Listez les incidents répétés à partir du centre de services ou de l'outil d'incidents et triez-les par nombre d'occurrences. Pour chacun, demandez quel était l'obstacle : pas de temps d'investigation, pas de cause convenue, une correction en concurrence avec des fonctionnalités, ou une correction qui demande une autre équipe. L'animateur doit chercher des obstacles qui se répètent d'un cas à l'autre, car ils pointent une correction du système plutôt qu'une correction technique.

**2. Quand nous relions un incident à un problème, qui le fait, quand, et comment savons-nous que c'est le bon problème ?**
Parcourez un incident récent de la clôture au lien. Notez si le lien est fait pendant l'incident, à la clôture ou lors d'un nettoyage ultérieur. Revoyez ensemble un petit échantillon de liens pour y chercher de vraies correspondances. Convenez d'un changement qui rend le lien plus facile ou plus fiable.

**3. Combien de temps une cause diagnostiquée attend-elle sa correction, et qui décide de l'ordre ?**
Prenez les problèmes avec une cause consignée et regardez le temps écoulé depuis le diagnostic. Demandez qui les priorise et selon quelle règle. La discussion montre souvent que le retard est une file devant le backlog produit plutôt qu'une difficulté technique. Convenez de la façon de comparer les corrections de problèmes au travail sur les fonctionnalités.

**4. Quels sont nos plus vieux contournements, et que perdrions-nous à les garder un an de plus ?**
Nommez les trois contournements les plus durables et ce qu'ils coûtent en effort manuel, en risque et en connaissance des personnes qui s'en souviennent encore. Demandez ce qui se passerait si la personne qui connaît le contournement était absente. Décidez pour chacun s'il faut le corriger, accepter le risque avec un responsable et une date de revue, ou retirer le service.

**5. Si un problème corrigé revient, le découvrons-nous, et à quelle vitesse ?**
Demandez comment un symptôme qui revient serait remarqué et qui rouvrirait l'analyse. Discutez de la question de savoir si la fenêtre de récurrence est assez longue pour le genre de défaillance en cause. L'animateur doit aider le groupe à convenir d'une fenêtre et d'une règle d'appariement, et à décider quelle équipe revoit les appariements pour que l'équipe responsable ne note pas son propre travail.

**6. Les personnes d'astreinte utilisent-elles nos erreurs connues, et qu'est-ce qui leur donnerait envie d'y recourir ?**
Demandez aux intervenants quand ils ont cherché pour la dernière fois une erreur connue et ce qu'ils ont trouvé. Regardez où vivent les entrées, comment elles sont titrées et si elles disent quoi faire en premier. Choisissez une entrée à réécrire avec un intervenant et testez-la lors de la prochaine semaine d'astreinte.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent la plupart des corrections définitives, et ressentent l'attraction du travail sur les fonctionnalités. Elles profitent de voir le coût en incidents d'une défaillance récurrente à côté de l'effort de la corriger, et d'avoir une place claire pour les éléments de correction dans le backlog. Elles doivent résister à traiter le travail sur les problèmes comme une interruption et réserver plutôt une part visible de capacité pour lui. La rétrospective est un endroit naturel pour repérer les schémas et ouvrir des problèmes (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes d'exploitation voient les symptômes répétés en premier et portent le coût en appels et en travail manuel. Elles tiennent les enregistrements de problèmes et d'erreurs connues, mènent la revue des schémas et vérifient que les liens sont faits. Leur risque est de dépenser leur effort sur des enregistrements au lieu de supprimer des causes. Elles doivent garder les codes de clôture peu nombreux, faire de l'erreur connue la première chose qu'un intervenant voit, et remettre les corrections à l'équipe responsable avec les preuves jointes.

### Direction et gouvernance

Les dirigeants décident si le travail de fiabilité l'emporte sur les fonctionnalités, et fixent les incitations sur ce qui est consigné. Ils doivent demander la récurrence par cohorte et les plus vieux problèmes ouverts avant de demander des décomptes, et traiter le risque accepté comme une décision qui exige un responsable nommé et une date de revue. Rapporter un backlog en baisse sans récurrence récompense la clôture. La gouvernance doit regarder des tendances et des décisions, non un classement d'équipes (voir le sujet 4.6, Dette technique et erreurs connues).

### Clients et utilisateurs

Les utilisateurs jugent la gestion des problèmes sur une seule chose : la même chose continue-t-elle d'aller mal. Ils ne voient pas les enregistrements de problèmes, et ne se soucient pas du nombre de clos. Là où les accords le permettent, informez les clients d'un problème connu, du contournement et de la date à laquelle une correction est attendue, puis rendez compte quand elle arrive. Une correction annoncée et livrée construit plus de confiance qu'une correction silencieuse.

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional soutient une application de planification clinique utilisée par les services d'hospitalisation et les consultations externes. Une équipe produit construit et exploite l'application, une équipe d'infrastructure exploite la plateforme et un centre de services prend les appels. Tous les chiffres de cet exemple sont illustratifs.

Lors d'une revue trimestrielle, le responsable du service remarque que le tableau de bord des problèmes paraît excellent : 46 problèmes clos pour 31 ouverts, et le plus vieux problème ouvert a 140 jours. Les responsables de service se plaignent encore que l'écran de planification se fige au changement de poste. Le responsable du service demande le taux de liaison incident-problème et le taux de récurrence après correction, qui ne sont pas encore sur le tableau de bord.

Les données racontent une autre histoire. La répartition des codes de clôture montre que 22 des 46 clôtures étaient « non reproductible » ou « doublon ». Le taux de liaison des incidents de haute priorité est de 38 %. Les incidents de gel étaient consignés dans quatre catégories, de sorte qu'aucun schéma n'était visible. Une fois un échantillon de 30 incidents relié à la main, 17 pointaient vers une seule cause : un verrou de base de données tenu par une tâche nocturne qui débordait sur le poste du matin. La récurrence des problèmes corrigés le trimestre précédent était de 27 %, plus élevée que quiconque ne s'y attendait.

L'équipe prend trois décisions. Premièrement, la taxonomie des causes et des symptômes gagne une entrée « gel de la planification », et relier un problème ou « aucun trouvé » devient une étape obligatoire à la clôture de l'incident. Deuxièmement, le problème de la tâche nocturne passe du backlog d'infrastructure au tableau de l'équipe produit avec un responsable et une date cible, et un contournement (un redémarrage programmé après la tâche) est consigné comme erreur connue et testé avec le centre de services. Troisièmement, le tableau de bord remplace le nombre de clos par trois chiffres : la part des corrections qui ont tenu après 90 jours, la médiane et le 85e percentile du temps entre la cause consignée et la correction, et les plus vieux problèmes ouverts avec leurs décisions.

Huit semaines plus tard, le verrou est supprimé par un changement de la tâche. Les incidents de la catégorie de gel passent d'environ neuf par mois à deux, et la réutilisation des erreurs connues monte à 71 % pour les symptômes qui restent, surtout parce que le centre de services trouve maintenant l'entrée de redémarrage. Le risque de détournement que l'équipe a repéré se trouvait dans sa propre habitude antérieure : clore des enregistrements comme « non reproductible » quand un incident tombait hors des heures de travail. La répartition des codes de clôture, l'échantillon d'enregistrements clos lu chaque trimestre et la cohorte de récurrence jouent maintenant le rôle de garde-fous. Personne n'est classé, et la revue liste des services et des décisions, non des analystes.

## Agilité, IA, automatisation et analytique

### Agilité

Intégrez le travail sur les problèmes au backlog régulier et aux conversations d'amélioration, pour que les corrections définitives concurrencent ouvertement le travail nouveau. La précaution est qu'un objectif de clôture rapide des problèmes mène à les clore avec des contournements.

### IA

L'IA peut regrouper des incidents, suggérer des causes racines et rédiger des enregistrements de problèmes, ce qui peut faire monter les décomptes de problèmes et les taux de liaison sans supprimer de causes. Appariez le taux de liaison avec le taux de récurrence après correction, et marquez quelles causes ont été suggérées par l'IA et confirmées par une personne. La précaution est qu'une cause suggérée par l'IA peut être plausible et fausse : vérifiez donc avant de clore.

### Automatisation

Reliez automatiquement les incidents aux problèmes là où les signaux correspondent, et mesurez l'appariement sur les mauvais liens. La précaution est que clore automatiquement un problème quand les incidents s'arrêtent cache une cause qui s'est simplement tue.

### Analytique

Montrez le temps jusqu'à la correction définitive comme une distribution et le taux de récurrence après les corrections. La décision éclairée est quelles causes méritent de la capacité. La précaution est que la récurrence demande une longue fenêtre : dites donc combien de temps vous avez observé.

## Éclairage sectoriel

**Startup.** Il y a rarement un processus de problèmes distinct. L'équipe corrige les causes directement, et le risque est que personne ne se souvienne pourquoi. Gardez une liste d'une page des incidents récurrents et de leurs causes, reliez les corrections au gestionnaire d'anomalies et revoyez la liste chaque mois. Mesurez la récurrence et l'âge des plus vieux éléments ; sautez les codes de clôture formels jusqu'à ce que l'équipe grandisse.

**Petite entreprise.** Une personne informatique ou un prestataire de services gérés peut tout exploiter. Demandez au prestataire ses enregistrements de problèmes et les catégories d'incidents qui les sous-tendent, ainsi que la définition écrite de « résolu ». Une courte liste des cinq principaux problèmes répétés, avec un responsable nommé et une date pour chacun, fait mieux qu'un outil lourd. Exportez périodiquement les enregistrements pour éviter l'enfermement.

**Grande entreprise.** De nombreux services et fournisseurs créent le plus grand besoin de définitions partagées. Convenez de la taxonomie des causes, des codes de clôture et de la fenêtre de récurrence entre équipes, nommez des responsables de problèmes par service et rapportez par service et par cohorte. Là où un fournisseur détient une correction, suivez la réponse du fournisseur face à l'accord (voir le sujet 8.4, Métriques des fournisseurs et des contrats) et escaladez par une voie documentée.

**Gouvernement et secteur public.** L'audit, la maîtrise des changements et la passation de marchés peuvent allonger le chemin de la cause à la correction : l'horloge du temps jusqu'à la correction doit donc montrer où se situe le retard : investigation, approbation, passation de marché ou planification. Les risques acceptés ont besoin de responsables et de dates de revue consignés qui résistent à l'audit. Les règles de conservation et de vie privée s'appliquent aux enregistrements d'incidents et de problèmes, en particulier là où des données cliniques ou de citoyens y figurent.

## Dossier d'affaires : motivations, ROI et TCO

Le coût a trois parts. La première est le temps d'investigation : des personnes ayant les compétences et l'accès pour analyser les incidents, ce qui entre en concurrence avec leur autre travail. La deuxième est la correction elle-même, livrée par le backlog et le processus de changement. La troisième est le coût de consignation et de rapport : relier les incidents, tenir les taxonomies, mener la revue des schémas et maintenir la base de données d'erreurs connues. Ces coûts sont surtout du temps de personnes : comptez donc les heures.

Le rendement se voit dans des incidents qui cessent de revenir, moins d'appels et moins d'efforts de contournement manuel, un traitement des incidents plus court parce que les intervenants trouvent des erreurs connues, et moins d'escalades vers les ingénieurs. Aucun chiffre universel ne s'applique : estimez donc le vôtre. Pour un incident récurrent, multipliez les occurrences par an par l'effort moyen de traitement et une estimation de l'impact métier par occurrence, puis comparez avec l'effort de le corriger. Revoyez l'estimation avec le responsable du service, énoncez-la comme une estimation et revoyez-la une fois que la fenêtre de récurrence aura montré ce qui s'est passé. La gestion des problèmes rapporte le mieux sur les quelques causes qui produisent l'essentiel de la charge d'incidents, ce que la vue de Pareto trouve vite.

## Anti-modèles et pièges

- **Clore comme objectif.** Un objectif de problèmes clos récompense les enregistrements triviaux et la clôture précoce. Rapportez d'abord les mesures de résultat et montrez la répartition des codes de clôture.
- **Les enregistrements de problèmes comme cimetière.** Les enregistrements restent ouverts sans responsable, date ni décision. Revoyez la liste des plus vieux selon une cadence et exigez une décision pour chaque élément.
- **S'arrêter à l'« erreur humaine ».** Elle nomme qui a touché au système et non pourquoi le système a permis la défaillance. N'acceptez une cause que lorsqu'elle nomme une condition qui peut être changée.
- **Ne rien corriger tant que la cause racine n'est pas certaine.** Les défaillances complexes peuvent n'avoir aucune cause unique. Appliquez un contournement et la correction la mieux étayée, puis surveillez la récurrence.
- **Des contournements sans sortie.** Un contournement sans date de revue devient permanent. Consignez un responsable et une date quand l'erreur connue est créée.
- **Des liens d'incidents faibles.** Des liens manquants ou bâclés rendent la récurrence invisible. Faites du lien une partie de la clôture de l'incident et échantillonnez les liens.
- **Le travail sur les problèmes hors du backlog.** Les corrections qui vivent dans une file séparée attendent indéfiniment. Mettez l'élément de correction sur le tableau de l'équipe responsable et priorisez-le face aux fonctionnalités.
- **Comparer des analystes ou des équipes sur les enregistrements clos.** Cela récompense les services faciles et invite au détournement. Comparez les services dans le temps à leur propre historique, et lisez les cohortes.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Identification des problèmes et liaison | Problèmes ouverts seulement après les grosses pannes ; aucun lien avec les incidents | Certaines équipes relient les incidents ; les catégories diffèrent selon les équipes | Taxonomie et codes de clôture partagés ; lien fait à la clôture de l'incident | Taux de liaison et qualité des appariements échantillonnés et revus | Schémas détectés entre équipes et fournisseurs, avec des erreurs connues partagées |
| Cause racine et erreurs connues | Cause consignée en texte libre, s'il y en a une | Erreurs connues tenues par certaines équipes à des endroits différents | Une base de données d'erreurs connues ; revue des causes par une seconde personne | Temps jusqu'à la cause racine et réutilisation des erreurs connues suivis dans le temps et exploités | Intervenants, fournisseurs et clients contribuent à des entrées partagées et les utilisent |
| Livraison des corrections | Les corrections ont lieu quand quelqu'un a du temps | Corrections suivies dans la propre liste d'une équipe | Correction reliée à un élément de backlog ou à un changement avec responsable et date | Temps jusqu'à la correction définitive revu, avec de la capacité réservée | Priorité des corrections fixée conjointement avec les feuilles de route produit et fournisseurs |
| Résultat et apprentissage | Décomptes d'enregistrements rapportés | Âge du backlog rapporté dans certaines revues | Récurrence après correction et part de contournement seul rapportées avec leurs définitions | Cohortes appariées à des garde-fous et utilisées dans les décisions de financement | Définitions révisées quand elles cessent d'éclairer les décisions ; amélioration devenue routine |

## Liste de vérification

- [ ] Le registre des métriques définit un problème, une erreur connue et chaque code de clôture.
- [ ] La clôture d'un incident inclut un lien vers un problème, une erreur connue ou « aucun trouvé ».
- [ ] Une taxonomie des causes et des symptômes existe, avec définitions et exemples.
- [ ] Chaque problème a un responsable, un déclencheur et une date de décision.
- [ ] Le temps jusqu'à la cause racine et le temps jusqu'à la correction définitive sont mesurés séparément, avec des percentiles.
- [ ] Chaque correction définitive est reliée à un élément de backlog ou à un changement avec un responsable.
- [ ] Chaque contournement a un responsable et une date de revue.
- [ ] La récurrence après correction est suivie par cohorte trimestrielle avec une fenêtre énoncée.
- [ ] La réutilisation des erreurs connues est mesurée là où travaillent les intervenants.
- [ ] Les plus vieux problèmes ouverts sont revus selon une cadence, et chaque décision est consignée.
- [ ] Un échantillon d'enregistrements clos est lu chaque trimestre pour vérifier les codes de clôture et les causes.
- [ ] Les rapports décrivent des services et des équipes, et aucun tableau ne classe des individus.

## Prompts d'IA

**Trouvez des problèmes candidats dans un ensemble d'incidents.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Passez en revue les codes de clôture et les enregistrements de problèmes.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Concevez une mesure de récurrence.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Préparez une revue de décision sur les problèmes anciens.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets qui définissent les mesures d'incidents, de changements et de connaissances dont dépendent les métriques de problèmes, et le garde-fou à associer à chacune.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique de problème nouvelle ou modifiée énonce ses horloges, ses exclusions, son vecteur de détournement et son garde-fou.

## Idées clés

- La mesure de la gestion des problèmes est la récurrence : les incidents reliés à un problème cessent-ils de revenir.
- Chronométrez les étapes séparément, de l'enregistrement à la cause consignée et de la cause à la correction tournant en production.
- Reliez les incidents aux problèmes à la clôture, convenez de la façon dont les symptômes sont appariés et échantillonnez les liens.
- Un contournement est une étape avec un responsable et une date de revue, et la part de contournement seul montre combien de risque est portée.
- Mettez les corrections définitives dans le backlog de l'équipe responsable, et rapportez les mesures de résultat avant les décomptes d'enregistrements.
- Décrivez des services, des cohortes et des décisions. Ne classez jamais des analystes ou des équipes selon les problèmes clos.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
