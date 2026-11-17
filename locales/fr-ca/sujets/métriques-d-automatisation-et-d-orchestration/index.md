# Métriques d'automatisation et d'orchestration

**L'automatisation n'a rapporté que lorsqu'elle retire un travail que les gens ne veulent pas faire sans créer de nouveau travail, de nouvelles défaillances ni de nouveau risque : mesurez donc ce que chaque automatisation retire, à quelle fréquence elle échoue, à quelle vitesse elle peut être annulée et qui décide quand elle doit s'arrêter.**

## Vue d'ensemble et motivation

L'[automatisation](https://en.wikipedia.org/wiki/Automation) dans la gestion des services signifie laisser un logiciel faire un travail qu'une personne faisait : provisionner un compte, redémarrer un service, acheminer un ticket, approuver un changement standard ou publier une mise à jour d'état. L'[orchestration](https://en.wikipedia.org/wiki/Orchestration_(computing)) coordonne plusieurs étapes automatisées, souvent entre outils et équipes, en un seul flux comme « accueillir un nouvel employé » ou « rétablir ce service ». Le principe directeur d'ITIL « optimiser et automatiser » est un énoncé ancien de cette idée, et la livraison continue en dépend. Des pratiques comme l'[infrastructure sous forme de code](https://en.wikipedia.org/wiki/Infrastructure_as_code) transforment la mise en place des systèmes en fichiers versionnés et testables : l'automatisation est donc aussi une forme d'enregistrement.

L'automatisation fait passer le risque de lent et visible à rapide et large. Une personne qui commet une erreur touche un ticket. Une étape automatisée avec la même erreur peut toucher chaque ticket en une minute. C'est pourquoi l'automatisation a besoin de ses propres mesures, et pourquoi des décomptes comme le « nombre d'automatisations » ou les « heures économisées » sont faibles. Ils décrivent la quantité construite et la quantité revendiquée, non si quelqu'un s'en porte mieux.

Ce sujet diffère des mesures antérieures de libre-service et d'automatisation dans les demandes de service (voir le sujet 3.7, Métriques de libre-service et d'automatisation), qui portent sur le flux de demande côté utilisateur. Ici le sujet est l'automatisation comme actif d'ingénierie et d'exploitation : sa couverture, sa fiabilité, sa sûreté, sa responsabilité et son coût. Il diffère aussi des mesures de pipeline du sujet 10.7 (voir le sujet 10.7, Métriques des pipelines et des changements automatisés), qui couvrent le chemin qu'un changement suit jusqu'à la production.

Termes employés ici. Une **automatisation** est une tâche définie qui s'exécute sans qu'une personne en accomplisse les étapes. Un **guide d'exécution** (runbook) est une procédure documentée pour une tâche d'exploitation, et l'**automatisation de guide d'exécution** l'exécute. Une **orchestration** est un flux qui coordonne des automatisations. L'**intervention humaine** (human in the loop) signifie qu'une personne revoit ou approuve avant qu'une action prenne effet. Les **tâches répétitives** (toil) sont du travail d'exploitation manuel et répétitif qui croît avec le service et n'a pas de valeur durable (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Un **garde-fou** a ici deux sens : la mesure appariée utilisée dans tout ce livre, et une limite technique sur ce qu'une automatisation peut faire. Le texte dit lequel est visé.

## Principes clés

- **Mesurez l'effet, non le décompte.** Le nombre d'automatisations dit peu. Ce qu'elles retirent et ce qu'elles cassent dit beaucoup.
- **Chaque automatisation a un responsable.** Une automatisation sans responsable est un risque qui grandit avec l'âge.
- **Rendez chaque action automatisée visible et réversible.** Consignez ce qui a tourné, sur quoi, avec quel résultat, et sachez comment l'annuler.
- **Choisissez où un humain décide.** Ajustez le rôle de l'humain au risque de l'action, et testez que le rôle peut être exercé.
- **Mesurez l'automatisation comme un service.** Elle a de la fiabilité, du changement, du coût et un retrait, comme tout autre service.
- **Automatisez d'abord le stable et l'ennuyeux.** Automatiser quelque chose de mal compris fige un problème dans le système.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réussite des exécutions d'automatisation | Part des exécutions d'automatisation qui se sont achevées et ont atteint le résultat voulu, confirmé par un contrôle après l'exécution | exécutions avec un contrôle après exécution réussi / exécutions démarrées dans la période ; les exécutions sans contrôle après exécution sont exclues et rapportées à part | pourcentage | Journaux de la plateforme d'orchestration et d'automatisation | Gestion des demandes de service ; gestion des versions | Définition de terminé pour le travail automatisé | Mensuelle |
| Couverture de l'automatisation des tâches | Part des tâches admissibles et répétées qui sont automatisées | tâches de la liste admissible qui s'exécutent automatisées / tâches de la liste admissible ; la liste admissible est revue chaque trimestre | pourcentage | Inventaire des tâches et registre des guides d'exécution | Amélioration continue | Backlog de candidats à l'automatisation | Trimestrielle |
| Taux d'intervention manuelle | Part des exécutions d'automatisation qui ont demandé à une personne d'intervenir ou de corriger | exécutions avec une étape manuelle ajoutée après le démarrage / exécutions démarrées | pourcentage | Journaux d'automatisation et liens avec les tickets | Gestion des incidents | Défauts échappés dans le travail automatisé | Mensuelle |
| Taux d'incidents causés par l'automatisation | Incidents attribués à une action automatisée, pour 1 000 exécutions | incidents avec une cause confirmée d'automatisation / exécutions d'automatisation x 1 000 | décompte pour 1 000 exécutions | Enregistrements d'incidents reliés aux identifiants d'exécution | Gestion des incidents ; gestion des problèmes | Taux d'échec des changements pour le changement automatisé | Mensuelle |
| Délai de retour arrière | Temps pour annuler une action automatisée une fois le besoin reconnu | médiane et 95e percentile de (heure où l'annulation s'achève moins heure où la décision d'annuler a été prise) | minutes | Journaux d'automatisation et chronologie de l'incident | Maîtrise des changements | Capacité de retour arrière dans la définition de terminé | Trimestrielle |
| Temps économisé, vérifié | Heures de travail manuel retirées, vérifiées par échantillonnage | tâches automatisées x (temps médian de tâche manuelle d'un échantillon de temps moins temps manuel résiduel médian) sur la période ; date de l'échantillon énoncée | heures | Échantillons de temps et décomptes d'exécutions | Amélioration continue | Valeur livrée par élément de travail | Trimestrielle |
| Actualité de la responsabilité des automatisations | Part des automatisations ayant un responsable qui a confirmé la responsabilité et revu l'automatisation au cours des 12 derniers mois | automatisations avec responsable confirmé et revue dans les 12 mois / automatisations du registre | pourcentage | Registre des automatisations | Gouvernance ; gestion des actifs et de la configuration | Charte d'équipe et responsabilité | Trimestrielle |

Les formules comptent des exécutions, non des tâches, sauf indication contraire. « Réussie » exige un contrôle indépendant après exécution, comme confirmer que le service est en bonne santé ou que le compte existe ; une exécution qui sort simplement sans erreur n'est pas comptée comme réussie. Le temps économisé exclut le temps passé à construire et à maintenir l'automatisation, qui est compté à part comme coût (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Recommandations

### Décider quoi automatiser

**1. Partez d'une liste de tâches répétées, non d'outils.** Classez les tâches répétées selon leur fréquence, leur durée, leur propension aux erreurs et la qualité de leur compréhension. Automatisez d'abord les tâches stables et bien comprises, et laissez aux gens les rares et les mal comprises.

**2. Corrigez le processus avant de l'automatiser.** Automatiser un processus confus rend la confusion plus rapide. Parcourez les étapes avec les personnes qui les font, retirez celles qui n'apportent rien, puis automatisez.

**3. Choisissez le rôle de l'humain selon le risque.** Pour les actions à faible risque et réversibles, une personne peut se contenter de revoir un journal après coup. Pour les actions à plus haut risque, une personne approuve avant l'action. Pour les plus élevées, l'action peut rester manuelle. Écrivez la règle, et testez que les approbateurs ont l'information pour décider.

### Rendre l'automatisation sûre

**4. Exigez un responsable et un registre.** Chaque automatisation a un responsable nommé et une entrée dans un registre avec son objet, son périmètre, ses permissions et sa dernière revue. Quand un responsable part, la responsabilité se déplace avant la personne.

**5. Limitez les permissions et le périmètre.** Une automatisation doit avoir le moindre accès qui fait le travail, et une limite sur la quantité qu'elle peut changer en une exécution, comme un nombre maximal de comptes ou de serveurs. Une limite de périmètre est un garde-fou technique qui plafonne les dégâts d'une mauvaise exécution.

**6. Vérifiez le résultat, non le code de sortie.** Ajoutez un contrôle après exécution qui confirme l'état voulu, et mesurez la réussite par ce contrôle. Un script qui sort proprement peut n'avoir rien fait.

**7. Journalisez et planifiez l'annulation.** Chaque exécution consigne ce qu'elle a changé, et chaque automatisation a un moyen testé d'inverser son changement ou une raison énoncée pour laquelle elle ne le peut pas. Exercez le retour arrière dans un cadre sûr et mesurez le temps qu'il prend.

### Mesurer honnêtement

**8. Vérifiez le temps économisé par échantillonnage.** Les affirmations d'heures économisées sont souvent optimistes. Chronométrez un échantillon de la tâche manuelle avant et après, énoncez la date de l'échantillon et soustrayez le coût de la maintenance et des défaillances.

**9. Rapportez les défaillances et les interventions à côté de la couverture.** Un chiffre de couverture élevé avec un taux d'intervention manuelle élevé signifie que des gens corrigent ce que l'automatisation casse. Montrez les deux sur une même page.

**10. Retirez ce qui n'aide plus.** Une automatisation dont la tâche a changé ou disparu est un risque. Revoyez l'usage à cadence régulière et retirez les automatisations sans exécutions ou sans responsable.

**11. Gardez un humain capable de l'arrêter.** Fournissez un moyen clair de suspendre rapidement une automatisation ou toute une classe d'automatisations, et mesurez la rapidité avec laquelle cela peut se faire.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de réussite des exécutions d'automatisation | Compter une exécution comme réussie quand elle sort proprement ; supprimer les exécutions échouées du journal | Contrôle indépendant après exécution ; comparer les journaux avec les enregistrements en aval |
| Couverture de l'automatisation des tâches | Rétrécir la liste admissible pour faire monter la couverture ; automatiser d'abord des tâches triviales | Revoir la liste admissible avec une seconde équipe ; pondérer par le volume et le temps |
| Taux d'intervention manuelle | Consigner les corrections manuelles comme des tickets distincts pour que l'exécution paraisse propre | Relier les tickets aux identifiants d'exécution ; échantillonner les exécutions pour y trouver des corrections cachées |
| Taux d'incidents causés par l'automatisation | Attribuer les défaillances de l'automatisation à des personnes ou à des outils ; ne pas relier les incidents aux exécutions | Exiger un identifiant d'exécution dans les enregistrements d'incidents ; échantillonner les incidents pour y trouver des liens manqués |
| Délai de retour arrière | Ne mesurer que les retours arrière qui étaient faciles ; démarrer l'horloge tard | Exercer le retour arrière lors d'un exercice pour les automatisations les plus difficiles ; définir le début de l'horloge |
| Temps économisé, vérifié | Utiliser des temps de tâche optimistes ; ignorer le coût de maintenance et de défaillance | Échantillons de temps par quelqu'un d'extérieur à l'équipe ; inclure le coût de construction et de maintenance |
| Actualité de la responsabilité des automatisations | Nommer une liste de diffusion ou un ancien employé comme responsable | Le responsable confirme par écrit ; vérifier que le responsable est actif |

Une lecture saine est une couverture croissante avec un taux d'intervention manuelle et un taux d'incidents stables ou en baisse, un temps économisé vérifié qui correspond à ce que ressent l'équipe, et un registre qui reste à jour parce que les automatisations retirées sont supprimées.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Automatiser largement et tôt | Retire les tâches répétitives ; travail plus rapide et plus cohérent | Défaillances rapides et larges ; fardeau de maintenance ; dépendances cachées |
| Automatiser sélectivement avec des contrôles humains | Risque plus faible ; les gens restent compétents | Plus lent ; les approbateurs peuvent tamponner |
| Compter les automatisations et les heures économisées | Simple à rapporter et à comparer | Récompense la quantité ; affirmations souvent non vérifiées |
| Mesurer l'effet, les défaillances et le retour arrière | Montre la vraie valeur et le risque | Plus d'effort de recueil ; demande de relier les enregistrements |

La conclusion en bref est d'automatiser ce qui est stable et compris, de mesurer ce que cela retire et ce que cela casse, et de garder les gens capables de l'arrêter. Une automatisation qui économise des heures mais cause à l'occasion un grave incident peut être un mauvais marché, et seules les mesures appariées le montreront.

## Questions à discuter avec votre équipe

**1. Quelles automatisations exécutons-nous aujourd'hui, et qui détient chacune ?**
Dressez la liste ensemble, car les équipes trouvent généralement des automatisations dont personne ne se souvient de la construction. Demandez l'objet, les permissions et la date de la dernière revue. Attendez-vous à des scripts sur des machines individuelles et à des tâches planifiées dont des anciens employés sont responsables. Convenez ensuite de qui détient chacune d'ici la fin du trimestre.

**2. Quand une automatisation a-t-elle agrandi ou accéléré un problème plus qu'une personne ne l'aurait fait ?**
Invitez à des histoires sans blâme. Des exemples typiques sont une tâche de nettoyage qui a retiré les mauvaises ressources, ou une remédiation qui a redémarré un service pendant une panne. Demandez quelle limite aurait plafonné les dégâts. Les réponses deviennent les limites de périmètre et les règles d'approbation.

**3. Pour notre action automatisée la plus risquée, qui décide, et pourrait-il bien décider ?**
Regardez ce que voit l'approbateur au moment de l'approbation. Souvent la demande d'approbation manque de l'information nécessaire pour juger. Demandez si l'approbateur pourrait dire non et ce qui se passerait s'il le faisait. Améliorez ensuite la demande ou changez le rôle.

**4. Comment saurions-nous qu'une automatisation a silencieusement cessé de fonctionner ?**
La défaillance silencieuse est le problème le plus courant, et elle se manifeste souvent par des chiffres plats. Demandez le contrôle qui le remarquerait. Discutez d'alertes sur les exécutions manquantes et sur les résultats qui ne correspondent pas à l'attente. Choisissez une automatisation et testez-la.

**5. Lesquelles des heures économisées avons-nous réellement consacrées à quelque chose de mieux ?**
Le temps économisé sur le papier peut ne pas devenir de la capacité. Demandez où le temps est allé et qui a décidé. Soyez honnête sur le coût de maintenance et de défaillance. Choisissez ensuite une affirmation à vérifier par échantillon.

**6. Quelle automatisation devrions-nous retirer, et que faudrait-il ?**
Demandez des preuves d'usage et de valeur. Le retrait peut ressembler à un échec : présentez-le donc comme de la maintenance courante. Identifiez les dépendances avant de retirer quoi que ce soit. Convenez d'une période d'essai et d'un moyen de la rétablir.

## Quatre perspectives

### Équipes produit et de livraison

Construisez l'automatisation comme une partie du produit, avec des tests, des journaux, un responsable et un moyen de revenir en arrière. Incluez les contrôles après exécution dans la définition de terminé, et évitez d'automatiser des étapes que l'équipe ne comprend pas encore. Gardez les métriques au niveau des automatisations de l'équipe, non des ingénieurs individuels.

### Équipes de service et d'exploitation

Vous portez le bipeur quand l'automatisation défaille : insistez donc sur la visibilité et un arrêt facile. Suivez les interventions manuelles et les incidents causés par l'automatisation, et servez-vous-en pour prioriser les corrections. Traitez le registre des automatisations comme une partie de l'enregistrement du service.

### Direction et gouvernance

Demandez l'effet, les défaillances et la préparation au retour arrière, pas seulement des décomptes d'automatisations. Financez la maintenance de l'automatisation autant que sa création, et attendez-vous à ce que certaines automatisations soient retirées. Fixez les attentes de supervision humaine selon le risque et revoyez la liste des actions les plus risquées.

### Clients et utilisateurs

Vous ne devriez pas remarquer l'automatisation quand elle marche, et vous devriez avoir une personne vers qui vous tourner quand elle ne marche pas. Demandez comment joindre une personne, et dites quand une action automatisée était fausse. Votre retour fait partie du contrôle que l'automatisation a aidé.

## En pratique : un exemple de gestion des services

L'équipe d'exploitation d'un détaillant en ligne de taille moyenne automatise trois tâches : redémarrer un serveur web défaillant, réinitialiser les mots de passe du service clientèle et nettoyer le stockage infonuagique inutilisé. Les chiffres de cet exemple sont illustratifs. Après un trimestre, le tableau de bord montre 3 automatisations, 2 400 exécutions et « environ 180 heures économisées ». La direction est satisfaite et en demande davantage.

L'équipe applique les mesures. Le taux de réussite des exécutions semble de 98 % par code de sortie. Avec un contrôle après exécution, il tombe à 91 % : la réinitialisation de mot de passe rapporte un succès mais, pour 9 % des exécutions, l'utilisateur ne peut pas se connecter. Le taux d'intervention manuelle de cette automatisation est de 11 %. L'automatisation de redémarrage a causé deux incidents, dont l'un lorsqu'elle a redémarré des serveurs pendant une bascule de base de données, avec un délai de retour arrière d'environ 40 minutes parce que personne ne l'avait exercé.

L'échantillon de temps montre que la réinitialisation manuelle de mot de passe prenait environ quatre minutes, non les dix qu'utilisait l'estimation d'origine, et que le traitement des réinitialisations échouées prend à peu près autant de temps que la tâche d'origine. Le temps économisé vérifié est plus proche de 60 heures. L'automatisation de nettoyage du stockage a un responsable qui a quitté l'entreprise au printemps.

L'équipe décide d'ajouter un contrôle après exécution à la réinitialisation de mot de passe, une limite de périmètre et une règle de suspension à l'automatisation de redémarrage, et un nouveau responsable au nettoyage. Un gestionnaire propose de compter les « automatisations construites » comme objectif d'équipe. L'équipe refuse, car cela récompenserait la construction de plus de la même chose. La difficulté restante est que le contrôle après exécution pour les mots de passe demande un compte de test, et que l'exercice de retour arrière de l'automatisation de redémarrage est planifié pour le trimestre suivant.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez l'automatisation comme un produit qui s'améliore continuellement avec les personnes qui l'utilisent et en dépendent. Une bonne pratique est une courte revue régulière du backlog d'automatisation, des défaillances et des interventions avec les parties prenantes. La précaution est que de fréquents petits changements de l'automatisation demandent les mêmes tests que les autres changements, sinon les défaillances arrivent plus vite.

### IA

L'IA peut rédiger des guides d'exécution, écrire des scripts et décider de l'action à entreprendre, et l'IA agentique peut agir sur des systèmes. Traitez toute IA qui peut agir comme une automatisation avec un responsable, des permissions, des limites de périmètre, une règle d'approbation et un retour arrière. Appariez son taux de réussite avec le taux d'actions erronées et la part qu'une personne a dû annuler (voir le sujet 10.3, Métriques des agents d'IA et des agents conversationnels). La précaution est qu'un script rédigé par une IA paraît faire autorité : testez-le donc comme tout code.

### Automatisation

C'est le sujet de ce texte, la pratique est donc de mesurer la plateforme d'automatisation elle-même : sa disponibilité, ses échecs d'exécution et ses temps de file, puisque de nombreux services en dépendent. Recueillez automatiquement les données d'exécution avec des identifiants d'exécution qui se relient aux tickets et aux incidents. La précaution est que la plateforme d'automatisation devient un point de défaillance unique : gardez donc un recours manuel pour les tâches critiques.

### Analytique

Reliez les exécutions aux résultats : contrôles après exécution réussis, tickets et incidents. La décision éclairée est quelle automatisation corriger, étendre ou retirer. La précaution est que l'attribution dépend d'identifiants cohérents : auditez donc le taux de liaison, et montrez le nombre d'exécutions derrière chaque taux (voir le sujet 10.8, Métriques d'analytique et de qualité des données).

## Éclairage sectoriel

**Startup.** De petites équipes automatisent vite et avec peu de contrôles. Gardez une courte liste d'automatisations avec des responsables, mettez un contrôle après exécution sur tout ce qui touche les clients et évitez de construire une plateforme d'orchestration avant d'en avoir besoin.

**Petite entreprise.** L'automatisation signifie souvent quelques tâches planifiées et un service géré. Demandez à votre fournisseur quelle automatisation s'exécute pour votre compte et quel est le retour arrière. Gardez une liste, et vérifiez que quelqu'un détient chaque élément.

**Grande entreprise.** De nombreuses automatisations entre de nombreuses équipes créent des dépendances et des doublons. Gardez un registre central, une journalisation standard et des identifiants d'exécution, et une voie de revue pour les actions à haut risque. Partagez les automatisations entre équipes au lieu de les reconstruire.

**Gouvernement et secteur public.** Les besoins de redevabilité et d'audit exigent que chaque action automatisée soit traçable jusqu'à une décision et un responsable. Gardez les journaux et les approbations comme preuves, et vérifiez les règles de passation de marchés et juridiques pour les décisions automatisées qui touchent les citoyens (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont la construction et le test de l'automatisation, l'exploitation de la plateforme, la maintenance de l'automatisation à mesure que les systèmes changent, et le coût des défaillances. Recueillir les mesures coûte peu si les exécutions sont journalisées avec des identifiants. Le coût plus grand est la discipline des responsables, des revues et des exercices de retour arrière.

Le rendement est la suppression des tâches répétitives, un travail plus rapide et plus cohérent, et moins d'erreurs manuelles. Ces bénéfices sont réels mais faciles à surestimer : vérifiez-les donc par échantillons. Le côté risque comprend les incidents causés par l'automatisation et le coût d'une automatisation que personne ne maintient. Un dossier d'affaires équitable compare le temps économisé vérifié, plus les erreurs évitées, avec le coût complet y compris la maintenance et les incidents, et énonce les hypothèses sous forme de plages (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Aucun chiffre de référence n'est donné ici, car ils varient largement selon le contexte. Mesurez vos propres références avant de commencer.

## Anti-modèles et pièges

- **Compter les automatisations construites.** Cela récompense la quantité. Rapportez plutôt l'effet, les défaillances et le retour arrière.
- **La réussite par code de sortie.** Une sortie propre prouve peu. Vérifiez le résultat voulu.
- **Des automatisations sans responsable.** Elles échouent silencieusement à mesure que les systèmes changent. Gardez un registre et confirmez les responsables.
- **Automatiser un mauvais processus.** La faute avance plus vite. Corrigez d'abord le processus.
- **Aucune annulation.** Une action fausse et rapide sans inversion est le pire cas. Planifiez et exercez le retour arrière.
- **Revendiquer des heures économisées sans échantillon.** Vérifiez avec des échantillons de temps, et soustrayez la maintenance.
- **L'approbation comme théâtre.** Un approbateur sans l'information pour décider ajoute du délai et aucune sécurité. Repensez la demande.
- **L'automatisation comme point de défaillance unique.** Gardez un chemin manuel pour les tâches critiques.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Responsabilité et registre | Scripts connus seulement de leurs auteurs | Principales automatisations listées | Registre avec responsable, périmètre et date de revue | Revues et retraits à cadence régulière | Catalogue partagé et schémas standard entre équipes |
| Sûreté et retour arrière | Aucune annulation ; contrôles par code de sortie | Quelques contrôles après exécution et journaux | Contrôles après exécution, limites de périmètre et retour arrière testé | Exercices de retour arrière ; incidents reliés aux exécutions | Schémas de sûreté intégrés à la plateforme |
| Preuves de valeur | Décomptes et estimations | Temps économisé estimé | Temps économisé échantillonné et vérifié | Effet, défaillances et coût revus ensemble | Portefeuille d'automatisations géré par la valeur et le risque |

## Liste de vérification

- [ ] Chaque automatisation a un responsable qui a confirmé la responsabilité.
- [ ] Un registre liste chaque automatisation avec objet, périmètre et permissions.
- [ ] Chaque automatisation a un contrôle après exécution qui confirme le résultat voulu.
- [ ] Les exécutions sont journalisées avec des identifiants qui se relient aux tickets et aux incidents.
- [ ] Chaque automatisation a une limite de périmètre et un moyen testé de l'annuler ou de la suspendre.
- [ ] Le rôle de l'humain est défini pour chaque action automatisée selon le risque.
- [ ] Le temps économisé est vérifié par un échantillon daté.
- [ ] Les interventions manuelles et les incidents causés par l'automatisation sont rapportés avec la couverture.
- [ ] Les automatisations inutilisées ou sans responsable sont revues et retirées.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou montrés à côté.

## Prompts d'IA

**Construisez un registre des automatisations à partir de matière collée.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Concevez un contrôle après exécution et un retour arrière pour une automatisation.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Passez en revue le risque de détournement d'un tableau de bord d'automatisation.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Planifiez la vérification du temps économisé.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## Skills d'IA

- [Runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour documenter une tâche avant de l'automatiser.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour analyser un incident causé par une action automatisée.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou associé.

## Idées clés

- Les décomptes d'automatisations et d'heures économisées décrivent l'effort et les affirmations : mesurez donc l'effet, les défaillances et le retour arrière.
- Chaque automatisation a besoin d'un responsable, d'une entrée au registre, d'un contrôle après exécution, d'une limite de périmètre et d'un moyen de l'annuler ou de la suspendre.
- Choisissez où un humain décide selon le risque, et testez que l'humain peut bien décider.
- Vérifiez le temps économisé avec des échantillons datés, et soustrayez la maintenance et le coût des défaillances.
- Retirez les automatisations sans responsable, inutilisées ou devenues inutiles.

## Références et lectures complémentaires

1. Wikipedia, [Automatisation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (informatique)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure sous forme de code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
