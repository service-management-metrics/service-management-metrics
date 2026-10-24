# Métriques des agents d'IA et des agents conversationnels

**Un assistant conversationnel n'a aidé que lorsque le problème de l'utilisateur est résolu et le reste : mesurez donc la résolution vérifiée, les retours, la qualité de la transmission à une personne et le préjudice des actions erronées, et ne récompensez jamais un robot pour avoir tenu les gens à l'écart de l'aide.**

## Vue d'ensemble et motivation

De nombreuses organisations placent désormais un assistant conversationnel entre les utilisateurs et le centre de services, et certaines donnent à des agents d'IA la capacité d'agir : réinitialiser un mot de passe, commander du matériel, redémarrer un service, modifier une configuration. Un [agent conversationnel](https://en.wikipedia.org/wiki/Chatbot) est une application logicielle qui mène une conversation, et un [assistant virtuel](https://en.wikipedia.org/wiki/Virtual_assistant) y ajoute la capacité d'accomplir des tâches pour le compte de l'utilisateur. L'idée plus large d'[agent intelligent](https://en.wikipedia.org/wiki/Intelligent_agent) est celle d'un système qui perçoit un environnement et agit vers des buts. Les modèles de langage modernes rendent ces systèmes bien plus capables de conversation ouverte que leurs prédécesseurs à base de règles, et le premier programme conversationnel, ELIZA de Joseph Weizenbaum dans les années 1960, montrait déjà avec quelle facilité les gens attribuent de la compréhension à une machine qui ne fait que produire des réponses plausibles.

L'attrait est évident. Les utilisateurs obtiennent de l'aide à toute heure sans attendre. Les équipes passent moins de temps sur les demandes courantes. Le [libre-service](https://en.wikipedia.org/wiki/Self-service) est depuis longtemps un but de l'ITSM, et le déplacement de la résolution vers des points plus précoces et moins coûteux (shift-left) est une idée centrale du centre de services (voir le sujet 3.7, Métriques de libre-service et d'automatisation). Le problème de mesure est que les chiffres évidents récompensent les mauvaises choses. Un robot qui termine une conversation est compté comme l'ayant « contenue », que l'utilisateur ait été aidé ou ait renoncé. Un robot qui n'offre jamais un humain maximise le confinement. Un robot qui donne avec assurance une mauvaise réponse produit un échec silencieux qui apparaît comme un contact furieux quelques jours plus tard.

Deux sortes de systèmes demandent des mesures distinctes.

- **Les assistants conversationnels** répondent à des questions, guident les utilisateurs et recueillent de l'information. Leur risque est celui de réponses fausses ou inutiles et de pièges où les utilisateurs tournent en boucle. Les mesures se concentrent sur la résolution, l'exactitude et le chemin vers une personne.
- **Les agents qui agissent** changent des choses dans le monde : comptes, systèmes, tickets, argent. Leur risque est une action erronée aux conséquences réelles. Les mesures se concentrent sur l'exactitude des actions, la réversibilité, les limites de permissions et les pistes d'audit. Ces usages appellent une gouvernance plus solide et, souvent, une approbation humaine pour les étapes lourdes de conséquences (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA).

Plusieurs questions de conception façonnent ce que vous mesurez.

- **L'honnêteté sur ce à quoi l'utilisateur parle.** De nombreuses juridictions ont ou élaborent des devoirs d'informer les gens quand ils interagissent avec un système d'IA, et en octobre 2026 ces règles évoluent : vérifiez donc ce qui s'applique à vous. La bonne pratique est de le dire clairement dans tous les cas.
- **Une porte de sortie.** Les utilisateurs doivent pouvoir joindre une personne sans lutte. Un robot qui cache le chemin vers un humain est un [motif trompeur](https://en.wikipedia.org/wiki/Dark_pattern), une conception qui piège les utilisateurs vers des issues qu'ils ne choisiraient pas.
- **L'accessibilité.** Les interfaces conversationnelles doivent fonctionner pour les personnes utilisant des technologies d'assistance, celles qui ont une capacité linguistique limitée et celles qui ont besoin d'une autre langue ou d'un autre canal.
- **Les décisions automatisées.** Quand la production d'un assistant touche les droits ou l'accès d'une personne, le sujet de la [prise de décision automatisée](https://en.wikipedia.org/wiki/Automated_decision-making) et les devoirs qui l'entourent s'appliquent. Gardez ces décisions entre les mains de personnes, ou avec de solides garanties.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est ici criant : si le confinement ou le détournement est l'objectif, la façon la moins coûteuse de l'atteindre est de rendre l'humain plus difficile à joindre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ci-dessous mettent la résolution et le résultat pour l'utilisateur en premier.

## Principes clés

- **La résolution est la mesure, non le confinement.** Une conversation qui a pris fin n'est pas un problème qui a été résolu.
- **Vérifiez, et surveillez le retour.** Ne comptez un contact comme résolu que lorsque l'utilisateur le confirme ou ne revient pas.
- **Fournissez toujours un chemin vers une personne.** Rendez-le facile, rapide et visible, et transmettez le contexte.
- **Soyez honnête sur le système.** Dites que c'est une IA, ce qu'elle peut faire et ce qu'elle ne peut pas faire.
- **Limitez ce que les agents peuvent faire.** Accordez le moindre privilège, exigez l'approbation pour les actions lourdes de conséquences et gardez une piste d'audit.
- **Mesurez la qualité des réponses par échantillonnage.** Des réponses fluides peuvent être fausses.
- **Écoutez les utilisateurs et le personnel qui ramasse les morceaux.** Ils voient ce que les métriques manquent.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de résolution vérifiée | Part des conversations avec le robot où l'utilisateur a confirmé que le problème était résolu, ou n'est pas revenu dans une période énoncée | conversations avec résolution confirmée ou sans contact de retour dans les 7 jours / conversations ayant commencé avec une intention résoluble | pourcentage | Journaux de conversation, confirmation de l'utilisateur, données de tickets et de contacts | Centre de services ; gestion des connaissances | Résultat fonctionnel pour l'utilisateur | Hebdomadaire |
| Taux de contacts de retour | Part des conversations terminées par le robot suivies d'un contact sur le même problème par n'importe quel canal | conversations suivies d'un contact lié dans les 7 jours / conversations terminées sans transmission | pourcentage | Journaux de conversation joints aux enregistrements de tickets et de contacts | Centre de services ; gestion des incidents | Défauts échappés | Hebdomadaire |
| Complétude du contexte de transmission | Part des transmissions à une personne où la personne avait l'information nécessaire sans demander à l'utilisateur de se répéter | transmissions échantillonnées jugées complètes par l'agent récepteur / transmissions échantillonnées | pourcentage | Transmissions échantillonnées, retour des agents | Centre de services ; gestion des connaissances | Collaboration fluide à travers la frontière | Mensuelle |
| Délai avant l'humain | Temps entre le moment où l'utilisateur demande une personne, ou où le robot décide de transmettre, et la prise en charge par une personne | médiane et 85e percentile des minutes | minutes | Journaux de conversation, données de file | Centre de services ; gestion des incidents | Réactivité quand l'utilisateur a besoin d'aide | Hebdomadaire |
| Exactitude des réponses | Part des réponses du robot échantillonnées jugées correctes, complètes et sûres par un réviseur qualifié | réponses jugées correctes / réponses échantillonnées | pourcentage | Revue par échantillon | Gestion des connaissances ; assurance qualité | Définition de terminé pour une réponse | Mensuelle |
| Satisfaction et effort avec le robot | Note de l'utilisateur sur la satisfaction et la facilité après une conversation, avec commentaires | notes favorables / notes ; note moyenne d'effort | pourcentage ; points d'échelle | Court sondage après conversation | Centre de services ; expérience client | Retour sur un logiciel qui fonctionne | Hebdomadaire |
| Taux d'annulation des actions de l'agent | Part des actions entreprises par un agent d'IA qui ont dû être corrigées, annulées ou escaladées | actions annulées ou corrigées / actions entreprises, par type d'action et classe de risque | pourcentage | Journal d'audit des actions, enregistrements de changements | Maîtrise des changements ; gestion des incidents | Reprise et retour arrière | Hebdomadaire |

Définissez les intentions que le robot traite, et excluez du confinement celles qu'il doit toujours transmettre. La résolution vérifiée ne compte une conversation que si le problème était dans le périmètre et que l'utilisateur a soit confirmé, soit montré l'absence de contact de retour. Le délai avant l'humain démarre à la demande de l'utilisateur, non à la fin d'un menu. L'exactitude des réponses est jugée face à la base de connaissances et à la politique par une personne qui n'a pas construit le robot. L'annulation des actions de l'agent est ventilée par type d'action et classe de risque, et toute action nuisible est rapportée à part comme un incident.

## Recommandations

### Définir la réussite comme la résolution

**1. Définissez les intentions et le résultat voulu.** Listez les problèmes que l'assistant doit traiter, comme la réinitialisation de mot de passe, l'état d'un accès, les questions pratiques, et le résultat pour chacun : répondu, fait ou transmis. Décidez quelles intentions doivent toujours aller à une personne : plaintes, tout ce qui touche à la détresse, à la sécurité, aux droits légaux ou à l'argent. Un robot qui essaie de tout traiter échoue lourdement aux marges.

**2. Mesurez la résolution vérifiée et les retours.** Demandez aux utilisateurs à la fin si leur problème est résolu, et cherchez aussi les contacts liés par la suite. Aucun des deux ne suffit seul : les utilisateurs qui renoncent ne répondent pas, et certains qui ont obtenu de l'aide appellent quand même. Ensemble, ils approchent la vraie résolution. Traitez le taux de contacts de retour comme le garde-fou clé de tout chiffre de confinement (voir le sujet 3.1, Métriques du centre de services).

**3. Évitez le confinement comme objectif.** Rapportez le confinement seulement comme un chiffre descriptif et toujours à côté de la résolution vérifiée, des retours et de la satisfaction. Un confinement qui monte avec des retours qui montent signifie que le robot éconduit les gens. Ne fixez pas d'objectif de confinement et n'y liez la performance de personne.

### Rendre le chemin vers une personne facile et bon

**4. Laissez les utilisateurs joindre une personne à tout moment.** Fournissez un moyen clair et simple de demander un humain, et respectez-le. Mesurez le délai avant l'humain et la part des conversations où les utilisateurs ont demandé plus d'une fois. Testez vous-même régulièrement le chemin. Là où aucune personne n'est disponible, dites quand il y en aura une, et proposez un rappel.

**5. Transmettez avec le contexte.** Quand le robot passe une conversation à une personne, incluez le résumé, ce qui a été essayé, les mots de l'utilisateur et les détails de compte pertinents pour que l'utilisateur ne se répète pas. Demandez aux agents récepteurs de noter si la transmission était complète, et échantillonnez les résultats. De mauvaises transmissions font que les utilisateurs font moins confiance au robot et au service (voir le sujet 9.3, Métriques de collaboration et de transmission).

**6. Concevez pour tous les utilisateurs.** Testez l'assistant avec des utilisateurs qui emploient des technologies d'assistance, qui écrivent dans d'autres langues, qui sont pressés ou en détresse et qui ne sont pas à l'aise avec la technologie. Offrez d'autres canaux. Mesurez la résolution vérifiée et la satisfaction par groupe d'utilisateurs là où c'est sûr et licite. Les moyennes cachent ceux que le robot dessert le plus mal.

### Vérifier la qualité de ce qu'il dit et fait

**7. Échantillonnez les réponses pour l'exactitude et la sécurité.** Chaque mois, tirez au hasard un échantillon de conversations et faites juger les réponses par une personne qualifiée : correctes, complètes, sûres et honnêtes sur l'incertitude. Consignez les erreurs par type : périmées, inventées, hors politique ou mal comprises. Alimentez la base de connaissances et la configuration avec les erreurs. Ajoutez des tests ciblés pour les sujets sensibles et pour les tentatives de pousser l'assistant hors de son périmètre.

**8. Gardez la connaissance à jour.** Un assistant ne vaut que par le contenu et les outils sur lesquels il s'appuie. Reliez les erreurs de réponse aux articles de connaissances, et mesurez la fraîcheur de la connaissance qu'il utilise (voir le sujet 3.6, Métriques de gestion des connaissances). Là où le système recourt à la recherche dans une base de connaissances, incluez un contrôle qu'il cite ses sources et que les sources sont justes.

**9. Soyez honnête avec les utilisateurs.** Dites dès le début qu'ils parlent à une IA, et ce qu'elle peut et ne peut pas faire. Ne lui donnez pas un nom ni une manière humains qui suggèrent le contraire. Là où elle n'est pas sûre, elle doit le dire et proposer une personne. Vérifiez le droit applicable en matière d'information.

### Gouverner les agents qui agissent

**10. Classez les actions par risque et réglez les permissions en conséquence.** Pour chaque action qu'un agent peut entreprendre, définissez sa classe de risque : informationnelle, réversible et à faible impact, ou lourde de conséquences. Accordez le moindre privilège nécessaire. Exigez l'approbation humaine pour les actions lourdes de conséquences. Gardez une piste d'audit de chaque action avec la raison, l'utilisateur et le résultat. Ces contrôles se relient aux mesures de changement et de sécurité des parties précédentes (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités, et le sujet 8.2, Métriques des risques et des contrôles).

**11. Mesurez l'exactitude et la réversibilité des actions.** Suivez le taux d'annulation par type d'action, et revoyez chaque action nuisible comme un incident, sans blâme. Testez les agents dans un environnement sûr avant d'accorder l'accès, et retestez quand le modèle ou les outils changent. Une nouvelle version de modèle peut changer le comportement : traitez-la donc comme un changement qui demande un contrôle (voir le sujet 4.3, Métriques de maîtrise des changements).

**12. Écoutez les personnes qui ramassent les morceaux.** Le personnel du centre de services voit les conséquences des échecs du robot : utilisateurs en colère, contacts répétés et désordres à nettoyer. Demandez-lui régulièrement ce que le robot fait de travers et ce qui rend les choses plus difficiles. Leur retour et les commentaires des utilisateurs sont des preuves qu'aucune métrique ne saisit pleinement, et ils doivent façonner la prochaine série de changements.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de résolution vérifiée | Compter toute fin de conversation comme résolue ; poser des questions de confirmation suggestives | Définir la confirmation de façon neutre ; taux de contacts de retour ; échantillonner les conversations |
| Taux de contacts de retour | Ne mesurer que par un seul canal ; fenêtres courtes | Joindre tous les canaux ; utiliser une fenêtre plus longue comme contrôle ; échantillonner les retours |
| Complétude du contexte de transmission | Passer une longue transcription au lieu d'un résumé ; échantillonner des transmissions faciles | Note de l'agent récepteur ; échantillon aléatoire ; délai de résolution après la transmission |
| Délai avant l'humain | Démarrer l'horloge après les menus ; compter un accusé de réception de file comme une prise en charge | L'horloge démarre à la demande ; la prise en charge signifie qu'une personne est active dans la conversation |
| Exactitude des réponses | Échantillonner des conversations faciles ; réviseurs indulgents | Échantillon aléatoire par des réviseurs indépendants ; cas de test adverses |
| Satisfaction et effort avec le robot | N'interroger que les conversations achevées ; placer l'enquête là où seuls les utilisateurs contents arrivent | Interroger aussi les conversations abandonnées ; taux de réponse et composition ; lecture des commentaires |
| Taux d'annulation des actions de l'agent | Ne pas consigner les annulations ; reclasser les corrections comme du nouveau travail | Journal d'audit résistant à l'altération ; relier les annulations aux actions ; revue d'incident |

Une lecture saine est une forte résolution vérifiée avec peu de retours, des chemins faciles et rapides vers une personne avec des transmissions complètes, des réponses exactes à la revue par échantillon, des utilisateurs satisfaits dans tous les groupes, et des agents dont les actions ont rarement besoin d'être annulées et ne causent jamais de préjudice inaperçu.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Robot à base de règles | Prévisible, facile à tester | Étroit ; fragile ; frustrant hors des scénarios |
| Assistant à modèle de langage | Souple, fluide | Peut se tromper avec assurance ; plus difficile à tester |
| Recherche dans une connaissance approuvée | Réponses ancrées, plus faciles à corriger | Dépend de la qualité du contenu |
| Génération ouverte | Large couverture | Risque plus élevé d'invention |
| Approbation humaine des actions | Sécurité | Plus lente ; fatigue du réviseur |
| Actions autonomes | Vitesse | Plus grand rayon d'effet en cas d'erreur |
| Périmètre strict avec transmission précoce | Sûr | Confinement plus faible |
| Large périmètre | Confinement plus élevé | Plus d'erreurs aux marges |

La réponse en bref est de commencer avec des intentions étroites et bien comprises, d'ancrer les réponses dans une connaissance approuvée, de faciliter l'aide humaine et de n'étendre le périmètre et l'autonomie que dans la mesure où les mesures le justifient.

## Questions à discuter avec votre équipe

**1. Si un utilisateur voulait une personne tout de suite, combien d'étapes cela prendrait-il, et l'avons-nous essayé nous-mêmes ?**
Testez ensemble le chemin. Comptez les étapes et l'attente. L'animateur doit noter chaque obstacle. Convenez de changements pour que le chemin soit court, et mesurez le délai avant l'humain.

**2. Quelle part des conversations que notre robot a terminées a réellement résolu le problème ?**
Vérifiez les retours et les confirmations sur un échantillon. Comparez avec le chiffre de confinement. Discutez de l'écart. Décidez quel chiffre les dirigeants doivent voir.

**3. Qu'est-ce que notre robot fait de travers, et qui le découvre ?**
Demandez au centre de services. Revoyez des conversations échantillonnées. Cherchez des schémas : articles périmés, questions ambiguës, sujets sensibles. Convenez d'un chemin des erreurs aux corrections, avec un responsable.

**4. Quelles actions l'agent peut-il entreprendre seul, et lesquelles demandent une personne ?**
Listez les actions avec leurs classes de risque et leurs permissions. Demandez quelle serait la pire défaillance réaliste de chacune. Convenez des règles d'approbation et de la piste d'audit, et de qui revoit les cas nuisibles.

**5. Qui le robot dessert-il mal en silence ?**
Pensez aux utilisateurs pressés, en détresse, ayant des besoins d'accessibilité ou une langue limitée. Regardez la résolution et la satisfaction par groupe, là où c'est sûr. Convenez d'un test avec de tels utilisateurs.

**6. Qu'est-ce qui nous ferait éteindre le robot ou restreindre son périmètre ?**
Définissez les preuves : retours au-dessus d'un niveau, actions nuisibles, exactitude sous une norme. Décidez de qui peut trancher. Avoir une règle d'arrêt d'avance facilite l'action.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes qui construisent l'assistant détiennent sa qualité. Elles doivent définir les intentions, ancrer les réponses dans une connaissance approuvée, tester avec des cas adverses, publier les changements sous contrôle et lire les échecs. Elles doivent rejeter les objectifs de confinement qui récompensent le fait de piéger les utilisateurs.

### Équipes de service et d'exploitation

Le personnel du centre de services travaille avec l'assistant et hérite de ses échecs. Il doit noter les transmissions, signaler les mauvaises réponses, garder la connaissance à jour et prendre vite le relais quand on le lui demande. Il est le meilleur juge de l'aide que l'assistant apporte aux utilisateurs, et sa charge de travail et son stress font partie du tableau.

### Direction et gouvernance

Les dirigeants parrainent l'assistant et veulent des économies. Ils doivent demander la résolution vérifiée, les retours et la satisfaction à côté du confinement, exiger une règle d'arrêt, financer le chemin humain et revoir les classes de risque des agents. La gouvernance doit vérifier l'information donnée, l'accessibilité et les devoirs légaux.

### Clients et utilisateurs

Les utilisateurs veulent de l'aide avec peu d'effort et sans artifice. Ils doivent savoir qu'ils parlent à une IA, pouvoir joindre facilement une personne et avoir confiance que le système n'agira pas sans bonne raison. Leur expérience, surtout de l'échec, est la preuve première de la valeur de l'assistant.

## En pratique : un exemple de gestion des services

Une université nationale exploite un centre de services pour étudiants et personnel qui traite environ 30 000 contacts par mois. Elle lance un agent conversationnel pour les demandes courantes, et le tableau de bord du fournisseur rapporte un taux de confinement de 74 %. Les chiffres ci-dessous sont illustratifs.

La responsable des services aux étudiants vérifie. Parmi les conversations terminées par le robot le mois dernier, 29 % ont été suivies d'un contact lié par courriel ou téléphone dans les sept jours. La résolution vérifiée, selon la confirmation de l'utilisateur et l'absence de retour, est de 49 % pour les intentions dans le périmètre. Le temps médian pour joindre une personne après l'avoir demandée est de 6 minutes, avec un 85e percentile de 22, en partie parce que le chemin exige trois étapes de menu. Un échantillon de 100 conversations revues par deux conseillers expérimentés en trouve 88 correctes et 12 défectueuses : 7 périmées, 3 avec des détails inventés sur une échéance et 2 qui traitaient mal des cas sensibles concernant un étudiant en difficulté. Les agents récepteurs jugent complètes 54 % des transmissions. La satisfaction envers le robot est plus basse pour les étudiants qui utilisent des lecteurs d'écran et pour ceux qui écrivent dans des langues autres que l'anglais. L'équipe du centre de services rapporte de nombreux contacts qui commencent par « l'agent conversationnel n'a pas pu m'aider ».

La responsable des services aux étudiants fait des changements avec l'équipe. Les intentions sensibles, comme le bien-être, les plaintes et les litiges sur les frais, sont acheminées directement vers une personne, et le robot le dit. Une option « parler à une personne » apparaît sur chaque écran, et le délai avant l'humain est suivi, avec un objectif de répondre en quelques minutes pendant les heures de présence. Les transmissions incluent un résumé automatique et les mots de l'utilisateur. Les responsables de la base de connaissances corrigent les articles périmés, et une revue par échantillon mensuelle les alimente. L'assistant est limité à répondre à partir d'un contenu approuvé et doit dire quand il ne sait pas. Un second pilote permet à un agent de réinitialiser des mots de passe après vérification d'identité, chaque action étant consignée et réversible dans un délai limité, avec un taux d'annulation suivi. Le tableau de bord remplace le confinement par la résolution vérifiée, le taux de contacts de retour, l'exactitude, le délai avant l'humain et la satisfaction par groupe.

Trois mois plus tard, la résolution vérifiée atteint 66 % pour les intentions dans le périmètre, le taux de contacts de retour tombe à 14 %, le délai médian avant l'humain tombe à 2 minutes, la part des transmissions complètes monte à 86 % et l'exactitude des réponses échantillonnées monte à 95 %, sans cas sensible mal traité dans l'échantillon. Le taux d'annulation des actions de l'agent dans le pilote des mots de passe est de 1,2 %. Le cabinet du recteur demande un objectif de confinement de 85 %. La responsable des services aux étudiants explique qu'un objectif de confinement plus élevé récompenserait le fait de cacher le chemin vers une personne, et propose la résolution vérifiée et les retours comme mesures, avec une revue de ce qu'il faut étendre ensuite. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Améliorez les assistants par petites étapes avec le retour des utilisateurs et des personnes qui prennent le relais, et revoyez régulièrement les échecs avec les parties prenantes. La précaution est que récompenser le confinement apprend au robot à tenir les gens à l'écart de l'aide.

### IA

Un assistant conversationnel n'a aidé que lorsque le problème est résolu et le reste : mesurez donc la résolution vérifiée, les retours, la qualité de la transmission et l'annulation des actions des agents. Définissez le rôle de l'humain : qui approuve les actions, quand le robot doit passer la main et comment une personne peut le contourner. La précaution est qu'une conversation agréable peut quand même échouer la tâche.

### Automatisation

Journalisez chaque conversation et chaque action d'agent, avec des permissions et un moyen de revenir en arrière, et mesurez l'automatisation sur les actions erronées. La précaution est qu'un agent aux permissions larges peut causer du tort à grande vitesse : limitez donc le périmètre et revoyez les journaux.

### Analytique

Rapportez la résolution vérifiée par la confirmation de l'utilisateur ou une fenêtre sans retour, avec les décomptes, et lisez un échantillon de conversations. La décision éclairée est où l'assistant peut être étendu en toute sécurité. La précaution est que les scores de satisfaction sur les conversations avec le robot penchent vers les utilisateurs qui sont allés jusqu'au bout.

## Éclairage sectoriel

**Startup.** Un assistant peut couvrir le soutien à faible coût, et une seule mauvaise réponse peut coûter un client. Gardez un périmètre étroit, ancrez les réponses dans votre documentation, rendez évidente l'option humaine et lisez chaque escalade. Soyez prudent avant de laisser un agent agir sur des comptes ou des paiements.

**Petite entreprise.** Un assistant prêt à l'emploi sur un site web peut traiter les questions courantes. Testez-le comme un client, assurez-vous qu'un numéro de téléphone ou un courriel est facile à trouver et revoyez les conversations chaque semaine. Vérifiez ce que le fournisseur fait des données.

**Grande entreprise.** L'échelle offre des économies et du risque. Menez un processus de gouvernance pour les classes de risque, les approbations et l'audit, mesurez par intention et par groupe d'utilisateurs et assurez-vous qu'une personne est joignable sur chaque canal. Coordonnez le soutien, la sécurité, le juridique et l'accessibilité.

**Gouvernement et secteur public.** Les citoyens n'ont peut-être aucun autre fournisseur, et les devoirs d'accessibilité, d'accès linguistique et de traitement équitable s'appliquent fortement. Gardez une personne joignable, évitez les décisions automatisées sur les droits sans garanties, publiez la manière dont l'assistant est utilisé et vérifiez l'information donnée et les devoirs de droit administratif (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont les licences ou frais à l'usage, l'intégration, la préparation du contenu, l'échantillonnage et la revue continus, la maintenance de la base de connaissances, les tests et la gouvernance. Un bon chemin humain coûte aussi de l'argent, car il doit être doté en personnel.

Les rendements potentiels sont des attentes plus courtes pour les problèmes simples, un soulagement des contacts répétitifs et une couverture hors des heures de travail. Le côté risque comprend les retours, la confiance perdue, le préjudice de mauvaises réponses ou actions et l'exposition juridique. Construisez le dossier à partir de vos propres chiffres : résolution vérifiée et retours, coût par contact résolu y compris les transmissions, temps du personnel passé à corriger les échecs du robot et satisfaction par groupe. Évitez d'utiliser les affirmations de confinement ou de détournement d'un fournisseur comme votre estimation. Comptez le coût du chemin humain et de la gouvernance (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Le confinement comme objectif.** Il récompense le fait de tenir les gens à l'écart de l'aide. Rapportez la résolution vérifiée et les retours.
- **Un chemin caché ou lent vers une personne.** C'est un motif trompeur, et les utilisateurs le remarquent. Rendez-le court et testez-le.
- **Transmettre sans contexte.** Les utilisateurs se répètent et la confiance baisse. Passez un résumé.
- **Laisser le robot traiter les cas sensibles.** Le bien-être, les plaintes et les droits demandent des personnes. Acheminez-les directement.
- **Des actions autonomes sans audit ni approbation.** Une seule erreur peut se propager. Classez, limitez et journalisez.
- **Ne mesurer que ce que montre le tableau de bord du fournisseur.** Il flatte. Joignez vos propres données.
- **Ignorer les groupes que le robot dessert mal.** Les moyennes les cachent. Testez et segmentez là où c'est sûr.
- **Aucune règle d'arrêt.** Un robot défaillant reste en ligne. Définissez les preuves qui le restreindraient ou l'éteindraient.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Résultats | Confinement rapporté | Satisfaction sondée | Résolution vérifiée et retours suivis par intention | Segmentation par groupe d'utilisateurs ; règles d'arrêt définies ; exactitude échantillonnée chaque mois | Assistant, personnel et connaissance améliorés ensemble à partir de preuves partagées |
| Chemin vers les personnes | Difficile à trouver | Option disponible | Chemin court ; délai avant l'humain suivi ; transmissions porteuses de contexte | Qualité des transmissions notée et améliorée ; dotation en personnel alignée sur la demande | Robot et personnel collaborent sans heurt entre canaux, le choix de l'utilisateur étant respecté |
| Agents qui agissent | Automatisation improvisée | Actions scriptées | Actions classées par risque, moindre privilège, approbation et audit | Taux d'annulation et préjudice revus ; changements maîtrisés | Comportement des agents gouverné dans l'organisation et chez les fournisseurs avec assurance indépendante |

## Liste de vérification

- [ ] Les intentions de l'assistant sont listées, avec celles qui doivent toujours aller à une personne.
- [ ] La résolution vérifiée et le taux de contacts de retour sont rapportés à côté du confinement.
- [ ] Un chemin visible et court vers une personne existe sur chaque écran, et le délai avant l'humain est mesuré.
- [ ] Les transmissions incluent un résumé et les mots de l'utilisateur, et sont notées par les agents récepteurs.
- [ ] Les réponses sont échantillonnées chaque mois par des réviseurs qualifiés et indépendants.
- [ ] Les utilisateurs sont informés qu'ils parlent à une IA, et de ce qu'elle peut faire.
- [ ] Des tests d'accessibilité et d'autres langues sont faits avec de vrais utilisateurs.
- [ ] Les actions des agents sont classées par risque, dotées du moindre privilège et journalisées pour l'audit.
- [ ] Les taux d'annulation et les actions nuisibles sont revus sans blâme.
- [ ] Une règle d'arrêt définit quand restreindre ou éteindre l'assistant.

## Prompts d'IA

**Définissez les intentions et les règles de transmission.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Vérifiez une affirmation de confinement.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Concevez une classification des risques pour les actions d'un agent.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Planifiez une revue des conversations du robot.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'agent conversationnel ou d'agent d'IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'agent conversationnel mesure la résolution et porte son vecteur de détournement et son garde-fou.

## Idées clés

- Mesurez la résolution vérifiée et les contacts de retour, et traitez le confinement comme un chiffre seulement descriptif.
- Rendez le chemin vers une personne court et visible, et transmettez avec le contexte.
- Échantillonnez les réponses pour l'exactitude et la sécurité, et gardez à jour la connaissance qu'utilise l'assistant.
- Soyez honnête sur le fait que les utilisateurs parlent à une IA, et testez avec les utilisateurs les plus susceptibles d'être mal servis.
- Pour les agents qui agissent, classez le risque, limitez les permissions, exigez l'approbation pour les actions lourdes de conséquences et gardez une piste d'audit.
- Définissez d'avance une règle d'arrêt.

## Références et lectures complémentaires

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
