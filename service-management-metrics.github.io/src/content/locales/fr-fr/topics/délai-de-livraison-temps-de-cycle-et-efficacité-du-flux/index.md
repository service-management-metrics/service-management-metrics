# Délai de livraison, temps de cycle et efficacité du flux

**Le délai de livraison, le temps de cycle et l'efficacité du flux ne signifient quelque chose que si chacun a un début et une fin écrits, une distribution plutôt qu'une moyenne et une vue de l'attente qui remplit l'essentiel du temps écoulé.**

## Vue d'ensemble et motivation

Presque toute équipe veut savoir combien de temps prend le travail. La question paraît simple et produit des disputes, car « combien de temps » dépend de qui la pose et de l'endroit où il déclenche le chronomètre. Un client compte à partir du moment où il a demandé. Un développeur compte à partir du moment où il a pris le travail. Un responsable d'exploitation compte à partir du moment où le ticket a été affecté à une file. Tous trois ont raison sur leur propre horloge, et tous trois donnent des chiffres différents pour le même travail.

Le [délai de livraison](https://en.wikipedia.org/wiki/Lead_time) est le temps écoulé entre l'arrivée d'une demande et sa satisfaction, vu du côté de la personne qui a demandé. Le [temps de cycle](https://en.wikipedia.org/wiki/Cycle_time) est le temps écoulé entre le moment où l'équipe s'engage sur un travail et le moment où il est terminé, vu du côté de l'équipe qui le fait. La différence entre les deux est le temps pendant lequel la demande a attendu avant que l'équipe ne commence. L'efficacité du flux est la part du temps écoulé pendant laquelle quelqu'un travaillait réellement sur l'élément, par opposition à l'élément qui attend. Si un élément a pris 10 jours du début à la fin et a été travaillé pendant 1 jour, son efficacité du flux est de 10 %. Le temps de traitement actif est la partie travaillée. Le temps d'attente est tout le reste.

Le [développement logiciel lean](https://en.wikipedia.org/wiki/Lean_software_development) et le Kanban Guide ont transporté ces idées de l'industrie vers le travail de la connaissance. Les pratiques ITIL parlent de temps de résolution, de temps d'exécution et d'objectifs de niveau de service, et les équipes agiles parlent de temps de cycle et d'éléments de travail. Ce sujet donne un seul jeu de définitions qui tient quand un incident, une demande, un changement et un récit partagent une réunion.

Le temps écoulé a une propriété qui surprend les gens la première fois qu'ils le mesurent. Dans la plupart du travail de la connaissance et du travail de service, l'élément passe la majorité de sa vie à attendre : une décision, un relecteur, un environnement, un fournisseur, une fenêtre de maintenance, ou simplement une personne occupée à autre chose. Rendre cette attente visible est ce que ces métriques font de plus utile. Une équipe qui ne voit pas son temps d'attente tend à vouloir s'améliorer en travaillant plus vite, ce qui a peu d'effet sur un système où 90 % du temps écoulé se passe dans des files. Le comportement des files est traité en profondeur dans le sujet 2.3, Travail en cours et théorie des files d'attente, et la vue complète du flux de valeur est dans le sujet 2.4, Métriques de flux de valeur.

Les mesures de temps sont rapportées en percentiles, comme la médiane et le [percentile](https://en.wikipedia.org/wiki/Percentile) 85 ou 95, pour les raisons exposées dans le sujet 1.6, Culture statistique pour les métriques de service. Les horodatages bruts viennent des sources du sujet 1.5, Sources de données et instrumentation. Les mesures de flux de travail en cours, de débit et d'âge des éléments de travail sont dans le sujet 2.1, Mesures de flux, et la mesure DORA du délai de livraison des changements est dans le sujet 2.8, Métriques DORA. Ce sujet couvre les mesures de temps elles-mêmes : comment les définir pour qu'elles soient comparables, où démarrent et s'arrêtent leurs horloges et comment exposer l'attente qu'elles contiennent.

## Principes clés

- **Nommez l'horloge avant de lire le chiffre.** Chaque mesure de temps a un événement de début, un événement de fin et une liste d'exclusions. Un chiffre sans eux est une opinion.
- **Le délai de livraison appartient au client, le temps de cycle appartient à l'équipe.** Gardez les deux, et étiquetez toujours lequel un graphique montre, car l'écart entre eux est un signal en soi.
- **Rapportez des distributions, jamais seulement une moyenne.** La médiane décrit l'élément typique. Un percentile élevé décrit le risque que le client porte réellement.
- **L'attente est le principal constat.** L'efficacité du flux est généralement faible, et la réponse consiste à supprimer les files et les transmissions, pas à demander aux gens de se dépêcher.
- **Les états de suspension sont des décisions de conception.** Si l'horloge peut être arrêtée en déplaçant un élément vers un état « en attente », cet état sera utilisé : comptez donc à quelle fréquence il l'est et par qui.
- **Comparez un élément à ceux de son espèce.** Un incident, une demande standard, un changement et une fonctionnalité n'ont pas la même forme. Segmentez par type de travail avant de comparer quoi que ce soit.
- **Mesurez des systèmes, pas des personnes.** Les mesures de temps décrivent la façon dont le travail circule dans une équipe ou un service. Elles ne sont jamais un classement d'individus.

## Définitions des métriques

Le tableau ci-dessous emploie un seul vocabulaire pour les éléments de travail agiles et les enregistrements ITIL. « Élément de travail » désigne tout enregistrement qui circule dans un flux de travail : un récit, une tâche, un incident, une demande de service, un changement ou un enregistrement de problème. Toutes les durées sont du temps civil écoulé sauf indication contraire, et chacune est rapportée comme la médiane et un percentile élevé.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison | Temps écoulé entre l'arrivée d'une demande et sa livraison au demandeur | horodatage de livraison moins horodatage d'arrivée de la demande, par élément de travail ; l'horloge démarre quand la demande est enregistrée, s'arrête quand le demandeur peut utiliser le résultat ; les éléments encore ouverts et les éléments annulés avant livraison sont exclus et comptés séparément | jours ou heures | Historique de l'outil ITSM ou du gestionnaire d'anomalies | Gestion des demandes de service ; gestion des incidents ; maîtrise des changements | Délai de livraison sur le tableau de l'équipe ; temps de la demande à la version | Hebdomadaire, revue mensuelle |
| Temps de cycle | Temps écoulé entre le moment où l'équipe commence le travail et celui où il est terminé | horodatage de fin moins horodatage de début, par élément de travail ; l'horloge démarre au premier passage dans un état de travail actif, s'arrête au premier passage dans un état terminé ; le temps avant le début et après l'état terminé est exclu | jours ou heures | Historique des états du gestionnaire ou du tableau | Gestion des incidents ; gestion des demandes de service ; maîtrise des changements | Temps de cycle (voir le sujet 2.1, Mesures de flux) | Hebdomadaire |
| Temps de traitement actif | Temps pendant lequel une personne ou une automatisation travaille activement sur l'élément | somme des intervalles que l'élément passe dans des états classés comme travail actif ; les états d'attente, de blocage et de file sont exclus | heures | Historique des états du gestionnaire, chaque état étant classé actif ou en attente | Gestion des incidents ; gestion des demandes de service | Temps de traitement dans une cartographie du flux de valeur | Échantillon mensuel |
| Temps d'attente | Temps pendant lequel l'élément est dans une file, bloqué ou suspendu | temps de cycle moins temps de traitement actif, par élément de travail ; s. o. pour les éléments sans début enregistré | jours ou heures | Historique des états du gestionnaire | Gestion des incidents ; gestion des niveaux de service | Temps d'attente ou temps bloqué sur un tableau | Mensuelle |
| Efficacité du flux | Part du temps de cycle passée en travail actif | somme des temps de traitement actif / somme des temps de cycle, pour les éléments terminés dans la période ; les éléments dont l'historique d'états est manquant sont exclus et comptés séparément | pourcentage | Historique des états du gestionnaire | Amélioration continue ; gestion des demandes de service | Efficacité du flux de la pratique lean | Mensuelle |
| Part de suspension de l'horloge | Part du temps de cycle pendant laquelle l'horloge de service formelle était suspendue | somme des durées de suspension / somme des temps de cycle, pour les éléments terminés dans la période ; les suspensions sont les statuts définis dans les règles d'horloge écrites | pourcentage | Historique des statuts de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps de la colonne bloqué ou en attente | Mensuelle |

Le début de l'horloge du temps de cycle est une décision d'équipe qui doit être écrite. L'horloge formelle d'un accord de niveau de service (SLA) se suspend souvent pendant qu'un élément attend le client : ce sujet rapporte donc la part de suspension plutôt que d'écarter ce temps. Le temps de traitement actif est déduit des états ; son exactitude dépend donc de la qualité avec laquelle les états décrivent le travail.

## Recommandations

### Définir les horloges

**1. Écrivez le début et la fin de chaque horloge.** Pour le délai de livraison, le début est l'arrivée de la demande, telle qu'enregistrée par le premier système que touche le demandeur, et la fin est le moment où le demandeur peut utiliser le résultat. Pour le temps de cycle, le début est le premier passage dans un état actif et la fin est le premier passage dans un état terminé. Mettez les deux dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) et montrez la définition sous chaque graphique.

**2. Convenez de ce que « terminé » signifie pour chaque type de travail.** Un changement est terminé quand il s'exécute en production et qu'il est vérifié, pas quand le code est fusionné. Un incident est terminé quand le service est rétabli pour l'utilisateur, pas quand le ticket est clos par un traitement par lots le vendredi. Une demande est terminée quand le demandeur a la chose. Si « terminé » diffère selon les équipes, les temps de cycle ne peuvent pas être comparés entre elles.

**3. Gardez à la fois le délai de livraison et le temps de cycle, et surveillez l'écart.** La différence entre les deux est l'attente d'engagement : le temps pendant lequel une demande reste avant que l'équipe ne commence. Un temps de cycle court à côté d'un long délai de livraison dit que l'équipe travaille efficacement sur ce qu'elle commence et que la prise en charge est le goulot d'étranglement. Un temps de cycle long à côté d'un court délai de livraison dit que les demandes sont acceptées vite puis calent dans l'équipe.

### Rapporter le temps honnêtement

**4. Utilisez des percentiles et dites lesquels.** Rapportez la médiane et le 85e ou le 95e percentile, par exemple « la moitié des éléments se sont terminés en 4 jours et 85 % en 11 jours ». Cet énoncé est aussi une prévision : un nouvel élément a environ 85 % de chances de se terminer en 11 jours si le système reste le même. Une moyenne ne peut pas vous donner cette phrase, et elle bouge beaucoup quand une seule valeur aberrante apparaît (voir le sujet 1.6, Culture statistique pour les métriques de service).

**5. Tracez chaque élément, pas seulement le résumé.** Un nuage de points du temps de cycle face à la date de fin montre d'un coup d'œil la forme du système : regroupements, lente dérive vers le haut, marche brusque après un changement de processus. Les chiffres de synthèse se placent à côté du graphique. Un outil qui n'offre qu'une ligne de moyenne supprime l'information dont l'équipe a le plus besoin.

**6. Segmentez par type de travail et par classe de service.** Un incident urgent, une demande standard, un changement planifié et un récit de recherche ont des temps attendus différents. Séparez les données par type, et par priorité là où la priorité change la façon dont le travail est traité, avant de chercher des schémas. Les populations mélangées produisent une large distribution qui ne décrit l'expérience de personne.

### Exposer l'attente

**7. Classez chaque statut comme actif, en attente ou terminé.** C'est le travail qui rend possible l'efficacité du flux. « En développement » et « en revue avec un relecteur au travail » sont actifs. « En attente de revue », « en attente d'approbation », « bloqué » et « en attente du client » sont en attente. Revoyez la classification avec l'équipe, car les libellés d'un flux de travail disent rarement toute la vérité, et un état appelé « en cours » cache souvent un élément que personne n'a touché depuis une semaine.

**8. Calculez l'efficacité du flux comme un diagnostic, pas comme un objectif.** Calculez-la sur un échantillon ou sur tous les éléments terminés, et servez-vous-en pour trouver où vit l'attente : quel état retient le plus longtemps les éléments, et quelle transmission le précède. Attendez-vous à des chiffres bas, et ne fixez pas d'objectif du genre « atteindre 40 % ». Faire monter le chiffre en réétiquetant des états d'attente comme actifs est facile et inutile, et les vrais gains viennent de la suppression de la file elle-même (voir le sujet 2.4, Métriques de flux de valeur).

**9. Comptez séparément le temps bloqué et le temps suspendu.** Suivez la fréquence à laquelle les éléments entrent dans un état bloqué ou suspendu, combien de temps ils y restent et quel en était le motif. Une courte liste de motifs de blocage récurrents, comme l'attente d'une approbation, d'un environnement ou d'un fournisseur, vous dit quoi corriger et à qui parler. Rapportez la part de suspension à côté de tout résultat de niveau de service qui exclut le temps suspendu (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Bien utiliser les chiffres

**10. Maîtrisez la file pour maîtriser le temps.** Le temps de traversée d'un système augmente avec le travail en cours, une relation exposée par la [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law), qui relie le nombre moyen d'éléments dans le système, le taux d'arrivée ou d'achèvement et le temps moyen que chaque élément y passe. Limiter le travail en cours est donc le levier le plus direct sur le temps de cycle (voir le sujet 2.3, Travail en cours et théorie des files d'attente). Changer l'objectif de la métrique sans changer la file ne fait que changer l'incitation à mal rapporter.

**11. Utilisez les distributions de temps de cycle pour les prévisions et pour les objectifs de niveau de service.** Si le 85e percentile du temps de cycle des demandes standard est de 6 jours, un engagement à 5 jours sera souvent manqué, et un engagement à 8 jours sera tenu avec de la marge. Fondez un objectif interne sur ce que le système a fait, puis travaillez sur le système pour déplacer la distribution (voir le sujet 3.5, Métriques de traitement des demandes de service, et le sujet 4.3, Métriques de maîtrise des changements).

**12. Traitez une définition modifiée comme un événement.** Si le début ou la fin d'une horloge change, marquez-le sur chaque graphique et restituez l'historique à partir des événements bruts dans la mesure du possible. Sans cette discipline, une courbe de tendance montre l'effet d'un changement de définition comme s'il s'agissait d'une amélioration ou d'un déclin (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai de livraison | Retarder la création de l'enregistrement de la demande pour que l'horloge démarre tard ; clore et rouvrir des éléments pour relancer l'horloge ; scinder une demande en de nombreuses minuscules | Comparer les enregistrements de demande avec le premier contact par courriel ou discussion sur un échantillon ; suivre le taux de réouverture ; suivre la taille et le nombre d'éléments par demande |
| Temps de cycle | Démarrer l'horloge tard en ne passant les éléments à « en cours » qu'à la fin ; laisser des éléments hors du tableau jusqu'à ce qu'ils soient presque finis ; découper le travail en morceaux qui ne livrent pas de valeur par eux-mêmes | Âge des éléments ouverts (voir le sujet 2.1, Mesures de flux) ; vérifier que les éléments terminés sont utilisables par le demandeur ; comparer le délai de livraison avec le temps de cycle |
| Temps de traitement actif | Classer des états d'attente comme actifs, ou consigner de l'activité pour avoir l'air occupé | Revoir chaque trimestre la classification des états avec l'équipe ; échantillonner des éléments et comparer l'activité consignée aux validations, aux commentaires et aux agendas |
| Temps d'attente | Créer de nouveaux statuts pour que le temps d'attente tombe dans un interstice non mesuré ; déplacer des éléments en attente vers un statut hors du flux de travail | Compter les statuts et transitions non documentés (voir le sujet 1.5, Sources de données et instrumentation) ; confirmer sur un échantillon que le temps de cycle égale le temps de traitement actif plus le temps d'attente |
| Efficacité du flux | Réclasser l'attente comme actif ; ne sélectionner que des éléments rapides pour l'échantillon ; terminer d'abord les éléments faciles pour relever le ratio | Classification des états figée avec un journal des changements ; la calculer sur tous les éléments terminés ; la rapporter avec le temps de cycle au 85e percentile et l'âge des éléments ouverts |
| Part de suspension de l'horloge | Suspendre l'horloge de service formelle pour des raisons qui ne dépendent pas du client, comme des transmissions internes, pour respecter le SLA | Auditer les motifs de suspension sur un échantillon ; rapporter côte à côte le temps écoulé et le temps SLA ; revoir le point de vue du client sur le temps de résolution (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA) |

Une lecture saine montre un délai de livraison et un temps de cycle qui évoluent ensemble, un écart entre eux que l'équipe sait expliquer, un 85e percentile qui est un multiple stable de la médiane et une efficacité du flux faible mais en hausse à mesure que des files précises sont supprimées. Les signes d'alerte sont une médiane qui s'améliore pendant que le percentile élevé empire, une part de suspension qui croît à la fin de chaque mois et une efficacité du flux qui bondit sans aucun changement dans la façon dont le travail est fait. Quand un chiffre s'améliore, quelqu'un doit pouvoir montrer le changement du travail qui l'explique. Une amélioration due au détournement échouera généralement à ce test. La psychologie plus large est traitée dans le sujet 1.2, Loi de Goodhart et psychologie des métriques.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Délai de livraison du point de vue du demandeur | Correspond à ce que ressent le client ; difficile à améliorer en changeant des libellés internes | L'événement de début échappe au contrôle de l'équipe et peut être mal enregistré |
| Temps de cycle depuis l'engagement de l'équipe | Sous le contrôle de l'équipe ; facile à calculer à partir de l'historique du tableau | Ignore le retard de prise en charge ; une équipe peut paraître rapide pendant que les demandes attendent |
| Temps écoulé (horloge civile) | Simple, comparable et conforme à l'expérience du client | Inclut nuits et week-ends, ce qui peut induire en erreur pour des équipes aux horaires différents |
| Horloge en heures ouvrées | Convient aux niveaux de service dotés de personnel et aux schémas d'astreinte | Demande un calendrier par équipe ; cache l'attente réelle vécue par le client |
| Efficacité du flux sous forme de ratio | Montre en un chiffre unique et intuitif la part de temps passée à attendre | Dépend de la classification des états ; facile à gonfler ; peut être lue à tort comme un objectif |
| Rapport par percentiles | Montre le risque et soutient les prévisions | Demande assez d'éléments par période ; plus difficile à lire pour certains publics qu'une moyenne |

Le conseil pratique est de commencer par le temps écoulé, d'ajouter une vue en heures ouvrées seulement là où un niveau de service l'exige, et de rapporter à la fois le délai de livraison et le temps de cycle à un percentile élevé. Utilisez l'efficacité du flux comme amorce de conversation lors d'une revue, avec la classification des états sur la table, et évitez de la placer sur un tableau de score.

## Questions à discuter avec votre équipe

**1. Où démarre notre horloge de délai de livraison, et où le client pense-t-il qu'elle démarre ?**
Prenez trois demandes récentes et retracez-les du premier contact à la livraison. Marquez le moment où la demande a été enregistrée dans le système de référence. Comparez l'écart entre le premier contact et la création de l'enregistrement. L'animateur doit chercher les files cachées dans les courriels, les discussions ou une boîte partagée qui n'apparaissent jamais dans une métrique.

**2. Que signifie « terminé » pour chaque type de travail que nous traitons ?**
Listez les types de travail, comme les incidents, les demandes, les changements et les récits, et demandez l'événement de fin de chacun. Demandez si le demandeur serait d'accord que le travail était fini à ce moment. Les divergences d'opinion pointent vers une horloge qui s'arrête trop tôt. Convenez d'un événement de fin par type et écrivez-le.

**3. Lesquels de nos statuts sont des attentes, et combien de temps les éléments y restent-ils ?**
Affichez le flux de travail sur un mur et marquez chaque état comme actif ou en attente. Demandez le temps typique dans chaque état d'attente à partir du dernier mois de données. Le plus grand état d'attente est généralement une surprise pour quelqu'un. Choisissez une file à examiner de plus près le mois prochain.

**4. Quel percentile promettons-nous, et qu'a réellement fait le système ?**
Montrez la distribution des temps de cycle du dernier trimestre avec la médiane, le 85e percentile et le 95e percentile. Demandez quel engagement l'équipe prend actuellement envers les clients et où il se situe sur la distribution. Discutez du coût de promettre un temps plus rapide que ce que le système a livré. Décidez d'un engagement que l'équipe peut tenir pour ses propres raisons.

**5. Qui est autorisé à suspendre l'horloge, et pourquoi ?**
Listez les états de suspension et de mise en attente, les personnes qui peuvent les employer et les motifs déclarés. Lisez un échantillon d'éléments suspendus et demandez si le client était vraiment la cause. Discutez de ce qui se passerait si la part de suspension était montrée sur le même graphique que le résultat du SLA. L'animateur doit garder un ton curieux, car les états de suspension existent souvent pour des raisons légitimes qui n'ont jamais été écrites.

**6. Si l'efficacité du flux doublait le trimestre prochain, qu'aurions-nous changé dans la façon dont le travail circule ?**
Demandez au groupe de nommer des files, des transmissions, des approbations ou des tailles de lots précis qui devraient changer. Si les réponses sont générales, comme « travailler plus dur » ou « mieux communiquer », le chiffre n'est pas encore relié à une action. Choisissez un changement concret, prédisez son effet sur le temps d'attente d'un état nommé et convenez du moment de vérifier.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent l'horloge du temps de cycle et en voient le détail sur le tableau. Elles gagnent le plus à classer honnêtement les états, à limiter le travail en cours et à lire le nuage de points dans leurs propres rétrospectives. Elles doivent résister à la pression de scinder le travail en morceaux artificiellement petits qui se terminent vite et ne livrent rien, et montrer l'âge des éléments ouverts à côté des temps de cycle terminés (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes de service travaillent avec des enregistrements qui portent des horloges de niveau de service formelles, et leurs états de suspension sont l'endroit où le temps écoulé et le temps SLA divergent. Elles doivent rapporter les deux horloges, segmenter par type et par priorité et consigner le motif de chaque suspension. Les équipes d'exploitation sont aussi les détentrices naturelles des files d'approbation, des fenêtres de maintenance et des réponses de fournisseurs, qui dominent souvent le temps d'attente que voient les équipes produit (voir le sujet 3.5, Métriques de traitement des demandes de service).

### Direction et gouvernance

Les dirigeants demandent le délai de livraison parce que c'est le chiffre le plus proche de ce que vit le client. Ils doivent attendre avec chaque chiffre une définition, une distribution et une segmentation, et demander où est l'attente avant de demander pourquoi les gens sont lents. Les objectifs sur ces mesures fonctionnent mieux quand ils s'appliquent à un service ou à un flux de valeur avec un responsable nommé, et quand ils sont fixés à partir de ce que le système a livré. Un objectif appliqué à une moyenne invite à la reclassification et aux jeux d'horloge.

### Clients et utilisateurs

Les clients éprouvent le délai de livraison, y compris toute l'attente avant que le travail commence et toute l'attente après que l'équipe croit avoir fini. Ils ont besoin d'une estimation honnête exprimée comme une fourchette, par exemple « la plupart des demandes de ce type sont traitées en une semaine, et presque toutes en deux », et ils ont besoin de savoir quand une suspension a été appliquée parce que l'équipe les attendait. Les rapports aux clients doivent indiquer quelle horloge ils emploient (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un centre de services, une équipe d'infrastructure et une équipe d'applications qui soutient le personnel clinique. Tous les chiffres de cet exemple sont illustratifs.

Le centre de services rapporte que les demandes d'accès standard respectent leur objectif de 5 jours ouvrés dans 94 % des cas, et pourtant les cadres de santé des services continuent de se plaindre que l'accès prend « environ deux semaines ». Le responsable de l'exploitation des services demande à l'équipe de mesurer le délai de livraison et le temps de cycle de ces demandes sur un trimestre, en jours civils écoulés à partir de l'historique brut des statuts plutôt que de la minuterie du SLA.

Le résultat pour 400 demandes (illustratif) est un temps de cycle médian de 3 jours et un 85e percentile de 9 jours. Le délai de livraison, mesuré à partir du moment où le cadre a écrit pour la première fois à la boîte partagée, a une médiane de 8 jours et un 85e percentile de 16 jours. Deux constats expliquent l'écart. Premièrement, les demandes attendent en moyenne 3 jours dans la boîte avant que quiconque crée un ticket, ce qui est invisible pour le SLA. Deuxièmement, le statut « en attente d'approbation » représente l'essentiel du temps de cycle : sur les 9 jours du 85e percentile, environ 6 jours se passent à attendre qu'un chef de service approuve. Le temps de traitement actif sur un échantillon de 30 demandes est d'environ une demi-journée : l'efficacité du flux est donc d'environ 8 % (illustratif). Le résultat du SLA est élevé parce que la minuterie s'arrête pendant « en attente d'approbation » et « en attente du client » : la part de suspension de l'horloge est donc de 52 % du temps de cycle.

L'équipe prend trois décisions. Elle ajoute un formulaire web qui crée le ticket au premier contact, pour que l'horloge du délai de livraison démarre là où démarre celle du client. Elle convient avec les chefs de service que les approbations pour une liste définie de rôles standard sont préautorisées, avec un audit trimestriel plutôt qu'une approbation par demande. Et elle ajoute la part de suspension et le délai de livraison à la revue de service mensuelle à côté du résultat du SLA. Après un trimestre, le délai de livraison médian tombe à 4 jours et le 85e percentile à 8 jours (illustratif), tandis que le résultat du SLA bouge à peine.

Pendant la revue, l'équipe repère un risque de détournement. Un technicien a commencé à déplacer les tickets vers « en attente du client » dès qu'un courriel d'approbation est envoyé, ce qui n'est pas la finalité du statut. La part de suspension de ce groupe monte, l'audit d'un échantillon de tickets suspendus montre le schéma, et l'équipe réécrit les règles d'horloge pour que seule une demande d'information adressée au demandeur puisse suspendre l'horloge. Le garde-fou qui a repéré le problème était le rapport de la part de suspension à côté du résultat du SLA, qui est l'appariement recommandé dans ce sujet.

## Agilité, IA, automatisation et analytique

### Agilité

La livraison continue raccourcit la boucle entre une idée et les mains d'un utilisateur : le délai de livraison est donc la mesure que ressent une partie prenante. Une bonne pratique est de décider avec les parties prenantes où démarre le délai de livraison, par exemple au moment où une demande est acceptée, et de garder cette définition stable. La précaution est qu'une équipe peut réduire le temps de cycle en démarrant l'horloge plus tard : rapportez donc toujours aussi le délai de livraison du côté du client.

### IA

Les outils d'IA peuvent réduire le temps de traitement actif de la rédaction et du codage tout en laissant le temps d'attente inchangé ou plus long : l'efficacité du flux peut donc baisser alors que les gens se sentent plus rapides. Rapportez séparément le temps de traitement actif et le temps d'attente du travail assisté par l'IA, et appariez-les avec les reprises. La précaution est qu'une baisse du temps de cycle peut venir d'une moindre profondeur de revue : échantillonnez donc les changements pour voir si la qualité a tenu.

### Automatisation

Calculez chaque horloge à partir d'horodatages d'événements plutôt que de champs saisis par des personnes, et consignez chaque suspension avec un motif. Mesurez l'automatisation elle-même par le temps d'attente qu'elle supprime et la fréquence à laquelle elle ajoute une nouvelle file, comme une étape d'approbation manuelle qu'elle ne peut pas sauter. La précaution est que des modifications rétroactives de statut peuvent réécrire l'histoire : consignez donc les modifications.

### Analytique

Rapportez les percentiles du délai de livraison et du temps de cycle et montrez le ratio du temps de traitement actif sur le délai de livraison comme une tendance. La décision qu'elle éclaire est où supprimer l'attente, ce qui se situe généralement entre les équipes. La précaution est que l'efficacité du flux dépend de la finesse avec laquelle le temps de traitement actif est consigné : traitez-la donc comme un guide approximatif et non comme un ratio précis.

## Éclairage sectoriel

**Startup.** Avec une petite équipe et peu de transmissions, le temps de cycle est facile à mesurer sur le tableau et le délai de livraison est proche du temps de cycle. Suivez les deux dès le premier jour avec une classification simple des états, et regardez le nuage de points chaque semaine. L'efficacité du flux est généralement déjà élevée pour de petites tâches : le danger principal est donc une prise en charge informelle qui cache les demandes dans les discussions.

**Petite entreprise.** Une seule personne peut jouer le rôle de demandeur, d'approbateur et d'exécutant, et le centre de services hébergé peut n'offrir qu'une minuterie de SLA. Exportez l'historique brut des statuts, calculez vous-même le temps écoulé et gardez une seule définition pour chaque horloge. Le constat le plus utile est généralement le temps que les demandes attendent les réponses des fournisseurs.

**Grande entreprise.** De nombreuses transmissions entre équipes, fournisseurs et comités d'approbation rendent le temps d'attente grand et réparti entre organisations. Convenez d'un vocabulaire partagé pour le début, la fin et la suspension, classez les états de façon cohérente entre les outils ITSM et d'ingénierie et segmentez par type de travail et classe de service. Les comparaisons entre équipes n'ont de sens qu'une fois les définitions alignées, et un agrégat doit être construit à partir de distributions, pas en moyennant des moyennes d'équipes.

**Gouvernement et secteur public.** Les délais de réponse légaux, les règles de passation de marchés et les chaînes d'approbation créent une attente que l'équipe ne peut supprimer seule. Consignez les horloges imposées de l'extérieur séparément des horloges internes, pour que la part du retard que l'organisation contrôle puisse être vue et améliorée. Le rapport public du délai de livraison, avec des définitions simples, construit la confiance et expose les files que crée la politique (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La principale motivation est que les mesures de temps transforment une plainte vague (« ça prend une éternité ») en un problème localisé (« les demandes attendent six jours une approbation »). Les mêmes données donnent aux équipes une prévision véridique : les engagements envers les clients reposent donc sur la distribution du travail passé plutôt que sur l'espoir. Elles exposent aussi où un investissement dans l'automatisation, les approbations ou les effectifs raccourcirait le temps écoulé, ce qui n'est souvent pas là où les gens l'attendent.

Les coûts sont modestes quand l'outillage enregistre déjà les changements d'état. La mise en place implique de convenir des définitions, de classer les états et de construire une vue de la distribution et du nuage de points. Les coûts d'exploitation sont le temps d'entretenir la classification des états, d'auditer les motifs de suspension sur un échantillon et de tenir la revue mensuelle. Là où l'historique d'états manque ou est peu fiable, le premier investissement porte sur l'instrumentation décrite dans le sujet 1.5, Sources de données et instrumentation.

Le rendement se voit dans des schémas qu'une équipe peut mesurer elle-même : un temps de cycle à percentile élevé plus court pour un type de travail, moins d'escalades sur des éléments en retard, moins de disputes sur l'horloge qui a raison et un plus petit écart entre le délai de livraison et le temps de cycle. N'attendez pas un gain particulier d'une valeur de référence. Les auteurs du lean et du flux décrivent une faible efficacité du flux comme courante, mais aucun chiffre publié ne doit être adopté comme objectif pour votre propre travail sans vos propres données. Le coût total de possession est dominé par le temps des personnes : comptez donc les heures du responsable de la métrique et des relecteurs.

## Anti-modèles et pièges

- **Rapporter la moyenne.** Une seule longue valeur aberrante tire la moyenne et l'élément typique est mal décrit. Rapportez la médiane et un percentile élevé, et tracez les éléments.
- **Un chiffre pour tout le travail.** Mélanger incidents, demandes et fonctionnalités produit une distribution qui ne décrit rien. Segmentez d'abord par type de travail et classe de service.
- **Ne mesurer que l'horloge du SLA.** Une minuterie qui s'arrête pendant les états d'attente rapporte un résultat que le client ne vit jamais. Rapportez le délai de livraison écoulé et la part de suspension à côté.
- **Fixer un objectif d'efficacité du flux.** Les gens font monter le ratio en réétiquetant les états. Utilisez-la comme diagnostic et jugez le succès au temps d'attente de files nommées.
- **Démarrer l'horloge au mauvais endroit.** Une horloge qui commence à l'affectation ou au premier travail cache la file de prise en charge. Démarrez le délai de livraison à la demande et le temps de cycle à l'engagement, et publiez les deux.
- **Comparer les équipes selon le temps de cycle.** Des travaux, des états et des définitions différents rendent les classements dénués de sens et invitent au détournement. Comparez une équipe à son propre historique, et comparez les services seulement après alignement des définitions.
- **Ignorer les éléments ouverts.** Le temps de cycle ne compte que le travail terminé : un élément bloqué est donc invisible jusqu'à sa fin. Suivez l'âge des éléments encore en cours (voir le sujet 2.1, Mesures de flux).
- **Changer les définitions en silence.** La tendance enregistre alors un changement de l'instrument. Consignez chaque changement et marquez-le sur le graphique.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Les gens citent les durées de mémoire ; chacun démarre l'horloge différemment | Certaines équipes définissent le temps de cycle sur leur tableau ; les équipes ITSM citent le temps SLA | Une définition écrite du délai de livraison, du temps de cycle et des suspensions utilisée par toutes les équipes | Changements de définition consignés et historique restitué à partir des événements bruts | Définitions alignées avec fournisseurs et clients et révisées quand elles cessent d'éclairer des décisions |
| Rapport et analyse | Moyennes sur une diapositive, assemblées à la main | Certaines équipes montrent des médianes ou un graphique de l'outil | Médiane et percentile élevé, avec nuage de points, segmentés par type de travail | Distributions suivies dans le temps et revues selon une cadence ; prévisions tirées d'elles | Données de flux entre équipes et fournisseurs combinées pour prévoir des engagements de bout en bout |
| Attente et efficacité du flux | L'attente n'est pas distinguée du travail | Des colonnes bloquées existent sur certains tableaux | Chaque statut classé actif ou en attente ; efficacité du flux calculée sur tous les éléments terminés | Plus grandes files examinées et financées pour amélioration ; motifs de suspension audités | Files, approbations et transmissions repensées conjointement avec les équipes et fournisseurs qui les créent |
| Usage dans les décisions | Chiffres montrés lors d'une revue trimestrielle et sans suite | Les équipes discutent du temps de cycle en rétrospective | Objectifs de service fixés à partir de la distribution observée | Objectifs appariés avec des garde-fous et revus pour détecter le détournement | Les clients voient des fourchettes honnêtes, et les idées d'amélioration viennent de tous ceux qui touchent au travail |

## Liste de vérification

- [ ] Chaque mesure de temps a un événement de début, un événement de fin et une liste d'exclusions écrits dans le registre des métriques.
- [ ] Le délai de livraison et le temps de cycle sont tous deux rapportés, et chaque graphique est étiqueté avec celui qu'il montre.
- [ ] « Terminé » est défini pour chaque type de travail et convenu avec le demandeur.
- [ ] Les résultats sont rapportés comme la médiane et un percentile élevé, et les éléments sont tracés.
- [ ] Les données sont segmentées par type de travail et, le cas échéant, par classe de service.
- [ ] Chaque statut est classé actif, en attente ou terminé, et la classification est revue chaque trimestre.
- [ ] Les statuts de suspension, qui peut les employer et leurs motifs sont écrits et audités sur un échantillon.
- [ ] Le temps écoulé et le temps SLA sont montrés côte à côte, avec la part de suspension.
- [ ] L'efficacité du flux est employée comme diagnostic et ne figure pas sur un tableau de score.
- [ ] Les changements de définition sont consignés et marqués sur les graphiques.
- [ ] L'âge des éléments ouverts est revu avec les temps de cycle terminés.

## Prompts d'IA

**Rédigez des règles d'horloge pour un type de travail.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to cancelled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Classez les statuts comme actifs ou en attente.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Analysez un ensemble de temps de cycle.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Passez en revue le risque de détournement d'une métrique.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure de temps et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une mesure de temps modifiée indique ses horloges, ses exclusions et son vecteur de détournement.

## Idées clés

- Le délai de livraison est l'attente du client et le temps de cycle est l'attente de l'équipe : gardez donc les deux et examinez l'écart entre eux.
- Écrivez les règles de début, de fin et de suspension de chaque horloge, et traitez un changement de définition comme un événement.
- Rapportez la médiane et un percentile élevé, tracez les éléments et segmentez par type de travail avant de comparer quoi que ce soit.
- L'efficacité du flux est généralement faible parce que l'essentiel du temps écoulé est de l'attente : servez-vous-en donc pour localiser les files et évitez d'en faire un objectif.
- Montrez la part de suspension à côté de tout résultat de niveau de service qui exclut le temps suspendu.
- Réduisez le travail en cours et supprimez les transmissions pour raccourcir le temps, car dire aux gens de se dépêcher ne change pas les files.

## Références et lectures complémentaires

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
