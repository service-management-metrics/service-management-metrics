# Listes de vérification

Trois listes de vérification pour l'équipe du programme : une pour revoir une seule métrique, une pour lancer un tableau de bord et une pour auditer un programme de métriques. Servez-vous-en comme d'amorces pour une conversation avec les équipes, non comme d'un formulaire à remplir et à classer. Adaptez-les, et laissez de côté les points qui ne conviennent pas à votre contexte.

## Liste de vérification de la revue d'une métrique

À utiliser avant l'adoption d'une métrique et à chaque revue périodique (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**But**

- [ ] La métrique répond à une question posée par un public nommé.
- [ ] La décision qu'elle doit éclairer est écrite.
- [ ] Elle mesure un résultat, ou elle est clairement appariée à un résultat (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

**Définition**

- [ ] Une définition écrite, une formule, une unité et une source de données existent.
- [ ] Les règles d'horloge ou de limites sont explicites (quand le décompte commence, s'arrête et se met en pause).
- [ ] Un responsable est nommé, ainsi qu'une personne à interroger quand le chiffre paraît faux.
- [ ] Les limites connues des données sont consignées, y compris les lacunes et les changements dans la manière de les saisir.

**Honnêteté**

- [ ] Le vecteur de détournement le plus probable est écrit.
- [ ] Une métrique ou une pratique garde-fou associée est en place.
- [ ] La métrique décrit une équipe, un service ou un système, et ne classe jamais des individus.
- [ ] Les mesures de temps montrent une médiane et un percentile élevé, avec la taille d'échantillon (voir le sujet 1.6, Culture statistique pour les métriques de service).
- [ ] Une base de référence de plusieurs périodes existe, pour que les changements se lisent face à la variation ordinaire.

**Usage**

- [ ] L'équipe qui fait le travail voit le chiffre d'abord et a aidé à le définir.
- [ ] La dernière revue a mené à une décision consignée, y compris une décision d'attendre.
- [ ] Une condition de retrait de la métrique est écrite.

## Liste de vérification du lancement d'un tableau de bord

À utiliser avant qu'un tableau de bord soit montré à son public (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

**Public et contenu**

- [ ] Le public et ses questions sont écrits, et le public a aidé à revoir une esquisse.
- [ ] La vue compte au plus environ neuf mesures, avec le détail un cran plus bas.
- [ ] L'ensemble est équilibré entre flux, qualité, fiabilité, expérience et coût.
- [ ] Chaque mesure a une compagne qui protège contre sa distorsion probable.

**Clarté**

- [ ] Chaque valeur montre la tendance et le contexte, avec les événements notés.
- [ ] Chaque mesure a une définition, une source, un responsable, une heure d'actualisation et les lacunes connues à un clic.
- [ ] Les objectifs sont montrés comme des références, et toute couleur d'état suit une règle énoncée qui tient compte de la variation.
- [ ] La décoration qui n'ajoute aucune information a été retirée.

**Confiance et exploitation**

- [ ] La charte a été convenue, et les vues au niveau individuel sont désactivées (voir le sujet 11.3, Déployer les métriques sans semer la peur).
- [ ] Les équipes ont vu leurs propres données et ont eu le temps de les corriger.
- [ ] Les données sont tirées automatiquement, avec des contrôles de fraîcheur et un rapprochement avec la source (voir le sujet 11.2, Panorama des outils).
- [ ] Un responsable nommé, une date de revue et une voie de contestation existent.
- [ ] Les rapports que ce tableau de bord remplace ont une date de retrait.

## Liste de vérification de l'audit d'un programme

À utiliser deux fois par an, avec les équipes, à côté de l'auto-évaluation (voir le sujet 12.5, Autoévaluation de la maturité).

**But et confiance**

- [ ] Le programme a un sponsor et une charte écrite que les dirigeants respectent.
- [ ] Les entorses signalées à la charte ont été traitées, et les suites publiées sans noms.
- [ ] Les sondages d'équipe et les signalements de quasi-accidents ne laissent pas penser à une peur croissante.
- [ ] Aucun classement d'équipes ni d'individus n'existe nulle part dans les outils ou les présentations de l'organisation.

**Mesures et données**

- [ ] Chaque équipe peut nommer les décisions que ses mesures ont éclairées au dernier trimestre.
- [ ] Les définitions sont gardées dans un catalogue portable, avec des responsables.
- [ ] La couverture des sources, la fiabilité du pipeline et le rapprochement sont contrôlés et visibles.
- [ ] Un export des définitions et de l'historique a été testé dans l'année écoulée.

**Équilibre et étendue**

- [ ] Les mesures de résultats figurent à côté des mesures d'activité dans chaque vue.
- [ ] Les mesures liées à l'IA suivent des bases de référence, l'échantillonnage et des résultats vérifiés, non le seul volume (voir le sujet 10.4, Inflation des métriques et dilution de la qualité).
- [ ] Les mesures d'automatisation et de pipeline incluent les échecs, les retours arrière et les contournements, et chaque automatisation a un responsable (voir le sujet 10.6, Métriques d'automatisation et d'orchestration, et le sujet 10.7, Métriques des pipelines et des changements automatisés).
- [ ] La qualité des données et l'incertitude sont montrées à côté des chiffres, et les affirmations sur ITIL 5 sont étiquetées vérifiées ou non confirmées (voir le sujet 10.8, Métriques d'analytique et de qualité des données, et le sujet 1.8, Mesure d'ITIL 5 et résultats de valeur).
- [ ] Les mesures de coût, de risque et de personnes sont présentes là où elles comptent, et aucune ne sert à classer des individus.

**Amélioration**

- [ ] Les actions d'amélioration de la dernière revue sont achevées ou abandonnées avec une raison.
- [ ] Des mesures et des rapports ont été retirés dans l'année écoulée.
- [ ] L'effort demandé aux équipes pour la mesure a été estimé et leur est acceptable.
- [ ] Le programme lui-même a été revu avec les équipes, et le plan a été modifié en conséquence (voir le sujet 11.5, Une feuille de route d'adoption progressive).
