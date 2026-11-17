# Métriques de prévision et d'analytique prédictive

**Une prévision est une plage avec un bilan, non une date ou un chiffre à défendre : mesurez donc à quelle fréquence le résultat réel est tombé dans la plage annoncée, si la plage était honnête sur sa largeur et si quelqu'un a pris une meilleure décision grâce à elle.**

## Vue d'ensemble et motivation

La [prévision](https://en.wikipedia.org/wiki/Forecasting) estime une quantité future à partir de données passées et d'hypothèses énoncées. Les organisations de services prévoient la demande de soutien, la capacité d'une plateforme, la date à laquelle un travail sera terminé, la probabilité qu'un changement échoue et le coût d'un service l'an prochain. Les modèles prédictifs, y compris les modèles d'apprentissage automatique, étendent cela à la notation d'éléments individuels : quel ticket dépassera son objectif, quel changement est risqué, quel incident risque de se répéter.

Les prévisions et les prédictions échouent de façons ordinaires. Le passé peut ne pas ressembler à l'avenir, parce qu'un service, une équipe ou un outil a changé. Les données peuvent être minces ou biaisées. La plage peut être trop étroite, parce qu'un chiffre unique paraît plus utile qu'un intervalle. Et la prévision peut être employée comme un engagement, de sorte que les gens travaillent à la réaliser ou cachent ce qui la contredit.

Les sujets antérieurs ont donné des prévisions pour des usages précis : les dates de livraison à partir du débit (voir le sujet 2.5, Métriques de prévision et de planification de la livraison), la capacité à partir de la demande (voir le sujet 5.4, Métriques de capacité et de performance) et le coût (voir le sujet 7.5, Coût du service et économie unitaire). Ce sujet donne la méthode générale pour mesurer la qualité de toute prévision ou prédiction, qui s'applique à toutes. Il couvre aussi les modèles prédictifs dont la production pilote une action, là où le coût d'une mauvaise prédiction retombe sur quelqu'un.

Termes employés ici. Une **prévision ponctuelle** est une valeur prédite unique. Un **intervalle de prédiction** est une plage destinée à contenir la valeur réelle avec une probabilité énoncée. La **calibration** est l'accord entre la probabilité énoncée et la fréquence observée : parmi les prévisions qui disaient 80 %, environ 80 % doivent se réaliser. L'**erreur de prévision** est la différence entre la prévision et le réel. Une **prévision de référence** est une méthode simple, comme « pareil que la période précédente », à laquelle une méthode plus complexe est comparée. Un **faux positif** est la prédiction d'un événement qui n'a pas lieu, et un **faux négatif** est l'échec à en prédire un qui a lieu. La **dérive** est un changement des données ou de la relation entre les entrées et les résultats qui réduit l'exactitude d'un modèle dans le temps.

## Principes clés

- **Prévoyez en plages et gardez un bilan.** Une prévision qui n'est jamais vérifiée ne peut pas s'améliorer.
- **Comparez avec une référence simple.** Un modèle complexe qui ne bat pas « pareil que la période précédente » ne mérite pas son coût.
- **La calibration compte autant que l'exactitude.** Une prévision qui dit 90 % devrait avoir raison environ neuf fois sur dix.
- **Ajustez le coût des erreurs à la décision.** Une fausse alerte et un raté ne coûtent pas la même chose.
- **Guettez la dérive.** Les prévisions se dégradent quand le monde change : supervisez-les donc.
- **Une prévision n'est pas un engagement.** N'en faites pas un objectif pour des personnes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de l'intervalle de prévision | Part des résultats réels qui sont tombés dans l'intervalle de prédiction énoncé | résultats dans l'intervalle / prévisions évaluées ; les prévisions évaluées sont celles dont le résultat est connu | pourcentage | Journal des prévisions et réels | Gestion de la capacité et de la performance ; gestion financière | Prévoir avec des plages à partir du débit | Trimestrielle |
| Erreur de prévision | Taille typique de la différence entre la prévision et le réel | médiane de l'erreur absolue et son 85e percentile, où erreur absolue = valeur absolue de (prévision moins réel) / réel, sur les prévisions évaluées | pourcentage | Journal des prévisions et réels | Gestion de la capacité et de la performance | Revue de planification | Trimestrielle |
| Compétence face à la référence | Amélioration de la méthode de prévision par rapport à une référence simple | 1 moins (erreur absolue médiane de la méthode / erreur absolue médiane de la référence) sur les mêmes prévisions | rapport | Journal des prévisions, journal de référence et réels | Amélioration continue | Expérimenter et comparer | Trimestrielle |
| Écart de calibration | Différence entre la probabilité énoncée et la fréquence observée | pour chaque bande de probabilité, valeur absolue de (probabilité énoncée moins part observée) moyennée sur les bandes ; les bandes de moins d'un nombre énoncé de cas sont rapportées à part | points de pourcentage | Journal des prévisions probabilistes et résultats | Gestion des risques ; maîtrise des changements | Rétrospective sur les estimations | Trimestrielle |
| Précision et rappel des alertes | Pour une alerte ou un score prédictif, la part des alertes qui étaient justes et la part des événements saisis | précision = vrais positifs / (vrais positifs + faux positifs) ; rappel = vrais positifs / (vrais positifs + faux négatifs) | pourcentage | Journal des prédictions et résultats | Gestion des incidents ; gestion des événements | Définition de terminé pour le modèle | Mensuelle |
| Signal de dérive des prévisions | Hausse de l'erreur dans le temps comparée à une période de référence | erreur absolue médiane dans la dernière fenêtre moins erreur absolue médiane dans la fenêtre de référence, les tailles de fenêtre étant énoncées | points de pourcentage | Journal des prévisions et réels | Amélioration continue ; gestion de la capacité | Inspecter et adapter | Mensuelle |
| Lien des prévisions avec les décisions | Part des prévisions citées dans une décision consignée | prévisions citées dans le journal de décisions / prévisions publiées | pourcentage | Journal de décisions et journal des prévisions | Amélioration continue ; gouvernance | Actions de revue | Trimestrielle |

L'erreur de prévision et la couverture ne sont calculées que pour les prévisions dont le résultat est connu : les prévisions récentes sont donc exclues jusque-là. La précision et le rappel dépendent de la manière dont un événement est défini : la définition de l'événement, comme « un changement qui cause un incident dans les 48 heures », est donc énoncée avec la métrique.

## Recommandations

### Prévoir honnêtement

**1. Publiez des plages, non des dates uniques.** Donnez un intervalle avec une probabilité énoncée, comme « entre 12 et 18 jours ouvrés, avec 85 % de confiance », et expliquez l'hypothèse qui le sous-tend. Un chiffre unique invite à un engagement.

**2. Tenez un journal des prévisions.** Consignez chaque prévision quand elle est faite : la quantité, la valeur ou la plage, la date, la méthode et les hypothèses. Ajoutez le réel quand il est connu. Sans journal, il n'y a pas de bilan.

**3. Commencez par une référence simple.** Comparez toute nouvelle méthode avec une méthode naïve, comme la valeur de la période précédente ou une moyenne récente. Si une méthode complexe ne la bat pas nettement dans le temps, gardez la simple.

**4. Énoncez les hypothèses qui invalideraient la prévision.** Une prévision de demande suppose aucun grand lancement, aucune panne, aucun nouveau groupe de clients. Écrivez l'hypothèse à côté du chiffre, pour qu'un lecteur sache quand s'en méfier.

### Mesurer la qualité

**5. Vérifiez la couverture et la calibration.** Comptez à quelle fréquence les résultats tombent dans l'intervalle. Si un intervalle à 85 % ne contient le résultat que la moitié du temps, il est trop étroit. Rapportez la calibration avec le nombre de cas, car les petits échantillons sont bruités.

**6. Lisez les erreurs comme une distribution.** Une erreur médiane de 10 % peut cacher des ratés occasionnels de 50 % qui comptent le plus. Montrez un percentile élevé et les plus gros ratés, et revoyez-les.

**7. Ajustez la mesure au coût de la décision.** Pour une alerte prédictive, choisissez la précision ou le rappel selon le coût d'une fausse alerte et d'un raté. Une alerte de fraude et une suggestion d'acheminement à faible risque n'ont pas le même équilibre.

**8. Guettez la dérive.** Comparez l'erreur récente avec une période de référence et investiguez les hausses. Les causes courantes sont un nouveau service, un processus modifié, un nouvel outillage ou un changement de la manière dont les données sont consignées.

### Bien utiliser les prévisions

**9. Reliez les prévisions aux décisions.** Dites quelle décision une prévision éclaire, et consignez dans le journal de décisions ce qui a été décidé. Retirez les prévisions que personne n'utilise.

**10. Gardez les prévisions à l'écart des objectifs pour des personnes.** Une prévision de volume d'incidents qui devient un quota pour le centre faussera les rapports. Traitez les prévisions comme de l'information sur un système.

**11. Gardez un humain redevable des actions prises sur des prédictions.** Pour les modèles qui notent des éléments, nommez le responsable, l'action entreprise sur un score, la manière dont une personne peut passer outre et la manière dont les erreurs sont rapportées. Revoyez les faux positifs et les faux négatifs sur des cas échantillonnés.

**12. Guettez le biais et le préjudice.** Un modèle entraîné sur des décisions passées peut en répéter le biais. Vérifiez les résultats pour des groupes d'utilisateurs ou de services qui s'en sortent différemment, et rapportez ce que la vérification ne peut pas montrer. Ce livre ne donne aucun avis juridique : vérifiez donc les obligations auprès de votre propre conseiller juridique.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture de l'intervalle de prévision | Élargir les intervalles jusqu'à ce que la couverture paraisse bonne ; n'évaluer que les prévisions faciles | Rapporter la largeur de l'intervalle avec la couverture ; évaluer toutes les prévisions consignées |
| Erreur de prévision | Réviser la prévision juste avant le résultat ; choisir la fenêtre d'évaluation | Utiliser la prévision d'origine consignée ; fixer la fenêtre d'avance |
| Compétence face à la référence | Choisir une référence faible ; ajuster la méthode sur les données d'évaluation | Convenir d'avance de la référence ; évaluer sur des données non utilisées pour l'ajustement |
| Écart de calibration | Utiliser peu de bandes ou peu de cas ; fusionner des bandes pour cacher des écarts | Rapporter le nombre de cas par bande ; nombres minimaux de cas |
| Précision et rappel des alertes | Redéfinir les événements après coup ; compter les doublons | Fixer la définition de l'événement d'avance ; dédoublonner ; échantillonner les alertes |
| Signal de dérive des prévisions | Réinitialiser la période de référence ; ignorer la dérive lente | Fixer la fenêtre de référence et la revoir selon un calendrier |
| Lien des prévisions avec les décisions | Citer des prévisions dans un journal sans effet sur la décision | Demander ce qui a changé ; échantillonner les entrées |

Une lecture saine est des intervalles qui couvrent la part annoncée des résultats sans être absurdement larges, des références simples que les méthodes complexes battent d'une marge nette, une dérive remarquée et investiguée, et des prévisions qui apparaissent dans les décisions.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Prévisions de référence simples | Faciles à expliquer et à maintenir ; difficiles à surajuster | Manquent des schémas et des changements |
| Modèles statistiques ou d'apprentissage automatique | Captent plus de schémas ; passent à l'échelle sur de nombreux éléments | Difficiles à expliquer ; dérive ; demandent supervision et données |
| Prévisions ponctuelles | Faciles à communiquer | Fausse précision ; invitent à l'engagement |
| Prévisions par intervalles | Honnêtes sur l'incertitude | Plus difficiles à communiquer ; peuvent être lues comme vagues |
| Jugement d'expert | Utilise un contexte qu'un modèle n'a pas | Biaisé ; difficile à suivre |

La conclusion en bref est de commencer simple, de tenir le journal, de montrer des intervalles et de n'ajouter de la complexité que lorsqu'elle gagne sa place face à une référence. Le jugement et les modèles peuvent travailler ensemble si les deux sont consignés et vérifiés.

## Questions à discuter avec votre équipe

**1. Quelle est la dernière prévision que nous avons faite, et comment s'est-elle terminée ?**
La plupart des équipes ne le savent pas, parce que les prévisions ne sont pas consignées. Demandez le chiffre, l'hypothèse et le réel. Remarquez si la surprise est venue des données ou de l'hypothèse. Commencez ensuite un journal des prévisions avec cet exemple.

**2. Quelle prévision traitons-nous comme un engagement, et qui paie quand elle est fausse ?**
Cherchez les prévisions devenues des objectifs, comme les dates de livraison ou les chiffres de volume. Demandez qui ressent de la pression et ce qu'il fait. Discutez des plages et du langage employé pour les communiquer. Réécrivez ensuite un engagement sous forme de plage avec des hypothèses.

**3. Notre modèle ou outil prédictif bat-il « pareil que la période précédente » ?**
Demandez la comparaison, non l'affirmation du fournisseur. Les équipes n'ont souvent aucune référence. Discutez de la manière de comparer équitablement sur les mêmes cas. Faites ensuite tourner la référence en parallèle pendant un trimestre.

**4. Que nous coûte une fausse alerte, et que nous coûte un raté ?**
Cela fixe l'équilibre entre précision et rappel. Demandez de vrais exemples. Les coûts sont souvent différents selon les personnes, comme un ingénieur d'astreinte et un client. Convenez ensuite de quelle erreur compte le plus.

**5. Qu'est-ce qui ferait cesser nos prévisions de fonctionner, et le remarquerions-nous ?**
Discutez de changements tels qu'un nouveau produit, un nouvel outil ou une autre manière de consigner les données. Demandez le signal qui montrerait la dérive. Ajoutez ensuite un contrôle de dérive et un responsable.

**6. Qui agit sur une prédiction, et peut-il dire non ?**
Pour les éléments notés, demandez qui décide de ce qui se passe. Cherchez les actions automatiques sans possibilité de passer outre. Discutez de la manière dont les erreurs sont rapportées et corrigées. Écrivez ensuite la règle de dérogation.

## Quatre perspectives

### Équipes produit et de livraison

Prévoyez à partir de votre propre historique et donnez des plages. Consignez les prévisions et comparez-les aux réels, et marquez les changements qui font de l'historique un mauvais guide, comme un nouvel outil ou un changement d'équipe. Gardez les chiffres de planification propres à l'équipe hors des comparaisons entre équipes.

### Équipes de service et d'exploitation

Les prévisions de demande, de capacité et d'incidents aident la dotation en personnel et la prévention. Servez-vous-en pour planifier, non pour fixer des quotas. Guettez les modèles d'alerte qui augmentent le bruit, et rapportez les faux positifs pour que les modèles soient ajustés.

### Direction et gouvernance

Demandez le bilan derrière une prévision, pas seulement sa valeur, et l'intervalle. Évitez de transformer les prévisions en objectifs pour des personnes. Pour les modèles prédictifs utilisés en exploitation, demandez le responsable, la règle de dérogation et le contrôle du biais.

### Clients et utilisateurs

Vous ressentez l'effet des prévisions sous forme d'attentes, de pannes et de décisions prises à votre sujet. Demandez comment les prédictions qui vous touchent sont vérifiées et comment vous pouvez en contester une. Vos signalements de mauvais résultats font partie du retour dont le modèle a besoin.

## En pratique : un exemple de gestion des services

Le centre de services informatique d'un organisme gouvernemental régional prévoit le volume hebdomadaire de tickets pour planifier la dotation en personnel. Les chiffres de cet exemple sont illustratifs. Un outil de fournisseur offre une prévision par apprentissage automatique, et le gestionnaire veut savoir s'il faut l'adopter.

L'équipe commence un journal des prévisions. Pendant dix semaines, ils consignent trois prévisions pour chaque semaine : la prévision ponctuelle du fournisseur, une référence naïve (la moyenne des quatre dernières semaines) et une plage tirée des erreurs récentes de la référence. Ensuite ils calculent l'erreur de prévision de chacune. L'erreur médiane du fournisseur est de 11 % et celle de la référence de 13 % : la compétence face à la référence est donc de 15 %. L'erreur au 85e percentile du fournisseur est de 38 %, avec de gros ratés les semaines d'annonces de l'organisme, qui ne figurent pas dans les données qu'utilise l'outil.

L'équipe adopte la prévision du fournisseur comme un intrant parmi d'autres, ajoute un champ pour les événements connus et publie une plage fondée sur les erreurs passées. La couverture de l'intervalle de prévision pour la plage annoncée à 85 % est d'environ 80 % sur les dix semaines, avec un petit nombre de cas : ils la rapportent donc avec la réserve que dix cas, c'est peu. Ils mettent aussi en place un contrôle de dérive qui compare l'erreur des huit dernières semaines avec les huit premières.

Un risque de détournement apparaît. Un chef d'équipe fait remarquer que la prévision sert à fixer la dotation et suggère d'ajouter une marge à la prévision pour que l'équipe paraisse bien dotée. L'équipe garde la prévision honnête et consigne la marge de dotation comme décision distincte. Ce qui reste difficile : les événements que l'outil ne voit pas causent encore de gros ratés, et dix semaines de données ne suffisent pas pour juger la calibration. Le plan est de revoir après une période plus longue.

## Agilité, IA, automatisation et analytique

### Agilité

De courts cycles de planification permettent à une équipe de vérifier souvent les prévisions et de les réviser avec les parties prenantes. Une bonne pratique est de prévoir avec des plages tirées du débit propre de l'équipe et de revoir le bilan à la conversation d'amélioration régulière. La précaution est qu'une prévision traitée comme une promesse mène à gonfler, cacher ou scinder le travail.

### IA

Les modèles d'apprentissage automatique et les assistants d'IA peuvent produire des prévisions et des scores de risque, avec une apparence de précision. Comparez-les avec une référence, gardez un responsable, vérifiez la calibration et les taux de faux positifs et de faux négatifs par échantillonnage, et gardez un humain redevable des actions prises sur un score (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA). La précaution est qu'une prévision générée par l'IA peut donner un chiffre assuré sans intervalle ni hypothèses énoncées : demandez donc les deux.

### Automatisation

Automatisez la consignation des prévisions, le recueil des réels et le calcul de l'erreur et de la couverture, pour que le bilan se construise de lui-même. Mesurez sur leurs actions erronées les actions automatisées qui suivent une prédiction. La précaution est qu'une automatisation qui agit sur une prévision, comme augmenter la capacité ou appeler quelqu'un, rend les erreurs de prévision visibles aux utilisateurs : ajoutez donc des limites et une revue.

### Analytique

Ce sujet porte sur l'analytique des prévisions : montrez l'erreur comme une distribution, la couverture avec les décomptes et la dérive avec la fenêtre employée. La décision éclairée est dans quelle mesure faire confiance à une prévision et quand remplacer la méthode. La précaution est que de petits échantillons donnent une calibration instable : énoncez donc le nombre de prévisions derrière chaque chiffre (voir le sujet 10.8, Métriques d'analytique et de qualité des données).

## Éclairage sectoriel

**Startup.** L'historique est court et le service change souvent : les prévisions sont donc faibles. Utilisez des références simples et de larges plages, et gardez un court journal. Évitez d'acheter des outils de prévision avant qu'il y ait des données.

**Petite entreprise.** La saisonnalité et quelques gros clients dominent. Utilisez la même période de l'an dernier comme référence, et notez les événements qui brisent le schéma. Soyez prudent avec les prévisions de fournisseurs qui prétendent à la précision.

**Grande entreprise.** De nombreuses prévisions entre équipes demandent un journal et des définitions communs. Comparez équitablement les méthodes entre équipes et évitez de classer les équipes selon l'exactitude de leurs prévisions. Revoyez la dérive des modèles selon un calendrier.

**Gouvernement et secteur public.** Les prévisions soutiennent souvent des décisions budgétaires et de dotation qui sont publiques. Documentez les méthodes et les hypothèses, et vérifiez les règles sur les décisions automatisées qui touchent des personnes. Prévoyez les événements externes, comme des changements de politique, qui brisent les données (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le travail sur les données, la consignation des prévisions, les outils de modélisation s'ils sont utilisés, le temps de revue et la supervision de la dérive des modèles. Commencer par un journal et une référence naïve coûte très peu.

Le rendement est une meilleure planification : de la capacité qui arrive avant le besoin, une dotation qui correspond à la demande et moins de surprises. Il est difficile à attribuer : évitez donc d'affirmer un chiffre. Comparez dans le temps le coût et l'erreur d'une méthode de prévision avec la référence, et énoncez les hypothèses sous forme de plages (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Le côté risque est le coût d'une confiance excessive dans un modèle qui a dérivé et de décisions prises sur une fausse précision.

## Anti-modèles et pièges

- **Des prévisions à chiffre unique traitées comme des promesses.** Elles produisent des marges et du blâme. Publiez des plages avec des hypothèses.
- **Aucun journal des prévisions.** Il n'y a aucun moyen d'apprendre. Consignez prévisions et réels.
- **Acheter un modèle sans référence.** Le gain est inconnu. Comparez avec « pareil que la période précédente ».
- **Juger l'exactitude sur les données d'entraînement.** Cela flatte le modèle. Évaluez sur des données plus tardives.
- **Ignorer les faux positifs.** Des prédictions bruitées apprennent aux gens à les ignorer. Rapportez la précision et le rappel.
- **Des prévisions comme objectifs pour des personnes.** Elles faussent les données. Servez-vous-en pour planifier.
- **Aucun contrôle de dérive.** Les modèles se dégradent en silence. Surveillez l'erreur dans le temps.
- **Des prédictions sans responsable humain.** Les actions erronées n'ont personne pour en répondre. Nommez un responsable et une règle de dérogation.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Pratique de prévision | Chiffres uniques ; aucune trace | Quelques plages ; notes informelles | Journal des prévisions avec plages, hypothèses et réels | Erreur, couverture et référence comparées à cadence régulière | Prévisions et méthodes améliorées par des expériences et partagées entre équipes |
| Modèles prédictifs | Affirmations des fournisseurs acceptées | Pilote comparé à une référence | Responsable, évaluation et règle de dérogation par modèle | Dérive, précision et rappel supervisés | Cycle de vie du modèle géré avec supervision et retrait |
| Usage dans les décisions | Prévisions comme engagements | Prévisions montrées aux décideurs | Prévisions reliées aux décisions dans un journal | Décisions revues face aux résultats des prévisions | Les décisions s'adaptent à l'incertitude des prévisions |

## Liste de vérification

- [ ] Un journal des prévisions consigne la quantité, la valeur ou la plage, la date, la méthode et les hypothèses.
- [ ] Les réels sont ajoutés et l'erreur de prévision est rapportée comme une distribution.
- [ ] Une référence simple tourne en parallèle de toute prévision complexe.
- [ ] La couverture des intervalles est rapportée avec leur largeur et le nombre de cas.
- [ ] Les alertes prédictives rapportent la précision et le rappel face à une définition d'événement fixe.
- [ ] La dérive est vérifiée face à une fenêtre de référence fixe.
- [ ] Chaque modèle prédictif a un responsable, une règle de dérogation et une date de revue.
- [ ] Les prévisions sont reliées aux décisions dans un journal de décisions.
- [ ] Les prévisions ne sont pas utilisées comme objectifs individuels.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou montrés à côté.

## Prompts d'IA

**Concevez un journal des prévisions et une référence.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Évaluez une méthode de prévision face à une référence.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Passez en revue la supervision d'un modèle prédictif.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Passez en revue le risque de détournement des mesures de prévision.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## Skills d'IA

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md) : à utiliser pour construire et vérifier une prévision de demande avec des plages.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md) : à utiliser pour examiner les tendances et les changements avant de prévoir.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md) : à utiliser pour documenter l'objet, les données et les limites d'un modèle prédictif.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique et son garde-fou associé.

## Idées clés

- Une prévision est une plage avec un bilan : consignez donc les prévisions et comparez-les aux réels.
- Comparez tout modèle avec une référence simple, et ne gardez le complexe que s'il la bat nettement.
- Vérifiez la couverture des intervalles et la calibration avec le nombre de cas derrière elles.
- Choisissez la précision ou le rappel selon le coût d'une fausse alerte et d'un raté.
- Ne transformez pas les prévisions en objectifs pour des personnes, et gardez un humain redevable des actions prises sur une prédiction.

## Références et lectures complémentaires

1. Wikipedia, [Prévision](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Intervalle de prédiction](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Apprentissage automatique](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Dérive conceptuelle](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Précision et rappel](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Planification de la capacité](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
