# Coût du service et économie unitaire

**Savoir ce que coûte un service, et ce qu'il coûte par unité de quelque chose que les utilisateurs valorisent, permet à une équipe de faire des choix honnêtes sur la qualité, la vitesse et la dépense, tant que les règles d'affectation sont équitables, visibles et jamais utilisées pour punir les personnes qui exploitent le service.**

## Vue d'ensemble et motivation

Chaque service informatique coûte de l'argent : personnel, infonuagique et hébergement, licences, matériel, fournisseurs, et la part des plateformes partagées qu'il utilise. Les dirigeants demandent ce que coûte un service, s'il en vaut la peine et ce qui change si la demande double. Les équipes posent les mêmes questions de l'autre côté : que pouvons-nous nous permettre de faire, et à quoi renonçons-nous ? Sans chiffres, ces conversations tournent à la dispute sur qui possède quel budget.

La [comptabilité analytique](https://en.wikipedia.org/wiki/Cost_accounting) est la pratique qui consiste à mesurer, consigner et analyser les coûts. Pour une organisation de services, les tâches centrales sont d'attribuer les coûts aux services, de les exprimer par unité de quelque chose de significatif et de prévoir comment le coût change avec le volume. La pratique de gestion financière des services d'ITIL couvre le même terrain, et la pratique FinOps pour les dépenses infonuagiques le prolonge (voir le sujet 7.6, Métriques FinOps et de coûts du nuage).

Les visions agile et ITIL du coût diffèrent, et la différence est utile.

- **La vision par projet** finance un effort temporaire avec un budget et une date de livraison. Le coût est ce que le projet a dépensé, et la réussite est une livraison dans les temps et le budget. Le projet se termine, l'équipe se disperse et le service qu'elle a créé est remis à quelqu'un d'autre.
- **La vision par produit ou par service** finance une équipe pérenne pour construire et exploiter un service tout au long de sa vie. Le coût est le coût stable de l'équipe et de ses plateformes, et la question est de savoir si la valeur livrée justifie cette dépense. Cela correspond aux objectifs agiles de livraison continue et de construction autour de personnes motivées qui connaissent le service. Cela correspond aussi à la préoccupation d'ITIL pour le coût d'un service tout au long de son cycle de vie.

Les mesures de coût peuvent induire en erreur aussi facilement qu'elles informent. Trois problèmes reviennent.

- **L'affectation est un choix.** Les coûts partagés, comme les réseaux, la sécurité et les plateformes, doivent être répartis entre les services selon une règle, et des règles différentes donnent des réponses différentes. L'[affectation des coûts](https://en.wikipedia.org/wiki/Cost_allocation) doit suivre un [inducteur de coût](https://en.wikipedia.org/wiki/Cost_driver), un facteur qui fait varier le coût, comme les utilisateurs, les requêtes ou le stockage. La [méthode ABC](https://en.wikipedia.org/wiki/Activity-based_costing) (comptabilité par activités) formalise cela en retraçant les coûts jusqu'aux activités qui consomment des ressources.
- **Les coûts fixes et variables se comportent différemment.** Un [coût fixe](https://en.wikipedia.org/wiki/Fixed_cost) reste le même quand le volume change dans une plage, et un [coût variable](https://en.wikipedia.org/wiki/Variable_cost) monte avec le volume. Le [coût unitaire](https://en.wikipedia.org/wiki/Unit_cost) d'un service baisse quand le volume croît si les coûts fixes dominent, un schéma lié aux [économies d'échelle](https://en.wikipedia.org/wiki/Economies_of_scale). Regarder le coût unitaire sans savoir quels coûts sont fixes mène à de mauvaises prévisions.
- **Le coût n'est pas la valeur.** Le service le moins cher n'est pas le meilleur. Le coût par ticket baisse si vous clôturez des tickets sans résoudre les problèmes. Les mesures de coût ont besoin d'un compagnon de qualité ou de résultat, que les parties précédentes de ce livre fournissent (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

Les classifications comptables comptent aussi. Les [dépenses d'investissement](https://en.wikipedia.org/wiki/Capital_expenditure) achètent des actifs durables, et les dépenses de fonctionnement couvrent l'exploitation quotidienne. Les services infonuagiques et par abonnement déplacent les dépenses de la première sorte vers la seconde, ce qui change l'allure des budgets sans changer ce que coûtent les services. Les collègues de la finance détiennent ces règles, et les métriques ici doivent être construites avec eux.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique fortement à l'argent. Un objectif de coût tend à produire des coupes là où il est le plus facile de cacher les dégâts, comme l'entretien, la qualité et le temps d'apprentissage. Les mesures ci-dessous sont donc appariées avec des indicateurs de santé du service et avec un énoncé des règles d'affectation (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Rendez les règles d'affectation explicites et liées à des inducteurs.** Les gens acceptent les chiffres qu'ils peuvent suivre.
- **Séparez le coût fixe du coût variable.** Les prévisions dépendent de ce qui est quoi.
- **Rapportez le coût unitaire avec son compagnon de qualité.** Moins cher n'est mieux que si le service est toujours bon.
- **Utilisez des plages et des tendances, non une fausse précision.** L'affectation fait appel au jugement.
- **Financez des équipes pérennes autour des services là où c'est possible.** Les équipes stables apprennent et s'améliorent ; les temporaires se dissolvent.
- **Partagez les coûts avec les personnes qui peuvent les changer.** La visibilité sans influence n'est que du blâme.
- **Ne classez jamais des personnes ou des équipes selon le coût.** Les services diffèrent, tout comme leurs contraintes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Coût par service | Coût annuel complet d'un service nommé, selon des règles d'affectation documentées | coûts directs + coûts partagés affectés au service dans la période | monnaie par an | Grand livre, données des centres de coûts, factures infonuagiques et de licences, données de temps ou d'activité | Gestion financière des services ; gestion du catalogue des services | Coût d'une équipe produit pérenne et de ses plateformes | Trimestrielle |
| Coût unitaire | Coût par unité de quelque chose que les utilisateurs valorisent, comme par utilisateur actif, par transaction ou par demande résolue | coût par service dans la période / unités livrées dans la période | monnaie par unité | Coût par service et données de volume | Gestion financière des services ; gestion des niveaux de service | Coût de service par résultat | Trimestrielle |
| Couverture de l'affectation | Part des dépenses informatiques attribuée à un service nommé ou déclarée comme frais généraux partagés | dépenses attribuées à des services ou déclarées en frais généraux / dépenses informatiques totales | pourcentage | Grand livre et modèle d'affectation | Gestion financière des services | Coût visible du travail de chaque équipe | Trimestrielle |
| Répartition exploitation, changement et amélioration | Part des dépenses ou de la capacité consacrée à l'exploitation des services, à leur changement et à leur amélioration | dépenses ou capacité de chaque catégorie / total | pourcentage | Étiquettes du grand livre, types de travail du gestionnaire de travail | Gestion financière des services ; amélioration continue | Répartition de la capacité par type de travail | Trimestrielle |
| Écart de prévision | Différence entre la prévision et le coût réel, par service | (réel moins prévision) / prévision | pourcentage | Journal des prévisions et grand livre | Gestion financière des services | Exactitude des prévisions | Mensuelle |
| Taux de contestation de la rétro-information des coûts | Part des lignes de rétro-information ou de refacturation que les responsables de services ont contestées et qui ont été modifiées | lignes modifiées après contestation / lignes émises | pourcentage | Système de rétro-information et journal des contestations | Gestion financière des services | Rétrospective sur les coûts partagés | Trimestrielle |
| Part de financement des équipes pérennes | Part des dépenses de livraison et d'exploitation financée comme capacité stable d'équipe pour un service | dépenses des équipes de service pérennes / dépenses totales de livraison et d'exploitation | pourcentage | Grand livre et organigramme | Gestion financière des services ; changement organisationnel | Équipes bâties autour des services et de personnes motivées | Annuelle |

Définissez la période, la monnaie et les types de coûts de chaque mesure, et consignez les règles d'affectation dans le registre des métriques : quels coûts sont directs, lesquels sont partagés et quel inducteur répartit chaque coût partagé. Le coût unitaire demande une unité que les utilisateurs et l'équipe acceptent tous deux, et la définition de l'unité reste fixe sur la tendance. L'écart de prévision se compare à la prévision telle qu'elle était au début de la période, non à une prévision révisée.

## Recommandations

### Construire le tableau des coûts

**1. Commencez par le grand livre et la liste des services.** Prenez les dépenses informatiques totales du grand livre, listez les services du catalogue et décidez quelle part de chaque coût revient à quel service. Commencez par les coûts directs faciles : l'équipe qui exploite le service, ses licences, son hébergement. Les coûts partagés viennent ensuite. Un premier tableau approximatif, partagé avec les personnes concernées, vaut mieux qu'un tableau précis construit en privé.

**2. Choisissez des inducteurs de coût que les gens peuvent suivre.** Pour chaque coût partagé, choisissez un inducteur lié à ce qui le cause réellement : les utilisateurs pour une plateforme de collaboration, le stockage pour une plateforme de données, les requêtes pour une passerelle, les appareils pour la gestion des postes. Expliquez la règle en une phrase. Des inducteurs que personne ne peut vérifier invitent aux disputes, et des inducteurs que personne ne peut influencer rendent la rétro-information inutile.

**3. Séparez le coût fixe et le coût variable.** Pour chaque service, marquez quels coûts bougent avec le volume et lesquels non. Un service surtout en coûts fixes a un coût unitaire qui baisse avec la croissance, et un service surtout variable non. Cette séparation est la base de toute prévision et de toute conversation sur le passage à l'échelle.

**4. Montrez des plages là où l'affectation fait appel au jugement.** Si deux règles d'affectation raisonnables donnent des résultats différant de 20 %, montrez les deux ou montrez la plage. Un seul chiffre précis tiré d'une règle arbitraire déclenche des querelles que les données ne peuvent trancher.

### Mesurer par unité, avec la qualité à côté

**5. Choisissez une unité qui reflète la valeur.** Le coût par utilisateur actif, par transaction achevée, par demande résolue ou par déploiement peut être utile. Choisissez l'unité qui se relie à l'objet du service, convenez-en avec le responsable du service et gardez-la stable. Le coût par ticket est une unité risquée, car il baisse quand les tickets sont clos trop tôt et monte quand vous évitez des tickets grâce à un bon libre-service.

**6. Appariez chaque coût unitaire avec une mesure de qualité.** Montrez le coût unitaire à côté de la disponibilité, de la satisfaction ou du taux de réouverture. Un coût unitaire qui baisse pendant que la qualité baisse est un transfert de coût vers les utilisateurs. Un coût unitaire stable pendant que la qualité monte est un gain. Présentez-les ensemble ou pas du tout (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

**7. Suivez la tendance, pas seulement le niveau.** Le coût unitaire dans le temps, avec des notes sur ce qui a changé, raconte une histoire qu'un seul trimestre ne peut pas raconter. Marquez les changements de règles d'affectation ou d'unités sur le graphique pour que les tendances ne soient pas mal lues. Comparez un service à son propre historique avant de le comparer à d'autres.

### Partager le coût avec ceux qui peuvent le changer

**8. Utilisez la rétro-information des coûts avant la refacturation.** La rétro-information (showback) rapporte les coûts aux responsables de services sans les leur facturer, et la refacturation (chargeback) transfère le coût à leurs budgets. Commencez par la rétro-information, qui construit la compréhension et la confiance, et ne passez à la refacturation que là où elle change les décisions et où les règles sont acceptées. Les deux dépendent de règles que les responsables aident à façonner.

**9. Laissez les responsables contester les chiffres.** Un processus de contestation est un signe de santé, tant qu'il est rapide et que ses résultats sont consignés. Revoyez le taux de contestation : un taux élevé montre des règles auxquelles personne ne fait confiance, et zéro peut montrer que personne ne lit les rapports. Corrigez la règle, pas seulement la ligne.

**10. Revoyez le coût avec toute l'équipe de service.** Incluez les ingénieurs et les exploitants autant que les gestionnaires dans une revue régulière des coûts. Les personnes qui exploitent un service savent souvent où se cache le gaspillage : environnements inactifs, ressources surdimensionnées, outils en double. Traitez leurs constats comme des améliorations à partager et non comme des critiques.

### Financer pour la stabilité et l'apprentissage

**11. Préférez des équipes pérennes financées autour des services.** Là où c'est possible, financez une équipe stable pour détenir un service dans la durée, au lieu de constituer une équipe de projet puis de la dissoudre. Les équipes pérennes accumulent de la connaissance, construisent de meilleures relations avec les utilisateurs et portent le coût des mauvaises décisions. Cela reflète l'objectif agile de bâtir autour d'individus motivés et la préoccupation d'ITIL pour le cycle de vie du service. Le changement de financement est une décision organisationnelle importante : impliquez tôt la finance et la direction. Le livre de Mik Kersten, *Project to Product*, traite de ce passage.

**12. Réservez de la capacité à l'amélioration.** Les coûts qui réduisent les coûts futurs, comme l'automatisation, les corrections de fiabilité et la suppression d'outils en double, ont besoin d'un financement protégé, sinon ils perdent chaque fois face au travail sur les fonctionnalités. Suivez la part d'amélioration dans la répartition exploitation, changement et amélioration, et regardez les rendements qu'elle produit (voir le sujet 4.6, Dette technique et erreurs connues).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Coût par service | Déplacer des coûts vers d'autres services par la règle d'affectation ; laisser non affectés les coûts défavorables | Couverture de l'affectation ; règles publiées et revues par les responsables ; comparer les totaux avec le grand livre |
| Coût unitaire | Gonfler le dénominateur avec des unités de faible valeur ; réduire la qualité pour réduire le coût ; changer l'unité | Mesure de qualité associée ; définition d'unité fixe ; contrôles de résultat |
| Couverture de l'affectation | Déclarer de grands montants en frais généraux partagés pour éviter l'attribution | Part des frais généraux rapportée ; revue de ce qui est déclaré frais généraux et pourquoi |
| Répartition exploitation, changement et amélioration | Réétiqueter le travail d'exploitation comme amélioration ou changement ; étiqueter à la fin de la période | Étiqueter à l'entrée ; échantillonner les éléments pour le type ; comparer avec les données d'incidents et de demandes |
| Écart de prévision | Gonfler les prévisions ; réviser la prévision tard dans la période | Prévision consignée au début ; comparer les plages de prévision avec les réels dans le temps |
| Taux de contestation de la rétro-information des coûts | Décourager les contestations ; changer des lignes sans changer de règle | Revoir les contestations et leurs résultats ; vérifier si les règles ont changé après des contestations répétées |
| Part de financement des équipes pérennes | Rebaptiser des projets en équipes pérennes sans changer le financement ni la responsabilité | Vérifier la stabilité et la responsabilité des équipes dans le temps ; mesures de santé du service |

Une lecture saine est un tableau des coûts que les responsables de services reconnaissent, des coûts unitaires qui bougent pour des causes expliquées pendant que la qualité tient, des erreurs de prévision qui diminuent et un travail d'amélioration qui apparaît dans les chiffres.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Financement par projet | Périmètre et fin clairs | Les équipes se dissolvent ; connaissance perdue ; service remis à d'autres |
| Financement d'équipe pérenne | Apprentissage, responsabilité, coût stable | Demande de la confiance et un processus de planification mûr ; le périmètre peut dériver |
| Rétro-information | Construit la compréhension avec peu de friction | Peut être ignorée si personne n'est redevable |
| Refacturation | Crée de la redevabilité et des signaux de prix | Contestations ; incitations à éviter les services partagés |
| Règles d'affectation simples | Faciles à expliquer | Peuvent être grossières |
| Affectation par activités | Plus exacte | Coûteuse à maintenir ; fausse précision |
| Coût par unité | Relie le coût à la valeur | Sensible au choix de l'unité et au volume |
| Coût total seulement | Simple | Cache les tendances et l'efficience |

La réponse en bref est de commencer par des règles simples et la rétro-information, d'ajouter de la précision là où les décisions en dépendent et d'aller vers le financement d'équipes pérennes à mesure que la confiance et la maturité de la planification grandissent. Gardez une mesure de qualité à côté de chaque mesure de coût.

## Questions à discuter avec votre équipe

**1. Que coûte notre principal service par an, et qui serait d'accord avec le chiffre ?**
Demandez à la finance et au responsable du service de produire des estimations indépendantes. Comparez-les. L'animateur doit noter où elles diffèrent et pourquoi : règles d'affectation, périmètre ou coûts manquants. Convenez d'une règle documentée unique pour le trimestre suivant.

**2. Quelle est l'unité que nos utilisateurs reconnaîtraient, et que coûte-t-elle ?**
Listez les unités possibles pour le service et choisissez-en une. Calculez son coût et discutez de ce qui la ferait monter ou baisser. Demandez ce que l'unité cache. Ajoutez une mesure de qualité à placer à côté.

**3. Lesquels de nos coûts partagés sont répartis par une règle que personne ne peut expliquer ?**
Listez les coûts partagés et leurs inducteurs. Pour chacun, demandez si l'inducteur est lié à ce qui cause le coût. Remplacez-en un qui ne l'est pas. Discutez de qui peut influencer l'inducteur, car des données de coût sans influence ne sont que du blâme.

**4. Quelle part de notre capacité va à l'exploitation, au changement et à l'amélioration du service ?**
Revoyez un trimestre de travail terminé par type, comme dans le sujet sur la planification (voir le sujet 2.5, Métriques de prévision et de planification de la livraison). Comparez avec ce que pensent les dirigeants. Décidez ce que doit être la part d'amélioration et ce qui la protégerait.

**5. Qu'est-ce qui changerait si nous financions une équipe pérenne pour ce service ?**
Imaginez le financement, la responsabilité et les mesures. Demandez quels risques et bénéfices verraient la finance, l'équipe et les utilisateurs. Identifiez une étape vers cela, comme une liste d'équipe stable et une vue budgétaire partagée du service.

**6. Quand un chiffre de coût a-t-il causé une dispute pour la dernière fois, et qu'avons-nous appris ?**
Rappelez une contestation de rétro-information ou de budget. Portait-elle sur le chiffre ou sur la règle ? Discutez de la manière dont une règle plus claire ou un meilleur processus de contestation aurait aidé.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison voient le coût comme le prix de leur temps, de leurs plateformes et de leurs outils. Elles doivent connaître le coût de leur service et son coût unitaire, repérer tôt le gaspillage et se servir des chiffres pour plaider en faveur du travail d'amélioration et d'un financement stable. Elles doivent éviter d'optimiser le chiffre en réduisant la qualité, et contester les règles d'affectation qu'elles ne peuvent pas suivre.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent le coût d'exploitation des services et détiennent souvent les plateformes partagées. Elles doivent publier la manière dont les coûts partagés sont répartis, répondre aux questions de rétro-information et partager des idées d'économies issues de l'expérience. Elles doivent s'attendre à des pressions pour réduire les coûts d'exploitation, et montrer le côté qualité et risque de toute coupe.

### Direction et gouvernance

Les dirigeants posent des questions sur le coût et la valeur et fixent le modèle de financement. Ils doivent demander des coûts unitaires avec des compagnons de qualité, soutenir le financement d'équipes pérennes là où il convient et éviter de classer les équipes selon le coût. La gouvernance doit attendre que les règles d'affectation soient documentées, revues et appliquées de façon cohérente, et regarder la part d'amélioration.

### Clients et utilisateurs

Les utilisateurs qui paient par refacturation veulent comprendre la facture et pouvoir l'influencer. Les autres voient le coût dans la qualité et l'étendue des services offerts. Des coûts unitaires clairs et une voix dans l'arbitrage entre prix et service rendent la relation plus saine, et leur retour fait partie du compagnon de qualité de chaque coût unitaire.

## En pratique : un exemple de gestion des services

Le service informatique central d'une université de taille moyenne fournit environ 25 services à 18 000 étudiants et employés. Les chiffres ci-dessous sont illustratifs.

Le bureau des finances veut savoir pourquoi le budget informatique a crû plus vite que les inscriptions. Le partenaire financier de l'informatique construit un tableau des coûts avec les responsables de services. Sur les dépenses informatiques totales, 72 % sont directes pour des services nommés, 18 % sont des plateformes partagées (réseau, identité, outillage de sécurité) affectées par inducteurs, et 10 % sont déclarées en frais généraux. La couverture de l'affectation est donc de 90 %. La plateforme d'apprentissage coûte l'équivalent de 41 $ US par utilisateur actif et par an, contre 36 $ auparavant, alors que la satisfaction et la disponibilité sont stables. Le centre de services affiche un coût par demande résolue qui a baissé de 12 % en deux ans. Le responsable du service fait remarquer que la baisse a coïncidé avec une hausse des tickets rouverts de 4 à 9 %, et le compagnon de qualité montre que l'économie est en partie un transfert d'effort vers les utilisateurs.

L'équipe fait quatre changements. Elle publie les règles d'affectation sur une seule page, avec l'inducteur de chaque coût partagé et la date de la dernière revue. Elle remplace le coût par demande par le coût par demande résolue au premier contact, montré à côté du taux de réouverture. Elle fait passer la plateforme d'apprentissage et le service d'identité à un financement en équipes pérennes avec un effectif stable. Elle réserve 15 % de la capacité au travail d'amélioration pour chacun des deux plus gros services, et suit ce que ce travail rapporte.

Un an plus tard, le coût unitaire de la plateforme d'apprentissage est de 38 $ US avec la croissance de l'usage, le taux de réouverture est tombé à 5 %, et l'écart de prévision des deux services en équipes pérennes est inférieur à 4 %, contre 11 % pour le travail financé par projet. Le taux de contestation de la rétro-information est passé de 22 % à 8 % après le changement de deux règles. Le bureau des finances demande un objectif annuel de réduction du coût unitaire de 5 % pour chaque service. Le partenaire financier de l'informatique propose des objectifs seulement là où un service a un levier d'efficience clair, montré avec le compagnon de qualité, et explique qu'un objectif général récompenserait la réduction de l'entretien. La décision est consignée, avec une revue des règles chaque année.

## Agilité, IA, automatisation et analytique

### Agilité

Financez des équipes pérennes et revoyez régulièrement le coût à côté des résultats avec les parties prenantes, pour que les discussions de coût portent sur autre chose que des coupes. La précaution est que des règles d'affectation utilisées pour punir des équipes mènent au détournement des étiquettes et des répartitions.

### IA

Les charges de travail d'IA ajoutent un coût variable, comme l'usage de modèles et le traitement de données, et soulèvent la question du coût par résultat. Suivez le coût par unité de valeur pour les parcours assistés par l'IA et appariez-le avec la qualité. La précaution est qu'un parcours d'IA moins cher qui abaisse la qualité ne fait que déplacer le coût vers la reprise.

### Automatisation

Automatisez le recueil des coûts et les contrôles d'étiquetage, et mesurez la couverture de l'affectation. La précaution est qu'une affectation automatique par une règle que personne ne revoit peut fausser le tableau.

### Analytique

Rapportez le coût unitaire avec des plages et énoncez les règles d'affectation. La décision éclairée est où changer la qualité, la vitesse ou la dépense. La précaution est que le coût unitaire dépend de ce qui est choisi comme unité : dites donc pourquoi.

## Éclairage sectoriel

**Startup.** Le coût est surtout de l'infonuagique, des outils et des salaires. Suivez dès le départ les principales dépenses infonuagiques et d'outils par service, étiquetez les ressources et calculez tôt le coût par client actif. Résistez à une affectation élaborée, puisque l'équipe est petite.

**Petite entreprise.** Une poignée de fournisseurs et une ou deux personnes forment l'essentiel des coûts. Gardez un tableau annuel simple, le coût par utilisateur des principaux outils et une vue de ce qui est payé et inutilisé. Demandez aux fournisseurs des factures détaillées.

**Grande entreprise.** L'échelle apporte des plateformes partagées et de nombreuses unités d'affaires. Utilisez un modèle d'affectation documenté avec des inducteurs, un processus de contestation et un partenaire financier intégré à l'informatique. Méfiez-vous d'une refacturation qui décourage l'usage de services partagés qui profitent à tous.

**Gouvernement et secteur public.** Les budgets sont annuels et votés, avec des règles sur les dépenses d'investissement et de fonctionnement, et la transparence des coûts peut être exigée. Alignez le calcul du coût des services sur les règles des finances publiques, documentez les méthodes d'affectation pour l'audit et envisagez un financement pluriannuel pour les équipes de service pérennes là où la loi le permet. Rapportez les coûts unitaires avec les mesures de résultats (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de construire le modèle d'affectation, le temps de la finance et des responsables de services pour convenir des règles, et le travail courant de rapports mensuels et de traitement des contestations. La plupart des organisations ont déjà le grand livre et les données de facturation infonuagique. Un petit modèle dans un tableur peut lancer le travail, et l'outillage vient ensuite.

Les rendements sont de meilleures décisions et moins de disputes. Les équipes qui voient leurs coûts trouvent du gaspillage : environnements inactifs, licences inutilisées et outils en double. Les dirigeants peuvent comparer des options en connaissant les inducteurs de coût, planifier la croissance en séparant coûts fixes et variables, et financer l'amélioration avec des preuves de son rendement. Construisez le dossier à partir de vos propres chiffres : le gaspillage trouvé à la première revue, le temps passé dans les disputes budgétaires et l'écart de prévision avant et après. Évitez les affirmations externes sur la dépense informatique moyenne en pourcentage du chiffre d'affaires à moins de pouvoir en retracer la source et la méthode, car les définitions varient largement. Le dernier sujet de cette partie rassemble le dossier financier en un seul endroit (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Répartir également les coûts partagés.** Cela pénalise les petits utilisateurs et cache les vrais inducteurs. Utilisez des inducteurs qui reflètent la consommation.
- **Le coût par ticket comme objectif.** Il récompense la clôture précoce des tickets. Utilisez le coût par demande résolue avec un compagnon de qualité.
- **Précision sans confiance.** Un beau modèle auquel les responsables ne croient pas ne vaut rien. Construisez les règles avec eux.
- **La refacturation d'abord.** Elle déclenche des querelles avant qu'il y ait compréhension. Commencez par la rétro-information.
- **Couper ce qui est difficile à voir.** L'entretien, l'apprentissage et le travail de fiabilité sont coupés en premier et coûtent plus cher ensuite. Protégez la capacité d'amélioration.
- **Comparer les équipes par le coût.** Les services diffèrent par leurs contraintes et leurs risques. Comparez chacun à son propre historique.
- **Changer en même temps les règles et la tendance.** Marquez les changements de règles sur les graphiques et rétablissez l'historique quand c'est possible.
- **Traiter le coût comme la propriété de la finance.** Les personnes qui exploitent le service savent d'où vient le coût. Incluez-les.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Tableau des coûts | Budget par département seulement | Coût par service pour quelques services, affectation approximative | Règles d'affectation documentées avec inducteurs ; couverture suivie | Coûts unitaires avec compagnons de qualité ; séparation fixe et variable | Coûts partagés de façon transparente avec les partenaires métier ; inducteurs influencés conjointement |
| Usage du coût | Coupes en pourcentage | Rétro-information à certains responsables | Rétro-information pour tous les services ; processus de contestation | L'écart de prévision et les tendances du coût unitaire pilotent les décisions | Coût, qualité et valeur arbitrés ouvertement dans le portefeuille |
| Modèle de financement | Budgets de projet annuels | Quelques équipes stables | Équipes pérennes pour les services clés | Le financement suit les résultats et l'apprentissage des services | Financement souple entre services avec investissement partagé dans les plateformes |

## Liste de vérification

- [ ] Les dépenses informatiques totales sont attribuées à des services ou déclarées en frais généraux, la couverture étant suivie.
- [ ] Les règles d'affectation et les inducteurs sont écrits et revus avec les responsables de services.
- [ ] Les coûts fixes et variables sont séparés pour chaque service important.
- [ ] Les coûts unitaires utilisent des unités convenues et stables et se placent à côté de mesures de qualité.
- [ ] Les prévisions sont consignées au début de la période et comparées aux réels.
- [ ] La rétro-information est disponible pour chaque responsable de service, avec un processus de contestation.
- [ ] Les dépenses ou la capacité d'exploitation, de changement et d'amélioration sont rapportées.
- [ ] Une part de la capacité est protégée pour l'amélioration.
- [ ] Les changements de règles et d'unités sont marqués sur les graphiques de tendance.
- [ ] Aucune équipe ni personne n'est classée selon le coût.

## Prompts d'IA

**Proposez des inducteurs de coût pour les services partagés.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Concevez un coût unitaire et son compagnon de qualité.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Préparez une revue de rétro-information des coûts.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Planifiez le passage à un financement d'équipes pérennes.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de coût ou d'économie unitaire.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de coût énonce sa règle d'affectation, son vecteur de détournement et son compagnon de qualité.

## Idées clés

- Attribuez le coût aux services avec des inducteurs que les gens peuvent suivre, et montrez les règles.
- Séparez le coût fixe du coût variable, et appariez chaque coût unitaire avec une mesure de qualité.
- Commencez par la rétro-information et un processus de contestation, et n'ajoutez la refacturation que si elle change les décisions.
- Financez des équipes pérennes autour des services là où vous le pouvez, et protégez la capacité d'amélioration.
- Rapportez des plages et des tendances, et marquez les changements de règles sur les graphiques.
- Ne classez jamais des personnes ou des équipes selon le coût.

## Références et lectures complémentaires

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
