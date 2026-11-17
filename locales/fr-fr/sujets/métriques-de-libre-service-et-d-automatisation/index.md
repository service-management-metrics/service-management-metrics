# Métriques de libre-service et d'automatisation

**Mesurez le libre-service par le fait que les gens ont obtenu ce dont ils avaient besoin sans aide, et mesurez l'automatisation par le travail qu'elle supprime et les défaillances qu'elle crée, car un contact qui n'est jamais arrivé n'est un succès que si le problème a été résolu.**

## Vue d'ensemble et motivation

Le libre-service et l'automatisation sont les deux principales façons dont une organisation de services décharge ses équipes du travail courant. Le [libre-service](https://en.wikipedia.org/wiki/Self-service_software) permet à un utilisateur de résoudre seul un problème ou d'obtenir quelque chose, par un portail, un article de connaissance, une page de réinitialisation de mot de passe ou un [agent conversationnel](https://en.wikipedia.org/wiki/Chatbot). L'[automatisation](https://en.wikipedia.org/wiki/Automation) permet à un système d'exécuter les étapes qu'une personne exécutait auparavant, comme créer un compte, redémarrer un service ou clore un ticket une fois qu'une supervision confirme le rétablissement. Les deux visent le même résultat : moins de tâches répétitives pour les personnes, des résultats plus rapides pour les utilisateurs et plus de temps pour le travail qui demande du jugement.

Les idées se projettent sur les deux traditions. Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique de gestion des demandes de service attend que les demandes bien comprises et répétables soient traitées par des flux standard avec autant d'automatisation que raisonnable, et les pratiques de gestion des incidents et de gestion des connaissances attendent qu'une bonne information soit disponible pour les utilisateurs et pour le personnel de support au premier point utile. La pratique agile et DevOps arrive au même endroit par un autre chemin : l'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code), les chaînes de livraison et la discipline de suppression des tâches répétitives (toil), que les ouvrages de fiabilité des sites de Google définissent comme du travail manuel, répétitif, automatisable, qui croît avec le service. L'idée partagée est souvent appelée « décalage vers la gauche » (shift left) : déplacer la résolution d'un problème vers l'utilisateur, ou vers le point le moins coûteux et le plus précoce de la chaîne de support, et l'éloigner de la file des spécialistes.

Le langage du décalage vers la gauche invite à une erreur de mesure. Les équipes voient qu'un contact évité est peu coûteux et comptent alors les contacts évités comme un succès. Le décompte est facile à produire, parce qu'une visite de portail qui ne s'est pas terminée par un ticket ressemble à l'identique à une visite de portail où l'utilisateur a abandonné. Ce sujet part donc du résultat de l'utilisateur. Il définit ce que signifie la réussite du libre-service, comment estimer la déflexion sans s'attribuer le mérite de l'abandon, comment mesurer la couverture et la fiabilité de l'automatisation, et comment voir l'effet du décalage vers la gauche sur le volume et la complexité. Les mesures voisines de volume et de priorité figurent dans le sujet 3.2, Volume et priorité des incidents, le versant des demandes dans le sujet 3.5, Métriques de traitement des demandes de service, et le versant des connaissances dans le sujet 3.6, Métriques de gestion des connaissances.

Termes employés dans ce sujet :

- **Niveau 0 (ou palier de libre-service)** : résolution par l'utilisateur sans contacter le personnel. Le niveau 1 est la première ligne de support, généralement le centre de services, et les niveaux 2 et 3 sont les paliers de spécialistes et d'ingénierie.
- **Déflexion** : un contact qui aurait autrement atteint le personnel et qui a été résolu au niveau 0 à la place. Elle ne peut pas être observée directement, c'est donc toujours une estimation.
- **Chute vers le personnel (fall-through)** : un utilisateur qui a essayé le libre-service, n'a pas réussi, puis a contacté le personnel pour le même besoin.
- **Runbook** : une procédure documentée pour une tâche d'exploitation courante. Un [runbook](https://en.wikipedia.org/wiki/Runbook) est la première étape habituelle vers son automatisation.
- **Tâches répétitives (toil)** : travail manuel, répétitif et automatisable sans valeur durable (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).
- **Catalogue des services** : la liste des services et des demandes standard proposés aux utilisateurs. ITIL l'appelle « service catalogue ».

## Principes clés

- **Comptez les résultats, non les contacts évités.** Une session de portail sans ticket n'est un succès que si le besoin de l'utilisateur a été satisfait. Définissez la réussite du côté de l'utilisateur et vérifiez-la par un signal de suivi.
- **La déflexion est une estimation : étiquetez-la comme telle.** Énoncez la méthode, la comparaison employée et l'incertitude. Ne présentez jamais un chiffre de déflexion estimé comme un fait mesuré.
- **Mesurez le chemin de chute.** La route qui va d'une tentative de libre-service échouée à un contact avec le personnel est l'endroit où se cache l'essentiel de l'échec. Rapportez-la à côté de chaque chiffre de réussite.
- **L'automatisation a un côté coût.** Chaque flux automatisé demande de la maintenance, de la supervision et un moyen d'échouer en sécurité. Mesurez ensemble la couverture et la fiabilité, et comptez l'effort dépensé à maintenir l'automatisation en vie.
- **Le décalage vers la gauche change le mélange autant que le volume.** Quand le travail facile quitte la file, le travail restant est plus difficile et plus lent en moyenne. Lisez le temps de résolution et le temps de traitement dans cet esprit (voir le sujet 3.3, Temps de réponse et de résolution des incidents).
- **Les métriques décrivent des services et des flux.** Rapportez par élément du catalogue, famille d'articles ou flux d'automatisation. Ne classez jamais des agents selon le nombre d'utilisateurs qu'ils ont poussés vers le libre-service.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réussite du libre-service | Part des sessions de libre-service où le besoin de l'utilisateur a été satisfait sans contact avec le personnel | Sessions terminées par un résultat abouti (demande soumise et traitée, article marqué utile, réinitialisation effectuée) sans contact avec le personnel sur le même besoin dans les 7 jours, divisées par toutes les sessions qui ont commencé une tâche. L'horloge démarre à la première action significative dans le portail, s'arrête à l'achèvement ou à l'abandon. Exclut le trafic de robots, les comptes de test et la simple navigation | Pourcentage | Journaux du portail et d'identité, système de tickets, analytique de sessions | Gestion des demandes de service ; gestion des connaissances | Boucle de retour des clients ; critères d'acceptation fondés sur le résultat | Mensuelle |
| Taux de déflexion estimé | Part estimée de la demande résolue au niveau 0 qui aurait autrement atteint le personnel | Comparer le taux de contacts pour 1 000 utilisateurs actifs d'un service avant et après un changement de libre-service, ou face à un groupe témoin, corrigé des variations de demande connues. Énoncé comme une estimation avec la méthode nommée. Exclut les contacts passés à un autre canal | Pourcentage (estimation) | Système de tickets, décomptes de population d'utilisateurs, données d'expérience ou de cohorte | Centre de services ; gestion des incidents | Expérience avec groupe témoin ; test A/B | Trimestrielle |
| Taux de chute vers le personnel | Part des tentatives de libre-service échouées qui se terminent par un contact avec le personnel sur le même besoin | Contacts avec le personnel ouverts dans les 7 jours suivant une session de libre-service abandonnée ou infructueuse par le même utilisateur sur le même sujet, divisés par les sessions infructueuses. L'horloge démarre à la fin de la session. Exclut les contacts sans rapport | Pourcentage | Journaux du portail joints au système de tickets sur l'utilisateur et le sujet | Centre de services ; gestion des connaissances | Chemin d'escalade dans une définition de terminé ; retour du support | Mensuelle |
| Adoption du libre-service (part portail d'abord) | Part des demandes et des signalements d'incidents éligibles émis par des canaux de libre-service | Éléments créés par portail, robot ou API, divisés par tous les éléments des entrées du catalogue qui offrent une voie de libre-service. Exclut les éléments pour lesquels aucune voie de libre-service n'existe | Pourcentage | Champ de canal du système de tickets, configuration du catalogue | Gestion des demandes de service ; gestion du catalogue des services | Suivi de l'adoption après une version | Mensuelle |
| Couverture de l'automatisation | Part du travail répétable éligible accomplie par automatisation sans étape manuelle | Éléments accomplis de bout en bout par un flux automatisé, divisés par tous les éléments des types jugés automatisables. Ne compte le type comme automatisable que si une liste de candidats écrite le nomme. Exclut le travail ponctuel et les éléments que l'automatisation a rejetés | Pourcentage | Système de tickets, journaux de la plateforme d'automatisation, liste de candidats | Gestion des demandes de service ; gestion des déploiements | Automatisation de la définition de terminé ; chaîne en tant que code | Mensuelle |
| Taux d'échec et de reprise de l'automatisation | Part des exécutions automatisées qui ont échoué, ont demandé une réparation manuelle ou ont produit un résultat corrigé ensuite | Exécutions automatisées qui ont généré une erreur, ont été annulées ou ont été suivies d'une correction manuelle dans les 7 jours, divisées par toutes les exécutions automatisées. L'horloge démarre au début de l'exécution. Exclut les essais à blanc planifiés | Pourcentage | Journaux de la plateforme d'automatisation, système de tickets, enregistrements de changements | Maîtrise des changements ; gestion des incidents | Taux d'échec des changements ; stabilité des constructions et des tests | Hebdomadaire |
| Temps d'intervention manuelle par type de demande | Effort du personnel dépensé sur un type de demande candidat à l'automatisation | Minutes d'intervention consignées par le personnel sur les éléments du type dans la période, résumées en médiane et 85e percentile par élément. Estimées par échantillonnage là où le temps n'est pas consigné. Exclut le temps d'attente | Minutes par élément | Échantillonnage du temps, journaux de travail des tickets | Gestion des demandes de service | Suivi des tâches répétitives ; gaspillage du flux de valeur | Trimestrielle |
| Répartition par niveau (part de décalage vers la gauche) | Où dans la chaîne de support les éléments sont résolus | Éléments résolus à chaque niveau (0, 1, 2, 3) divisés par tous les éléments résolus de la période. Le niveau est le palier le plus haut qui a fait du travail pratique. Exclut les éléments annulés avant le triage | Pourcentage par niveau | Groupe de résolution et historique d'affectation du système de tickets | Gestion des incidents ; centre de services | Essaimage et schémas d'escalade ; équipes pluridisciplinaires | Mensuelle |

Toutes ces mesures sont rapportées par service, élément du catalogue ou flux, jamais par personne. Les mesures de temps doivent être montrées en médiane plus un percentile élevé, comme l'explique l'introduction du sujet sur la culture statistique (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Recommandations

### Définir la réussite du côté de l'utilisateur

**1. Écrivez ce que signifie « j'ai obtenu ce dont j'avais besoin » pour chaque voie de libre-service.** Pour une réinitialisation de mot de passe, c'est une réinitialisation effectuée et une connexion réussie. Pour une demande, c'est le traitement, non la soumission. Pour un article, c'est un utilisateur qui n'a pas recontacté le personnel sur le même besoin. Une définition qui s'arrête à « a consulté la page » mesure le trafic.

**2. Joignez les sessions de libre-service aux contacts ultérieurs.** La preuve la plus forte d'échec est un contact avec le personnel sur le même sujet peu après une session. Reliez les deux sur l'utilisateur et le sujet là où les règles de vie privée le permettent, et là où elles ne le permettent pas, utilisez des décomptes agrégés par sujet et par jour. La jointure transforme une vague histoire de satisfaction en un taux de chute vers le personnel que vous pouvez améliorer.

**3. Interrogez les utilisateurs par une seule question au moment de la sortie.** Une invite en une question comme « Cela a-t-il résolu votre problème ? » donne un signal direct que les journaux ne peuvent pas donner. Traitez les réponses comme un échantillon, lisez les commentaires en texte libre et comparez répondants et non-répondants pour que les utilisateurs les plus satisfaits ne définissent pas le résultat (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Estimer honnêtement la déflexion

**4. Préférez une comparaison à un compteur.** L'estimation la plus propre vient d'un groupe témoin, d'un déploiement par phases ou d'une vue avant et après des contacts pour 1 000 utilisateurs actifs du service concerné. Compter les « sessions qui ne sont pas devenues des tickets » surestime l'effet, parce que beaucoup de ces utilisateurs n'avaient jamais un besoin que le personnel aurait vu. Énoncez la méthode et l'incertitude à côté du chiffre.

**5. Normalisez le volume par rapport à l'usage.** Une baisse du nombre de tickets peut suivre une baisse du nombre d'utilisateurs, un cycle de versions calme ou un changement saisonnier. Divisez par les utilisateurs actifs ou par les transactions avant de tirer des conclusions (voir le sujet 3.2, Volume et priorité des incidents). Annotez le graphique avec les versions, les campagnes et les changements de portail.

**6. Gardez la déflexion hors des objectifs.** Un objectif de déflexion récompense le fait de cacher la voie de contact, d'enfouir le numéro de téléphone et de clore tôt les sessions de discussion. Utilisez la déflexion comme une estimation d'apprentissage et placez l'objectif sur les résultats des utilisateurs, comme le taux de réussite du libre-service et le plus vieil élément non résolu.

### Mesurer l'automatisation comme un produit, non comme un projet

**7. Tenez une liste de candidats et mesurez la couverture face à elle.** La couverture de « tout le travail » est une mauvaise mesure, parce que l'essentiel du travail n'est pas automatisable. Tenez une courte liste écrite des types de demandes et d'incidents répétables, bien compris et fréquents, classez-la par temps d'intervention manuelle et par volume, et rapportez la couverture face à cette liste. Revoyez la liste chaque trimestre pour que le dénominateur soit honnête.

**8. Appariez la couverture et la fiabilité.** Un flux automatisé qui échoue une exécution sur dix, ou qui produit en silence le mauvais résultat, peut coûter plus que la tâche manuelle qu'il a remplacée. Suivez le taux d'échec et de reprise, le temps de détection d'une exécution échouée et la fréquence à laquelle une personne doit réparer le résultat. Utilisez les pratiques de gestion des erreurs que décrit la communauté de l'ingénierie de fiabilité des sites : étapes idempotentes, alertes claires et repli manuel sûr (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**9. Comptez l'entretien.** Les automatisations ont besoin de responsables, de gestion de versions, de tests et de mises à jour quand les systèmes autour d'elles changent. Consignez le temps passé à maintenir chaque flux et comparez-le avec le temps d'intervention manuelle qu'il a supprimé. Une automatisation qui coûte plus à faire fonctionner qu'elle n'économise est candidate au retrait, ce qui est un résultat normal, non un échec.

### Surveiller l'effet de décalage vers la gauche

**10. Attendez-vous à ce que le travail restant soit plus difficile.** Quand les contacts courants quittent le centre de services, le temps de traitement moyen et la résolution au premier contact au niveau 1 se dégradent souvent alors que le service est meilleur. Rapportez la répartition par niveau et le mélange de catégories à côté de ces mesures, et convenez d'avance avec la direction qu'une hausse du temps de traitement après une déflexion réussie est attendue (voir le sujet 3.1, Métriques du centre de services).

**11. Bouclez la boucle vers la connaissance et vers la gestion des problèmes.** Chaque chute vers le personnel est la preuve d'un article manquant ou médiocre, d'un formulaire déroutant ou d'un défaut non corrigé. Routez les principaux sujets de chute vers les responsables des connaissances et, quand la cause est un défaut, vers la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes). Revoyez la liste chaque mois et rapportez combien d'éléments ont été corrigés.

**12. Partagez la capacité que vous libérez.** Si l'automatisation et le libre-service suppriment du travail, décidez ce que le temps libéré achète : travail d'amélioration, corrections proactives ou formation. Les équipes qui ne voient aucun bénéfice de l'automatisation cessent d'en proposer. Suivez dans le temps la part planifiée de capacité consacrée à l'amélioration (voir le sujet 2.9, Travail opérationnel et travail non planifié).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de réussite du libre-service | Compter tout formulaire achevé ou toute page consultée comme un succès ; retirer l'invite « cela a-t-il aidé » quand les scores baissent ; exclure les sujets difficiles du dénominateur | Taux de chute vers le personnel et échantillon de sessions closes lu par une personne ; rapporter les règles du dénominateur |
| Taux de déflexion estimé | Cacher la voie de contact ; ajouter des étapes avant le contact ; classer toute baisse de tickets comme déflexion quelle qu'en soit la cause | Contacts pour 1 000 utilisateurs actifs, satisfaction des utilisateurs sur le service concerné et méthode écrite à côté du chiffre |
| Taux de chute vers le personnel | Définir la fenêtre d'appariement si courte que les retours tombent dehors ; clore le contact de suivi comme doublon | Taux de contacts répétés sur tous les canaux ; revue d'un échantillon de contacts de retour |
| Adoption du libre-service (part portail d'abord) | Forcer toutes les demandes dans le portail quelle que soit leur adéquation ; réétiqueter des tickets créés par téléphone comme tickets de portail | Taux de réussite du libre-service et effort de l'utilisateur ; part des demandes sans voie de portail utilisable |
| Couverture de l'automatisation | Choisir des éléments faciles pour la liste de candidats ; gonfler le dénominateur avec des tâches triviales ; compter comme automatisés des flux en partie manuels | Liste de candidats écrite et revue chaque trimestre ; taux d'échec et de reprise de l'automatisation ; temps d'intervention manuelle des éléments restants |
| Taux d'échec et de reprise de l'automatisation | Exclure les réparations manuelles du décompte ; laisser les exécutions échouées se rejouer en silence jusqu'à réussir ; étiqueter les échecs comme « essais à blanc planifiés » | Enregistrements d'incidents et d'alertes reliés aux flux ; temps de détection d'une exécution échouée ; audit par échantillon des résultats |
| Temps d'intervention manuelle par type de demande | Ne pas consigner le temps des éléments qui paraissent manuels ; attribuer le temps à une autre catégorie ; n'échantillonner que les jours calmes | Plan d'échantillonnage écrit et revu ; comparer avec le temps de cycle et l'âge de file du même type |
| Répartition par niveau (part de décalage vers la gauche) | Relever la part résolue au niveau 1 en reclassant des escalades, ou en clôturant des éléments au niveau 1 et en les rouvrant au niveau 2 comme nouveaux éléments | Taux de réouverture et taux de tickets liés ; échantillon de qualité de résolution ; satisfaction des clients par niveau |

Une lecture saine montre une réussite du libre-service en hausse avec un taux de chute vers le personnel stable ou en baisse, une déflexion estimée énoncée avec sa méthode, une couverture de l'automatisation en hausse face à une liste de candidats revue pendant que l'échec et la reprise restent bas, et une répartition par niveau qui déplace le travail plus tôt sans relever les taux de réouverture ni abaisser la satisfaction. Si un chiffre s'améliore pendant que son garde-fou se dégrade, traitez l'amélioration comme non prouvée.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Libre-service d'abord | Résultats immédiats pour les utilisateurs, coût marginal plus bas, disponible à toute heure | Les utilisateurs aux besoins complexes ou inhabituels peuvent se sentir abandonnés ; un contenu faible crée plus de contacts qu'il n'en supprime |
| Contact avec le personnel d'abord | Aide personnelle, jugement et chance de repérer des problèmes inhabituels | Plus lent, coûteux et dépendant de la disponibilité du personnel |
| Estimer la déflexion avec un groupe témoin | Preuve crédible de l'effet | Demande un travail de conception et la tolérance d'un groupe qui ne reçoit pas le changement |
| Compter les sessions sans tickets | Peu coûteux et toujours disponible | Surestime la réussite ; invite au détournement ; ne peut pas distinguer réussite et abandon |
| Automatisation large | Exécution cohérente et moins de tâches répétitives | Charge de maintenance, modes de défaillance qui passent à l'échelle et compétences qui peuvent s'éroder dans l'équipe |
| Automatisation sélective de flux stables | Meilleur rendement pour l'effort et moins de surprises | Laisse en place un peu de travail manuel, qui demande sa propre attention |

La réponse en bref est d'automatiser ce qui est fréquent, stable et bien compris, et de garder une personne disponible là où le besoin est flou ou les enjeux élevés. Le libre-service doit être jugé selon que les gens ont été aidés, la voie avec le personnel restant visible. Les économies du décalage vers la gauche ne sont réelles que si le résultat de l'utilisateur tient : comptez donc les deux côtés.

## Questions à discuter avec votre équipe

**1. Quand un utilisateur ouvre le portail et repart sans lever de ticket, que supposons-nous qu'il s'est passé, et comment le découvririons-nous ?**
Demandez au groupe de lister les histoires possibles : l'utilisateur a trouvé la réponse, a abandonné, a appelé à la place ou a demandé à un collègue. Regardez quelles données les distingueraient, comme un contact de suivi, une invite de sortie ou un échantillon de sessions. L'animateur doit consigner quelle hypothèse figure actuellement dans le tableau de bord et qui s'y fie. Terminez en convenant d'un changement qui remplacerait une hypothèse par une preuve.

**2. Comment estimons-nous actuellement la déflexion, et défendrions-nous la méthode devant un partenaire financier sceptique ?**
Parcourez le calcul étape par étape, y compris le groupe de comparaison et les corrections des variations de la demande. Demandez ce qui d'autre a changé pendant la période, comme des versions, des pannes ou des changements de personnel. Notez la plage de valeurs plausibles autant que le chiffre vedette. La discussion doit se terminer par un énoncé clair de la méthode qui puisse figurer à côté du chiffre.

**3. Lesquelles de nos automatisations désactiverions-nous demain si nous connaissions leur vrai coût ?**
Listez les flux automatisés avec leurs responsables, leur date de dernier changement, leurs nombres d'exécutions, leurs taux d'échec et leur effort de maintenance. Demandez lesquels personne ne regretterait, et lesquels les gens craignent de toucher. L'animateur doit traiter le retrait comme un résultat légitime. Les réponses révèlent souvent des flux sans responsable.

**4. Que se passe-t-il pour un utilisateur dont la tentative de libre-service échoue, et combien de temps lui faut-il pour joindre une personne ?**
Demandez à quelqu'un de parcourir le chemin comme le ferait un utilisateur, y compris pour trouver la voie de contact. Chronométrez-le et notez chaque étape qui pourrait être raccourcie. Comparez l'expérience avec l'intention énoncée du portail. Le groupe doit décider si la voie est aussi facile à trouver que celle du libre-service.

**5. À quoi ressemblait le mélange de travail du centre de services il y a un an, et à quoi ressemble-t-il maintenant ?**
Revoyez le mélange de catégories et la répartition par niveau dans le temps. Discutez des raisons pour lesquelles le temps de traitement ou la résolution au premier contact ont bougé, et si cela reflète un mélange plus difficile. Demandez si la direction a été informée que c'est attendu. Convenez de la façon de présenter la tendance pour qu'une hausse du temps de traitement après un décalage vers la gauche réussi ne soit pas lue comme un déclin.

**6. Que ferions-nous de la capacité que l'automatisation libère, et qui décide ?**
Estimez les heures retirées du travail manuel et nommez ce qu'elles devaient acheter. Demandez si le temps est allé au travail d'amélioration ou s'il a été absorbé par une nouvelle demande. Discutez de la façon dont l'équipe le saurait. L'animateur doit pousser vers un engagement concret, comme une part de capacité réservée à la correction des principaux sujets de chute vers le personnel.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent une bonne part de ce qui fait réussir le libre-service : des messages d'erreur clairs, des formulaires utilisables, de l'aide intégrée au produit et la possibilité d'accomplir des tâches sans lever de ticket. Elles détiennent aussi l'automatisation qui vit dans les chaînes de livraison et le code d'infrastructure. Leurs mesures utiles sont la réussite du libre-service sur leurs propres fonctionnalités et les étapes manuelles qui restent dans le travail de publication et d'environnement, traitées comme des tâches répétitives à supprimer (voir le sujet 2.8, Métriques DORA). Elles doivent lire les sujets de chute vers le personnel comme un backlog produit.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le parc d'automatisations et le repli avec le personnel. Elles doivent suivre la fiabilité de l'automatisation, la charge de maintenance et le temps d'intervention manuelle qui reste, et surveiller la répartition par niveau sans être pénalisées pour le travail plus difficile qui demeure. Les agents doivent être consultés sur les demandes qui sont de bons candidats à l'automatisation, parce qu'ils savent où est la vraie friction. Rapportez par flux et par type de demande, et jamais par agent.

### Direction et gouvernance

Les dirigeants sont tentés de traiter la déflexion comme un chiffre d'économies. Une meilleure demande porte sur le résultat de l'utilisateur, la méthode derrière toute estimation et la fiabilité de l'automatisation. La gouvernance doit attendre une liste de candidats, un responsable pour chaque flux automatisé et une règle de retrait. Les dirigeants doivent aussi protéger la voie avec le personnel contre un masquage pour atteindre un objectif (voir le sujet 11.3, Déployer les métriques sans semer la peur).

### Clients et utilisateurs

Les utilisateurs veulent avancer dans leur travail. Beaucoup préfèrent le libre-service quand il marche, et presque tous détestent s'y trouver piégés quand il ne marche pas. Leur expérience est mieux saisie par des questions d'effort et de résultat au moment de la sortie, et par la question de savoir si une tentative échouée a mené vite à une personne (voir le sujet 6.4, Expérience des utilisateurs et des employés). Les utilisateurs ayant des besoins d'accessibilité ou peu de confiance sont un signal d'alerte précoce pour les portails qui ne marchent que pour l'utilisateur moyen.

## En pratique : un exemple de gestion des services

Le service informatique d'un détaillant en ligne de taille moyenne exploite un centre de services, une équipe plateforme et plusieurs équipes produit. Les chiffres de cet exemple sont illustratifs.

Le service lance un portail repensé avec une réinitialisation de mot de passe guidée, un flux de demande d'accès logiciel et un agent conversationnel pour les questions courantes. Trois mois plus tard, le rapport du portail montre que 62 % des sessions se terminent sans ticket, et un responsable propose d'appeler cela « déflexion » et de fixer un objectif de 70 %. Le responsable du centre de services est mal à l'aise, parce que les agents rapportent que les gens qui appellent disent avoir « essayé d'abord le portail ».

L'équipe revoit les mesures. Elle définit la réussite du libre-service comme un résultat abouti sans contact avec le personnel sur le même sujet dans les 7 jours. Avec cette définition, le taux de réussite est de 48 % et non de 62, et le taux de chute vers le personnel du flux de demande d'accès est de 31 %. En lisant un échantillon de 40 contacts de chute, elle constate que la plupart des utilisateurs ne savaient pas lequel de deux éléments de catalogue semblables choisir, et que l'agent conversationnel répondait à une question sur un outil retiré.

L'équipe prend trois décisions. Premièrement, la mesure vedette devient la réussite du libre-service, la déflexion estimée n'étant montrée que comme une estimation trimestrielle fondée sur les contacts pour 1 000 utilisateurs actifs, et aucun objectif n'est fixé sur la déflexion. Deuxièmement, les deux éléments de catalogue semblables sont fusionnés, le contenu de l'agent conversationnel est corrigé et les deux principaux sujets de chute vers le personnel sont ajoutés au backlog d'amélioration avec un responsable. Troisièmement, un processus manuel de création d'environnements de test, qui prend aux ingénieurs de la plateforme une médiane de 25 minutes (illustratif) et se produit environ 40 fois par mois (illustratif), est ajouté à la liste des candidats à l'automatisation.

L'équipe plateforme automatise le flux d'environnements dans le trimestre. Un risque de détournement apparaît vite : le chiffre de couverture du flux monte, mais le taux d'échec et de reprise montre qu'une exécution sur huit (illustratif) demande une réparation manuelle et que les réparations étaient consignées comme « maintenance planifiée ». L'équipe ajoute les exécutions réparées au décompte des échecs, relie les exécutions à l'enregistrement d'incident et convient de revoir le flux chaque mois. À la revue suivante, le taux de réussite est monté à 57 % (illustratif), le taux de chute vers le personnel a baissé, et le temps de traitement du centre de services a légèrement monté parce que les contacts restants sont plus difficiles. Le responsable informatique convient de présenter le temps de traitement avec la répartition par niveau, pour éviter de lire la hausse comme un déclin.

## Agilité, IA, automatisation et analytique

### Agilité

Améliorez le libre-service par petites étapes avec le retour des utilisateurs, car le portail est un produit utilisé par de vraies personnes. La précaution est qu'un mandat « portail d'abord » peut faire monter l'adoption tout en frustrant les utilisateurs qui ont besoin d'une personne.

### IA

La discussion et la recherche par IA peuvent faire monter le volume de libre-service et la déflexion estimée, mais un contact dévié peut être un problème non résolu. Appariez la déflexion avec le taux de réussite du libre-service mesuré par une réponse de l'utilisateur ou une fenêtre sans retour, et avec le taux de chute vers une personne. La précaution est qu'un modèle qui répond avec assurance et à tort produit des contacts qui reviennent plus tard.

### Automatisation

Mesurez l'automatisation par la couverture, par les échecs et la reprise, et par le temps d'intervention manuelle qu'elle supprime. Consignez chaque action automatisée pour qu'elle puisse être auditée et annulée. La précaution est que les chiffres de couverture récompensent l'automatisation des tâches faciles : suivez donc aussi les difficiles.

### Analytique

Montrez la réussite, la chute vers le personnel et le recontact sur une même page par type de demande, avec les décomptes. La décision éclairée est quoi automatiser ensuite. La précaution est que la déflexion est une estimation : étiquetez-la donc comme telle et vérifiez-la avec un échantillon d'utilisateurs.

## Éclairage sectoriel

**Startup.** Les fondateurs peuvent souvent corriger un mauvais chemin de libre-service en parlant à l'utilisateur. Mesurez la réussite par une seule question de sortie et quelques lectures de vraies sessions, et automatisez les deux ou trois tâches qui interrompent le plus de monde. Évitez de construire un robot avant que les réponses écrites soient bonnes.

**Petite entreprise.** Une seule personne peut gérer l'informatique pour tout le monde : le libre-service signifie donc surtout de bons guides courts et un formulaire de demande partagé. L'automatisation de la création de comptes et des réinitialisations de mot de passe rapporte vite, à condition que quelqu'un détienne chaque flux. Gardez la voie avec le personnel évidente, car sinon le propre personnel du propriétaire contournera le système.

**Grande entreprise.** L'échelle accroît à la fois le bénéfice et le détournement. Standardisez les définitions entre unités métier, tenez une liste centrale de candidats et un registre d'automatisations, et rapportez par service et par élément du catalogue. Méfiez-vous de la comparaison d'unités qui servent des populations d'utilisateurs très différentes.

**Gouvernement et secteur public.** L'accessibilité, l'accès linguistique et l'obligation de servir les personnes qui ne peuvent pas utiliser les canaux numériques sont des entrées de conception, non des extras. Gardez disponibles et mesurées les voies assistées, documentez les décisions automatisées qui touchent des personnes, et attendez-vous à des questions d'audit sur qui détient chaque flux automatisé (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les motivations sont moins de contacts répétitifs, des résultats plus rapides pour les utilisateurs, une exécution plus régulière des tâches courantes et plus de capacité pour le travail d'amélioration. Le côté coût comprend la construction et la maintenance du portail et du contenu, le travail d'intégration et de données pour joindre les sessions aux tickets, la plateforme d'automatisation, et le temps d'écrire, de tester et de détenir chaque flux automatisé. Les échantillons de temps du personnel et une courte enquête de sortie coûtent peu, et fournissent l'essentiel des preuves dont vous avez besoin.

Le rendement doit être argumenté à partir de vos propres données. Utilisez le temps d'intervention manuelle et le volume pour estimer l'effort qu'une automatisation supprime, soustrayez l'entretien et le coût des échecs, et rapportez le résultat comme une fourchette avec ses hypothèses. Pour le libre-service, utilisez le taux de chute vers le personnel et les résultats échantillonnés pour montrer la part de contacts évités parce que les utilisateurs ont été aidés, et pas simplement éconduits. N'importez pas de pourcentages de déflexion ou d'économies de fournisseurs ou d'enquêtes ; mesurez d'abord votre propre référence. Le coût total de possession d'une automatisation inclut les changements dont elle aura besoin à mesure que les systèmes autour d'elle évoluent : budgétez-les.

## Anti-modèles et pièges

- **Compter les sessions sans tickets comme un succès.** Cela ne distingue pas l'aide de l'abandon. Définissez la réussite par le résultat et vérifiez-la avec la chute vers le personnel et les retours de sortie.
- **Des objectifs sur la déflexion.** Ils récompensent le fait de cacher la voie de contact. Utilisez la déflexion comme une estimation et fixez les objectifs sur les résultats des utilisateurs.
- **Cacher le numéro de téléphone ou la discussion.** Les utilisateurs qui ne peuvent pas joindre une personne augmentent leur effort et perdent confiance. Gardez la voie avec le personnel visible et mesurez le temps qu'il faut pour l'atteindre.
- **Automatiser avant de comprendre le processus.** Le flux encode la confusion à grande vitesse. Documentez et simplifiez d'abord le runbook, puis automatisez la version stable.
- **Une automatisation sans responsables.** Les flux sans responsable se dégradent en silence et échouent aux mauvais moments. Donnez à chaque flux un responsable, un test, une supervision et une règle de retrait.
- **Ignorer le coût de l'échec.** Un chiffre de couverture élevé avec une reprise non mesurée est un passif caché. Rapportez le taux d'échec et de reprise avec la couverture.
- **Lire une hausse du temps de traitement comme un déclin.** Après un décalage vers la gauche réussi, le travail restant est plus difficile. Montrez la répartition par niveau et le mélange de catégories à côté des mesures de temps.
- **Classer les agents par contacts déviés.** Cela produit le fait de repousser les utilisateurs et abîme les données. Rapportez uniquement par service et par flux.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Réussite du libre-service et déflexion | Visites du portail et décomptes de tickets rapportés ; aucune définition de résultat | Réussite définie pour certaines voies ; déflexion citée sans méthode | Une définition écrite de la réussite ; chute vers le personnel mesurée ; déflexion étiquetée comme estimation | Réussite et chute vers le personnel suivies dans le temps avec les retours de sortie ; déflexion estimée par comparaison | Résultats partagés avec les équipes produit et les fournisseurs ; les sujets de chute vers le personnel pilotent des corrections financées |
| Couverture et fiabilité de l'automatisation | Automatisation ponctuelle ; aucune liste de candidats | Quelques flux automatisés par des équipes individuelles ; échecs traités de façon informelle | Liste de candidats, responsables et mesures d'échec définis pour chaque flux automatisé | Couverture, taux d'échec et effort d'entretien revus et financés selon une cadence | Automatisation coordonnée entre équipes et fournisseurs ; flux retirés et révisés couramment |
| Effet de décalage vers la gauche et usage | Volume rapporté sans contexte | Répartition par niveau suivie par quelques équipes | Répartition par niveau et mélange de catégories rapportés à côté du temps de traitement | Capacité libérée planifiée et suivie ; la direction lit correctement les effets de mélange | Capacité et apprentissage reviennent dans la conception des services et du catalogue dans toute l'organisation |

## Liste de vérification

- [ ] La réussite du libre-service est définie par le résultat, avec début, fin et exclusions écrits.
- [ ] Le taux de chute vers le personnel est mesuré pour les principales voies de libre-service.
- [ ] Tout chiffre de déflexion énonce sa méthode et est étiqueté comme une estimation.
- [ ] Aucun objectif n'est fixé sur la déflexion.
- [ ] Une invite de sortie en une question ou un retour équivalent existe pour les voies clés.
- [ ] Une liste écrite de candidats à l'automatisation existe et est revue chaque trimestre.
- [ ] Chaque flux automatisé a un responsable, une supervision et une mesure d'échec et de reprise.
- [ ] Le temps d'intervention manuelle est échantillonné pour les principaux types de demandes.
- [ ] La répartition par niveau est montrée à côté du temps de traitement et de la résolution au premier contact.
- [ ] La voie avec le personnel est visible et son temps d'accès est vérifié.
- [ ] Les principaux sujets de chute vers le personnel sont revus chaque mois et routés vers des responsables.
- [ ] Aucune métrique de ce sujet n'est rapportée ni ciblée par agent.

## Prompts d'IA

**Vérifiez comment nous estimons la déflexion.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Analysez les sujets de chute vers le personnel à partir d'un échantillon.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Classez les candidats à l'automatisation.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Concevez les garde-fous d'un flux automatisé.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet voisin et le garde-fou d'une métrique de libre-service ou d'automatisation que vous prévoyez d'introduire.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique appariée avec un vecteur de détournement et un garde-fou.

## Idées clés

- La réussite du libre-service est un résultat pour l'utilisateur : définissez-la donc du côté de l'utilisateur et vérifiez-la par la chute vers le personnel et les retours de sortie.
- La déflexion est une estimation : énoncez donc la méthode et gardez-la hors des objectifs.
- La couverture de l'automatisation signifie peu sans fiabilité, entretien et liste de candidats revue.
- Le décalage vers la gauche relève la difficulté du travail restant : lisez donc le temps de traitement avec la répartition par niveau et le mélange de catégories.
- Mesurez des flux, des services et des éléments du catalogue, jamais des agents, et gardez la voie avec le personnel visible.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
