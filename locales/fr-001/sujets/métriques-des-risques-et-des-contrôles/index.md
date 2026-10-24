# Métriques des risques et des contrôles

**Le travail sur les risques est une conversation continue sur ce qui pourrait mal tourner et ce que nous faisons à ce sujet : gardez donc le registre court et vivant, testez les contrôles qui comptent, et méfiez-vous de tout chiffre qui fait paraître l'incertitude bien rangée.**

## Vue d'ensemble et motivation

Chaque changement apporté à un service comporte un risque, tout comme le fait de le laisser tel quel. La [gestion des risques](https://en.wikipedia.org/wiki/Risk_management) est l'identification, l'évaluation et la priorisation des risques, suivies d'une action coordonnée pour les réduire, les accepter, les transférer ou les éviter. ITIL traite le risque comme un fil qui traverse chaque pratique : la maîtrise des changements décide du degré d'examen d'un changement, la continuité des services planifie les perturbations, la sécurité de l'information protège contre les menaces. Les façons de travailler agiles et DevOps réduisent le risque autrement. De petits changements livrés en continu, avec un retour rapide et la capacité de revenir en arrière, rendent chaque changement moins dangereux et rendent les problèmes visibles plus tôt.

Les deux visions se rencontrent dans les métriques. Une équipe qui livre en continu doit tout de même connaître ses principaux risques, savoir qui en est responsable et si les contrôles sur lesquels elle s'appuie fonctionnent. Une fonction de risque qui insiste sur une lourde approbation doit tout de même avoir des preuves que ses contrôles réduisent le préjudice et ne se contentent pas de ralentir les gens. Ce sujet donne les mesures pour les deux, et il s'appuie sur les pratiques décrites dans les sujets voisins sur la sécurité et l'audit (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités, et le sujet 8.3, Métriques de conformité et d'audit).

Quatre termes reviennent.

- **Risque :** un événement ou une condition incertains qui, s'ils se produisent, affectent des objectifs. Il a une cause, un événement et une conséquence, et une probabilité et un impact qui sont généralement estimés, non connus.
- **Registre des risques :** la liste des risques identifiés avec leurs responsables, leurs évaluations et leurs réponses. Un [registre des risques](https://en.wikipedia.org/wiki/Risk_register) est un outil de travail quand il est à jour et lu, et un artefact de conformité quand il ne l'est pas.
- **Contrôle :** une action ou un mécanisme qui réduit un risque, comme une revue, un test automatisé, une approbation, une séparation des tâches ou une alerte de supervision. L'ensemble des contrôles sur lesquels une organisation s'appuie est son système de [contrôle interne](https://en.wikipedia.org/wiki/Internal_control).
- **Indicateur de risque clé (KRI) :** une mesure qui signale un changement du niveau d'un risque avant que la perte se produise. Un [indicateur de risque clé](https://en.wikipedia.org/wiki/Key_risk_indicator) est utile quand il précède un événement et quand quelqu'un agit sur lui.

La quantification des risques a des faiblesses bien connues. Une [matrice des risques](https://en.wikipedia.org/wiki/Risk_matrix), qui place la probabilité face à l'impact sur une grille de cellules colorées, est largement utilisée et largement critiquée : les évaluations sont subjectives, des risques différents peuvent tomber dans la même cellule pour des raisons différentes, et l'arithmétique qui multiplie des scores ordinaux n'a pas de base solide. Les événements rares et graves, parfois décrits par la [théorie du cygne noir](https://en.wikipedia.org/wiki/Black_swan_theory), sont particulièrement difficiles à évaluer. La réponse honnête est d'utiliser la matrice comme aide à la conversation, de montrer des plages et de l'appuyer par des preuves sur les contrôles et les incidents. Le cadre des trois lignes de défense, qui sépare les équipes qui détiennent le risque, celles qui le supervisent et l'assurance indépendante, offre une structure pour les rôles, et il marche mieux quand la première ligne, les équipes de livraison et d'exploitation, détient réellement ses risques.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique de façon particulière au rapport de risque. Quand une évaluation rouge attire l'examen, les gens évaluent les risques en orange. Quand un risque clos est un succès, les gens closent des risques sans les traiter (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Gardez le registre court et à jour.** Quelques risques bien détenus et revus valent mieux que des centaines qui ne le sont pas.
- **Faites détenir ses risques par la première ligne.** Les personnes les plus proches du travail le connaissent le mieux.
- **Testez les contrôles sur lesquels vous vous appuyez.** Un contrôle qui n'a jamais été testé est un espoir.
- **Préférez les indicateurs avancés sur lesquels quelqu'un agit.** Un indicateur sans plan de réponse est de la décoration.
- **Montrez des plages et des preuves, non une fausse précision.** Les évaluations sont des estimations.
- **Réduisez le risque en rendant le changement petit et réversible.** La livraison continue avec un retour arrière rapide est un contrôle.
- **Parlez du risque sans blâme.** Le rapport honnête est la matière première de toute la pratique.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Actualité de la revue des risques | Part des risques ouverts revus par leur responsable dans l'intervalle convenu | risques revus dans l'intervalle / risques ouverts | pourcentage | Dates de revue du registre des risques | Gestion des risques ; amélioration continue | Risques revus dans les conversations de planification et de revue | Mensuelle |
| Couverture des responsables | Part des risques ouverts ayant un responsable nommé et à jour qui a accepté la responsabilité | risques avec un responsable actuel confirmé / risques ouverts | pourcentage | Registre des risques joint à l'annuaire des personnes | Gestion des risques | Risques détenus par l'équipe au backlog | Mensuelle |
| Couverture des tests de contrôles | Part des contrôles clés testés pour leur fonctionnement dans le cycle exigé | contrôles clés testés dans le cycle / contrôles clés | pourcentage | Registre des contrôles et enregistrements de tests | Gestion des risques ; gestion de la sécurité de l'information | Contrôles automatisés dans le pipeline | Trimestrielle |
| Taux d'efficacité des contrôles | Part des contrôles testés jugés fonctionner comme conçu | contrôles jugés efficaces / contrôles testés | pourcentage | Résultats de tests | Gestion des risques ; amélioration continue | Tests automatisés qui passent pour les bonnes raisons | Trimestrielle |
| Délai de réponse à une brèche de KRI | Temps entre le franchissement de son seuil par un indicateur de risque clé et une décision consignée | médiane et 85e percentile des heures ou des jours entre la brèche et la décision | heures ou jours | Supervision des KRI et journal des décisions | Gestion des risques ; supervision et gestion des événements | Réaction à un signal de production | Mensuelle |
| Ponctualité des plans de traitement | Part des traitements de risques achevés à leur date d'engagement | traitements achevés à la date / traitements dus dans la période | pourcentage | Registre des risques et suivi des actions | Gestion des risques ; amélioration continue | Actions d'amélioration livrées | Trimestrielle |
| Part de changements fondés sur le risque | Part des changements approuvés par des voies fondées sur le risque avec les preuves de contrôle jointes | changements approuvés par une voie fondée sur le risque avec les preuves requises / changements de la période | pourcentage | Enregistrements de changements | Maîtrise des changements ; gestion des risques | Changements livrés en continu avec des contrôles automatisés | Mensuelle |

Définissez l'intervalle de revue et la liste des contrôles clés dans le registre. Un contrôle n'est « testé » que lorsque le test examine des preuves de fonctionnement, non seulement de conception. L'horloge du KRI démarre quand l'indicateur franchit son seuil, tel qu'enregistré par le système de supervision, et s'arrête à une décision écrite, qui peut être d'agir, d'accepter ou de changer le seuil. N'excluez les risques en cours de retrait du dénominateur qu'après une décision de clôture consignée.

## Recommandations

### Garder vivante la conversation sur les risques

**1. Gardez le registre court et rédigez chaque risque sous une forme standard.** Utilisez une phrase de la forme « En raison de [cause], [événement] pourrait se produire, entraînant [conséquence]. » Limitez le registre aux risques qui changeraient une décision ou un plan. Fusionnez les doublons, scindez les risques vagues et retirez ceux qui sont passés. Une liste de quelques dizaines de risques dont les gens discutent vaut plus que mille que personne ne lit.

**2. Attribuez chaque risque à un responsable qui peut agir.** Le responsable est la personne qui a autorité sur la réponse, généralement dans l'équipe de livraison ou d'exploitation, non dans la fonction de risque. Confirmez la responsabilité auprès de la personne, et revoyez-la quand les gens changent de rôle. La couverture des responsables mesure cela, et un risque sans responsable est un constat.

**3. Revoyez les risques dans les conversations qui ont déjà lieu.** Soulevez les principaux risques à la planification, à la revue et dans les revues d'incidents, au lieu de créer une réunion distincte. L'habitude agile de réfléchir régulièrement à la manière de devenir plus efficace est un foyer naturel pour la question « qu'est-ce qui pourrait nous nuire ensuite ? » Consignez le résultat dans le registre.

**4. Appariez les évaluations avec des preuves et des plages.** Pour chaque risque important, consignez ce qui vous fait penser qu'il est probable ou grave : incidents, quasi-incidents, résultats de tests, historique des fournisseurs. Donnez une plage de probabilité et d'impact là où vous le pouvez, et dites votre degré d'incertitude. Ne combinez pas des scores ordinaux en un chiffre unique que vous traitez comme une mesure. Si vous utilisez une matrice, servez-vous-en pour lancer une discussion (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Tester les contrôles

**5. Nommez les contrôles clés et l'objet de chacun.** Pour chaque risque majeur, listez les quelques contrôles sur lesquels vous vous appuyez, et à quoi ressemblerait la défaillance de chacun. Un registre de contrôles qui liste des centaines d'activités mineures cache ceux qui comptent. Incluez les contrôles automatisés du pipeline, comme les tests, les contrôles de politique et les portes d'approbation.

**6. Testez le fonctionnement, pas seulement la conception.** Une revue de conception demande si le contrôle marcherait s'il était exécuté. Un test de fonctionnement demande s'il a été exécuté et s'il a marché dans la période, en examinant des échantillons de preuves. Planifiez les tests sur un cycle qui correspond au risque, consignez les résultats et suivez les défaillances. Quand c'est possible, automatisez les preuves, pour que les tests aient lieu en continu.

**7. Traitez les défaillances de contrôle comme de l'information.** Un test échoué, c'est le système de contrôle qui fonctionne. Consignez l'échec, demandez pourquoi et corrigez la cause. Le taux d'efficacité des contrôles doit se lire avec le suivi : des défaillances trouvées et corrigées vite sont plus saines qu'un taux parfait qui vient de tests faibles.

**8. Utilisez l'assurance indépendante là où elle apporte de la valeur.** L'audit interne ou un réviseur indépendant peut tester les contrôles que la première ligne détient et que la deuxième ligne supervise. L'indépendance protège contre le fait de corriger son propre travail. Coordonnez-vous pour que les équipes ne soient pas testées par trois groupes pour la même chose.

### Bien utiliser les indicateurs et les décisions

**9. Choisissez quelques indicateurs avancés par risque majeur.** Un indicateur de risque clé doit être peu coûteux à mesurer, lié à une cause et apparié à un seuil et à une réponse. Par exemple, l'âge de la plus ancienne vulnérabilité critique signale le risque de sécurité, et la part des changements exigeant un traitement d'urgence signale le risque de changement. Définissez qui regarde l'indicateur et ce qu'il fera au seuil (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités).

**10. Consignez la décision à chaque brèche.** Quand un indicateur franchit un seuil, quelqu'un décide : agir, accepter ou ajuster le seuil. Écrivez la décision et la raison. Cela construit un historique qui montre si les seuils sont bien fixés et si la réponse est opportune.

**11. Faites de l'approbation fondée sur le risque le défaut pour le changement.** Dans un cadre de livraison continue, remplacez les comités d'approbation généralisés par des voies fondées sur le risque : contrôles automatisés et revue par les pairs pour les changements standard à faible risque, et revue plus complète pour les quelques changements à haut risque (voir le sujet 4.3, Métriques de maîtrise des changements). Joignez la preuve que les contrôles ont tourné. Cela réduit à la fois le risque et le délai, car de petits changements avec des preuves automatisées sont plus sûrs que de grands changements avec une signature.

**12. Apprenez des pertes et des quasi-incidents.** Après les incidents et les frôlements, mettez à jour le registre : le risque était-il là, était-il bien évalué, le contrôle a-t-il fonctionné ? Servez-vous des réponses pour améliorer les deux. La boucle entre les événements et le registre est ce qui garde le registre honnête (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Actualité de la revue des risques | Marquer des risques comme revus sans discussion ; changer l'intervalle | Échantillonner les revues pour leur substance ; intervalle fixe dans le registre |
| Couverture des responsables | Attribuer des responsables à leur insu ; nommer une personne haut placée sans autorité | Confirmation du responsable ; vérifier que les responsables peuvent agir sur la réponse |
| Couverture des tests de contrôles | Tester les contrôles faciles ; compter des revues de conception comme des tests de fonctionnement | Liste des contrôles clés fixée par un tiers ; type de test consigné |
| Taux d'efficacité des contrôles | Tester de petits échantillons ; choisir des échantillons qui passent | Méthode d'échantillonnage indépendante du responsable ; taille de l'échantillon consignée |
| Délai de réponse à une brèche de KRI | Changer le seuil après une brèche ; consigner une décision sans contenu | Journal des changements de seuils ; échantillon du contenu des décisions |
| Ponctualité des plans de traitement | Fixer des dates faciles ; redéfinir l'achèvement | Dates convenues avec le responsable à l'approbation ; vérifier que l'évaluation du risque a bougé |
| Part de changements fondés sur le risque | Classer des changements comme à faible risque pour éviter la revue ; joindre des preuves non produites par des contrôles | Échantillonner la classification face aux règles ; preuves automatisées issues du pipeline |

Une lecture saine est un registre court dont les gens débattent, des responsables qui connaissent leurs risques, des contrôles testés avec quelques défaillances trouvées et corrigées, des indicateurs qui mènent à de vraies décisions, et moins d'approbations lourdes pour les petits changements.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Matrice des risques | Rapide, visuelle, déclencheur de conversation | Subjective ; fausse précision ; arithmétique ordinale |
| Plages quantifiées | Plus honnêtes sur l'incertitude | Demandent des données et de la compétence ; effort |
| Comités d'approbation lourds | Contrôle visible | Lents ; encouragent le regroupement des changements |
| Contrôles automatisés fondés sur le risque | Rapides et cohérents | Demandent de l'ingénierie ; les contrôles automatisés peuvent se tromper |
| La fonction de risque centrale détient les risques | Cohérence | Loin du travail ; responsables désengagés |
| Responsabilité de la première ligne | Connaissance et redevabilité | Qualité variable ; demande de la supervision |
| Test périodique des contrôles | Efficace pour les contrôles stables | Manque la dérive entre les tests |
| Surveillance continue des contrôles | Preuves opportunes | Effort d'outillage ; bruit |

La réponse en bref est de placer la responsabilité auprès des équipes, d'appliquer une supervision centrale légère et des tests indépendants, d'automatiser les preuves quand c'est possible et d'utiliser les évaluations comme des invites à la conversation.

## Questions à discuter avec votre équipe

**1. Quels sont les trois risques les plus susceptibles de nuire à ce service dans l'année qui vient, et qui détient chacun ?**
Demandez à chaque membre d'écrire trois risques en privé, puis comparez. Les recoupements et les différences sont tous deux instructifs. L'animateur doit consigner qui agirait sur chaque risque. Convenez des trois principaux et confirmez les responsables.

**2. De quel contrôle dépendons-nous le plus, et quand avons-nous vérifié pour la dernière fois qu'il fonctionne ?**
Choisissez un contrôle, comme une règle de revue de code, une sauvegarde ou une étape d'approbation. Retracez la dernière fois qu'une preuve de son fonctionnement a été examinée. Si personne ne le sait, planifiez un test. La conversation montre la différence entre conception et fonctionnement.

**3. Qu'est-ce qui nous ferait passer une évaluation d'orange à rouge, et qui le remarquerait ?**
Discutez des indicateurs et des seuils. Demandez si l'équipe a déjà rétrogradé une évaluation pour éviter l'attention, et quelle pression l'a causé. Convenez des preuves qui justifieraient un changement, et de la manière de faire du rouge une chose sûre à dire.

**4. Quelles approbations ralentissent nos changements sans réduire le risque ?**
Listez les approbations dont un changement typique a besoin, et pour chacune demandez quel risque elle traite et si elle a déjà arrêté un changement. Proposez d'en remplacer une par un contrôle automatisé. Convenez des preuves qui montreraient que le changement est sûr.

**5. Quand un contrôle a échoué, comment l'avons-nous découvert et qu'avons-nous fait ?**
Rappelez une défaillance récente. A-t-elle été trouvée par un test, par un incident ou par un auditeur ? Discutez de ce à quoi ressemblerait une boucle plus solide. Incluez la manière dont a été traitée la personne qui l'a trouvée.

**6. Quels risques avons-nous acceptés, et quand revoyons-nous cette décision ?**
Listez les risques acceptés et les dates de revue. Vérifiez que chacun a un responsable et une raison. Un risque accepté sans date de revue est un risque que personne ne surveille.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent l'essentiel du risque opérationnel. Elles doivent tenir une courte liste de leurs propres risques, en discuter à la planification et à la revue et intégrer des contrôles au pipeline pour que les preuves soient automatiques. Elles profitent de voies de changement fondées sur le risque qui laissent circuler les changements à faible risque, et elles doivent être honnêtes sur ce qui pourrait mal tourner.

### Équipes de service et d'exploitation

Les équipes d'exploitation exécutent les contrôles : sauvegardes, supervision, revues d'accès et tests de reprise. Elles doivent conserver les preuves de fonctionnement, tester les contrôles selon un cycle régulier et lever tôt les brèches d'indicateurs. Elles supportent le coût des contrôles lourds et doivent dire lesquels apportent peu.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et décident quel degré de friction est acceptable. Ils doivent demander une courte liste des principaux risques avec responsables et preuves, accueillir les évaluations rouges, financer les tests de contrôles et soutenir l'assurance indépendante. La gouvernance doit vérifier que le registre reflète les incidents et les quasi-incidents, et ne pas récompenser les rapports d'apparence bien rangée.

### Clients et utilisateurs

Les utilisateurs subissent les conséquences des risques qui se concrétisent, et les connaissent souvent avant le registre. Ils doivent avoir un moyen de signaler des préoccupations et être informés des risques qui les touchent, dans les limites de la confidentialité. Leur expérience des incidents et des changements est une preuve pour les revues de risques.

## En pratique : un exemple de gestion des services

Le groupe numérique d'une entreprise nationale d'énergie exploite la facturation des clients, une application mobile et des intégrations avec l'exploitation du réseau. Les chiffres ci-dessous sont illustratifs.

Le registre des risques du groupe compte 340 entrées, nettoyées pour la dernière fois il y a trois ans. L'actualité de la revue des risques est de 22 %, et 61 risques ont des responsables qui sont partis. La matrice montre 85 risques en rouge, et personne ne lit le rapport. La nouvelle responsable de l'assurance des services propose une remise à zéro. Avec les équipes de livraison, elle ramène le registre aux risques qui changeraient une décision, pour aboutir à 38. Elle attribue chacun à un responsable nommé de l'équipe qui peut agir, et ils confirment. Elle choisit 12 contrôles clés et teste le fonctionnement de chacun, au lieu de revoir la conception. Cinq échouent : deux restaurations de sauvegarde n'avaient jamais été testées, une revue d'accès avait été sautée, et deux approbations de changements avaient été signées sans preuve de test.

L'équipe corrige les défaillances et remplace le comité d'approbation des changements standard par des voies fondées sur le risque. Les tests automatisés et la revue par les pairs sont les contrôles, et le pipeline joint les preuves à l'enregistrement du changement. Chaque risque majeur reçoit un ou deux indicateurs avancés avec des seuils et des réponses. Pour le risque de panne de facturation prolongée, les indicateurs sont l'âge de la plus ancienne vulnérabilité critique et le nombre de restaurations de sauvegarde échouées dans le trimestre. Le premier trimestre montre des responsables qui confirment les 38 risques, une actualité de revue de 91 %, un taux d'efficacité des contrôles de 7 sur 12 au premier test et de 12 sur 12 après corrections, et un délai médian de réponse aux brèches de KRI de 2 jours. La part des changements passant par des voies fondées sur le risque est de 64 %.

Le directeur des risques demande que le nombre de risques rouges baisse de moitié en un an. La responsable de l'assurance des services propose de suivre la ponctualité des plans de traitement et l'efficacité des contrôles, et explique que le nombre de risques rouges peut baisser par réévaluation et qu'elle préfère voir des évaluations rouges honnêtes. La décision est consignée, et le rapport du trimestre suivant inclut les décisions échantillonnées derrière chaque rétrogradation.

## Agilité, IA, automatisation et analytique

### Agilité

Gardez vivant le registre des risques par des conversations régulières avec les parties prenantes plutôt que par une revue annuelle. La précaution est que des scores chiffrés peuvent faire paraître l'incertitude bien rangée.

### IA

Les systèmes d'IA ont besoin d'entrées dans le registre des risques avec un responsable, un point de revue humaine et une date de revue. Mesurez l'efficacité des contrôles de supervision de l'IA en la testant. La précaution est qu'une politique qui dit qu'un humain relit la sortie n'est pas un contrôle tant que personne ne la teste.

### Automatisation

Automatisez les contrôles là où ils peuvent être testés, et mesurez l'automatisation sur les contrôles échoués et sautés. La précaution est qu'un contrôle automatisé qui passe peut tester la mauvaise chose.

### Analytique

Rapportez la couverture et l'efficacité des tests de contrôles avec la taille de l'échantillon. La décision éclairée est quels contrôles renforcer. La précaution est que de petits échantillons et un score subjectif limitent la précision : dites-le donc.

## Éclairage sectoriel

**Startup.** Les risques concernent surtout le manque d'argent, la perte de personnes clés et une panne majeure. Gardez une liste d'une page des cinq premiers, revoyez-la chaque mois et testez les sauvegardes et les restaurations. Intégrez les contrôles au pipeline dès le départ, car c'est moins cher que de les ajouter après coup.

**Petite entreprise.** Une poignée de risques dominent : dépendance envers une personne clé, un fournisseur unique, rançongiciel et perte de données. Gardez une courte liste avec des responsables, testez les restaurations et tenez à jour l'assurance et les coordonnées. Résistez aux cadres lourds et empruntez-leur ce qui convient.

**Grande entreprise.** L'échelle appelle une taxonomie commune, un outillage de registre léger et les trois lignes de défense en pratique. Faites détenir ses risques par la première ligne, gardez la deuxième ligne petite et consultative, et rendez les tests indépendants efficaces. Évitez les tests en double entre l'audit, le risque et la conformité.

**Gouvernement et secteur public.** La gestion des risques est souvent un devoir formel avec des cadres standard, des comités d'audit et des rapports publics. Alignez-vous sur le cadre exigé, documentez les énoncés d'appétit pour le risque et conservez les preuves. La redevabilité publique rend les évaluations rouges honnêtes plus précieuses, et aussi plus difficiles (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps des responsables pour revoir les risques, l'effort de définir les contrôles clés et de les tester, l'outillage du registre et de la supervision des indicateurs s'il n'est pas déjà présent, et le coût de l'assurance indépendante. Automatiser la collecte des preuves demande un effort d'ingénierie puis réduit le coût récurrent.

Les rendements sont moins de surprises, une approbation des changements plus rapide et plus légère, et une assurance plus crédible. Un registre élagué et des voies de changement fondées sur le risque économisent le temps que consommaient de grands organes d'approbation. Des tests de contrôles échoués trouvés avant un incident évitent des pertes difficiles à chiffrer. Construisez le dossier à partir de vos propres données : le temps passé par approbation de changement avant et après, le nombre de défaillances de contrôles trouvées par les tests plutôt que par des incidents ou des auditeurs, et le coût des incidents passés qu'un contrôle aurait évités. Évitez de citer des statistiques de pertes sectorielles sans source et méthode traçables.

## Anti-modèles et pièges

- **Un registre qui grossit sans fin.** Personne ne le lit. Élaguez-le aux risques qui comptent.
- **Des évaluations sans preuves.** Ce sont des opinions en couleur. Joignez des preuves et des plages.
- **Des responsables de nom seulement.** Le risque revient à quelqu'un qui ne peut pas agir. Confirmez la responsabilité auprès des bonnes personnes.
- **Tester la conception et appeler cela de l'assurance.** Un contrôle qui pourrait marcher n'a peut-être pas marché. Testez le fonctionnement.
- **Ne rapporter que le nombre de risques rouges.** Les décomptes baissent par réévaluation. Regardez les traitements et les résultats des contrôles.
- **Des comités d'approbation pour chaque changement.** Ils ralentissent les petits changements et apprennent à regrouper. Utilisez des voies fondées sur le risque.
- **Punir les évaluations rouges.** Les risques sont alors cachés. Récompensez l'alerte précoce.
- **Des cultures séparées du risque et de la livraison.** Un travail de risque fait aux équipes, non avec elles, produit du théâtre de conformité.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Registre et responsabilité | Longue liste périmée | Un registre existe, en partie détenu | Registre court avec responsables de première ligne confirmés et dates de revue | Revues dans les conversations d'équipe ; preuves et plages jointes | Risques partagés entre équipes et fournisseurs avec des responsables conjoints |
| Contrôles | Supposés fonctionner | Conception documentée | Contrôles clés nommés ; tests de fonctionnement sur un cycle | Défaillances suivies ; preuves automatisées quand c'est possible | Surveillance continue des contrôles avec supervision humaine et assurance indépendante |
| Décisions et changement | Approbations par comité | Certains changements standard préapprouvés | Voies fondées sur le risque avec preuves jointes | Indicateurs avec seuils et décisions consignées ; voies ajustées d'après les résultats | Décisions de risque intégrées aux pipelines dans l'organisation et la chaîne d'approvisionnement |

## Liste de vérification

- [ ] Le registre est court, les risques étant rédigés sous la forme cause, événement et conséquence.
- [ ] Chaque risque a un responsable de première ligne confirmé qui peut agir.
- [ ] Les risques sont revus dans les conversations régulières de l'équipe.
- [ ] Les contrôles clés sont nommés et testés pour leur fonctionnement selon un cycle énoncé.
- [ ] Les défaillances de contrôles sont consignées, expliquées et corrigées.
- [ ] Chaque risque majeur a un ou deux indicateurs avancés avec seuils et réponses.
- [ ] Les décisions aux brèches d'indicateurs sont consignées.
- [ ] Des voies de changement fondées sur le risque existent, avec preuves jointes automatiquement quand c'est possible.
- [ ] Les risques acceptés ont un responsable, une raison et une date de revue.
- [ ] Les incidents et les quasi-incidents mettent à jour le registre.

## Prompts d'IA

**Réécrivez des risques sous une forme standard.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Concevez un test de contrôle.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Proposez des indicateurs avancés pour un risque.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Passez en revue un processus d'approbation des changements.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de risque ou de contrôle.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de risque porte son vecteur de détournement, son garde-fou et sa règle de preuve.

## Idées clés

- Gardez le registre des risques court, détenu par les équipes qui peuvent agir et revu dans des conversations qui existent déjà.
- Testez que les contrôles clés fonctionnent, traitez les défaillances comme de l'information utile et automatisez les preuves.
- Utilisez quelques indicateurs avancés avec des seuils, des réponses et des décisions consignées.
- Remplacez l'approbation généralisée par des voies de changement fondées sur le risque, appuyées par des preuves automatisées.
- Montrez des plages et des preuves plutôt qu'une fausse précision, et utilisez les matrices pour lancer des conversations.
- Rendez sûres les évaluations rouges, et apprenez des pertes et des quasi-incidents.

## Références et lectures complémentaires

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
