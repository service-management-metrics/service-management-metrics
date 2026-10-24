# Modèle de maturité des programmes de métriques

**Servez-vous de l'échelle commune à cinq niveaux pour décrire où en est un programme de métriques et choisir la prochaine petite étape, jamais comme un score à afficher, à comparer ou à certifier.**

## Vue d'ensemble et motivation

Chaque autre sujet de ce livre se termine par un petit tableau de maturité pour son objet. Ce sujet applique la même échelle au programme de métriques dans son ensemble. La question n'est pas de savoir si les délais d'incidents d'une équipe sont bons. Elle est de savoir dans quelle mesure l'organisation recueille, lit et exploite les mesures en général : si les définitions sont partagées, si les données sont fiables, si les chiffres mènent à des décisions et si les personnes mesurées voient le programme comme une aide.

Un modèle de maturité est une description d'étapes qu'une organisation peut franchir à mesure qu'une pratique se développe. L'exemple le plus connu en logiciel est le [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), né de travaux du Software Engineering Institute et largement répandu. Son influence a été grande, et les critiques qui ont suivi aussi. Les organisations ont poursuivi le niveau et non la capacité, les auditeurs ont noté de la paperasse, et le modèle en est venu à servir d'insigne. Un usage responsable de tout modèle de maturité garde trois précautions à l'esprit. L'échelle est un outil de conversation et non une certification. Plus haut n'est pas toujours mieux, car le bon niveau dépend du contexte. Et le modèle ne remplace pas les résultats : un programme mature qui n'améliore pas les services est un échec très bien rangé, et un niveau affiché comme un insigne ressemble beaucoup à une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric), un chiffre qui fait bonne figure et n'éclaire aucune décision.

L'échelle employée ici est celle qui est commune à tout le livre et au *Service Management Guide* : Initier, Développer, Standardiser, Gérer et Orchestrer (voir le modèle de maturité commun dans la spécification). Elle n'est délibérément pas la même que les échelles de maturité de processus d'ITIL, d'ISO/IEC 33000 ou du Capability Maturity Model, et une équipe ne devrait pas revendiquer un score dans l'un de ces cadres sur la foi de celle-ci.

Les visées agiles indiquent comment s'en servir. L'amélioration continue signifie que le modèle sert à trouver la prochaine étape, non à atteindre un état final. L'évolution permanente signifie qu'un programme parvenu à Orchestrer l'an dernier peut régresser si des gens partent ou si les priorités changent : l'auto-évaluation est donc répétée. L'implication continue des parties prenantes signifie que l'évaluation se fait avec les équipes et non sur elles. Un rythme soutenable signifie que le programme avance une étape à la fois et n'essaie pas de sauter trois niveaux en un trimestre. Et bâtir autour de personnes motivées signifie que ce sont les personnes qui font le travail qui jugent si le programme les aide. C'est la même logique que la pratique d'amélioration continue d'ITIL, où une organisation vérifie l'état actuel, fixe une direction et s'améliore par petites étapes, une habitude proche du [kaizen](https://en.wikipedia.org/wiki/Kaizen), l'idée japonaise d'amélioration continue par tous. L'idée plus générale est le [processus d'amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process) (voir le sujet 9.5, Métriques d'amélioration continue).

Le modèle a un piège particulier dans le contexte des métriques. Un programme évalué sur ses propres métriques invite à la distorsion même qu'il met en garde. Si le « nombre de mesures avec définitions » devient un objectif, les définitions se multiplient. L'approche de ce sujet utilise donc des preuves tirées du travail (quelles décisions ont changé, ce que disent les équipes) en plus des décomptes, et garde l'évaluation détenue par les équipes, qui ont le moins à gagner à la gonfler (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Un formulaire d'évaluation d'accompagnement pour les équipes figure dans les annexes (voir le sujet 12.5, Autoévaluation de la maturité).

## Principes clés

- **L'échelle est un outil de conversation.** Elle aide les gens à décrire le présent et à choisir une prochaine étape, et ne sert ni à noter, ni à classer, ni à certifier.
- **Évaluez avec les équipes.** L'auto-évaluation, discutée ouvertement, est plus exacte qu'une notation externe.
- **Jugez sur des preuves.** Demandez quelles décisions ont changé, ce que disent les gens et ce que montrent les données, autant que les documents qui existent.
- **Les dimensions peuvent différer.** Un programme peut être fort en outillage et faible en confiance. Rapportez le profil, non un seul chiffre.
- **Avancez d'une étape à la fois.** Visez le niveau suivant dans une ou deux dimensions, pas tout à la fois.
- **Plus haut n'est pas toujours mieux.** Choisissez le niveau qui convient à la taille, au risque et aux besoins de l'organisation.
- **Attendez-vous à la régression.** Le roulement du personnel, la réorganisation et la pression peuvent faire reculer un programme. Réévaluez régulièrement.
- **Ne publiez jamais de classement des équipes.** Agrégez pour le programme et ne partagez les résultats d'une équipe qu'avec elle.

## Définitions des métriques

Les mesures ci-dessous décrivent la santé du programme et son évaluation. Elles sont destinées à l'équipe du programme et aux sponsors, et se lisent comme des signaux de discussion.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Participation à l'évaluation | Part des équipes participantes qui ont terminé une auto-évaluation avec leur propre discussion | équipes ayant terminé et discuté / équipes participantes | pourcentage | Enregistrements d'évaluation | Amélioration continue | Réflexion et rétrospectives | Deux fois par an |
| Profil par dimension | La distribution des niveaux auto-évalués des équipes dans chaque dimension, montrée comme une plage et non comme un score unique | décompte des équipes à chaque niveau, par dimension | équipes par niveau | Auto-évaluations, agrégées | Amélioration continue ; gouvernance | Travail visible | Deux fois par an |
| Actions d'amélioration issues des évaluations | Part des prochaines étapes convenues qui ont été achevées, abandonnées avec une raison ou sont en cours | actions closes ou justifiées / actions convenues | pourcentage | Registre d'amélioration | Amélioration continue | Petites expériences | Trimestrielle |
| Preuve par la décision | Part des mesures échantillonnées pour lesquelles l'équipe peut nommer une décision ou un choix délibéré que la mesure a éclairé au dernier trimestre | mesures avec une décision nommée / mesures échantillonnées | pourcentage | Entretiens avec les équipes ; notes de revue | Amélioration continue | Les preuves plutôt que le cérémonial | Trimestrielle |
| Confiance dans les définitions et les données | Adhésion, au niveau de l'équipe, à l'idée que les définitions sont claires et les données correctes | pourcentage d'accord à un court sondage d'équipe ; taux de réponse montré | pourcentage | Sondage d'équipe anonyme | Gestion des connaissances ; gestion de l'information | Compréhension partagée | Deux fois par an |
| Délai avant le niveau suivant (descriptif) | Temps écoulé pour qu'une équipe fasse monter d'un niveau une dimension là où elle l'a choisi | médiane des mois entre l'étape convenue et la réévaluation de l'équipe | mois | Historique des évaluations | Amélioration continue | Rythme soutenable | Annuelle |
| Charge de l'évaluation | Heures que prend l'évaluation par équipe | médiane des heures par équipe | heures | Estimations de temps des équipes | Amélioration continue | Rythme soutenable | Deux fois par an |

La participation est mesurée comme l'achèvement avec discussion, parce qu'un formulaire rempli seul dit peu de chose. Le profil est une plage et n'est jamais moyenné en un seul chiffre de maturité. Le délai avant le niveau suivant est descriptif : une montée rapide peut refléter une auto-notation gonflée, et une lente peut refléter une prudence appropriée. La charge de l'évaluation est un contrôle de l'évaluation elle-même, qui ne devrait pas prendre plus d'une heure ou deux par équipe.

## Recommandations

### Bien utiliser l'échelle

**1. Définissez les dimensions d'un programme de métriques.** Un ensemble praticable comprend six dimensions : (a) questions et but, si les mesures répondent à des questions posées par les publics ; (b) définitions et responsabilité, si les mesures ont des définitions écrites et des responsables ; (c) données et outillage, si les données sont exactes, actuelles et portables ; (d) usage dans les décisions, si les chiffres éclairent des choix ; (e) confiance et sécurité, si les gens croient que les données les aident ; et (f) revue et évolution, si le programme s'élague lui-même. Six suffisent pour être utile et sont assez peu nombreuses pour en discuter en une heure.

**2. Décrivez à quoi ressemble chaque niveau.** Le tableau de la section « Modèle de maturité » ci-dessous donne de courtes descriptions pour chaque dimension à chaque niveau. Traitez-les comme des amorces. Une équipe devrait adapter la formulation à son propre contexte et écrire ses propres exemples.

**3. Ne faites pas de moyenne.** Un score global unique cache le schéma qui compte. Un programme à forte maturité d'outillage et à faible confiance est dans une situation différente de celui qui a l'inverse, et la prochaine étape diffère. Montrez le profil.

### Évaluer avec les équipes et non sur elles

**4. Faites-en une conversation d'une heure.** Réunissez une équipe avec le tableau. Demandez à chaque personne de marquer, en privé, où elle pense que l'équipe se situe dans chaque dimension, puis comparez. Discutez des différences, car elles révèlent des expériences différentes du même programme. Convenez d'une vue d'équipe, consignez les preuves qui la sous-tendent et choisissez une ou deux prochaines étapes.

**5. Demandez des preuves.** Pour chaque niveau revendiqué, demandez un exemple. « Nous utilisons les chiffres dans les décisions » invite à la question « Quelles décisions au dernier trimestre ? ». Utilisez des mesures échantillonnées et des entretiens pour vérifier. Cela respecte les gens et empêche l'évaluation de dériver vers le vœu pieux.

**6. Gardez les résultats auprès de l'équipe.** Le profil d'une équipe appartient à l'équipe. Le programme partage des plages agrégées et des thèmes communs, et non un classement. Précisez que l'évaluation n'affecte ni le financement, ni la réputation, ni les évaluations. Si c'est le cas, les équipes la gonfleront et la valeur sera perdue (voir le sujet 11.3, Déployer les métriques sans semer la peur).

### Choisir les prochaines étapes

**7. Choisissez la dimension qui limite les autres.** La confiance et la sécurité limitent souvent tout le reste : sans elles, les données sont faussées et les décisions suspectes. Les définitions et la responsabilité limitent souvent les données et l'usage. Un schéma courant est de renforcer d'abord la confiance et les définitions, puis les données, puis l'usage et la revue. Cherchez la dimension où une petite amélioration débloquerait les autres.

**8. Fixez une petite étape concrète.** Une prochaine étape devrait être une étape qu'une équipe peut achever en un trimestre et reconnaître : « convenir d'une charte », « écrire les définitions de nos quatre mesures », « automatiser deux flux », « tenir une revue mensuelle où nous consignons les décisions ». Évitez des étapes comme « atteindre le niveau 4 ». Les niveaux décrivent un état, et les étapes décrivent du travail.

**9. Reliez les étapes au registre d'amélioration.** Mettez les actions au même endroit que les autres travaux d'amélioration, avec des responsables et des dates, et revoyez l'avancement à la conversation d'amélioration régulière (voir le sujet 9.5, Métriques d'amélioration continue). Une étape qui n'est ni financée ni planifiée n'aura pas lieu.

### La garder honnête et légère

**10. Calibrez entre équipes sans les classer.** Tenez une courte séance où les équipes partagent des exemples de ce qu'elles appellent le niveau 3 dans une dimension. Discutez des différences de critères. Le but est une compréhension partagée, non des scores égaux. Faites tourner l'animateur, et invitez une équipe extérieure au programme à contester la formulation.

**11. Réévaluez selon un rythme, et en réponse à des événements.** Deux fois par an suffisent pour la plupart des programmes. Réévaluez après une réorganisation, un changement d'outil ou une entorse à la charte, car ceux-ci peuvent déplacer la confiance dans un sens ou dans l'autre. Guettez la régression et traitez-la comme de l'information, non comme un échec.

**12. Retirez ou révisez le modèle lui-même.** Chaque année, demandez aux équipes si les dimensions et les descriptions de niveaux conviennent encore. Reformulez ce qui prête à confusion et retirez ce dont personne ne se sert. Un modèle qui n'a pas changé en cinq ans décrit peut-être un programme qui n'existe plus.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Participation à l'évaluation | Remplir les formulaires pour respecter un quota ; une seule personne qui remplit pour l'équipe | Exiger une discussion d'équipe ; demander les preuves de chaque affirmation |
| Profil par dimension | Gonfler les niveaux pour faire bonne figure ; se sous-évaluer pour recevoir de l'aide | Ne pas relier au financement ni à la réputation ; demander des preuves ; calibrer ouvertement |
| Actions d'amélioration issues des évaluations | Choisir des étapes triviales pour clore ; clore sans faire | Revoir la taille et la valeur des étapes ; vérifier les résultats à l'évaluation suivante |
| Preuve par la décision | Inventer des décisions après coup ; lister des décisions sans conséquence | Demander la date et les personnes concernées ; accepter « a choisi de ne rien faire » comme décision |
| Confiance dans les définitions et les données | Coacher les répondants ; un faible taux de réponse qui cache le mécontentement | Anonymat et taille minimale de groupe ; montrer les taux de réponse ; parler directement aux équipes |
| Délai avant le niveau suivant (descriptif) | Précipiter des affirmations de progrès ; cacher la régression | Rester descriptif ; lire avec les preuves ; consigner les régressions sans pénalité |
| Charge de l'évaluation | Sauter la discussion pour réduire les heures | Suivre les heures avec la participation et la qualité des preuves |

Une lecture saine montre un profil à niveaux variés, avec la confiance et les définitions qui montent avant l'outillage et le vernis, des prochaines étapes petites et achevées, des décisions que les équipes peuvent nommer et une trace honnête des régressions occasionnelles.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Auto-évaluation par l'équipe | Honnête, appropriée, rapide | Subjective ; calibration nécessaire |
| Évaluation externe | Cohérente ; indépendante | Coûteuse ; invite à jouer la comédie pour l'évaluateur |
| Score global unique | Facile à communiquer | Cache le schéma ; invite aux objectifs |
| Profil par dimension | Montre où agir | Plus difficile à résumer |
| Évaluation annuelle | Légère | Lente à remarquer la régression |
| Deux fois par an avec déclencheurs d'événements | Réactive | Plus d'effort |
| Liée au financement | Attire l'attention | Gonflement et détournement |
| Séparée du financement | Données honnêtes | Demande d'autres moyens d'obtenir du soutien |

La réponse en bref est de mener une auto-évaluation légère avec des preuves, de rapporter des profils et des plages, de garder les résultats auprès des équipes et de lier les prochaines étapes au registre d'amélioration, non au financement ni à la réputation.

## Questions à discuter avec votre équipe

**1. Laquelle des six dimensions dirions-nous la plus faible, et qu'est-ce qui nous le fait dire ?**
Demandez à chacun d'en choisir une en privé, puis de partager. L'animateur doit demander un exemple récent. Cherchez des schémas, et convenez de la dimension qui limite les autres.

**2. Pouvons-nous nommer une décision du dernier trimestre qu'une mesure a changée ?**
Listez-les. Si la liste est courte, demandez pourquoi. Discutez de la question de savoir si le problème vient des mesures, des données ou de l'habitude de regarder.

**3. Où nous placerions-nous sur la confiance et la sécurité, et comment le savons-nous ?**
Regardez les signalements de quasi-accidents, les contestations et les résultats de sondage. Comparez avec la manière dont les gens parlent en pratique. Convenez d'une chose que les dirigeants pourraient faire pour la faire monter.

**4. À quoi ressemblerait une petite étape concrète pour notre dimension la plus faible ?**
Rédigez-la en une phrase, avec un responsable et une date. Vérifiez qu'elle peut être achevée en un trimestre. Convenez de la manière dont nous saurons qu'elle a fonctionné.

**5. Qu'est-ce qui ferait que cette évaluation ressemble à une menace, et comment l'éviter ?**
Discutez des usages des résultats que les gens craindraient. Écrivez à quoi les résultats ne serviront jamais. Vérifiez que la responsable du programme est d'accord.

**6. Y a-t-il un niveau que nous n'avons pas besoin d'atteindre ?**
Pensez à notre taille, à nos risques et à nos objectifs. Décrivez un niveau suffisant pour l'instant et un signal qui nous dirait d'y revenir.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes s'évaluent elles-mêmes, choisissent la prochaine étape et gardent leurs résultats. Elles devraient se servir de la conversation pour faire ressortir les différences d'expérience, demander des preuves et fixer des étapes assez petites pour être achevées. Elles devraient repousser toute tentative de transformer le profil en classement.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent de lourdes charges de données et d'incidents et peuvent voir où le programme les soutient ou les alourdit. Elles devraient noter où l'outillage ou les définitions bloquent leur travail, demander que les données d'astreinte et d'incidents soient traitées avec soin et donner un retour franc sur la charge de l'évaluation.

### Direction et gouvernance

Les dirigeants parrainent le programme et reçoivent le tableau agrégé. Ils devraient demander des profils et des thèmes communs, résister à l'envie de demander un score unique, financer les prochaines étapes que les équipes choisissent et ne pas lier le financement ni la réputation à l'évaluation. Ils devraient aussi montrer l'exemple en décrivant des décisions que les métriques ont éclairées.

### Clients et utilisateurs

Les clients et les utilisateurs bénéficient de ce que le programme améliore les services et de ce que leur retour fait partie des mesures. Là où ils sont partenaires, ils peuvent participer à l'évaluation des mesures qui les concernent, par exemple l'utilité des sondages de satisfaction, et à l'examen de la manière dont leurs données sont utilisées.

## En pratique : un exemple de gestion des services

Un groupe national d'assurance compte 20 équipes de livraison et de soutien et un programme de métriques qui fonctionne depuis 18 mois. Le sponsor demande « un score de maturité pour chaque équipe » afin d'orienter l'investissement. Le responsable du programme est méfiant, se rappelant comment une notation de type audit avait conduit des équipes à préparer des classeurs de documents. Les chiffres ci-dessous sont illustratifs.

Le responsable du programme propose plutôt un profil sur six dimensions, évalué par les équipes dans une conversation d'une heure avec un animateur extérieur à l'équipe, les résultats étant gardés par l'équipe. Il dit au sponsor que le programme rapportera des plages et des thèmes communs, et qu'aucun profil d'équipe ne sera lié au financement. Le sponsor accepte, et la décision est consignée.

Dix-neuf équipes sur 20 terminent l'évaluation avec une discussion : la participation est donc de 95 %. Le profil montre une plage : pour les questions et le but, la plupart des équipes sont au niveau 2 ou 3 ; pour les définitions et la responsabilité, un étalement de 1 à 4 ; pour les données et l'outillage, surtout 3 ; pour l'usage dans les décisions, surtout 2 ; pour la confiance et la sécurité, un partage entre 2 et 4 ; et pour la revue et l'évolution, surtout 1 ou 2. Les vérifications de preuves sont révélatrices. Onze équipes revendiquaient le niveau 3 pour l'usage dans les décisions, mais quand on leur a demandé de nommer une décision du dernier trimestre qu'une mesure avait éclairée, seules six l'ont pu. Le responsable du programme le note sans jugement, et cela devient un thème : les équipes ont des tableaux de bord et tiennent rarement des revues qui consignent des décisions.

Les prochaines étapes sont petites. Huit équipes choisissent une revue mensuelle avec un journal de décisions. Quatre choisissent d'écrire les définitions de leurs mesures. Trois choisissent de convenir d'une charte. Six mois plus tard, 14 des 17 étapes convenues sont faites, une est abandonnée avec une raison et deux sont en cours. Une nouvelle évaluation montre la preuve par la décision passant de 38 % à 71 % des mesures échantillonnées, et le sondage de confiance passant de 54 % à 67 % d'accord. Une équipe recule sur la confiance après une réorganisation, et l'animateur le consigne comme de l'information, non comme un échec. Un an plus tard, le sponsor redemande un score unique pour le rapport annuel. Le responsable du programme offre un profil d'une page avec des plages, trois thèmes et les étapes d'amélioration achevées. Le sponsor accepte, et le rapport énonce clairement que l'échelle est un outil de conversation.

## Agilité, IA, automatisation et analytique

### Agilité

Servez-vous du modèle comme d'une conversation aux revues d'amélioration régulières, l'équipe choisissant elle-même sa prochaine petite étape. La précaution est qu'un score de maturité affiché sur un mur devient un objectif.

### IA

Ajoutez l'éclairage de l'IA à l'évaluation : si les usages de l'IA sont inventoriés, si les mesures assistées par l'IA ont des mesures de qualité associées, et si les gens peuvent contester les chiffres dérivés de l'IA. La précaution est qu'une auto-évaluation rédigée par l'IA peut paraître assurée et manquer des faits locaux : l'équipe doit donc rédiger la sienne.

### Automatisation

Automatisez le recueil des preuves de l'évaluation, comme la part des métriques avec des responsables et des garde-fous, mais faites-les interpréter par des personnes. La précaution est que des preuves recueillies automatiquement peuvent être incomplètes : dites donc ce qu'elles excluent.

### Analytique

Montrez le profil sur les dimensions, non un score unique, avec les preuves derrière chaque note. La décision éclairée est ce qu'il faut améliorer ensuite. La précaution est que les notes sont des jugements des personnes évaluées : évitez donc de comparer les équipes sur elles.

## Éclairage sectoriel

**Startup.** Une évaluation formelle est probablement excessive. Une courte conversation deux fois par an sur les six dimensions, avec une ou deux petites étapes, suffit. Guettez la crainte que les mesures servent au jugement, car les petites équipes la ressentent vivement.

**Petite entreprise.** Servez-vous des dimensions comme d'une liste de vérification pour une discussion avec le propriétaire et le personnel. Demandez si les quelques mesures que vous gardez répondent à de vraies questions, si les gens savent ce qu'elles signifient et si elles sont utilisées. Choisissez une étape. Ne passez pas plus d'une heure.

**Grande entreprise.** L'échelle demande un processus léger et cohérent : les mêmes dimensions, une auto-évaluation avec un animateur, des séances de calibration et des profils agrégés. Résistez à un bureau central de notation. Reliez les prochaines étapes aux registres d'amélioration, et rapportez des plages et des thèmes aux sponsors. Gardez-vous de laisser l'échelle devenir un exercice de conformité.

**Gouvernement et secteur public.** Les organes d'audit et de contrôle peuvent demander des scores de maturité. Soyez clair sur la différence entre cet outil de conversation interne et tout cadre formel. Gardez les résultats d'équipe auprès des équipes, fournissez des agrégats au contrôle et soyez transparent sur ce que l'échelle est et n'est pas (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont faibles : une heure ou deux par équipe deux fois par an, un animateur, un peu d'analyse et l'effort de mener les étapes d'amélioration. Les coûts plus élevés surviennent quand le modèle est mal utilisé, avec des consultants, des bureaux de notation et des classeurs de preuves.

Les rendements viennent d'un meilleur ciblage de l'effort. Au lieu de répartir l'investissement sur toutes les dimensions, le programme trouve la dimension limitante et la traite. D'autres rendements sont une reconnaissance plus précoce de la régression, un langage partagé entre équipes et des étapes d'amélioration que les équipes ont choisies et dont elles sont propriétaires. Construisez le dossier à partir de vos propres données : étapes d'amélioration achevées, évolution de la preuve par la décision et des résultats du sondage de confiance, et effort que l'évaluation a demandé. Évitez de citer des affirmations publiées sur les rendements de l'amélioration de la maturité sans source traçable et sans pertinence pour votre contexte (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **L'insigne de maturité.** Le niveau devient le but. Servez-vous-en comme d'une conversation, avec des preuves.
- **Un seul chiffre global.** Le schéma se perd et des objectifs apparaissent. Montrez le profil.
- **Une notation par des auditeurs.** Les équipes préparent des documents pour jouer la comédie. Utilisez l'auto-évaluation avec un animateur.
- **Lier le score au financement.** Le gonflement suit. Gardez l'évaluation séparée.
- **Courir après le niveau le plus haut.** Tous les programmes n'ont pas besoin d'Orchestrer. Choisissez ce qui convient.
- **Évaluer et oublier.** Aucune étape ne suit. Reliez les étapes au registre d'amélioration.
- **Une évaluation trop longue.** La charge croît et la qualité baisse. Tenez-la à une heure.
- **Ignorer la régression.** Les programmes reculent après un changement. Réévaluez selon un rythme et après des événements.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Questions et but | Mesures recueillies parce que les données existent | Certaines équipes énoncent les questions qu'elles posent | Publics et questions écrits ; mesures associées à ceux-ci | Couverture des questions revue ; les questions sans réponse pilotent de nouvelles mesures | Les publics, y compris clients et fournisseurs, façonnent les mesures ; les questions évoluent avec les services |
| Définitions et responsabilité | Définitions variables selon les personnes | Quelques-unes écrites ; responsables informels | Catalogue avec définition, source, responsable et limites pour chaque mesure | Complétude des définitions et contestations gérées | Définitions co-détenues entre équipes et fournisseurs ; révisées quand elles cessent d'éclairer les décisions |
| Données et outillage | Manuels et fragiles | Quelques flux automatisés | Pipelines testés, stockage partagé, données portables | Fiabilité, rapprochement et aptitude à la sortie gérés | Pipelines fédérés avec contrats partagés ; sources améliorées à partir du retour |
| Usage dans les décisions | Chiffres affichés, rarement utilisés | Utilisés dans certaines revues | Revues régulières qui consignent les décisions | Preuve par la décision suivie et suivie d'effet | Décisions reliées aux résultats entre équipes ; apprentissage partagé |
| Confiance et sécurité | Peur ou indifférence | Assurances verbales | Charte écrite ; vues individuelles désactivées ; sondage de sécurité | Entorses examinées au grand jour ; signaux de franchise gérés | Confiance routinière ; programme façonné par le personnel et les partenaires |
| Revue et évolution | Aucune | Nettoyage occasionnel | Revue périodique avec les équipes ; règle de retrait | Étapes issues des évaluations financées et achevées | Le programme s'améliore continuellement, avec des changements venant de tous |

## Liste de vérification

- [ ] Les six dimensions sont convenues, et les descriptions de niveaux adaptées à notre contexte.
- [ ] Chaque équipe s'évalue elle-même dans une discussion d'environ une heure, avec un animateur.
- [ ] Chaque niveau revendiqué est étayé par un exemple ou un contrôle par échantillon.
- [ ] Les résultats sont montrés comme des profils et des plages, jamais comme un score moyen unique ni un classement.
- [ ] Les résultats d'une équipe restent auprès de l'équipe, et l'agrégat est partagé avec les sponsors.
- [ ] L'évaluation n'est pas liée au financement, à la réputation ni aux évaluations de performance, et c'est écrit.
- [ ] Chaque équipe convient d'une ou deux petites prochaines étapes, avec un responsable et une date.
- [ ] Les prochaines étapes sont suivies dans le registre d'amélioration.
- [ ] La réévaluation a lieu au moins deux fois par an et après les événements majeurs.
- [ ] Le modèle lui-même est revu chaque année avec les équipes.

## Prompts d'IA

**Préparez une conversation d'auto-évaluation.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Transformez une dimension faible en étapes.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Vérifiez les preuves d'un niveau revendiqué.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Résumez les profils sans classer.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour associer les mesures du programme aux dimensions de maturité et à leurs garde-fous.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une évaluation de maturité rapporte des profils, garde les résultats auprès des équipes et évite un score unique.

## Idées clés

- Servez-vous de l'échelle commune à cinq niveaux comme d'un outil de conversation, jamais comme d'un insigne, d'un classement ou d'une certification.
- Rapportez un profil sur six dimensions et non un seul score moyen.
- Évaluez avec les équipes, demandez des preuves et gardez les résultats de chaque équipe auprès d'elle.
- Choisissez de petites prochaines étapes dans la dimension qui limite les autres, souvent la confiance et les définitions.
- Suivez les étapes dans le registre d'amélioration, et réévaluez régulièrement parce que les programmes régressent.
- Plus haut n'est pas toujours mieux, et les résultats comptent plus que les niveaux.

## Références et lectures complémentaires

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Processus d'amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric).
