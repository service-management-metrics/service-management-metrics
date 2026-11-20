# Kennzahlen für Pipelines und automatisierte Changes

**Eine Liefer-Pipeline ist zugleich der Weg, auf dem Changes die Nutzer erreichen, und die Quelle des Belegs, dass sie sicher sind. Messen Sie also ihre Geschwindigkeit, ihre Zuverlässigkeit, wie viel der Change-Genehmigung sie abwickelt und ob der Beleg, den sie erzeugt, einen Prüfer überzeugen würde, und lesen Sie all das als Kennzahlen eines Systems, nie der Menschen, die es nutzen.**

## Überblick und Motivation

Eine Pipeline für [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) und [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery) führt einen Change von der Arbeit eines Entwicklers durch automatisierten Build, Test, Sicherheitsprüfungen und Deployment zu einem laufenden Service. Wird einer Pipeline vertraut, kann sie auch die Entscheidungen treffen, die früher bei Routine-Changes ein Change Advisory Board traf. ITIL nennt die Praxis, Change zu steuern, „Change-Befähigung“, und ihr Ziel ist, nützliche Changes sicher und schnell geschehen zu lassen. Eine Pipeline, die Prüfungen ausführt, den Beleg erfasst und risikoarme Changes automatisch genehmigt, ist ein Weg, dieses Ziel zu erreichen.

Die Pipeline ist daher zwei Dinge zugleich. Sie ist ein Produktionssystem mit eigener Verfügbarkeit, Geschwindigkeit und eigenen Fehlern, und sie ist eine Kontrolle mit Beleg darüber, was getestet wurde, wer prüfte und was genehmigt wurde. Beides braucht Messung. Eine schnelle Pipeline, die Prüfungen überspringt, ist ein Risiko. Eine langsame, unzuverlässige Pipeline drängt Menschen, sie zu umgehen, und umgangene Changes entgehen jeder Kontrolle, die die Pipeline bieten sollte.

Dieses Thema ergänzt die Change-Kennzahlen von Teil 4 (siehe Thema 4.3, Kennzahlen für die Change-Befähigung, und Thema 4.4, Change-Fehlschläge und Nacharbeit) und die Release-Kennzahlen (siehe Thema 4.5, Kennzahlen für Releases und Deployments), indem es die Pipeline als System in den Blick nimmt. Es ergänzt die DORA-Kennzahlen (siehe Thema 2.8, DORA-Kennzahlen), indem es schaut, was innerhalb der Pipeline geschieht. Es hängt auch mit den allgemeinen Automatisierungskennzahlen von Thema 10.6 zusammen (siehe Thema 10.6, Kennzahlen für Automatisierung und Orchestrierung).

Hier verwendete Begriffe. Ein **Pipeline-Lauf** ist eine Ausführung der Pipeline für einen Change. Eine **Stufe** ist ein Schritt der Pipeline, etwa Build oder Test. Ein **instabiler Test (Flaky Test)** ist ein Test, der bei demselben Code manchmal besteht und manchmal fehlschlägt. Eine **Umgehung (Bypass)** ist ein Change, der die Produktion erreicht, ohne die Pipeline zu durchlaufen, zum Beispiel durch ein manuelles Notfall-Deployment. **Policy as Code** bedeutet, Regeln wie „kein Deployment ohne bestandenen Sicherheitsscan“ als Software zu schreiben, die die Pipeline durchsetzt. **Beleg** ist der erfasste Nachweis dessen, was ein Change durchlief. Ein **Standard-Change** ist in ITIL eine risikoarme, gut verstandene, vorab genehmigte Art von Change.

## Leitprinzipien

- **Die Pipeline ist ein Service.** Messen Sie ihre Zuverlässigkeit, Geschwindigkeit und Fehler wie bei jedem Produktionssystem und geben Sie ihr einen Eigner.
- **Die Umgehung messen.** Die Zahl der Changes, die die Pipeline vermeiden, zeigt, wie sehr der Pipeline zu trauen ist.
- **Genehmigung nach Risiko automatisieren, mit Beleg.** Genehmigen Sie vorab, was gut verstanden ist, und halten Sie menschliches Review für das, was es nicht ist.
- **Beleg ist ein Produkt.** Was die Pipeline erfasst, sollte die Fragen eines Prüfers ohne Gerangel beantworten.
- **Schnell und sicher werden gemeinsam gemessen.** Geschwindigkeitskennzahlen werden mit Fehlschlägen und Nacharbeit gekoppelt.
- **Systeme beschreiben, nicht Menschen.** Pipeline-Daten darüber, wer einen Change pushte, sind keine Leistungsrangliste.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erfolgsrate der Pipeline | Anteil der Pipeline-Läufe, die ohne einen von der Pipeline oder ihrer Umgebung verursachten Fehler enden | Läufe, die bestehen oder nur an einem echten Code-Defekt scheitern / gestartete Läufe; vom Nutzer abgebrochene Läufe werden ausgeschlossen und berichtet | Prozent | Protokolle der Pipeline-Plattform | Release-Management; Change-Befähigung | Gesundheit der Continuous Integration | Wöchentlich |
| Dauer der Pipeline | Zeit, die ein Change durch die Pipeline braucht | Median und 85. Perzentil von (Zeitpunkt, zu dem die letzte Stufe endet, minus Zeitpunkt, zu dem der Lauf startet) für Läufe, die das Deployment erreichen | Minuten | Protokolle der Pipeline-Plattform | Release-Management | Kurze Feedbackschleifen | Wöchentlich |
| Rate instabiler Tests | Anteil der Testfehlschläge, die bei Wiederholung ohne Codeänderung bestehen | Fehlschläge, die bei Wiederholung bestehen / Testfehlschläge | Prozent | Testergebnisse und Wiederholungsprotokolle | Release-Management | Definition of Done; Testpraxis | Monatlich |
| Anteil automatischer Genehmigung | Anteil der Changes, die von der Pipeline-Richtlinie ohne menschlichen Genehmigungsschritt genehmigt werden | nur durch Richtlinie genehmigte Changes / ausgelieferte Changes | Prozent | Pipeline- und Change-Datensätze | Change-Befähigung | Trunk-basierte Entwicklung mit automatisierten Prüfungen | Monatlich |
| Umgehungsrate | Anteil der Produktions-Changes, die nicht durch die Pipeline gingen | außerhalb der Pipeline vorgenommene Produktions-Changes, gefunden durch Vergleich der Deployment-Datensätze mit Pipeline-Datensätzen / alle Produktions-Changes | Prozent | Deployment-Datensätze, Konfigurationsprüfung und Pipeline-Protokolle | Change-Befähigung; Konfigurationsmanagement | Arbeitsvereinbarungen | Monatlich |
| Vollständigkeit des Belegs | Anteil der per Pipeline ausgelieferten Changes, deren Datensatz den verlangten Beleg zeigt | Changes mit allen verlangten Belegelementen (Tests, Review, Scan, Genehmigung) verknüpft / ausgelieferte Changes | Prozent | Pipeline- und Change-Datensätze | Change-Befähigung; Governance | Definition of Done | Monatlich |
| Fehlschlagsrate der Richtlinien-Gates | Anteil der Läufe, die von einer Richtlinienprüfung gestoppt wurden, aufgeteilt nach echtem Verstoß und Richtlinienfehler | von einem Richtlinien-Gate gestoppte Läufe / gestartete Läufe; Gründe durch Stichproben klassifiziert | Prozent | Pipeline-Protokolle und Gate-Aufzeichnungen | Change-Befähigung; Risikomanagement | Akzeptanzkriterien | Monatlich |

Die Erfolgsrate der Pipeline schließt von einer Person abgebrochene Läufe aus, die gesondert berichtet werden, und zählt einen durch einen instabilen Test oder einen Umgebungsfehler verursachten Fehlschlag als Pipeline-Fehlschlag. Die Umgehungsrate braucht eine unabhängige Aufzeichnung dessen, was in Produktion läuft, und lässt sich daher nicht allein aus der Pipeline berechnen.

## Empfehlungen

### Die Pipeline als Service behandeln

**1. Geben Sie der Pipeline einen Eigner und Ziele.** Ein benanntes Team besitzt die Zuverlässigkeit und Geschwindigkeit der Pipeline, mit Service-Level-Zielen wie dem Anteil der Läufe, die innerhalb einer genannten Zeit enden. Ohne Eigner wächst die Instabilität, bis Menschen aufhören, ihr zu trauen.

**2. Messen Sie die Dauer als Verteilung.** Ein Median verbirgt die langsamen Läufe, auf die Menschen warten. Zeigen Sie Median und 85. Perzentil und zerlegen Sie die Dauer nach Stufen, um das längste Warten zu finden, das oft eine Warteschlange für einen geteilten Runner oder eine manuelle Genehmigung ist.

**3. Verfolgen und beheben Sie instabile Tests.** Ein instabiler Test lehrt Menschen, bis zum Grün zu wiederholen. Zählen Sie instabile Fehlschläge, weisen Sie jeden einem Eigner zu und beheben oder isolieren Sie ihn mit einem Datum. Eine Pipeline, die Menschen aus Gewohnheit wiederholen, erzeugt keinen Beleg.

### Genehmigung sorgfältig automatisieren

**4. Klassifizieren Sie Changes nach Risiko.** Vereinbaren Sie mit den Change-Eignern, welche Arten von Change Standard sind und per Richtlinie genehmigt werden können und welche einen Menschen brauchen. Überprüfen Sie die Klassifizierung regelmäßig anhand von Fehlschlagsdaten (siehe Thema 4.4, Change-Fehlschläge und Nacharbeit).

**5. Schreiben Sie Policy as Code und testen Sie sie.** Regeln, die die Pipeline durchsetzt, sind Code und brauchen Tests und Eigner wie jeder Code. Erfassen Sie, welche Richtlinienversion für jeden Lauf galt.

**6. Halten Sie einen menschlichen Weg für das Ungewöhnliche.** Notfall- und Changes mit hohem Risiko brauchen eine Person, die mit dem Beleg entscheiden kann. Testen Sie, dass der Weg funktioniert, und messen Sie, wie lange er dauert.

### Nützlichen Beleg erzeugen

**7. Entscheiden Sie, welchen Beleg Sie brauchen.** Arbeiten Sie rückwärts von den Fragen, die ein Prüfer oder Incident-Reviewer stellt: was getestet wurde, wer prüfte, was gescannt wurde, wer genehmigte und was ausgeliefert wurde. Lassen Sie die Pipeline genau das erfassen und mit dem Change verknüpfen.

**8. Messen Sie die Vollständigkeit durch Stichproben.** Die Vollständigkeit des Belegs nach der eigenen Zählung der Pipeline kann hoch sein, während der Inhalt leer ist. Prüfen Sie eine Stichprobe von Datensätzen, um zu bestätigen, dass der Beleg echt ist und zu dem passt, was lief.

**9. Halten Sie Beleg manipulationssichtbar.** Speichern Sie Pipeline-Aufzeichnungen dort, wo die Menschen, die ausliefern, sie nicht bearbeiten können, und bewahren Sie sie für den Zeitraum auf, den Ihre Regeln verlangen. Prüfen Sie Aufbewahrungsanforderungen mit Ihrem eigenen Rechtsberater.

### Auf Umgehung und Drift achten

**10. Vergleichen Sie Produktion mit der Pipeline.** Gleichen Sie ab, was in Produktion läuft, mit dem, was die Pipeline auslieferte. Unterschiede sind Umgehungen oder Drift, und jede verdient einen kurzen, schuldfreien Blick darauf, warum die Pipeline vermieden wurde.

**11. Machen Sie die Pipeline zum leichtesten Weg.** Menschen umgehen langsame und instabile Pipelines. Steigt die Umgehung, schauen Sie zuerst auf Geschwindigkeit und Zuverlässigkeit und auf Notfallbedarf, den die Pipeline nicht erfüllt.

**12. Überprüfen Sie Gates auf Wert.** Ein Gate, das nie einen echten Defekt stoppt und jeden Lauf verzögert, ist ein Kandidat für Entfernung oder Umgestaltung. Ein Gate, das viele Läufe wegen Richtlinienfehlern stoppt, braucht eine Korrektur der Richtlinie.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erfolgsrate der Pipeline | Infrastrukturfehler als abgebrochen umklassifizieren; bis zum Grün wiederholen und nur den letzten Lauf zählen | Alle Versuche zählen; Wiederholungen je Change berichten |
| Dauer der Pipeline | Langsame Stufen aus dem gemessenen Fenster herausverlagern; Stufen überspringen | Ende zu Ende vom Commit bis zum Deployment messen; ausgeführte Stufen mit verlangten Stufen vergleichen |
| Rate instabiler Tests | Instabile Tests löschen oder stummschalten; Fehlschläge als bekannt markieren | Trend von Testzahl und Abdeckung; isolierte Tests mit Datum überprüfen |
| Anteil automatischer Genehmigung | Die „Standard“-Klasse erweitern, bis sie riskante Changes einschließt | Change-Fail-Rate für automatisch genehmigte Changes; genehmigte Changes beproben |
| Umgehungsrate | Manuelle Notfall-Deployments als Pipeline-Läufe erfassen; nicht mit Produktion abgleichen | Produktionszustand mit Pipeline-Datensätzen abgleichen; Deployments beproben |
| Vollständigkeit des Belegs | Leeren oder irrelevanten Beleg anhängen; einen generischen Bericht verknüpfen | Belegsinhalt beproben; prüfen, dass er zum Change passt |
| Fehlschlagsrate der Richtlinien-Gates | Richtlinien lockern, um Fehlschläge zu senken; echte Verstöße als Richtlinienfehler klassifizieren | Gestoppte Läufe beproben; Rate entwichener Defekte und Prüfbefunde |

Ein gesunder Befund ist eine Pipeline, die schnell und stabil genug ist, dass Menschen sie für alles nutzen, eine Umgehungsrate nahe null, bei der jede Ausnahme verstanden ist, ein wachsender Anteil automatischer Genehmigungen bei stabiler Change-Fail-Rate und Beleg, der in Stichproben standhält.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Schwere Pipeline-Prüfungen | Fängt Defekte früh; starker Beleg | Langsame Läufe; mehr Instabilität; Druck zur Umgehung |
| Leichte Pipeline | Schnelles Feedback | Schwächerer Beleg; mehr Defekte erreichen Produktion |
| Automatische Genehmigung für Standard-Changes | Beseitigt Warten; konsistente Entscheidungen | Risiko, die Klasse zu erweitern; Richtlinienfehler skalieren |
| Menschliche Genehmigung für alle Changes | Vertraut; sichtbare Verantwortung | Warten; Genehmigungen können zu Formalitäten werden |

Der Schluss in Worten ist, die Pipeline schnell und vertrauenswürdig zu halten, per Richtlinie nur zu genehmigen, was gut verstanden ist, und die Umgehung zu messen. Schwere Prüfungen, die Menschen meiden, schützen nichts.

## Fragen für die Diskussion im Team

**1. Welcher Bruchteil unserer Produktions-Changes geht durch die Pipeline, und woher wissen wir es?**
Bitten Sie um einen Weg, den Produktionszustand mit Pipeline-Datensätzen zu vergleichen. Teams finden oft Notfallkorrekturen, Konfigurationsänderungen und Datenänderungen, die an der Pipeline vorbeigehen. Erwarten Sie defensive Antworten, behandeln Sie also jede Umgehung als Information. Fragen Sie anschließend, was die Pipeline zum leichteren Weg gemacht hätte.

**2. Welche unserer Tests wiederholen wir, bis sie bestehen, und wer besitzt sie?**
Wiederholungsgewohnheiten zeigen, wo Vertrauen erodiert ist. Erstellen Sie eine Liste und weisen Sie Eigner zu. Besprechen Sie, ob jeder zu beheben oder zu entfernen ist. Das Gespräch zeigt oft, dass wenige Tests das meiste Rauschen verursachen.

**3. Welche Changes genehmigen wir heute automatisch, und welche sollten wir?**
Listen Sie die Arten von Change und die Fehlschlagshistorie jeder auf. Entscheiden Sie, welche geringes Risiko und gute Tests haben. Fragen Sie, was Sie dazu brächte, eine Art nicht mehr automatisch zu genehmigen. Einigen Sie sich anschließend auf ein Review-Datum der Klassifizierung.

**4. Wenn ein Prüfer nach dem Deployment vom letzten Dienstag fragte, was könnten wir zeigen?**
Gehen Sie einen echten Change durch und ziehen Sie seinen Beleg. Beachten Sie Lücken und manuelle Schritte. Fragen Sie, ob der Beleg zur Zeit der Handlung erfasst oder später rekonstruiert wurde. Wählen Sie anschließend eine Lücke zum Schließen.

**5. Wo verbringt unsere Pipeline ihre Zeit, und wer wartet?**
Schauen Sie auf die Aufschlüsselung nach Stufen. Das längste Warten ist oft eine Warteschlange oder eine manuelle Genehmigung. Fragen Sie, ob die Wartenden etwas anderes tun könnten und was das Warten an verzögertem Feedback kostet. Wählen Sie eine Verzögerung zum Entfernen.

**6. Welches Gate hat nie etwas Nützliches gestoppt?**
Schauen Sie auf die Stopp-Gründe der Gates im letzten Quartal. Ein Gate mit nur Richtlinienfehlern braucht Korrektur, und ein Gate, das nie etwas stoppt, ist womöglich redundant. Fragen Sie, ob sein Entfernen das Risiko erhöhen würde. Einigen Sie sich auf einen Versuch.

## Vier Perspektiven

### Produkt- und Lieferteams

Sie hängen jeden Tag von der Pipeline ab. Halten Sie Tests zuverlässig, Changes klein und behandeln Sie einen instabilen Test als Defekt im Produkt. Nutzen Sie Pipeline-Daten, um Ihre eigenen Verzögerungen zu finden, und halten Sie sie aus Gesprächen über individuelle Leistung heraus.

### Service- und Betriebsteams

Sie erben, was die Pipeline ausliefert. Bitten Sie um den Beleg, den Sie für einen Incident brauchen, etwa was sich wann änderte, und um schnellen Rollback. Verfolgen Sie Umgehungen und Drift und tragen Sie sie als Gespräch darüber ins Team, warum.

### Führung und Governance

Finanzieren Sie die Pipeline als Produktionsservice, mit Eigner, Kapazität und Zeit, Instabilität zu beheben. Fragen Sie nach Umgehungsrate, Vollständigkeit des Belegs durch Stichproben und der Change-Fail-Rate automatischer Genehmigungen. Widerstehen Sie dem Druck, Deployments als Erfolgsmaß zu zählen.

### Kunden und Nutzer

Sie profitieren, wenn Changes oft und sicher ankommen, und leiden, wenn ein Change etwas kaputt macht. Fragen Sie, wie Changes getestet werden und wie schnell ein schlechter Change rückgängig gemacht wird. Ihre Meldungen von Problemen nach einem Release sind Teil des Feedbacks, das die Pipeline nicht liefern kann.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt eine Pipeline für ihre klinische Terminplanungsanwendung. Die Zahlen in diesem Beispiel sind illustrativ. Ein Change Advisory Board tagt wöchentlich, und Routine-Changes warten im Schnitt vier Tage auf Genehmigung. Das Team schlägt vor, Standard-Changes über die Pipeline zu genehmigen.

Bevor sie beginnen, messen sie. Die Erfolgsrate der Pipeline beträgt 82 Prozent, und eine Stichprobe von Fehlschlägen zeigt, dass etwa ein Drittel instabile Tests sind. Die Dauer im 85. Perzentil beträgt 47 Minuten, mit 20 Minuten Warteschlange für einen geteilten Build-Runner. Der Vergleich der Deployment-Datensätze mit Pipeline-Datensätzen zeigt, dass etwa 12 Prozent der Produktions-Changes die Pipeline umgingen, meist Konfigurationsänderungen und dringende Korrekturen.

Das Team behebt die fünf instabilsten Tests, fügt einen Build-Runner hinzu und schafft einen Weg für Konfigurationsänderungen durch die Pipeline. Nach drei Monaten fällt die Umgehung auf 3 Prozent. Dann definieren sie eine Standard-Change-Klasse kleiner, getesteter, umkehrbarer Changes an der Terminplanungsanwendung, mit Richtlinienprüfungen für Tests, einen Sicherheitsscan und Peer-Review. Der Anteil automatischer Genehmigung erreicht etwa 40 Prozent, und die Durchlaufzeit der Genehmigung für diese Changes fällt von Tagen auf Minuten.

Ein Manipulationsrisiko taucht auf. Ein Manager bittet, den Anteil automatischer Genehmigung zu heben, indem Datenbank-Schemaänderungen in die Standardklasse aufgenommen werden. Das Team prüft die Change-Fail-Rate für Schemaänderungen, die höher ist als bei anderen Changes, und lässt sie bei einem menschlichen Reviewer. Die Vollständigkeit des Belegs beträgt nach der Zählung der Pipeline 98 Prozent, aber eine Stichprobe von 20 Datensätzen zeigt, dass bei vieren ein Testbericht eines anderen Builds angehängt war. Das Team behebt die Verknüpfungsregel. Was schwierig bleibt: Die Umgehung bei Notfallkorrekturen braucht weiterhin einen nachträglichen Datensatz, und die klinische Risikoprüfung für Changes, die die Patientensicherheit berühren, bleibt bei Menschen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kleine, häufige Changes durch eine vertrauenswürdige Pipeline sind der Kern kontinuierlicher Auslieferung, und das eigene Backlog der Pipeline verdient dasselbe regelmäßige Review mit Stakeholdern wie das Produkt. Eine gute Praxis ist, instabile Tests und Umgehungen in einem regelmäßigen Verbesserungsgespräch zu überprüfen. Zu beachten ist, dass das alleinige Feiern der Deployment-Häufigkeit das Aufteilen von Changes belohnt.

### KI

KI kann Code und Tests schreiben, Changes prüfen und Change-Risiko innerhalb der Pipeline bewerten. Markieren Sie KI-gestützte Changes in den Daten und vergleichen Sie ihre Fehlschläge und Nacharbeit mit anderen Changes (siehe Thema 10.2, KI-gestützte Arbeit messen). Entscheidet oder empfiehlt ein KI-Gate, messen Sie seine falschen Genehmigungen und falschen Stopps durch Stichproben und halten Sie bei Changes mit hohem Risiko einen Menschen verantwortlich. Zu beachten ist, dass KI-erzeugte Tests Abdeckungszahlen heben können, ohne Verhalten zu testen, das zählt.

### Automatisierung

Die Pipeline ist die Automatisierung, die Praxis ist also, sie als Produktionsservice mit Protokollen, einem Eigner und einem manuellen Ausweichweg für Notfälle zu behandeln. Automatisieren Sie die Belegerfassung und den Abgleich der Produktion mit Pipeline-Datensätzen. Zu beachten ist, dass automatische Genehmigungen die Wirkung eines Richtlinienfehlers vervielfachen; testen Sie also Richtlinien und halten Sie eine Pausenkontrolle bereit.

### Analytik

Nutzen Sie Pipeline-Ereignisse, um zu zeigen, wo die Zeit hingeht und wo sich Fehlschläge häufen, und verknüpfen Sie Läufe mit Incidents und Nacharbeit. Die Entscheidung, die dies untermauert, ist, wo in Geschwindigkeit, Zuverlässigkeit oder Tests zu investieren ist. Zu beachten ist, dass Pipeline-Daten die Qualität der Tests nicht zeigen; kombinieren Sie sie also mit entwichenen Defekten und zeigen Sie die Zahl der Läufe hinter jeder Rate (siehe Thema 10.8, Kennzahlen für Analytik und Datenqualität).

## Branchenperspektive

**Startup.** Eine einfache Pipeline mit schnellen Tests und automatischem Deploy in die Produktion kann genügen. Messen Sie Dauer und Umgehung und erfassen Sie Beleg von Tests und Review im Repository.

**Kleinunternehmen.** Die Pipeline kann ein gehosteter Service oder der eines Lieferanten sein. Fragen Sie, was sie wo erfasst, und halten Sie einen Weg bereit, zu rekonstruieren, was ausgeliefert wurde. Meiden Sie den Bau von Kontrollen, die Sie nicht pflegen werden.

**Großunternehmen.** Viele Pipelines über Teams brauchen gemeinsame Belegformate und gemeinsame Richtlinien. Halten Sie eine zentrale Sicht auf Umgehung und Vollständigkeit des Belegs, mit Verantwortung der Teams für Korrekturen. Meiden Sie, ein Werkzeug zu erzwingen, wo Teams unterschiedliche Bedürfnisse haben.

**Behörden und öffentlicher Sektor.** Funktionstrennung, Audit-Trails und Aufbewahrungsregeln prägen die Pipeline. Entwerfen Sie den Beleg für die Prüfung und prüfen Sie rechtliche und Beschaffungsanforderungen, auch für automatisierte Entscheidungen (siehe Thema 8.3, Kennzahlen für Compliance und Audit, und Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind die Pipeline-Plattform und Runner, die Arbeit, Tests und Richtlinien zu schreiben und zu pflegen, Zeit, Instabilität zu beheben, und die Kosten der Belegspeicherung. Die Kennzahlen selbst kosten wenig, wenn Pipeline- und Change-Datensätze verknüpft sind.

Der Ertrag sind kürzere Wartezeiten auf Genehmigung, weniger manuelle Schritte, frühere Erkennung von Defekten und Beleg, der bereitsteht, wenn er gebraucht wird. Das zeigt sich als schnellere Lieferung und weniger Aufwand bei der Prüfung, ist aber leicht zu überzeichnen. Messen Sie Ihre eigenen Basislinien, etwa Durchlaufzeit der Genehmigung und Aufwand, Prüfbeleg zusammenzustellen, davor und danach und nennen Sie Annahmen als Spannen (siehe Thema 7.7, Kapitalrendite und Business Case). Auf der Risikoseite stehen die Kosten von Fehlschlägen, die der Pipeline entgehen, und eines Pipeline-Ausfalls, der alle Changes blockiert.

## Anti-Muster und Fallstricke

- **Deployments als Erfolg zählen.** Es belohnt das Aufteilen von Changes. Koppeln Sie mit Fehlschlägen und Nacharbeit.
- **Bis zum Grün wiederholen.** Es verbirgt instabile Tests und schwachen Beleg. Zählen Sie Instabilität und beheben Sie sie.
- **Umgehung ignorieren.** Die Changes, die die Pipeline vermeiden, sind die, die sie nicht schützen kann. Gleichen Sie Produktion mit Pipeline-Datensätzen ab.
- **Die Standardklasse erweitern, um Automatisierung zu heben.** Der Anteil steigt, und die Fehlschlagsrate folgt. Überprüfen Sie die Klasse mit Fehlschlagsdaten.
- **Beleg, der existiert, aber nichts sagt.** Beproben Sie den Inhalt, nicht nur das Vorhandensein.
- **Eine Pipeline ohne Eigner.** Sie verfällt. Benennen Sie ein Team und geben Sie ihm Zeit.
- **Richtlinienfehler als Code-Defekte behandeln.** Menschen lernen, Gates zu ignorieren. Klassifizieren Sie Stopps und beheben Sie die Richtlinie.
- **Kein manueller Weg für Notfälle.** Menschen umgehen. Bieten Sie einen schnellen, geprüften Weg.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Zuverlässigkeit der Pipeline | Ad-hoc-Builds; häufige unerklärte Fehlschläge | Pipeline existiert; Erfolg verfolgt | Eigner, Ziele und Umgang mit instabilen Tests | Dauer und Fehlschläge nach Stufe überprüft | Pipelines teilen Muster und Kapazität über Teams |
| Genehmigung und Richtlinie | Manuelle Genehmigung für alle Changes | Einige Standard-Changes definiert | Policy as Code für Standard-Changes, mit Tests | Genehmigungsklassen mit Fehlschlagsdaten überprüft | Risikobasierte Genehmigung passt sich innerhalb vereinbarter Grenzen automatisch an |
| Beleg und Umgehung | Beleg nachträglich rekonstruiert | Etwas Beleg erfasst | Verlangter Beleg erfasst und verknüpft | Umgehung abgeglichen und Vollständigkeit beprobt | Beleg und Abgleich vollständig automatisiert und geprüft |

## Checkliste

- [ ] Die Pipeline hat einen benannten Eigner und Ziele für Zuverlässigkeit und Geschwindigkeit.
- [ ] Erfolgsrate der Pipeline und Perzentile der Dauer werden nach Stufe berichtet.
- [ ] Instabile Tests werden gezählt, und jeder hat einen Eigner und ein Behebungsdatum.
- [ ] Standard-Change-Klassen sind mit Risikokriterien definiert und mit Fehlschlagsdaten überprüft.
- [ ] Richtlinien sind Code, getestet und versioniert, und die Version wird je Lauf erfasst.
- [ ] Der Produktionszustand wird mit Pipeline-Datensätzen abgeglichen, um Umgehungen zu finden.
- [ ] Verlangter Beleg ist definiert und wird für jeden ausgelieferten Change erfasst.
- [ ] Die Vollständigkeit des Belegs wird durch Stichproben des Inhalts geprüft.
- [ ] Ein geprüfter Notfallweg existiert und ist getestet.
- [ ] Jede Kennzahl hat einen Manipulationsvektor und eine Leitplanke daneben.

## KI-Prompts

**Changes für automatische Genehmigung nach Risiko klassifizieren.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Den Beleg definieren, den eine Pipeline erfassen soll.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Daten instabiler Tests analysieren.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Das Manipulationsrisiko des Pipeline-Dashboards überprüfen.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## KI-Skills

- [Change request](../../../../skills/change-request/SKILL.md): zu verwenden, um zu definieren, was ein Change-Datensatz und sein Beleg enthalten sollten.
- [Release notes](../../../../skills/release-notes/SKILL.md): zu verwenden, um Pipeline-Ausgaben in Notizen für Nutzer und Betrieb zu verwandeln.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kennzahl und ihre gekoppelte Leitplanke abdeckt.

## Wichtigste Erkenntnisse

- Eine Pipeline ist zugleich ein Produktionsservice und eine Kontrolle, messen Sie also ihre Zuverlässigkeit, Geschwindigkeit und den Beleg, den sie erzeugt.
- Messen Sie die Umgehung, indem Sie Produktion mit Pipeline-Datensätzen abgleichen, und machen Sie die Pipeline zum leichtesten Weg.
- Genehmigen Sie automatisch nur gut verstandene Changes, mit getesteter Richtlinie und einem menschlichen Weg für den Rest.
- Zählen Sie instabile Tests und beheben Sie sie, denn Wiederholen bis zum Grün zerstört Vertrauen und Beleg.
- Beproben Sie den Inhalt des Belegs, denn Vollständigkeitszahlen allein lassen sich mit leeren Datensätzen erfüllen.

## Quellen und weiterführende Literatur

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
