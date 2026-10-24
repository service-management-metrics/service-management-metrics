# Métriques des incidents de sécurité et des vulnérabilités

**La sécurité fait partie de la livraison et de l'exploitation continues d'un service : mesurez donc combien de temps les gens restent exposés, à quelle vitesse vous contenez ce qui tourne mal et à quel point vos collègues sont prêts à lever la main, et ne transformez jamais une erreur en motif de blâme.**

## Vue d'ensemble et motivation

Chaque service porte des faiblesses, et certaines seront exploitées contre lui. Une [vulnérabilité](https://en.wikipedia.org/wiki/Vulnerability_(computing)) est une faiblesse d'un logiciel, d'un matériel, d'une configuration ou d'un processus qui peut être exploitée pour porter atteinte à la confidentialité, à l'intégrité ou à la disponibilité d'un système. Un incident de sécurité est un événement dans lequel cette atteinte se produit ou est crédiblement menaçante. Les métriques de ce domaine tentent de répondre à deux questions. Quelle est notre exposition, et à quelle vitesse trouvons-nous, corrigeons-nous et récupérons-nous des problèmes ?

La tradition agile et DevOps traite la sécurité comme une propriété de la livraison continue, non comme une porte à la fin. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) étend l'idée de DevOps en intégrant des contrôles de sécurité au pipeline et en partageant la responsabilité entre le développement, la sécurité et l'exploitation. ITIL, par sa pratique de gestion de la sécurité de l'information, apporte la politique, la pensée fondée sur le risque et le lien avec la gestion des incidents, des changements et des actifs. Les deux se rencontrent dans le travail quotidien : les mises à jour de dépendances arrivent comme des changements ordinaires, les constats de vulnérabilités deviennent des éléments de backlog avec des responsables, et les incidents sont traités avec les mêmes revues sans blâme que les autres (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

Les métriques de sécurité sont exposées à des distorsions particulières.

- **Compter les constats récompense le fait de ne pas regarder.** Une équipe qui analyse moins trouve moins. Un décompte brut de vulnérabilités peut baisser parce qu'un scanner a perdu son accès, non parce que quelque chose s'est amélioré.
- **Les scores de gravité sont des intrants, non des vérités.** Le [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) donne un score de gravité à une vulnérabilité dans l'abstrait, et des registres comme [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) leur donnent des identifiants. Qu'une vulnérabilité compte pour vous dépend de son atteignabilité dans votre environnement, de l'usage d'un code d'exploitation et de la valeur de l'actif touché. Un score de gravité brut utilisé seul envoie l'effort aux mauvais endroits.
- **Le blâme étouffe les signalements.** Si les gens sont punis pour avoir cliqué sur un lien ou pour avoir signalé un incident qu'ils ont causé, les signalements cessent et l'exposition grandit sans être vue. La sécurité psychologique est un contrôle de sécurité.
- **Les mesures de temps cachent la queue.** Un délai médian de correction peut sembler sain pendant qu'une poignée de systèmes critiques restent exposés pendant des mois.

Ce sujet donne les principales mesures, avec leurs définitions, leurs vecteurs de détournement et leurs garde-fous. Il s'appuie sur les enregistrements d'actifs et de configuration de la partie précédente, car vous ne pouvez pas corriger ni analyser ce que vous ne pouvez pas trouver (voir le sujet 7.1, Métriques de gestion des actifs informatiques, et le sujet 7.4, Métriques de qualité de la configuration et de la CMDB). Une mise en garde : c'est un guide de mesure, non un manuel de sécurité. Choisissez les contrôles avec des professionnels de la sécurité qualifiés, et suivez les normes et les devoirs légaux qui s'appliquent à vous, comme l'ISO/IEC 27001 et les orientations des agences nationales.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique vivement à la sécurité. Quand une métrique devient un objectif, les gens reclassent les constats, excluent des actifs des analyses et clôturent des tickets sans corriger la cause (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurez le temps d'exposition autant que les décomptes.** La durée pendant laquelle une faiblesse reste ouverte compte plus que le nombre de celles qui sont trouvées.
- **Priorisez par le contexte.** Combinez la gravité, l'exploitabilité, l'atteignabilité et la valeur de l'actif.
- **Vérifiez d'abord la couverture.** Un rapport propre issu d'une analyse qui a manqué la moitié du parc est un faux confort.
- **Intégrez la sécurité au pipeline.** Faites des choix sûrs le défaut facile, et donnez un retour rapide.
- **Collaborez entre disciplines.** La sécurité, le développement et l'exploitation détiennent ensemble les résultats.
- **Rendez le signalement sûr.** Un traitement sans blâme des erreurs garde les signaux en circulation.
- **Agrégez les données de comportement humain.** Rapportez des schémas de groupe et ne nommez ni ne classez jamais des individus.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fenêtre d'exposition | Temps pendant lequel une vulnérabilité connue reste ouverte sur les actifs du périmètre, par bande de priorité | médiane et 85e percentile des jours entre la date où l'on sait qu'elle s'applique à l'actif et la date où un correctif ou une atténuation acceptée est vérifié | jours | Scanner de vulnérabilités, système de tickets, enregistrements de changements | Gestion de la sécurité de l'information ; gestion des problèmes | Délai de correction d'un défaut du backlog | Hebdomadaire |
| Conformité des correctifs | Part des actifs du périmètre qui respectent la fenêtre de la politique de correctifs pour leur classe | actifs corrigés dans la fenêtre de la politique / actifs du périmètre ayant exigé un correctif dans la période | pourcentage | Outils de gestion des postes et des serveurs, registre des actifs | Gestion de la sécurité de l'information ; gestion des versions et des déploiements | Dépendances tenues à jour dans le pipeline | Hebdomadaire |
| Constats critiques en retard | Nombre et âge des constats de priorité critique au-delà de leur échéance de politique | nombre de constats critiques au-delà de l'échéance ; âge du plus ancien | décompte ; jours | Système de gestion des vulnérabilités | Gestion de la sécurité de l'information ; gestion des risques | Défauts de sécurité dépassant la limite convenue | Hebdomadaire |
| Couverture des analyses | Part des actifs du périmètre évalués dans l'intervalle exigé | actifs analysés avec succès dans le dernier intervalle / actifs du périmètre | pourcentage | Rapports de scanner joints au registre des actifs | Gestion de la sécurité de l'information ; gestion des actifs informatiques | Contrôles du pipeline exécutés à chaque construction | Hebdomadaire |
| Temps de confinement | Temps entre la détection d'un incident de sécurité confirmé et son confinement | médiane et 85e percentile des heures entre la détection et le confinement | heures | Enregistrements d'incidents | Gestion des incidents ; gestion de la sécurité de l'information | Temps de rétablissement du service après une défaillance | Par incident, revu chaque mois |
| Âge des exceptions de risque | Âge des exceptions de risque acceptées, et part au-delà de leur date de revue | jours depuis l'approbation ; exceptions au-delà de la date de revue / exceptions ouvertes | jours ; pourcentage | Registre des exceptions | Gestion des risques ; gestion de la sécurité de l'information | Revue de la dette technique | Mensuelle |
| Taux de signalement de sécurité | Part des événements suspects signalés par le personnel relativement aux événements de sécurité confirmés, comme indicateur de culture de signalement | signalements du personnel dans la période / événements suspects confirmés dans la période, avec tendance au niveau du groupe | rapport | Boîte aux lettres de sécurité, enregistrements d'incidents | Gestion de la sécurité de l'information ; gestion des incidents | Soulever ouvertement les obstacles | Mensuelle |

Énoncez les bandes de priorité et les fenêtres de politique dans le registre. La fenêtre d'exposition démarre quand on sait que la vulnérabilité s'applique à l'actif, soit le plus tardif de la divulgation et du moment où l'on sait que l'actif exécute le composant touché, et elle s'arrête à la remédiation vérifiée ou à une atténuation documentée et limitée dans le temps. Le temps de confinement démarre à la détection, non à la première alerte que personne n'a lue. N'excluez les constats de test et les faux positifs qu'après revue. Le taux de signalement de sécurité décrit des groupes et des tendances, jamais des individus.

## Recommandations

### Connaître votre parc et votre exposition

**1. Partez des enregistrements d'actifs et de dépendances.** Les analyses, les correctifs et la responsabilité dépendent tous de la connaissance de ce qui existe. Reliez chaque constat à un actif, un responsable et un service, et mesurez la couverture des analyses face au registre. Là où la couverture est faible, corrigez cela avant de lire les constats. Un actif non analysé est un inconnu, ce qui est pire qu'une faiblesse connue.

**2. Réduisez d'abord la [surface d'attaque](https://en.wikipedia.org/wiki/Attack_surface).** Retirez ce qui n'est pas nécessaire : services inutilisés, ports ouverts, vieux comptes, environnements oubliés. Tout ce que vous retirez est quelque chose que vous n'avez pas à corriger. Suivez le nombre de services exposés sur Internet et de comptes dormants comme de simples indicateurs, et revoyez-les avec les responsables.

**3. Incluez votre chaîne d'approvisionnement logicielle.** Les services modernes dépendent de nombreux composants. La [chaîne d'approvisionnement logicielle](https://en.wikipedia.org/wiki/Software_supply_chain) comprend les bibliothèques, les outils de construction, les images de conteneurs et les fournisseurs qui se trouvent derrière. Utilisez les nomenclatures logicielles décrites plus tôt pour trouver où un composant vulnérable est utilisé (voir le sujet 7.2, Métriques des actifs logiciels et des licences), et incluez les constats de dépendances dans les mêmes mesures que les constats d'infrastructure.

### Prioriser et corriger

**4. Classez par contexte, non par le seul score de gravité.** Combinez la gravité CVSS avec le fait qu'un code d'exploitation soit connu pour être utilisé, que le composant vulnérable soit atteignable et l'importance de l'actif. Les listes publiques de vulnérabilités connues pour être exploitées aident pour le premier facteur. Écrivez les règles de classement, revoyez-les et consignez la raison quand un élément de haute gravité est dépriorisé.

**5. Fixez des fenêtres de politique par bande et rapportez face à elles.** Pour chaque bande de priorité, convenez d'un délai cible de remédiation ou d'atténuation. Rapportez la part dans la fenêtre, la médiane et le 85e percentile de l'exposition, et l'élément ouvert le plus ancien. Les fenêtres sont des objectifs de conversation, et les éléments les plus anciens méritent l'attention parce qu'ils montrent où le processus échoue (voir le sujet 1.6, Culture statistique pour les métriques de service).

**6. Traitez la pose de correctifs comme un changement ordinaire et fréquent.** Le processus de correctifs le plus sûr est celui qui tourne souvent et qui est ennuyeux. De petites mises à jour fréquentes sont plus faciles à tester et à annuler que de grandes mises à jour rares, et des pipelines automatisés peuvent les appliquer en continu. Utilisez l'approche de maîtrise des changements pour l'approbation fondée sur le risque, et gardez une voie d'urgence pour les correctifs urgents (voir le sujet 4.3, Métriques de maîtrise des changements).

**7. Rendez les exceptions visibles et de courte durée.** Parfois, un correctif n'est pas possible. Consignez une exception avec une raison, un contrôle compensatoire, un responsable et une date de revue, et rapportez l'âge des exceptions. Les exceptions sans date de revue deviennent permanentes, et les exceptions permanentes deviennent le vrai registre des risques.

### Réagir et apprendre

**8. Exercez la réponse aux incidents.** La [gestion des incidents de sécurité informatique](https://en.wikipedia.org/wiki/Computer_security_incident_management) couvre la préparation, la détection, le confinement, l'éradication, la reprise et les leçons apprises. Répétez avec des exercices, consignez le temps de confinement depuis la détection et revoyez chaque incident important sans blâme. La structure du traitement des incidents de sécurité ressemble à celle du traitement des incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs).

**9. Mesurez le confinement, pas seulement la détection.** Les outils de détection produisent des alertes, et la valeur réside dans ce qui se passe ensuite. Suivez le temps que prennent les incidents confirmés à être contenus et rétablis, et la part de ceux qui ont été trouvés par votre propre supervision plutôt que signalés par des tiers. Une part croissante d'incidents détectés en interne est un signe de meilleure visibilité.

**10. Apprenez des quasi-incidents.** Un courriel d'hameçonnage signalé et bloqué, ou une vulnérabilité trouvée par un collègue avant un attaquant, est une leçon gratuite. Consignez et revoyez ces cas comme un incident, et remerciez la personne qui a signalé. Le taux de signalement de sécurité est un indicateur de santé de cette culture, et il doit monter avec la confiance.

### Construire la culture et le pipeline

**11. Placez les contrôles là où travaillent les développeurs.** Exécutez l'analyse des dépendances et l'analyse statique dans la construction, donnez le retour dans la demande de fusion et ne faites échouer les constructions que pour les problèmes que l'équipe reconnaît comme bloquants. Un retour rapide et pertinent est corrigé. Un déluge de constats de faible valeur est ignoré. Suivez le délai de correction des constats du pipeline, et ajustez les règles avec les équipes (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

**12. Formez et testez sans humilier.** Les exercices de sensibilisation, comme l'hameçonnage simulé, peuvent développer des compétences, et ils peuvent aussi abîmer la confiance quand les résultats servent à nommer ou à sanctionner des individus. Ne rapportez que des résultats agrégés, concentrez-vous sur le nombre de personnes qui signalent les messages suspects et expliquez l'objectif. Si un exercice fait que le personnel se sent piégé, changez-le.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Fenêtre d'exposition | Clore des constats sans vérification ; changer la date de début ; reclasser la gravité | Étape de vérification par quelqu'un d'extérieur à l'équipe qui corrige ; règle de la date de début dans le registre ; journal des changements de gravité |
| Conformité des correctifs | Exclure du périmètre les actifs difficiles à corriger ; compter un correctif comme appliqué alors que le système n'a pas été redémarré | Changements de périmètre consignés ; vérifier la version installée sur l'actif, non dans le ticket |
| Constats critiques en retard | Scinder les constats ou les fusionner ; déclasser la gravité | Compter par vulnérabilité et actif uniques ; revoir tous les changements de gravité |
| Couverture des analyses | Analyser un ensemble plus étroit ; compter une analyse qui n'a pas pu s'authentifier | Couverture face au registre des actifs ; qualité de l'analyse (authentifiée, complète) |
| Temps de confinement | Démarrer l'horloge plus tard ; déclarer tôt le confinement | L'horloge démarre au premier signal de détection ; vérifier le confinement avec des preuves |
| Âge des exceptions de risque | Renouveler automatiquement les exceptions ; scinder les exceptions pour réduire l'âge | Revoir les renouvellements d'exceptions avec une raison ; plafonner les renouvellements sans nouvelle preuve |
| Taux de signalement de sécurité | Encourager les signalements de faible valeur ; décourager les signalements pour améliorer d'autres chiffres | Qualité des signalements ; lire les commentaires ; enquête sur le sentiment de sécurité à signaler |

Une lecture saine est une forte couverture des analyses, une queue d'exposition courte et décroissante, des exceptions honnêtes avec des dates de revue, des incidents contenus rapidement et trouvés plus souvent en interne, et un personnel qui vous parle d'événements suspects sans crainte.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Priorisation par le seul score de gravité | Simple, cohérente | Ignore le contexte ; envoie l'effort aux mauvais endroits |
| Priorisation fondée sur le contexte | Se concentre sur le risque réel | Demande des données et du jugement |
| Fenêtres de correctifs fixes | Attentes claires | Peut forcer des changements précipités et risqués |
| Fenêtres fondées sur le risque | S'adapte à la situation | Plus difficile à auditer |
| Pose de correctifs automatisée fréquente | Petits changements, moins d'exposition | Demande de bons tests et un retour arrière |
| Rares grands cycles de correctifs | Familiers | Exposition plus longue, plus de risque par changement |
| Simulation d'hameçonnage | Développe la sensibilisation | Peut éroder la confiance si mal utilisée |
| Accent sur la culture de signalement | Fait remonter tôt les problèmes | Difficile à mesurer directement |

La réponse en bref est de classer par contexte, de corriger souvent par petites étapes avec un bon retour arrière, de consigner les exceptions avec des échéances et d'investir dans la culture de signalement comme contrôle.

## Questions à discuter avec votre équipe

**1. Quelle part de notre parc nos analyses voient-elles réellement ?**
Comparez les actifs analysés avec le registre des actifs. Demandez ce qui manque et pourquoi. L'animateur doit chercher les catégories systématiquement non analysées, comme les conteneurs, les appareils distants ou les systèmes tiers. Convenez d'un écart à combler ce trimestre.

**2. Quel est notre plus ancien constat critique ouvert, et pourquoi est-il encore ouvert ?**
Regardez la queue, non la moyenne. Retracez les quelques plus anciens : qui les détient, qu'est-ce qui les bloque et quel est le contrôle compensatoire. L'animateur doit demander si l'exception est consignée. Convenez de qui débloquera le plus ancien.

**3. Quand un correctif de sécurité a-t-il causé une panne pour la dernière fois, et qu'est-ce qui a changé ensuite ?**
Rappelez un exemple. La cause était-elle un correctif précipité ou un test manquant ? Discutez de la manière de rendre la pose de correctifs routinière et sûre. Reliez la réponse à la pratique de changement et de version.

**4. Si un collègue signalait aujourd'hui un courriel suspect, que lui arriverait-il ?**
Décrivez le chemin réel du signalement à la réponse, y compris la manière dont la personne qui signale est remerciée. Demandez si quelqu'un a été embarrassé d'avoir signalé ou d'avoir cliqué. La conversation porte sur la confiance. Convenez d'un petit changement qui rend le signalement plus facile ou plus sûr.

**5. Lesquels de nos chiffres de sécurité pourraient monter alors que nous devenons moins sûrs ?**
Listez les mesures et pensez à la façon dont chacune pourrait être améliorée en réduisant le périmètre ou en réétiquetant. Attribuez un garde-fou à chacune. Cet exercice construit l'entrée de registre pour la prochaine revue.

**6. À quelle vitesse pouvons-nous contenir un incident confirmé, et comment le savons-nous ?**
Revoyez les deux derniers incidents et retracez de la détection au confinement. Notez les retards. Demandez quels exercices nous avons menés. Convenez d'en mener un avant la prochaine revue.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison font l'essentiel des corrections et introduisent bien des faiblesses. Elles doivent garder les dépendances à jour dans le flux normal, traiter les constats de sécurité comme des éléments de backlog avec des responsables et des dates, et utiliser des contrôles de pipeline qui donnent un retour rapide et pertinent. Elles ont besoin de priorités claires et du temps d'agir, et elles doivent pouvoir soulever librement des préoccupations.

### Équipes de service et d'exploitation

Les équipes d'exploitation exécutent les scanners, appliquent les correctifs et répondent aux incidents. Elles doivent garder à jour les liens avec les actifs, rapporter honnêtement la couverture et traiter les exceptions avec des échéances. Elles ont aussi besoin de temps protégé pour répéter la réponse aux incidents, et d'une culture sans blâme quand des erreurs se produisent.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et décident si la sécurité est financée comme une activité continue ou comme un projet. Ils doivent demander des fenêtres d'exposition et les éléments ouverts les plus anciens plutôt que des totaux, protéger la culture de signalement et accepter que les chiffres montent quand la visibilité s'améliore. La gouvernance doit exiger des preuves pour les exceptions et pour l'apprentissage des incidents.

### Clients et utilisateurs

Les utilisateurs sont à la fois bénéficiaires et ligne de défense. Ils veulent des services qui protègent leurs données et des conseils clairs et équitables. On doit les informer rapidement quand un incident les touche, les traiter avec respect quand ils signalent des problèmes et leur donner des mesures de sécurité qui ne compliquent pas leur travail plus que nécessaire (voir le sujet 6.4, Expérience des utilisateurs et des employés).

## En pratique : un exemple de gestion des services

Une caisse de crédit régionale exploite une banque en ligne, une application mobile et des systèmes de succursales avec une petite équipe d'ingénierie et un service d'exploitation de sécurité externalisé. Les chiffres ci-dessous sont illustratifs.

Le conseil demande un tableau de bord de sécurité. La première ébauche de l'analyste de sécurité montre 4 200 vulnérabilités ouvertes en baisse, et 96 % de conformité des correctifs. Le responsable de l'ingénierie s'interroge sur la couverture des analyses. En joignant la sortie du scanner au registre des actifs, l'analyste constate que 31 % des serveurs et presque tous les conteneurs n'ont pas été analysés au cours des 30 derniers jours, parce que le scanner a perdu ses identifiants après une migration. Parmi les actifs qui ont été analysés, la fenêtre d'exposition médiane pour les vulnérabilités critiques est de 9 jours, et le 85e percentile de 41 jours. Le constat critique le plus ancien a 212 jours, sur un système hérité dont l'exception a expiré quatre mois plus tôt. La conformité des correctifs de 96 % n'avait été calculée que sur les actifs que l'outil de correctifs avait rapportés.

L'équipe fait quatre changements avec l'ingénierie et l'exploitation. La couverture des analyses devient la première ligne du tableau de bord, avec l'objectif d'atteindre la couverture complète du registre, et l'authentification du scanner est réparée et surveillée. La priorisation ajoute l'état d'exploitation et l'importance de l'actif au score de gravité, de sorte que les 4 200 constats se réduisent à une courte liste d'environ 60 qui comptent maintenant. Les mises à jour de dépendances passent dans le pipeline comme de petits changements fréquents avec des tests automatisés. Les exceptions reçoivent un responsable, un contrôle compensatoire et une date de revue, et celle qui a expiré est revue par le comité des risques. L'analyste de sécurité change aussi la façon de rapporter les résultats de l'hameçonnage simulé : seul le taux de signalement au niveau du groupe est montré, et l'analyste remercie personnellement les collègues qui signalent.

Deux mois plus tard, la couverture des analyses est de 97 %, le 85e percentile de la fenêtre d'exposition pour les éléments critiques est de 14 jours, et le constat critique le plus ancien est une exception atténuée à 60 jours de sa revue. Un courriel suspect de demande de paiement est signalé par un employé de succursale en quelques minutes, et l'incident est contenu en moins de deux heures. Le conseil demande que le nombre de vulnérabilités ouvertes soit divisé par deux d'ici la fin de l'année. Le responsable de l'ingénierie suggère de rapporter plutôt la fenêtre d'exposition et les constats critiques en retard, expliquant qu'un décompte peut baisser en analysant moins. La décision est consignée, et le conseil convient de revoir les nouvelles mesures à la prochaine réunion.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez la sécurité comme une partie de la livraison continue, les correctifs circulant dans le même pipeline et la même revue que les autres changements. La précaution est que des objectifs sur les décomptes de vulnérabilités encouragent le reclassement.

### IA

L'IA ajoute de nouveaux risques, comme l'injection de requêtes et la fuite de données, et les outils d'IA peuvent aider à trier les constats. Suivez les incidents impliquant des systèmes d'IA et la part des constats triés par l'IA qu'une personne a confirmés. La précaution est qu'une IA qui écarte un vrai constat donne une fausse assurance.

### Automatisation

Automatisez l'analyse et la pose de correctifs là où c'est sûr, et mesurez la couverture des analyses et les correctifs échoués. La précaution est que la pose automatique de correctifs peut casser des services : utilisez donc des déploiements progressifs et un retour arrière.

### Analytique

Rapportez la fenêtre d'exposition sous forme de distribution par gravité avec les décomptes. La décision éclairée est où réduire l'exposition en premier. La précaution est que les scores de vulnérabilité sont des intrants, non des résultats : combinez-les donc avec l'exploitabilité et l'importance de l'actif.

## Éclairage sectoriel

**Startup.** Il n'y a généralement pas d'équipe de sécurité dédiée : intégrez donc les bases au pipeline : mises à jour de dépendances, analyse des secrets, authentification multifacteur et moindre privilège. Suivez la fenêtre d'exposition pour une courte liste de systèmes critiques et ayez un plan d'incident simple. Résistez à l'achat d'un grand ensemble d'outils avant de connaître votre parc.

**Petite entreprise.** Les services externalisés et les outils infonuagiques portent l'essentiel du risque. Tenez un inventaire, activez partout l'authentification multifacteur, gardez les systèmes à jour automatiquement et sachez qui appeler en cas d'incident. Mesurez la conformité des correctifs et le temps de restauration des sauvegardes. Évitez d'humilier le personnel qui signale des erreurs.

**Grande entreprise.** L'échelle demande des données cohérentes entre de nombreuses équipes et outils. Définissez de façon centrale les bandes de priorité et les fenêtres, laissez les équipes détenir leurs constats, rapportez l'exposition par service métier et menez des exercices réguliers. Coordonnez-vous avec les équipes de sécurité des fournisseurs et testez les transmissions.

**Gouvernement et secteur public.** Les secteurs font souvent face à des directives obligatoires avec des échéances pour des vulnérabilités précises, des devoirs formels de signalement d'incidents et des exigences d'audit. Traitez-les comme des intrants de conception : suivez la conformité aux échéances des directives, conservez les preuves et signalez les incidents comme requis tout en protégeant la vie privée des individus (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'outillage d'analyse et de supervision, qui peut déjà être détenu ; le temps de maintenir les liens avec les actifs ; le temps d'ingénierie pour corriger les constats et mettre à jour les dépendances ; la préparation à la réponse aux incidents et les exercices ; et la formation. Les contrôles du pipeline coûtent du temps de mise en place et un peu de temps de construction. La supervision externalisée a des frais de service.

Le rendement est une probabilité et un impact moindres des incidents, une exposition plus courte et moins de changements d'urgence précipités. Ces bénéfices sont réels et difficiles à chiffrer, car l'incident qui n'a pas eu lieu ne laisse aucune trace. Évitez de citer des coûts moyens de brèches ou des fréquences d'incidents sectoriels à moins de pouvoir en retracer la source et la pertinence. Construisez le dossier à partir de vos propres données : la tendance de la fenêtre d'exposition, le nombre de changements d'urgence causés par une pose tardive de correctifs, le temps passé en travail manuel de correctifs que l'automatisation a supprimé et le coût de vos incidents passés, y compris le temps du personnel et l'impact sur les clients. Décrivez la réduction du risque en termes de scénarios précis, comme le suggère le sujet antérieur sur les dossiers d'affaires (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Rapporter des décomptes de vulnérabilités.** Les décomptes baissent quand les analyses manquent des choses. Rapportez la fenêtre d'exposition, les éléments en retard et la couverture.
- **Prioriser par le seul score de gravité.** Il ignore l'atteignabilité et l'exploitation. Ajoutez du contexte.
- **Traiter l'analyse comme la vérité.** Vérifiez la couverture et la qualité de l'analyse face au registre des actifs.
- **Des exceptions permanentes.** Elles deviennent un risque caché. Donnez à chaque exception un responsable et une date de revue.
- **Humilier les gens pour leurs erreurs.** Les signalements cessent. Utilisez la revue sans blâme et des résultats agrégés.
- **La sécurité comme porte à la fin.** Elle ralentit la livraison et invite aux contournements. Intégrez les contrôles au pipeline.
- **Des cycles de correctifs en bloc.** Ils sont risqués et lents. Corrigez souvent par petits changements.
- **Ignorer les fournisseurs.** Leurs faiblesses sont les vôtres. Suivez les obligations et incidents de sécurité des fournisseurs.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité | Analyses occasionnelles de certains systèmes | Analyses régulières des principaux systèmes | Couverture des analyses suivie face au registre des actifs ; constats reliés aux responsables | Couverture, fenêtres d'exposition et exceptions gérées et suivies dans le temps | Vue partagée entre équipes et fournisseurs, y compris les dépendances |
| Priorisation et correction | Corriger selon la demande la plus bruyante | Listes fondées sur la gravité | Classement fondé sur le contexte ; fenêtres de politique par bande ; correctifs fréquents et petits | Fenêtres et queue revues ; contrôles du pipeline ajustés avec les équipes | Remédiation automatisée et fondée sur le risque sous supervision humaine |
| Réponse et culture | Réponse improvisée ; blâme | Plan de base, rarement testé | Plan répété ; revue sans blâme ; signalement valorisé | Temps de confinement et taux de détection interne gérés ; culture de signalement mesurée | Exercices conjoints avec les fournisseurs et les clients ; apprentissage largement partagé |

## Liste de vérification

- [ ] La couverture des analyses est mesurée face au registre des actifs.
- [ ] Les constats sont reliés à un actif, un responsable et un service.
- [ ] Les bandes de priorité combinent gravité, exploitation, atteignabilité et importance de l'actif.
- [ ] Les fenêtres de politique par bande sont convenues, et la fenêtre d'exposition et l'élément ouvert le plus ancien sont rapportés.
- [ ] Les contrôles de dépendances et de pipeline s'exécutent à chaque construction, avec des bloquants convenus.
- [ ] La pose de correctifs se fait par changements fréquents, petits et testés, avec une voie d'urgence.
- [ ] Les exceptions ont un responsable, un contrôle compensatoire et une date de revue.
- [ ] La réponse aux incidents est répétée, et le temps de confinement est mesuré depuis la détection.
- [ ] Les données de comportement humain ne sont rapportées qu'en agrégat, et les signalements sont remerciés.
- [ ] Les obligations et incidents de sécurité des fournisseurs sont suivis.

## Prompts d'IA

**Passez en revue une règle de priorisation des vulnérabilités.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Vérifiez la couverture des analyses.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Planifiez un exercice sur table.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Rédigez un message sans blâme pour une erreur signalée.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de sécurité ou de vulnérabilité.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de sécurité porte son vecteur de détournement, son garde-fou et ses règles de vie privée.

## Idées clés

- Mesurez le temps d'exposition, les éléments ouverts les plus anciens et la couverture des analyses, non les décomptes bruts de constats.
- Priorisez par le contexte : gravité, exploitation, atteignabilité et importance de l'actif.
- Corrigez souvent par petits changements testés, et donnez à chaque exception un responsable et une date de revue.
- Contenez rapidement les incidents, apprenez sans blâme et suivez la détection interne.
- Traitez la culture de signalement comme un contrôle : remerciez ceux qui signalent, et ne classez jamais des individus.
- Intégrez les contrôles de sécurité au pipeline pour que les choix sûrs soient les choix faciles.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
