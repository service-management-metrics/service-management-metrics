# Loi de Goodhart et psychologie des métriques

**Tout chiffre que vous récompensez, classez ou brandissez comme menace se mettra à modifier le travail qu'il devait décrire : chaque métrique de ce livre est donc utilisée comme une question que l'équipe discute et est appariée à un garde-fou qui repère son détournement.**

## Vue d'ensemble et motivation

La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est le plus ancien avertissement de la mesure. L'économiste Charles Goodhart a remarqué en 1975, en écrivant sur la politique monétaire britannique, qu'une régularité statistique tend à s'effondrer dès que les autorités exercent une pression sur elle à des fins de contrôle. La formulation populaire est venue plus tard. L'anthropologue Marilyn Strathern l'a énoncée en 1997 : « Lorsqu'une mesure devient un objectif, elle cesse d'être une bonne mesure. » Les deux phrases disent la même chose : dès qu'un chiffre sert à orienter les gens, les gens orientent le chiffre.

La même idée porte d'autres noms. La [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), du spécialiste des sciences sociales Donald Campbell, dit que plus un indicateur quantitatif sert à décider, plus il est exposé aux pressions de corruption et plus il déforme les processus qu'il devait surveiller. L'[effet cobra](https://en.wikipedia.org/wiki/Cobra_effect) est l'histoire d'une prime qui a produit davantage de ce qu'elle devait éliminer. Chacun est un exemple d'[incitation perverse](https://en.wikipedia.org/wiki/Perverse_incentive) : une récompense qui éloigne les comportements de ce que souhaitait celui qui récompense.

Les équipes qui construisent et exploitent des services informatiques sont singulièrement exposées. La livraison continue et la gestion des services informatiques (ITSM), telle que codifiée par [ITIL](https://en.wikipedia.org/wiki/ITIL), produisent toutes deux un flux régulier d'horodatages, de décomptes et de statuts. Un système de tickets enregistre quand un ticket a été ouvert, quand il a été affecté, quand l'horloge a été suspendue et quand il a été clos. Un outil de livraison enregistre quand le travail a commencé et s'est terminé. Ces chiffres sont peu coûteux à collecter, faciles à tracer et faciles à transformer en objectifs. Ils sont aussi faciles à déplacer sans aider personne.

Trois termes reviennent dans ce sujet et dans le reste du livre. Une **mesure** décrit quelque chose. Un **objectif** est un chiffre que quelqu'un est censé atteindre. Un **garde-fou** est une seconde mesure ou une pratique, choisie à l'avance, qui bougerait si la première mesure était détournée. Le passage de la mesure à l'objectif est l'endroit où les ennuis commencent, et le garde-fou est le moyen de s'en apercevoir.

Ce sujet pose la règle qui gouverne tous les autres. Chaque famille de métriques du livre arrive avec son vecteur de détournement (la manière dont elle est typiquement détournée) et son garde-fou. Si un sujet ultérieur semble faire l'impasse là-dessus, considérez-le comme inachevé.

### Pourquoi les gens détournent les chiffres

Le détournement n'est généralement pas de la malhonnêteté. C'est la réponse ordinaire de personnes compétentes aux incitations qui se présentent à elles. Quatre forces sont à l'œuvre.

- **La pression.** La prime, l'évaluation, le renouvellement de contrat ou la réputation de quelqu'un dépend du chiffre. Même sans lien formel, les gens déduisent ce qui importe à la direction de ce que la direction met en graphique.
- **La substitution.** La [substitution](https://en.wikipedia.org/wiki/Surrogation) (surrogation) est la tendance à traiter la mesure comme si elle était la chose qu'elle représente. Les chercheurs qui l'ont étudiée dans les organisations ont constaté qu'une rémunération incitative liée à une mesure la rend plus probable. Une équipe qui suit les « tickets clos » finit par croire que le but est de clore des tickets, pas de résoudre des problèmes.
- **La peur.** Quand un mauvais chiffre entraîne un blâme, les gens cachent les mauvaises nouvelles. Les incidents sont déclassés, les pannes sont rebaptisées « maintenance planifiée » et les défauts sont saisis comme des demandes d'évolution.
- **L'optimisation locale.** Une équipe améliore la partie du système sur laquelle elle est jugée et rejette le coût sur une partie qui ne l'est pas. Le centre de services clôt vite et le deuxième niveau hérite des répétitions.

Comprendre ces forces importe parce que le remède n'est pas une surveillance plus stricte. C'est de modifier les conditions qui rendent le détournement rationnel.

## Principes clés

- **Mesurez pour apprendre, pas pour juger.** Montrez d'abord les chiffres à l'équipe qui fait le travail et servez-vous-en pour poser des questions.
- **Appariez chaque métrique avec un garde-fou.** La vitesse avec la qualité, le volume avec le résultat, le coût avec l'expérience.
- **Décrivez des équipes et des systèmes, ne classez jamais des personnes.** Les classements individuels sont le moyen le plus rapide de corrompre une source de données.
- **Préférez les résultats et les tendances aux objectifs.** Une direction et une conversation valent mieux qu'un seuil.
- **Écrivez la définition, horloges comprises.** Les définitions ambiguës sont l'endroit où le détournement se cache.
- **Attendez-vous au changement.** Retirez ou repensez une métrique quand elle cesse d'éclairer des décisions.
- **Rendez les mauvaises nouvelles sûres.** Si le reporting honnête est puni, les données mentiront.

## Définitions des métriques

Les métriques ci-dessous ne sont pas des mesures de service ou de livraison. Ce sont des mesures de la santé d'une pratique de métriques elle-même, et elles montrent la forme que prend chaque tableau de métriques de ce livre. Les trois premières sont des exemples de garde-fous qui apparaissent dans tous les sujets suivants.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture par garde-fous | Part des métriques rapportées qui ont un garde-fou nommé et suivi | métriques avec un garde-fou / métriques rapportées | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Rétrospective des accords de travail | Trimestrielle |
| Taux de réouverture | Part des tickets ou éléments de travail clos qui sont rouverts dans une fenêtre déclarée | éléments rouverts dans les 14 jours / éléments clos dans la période | pourcentage | Historique des statuts de l'outil ITSM ou du gestionnaire d'anomalies | Gestion des incidents ; gestion des problèmes | Définition de terminé ; défauts échappés | Mensuelle |
| Nombre de changements de définition | Nombre de modifications des définitions de métriques ou des flux de statuts dans une période, avec leurs motifs | nombre d'entrées du journal des changements de définition | nombre | Journal des changements du registre des métriques | Mesure et reporting | Accords de travail | Trimestrielle |
| Taux d'usage des métriques | Part des métriques rapportées citées dans une décision pendant la période | métriques citées dans une décision consignée / métriques rapportées | pourcentage | Journal des décisions ou notes de revue | Amélioration continue | Actions de rétrospective | Trimestrielle |
| Écart de perception | Différence entre le résultat d'une enquête de satisfaction et un niveau de service issu des tickets pour le même service | taux issu de l'enquête moins taux issu du gestionnaire | points de pourcentage | Outil d'enquête et outil ITSM | Gestion des niveaux de service | Retour de la revue avec les parties prenantes | Trimestrielle |

Le taux de réouverture ne compte que les éléments rouverts dans le même enregistrement. Un élément clos puis soulevé de nouveau comme un nouveau ticket n'apparaît pas. Une partie de l'enjeu de la section suivante est que le garde-fou a besoin de son propre garde-fou, par exemple le rattachement des tickets en double à leurs originaux.

## Recommandations

### Concevoir le système de mesure

**1. Partez d'une question, pas d'un chiffre.** Avant d'ajouter une métrique, écrivez la question à laquelle elle répond et la décision qu'elle éclaire. « Les utilisateurs voient-ils leurs problèmes résolus du premier coup ? » est une question. « Réduire le temps moyen de traitement » est un objectif déguisé en question. Une métrique sans décision attachée est candidate au retrait.

**2. Choisissez des métriques en tension.** Un chiffre unique invite à la suroptimisation : choisissez donc des paires qui se tirent en sens contraire : délai de livraison avec taux d'échec des changements, vitesse de clôture des tickets avec taux de réouverture, disponibilité avec expérience rapportée par les utilisateurs. La paire n'a pas besoin d'être une formule. Elle doit être montrée ensemble, sur la même page.

**3. Définissez les horloges et les exclusions.** Pour chaque mesure de temps, écrivez où l'horloge démarre, où elle s'arrête et quand elle peut se suspendre. La plupart des détournements dans les données de service se trouvent dans ces bornes : un ticket mis en « attente du client » arrête l'horloge du niveau de service, et un changement enregistré seulement après son application échappe au délai de livraison des changements. S'il existe un état de suspension, rapportez la fréquence de son usage.

**4. Utilisez des distributions et des percentiles.** Une moyenne des temps de résolution des tickets peut s'améliorer parce que quelques tickets faciles ont été clos vite pendant que les difficiles vieillissent. Montrez la médiane et un percentile élevé (par exemple le 85e ou le 95e), et montrez les plus anciens éléments ouverts. L'âge des éléments de travail et le plus ancien ticket ouvert sont difficiles à détourner sans réellement terminer le travail (voir le sujet 2.1, Mesures de flux).

**5. Tenez un registre des métriques.** Un registre court énumère chaque métrique, son responsable, sa définition, sa source de données, son vecteur de détournement, son garde-fou et la date de sa dernière revue. C'est ennuyeux, et c'est l'habitude la plus efficace de ce sujet (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Introduire les métriques en sécurité

**6. Montrez d'abord à l'équipe, et montrez les données brutes.** Les équipes qui voient les chiffres avant la direction sont plus disposées à en contester l'exactitude. Commencez par les éléments sous-jacents, pas par le graphique. Si les données ne résistent pas à une conversation avec les personnes qui les ont générées, elles ne résisteront pas à un tableau de bord.

**7. Séparez les vues d'apprentissage des vues de redevabilité.** La vue de travail d'une équipe peut contenir de nombreuses mesures, y compris laides. Ce qui monte vers la direction doit être un petit ensemble stable. Si la direction réclame la vue de travail, attendez-vous à ce que la vue de travail change pour paraître meilleure.

**8. Ne liez ni la rémunération individuelle, ni la discipline, ni un classement à une métrique.** On peut demander aux équipes d'expliquer leurs chiffres et de les améliorer. Des objectifs individuels sur les nombres de tickets, les points de récit ou les validations de code apprennent aux gens à maximiser le décompte. L'approche par [indicateur clé de performance](https://en.wikipedia.org/wiki/Key_performance_indicator) peut fonctionner quand les indicateurs sont choisis pour l'ensemble du système et revus régulièrement. Elle échoue quand elle devient une fiche de score par personne.

**9. Rendez le reporting honnête sûr.** La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety) est la conviction qu'on ne sera pas puni pour avoir signalé une erreur ou une inquiétude. Une revue sans blâme d'un incident en est un exemple en pratique. Sans elle, les nombres d'incidents baissent pour la mauvaise raison : les gens cessent de signaler.

### Garder le système honnête

**10. Menez une revue du détournement.** Une fois par trimestre, posez à l'équipe une question sur chaque métrique rapportée : « Si nous voulions que ce chiffre paraisse bon sans aider personne, que ferions-nous ? » Écrivez les réponses, puis vérifiez si le garde-fou attraperait chacune d'elles. L'exercice est peu coûteux, produit des idées utiles et fait passer la conversation de la suspicion à la conception.

**11. Auditez les définitions face à la réalité.** Échantillonnez un petit nombre d'éléments clos et lisez-les. Ont-ils vraiment été résolus ? La priorité était-elle honnête ? L'état « attente du client » signifiait-il que l'on attendait vraiment le client ? Un échantillon de quinze minutes en dit souvent plus qu'un mois de tableaux de bord.

**12. Retirez des métriques.** Une métrique qui n'a pas été citée dans une décision depuis deux trimestres est une surcharge. Retirez-la, et dites-le. Moins de métriques, chacune digne de confiance, valent mieux que beaucoup.

## Vecteurs de détournement et garde-fous

Le tableau couvre les métriques de la section ci-dessus. Les sujets suivants appliquent la même forme aux mesures de service et de livraison.

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture par garde-fous | Nommer un garde-fou sur le papier sans jamais le suivre | Revoir le registre : un garde-fou ne compte que si sa dernière valeur figure sur le même tableau de bord |
| Taux de réouverture | Clore le ticket et en ouvrir un nouveau plutôt que de rouvrir ; allonger la fenêtre jusqu'à ce que les réouvertures en sortent | Taux de tickets en double ou liés ; récurrence de la même cause entre tickets |
| Nombre de changements de définition | Ne pas consigner les changements pour que le nombre reste bas ; modifier un flux de travail sans le dire à personne | Comparer le modèle de statuts de l'outil avec le registre à chaque revue |
| Taux d'usage des métriques | Citer chaque métrique dans un journal de décisions par simple formalité | Demander ce qui a changé grâce à la citation ; échantillonner le journal |
| Écart de perception | N'interroger que des utilisateurs satisfaits ; orienter les enquêtes vers des moments suivant une bonne interaction | Taux de réponse à l'enquête et composition des répondants ; commentaires libres lus à voix haute en revue |

Une lecture saine est celle d'une pratique de métriques qui change : les définitions sont ajustées pour des raisons écrites, les métriques vont et viennent, et l'équipe peut raconter une décision qu'un chiffre a modifiée.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesurer sans objectifs | Réduit le détournement ; invite à une discussion honnête | Peut dériver vers des rapports sur lesquels personne n'agit |
| Objectifs avec garde-fous | Donne direction et urgence ; la paire limite le détournement | Plus de travail à entretenir ; le garde-fou est aussi détourné avec le temps |
| Métriques individuelles | Faciles à comprendre ; semblent équitables | Corrompent les données ; nuisent à la collaboration |
| Métriques d'équipe et de service | Correspondent à la façon dont le travail se fait réellement | Plus difficiles à attribuer ; masquent les besoins d'appui individuels |
| Peu de métriques | Plus faciles à croire et à retenir | Angles morts ; peuvent manquer un nouveau problème |
| Beaucoup de métriques | Large couverture | Dilue l'attention ; chaque métrique est faiblement gouvernée |

La réponse en prose est d'utiliser les objectifs avec parcimonie, pour des conditions bien comprises et difficiles à détourner, comme un objectif de niveau de service que les utilisateurs ont réclamé. Même alors, préférez lier l'objectif au service, pas à l'évaluation d'une personne. Le but n'est pas de retirer les chiffres de la prise de décision. C'est de maintenir les chiffres reliés à la réalité en gardant de votre côté les gens qui les produisent.

## Questions à discuter avec votre équipe

**1. Quel chiffre de notre tableau de bord actuel serions-nous le plus tentés d'améliorer sans améliorer le travail ?**
Commencez par la métrique que les gens regardent en premier, puis passez à celle dont la direction s'enquiert. Demandez des manœuvres précises : que ferions-nous aux données si nous étions sous pression ? L'animateur doit consigner chaque réponse sans la juger, car la liste devient les vecteurs de détournement du registre. Terminez en demandant lesquelles de ces manœuvres nos garde-fous attraperaient, et lesquelles ils manqueraient.

**2. Où une horloge démarre-t-elle et s'arrête-t-elle dans notre mesure de temps la plus importante, et qui l'a décidé ?**
Demandez au groupe de dessiner le cycle de vie du ticket ou de l'élément de travail sur un tableau blanc et de marquer chaque état. Cherchez les états où le temps peut disparaître, comme l'attente du client ou la mise en pause. Comptez la fréquence d'usage de chaque état et par qui. La conversation révèle souvent que deux équipes emploient le même mot différemment.

**3. Quand un chiffre nous a-t-il, la dernière fois, fait faire quelque chose d'inutile ?**
Invitez à raconter des histoires, pas à blâmer. Les exemples courants sont de clore des tickets avant de vérifier, de scinder des changements pour gonfler les décomptes de déploiements ou de reclasser un incident pour éviter un rapport de dépassement. L'animateur doit demander ce que la personne cherchait à protéger. La réponse montre généralement l'incitation à modifier.

**4. Qui voit nos métriques, et qu'en advient-il là-bas ?**
Retracez chaque métrique de l'équipe jusqu'à son public. Demandez si une version quelconque sert à comparer des équipes ou des personnes. Demandez ce que l'équipe montrerait si le public était différent. Là où l'équipe changerait les chiffres qu'elle montre, il y a un déficit de confiance dont parler avec le public.

**5. Quel est le garde-fou de chacune de nos cinq métriques les plus importantes, et est-il sur la même page ?**
Faites une liste à deux colonnes sur un tableau. Si une métrique n'a pas de garde-fou, convenez d'un candidat et d'un responsable pour l'essayer pendant un trimestre. Si un garde-fou existe mais est rarement consulté, discutez des raisons. Évitez de choisir un garde-fou qui n'est que l'inverse de la métrique, car cela n'apprend rien de nouveau.

**6. Quelle métrique devrions-nous retirer ce trimestre ?**
Demandez des preuves : quand a-t-elle été utilisée pour la dernière fois dans une décision ? Si personne ne s'en souvient, retirez-la à titre d'essai et voyez si quelqu'un le remarque. L'animateur doit traiter le retrait comme un événement normal. Les équipes qui n'abandonnent jamais de métriques finissent avec des rapports que personne ne croit ni ne lit.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison rencontrent le détournement à travers la vélocité, le débit et les décomptes de déploiements. La [vélocité](https://en.wikipedia.org/wiki/Velocity_(software_development)) en particulier est un outil de planification pour une équipe, pas une mesure de productivité, et comparer les équipes par elle conduit à des estimations gonflées. Les équipes de livraison doivent garder leurs mesures de travail pour elles-mêmes, en publier un petit ensemble vers l'extérieur et apparier chaque mesure de vitesse avec une mesure de qualité (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes de service rencontrent le détournement à travers le temps de résolution, la résolution au premier contact et le respect des niveaux de service. Les états qui suspendent l'horloge et les champs de priorité sont les points de dérive habituels. Les équipes d'exploitation doivent auditer régulièrement les transitions de statut, rapporter l'usage des états de suspension et surveiller les contacts répétés et le taux de réouverture à côté de la vitesse. Les équipes d'astreinte doivent être particulièrement prudentes avec les mesures qui récompensent le fait de ne pas être appelé, car elles punissent l'alerte honnête (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants fixent les incitations, souvent sans le vouloir. Une question posée en revue (« pourquoi est-ce rouge ? ») apprend à l'équipe ce qu'il faut cacher. Les dirigeants doivent demander ce que l'équipe a appris d'un chiffre, tenir les classements hors de la salle, protéger le reporting franc et financer le travail d'amélioration qu'un mauvais chiffre révèle. Les instances de gouvernance doivent attendre le registre des métriques et la revue du détournement comme parties du reporting, et traiter un changement défini d'une métrique comme normal.

### Clients et utilisateurs

Les utilisateurs éprouvent l'effet du détournement sous la forme d'un service qui paraît bon sur le papier et qui est médiocre en pratique : un ticket clos qui n'était pas corrigé, une panne étiquetée planifiée, une enquête qui ne les a jamais atteints. Les utilisateurs sont aussi le meilleur garde-fou. Leur retour, sous forme d'enquêtes, de réclamations et de commentaires, doit se tenir à côté des chiffres opérationnels, et être lu en entier, pas réduit à un score (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un centre de services et plusieurs équipes produit qui construisent des applications cliniques. Les chiffres de cet exemple sont illustratifs.

La direction fixe un objectif de clore 90 % des incidents dans le délai convenu. En deux mois le tableau de bord affiche 94 %. Le responsable de l'exploitation des services est content mais mal à l'aise, parce que le personnel clinique se plaint davantage, pas moins. Il demande à l'équipe de mener une revue du détournement sur la métrique.

L'équipe esquisse le cycle de vie du ticket. Elle constate que les tickets passent en « attente du client » en moyenne deux fois chacun, et que le temps passé dans cet état a augmenté. Un échantillon de 30 tickets clos montre que 7 ont été clos avec la note « pas de réponse de l'utilisateur » après une seule tentative d'appel. Elle constate aussi que le taux de réouverture n'est stable que parce qu'on disait aux utilisateurs d'« ouvrir un nouveau ticket » quand le problème revenait.

L'équipe fait trois changements. Premièrement, le graphique de temps de résolution montre maintenant la médiane, le 90e percentile et le plus ancien ticket ouvert, ainsi que la part du temps passé dans les états de suspension. Deuxièmement, le tableau de bord ajoute un taux de contacts répétés, défini comme la part des nouveaux tickets du même utilisateur sur le même service dans les 14 jours. Troisièmement, une courte enquête est envoyée à un échantillon aléatoire de tickets clos, et ses commentaires libres sont lus à la revue mensuelle.

Trois mois plus tard, le chiffre de conformité principal tombe à 88 %, ce qui ressemble à une mauvaise nouvelle. Le taux de contacts répétés a pourtant baissé, et les commentaires d'enquête sur des problèmes non résolus sont devenus plus rares. Le responsable de l'exploitation dit à la direction que l'ancien chiffre était gonflé et que le nouveau tableau est plus honnête, et il lui demande d'accepter un objectif de niveau de service fondé sur la définition corrigée. La décision, consignée dans le journal des décisions, est de fixer l'objectif après un trimestre de données supplémentaire plutôt qu'immédiatement.

## Agilité, IA, automatisation et analytique

### Agilité

Les boucles de rétroaction courtes permettent à une équipe de repérer tôt le détournement. Une pratique qui convient bien est de lire quelques éléments bruts à chaque revue régulière et de les comparer avec le chiffre principal, avec les parties prenantes dans la salle. La précaution est qu'une boucle qui récompense la rapidité du reporting peut elle-même devenir un objectif : gardez donc la finalité de chaque revue tournée vers l'apprentissage.

### IA

L'IA change l'allure du détournement. Un modèle peut produire en volume des notes de résolution, des mises à jour de statut ou des catégories de tickets plausibles : une métrique qui compte ces artefacts peut donc être satisfaite sans aucun travail réel. Appariez tout décompte influencé par l'IA avec un contrôle humain échantillonné de la qualité, et rapportez la part de la production de l'IA qu'une personne a modifiée. La précaution est qu'un faible taux de correction peut signifier de bons brouillons ou une relecture négligente : lisez donc les deux ensemble.

### Automatisation

La collecte automatisée supprime les modifications manuelles des données, ce qui ferme certaines voies de détournement. Automatisez le garde-fou autant que la métrique, pour que les deux figurent sur la même page. La précaution est que les gens détournent alors les entrées que lit l'automatisation, comme la catégorie du ticket ou l'état de suspension : auditez donc les définitions sur un échantillon d'éléments réels.

### Analytique

L'analyse peut révéler le détournement par des distributions étranges, comme un pic de tickets clos juste avant une échéance de reporting, ou un groupe exactement à la valeur de l'objectif. Utilisez ces schémas pour déclencher une conversation, pas comme preuve d'une mauvaise intention. La précaution est que toute règle de détection finit par être connue puis contournée : faites donc tourner les garde-fous et gardez un humain dans la revue.

## Éclairage sectoriel

**Startup.** Les petites équipes ont peu de métriques et beaucoup de confiance, ce qui aide. Le danger est d'importer trop tôt un grand tableau de bord d'entreprise. Commencez avec deux ou trois mesures que les fondateurs utilisent vraiment, écrivez leurs définitions et tenez-les à l'écart des conversations sur la performance individuelle.

**Petite entreprise.** Les ressources sont minces, et la personne qui s'occupe de l'informatique rend souvent compte directement au propriétaire. Une seule plainte de client peut peser plus que n'importe quel tableau de bord. Gardez l'ensemble petit, privilégiez le retour direct des utilisateurs et traitez avec une certaine prudence les rapports fournis par les éditeurs, puisque l'éditeur a ses propres incitations.

**Grande entreprise.** L'échelle multiplie à la fois la demande de chiffres comparables et la pression pour les détourner. Utilisez un petit ensemble standard avec des définitions écrites, séparez les vues de travail des équipes des agrégats et évitez de comparer des équipes qui travaillent sur des services de natures différentes. Un registre des métriques et une cadence de revue deviennent essentiels.

**Gouvernement et secteur public.** Les obligations de reporting et les niveaux de service contractuels peuvent rendre certains objectifs non négociables. Traitez-les comme des données d'entrée de conception : respectez-les, montrez le garde-fou à côté et rapportez les définitions employées. La responsabilité publique augmente le coût de cacher les mauvaises nouvelles : construisez donc des canaux internes sûrs et soyez ouvert sur les définitions corrigées (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût d'application de ce sujet est surtout du temps : quelques heures pour écrire des définitions et un registre, une courte revue trimestrielle du détournement et un échantillonnage occasionnel d'éléments clos. Le coût d'outillage est faible. Le coût le plus élevé est l'attention de la direction, car la discipline ne fonctionne que si les personnes qui lisent les chiffres se comportent de manière cohérente.

Le rendement vient du gaspillage évité et de meilleures décisions. Des décisions prises sur des données corrompues peuvent orienter l'investissement vers le mauvais problème, par exemple en renforçant le centre de services pour clore les tickets plus vite alors que le vrai problème est celui des contacts répétés dus à un défaut. Le détournement érode aussi la confiance entre l'équipe et ceux qui s'appuient sur elle, ce qui est difficile à réparer. Décrivez le bénéfice sous forme de schéma, pas avec un pourcentage inventé : moins de décisions inversées, moins de surprises lors des audits et un meilleur accord entre les chiffres opérationnels et l'expérience des utilisateurs. Si vous avez besoin de chiffres pour un dossier d'affaires, mesurez vos propres références, comme l'écart de perception et le taux de contacts répétés, avant et après le changement.

## Anti-modèles et pièges

- **Des objectifs sans garde-fous.** Un objectif isolé est atteint par n'importe quelle voie disponible. Ajoutez une mesure appariée avant d'annoncer l'objectif.
- **Des classements de personnes ou d'équipes.** Ils invitent au détournement et découragent l'entraide entre équipes. Montrez à chaque équipe sa propre tendance, avec le contexte.
- **Des métriques comme punition.** Un chiffre rouge qui entraîne un blâme virera au vert par dissimulation. Demandez plutôt ce dont l'équipe a besoin.
- **Des moyennes de données asymétriques.** Elles cachent la queue où les utilisateurs souffrent. Utilisez des percentiles et l'âge du plus ancien élément.
- **Changer les définitions en silence.** Les courbes de tendance deviennent dénuées de sens. Consignez chaque changement avec son motif et marquez-le sur le graphique.
- **Traiter le garde-fou comme le nouvel objectif.** Le garde-fou est alors détourné. Revoyez les deux ensemble et faites tourner les garde-fous quand ils perdent leur force.
- **Les métriques de façade.** Des décomptes qui ne font que monter, comme les tickets traités ou les validations faites, ne disent rien des résultats. Préférez des mesures qui peuvent baisser comme monter.
- **Ignorer les éléments qualitatifs.** Les chiffres seuls ne peuvent montrer qu'un ticket clos a été vécu comme non résolu. Lisez les commentaires.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Informelles ; chacun compte différemment | Écrites pour certaines métriques | Une définition écrite par métrique, avec horloges et exclusions | Définitions revues et changements consignés avec leurs motifs | Définitions alignées entre équipes et fournisseurs, révisées quand elles cessent d'éclairer des décisions |
| Garde-fous | Aucun | Nommés pour certaines métriques | Chaque métrique rapportée a un garde-fou sur la même page | Garde-fous revus chaque trimestre pour détecter le détournement | Garde-fous tournants et coconçus avec les personnes mesurées |
| Usage et sécurité | Chiffres utilisés pour attribuer des blâmes | L'équipe voit ses propres chiffres | L'équipe voit les données d'abord ; aucun classement individuel | La direction pose des questions d'apprentissage ; le reporting est sûr | Clients et fournisseurs partagent une vue franche des chiffres |

## Liste de vérification

- [ ] Chaque métrique rapportée a une question écrite et une décision qu'elle éclaire.
- [ ] Chaque mesure de temps a une règle écrite de démarrage, d'arrêt et de suspension.
- [ ] Chaque métrique rapportée a un garde-fou nommé affiché à côté.
- [ ] Les mesures de temps montrent des percentiles et l'âge du plus ancien élément ouvert.
- [ ] Un registre des métriques existe avec responsable, définition, vecteur de détournement, garde-fou et date de revue.
- [ ] L'équipe voit ses données avant la direction.
- [ ] Aucun classement individuel, aucune rémunération ni aucune sanction n'est lié à une métrique.
- [ ] Une revue trimestrielle du détournement figure au calendrier.
- [ ] Un échantillon d'éléments clos est lu chaque trimestre pour en vérifier l'honnêteté.
- [ ] Au moins une métrique a été retirée ou repensée au cours de l'année écoulée.

## Prompts d'IA

**Menez une revue du détournement sur une métrique.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Rédigez une entrée de registre de métrique.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Auditez un échantillon de tickets clos.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Planifiez l'introduction sûre d'une métrique.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et le garde-fou apparié d'une métrique que vous êtes sur le point d'introduire.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un nouveau sujet de métrique porte son vecteur de détournement et son garde-fou.

## Idées clés

- Une mesure qui devient un objectif cesse de décrire le travail : utilisez donc les chiffres pour poser des questions.
- Le détournement est une réponse normale à la pression et à la peur, et il se réduit en changeant les conditions, pas en surveillant.
- Chaque métrique a besoin d'une définition écrite avec ses horloges et d'un garde-fou affiché à côté.
- Préférez les percentiles et l'âge du plus ancien élément aux moyennes.
- Décrivez des équipes et des services, ne classez jamais des personnes, et laissez l'équipe voir d'abord ses données.
- Menez une revue du détournement chaque trimestre et retirez les métriques qui n'éclairent plus de décisions.

## Références et lectures complémentaires

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
