# Métriques de satisfaction et de bien-être

**Les gens qui se sentent en sécurité, estimés et capables de tenir leur rythme font du meilleur travail plus longtemps : interrogez donc sur le bien-être avec soin, gardez les réponses anonymes et agrégées, et traitez ce que vous apprenez comme un appel à changer le travail, jamais comme un jugement sur la personne.**

## Vue d'ensemble et motivation

Les principes du Manifeste agile disent que les processus agiles favorisent un développement soutenable : les commanditaires, les développeurs et les utilisateurs doivent pouvoir maintenir indéfiniment un rythme constant. Ils disent aussi de bâtir les projets autour d'individus motivés et de leur faire confiance pour atteindre l'objectif. Une organisation de services qui dépend de personnes pour faire tourner des systèmes complexes pendant les nuits, les fins de semaine et les crises doit se demander si sa façon de travailler peut réellement être soutenue. Les mesures de satisfaction et de bien-être sont la manière de se le demander.

Ces mesures sont plus sensibles que toutes les autres de ce livre. Elles touchent à ce que les gens ressentent de leur travail, de leurs collègues et de leur santé. Mal faites, elles envahissent la vie privée, créent de la peur et produisent de fausses réponses. Bien faites, elles donnent aux équipes et aux dirigeants une alerte précoce de problèmes qui feraient autrement surface sous forme de démissions, d'erreurs et d'incidents. Ce sujet porte donc autant sur l'éthique et la méthode que sur les métriques, et il fait suite au sujet antérieur sur les conditions de l'équipe (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

Trois idées l'encadrent.

- **La satisfaction n'est pas le bien-être, et l'engagement non plus.** La [satisfaction au travail](https://en.wikipedia.org/wiki/Job_satisfaction) est ce qu'une personne ressent de son emploi, l'[engagement des employés](https://en.wikipedia.org/wiki/Employee_engagement) est une implication énergique dans le travail, et le bien-être est un état plus large de santé et d'épanouissement. Une personne peut être satisfaite d'un emploi qui l'use. Mesurer l'un ne renseigne pas sur les autres.
- **La motivation vient de conditions qui peuvent être construites.** La [théorie de l'autodétermination](https://en.wikipedia.org/wiki/Self-determination_theory), développée par Edward Deci et Richard Ryan, propose que la [motivation intrinsèque](https://en.wikipedia.org/wiki/Intrinsic_motivation) des gens est soutenue quand trois besoins sont satisfaits : l'autonomie, le sentiment de maîtriser son travail ; la compétence, le sentiment d'efficacité et de progrès ; et l'appartenance, le sentiment de lien avec les autres. Cela correspond à l'appel agile à des individus motivés à qui l'on donne l'environnement et la confiance dont ils ont besoin.
- **La sécurité pour s'exprimer est une condition préalable.** La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), concept développé par Amy Edmondson, est la croyance partagée qu'une équipe est un lieu sûr pour prendre des risques interpersonnels. Sans elle, les gens cachent erreurs, préoccupations et épuisement, et chaque enquête mesure ce que les gens osent dire, non ce qu'ils ressentent.

Les mesures de bien-être comportent des dangers particuliers. Les répondants peuvent donner les réponses qu'ils pensent attendues, un schéma connu sous le nom de [biais de désirabilité sociale](https://en.wikipedia.org/wiki/Social_desirability_bias). L'épuisement professionnel est une affaire sérieuse, et la classification de l'Organisation mondiale de la santé décrit le burn-out comme un phénomène lié au travail résultant d'un stress chronique au travail qui n'a pas été géré avec succès. Ce n'est pas un diagnostic médical posé par une enquête. Les chercheurs décrivent l'épuisement par l'épuisement émotionnel, le cynisme et une efficacité réduite ([épuisement professionnel](https://en.wikipedia.org/wiki/Occupational_burnout) est le terme général), et les employeurs doivent offrir du soutien et corriger les conditions, non diagnostiquer des individus. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) prend ici un visage humain : quand un score de bien-être devient un objectif pour un gestionnaire, les gens apprennent à dire qu'ils vont bien (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Une dernière mise en garde : ce sujet décrit une pratique de mesure et ne donne aucun avis médical, psychologique ou juridique. Impliquez des professionnels qualifiés, comme la santé au travail, les ressources humaines et les représentants des employés, et suivez le droit de la vie privée et du travail qui s'applique là où travaillent vos gens.

## Principes clés

- **La participation est volontaire et les réponses sont anonymes.** Personne ne doit se sentir obligé de dire ce qu'il ressent.
- **Rapportez seulement en groupes.** Utilisez une taille minimale de groupe, et supprimez tout ce qui pourrait identifier une personne.
- **N'utilisez jamais ces mesures pour évaluer des individus.** Elles décrivent le travail et l'équipe.
- **Ne diagnostiquez jamais.** Les enquêtes peuvent montrer des conditions, et le jugement clinique appartient aux professionnels qualifiés.
- **Corrigez les conditions.** La réponse à un mauvais résultat est de changer la charge de travail, le processus ou les priorités.
- **Visez un rythme que l'équipe peut soutenir.** De courtes pointes vont bien, l'urgence permanente non.
- **Agissez là où les gens peuvent le voir.** Un changement visible construit la confiance dont les réponses honnêtes ont besoin.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Note de rythme soutenable | Note de l'équipe sur la possibilité de tenir indéfiniment le rythme actuel | note moyenne et dispersion sur une échelle convenue pour l'énoncé « nous pourrions continuer à travailler à ce rythme indéfiniment » | points d'échelle | Sondage flash d'équipe anonyme | Amélioration continue ; gestion de la main-d'œuvre et des talents | Rythme constant indéfiniment | Mensuelle |
| Note de sécurité psychologique | Note de l'équipe sur la sécurité de soulever des problèmes et de prendre des risques interpersonnels | note moyenne sur un court ensemble validé d'énoncés, par équipe | points d'échelle | Sondage flash d'équipe anonyme | Amélioration continue ; gestion de la main-d'œuvre et des talents | Confiance et réflexion ouverte | Trimestrielle |
| Note de soutien des besoins | Note de l'équipe sur l'autonomie, la compétence et l'appartenance au travail | note moyenne pour chacun de trois énoncés, par équipe | points d'échelle | Sondage flash d'équipe anonyme | Gestion de la main-d'œuvre et des talents ; amélioration continue | Individus motivés avec l'environnement dont ils ont besoin | Trimestrielle |
| Note de tension de la charge de travail | Note de l'équipe sur l'exigence de la charge de travail par rapport à la capacité | note moyenne et part jugeant la charge insoutenable | points d'échelle ; pourcentage | Sondage flash d'équipe anonyme | Gestion de la capacité et de la performance ; gestion de la main-d'œuvre et des talents | Développement soutenable | Mensuelle |
| Semaines prolongées soutenues | Part des semaines où la rotation ou l'équipe a travaillé bien au-delà de ses heures normales, comptée au niveau de la rotation ou de l'équipe | semaines de la période avec heures prolongées au niveau de l'équipe / semaines de la période | pourcentage | Registres de rotation et journaux d'astreinte agrégés par équipe ; déclaré par l'équipe, sur adhésion | Gestion des incidents ; gestion de la capacité et de la performance | Heures supplémentaires comme signal de surcharge | Mensuelle |
| Attrition volontaire et thèmes de départ | Part des membres de l'équipe qui partent volontairement dans une période, avec les thèmes des entretiens de départ | départs volontaires / effectif moyen ; décomptes de thèmes issus de personnes partantes consentantes | pourcentage ; décomptes | Enregistrements des ressources humaines, entretiens de départ | Gestion de la main-d'œuvre et des talents | Rétention des personnes expérimentées | Trimestrielle |
| Délai de réponse au retour sur le bien-être | Temps entre le moment où une équipe soulève une préoccupation de bien-être et une réponse consignée | médiane et 85e percentile des jours entre la préoccupation et la décision ou l'action consignée | jours | Journal de retour de l'équipe | Amélioration continue | Réponse rapide à la réflexion de l'équipe | Trimestrielle |

Définissez dans le registre la taille minimale du groupe de rapport, par exemple aucun résultat pour un groupe de moins de sept personnes, et appliquez-la à chaque tableau, graphique et commentaire. Les notes viennent de courts sondages flash anonymes, la participation étant volontaire. Les semaines prolongées se calculent à partir des registres de rotation et d'astreinte pour l'équipe dans son ensemble, et aucune donnée d'heures au niveau individuel n'est jamais recueillie à cette fin. L'attrition n'est rapportée que là où le groupe est assez grand, et les thèmes de départ seulement auprès des personnes qui y consentent. Aucune de ces métriques ne fait partie de l'évaluation d'un individu.

## Recommandations

### Fixer d'abord les règles de base

**1. Écrivez les règles avant de demander.** Énoncez l'objectif, ce qui est recueilli, qui voit quoi, la taille minimale du groupe, la durée de conservation et ce qui ne sera jamais fait avec, y compris qu'aucune réponse individuelle ne sera utilisée dans les évaluations, la promotion ou la discipline. Partagez l'ébauche avec les représentants des employés, là où ils existent, et avec vos spécialistes de la vie privée et des ressources humaines. Publiez les règles finales là où tout le monde peut les lire.

**2. Rendez la participation volontaire et les réponses anonymes.** Ne relancez pas les individus qui n'ont pas répondu. N'exigez aucun champ d'identification. Utilisez une méthode d'enquête qui ne peut pas être rattachée à une personne, et testez honnêtement cette affirmation : dans une petite équipe, les questions démographiques peuvent identifier des gens. Dites aux gens ce que vous faites pour les protéger, et pensez-le vraiment.

**3. Impliquez la santé au travail et le soutien aux employés.** Les enquêtes ne remplacent pas le soutien. Assurez-vous qu'un programme d'aide aux employés ou son équivalent existe, que les gens savent comment le joindre et que les gestionnaires savent répondre avec bienveillance si quelqu'un révèle un problème. Un programme de bien-être qui repère la détresse et n'offre rien est pire que rien.

### Bien demander

**4. Utilisez peu de questions, claires et validées.** Un court ensemble d'énoncés, notés sur une échelle cohérente, sert mieux qu'un long formulaire. Utilisez des formulations établies, tirées de la littérature de recherche, pour la sécurité psychologique et pour les trois besoins de la théorie de l'autodétermination, et gardez stable votre propre formulation pour que les tendances signifient quelque chose. Ajoutez un commentaire libre, et lisez les commentaires en entier.

**5. Interrogez sur les conditions plus que sur les sentiments.** « Je peux tenir ce rythme pendant un an » et « j'ai ce qu'il me faut pour faire de mon mieux » pointent vers le travail. « À quel point êtes-vous stressé ? » pointe vers la personne. Les deux ont leur place, et les questions de conditions sont plus faciles à répondre honnêtement et plus faciles à exploiter.

**6. Gardez une cadence légère.** Un sondage flash mensuel de trois questions sur le rythme et la charge de travail et un sondage trimestriel sur la sécurité et les besoins suffisent à la plupart des équipes. La fatigue d'enquête est réelle, et une longue enquête annuelle est lente à exploiter. Variez modérément les questions pour que les gens ne répondent pas en pilote automatique, et gardez le noyau stable.

**7. Lisez d'abord les résultats avec l'équipe.** Partagez les résultats propres de l'équipe avec l'équipe avant quiconque, et laissez-la les interpréter. Les dirigeants voient les tendances entre équipes et les obstacles pour lesquels les équipes demandent de l'aide, non un classement. Cette approche est plus exacte, puisque les équipes connaissent le contexte, et plus respectueuse.

### Regarder le travail autant que les sentiments

**8. Appariez la perception avec les faits de charge de travail au niveau de l'équipe.** Comparez les notes de rythme et de tension avec la charge de rotation et d'astreinte, la part de travail non planifié et le backlog d'obstacles (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte, et le sujet 2.9, Travail opérationnel et travail non planifié). Quand les notes baissent pendant que le travail non planifié monte, vous avez trouvé une cause que vous pouvez corriger. Agrégez les données d'heures au niveau de l'équipe ou de la rotation, et ne suivez jamais des individus.

**9. Traitez la surcharge soutenue comme un problème de système.** Une série de semaines prolongées signifie que le plan, les effectifs ou les priorités ne correspondent pas à la réalité. Répondez en réduisant le périmètre, en ajoutant des personnes, en retirant du travail ou en corrigeant les causes des incidents, non en demandant aux individus d'être plus résilients. De courtes pointes choisies diffèrent d'une urgence sans fin, et l'équipe peut dire de laquelle il s'agit.

**10. Surveillez l'attrition pour y repérer des schémas, avec soin.** L'attrition volontaire est un signal retardé. Regardez-la par équipe et sur une longue période, et combinez-la avec les thèmes des entretiens de départ que les personnes partantes acceptent. De petits nombres varient largement et peuvent identifier des gens : supprimez donc les petits groupes et évitez de lire des départs isolés comme des preuves.

### Agir et apprendre

**11. Répondez dans un délai énoncé, et dites aux gens ce qui s'est passé.** Engagez-vous à répondre aux préoccupations de bien-être dans un court délai, et rapportez les actions et leurs résultats. Le délai de réponse mesure cela. Une réponse visible, même si c'est « nous ne pouvons pas changer cela maintenant, et voici pourquoi », garde la confiance vivante.

**12. Apprenez de ce qui ne marche pas.** Si les scores ne s'améliorent pas après une intervention, demandez pourquoi. Écoutez l'équipe avant d'essayer de nouveau. Évitez les ajouts de bien-être, comme une application de méditation ou un événement social, en remplacement du changement d'une charge de travail trop élevée. Le bien-être est en grande partie une propriété de la manière dont le travail est organisé.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Note de rythme soutenable | Des gestionnaires qui pressent pour de bons scores ; des équipes qui rapportent ce qui est attendu | Règles d'anonymat et de taille de groupe ; comparer avec les faits de charge de travail ; lire les commentaires |
| Note de sécurité psychologique | N'interroger que les équipes sûres ; changements de formulation qui font monter les scores | Journal de la stabilité de la formulation ; taux de réponse et composition ; comparer avec les taux de signalement des incidents et des erreurs |
| Note de soutien des besoins | Redéfinir les énoncés ; coacher les réponses | Formulation stable ; interprétation détenue par l'équipe ; commentaires |
| Note de tension de la charge de travail | Abaisser la tension déclarée pour éviter l'examen ; ajuster le périmètre sur le papier | Comparer avec le travail non planifié et la charge de rotation ; chercher le travail caché |
| Semaines prolongées soutenues | Ne pas consigner les heures ; sortir le travail des registres de rotation | Comparer avec les journaux d'incidents et les commentaires de l'équipe ; permettre le signalement sans pénalité |
| Attrition volontaire et thèmes de départ | Reclasser les démissions comme involontaires ; orienter les entretiens de départ | Règles de classification claires ; entretiens de départ indépendants ; regarder de longues périodes |
| Délai de réponse au retour sur le bien-être | Consigner une réponse sans action ; clore vite les préoccupations | L'équipe confirme que la réponse est significative ; suivre si les notes changent |

Une lecture saine est une note de rythme stable ou en amélioration qui correspond aux faits de charge de travail, une sécurité psychologique assez élevée pour que les mauvaises nouvelles circulent, une tension de la charge qui baisse après le changement des conditions, des semaines prolongées rares et expliquées, et des équipes qui disent voir leur retour utilisé.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Sondages flash anonymes | Honnêtes, peu coûteux, opportuns | Impossible de faire un suivi avec les individus ; les petits groupes limitent l'anonymat |
| Enquêtes nominatives | Permettent le suivi | Les gens se retiennent ; risque pour la vie privée |
| Questions centrées sur les conditions | Pointent des causes qu'on peut corriger | Manquent les circonstances personnelles |
| Questions centrées sur les sentiments | Captent le vécu | Plus faciles à détourner ; plus difficiles à exploiter |
| Données de charge de travail au niveau de l'équipe | Objectives, reliées aux causes | Peuvent glisser vers la surveillance sans règles fortes |
| Entretiens individuels avec le gestionnaire | Personnels, peuvent répondre aux besoins individuels | Dépendent du gestionnaire ; non agrégeables |
| Enquête annuelle d'engagement | Comparable dans le temps | Lente ; faible taux d'action |
| Sondages flash courts et fréquents | Opportuns | Fatigue s'ils sont mal utilisés |

La réponse en bref est d'utiliser des sondages flash anonymes centrés sur les conditions avec des règles strictes de taille de groupe, de les combiner avec des faits de charge de travail au niveau de l'équipe et de compter sur les gestionnaires et les professionnels pour le soutien individuel. Traitez toute donnée de bien-être au niveau individuel comme hors du périmètre des métriques.

## Questions à discuter avec votre équipe

**1. Pourrions-nous continuer à travailler au rythme actuel pendant un an, et que faudrait-il changer sinon ?**
Demandez des réponses honnêtes. L'animateur doit consigner les causes sans attribuer de blâme : périmètre, effectifs, interruptions, incidents. Convenez d'un changement du travail qui réduirait la tension. Si la réponse est oui, demandez ce qui protège le rythme.

**2. Quand quelqu'un ici a-t-il soulevé un problème ou une erreur pour la dernière fois, et comment cela a-t-il été reçu ?**
Recueillez des histoires. Remarquez si la réponse a été la curiosité ou le blâme. Discutez de ce qui rend cela sûr ou non. Convenez d'une habitude qui faciliterait le fait de soulever un problème, comme remercier la personne qui l'a fait.

**3. Quelles règles nous feraient faire confiance à une enquête de bien-être ?**
Rédigez ensemble les règles : qui voit quoi, taille minimale de groupe et ce qui ne sera jamais fait. Demandez ce qui vous ferait douter de la promesse. Le résultat est la première ébauche des règles du programme à revoir avec les représentants.

**4. Lesquelles de nos pratiques dépendent d'heures supplémentaires, et pourquoi ?**
Listez-les : versions, passations, astreinte. Demandez si chacune est vraiment nécessaire et ce qui la supprimerait. Choisissez-en une à corriger par l'automatisation, le processus ou les effectifs.

**5. Que faisons-nous quand un collègue semble en difficulté ?**
Discutez du soutien qui existe, de la manière de le joindre et de ce que chacun peut faire. L'animateur doit être prêt avec de l'information sur l'aide aux employés et préciser que l'équipe ne remplace pas une aide professionnelle.

**6. Qu'avons-nous changé en réponse à la dernière série de retours ?**
Vérifiez le registre. Si rien n'a changé, discutez des raisons : manque de responsabilité, manque d'autorité ou peur. Convenez d'une action avec un responsable et une date, et de la manière dont elle sera rapportée.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison portent la pression des échéances et de la demande. Elles doivent fixer leurs propres questions de sondage flash, discuter ensemble des résultats et soulever ouvertement le rythme et la charge à la planification. Elles sont les mieux placées pour dire quels engagements sont soutenables, et elles méritent des dirigeants qui écoutent.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent l'astreinte, les incidents et le travail de nuit. Elles doivent suivre la charge de rotation au niveau de l'équipe, réclamer des corrections aux causes récurrentes et se servir des règles de repos et de relève comme de protections. Elles ont besoin de cultures qui traitent l'épuisement comme un risque pour le service, non comme un signe de dévouement.

### Direction et gouvernance

Les dirigeants fixent les attentes et approuvent les plans qui créent la charge. Ils doivent protéger les règles de vie privée, répondre aux signaux au niveau de l'équipe par des changements de périmètre, d'effectifs ou de priorités, et résister à la tentation de classer les équipes. La gouvernance doit vérifier que les services de soutien existent, que les devoirs légaux sur le temps de travail et la santé sont respectés et qu'aucune donnée individuelle n'est utilisée pour l'évaluation.

### Clients et utilisateurs

Les utilisateurs profitent d'équipes reposées, qui apprennent et sont stables, car la qualité du service, la patience et la continuité en dépendent. Ils sont aussi touchés quand les équipes sont débordées : réponses plus lentes, plus d'erreurs, perte de personnel expérimenté. Une communication honnête sur la capacité et les priorités fait partie du respect des personnes qui les servent.

## En pratique : un exemple de gestion des services

Le groupe d'exploitation des services d'un opérateur régional de télécommunications compte huit équipes qui exploitent des réseaux, la facturation et des systèmes de soutien à la clientèle jour et nuit. Les chiffres ci-dessous sont illustratifs.

Après trois démissions dans une équipe, le directeur demande un tableau de bord du moral qui liste le score de chaque équipe. La responsable des personnes et de la culture propose une approche différente et travaille avec les représentants des employés pour rédiger les règles du programme : sondages flash volontaires et anonymes, groupe minimal de rapport de sept, aucune donnée individuelle et aucun usage dans les évaluations. Les équipes reçoivent un sondage flash mensuel de trois questions sur le rythme, la charge de travail et le sentiment d'avoir ce dont elles ont besoin, et un sondage trimestriel sur la sécurité psychologique et les trois besoins de la théorie de l'autodétermination. Les résultats vont d'abord à chaque équipe.

Le premier trimestre montre que l'équipe d'exploitation de la plateforme note le rythme soutenable à 2,3 sur 5, 62 % jugeant la charge de travail insoutenable. Les registres de rotation montrent que l'équipe a travaillé des heures prolongées pendant 9 des 13 dernières semaines, à cause d'incidents répétés d'un composant de facturation vieillissant, et qu'un quart de sa capacité va au travail non planifié. La note de sécurité psychologique de l'équipe est plus basse que celle des autres, et les commentaires disent que soulever des préoccupations sur le composant a valu qu'on leur dise d'être patients. Les autres équipes notent le rythme entre 3,4 et 4,1.

Le directeur et l'équipe conviennent de quatre actions. Le remplacement du composant de facturation est avancé dans la liste des priorités, et l'équipe reçoit deux ingénieurs temporaires d'une équipe disposant de capacité. La rotation ajoute une journée de repos après toute nuit d'incident, les gestionnaires étant chargés de la protéger. Les préoccupations sur le composant sont consignées et reçoivent une réponse dans les deux semaines, avec des raisons. Les dirigeants cessent de demander des classements d'équipes. En deux trimestres, la note de rythme de l'équipe monte à 3,6, les semaines prolongées tombent à 2 sur 13 et la sécurité psychologique monte. Le délai de réponse au retour a une médiane de 11 jours. Le directeur demande un score de bien-être à l'échelle de l'entreprise à publier pour le conseil. La responsable des personnes et de la culture explique qu'un score unique invite les gestionnaires à gérer le chiffre, et propose plutôt un rapport des actions menées et des conditions changées, avec le consentement des équipes. La décision est consignée. Une équipe demande que ses résultats ne soient pas partagés au-delà de l'équipe, et la demande est accordée.

## Agilité, IA, automatisation et analytique

### Agilité

Protégez un rythme soutenable et interrogez sur le bien-être avec soin, de façon anonyme et agrégée. La précaution est que demander sans agir coûte de la confiance.

### IA

L'IA peut changer la charge de travail et les inquiétudes pour l'emploi, et les outils d'analyse du sentiment ne doivent pas servir à surveiller des individus. Interrogez directement sur l'effet de l'IA sur le travail, dans une enquête anonyme. La précaution est que l'analyse de texte libre par l'IA peut exposer des individus : vérifiez donc les règles de vie privée.

### Automatisation

Automatisez l'envoi des enquêtes et des rappels, non l'interprétation, et mesurez le processus sur le taux de réponse et l'anonymat. La précaution est que des alertes automatiques sur le bien-être d'individus franchissent une ligne.

### Analytique

Rapportez des résultats agrégés avec le nombre de réponses et la taille minimale de groupe. La décision éclairée est comment changer le travail. La précaution est que les données de bien-être sont sensibles : limitez donc l'accès et la conservation.

## Éclairage sectoriel

**Startup.** L'intensité est courante, tout comme le risque que les pointes deviennent la norme. Les fondateurs peuvent montrer l'exemple d'un rythme soutenable et remarquer quand l'équipe tourne à plein régime. Appuyez-vous sur la conversation et sur un très court sondage flash anonyme une fois l'équipe assez grande pour protéger l'anonymat.

**Petite entreprise.** Les équipes sont assez petites pour que rien ne soit anonyme. N'organisez pas d'enquêtes de bien-être qui font semblant du contraire. Utilisez des entretiens individuels réguliers et honnêtes, donnez accès à du soutien et guettez la surcharge dans le schéma de travail, comme des incidents chroniques hors des heures de travail.

**Grande entreprise.** L'échelle permet des mesures anonymes et l'analyse de tendances. Elle apporte aussi la pression de comparer. Fournissez un ensemble commun de questions de base, laissez les équipes ajouter les leurs, protégez les règles de taille de groupe et impliquez les représentants des employés. Rendez visibles et faciles à utiliser les services de soutien.

**Gouvernement et secteur public.** Les protections de l'emploi, les comités d'entreprise et les syndicats ont souvent des rôles formels dans les enquêtes et la surveillance. Impliquez-les dès le départ, suivez les règles sur le temps de travail et la santé, et traitez avec grand soin les données sensibles. Les fonctionnaires sont souvent motivés par le sens de leur mission, et les organisations ne doivent pas abuser de cette bonne volonté en acceptant une surcharge permanente (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes : le temps des équipes pour de courts sondages flash, un outil d'enquête qui préserve l'anonymat, du temps de spécialiste pour la revue de vie privée et l'interprétation des résultats, et le coût réel d'agir, qui peut signifier des effectifs, une réduction du périmètre ou un investissement pour corriger des causes récurrentes. Les services de soutien comme l'aide aux employés coûtent aussi de l'argent et valent la peine d'être offerts.

Le rendement vient de la rétention, de moins d'erreurs, d'un meilleur service et de moins de crises. Remplacer un ingénieur expérimenté coûte du recrutement, de l'accueil et de la connaissance perdue. Les équipes en surcharge chronique commettent plus d'erreurs et causent plus d'incidents. Construisez le dossier à partir de vos propres données : l'attrition volontaire par équipe sur plusieurs années, le coût de recrutement et d'accueil des remplaçants, et les schémas d'incidents dans les équipes surchargées. Évitez de citer des études sur le coût de l'épuisement à moins de pouvoir en retracer la source et la pertinence. Soyez honnête sur le fait que les bénéfices sont réels et difficiles à isoler, et que l'argument éthique ne dépend pas de l'argument financier (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Classer les équipes selon des scores de bien-être.** Les gestionnaires gèrent alors le chiffre. Rapportez les conditions et les actions.
- **Des enquêtes nominatives.** Les gens se retiennent. Utilisez l'anonymat et des règles de taille de groupe.
- **Diagnostiquer des individus à partir de données d'enquête.** C'est contraire à l'éthique et peu fiable. Offrez du soutien et laissez le diagnostic aux professionnels.
- **Des ajouts de bien-être au lieu de changer la charge de travail.** Ils traitent le symptôme. Corrigez la charge.
- **Recueillir les heures par personne.** C'est de la surveillance. Utilisez des faits de rotation et d'équipe.
- **Des enquêtes sans action.** Les gens cessent de répondre. Répondez visiblement et vite.
- **Utiliser les résultats dans les évaluations de performance.** Cela met fin à l'honnêteté. Interdisez-le par écrit.
- **Traiter la surcharge comme une formation à la résilience.** Cela place le fardeau sur les individus. Changez le système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Éthique et vie privée | Aucune règle | Soin informel | Règles écrites, anonymat, taille minimale de groupe, aucun usage individuel | Règles revues avec les représentants ; conformité vérifiée | Règles et pratiques auditées de façon indépendante ; les équipes contrôlent le partage |
| Mesures | Enquête annuelle, s'il y en a une | Points d'équipe occasionnels | Courts sondages flash mensuels et trimestriels sur le rythme, la charge, la sécurité et les besoins | Perception combinée à des faits de charge au niveau de l'équipe ; tendances surveillées | Vue entre équipes avec les partenaires ; l'alerte précoce pilote la planification |
| Action | Plaintes sans suite | Corrections ponctuelles | Réponses consignées et chronométrées ; changements visibles | Conditions changées, suivies et reliées aux résultats | Charge de travail et rythme intégrés à la planification et au financement dans l'organisation |

## Liste de vérification

- [ ] Des règles écrites énoncent l'objectif, l'accès, la taille de groupe, la conservation et l'interdiction de l'usage individuel.
- [ ] Les représentants des employés et les spécialistes de la vie privée ont revu les règles.
- [ ] La participation est volontaire et les réponses sont anonymes.
- [ ] Une taille minimale de groupe de rapport s'applique à toutes les sorties.
- [ ] Des services de soutien sont en place et connus de tout le personnel.
- [ ] Les sondages flash utilisent quelques questions stables et claires et un commentaire libre.
- [ ] Les équipes lisent d'abord leurs propres résultats.
- [ ] Les faits de charge de travail au niveau de l'équipe sont comparés à la perception, jamais les heures individuelles.
- [ ] Les réponses aux préoccupations ont un délai énoncé et sont rapportées.
- [ ] Aucune donnée de bien-être n'est utilisée dans les évaluations de performance, la promotion ou la discipline.

## Prompts d'IA

**Rédigez des règles pour un programme de bien-être.**

```text
Draft plain-language rules for a staff well-being pulse program in [type of
organization] in [jurisdiction or sector]. Cover purpose, voluntary
participation, anonymity, minimum reporting group size [number], who sees
results, retention, a clear ban on use in reviews, support available, and how
staff can raise concerns. Flag items to review with privacy specialists,
employee representatives, and occupational health. Do not give legal
conclusions. List your assumptions.
```

**Passez en revue des questions de sondage flash.**

```text
Here are our pulse questions on pace, workload, psychological safety, and
motivation: [paste]. Review them for leading or double-barrelled wording,
sensitivity, and risk of identifying individuals in small groups. Suggest a
shorter set that focuses on conditions we can change. Do not claim validation
for any wording unless you cite the published source accurately. List your
assumptions and cautions.
```

**Analysez les commentaires en toute sécurité.**

```text
Here are [number] anonymized comments from a pulse for [team type]: [paste with
any identifying details removed]. Group them into themes about conditions of the
work, count each theme, and suggest which conditions could be changed by the
team, its leaders, or other groups. Do not infer anyone's health or identify
individuals. Tell me what a person should check before acting. List your
assumptions.
```

**Planifiez une réponse à un signal de surcharge.**

```text
A team's pace rating is [value], extended-hours weeks are [number] of [number],
and unplanned work is [share]. Causes in comments: [summary]. Propose a
response that changes the work (scope, staffing, rotation, root-cause fixes),
what to tell the team, and how to measure whether it helped without tracking
individuals. List your assumptions and trade-offs for leadership.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé et les règles de vie privée d'une métrique de bien-être.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de bien-être porte son vecteur de détournement, son garde-fou et sa règle d'anonymat.

## Idées clés

- Interrogez sur les conditions, comme le rythme, la charge de travail, la sécurité et le soutien, plus que sur les sentiments, et gardez les réponses anonymes et agrégées.
- Écrivez et publiez d'abord les règles, y compris l'interdiction d'utiliser les résultats pour juger des individus.
- Traitez la surcharge soutenue comme un problème de système à corriger par le périmètre, les effectifs et les causes, non par la résilience.
- Comparez la perception avec les faits de charge de travail au niveau de l'équipe, jamais avec les heures individuelles.
- Répondez visiblement et dans un délai énoncé, et dites aux gens ce qui a changé.
- Offrez de vrais services de soutien, et laissez le diagnostic aux professionnels.

## Références et lectures complémentaires

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Employee engagement](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
