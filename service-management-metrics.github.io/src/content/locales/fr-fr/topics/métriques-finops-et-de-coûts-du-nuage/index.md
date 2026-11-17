# Métriques FinOps et de coûts du nuage

**Les dépenses infonuagiques sont décidées par des ingénieurs chaque jour : donnez donc aux personnes qui construisent et exploitent les services les données de coût, le contexte et l'autorité d'agir, et mesurez le gaspillage, l'affectation et le coût unitaire avec le même soin que la fiabilité.**

## Vue d'ensemble et motivation

Dans un centre de données, la dépense est décidée par des bons de commande et arrive en quelques grandes marches. Dans le nuage, un développeur peut engager l'organisation à une charge récurrente avec quelques lignes de configuration, et un environnement de test oublié peut coûter de l'argent pendant des mois. L'[informatique en nuage](https://en.wikipedia.org/wiki/Cloud_computing) offre un accès à la demande à des ressources de calcul, et le modèle de [paiement à l'usage](https://en.wikipedia.org/wiki/Pay_as_you_go) qui l'accompagne signifie que la facture suit l'usage. C'est puissant et risqué. La souplesse qui permet à une équipe de monter en charge en quelques minutes permet aussi au coût de croître plus vite que personne ne le remarque.

FinOps, contraction de finance et d'exploitation (operations), est une pratique et une culture de gestion du coût du nuage. La FinOps Foundation la décrit comme un cadre opérationnel dans lequel les équipes d'ingénierie, de finance, d'achats et du métier collaborent sur des décisions de dépense fondées sur les données. Son idée centrale est que les personnes qui utilisent les ressources infonuagiques doivent voir leurs coûts et en être responsables, pendant que la finance fournit la structure, les prévisions et les engagements. Cela correspond aux objectifs agiles de collaboration continue entre parties prenantes et d'équipes qui détiennent leurs services, et à la préoccupation d'ITIL pour la gestion financière des services. Ce sujet couvre les mesures qui rendent cette pratique concrète. Il s'appuie sur les idées générales de calcul du coût du sujet précédent (voir le sujet 7.5, Coût du service et économie unitaire).

Le coût du nuage a des caractéristiques qui demandent leurs propres mesures.

- **Élasticité.** La [mise à l'échelle automatique](https://en.wikipedia.org/wiki/Autoscaling) ajuste les ressources à la demande, ce qui rend le coût variable et parfois surprenant. L'[informatique sans serveur](https://en.wikipedia.org/wiki/Serverless_computing) facture à l'exécution, et déplace l'attention des serveurs vers les requêtes.
- **Beaucoup de petites décisions.** Chaque choix de taille d'instance, de niveau de stockage, de région et d'architecture change le coût. La dépense est répartie entre des centaines de décisions prises par de nombreuses personnes, et elle est difficile à voir sans étiquettes et sans bons rapports.
- **Modèles de prix.** Les prix à la demande sont souples et les plus élevés. Les engagements en échange d'une [remise de volume](https://en.wikipedia.org/wiki/Volume_discount), comme la capacité réservée ou les plans d'économies, abaissent le prix unitaire en échange d'une promesse d'usage. La capacité ponctuelle ou préemptible est bon marché et peut être reprise. Chaque modèle comporte un risque, et le bon dosage dépend de la prévisibilité de la charge de travail. Les conditions exactes diffèrent selon les fournisseurs et changent souvent : vérifiez donc la documentation actuelle du fournisseur avant de vous appuyer sur un détail.
- **Coût partagé et non étiqueté.** Les ressources sans étiquette de responsable ou d'objet ne peuvent être attribuées. Les plateformes partagées répartissent le coût entre des équipes qui consomment différemment.
- **Coût environnemental.** Les charges de travail infonuagiques consomment de l'énergie et causent des émissions, et l'[empreinte carbone](https://en.wikipedia.org/wiki/Carbon_footprint) d'une charge de travail est de plus en plus souvent à rapporter. Les méthodes pour l'estimer sont encore en développement, et les chiffres doivent venir avec leur méthode.

Les mesures de coût dans le nuage sont faciles à améliorer par des raccourcis. Réduire la dépense en coupant la supervision ou en réduisant les ressources jusqu'à ce que le service s'effondre montre une facture plus basse et un service pire. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : chaque mesure de coût ici se place à côté d'une mesure de fiabilité ou de qualité, et aucune équipe n'est classée selon sa facture (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Le coût est une métrique d'ingénierie.** Les équipes qui construisent et exploitent un service voient son coût et en sont responsables.
- **Affectez aux responsables.** Chaque dollar doit correspondre à une équipe ou à un pool partagé déclaré.
- **Appariez le coût à la qualité et à la fiabilité.** Des économies qui cassent le service ne sont pas des économies.
- **Optimisez en continu, par petites étapes.** Revoyez régulièrement le gaspillage et agissez dans le cadre du travail normal.
- **Prévoyez avec des plages.** Une demande variable rend fragiles les prévisions à chiffre unique.
- **Collaborez entre fonctions.** L'ingénierie, la finance, les achats et le métier décident ensemble.
- **Ne classez pas les équipes selon leur facture.** Les services diffèrent, et la croissance n'est pas du gaspillage.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de l'affectation | Part des dépenses infonuagiques attribuée à une équipe responsable ou à un pool partagé déclaré | dépenses avec un responsable et une étiquette de service valides, ou dans un pool partagé déclaré / dépenses infonuagiques totales | pourcentage | Export de facturation infonuagique, politique d'étiquetage | Gestion financière des services ; gestion des actifs informatiques | Responsabilité de l'équipe sur ce qu'elle exploite | Hebdomadaire |
| Coût unitaire du nuage | Coût des ressources infonuagiques par unité de quelque chose que les utilisateurs valorisent | coût infonuagique du service dans la période / unités livrées dans la période | monnaie par unité | Données de facturation jointes au volume du service | Gestion financière des services ; gestion des niveaux de service | Coût de service par résultat | Mensuelle |
| Taux de gaspillage | Part des dépenses consacrée à des ressources inactives ou manifestement surdimensionnées | dépenses sur ressources inactives ou surdimensionnées, selon les règles convenues / dépenses totales sur les ressources du périmètre | pourcentage | Métriques d'utilisation et facturation | Gestion de la capacité et de la performance ; gestion financière | Réduction du gaspillage dans la chaîne d'outils | Hebdomadaire |
| Couverture des engagements | Part de l'usage stable éligible couverte par des engagements à remise | usage éligible couvert par des engagements / usage éligible | pourcentage | Rapports de facturation et d'engagements | Gestion financière des services ; gestion des fournisseurs | Planification de la demande prévisible | Mensuelle |
| Utilisation des engagements | Part des engagements achetés qui a été utilisée | heures d'engagement utilisées / heures d'engagement achetées | pourcentage | Rapports d'engagements | Gestion financière des services ; gestion des fournisseurs | Valeur tirée d'un investissement planifié | Mensuelle |
| Écart de prévision | Différence entre la prévision et les dépenses infonuagiques réelles, par équipe et au total | (réel moins prévision) / prévision | pourcentage | Journal des prévisions et données de facturation | Gestion financière des services | Exactitude des prévisions | Mensuelle |
| Délai d'accusé de réception d'une anomalie | Temps entre une alerte d'anomalie de coût et une décision consignée du responsable | médiane et 85e percentile des heures entre l'alerte et la réponse du responsable | heures | Alertes d'anomalies et enregistrements de tickets | Supervision et gestion des événements ; gestion des incidents | Réactivité à un signal de production | Mensuelle |

Définissez le périmètre des ressources, les règles d'étiquetage et ce qui compte comme inactif ou surdimensionné, et consignez-les. La couverture des engagements se calcule uniquement sur l'usage de base stable, non sur les pointes. Le coût unitaire utilise une unité convenue avec le responsable du service et fixée pour la tendance. Les données de coût doivent dire si elles incluent les crédits, les remises, les taxes et les frais de soutien, et quelle monnaie et quel taux de change s'appliquent.

## Recommandations

### Rendre le coût visible et détenu

**1. Imposez un petit jeu d'étiquettes obligatoires.** Exigez que chaque ressource porte une étiquette de responsable, de service et d'environnement, imposée par une politique à la création, non par un nettoyage après coup. La couverture de l'affectation mesure l'efficacité de cela. Les ressources qui ne sont pas étiquetées peuvent être bloquées, ou signalées dans la journée au titulaire du compte. Gardez le jeu d'étiquettes petit pour que les gens s'y conforment.

**2. Donnez aux équipes leur propre vue des coûts.** Offrez à chaque équipe une vue quotidienne ou hebdomadaire de ses dépenses par service et par environnement, avec tendances et anomalies. Les gens réagissent aux données qu'ils voient et comprennent. Un rapport mensuel qui ne va qu'à la finance change peu de chose.

**3. Définissez les pools de coûts partagés et leurs inducteurs.** Les plateformes partagées, le réseau et les frais de soutien demandent une règle de répartition (voir le sujet 7.5, Coût du service et économie unitaire). Publiez la règle, revoyez-la avec les équipes et gardez le pool petit. Une règle que les gens peuvent suivre gagne plus de confiance qu'une règle équitable que personne ne comprend.

**4. Tenez une courte conversation régulière sur les coûts.** Réunissez l'ingénierie, la finance et les responsables de produit à cadence régulière, chaque semaine ou quinzaine pour les gros dépensiers et chaque mois pour les autres, pendant trente minutes. Revoyez la tendance, les anomalies et le backlog d'optimisation. C'est de la collaboration continue en pratique, et cela garde le coût à l'ordre du jour sans processus lourd.

### Mesurer la valeur, pas seulement la dépense

**5. Exprimez le coût par unité.** La dépense infonuagique totale monte avec le succès. Ce qui compte est le coût par client actif, par transaction ou par construction. Choisissez une unité significative pour le service, suivez-la dans le temps et annotez les changements. Un coût unitaire qui baisse avec une dépense totale qui monte est un schéma sain, et un coût unitaire qui monte avec un usage stable est une invite à investiguer.

**6. Montrez la fiabilité et la qualité à côté du coût.** Affichez le coût avec la disponibilité, la latence et le taux d'erreur du même service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Des économies qui font monter les taux d'erreur sont un transfert de coût vers les utilisateurs. Une approche par budget d'erreur peut rendre l'arbitrage explicite : dépenser moins quand le service est bien meilleur que nécessaire, et investir quand il ne l'est pas.

**7. Suivez le gaspillage avec des règles explicites.** Définissez inactif (par exemple, aucun usage significatif sur une période) et surdimensionné (par exemple, utilisation constamment très inférieure à la capacité provisionnée), et rapportez la dépense de chacun. Les règles demandent du soin : un système de secours pour la résilience paraît inactif par conception, et doit être exclu et étiqueté. Revoyez les règles quand elles produisent des faux positifs.

### Agir sur ce que vous trouvez

**8. Redimensionnez et nettoyez dans le travail normal.** Faites du retrait du gaspillage un élément permanent du backlog de l'équipe, traité par petites étapes dans le cadre de l'amélioration continue. Planifiez l'arrêt des environnements hors production en dehors des heures de travail, supprimez le stockage non rattaché, choisissez des niveaux de stockage appropriés et revoyez d'abord les plus grosses lignes. De petits changements réguliers valent mieux que de rares nettoyages héroïques, qui tendent à être oubliés quand la pression monte.

**9. Faites correspondre le modèle de prix à la charge de travail.** Utilisez des engagements pour l'usage de base stable, le tarif à la demande pour la charge variable et la capacité interruptible pour le travail qui tolère l'interruption. Engagez-vous progressivement, par petits montants, et suivez la couverture et l'utilisation. Un engagement excessif gaspille de l'argent et un engagement insuffisant paie une prime. Impliquez la finance et les achats, et revérifiez les conditions auprès du fournisseur, puisqu'elles changent.

**10. Détectez les anomalies et réagissez.** Utilisez la détection d'anomalies sur la dépense, qui signale les changements soudains par rapport à une référence. Les outils de [détection d'anomalies](https://en.wikipedia.org/wiki/Anomaly_detection) vont de simples seuils à des modèles statistiques. Alertez l'équipe responsable et mesurez le temps qu'elle met à accuser réception et à décider. Un travail mal configuré peut faire monter une grosse facture en quelques heures : la vitesse compte donc (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

### Prévoir et planifier

**11. Prévoyez avec des plages et des inducteurs.** Construisez les prévisions à partir des inducteurs de la demande, comme les utilisateurs ou transactions attendus, avec le coût unitaire. Utilisez l'[analyse des écarts](https://en.wikipedia.org/wiki/Variance_analysis) pour expliquer les différences entre prévision et réel, et séparez celles dues au volume, au prix et au mélange. Donnez une plage et énoncez les hypothèses. L'écart de prévision doit diminuer à mesure que le modèle s'améliore.

**12. Incluez la durabilité dans le tableau.** Estimez les émissions associées aux principales charges de travail avec une méthode documentée, comme des rapports de fournisseurs ou des méthodologies publiées, et énoncez les limites de l'estimation. Comparez les choix de région, de type d'instance et de calendrier sur le coût et sur les émissions. Traitez les émissions par unité comme un compagnon du coût par unité, et ne prétendez pas à une précision que la méthode ne peut soutenir.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture de l'affectation | Tout étiqueter à un responsable fourre-tout ; déclarer de grands montants comme partagés | Part des dépenses détenues par des fourre-tout ; taille et revue du pool partagé ; échantillon de confirmation des responsables |
| Coût unitaire du nuage | Choisir une unité qui croît à peu de frais ; réduire la fiabilité pour réduire le coût | Définition d'unité fixe ; compagnons de fiabilité et de qualité |
| Taux de gaspillage | Restreindre la définition d'inactif ; déplacer le gaspillage vers un compte hors périmètre | Règles dans le registre ; balayer tous les comptes ; échantillonner les ressources que les règles excluent |
| Couverture des engagements | S'engager sur des bases gonflées pour courir après un pourcentage élevé | Utilisation des engagements ; vérifier la base face à l'historique d'usage |
| Utilisation des engagements | Ajouter de l'usage éligible non nécessaire pour remplir les engagements | Comparer avec la croissance de la demande réelle ; coût unitaire |
| Écart de prévision | Gonfler les prévisions ; les réviser tard | Consigner la prévision au début ; suivre la largeur de la plage et le taux de réussite |
| Délai d'accusé de réception d'une anomalie | Accuser réception sans regarder ; clore automatiquement les alertes | Consigner une décision et un résultat ; échantillonner les alertes pour la qualité de la réponse |

Une lecture saine est presque toute la dépense détenue et visible, un coût unitaire qui bouge pour des raisons expliquées, un gaspillage qui diminue sans pannes, des engagements qui sont utilisés et des prévisions dont l'erreur se resserre avec le temps.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Une équipe nuage centrale contrôle la dépense | Cohérence et pouvoir de négociation | Lente ; loin des décisions d'ingénierie |
| Les équipes détiennent leur coût du nuage | Décisions rapides et éclairées | Demande des données, de la formation et des garde-fous |
| À la demande seulement | Souple | Prix unitaire le plus élevé |
| Engagements lourds | Prix unitaire plus bas | Enfermement et gaspillage si la demande baisse |
| Plafonds budgétaires stricts | Évitent les dépassements | Peuvent causer des pannes ou bloquer du travail légitime |
| Alertes et revue | Préservent la vitesse | Dépendent d'une réponse à temps |
| Redimensionnement agressif | Économise de l'argent | Risque pour la performance si poussé trop loin |
| Redimensionnement mesuré avec des SLO | Équilibré | Demande des données de fiabilité et du soin |

La réponse en bref est de donner aux équipes les données et la responsabilité, de fixer des garde-fous comme des alertes et des budgets plutôt que des arrêts durs là où le service est critique, de s'engager graduellement sur la base stable et d'apparier toujours le coût avec la fiabilité.

## Questions à discuter avec votre équipe

**1. Quelle part de notre facture infonuagique pouvons-nous attribuer aujourd'hui à un responsable, et qui est introuvable ?**
Regardez la part des dépenses avec des étiquettes valides et les plus gros éléments non étiquetés. Demandez qui détiendrait chacun. L'animateur doit noter combien d'éléments personne ne réclame. Convenez d'une étape de politique d'étiquetage à imposer à la création.

**2. Qu'a fait notre coût par unité ces six derniers mois, et pourquoi ?**
Tracez le coût unitaire et annotez les changements d'architecture, de prix et de volume. Demandez lesquels étaient délibérés. Si la tendance est une surprise, discutez des données qui manquent. Ajoutez une mesure de qualité au graphique.

**3. Lesquelles de nos ressources éteindrions-nous demain si nous osions ?**
Listez les candidates : environnements inactifs, bases de données surdimensionnées, stockage oublié. Pour chacune, demandez quel est le risque et qui décide. Convenez d'un moyen sûr de tester le retrait d'une, comme planifier ou prendre un instantané d'abord.

**4. Comment saurions-nous en une journée qu'un travail s'est mis à coûter dix fois plus ?**
Parcourez le chemin d'alerte de la facture au responsable. Testez-le avec un exemple passé. La conversation doit révéler des retards et des lacunes de responsabilité. Convenez d'un délai cible pour accuser réception et décider, et de qui est en première ligne.

**5. Quelle part de notre usage de base pourrions-nous engager en toute sécurité, et qu'est-ce qui nous donnerait tort ?**
Examinez l'historique d'usage à la recherche d'un plancher stable et des risques qui le menacent : changements de produit, migrations, changements de prix. Décidez d'un premier engagement modeste et d'une date de revue. Incluez la finance dans la discussion.

**6. Quel arbitrage entre coût et fiabilité faisons-nous par accident ?**
Revoyez les économies et les incidents récents. Certains étaient-ils liés ? Discutez de la manière de rendre l'arbitrage explicite, par exemple en reliant les revues de coût aux budgets d'erreur. Décidez qui peut approuver une coupe qui touche la fiabilité.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison prennent les décisions qui font le coût et sont les mieux placées pour le réduire. Elles doivent étiqueter à la création, consulter régulièrement leur vue des coûts, intégrer le coût dans les discussions de conception et traiter la réduction du gaspillage comme du travail normal. Elles doivent pouvoir voir l'effet d'un changement sur le coût peu après l'avoir fait, ce qui soutient l'apprentissage rapide.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de plateforme gèrent les services partagés, imposent la politique et exploitent les alertes d'anomalies. Elles doivent garder la conformité des étiquettes simple, offrir des rapports en libre-service et publier des règles claires pour les coûts partagés. Elles doivent surveiller le coût et la fiabilité des plateformes qu'elles fournissent, et aider les équipes à agir sans devenir un obstacle.

### Direction et gouvernance

Les dirigeants et la finance veulent une dépense prévisible et une bonne valeur. Ils doivent financer l'outillage et le temps consacrés au travail sur les coûts, accepter des plages dans les prévisions, éviter les palmarès d'équipes et demander le coût unitaire à côté de la qualité. La gouvernance doit vérifier que les engagements sont pris avec des données et que les affirmations de durabilité énoncent leur méthode.

### Clients et utilisateurs

Les utilisateurs ressentent le coût du nuage indirectement, par les prix, les fonctionnalités ou la stabilité du service. Ils bénéficient quand les économies financent des améliorations et souffrent quand les coupes réduisent la qualité. Là où les utilisateurs sont facturés à la consommation, ils veulent des factures claires et la possibilité de les influencer.

## En pratique : un exemple de gestion des services

Un détaillant en ligne régional exploite sa boutique et sa plateforme de commandes sur un nuage public, avec six équipes d'ingénierie. Les chiffres ci-dessous sont illustratifs.

La dépense infonuagique a augmenté régulièrement sur un an, et le directeur financier demande une coupe. Le responsable FinOps extrait les données de facturation. La couverture de l'affectation est de 68 %, un tiers des dépenses non étiquetées se trouvant dans des comptes de test. Le coût par commande achevée est de 0,31 $ US, contre 0,27 $ six mois plus tôt, alors que le volume de commandes a crû de 15 %. Le taux de gaspillage selon les règles de l'équipe est de 14 % des dépenses du périmètre, surtout des environnements hors production qui tournent la nuit et le week-end et quelques bases de données surdimensionnées. La couverture des engagements est de 20 % de la base stable, avec 97 % d'utilisation de ce qui a été acheté. Un écart de prévision de plus 18 % au dernier trimestre a suivi une campagne de marketing dont personne n'avait informé l'équipe de plateforme. Un travail de données emballé dans un compte a tourné pendant deux jours avant que quiconque le remarque.

Le responsable convient de quatre changements avec les équipes d'ingénierie. Une politique d'étiquetage bloque les nouvelles ressources sans étiquettes de responsable et de service, avec un délai de grâce de deux semaines. Chaque équipe reçoit une vue hebdomadaire des coûts et une courte plage dans la conversation bimensuelle sur les coûts. Les environnements hors production sont planifiés pour s'arrêter en dehors des heures de travail, et les trois bases de données surdimensionnées sont redimensionnées après vérification de leur performance face aux objectifs de niveau de service. Un premier engagement couvre 60 % de la base stable, avec une revue dans trois mois. Une alerte d'anomalie va à l'équipe responsable avec l'attente d'une décision consignée dans les quatre heures, et le calendrier de planification inclut maintenant les campagnes de marketing.

Au bout d'un trimestre, la couverture de l'affectation est de 93 %, le taux de gaspillage tombe à 6 %, le coût par commande tombe à 0,26 $ US sans changement de la latence du paiement ni du taux d'erreur, et l'écart de prévision est de plus 5 %. La couverture des engagements est de 55 % avec 96 % d'utilisation. Le délai médian d'accusé de réception des anomalies est de 2 heures, avec le 85e percentile à 6. Le directeur financier demande un palmarès montrant le coût par équipe. Le responsable FinOps refuse, expliquant que les équipes exploitent des services différents avec des croissances différentes, et offre à la place la tendance du coût unitaire de chaque équipe avec ses mesures de fiabilité. La décision est consignée, et la prochaine date de revue fixée.

## Agilité, IA, automatisation et analytique

### Agilité

Donnez aux ingénieurs les données de coût et l'autorité d'agir, et revoyez-les à la même cadence que la fiabilité. La précaution est que des objectifs de coût fixés sans contexte réduisent la fiabilité ou retardent du travail utile.

### IA

Les services d'IA peuvent être une part du coût du nuage qui croît vite : donnez-leur donc leur propre affectation, leur coût unitaire et leurs alertes d'anomalies. Appariez le coût par requête avec la qualité des réponses et la valeur livrée. La précaution est que réduire le coût de l'IA en passant à un modèle plus faible peut augmenter la reprise humaine.

### Automatisation

Automatisez les contrôles d'étiquetage, les alertes d'anomalies et les suggestions de redimensionnement, et mesurez l'automatisation sur les fausses alertes et sur les économies réellement obtenues. La précaution est que les arrêts automatiques de ressources inactives peuvent retirer quelque chose qui était nécessaire.

### Analytique

Montrez le coût unitaire et le gaspillage avec l'écart de prévision et la fraîcheur des données. La décision éclairée est où optimiser et à quoi s'engager. La précaution est que les décisions d'engagement dépendent des prévisions : énoncez donc leur incertitude.

## Éclairage sectoriel

**Startup.** Les crédits et les factures basses peuvent cacher de mauvaises habitudes qui deviennent coûteuses à l'échelle. Étiquetez dès le premier jour, planifiez les ressources hors production et suivez tôt le coût par client. Ne vous engagez que quand la demande est prévisible.

**Petite entreprise.** Un seul compte et quelques services rendent simples l'étiquetage et la revue. Revoyez la facture chaque mois avec la personne qui construit le système, retirez les ressources oubliées et méfiez-vous des engagements longs. Une alerte de budget est le plus précieux des contrôles uniques.

**Grande entreprise.** De nombreux comptes, équipes et fournisseurs appellent une fonction FinOps centrale qui habilite les équipes au lieu de les contrôler. Standardisez les étiquettes et les exports de facturation entre fournisseurs, négociez les engagements de façon centrale et donnez aux équipes leurs données. Prévoyez les différences de rapports en multinuage.

**Gouvernement et secteur public.** Les cadres de passation de marchés, la résidence des données et les budgets annuels fixes contraignent les choix. Documentez les décisions de coût et de région, modélisez l'effet d'une dépense variable sur les crédits votés et conservez des pistes d'audit. Des engagements publics de durabilité peuvent exiger des émissions rapportées avec leurs méthodes (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts d'une pratique FinOps sont le temps de quelques personnes pour mener les rapports, la politique d'étiquetage et la conversation régulière ; l'outillage, qui peut être fourni par la plateforme infonuagique ou acheté ; et le temps d'ingénierie pour agir sur les constats. Une petite pratique peut commencer avec un export de facturation et un tableur.

Les rendements viennent de la réduction du gaspillage, de meilleurs prix grâce aux engagements, de moins de surprises et de meilleures décisions d'architecture. Construisez le dossier à partir de vos propres chiffres : le taux de gaspillage et son coût à la première revue, les économies de la planification des environnements hors production, la remise d'engagement sur la part engagée et le coût évité des anomalies détectées tôt. Évitez de citer des pourcentages de gaspillage ou d'économies à l'échelle du secteur sans source et méthode traçables. Incluez le coût de la pratique et le risque d'engagement excessif. Le dossier financier des améliorations en général est couvert dans le sujet suivant (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Une équipe centrale qui dit non.** Elle ralentit le travail et les équipes la contournent. Habilitez les équipes avec des données et des garde-fous.
- **Réduire le coût sans surveiller la fiabilité.** Les économies reviennent sous forme d'incidents. Appariez le coût aux mesures de niveau de service.
- **Courir après la couverture des engagements.** Un pourcentage élevé avec une faible utilisation est du gaspillage. Suivez les deux.
- **Des rapports mensuels pour la finance seulement.** Les ingénieurs ne les voient jamais. Donnez aux équipes des vues quotidiennes ou hebdomadaires.
- **L'étiquetage comme projet de nettoyage.** Il se dégrade. Imposez les étiquettes à la création.
- **Classer les équipes selon la dépense.** La croissance ressemble à du gaspillage. Montrez les tendances du coût unitaire avec du contexte.
- **Prévoir un chiffre unique.** Une demande variable le fait voler en éclats. Utilisez des plages et des inducteurs.
- **Affirmer des émissions précises.** Les méthodes d'estimation sont incertaines. Énoncez la méthode et les limites.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité et responsabilité | Facture mensuelle revue par la finance | Étiquettes utilisées par certaines équipes | Étiquettes obligatoires ; les équipes voient des vues hebdomadaires | Couverture de l'affectation gérée ; pools partagés revus | Les données de coût alimentent les décisions produit en quasi-temps réel entre fournisseurs |
| Optimisation | Nettoyages occasionnels | Calendriers et redimensionnement par certaines équipes | Règles de gaspillage et backlog permanent d'optimisations | Gaspillage, engagements et coût unitaire gérés avec des compagnons de fiabilité | Optimisation continue et automatisée sous supervision humaine, avec apprentissage partagé |
| Planification | Budget annuel | Prévisions approximatives | Prévisions fondées sur des inducteurs, avec plages | Écart analysé et réinjecté ; engagements gérés progressivement | Prévision conjointe avec le métier, les fournisseurs et les objectifs de durabilité |

## Liste de vérification

- [ ] Un petit jeu d'étiquettes obligatoires (responsable, service, environnement) est imposé à la création des ressources.
- [ ] La couverture de l'affectation est rapportée chaque semaine, avec les plus gros éléments non étiquetés listés.
- [ ] Chaque équipe a une vue hebdomadaire des coûts avec tendances et anomalies.
- [ ] Une conversation régulière entre ingénierie et finance sur les coûts est au calendrier.
- [ ] Le coût unitaire du nuage est suivi à côté de la disponibilité, de la latence et du taux d'erreur.
- [ ] Les règles de gaspillage sont écrites et appliquées, avec les exclusions étiquetées.
- [ ] Les engagements sont pris progressivement sur l'usage de base stable, la couverture et l'utilisation étant suivies.
- [ ] Les prévisions utilisent des inducteurs et des plages, et l'écart est analysé.
- [ ] Les alertes d'anomalies atteignent les responsables avec un délai de décision attendu.
- [ ] Les estimations d'émissions, si elles sont rapportées, énoncent leur méthode et leurs limites.

## Prompts d'IA

**Analysez une tendance de coût.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Rédigez une politique d'étiquetage.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Définissez des règles de gaspillage.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Planifiez un premier engagement.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de coût du nuage.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de coût du nuage porte son vecteur de détournement, son garde-fou et son compagnon de fiabilité.

## Idées clés

- Rendez le coût visible et détenu : imposez les étiquettes à la création et donnez à chaque équipe sa propre vue hebdomadaire.
- Mesurez le coût par unité à côté de la fiabilité et de la qualité, jamais seul.
- Retirez le gaspillage dans le cadre du travail normal, guidé par des règles écrites.
- Engagez-vous graduellement sur la base stable et suivez la couverture et l'utilisation.
- Prévoyez avec des inducteurs et des plages, et surveillez les anomalies avec une réponse rapide.
- Ne classez pas les équipes selon la dépense, et énoncez la méthode et les limites de toute estimation d'émissions.

## Références et lectures complémentaires

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
