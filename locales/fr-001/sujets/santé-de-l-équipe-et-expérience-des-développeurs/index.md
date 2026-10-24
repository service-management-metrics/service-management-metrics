# Santé de l'équipe et expérience des développeurs

**Les équipes font leur meilleur travail quand le retour est rapide, que la charge sur leur esprit est gérable et qu'elles peuvent trouver de longues plages de concentration : mesurez donc ces conditions avec l'équipe, supprimez les obstacles qu'elles révèlent, et n'utilisez jamais les chiffres pour classer les personnes.**

## Vue d'ensemble et motivation

Les principes du Manifeste agile demandent de bâtir les projets autour d'individus motivés, de leur donner l'environnement et le soutien dont ils ont besoin et de leur faire confiance pour atteindre l'objectif. Ils demandent aussi que les commanditaires, les développeurs et les utilisateurs puissent maintenir indéfiniment un rythme constant, et que l'équipe réfléchisse régulièrement à la manière de devenir plus efficace. Les mesures de santé de l'équipe et d'expérience des développeurs sont la manière dont ces principes deviennent vérifiables. Elles demandent ce que c'est de faire le travail ici, et ce qui fait obstacle.

L'[expérience des développeurs](https://en.wikipedia.org/wiki/Developer_experience) est la somme des interactions que les développeurs ont avec les outils, les processus et les personnes avec lesquels ils travaillent. L'idée est plus large que le génie logiciel. Les exploitants, le personnel du centre de services, les analystes et toute autre personne qui construit ou exploite un service ont une expérience de leur environnement. Ce sujet emploie « expérience des développeurs » pour les ingénieurs et « santé de l'équipe » pour le groupe plus large, et les mêmes mesures s'appliquent aux deux.

Deux cadres de recherche sont largement cités. Le cadre SPACE, publié par Nicole Forsgren et ses collègues en 2021, soutient que la [productivité](https://en.wikipedia.org/wiki/Productivity) des développeurs ne se réduit pas à un seul chiffre, et propose cinq dimensions : satisfaction et bien-être, performance, activité, communication et collaboration, et efficience et flow. Un suivi de 2023 par Abi Noda, Margaret-Anne Storey, Nicole Forsgren et Michaela Greiler, intitulé « DevEx: What Actually Drives Productivity », se concentre sur trois dimensions que les développeurs peuvent ressentir et que les organisations peuvent changer : les boucles de rétroaction, la charge cognitive et l'état de flow. Les deux articles recommandent de combiner des données d'enquête sur les perceptions avec des données des systèmes sur les flux de travail, et les deux mettent en garde contre l'usage d'une seule mesure, surtout d'un décompte d'activité, comme substitut de la productivité.

Les trois dimensions de DevEx sont un point de départ pratique.

- **Boucles de rétroaction.** À quelle vitesse une personne apprend-elle le résultat de ce qu'elle a fait ? Les constructions lentes, les tests lents, les revues lentes et les approbations lentes ajoutent chacune de l'attente, et l'attente brise la concentration. Un retour rapide est aussi un appui central de la livraison continue.
- **[Charge cognitive](https://en.wikipedia.org/wiki/Cognitive_load).** Combien une personne doit-elle garder en tête pour accomplir quelque chose ? Des systèmes compliqués, une documentation médiocre, une responsabilité floue et de nombreux outils élèvent la charge. La réduire libère de la capacité pour le travail qui compte.
- **[État de flow](https://en.wikipedia.org/wiki/Flow_(psychology)).** Une personne peut-elle trouver des plages ininterrompues pour se concentrer ? Les réunions, les notifications, les demandes non planifiées et le changement de contexte l'érodent tous.

Les mesures de ce domaine sont exceptionnellement faciles à détourner. Les décomptes de validations, de demandes de fusion, de tickets clos ou d'heures en ligne sont des mesures d'activité. Elles sont faciles à recueillir et disent peu de chose sur la capacité des gens à bien travailler, et elles invitent au détournement. Les mesures de perception sont subjectives et précieuses, et elles peuvent être faussées si les gens craignent les conséquences d'une réponse honnête. Toute mesure de personnes peut glisser vers la surveillance. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique avec une arête éthique : quand une mesure de personnes devient un objectif, les gens cessent de dire la vérité sur leur travail (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur l'expérience des utilisateurs internes décrite plus tôt (voir le sujet 6.4, Expérience des utilisateurs et des employés) et se poursuit dans les sujets suivants sur le bien-être, la collaboration, les compétences et l'amélioration.

## Principes clés

- **Mesurez les conditions, non les personnes.** Interrogez sur l'environnement et ses obstacles, et rapportez au niveau de l'équipe.
- **Combinez perception et données de flux de travail.** Ce que les gens ressentent et ce que les systèmes consignent manquent chacun une partie du tableau.
- **Laissez l'équipe détenir son bilan de santé.** Les personnes les plus proches du travail choisissent les questions et lisent d'abord les résultats.
- **N'utilisez jamais ces mesures pour classer ou évaluer des individus.** Cela mettrait fin aux réponses honnêtes.
- **Évitez les décomptes d'activité comme productivité.** Les décomptes de validations, de tickets ou d'heures ne sont pas des résultats.
- **Agissez visiblement sur ce que vous entendez.** Supprimez l'obstacle, ou dites pourquoi pas.
- **Protégez un rythme soutenable.** Une équipe qui tourne à plein régime indéfiniment emprunte à son avenir.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Durée des boucles de rétroaction | Temps pour qu'une personne obtienne le résultat d'une action courante, par type de boucle | médiane et 85e percentile des minutes ou des heures pour la construction, l'exécution des tests, l'attente de revue de code et le déploiement, par équipe | minutes ou heures | Horodatages du pipeline et de l'outil de revue, agrégés par équipe | Gestion des versions et des déploiements ; amélioration continue | Retour rapide dans la livraison continue | Hebdomadaire |
| Part du temps de concentration | Part du temps de travail en plages ininterrompues d'une longueur minimale convenue, telle que rapportée par l'équipe | heures en plages de concentration déclarées par l'équipe / heures de travail, recueillies dans un court sondage flash | pourcentage | Sondage flash d'équipe ; données de calendrier seulement si l'équipe y consent et si elles sont agrégées | Amélioration continue ; gestion des connaissances | Temps protégé pour le travail en profondeur | Mensuelle |
| Note de charge cognitive | Note de l'équipe sur la difficulté de comprendre et de modifier un système ou un processus nommé | note moyenne et dispersion sur une courte échelle convenue, par système | points d'échelle | Court sondage flash lié à un système ou à un processus | Conception des services ; gestion des connaissances | Compréhension partagée du travail | Trimestrielle |
| Délai de résolution des obstacles | Temps entre le moment où l'équipe soulève un obstacle et sa suppression ou une décision consignée de ne pas le supprimer | médiane et 85e percentile des jours entre le signalement et la résolution ou la décision | jours | Liste ou suivi des obstacles | Amélioration continue ; gestion des problèmes | Obstacles supprimés | Mensuelle |
| Tendance du bilan de santé de l'équipe | Note propre de l'équipe sur des dimensions qu'elle a choisies, suivie dans le temps | variation des notes des dimensions choisies par l'équipe entre les bilans | points d'échelle | Bilan de santé d'équipe, détenu par l'équipe | Amélioration continue | Réflexion de l'équipe sur la manière de devenir plus efficace | Mensuelle ou trimestrielle |
| Satisfaction envers les outils et les processus | Note de satisfaction de l'équipe envers les outils et processus qu'elle utilise chaque jour | note moyenne ou part favorable pour chaque outil ou processus nommé | points d'échelle ou pourcentage | Court sondage flash | Gestion des niveaux de service ; amélioration continue | Adéquation de l'environnement au travail | Trimestrielle |
| Couverture des dimensions | Nombre de dimensions SPACE couvertes par les mesures qu'une équipe utilise réellement | nombre des cinq dimensions avec au moins une mesure en usage | décompte (0 à 5) | Registre des métriques | Mesure et rapports ; gouvernance | Mesures équilibrées | Annuelle |

Agrégez tout au niveau de l'équipe et fixez une taille minimale de groupe, par exemple aucun résultat pour un groupe de moins de cinq personnes. Le temps de concentration est la description propre de l'équipe, et tout chiffre tiré du calendrier est facultatif, agrégé et convenu par l'équipe. Les durées des boucles de rétroaction viennent des systèmes et décrivent le pipeline, non les personnes. La couverture des dimensions est un contrôle du programme de mesure, destiné à empêcher de s'appuyer sur un seul type de mesure.

## Recommandations

### Partir des conditions dans lesquelles les gens travaillent

**1. Demandez à l'équipe ce qui la ralentit.** Commencez par une conversation, non par une enquête : qu'est-ce qui vous fait perdre du temps, qu'est-ce qui est difficile à comprendre et qu'est-ce qui vous interrompt le plus ? Notez les réponses dans les mots de l'équipe. La conversation trouve des problèmes qu'aucun tableau de bord ne montrerait, et elle construit la confiance dont les enquêtes ultérieures ont besoin. Convenez des deux ou trois éléments à mesurer.

**2. Utilisez les trois dimensions de DevEx comme grille.** Pour chacune des boucles de rétroaction, de la charge cognitive et de l'état de flow, choisissez une question de perception et, quand c'est possible, une mesure système. Pour les boucles de rétroaction, appariez « dans quelle mesure êtes-vous satisfait du temps que prennent les constructions ? » avec la durée de construction. Pour la charge cognitive, demandez à quel point il est difficile de comprendre et de modifier un système nommé. Pour le flow, demandez à quelle fréquence les gens peuvent travailler sans interruption. Appariez ce que disent les gens avec ce que consignent les systèmes, et regardez les divergences.

**3. Couvrez plusieurs dimensions de SPACE.** Choisissez des mesures dans au moins trois des cinq dimensions pour qu'aucun type de données ne domine. La satisfaction et le bien-être, la collaboration, et l'efficience et le flow comptent souvent le plus pour une équipe qui exploite des services. Traitez les mesures d'activité avec beaucoup de soin, et n'en usez que comme contexte. La mesure de couverture des dimensions garde cela honnête.

### Mesurer avec soin

**4. Laissez l'équipe détenir son bilan de santé et le lire en premier.** Un bilan de santé d'équipe est une courte auto-évaluation sur des dimensions que l'équipe choisit, comme le plaisir, le soutien, la vitesse, l'apprentissage et la facilité de mise en production. L'équipe lit et discute de ses propres résultats avant que quiconque voie un résumé. Les autres voient les tendances et les obstacles pour lesquels l'équipe demande de l'aide, non des scores à comparer. Cela garde l'outil comme une aide à l'apprentissage, et cela repose sur la [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), la croyance partagée que les gens ne seront pas punis pour avoir parlé.

**5. Chronométrez les boucles de rétroaction qui comptent.** Mesurez la durée des boucles dont les gens se plaignent : construction locale, suite de tests, attente de revue de code, déploiement vers un environnement de test. Rapportez la médiane et le 85e percentile, puisqu'une queue lente fait plus de mal que ne le laisse croire la moyenne. Partagez les chiffres avec l'équipe qui détient le pipeline, et faites de l'amélioration une part régulière du travail (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

**6. Protégez la concentration, et mesurez-la avec délicatesse.** Posez la question de la concentration dans le sondage flash, et regardez ce qui cause les interruptions : charge de réunions, notifications, demandes non planifiées. Si une équipe souhaite regarder les schémas de calendrier, faites-le avec son accord et agrégez les résultats. Ne suivez jamais l'activité ni la présence d'individus. Le but est de trouver les interruptions structurelles à supprimer, comme une réunion qui pourrait être un document.

**7. Suivez le délai de résolution des obstacles.** Gardez une liste visible des obstacles que l'équipe a soulevés, et mesurez le temps qu'ils prennent à être résolus ou écartés consciemment. Une longue liste qui ne raccourcit jamais apprend aux gens que soulever des problèmes est inutile. La décision de ne pas supprimer un obstacle, avec une raison, compte comme une résolution.

### Utiliser les résultats pour s'améliorer

**8. Agissez sur une ou deux choses à la fois.** Choisissez l'obstacle de plus grande valeur, supprimez-le et dites-le à l'équipe. Une action visible fait plus pour la confiance qu'un long rapport. Résistez à la tentation de lancer de nombreuses initiatives à la fois.

**9. Appariez les mesures de personnes avec des mesures de résultats.** Regardez comment les boucles de rétroaction et la charge cognitive se rapportent aux résultats de livraison et de stabilité (voir le sujet 2.8, Métriques DORA). Ne prétendez pas à une causalité à partir d'une corrélation dans vos propres données. Servez-vous de l'appariement pour trouver des questions à explorer, par exemple si les équipes aux revues plus lentes ont aussi des temps de cycle plus longs.

**10. Gardez les décomptes d'activité hors de la conversation.** Ne rapportez ni validations, ni lignes de code, ni tickets clos par personne. Les décomptes de productions de l'équipe peuvent être utiles pour le flux, mais ils disent peu de la santé. Si quelqu'un demande des métriques d'activité individuelles, expliquez la recherche et proposez plutôt des mesures de conditions.

### Protéger les personnes

**11. Fixez les règles de vie privée avant de recueillir.** Écrivez ce qui est recueilli, pourquoi, qui le voit, combien de temps c'est conservé et ce qui ne sera jamais fait avec. Agrégez au niveau de l'équipe, supprimez les petits groupes et laissez des représentants des personnes concernées revoir les règles. N'utilisez aucune de ces données dans les évaluations de performance, la promotion ou la discipline.

**12. Faites d'un rythme soutenable le défaut.** Surveillez les signes qu'une équipe tourne à plein régime : une longue série d'incidents hors des heures de travail, un état permanent d'urgence, des listes d'obstacles qui grossissent, une satisfaction qui baisse. Traitez-les comme des problèmes de système à corriger par le périmètre, les effectifs ou les priorités. Un rythme constant que les gens peuvent tenir est un objectif de conception, et il soutient la qualité, l'apprentissage et la rétention (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Durée des boucles de rétroaction | Exclure les cas lents ; mesurer une voie rapide que la plupart du travail n'emprunte pas | Rapporter le 85e percentile ; définir dans le registre le début et la fin de chaque boucle |
| Part du temps de concentration | Bloquer du temps de calendrier sans se concentrer ; rapporter une concentration gonflée pour plaire aux gestionnaires | Sondage flash détenu par l'équipe ; comparer avec les causes d'interruption ; aucun rapport individuel |
| Note de charge cognitive | Noter bas des systèmes pour éviter l'examen ; choisir des systèmes faciles à noter | Noter une liste fixe de systèmes ; comparer avec le temps d'accueil et les schémas d'incidents |
| Délai de résolution des obstacles | Clore des obstacles sans les corriger ; refuser de consigner les obstacles | L'équipe confirme la résolution ; taux d'obstacles rouverts |
| Tendance du bilan de santé de l'équipe | Des gestionnaires qui pressent pour de bons scores ; des équipes qui ajustent les scores pour éviter l'attention | L'équipe détient les résultats ; tendances partagées seulement avec le consentement de l'équipe |
| Satisfaction envers les outils et les processus | Interroger les utilisateurs contents ; former le personnel à bien répondre | Taux de réponse et composition ; lecture des commentaires ; lien avec les mesures système |
| Couverture des dimensions | Compter une dimension avec une mesure symbolique | Vérifier que chaque mesure comptée sert une décision |

Une lecture saine est des boucles de rétroaction plus courtes et plus stables, une charge cognitive en baisse sur les systèmes clés, des équipes qui déclarent une vraie concentration, des obstacles soulevés et résolus, des bilans de santé auxquels l'équipe fait confiance et aucun usage des données sur des individus.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enquêtes de perception | Captent ce que les systèmes ne peuvent pas ; faible coût | Subjectives ; vulnérables à la peur et à la fatigue |
| Mesures de flux de travail | Objectives ; continues | Manquent les sentiments et les causes ; risque de surveillance |
| Bilan de santé détenu par l'équipe | Honnête et utile à l'équipe | Difficile à comparer ; difficile à mettre à l'échelle |
| Enquête standard à l'échelle de l'entreprise | Comparable entre équipes | Moins pertinente ; utilisée pour classer |
| Décomptes d'activité | Faciles à recueillir | Mauvais substituts ; facilement détournés |
| Mesures centrées sur les conditions | Pointent des causes qu'on peut corriger | Demandent un effort de suivi |
| Sondages flash fréquents | Opportuns | Fatigue d'enquête |
| Enquête annuelle | Faible charge | Lente ; périmée |

La réponse en bref est de combiner des bilans de santé détenus par l'équipe et de courts sondages flash avec des mesures de flux de travail des boucles dont les gens se plaignent, d'éviter les décomptes d'activité et de garder la vie privée. Utilisez les comparaisons à l'échelle de l'entreprise avec parcimonie, et jamais pour classer des équipes.

## Questions à discuter avec votre équipe

**1. Quelle est la boucle de rétroaction la plus lente de notre journée de travail, et combien de temps prend-elle réellement ?**
Choisissez la boucle dont les gens se plaignent le plus. Chronométrez-la à partir des systèmes et comparez avec ce que disent les gens. L'animateur doit noter les surprises, dans un sens ou dans l'autre. Convenez d'un changement qui la raccourcirait, et de qui le détient.

**2. Quel système redoutons-nous de modifier, et qu'est-ce qui le rend difficile ?**
Nommez le système. La difficulté est-elle dans le code, la documentation, les outils ou la connaissance détenue par quelques têtes ? Demandez quelle amélioration unique abaisserait le plus la charge. Planifiez comment savoir si elle a marché.

**3. Quand chacun de nous a-t-il eu pour la dernière fois une longue plage de temps ininterrompu, et qu'est-ce qui a interrompu celles qui ont échoué ?**
Partagez honnêtement et sans blâme. Listez les interruptions et triez-les en structurelles (réunions, notifications, demandes non planifiées) et fortuites. Choisissez une interruption structurelle à réduire.

**4. Quel obstacle avons-nous soulevé plus d'une fois sans résultat ?**
Regardez la liste des obstacles. Pour chaque élément ancien, demandez qui pourrait le résoudre et ce qui le bloque. Si l'équipe a cessé de soulever des obstacles, discutez des raisons. Convenez d'en remonter un avec des preuves.

**5. Qu'est-ce qui nous ferait hésiter à donner une réponse honnête au bilan de santé ?**
Discutez des craintes sur l'usage possible des résultats. L'animateur doit consigner les préoccupations et convenir de règles : qui voit les données, ce qui ne sera jamais fait avec. Si les règles n'inspirent pas confiance, dites-le et décidez de ce qui gagnerait la confiance.

**6. Lesquelles de nos mesures pourraient monter pendant que le travail empire ?**
Listez les mesures et pensez aux façons dont chacune pourrait être améliorée sans aider personne. Attribuez un garde-fou à chacune. Retirez toute mesure qui ne sert aucune décision.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison savent mieux que quiconque ce qui les ralentit et détiennent leur propre bilan de santé. Elles doivent nommer les obstacles, chronométrer les boucles qu'elles maîtrisent et décider avec l'équipe quoi corriger en premier. Elles doivent résister à la pression de rapporter l'activité individuelle et insister sur des mesures au niveau de l'équipe.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent l'astreinte, les interruptions et le travail non planifié qui érodent la concentration et le rythme. Elles doivent soulever la charge structurelle comme un problème de système, mesurer les boucles de leurs propres outils et garder une rotation soutenable. Elles profitent de listes d'obstacles partagées avec les équipes de livraison, puisque bien des obstacles traversent la frontière.

### Direction et gouvernance

Les dirigeants fixent les conditions et décident de l'usage des données. Ils doivent financer les corrections que révèlent les mesures de conditions, protéger les règles de vie privée et demander des tendances et des obstacles plutôt que des scores à comparer. La gouvernance doit traiter une demande de métriques d'activité individuelles comme une raison de revoir les règles, et attendre que le travail d'amélioration soit visible.

### Clients et utilisateurs

Les utilisateurs profitent d'équipes qui peuvent travailler calmement et apprendre vite, car leurs problèmes sont bien résolus. Ils remarquent aussi quand une équipe est débordée : réponses plus lentes, erreurs répétées, fort roulement. Leur retour est une preuve de la santé de l'équipe vue de l'extérieur, et ils méritent de l'honnêteté sur la manière dont les corrections sont priorisées.

## En pratique : un exemple de gestion des services

Le groupe technologique d'un assureur national compte 14 équipes qui construisent et exploitent des services de polices et de sinistres. La direction demande un tableau de bord de productivité des développeurs. La première demande porte sur les validations et les tickets clos par personne. La responsable de l'efficacité de l'ingénierie propose une approche différente. Les chiffres ci-dessous sont illustratifs.

Elle commence par des conversations dans cinq équipes. Trois obstacles reviennent : la suite de tests prend 70 minutes, les revues de code attendent longtemps dans les équipes qui dépendent de deux réviseurs seniors, et personne ne se sent capable de modifier l'ancien service de calcul des sinistres. Elle mesure ce qu'elle peut à partir des systèmes. La boucle médiane de construction et de test est de 58 minutes, avec un 85e percentile de 92. L'attente médiane de la première revue est de 9 heures ouvrées et le 85e percentile de 31 heures. Elle ajoute un court sondage flash trimestriel avec les trois questions DevEx, avec un groupe minimal de rapport de cinq. La note de charge cognitive du service de calcul des sinistres est de 4,4 sur une échelle de cinq points où 5 est très difficile, contre 2,6 pour le portail des polices. Le temps de concentration déclaré par les équipes est d'environ 3 heures par jour, les réunions et les demandes non planifiées en étant les principales causes. Chaque équipe mène son propre bilan de santé sur des dimensions qu'elle a choisies, et ne lit que la tendance combinée.

Le groupe convient de quatre actions avec les équipes. La suite de tests est scindée et parallélisée, et le 85e percentile passe de 92 à 41 minutes en deux mois. Une rotation de revue répartit la charge au-delà des deux réviseurs seniors, et le 85e percentile de l'attente tombe à 14 heures. Trois équipes conviennent d'une plage hebdomadaire sans réunion, et une équipe refond la façon dont les demandes non planifiées lui parviennent. Le service de calcul des sinistres devient un projet d'apprentissage partagé, avec du travail en binôme et de la documentation, et sa note de charge cognitive tombe à 3,5 en deux trimestres. Le temps de concentration déclaré monte à environ 4 heures.

Quand un cadre supérieur redemande les décomptes de validations individuels, la responsable de l'efficacité de l'ingénierie explique la recherche SPACE et DevEx et propose le tableau de bord des conditions. La décision est consignée, avec les règles de vie privée qui disent que l'activité individuelle ne sera jamais utilisée dans les évaluations. Une équipe demande que les résultats de son bilan de santé ne soient pas résumés à l'intention de la direction ce trimestre, et la demande est accordée. L'attrition dans les équipes concernées baisse l'année suivante, et elle note qu'elle ne peut pas prouver le lien et ne le revendiquera pas.

## Agilité, IA, automatisation et analytique

### Agilité

Mesurez des conditions comme les boucles de rétroaction et le temps de concentration avec l'équipe, et supprimez les obstacles qu'elles révèlent. La précaution est que se servir des chiffres pour classer des personnes détruit les données.

### IA

Les assistants de codage et d'écriture par IA changent les boucles de rétroaction et la charge cognitive, en bien ou en mal. Interrogez l'équipe sur le bénéfice et le fardeau, et appariez l'usage avec la reprise et le bien-être. La précaution est que les statistiques d'usage rapportées par personne tournent à la surveillance.

### Automatisation

Automatisez le recueil des temps de construction, de test et de revue, et mesurez la chaîne d'outils sur sa lenteur et ses échecs. La précaution est que des outils rapides peuvent quand même cacher une organisation lente : combinez donc les données avec la conversation d'équipe.

### Analytique

Montrez les tendances par équipe avec le nombre de réponses, et fixez une taille minimale de groupe. La décision éclairée est quel obstacle supprimer ensuite. La précaution est que les petites équipes ne peuvent pas être anonymes.

## Éclairage sectoriel

**Startup.** Tout le monde connaît tout le monde : les conversations valent donc mieux que les enquêtes. Chronométrez les principales boucles de rétroaction, gardez des constructions rapides et guettez les signes de rythme insoutenable, car quelques personnes portent beaucoup. N'importez pas un grand programme d'enquête.

**Petite entreprise.** Une petite équipe peut être composée d'une ou deux personnes qui construisent et soutiennent à la fois. Leur principal risque est l'interruption et la dépendance envers des individus. Gardez une simple liste d'obstacles, assurez la couverture des absences et demandez-vous régulièrement ce qui fait obstacle. Les données au niveau individuel sont par nature identifiantes : appuyez-vous donc sur la conversation.

**Grande entreprise.** L'échelle donne de la variété et la tentation de comparer. Fournissez une boîte à outils commune (questions de sondage flash, chronométrage des boucles) tout en laissant les équipes détenir leurs bilans de santé. Agrégez avec soin, partagez les schémas entre équipes pour diffuser les corrections et gardez les classements à l'écart. Impliquez les comités d'entreprise ou les représentants des employés là où ils existent.

**Gouvernement et secteur public.** La passation de marchés, les règles de sécurité et les chaînes d'approbation allongent les boucles de rétroaction, et le personnel peut bénéficier de fortes protections contre la surveillance. Mesurez les boucles, impliquez des représentants dans la fixation des règles de données et servez-vous des constats pour simplifier les processus. Les fonctionnaires motivés par la valeur du service profitent d'une suppression visible des obstacles (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps des équipes pour les bilans de santé et les sondages flash, un peu d'instrumentation des pipelines et des outils de revue, un analyste ou un coach pour aider à interpréter les résultats et à animer, et le temps d'ingénierie pour supprimer les obstacles. La plupart de ces coûts sont faibles comparés au coût de boucles lentes multiplié par de nombreuses personnes.

Le rendement vient du temps récupéré, de moins de reprise, d'une meilleure rétention et d'un apprentissage plus rapide. Estimez-le à partir de vos propres données : les heures par semaine perdues à attendre les constructions et les revues dans le groupe, le coût d'embauche et d'accueil pour remplacer les personnes qui partent, et les schémas d'incidents ou de défauts liés aux équipes surchargées. Soyez prudent en transformant des minutes en argent, et énoncez les hypothèses. Évitez les affirmations d'études publiées sur les gains de productivité à moins de pouvoir en retracer la méthode et l'adéquation. Souvenez-vous du coût de se tromper : un programme perçu comme de la surveillance abîme la confiance et la qualité de chaque enquête ultérieure (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Des tableaux de bord de productivité individuelle.** Ils mesurent l'activité, invitent au détournement et abîment la confiance. Mesurez les conditions au niveau de l'équipe.
- **Utiliser les scores des bilans de santé pour comparer les équipes.** Les équipes gèrent alors le score. Laissez les équipes détenir leurs résultats.
- **Des enquêtes sans action.** Les gens cessent de répondre. Corrigez quelque chose de visible à chaque cycle.
- **Mesurer le temps en ligne ou la présence.** Cela récompense la visibilité et punit la concentration. Mesurez les boucles et les obstacles.
- **Une seule mesure pour tout.** Elle manque l'essentiel du tableau. Couvrez plusieurs dimensions.
- **Ignorer la queue.** Les médianes cachent les boucles lentes qui font mal. Rapportez les percentiles.
- **Blâmer les gens pour des problèmes de système.** Les obstacles sont généralement structurels. Corrigez la structure.
- **Faire du plein régime la norme.** L'urgence permanente épuise les gens. Traitez la surcharge durable comme un échec de la planification.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Comprendre les conditions | Anecdote | Enquête occasionnelle | Conversations et sondages flash réguliers sur les boucles de rétroaction, la charge et le flow | Données de perception et de flux de travail combinées, avec tendances au niveau de l'équipe | Vue partagée des conditions entre équipes et fournisseurs ; les équipes coconçoivent les mesures |
| Responsabilité et éthique | La direction lit tout | Soin informel | Bilans de santé détenus par l'équipe ; règles de vie privée écrites | Règles revues avec les représentants ; aucun usage individuel, strictement appliqué | Règles et pratiques auditées de façon indépendante ; les équipes contrôlent le partage des données |
| Action | Plaintes sans suite | Corrections ponctuelles | Liste d'obstacles avec responsables ; une ou deux corrections par cycle | Corrections suivies et reliées aux résultats ; rythme soutenable surveillé | Suppression des obstacles intégrée à la planification ; apprentissage largement partagé |

## Liste de vérification

- [ ] Les équipes ont dit dans leurs propres mots ce qui les ralentit.
- [ ] Au moins une question de perception et une mesure système couvrent chacune des boucles de rétroaction, de la charge cognitive et du flow.
- [ ] Les mesures viennent d'au moins trois dimensions SPACE.
- [ ] Chaque équipe détient son bilan de santé et lit d'abord les résultats.
- [ ] Les durées des boucles de rétroaction sont rapportées en médiane et 85e percentile.
- [ ] Une liste d'obstacles visible a des responsables, et le délai de résolution est suivi.
- [ ] Les résultats sont rapportés au niveau de l'équipe avec une taille minimale de groupe.
- [ ] Des règles de vie privée écrites énoncent que les données individuelles ne seront pas utilisées dans les évaluations.
- [ ] Les décomptes d'activité ne sont pas rapportés comme productivité.
- [ ] L'équipe voit au moins une correction par cycle.

## Prompts d'IA

**Rédigez des questions de sondage flash pour les trois dimensions de DevEx.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Analysez les schémas de la liste d'obstacles.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Rédigez des règles de vie privée pour un programme de santé d'équipe.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Comparez les conditions avec les résultats.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de santé d'équipe ou d'expérience des développeurs.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique relative aux personnes porte son vecteur de détournement, son garde-fou et ses règles de vie privée.

## Idées clés

- Mesurez les conditions dans lesquelles les gens travaillent : boucles de rétroaction, charge cognitive et flow.
- Combinez ce que disent les gens avec ce que consignent les systèmes, et regardez les divergences.
- Laissez les équipes détenir leurs bilans de santé, rapportez au niveau de l'équipe et n'utilisez jamais les données sur des individus.
- Évitez les décomptes d'activité comme substitut de la productivité.
- Agissez visiblement sur un ou deux obstacles à la fois, et suivez le temps que prennent les obstacles à être résolus.
- Protégez un rythme que l'équipe peut soutenir indéfiniment.

## Références et lectures complémentaires

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
