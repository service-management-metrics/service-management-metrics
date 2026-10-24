# Métriques DORA

**Les métriques DORA décrivent la rapidité et la sûreté avec lesquelles les changements logiciels d'une équipe parviennent en production : lisez donc ensemble les mesures de vitesse et de stabilité, calculez-les à partir des événements de la chaîne et des incidents, et servez-vous-en pour ouvrir des conversations sur un système de livraison, jamais pour classer des équipes ou des personnes.**

## Vue d'ensemble et motivation

Les métriques DORA viennent du programme de recherche de [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), une étude de longue durée sur la façon dont les pratiques de livraison de logiciels se rapportent aux résultats des équipes et des organisations. Nicole Forsgren, Jez Humble et Gene Kim ont présenté les premiers résultats dans le livre [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) en 2018, et le programme s'est poursuivi chez Google Cloud avec un rapport annuel. La recherche demandait quels aspects mesurables de la livraison prédisent de bons résultats, et a retenu un petit ensemble de mesures de performance de livraison de logiciels qui peuvent être calculées à partir de la chaîne de livraison et du registre des incidents.

En octobre 2026, le site web de DORA décrit cinq métriques de performance de livraison de logiciels, réparties en deux groupes. Trois décrivent le **débit**, c'est-à-dire la rapidité avec laquelle les changements avancent : le délai de livraison des changements, la fréquence de déploiement et le temps de rétablissement après un déploiement en échec. Deux décrivent l'**instabilité**, c'est-à-dire la fréquence à laquelle une version cause des ennuis : le taux d'échec des changements et le taux de reprise des déploiements. Des publications antérieures décrivaient quatre métriques, avec le « temps de rétablissement du service » à la place du temps de rétablissement après un déploiement en échec et sans le taux de reprise. Les définitions ont été affinées au fil des ans : indiquez donc toujours quelle édition des recommandations vous suivez et la date de votre dernière vérification.

Le résultat de recherche qui a rendu ces métriques célèbres est que la vitesse et la stabilité tendent à évoluer ensemble d'une équipe à l'autre. Les équipes qui déployaient souvent et avaient des délais courts ne payaient pas cela, en moyenne, par plus d'échecs. Cela renverse l'ancienne hypothèse selon laquelle aller plus vite signifie casser plus. C'est un schéma dans les données d'enquête et de chaîne, pas une loi, et il vaut pour les équipes qui ont investi dans des pratiques comme la [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery), les petits lots, les tests automatisés et le retour rapide. Les métriques sont des signaux de ces capacités sous-jacentes. Elles ne sont pas les capacités elles-mêmes.

Les termes ci-dessous reviennent dans ce sujet.

- Un **déploiement** est l'acte de mettre une version du logiciel dans un environnement donné. Ce sujet entend la production sauf indication contraire.
- Un **changement** est un ensemble de modifications du logiciel, couramment un ou plusieurs commits qui partent ensemble. Dans ITIL 4, le mot a un sens plus large, couvrant tout ajout, toute modification ou tout retrait qui pourrait affecter les services, et la pratique [ITIL](https://en.wikipedia.org/wiki/ITIL) qui le gouverne est la maîtrise des changements.
- Un **déploiement en échec** est un déploiement qui cause un service dégradé ou une panne en production et demande une remédiation, comme un correctif urgent, un retour arrière ou un correctif. Votre équipe écrit la règle exacte, car la recherche la laisse à la définition locale.
- Un **retour arrière** est l'acte de ramener la production à la dernière version saine connue.
- Un **percentile** est une valeur en dessous de laquelle tombe une part donnée des observations. Le 85e percentile du délai de livraison est le chiffre que 85 % des changements battent.

Les visions agile et ITIL se rencontrent sur ce terrain. Une équipe agile voit ces chiffres comme un retour sur sa pratique d'ingénierie et ses accords de travail. Un praticien ITIL les voit comme des preuves de résultat pour la maîtrise des changements, la gestion des versions, la gestion des déploiements et la gestion des incidents. La tension porte généralement sur le contrôle. Un comité consultatif des changements traditionnel tente de réduire l'échec en inspectant chaque changement avant son départ. La recherche DORA a constaté qu'une lourde approbation externe n'était pas associée à une meilleure stabilité, alors que la revue par les pairs, les tests automatisés et les petits changements l'étaient. Dans ITIL 4, la maîtrise des changements en tient compte en distinguant les changements standard, normaux et d'urgence et en laissant les changements à faible risque être préautorisés (voir le sujet 4.3, Métriques de maîtrise des changements).

Les métriques ont aussi des limites que la recherche énonce elle-même, et les conseils pratiques de ce sujet s'y appuient. Elles décrivent un système de livraison pour une application ou un service, elles sont destinées aux conversations d'amélioration et elles ne disent rien de la valeur du travail livré. Une équipe peut afficher d'excellents chiffres en livrant la mauvaise chose. Pour cette raison, ce sujet se place à côté, et non au-dessus, des mesures de flux (voir le sujet 2.1, Mesures de flux), des mesures de fiabilité du service (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et des mesures de résultat (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

Enfin, les métriques invitent la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) dès qu'elles apparaissent sur un tableau de bord de direction. La fréquence de déploiement est la plus facile à gonfler et les décomptes de déploiements en échec sont les plus faciles à cacher. Chaque recommandation ci-dessous apparie donc une mesure avec un contrôle de la façon dont elle pourrait être faussée (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Calculez à partir d'événements, pas de souvenirs.** Les déploiements viennent de la chaîne, les échecs et rétablissements du registre des incidents, et le délai de livraison de la gestion de versions jointe à la chaîne (voir le sujet 1.5, Sources de données et instrumentation).
- **Lisez la vitesse et la stabilité comme un seul tableau.** Une équipe rapide aux échecs croissants, ou une équipe stable qui ne livre que chaque trimestre, vous dit quelque chose que ni l'une ni l'autre moitié ne montre seule.
- **Mesurez un service ou une application, pas une personne.** L'unité d'analyse est un système de livraison. Les individus ne déploient pas seuls, et les classer détruit les données.
- **Comparez une équipe à son propre passé, pas à une autre équipe.** Le contexte diffère nettement entre un service de paiement, une plateforme de données et une application mobile, et la recherche elle-même met en garde contre l'usage des métriques comme classement.
- **Utilisez des distributions pour les temps.** Le délai de livraison et le temps de rétablissement ont de longues queues : rapportez donc la médiane et un percentile élevé (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Traitez les métriques comme des symptômes.** Quand un chiffre bouge, cherchez la cause dans les capacités qui le sous-tendent, comme la taille des lots, l'automatisation des tests, la pratique de revue et l'architecture, puis menez une expérience.
- **Écrivez les définitions.** L'échec, le déploiement et le « début du travail » sont des jugements. Consignez le choix et gardez-le stable pour que la tendance ait un sens.

## Définitions des métriques

Les cinq métriques ci-dessous suivent les recommandations de DORA en octobre 2026. Les formules énoncent les horloges et les exclusions que votre équipe doit écrire. Là où la recherche laisse une frontière ouverte, le tableau montre une valeur par défaut raisonnable et les recommandations expliquent le choix.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison des changements | Temps pour qu'un changement validé parvienne en production | L'horloge démarre au premier commit du changement (ou à sa fusion dans la branche principale, si la définition l'indique) et s'arrête quand le déploiement en production se termine avec succès ; rapporter la médiane et le 85e percentile des changements déployés dans la période ; les changements jamais déployés sont exclus et rapportés à part comme travail en cours | Heures ou jours | Gestion de versions jointe à la chaîne de déploiement | Gestion des déploiements ; gestion des versions ; maîtrise des changements | Temps de cycle ; délai de livraison jusqu'à la production | Hebdomadaire ou par version, revue mensuelle |
| Fréquence de déploiement | Fréquence à laquelle une équipe déploie en production | Nombre de déploiements réussis en production de l'application dans la période / jours de la période ; les déploiements en échec ou annulés sont exclus du décompte des réussites ; les déploiements vers les environnements de test sont exclus | Déploiements par jour ou par semaine | Journal d'événements de la chaîne de déploiement | Gestion des déploiements ; gestion des versions | Livraison continue ; publication à la fin de chaque incrément | Hebdomadaire |
| Temps de rétablissement après un déploiement en échec | Temps pour se rétablir quand un déploiement cause une défaillance en production | L'horloge démarre quand la défaillance est détectée ou signalée (la même règle chaque fois) et s'arrête quand le service est rétabli pour les utilisateurs ; rapporter la médiane et le 85e percentile pour les déploiements en échec de la période ; les incidents non causés par un déploiement sont exclus | Minutes ou heures | Registre des incidents joint aux événements de déploiement et aux alertes de supervision | Gestion des incidents ; gestion de la continuité de service | Temps de rétablissement ; travail de restauration | Par défaillance, revue mensuelle |
| Taux d'échec des changements | Part des déploiements en production qui causent une défaillance nécessitant une remédiation | Déploiements ayant exigé un correctif urgent, un retour arrière, un correctif ou une réponse à incident / tous les déploiements en production de la période ; la règle qui relie une défaillance à son déploiement est écrite et appliquée de la même manière chaque fois | Pourcentage | Événements de déploiement joints aux incidents, retours arrière et déploiements de correctifs urgents | Maîtrise des changements ; gestion des incidents | Définition de terminé ; défauts échappés | Mensuelle |
| Taux de reprise des déploiements | Part des déploiements en production qui étaient non planifiés et faits pour corriger un problème visible des utilisateurs | Déploiements non planifiés faits en réponse à un problème de production / tous les déploiements en production de la période ; les déploiements planifiés qui contiennent par hasard une correction sont exclus ; la règle de « non planifié » est écrite | Pourcentage | Journal de la chaîne étiqueté par motif de déploiement, relié aux enregistrements d'incidents ou de défauts | Maîtrise des changements ; gestion des problèmes | Travail non planifié ; correction de bogue publiée hors plan | Mensuelle |

Deux remarques sur le tableau. Premièrement, le taux d'échec des changements et le taux de reprise des déploiements se recoupent sans être la même chose : une défaillance que l'équipe remarque et annule par retour arrière sans nouveau déploiement compte dans le taux d'échec des changements mais pas dans le taux de reprise, alors qu'une correction planifiée que l'équipe programme ne compte dans aucun des deux. Deuxièmement, la recherche traite le **déploiement** comme l'unité et compte par application : une plateforme de cinquante services a donc cinquante jeux de chiffres, non un seul.

## Recommandations

### Commencer par les définitions et les horloges

**1. Rédigez une définition d'une page pour chaque métrique avant de la tracer.** Énoncez ce qui compte comme un déploiement, quel environnement est la production, où l'horloge démarre pour le délai de livraison et comment une défaillance est reliée à un déploiement. Mettez la page dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Une définition qui ne vit que dans la tête de quelqu'un dérivera dès que l'outil ou l'équipe changera.

**2. Choisissez un début pour le délai de livraison et tenez-vous-y.** Les choix les plus courants sont le premier commit du changement, la fusion dans la branche principale et la création d'un ticket. Le premier commit mesure le système de livraison et ignore le temps où le travail est resté dans un backlog. Le début au ticket mesure davantage de l'attente du client mais y mêle la priorisation (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Utilisez-en un de façon constante et dites lequel sur chaque graphique.

**3. Attribuez les échecs selon une règle énoncée.** Une défaillance appartient à un déploiement quand, par exemple, un incident s'ouvre dans une fenêtre donnée après le déploiement et que son analyse de cause pointe ce changement, ou quand un retour arrière ou un correctif urgent lui est associé. Choisissez une règle que les gens peuvent appliquer sans dispute, revoyez un échantillon de cas chaque trimestre et gardez la règle la même assez longtemps pour voir une tendance.

### Instrumenter à partir de la chaîne

**4. Prenez les événements de déploiement dans la chaîne, pas dans un tableur.** Un système de [CI/CD](https://en.wikipedia.org/wiki/CI/CD) qui enregistre chaque déploiement en production avec un horodatage, une version et un résultat vous donne la fréquence de déploiement et l'arrêt de l'horloge du délai de livraison sans saisie humaine. Les décomptes saisis à la main sont tardifs et incohérents, et ils invitent aux problèmes d'antidatage décrits dans le sujet 1.5, Sources de données et instrumentation. Le projet libre Four Keys de l'équipe DORA est un exemple concret de recueil de ces événements, mais toute chaîne équivalente de votre cru fera l'affaire.

**5. Joignez le registre des incidents aux déploiements.** Les mesures d'échec et de rétablissement ont besoin de deux sources : le journal des déploiements et l'outil d'incidents. Ajoutez au registre des incidents un champ « causé par un déploiement » et l'identifiant du déploiement, rempli pendant la résolution et vérifié lors de l'analyse post-incident (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Sans la jointure, le taux d'échec des changements devient une conjecture.

**6. Étiquetez le motif de chaque déploiement.** Le taux de reprise a besoin de séparer les déploiements planifiés des corrections non planifiées. Une simple étiquette sur l'exécution de la chaîne, comme « changement planifié » ou « correction d'un problème de production », suffit. Gardez la liste d'étiquettes courte pour que les gens n'aient pas à réfléchir sous pression.

### Rapporter les chiffres honnêtement

**7. Rapportez des distributions et des décomptes, pas une moyenne unique.** Montrez la médiane et le 85e percentile du délai de livraison et du temps de rétablissement, avec le nombre d'observations derrière chacun. Une semaine avec deux déploiements et une défaillance a un taux d'échec des changements de 50 % qui ne signifie pas grand-chose : montrez donc les décomptes à côté du pourcentage et préférez une fenêtre plus longue pour les taux (voir le sujet 1.6, Culture statistique pour les métriques de service).

**8. Montrez côte à côte les groupes de débit et d'instabilité.** Mettez sur une même vue les trois métriques de débit et les deux d'instabilité, par service, avec la tendance sur au moins un trimestre. Ne publiez jamais la fréquence de déploiement sans les mesures d'échec à côté. Si un dirigeant demande un seul chiffre, expliquez qu'il n'existe pas de score DORA unique, et proposez la vue en deux groupes à la place.

**9. Gardez les comparaisons dans l'historique propre d'une équipe.** Une équipe qui fait passer son délai de livraison médian de neuf jours à cinq a appris quelque chose. La classer face à une autre équipe d'architecture, de charge réglementaire ou de train de publication différents prouve peu de choses, et apprend aux deux équipes à protéger leurs chiffres. Quand vous devez consolider pour la gouvernance, montrez la dispersion entre services et la tendance d'amélioration, pas un classement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### Améliorer le système que les chiffres décrivent

**10. Réduisez d'abord la taille des lots.** Les petits changements raccourcissent le délai de livraison, rendent les défaillances plus faciles à diagnostiquer et abaissent le coût d'un retour arrière. Les techniques comprennent les [interrupteurs de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle), le travail sur tronc et le découpage du travail pour que chaque incrément puisse partir seul (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code). Suivez la taille médiane des changements à côté du délai de livraison pour voir si le lot rétrécit réellement.

**11. Investissez dans la détection rapide et le retour arrière rapide.** Le temps de rétablissement baisse quand l'équipe peut voir une défaillance en quelques minutes, et quand elle peut [revenir en arrière](https://en.wikipedia.org/wiki/Rollback_(data_management)) ou désactiver un changement sans nouvelle construction. Une [version canari](https://en.wikipedia.org/wiki/Canary_release), un interrupteur de fonctionnalité et un retour arrière automatisé raccourcissent chacun l'intervalle entre la défaillance et le rétablissement. Mesurez séparément le temps entre le déploiement et la détection, car une détection lente se cache dans un chiffre de temps de rétablissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

**12. Servez-vous des chiffres pour choisir une capacité à améliorer.** Choisissez une métrique faible, demandez pourquoi elle est faible et sélectionnez dans la liste de capacités de la recherche une pratique qui s'attaque à la cause, comme l'automatisation des tests, une architecture faiblement couplée ou une approbation de changement légère. Menez le changement pendant un trimestre et regardez la tendance. Appariez l'expérience avec un sujet de rétrospective pour que l'équipe s'approprie l'amélioration (voir le sujet 9.5, Métriques d'amélioration continue).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai de livraison des changements | Reculer le début de l'horloge, par exemple en démarrant à la fusion au lieu du premier commit ; fusionner tôt dans une branche de longue durée ; exclure les changements difficiles comme « pas du code » ; faire passer des changements triviaux par la chaîne pour tirer la médiane vers le bas | Percentile et âge du travail en cours ; début d'horloge écrit et fixe ; échantillon des 10 % de changements les plus lents chaque trimestre ; distribution des tailles de changements |
| Fréquence de déploiement | Scinder un changement en nombreux déploiements triviaux ; redéployer des constructions inchangées ; compter les déploiements vers l'environnement de préproduction ou les changements de configuration vides | Taille de changement par déploiement ; part des déploiements contenant un changement visible des utilisateurs ; taux d'échec des changements et taux de reprise à côté |
| Temps de rétablissement après un déploiement en échec | Démarrer l'horloge tard ou clore les incidents tôt ; reclasser une défaillance en nouvel incident après un correctif partiel ; relever le seuil de gravité de « défaillance » | Récurrence du même incident dans une fenêtre donnée ; début de l'horloge tiré des alertes de supervision ; durée d'impact signalée par les clients |
| Taux d'échec des changements | Ne pas relier les incidents aux déploiements ; ne compter que les défaillances causant une panne complète ; élargir la fenêtre pour que les défaillances tombent dehors ; corriger en avant et appeler cela un nouveau changement | Revoir chaque trimestre un échantillon d'incidents face au journal des déploiements ; suivre la proportion d'incidents avec un lien de déploiement consigné ; taux de reprise des déploiements |
| Taux de reprise des déploiements | Étiqueter des corrections comme du travail planifié ; regrouper une correction dans une version programmée ; éviter les déploiements de correction en retardant la correction | Décomptes de défauts et de défauts échappés tirés du gestionnaire ; âge des défauts de production ouverts ; audit des étiquettes sur un échantillon de déploiements |

Une lecture saine montre un délai de livraison et un temps de rétablissement qui diminuent ou restent stables à un bas niveau, une fréquence de déploiement stable ou en hausse avec de petits changements, et des taux d'échec et de reprise plats ou en baisse, avec des décomptes assez grands pour qu'on s'y fie. Les lectures suspectes comprennent un saut soudain de la fréquence de déploiement sans changement du travail, un taux d'échec qui tombe à zéro en un mois et un temps de rétablissement qui baisse alors que les plaintes des clients restent les mêmes. Chacune appelle un examen de l'instrument avant une célébration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Utiliser les cinq métriques DORA par service | Fondée sur la recherche, équilibre vitesse et stabilité, calculée à partir d'événements objectifs | Demande une chaîne et un registre d'incidents qui se joignent proprement ; muette sur la valeur du travail |
| Ne rapporter que la fréquence de déploiement et le délai de livraison | Facile à recueillir depuis la chaîne | Récompense la seule vitesse et invite précisément au détournement que les mesures de stabilité attrapent |
| Utiliser des définitions locales par équipe | S'ajuste à l'architecture et au style de publication de l'équipe | Les équipes ne sont pas comparables et les consolidations sont peu fiables |
| Utiliser une définition unique pour toute l'organisation | Rapports cohérents ; gouvernance simple | S'ajuste mal à certains systèmes, comme les mainframes à fenêtres de traitement par lots ou les publications réglementées |
| Comparer les équipes à des bandes de performance publiées | Donne aux dirigeants une idée rapide de leur position | Ignore le contexte, et la recherche prévient que les bandes ne sont pas des objectifs pour chaque équipe |
| Utiliser les métriques pour l'amélioration autonome de l'équipe | Construit l'appropriation ; soutient des données honnêtes | Offre moins de confort aux dirigeants qui veulent un score unique |

La tension centrale est entre comparabilité et honnêteté. Plus un chiffre sert à juger des équipes, plus les données se tordent, et moins il aide l'équipe qui le détient. Servez-vous des métriques d'abord pour soutenir l'amélioration, acceptez une comparabilité imparfaite et limitez les vues au niveau de la direction aux tendances et à la dispersion. Là où un rapport réglementé exige une définition standard, documentez-la et gardez la vue d'amélioration de l'équipe séparée.

## Questions à discuter avec votre équipe

**1. Lesquels de nos cinq chiffres DORA viennent d'événements, et lesquels du souvenir de quelqu'un ?**
Retracez chaque métrique jusqu'à sa source. Notez où une personne saisit une date ou décide si quelque chose compte comme une défaillance. L'animateur doit aider le groupe à classer les étapes manuelles selon la déformation qu'elles pourraient causer au chiffre, et à convenir de celle à automatiser en premier.

**2. Où exactement notre horloge de délai de livraison démarre-t-elle et s'arrête-t-elle, et tout le monde est-il d'accord ?**
Demandez à trois personnes de décrire le début et la fin de l'horloge pour le dernier changement livré. Comparez les réponses. Les différences apparaissent généralement autour du premier commit, de la fusion, d'un ticket et de l'étape d'approbation. Convenez d'une définition unique et écrivez-la, et discutez du temps d'attente que la définition choisie cache.

**3. Qu'est-ce qui compte pour nous comme un déploiement en échec, et qui en décide ?**
Parcourez les cinq derniers incidents de production et demandez si chacun appartient à un déploiement. Les désaccords montrent où la règle est floue. Discutez de ce qui arrive à une défaillance corrigée par un changement de configuration, un retour arrière ou un correctif rapide, et décidez comment chacune est consignée.

**4. Si la fréquence de déploiement doublait le trimestre prochain, que vérifierions-nous avant d'y voir une bonne nouvelle ?**
Invitez le groupe à nommer les façons dont le chiffre pourrait monter sans livrer plus de valeur. Regardez la taille des changements, la part des déploiements avec un changement visible des utilisateurs et les taux d'échec et de reprise. L'animateur doit noter quels contrôles existent déjà sur le tableau de bord et lesquels sont à ajouter.

**5. Comment ces chiffres sont-ils utilisés par des personnes extérieures à l'équipe ?**
Demandez qui les voit, sous quelle forme, et ce qu'on en fait. Soyez attentif aux comparaisons avec d'autres équipes, aux objectifs fixés de l'extérieur et à l'usage dans les évaluations individuelles. Discutez de ce que l'équipe aurait besoin de voir changer dans cet usage avant de pouvoir se fier à ses propres données, et de qui a l'autorité de faire ce changement.

**6. Quelle capacité unique améliorerait le plus notre chiffre le plus faible, et quelle petite expérience essayer ?**
Choisissez la métrique la plus faible et discutez de ses causes probables, comme de gros lots, une revue lente, des tests instables ou une étape de publication manuelle. Choisissez une cause et concevez une expérience de quatre à six semaines avec un moyen d'en voir l'effet. Convenez d'une date pour revoir le résultat et de qui apportera les données.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent les capacités qui pilotent ces chiffres : petits changements, tests automatisés, chaîne rapide et habitude de se relire mutuellement. Elles doivent se servir des métriques comme d'un miroir de leur propre pratique d'ingénierie, fixer leurs propres objectifs d'amélioration et résister à la pression de remonter un chiffre unique. Elles décident aussi des définitions, et ont donc le devoir de les garder honnêtes (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent le registre des incidents dont dépendent les mesures d'échec et de rétablissement. Elles aident l'équipe de livraison en étiquetant les incidents avec le déploiement qui les a causés, en fournissant une supervision qui détecte vite les défaillances et en se joignant à la revue de chaque déploiement en échec. Elles doivent veiller à ce que la rapidité de livraison n'achète pas une instabilité qu'elles absorbent en charge d'astreinte (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte), et demander les investissements de retour arrière et de détection qui réduisent le temps de rétablissement.

### Direction et gouvernance

Les dirigeants doivent demander des tendances et la dispersion entre services, les deux groupes de métriques ensemble, et les expériences d'amélioration qui les sous-tendent. Ils doivent éviter les objectifs qui verrouillent un chiffre, comme « déployer chaque jour », et éviter d'utiliser les métriques dans les évaluations individuelles. Les instances de gouvernance peuvent utiliser les chiffres comme preuve qu'un parcours d'approbation de changement plus léger est sûr, ou comme raison de le reconsidérer, en montrant si la stabilité est restée constante quand le processus a changé (voir le sujet 4.4, Échecs de changement et reprises).

### Clients et utilisateurs

Les clients se soucient rarement du nombre de déploiements. Ils se soucient de la rapidité avec laquelle une correction ou une fonctionnalité les atteint, de la rareté des versions qui cassent quelque chose dont ils dépendent et de la vitesse à laquelle le service revient quand cela arrive. Utilisez les métriques DORA comme preuve interne que ces résultats sont probables, et complétez-les par des mesures tournées vers les clients comme la disponibilité et la satisfaction (voir le sujet 5.3, Métriques de disponibilité, et le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite un service de paiement en caisse détenu par une équipe produit, soutenue par une équipe plateforme et le centre de services. Tous les chiffres ci-dessous sont illustratifs.

L'équipe déploie en production environ deux fois par semaine, avec un délai de livraison (du premier commit à la production) de 11 jours à la médiane et de 26 jours au 85e percentile. Au trimestre précédent, 6 déploiements sur 24 (25 %, illustratif) ont été suivis d'un retour arrière ou d'un incident. Le temps de rétablissement médian pour ces défaillances était de 3 heures. Le comité consultatif des changements se réunit chaque semaine et passe en revue tous les changements du service de paiement.

L'équipe propose un plan. Elle va scinder les gros changements, ajouter des vérifications automatisées dans la chaîne, mettre les nouveaux comportements derrière des interrupteurs de fonctionnalité et demander au comité de préautoriser comme changements standard les changements à faible risque qui passent les vérifications. La responsable des changements est méfiante : l'équipe convient donc de rapporter les cinq métriques chaque mois et d'arrêter l'expérience si le taux d'échec monte deux mois de suite.

Après un trimestre, les chiffres (illustratifs) sont de 19 déploiements par mois, un délai de livraison médian de 3 jours avec un 85e percentile de 8 jours, un taux d'échec des changements de 8 %, un temps de rétablissement médian de 40 minutes et un taux de reprise de 5 %. L'équipe est satisfaite, et un responsable régional demande de comparer la fréquence de déploiement de l'équipe de paiement à celle des autres équipes produit et de fixer un objectif commun.

Le chef d'équipe apporte à la revue la ventilation des reprises et des échecs et remarque un risque de détournement. La fréquence de déploiement a été aidée par un certain nombre de minuscules déploiements de configuration que la chaîne compte, et la taille médiane des changements rétrécit plus vite que le travail réel. Pire, deux incidents du mois dernier ont été corrigés par un changement de configuration que la chaîne a consigné comme un déploiement normal étiqueté « planifié », de sorte que le taux de reprise était sous-estimé. Le taux d'échec des changements paraissait bon en partie parce que ces deux incidents n'avaient pas été reliés à leurs déploiements d'origine.

La décision, consignée dans le journal des décisions, a quatre volets. Les déploiements de configuration seule sont comptés à part et montrés à côté du chiffre principal. L'étiquette de motif de déploiement est auditée chaque mois sur un échantillon de 10 déploiements. L'outil d'incidents exige désormais l'identifiant du déploiement quand la cause est un changement. Et l'équipe décline l'objectif commun de fréquence de déploiement, en offrant à la place une vue partagée qui montre la tendance de chaque service et son taux d'échec. La responsable des changements accepte de maintenir la préautorisation des changements standard, avec une revue à la fin du trimestre suivant.

## Agilité, IA, automatisation et analytique

### Agilité

Les métriques DORA décrivent la rapidité et la sûreté avec lesquelles les changements parviennent en production, ce qui est le cœur pratique de la livraison continue. Une bonne pratique est de lire ensemble les mesures de vitesse et de stabilité lors d'une revue régulière avec les parties prenantes et de choisir une amélioration. La précaution est que l'équipe peut gonfler la fréquence de déploiement en scindant les changements : surveillez donc la taille des changements et la reprise.

### IA

Le code assisté par l'IA peut faire monter le volume de changements et raccourcir le délai de livraison tout en augmentant la reprise ou les changements en échec. Rapportez les changements assistés par l'IA et les autres ensemble sur les mêmes mesures de stabilité, et comparez le temps de rétablissement après un déploiement en échec et le taux de reprise des déploiements avant et après l'adoption. La précaution est que la recherche DORA sur l'IA évolue : vérifiez donc les rapports publiés actuels avant de citer un constat.

### Automatisation

Calculez automatiquement les cinq mesures à partir des événements de la chaîne et des incidents, avec une règle claire de ce qui compte comme déploiement et comme défaillance. Mesurez la chaîne elle-même sur ses propres échecs et son instabilité. La précaution est que l'automatisation peut cacher des étapes manuelles hors de la chaîne, comme une approbation par courriel : cartographiez donc une fois le chemin réel.

### Analytique

Rapportez des distributions, pas seulement des moyennes, et comparez une équipe à son propre passé, non à d'autres équipes. La décision éclairée est où le système de livraison est lent ou fragile. La précaution est que les classements entre équipes encouragent le détournement, et que les chiffres dépendent des définitions locales d'un déploiement et d'une défaillance.

## Éclairage sectoriel

**Startup.** Une petite équipe déploie souvent plusieurs fois par jour et a des registres d'incidents minces : la fréquence de déploiement et le délai de livraison sont donc faciles, mais les données d'échec sont lacunaires. Commencez par étiqueter chaque retour arrière et chaque correctif urgent dans la chaîne, et par tenir un simple journal d'incidents avec l'identifiant du déploiement. Ne laissez pas une fréquence élevée vous convaincre que la stabilité est bonne sans vérifier le taux d'échec.

**Petite entreprise.** Une plateforme hébergée ou un développeur externe peut ne déployer que chaque mois, avec peu d'outillage. Comptez à la main ce que vous pouvez pendant quelques mois, demandez par écrit au fournisseur les dates de déploiement et d'incident, et concentrez-vous sur le délai de livraison et le taux d'échec. Servez-vous des chiffres pour décider si des changements plus petits livrés en continu réduiraient le risque, pas pour courir après une bande.

**Grande entreprise.** De nombreuses équipes, plusieurs styles de publication et un mélange de systèmes modernes et anciens rendent les définitions cohérentes difficiles. Convenez d'une définition minimale commune pour chaque métrique, publiez-la et permettez à une équipe d'en ajouter de plus strictes localement, avec un motif énoncé. Consolidez en montrant la dispersion et la tendance par service plutôt qu'une moyenne, et gardez le détail au niveau de l'équipe visible seulement de l'équipe responsable et de ses groupes de soutien.

**Gouvernement et secteur public.** Les fenêtres de publication, les règles d'audit et les contrats de passation de marchés façonnent le possible, et certains systèmes sont exploités par des fournisseurs. Incluez dans les contrats les droits sur les données de livraison et d'incidents pour que les métriques puissent être calculées. Servez-vous des chiffres comme preuve qu'un programme de modernisation raccourcit les délais sans relever les taux d'échec, et rapportez toutes les métriques ensemble pour que les résultats ne soient pas sélectionnés (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de raccourcir le temps entre une idée et son usage tout en gardant la production stable. Le coût du programme a trois parts : l'instrumentation (événements de la chaîne, étiquettes de déploiement et jointure des incidents), la routine de revue (un regard mensuel sur les tendances et un échantillon trimestriel de cas d'échec et de reprise) et le travail d'amélioration vers lequel pointent les chiffres, comme l'automatisation des tests ou une chaîne plus rapide. Les deux premières sont modestes. La troisième est là où se trouve la vraie dépense, et elle est consacrée à la capacité d'ingénierie, non à la mesure.

Le rendement vient de décisions que les chiffres facilitent. Une équipe peut montrer à un comité des changements que les petits changements sont sûrs, et ainsi retirer une étape d'approbation. Un groupe plateforme peut voir quels services ont des chaînes lentes ou un mauvais retour arrière et placer son investissement en conséquence. Une équipe d'exploitation peut plaider avec des données pour un meilleur outil de détection. Décrivez le rendement par des schémas que vous pouvez observer vous-même, comme le temps du commit à la production, la part des versions qui demandent une correction et la charge d'astreinte par version, avant et après un changement. Évitez de citer des chiffres de référence d'autres organisations comme rendement attendu, puisque votre contexte sera différent. Le coût total de possession est dominé par le temps des personnes : gardez donc l'ensemble de métriques petit et automatisez son recueil (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Traiter les métriques comme un tableau de score de performance des individus.** Cela brise la base de la recherche et corrompt les données. Rapportez uniquement au niveau du service et de l'équipe.
- **Fixer des objectifs comme « déployer chaque jour » ou « délai de livraison inférieur à un jour ».** L'objectif remplace le but. Fixez une direction d'amélioration et une expérience, et gardez le chiffre comme un signal.
- **Classer les équipes entre elles ou face à des bandes publiées.** Le contexte diffère et le détournement suit. Comparez une équipe à sa propre tendance, et n'utilisez les bandes que comme orientation lâche.
- **Rapporter la vitesse sans la stabilité.** Le couple est le but. Montrez toujours ensemble les groupes de débit et d'instabilité.
- **Laisser les définitions dériver.** L'échec, le déploiement et le début du délai de livraison changent discrètement avec l'outil. Consignez chaque changement de définition avec son motif, et marquez-le sur le graphique.
- **Compter les déploiements de n'importe quoi.** Les poussées de configuration, les publications vers l'environnement de test et les redéploiements de la même construction gonflent le décompte. Définissez un déploiement en production, et montrez les autres sortes à part.
- **Ignorer ce qui est livré.** De bons chiffres peuvent cacher un travail qui ne compte pas. Lisez-les à côté des mesures de flux et de résultat (voir le sujet 2.9, Travail opérationnel et travail non planifié).
- **Courir après la métrique au lieu de la capacité.** Le délai de livraison baisse le plus sûrement quand les lots rétrécissent et que les tests s'accélèrent. Améliorez la pratique et laissez le chiffre suivre.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Chacun définit différemment le déploiement et l'échec | Quelques équipes documentent leurs définitions | Une définition écrite par métrique, avec horloges et exclusions, dans le registre des métriques | Changements de définition consignés et marqués sur les graphiques ; échantillons vérifiés chaque trimestre | Définitions révisées conjointement avec les fournisseurs et la gouvernance quand elles cessent d'éclairer les décisions |
| Recueil des données | Décomptes assemblés à la main à partir des tickets | Données de chaîne pour certains services ; incidents reliés à la main | Déploiements, motifs et liens d'incidents capturés automatiquement pour la plupart des services | Qualité des données (taux de liens, audit des étiquettes) mesurée et suivie dans le temps | Événements partagés entre équipes et fournisseurs par des interfaces convenues |
| Usage des chiffres | Rapportés vers le haut comme un score unique | Les équipes regardent occasionnellement leurs propres graphiques | Groupes de débit et d'instabilité revus ensemble chaque mois par l'équipe responsable | Les tendances alimentent des expériences d'amélioration financées avec un garde-fou | Dispersion et tendances éclairent l'investissement plateforme et la politique de changement dans toute l'organisation |
| Garde-fous contre le détournement | Aucun | Prise de conscience informelle | Garde-fous associés listés pour chaque métrique | Garde-fous et échantillons revus, cas de détournement consignés | Garde-fous ajustés en continu à mesure que les équipes et les outils changent |

## Liste de vérification

- [ ] Les cinq métriques sont définies par écrit, avec horloges, exclusions, et la date et l'édition des recommandations DORA suivies.
- [ ] Les déploiements en production sont enregistrés par la chaîne avec un horodatage, une version et un résultat.
- [ ] Le début du délai de livraison (premier commit, fusion ou autre) est énoncé et appliqué de façon cohérente.
- [ ] Les incidents portent un champ pour le déploiement qui les a causés, rempli pendant la résolution.
- [ ] Chaque déploiement porte une étiquette de motif, et un échantillon est audité chaque mois.
- [ ] Les temps sont rapportés comme la médiane et un percentile élevé, avec les décomptes.
- [ ] Les métriques de débit et d'instabilité sont montrées ensemble pour chaque service.
- [ ] La taille des changements est suivie à côté de la fréquence de déploiement et du délai de livraison.
- [ ] Les chiffres ne sont pas utilisés dans les évaluations individuelles ni pour classer les équipes.
- [ ] Un responsable nommé revoit les métriques chaque mois et consigne tout changement de définition.
- [ ] Une expérience d'amélioration, liée à la métrique la plus faible, est en cours avec une date de revue.

## Prompts d'IA

**Rédigez un jeu de définitions d'une page pour les cinq métriques.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Vérifiez les risques de détournement d'un ensemble de métriques.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Analysez un export de données de déploiements et d'incidents.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planifiez une expérience d'amélioration.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins sur les changements, les versions et les incidents et le garde-fou qui doit se trouver à côté de chaque métrique DORA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version révisée de ce sujet garde cohérents ses horloges, ses vecteurs de détournement et ses renvois.

## Idées clés

- Les métriques DORA sont cinq mesures de la livraison de logiciels, trois de débit et deux d'instabilité, et elles sont plus utiles lues ensemble pour un même service.
- Calculez-les à partir des événements de la chaîne et des incidents avec des définitions écrites, car l'échec et le début du délai de livraison sont des jugements.
- Servez-vous-en pour apprendre sur un système de livraison et comparer une équipe à son propre historique, jamais pour classer des personnes ou des équipes.
- Rapportez des médianes, des percentiles élevés et des décomptes, et appariez chaque métrique avec un garde-fou qui attrape son détournement.
- Améliorez les capacités sous-jacentes, comme les petits lots, la détection rapide et le retour arrière facile, et laissez les chiffres suivre.
- Énoncez l'édition et la date des recommandations que vous suivez, puisque les définitions ont été affinées avec le temps.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
