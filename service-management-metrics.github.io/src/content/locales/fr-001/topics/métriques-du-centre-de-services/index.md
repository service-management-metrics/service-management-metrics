# Métriques du centre de services

**Mesurez le centre de services par la qualité de l'aide qu'il apporte pour que les gens reprennent le travail et par ce qu'il apprend au reste de l'organisation, car les décomptes d'appels et les minutes au téléphone récompensent la vitesse et le volume aux dépens des deux.**

## Vue d'ensemble et motivation

Pour la plupart des utilisateurs, le centre de services est le service. Ils rencontrent rarement les ingénieurs ou ne voient la chaîne de livraison ; ils rencontrent celui qui répond quand quelque chose va mal. Un [centre d'assistance](https://en.wikipedia.org/wiki/Help_desk) (help desk) est le service ou la personne qui apporte aide et informations, généralement à propos de problèmes informatiques. Dans l'usage de la [gestion des services informatiques (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), le centre de services est le point de contact unique entre le fournisseur et ses utilisateurs, traitant à la fois les incidents (perturbations non planifiées ou perturbations potentielles d'un service) et les demandes de service (demandes courantes pour quelque chose que le service fournit normalement). Dans [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique du centre de services se place à côté de la gestion des incidents et de la gestion des demandes de service, et elle est décrite par son objectif et ses résultats, non par une liste fixe de mesures. Ce sujet offre donc des conseils pratiques, pas une exigence de cadre.

Les mesures qui se sont développées autour du centre viennent largement de la tradition du [centre d'appels](https://en.wikipedia.org/wiki/Call_centre) : combien de contacts sont arrivés, combien de temps les gens ont attendu, combien ont renoncé, combien de temps chaque contact a duré et combien ont été résolus du premier coup. Ces mesures sont utiles et peu coûteuses, et ce sont aussi les plus faciles du livre à transformer en objectifs qui abîment le service. Des appels courts paraissent efficaces jusqu'à ce que le même utilisateur rappelle trois fois. Un faible abandon paraît bienveillant jusqu'à ce que les agents répondent vite sans rien résoudre. La tâche de ce sujet est de décrire chaque mesure, d'énoncer ses horloges et de dire ce qu'elle récompense et ce qu'elle cache.

La vision agile ajoute un second objectif. Chaque contact est une preuve de ce que les utilisateurs trouvent déroutant, de ce qui casse et de ce qu'ils souhaiteraient que le service fasse. Une équipe agile qui publie souvent a besoin de cette preuve rapidement et au niveau d'un service, pas d'un ticket. Le centre est donc mesuré deux fois : comme une exploitation qui répond bien aux gens, et comme un capteur qui alimente le backlog. Le volume est le pont entre les deux. Un compte en hausse peut signifier une croissance, une mauvaise version, un article manquant ou un nouveau canal, et la métrique seule ne peut pas dire lequel (voir le sujet 3.2, Volume et priorité des incidents, pour savoir comment lire les décomptes par catégorie et par priorité).

Termes clés : la [résolution au premier appel](https://en.wikipedia.org/wiki/First_call_resolution) est la part des contacts résolus au premier contact ; un [distributeur automatique d'appels](https://en.wikipedia.org/wiki/Automatic_call_distributor) oriente les appels entrants vers le personnel disponible ; un [accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est un engagement entre fournisseur et client ; un [percentile](https://en.wikipedia.org/wiki/Percentile) est la valeur en dessous de laquelle tombe une part donnée des observations, de sorte que le 85e percentile du temps de traitement est la durée dans laquelle 85 % des contacts se terminent ; et la [satisfaction de la clientèle](https://en.wikipedia.org/wiki/Customer_satisfaction) (voir le sujet 6.1, Métriques de satisfaction de la clientèle) est la mesure dans laquelle un service répond aux attentes des utilisateurs.

Les termes « contact » et « ticket » ne sont pas la même chose. Un contact est une tentative d'une personne pour joindre le centre par un canal comme le téléphone, la discussion en ligne, le courriel, le portail, l'accueil physique ou la messagerie. Un ticket (aussi appelé enregistrement) est ce que l'outil ITSM crée pour suivre le travail. Un ticket peut impliquer de nombreux contacts, et certains contacts, comme une réinitialisation de mot de passe traitée sur-le-champ, peuvent ne créer un ticket que pour la trace. Mélanger les deux est la source de confusion la plus courante dans les rapports de centre : les définitions ci-dessous les comptent donc séparément.

## Principes clés

- **Comptez séparément les contacts et les tickets, et définissez les deux.** Un contact est une tentative de joindre le centre ; un ticket est un enregistrement de travail. Les rapports qui les mélangent ne peuvent pas être réconciliés.
- **Rapportez les temps comme des distributions.** Montrez la médiane et un percentile élevé comme le 85e ou le 95e, jamais seulement une moyenne, parce que quelques contacts très longs ou très courts faussent la moyenne.
- **Appariez chaque mesure de vitesse avec une mesure de résultat.** La rapidité de réponse, l'abandon et le temps de traitement décrivent l'effort. La résolution et le recontact décrivent si l'utilisateur a été aidé.
- **Normalisez le volume par rapport à l'usage.** Un compte qui monte parce que la base d'utilisateurs a grandi est une autre histoire que celui qui monte par utilisateur.
- **Mesurez des canaux et des services, pas des personnes.** Ces métriques décrivent un centre, une file, un service et un canal. Elles ne servent jamais à classer ou à sanctionner des agents individuels.
- **Traitez le centre comme un capteur.** Chaque métrique doit mener à une question aux équipes de livraison sur ce qu'il faut corriger, documenter ou automatiser en amont.

## Définitions des métriques

Le tableau liste sept mesures que la plupart des centres de services peuvent recueillir à partir de leur plateforme de téléphonie et de leur outil ITSM. Les seuils et les objectifs sont à fixer et à écrire par chaque centre ; ce sujet ne donne aucune valeur de référence.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de contacts | Nombre de contacts reçus par le centre, par canal et par période | nombre de contacts créés dans la période, par canal ; les contacts de test internes, les réponses automatiques de courriel en double et les appels sortants passés par le centre sont exclus | nombre | Journal de la plateforme de téléphonie ou de discussion ; enregistrements de contacts de l'outil ITSM | Centre de services | Signal de demande dans l'affinage du backlog | Hebdomadaire |
| Taux de contacts | Contacts rapportés à la taille de la population servie, pour que la croissance ne soit pas prise pour un problème | contacts de la période / utilisateurs actifs ou comptes actifs de la période, ramenés à 100 utilisateurs ; le nombre d'utilisateurs est pris sur la même période et la définition d'« actif » est écrite | contacts pour 100 utilisateurs | Enregistrements de contacts et système d'identité ou de licences | Centre de services ; gestion des niveaux de service | Demande ajustée à l'usage dans la revue produit | Mensuelle |
| Temps de réponse | Attente entre le moment où un contact entre dans la file et celui où une personne ou un moteur de réponse automatisé s'en saisit | l'horloge démarre quand le contact est mis en file et s'arrête à la première réponse humaine ; les contacts abandonnés sont exclus de cette mesure et comptés dans l'abandon ; rapporter la médiane et le 85e percentile | secondes (téléphone, discussion) ; minutes ou heures (courriel, portail) | Plateforme de téléphonie ; plateforme de discussion ; horodatages de l'outil ITSM | Centre de services | Accord de travail sur la réactivité | Quotidienne pendant les fenêtres de revue, hebdomadaire en tendance |
| Taux d'abandon | Part des contacts qui prennent fin avant que quiconque ne s'en saisisse, du fait de l'utilisateur | contacts terminés par l'utilisateur avant la première réponse humaine / contacts mis en file ; les contacts terminés dans un court délai de grâce (énoncé dans la définition, par exemple cinq secondes) sont exclus comme accidentels | pourcentage | Plateforme de téléphonie ; plateforme de discussion | Centre de services | Signal de coût du retard dans la revue de service | Hebdomadaire |
| Temps de traitement | Temps que le centre consacre à un contact | l'horloge démarre quand une personne s'en saisit et s'arrête quand elle termine le contact, y compris le travail de documentation après contact ; l'attente de l'utilisateur n'est incluse que si la définition le dit ; rapporter la médiane et le 85e percentile, ventilés par type de contact | minutes | Plateforme de téléphonie ; plateforme de discussion ; journal de travail de l'outil ITSM | Centre de services ; gestion des incidents | Signal d'effort dans l'affinage et la planification de la capacité | Hebdomadaire |
| Taux de résolution au premier contact | Part des contacts résolus au premier contact sans contact ultérieur sur le même sujet | contacts résolus pendant le contact et non suivis d'un recontact sur le même problème par le même utilisateur dans la fenêtre de recontact / contacts éligibles ; les appels qui n'exigent qu'une orientation et ceux que le centre n'est pas censé résoudre sont exclus | pourcentage | Champs de résolution et de liaison de l'outil ITSM ; confirmation de l'utilisateur lorsqu'elle est recueillie | Centre de services ; gestion des incidents | Vérification de la définition de terminé, résolu au premier contact | Mensuelle |
| Taux de recontact | Part des contacts résolus suivis d'un autre contact sur le même sujet | contacts suivis dans la fenêtre de recontact (par exemple sept jours, fixée dans la définition) d'un autre contact du même utilisateur sur le même service ou problème / contacts résolus de la période antérieure ; les contacts sur un nouveau problème sont exclus | pourcentage | Liaison de l'outil ITSM et historique de réouverture ; enregistrements de contacts | Centre de services ; gestion des incidents | Taux de défauts échappés | Mensuelle |

La résolution au premier contact a plus d'une définition défendable : la définition fait donc partie de la métrique. Certains centres comptent un contact comme résolu quand l'agent clôt le ticket pendant l'appel. D'autres ne le comptent que si l'utilisateur ne revient pas dans une fenêtre. La seconde est plus difficile à recueillir et plus difficile à détourner, et c'est celle qui est utilisée ici. Énoncez la fenêtre, énoncez ce qui compte comme « le même sujet », et appliquez les deux de la même façon à chaque période.

## Recommandations

### Séparer dès le départ les contacts des tickets

**Donnez aux contacts et aux tickets leurs propres définitions, identifiants et décomptes.** Un contact est un enregistrement d'une tentative de joindre le centre, et un ticket est un enregistrement de travail. Reliez-les dans l'outil pour qu'un recontact sur le même sujet soit visible. Les rapports qui mélangent les deux donnent un chiffre de volume que personne ne peut réconcilier avec la plateforme de téléphonie.

### Rapporter le volume par canal, par catégorie et en taux normalisé

**Montrez le volume total, le volume par canal, le volume par catégorie et le taux de contacts pour 100 utilisateurs.** Les totaux seuls confondent croissance et ennuis. Une baisse du volume téléphonique peut être un passage à la discussion en ligne, et une hausse des contacts par le portail peut être une réussite délibérée du libre-service. Tracez les séries sur au moins un an pour que la saisonnalité, comme les rentrées et les clôtures d'exercice, soit visible.

### Utiliser des distributions pour chaque mesure de temps

**Rapportez la médiane et un percentile élevé pour le temps de réponse et le temps de traitement.** La moyenne d'une distribution asymétrique ne décrit presque l'expérience de personne. La médiane montre le contact typique, et le 85e ou le 95e percentile montre à quel point la queue lente est mauvaise. Dites sur combien de contacts le chiffre repose, et marquez la lecture comme peu fiable quand une file ne traite qu'une poignée de contacts dans la période (voir le sujet 1.6, Culture statistique pour les métriques de service).

### Traiter l'abandon comme un signal de demande et d'effectifs

**Lisez l'abandon avec le temps de réponse et les profils d'arrivée.** Les gens abandonnent quand l'attente dépasse ce qu'ils attendent, de sorte que le taux monte avec l'attente, et l'attente monte quand les arrivées dépassent la capacité. La [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory) explique pourquoi l'attente croît fortement quand une file approche de la pleine utilisation, c'est pourquoi un centre exploité près de 100 % d'occupation a toujours de longues attentes et un fort abandon. Dotez en personnel selon les profils d'arrivée par heure et par jour plutôt que selon une moyenne mensuelle, et montrez l'abandon par heure de la journée (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

### Définir avec soin la résolution au premier contact, puis la mesurer du côté de l'utilisateur

**Utilisez une définition fondée sur le recontact et confirmez-la par une courte question aux utilisateurs.** Ne compter que les contacts qui ne reviennent pas dans une fenêtre énoncée est plus difficile à gonfler qu'un indicateur posé par l'agent à la clôture. Ajoutez une vérification en une question, comme « votre problème a-t-il été résolu ? », et comparez-la avec le chiffre de recontact. Quand les deux divergent, la réponse de l'utilisateur est le meilleur guide, et l'écart indique où la clôture est prématurée.

### Utiliser le temps de traitement pour planifier, pas pour fixer des objectifs

**Traitez le temps de traitement comme une entrée de capacité et un outil de diagnostic, et ne fixez jamais d'objectif que les agents devraient battre.** Un objectif sur le temps de traitement paie la précipitation, les transferts prématurés et une documentation mince. Servez-vous de la distribution par type de contact pour planifier les effectifs et trouver les contacts qui prennent bien plus de temps que des contacts semblables, ce qui pointe souvent un article manquant, un outil maladroit ou un processus flou. Visez les causes du système, pas les agents.

### Relier les métriques du centre au travail de livraison

**Revoyez les principales catégories de contacts avec les équipes qui détiennent les services.** Chaque mois, prenez les cinq catégories qui ont généré le plus de contacts pour 100 utilisateurs et demandez quel changement en amont les supprimerait : une correction, un article, un meilleur message d'erreur ou une voie de libre-service. Consignez les réponses dans le backlog de l'équipe responsable. Cela transforme les chiffres du centre en travail d'amélioration et c'est l'usage agile le plus clair de ces données (voir le sujet 3.6, Métriques de gestion des connaissances, et le sujet 3.7, Métriques de libre-service et d'automatisation).

### Inclure chaque canal dans les mêmes définitions

**Appliquez la même horloge et les mêmes règles de comptage au téléphone, à la discussion, au courriel, au portail, à l'accueil physique et à la messagerie.** Les canaux asynchrones n'ont pas de file en direct : le temps de réponse y signifie donc autre chose. Définissez l'horloge par canal et rapportez chacun séparément avant de combiner. Un centre qui ne publie que son meilleur canal cache l'expérience de tous les autres.

### Relier les métriques à l'expérience de l'utilisateur

**Appariez les mesures opérationnelles avec une question de satisfaction après le contact et une invite en texte libre.** Une réponse rapide à un contact discourtois ou inutile est un mauvais résultat, et les horloges ne peuvent pas le voir. Montrez le taux de réponse et la composition des répondants à côté du score, car seule une partie autosélectionnée des utilisateurs répond (voir le sujet 1.5, Sources de données et instrumentation). Lisez les commentaires avec les personnes qui répondent aux contacts, dans un cadre d'équipe.

### Garder les métriques au niveau de l'équipe et de la file

**Rapportez par file, canal, service et équipe, et gardez les données au niveau des agents pour les conversations de coaching auxquelles l'agent participe.** Classer les agents individuels sur le temps de traitement ou le taux de résolution pousse à choisir les contacts faciles et à éviter les difficiles. Cela abîme aussi la confiance dans les données, et les utilisateurs en ressentent le résultat dans la qualité de l'aide. Servez-vous des chiffres au niveau de l'équipe pour demander ce dont le système a besoin.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Volume de contacts | Les agents découragent la consignation en redirigeant les utilisateurs vers des canaux qui ne sont pas comptés, ou scindent un contact en plusieurs pour faire paraître une file occupée ; les responsables visent un volume plus bas | Taux de contacts pour 100 utilisateurs et réconciliation périodique des décomptes de téléphonie avec les décomptes de tickets ; règle fixe selon laquelle chaque canal est compté |
| Taux de contacts | Le dénominateur est choisi après coup (par exemple une définition large d'« actif ») pour que le taux paraisse meilleur | Définition écrite et datée des « utilisateurs actifs » et décomptes bruts montrés à côté du taux |
| Temps de réponse | Les contacts sont pris par un message d'accueil automatique ou transférés vers une file calme, ou l'appel est décroché puis mis en attente ; le courriel reçoit une réponse automatique qui compte comme une réponse | Définir l'horloge comme la première réponse humaine, et suivre l'abandon et le recontact à côté |
| Taux d'abandon | Les appelants sont coupés avant d'être mis en file, le délai de grâce est étiré, ou une offre de rappel est comptée comme un contact traité | Percentiles du temps de réponse, taux d'achèvement des rappels et délai de grâce publié |
| Temps de traitement | Les appels sont précipités, transférés tôt ou terminés avant que le problème soit résolu ; les notes sont minces ; le travail est déplacé vers un temps après contact que l'horloge exclut | Résolution au premier contact, taux de recontact et revue par échantillon de la qualité de la documentation par l'équipe |
| Taux de résolution au premier contact | Les tickets sont clos pendant l'appel quel que soit le résultat, « le même sujet » est lu étroitement, ou les contacts difficiles sont classés « non censés être résolus » | Taux de recontact, confirmation de l'utilisateur en une question et audits périodiques des exclusions par l'équipe |
| Taux de recontact | On demande aux utilisateurs d'ouvrir un nouveau ticket pour un suivi, ou les suivis sont consignés sous une autre catégorie pour ne pas être liés | Règles de liaison dans l'outil, audit par échantillon des contacts répétés non liés et résolution déclarée par l'utilisateur |

Une lecture saine est un ensemble de chiffres qui s'accordent entre eux. Le temps de réponse et l'abandon évoluent ensemble, le temps de traitement varie avec le type de contact et non avec l'objectif du jour, la résolution au premier contact et le recontact sont des images en miroir dont la somme est proche de son plafond, et la réponse de l'utilisateur à « votre problème a-t-il été résolu ? » concorde avec le chiffre de recontact. Un seul chiffre qui s'améliore nettement pendant que les autres restent plats est une raison de regarder comment il est recueilli avant de se réjouir. Un centre détourné montre généralement les symptômes dans le recontact, les catégories répétées dans le volume et les plaintes en hausse.

## Compromis : avantages et inconvénients

| Choix | Avantage | Coût ou risque |
| --- | --- | --- |
| Temps de traitement moyen comme chiffre vedette | Simple, disponible sur toutes les plateformes, facile à expliquer | Récompense la précipitation, cache la queue et invite à des objectifs qui abîment la résolution |
| Médiane et 85e percentile pour les temps | Décrit le cas typique et la queue lente | Demande assez de contacts pour être stable et un peu plus d'explications |
| Résolution au premier contact par indicateur de clôture de l'agent | Facile à recueillir | Facile à gonfler et difficile à comparer entre centres |
| Résolution au premier contact par fenêtre de recontact | Difficile à détourner et plus proche de l'expérience de l'utilisateur | Demande une bonne liaison dans l'outil et attend la fin de la fenêtre avant de pouvoir être rapportée |
| Abandon avec délai de grâce | Supprime les raccrochages accidentels | Le délai de grâce peut être étiré pour flatter le chiffre |
| Taux de contacts pour 100 utilisateurs | Sépare la croissance des ennuis | Dépend d'un nombre d'utilisateurs fiable et d'une définition claire d'« actif » |
| Enquête après contact | Capte ce que les horloges ne peuvent pas | Taux de réponse faibles et inégaux, et biais en faveur des utilisateurs aux sentiments forts |
| Rapport par équipe et par file seulement | Protège la confiance et se concentre sur le système | Donne moins de détail pour le coaching individuel, qui demande un processus différent et privé |

Aucun ensemble de mesures ne supprime la tension entre vitesse et soin. Un centre qui répond à chaque contact en quelques secondes et résout peu a une bonne file et un mauvais service, et un centre qui prend le temps de résoudre correctement montrera des temps de traitement et d'attente plus longs. La voie est de convenir du résultat qui compte le plus ce trimestre, de rendre l'arbitrage explicite et de revoir le couple de métriques qui le tient en équilibre. Plus vite n'est mieux que tant que la résolution tient.

## Questions à discuter avec votre équipe

**1. Que signifie un « contact » ici, et notre décompte correspond-il à ce que rapportent chacun la plateforme de téléphonie et l'outil ITSM ?**
Demandez au groupe de suivre une journée de contacts à travers chaque canal et de comparer les décomptes des deux systèmes. Notez les contacts qui ne deviennent jamais des tickets et les tickets qui ne commencent jamais comme contacts. Un animateur doit s'attendre à un écart au début et le traiter comme un constat sur les définitions, non comme une faute des personnes. Convenez d'une règle pour le prochain rapport et de qui en est responsable.

**2. Quand nous disons qu'un contact a été résolu au premier contact, comment savons-nous que l'utilisateur serait d'accord ?**
Passez en revue dix contacts récents marqués comme résolutions au premier contact et vérifiez si certains utilisateurs sont revenus sur le même sujet. Demandez ce que l'agent aurait pu faire autrement pour ceux qui l'ont fait. La discussion montre généralement où la clôture a lieu avant que l'utilisateur soit prêt. Décidez s'il faut ajouter une confirmation en une question et quelle doit être la fenêtre de recontact.

**3. Qu'arrive-t-il à la personne en attente, et à partir de quand renonce-t-elle ?**
Regardez la courbe d'abandon selon le temps attendu. La plupart des centres trouvent un point au-delà duquel les gens partent en masse, et ce point est la limite pratique de la file. Demandez quelles réponses de rappel, de discussion ou automatisées sont proposées, et si certaines sont comptées comme traitées alors que le problème n'est pas résolu. L'animateur peut s'en servir pour ouvrir une discussion sur la dotation par heure, non par mois.

**4. Lesquels de nos chiffres de temps de traitement changeraient si nous prêtions attention au travail après contact et à l'attente ?**
Listez ce que l'horloge inclut et ce qu'elle laisse de côté. Demandez si quelqu'un a ressenti une pression pour raccourcir les appels, et ce qu'il a fait. Cette question est plus facile à traiter en équipe que dans un rapport : donnez donc aux gens la possibilité de parler sans attribution. Convenez d'une définition et de la question de savoir si le temps de traitement ne servira qu'à la planification.

**5. Quelles cinq catégories ont généré le plus de contacts pour 100 utilisateurs le trimestre dernier, et qui détient la correction de chacune ?**
Apportez à la même table les données par catégorie et les responsables des services sous-jacents. Pour chaque catégorie, demandez si la meilleure réponse est une correction, un article, un meilleur message ou une voie de libre-service. Le but est de repartir avec des éléments dans un backlog et des responsables nommés. Revoyez la liste le trimestre suivant pour voir lesquelles ont bougé.

**6. Rapportons-nous cela au niveau de l'équipe et de la file, et quelqu'un s'en sert-il pour comparer des individus ?**
Demandez directement au groupe si l'un de ces chiffres a servi à juger une personne, et quel en a été l'effet. Discutez de ce que le centre cesserait de faire si la comparaison individuelle prenait fin, et de ce qu'il commencerait à faire. L'animateur doit consigner les exemples et les apporter au responsable des métriques pour une décision sur la politique. Le but est un engagement écrit que les données décrivent le système.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison obtiennent du centre la meilleure vue de leur propre service. Les contacts pour 100 utilisateurs après une version montrent rapidement si un changement a dérouté les gens, et les catégories montrent quoi corriger ensuite. Les équipes doivent s'attendre à une revue mensuelle des principales catégories et les traiter comme une entrée du backlog, sans blâmer le centre de rapporter ce que lui disent les utilisateurs. Demandez au centre des échantillons de contacts autant que des décomptes, parce que les mots employés par les utilisateurs révèlent souvent un problème d'étiquetage ou de conception.

### Équipes de service et d'exploitation

Le personnel du centre et ses responsables ont besoin de chiffres qui les aident à planifier et à s'améliorer sans devenir des objectifs. La dotation par heure d'après les profils d'arrivée, les revues de recontact et les demandes d'articles sont les productions les plus utiles. Le personnel doit avoir son mot à dire sur la définition des métriques, parce qu'il sait où les horloges trompent. Il doit voir d'abord les chiffres de sa propre équipe et pouvoir les contester.

### Direction et gouvernance

Les dirigeants ont besoin d'un court ensemble de chiffres qui s'accordent entre eux : volume et taux de contacts, temps de réponse et abandon, résolution au premier contact et recontact, et un score de satisfaction des utilisateurs avec son taux de réponse. Ils doivent demander des distributions et des notes sur les changements de définition, et résister à l'envie de fixer un objectif unique sur le temps de traitement ou sur le volume. Les objectifs sur la seule vitesse invitent au détournement décrit plus haut. La gouvernance doit consigner qui détient chaque définition (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Clients et utilisateurs

Les utilisateurs se soucient de savoir s'ils ont été joints, s'ils ont été bien traités et si le problème est resté corrigé. Ils ne se soucient pas du temps de traitement. Leur dire ce que le centre mesure et agir sur leurs retours construit la confiance, tout comme s'assurer que les canaux qu'ils préfèrent sont mesurés et dotés en personnel. Les clients qui achètent le service sont bien servis par des engagements clairs dans un SLA ou un accord de niveau d'expérience (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA, et le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un centre de services d'une douzaine de personnes pour environ 4 000 utilisateurs cliniques et administratifs. Les chiffres ci-dessous sont illustratifs et ne proviennent d'aucune organisation réelle.

La vue hebdomadaire de l'équipe montre 1 900 contacts (illustratif), soit un taux de contacts de 47,5 contacts pour 100 utilisateurs (illustratif). Le temps de réponse au téléphone a une médiane de 40 secondes et un 85e percentile de 6 minutes (illustratif). L'abandon est de 14 % (illustratif) et monte fortement les matins de semaine entre 8 h et 9 h 30. Le temps de traitement médian est de 7 minutes, et le 85e percentile de 22 minutes (illustratif). La résolution au premier contact par fenêtre de recontact est de 61 % (illustratif), et le taux de recontact à sept jours de 19 % (illustratif).

À la revue mensuelle, le responsable du centre et l'équipe des applications cliniques regardent les catégories. Les problèmes de connexion et de badge représentent une grande part des contacts du matin, et un récent changement de la connexion à l'application clinique a produit un pic de contacts sur le même message d'erreur. Le centre et l'équipe des applications décident de faire trois choses. Ils changeront le message d'erreur et ajouteront un lien vers l'article, ils ajouteront une option de rappel pour la pointe du matin et ils avanceront d'une heure le début d'un poste pour couvrir le profil d'arrivée de 8 h. Ils revoiront l'abandon, le recontact et le taux de contacts pour cette catégorie après quatre semaines.

En cours de trimestre, un responsable propose un objectif de temps de traitement de 5 minutes pour réduire la file. L'équipe montre que les contacts au 85e percentile sont les lents qui comptent le plus et qu'un objectif pousserait les agents à terminer les appels trop tôt. Elle remarque aussi que le chiffre de résolution au premier contact est monté à 78 % (illustratif) en une semaine pendant que le taux de recontact montait à 27 % (illustratif). Une revue révèle que quelques postes avaient commencé à clore les tickets pendant l'appel avec une note disant à l'utilisateur de rappeler, ce qui comptait comme une résolution au premier contact. L'équipe rétablit la définition fondée sur le recontact, ajoute la question de confirmation de l'utilisateur et abandonne l'objectif de temps de traitement. L'abandon, le temps de réponse et le recontact sont rapportés ensemble à partir de là.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les retours du centre comme une entrée pour l'amélioration continue : une revue régulière avec les parties prenantes des principales raisons de contact et un changement pour supprimer une cause. La précaution est que des objectifs de temps de traitement poussent les agents à se précipiter : gardez-les donc hors des évaluations individuelles.

### IA

Le triage par IA et les réponses rédigées peuvent réduire le temps de réponse et le temps de traitement tout en changeant ce qui parvient à un humain, de sorte que les contacts restants sont plus difficiles et que les moyennes trompent. Appariez la vitesse avec le taux de recontact et la part des réponses rédigées par l'IA qu'un agent a modifiées de façon importante. La précaution est qu'un agent virtuel qui clôt une conversation n'est pas un problème résolu : comptez donc les contacts qui reviennent.

### Automatisation

Recueillez automatiquement les événements de contact, de file et de statut à partir des systèmes de téléphonie et de tickets, et mesurez l'automatisation du routage sur les erreurs d'aiguillage et sur les contacts qui rebondissent entre files. La précaution est que la catégorisation automatique dérive : échantillonnez donc des tickets pour vérifier que la catégorie était la bonne.

### Analytique

Utilisez des percentiles pour le temps de réponse, montrez le nombre de contacts derrière chaque taux et ventilez les raisons de contact pour que la décision soit de savoir quelle cause supprimer. La précaution est que les petites files produisent des pourcentages bruités : montrez donc des intervalles ou des décomptes pour les services à faible volume.

## Éclairage sectoriel

**Startup.** Le centre est souvent une boîte partagée ou un canal de discussion traité par qui est libre. Comptez les contacts par canal, étiquetez la catégorie et regardez les cinq premières chaque mois avec les personnes qui construisent le produit. N'achetez pas de plateforme de centre d'appels avant que le volume ne la justifie, et ne fixez pas d'objectifs de vitesse quand deux personnes répondent à tous les contacts.

**Petite entreprise.** Une personne ou un prestataire externe exploite généralement un centre de services hébergé. Utilisez les rapports standard de l'outil, demandez par écrit au fournisseur ses définitions de contact, de résolution et d'abandon, et exportez de temps en temps les données brutes. Une courte question récurrente aux utilisateurs, comme « votre problème a-t-il été résolu ? », apporte plus d'éclairage qu'un long tableau de bord.

**Grande entreprise.** De nombreuses files, langues, outils et fournisseurs mènent à des définitions différentes du même mot. Convenez d'une définition partagée du contact, de la résolution au premier contact et du recontact, ainsi que d'un ensemble commun de canaux. Rapportez par file et par service, avec une vue standard pour la direction, et utilisez les données de gestion des effectifs pour doter selon les profils d'arrivée. Ne comparez les files qu'après avoir vérifié qu'elles utilisent les mêmes définitions.

**Gouvernement et secteur public.** Les enregistrements peuvent avoir des obligations de conservation, d'accès, d'audit et de protection de la vie privée, et un contrat peut fixer les métriques et les objectifs d'un centre externalisé. Lisez les métriques du contrat d'un œil critique et ajoutez les mesures garde-fous aux rapports même si elles ne sont pas exigées. Gardez la piste d'audit des changements de définition et évitez de recueillir des données personnelles inutiles. Les services publics servent souvent des utilisateurs au choix de canal limité : l'accessibilité de chaque canal fait donc partie du tableau (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation de meilleures métriques de centre est un service moins cher et meilleur, et le rendement se trouve à trois endroits. D'abord, moins de contacts répétés : chaque recontact est un travail que le centre n'avait pas besoin de faire et un temps que l'utilisateur ne voulait pas passer. Ensuite, des corrections en amont : les données de catégories du centre peuvent supprimer des classes entières de contacts quand les équipes de livraison agissent dessus. Enfin, une meilleure dotation : les données de profils d'arrivée permettent aux responsables de placer les gens quand les utilisateurs en ont besoin, ce qui réduit à la fois l'abandon et le temps mort.

Le coût de recueil est modeste là où la plateforme de téléphonie et l'outil ITSM enregistrent déjà les événements. Les principaux coûts sont le temps de convenir des définitions, de corriger la liaison entre contacts et tickets, d'ajouter une courte question après contact et de revoir les données avec les équipes de livraison.

Aucun chiffre de rendement n'est offert ici, parce que les chiffres publiés varient selon l'organisation et sa méthode, et qu'aucun n'a été vérifié pour ce sujet. Estimez le rendement à partir de vos propres données. Prenez le nombre de recontacts et un temps de traitement mesuré, multipliez par le coût d'une heure d'agent et comparez au coût de la correction. Décrivez le résultat comme une estimation avec ses hypothèses, et revoyez-la après le changement (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Viser le temps de traitement moyen.** Cela récompense la précipitation et les transferts prématurés. Utilisez la distribution par type de contact pour planifier, et appariez-la avec la résolution au premier contact et le recontact.
- **Compter un indicateur de clôture posé par l'agent comme résolution au premier contact.** Il peut être posé quel que soit le résultat. Utilisez une fenêtre de recontact et une confirmation de l'utilisateur.
- **Classer les agents individuels.** Cela pousse à choisir les contacts faciles et à des comportements défensifs. Rapportez par équipe et par file, et gardez les conversations individuelles privées et bienveillantes.
- **Rapporter une moyenne tous canaux qui cache le canal le plus faible.** Le téléphone, la discussion et le courriel se comportent différemment. Rapportez chaque canal séparément avant de combiner.
- **Lire le volume sans dénominateur.** Une hausse peut être de la croissance. Montrez les contacts pour 100 utilisateurs et la répartition des catégories.
- **Laisser le centre hors des décisions de livraison.** Des décomptes remontés vers un tableau de bord et jamais discutés avec l'équipe produit sont gaspillés. Tenez une revue mensuelle des principales catégories avec leurs responsables.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chacun compte les contacts à sa façon | Quelques définitions sont écrites pour certaines files | Une définition écrite par métrique, y compris début et fin de l'horloge et exclusions | Changements de définition consignés et revus selon un calendrier | Définitions partagées avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Recueil et qualité des données | Décomptes assemblés à la main à partir d'exports | Données de téléphonie et d'ITSM rapportées séparément | Contacts et tickets reliés, avec capture automatisée sur tous les canaux | Liaison, complétude et réconciliation mesurées et suivies dans le temps | Données de contacts partagées entre équipes et fournisseurs par des interfaces convenues |
| Usage pour l'amélioration | Chiffres rapportés mais rarement discutés | Revue occasionnelle des périodes chargées | Revue mensuelle des principales catégories avec les responsables de service | Améliorations planifiées, financées et vérifiées face au recontact et au volume | Les données du centre pilotent les priorités de backlog entre équipes produit et fournisseurs |
| Garde-fous et confiance | Objectifs de vitesse appliqués aux individus | Une certaine conscience du détournement | Mesures appariées rapportées ensemble et aucun classement individuel | Contrôles de détournement audités par l'équipe et confirmation de l'utilisateur en usage | Utilisateurs et personnel aident à fixer les mesures et voient les résultats |

## Liste de vérification

- [ ] Les contacts et les tickets sont définis et comptés séparément, et les décomptes se réconcilient.
- [ ] Chaque canal a une horloge écrite pour le temps de réponse et une façon énoncée de traiter les réponses automatisées.
- [ ] Les mesures de temps sont rapportées comme la médiane et un percentile élevé avec la taille d'échantillon.
- [ ] L'abandon a un délai de grâce écrit et est montré avec le temps de réponse.
- [ ] La résolution au premier contact utilise une fenêtre de recontact et un sens énoncé de « le même sujet ».
- [ ] Une confirmation de l'utilisateur en une question est recueillie, avec son taux de réponse montré.
- [ ] Le taux de contacts pour 100 utilisateurs est rapporté, avec une définition écrite d'« utilisateur actif ».
- [ ] Aucun objectif de temps de traitement n'est fixé aux agents, et aucune métrique ne classe les individus.
- [ ] Les principales catégories de contacts sont revues chaque mois avec les équipes responsables, et les actions vont dans un backlog.
- [ ] Les définitions sont versionnées et chaque changement est daté.

## Prompts d'IA

**Rédigez des définitions précises pour les mesures de base du centre.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Passez en revue un ensemble de chiffres du centre pour y chercher des signes de détournement.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Préparez une revue mensuelle des principales catégories de contacts.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Concevez une courte enquête après contact.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit une métrique voisine et le garde-fou qui doit se trouver à côté d'une mesure du centre.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique appariée avec un vecteur de détournement et un garde-fou.

## Idées clés

- Comptez séparément les contacts et les tickets, définissez les deux et normalisez le volume par rapport à la taille de la base d'utilisateurs.
- Rapportez les temps comme la médiane et un percentile élevé, et dites sur combien de contacts repose chaque chiffre.
- Lisez la rapidité de réponse, l'abandon et le temps de traitement comme des signes d'effort, et appariez-les avec la résolution au premier contact et le recontact comme signes de résultat.
- Définissez la résolution au premier contact par le fait que l'utilisateur revient ou non, et confirmez-la par une vérification en une question.
- Utilisez le centre comme un capteur : revoyez chaque mois les principales catégories avec les équipes qui détiennent les services.
- Mesurez des files, des canaux et des services, et ne classez jamais les agents individuels.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
