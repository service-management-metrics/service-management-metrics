# Métriques des demandes de fusion et de la revue de code

**La revue est l'endroit où le travail terminé attend le plus souvent : mesurez donc combien de temps un changement reste avant que quiconque le regarde, sa taille et la fréquence à laquelle il revient, et appariez chaque chiffre de vitesse avec un signal de qualité pour que plus vite ne signifie jamais plus bâclé.**

## Vue d'ensemble et motivation

Une [demande de fusion](https://en.wikipedia.org/wiki/Pull_request) (pull request) est une proposition de fusionner un ensemble de changements d'une branche d'un dépôt de [gestion de versions](https://en.wikipedia.org/wiki/Version_control) vers une autre, accompagnée de la conversation sur l'opportunité de la fusion. Dans beaucoup d'équipes, c'est la barrière formelle entre « l'auteur pense que cela fonctionne » et « l'équipe convient que cela peut partir en production ». La conversation est une forme de [revue de code](https://en.wikipedia.org/wiki/Code_review) : une personne autre que l'auteur lit le changement, pose des questions et l'approuve ou demande des révisions. Certaines plateformes appellent la même chose une demande de fusion (merge request) ; ce sujet emploie « demande de fusion » pour les deux.

La revue vaut la peine d'être mesurée pour une raison simple. Dans la vision de la livraison par le flux, un élément de travail passe l'essentiel de sa vie à attendre, et la revue est l'une des attentes qui relèvent entièrement du contrôle de l'équipe. Un goulot d'étranglement de plateforme partagée ou une dépendance externe demandent que d'autres personnes changent. Une demande de fusion qui attend deux jours un premier regard n'a besoin que des habitudes de l'équipe pour changer. Les mesures de flux de ce livre (voir le sujet 2.1, Mesures de flux, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) donnent le vocabulaire général. Ce sujet zoome sur une étape du cycle et lui donne ses propres instruments.

Les visions agile et ITIL se rencontrent ici de façon utile. Du point de vue agile, la revue est une boucle de retour et un mécanisme d'apprentissage. Elle diffuse la connaissance de la base de code, attrape tôt les défauts et fait respecter les accords de travail et la définition de terminé de l'équipe. Du point de vue ITIL, la même activité soutient plusieurs pratiques. Dans ITIL 4, la pratique de développement et de gestion des logiciels couvre la façon dont le logiciel est construit et vérifié, la maîtrise des changements couvre la façon dont les changements sont évalués et autorisés, et la gestion des déploiements couvre la façon dont les changements atteignent l'environnement de production. Une demande de fusion relue par des pairs est, pour beaucoup d'organisations, la preuve qu'un changement standard a été évalué avant sa mise en production. Traiter la revue comme une activité mesurée et améliorable sert les deux visions : l'équipe agile veut un retour plus rapide, et la pratique ITIL veut une assurance fiable que les changements ont été vérifiés.

Le risque à garder à l'esprit tout du long est que la vitesse et la qualité de la revue se séparent facilement. Une équipe peut diviser par deux son délai avant la première revue en approuvant tout à vue, et le tableau de bord montrera un triomphe pendant que la base de code se dégrade. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique avec une force inhabituelle à cette famille de métriques (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques), parce que les chiffres sont peu coûteux à recueillir, visibles de tous et d'une facilité dérisoire à faire bouger sans changer ce qu'ils devaient représenter. Chaque recommandation ci-dessous est écrite dans cet esprit.

L'**auteur** a ouvert la demande de fusion et un **relecteur** l'évalue. Un **tour de revue** est une boucle « l'auteur pousse, le relecteur répond ». La **reprise** est un changement fait après un commentaire de revue, ou après la fusion, pour corriger ce que la première version avait de faux. L'**intégration continue (CI)** est la pratique qui consiste à fusionner souvent le travail dans une ligne partagée et à vérifier automatiquement chaque fusion ; voir [intégration continue](https://en.wikipedia.org/wiki/Continuous_integration).

Toutes les métriques de ce sujet décrivent des équipes et des dépôts. Elles ne classent jamais des relecteurs ou des auteurs. Les décomptes de revue au niveau individuel sont faciles à extraire et tentants à utiliser, et le faire transforme une pratique de collaboration en concours (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

## Principes clés

- **L'attente domine la relecture.** Dans la plupart des équipes, la plus grande part du temps de revue est celle de la demande de fusion qui reste non lue, pas la discussion une fois qu'un relecteur commence. Mesurez l'attente avant de mesurer la conversation.
- **Les petits changements sont relus plus vite et mieux.** La taille est l'un des rares leviers qui améliore à la fois la vitesse et la minutie, parce qu'un relecteur peut tenir un petit changement dans sa tête.
- **La vitesse sans examen n'est pas une amélioration.** Chaque métrique de vitesse de ce sujet a besoin d'une contrepartie de qualité, et le couple se lit ensemble.
- **La revue est une capacité d'équipe, pas personnelle.** La charge doit se répartir dans l'équipe. Une métrique qui montre une concentration pointe vers un problème de conception de l'équipe, jamais vers une personne à féliciter ou à blâmer.
- **Les distributions valent mieux que les moyennes.** Les temps de revue ont une longue queue de demandes de fusion bloquées : rapportez donc la médiane et un percentile élevé (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Définissez l'horloge, puis n'y touchez plus.** Énoncez quand l'horloge démarre et s'arrête, quels événements la suspendent et quelle activité automatisée est exclue, et écrivez-le là où vivent les données (voir le sujet 1.5, Sources de données et instrumentation).
- **Les métriques de revue servent l'équipe qui détient le travail.** Elles sont une entrée pour la rétrospective de l'équipe, pas un tableau de score pour quelqu'un d'autre.

## Définitions des métriques

Les horloges ci-dessous supposent que la plateforme de gestion de versions enregistre les heures des événements d'ouverture, de demandes de revue, de commentaires, d'approbations, de poussées et de fusions. Les brouillons, les demandes de fusion ouvertes par des robots et celles closes sans fusion sont exclus sauf indication contraire d'une ligne. « Heures ouvrées » désigne les heures de travail déclarées de l'équipe, de sorte qu'une demande de fusion ouverte le vendredi soir ne cumule pas un week-end d'attente.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai avant la première revue | Attente entre le moment où une demande de fusion est prête pour la revue et la première réponse humaine de fond | L'horloge démarre quand la demande de fusion quitte le statut de brouillon ou est ouverte déjà prête, et s'arrête au premier commentaire de revue, à la première demande de changement ou approbation par quelqu'un d'autre que l'auteur ; les commentaires de robots et de l'auteur et les simples changements d'étiquette sont exclus. Rapporter la médiane et le 85e percentile en heures ouvrées | heures ouvrées | Historique des événements de la plateforme de gestion de versions | Développement et gestion des logiciels ; maîtrise des changements | Accord de travail sur la réactivité de la revue ; flux du travail en cours | Hebdomadaire |
| Temps de cycle de la revue | Temps total entre « prêt pour la revue » et la fusion | L'horloge démarre quand la demande de fusion est prête pour la revue et s'arrête à la fusion ; les demandes closes sans fusion sont exclues et comptées à part. Rapporter la médiane et le 85e percentile en heures ouvrées | heures ouvrées | Historique des événements de la plateforme de gestion de versions | Gestion des déploiements ; maîtrise des changements | Temps de cycle de l'étape de revue sur le tableau de l'équipe | Hebdomadaire |
| Taille de la demande de fusion | Quantité de changement dans une demande de fusion | Lignes ajoutées plus lignes supprimées, hors fichiers générés, fichiers de verrouillage, code importé et simples renommages, tels que listés dans les règles d'exclusion du dépôt. Rapporter la médiane et le 85e percentile par demande de fusion fusionnée | lignes modifiées | Statistiques de différences de la plateforme de gestion de versions | Développement et gestion des logiciels | Petite taille de lot ; découpage des récits | Hebdomadaire |
| Tours de revue | Nombre de boucles de poussée de l'auteur et de réponse du relecteur avant la fusion | Nombre de cycles distincts « changements demandés » ou commentaire puis poussée par demande de fusion fusionnée ; la première soumission est le tour zéro et les échecs de vérifications automatisées sont exclus. Rapporter la médiane et le 85e percentile | nombre | Événements de revue et de poussée de la plateforme de gestion de versions | Amélioration continue ; développement et gestion des logiciels | Signal de reprise à l'étape de revue ; définition de terminé | Hebdomadaire |
| Concentration de la charge de revue | Inégalité de la répartition du travail de revue dans une équipe | Part des revues terminées de l'équipe traitées par les deux relecteurs les plus sollicités sur 4 semaines glissantes ; les revues de sa propre demande de fusion et les revues de robots sont exclues. Rapportée pour l'équipe, jamais par nom | pourcentage | Événements de revue de la plateforme de gestion de versions, agrégés à l'équipe | Amélioration continue ; gestion des connaissances | Propriété collective du code | Mensuelle |
| Nombre de demandes de fusion périmées | Demandes de fusion ouvertes plus longtemps que la limite convenue par l'équipe | Demandes de fusion encore ouvertes et hors brouillon dont l'âge depuis « prêt pour la revue » dépasse la limite de l'équipe, comptées à l'instant de l'instantané ; brouillons exclus | nombre | Liste des demandes de fusion ouvertes de la plateforme de gestion de versions | Maîtrise des changements ; amélioration continue | Âge de l'élément de travail ; limite de WIP | Hebdomadaire |
| Taux de correctifs après fusion | Part des demandes de fusion fusionnées suivies peu après d'un changement correctif | Demandes de fusion fusionnées suivies dans les 14 jours d'une correction, d'une annulation ou d'un correctif urgent lié au même changement / demandes de fusion fusionnées dans la période ; le travail de suivi planifié et étiqueté comme tel est exclu | pourcentage | Historique de gestion de versions, anomalies liées et enregistrements d'incidents ou de changements | Maîtrise des changements ; gestion des incidents | Qualité intégrée ; définition de terminé | Mensuelle |

Le délai avant la première revue est le plus grand levier et la métrique par laquelle la plupart des équipes devraient commencer. Le temps de cycle de la revue est sa mesure de résultat et un composant des délais de livraison plus longs discutés dans le sujet 2.2. La fenêtre de 14 jours et la limite de péremption sont des exemples ; chaque équipe choisit des valeurs qui conviennent à son rythme de publication et les écrit. Là où les chiffres alimentent le tableau plus large de la livraison, la famille DORA (voir le sujet 2.8, Métriques DORA) et les mesures d'échec des changements (voir le sujet 4.4, Échecs de changement et reprises) prennent le relais.

## Recommandations

### Mesurer l'attente avant le travail

**1. Commencez par le délai avant la première revue.** C'est généralement le plus grand contributeur au temps de revue et le moins cher à améliorer. Instrumentez-le à partir de l'historique des événements de la plateforme pour que personne n'ait rien à saisir. Rapportez la médiane et un percentile élevé, car une médiane de trois heures avec un 95e percentile de quatre jours signifie que certains changements sont oubliés.

**2. Excluez les robots et les brouillons de l'horloge, et dites-le.** Les vérifications automatisées, les robots de mise à jour de dépendances et les outils de mise en forme créent des commentaires en quelques secondes, et les compter rend l'attente excellente en apparence. Démarrez l'horloge quand l'auteur marque le changement comme prêt, pas quand la branche est poussée la première fois. Publiez ces règles à côté du graphique.

**3. Utilisez les heures ouvrées, et écrivez le calendrier de l'équipe.** Une demande de fusion ouverte tard le vendredi ne doit pas porter un week-end d'attente. Une équipe répartie sur plusieurs fuseaux horaires a besoin d'une règle sur les heures qui comptent, et la réponse honnête est souvent que le coût de transmission entre fuseaux est précisément ce qui mérite d'être vu. Énoncez le choix et gardez-le stable.

### Façonner le travail pour qu'il soit relisible

**4. Gardez les demandes de fusion petites, et traitez la taille comme une habitude d'équipe.** Suivez la médiane et le 85e percentile de la taille, et regardez les grosses comme un ensemble plutôt que comme des échecs individuels. Les équipes constatent généralement que les gros changements viennent de quelques causes : un travail pas assez finement découpé, un mélange de refactorisation et de nouveau comportement, ou une fusion trop tardive. Découpez le travail pour que chaque demande de fusion fasse une seule chose, ce qui correspond aussi au principe du petit lot derrière le [développement sur tronc](https://en.wikipedia.org/wiki/Trunk-based_development) et le déploiement fréquent.

**5. Ne fixez pas de plafond de taille strict comme objectif.** Une limite comme « pas plus de 400 lignes » invite à scinder un changement en morceaux artificiels qui sont individuellement illisibles ou qui cassent la compilation une fois fusionnés seuls. Servez-vous de la taille pour lancer la conversation en rétrospective, et donnez à l'équipe des techniques de découpage, comme les interrupteurs de fonctionnalité, la refactorisation préparatoire dans sa propre demande de fusion et la fusion derrière un indicateur.

**6. Rendez la demande de revue explicite.** Une demande de fusion qui ne nomme aucun relecteur attend un volontaire, et les volontaires sont rares. Convenez, dans l'accord de travail, de qui l'on sollicite, de la façon dont l'équipe est notifiée et de l'attente de réponse. Un tour de rôle de revue partagé, ou un créneau de revue quotidien, réduit généralement l'attente plus que n'importe quel réglage d'outil.

### Répartir la charge et la connaissance

**7. Surveillez la concentration de la charge comme un risque d'équipe.** Si deux personnes traitent la plupart des revues, leur disponibilité limite le flux de l'équipe, et leur absence l'arrête. Revoyez la mesure de concentration chaque mois et agissez par la conception de l'équipe : faites tourner le relecteur par défaut, associez les nouveaux membres à des personnes expérimentées et écrivez les zones du code que seule une personne peut relire. Ne publiez pas de classement par personne.

**8. Utilisez la revue pour partager la connaissance, et protégez cet objectif.** La valeur à long terme de la revue comprend l'apprentissage, la propriété partagée et la cohérence de style, en plus de la détection de défauts. La [programmation en binôme](https://en.wikipedia.org/wiki/Pair_programming) et la programmation en groupe déplacent une partie de cet échange plus tôt dans le processus ; lorsqu'un binôme a déjà travaillé sur un changement, une revue plus légère est raisonnable. Faites-en une décision d'équipe, écrite dans l'accord de travail, pour que « en binôme, donc revue légère » soit une règle visible et non une excuse.

### Maîtriser la revue elle-même

**9. Laissez l'automatisation faire ce qu'elle fait bien.** La mise en forme, l'analyse statique de style et les vérifications de base relèvent de la chaîne, pour que l'attention humaine aille à la conception, à l'exactitude et au risque. L'[analyse statique de programmes](https://en.wikipedia.org/wiki/Static_program_analysis) et les tests automatisés réduisent le nombre de tours de revue triviaux. Les tours restants en disent alors plus sur la conversation de conception et moins sur les désaccords de style.

**10. Lisez les tours de revue comme un signal de clarté, pas comme un décompte de fautes.** De nombreux tours peuvent signifier que l'exigence était floue, que l'auteur manquait de contexte, que le relecteur demandait des changements de goût ou que le changement était gros. Zéro tour sur chaque demande de fusion peut signifier un excellent travail ou que personne n'a regardé. Échantillonnez une poignée de demandes de fusion avec un nombre de tours inhabituellement élevé ou bas et lisez-les ensemble en équipe.

### Apparier vitesse et qualité, et garder le temps visible

**11. Montrez toujours une contrepartie de qualité à côté de la vitesse de revue.** Le taux de correctifs après fusion, les incidents liés aux changements récents et la part des défauts trouvés après la publication sont les partenaires naturels (voir le sujet 4.4, Échecs de changement et reprises). Si le temps de revue s'améliore pendant que le taux de correctifs se dégrade, l'équipe a échangé de l'assurance contre de la vitesse, et la solution est une conversation plutôt qu'un objectif. Montrez les deux sur le même graphique.

**12. Reliez la revue au tableau du flux et au travail non planifié.** Une revue plus rapide n'aide que si l'étape suivante ne se contente pas de mettre le travail en file (voir le sujet 2.3, Travail en cours et théorie des files d'attente). Les demandes de revue urgentes qui interrompent le travail planifié ont un coût propre (voir le sujet 2.9, Travail opérationnel et travail non planifié).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Délai avant la première revue | Poster un rapide « ça me va » ou un émoji comme première réponse ; assigner un robot ou un relecteur complaisant ; marquer une demande de fusion prête seulement après que quelqu'un a convenu à l'avance de la regarder | Taux de correctifs après fusion ; échantillon d'approbations sans commentaire ; exiger dans l'accord de travail que les premières réponses soient de fond |
| Temps de cycle de la revue | Fusionner sans attendre la revue ; scinder un changement en minuscules morceaux pour passer plus vite ; clore et rouvrir une demande de fusion pour réinitialiser l'horloge | Décompte des demandes de fusion closes puis rouvertes ; tours de revue ; taux de correctifs après fusion ; règles de branche protégée exigeant une approbation |
| Taille de la demande de fusion | Exclure des fichiers du décompte ; scinder un changement unique en morceaux qui ne se comprennent pas séparément ; gonfler la taille avec du code généré | Revoir les règles d'exclusion chaque trimestre ; vérifier que les morceaux scindés compilent et passent les tests seuls ; lire un échantillon des plus petites et des plus grandes |
| Tours de revue | Approuver dès le premier passage pour garder le compteur bas ; déplacer la discussion vers la messagerie pour qu'elle ne laisse pas de trace ; auteurs poussant de nombreuses corrections en un seul commit pour cacher les tours | Taux de correctifs après fusion ; échantillon de demandes de fusion à zéro tour ; garder la discussion dans la demande de fusion |
| Concentration de la charge de revue | Scinder les revues en nombreuses petites approbations pour répartir le décompte ; assigner des revues à ceux qui ont du temps mais pas la connaissance | Vérifier la connaissance du relecteur pour les zones à risque ; surveiller le taux de correctifs après fusion par zone ; garder la métrique au niveau de l'équipe |
| Nombre de demandes de fusion périmées | Clore les demandes périmées sans les fusionner ; les convertir en brouillons pour les cacher ; relever la limite de péremption | Décompte des demandes de fusion closes sans fusion ; décompte des brouillons de longue durée ; revoir la limite avec l'équipe chaque trimestre |
| Taux de correctifs après fusion | Consigner les corrections sous un nouvel élément de travail sans lien ; étiqueter le travail correctif comme suivi planifié ; éviter la métrique en repoussant la correction au-delà de la fenêtre | Comparer avec les données d'incidents et d'échecs de changement ; échantillon d'éléments de suivi ; audit des étiquettes utilisées |

Une lecture saine est une lecture calme. Le délai avant la première revue est court et la queue l'est aussi, de sorte qu'aucune demande de fusion n'attend des jours. La taille reste dans une fourchette que l'équipe trouve facile à lire, avec quelques gros changements que l'équipe sait expliquer. Les tours de revue sont bas mais non nuls, la concentration de la charge est modérée, le nombre de demandes périmées est faible et le taux de correctifs après fusion est stable. Quand un chiffre s'améliore nettement, quelqu'un doit vérifier que son garde-fou associé n'a pas bougé dans le mauvais sens.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Revue rapide avec des attentes de réponse strictes | Boucles de retour courtes ; moins de perte de contexte pour l'auteur ; travail en cours plus bas | Pression pour approuver vite ; interrompt le travail concentré |
| Revue lente et approfondie | Lecture attentive de la conception et du risque ; meilleur transfert de connaissance | Temps de cycle plus long ; des lots plus gros s'accumulent ; les auteurs passent à autre chose et perdent le contexte |
| Petites demandes de fusion | Plus faciles à lire et à annuler ; flux plus fluide | Plus de surcoût par changement ; peut fragmenter une fonctionnalité en étapes confuses |
| Grosses demandes de fusion | Moins de transmissions ; fonctionnalité entière visible d'un coup | Revues superficielles ; plus difficiles à annuler ; longues attentes |
| Approbation obligatoire d'un responsable nommé | Responsabilité claire pour les zones à risque ; soutient l'autorisation des changements | Crée un goulot d'étranglement et un point de défaillance unique |
| Vérifications automatisées avant la revue humaine | Libère les personnes pour la conception et le risque ; cohérent | Peut créer une fausse confiance ; demande de la maintenance |

Aucune politique unique ne gagne. Le but est de raccourcir l'attente en préservant l'examen, et la voie habituelle est faite de changements plus petits, d'attentes de revue claires, d'une forte automatisation pour les vérifications courantes et d'un accord d'équipe sur ce qu'est une bonne revue. Les métriques de revue sont plus utiles comme questions pour une rétrospective et moins comme objectifs.

## Questions à discuter avec votre équipe

**1. Où une demande de fusion passe-t-elle l'essentiel de sa vie : à attendre ou à être relue ?**
Demandez à l'équipe de deviner avant de regarder les données, puis montrez la répartition entre le délai avant la première revue et le reste du temps jusqu'à la fusion. La plupart des groupes sont surpris de voir à quel point c'est de l'attente. L'animateur doit noter quelles devinettes étaient fausses et demander ce que chacune dit de la façon dont l'équipe vit la revue. Terminez par un changement qui s'attaque à la plus grande attente.

**2. À quoi ressemble une bonne revue dans cette équipe, et comment un étranger le verrait-il ?**
Listez les comportements que l'équipe valorise, comme poser des questions sur la conception, vérifier les tests et expliquer la raison d'une demande. Demandez ensuite lesquels laissent une trace visible dans la demande de fusion. Discutez de la façon de distinguer une première réponse de fond d'une réponse de pure forme sans surveiller les individus. Convenez d'une courte description écrite à mettre dans l'accord de travail.

**3. À partir de quelle taille est-ce trop gros pour nous, et que faisons-nous quand le travail est vraiment gros ?**
Regardez la distribution des tailles et choisissez quelques-unes des plus grosses demandes de fusion. Demandez pourquoi chacune était grosse et si elle aurait pu être découpée. Discutez de techniques comme les interrupteurs de fonctionnalité, la refactorisation préparatoire et la fusion derrière un indicateur. L'animateur doit résister à l'envie de fixer une limite chiffrée et convenir plutôt d'une habitude que l'équipe essaiera pendant un mois.

**4. Qui relit notre code le plus risqué, et que se passe-t-il quand ces personnes sont absentes ?**
Cartographiez les zones du code face aux personnes qui peuvent bien les relire. Regardez la concentration de la charge et les zones qui n'ont qu'un relecteur qualifié. Discutez de la façon de former un second relecteur dans chacune, par le binôme ou la rotation des affectations. Gardez la conversation sur la résilience de l'équipe, pas sur un classement de la charge de quiconque.

**5. Si notre vitesse de revue doublait demain, qu'aimerions-nous qui soit vrai de la qualité ?**
Demandez au groupe de nommer les signaux de qualité qu'il surveillerait, comme les correctifs après fusion, les incidents liés aux changements récents ou le nombre d'annulations. Vérifiez si ces signaux sont actuellement visibles à côté du graphique de vitesse. Discutez de ce qui serait un signe précoce que la vitesse a été achetée au prix de l'examen. Convenez de la contrepartie à montrer sur le tableau de bord.

**6. Quels chiffres de revue serions-nous tentés d'améliorer d'une façon qui n'aide pas ?**
Parcourez chaque métrique et demandez comment une personne sous pression pourrait la faire paraître meilleure sans rien améliorer. Comparez les réponses avec le tableau de détournement ci-dessus et ajoutez les idées propres de l'équipe. Le but est de nommer le risque avant qu'il ne se produise. Convenez du garde-fou qui sera revu avec chaque métrique.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison détiennent le processus de revue et devraient détenir ses métriques. Elles profitent surtout d'un raccourcissement de l'attente par des accords simples : un créneau de revue quotidien, un processus de demande clair et de petits changements. Elles doivent se servir des chiffres en rétrospective, garder le travail en cours bas et résister à la tentation d'optimiser un seul graphique. La revue est aussi l'endroit où les nouveaux membres apprennent la base de code : protégez cet objectif.

### Équipes de service et d'exploitation

Les équipes d'exploitation rencontrent la revue là où le code d'infrastructure, la configuration et l'automatisation des runbooks sont modifiés par des demandes de fusion. Pour elles, la revue fait souvent partie de la façon dont un changement standard est approuvé et justifié (voir le sujet 4.3, Métriques de maîtrise des changements). Elles doivent convenir des changements qui exigent une revue par une seconde personne, de la rapidité de revue des correctifs urgents et de la façon dont les changements d'urgence sont relus après coup, pour qu'un correctif précipité soit quand même examiné. Une revue mince sur un changement risqué se manifestera plus tard comme un incident.

### Direction et gouvernance

Les dirigeants doivent traiter les métriques de revue comme des signaux sur la santé de l'équipe et le flux, pas comme des scores de productivité. Ils doivent demander la mesure de qualité associée chaque fois qu'un chiffre de vitesse est rapporté, soutenir le temps qu'une revue soigneuse demande et éviter de comparer les équipes sur le temps de revue brut, puisque les dépôts et les risques diffèrent. Les instances de gouvernance peuvent utiliser les preuves de revue dans l'assurance des changements, à condition d'accepter qu'un processus de revue documenté et échantillonné vaut mieux qu'un décompte d'approbations.

### Clients et utilisateurs

Les clients ne voient pas les demandes de fusion, mais ils en ressentent les résultats : la rapidité d'arrivée d'une correction et la fréquence à laquelle une version apporte un nouveau défaut. De courtes attentes de revue aident les correctifs urgents à les atteindre plus tôt, et une revue réfléchie aide à tenir les défauts loin d'eux. Là où un service a un historique de versions ou de défauts publié, les clients profitent du fait que l'équipe montre au fil du temps moins d'annulations et moins de corrections répétées.

## En pratique : un exemple de gestion des services

Le service informatique d'un hôpital régional exploite un service web de rendez-vous des patients, construit par une équipe produit de sept personnes et exploité avec un petit groupe de fiabilité des sites. Tous les chiffres de cet exemple sont illustratifs.

Lors d'une revue trimestrielle, l'équipe constate que son temps de cycle de la revue a une médiane de 26 heures ouvrées et un 85e percentile de 71 heures ouvrées (illustratif). La décomposition du cycle montre que le délai médian avant la première revue est de 19 heures ouvrées : l'essentiel du retard est donc de l'attente. La taille des demandes de fusion a une médiane de 180 lignes et un 85e percentile de 900 lignes (illustratif), et les deux relecteurs les plus sollicités traitent 68 % des revues (illustratif). Le taux de correctifs après fusion est de 9 % (illustratif).

L'équipe prend trois accords. Elle fixe un créneau de revue quotidien de 30 minutes, écrit dans son accord de travail l'attente d'une première réponse sous un jour ouvré et fait tourner chaque semaine une mission « revue d'abord ». Elle adopte aussi une habitude de découpage pour le gros travail, en utilisant des interrupteurs de fonctionnalité pour que des fonctionnalités partielles puissent être fusionnées en sécurité. Elle ne fixe ni limite de taille ni objectif de délai avant la première revue.

Après deux mois, le délai médian avant la première revue tombe à 6 heures ouvrées et le 85e percentile du temps de cycle de la revue tombe à 34 heures ouvrées (illustratif). La concentration de la charge baisse à 52 % (illustratif), et le taux de correctifs après fusion reste à 9 %.

L'équipe repère alors un risque de détournement. Un échantillon d'approbations montre qu'environ un tiers des premières réponses arrivent en quelques minutes et ne disent que « LGTM » sur des changements touchant la logique des rappels de rendez-vous. Le gain de vitesse était en partie réel et en partie un coup de tampon. Le taux de correctifs après fusion n'avait pas encore bougé parce que le code concerné s'exécute selon un cycle mensuel. L'équipe modifie l'accord de travail pour qu'une première réponse comporte soit une question, soit un commentaire sur une partie précise du changement, soit une note explicite de ce qui a été vérifié, et ajoute à son graphique de revue la part échantillonnée d'approbations sans commentaire. Elle convient aussi que les changements à la logique des rappels destinés aux patients exigent deux relecteurs, dont un du groupe d'exploitation. La décision, avec ses raisons, entre dans le journal des décisions de l'équipe.

## Agilité, IA, automatisation et analytique

### Agilité

Des revues rapides et petites soutiennent la livraison continue et un rythme soutenable. Une habitude pratique est de convenir d'une norme d'équipe pour le délai avant la première revue et de parler des demandes de fusion périmées à la revue d'équipe régulière. La précaution est que la vitesse de revue traitée comme un objectif mène au coup de tampon : appariez-la donc avec les correctifs après fusion.

### IA

Les changements générés par l'IA peuvent faire monter le volume et la taille des demandes de fusion, et les outils de revue par IA peuvent accélérer le premier regard. Appariez le délai avant la première revue avec le taux de correctifs après fusion pour les changements assistés par l'IA, et rapportez la charge de revue par rôle de relecteur, pas par personne. La précaution est qu'un commentaire de revue d'un robot peut être compté comme une revue : comptez donc la revue humaine séparément.

### Automatisation

Tirez automatiquement les événements de revue de l'hébergeur de code, et lancez des vérifications automatisées avant la revue humaine pour que les gens consacrent leur temps au jugement. Mesurez les vérifications elles-mêmes sur les fausses alertes et sur les défauts qui leur échappent. La précaution est qu'une forte automatisation peut rendre la revue humaine superficielle, puisque les gens supposent que les outils ont tout attrapé.

### Analytique

Montrez les distributions de taille, de délai avant la première revue et de tours de revue par équipe, jamais par individu. La décision éclairée est où la capacité de revue ou la taille des changements demande de l'attention. La précaution est que ces chiffres décrivent le système de revue, et que tout usage qui classe des personnes les poussera vers des changements plus petits, plus sûrs et moins utiles.

## Éclairage sectoriel

**Startup.** Une petite équipe peut relire en quelques minutes parce que tout le monde connaît le code, et le principal risque est de sauter la revue quand le temps manque. Gardez peu de métriques : le délai avant la première revue et la taille suffisent. Établissez tôt l'habitude des petits changements, car elle est bien plus difficile à introduire une fois que la base de code et l'équipe ont grandi.

**Petite entreprise.** Souvent un ou deux développeurs, ou un fournisseur externe, maintiennent le logiciel. La revue peut être faite par un seul collègue ou par le personnel du fournisseur. Demandez aux fournisseurs comment ils relisent et si les données de demandes de fusion peuvent être partagées, et gardez une trace simple des changements relus et par qui, car la revue est le principal contrôle contre les erreurs dans une petite équipe.

**Grande entreprise.** De nombreuses équipes, dépôts et règles d'approbation créent une grande variation. Standardisez les définitions des horloges et des exclusions pour que les données de plateforme soient comparables, mais ne classez pas les équipes sur le temps de revue brut, puisque le risque et la base de code diffèrent. Méfiez-vous des exigences de revue imposées pour l'audit qui ajoutent de l'attente sans ajouter d'examen, et cherchez des occasions de remplacer des approbations manuelles par des vérifications automatisées et une revue échantillonnée.

**Gouvernement et secteur public.** La séparation des tâches, les pistes d'audit et les règles de passation de marchés exigent souvent une approbation indépendante des changements. Traitez ces règles comme des entrées de conception : consignez qui a approuvé quoi et quand, et mesurez l'attente qu'elles créent. Là où des fournisseurs écrivent le code, précisez dans le contrat les preuves de revue et l'accès aux données (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de raccourcir la partie de la livraison qui est à la fois lente et maîtrisable, tout en gardant les bénéfices de la revue par les pairs : moins de défauts, connaissance partagée et piste d'audit. Les demandes de fusion qui attendent retiennent le travail terminé loin des utilisateurs, augmentent le coût du changement de contexte pour les auteurs et rendent les conflits de fusion plus probables à mesure que les branches vieillissent. Réduire l'attente rapporte donc par une livraison plus rapide, moins de reprise et moins de frustration.

Le coût de recueil de ces métriques est faible quand la plateforme de gestion de versions fournit l'historique des événements et une API. Les principaux coûts sont le temps de définir les horloges et les exclusions, de construire ou configurer le rapport et de revoir régulièrement les chiffres. Le coût le plus lourd est comportemental : le temps que les gens consacrent à relire promptement, qui entre en concurrence avec d'autre travail. Ce temps est le véritable investissement, et il doit être budgété plutôt que traité comme gratuit.

Le rendement se voit dans un temps de cycle de revue plus court, moins de demandes de fusion périmées et un taux de correctifs après fusion stable ou en baisse. Évitez d'annoncer d'avance un pourcentage d'amélioration précis, puisque les résultats dépendent du point de départ et de l'équipe. Un dossier crédible compare les distributions avant et après de l'équipe elle-même, avec sa contrepartie de qualité, plutôt que de citer des chiffres d'autres organisations. Le livre *Accelerate* de 2018 rapporte des recherches reliant des pratiques techniques et culturelles à la performance de livraison et constitue une source raisonnable pour l'argument général, mais les chiffres de votre équipe viennent de vos propres données.

## Anti-modèles et pièges

- **Classer les relecteurs ou les auteurs.** Les classements individuels de revues terminées ou de lignes modifiées corrompent la collaboration. Rapportez au niveau de l'équipe et servez-vous des chiffres pour ajuster les habitudes de l'équipe.
- **Viser le délai avant la première revue sans contrepartie de qualité.** Le résultat est le coup de tampon. Montrez le taux de correctifs après fusion et un échantillon d'approbations sans commentaire à côté de chaque graphique de vitesse.
- **Fixer une limite de taille stricte.** Les équipes scindent le travail artificiellement pour s'y conformer. Servez-vous de la taille comme d'une conversation et enseignez plutôt des techniques de découpage.
- **Traiter l'absence de commentaires comme un succès.** Une approbation non examinée peut refléter de la confiance ou de l'inattention. Échantillonnez ces demandes de fusion et lisez-les ensemble.
- **Compter l'activité des robots comme de la revue.** Les commentaires automatisés font paraître l'attente courte. Excluez les robots de l'horloge et des mesures de charge.
- **Ignorer les fuseaux horaires et les calendriers.** Le temps d'horloge brut fait paraître les week-ends et les attentes entre régions comme une revue lente. Utilisez les heures ouvrées et nommez le calendrier.
- **Laisser la liste des demandes périmées grossir.** Les vieilles demandes de fusion accumulent des conflits de fusion et perdent leur contexte. Revoyez la liste chaque semaine et fusionnez, retravaillez ou clôturez chaque élément avec un motif.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition et horloges | Le temps de revue est deviné ou rapporté à l'impression | Certaines équipes exportent des temps de la plateforme avec leurs propres règles | Une définition écrite de chaque horloge, avec exclusions pour les robots, les brouillons et les calendriers | Définitions revues selon une cadence ; changements consignés avec leurs motifs | Définitions alignées entre équipes et fournisseurs et révisées quand elles cessent d'éclairer les décisions |
| Pratique de revue | Les revues ont lieu quand quelqu'un le remarque | Normes informelles dans certaines équipes | Accord de travail écrit sur les demandes, les attentes de réponse et ce qu'une revue couvre | Normes ajustées d'après les données ; partage de connaissances et zones à risque suivis | Pratique de revue coordonnée entre équipes et fournisseurs, l'automatisation traitant les vérifications courantes |
| Contrepartie de qualité | Aucun lien entre revue et défauts | Coup d'œil occasionnel aux correctifs après fusion | Taux de correctifs après fusion montré à côté de la vitesse de revue | Garde-fous revus régulièrement ; approbations échantillonnées lues | Preuves de revue reliées à l'assurance des changements et à l'apprentissage des incidents sur tous les services |
| Usage pour l'amélioration | Chiffres inutilisés | Montrés à certaines rétrospectives | Revus par l'équipe responsable selon une cadence fixe | Les écarts mènent à un travail d'amélioration planifié et doté de ressources | Les idées d'amélioration circulent des équipes vers la pratique partagée et en retour |

## Liste de vérification

- [ ] Les horloges du délai avant la première revue et du temps de cycle de la revue sont écrites, avec début, fin et exclusions.
- [ ] Les robots, les brouillons et les demandes de fusion closes sans fusion sont exclus ou comptés à part, et les règles sont visibles.
- [ ] Les temps sont rapportés comme la médiane et un percentile élevé en heures ouvrées.
- [ ] La taille des demandes de fusion est mesurée avec une liste d'exclusion convenue pour les fichiers générés et importés.
- [ ] L'équipe a un accord écrit sur la façon dont les revues sont demandées et sur la rapidité attendue d'une première réponse.
- [ ] La concentration de la charge de revue est rapportée uniquement au niveau de l'équipe.
- [ ] Un taux de correctifs après fusion ou une autre contrepartie de qualité est montré sur le même graphique que la vitesse de revue.
- [ ] Un échantillon d'approbations sans commentaire et très rapides est lu chaque mois.
- [ ] La liste des demandes de fusion périmées est revue chaque semaine.
- [ ] Les données de revue sont utilisées en rétrospective et non dans l'évaluation individuelle.
- [ ] Les zones du code n'ayant qu'un seul relecteur qualifié sont listées et ont un plan.

## Prompts d'IA

**Rédigez les définitions d'horloges pour les métriques de revue.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Analysez un export de données de revue.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Trouvez les risques de détournement de nos métriques de revue.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Préparez une rétrospective sur le flux de revue.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique de flux ou de qualité voisine et le garde-fou qui doit se trouver à côté d'une métrique de revue.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent cohérents le modèle, le tableau de détournement et les renvois.

## Idées clés

- L'essentiel du retard de revue est de l'attente : mesurez donc le délai avant la première revue et le temps de cycle de la revue comme des distributions en heures ouvrées.
- Les petites demandes de fusion sont relues plus vite et avec plus de soin ; enseignez le découpage plutôt que d'imposer un plafond de taille.
- Appariez chaque mesure de vitesse avec une contrepartie de qualité, comme le taux de correctifs après fusion, et lisez les deux ensemble.
- Traitez la charge de revue comme une capacité d'équipe et rapportez la concentration au niveau de l'équipe, jamais comme un classement de personnes.
- Les métriques de revue sont des questions pour une rétrospective, et elles servent l'équipe qui détient le travail.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
