# Métriques de continuité de service

**Un plan de rétablissement est une hypothèse tant qu'un exercice ne l'a pas testé : les métriques de continuité doivent donc compter ce qui a réellement été rétabli, à quelle vitesse et quelle quantité de données est revenue, et jamais le nombre de plans sur une étagère.**

## Vue d'ensemble et motivation

La plupart des mesures d'incidents décrivent la mauvaise journée ordinaire : un déploiement en échec, une base de données saturée, un voisin bruyant. La continuité de service décrit la journée rare et grave, quand une région tombe, qu'un magasin de données est corrompu, qu'un fournisseur disparaît ou qu'un rançongiciel chiffre le parc. La [planification de la continuité d'activité](https://en.wikipedia.org/wiki/Business_continuity_planning) est la discipline qui prépare une organisation à continuer de livrer à des niveaux acceptables à travers de tels événements. Dans ITIL 4, la pratique s'appelle gestion de la continuité de service, et c'est la vision informatique de cet objectif plus large (voir le sujet correspondant dans le *Service Management Guide* compagnon).

Deux termes portent l'essentiel du poids. L'[objectif de temps de rétablissement](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) est le temps acceptable pour rétablir un service après une perturbation. L'[objectif de point de rétablissement](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) est la quantité acceptable de données perdues, exprimée comme une durée : un RPO d'une heure signifie que perdre la dernière heure d'écritures est tolérable et en perdre davantage ne l'est pas. Les deux viennent d'une [analyse d'impact sur l'activité](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), la méthode qui identifie quelles activités comptent le plus, ce qui dépend de quoi et ce que coûte une perturbation. Les objectifs sont des décisions métier avec un prix, parce que des objectifs plus serrés demandent plus de redondance, plus d'automatisation et plus de temps d'exercice.

La difficulté est qu'un objectif est une promesse sur un événement futur qui ne s'est pas produit. La preuve honnête est un test. L'équipe a-t-elle rétabli le service dans le RTO lors du dernier exercice ? Les données rétablies respectaient-elles le RPO ? Les étapes du plan étaient-elles celles que l'équipe a réellement suivies ? Une métrique de continuité est donc surtout une mesure d'exercices, et la qualité de la mesure dépend du réalisme de l'exercice.

Les équipes agiles et d'ingénierie de fiabilité des sites (SRE) apportent des habitudes utiles. Leurs systèmes changent chaque semaine : un plan écrit une fois et rangé se périme donc en quelques mois. La réponse agile est de garder le rétablissement sous forme de code (par exemple avec l'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code)), de le répéter souvent et de traiter chaque répétition comme une source d'éléments de backlog. L'[ingénierie du chaos](https://en.wikipedia.org/wiki/Chaos_engineering) et les exercices (game days) appliquent la même idée à plus petite échelle : provoquer une défaillance à dessein, de façon contrôlée, et observer ce qui se passe. La vision SRE est décrite dans le livre *Site Reliability Engineering* de Google, et le domaine plus large est résumé dans l'article sur l'[ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### En quoi les visions diffèrent

- **Vision ITIL.** La gestion de la continuité de service est une pratique qui fixe les objectifs de rétablissement à partir de la BIA, conçoit des plans et les prouve par des tests. Ses productions sont des plans, des rapports d'exercices et des constats consignés. La norme [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) décrit un système de management de la continuité d'activité. En octobre 2026, vérifiez directement l'édition en vigueur si un client ou un régulateur exige la conformité.
- **Vision agile.** La capacité de rétablissement est une propriété du produit dans la définition de terminé. Un récit qui ajoute un magasin de données n'est pas terminé tant que son chemin de restauration n'a pas été essayé.
- **Vision SRE.** Le travail de fiabilité est budgété et mesuré. Les bascules, les exercices de restauration et les game days sont du travail planifié avec des responsables et des constats qui entrent dans le backlog.

Ce sujet couvre sept mesures : le rétablissement face aux objectifs de temps et de données en test, la couverture et la fraîcheur des exercices, les restaurations de sauvegardes, la clôture des constats et l'actualité des plans. Les vraies pannes sont dans les métriques d'incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs) et de disponibilité (voir le sujet 5.3, Métriques de disponibilité). Les objectifs exprimés comme des cibles orientées utilisateur sont dans le sujet sur les indicateurs et les budgets (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Le « temps de rétablissement après un déploiement en échec » du programme de recherche DORA est une horloge bien plus petite (voir le sujet 2.8, Métriques DORA). Les causes racines révélées par les tests relèvent des sujets sur les problèmes et l'apprentissage (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

Un **palier** (tier) est une classe de services regroupés selon la rapidité avec laquelle ils doivent revenir. Un **exercice sur table** (tabletop) est une répétition fondée sur la discussion, sans changement de système. Un **game day** est une répétition pratique dans laquelle une équipe provoque ou simule une défaillance et observe la réponse. Un **constat** est un écart consigné entre le plan et ce qui s'est passé. L'**actualité du plan** est le degré auquel un plan reflète le service tel qu'il est aujourd'hui.

## Principes clés

- **Testez, puis affirmez.** Un RTO ou un RPO n'est validé que par un rétablissement réellement effectué et chronométré. Rapportez côte à côte l'objectif et le dernier résultat démontré.
- **Mesurez le réalisme, pas seulement la réussite.** Une restauration d'une base de test vide réussie en quelques minutes dit peu d'une restauration à l'échelle de la production. Consignez le périmètre et les conditions de chaque exercice à côté du résultat.
- **Étagez le parc et dépensez l'effort selon le palier.** Les services critiques reçoivent des tests fréquents et réalistes. Les services de bas palier reçoivent des contrôles plus légers. Une fréquence cible unique pour tout gaspille l'effort ou manque le risque.
- **Traitez les constats comme le produit d'un exercice.** La production précieuse d'un game day est une liste close d'écarts. Un test sans constat est soit excellent, soit trop doux, et vous devez trouver lequel.
- **Décrivez des services et des rotations, jamais des individus.** Les résultats d'exercices décrivent le système et le plan. Personne n'est classé selon la rapidité avec laquelle il a rétabli un exercice.
- **Montrez chaque exercice comme sa propre ligne.** Il y a peu de tests par service et par an : les moyennes trompent donc (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Définitions des métriques

Chaque métrique liste l'horloge ou le décompte, ce qui est exclu et la source de données. Chaque ligne a besoin d'une règle écrite avant d'être crue. Un « service de palier 1 » ci-dessous désigne un service du plus haut palier de rétablissement défini par votre propre BIA.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'atteinte du RTO | Part des exercices de rétablissement dans lesquels le service a été rétabli dans son RTO énoncé | exercices avec un temps de rétablissement <= RTO / exercices menés. L'horloge démarre au début déclaré de la défaillance d'exercice (heure d'injection ou déclaration du scénario) et s'arrête quand le service passe son contrôle de santé convenu pour des utilisateurs réels ou synthétiques. Les exercices sur table et ceux sans rétablissement chronométré sont exclus et comptés à part | pourcentage, avec le nombre d'exercices montré | Rapport d'exercice, chronologie de la supervision, registre des services avec RTO | Gestion de la continuité de service ; gestion de la disponibilité | Résultat de game day ; temps de rétablissement dans les mesures de livraison | Par exercice ; consolidée chaque trimestre |
| Taux d'atteinte du RPO | Part des exercices de rétablissement dans lesquels la perte de données est restée dans le RPO énoncé | exercices avec une durée de perte de données mesurée <= RPO / exercices qui rétablissent des données. La durée de perte de données est le temps entre la dernière écriture présente après rétablissement et le moment de la défaillance. Les exercices qui ne rétablissent aucun état sont exclus | pourcentage, avec le nombre d'exercices montré | Rapport d'exercice, comparaison des données rétablies avec la source ou le journal d'écriture | Gestion de la continuité de service ; gestion de la sécurité de l'information | Exercice de restauration dans la définition de terminé | Par exercice ; consolidée chaque trimestre |
| Couverture du rétablissement testé | Part des services de palier 1 et 2 qui ont eu un test pratique de rétablissement dans leur intervalle de test convenu | services avec un test qualifiant dans l'intervalle / services dans le périmètre. Un test qualifiant est pratique (pas seulement sur table) et rétablit le service dans l'environnement de test ou de production. L'intervalle est fixé par palier | pourcentage, par palier | Registre des services, calendrier et rapports d'exercices | Gestion de la continuité de service ; gestion du catalogue des services | Calendrier des game days | Mensuelle |
| Jours depuis le dernier test de rétablissement réussi | Âge du plus récent test de rétablissement réussi pour chaque service critique | date du rapport moins date du dernier test qui a atteint à la fois le RTO et le RPO. Un test échoué ne réinitialise pas l'horloge. Les services jamais testés sont montrés comme « jamais » et non comme zéro | jours, par service, le plus ancien mis en évidence | Rapports d'exercices, registre des services | Gestion de la continuité de service | Calendrier des game days ; âge de l'élément de travail | Mensuelle |
| Taux de réussite des restaurations de sauvegardes | Part des restaurations tentées depuis une sauvegarde qui se sont terminées avec des données vérifiées et utilisables | restaurations terminées et ayant passé un contrôle de vérification des données / restaurations tentées, sur les tests de restauration automatisés et manuels. La seule réussite du travail de sauvegarde est exclue, parce qu'un travail qui a tourné n'est pas une restauration qui a marché | pourcentage, par palier de données | Journaux du système de sauvegarde, résultats de vérification automatisée des restaurations | Gestion de la continuité de service ; gestion de l'infrastructure et des plateformes | Exercice de restauration ; critères d'exploitabilité dans la définition de terminé | Hebdomadaire pour les tests automatisés ; mensuelle en revue |
| Taux de clôture des constats d'exercices | Part des constats d'exercices de rétablissement clos dans leur délai convenu, ventilée par gravité | constats clos dans la cible / constats échus dans la période. L'horloge démarre quand le constat est consigné dans le rapport d'exercice et s'arrête à la correction vérifiée, c'est-à-dire un nouveau test ou une revue qui la confirme. Les constats acceptés comme risques par un responsable nommé sont comptés à part | pourcentage, avec le nombre de constats en retard | Rapport d'exercice, gestionnaire d'anomalies | Gestion de la continuité de service ; amélioration continue | Actions de rétrospective ; âge des éléments de backlog | Mensuelle |
| Actualité des plans | Part des plans de continuité et des runbooks revus après le dernier changement important de leur service, ou dans leur intervalle de revue | plans avec une date de revue postérieure au dernier changement important et dans l'intervalle / plans dans le périmètre. Changement important désigne un enregistrement de changement signalé comme modifiant l'architecture, les magasins de données, les dépendances ou les fournisseurs | pourcentage, avec l'âge du plus ancien plan non revu | Dépôt des plans (gestion de versions), enregistrements de changements, registre des services | Gestion de la continuité de service ; maîtrise des changements | La définition de terminé inclut la mise à jour du runbook | Trimestrielle |

L'horloge du RTO dans un exercice diffère de l'horloge d'une vraie panne, qui démarre à l'impact (voir le sujet 3.4, Métriques des incidents majeurs) : comparez donc les exercices avec les exercices. Un exercice étroitement scénarisé mesure la vitesse de répétition : consignez donc la part de surprise qu'il contenait.

## Recommandations

### Fixer des objectifs testables

**1. Dérivez le RTO et le RPO d'une analyse d'impact sur l'activité, et écrivez-les à côté du service.** La BIA demande à l'activité ce que coûtent une heure, un jour et une semaine de panne et quelles données elle peut se permettre de perdre. Consignez les réponses dans le registre des services pour que chaque test puisse être comparé à un objectif énoncé. Les objectifs choisis par les seuls ingénieurs tendent à être soit inabordables, soit sans rapport avec ce dont les clients ont besoin.

**2. Étagez les services et fixez les intervalles de test par palier.** Un petit nombre de paliers, peut-être trois ou quatre, est plus facile à gérer qu'une règle différente pour chaque service. Donnez au palier supérieur les tests les plus fréquents et les plus réalistes, et au palier le plus bas un contrôle léger comme une restauration périodique d'un échantillon. Écrivez les intervalles et revoyez-les quand la BIA change.

**3. Vérifiez que l'objectif correspond à l'architecture.** Un RPO de cinq minutes avec une sauvegarde nocturne est une contradiction qu'un test exposera au pire moment. Comparez chaque objectif avec la conception de sauvegarde, de réplication et de bascule avant le premier exercice, et consignez tout écart comme un constat.

### Tester de façon à révéler quelque chose

**4. Mêlez exercices sur table, exercices de restauration et game days.** Un exercice sur table est peu coûteux et trouve des lacunes dans les rôles, les contacts et les décisions. Un exercice de restauration pratique trouve des lacunes dans les procédures, les permissions et les données. Un game day, qui provoque une défaillance et observe la réponse, trouve des lacunes dans la supervision, les runbooks et la coordination. Rapportez chaque type séparément pour qu'une série de faciles exercices sur table ne ressemble pas à une preuve de rétablissement.

**5. Chronométrez la restauration sur des données à l'échelle de la production.** Une restauration qui marche sur une petite copie peut échouer sur le volume réel à cause de limites de débit ou de stockage. Là où les tests à pleine échelle sont trop coûteux pour être fréquents, menez-en un périodiquement et énoncez toute extrapolation. Consignez la taille des données avec le résultat.

**6. Vérifiez que les données rétablies sont utilisables.** Ajoutez un contrôle automatisé après la restauration, comme un décompte de lignes, une somme de contrôle ou une transaction synthétique. Ne comptez une restauration comme réussie que lorsque ce contrôle passe.

**7. Ajoutez de la surprise graduellement.** Les premiers exercices peuvent être annoncés et scénarisés. Les suivants doivent retenir des détails de la défaillance et inclure des dépendances comme des identifiants expirés ou un fournisseur injoignable. Consignez le niveau de surprise pour que les résultats se lisent en contexte.

### Transformer les constats en changement

**8. Consignez chaque constat avec un responsable, une gravité et une échéance.** Un game day produit une liste : une permission manquante, une étape de runbook qui ne correspond plus à l'outil, une supervision qui ne s'est jamais déclenchée. Placez chacun dans le backlog de l'équipe avec la même visibilité que le travail sur les fonctionnalités. Suivez l'âge des constats ouverts et la part close à temps, et confirmez la clôture par un nouveau test là où c'est praticable.

**9. Reliez les constats à la gestion des problèmes et à l'apprentissage.** Un constat qui revient d'un exercice à l'autre est un problème au sens ITIL (voir le sujet 4.1, Métriques de gestion des problèmes). Revoyez chaque exercice sans blâme, comme vous le feriez d'une analyse post-incident, et suivez les actions jusqu'à leur clôture (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

### Garder les plans vivants

**10. Gardez les plans et les runbooks en gestion de versions, et reliez-les au changement.** Quand un enregistrement de changement modifie l'architecture, un magasin de données ou un fournisseur, exigez que le plan concerné soit revu dans le même travail (voir le sujet 4.3, Métriques de maîtrise des changements). Mesurez l'actualité des plans face au dernier changement important et pas seulement face au calendrier. Un plan revu chaque trimestre qui ignore la migration du mois dernier n'est à jour que de nom.

**11. Gardez honnête la carte des dépendances.** L'ordre de rétablissement dépend de services partagés comme l'identité, la résolution de noms et le stockage des secrets. Réconciliez la carte avec les enregistrements de configuration et corrigez les lacunes que les exercices révèlent (voir le sujet 7.4, Métriques de qualité de la configuration et de la CMDB).

**12. Incluez les fournisseurs, et faites tourner la charge des exercices.** Demandez à chaque fournisseur critique ses propres preuves de test et convenez de la façon d'exercer les étapes communes (voir le sujet 8.4, Métriques des fournisseurs et des contrats). Les exercices consomment du temps : partagez donc la charge dans une rotation et comptez-la comme charge opérationnelle (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

## Vecteurs de détournement et garde-fous

Les chiffres de continuité sont faciles à flatter parce que peu de gens regardent de près un exercice, et que le vrai test arrive rarement. Le tableau apparie chaque métrique avec une façon dont elle est détournée et le contrôle qui l'attrape. Les appariements suivent la forme exposée dans le sujet 1.2 (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux d'atteinte du RTO | Choisir un petit jeu de données de test, un scénario facile ou un script répété ; démarrer l'horloge tard, après que l'équipe a commencé ; assouplir le contrôle de santé pour que « rétabli » arrive plus tôt ; fixer un RTO généreux pour que chaque test passe | Consigner avec chaque résultat la taille des données, la surprise du scénario et la définition du contrôle de santé ; comparer le RTO avec la BIA ; montrer chaque exercice comme sa propre ligne, y compris les échecs |
| Taux d'atteinte du RPO | Ne mesurer la perte que pour la table principale et non pour tout l'état ; tester une réplique synchronisée parce qu'aucune charge ne tourne ; redéfinir le RPO après un résultat manqué | Vérifier la perte de données face au journal d'écriture sur tous les magasins de données dans le périmètre ; tester sous une charge d'écriture réaliste ; tenir un journal des changements d'objectifs avec leurs motifs |
| Couverture du rétablissement testé | Compter des discussions sur table comme des tests ; tester un service minuscule pour relever le pourcentage ; rétrécir la liste du périmètre en reclassant des services dans un palier plus bas | Exiger des tests pratiques pour le décompte du palier 1 ; rapporter la couverture pondérée par la criticité du service ; auditer les changements de palier face à la BIA |
| Jours depuis le dernier test de rétablissement réussi | Relancer un test facile pour réinitialiser l'âge ; étiqueter un test partiel comme réussi ; réinitialiser la date après une revue sur papier | Montrer le périmètre du dernier test réussi ; montrer l'âge le plus ancien et les services jamais testés ; exiger que le RTO et le RPO aient été atteints tous les deux |
| Taux de réussite des restaurations de sauvegardes | Rapporter la réussite d'un travail de sauvegarde comme réussite de restauration ; ne tester que les sauvegardes connues comme bonnes ; vérifier avec un contrôle qui ne peut pas échouer | Suivre les restaurations de sauvegardes échantillonnées au hasard ; exiger un résultat de vérification des données ; revoir le contrôle lui-même à chaque audit |
| Taux de clôture des constats d'exercices | Clore des constats sans correction ; abaisser la gravité pour relâcher l'échéance ; scinder un constat en plusieurs faciles ; consigner peu de constats au départ | Vérifier la clôture par un nouveau test ; rapporter les constats par exercice à côté du taux de clôture, puisqu'un décompte qui baisse peut signifier des exercices plus doux ; revoir les changements de gravité |
| Actualité des plans | Mettre à jour une date de revue sans lire le plan ; marquer des changements comme non importants ; bourrer le plan de texte générique qui ne se périme jamais | Échantillonner des plans et les parcourir avec quelqu'un qui ne les a pas écrits ; comparer le taux de signalement des changements importants avec l'historique des changements d'architecture ; relier l'actualité aux résultats de tests |

Une lecture saine montre une poignée de tests par trimestre avec une variation honnête : certains réussis du premier coup, d'autres échoués et répétés, et les constats de chacun apparaissent dans le backlog et se closent dans le délai énoncé. Des scores parfaits année après année sont une raison de demander la difficulté des exercices.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Fréquents petits tests de restauration automatisés | Preuve continue et peu coûteuse ; attrape tôt les défaillances silencieuses de sauvegarde | Ne teste ni la coordination, ni les personnes, ni le rétablissement à pleine échelle |
| Exercice annuel de bascule à pleine échelle | Réaliste ; exerce ensemble personnes, fournisseurs et dépendances | Coûteux et rare ; difficile à répéter après une correction ; comporte un risque s'il est mené en production |
| Exercices sur table | Faible coût ; trouve des lacunes dans les rôles et les décisions ; bon pour la formation | Ne prouve pas que la technologie marche ; facile à mener sans rien apprendre |
| Game days en production avec défaillance provoquée | Réalisme maximal ; teste la supervision et les runbooks tels qu'ils sont | Demande des garde-fous mûrs et le soutien de la direction ; peut nuire aux clients s'il est mené à la légère |
| Objectifs par palier | Dépense l'effort là où est le risque | Les affectations de palier peuvent dériver et demandent un responsable |

La réponse pratique est un programme en couches : des contrôles de restauration automatisés peu coûteux en permanence, des exercices pratiques pour chaque service de palier 1 à intervalle fixe, un plus grand exercice sur un cycle plus long et des exercices sur table pour les décisions et la communication. Énoncez les intervalles pour que le lecteur puisse juger de l'ancienneté des preuves.

## Questions à discuter avec votre équipe

**1. Quand avons-nous restauré notre service le plus important pour la dernière fois, et qu'avons-nous exactement prouvé ?**
Demandez la date, la taille des données, le scénario et le résultat, et écrivez-les sur un tableau. L'animateur doit résister à l'envie de juger et se concentrer sur l'écart entre l'affirmation et les preuves. Terminez en convenant d'un test qui comblerait le plus grand écart.

**2. Qui a choisi notre RTO et notre RPO, et l'activité les choisirait-elle encore aujourd'hui ?**
Retracez chaque objectif jusqu'à une analyse d'impact sur l'activité ou une décision. Demandez si l'architecture pourrait atteindre l'objectif sur le papier, et si le coût de l'atteindre a jamais été énoncé. Convenez de qui confirmera les objectifs des principaux services avec l'activité et pour quand.

**3. Que coûterait à notre réputation un exercice échoué, et cela façonne-t-il la difficulté de nos exercices ?**
Cette question fait émerger la pression qui rend les exercices doux. Demandez si un test échoué est traité comme un échec de l'équipe ou comme un succès de l'exercice.

**4. Lesquels des constats de notre dernier exercice sont encore ouverts, et pourquoi ?**
Lisez la liste à voix haute avec les âges et les responsables. Pour chaque élément en retard, demandez ce qui le bloque : travail concurrent, responsabilité floue, coût, ou croyance que le risque est acceptable. Le but est qu'aucun constat ne reste sans responsable.

**5. Que suppose notre plan qui n'est plus vrai ?**
Choisissez un plan et lisez-le avec une personne qui ne l'a pas écrit. Cherchez des outils retirés, des comptes renommés et des fournisseurs partis. Demandez comment le plan serait mis à jour quand le service change, et qui remarque quand il ne l'est pas. Reliez la réponse au processus de changement.

**6. Quelle dépendance arrêterait tout, et avons-nous déjà testé sans elle ?**
Les services partagés comme l'identité, la résolution de noms, les secrets et le système d'appel lui-même sont des points de défaillance uniques courants. Demandez à l'équipe de les nommer et de décrire la dernière fois où chacun a été rendu indisponible à dessein.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit détiennent la conception qui rend le rétablissement possible : elles rencontrent donc la continuité dans la définition de terminé des services critiques : un chemin de sauvegarde, une procédure de restauration et un runbook qui marche. Elles doivent mener des exercices de restauration dans leur propre cadence, ranger le code de rétablissement avec le service et traiter un exercice échoué comme un élément de backlog.

### Équipes de service et d'exploitation

Les équipes d'exploitation mènent la plupart des exercices et portent la charge de les préparer. Elles doivent tenir le calendrier d'exercices, consigner les chronologies pendant que l'exercice se déroule et écrire les constats le jour même. Les résultats décrivent le service et le plan, et personne n'est classé selon la rapidité avec laquelle un individu a rétabli un exercice.

### Direction et gouvernance

Les dirigeants fixent les objectifs avec l'activité et décident de la quantité de rétablissement qui vaut d'être achetée. Ils doivent demander à voir le dernier résultat démontré à côté de chaque objectif, l'âge des preuves et les constats ouverts, et éviter de récompenser une feuille blanche. Les instances de gouvernance doivent attendre un petit ensemble stable de mesures de continuité, relié au registre des risques et aux rapports réglementés là où ils s'appliquent (voir le sujet 8.2, Métriques des risques et des contrôles, et le sujet 8.5, Rapports réglementaires et gouvernementaux).

### Clients et utilisateurs

Les clients voient rarement la continuité jusqu'au moment où elle compte, et alors ils la jugent entièrement sur le résultat : combien de temps ils ont été sans le service et si leurs données ont survécu. Ils profitent d'énoncés clairs de ce qui est promis, en termes qu'ils comprennent, et d'une communication honnête quand un incident invoque le plan. Là où les contrats incluent des engagements de rétablissement, partagez sur demande les preuves d'exercices (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un système de planification des patients, une archive d'imagerie médicale et un service de messagerie du personnel. Une équipe produit de huit personnes maintient la planification, et une équipe d'exploitation gère la plateforme. Tous les chiffres de cet exemple sont illustratifs.

Le registre du service classe la planification en palier 1 avec un RTO de 2 heures et un RPO de 15 minutes. Son rapport trimestriel montre « taux d'atteinte du RTO : 100 % sur 4 exercices » et « couverture du rétablissement testé : 100 % ». Un nouveau responsable de l'exploitation lit les rapports d'exercices derrière les chiffres. Trois des quatre exercices étaient des exercices sur table, et la seule restauration pratique utilisait une copie de la base de données contenant environ un dixième des données de production. Personne n'avait restauré une sauvegarde dans un environnement propre depuis 14 mois.

L'équipe décide de changer ce qui est mesuré et testé. Elle redéfinit la couverture du rétablissement testé pour ne compter que les tests pratiques, ce qui fait tomber le chiffre à 33 % sur les trois services de palier 1. Elle programme une restauration à l'échelle de la production pour la planification, avec une vérification automatisée des décomptes de lignes et une transaction synthétique de réservation. L'exécution prend 3 heures 40 minutes face à un RTO de 2 heures, et les données rétablies ont 40 minutes de retard sur le point de défaillance face à un RPO de 15 minutes, parce que l'expédition des journaux avait été suspendue pendant une migration et jamais reprise. Le game day produit 9 constats : 2 de gravité haute, 5 moyens et 2 bas.

La décision consignée dans le journal est de traiter l'échec comme le résultat le plus précieux de l'année. L'équipe ouvre du travail pour reprendre l'expédition des journaux avec une alerte sur son retard, paralléliser la restauration et déplacer un volume de données vers un stockage plus rapide. Le RTO reste à 2 heures, et l'équipe ajoute un repli manuel documenté pour la planification. Le taux de clôture des constats sur les 60 premiers jours est de 7 sur 9 à temps, les deux autres étant acceptés comme risques par des responsables nommés.

Le risque de détournement attrapé ici était subtil. Personne n'a falsifié un chiffre : un décompte généreux d'exercices sur table et un petit jeu de données de test avaient rendu le rapport vert. Les garde-fous qui ont marché ont été de consigner la taille des données et le type d'exercice avec chaque résultat, et la pratique de lire les rapports d'exercices sous-jacents. Au rapport suivant, l'équipe montre chaque exercice comme sa propre ligne, l'exécution échouée incluse.

## Agilité, IA, automatisation et analytique

### Agilité

Répétez le rétablissement par de petits exercices fréquents avec les parties prenantes et corrigez ce qu'ils révèlent. La précaution est que des exercices scénarisés qui réussissent toujours donnent un faux confort.

### IA

Les services d'IA ajoutent au plan de rétablissement de nouvelles dépendances, comme des modèles, des magasins de vecteurs et des API tierces. Incluez-les dans la couverture du rétablissement testé et appariez le temps de rétablissement avec un contrôle que les réponses sont correctes après la restauration. La précaution est qu'un service d'IA rétabli peut faire tourner une autre version de modèle ou perdre ses données : vérifiez donc le comportement, pas seulement la disponibilité.

### Automatisation

Automatisez la vérification des sauvegardes et les tests de restauration, et mesurez l'automatisation sur les restaurations échouées. La précaution est qu'une sauvegarde qui se termine n'est pas une sauvegarde qui se restaure : testez donc la restauration.

### Analytique

Rapportez les objectifs atteints en test avec les dates du dernier test, et les constats d'exercices clos. La décision éclairée est quel rétablissement est le moins prouvé. La précaution est que peu de vrais rétablissements signifient de petits échantillons : montrez donc les décomptes.

## Éclairage sectoriel

**Startup.** Il y a généralement un seul environnement de production, une petite équipe et un fournisseur de nuage géré. La mesure la plus précieuse est la plus simple : restaurez chaque mois la base de données de production depuis une sauvegarde dans un environnement propre, chronométrez-la et vérifiez le résultat. Écrivez le RTO et le RPO sur une page.

**Petite entreprise.** L'informatique est souvent externalisée ou tenue par une ou deux personnes sur des services hébergés. Demandez par écrit au fournisseur quel rétablissement il s'engage à assurer et quelles preuves il peut montrer, et testez une restauration de vos propres données par trimestre. Gardez un plan d'une page à un endroit où il peut être lu quand les systèmes principaux sont en panne.

**Grande entreprise.** De nombreux services, fournisseurs et plateformes partagées rendent essentiels l'étagement et la carte des dépendances. Investissez dans un registre central des services avec objectifs, un calendrier d'exercices, une vérification automatisée des restaurations et un rapport cohérent pour que les résultats se comparent entre équipes.

**Gouvernement et secteur public.** Les devoirs de continuité peuvent découler de la loi, de l'audit ou de la politique, et un service public peut devoir continuer à fonctionner pendant les urgences. Les preuves de test sont souvent examinées de l'extérieur : gardez donc les rapports d'exercices, les constats et les enregistrements de clôture sous une forme qu'un auditeur peut lire. La passation de marchés peut verrouiller des dispositions de rétablissement : incluez donc dans les contrats des droits d'exercice et des preuves (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les raisons d'investir sont le coût d'une panne grave qui dure plus longtemps que l'activité ne peut le supporter, la perte de données qui ne peuvent être recréées et les obligations envers les clients, les régulateurs et les assureurs qui demandent des preuves de préparation. Le travail de continuité est une assurance : le rendement est donc la perte évitée et la confiance des décideurs, et il est difficile à exprimer en chiffre sans en inventer un. Décrivez-le par des schémas observables : l'écart entre le temps de rétablissement énoncé et le temps démontré, le nombre de constats de haute gravité trouvés en exercice au lieu de lors d'événements réels, et le temps de réponse à une demande de preuves d'un client ou d'un auditeur.

Les coûts viennent en trois groupes : la redondance et l'outillage que les objectifs exigent, le temps des personnes pour planifier, mener et revoir les exercices, et l'effort pour garder à jour les plans et les cartes de dépendances.

Le coût total de possession est dominé par les personnes et par les paliers les plus serrés. Passer d'un RTO de 24 heures à 2 heures change la conception et la facture : rendez donc cet arbitrage explicite avec l'activité. De petits tests fréquents et automatisés tendent à coûter moins qu'un grand événement annuel parce que les défauts apparaissent quand ils sont peu coûteux à corriger.

## Anti-modèles et pièges

- **Le plan sur l'étagère.** Un document compte comme préparation, et personne ne l'a essayé. Rapportez plutôt la date et le résultat du dernier test pratique à côté de chaque objectif.
- **La réussite de la sauvegarde comme réussite de la restauration.** Les travaux rapportent du vert alors que les données ne peuvent pas être restaurées. Testez plutôt régulièrement les restaurations et vérifiez les données avant de compter un succès.
- **Le théâtre répété.** L'exercice est scénarisé et mené par les auteurs du plan. Ajoutez plutôt de la surprise graduellement.
- **Un objectif pour tout.** Chaque service a un RTO de quatre heures parce que le modèle le disait. Étagez plutôt les services à partir d'une analyse d'impact sur l'activité et fixez des objectifs adaptés.
- **Des constats qui ne se closent jamais.** Le rapport d'exercice liste des écarts et le backlog ne les voit jamais. Donnez plutôt à chaque constat un responsable et une échéance, et vérifiez la clôture par un nouveau test.
- **Pénaliser le test échoué.** Une équipe blâmée pour un RTO manqué cessera de mener des tests difficiles. Convenez plutôt d'avance qu'un exercice échoué avec de bons constats est un bon résultat, et revoyez-le sans blâme.
- **Des plans périmés après un changement rapide.** Le calendrier pilote la revue, et les changements d'architecture passent entre les mailles. Reliez plutôt la revue du plan aux enregistrements de changements importants et mesurez l'actualité des plans face à eux.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Objectifs et paliers | RTO et RPO non écrits ou copiés d'un modèle | Objectifs écrits pour quelques services clés | Paliers et objectifs issus d'une analyse d'impact sur l'activité et inscrits dans le registre des services | Objectifs revus face aux résultats démontrés et à l'architecture | Objectifs convenus conjointement avec l'activité et les fournisseurs, et ajustés à mesure que les services changent |
| Tests et preuves | Rétablissement jamais testé, ou testé une fois après un incident | Tests de restauration ponctuels par certaines équipes ; résultats gardés dans des notes personnelles | Intervalles de test par palier avec périmètre, chronologie et résultat consignés | Résultats suivis dans le temps, avec exercices sur table, exercices pratiques et game days rapportés séparément | Exercices inter-équipes et avec les fournisseurs, avec surprise, planifiés d'après le risque |
| Constats et apprentissage | Écarts remarqués de façon informelle | Constats listés après certains exercices | Chaque constat a un responsable, une gravité et une échéance | Taux de clôture et âge revus, un nouveau test confirmant la clôture | Les constats alimentent les plateformes partagées, les contrats de fournisseurs et les normes de conception |
| Actualité des plans | Plans écrits une fois | Plans mis à jour après des incidents | Plans en gestion de versions avec un intervalle de revue | Revue liée aux changements importants et mesurée | Plans et runbooks testés comme du code et générés à partir de la définition du service là où c'est possible |

## Liste de vérification

- [ ] Chaque service de palier 1 a un RTO et un RPO écrits issus d'une analyse d'impact sur l'activité.
- [ ] Le registre des services montre pour chaque service son palier, ses objectifs et son intervalle de test.
- [ ] Les horloges du RTO et du RPO, le contrôle de santé et les exclusions sont écrits (voir le sujet 1.5, Sources de données et instrumentation).
- [ ] Les tests pratiques de rétablissement, les exercices sur table et les game days sont rapportés comme des types distincts.
- [ ] Chaque test de rétablissement consigne la taille des données, le scénario, le niveau de surprise et le temps de restauration et la perte de données mesurés.
- [ ] Les restaurations depuis des sauvegardes sont testées automatiquement, et un contrôle de vérification des données décide du succès.
- [ ] Chaque constat d'exercice a un responsable, une gravité, une échéance et une place dans le backlog.
- [ ] La revue des plans est liée aux enregistrements de changements importants, et le plus ancien plan non revu est visible.
- [ ] La carte des dépendances inclut les services partagés, et au moins un scénario en retire un.
- [ ] Chaque métrique de ce sujet a un garde-fou nommé et un responsable dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).
- [ ] La charge des exercices tourne, et le temps qu'elle prend est compté comme charge opérationnelle.

## Prompts d'IA

**Concevez un test de rétablissement et les mesures qui l'accompagnent.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Passez en revue des rapports d'exercices pour y chercher des preuves flatteuses.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Transformez des notes de game day en constats et en éléments de backlog.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Vérifiez l'actualité d'un plan face aux changements récents.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique de continuité, de rétablissement ou d'exercice, et le garde-fou à lui associer.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique de continuité modifiée énonce ses horloges, ses exclusions et son vecteur de détournement.

## Idées clés

- Un objectif de rétablissement est une promesse, et seul un exercice chronométré et réaliste montre si elle peut être tenue.
- Rapportez le dernier résultat démontré et son âge à côté de chaque RTO et RPO, et montrez chaque exercice comme sa propre ligne.
- Testez les restaurations, non les sauvegardes : une restauration ne compte que lorsque les données ont été vérifiées comme utilisables.
- Le produit d'un exercice est une liste close de constats : suivez donc leur âge et confirmez la clôture par un nouveau test.
- Gardez les plans en gestion de versions et liez leur revue aux changements importants, et pas seulement au calendrier.
- Mesurez des services et des plans, jamais des personnes, et faites d'un exercice échoué avec de bons constats un résultat sûr et respecté.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
