# Accords de niveau d'expérience

**Un accord de niveau d'expérience ajoute la question « qu'est-ce que cela a fait ressentir de l'utiliser ? » à la question « le service a-t-il atteint sa cible ? », et il ne marche que si les mesures d'expérience sont choisies avec les utilisateurs et gardées à côté des mesures opérationnelles.**

## Vue d'ensemble et motivation

Un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) consigne ce qu'un fournisseur s'engage à livrer, généralement en termes que le fournisseur peut compter : disponibilité, temps de réponse, temps de résolution. Ces mesures sont utiles et elles sont aussi incomplètes. Une équipe peut atteindre chaque cible du tableau de bord pendant que les utilisateurs passent leur semaine à contourner des connexions lentes, à se répéter auprès d'un centre de services et à attendre des approbations. Cet écart entre un rapport vert et des utilisateurs mécontents est parfois appelé l'effet pastèque : vert à l'extérieur, rouge à l'intérieur (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

Un **accord de niveau d'expérience (XLA)** est un accord, entre un fournisseur et les personnes qui utilisent un service, sur l'expérience que le service doit donner. Il énonce des résultats et des sentiments souhaités, comme « je peux commencer à travailler quelques minutes après mon arrivée » ou « je suis sûr que ma demande sera traitée », et il nomme les mesures qui montreront s'ils sont atteints. Le terme est employé dans toute la communauté de la gestion des services informatiques (ITSM), et sa définition exacte varie selon les auteurs et les fournisseurs. Vérifiez les publications actuelles du détenteur du cadre avant de décrire un XLA comme faisant partie d'ITIL, et dites quel usage vous suivez. Ce sujet traite le XLA comme une idée pratique : un accord qui place des mesures d'expérience à côté de mesures opérationnelles.

L'idée a des racines hors de l'informatique. L'[expérience utilisateur](https://en.wikipedia.org/wiki/User_experience) est l'expérience globale d'une personne qui utilise un produit, un système ou un service, et l'[expérience client](https://en.wikipedia.org/wiki/Customer_experience) est la somme des interactions d'un client avec une organisation dans le temps. L'[utilisabilité](https://en.wikipedia.org/wiki/Usability) porte sur l'efficacité, l'efficience et la satisfaction avec lesquelles les gens peuvent atteindre leurs buts. Les équipes agiles connaissent ce territoire par la conception centrée sur l'humain et la recherche utilisateur, et par les revues avec les parties prenantes où les utilisateurs réagissent à un logiciel qui fonctionne. Un XLA apporte la même attention au service en exploitation.

L'expérience est difficile à mesurer et facile à déformer. Une enquête qui n'atteint que les utilisateurs contents, un score de sentiment réglé pour monter ou un « indice d'expérience » unique que personne ne peut expliquer tromperont aussi sûrement qu'un temps de ticket truqué. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique pleinement : les mesures d'expérience sont des déclencheurs de conversation, non des quotas (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les mesures d'enquête du sujet précédent (voir le sujet 6.1, Métriques de satisfaction de la clientèle) et ajoute des mesures comportementales et fondées sur les parcours qui ne dépendent pas du fait de demander.

## Principes clés

- **Partez des résultats qui comptent pour les gens.** Demandez aux utilisateurs à quoi ressemble une bonne journée, et écrivez les accords dans leurs mots.
- **Appariez expérience et exploitation.** Un XLA se place à côté d'un SLA, non à sa place.
- **Utilisez quelques mesures sous des angles différents.** Combinez ce que les gens disent, ce qu'ils font et ce que le système consigne.
- **Mesurez les parcours autant que les points de contact.** Une expérience est tout le chemin du besoin au résultat.
- **Soyez honnête sur l'incertitude.** Les données d'expérience sont bruitées, et les petits groupes demandent protection.
- **Convenez des objectifs avec les utilisateurs, et révisez-les.** Un XLA est un accord vivant, revu avec les personnes qu'il décrit.
- **N'utilisez jamais les données d'expérience pour classer des individus.**

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Score d'expérience | Note moyenne d'un énoncé d'expérience convenu, pour un service et un public | note moyenne sur les réponses valides à un énoncé sur une échelle fixe | points d'échelle | Court sondage flash, envoyé selon un calendrier | Gestion des niveaux de service ; amélioration continue | Retour de la revue avec les parties prenantes ; revue des résultats du produit | Mensuelle |
| Tendance du sentiment | Direction du ton des commentaires libres pour un service | part des commentaires codés positifs moins part des commentaires codés négatifs, par période | points de pourcentage | Commentaires d'enquête et commentaires de tickets codés | Amélioration continue | Thèmes de rétrospective | Mensuelle |
| Événements de friction par utilisateur | Nombre de signaux indiquant qu'un utilisateur a rencontré des ennuis, normalisé par les utilisateurs actifs | (contacts répétés + éléments rouverts + connexions échouées au-delà d'un nombre fixé + demandes abandonnées) / utilisateurs actifs | événements par utilisateur | Système de tickets, journaux d'identité, portail de demandes | Centre de services ; gestion des incidents | Défauts trouvés à l'usage | Mensuelle |
| Temps perdu à cause de problèmes informatiques | Temps estimé que les utilisateurs perdent à cause de problèmes de service dans une période | minutes perdues déclarées par utilisateur, ou temps mesuré en état dégradé pondéré par les utilisateurs touchés | minutes par utilisateur | Sondage flash ; supervision jointe aux décomptes d'utilisateurs | Gestion de la disponibilité ; gestion des incidents | Temps de cycle perdu à cause de blocages | Trimestrielle |
| Taux d'achèvement de parcours | Part des utilisateurs qui terminent un parcours défini sans abandonner ni chercher de l'aide | utilisateurs terminant le parcours sans contact d'aide / utilisateurs commençant le parcours | pourcentage | Analytique du portail ; liens avec les tickets | Gestion des demandes de service ; gestion du catalogue des services | Réussite des tâches dans les tests d'utilisabilité | Mensuelle |
| Atteinte du XLA | Part des cibles d'expérience convenues atteintes dans la période | cibles atteintes / cibles convenues | pourcentage | Le registre des XLA | Gestion des niveaux de service | Atteinte des objectifs de livraison | Trimestrielle |
| Écart d'expérience | Différence entre l'atteinte du SLA et le score d'expérience pour le même service | rang de l'atteinte du SLA moins rang du score d'expérience entre services, ou comparaison écrite | différence de rang ou note | Rapports de SLA et sondage flash | Gestion des niveaux de service | Définition de terminé face au retour des utilisateurs | Trimestrielle |

Définissez le public et la période de chaque mesure. Énoncez comment les petits groupes sont protégés : par exemple, aucun résultat n'est montré pour un groupe de moins de dix personnes. Les événements de friction comptent des signaux, pas du blâme : un événement est donc rattaché à un service et à un groupe d'utilisateurs, jamais à l'évaluation de performance d'une personne nommée.

## Recommandations

### Concevoir l'accord avec les utilisateurs

**1. Interrogez avant de mesurer.** Passez du temps avec un échantillon d'utilisateurs de chaque groupe important et demandez : à quoi ressemble une bonne journée avec ce service ? Où vous fait-il perdre du temps ? Que cesseriez-vous de faire s'il marchait ? Prenez les habitudes de la [conception centrée sur l'humain](https://en.wikipedia.org/wiki/Human-centered_design) : observez le travail réel et écrivez ce que vous entendez dans les mots de l'utilisateur. Les énoncés qui en résultent deviennent les objectifs d'expérience de l'accord.

**2. Écrivez les énoncés d'expérience comme des résultats.** « Je peux rendre un nouvel arrivant productif dès son premier matin » en dit plus que « demande d'accès d'un nouvel arrivant résolue en deux jours ». Gardez chaque énoncé court, à la première personne et lié à un seul service. Visez trois à cinq énoncés par service pour que les gens puissent s'en souvenir.

**3. Choisissez des mesures sous trois angles.** Pour chaque énoncé, choisissez une mesure de ce que disent les gens (une question de sondage flash ou un thème de commentaires), une de ce que font les gens (achèvement de parcours, contacts répétés, demandes abandonnées) et, si possible, une de ce que le système consigne (latence des étapes du parcours). Quand les trois divergent, vous avez trouvé quelque chose à investiguer.

**4. Convenez légèrement des objectifs.** Au début, fixez une direction (« réduire le temps perdu ») et une date de revue au lieu d'un chiffre ferme. Des objectifs fermes pour de nouvelles mesures d'expérience invitent au détournement avant que la mesure soit comprise. Quand un objectif apparaît, faites-en une fourchette, et dites qui l'a convenu.

### Recueillir et lire les données

**5. Utilisez de courtes questions flash régulières.** Une question sur un énoncé, posée à intervalle régulier, est plus facile à répondre qu'une longue enquête annuelle. Faites tourner les énoncés, gardez une formulation stable et évitez d'interroger la même personne plus d'une fois dans une période donnée. Reliez la conception du sondage aux principes d'enquête du sujet précédent (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

**6. Lisez les commentaires avec une méthode.** Les outils d'[analyse de sentiment](https://en.wikipedia.org/wiki/Sentiment_analysis) peuvent trier de grands volumes de texte, et ils mal lisent le sarcasme, le jargon et le contexte. Traitez la sortie de l'outil comme un premier passage, faites vérifier un échantillon chaque mois par une personne et gardez une courte liste de thèmes que vous codez à la main. Le but de l'analyse est de trouver des sujets dont parler avec les utilisateurs, non de produire un score.

**7. Ajoutez des signaux comportementaux du parcours.** Instrumentez les parcours qui comptent pour les utilisateurs, avec leur connaissance : où commencent-ils, où abandonnent-ils et où demandent-ils de l'aide ? La [supervision des utilisateurs réels](https://en.wikipedia.org/wiki/Real_user_monitoring) des temps de chargement des pages, des erreurs et des étapes donne une vue que les enquêtes ne peuvent pas donner. Dites aux utilisateurs ce que vous recueillez, limitez-vous à ce dont vous avez besoin et agrégez avant de partager.

**8. Protégez les petits groupes et les individus.** Les données d'expérience peuvent révéler qui est en difficulté. Agrégez les résultats, supprimez les groupes sous une taille convenue et n'utilisez jamais les données dans les évaluations de performance. Décidez qui peut voir les commentaires bruts et stockez-les en conséquence. Dans les cadres réglementés, consultez des spécialistes de la vie privée avant de recueillir des données comportementales.

### Utiliser l'accord

**9. Montrez côte à côte le SLA et le XLA.** Sur la même page, affichez l'atteinte opérationnelle et les mesures d'expérience de chaque service. L'appariement est le but : un SLA vert avec un score d'expérience qui baisse est une invite à une conversation, et un score d'expérience vert avec des SLA en échec mérite un regard sur ce qu'on ne dit pas aux utilisateurs.

**10. Tenez une revue d'expérience régulière avec les utilisateurs.** Réunissez-vous chaque trimestre avec des représentants des groupes d'utilisateurs, montrez les données, demandez ce qu'elles signifient et convenez d'une ou deux améliorations à essayer. Incluez le centre de services et l'équipe produit, puisque la cause d'une mauvaise expérience se trouve souvent dans le produit, non dans le support.

**11. Financez les corrections.** Un accord qui identifie la friction et la laisse ensuite en place apprend aux utilisateurs que les mesures sont du théâtre. Mettez les deux ou trois principaux problèmes d'expérience au backlog avec des responsables et des dates, et rendez compte à la revue suivante. Voir les métriques d'amélioration continue plus loin dans ce livre (voir le sujet 9.5, Métriques d'amélioration continue).

**12. Révisez l'accord à mesure que les services et les utilisateurs changent.** Retirez les énoncés qui ne comptent plus et ajoutez-en de nouveaux. Consignez les changements et marquez-les sur les courbes de tendance, comme pour toute définition de métrique.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Score d'expérience | N'interroger que les utilisateurs satisfaits ; caler l'enquête après de bons événements ; reformuler l'énoncé pour qu'il soit plus facile d'y adhérer | Taux de réponse et composition des répondants ; journal de la stabilité de la formulation ; lecture des commentaires |
| Tendance du sentiment | Régler l'outil ou la liste de thèmes jusqu'à ce que la tendance monte ; exclure les canaux négatifs | Vérification humaine d'un échantillon mensuel ; garder un guide de codage fixe et consigner les changements |
| Événements de friction par utilisateur | Redéfinir les événements pour qu'il en compte moins ; décourager les contacts répétés en rendant le centre difficile à joindre | Volume de contacts par canal ; taux d'abandon au centre de services (voir le sujet 3.1, Métriques du centre de services) |
| Temps perdu à cause de problèmes informatiques | Demander de manière à ancrer des estimations basses ; ne compter que les incidents majeurs | Comparer le temps déclaré avec le temps dégradé mesuré ; revue de la formulation de l'enquête |
| Taux d'achèvement de parcours | Définir le parcours si étroitement que l'échec sort du périmètre ; orienter les cas difficiles vers un autre canal | Définition du parcours dans le registre ; taux de contacts d'aide et escalades |
| Atteinte du XLA | Fixer des cibles déjà atteintes ; définir un très petit ensemble de cibles | Revue de la fixation des cibles avec les utilisateurs ; montrer l'atteinte avec la tendance et l'historique des cibles |
| Écart d'expérience | Choisir les services ou les périodes qui paraissent le mieux ; changer les SLA comparés | Ensemble de comparaison fixé d'avance ; montrer tous les services |

Une lecture saine est un tableau d'expérience qui correspond aux commentaires et à la conversation de revue avec les utilisateurs, un petit ensemble de mesures qui changent lentement et pour des raisons que l'équipe peut expliquer, et un backlog de corrections d'expérience qui raccourcit.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLA seul | Clair, comptable, contractuel | Manque ce que ressentent les utilisateurs ; peut être vert pendant que les utilisateurs sont mécontents |
| XLA seul | Proche de ce que valorisent les utilisateurs | Plus difficile à mesurer et à comparer ; faible comme base de contrats avec des fournisseurs |
| SLA avec XLA | Donne les deux vues et expose l'écart | Plus de travail ; demande confiance et jugement pour lire les divergences |
| Mesures d'expérience fondées sur des enquêtes | Voix directe des utilisateurs | Biais de réponse ; charge pour les répondants |
| Mesures comportementales | Aucune charge d'enquête ; objectives | Demandent de l'instrumentation et du soin pour la vie privée ; montrent ce qui s'est passé, non pourquoi |
| Indice d'expérience unique | Titre facile | Cache le détail ; facile à détourner et difficile à expliquer |

La réponse en bref est d'utiliser le XLA comme un ajout, introduit pour quelques services où l'écart entre exploitation et expérience est déjà visible. Ne remplacez pas les SLA contractuels par des mesures d'expérience que les fournisseurs ne peuvent pas maîtriser. Gardez les engagements juridiques et commerciaux dans le SLA, et utilisez le XLA pour piloter l'amélioration et la conversation.

## Questions à discuter avec votre équipe

**1. Pour notre service le plus important, à quoi ressemble une bonne journée pour les utilisateurs, dans leurs mots ?**
Réunissez deux ou trois utilisateurs, ou réutilisez des entretiens récents, et notez leurs énoncés. L'animateur doit résister à l'envie de les reformuler en termes opérationnels. Comparez les énoncés avec le SLA actuel et demandez lesquels il couvre, et lesquels il ignore. Les écarts sont des candidats à des mesures d'expérience.

**2. Où nos tableaux de bord verts et les histoires de nos utilisateurs divergent-ils ?**
Demandez à l'équipe un cas récent où un service a atteint ses cibles et où les utilisateurs se sont plaints. Retracez le cas dans les données : qu'avons-nous mesuré, et qu'avons-nous manqué ? La conversation fera souvent émerger une étape manquante, une transmission ou une horloge arrêtée trop tôt. Consignez le cas comme exemple pour la prochaine revue avec les utilisateurs.

**3. Quelles trois mesures utiliserions-nous pour savoir si cet énoncé d'expérience est vrai ?**
Choisissez un énoncé et choisissez une mesure de ce que disent les gens, une de ce qu'ils font et une de ce que le système consigne. Demandez ce que chacune pourrait manquer, et comment chacune pourrait être détournée. Convenez du plus petit ensemble qui convaincrait un utilisateur sceptique.

**4. Que recueillons-nous sur les utilisateurs qu'ils pourraient ne pas attendre, et en seraient-ils à l'aise ?**
Listez les sources de données comportementales et l'objectif de chacune. Demandez à un représentant des utilisateurs de réagir. L'animateur doit traiter l'inconfort comme une information sur la conception, non comme un obstacle. Décidez de ce qu'il faut cesser de recueillir, de ce qu'il faut agréger et de qui peut voir les données brutes.

**5. Que ferions-nous si le score d'expérience baissait alors que tous les SLA restent verts ?**
Répétez la réponse. Qui regarde en premier, que vérifie-t-il, et à qui parle-t-il ? Décidez si l'équipe ferait confiance au score d'expérience ou chercherait des moyens de l'écarter. La réponse montre le sérieux avec lequel l'équipe prend l'accord.

**6. Quelles corrections d'expérience avons-nous promises, et qu'en est-il advenu ?**
Revoyez les deux dernières réunions de revue avec les utilisateurs. Pour chaque engagement, montrez la date, le responsable et le résultat. Si la liste est vide ou périmée, discutez des raisons. Convenez d'une correction à livrer avant la prochaine revue et d'un moyen de dire aux utilisateurs qu'elle a eu lieu.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit détiennent une grande part de la cause d'une mauvaise expérience : écrans déroutants, étapes lentes, erreurs peu claires. Les mesures d'expérience leur donnent des preuves issues de l'usage réel, et elles alimentent directement l'affinage. Les équipes doivent lire les thèmes de commentaires avant chaque séance de planification et relier les mesures de parcours au backlog. Elles ne doivent pas traiter le score d'expérience comme un objectif d'équipe. C'est une information sur le service qu'elles partagent avec l'exploitation.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient la friction en premier : contacts répétés, contournements et appelants en colère. Les mesures d'expérience leur donnent un moyen de montrer ce que le SLA cache, et une raison de corriger les causes au lieu de clore les tickets plus vite. Elles doivent tenir bon sur les définitions et l'échantillonnage, éviter d'orienter les utilisateurs vers des canaux qui paraissent mieux et lire en entier les commentaires mécontents (voir le sujet 3.1, Métriques du centre de services).

### Direction et gouvernance

Les dirigeants choisissent si un XLA est une conversation ou un tableau de score. Ils doivent demander ce que les données d'expérience disent de l'endroit où investir, éviter de lier la rémunération à un indice d'expérience et protéger la vie privée des données du personnel. La gouvernance doit demander les définitions, l'échantillonnage et l'historique des changements, et traiter un saut inexpliqué d'une mesure d'expérience comme une raison de vérifier la méthode.

### Clients et utilisateurs

Les utilisateurs sont les auteurs de l'accord. Ils doivent être invités à décrire ce que « bien » signifie, voir les résultats et savoir ce qui a changé. Ils doivent savoir ce qui est recueilli sur eux et pourquoi, et avoir un moyen de dire non. Les utilisateurs souvent sollicités qui ne voient rien s'améliorer cesseront de répondre, et le silence fera paraître les données meilleures que la réalité.

## En pratique : un exemple de gestion des services

Un cabinet de services professionnels de taille moyenne exploite un service informatique interne pour 1 800 personnes. Les chiffres ci-dessous sont illustratifs.

Le rapport mensuel de SLA montre 99,8 % de disponibilité pour la plateforme de collaboration et 96 % des incidents résolus dans la cible. Le directeur informatique est satisfait, et pourtant les consultants sur les sites clients continuent de se plaindre d'une connexion lente. Le responsable du service propose un pilote de XLA pour la plateforme de collaboration.

Lors d'entretiens avec 12 consultants, trois énoncés émergent : « je peux rejoindre un appel client dans les deux minutes qui suivent la décision de le faire », « je n'ai pas à appeler l'informatique pour retrouver l'accès à mon compte » et « quand quelque chose casse, je sais ce qui se passe ». L'équipe choisit des mesures pour chacun. Pour le premier, elle prend la note du sondage flash de l'énoncé et le temps mesuré entre le début de la connexion et l'entrée dans l'appel, issu de la supervision des utilisateurs réels du client, agrégé par région. Pour le deuxième, elle compte les contacts de réinitialisation de mot de passe par utilisateur actif et par mois. Pour le troisième, elle suit la part des incidents où le message d'état a été mis à jour dans les 30 minutes, et pose la question du sondage flash à ce sujet.

Les deux premiers mois de données montrent que le temps médian entre la connexion et l'entrée dans l'appel est bon dans la région du siège mais long dans deux autres, et que les contacts de réinitialisation de mot de passe par utilisateur sont trois fois plus élevés pour le personnel sur ordinateurs portables gérés que pour les autres. Le score d'expérience du premier énoncé est de 3,1 sur 5 contre 4,2 pour le personnel de bureau. Le SLA est vert dans les deux cas. Le responsable du service porte le constat à la revue avec les utilisateurs. L'équipe convient de deux améliorations : ajuster la configuration d'authentification unique pour les régions distantes, et changer les réglages de renouvellement de jeton sur les ordinateurs portables gérés. Trois mois plus tard, le temps médian baisse, les contacts de réinitialisation par utilisateur baissent, et le score d'expérience monte à 3,8. Le directeur convient de garder le XLA pour ce service, de l'ajouter à un autre, et de ne fixer aucun objectif chiffré avant la prochaine revue.

## Agilité, IA, automatisation et analytique

### Agilité

Convenez des mesures d'expérience avec les utilisateurs et revoyez-les à mesure que le service évolue, avec l'implication continue des parties prenantes. La précaution est qu'un objectif d'expérience fixé par le seul fournisseur ne décrira pas ce que ressentent les utilisateurs.

### IA

Les fonctionnalités d'IA changent directement l'expérience : incluez donc les parcours qui les utilisent et mesurez le résultat de l'utilisateur, non la confiance du modèle. Appariez les scores d'expérience avec l'achèvement des tâches et l'escalade vers une personne. La précaution est qu'un agent conversationnel agréable qui échoue la tâche flatte le score.

### Automatisation

Recueillez automatiquement les événements de friction et l'achèvement de parcours, avec consentement et règles de vie privée, et mesurez le recueil sur sa couverture. La précaution est que des données d'expérience automatiques sur des individus peuvent devenir de la surveillance : agrégez donc et minimisez.

### Analytique

Rapportez le score d'expérience avec les mesures opérationnelles sur la même page, et l'écart entre elles. La décision éclairée est quel service améliorer même si son SLA est vert. La précaution est que l'écart peut être un artefact de mesure : vérifiez donc l'échantillon.

## Éclairage sectoriel

**Startup.** Un contact étroit avec les utilisateurs rend les entretiens faciles. Résistez à l'envie de construire un cadre : écrivez trois énoncés d'expérience pour le service principal, interrogez les utilisateurs à leur sujet chaque mois et ajoutez une mesure comportementale. Les accords formels viennent plus tard.

**Petite entreprise.** Le personnel est peu nombreux et partage souvent un responsable avec l'informatique. Utilisez des conversations et un très court sondage flash mensuel. Soyez prudent avec les données comportementales, puisque de petits groupes sont facilement identifiables.

**Grande entreprise.** L'échelle apporte de nombreux groupes d'utilisateurs et fournisseurs. Définissez des énoncés d'expérience par service et par persona, gardez des tableaux de bord par service et évitez un indice d'expérience unique pour toute l'entreprise. Alignez le XLA sur les contrats de fournisseurs pour que les fournisseurs contribuent des données sans être tenus à des mesures qu'ils ne peuvent pas influencer.

**Gouvernement et secteur public.** Les services font souvent face au public autant qu'au personnel, avec des devoirs d'accessibilité, de langage clair et d'égalité d'accès. Incluez l'accessibilité dans les énoncés d'expérience et les mesures, testez avec des utilisateurs qui s'appuient sur des technologies d'assistance et protégez les données personnelles conformément à la loi. Là où un rapport public est requis, rapportez les méthodes avec les résultats (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est modéré. Les entretiens avec les utilisateurs prennent quelques jours par service. Un sondage flash mensuel demande un outil d'enquête, que beaucoup d'organisations ont déjà. Les mesures comportementales demandent un peu d'instrumentation, qui peut venir de la supervision existante et de l'analytique du portail. La revue avec les utilisateurs prend quelques heures chaque trimestre. Le codage des commentaires prend une heure ou deux chaque mois.

Le rendement vient de la découverte de problèmes que les SLA ne montrent pas, comme des parcours lents dans des régions ou sur des appareils précis, et de l'orientation de l'argent d'amélioration vers ce que les utilisateurs valorisent. Le temps perdu à cause de problèmes informatiques peut être traduit en coût avec les taux de vos propres équipes si vous le mesurez avec soin. Évitez les affirmations génériques de gains de productivité. Construisez le dossier à partir de votre propre référence : temps perdu par utilisateur, événements de friction par utilisateur et contacts répétés, avant et après une correction. Comptez aussi le coût évité des contournements, comme les outils de l'ombre adoptés parce que le service officiel est malcommode.

## Anti-modèles et pièges

- **Remplacer les SLA par des XLA.** Les contrats ont besoin d'engagements comptables. Gardez les deux et montrez-les ensemble.
- **Un indice d'expérience composite.** Il cache la cause et invite au détournement. Montrez quelques mesures distinctes.
- **Définir l'expérience sans les utilisateurs.** Des énoncés écrits dans une salle de réunion décrivent la vision du fournisseur. Interrogez et testez avec les utilisateurs.
- **Interroger jusqu'à ce que les gens cessent de répondre.** Gardez les sondages flash courts et faites tourner les sujets.
- **Recueillir des données comportementales sans en informer personne.** Cela brise la confiance et peut briser la loi. Soyez ouvert sur ce qui est recueilli et pourquoi.
- **Utiliser les données d'expérience dans les évaluations de performance.** Cela transforme un outil d'apprentissage en surveillance et détruit le rapport honnête.
- **Corriger la mesure, non la cause.** Ne réorientez pas les utilisateurs vers un canal plus aimable pour améliorer un chiffre. Corrigez le parcours.
- **Laisser les constats sur une diapositive.** Financez et suivez les corrections d'expérience.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Objectifs d'expérience | Implicites ou absents | Écrits par le fournisseur pour certains services | Énoncés écrits avec les utilisateurs pour les services clés | Énoncés revus et révisés chaque trimestre avec les groupes d'utilisateurs | Partagés entre services et fournisseurs, détenus conjointement avec les utilisateurs |
| Mesure | Enquêtes occasionnelles | Sondage flash pour un service | Mesures sous trois angles (dire, faire, système) pour chaque énoncé | Mesures suivies dans le temps, protégées pour les petits groupes et comparées aux SLA | Données combinées entre fournisseurs, avec des choix de vie privée contrôlés par l'utilisateur |
| Action | Plaintes traitées une par une | Corrections faites ponctuellement | Principaux problèmes d'expérience au backlog avec des responsables | Corrections financées, suivies et rapportées aux utilisateurs | Amélioration coordonnée entre équipes, fournisseurs et utilisateurs, avec apprentissage partagé |

## Liste de vérification

- [ ] Chaque service sous XLA a trois à cinq énoncés d'expérience écrits avec les utilisateurs.
- [ ] Chaque énoncé a des mesures sous au moins deux angles (dire, faire, système).
- [ ] Les mesures de SLA et d'expérience apparaissent sur la même page pour chaque service.
- [ ] Les sondages flash sont courts, réguliers et stables dans leur formulation.
- [ ] Les commentaires sont codés selon un guide stable et une personne vérifie un échantillon mensuel.
- [ ] Les groupes sous une taille convenue sont supprimés des rapports.
- [ ] Les données comportementales recueillies sont communiquées aux utilisateurs et limitées au besoin.
- [ ] Aucune mesure d'expérience n'est utilisée dans les évaluations de performance individuelles.
- [ ] Une revue trimestrielle avec des représentants des utilisateurs est au calendrier.
- [ ] Les principaux problèmes d'expérience ont des responsables et des dates au backlog.

## Prompts d'IA

**Rédigez des énoncés d'expérience à partir de notes d'entretiens.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Trouvez l'écart entre le SLA et l'expérience.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Passez en revue une approche de vie privée pour les mesures comportementales.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Préparez une revue d'expérience trimestrielle avec les utilisateurs.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou d'une mesure d'expérience avant de l'ajouter à un tableau de bord.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de XLA porte son vecteur de détournement et son garde-fou.

## Idées clés

- Un XLA ajoute des objectifs et des mesures d'expérience aux cibles opérationnelles, et il complète le SLA.
- Écrivez les énoncés d'expérience avec les utilisateurs, dans leurs mots, et liez chacun à des mesures de ce que disent les gens, de ce qu'ils font et de ce que le système consigne.
- Montrez ensemble les résultats de SLA et d'expérience, et traitez la divergence comme une invite à investiguer.
- Protégez les utilisateurs : communiquez ce que vous recueillez, agrégez, supprimez les petits groupes et gardez-le hors des évaluations de performance.
- Évitez un indice d'expérience unique et évitez les objectifs fermes avant que les mesures soient comprises.
- Financez les corrections que les données révèlent, et dites aux utilisateurs ce qui a changé.

## Références et lectures complémentaires

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
