# Modèles

Quatre modèles à copier et à adapter : une charte de métriques, une fiche de métrique, une spécification de tableau de bord et un ordre du jour de revue. Ce sont des points de départ. Remplacez le texte entre crochets, supprimez ce qui ne convient pas et gardez chaque document à une page quand vous le pouvez.

## Charte de métriques

```text
Charte de métriques de [équipe, service ou organisation]

But
Nous mesurons [services et façons de travailler] pour [améliorer ... / voir ... / décider ...].
Les mesures nous aident à voir notre propre travail et à l'améliorer. Elles ne sont
pas un moyen de juger des individus.

À quoi servent les données
- Les revues d'équipe sur la marche du travail et sur ce qu'il faut essayer ensuite.
- Les décisions sur où investir dans les services, les outils et les compétences.
- Les rapports qu'exigent [les autorités de contrôle/les clients] : [liste, tenue à part].

À quoi les données ne serviront jamais
- Classer ou comparer des individus.
- Les évaluations individuelles de performance, la paie, la promotion ou le licenciement.
- [Ajoutez les inquiétudes que vos équipes ont exprimées.]

Qui voit quoi
- Chaque équipe voit d'abord ses propres données, et possède l'interprétation.
- [Rôle] voit les tendances agrégées des services et des équipes.
- Les vues au niveau individuel sont désactivées dans [outils].

Données conservées
- [Ce qui est recueilli, dans quels systèmes, pour combien de temps.]

Contestations
- Toute personne peut contester un chiffre. Nous répondons sous [nombre] jours ouvrables.
- Contact : [nom ou groupe].

Entorses
- Signalez tout usage contraire à cette charte à [voie]. Les suites sont publiées
  sans noms.

Revue
- Nous revoyons cette charte tous les [six mois] avec les équipes.

Signé : [sponsor], [représentant(s) de l'équipe]   Date : [date]
```

## Fiche de métrique

```text
Fiche de métrique : [nom de la métrique]

Question à laquelle elle répond : [la question posée par le public]
Décision qu'elle éclaire : [ce que quelqu'un pourrait faire différemment]
Définition : [en mots simples]
Formule : [comment elle est calculée]
Unité : [unité]   Cadence : [à quelle fréquence]
Règles d'horloge ou de limites : [quand le décompte commence, s'arrête, se met en pause]
Source de données : [système et champ]   Actualisation : [intervalle]
Responsable : [rôle]   Personne à interroger : [nom ou groupe]
Public : [équipe, responsable de service, direction]
Niveau : [équipe, service ou système. Jamais un individu.]
Affichage : [médiane et percentile, graphique de suivi, distribution]
Base de référence : [période et valeur tirées de nos propres données]
Limites connues : [lacunes, changements d'habitudes de saisie, taille d'échantillon]
Vecteur de détournement : [comment elle pourrait paraître meilleure sans l'être]
Garde-fou : [métrique ou pratique associée]
Résultat compagnon : [le résultat avec lequel elle doit être lue]
Sujet lié : (voir le sujet [N.M], [Titre])
À retirer quand : [condition]
Dernière revue : [date]   Changements depuis la dernière revue : [notes]
```

## Spécification de tableau de bord

```text
Spécification de tableau de bord : [nom]

Public : [équipe, responsable de service, direction]
Responsable : [rôle]   Cadence de revue : [mensuelle ou trimestrielle]   Date de revue : [date]
Questions auxquelles il répond
1. [question]
2. [question]

Mesures (pas plus d'environ neuf)
| Mesure | Question | Garde-fou compagnon | Affichage | Source | Actualisation |
| [nom] | [n°] | [nom] | [sparkline / graphique de suivi / distribution] | [système] | [intervalle] |

Contexte montré avec chaque valeur
- Tendance sur [période], notes d'événements, lien vers la définition, taille d'échantillon quand elle est petite.

Couleurs d'état
- [Aucune, ou la règle énoncée qui tient compte de la variation ordinaire.]

Accès
- [Qui peut voir quoi. Vues au niveau individuel : désactivées.]

Contrôles de qualité des données
- [Fraîcheur, décomptes de lignes, rapprochement avec la source.]

Retrait
- Rapports remplacés par ce tableau de bord : [liste] retirés le [date].
- Mesures à retirer quand : [conditions].

Approuvé par le public : [noms ou rôles]   Date : [date]
```

## Ordre du jour de revue

Une revue d'équipe de 45 minutes, mensuelle ou trimestrielle. C'est une conversation sur le travail, menée par l'équipe.

```text
Revue des métriques de [équipe], [date]

1. Tour de table (5 minutes)
   Comment se passe le travail ? Quelque chose que les chiffres ne montreront pas ?

2. Événements depuis la dernière fois (5 minutes)
   Livraisons, incidents, changements d'effectifs, changements de politique.
   Ajoutez des notes à l'affichage.

3. Tendances et distributions (15 minutes)
   Pour chaque mesure : que voyons-nous ? Est-ce une variation ordinaire ou un signal ?
   Lisez chaque mesure avec son garde-fou. Vérifiez la fraîcheur des données et les lacunes connues.

4. Décisions (10 minutes)
   Qu'allons-nous essayer, arrêter ou changer ? Consignez chaque décision, y compris
   une décision d'attendre et d'observer. Nommez un responsable et une date pour regarder à nouveau.

5. Décisions précédentes (5 minutes)
   Les décisions de la dernière fois ont-elles aidé ? Qu'avons-nous appris ?

6. Les mesures elles-mêmes (5 minutes)
   Quelle mesure nous a embrouillés ou induits en erreur ? Laquelle pourrions-nous retirer ?
   Que manque-t-il ?

À consigner : décisions, responsables, dates, changements aux mesures.
Règle : aucune comparaison d'individus. Les chiffres décrivent le système.
```
