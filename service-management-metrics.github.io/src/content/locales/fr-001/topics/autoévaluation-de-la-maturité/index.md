# Autoévaluation de la maturité

Une auto-évaluation consolidée pour une équipe. Elle emploie l'échelle commune à cinq niveaux (Initier, Développer, Standardiser, Gérer, Orchestrer) selon deux vues : les six dimensions d'un programme de métriques, et les domaines de métriques couverts par les parties 2 à 10. Elle prend environ une heure. C'est un outil de conversation et non une certification, et elle n'est pas la même chose que les échelles de maturité de processus d'ITIL, d'ISO/IEC 33000 ou du Capability Maturity Model. Les résultats restent auprès de l'équipe (voir le sujet 11.4, Modèle de maturité des programmes de métriques).

## Comment la mener

1. **Réunissez l'équipe pendant une heure** avec un animateur qui n'est pas le gestionnaire de l'équipe. Montrez l'échelle ci-dessous.
2. **Marquez en privé.** Chaque personne marque, seule, le niveau où elle pense que l'équipe se trouve, pour chaque ligne.
3. **Comparez et discutez.** Les différences révèlent des expériences différentes de la même pratique. Demandez un exemple pour chaque niveau revendiqué (« Quelle décision au dernier trimestre ? »).
4. **Convenez d'une vue d'équipe** et écrivez les preuves qui la sous-tendent.
5. **Choisissez une ou deux petites prochaines étapes,** chacune achevable en un trimestre, avec un responsable et une date. Mettez-les dans le registre d'amélioration (voir le sujet 9.5, Métriques d'amélioration continue).
6. **Gardez le résultat auprès de l'équipe.** Ne partagez au-delà de l'équipe que des plages et des thèmes agrégés. Ne faites jamais la moyenne des lignes en un seul score, et ne classez jamais les équipes.

Réévaluez environ deux fois par an et après une réorganisation, un changement d'outil ou une entorse à la charte de métriques. Attendez-vous à ce que certaines lignes reculent, et traitez cela comme de l'information.

## L'échelle

| Niveau | Nom | À quoi cela ressemble |
| --- | --- | --- |
| 1 | **Initier** | L'équipe reconnaît la pratique mais n'a pas de manière cohérente de la mener. Le travail est ponctuel, dépend des individus et est surtout non documenté. |
| 2 | **Développer** | Certaines équipes ont des pratiques qui fonctionnent, mais elles diffèrent d'une équipe à l'autre. Des outils, des modèles et des habitudes naissants existent mais ne sont ni partagés ni attendus. |
| 3 | **Standardiser** | Une approche commune et légère est écrite et utilisée entre équipes. Les rôles sont clairs. L'approche est un point de départ que les équipes peuvent adapter avec une raison énoncée. |
| 4 | **Gérer** | Les résultats sont mesurés et revus. Les écarts mènent à un travail d'amélioration planifié et doté de ressources. |
| 5 | **Orchestrer** | La pratique est coordonnée entre équipes, fournisseurs et clients, et adaptée continuellement à mesure que les conditions changent. L'amélioration est routinière et vient de tous. |

Plus haut n'est pas toujours mieux. Choisissez le niveau qui convient à votre taille, à vos risques et à vos besoins, et écrivez pourquoi.

## Vue 1 : le programme de métriques

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Questions et but | Mesures recueillies parce que les données existent | Certaines équipes énoncent les questions qu'elles posent | Publics et questions écrits ; mesures associées à ceux-ci | Couverture des questions revue ; les questions sans réponse pilotent de nouvelles mesures | Les publics, y compris clients et fournisseurs, façonnent les mesures |
| Définitions et responsabilité | Définitions variables selon les personnes | Quelques-unes écrites ; responsables informels | Catalogue avec définition, source, responsable et limites | Complétude des définitions et contestations gérées | Définitions co-détenues entre équipes et fournisseurs |
| Données et outillage | Manuels et fragiles | Quelques flux automatisés | Pipelines testés, stockage partagé, données portables | Fiabilité, rapprochement et aptitude à la sortie gérés | Pipelines fédérés avec contrats partagés |
| Usage dans les décisions | Chiffres affichés, rarement utilisés | Utilisés dans certaines revues | Revues régulières qui consignent les décisions | Preuve par la décision suivie et suivie d'effet | Décisions reliées aux résultats entre équipes |
| Confiance et sécurité | Peur ou indifférence | Assurances verbales | Charte écrite ; vues individuelles désactivées ; sondage de sécurité | Entorses examinées au grand jour ; signaux de franchise gérés | Confiance routinière ; programme façonné par le personnel et les partenaires |
| Revue et évolution | Aucune | Nettoyage occasionnel | Revue périodique avec les équipes ; règle de retrait | Étapes issues des évaluations financées et achevées | Le programme s'améliore continuellement grâce à tous |

## Vue 2 : les domaines de métriques

Pour chaque domaine, marquez le niveau qui décrit le mieux la manière dont votre équipe le mesure et l'utilise aujourd'hui. Sautez les domaines qui ne s'appliquent pas. Les amorces sont des exemples de ce qu'une équipe de niveau 3 peut dire.

| Domaine | Partie d'origine | Une équipe de niveau 3 peut dire |
| --- | --- | --- |
| Flux et livraison continue | Partie 2 | Nous connaissons nos délais de livraison et nos temps de cycle comme des distributions, nous limitons le travail en cours et nous lisons la vitesse de livraison à côté de la stabilité (voir le sujet 2.8, Métriques DORA). |
| Centre de services, incidents et demandes | Partie 3 | Nous mesurons le temps jusqu'à une résolution utile avec les contacts de retour, et nos incidents majeurs ont une revue standard (voir le sujet 3.4, Métriques des incidents majeurs). |
| Problèmes, changements et versions | Partie 4 | Nos changements suivent un chemin proportionné au risque, et nous suivons la reprise et le coût des erreurs connues (voir le sujet 4.3, Métriques de maîtrise des changements). |
| Niveaux de service, disponibilité et fiabilité | Partie 5 | Nos niveaux de service sont définis à partir des résultats pour les utilisateurs, avec un budget d'erreur utilisé dans les décisions (voir le sujet 5.2, SLI, SLO et budgets d'erreur). |
| Clientèle et expérience | Partie 6 | Nous interrogeons les utilisateurs sur leur expérience de façons qui ne les fatiguent pas, et nous agissons sur les réponses (voir le sujet 6.2, Accords de niveau d'expérience). |
| Actifs, configuration et finances | Partie 7 | Nous savons ce que nous possédons et exploitons, et le coût par unité d'usage de nos services (voir le sujet 7.5, Coût du service et économie unitaire). |
| Sécurité, risque, conformité et fournisseurs | Partie 8 | Nos preuves de risque et de contrôle sont réelles, nos fournisseurs sont mesurés sur les résultats, et rien de cela n'est détourné pour l'audit (voir le sujet 8.2, Métriques des risques et des contrôles). |
| Personnes, équipes et amélioration | Partie 9 | Nous écoutons nos gens sur le rythme et le bien-être, et nous suivons le travail d'amélioration jusqu'aux résultats (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs). |
| Métriques pour l'IA, l'automatisation et l'analytique | Partie 10 | Nous comparons le travail assisté par l'IA à une base de référence, nous échantillonnons les productions pour en juger l'utilité et nous enregistrons nos usages de l'IA (voir le sujet 10.1, L'IA dans la mesure de la gestion des services). Nos automatisations et nos pipelines ont des responsables, des contrôles après exécution et une manière testée de revenir en arrière (voir le sujet 10.6, Métriques d'automatisation et d'orchestration, et le sujet 10.7, Métriques des pipelines et des changements automatisés). Nous montrons la qualité des données et l'incertitude à côté de nos chiffres et nous consignons nos prévisions face aux réels (voir le sujet 10.8, Métriques d'analytique et de qualité des données, et le sujet 10.9, Métriques de prévision et d'analytique prédictive). |
| Fondations d'ITIL 5 | Partie 1 | Nous avons une cartographie du parc avec des responsables, des énoncés de résultats avec des preuves et un journal de vérification des affirmations sur ITIL 5, chacune étiquetée vérifiée ou non confirmée (voir le sujet 1.8, Mesure d'ITIL 5 et résultats de valeur). |

## Consigner le résultat

```text
Équipe : [nom]   Date : [date]   Animateur : [nom]
Participants : [rôles]

Vue 1
| Dimension | Vue de l'équipe | Preuves | Prochaine étape (responsable, date) |
| [ligne] | [1-5] | [exemple] | [étape] |

Vue 2
| Domaine | Vue de l'équipe | Preuves | Prochaine étape |
| [ligne] | [1-5 ou s.o.] | [exemple] | [étape] |

Différences qui nous ont surpris : [notes]
À quoi nous n'utiliserons jamais ceci : [classement, financement, évaluations de performance]
Prochaine évaluation : [date]
```

## Lire le profil

- **Cherchez la ligne limitante.** La confiance et les définitions limitent souvent les autres. Un petit gain là peut débloquer le reste.
- **Comparez des lignes, non des équipes.** La question utile est de savoir où votre équipe est plus forte ou plus faible, pas comment elle se compare à une autre.
- **Demandez ce qui a changé.** Une hausse après un trimestre devrait s'appuyer sur une décision, une habitude ou un résultat que vous pouvez nommer. Une hausse sans preuve laisse penser que le marquage était optimiste.
- **Arrêtez-vous à assez bien.** Une équipe peut raisonnablement rester au niveau 3 sur certaines lignes pendant des années.
