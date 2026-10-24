# Travail opérationnel et travail non planifié

**Une équipe qui construit et exploite un service dispose d'un seul réservoir de capacité : rendez donc visible la répartition entre changement planifié et travail opérationnel, protégez-la par des règles explicites pour les interruptions et les passe-droits, et lisez la part de travail non planifié comme un signal sur le système plutôt que comme un verdict sur les personnes.**

## Vue d'ensemble et motivation

Toute équipe qui construit et exploite un service partage son temps entre deux grandes sortes de travail. Le **travail de changement** fait avancer le service : nouvelles fonctionnalités, améliorations planifiées, migrations et suppression des faiblesses connues. Le **travail d'exploitation**, aussi appelé travail opérationnel, maintient le service en marche : répondre aux incidents et aux demandes, réagir aux alertes, appliquer les correctifs courants, rétablir les accès et traiter les tâches manuelles que le service exige encore. Les deux sont légitimes, et un service qui a des utilisateurs a besoin des deux. Les ennuis commencent quand personne ne peut dire combien de chacun l'équipe fait, car le plan suppose alors discrètement une capacité que le travail d'exploitation a déjà consommée.

Le travail peut aussi se trier selon qu'il était prévu ou non. Le **travail planifié** a été choisi avant le début de la période, par exemple lors d'une planification ou d'un engagement trimestriel. Le **travail non planifié** arrive pendant la période et exige une attention qui n'était pas budgétée : un incident de production, une demande urgente d'une partie prenante senior, un correctif de sécurité ou un défaut qui bloque un client. Les deux axes se recoupent sans être identiques. La plupart du travail d'exploitation est non planifié quant à son moment même quand son volume est prévisible, et certains travaux d'exploitation, comme un renouvellement de certificat programmé, sont entièrement planifiés. Le travail de changement peut aussi être non planifié, comme lorsqu'une réglementation change et qu'une équipe doit réagir en quelques semaines.

Les visions agile et ITIL décrivent la même pression avec des mots différents. Dans une planification par périodes fixes, un engagement est une prévision de capacité, et le travail qui arrive en cours de période déplace quelque chose ou est reporté. Sur un tableau de flux, le travail en cours a des limites explicites et il y a souvent une voie dédiée aux éléments urgents, et la question est de savoir combien d'éléments urgents le système peut absorber avant que le flux ne s'effondre (voir le sujet 2.1, Mesures de flux). Dans ITIL 4 (la version publiée en 2019), la gestion des incidents, la gestion des demandes de service et la gestion des problèmes décrivent comment le travail d'exploitation est reçu, priorisé et résolu, tandis que la maîtrise des changements et la pratique de développement et de gestion des logiciels gouvernent le changement planifié. Les pratiques décrivent des flux de travail. Elles disent rarement comment une même équipe doit répartir ses heures entre elles, et c'est dans cet écart que ce sujet travaille.

Plusieurs termes reviennent ici. Une **interruption** est toute demande qui arrive hors du cycle de planification et détourne une personne de l'élément sur lequel elle travaille. La **charge d'interruptions** est l'effet total de ces demandes sur une équipe pendant une période, mesuré en nombre, en heures ou en part de capacité consommée. Un **passe-droit** (expedite) est un élément de travail autorisé à doubler la file, généralement parce que son [coût du retard](https://en.wikipedia.org/wiki/Cost_of_delay) est élevé et immédiat. Une **voie accélérée** est une règle, souvent une ligne dédiée sur un tableau, qui limite le nombre de passe-droits pouvant être en cours en même temps. La **répartition de la capacité** est la division explicite de la capacité d'une équipe entre sortes de travail, par exemple une part énoncée pour le changement planifié, une part pour le travail d'exploitation et une part pour l'amélioration.

Le travail non planifié est la plus grande taxe cachée sur la livraison planifiée : chaque interruption coûte son propre temps plus le temps de récupération perdu au [changement de tâche](https://en.wikipedia.org/wiki/Task_switching_(psychology)), et la recherche sur le travail interrompu (Mark, Gudith et Klocke, 2008) a constaté que les gens compensent en travaillant plus vite au prix de davantage de stress. Une remarque sur la direction. Une forte part de travail non planifié n'est pas un défaut en soi. Un service récemment lancé, une panne en cours ou un événement réglementé peuvent légitimement consommer l'essentiel de la capacité d'une équipe pendant un temps. Le but n'est ni de ramener le travail non planifié à zéro ni de le cacher, mais de le voir, de le chiffrer et de décider délibérément combien l'équipe en absorbera et combien l'organisation doit corriger en amont. Le travail non planifié qui revient pour la même cause est le plus utile à trouver, car il pointe un enregistrement de problème, une lacune de supervision ou un élément de [dette technique](https://en.wikipedia.org/wiki/Technical_debt) qu'il est moins coûteux de supprimer que de continuer à payer.

## Principes clés

- **La capacité est finie et partagée.** Chaque heure donnée au travail d'exploitation ou à un passe-droit est une heure non donnée au changement planifié : rendez donc la répartition explicite et visible plutôt que de la laisser émerger de celui qui crie le plus fort.
- **Classez le travail à son arrivée, pas après coup.** Étiquetez chaque élément comme planifié ou non planifié et comme changement ou exploitation au moment où il entre dans le système, car la reclassification en fin de période est un souvenir et non une observation.
- **Les interruptions ont un prix qui dépasse leur durée.** Comptez le coût de récupération du changement de tâche autant que les minutes passées, et préférez les conceptions qui regroupent les interruptions ou les routent vers une personne nommée.
- **Accélérez par règle, pas par rang.** Une voie accélérée avec une limite et un test d'entrée protège le flux ; l'accélération illimitée par ancienneté le supprime.
- **Réservez de la capacité à dessein.** Un tampon planifié est plus honnête qu'un plan qui n'en suppose aucun.
- **Traitez le travail non planifié répété comme un défaut du système.** Une répétition hebdomadaire est candidate à un enregistrement de problème ou à une automatisation.
- **Mesurez des équipes et des services, jamais des individus.** La personne qui répond à la plupart des interruptions est généralement celle qui en sait le plus ; la classer punit la mauvaise chose (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Définitions des métriques

Sept métriques décrivent comment la capacité est divisée et perturbée. Chacune demande une règle de classification écrite, car toutes dépendent de la façon dont les éléments sont étiquetés. La période dans chaque formule est la même fenêtre fixe pour l'équipe, comme une semaine, un mois ou un trimestre.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ratio de travail non planifié | Part des éléments de travail terminés, en nombre, qui n'étaient pas au plan au début de la période | éléments terminés dans la période qui sont entrés sur le tableau ou dans le backlog après le début de la période / tous les éléments terminés dans la période ; l'horloge démarre à l'événement de planification et s'arrête à la fin de la période ; les éléments annulés et ceux encore ouverts sont exclus | pourcentage | Gestionnaire d'anomalies avec heure de création des éléments et instantané de planification | Gestion des incidents ; gestion des demandes de service | Changement de périmètre ; types d'éléments de travail | Mensuelle |
| Respect de la répartition de la capacité | Degré de proximité entre l'effort réel et la répartition énoncée entre travail de changement, d'exploitation et d'amélioration | pour chaque catégorie, différence absolue entre la part réelle et la part convenue, sommée puis divisée par deux ; la part réelle est les éléments terminés (ou l'effort consigné là où l'équipe l'enregistre) dans cette catégorie / tous les éléments terminés ; les éléments sans catégorie sont rapportés à part et non écartés | points de pourcentage | Champ de type de travail du gestionnaire, et relevés de temps là où ils existent | Amélioration continue ; gestion de la capacité et de la performance | Répartition ou planification de la capacité | Mensuelle |
| Taux d'interruptions | Fréquence à laquelle des demandes hors plan atteignent l'équipe et les personnes qui font le travail planifié | interruptions reçues par l'équipe dans la période / jours ouvrés de la période, où une interruption est tout ticket, appel, demande par message ou sollicitation consignée dans le canal de réception de l'équipe et non déjà au plan ; les doublons d'une même demande sous-jacente comptent une fois | interruptions par jour ouvré | Journal du canal de réception, file ITSM, système d'alertes et journal d'interruptions de l'équipe | Gestion des incidents ; gestion des demandes de service ; supervision et gestion des événements | Journal d'interruptions ou accord de travail de l'équipe | Hebdomadaire |
| Taux de passe-droits | Part des éléments terminés qui ont utilisé la voie accélérée | éléments terminés dans la période qui sont entrés dans la voie accélérée / tous les éléments terminés dans la période ; l'horloge démarre quand l'élément est marqué passe-droit et s'arrête à l'achèvement ; les éléments rétrogradés hors de la voie avant le début du travail sont comptés à part | pourcentage | Historique des voies du tableau ou du champ de priorité | Gestion des incidents ; maîtrise des changements (changement d'urgence) | Classe de service « passe-droit » | Mensuelle |
| Déplacement du travail planifié | Nombre d'éléments planifiés repoussés ou abandonnés pour faire de la place au travail non planifié | éléments planifiés retirés de la période, reportés ou laissés inachevés avec le motif consigné « déplacé par du travail non planifié » dans la période (décompte) ; les éléments retirés parce que l'objectif a changé sont exclus | nombre d'éléments | Historique des changements du tableau, avec le champ de motif | Maîtrise des changements ; amélioration continue | Protection de l'objectif de livraison ; négociation du périmètre | Mensuelle |
| Part de travail non planifié répété | Part des éléments non planifiés dont la cause correspond à un élément non planifié antérieur dans la fenêtre de rétrospection | éléments non planifiés terminés dans la période qui se rattachent au même enregistrement de problème, à la même règle d'alerte ou au même marqueur de cause qu'un élément antérieur dans la fenêtre de rétrospection (par exemple 90 jours) / tous les éléments non planifiés terminés dans la période ; les éléments sans marqueur de cause sont rapportés comme un décompte non classé distinct | pourcentage | Enregistrements d'incidents et de problèmes de l'ITSM, marqueurs de cause du gestionnaire | Gestion des problèmes ; gestion des erreurs connues | Actions de rétrospective ; marqueurs de défauts récurrents | Mensuelle |
| Fiabilité de l'engagement planifié | Part des éléments que l'équipe avait planifiés pour la période et qu'elle a terminés dans la période | éléments planifiés terminés dans la période / éléments planifiés au début de la période ; les éléments ajoutés après le début sont exclus des deux décomptes | pourcentage | Instantané de planification et historique d'achèvement du gestionnaire | Gestion des niveaux de service ; maîtrise des changements | Fiabilité de la prévision | Mensuelle |

Les mesures de temps de ce sujet, comme l'âge d'un élément accéléré, doivent être montrées en percentiles (par exemple la médiane et le 85e percentile) et non en moyenne, puisqu'un incident long fausse une moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Recommandations

### Rendre la répartition visible

**1. Étiquetez chaque élément avec deux champs à la réception.** Ajoutez un type de travail (changement, exploitation, amélioration) et un indicateur de planification (planifié, non planifié) au formulaire de réception du gestionnaire ou de l'outil ITSM, et rendez les deux obligatoires. Les étiquettes sont peu coûteuses posées à la création et peu fiables reconstituées plus tard. Écrivez la définition de chaque valeur en une phrase dans l'accord de travail de l'équipe, et revoyez-la quand les étiquettes cessent de décrire le travail (voir le sujet 1.5, Sources de données et instrumentation).

**2. Figez un instantané de planification.** « Non planifié » n'a de sens que par rapport à un plan : capturez donc la liste des éléments au début de la période et conservez-la. Comparez le travail terminé à l'instantané, non à l'aspect du tableau en fin de période.

### Répartir la capacité à dessein

**3. Convenez d'une répartition de la capacité et traitez-la comme une hypothèse.** Décidez, en équipe et avec le responsable produit ou le responsable du service, de la part approximative qui va au changement planifié, au travail d'exploitation et à l'amélioration. Partez de ce que les données montrent que l'équipe a réellement fait sur les dernières périodes, puis choisissez une cible qui va dans la direction souhaitée. Revoyez la répartition à chaque cycle de planification ; un pourcentage fixe copié d'une diapositive d'une autre équipe est une conjecture et non une décision.

**4. Réservez un tampon dimensionné d'après votre propre historique.** Servez-vous du registre d'interruptions de l'équipe pour dimensionner un tampon pour le travail non planifié, par exemple en regardant la zone médiane et haute de la part hebdomadaire non planifiée sur les périodes récentes, et ne planifiez que la capacité qui reste. Un tampon régulièrement inutilisé peut rétrécir ; un tampon régulièrement épuisé demande une plus grande part ou la suppression d'une cause. La relation entre charge et retard dans une file (voir la [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law), et le sujet 2.3, Travail en cours et théorie des files d'attente) explique pourquoi un système exploité à pleine utilisation n'a pas de place pour absorber une surprise.

### Concevoir le chemin des interruptions

**5. Routez les interruptions vers un rôle nommé.** Faites tourner une personne, souvent appelée gestionnaire d'interruptions, ingénieur de permanence ou bouclier, pour recevoir les demandes entrantes pendant un jour ou une semaine, tandis que les autres protègent leur concentration. Le rôle a un périmètre écrit, une note de passation et une durée limitée pour que la charge soit partagée équitablement. Les équipes en rotation doivent la relier à la pratique d'astreinte (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

**6. Faites le triage à la porte.** Les interruptions diffèrent énormément en urgence. Appliquez à la réception une courte règle de [triage](https://en.wikipedia.org/wiki/Triage) qui pose trois questions : un service est-il en panne ou un utilisateur bloqué, y a-t-il une date qui ne peut pas bouger, et la demande peut-elle attendre le prochain événement de planification ? Les éléments qui échouent aux trois vont au backlog et sont planifiés comme n'importe quel autre travail. En termes ITIL 4, c'est l'étape de priorisation de la gestion des incidents et de la gestion des demandes de service appliquée à la réception propre de l'équipe.

### Gouverner la voie accélérée

**7. Donnez à la voie accélérée une limite et un test d'entrée.** La voie contient au plus un ou deux éléments à la fois, et un élément n'y entre que si son coût du retard est élevé et immédiat et que le demandeur peut l'énoncer. Un test énoncé permet à l'équipe de dire non à la demande qui n'est que bruyante. Si la voie est toujours pleine, elle a cessé d'être une exception, et l'équipe doit revoir le test d'entrée et les causes en amont. La voie est une [classe de service](https://en.wikipedia.org/wiki/Class_of_service) avec ses propres règles ; voir la littérature Kanban pour l'idée sous-jacente (Anderson, 2010).

### Supprimer les sources

**8. Reliez les éléments non planifiés à une cause et revoyez les répétitions.** Ajoutez un marqueur de cause ou un lien vers un enregistrement de problème à chaque élément non planifié. Une fois par mois, listez les causes qui reviennent et envoyez les principales à la gestion des problèmes, au backlog comme éléments de dette technique ou à des améliorations de supervision (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.6, Dette technique et erreurs connues). La part de travail non planifié répété vous dit si ces corrections portent. Le schéma est semblable à l'élimination des tâches répétitives décrite dans le livre SRE de Google, où le travail opérationnel manuel répétitif est traité comme quelque chose à supprimer par l'ingénierie ; le livre suggère de le maintenir sous une certaine part du temps d'un ingénieur (Beyer et al., 2016), une indication que chaque équipe doit éprouver sur ses propres données au lieu de l'adopter comme objectif.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Ratio de travail non planifié | Ajouter tardivement des éléments à l'instantané de planification pour qu'ils comptent comme planifiés ; laisser le travail urgent non suivi pour qu'il ne compte jamais ; étiqueter des éléments planifiés comme non planifiés pour excuser un plan raté | Instantané de planification figé et horodaté ; décompte non classé ; échantillon d'éléments clos lu chaque trimestre pour comparer l'étiquette avec ce qui s'est passé |
| Respect de la répartition de la capacité | Déplacer des éléments entre catégories pour coller à la répartition convenue ; scinder un élément en plusieurs pour déplacer les parts ; choisir une répartition que l'équipe atteint déjà | Définitions de catégories fixes écrites dans l'accord de travail ; échantillon de descriptions d'éléments face à leur catégorie ; fiabilité de l'engagement planifié |
| Taux d'interruptions | Transformer les interruptions en services rendus en silence qui n'atteignent jamais le journal ; fusionner plusieurs demandes en une seule entrée ; décourager les gens de demander | Comparer le journal avec le trafic du canal de réception et l'historique des alertes ; demander à l'équipe en rétrospective si le journal correspond à son expérience |
| Taux de passe-droits | Garder le travail urgent hors de la voie pour paraître discipliné, ou tout y mettre pour aller vite ; redéfinir « passe-droit » pour signifier « important » | Limite de voie avec test d'entrée ; part des passe-droits ayant satisfait au test à la revue ; déplacement du travail planifié |
| Déplacement du travail planifié | Consigner le déplacement comme un changement de périmètre voulu ; laisser des éléments planifiés échouer en silence sans motif ; éviter les éléments planifiés susceptibles d'être déplacés | Champ de motif obligatoire sur chaque élément retiré ou inachevé ; fiabilité de l'engagement planifié ; revue des motifs en rétrospective |
| Part de travail non planifié répété | Utiliser un marqueur de cause grossier pour que les répétitions soient cachées, ou un marqueur fin pour que rien ne se répète ; clore l'enregistrement de problème pour supprimer le lien | Taxonomie des marqueurs de cause revue chaque trimestre ; décompte non classé ; contrôle de récurrence après la clôture d'un enregistrement de problème |
| Fiabilité de l'engagement planifié | Planifier petit pour tout finir ; gonfler les estimations ; compter un élément partiel comme fait ; abandonner les éléments difficiles avant le début de la période | Taille et valeur des éléments planifiés comparées dans le temps ; contrôle de résultat sur l'objectif de livraison ; ratio de travail non planifié, pour qu'une valeur élevée ne soit pas lue comme une bonne santé quand le plan était timide |

Une lecture saine est un ratio de travail non planifié que l'équipe peut expliquer, une voie accélérée rarement pleine et une part de répétitions qui baisse après les corrections. Une lecture suspectement parfaite est ce qu'il faut investiguer. Une équipe qui rapporte zéro travail non planifié a soit un service très calme, soit un service non suivi, et le moyen de les distinguer est de comparer le journal avec l'historique des alertes et des tickets.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Répartition de capacité fixe (pourcentages énoncés) | Facile à expliquer ; protège le travail d'amélioration de la famine | Ignore la variation réelle ; peut être détournée par réétiquetage |
| Tampon réservé dimensionné d'après l'historique | Ajuste le plan à la charge réelle d'interruptions | Demande plusieurs périodes de données fiables ; peut cacher une cause chronique |
| Gestionnaire d'interruptions en rotation | Protège la concentration de la plupart de l'équipe ; répartit la charge équitablement | Le travail planifié du gestionnaire cale ; le rôle demande passation et soutien |
| Limite stricte de passe-droits | Garde le flux prévisible ; force à énoncer un coût du retard | Les demandeurs peuvent la contourner ; une vraie urgence peut sembler bloquée |
| Compter les éléments plutôt que l'effort | Simple et difficile à gonfler | Traite pareillement des tailles très différentes |

La position pratique pour la plupart des équipes est de compter d'abord les éléments, d'ajouter l'effort seulement là où les décomptes d'éléments trompent, de protéger un petit tampon et une petite voie accélérée, et d'utiliser le marqueur de cause pour s'attaquer à la plus grande répétition.

## Questions à discuter avec votre équipe

**1. Quelle part du travail terminé de la dernière période était non planifiée, et comment le savons-nous ?**
Ouvrez l'instantané de planification à côté de la liste des éléments terminés et comptez ceux qui n'étaient pas au plan. Comparez le résultat avec l'impression de chacun sur la période ; les deux diffèrent souvent. L'animateur doit demander combien d'éléments n'ont jamais été consignés, car la réponse honnête façonne tous les autres chiffres.

**2. Quelles sont les trois sources d'interruptions qui nous coûtent le plus, et qui pourrait les supprimer ?**
Listez les sources par nombre et par effort absorbé, comme les alertes, les demandes répétées, les escalades et les sollicitations ponctuelles des parties prenantes. Marquez chacune comme supprimable, routable ou inévitable. L'animateur doit insister pour un responsable nommé hors de l'équipe pour toute source que l'équipe ne peut pas corriger elle-même.

**3. Quelle répartition entre travail de changement, d'exploitation et d'amélioration voulons-nous réellement ?**
Comparez la répartition que montrent les données avec celle que les gens croient avoir et avec celle qu'attend la direction. Discutez des sortes de travail que l'équipe abandonnerait en premier sous pression, puisque cela révèle les vraies priorités. Choisissez une cible pour la prochaine période et un moyen de la vérifier.

**4. Quelle est notre règle pour la voie accélérée, et qui décide ?**
Lisez la règle actuelle à voix haute, ou notez qu'il n'en existe pas. Demandez les trois derniers passe-droits et testez chacun face à un coût du retard énoncé. Discutez de ce que l'équipe fait quand une personne senior demande un passe-droit qui échoue au test, et de qui soutient la décision.

**5. Quand nous sommes interrompus, que nous en coûte-t-il après la fin de l'interruption ?**
Demandez aux gens de décrire le temps qu'il leur faut pour retrouver leur place dans une tâche après une interruption typique.

**6. Quel élément non planifié est revenu plus d'une fois, et qu'est-ce qui l'arrêterait ?**
Prenez le dernier trimestre d'éléments non planifiés et cherchez les répétitions par cause. Choisissez celle dont l'effort total est le plus élevé et retracez pourquoi elle revient : une alerte manquante, un défaut non corrigé, une étape manuelle ou un problème de fournisseur. Décidez si elle va à un enregistrement de problème, au backlog ou à une conversation avec un fournisseur.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison ressentent le travail non planifié comme des plans brisés et des prévisions qui glissent. Elles profitent de l'étiquetage à la réception, d'un instantané de planification figé et d'une prévision construite avec un tampon fondé sur l'historique (voir le sujet 2.5, Métriques de prévision et de planification de la livraison). Le registre des déplacements montre aux responsables produit ce que chaque demande tardive a coûté.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent l'essentiel du travail d'exploitation. Elles ont besoin d'un gestionnaire d'interruptions nommé, d'une règle de triage et d'une route des demandes et alertes récurrentes vers des corrections (voir le sujet 5.5, Métriques de supervision et de qualité des alertes). La part de répétitions est leur meilleur argument pour investir dans la gestion des problèmes.

### Direction et gouvernance

Les dirigeants fixent la répartition réelle par les demandes qu'ils font et les échéances qu'ils acceptent. Ils doivent demander le ratio et ses causes, financer le travail d'amélioration qui supprime les interruptions répétées et éviter de faire des passe-droits la façon normale d'obtenir les choses.

### Clients et utilisateurs

Les clients voient le travail non planifié sous forme de pannes, de réponses lentes et de fonctionnalités retardées. Ils y gagnent quand l'équipe a de la marge pour corriger les causes, et ils ont besoin d'une voie équitable pour faire valoir l'urgence. Les accords de niveau de service (voir [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement)) doivent refléter la charge d'interruptions que porte l'équipe (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple de gestion des services

Le service informatique d'un assureur santé régional exploite une plateforme de gestion des remboursements avec une équipe produit de sept personnes et un centre de services partagé. L'équipe construit de nouvelles fonctionnalités et assure aussi le support de la plateforme en production. Tous les chiffres de cet exemple sont illustratifs.

Pendant six semaines, la fiabilité de l'engagement planifié de l'équipe est tombée d'environ 85 % à 55 %, et le responsable produit a commencé à remettre en question les estimations de l'équipe. Le chef d'équipe tire l'historique du gestionnaire. En utilisant les instantanés de planification figés, le ratio de travail non planifié est de 41 % en nombre dans la dernière période, contre un souvenir de l'équipe de « peut-être un cinquième ». Le décompte non classé est de 9 % : le ratio est donc raisonnablement fiable.

La ventilation des éléments non planifiés par cause montre que 14 sur 24 relevaient du travail d'exploitation, et que 9 d'entre eux remontent à une seule tâche par lots de soumission des demandes de remboursement qui échoue après un changement de format de données chez un partenaire et qui est relancée à la main chaque fois. La part de travail non planifié répété est de 58 %. Le taux d'interruptions est de 6 par jour ouvré, et 4 d'entre elles atteignent les ingénieurs qui font le travail planifié, parce que le centre de services escalade directement vers la première personne qui répond. La voie accélérée contient deux éléments la plupart des jours, et le taux de passe-droits est de 23 %. Le déplacement du travail planifié est de 7 éléments dans la période, dont 5 portent le motif « déplacé par du travail non planifié ».

L'équipe prend quatre décisions avec le responsable produit et le responsable du service. Premièrement, un ingénieur à la fois devient gestionnaire d'interruptions avec un périmètre écrit et une note de passation, et les escalades vont à cette seule personne. Deuxièmement, la voie accélérée est limitée à un élément, avec un test d'entrée exigeant un coût du retard énoncé, et chaque passe-droit consigne l'élément qu'il a déplacé. Troisièmement, la défaillance de la tâche par lots est ouverte comme enregistrement de problème, avec une correction et une conversation avec le partenaire placées dans le backlog comme travail d'amélioration, utilisant 15 % de la capacité, la part que l'équipe choisit comme première répartition à l'amélioration. Quatrièmement, l'équipe planifie la prochaine période de travail avec un tampon dimensionné sur la zone haute de sa part récente de travail non planifié, et non avec une charge complète.

Six semaines plus tard, le ratio de travail non planifié est de 27 %, la part de répétitions de 22 %, le taux d'interruptions atteignant les personnes sur le travail planifié de 1,5 par jour, et la fiabilité de l'engagement planifié d'environ 78 % (tout est illustratif). L'équipe n'a pas retrouvé ses 85 % antérieurs, et le dit.

Le risque de détournement que l'équipe repère : dans la deuxième période sous le nouvel arrangement, le taux d'interruptions chute nettement, et le chef d'équipe remarque que les gens écrivent directement au gestionnaire, de sorte que les services rendus n'atteignent jamais le journal. La comparaison du journal avec le canal de réception et l'historique des alertes montre que le volume réel était inchangé. L'équipe convient que le gestionnaire redirige les messages directs vers le canal de réception. La faute tenait à la conception du chemin, pas à une personne.

## Agilité, IA, automatisation et analytique

### Agilité

Une équipe qui construit et exploite un service a un seul réservoir de capacité, et un rythme soutenable demande des limites honnêtes à l'interruption. Une étape pratique est de convenir d'une répartition de capacité avec les parties prenantes et de revoir la part non planifiée lors de la conversation d'amélioration régulière. La précaution est qu'un objectif sur la part non planifiée peut pousser les équipes à étiqueter le travail d'exploitation comme planifié.

### IA

L'IA peut déplacer du travail entre planifié et non planifié, par exemple en automatisant des corrections courantes tout en ajoutant des tâches de revue et de supervision. Suivez la part non planifiée et la part de travail non planifié répété avant et après les changements d'IA, et incluez le temps passé à corriger la production de l'IA comme une catégorie à part. La précaution est que le travail de correction caché peut engloutir la capacité que l'IA devait libérer.

### Automatisation

Capturez automatiquement le type de travail depuis le gestionnaire avec un petit ensemble convenu de catégories. Mesurez l'automatisation par le travail non planifié qu'elle supprime et par les nouveaux incidents qu'elle cause. La précaution est qu'une remédiation automatisée qui redémarre des services sans consigner la cause fait paraître le travail non planifié répété comme du travail neuf.

### Analytique

Montrez la part de travail non planifié dans le temps et les causes des éléments répétés. La décision éclairée est combien de capacité réserver et quelles sources d'interruption supprimer. La précaution est que les catégories sont choisies par des personnes : auditez donc un échantillon d'éléments pour vérifier l'honnêteté de la classification.

## Éclairage sectoriel

**Startup.** Presque tout le travail semble urgent et les mêmes quelques personnes font le changement et l'exploitation. Gardez la classification à deux étiquettes et fixez une limite explicite aux passe-droits. Le ratio non planifié est la preuve pour dire « nous pouvons faire la feuille de route ou la charge de support, pas les deux ».

**Petite entreprise.** Un administrateur ou une petite équipe traite souvent toutes les demandes. Utilisez les types de tickets de l'outil comme classification, consignez les interruptions pendant un mois pour apprendre le schéma, et réservez un bloc quotidien fixe pour le travail planifié. Demandez aux fournisseurs leurs rapports de volume et de causes répétées.

**Grande entreprise.** Le travail non planifié d'une équipe est souvent du travail planifié pour une autre. Convenez de définitions partagées, rapportez par équipe et par service, et financez les corrections au niveau où vit la cause (voir le sujet 9.3, Métriques de collaboration et de transmission).

**Gouvernement et secteur public.** La capacité peut être fixée par des plafonds d'effectifs, et le travail d'exploitation peut être imposé par la loi ou des constats d'audit. Intégrez-les à la répartition, documentez les règles de classification et conservez une piste d'audit (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est une livraison prévisible : un plan qui ignore la charge d'interruptions est manqué à répétition, et un travail non planifié visible donne à l'équipe une voix plus forte pour demander du temps afin de supprimer les causes.

Le coût de recueil de ces mesures est modeste quand les étiquettes et l'instantané de planification font partie du flux de travail normal. Les principaux coûts sont le temps de convenir des définitions, la discipline d'étiqueter à la réception, un peu d'outillage pour joindre les données du gestionnaire et de l'ITSM (voir le sujet 1.5, Sources de données et instrumentation) et les heures du gestionnaire d'interruptions, dont le travail planifié ralentit. Ajouter des relevés de temps à l'heure coûte considérablement plus et est souvent mal vécu : ne les ajoutez que si les décomptes d'éléments se révèlent trompeurs. Le coût total de possession est dominé par le temps des personnes, comptez-le donc.

Le rendement se voit dans des schémas que l'équipe peut mesurer elle-même plutôt que dans un chiffre supposé. Cherchez une part de travail non planifié répété qui baisse après les corrections de problèmes, une hausse de la fiabilité de l'engagement planifié, moins d'éléments planifiés déplacés et moins d'interruptions qui atteignent les personnes sur du travail planifié. Là où les heures sont connues, l'effort récupéré en supprimant une cause récurrente peut être chiffré au coût horaire propre de l'équipe et mis en regard de l'effort de la correction (voir le sujet 7.5, Coût du service et économie unitaire, et le sujet 7.7, Retour sur investissement et dossier d'affaires). N'empruntez pas de pourcentages sectoriels pour le travail non planifié ; aucun chiffre d'une autre organisation ne remplace votre propre historique.

## Anti-modèles et pièges

- **Traiter tout travail non planifié comme un échec.** Une partie est le service qui fait son travail, et un objectif de zéro pousse le travail hors du journal. Demandez plutôt quelle part est attendue, quelle part est évitable, et fixez un tampon pour la première.
- **La culture du héros.** La personne qui sauve chaque urgence devient indispensable, épuisée et point de défaillance unique. Partagez plutôt le rôle d'interruption par rotation et récompensez la suppression des causes.
- **Tout est un passe-droit.** Une voie toujours pleine n'est qu'une seconde file. Fixez plutôt une limite, exigez un coût du retard énoncé et revoyez le test d'entrée chaque mois.
- **Planifier à pleine utilisation.** Un plan sans mou garantit que chaque surprise déplace quelque chose. Dimensionnez plutôt un tampon d'après votre historique d'interruptions et planifiez la capacité qui reste.
- **Classer après coup.** Les étiquettes ajoutées en fin de période reflètent la mémoire et l'humeur. Exigez plutôt les étiquettes à la réception et figez l'instantané de planification.
- **Absorber la demande en silence.** Les services rendus qui n'atteignent jamais le journal rendent la charge invisible et la planification fausse. Faites plutôt d'un seul chemin de réception la règle et redirigez vers lui les sollicitations par canaux parallèles.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Classification et visibilité | Le travail n'est pas étiqueté ; le travail non planifié se ressent, il ne se compte pas | Certaines équipes étiquettent le travail planifié et non planifié avec leurs propres mots | Une définition écrite des types de travail et de l'indicateur de planification, appliquée à la réception avec un instantané de planification | Ratio non planifié et décompte non classé suivis dans le temps et revus à chaque période | Définitions partagées entre équipes et fournisseurs, et révisées quand elles cessent d'éclairer les décisions |
| Répartition de la capacité | La capacité est supposée entièrement disponible pour le travail planifié | Un tampon approximatif est appliqué par certaines équipes | Une répartition convenue entre changement, exploitation et amélioration, avec un tampon dimensionné d'après l'historique | Respect revu et répartition ajustée avec les responsables produit et service | Répartition négociée entre les équipes qui partagent plateformes, services et personnes |
| Gestion des interruptions et des passe-droits | N'importe qui interrompt n'importe qui ; l'urgence se fixe par ancienneté | Une habitude de personne de permanence ou de ligne urgente existe dans certaines équipes | Un rôle d'interruption nommé, une règle de triage et une voie accélérée avec limite et test d'entrée | Taux de passe-droits, déplacement et taux d'interruptions revus face à un garde-fou | Routage des interruptions et règles de passe-droits coordonnés entre équipes, avec astreinte et chemins d'escalade partagés |
| Suppression des causes | Les mêmes problèmes reviennent et sont corrigés par des exploits | Certaines répétitions sont remarquées et discutées en rétrospective | Les éléments non planifiés portent un marqueur de cause et les principales répétitions vont à la gestion des problèmes | Part de répétitions suivie et corrections financées comme travail d'amélioration planifié | Causes retracées entre équipes, fournisseurs et clients, et amélioration devenue routine |

## Liste de vérification

- [ ] Chaque élément de travail porte un type de travail (changement, exploitation, amélioration) et un indicateur de planification, posés à la réception.
- [ ] Les définitions de planifié, non planifié, changement et exploitation sont écrites dans l'accord de travail de l'équipe.
- [ ] Un instantané de planification est figé au début de chaque période et conservé.
- [ ] Le ratio de travail non planifié est rapporté comme une tendance, à côté du décompte non classé.
- [ ] L'équipe et ses responsables ont convenu d'une répartition de la capacité et l'ont revue au dernier trimestre.
- [ ] Un seul chemin de réception existe, et les sollicitations par canaux parallèles y sont redirigées.
- [ ] Un rôle d'interruption au périmètre écrit tourne dans l'équipe.
- [ ] La voie accélérée a une limite, un test d'entrée et un registre de ce que chaque passe-droit a déplacé.
- [ ] Les éléments non planifiés portent un marqueur de cause ou un lien vers un enregistrement de problème, et les répétitions sont revues chaque mois.
- [ ] Les mesures sont rapportées au niveau de l'équipe et du service, et jamais utilisées pour classer des individus.

## Prompts d'IA

**Concevez une classification du travail à la réception.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Analysez un journal d'interruptions pour y trouver des schémas.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Rédigez une politique de voie accélérée.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet détient une métrique voisine, comme le volume d'incidents ou les tâches répétitives, et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version modifiée de ce sujet garde en phase ses horloges, ses règles de classification et son tableau de détournement.

## Idées clés

- Le travail planifié et non planifié, et le travail de changement et d'exploitation, partagent un seul réservoir de capacité : rendez donc la répartition visible et convenez-en délibérément.
- Étiquetez le travail à la réception et figez un instantané de planification, puisque « non planifié » ne signifie quelque chose que face à un plan consigné.
- Les interruptions coûtent du temps de récupération autant que des minutes : routez-les donc vers un rôle nommé et faites le triage à la porte.
- Une voie accélérée a besoin d'une limite, d'un test d'entrée et d'un registre de ce que chaque passe-droit a déplacé.
- Le travail non planifié répété est le signal le plus fort pour la gestion des problèmes et le travail d'amélioration, et la part de répétitions montre si les corrections portent.
- Rapportez au niveau de l'équipe et du service, comparez une équipe à son propre historique et ne classez jamais des individus.

## Références et lectures complémentaires

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
