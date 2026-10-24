# Métriques de capacité et de performance

**Mesurez à quel point un service est plein, à quel point ses requêtes les plus lentes sont lentes, et combien de marge reste avant que les utilisateurs ne le remarquent, puis prévoyez la demande avec des fourchettes pour que la capacité arrive avant le besoin et non après la plainte.**

## Vue d'ensemble et motivation

La disponibilité dit si un service répond. La capacité et la performance disent à quel point il répond bien, et pendant combien de temps il continuera de le faire à mesure que la demande grandit. Une page de paiement qui répond en huit secondes est « en marche » selon la plupart des définitions de la disponibilité et « cassée » selon la définition de chaque client. Une base de données à 95 % de son stockage est saine aujourd'hui et une panne le mois prochain. Ce sujet couvre les mesures qui comblent ces écarts.

La [planification de la capacité](https://en.wikipedia.org/wiki/Capacity_planning) est la pratique qui détermine les ressources dont un service a besoin pour répondre à une demande changeante. Dans ITIL 4, elle relève de la pratique de gestion de la capacité et de la performance, qui vise à s'assurer que les services atteignent la performance convenue et attendue et satisfont la demande actuelle et future de façon rentable. La pratique la décrit à trois niveaux : l'activité (ce que l'organisation demandera à ses services), le service (comment un service se comporte sous charge) et le composant (comment se comporte chaque serveur, base de données, lien réseau ou file). Les mesures de ce sujet travaillent surtout aux niveaux du service et du composant, et elles ont besoin d'une entrée du niveau de l'activité pour prévoir quoi que ce soit.

L'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traite la latence, le trafic, les erreurs et la saturation comme les quatre signaux à surveiller sur tout système orienté utilisateur, et relie les cibles de performance aux objectifs de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Les équipes agiles rencontrent la capacité comme une question de livraison : la prochaine version peut-elle porter la charge attendue, et qui détient la réponse ? Traiter la performance comme un critère d'acceptation, vérifié dans la chaîne, déplace la conversation plus tôt.

Plusieurs termes reviennent dans ce sujet. L'**utilisation** est la part de la capacité d'une ressource qui est employée sur un intervalle, par exemple la part du temps de processeur occupé. La **saturation** est la quantité de travail qui attend parce qu'une ressource est entièrement utilisée, par exemple la longueur d'une file d'exécution ou d'un arriéré de requêtes. L'utilisation dit à quel point une ressource est occupée. La saturation dit si du travail fait la queue pour elle, et les files sont ce que les utilisateurs ressentent. La **[latence](https://en.wikipedia.org/wiki/Latency_(engineering))** est le temps entre une requête et sa réponse. Le **[débit](https://en.wikipedia.org/wiki/Throughput)** est le rythme auquel un service termine du travail, par exemple en requêtes par seconde. La **marge** (headroom) est l'écart entre la charge de pointe actuelle et la charge à laquelle le service cesse d'atteindre ses objectifs. La **demande** est le travail que les utilisateurs et l'activité demandent au service, ce qui n'est pas la même chose que le travail qu'il termine : un service surchargé termine moins que ce qui a été demandé.

Une propriété des files d'attente explique pourquoi ces mesures se comportent comme elles le font. La [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory) montre que, pour un service aux arrivées aléatoires, le temps d'attente croît lentement tant que l'utilisation est modérée, puis monte fortement quand l'utilisation approche de la pleine charge. La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie le nombre moyen de requêtes dans un système au taux d'arrivée et au temps moyen que chacune y passe. Une ressource à forte utilisation moyenne est proche d'une falaise. La forme exacte de la courbe dépend du service : trouvez-la donc en testant votre propre système par des [tests de charge](https://en.wikipedia.org/wiki/Load_testing) au lieu d'emprunter un seuil à un article général.

La latence demande un soin particulier parce que la moyenne cache l'expérience qui compte. Un [percentile](https://en.wikipedia.org/wiki/Percentile) énonce la valeur en dessous de laquelle tombe une part donnée des observations : le 95e percentile (p95) est la latence que 95 % des requêtes battent. La [latence de queue](https://en.wikipedia.org/wiki/Tail_latency) tend à dominer dans les systèmes où une action d'utilisateur se démultiplie en de nombreux appels internes. Rapportez des percentiles plutôt que la seule moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 3.3, Temps de réponse et de résolution des incidents, qui fait le même argument pour le temps de résolution).

Enfin, la capacité dépend de la [prévision](https://en.wikipedia.org/wiki/Forecasting) de la demande, et la demande a des schémas : cycles quotidiens, cycles hebdomadaires et [saisonnalité](https://en.wikipedia.org/wiki/Seasonality) liée au calendrier, aux campagnes et aux lancements de produits. L'[autoscaling](https://en.wikipedia.org/wiki/Autoscaling) change la sensation, puisque les plateformes de nuage peuvent ajouter des ressources en quelques minutes, mais il ne supprime pas le sujet. L'autoscaling a des limites, un décalage, un coût et des dépendances qui ne passent pas à l'échelle, comme une base de données ou une interface tierce. Le versant coût relève du FinOps (voir le sujet 7.6, Métriques FinOps et de coûts du nuage).

Les sujets voisins couvrent l'arithmétique de la disponibilité (voir le sujet 5.3, Métriques de disponibilité), la conception des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) et la charge de rotation (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Ici, le sujet est constitué des ressources propres du service et de ses temps de réponse.

## Principes clés

- **Mesurez la saturation autant que l'utilisation.** L'utilisation montre à quel point une ressource est occupée, et la saturation montre si du travail attend. Les utilisateurs éprouvent l'attente.
- **Rapportez la latence comme une distribution.** Utilisez des percentiles par opération orientée utilisateur, et gardez la queue lente visible. Une moyenne d'une distribution asymétrique ne décrit presque personne.
- **Reliez les cibles à l'expérience utilisateur.** Un seuil est significatif quand il se retrace à quelque chose qu'un utilisateur ou l'activité valorise, non à ce qu'un outil se trouve tracer.
- **Planifiez avec des fourchettes et revoyez-les.** Une prévision est une fourchette aux hypothèses énoncées. Comparez-la à ce qui s'est passé et apprenez de l'erreur.
- **Connaissez vos limites en testant.** La capacité est une hypothèse tant qu'un test de charge réaliste ne la confirme pas. Répétez le test après les changements importants.
- **Décrivez des systèmes, jamais des personnes.** Ces mesures appartiennent à des services, des composants et des équipes. Elles ne sont jamais un tableau de score pour des individus.
- **Pesez le coût face au risque.** La capacité de réserve coûte de l'argent, et la capacité manquante coûte des clients. Rendez l'arbitrage visible pour qu'il soit choisi et non subi.

## Définitions des métriques

Le tableau liste sept mesures. Les horloges et les frontières sont énoncées dans chaque formule. Les mesures fondées sur les percentiles utilisent une fenêtre fixe, énoncée dans le registre, et sont calculées à partir d'observations brutes ou d'histogrammes, jamais comme une moyenne de moyennes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilisation des ressources | Part de la capacité d'une ressource employée sur un intervalle, rapportée comme un percentile élevé de la série d'intervalles | capacité occupée / capacité totale, par intervalle de 1 à 5 minutes ; rapporter la médiane et le 95e percentile sur la fenêtre de revue ; les fenêtres de maintenance avec la ressource vidée sont exclues | pourcentage | Supervision d'infrastructure et métriques de la plateforme de nuage | Gestion de la capacité et de la performance ; supervision et gestion des événements | Critères d'acceptation opérationnelle dans la définition de terminé ; signaux de ressources SRE | Hebdomadaire |
| Saturation | Quantité de travail qui attend une ressource entièrement utilisée | longueur de file, file d'exécution, requêtes en attente ou requêtes bridées, par intervalle ; rapporter le 95e percentile et la part des intervalles avec une attente quelconque ; les intervalles sans demande sont exclus | nombre, ou pourcentage d'intervalles | Télémétrie d'application et d'infrastructure | Gestion de la capacité et de la performance ; supervision et gestion des événements | Signal de saturation SRE ; limite de travail en cours sur une file de service | Hebdomadaire |
| Percentile de latence | Temps pris pour répondre à une requête pour une opération orientée utilisateur, rapporté à la médiane, au p95 et au p99 | temps de réponse de la requête reçue en périphérie au dernier octet envoyé, par requête réussie ; les requêtes échouées sont rapportées comme erreurs, non comme réponses rapides ; mesuré sur une fenêtre glissante | millisecondes | Journaux de l'équilibreur de charge ou de la passerelle, traçage, supervision des utilisateurs réels | Gestion des niveaux de service ; gestion de la capacité et de la performance | Indicateur de latence SRE et objectif de niveau de service | Continue, revue hebdomadaire |
| Marge | Charge restante qu'un service peut porter avant de manquer ses objectifs | (charge de rupture testée ou modélisée - charge de pointe actuelle) / charge de pointe actuelle ; la pointe est l'heure la plus chargée de la fenêtre ; la charge de rupture est la charge à laquelle l'objectif de latence est d'abord franchi dans un test, non le maximum matériel | pourcentage, ou jours à la croissance actuelle | Résultats de tests de charge et télémétrie du trafic | Gestion de la capacité et de la performance ; gestion des niveaux de service | Exigences non fonctionnelles et tests de performance dans la chaîne | Mensuelle, et avant les lancements importants |
| Erreur de prévision | Différence entre la demande prévue et la demande réelle pour une période | absolue (pointe prévue - pointe réelle) / pointe réelle, pour un horizon énoncé ; la prévision est figée au début de l'horizon et non révisée ensuite ; les événements ponctuels non prévus sont listés, non retirés | pourcentage | Registre des prévisions et télémétrie du trafic | Gestion de la capacité et de la performance ; planification liée à la demande dans la gestion financière des services | Prévision de versions et de feuille de route ; prévision de la demande SRE | Trimestrielle |
| Délai de livraison de la capacité | Temps nécessaire pour mettre en service une nouvelle capacité une fois le besoin accepté | l'horloge démarre quand la demande de capacité est approuvée, et s'arrête quand la capacité porte du trafic de production ; rapporter la médiane et le 85e percentile ; les demandes annulées sont exclues | jours | Enregistrements de demandes de l'outil ITSM, enregistrements de changements, journaux de mise à disposition | Gestion de la capacité et de la performance ; gestion des demandes de service ; maîtrise des changements | Délai de livraison d'un élément de backlog de plateforme (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Trimestrielle |
| Couverture des tests de performance | Part des services critiques ayant un test de charge récent et réaliste | services critiques avec un test de charge réussi plus récent qu'un âge énoncé, sur un environnement et une charge représentatifs / services critiques du registre ; la limite d'âge est écrite | pourcentage | Magasin de résultats de tests et registre des services | Gestion de la capacité et de la performance ; gestion des versions | Tests non fonctionnels dans la chaîne de livraison continue | Trimestrielle |

Ensemble, elles répondent à quatre questions : à quel point est-ce plein, à quel point est-ce lent, combien de marge reste-t-il, et à quelle vitesse pouvons-nous réagir quand la réponse change.

## Recommandations

### Commencer par l'utilisateur, puis la ressource

**1. Choisissez les quelques opérations qui comptent pour les utilisateurs, et mesurez-les.** Un service a des centaines de points d'accès et une poignée de parcours qui comptent, comme se connecter, chercher, payer et télécharger un relevé. Convenez-en avec les responsables produit et les clients, et fixez une attente de latence pour chacun. Ils se relient naturellement aux indicateurs de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

**2. Appariez chaque graphique de ressource avec un graphique de saturation.** Montrer la seule utilisation du processeur invite au faux confort de « ça n'a atteint que 70 % ». Ajoutez la file, les requêtes en attente ou le décompte de bridage à côté. Quand la saturation apparaît avant que l'utilisation ne paraisse alarmante, vous avez trouvé la vraie contrainte, et cette contrainte n'est souvent pas la ressource que vous surveilliez, comme un pool de connexions, une limite de fils d'exécution ou une limite de débit sur une interface partenaire.

**3. Préférez la queue chargée à la moyenne calme.** Les moyennes sur une journée mêlent le cœur de la nuit et la pointe du déjeuner. Regardez la période la plus chargée et consignez la date et la cause des pires intervalles. La question de planification est de savoir comment le service se comporte à sa pire heure attendue.

### Rapporter honnêtement la latence

**4. Publiez des percentiles par opération, et nommez la fenêtre.** Énoncez la médiane, le p95 et le p99 de chaque opération importante sur une fenêtre glissante, et dites quelles requêtes sont incluses. Ne moyennez jamais des percentiles entre serveurs ou entre opérations, car le résultat ne correspond à l'expérience d'aucun vrai utilisateur ; combinez plutôt des histogrammes ou les observations brutes. Si l'échantillon est petit, dites-le, puisqu'un p99 tiré de quelques centaines de requêtes est un chiffre bruité (voir le sujet 1.6, Culture statistique pour les métriques de service).

**5. Mesurez là où est l'utilisateur, autant que là où est le serveur.** Les temps côté serveur laissent de côté le réseau, le navigateur et l'appareil. Ajoutez une supervision des utilisateurs réels ou des contrôles synthétiques pour distinguer un arrière-plan lent d'un dernier kilomètre lent.

**6. Comptez les erreurs et les délais dépassés avec la latence, non à sa place.** Un service qui échoue vite paraît rapide sur un graphique de latence, et un service qui dépasse son délai paraît lent pour la mauvaise raison. Rapportez le taux d'erreur avec le percentile de latence pour qu'un échec rapide ne puisse pas flatter le résultat.

### Trouver les limites, puis laisser de la marge

**7. Testez volontairement le point de rupture.** Menez des tests de charge qui rejouent un mélange réaliste d'opérations, faites monter la charge et notez où l'objectif de latence est d'abord franchi et quelle ressource sature en premier. Testez sur un environnement qui ressemble à la production sur les points qui comptent, et écrivez les points sur lesquels il ne lui ressemble pas. Un test raté dans un endroit sûr est l'incident le moins cher que vous aurez (voir le sujet 4.5, Métriques des versions et des déploiements, pour mettre des contrôles dans la chaîne).

**8. Fixez la marge comme une politique et revoyez-la comme un arbitrage.** Décidez de la marge qu'un service garde au-dessus de sa pointe attendue, et pourquoi. Les services critiques tournés vers les clients en justifient plus, les services internes par lots moins. Le chiffre est un choix métier sur le coût et le risque : consignez donc le raisonnement et revoyez-le quand le coût d'une panne ou le prix de la capacité change. Ne copiez pas un chiffre d'une autre organisation.

### Prévoir la demande avec les personnes qui la connaissent

**9. Demandez à l'activité ce qui vient, et écrivez la prévision.** Les campagnes marketing, les nouveaux clients, les échéances réglementaires et les événements saisonniers changent la demande bien avant que le trafic ne le montre. Tenez un court registre de prévisions avec la date, les hypothèses, la fourchette, le responsable et la source de chaque entrée. Une prévision donnée comme une fourchette, avec un cas bas, attendu et haut, est plus honnête qu'un chiffre unique et plus utile pour décider combien acheter.

**10. Notez la prévision et servez-vous de l'erreur pour l'améliorer.** Après chaque période, comparez la prévision figée avec ce qui s'est passé, avec l'erreur de prévision, et listez les causes des grands écarts. Les causes courantes sont une campagne non annoncée, un changement de comportement des utilisateurs et une dépendance qui a bougé. Le but n'est pas une erreur nulle, qui n'est pas atteignable, mais d'apprendre quelles entrées sont fiables, et d'élargir la fourchette là où elles ne le sont pas.

### Faciliter l'ajout de capacité

**11. Raccourcissez le délai de livraison de la capacité avant de courir après la précision.** Si une nouvelle capacité met des semaines à arriver, vous devez prévoir loin à l'avance et porter plus de réserve. Si elle met quelques minutes, vous pouvez tourner plus près du besoin. Regardez les étapes entre « approuvé » et « porte du trafic », comme l'achat, l'approbation, la mise à disposition, la configuration et les tests, et supprimez d'abord les plus longues attentes (voir le sujet 4.3, Métriques de maîtrise des changements). En termes ITIL, c'est un choix de stratégie de capacité : devancer la demande, la suivre ou rester en retrait ; choisissez consciemment, service par service.

**12. Traitez l'autoscaling comme un système à mesurer.** Consignez la fréquence de déclenchement du dimensionnement, le temps que met la nouvelle capacité à devenir utile, la fréquence à laquelle il atteint son maximum configuré, et ce qu'il coûte. Un autoscaler collé à sa limite est un plan de capacité qui a déjà échoué. Revoyez cela avec la vue des coûts pour que la performance et la dépense soient discutées ensemble (voir le sujet 7.5, Coût du service et économie unitaire).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Utilisation des ressources | Moyenner sur de longs intervalles pour cacher les pointes ; compter la capacité réservée inactive comme « utilisée » ; ne rapporter que les ressources les plus calmes | 95e percentile en heure de pointe à côté de la moyenne ; mesure de saturation ; liste des ressources dans le périmètre revue face à la carte des services |
| Saturation | Relever les limites de file pour que rien ne soit rapporté comme rejeté ou bridé ; déplacer l'attente vers une autre file qui n'est pas mesurée | Percentile de latence et taux d'erreur pour la même opération ; temps de file de bout en bout, non d'une seule étape ; revue de toutes les files du chemin |
| Percentile de latence | Rapporter seulement la moyenne ou la médiane ; retirer de l'échantillon les requêtes lentes ou échouées ; mesurer depuis un emplacement interne rapide ; exclure les « valeurs aberrantes » | p95 et p99 toujours montrés ; taux d'erreurs et de délais dépassés montré à côté de la latence ; supervision des utilisateurs réels comparée aux temps côté serveur ; taille d'échantillon brute montrée |
| Marge | Choisir une charge de test douce ; tester un environnement plus grand que la production ; définir le point de rupture comme le maximum matériel | Charge de test revue face à la forme du trafic de production ; liste écrite des différences entre test et production ; marge retestée après les changements pertinents |
| Erreur de prévision | Réviser la prévision après coup ; fixer de très larges fourchettes pour que chaque résultat soit « dans la fourchette » ; retirer les mois à surprises comme « événements non prévus » | Prévision figée et datée dans le registre ; largeur de fourchette rapportée avec l'erreur ; chaque événement exclu listé et revu |
| Délai de livraison de la capacité | Démarrer l'horloge plus tard en retardant les enregistrements d'approbation ; clore les demandes quand la commande est passée au lieu de quand la capacité porte du trafic ; scinder les demandes | Horloge définie de l'approbation au trafic porté ; échantillon de demandes closes comparé aux journaux de mise à disposition ; décompte des demandes rouvertes |
| Couverture des tests de performance | Lancer un test trivial pour revendiquer la couverture ; rétrécir la liste des services critiques ; garder à jour un vieux test réussi | Âge du test et réalisme de la charge consignés ; liste des services critiques revue face au catalogue des services et à l'historique d'incidents ; tests échoués rapportés autant que les réussis |

Une lecture saine montre une utilisation aux cycles quotidiens visibles et de la marge, une saturation qui apparaît rarement et brièvement, des percentiles de latence stables ou en amélioration aux heures les plus chargées, et une erreur de prévision connue qui rétrécit lentement. Le signe sain est que les surprises sont discutées avec leurs causes. Des chiffres parfaits doivent éveiller le soupçon, car ils signifient généralement que la mesure est douce.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Tourner avec une marge généreuse | Absorbe les surprises ; protège la latence et la disponibilité | Coût plus élevé ; cache l'inefficacité et une prévision faible |
| Tourner au plus juste avec un autoscaling rapide | Coût plus bas ; la capacité suit la demande | Dépend de la vitesse et des limites du dimensionnement ; les dépendances peuvent ne pas passer à l'échelle ; plus difficile à raisonner pendant un incident |
| Cibles de latence en percentiles | Reflètent ce que ressentent les requêtes lentes ; résistent aux astuces de moyenne | Demandent plus de données et de plus gros échantillons ; bruitées aux percentiles élevés pour les services à faible trafic |
| Latence moyenne ou médiane seulement | Simple et stable | Cache la queue qui pilote les plaintes et le désabonnement |
| Tests de charge synthétiques | Contrôlés, répétables, sûrs | Aussi réalistes que le modèle de charge et l'environnement |
| Télémétrie de production comme base | Reflète le comportement et le mélange réels | Ne révèle les limites qu'après leur franchissement ; ne peut pas sonder au-delà de la demande actuelle |
| Modèles de prévision détaillés | Captent la saisonnalité et la croissance | Demandent des données et de la compétence ; un faux sentiment de précision quand les entrées sont faibles |
| Fourchettes simples convenues avec l'activité | Faciles à expliquer et à mettre à jour ; concentrent sur les hypothèses | Plus grossières ; dépendent d'une entrée honnête de l'activité |

Choisissez la méthode la plus légère qui soutient la décision. Pour la plupart des services, un regard hebdomadaire sur l'utilisation en heure de pointe, la saturation et les percentiles de latence, un test de charge avant les changements importants et une revue trimestrielle des prévisions suffisent. Ajoutez de la modélisation là où le coût d'une erreur est élevé.

## Questions à discuter avec votre équipe

**1. Quels trois parcours utilisateurs comptent le plus, et quel temps de réponse les utilisateurs attendent-ils pour chacun ?**
Demandez au groupe de nommer les parcours, puis comparez avec ce que tracent les tableaux de bord. L'animateur doit pousser vers une attente qui se retrace à un utilisateur ou un client, non à une préférence d'ingénierie.

**2. Où notre service est-il près d'une falaise, et comment le savons-nous ?**
Cherchez des ressources comme les pools de connexions, les limites de fils d'exécution ou une limite de débit d'un partenaire. Demandez quand chacune a été testée pour la dernière fois jusqu'à son point de rupture. Si personne ne le sait, c'est le premier travail à faire.

**3. Comment rapportons-nous la latence aujourd'hui, et que dirait le un pour cent d'utilisateurs le plus lent ?**
Affichez côte à côte la moyenne, la médiane, le p95 et le p99 d'une opération et discutez de l'écart. Demandez quelles requêtes sont exclues et pourquoi, et si les requêtes échouées sont comptées.

**4. Quelle marge gardons-nous, qui l'a choisie, et quand avons-nous revu ce choix pour la dernière fois ?**
Discutez du coût de la marge et du coût d'une panne le jour le plus chargé. Convenez d'une date de revue et des preuves qui changeraient la marge.

**5. Quelle était la qualité de nos trois dernières prévisions de demande, et qu'avons-nous appris ?**
Comparez les prévisions datées avec les réalisations et les causes des grands écarts. Demandez ce que l'activité savait et que l'exploitation n'a pas reçu. Décidez d'une entrée à ajouter au registre des prévisions, comme le calendrier marketing ou un calendrier de lancements.

**6. Si nous avions besoin du double de capacité le mois prochain, qu'est-ce qui nous arrêterait ?**
Listez chaque étape de la demande jusqu'au trafic de production et marquez où elle attend. Incluez l'achat, les approbations, les licences et les dépendances qui ne passent pas à l'échelle. L'animateur doit chercher la plus longue attente qui n'est pas technique, car c'est souvent une approbation ou un contrat. Convenez d'une étape à raccourcir et mesurez l'effet par le délai de livraison de la capacité.

## Quatre perspectives

### Équipes produit et de livraison

Incluez une attente de performance dans les critères d'acceptation des fonctionnalités qui touchent des chemins chargés, menez un test de charge dans la chaîne là où c'est praticable, et prévenez tôt l'exploitation des lancements. Méfiez-vous de l'habitude de traiter la performance comme une tâche de « durcissement » ultérieure, qui se transforme en travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent la télémétrie, le plan de capacité et la réponse quand une limite est atteinte. Elles ont besoin de la saturation et de la latence de queue sur les tableaux de bord qu'elles utilisent réellement, d'un registre de prévisions partagé avec l'activité et de résultats de tests auxquels on se fie. Elles doivent consigner chaque incident lié à la capacité avec sa cause (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 3.4, Métriques des incidents majeurs).

### Direction et gouvernance

Les dirigeants décident de la part de risque et de coût que l'organisation accepte, et la politique de marge est là où cette décision se voit. Demandez les percentiles de latence et la marge par service critique, avec l'erreur de prévision à côté, et traitez les demandes de capacité comme des décisions d'investissement qui portent des preuves. Les instances de gouvernance doivent résister à un objectif d'utilisation unique pour toute l'organisation, qui pousse chaque service au même point de la falaise.

### Clients et utilisateurs

Les clients ressentent la lenteur comme de la non-fiabilité, bien avant qu'un chiffre de disponibilité ne change. Énoncez la performance en termes de percentiles à une charge donnée, et partagez la façon dont le service gère les périodes de pointe (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA, et le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une boutique, un service de paiement et un service de commandes, chacun détenu par une équipe produit, avec une équipe plateforme qui fournit l'infrastructure partagée. Tous les chiffres de cet exemple sont illustratifs.

La revue hebdomadaire de l'équipe plateforme montre la recherche de la boutique avec une latence médiane de 180 millisecondes et un p95 de 420 millisecondes, tous deux dans l'objectif, et une utilisation du processeur au 95e percentile en heure de pointe de 58 %. Trois semaines avant des soldes planifiés, un responsable du support signale que des clients disent que le site « rame » pendant les campagnes du soir. Le tableau de bord est vert.

L'équipe regarde le p99 de la recherche à l'heure la plus chargée des soldes précédents et trouve 3,1 secondes, face à un objectif de p99 de 1,5 seconde. La saturation raconte le reste : le pool de connexions vers la base de données produits montre des requêtes en attente dans 14 % des intervalles d'une minute pendant la pointe, alors que l'utilisation du processeur n'a jamais dépassé 60 %. La contrainte n'a jamais été le processeur. C'était une limite de pool fixée quand le trafic représentait un tiers d'aujourd'hui.

Le responsable produit et le responsable de la plateforme mènent un test de charge à 1,5 fois la pointe de l'an dernier, avec le mélange d'opérations de production. Le test montre que l'objectif de p99 est franchi à 1,15 fois la pointe de l'an dernier : la marge est donc de 15 % face à une politique de 40 % pour les services tournés vers les clients. Le calendrier marketing suggère une demande de 1,6 fois la pointe de l'an dernier le jour d'ouverture. L'ancienne prévision, figée dans le registre, avait placé la fourchette de 1,2 à 1,4, et l'erreur face aux soldes de l'an dernier était de 22 %, surtout à cause d'une campagne de courriels non annoncée.

La décision, consignée dans le journal des décisions, a quatre volets. D'abord, relever la limite du pool et ajouter des réplicas en lecture, puis retester. Ensuite, ajouter une liste de vérification de préparation des soldes au processus de version pour que les campagnes arrivent au registre des prévisions au moins six semaines à l'avance. Puis ajouter le p99 et la saturation du pool à la revue hebdomadaire. Enfin, convenir avec la finance du coût de la capacité supplémentaire pour la fenêtre des soldes, en utilisant un dimensionnement programmé au lieu d'une réserve à l'année.

Après les changements, un second test montre l'objectif de p99 tenant jusqu'à 1,8 fois la pointe de l'an dernier. Le risque de détournement a surgi pendant la revue. Un prestataire avait proposé un « gain rapide » consistant à exclure du rapport de latence les requêtes plus lentes que 5 secondes, au motif qu'elles étaient des valeurs aberrantes. L'équipe a refusé : les requêtes exclues étaient précisément les clients qui se plaignaient. Le garde-fou a été de garder les taux d'erreurs et de délais dépassés à côté de chaque percentile de latence et de consigner la taille d'échantillon. Pendant les soldes, le p99 culmine à 1,2 seconde, la saturation du pool reste sous 1 % des intervalles, et l'erreur de prévision est de 9 %, consignée dans le registre avec la raison de l'écart restant.

## Agilité, IA, automatisation et analytique

### Agilité

Planifiez la capacité par cycles courts avec les parties prenantes du produit, en utilisant les prévisions comme des fourchettes qui se mettent à jour avec les données. La précaution est que surdimensionner pour protéger un chiffre vedette gaspille de l'argent.

### IA

Les charges d'IA, comme l'inférence de modèles, ont une demande variable et parfois coûteuse, et les fonctionnalités d'IA peuvent changer vite les schémas d'usage. Suivez les percentiles de latence et le coût par requête pour les chemins d'IA, et appariez-les à la qualité des réponses. La précaution est qu'optimiser pour la vitesse peut abaisser la qualité des réponses : mesurez donc les deux.

### Automatisation

Recueillez automatiquement l'utilisation et la latence et automatisez le dimensionnement dans des limites. Mesurez le dimensionnement sur l'oscillation et sur le coût qu'il ajoute. La précaution est que l'autoscaling cache la saturation jusqu'à ce que les limites soient atteintes : suivez donc la marge, pas seulement la charge actuelle.

### Analytique

Montrez les percentiles de latence et la marge avec les fourchettes de prévision et l'historique de l'erreur de prévision. La décision éclairée est quand ajouter de la capacité. La précaution est que les prévisions tirées d'un court historique sont fragiles : énoncez donc l'intervalle.

## Éclairage sectoriel

**Startup.** Le trafic est faible et la croissance incertaine : les mesures peu coûteuses valent donc mieux que les élaborées. Suivez les percentiles de latence des deux ou trois parcours qui rapportent de l'argent, surveillez la saturation de la base de données et menez un simple test de charge avant les lancements. Fixez une alerte de dépense pour qu'un bogue ou un pic de trafic ne devienne pas une facture.

**Petite entreprise.** Les services sont souvent hébergés ou achetés : la capacité est donc une affaire de fournisseur. Demandez au fournisseur des rapports de performance et de capacité par écrit, apprenez ce que dit le contrat des périodes de pointe, et surveillez la vue du client avec quelques contrôles synthétiques. Suivez la marge du seul système dont l'entreprise ne peut se passer.

**Grande entreprise.** De nombreux services partagent l'infrastructure : les problèmes de capacité apparaissent donc au mauvais endroit. Investissez dans une carte des services reliant les services aux composants qu'ils utilisent, un processus de prévision partagé avec les unités métier et des définitions communes des percentiles de latence entre équipes. Fixez la politique de marge selon la criticité du service.

**Gouvernement et secteur public.** La demande est façonnée par des échéances fixées par la loi, comme les dates de déclaration fiscale, les demandes de prestations et les élections, et l'échec à ces dates est public. Les prévisions doivent utiliser le calendrier légal, et la capacité de pointe peut devoir être contractée des mois à l'avance. Les délais de passation de marchés allongent le délai de livraison de la capacité : mesurez-les donc et planifiez autour d'eux. Les rapports publics de performance de service doivent énoncer le percentile et les conditions de charge (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût a quatre parts. La première est l'instrumentation : la télémétrie et son stockage. La deuxième est le test : un environnement représentatif et des modèles de charge qui demandent de la maintenance. La troisième est la routine de planification : tenir le registre des prévisions et revoir l'erreur chaque trimestre. La quatrième est la capacité de réserve elle-même, qui est souvent le plus gros coût et celui qui mérite le plus d'être rendu explicite.

Le rendement vient de moins d'incidents liés à la capacité, de meilleures décisions sur quand acheter et quand ne pas le faire, et d'une dépense évitée sur la capacité que les données montrent inutile. Ne promettez pas d'avance un pourcentage d'économie. Mesurez plutôt votre propre schéma : le nombre d'incidents à cause de capacité par trimestre, la part des pointes qui ont demandé une action d'urgence, la dépense en capacité inactive relativement à la politique de marge convenue, et la tendance de l'erreur de prévision. Le livre SRE de Google traite la fiabilité comme une décision économique.

Le coût total de possession est dominé par les personnes et l'environnement de test. Une petite équipe peut commencer avec la supervision existante, une revue hebdomadaire et un test de charge pour le parcours le plus important.

## Anti-modèles et pièges

- **Rapporter l'utilisation moyenne comme l'histoire de la capacité.** La moyenne cache la pointe et la falaise. Rapportez le percentile élevé en heure de pointe et la mesure de saturation.
- **La latence moyenne sur le tableau de bord de direction.** La queue pilote les plaintes. Montrez le p95 et le p99, avec les taux d'erreurs et la taille d'échantillon.
- **Exclure les « valeurs aberrantes » de la latence.** Les requêtes les plus lentes sont de vrais utilisateurs. Gardez-les, et investiguez la cause au lieu de rogner les données.
- **Moyenner des percentiles entre serveurs.** Le résultat ne décrit personne. Combinez des histogrammes ou des observations brutes avant de calculer le percentile.
- **Des plans de capacité construits à partir du seul trafic de l'an dernier.** La demande dépend des événements de l'activité. Incluez le calendrier de l'activité et revoyez l'erreur de prévision.
- **Tester dans un environnement qui ne ressemble pas à la production.** Un résultat réussi donne une fausse confiance. Consignez les différences et corrigez-les, ou testez en production en sécurité.
- **Utiliser les métriques de capacité pour classer des ingénieurs ou des équipes.** L'utilisation et la latence décrivent des systèmes. Revoyez-les en termes de conception du service et de demande, et gardez les individus hors du tableau.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Mesure de l'utilisation, de la saturation et de la latence | Moyennes de quelques serveurs ; alertes sur une forte utilisation du processeur | Certaines équipes tracent des percentiles de latence et des files | Définitions partagées : percentiles par opération clé, saturation à côté de l'utilisation, fenêtres écrites | Suivies face aux objectifs, appariées aux taux d'erreurs, revues chaque semaine | Définitions révisées conjointement avec les fournisseurs et les clients ; vues côté utilisateur et côté serveur réconciliées |
| Limites et marge | Limites inconnues jusqu'à une défaillance | Tests de charge occasionnels avant les gros lancements | Tests de charge sur les services critiques face à une politique de marge écrite | Marge suivie par service et retestée après les changements pertinents | Politique de marge ajustée d'après les données de coût, de risque et d'incidents entre équipes et fournisseurs |
| Prévision | Devinettes ponctuelles au moment d'une demande | Les équipes tiennent leurs prévisions dans leur tête ou des tableurs | Un registre de prévisions partagé avec fourchettes et responsables, alimenté par le calendrier de l'activité | Erreur de prévision notée et revue, avec les causes des écarts | Prévisions construites avec l'activité et les fournisseurs ; entrées améliorées couramment |
| Livraison de la capacité | Capacité ajoutée après un incident | Demandes standard pour les cas courants | Chemin documenté de l'approbation au trafic de production, avec délai de livraison de la capacité mesuré | Plus longues attentes ciblées par une amélioration financée | Capacité ajoutée automatiquement dans la politique ; comportement du dimensionnement et coût revus ensemble |

## Liste de vérification

- [ ] Les parcours utilisateurs critiques sont nommés, chacun avec une attente de latence convenue avec son responsable.
- [ ] La latence est rapportée en médiane, p95 et p99 par opération, avec fenêtre et taille d'échantillon énoncées.
- [ ] Les percentiles sont calculés à partir d'histogrammes ou d'observations brutes, jamais moyennés entre serveurs.
- [ ] Chaque graphique d'utilisation a un graphique de saturation à côté.
- [ ] Les taux d'erreurs et de délais dépassés sont montrés à côté de chaque percentile de latence.
- [ ] Chaque service critique a un test de charge, avec les différences de charge et d'environnement écrites.
- [ ] Une politique de marge existe par criticité de service, avec le raisonnement consigné.
- [ ] Un registre de prévisions daté contient fourchettes, hypothèses et responsables, et est alimenté par le calendrier de l'activité.
- [ ] L'erreur de prévision est revue chaque trimestre, avec les causes des grands écarts consignées.
- [ ] Le délai de livraison de la capacité est mesuré de l'approbation au trafic porté.
- [ ] Les limites, le décalage et le coût de l'autoscaling sont revus avec le responsable du service.
- [ ] Aucune mesure de capacité ou de performance n'est rapportée par individu.

## Prompts d'IA

**Passez en revue un rapport de latence pour y chercher une déformation cachée.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Rédigez un plan de test de charge pour un service.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Structurez une prévision de demande avec l'activité.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Trouvez la vraie contrainte à partir des symptômes.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure de capacité ou de performance, ses horloges et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de capacité ou de performance modifié garde chaque métrique appariée avec un vecteur de détournement et un garde-fou.

## Idées clés

- Mesurez la saturation avec l'utilisation, car les utilisateurs ressentent la file, non le pourcentage.
- Rapportez la latence en percentiles par opération, avec les taux d'erreurs et la taille d'échantillon, et ne moyennez jamais des percentiles.
- Trouvez les limites en testant et fixez la marge comme une politique consignée qui pèse le coût face au risque.
- Prévoyez la demande en fourchettes avec l'activité, figez la prévision et apprenez de l'erreur.
- Raccourcissez le délai de livraison de la capacité et mesurez l'autoscaling, pour que la capacité suive le besoin.
- Décrivez des services et des systèmes, jamais des personnes, et traitez des chiffres à l'air parfait comme une invite à vérifier la mesure.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
