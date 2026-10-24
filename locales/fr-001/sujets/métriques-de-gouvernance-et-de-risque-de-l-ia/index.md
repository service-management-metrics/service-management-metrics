# Métriques de gouvernance et de risque de l'IA

**L'usage de l'IA demande la même discipline que tout changement apporté à un service en production : sachez où elle se trouve, qui en est responsable, quel est son risque, comment elle est testée et modifiée, et ce qui se passe quand elle tourne mal, avec une supervision que les gens peuvent réellement exercer.**

## Vue d'ensemble et motivation

L'IA entre dans une organisation par de nombreuses portes. Une équipe adopte un assistant de codage. Un fournisseur ajoute une fonctionnalité générative à un produit déjà en usage. Un membre du personnel colle un document dans un outil public. Un service construit un modèle pour noter des demandes. Chacun est un usage de l'IA avec ses propres bénéfices et risques, et peu sont visibles en un seul endroit. La gouvernance est l'ensemble des structures, politiques et pratiques qui rendent ces usages connus, redevables et assez sûrs. Les métriques de risque vous disent si la gouvernance fonctionne.

ITIL fournit les briques : gouvernance du système de valeur du service, gestion des risques, maîtrise des changements, gestion de la sécurité de l'information, gestion des fournisseurs et amélioration continue. Les façons de travailler agiles et DevOps apportent l'habitude du changement petit, maîtrisé et réversible, et des contrôles automatisés dans le pipeline. La gouvernance de l'IA n'a pas besoin d'un univers séparé. Elle a besoin de ces pratiques appliquées à des choses qui se comportent différemment du logiciel conventionnel.

Qu'est-ce qui est différent avec l'IA ?

- **Le comportement est statistique et peut changer sans changement de code.** Un modèle peut se comporter différemment après une mise à jour du fournisseur, un changement de ses entrées ou un changement du prompt. Les données qu'il voit en production peuvent s'écarter de celles sur lesquelles il a été testé, un phénomène connu en apprentissage automatique sous le nom de dérive. Un système peut se dégrader silencieusement.
- **Les productions ne sont pas entièrement prévisibles.** Les tests ne peuvent pas couvrir chaque entrée : l'évaluation se fait donc par échantillonnage et par tests ciblés, non par preuve. Les systèmes peuvent échouer d'une façon que leurs constructeurs n'avaient pas prévue.
- **Les préjudices peuvent être diffus et inégaux.** Le [biais algorithmique](https://en.wikipedia.org/wiki/Algorithmic_bias) est une erreur systématique qui mène à des résultats injustes pour certains groupes. Il peut venir des données, de la conception ou de l'usage, et peut ne pas apparaître dans les chiffres d'exactitude globale.
- **De nouvelles surfaces d'attaque apparaissent.** L'[injection de prompt](https://en.wikipedia.org/wiki/Prompt_injection) est une attaque dans laquelle des instructions cachées dans les données d'entrée manipulent un modèle de langage pour lui faire adopter un comportement non voulu. Les modèles peuvent être amenés à révéler des données ou à entreprendre des actions que leurs responsables n'avaient pas voulues.
- **La dépendance envers les fournisseurs est profonde.** De nombreuses capacités d'IA viennent de fournisseurs externes, avec une visibilité limitée sur leur construction et leurs changements. Les mesures sur les fournisseurs comptent davantage (voir le sujet 8.4, Métriques des fournisseurs et des contrats).
- **Les règles émergent et diffèrent selon les lieux.** Les lois, normes et orientations sur l'IA se développent vite. La [loi sur l'intelligence artificielle](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) de l'Union européenne adopte une approche fondée sur le risque avec des obligations qui s'appliquent par phases, et d'autres juridictions prennent des chemins différents. Des normes comme l'ISO/IEC 42001 sur les systèmes de management de l'IA et le cadre de gestion des risques de l'IA du NIST offrent des structures. Les énoncés de ce sujet sur des règles précises sont datés d'octobre 2026 et doivent être revérifiés, et un avis juridique doit guider vos obligations. Le domaine plus large est diversement décrit comme [IA responsable](https://en.wikipedia.org/wiki/Responsible_AI) ou IA digne de confiance, et la question de savoir comment le droit doit traiter l'IA est l'objet de la [réglementation de l'intelligence artificielle](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

La gouvernance peut échouer de deux façons opposées. Elle peut être si lourde que les équipes l'évitent, et l'usage de l'IA passe dans la clandestinité sous forme de [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT). Ou elle peut être un exercice sur le papier, avec une politique et un registre qui ne reflètent pas la pratique. Les objectifs agiles suggèrent la voie du milieu : implication continue des parties prenantes dans la fixation des règles, approbations petites et rapides pour les usages à faible risque, examen plus approfondi là où un préjudice est possible, et amélioration continue des contrôles à mesure que l'expérience grandit. Des personnes motivées, avec des limites claires et à qui l'on fait confiance pour user de jugement à l'intérieur, signaleront les problèmes. Des gens qui craignent la punition ne le feront pas.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique aux mesures de gouvernance : quand le « pourcentage d'usages d'IA enregistrés » est un objectif, les registres se remplissent d'entrées que personne ne lit, et les usages réels restent hors de vue (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les sujets de risque, de conformité et de sécurité de la partie 8, et sur les sujets antérieurs de cette partie.

## Principes clés

- **Sachez où l'IA est utilisée.** Un registre des usages, y compris ceux intégrés aux produits et ceux que le personnel adopte de son côté, est le socle.
- **Ajustez l'examen au risque.** Léger pour les usages à faible risque, plus profond pour ceux qui ont des conséquences.
- **Traitez les changements de modèle et de prompt comme des changements.** Ils demandent des tests, une approbation proportionnée au risque et la capacité de revenir en arrière.
- **Évaluez avant et pendant l'usage.** Testez sur des cas réalistes, et continuez de tester en production.
- **Gardez une supervision humaine significative.** Une personne doit pouvoir comprendre, remettre en question et passer outre, et avoir le temps et l'autorité de le faire.
- **Apprenez des incidents sans blâme.** Les défaillances de l'IA sont nouvelles, et le signalement est la manière dont l'organisation apprend.
- **Rendez rapide l'approbation des cas sûrs.** Une gouvernance lente chasse l'usage hors de vue.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture du registre des usages de l'IA | Part des usages de l'IA trouvés par des moyens indépendants qui figurent au registre avec un responsable et une classe de risque | usages au registre avec responsable et classe de risque / usages trouvés par une découverte indépendante (achats, dépenses, identité, réseau et signalements du personnel) | pourcentage | Registre, données d'achats et de dépenses, journaux d'identité, enquêtes | Gouvernance ; gestion des actifs informatiques ; gestion des risques | Travail visible et responsabilité claire | Trimestrielle |
| Actualité de l'évaluation des risques | Part des usages à risque moyen et élevé dont l'évaluation des risques est dans le cycle exigé | usages évalués dans le cycle / usages à risque moyen et élevé | pourcentage | Évaluations des risques | Gestion des risques ; gestion de la sécurité de l'information | Réflexion régulière sur les risques | Trimestrielle |
| Couverture de la maîtrise des changements | Part des changements apportés aux modèles, prompts, outils et sources de données en production qui sont passés par la maîtrise des changements avec les tests exigés | changements avec enregistrement de changement, tests et approbation proportionnée au risque / changements détectés | pourcentage | Enregistrements de changements comparés à l'historique des versions et aux notes de version des fournisseurs | Maîtrise des changements ; gestion des versions et des déploiements | Changements petits, maîtrisés et réversibles | Mensuelle |
| Actualité de l'évaluation | Part des usages en production ayant une évaluation à jour (exactitude, sécurité et équité là où c'est pertinent) et des résultats dans la tolérance | usages avec une évaluation dans le cycle et des résultats acceptables / usages en production du périmètre | pourcentage | Enregistrements d'évaluation | Assurance qualité ; gestion des risques | Définition de terminé pour le comportement | Trimestrielle |
| Taux de preuves de supervision humaine | Part des productions ou décisions lourdes de conséquences échantillonnées avec une revue humaine consignée et substantielle | éléments échantillonnés avec revue documentée qui aurait pu changer le résultat / éléments échantillonnés | pourcentage | Enregistrements de décisions échantillonnés | Gestion des risques ; gouvernance | Revue avant mise en production | Mensuelle |
| Taux d'incidents d'IA et délai de confinement | Incidents impliquant l'IA (production nuisible, exposition de données, action dangereuse) par usage et temps pour les contenir | incidents par usage en production par trimestre ; médiane et 85e percentile des heures entre la détection et le confinement | incidents ; heures | Enregistrements d'incidents étiquetés IA | Gestion des incidents ; gestion de la sécurité de l'information | Réponse et apprentissage sans blâme | Trimestrielle |
| Actualité de la diligence raisonnable des fournisseurs sur l'IA | Part des fournisseurs offrant des fonctionnalités d'IA dans des services critiques dont l'évaluation propre à l'IA est à jour | fournisseurs avec évaluation d'IA à jour / fournisseurs critiques ayant des fonctionnalités d'IA | pourcentage | Évaluations des fournisseurs | Gestion des fournisseurs ; gestion des risques | Revue régulière des dépendances | Trimestrielle |

Définissez large l'« usage de l'IA » dans le registre : modèles que vous construisez, services que vous achetez, fonctionnalités à l'intérieur de produits et outils que le personnel utilise. Les classes de risque et les cycles sont fixés dans la politique. La couverture du registre se mesure face à une découverte indépendante, non face au registre lui-même. La couverture de la maîtrise des changements exige un moyen de détecter les changements : contrôle de version, avis des fournisseurs, supervision de configuration. Les preuves de supervision humaine exigent que la revue ait pu changer le résultat, non qu'un bouton ait été cliqué. Les taux d'incidents décrivent des usages et des systèmes et ne servent pas à évaluer des personnes.

## Recommandations

### Connaître et classer

**1. Construisez le registre en cherchant autant qu'en demandant.** Commencez par une enquête et une politique, puis vérifiez face aux enregistrements d'achats et de dépenses, aux journaux d'identité et d'accès, aux données réseau et de facturation infonuagique, et aux mises à jour de produits des fournisseurs. Incluez les fonctionnalités d'IA intégrées aux outils que vous possédez déjà. Attendez-vous à des surprises : les gens utilisent des outils que vous n'avez pas approuvés, souvent pour de bonnes raisons. Traitez-les comme de l'information (voir le sujet 7.2, Métriques des actifs logiciels et des licences).

**2. Attribuez un responsable et une classe de risque à chaque usage.** Le responsable est la personne redevable de l'usage et de ses résultats. La classe de risque reflète le préjudice si le système défaille : qui est touché, si des décisions sur des personnes sont en jeu, s'il agit seul, quelles données il touche et dans quelle mesure les effets sont réversibles. Utilisez peu de classes aux règles claires. Appuyez-vous sur des cadres reconnus, comme le cadre de gestion des risques de l'IA du NIST, l'ISO/IEC 42001 et le droit applicable, et adaptez-les à votre contexte.

**3. Rendez l'approbation proportionnée.** Pour les usages à faible risque, un enregistrement rapide en libre-service avec quelques questions suffit. Pour les usages lourds de conséquences, exigez une évaluation des risques, des résultats d'évaluation, une conception définie de la supervision humaine et une validation. Une voie rapide pour la majorité sûre garde les gens dans le système, et une voie plus lente pour les quelques dangereux leur donne un examen approprié.

### Tester et maîtriser le changement

**4. Évaluez sur des cas réalistes, avant et pendant l'usage.** Construisez un ensemble de cas de test qui reflètent de vraies entrées, y compris des cas difficiles et adverses, et notez les productions face à des critères écrits. Incluez des contrôles de sécurité et d'équité là où des personnes pourraient être touchées. Relancez les évaluations selon un calendrier et chaque fois que le modèle, le prompt ou les données changent. Une équipe d'attaque (red team), un groupe qui attaque délibérément le système pour trouver des faiblesses, est une pratique utile pour les usages à plus haut risque. Voyez les pratiques d'échantillonnage pour le travail assisté (voir le sujet 10.2, Mesurer le travail assisté par l'IA).

**5. Placez les modèles, les prompts et les outils sous maîtrise des changements.** Versionnez les prompts et les configurations comme du code. Exigez des tests et une approbation proportionnée au risque pour les changements, consignez-les et gardez la capacité de revenir en arrière. Suivez les mises à jour de modèles pilotées par les fournisseurs, qui peuvent changer le comportement sans avertissement, et convenez avec les fournisseurs de la manière dont vous serez informé. Traitez une montée de version de modèle comme un changement qui demande un contrôle (voir le sujet 4.3, Métriques de maîtrise des changements).

**6. Supervisez en production.** Guettez la dérive des entrées et des sorties, la hausse des taux d'erreur et de modification, et les schémas inhabituels. Fixez des seuils qui déclenchent une revue. Pour les systèmes qui entreprennent des actions, surveillez les journaux d'actions. La supervision est la manière de trouver les problèmes que les tests ont manqués.

### Garder réelle la supervision humaine

**7. Concevez une supervision qui peut fonctionner.** Une personne qui revoit chaque production d'un système rapide ne peut pas suivre, et une personne à qui l'on demande d'approuver ce qu'elle ne peut comprendre n'exerce pas de supervision. Définissez ce que fait l'humain, quelle information il a, combien de temps, et quelle autorité de passer outre. Échantillonnez les revues pour vérifier qu'elles sont substantielles. Soyez attentif au biais d'automatisation, la tendance à accepter la production de la machine (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

**8. Gardez des pistes d'audit.** Consignez les entrées, les sorties, les versions, les décisions et les actions d'une manière qui soutient l'enquête, sous réserve des règles de vie privée et des limites de conservation. Une [piste d'audit](https://en.wikipedia.org/wiki/Audit_trail) permet de répondre à ce qui s'est passé et pourquoi. Pour les décisions lourdes de conséquences sur des personnes, considérez quelle explication vous pouvez donner et quelle voie de recours existe (voir le sujet 8.3, Métriques de conformité et d'audit).

**9. Protégez les données et résistez à la manipulation.** Contrôlez les données que les systèmes d'IA peuvent voir et envoyer. Testez l'injection de prompt et la fuite de données, surtout pour les systèmes qui lisent du contenu externe ou qui ont accès à des outils. Appliquez les principes de moindre privilège utilisés pour les agents qui agissent (voir le sujet 10.3, Métriques des agents d'IA et des agents conversationnels, et le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités). Considérez la vie privée dès la conception, et impliquez des spécialistes de la protection des données.

### Réagir et apprendre

**10. Traitez les incidents d'IA comme des incidents.** Définissez ce qui compte : productions nuisibles ou biaisées, exposition de données, actions dangereuses, erreurs importantes qui atteignent les utilisateurs. Utilisez votre processus d'incident normal avec l'étiquette IA, revoyez sans blâme et alimentez les évaluations et les contrôles avec les leçons. Facilitez le signalement pour le personnel et les utilisateurs. Le délai de confinement compte autant que pour tout incident (voir le sujet 3.4, Métriques des incidents majeurs).

**11. Gérez l'IA des fournisseurs.** Demandez aux fournisseurs quelles fonctionnalités d'IA ils utilisent, comment elles sont testées et modifiées, comment les données sont traitées et comment les incidents sont signalés. Ajoutez des clauses propres à l'IA aux contrats là où cela compte, y compris l'avis des changements importants de modèle. Réévaluez les fournisseurs critiques selon un cycle (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

**12. Revoyez la gouvernance elle-même.** Chaque trimestre, vérifiez ce que montrent les mesures : où des usages sont restés non enregistrés, quelles approbations ont été trop lentes, quels contrôles n'ont pas attrapé de problèmes. Ajustez la politique et les voies. Impliquez le personnel et les utilisateurs dans la revue. Gardez les règles courtes, claires et à jour, et retirez les contrôles qui ne méritent pas leur coût.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique garde-fou associée |
| --- | --- | --- |
| Couverture du registre des usages de l'IA | Enregistrer des usages triviaux pour relever le pourcentage ; dénominateurs limités à ce qui est enregistré | Découverte indépendante pour le dénominateur ; échantillonner la qualité des entrées du registre ; amnistie pour les usages non enregistrés |
| Actualité de l'évaluation des risques | Évaluations superficielles qui passent toujours ; évaluer des usages à faible risque | Revoir la profondeur des évaluations ; vérifier que la classe de risque correspond aux critères |
| Couverture de la maîtrise des changements | Ne pas détecter les changements des fournisseurs ; consigner les changements après coup | Détection par l'historique des versions et les avis des fournisseurs ; enregistrements de changements horodatés avant la mise en production |
| Actualité de l'évaluation | Évaluations sur des cas faciles ; choisir les tolérances après avoir vu les résultats | Ensembles de tests revus par un tiers indépendant ; seuils fixés d'avance |
| Taux de preuves de supervision humaine | Cliquer sur approuver sans lire ; documenter une revue qui ne pouvait pas changer le résultat | Échantillonner les revues pour leur substance ; erreurs connues semées ; charge des réviseurs |
| Taux d'incidents d'IA et délai de confinement | Ne pas signaler les incidents ; restreindre la définition | Signalement facile et sans blâme ; comparer avec les plaintes d'utilisateurs et les constats d'audit |
| Actualité de la diligence raisonnable des fournisseurs sur l'IA | Questionnaires remplis par le marketing ; évaluations sans preuves | Exigence de preuves pour les fournisseurs critiques ; vérification indépendante |

Une lecture saine est un registre que la découverte indépendante confirme, des évaluations qui correspondent au risque, des changements qui passent par le contrôle, des évaluations tenues à jour, une supervision qui trouve de vraies erreurs, des incidents signalés volontiers et contenus rapidement, et des fournisseurs qui partagent ce qu'ils changent.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Approbation centrale de chaque usage de l'IA | Contrôle, cohérence | Lente ; chasse l'usage dans la clandestinité |
| Enregistrement en libre-service avec niveaux de risque | Rapide pour la majorité sûre | Demande de bons critères et des contrôles par sondage |
| Interdiction des outils publics | Réduit l'exposition des données | Usage clandestin ; bénéfices perdus |
| Outils approuvés avec orientations | Usage visible et gérable | Demande de la fourniture et du soutien |
| Documentation lourde | Preuves pour l'audit | Fardeau ; peut ne pas refléter la pratique |
| Évaluation automatisée dans le pipeline | Continue, cohérente | Demande de bons ensembles de tests ; peut manquer de nouvelles défaillances |
| Revue humaine de tout | Sécurité | Ne passe pas à l'échelle ; fatigue |
| Échantillonnage fondé sur le risque | Pratique | Certaines défaillances passent |

La réponse en bref est de fournir des outils approuvés et une voie rapide pour les usages à faible risque, de concentrer l'examen sur ceux qui ont des conséquences, d'automatiser l'évaluation et la supervision, et de garder la supervision humaine là où elle peut réellement fonctionner.

## Questions à discuter avec votre équipe

**1. Où utilisons-nous aujourd'hui l'IA sans qu'elle figure sur aucune liste ?**
Demandez honnêtement à l'équipe, et offrez l'amnistie. Regardez les outils utilisés pour la rédaction, le résumé, le codage et l'analyse, y compris ceux à l'intérieur de produits. L'animateur doit consigner les usages sans jugement. Convenez de qui les enregistrera et lesquels demandent un regard plus attentif.

**2. Si notre usage de l'IA le plus lourd de conséquences commettait une erreur nuisible, comment le saurions-nous et que ferions-nous ?**
Parcourez la détection, le confinement, la communication et l'apprentissage. Notez les lacunes de supervision, de responsabilité et d'autorité pour l'éteindre. Convenez d'une amélioration.

**3. Qu'est-ce qui peut changer sous nos pieds sans que personne l'approuve ?**
Listez les modèles, les prompts, les sources de données et les mises à jour de fournisseurs. Pour chacun, demandez comment nous saurions qu'il a changé et comment nous le testerions. Convenez de l'endroit où ajouter une détection ou un test.

**4. La personne qui revoit la production de l'IA dans notre processus pourrait-elle réellement attraper une erreur grave ?**
Regardez le volume, l'information, le temps et l'autorité. Testez avec une erreur semée. Si la revue ne peut pas fonctionner, repensez le processus avant d'ajouter davantage d'IA.

**5. Lesquelles de nos règles un collègue pressé trouverait-il faciles à suivre, et lesquelles contournerait-il ?**
Listez les règles actuelles et testez-les face à de vrais flux de travail. Discutez des raisons pour lesquelles les règles sont contournées. Convenez de changements qui font du chemin sûr le chemin facile.

**6. Qu'est-ce que nos fournisseurs nous ont dit de leur IA, et qu'avons-nous omis de demander ?**
Vérifiez les questionnaires et contrats récents. Identifiez les fournisseurs critiques ayant des fonctionnalités d'IA et les lacunes d'information. Convenez de questions pour la prochaine revue.

## Quatre perspectives

### Équipes produit et de livraison

Les équipes de livraison construisent et adoptent des fonctionnalités d'IA, et elles ressentent la gouvernance comme une friction ou comme une aide. Elles doivent enregistrer tôt les usages, tester sur des cas réalistes, placer les prompts et les modèles sous contrôle de version et concevoir une supervision qui marche. Elles profitent d'une approbation rapide pour les usages à faible risque.

### Équipes de service et d'exploitation

Les équipes d'exploitation exécutent l'IA en production et répondent à ses incidents. Elles doivent surveiller la dérive, tenir des journaux d'actions, étiqueter les incidents d'IA et avoir l'autorité et les moyens d'éteindre un système. Elles utilisent aussi elles-mêmes l'IA et doivent suivre les mêmes règles.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et sont redevables des résultats. Ils doivent financer le registre, l'évaluation et la supervision, accepter que certains usages de l'IA ne passeront pas, demander une découverte indépendante des usages et suivre les incidents et le délai de confinement. Les instances de gouvernance doivent garder les règles courtes, les revoir régulièrement et s'assurer que le personnel et les utilisateurs ont voix au chapitre.

### Clients et utilisateurs

Les utilisateurs sont touchés par les décisions et productions de l'IA, souvent sans le savoir. Ils méritent de savoir quand l'IA intervient dans des questions qui les touchent, de pouvoir joindre une personne et de contester des décisions. Les plaintes et les recours sont des preuves essentielles du fonctionnement de la gouvernance en pratique.

## En pratique : un exemple de gestion des services

La division de la technologie et des opérations d'une banque régionale adopte une politique d'IA après qu'un membre du personnel a collé des détails de clients dans un outil public. L'équipe de conformité publie un registre et attend que chaque usage y soit listé. Les chiffres ci-dessous sont illustratifs.

Trois mois plus tard, le registre liste 38 usages de l'IA. Le responsable du risque technologique vérifie par des moyens indépendants : données d'achats et de dépenses, journaux d'identité montrant les connexions à des services d'IA, données réseau et enquête anonyme auprès du personnel. La découverte trouve 94 usages : la couverture du registre est donc de 40 %. Dix-sept sont des fonctionnalités à l'intérieur d'outils que la banque a déjà sous licence, et douze sont des outils publics utilisés par le personnel. Sur les 38 usages enregistrés, seuls 14 ont une classe de risque, et les trois usages à plus haut risque, un modèle qui note les alertes de fraude, un agent conversationnel pour les clients et un outil qui résume les plaintes, n'ont eu aucune évaluation depuis un an. Les changements de configuration du modèle de fraude et des prompts de l'agent conversationnel sont faits directement par les équipes, et les enregistrements de changements du dernier trimestre couvrent 21 % des changements trouvés dans l'historique des versions. Un échantillon de 60 alertes de fraude écartées par le modèle montre une revue humaine consignée pour 52 d'entre elles, mais un ensemble semé de cinq manquements connus n'a été attrapé que par un réviseur, parce que les réviseurs traitent chacun plusieurs centaines d'alertes par jour. Un incident, où l'agent conversationnel a donné aux clients un montant de frais périmé, a été découvert par une plainte, et il a fallu six jours pour le contenir parce que personne n'avait l'autorité de l'éteindre.

Le responsable du risque technologique repense la gouvernance avec les équipes. Un court enregistrement en libre-service de cinq questions place les usages à faible risque au registre en quelques minutes, et une période d'amnistie encourage le personnel à lister les outils qu'il utilise. Les classes de risque se fondent sur le préjudice, les données et l'autonomie. Les usages à plus haut risque exigent une évaluation, une évaluation face à des cas réalistes et adverses et une conception définie de la supervision. Les modèles, prompts et outils passent sous maîtrise des changements avec des tests proportionnés au risque, et les prompts de l'agent conversationnel sont versionnés avec retour arrière. Le processus des alertes de fraude est repensé pour que les réviseurs traitent moins d'alertes, mieux priorisées, et des erreurs semées testent leur détection. Un responsable nommé pour chaque usage à haut risque a l'autorité de l'éteindre, et la réponse aux incidents couvre l'IA. Les fournisseurs d'infonuagique et d'IA de la banque sont interrogés sur les fonctionnalités d'IA qu'ils utilisent et sur la manière dont les changements sont notifiés.

Deux trimestres plus tard, la couverture du registre par la découverte indépendante est de 88 %, tous les usages à haut risque sont évalués dans le cycle, la couverture de la maîtrise des changements est de 84 %, la détection des erreurs semées par les réviseurs monte à 4 sur 5 et le délai médian de confinement d'un incident d'IA est de 3 heures. Le personnel utilise des outils approuvés pour la plupart des tâches. Un cadre supérieur demande un objectif de 100 % de couverture du registre. Le responsable du risque technologique propose de suivre la couverture face à la découverte indépendante, l'actualité des évaluations et le traitement des incidents, et explique qu'un registre sans découverte peut atteindre 100 % et manquer quand même le risque. La décision est consignée.

## Agilité, IA, automatisation et analytique

### Agilité

Gouvernez l'IA comme un changement apporté à un service en production, avec une revue régulière et légère et les parties prenantes à la table, plutôt qu'une approbation ponctuelle. La précaution est que des portes d'approbation lourdes poussent les équipes à cacher l'usage de l'IA.

### IA

Tenez un registre de chaque usage de l'IA avec un responsable, une classe de risque, une date d'évaluation et un point de supervision humaine, et mesurez la couverture face à une découverte indépendante. Testez que la supervision peut être exercée. La précaution est que ce livre ne donne aucun avis juridique, et que les obligations varient selon les lieux et le temps : vérifiez-les donc auprès de votre propre conseiller juridique.

### Automatisation

Automatisez la découverte et le recueil de preuves pour les changements de modèles, de prompts et de données, et mesurez l'automatisation sur les changements manqués. La précaution est que les suites d'évaluation automatisées testent ce pour quoi elles ont été construites : ajoutez donc de nouveaux tests à mesure que des défaillances apparaissent.

### Analytique

Rapportez l'actualité des évaluations des risques et des évaluations avec les dates et les décomptes. La décision éclairée est où la supervision est mince. La précaution est que les décomptes d'incidents d'IA sont petits et inégaux : combinez-les donc avec les signalements de quasi-incidents.

## Éclairage sectoriel

**Startup.** La vitesse compte et les risques sont surtout l'exposition des données et des productions peu fiables. Gardez une courte liste d'outils et d'usages avec des responsables, fixez quelques règles claires sur les données qui peuvent être utilisées où et versionnez les prompts. Revisitez à mesure que les exigences d'assurance des clients grandissent.

**Petite entreprise.** Le personnel utilisera des outils publics. Fournissez une option approuvée, écrivez une règle d'une page sur les données et revoyez comment les outils sont utilisés. Interrogez les fournisseurs sur leurs fonctionnalités d'IA, et conservez une trace de l'endroit où l'IA prend des décisions sur des clients ou du personnel.

**Grande entreprise.** L'échelle demande un modèle d'exploitation : registre, niveaux de risque, normes d'évaluation, maîtrise des changements et processus d'incident, intégrés aux fonctions de risque et de sécurité existantes. Utilisez une découverte indépendante, automatisez l'évaluation dans les pipelines et alignez-vous sur les normes. Donnez aux équipes une voie rapide.

**Gouvernement et secteur public.** Les décisions qui touchent les citoyens apportent des devoirs de transparence, d'équité et de recours, et les cadres de passation de marchés et juridiques façonnent ce qui est permis. Tenez des registres publics des usages à fort impact là où c'est exigé, évaluez l'impact sur les droits, gardez des humains significativement dans la boucle et vérifiez le droit et les orientations actuels (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent l'effort de construire et de maintenir le registre, l'outillage ou l'analyse de découverte, les évaluations des risques, les ensembles et exécutions d'évaluation, la maîtrise des changements pour les prompts et les modèles, la supervision, la formation et la capacité de réponse aux incidents. La gouvernance ajoute aussi un certain délai pour les usages à plus haut risque. Ces coûts croissent avec le nombre et le risque des usages, ce qui est une raison de garder légère l'approbation à faible risque.

Les rendements comprennent le préjudice et l'exposition évités, moins de surprises dans les audits et les revues réglementaires, une adoption sûre plus rapide grâce à des règles claires et la confiance des clients et du personnel. Construisez le dossier à partir de vos propres données : le nombre d'usages trouvés hors du registre et les données qu'ils touchent, les incidents et leur coût, le temps passé en approbations ad hoc avant et après, et les constats d'audit. Évitez de citer des statistiques publiées sur les incidents d'IA ou les amendes sans source traçable ni pertinence pour votre contexte. Incluez le coût de ne pas gouverner, qui comprend la possibilité d'un préjudice juridique et de réputation important (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Anti-modèles et pièges

- **Un registre que personne ne vérifie.** La couverture paraît élevée et manque les usages réels. Utilisez une découverte indépendante.
- **Des interdictions générales.** Elles chassent l'usage dans la clandestinité. Fournissez des outils approuvés et une voie rapide.
- **Traiter les prompts et les modèles comme une configuration dont personne n'est responsable.** Le comportement change sans qu'on le remarque. Placez-les sous maîtrise des changements.
- **N'évaluer qu'une fois.** Les systèmes dérivent et changent. Relancez selon un calendrier et au changement.
- **Une supervision de nom seulement.** Les réviseurs ne peuvent pas attraper ce qu'ils ne voient pas. Testez avec des erreurs semées et corrigez la charge.
- **Aucune autorité pour éteindre.** Le confinement prend des jours. Nommez des responsables ayant le pouvoir d'arrêter un système.
- **Ignorer l'IA des fournisseurs.** Votre risque inclut le leur. Demandez, contractualisez et réévaluez.
- **Des règles que personne ne peut suivre.** Elles sont contournées. Gardez-les courtes et facilitez le chemin sûr.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Connaître et classer | Aucune vue de l'usage de l'IA | Politique et liste partielle | Registre avec responsable et classe de risque ; découverte indépendante utilisée pour la couverture | Couverture, actualité des évaluations et délais d'approbation gérés | Vue de registre partagée entre unités d'affaires et fournisseurs ; classes revues avec les régulateurs et les utilisateurs |
| Tester et changer | Improvisé | Quelques évaluations pour certains usages | Évaluation sur des cas réalistes ; prompts et modèles sous maîtrise des changements | Évaluation continue et surveillance de la dérive ; couverture gérée | Évaluation et changement automatisés et fondés sur le risque dans les pipelines, audités de façon indépendante |
| Supervision et apprentissage | Confiance par défaut | La revue existe en principe | Supervision conçue et échantillonnée ; incidents d'IA étiquetés et revus sans blâme | Tests d'erreurs semées, délai de confinement et évaluations des fournisseurs gérés | Supervision, apprentissage des incidents et politique coélaborés avec le personnel, les utilisateurs et les partenaires |

## Liste de vérification

- [ ] Un registre liste les usages de l'IA avec un responsable et une classe de risque, vérifiés face à une découverte indépendante.
- [ ] Une voie rapide existe pour les usages à faible risque, et une voie plus profonde pour ceux qui ont des conséquences.
- [ ] Les usages à plus haut risque ont une évaluation des risques à jour et une conception définie de la supervision.
- [ ] Les évaluations sur des cas réalistes et adverses sont à jour et relancées au changement.
- [ ] Les prompts, modèles, outils et sources de données sont versionnés et sous maîtrise des changements.
- [ ] La supervision en production guette la dérive, les erreurs, les modifications et les actions inhabituelles.
- [ ] La supervision est testée avec des erreurs semées, et la charge des réviseurs est réaliste.
- [ ] Les pistes d'audit soutiennent l'enquête dans les règles de vie privée et de conservation.
- [ ] Les incidents d'IA sont étiquetés, revus sans blâme, et les responsables peuvent éteindre les systèmes.
- [ ] Les fournisseurs ayant des fonctionnalités d'IA sont évalués et tenus de notifier les changements importants.

## Prompts d'IA

**Rédigez une classification des risques pour les usages de l'IA.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Concevez un formulaire d'enregistrement.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Planifiez un ensemble d'évaluation.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Passez en revue un incident d'IA.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## Skills d'IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé d'une métrique de gouvernance ou de risque de l'IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de gouvernance de l'IA s'appuie sur des preuves indépendantes et porte son vecteur de détournement et son garde-fou.

## Idées clés

- Construisez le registre de l'IA par une découverte indépendante, et ajustez l'examen au risque avec une voie rapide pour les usages sûrs.
- Traitez les modèles, les prompts, les outils et les sources de données comme des changements qui demandent des tests, une approbation et un retour arrière.
- Évaluez avant l'usage et pendant l'usage, sur des cas réalistes et adverses.
- Concevez une supervision humaine qui peut fonctionner, et testez-la avec des erreurs semées.
- Traitez les incidents d'IA comme les autres incidents, avec une revue sans blâme, et donnez aux responsables le pouvoir d'éteindre les systèmes.
- Interrogez les fournisseurs sur leur IA, et gardez les règles courtes et le chemin sûr facile.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
