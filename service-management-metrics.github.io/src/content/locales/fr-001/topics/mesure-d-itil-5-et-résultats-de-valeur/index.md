# Mesure d'ITIL 5 et résultats de valeur

**ITIL 5, tel que son propriétaire le décrit, relie stratégie, livraison et résultats mesurables et couvre les environnements dotés d'IA : mesurez donc si chaque service, produit et système d'IA a un responsable nommé et un résultat écrit assorti de preuves, et traitez comme non confirmé tout détail d'ITIL 5 que vous ne pouvez pas vérifier auprès du propriétaire.**

## Vue d'ensemble et motivation

[ITIL](https://en.wikipedia.org/wiki/ITIL) est le cadre le plus connu pour la [gestion des services informatiques](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Son propriétaire, PeopleCert, publie la version courante, et une nouvelle version du cadre, ITIL 5, a été annoncée en 2026. Les équipes qui exploitent des services se demandent ce qu'une nouvelle version change à la mesure. La réponse honnête commence par ce qui peut être vérifié et ce qui ne le peut pas.

**Ce qui est vérifié (au 20 octobre 2026).** La propre page de certification de PeopleCert pour l'ITIL Foundation Bridge (Version 5) décrit la mise à jour comme couvrant la gestion des produits et services numériques sur tout le cycle de vie, y compris la manière dont ITIL reflète les « modern digital and AI-enabled environments » (environnements numériques et dotés d'IA modernes). Elle énumère aussi une « enhanced value creation approach » (approche renforcée de la création de valeur) qui relie stratégie, livraison et résultats mesurables à travers l'écosystème des parties prenantes, ainsi que la gestion de la complexité numérique et de l'IA. La page indique que le Bridge s'adresse aux titulaires d'une certification ITIL 4. Elle ne donne aucune date de sortie pour ITIL 5 lui-même.

**Ce qui n'est pas vérifié.** Les noms et la structure des pratiques, la part d'ITIL 4 qui est reprise, les dates de sortie formelles et l'existence éventuelle d'une publication distincte sur la gouvernance de l'IA. Des pages de formation et de conseil de tiers donnent des chiffres et des noms à ce sujet. Elles se contredisent entre elles : ce livre ne les reprend donc pas. Revérifiez les pages du propriétaire avant chaque décision, et étiquetez chaque affirmation « dans ITIL 4 » ou « dans ITIL 5 ».

Trois thèmes découlent des termes du propriétaire, et chacun a une conséquence pour la mesure. Une orientation produit signifie qu'un service est détenu de l'idée jusqu'au retrait : mesurez donc la responsabilité. L'IA dans l'environnement signifie que les systèmes d'IA ont besoin de gouvernance : mesurez donc l'inventaire, la supervision et la qualité. La valeur comme résultat mesurable signifie qu'un service doit énoncer ce qui est meilleur pour quelqu'un quand il fonctionne : mesurez donc si le résultat est écrit et s'il existe des preuves qu'il a bougé.

Ce sujet ne définit pas de métriques ITIL 5, parce que le propriétaire n'a publié aucun ensemble de métriques que ce livre puisse vérifier. Il propose des mesures de la disposition d'une organisation de services à être mesurée : l'existence des fondations dont toute version d'ITIL, et toute mesure honnête, aura besoin. Les mesures suivent la même forme que le reste du livre, avec un vecteur de détournement et un garde-fou pour chacune (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Termes employés ici. Un **service** est un moyen de permettre la cocréation de valeur en facilitant les résultats que le client veut. Un **produit numérique** est une offre fondée sur un logiciel avec son propre cycle de vie et son propre responsable. Une **carte du patrimoine** est une liste des services, produits, plateformes et systèmes d'IA qu'exploite une organisation, chacun avec un responsable. Un **résultat** est un changement dans la vie d'un client ou dans la santé d'un service (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

## Principes clés

- **Vérifiez avant de citer.** Une affirmation sur ITIL 5 n'est vérifiée que si la propre publication du propriétaire la dit. Tout le reste est non confirmé et étiqueté comme tel.
- **Mesurez les fondations, pas le cadre.** La responsabilité, les résultats et la supervision de l'IA comptent sous toute version, et ils sont mesurables dès aujourd'hui.
- **Les résultats plutôt que la production.** La valeur d'un service est un changement pour quelqu'un : un résultat écrit et des preuves de changement valent donc mieux que des décomptes de tickets ou de versions.
- **Détenez chaque produit, service et système d'IA.** Un responsable nommé est le minimum pour la gouvernance, la revue et le retrait.
- **Appariez chaque mesure avec un garde-fou.** Les mesures de couverture sont faciles à satisfaire sur le papier : appariez donc chacune avec un contrôle que le contenu est réel.
- **N'attendez pas le cadre.** Commencez avec la carte du patrimoine et un petit ensemble de mesures, et ajustez à mesure que le propriétaire publie davantage.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des responsables du patrimoine | Part des services, produits numériques, plateformes et systèmes d'IA listés qui ont un responsable nommé et actif | éléments avec un responsable nommé confirmé dans les 12 derniers mois / éléments de la carte du patrimoine, comptés en fin de période | pourcentage | Catalogue de services, enregistrements de configuration et carte du patrimoine | Gestion du catalogue de services ; gouvernance | Responsable produit et charte d'équipe | Trimestrielle |
| Couverture des énoncés de résultat | Part des services et produits ayant un résultat écrit et au moins un signal de preuve nommé | services et produits avec un énoncé de résultat revu dans les 12 derniers mois et un signal de preuve / services et produits de la carte du patrimoine | pourcentage | Catalogue de services et notes de revue | Gestion des niveaux de service ; amélioration continue | Objectifs produit et critères d'acceptation | Trimestrielle |
| Ancienneté des preuves de résultat | Ancienneté de la plus récente revue de preuves pour chaque résultat | médiane et 85e percentile de (date de fin de période moins date de la dernière revue de preuves) sur l'ensemble des résultats | jours | Journal des revues | Mesure et reporting | Revue régulière avec les parties prenantes | Trimestrielle |
| Couverture de l'inventaire des systèmes d'IA | Part des fonctionnalités et systèmes dotés d'IA connus qui ont un responsable, un point de revue humaine et une entrée au registre des risques | systèmes d'IA avec les trois / systèmes d'IA trouvés par le dernier balayage de découverte | pourcentage | Inventaire de l'IA et registre des risques | Gestion des risques ; gouvernance | Définition de terminé pour les fonctionnalités d'IA | Trimestrielle |
| Taux de vérification des affirmations | Part des affirmations sur ITIL 5 utilisées dans les plans et politiques qui remontent à la propre publication du propriétaire | affirmations avec une citation datée du propriétaire / affirmations sur ITIL 5 utilisées dans les documents de décision de la période | pourcentage | Journal de vérification | Gestion des connaissances ; gouvernance | s. o., pratique au niveau de l'organisation sans équivalent agile direct | Trimestrielle |

Les formules comptent les éléments à la fin de la période. « Responsable actif » désigne une personne ou un rôle qui a confirmé la responsabilité par écrit, pas un nom copié d'un ancien enregistrement. Le taux de vérification des affirmations exclut les affirmations sur ITIL 4, largement documenté.

## Recommandations

### Commencer par la carte du patrimoine

**1. Construisez une liste unique avant toute autre chose.** Listez chaque service, produit numérique, plateforme et système d'IA que vous exploitez, avec un nom et un responsable. Attendez-vous à des surprises : outils parallèles, fonctionnalités activées par défaut dans des produits d'éditeurs et plateformes sans responsable. La carte est le dénominateur de toutes les autres mesures d'ici.

**2. Définissez « responsable » en une phrase.** Un responsable répond du résultat de l'élément, de son changement, de son coût et de son retrait. Une liste de diffusion d'équipe n'est pas un responsable. Décidez si un produit et le service qui le soutient partagent un responsable, et écrivez la règle.

**3. Découvrez activement les systèmes d'IA.** Cherchez dans les contrats, les paramètres des outils et les comptes cloud les fonctionnalités d'IA, et demandez aux équipes ce qu'elles ont activé. Une enquête ponctuelle se périme : planifiez donc un balayage régulier et comparez-le à l'inventaire.

### Mesurer les résultats

**4. Écrivez une phrase de résultat par service.** La phrase dit ce qui est meilleur pour un client nommé quand le service fonctionne, avec ses mots. « Une disponibilité de 99,9 % » est un objectif, pas un résultat. Si le service n'a pas de résultat, demandez-vous s'il devrait exister.

**5. Nommez le signal de preuve.** Pour chaque résultat, nommez les données qui montreraient qu'il bouge, comme le taux de contacts répétés, la réussite des tâches ou l'adoption. Préférez des signaux que vous collectez déjà (voir le sujet 6.5, Réalisation de la valeur et résultats métier). Si aucun signal n'existe, consignez-le comme constat.

**6. Rapportez l'ancienneté des preuves.** Un résultat revu il y a deux ans est une affirmation, pas une preuve. Montrez la médiane et un percentile élevé de l'ancienneté des preuves, et montrez la plus ancienne. C'est difficile à détourner sans faire la revue.

### Gouverner la mesure de l'IA

**7. Appariez l'activité de l'IA avec une mesure de qualité.** Là où l'IA assiste pour les tickets, les changements ou les connaissances, rapportez une mesure d'usage à côté d'une mesure de qualité comme la part des brouillons d'IA qu'une personne a modifiés de façon notable, ou le taux de contacts répétés pour les demandes traitées par l'IA (voir le sujet 10.2, Mesurer le travail assisté par l'IA). La paire montre le bénéfice, ce que l'usage seul ne peut pas faire.

**8. Reliez les systèmes d'IA au registre des risques.** Chaque système d'IA reçoit un responsable, un point de revue humaine, une date de revue et une entrée au registre des risques (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA). Vérifiez avec votre conseiller juridique le droit qui s'applique à vous, puisque ce livre ne donne aucun conseil juridique.

### Garder les affirmations honnêtes

**9. Tenez un journal de vérification.** Pour chaque affirmation sur ITIL 5 que vos plans utilisent, consignez la source du propriétaire, la date à laquelle vous l'avez lue et si elle est vérifiée. Revoyez le journal avant chaque décision budgétaire ou de politique, puisque la publication peut changer.

**10. Gardez en marche les mesures d'ITIL 4.** N'arrêtez pas de mesurer des pratiques qui fonctionnent parce qu'une nouvelle version existe. Changez une mesure quand les recommandations du propriétaire et vos propres preuves disent toutes deux qu'elle doit changer, et marquez le changement sur le graphique (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**11. Avancez à petits pas.** Choisissez une mesure du tableau, attribuez-lui un responsable et faites-la tourner pendant un trimestre. Ajouter les cinq d'un coup crée un programme de reporting avant qu'il n'existe aucune preuve que les mesures aident.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture des responsables du patrimoine | Nommer un responsable hiérarchique ou une liste de diffusion comme responsable de tout ; omettre de la carte les éléments difficiles | Confirmation du responsable par le responsable lui-même, et balayage de découverte qui compare la carte aux contrats et aux comptes cloud |
| Couverture des énoncés de résultat | Écrire une phrase vague comme « améliorer l'efficacité » ; copier un même résultat d'un service à l'autre | Échantillonner les résultats avec des clients et demander s'ils les reconnaissent ; ancienneté des preuves de résultat |
| Ancienneté des preuves de résultat | Toucher à la date de revue sans revoir ; ne revoir que les résultats faciles | Lire les notes de revue d'un échantillon ; rapporter la part des résultats dont le signal a réellement bougé ou est resté plat |
| Couverture de l'inventaire des systèmes d'IA | Ne compter que les systèmes que l'équipe choisit de déclarer ; classer les fonctionnalités d'IA comme du logiciel ordinaire | Balayage de découverte indépendant ; comparer avec les enregistrements d'éditeurs et de contrats |
| Taux de vérification des affirmations | Citer une page d'éditeur comme étant celle du propriétaire ; consigner une affirmation comme vérifiée sans lire la source | Revoir un échantillon d'entrées du journal face à la page source ; règle de la source du seul propriétaire |

Une lecture saine est celle d'un ensemble de chiffres de couverture qui montent lentement pendant que le contenu échantillonné s'améliore : des résultats que les clients reconnaissent, des responsables qui savent nommer leur service et un journal de vérification qui montre des affirmations passant de non confirmées à vérifiées, ou étant abandonnées.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesures de couverture (responsable, résultat, inventaire de l'IA) | Peu coûteuses, concrètes et disponibles dès maintenant | Faciles à satisfaire sur le papier ; ne disent rien de la qualité sans échantillon |
| Mesures de preuves de résultat | Relient le travail de service à la valeur, conformément à l'accent déclaré par le propriétaire | Lentes, bruyantes et dépendantes de données qui n'existent peut-être pas encore |
| Attendre un ensemble de métriques ITIL 5 publié | Évite des reprises si le propriétaire en publie un | Retarde un travail utile sous toute version ; le propriétaire peut ne rien publier |
| Suivre les synthèses de tiers | Rapides et détaillées | Se contredisent entre elles et avec le propriétaire ; risque d'agir sur des détails non confirmés |

La conclusion en prose est de mesurer les fondations maintenant, de garder les affirmations étiquetées et de changer de cap quand le propriétaire publie davantage. Le coût de se tromper est faible, car la responsabilité, les résultats et la supervision de l'IA valaient déjà la peine d'être traités.

## Questions à discuter avec votre équipe

**1. Parmi nos services, produits, plateformes et systèmes d'IA, lesquels n'ont aujourd'hui aucun responsable nommé ?**
Commencez par lister ce qui existe, car les gens découvrent souvent des systèmes dont personne ne se rappelle l'adoption. Attendez-vous à de la surprise devant les fonctionnalités activées par défaut dans les outils d'éditeurs. L'animateur doit consigner chaque lacune sans blâme. Un bon prolongement est de demander qui serait appelé la nuit quand l'élément tombe en panne.

**2. Que croyons-nous d'ITIL 5 pour l'avoir lu sur un blog plutôt que chez le propriétaire ?**
Nommer les croyances de seconde main fait de la vérification une tâche. Les équipes répètent souvent avec assurance des pourcentages, des dates et des noms de pratiques. Classez chaque croyance en vérifiée, plausible et inconnue. Demandez à quelqu'un de vérifier chacune sur la page du propriétaire et d'en consigner la date.

**3. Quel service pourrions-nous décrire à un client comme un résultat plutôt que comme un chiffre de disponibilité ?**
La pratique centrée sur la valeur part des résultats. Les équipes reviennent par défaut aux pourcentages de disponibilité : poussez donc vers la phrase du client, c'est-à-dire ce qui est meilleur pour lui quand le service fonctionne. Prolongez en demandant comment nous remarquerions que le résultat s'est dégradé alors que l'objectif reste vert.

**4. Où utilisons-nous aujourd'hui l'IA, et qui supervise chaque usage ?**
Cela teste si la gouvernance existe en pratique. Les réponses vont de « nulle part » à une longue liste qui inclut des fonctionnalités d'éditeurs. Écoutez les supervisions qui ne sont qu'un document de politique. Un bon prolongement est de demander ce qui nous dirait qu'un système d'IA se trompait.

**5. Laquelle des cinq mesures serait la plus facile à détourner ici, et comment le remarquerions-nous ?**
Demandez au groupe de concevoir la manœuvre de détournement, pas de s'en défendre dans l'abstrait. Consignez chaque manœuvre et vérifiez-la face au garde-fou apparié. C'est une version courte de la revue trimestrielle du détournement.

**6. Quelle est la plus petite première mesure que nous pouvons faire tourner ce trimestre et qui aide quelle que soit la version que nous suivons ?**
Les petits pas valent mieux qu'un programme de transition bâti sur des détails non vérifiés. Les réponses typiques sont la carte du patrimoine ou un inventaire de l'IA. Choisissez-en une avec un responsable et une date, et convenez du moment de relire les publications du propriétaire.

## Quatre perspectives

### Équipes produit et de livraison

On vous demande qui détient le produit après sa mise en production. Gardez le service en production dans la frontière du produit, écrivez une phrase de résultat et placez les fonctionnalités d'IA que vous construisez sur la même carte du patrimoine que tout le reste. Montrez d'abord les chiffres de l'équipe elle-même et tenez-les à l'écart des évaluations individuelles.

### Équipes de service et d'exploitation

Vos pratiques sont le socle de travail. Continuez à les mesurer, consignez des preuves qu'elles fonctionnent et montrez comment l'assistance de l'IA est supervisée là où elle touche les tickets, les alertes ou les changements. Utilisez le journal de vérification pour signaler les affirmations issues de supports de formation avant qu'elles n'atteignent un runbook.

### Direction et gouvernance

Financez la responsabilité et la vérification avant de financer un programme de transition. Demandez la carte du patrimoine, l'inventaire de l'IA, le journal de vérification et l'ancienneté des preuves de résultat. Traitez un chiffre de couverture rouge comme une raison de demander quelle aide l'équipe attend, pas comme une raison d'attribuer un blâme.

### Clients et utilisateurs

Vous devriez pouvoir voir à quoi sert un service avec vos propres termes, et apprendre quand l'IA fait partie de la manière dont vous êtes servi. Demandez la phrase de résultat, et dites si elle correspond à votre expérience.

## En pratique : un exemple de gestion des services

Le service informatique d'une entreprise de logistique régionale exploite un portail client, un système d'entrepôt et un assistant d'IA récemment ajouté qui rédige des réponses pour le centre de services. Le responsable du service entend dire qu'ITIL 5 met l'accent sur les produits et la gouvernance de l'IA, et la direction demande un plan de mesure sous un mois. Les chiffres de cet exemple sont illustratifs.

L'équipe se refuse à rédiger un plan à partir de présentations. Elle construit une carte du patrimoine : 11 services, trois produits numériques, deux plateformes et quatre fonctionnalités dotées d'IA, dont une avait été activée par défaut dans un outil d'éditeur et n'avait aucun responsable. La couverture des responsables du patrimoine au premier décompte est de 75 %. L'équipe consigne dans une note d'une page ce que dit la page de certification du propriétaire et liste toute autre affirmation sur ITIL 5 comme non confirmée.

Chaque fonctionnalité d'IA reçoit un responsable, un point de revue humaine et une entrée au registre des risques, ce qui fait passer la couverture de l'inventaire des systèmes d'IA de 50 % à 100 % en un mois. Le responsable du centre de services décide que chaque réponse rédigée par l'IA est lue par un agent avant l'envoi, et que les agents consignent les modifications notables des brouillons. L'équipe écrit aussi des phrases de résultat pour les trois produits numériques, et le résultat du portail (« les clients peuvent trouver où en est leur expédition sans appeler ») est testé avec cinq clients, dont deux le décrivent différemment.

L'équipe repère alors un risque de détournement. Un responsable propose d'augmenter la couverture des énoncés de résultat en écrivant une seule phrase pour les onze services, « améliorer l'efficacité opérationnelle ». Le garde-fou, un échantillon de clients, aurait montré que personne ne la reconnaissait, et l'équipe rejette le raccourci. Ce qui reste difficile : seuls deux services ont un signal de preuve collecté aujourd'hui, et la part des brouillons d'IA modifiés par les agents dépend du fait que les agents consignent les modifications de façon cohérente. Le plan du trimestre suivant est d'ajouter des signaux de preuve pour deux services de plus.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez l'adoption comme de l'amélioration continue : un petit backlog de changements, revu avec les parties prenantes et ajusté à mesure que le propriétaire publie davantage. Une habitude pratique est une revue régulière du journal de vérification et de la carte du patrimoine. La précaution est qu'un programme de transition avec une seule date de mise en service cache le travail de vérification et répète le schéma du changement massif.

### IA

ITIL 5, tel que le propriétaire le décrit, couvre les environnements dotés d'IA. Donnez à chaque usage de l'IA un responsable, un point de revue humaine et un moyen de détecter les erreurs, et mesurez la couverture de l'inventaire et la paire de qualité. La précaution est de ne pas demander à un assistant d'IA de résumer ITIL 5 de mémoire, puisqu'il peut produire des détails assurés mais faux. Donnez-lui un texte que vous avez lu chez le propriétaire et demandez-lui de citer ce texte.

### Automatisation

Automatisez la carte du patrimoine là où vous le pouvez : tirez les listes de services et de produits de vos données de catalogue et de configuration, et signalez les entrées sans responsable ou dont la confirmation a expiré. L'automatisation doit aussi être mesurée : combien de signalements ont mené à une action. La précaution est que l'automatisation met en évidence des problèmes de qualité des données : gardez donc une personne chargée de résoudre chaque signalement.

### Analytique

Suivez dans le temps une poignée de signaux de fondation, et montrez combien d'éléments se tiennent derrière chaque pourcentage. Servez-vous-en pour décider où mettre l'effort d'amélioration, pas pour classer des équipes. La précaution est qu'un décompte de « responsables nommés » peut être détourné en nommant n'importe qui, et que les données peuvent être périmées : appariez-le donc avec la confirmation par le responsable (voir le sujet 10.8, Métriques d'analytique et de qualité des données).

## Éclairage sectoriel

**Startup.** Il peut y avoir un seul produit et quelques personnes. Nommez le responsable, écrivez la phrase de résultat et listez les outils d'IA que l'équipe utilise. Sautez le reste jusqu'à ce qu'il y ait une raison de l'ajouter.

**Petite entreprise.** L'informatique peut être une seule personne ou un fournisseur. Demandez au fournisseur quelles fonctionnalités d'IA sont activées dans les outils que vous payez, et tenez une courte liste de services avec leurs responsables. Traitez avec prudence les affirmations d'éditeurs sur n'importe quel cadre.

**Grande entreprise.** Le patrimoine est vaste et la responsabilité est répartie entre équipes et fournisseurs. Standardisez la définition de « responsable » et d'« énoncé de résultat », menez le balayage de découverte selon une cadence et tenez un journal de vérification central pour que les équipes ne refassent pas chacune la recherche.

**Gouvernement et secteur public.** Les règles de passation de marchés, d'audit et de droit déterminent ce que vous pouvez adopter et quand. Traitez les publications du propriétaire et la réglementation applicable comme des données d'entrée de conception, consignez la date à laquelle vous les avez lues et utilisez le journal de vérification comme preuve pour les auditeurs (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est surtout du temps du personnel : construire la carte du patrimoine, écrire des phrases de résultat, confirmer les responsables et mener un balayage de découverte des systèmes d'IA. Le coût d'outillage est faible si vous détenez déjà un catalogue ou des données de configuration. Le coût le plus élevé est la discipline de tenir la carte et le journal à jour.

Le rendement est constitué de reprises évitées et de meilleures décisions. Un plan de transition bâti sur des affirmations non vérifiées risque de dépenser pour les mauvais changements. Les lacunes de responsabilité et d'inventaire de l'IA sont des constats qui comptent sous toute version du cadre, puisqu'une fonctionnalité d'IA sans responsable dans un processus tourné vers les clients est un risque. Décrivez le bénéfice sous forme de schéma, pas de chiffre : moins de systèmes sans responsable, moins de surprises lors des audits et des conversations plus claires avec les clients sur la valeur. Mesurez vos propres références, comme la couverture des responsables et l'ancienneté des preuves de résultat, avant et après le travail si vous avez besoin de chiffres pour un dossier d'affaires (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Répéter des affirmations de blog comme des faits.** Marquez chaque affirmation comme vérifiée ou non confirmée, et ne liez que les pages du propriétaire pour les vérifiées.
- **Rebaptiser des services en produits.** Changez la responsabilité et la redevabilité du cycle de vie, sinon l'étiquette est décorative.
- **Une couverture sans contenu.** Un chiffre de couverture élevé avec des phrases de résultat vides ou copiées est du détournement. Échantillonnez le contenu avec des clients.
- **La gouvernance de l'IA comme document.** Nommez des responsables, des points de revue et des dates de revue, et vérifiez que les gens les suivent.
- **Attendre le cadre pour mesurer.** La responsabilité, les résultats et la supervision de l'IA sont utiles dès maintenant. Commencez, et ajustez quand le propriétaire publie davantage.
- **Traiter un certificat comme de la conformité.** Mesurez si les équipes peuvent exercer la pratique, pas qui a réussi un examen.
- **Une découverte ponctuelle.** Des fonctionnalités d'IA apparaissent en continu. Menez le balayage selon une cadence.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Discipline des sources | La connaissance d'ITIL 5 vient de blogs et de ouï-dire | Quelques pages du propriétaire lues mais non consignées | Affirmations vérifiées et non confirmées consignées avec des dates | Affirmations revérifiées avant chaque décision | Les équipes partagent un journal de vérification vivant et daté |
| Responsabilité | Responsables flous pour la plupart des éléments | Responsables nommés pour les principaux services | Carte du patrimoine avec un responsable pour chaque élément | Lacunes de responsabilité revues et comblées selon une cadence | Les responsables se coordonnent entre équipes et fournisseurs |
| Résultats et preuves | Objectifs chiffrés et décomptes seulement | Phrases de résultat pour les principaux services | Résultat et signal de preuve pour chaque service | Ancienneté des preuves revue ; résultats périmés revisités | Résultats coécrits avec les clients et actualisés en continu |
| Gouvernance de l'IA | Usage de l'IA inconnu | Principaux usages de l'IA listés | Responsable, point de revue et entrée de risque par système | Erreurs et annulations mesurées et revues | La gouvernance s'adapte à mesure que l'IA et les règles changent |

## Liste de vérification

- [ ] Nous avons lu les pages d'ITIL 5 du propriétaire et consigné ce qu'elles disent, avec la date.
- [ ] Chaque affirmation sur ITIL 5 de nos plans est marquée comme vérifiée ou non confirmée.
- [ ] Nous avons une carte du patrimoine des services, produits, plateformes et systèmes d'IA.
- [ ] Chaque élément de la carte a un responsable qui l'a confirmé.
- [ ] Chaque service a une phrase de résultat et un signal de preuve nommé.
- [ ] Nous rapportons l'ancienneté des preuves de résultat avec des percentiles.
- [ ] Chaque système d'IA a un responsable, un point de revue humaine et une entrée au registre des risques.
- [ ] Nous menons un balayage de découverte des fonctionnalités d'IA selon un calendrier.
- [ ] Chaque mesure a un vecteur de détournement et un garde-fou sur la même page.
- [ ] Nous avons choisi une première mesure avec un responsable et une date.

## Prompts d'IA

**Construisez une carte du patrimoine à partir d'un matériau que vous collez.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**Classez les affirmations sur ITIL 5 en vérifiées et non confirmées.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Rédigez des phrases de résultat et des signaux de preuve à soumettre à revue.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Passez en revue le risque de détournement des cinq mesures.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## Skills d'IA

- [ITIL 5](../../../../skills/itil-5/SKILL.md) : à utiliser pour construire une carte du patrimoine, une analyse des écarts et un plan d'adoption par phases, avec les affirmations sur ITIL 5 signalées comme non confirmées.
- [Maturity models](../../../../skills/maturity-models/SKILL.md) : à utiliser pour transformer le tableau de maturité en autoévaluation d'équipe.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou apparié.

## Idées clés

- Une affirmation sur ITIL 5 n'est vérifiée que si la propre publication du propriétaire la dit, et la date à laquelle vous l'avez lue doit être consignée.
- Les thèmes déclarés par le propriétaire (produits numériques, environnements dotés d'IA et résultats mesurables) peuvent être mesurés dès aujourd'hui sous forme de responsabilité, de preuves de résultat et de supervision de l'IA.
- Les chiffres de couverture sont faciles à satisfaire sur le papier : échantillonnez donc le contenu et gardez un garde-fou à côté de chacun.
- Continuez à mesurer les pratiques ITIL 4 qui fonctionnent, et ne changez une mesure que lorsque les recommandations du propriétaire et vos preuves concordent.
- Commencez par une mesure et une carte du patrimoine, et ajustez à mesure que le propriétaire publie davantage.

## Références et lectures complémentaires

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Product management](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
