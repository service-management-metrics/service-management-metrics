# Réalisation de la valeur et résultats métier

**Livrer un changement n'est pas la même chose que faire bénéficier l'organisation : énoncez donc le bénéfice attendu avant de construire, vérifiez-le après la mise en production avec les personnes qui devaient en profiter, et soyez honnête sur la part d'une amélioration que vous pouvez attribuer à votre travail.**

## Vue d'ensemble et motivation

Les façons de travailler agiles placent le logiciel qui fonctionne en premier et maintiennent la collaboration des parties prenantes tout au long, pour que ce qui est livré soit ce dont les gens ont besoin. La gestion des services informatiques (ITSM), telle que codifiée par ITIL, formule la même préoccupation comme la valeur : un service a de la valeur quand il aide les clients à atteindre les résultats qu'ils veulent, avec des coûts et des risques qu'ils acceptent. Les deux traditions se rejoignent sur une question inconfortable. Dans un an, les personnes et l'organisation s'en portent-elles mieux grâce à ce que cette équipe a construit et exploité ?

Y répondre est plus difficile que de compter ce qui a été livré. Des fonctionnalités sont livrées et personne ne les utilise. Les incidents baissent pour des raisons sans rapport avec le travail de l'équipe. Une économie apparaît sur une diapositive, et le budget d'où elle vient est dépensé ailleurs. Ce sujet vise à combler cet écart, et il se relie directement à l'accent mis sur les résultats introduit tôt dans le livre (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

Quatre idées organisent le sujet.

- **Bénéfice.** Un bénéfice est une amélioration mesurable que valorise une partie prenante, comme moins de temps passé sur une tâche, moins d'erreurs, plus de clients servis ou moins de risque. Une fonctionnalité n'est pas un bénéfice. C'est un moyen. La [gestion de la réalisation des bénéfices](https://en.wikipedia.org/wiki/Benefits_realisation_management) est la discipline qui consiste à identifier les bénéfices, à attribuer des responsables et à vérifier qu'ils arrivent.
- **Hypothèse de valeur.** Avant de construire, l'équipe écrit ce qu'elle s'attend à voir changer, pour qui, de combien, et comment elle le saura. C'est une affirmation testable, et elle peut être fausse. Une [théorie du changement](https://en.wikipedia.org/wiki/Theory_of_change) ou un [modèle logique](https://en.wikipedia.org/wiki/Logic_model) expose la chaîne des activités aux produits puis aux résultats, ce qui aide à rendre l'hypothèse explicite.
- **Indicateurs avancés et retardés.** Un [indicateur avancé](https://en.wikipedia.org/wiki/Leading_indicator) bouge tôt et prédit un résultat, comme l'adoption d'un nouveau processus. Un [indicateur retardé](https://en.wikipedia.org/wiki/Lagging_indicator) confirme le résultat après coup, comme la baisse du coût par transaction. Utilisez les deux : les indicateurs avancés permettent de corriger le cap, et les indicateurs retardés disent si cela a marché.
- **Attribution.** Beaucoup de choses changent en même temps. Pour dire que votre travail a causé une amélioration, il vous faut une comparaison : une référence, un groupe de comparaison ou un plan avant-après qui tient compte des autres changements. Sans cela, les affirmations de valeur sont des histoires. La position honnête est souvent « associé à » et non « causé par ».

Des cadres d'objectifs comme les [objectifs et résultats clés](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) peuvent relier le travail de l'équipe aux résultats métier, et le sujet antérieur sur les cadres de mesure les couvre en détail (voir le sujet 1.7, Cadres de mesure). Le risque de chaque cadre est celui que nomme la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) : dès qu'un chiffre de bénéfice devient un objectif, les gens trouvent des moyens de produire le chiffre sans le bénéfice (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Le sujet fait aussi le pont vers l'argent. Le sujet de la partie suivante sur le retour sur investissement et le dossier d'affaires prend la vue financière en profondeur (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Ici l'accent est mis sur les preuves de résultats, qui alimentent ce dossier.

## Principes clés

- **Écrivez le bénéfice attendu avant de construire.** Une affirmation qui ne peut être vérifiée plus tard ne permet pas d'apprendre.
- **Nommez un responsable pour chaque bénéfice.** Le responsable est une partie prenante qui verra le changement, non l'équipe de livraison.
- **Mesurez auprès des utilisateurs, après la mise en production.** La livraison est le début de la vérification, non la fin.
- **Utilisez des indicateurs avancés pour piloter et des indicateurs retardés pour confirmer.**
- **Soyez honnête sur l'attribution.** Dites ce qui a changé d'autre, et évitez les affirmations que la preuve ne peut soutenir.
- **Comptez les bénéfices qui ne sont pas arrivés.** Apprendre d'une hypothèse échouée est un bénéfice de cette façon de travailler.
- **Continuez de collaborer.** Les parties prenantes et l'équipe revoient ensemble les preuves, régulièrement.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réalisation des bénéfices | Part des bénéfices attendus qui ont été observés à la date de revue convenue | bénéfices dont le résultat mesuré atteint ou dépasse le seuil convenu / bénéfices attendus dont la date de revue tombe dans la période | pourcentage | Registre des bénéfices avec responsables, références et dates de revue | Amélioration continue ; gouvernance du système de valeur du service | Revue des résultats avec les parties prenantes | Trimestrielle |
| Délai avant première valeur | Temps entre le début du travail et le premier bénéfice mesurable pour les utilisateurs | jours entre le début du premier travail et la première date où l'indicateur de bénéfice a bougé comme prévu | jours | Gestionnaire de travail et indicateur de bénéfice | Conception des services ; gestion des versions et des déploiements | Livraison continue de valeur | Par initiative |
| Taux de vérification des hypothèses | Part des changements mis en production dont l'hypothèse de valeur énoncée a été vérifiée après la mise en production | changements avec une vérification consignée après la mise en production / changements mis en production qui portaient une hypothèse | pourcentage | Journal des hypothèses lié aux enregistrements de version | Amélioration continue ; habilitation des changements | Apprentissage à partir du travail livré | Mensuelle |
| Part de qualité des preuves | Part des bénéfices revendiqués qui ont une référence et une méthode de comparaison énoncée | revendications de bénéfices avec référence et méthode / revendications de bénéfices rapportées | pourcentage | Revue du registre des bénéfices | Mesure et rapports | Rapport honnête des résultats | Trimestrielle |
| Variation de l'indicateur de résultat | Variation d'un indicateur de résultat choisi par rapport à sa référence et, quand c'est possible, à une comparaison | (indicateur après moins indicateur avant) avec la variation du groupe de comparaison rapportée à côté | unités de l'indicateur | Analytique produit, données de service, finance | Gestion des niveaux de service ; amélioration continue | Progression des résultats clés | Mensuelle |
| Heures d'impact sur l'activité | Heures pendant lesquelles un processus métier a été dégradé ou arrêté à cause de problèmes de service | heures de processus dégradé ou arrêté attribuées par les responsables de processus à des causes de service informatique | heures | Enregistrements d'incidents joints à la confirmation du responsable de processus | Gestion des incidents ; gestion de la disponibilité | Revue de l'impact sur l'activité | Mensuelle |
| Part de capacité liée aux résultats | Part de la capacité de l'équipe consacrée à un travail lié à un résultat énoncé | capacité sur des éléments liés à un résultat consigné / capacité totale | pourcentage | Gestionnaire de travail avec un champ de résultat | Système de valeur du service ; gouvernance du portefeuille | Travail aligné sur l'objectif du produit | Trimestrielle |

Définissez la date de revue et le seuil de chaque bénéfice au moment où il est consigné, non après. Le délai avant première valeur démarre quand le travail commence et s'arrête quand l'indicateur bouge pour la première fois dans la direction attendue d'un montant énoncé, ce qui peut être bien après la mise en production. L'attribution des heures d'impact sur l'activité est convenue avec le responsable de processus, et les désaccords sont consignés.

## Recommandations

### Avant de construire : rendre l'affirmation vérifiable

**1. Écrivez une hypothèse de valeur pour chaque changement important.** Utilisez une forme simple : « Nous croyons que [changement] aidera [qui] à [faire quoi] afin de [amélioration mesurable]. Nous le saurons quand [indicateur] passera de [référence] à [attendu], revu le [date]. » Gardez-la assez courte pour tenir sur une carte du tableau. Les équipes qui ne peuvent pas remplir les blancs n'ont souvent pas encore compris le problème.

**2. Consignez une référence.** Sans avant, il n'y a pas d'après. Relevez la valeur actuelle de l'indicateur, comment elle a été mesurée et combien elle varie. Si l'indicateur est bruité, un seul chiffre est trompeur : consignez donc une plage sur plusieurs semaines (voir le sujet 1.6, Culture statistique pour les métriques de service).

**3. Choisissez des indicateurs avancés et retardés.** Pour une nouvelle demande en libre-service, un indicateur avancé est le nombre d'utilisateurs éligibles qui la mènent à terme, et un indicateur retardé est la baisse des heures de traitement manuel (voir le sujet 6.3, Métriques d'adoption des services et de catalogue). Convenez de l'indicateur vérifié à quel moment. Les indicateurs avancés permettent une correction en cours de route sans attendre la fin du trimestre.

**4. Nommez un responsable du bénéfice extérieur à l'équipe de livraison.** Le responsable est la partie prenante qui verra l'amélioration dans son domaine et pourra en juger. L'équipe de livraison soutient la mesure mais ne corrige pas ses propres copies. C'est la collaboration continue en pratique : la personne qui voulait le résultat reste impliquée jusqu'à ce qu'il soit confirmé.

### Après la mise en production : vérifier, honnêtement

**5. Revoyez l'hypothèse à la date convenue.** Tenez une courte revue avec le responsable et l'équipe. Regardez l'indicateur, la référence et la comparaison. Consignez le résultat dans le registre : atteint, partiellement atteint, non atteint ou impossible à dire. « Impossible à dire » est un résultat légitime et une invite à améliorer la mesure.

**6. Utilisez une comparaison quand vous le pouvez.** La comparaison la plus forte est une expérience contrôlée. Le [test A/B](https://en.wikipedia.org/wiki/A/B_testing) compare deux versions avec des utilisateurs affectés au hasard, et marche bien pour les services numériques avec assez de trafic. Là où la randomisation n'est pas possible, un déploiement échelonné permet de comparer les groupes qui ont reçu le changement et ceux qui ne l'ont pas reçu. Une approche de [différence de différences](https://en.wikipedia.org/wiki/Difference_in_differences) compare la variation d'un groupe traité à celle d'un groupe non traité sur la même période, ce qui supprime les tendances communes. Utilisez le plan le plus simple qui convient.

**7. Cherchez les facteurs de confusion.** Un facteur de [confusion](https://en.wikipedia.org/wiki/Confounding) est autre chose qui a changé et qui pourrait expliquer le résultat : un schéma saisonnier, une nouvelle politique, un mélange de demandes différent. Listez les plausibles avant de revendiquer un effet. Si vous ne pouvez pas les écarter, dites ce que la preuve soutient et pas plus.

**8. Rapportez les résultats négatifs et nuls.** Quand un changement n'a pas aidé, dites-le et consignez ce qui a été appris. Le [biais du survivant](https://en.wikipedia.org/wiki/Survivorship_bias), l'habitude de ne regarder que les succès, fait paraître les programmes meilleurs qu'ils ne sont. Un registre qui ne contient que des victoires n'a pas été tenu honnêtement.

### Garder le programme honnête

**9. Séparez la qualité des preuves du bénéfice.** Suivez la part des revendications qui ont une référence et une méthode énoncée. Une grande revendication aux preuves faibles doit se lire comme telle. Un registre sain montre des revendications modestes aux preuves solides, et quelques honnêtes entrées « impossible à dire ».

**10. Reliez la capacité aux résultats, avec souplesse.** Demandez quelle part du travail de l'équipe est liée à un résultat énoncé, et regardez le reste. Certains travaux, comme les correctifs de sécurité ou le maintien en fonctionnement, n'ont pas de nouveau bénéfice, et c'est acceptable s'ils sont nommés. Le but est de remarquer la dérive, non de forcer chaque tâche dans une histoire de bénéfice.

**11. Reliez-vous au cadre d'objectifs que vous utilisez.** Si vous utilisez des OKR, faites des résultats clés les indicateurs de résultat et revoyez-les avec les parties prenantes. Gardez les résultats clés centrés sur les résultats, non sur les tâches, et laissez de la place à des objectifs ambitieux qui peuvent ne pas être pleinement atteints. Ne faites pas des résultats clés des objectifs individuels (voir le sujet 1.7, Cadres de mesure).

**12. Revoyez le portefeuille autant que le projet.** Une fois par trimestre, regardez entre initiatives quels bénéfices sont arrivés, lesquels non, et ce que le schéma dit de la façon dont l'équipe estime et choisit le travail. Servez-vous-en pour améliorer la façon d'écrire les hypothèses, non pour classer des équipes.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Taux de réalisation des bénéfices | Fixer des seuils bas ; déplacer la date de revue ; redéfinir le bénéfice après coup | Seuil et date fixés à l'approbation ; part de qualité des preuves ; responsable extérieur à l'équipe de livraison |
| Délai avant première valeur | Choisir un indicateur précoce qui bouge pour la mauvaise raison ; démarrer l'horloge tard | Indicateur et horloge définis dans le registre ; confirmer avec le responsable du bénéfice |
| Taux de vérification des hypothèses | Écrire des hypothèses vagues qui passent toujours ; ne vérifier que les changements réussis | Échantillonner les hypothèses pour leur testabilité ; inclure les résultats nuls et échoués dans la revue |
| Part de qualité des preuves | Reconstituer des références après coup ; décrire n'importe quelle comparaison comme une méthode | Référence datée d'avant le changement ; revue par quelqu'un d'extérieur à l'équipe |
| Variation de l'indicateur de résultat | Choisir une période ou un groupe favorable ; ignorer les facteurs de confusion | Période et groupe préenregistrés ; liste des facteurs de confusion examinés |
| Heures d'impact sur l'activité | Les responsables de processus gonflent ou réduisent les attributions ; incidents reclassés pour éviter l'attribution | Règles d'attribution écrites et consignées ; comparer avec les enregistrements d'incidents et de disponibilité |
| Part de capacité liée aux résultats | Étiqueter tout le travail avec un résultat générique ; inventer des résultats pour le travail de routine | Liste des résultats revue avec les parties prenantes ; échantillonner les éléments pour la qualité du lien |

Une lecture saine est un registre où certains bénéfices sont atteints, d'autres non, quelques-uns peu clairs, et où chaque entrée a une référence, un responsable et une méthode énoncée. Un registre de succès uniformes doit être regardé avec méfiance.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Registre formel des bénéfices | Redevabilité, apprentissage entre initiatives | Bureaucratie si appliqué à chaque petit changement |
| Hypothèse légère sur chaque carte | Peu coûteuse, construit l'habitude | Facile à écrire de façon vague |
| Expérience contrôlée | Preuve solide de la cause | Demande du trafic, du temps et une conception adaptée au service |
| Avant-après seulement | Simple, rapide | Confondu par d'autres changements |
| Jugement des parties prenantes | Capte la valeur que les métriques manquent | Sujet à l'optimisme et à la politique |
| Indicateurs avancés | Correction précoce du cap | Peuvent ne pas prédire le vrai résultat |
| Indicateurs retardés | Confirment les vrais résultats | Arrivent tard ; causes multiples |

La réponse en bref est d'ajuster le poids de la preuve à la taille et au risque du changement. Utilisez une hypothèse légère et un simple avant-après pour les petits changements, et une expérience ou un déploiement échelonné pour les grands. Consignez toujours ce que vous attendiez, ce qui s'est passé et votre degré de certitude.

## Questions à discuter avec votre équipe

**1. Qu'avons-nous livré le trimestre dernier, et qu'est-ce qui a changé pour les personnes que cela devait aider ?**
Listez les principaux changements et, pour chacun, nommez la personne qui remarquerait une différence. Demandez ce qu'elle dirait. L'animateur doit noter les changements pour lesquels personne ne peut répondre, car ce sont des candidats à une vérification après la mise en production. Convenez d'un changement à revoir avec son responsable dans le mois.

**2. Pour notre prochain changement important, quelle est l'hypothèse de valeur et comment saurons-nous ?**
Remplissez ensemble la forme d'hypothèse. Contestez les mots vagues et les références manquantes. Demandez quel résultat ferait changer les plans de l'équipe. Si le groupe ne peut s'accorder sur une mesure, c'est une tâche de découverte avant de construire.

**3. Qui détient le bénéfice, et est-il dans la salle ?**
Vérifiez que chaque bénéfice a un responsable extérieur à l'équipe de livraison. Demandez à quelle fréquence le responsable voit les preuves. Là où le responsable est l'équipe elle-même, discutez de qui d'autre devrait partager le jugement. La conversation soutient la collaboration continue entre parties prenantes.

**4. Qu'est-ce qui a changé d'autre quand les chiffres se sont améliorés ?**
Prenez une amélioration récemment revendiquée et listez les autres changements de la même période : politique, saisonnalité, effectifs, version d'une autre équipe. Demandez lesquels pourraient expliquer le résultat. Décidez s'il faut décrire l'amélioration comme causée par le changement, associée à lui ou peu claire.

**5. Lesquelles de nos hypothèses passées se sont révélées fausses, et qu'avons-nous fait ?**
Demandez l'histoire d'une attente déçue. Si aucune ne vient vite, l'équipe peut ne pas vérifier, ou ne pas en parler. Discutez de la manière de rendre sûr et utile le rapport d'un résultat nul.

**6. Quelle part de notre capacité est liée à un résultat, et cela nous semble-t-il juste ?**
Revoyez un mois de travail terminé et étiquetez chaque élément avec un résultat ou « maintien du service en fonctionnement ». Demandez si la répartition correspond à ce que pensent les dirigeants. Discutez du travail sans résultat et de s'il doit continuer.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent l'hypothèse et le plan de mesure, et elles doivent livrer les changements par petites étapes pour que les preuves arrivent tôt. Elles doivent intégrer l'indicateur dans le changement, par exemple en journalisant les événements dont elles ont besoin, et demander au responsable du bénéfice de confirmer ce qu'il voit. Les équipes doivent accueillir les hypothèses échouées comme une information, puisqu'un apprentissage précoce épargne le coût de construire davantage de la mauvaise chose.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient l'effet réel des changements sur les incidents, les demandes et la capacité. Elles détiennent une grande part des données des indicateurs retardés, comme les heures de traitement manuel et les contacts répétés, et elles doivent aider à vérifier les hypothèses autant qu'absorber le changement. Elles doivent le dire quand les bénéfices revendiqués sur le papier ne correspondent pas à ce que voit le centre de services.

### Direction et gouvernance

Les dirigeants choisissent si les bénéfices sont un outil d'apprentissage ou un argumentaire de vente. Ils doivent demander des références et des méthodes, accueillir les résultats honnêtes « non atteint » et éviter de tenir les équipes à des chiffres de bénéfices fixés avant que les faits soient connus. La gouvernance doit revoir le registre comme un portefeuille, financer la mesure et être prête à arrêter un travail dont l'hypothèse a échoué.

### Clients et utilisateurs

Les utilisateurs savent si un changement a aidé, et ils sont les meilleurs juges de la plupart des bénéfices. On doit les interroger, leur montrer les résultats et leur dire quand un changement n'a pas livré ce qu'on espérait. Leurs commentaires sont une preuve en soi. Un bénéfice que montrent les chiffres et que les utilisateurs ne ressentent pas mérite un examen plus attentif.

## En pratique : un exemple de gestion des services

Le groupe informatique d'un assureur santé régional construit et exploite un portail de remboursements pour les prestataires. Les chiffres ci-dessous sont illustratifs.

Le groupe prévoit d'ajouter des vérifications automatiques d'éligibilité à la soumission des demandes. L'hypothèse, écrite avec le responsable des opérations de remboursement, est : « Nous croyons que des vérifications automatiques d'éligibilité aideront le personnel de facturation des prestataires à soumettre des demandes correctes du premier coup, de sorte que les demandes renvoyées pour correction passent de 18 % à 12 % en trois mois. Nous le saurons par le taux de demandes renvoyées, revu le 1er mars. » La référence est la moyenne des 12 dernières semaines, 18 % avec une plage hebdomadaire de 15 à 21 %. L'indicateur avancé est l'usage de la vérification le premier mois. Le responsable des opérations de remboursement est le responsable du bénéfice.

L'équipe met en production par petites étapes, la vérification étant d'abord disponible dans une région. Après trois semaines, l'usage de la vérification est de 64 % dans cette région. À la date de revue, les demandes renvoyées tombent à 13 % dans la région avec la vérification et à 17 % dans les régions sans elle. Le responsable des remboursements fait remarquer qu'un changement de politique sur un code de facturation est aussi entré en vigueur dans la période. L'équipe le liste comme facteur de confusion et retire les demandes portant ce code des deux groupes, ce qui laisse 14 % contre 17,5 %. La réalisation du bénéfice est consignée comme « partiellement atteint » : mieux que la référence avec une marge nette, en deçà de la cible de 12 %. L'équipe écrit honnêtement dans le registre que la preuve vient d'un déploiement échelonné sur un trimestre, et que l'effet peut différer pour d'autres prestataires.

Elle déploie ensuite la vérification dans toutes les régions, avec un plan de revérifier dans trois mois, et ajoute une tâche pour améliorer le message d'erreur, puisque les commentaires des prestataires disent qu'il n'est pas clair. La directrice financière demande un chiffre unique pour le conseil. Le responsable informatique offre la plage et la méthode, et refuse d'énoncer un chiffre avec plus de précision que la preuve ne le permet. La décision est consignée, avec la date de la prochaine revue.

## Agilité, IA, automatisation et analytique

### Agilité

Énoncez le bénéfice attendu avant le début du travail et vérifiez-le après la mise en production avec les personnes qui devaient en profiter. La précaution est que des bénéfices revendiqués sans référence sont des histoires.

### IA

Les projets d'IA promettent souvent de grands bénéfices : consignez donc séparément la référence, le changement attendu et la preuve pour le travail assisté par l'IA, et appariez les revendications de productivité avec la qualité et le coût. La précaution est que les estimations de bénéfices produites par un outil d'IA doivent être vérifiées, car elles peuvent sembler précises et être sans appui.

### Automatisation

Automatisez la capture des indicateurs de résultat déjà présents dans vos systèmes, et mesurez le processus de revue des bénéfices sur son achèvement. La précaution est que des tableaux de bord automatisés d'indicateurs peuvent remplacer la conversation sur la question de savoir si le bénéfice a eu lieu.

### Analytique

Rapportez la variation des indicateurs de résultat avec la qualité des preuves et les limites d'attribution. La décision éclairée est quoi continuer, changer ou arrêter. La précaution est que l'attribution est difficile : décrivez donc l'incertitude.

## Éclairage sectoriel

**Startup.** Les bénéfices sont proches du chiffre d'affaires et de la rétention, et la vitesse d'apprentissage compte. Écrivez des hypothèses d'une ligne sur des cartes, vérifiez-les vite et évitez les registres lourds. Utilisez de simples comparaisons, et acceptez que de petits échantillons limitent ce que vous pouvez revendiquer.

**Petite entreprise.** Le propriétaire est le responsable du bénéfice, et les effets sont visibles. Gardez une courte liste de changements avec leurs effets attendus et revoyez-la chaque trimestre. Évitez de gonfler de petits gains en grands chiffres, et comparez avec le coût du changement.

**Grande entreprise.** Les portefeuilles, les cycles de financement et de nombreuses parties prenantes rendent un registre des bénéfices utile. Gardez-le léger pour les petits changements et rigoureux pour les grands, placez les responsables dans les unités d'affaires et revoyez entre portefeuilles. Méfiez-vous des chiffres consolidés avec des définitions différentes.

**Gouvernement et secteur public.** Les résultats sont souvent des biens publics, comme l'accès, l'équité et la sécurité, qui ne se réduisent pas à un chiffre d'affaires. Définissez les résultats avec les personnes servies, utilisez des preuves mixtes et rapportez les méthodes ouvertement. Des dossiers d'affaires formels et des revues de bénéfices peuvent être exigés, et des résultats nuls honnêtes comptent pour la redevabilité publique (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est principalement de l'attention. Écrire une hypothèse prend quelques minutes, une référence prend une heure ou quelques-unes, et une revue prend une courte réunion. Les expériences et les déploiements échelonnés demandent un effort de conception et un peu d'outillage. Un registre des bénéfices peut être un tableur ou un champ du gestionnaire de travail.

Le rendement est de meilleures décisions d'investissement. Une équipe qui vérifie ses hypothèses cesse de construire des choses qui n'aident pas, passe à l'échelle celles qui aident et apprend à quel point elle prédit bien. Cela épargne le coût de fonctionnalités inutilisées et de programmes échoués. Construisez le dossier à partir de vos propres données : la part des changements qui portaient une hypothèse, la part de ceux qui ont été vérifiés, et le coût du travail abandonné ou annulé plus tard. Évitez les chiffres publiés sur le taux d'échec des projets informatiques à moins de pouvoir en retracer la source et la méthode, car ils varient largement et sont souvent cités sans contexte. Le traitement financier se trouve dans la partie suivante (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Compter la livraison comme de la valeur.** Une fonctionnalité livrée est un moyen. Vérifiez l'effet sur les gens.
- **Des hypothèses qui ne peuvent pas échouer.** Rendez-les précises, avec un chiffre et une date.
- **Corriger ses propres copies.** Faites juger le résultat par le responsable du bénéfice extérieur à l'équipe.
- **Revendiquer une cause à partir d'un avant-après.** Listez les facteurs de confusion et utilisez une comparaison quand c'est possible.
- **Ne rapporter que les victoires.** Consignez les résultats nuls et négatifs. Un registre de seuls succès n'est pas honnête.
- **Fixer des objectifs de bénéfices à des individus.** Des objectifs liés à des personnes invitent à des revendications gonflées. Gardez les bénéfices au niveau de l'équipe et de l'initiative.
- **La sur-précision.** Rapportez des plages et la méthode, non un chiffre à une décimale.
- **Ignorer le travail sans nouveau bénéfice.** Nommez-le, et n'inventez pas d'histoire de bénéfice pour lui.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Énoncer la valeur | Bénéfices revendiqués seulement dans les dossiers d'affaires | Hypothèses écrites pour certains changements | Une courte hypothèse, une référence et un responsable pour chaque changement important | Hypothèses et seuils fixés à l'approbation ; indicateurs avancés et retardés définis | Hypothèses partagées entre équipes et fournisseurs ; résultats définis avec les utilisateurs |
| Vérifier la valeur | Aucune vérification après la mise en production | Vérification occasionnelle par l'équipe de livraison | Revue planifiée avec un responsable indépendant | Comparaisons et facteurs de confusion documentés ; qualité des preuves suivie | Les preuves au niveau du portefeuille guident le financement ; expériences partagées entre équipes |
| Apprentissage | Victoires célébrées, échecs oubliés | Quelques leçons consignées | Résultats nuls consignés et revus | Les schémas d'hypothèses manquées améliorent la sélection et le dimensionnement | L'apprentissage alimente la planification dans toute l'organisation et avec les partenaires |

## Liste de vérification

- [ ] Chaque changement important a une hypothèse de valeur écrite avec référence, indicateur et date de revue.
- [ ] Chaque bénéfice a un responsable extérieur à l'équipe de livraison.
- [ ] Les indicateurs avancés et retardés sont définis et suivis.
- [ ] Les revues ont lieu à la date convenue avec le responsable.
- [ ] Des comparaisons ou des déploiements échelonnés sont utilisés quand c'est faisable.
- [ ] Les facteurs de confusion sont listés pour chaque résultat revendiqué.
- [ ] Les résultats nuls et négatifs sont consignés et partagés.
- [ ] La qualité des preuves est suivie à côté des revendications de bénéfices.
- [ ] Aucun individu n'a d'objectif personnel de bénéfice.
- [ ] Une revue trimestrielle du portefeuille examine les schémas d'hypothèses atteintes et manquées.

## Prompts d'IA

**Rédigez une hypothèse de valeur.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organization]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**Listez les facteurs de confusion d'un résultat revendiqué.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Concevez une comparaison par déploiement échelonné.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Passez en revue une entrée du registre des bénéfices.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de valeur ou de résultat avant de la rapporter.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de bénéfices porte son vecteur de détournement, son garde-fou et son critère de preuve.

## Idées clés

- Écrivez une hypothèse de valeur vérifiable avant de construire, avec une référence, un responsable extérieur à l'équipe et une date de revue.
- Utilisez des indicateurs avancés pour piloter et des indicateurs retardés pour confirmer.
- Comparez quand vous le pouvez, listez les facteurs de confusion et ne revendiquez que ce que la preuve soutient.
- Consignez les résultats nuls et négatifs ; un registre de succès uniformes n'est pas honnête.
- Suivez la qualité des preuves à côté de la taille de la revendication.
- Gardez les parties prenantes et les utilisateurs en collaboration jusqu'à ce que le résultat soit confirmé.

## Références et lectures complémentaires

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
