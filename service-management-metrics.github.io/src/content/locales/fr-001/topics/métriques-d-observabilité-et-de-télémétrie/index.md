# Métriques d'observabilité et de télémétrie

**L'observabilité est la capacité de poser de nouvelles questions à un service en fonctionnement et d'obtenir des réponses de ses propres signaux : mesurez donc la part du service que vous pouvez voir, la qualité des signaux, la rapidité avec laquelle ils mènent à la compréhension et ce que coûte la télémétrie, plutôt que de compter des tableaux de bord ou du volume de données.**

## Vue d'ensemble et motivation

L'[observabilité](https://en.wikipedia.org/wiki/Observability_(software)) est une propriété d'un système : dans quelle mesure son état interne peut être compris à partir des sorties qu'il produit. En pratique, ces sorties s'appellent la [télémétrie](https://en.wikipedia.org/wiki/Telemetry), et sont généralement regroupées en trois sortes. Les **journaux** sont des enregistrements d'événements discrets. Les **métriques** sont des mesures numériques dans le temps, comme le débit de requêtes ou le taux d'erreurs. Les **traces** suivent une seule requête à travers les parties d'un système distribué. De nombreuses équipes ajoutent des profils, des événements du poste de l'utilisateur et des événements métier.

La supervision pose des questions connues, comme « le taux d'erreurs dépasse-t-il un seuil ? », et alerte quand la réponse est oui. L'observabilité vise à laisser une équipe poser des questions qu'elle n'avait pas prévues, comme « pourquoi les requêtes de cette région sont-elles lentes pour ce segment de clients ? ». Les deux sont nécessaires. La supervision est couverte dans des sujets antérieurs (voir le sujet 5.5, Métriques de supervision et de qualité des alertes). Ce sujet couvre la qualité des signaux eux-mêmes et la pratique qui consiste à comprendre les systèmes à partir d'eux.

La télémétrie a des coûts et des risques. Tout recueillir coûte cher en stockage et en argent, et peut capter des données personnelles ou confidentielles. En recueillir trop peu laisse une équipe aveugle pendant un incident. La télémétrie est aussi une donnée au sens du sujet précédent (voir le sujet 10.8, Métriques d'analytique et de qualité des données) : elle pose donc des questions de complétude, d'actualité et de filiation. Et comme les outils d'IA lisent la télémétrie pour résumer les incidents et suggérer des causes, la qualité des signaux décide de la justesse du résumé.

Termes employés ici. Un **signal** est un flux de télémétrie, comme un journal, une métrique ou une trace. L'**instrumentation** est le code qui produit des signaux. La **cardinalité** est le nombre de valeurs distinctes d'une étiquette sur une métrique, et une forte cardinalité augmente le coût. Un **indicateur de niveau de service (SLI)** mesure un aspect du service tel que les utilisateurs le vivent (voir le sujet 5.2, SLI, SLO et budgets d'erreur). L'**échantillonnage** ne garde qu'une part des données, ce qui économise du coût et perd du détail. La **conservation** est la durée pendant laquelle les données sont gardées. La **corrélation** signifie relier des signaux qui décrivent la même requête ou le même événement, par des identifiants communs.

## Principes clés

- **Instrumentez pour des questions, non pour du volume.** Choisissez des signaux qui répondent à des questions sur l'expérience des utilisateurs et le comportement du système.
- **Mesurez ce que vous pouvez voir, et ce que vous ne pouvez pas.** La couverture des services et des parcours montre les angles morts.
- **Les signaux doivent être reliés.** Des identifiants qui relient un journal, une trace et une métrique rendent la compréhension rapide.
- **La télémétrie est un coût et un risque.** Budgétez-la, et gardez-en les données personnelles et confidentielles à l'écart sauf raison et règle.
- **L'observabilité sert les gens.** Mesurez le délai de compréhension et l'expérience des personnes d'astreinte.
- **Les normes ouvertes réduisent l'enfermement.** Préférez des formats communs d'instrumentation là où ils conviennent, et vérifiez les spécifications actuelles.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de l'instrumentation | Part des services et des parcours utilisateurs critiques qui émettent les signaux de base convenus | services ou parcours dont les journaux, métriques et traces respectent la norme convenue / services ou parcours du catalogue de services | pourcentage | Catalogue de services et inventaire de la plateforme de télémétrie | Supervision et gestion des événements ; gestion de la configuration des services | Définition de terminé pour les nouveaux services | Trimestrielle |
| Complétude des traces | Part des requêtes échantillonnées dont la trace est ininterrompue de l'entrée à la dernière dépendance | requêtes dont la trace couvre tous les sauts attendus / requêtes d'un échantillon contrôlé | pourcentage | Plateforme de traçage et contrôle par échantillon | Supervision et gestion des événements | Test de l'observabilité dans une fonctionnalité | Mensuelle |
| Taux de corrélation des signaux | Part des incidents où les journaux, métriques et traces ont pu être joints par un identifiant | incidents avec une jonction fonctionnelle dans la revue de chronologie / incidents revus | pourcentage | Revues d'incidents et plateforme de traçage | Gestion des incidents ; gestion des problèmes | Actions de rétrospective | Trimestrielle |
| Délai de compréhension | Temps entre la détection et une explication fonctionnelle consignée de la cause | médiane et 85e percentile de (heure où la première cause fonctionnelle est consignée moins heure où l'incident a été détecté) pour les incidents avec une cause consignée | minutes | Chronologie de l'incident et notes de revue | Gestion des incidents | Revue sans blâme | Trimestrielle |
| Coût de télémétrie par service | Dépense de télémétrie attribuée à un service, par unité d'usage du service | coût de télémétrie affecté au service / une unité d'usage énoncée, comme 1 000 requêtes | monnaie par unité | Facturation et données d'usage de la télémétrie | Gestion financière | Le coût comme intrant de conception | Mensuelle |
| Données sensibles dans la télémétrie | Nombre d'enregistrements confirmés contenant des données qui ne devraient pas y être | cas confirmés trouvés par analyse ou revue dans la période | décompte | Analyses et revues de la télémétrie | Gestion de la sécurité de l'information | Définition de terminé ; revue de vie privée | Mensuelle |
| Incidents dans les angles morts | Incidents d'abord signalés par les utilisateurs où la télémétrie ne montrait aucun signe | incidents d'abord signalés par les utilisateurs sans alerte ni signal lié / incidents de la période | pourcentage | Enregistrements d'incidents et notes de revue | Gestion des incidents ; supervision | Actions de rétrospective | Trimestrielle |

La couverture de l'instrumentation dépend d'une norme de base convenue, comme le débit de requêtes, le taux d'erreurs, la latence et un identifiant de trace, énoncée dans le registre des métriques. Le délai de compréhension ne compte que les incidents où une cause a été consignée : les incidents sans cause connue sont donc rapportés à part.

## Recommandations

### Décider de ce que l'on veut voir

**1. Partez des parcours utilisateurs et des niveaux de service.** Listez les parcours qui comptent et les indicateurs qui montrent si les utilisateurs réussissent. Instrumentez-les d'abord, car ils relient la télémétrie aux résultats (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

**2. Convenez d'une norme de base.** Définissez les signaux minimaux que chaque service émet, ainsi que les conventions de nommage et d'identifiant. Mettez la norme dans la définition de terminé des nouveaux services.

**3. Cartographiez honnêtement la couverture.** Comparez le catalogue de services avec les services qui émettent les signaux de base. Listez les lacunes et leurs responsables, et traitez d'abord celles dont l'impact sur les utilisateurs est le plus élevé.

### Rendre les signaux utiles

**4. Reliez les signaux par des identifiants communs.** Faites passer un identifiant de requête ou de trace à travers les journaux, les métriques et les traces pour qu'une personne puisse aller d'une requête lente aux lignes de journal exactes. Testez cela lors d'un exercice.

**5. Testez l'instrumentation comme du code.** Une trace qui se brise à une file de messages, ou un journal avec le mauvais fuseau horaire, fait perdre un incident. Vérifiez la complétude avec des requêtes échantillonnées, et corrigez les ruptures.

**6. Maîtrisez délibérément la cardinalité et l'échantillonnage.** Les étiquettes à forte cardinalité peuvent créer de grands coûts, et l'échantillonnage peut écarter l'événement rare dont vous avez besoin. Décidez où échantillonner, consignez le taux et gardez les données complètes pour les erreurs et les requêtes lentes quand c'est abordable.

**7. Gardez les données sensibles à l'écart.** Décidez de ce qui ne doit pas apparaître dans les journaux et les traces, comme les données personnelles, les identifiants d'accès et les détails de santé ou de paiement. Analysez-les, et corrigez la source. Vérifiez les obligations auprès de votre conseiller juridique, car ce livre ne donne aucun avis juridique.

### Mesurer la compréhension

**8. Mesurez le délai de compréhension, et pas seulement le délai de correction.** Le temps entre la détection et une explication fonctionnelle montre à quel point les signaux soutiennent les gens. Revoyez les cas les plus longs pour voir quel signal manquait.

**9. Comptez les angles morts.** Les incidents que les utilisateurs ont trouvés d'abord sont la preuve la plus claire d'une lacune. Pour chacun, demandez quel signal l'aurait montré, et ajoutez-le.

**10. Revoyez l'usage des tableaux de bord et des alertes.** Retirez les tableaux de bord que personne n'ouvre et les alertes qui ne mènent jamais à une action (voir le sujet 5.5, Métriques de supervision et de qualité des alertes). Un ensemble plus petit auquel les gens font confiance vaut mieux qu'un mur de graphiques.

### Gérer le coût et les normes

**11. Budgétez et attribuez le coût de la télémétrie.** Affectez le coût aux services et surveillez la tendance. Fixez la conservation par la valeur : gardez les données détaillées peu de temps, les résumés plus longtemps, et supprimez ce qui n'a aucun usage.

**12. Préférez les normes ouvertes là où elles conviennent.** Des formats communs d'instrumentation et de données, comme ceux que maintient le projet OpenTelemetry, facilitent le changement d'outils. Vérifiez la spécification actuelle et la prise en charge de vos outils avant de vous engager, car les normes et les produits changent.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture de l'instrumentation | Ajouter un signal minimal à chaque service pour passer la norme ; exclure du catalogue les services difficiles | Complétude des traces et incidents dans les angles morts ; revoir le catalogue pour y trouver des omissions |
| Complétude des traces | N'échantillonner que des requêtes simples ; compter des traces partielles comme complètes | Définir l'échantillon de contrôle par type de requête ; vérifier la couverture des dépendances |
| Taux de corrélation des signaux | Ne revoir que les incidents qui se sont bien passés ; compter une jonction qui existe sur le papier | Revoir un échantillon aléatoire d'incidents ; mener un exercice de jonction |
| Délai de compréhension | Consigner une cause tôt et vaguement ; laisser la cause vide pour les cas difficiles | Revoir la qualité des enregistrements de cause ; rapporter à part les incidents sans cause |
| Coût de télémétrie par service | Abandonner des signaux pour réduire le coût ; déplacer le coût vers un autre compte | Incidents dans les angles morts et délai de compréhension ; rapprocher la dépense totale |
| Données sensibles dans la télémétrie | Analyser trop étroitement ; ne pas rapporter les constats | Couverture des analyses et revue indépendante ; suivre le délai de retrait |
| Incidents dans les angles morts | Compter un incident comme détecté alors qu'une alerte a retenti après le signalement des utilisateurs ; définir le signal largement | Comparer les horodatages du premier signal et du premier signalement d'utilisateur ; revues par échantillon |

Une lecture saine est une couverture qui monte avec le nombre de traces complètes et de jonctions, une part décroissante d'incidents trouvés d'abord par les utilisateurs, un délai de compréhension qui baisse sans réduire les signaux, un coût de télémétrie compris et attribué, et des constats de données sensibles corrigés rapidement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Tout recueillir, garder longtemps | Capacité maximale d'investigation | Coût et risque élevés ; difficile à fouiller |
| Échantillonner et garder peu de temps | Coût plus bas | Peut manquer des événements rares et d'anciens incidents |
| Instrumentation standard entre services | Cohérente ; compréhension plus rapide | Effort d'adoption ; peut ne pas convenir à chaque service |
| Instrumentation choisie par l'équipe | Convient aux besoins locaux | Incohérente ; signaux difficiles à joindre |
| Résumés de la télémétrie par l'IA | Premier regard plus rapide | Peuvent être faux ; dépendent de la qualité des signaux |

La conclusion en bref est de garder des données riches pour les erreurs et les requêtes lentes, d'échantillonner le routinier et de fixer la conservation par la valeur. Un ensemble modeste, cohérent et relié de signaux vaut mieux qu'un grand tas non relié.

## Questions à discuter avec votre équipe

**1. Lors de notre dernier incident, qu'avons-nous voulu savoir sans pouvoir le découvrir ?**
Cela révèle le signal manquant. Demandez aux gens de rappeler la question et l'endroit où ils ont cherché. Attendez-vous à des réponses comme « quels clients étaient touchés » ou « qu'est-ce qui a changé ». Décidez ensuite de qui ajoute le signal et de la manière de le tester.

**2. Pour notre parcours utilisateur le plus important, comment saurions-nous qu'il échoue ?**
Parcourez le parcours étape par étape. Demandez quel signal montre la réussite à chaque étape, et en combien de temps. Cherchez les étapes sans signal. Ajoutez ensuite un indicateur pour l'étape la plus faible.

**3. Pouvons-nous suivre une requête du clic de l'utilisateur jusqu'à la base de données et retour ?**
Essayez-le en direct. Remarquez où la trace se brise, par exemple à une file de messages ou à un appel tiers. Demandez combien de temps il faut pour trouver les lignes de journal correspondantes. Corrigez ensuite la plus grande rupture.

**4. Combien dépensons-nous en télémétrie, et qu'en obtenons-nous ?**
Beaucoup d'équipes ne connaissent pas le coût par service. Demandez quels signaux ont été utilisés au dernier trimestre. Discutez de ce qui pourrait être échantillonné ou supprimé sans dommage. Choisissez ensuite un signal à revoir.

**5. Quelle information sensible pourrait se trouver dans nos journaux et nos traces aujourd'hui ?**
Cherchez ensemble des exemples. Les cas courants sont les adresses courriel, les jetons et les champs de texte libre. Demandez comment elle y est arrivée et qui peut la lire. Convenez ensuite d'une règle et d'une analyse.

**6. Comment utilisons-nous les outils d'IA sur notre télémétrie, et qui vérifie ce qu'ils disent ?**
Écoutez les résumés d'incidents non vérifiés. Demandez quelles données sont envoyées à un outil et à quelles conditions. Discutez de la manière dont une personne vérifie une cause suggérée. Rédigez ensuite une courte règle.

## Quatre perspectives

### Équipes produit et de livraison

Vous décidez de ce qu'un service émet. Ajoutez l'instrumentation en construisant, incluez l'identifiant qui relie les signaux et testez-le dans le cadre du travail. Traitez le manque d'observabilité comme un défaut, car le prochain incident le paiera.

### Équipes de service et d'exploitation

Vous utilisez la télémétrie sous pression. Dites à l'équipe quels signaux ont aidé et lesquels manquaient, et gardez les alertes liées à l'impact sur les utilisateurs. Suivez le délai de compréhension et les incidents dans les angles morts, et portez-les à l'équipe produit.

### Direction et gouvernance

Financez l'observabilité comme une partie du service, avec des budgets pour la télémétrie et pour combler les lacunes. Demandez la couverture, les incidents dans les angles morts et les tendances de coût, non le nombre de tableaux de bord. Fixez des règles pour les données sensibles et pour l'usage d'outils d'IA sur la télémétrie.

### Clients et utilisateurs

Vous êtes souvent les premiers à remarquer un problème : demandez donc comment le signaler et à quelle vitesse il sera relié aux signaux du service. Vos signalements réduisent les angles morts, et on doit vous dire ce qui a été appris. Demandez quelle télémétrie est recueillie à votre sujet et pourquoi.

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite un service de paiement composé de huit services plus petits. Les chiffres de cet exemple sont illustratifs. Des clients signalent des échecs occasionnels au paiement, mais les tableaux de bord montrent des taux d'erreurs sains et une latence normale.

L'équipe mesure. La couverture de l'instrumentation est de 6 services sur 8 respectant la norme de base. Un contrôle de 50 requêtes de paiement échantillonnées montre une complétude des traces de 62 %, parce que la trace se brise à une file de messages et à un appel de paiement tiers. Sur les six derniers incidents, le taux de corrélation des signaux est de deux sur six, puisque les journaux utilisent un identifiant de requête différent de celui des traces. Les incidents dans les angles morts sont trois sur six.

L'équipe fait passer un seul identifiant de requête à travers la file et les journaux, ajoute un intervalle de trace autour de l'appel de paiement et instrumente les deux services manquants. Au bout d'un mois, la complétude des traces atteint environ 90 % au contrôle par échantillon et le prochain incident a une explication fonctionnelle en 35 minutes, contre plusieurs heures auparavant. Ils analysent aussi les journaux et trouvent des adresses courriel de clients dans un message d'erreur, qu'ils retirent à la source, et les constats de données sensibles tombent à zéro le mois suivant.

Un risque de détournement apparaît. Un gestionnaire demande de relever la couverture de l'instrumentation en marquant les deux services restants comme « hors périmètre ». L'équipe refuse, car le nombre d'incidents dans les angles morts resterait élevé, et consigne la lacune avec un responsable. Ce qui reste difficile : le coût de télémétrie par requête de paiement a monté, et l'équipe n'a pas encore décidé combien de temps garder les traces. Le plan du trimestre suivant est d'échantillonner les traces de routine et de garder le détail complet pour les erreurs.

## Agilité, IA, automatisation et analytique

### Agilité

Incluez l'observabilité dans la définition de terminé, pour que chaque incrément d'un service puisse être compris en production. Une bonne pratique est de revoir les signaux manquants du dernier incident à la conversation d'amélioration régulière et de les ajouter comme éléments du backlog. La précaution est que le travail d'observabilité est souvent différé au profit des fonctionnalités : rendez-le donc visible et protégez-lui du temps.

### IA

L'IA peut résumer la télémétrie, corréler des signaux et suggérer des causes, et les fonctionnalités d'IA elles-mêmes ont besoin de télémétrie comme les entrées, les sorties, la latence, le coût et le retour des utilisateurs. Appariez les causes suggérées par l'IA avec une vérification humaine et rapportez la fréquence à laquelle elles étaient justes, et supervisez les fonctionnalités d'IA pour la qualité autant que pour la disponibilité (voir le sujet 10.1, L'IA dans la mesure de la gestion des services). La précaution est que les prompts et les réponses dans les journaux peuvent contenir des données personnelles : décidez donc de ce qu'il faut consigner avant de commencer.

### Automatisation

Automatisez le recueil, la corrélation et l'alerte, et automatisez les contrôles de couverture et de données sensibles. Mesurez le pipeline de télémétrie lui-même sur les données perdues et le retard, car un pipeline cassé ressemble à un système sain. La précaution est qu'une remédiation automatique qui agit sur un signal peut masquer la cause : consignez donc ce qu'elle a fait.

### Analytique

Servez-vous de la télémétrie pour répondre à des questions sur l'expérience des utilisateurs et le comportement du système, avec des SLI reliés aux résultats. La décision éclairée est où investir dans les signaux et où réduire le coût. La précaution est que le volume de données n'est pas de la compréhension, et que des métriques agrégées peuvent cacher les utilisateurs touchés : vérifiez donc les distributions et les segments, et montrez le nombre d'événements derrière chaque chiffre (voir le sujet 10.8, Métriques d'analytique et de qualité des données).

## Éclairage sectoriel

**Startup.** Commencez avec quelques signaux sur le parcours utilisateur principal et un identifiant de trace dans les journaux. Évitez d'acheter une grande plateforme avant que les questions soient claires, et surveillez le coût à mesure que l'usage grandit.

**Petite entreprise.** Les services hébergés offrent souvent une télémétrie limitée. Demandez aux fournisseurs ce que vous pouvez voir et gardez un simple contrôle externe du parcours principal. Évitez de recueillir des données personnelles dans les journaux.

**Grande entreprise.** De nombreuses équipes et de nombreux outils demandent une norme partagée, des identifiants partagés et une attribution centrale des coûts. Permettez aux équipes d'ajouter des signaux dans la norme, et gérez de façon centrale la conservation et l'accès.

**Gouvernement et secteur public.** Les règles sur l'emplacement des données, la conservation et l'accès façonnent ce que vous pouvez recueillir et où c'est stocké. Documentez les flux de données de télémétrie et vérifiez les obligations auprès de conseillers juridiques (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le travail d'instrumentation, les frais de plateforme ou de service, le stockage selon la durée de conservation et le temps du personnel pour maintenir les normes et les tableaux de bord. Le coût de la télémétrie peut croître vite avec le volume et la cardinalité : budgétez-le et attribuez-le donc.

Le rendement est une compréhension plus rapide lors des incidents, moins d'incidents trouvés d'abord par les utilisateurs et de meilleures décisions sur où s'améliorer. Ces bénéfices sont réels et difficiles à chiffrer : évitez donc d'inventer un chiffre. Comparez votre propre délai de compréhension et la part d'incidents dans les angles morts avant et après le travail, et énoncez les hypothèses sous forme de plages (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Le côté risque est le coût d'une fuite de données par la télémétrie et le coût d'une télémétrie jamais utilisée.

## Anti-modèles et pièges

- **Compter les tableaux de bord.** Plus de graphiques ne signifie pas plus de compréhension. Mesurez la couverture, les jonctions et le délai de compréhension.
- **Tout recueillir pour toujours.** Le coût et le risque croissent avec peu d'usage. Fixez la conservation par la valeur.
- **Des signaux non reliés.** Des journaux, métriques et traces qui ne peuvent pas être joints ralentissent chaque incident. Faites passer des identifiants communs.
- **Échantillonner l'événement rare.** La défaillance dont vous avez besoin est celle que vous avez écartée. Gardez les erreurs et les requêtes lentes.
- **Des données sensibles dans les journaux.** Elles se répandent et sont difficiles à retirer. Analysez et corrigez la source.
- **Des alertes sur chaque signal.** Le bruit apprend aux gens à ignorer les alertes. Alertez sur l'impact sur les utilisateurs.
- **Faire confiance sans vérifier aux résumés de l'IA.** Ils peuvent être faux, et les signaux peuvent être incomplets. Vérifiez face aux données.
- **L'instrumentation comme travail de quelqu'un d'autre.** Les personnes qui écrivent le code savent ce qu'il faut émettre. Faites-en une partie du travail.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Couverture et norme | Signaux variables selon les équipes ; angles morts inconnus | Principaux services instrumentés | Norme de base et couverture suivie face au catalogue | Incidents dans les angles morts revus et lacunes comblées | Couverture intégrée à la création des services et ajustée selon l'impact sur les utilisateurs |
| Qualité des signaux et liaison | Journaux seulement ; aucun identifiant commun | Quelques traces et métriques | Identifiants communs ; complétude des traces vérifiée | Délai de compréhension revu ; exercices menés | Les signaux s'adaptent automatiquement aux questions posées |
| Coût et gouvernance | Coût inconnu ; aucune règle sur les données | Coût visible globalement | Coût attribué ; règles de conservation et de données sensibles | Coût et constats sur les données revus à cadence régulière | Coût et risque de la télémétrie gérés par la valeur entre équipes |

## Liste de vérification

- [ ] Une norme de signaux de base est écrite et fait partie de la définition de terminé.
- [ ] La couverture de l'instrumentation est suivie face au catalogue de services.
- [ ] Un identifiant de requête ou de trace relie les journaux, les métriques et les traces.
- [ ] La complétude des traces est vérifiée sur un échantillon de vraies requêtes.
- [ ] Le délai de compréhension est consigné pour les incidents, avec la cause.
- [ ] Les incidents dans les angles morts sont comptés, et chacun mène à un signal.
- [ ] Le coût de la télémétrie est attribué aux services, et la conservation est fixée par la valeur.
- [ ] Les données sensibles dans la télémétrie sont recherchées et corrigées à la source.
- [ ] Des règles existent pour les outils d'IA qui lisent la télémétrie.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou montrés à côté.

## Prompts d'IA

**Concevez une norme de signaux de base.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Trouvez les lacunes d'observabilité à partir d'une revue d'incident.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Planifiez une analyse des données sensibles dans la télémétrie.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Passez en revue le risque de détournement des mesures d'observabilité.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills d'IA

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md) : à utiliser pour examiner les schémas inhabituels de la télémétrie avant de décider d'une cause.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour transformer des signaux et des chronologies en une explication testée.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser pour relier des indicateurs aux accords et aux objectifs qu'ils soutiennent.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou associé.

## Idées clés

- L'observabilité consiste à pouvoir poser de nouvelles questions à un service en fonctionnement : mesurez donc la couverture, les signaux reliés et le délai de compréhension.
- Les incidents que les utilisateurs trouvent d'abord sont la preuve la plus claire d'angles morts : comptez-les donc et ajoutez des signaux.
- Les identifiants communs entre journaux, métriques et traces sont ce qui rend la compréhension rapide.
- La télémétrie coûte de l'argent et peut laisser fuir des données sensibles : budgétez-la donc, fixez la conservation par la valeur et analysez le contenu sensible.
- Vérifiez face aux données les résumés de la télémétrie par l'IA, car ils dépendent de la qualité des signaux.

## Références et lectures complémentaires

1. Wikipedia, [Observabilité (logiciel)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Télémétrie](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Traçage distribué](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Ingénierie de fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Gestion des journaux](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Indicateur de niveau de service](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
