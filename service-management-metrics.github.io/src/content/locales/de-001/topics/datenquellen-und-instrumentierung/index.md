# Datenquellen und Instrumentierung

**Eine Kennzahl ist nur so vertrauenswürdig wie die Ereignisse darunter. Benennen Sie deshalb für jede Zahl das führende System, erfassen Sie Ereignisse automatisch in dem Moment, in dem sie geschehen, und testen Sie die Pipeline so sorgfältig wie das Diagramm.**

## Überblick und Motivation

Die meisten Kennzahlenprogramme stecken ihren Aufwand in Dashboards und fast nichts in die Leitungen, die sie speisen. Das ist verkehrt herum. Ein glattes Diagramm auf inkonsistenten Zeitstempeln, einem Statusfeld, das niemand pflegt, oder einer Integration, die letzten Monat still ausgefallen ist, wirkt maßgeblich und ist falsch. Dieses Thema behandelt das unscheinbare Fundament für den Rest des Buches: woher Service- und Lieferdaten kommen, wie verlässlich jede Quelle ist und welche Datenqualitätsfehler eine Kennzahl entwerten, bevor es jemand bemerkt.

Die Quellen fallen in eine Handvoll Familien. Ein Werkzeug für [IT-Service-Management (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) erfasst Incidents, Anfragen, Probleme und Changes, die [ITIL](https://en.wikipedia.org/wiki/ITIL) als Kerndatensätze des Servicebetriebs behandelt. Ein [Issue-Tracking-System](https://en.wikipedia.org/wiki/Issue_tracking_system) erfasst den Backlog und die Bewegung von Arbeitselementen für agile Teams. [Versionsverwaltung](https://en.wikipedia.org/wiki/Version_control) erfasst Commits, Branches und Merges. Eine Pipeline für [kontinuierliche Integration und kontinuierliche Auslieferung (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) erfasst Builds, Testergebnisse und Deployments. Monitoring- und [Observability](https://en.wikipedia.org/wiki/Observability_(software))-Plattformen senden Telemetrie: Metriken, Logs und Traces aus laufenden Systemen. Eine [Configuration Management Database (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) erfasst die Services und Komponenten, auf die sich Dinge beziehen. Umfragen erfassen, was kein System beobachten kann, etwa Zufriedenheit und Aufwand.

Ein von einer Pipeline geschriebenes Deployment-Ereignis ist objektiv und schwer zu fälschen, ein Ticketstatus, der Stunden nach der Arbeit geändert wird, ist eine Erinnerung, und eine Umfrageantwort ist eine Wahrnehmung. Zu wissen, welche Art von Datensatz hinter einer Zahl steht, sagt Ihnen, nach welchem Fehler Sie zuerst suchen sollten.

Agile und ITIL-Sichtweisen treffen sich an denselben Daten: Beide sind Zustandsautomaten mit Zeitstempeln, also halten Sie jede Zustandsänderung als Ereignis mit verlässlicher Zeit fest und leiten Sie die Kennzahlen aus den Ereignissen ab.

Drei Begriffe kehren in diesem Thema wieder. Ein **führendes System** (System of Record) ist die eine Quelle, die für einen Sachverhalt maßgeblich ist, zum Beispiel die Pipeline für „ein Deployment hat stattgefunden“. **Instrumentierung** ist das bewusste Erfassen von Ereignissen durch Code, Konfiguration oder Werkzeugintegration, damit eine Kennzahl berechnet werden kann, ohne dass jemand sie eintippt. Ein **Statusmodell** ist die Menge der Zustände, in denen sich ein Arbeitselement oder Datensatz befinden kann, und der erlaubten Übergänge dazwischen. Das Statusmodell entscheidet, welche Uhren sich überhaupt berechnen lassen.

Im Maßstab von Großunternehmen und öffentlichem Sektor verschärft sich das Problem. Daten laufen durch Konnektoren, [Extract-Transform-Load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load)-Jobs und Berichtsschichten, und jeder Sprung ist eine Gelegenheit für die Bedeutung abzudriften. Ein Feld, das in der Quelle das eine bedeutet, kann im Warehouse etwas leicht anderes bedeuten, und die Zahl sieht trotzdem plausibel aus. Das Mittel ist, den Abstand zwischen Ereignis und Dashboard zu verkürzen und die Pipeline planmäßig zu prüfen.

## Leitprinzipien

- **Ereignisse erfassen, keine Zusammenfassungen.** Speichern Sie die rohen Zustandsänderungen mit Zeitstempeln und berechnen Sie Kennzahlen daraus, damit sich eine Definition ändern kann, ohne die Historie zu verlieren.
- **Beobachtung der Selbstauskunft vorziehen.** Wo ein System das Ereignis sehen kann, nutzen Sie das; heben Sie die Berichte von Menschen für das auf, was nur Menschen sagen können.
- **Ein führendes System pro Sachverhalt benennen.** Doppelte Quellen widersprechen sich, und der Widerspruch untergräbt das Vertrauen in beide.
- **Das Statusmodell vor der Kennzahl entwerfen.** Eine Uhr lässt sich nicht aus Zuständen berechnen, die nicht existieren oder in verschiedenen Teams Verschiedenes bedeuten.
- **Die Pipeline als Produkt behandeln.** Sie hat Eigner, Tests, Monitoring und ein Änderungsprotokoll, denn Datenqualität verfällt still.
- **Herkunft zeigen.** Jede Zahl auf einem Dashboard sollte mit ein, zwei Klicks zu ihren Quelldatensätzen führen.
- **Nur erheben, was Sie nutzen werden, und es schützen.** Jedes Feld kostet und ist, wenn es Menschen betrifft, eine Datenschutzpflicht.

## Kennzahlendefinitionen

Die folgenden Kennzahlen messen die Gesundheit der Datenversorgung selbst. Sie sind das Instrumentenbrett für die Instrumente.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Quellenabdeckung | Anteil der Services und Teams im Geltungsbereich, deren Ereignisse automatisch den Kennzahlenspeicher erreichen | Services oder Teams mit automatisiertem Feed / Services oder Teams im Geltungsbereich; „im Geltungsbereich“ steht im Kennzahlenregister | Prozent | Kennzahlenregister und Pipeline-Konfiguration | Messung und Berichterstattung; Service-Konfigurationsmanagement | Arbeitsvereinbarung des Teams zu Werkzeugen | Vierteljährlich |
| Vollständigkeit der Zeitstempel | Anteil der geschlossenen Arbeitselemente, die jeden für die Uhren der Kennzahl nötigen Zeitstempel tragen | geschlossene Elemente mit allen erforderlichen Zeitstempeln der Zustandswechsel / im Zeitraum geschlossene Elemente; noch offene Elemente sind ausgeschlossen | Prozent | Verlauf des ITSM-Werkzeugs oder Issue-Trackers | Incident-Management; Serviceanfragen-Management | Board- oder Workflow-Verlauf | Monatlich |
| Rückdatierungsrate | Anteil der Zustandsänderungen, die nachträglich erfasst werden, gemessen an der Lücke zwischen Ereigniszeit und Zeit der Eingabe | Zustandsänderungen, die mehr als 24 Stunden nach der Ereigniszeit eingegeben wurden / Zustandsänderungen im Zeitraum; die Uhr startet beim Ereignis und stoppt bei der Eingabe | Prozent | Audit-Trail des Trackers oder Ereigniszeit der Pipeline gegenüber Eingabezeit | Change-Befähigung; Incident-Management | Definition of Done | Monatlich |
| Datenaktualität | Wie alt die neuesten Daten auf einem Dashboard bei der Ansicht sind | Ansichtszeit minus Zeit des neuesten geladenen Ereignisses; Median und 95. Perzentil berichten | Stunden | Laufprotokoll der Pipeline und Ladeprotokoll des Dashboards | Messung und Berichterstattung | Vorbereitung des Stakeholder-Reviews | Wöchentlich |
| Abstimmungsabweichung | Uneinigkeit zweier Quellen über dieselbe Zählung | absoluter Unterschied der beiden Zählungen / Zählung des führenden Systems, für einen festen Zeitraum und Geltungsbereich | Prozent | Führendes System und Berichtsschicht | Service-Level-Management; Finanzmanagement | Prüfungen des Release-Berichts | Monatlich |
| Drift des Statusmodells | Zahl der verwendeten verschiedenen Statusnamen oder Übergänge im Vergleich zum dokumentierten Modell | im Zeitraum beobachtete undokumentierte Status oder Übergänge (Anzahl); dokumentierte sind ausgeschlossen | Anzahl | Workflow-Konfiguration des Trackers und Ereignisverlauf | Kontinuierliche Verbesserung | Arbeitsvereinbarungen zum Workflow | Vierteljährlich |
| Umfragerücklaufquote | Anteil der eingeladenen Personen, die eine Umfrage abgeschlossen haben | abgeschlossene Antworten / zugestellte Einladungen; nicht zustellbare Einladungen sind ausgeschlossen | Prozent | Umfragewerkzeug | Service-Level-Management; Kundenerlebnis | Stakeholder-Review und Verbesserungsfeedback | Je Umfragewelle |

Die Vollständigkeit der Zeitstempel zählt nur geschlossene Elemente, damit ein Backlog alter offener Elemente keine Lücke verbergen kann. Die Rückdatierungsrate verwendet eine 24-Stunden-Schwelle als Beispiel; ein Team wählt eine zu seiner Arbeit passende Schwelle und schreibt sie auf.

## Empfehlungen

### Jede Kennzahl ihrer Quelle zuordnen

**1. Bauen Sie eine Quellenkarte, bevor Sie ein Dashboard bauen.** Halten Sie für jede Kennzahl das führende System fest, das Ereignis, das die Uhr startet, das Ereignis, das sie stoppt, den Eigner der Quelle und den bekannten Fehlermodus. Können Sie das System nicht nennen, wissen Sie noch nicht, woher die Zahl kommt. Halten Sie die Karte im Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**2. Wählen Sie ein führendes System pro Sachverhalt.** Ein Deployment erfasst die Pipeline, einen Incident das ITSM-Werkzeug, eine Codeänderung die Versionsverwaltung, eine Servicebeziehung die CMDB. Wo zwei Werkzeuge denselben Sachverhalt halten, entscheiden Sie, welches gewinnt, und lassen Sie das andere daraus lesen. Abstimmung wird dann zu einer Prüfung und nicht zu einer Debatte.

### Ereignisse im Moment ihres Geschehens erfassen

**3. Instrumentieren Sie das Ereignis, nicht den Bericht.** Lassen Sie die Pipeline das Deployment erfassen, den Host der Versionsverwaltung den Merge und das Monitoring-System den Alarm. Daten, die davon abhängen, dass jemand daran denkt, ein Feld zu aktualisieren, verschlechtern sich mit dem Abstand zum Ereignis und mit der Arbeitslast. Wo ein automatisches Ereignis existiert, ziehen Sie es einem von Menschen eingegebenen Stellvertreter für denselben Sachverhalt vor (siehe Thema 2.8, DORA-Kennzahlen).

**4. Machen Sie Statusänderungen zum Nebeneffekt der Arbeit.** Wenn ein Branch-Merge das Arbeitselement auf „in Review“ setzt oder ein Deployment es auf „ausgeliefert“, muss sich niemand erinnern. Integrationen zwischen Versionsverwaltung, Pipeline und Tracker beseitigen das meiste Rückdatieren.

**5. Behalten Sie die Rohereignisse und halten Sie sie unveränderlich.** Speichern Sie jede Zustandsänderung mit Ereigniszeit, Eingabezeit und Akteurtyp (Person oder Automatisierung). Schreiben Sie Korrekturen als neue Ereignisse, nicht als Überschreibungen, sodass die Geschichte der Korrektur selbst Daten sind.

### Die Zeit richtig behandeln

**6. Erfassen Sie Zeit in einem Standard.** Speichern Sie Zeitstempel in [koordinierter Weltzeit (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) in einem eindeutigen Format wie dem in ISO 8601 und RFC 3339 definierten und rechnen Sie nur zur Anzeige in Ortszeit um. Gemischte Zeitzonen und Sommerzeitwechsel erzeugen unauffällig negative Dauern und um eine Stunde verschobene Uhren.

**7. Schreiben Sie Uhrenregeln dorthin, wo die Daten leben.** Geben Sie für jede Zeitmessgröße an, welches Ereignis die Uhr startet, welches sie stoppt und welche Status sie pausieren. Ein Pausenstatus ist eine Entwurfsentscheidung. Berichten Sie, wie oft jeder Pausenstatus genutzt wird, denn an der Uhr werden Servicedaten am häufigsten geformt (siehe Thema 3.3, Reaktions- und Lösungszeit bei Incidents).

### Das Statusmodell entwerfen

**8. Halten Sie das Statusmodell klein, gemeinsam und dokumentiert.** Jeder zusätzliche Status lädt jedes Team zu einer anderen Deutung ein. Definieren Sie in einem Satz, was jeder Zustand bedeutet, wer Arbeit in ihn verschieben darf und welche Übergänge erlaubt sind. Das Alter von Arbeitselementen und Flussmessgrößen hängen von diesem Modell ab (siehe Thema 2.1, Flussmaße), und teamübergreifender Vergleich hängt davon ab, dass Teams dieselben Wörter für dieselben Zustände verwenden. Überraschen Sie die Daten, verdächtigen Sie zuerst den Workflow: Protokollieren Sie jede Änderung an einem Workflow oder Feld mit Datum und Grund und zählen Sie undokumentierte Status als Drift-Signal.

### Die Pipeline ehrlich halten

**9. Testen Sie die Pipeline wie Software.** Prüfen Sie Zeilenzahlen gegen die Quelle, prüfen Sie, dass erforderliche Felder vorhanden sind, prüfen Sie auf Duplikate und alarmieren Sie, wenn ein Feed stoppt. Fügen Sie jedem Dashboard einen Aktualitätsindikator hinzu, damit Betrachter sehen, wie alt die Daten sind. Ein stiller Konnektorausfall, der die Zahlen des letzten Monats auf dem Bildschirm lässt, gehört zu den häufigsten und schädlichsten Fehlern in diesem Bereich (siehe Thema 11.1, Ein Dashboard für Servicekennzahlen entwerfen).

**10. Stimmen Sie planmäßig ab und ziehen Sie Stichproben von Hand.** Vergleichen Sie eine Zählung in der Berichtsschicht für einen festen Zeitraum mit der Quelle und untersuchen Sie den Unterschied. Lesen Sie dann eine kleine Stichprobe roher Datensätze. Eine Stichprobe von fünfzehn Minuten findet oft, was automatische Prüfungen nicht finden können, etwa einen Status, der unerwartet verwendet wird.

### Mit Menschen und Umfragen sorgfältig umgehen

**11. Heben Sie Umfragen für das auf, was nur ein Mensch sagen kann.** Zufriedenheit, Aufwand, Vertrauen und Wohlbefinden lassen sich aus Systemdaten nicht beobachten. Fragen Sie direkt, halten Sie Umfragen kurz, variieren Sie den Zeitpunkt und berichten Sie Rücklaufquote und wer geantwortet hat, denn Menschen, die antworten, unterscheiden sich von denen, die es nicht tun, eine Form von [Selektionsverzerrung](https://en.wikipedia.org/wiki/Selection_bias). Lesen Sie die offenen Kommentare vollständig (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

**12. Schützen Sie personenbezogene Daten und halten Sie Daten auf Teamebene.** Ereignisdaten über Arbeit können Einzelpersonen über Commit-Urheberschaft, Zuweisungsfelder und Chat-Aufzeichnungen identifizieren. Erheben Sie auf der Ebene, die die Kennzahl braucht, aggregieren Sie auf Teams und Services und wenden Sie die Datenschutzregeln Ihrer Rechtsordnung und Organisation an. Daten auf Individualebene werden, einmal erhoben, tendenziell für Rangfolgen genutzt, was die Quelle verfälscht (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Quellenabdeckung | Einen Service als abgedeckt zählen, sobald ein Feed angeschlossen ist, auch wenn er kaum Ereignisse trägt; schwierige Services aus dem Geltungsbereich lassen | Ereignisvolumen je abgedecktem Service im Vergleich zu seiner bekannten Aktivität; die Liste des Geltungsbereichs mit dem Servicekatalog abgleichen |
| Vollständigkeit der Zeitstempel | Erforderliche Zeitstempel mit der Schließzeit füllen, um die Validierung zu erfüllen | Verteilung der Lücken zwischen aufeinanderfolgenden Zuständen; geschlossene Elemente stichprobenartig prüfen, ob die Zeiten plausibel sind |
| Rückdatierungsrate | Änderungen knapp innerhalb der Schwelle eingeben; die Schwelle erweitern; alle Änderungen durch eine einzige Massenaktualisierung erfassen | Muster der Eingabezeit nach Stunde; Anteil der Änderungen durch Automatisierung gegenüber Handarbeit; Prüfung von Massenänderungen |
| Datenaktualität | Die Zeit der letzten Aktualisierung statt der Zeit des neuesten Ereignisses zeigen | Zeit des neuesten Ereignisses im Dashboard anzeigen; alarmieren, wenn ein Feed keine neuen Ereignisse liefert |
| Abstimmungsabweichung | Den Zeitraum oder Geltungsbereich wählen, der sich abstimmen lässt; die Berichtsschicht an die Quelle angleichen, ohne die Ursache zu finden | Geltungsbereich und Zeitraum im Voraus festlegen; jede gefundene Ursache erfassen und die Ursachen vierteljährlich überprüfen |
| Drift des Statusmodells | Einen vorhandenen Status für eine neue Bedeutung wiederverwenden, um nicht markiert zu werden; Status hinzufügen, ohne sie zu protokollieren | Bei jedem Review die Workflow-Konfiguration mit dem Register vergleichen; eine Stichprobe von Elementen in ungewöhnlichen Zuständen lesen |
| Umfragerücklaufquote | Nur Menschen einladen, die wahrscheinlich antworten; Erinnerungen an zufriedene Nutzer senden; Belohnungen anbieten, die Antworten verzerren | Zusammensetzung der Antwortenden im Vergleich zur Nutzerpopulation; Verteilung der Antworten je Welle; offene Kommentare im Review lesen |

Ein gesunder Befund ist eine Menge langweiliger Zahlen: hohe Abdeckung, niedrige und fallende Rückdatierung, Aktualität innerhalb ihres erklärten Versprechens und eine bekannte Ursache, wann immer die Abstimmungsabweichung ungleich null ist. Bewegt sich eine Zahl, kann jemand sagen, ob sich die Arbeit geändert hat oder das Instrument.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Automatische Ereigniserfassung | Objektiv, zeitnah, geringer Aufwand nach dem Aufbau | Deckt nur ab, was instrumentiert wurde; fällt still aus, wenn sich Werkzeuge ändern |
| Manuelle Eingabe und Statusaktualisierung | Erfasst Kontext und Urteil; funktioniert ohne Integration | Spät, uneinheitlich und manipulierbar |
| Ein zentraler Kennzahlenspeicher | Eine Definition, ein Ort zum Testen und Steuern | Braucht Finanzierung und Verantwortung; kann zum Engpass werden |
| Jedes Team führt seine eigenen Daten | Passt zur lokalen Arbeit; schneller Start | Definitionen laufen auseinander; Verdichtungen sind unzuverlässig |
| Rohereignisse langfristig behalten | Definitionen können sich ändern und die Historie lässt sich neu berechnen | Speicher- und Datenschutzkosten; mehr abzusichern |

Automatisieren Sie, was beobachtbar ist, fragen Sie Menschen nach dem, was es nicht ist, und behalten Sie den Rohdatensatz. Investieren Sie zuerst in die Quellen hinter den zwei oder drei Kennzahlen, die das Team tatsächlich nutzt, nicht in eine Datenplattform für jede denkbare Zahl.

## Fragen für die Diskussion im Team

**1. Welches System ist für unsere wichtigste Kennzahl das führende System, und woher wissen wir es?**
Bitten Sie die Gruppe, die Zahl vom Dashboard bis zum ersten Ereignis zurückzuverfolgen. Notieren Sie jede Stelle, an der ein Mensch oder eine Transformation die Daten berührt. Die Moderation sollte nach Schritten suchen, die niemand erklären kann, denn dort sollte die erste Untersuchung ansetzen.

**2. Welche unserer Zeitstempel schreibt ein System, und welche tippt ein Mensch?**
Listen Sie die verwendeten Uhren auf, etwa Zeit bis zur Reaktion, Zeit bis zur Lösung und Zykluszeit. Markieren Sie jeden Start und Stopp als automatisch oder manuell. Fragen Sie bei den manuellen, wie lange nach dem Ereignis die Eingabe üblicherweise erfolgt. Die Diskussion zeigt oft, dass die am meisten debattierte Kennzahl auf dem unzuverlässigsten Zeitstempel beruht.

**3. Was bedeuten unsere Status, und meinen alle Teams dasselbe?**
Stellen Sie den Workflow an einer Tafel dar und lassen Sie Menschen aus verschiedenen Teams jeden Zustand mit eigenen Worten erklären. Vergleichen Sie die Erklärungen. Zählen Sie die Zustände, in denen die Uhr pausiert, und fragen Sie, wer sie nutzen darf und warum. Einigen Sie sich auf eine Änderung, die Mehrdeutigkeit beseitigt, und protokollieren Sie sie mit dem Grund.

**4. Wie würden wir herausfinden, dass ein Feed still gestoppt hat?**
Fragen Sie, wann zuletzt jemand geprüft hat, ob die Daten auf dem Dashboard aktuell sind. Besprechen Sie, welcher Alarm oder Aktualitätsindikator einen gestoppten Konnektor binnen eines Tages auffangen würde. Die Moderation sollte auf einen benannten Eigner und eine konkrete Prüfung drängen, nicht auf eine allgemeine Absicht, sorgfältig zu sein.

**5. Was erheben wir, das wir nie nutzen, und was nutzen wir, das wir nicht gut erheben?**
Legen Sie Feldliste und Kennzahlenliste nebeneinander. Markieren Sie Felder, die keine Entscheidung speisen, und Kennzahlen, die auf schlechten Feldern beruhen. Entscheiden Sie, welches Feld Sie in diesem Quartal nicht mehr erheben und welches Sie verbessern.

**6. Wer beantwortet unsere Umfragen, und wer nicht?**
Vergleichen Sie die Antwortenden mit der Population der Nutzer oder Teammitglieder. Sehen Sie sich Rücklaufquoten nach Gruppe und nach Tageszeit oder Wochentag an. Besprechen Sie, was das Schweigen bedeuten könnte und wie sich stille Gruppen ohne Druck erreichen lassen. Einigen Sie sich, wie die Rücklaufquote neben jedem Umfrageergebnis gezeigt wird.

## Vier Perspektiven

### Produkt- und Lieferteams

Lieferteams erzeugen die meisten objektiven Daten: Commits, Reviews, Builds und Deployments. Sie profitieren von Instrumentierung, die Statusänderungen zum Nebeneffekt der Arbeit macht, sodass das Board ohne Zusatzaufwand ehrlich bleibt. Sie sollten den Workflow klein halten und sich davor hüten, Aktivität in der Versionsverwaltung als Maß für Aufwand zu verwenden (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz).

### Service- und Betriebsteams

Serviceteams hängen von Datensätzen ab, die Menschen unter Druck anlegen, oft während eines Incidents. Uhrenregeln, Pausenstatus und Prioritätsfelder sind die Stellen, an denen Drift entsteht. Betriebsteams sollten die Erfassung wichtiger Zeiten, etwa Alarmzeit und Quittierungszeit, wo möglich automatisch gestalten, die Nutzung von Pausenstatus prüfen und Monitoring-Daten vom Ticketdatensatz getrennt halten, damit jedes das andere prüfen kann (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität).

### Führung und Governance

Führungskräfte entscheiden, wie viel in Datengrundlagen investiert wird, und setzen die Anreize, die bestimmen, ob die Daten ehrlich bleiben. Sie sollten fragen, woher eine Zahl kommt, bevor sie fragen, warum sie sich bewegt hat, Pipeline-Verantwortung als laufende Arbeit finanzieren und auf jedem Bericht ein Aktualitätsdatum und eine Definition erwarten. Governance-Gremien sollten eine dokumentierte Änderung an einer Quelle oder Definition als normales Ereignis behandeln und nicht als Fehler.

### Kunden und Nutzer

Nutzer liefern die wichtigsten Daten zum Erlebnis, meist durch Beantworten von Umfragen, Bewerten von Interaktionen oder Melden von Problemen. Sie müssen wissen, was erhoben wird, warum und was sich daraufhin ändert. Kurze Umfragen und sichtbare Nachverfolgung halten die Rücklaufquote gesund. Kundenseitige Servicelevel-Berichte sollten ihre Quellen und Definitionen nennen (siehe Thema 5.2, SLIs, SLOs und Fehlerbudgets).

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler hat ein Plattformteam, drei Produktteams und einen Service Desk. Alle Zahlen in diesem Beispiel sind illustrativ.

Die Führung fragt, warum die Change-Durchlaufzeit im Monatsbericht in einem Quartal von einem Median von 9 Tagen auf 3 Tage gefallen ist, während die Produktteams keine Änderung ihrer Arbeitsweise melden. Der Leiter des Plattform-Engineerings verdächtigt das Instrument und bittet um eine Quellenkarte der Kennzahl.

Die Karte zeigt, dass die Durchlaufzeit startet, wenn im ITSM-Werkzeug ein Change-Datensatz angelegt wird, und stoppt, wenn sein Status auf „umgesetzt“ gesetzt wird. Zwei Produktteams hatten begonnen, den Datensatz erst anzulegen, nachdem die Arbeit fertig war, sodass die Uhr zu spät startete. Eine Stichprobe von 40 Datensätzen ergibt, dass 12 am selben Tag wie das Deployment angelegt wurden. Die Rückdatierungsrate, gemessen als Lücke zwischen dem Deployment-Ereignis in der Pipeline und der Eingabe des Status „umgesetzt“, lag bei 31 Prozent über der 24-Stunden-Schwelle, die das Team gesetzt hatte.

Das Team nimmt drei Änderungen vor. Erstens wandert der Start der Uhr zum ersten mit dem Change verknüpften Commit aus der Versionsverwaltung, und der Stopp wandert zum von der Pipeline geschriebenen Deployment-Ereignis. Zweitens erhält das ITSM-Werkzeug den Status von der Pipeline, sodass „umgesetzt“ nicht mehr getippt wird. Drittens bekommt das Dashboard einen Aktualitätsindikator und eine Abstimmungsprüfung der Change-Zahlen zwischen Pipeline und ITSM-Werkzeug.

Mit der neuen Definition beträgt der Median der Durchlaufzeit 7 Tage und das 95. Perzentil 21 Tage, und die Rückdatierungsrate fällt auf 4 Prozent. Die Führung liest die 7 Tage zunächst als schlechteres Ergebnis. Der Plattformleiter erklärt, die alte Zahl sei ein Artefakt später Datensatzanlage gewesen. Die im Entscheidungsprotokoll festgehaltene Entscheidung lautet, die zwei vorherigen Quartale aus Rohereignissen neu darzustellen und die Definitionsänderung im Diagramm zu markieren. Das Manipulationsrisiko, das das Team entdeckte, war subtil: Niemand fälschte eine Zahl, doch späte Datensatzanlage erzeugte eine schmeichelhafte Zahl. Die Abstimmungsabweichung wirkt nun als Leitplanke, und die Stichprobe roher Datensätze wird jedes Quartal überprüft.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie Instrumentierung in kleinen Schritten neben den Funktionen auf, sodass jedes Release die Ereignisse hinzufügt, die zu seiner Messung nötig sind, und stimmen Sie die Ereignisdefinitionen mit den Menschen ab, die die Zahlen lesen werden. Ein praktischer Schritt ist, das Ereignis in die Definition of Done für einen Change aufzunehmen. Zu beachten ist, dass nachträgliches Messen nach dem Start Lücken in den frühen Daten hinterlässt, die keine spätere Korrektur zurückholen kann.

### KI

KI-Systeme bringen neue Datenquellen mit: Prompts, Antworten, Werkzeugaufrufe, menschliche Änderungen und Übersteuerungen. Erfassen Sie, wer oder was gehandelt hat, welche Modellversion lief und ob ein Mensch das Ergebnis geändert hat, vorbehaltlich der Datenschutz- und Aufbewahrungsregeln. Zu beachten ist, dass das Protokollieren von Prompts personenbezogene oder vertrauliche Daten erfassen kann; entscheiden Sie also, was Sie speichern, bevor Sie beginnen.

### Automatisierung

Erfassen Sie Ereignisse automatisch im Moment ihres Geschehens aus dem führenden System und testen Sie die Pipeline mit bekannten Eingaben. Automatisierung ist selbst eine Quelle: Erfassen Sie Läufe, Fehler, Wiederholungen und Rollbacks. Zu beachten ist der stille Ausfall, bei dem ein defekter Konnektor flache, gesund aussehende Zahlen erzeugt; überwachen Sie deshalb die Datenaktualität als Kennzahl.

### Analytik

Stimmen Sie jedes Quartal mindestens eine Zahl gegen eine unabhängige Quelle ab und veröffentlichen Sie die Abweichung. Die Entscheidung, die dies untermauert, ist, ob einer Kennzahl genug vertraut werden kann, um sie zu nutzen. Zu beachten ist, dass sauber aussehende Dashboards auf schwachen Daten sitzen können; zeigen Sie deshalb die Datenvollständigkeit neben dem Ergebnis.

## Branchenperspektive

**Startup.** Die Daten sind dünn und das Vertrauen ist hoch, was hilft. Nutzen Sie Pipeline und Versionsverwaltung als Hauptquellen, denn sie brauchen keinen Zusatzaufwand, und halten Sie das Statusmodell auf eine Handvoll Zustände. Schreiben Sie jede Definition und ihre Quelle auf einer einzigen Seite auf und überprüfen Sie sie, wenn sich das Team verdoppelt.

**Kleinunternehmen.** Oft betreibt eine Person die IT auf einem gehosteten Service Desk. Nutzen Sie die Berichte des Werkzeugs, lassen Sie sich die Definitionen vom Anbieter schriftlich geben und exportieren Sie periodisch Rohdaten, um Lock-in zu vermeiden.

**Großunternehmen.** Viele Werkzeuge, viele Teams und Integrationsschichten erzeugen das größte Risiko von Definitionsdrift. Investieren Sie in ein gemeinsames Ereignismodell, einen zentralen Kennzahlenspeicher mit benannten Eignern und automatische Abstimmungs- und Aktualitätsprüfungen. Einigen Sie sich auf ein kleines unternehmensweites Statusvokabular und lassen Sie Teams lokale Zustände nur mit angegebener Abbildung darauf hinzufügen.

**Behörden und öffentlicher Sektor.** Datensätze können Aufbewahrungs-, Prüfungs-, Zugriffs- und Datenschutzrecht unterliegen, und die Beschaffung kann Werkzeuge und Datenformate festlegen. Behandeln Sie das als Entwurfsvorgaben: Führen Sie eine Prüfspur, dokumentieren Sie die Herkunft vom Ereignis zum Bericht und verhandeln Sie Datenexportrechte in Verträgen. Berichtspflichten machen dokumentierte Definitionen unverzichtbar (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten dieses Themas haben drei Teile. Der erste ist der Aufbauaufwand: Integrationen, ein Kennzahlenspeicher und eine Bereinigung des Statusmodells. Der zweite ist der Betriebsaufwand: ein Eigner für die Pipeline, Überwachung der Feeds und eine vierteljährliche Routine aus Abstimmung und Stichproben. Der dritte sind die Kosten für Datenschutz- und Sicherheitskontrollen für die behaltenen Daten.

Der Ertrag kommt aus Entscheidungen auf Zahlen, die bedeuten, was sie zu bedeuten scheinen. Schlechte Daten führen zu falschen Investitionen, Streit darüber, wessen Zahl stimmt, und korrigierten Ergebnissen, die Vertrauen beschädigen. Beschreiben Sie den Nutzen über Muster, die Sie selbst messen können: die Zeit zur Erstellung eines Monatsberichts vorher und nachher, die Zahl der Abstimmungsstreitigkeiten pro Quartal sowie Rückdatierungsrate und Vollständigkeit der Zeitstempel im Zeitverlauf. Die Gesamtbetriebskosten werden von Menschen dominiert, zählen Sie also die Stunden des Pipeline-Eigners.

## Anti-Muster und Fallstricke

- **Das Dashboard vor der Quellenkarte bauen.** Das Diagramm wirkt fertig, während seine Bedeutung unbekannt ist. Kartieren Sie zuerst Quelle, Uhren und Eigner.
- **Manuellen Statusaktualisierungen für Zeitmessgrößen trauen.** Späte Eingabe macht die Uhren zur Fiktion. Automatisieren Sie Übergänge aus Pipeline- und Versionsverwaltungs-Ereignissen, wo sie existieren.
- **Mehrere führende Systeme für einen Sachverhalt.** Streit folgt. Wählen Sie eines und lassen Sie die anderen daraus lesen.
- **Stille Definitionsänderungen.** Die Trendlinie wird bedeutungslos. Protokollieren Sie jede Änderung mit Begründung und markieren Sie sie im Diagramm.
- **Durchschnitte aus unvollständigen Daten.** Fehlende Zeitstempel sind nicht zufällig, denn oft sind es die unbequemen Elemente, die übersprungen werden. Berichten Sie die Vollständigkeit der Zeitstempel neben dem Ergebnis.
- **Alles erheben, falls es nützlich sein könnte.** Kosten und Datenschutzrisiko steigen, ohne dass eine Entscheidung bedient wird. Erheben Sie, was eine benannte Frage braucht.
- **Kein Aktualitätsindikator.** Ein veraltetes Dashboard sieht aus wie ein aktuelles. Zeigen Sie in jeder Sicht das Alter des neuesten Ereignisses.
- **Daten auf Individualebene ohne Zweck.** Sie verführen zur Rangfolge und schaden der Quelle. Aggregieren Sie auf Team- und Serviceebene und beschränken Sie den Zugriff.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Quellen und Erfassung | Zahlen von Hand aus Exporten zusammengestellt | Einige Werkzeuge speisen einen Bericht automatisch, andere nicht | Jede Kennzahl hat ein benanntes führendes System und automatische Erfassung, wo ein Ereignis existiert | Abdeckung und Vollständigkeit gemessen und im Trend | Ereignisse über Teams und Lieferanten durch vereinbarte Schnittstellen geteilt, mit Verträgen für den Export |
| Zeit- und Statusmodelle | Jeder erfasst und liest Zeit anders | Einige Teams dokumentieren ihren Workflow | Ein Zeitstandard und ein gemeinsames Statusvokabular mit schriftlichen Uhrenregeln | Drift und Rückdatierung überwacht, Änderungen mit Gründen protokolliert | Modelle gemeinsam mit Lieferanten und Kunden überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Pipeline-Qualität | Fehler werden gefunden, wenn sich jemand beschwert | Gelegentliche manuelle Prüfungen | Zeilenzahlen, Duplikatprüfungen und ein Aktualitätsindikator auf jedem Dashboard | Abstimmung geplant und Ursachen überprüft; Pipeline hat einen Eigner | Pipeline-Gesundheit wird wie ein Service berichtet, Verbesserung finanziert |
| Umfrage- und Datenschutzpraxis | Ad-hoc-Umfragen; keine Datenschutzprüfung | Standardfragen in einigen Teams | Kurze regelmäßige Umfragen mit angezeigter Rücklaufquote; Daten auf Teamebene gehalten | Zusammensetzung der Antwortenden überprüft und darauf reagiert | Umfrageergebnisse und Datenschutzpraxis offen mit Nutzern geteilt |

## Checkliste

- [ ] Jede berichtete Kennzahl hat ein benanntes führendes System und einen benannten Quelleneigner.
- [ ] Die Quellenkarte ist im Kennzahlenregister abgelegt.
- [ ] Jede Zeitmessgröße gibt an, wo ihre Uhr startet, stoppt und pausiert.
- [ ] Zeitstempel werden in UTC in einem eindeutigen Format gespeichert, und die Serveruhren sind synchronisiert.
- [ ] Statusänderungen werden durch Automatisierung erzeugt, wo ein Ereignis existiert.
- [ ] Rohereignisse werden mit Ereigniszeit und Eingabezeit behalten, und Korrekturen sind neue Ereignisse.
- [ ] Das Statusmodell ist dokumentiert, und jede Änderung wird mit Begründung protokolliert.
- [ ] Jedes Dashboard zeigt das Alter seiner neuesten Daten.
- [ ] Zählungen werden planmäßig mit der Quelle abgestimmt, und Ursachen werden erfasst.
- [ ] Jedes Quartal wird eine Stichprobe roher Datensätze gelesen.
- [ ] Umfragerücklaufquote und Zusammensetzung der Antwortenden werden mit jedem Umfrageergebnis gezeigt.
- [ ] Personenbezogene Daten sind minimiert und auf Team- und Serviceebene aggregiert.

## KI-Prompts

**Eine Quellenkarte für eine Kennzahl erstellen.**

```text
I am documenting the data behind this metric: [metric name], defined as
[definition]. Our tools are [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Draft a source map with these fields: the event that
starts the clock, the event that stops it, the system of record for each, who or
what creates the event (person or automation), likely failure modes, and checks
that would detect each failure. Do not invent tool features or benchmark values.
List your assumptions and the questions I should answer to complete the map.
```

**Ein Statusmodell auf Mehrdeutigkeit prüfen.**

```text
Here is the workflow for [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. The clocks we compute
from it are [list clocks]. Identify statuses that are ambiguous, states where a
clock could stop or pause in a misleading way, and places where two teams might
read the same word differently. Suggest a smaller model that still supports the
clocks, and say what would be lost. Do not guess how our tool is configured. List
your assumptions.
```

**Datenqualitätsprüfungen für einen Feed entwerfen.**

```text
We load [data type, for example change records] from [source system] into
[destination] every [schedule]. Required fields are [list fields]. Propose a
practical set of checks for completeness, duplicates, freshness, and
reconciliation against the source, with a suggested alert and an owner role for
each. Keep the set small enough for a team of [team size] to maintain. Do not
invent thresholds; ask me for the ones you need. List your assumptions.
```

**Eine kurze Umfrage und einen Plan für ihre Rücklaufquote entwerfen.**

```text
I want to measure [experience topic, for example effort to get a request
fulfilled] for [audience]. Draft [number] neutral questions, a plan for when and
how to send them, and how to report the response rate and the respondent mix. Flag
wording that could bias answers, and note privacy considerations given that the
data will be held in [tool or location]. Do not invent benchmark response rates.
List your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um herauszufinden, welches Thema die Kennzahl definiert, die Sie instrumentieren, und welche Leitplanke daneben stehen sollte.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass ein neues oder bearbeitetes Kennzahlenthema seine Datenquelle und Uhren benennt.

## Wichtigste Erkenntnisse

- Jede Kennzahl hängt von einem benannten führenden System ab, also kartieren Sie die Quelle, bevor Sie das Diagramm bauen.
- Erfassen Sie Ereignisse automatisch im Moment ihres Geschehens und behalten Sie die Rohereignisse, damit sich Definitionen ändern können, ohne die Historie zu verlieren.
- Zeit sind auch Daten: Verwenden Sie einen Standard, schreiben Sie die Uhrenregeln auf und achten Sie auf Rückdatierung.
- Halten Sie das Statusmodell klein, gemeinsam und dokumentiert und protokollieren Sie jede Änderung.
- Behandeln Sie die Pipeline als Produkt mit Eigner, Tests, Aktualitätsindikator und planmäßiger Abstimmung.
- Nutzen Sie Umfragen für das, was nur Menschen sagen können, zeigen Sie die Rücklaufquote und halten Sie personenbezogene Daten auf Teamebene.

## Quellen und weiterführende Literatur

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
