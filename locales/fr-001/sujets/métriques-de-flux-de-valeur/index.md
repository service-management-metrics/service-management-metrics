# Métriques de flux de valeur

**Mesurez un flux de valeur de bout en bout, séparez chaque étape en temps où le travail est touché et temps où il attend, et comptez ce qui arrive utilisable, car les plus grands retards et les plus grandes reprises d'une organisation de services se situent entre les équipes, pas à l'intérieur.**

## Vue d'ensemble et motivation

La plupart des équipes mesurent leur propre étape. Le centre de services rapporte des tickets clos, une équipe de développement rapporte des récits terminés, un comité des changements rapporte des changements approuvés. Chaque chiffre peut paraître sain pendant que celui qui a demandé quelque chose attend des semaines. La raison est structurelle : dans une demande typique, l'essentiel du temps écoulé se passe dans des files et des transmissions, et aucune équipe ne détient ce temps.

Un [flux de valeur](https://en.wikipedia.org/wiki/Value_stream) est la séquence d'étapes par laquelle une demande devient de la valeur livrée. La [cartographie du flux de valeur](https://en.wikipedia.org/wiki/Value-stream_mapping) est la technique, développée dans l'[industrie lean](https://en.wikipedia.org/wiki/Lean_manufacturing) puis appliquée aux bureaux, aux hôpitaux et au logiciel, qui consiste à dessiner chaque étape depuis le début d'un processus jusqu'au client et à consigner le temps et le volume à chaque étape. La carte est une image de l'état actuel, suivie d'une image d'un meilleur état futur. Les chiffres de la carte sont le sujet de ce texte.

Deux vocabulaires se rencontrent ici. Dans ITIL 4, la quatrième édition de l'Information Technology Infrastructure Library, un flux de valeur est une combinaison particulière d'activités de la chaîne de valeur du service [ITIL](https://en.wikipedia.org/wiki/ITIL) (planifier, améliorer, engager, concevoir et faire la transition, obtenir et construire, livrer et soutenir) agencées pour créer un produit ou un service particulier. Des exemples sont « rétablir le service après un incident » et « livrer un changement de l'idée à la production ». ITIL dit ce qu'est un flux et qui doit être impliqué. Le lean dit comment le mesurer. La contrepartie agile est le flux d'éléments de travail sur un tableau, que les équipes qui gèrent le flux suivent déjà avec des mesures comme le temps de cycle (voir le sujet 2.1, Mesures de flux).

Les mesures lean sont peu nombreuses. Le **délai de livraison** est le temps écoulé total entre le moment où une demande est faite et celui où elle est livrée. Le **temps de traitement**, parfois appelé temps de traitement actif, est le temps pendant lequel quelqu'un travaille réellement sur l'élément. Le **temps d'attente** est le temps pendant lequel l'élément reste entre deux travaux actifs, dans une file, dans une approbation ou dans une transmission. Le **pourcentage complet et exact (%C/E)** est la part des éléments que l'étape suivante peut utiliser tels que reçus, sans avoir à les corriger, les compléter ou les renvoyer. Le **temps takt** est le rythme auquel le flux doit terminer des éléments pour correspondre à la demande des clients, calculé comme le temps de travail disponible divisé par le nombre d'éléments demandés pendant ce temps. Le rapport du temps de traitement au délai de livraison est l'**efficacité du processus**, que ce livre traite comme la forme, au niveau du flux de valeur, de l'efficacité du flux (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

Deux relations rendent les chiffres utiles ensemble. D'abord, le [délai de livraison](https://en.wikipedia.org/wiki/Lead_time) est la somme du temps de traitement et du temps d'attente sur chaque étape : un flux dont le délai de livraison est de semaines et le temps de traitement de jours est donc surtout de la file. La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie cette file au travail en cours et au débit, ce qui fait du sujet 2.3 (Travail en cours et théorie des files d'attente) le compagnon naturel. Ensuite, le %C/E se compose. Un flux de cinq étapes dans lequel chaque étape transmet proprement 90 % de sa production ne livre un résultat propre qu'environ 59 % du temps, un produit connu dans l'industrie sous le nom de [rendement synthétique](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Les rapports de chaque étape disent tous 90 %. Le flux dit quelque chose de bien moins confortable.

## Principes clés

- **Partez de la demande du client et terminez à l'usage du client.** Un flux mesuré de « travail commencé » à « travail fusionné » cache l'attente aux deux bouts, qui est souvent la partie la plus longue.
- **Séparez le temps de traitement du temps d'attente à chaque étape.** Une durée d'étape unique mêle les deux et envoie l'effort d'amélioration au mauvais endroit. L'attente est généralement une propriété de conception du flux, pas un manque d'effort.
- **Mesurez la qualité comme complétude et exactitude, autant que la vitesse.** Une étape rapide qui renvoie du travail est lente aux yeux du flux, car la reprise consomme de la capacité et ajoute de l'attente.
- **Cartographiez un seul flux et une seule classe d'éléments à la fois.** Une carte qui mélange des changements d'urgence et des demandes courantes produit une moyenne qui ne décrit ni l'un ni l'autre.
- **Rapportez des distributions et montrez l'échantillon.** Le délai de livraison et le temps d'attente sont asymétriques : montrez donc la médiane et un percentile élevé, et dites combien d'éléments et quelle période (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Décrivez des flux, jamais des personnes.** Les métriques d'étape identifient où le travail attend. Elles ne sont jamais un classement des individus ou des équipes de chaque étape.

## Définitions des métriques

Les métriques ci-dessous sont définies pour un flux de valeur nommé et une classe de travail. Les décomptes d'éléments excluent les éléments annulés sauf indication contraire. Le temps de traitement et le temps d'attente sont rapportés pour chaque étape et additionnés pour le flux.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison du flux de valeur | Temps écoulé entre la demande du client et le moment où le client peut utiliser le résultat | heure de confirmation de la livraison moins heure à laquelle la demande a été enregistrée ; les éléments annulés ou retirés sont exclus ; rapporter la médiane et les 85e et 95e percentiles | jours | Enregistrements de l'outil ITSM joints aux événements de livraison de la chaîne ou du système d'exécution | Gestion des demandes de service ; maîtrise des changements | Délai de livraison sur le tableau de l'équipe | Mensuelle |
| Temps de traitement | Temps pendant lequel un élément est activement travaillé, par étape et pour le flux | somme des intervalles pendant lesquels l'élément est dans un état actif, par étape ; les états de file, d'attente d'approbation et de blocage sont exclus | heures ou jours | Historique des statuts du gestionnaire ; relevés de temps là où les états sont trop grossiers | Gestion des incidents ; gestion des demandes de service | Temps de cycle dans les colonnes « en cours » | Mensuelle |
| Temps d'attente | Temps pendant lequel un élément reste entre deux travaux actifs, par étape et pour le flux | temps écoulé de l'étape moins temps de traitement de cette étape ; inclut les files, les approbations, les transmissions et le temps bloqué | jours | Historique des statuts du gestionnaire et changements d'état de l'outil ITSM | Maîtrise des changements ; centre de services | Temps dans les colonnes de file ; temps bloqué | Mensuelle |
| Efficacité du processus | Part du délai de livraison qui est du temps de traitement | somme des temps de traitement sur les étapes / délai de livraison du flux de valeur pour les mêmes éléments ; les éléments encore ouverts sont exclus | pourcentage | Dérivée du temps de traitement et du délai de livraison | Amélioration continue | Efficacité du flux | Trimestrielle |
| Pourcentage complet et exact (étape) | Part des éléments qu'une étape reçoit et qu'elle peut utiliser sans correction, complément ni renvoi | éléments acceptés tels que reçus / éléments reçus dans la période ; les éléments renvoyés pour quelque raison que ce soit comptent comme non acceptés | pourcentage | Événements de renvoi et de réouverture du gestionnaire ou de l'outil ITSM ; revues d'acceptation échantillonnées | Gestion des demandes de service ; maîtrise des changements ; gestion des problèmes | Définition de prêt ; taux de reprise | Mensuelle |
| Pourcentage complet et exact cumulé | Part des éléments qui passent proprement toutes les étapes | produit des valeurs de %C/E des étapes pour un flux et une période (par exemple 0,90 x 0,85 x 0,95) ; les étapes hors du flux sont exclues | pourcentage | Dérivé des valeurs par étape | Amélioration continue | Défauts échappés et taux de reprise sur une chaîne | Trimestrielle |
| Nombre de transmissions | Nombre de fois qu'un élément passe entre équipes ou files | nombre de changements d'équipe ou de file propriétaire de la demande à la livraison, par élément ; rapporter la médiane et le 85e percentile | nombre | Historique d'affectation de l'outil ITSM ou du gestionnaire | Centre de services ; gestion des demandes de service | Dépendances entre équipes | Trimestrielle |
| Ratio du temps takt | Si le rythme du flux correspond à la demande | intervalle médian observé entre achèvements / temps takt, où le temps takt est le temps de travail disponible divisé par les éléments demandés dans la même période ; un ratio supérieur à 1 signifie que le flux est plus lent que la demande | ratio | Décompte de la demande depuis la file de prise en charge et événements d'achèvement | Gestion de la capacité et de la performance ; gestion des niveaux de service | Débit face à la demande ; prévision | Trimestrielle |

Le temps de traitement, le temps d'attente et les délais de livraison des étapes sont des sommes et des ratios sur le même ensemble d'éléments : ils sont donc calculés à partir d'enregistrements au niveau des éléments et jamais en additionnant des moyennes d'étapes mesurées sur des échantillons différents. Le temps takt s'applique mieux au travail répétable comme les demandes standard et les changements courants, et convient mal au travail où chaque élément est unique.

## Recommandations

### Choisir le flux

**1. Choisissez un flux de valeur et une classe d'éléments, et nommez leurs frontières.** De bons premiers candidats sont un type de demande à fort volume, comme l'accès ou la mise à disposition d'équipement, ou le chemin d'un changement normal de l'approbation à la mise en production. Écrivez le déclencheur qui démarre l'horloge et l'événement qui confirme la livraison au client. Si vous ne pouvez pas énoncer les deux en une phrase chacun, le flux n'est pas encore défini (voir le sujet 3.5, Métriques de traitement des demandes de service).

**2. Démarrez l'horloge à la demande du client et arrêtez-la à l'usage du client.** Un flux qui démarre quand une équipe accepte le travail et s'arrête quand l'équipe le marque comme terminé exclut la file de prise en charge et le délai de confirmation. Ce sont fréquemment les plus longues attentes. Si les données pour les vraies frontières ne sont pas encore capturées, rapportez la mesure plus étroite avec un libellé honnête et planifiez l'instrumentation (voir le sujet 1.5, Sources de données et instrumentation).

### Cartographier l'état actuel

**3. Parcourez le flux avec les personnes qui font le travail.** Menez une séance de cartographie avec un représentant de chaque étape, y compris du côté du client. Dessinez les étapes telles qu'elles se déroulent réellement, puis comparez avec le processus documenté. Les écarts entre les deux sont des constats en eux-mêmes. La méthode est décrite dans *Learning to See* de Rother et Shook et dans *Value Stream Mapping* de Martin et Osterling.

**4. Consignez le temps de traitement et le temps d'attente de chaque étape à partir d'éléments réels.** Prenez un échantillon d'éléments récents, 20 ou plus si le volume le permet, et suivez chacun à travers le flux à l'aide de l'historique du gestionnaire et, si besoin, d'une conversation. Consignez le temps de traitement actif et l'attente avant chaque étape. Traitez l'échantillon comme une estimation et dites comment il a été tiré. Refaites la cartographie quand le flux change assez pour l'invalider.

**5. Montrez l'attente comme une barre à part.** Sur la carte et le tableau de bord, dessinez le temps de traitement et le temps d'attente comme des segments séparés pour chaque étape. Une étape avec 30 minutes de temps de traitement et quatre jours d'attente ne ressemble en rien à une étape avec quatre jours de temps de traitement, bien que la durée de l'étape soit identique.

### Mesurer la qualité le long du flux

**6. Mesurez le %C/E à la transmission, défini par l'étape réceptrice.** L'équipe réceptrice décide de ce que « utilisable tel que reçu » signifie, idéalement dans une courte condition d'acceptation écrite. Comptez un renvoi, une demande d'information manquante ou une correction silencieuse comme non acceptés. La correction silencieuse est la fuite la plus courante, parce que le travail est réparé sans que personne ne consigne qu'il était cassé.

**7. Calculez le %C/E cumulé et comparez-le aux valeurs par étape.** Multipliez les valeurs par étape. Un écart entre le chiffre cumulé et l'étape qui paraît la meilleure est l'effet cumulatif des reprises, et il plaide souvent pour la correction d'une transmission mieux que n'importe quelle mesure de vitesse. Reliez-le aux mesures de reprise et d'échec des changements pour le même flux (voir le sujet 4.4, Échecs de changement et reprises).

### Utiliser les chiffres pour décider

**8. Améliorez d'abord la plus grande attente, et cherchez sa cause dans l'interface.** Classez les étapes par temps d'attente, puis demandez ce que l'élément en attente attend : une décision, une personne, un lot, un créneau planifié ou une entrée manquante. Demandez ensuite si cette attente est nécessaire. La [théorie des contraintes](https://en.wikipedia.org/wiki/Theory_of_constraints) soutient que le rythme du flux est fixé par son étape la plus serrée : améliorer une étape qui n'est pas la contrainte change donc peu de choses. Les attentes d'approbation dans la maîtrise des changements en sont un cas fréquent (voir le sujet 4.3, Métriques de maîtrise des changements).

**9. Réduisez les transmissions avant d'optimiser les étapes.** Chaque transmission ajoute une file, un changement de contexte et une chance d'information incomplète. Comptez les transmissions, puis testez si une étape peut être combinée, une décision déléguée à l'équipe qui fait le travail ou une demande standard préautorisée. ITIL 4 décrit les changements standard comme des changements préautorisés à faible risque, ce qui est exactement ce geste appliqué au flux des changements.

**10. Comparez la demande et le rythme au temps takt, pour le travail répétable uniquement.** Calculez le temps takt à partir de données de demande réelles pour la période, puis comparez-le à l'intervalle auquel le flux termine effectivement des éléments. Un flux plus lent que le takt fait grossir une file, et la loi de Little vous dit à peu près à quelle vitesse. Un flux bien plus rapide que le takt a une marge qui pourrait être réorientée. N'utilisez pas le temps takt pour fixer des objectifs à des individus.

### Garder la mesure honnête

**11. Joignez les données entre outils, et dites ce qui est estimé.** Le flux traverse généralement l'outil ITSM, le gestionnaire d'anomalies et la chaîne. Joignez sur un identifiant d'élément, documentez la règle de jointure et marquez quelles étapes viennent d'événements système et lesquelles d'un échantillonnage. Une estimation étiquetée comme telle est bien plus utile qu'un chiffre d'apparence précise d'origine inconnue.

**12. Revoyez la carte chaque trimestre, et lisez chaque fois des éléments bruts.** Les flux dérivent quand les équipes se réorganisent et que les outils changent. Mettez la carte et une décision à l'ordre du jour d'une revue permanente avec chaque étape représentée (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai de livraison du flux de valeur | Démarrer l'horloge plus tard, par exemple au triage au lieu de la demande ; clore des éléments avant que le client puisse les utiliser ; scinder une demande en plusieurs petites | Règles d'horloge fixes écrites dans le registre des métriques ; confirmation de livraison par le client ; décompte des éléments rouverts et des éléments enfants liés |
| Temps de traitement | Consigner des états inactifs ou bloqués comme actifs pour que le temps de traitement monte et que le flux paraisse efficace ; ou consigner des attentes comme du travail pour avoir l'air occupé | Observation d'un échantillon d'éléments ; temps de traitement comparé aux relevés de temps là où ils existent ; définitions d'états revues avec l'équipe |
| Temps d'attente | Déplacer l'attente vers un état non suivi, comme une conversation latérale, un tableur ou un statut « en suspens » qui arrête l'horloge | Rapporter l'usage des statuts de suspension et de blocage ; comparer l'âge du ticket aux horodatages d'étape ; échantillonner des éléments pour y chercher des attentes hors système |
| Efficacité du processus | Raccourcir le délai de livraison par un traitement accéléré des éléments mesurés, ou gonfler le temps de traitement pour relever le ratio | Montrer le délai de livraison et le temps de traitement à côté du ratio ; rapporter la part accélérée ; ne jamais fixer d'objectif au ratio lui-même |
| Pourcentage complet et exact (étape) | L'étape réceptrice abaisse son seuil d'acceptation pour que moins d'éléments soient renvoyés, ou l'étape émettrice fait passer le travail par des contournements informels | Condition d'acceptation écrite ; décomptes des défauts et reprises en aval ; échantillon d'éléments acceptés revu par un tiers |
| Pourcentage complet et exact cumulé | Fusionner des étapes pour que les renvois aient lieu à l'intérieur d'une étape et disparaissent du nombre de transmissions ; choisir une liste d'étapes favorable | Fixer la liste des étapes à l'avance ; rapporter les changements d'étapes dans le journal des décisions ; comparer au taux de reprise de tout le flux |
| Nombre de transmissions | Réaffecter des éléments à une file partagée ou à un responsable fourre-tout pour éviter des changements de responsable comptés ; cacher des transmissions dans une seule « équipe » qui en couvre plusieurs | Compter par file et par rôle ; lire l'historique d'affectation d'éléments échantillonnés ; suivre le nombre de réaffectations par élément |
| Ratio du temps takt | Compter la demande différée ou rejetée comme non demandée ; compter des achèvements partiels comme des achèvements | Rapporter la demande, la demande rejetée et l'âge du backlog à côté du ratio ; ne compter les achèvements que lorsque le client confirme |

Une lecture saine montre un délai de livraison et un temps de traitement plausibles face à l'échantillon, un temps d'attente qui est visiblement la plus grande partie et qui diminue graduellement, des valeurs de %C/E appuyées sur une condition d'acceptation écrite et des transmissions qui ne baissent que lorsqu'une vraie décision ou étape a été supprimée. Si le délai de livraison s'améliore pendant que le %C/E cumulé baisse, le flux fait passer le travail plus vite en déplaçant le coût en aval, ce qui est le schéma que les garde-fous existent pour attraper (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Cartographie en atelier avec un échantillon | Rapide, montre tout le flux, construit une compréhension partagée entre équipes | Un instantané qui vieillit vite ; biais d'échantillon ; dépend de participants honnêtes |
| Mesure automatisée à partir d'événements d'outils | Continue, objective, soutient les percentiles et les tendances | Ne voit que ce que les outils enregistrent ; les attentes hors système et les corrections silencieuses sont invisibles |
| Frontières de bout en bout côté client | Reflète l'expérience ; expose les retards de prise en charge et de confirmation | Demande des données de plusieurs systèmes et un identifiant d'élément partagé |
| Comparaison du temps takt et de la demande | Relie le rythme à la demande réelle ; rend prévisible la croissance des files | Faible pour le travail unique et non répétable ; demande des décomptes de demande fiables |
| %C/E cumulé | Montre comment la reprise se compose à travers les transmissions | Demande un accord sur les conditions d'acceptation ; facile de se disputer sur les définitions |

Servez-vous de l'atelier de cartographie pour apprendre la forme du flux et de la mesure automatisée pour le surveiller. Utilisez les mesures aux frontières des équipes comme entrées et les mesures aux frontières du client comme verdict. Le coût de l'approche est la conversation entre équipes qu'elle force, ce qui est aussi son principal bénéfice.

## Questions à discuter avec votre équipe

**1. Où l'horloge du client démarre-t-elle et s'arrête-t-elle pour notre demande la plus courante, et notre rapport concorde-t-il ?**
Choisissez un type de demande et retracez-le sur un tableau blanc du moment où le client demande jusqu'au moment où il peut utiliser le résultat. Marquez où notre rapport actuel commence et cesse de compter. L'animateur doit chercher l'écart à chaque bout, puisque les files de prise en charge et les retards de confirmation sont régulièrement omis. Convenez de changer le rapport ou de l'étiqueter comme une vue partielle.

**2. Pour chaque étape de notre flux, quelle part du temps écoulé est du temps où quelqu'un travaille sur l'élément ?**
Prenez cinq éléments récents et reconstituez l'historique de chacun. Estimez le temps de traitement actif et l'attente de chaque étape, et comparez les totaux. La plupart des groupes sont surpris de voir combien peu du temps écoulé est du travail. Demandez ce qu'attend chaque longue attente, et résistez à la première réponse, qui est généralement « les gens sont occupés ». Consignez quelles attentes ressemblent à des choix de conception plutôt qu'à des limites de capacité.

**3. De quoi l'étape suivante a-t-elle besoin de notre part, et comment saurions-nous que cela manquait ?**
Demandez à un représentant de l'étape réceptrice d'énoncer la condition d'acceptation en mots simples. Comparez-la avec ce que l'étape émettrice croit fournir. Comptez les fois, le mois dernier, où le travail a été renvoyé, complété par quelqu'un d'autre ou réparé en silence. La discussion produit souvent une petite liste de vérification qui supprime un renvoi récurrent.

**4. Quelles transmissions existent par histoire plutôt que par nécessité ?**
Listez les transmissions de la carte et demandez pourquoi chacune existe. Certaines sont réelles : une compétence, un contrôle, une séparation des tâches. D'autres persistent parce qu'une frontière d'équipe a été tracée il y a des années. Choisissez une transmission à supprimer, à déléguer ou à préautoriser, et nommez qui doit être d'accord.

**5. Si nous améliorions l'étape dont tout le monde se plaint, le client le remarquerait-il ?**
Comparez l'étape qui attire le plus d'attention avec celle qui contient la plus longue attente. La théorie des contraintes suggère qu'améliorer une non-contrainte change peu de choses pour le client. Demandez ce qui devrait être vrai pour que l'étape la plus décriée soit aussi la plus lente. L'animateur doit aider le groupe à convenir de la manière de tester la réponse avec des données.

**6. Comment quelqu'un pourrait-il faire paraître ce flux meilleur sans l'améliorer ?**
Parcourez avec le groupe le tableau des vecteurs de détournement. Pour chaque métrique, demandez ce qu'une personne sous pression pourrait faire et ce que l'équipe verrait si elle le faisait. Convenez de quelle lecture de garde-fou sera revue chaque fois et de qui la détient. Le but est une habitude partagée de vérification, pas une chasse aux coupables.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison voient généralement bien leurs propres étapes et mal le flux. Une vue de flux de valeur leur montre combien de temps un changement terminé attend une revue, une approbation, un créneau de publication ou une fenêtre de déploiement, et quelle part échappe à leur contrôle. Elles profitent du %C/E à leurs transmissions, parce qu'il transforme les plaintes vagues sur de « mauvaises exigences » ou des « revues tardives » en événements comptés. Elles doivent se méfier d'améliorer leur propre temps de cycle aux dépens de l'étape réceptrice (voir le sujet 2.8, Métriques DORA).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent beaucoup de files : la prise en charge du centre de services, l'approbation des changements, le calendrier des versions, la passation d'astreinte. Elles profitent des changements standard préautorisés, de conditions d'acceptation claires pour le travail entrant et d'une vue des transmissions qui ajoutent le plus d'attente. Elles doivent aussi s'attendre à être l'étape réceptrice dans une mesure de %C/E, et à définir à quoi ressemble une passation complète. Leurs éléments portent souvent des horloges strictes qui leur sont propres : la mesure du flux se place donc à côté des mesures de niveau de service, sans les remplacer.

### Direction et gouvernance

Les dirigeants parrainent le changement inter-équipes et décident si un flux a un responsable nommé. Ils doivent demander le délai de livraison du flux du point de vue du client et la plus grande attente, plutôt qu'un tableau de score étape par étape. Les instances de gouvernance qui approuvent le travail sont elles-mêmes des étapes, et leur temps d'attente a sa place sur la carte. Fixer des objectifs sur le ratio du temps de traitement au délai de livraison invite aux vecteurs décrits plus haut : servez-vous-en donc pour orienter l'investigation (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

### Clients et utilisateurs

Les clients éprouvent le délai de livraison et la reprise, et voient rarement les étapes. Leur contribution la plus utile est de confirmer quand le résultat était utilisable et de dire ce qu'ils ont dû faire pour l'obtenir, comme soumettre de nouveau un formulaire. Les rapports destinés aux clients doivent indiquer en mots simples le début et la fin de l'horloge. Les clients profitent aussi du fait que le flux publie une médiane honnête et un percentile élevé, car une promesse fondée sur la seule médiane déçoit une demande sur plusieurs.

## En pratique : un exemple de gestion des services

Le service informatique d'une compagnie d'assurance de taille moyenne livre des changements normaux à sa plateforme de gestion des contrats. Les clients de l'activité se plaignent que « les petits changements prennent plus d'un mois ». Tous les chiffres de cet exemple sont illustratifs.

Le service cartographie le flux depuis le moment où un responsable métier soumet une demande de changement jusqu'au moment où il confirme que le changement est en production. Un échantillon de 20 changements normaux récents donne le tableau d'étapes ci-dessous, avec des valeurs médianes illustratives par étape.

| Étape | Temps de traitement (jours) | Temps d'attente (jours) | %C/E (illustratif) |
| --- | --- | --- | --- |
| Prise en charge et triage | 0,5 | 6 | 85 |
| Construction | 1,5 | 5 | 90 |
| Test | 0,5 | 8 | 80 |
| Approbation du changement | 0,25 | 9 | 70 |
| Déploiement et confirmation | 0,25 | 4 | 95 |
| Total du flux | 3,0 | 32 | 41 (cumulé) |

Le délai de livraison du flux dans l'échantillon est d'environ 35 jours : l'efficacité du processus est donc d'environ 9 %. Le %C/E cumulé est d'environ 41 %, le produit des cinq valeurs d'étapes : moins de la moitié des changements passent donc proprement toutes les étapes sans renvoi. L'étape d'approbation du changement paraît modeste par son seul %C/E, mais ses 9 jours d'attente sont la plus longue file unique, et 30 % des changements y arrivent avec des informations de risque manquantes, que le comité renvoie.

L'équipe prend deux décisions. Premièrement, elle classe les dix types de changements à faible risque les plus fréquents comme changements standard avec des procédures préautorisées, de sorte qu'ils évitent le comité. Deuxièmement, le formulaire de prise en charge gagne les champs de risque que le comité demande toujours, et une courte liste de vérification d'acceptation est convenue avec le comité. Ces choix s'attaquent à la plus grande attente et au plus grand renvoi cumulatif, plutôt qu'à l'étape de construction, où l'on avait demandé à l'équipe d'« aller plus vite ».

Trois mois plus tard, le délai de livraison médian pour la classe échantillonnée baisse et l'attente d'approbation diminue, tandis que le %C/E cumulé monte. Le risque de détournement apparaît au troisième mois. Une équipe produit scinde plusieurs demandes en deux ou trois plus petites, parce que les petits éléments se qualifient comme changements standard, et le délai de livraison par élément chute nettement. Le relecteur remarque que le nombre d'éléments enfants liés a augmenté et que la confirmation par le client par demande d'origine ne s'est pas améliorée. Le service garde le délai de livraison, mais redéfinit l'élément comme la demande d'origine du client, de sorte que les scissions n'aident plus. Le journal des décisions consigne le changement de définition et restitue le trimestre précédent avec la même règle.

## Agilité, IA, automatisation et analytique

### Agilité

Un flux de valeur traverse des frontières d'équipes, là où la livraison continue cale souvent. Une étape pratique est de cartographier un flux avec les personnes qui y travaillent et leurs parties prenantes, de marquer l'attente entre les étapes et de choisir une transmission à améliorer. La précaution est qu'une carte faite une fois et rangée se périme : revoyez-la donc à mesure que le travail change.

### IA

L'IA peut accélérer une étape, comme la rédaction ou le triage, pendant que le travail attend alors plus longtemps à l'étape suivante. Mesurez tout le flux avant et après un changement d'IA, et pas seulement l'étape qui a reçu l'outil, et appariez le délai de livraison de bout en bout avec le pourcentage complet et exact à chaque transmission. La précaution est que des gains locaux dus à l'IA peuvent cacher un délai de livraison total plus long.

### Automatisation

Instrumentez automatiquement les événements d'entrée et de sortie d'étape pour que le flux soit mesuré à partir de vrais horodatages. Mesurez l'automatisation par le temps de traitement et le temps d'attente qu'elle supprime et par la reprise qu'elle crée en aval. La précaution est qu'automatiser une étape sans corriger la transmission qui la suit déplace la file sans raccourcir le flux.

### Analytique

Montrez l'efficacité du processus comme une tendance et décomposez le délai de livraison en traitement et attente par étape. La décision qu'elle éclaire est quelle transmission corriger d'abord. La précaution est que les définitions d'étapes diffèrent d'une équipe à l'autre : convenez donc des frontières avant de comparer, et évitez de classer les équipes selon le temps d'étape.

## Éclairage sectoriel

**Startup.** Un flux court avec peu de transmissions a peu à cartographier, et la mesure la plus utile est simplement le temps écoulé entre la demande du client et l'usage du client. Dessinez le flux sur un mur, lisez les éléments bruts et surveillez la première transmission qui apparaît à mesure que l'équipe grandit. Résistez à la tentation de construire de l'outillage avant que le flux ne se soit stabilisé.

**Petite entreprise.** Une ou deux personnes couvrent souvent plusieurs étapes : les transmissions se font donc entre des rôles ou des outils plutôt qu'entre des équipes. Les rapports du gestionnaire ou du centre de services donnent le délai de livraison à peu de frais, et un échantillon de dix éléments révèle l'attente. Demandez à vos fournisseurs, comme un prestataire de services gérés, leurs temps d'étape, puisque la file du fournisseur est souvent la plus longue attente.

**Grande entreprise.** Les longs flux avec de nombreuses équipes et portes d'approbation sont là où le %C/E cumulé et le nombre de transmissions rapportent le plus. Attribuez un responsable à chaque flux majeur, cartographiez-le conjointement avec chaque étape représentée et utilisez un identifiant d'élément partagé pour que les outils puissent être joints. Différentes divisions emploieront les mêmes mots pour des horloges différentes : publiez donc une définition par mesure et tenez un journal des changements.

**Gouvernement et secteur public.** Les approbations légales, les étapes de passation de marchés et les contrôles d'audit forment des étapes légitimes qui ne peuvent être supprimées, et elles contiennent souvent les plus longues attentes. Cartographiez-les honnêtement, séparez l'attente imposée de l'attente évitable et montrez la part imposée à ceux qui fixent les règles. Gardez une piste d'audit des données et de tout changement de définition (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est que l'attente est généralement la plus grande partie du délai de livraison et la moins chère à réduire, parce que la correction est souvent une décision, une règle ou une transmission plutôt qu'une capacité supplémentaire. Les clients ressentent directement le délai de livraison, et l'organisation paie la reprise en capacité qui n'apparaît jamais sur un rapport d'étape. Réduire les transmissions et les renvois réduit aussi les modes de défaillance qui deviennent plus tard des incidents.

Les coûts sont modestes et surtout humains : quelques heures du temps de plusieurs personnes pour l'atelier de cartographie et l'échantillon, un identifiant d'élément partagé entre outils (voir le sujet 1.5, Sources de données et instrumentation) et un peu de temps d'analyste chaque mois. Le coût le plus lourd est la conversation entre équipes et la volonté de changer une règle que quelqu'un détient.

Le rendement se voit dans des délais de livraison plus courts et plus prévisibles, un %C/E cumulé en hausse, moins d'éléments renvoyés et une capacité libérée de la reprise. Ne prévoyez pas d'amélioration en pourcentage tirée d'études de cas publiées. Estimez le rendement à partir de votre propre flux : le volume d'éléments, l'attente actuelle, le coût du retard pour le client tel que vous pouvez l'énoncer et les heures de reprise que vous pouvez compter. Le Flow Framework et la littérature lean décrivent le schéma, et aucun ne fournit de valeur de référence qui se transpose à votre flux (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Cartographier une étape au lieu d'un flux.** Une carte superbement détaillée du travail d'une équipe laisse les plus longues attentes hors de la page. Cartographiez de la demande du client à l'usage du client, et n'ajoutez du détail que là où sont les attentes.
- **Moyenner des temps d'étape issus d'échantillons différents.** La somme des moyennes d'étapes n'est pas la moyenne du flux. Calculez les mesures du flux à partir d'enregistrements au niveau des éléments et rapportez des médianes et des percentiles.
- **Traiter le temps d'attente comme un problème d'effort.** Dire aux gens de travailler plus vite raccourcit rarement une file. Demandez ce que l'élément attend et si l'attente est nécessaire.
- **Optimiser l'efficacité du processus comme un objectif.** Une fois le ratio devenu un but, le temps de traitement est gonflé ou le délai de livraison rogné par des astuces. Servez-vous-en comme d'une invite à enquêter et appariez-le avec le délai de livraison confirmé par le client.
- **Mesurer le %C/E sans condition d'acceptation écrite.** Sans elle, chaque renvoi est une dispute. Faites écrire la condition par l'étape réceptrice et gardez-la courte.
- **Laisser la reprise silencieuse non consignée.** Si une étape répare le travail entrant sans le consigner, le %C/E est surévalué et l'étape émettrice n'apprend jamais. Consignez chaque correction comme un renvoi.
- **Utiliser les métriques du flux pour classer des équipes ou des personnes.** Elles décrivent le système, et la plus grande attente est rarement la faute d'une seule équipe. Rapportez par étape et par flux, et revoyez les résultats avec toutes les étapes présentes.
- **Cartographier une fois et jamais plus.** Les flux dérivent. Revoyez la carte selon un calendrier et après toute réorganisation ou changement d'outil.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition du flux et horloges | Flux non défini ; chaque équipe mesure sa propre étape | Un flux cartographié par une équipe ; les horloges diffèrent de celles des autres équipes | Début et fin écrits pour chaque flux majeur, de la demande du client à l'usage du client | Règles d'horloge revues, changements consignés, historique restitué quand les définitions changent | Définitions révisées entre équipes et fournisseurs à mesure que le flux et la demande changent |
| Temps de traitement et temps d'attente | Seul le temps écoulé est connu | Échantillonné à la main pour un flux | Collecté à partir d'événements d'outils avec un modèle d'états documenté et des estimations étiquetées | Suivi avec des percentiles, réductions d'attente financées et suivies | Attentes entre fournisseurs et équipes gérées conjointement, avec files partagées visibles |
| Qualité le long du flux | Reprise remarquée mais non comptée | Renvois comptés par certaines étapes | Conditions d'acceptation écrites et %C/E par étape montrés aux équipes qui les détiennent | %C/E cumulé suivi dans le temps et apparié avec des mesures de reprise et d'échec | Conditions d'acceptation codétenues par l'émetteur et le récepteur et reliées aux résultats pour le client |
| Usage pour l'amélioration | Cartographie faite une fois, puis rangée | Un atelier occasionnel mène à une correction locale | Revue trimestrielle avec chaque étape présente | La plus grande attente ou le plus grand renvoi traité chaque trimestre avec un responsable | Les idées d'amélioration viennent de chaque étape, avec décisions consignées et résultats vérifiés |

## Liste de vérification

- [ ] Un flux de valeur et une classe d'éléments sont nommés, avec un responsable du flux.
- [ ] Le début et la fin de l'horloge sont écrits en termes de demande du client et d'usage du client.
- [ ] La carte de l'état actuel a été construite avec un représentant de chaque étape, y compris du côté du client.
- [ ] Le temps de traitement et le temps d'attente sont consignés séparément pour chaque étape à partir d'un échantillon d'éléments réels.
- [ ] Les temps d'étape et de flux sont rapportés comme des médianes et un percentile élevé, avec la taille d'échantillon montrée.
- [ ] Chaque étape réceptrice a une condition d'acceptation écrite, et les renvois sont consignés.
- [ ] Le pourcentage complet et exact cumulé est calculé à partir des valeurs par étape.
- [ ] Les transmissions sont comptées et la plus grande attente a un responsable nommé et une expérience planifiée.
- [ ] Chaque métrique a son vecteur de détournement et son garde-fou revus avec l'équipe.
- [ ] La carte et l'échantillon sont revus selon un calendrier, et les changements de définition sont consignés.

## Prompts d'IA

**Rédigez un guide d'entretien pour la cartographie d'un flux de valeur.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Calculez les mesures du flux à partir d'un échantillon.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Trouvez les risques de détournement d'un tableau de bord de flux.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Rédigez une condition d'acceptation pour une transmission.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique de votre carte de flux et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique modifié énonce ses horloges, ses vecteurs de détournement et ses renvois.

## Idées clés

- Mesurez le flux de la demande du client à l'usage du client, car les mesures aux frontières des équipes cachent les plus longues attentes.
- Séparez chaque étape en temps de traitement et en temps d'attente, et cherchez la cause de la plus grande attente dans l'interface entre les équipes.
- Le pourcentage complet et exact se compose à travers les étapes : la valeur cumulée est donc généralement plus basse que ne le suggère n'importe quel rapport d'étape.
- Réduisez les transmissions et préautorisez le travail courant avant de pousser les étapes à aller plus vite.
- Observez un échantillon d'éléments réels à côté des données d'outils, rapportez des percentiles et étiquetez les estimations.
- Appariez chaque métrique de flux avec son garde-fou, et utilisez les mesures pour décrire le système, jamais pour classer des personnes.

## Références et lectures complémentaires

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
