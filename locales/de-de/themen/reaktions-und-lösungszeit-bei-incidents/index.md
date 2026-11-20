# Reaktions- und Lösungszeit bei Incidents

**Zeitmessgrößen für Incidents beschreiben, wie lange Nutzer in jeder Stufe warten. Berichten Sie sie deshalb als Verteilungen mit aufgeschriebenen Uhren, nie als einzelnen Mittelwert, und koppeln Sie jede Geschwindigkeitszahl mit einer Messgröße dafür, ob die Behebung hielt.**

## Überblick und Motivation

Ein Incident ist im IT-Service-Management (ITSM) eine ungeplante Unterbrechung eines Services oder eine Minderung seiner Qualität. [Incident-Management](https://en.wikipedia.org/wiki/Incident_management) ist die Praktik, die den normalen Service so schnell wie sicher wiederherstellt. In ITIL 4 heißt die Praktik Incident-Management und gehört zu den Service-Management-Praktiken des [ITIL](https://en.wikipedia.org/wiki/ITIL)-Rahmenwerks. Ihre agilen Gegenstücke sind die Gewohnheit des Teams, ungeplante Arbeit als gleichwertigen Arbeitsfluss zu behandeln, sowie die Praktiken von Bereitschaftsdienst und schuldfreiem Review, die aus dem [Site Reliability Engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE) stammen, der Disziplin, Services mit Methoden des Software-Engineerings zu betreiben.

Zeit ist die natürlichste Art, einen Incident zu beschreiben, und die am häufigsten missbrauchte. Ein einzelner Incident durchläuft mehrere Stufen. Etwas geht kaputt, ein Monitor oder ein Nutzer bemerkt es, eine Person quittiert den Alarm, jemand beginnt zu arbeiten, der Service wird für Nutzer wiederhergestellt, und das Ticket wird geschlossen, sobald die Ursache behandelt oder zurückgestellt ist. Jede Lücke zwischen zwei dieser Ereignisse ist eine eigene Messgröße mit eigenem Eigner, eigener Verzögerungsursache und eigener Abhilfe. Alles „Lösungszeit“ zu nennen verbirgt, wo die Verzögerung lebt.

Dieses Thema behandelt die Messgrößen der verstrichenen Zeit, die einem Incident von Anfang bis Ende folgen: **Zeit bis zur Erkennung**, **Zeit bis zur Quittierung**, **Zeit bis zur ersten Reaktion**, **Zeit bis zur Wiederherstellung** und **Zeit bis zur Lösung**. Es behandelt auch das Alter offener Incidents, die Zahl der Übergaben eines Incidents und die statistischen Probleme der bekanntesten Zusammenfassung, der mittleren Zeit bis zur Wiederherstellung oder Lösung (MTTR). Zahlen, Kategorien und Priorität werden an anderer Stelle behandelt (siehe Thema 3.2, Incident-Aufkommen und Priorität). Große und ungewöhnliche Incidents haben eigene Messgrößen (siehe Thema 3.4, Kennzahlen für Major Incidents).

### In diesem Thema verwendete Begriffe

- **Zeit bis zur Erkennung (TTD).** Verstrichene Zeit, vom Beginn der Auswirkung eines Fehlers auf Nutzer bis zu dem Moment, in dem die Organisation durch Monitoring oder Nutzermeldung davon wusste.
- **Zeit bis zur Quittierung (TTA).** Verstrichene Zeit, vom Auslösen des Alarms oder Erfassen des Tickets bis zu dem Moment, in dem eine benannte Person oder ein Team die Verantwortung übernimmt.
- **Zeit bis zur ersten Reaktion.** Verstrichene Zeit, von der Erfassung des Incidents bis zur ersten sinnvollen Handlung oder Nachricht an den betroffenen Nutzer. Eine automatische Antwort zählt nicht.
- **Zeit bis zur Wiederherstellung.** Verstrichene Zeit, vom Beginn der Auswirkung auf Nutzer bis Nutzer den Service wieder nutzen können, auch wenn die zugrunde liegende Ursache nur umgangen ist.
- **Zeit bis zur Lösung.** Verstrichene Zeit, von der Erfassung des Incidents bis zu seinem Schließen, weil der Service wiederhergestellt ist und der Nutzer bestätigt hat oder eine faire Gelegenheit zur Bestätigung hatte.
- **Mittlere Zeit bis zur Wiederherstellung oder Lösung (MTTR).** Das arithmetische Mittel einer dieser Dauern über eine Menge von Incidents. Der Buchstabe R wird je nach Sprecher als Reparatur, Recovery, Restore, Resolve oder Respond gelesen, was das erste Problem der Abkürzung ist. Der [Wikipedia-Artikel zur mittleren Reparaturzeit](https://en.wikipedia.org/wiki/Mean_time_to_repair) listet die Varianten auf.
- **Service Level Agreement (SLA).** Ein [Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement) ist eine Zusage zwischen Anbieter und Kunde über das Serviceniveau, oft einschließlich Ziel-Reaktions- und -Lösungszeiten nach Priorität.

### Warum der Mittelwert eine schlechte Zusammenfassung ist

Incident-Dauern sind nicht symmetrisch. Die meisten Incidents sind kurz, einige sehr lang, und die langen dominieren jeden Durchschnitt. Dauern dieser Art lassen sich oft gut durch eine rechtsschiefe Form wie die [Log-Normalverteilung](https://en.wikipedia.org/wiki/Log-normal_distribution) beschreiben. In schiefen Daten kann der Mittelwert weit über dem liegen, wie ein typischer Incident aussieht, und ein einziger langer Ausfall kann ihn stärker bewegen als ein Monat an Verbesserungen.

Googles SRE-Team hat eine Analyse dieses Problems veröffentlicht. Sie argumentiert, dass bei den untersuchten Incident-Datensätzen die Streuung der Incident-Dauern so breit ist, dass MTTR echte Verbesserungen verbergen oder Änderungen zeigen kann, die Rauschen sind, und empfiehlt, stattdessen Verteilungen anzusehen (Davidovič, 2021, in den Quellen aufgeführt). Die Argumentation beruht auf bekannter Statistik, Sie können sie also an Ihren eigenen Daten prüfen, ohne dem Schluss von irgendjemandem zu trauen: Tragen Sie Ihre Incident-Dauern auf, berechnen Sie Mittelwert und [Median](https://en.wikipedia.org/wiki/Median) und sehen Sie, wie weit sie auseinanderliegen (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

Die Alternative sind [Perzentile](https://en.wikipedia.org/wiki/Percentile). Der Median sagt, worauf ein typischer Nutzer wartete. Das 85. oder 95. Perzentil sagt, wie lange die Unglücklichen warteten. Kunden erinnern sich an das lange Warten, nicht an den Durchschnitt, daher passt eine Perzentilzusage wie „neun von zehn Incidents dieser Priorität innerhalb einer genannten Zeit wiederhergestellt“ weit besser zu ihrem Erleben als ein Mittelwert.

### Wie sich ITIL- und agile Sicht unterscheiden

Die ITIL-Sicht beginnt tendenziell bei einer Priorität und einem Ziel. Auswirkung und Dringlichkeit legen eine Priorität fest, die Priorität legt Ziel-Reaktions- und -Lösungszeiten fest, und ein Service Level Agreement kann ihr Verfehlen mit Folgen verbinden. Das ist geordnet und leicht zu prüfen und anfällig für die Manipulation, zu der Ziele einladen (siehe Thema 1.2, Goodharts Gesetz und die Psychologie von Kennzahlen).

Die agile und SRE-Sicht beginnt bei der Nutzerauswirkung und beim Fluss. Sie fragt, wie schnell das Team den Schaden begrenzt, wie viel der verstrichenen Zeit eines Incidents aktive Arbeit und wie viel Warten war und was das Team gelernt hat. Sie bevorzugt Messgrößen der Auswirkung (betroffene Nutzer, Minuten verschlechterten Services) gegenüber Messgrößen des Ticketstatus und behandelt die Ticketuhr als bequemen, aber unvollkommenen Stellvertreter. Die beiden Sichten sind vereinbar. Nutzen Sie die Prioritätsstruktur von ITIL, um zu entscheiden, was für wen zu messen ist, und Fluss- und Auswirkungsdenken, um zu entscheiden, ob die Zahl etwas bedeutet.

## Leitprinzipien

- **Die Stufe benennen, nicht „Lösung“.** Erkennen, Quittieren, Reagieren, Wiederherstellen und Lösen sind verschiedene Fragen mit verschiedenen Eignern. Berichten Sie jede unter ihrem eigenen Namen.
- **Beide Uhren aufschreiben.** Jede Zeitmessgröße nennt, welches Ereignis sie startet, welches sie stoppt und welche Zustände sie pausieren. Die meiste Manipulation lebt in diesen Grenzen.
- **Verteilungen berichten.** Zeigen Sie den Median, ein hohes Perzentil und das Alter des ältesten offenen Incidents. Vermeiden Sie einen einzelnen Mittelwert, den schiefe Daten unzuverlässig machen.
- **Wiederherstellung getrennt vom Schließen messen.** Nutzern ist wichtig, wann der Service zurückkam. Das Ticket kann später schließen, nachdem die Ursache behandelt ist.
- **Geschwindigkeit mit Dauerhaftigkeit koppeln.** Eine schnelle Wiederherstellung, die derselbe Incident am nächsten Tag zunichtemacht, ist keine Verbesserung. Zeigen Sie Wiederkehr- und Wiedereröffnungsraten neben jeder Zeitmessgröße.
- **Teams, Services und Systeme beschreiben.** Bringen Sie nie einzelne Agenten oder Ingenieure nach Reaktions- oder Lösungszeit in eine Rangfolge.
- **Vor dem Vergleich segmentieren.** Vergleichen Sie Gleiches mit Gleichem, nach Priorität und nach Service, denn eine gemischte Zahl vermengt Passwort-Resets mit Datenbankausfällen.

## Kennzahlendefinitionen

Jede Zeile nennt ihre Uhren. Kalenderzeit und Geschäftszeit sind verschieden: Sagen Sie, welche Sie verwenden. Wo eine Messgröße Perzentile nutzt, nennt die Tabelle das 50. und 95., und Teams können das 85. ergänzen.

| Kennzahl | Definition | Formel | Einheit | Datenquelle | ITIL-Praktik | Agiles Gegenstück | Rhythmus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zeit bis zur Erkennung | Wie lange ein Fehler Nutzer beeinträchtigte, bevor die Organisation davon wusste | Die Uhr startet im ersten Moment der Nutzerauswirkung (aus Monitoring-Daten oder dem im Review festgehaltenen bestätigten Beginn der Auswirkung); stoppt beim ersten Alarm oder der ersten Nutzermeldung. Berichtet als Median und 95. Perzentil je Service. Incidents ohne bekannten Beginn werden gezählt und gesondert berichtet, nicht fallen gelassen | Minuten | Monitoring- und Alarmplattform; Incident-Datensatz mit Feld für den Beginn der Auswirkung | Incident-Management; Monitoring und Event-Management | Arbeit an Observability und Alarmqualität (siehe Thema 5.5, Kennzahlen für Monitoring und Alarmqualität) | Monatlich |
| Zeit bis zur Quittierung | Wie lange ein ausgelöster Alarm oder ein Ticket wartet, bevor eine Person es besitzt | Die Uhr startet, wenn der Alarm auslöst oder das Ticket erfasst wird; stoppt, wenn eine benannte Person oder ein Team es annimmt. Automatische Zuweisung stoppt die Uhr nicht. Berichtet als Median und 95. Perzentil nach Priorität | Minuten | Paging-Werkzeug; Zuweisungsverlauf des ITSM-Werkzeugs | Incident-Management; Service Desk | Bereitschaftsreaktion in einer SRE-Rotation | Monatlich |
| Zeit bis zur ersten Reaktion | Wie lange der Nutzer auf eine erste menschliche, nützliche Antwort wartet | Die Uhr startet, wenn der Incident erfasst wird; stoppt bei der ersten menschlichen Nachricht oder Handlung, die die Meldung aufgreift. Automatische Empfangsbestätigungen und vorformulierte Quittungen sind ausgeschlossen. Geschäftszeit-Uhr angegeben | Minuten oder Geschäftsstunden | Kommunikationsprotokoll des ITSM-Werkzeugs | Service Desk; Incident-Management | Zeitnahes Feedback an den Nutzer, wie in einer Arbeitsvereinbarung | Wöchentlich |
| Zeit bis zur Wiederherstellung | Wie lange Nutzer ohne funktionierenden Service waren | Die Uhr startet bei Beginn der Nutzerauswirkung; stoppt, wenn Nutzer den Service wieder nutzen können, auch durch Umgehung oder Rollback. Eine später behobene Ursache verlängert sie nicht. Berichtet als Median und 95. Perzentil nach Priorität und Service | Minuten oder Stunden | Incident-Datensatz mit Zeitstempeln für Beginn der Auswirkung und Wiederherstellung; Monitoring | Incident-Management | Mittlere Zeit bis zur Wiederherstellung im Sinne von DORA, als Verteilung gelesen (siehe Thema 2.8, DORA-Kennzahlen) | Monatlich |
| Zeit bis zur Lösung | Wie lange der Incident-Datensatz offen war, bis er geschlossen wurde | Die Uhr startet, wenn der Incident erfasst wird; stoppt, wenn er nach Wiederherstellung und Nutzerbestätigung oder fairem Abwarten geschlossen wird. Zeit in „wartet auf Kunden“ wird als gesonderter, berichteter Anteil gezeigt und nicht von der Hauptzahl abgezogen. Berichtet als Median und 95. Perzentil nach Priorität | Stunden oder Geschäftsstunden | Statusverlauf des ITSM-Werkzeugs | Incident-Management | Zykluszeit für ungeplante Arbeit (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) | Monatlich |
| Alter des ältesten offenen Incidents | Wie lange der am längsten offene Incident schon offen ist | Jetzt minus Erfassungszeit, für jeden offenen Incident, mit Auflistung der ältesten nach Priorität. Pausenstatus werden nicht abgezogen | Tage | Liste offener Incidents des ITSM-Werkzeugs | Incident-Management | Alter von Arbeitselementen auf dem Team-Board (siehe Thema 2.1, Flussmaße) | Wöchentlich |
| Anteil aktiver Zeit | Der Anteil der verstrichenen Zeit eines Incidents, der in aktiver Arbeit statt im Warten verbracht wird | Summe der Zeit in aktiven Zuständen / Gesamtzeit von erfasst bis geschlossen, für im Zeitraum geschlossene Incidents. Aktive Zustände sind die, in denen eine Person den Incident bearbeitet; Wartezustände sind in der Definition aufgelistet | Prozent | Statusverlauf des ITSM-Werkzeugs | Incident-Management | Flusseffizienz (siehe Thema 2.2, Durchlaufzeit, Zykluszeit und Flusseffizienz) | Vierteljährlich |
| Anzahl der Neuzuweisungen | Wie oft ein Incident vor der Wiederherstellung das zuständige Team wechselt | Anzahl der Wechsel der Zuweisungsgruppe von erfasst bis wiederhergestellt, zusammengefasst als Median und Anteil der Incidents mit drei oder mehr. Je Service und Priorität gezählt, nie je Agent | Anzahl | Zuweisungsverlauf des ITSM-Werkzeugs | Incident-Management; Service Desk | Übergabezahl (siehe Thema 9.3, Kennzahlen für Zusammenarbeit und Übergaben) | Monatlich |

Zwei Anmerkungen zu den Daten. Erstens ist eine Wiederherstellungszeit nur so gut wie ihr Startzeitpunkt. Viele Incident-Datensätze erfassen, wann jemand das Ticket getippt hat, was dem wahren Beginn der Auswirkung um Stunden hinterherhinken kann. Hat Ihr Werkzeug kein Feld für den Beginn der Auswirkung, fügen Sie eines hinzu und behandeln Sie geschätzte Starts als Schätzungen (siehe Thema 1.5, Datenquellen und Instrumentierung). Zweitens: Halten Sie beim Vergleich von Perioden dieselben Prioritätsdefinitionen, sonst spiegelt die Trendlinie die Umklassifizierung.

## Empfehlungen

### Die Uhren definieren

**1. Schreiben Sie für jede Zeitmessgröße ein Uhrenblatt.** Listen Sie für jede Stufe das Startereignis, das Stoppereignis, die Zustände, die die Uhr pausieren, die Zeitbasis (Kalender oder Geschäftszeit) und die Ausschlüsse auf. Halten Sie es im Kennzahlenregister (siehe Thema 1.4, Governance und Verantwortung für Kennzahlen).

**2. Trennen Sie Wiederherstellung vom Schließen.** Erfassen Sie, wann der Service für Nutzer zurückkam, als eigenen Zeitstempel, getrennt davon, wann das Ticket schloss. Wiederherstellung ist, was Nutzer spüren, und das Schließen umfasst Verifizierung, Dokumentation und Ursachenbehandlung. Teams, die einen Zeitstempel für beides nutzen, werden für vorzeitiges Schließen belohnt oder für sorgfältiges Nachfassen bestraft.

**3. Erfassen Sie den Beginn der Auswirkung, nicht nur die Erfassungszeit.** Bitten Sie Löser einzutragen, wann Nutzer die Wirkung erstmals spürten, wo möglich anhand von Monitoring-Daten. Kennzeichnen Sie das Feld als geschätzt, wenn es das ist. Die Zeit bis zur Erkennung ist ohne es bedeutungslos, und die Wiederherstellungszeit wird durch sein Fehlen verzerrt.

**4. Begrenzen Sie Pausenstatus und berichten Sie ihre Nutzung.** Das Warten auf einen Kunden oder Lieferanten ist manchmal legitim. Erlauben Sie eine kurze, benannte Liste von Pausenstatus, verlangen Sie einen Grund und zeigen Sie den Anteil der Incident-Zeit in jedem. Ein steigender Anteil pausierter Zeit ist ein Zeichen von Drift, nicht von Geschwindigkeit.

### Ehrlich berichten

**5. Ersetzen Sie den Mittelwert durch den Median und ein hohes Perzentil.** Zeigen Sie das 50. und 95. Perzentil für jede Stufe, nach Priorität, als Zeitreihe. Zeigen Sie die Zahl der Incidents hinter jedem Punkt, denn ein Perzentil aus zehn Incidents ist eine schwache Zahl. Wo die Zahlen klein sind, tragen Sie die einzelnen Incidents als Punkte auf und lassen die Zusammenfassungslinie weg.

**6. Zeigen Sie das Alter der ältesten offenen Incidents.** Ein Diagramm geschlossener Incident-Dauern ist blind für die noch offenen Incidents, die die schlimmsten sind. Listen Sie jede Woche die ältesten offenen Incidents nach Priorität. Das ist schwer zu verbessern, ohne die Arbeit abzuschließen, und damit ein nützlicher Begleiter jedes Diagramms der Lösungszeit.

**7. Segmentieren Sie nach Priorität und nach Service.** Eine gemischte Lösungszeit steigt, wenn sich der Mix zu komplexen Incidents verschiebt, auch wenn jede Art Incident schneller bearbeitet wird. Vergleichen Sie innerhalb einer Priorität und innerhalb eines Services und zeigen Sie den Mix neben der Zeit (siehe Thema 3.2, Incident-Aufkommen und Priorität). Ziehen Sie keine Schlüsse aus einem Monat, in dem sich der Mix geändert hat.

**8. Nutzen Sie Kontrollgrenzen, um Signal von Rauschen zu trennen.** Incident-Dauern schwanken von Woche zu Woche stark, ohne dass sich etwas ändert. Eine Kontrollkarte mit aus einer stabilen Periode berechneten Grenzen zeigt, wann eine Verschiebung groß genug ist, um erklärt zu werden (siehe Thema 1.6, Statistische Kompetenz für Servicekennzahlen).

### Geschwindigkeit mit Dauerhaftigkeit koppeln

**9. Zeigen Sie Wiedereröffnungs- und Wiederkehrraten neben jeder Zeitmessgröße.** Die Wiedereröffnungsrate ist der Anteil der Incidents, die innerhalb eines genannten Fensters wieder eröffnet wurden. Wiederkehr ist, dass derselbe Service und dasselbe Symptom innerhalb eines Fensters wieder auftreten. Sinkt die Wiederherstellungszeit, während die Wiederkehr steigt, wendet das Team schnelle Flicken an. Leiten Sie wiederkehrende Incidents an das Problemmanagement (siehe Thema 4.1, Kennzahlen für das Problemmanagement).

**10. Messen Sie Warten und Übergaben, denn dort geht die Zeit hin.** Bei den meisten Services ist ein großer Teil der verstrichenen Zeit eines Incidents Warten auf eine Person, eine Entscheidung oder einen Lieferanten statt Arbeiten. Anteil aktiver Zeit und Zahl der Neuzuweisungen zeigen, wo hinzusehen ist. Die Abhilfe für eine lange Lösungszeit ist oft eine klarere Leitungsregel oder eine gemeinsame Bereitschaft, nicht schnelleres Tippen.

**11. Nutzen Sie Ziele auf Perzentilen, mit einem Menschen in der Schleife.** Brauchen Sie ein Ziel, formulieren Sie es als Perzentilzusage für eine Priorität, etwa „neun von zehn Priorität-2-Incidents innerhalb einer genannten Zeit wiederhergestellt“, und stimmen Sie es mit den Menschen ab, die es erfüllen werden. Behandeln Sie Verfehlungen als Fragen an das System, nicht als Fehler der Person im Bereitschaftsdienst (siehe Thema 5.1, Kennzahlen für SLA, OLA und XLA).

**12. Fragen Sie Nutzer nach dem Erleben.** Eine kurze Umfrage an einer Stichprobe geschlossener Incidents und das Lesen der Kommentare sagen, ob die Zahl dazu passt, wie sich das Warten anfühlte. Nutzern ist oft zeitnahe Kommunikation wichtiger als die genaue Minute der Wiederherstellung (siehe Thema 6.1, Kennzahlen für Kundenzufriedenheit).

## Manipulationsvektoren und Leitplanken

| Kennzahl | Wie sie manipuliert wird | Gekoppelte Leitplanken-Kennzahl oder -Praktik |
| --- | --- | --- |
| Zeit bis zur Erkennung | Den Beginn der Auswirkung später ansetzen, als er war; Alarmschwellen erweitern, damit weniger Fehler als Incidents zählen; nur Incidents zählen, die der Monitor aufgefangen hat | Anteil der Incidents, die zuerst von Nutzern statt vom Monitoring gemeldet wurden; regelmäßiger Abgleich der Schätzungen des Auswirkungsbeginns mit Monitoring-Daten |
| Zeit bis zur Quittierung | Automatisch zuweisen oder automatisch quittieren, um die Uhr zu stoppen; den Alarm quittieren und dann nichts tun | Zeit bis zur ersten Reaktion und Zeit bis zur Wiederherstellung für dieselben Incidents; Stichprobe quittierter Alarme ohne spätere Aktivität |
| Zeit bis zur ersten Reaktion | Eine vorformulierte oder einwortige Antwort senden, um die Uhr zu stoppen | Eine Stichprobe erster Antworten auf Substanz prüfen; wiederholte Kontakte und Umfragekommentare |
| Zeit bis zur Wiederherstellung | Den Service für wiederhergestellt erklären, bevor Nutzer ihn nutzen können; durch Unterdrücken des Symptoms wiederherstellen; Ausfälle als geplante Wartung erfassen | Wiederkehr innerhalb eines Fensters; vom Nutzer berichtete Auswirkung nach der Wiederherstellungszeit; Anteil der nachträglich umetikettierten Incidents |
| Zeit bis zur Lösung | Tickets in „wartet auf Kunden“ oder „in Wartestellung“ verschieben; nach einem einzigen Kontaktversuch schließen; einen Incident in Kinder zerlegen, um den übergeordneten früh zu schließen | Zeitanteil in Pausenstatus; Wiedereröffnungsrate; Alter des ältesten offenen Incidents; eine Stichprobe von Abschlussnotizen lesen |
| Alter des ältesten offenen Incidents | Das älteste Ticket schließen und neu erfassen; es als Problem oder Anfrage umklassifizieren, um es von der Liste zu nehmen | Duplikate mit Originalen verknüpfen und das verknüpfte Alter berichten; Zahl der pro Periode in Probleme oder Anfragen umgewandelten Incidents |
| Anteil aktiver Zeit | Kurze, bedeutungslose Arbeit protokollieren, um Zeit als aktiv zu markieren; in aktive Zustände wechseln, ohne Aufwand | Aktive Zeit mit Ergebnissen wie der Wiederherstellungszeit vergleichen; Stichprobe von Arbeitsnotizen |
| Anzahl der Neuzuweisungen | Unter demselben Team wieder eröffnen, statt weiterzugeben; Arbeit über einen Nebenkanal weitergeben, sodass das Werkzeug keine Übergabe zeigt | Zeit bis zur Wiederherstellung und Nutzerzufriedenheit; regelmäßige Beobachtung, wie Arbeit zwischen Teams wandert |

Ein gesunder Befund zeigt Mediane und Auslauf-Perzentile, die sich gemeinsam bewegen, einen kleinen und stabilen Anteil pausierter Zeit, wenige zuerst von Nutzern gemeldete Incidents, fallende Wiederkehr und Umfragekommentare, die zu den Ticketdaten passen. Behandeln Sie eine Schlagzeilen-Verbesserung, die allein eintrifft, als Anstoß für ein Manipulations-Review.

## Abwägungen: Vor- und Nachteile

| Ansatz | Stärke | Schwäche |
| --- | --- | --- |
| Mittlere Zeit bis zur Wiederherstellung | Vertraut; eine Zahl; leicht zu trenden | Von wenigen langen Incidents dominiert; verbirgt echte Veränderung; schlecht bei kleinen Stichproben |
| Median plus hohes Perzentil | Beschreibt das typische und das unglückliche Erleben; robust gegen Ausreißer | Braucht genug Incidents; zwei Zahlen zu erklären |
| Jeden Incident auftragen | Zeigt die ganze Form und die Ausreißer; ehrlich bei geringem Volumen | Bei hohem Volumen schwerer zu lesen; braucht Moderation |
| Ziele nach Priorität | Klare Erwartungen; stützt Verträge und Eskalation | Lädt zu Umklassifizierung und Uhrenpausen ein; kann Aufwand an die Zielgrenze treiben |
| Messgrößen der Ticketuhr | Billig, in jedem ITSM-Werkzeug verfügbar | Messen das Ticket, nicht das Erleben des Nutzers; empfindlich gegenüber dem Status-Workflow |
| Auswirkungsbasierte Messgrößen | Nah an dem, was Nutzer spüren; robust gegen Ticket-Tricks | Brauchen Monitoring-Daten und ein Feld für den Beginn der Auswirkung; schwerer zu prüfen |

Die pragmatische Antwort ist, die Ticketuhr zu behalten, weil jedes Werkzeug sie hat, dort einen auswirkungsbasierten Zeitstempel der Wiederherstellung hinzuzufügen, wo das Monitoring es erlaubt, und für beide Verteilungen zu nutzen. Der Mittelwert ist als grobe Beschreibung einer einzelnen, stabilen, großen Menge ähnlicher Incidents hinnehmbar und sollte nie die einzige Zahl auf der Seite sein.

## Fragen für die Diskussion im Team

**1. Welche Stufe eines Incidents dauert bei uns am längsten, und woher wissen wir es?**
Zeichnen Sie die Incident-Zeitleiste mit den Stufen vom Beginn der Auswirkung bis zum Schließen an eine Tafel. Nehmen Sie die letzten zehn Incidents und markieren Sie, wie lange jede Stufe dauerte, anhand der Werkzeugdaten und der Erinnerung der Löser. Die Moderation sollte nach der Stufe suchen, in der sich die Zeit häuft, oft Warten auf eine Übergabe oder Entscheidung und nicht die technische Arbeit. Einigen Sie sich, welche Stufe zuerst Aufmerksamkeit verdient.

**2. Wo startet und stoppt unsere Uhr, und wer hat das entschieden?**
Bitten Sie jede Person zu sagen, wann ein Incident ihrer Meinung nach „begann“ und wann er „endete“. Die Antworten werden sich unterscheiden, und die Unterschiede sind der Befund. Vergleichen Sie sie mit den Feldern im Werkzeug und dem Status-Workflow. Halten Sie die vereinbarten Definitionen im Kennzahlenregister fest und vermerken Sie, wo das Werkzeug sie noch nicht stützen kann.

**3. Was würden unsere Mediane und 95. Perzentile zeigen, was unser Mittelwert verbirgt?**
Berechnen Sie vor dem Meeting Mittelwert, Median und 95. Perzentil der Incidents des letzten Quartals nach Priorität. Zeigen Sie sie nebeneinander und tragen Sie die Dauern auf. Fragen Sie, was das Team aus jedem schließen würde. Die Moderation sollte bemerken, ob ein oder zwei Incidents den Mittelwert bewegen, und besprechen, ob das Team glaubt, dass der Median das Warten eines typischen Nutzers darstellt.

**4. Wie viel Zeit verbringen wir mit Warten statt mit Arbeiten, und warum?**
Wählen Sie drei lange Incidents und verfolgen Sie ihren Statusverlauf. Zählen Sie die Stunden in aktiven Zuständen und die Stunden in Wartezuständen und notieren Sie, wer oder was erwartet wurde. Fragen Sie, welche Wartezeiten sich durch eine Entscheidung, einen klareren Eskalationsweg oder eine gemeinsame Bereitschaft verkürzen ließen.

**5. Wenn wir gebeten würden, die Lösungszeit um ein Viertel zu senken, wie würden wir es tun, ohne Nutzern zu helfen?**
Das ist das Manipulations-Review in Kleinform. Listen Sie jeden Zug auf, der die Zahl verbessern würde, ohne den Service zu verbessern, etwa die Uhr zu pausieren, früh zu schließen oder Prioritäten umzuetikettieren. Fragen Sie bei jedem Zug, ob eine Leitplanke ihn auffangen würde. Die Liste ist der Anfang Ihrer Spalte der Manipulationsvektoren und zeigt, wo Definitionen zu schärfen sind.

**6. Woher wissen wir, dass eine schnellere Wiederherstellung echt war?**
Fragen Sie nach Belegen: Wiederkehr, Wiedereröffnung, Nutzerkommentare und jeder spätere Incident mit demselben Symptom. Sehen Sie sich eine jüngere Verbesserung an und fragen Sie, ob sie einen Monat später noch hielt. Die Moderation sollte die Gruppe zu dauerhaften Korrekturen lenken. Entscheiden Sie zum Schluss, welche Dauerhaftigkeitsmessgröße ins Dashboard kommt.

## Vier Perspektiven

### Produkt- und Lieferteams

Produktteams, die ihre eigenen Services betreiben, sehen Incident-Zeit als Kosten ungeplanter Arbeit, die geplante Arbeit verdrängt. Verfolgen Sie, wie viel jedes Flusszeitraums von Incidents eingenommen wird, und behandeln Sie wiederkehrende Incidents als Backlog-Elemente für das zuständige Team. Release-Praktiken, die Rollback schnell machen, verkürzen die Wiederherstellung, Incident-Zeit ist also teils eine Lieferkennzahl (siehe Thema 2.9, Betriebsarbeit und ungeplante Arbeit).

### Service- und Betriebsteams

Betriebsteams besitzen die Uhren und spüren den Druck der Ziele. Sie sollten das Uhrenblatt veröffentlichen, die Nutzung von Pausenstatus prüfen, Mediane und Auslauf-Perzentile nach Priorität berichten und eine wöchentliche Liste der ältesten offenen Incidents führen. Bereitschaftslast und Alarmqualität prägen Quittierungs- und Erkennungszeiten, sehen Sie sie also zusammen an (siehe Thema 5.7, Kennzahlen für Toil und Bereitschaftsdienst).

### Führung und Governance

Führungskräfte sollten fragen, welche Stufe am langsamsten ist und was dagegen getan wird, nicht, warum eine Zahl rot ist. Sie sollten Perzentilberichte, eine Dauerhaftigkeitsmessgröße neben jeder Geschwindigkeitsmessgröße und eine Erklärung bei Definitionsänderungen erwarten. Die Finanzierung von Monitoring, Runbooks und Problemarbeit zahlt sich oft stärker aus als Druck auf Löser, weil sie die Verzögerung verringert, die Löser nicht kontrollieren können.

### Kunden und Nutzer

Nutzer erleben das Warten, die Qualität der Kommunikation und ob das Problem wiederkommt. Die Stufennamen sehen sie selten. Geben Sie ihnen eine ehrliche erste Reaktion, sagen Sie ihnen, was sie erwarten können, und aktualisieren Sie sie nach Plan. Ihre Umfragekommentare und wiederholten Kontakte sind die beste Prüfung, ob die Ticketuhr die Wahrheit sagt.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein mittelgroßer Online-Händler betreibt eine Bestellplattform, einen Kundenkonto-Service und ein internes Lagersystem. Produktteams besitzen ihre Services und teilen sich eine Bereitschaftsrotation mit einer kleinen Betriebsgruppe. Alle Zahlen in diesem Beispiel sind illustrativ.

Die Führung setzt ein Ziel einer „mittleren Lösungszeit unter vier Stunden“ für Priorität-2-Incidents. Im ersten Quartal zeigt das Dashboard einen Mittelwert von 3,8 Stunden, und das Ziel scheint erreicht. Lagermitarbeitende sagen, manche Ausfälle schienen den ganzen Tag zu dauern. Die Betriebsleiterin trägt die 41 Priorität-2-Incidents (illustrativ) des Quartals auf und findet einen Median von 1,5 Stunden und ein 95. Perzentil von 11 Stunden. Drei Incidents machen den größten Teil des langen Auslaufs aus.

Sie verfolgt die drei langen Incidents. Jeder verbrachte die meiste Zeit in „wartet auf Lieferant“ oder „wartet auf Kunden“. Bei zweien war das Ticket geschlossen und als neuer Incident neu erfasst worden, als das Original „verletzt“ wurde, was die Uhr zurücksetzte. Ein dritter umfasste vier Neuzuweisungen zwischen Teams über zwei Tage. Eine Stichprobe von Abschlussnotizen zeigt, dass 6 von 30 geprüften Tickets (illustrativ) nach einem einzigen Versuch, den Nutzer zu erreichen, geschlossen wurden.

Das Team nimmt vier Änderungen vor. Es fügt dem Incident-Formular ein Feld für den Beginn der Auswirkung und einen Zeitstempel der Wiederherstellung hinzu. Es berichtet Median, 85. und 95. Perzentil nach Priorität und jede Woche die ältesten offenen Incidents. Es zeigt den Zeitanteil in Pausenstatus und die Wiederkehrrate auf derselben Seite. Und es verknüpft neu erfasste Tickets mit ihren Originalen, damit das Alter übernommen wird.

Beim nächsten Review ist der Mittelwert in der Schlagzeile auf 4,6 Stunden gestiegen, weil die neu erfassten Tickets nun voll zählen. Das Team erklärt der Führung den Anstieg als Korrektur. Das 95. Perzentil und das älteste offene Ticket sind nun die Zahlen, an denen sie arbeiten, und die Zahl der Neuzuweisungen weist auf eine Routing-Lücke zwischen dem Bestellservice und dem Lagersystem hin. Sie vereinbaren, einen gemeinsamen Bereitschafts-Alias hinzuzufügen und die Wirkung über das nächste Quartal zu überprüfen, statt sofort ein neues Ziel zu setzen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Eine kurze Feedbackschleife nach jedem bedeutenden Incident, mit eingebundenen Stakeholdern, hilft dem Team, seine Uhren zu verbessern. Zu beachten ist, dass Reaktionszeit-Ziele schnelle, leere Quittierungen erzeugen; koppeln Sie sie also mit der Zeit bis zur Wiederherstellung.

### KI

KI kann die erste Reaktion beschleunigen, Behebungen vorschlagen und Incidents zusammenfassen, was die Zeit bis zur ersten Reaktion verkürzt, während sich die Zeit bis zur Wiederherstellung womöglich nicht ändert. Berichten Sie beide, dazu den Anteil der Incidents, bei denen ein KI-Vorschlag genutzt wurde, und den Anteil, der wiederkehrte. Zu beachten ist, dass eine schnelle, falsche KI-Antwort Arbeit hinzufügt; zählen Sie also wieder eröffnete Incidents.

### Automatisierung

Berechnen Sie jede Uhr aus Ereigniszeitstempeln im Werkzeug, mit erfassten Pausengründen, und messen Sie automatische Diagnose und Behebung an falschen Handlungen ebenso wie an gesparter Zeit. Zu beachten ist, dass eine Automatisierung, die den Service wiederherstellt, ohne die Ursache zu protokollieren, den Problemdatensatz verbirgt.

### Analytik

Berichten Sie Median und ein hohes Perzentil für jede Uhr mit dem ältesten offenen Incident und zeigen Sie, wie viele Incidents dahinterstehen. Die Entscheidung, die dies untermauert, ist, wo Nutzer am längsten warten. Zu beachten ist, dass Uhrendefinitionen sich zwischen Werkzeugen unterscheiden; schreiben Sie Start- und Stoppereignisse also auf, bevor Sie Teams vergleichen.

## Branchenperspektive

**Startup.** Das Volumen ist gering, daher sind Perzentile verrauscht, und ein Diagramm jedes Incidents ist besser als eine Zusammenfassung. Oft erkennt, reagiert und stellt wieder her dieselbe Person, die Stufentrennung zählt also weniger als eine schriftliche Zeitleiste jedes Incidents. Fügen Sie jedem Post-Incident-Bericht einen Vermerk zum Beginn der Auswirkung hinzu und berechnen Sie einfache Mediane, sobald es genug Incidents gibt.

**Kleinunternehmen.** Ein Managed-Service-Provider oder ein einzelner IT-Generalist bearbeitet möglicherweise Incidents, und der Vertrag des Providers kann Reaktions- und Lösungsziele definieren. Lesen Sie die Vertragsuhren sorgfältig, denn sie unterscheiden sich oft vom Erleben Ihrer Nutzer. Führen Sie ein kurzes Protokoll von Beginn der Auswirkung und Wiederherstellung für die Incidents, auf die es ankommt, und bitten Sie den Provider um die zugrunde liegenden Datensätze, denn eine Zusammenfassungszahl verbirgt die Uhren.

**Großunternehmen.** Viele Teams, Lieferanten und Prioritätsschemata machen Vergleich verlockend und irreführend. Standardisieren Sie Uhrendefinitionen und Prioritätsbedeutungen in der Organisation, veröffentlichen Sie Verteilungen statt Mittelwerte und segmentieren Sie nach Service. Achten Sie auf Drift der Pausenstatus und Umklassifizierung, die mit der Zahl der Berichtsebenen wachsen.

**Behörden und öffentlicher Sektor.** Verträge, gesetzliche Berichterstattung und Prüfung können die Uhren und Prioritätsdefinitionen festlegen. Erfüllen Sie diese Pflichten wie geschrieben und führen Sie daneben eine zweite, nutzerorientierte Sicht, damit Compliance kein schlechtes Erleben verbirgt. Seien Sie offen über Definitionen und über Korrekturen, wenn sich eine Uhrenregel ändert (siehe Thema 8.5, Regulatorische und behördliche Berichterstattung).

## Business Case: Motive, ROI und TCO

Die Kosten dieses Themas sind überwiegend Entwurf und Disziplin. Es braucht einige Stunden, Uhrenblätter zu schreiben, etwas Konfiguration, um ein Feld für den Beginn der Auswirkung und einen Zeitstempel der Wiederherstellung hinzuzufügen, und bescheidenen Aufwand, Perzentilberichte zu bauen. Wo das ITSM-Werkzeug oder eine Monitoring-Plattform die Zeitstempel bereits hält, ist die Extraktion eine einmalige Aufgabe. Die laufenden Kosten sind ein monatliches Review und eine vierteljährliche Stichprobe geschlossener Incidents.

Der Ertrag kommt aus besseren Entscheidungen und weniger Nacharbeit. Verteilungsberichte zeigen, ob eine Verbesserung funktionierte, und Stufenberichte lenken Aufwand auf die echte Verzögerung, etwa Übergaben, Erkennungslücken oder Lieferantenwartezeiten. Dauerhaftigkeitsmessgrößen verhindern die falsche Ersparnis schneller Flicken, die als wiederkehrende Incidents zurückkommen. Messen Sie ein Quartal lang Ihre eigene Baseline, nehmen Sie eine Änderung vor und vergleichen Sie Verteilungen.

## Anti-Muster und Fallstricke

- **Ein einzelnes MTTR im Führungs-Dashboard.** Der Mittelwert schiefer Daten führt in die Irre. Zeigen Sie Median, ein hohes Perzentil und den ältesten offenen Incident und sagen Sie, wie viele Incidents hinter jedem Punkt stehen.
- **Prioritäten und Services vermischen.** Eine Mix-Verschiebung sieht wie eine Leistungsänderung aus. Segmentieren Sie nach Priorität und Service und zeigen Sie den Mix.
- **Die Uhr mit Pausenstatus stoppen.** Zeit verschwindet in „wartet“ und „in Wartestellung“. Listen Sie die erlaubten Status auf, verlangen Sie Gründe und berichten Sie den Zeitanteil in jedem.
- **Tickets schließen und neu erfassen.** Es setzt das Alter zurück und verbirgt den langen Incident. Verknüpfen Sie neu erfasste Tickets mit ihren Originalen und berichten Sie das verknüpfte Alter.
- **Einen Zeitstempel für Wiederherstellung und Schließen nutzen.** Teams werden dann für vorzeitiges Schließen belohnt oder für sorgfältiges Nachfassen bestraft. Erfassen und berichten Sie beides.
- **Agenten oder Ingenieure nach Lösungszeit ordnen.** Es belohnt leichte Tickets und Herauspicken und entmutigt Hilfe und Eskalation. Berichten Sie nur nach Team und Service.
- **Ziele ohne Dauerhaftigkeitsmessgrößen.** Ein schneller Flicken, der morgen versagt, sieht wie Erfolg aus. Zeigen Sie Wiederkehr- und Wiedereröffnungsrate neben jedem Ziel.
- **Kleine Stichproben als Trends behandeln.** Ein 95. Perzentil aus einer Handvoll Incidents ist geraten. Tragen Sie einzelne Incidents auf und warten Sie auf mehr Daten, bevor Sie eine Linie ziehen.

## Reifegradmodell

| Dimension | 1 Initiieren | 2 Entwickeln | 3 Standardisieren | 4 Steuern | 5 Orchestrieren |
| --- | --- | --- | --- | --- | --- |
| Definitionen und Uhren | Jeder misst anders; eine „Lösungszeit“ | Uhren für einige Teams aufgeschrieben; Stufen teils getrennt | Ein Uhrenblatt für alle Stufen, mit aufgelisteten Pausenstatus | Definitionen überprüft und Änderungen mit Gründen protokolliert | Definitionen mit Lieferanten und Kunden abgestimmt und überarbeitet, wenn sie keine Entscheidungen mehr untermauern |
| Datenqualität | Handnotizen; Beginn der Auswirkung unbekannt | Werkzeug-Zeitstempel für Ticket erfasst und geschlossen | Beginn der Auswirkung und Wiederherstellung für prioritäre Incidents erfasst | Daten stichprobenartig geprüft; Schätzungen markiert | Monitoring- und ITSM-Daten automatisch verbunden und teamübergreifend vertrauenswürdig |
| Statistische Praxis | Nur Mittelwert | Mittelwert und Median gezeigt | Median und ein hohes Perzentil nach Priorität und Service | Kontrollgrenzen genutzt; Dauerhaftigkeitsmessgrößen gekoppelt | Verteilungen mit dem Nutzererleben verknüpft und genutzt, um Investitionen zu entscheiden |
| Nutzung in der Verbesserung | Zahlen dienen dazu, Einzelnen nachzujagen | Das Team sieht seine eigenen Zahlen | Das Team überprüft monatlich Stufenzeiten und Warten | Langsame Stufen führen zu finanzierter Verbesserungsarbeit | Verbesserung wird über Teams und Lieferanten geteilt, und die Messgrößen entwickeln sich |

## Checkliste

- [ ] Jede Stufe (erkennen, quittieren, reagieren, wiederherstellen, lösen) hat eine schriftliche Start-, Stopp- und Pausenregel.
- [ ] Beginn der Auswirkung und Wiederherstellungszeit werden für prioritäre Incidents als getrennte Felder erfasst.
- [ ] Berichte zeigen Median und ein hohes Perzentil, nach Priorität und nach Service.
- [ ] Die Zahl der Incidents hinter jedem berichteten Punkt wird gezeigt.
- [ ] Die ältesten offenen Incidents werden wöchentlich aufgelistet.
- [ ] Pausenstatus sind eine kurze, benannte Liste, und ihr Zeitanteil wird berichtet.
- [ ] Wiedereröffnungs- und Wiederkehrrate werden neben jeder Zeitmessgröße gezeigt.
- [ ] Neu erfasste Tickets sind mit ihren Originalen verknüpft, damit das Alter übernommen wird.
- [ ] Keine Zeitmessgröße wird genutzt, um einzelne Agenten oder Ingenieure zu ordnen.
- [ ] Jedes Quartal wird eine Stichprobe geschlossener Incidents auf Ehrlichkeit gelesen.
- [ ] Kundenkommentare aus Umfragen werden neben den Ticketdaten gelesen.

## KI-Prompts

**Mittelwert und Perzentile unserer Incident-Dauern vergleichen.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Ein Uhrenblatt für unsere Incident-Zeitmessgrößen entwerfen.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Herausfinden, wohin die verstrichene Zeit in einigen langen Incidents geht.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Ein Manipulations-Review unserer Incident-Zeitziele durchführen.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## KI-Skills

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): zu verwenden, um die verwandten Themen und gekoppelten Leitplanken für eine Incident-Zeitmessgröße zu finden, die Sie berichten wollen.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): zu verwenden, um zu prüfen, dass eine Änderung an diesem Thema Vorlage, Manipulationstabelle und Querverweise konsistent hält.

## Wichtigste Erkenntnisse

- Ein Incident hat Stufen, und jede Stufe hat ihre eigene Uhr, ihren Eigner und ihre Abhilfe. Benennen Sie die Stufe, die Sie messen.
- Incident-Dauern sind schief, also führt der Mittelwert in die Irre. Berichten Sie Median, ein hohes Perzentil und das Alter des ältesten offenen Incidents.
- Schreiben Sie auf, wo jede Uhr startet und stoppt, erfassen Sie Beginn der Auswirkung und Wiederherstellung getrennt vom Schließen des Tickets und begrenzen Sie Pausenstatus.
- Koppeln Sie jede Geschwindigkeitsmessgröße mit einer Dauerhaftigkeitsmessgröße wie Wiederkehr- und Wiedereröffnungsrate.
- Beschreiben Sie Teams und Services, nie einzelne Agenten, und lesen Sie eine Stichprobe geschlossener Incidents, um zu prüfen, dass die Zahlen ehrlich sind.

## Quellen und weiterführende Literatur

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
