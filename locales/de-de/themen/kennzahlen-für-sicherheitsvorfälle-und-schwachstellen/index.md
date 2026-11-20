# Kennzahlen für Sicherheitsvorfälle und Schwachstellen

**Sicherheit ist Teil der kontinuierlichen Auslieferung und des Betriebs eines Services. Messen Sie also, wie lange Menschen exponiert bleiben, wie schnell Sie eindämmen, was schiefgeht, und wie bereit Kollegen sind, die Hand zu heben, und machen Sie einen Fehler nie zum Grund für Schuldzuweisung.**

## Überblick und Motivation

Jeder Service trägt Schwächen, und manche davon werden gegen ihn genutzt. Eine [Schwachstelle](https://en.wikipedia.org/wiki/Vulnerability_(computing)) ist eine Schwäche in Software, Hardware, Konfiguration oder Prozess, die ausgenutzt werden kann, um Vertraulichkeit, Integrität oder Verfügbarkeit eines Systems zu schädigen. Ein Sicherheitsvorfall ist ein Ereignis, bei dem dieser Schaden eintritt oder glaubhaft droht. Kennzahlen in diesem Bereich versuchen, zwei Fragen zu beantworten. Wie exponiert sind wir, und wie schnell finden, beheben und erholen wir uns von Problemen?

Die agile und DevOps-Tradition behandelt Sicherheit als Eigenschaft kontinuierlicher Auslieferung, nicht als Gate an deren Ende. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) erweitert die DevOps-Idee, indem es Sicherheitsprüfungen in die Pipeline einbaut und die Verantwortung zwischen Entwicklung, Sicherheit und Betrieb teilt. ITIL steuert über die Praktik des Informationssicherheitsmanagements Richtlinie, risikobasiertes Denken und die Verbindung zu Incident-, Change- und Asset-Management bei. Beide treffen sich in der täglichen Arbeit: Abhängigkeits-Updates kommen als gewöhnliche Changes, Schwachstellenbefunde werden zu Backlog-Elementen mit Eignern, und Incidents werden mit denselben schuldfreien Reviews behandelt wie jeder andere (siehe Thema 4.2, Kennzahlen für Postmortems und Lernen).

Sicherheitskennzahlen sind besonderen Verzerrungen ausgesetzt.

- **Befunde zu zählen belohnt Wegschauen.** Ein Team, das weniger scannt, findet weniger. Eine rohe Zahl von Schwachstellen kann fallen, weil ein Scanner den Zugriff verlor, nicht weil sich etwas verbesserte.
- **Schweregrade sind Eingaben, keine Wahrheiten.** Das [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) gibt einer Schwachstelle in der Abstraktion einen Schweregrad, und Register wie [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) geben ihnen Kennungen. Ob eine Schwachstelle für Sie zählt, hängt davon ab, ob sie in Ihrer Umgebung erreichbar ist, ob ein Exploit im Einsatz ist und wie wertvoll das betroffene Asset ist. Ein roher Schweregrad allein schickt Aufwand an die falschen Orte.
- **Schuldzuweisung unterdrückt Meldungen.** Werden Menschen bestraft, weil sie auf einen Link geklickt oder einen von ihnen verursachten Incident gemeldet haben, hören Meldungen auf, und die Exposition wächst unbemerkt. Psychologische Sicherheit ist eine Sicherheitskontrolle.
- **Zeitkennzahlen verbergen den Schwanz.** Eine mediane Patch-Zeit kann gesund aussehen, während eine Handvoll kritischer Systeme monatelang exponiert sitzt.

Dieses Thema gibt die wichtigsten Kennzahlen, mit ihren Definitionen, Manipulationsvektoren und Leitplanken. Es baut auf den Asset- und Konfigurationsdatensätzen des vorigen Teils auf, denn Sie können nicht patchen oder scannen, was Sie nicht finden können (siehe Thema 7.1, Kennzahlen für das IT-Asset-Management, und Thema 7.4, Kennzahlen für Konfigurations- und CMDB-Qualität). Ein Vorbehalt: Dies ist ein Messleitfaden, kein Sicherheitshandbuch. Wählen Sie Kontrollen mit qualifizierten Sicherheitsfachleuten und folgen Sie den Standards und rechtlichen Pflichten, die für Sie gelten, etwa ISO/IEC 27001 und den Leitlinien nationaler Behörden.

Die Leitplanke aus [Goodharts Gesetz](https://en.wikipedia.org/wiki/Goodhart%27s_law) gilt bei Sicherheit scharf. Wird eine Kennzahl zum Ziel, stufen Menschen Befunde um, schließen Assets aus Scans aus und schließen Tickets, ohne die Ursache zu beheben (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Leitprinzipien

- **Expositionszeit ebenso messen wie Anzahlen.** Wie lange eine Schwäche offen bleibt, zählt mehr als wie viele gefunden werden.
- **Nach Kontext priorisieren.** Kombinieren Sie Schweregrad, Ausnutzbarkeit, Erreichbarkeit und Asset-Wert.
- **Zuerst die Abdeckung prüfen.** Ein sauberer Bericht eines Scans, der die Hälfte der Landschaft verpasste, ist falsche Beruhigung.
- **Sicherheit in die Pipeline einbauen.** Machen Sie sichere Entscheidungen zum leichten Standard und geben Sie schnelles Feedback.
- **Über Disziplinen hinweg zusammenarbeiten.** Sicherheit, Entwicklung und Betrieb besitzen Ergebnisse gemeinsam.
- **Melden sicher machen.** Schuldfreier Umgang mit Fehlern hält die Signale fließend.
- **Daten zu menschlichem Verhalten aggregieren.** Berichten Sie Gruppenmuster und nennen oder ordnen Sie nie Einzelpersonen.

## Kennzahlendefinitionen

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Expositionsfenster | Zeit, die eine bekannte Schwachstelle auf Assets im Umfang offen bleibt, nach Prioritätsband | Median und 85. Perzentil der Tage vom Datum, an dem bekannt war, dass sie für das Asset gilt, bis zum Datum, an dem eine Korrektur oder akzeptierte Minderung verifiziert ist | Tage | Schwachstellen-Scanner, Ticketsystem, Change-Datensätze | Informationssicherheitsmanagement; Problemmanagement | Zeit, einen Defekt im Backlog zu beheben | Wöchentlich |
| Patch-Compliance | Anteil der Assets im Umfang, die das Patch-Fenster der Richtlinie für ihre Klasse einhalten | innerhalb des Richtlinienfensters gepatchte Assets / Assets im Umfang, die im Zeitraum einen Patch brauchten | Prozent | Endpoint- und Server-Management-Werkzeuge, Asset-Register | Informationssicherheitsmanagement; Release- und Deployment-Management | Abhängigkeiten in der Pipeline aktuell gehalten | Wöchentlich |
| Überfällige kritische Befunde | Anzahl und Alter kritischer Befunde jenseits ihrer Frist laut Richtlinie | Zahl kritischer Befunde jenseits der Frist; Alter des ältesten | Anzahl; Tage | Schwachstellenmanagementsystem | Informationssicherheitsmanagement; Risikomanagement | Sicherheitsdefekte jenseits der vereinbarten Grenze | Wöchentlich |
| Scan-Abdeckung | Anteil der Assets im Umfang, die innerhalb des erforderlichen Intervalls bewertet wurden | im letzten Intervall erfolgreich gescannte Assets / Assets im Umfang | Prozent | Scanner-Berichte, mit dem Asset-Register verbunden | Informationssicherheitsmanagement; IT-Asset-Management | Pipeline-Prüfungen bei jedem Build | Wöchentlich |
| Zeit bis zur Eindämmung | Zeit von der Erkennung eines bestätigten Sicherheitsvorfalls bis zur Eindämmung | Median und 85. Perzentil der Stunden von der Erkennung bis zur Eindämmung | Stunden | Incident-Datensätze | Incident-Management; Informationssicherheitsmanagement | Zeit, den Service nach einem Fehlschlag wiederherzustellen | Je Incident, monatlich überprüft |
| Alter von Risikoausnahmen | Alter akzeptierter Risikoausnahmen und Anteil jenseits ihres Review-Datums | Tage seit Genehmigung; Ausnahmen jenseits des Review-Datums / offene Ausnahmen | Tage; Prozent | Ausnahmeregister | Risikomanagement; Informationssicherheitsmanagement | Review technischer Schulden | Monatlich |
| Meldequote bei Sicherheit | Anteil der von Mitarbeitenden gemeldeten verdächtigen Ereignisse relativ zu bestätigten Sicherheitsereignissen, als Indikator der Meldekultur | Meldungen von Mitarbeitenden im Zeitraum / im Zeitraum bestätigte verdächtige Ereignisse, mit Trend auf Gruppenebene | Verhältnis | Sicherheitspostfach, Incident-Datensätze | Informationssicherheitsmanagement; Incident-Management | Hindernisse offen ansprechen | Monatlich |

Nennen Sie die Prioritätsbänder und Richtlinienfenster im Register. Das Expositionsfenster startet, wenn bekannt ist, dass die Schwachstelle für das Asset gilt, was der spätere Zeitpunkt aus Offenlegung und dem Moment ist, in dem bekannt ist, dass das Asset die betroffene Komponente betreibt, und es stoppt bei verifizierter Behebung oder einer dokumentierten, befristeten Minderung. Die Zeit bis zur Eindämmung startet bei der Erkennung, nicht beim ersten Alarm, den niemand las. Schließen Sie Testbefunde und Fehlalarme erst nach Review aus. Die Meldequote bei Sicherheit beschreibt Gruppen und Trends, nie Einzelpersonen.

## Empfehlungen

### Die eigene Landschaft und Exposition kennen

**1. Beginnen Sie bei den Asset- und Abhängigkeitsdatensätzen.** Scans, Patchen und Verantwortung hängen davon ab zu wissen, was existiert. Verknüpfen Sie jeden Befund mit einem Asset, einem Eigner und einem Service und messen Sie die Scan-Abdeckung gegen das Register. Wo die Abdeckung niedrig ist, beheben Sie das, bevor Sie die Befunde lesen. Ein ungescanntes Asset ist ein Unbekanntes, was schlimmer ist als eine bekannte Schwäche.

**2. Verringern Sie zuerst die [Angriffsfläche](https://en.wikipedia.org/wiki/Attack_surface).** Entfernen Sie, was nicht gebraucht wird: ungenutzte Services, offene Ports, alte Konten, vergessene Umgebungen. Alles, was Sie ausmustern, müssen Sie nicht patchen. Verfolgen Sie die Zahl internetseitiger Services und ruhender Konten als einfache Indikatoren und überprüfen Sie sie mit Eignern.

**3. Beziehen Sie Ihre Software-Lieferkette ein.** Moderne Services hängen von vielen Komponenten ab. Die [Software-Lieferkette](https://en.wikipedia.org/wiki/Software_supply_chain) umfasst Bibliotheken, Build-Werkzeuge, Container-Images und die Lieferanten dahinter. Nutzen Sie die zuvor beschriebenen Software-Stücklisten, um zu finden, wo eine verwundbare Komponente genutzt wird (siehe Thema 7.2, Kennzahlen für Software-Assets und Lizenzen), und nehmen Sie Befunde zu Abhängigkeiten in dieselben Kennzahlen auf wie Befunde zur Infrastruktur.

### Priorisieren und beheben

**4. Ordnen Sie nach Kontext, nicht allein nach Schweregrad.** Kombinieren Sie den CVSS-Schweregrad damit, ob bekannt ist, dass ein Exploit im Einsatz ist, ob die verwundbare Komponente erreichbar ist und wie wichtig das Asset ist. Öffentliche Listen bekanntermaßen ausgenutzter Schwachstellen helfen beim ersten Faktor. Schreiben Sie die Rangregeln auf, überprüfen Sie sie und erfassen Sie den Grund, wenn ein Element mit hohem Schweregrad depriorisiert wird.

**5. Setzen Sie Richtlinienfenster nach Band und berichten Sie dagegen.** Vereinbaren Sie für jedes Prioritätsband eine Zielzeit zur Behebung oder Minderung. Berichten Sie den Anteil innerhalb des Fensters, Median und 85. Perzentil der Exposition und das älteste offene Element. Fenster sind Ziele für ein Gespräch, und die ältesten Elemente verdienen Aufmerksamkeit, weil sie zeigen, wo der Prozess versagt (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

**6. Behandeln Sie Patchen als gewöhnlichen, häufigen Change.** Der sicherste Patch-Prozess ist einer, der oft läuft und langweilig ist. Kleine, häufige Updates sind leichter zu testen und rückgängig zu machen als große seltene, und automatisierte Pipelines können sie kontinuierlich anwenden. Nutzen Sie den Ansatz der Change-Befähigung für risikobasierte Genehmigung und halten Sie einen Notfallweg für dringende Korrekturen vor (siehe Thema 4.3, Kennzahlen für die Change-Befähigung).

**7. Machen Sie Ausnahmen sichtbar und kurzlebig.** Manchmal ist eine Korrektur nicht möglich. Erfassen Sie eine Ausnahme mit Grund, einer kompensierenden Kontrolle, einem Eigner und einem Review-Datum und berichten Sie das Alter der Ausnahmen. Ausnahmen ohne Review-Datum werden dauerhaft, und dauerhafte Ausnahmen werden zum echten Risikoregister.

### Reagieren und lernen

**8. Üben Sie die Incident-Reaktion.** Das [Management von Computer-Sicherheitsvorfällen](https://en.wikipedia.org/wiki/Computer_security_incident_management) umfasst Vorbereitung, Erkennung, Eindämmung, Beseitigung, Wiederherstellung und gelernte Lehren. Proben Sie mit Übungen, erfassen Sie die Zeit bis zur Eindämmung ab der Erkennung und überprüfen Sie jeden bedeutenden Incident schuldfrei. Die Struktur der Behandlung von Sicherheitsvorfällen ähnelt der von Major Incidents (siehe Thema 3.4, Kennzahlen für Major Incidents).

**9. Messen Sie Eindämmung, nicht nur Erkennung.** Erkennungswerkzeuge erzeugen Alarme, und der Wert liegt in dem, was als Nächstes geschieht. Verfolgen Sie, wie lange bestätigte Incidents bis zur Eindämmung und Wiederherstellung brauchen und welcher Anteil vom eigenen Monitoring gefunden und welcher von Außenstehenden gemeldet wurde. Ein steigender Anteil intern erkannter Incidents ist ein Zeichen besserer Sicht.

**10. Lernen Sie aus Beinahe-Vorfällen.** Eine Phishing-Mail, die gemeldet und blockiert wurde, oder eine Schwachstelle, die ein Kollege vor einem Angreifer fand, ist eine kostenlose Lehre. Erfassen und überprüfen Sie diese wie einen Incident und danken Sie der Person, die gemeldet hat. Die Meldequote bei Sicherheit ist ein Gesundheitsindikator dieser Kultur, und sie sollte mit Vertrauen steigen.

### Kultur und Pipeline aufbauen

**11. Legen Sie Prüfungen dorthin, wo Entwickler arbeiten.** Führen Sie Abhängigkeits- und statische Analyse im Build aus, geben Sie Feedback im Pull Request und lassen Sie Builds nur bei Problemen scheitern, die das Team als Blocker vereinbart. Schnelles, relevantes Feedback wird behoben. Eine Flut geringwertiger Befunde wird ignoriert. Verfolgen Sie die Behebungszeit für Pipeline-Befunde und stimmen Sie die Regeln mit den Teams ab (siehe Thema 2.7, Kennzahlen für Pull Requests und Code-Reviews).

**12. Schulen und testen Sie ohne zu beschämen.** Sensibilisierungsübungen wie simuliertes Phishing können Fähigkeiten aufbauen, und sie können auch Vertrauen beschädigen, wenn Ergebnisse genutzt werden, um Einzelne zu benennen oder zu disziplinieren. Berichten Sie nur aggregierte Ergebnisse, konzentrieren Sie sich darauf, wie viele verdächtige Nachrichten melden, und erklären Sie den Zweck. Fühlt sich das Personal durch eine Übung hereingelegt, ändern Sie sie.

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Expositionsfenster | Befunde ohne Verifizierung schließen; das Startdatum ändern; den Schweregrad umklassifizieren | Verifizierungsschritt durch jemanden außerhalb des Behebungsteams; Regel zum Startdatum im Register; Änderungsprotokoll des Schweregrads |
| Patch-Compliance | Schwer zu patchende Assets aus dem Umfang ausschließen; einen Patch als angewandt zählen, wenn das System nicht neu gestartet wurde | Umfangsänderungen protokolliert; installierte Version am Asset verifizieren, nicht am Ticket |
| Überfällige kritische Befunde | Befunde teilen oder zusammenführen; den Schweregrad herabstufen | Nach eindeutiger Schwachstelle und Asset zählen; alle Schweregradänderungen überprüfen |
| Scan-Abdeckung | Eine engere Menge scannen; einen Scan zählen, der die Authentifizierung nicht schaffte | Abdeckung gegen das Asset-Register; Scan-Qualität (authentifiziert, vollständig) |
| Zeit bis zur Eindämmung | Die Uhr später starten; die Eindämmung früh erklären | Uhr startet beim ersten Erkennungssignal; Eindämmung mit Belegen verifizieren |
| Alter von Risikoausnahmen | Ausnahmen automatisch verlängern; Ausnahmen teilen, um das Alter zu senken | Verlängerungen von Ausnahmen mit Grund überprüfen; Verlängerungen ohne neuen Beleg deckeln |
| Meldequote bei Sicherheit | Geringwertige Meldungen fördern; Meldungen entmutigen, um andere Zahlen zu verbessern | Qualität der Meldungen; Kommentare lesen; Umfrage, ob Menschen sich sicher fühlen zu melden |

Ein gesunder Befund ist eine hohe Scan-Abdeckung, ein kurzer und schrumpfender Expositionsschwanz, ehrliche Ausnahmen mit Review-Daten, schnell eingedämmte Incidents, häufiger intern erkannt, und Mitarbeitende, die Ihnen ohne Furcht von verdächtigen Ereignissen erzählen.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Priorisierung allein nach Schweregrad | Einfach, konsistent | Ignoriert Kontext; schickt Aufwand an die falschen Orte |
| Kontextbasierte Priorisierung | Konzentriert sich auf echtes Risiko | Braucht Daten und Urteil |
| Feste Patch-Fenster | Klare Erwartungen | Kann riskante übereilte Changes erzwingen |
| Risikobasierte Fenster | Passt zur Situation | Schwerer zu prüfen |
| Häufiges automatisches Patchen | Kleine Changes, weniger Exposition | Braucht gute Tests und Rollback |
| Seltene große Patch-Zyklen | Vertraut | Längere Exposition, größeres Risiko je Change |
| Phishing-Simulation | Baut Bewusstsein auf | Kann Vertrauen aushöhlen, wenn missbraucht |
| Fokus auf Meldekultur | Bringt Probleme früh ans Licht | Schwer direkt zu messen |

Die Antwort in Worten ist, nach Kontext zu ordnen, oft in kleinen Schritten mit gutem Rollback zu patchen, Ausnahmen mit Fristen zu erfassen und in die Meldekultur als Kontrolle zu investieren.

## Fragen für die Diskussion im Team

**1. Wie viel unserer Landschaft sehen unsere Scans tatsächlich?**
Vergleichen Sie die gescannten Assets mit dem Asset-Register. Fragen Sie, was fehlt und warum. Die Moderation sollte nach Kategorien suchen, die systematisch ungescannt sind, etwa Container, Remote-Geräte oder Systeme Dritter. Einigen Sie sich auf eine Lücke, die dieses Quartal zu schließen ist.

**2. Was ist unser ältester offener kritischer Befund, und warum ist er noch offen?**
Schauen Sie auf den Schwanz, nicht auf den Durchschnitt. Verfolgen Sie die ältesten paar: wem sie gehören, was sie blockiert und wie die kompensierende Kontrolle lautet. Die Moderation sollte fragen, ob die Ausnahme erfasst ist. Einigen Sie sich, wer den ältesten entblockt.

**3. Wann hat eine Sicherheitskorrektur zuletzt einen Ausfall verursacht, und was änderte sich danach?**
Erinnern Sie sich an ein Beispiel. War die Ursache eine übereilte Korrektur oder ein fehlender Test? Besprechen Sie, wie sich Patchen zur Routine und sicher machen lässt. Verknüpfen Sie die Antwort mit der Change- und Release-Praxis.

**4. Wenn ein Kollege heute eine verdächtige E-Mail meldete, was geschähe mit ihm?**
Beschreiben Sie den echten Weg von der Meldung zur Reaktion, einschließlich wie der Meldende bedankt wird. Fragen Sie, ob sich jemand fürs Melden oder fürs Klicken blamiert hat. Das Gespräch handelt von Vertrauen. Einigen Sie sich auf eine kleine Änderung, die Melden leichter oder sicherer macht.

**5. Welche unserer Sicherheitszahlen könnten steigen, während wir weniger sicher werden?**
Listen Sie die Kennzahlen auf und denken Sie darüber nach, wie jede durch Verengen des Umfangs oder Umetikettieren verbessert werden könnte. Weisen Sie jeder eine Leitplanke zu. Diese Übung baut den Registereintrag für das nächste Review auf.

**6. Wie schnell können wir einen bestätigten Incident eindämmen, und woher wissen wir es?**
Überprüfen Sie die letzten zwei Incidents und verfolgen Sie von der Erkennung bis zur Eindämmung. Notieren Sie Verzögerungen. Fragen Sie, welche Übungen wir durchgeführt haben. Einigen Sie sich, vor dem nächsten Review eine durchzuführen.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams machen die meisten Korrekturen und führen viele Schwächen ein. Sie sollten Abhängigkeiten als Teil des normalen Flusses aktuell halten, Sicherheitsbefunde als Backlog-Elemente mit Eignern und Daten behandeln und Pipeline-Prüfungen nutzen, die schnelles, relevantes Feedback geben. Sie brauchen klare Prioritäten und die Zeit, darauf zu handeln, und sie sollten Bedenken frei äußern können.

### Service- und Betriebsteams

Betriebsteams betreiben die Scanner, spielen Patches ein und reagieren auf Incidents. Sie sollten die Asset-Verknüpfungen aktuell halten, die Abdeckung ehrlich berichten und Ausnahmen mit Fristen behandeln. Sie brauchen auch geschützte Zeit, die Incident-Reaktion zu proben, und eine schuldfreie Kultur, wenn Fehler geschehen.

### Führung und Governance

Führungskräfte setzen den Risikoappetit und entscheiden, ob Sicherheit als kontinuierliche Tätigkeit oder als Projekt finanziert wird. Sie sollten Expositionsfenster und die ältesten offenen Elemente statt Summen verlangen, die Meldekultur schützen und akzeptieren, dass Zahlen steigen, wenn sich die Sicht verbessert. Die Governance sollte Belege für Ausnahmen und für das Lernen aus Incidents verlangen.

### Kunden und Nutzer

Nutzer sind Nutznießer und eine Verteidigungslinie zugleich. Sie wollen Services, die ihre Daten schützen, und klare, faire Anleitung. Ihnen sollte zügig gesagt werden, wenn ein Incident sie betrifft, sie sollten respektvoll behandelt werden, wenn sie Probleme melden, und Sicherheitsmaßnahmen erhalten, die ihre Arbeit nicht schwerer machen als nötig (siehe Thema 6.4, Nutzer- und Mitarbeitererlebnis).

## In der Praxis: ein Beispiel aus dem Service-Management

Eine regionale Kreditgenossenschaft betreibt Online-Banking, eine mobile App und Filialsysteme mit einem kleinen Engineering-Team und einem ausgelagerten Security-Operations-Service. Die Zahlen unten sind illustrativ.

Der Vorstand bittet um ein Sicherheits-Dashboard. Der erste Entwurf des Sicherheitsanalysten zeigt 4.200 offene Schwachstellen mit fallender Tendenz und 96 Prozent Patch-Compliance. Der Leiter des Engineerings fragt nach der Scan-Abdeckung. Beim Verbinden der Scanner-Ausgabe mit dem Asset-Register findet der Analyst, dass 31 Prozent der Server und fast alle Container in den letzten 30 Tagen nicht gescannt wurden, weil der Scanner nach einer Migration die Zugangsdaten verlor. Unter den gescannten Assets beträgt das mediane Expositionsfenster für kritische Schwachstellen 9 Tage und das 85. Perzentil 41 Tage. Der älteste kritische Befund ist 212 Tage alt, auf einem Legacy-System mit einer Ausnahme, die vor vier Monaten ablief. Die Patch-Compliance von 96 Prozent wurde nur für die Assets berechnet, die das Patch-Werkzeug meldete.

Das Team nimmt mit Engineering und Betrieb vier Änderungen vor. Die Scan-Abdeckung wird die erste Zeile des Dashboards, mit dem Ziel, volle Abdeckung des Registers zu erreichen, und die Scan-Authentifizierung wird repariert und überwacht. Die Priorisierung fügt dem Schweregrad Ausnutzungsstatus und Asset-Wichtigkeit hinzu, sodass sich die 4.200 Befunde auf eine kurze Liste von etwa 60 verringern, die jetzt zählen. Abhängigkeits-Updates wandern als häufige kleine Changes mit automatisierten Tests in die Pipeline. Ausnahmen erhalten einen Eigner, eine kompensierende Kontrolle und ein Review-Datum, und die abgelaufene wird vom Risikoausschuss überprüft. Der Sicherheitsanalyst ändert auch, wie Ergebnisse des simulierten Phishings berichtet werden: Nur die Meldequote auf Gruppenebene wird gezeigt, und der Analyst dankt den Kollegen, die melden, persönlich.

Zwei Monate später beträgt die Scan-Abdeckung 97 Prozent, das 85. Perzentil des Expositionsfensters für kritische Elemente 14 Tage, und der älteste kritische Befund ist eine gemilderte Ausnahme mit 60 Tagen bis zu ihrem Review. Eine verdächtige E-Mail mit Zahlungsaufforderung wird binnen Minuten von einer Filialmitarbeiterin gemeldet, und der Incident wird in unter zwei Stunden eingedämmt. Der Vorstand bittet, die Zahl offener Schwachstellen bis Jahresende zu halbieren. Der Leiter des Engineerings schlägt vor, stattdessen Expositionsfenster und überfällige kritische Befunde zu berichten, mit der Erklärung, dass eine Zahl fallen kann, indem man weniger scannt. Die Entscheidung wird festgehalten, und der Vorstand stimmt zu, die neuen Kennzahlen in der nächsten Sitzung zu überprüfen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Sicherheit als Teil kontinuierlicher Auslieferung, mit Korrekturen, die durch dieselbe Pipeline und dasselbe Review fließen wie andere Changes. Zu beachten ist, dass Ziele für Schwachstellenzahlen zum Umklassifizieren einladen.

### KI

KI bringt neue Risiken, etwa Prompt Injection und Datenabfluss, und KI-Werkzeuge können bei der Triage von Befunden helfen. Verfolgen Sie Incidents mit KI-Systemen und den Anteil KI-triagierter Befunde, den ein Mensch bestätigte. Zu beachten ist, dass eine KI, die einen echten Befund abtut, falsche Gewissheit gibt.

### Automatisierung

Automatisieren Sie Scannen und Patchen, wo es sicher ist, und messen Sie Scan-Abdeckung und fehlgeschlagene Patches. Zu beachten ist, dass automatisches Patchen Services zerbrechen kann; nutzen Sie also gestufte Rollouts und Rollback.

### Analytik

Berichten Sie das Expositionsfenster als Verteilung nach Schweregrad mit Anzahlen. Die Entscheidung, die dies untermauert, ist, wo die Exposition zuerst zu senken ist. Zu beachten ist, dass Schwachstellenwerte Eingaben sind, keine Ergebnisse; kombinieren Sie sie also mit Ausnutzbarkeit und Asset-Wichtigkeit.

## Branchenperspektive

**Startup.** Es gibt meist kein eigenes Sicherheitsteam, bauen Sie also die Grundlagen in die Pipeline ein: Abhängigkeits-Updates, Scannen nach Geheimnissen, Multi-Faktor-Authentifizierung und geringste Rechte. Verfolgen Sie das Expositionsfenster für eine kurze Liste kritischer Systeme und haben Sie einen einfachen Incident-Plan. Widerstehen Sie dem Kauf eines großen Werkzeugsatzes, bevor Sie Ihre Landschaft kennen.

**Kleinunternehmen.** Ausgelagerte Services und Cloud-Werkzeuge tragen den größten Teil des Risikos. Führen Sie ein Inventar, schalten Sie Multi-Faktor-Authentifizierung überall ein, halten Sie Systeme automatisch aktuell und wissen Sie, wen Sie bei einem Incident anrufen. Messen Sie Patch-Compliance und die Zeit, Backups wiederherzustellen. Vermeiden Sie, Mitarbeitende zu beschämen, die Fehler melden.

**Großunternehmen.** Größe braucht konsistente Daten über viele Teams und Werkzeuge. Definieren Sie Prioritätsbänder und Fenster zentral, lassen Sie Teams ihre Befunde besitzen, berichten Sie Exposition nach Geschäftsservice und führen Sie regelmäßig Übungen durch. Stimmen Sie sich mit den Sicherheitsteams der Lieferanten ab und testen Sie die Übergaben.

**Behörden und öffentlicher Sektor.** Sektoren unterliegen oft verbindlichen Weisungen mit Fristen für bestimmte Schwachstellen, förmlichen Meldepflichten bei Incidents und Prüfanforderungen. Behandeln Sie diese als Entwurfseingaben: verfolgen Sie die Einhaltung der Weisungsfristen, bewahren Sie Belege auf und melden Sie Incidents wie verlangt, während Sie die Privatsphäre Einzelner schützen (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten sind Scan- und Monitoring-Werkzeuge, die vielleicht schon vorhanden sind, die Zeit, die Asset-Verknüpfungen zu pflegen, Engineering-Zeit, Befunde zu beheben und Abhängigkeiten zu aktualisieren, Vorbereitung und Übungen zur Incident-Reaktion und Schulung. Pipeline-Prüfungen kosten Einrichtungszeit und etwas Build-Zeit. Ausgelagertes Monitoring hat eine Servicegebühr.

Der Ertrag ist eine geringere Wahrscheinlichkeit und geringere Auswirkung von Incidents, kürzere Exposition und weniger übereilte Notfall-Changes. Diese Nutzen sind echt und schwer zu beziffern, denn der Incident, der nicht eintrat, hinterlässt keine Aufzeichnung. Vermeiden Sie, durchschnittliche Kosten von Sicherheitsverletzungen oder Incident-Häufigkeiten der Branche zu zitieren, wenn Sie Quelle und Relevanz nicht zurückverfolgen können. Bauen Sie den Business Case aus Ihren eigenen Daten: den Trend des Expositionsfensters, die Zahl der durch verspätetes Patchen verursachten Notfall-Changes, die Zeit für manuelle Patch-Arbeit, die Automatisierung beseitigte, und die Kosten Ihrer früheren Incidents einschließlich Personalzeit und Kundenauswirkung. Beschreiben Sie Risikominderung anhand konkreter Szenarien, wie das frühere Thema zu Business Cases nahelegt (siehe Thema 7.7, Kapitalrendite und Business Case).

## Anti-Muster und Fallstricke

- **Zahlen von Schwachstellen berichten.** Zahlen fallen, wenn Scans Dinge verpassen. Berichten Sie Expositionsfenster, überfällige Elemente und Abdeckung.
- **Allein nach Schweregrad priorisieren.** Es ignoriert Erreichbarkeit und Ausnutzung. Fügen Sie Kontext hinzu.
- **Den Scan als Wahrheit behandeln.** Prüfen Sie Abdeckung und Scan-Qualität gegen das Asset-Register.
- **Dauerhafte Ausnahmen.** Sie werden verborgenes Risiko. Geben Sie jeder Ausnahme einen Eigner und ein Review-Datum.
- **Menschen für Fehler beschämen.** Meldungen hören auf. Nutzen Sie schuldfreies Review und aggregierte Ergebnisse.
- **Sicherheit als Gate am Ende.** Es bremst Lieferung und lädt zu Umgehungen ein. Bauen Sie Prüfungen in die Pipeline ein.
- **Patch-Zyklen im Big-Bang-Stil.** Sie sind riskant und langsam. Patchen Sie oft in kleinen Changes.
- **Lieferanten ignorieren.** Ihre Schwächen sind Ihre. Verfolgen Sie Sicherheitspflichten und Incidents von Lieferanten.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Sichtbarkeit | Gelegentliche Scans einiger Systeme | Regelmäßige Scans der Hauptsysteme | Scan-Abdeckung gegen das Asset-Register verfolgt; Befunde mit Eignern verknüpft | Abdeckung, Expositionsfenster und Ausnahmen gesteuert und im Trend | Gemeinsame Sicht über Teams und Lieferanten, einschließlich Abhängigkeiten |
| Priorisierung und Behebung | Beheben nach der lautesten Anfrage | Listen nach Schweregrad | Kontextbasierte Rangfolge; Richtlinienfenster nach Band; häufige kleine Patches | Fenster und der Schwanz überprüft; Pipeline-Prüfungen mit Teams abgestimmt | Automatisierte, risikobasierte Behebung mit menschlicher Aufsicht |
| Reaktion und Kultur | Ad-hoc-Reaktion; Schuldzuweisung | Grundplan, selten getestet | Geprobter Plan; schuldfreies Review; Melden wertgeschätzt | Eindämmungszeit und interne Erkennungsrate gesteuert; Meldekultur gemessen | Gemeinsame Übungen mit Lieferanten und Kunden; Lernen breit geteilt |

## Checkliste

- [ ] Die Scan-Abdeckung wird gegen das Asset-Register gemessen.
- [ ] Befunde sind mit einem Asset, einem Eigner und einem Service verknüpft.
- [ ] Prioritätsbänder kombinieren Schweregrad, Ausnutzung, Erreichbarkeit und Asset-Wichtigkeit.
- [ ] Richtlinienfenster je Band sind vereinbart, und Expositionsfenster und das älteste offene Element werden berichtet.
- [ ] Abhängigkeits- und Pipeline-Prüfungen laufen bei jedem Build, mit vereinbarten Blockern.
- [ ] Patchen läuft als häufige, kleine, getestete Changes mit einem Notfallweg.
- [ ] Ausnahmen haben einen Eigner, eine kompensierende Kontrolle und ein Review-Datum.
- [ ] Die Incident-Reaktion wird geprobt, und die Zeit bis zur Eindämmung wird ab der Erkennung gemessen.
- [ ] Daten zu menschlichem Verhalten werden nur aggregiert berichtet, und Melden wird bedankt.
- [ ] Sicherheitspflichten und Incidents von Lieferanten werden verfolgt.

## KI-Prompts

**Eine Regel zur Priorisierung von Schwachstellen überprüfen.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Die Scan-Abdeckung prüfen.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Eine Tabletop-Übung planen.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Eine schuldfreie Nachricht für einen gemeldeten Fehler schreiben.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die gekoppelte Leitplanke für eine Sicherheits- oder Schwachstellenkennzahl zu finden.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein Eintrag einer Sicherheitskennzahl seinen Manipulationsvektor, seine Leitplanke und seine Datenschutzregeln trägt.

## Wichtigste Erkenntnisse

- Messen Sie Expositionszeit, die ältesten offenen Elemente und die Scan-Abdeckung, nicht rohe Zahlen von Befunden.
- Priorisieren Sie nach Kontext: Schweregrad, Ausnutzung, Erreichbarkeit und Asset-Wichtigkeit.
- Patchen Sie oft in kleinen, getesteten Changes und geben Sie jeder Ausnahme einen Eigner und ein Review-Datum.
- Dämmen Sie Incidents schnell ein, lernen Sie schuldfrei und verfolgen Sie die interne Erkennung.
- Behandeln Sie die Meldekultur als Kontrolle: Danken Sie Menschen, die melden, und ordnen Sie nie Einzelpersonen.
- Bauen Sie Sicherheitsprüfungen in die Pipeline ein, damit sichere Entscheidungen die leichten sind.

## Quellen und weiterführende Literatur

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
