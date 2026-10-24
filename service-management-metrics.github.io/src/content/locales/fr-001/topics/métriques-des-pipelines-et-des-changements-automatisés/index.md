# Métriques des pipelines et des changements automatisés

**Un pipeline de livraison est à la fois la voie par laquelle les changements atteignent les utilisateurs et la source des preuves qu'ils sont sûrs : mesurez donc sa vitesse, sa fiabilité, la part de l'approbation des changements qu'il traite et si les preuves qu'il produit convaincraient un auditeur, et lisez tout cela comme des mesures d'un système, jamais des personnes qui s'en servent.**

## Vue d'ensemble et motivation

Un pipeline d'[intégration continue](https://en.wikipedia.org/wiki/Continuous_integration) et de [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery) fait passer un changement du travail d'un développeur à un service en production par une construction automatisée, des tests, des contrôles de sécurité et un déploiement. Quand un pipeline est digne de confiance, il peut aussi prendre les décisions qu'un comité consultatif des changements prenait autrefois pour les changements de routine. ITIL appelle « maîtrise des changements » la pratique de gestion du changement, et son but est de laisser les changements bénéfiques se faire en sûreté et rapidement. Un pipeline qui exécute des contrôles, consigne les preuves et approuve automatiquement les changements à faible risque est une manière d'atteindre ce but.

Le pipeline est donc deux choses à la fois. C'est un système de production, avec sa propre disponibilité, sa vitesse et ses défaillances, et c'est un contrôle, avec des preuves sur ce qui a été testé, qui a revu et ce qui a été approuvé. Les deux demandent à être mesurés. Un pipeline rapide qui saute des contrôles est un risque. Un pipeline lent et instable pousse les gens à le contourner, et les changements contournés échappent à tous les contrôles que le pipeline devait fournir.

Ce sujet complète les mesures de changement de la partie 4 (voir le sujet 4.3, Métriques de maîtrise des changements, et le sujet 4.4, Échecs de changement et reprises) et les mesures de version (voir le sujet 4.5, Métriques des versions et des déploiements) en se concentrant sur le pipeline comme système. Il complète les mesures DORA (voir le sujet 2.8, Métriques DORA) en regardant ce qui se passe à l'intérieur du pipeline. Il se relie aussi aux mesures générales d'automatisation du sujet 10.6 (voir le sujet 10.6, Métriques d'automatisation et d'orchestration).

Termes employés ici. Une **exécution de pipeline** est une exécution du pipeline pour un changement. Une **étape** est un pas du pipeline, comme la construction ou le test. Un **test instable** (flaky) est un test qui tantôt passe et tantôt échoue sur le même code. Un **contournement** est un changement qui atteint la production sans passer par le pipeline, par exemple par un déploiement manuel d'urgence. La **politique sous forme de code** (policy as code) signifie écrire des règles, comme « aucun déploiement sans analyse de sécurité réussie », sous forme de logiciel que le pipeline applique. Les **preuves** sont la trace consignée de ce par quoi un changement est passé. Un **changement standard** dans ITIL est un type de changement à faible risque, bien compris et préapprouvé.

## Principes clés

- **Le pipeline est un service.** Mesurez sa fiabilité, sa vitesse et ses défaillances comme pour tout système de production, et donnez-lui un responsable.
- **Mesurez le contournement.** Le nombre de changements qui évitent le pipeline montre à quel point on peut lui faire confiance.
- **Automatisez l'approbation selon le risque, avec des preuves.** Préapprouvez ce qui est bien compris, et gardez la revue humaine pour ce qui ne l'est pas.
- **Les preuves sont un produit.** Ce que le pipeline consigne doit répondre aux questions d'un auditeur sans précipitation.
- **Le rapide et le sûr se mesurent ensemble.** Les mesures de vitesse sont appariées avec l'échec et la reprise.
- **Décrivez des systèmes, non des personnes.** Les données de pipeline sur qui a poussé un changement ne sont pas un classement de performance.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réussite du pipeline | Part des exécutions du pipeline qui se terminent sans défaillance causée par le pipeline ou son environnement | exécutions qui passent ou n'échouent que sur un véritable défaut du code / exécutions démarrées ; les exécutions annulées par l'utilisateur sont exclues et rapportées | pourcentage | Journaux de la plateforme de pipeline | Gestion des versions ; maîtrise des changements | Santé de l'intégration continue | Hebdomadaire |
| Durée du pipeline | Temps pour qu'un changement traverse le pipeline | médiane et 85e percentile de (heure où la dernière étape se termine moins heure où l'exécution démarre) pour les exécutions qui atteignent le déploiement | minutes | Journaux de la plateforme de pipeline | Gestion des versions | Courtes boucles de rétroaction | Hebdomadaire |
| Taux de tests instables | Part des échecs de tests qui passent à la reprise sans changement de code | échecs qui passent à la reprise / échecs de tests | pourcentage | Résultats de tests et journaux de reprise | Gestion des versions | Définition de terminé ; pratique de test | Mensuelle |
| Part d'approbation automatisée | Part des changements approuvés par la politique du pipeline sans étape d'approbation humaine | changements approuvés par la seule politique / changements déployés | pourcentage | Enregistrements du pipeline et des changements | Maîtrise des changements | Développement sur tronc commun avec contrôles automatisés | Mensuelle |
| Taux de contournement | Part des changements de production qui ne sont pas passés par le pipeline | changements de production faits hors du pipeline, trouvés en comparant les enregistrements de déploiement avec ceux du pipeline / tous les changements de production | pourcentage | Enregistrements de déploiement, audit de configuration et journaux du pipeline | Maîtrise des changements ; gestion de la configuration | Accords de travail | Mensuelle |
| Complétude des preuves | Part des changements déployés par le pipeline dont l'enregistrement montre les preuves exigées | changements avec tous les éléments de preuve exigés (tests, revue, analyse, approbation) reliés / changements déployés | pourcentage | Enregistrements du pipeline et des changements | Maîtrise des changements ; gouvernance | Définition de terminé | Mensuelle |
| Taux d'arrêt par les portes de politique | Part des exécutions arrêtées par un contrôle de politique, ventilée entre véritable violation et erreur de politique | exécutions arrêtées par une porte de politique / exécutions démarrées ; raisons classées par échantillonnage | pourcentage | Journaux du pipeline et enregistrements des portes | Maîtrise des changements ; gestion des risques | Critères d'acceptation | Mensuelle |

Le taux de réussite du pipeline exclut les exécutions annulées par une personne, qui sont rapportées à part, et compte comme échec du pipeline une défaillance causée par un test instable ou une faute d'environnement. Le taux de contournement exige un enregistrement indépendant de ce qui tourne en production : il ne peut donc pas être calculé à partir du seul pipeline.

## Recommandations

### Traiter le pipeline comme un service

**1. Donnez au pipeline un responsable et des objectifs.** Une équipe nommée détient la fiabilité et la vitesse du pipeline, avec des objectifs de niveau de service comme la part des exécutions qui se terminent dans un temps énoncé. Sans responsable, l'instabilité grandit jusqu'à ce que les gens cessent de lui faire confiance.

**2. Mesurez la durée comme une distribution.** Une médiane cache les exécutions lentes que les gens attendent. Montrez la médiane et le 85e percentile, et décomposez la durée par étapes pour trouver l'attente la plus longue, qui est souvent une file pour un exécuteur partagé ou une approbation manuelle.

**3. Suivez et corrigez les tests instables.** Un test instable apprend aux gens à relancer jusqu'à ce que ce soit vert. Comptez les échecs instables, attribuez chacun à un responsable et corrigez-le ou mettez-le en quarantaine avec une date. Un pipeline que les gens relancent par habitude ne produit pas de preuves.

### Automatiser l'approbation avec soin

**4. Classez les changements par risque.** Convenez avec les responsables des changements quelles sortes de changements sont standard et peuvent être approuvées par la politique, et lesquelles demandent une personne. Revoyez régulièrement la classification à l'aide des données d'échecs (voir le sujet 4.4, Échecs de changement et reprises).

**5. Écrivez la politique sous forme de code et testez-la.** Les règles que le pipeline applique sont du code, et demandent des tests et des responsables comme tout code. Consignez quelle version de la politique s'est appliquée à chaque exécution.

**6. Gardez un chemin humain pour l'inhabituel.** Les changements d'urgence et à haut risque ont besoin d'une personne qui peut décider avec les preuves. Testez que le chemin marche et mesurez le temps qu'il prend.

### Produire des preuves utiles

**7. Décidez des preuves dont vous avez besoin.** Remontez des questions que posent un auditeur ou un réviseur d'incident : qu'a-t-on testé, qui a revu, qu'a-t-on analysé, qui a approuvé et qu'a-t-on déployé. Faites consigner exactement cela par le pipeline et reliez-le au changement.

**8. Mesurez la complétude par échantillonnage.** La complétude des preuves selon le propre décompte du pipeline peut être élevée alors que le contenu est vide. Vérifiez un échantillon d'enregistrements pour confirmer que les preuves sont réelles et correspondent à ce qui a tourné.

**9. Gardez des preuves inviolables.** Stockez les enregistrements du pipeline là où les personnes qui déploient ne peuvent pas les modifier, et conservez-les pendant la durée exigée par vos règles. Vérifiez les exigences de conservation auprès de votre propre conseiller juridique.

### Guetter le contournement et la dérive

**10. Comparez la production avec le pipeline.** Rapprochez ce qui tourne en production de ce que le pipeline a déployé. Les différences sont des contournements ou de la dérive, et chacune mérite un bref regard sans blâme sur la raison pour laquelle le pipeline a été évité.

**11. Faites du pipeline le chemin le plus facile.** Les gens contournent les pipelines lents et instables. Si le contournement monte, regardez d'abord la vitesse et la fiabilité, et les besoins d'urgence que le pipeline ne satisfait pas.

**12. Revoyez les portes pour leur valeur.** Une porte qui n'arrête jamais un véritable défaut et retarde chaque exécution est candidate au retrait ou à la refonte. Une porte qui arrête beaucoup d'exécutions à cause d'erreurs de politique demande une correction de politique.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de réussite du pipeline | Reclasser les défaillances d'infrastructure comme annulées ; relancer jusqu'au vert et ne compter que la dernière exécution | Compter toutes les tentatives ; rapporter les reprises par changement |
| Durée du pipeline | Déplacer les étapes lentes hors de la fenêtre mesurée ; sauter des étapes | Mesurer de bout en bout de la validation au déployé ; comparer les étapes exécutées avec les étapes exigées |
| Taux de tests instables | Supprimer ou faire taire les tests instables ; marquer les échecs comme connus | Tendance du nombre de tests et de la couverture ; revoir les tests en quarantaine avec une date |
| Part d'approbation automatisée | Élargir la classe « standard » pour inclure des changements risqués | Taux d'échec des changements pour les changements approuvés automatiquement ; échantillonner les changements approuvés |
| Taux de contournement | Consigner les déploiements manuels d'urgence comme des exécutions du pipeline ; ne pas rapprocher avec la production | Rapprocher l'état de la production avec les enregistrements du pipeline ; échantillonner les déploiements |
| Complétude des preuves | Joindre des preuves vides ou non pertinentes ; relier un rapport générique | Échantillonner le contenu des preuves ; vérifier qu'il correspond au changement |
| Taux d'arrêt par les portes de politique | Assouplir les politiques pour réduire les échecs ; classer de véritables violations comme des erreurs de politique | Échantillonner les exécutions arrêtées ; taux de défauts échappés et constats d'audit |

Une lecture saine est un pipeline assez rapide et stable pour que les gens s'en servent pour tout, un taux de contournement proche de zéro avec chaque exception comprise, une part croissante d'approbations automatisées avec un taux d'échec des changements stable, et des preuves qui tiennent quand on les échantillonne.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Contrôles de pipeline lourds | Attrapent tôt les défauts ; preuves solides | Exécutions lentes ; plus d'instabilité ; pression de contournement |
| Pipeline léger | Retour rapide | Preuves plus faibles ; plus de défauts atteignent la production |
| Approbation automatisée des changements standard | Supprime l'attente ; décisions cohérentes | Risque d'élargir la classe ; les erreurs de politique passent à l'échelle |
| Approbation humaine de tous les changements | Familière ; redevabilité visible | Attente ; les approbations peuvent devenir des formalités |

La conclusion en bref est de garder le pipeline rapide et digne de confiance, de n'approuver par la politique que ce qui est bien compris et de mesurer le contournement. Des contrôles lourds que les gens évitent ne protègent rien.

## Questions à discuter avec votre équipe

**1. Quelle fraction de nos changements de production passe par le pipeline, et comment le savons-nous ?**
Demandez un moyen de comparer l'état de la production avec les enregistrements du pipeline. Les équipes trouvent souvent des corrections d'urgence, des changements de configuration et des changements de données qui contournent le pipeline. Attendez-vous à des réponses défensives : traitez donc chaque contournement comme de l'information. Demandez ensuite ce qui aurait fait du pipeline la voie la plus facile.

**2. Quels tests relançons-nous jusqu'à ce qu'ils passent, et qui les détient ?**
Les habitudes de relance montrent où la confiance s'est érodée. Faites une liste et attribuez des responsables. Discutez de corriger ou de retirer chacun. La conversation montre souvent que quelques tests causent l'essentiel du bruit.

**3. Quels changements approuvons-nous automatiquement aujourd'hui, et lesquels devrions-nous approuver ?**
Listez les types de changements et l'historique d'échecs de chacun. Décidez lesquels ont un faible risque et de bons tests. Demandez ce qui vous ferait cesser d'approuver automatiquement un type. Convenez ensuite d'une date de revue de la classification.

**4. Si un auditeur interrogeait sur le déploiement de mardi dernier, que pourrions-nous montrer ?**
Parcourez un vrai changement et sortez ses preuves. Remarquez les lacunes et les étapes manuelles. Demandez si les preuves ont été consignées sur le moment ou reconstituées plus tard. Choisissez ensuite une lacune à combler.

**5. Où notre pipeline passe-t-il son temps, et qui attend ?**
Regardez la ventilation par étapes. L'attente la plus longue est souvent une file ou une approbation manuelle. Demandez si les personnes qui attendent pourraient faire autre chose, et ce que l'attente coûte en retour retardé. Choisissez un retard à supprimer.

**6. Quelle porte n'a jamais rien arrêté d'utile ?**
Regardez les raisons d'arrêt des portes du dernier trimestre. Une porte qui n'a que des erreurs de politique demande une correction, et une porte qui n'arrête jamais rien peut être redondante. Demandez si la retirer élèverait le risque. Convenez d'un essai.

## Quatre perspectives

### Équipes produit et de livraison

Vous dépendez du pipeline chaque jour. Gardez des tests fiables, gardez des changements petits et traitez un test instable comme un défaut du produit. Servez-vous des données du pipeline pour trouver vos propres retards, et gardez-les à l'écart des conversations de performance individuelle.

### Équipes de service et d'exploitation

Vous héritez de ce que le pipeline met en production. Demandez les preuves dont vous avez besoin pour un incident, comme ce qui a changé et quand, et un retour arrière rapide. Suivez les contournements et la dérive, et portez-les à l'équipe comme une conversation sur le pourquoi.

### Direction et gouvernance

Financez le pipeline comme un service de production, avec un responsable, de la capacité et du temps pour corriger l'instabilité. Demandez le taux de contournement, la complétude des preuves par échantillonnage et le taux d'échec des changements des approbations automatisées. Résistez à la pression de compter les déploiements comme mesure de réussite.

### Clients et utilisateurs

Vous profitez de changements qui arrivent souvent et en sûreté, et vous souffrez quand un changement casse quelque chose. Demandez comment les changements sont testés et à quelle vitesse un mauvais changement est annulé. Vos signalements de problèmes après une version font partie du retour que le pipeline ne peut pas fournir.

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un pipeline pour son application de planification clinique. Les chiffres de cet exemple sont illustratifs. Un comité consultatif des changements se réunit chaque semaine, et les changements de routine attendent en moyenne quatre jours l'approbation. L'équipe propose d'approuver les changements standard par le pipeline.

Avant de commencer, ils mesurent. Le taux de réussite du pipeline est de 82 %, et un échantillon d'échecs montre qu'environ un tiers sont des tests instables. La durée au 85e percentile est de 47 minutes, avec une file de 20 minutes pour un exécuteur de construction partagé. La comparaison des enregistrements de déploiement avec ceux du pipeline montre qu'environ 12 % des changements de production ont contourné le pipeline, surtout des modifications de configuration et des correctifs urgents.

L'équipe corrige les cinq tests les plus instables, ajoute un exécuteur de construction et crée un chemin de changement de configuration par le pipeline. Au bout de trois mois, le contournement tombe à 3 %. Ils définissent alors une classe de changements standard de petits changements testés et réversibles de l'application de planification, avec des contrôles de politique pour les tests, une analyse de sécurité et une revue par les pairs. La part d'approbation automatisée atteint environ 40 %, et le délai d'approbation pour ces changements tombe de jours à minutes.

Un risque de détournement apparaît. Un gestionnaire demande de relever la part d'approbation automatisée en ajoutant à la classe standard les changements de schéma de base de données. L'équipe vérifie le taux d'échec des changements de schéma, qui est plus élevé que pour les autres changements, et les garde avec un réviseur humain. La complétude des preuves selon le décompte du pipeline est de 98 %, mais un échantillon de 20 enregistrements montre que quatre portaient un rapport de test d'une autre construction. L'équipe corrige la règle de liaison. Ce qui reste difficile : le contournement pour les correctifs d'urgence demande encore un enregistrement après coup, et la revue de risque clinique pour les changements qui touchent la sécurité des patients reste entre les mains de personnes.

## Agilité, IA, automatisation et analytique

### Agilité

De petits changements fréquents par un pipeline digne de confiance sont le cœur de la livraison continue, et le backlog du pipeline lui-même mérite la même revue régulière avec les parties prenantes que le produit. Une bonne pratique est de revoir les tests instables et les contournements à une conversation d'amélioration régulière. La précaution est que célébrer la seule fréquence de déploiement récompense le fait de scinder les changements.

### IA

L'IA peut écrire du code et des tests, revoir des changements et évaluer le risque des changements à l'intérieur du pipeline. Marquez les changements assistés par l'IA dans les données et comparez leur échec et leur reprise avec ceux des autres changements (voir le sujet 10.2, Mesurer le travail assisté par l'IA). Si une porte d'IA décide ou recommande, mesurez ses fausses approbations et ses faux arrêts par échantillonnage, et gardez un humain redevable pour les changements à haut risque. La précaution est que des tests générés par l'IA peuvent faire monter les chiffres de couverture sans tester le comportement qui compte.

### Automatisation

Le pipeline est l'automatisation : la pratique est donc de le traiter comme un service de production avec des journaux, un responsable et un recours manuel pour les urgences. Automatisez le recueil des preuves et le rapprochement de la production avec les enregistrements du pipeline. La précaution est que les approbations automatisées multiplient l'effet d'une erreur de politique : testez donc les politiques et gardez un contrôle de suspension.

### Analytique

Utilisez les événements du pipeline pour montrer où va le temps et où se regroupent les échecs, et reliez les exécutions aux incidents et à la reprise. La décision éclairée est où investir dans la vitesse, la fiabilité ou les tests. La précaution est que les données du pipeline ne montrent pas la qualité des tests : combinez-les donc avec les défauts échappés, et montrez le nombre d'exécutions derrière chaque taux (voir le sujet 10.8, Métriques d'analytique et de qualité des données).

## Éclairage sectoriel

**Startup.** Un pipeline simple avec des tests rapides et un déploiement automatique en production peut suffire. Mesurez la durée et le contournement, et consignez les preuves des tests et de la revue dans le dépôt.

**Petite entreprise.** Le pipeline peut être un service hébergé ou celui d'un fournisseur. Demandez ce qu'il consigne et où, et gardez un moyen de reconstituer ce qui a été déployé. Évitez de construire des contrôles que vous ne maintiendrez pas.

**Grande entreprise.** De nombreux pipelines entre équipes demandent des formats de preuves communs et une politique partagée. Gardez une vue centrale du contournement et de la complétude des preuves, avec la responsabilité des corrections au niveau des équipes. Évitez d'imposer un seul outil là où les équipes ont des besoins différents.

**Gouvernement et secteur public.** La séparation des tâches, les pistes d'audit et les règles de conservation façonnent le pipeline. Concevez les preuves pour l'audit, et vérifiez les exigences juridiques et de passation de marchés, y compris pour les décisions automatisées (voir le sujet 8.3, Métriques de conformité et d'audit, et le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont la plateforme de pipeline et les exécuteurs, le travail d'écriture et de maintenance des tests et de la politique, le temps de correction de l'instabilité et le coût de stockage des preuves. Les mesures elles-mêmes coûtent peu quand les enregistrements du pipeline et des changements sont reliés.

Le rendement est des attentes d'approbation plus courtes, moins d'étapes manuelles, une détection plus précoce des défauts et des preuves prêtes quand on en a besoin. Cela se voit en livraison plus rapide et en moins d'effort au moment de l'audit, mais c'est facile à surestimer. Mesurez vos propres références, comme le délai d'approbation et l'effort pour rassembler les preuves d'audit, avant et après, et énoncez les hypothèses sous forme de plages (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Le côté risque est le coût des défaillances qui échappent au pipeline et d'une panne de pipeline qui bloque tout changement.

## Anti-modèles et pièges

- **Compter les déploiements comme un succès.** Cela récompense le fait de scinder les changements. Appariez avec l'échec et la reprise.
- **Relancer jusqu'au vert.** Cela cache les tests instables et des preuves faibles. Comptez les instabilités et corrigez-les.
- **Ignorer le contournement.** Les changements qui évitent le pipeline sont ceux qu'il ne peut pas protéger. Rapprochez la production et les enregistrements du pipeline.
- **Élargir la classe standard pour faire monter l'automatisation.** La part monte et le taux d'échec suit. Revoyez la classe avec les données d'échecs.
- **Des preuves qui existent mais ne disent rien.** Échantillonnez le contenu, non la seule présence.
- **Un pipeline sans responsable.** Il se dégrade. Nommez une équipe et donnez-lui du temps.
- **Traiter les erreurs de politique comme des défauts de code.** Les gens apprennent à ignorer les portes. Classez les arrêts et corrigez la politique.
- **Aucun chemin manuel pour les urgences.** Les gens contournent. Fournissez un chemin rapide et audité.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Fiabilité du pipeline | Constructions improvisées ; défaillances fréquentes et inexpliquées | Un pipeline existe ; réussite suivie | Responsable, objectifs et traitement des tests instables | Durée et défaillances revues par étape | Les pipelines partagent des schémas et de la capacité entre équipes |
| Approbation et politique | Approbation manuelle de tous les changements | Quelques changements standard définis | Politique sous forme de code pour les changements standard, avec tests | Classes d'approbation revues avec les données d'échecs | L'approbation fondée sur le risque s'adapte automatiquement dans des limites convenues |
| Preuves et contournement | Preuves reconstituées après coup | Quelques preuves consignées | Preuves exigées consignées et reliées | Contournement rapproché et complétude échantillonnée | Preuves et rapprochement entièrement automatisés et audités |

## Liste de vérification

- [ ] Le pipeline a un responsable nommé et des objectifs de fiabilité et de vitesse.
- [ ] Le taux de réussite du pipeline et les percentiles de durée sont rapportés par étape.
- [ ] Les tests instables sont comptés et chacun a un responsable et une date de correction.
- [ ] Les classes de changements standard sont définies avec des critères de risque et revues avec les données d'échecs.
- [ ] Les politiques sont du code, testées et versionnées, et la version est consignée pour chaque exécution.
- [ ] L'état de la production est rapproché des enregistrements du pipeline pour trouver les contournements.
- [ ] Les preuves exigées sont définies et consignées pour chaque changement déployé.
- [ ] La complétude des preuves est vérifiée en échantillonnant le contenu.
- [ ] Un chemin d'urgence audité existe et est testé.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou montrés à côté.

## Prompts d'IA

**Classez les changements par risque pour l'approbation automatisée.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Définissez les preuves qu'un pipeline doit consigner.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Analysez les données de tests instables.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Passez en revue le risque de détournement du tableau de bord du pipeline.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills d'IA

- [Change request](../../../../skills/change-request/SKILL.md) : à utiliser pour définir ce que doivent contenir un enregistrement de changement et ses preuves.
- [Release notes](../../../../skills/release-notes/SKILL.md) : à utiliser pour transformer la sortie du pipeline en notes pour les utilisateurs et l'exploitation.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou associé.

## Idées clés

- Un pipeline est à la fois un service de production et un contrôle : mesurez donc sa fiabilité, sa vitesse et les preuves qu'il produit.
- Mesurez le contournement en rapprochant la production des enregistrements du pipeline, et faites du pipeline le chemin le plus facile.
- N'approuvez automatiquement que les changements bien compris, avec une politique testée et un chemin humain pour le reste.
- Comptez les tests instables et corrigez-les, car relancer jusqu'au vert détruit la confiance et les preuves.
- Échantillonnez le contenu des preuves, car les décomptes de complétude seuls peuvent être satisfaits avec des enregistrements vides.

## Références et lectures complémentaires

1. Wikipedia, [Intégration continue](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Déploiement de logiciel](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Automatisation des tests](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
