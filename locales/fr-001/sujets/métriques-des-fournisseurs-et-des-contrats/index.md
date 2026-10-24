# Métriques des fournisseurs et des contrats

**Les fournisseurs font partie de votre service : mesurez donc ce qu'ils livrent, à quel point vous dépendez d'eux et si vous pourriez les quitter, et bâtissez la relation autour de résultats partagés et d'une conversation régulière, non autour de pénalités et de surprises.**

## Vue d'ensemble et motivation

Presque aucun service n'est construit et exploité par une seule équipe. Des fournisseurs d'infonuagique l'hébergent, des éditeurs fournissent les logiciels, des prestataires dotent le centre de services, une société de télécommunications achemine le trafic et un partenaire de paiement fait circuler l'argent. Quand l'un d'eux défaille, vos utilisateurs ne distinguent pas votre défaillance de la sienne. La [gestion des fournisseurs](https://en.wikipedia.org/wiki/Vendor_management) est la discipline qui consiste à choisir, à contractualiser, à superviser et, au besoin, à quitter des fournisseurs. La pratique de gestion des fournisseurs d'ITIL la décrit comme le fait de s'assurer que les fournisseurs et leur performance sont gérés de façon appropriée pour soutenir la livraison du service sans lacunes.

L'[externalisation](https://en.wikipedia.org/wiki/Outsourcing) déplace le travail vers une partie extérieure et ne déplace pas la redevabilité : l'organisation reste responsable envers ses clients et ses régulateurs. Les contrats sont donc un moyen de coordination et d'allocation du risque, non un transfert de responsabilité. Quand de nombreux fournisseurs sont impliqués, le [multi-approvisionnement](https://en.wikipedia.org/wiki/Multisourcing) et la pratique d'[intégration et de gestion des services](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) les coordonnent pour que l'utilisateur voie un seul service. Les mesures de ce sujet décrivent la santé de ce réseau.

Les valeurs agiles donnent une orientation utile. Le Manifeste agile énonce une préférence pour la collaboration avec le client plutôt que la négociation contractuelle. Cela ne veut pas dire ignorer les contrats, qui allouent un vrai risque et de l'argent. Cela veut dire bâtir des relations dans lesquelles fournisseur et client travaillent aux mêmes résultats, partagent tôt l'information et s'ajustent en apprenant. Les fournisseurs traités en partenaires vous parlent plus tôt des problèmes. Les fournisseurs qui craignent les pénalités les cachent. La mesure doit soutenir le premier schéma.

Quatre problèmes reviennent dans la mesure des fournisseurs.

- **Des rapports verts et des utilisateurs mécontents.** Un fournisseur peut atteindre tous les niveaux de service contractuels et livrer quand même une mauvaise expérience, un schéma que le sujet antérieur sur les accords de niveau de service appelle l'effet pastèque (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). Le contrat mesure ce qu'il dit, et les utilisateurs vivent quelque chose de plus large.
- **Concentration et enfermement.** Dépendre fortement d'un seul fournisseur est efficace jusqu'à ce qu'il défaille ou relève ses prix. L'[enfermement chez un fournisseur](https://en.wikipedia.org/wiki/Vendor_lock-in) rend le changement coûteux, et le coût grandit silencieusement à chaque intégration.
- **Dépendances cachées.** Vos fournisseurs ont des fournisseurs. Une [attaque de la chaîne d'approvisionnement](https://en.wikipedia.org/wiki/Supply_chain_attack) vise un fournisseur de confiance pour atteindre ses clients, et la défaillance d'un sous-traitant peut vous atteindre sans aucun contact de votre fournisseur direct.
- **La sortie comme pensée après coup.** Beaucoup de contrats sont signés sans plan pour y mettre fin. Une [stratégie de sortie](https://en.wikipedia.org/wiki/Exit_strategy) qui n'a jamais été testée peut ne pas marcher quand on en a besoin.

Une autre considération est la forme du contrat. La [contractualisation fondée sur la performance](https://en.wikipedia.org/wiki/Performance-based_contracting) lie le paiement aux résultats, et elle peut aligner les intérêts quand les résultats sont clairs et mesurables. Elle peut aussi inviter au détournement quand les mesures sont étroites. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique dans les deux sens : les fournisseurs optimisent le niveau de service mesuré, et les acheteurs optimisent leurs économies rapportées (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les enregistrements de la partie précédente, en particulier les données logicielles et financières (voir le sujet 7.2, Métriques des actifs logiciels et des licences, et le sujet 7.5, Coût du service et économie unitaire), et il prépare les devoirs de rapport qui incombent souvent aux organismes publics (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Principes clés

- **Vous restez redevable.** Les contrats allouent le risque et l'argent, et ils ne transfèrent pas la responsabilité envers les utilisateurs et les régulateurs.
- **Mesurez les résultats et l'expérience autant que les termes du contrat.** Un rapport contractuel vert peut cacher un mauvais service.
- **Connaissez vos dépendances.** Cartographiez les fournisseurs critiques, leurs principaux sous-traitants et les services qui reposent sur eux.
- **Planifiez la sortie avant de signer.** Un plan de sortie non testé est un espoir.
- **Collaborez régulièrement.** Des revues conjointes fréquentes et franches valent mieux que des réunions de crise annuelles.
- **Partagez ouvertement les données.** Les deux parties profitent des mêmes chiffres.
- **Différenciez les fournisseurs selon leur criticité.** Consacrez l'effort de gestion là où une défaillance ferait le plus mal.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atteinte des niveaux de service du fournisseur | Part des mesures de niveau de service contractées atteintes par un fournisseur, appariée à une mesure d'expérience pour le même service | mesures atteintes dans la période / mesures contractées ; rapportée à côté du score d'expérience des utilisateurs pour le service | pourcentage | Rapports du fournisseur, votre propre supervision, données d'enquête | Gestion des fournisseurs ; gestion des niveaux de service | Revue de la contribution d'un partenaire aux objectifs | Mensuelle |
| Temps d'incident attribué au fournisseur | Heures d'impact sur le service attribuées à un composant ou à une action d'un fournisseur | somme des heures d'impact des incidents où une défaillance du fournisseur était une cause confirmée | heures | Enregistrements d'incidents avec analyse des causes, rapports d'incidents du fournisseur | Gestion des incidents ; gestion des fournisseurs | Temps perdu à cause d'obstacles externes | Mensuelle |
| Couverture du registre des contrats | Part des fournisseurs ayant un contrat à jour, un responsable interne nommé et une revue planifiée | fournisseurs avec les trois / fournisseurs du périmètre | pourcentage | Registre des contrats, enregistrements d'achats | Gestion des fournisseurs ; gestion financière | Responsabilité claire des dépendances externes | Trimestrielle |
| Actualité de la diligence raisonnable | Part des fournisseurs critiques dont l'évaluation de risque est dans son cycle de revue | fournisseurs critiques évalués dans le cycle / fournisseurs critiques | pourcentage | Évaluations de risque des fournisseurs | Gestion des fournisseurs ; gestion des risques ; gestion de la sécurité de l'information | Revue régulière des risques | Trimestrielle |
| Préparation à la sortie | Part des fournisseurs critiques ayant un plan de sortie documenté qui a été testé dans la période convenue | fournisseurs critiques avec un plan de sortie testé / fournisseurs critiques | pourcentage | Plans de sortie et enregistrements de tests | Gestion des fournisseurs ; gestion de la continuité des services | Reprise exercée d'une dépendance | Annuelle |
| Concentration | Part des services critiques qui dépendent d'un seul fournisseur sans solution de rechange testée | services critiques avec une dépendance à un seul fournisseur et sans solution de rechange testée / services critiques | pourcentage | Carte des dépendances, registre des fournisseurs | Gestion des fournisseurs ; gestion des risques | Éviter un point de défaillance unique | Trimestrielle |
| Taux de clôture des actions conjointes | Part des actions convenues dans les revues conjointes avec les fournisseurs qui ont été closes à leur échéance | actions conjointes closes à la date / actions conjointes dues | pourcentage | Comptes rendus de revue et suivi des actions | Gestion des fournisseurs ; amélioration continue | Actions de rétrospective livrées | Trimestrielle |

Définissez la criticité dans le registre, avec les critères, et appliquez-la de façon cohérente. Une mesure de niveau de service est « atteinte » comme défini dans le contrat, et la mesure d'expérience est celle que vous choisissez pour le même service. Le temps d'incident attribué au fournisseur ne compte que les causes confirmées, et la méthode d'attribution est convenue avec le fournisseur quand c'est possible. La préparation à la sortie ne compte un plan comme testé que si une simulation ou un exercice a été consigné dans la période.

## Recommandations

### Connaître vos fournisseurs et ce qui dépend d'eux

**1. Tenez un registre des fournisseurs avec responsables et criticité.** Listez chaque fournisseur sous contrat, ce qu'il fournit, le responsable interne, les dates du contrat et la criticité. Incluez les services gratuits ou informels sur lesquels vos équipes s'appuient. La criticité est un jugement sur le préjudice si le fournisseur défaille, et elle décide de l'attention de gestion que reçoit la relation.

**2. Cartographiez la chaîne de dépendances des services critiques.** Pour chaque service critique, listez les fournisseurs dont il dépend et, quand vous le pouvez, leurs principaux sous-traitants et plateformes partagées. Utilisez les enregistrements de configuration pour les liens internes, et demandez aux fournisseurs leurs dépendances critiques (voir le sujet 7.4, Métriques de qualité de la configuration et de la CMDB). La carte montre le risque de concentration et vous dit où une panne ailleurs vous atteindrait.

**3. Évaluez le risque de façon proportionnée.** Utilisez une évaluation courte et standard pour les fournisseurs à faible risque et une plus approfondie pour les critiques, couvrant la sécurité, la résilience, la stabilité financière et la conformité. Réévaluez selon un cycle et quand quelque chose change. Partagez les résultats avec le fournisseur et convenez d'actions. Des normes comme l'ISO/IEC 27036 donnent des orientations sur la sécurité de l'information dans les relations avec les fournisseurs.

### Rédiger des contrats pour les résultats et la coopération

**4. Définissez des niveaux de service qui reflètent ce que vivent les utilisateurs.** Incluez des mesures contractées qui se rapportent aux résultats des utilisateurs, comme la rapidité de l'action visible par l'utilisateur, en plus de la disponibilité des composants. Demandez les données pour les vérifier vous-même. Un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) avec des mesures que personne ne peut vérifier, ou qui ne correspondent pas à ce que ressentent les utilisateurs, produit l'effet pastèque.

**5. Préférez les objectifs partagés aux seules pénalités.** Les crédits pour objectifs manqués sont courants et ont leur place, mais un contrat bâti surtout sur des pénalités rend la relation conflictuelle et les données moins honnêtes. Quand c'est possible, incluez des objectifs partagés, des revues conjointes régulières et un partage des gains pour les améliorations. Examinez l'incitation pour les effets de bord qu'elle pourrait causer.

**6. Planifiez la sortie dans le contrat.** Incluez l'export des données dans des formats utilisables, le soutien pendant la transition, un préavis raisonnable et la clarté sur la propriété intellectuelle et la propriété des configurations. Demandez ce que coûterait le départ et écrivez-le. Un contrat sans conditions de sortie vous laisse négocier sous pression.

### Gérer la relation

**7. Tenez des revues conjointes régulières.** Réunissez-vous à une cadence adaptée à la criticité, avec un court ordre du jour standard : résultats, incidents, risques, changements à venir et actions. Partagez vos propres mesures avec le fournisseur et demandez les siennes. Suivez les actions et leur clôture. Traitez la réunion comme une séance de travail entre partenaires, et invitez les personnes qui font le travail.

**8. Partagez rapidement et ouvertement l'information sur les incidents.** Convenez de la manière et de la rapidité avec lesquelles chaque partie avertira l'autre, et revoyez conjointement, sans blâme, les incidents importants (voir le sujet 3.4, Métriques des incidents majeurs). Mesurez le temps d'incident attribué au fournisseur pour voir où l'impact est le plus grand, et servez-vous-en dans la conversation, non comme d'un bâton.

**9. Combinez les données contractuelles avec l'expérience des utilisateurs.** Pour chaque service critique d'un fournisseur, placez les mesures contractées à côté de mesures de satisfaction ou d'effort des utilisateurs (voir le sujet 6.2, Accords de niveau d'expérience). Le désaccord entre les deux est le point de départ d'une discussion.

**10. Coordonnez les fournisseurs en un seul service.** Là où plusieurs fournisseurs contribuent à un service, convenez de qui détient le résultat de bout en bout, du fonctionnement des transmissions et de qui communique avec les utilisateurs. Les pratiques SIAM formalisent cela. Mesurez le délai de transmission et les escalades répétées entre fournisseurs (voir le sujet 9.3, Métriques de collaboration et de transmission).

### Réduire la concentration et se préparer à partir

**11. Mesurez la concentration et décidez délibérément.** Rapportez la part des services critiques qui dépendent d'un seul fournisseur sans solution de rechange testée. La concentration est parfois le bon choix, car elle apporte la simplicité et un poids de négociation. Faites-en une décision avec un responsable, un coût et une date de revue, et non un accident.

**12. Testez la sortie.** Pour les fournisseurs critiques, parcourez le plan de sortie au moins une fois dans une période définie : pouvez-vous exporter les données, la solution de rechange existe-t-elle, combien de temps cela prendrait-il, qu'est-ce qui casserait ? Un exercice sur table révèle les lacunes à peu de frais. Consignez les résultats et corrigez les lacunes, et mettez le plan à jour quand l'architecture change.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Atteinte des niveaux de service du fournisseur | Le fournisseur exclut des événements de la mesure ; pauses d'horloge ; définitions étroites | Supervision propre ; mesure d'expérience ; audit des exclusions |
| Temps d'incident attribué au fournisseur | Contester l'attribution ; classer les fautes du fournisseur comme côté client | Revue conjointe des causes ; réviseur neutre pour les litiges ; suivre la part contestée |
| Couverture du registre des contrats | Nommer des responsables qui l'ignorent ; lister des contrats sans dates | Confirmation du responsable ; vérifier que les réunions de revue ont lieu |
| Actualité de la diligence raisonnable | Évaluations par simple questionnaire ; les fournisseurs s'autocertifient | Exigence de preuves pour les fournisseurs critiques ; vérification par échantillon |
| Préparation à la sortie | Écrire un plan et le déclarer testé ; exercices sans vraies étapes | Consigner ce qui a été exercé ; revue indépendante de l'exercice |
| Concentration | Scinder un fournisseur en plusieurs entités juridiques sur le papier | Carte des dépendances jusqu'au fournisseur ultime ; revue des plateformes partagées |
| Taux de clôture des actions conjointes | Fixer des actions faciles ; clore sans effet | Revoir la qualité des actions ; vérifier que le problème visé s'est amélioré |

Une lecture saine est un registre des fournisseurs avec des responsables actifs, des niveaux de service qui correspondent à l'expérience des utilisateurs, des incidents discutés ouvertement, une concentration choisie délibérément et des plans de sortie qui ont été exercés.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Fournisseur unique | Simplicité, poids de négociation, intégration | Risque de concentration, enfermement |
| Plusieurs fournisseurs | Résilience, choix | Coût d'intégration, charge de coordination |
| Contrat lourd en pénalités | Recours clairs | Conflictuel ; cache les problèmes |
| Partenariat avec objectifs partagés | Données honnêtes, apprentissage plus rapide | Demande de la confiance et de la maturité ; recours moins clairs |
| Paiement fondé sur les résultats | Aligne les incitations | Résultats difficiles à définir et à mesurer ; détournement |
| Paiement fondé sur les intrants | Simple, prévisible | Récompense l'effort, non les résultats |
| Revues conjointes fréquentes | Alerte précoce | Coût en temps |
| Revues annuelles seulement | Faible coût | Lentes à déceler les problèmes |

La réponse en bref est de réserver les recours contractuels aux cas graves, de bâtir les relations de tous les jours autour de résultats partagés et de données ouvertes, et de choisir la concentration à dessein. Ajustez l'intensité de la gestion à la criticité du fournisseur.

## Questions à discuter avec votre équipe

**1. Quelle défaillance de fournisseur ferait le plus de mal à nos utilisateurs, et quel est notre plan ?**
Nommez les trois principales dépendances. Pour chacune, demandez ce qui se passerait lors d'une panne prolongée et quel est le plan. L'animateur doit chercher les dépendances sans plan, sans responsable ou sans solution de rechange testée. Convenez d'en traiter une d'abord.

**2. Où un rapport contractuel vert diverge-t-il de ce que nous disent les utilisateurs ?**
Prenez un service d'un fournisseur et comparez les mesures du contrat avec le retour des utilisateurs. Demandez laquelle est la plus fiable et pourquoi. La conversation trouve souvent un niveau de service qui mesure la mauvaise chose. Convenez de le soulever à la prochaine revue conjointe.

**3. Qui, dans l'équipe, détient chaque relation avec un fournisseur critique, et à quelle fréquence se rencontrent-ils ?**
Vérifiez le registre. Si un responsable n'a pas rencontré le fournisseur depuis des mois, demandez pourquoi. Convenez d'une cadence et d'un ordre du jour standard pour les plus critiques.

**4. Que faudrait-il pour quitter notre plus gros fournisseur ?**
Estimez le temps, le coût et le risque de la sortie. Demandez quelles données, intégrations et compétences vous retiennent. Décidez si la dépendance est un choix délibéré et ce qui la changerait.

**5. Comment apprenons-nous l'incident d'un fournisseur, et à quelle vitesse ?**
Revoyez les deux derniers incidents de fournisseurs et le temps entre leur début et votre connaissance. Vérifiez les conditions de notification. Convenez d'améliorations, comme des flux d'état partagés ou un contact nommé.

**6. Que partageons-nous avec nos fournisseurs, et que partagent-ils avec nous ?**
Listez les données que chaque partie fournit. Discutez de ce qu'un partage supplémentaire aiderait, comme des prévisions de demande ou un préavis des changements. Considérez la confidentialité, et convenez d'un échange pour commencer.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison dépendent des fournisseurs pour les plateformes, les composants et les services, et elles ressentent directement leurs changements. Elles doivent garder les dépendances visibles dans la conception, donner aux fournisseurs un préavis précoce des changements de demande et participer aux revues conjointes. Elles peuvent intégrer de la résilience à leurs services, par exemple avec des solutions de repli, pour que la défaillance d'un fournisseur n'arrête pas tout.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent la relation quotidienne : ouvrir les incidents, suivre la performance et coordonner les transmissions. Elles détiennent les preuves sur l'impact attribué aux fournisseurs et l'expérience de travail avec chacun. Elles doivent consigner soigneusement l'attribution, garder les canaux de notification en état de marche et participer aux exercices de sortie.

### Direction et gouvernance

Les dirigeants signent les contrats et acceptent le risque. Ils doivent demander des rapports de criticité, de concentration et de préparation à la sortie, fixer des attentes de partenariat et éviter de choisir les fournisseurs sur le seul prix. La gouvernance doit exiger une diligence raisonnable proportionnée à la criticité et la preuve que les plans de sortie ont été testés.

### Clients et utilisateurs

Les utilisateurs vivent le résultat combiné du réseau de fournisseurs. Ils ont besoin d'une communication claire quand un problème de fournisseur les touche, et d'un soutien constant quelle que soit la partie en faute. Leur retour est le contrôle pour savoir si la performance des fournisseurs, telle que rapportée, correspond à la réalité.

## En pratique : un exemple de gestion des services

Le service informatique d'un groupe hospitalier régional soutient des systèmes cliniques avec environ 60 fournisseurs, dont un fournisseur d'hébergement, un éditeur de dossiers électroniques, un opérateur réseau et un centre de services géré. Les chiffres ci-dessous sont illustratifs.

Après une longue panne du système de dossiers, le conseil demande combien de telles dépendances existent. Le responsable de la gestion des fournisseurs construit le tableau. Le registre des fournisseurs couvre 47 des 60 fournisseurs connus avec un contrat à jour, un responsable et une date de revue, soit une couverture de 78 %. La diligence raisonnable est à jour pour 6 des 14 fournisseurs critiques. Sur 22 services critiques, 9 dépendent d'un seul fournisseur sans solution de rechange testée, soit une concentration de 41 %, et deux de ces fournisseurs partagent la même plateforme d'hébergement. Le centre de services géré rapporte 98 % d'atteinte des niveaux de service, alors que la satisfaction du personnel clinique envers le centre baisse, et le rapport mensuel montre que les incidents en attente du deuxième niveau du fournisseur sont exclus du temps de réponse mesuré. Au dernier trimestre, le temps d'incident attribué aux fournisseurs totalise 53 heures, dont les trois quarts viennent de deux fournisseurs. Le plan de sortie de l'éditeur de dossiers existe sur le papier et n'a jamais été exercé.

Le responsable de la gestion des fournisseurs convient de changements avec les responsables des systèmes cliniques et les fournisseurs. Les fournisseurs critiques ont une revue conjointe trimestrielle avec un ordre du jour partagé et des données des deux côtés. Le contrat du centre de services est modifié pour mesurer le délai de résolution du point de vue de l'utilisateur, et le fournisseur accepte de partager les données de sa file. Une courte enquête d'expérience s'ajoute à côté des mesures du contrat. La diligence raisonnable des fournisseurs critiques passe à un cycle annuel avec demandes de preuves. L'équipe mène un exercice de sortie sur table pour l'éditeur de dossiers, qui découvre que le format d'export des données n'inclut pas la piste d'audit et que la solution de rechange prendrait des mois à préparer. Le constat est versé à la prochaine négociation du contrat. Le groupe décide aussi lesquelles des neuf dépendances à un seul fournisseur accepter délibérément, et lesquelles réduire.

Un an plus tard, la couverture du registre est de 96 %, la diligence raisonnable est à jour pour 13 des 14 fournisseurs critiques, et la concentration est de 27 %, chaque cas restant consigné comme décision acceptée. Le temps d'incident attribué aux fournisseurs tombe à 22 heures par trimestre. La mesure contractuelle du centre de services et le score de satisfaction clinique évoluent désormais ensemble. Le directeur financier demande une clause imposant des pénalités financières pour tout niveau de service manqué chez tous les fournisseurs. Le responsable de la gestion des fournisseurs propose des pénalités seulement pour les mesures critiques liées à la sécurité, et des objectifs partagés pour le reste, expliquant que des pénalités généralisées poussent les fournisseurs à cacher des événements et à discuter la mesure. La décision est consignée, et le modèle de contrat est mis à jour.

## Agilité, IA, automatisation et analytique

### Agilité

Bâtissez les relations avec les fournisseurs autour de résultats partagés et d'une conversation régulière. La précaution est que des mesures guidées par les pénalités mènent à des disputes sur les définitions.

### IA

Les fournisseurs peuvent intégrer de l'IA à leurs services : demandez donc quelles fonctionnalités d'IA sont utilisées, avec quelles données et qui les supervise, et mesurez la couverture de la divulgation d'IA par les fournisseurs. La précaution est que les déclarations des fournisseurs sur l'IA doivent être vérifiées face aux conditions du contrat.

### Automatisation

Recueillez automatiquement les données de performance des fournisseurs quand c'est possible et automatisez les rappels de dates de contrat. Mesurez l'automatisation sur les renouvellements manqués. La précaution est que les flux automatiques des fournisseurs utilisent leurs définitions : rapprochez-les donc.

### Analytique

Rapportez l'atteinte des niveaux de service des fournisseurs avec les règles d'attribution des incidents. La décision éclairée est de renouveler, de renégocier ou de sortir. La précaution est que la concentration et la préparation à la sortie sont des jugements : documentez donc le raisonnement.

## Éclairage sectoriel

**Startup.** Les fournisseurs sont surtout des outils d'infonuagique et de logiciel en tant que service. Gardez une liste avec responsables et dates de renouvellement, sachez quelles données chacun détient et conservez un export des données critiques. Choisissez des fournisseurs aux chemins d'export clairs, car l'enfermement précoce est peu coûteux à créer et coûteux à défaire.

**Petite entreprise.** Quelques fournisseurs portent l'entreprise, et le propriétaire les gère souvent directement. Gardez les contacts et les conditions de contrat au même endroit, demandez des mises à jour d'état et d'incident, et testez la restauration à partir de sauvegardes conservées hors du fournisseur. Réduisez la dépendance envers une seule personne chez le fournisseur.

**Grande entreprise.** De nombreux fournisseurs et couches appellent une fonction de gestion des fournisseurs, des niveaux de criticité et des conditions de contrat standard pour la sécurité, la résilience et la sortie. Utilisez une coordination de type SIAM là où les fournisseurs doivent travailler ensemble. Gardez une carte centrale des dépendances et partagez-la avec les équipes de risque et de continuité.

**Gouvernement et secteur public.** Le droit de la passation de marchés, les règles de concurrence et les exigences de transparence façonnent la manière dont les fournisseurs sont choisis et gérés. Les contrats peuvent être longs, avec des devoirs de rapport public et des exigences de souveraineté, d'accessibilité et de sortie. Documentez les décisions, rapportez la performance des fournisseurs comme requis et planifiez la nouvelle passation de marché (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps des responsables de fournisseurs et d'une petite fonction de coordination, un registre et des données de dépendances, l'effort d'évaluation et les revues conjointes. Les exercices de sortie coûtent de quelques heures à quelques jours par fournisseur critique. L'outillage peut être aussi simple qu'un registre partagé.

Les rendements sont des incidents causés par les fournisseurs moins nombreux et plus courts, de meilleures conditions commerciales grâce à une négociation informée, des coûts d'enfermement évités et une réponse plus rapide et plus calme quand un fournisseur défaille. Construisez le dossier à partir de vos propres données : les heures d'incident attribuées aux fournisseurs et leur coût, le coût et la durée des transitions passées de fournisseurs, et l'écart entre les niveaux de service contractés et l'expérience rapportée par les utilisateurs. Évitez de citer des taux d'échec de l'externalisation du secteur à moins de pouvoir en retracer la source et la méthode. Incluez le coût de garder une seconde option au chaud et comparez-le à l'exposition qu'il réduit (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Signer et oublier.** Les contrats s'éloignent de la réalité. Tenez des revues régulières avec responsables et données.
- **Se fier au seul rapport du fournisseur.** Il mesure ce que le fournisseur choisit. Supervisez de façon indépendante et comparez avec l'expérience des utilisateurs.
- **Des relations uniquement fondées sur les pénalités.** Elles réduisent l'honnêteté. Bâtissez des objectifs partagés à côté des recours.
- **Aucun plan de sortie.** Partir devient une crise. Écrivez et testez le plan avant d'en avoir besoin.
- **Une concentration cachée.** Plusieurs fournisseurs peuvent partager une plateforme. Cartographiez jusqu'au fournisseur ultime.
- **Du blâme dans les revues conjointes.** Les fournisseurs dissimulent les incidents. Revoyez les incidents sans blâme.
- **Une gestion uniforme de tous les fournisseurs.** Elle gaspille l'effort sur les petits et néglige les critiques. Hiérarchisez selon la criticité.
- **Ignorer les sous-traitants.** Votre risque inclut le leur. Interrogez sur les dépendances critiques.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Connaître les fournisseurs | Contrats éparpillés | Registre des principaux fournisseurs | Registre avec responsables, criticité et dates de revue | Carte des dépendances jusqu'aux sous-traitants ; couverture et actualité suivies | Vue des dépendances partagée avec les fournisseurs et les clients |
| Performance et relation | Réactive ; disputes | Rapports mensuels des fournisseurs | Mesures de contrat et d'expérience comparées ; revues conjointes régulières | Actions suivies ; incidents revus conjointement ; attribution convenue | Fournisseurs intégrés comme partenaires avec objectifs partagés et données ouvertes |
| Résilience et sortie | Aucune | Conditions de sortie dans certains contrats | Plans de sortie pour les fournisseurs critiques | Plans de sortie exercés ; concentration décidée délibérément | Solutions de rechange gardées au chaud ; exercices conjoints avec les fournisseurs |

## Liste de vérification

- [ ] Un registre des fournisseurs liste chaque fournisseur avec un responsable, une criticité et les dates du contrat.
- [ ] Les services critiques ont une carte des dépendances qui atteint les principaux sous-traitants.
- [ ] Les niveaux de service du contrat sont appariés à une mesure d'expérience des utilisateurs.
- [ ] Des revues conjointes avec les fournisseurs critiques ont lieu à cadence régulière avec un ordre du jour standard.
- [ ] La diligence raisonnable des fournisseurs critiques est à jour et fondée sur des preuves.
- [ ] Les conditions et canaux de notification des incidents sont convenus et testés.
- [ ] Le temps d'incident attribué aux fournisseurs est consigné avec une attribution convenue.
- [ ] La concentration est mesurée et chaque dépendance à un seul fournisseur est une décision consignée.
- [ ] Des plans de sortie existent pour les fournisseurs critiques et ont été exercés dans la période.
- [ ] Les conditions du contrat incluent l'export des données, le soutien à la transition et la propriété des configurations.

## Prompts d'IA

**Construisez une évaluation de la criticité des fournisseurs.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Comparez les mesures du contrat avec l'expérience des utilisateurs.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Concevez un exercice de sortie.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Rédigez l'ordre du jour d'une revue conjointe.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de fournisseur ou de contrat.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de fournisseur porte son vecteur de détournement, son garde-fou et sa règle d'attribution.

## Idées clés

- Vous restez redevable des services que vous externalisez : gérez donc les fournisseurs comme une partie de votre propre service.
- Appariez les mesures du contrat avec l'expérience des utilisateurs, et supervisez indépendamment du rapport du fournisseur.
- Cartographiez les dépendances jusqu'aux sous-traitants, et traitez la concentration comme une décision délibérée.
- Bâtissez les relations autour de résultats partagés et de revues conjointes régulières, en réservant les recours aux cas graves.
- Planifiez la sortie avant de signer, et testez-la pour les fournisseurs critiques.
- Revoyez les incidents avec les fournisseurs sans blâme et partagez ouvertement les données.

## Références et lectures complémentaires

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
