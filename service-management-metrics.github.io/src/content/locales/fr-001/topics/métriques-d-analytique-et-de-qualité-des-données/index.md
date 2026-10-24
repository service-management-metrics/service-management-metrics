# Métriques d'analytique et de qualité des données

**Chaque chiffre de ce livre ne vaut que par les données et l'analyse qui le sous-tendent : mesurez donc la qualité des données, la solidité de l'analyse et l'usage du résultat dans une décision, et dites toujours ce qu'un chiffre ne peut pas montrer.**

## Vue d'ensemble et motivation

L'[analytique](https://en.wikipedia.org/wiki/Analytics) est l'usage des données et des statistiques pour répondre à des questions et éclairer des décisions. En gestion des services, elle va d'un simple décompte hebdomadaire de tickets à des modèles qui prédisent quels changements échoueront. L'analytique est le quatrième angle de ce livre, à côté de la pratique agile, de l'IA et de l'automatisation, et c'est aussi ce dont dépendent les trois autres. Un tableau de bord bâti sur une mauvaise [qualité des données](https://en.wikipedia.org/wiki/Data_quality) donne des réponses assurées aux mauvaises questions.

La qualité des données est un ensemble de propriétés : les données sont-elles complètes, exactes, cohérentes, actuelles, uniques et valides. Les sujets antérieurs ont couvert d'où viennent les données de service et comment les lire (voir le sujet 1.5, Sources de données et instrumentation, et le sujet 1.6, Culture statistique pour les métriques de service). Ce sujet transforme ces idées en mesures qu'une équipe peut suivre sur ses propres données et son analyse, comme la partie 4 mesure le changement. Il couvre aussi l'analytique comme pratique : les questions posées, les méthodes employées, qui les vérifie, et si le résultat a changé une décision.

L'analytique est attrayante parce qu'elle passe à l'échelle. Un analyste peut servir de nombreuses équipes, et un modèle peut noter chaque ticket. La même échelle amplifie les erreurs. Une définition mal lue dans un jeu de données partagé se propage à chaque rapport bâti dessus, et un modèle entraîné sur le comportement passé peut répéter un vieux biais à grande vitesse. Les outils d'IA qui écrivent des requêtes, des graphiques et des résumés rendent l'analyse moins chère et rendent aussi les erreurs plus faciles à produire avec assurance : la vérification compte donc davantage.

Termes employés ici. Un **jeu de données** est une collection définie d'enregistrements, comme des tickets ou des déploiements. La **filiation** (lineage) est la trace d'où viennent les données et de ce qui leur a été fait. Le **rapprochement** compare deux sources qui devraient concorder. Un **contrat de données** est un accord entre le producteur et les utilisateurs d'un jeu de données sur sa structure, son sens et sa qualité. Une **analyse** est une question, une méthode et un résultat. L'**incertitude** est la plage dans laquelle une valeur peut se situer, compte tenu des données et de la méthode. Un **journal de décisions** consigne les décisions qu'un chiffre a éclairées.

## Principes clés

- **Partez de la question et de la décision.** Une analyse sans décision attachée est de la charge.
- **Mesurez les données sur les données.** La complétude, l'actualité et le rapprochement sont des mesures qu'une équipe peut détenir.
- **Gardez la filiation.** Un chiffre que vous ne pouvez pas retracer jusqu'à sa source ne peut pas être corrigé.
- **Énoncez l'incertitude et les limites.** Montrez le décompte derrière un taux et dites ce que le chiffre ne peut pas montrer.
- **Vérifiez l'analyse comme du code.** Revoyez les définitions et les requêtes, et gardez-les sous contrôle de version.
- **Protégez les gens.** L'analytique sur le comportement des gens demande des limites de vie privée, et les résultats décrivent des équipes et des services.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Complétude des champs requis | Part des enregistrements dont tous les champs requis par les métriques qui les utilisent sont renseignés | enregistrements avec chaque champ requis présent et valide / enregistrements du périmètre | pourcentage | Extraits des systèmes sources et contrôles de qualité des données | Mesure et rapports ; gestion des connaissances | Définition de terminé pour les enregistrements | Mensuelle |
| Fraîcheur des données | Âge des données les plus récentes d'un jeu de données au moment où un rapport est lu | médiane et maximum de (heure de lecture du rapport moins heure du dernier enregistrement chargé) sur les jeux de données | heures | Journaux du pipeline et métadonnées des jeux de données | Mesure et rapports | Retour rapide | Hebdomadaire |
| Écart de rapprochement | Différence entre deux sources qui devraient concorder sur la même quantité | différence absolue entre la source A et la source B / source A, pour un échantillon énoncé de quantités et une période | pourcentage | Deux systèmes sources | Mesure et rapports ; gestion financière | Accords de travail sur les définitions | Trimestrielle |
| Couverture de la filiation | Part des métriques rapportées dont la source, les transformations et le responsable sont documentés | métriques du registre avec filiation documentée / métriques rapportées | pourcentage | Registre des métriques et catalogue de données | Gouvernance | Accords d'équipe | Trimestrielle |
| Taux d'échec des exécutions du pipeline de données | Part des exécutions du pipeline de données qui échouent ou chargent des données incomplètes | exécutions du pipeline de données échouées ou ayant chargé des données incomplètes / exécutions démarrées | pourcentage | Journaux du pipeline de données | Mesure et rapports | Intégration continue pour les données | Hebdomadaire |
| Taux de revue des analyses | Part des analyses publiées qui ont été revues par une seconde personne avant usage | analyses avec une revue consignée / analyses publiées à un public décisionnel | pourcentage | Registre des analyses et journal des revues | Mesure et rapports ; amélioration continue | Revue par les pairs | Trimestrielle |
| Taux d'usage dans les décisions | Part des métriques rapportées citées dans une décision consignée de la période | métriques citées dans une entrée du journal de décisions / métriques rapportées | pourcentage | Journal de décisions et registre des métriques | Amélioration continue | Actions de rétrospective | Trimestrielle |

La complétude ne compte un champ comme présent que s'il contient une valeur valide : un substitut comme « n/a » ne compte donc pas. L'écart de rapprochement s'applique à un échantillon nommé de quantités, comme les décomptes de tickets d'un mois, et énonce l'échantillon.

## Recommandations

### Rendre visible la qualité des données

**1. Définissez la qualité des données en termes de métriques.** Listez les champs et les horodatages dont dépendent vos plus importantes métriques, et définissez à quoi ressemble « valide » pour chacun. Vérifiez-les d'abord, car un horodatage manquant brise une mesure de temps.

**2. Vérifiez à la source, et pas seulement dans le rapport.** Un contrôle de qualité exécuté au moment où la donnée est créée, comme un champ requis dans le formulaire de ticket, évite des erreurs qu'aucun nettoyage ultérieur ne peut pleinement réparer. Ajoutez aussi des contrôles au chargement des données.

**3. Publiez la qualité à côté des chiffres.** Montrez la complétude et la fraîcheur sur le tableau de bord qui montre la métrique. Un lecteur doit voir la qualité des données sans avoir à demander.

**4. Rapprochez selon un calendrier.** Comparez au moins une quantité entre deux systèmes chaque trimestre, comme le nombre de changements dans l'enregistrement des changements et dans le pipeline. Investiguez et expliquez les différences, et consignez le constat.

### Garder honnête l'analyse

**5. Écrivez d'abord la question et la décision.** Avant l'analyse, consignez la question, la décision qu'elle éclaire et qui décidera. Quand la décision est passée, consignez ce qui a été décidé.

**6. Gardez la filiation et les définitions dans un seul registre.** Reliez chaque métrique à sa source, sa transformation, son responsable et sa date de revue (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Les changements de définition sont consignés avec leurs raisons et marqués sur les graphiques.

**7. Revoyez chaque analyse.** Une seconde personne vérifie les définitions, les requêtes et les conclusions de toute analyse employée dans une décision. Gardez les requêtes sous contrôle de version pour pouvoir les rejouer.

**8. Énoncez l'incertitude et les limites.** Montrez le nombre d'éléments derrière chaque taux, des intervalles là où ils comptent et ce que l'analyse ne peut pas montrer. Évitez la précision d'un chiffre unique là où les données ne la soutiennent pas.

### Gouverner l'usage

**9. Utilisez des contrats de données pour les jeux de données partagés.** L'équipe qui produit un jeu de données énonce son sens, ses champs, sa fraîcheur et ses problèmes connus, et avertit les utilisateurs quand il change. Les changements cassants demandent un préavis.

**10. Protégez les gens dans les données.** Décidez qui peut voir les enregistrements bruts, combien de temps les données sont conservées et quelle est la taille minimale de groupe pour les rapports. Gardez l'analytique au niveau de l'équipe et du service, et vérifiez les règles de vie privée qui s'appliquent à vous.

**11. Retirez les rapports et les jeux de données.** Un rapport que personne n'utilise coûte quand même de la maintenance et peut induire en erreur. Revoyez l'usage et retirez ce qui n'est pas cité dans les décisions.

**12. Traitez l'analyse assistée par l'IA comme non revue tant qu'elle n'est pas vérifiée.** Les outils d'IA peuvent écrire une requête ou un résumé qui paraît correct et ne l'est pas. Revoyez la requête, rejouez-la sur un petit échantillon connu et consignez qu'elle a été vérifiée.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Complétude des champs requis | Remplir les champs avec des substituts ou des valeurs par défaut ; rendre les champs facultatifs | Contrôles de validité sur le contenu ; échantillonner les enregistrements pour de vraies valeurs |
| Fraîcheur des données | Horodater les chargements plutôt que les événements ; charger des mises à jour vides | Comparer l'heure de l'événement avec l'heure de chargement ; décomptes de lignes par chargement |
| Écart de rapprochement | Choisir des quantités qui concordent par hasard ; ajuster une source pour qu'elle corresponde | Faire tourner les quantités ; garder une piste d'audit des ajustements |
| Couverture de la filiation | Documenter la filiation superficiellement ; copier du texte entre entrées | Échantillonner des entrées et retracer une métrique de bout en bout |
| Taux d'échec des exécutions du pipeline de données | Marquer des exécutions échouées comme reprises ou réussies ; supprimer des journaux | Comparer les décomptes d'enregistrements avec la source ; alerter sur les trous |
| Taux de revue des analyses | Revues de pure forme ; revoir après la décision | Vérifier les notes des réviseurs ; exiger la revue avant l'usage |
| Taux d'usage dans les décisions | Citer des métriques dans un journal sans effet sur la décision | Demander ce qui a changé ; échantillonner les entrées |

Une lecture saine est des chiffres de qualité des données visibles et stables, des différences entre sources qui sont expliquées, une analyse revue avant usage, et des métriques qui vont et viennent selon les besoins des décisions.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Validation stricte des données à la saisie | Évite tôt les erreurs | Friction pour les utilisateurs ; saisies de substitution |
| Nettoyage des données après coup | Souple ; ne ralentit pas les utilisateurs | Cache la cause ; des erreurs restent dans certains rapports |
| Équipe d'analytique centrale | Méthodes et qualité cohérentes | Goulot d'étranglement ; éloignement du travail |
| Analytique en libre-service par les équipes | Rapide ; proche du travail | Définitions incohérentes ; qualité inégale |
| Analyse assistée par l'IA | Brouillons rapides ; abaisse la barrière | Erreurs assurées ; faible reproductibilité |

La conclusion en bref est d'éviter les erreurs à la source, de partager définitions et filiation en un seul endroit et d'exiger une revue pour toute analyse qui éclaire une décision. La vitesse du libre-service et de l'IA est bienvenue quand la vérification suit.

## Questions à discuter avec votre équipe

**1. Quels trois chiffres de notre tableau de bord regretterions-nous le plus si les données sous-jacentes étaient fausses ?**
Commencez par les chiffres qui pilotent des décisions ou des objectifs. Demandez de quoi dépendent les données, et qui détient la source. Les gens découvrent souvent qu'un chiffre clé dépend d'un champ saisi à la main. Choisissez ensuite un chiffre à vérifier ce mois-ci.

**2. Quand deux rapports ont-ils divergé, et comment l'avons-nous résolu ?**
Les histoires de chiffres contradictoires montrent où les définitions diffèrent. Demandez si la résolution a été consignée et si la cause a été corrigée. L'animateur doit noter les causes répétées, comme des fuseaux horaires ou des définitions de statut différents. Convenez ensuite d'une définition et d'un responsable.

**3. Quel âge ont les données du rapport que nous regardons le plus ?**
Beaucoup de gens ne le savent pas. Demandez comment la fraîcheur est montrée et si un chargement périmé serait remarqué. Discutez du coût d'une décision fondée sur du périmé. Ajoutez ensuite la fraîcheur au rapport.

**4. Qui a revu la dernière analyse qui a changé une décision ?**
Cherchez une seconde paire d'yeux sur les définitions et les requêtes. S'il n'y en a pas, discutez des raisons. Demandez quelle revue serait proportionnée. Choisissez ensuite une simple étape de revue pour toute analyse qui éclaire une décision importante.

**5. Que ne peut pas nous dire notre métrique la plus utilisée ?**
Nommer les limites est l'habitude d'une bonne analytique. Demandez des angles morts précis, comme les utilisateurs qui ne contactent pas le soutien. Consignez les limites à côté de la métrique. Ajoutez ensuite une mesure qui couvre un angle mort.

**6. Comment utilisons-nous les outils d'IA pour écrire des requêtes et des résumés, et comment les vérifions-nous ?**
Demandez la pratique réelle, non la politique. Écoutez les productions non revues utilisées dans les rapports. Discutez d'un contrôle simple, comme rejouer sur un échantillon connu. Convenez ensuite d'une règle pour l'analyse assistée par l'IA.

## Quatre perspectives

### Équipes produit et de livraison

Vos outils produisent une grande part des données que d'autres analysent. Gardez fiables les horodatages, les identifiants et les statuts, et prévenez les utilisateurs de données quand un champ change. Incluez la qualité des données dans la définition de terminé des nouvelles fonctionnalités qui produisent des données.

### Équipes de service et d'exploitation

Les données de tickets dépendent de la manière dont les gens remplissent les formulaires sous pression. Faites de la bonne saisie la saisie facile, vérifiez la qualité des données dans l'outil et parlez quand une métrique lit mal le travail. N'antidatez pas ni ne mettez à jour en bloc des enregistrements pour améliorer un chiffre.

### Direction et gouvernance

Demandez la qualité des données et la filiation à côté de tout chiffre qui soutient une décision ou un objectif. Financez l'ingénierie des données et le temps de revue, pas seulement les tableaux de bord. Protégez la vie privée, et évitez d'utiliser l'analytique sur des individus pour évaluer des personnes.

### Clients et utilisateurs

Les données sur vous pilotent la manière dont le service vous traite : demandez donc ce qui est recueilli et comment c'est utilisé. Là où votre retour figure dans les données, comme des réponses d'enquête, demandez comment il est protégé et comment il a atteint une décision.

## En pratique : un exemple de gestion des services

Le service informatique d'une entreprise régionale de services publics construit un tableau de bord du temps de résolution des incidents et du taux d'échec des changements pour son équipe de direction. Les chiffres de cet exemple sont illustratifs. Le tableau de bord montre une médiane du temps de résolution de 3,1 heures et un taux d'échec des changements de 4 %.

Un analyste vérifie la qualité avant le lancement. La complétude du champ requis pour l'horodatage de résolution est de 91 %, les enregistrements manquants étant surtout des incidents majeurs saisis après coup. La fraîcheur est de 26 heures, parce que l'extraction s'exécute la nuit. Le rapprochement de l'enregistrement des changements avec le pipeline montre 8 % de changements de production de plus dans le pipeline que dans l'enregistrement des changements : le taux d'échec a donc un problème de dénominateur.

L'équipe fait des changements. Le formulaire de ticket exige l'heure de résolution et vérifie qu'elle est postérieure à l'heure d'ouverture. Le tableau de bord montre le nombre d'incidents derrière chaque chiffre, l'âge des données et la complétude des champs utilisés. Un contrat de données énonce que l'enregistrement des changements est le système de référence pour les changements approuvés et le pipeline pour les déploiements, avec un rapprochement mensuel. Le premier rapprochement explique l'écart par des changements d'urgence consignés seulement dans le pipeline.

Un risque de détournement apparaît quand un gestionnaire suggère d'exclure les incidents sans heure de résolution pour améliorer la complétude. L'équipe refuse et corrige la saisie. Le résultat est un intervalle médian plus large et un taux d'échec des changements de 6 %. Le journal de décisions consigne que l'équipe de direction a choisi d'attendre un trimestre avant de fixer un objectif. Ce qui reste difficile : les saisies antidatées ne sont pas toutes détectables, et le rapprochement dépend d'une liaison d'identifiant manuelle.

## Agilité, IA, automatisation et analytique

### Agilité

De courtes boucles de rétroaction aident la qualité des données : corriger le formulaire, vérifier les données du lendemain et interroger les utilisateurs. Une bonne pratique est de revoir les chiffres de qualité des données à la conversation d'amélioration régulière avec les personnes qui saisissent les données. La précaution est que des changements continus de champs et de statuts brisent les tendances : consignez donc chaque changement de définition.

### IA

L'IA peut écrire des requêtes, ébaucher des graphiques, résumer des commentaires et signaler des anomalies, et elle peut aussi inventer des résultats plausibles. Traitez l'analyse assistée par l'IA comme non revue tant qu'une personne n'a pas vérifié la requête et ne l'a pas rejouée sur un petit échantillon connu, et consignez qu'elle a été vérifiée. La précaution est que les résumés de commentaires d'enquête par l'IA peuvent mal lire la langue et le ton : lisez donc un échantillon des originaux.

### Automatisation

Automatisez les contrôles de qualité des données au chargement et au moment du rapport, et mesurez les pipelines sur leurs défaillances et leurs trous. Alertez sur les chargements manquants et les changements soudains de volume. La précaution est que des règles de nettoyage automatisées peuvent cacher un problème de source : rapportez donc ce qui a été changé et pourquoi.

### Analytique

Ce sujet porte sur l'analytique, la pratique est donc une courte note sur chaque métrique : sa question, sa décision, sa filiation, sa qualité et ses limites. La décision éclairée est de savoir si l'on fait assez confiance à un chiffre pour agir. La précaution est que des tableaux de bord à l'air propre peuvent reposer sur des données faibles : montrez donc les chiffres de qualité à côté du résultat et gardez en un seul registre les définitions de Service Management Metrics.

## Éclairage sectoriel

**Startup.** Les données sont petites et changeantes. Gardez une source de vérité par métrique, écrivez les définitions dans un court document et évitez de bâtir une plateforme de données avant que les questions soient claires.

**Petite entreprise.** Les données peuvent vivre dans un outil hébergé avec des rapports fixes. Vérifiez comment l'outil définit chaque mesure, exportez des échantillons pour vérifier et gardez une courte liste de ce que les rapports ne peuvent pas montrer.

**Grande entreprise.** De nombreuses sources et équipes créent des définitions conflictuelles. Utilisez un registre de métriques partagé, des contrats de données et un rapprochement régulier, et donnez aux équipes les moyens de vérifier leurs propres données.

**Gouvernement et secteur public.** Les documents peuvent être soumis à des règles de conservation, d'accès et de rapport public. Documentez la filiation de tout chiffre publié et gardez des règles de vie privée pour les données sur les personnes (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est le temps du personnel pour les contrôles de qualité des données, le rapprochement, la documentation et la revue, plus les outils pour les pipelines de données et les catalogues là où ils sont utilisés. Une bonne part peut commencer par de petites étapes, comme la validation dans le formulaire de ticket.

Le rendement est des décisions prises sur de meilleurs chiffres, moins de temps passé à discuter de quel rapport est juste et moins de reprise quand un chiffre mal lu est découvert tard. Décrivez-le comme un schéma, non comme un chiffre : moins de décisions annulées et moins de litiges. Si vous avez besoin de chiffres pour un dossier, mesurez vos propres références, comme l'écart de rapprochement et le temps passé à résoudre les litiges de rapports, avant et après le changement (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Nettoyer seulement dans le rapport.** La source continue de produire des erreurs. Corrigez la saisie et les contrôles au chargement.
- **Des tableaux de bord sans chiffres de qualité.** Les lecteurs ne peuvent pas juger le chiffre. Montrez la complétude, la fraîcheur et les décomptes.
- **Des définitions non documentées.** Les chiffres changent de sens en silence. Gardez la filiation et un journal des changements.
- **Une analyse non revue.** Les erreurs atteignent les décisions. Exigez un second regard.
- **Faire confiance aux résumés de l'IA.** Ils peuvent être fluides et faux. Vérifiez les requêtes et échantillonnez les originaux.
- **L'analytique sur des individus.** Elle tourne à la surveillance et corrompt les données. Rapportez au niveau de l'équipe avec une taille minimale de groupe.
- **Ne jamais retirer de rapports.** Ils s'accumulent et induisent en erreur. Revoyez l'usage et supprimez.
- **Des chiffres uniques sans incertitude.** Ils invitent à la réaction excessive. Montrez les décomptes et les plages.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Qualité des données | Qualité inconnue ; tableurs faits à la main | Complétude vérifiée pour les champs clés | Contrôles de qualité à la saisie et au chargement, montrés sur les rapports | Rapprochement et tendances de qualité revus à cadence régulière | Qualité gérée par des contrats de données entre équipes |
| Filiation et définitions | Définitions dans la tête des gens | Quelques définitions écrites | Registre avec source, responsable et journal des changements | Filiation retracée de bout en bout pour les métriques clés | Définitions partagées entre équipes et fournisseurs |
| Pratique d'analyse | Rapports ponctuels ; aucune revue | Quelque revue par les pairs | Questions, décisions et revue consignées | Analyse réutilisée, revue et retirée | Analytique intégrée aux décisions avec retour sur les résultats |

## Liste de vérification

- [ ] Chaque métrique clé liste les champs et horodatages dont elle dépend.
- [ ] Les champs requis sont validés à la saisie, et non nettoyés seulement plus tard.
- [ ] Les rapports montrent la complétude, la fraîcheur et le décompte derrière chaque taux.
- [ ] Au moins une quantité est rapprochée entre deux sources chaque trimestre.
- [ ] Un registre consigne la source, la transformation, le responsable et la date de revue de chaque métrique.
- [ ] Les changements de définition sont consignés et marqués sur les graphiques.
- [ ] Une analyse qui éclaire une décision est revue par une seconde personne.
- [ ] Des règles existent pour l'analyse assistée par l'IA, y compris un contrôle sur un échantillon connu.
- [ ] L'accès, la conservation et la taille minimale de groupe sont définis pour les données relatives aux personnes.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou montrés à côté.

## Prompts d'IA

**Rédigez des contrôles de qualité des données pour une métrique.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Passez en revue une analyse avant son usage.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Planifiez un rapprochement entre deux systèmes.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Passez en revue le risque de détournement des mesures de qualité des données.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills d'IA

- [Data quality](../../../../skills/data-quality/SKILL.md) : à utiliser pour définir et vérifier la qualité d'un jeu de données.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md) : à utiliser pour concevoir et revoir le pipeline qui charge les données de service.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour vérifier qu'une méthode et son incertitude conviennent à la question.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou associé.

## Idées clés

- Un chiffre ne vaut que par ses données : mesurez donc la complétude, la fraîcheur et le rapprochement et montrez-les à côté du résultat.
- Gardez la filiation et les définitions dans un seul registre, et consignez chaque changement.
- Revoyez l'analyse avant qu'elle éclaire des décisions, y compris celle qui est assistée par l'IA.
- Énoncez l'incertitude et les limites, et montrez le décompte derrière chaque taux.
- Gardez l'analytique au niveau de l'équipe et du service, avec des limites de vie privée sur les données relatives aux personnes.

## Références et lectures complémentaires

1. Wikipedia, [Analytique](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Qualité des données](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Filiation des données](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Gouvernance des données](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Maîtrise statistique des processus](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproductibilité](https://en.wikipedia.org/wiki/Reproducibility).
