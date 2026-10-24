# Kennzahlen für die Servicekontinuität

**Ein Wiederherstellungsplan ist eine Hypothese, bis eine Übung ihn getestet hat. Kontinuitätskennzahlen sollten daher zählen, was tatsächlich wiederhergestellt wurde, wie schnell und wie viele Daten zurückkamen, und nie die Zahl der Pläne im Regal.**

## Überblick und Motivation

Die meisten Incident-Kennzahlen beschreiben den gewöhnlichen schlechten Tag: ein fehlgeschlagenes Deployment, eine gesättigte Datenbank, ein lauter Nachbar. Servicekontinuität beschreibt den seltenen, schweren Tag, an dem eine Region ausfällt, ein Datenspeicher beschädigt wird, ein Lieferant verschwindet oder Ransomware die Landschaft verschlüsselt. [Business-Continuity-Planung](https://en.wikipedia.org/wiki/Business_continuity_planning) ist die Disziplin, eine Organisation darauf vorzubereiten, durch solche Ereignisse auf akzeptablem Niveau weiter zu liefern. In ITIL 4 heißt die Praktik Management der Servicekontinuität und ist die IT-Service-Sicht auf dieses größere Ziel (siehe das entsprechende Thema im begleitenden *Service Management Guide*).

Zwei Begriffe tragen das meiste Gewicht. Das [Recovery Time Objective](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) ist die akzeptable Zeit, einen Service nach einer Störung wiederherzustellen. Das [Recovery Point Objective](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) ist der akzeptable Datenverlust, ausgedrückt als Zeitspanne: Ein RPO von einer Stunde bedeutet, dass der Verlust der letzten Stunde an Schreibvorgängen tolerierbar ist und mehr nicht. Beide stammen aus einer [Business-Impact-Analyse](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), der Methode, zu ermitteln, welche Tätigkeiten am wichtigsten sind, was wovon abhängt und was eine Störung kostet. Die Objectives sind Geschäftsentscheidungen mit einem Preis, denn engere Objectives brauchen mehr Redundanz, mehr Automatisierung und mehr Übungszeit.

Die Schwierigkeit ist, dass ein Objective ein Versprechen über ein künftiges Ereignis ist, das nicht eingetreten ist. Der ehrliche Beleg ist ein Test. Stellte das Team den Service in der letzten Übung innerhalb des RTO wieder her? Erfüllten die wiederhergestellten Daten das RPO? Waren die Schritte im Plan die Schritte, die das Team wirklich ging? Eine Kontinuitätskennzahl ist daher überwiegend eine Messung von Übungen, und die Qualität der Messung hängt davon ab, wie realistisch die Übung war.

Agile und Site-Reliability-Engineering-(SRE-)Teams bringen nützliche Gewohnheiten ein. Ihre Systeme ändern sich wöchentlich, ein einmal geschriebener und abgelegter Plan veraltet also binnen Monaten. Die agile Antwort ist, Wiederherstellung als Code zu halten (zum Beispiel mit [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code)), sie oft zu proben und jede Probe als Quelle von Backlog-Elementen zu behandeln. [Chaos Engineering](https://en.wikipedia.org/wiki/Chaos_engineering) und Game Days wenden dieselbe Idee im Kleinen an: Einen Fehlschlag absichtlich, kontrolliert herbeiführen und beobachten, was geschieht. Die SRE-Sicht beschreibt Googles Buch *Site Reliability Engineering*, und das weitere Feld fasst der Artikel zu [Site Reliability Engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) zusammen.

### Wie sich die Sichten unterscheiden

- **ITIL-Sicht.** Das Management der Servicekontinuität ist eine Praktik, die aus der BIA Wiederherstellungsziele setzt, Pläne entwirft und sie mit Tests beweist. Ihre Ergebnisse sind Pläne, Übungsberichte und erfasste Befunde. Der Standard [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) beschreibt ein Managementsystem für Business Continuity. Prüfen Sie mit Stand Oktober 2026 die aktuelle Ausgabe direkt, wenn ein Kunde oder Regulierer Konformität verlangt.
- **Agile Sicht.** Wiederherstellungsfähigkeit ist eine Produkteigenschaft in der Definition of Done. Eine Story, die einen Datenspeicher hinzufügt, ist nicht fertig, bis sein Wiederherstellungsweg erprobt wurde.
- **SRE-Sicht.** Zuverlässigkeitsarbeit wird budgetiert und gemessen. Failover, Wiederherstellungsübungen und Game Days sind geplante Arbeit mit Eignern, und Befunde gelangen in den Backlog.

Dieses Thema behandelt sieben Kennzahlen: Wiederherstellung gegen Zeit- und Datenziele in Tests, Übungsabdeckung und -aktualität, Wiederherstellungen aus Backups, Schließen von Befunden und Aktualität der Pläne. Echte Ausfälle stehen in den Kennzahlen für Major Incidents (siehe Thema 3.4, Kennzahlen für Major Incidents) und den Verfügbarkeitskennzahlen (siehe Thema 5.3, Verfügbarkeitskennzahlen). Als nutzerseitige Ziele ausgedrückte Objectives stehen im Thema zu Indikatoren und Budgets (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets). Die „Wiederherstellungszeit nach fehlgeschlagenem Deployment“ des DORA-Forschungsprogramms ist eine viel kleinere Uhr (siehe Thema 2.8, DORA-Kennzahlen). Von Tests aufgedeckte Grundursachen gehören zu den Themen Problemmanagement und Lernen (siehe Thema 4.1, Kennzahlen für das Problemmanagement, und Thema 4.2, Kennzahlen für Postmortems und Lernen).

Eine **Stufe (Tier)** ist eine Klasse von Services, gruppiert danach, wie schnell sie zurückkommen müssen. Eine **Tabletop-Übung** ist eine diskussionsbasierte Probe ohne Systemänderungen. Ein **Game Day** ist eine praktische Probe, in der ein Team einen Fehlschlag herbeiführt oder simuliert und die Reaktion beobachtet. Ein **Befund** ist eine erfasste Lücke zwischen dem Plan und dem, was geschah. **Plan-Aktualität** ist, wie gut ein Plan den Service abbildet, wie er heute ist.

## Leitprinzipien

- **Erst testen, dann behaupten.** Ein RTO oder RPO ist nur durch eine tatsächlich durchgeführte und gemessene Wiederherstellung validiert. Berichten Sie das Objective und das zuletzt gezeigte Ergebnis nebeneinander.
- **Realismus messen, nicht nur Erfolg.** Eine in Minuten bestandene Wiederherstellung einer leeren Testdatenbank sagt wenig über eine Wiederherstellung in Produktionsgröße. Erfassen Sie Umfang und Bedingungen jeder Übung neben dem Ergebnis.
- **Die Landschaft in Stufen teilen und Aufwand nach Stufe verteilen.** Kritische Services erhalten häufige, realistische Tests. Services niedriger Stufen erhalten leichtere Prüfungen. Eine einzige Häufigkeitsvorgabe für alles verschwendet Aufwand oder verpasst Risiko.
- **Befunde als Produkt einer Übung behandeln.** Das wertvolle Ergebnis eines Game Days ist eine abgearbeitete Liste von Lücken. Ein Test ohne Befunde ist entweder hervorragend oder zu sanft, und Sie sollten herausfinden, welches.
- **Services und Rotationen beschreiben, nie Einzelpersonen.** Übungsergebnisse beschreiben das System und den Plan. Niemand wird danach geordnet, wie schnell er eine Übung wiederherstellte.
- **Jede Übung als eigene Zeile zeigen.** Es gibt pro Service und Jahr wenige Tests, Durchschnitte führen also in die Irre (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

## Kennzahlendefinitionen

Jede Kennzahl nennt die Uhr oder die Zählung, was ausgeschlossen ist und die Datenquelle. Jede Zeile braucht eine schriftliche Regel, bevor ihr getraut wird. Ein „Tier-1-Service“ meint unten einen Service in der höchsten Wiederherstellungsstufe, die Ihre eigene BIA definiert.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Erreichungsrate des RTO | Anteil der Wiederherstellungsübungen, in denen der Service innerhalb seines genannten RTO wiederhergestellt wurde | Übungen mit Wiederherstellungszeit <= RTO / durchgeführte Übungen. Die Uhr startet beim erklärten Beginn des Übungsfehlschlags (Zeitpunkt der Injektion oder Szenarioerklärung) und stoppt, wenn der Service seine vereinbarte Gesundheitsprüfung für echte oder synthetische Nutzer besteht. Tabletop-Übungen und Übungen ohne gemessene Wiederherstellung sind ausgeschlossen und gesondert gezählt | Prozent, mit der Zahl der Übungen gezeigt | Übungsbericht, Zeitleiste aus dem Monitoring, Serviceregister mit RTO | Management der Servicekontinuität; Verfügbarkeitsmanagement | Ergebnis des Game Days; Zeit bis zur Wiederherstellung in Liefermessgrößen | Je Übung; vierteljährlich aggregiert |
| Erreichungsrate des RPO | Anteil der Wiederherstellungsübungen, in denen der Datenverlust innerhalb des genannten RPO blieb | Übungen mit gemessener Datenverlustspanne <= RPO / Übungen, die Daten wiederherstellen. Die Datenverlustspanne ist die Zeit zwischen dem letzten nach der Wiederherstellung vorhandenen Schreibvorgang und dem Moment des Fehlschlags. Übungen, die keinen Zustand wiederherstellen, sind ausgeschlossen | Prozent, mit der Zahl der Übungen gezeigt | Übungsbericht, Vergleich wiederhergestellter Daten mit Quelle oder Schreibprotokoll | Management der Servicekontinuität; Informationssicherheitsmanagement | Wiederherstellungsübung als Teil der Definition of Done | Je Übung; vierteljährlich aggregiert |
| Abdeckung getesteter Wiederherstellung | Anteil der Tier-1- und Tier-2-Services, die innerhalb ihres vereinbarten Testintervalls einen praktischen Wiederherstellungstest hatten | Services mit einem qualifizierenden Test innerhalb des Intervalls / Services im Umfang. Ein qualifizierender Test ist praktisch (nicht nur Tabletop) und stellt den Service in der Test- oder Produktionsumgebung wieder her. Das Intervall wird je Stufe festgelegt | Prozent, nach Stufe | Serviceregister, Übungskalender und -berichte | Management der Servicekontinuität; Management des Servicekatalogs | Game-Day-Plan | Monatlich |
| Tage seit dem letzten erfolgreichen Wiederherstellungstest | Alter des jüngsten bestandenen Wiederherstellungstests je kritischem Service | Berichtsdatum minus Datum des letzten Tests, der RTO und RPO erfüllte. Ein fehlgeschlagener Test setzt die Uhr nicht zurück. Nie getestete Services werden als „nie“ gezeigt, nicht als null | Tage, je Service, mit dem ältesten hervorgehoben | Übungsberichte, Serviceregister | Management der Servicekontinuität | Game-Day-Plan; Alter von Arbeitselementen | Monatlich |
| Erfolgsrate der Backup-Wiederherstellung | Anteil der versuchten Wiederherstellungen aus Backups, die mit verifizierten, nutzbaren Daten abgeschlossen wurden | Wiederherstellungen, die abgeschlossen wurden und eine Datenprüfung bestanden / versuchte Wiederherstellungen, über automatisierte und manuelle Wiederherstellungstests. Der Erfolg des Backup-Jobs allein ist ausgeschlossen, denn ein gelaufener Job ist keine funktionierende Wiederherstellung | Prozent, nach Datenstufe | Logs des Backup-Systems, Ergebnisse automatisierter Wiederherstellungsprüfung | Management der Servicekontinuität; Infrastruktur- und Plattformmanagement | Wiederherstellungsübung; Betreibbarkeitskriterien in der Definition of Done | Wöchentlich für automatisierte Tests; monatlich im Review |
| Schließungsrate von Übungsbefunden | Anteil der Befunde aus Wiederherstellungsübungen, die innerhalb ihrer vereinbarten Zeit geschlossen wurden, nach Schweregrad aufgeteilt | Befunde, die innerhalb des Ziels geschlossen wurden / im Zeitraum fällig gewordene Befunde. Die Uhr startet, wenn der Befund im Übungsbericht erfasst wird, und stoppt bei verifizierter Korrektur, also einem erneuten Test oder Review, der sie bestätigt. Von einem benannten Eigner als Risiko akzeptierte Befunde werden gesondert gezählt | Prozent, mit der Zahl überfälliger Befunde | Übungsbericht, Issue-Tracker | Management der Servicekontinuität; kontinuierliche Verbesserung | Maßnahmen aus der Retrospektive; Alter von Backlog-Elementen | Monatlich |
| Plan-Aktualität | Anteil der Kontinuitätspläne und Runbooks, die nach der letzten wesentlichen Änderung ihres Services oder innerhalb ihres Review-Intervalls überprüft wurden | Pläne mit einem Review-Datum nach der letzten wesentlichen Änderung und innerhalb des Intervalls / Pläne im Umfang. Wesentliche Änderung heißt ein Change-Datensatz, der als Änderung von Architektur, Datenspeichern, Abhängigkeiten oder Lieferanten gekennzeichnet ist | Prozent, mit dem Alter des ältesten ungeprüften Plans | Planrepository (Versionskontrolle), Change-Datensätze, Serviceregister | Management der Servicekontinuität; Change-Befähigung | Definition of Done enthält die Aktualisierung des Runbooks | Vierteljährlich |

Die RTO-Uhr in einer Übung unterscheidet sich von der Uhr in einem echten Ausfall, die bei der Auswirkung startet (siehe Thema 3.4, Kennzahlen für Major Incidents), vergleichen Sie also Übungen mit Übungen. Eine eng geskriptete Übung misst Probengeschwindigkeit, erfassen Sie also, wie viel Überraschung sie enthielt.

## Empfehlungen

### Objectives setzen, die sich testen lassen

**1. Leiten Sie RTO und RPO aus einer Business-Impact-Analyse ab und schreiben Sie sie neben den Service.** Die BIA fragt das Geschäft, was eine Stunde, ein Tag und eine Woche Ausfall kosten und welche Daten es sich leisten kann zu verlieren. Halten Sie die Antworten im Serviceregister fest, damit jeder Test mit einem genannten Objective verglichen werden kann. Von Ingenieuren allein gewählte Objectives sind tendenziell entweder unbezahlbar oder unabhängig von dem, was Kunden brauchen.

**2. Teilen Sie Services in Stufen und setzen Sie Testintervalle nach Stufe.** Eine kleine Zahl von Stufen, vielleicht drei oder vier, ist leichter zu betreiben als eine andere Regel für jeden Service. Geben Sie der obersten Stufe die häufigsten und realistischsten Tests und der untersten Stufe eine leichte Prüfung wie die periodische Wiederherstellung einer Stichprobe. Schreiben Sie die Intervalle auf und überprüfen Sie sie, wenn sich die BIA ändert.

**3. Prüfen Sie, ob das Objective zur Architektur passt.** Ein RPO von fünf Minuten bei nächtlichem Backup ist ein Widerspruch, den ein Test im schlimmsten Moment aufdecken wird. Vergleichen Sie vor der ersten Übung jedes Objective mit dem Entwurf von Backup, Replikation und Failover und erfassen Sie jede Lücke als Befund.

### So testen, dass etwas ans Licht kommt

**4. Mischen Sie Tabletops, Wiederherstellungsübungen und Game Days.** Eine Tabletop-Übung ist billig und findet Lücken bei Rollen, Kontakten und Entscheidungen. Eine praktische Wiederherstellungsübung findet Lücken bei Verfahren, Berechtigungen und Daten. Ein Game Day, der einen Fehlschlag herbeiführt und die Reaktion beobachtet, findet Lücken bei Monitoring, Runbooks und Koordination. Berichten Sie jeden Typ gesondert, damit eine Reihe leichter Tabletops nicht wie ein Beweis für Wiederherstellung aussieht.

**5. Messen Sie die Wiederherstellung an Daten in Produktionsgröße.** Eine Wiederherstellung, die an einer kleinen Kopie funktioniert, kann am echten Volumen an Durchsatz- oder Speichergrenzen scheitern. Wo Tests im vollen Maßstab zu teuer sind, um sie oft durchzuführen, führen Sie periodisch einen durch und nennen Sie jede Extrapolation. Erfassen Sie die Datengröße mit dem Ergebnis.

**6. Prüfen Sie, dass wiederhergestellte Daten nutzbar sind.** Fügen Sie nach der Wiederherstellung eine automatische Prüfung hinzu, etwa eine Zeilenzahl, eine Prüfsumme oder eine synthetische Transaktion. Zählen Sie eine Wiederherstellung nur dann als erfolgreich, wenn diese Prüfung besteht.

**7. Fügen Sie Überraschung schrittweise hinzu.** Frühe Übungen können angekündigt und gescriptet sein. Spätere sollten Einzelheiten des Fehlschlags zurückhalten und Abhängigkeiten wie abgelaufene Zugangsdaten oder einen unerreichbaren Lieferanten einbeziehen. Erfassen Sie die Höhe der Überraschung, damit Ergebnisse im Kontext gelesen werden können.

### Befunde in Veränderung verwandeln

**8. Protokollieren Sie jeden Befund mit Eigner, Schweregrad und Fälligkeitsdatum.** Ein Game Day erzeugt eine Liste: eine fehlende Berechtigung, ein Runbook-Schritt, der nicht mehr zum Werkzeug passt, ein Monitor, der nie auslöste. Legen Sie jeden in den Backlog des Teams, mit derselben Sichtbarkeit wie Funktionsarbeit. Verfolgen Sie das Alter offener Befunde und den Anteil rechtzeitig geschlossener und bestätigen Sie das Schließen, wo praktikabel, durch einen erneuten Test.

**9. Verknüpfen Sie Befunde mit Problemmanagement und Lernen.** Ein Befund, der über Übungen hinweg wiederkehrt, ist ein Problem im ITIL-Sinn (siehe Thema 4.1, Kennzahlen für das Problemmanagement). Überprüfen Sie jede Übung schuldfrei, wie Sie ein Postmortem überprüfen würden, und verfolgen Sie Maßnahmen bis zum Abschluss (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen).

### Pläne lebendig halten

**10. Halten Sie Pläne und Runbooks in der Versionskontrolle und verknüpfen Sie sie mit Change.** Ändert ein Change-Datensatz Architektur, einen Datenspeicher oder einen Lieferanten, verlangen Sie, dass der zuständige Plan in derselben Arbeit überprüft wird (siehe Thema 4.3, Kennzahlen für die Change-Befähigung). Messen Sie die Plan-Aktualität gegen die letzte wesentliche Änderung und nicht nur gegen den Kalender. Ein vierteljährlich überprüfter Plan, der die Migration des letzten Monats ignoriert, ist nur dem Namen nach aktuell.

**11. Halten Sie die Abhängigkeitskarte ehrlich.** Die Wiederherstellungsreihenfolge hängt von gemeinsamen Services wie Identität, Namensauflösung und Speicherung von Geheimnissen ab. Gleichen Sie die Karte mit Konfigurationsdatensätzen ab und beheben Sie die Lücken, die Übungen aufdecken (siehe Thema 7.4, Kennzahlen für Konfigurations- und CMDB-Qualität).

**12. Beziehen Sie Lieferanten ein und rotieren Sie die Übungspflicht.** Bitten Sie jeden kritischen Lieferanten um seine eigenen Testbelege und vereinbaren Sie, wie die gemeinsamen Schritte geübt werden (siehe Thema 8.4, Kennzahlen für Lieferanten und Verträge). Übungen verbrauchen Zeit, verteilen Sie die Pflicht also über eine Rotation und zählen Sie sie als betriebliche Last (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst).

## Manipulationsvektoren und Leitplanken

Kontinuitätszahlen lassen sich leicht schönen, weil wenige Menschen eine Übung genau ansehen und der echte Test selten stattfindet. Die Tabelle koppelt jede Kennzahl mit einer Art, wie sie manipuliert wird, und der Prüfung, die sie auffängt. Die Paarungen folgen der in Thema 1.2 dargelegten Form (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Erreichungsrate des RTO | Einen kleinen Testdatensatz, ein leichtes Szenario oder ein geprobtes Skript wählen; die Uhr spät starten, nachdem das Team begonnen hat; die Gesundheitsprüfung lockern, damit „wiederhergestellt“ früher eintrifft; ein großzügiges RTO setzen, damit jeder Test besteht | Datengröße, Überraschungsgrad des Szenarios und Definition der Gesundheitsprüfung mit jedem Ergebnis erfassen; das RTO mit der BIA vergleichen; jede Übung als eigene Zeile zeigen, auch Fehlschläge |
| Erreichungsrate des RPO | Verlust nur für die Primärtabelle und nicht für allen Zustand messen; ein Replikat testen, das synchron ist, weil keine Last läuft; das RPO nach einem verfehlten Ergebnis umdefinieren | Datenverlust gegen das Schreibprotokoll über alle Datenspeicher im Umfang prüfen; unter realistischer Schreiblast testen; ein Änderungsprotokoll der Objectives mit Gründen führen |
| Abdeckung getesteter Wiederherstellung | Tabletop-Diskussionen als Tests zählen; einen trivial kleinen Service testen, um den Prozentsatz zu heben; die Liste im Umfang durch Umklassifizieren von Services in eine niedrigere Stufe verkleinern | Praktische Tests für die Tier-1-Zahl verlangen; Abdeckung nach Kritikalität der Services gewichtet berichten; Stufenänderungen gegen die BIA prüfen |
| Tage seit dem letzten erfolgreichen Wiederherstellungstest | Einen leichten Test erneut laufen lassen, um das Alter zurückzusetzen; einen Teiltest als bestanden kennzeichnen; das Datum nach einem Papier-Review zurücksetzen | Den Umfang des letzten bestandenen Tests zeigen; das höchste Alter und die nie getesteten Services zeigen; verlangen, dass RTO und RPO beide erreicht wurden |
| Erfolgsrate der Backup-Wiederherstellung | Den Erfolg des Backup-Jobs als Wiederherstellungserfolg berichten; nur die Backups testen, die als gut bekannt sind; mit einer Prüfung verifizieren, die nicht fehlschlagen kann | Wiederherstellungen zufällig gezogener Backups verfolgen; ein Datenprüfungsergebnis verlangen; die Prüfung selbst bei jedem Audit überprüfen |
| Schließungsrate von Übungsbefunden | Befunde ohne Korrektur schließen; den Schweregrad herabstufen, um die Fälligkeit zu lockern; einen Befund in viele leichte teilen; von vornherein wenige Befunde erfassen | Schließen durch erneuten Test verifizieren; Befunde je Übung neben der Schließungsrate berichten, da eine fallende Zahl sanftere Übungen bedeuten kann; Schweregradänderungen überprüfen |
| Plan-Aktualität | Ein Review-Datum aktualisieren, ohne den Plan zu lesen; Änderungen als nicht wesentlich kennzeichnen; den Plan mit generischem Text füllen, der nie veraltet | Pläne stichprobenartig ziehen und mit jemandem durchgehen, der sie nicht schrieb; die Rate der Kennzeichnung wesentlicher Änderungen mit der Historie der Architekturänderungen vergleichen; Aktualität mit Testergebnissen verknüpfen |

Ein gesunder Befund zeigt eine Handvoll Tests pro Quartal mit ehrlicher Variation: einige beim ersten Versuch bestanden, einige fehlgeschlagen und wiederholt, und die Befunde aus jedem erscheinen im Backlog und werden innerhalb der genannten Zeit geschlossen. Perfekte Ergebnisse Jahr für Jahr sind ein Grund zu fragen, wie schwer die Übungen sind.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Häufige kleine automatisierte Wiederherstellungstests | Billiger, kontinuierlicher Beleg; fängt stillen Backup-Fehlschlag früh | Testet weder Koordination noch Menschen noch Wiederherstellung im vollen Maßstab |
| Jährliche Failover-Übung im vollen Maßstab | Realistisch; übt Menschen, Lieferanten und Abhängigkeiten zusammen | Teuer und selten; nach einer Korrektur schwer zu wiederholen; riskant, wenn in der Produktion durchgeführt |
| Tabletop-Übungen | Niedrige Kosten; findet Lücken bei Rollen und Entscheidungen; gut zum Training | Beweist nicht, dass die Technik funktioniert; leicht durchzuführen, ohne etwas zu lernen |
| Produktions-Game-Days mit herbeigeführtem Fehlschlag | Höchster Realismus; testet Monitoring und Runbooks, wie sie sind | Braucht ausgereifte Sicherungen und Unterstützung der Führung; kann Kunden schaden, wenn nachlässig durchgeführt |
| Gestufte Objectives | Verwendet Aufwand dort, wo das Risiko ist | Stufenzuordnungen können driften und brauchen einen Eigner |

Die praktische Antwort ist ein geschichtetes Programm: billige automatisierte Wiederherstellungsprüfungen die ganze Zeit, praktische Übungen für jeden Tier-1-Service in festem Intervall, eine größere Übung in längerem Zyklus und Tabletops für Entscheidungen und Kommunikation. Nennen Sie die Intervalle, damit der Leser beurteilen kann, wie aktuell der Beleg ist.

## Fragen für die Diskussion im Team

**1. Wann haben wir zuletzt unseren wichtigsten Service wiederhergestellt, und was genau haben wir bewiesen?**
Fragen Sie nach Datum, Datengröße, Szenario und Ergebnis und schreiben Sie sie auf eine Tafel. Die Moderation sollte dem Urteilen widerstehen und sich auf die Lücke zwischen Behauptung und Beleg konzentrieren. Einigen Sie sich zum Schluss auf einen Test, der die größte Lücke schließen würde.

**2. Wer hat unser RTO und RPO gewählt, und würde das Geschäft sie heute noch wählen?**
Verfolgen Sie jedes Objective zurück zu einer Business-Impact-Analyse oder einer Entscheidung. Fragen Sie, ob die Architektur das Objective auf dem Papier erfüllen könnte und ob die Kosten seiner Erfüllung je genannt wurden. Einigen Sie sich, wer die Objectives der obersten Services mit dem Geschäft bestätigt und bis wann.

**3. Was würde eine fehlgeschlagene Übung uns an Ruf kosten, und prägt das, wie hart unsere Übungen sind?**
Diese Frage bringt den Druck ans Licht, der Übungen sanft macht. Fragen Sie, ob ein fehlgeschlagener Test als Versagen des Teams oder als Erfolg der Übung behandelt wird.

**4. Welche Befunde unserer letzten Übung sind noch offen, und warum?**
Lesen Sie die Liste laut vor, mit Alter und Eignern. Fragen Sie bei jedem überfälligen Element, was es blockiert: konkurrierende Arbeit, unklare Verantwortung, Kosten oder der Glaube, das Risiko sei akzeptabel. Ziel ist, dass kein Befund in einem eigenlosen Zustand liegt.

**5. Was nimmt unser Plan an, das nicht mehr stimmt?**
Wählen Sie einen Plan und lesen Sie ihn mit einer Person, die ihn nicht schrieb. Suchen Sie nach eingestellten Werkzeugen, umbenannten Konten und ausgeschiedenen Lieferanten. Fragen Sie, wie der Plan aktualisiert würde, wenn sich der Service ändert, und wer bemerkt, wenn es nicht geschieht. Verknüpfen Sie die Antwort mit dem Change-Prozess.

**6. Welche Abhängigkeit würde alles stoppen, und haben wir je ohne sie getestet?**
Gemeinsame Services wie Identität, Namensauflösung, Geheimnisse und das Paging-System selbst sind häufige Single Points of Failure. Bitten Sie das Team, sie zu benennen und zu beschreiben, wann jede zuletzt absichtlich nicht verfügbar war.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams besitzen den Entwurf, der Wiederherstellung möglich macht, sie begegnen Kontinuität also als Teil der Definition of Done für kritische Services: ein Backup-Pfad, ein Wiederherstellungsverfahren und ein Runbook, das funktioniert. Sie sollten Wiederherstellungsübungen als Teil ihres eigenen Rhythmus durchführen, Wiederherstellungscode beim Service ablegen und eine fehlgeschlagene Übung als Backlog-Element behandeln.

### Service- und Betriebsteams

Betriebsteams führen die meisten Übungen durch und tragen die Last ihrer Vorbereitung. Sie sollten den Übungskalender führen, Zeitleisten erfassen, während die Übung läuft, und Befunde am selben Tag schreiben. Ergebnisse beschreiben den Service und den Plan, und niemand wird danach geordnet, wie schnell eine Einzelperson eine Übung wiederherstellte.

### Führung und Governance

Führungskräfte setzen die Objectives mit dem Geschäft und entscheiden, wie viel Wiederherstellung es wert ist zu kaufen. Sie sollten das zuletzt gezeigte Ergebnis neben jedem Objective, das Alter des Belegs und die offenen Befunde sehen wollen und vermeiden, ein sauberes Blatt zu belohnen. Governance-Gremien sollten einen kleinen, stabilen Satz von Kontinuitätskennzahlen erwarten, verknüpft mit dem Risikoregister und, wo es gilt, mit der regulatorischen Berichterstattung (siehe Thema 8.2, Kennzahlen für Risiko und Kontrollen, und Thema 8.5, Regulatorische und behördliche Berichterstattung).

### Kunden und Nutzer

Kunden sehen Kontinuität selten, bis es darauf ankommt, und beurteilen sie dann ganz am Ergebnis: wie lange sie ohne den Service waren und ob ihre Daten überlebten. Sie profitieren von klaren Aussagen darüber, was versprochen wird, in Begriffen, die sie verstehen, und von ehrlicher Kommunikation, wenn ein Incident den Plan auslöst. Wo Verträge Wiederherstellungszusagen enthalten, teilen Sie Übungsbelege auf Anfrage (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Krankenhauses betreibt ein Patiententerminplanungssystem, ein medizinisches Bildarchiv und einen Mitarbeitenden-Nachrichtendienst. Ein Produktteam von acht Personen pflegt die Terminplanung, und ein Betriebsteam betreibt die Plattform. Alle Zahlen in diesem Beispiel sind illustrativ.

Das Register der Abteilung führt die Terminplanung als Tier 1 mit einem RTO von 2 Stunden und einem RPO von 15 Minuten. Ihr Quartalsbericht zeigt „Erreichungsrate des RTO: 100 Prozent über 4 Übungen“ und „Abdeckung getesteter Wiederherstellung: 100 Prozent“. Ein neuer Leiter des Betriebs liest die Übungsberichte hinter den Zahlen. Drei der vier Übungen waren Tabletops, und die einzige praktische Wiederherstellung nutzte eine Kopie der Datenbank mit etwa einem Zehntel der Produktionsdaten. Seit 14 Monaten hatte niemand ein Backup in eine saubere Umgebung wiederhergestellt.

Das Team beschließt, zu ändern, was gemessen und getestet wird. Es definiert die Abdeckung getesteter Wiederherstellung so um, dass nur praktische Tests zählen, was die Zahl über die drei Tier-1-Services auf 33 Prozent senkt. Es plant eine Wiederherstellung in Produktionsgröße für die Terminplanung, mit automatischer Verifizierung der Zeilenzahlen und einer synthetischen Buchungstransaktion. Der Lauf dauert 3 Stunden 40 Minuten gegen ein RTO von 2 Stunden, und die wiederhergestellten Daten liegen 40 Minuten hinter dem Fehlschlagspunkt gegen ein RPO von 15 Minuten, weil das Log Shipping während einer Migration pausiert und nie wieder aufgenommen worden war. Der Game Day erzeugt 9 Befunde: 2 mit hohem, 5 mit mittlerem und 2 mit niedrigem Schweregrad.

Die im Protokoll festgehaltene Entscheidung ist, die Verfehlung als das wertvollste Ergebnis des Jahres zu behandeln. Das Team eröffnet Arbeit, um das Log Shipping mit einem Alarm auf seine Verzögerung wieder aufzunehmen, die Wiederherstellung zu parallelisieren und ein Datenvolumen auf schnelleren Speicher zu verlagern. Das RTO bleibt bei 2 Stunden, und das Team fügt für die Terminplanung einen dokumentierten manuellen Rückfall hinzu. Die Schließungsrate der Befunde in den ersten 60 Tagen beträgt 7 von 9 rechtzeitig, die anderen zwei werden von benannten Eignern als Risiken akzeptiert.

Das hier aufgefangene Manipulationsrisiko war subtil. Niemand fälschte eine Zahl: eine großzügige Zählung von Tabletops und ein kleiner Testdatensatz machten den Bericht grün. Die wirksamen Leitplanken waren, Datengröße und Übungstyp mit jedem Ergebnis zu erfassen, und die Praxis, die zugrunde liegenden Übungsberichte zu lesen. Im nächsten Bericht zeigt das Team jede Übung als eigene Zeile, den fehlgeschlagenen Lauf eingeschlossen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Proben Sie Wiederherstellung in kleinen, häufigen Übungen mit Stakeholdern und beheben Sie, was sie zeigen. Zu beachten ist, dass geskriptete Übungen, die immer bestehen, falsche Sicherheit geben.

### KI

KI-Services fügen dem Wiederherstellungsplan neue Abhängigkeiten hinzu, etwa Modelle, Vektorspeicher und APIs Dritter. Beziehen Sie sie in die Abdeckung getesteter Wiederherstellung ein und koppeln Sie die Wiederherstellungszeit mit einer Prüfung, dass Antworten nach der Wiederherstellung korrekt sind. Zu beachten ist, dass ein wiederhergestellter KI-Service womöglich eine andere Modellversion fährt oder seine Daten verliert; verifizieren Sie also Verhalten, nicht nur Verfügbarkeit.

### Automatisierung

Automatisieren Sie Backup-Verifizierung und Wiederherstellungstests und messen Sie die Automatisierung an fehlgeschlagenen Wiederherstellungen. Zu beachten ist, dass ein abgeschlossenes Backup kein Backup ist, das sich wiederherstellen lässt; testen Sie also die Wiederherstellung.

### Analytik

Berichten Sie in Tests erreichte Objectives mit den Daten des letzten Tests und die geschlossenen Übungsbefunde. Die Entscheidung, die dies untermauert, ist, welche Wiederherstellung am wenigsten bewiesen ist. Zu beachten ist, dass wenige echte Wiederherstellungen kleine Stichproben bedeuten; zeigen Sie also Anzahlen.

## Branchenperspektive

**Startup.** Es gibt meist eine Produktionsumgebung, ein kleines Team und einen verwalteten Cloud-Anbieter. Die wertvollste Kennzahl ist die einfachste: die Produktionsdatenbank jeden Monat aus dem Backup in eine saubere Umgebung wiederherstellen, die Zeit messen und das Ergebnis verifizieren. Schreiben Sie RTO und RPO auf eine Seite.

**Kleinunternehmen.** IT ist oft ausgelagert oder wird von ein oder zwei Personen auf gehosteten Services betrieben. Fragen Sie den Lieferanten schriftlich, welche Wiederherstellung er zusagt und welche Belege er zeigen kann, und testen Sie einmal im Quartal eine Wiederherstellung Ihrer eigenen Daten. Halten Sie einen einseitigen Plan dort bereit, wo er gelesen werden kann, wenn die Hauptsysteme ausgefallen sind.

**Großunternehmen.** Viele Services, viele Lieferanten und gemeinsame Plattformen machen Stufung und eine Abhängigkeitskarte unverzichtbar. Investieren Sie in ein zentrales Serviceregister mit Objectives, einen Übungskalender, automatisierte Wiederherstellungsverifizierung und konsistente Berichterstattung, damit sich Ergebnisse über Teams vergleichen lassen.

**Behörden und öffentlicher Sektor.** Kontinuitätspflichten können aus Gesetz, Prüfung oder Richtlinie entstehen, und ein öffentlicher Service muss womöglich in Notlagen weiterarbeiten. Testbelege werden oft extern geprüft, bewahren Sie also Übungsberichte, Befunde und Schließungsaufzeichnungen in einer Form auf, die ein Prüfer lesen kann. Beschaffung kann Wiederherstellungsvereinbarungen festschreiben, nehmen Sie also Übungsrechte und Belege in Verträge auf (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Gründe zu investieren sind die Kosten eines schweren Ausfalls, der länger dauert, als das Geschäft verkraftet, der Verlust von Daten, die sich nicht neu erzeugen lassen, und die Pflichten gegenüber Kunden, Regulierern und Versicherern, die Belege für Vorbereitung verlangen. Kontinuitätsarbeit ist Versicherung, der Ertrag ist also der vermiedene Verlust und das Vertrauen der Entscheider, und er lässt sich schwer als Zahl ausdrücken, ohne eine zu erfinden. Beschreiben Sie ihn über Muster, die Sie beobachten können: die Lücke zwischen genannter und gezeigter Wiederherstellungszeit, die Zahl schwerer Befunde, die in Übungen statt in echten Ereignissen gefunden wurden, und die Zeit, eine Anfrage eines Kunden oder Prüfers nach Belegen zu beantworten.

Die Kosten kommen in drei Gruppen: die Redundanz und Werkzeuge, die die Objectives verlangen, die Zeit der Menschen, Übungen zu planen, durchzuführen und zu überprüfen, und der Aufwand, Pläne und Abhängigkeitskarten aktuell zu halten.

Die Gesamtbetriebskosten werden von Menschen und den engeren Stufen dominiert. Der Wechsel von einem RTO von 24 Stunden auf 2 Stunden ändert den Entwurf und die Rechnung, machen Sie diese Abwägung also mit dem Geschäft ausdrücklich. Kleine, häufige, automatisierte Tests kosten tendenziell weniger als ein großes Jahresereignis, weil Defekte auftauchen, solange sie billig zu beheben sind.

## Anti-Muster und Fallstricke

- **Der Plan im Regal.** Ein Dokument zählt als Vorbereitung, und niemand hat es ausprobiert. Berichten Sie stattdessen Datum und Ergebnis des letzten praktischen Tests neben jedem Objective.
- **Backup-Erfolg als Wiederherstellungserfolg.** Jobs melden Grün, während sich die Daten nicht wiederherstellen lassen. Testen Sie stattdessen regelmäßig Wiederherstellungen und verifizieren Sie die Daten, bevor Sie einen Erfolg zählen.
- **Geprobtes Theater.** Die Übung ist gescriptet und wird von den Autoren des Plans durchgeführt. Fügen Sie stattdessen schrittweise Überraschung hinzu.
- **Ein Ziel für alles.** Jeder Service hat ein RTO von vier Stunden, weil die Vorlage es sagte. Teilen Sie stattdessen Services anhand einer Business-Impact-Analyse in Stufen und setzen Sie passende Objectives.
- **Befunde, die nie schließen.** Der Übungsbericht listet Lücken, und der Backlog sieht sie nie. Geben Sie stattdessen jedem Befund einen Eigner und ein Fälligkeitsdatum und verifizieren Sie das Schließen durch erneuten Test.
- **Den fehlgeschlagenen Test bestrafen.** Ein Team, dem ein verfehltes RTO vorgeworfen wird, hört auf, harte Tests durchzuführen. Vereinbaren Sie stattdessen vorab, dass eine fehlgeschlagene Übung mit guten Befunden ein gutes Ergebnis ist, und überprüfen Sie sie ohne Schuldzuweisung.
- **Veraltete Pläne nach schnellem Change.** Der Kalender treibt das Review, und Architekturänderungen rutschen durch. Verknüpfen Sie stattdessen das Plan-Review mit Datensätzen wesentlicher Änderungen und messen Sie die Plan-Aktualität daran.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Objectives und Stufen | RTO und RPO nicht aufgeschrieben oder aus einer Vorlage kopiert | Objectives für einige Schlüsselservices aufgeschrieben | Stufen und Objectives stammen aus einer Business-Impact-Analyse und stehen im Serviceregister | Objectives gegen gezeigte Ergebnisse und Architektur überprüft | Objectives gemeinsam mit dem Geschäft und Lieferanten vereinbart und angepasst, wenn sich Services ändern |
| Testen und Belege | Wiederherstellung nie getestet oder einmal nach einem Incident | Ad-hoc-Wiederherstellungstests einiger Teams; Ergebnisse in persönlichen Notizen | Gestufte Testintervalle mit erfasstem Umfang, Zeitleiste und Ergebnis | Ergebnisse im Trend, Tabletops, Übungen und Game Days gesondert berichtet | Team- und lieferantenübergreifende Übungen mit Überraschung, aus Risiko geplant |
| Befunde und Lernen | Lücken informell bemerkt | Befunde nach einigen Übungen aufgelistet | Jeder Befund hat Eigner, Schweregrad und Fälligkeitsdatum | Schließungsrate und Alter überprüft, mit erneutem Test als Bestätigung | Befunde speisen gemeinsame Plattformen, Lieferantenverträge und Entwurfsstandards |
| Plan-Aktualität | Pläne einmal geschrieben | Pläne nach Incidents aktualisiert | Pläne in der Versionskontrolle mit Review-Intervall | Review an wesentliche Änderungen gebunden und gemessen | Pläne und Runbooks als Code getestet und, wo möglich, aus der Servicedefinition erzeugt |

## Checkliste

- [ ] Jeder Tier-1-Service hat ein schriftliches RTO und RPO, das aus einer Business-Impact-Analyse stammt.
- [ ] Das Serviceregister zeigt Stufe, Objectives und Testintervall jedes Services.
- [ ] Die Uhren von RTO und RPO, die Gesundheitsprüfung und die Ausschlüsse sind aufgeschrieben (siehe Thema 1.5, Datenquellen und Instrumentierung).
- [ ] Praktische Wiederherstellungstests, Tabletops und Game Days werden als getrennte Typen berichtet.
- [ ] Jeder Wiederherstellungstest erfasst Datengröße, Szenario, Überraschungsgrad und die gemessene Wiederherstellungszeit und den Datenverlust.
- [ ] Wiederherstellungen aus Backups werden automatisch getestet, und eine Datenprüfung entscheidet über den Erfolg.
- [ ] Jeder Übungsbefund hat einen Eigner, einen Schweregrad, ein Fälligkeitsdatum und einen Platz im Backlog.
- [ ] Das Plan-Review ist an Datensätze wesentlicher Änderungen gebunden, und der älteste ungeprüfte Plan ist sichtbar.
- [ ] Die Abhängigkeitskarte enthält gemeinsame Services, und mindestens ein Szenario entfernt eine davon.
- [ ] Jede Kennzahl in diesem Thema hat im Kennzahlenregister eine benannte Leitplanke und einen Eigner (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).
- [ ] Die Übungspflicht rotiert, und die dafür nötige Zeit wird als betriebliche Last gezählt.

## KI-Prompts

**Einen Wiederherstellungstest und die zugehörigen Kennzahlen entwerfen.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Übungsberichte auf schmeichelnde Belege prüfen.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Game-Day-Notizen in Befunde und Backlog-Elemente verwandeln.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Einen Plan auf Aktualität gegenüber jüngerem Change prüfen.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um das Thema zu finden, das eine Kontinuitäts-, Wiederherstellungs- oder Übungskennzahl definiert, und die Leitplanke, die danebengehört.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine bearbeitete Kontinuitätskennzahl ihre Uhren, Ausschlüsse und ihren Manipulationsvektor nennt.

## Wichtigste Erkenntnisse

- Ein Wiederherstellungsziel ist ein Versprechen, und nur eine gemessene, realistische Übung zeigt, ob es sich halten lässt.
- Berichten Sie das zuletzt gezeigte Ergebnis und sein Alter neben jedem RTO und RPO und zeigen Sie jede Übung als eigene Zeile.
- Testen Sie Wiederherstellungen, nicht Backups: Eine Wiederherstellung zählt nur, wenn die Daten als nutzbar verifiziert wurden.
- Das Produkt einer Übung ist eine abgearbeitete Liste von Befunden, verfolgen Sie also ihr Alter und bestätigen Sie das Schließen durch einen erneuten Test.
- Halten Sie Pläne in der Versionskontrolle und binden Sie ihr Review an wesentliche Änderungen, nicht nur an den Kalender.
- Messen Sie Services und Pläne, nie Menschen, und machen Sie eine fehlgeschlagene Übung mit guten Befunden zu einem sicheren und geachteten Ergebnis.

## Quellen und weiterführende Literatur

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
