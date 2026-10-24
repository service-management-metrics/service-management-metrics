# Teamgesundheit und Entwicklererlebnis

**Teams leisten ihre beste Arbeit, wenn Feedback schnell kommt, die Last auf ihren Köpfen tragbar ist und sie lange Phasen des Fokus finden. Messen Sie diese Bedingungen also mit dem Team, beseitigen Sie die Hindernisse, die sie offenbaren, und nutzen Sie die Zahlen nie, um die Menschen zu ordnen.**

## Überblick und Motivation

Die Prinzipien des Agilen Manifests verlangen, Projekte um motivierte Individuen zu errichten, ihnen das Umfeld und die Unterstützung zu geben, die sie brauchen, und ihnen zu vertrauen, dass sie die Arbeit erledigen. Sie verlangen auch, dass Sponsoren, Entwickler und Nutzer ein gleichbleibendes Tempo dauerhaft halten können und dass das Team regelmäßig reflektiert, wie es wirksamer werden kann. Kennzahlen zu Teamgesundheit und Entwicklererlebnis sind der Weg, diese Prinzipien überprüfbar zu machen. Sie fragen, wie es ist, hier die Arbeit zu tun, und was im Weg steht.

[Developer Experience](https://en.wikipedia.org/wiki/Developer_experience) ist die Summe der Interaktionen, die Entwickler mit den Werkzeugen, Prozessen und Menschen haben, mit denen sie arbeiten. Die Idee reicht weiter als die Softwareentwicklung. Betreiber, Mitarbeitende des Service Desks, Analysten und alle anderen, die einen Service bauen oder betreiben, haben ein Erlebnis ihres Umfelds. Dieses Thema nutzt „Entwicklererlebnis“ für die Engineers und „Teamgesundheit“ für die weitere Gruppe, und dieselben Kennzahlen gelten für beide.

Zwei Forschungsrahmen werden häufig zitiert. Das SPACE-Rahmenwerk, 2021 von Nicole Forsgren und Kollegen veröffentlicht, argumentiert, dass die [Produktivität](https://en.wikipedia.org/wiki/Productivity) von Entwicklern sich nicht auf eine Zahl reduzieren lässt, und schlägt fünf Dimensionen vor: Zufriedenheit und Wohlbefinden, Leistung, Aktivität, Kommunikation und Zusammenarbeit sowie Effizienz und Fluss. Ein Folgepapier von 2023 von Abi Noda, Margaret-Anne Storey, Nicole Forsgren und Michaela Greiler mit dem Titel „DevEx: What Actually Drives Productivity“ konzentriert sich auf drei Dimensionen, die Entwickler spüren und Organisationen ändern können: Feedbackschleifen, kognitive Last und Flow-Zustand. Beide Papiere empfehlen, Umfragedaten über Wahrnehmungen mit Daten aus Systemen über Arbeitsabläufe zu kombinieren, und beide warnen davor, eine einzelne Kennzahl, besonders eine Aktivitätszahl, als Ersatz für Produktivität zu nutzen.

Die drei DevEx-Dimensionen sind ein praktischer Ausgangspunkt.

- **Feedbackschleifen.** Wie schnell erfährt eine Person das Ergebnis dessen, was sie tat? Langsame Builds, langsame Tests, langsame Reviews und langsame Genehmigungen fügen jeweils Warten hinzu, und Warten bricht Konzentration. Schnelles Feedback ist auch eine Kernstütze kontinuierlicher Auslieferung.
- **[Kognitive Last](https://en.wikipedia.org/wiki/Cognitive_load).** Wie viel muss eine Person im Kopf halten, um etwas zu erledigen? Komplizierte Systeme, schlechte Dokumentation, unklare Verantwortung und viele Werkzeuge erhöhen die Last. Sie zu senken setzt Kapazität für die Arbeit frei, auf die es ankommt.
- **[Flow-Zustand](https://en.wikipedia.org/wiki/Flow_(psychology)).** Kann eine Person ununterbrochene Phasen finden, in denen sie sich konzentriert? Meetings, Benachrichtigungen, ungeplante Anfragen und Kontextwechsel tragen ihn ab.

Kennzahlen in diesem Bereich sind ungewöhnlich leicht zu missbrauchen. Zahlen von Commits, Pull Requests, geschlossenen Tickets oder Stunden online sind Aktivitätsmaße. Sie sind leicht zu erfassen und sagen wenig darüber, ob Menschen gute Arbeit leisten können, und sie laden zu Manipulation ein. Wahrnehmungsmaße sind subjektiv und wertvoll, und sie können verzerrt werden, wenn Menschen die Folgen einer ehrlichen Antwort fürchten. Jede Kennzahl über Menschen kann in Überwachung abgleiten. Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt mit ethischer Schärfe: Wird eine Kennzahl über Menschen zum Ziel, hören Menschen auf, die Wahrheit über ihre Arbeit zu sagen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Dieses Thema baut auf dem früher beschriebenen Erlebnis interner Nutzer auf (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis) und setzt sich in den nächsten Themen zu Wohlbefinden, Zusammenarbeit, Fähigkeiten und Verbesserung fort.

## Leitprinzipien

- **Die Bedingungen messen, nicht die Menschen.** Fragen Sie nach dem Umfeld und seinen Hindernissen und berichten Sie auf Teamebene.
- **Wahrnehmung mit Workflow-Daten kombinieren.** Was Menschen empfinden und was Systeme erfassen, verpasst jeweils einen Teil des Bildes.
- **Das Team seinen Gesundheitscheck besitzen lassen.** Die Menschen nah an der Arbeit wählen die Fragen und lesen die Ergebnisse zuerst.
- **Diese Kennzahlen nie nutzen, um Einzelne zu ordnen oder zu beurteilen.** Das würde ehrliche Antworten beenden.
- **Aktivitätszahlen nicht als Produktivität behandeln.** Zahlen von Commits, Tickets oder Stunden sind keine Ergebnisse.
- **Sichtbar auf das reagieren, was man hört.** Beseitigen Sie das Hindernis oder sagen Sie, warum nicht.
- **Ein nachhaltiges Tempo schützen.** Ein Team, das dauerhaft heiß läuft, leiht sich von seiner Zukunft.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dauer der Feedbackschleife | Zeit, bis eine Person das Ergebnis einer üblichen Handlung erhält, nach Schleifenart | Median und 85. Perzentil der Minuten oder Stunden für Build, Testlauf, Wartezeit auf Code-Review und Deployment, je Team | Minuten oder Stunden | Zeitstempel von Pipeline und Review-Werkzeug, nach Team aggregiert | Release- und Deployment-Management; kontinuierliche Verbesserung | Schnelles Feedback in kontinuierlicher Auslieferung | Wöchentlich |
| Anteil der Fokuszeit | Anteil der Arbeitszeit in ununterbrochenen Blöcken einer vereinbarten Mindestlänge, wie vom Team berichtet | vom Team berichtete Stunden in Fokusblöcken / Arbeitsstunden, in einem kurzen Puls erhoben | Prozent | Team-Puls; Kalenderdaten nur, wenn das Team zustimmt und sie aggregiert sind | Kontinuierliche Verbesserung; Wissensmanagement | Geschützte Zeit für konzentrierte Arbeit | Monatlich |
| Bewertung der kognitiven Last | Bewertung des Teams, wie schwer es ist, ein benanntes System oder einen Prozess zu verstehen und zu ändern | mittlere Bewertung und Streuung auf einer kurzen vereinbarten Skala, je System | Skalenpunkte | Kurzer Puls, mit einem System oder Prozess verknüpft | Service-Design; Wissensmanagement | Gemeinsames Verständnis der Arbeit | Vierteljährlich |
| Lösungszeit von Hindernissen | Zeit vom Benennen eines Hindernisses durch das Team bis zu seiner Beseitigung oder einer erfassten Entscheidung, es nicht zu beseitigen | Median und 85. Perzentil der Tage von benannt bis gelöst oder entschieden | Tage | Hindernisliste oder -tracker | Kontinuierliche Verbesserung; Problemmanagement | Beseitigte Impediments | Monatlich |
| Trend des Team-Gesundheitschecks | Eigene Bewertung des Teams zu selbstgewählten Dimensionen, über die Zeit verfolgt | Änderung der Bewertungen der vom Team gewählten Dimensionen zwischen Checks | Skalenpunkte | Team-Gesundheitscheck, im Besitz des Teams | Kontinuierliche Verbesserung | Reflexion des Teams, wie es wirksamer werden kann | Monatlich oder vierteljährlich |
| Zufriedenheit mit Werkzeugen und Prozessen | Bewertung des Teams, wie zufrieden es mit den Werkzeugen und Prozessen ist, die es täglich nutzt | mittlere Bewertung oder Anteil positiver Antworten für jedes benannte Werkzeug oder jeden Prozess | Skalenpunkte oder Prozent | Kurzer Puls | Service-Level-Management; kontinuierliche Verbesserung | Passung des Umfelds zur Arbeit | Vierteljährlich |
| Dimensionsabdeckung | Zahl der SPACE-Dimensionen, die von den Kennzahlen abgedeckt werden, die ein Team tatsächlich nutzt | Zahl der fünf Dimensionen mit mindestens einer genutzten Kennzahl | Anzahl (0 bis 5) | Kennzahlenregister | Messung und Berichterstattung; Governance | Ausgewogene Kennzahlen | Jährlich |

Aggregieren Sie alles auf Teamebene und setzen Sie eine Mindestgruppengröße, zum Beispiel kein Ergebnis für eine Gruppe kleiner als fünf Personen. Fokuszeit ist die eigene Beschreibung des Teams, und jede aus dem Kalender abgeleitete Zahl ist optional, aggregiert und vom Team vereinbart. Dauern von Feedbackschleifen stammen aus Systemen und beschreiben die Pipeline, nicht Menschen. Die Dimensionsabdeckung ist eine Prüfung des Messprogramms, gedacht, um das Verlassen auf eine einzige Art von Kennzahl zu verhindern.

## Empfehlungen

### Bei den Bedingungen beginnen, unter denen Menschen arbeiten

**1. Fragen Sie das Team, was es bremst.** Beginnen Sie mit einem Gespräch, nicht mit einer Umfrage: Was verschwendet Ihre Zeit, was ist schwer zu verstehen und was unterbricht Sie am meisten? Schreiben Sie die Antworten in den Worten des Teams auf. Das Gespräch findet Probleme, die kein Dashboard fände, und es baut das Vertrauen auf, das spätere Umfragen brauchen. Einigen Sie sich, welche zwei oder drei zu messen sind.

**2. Nutzen Sie die drei DevEx-Dimensionen als Linse.** Wählen Sie für Feedbackschleifen, kognitive Last und Flow-Zustand jeweils eine Wahrnehmungsfrage und, wo möglich, eine Systemkennzahl. Koppeln Sie bei Feedbackschleifen „Wie zufrieden sind Sie damit, wie lange Builds dauern?“ mit der Build-Dauer. Fragen Sie bei kognitiver Last, wie schwer es ist, ein benanntes System zu verstehen und zu ändern. Fragen Sie beim Flow, wie oft Menschen ohne Unterbrechung arbeiten können. Koppeln Sie, was Menschen sagen, mit dem, was Systeme erfassen, und schauen Sie auf Abweichungen.

**3. Decken Sie mehrere SPACE-Dimensionen ab.** Wählen Sie Kennzahlen aus mindestens drei der fünf Dimensionen, damit keine einzelne Art von Daten dominiert. Zufriedenheit und Wohlbefinden, Zusammenarbeit sowie Effizienz und Fluss zählen für ein Team, das Services betreibt, oft am meisten. Gehen Sie mit Aktivitätsmaßen sehr sorgfältig um und nutzen Sie sie nur als Kontext. Die Dimensionsabdeckung hält das ehrlich.

### Mit Sorgfalt messen

**4. Lassen Sie das Team seinen Gesundheitscheck besitzen und zuerst lesen.** Ein Team-Gesundheitscheck ist eine kurze Selbsteinschätzung zu Dimensionen, die das Team wählt, etwa Spaß, Unterstützung, Geschwindigkeit, Lernen und Leichtigkeit des Releases. Das Team liest und bespricht seine eigenen Ergebnisse, bevor jemand sonst eine Zusammenfassung sieht. Andere sehen Trends und die Hindernisse, bei denen das Team um Hilfe bittet, nicht Werte zum Vergleichen. Das erhält das Werkzeug als Lernhilfe, und es hängt von [psychologischer Sicherheit](https://en.wikipedia.org/wiki/Psychological_safety) ab, der gemeinsamen Überzeugung, dass Menschen nicht bestraft werden, wenn sie sich äußern.

**5. Messen Sie die Feedbackschleifen, die zählen.** Messen Sie die Dauer der Schleifen, über die Menschen klagen: lokaler Build, Testsuite, Wartezeit auf Code-Review, Deployment in eine Testumgebung. Berichten Sie Median und 85. Perzentil, denn ein langsamer Schwanz schmerzt mehr, als der Durchschnitt vermuten lässt. Teilen Sie die Zahlen mit dem Team, dem die Pipeline gehört, und machen Sie Verbesserung zu einem regelmäßigen Stück Arbeit (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews).

**6. Schützen Sie Fokus und messen Sie ihn behutsam.** Fragen Sie im Puls nach Fokus und schauen Sie auf die Ursachen von Unterbrechungen: Meeting-Last, Benachrichtigungen, ungeplante Anfragen. Möchte ein Team Kalendermuster ansehen, tun Sie es mit seiner Zustimmung und aggregieren Sie die Ergebnisse. Verfolgen Sie nie die Aktivität oder Anwesenheit Einzelner. Ziel ist, strukturelle Unterbrechungen zu finden und zu beseitigen, etwa ein Meeting, das ein Dokument sein könnte.

**7. Verfolgen Sie Hindernisse bis zur Lösung.** Führen Sie eine sichtbare Liste der Hindernisse, die das Team benannt hat, und messen Sie, wie lange sie bis zur Lösung oder bewussten Zurückstellung brauchen. Eine lange Liste, die nie schrumpft, lehrt Menschen, dass das Benennen von Problemen sinnlos ist. Die Entscheidung, ein Hindernis nicht zu beseitigen, mit einem Grund, zählt als Lösung.

### Die Ergebnisse zum Verbessern nutzen

**8. Handeln Sie auf eine oder zwei Dinge zugleich.** Wählen Sie das Hindernis mit dem höchsten Wert, beseitigen Sie es und sagen Sie es dem Team. Sichtbares Handeln tut für Vertrauen mehr als ein langer Bericht. Widerstehen Sie der Versuchung, viele Initiativen auf einmal zu starten.

**9. Koppeln Sie Kennzahlen über Menschen mit Ergebniskennzahlen.** Schauen Sie, wie Feedbackschleifen und kognitive Last zu Lieferungs- und Stabilitätsergebnissen stehen (siehe Thema 2.8, DORA-Kennzahlen). Behaupten Sie in Ihren eigenen Daten keine Kausalität aus Korrelation. Nutzen Sie die Kopplung, um Fragen zum Erkunden zu finden, etwa ob Teams mit langsameren Reviews auch längere Zykluszeiten haben.

**10. Halten Sie Aktivitätszahlen aus dem Gespräch.** Berichten Sie nicht Commits, Codezeilen oder geschlossene Tickets je Person. Zahlen von Team-Outputs können für den Fluss nützlich sein, aber sie sagen wenig über Gesundheit. Verlangt jemand individuelle Aktivitätskennzahlen, erklären Sie die Forschung und bieten Sie stattdessen Kennzahlen der Bedingungen an.

### Menschen schützen

**11. Setzen Sie Datenschutzregeln, bevor Sie erheben.** Schreiben Sie auf, was erhoben wird, warum, wer es sieht, wie lange es aufbewahrt wird und was damit nie getan wird. Aggregieren Sie auf Teamebene, unterdrücken Sie kleine Gruppen und lassen Sie Vertreter der Beteiligten die Regeln prüfen. Nutzen Sie diese Daten nicht in Leistungsbeurteilungen, Beförderung oder Disziplinarmaßnahmen.

**12. Machen Sie ein nachhaltiges Tempo zum Standard.** Achten Sie auf Zeichen, dass ein Team heiß läuft: eine lange Reihe von Incidents außerhalb der Arbeitszeit, ein Dauerzustand der Dringlichkeit, wachsende Hindernislisten, sinkende Zufriedenheit. Behandeln Sie diese als Systemprobleme, die mit Umfang, Besetzung oder Prioritäten zu beheben sind. Ein gleichbleibendes Tempo, das Menschen halten können, ist ein Entwurfsziel, und es stützt Qualität, Lernen und Bindung (siehe Thema 9.2, Kennzahlen für Zufriedenheit und Wohlbefinden).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Dauer der Feedbackschleife | Langsame Fälle ausschließen; einen schnellen Pfad messen, den die meiste Arbeit nicht nimmt | 85. Perzentil berichten; Start und Ende jeder Schleife im Register definieren |
| Anteil der Fokuszeit | Kalenderzeit blockieren, ohne sich zu fokussieren; aufgeblähten Fokus berichten, um Vorgesetzten zu gefallen | Vom Team besessener Puls; mit Ursachen der Unterbrechung vergleichen; keine Berichte über Einzelne |
| Bewertung der kognitiven Last | Systeme niedrig bewerten, um Prüfung zu vermeiden; leichte Systeme zum Bewerten wählen | Eine feste Liste von Systemen bewerten; mit Onboarding-Zeit und Incident-Mustern vergleichen |
| Lösungszeit von Hindernissen | Hindernisse schließen, ohne sie zu beheben; sich weigern, Hindernisse zu erfassen | Team bestätigt die Lösung; Rate wiedereröffneter Hindernisse |
| Trend des Team-Gesundheitschecks | Vorgesetzte, die auf gute Werte drängen; Teams, die Werte anpassen, um Aufmerksamkeit zu vermeiden | Team besitzt die Ergebnisse; Trends nur mit Zustimmung des Teams geteilt |
| Zufriedenheit mit Werkzeugen und Prozessen | Zufriedene Nutzer befragen; Personal darin schulen, gut zu antworten | Rücklaufquote und Mischung; Kommentare lesen; mit Systemkennzahlen verknüpfen |
| Dimensionsabdeckung | Eine Dimension mit einer Alibi-Kennzahl zählen | Prüfen, dass jede gezählte Kennzahl in einer Entscheidung genutzt wird |

Ein gesunder Befund sind kürzere und stetigere Feedbackschleifen, eine fallende kognitive Last auf Schlüsselsystemen, Teams, die echten Fokus berichten, Hindernisse, die benannt und gelöst werden, Gesundheitschecks, denen das Team vertraut, und keine Nutzung der Daten über Einzelne.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Wahrnehmungsumfragen | Erfassen, was Systeme nicht können; geringe Kosten | Subjektiv; anfällig für Furcht und Müdigkeit |
| Workflow-Kennzahlen | Objektiv; kontinuierlich | Verpassen Gefühle und Ursachen; Risiko der Überwachung |
| Vom Team besessener Gesundheitscheck | Ehrlich und nützlich für das Team | Schwer vergleichbar; schwer skalierbar |
| Standardisierte Umfrage im ganzen Unternehmen | Über Teams vergleichbar | Weniger relevant; zum Ordnen genutzt |
| Aktivitätszahlen | Leicht zu erfassen | Schlechte Stellvertreter; leicht manipuliert |
| Bedingungsorientierte Kennzahlen | Zeigen auf behebbare Ursachen | Brauchen Nachverfolgungsaufwand |
| Häufige Pulse | Zeitnah | Umfragemüdigkeit |
| Jährliche Umfrage | Geringe Last | Langsam; veraltet |

Die Antwort in Worten ist, vom Team besessene Gesundheitschecks und kurze Pulse mit Workflow-Kennzahlen der Schleifen zu kombinieren, über die Menschen klagen, Aktivitätszahlen zu meiden und den Datenschutz zu wahren. Nutzen Sie unternehmensweite Vergleiche sparsam und nie, um Teams zu ordnen.

## Fragen für die Diskussion im Team

**1. Was ist die langsamste Feedbackschleife in unserem Arbeitstag, und wie lange dauert sie tatsächlich?**
Wählen Sie die Schleife, über die Menschen am meisten klagen. Messen Sie sie aus den Systemen und vergleichen Sie mit dem, was Menschen sagen. Die Moderation sollte Überraschungen in beide Richtungen festhalten. Einigen Sie sich auf eine Änderung, die sie verkürzen würde, und wer sie besitzt.

**2. Welches System scheuen wir uns zu ändern, und was macht es schwer?**
Nennen Sie das System. Liegt die Schwierigkeit im Code, in der Dokumentation, in den Werkzeugen oder im Wissen in wenigen Köpfen? Fragen Sie, welche eine Verbesserung die Last am meisten senken würde. Planen Sie, wie man erkennt, ob es wirkte.

**3. Wann hatte jeder von uns zuletzt einen langen Block ungestörter Zeit, und was unterbrach die, die scheiterten?**
Teilen Sie ehrlich und ohne Schuldzuweisung. Listen Sie die Unterbrechungen auf und sortieren Sie sie in strukturelle (Meetings, Benachrichtigungen, ungeplante Anfragen) und zufällige. Wählen Sie eine strukturelle Unterbrechung, die zu verringern ist.

**4. Welches Hindernis haben wir mehr als einmal ohne Ergebnis benannt?**
Schauen Sie auf die Hindernisliste. Fragen Sie bei jedem langjährigen Element, wer es lösen könnte und was ihn blockiert. Hat das Team aufgehört, Hindernisse zu benennen, besprechen Sie warum. Einigen Sie sich auf eines, das mit Belegen zu eskalieren ist.

**5. Was ließe uns zögern, eine ehrliche Antwort im Gesundheitscheck zu geben?**
Besprechen Sie Befürchtungen, wie die Ergebnisse genutzt werden könnten. Die Moderation sollte Bedenken festhalten und Regeln vereinbaren: wer die Daten sieht, was nie damit getan wird. Wird den Regeln nicht vertraut, sagen Sie es und entscheiden Sie, was Vertrauen verdiente.

**6. Welche unserer Kennzahlen könnten steigen, während die Arbeit schlechter wird?**
Listen Sie die Kennzahlen auf und denken Sie sich Wege aus, wie jede verbessert werden könnte, ohne jemandem zu helfen. Weisen Sie jeder eine Leitplanke zu. Entfernen Sie jede Kennzahl, die in keiner Entscheidung genutzt wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams wissen am besten, was sie bremst, und sind die Eigner ihres eigenen Gesundheitschecks. Sie sollten Hindernisse benennen, die Schleifen messen, die sie kontrollieren, und mit dem Team entscheiden, was zuerst zu beheben ist. Sie sollten Druck widerstehen, individuelle Aktivität zu berichten, und auf Kennzahlen der Teamebene bestehen.

### Service- und Betriebsteams

Betriebsteams tragen Bereitschaft, Unterbrechungen und ungeplante Arbeit, die Fokus und Tempo abtragen. Sie sollten strukturelle Last als Systemproblem ansprechen, die Schleifen ihrer eigenen Werkzeuge messen und eine tragbare Rotation halten. Sie profitieren von gemeinsamen Hindernislisten mit Lieferteams, da viele Hindernisse die Grenze überschreiten.

### Führung und Governance

Führungskräfte setzen die Bedingungen und entscheiden, wie Daten genutzt werden. Sie sollten die Korrekturen finanzieren, die Bedingungskennzahlen offenbaren, die Datenschutzregeln schützen und statt Werten zum Vergleichen nach Trends und Hindernissen fragen. Die Governance sollte die Bitte um individuelle Aktivitätskennzahlen als Grund sehen, die Regeln neu zu prüfen, und sichtbare Verbesserungsarbeit erwarten.

### Kunden und Nutzer

Nutzer profitieren von Teams, die ruhig arbeiten und schnell lernen können, denn ihre Probleme werden gut gelöst. Sie bemerken auch, wenn ein Team überfordert ist: langsamere Antworten, wiederholte Fehler, hohe Fluktuation. Ihr Feedback ist ein Beleg von außen für die Teamgesundheit, und sie verdienen Ehrlichkeit darüber, wie Korrekturen priorisiert werden.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Technologiegruppe eines nationalen Versicherers hat 14 Teams, die Policen- und Schadensservices bauen und betreiben. Die Führung bittet um ein Dashboard zur Entwicklerproduktivität. Die erste Anfrage gilt Commits und geschlossenen Tickets je Person. Die Leiterin der Engineering-Wirksamkeit schlägt einen anderen Ansatz vor. Die Zahlen unten sind illustrativ.

Sie beginnt mit Gesprächen in fünf Teams. Drei Hindernisse kommen wiederholt auf: Die Testsuite braucht 70 Minuten, Code-Reviews warten bei Teams, die von zwei Senior-Reviewern abhängen, lange, und niemand fühlt sich in der Lage, den alten Schadensberechnungsservice zu ändern. Sie misst aus den Systemen, was sie kann. Die mediane Build-und-Test-Schleife dauert 58 Minuten bei einem 85. Perzentil von 92. Die mediane Wartezeit auf das erste Review beträgt 9 Arbeitsstunden und das 85. Perzentil 31 Stunden. Sie fügt einen kurzen vierteljährlichen Puls mit den drei DevEx-Fragen hinzu, mit einer Mindestgruppengröße von fünf für die Berichterstattung. Die Bewertung der kognitiven Last für den Schadensberechnungsservice beträgt 4,4 auf einer fünfstufigen Skala, auf der 5 sehr schwer ist, gegenüber 2,6 für das Policenportal. Die von den Teams berichtete Fokuszeit beträgt etwa 3 Stunden am Tag, mit Meetings und ungeplanten Anfragen als Hauptursachen. Jedes Team führt seinen eigenen Gesundheitscheck zu selbstgewählten Dimensionen durch und liest nur den kombinierten Trend.

Die Gruppe vereinbart mit den Teams vier Maßnahmen. Die Testsuite wird aufgeteilt und parallelisiert, und das 85. Perzentil fällt binnen zwei Monaten von 92 auf 41 Minuten. Eine Review-Rotation verteilt die Last über die zwei Senior-Reviewer hinaus, und die Wartezeit im 85. Perzentil fällt auf 14 Stunden. Drei Teams einigen sich auf einen wöchentlichen Block ohne Meetings, und ein Team gestaltet um, wie ungeplante Anfragen es erreichen. Der Schadensberechnungsservice wird zu einem gemeinsamen Lernprojekt, mit Pairing und Dokumentation, und seine Bewertung der kognitiven Last fällt über zwei Quartale auf 3,5. Die berichtete Fokuszeit steigt auf etwa 4 Stunden.

Als ein leitender Manager erneut nach individuellen Commit-Zahlen fragt, erklärt die Leiterin der Engineering-Wirksamkeit die SPACE- und DevEx-Forschung und bietet das Bedingungs-Dashboard an. Die Entscheidung wird festgehalten, mit den Datenschutzregeln, die besagen, dass individuelle Aktivität nie in Beurteilungen genutzt wird. Ein Team bittet, dass seine Gesundheitscheck-Ergebnisse in diesem Quartal nicht für die Führung zusammengefasst werden, und die Bitte wird gewährt. Die Fluktuation in den beteiligten Teams sinkt im folgenden Jahr, und sie vermerkt, dass sie den Zusammenhang nicht beweisen kann und ihn nicht behaupten wird.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Messen Sie Bedingungen wie Feedbackschleifen und Fokuszeit mit dem Team und beseitigen Sie die Hindernisse, die sie offenbaren. Zu beachten ist, dass das Ordnen von Menschen nach den Zahlen die Daten zerstört.

### KI

KI-Assistenten beim Programmieren und Schreiben verändern Feedbackschleifen und kognitive Last, zum Guten oder zum Schlechten. Fragen Sie das Team nach Nutzen und Belastung und koppeln Sie Nutzung mit Nacharbeit und Wohlbefinden. Zu beachten ist, dass pro Person berichtete Nutzungsstatistiken zu Überwachung werden.

### Automatisierung

Automatisieren Sie das Erfassen von Build-, Test- und Review-Zeiten und messen Sie die Toolchain an Langsamkeit und Fehlern. Zu beachten ist, dass schnelle Werkzeuge dennoch eine langsame Organisation verbergen können; kombinieren Sie also Daten mit Teamgesprächen.

### Analytik

Zeigen Sie Trends nach Team mit der Zahl der Antworten und setzen Sie eine Mindestgruppengröße. Die Entscheidung, die dies untermauert, ist, welches Hindernis als Nächstes zu beseitigen ist. Zu beachten ist, dass kleine Teams nicht anonym sein können.

## Branchenperspektive

**Startup.** Jeder kennt jeden, also schlagen Gespräche Umfragen. Messen Sie die wichtigsten Feedbackschleifen, halten Sie Builds schnell und achten Sie auf Zeichen eines nicht tragbaren Tempos, denn wenige Menschen tragen viel. Führen Sie kein großes Umfrageprogramm ein.

**Kleinunternehmen.** Ein kleines Team kann aus ein oder zwei Personen bestehen, die zugleich bauen und unterstützen. Ihr Hauptrisiko sind Unterbrechung und Abhängigkeit von Einzelnen. Führen Sie eine einfache Hindernisliste, sorgen Sie für Vertretung bei Abwesenheit und fragen Sie einander regelmäßig, was im Weg steht. Daten auf Einzelebene identifizieren von Natur aus, verlassen Sie sich also auf Gespräche.

**Großunternehmen.** Größe bringt Vielfalt und die Versuchung zu vergleichen. Stellen Sie ein gemeinsames Werkzeugset bereit (Puls-Fragen, Schleifenmessungen) und lassen Sie Teams ihre Gesundheitschecks besitzen. Aggregieren Sie sorgfältig, teilen Sie Muster über Teams, um Korrekturen zu verbreiten, und halten Sie Ranglisten heraus. Beziehen Sie Betriebsräte oder Arbeitnehmervertretungen ein, wo es sie gibt.

**Behörden und öffentlicher Sektor.** Beschaffung, Sicherheitsregeln und Genehmigungsketten verlängern Feedbackschleifen, und Beschäftigte können starke Schutzrechte gegen Überwachung haben. Messen Sie die Schleifen, beziehen Sie Vertretungen beim Setzen der Datenregeln ein und nutzen Sie die Befunde, um Prozesse zu vereinfachen. Öffentlich Bedienstete, die vom Wert des Dienstes motiviert sind, profitieren von sichtbarer Beseitigung von Hindernissen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Zeit der Teams für Gesundheitschecks und Pulse, ein wenig Instrumentierung von Pipelines und Review-Werkzeugen, ein Analyst oder Coach, der bei der Interpretation der Ergebnisse und der Moderation hilft, und die Engineering-Zeit, Hindernisse zu beseitigen. Die meisten dieser Kosten sind klein gegenüber den Kosten langsamer Schleifen, multipliziert über viele Menschen.

Der Ertrag kommt aus zurückgewonnener Zeit, weniger Nacharbeit, besserer Bindung und schnellerem Lernen. Schätzen Sie ihn aus Ihren eigenen Daten: die Stunden pro Woche, die in der Gruppe durch das Warten auf Builds und Reviews verloren gehen, die Kosten für Einstellung und Einarbeitung als Ersatz für Menschen, die gehen, und die Incident- oder Defektmuster, die mit überlasteten Teams verbunden sind. Seien Sie vorsichtig, Minuten in Geld umzurechnen, und nennen Sie die Annahmen. Vermeiden Sie Behauptungen aus veröffentlichten Studien zu Produktivitätsgewinnen, wenn Sie Methode und Passung nicht zurückverfolgen können. Denken Sie an die Kosten, es falsch zu machen: Ein Programm, das als Überwachung gesehen wird, schädigt Vertrauen und die Qualität jeder späteren Umfrage (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Individuelle Produktivitäts-Dashboards.** Sie messen Aktivität, laden zu Manipulation ein und schädigen Vertrauen. Messen Sie Bedingungen auf Teamebene.
- **Werte des Gesundheitschecks nutzen, um Teams zu vergleichen.** Teams steuern dann den Wert. Lassen Sie Teams ihre Ergebnisse besitzen.
- **Umfragen ohne Handlung.** Menschen hören auf zu antworten. Beheben Sie in jedem Zyklus etwas Sichtbares.
- **Online-Zeit oder Anwesenheit messen.** Es belohnt Sichtbarkeit und bestraft Fokus. Messen Sie Schleifen und Hindernisse.
- **Eine Kennzahl für alles.** Sie verpasst den größten Teil des Bildes. Decken Sie mehrere Dimensionen ab.
- **Den Schwanz ignorieren.** Mediane verbergen die langsamen Schleifen, die schmerzen. Berichten Sie Perzentile.
- **Menschen für Systemprobleme beschuldigen.** Hindernisse sind meist strukturell. Beheben Sie die Struktur.
- **Heißlaufen als Normalfall.** Dauerhafte Dringlichkeit brennt Menschen aus. Behandeln Sie anhaltende Überlast als Planungsversagen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Bedingungen verstehen | Anekdote | Gelegentliche Umfrage | Regelmäßige Gespräche und Pulse zu Feedbackschleifen, Last und Fluss | Wahrnehmungs- und Workflow-Daten kombiniert, mit Trends auf Teamebene | Gemeinsame Sicht der Bedingungen über Teams und Lieferanten; Teams entwerfen Kennzahlen mit |
| Verantwortung und Ethik | Management liest alles | Informelle Sorgfalt | Vom Team besessene Gesundheitschecks; schriftliche Datenschutzregeln | Regeln mit Vertretungen überprüft; keine individuelle Nutzung durchgesetzt | Regeln und Praktiken unabhängig geprüft; Teams kontrollieren das Teilen von Daten |
| Handeln | Beschwerden unbeantwortet | Ad-hoc-Korrekturen | Hindernisliste mit Eignern; ein oder zwei Korrekturen je Zyklus | Korrekturen verfolgt und mit Ergebnissen verknüpft; nachhaltiges Tempo überwacht | Beseitigung von Hindernissen in die Planung eingebaut; Lernen breit geteilt |

## Checkliste

- [ ] Teams haben in eigenen Worten gesagt, was sie bremst.
- [ ] Mindestens eine Wahrnehmungsfrage und eine Systemkennzahl decken jeweils Feedbackschleifen, kognitive Last und Fluss ab.
- [ ] Die Kennzahlen stammen aus mindestens drei SPACE-Dimensionen.
- [ ] Jedes Team besitzt seinen Gesundheitscheck und liest die Ergebnisse zuerst.
- [ ] Dauern von Feedbackschleifen werden als Median und 85. Perzentil berichtet.
- [ ] Eine sichtbare Hindernisliste hat Eigner, und die Lösungszeit wird verfolgt.
- [ ] Ergebnisse werden auf Teamebene mit einer Mindestgruppengröße berichtet.
- [ ] Schriftliche Datenschutzregeln besagen, dass individuelle Daten nicht in Beurteilungen genutzt werden.
- [ ] Aktivitätszahlen werden nicht als Produktivität berichtet.
- [ ] Das Team sieht in jedem Zyklus mindestens eine Korrektur.

## KI-Prompts

**Puls-Fragen für die drei DevEx-Dimensionen entwerfen.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Muster der Hindernisliste analysieren.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Datenschutzregeln für ein Teamgesundheitsprogramm schreiben.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Bedingungen mit Ergebnissen vergleichen.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Kennzahl zu Teamgesundheit oder Entwicklererlebnis zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer personenbezogenen Kennzahl seinen Manipulationsvektor, seine Leitplanke und seine Datenschutzregeln trägt.

## Wichtigste Erkenntnisse

- Messen Sie die Bedingungen, unter denen Menschen arbeiten: Feedbackschleifen, kognitive Last und Fluss.
- Kombinieren Sie, was Menschen sagen, mit dem, was Systeme erfassen, und schauen Sie auf die Abweichungen.
- Lassen Sie Teams ihre Gesundheitschecks besitzen, berichten Sie auf Teamebene und nutzen Sie die Daten nie über Einzelne.
- Vermeiden Sie Aktivitätszahlen als Ersatz für Produktivität.
- Handeln Sie sichtbar auf ein oder zwei Hindernisse zugleich und verfolgen Sie, wie lange Hindernisse bis zur Lösung brauchen.
- Schützen Sie ein Tempo, das das Team dauerhaft halten kann.

## Quellen und weiterführende Literatur

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
