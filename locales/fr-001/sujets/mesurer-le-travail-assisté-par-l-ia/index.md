# Mesurer le travail assisté par l'IA

**Jugez le travail assisté par l'IA par ce qui survit à la revue, à la production et au prochain contact de l'utilisateur, non par la vitesse à laquelle il est apparu, et continuez de vérifier si les personnes qui le font apprennent encore.**

## Vue d'ensemble et motivation

Une fois qu'une équipe utilise des outils d'IA tous les jours, la question centrale passe de « devrions-nous ? » à « qu'obtenons-nous ? ». Le sujet précédent a posé les fondations : références, comparaisons et coût complet (voir le sujet 10.1, L'IA dans la mesure de la gestion des services). Ce sujet entre dans le travail lui-même. Comment savoir si le code, les tickets, les documents et les décisions assistés par l'IA sont aussi bons, meilleurs ou pires que le travail qu'ils remplacent, et que devient la personne qui le fait ?

L'assistance par l'IA touche de nombreuses sortes de travail. En livraison logicielle, les outils suggèrent ou génèrent du code, des tests, des messages de validation et des commentaires de revue. En exploitation des services, ils résument les incidents, proposent des causes, rédigent des réponses et écrivent des articles de connaissances. En analyse, ils produisent des rapports et des requêtes. Le trait commun est que produire une première version plausible devient bon marché. Les coûts se déplacent ailleurs : lire et juger la production, corriger ce qui est faux, maintenir ce qui a été généré et apprendre assez pour connaître la différence.

Plusieurs effets rendent la mesure délicate.

- **Les décomptes de production induisent en erreur.** Les [lignes de code](https://en.wikipedia.org/wiki/Lines_of_code) ont toujours été une mauvaise mesure de la productivité, et le code généré l'aggrave. Plus de code, c'est plus à lire, à tester et à maintenir. Les décomptes de lignes générées, de suggestions acceptées ou de brouillons disent peu de la valeur.
- **La revue devient le goulot d'étranglement.** La [revue de code](https://en.wikipedia.org/wiki/Code_review) et la revue d'autres travaux générés prennent du temps, et un flux de changements plus gros et plus fréquents peut surcharger les réviseurs. Les grandes [demandes de fusion](https://en.wikipedia.org/wiki/Pull_request) sont plus difficiles à bien revoir, et un réviseur surchargé est plus susceptible d'approuver ce qu'il n'a pas compris. Les mesures de revue et de flux vues plus tôt restent essentielles (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).
- **Les problèmes de qualité arrivent tard.** Le code généré peut passer les tests aujourd'hui et porter du [code dupliqué](https://en.wikipedia.org/wiki/Duplicate_code), une structure peu claire ou des défauts cachés qui apparaissent sous forme de coût de maintenance, une forme de [dette technique](https://en.wikipedia.org/wiki/Technical_debt). Les mesures prises au moment de la création les manquent. Regardez ce qu'il advient du travail ensuite.
- **Les compétences peuvent changer.** S'appuyer sur un outil pour des tâches qu'on faisait soi-même est une forme de [délestage cognitif](https://en.wikipedia.org/wiki/Cognitive_offloading), qui peut libérer l'attention pour des problèmes plus difficiles ou mener à une [perte de compétences](https://en.wikipedia.org/wiki/Deskilling) si la compréhension sous-jacente s'estompe. Les deux sont possibles, et le résultat dépend de la manière dont les outils sont utilisés. Cela compte pour les personnes concernées et pour la capacité de l'équipe à traiter les situations que l'outil ne peut pas gérer.

Les preuves sur l'effet de l'assistance par l'IA sur la productivité sont encore en développement, et elles varient avec la tâche, l'expérience de l'utilisateur, l'outil et le cadre. Certaines études contrôlées de tâches de codage ont trouvé un achèvement plus rapide sur des tâches bien définies, et d'autres études et rapports ont trouvé des gains moindres ou nuls, ou des coûts supplémentaires, pour des personnes expérimentées travaillant sur des systèmes complexes qu'elles connaissent bien. Ce livre n'offre aucun chiffre. La position responsable pour une équipe est de mesurer son propre travail, avec des références et une comparaison, et de traiter tout chiffre publié comme une étude dans un contexte particulier.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est particulièrement important ici, car la pression de montrer des gains est forte et les chiffres faciles sont les trompeurs. Les mesures ci-dessous suivent ce qui survit, non ce qui est produit (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurez ce qui survit.** La rétention, la reprise et les défauts échappés en disent plus que la production.
- **Surveillez la revue.** Le flux de travail assisté par l'IA est limité par la qualité avec laquelle les gens peuvent le lire.
- **Comparez des choses comparables.** Le travail assisté et non assisté doit être semblable par nature et difficulté.
- **Regardez plus tard autant que maintenant.** Les problèmes de qualité et les coûts de maintenance apparaissent des semaines ou des mois après la création.
- **Gardez la compréhension dans la boucle.** La personne qui livre le travail doit pouvoir l'expliquer.
- **Protégez les compétences et l'apprentissage.** Remarquez ce que les gens peuvent encore faire sans l'outil.
- **Agrégez ; ne surveillez pas les individus.** Les données sur qui utilise l'IA et comment servent à améliorer le processus, non à classer les gens.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de rétention | Part des changements assistés par l'IA qui restent substantiellement inchangés après une période énoncée | changements assistés par l'IA dont moins d'une part fixée est modifiée ou annulée après 30 jours / changements assistés par l'IA fusionnés il y a 30 jours | pourcentage | Historique du contrôle de version joint aux étiquettes d'assistance, au niveau de l'équipe | Gestion des versions et des déploiements ; maîtrise des changements | Travail qui tient ; peu de reprise | Mensuelle |
| Reprise après fusion | Part des changements nécessitant une correction de suivi dans une courte période, pour les changements assistés et de comparaison | changements avec une correction de suivi liée dans les 14 jours / changements fusionnés, par groupe | pourcentage | Contrôle de version, suivi des tickets, enregistrements de changements | Maîtrise des changements ; gestion des problèmes | Défauts échappés ; reprise | Mensuelle |
| Charge de revue | Effort du réviseur par changement, pour les changements assistés et de comparaison | médiane et 85e percentile du temps de revue et des tours de revue par changement, par groupe | heures ; tours | Horodatages de l'outil de revue, agrégés par équipe | Gestion des versions et des déploiements | La revue comme retour et apprentissage | Mensuelle |
| Taux de défauts échappés | Défauts trouvés en production par changement, pour les changements assistés et de comparaison | défauts trouvés après la mise en production attribués à un changement / changements mis en production, par groupe | défauts par changement | Suivi des défauts relié aux changements | Gestion des incidents ; gestion des problèmes | Qualité de ce qui est mis en production | Trimestrielle |
| Taux de réussite du contrôle d'explication | Part des changements assistés par l'IA échantillonnés dont l'auteur peut expliquer l'approche et ses compromis en revue | changements échantillonnés où l'auteur a expliqué à la satisfaction du réviseur / changements échantillonnés | pourcentage | Notes de revue échantillonnées | Gestion des connaissances ; maîtrise des changements | Compréhension partagée du code | Trimestrielle |
| Qualité du soutien assisté | Taux de réouverture et satisfaction des utilisateurs pour les réponses de soutien assistées par l'IA comparés aux réponses non assistées | tickets assistés rouverts / tickets assistés, et notes favorables / notes, par groupe | pourcentage | Outil ITSM, enquête | Centre de services ; gestion des incidents | Qualité des résultats de service | Mensuelle |
| Note de confiance sans assistance | Note de l'équipe sur sa confiance à accomplir les tâches clés sans l'outil | note moyenne et dispersion sur une échelle convenue, par équipe | points d'échelle | Sondage flash d'équipe anonyme | Gestion de la main-d'œuvre et des talents ; gestion des connaissances | Capacité et apprentissage de l'équipe | Trimestrielle |

Étiquetez de façon fiable l'assistance par l'IA au niveau de l'équipe, par les journaux d'outils ou une convention légère, et énoncez comment les changements de comparaison sont choisis : semblables par taille, domaine et risque. La rétention mesure un changement substantiel, avec un seuil fixé dans le registre. La reprise après fusion relie une correction de suivi au changement d'origine par une règle énoncée. La charge de revue est l'effort du réviseur, non de l'auteur, et n'inclut que le temps de revue actif quand il est mesurable. Les données au niveau individuel ne sont jamais rapportées. Les échantillons du contrôle d'explication sont choisis au hasard, et le contrôle est une conversation pour soutenir l'apprentissage, non un test d'une personne.

## Recommandations

### Suivre le travail après sa création

**1. Suivez ce qu'il advient du travail assisté dans le temps.** Pour le code, suivez les changements pendant les semaines qui suivent la fusion : restent-ils, sont-ils corrigés ou annulés ? Pour le soutien, suivez les tickets après la réponse : sont-ils rouverts ou suivis de contacts répétés ? Pour les documents, vérifiez s'ils sont utilisés, corrigés ou ignorés. La rétention et la reprise sont des signaux de qualité simples et difficiles à falsifier.

**2. Comparez avec un travail semblable non assisté.** Choisissez un travail de comparaison de taille, de risque et de domaine semblables, de la même période. La difficulté compte : les gens peuvent utiliser l'IA pour des tâches faciles, ce qui flatterait l'outil, ou pour des tâches difficiles, ce qui le punirait. Énoncez comment les tâches en viennent à être assistées, et ajustez ou nuancez en conséquence. Une petite comparaison honnête vaut mieux qu'une grande comparaison confondue (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**3. Incluez les mesures en aval dans l'ensemble standard.** Appariez toute mesure de vitesse avec le taux d'échec des changements, les défauts échappés et les mesures de stabilité déjà en usage (voir le sujet 2.8, Métriques DORA). Un gain de vitesse avec une stabilité en baisse est un transfert de coût vers l'exploitation et les utilisateurs. Rapportez le couple ensemble.

### Garder la revue significative

**4. Surveillez la charge et la taille de la revue.** Mesurez le temps de revue, les tours de revue et la taille des changements pour le travail assisté et non assisté. Si les changements assistés sont plus gros ou plus nombreux, les réviseurs peuvent être surchargés. Fixez des normes de taille des changements et limitez la quantité de matière générée qui peut entrer dans une revue. La capacité de revue fait partie de la capacité du système (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

**5. Demandez aux auteurs d'expliquer.** Faites-en une habitude : l'auteur d'un changement peut expliquer ce qu'il fait, pourquoi cette approche et quels sont les compromis. Une courte conversation de soutien en revue suffit. Échantillonnez chaque trimestre des contrôles d'explication pour voir si la compréhension suit la production. Là où des auteurs ne peuvent pas expliquer, traitez-le comme un signal de ralentir et d'apprendre, non comme un manquement de la personne.

**6. Gardez-vous du biais d'automatisation.** Encouragez les réviseurs à lire le travail assisté aussi de façon critique que tout autre. Faites tourner les réviseurs, semez à l'occasion des problèmes connus dans un changement de test pour vérifier la détection, et poursuivez l'échantillonnage des productions par des réviseurs indépendants. Un taux d'acceptation très élevé avec une reprise croissante est un avertissement (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

### Veiller à la qualité et à la maintenance

**7. Surveillez la structure du code et du système.** Suivez la duplication, la complexité, la couverture de tests et le rythme de changement dans les zones où l'assistance est importante. Utilisez les mesures que vous avez déjà pour les [tests logiciels](https://en.wikipedia.org/wiki/Software_testing) et la santé du code, et regardez les tendances. Une duplication croissante ou une efficacité des tests en baisse peut signaler que du code généré est accepté sans intégration à la conception. La couverture des [tests de non-régression](https://en.wikipedia.org/wiki/Regression_testing) est un filet de sécurité, et sa solidité compte davantage quand le volume de changements monte.

**8. Traitez les tests générés avec soin.** L'IA peut écrire rapidement beaucoup de tests, et des tests peuvent passer sans rien vérifier de significatif. Échantillonnez les tests générés pour leur valeur, et mesurez l'efficacité des tests par des méthodes comme vérifier si les tests échouent quand on casse délibérément le comportement. Ne comptez pas les tests écrits comme une mesure de qualité.

**9. Surveillez la qualité du soutien assisté.** Pour le centre de services et l'exploitation, mesurez le taux de réouverture, les contacts répétés, la satisfaction et l'exactitude des réponses échantillonnées pour les réponses assistées par rapport aux non assistées. Une réponse plus rapide qui renvoie l'utilisateur est plus lente au total. Lisez les commentaires des utilisateurs sur les réponses assistées, et regardez si les utilisateurs savent qu'ils ont affaire à une IA quand cela compte (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Protéger les personnes et les compétences

**10. Remarquez ce que les gens peuvent encore faire.** Demandez aux équipes leur confiance à accomplir les tâches clés sans l'outil et suivez la tendance. Utilisez à l'occasion une pratique sans assistance, le travail en binôme et des revues de la conception sous-jacente pour garder les compétences vivantes. Protégez particulièrement l'apprentissage des plus récents membres de l'équipe, qui peuvent utiliser l'outil avant d'avoir construit les modèles mentaux sur lesquels les collègues expérimentés s'appuient pour en juger (voir le sujet 9.4, Métriques de compétences et d'apprentissage).

**11. Gardez les données sur les personnes hors de l'évaluation.** Agrégez au niveau de l'équipe. Ne rapportez pas quels individus utilisent le plus l'IA, et n'utilisez ni l'usage, ni le taux d'acceptation, ni le volume généré dans les évaluations de performance. Faites connaître les règles. La confiance est nécessaire pour des rapports honnêtes sur ce qui marche et ne marche pas.

**12. Revisitez régulièrement.** Les outils, les modèles et les pratiques changent en quelques mois. Refaites la comparaison quand l'outil ou la façon de travailler change. Partagez les constats, y compris qu'un outil n'a pas aidé ici, et retirez les usages qui ne méritent plus leur place.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de rétention | Éviter les changements nécessaires pour garder le chiffre ; n'étiqueter que les changements réussis comme assistés | Étiqueter par les journaux d'outils, non par le choix de l'auteur ; apparier avec les défauts échappés et la reprise |
| Reprise après fusion | Corriger dans un autre ticket ou un nouveau changement non lié ; retarder les corrections au-delà de la fenêtre | Règle de liaison dans le registre ; regarder une fenêtre plus longue ; défauts en production |
| Charge de revue | Revues bâclées qui abaissent le temps mesuré ; approbations sans commentaires | Échantillon de profondeur de revue ; défauts échappés ; enquête auprès des réviseurs |
| Taux de défauts échappés | Ne pas attribuer les défauts aux changements ; reclasser les défauts comme évolutions | Règle d'attribution ; échantillon indépendant de classification des défauts |
| Taux de réussite du contrôle d'explication | Auteurs qui répètent pour le contrôle ; réviseurs indulgents | Échantillons aléatoires non annoncés ; rotation des réviseurs ; accent sur les raisons de conception |
| Qualité du soutien assisté | N'assister que les tickets faciles ; coacher les utilisateurs pour qu'ils notent bien | Apparier les tickets par type et difficulté ; taux de réponse et composition ; lecture des commentaires |
| Note de confiance sans assistance | Notes gonflées pour éviter l'examen ; notes basses pour plaider pour plus d'outils | Anonymat ; comparer avec la pratique observée dans les exercices ; lecture des commentaires |

Une lecture saine est un travail assisté qui reste en place aussi souvent que le travail non assisté, une reprise et des défauts échappés égaux ou meilleurs que la comparaison, une revue qui reste profonde, des auteurs qui peuvent expliquer ce qu'ils livrent, un soutien assisté qui ne revient pas et des équipes qui restent confiantes dans leurs propres compétences.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesurer le volume de production | Facile | Récompense le volume ; ne dit rien de la valeur |
| Mesurer la rétention et la reprise | Reflète la qualité dans le temps | Différée ; demande de relier les enregistrements |
| Comparaison contrôlée | Crédible | Demande de l'effort ; peut être impraticable |
| Comparaison observationnelle | Peu coûteuse | Confondue par le choix des tâches |
| Contrôles d'explication obligatoires | Maintiennent la compréhension | Peuvent ressembler à un test ; ajoutent de l'effort |
| Contrôles légers par échantillon | Faible charge | Peuvent manquer des schémas |
| Fortes restrictions de l'usage de l'IA | Maîtrise du risque | Bénéfice perdu ; usage clandestin |
| Usage ouvert avec mesure | Apprentissage et bénéfice | Demande confiance et discipline |

La réponse en bref est d'autoriser l'usage dans des règles claires, de mesurer ce qui survit, d'échantillonner pour la compréhension, de protéger la capacité de revue et les compétences, et de garder les données sur les personnes hors de l'évaluation.

## Questions à discuter avec votre équipe

**1. Quelle part de ce que l'IA nous a aidés à produire le trimestre dernier est encore en place, inchangée, et comment le savons-nous ?**
Regardez la rétention et la reprise des changements assistés face à un ensemble comparable. L'animateur doit consigner la difficulté de la réponse. Convenez de la manière d'étiqueter et de relier les enregistrements pour que la réponse soit facile le trimestre suivant.

**2. La revue suit-elle, et que se passe-t-il quand ce n'est pas le cas ?**
Regardez les temps de revue, les tours et les tailles. Demandez aux réviseurs ce qu'ils ressentent face aux changements assistés. Discutez de limites de taille et de moyens de partager la charge. Convenez d'une norme à essayer.

**3. Chacun de nous pourrait-il expliquer le dernier changement que nous avons livré avec l'aide de l'IA, et ses compromis ?**
Essayez-le en binôme. Remarquez où l'explication était facile et où elle était difficile. Discutez de ce que cela dit de notre usage de l'outil, et de la manière de maintenir la compréhension.

**4. Que pouvons-nous encore bien faire sans l'outil, et de quoi perdons-nous le coup de main ?**
Listez les tâches clés, notez honnêtement la confiance et planifiez un peu de pratique sans assistance ou de travail en binôme. La conversation fait aussi apparaître ce que les gens valorisent dans leur travail et veulent garder.

**5. Où l'IA nous a-t-elle le plus et le moins aidés, et qu'ont ces endroits en commun ?**
Comparez des exemples. Cherchez des traits comme des tâches bien définies, de bons tests ou des domaines familiers. Servez-vous des constats pour guider où utiliser l'outil.

**6. Que mesurerions-nous si nous ne faisions pas confiance à nos premières impressions ?**
Demandez au groupe de nommer les preuves qui lui feraient changer d'avis sur l'outil dans un sens ou dans l'autre. Servez-vous des réponses pour définir la prochaine comparaison.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent l'expérience quotidienne et les résultats de qualité. Elles doivent étiqueter le travail assisté, surveiller la rétention et la reprise, garder une revue significative et maintenir leur propre compréhension. Elles doivent parler quand le volume de changements générés dépasse leur capacité à les revoir.

### Équipes de service et d'exploitation

Les équipes d'exploitation utilisent l'IA pour les résumés, le diagnostic et les réponses, et elles héritent des problèmes de qualité qui s'échappent. Elles doivent échantillonner les productions, comparer les taux de réouverture et de contacts répétés et garder une claire responsabilité humaine pour les actions en production. Elles doivent aider à définir où l'IA ne doit pas agir sans une personne.

### Direction et gouvernance

Les dirigeants subissent la pression de montrer des gains et peuvent être tentés par les métriques d'usage et de production. Ils doivent insister sur la rétention, la reprise et les mesures de stabilité à côté de la vitesse, financer la capacité de revue, protéger le développement des compétences et résister au classement des personnes. La gouvernance doit attendre des comparaisons et des réserves dans les rapports de bénéfices de l'IA.

### Clients et utilisateurs

Les utilisateurs reçoivent les résultats : le code qui fait tourner leurs services, les réponses à leurs demandes, les documents sur lesquels ils s'appuient. Ils en profitent quand la qualité tient et en souffrent quand elle ne tient pas. Ils doivent pouvoir joindre une personne, et leur retour sur les interactions assistées est une preuve clé de la qualité.

## En pratique : un exemple de gestion des services

Le groupe numérique d'une compagnie aérienne européenne compte six équipes produit qui construisent et exploitent des logiciels de réservation et d'exploitation. Les équipes ont commencé à utiliser un assistant de codage par IA il y a un an, et le tableau de bord du groupe rapporte que 38 % des lignes fusionnées sont générées par l'IA. Les chiffres ci-dessous sont illustratifs.

La responsable de l'excellence en ingénierie est mal à l'aise face à ce tableau de bord. Elle demande à trois équipes d'étiqueter les changements assistés par les journaux de l'outil, au niveau de l'équipe seulement, et de choisir des changements de comparaison de taille et de domaine semblables. Sur un trimestre, le temps médian entre la première validation et la fusion est plus court pour les changements assistés, 1,4 jour contre 2,0. Le taux de rétention des changements assistés après 30 jours est de 81 % contre 90 % pour les changements de comparaison, et 12 % des changements assistés ont nécessité une correction de suivi dans les 14 jours contre 7 %. La charge de revue raconte la même histoire : le temps de revue médian par changement est plus élevé de 35 % pour les changements assistés, et le 85e percentile de la taille des changements a grandi. Les défauts échappés pour 100 changements sont légèrement plus élevés pour les changements assistés, bien que l'échantillon soit petit et que l'écart reste dans la variation normale. Un échantillon de 40 changements assistés montre que dans 31 cas l'auteur pouvait bien expliquer l'approche et ses compromis, dans 6 en partie, et dans 3 pas du tout, surtout dans des zones de code nouvelles pour l'auteur. Au centre de services, les réponses assistées ont un taux de réouverture de 7 % contre 6 % pour les non assistées, avec une satisfaction semblable. Dans un sondage flash d'équipe, les ingénieurs plus récents notent leur confiance à implémenter les fonctionnalités de base sans l'outil à 2,6 sur 5, contre 4,1 pour les ingénieurs ayant plus de trois ans dans le groupe.

La responsable de l'excellence en ingénierie porte les résultats aux équipes et ne les classe pas. Les équipes conviennent de quatre changements. Des limites de taille des changements et une rotation de revue protègent les réviseurs. Les auteurs expliquent brièvement en revue les changements assistés. Les ingénieurs plus récents travaillent en binôme avec des expérimentés pour les fonctionnalités de base, et un exercice mensuel sans assistance garde les compétences en pratique. Le tableau de bord abandonne la part de lignes générées et montre la rétention, la reprise, la charge de revue et les défauts échappés, assistés face à la comparaison. Trois mois plus tard, l'écart de rétention se resserre à 4 points, les corrections de suivi tombent à 8 % et le contrôle d'explication s'améliore. Un vice-président demande que la part de lignes générées soit un objectif pour chaque équipe. La responsable de l'excellence en ingénierie explique les constats et propose de continuer à suivre les résultats, ajoutant que les gains sont réels pour certaines tâches et pas pour d'autres, et que l'équipe décidera où utiliser l'outil. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Un rythme soutenable et des personnes motivées incluent la protection de la compréhension : revoyez donc le travail assisté par l'IA avec l'équipe à cadence régulière et regardez ce qui a survécu. La précaution est que mesurer l'usage individuel de l'IA transforme une pratique d'équipe en surveillance.

### IA

Jugez le travail assisté par l'IA par ce qui survit à la revue et à la production, et par le fait que les gens comprennent encore ce qu'ils livrent. Appariez la rétention et la reprise avec un contrôle d'explication et une note de confiance sans assistance, et gardez les données au niveau de l'équipe. La précaution est que des brouillons rapides déplacent l'effort vers les réviseurs : mesurez donc aussi la charge de revue.

### Automatisation

Étiquetez automatiquement les changements assistés par l'IA là où l'outillage le permet, et mesurez l'étiquetage sur sa couverture, car le travail non étiqueté brise la comparaison. La précaution est que les étiquettes automatiques peuvent être retirées ou manquées : échantillonnez donc.

### Analytique

Comparez le travail assisté par l'IA et les autres travaux sur les mêmes mesures, avec les décomptes et l'incertitude. La décision éclairée est où l'aide de l'IA est réelle et où elle ajoute de la reprise. La précaution est que les deux groupes de travail peuvent différer par nature : évitez donc les affirmations causales tirées d'une comparaison grossière.

## Éclairage sectoriel

**Startup.** De petites équipes peuvent beaucoup gagner à l'assistance et aussi accumuler vite une dette cachée. Suivez tôt la rétention et la reprise, gardez des tests significatifs et assurez-vous que les personnes qui maintiendront le système le comprennent. Méfiez-vous de livrer du code que personne ne peut expliquer.

**Petite entreprise.** L'assistance peut étirer une toute petite équipe. Mesurez sur un petit échantillon : à quelle fréquence le travail assisté demande des corrections plus tard. Gardez les sauvegardes, les tests et la revue humaine de tout ce qui est visible par le client, et protégez la compréhension qu'a le propriétaire des systèmes dont il dépend.

**Grande entreprise.** L'échelle amplifie les gains comme les problèmes. Fournissez des orientations communes sur l'étiquetage, les limites de revue et les mesures, comparez les équipes avec soin sans les classer et investissez dans la capacité de revue et de test. Incluez dans le pipeline la revue de sécurité et de licences du code généré (voir le sujet 7.2, Métriques des actifs logiciels et des licences).

**Gouvernement et secteur public.** Les systèmes publics ont une longue vie, une redevabilité stricte et de lourdes conséquences en cas d'erreur. Exigez une responsabilité humaine traçable, des tests soignés et une documentation de la manière dont l'IA a été utilisée. Consignez le travail assisté dans les enregistrements de changements, et évaluez les risques pour l'équité et la sécurité (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'outillage et les frais d'usage, l'effort d'étiqueter et de relier les enregistrements, le temps de revue et de correction, les tests supplémentaires et la formation. Une étude de comparaison prend du temps, mais elle coûte peu relativement à une mauvaise décision de passer à l'échelle ou d'interdire.

Les rendements sont réels là où l'assistance réduit l'effort sans réduire la qualité, et sont perdus là où elle déplace l'effort vers la revue, la reprise et la maintenance. Construisez le dossier à partir de vos propres mesures : temps jusqu'à un changement fusionné et conservé, reprise et défauts échappés face à la comparaison, charge de revue et satisfaction des utilisateurs et du personnel. Évitez d'utiliser des chiffres de productivité publiés comme estimation. Souvenez-vous des coûts cachés : compréhension réduite, perte de compétences et dette technique. Soyez honnête sur l'incertitude (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Compter les lignes générées ou les suggestions acceptées.** Elles récompensent le volume. Mesurez ce qui survit.
- **Comparer du travail assisté sur des tâches faciles à du travail non assisté sur des tâches difficiles.** Le résultat flatte ou punit l'outil. Appariez les tâches.
- **Laisser la capacité de revue prendre du retard.** La qualité baisse silencieusement. Limitez la taille des changements et protégez les réviseurs.
- **Sauter les mesures en aval.** Le coût apparaît plus tard. Suivez la reprise, les défauts et la stabilité.
- **Traiter les tests générés comme de la qualité.** Ils peuvent passer sans rien vérifier. Testez les tests.
- **Ignorer les compétences.** La compréhension s'estompe sans qu'on le remarque. Suivez la confiance sans assistance et la pratique.
- **Surveiller les individus.** Cela engendre la peur et cache les problèmes. Gardez les données au niveau de l'équipe.
- **Proclamer la victoire sur une étude courte et petite.** Refaites-la à mesure que les outils et les pratiques changent.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Mesurer ce qui survit | Décomptes de production | Impressions informelles de qualité | Travail assisté étiqueté ; rétention et reprise suivies face à la comparaison | Défauts en aval, stabilité et charge de revue gérés ensemble | Les preuves entre équipes guident où l'assistance est utilisée ; résultats largement partagés |
| Revue et compréhension | Revue comme avant | Inquiétude sur la surcharge | Normes de taille des changements ; contrôles d'explication échantillonnés | Capacité de revue planifiée ; biais d'automatisation contré | Revue et compréhension intégrées à la manière dont toutes les équipes travaillent avec l'IA |
| Personnes et compétences | Non considérées | Anecdotes | Confiance sans assistance sondée ; un peu de pratique | Développement des compétences planifié ; tendances gérées | Apprentissage et métier protégés dans l'organisation ; usage de l'IA coconçu avec le personnel |

## Liste de vérification

- [ ] Le travail assisté par l'IA est étiqueté au niveau de l'équipe par les journaux d'outils ou une convention légère.
- [ ] Un travail de comparaison de taille, de domaine et de risque semblables est défini.
- [ ] La rétention et la reprise après fusion sont suivies pour le travail assisté et de comparaison.
- [ ] Les défauts échappés et le taux d'échec des changements sont rapportés à côté de toute mesure de vitesse.
- [ ] Le temps de revue, les tours et la taille des changements sont surveillés, avec des normes de taille.
- [ ] Les auteurs peuvent expliquer les changements assistés, et un échantillon est contrôlé chaque trimestre.
- [ ] Les tests générés sont échantillonnés pour leur valeur.
- [ ] Le soutien assisté est comparé sur le taux de réouverture, les contacts répétés et la satisfaction.
- [ ] La confiance sans assistance est sondée, et la pratique sans assistance est planifiée.
- [ ] Les données individuelles d'usage et d'acceptation ne sont pas utilisées dans l'évaluation.

## Prompts d'IA

**Planifiez une comparaison de changements assistés et non assistés.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Concevez un contrôle d'explication.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Passez en revue les mesures en aval.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Planifiez une pratique sans assistance.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une mesure du travail assisté par l'IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique du travail assisté par l'IA mesure ce qui survit et porte son vecteur de détournement et son garde-fou.

## Idées clés

- Mesurez ce qui survit : rétention, reprise, défauts échappés et stabilité, face à un travail comparable non assisté.
- Protégez la capacité de revue et gardez la revue profonde, car elle limite la vitesse à laquelle le travail assisté peut circuler en sécurité.
- Vérifiez que les auteurs peuvent expliquer ce qu'ils livrent, et remarquez si les compétences grandissent ou s'estompent.
- Échantillonnez les tests et les productions générés pour leur vraie valeur.
- Lisez les affirmations de productivité publiées comme des études uniques, et mesurez votre propre travail.
- Gardez les données d'usage individuel hors de l'évaluation.

## Références et lectures complémentaires

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
