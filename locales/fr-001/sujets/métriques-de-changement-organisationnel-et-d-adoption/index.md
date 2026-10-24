# Métriques de changement organisationnel et d'adoption

**Un changement s'est ancré quand les gens font la nouvelle chose pour les raisons pour lesquelles elle devait être faite et que le résultat s'améliore : mesurez donc l'objectif et l'effet et non la présence de rituels, et gardez le rythme du changement à un niveau que les gens peuvent soutenir.**

## Vue d'ensemble et motivation

Les organisations adoptent tout le temps de nouvelles façons de travailler : un nouveau processus de gestion des services, un pipeline de livraison, une autre structure d'équipe, un ensemble de pratiques agiles, un cadre d'incidents. Les annonces sont faciles. Ce qui change dans le comportement quotidien est la vraie question, et savoir si le bénéfice visé a suivi est ce qui compte. De nombreux programmes rapportent un succès parce que la formation a été donnée, les outils installés et le nouveau vocabulaire est employé, alors que le travail semble le même et que les résultats n'ont pas bougé.

Les principes du Manifeste agile disent que les meilleures architectures, exigences et conceptions émergent d'équipes auto-organisées, et que les changements d'exigences sont les bienvenus. Ils disent aussi de bâtir les projets autour d'individus motivés et de leur faire confiance, et de maintenir indéfiniment un rythme constant. Ces principes sont un argument permanent contre l'imposition de pratiques d'en haut et la mesure de la conformité. Ils orientent vers une autre approche du changement : impliquer les gens en continu, laisser la façon de travailler évoluer et la juger par ses résultats.

Une idée de mise en garde issue de la culture du logiciel est le culte du cargo. La [programmation par culte du cargo](https://en.wikipedia.org/wiki/Cargo_cult_programming) décrit l'inclusion rituelle de code ou de pratiques qui n'ont aucun objet, copiés d'ailleurs sans compréhension. L'exposé de Richard Feynman sur la « science du culte du cargo » a utilisé une image voisine pour décrire un travail qui a la forme extérieure de la vraie chose sans sa substance. Appliqué aux façons de travailler, le culte du cargo est l'équipe qui tient toutes les réunions, emploie tous les termes et remplit tous les tableaux, et qui ne livre pas en continu, ne collabore pas avec ses parties prenantes et ne s'améliore pas. Une approche de [culte du cargo](https://en.wikipedia.org/wiki/Cargo_cult) confond la forme d'une pratique avec son but. Les métriques de ce sujet sont conçues pour faire la différence.

Plusieurs idées issues de l'étude du changement aident.

- **Le changement est un problème de [changement organisationnel](https://en.wikipedia.org/wiki/Organizational_change) autant que technique.** La [gestion du changement](https://en.wikipedia.org/wiki/Change_management) traite le côté humain : la sensibilisation, le désir, la connaissance, la capacité et le renforcement font partie des éléments couramment utilisés. Des modèles comme les huit étapes de John Kotter et l'ADKAR de Prosci offrent des vocabulaires, et aucun n'est une garantie.
- **Les gens résistent souvent au changement pour de bonnes raisons.** La [résistance au changement](https://en.wikipedia.org/wiki/Resistance_to_change) peut signaler un vrai problème dans la proposition, une menace pour quelque chose que les gens valorisent ou de la fatigue. Traitez-la comme de l'information.
- **L'adoption est un processus dans le temps.** La théorie de la [diffusion des innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) décrit comment de nouvelles pratiques se répandent dans un système social, des adopteurs précoces à la majorité, par l'influence et l'observation.
- **La culture façonne ce qui s'ancre.** La [culture organisationnelle](https://en.wikipedia.org/wiki/Organizational_culture), les hypothèses et comportements partagés d'un groupe, détermine quels changements paraissent naturels et lesquels sont rejetés.
- **L'observation change le comportement.** L'[effet Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) est la tendance des gens à modifier leur comportement parce qu'ils sont observés. Un projet pilote qui montre un excellent résultat sous une attention étroite peut ne pas tenir à grande échelle.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est particulièrement pertinent pour la transformation : quand l'adoption est un objectif, les équipes adoptent la forme. Un tableau de bord des « équipes qui utilisent le nouveau processus » avec un mandat derrière lui montrera une forte adoption et peu de changement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Ce sujet rassemble les mesures antérieures de résultats (voir le sujet 6.5, Réalisation de la valeur et résultats métier) et d'amélioration (voir le sujet 9.5, Métriques d'amélioration continue) comme la preuve qu'un changement a marché.

## Principes clés

- **Jugez un changement par son résultat, non par ses rituels.** La preuve de l'adoption est un meilleur résultat.
- **Rendez explicite le but de chaque pratique.** Si personne ne peut dire pourquoi, c'est un candidat au culte du cargo.
- **Impliquez en continu les personnes touchées.** Concevez avec elles, non pour elles.
- **Préférez l'adoption volontaire et l'évolution aux mandats.** Les équipes adaptent les pratiques à leur contexte.
- **Limitez la charge de changement.** Les gens ne peuvent en absorber qu'une certaine quantité, et un rythme constant inclut le changement.
- **Traitez la résistance comme une donnée.** Écoutez ce qu'elle dit de la proposition.
- **Comparez honnêtement.** Utilisez des groupes de comparaison, et méfiez-vous des résultats qui n'apparaissent que sous observation.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Clarté du but | Part des membres de l'équipe qui peuvent énoncer avec leurs mots le but d'une pratique et une façon de savoir si elle marche | membres donnant un but et un indicateur clairs dans un court contrôle anonyme / membres interrogés, au niveau de l'équipe | pourcentage | Court contrôle anonyme, agrégé par équipe | Gestion du changement organisationnel ; amélioration continue | Compréhension par l'équipe de la raison de sa façon de travailler | Trimestrielle |
| Étendue de l'adoption de la pratique | Part des équipes qui utilisent une pratique définie, selon un comportement observable et non la présence | équipes montrant le comportement défini dans la dernière période, confirmé par l'équipe et un observateur / équipes du périmètre | pourcentage | Auto-évaluation de l'équipe confirmée par l'observation | Gestion du changement organisationnel | Diffusion d'une pratique | Trimestrielle |
| Évolution du résultat face à une comparaison | Variation d'une mesure de résultat pour les équipes adoptantes comparée à celle d'équipes semblables non adoptantes sur la même période | variation du résultat chez les adoptants moins variation chez les équipes de comparaison | unités de résultat | Mesures de résultats par équipe (flux, stabilité, expérience) | Amélioration continue ; mesure et rapports | Apprentissage à partir des expériences | Trimestrielle |
| Charge de changement | Nombre de changements importants qui touchent une équipe en même temps | nombre d'initiatives de changement importantes qui demandent à une équipe de changer sa façon de travailler dans la période, par équipe | décompte | Portefeuille de changements et apport de l'équipe | Gestion du changement organisationnel ; maîtrise des changements | Rythme soutenable | Trimestrielle |
| Taux d'implication des parties prenantes | Part des initiatives de changement où les personnes touchées ont pris part à la conception et à la revue | initiatives avec une implication consignée des personnes touchées / initiatives | pourcentage | Enregistrements d'initiatives et confirmation de l'équipe touchée | Gestion du changement organisationnel ; engagement des parties prenantes | Implication continue des parties prenantes | Trimestrielle |
| Part d'adoption volontaire | Part des équipes adoptantes qui ont choisi la pratique, par opposition à celles qui en ont reçu l'ordre | équipes adoptantes déclarant avoir choisi la pratique / équipes adoptantes | pourcentage | Rapports des équipes | Gestion du changement organisationnel | Équipes auto-organisées | Annuelle |
| Taux de retour en arrière | Part des équipes qui ont abandonné une pratique dans l'année suivant son adoption | équipes qui ont arrêté dans les 12 mois / équipes qui ont adopté | pourcentage | Enregistrements des équipes dans le temps | Gestion du changement organisationnel ; amélioration continue | Pratiques abandonnées comme inutiles | Annuelle |

Définissez la pratique par ce que font les équipes et ce qu'elles visent, non par son nom. L'étendue de l'adoption ne compte une équipe que si son comportement correspond à la définition et si l'équipe et un observateur sont d'accord. L'évolution du résultat utilise des équipes de comparaison choisies d'avance comme semblables par type de service et point de départ, et énonce ce qui a changé d'autre. La charge de changement compte les initiatives qui demandent à l'équipe de modifier son travail, non les mises à jour de routine. Toutes les mesures sont au niveau de l'équipe ou de l'initiative, jamais individuelles.

## Recommandations

### Partir du but et des gens

**1. Énoncez le but et l'indicateur avant la pratique.** Pour chaque changement proposé, écrivez quel problème il résout, qui le ressent, quel résultat doit s'améliorer et comment vous le saurez. Si le but est « d'être agile » ou « d'adopter le cadre », demandez de nouveau. Les équipes suivront une pratique plus volontiers quand elles voient à quoi elle sert. C'est la meilleure protection contre le culte du cargo.

**2. Impliquez les personnes touchées dans la conception du changement.** Demandez à ceux qui font le travail ce qui fait mal, ce qu'ils essaieraient et ce qu'ils craignent. Concevez avec quelques-uns d'entre eux, testez avec un petit groupe et écoutez. L'implication continue des parties prenantes est un objectif agile central, et elle s'applique aux programmes de changement autant qu'aux produits. Consignez qui a participé.

**3. Écoutez la résistance.** Quand les gens s'opposent, demandez ce qu'ils voient que vous ne voyez pas. Les réponses possibles comprennent un défaut de la proposition, une capacité manquante, un coût non reconnu ou un changement antérieur jamais terminé. Consignez les préoccupations et les réponses, et ajustez le changement là où elles ont raison.

### Introduire le changement de manière à pouvoir en apprendre

**4. Faites un pilote avec une comparaison.** Essayez le changement avec une ou deux équipes volontaires, et observez un groupe comparable qui ne change pas. Comparez les résultats sur la même période. Soyez conscient de l'effet Hawthorne, et prolongez le pilote assez longtemps pour que la nouveauté s'estompe. Un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) est un test à petite échelle, et sa valeur réside dans ce qu'il enseigne avant le passage à l'échelle : énoncez donc d'avance ce que vous espérez apprendre et ce qui vous ferait arrêter.

**5. Préférez l'adoption volontaire, et laissez les pratiques évoluer.** Quand les équipes choisissent une pratique parce qu'elle résout un problème pour elles, elles l'adaptent et la gardent. Quand elle est imposée, elles la jouent. Offrez le but, les preuves et le soutien, et laissez les équipes décider de la manière de l'appliquer. Permettez la variation locale et apprenez-en. Suivez l'adoption volontaire et le retour en arrière pour voir si une pratique s'ancre pour les bonnes raisons.

**6. Diffusez par l'exemple et la conversation.** L'influence voyage par les personnes respectées et visibles. Partagez des histoires d'équipes qui ont essayé quelque chose et de ce qui s'est passé, y compris les revers. Les communautés de pratique sont un bon canal (voir le sujet 9.4, Métriques de compétences et d'apprentissage). Évitez les palmarès d'adoption.

### Surveiller la charge

**7. Comptez les changements qui s'abattent sur chaque équipe.** Listez les initiatives qui demandent à une équipe de changer sa façon de travailler : nouveaux outils, nouveaux processus, réorganisations, exigences de rapport. Une équipe qui en affronte beaucoup à la fois ne peut pas les absorber, et la [fatigue du changement](https://en.wikipedia.org/wiki/Change_fatigue) s'installe. Séquencez les initiatives, abandonnez celles de faible valeur et laissez aux équipes la place de terminer un changement avant le suivant. Cela fait partie du maintien d'un rythme soutenable (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**8. Retirez ce qui ne sert plus.** Pour chaque nouvelle pratique ajoutée, demandez ce qui peut être retiré. Les couches de processus s'accumulent, et chaque couche a un coût. Revoyez chaque trimestre les rituels qu'une équipe exécute et abandonnez ceux dont le but n'est plus servi.

### Mesurer l'adoption par ce qui compte

**9. Définissez l'adoption par un comportement observable et un but.** Décrivez ce qu'une équipe fait de différent quand la pratique s'est ancrée, par exemple « les changements arrivent en production par petites étapes avec des contrôles automatisés, et les utilisateurs sont consultés chaque semaine ». Évaluez par l'observation et la conversation, non en comptant des artefacts comme des tableaux ou des réunions. Demandez aux membres de l'équipe d'expliquer le but.

**10. Comparez les résultats, non la conformité.** Regardez les mesures de flux, de stabilité, d'expérience et de coût des équipes adoptantes face aux équipes de comparaison (voir le sujet 2.8, Métriques DORA). Prenez soin de la causalité : les équipes qui adoptent peuvent différer d'une manière qui affecte aussi les résultats. Rapportez la comparaison avec ses limites.

**11. Vérifiez l'expérience des personnes.** Une adoption qui élève la friction ou érode l'autonomie peut se saper elle-même. Utilisez les sondages flash de santé d'équipe et de bien-être pour voir ce que le changement fait ressentir (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs). Demandez ce que le changement a retiré autant que ce qu'il a ajouté.

**12. Soyez honnête dans le rapport.** Rapportez ensemble l'adoption, les résultats, la charge de changement et les retours en arrière, avec l'histoire de ce qui a été appris. Évitez de déclarer un succès quand la forme s'est répandue et que les résultats n'ont pas bougé. Admettez qu'une pratique ne convenait pas, et retirez-la. Une transformation se juge à ce qu'elle a permis, non à l'ampleur de son annonce.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Clarté du but | Coacher les gens pour qu'ils récitent le but ; poser des questions suggestives | Contrôle anonyme ; demander un exemple de la manière de savoir ; comparer avec l'évolution du résultat |
| Étendue de l'adoption de la pratique | Compter les tableaux et les réunions ; équipes qui jouent pour l'observateur | Définir par le comportement et le but ; observation par quelqu'un d'extérieur à l'équipe ; évolution du résultat |
| Évolution du résultat face à une comparaison | Choisir un groupe de comparaison ou une période favorable ; laisser de côté d'autres changements | Choisir d'avance la comparaison et la période ; lister les autres changements ; montrer l'incertitude |
| Charge de changement | Scinder une initiative en petits morceaux ; ne pas compter les changements qui arrivent de façon informelle | Compter par effet sur le travail de l'équipe ; demander aux équipes de lister ce qu'elles absorbent |
| Taux d'implication des parties prenantes | Inviter des gens à une séance d'information et l'appeler implication ; ne consigner que la présence | Confirmation de l'équipe touchée qu'elle a influencé la conception ; consigner les changements faits en réponse |
| Part d'adoption volontaire | Présenter un mandat comme un choix ; équipes disant avoir choisi alors qu'elles se sentaient obligées | Rapport anonyme ; demander ce qui serait arrivé si elles avaient refusé |
| Taux de retour en arrière | Rendre l'abandon d'une pratique coûteux ou caché ; renommer la pratique abandonnée | Revoir les raisons de l'abandon ; permettre un retrait sûr |

Une lecture saine est une pratique que les équipes peuvent expliquer et choisir, une adoption mesurée par le comportement, des résultats qui s'améliorent face à la comparaison, une charge de changement gérable, quelques retours en arrière avec de bonnes raisons, et des gens qui disent que leur voix a façonné le changement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déploiement imposé | Rapide, cohérent | Conformité sans but ; ressentiment ; culte du cargo |
| Adoption volontaire | Adopteurs motivés ; adéquation locale | Plus lente ; inégale ; certaines équipes n'adoptent jamais |
| Changement en bloc | Événement clair | Risque élevé ; charge lourde ; difficile d'en apprendre |
| Pilotes par étapes avec comparaison | Apprendre avant de passer à l'échelle | Plus lent ; les pilotes peuvent ne pas se généraliser |
| Pratiques standard entre équipes | Coordination et soutien plus faciles | Mauvaise adéquation pour certaines équipes |
| Variation locale | Adéquation au contexte | Plus difficile à comparer et à soutenir |
| Tableaux de bord d'adoption | Progrès visible | Récompensent la forme de l'adoption |
| Comparaison des résultats | Signal honnête | Difficile à isoler ; plus lente à se montrer |

La réponse en bref est de faire des pilotes avec comparaison, d'offrir des pratiques avec leurs buts, de laisser les équipes choisir et adapter, de compter la charge de changement et de juger par les résultats, en n'utilisant une norme que là où la coordination l'exige.

## Questions à discuter avec votre équipe

**1. Quelle pratique suivons-nous dont personne ne peut expliquer l'objet ?**
Chaque personne en nomme une. Pour chacune, discutez du problème qu'elle devait résoudre et de si elle le résout encore. L'animateur doit consigner les réponses sans prendre une posture défensive. Convenez de garder, de changer ou d'abandonner deux d'entre elles.

**2. Quels changements nous tombent dessus en ce moment, et lesquels pourraient attendre ?**
Listez chaque initiative qui nous demande de changer notre façon de travailler. Comptez-les. Demandez lesquelles ajoutent de la valeur et lesquelles ajoutent de la charge. Proposez aux commanditaires un séquencement ou l'arrêt de l'une d'elles.

**3. À quoi avons-nous dit non lors du dernier changement, et quelqu'un écoutait-il ?**
Rappelez la résistance ou les préoccupations. Ont-elles été entendues, et le changement s'est-il adapté ? Discutez de la manière de soulever des préoccupations de façon à être reçu. Convenez de la manière dont l'équipe donnera son retour sur le prochain changement.

**4. Si ce changement a marché, qu'est-ce qui serait différent dans nos résultats, et comment le saurions-nous ?**
Rédigez l'indicateur et la comparaison. Demandez ce qui change d'autre en même temps. Si personne ne peut le dire, le changement n'a pas de but. Convenez d'une référence maintenant.

**5. Comment saurions-nous qu'une nouvelle pratique n'est que pour la montre ?**
Pensez aux signes : personne n'utilise la production, la réunion ne prend aucune décision, le tableau est mis à jour pour un public. Discutez de la manière de vérifier cela. Convenez d'un moment pour revoir les rituels que l'équipe exécute.

**6. Quelle pratique avons-nous abandonnée, et qu'avons-nous appris en l'abandonnant ?**
Rappelez-en une. Discutez de s'il était sûr de l'abandonner, et de ce qui l'a remplacée. Traitez la réponse comme la preuve que les équipes peuvent s'adapter.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison vivent avec les changements. Elles doivent demander le but, s'impliquer dans la conception, mener de petites expériences et dire quand une pratique ne convient pas. Elles ont le droit de faire évoluer leur façon de travailler, et le devoir de livrer des résultats qui justifient leurs choix.

### Équipes de service et d'exploitation

Les équipes d'exploitation absorbent des changements de processus venant de nombreuses directions, souvent en plus du travail non planifié. Elles doivent consigner la charge de changement, demander un séquencement et participer aux pilotes où leur point de vue compte. Elles sont bien placées pour remarquer quand un nouveau processus ajoute des étapes sans valeur.

### Direction et gouvernance

Les dirigeants parrainent des changements et les imposent souvent. Ils doivent énoncer des buts et des indicateurs, impliquer les personnes touchées, préférer l'adoption volontaire quand c'est possible, limiter la charge de changement et être prêts à retirer ce qui ne marche pas. La gouvernance doit regarder les résultats face à la comparaison, la charge de changement par équipe et les taux de retour en arrière, et se méfier de chiffres d'adoption uniformément élevés.

### Clients et utilisateurs

Les utilisateurs ressentent les effets du changement dans la qualité du service, la communication et la stabilité. Ils peuvent être impliqués dans la conception de changements qui les touchent, et leur retour est une preuve de l'aide apportée par le changement. Ils supportent aussi le coût de transformations qui distraient les équipes du service.

## En pratique : un exemple de gestion des services

La division technologique d'une entreprise logistique multinationale compte 30 équipes. Il y a deux ans, elle a lancé un programme de transformation pour adopter un ensemble standard de façons de travailler, et le tableau de bord du programme montre 27 équipes sur 30 « ayant adopté ». Les chiffres ci-dessous sont illustratifs.

La nouvelle responsable des pratiques d'ingénierie se voit demander si le programme a marché. Elle regarde au-delà du tableau de bord. Un court contrôle anonyme montre que seulement 41 % des membres des équipes peuvent énoncer le but des principales pratiques et une façon de savoir si elles marchent. L'observation de huit équipes montre que cinq tiennent les réunions prescrites et mettent à jour les tableaux, et que deux de ces cinq livrent encore chaque trimestre avec une approbation manuelle. En comparant les 12 équipes au comportement de pratique le plus fort avec 12 équipes semblables qui ne l'avaient pas, le temps de cycle médian et le taux d'échec des changements sont semblables, et la satisfaction envers la façon de travailler est plus basse parmi les équipes soumises à la conformité la plus forte. L'équipe moyenne absorbe cinq initiatives qui lui demandent de changer sa façon de travailler, trois équipes en affrontant huit ou plus. 22 % des équipes ont adopté volontairement. Parmi les équipes qui ont adopté une pratique de pipeline il y a deux ans, 30 % ont discrètement arrêté.

La responsable des pratiques d'ingénierie recadre le programme avec les équipes. Le but de chaque pratique est écrit en langage clair avec un indicateur, et les équipes sont libres d'adopter, d'adapter ou de décliner, avec une conversation sur le pourquoi. La division publie la charge de changement par équipe et demande aux commanditaires de séquencer leurs initiatives ; quatre sont suspendues et deux fusionnées. Des équipes volontaires pilotent une pratique de livraison par petites étapes avec des contrôles automatisés, avec un groupe de comparaison choisi d'avance, et les résultats sont partagés sous forme d'histoires et de chiffres. Des parties prenantes du métier et de l'exploitation se joignent aux séances de conception de deux changements de processus. Le rapport passe des décomptes d'adoption à l'évolution des résultats, à la charge de changement et au retour en arrière.

Un an plus tard, 71 % des membres des équipes peuvent énoncer le but des pratiques qu'ils utilisent. Les équipes pilotes réduisent le temps de cycle médian de 30 % contre une réduction de 6 % dans le groupe de comparaison, l'effet Hawthorne ayant été pris en compte en prolongeant le pilote de deux mois supplémentaires. La charge de changement moyenne tombe à trois initiatives par équipe. L'adoption volontaire monte à 64 %, et les retours en arrière sont de 9 %, avec les raisons consignées. Le directeur des opérations demande un objectif de 100 % d'adoption d'ici la fin de l'année. La responsable des pratiques d'ingénierie propose de suivre plutôt les résultats et la charge, expliquant qu'un 100 % imposé a produit l'apparence antérieure de succès et le retour en arrière antérieur. La décision est consignée, et le tableau de bord abandonne le décompte d'adoption.

## Agilité, IA, automatisation et analytique

### Agilité

Changez à un rythme que les gens peuvent soutenir, avec les parties prenantes impliquées tout au long. La précaution est que mesurer la présence de rituels montre la conformité, non le but.

### IA

L'adoption de l'IA est un programme de changement avec un impact sur les personnes : mesurez donc l'adoption volontaire, l'évolution des résultats et les préoccupations soulevées, et appariez l'usage avec la qualité. La précaution est qu'un usage imposé de l'IA peut faire monter les chiffres d'usage tout en abaissant la confiance.

### Automatisation

Recueillez automatiquement des signaux d'adoption depuis les outils et mesurez la charge de changement sur les équipes. La précaution est que des tableaux de bord d'usage d'outils peuvent remplacer la conversation.

### Analytique

Comparez les résultats avec un groupe de comparaison quand c'est possible et énoncez les limites. La décision éclairée est de continuer, d'ajuster ou d'inverser. La précaution est que l'adoption et le bénéfice sont différents : mesurez donc les deux.

## Éclairage sectoriel

**Startup.** Le changement est constant, et les pratiques viennent des fondateurs et des premières recrues. Gardez explicite le but de chaque pratique et abandonnez tout ce qui n'aide pas. Résistez à la copie du processus d'une grande entreprise avant d'avoir ses problèmes.

**Petite entreprise.** Le propriétaire décide souvent, et le changement est personnel. Expliquez pourquoi, impliquez les quelques personnes touchées, essayez un changement à la fois et vérifiez si la douleur visée s'est atténuée. Évitez les achats de cadres qui dépassent la capacité d'absorption de l'équipe.

**Grande entreprise.** L'échelle invite aux normes, aux programmes et aux consultants, et avec eux au risque de culte du cargo en volume. Offrez des pratiques partagées avec leurs buts, soutenez l'adoption volontaire, gérez le portefeuille de changements selon la charge des équipes et comparez honnêtement les résultats. Utilisez des communautés de pratique pour répandre ce qui marche.

**Gouvernement et secteur public.** Le changement peut être dicté par la législation, la restructuration et les cycles politiques, avec un choix limité. Là où le choix est limité, soyez transparent à ce sujet, concentrez-vous sur le but et le résultat, et impliquez tôt le personnel et les utilisateurs. Des protections du personnel et des devoirs de consultation peuvent s'appliquer, et la redevabilité publique rend précieux le rapport honnête de ce qui n'a pas marché (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts d'une bonne mesure du changement sont faibles : de courts contrôles, des données de comparaison tirées de mesures existantes, du temps d'observation et une liste des initiatives par équipe. Le coût plus grand est la volonté d'entendre qu'un programme favori ne marche pas.

Les rendements viennent du fait de ne pas gaspiller le très grand coût des transformations échouées : formation, conseil, outils et temps de nombreuses personnes, plus le coût de la fatigue du changement et de la confiance perdue. Construisez le dossier à partir de votre propre historique : le coût d'un programme passé et les résultats qu'il a fait bouger, le nombre d'initiatives en concurrence pour chaque équipe et la proportion de pratiques adoptées abandonnées plus tard. Évitez de citer des statistiques sur les taux d'échec des transformations à moins de pouvoir en retracer la source et la méthode. Incluez le bénéfice d'une correction de cap plus précoce grâce à des pilotes avec comparaison (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Rapporter l'adoption comme un succès.** La forme peut se répandre sans substance. Rapportez les résultats face à la comparaison.
- **Imposer des pratiques.** Cela produit du rituel et du ressentiment. Offrez des buts et laissez les équipes choisir.
- **Copier le processus d'une autre entreprise.** Cela importe la forme, non les conditions qui l'ont fait marcher. Partez de vos problèmes.
- **Trop de changements à la fois.** La charge dépasse la capacité. Comptez et séquencez.
- **Écarter la résistance.** Vous perdez de l'information. Écoutez et adaptez-vous.
- **Des pilotes sans comparaison.** Les effets de nouveauté induisent en erreur. Utilisez une comparaison et une période plus longue.
- **Ne jamais rien retirer.** Les couches de processus s'accumulent. Retirez à mesure que vous ajoutez.
- **Le théâtre du succès.** Des histoires sans chiffres, ou des chiffres sans histoires, cachent la vérité. Rapportez les deux, honnêtement.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| But et implication | Pratiques annoncées | Buts énoncés dans des présentations | But et indicateur écrits pour chaque changement ; personnes touchées consultées | Implication et clarté du but mesurées ; résistance consignée et traitée | Changement coconçu avec les utilisateurs et les équipes dans l'organisation et chez les partenaires |
| Introduction et preuves | Déploiements en bloc | Pilotes sans comparaison | Pilotes avec groupes de comparaison ; adoption définie par le comportement | Évolution des résultats et retour en arrière suivis ; limites des preuves rapportées | Apprentissage à l'échelle du portefeuille sur les changements qui marchent, partagé ouvertement |
| Charge et soutenabilité | Aucune vue de la charge de changement | Initiatives listées | Charge de changement comptée par équipe et séquencée | Charge gérée avec la capacité ; pratiques retirées | Changement planifié conjointement avec la capacité, le bien-être et les objectifs de livraison |

## Liste de vérification

- [ ] Chaque changement a un but écrit, un indicateur nommé et une référence.
- [ ] Les personnes touchées ont participé à la conception, et leur apport est consigné.
- [ ] Les préoccupations et la résistance sont consignées avec les réponses.
- [ ] Les pilotes ont un groupe de comparaison et une période assez longue pour que la nouveauté s'estompe.
- [ ] L'adoption est définie par un comportement observable et un but.
- [ ] L'adoption volontaire et le retour en arrière sont suivis, avec les raisons.
- [ ] La charge de changement par équipe est comptée, et les initiatives sont séquencées.
- [ ] Les pratiques sont revues pour un retrait au moins une fois par an.
- [ ] L'évolution des résultats est rapportée avec ses limites.
- [ ] Aucun objectif n'exige qu'un pourcentage donné d'équipes adopte une pratique.

## Prompts d'IA

**Rédigez un but et un indicateur pour un changement.**

```text
We plan to introduce [change] for [teams] in [type of organization]. Draft a
one-paragraph aim in plain language (the problem, who feels it, the outcome that
should improve), an indicator with a baseline to record now, a way to compare
with similar teams that do not change, and signs that the practice has become
a ritual without purpose. Do not invent evidence. List your assumptions and
questions for the affected teams.
```

**Comptez et séquencez la charge de changement.**

```text
Here is a list of initiatives that will ask [team or group] to change how it
works in the next [period]: [paste with sponsors, size, and dates]. Count the
load per team, identify conflicts and dependencies, and propose a sequence that
leaves room for the work and for sustainable pace. Suggest which could be
combined, delayed, or dropped. Do not assume we can do all of it. List your
assumptions.
```

**Concevez un pilote avec une comparaison.**

```text
Design a pilot of [change] with [number] willing teams and a comparison group
of [number] similar teams. Propose the outcome measures and baselines, the
duration (including time for novelty to fade), how to choose the comparison
group in advance, what else might confound the result, and what would make us
scale, adapt, or stop. Do not claim results from other organizations. List your
assumptions.
```

**Vérifiez l'absence de culte du cargo.**

```text
Here is a practice our teams follow: [describe, with its artifacts and
meetings]. Ask me ten questions I could put to team members to see whether they
understand the purpose, can name the outcome it should improve, and would
adapt it to their context. Add signs in the artifacts that suggest the practice
is performed for show. Do not judge individuals. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique d'adoption ou de changement.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'adoption mesure le comportement et le résultat, avec son vecteur de détournement et son garde-fou.

## Idées clés

- Jugez un changement par son résultat face à une comparaison, non par la diffusion de ses rituels.
- Écrivez le but et l'indicateur avant la pratique, et testez si les gens peuvent l'expliquer.
- Impliquez en continu les personnes touchées, et traitez la résistance comme de l'information.
- Préférez l'adoption volontaire, laissez les pratiques évoluer et suivez les retours en arrière.
- Comptez la charge de changement sur chaque équipe, et gardez-la dans un rythme soutenable.
- Rapportez honnêtement, y compris ce qui n'a pas marché, et retirez les pratiques qui ne servent plus.

## Références et lectures complémentaires

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
