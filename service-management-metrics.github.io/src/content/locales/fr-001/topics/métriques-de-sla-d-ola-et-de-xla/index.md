# Métriques de SLA, d'OLA et de XLA

**Un accord de niveau de service dit à un client ce qui a été promis, un accord de niveau opérationnel dit aux équipes internes ce qu'elles se doivent mutuellement, et un accord de niveau d'expérience dit si les personnes qui utilisent le service y gagnent réellement : vous avez donc besoin des trois, et vous devez les rapporter honnêtement plutôt que comme un mur de vert.**

## Vue d'ensemble et motivation

Un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement documenté entre un fournisseur de services et un client sur ce que le service livrera : ses heures, sa disponibilité, la rapidité avec laquelle le fournisseur répond aux incidents et les résout, et la rapidité avec laquelle il traite les demandes. Dans ITIL 4 (l'édition 2019 du cadre publié par son détenteur, aujourd'hui AXELOS sous PeopleCert), la pratique de [gestion des niveaux de service](https://en.wikipedia.org/wiki/ITIL) définit ces cibles, les surveille et en rend compte. Un [accord de niveau opérationnel (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) est la contrepartie interne : un accord entre équipes d'une même organisation, par exemple entre le centre de services et l'équipe réseau, sur ce que chacune fera et à quelle vitesse pour que le SLA tourné vers le client puisse être tenu. Un contrat de soutien (underpinning contract) joue le même rôle pour un fournisseur externe (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

Un accord de niveau d'expérience (XLA) est le plus récent des trois. Il consigne un résultat convenu en termes de la façon dont les gens vivent le service, comme la facilité avec laquelle ils ont accompli leur travail, ce qu'ils ont ressenti de l'interaction et si le service les a aidés à atteindre leur but. L'idée a grandi dans la pratique de la gestion des services parce qu'un SLA peut être tenu pendant que les utilisateurs sont mécontents. Ce sujet détient les trois accords et leur rapport. L'approfondissement sur la façon de mesurer l'expérience relève du sujet 6.2, Accords de niveau d'expérience, et les contreparties d'ingénierie des cibles relèvent du sujet 5.2, SLI, SLO et budgets d'erreur.

Trois concepts agiles et de fiabilité se placent à côté de ces accords. Un [indicateur de niveau de service (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) est une propriété mesurée d'un service, comme la part des requêtes servies avec succès. Un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) est la cible interne d'un SLI, généralement plus stricte que tout ce qui est promis à un client. La pratique d'[ingénierie de fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) traite le SLO, et le budget d'erreur qui en découle, comme un outil de décision partagé pour le produit et l'exploitation. Le SLA est le contrat ; le SLO est la visée d'ingénierie ; le SLI est la mesure. Garder les trois distincts évite une confusion courante où une clause de pénalité contractuelle sert à piloter les décisions d'ingénierie quotidiennes.

La famille a un échec bien connu appelé rapport pastèque (watermelon reporting) : un rapport vert à l'extérieur et rouge à l'intérieur. Chaque ligne de SLA apparaît comme tenue, et pourtant les clients sont frustrés, parce que les mesures ont été choisies pour ce que le fournisseur pouvait atteindre de façon fiable plutôt que pour ce qui compte pour le client, ou parce que les moyennes cachent la mauvaise queue, ou parce que l'horloge a été suspendue pendant le pire de l'attente. Le remède est en partie technique (percentiles, horloges honnêtes, indicateurs centrés sur l'utilisateur) et en partie social (accords négociés comme une conversation, revus selon une cadence et lus comme une question sur le service, non comme un verdict sur une équipe). L'avertissement plus large sur les mesures qui deviennent des objectifs figure dans le sujet 1.2, Loi de Goodhart et psychologie des métriques.

Les équipes agiles pensent en objectifs et en budgets ; les responsables des niveaux de service ITIL pensent en accords et en revues. Les visions s'ajustent : l'accord énonce le résultat, les objectifs et les indicateurs sont la façon dont l'équipe tient la promesse, et les mesures d'expérience confirment que cela a compté.

Un dernier terme : un [percentile](https://en.wikipedia.org/wiki/Percentile) est la valeur en dessous de laquelle tombe une part donnée des observations. Le 85e percentile du temps de résolution est le temps dans lequel 85 % des tickets ont été résolus. La plupart des cibles de SLA sont écrites comme un percentile ou une part : la façon dont le percentile est calculé et ce qu'il inclut sont donc le cœur du sujet (voir le sujet 1.6, Culture statistique pour les métriques de service).

## Principes clés

- **Convenez des résultats avec le client, puis mesurez-les.** Un accord est un énoncé négocié de ce dont le client a besoin et que le fournisseur peut soutenir, écrit dans les mots du client et revu ensemble.
- **Rapportez des distributions et des parts, jamais une moyenne unique.** Un temps de résolution moyen qui atteint la cible peut reposer sur une longue queue de travail très tardif. Énoncez le percentile, la population et le décompte.
- **Rendez l'horloge honnête.** Chaque cible a un événement de début, un événement de fin et une liste de conditions de suspension. Publiez les règles d'horloge et rapportez la fréquence d'usage de chaque suspension.
- **Superposez les accords.** Le SLA repose sur des OLA et des contrats de fournisseurs, et les objectifs fixés dans l'équipe doivent être plus serrés que les promesses faites à l'extérieur. Un écart à n'importe quelle couche apparaît comme un dépassement au sommet.
- **Appariez chaque mesure opérationnelle avec une mesure d'expérience.** Une cible atteinte avec une mauvaise expérience, ou l'inverse, est le signal le plus utile du rapport.
- **Comptez les quasi-dépassements.** Le travail terminé juste à l'intérieur de la limite en dit plus sur le risque que celui terminé bien à l'intérieur.
- **Rapportez sur des équipes et des services, jamais sur des personnes.** Les accords décrivent ce qu'un service ou une équipe s'engage à faire. Ils ne servent pas à classer des individus.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'atteinte du SLA | Part des éléments mesurés (incidents, demandes ou fenêtres de temps) qui ont atteint une cible de SLA énoncée dans la période | Éléments ayant atteint la cible divisés par les éléments mesurés. L'horloge démarre à l'heure d'enregistrement définie dans l'accord (par exemple la création du ticket) et s'arrête à l'événement de fin défini (par exemple le rétablissement confirmé). Exclus : les éléments annulés comme doublons et le temps dans les exclusions convenues comme la maintenance programmée. Rapporter le décompte à côté de la part | Pourcentage, avec n | Horodatages de l'outil ITSM ; données de supervision pour les cibles fondées sur le temps | Gestion des niveaux de service ; gestion des incidents ; gestion des demandes de service | Atteinte de l'objectif de niveau de service sur une fenêtre glissante (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Mensuelle, avec une vue interne hebdomadaire |
| Part de quasi-dépassements | Part des éléments qui ont atteint la cible mais se sont terminés dans le dernier dixième du temps alloué | Éléments terminés à 90 % ou plus du temps cible et toujours dans la limite, divisés par les éléments qui ont atteint la cible. Même horloge que le SLA. Sans objet pour les fenêtres de temps (elle ne s'applique qu'aux mesures de temps jusqu'à la cible) | Pourcentage | Horodatages de l'outil ITSM | Gestion des niveaux de service | Proportion du travail proche de l'attente de niveau de service sur un graphique de flux (voir le sujet 2.1, Mesures de flux) | Mensuelle |
| Part de suspension de l'horloge | Part du temps écoulé total des tickets passée dans des états qui suspendent l'horloge du SLA | Temps total de suspension divisé par le temps écoulé total du début à la fin, pour les éléments dans le périmètre. Exclut les éléments où aucun état de suspension n'a été utilisé. Rapporter par état de suspension | Pourcentage | Historique des statuts de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps bloqué et temps d'attente dans une vue de flux (voir le sujet 2.4, Métriques de flux de valeur) | Mensuelle |
| Taux d'atteinte de l'OLA | Part des transmissions internes qui ont atteint la cible de l'OLA entre deux équipes | Transmissions terminées dans la cible de l'OLA divisées par les transmissions reçues. L'horloge démarre quand l'équipe réceptrice est affectée et s'arrête quand elle renvoie ou clôt l'élément. Exclus : les éléments réaffectés par erreur, comptés à part | Pourcentage, avec n | Historique d'affectation de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps d'attente de transmission et travail bloqué entre équipes (voir le sujet 9.3, Métriques de collaboration et de transmission) | Mensuelle |
| Temps d'attente de transmission (85e percentile) | Temps qu'un élément attend dans la file d'une équipe réceptrice avant que le travail ne commence | 85e percentile du temps entre l'affectation à l'équipe réceptrice et la première action consignée de cette équipe. Exclus : les éléments en attente du client | Heures ou minutes | Historique d'affectation et d'activité de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps de file dans une vue de flux (voir le sujet 2.3, Travail en cours et théorie des files d'attente) | Hebdomadaire |
| Score d'expérience par parcours | Note du client ou de l'utilisateur sur la façon dont le service a soutenu un parcours défini, comme obtenir un nouvel ordinateur portable ou se remettre d'une panne | Moyenne et distribution des notes d'enquête sur une échelle fixe pour les parcours terminés dans la période. Rapporter le taux de réponse et la composition des répondants. Exclues : les enquêtes partielles. Pas une moyenne unique : montrer la distribution | Échelle de notation, avec taux de réponse | Courte enquête après interaction ; événements de parcours de l'outil ITSM | Gestion des niveaux de service ; pratiques de satisfaction de la clientèle (voir le sujet 6.1, Métriques de satisfaction de la clientèle) | Retour des clients et mesures de résultat | Mensuelle, chaque vague montrée |
| Écart pastèque | Part des périodes ou des services où le SLA se lit comme tenu alors que la mesure d'expérience ou une mesure d'impact sur les utilisateurs se lit comme mauvaise | Services (ou périodes) avec une atteinte du SLA à la cible ou au-dessus et une expérience en dessous de son niveau convenu, divisés par les services (ou périodes) avec une atteinte du SLA à la cible ou au-dessus. Le niveau d'expérience doit être convenu avant que la période soit notée | Pourcentage de services verts | Atteinte du SLA et score d'expérience ensemble | Gestion des niveaux de service ; amélioration continue | Rétrospective des résultats face aux effets obtenus | Trimestrielle |
| Couverture et actualité des accords | Part des services en production dont le SLA, les OLA et les contrats de fournisseurs existent et ont été revus dans l'intervalle convenu | Services avec les trois couches documentées et revues dans l'intervalle, divisés par les services en production du catalogue des services. L'intervalle est fixé par l'organisation. Exclus : les services en cours de retrait | Pourcentage | Catalogue des services (« service catalogue » dans l'orthographe propre d'ITIL) et registre des accords | Gestion des niveaux de service ; gestion du catalogue des services ; gestion des fournisseurs | Accords de travail et chartes d'équipe revus selon une cadence régulière | Trimestrielle |

## Recommandations

### Mettre en place les accords

**1. Rédigez chaque SLA dans le langage du client et reliez-le à un seul résultat.** Partez de ce dont le client a besoin, comme « un employé verrouillé hors de son compte retravaille vite », puis choisissez la mesure. Un accord court avec une poignée de cibles significatives vaut mieux qu'un long que personne ne lit. Écrivez l'horloge de chaque cible : l'événement de début, l'événement de fin et les conditions de suspension (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

**2. Énoncez les cibles comme des percentiles ou des parts, avec une population énoncée.** « 90 % des incidents de priorité 2 rétablis en quatre heures » en dit plus que « rétablissement moyen inférieur à deux heures ». Convenez de ce qui compte : quelles priorités, quelles heures, quels types de demandes. Montrez le décompte avec chaque pourcentage pour qu'un mois de huit incidents ne soit pas lu comme un mois de huit cents.

**3. Dérivez les OLA du SLA, et donnez à chacun une équipe responsable nommée.** Travaillez à rebours depuis la cible du client : si le client se voit promettre un rétablissement en quatre heures, les OLA doivent laisser de la place à la détection, au triage, aux transmissions et à la correction. Écrivez chaque OLA comme un court accord mutuel avec une équipe réceptrice, un temps de réponse attendu et une voie de règlement des différends. Un OLA existe pour aider les équipes à planifier : gardez-le aussi léger que la relation le permet.

**4. Gardez les objectifs plus serrés que la promesse.** Fixez le SLO interne à un niveau plus strict que le SLA pour qu'une mauvaise semaine soit remarquée et corrigée avant un dépassement visible du client (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Traitez le SLA comme un plancher qui intéresse la finance et le juridique, et le SLO comme le chiffre sur lequel les ingénieurs se guident. Utilisez le budget d'erreur comme moyen pour le produit et l'exploitation de décider entre travail sur les fonctionnalités et travail de fiabilité.

### Mesurer honnêtement

**5. Publiez les règles d'horloge et rapportez les suspensions.** La route la plus courante vers un rapport vert est un état de suspension généreux, comme « en attente du client » utilisé quand c'est le fournisseur qui attend. Rapportez la part de suspension de l'horloge par état de suspension, échantillonnez chaque mois des tickets suspendus et demandez si le client conviendrait que l'horloge aurait dû s'arrêter. Gardez courte la liste des motifs de suspension autorisés et écrivez-la dans l'accord.

**6. Montrez toute la distribution à côté de la cible.** Placez la médiane, le 85e ou le 95e percentile et le pire décile à côté du taux d'atteinte. Une atteinte plate de 95 % peut cacher une queue de travail qui a pris des jours (voir le sujet 1.6, Culture statistique pour les métriques de service).

**7. Suivez les quasi-dépassements et les causes de dépassement.** La part de quasi-dépassements dit quelle part de chance il y a dans le chiffre vert. Quand un dépassement se produit, consignez la catégorie de cause et s'il s'agissait d'un problème de capacité, de transmission, de fournisseur ou de définition. Reliez les plus grandes catégories à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**8. Mesurez la file des OLA, pas seulement l'atteinte.** Le temps d'attente de transmission au 85e percentile montre où le travail cale, bien avant qu'un dépassement de SLA n'apparaisse. Partagez-le avec l'équipe émettrice et l'équipe réceptrice, et décrivez-le comme une propriété du flux entre elles. La conversation porte sur la file, jamais sur les personnes qui s'y trouvent (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Ajouter l'expérience et combler l'écart

**9. Appariez chaque SLA avec une mesure d'expérience pour le même parcours.** Demandez aux utilisateurs, après l'interaction, une courte question sur le fait que cela a fonctionné et sur la difficulté, et rapportez le taux de réponse et la composition des répondants. Convenez d'avance du niveau qui compte comme assez bon, pour qu'un XLA soit un résultat négocié et non un chiffre inventé après coup (voir le sujet 6.2, Accords de niveau d'expérience, et le sujet 6.1, Métriques de satisfaction de la clientèle).

**10. Rapportez l'écart pastèque et traitez-le comme un constat.** Suivez la fréquence à laquelle un SLA est tenu alors que l'expérience est mauvaise. Un écart qui grandit vous dit que les mesures du SLA s'éloignent de ce qui compte pour les utilisateurs, et la bonne réponse est de réviser la mesure, non d'expliquer la divergence. Revoyez-le chaque trimestre avec le représentant du client présent.

**11. Revoyez les accords selon un calendrier et retirez ceux dont personne ne se sert.** Vérifiez chaque accord face au catalogue des services, aux contrats de fournisseurs et au travail réel. Un ensemble plus petit d'accords vivants est plus facile à rapporter et plus difficile à détourner.

**12. Rapportez chaque service dans une vue qui combine les trois couches.** Montrez sur une page, pour chaque service, l'atteinte du SLA, la distribution, les attentes de transmission des OLA, le score d'expérience et le travail d'amélioration ouvert. Dérivez l'état des données, non d'une couleur choisie par le responsable du service. Rendez la page ouverte au client et aux équipes (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux d'atteinte du SLA | Choisir une cible facile ; clore tôt les tickets et les rouvrir plus tard ; reclasser la priorité à la baisse ; exclure les cas difficiles comme « hors périmètre » | Taux de réouverture et taux de reclassement de priorité ; échantillon de tickets clos lu avec le client ; revue de la liste d'exclusions chaque trimestre |
| Part de quasi-dépassements | Arrêter l'horloge une minute avant la limite, puis continuer le travail hors enregistrement ; scinder un ticket en deux plus courts | Temps entre le dernier contact du client et le rétablissement confirmé ; décompte des tickets liés ou enfants par incident |
| Part de suspension de l'horloge | Utiliser des états de suspension sur des tickets qui n'attendent pas le client ; déplacer le travail vers un état qui n'est pas compté | Motifs de suspension audités sur un échantillon ; part des suspensions annulées par le client ; score d'expérience des tickets suspendus |
| Taux d'atteinte de l'OLA | Renvoyer des transmissions à l'émetteur pour relancer l'horloge ; marquer des éléments comme acceptés sans commencer le travail | Nombre de rebonds par élément et temps total jusqu'au rétablissement entre équipes ; résultat de SLA de bout en bout |
| Temps d'attente de transmission (85e percentile) | Affecter à une personne plutôt qu'à la file de l'équipe pour cacher l'attente ; consigner une première action symbolique | Qualité de la première action échantillonnée ; temps entre l'affectation et la première mise à jour visible du client |
| Score d'expérience par parcours | N'envoyer les enquêtes qu'aux utilisateurs satisfaits ; poser des questions orientées ; entraîner les intervenants à obtenir de hautes notes | Composition des répondants face à la population ; taux de réponse montré à côté du score ; commentaires libres lus lors de la revue |
| Écart pastèque | Fixer le niveau d'expérience bas pour que l'écart reste petit ; changer la mesure d'expérience quand elle baisse | Niveau d'expérience convenu d'avance et changements consignés avec motifs ; tendance de toute la distribution |
| Couverture et actualité des accords | Marquer un accord comme revu sans vraie revue ; compter un document squelette comme un SLA | Preuve de la revue (participants, changements, décisions) ; échantillon d'accords lus pour leur contenu réel et la signature du client |

Une lecture saine montre une atteinte qui bouge pour des raisons compréhensibles, des quasi-dépassements peu nombreux et expliqués, des suspensions qui restent dans la liste convenue, des attentes de transmission discutées par les équipes qui les détiennent, et une mesure d'expérience qui concorde en grande partie avec le SLA. Là où les deux divergent, l'équipe a déjà une note de la cause et un élément d'amélioration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLA contractuels avec pénalités | Clairs, exécutoires, reconnus juridiquement | Encouragent les jeux d'horloge et le rapport défensif ; les pénalités peuvent aigrir la relation |
| SLA sans pénalités, avec revue régulière | Construit la confiance et des données honnêtes ; se concentre sur l'apprentissage | Moins de levier quand un fournisseur rate régulièrement ses cibles |
| OLA détaillés entre toutes les équipes | Attentes claires et moins de différends | Bureaucratie ; les équipes optimisent leur propre horloge plutôt que celle du client |
| OLA légers avec une cible partagée de bout en bout | Encourage la coopération ; moins de paperasse | Demande de la confiance et une bonne visibilité des files pour régler les différends |
| Ajouter des XLA aux SLA | Montre si le service aide les gens | Les données d'enquête sont plus bruitées et plus lentes ; l'attribution est plus difficile |

Gardez l'accord petit, rapportez la distribution et utilisez les données d'expérience pour vérifier les données opérationnelles. Dépensez l'effort sur les règles d'horloge et les transmissions, là où naît l'essentiel du désaccord sur un chiffre.

## Questions à discuter avec votre équipe

**1. Si notre rapport de SLA est tout vert, que nous attendrions-nous que les utilisateurs disent du service ?**
Demandez au groupe de nommer un service resté vert plusieurs mois, puis recueillez ce que les utilisateurs disent réellement dans leurs commentaires et plaintes. Comparez les deux. L'animateur doit chercher les écarts entre la mesure et l'expérience vécue, et noter quelles mesures ont été choisies parce qu'elles étaient faciles à atteindre.

**2. Où notre horloge s'arrête-t-elle, et qui l'a décidé ?**
Parcourez les règles de début, de fin et de suspension d'une cible importante et demandez qui a écrit chacune. Regardez la part de tickets en état de suspension, et demandez si les clients seraient d'accord. Convenez d'une règle à resserrer ou à clarifier.

**3. Lesquels de nos OLA aident les équipes à planifier, et lesquels ne font que désigner des coupables ?**
Listez les accords internes et demandez qui lit chacun et quand. Discutez de ce qui se passe après un OLA manqué : une conversation sur la file, ou une recherche de faute. Le but est de déplacer la discussion vers le flux de travail entre équipes. Choisissez un OLA à simplifier ou à retirer.

**4. Quelle part de notre vert est de la chance ?**
Montrez la part de quasi-dépassements de la cible la plus importante. Discutez de ce qui arriverait si le mois suivant comptait quelques cas difficiles de plus ou quelques personnes disponibles de moins. Demandez si l'équipe a du mou, et où il se trouve.

**5. Que voudrait le client que nous promettions et que nous ne mesurons pas aujourd'hui ?**
Invitez le représentant du client ou un utilisateur à décrire avec ses propres mots ce qui compte pour lui, comme pouvoir joindre une personne ou recevoir un ordinateur portable avant le premier jour. Consignez deux ou trois résultats. Décidez lesquels pourraient devenir une courte question d'enquête ou un événement déjà présent dans les données, et comment le groupe conviendrait d'un bon niveau.

**6. Comment saurions-nous que nos mesures de SLA se sont éloignées de ce qui compte pour les utilisateurs ?**
Discutez de l'écart pastèque comme signal et demandez qui le regarde. Considérez la fréquence de revue des accords et si le client y assiste. Convenez d'une date de revue et des preuves à apporter, y compris un échantillon de tickets et les derniers résultats d'expérience.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison qui exploitent aussi leurs services tiennent le SLA par leurs propres objectifs et budgets d'erreur, et ressentent le coût quand une pénalité de SLA ou une escalade de client interrompt le travail planifié. Elles doivent garder les SLO plus serrés que les SLA et traiter le SLA comme un plancher de sécurité, non comme la cible quotidienne (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

### Équipes de service et d'exploitation

Les équipes d'exploitation portent les horloges. Elles ont besoin de règles claires pour le début, la fin et les conditions de suspension, d'OLA partagés qui nomment la file réceptrice et d'une visibilité des attentes de transmission. Elles doivent rapporter clairement les causes de dépassement et s'en servir comme entrée du travail sur les problèmes et la capacité (voir le sujet 4.1, Métriques de gestion des problèmes). Elles doivent résister à la pression d'expliquer un résultat par l'horloge au lieu d'en corriger la cause.

### Direction et gouvernance

Les dirigeants utilisent les rapports de SLA pour voir si les engagements sont tenus et où investir. Ils doivent demander des distributions, la part de suspension de l'horloge, la part de quasi-dépassements et l'écart pastèque, et traiter avec curiosité une série ininterrompue de vert. Financer le travail d'amélioration qui suit une analyse de dépassement, et protéger le rapport honnête contre le blâme, compte plus que la cible elle-même (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### Clients et utilisateurs

Les clients veulent que l'accord décrive ce qu'ils ressentent : la rapidité avec laquelle le problème est corrigé, la fréquence à laquelle il revient et la possibilité de joindre quelqu'un qui aide. Ils doivent participer à la revue des accords et avoir un moyen de dire quand un rapport vert ne correspond pas à leur expérience. Un résumé lisible d'une page, avec les raisons de tout dépassement et la correction prévue, construit plus de confiance qu'un long tableau d'atteinte.

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional soutient un système de planification clinique utilisé par le personnel des services. Le responsable du service, le centre de services, l'équipe applicative et l'équipe d'infrastructure se réunissent chaque mois. Tous les chiffres ci-dessous sont illustratifs.

Le SLA promet que 90 % des incidents de priorité 2 (perte partielle de fonction touchant un service) sont rétablis en quatre heures, mesurées depuis la création du ticket, dans un service ouvert 24 heures sur 24, sept jours sur sept. Le rapport mensuel montre une atteinte de 94 % sur 36 incidents (illustratif), confortablement vert. L'enquête d'expérience, envoyée après chaque clôture de priorité 2, a un taux de réponse de 41 % (illustratif) et une note médiane de 3 sur une échelle de cinq, bien en dessous du niveau de 4 que le responsable du service et les responsables de services avaient convenu comme XLA. L'écart pastèque est visible pour le troisième mois de suite.

L'équipe regarde la distribution. Le rétablissement médian est de 1 heure 40 minutes (illustratif), mais le 95e percentile est de 3 heures 50 minutes (illustratif), et la part de quasi-dépassements est de 31 % (illustratif) : près d'un tiers des incidents « atteints » se sont terminés dans le dernier dixième du temps alloué. Elle regarde la part de suspension de l'horloge et constate que 22 % (illustratif) du temps écoulé est passé dans l'état « en attente du client ». Un échantillon de dix tickets suspendus en montre quatre où le service avait répondu et où le ticket est resté suspendu jusqu'au poste suivant, et trois autres où l'équipe applicative attendait l'équipe d'infrastructure. Le temps d'attente de transmission au 85e percentile pour la file d'infrastructure est de 2 heures 10 minutes (illustratif) face à un OLA de 30 minutes (illustratif), et le taux d'atteinte de l'OLA pour cette transmission est de 58 % (illustratif).

La décision est pratique. Ils changent la règle d'horloge pour que « en attente du client » ne puisse être utilisé qu'après une demande documentée au client, l'horloge reprenant à la réponse suivante. Ils ajoutent une voie d'astreinte pour la file d'infrastructure pendant les heures des services et conviennent d'un OLA plus petit, avec une revue dans un mois. Ils ajoutent la mesure d'expérience et l'écart pastèque au rapport mensuel d'une page et invitent un responsable de service à la revue. Ils abaissent aussi le SLO interne à un rétablissement plus strict de quatre heures pour 95 % des incidents, pour que l'équipe remarque les ennuis avant que le SLA soit en danger.

Un risque de détournement apparaît le deuxième mois. Après le changement de la règle de suspension, l'atteinte baisse à 89 % (illustratif), et un responsable demande au centre de services de « revérifier les priorités ». L'équipe repère un pic de rétrogradations de la priorité 2 à la priorité 3, apparie l'atteinte avec les taux de reclassement et de réouverture, et exige un motif dans l'enregistrement pour tout changement de priorité. Au troisième mois, l'atteinte est de 91 % (illustratif), le 95e percentile est plus bas, la part de quasi-dépassements a baissé, et la note d'expérience médiane est montée à 3,8 (illustratif). L'écart se réduit parce que le travail s'est amélioré, et les chiffres sont crédibles.

## Agilité, IA, automatisation et analytique

### Agilité

Convenez des niveaux de service avec les parties prenantes et revoyez-les régulièrement, pour que les cibles suivent ce dont les utilisateurs ont besoin à mesure que le service évolue. La précaution est qu'une cible fixe laissée telle quelle pendant des années mesure le passé.

### IA

L'IA peut résumer les dépassements, prédire quels tickets manqueront une cible et suggérer des escalades. Appariez l'atteinte avec le score d'expérience et l'écart pastèque, et consignez quelles prédictions étaient justes. La précaution est qu'une incitation de l'IA à protéger la cible peut pousser les gens à suspendre des horloges ou à reprioriser : auditez donc l'usage des suspensions.

### Automatisation

Calculez l'atteinte à partir des horodatages d'événements et rendez visibles les règles de suspension. Mesurez l'escalade automatisée sur les fausses escalades et sur les dépassements qu'elle a manqués. La précaution est qu'une suspension automatique sur un état comme « en attente du client » est une route facile vers le détournement.

### Analytique

Rapportez l'atteinte avec les quasi-dépassements et les percentiles, et montrez le score d'expérience à côté. La décision éclairée est quel accord renégocier. La précaution est que l'atteinte sur de petits décomptes de tickets est volatile : montrez donc le décompte derrière chaque pourcentage.

## Éclairage sectoriel

**Startup.** Une petite entreprise n'a souvent aucun SLA formel, seulement une promesse informelle à quelques premiers clients. Écrivez une page qui nomme les heures de service, une cible de réponse et une cible de rétablissement énoncée comme un percentile, et gardez un SLO dans l'équipe. Les conversations avec les clients tiennent lieu de XLA : écrivez donc chaque mois ce que disent les trois clients les plus importants.

**Petite entreprise.** Une petite équipe informatique dépend généralement fortement de fournisseurs externes : les contrats de soutien comptent donc plus que les OLA internes. Vérifiez que l'engagement de chaque fournisseur est au moins aussi strict que le SLA que vous donnez à vos propres utilisateurs, et suivez la performance réelle du fournisseur (voir le sujet 8.4, Métriques des fournisseurs et des contrats). Une simple page mensuelle, avec atteinte, quasi-dépassements et une courte enquête auprès des utilisateurs, suffit.

**Grande entreprise.** Les grandes organisations ont besoin d'un registre des accords et d'une métrique de couverture. Standardisez les règles d'horloge et les définitions entre services pour que les consolidations aient un sens (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Méfiez-vous de l'effet pastèque dans les consolidations de direction, où des centaines de lignes vertes cachent quelques services à la douleur utilisateur sérieuse.

**Gouvernement et secteur public.** Les organismes publics ont souvent des normes de service légales, des règles de passation de marchés qui fixent les SLA dans les contrats et un devoir de publier les résultats. Gardez la mesure publiée claire et vérifiable, conservez les règles d'horloge et les preuves pour l'audit, et traitez les citoyens comme des clients ayant voix à la revue (voir le sujet 8.5, Rapports réglementaires et gouvernementaux). Là où le contrat est rigide, ajoutez une mesure d'expérience à côté sans changer le libellé du contrat.

## Dossier d'affaires : motivations, ROI et TCO

L'argument en faveur de meilleures métriques d'accords est un argument de confiance et d'évitement de l'effort gaspillé. Des rapports qui correspondent à ce que ressentent les utilisateurs réduisent les escalades et les différends, raccourcissent la dispute mensuelle sur la question de savoir à qui est le bon chiffre, et laissent les dirigeants financer le travail qui compte. Des OLA clairs réduisent les retards de transmission, qui sont parmi les plus grands contributeurs aux longs rétablissements. Un écart pastèque, attrapé tôt, évite le coût plus grand d'une relation client ou d'un renouvellement de contrat qui tourne mal.

Les coûts sont modestes : le temps d'écrire et de revoir les accords, des données fiables d'horloge et de transmission (voir le sujet 1.5, Sources de données et instrumentation), une courte enquête et une revue mensuelle. Le coût total croît avec le nombre d'accords : moins d'accords, plus simples, coûtent moins à détenir.

Le rendement apparaît dans des dépassements moins surprenants, moins de temps passé à expliquer les rapports et de meilleurs choix d'investissement. Traitez-les comme des schémas à observer et comparer dans le temps, non comme un calcul. Comparez l'effort d'une revue mensuelle avec le coût d'un différend escaladé ou d'un renouvellement perdu dans votre propre organisation, avec vos propres données (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Ne rapporter que des moyennes.** Une moyenne cache une longue queue de travail tardif. Rapportez des percentiles, la part de quasi-dépassements et le décompte.
- **Écrire le SLA autour de ce qui est facile à atteindre.** Une cible choisie pour le confort donne un rapport toujours vert. Partez de ce dont le client a besoin et montrez ouvertement l'écart.
- **Suspendre l'horloge pour améliorer le chiffre.** Des états de suspension généreux font du SLA une fiction. Publiez les règles de suspension, auditez des échantillons et rapportez la part de suspension.
- **Les OLA comme arme.** Un OLA utilisé pour blâmer l'équipe suivante apprend aux équipes à renvoyer le travail. Traitez les ratés comme une information sur la file et corrigez le flux.
- **Un rapport piloté par les pénalités.** De lourdes pénalités encouragent le classement défensif et les disputes sur l'horloge. Utilisez les pénalités avec parcimonie et appariez-les avec les taux de réouverture et de reclassement.
- **Des données d'expérience sans taux de réponse.** Un score élevé tiré d'un petit échantillon autosélectionné trompe. Montrez le taux de réponse et la composition des répondants à côté de chaque résultat.
- **Des accords que personne ne revoit.** Les accords périmés décrivent un service qui n'existe plus. Planifiez des revues et retirez ce qui est inutilisé.
- **Des objectifs individuels tirés d'accords d'équipe.** Scinder un SLA d'équipe en quotas personnels mène à des clôtures précipitées et au classement. Gardez l'accord au niveau du service et de l'équipe.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Conception des accords | Promesses verbales ou modèles copiés ; cibles choisies par habitude | Quelques SLA écrits ; OLA rares ; les horloges diffèrent entre équipes | Un court modèle avec des cibles fondées sur les résultats, des percentiles et des règles d'horloge écrites | Accords revus selon une cadence, avec le client, et reliés aux SLO | Couches de SLA, d'OLA, de contrat de fournisseur et de SLO ajustées ensemble à mesure que les conditions changent |
| Qualité de la mesure | Décomptes manuels ; moyennes ; suspensions non documentées | Atteinte par outil pour certains services ; usage des suspensions non revu | Une définition et une source de données ; distributions et part de suspension montrées | Quasi-dépassements, causes de dépassement et attentes de transmission suivis dans le temps et échantillonnés | Données entre équipes et fournisseurs réconciliées ; définitions révisées quand elles cessent d'éclairer les décisions |
| Lien avec l'expérience | Aucun retour d'utilisateurs lié au SLA | Enquêtes ponctuelles pour certains services | Une courte enquête pour les parcours clés, avec taux de réponse montré | Cibles d'expérience convenues avec les clients et écart pastèque rapporté | Mesures d'expérience et opérationnelles pilotent l'amélioration partagée avec les clients |
| Usage pour l'amélioration | Rapporté après une plainte | Dépassements discutés en réunion d'équipe | Revue mensuelle avec responsables et actions | Les causes de dépassement alimentent l'amélioration financée et le travail sur les problèmes | Clients, fournisseurs et équipes planifient ensemble l'amélioration à partir de la même vue |

## Liste de vérification

- [ ] Chaque SLA énonce son résultat, sa cible comme percentile ou part, et sa population.
- [ ] L'événement de début, l'événement de fin et les conditions de suspension autorisées sont écrits pour chaque cible.
- [ ] Chaque SLA tourné vers le client a des OLA ou des contrats de fournisseurs qui s'y inscrivent, chacun avec une équipe responsable nommée.
- [ ] Les objectifs internes sont plus stricts que les cibles de SLA promises.
- [ ] Les rapports montrent la distribution, le décompte, la part de quasi-dépassements et la part de suspension de l'horloge.
- [ ] Un échantillon de tickets suspendus et clos est lu chaque mois.
- [ ] Chaque service clé a une mesure d'expérience avec un niveau convenu, et le taux de réponse est montré.
- [ ] L'écart pastèque est suivi et revu avec un représentant du client.
- [ ] Les accords sont revus selon un calendrier et retirés quand ils sont inutilisés.
- [ ] Aucune métrique d'accord n'est utilisée pour classer des personnes.

## Prompts d'IA

**Passez en revue un SLA pour y chercher des problèmes d'horloge et de formulation.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Rédigez un OLA entre deux équipes.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Cherchez un écart pastèque dans nos données.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Concevez une courte enquête d'expérience pour un XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit la métrique derrière une ligne de SLA et le garde-fou qui doit se trouver à côté.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent en phase le modèle, les règles d'horloge et le tableau de détournement.

## Idées clés

- Un SLA est une promesse au client, un OLA est une promesse entre équipes et un XLA est un résultat d'expérience convenu ; chacun a besoin de sa propre mesure et de son responsable.
- Rapportez des percentiles, des décomptes, des quasi-dépassements et la part de suspension de l'horloge, car les moyennes et les suspensions silencieuses produisent des rapports verts sur un service médiocre.
- Dérivez les OLA du SLA et gardez les objectifs internes plus serrés que la promesse.
- Appariez chaque SLA avec une mesure d'expérience pour le même parcours, et rapportez l'écart pastèque comme un constat à traiter.
- Revoyez les accords selon un calendrier avec le client dans la salle, et retirez ce que personne n'utilise.
- Gardez chaque métrique d'accord au niveau des services et des équipes, jamais des individus.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
