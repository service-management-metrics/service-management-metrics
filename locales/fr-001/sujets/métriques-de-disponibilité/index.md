# Métriques de disponibilité

**La disponibilité est la part du temps, ou des requêtes des utilisateurs, pendant laquelle un service a fait ce dont ses utilisateurs avaient besoin, et elle ne dit la vérité que si vous définissez ce que « en marche » signifie du côté de l'utilisateur, comptez séparément les pannes planifiées et non planifiées, et lisez l'arithmétique des neuf avant d'en promettre un.**

## Vue d'ensemble et motivation

La disponibilité est le chiffre le plus cité en gestion des services et l'un des moins précisément définis. Un énoncé comme « le service a été disponible à 99,9 % le mois dernier » semble exact, et pourtant il cache au moins quatre décisions : ce qui comptait comme le service, ce qui comptait comme « disponible », quelles heures étaient dans le périmètre et quelles pannes étaient exclues. Deux équipes peuvent rapporter le même service le même mois et publier des chiffres qui diffèrent d'un ordre de grandeur sans qu'aucune ne commette d'erreur d'arithmétique.

Ce sujet rend ces décisions explicites. Il couvre le calcul de la disponibilité et de l'indisponibilité, la disponibilité pondérée par les utilisateurs, la panne planifiée contre non planifiée, et l'arithmétique des neuf. Il s'appuie sur les indicateurs de niveau de service (SLI), les objectifs de niveau de service (SLO) et les budgets d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur), et sur la vision contractuelle des niveaux de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). Ces sujets disent comment choisir une cible. Celui-ci dit comment calculer le chiffre auquel la cible est comparée.

### Termes employés dans ce sujet

- La **disponibilité** est la capacité d'un service à faire ce dont les utilisateurs ont besoin quand ils en ont besoin, généralement exprimée en pourcentage sur une période. Le concept général est décrit dans l'article sur la [haute disponibilité](https://en.wikipedia.org/wiki/High_availability).
- L'**[indisponibilité](https://en.wikipedia.org/wiki/Downtime)** (downtime) est une période pendant laquelle un service est indisponible. Ce sujet emploie **panne** pour un épisode continu d'indisponibilité et **dégradation** pour une période où le service fonctionne mais en dessous d'une qualité convenue.
- Le **temps de fonctionnement** (uptime) est le complément de l'indisponibilité dans la fenêtre de mesure. La disponibilité fondée sur le temps est le temps de fonctionnement divisé par le temps total dans le périmètre.
- La **disponibilité fondée sur les requêtes** est la part des requêtes valides qui ont réussi : une défaillance qui touche 5 % des requêtes pendant une heure compte donc pour 5 % du trafic d'une heure, non pour une heure complète d'indisponibilité.
- La **disponibilité pondérée par les utilisateurs** étend la vue fondée sur les requêtes en pondérant les échecs par le nombre ou l'importance des utilisateurs touchés, par exemple en comptant les sessions échouées ou les parcours échoués au lieu des requêtes brutes.
- Un **accord de niveau de service (SLA)** est un engagement envers un client, et un **objectif de niveau de service (SLO)** est une cible interne pour un indicateur. Les articles sur l'[accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) et l'[objectif de niveau de service](https://en.wikipedia.org/wiki/Service-level_objective) donnent des définitions générales.
- L'**indisponibilité planifiée** est une panne annoncée d'avance et approuvée par la maîtrise des changements. L'**indisponibilité non planifiée** est tout le reste. La frontière entre les deux est l'une des lignes les plus contestées du rapport de disponibilité.
- Le **[temps moyen entre pannes](https://en.wikipedia.org/wiki/Mean_time_between_failures)** (MTBF) est le temps de fonctionnement moyen entre pannes, et le **[temps moyen de réparation](https://en.wikipedia.org/wiki/Mean_time_to_repair)** est le temps moyen de rétablissement. Ce sont deux moyennes : ce livre les lit donc comme des distributions (voir le sujet 1.6, Culture statistique pour les métriques de service).
- La **[supervision synthétique](https://en.wikipedia.org/wiki/Synthetic_monitoring)** utilise des sondes scriptées qui se comportent comme un utilisateur et rapportent succès ou échec. La **[supervision des utilisateurs réels](https://en.wikipedia.org/wiki/Real_user_monitoring)** enregistre l'expérience des utilisateurs réels pendant qu'ils utilisent le service.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** est le cadre de gestion des services informatiques le plus connu. Dans ITIL 4, la pratique de gestion de la disponibilité s'attache à s'assurer que les services livrent les niveaux de disponibilité convenus, et elle travaille en étroite relation avec la supervision et la gestion des événements, la gestion des incidents et la gestion de la continuité de service.

### Pourquoi un seul chiffre ne suffit jamais

Dix pannes de quatre minutes chacune et une panne de quarante minutes produisent le même total d'indisponibilité, et pourtant elles se ressentent différemment pour les utilisateurs et appellent des réponses différentes. Le premier schéma pointe un service fragile. Le second pointe une détection ou un rétablissement lents. Pour cette raison, les métriques ici viennent en petit ensemble, chacune avec un garde-fou, afin qu'une équipe puisse discuter honnêtement de la disponibilité sans concourir pour le plus de neuf.

### En quoi les visions ITIL et agile diffèrent

Dans ITIL, la disponibilité est un attribut géré d'un service, convenu avec le client et rapporté par la gestion des niveaux de service face à une cible énoncée, avec des heures de service claires et des exclusions comme la maintenance planifiée.

Dans la pratique agile et d'ingénierie de fiabilité des sites (SRE), la disponibilité est un SLI parmi d'autres, comparé à un SLO. Le livre *Site Reliability Engineering* de Google dit que la disponibilité fondée sur le temps convient à un système unique, alors que le taux de réussite des requêtes convient aux services distribués qui sont en permanence en partie en marche. Il dit aussi que 100 % est presque jamais la bonne cible, parce que le coût de chaque neuf supplémentaire monte fortement.

Utilisez la discipline ITIL du périmètre, des heures et des exclusions convenus pour définir le dénominateur. Utilisez la discipline SRE des indicateurs centrés sur l'utilisateur et des budgets d'erreur pour définir le numérateur et pour décider quoi faire du résultat.

## Principes clés

- **Définissez « disponible » du côté de l'utilisateur.** Un service qui répond aux contrôles de santé pendant que les utilisateurs ne peuvent pas se connecter est en panne pour les personnes qui comptent.
- **Écrivez le dénominateur.** Énoncez la frontière du service, les heures dans le périmètre, le fuseau horaire et la fenêtre de mesure avant de calculer quoi que ce soit.
- **Comptez séparément les pannes planifiées et non planifiées.** Rapportez les deux, ensemble, et ne laissez jamais l'une se cacher dans l'autre.
- **Préférez les mesures fondées sur les requêtes et pondérées par les utilisateurs pour les services distribués.** Une défaillance partielle n'est ni un fonctionnement complet ni une indisponibilité complète.
- **Convertissez les neuf en minutes.** Une cible n'est comprise que lorsque les gens peuvent dire combien de minutes de défaillance par mois elle permet.
- **Choisissez le nombre de neuf dont les utilisateurs ont besoin.** Au-delà de ce point, chaque neuf supplémentaire coûte plus qu'il ne rapporte.
- **Décrivez des services, jamais des personnes.** La disponibilité appartient à un service et aux équipes qui l'exploitent, et n'est jamais le score d'un individu.

## Définitions des métriques

Chaque ligne énonce ses horloges et ses frontières. Le temps calendaire est utilisé sauf indication contraire d'une ligne. Là où une mesure utilise une distribution, rapportez la médiane et le 95e percentile, et nommez la fenêtre.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilité fondée sur le temps | Part du temps dans le périmètre pendant laquelle le service a satisfait la définition écrite de « en marche » | (minutes dans le périmètre de la fenêtre moins minutes d'indisponibilité non planifiée) / minutes dans le périmètre de la fenêtre. L'horloge démarre à la première sonde échouée ensuite confirmée comme impact utilisateur, ou au début d'impact confirmé consigné dans la revue d'incident ; s'arrête quand le service satisfait de nouveau la définition. L'indisponibilité planifiée dans les heures de service convenues est montrée à part, et le temps hors des heures de service convenues est exclu du dénominateur | pourcentage | Résultats de supervision synthétique ; enregistrement d'incident avec horodatages de début d'impact et de rétablissement | Gestion de la disponibilité ; gestion des niveaux de service | Un SLI fondé sur le temps pour un système unique (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Mensuelle |
| Disponibilité fondée sur les requêtes | Part des requêtes valides qui ont réussi | requêtes valides réussies / total des requêtes valides dans la fenêtre. Les requêtes valides excluent les requêtes mal formées et les erreurs client causées par l'appelant ; les échecs causés par le service, y compris les délais dépassés, sont comptés comme des échecs. Rapportée par service et par parcours utilisateur | pourcentage | Journaux et métriques de l'équilibreur de charge, de la passerelle ou de l'application | Gestion de la disponibilité ; supervision et gestion des événements | SLI de taux de réussite avec un SLO et un budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Tendance quotidienne, rapport mensuel |
| Disponibilité pondérée par les utilisateurs | Disponibilité pondérée par les utilisateurs ou parcours touchés, de sorte qu'une panne en heure de pointe compte plus qu'une panne de nuit | 1 moins (sessions utilisateurs échouées ou parcours échoués / total des sessions utilisateurs ou parcours) dans la fenêtre. Une session compte comme échouée si une étape critique définie a échoué ; le succès partiel est rapporté comme une part de dégradation distincte, non intégré | pourcentage | Supervision des utilisateurs réels ; journaux de sessions applicatives ; événements d'analytique | Gestion de la disponibilité ; gestion des niveaux de service | SLI par parcours et mesures d'expérience du sujet 6.2 (voir le sujet 6.2, Accords de niveau d'expérience) | Mensuelle |
| Indisponibilité non planifiée | Minutes pendant lesquelles le service a été indisponible sans préavis approuvé | Somme des durées de pannes dans la fenêtre, du début d'impact confirmé au rétablissement confirmé, pour les pannes non annoncées et approuvées par la maîtrise des changements avant leur début. Les pannes qui se chevauchent sur un même service sont fusionnées, non additionnées. Rapportée en minutes totales, nombre de pannes, et médiane et 95e percentile de la durée des pannes | minutes | Enregistrement d'incident avec horodatages de début d'impact et de rétablissement | Gestion des incidents ; gestion de la disponibilité | Temps de rétablissement lu comme une distribution (voir le sujet 3.3, Temps de réponse et de résolution des incidents) | Mensuelle |
| Part d'indisponibilité planifiée | Proportion de toute l'indisponibilité qui a été annoncée et approuvée d'avance | minutes d'indisponibilité planifiée / (minutes d'indisponibilité planifiée plus non planifiée) dans la fenêtre. Une panne ne compte comme planifiée que si elle a été approuvée par un enregistrement de changement avant son début et que ses heures de début et de fin ont été communiquées aux utilisateurs ; un dépassement au-delà de la fenêtre approuvée est reclassé comme non planifié dès la fin de la fenêtre | pourcentage | Enregistrement de changement avec fenêtre approuvée ; enregistrement d'incident ; historique de la page d'état | Maîtrise des changements ; gestion de la disponibilité | Pratiques de publication et de maintenance qui favorisent le déploiement sans indisponibilité (voir le sujet 4.3, Métriques de maîtrise des changements) | Mensuelle |
| Fréquence et espacement des pannes | Fréquence à laquelle les pannes commencent et temps pendant lequel le service tourne entre elles | Nombre de pannes commençant dans la fenêtre ; et pour chaque paire de pannes consécutives, les minutes de fonctionnement entre le rétablissement de la première et le début de la seconde, résumées en médiane et 5e percentile. Non rapporté comme une moyenne unique quand il existe moins de dix intervalles | nombre ; minutes | Enregistrement d'incident ; historique de supervision | Gestion des incidents ; gestion des problèmes | Signal de stabilité à côté du taux d'échec des changements (voir le sujet 4.4, Échecs de changement et reprises) | Mensuelle |
| Part de dégradation | Temps pendant lequel le service a fonctionné mais en dessous d'une qualité convenue | Minutes pendant lesquelles l'indicateur de latence, d'erreur ou d'exactitude a franchi son seuil, hors minutes déjà comptées comme indisponibilité / minutes dans le périmètre. Seuil énoncé par service, par exemple dans le SLO | pourcentage | Supervision et mesures de SLI | Gestion de la disponibilité ; gestion de la capacité et de la performance | SLI de latence (voir le sujet 5.4, Métriques de capacité et de performance) | Mensuelle |
| Couverture de la mesure | Part du comportement orienté utilisateur du service que la mesure de disponibilité observe réellement | Parcours utilisateurs critiques avec une sonde active ou une mesure d'utilisateurs réels / parcours utilisateurs critiques listés dans la définition du service | pourcentage | Définition du service ; configuration de supervision | Supervision et gestion des événements ; gestion de la disponibilité | Couverture d'observabilité et qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) | Trimestrielle |

Deux remarques sur les données. Une sonde qui vérifie toutes les cinq minutes ne peut pas résoudre une panne de deux minutes : consignez donc l'intervalle de sonde à côté du chiffre, et utilisez le champ de début d'impact de l'enregistrement d'incident (voir le sujet 1.5, Sources de données et instrumentation). Chaque fois que la définition de « en marche » change, marquez-le sur la courbe de tendance.

## Recommandations

### Définir la mesure

**1. Écrivez la définition du service avant le pourcentage.** Listez la frontière du service, les parcours utilisateurs critiques, les heures dans le périmètre, le fuseau horaire et la fenêtre (un mois calendaire est habituel). Dites quelles dépendances comptent : si un fournisseur de paiement tombe en panne et que les utilisateurs ne peuvent pas payer, est-ce votre panne ? Consignez la réponse dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). La plupart des disputes sur la disponibilité sont des disputes sur cette page, et les régler d'avance coûte bien moins cher que de les régler après une panne.

**2. Définissez « en marche » comme un résultat utilisateur, non un état de serveur.** Un contrôle de santé qui renvoie un succès pendant que la connexion est cassée mesure la mauvaise chose. Choisissez un petit nombre de parcours critiques, comme « chercher et voir un article », « se connecter » ou « soumettre une demande de remboursement », et définissez le succès de chacun en termes que les utilisateurs reconnaîtraient. Sondez le parcours de bout en bout, et traitez une réponse lente au-delà d'un seuil convenu comme dégradée, non comme en marche.

**3. Utilisez des mesures fondées sur les requêtes pour les services distribués et des mesures fondées sur le temps là où le service est réellement allumé ou éteint.** Un service mondial est rarement entièrement en panne : compter les minutes de défaillance totale ignore donc la plupart des vraies défaillances. Rapportez les deux quand vous le pouvez, et dites laquelle est le chiffre vedette et pourquoi.

**4. Ajoutez la pondération par les utilisateurs là où la charge est inégale.** Une panne de dix minutes à 4 h du matin et une au début d'une journée de négoce ont la même durée et un coût très différent. Pondérez par les sessions ou les transactions de la minute de défaillance, ou rapportez séparément les minutes de panne en heure de pointe.

**5. Mesurez depuis l'extérieur du domaine de défaillance.** Une sonde située dans le même réseau ou la même région que le service tombe avec lui, ou continue de rapporter un succès alors que le chemin emprunté par les utilisateurs est cassé. Lancez des sondes synthétiques depuis au moins deux emplacements indépendants et recoupez-les avec les données d'utilisateurs réels.

### Traiter honnêtement les pannes planifiées et non planifiées

**6. Rapportez côte à côte l'indisponibilité planifiée et non planifiée.** Beaucoup d'accords excluent la maintenance planifiée, ce qui est raisonnable. Les utilisateurs la ressentent quand même comme de l'indisponibilité : montrez donc les minutes exclues et la part planifiée à côté du chiffre vedette (voir le sujet 4.3, Métriques de maîtrise des changements).

**7. Rendez l'étiquette « planifiée » difficile à obtenir.** Définissez planifiée comme approuvée par un enregistrement de changement avant le début de la panne, avec des heures de début et de fin communiquées aux utilisateurs d'avance. Une panne annoncée après son début est non planifiée. Un dépassement au-delà de la fenêtre approuvée est non planifié dès la fin de la fenêtre. Ces trois règles empêchent l'étiquette de devenir un moyen de réétiqueter des défaillances.

**8. Travaillez à réduire l'indisponibilité planifiée.** Les déploiements progressifs, les indicateurs de fonctionnalité, les migrations de schéma sans verrou et les versions bleu-vert permettent aux équipes de changer un service sans l'arrêter. Suivez les minutes d'indisponibilité planifiée comme une tendance et demandez ce qu'il faudrait pour les ramener vers zéro.

### Bien lire les chiffres

**9. Convertissez les neuf en minutes et montrez-les.** Le tableau ci-dessous donne l'arithmétique pour un mois de 30 jours (43 200 minutes) et une année de 365 jours (525 600 minutes). Mettez les minutes permises sur le tableau de bord à côté de la cible, et montrez les minutes utilisées jusqu'ici dans la fenêtre. Les gens prennent de meilleures décisions sur « 43 minutes par mois » que sur « trois neuf ».

| Cible de disponibilité | Indisponibilité permise sur un mois de 30 jours | Indisponibilité permise sur une année de 365 jours |
| --- | --- | --- |
| 99 % | 432 minutes (7,2 heures) | 5 256 minutes (87,6 heures) |
| 99,5 % | 216 minutes (3,6 heures) | 2 628 minutes (43,8 heures) |
| 99,9 % | 43,2 minutes | 525,6 minutes (8,76 heures) |
| 99,95 % | 21,6 minutes | 262,8 minutes (4,38 heures) |
| 99,99 % | 4,32 minutes | 52,56 minutes |
| 99,999 % | environ 26 secondes | environ 5,26 minutes |

Les valeurs supposent que l'horloge court pendant toute la fenêtre. Si vous ne mesurez que les heures de service convenues, les minutes permises rétrécissent proportionnellement, et vous devez le dire.

**10. Respectez le coût de chaque neuf supplémentaire et les limites de vos dépendances.** Le livre SRE note que les coûts de fiabilité montent fortement avec chaque neuf supplémentaire, et que la cible doit refléter ce dont les utilisateurs ont besoin et ce que l'activité paiera. Un service peut rarement être plus disponible que les dépendances dont il a besoin en série. Si trois composants essentiels atteignent chacun 99,9 % et qu'une requête les exige tous les trois, la meilleure disponibilité attendue pour l'ensemble est d'environ 99,7 %, parce que les probabilités d'échec s'additionnent quand les composants sont indépendants. Faites la multiplication avant de promettre un chiffre.

**11. Regardez l'espacement et la forme, pas seulement le total.** Des pannes courtes et fréquentes demandent une autre réponse qu'une panne longue et rare. Reliez les pannes longues à la détection et au rétablissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents) et à la vue des incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs).

**12. Bouclez la boucle avec le budget d'erreur et l'enregistrement de problème.** Une cible de disponibilité est utile quand elle change ce que fait l'équipe. Quand le budget mensuel d'indisponibilité permise est presque dépensé, ralentissez le changement risqué et déplacez l'effort vers le travail de fiabilité, comme le décrit la politique de budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Quand la même cause revient, ouvrez un enregistrement de problème et suivez-le jusqu'à une correction (voir le sujet 4.1, Métriques de gestion des problèmes).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Disponibilité fondée sur le temps | Sonder une page triviale qui reste en marche pendant que le vrai parcours échoue ; allonger l'intervalle de sonde pour que les pannes courtes tombent entre deux contrôles ; rétrécir les heures dans le périmètre ; compter des pannes comme dégradation | Disponibilité pondérée par les utilisateurs et supervision des utilisateurs réels ; intervalle de sonde énoncé à côté du chiffre ; échantillon d'incidents face à l'historique de supervision |
| Disponibilité fondée sur les requêtes | Compter des requêtes faciles (contrôles de santé, ressources en cache) dans le dénominateur pour diluer les échecs ; classer des erreurs serveur comme erreurs client ; exclure les rejeux que les utilisateurs ont vécus comme des échecs | Taux de réussite par parcours critique, non par requête ; revue de la liste d'exclusions ; comparaison avec les incidents signalés par les utilisateurs |
| Disponibilité pondérée par les utilisateurs | Choisir la pondération pour que les échecs de pointe comptent peu ; définir une session « réussie » si largement que des étapes cassées passent quand même | Publier la règle de pondération et la liste des parcours ; comparer avec le volume de plaintes et les contacts du support pendant les pannes |
| Indisponibilité non planifiée | Reclasser des pannes comme planifiées après coup ; retarder le début d'impact confirmé ; scinder une panne en deux pour paraître plus courte | Part d'indisponibilité planifiée, avec la règle selon laquelle une panne annoncée après son début est non planifiée ; comparer le début d'impact avec les données de supervision |
| Part d'indisponibilité planifiée | Réserver des changements comme fenêtres approuvées pour que les dépassements et les échecs comptent comme planifiés ; gonfler la part planifiée en programmant une maintenance inutile | Minutes de dépassement reclassées comme non planifiées ; taux d'échec des changements et part de changements d'urgence (voir le sujet 4.4, Échecs de changement et reprises) |
| Fréquence et espacement des pannes | Fusionner des incidents, ou n'ouvrir un nouvel incident qu'après un long intervalle, pour garder le décompte bas ; supprimer des alertes pour que les pannes courtes ne soient pas consignées | Échantillonnage des alertes et des incidents face aux événements de supervision bruts ; couverture de la supervision et qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) |
| Part de dégradation | Fixer le seuil si lâche que le service lent ne le franchit jamais ; déclarer le temps dégradé comme en marche | Percentiles de latence et lenteur signalée par les utilisateurs revus à côté du chiffre (voir le sujet 5.4, Métriques de capacité et de performance) |
| Couverture de la mesure | Ne lister que les parcours faciles à sonder, de sorte que la couverture se lise à 100 % ; compter un parcours comme couvert par une sonde qui ne tourne jamais | Liste de parcours convenue avec le responsable du service et les utilisateurs ; historique d'exécution des sondes échantillonné chaque trimestre |

Une lecture saine montre des chiffres qui bougent pour des raisons que l'équipe peut expliquer, avec l'indisponibilité planifiée et non planifiée visibles toutes deux et un chiffre pondéré par les utilisateurs proche du chiffre vedette. Méfiez-vous d'un mois parfait accompagné de plaintes. Une baisse honnête occasionnelle montre que le système d'enregistrement fonctionne.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Disponibilité fondée sur le temps | Simple, largement comprise, facile à comparer aux contrats | Traite la défaillance partielle en tout ou rien ; ignore quand et qui |
| Disponibilité fondée sur les requêtes | Reflète la défaillance partielle ; passe à l'échelle des services distribués | Dépend d'une définition solide d'une requête valide ; peut être diluée par le trafic facile |
| Disponibilité pondérée par les utilisateurs | Proche de ce que les utilisateurs ont vécu ; montre le coût d'une défaillance en heure de pointe | Demande des données de session ou de parcours ; plus d'effort à expliquer |
| Exclure l'indisponibilité planifiée | Correspond à beaucoup d'accords ; récompense le préavis | Peut cacher un impact réel ; invite au réétiquetage |
| Cibles modérées avec budgets d'erreur | Équilibre fiabilité et vitesse de livraison | Demande de la discipline pour agir quand le budget est dépensé |

La réponse en bref est de choisir la mesure la plus simple qui convient au service, d'ajouter la pondération par les utilisateurs là où la charge est inégale, et d'être explicite sur chaque exclusion. Une mesure un peu moins élégante que tout le monde comprend fait plus de bien qu'une mesure sophistiquée en laquelle personne n'a confiance.

## Questions à discuter avec votre équipe

**1. Que signifie « disponible » pour notre service le plus important, et un utilisateur serait-il d'accord ?**
Demandez à chacun de décrire, en une phrase, ce qu'un utilisateur doit pouvoir faire pour que le service compte comme en marche. Comparez les réponses avec la définition écrite et avec la sonde qui alimente le tableau de bord. L'animateur doit guetter des écarts comme la connexion, la recherche ou le paiement qui marchent dans la sonde mais échouent en pratique. Terminez en convenant des parcours utilisateurs que la définition doit nommer.

**2. Quelles pannes du dernier trimestre notre calcul aurait-il exclues, et était-ce juste ?**
Listez les pannes et marquez chacune comme planifiée, non planifiée ou exclue. Demandez qui a pris chaque décision et quand. L'animateur doit consigner les cas où les utilisateurs auraient été en désaccord avec l'étiquette, et s'en servir pour resserrer les règles.

**3. Combien de minutes d'indisponibilité notre cible permet-elle, et combien en avons-nous utilisé dans cette fenêtre ?**
Convertissez la cible en minutes pour le mois et l'année sur un tableau blanc. Comparez avec les minutes utilisées jusqu'ici. Demandez ce que l'équipe ferait différemment s'il ne restait que 20 % du budget. Cela rend la cible abstraite concrète et relie le chiffre à la politique de budget d'erreur.

**4. Où notre mesure pourrait-elle manquer une défaillance que les utilisateurs ressentiraient ?**
Parcourez les emplacements des sondes, l'intervalle, les parcours couverts et les dépendances. Demandez quelle défaillance passerait toutes les sondes et casserait quand même le service pour les utilisateurs. Convenez d'une nouvelle sonde ou d'une nouvelle mesure d'utilisateurs réels à ajouter.

**5. Planifions-nous des pannes que nous pourrions éviter ?**
Regardez l'indisponibilité planifiée sur six mois et demandez ce qui a forcé chaque panne. Certaines sont inévitables, comme une exigence d'un fournisseur. D'autres viennent d'une approche de version ou de migration qui pourrait changer. Demandez ce qu'il faudrait pour supprimer la plus grande source, et qui détient ce travail.

**6. Si le chiffre vedette paraît parfait, qu'est-ce qui nous le ferait mettre en doute ?**
Nommez les signaux qui contrediraient le tableau de bord : volume de plaintes, contacts du support ou souvenirs de l'équipe d'astreinte. Vérifiez si certains existent en ce moment. Convenez d'une comparaison à mettre sur le tableau de bord.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison affectent la disponibilité chaque fois qu'elles changent un service. Elles peuvent concevoir pour un déploiement sans indisponibilité, utiliser des indicateurs de fonctionnalité pour limiter le rayon d'impact, et traiter le budget d'erreur comme une entrée des décisions de version, en lisant la disponibilité à côté des mesures de déploiement (voir le sujet 2.8, Métriques DORA).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les sondes, les enregistrements d'incidents et les rotations qui produisent les données. Elles doivent tenir à jour la définition et la liste d'exclusions, consigner honnêtement le début d'impact et revoir la supervision face aux incidents réels. La disponibilité appartient au service et à sa rotation, jamais à un ingénieur d'astreinte (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants fixent les incitations qui décident si les données de disponibilité sont franches. Une revue qui demande « pourquoi avez-vous perdu un neuf ? » apprend aux équipes à cacher les pannes dans les exclusions. Demandez ce que l'équipe a appris et quel investissement réduirait les pannes, et ne demandez pas plus de neuf que les utilisateurs n'en remarqueront (voir le sujet 8.4, Métriques des fournisseurs et des contrats, pour les engagements de fournisseurs).

### Clients et utilisateurs

Les utilisateurs jugent la disponibilité selon qu'ils ont pu faire ce pour quoi ils étaient venus. Ils tolèrent bien mieux une fenêtre de maintenance signalée qu'une surprise. Donnez-leur une page d'état avec des heures de début et de fin honnêtes, et lisez leurs retours à côté des chiffres (voir le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple de gestion des services

Un détaillant en ligne de taille moyenne exploite une boutique, un service de paiement en caisse et un service de suivi des commandes. Les chiffres de cet exemple sont illustratifs.

L'équipe de paiement rapporte 99,95 % de disponibilité fondée sur le temps pour le mois, ce qui permet 21,6 minutes d'indisponibilité non planifiée, et le tableau de bord affiche 99,96 %. La responsable du support client est mal à l'aise, parce que les contacts du support sur des paiements échoués ont augmenté le même mois. Elle demande à l'équipe de revoir la mesure.

L'équipe trouve trois problèmes. La sonde vérifie une page « le paiement est joignable » toutes les cinq minutes, non le parcours de paiement complet. Les données fondées sur les requêtes montrent que, deux soirs, un dépassement de délai d'un fournisseur de paiement a fait échouer environ 4 % des tentatives de paiement pendant environ 50 minutes chaque fois, et la sonde ne l'a jamais remarqué parce que la page elle-même se chargeait. Et une migration de base de données qui a dépassé sa fenêtre approuvée de 18 minutes avait été entièrement consignée comme maintenance planifiée.

L'équipe fait quatre changements. Elle ajoute une sonde synthétique pour le parcours de paiement complet depuis deux emplacements à un intervalle d'une minute. Elle ajoute des chiffres fondés sur les requêtes et pondérés par les utilisateurs, en utilisant les sessions qui ont atteint l'étape de paiement. Elle reclasse les minutes de dépassement comme non planifiées. Et elle ajoute au rapport la part d'indisponibilité planifiée et la couverture de la mesure.

Sur la base corrigée, le mois montre une disponibilité fondée sur le temps de 99,93 %, une disponibilité fondée sur les requêtes de 99,90 % et une disponibilité pondérée par les utilisateurs de 99,84 %, parce que les échecs sont tombés dans la pointe du soir. Les trois manquent la cible de 99,95 %, ce qui est inconfortable. L'équipe et la responsable du support conviennent que le chiffre précédent était trop généreux. Elles écrivent la définition corrigée dans le registre des métriques et mettent en œuvre la politique de budget d'erreur : pour le mois suivant, les changements risqués du paiement attendent que le budget se reconstitue, et l'équipe ouvre un enregistrement de problème pour les dépassements de délai du fournisseur de paiement (voir le sujet 4.1, Métriques de gestion des problèmes).

Le risque de détournement que l'équipe attrape est le réétiquetage. Un responsable a suggéré d'appeler le dépassement « maintenance prolongée » pour protéger la cible. La part d'indisponibilité planifiée, avec sa règle selon laquelle les dépassements deviennent non planifiés, a rendu le reclassement visible, et l'équipe a gardé le chiffre honnête.

## Agilité, IA, automatisation et analytique

### Agilité

Définissez la disponibilité du côté de l'utilisateur et revoyez la définition avec les parties prenantes quand le service change. La précaution est qu'un grand nombre de neuf sur un composant dit peu du parcours qu'emprunte un utilisateur.

### IA

Les composants d'IA peuvent défaillir doucement, en étant lents, faux ou indisponibles seulement pour certaines entrées, ce que la simple disponibilité manque. Ajoutez une vue ajustée à la qualité, comme la part des requêtes avec une réponse correcte et ponctuelle, et appariez-la avec les problèmes signalés par les utilisateurs. La précaution est que compter une réponse d'IA dégradée comme en marche flatte le chiffre.

### Automatisation

Recueillez automatiquement les résultats de requêtes du trafic réel et des sondes synthétiques, et mesurez les sondes sur leur couverture. La précaution est qu'une sonde qui vérifie une page de santé peut dire « en marche » alors que les utilisateurs ne peuvent pas se connecter.

### Analytique

Rapportez la disponibilité fondée sur le temps et sur les requêtes avec la part de dégradation, et énoncez la fenêtre de mesure. La décision éclairée est où le travail de fiabilité aidera les utilisateurs. La précaution est que les pannes rares rendent instables les pourcentages annuels : montrez donc des événements, pas seulement des pourcentages.

## Éclairage sectoriel

**Startup.** Une petite équipe a souvent un seul service et peu de supervision. Commencez par une sonde sur le parcours le plus important et une définition d'un paragraphe de « en marche ». Choisissez une cible modeste, convertissez-la en minutes et évitez de promettre des neuf que l'équipe ne peut pas encore mesurer.

**Petite entreprise.** Le service est souvent composé d'outils hébergés et de quelques systèmes sur mesure, et la disponibilité dépend des fournisseurs. Consignez les pannes de fournisseurs telles qu'elles touchent vos utilisateurs, comparez avec ce que le fournisseur rapporte, et gardez l'ensemble à deux ou trois chiffres.

**Grande entreprise.** De nombreux services, équipes et fournisseurs multiplient les définitions en usage. Publiez une définition standard de la disponibilité avec une courte liste de variantes autorisées, tenez à jour le registre des métriques et assurez-vous que les règles de planifié et de non planifié sont les mêmes entre équipes avant de les comparer. Préférez le rapport au niveau des services aux classements d'équipes, puisque les services diffèrent par la charge et la criticité.

**Gouvernement et secteur public.** Les services publics ont souvent des heures de service légales, des engagements publiés et des contrats avec des crédits formels. Rapportez face à eux tels qu'écrits, montrez la vue pondérée par les utilisateurs à côté, et soyez ouvert sur les exclusions (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les principaux coûts sont le temps d'écrire la définition du service et le registre, la supervision qui sonde les parcours critiques depuis l'extérieur du domaine de défaillance, et l'effort de joindre les données d'incidents, de changements et de supervision pour séparer l'indisponibilité planifiée et non planifiée. La supervision des utilisateurs réels ajoute des coûts d'outillage et de stockage. La plupart des organisations possèdent déjà une partie des données : le premier investissement porte donc généralement sur les définitions.

Le rendement vient de meilleures décisions et de moins de disputes. Les équipes qui mesurent du côté de l'utilisateur trouvent des défaillances que les contrôles de santé manquent, les accords sont plus faciles à gérer avec une définition unique, et le coût d'un neuf supplémentaire peut être mis en regard de sa valeur pour les utilisateurs. Décrivez le bénéfice comme un schéma, comme moins de surprises aux revues d'accords, et mesurez vos propres références, comme l'écart entre le chiffre vedette et le chiffre pondéré par les utilisateurs. N'empruntez pas de chiffres à d'autres organisations.

## Anti-modèles et pièges

- **Citer les neuf sans les minutes.** Une cible que personne ne peut traduire en indisponibilité permise ne peut pas guider les décisions. Montrez les minutes permises et utilisées à côté de chaque cible.
- **Mesurer le serveur au lieu du parcours.** Un contrôle de santé vert peut côtoyer une connexion cassée. Sondez les parcours critiques de bout en bout et comparez avec les données d'utilisateurs réels.
- **Laisser l'étiquette « planifiée » absorber les défaillances.** Une catégorie planifiée facile à revendiquer vide le chiffre non planifié. Exigez l'approbation avant la panne, communiquez-la et reclassez les dépassements.
- **Moyenner à travers les services et les heures.** Un chiffre mélangé cache le service critique et l'heure chargée. Rapportez par service et ajoutez une vue pondérée par les utilisateurs.
- **Promettre plus de neuf que les dépendances ne le permettent.** Des composants en série ne peuvent pas dépasser leur disponibilité combinée. Multipliez avant de promettre, et demandez aux fournisseurs leurs chiffres mesurés.
- **Traiter 100 % comme le but.** Le coût grimpe fortement et le changement ralentit. Choisissez la cible d'après le besoin des utilisateurs et servez-vous du budget d'erreur.
- **Classer des équipes ou des personnes selon leurs neuf.** Les services diffèrent par la charge et la criticité, et un classement apprend aux équipes à cacher les pannes. Montrez à chaque service sa propre tendance et comparez-la à sa propre cible.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition et horloges | « En marche » veut dire ce que montre l'outil de supervision ; heures de panne estimées après coup | Écrites pour certains services ; les temps de sonde et d'incident divergent | Une définition écrite par service avec parcours, heures, exclusions et règles d'horloge | Définitions revues selon une cadence ; changements consignés et marqués sur les graphiques | Définitions alignées avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Qualité de la mesure | Rapports manuels ou contrôle de santé unique | Sondes pour certains services ; données de requêtes dans certains journaux | Sondes de l'extérieur vers l'intérieur sur les parcours critiques plus chiffres fondés sur les requêtes issus d'une source standard | Chiffres pondérés par les utilisateurs tirés des données d'utilisateurs réels ; couverture suivie et échantillonnée | Mesures partagées entre équipes et fournisseurs et réconciliées automatiquement |
| Gestion du planifié et du non planifié | Aucune distinction ; maintenance comptée ponctuellement | Étiquette planifiée utilisée par certaines équipes, règles différentes | Une règle : approuvée avant la panne et communiquée, dépassements reclassés | Part planifiée suivie dans le temps avec un objectif de réduction | Le changement sans indisponibilité est la norme, et l'indisponibilité planifiée est rare et négociée |
| Usage dans les décisions | Rapportée après une plainte | Revue mensuelle par l'exploitation | Cibles montrées en minutes | La politique de budget d'erreur change le travail, avec financement | Disponibilité, coût et expérience arbitrés conjointement |

## Liste de vérification

- [ ] Chaque service a une définition écrite de « disponible » qui nomme ses parcours utilisateurs critiques.
- [ ] La fenêtre de mesure, les heures dans le périmètre et le fuseau horaire sont énoncés pour chaque chiffre.
- [ ] La liste d'exclusions est écrite, revue et montrée à côté du chiffre vedette.
- [ ] L'indisponibilité planifiée exige un changement approuvé et un préavis ; les dépassements comptent comme non planifiés.
- [ ] Les sondes tournent depuis l'extérieur du domaine de défaillance, à un intervalle énoncé, sur les parcours critiques.
- [ ] Un chiffre fondé sur les requêtes ou pondéré par les utilisateurs se place à côté du chiffre fondé sur le temps.
- [ ] Chaque cible est montrée en minutes permises et minutes utilisées dans la fenêtre courante.
- [ ] Le nombre de pannes et les percentiles de durée sont rapportés, et pas seulement le total.
- [ ] La disponibilité des dépendances est multipliée avant qu'une cible soit promise.
- [ ] Les changements de définition sont consignés et marqués sur la courbe de tendance.
- [ ] La disponibilité est rapportée par service et jamais par personne.

## Prompts d'IA

**Rédigez une définition de disponibilité d'un service.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Convertissez une cible en indisponibilité permise et testez-la.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Passez en revue un mois de pannes pour y chercher des problèmes de classification.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets voisins et le garde-fou associé d'une mesure de disponibilité que vous allez rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une révision de ce sujet garde chaque métrique appariée avec un vecteur de détournement et un garde-fou.

## Idées clés

- La disponibilité n'a de sens que lorsque « en marche », la frontière du service, les heures et les exclusions sont écrits du côté de l'utilisateur.
- Les mesures fondées sur les requêtes et pondérées par les utilisateurs décrivent mieux les services distribués et la charge inégale que les minutes de défaillance totale.
- Rapportez ensemble l'indisponibilité planifiée et non planifiée, et rendez l'étiquette « planifiée » difficile à obtenir.
- Convertissez chaque cible en minutes, et multipliez les dépendances en série avant de promettre un nombre de neuf.
- Chaque neuf supplémentaire coûte plus que le précédent : choisissez donc la cible d'après ce dont les utilisateurs ont besoin et servez-vous du budget d'erreur pour agir.
- Décrivez des services et des rotations, jamais des personnes, et testez chaque chiffre vedette face à l'expérience des utilisateurs.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
