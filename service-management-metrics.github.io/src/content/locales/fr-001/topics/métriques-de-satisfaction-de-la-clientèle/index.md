# Métriques de satisfaction de la clientèle

**Les scores de satisfaction disent ce que les gens ont ressenti d'un moment de service : posez donc des questions courtes et honnêtes au bon moment, lisez les commentaires avant les chiffres, et ne laissez jamais un score devenir un quota.**

## Vue d'ensemble et motivation

Les mesures opérationnelles disent ce que le service a fait. Les mesures de satisfaction disent ce que c'était de le recevoir. Un ticket peut se clore dans son délai cible et laisser quand même l'utilisateur bloqué, et un service rétabli peut quand même ressembler à une mauvaise semaine. Les équipes agiles posent la même question à la fin de chaque incrément : cela a-t-il aidé les personnes à qui c'était destiné ? La gestion des services informatiques (ITSM), telle que codifiée par ITIL, la pose à travers la valeur qu'un service cocrée avec ses clients. La mesure de la satisfaction est l'endroit où les deux questions se rencontrent.

La [satisfaction de la clientèle](https://en.wikipedia.org/wiki/Customer_satisfaction) est une mesure de la façon dont des produits et des services répondent aux attentes des clients ou les dépassent. Dans le travail de service, elle est généralement recueillie par enquête, et elle prend trois formes courantes que ce sujet couvre :

- **Score de satisfaction de la clientèle (CSAT) :** une note d'une interaction ou d'un service précis, généralement sur une échelle de cinq points, rapportée comme la part des réponses satisfaites.
- **Indice de recommandation net (NPS) :** fondé sur une question de la probabilité qu'un répondant recommande une entreprise, un produit ou un service. Les répondants qui répondent 9 ou 10 sont des promoteurs, ceux qui répondent de 0 à 6 sont des détracteurs, et le score est le pourcentage de promoteurs moins le pourcentage de détracteurs. L'[indice de recommandation net](https://en.wikipedia.org/wiki/Net_promoter_score) a été popularisé par Fred Reichheld dans un article de la *Harvard Business Review* de 2003.
- **Score d'effort client (CES) :** une note de l'effort qu'il a fallu pour accomplir quelque chose, ou de la facilité avec laquelle c'est arrivé. Ses auteurs ont soutenu que réduire l'effort prédit la fidélité mieux que de ravir les gens. Traitez cette affirmation comme une hypothèse à tester dans votre propre contexte, non comme un fait établi.

Dans un cadre informatique interne, le « client » est un collègue, et l'enquête est une courte question après un ticket ou une version. Les principes sont les mêmes, et les devoirs éthiques sont plus grands, parce que les personnes que vous interrogez travaillent avec vous demain.

Les enquêtes relèvent de la [méthodologie d'enquête](https://en.wikipedia.org/wiki/Survey_methodology), un domaine qui compte des décennies de constats sur la façon dont la formulation des questions, le moment et l'échantillonnage changent les réponses. Les équipes qui la sautent tendent à produire des scores qui bougent pour des raisons sans rapport avec la qualité du service. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ici avec une force supplémentaire : quand le personnel est récompensé pour un score élevé, il apprend à le demander (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet vous donne les définitions, l'hygiène des données et les habitudes qui gardent honnêtes les mesures de satisfaction. Le sujet suivant les étend vers une vue plus complète de l'expérience (voir le sujet 6.2, Accords de niveau d'expérience).

## Principes clés

- **Interrogez sur un moment précis.** Une enquête liée à un ticket clos ou à une version donne des réponses plus nettes qu'une question générale annuelle.
- **Restez court.** Une note et un commentaire libre valent mieux que dix questions que la plupart des gens sautent.
- **Lisez les commentaires.** Le score dit combien, et les mots disent pourquoi.
- **Rapportez qui a répondu.** Un score sans taux de réponse ni composition des répondants est une rumeur.
- **Bouclez la boucle.** Les personnes qui signalent une mauvaise expérience doivent recevoir une réponse.
- **Comparez-vous à vous-même dans le temps.** Les références entre entreprises cachent des différences de méthode, de public et de culture.
- **Protégez les répondants.** Ne recueillez que ce dont vous avez besoin, dites comment cela sera utilisé et ne classez pas d'individus d'après cela.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Part des réponses satisfaites, pour un type d'interaction défini | réponses notées 4 ou 5 sur une échelle de cinq points / réponses valides | pourcentage | Enquête après interaction liée au ticket ou à la version | Centre de services ; gestion des incidents ; gestion des niveaux de service | Retour de la revue avec les parties prenantes | Hebdomadaire ou mensuelle |
| NPS | Promoteurs moins détracteurs pour un service et un public définis | pourcentage répondant 9 ou 10 moins pourcentage répondant de 0 à 6 | points, plage de -100 à 100 | Enquête de relation, envoyée à intervalle fixe | Amélioration continue ; gestion des niveaux de service | Revue des résultats du produit | Trimestrielle |
| CES | Note moyenne ou part favorable de la facilité avec laquelle quelque chose a été accompli | réponses favorables / réponses valides, ou note moyenne | pourcentage ou moyenne | Enquête après interaction liée au ticket, à la demande ou à la version | Gestion des demandes de service ; centre de services | Retour d'utilisabilité à l'affinage | Mensuelle |
| Taux de réponse à l'enquête | Part des utilisateurs invités qui ont répondu | réponses reçues / enquêtes délivrées | pourcentage | Outil d'enquête et système de tickets | Mesure et rapports | Participation au retour dans les revues | Mensuelle |
| Couverture des répondants | À quel point la composition des répondants correspond à la population des utilisateurs selon des dimensions convenues | part des répondants de chaque groupe comparée à la part des utilisateurs de ce groupe, par groupe | points de pourcentage | Outil d'enquête joint à l'annuaire des utilisateurs ou aux données de tickets | Mesure et rapports | Carte des parties prenantes | Trimestrielle |
| Part des thèmes de commentaires | Part des commentaires libres affectés à chaque thème | commentaires du thème / commentaires codés | pourcentage | Commentaires d'enquête codés | Amélioration continue | Thèmes de rétrospective | Mensuelle |
| Délai de suivi des détracteurs | Temps entre une note basse et un contact documenté avec l'utilisateur | horodatage de la note de suivi moins horodatage de la note basse, médiane et 85e percentile | heures ou jours | Outil d'enquête et système de tickets | Gestion des incidents ; amélioration continue | Boucle de retour dans l'accord de travail | Mensuelle |

Les horloges et les frontières comptent. Le CSAT et le CES ne comptent que les réponses à l'interaction précise, jamais l'humeur générale. Le délai de suivi des détracteurs démarre au moment où la note basse est enregistrée, non quand quelqu'un la lit pour la première fois. Excluez les enregistrements de test et les réponses de membres de l'équipe mesurée.

## Recommandations

### Concevoir l'instrument

**1. Choisissez une question par objectif.** Utilisez le CSAT après une interaction pour savoir comment cette interaction s'est passée, le CES après quelque chose que l'utilisateur a dû faire pour savoir où se trouve la friction, et le NPS à intervalle régulier pour connaître la relation globale. Mêler les trois dans un même formulaire invite à la fatigue d'enquête et à des résultats confus. Si vous ne pouvez en financer qu'une, choisissez celle qui correspond à la décision que vous devez prendre.

**2. Écrivez une formulation neutre et précise.** « Dans quelle mesure êtes-vous satisfait de la façon dont votre demande a été traitée ? » vaut mieux que « À quel point notre service a-t-il été génial ? » Évitez les questions à double objet qui interrogent la rapidité et l'amabilité à la fois. Offrez une échelle cohérente, étiquetez ses extrémités et gardez le même ordre de réponses à chaque fois. Une [échelle de Likert](https://en.wikipedia.org/wiki/Likert_scale) est une conception courante, et de petits changements d'étiquettes peuvent déplacer les résultats : ne les changez donc pas à la légère.

**3. Ajoutez une question ouverte.** « Quelle est la principale raison de votre note ? » coûte peu au répondant et donne à l'équipe ses données les plus riches. Les commentaires expliquent le score, exposent des problèmes que les chiffres ne peuvent pas montrer et donnent aux agents quelque chose dont apprendre. Lisez-les lors d'une revue régulière, à voix haute si possible.

**4. Placez l'enquête près de l'événement.** Envoyez la question peu après la résolution du ticket ou l'arrivée de la version, tant que la mémoire est fraîche. Ne l'envoyez pas au moment de la clôture par un agent qui espère une bonne note. Un court délai, fixé par le système, supprime la tentation de coacher la réponse.

### Rendre les chiffres dignes de confiance

**5. Rapportez le taux de réponse et la composition des répondants à côté de chaque score.** Un score de satisfaction tiré de 4 % des utilisateurs est un énoncé sur les répondants. Comparez qui a répondu avec qui a été invité, à l'aide d'attributs que vous détenez déjà, comme la région, le service ou le type de demande. De grands écarts signifient que le score demande une étiquette de prudence. La représentativité est un thème central de la recherche sur le [biais de réponse](https://en.wikipedia.org/wiki/Response_bias), et le but pour une équipe de service est simplement de regarder.

**6. Montrez l'incertitude.** Les petits échantillons varient largement. Une [marge d'erreur](https://en.wikipedia.org/wiki/Margin_of_error) ou un [intervalle de confiance](https://en.wikipedia.org/wiki/Confidence_interval) montré à côté d'un CSAT mensuel évite à l'équipe de réagir au bruit (voir le sujet 1.6, Culture statistique pour les métriques de service). Si une équipe a moins de quelques dizaines de réponses dans une période, rapportez des décomptes et lisez les commentaires, pas des pourcentages.

**7. Évitez de sélectionner qui est interrogé.** Si la personne qui a clos le ticket décide d'envoyer ou non l'enquête, les scores montent pour la mauvaise raison. Envoyez l'enquête automatiquement à chaque interaction éligible, ou à un échantillon aléatoire si le volume est élevé. Documentez la règle, y compris les exclusions, dans le registre des métriques.

**8. Séparez la satisfaction d'une personne de la performance d'une personne.** La satisfaction dépend de facteurs qu'un agent individuel ne contrôle pas : la qualité du produit, la file, la politique, l'humeur de l'utilisateur. Ne classez pas les agents par CSAT. Utilisez-le au niveau de l'équipe et du service, et utilisez les commentaires pour des conversations de coaching que l'agent accueille volontiers.

### Agir sur ce que vous entendez

**9. Bouclez la boucle avec les utilisateurs mécontents.** Contactez les personnes qui signalent une mauvaise expérience, demandez ce qui aurait aidé et consignez ce que vous apprenez. Fixez un objectif pour le délai de suivi et faites du suivi une conversation, non une demande de changer le score. Changer un score sur demande est une déformation : le suivi doit donc viser à corriger le problème et à apprendre.

**10. Codez les commentaires en thèmes et suivez-les.** Convenez d'une courte liste de thèmes, comme « j'ai dû me répéter », « réponse lente », « la correction n'a pas tenu », « communication peu claire » et « aimable et serviable ». Codez chaque mois un échantillon, à la main ou avec un outil, et faites vérifier les résultats par une personne. Les tendances des thèmes montrent souvent des problèmes avant qu'un score ne bouge.

**11. Reliez la satisfaction aux données opérationnelles.** Comparez le CSAT avec le temps de résolution, le taux de réouverture et le nombre de contacts par problème. Les couples disent si la vitesse achète de la satisfaction ou si l'équipe est rapide et se trompe. Servez-vous-en pour trouver des histoires à investiguer, non pour prouver une règle.

**12. Traitez les références avec soin.** Les chiffres publiés ou fournis par des fournisseurs pour les scores de satisfaction dépendent de la méthode, du public et de la région, et votre propre historique est un meilleur comparateur. Si vous utilisez une comparaison externe, énoncez sa source, sa méthode et sa date, et ne fixez pas d'objectif à partir d'elle sans avoir testé si votre méthode correspond. N'inventez jamais une référence.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| CSAT | Les agents coachent les utilisateurs pour qu'ils donnent les meilleures notes ; enquêtes envoyées seulement après des tickets faciles ; tickets difficiles clos sans enquête | Enquête automatique pour chaque ticket éligible ; taux de réponse et composition des répondants ; taux de réouverture |
| NPS | N'interroger que les utilisateurs amicaux ; caler l'enquête après un bon événement ; demander face à face ; réétiqueter les points de l'échelle | Public et calendrier fixes dans le registre ; couverture des répondants ; lecture des commentaires des détracteurs |
| CES | Retirer des étapes du formulaire de façon à déplacer le travail ailleurs ; ne demander qu'après des demandes fluides | Nombre de contacts par problème ; délai de traitement des demandes et reprise (voir le sujet 3.5, Métriques de traitement des demandes de service) |
| Taux de réponse à l'enquête | N'inviter que des personnes susceptibles de répondre ; envoyer l'enquête à une autre liste à chaque fois | Règle d'invitation écrite ; comparer les invités avec la population des utilisateurs |
| Couverture des répondants | Retirer de la comparaison les groupes difficiles à joindre ; repondérer sans le dire | Publier les dimensions et la méthode ; montrer le résultat non pondéré à côté du pondéré |
| Part des thèmes de commentaires | Coder les commentaires pour éviter les mauvais thèmes ; fusionner des thèmes pour qu'aucun ne paraisse grand | Une deuxième personne code un échantillon ; garder stable la liste des thèmes et consigner les changements |
| Délai de suivi des détracteurs | Consigner une note sans contacter l'utilisateur ; contacter l'utilisateur pour lui demander une meilleure note | Vérifier le contenu des notes de suivi ; demander à l'utilisateur dans l'enquête suivante si quelqu'un l'a contacté |

Une lecture saine est un taux de réponse stable, une composition des répondants proche de celle des utilisateurs, un score qui bouge avec l'expérience que les utilisateurs décrivent dans les commentaires, et des utilisateurs mécontents qui disent que quelqu'un les a recontactés.

## Compromis : avantages et inconvénients

| Mesure | Force | Faiblesse |
| --- | --- | --- |
| CSAT | Simple, rapide, lié à un moment précis | Facilement gonflé ; dit peu de la relation globale |
| NPS | Une question, facile à suivre dans le temps | Cache les raisons ; un seul chiffre comprime une large distribution ; les différences culturelles affectent l'échelle |
| CES | Pointe directement la friction que l'équipe peut supprimer | Moins largement compris ; les preuves sont contestées |
| Longue enquête annuelle | Riche, couvre de nombreux services | Lente, faible réponse, difficile à exploiter |
| Commentaires seulement | Concrets, mémorables | Difficiles à comparer dans le temps ; vulnérables aux voix les plus fortes |
| Signaux comportementaux | Aucune charge d'enquête ; objectifs | Ne captent pas les sentiments ; peuvent mal lire la cause |

La réponse en bref est de combiner une courte enquête d'interaction, une enquête de relation occasionnelle et les commentaires, et de lire les trois avec les données opérationnelles. Les mesures de satisfaction marchent comme une conversation entre les utilisateurs et l'équipe. Elles échouent comme un tableau de score.

## Questions à discuter avec votre équipe

**1. Que faisons-nous d'un score bas et d'un score haut ?**
Demandez à l'équipe de décrire, en pratique, la dernière fois qu'un score bas a mené à un changement. Posez ensuite la même question pour un score haut. Si les réponses sont vagues, l'enquête est un rituel. L'animateur doit chercher un lien concret entre les données et une action, et convenir d'un endroit où ce lien sera consigné.

**2. Qui répond à nos enquêtes, et qui ne répond pas ?**
Demandez à l'équipe de nommer les groupes d'utilisateurs dont elle entend le moins parler. Comparez avec la liste d'invitation et l'annuaire des utilisateurs. La conversation révèle souvent que les utilisateurs les plus silencieux ont les problèmes les plus difficiles. Convenez d'un moyen de joindre un groupe silencieux ce trimestre, comme un court appel ou un autre canal.

**3. À quel moment de l'interaction demandons-nous, et qui décide ?**
Parcourez le chemin de la résolution à l'enquête. Trouvez chaque point où une personne peut influencer si, quand ou comment l'enquête est envoyée. Convenez de ceux de ces points qui doivent être automatisés. L'animateur peut demander ce qu'un agent pourrait faire pour protéger un score, comme une question de conception et non une accusation.

**4. Qu'entend un détracteur de notre part après avoir répondu ?**
Regardez quelques notes basses récentes et lisez les notes de suivi. Demandez si l'utilisateur se sentirait écouté. Discutez de la façon de rendre le suivi utile sans demander de changer la note. Décidez qui détient le suivi et quel est le délai cible.

**5. Quels commentaires du mois dernier ont changé ce que nous avons fait ?**
Imprimez ou affichez dix commentaires au hasard. Demandez à l'équipe lesquels ont été suivis d'effet, lesquels ne l'ont pas été et pourquoi. Cela garde l'attention sur les mots et construit une habitude de les lire. Convenez de coder les thèmes le mois suivant et de revoir la tendance.

**6. Avec quel chiffre publié sommes-nous tentés de nous comparer, et la comparaison est-elle juste ?**
Nommez le chiffre, sa source, sa méthode et son public, puis comparez chacun avec les vôtres. Demandez si cela changerait une décision. Sinon, mettez-le de côté et utilisez votre propre tendance. L'animateur doit consigner la réponse dans le registre des métriques.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes produit utilisent le retour de satisfaction pour décider quoi corriger ou construire ensuite, et de courtes enquêtes après une version donnent une lecture plus rapide que la prochaine revue trimestrielle. Les équipes de livraison doivent relier les commentaires aux éléments du backlog, montrer aux utilisateurs ce qui a changé et éviter de traiter un score comme un objectif de livraison. Une hausse des commentaires d'effort ou de confusion après une version est un signal pour regarder la version, non l'enquête.

### Équipes de service et d'exploitation

Les centres de services recueillent l'essentiel des données d'interaction et ressentent le plus la pression du score. Les équipes d'exploitation doivent envoyer les enquêtes automatiquement, publier la règle d'échantillonnage et se servir des commentaires pour l'apprentissage de l'équipe. Elles doivent garder le CSAT à côté du taux de réouverture et des contacts répétés, pour que des clôtures rapides ne ressemblent pas à de bons résultats (voir le sujet 3.1, Métriques du centre de services).

### Direction et gouvernance

Les dirigeants fixent le climat du détournement. Une demande de « 95 % de satisfaction d'ici la fin de l'année » apprend au personnel à protéger le chiffre. Les dirigeants doivent demander le taux de réponse, la composition des répondants et les principaux thèmes de commentaires, financer les corrections que les commentaires révèlent et garder la satisfaction hors de la rémunération et du classement individuels. La gouvernance doit attendre une méthode énoncée pour tout chiffre qu'elle rapporte à l'extérieur.

### Clients et utilisateurs

Les utilisateurs donnent leur temps et leur franchise. Ils méritent une courte enquête, une raison claire de la leur demander, une promesse sur l'usage de leurs réponses et une réponse quand ils signalent un problème. Là où l'enquête n'est pas anonyme, dites-le. Les utilisateurs qui ne voient rien changer cesseront de répondre, et le silence ressemblera à de la satisfaction.

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un centre de services et une petite équipe qui construit des applications cliniques. Les chiffres ci-dessous sont illustratifs.

Le CSAT mensuel du centre de services est de 92 %, calculé à partir de 140 réponses sur environ 3 100 tickets clos, soit un taux de réponse de 4,5 %. La direction est satisfaite. La responsable du service lit les commentaires et remarque que beaucoup de réponses positives viennent du personnel de l'administration, alors que les infirmières de nuit apparaissent à peine. Elle compare la composition des répondants avec l'annuaire des utilisateurs et constate que le personnel de nuit représente environ 18 % des utilisateurs et 3 % des répondants.

L'équipe fait trois changements. L'enquête devient un formulaire à deux questions avec une note et un commentaire, envoyé automatiquement par le système de tickets quatre heures après la résolution, pour chaque ticket. Une version par SMS est proposée au personnel posté. Le rapport mensuel montre désormais le CSAT avec le taux de réponse, l'intervalle de confiance, la composition des répondants face à celle des utilisateurs et les cinq principaux thèmes de commentaires.

En deux mois, le taux de réponse monte à environ 11 % et le CSAT tombe à 84 %. Les thèmes de commentaires montrent « j'ai dû rappeler » et « la correction n'a pas tenu » comme les deux principales plaintes, concentrées dans les systèmes cliniques. Le responsable informatique dit au conseil que l'ancien score reflétait qui répondait, et que le nouveau score est un meilleur guide. L'équipe produit ajoute un élément de backlog pour corriger la défaillance récurrente derrière les rappels, et le centre de services commence à contacter chaque utilisateur qui donne une note de 1 ou 2 dans un jour ouvré. Le trimestre suivant, le taux de contacts répétés pour les systèmes cliniques baisse, et la part des commentaires « j'ai dû rappeler » baisse avec lui. L'équipe consigne la décision dans son journal et ne fixe pas d'objectif de CSAT.

## Agilité, IA, automatisation et analytique

### Agilité

Demandez un retour en continu et en petites quantités, et revoyez les commentaires avec les parties prenantes à chaque conversation d'amélioration régulière. La précaution est que la fatigue d'enquête abaisse les taux de réponse et fausse la composition de ceux qui répondent.

### IA

L'IA peut résumer les commentaires et le sentiment en volume, et les interactions assistées par l'IA peuvent être notées différemment des interactions humaines. Rapportez séparément la satisfaction des contacts traités par l'IA et par des humains, appariez les scores avec des thèmes de commentaires et faites lire un échantillon par une personne. La précaution est qu'un modèle de sentiment peut mal lire le ton ou la langue : vérifiez-le donc face à un échantillon manuel.

### Automatisation

Déclenchez automatiquement les enquêtes à un moment choisi, et mesurez le processus d'enquête sur le taux de réponse et la composition des répondants. La précaution est que des enquêtes automatiques envoyées seulement après des contacts réussis biaisent le score à la hausse.

### Analytique

Montrez les scores avec le nombre de réponses et la composition des répondants, et lisez les commentaires avant les chiffres. La décision éclairée est quels parcours améliorer. La précaution est que les scores sur peu de réponses bougent beaucoup : montrez donc le décompte.

## Éclairage sectoriel

**Startup.** Un contact étroit avec les utilisateurs rend de courtes conversations meilleures que des enquêtes au début. Ajoutez une enquête d'une question quand le volume grandit, et continuez à lire chaque commentaire. Résistez à l'envie de publier un score avant d'avoir assez de réponses pour qu'il signifie quelque chose.

**Petite entreprise.** Un seul client mécontent peut compter plus qu'un score. Servez-vous de l'enquête comme d'une invite à parler aux gens, et gardez des traces des suivis. Les rapports de satisfaction fournis par les fournisseurs méritent du scepticisme sur la méthode.

**Grande entreprise.** L'échelle apporte des segments et la tentation de consolider. Gardez les scores par service et par public, publiez la méthode et évitez de moyenner des services dissemblables en un seul chiffre. Utilisez une plateforme d'enquête stable avec envoi automatique, et traitez avec prudence tout classement entre équipes.

**Gouvernement et secteur public.** Les organismes publics ont souvent des obligations formelles de recueillir le retour des utilisateurs et d'en publier les résultats, avec des devoirs d'accessibilité et de protection de la vie privée. Offrez des canaux d'enquête accessibles, protégez l'identité des répondants et publiez les méthodes avec les résultats. Là où un chiffre de satisfaction figure dans un contrat ou un rapport légal, définissez-le exactement et montrez le garde-fou à côté (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts directs sont l'outillage d'enquête, que beaucoup de systèmes de tickets incluent déjà, une heure ou deux chaque mois pour revoir les commentaires et coder les thèmes, et le temps de suivre les utilisateurs mécontents. Le coût plus grand est la discipline d'agir sur ce que vous entendez. Il n'est pas nécessaire d'avoir une nouvelle plateforme pour commencer.

Le rendement se voit dans des corrections que les utilisateurs valorisent et dans le gaspillage évité. Les commentaires disent où se trouve la friction : vous pouvez donc supprimer les causes de contacts répétés et de corrections échouées au lieu d'ajouter du personnel pour les traiter. Une meilleure vue de qui ne répond pas vous protège de décisions fondées sur une poignée autosélectionnée. Décrivez le bénéfice en termes des problèmes trouvés et supprimés, et mesurez vos propres références avant et après : taux de contacts répétés, taux de réouverture et temps jusqu'à la première réponse utile. N'utilisez pas un pourcentage inventé pour justifier le programme. Si vous avez besoin de chiffres, construisez-les à partir de vos propres données.

## Anti-modèles et pièges

- **Traiter le score comme un objectif.** Il sera atteint en sélectionnant qui est interrogé ou en coachant la réponse. Utilisez-le comme une question et appariez-le avec des commentaires et des mesures opérationnelles.
- **N'interroger qu'après des tickets faciles.** Envoyez à chaque interaction éligible, automatiquement.
- **Classer les agents par CSAT.** Cela pénalise ceux qui prennent les cas difficiles. Utilisez des vues d'équipe et de service et apprenez des commentaires.
- **Demander une meilleure note.** Le suivi d'une note basse doit viser à corriger le problème. Ne demandez pas de changement.
- **Rapporter un score sans taux de réponse.** Montrez toujours qui a répondu et combien.
- **Changer la question et garder la tendance.** Consignez les changements et marquez la rupture sur le graphique.
- **Importer une référence sans sa méthode.** Comparez d'abord avec votre propre historique.
- **Recueillir des commentaires sans jamais les lire.** Mettez une revue au calendrier et attribuez un responsable.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Instrument et échantillonnage | Enquête ponctuelle occasionnelle | Une enquête existe pour certains services, envoyée à la main | Courte enquête envoyée automatiquement à toutes les interactions éligibles | Règle d'échantillonnage, changements de formulation et exclusions consignés et revus | Instruments alignés entre équipes et fournisseurs, et révisés avec les utilisateurs |
| Qualité des données | Score seul | Taux de réponse rapporté | Taux de réponse, composition des répondants et incertitude rapportés | Couverture des répondants gérée ; codage vérifié par une deuxième personne | Vue partagée de l'expérience entre services, avec les utilisateurs impliqués dans l'interprétation |
| Action et suivi | Scores rapportés, rien ne change | Corrections occasionnelles issues des commentaires | Suivi des détracteurs avec un délai cible ; thèmes suivis | Les thèmes pilotent un travail d'amélioration financé et sont reliés aux données opérationnelles | La boucle fermée couvre équipes et fournisseurs ; les utilisateurs voient ce qui a changé |

## Liste de vérification

- [ ] Chaque enquête a un objectif énoncé et une décision qu'elle éclaire.
- [ ] Les questions sont courtes, neutres et incluent un commentaire libre.
- [ ] L'enquête est envoyée automatiquement à chaque interaction éligible ou à un échantillon aléatoire documenté.
- [ ] Le taux de réponse et la composition des répondants sont montrés à côté de chaque score.
- [ ] L'incertitude est montrée, et les petits échantillons sont rapportés comme des décomptes.
- [ ] Aucun agent individuel n'est classé selon la satisfaction.
- [ ] Une personne nommée suit les notes basses dans un délai convenu.
- [ ] Les commentaires sont codés dans une liste stable de thèmes et revus chaque mois.
- [ ] Les changements de formulation et d'échantillonnage sont consignés et marqués sur les graphiques.
- [ ] Les répondants sont informés de l'usage de leurs réponses, et les données personnelles sont protégées.

## Prompts d'IA

**Passez en revue un instrument d'enquête.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Codez des commentaires d'enquête en thèmes.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Vérifiez la représentativité.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Planifiez un suivi en boucle fermée.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de satisfaction avant de la publier.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'enquête révisée garde son vecteur de détournement et son garde-fou.

## Idées clés

- Les scores de satisfaction décrivent ce qu'un moment de service a fait ressentir : liez donc les enquêtes à des événements précis et gardez-les courtes.
- Rapportez toujours le taux de réponse, la composition des répondants et l'incertitude avec le score.
- Les commentaires expliquent les chiffres : lisez-les donc chaque mois et codez-les en thèmes.
- Envoyez les enquêtes automatiquement et ne demandez jamais aux utilisateurs de changer une note.
- Utilisez la satisfaction au niveau de l'équipe et du service, jamais pour classer des personnes, et traitez avec soin les références externes.
- Bouclez la boucle : les personnes qui signalent une mauvaise expérience doivent recevoir une réponse et voir un changement.

## Références et lectures complémentaires

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
